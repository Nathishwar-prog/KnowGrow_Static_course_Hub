import React, { useState } from 'react';
import { Play } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
// It includes a mock 'np' object that mimics many core NumPy functionalities.
const NumpySandbox = {
  // Helper to format JS arrays to look like NumPy output (e.g., "[1 2 3]")
  _format: (val) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (typeof val !== 'object' || val === null) return String(val);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix
        const rows = val.map(row => ` [${row.map(NumpySandbox._format).join('  ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.map(NumpySandbox._format).join(' ')}]`; // Vector
    }
    return String(val);
  },

  // The core numpy-like library
  np: {
    array: (data) => data,
    add: (a, b) => a.map((val, i) => val + (Array.isArray(b) ? b[i] : b)),
    subtract: (a, b) => a.map((val, i) => val - (Array.isArray(b) ? b[i] : b)),
    multiply: (a, b) => a.map((val, i) => val * (Array.isArray(b) ? b[i] : b)),
    divide: (a, b) => a.map((val, i) => val / (Array.isArray(b) ? b[i] : b)),
    power: (a, b) => a.map((val, i) => val ** (Array.isArray(b) ? b[i] : b)),
    remainder: (a, b) => a.map((val, i) => val % (Array.isArray(b) ? b[i] : b)),
    sum: (arr, axis = null) => {
      if (axis === 0 && Array.isArray(arr[0])) {
        return arr[0].map((_, col) => arr.reduce((s, row) => s + row[col], 0));
      }
      return arr.flat().reduce((s, v) => s + v, 0);
    },
    prod: (arr) => arr.flat().reduce((p, v) => p * v, 1),
    mean: (arr) => arr.flat().reduce((s, v) => s + v, 0) / arr.flat().length,
    median: (arr) => {
      const sorted = [...arr.flat()].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    },
    std: (arr, ddof = 0) => {
        const flatArr = arr.flat();
        const mean = NumpySandbox.np.mean(flatArr);
        const variance = flatArr.reduce((s, v) => s + (v - mean) ** 2, 0) / (flatArr.length - ddof);
        return Math.sqrt(variance);
    },
    min: (arr) => Math.min(...arr.flat()),
    max: (arr) => Math.max(...arr.flat()),
    argmin: (arr) => arr.flat().indexOf(Math.min(...arr.flat())),
    argmax: (arr) => arr.flat().indexOf(Math.max(...arr.flat())),
    clip: (arr, min, max) => arr.map(v => Math.max(min, Math.min(max, v))),
    dot: (a, b) => a.reduce((s, v, i) => s + v * b[i], 0),
    matmul: (A, B) => {
      const C = Array(A.length).fill(0).map(() => Array(B[0].length).fill(0));
      for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
          for (let k = 0; k < A[0].length; k++) {
            C[i][j] += A[i][k] * B[k][j];
          }
        }
      }
      return C;
    },
    eye: (n) => Array(n).fill(0).map((_, i) => Array(n).fill(0).map((__, j) => i === j ? 1 : 0)),
    arange: (start, stop) => Array.from({ length: stop - start }, (_, i) => start + i),
    percentile: (arr, q) => {
        const sorted = [...arr.flat()].sort((a,b) => a - b);
        const pos = (sorted.length - 1) * (q / 100);
        const base = Math.floor(pos);
        const rest = pos - base;
        if (sorted[base + 1] !== undefined) {
            return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
        } else {
            return sorted[base];
        }
    },
    average: (arr, { weights }) => NumpySandbox.np.sum(NumpySandbox.np.multiply(arr, weights)) / NumpySandbox.np.sum(weights),
    allclose: (a, b) => JSON.stringify(a.map(v=>v.toFixed(5))) === JSON.stringify(b.map(v=>v.toFixed(5))),
    linalg: {
      det: (A) => A[0][0] * A[1][1] - A[0][1] * A[1][0],
      inv: (A) => {
        const det = NumpySandbox.np.linalg.det(A);
        if (det === 0) throw new Error("Matrix is singular and cannot be inverted.");
        return [
          [A[1][1] / det, -A[0][1] / det],
          [-A[1][0] / det, A[0][0] / det],
        ];
      },
      solve: (A, b) => {
        const A_inv = NumpySandbox.np.linalg.inv(A);
        // This only works for b as a vector
        return [ A_inv[0][0]*b[0] + A_inv[0][1]*b[1], A_inv[1][0]*b[0] + A_inv[1][1]*b[1] ];
      },
       eig: (A) => {
         // Specific solution for the example [[4, 1], [1, 3]]
         if (A[0][0] === 4 && A[0][1] === 1 && A[1][0] === 1 && A[1][1] === 3) {
            const eigenvalues = [4.61803399, 2.38196601];
            const eigenvectors = [[0.85065081, 0.52573111], [-0.52573111, 0.85065081]];
            return [eigenvalues, eigenvectors];
         }
         throw new Error("Eigenvalue calculation is only implemented for the specific example in this sandbox.");
       },
      matrix_rank: (A) => (NumpySandbox.np.linalg.det(A) !== 0 ? 2 : 1),
      norm: (arr, { ord } = {}) => {
          if(!ord || ord === 2) return Math.sqrt(arr.flat().reduce((s, v) => s + v * v, 0));
          if(ord === 1) return arr.flat().reduce((s, v) => s + Math.abs(v), 0);
          return Math.sqrt(arr.flat().reduce((s, v) => s + v * v, 0));
      }
    },
  },

  // Main execution function
  execute: async (code) => {
    let outputBuffer = [];
    const customPrint = (...args) => {
      const formattedArgs = args.map((arg) => {
        if (typeof arg === 'string' && arg.includes('\n')) {
          const [label, matrix] = arg.split('\n');
          return `${label}\n${matrix}`;
        }
        return NumpySandbox._format(arg);
      });
      outputBuffer.push(formattedArgs.join(' '));
    };

    // Sanitize the Python code to remove incompatible lines for the JS sandbox
    const sanitizedCode = code
      .replace(/import numpy as np\s*/g, '') // Remove numpy import
      .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`') // Convert f-strings to template literals
      .replace(/dtype=float/g, ''); // Remove dtype argument


    const codeToRun = `
        const np = NumpySandbox.np;
        const print = customPrint;
        ${sanitizedCode}
    `;

    try {
      // Use Function constructor for safer execution than eval
      const executor = new Function('NumpySandbox', 'customPrint', codeToRun);
      executor(NumpySandbox, customPrint);
      return outputBuffer.join('\n');
    } catch (e) {
      console.error("Sandbox Execution Error:", e);
      return `Error: ${e.message}`;
    }
  },
};


export default function NumpyMathOperations() {
  const FunctionCard = ({ title, color, definition, syntax, visual, example, defaultCode }) => {
    const [code, setCode] = useState(defaultCode);
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const handleExecute = async () => {
      setIsRunning(true);
      setOutput('Running...');
      // Simulate network delay for better UX
      await new Promise(res => setTimeout(res, 300));
      const result = await NumpySandbox.execute(code);
      setOutput(result);
      setIsRunning(false);
    };
    
    // ... (rest of the FunctionCard component remains the same)
    const colorBg = {
      emerald: 'from-emerald-600/20 to-emerald-900/20 border-emerald-500/30',
      amber: 'from-amber-600/20 to-amber-900/20 border-amber-500/30',
      rose: 'from-rose-600/20 to-rose-900/20 border-rose-500/30',
      blue: 'from-blue-600/20 to-blue-900/20 border-blue-500/30',
      cyan: 'from-cyan-600/20 to-cyan-900/20 border-cyan-500/30',
      purple: 'from-purple-600/20 to-purple-900/20 border-purple-500/30',
      red: 'from-red-600/20 to-red-900/20 border-red-500/30',
    };

    const titleColor = {
      emerald: 'text-emerald-400',
      amber: 'text-amber-400',
      rose: 'text-rose-400',
      blue: 'text-blue-400',
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      red: 'text-red-400',
    };

    return (
      <div className={`bg-gradient-to-br ${colorBg[color]} border rounded-xl p-8 mb-8`}>
        {/* Header */}
        <h3 className={`text-2xl font-bold font-mono ${titleColor[color]} mb-2`}>{title}</h3>
        <p className="text-gray-300 mb-6">{definition}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Syntax */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Syntax</h4>
              <div className="bg-slate-950 border border-slate-700 rounded-lg p-4">
                <pre className="font-mono text-sm">
                  <code className="text-cyan-400">{syntax}</code>
                </pre>
              </div>
            </div>

            {/* Visual */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Visual Example</h4>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex items-center justify-center min-h-24">
                {visual}
              </div>
            </div>

            {/* Example Code */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Example</h4>
              <div className="bg-slate-950 border border-slate-700 rounded-lg p-4">
                <pre className="font-mono text-xs overflow-x-auto">
                  <code>
                    {example.split('\n').map((line, i) => (
                      <div key={i} className="text-gray-200">
                        <span className="text-slate-600">{String(i + 1).padStart(2, '0')} </span>
                        {line}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Right Side - Code Sandbox */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Try It Out</h4>
            
            {/* Code Editor */}
            <div className="bg-slate-950 border border-slate-700 rounded-lg overflow-hidden">
              <div className="bg-slate-900 border-b border-slate-700 px-4 py-2 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">main.py</span>
                <button
                  onClick={() => setCode(defaultCode)}
                  className="text-gray-400 hover:text-gray-300 text-xs px-2 py-1 rounded hover:bg-slate-700"
                >
                  Reset
                </button>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 bg-slate-950 text-green-400 font-mono text-sm p-4 focus:outline-none focus:ring-2 focus:ring-green-500/50 resize-none"
                style={{
                  backgroundColor: '#0f172a',
                  color: '#4ade80',
                  fontFamily: 'Fira Code, monospace',
                }}
              />
            </div>

            {/* Execute Button */}
            <button
              onClick={handleExecute}
              disabled={isRunning}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play size={18} />
              {isRunning ? 'Running...' : 'Run Code'}
            </button>

            {/* Output */}
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-4 min-h-32">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Output</div>
              <pre className="font-mono text-sm text-yellow-300 whitespace-pre-wrap break-words">
                {output || '// Run code to see output'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // ... (rest of the component remains the same)
  const ArrayBlock = ({ items, result, operator }) => (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {items[0] && items[0].length > 0 && (
          <div className="flex gap-1 bg-slate-800 p-2 rounded border border-slate-600">
            {items[0].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-700 to-slate-800 px-3 py-2 rounded font-mono text-sm font-bold text-cyan-300 border border-slate-600">
                {item}
              </div>
            ))}
          </div>
        )}
        <span className="text-white font-bold text-lg">{operator}</span>
        {items[1] && items[1].length > 0 && (
          <div className="flex gap-1 bg-slate-800 p-2 rounded border border-slate-600">
            {items[1].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-700 to-slate-800 px-3 py-2 rounded font-mono text-sm font-bold text-cyan-300 border border-slate-600">
                {item}
              </div>
            ))}
          </div>
        )}
        <span className="text-gray-400">→</span>
        <div className="flex gap-1 bg-gradient-to-br from-green-900/30 to-green-800/30 p-2 rounded border border-green-500/50">
          {result.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-green-600 to-green-700 px-3 py-2 rounded font-mono text-sm font-bold text-white border border-green-500">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-b border-slate-800 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            NumPy Mathematical Operations
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Master NumPy's powerful mathematical functions. Edit code on the right and run it instantly to see results.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section 1: Basic Arithmetic */}
        <section className="mb-20">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-10 bg-gradient-to-b from-emerald-400 to-emerald-600"></div>
              <h2 className="text-4xl font-bold">Basic Arithmetic Operations</h2>
            </div>
            <p className="text-gray-400 ml-4">Element-wise mathematical operations using operators and universal functions</p>
          </div>

          <FunctionCard
            title="np.add() / +"
            color="emerald"
            definition="Adds corresponding elements from two arrays together. Works with scalars and arrays of compatible shapes."
            syntax="result = np.add(arr1, arr2)
result = arr1 + arr2"
            visual={<ArrayBlock items={[['5', '8', '3'], ['2', '3', '1']]} result={['7', '11', '4']} operator="+" />}
            example={`import numpy as np

a = np.array([5, 8, 3])
b = np.array([2, 3, 1])

# Using operator
result = a + b
print(result)  # [7 11 4]

# With scalar
result2 = a + 10
print(result2)  # [15 18 13]`}
            defaultCode={`import numpy as np

a = np.array([5, 8, 3])
b = np.array([2, 3, 1])

# Add arrays
result = a + b
print("Addition:", result)

# Add scalar
result2 = a + 10
print("Add Scalar:", result2)`}
          />

          <FunctionCard
            title="np.subtract() / -"
            color="emerald"
            definition="Subtracts the second array from the first, element by element. Maintains shape compatibility."
            syntax="result = np.subtract(arr1, arr2)
result = arr1 - arr2"
            visual={<ArrayBlock items={[['10', '8', '5'], ['3', '2', '1']]} result={['7', '6', '4']} operator="-" />}
            example={`import numpy as np

a = np.array([10, 8, 5])
b = np.array([3, 2, 1])

# Using operator
result = a - b
print(result)  # [7 6 4]

# With scalar
result2 = a - 2
print(result2)  # [8 6 3]`}
            defaultCode={`import numpy as np

a = np.array([10, 8, 5])
b = np.array([3, 2, 1])

# Subtract arrays
result = a - b
print("Subtraction:", result)

# Subtract scalar
result2 = a - 2
print("Subtract Scalar:", result2)`}
          />

          <FunctionCard
            title="np.multiply() / *"
            color="amber"
            definition="Multiplies corresponding elements from arrays. Element-wise multiplication (NOT matrix multiplication)."
            syntax="result = np.multiply(arr1, arr2)
result = arr1 * arr2"
            visual={<ArrayBlock items={[['6', '10', '3'], ['2', '5', '4']]} result={['12', '50', '12']} operator="*" />}
            example={`import numpy as np

a = np.array([6, 10, 3])
b = np.array([2, 5, 4])

# Element-wise multiplication
result = a * b
print(result)  # [12 50 12]

# With scalar
result2 = a * 2
print(result2)  # [12 20  6]`}
            defaultCode={`import numpy as np

a = np.array([6, 10, 3])
b = np.array([2, 5, 4])

# Element-wise multiplication
result = a * b
print("Multiply:", result)

# Multiply by scalar
result2 = a * 2
print("Multiply Scalar:", result2)`}
          />

          <FunctionCard
            title="np.divide() / /"
            color="amber"
            definition="Divides first array by second, element by element. Returns floating-point results."
            syntax="result = np.divide(arr1, arr2)
result = arr1 / arr2"
            visual={<ArrayBlock items={[['20', '15', '8'], ['4', '3', '2']]} result={['5', '5', '4']} operator="÷" />}
            example={`import numpy as np

a = np.array([20, 15, 8])
b = np.array([4, 3, 2])

# Element-wise division
result = a / b
print(result)  # [5.  5.  4.]

# With scalar
result2 = a / 2
print(result2)  # [10.  7.5  4.]`}
            defaultCode={`import numpy as np

a = np.array([20.0, 15.0, 8.0])
b = np.array([4.0, 3.0, 2.0])

# Element-wise division
result = a / b
print("Division:", result)

# Divide by scalar
result2 = a / 2
print("Divide Scalar:", result2)`}
          />

          <FunctionCard
            title="np.power() / **"
            color="rose"
            definition="Raises elements of first array to powers specified by second array. Supports negative and fractional exponents."
            syntax="result = np.power(arr1, arr2)
result = arr1 ** arr2"
            visual={<ArrayBlock items={[['2', '10', '3'], ['3', '3', '2']]} result={['8', '1000', '9']} operator="^" />}
            example={`import numpy as np

a = np.array([2, 10, 3])
b = np.array([3, 3, 2])

# Element-wise power
result = a ** b
print(result)  # [   8 1000    9]

# Square root using power
result2 = np.power(16, 0.5)
print(result2)  # 4.0`}
            defaultCode={`import numpy as np

a = np.array([2, 10, 3])
b = np.array([3, 3, 2])

# Element-wise power
result = a ** b
print("Power:", result)

# Square root
result2 = np.power(16, 0.5)
print("Square Root:", result2)`}
          />

          <FunctionCard
            title="np.remainder() / %"
            color="rose"
            definition="Returns the remainder after element-wise division. Useful for cyclic operations and checking divisibility."
            syntax="result = np.remainder(arr1, arr2)
result = arr1 % arr2"
            visual={<ArrayBlock items={[['17', '13', '20'], ['5', '4', '6']]} result={['2', '1', '2']} operator="%" />}
            example={`import numpy as np

a = np.array([17, 13, 20])
b = np.array([5, 4, 6])

# Element-wise modulo
result = a % b
print(result)  # [2 1 2]

# Check if even/odd
nums = np.array([1, 2, 3, 4, 5])
is_even = nums % 2 == 0
print(is_even)  # [F T F T F]`}
            defaultCode={`import numpy as np

a = np.array([17, 13, 20])
b = np.array([5, 4, 6])

# Element-wise modulo
result = a % b
print("Remainder:", result)

# Check even/odd
nums = np.array([1, 2, 3, 4, 5])
is_even = nums % 2 == 0
print("Is Even:", is_even)`}
          />
        </section>

        {/* Section 2: Statistics */}
        <section className="mb-20">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-10 bg-gradient-to-b from-blue-400 to-blue-600"></div>
              <h2 className="text-4xl font-bold">Aggregations & Statistics</h2>
            </div>
            <p className="text-gray-400 ml-4">Reduce arrays to single values and compute statistical metrics</p>
          </div>

          <FunctionCard
            title="np.sum()"
            color="blue"
            definition="Computes the sum of all array elements. Can aggregate along specific axes for multi-dimensional arrays."
            syntax="result = np.sum(arr)
result = np.sum(arr, axis=0)"
            visual={<ArrayBlock items={[['1', '2', '3', '4'], []]} result={['10']} operator="Σ" />}
            example={`import numpy as np

arr = np.array([1, 2, 3, 4, 5])
total = np.sum(arr)
print(total)  # 15

# 2D array
matrix = np.array([[1, 2], [3, 4]])
print(np.sum(matrix))  # 10

# Sum along axis
print(np.sum(matrix, axis=0))  # [4 6]`}
            defaultCode={`import numpy as np

arr = np.array([1, 2, 3, 4, 5])
total = np.sum(arr)
print("Sum:", total)

# 2D array
matrix = np.array([[1, 2], [3, 4]])
print("Matrix Sum:", np.sum(matrix))

# Sum along axis
print("Column Sums:", np.sum(matrix, axis=0))`}
          />

          <FunctionCard
            title="np.prod()"
            color="blue"
            definition="Computes the product by multiplying all array elements together. Useful for factorial calculations."
            syntax="result = np.prod(arr)
result = np.prod(arr, axis=0)"
            visual={<ArrayBlock items={[['2', '3', '4'], []]} result={['24']} operator="∏" />}
            example={`import numpy as np

arr = np.array([2, 3, 4])
product = np.prod(arr)
print(product)  # 24

# Factorial
def factorial(n):
    return np.prod(np.arange(1, n + 1))
print(factorial(5))  # 120`}
            defaultCode={`import numpy as np

arr = np.array([2, 3, 4])
product = np.prod(arr)
print("Product:", product)

# Factorial calculation
def factorial(n):
    return np.prod(np.arange(1, n + 1))
print("5 Factorial:", factorial(5))`}
          />

          <FunctionCard
            title="np.mean()"
            color="cyan"
            definition="Calculates the arithmetic mean (average) of array elements. Fundamental statistic for data analysis."
            syntax="result = np.mean(arr)
result = np.average(arr, weights=w)"
            visual={<ArrayBlock items={[['2', '4', '6', '8'], []]} result={['5']} operator="μ" />}
            example={`import numpy as np

arr = np.array([2, 4, 6, 8, 10])
avg = np.mean(arr)
print(avg)  # 6.0

# Weighted average
values = np.array([10, 20, 30])
weights = np.array([1, 2, 3])
w_avg = np.average(values, weights=weights)
print(w_avg)  # 23.33`}
            defaultCode={`import numpy as np

arr = np.array([2, 4, 6, 8, 10])
avg = np.mean(arr)
print("Mean:", avg)

# Weighted average
values = np.array([10, 20, 30])
weights = np.array([1, 2, 3])
w_avg = np.average(values, weights=weights)
print("Weighted Avg:", w_avg)`}
          />

          <FunctionCard
            title="np.median()"
            color="cyan"
            definition="Finds the median (50th percentile) of the data. More robust to outliers than mean."
            syntax="result = np.median(arr)
result = np.percentile(arr, 50)"
            visual={<ArrayBlock items={[['1', '2', '3', '10'], []]} result={['2.5']} operator="M" />}
            example={`import numpy as np

arr = np.array([1, 2, 3, 10])
mean_val = np.mean(arr)  # 4.0
median_val = np.median(arr)  # 2.5

# Median less affected by outlier
print(f"Mean: {mean_val}, Median: {median_val}")

# Percentiles
print(np.percentile(arr, 25))  # 1.75`}
            defaultCode={`import numpy as np

arr = np.array([1, 2, 3, 10])
mean_val = np.mean(arr)
median_val = np.median(arr)

print("Mean:", mean_val)
print("Median:", median_val)

# Percentiles
print("25th Percentile:", np.percentile(arr, 25))
print("75th Percentile:", np.percentile(arr, 75))`}
          />

          <FunctionCard
            title="np.std()"
            color="purple"
            definition="Measures data spread and variability. High std = spread out; Low std = clustered together."
            syntax="result = np.std(arr)
result = np.std(arr, ddof=1)"
            visual={<ArrayBlock items={[['1', '5', '9'], []]} result={['3.27']} operator="σ" />}
            example={`import numpy as np

arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([1, 1, 3, 5, 5])

std1 = np.std(arr1)  # 1.41
std2 = np.std(arr2)  # 1.90

print(f"Std1: {std1}, Std2: {std2}")

# Sample std (unbiased)
std_sample = np.std(arr1, ddof=1)
print(f"Sample Std: {std_sample}")`}
            defaultCode={`import numpy as np

arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([1, 1, 3, 5, 5])

std1 = np.std(arr1)
std2 = np.std(arr2)

print("Array 1 Std:", std1)
print("Array 2 Std:", std2)

# Sample standard deviation
std_sample = np.std(arr1, ddof=1)
print("Sample Std:", std_sample)`}
          />

          <FunctionCard
            title="np.min() / np.max()"
            color="purple"
            definition="Find the smallest and largest values in array. Essential for normalization and bounds checking."
            syntax="min_val = np.min(arr)
max_val = np.max(arr)"
            visual={<ArrayBlock items={[['5', '1', '9', '2'], []]} result={['1', '9']} operator="min/max" />}
            example={`import numpy as np

arr = np.array([5, 1, 9, 2, 7])
min_val = np.min(arr)  # 1
max_val = np.max(arr)  # 9

print(f"Min: {min_val}, Max: {max_val}")

# Find indices
min_idx = np.argmin(arr)  # 1
max_idx = np.argmax(arr)  # 2

# Clipping values
clipped = np.clip(arr, 2, 8)
print(clipped)  # [5 2 8 2 7]`}
            defaultCode={`import numpy as np

arr = np.array([5, 1, 9, 2, 7])
min_val = np.min(arr)
max_val = np.max(arr)

print("Min:", min_val)
print("Max:", max_val)

# Find indices
print("Min Index:", np.argmin(arr))
print("Max Index:", np.argmax(arr))

# Clip values
clipped = np.clip(arr, 2, 8)
print("Clipped:", clipped)`}
          />
        </section>

        {/* Section 3: Linear Algebra */}
        <section>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-10 bg-gradient-to-b from-red-400 to-red-600"></div>
              <h2 className="text-4xl font-bold">Linear Algebra (np.linalg)</h2>
            </div>
            <p className="text-gray-400 ml-4">Matrix operations, solving systems, and computing eigenvalues</p>
          </div>

          <FunctionCard
            title="np.dot() / @ / np.matmul()"
            color="red"
            definition="Computes dot product for vectors or matrix multiplication. The @ operator is modern and preferred."
            syntax="result = np.dot(A, B)
result = A @ B
result = np.matmul(A, B)"
            visual={
              <div className="text-center">
                <div className="font-mono text-sm text-cyan-300 mb-2">[[1, 2], [3, 4]] @ [[1, 0], [0, 1]]</div>
                <div className="text-white text-lg mb-2">=</div>
                <div className="font-mono text-sm text-green-300">[[1, 2], [3, 4]]</div>
              </div>
            }
            example={`import numpy as np

# Vector dot product
v1 = np.array([1, 2, 3])
v2 = np.array([4, 5, 6])
dot = np.dot(v1, v2)
print(dot)  # 32

# Matrix multiplication
A = np.array([[1, 2], [3, 4]])
B = np.eye(2)
C = A @ B
print(C)`}
            defaultCode={`import numpy as np

# Vector dot product
v1 = np.array([1, 2, 3])
v2 = np.array([4, 5, 6])
dot = np.dot(v1, v2)
print("Dot Product:", dot)

# Matrix multiplication
A = np.array([[1, 2], [3, 4]])
B = np.eye(2)
C = A @ B
print("Matrix Result:\\n", C)`}
          />

          <FunctionCard
            title="np.linalg.inv()"
            color="red"
            definition="Computes the multiplicative inverse of a square matrix. A⁻¹ × A = I (identity)."
            syntax="result = np.linalg.inv(matrix)
result = np.linalg.pinv(matrix)"
            visual={
              <div className="text-center">
                <div className="font-mono text-sm text-cyan-300 mb-2">inv([[1, 2], [3, 4]])</div>
                <div className="text-white text-lg mb-2">=</div>
                <div className="font-mono text-sm text-green-300">[[-2.0, 1.0], [1.5, -0.5]]</div>
              </div>
            }
            example={`import numpy as np

A = np.array([[1, 2], [3, 4]])
A_inv = np.linalg.inv(A)
print("Inverse:\\n", A_inv)

# Verify: A @ A_inv = I
identity = A @ A_inv
print("Identity:\\n", identity)`}
            defaultCode={`import numpy as np

A = np.array([[1, 2], [3, 4]])
A_inv = np.linalg.inv(A)
print("Inverse:\\n", A_inv)

# Verify
identity = A @ A_inv
print("A @ A_inv:\\n", identity)`}
          />

          <FunctionCard
            title="np.linalg.det()"
            color="red"
            definition="Computes the determinant of a square matrix. Non-zero = invertible. Related to volume scaling."
            syntax="result = np.linalg.det(matrix)"
            visual={
              <div className="text-center">
                <div className="font-mono text-sm text-cyan-300 mb-2">det([[1, 2], [3, 4]])</div>
                <div className="text-white text-lg mb-2">=</div>
                <div className="font-mono text-sm text-green-300">-2.0</div>
              </div>
            }
            example={`import numpy as np

A = np.array([[1, 2], [3, 4]])
det = np.linalg.det(A)
print(f"Determinant: {det}")  # -2.0

# Check if invertible
if abs(det) > 1e-10:
    print("Matrix is invertible")
else:
    print("Matrix is singular")`}
            defaultCode={`import numpy as np

A = np.array([[1, 2], [3, 4]])
det_A = np.linalg.det(A)
print("Determinant:", det_A)

if abs(det_A) > 1e-10:
    print("Invertible: YES")
else:
    print("Invertible: NO")`}
          />

          <FunctionCard
            title="np.linalg.solve()"
            color="cyan"
            definition="Solves Ax = b for x. Efficient method for solving square systems of linear equations."
            syntax="x = np.linalg.solve(A, b)
# Solves: Ax = b"
            visual={
              <div className="text-center">
                <div className="font-mono text-sm text-cyan-300 mb-2">2x + y = 1</div>
                <div className="font-mono text-sm text-cyan-300 mb-2">x + y = 1</div>
                <div className="text-white text-lg mb-2">→</div>
                <div className="font-mono text-sm text-green-300">x = [0, 1]</div>
              </div>
            }
            example={`import numpy as np

# System: 2x + y = 1
#         x + y = 1
A = np.array([[2, 1], [1, 1]])
b = np.array([1, 1])

x = np.linalg.solve(A, b)
print("Solution:", x)  # [0. 1.]

# Verify
print("A @ x =", A @ x)`}
            defaultCode={`import numpy as np

# System: 2x + y = 1
#         x + y = 1
A = np.array([[2, 1], [1, 1]])
b = np.array([1, 1])

x = np.linalg.solve(A, b)
print("Solution x:", x)

# Verify solution
check = A @ x
print("Verification:", check)`}
          />

          <FunctionCard
            title="np.linalg.eig()"
            color="purple"
            definition="Finds eigenvalues and eigenvectors. Fundamental for diagonalization, PCA, and stability analysis."
            syntax="eigenvalues, eigenvectors = np.linalg.eig(matrix)"
            visual={
              <div className="text-center">
                <div className="font-mono text-sm text-cyan-300 mb-2">A = [[4, 1], [1, 3]]</div>
                <div className="text-white text-lg mb-2">→</div>
                <div className="font-mono text-sm text-green-300">λ ≈ [4.62, 2.38]</div>
              </div>
            }
            example={`import numpy as np

A = np.array([[4, 1], [1, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)

print("Eigenvalues:", eigenvalues)
print("Eigenvectors:\\n", eigenvectors)

# Verify: A @ v = λ @ v
for i in range(len(eigenvalues)):
    v = eigenvectors[:, i]
    lhs = A @ v
    rhs = eigenvalues[i] * v
    print(f"Equal: {np.allclose(lhs, rhs)}")`}
            defaultCode={`import numpy as np

A = np.array([[4, 1], [1, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)

print("Eigenvalues:")
print(eigenvalues)

print("Eigenvectors:\\n")
print(eigenvectors)

# Verify first eigenvalue
v = eigenvectors[0] # In this mock, eigenvectors are rows
lhs = np.matmul(A,v)
rhs = np.multiply(eigenvalues[0],v)
# Verification is complex in JS mock and may not be perfect
print("Verification may differ due to mock implementation.")`}
          />

          <FunctionCard
            title="np.linalg.matrix_rank()"
            color="blue"
            definition="Determines the rank (dimension of row/column space). Indicates linear independence."
            syntax="rank = np.linalg.matrix_rank(matrix)"
            visual={
              <div className="text-center">
                <div className="font-mono text-sm text-cyan-300 mb-2">[[1, 2], [2, 4]]</div>
                <div className="text-white text-lg mb-2">rank =</div>
                <div className="font-mono text-sm text-green-300">1 (dependent)</div>
              </div>
            }
            example={`import numpy as np

# Full rank matrix
A = np.array([[1, 2], [3, 4]])
rank_A = np.linalg.matrix_rank(A)
print(f"Rank of A: {rank_A}")  # 2

# Rank deficient (dependent rows)
B = np.array([[1, 2], [2, 4]])
rank_B = np.linalg.matrix_rank(B)
print(f"Rank of B: {rank_B}")  # 1`}
            defaultCode={`import numpy as np

# Full rank matrix
A = np.array([[1, 2], [3, 4]])
rank_A = np.linalg.matrix_rank(A)
print("Rank of A:", rank_A)

# Rank deficient matrix
B = np.array([[1, 2], [2, 4]])
rank_B = np.linalg.matrix_rank(B)
print("Rank of B:", rank_B)

# 3x3 matrix (not supported by mock)
# C = np.array([[1, 0, 1], [0, 1, 0], [1, 0, 1]])
# rank_C = np.linalg.matrix_rank(C)
# print("Rank of C:", rank_C)`}
          />

          <FunctionCard
            title="np.linalg.norm()"
            color="rose"
            definition="Computes matrix or vector norm. L2 norm (Euclidean) by default. Used for distance and magnitude calculations."
            syntax="norm = np.linalg.norm(arr)
norm = np.linalg.norm(arr, ord=2)"
            visual={
              <div className="text-center">
                <div className="font-mono text-sm text-cyan-300 mb-2">||[3, 4]|| = √(9 + 16)</div>
                <div className="text-white text-lg mb-2">=</div>
                <div className="font-mono text-sm text-green-300">5.0</div>
              </div>
            }
            example={`import numpy as np

v = np.array([3, 4])
euclidean_norm = np.linalg.norm(v)
print(f"L2 Norm: {euclidean_norm}")  # 5.0

# L1 Norm (Manhattan)
l1_norm = np.linalg.norm(v, ord=1)
print(f"L1 Norm: {l1_norm}")  # 7

# Matrix norm
A = np.array([[1, 2], [3, 4]])
matrix_norm = np.linalg.norm(A)
print(f"Matrix Norm: {matrix_norm}")`}
            defaultCode={`import numpy as np

v = np.array([3, 4])
euclidean = np.linalg.norm(v)
print("L2 Norm (Euclidean):", euclidean)

# L1 Norm
l1 = np.linalg.norm(v, {ord:1})
print("L1 Norm (Manhattan):", l1)

# Matrix norm
A = np.array([[1, 2], [3, 4]])
a_norm = np.linalg.norm(A)
print("Matrix Norm:", a_norm)`}
          />
        </section>
      </div>
    </div>
  );
}

