import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, TrendingUp, AlertTriangle, RotateCw, Activity, Layers, LineChart, Cpu } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') {
        if (val === Infinity) return 'inf';
        if (val === -Infinity) return '-inf';
        return Number.isInteger(val) ? String(val) : val.toFixed(4);
    }

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
    e: Math.E,
    array: (data: any) => data,
    exp: (arr: any) => {
        const _exp = (v: number) => Math.exp(v);
        if (Array.isArray(arr)) {
            if (Array.isArray(arr[0])) {
                return arr.map(row => row.map(_exp));
            }
            return arr.map(_exp);
        }
        return _exp(arr);
    },
    log: (arr: any) => {
        const _log = (v: number) => Math.log(v);
        if (Array.isArray(arr)) {
            if (Array.isArray(arr[0])) {
                return arr.map(row => row.map(_log));
            }
            return arr.map(_log);
        }
        return _log(arr);
    },
    clip: (arr: any, min: number, max: number) => {
        const _clip = (v: number) => Math.min(Math.max(v, min), max);
        if (Array.isArray(arr)) return arr.map(_clip);
        return _clip(arr);
    },
    linspace: (start: number, stop: number, num: number) => {
      const step = (stop - start) / (num - 1);
      return Array.from({ length: num }, (_, i) => start + step * i);
    },
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
       .replace(/plt\..+\(.*\)/g, '')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const codeToRun = `
        const np = NumpySandbox.np;
        const print = customPrint;
        ${sanitizedCode}
      `;
      const executor = new Function('NumpySandbox', 'customPrint', codeToRun);
      executor(NumpySandbox, customPrint);
      return outputBuffer.join('\n');
    } catch (e: any) {
      return `Error: ${e.message}`;
    }
  }
};

