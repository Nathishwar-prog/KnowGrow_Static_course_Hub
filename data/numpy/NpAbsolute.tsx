import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, AlertCircle } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(2);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix
        const rows = val.map(row => ` [${row.map(NumpySandbox._format).join('  ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.map(NumpySandbox._format).join(' ')}]`; // Vector
    }
    return String(val);
  },

  np: {
    array: (data: any) => data,
    add: (a: any, b: any, { out = null, where = null } = {}) => {
      const isArrayA = Array.isArray(a);
      const isArrayB = Array.isArray(b);

      if (!isArrayA && !isArrayB) return a + b;

      // Basic broadcasting support
      if (isArrayA && !isArrayB) {
        const result = a.map((v: any) => (where === null || where[a.indexOf(v)]) ? v + b : v);
        if (out && Array.isArray(out)) {
          out.splice(0, out.length, ...result);
          return out;
        }
        return result;
      }

      if (!isArrayA && isArrayB) {
        return b.map((v: any) => a + v);
      }

      // Handle 2D arrays (simplified)
      if (Array.isArray(a[0]) && Array.isArray(b[0])) {
        return a.map((row: any[], i: number) => row.map((v, j) => v + b[i][j]));
      }

      // Handle 2D array + 1D array broadcasting
      if (Array.isArray(a[0]) && !Array.isArray(b[0])) {
        return a.map((row: any[]) => row.map((v, j) => v + b[j]));
      }

      // Standard 1D element-wise
      const result = a.map((v: any, i: number) => (where === null || where[i]) ? v + b[i] : v);
      if (out && Array.isArray(out)) {
        out.splice(0, out.length, ...result);
        return out;
      }
      return result;
    },
    subtract: (a: any, b: any) => Array.isArray(a) ? a.map((v: any, i: number) => v - (Array.isArray(b) ? b[i] : b)) : a - b,
    multiply: (a: any, b: any) => Array.isArray(a) ? a.map((v: any, i: number) => v * (Array.isArray(b) ? b[i] : b)) : a * b,
    divide: (a: any, b: any) => Array.isArray(a) ? a.map((v: any, i: number) => v / (Array.isArray(b) ? b[i] : b)) : a / b,
    arange: (start: number, stop: number) => Array.from({ length: stop - start }, (_, i) => start + i),
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    const customPrint = (...args: any[]) => {
      outputBuffer.push(args.map(arg => NumpySandbox._format(arg)).join(' '));
    };

    const sanitizedCode = code
      .replace(/import numpy as np/g, '')
      .replace(/print\((.+?)\)/g, 'customPrint($1)')
      .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const executor = new Function('np', 'customPrint', sanitizedCode);
      executor(NumpySandbox.np, customPrint);
      return outputBuffer.join('\n');
    } catch (e: any) {
      return `Error: ${e.message}`;
    }
  }
};

