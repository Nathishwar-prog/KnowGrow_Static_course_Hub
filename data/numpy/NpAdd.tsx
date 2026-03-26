import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, AlertCircle, TrendingUp } from 'lucide-react';

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
        const result = a.map((v: any, i: number) => {
            const condition = where === null || (Array.isArray(where) ? where[i] : true);
            return condition ? v + b : v;
        });
        if (out && Array.isArray(out)) {
          out.splice(0, out.length, ...result);
          return out;
        }
        return result;
      }

      if (!isArrayA && isArrayB) {
        return b.map((v: any) => a + v);
      }

      // Handle 2D arrays (simplified matrix addition)
      if (Array.isArray(a[0]) && Array.isArray(b[0])) {
        return a.map((row: any[], i: number) => row.map((v, j) => v + b[i][j]));
      }

      // Handle 2D array + 1D array broadcasting (Simplified)
      if (Array.isArray(a[0]) && !Array.isArray(b[0])) {
        return a.map((row: any[]) => row.map((v, j) => v + b[j]));
      }

      // Standard 1D element-wise
      const result = a.map((v: any, i: number) => {
          const condition = where === null || (Array.isArray(where) ? where[i] : true);
          return condition ? v + b[i] : v;
      });
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
      .replace(/import matplotlib.pyplot as plt/g, '')
      .replace(/plt\..+\(.*\)/g, '') // Ignore plt calls in sandbox execution
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
  const [activeTab, setActiveTab] = useState('fundamentals');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-3 mb-6">
      <div className={`p-2.5 rounded-xl bg-${color}-500/20 text-${color}-400 border border-${color}-500/20 shadow-lg shadow-${color}-500/5`}>
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title, description }: any) => {
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
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden mb-8 shadow-xl transition-all hover:border-slate-700/50">
        <div className="bg-slate-800/50 px-5 py-3 border-b border-slate-800 flex justify-between items-center backdrop-blur-sm">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-0.5">{title || 'Interactive Sandbox'}</span>
            {description && <p className="text-[10px] text-slate-500 italic">{description}</p>}
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-1.5 px-4 rounded-lg transition-all shadow-lg shadow-blue-600/20 active:scale-95 disabled:opacity-50"
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'EXECUTING...' : 'RUN CODE'}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[160px]">
          <div className="p-5 bg-black/40 font-mono text-sm leading-relaxed border-b md:border-b-0 md:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[140px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-5 bg-slate-950/80 font-mono text-sm">
            <div className="text-slate-600 mb-3 uppercase text-[10px] font-bold tracking-[0.2em] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div> Output Console
            </div>
            <pre className="text-amber-400/90 whitespace-pre-wrap selection:bg-amber-400/10">
              {sandboxOutput || output || '// Execute to see results'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/30 selection:text-white font-sans antialiased">
      {/* Dynamic Header */}
      <header className="relative pt-24 pb-20 px-6 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-slate-950"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-blue-500"></div>
            <span className="text-blue-400 text-xs font-black uppercase tracking-widest">Numpy Mathematics</span>
          </div>
          <h1 className="text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            np.<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">add</span>()
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
            Master element-wise addition. From basic array expansion to advanced 2D broadcasting and memory-efficient in-place operations.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-xs font-semibold text-slate-300">
              <Zap size={14} className="text-amber-400" /> High Performance
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-xs font-semibold text-slate-300">
              <Target size={14} className="text-blue-400" /> Vectorized
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Side Navigation */}
          <aside className="lg:w-72 flex-shrink-0">
            <nav className="sticky top-12 space-y-3">
              <button 
                onClick={() => setActiveTab('fundamentals')}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-sm font-bold transition-all border ${activeTab === 'fundamentals' ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/20' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                <div className="flex items-center gap-3"><BookOpen size={18} /> 1. Fundamentals</div>
              </button>
              <button 
                onClick={() => setActiveTab('broadcasting')}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-sm font-bold transition-all border ${activeTab === 'broadcasting' ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/20' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                <div className="flex items-center gap-3"><TrendingUp size={18} /> 2. Broadcasting</div>
              </button>
              <button 
                onClick={() => setActiveTab('advanced')}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-sm font-bold transition-all border ${activeTab === 'advanced' ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/20' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                <div className="flex items-center gap-3"><Zap size={18} /> 3. Tips & Tricks</div>
              </button>
              <button 
                onClick={() => setActiveTab('realworld')}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-sm font-bold transition-all border ${activeTab === 'realworld' ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/20' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                <div className="flex items-center gap-3"><Target size={18} /> 4. Real World</div>
              </button>
            </nav>
            
            <div className="mt-8 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
              <h4 className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-3">
                <Lightbulb size={16} /> Quick Rule
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                Always check <code className="text-emerald-300">a.shape</code> and <code className="text-emerald-300">b.shape</code> to avoid broadcasting errors in complex pipelines.
              </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'fundamentals' && (
              <div className="space-y-12 animate-in fade-in duration-500">
                <section>
                  <SectionHeader icon={Info} title="What is np.add?" color="blue" />
                  <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-10 mb-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full"></div>
                    <p className="text-2xl font-light leading-relaxed text-slate-300 mb-8 border-l-4 border-blue-500 pl-6">
                      <code className="text-blue-400 font-bold">np.add()</code> performs element-wise addition between two arrays. It is the fundamental building block for data aggregation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 transition-colors group-hover:border-blue-500/20">
                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-3 block">Logical Definition</span>
                        <p className="text-white text-lg font-medium leading-relaxed">Adds corresponding elements of two arrays into a new resulting shape.</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 transition-colors group-hover:border-blue-500/20">
                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-3 block">Performance</span>
                        <p className="text-white text-lg font-medium leading-relaxed">Leverages C-implemented vectorization for near-instant results.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                      <h4 className="flex items-center gap-3 text-white font-bold mb-6 text-lg">
                        <Target size={20} className="text-blue-400" /> Use Cases
                      </h4>
                      <ul className="space-y-4">
                        {[
                          { label: "Data Aggregation", icon: "📊" },
                          { label: "Machine Learning (ML)", icon: "🤖" },
                          { label: "Matrix Algebra", icon: "🧮" },
                          { label: "Numerical Engineering", icon: "⚡" }
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-400 font-medium">
                            <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sm">{item.icon}</span>
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col">
                      <h4 className="flex items-center gap-3 text-white font-bold mb-6 text-lg">
                        <CodeXml size={20} className="text-emerald-400" /> Core Syntax
                      </h4>
                      <div className="bg-black/40 p-5 rounded-xl border border-slate-800 font-mono text-emerald-300 text-lg mb-4">
                        np.add(x1, x2)
                      </div>
                      <div className="space-y-2 mt-auto">
                        <div className="flex justify-between items-center text-xs py-2 border-b border-slate-800">
                          <span className="text-slate-500">Argument x1</span>
                          <span className="text-slate-300 font-bold">First Array</span>
                        </div>
                        <div className="flex justify-between items-center text-xs py-2">
                          <span className="text-slate-500">Argument x2</span>
                          <span className="text-slate-300 font-bold">Second Array</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <SectionHeader icon={Zap} title="Implementation Examples" color="emerald" />
                  <CodeExample 
                    title="1. Basic Vector Addition"
                    description="Element-wise addition of two 1D arrays."
                    code={`import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\nresult = np.add(a, b)\nprint(f"Resulting Vector: {result}")`} 
                    output="Resulting Vector: [5 7 9]" 
                  />
                  <CodeExample 
                    title="2. 2D Matrix Addition"
                    description="Summing matrices of identical shapes."
                    code={`import numpy as np\n\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6], [7, 8]])\n\nprint("Matrix Sum:")\nprint(np.add(a, b))`} 
                    output="Matrix Sum:\n[[ 6  8]\n [10 12]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'broadcasting' && (
              <div className="space-y-12 animate-in slide-in-from-right duration-500">
                <section>
                  <SectionHeader icon={TrendingUp} title="Power of Broadcasting" color="purple" />
                  <div className="bg-purple-600/5 border border-purple-500/20 rounded-3xl p-10 mb-10">
                    <p className="text-xl font-light text-slate-300 leading-relaxed mb-6">
                      NumPy allows operations on arrays of different shapes by <span className="text-purple-400 font-bold">stretching</span> the smaller array to match the larger one.
                    </p>
                    <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Visual Logic</span>
                      <span className="text-purple-400 font-mono text-xs">Scalar → All Elements</span>
                    </div>
                  </div>

                  <CodeExample 
                    title="Scalar Broadcasting"
                    description="Adding a single number to every element in an array."
                    code={`import numpy as np\n\na = np.array([1, 2, 3])\nb = 10\n\n# Scalar 10 is broadcast across the array shape\nprint(f"Broadcast Result: {np.add(a, b)}")`} 
                    output="Broadcast Result: [11 12 13]" 
                  />

                  <CodeExample 
                    title="Row-wise Matrix Broadcasting"
                    description="A 1D vector added to every row of a 2D matrix."
                    code={`import numpy as np\n\na = np.array([[1, 2, 3],\n              [4, 5, 6]])\n\n# Vector length must match matrix columns\nb = np.array([10, 20, 30])\n\nprint("Row-wise Result:")\nprint(np.add(a, b))`} 
                    output="Row-wise Result:\n[[11 22 33]\n [14 25 36]]" 
                  />
                  
                  <div className="bg-blue-900/10 border border-blue-500/20 rounded-2xl p-8 mb-8">
                    <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                      📊 Concept Breakdown: Element-wise addition
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed italic mb-6">
                      Think of addition as a series of points on a graph. Each point in the result equals the sum of corresponding values from the source arrays.
                    </p>
                    <div className="p-4 bg-black/40 rounded-xl font-mono text-xs text-blue-300">
                      // Logic insight:\n
                      // Each point in result = sum(source_a, source_b)\n
                      // Result Line = Source line shifted upward by the additive value
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'advanced' && (
              <div className="space-y-12 animate-in slide-in-from-right duration-500">
                <section>
                  <SectionHeader icon={Lightbulb} title="Advanced Recommendations" color="amber" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                     <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl group">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Zap size={24} />
                        </div>
                        <h4 className="text-white font-bold mb-3">Operator Simplicity</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          In 90% of cases, simply use <code className="text-emerald-400 text-xs font-bold">a + b</code>. It is more readable and internally core-optimized.
                        </p>
                     </div>
                     <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl group">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <CodeXml size={24} />
                        </div>
                        <h4 className="text-white font-bold mb-3">Functional Control</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          Use <code className="text-blue-400 text-xs font-bold">np.add()</code> when using advanced parameters like <code className="text-blue-200">out</code> or <code className="text-blue-200">where</code>.
                        </p>
                     </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
                      <div className="flex items-center gap-2 text-amber-400 font-black text-[10px] uppercase tracking-widest mb-4">
                        <Zap size={12} /> Trick 1: In-place Optimization
                      </div>
                      <code className="text-xs block bg-black/50 p-3 rounded-lg border border-slate-800 text-amber-200 mb-3">
                        np.add(a, b, out=a)
                      </code>
                      <p className="text-xs text-slate-500">Extremely memory efficient for large-scale datasets as it modifies existing memory buffers.</p>
                    </div>

                    <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
                      <div className="flex items-center gap-2 text-amber-400 font-black text-[10px] uppercase tracking-widest mb-4">
                        <Zap size={12} /> Trick 2: Chain Adding
                      </div>
                      <code className="text-xs block bg-black/50 p-3 rounded-lg border border-slate-800 text-amber-200 mb-3">
                        result = np.add(np.add(a, b), c)
                      </code>
                      <p className="text-xs text-slate-500">You can nest calls to sum multiple data sources sequentially.</p>
                    </div>

                    <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
                      <div className="flex items-center gap-2 text-amber-400 font-black text-[10px] uppercase tracking-widest mb-4">
                        <Zap size={12} /> Trick 3: Combine with Reduce
                      </div>
                      <code className="text-xs block bg-black/50 p-3 rounded-lg border border-slate-800 text-amber-200 mb-3">
                        np.add.reduce([a, b, c])
                      </code>
                      <p className="text-xs text-slate-500">Perform a multi-array summation in a single, clean expression.</p>
                    </div>

                    <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
                      <div className="flex items-center gap-2 text-amber-400 font-black text-[10px] uppercase tracking-widest mb-4">
                        <Zap size={12} /> Trick 4: Selection Logic (Where)
                      </div>
                      <code className="text-xs block bg-black/50 p-3 rounded-lg border border-slate-800 text-amber-200 mb-3">
                        np.add(a, 10, where=a &gt; 2)
                      </code>
                      <p className="text-xs text-slate-500">Perform addition conditionally — only elements matching the mask are updated.</p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'realworld' && (
              <div className="space-y-12 animate-in zoom-in-95 duration-500">
                <section>
                  <SectionHeader icon={Target} title="Real-World Implementation" color="rose" />
                  <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden mb-12">
                    <div className="p-10">
                      <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <TrendingUp className="text-rose-500" size={24} /> Feature Engineering
                      </h4>
                      <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                        In business intelligence, adding multiple revenue streams or cost centers is common. np.add() optimizes these financial pipelines.
                      </p>
                      <CodeExample 
                        title="Sales Compensation Pipeline"
                        description="Adding performance bonuses to base monthly salaries."
                        code={`import numpy as np\n\nsales = np.array([100, 200, 300]) # Base Salaries\nbonus = np.array([10, 20, 30])   # Monthly Performance Bonuses\n\n# Efficiently calculate total compensation\ntotal = np.add(sales, bonus)\nprint(f"Total Expenditure: {total}")`} 
                        output="Total Expenditure: [110 220 330]" 
                      />
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/30 rounded-3xl p-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
                    <Target size={120} />
                  </div>
                  <div className="relative z-10 max-w-xl">
                    <h3 className="text-3xl font-black text-white mb-4">🧪 Mini Practice Task</h3>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                      Given two arrays, use the <code className="text-white font-bold">where</code> condition to add elements only where the first array's value is greater than 7.
                    </p>
                    <CodeExample 
                      title="Practice Sandbox"
                      code={`import numpy as np\n\na = np.array([5, 10, 15])\nb = np.array([2, 4, 6])\n\n# Your Task: Add only where a > 7\nresult = np.add(a, b, where=a > 7)\n\nprint(f"Conditional Addition Result: {result}")`} 
                      output="Conditional Addition Result: [5 14 21]" 
                    />
                  </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-20 mt-12 border-t border-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white italic">KG</div>
               <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">KnowGrow Static course Hub</span>
            </div>
            <p className="text-xs text-slate-600 font-medium">© 2026 NumPy Foundation Training Module</p>
        </div>
      </footer>
    </div>
  );
}
