import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, Layers, Maximize2, MoveDiagonal, TrendingUp, AlertTriangle } from 'lucide-react';
import BroadcastingVisualizer from '../../components/visualizers/BroadcastingVisualizer';

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
    mean: (arr: any[]) => {
        const flat = arr.flat(Infinity);
        return flat.reduce((s: number, v: number) => s + v, 0) / flat.length;
    },
    // Simulation of broadcasting addition/multiplication
    _op: (a: any, b: any, fn: (x: number, y: number) => number) => {
        const isArrA = Array.isArray(a);
        const isArrB = Array.isArray(b);

        // Scalar + Array
        if (!isArrA && isArrB) return b.map((v: any) => Array.isArray(v) ? v.map((x: any) => fn(a, x)) : fn(a, v));
        // Array + Scalar
        if (isArrA && !isArrB) return a.map((v: any) => Array.isArray(v) ? v.map((x: any) => fn(x, b)) : fn(v, b));

        // 2D Array + 1D Vector (Row-wise)
        if (isArrA && isArrB && Array.isArray(a[0]) && !Array.isArray(b[0])) {
            return a.map(row => row.map((v: number, i: number) => fn(v, b[i])));
        }

        // 2D Array + 2D Column Vector (Column-wise)
        if (isArrA && isArrB && Array.isArray(a[0]) && Array.isArray(b[0]) && b[0].length === 1) {
            return a.map((row, i) => row.map(v => fn(v, b[i][0])));
        }

        return a; // Default fallback
    },
    add: (a: any, b: any) => NumpySandbox.np._op(a, b, (x, y) => x + y),
    subtract: (a: any, b: any) => NumpySandbox.np._op(a, b, (x, y) => x - y),
    multiply: (a: any, b: any) => NumpySandbox.np._op(a, b, (x, y) => x * y),
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
       .replace(/(\w+) \+ (\w+)/g, 'np.add($1, $2)')
       .replace(/(\w+) - (\w+)/g, 'np.subtract($1, $2)')
       .replace(/(\w+) \* (\w+)/g, 'np.multiply($1, $2)')
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

