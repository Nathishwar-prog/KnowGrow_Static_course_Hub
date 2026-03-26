import React, { useState } from 'react';
import {
  Calculator, Zap, Layers, Activity, Table, ArrowRight, ArrowDownRight, Check, Copy, AlertCircle, ChevronRight, TrendingUp, Presentation, BrainCircuit, Activity as HeartPulse,
  BookOpen, Code, PlusSquare, FastForward, Lightbulb, Box, Globe, Settings, Crosshair, HelpCircle,
  Rocket,
  Grid
} from 'lucide-react';

// ─── Code Block with Copy ────────────────────────────────────────────────────
const CodeBlock = ({ code, title, language = 'python' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-sky-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-sky-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const BasicArithmetic: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Basic Arithmetic
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Perform blazingly fast element-wise mathematical operations on arrays with NumPy.
        </p>
      </header>

      {/* ── Section 1: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-indigo-500" /> What is Basic Arithmetic in NumPy?
          </h2>
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-xl mb-6">
            <span className="font-bold text-indigo-800 dark:text-indigo-400 text-lg">
              Element-wise Operations
            </span>
            <p className="mt-2 text-sm text-indigo-700 dark:text-indigo-300">
              Basic arithmetic in NumPy means performing mathematical operations on arrays <em>element by element</em> automatically.
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 rounded-xl">
            <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              <strong>Unlike Python lists</strong>, NumPy applies operations to each element automatically without the need for loops. This concept is called <strong>Vectorization</strong>.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-blue-800/50">
          <div className="absolute top-0 right-0 -m-6 text-blue-500/10">
            <FastForward className="w-48 h-48" />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-4 relative z-10">
            <Rocket className="w-6 h-6 mr-3 text-yellow-400" /> Why This is Important?
          </h2>
          <p className="text-blue-200 text-sm mb-6 relative z-10">In real-world applications with huge datasets, you need fast and clean computations.</p>
          
          <div className="space-y-4 relative z-10">
            <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start gap-4">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-300 shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">No Loops Needed</h4>
                <p className="text-xs text-blue-200 mt-1">NumPy avoids traditional <code className="bg-blue-900/50 px-1 rounded font-mono">for</code> loops completely.</p>
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-start gap-4">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Blazing Fast</h4>
                <p className="text-xs text-blue-200 mt-1">Because it runs optimized C code under the hood, operations are drastically faster than native Python.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Core Functions ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Table className="text-indigo-500 w-8 h-8 mr-3" /> Core Arithmetic Operations
          </h2>
          <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                <tr>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 w-1/3">Operation</th>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">Symbol</th>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">NumPy Equivalent</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                {[
                  { op: 'Addition', sym: '+', fn: 'np.add()', color: 'text-emerald-500' },
                  { op: 'Subtraction', sym: '-', fn: 'np.subtract()', color: 'text-amber-500' },
                  { op: 'Multiplication', sym: '*', fn: 'np.multiply()', color: 'text-blue-500' },
                  { op: 'Division', sym: '/', fn: 'np.divide()', color: 'text-purple-500' },
                  { op: 'Power', sym: '**', fn: 'np.power()', color: 'text-pink-500' },
                  { op: 'Modulus', sym: '%', fn: 'np.mod()', color: 'text-rose-500' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                    <td className="px-6 py-4 font-bold">{row.op}</td>
                    <td className="px-6 py-4 font-mono font-black text-gray-500 bg-gray-50 dark:bg-gray-900/40 text-center w-16">{row.sym}</td>
                    <td className={`px-6 py-4 font-mono font-bold ${row.color}`}>{row.fn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 3: Step-by-Step Code Example ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Code className="text-indigo-500 w-8 h-8 mr-3" /> Step-by-Step Code Example
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <CodeBlock title="NumPy Analytics" language="python" code={`import numpy as np

# Create arrays
a = np.array([10, 20, 30])
b = np.array([1, 2, 3])

print("Array A:", a)
print("Array B:", b)

# Arithmetic operations element-wise
print("\\nAddition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Power:", a ** b)
print("Modulus:", a % b)`} />
            </div>
            
            <div className="flex flex-col h-full space-y-4">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 h-full flex flex-col font-mono text-sm">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Console Output</span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-sky-300 flex-grow space-y-4 whitespace-pre">
                  <div>
                    <span className="text-gray-500">Array A:</span> [10 20 30]
                    <br /><span className="text-gray-500">Array B:</span> [ 1  2  3]
                  </div>
                  <div>
                    <span className="text-emerald-300">Addition:</span>       [11 22 33]
                    <br /><span className="text-amber-300">Subtraction:</span>    [ 9 18 27]
                    <br /><span className="text-blue-300">Multiplication:</span> [10 40 90]
                    <br /><span className="text-purple-300">Division:</span>       [10. 10. 10.]
                    <br /><span className="text-pink-300">Power:</span>          [  10  400 27000]
                    <br /><span className="text-rose-300">Modulus:</span>        [0 0 0]
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-300 flex items-center mb-2">
                  <Lightbulb className="w-4 h-4 mr-2" /> Key Insight Extracted:
                </h4>
                <p className="text-sm text-indigo-800 dark:text-indigo-200 font-medium">
                  Notice how each operation happens exactly <strong>element by element</strong> pairing up index 0 with index 0, index 1 with index 1, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Vectorization & Broadcasting ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        
        {/* Vectorization */}
        <div className="bg-gradient-to-br from-yellow-900 to-orange-950 p-8 rounded-3xl shadow-sm border border-yellow-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-yellow-500">
            <Zap className="w-48 h-48" />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" /> Vectorization (Superpower)
          </h2>
          <p className="text-sm text-yellow-200 mb-4 font-bold relative z-10">No loops needed to process massive data arrays!</p>
          
          <div className="space-y-4 relative z-10">
            <CodeBlock title="Without NumPy (Slow)" language="python" code={`result = []
for i in range(len(a)):
    result.append(a[i] + b[i])`} />
            <CodeBlock title="With NumPy (Fast)" language="python" code={`result = a + b`} />
          </div>
          <div className="mt-4 flex gap-4 relative z-10">
            <span className="flex items-center text-sm font-bold text-emerald-400"><Check className="w-4 h-4 mr-1"/>Cleaner</span>
            <span className="flex items-center text-sm font-bold text-emerald-400"><Check className="w-4 h-4 mr-1"/>Faster</span>
            <span className="flex items-center text-sm font-bold text-emerald-400"><Check className="w-4 h-4 mr-1"/>Readable</span>
          </div>
        </div>

        {/* Broadcasting */}
        <div className="bg-gradient-to-br from-purple-900 to-indigo-950 p-8 rounded-3xl shadow-sm border border-purple-800/40 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-purple-400">
            <Layers className="w-48 h-48" />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Crosshair className="w-6 h-6 mr-3 text-purple-400" /> Broadcasting
          </h2>
          <p className="text-sm text-purple-200 mb-4 font-bold relative z-10">NumPy cleverly allows operations between different shapes!</p>
          
          <div className="space-y-4 relative z-10">
            <CodeBlock title="Apply scalar to entire array" language="python" code={`a = np.array([1, 2, 3])
b = 10

print(a + b)`} />
            <div className="bg-black/30 p-4 rounded-xl border border-white/10 font-mono text-sm text-purple-200">
              <div className="text-gray-400 mb-1"># Output:</div>
              <div className="text-white bg-purple-900/50 p-2 rounded">[11 12 13]</div>
            </div>
            <p className="text-sm text-emerald-400 font-bold flex items-center">
              <Check className="w-4 h-4 mr-2" /> Scalar '10' is automatically applied to all elements seamlessly.
            </p>
          </div>
        </div>

      </section>

      {/* ── Section 5: Matrix operations & Visualizations ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        
        {/* 2D Arithmetic */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Grid className="w-6 h-6 mr-3 text-indigo-500" /> Arithmetic with 2D Arrays
          </h2>
          <CodeBlock title="Matrix Math Context" language="python" code={`matrix1 = np.array([[1, 2], [3, 4]])
matrix2 = np.array([[5, 6], [7, 8]])

print("Add:\\n", matrix1 + matrix2)
print("Mul:\\n", matrix1 * matrix2)`} />
          
          <div className="mt-4 bg-gray-900 rounded-xl p-4 font-mono text-sm text-sky-300">
            <span className="text-gray-500">Output Add:</span>
            <br />[[ 6  8]
            <br /> [10 12]]
            <br /><br /><span className="text-gray-500">Output Mul:</span>
            <br />[[ 5 12]
            <br /> [21 32]]
          </div>
        </div>

        {/* Visualizations & Advanced Functions */}
        <div className="space-y-8 flex flex-col">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex-1">
            <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
              <Presentation className="w-6 h-6 mr-3 text-emerald-500" /> Rich Visualization
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Helps users see mathematical relationships visually.</p>
            <CodeBlock title="Exponential Chart Gen" language="python" code={`import matplotlib.pyplot as plt

x = np.array([1, 2, 3, 4])
y = x ** 2  # square operation

plt.plot(x, y, marker='o')
plt.title("y = x^2 (Visualized)")
plt.show()`} />
          </div>

          <div className="bg-gradient-to-r from-teal-900 to-emerald-950 p-6 rounded-3xl text-white border border-teal-800">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Box className="w-5 h-5 mr-3 text-teal-400" /> Advanced Arithmetic Functions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 p-2 rounded text-center font-mono text-sm text-teal-300">np.sqrt(a)</div>
              <div className="bg-black/30 p-2 rounded text-center font-mono text-sm text-teal-300">np.abs(a)</div>
              <div className="bg-black/30 p-2 rounded text-center font-mono text-sm text-teal-300">np.exp(a)</div>
              <div className="bg-black/30 p-2 rounded text-center font-mono text-sm text-teal-300">np.log(a)</div>
            </div>
          </div>
        </div>

      </section>

      {/* ── Section 6: Pro Tips & Suggestions ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-4">
          💡 Pro Suggestions & Tricks
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10 font-medium">Expert Advice to elevate your NumPy skills.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 p-6 rounded-2xl">
            <h3 className="font-bold text-purple-800 dark:text-purple-400 mb-3 flex items-center">
              <BrainCircuit className="w-5 h-5 mr-2" /> Array Thinking
            </h3>
            <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
              <strong>Always think in arrays, not loops.</strong> Vectorize everything you can to leverage NumPy's underlying C optimizations.
            </p>
          </div>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800 p-6 rounded-2xl">
            <h3 className="font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center">
              <Activity className="w-5 h-5 mr-2" /> Exploit Broadcasting
            </h3>
            <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
              Use broadcasting to simplify your code and avoid unnecessary complexity and scaling matrices manually.
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-6 rounded-2xl">
            <h3 className="font-bold text-blue-800 dark:text-blue-400 mb-3 flex items-center">
              <Settings className="w-5 h-5 mr-2" /> Explicit Functions
            </h3>
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Prefer direct functions like <code className="font-mono text-xs">np.add(a, b)</code> over <code className="font-mono text-xs">a + b</code> when chaining massive data pipelines for maximum clarity.
            </p>
          </div>
        </div>

        {/* Tricks */}
        <div className="bg-gray-900 dark:bg-black rounded-3xl p-8 border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <Zap className="w-5 h-5 mr-3 text-yellow-400" /> Rapid Fire Tricks
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <span className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2 block">Trick 1</span>
              <code className="text-sky-300 font-mono text-sm">a * 2 + 5</code>
              <p className="text-gray-400 text-sm mt-3">Combine operations seamlessly into a single line.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <span className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2 block">Trick 2</span>
              <code className="text-emerald-300 font-mono text-sm">np.square(a)</code>
              <p className="text-gray-400 text-sm mt-3">Typically faster optimized routine than doing <span className="font-mono text-xs">a**2</span>.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <span className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2 block">Trick 3</span>
              <code className="text-pink-300 font-mono text-sm">np.clip(a, 0, 25)</code>
              <p className="text-gray-400 text-sm mt-3">Limit matrix values gracefully; incredibly useful in Machine Learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Common Mistakes & Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl shadow-sm border border-red-200 dark:border-red-900/50">
          <h2 className="text-2xl font-bold flex items-center text-red-900 dark:text-red-400 mb-6">
            <AlertCircle className="w-6 h-6 mr-3 text-red-500" /> Common Mistakes ❌
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-red-200 dark:bg-red-800/50 text-red-700 dark:text-red-300 p-1 rounded font-bold text-xs mt-0.5">X</span>
              <div>
                <strong className="text-red-900 dark:text-red-200 block">Using Python Lists</strong>
                <span className="text-red-700 dark:text-red-400 text-sm">Lists concatenate array sizes with <span className="font-mono text-xs">+</span> instead of performing math equations element-wise!</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-red-200 dark:bg-red-800/50 text-red-700 dark:text-red-300 p-1 rounded font-bold text-xs mt-0.5">X</span>
              <div>
                <strong className="text-red-900 dark:text-red-200 block">Element-wise vs Matrix Multiply</strong>
                <span className="text-red-700 dark:text-red-400 text-sm">Confusing <code className="font-mono text-xs text-red-900 dark:text-red-300 font-black">*</code> (element-wise computation) with <code className="font-mono text-xs text-red-900 dark:text-red-300 font-black">@</code> (Dot Product / Matrix Multiplication).</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-red-200 dark:bg-red-800/50 text-red-700 dark:text-red-300 p-1 rounded font-bold text-xs mt-0.5">X</span>
              <div>
                <strong className="text-red-900 dark:text-red-200 block">Ignoring Shape Mismatch</strong>
                <span className="text-red-700 dark:text-red-400 text-sm">You cannot add arrays of incompatible shapes without conforming to Broadcasting rules.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Globe className="w-6 h-6 mr-3 text-sky-500" /> Real-World Use Cases
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Table, title: 'Data Preprocessing', desc: 'Normalizing datasets', bg: 'bg-blue-100 text-blue-600' },
              { icon: BrainCircuit, title: 'Machine Learning', desc: 'Weights & biases calculation', bg: 'bg-emerald-100 text-emerald-600' },
              { icon: Zap, title: 'Game Physics', desc: 'Vector movement calculations', bg: 'bg-amber-100 text-amber-600' },
              { icon: TrendingUp, title: 'Financial Modeling', desc: 'Interest rate projections', bg: 'bg-indigo-100 text-indigo-600' }
            ].map((uc, i) => (
              <div key={i} className="p-4 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-2xl flex flex-col items-start hover:shadow-md transition-shadow">
                <div className={`p-2 rounded-xl ${uc.bg} mb-3`}>
                  <uc.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{uc.title}</h4>
                <p className="text-xs text-gray-500 font-medium">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BasicArithmetic;