export default function NpAddModule() {
  const [activeTab, setActiveTab] = useState('explanation');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-3 mb-6">
      <div className={`p-2 rounded-lg bg-${color}-500/20 text-${color}-400`}>
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title }: any) => {
    const [sandboxCode, setSandboxCode] = useState(code);
    const [sandboxOutput, setSandboxOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const handleRun = async () => {
      setIsRunning(true);
      const res = await NumpySandbox.execute(sandboxCode);
      setSandboxOutput(res);
      setIsRunning(false);
    };

    return (
      <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden mb-6">
        <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex justify-between items-center">
          <span className="text-sm font-mono text-gray-400">{title || 'Python Code'}</span>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-1 px-3 rounded transition-colors disabled:opacity-50"
          >
            <Play size={12} /> {isRunning ? 'Running...' : 'Run'}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-4 bg-slate-950 font-mono text-sm">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[120px] bg-transparent text-blue-300 outline-none resize-none"
              spellCheck={false}
            />
          </div>
          <div className="p-4 bg-slate-900 border-t md:border-t-0 md:border-l border-slate-700 font-mono text-sm">
            <div className="text-gray-500 mb-2 uppercase text-[10px] tracking-widest">Output:</div>
            <pre className="text-amber-400 whitespace-pre-wrap">{sandboxOutput || output}</pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-900/20 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20 uppercase tracking-widest">
              NumPy Fundamentals
            </span>
          </div>
          <h1 className="text-6xl font-extrabold text-white mb-6 tracking-tight">
            np.<span className="text-blue-400">add</span>()
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Perform high-performance element-wise addition between arrays. The foundation of numerical computing and data processing in Python.
          </p>
        </div>
        {/* Abstract Background Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent skew-x-12 transform origin-top-right"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="sticky top-8 space-y-2">
              <button 
                onClick={() => setActiveTab('explanation')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'explanation' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'hover:bg-slate-800 text-slate-400'}`}
              >
                <BookOpen size={18} /> Explanation
              </button>
              <button 
                onClick={() => setActiveTab('examples')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'examples' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'hover:bg-slate-800 text-slate-400'}`}
              >
                <Zap size={18} /> Advanced Concepts
              </button>
              <button 
                onClick={() => setActiveTab('realworld')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'realworld' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'hover:bg-slate-800 text-slate-400'}`}
              >
                <Target size={18} /> Real-World Use Cases
              </button>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            {activeTab === 'explanation' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Intro Card */}
                <section>
                  <SectionHeader icon={Info} title="1. What is np.add?" color="blue" />
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
                    <p className="text-lg leading-relaxed text-slate-300 mb-6">
                      <code className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">np.add()</code> performs element-wise addition between two arrays. It's much faster than standard Python loops because it uses vectorized operations.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                        <h4 className="text-sm font-bold text-slate-500 uppercase mb-2">Simple Definition</h4>
                        <p className="text-white font-medium">Adds corresponding elements of two arrays.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                        <h4 className="text-sm font-bold text-slate-500 uppercase mb-2">Key Benefit</h4>
                        <p className="text-white font-medium">Blazing fast speed due to Vectorized execution.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-6">
                      <h4 className="flex items-center gap-2 text-emerald-400 font-bold mb-4">
                        <Lightbulb size={18} /> Why It Matters?
                      </h4>
                      <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-center gap-2">📊 Data aggregation</li>
                        <li className="flex items-center gap-2">🤖 Machine learning computations</li>
                        <li className="flex items-center gap-2">🧮 Matrix operations</li>
                      </ul>
                    </div>
                    <div className="bg-amber-900/10 border border-amber-500/20 rounded-2xl p-6">
                      <h4 className="flex items-center gap-2 text-amber-400 font-bold mb-4">
                        <CodeXml size={18} /> Basic Syntax
                      </h4>
                      <code className="text-amber-200 block bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono">
                        np.add(x1, x2)
                      </code>
                      <p className="text-xs text-slate-500 mt-3 italic">x1: First array, x2: Second array</p>
                    </div>
                  </div>
                </section>

                {/* Example Section */}
                <section>
                  <SectionHeader icon={Zap} title="Basic Examples" color="emerald" />
                  <CodeExample 
                    title="1D Array Addition"
                    code={`import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\nresult = np.add(a, b)\nprint(result)`} 
                    output="[5 7 9]" 
                  />
                  <CodeExample 
                    title="2D Array Addition"
                    code={`import numpy as np\n\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6], [7, 8]])\n\nprint(np.add(a, b))`} 
                    output="[[ 6  8]\n [10 12]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'examples' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <section>
                  <SectionHeader icon={Zap} title="Broadcasting" color="purple" />
                  <div className="bg-purple-900/10 border border-purple-500/20 rounded-2xl p-8 mb-8">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      NumPy allows adding arrays of different shapes via <span className="text-purple-400 font-bold">Broadcasting</span>. Row-wise addition happens automatically.
                    </p>
                  </div>
                  <CodeExample 
                    title="Scalar Broadcasting"
                    code={`import numpy as np\n\na = np.array([1, 2, 3])\nb = 10\n\nprint(np.add(a, b))`} 
                    output="[11 12 13]" 
                  />
                  <CodeExample 
                    title="Matrix + Vector Broadcasting"
                    code={`import numpy as np\n\na = np.array([[1, 2, 3],\n              [4, 5, 6]])\nb = np.array([10, 20, 30])\n\nprint(np.add(a, b))`} 
                    output="[[11 22 33]\n [14 25 36]]" 
                  />
                </section>

                <section>
                  <SectionHeader icon={Lightbulb} title="Tips & Tricks" color="amber" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
                      <h5 className="text-amber-400 font-bold mb-2 text-sm flex items-center gap-2">
                        <Zap size={14} /> In-place Addition
                      </h5>
                      <code className="text-xs block bg-slate-950 p-2 rounded mb-2">np.add(a, b, out=a)</code>
                      <p className="text-xs text-slate-400">Faster & memory efficient for large datasets.</p>
                    </div>
                    <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
                      <h5 className="text-amber-400 font-bold mb-2 text-sm flex items-center gap-2">
                        <Zap size={14} /> Conditional Addition
                      </h5>
                      <code className="text-xs block bg-slate-950 p-2 rounded mb-2">np.add(a, 10, where=a &gt; 2)</code>
                      <p className="text-xs text-slate-400">Adds only where the condition is True.</p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'realworld' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <section>
                  <SectionHeader icon={Target} title="Real-World Use Cases" color="rose" />
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden mb-8">
                    <div className="p-8">
                      <h4 className="text-xl font-bold text-white mb-4">🔹 Feature Engineering</h4>
                      <p className="text-slate-400 mb-6 leading-relaxed">
                        Calculating total compensation by adding base sales and bonuses across an organization's sales force.
                      </p>
                      <CodeExample 
                        code={`import numpy as np\n\nsales = np.array([100, 200, 300])\nbonus = np.array([10, 20, 30])\n\ntotal = np.add(sales, bonus)\nprint(total)`} 
                        output="[110 220 330]" 
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <SectionHeader icon={AlertCircle} title="Personal Recommendations" color="blue" />
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Use + Operator for Simplicity", 
                        desc: "a + b internally calls np.add(). Use it for cleaner code.", 
                        icon: Zap 
                      },
                      { 
                        title: "Use np.add() for Control", 
                        desc: "Use the functional form when you need parameters like 'out' or 'where'.", 
                        icon: Target 
                      },
                      { 
                        title: "Always Check Shape", 
                        desc: "Prevents broadcasting errors in complex pipelines.", 
                        icon: Info 
                      }
                    ].map((rec, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-slate-900 border border-slate-800 rounded-xl">
                        <div className="bg-slate-800 p-2 h-fit rounded-lg text-blue-400">
                          <rec.icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-1">{rec.title}</h4>
                          <p className="text-sm text-slate-400">{rec.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">🧪 Mini Practice Task</h3>
                  <p className="text-slate-400 mb-6">Can you calculate the result where only elements greater than 7 are added?</p>
                  <CodeExample 
                    code={`import numpy as np\n\na = np.array([5, 10, 15])\nb = np.array([2, 4, 6])\n\n# Task: Add only where a > 7\nresult = np.add(a, b, where=a > 7)\nprint(result)`} 
                    output="[5 14 21]" 
                  />
                </section>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