export default function NpBroadcastingModule() {
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
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Broadcasting Sandbox'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[11px] font-black py-2.5 px-7 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'EXPANDING...' : 'EXECUTE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[220px]">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Expansion Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Broadcast value stream'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Immersive Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1100px] h-[1100px] bg-blue-600/5 rounded-full blur-[180px] -mr-[550px] -mt-[550px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-64 -mb-64"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em]">Automatic Dimensional Compatibility</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               NumPy <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">Broadcasting</span>
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Operations on mismatching shapes. NumPy automatically expands smaller arrays to match larger ones—without needlessly copying data in memory.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Maximize2 size={24} className="text-blue-400" /> Auto-Expansion
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
                { id: 'concept', label: '1. The Golden Rule', icon: BookOpen },
                { id: 'visual', label: '2. Spacing Visuals', icon: Layers },
                { id: 'usage', label: '3. Compatibility', icon: Zap },
                { id: 'apps', label: '4. Case Studies', icon: MoveDiagonal }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-125 transition-transform duration-700">
                  <Maximize2 size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4">
                  <Lightbulb size={20} /> Shape Tip
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Broadcasting describes how NumPy treats arrays with <span className="text-blue-300 font-black underline underline-offset-4 decoration-blue-500/30">different shapes</span> during operations. It loops in C, not Python!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. What is Broadcasting?" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl">
                         Broadcasting allows NumPy to perform arithmetic on arrays of <span className="text-blue-400 font-bold">different shapes</span> by virtually stretching the smaller dimensions.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Avoid Loops", desc: "No manual iteration", icon: "⚡" },
                           { label: "Faster Code", desc: "Native C execution", icon: "🚀" },
                           { label: "Memory Saving", desc: "No data copies", icon: "💾" },
                           { label: "Big Data", desc: "Scalable transforms", icon: "🤖" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                         <Target size={140} />
                      </div>
                      <h4 className="text-2xl font-black text-indigo-400 mb-8 flex items-center gap-4 group-hover:text-indigo-300 transition-colors">
                         <Target size={28} /> The Golden Rule
                      </h4>
                      <p className="text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
                         Two dimensions are compatible for broadcasting only if:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="bg-black/40 p-10 rounded-3xl border border-indigo-500/30 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-indigo-400 mb-4">A == B</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">They are perfectly Equal</span>
                         </div>
                         <div className="bg-black/40 p-10 rounded-3xl border border-indigo-500/30 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-indigo-400 mb-4">A=1 | B=1</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">One of them is 1</span>
                         </div>
                      </div>
                      <p className="mt-12 text-sm text-slate-500 font-bold uppercase tracking-widest text-center italic opacity-60">Otherwise → ❌ Broadcast Error</p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'visual' && (
              <div className="space-y-20 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layers} title="2. Spatial Visualization" color="emerald" />
                   <div className="bg-slate-900 border border-slate-800 rounded-[4rem] p-12 shadow-3xl overflow-hidden relative">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                         <Maximize2 size={300} />
                      </div>
                      <div className="relative z-10">
                        <BroadcastingVisualizer />
                      </div>
                   </div>
                   
                   <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] group hover:bg-slate-800/40 transition-all">
                         <div className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-6">Process Log</div>
                         <h4 className="text-white font-bold text-xl mb-4">Scalar Expansion</h4>
                         <p className="text-sm text-slate-400 leading-relaxed italic">
                            A single scalar (e.g., 2.0) is virtually stretched to fill the entire shape of the larger array before math occurs.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] group hover:bg-slate-800/40 transition-all">
                         <div className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-6">Direction Logic</div>
                         <h4 className="text-white font-bold text-xl mb-4">Right-to-Left Alignment</h4>
                         <p className="text-sm text-slate-400 leading-relaxed italic">
                            NumPy compares dimensions from <span className="text-white underline underline-offset-4 decoration-emerald-500/30">right to left</span> across the shape tuple.
                         </p>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="3. Implementation Patterns" color="amber" />
                   
                   <CodeExample 
                    color="amber"
                    title="1. Scalar Diffusion"
                    description="Standard broadcasting of a single value."
                    code={`import numpy as np\n\na = np.array([1, 2, 3])\nb = 2\n\n# Scalar 2 broadcasted to [2, 2, 2]\nresult = a + b\n\nprint("Scalar Result:")\nprint(result)`} 
                    output="Scalar Result:\n[3 4 5]" 
                  />

                   <CodeExample 
                    color="emerald"
                    title="2. Row-wise (1D + 2D)"
                    description="Expanding a vector across 2D matrix rows."
                    code={`import numpy as np\n\na = np.array([\n    [1, 2, 3],\n    [4, 5, 6]\n])\n\nb = np.array([10, 20, 30])\n\n# Row-wise broadcasting automatically\nresult = a + b\n\nprint("2D + 1D Comparison:")\nprint(result)`} 
                    output="2D + 1D Comparison:\n[[11 22 33]\n [14 25 36]]" 
                  />

                   <CodeExample 
                    color="blue"
                    title="3. Column-wise (New Axis)"
                    description="Applying vertical expansion with 2D column vectors."
                    code={`import numpy as np\n\na = np.array([\n    [1, 2, 3],\n    [4, 5, 6]\n])\n\n# Column vector for vertical stretch\nb = np.array([[10], [20]])\n\nresult = a + b\n\nprint("Column Expansion Result:")\nprint(result)`} 
                    output="Column Expansion Result:\n[[11 12 13]\n [24 25 26]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'apps' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={MoveDiagonal} title="4. Real-World Case Studies" color="rose" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                      {[
                        { title: "Normalize", desc: "Broadcast mean across entire data sensors", icon: "📊" },
                        { title: "Brightness", desc: "Shift image pixel intensity globally", icon: "🖼️" },
                        { title: "Weights", desc: "Scale features in neural network layers", icon: "🧠" }
                      ].map((app, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem] group hover:bg-slate-800/60 transition-all border-b-4 border-b-rose-500/20">
                           <span className="text-4xl mb-6 block grayscale group-hover:grayscale-0 transition-all">{app.icon}</span>
                           <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3">{app.title}</h4>
                           <p className="text-xs text-slate-500 font-bold leading-relaxed">{app.desc}</p>
                        </div>
                      ))}
                   </div>

                   <div className="space-y-10">
                      <div className="p-10 bg-slate-950/40 border border-slate-800 rounded-[3.5rem] relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                            <Layers size={180} />
                         </div>
                         <h4 className="text-white font-black text-2xl mb-12 flex items-center gap-4">
                            <Layers className="text-rose-500" size={28} /> Advanced Dimensional Manipulation
                         </h4>
                         <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                            <div>
                               <div className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                                  <TrendingUp size={16} /> Data Normalization
                               </div>
                               <CodeExample 
                                 color="rose"
                                 code={`import numpy as np\n\ndata = np.array([10, 20, 30])\nmean = np.mean(data)\n\n# Mean (20.0) broadcasted to [20, 20, 20]\nnormalized = data - mean\n\nprint(f"Original: {data}")\nprint(f"Normalized: {normalized}")`} 
                                 output="Original: [10 20 30]\nNormalized: [-10.   0.  10.]" 
                               />
                            </div>
                            <div>
                               <div className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                                  <Maximize2 size={16} /> Axis Conversion
                               </div>
                               <CodeExample 
                                 color="rose"
                                 title="np.newaxis Trick"
                                 code={`import numpy as np\n\na = np.array([1, 2, 3])\n\n# Converts (3,) to (3, 1) column vector\nb = a[:, np.newaxis]\n\nprint("Column Vector Shape:")\nprint(b.shape)\nprint(b)`} 
                                 output="Column Vector Shape:\n(3, 1)\n[[1]\n [2]\n [3]]" 
                               />
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Maximize2 size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Proficiency <span className="text-blue-400 italic font-light">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                            Apply weight-based scaling to a production input matrix: <span className="text-white font-bold italic">inputs * weights</span>. Master the automatic expansion!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Expansion Challenge"
                           code={`import numpy as np\n\na = np.array([[1, 2, 3],\n              [4, 5, 6]])\nb = np.array([1, 2, 3])\n\n# Multiplicative broadcasting across all rows\nresult = a * b\n\nprint("Final Scaled Matrix:")\nprint(result)`} 
                           output="Final Scaled Matrix:\n[[1  4  9]\n [4 10 18]]" 
                         />
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
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Intelligence</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Implicit Vector Expansion v7.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Stretching Dimensions Without Duplicate Copies
         </p>
      </footer>
    </div>
  );
}