export default function NpExp() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title, description, color="blue" }: any) => {
    const [sandboxCode, setSandboxCode] = useState(code);
    const [sandboxOutput, setSandboxOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const handleRun = async () => {
      setIsRunning(true);
      const res = await NumpySandbox.execute(sandboxCode);
      setSandboxOutput(res);
      setIsRunning(false);
    };

    const runColor = {
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Computation Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'PROCESSOR BUSY...' : 'EXECUTE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px]">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-emerald-300 outline-none resize-none selection:bg-emerald-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Output Stream
            </div>
            <pre className="text-indigo-400/90 selection:bg-indigo-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Awaiting vectorized compute...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em]">Vectorized Exponential Growth</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic tracking-[-0.08em]">exp</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Compute the exponential of each element in an array. A cornerstone for <span className="text-white font-medium">Neural Networks</span>, activation functions, and modeling natural growth patterns.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <TrendingUp size={24} className="text-indigo-400" /> Exponential Curves
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <nav className="sticky top-12 space-y-5">
              {[
                { id: 'concept', label: '1. Core Concept', icon: BookOpen },
                { id: 'usage', label: '2. Multi-Dim Usage', icon: Layers },
                { id: 'visual', label: '3. Visual Growth', icon: LineChart },
                { id: 'apps', label: '4. AI & ML Apps', icon: Target },
                { id: 'perf', label: '5. High Performance', icon: Cpu }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-125 transition-transform duration-700">
                  <RotateCw size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4">
                  <Lightbulb size={20} /> Teacher Advice 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Show real-world meaning first (growth), then connect to AI/ML (sigmoid, softmax), and finally visualize the graph. Students understand faster when they see exponential growth visually!
               </p>
            </div>
            
            <div className="mt-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Zap size={20} /> Pro Tip: log()
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  <code className="text-emerald-300">np.log(np.exp(x)) == x</code>. This inverse relationship is fundamental for normalizing highly skewed data.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Safety Tip
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Avoid <span className="text-rose-300 font-black">Overflow Errors</span> by clipping extreme values using <code className="text-rose-300">np.clip(x, -100, 100)</code> before applying exp.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. What is np.exp?" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl">
                         <span className="text-indigo-400 font-bold italic">np.exp()</span> computes the exponential of each element in an array—mathematically, <span className="text-indigo-400 font-bold">$e^x$</span> where $e \approx 2.71828$ (Euler's number).
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "ML Activation", desc: "Sigmoid & Softmax", icon: "🧠" },
                           { label: "Growth Models", desc: "Finance & Bio", icon: "📈" },
                           { label: "Probability", desc: "Distributions", icon: "🎲" },
                           { label: "Neural Nets", desc: "Core backprop", icon: "🔗" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="indigo"
                    title="The Basic Exponential"
                    description="Calculating e^x for a simple range of integers."
                    code={`import numpy as np\n\nx = np.array([0, 1, 2, 3])\nresult = np.exp(x)\n\nprint("e^x Results:")\nprint(result)\n\n# e^0 = 1\n# e^1 ≈ 2.718\n# e^2 ≈ 7.389\n# e^3 ≈ 20.085`} 
                    output="e^x Results:\n[ 1.0000  2.7183  7.3891  20.0855]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layers} title="2. Multi-Dimensional Vectorization" color="violet" />
                   
                   <div className="bg-violet-950/10 border border-violet-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                         <Layers size={140} />
                      </div>
                      <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-8">
                         NumPy's <span className="text-violet-400 font-black underline underline-offset-8 decoration-violet-500/30">element-wise efficiency</span> allows np.exp to scale across 2D, 3D and N-dimensional arrays instantly.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="bg-black/40 p-10 rounded-3xl border border-violet-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-violet-400 mb-4">Element-wise</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">No loops required</span>
                         </div>
                         <div className="bg-black/40 p-10 rounded-3xl border border-violet-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-violet-400 mb-4">Any Shape</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Preserves array dimensions</span>
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="violet"
                    title="2D Matrix Growth"
                    description="Applying the exponential transform to a 2x2 matrix."
                    code={`import numpy as np\n\nx = np.array([[1, 2], [3, 4]])\nprint("Exponential of 2D Array:")\nprint(np.exp(x))`} 
                    output="Exponential of 2D Array:\n[[ 2.7183   7.3891]\n [20.0855  54.5982]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'visual' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={LineChart} title="3. The Exponential Curve" color="emerald" />
                   
                   <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <TrendingUp size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <LineChart className="text-emerald-500" size={28} /> Visualizing y = e^x
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                        The curve grows very fast, is always positive, and passes through (0,1).
                     </p>
                     
                     <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-10 overflow-hidden">
                        <div className="flex items-end justify-between h-48 gap-1 group-hover:gap-2 transition-all">
                           {Array.from({ length: 40 }).map((_, i) => {
                               const x = -2 + (4 * i / 39);
                               const val = Math.exp(x);
                               const maxVal = Math.exp(2);
                               return (
                                  <div key={i} className="flex-1 bg-emerald-500/20 border-t border-emerald-500/40 rounded-full transition-all hover:bg-emerald-500/60" 
                                    style={{ height: `${(val / maxVal) * 100}%` }}>
                                  </div>
                               );
                           })}
                        </div>
                        <div className="flex justify-between mt-4 text-[10px] font-black text-slate-600 uppercase tracking-widest px-2">
                            <span>x = -2</span>
                            <span>x = 0 (val=1)</span>
                            <span>x = 2</span>
                        </div>
                     </div>

                     <CodeExample 
                        color="emerald"
                        title="Generating Graph Data"
                        description="Creating a high-resolution range to plot the exponential function."
                        code={`import numpy as np\n\nx = np.linspace(-2, 2, 10)\ny = np.exp(x)\n\nprint("X values: ", x)\nprint("Y values: ", y)`} 
                        output="X values:  [-2.0000 -1.5556 -1.1111 -0.6667 -0.2222  0.2222  0.6667  1.1111  1.5556  2.0000]\nY values:  [0.1353  0.2111  0.3292  0.5134  0.8007  1.2488  1.9477  3.0377  4.7377  7.3891]" 
                      />
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'apps' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Target} title="4. Machine Learning: The Sigmoid" color="rose" />
                   
                   <div className="bg-rose-950/10 border border-border-rose-500/20 rounded-[4rem] p-16 mb-16 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                         <Activity size={180} />
                      </div>
                      <h3 className="text-4xl font-black text-white mb-8">The Core of Neural Networks</h3>
                      <p className="text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-4xl">
                        The Sigmoid function maps any value into a range between 0 and 1, making it perfect for probability estimation in classification tasks.
                      </p>
                      
                      <div className="bg-black/60 p-10 rounded-3xl border border-rose-500/20 mb-12">
                         <div className="flex items-center gap-6 mb-8 text-rose-400">
                            <span className="text-5xl font-serif italic text-white leading-none">σ(x) = 1 / (1 + e⁻ˣ)</span>
                         </div>
                      </div>

                      <CodeExample 
                        color="rose"
                        title="Sigmoid Implementation"
                        code={`import numpy as np\n\nx = np.array([-2, -1, 0, 1, 2])\n\nsigmoid = 1 / (1 + np.exp(-x))\n\nprint("Sigmoid Probabilities:")\nprint(sigmoid)`} 
                        output="Sigmoid Probabilities:\n[ 0.1192  0.2689  0.5000  0.7311  0.8808]" 
                      />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group hover:bg-slate-800/60 transition-all border-b-4 border-b-amber-500/20">
                         <div className="flex items-center gap-3 text-amber-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-amber-500/10 pb-4">
                            <AlertTriangle size={16} /> Avoid Overflow
                         </div>
                         <CodeExample 
                           color="amber"
                           title="Numerical Stability"
                           code={`import numpy as np\n\nx = np.array([10, 100, 1000])\n# np.exp(1000) would be 'inf'\n\n# Fix: Clip the values\nx_safe = np.clip(x, -100, 100)\nresult = np.exp(x_safe)\n\nprint("Safely Computed Exponentials:")\nprint(result)`} 
                           output="Safely Computed Exponentials:\n[ 2.2026e+04  2.6881e+43  2.6881e+43]" 
                         />
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group hover:bg-slate-800/60 transition-all border-b-4 border-b-blue-500/20">
                         <div className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/10 pb-4">
                            <Activity size={16} /> Tips & Scaling
                         </div>
                         <CodeExample 
                           color="blue"
                           title="Data Scaling"
                           code={`import numpy as np\n\ndata = np.array([100, 200, 300])\nscaled = np.exp(data / 100)\n\nprint("Scaled Growth Data:")\nprint(scaled)`} 
                           output="Scaled Growth Data:\n[ 2.7183  7.3891  20.0855]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'perf' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Cpu} title="5. Performance Insights" color="indigo" />
                   
                   <div className="bg-indigo-950/10 border border-indigo-500/30 rounded-[4rem] p-16 relative overflow-hidden group mb-16">
                      <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:scale-110 transition-transform duration-[2s]">
                         <Zap size={240} />
                      </div>
                      <h3 className="text-4xl font-black text-white mb-8">Vectorization vs Loops</h3>
                      <p className="text-xl text-slate-300 font-light leading-relaxed mb-12 italic">
                        np.exp() uses optimized C code under the hood. It is significantly faster than standard Python list comprehensions.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                         <div className="p-10 bg-black/60 rounded-3xl border border-rose-500/20">
                            <h5 className="text-xs font-black text-rose-500 uppercase tracking-widest mb-6">❌ The SLOW way</h5>
                            <pre className="text-slate-500 text-sm font-mono">[e**i for i in array]</pre>
                            <p className="text-[10px] text-slate-600 font-bold mt-4">Python overhead for every element.</p>
                         </div>
                         <div className="p-10 bg-black/60 rounded-3xl border border-indigo-500/20">
                            <h5 className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-6">✅ The FAST way</h5>
                            <pre className="text-indigo-400 text-sm font-mono font-bold">np.exp(array)</pre>
                            <p className="text-[10px] text-slate-600 font-bold mt-4">Direct C execution, zero Python loop overhead.</p>
                         </div>
                      </div>

                      <div className="mt-16 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group">
                        <div className="relative z-10 max-w-3xl">
                           <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                              🧪 Mini <span className="text-indigo-400 italic font-light">Exercise</span>
                           </h3>
                           <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed text-left">
                              Try this: Define <span className="text-white font-bold">x = np.array([-1, 0, 1, 2])</span>, compute the exponential, and then apply the sigmoid formula!
                           </p>
                           <CodeExample 
                             color="indigo"
                             title="Mini Challenge"
                             code={`import numpy as np\n\nx = np.array([-1, 0, 1, 2])\n\n# 1. Compute exp(x)\nexp_val = np.exp(x)\n\n# 2. Compute sigmoid: 1 / (1 + exp(-x))\nsigmoid = 1 / (1 + np.exp(-x))\n\nprint("Exponential Values:")\nprint(exp_val)\nprint("\\nSigmoid Probabilities:")\nprint(sigmoid)`} 
                             output="Exponential Values:\n[ 0.3679  1.0000  2.7183  7.3891]\n\nSigmoid Probabilities:\n[ 0.2689  0.5000  0.7311  0.8808]" 
                           />
                        </div>
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Foundation</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Mastering Math & Neural Nets v12.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Fast Exponential Growth with Zero Loop Overhead
         </p>
      </footer>
    </div>
  );
}
