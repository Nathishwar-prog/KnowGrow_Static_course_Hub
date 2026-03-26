import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Grid, PaintBucket, AlertTriangle, RotateCw, Activity, Cpu, CodeXml, Layers, Square } from 'lucide-react';

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
    full: (shape: any, fill_value: any) => {
        let r, c;
        if (Array.isArray(shape)) {
            [r, c] = shape;
        } else {
            r = shape;
            c = null;
        }
        
        if (c === null) {
            return Array(r).fill(fill_value);
        }
        return Array.from({ length: r }, () => Array(c).fill(fill_value));
    },
    zeros: (shape: any) => NumpySandbox.np.full(shape, 0),
    ones: (shape: any) => NumpySandbox.np.full(shape, 1),
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

export default function NpFull() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title, description, color="indigo" }: any) => {
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
        purple: 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/30',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Initialization Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'FILLING DATA...' : 'RUN BUILD'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px]">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-cyan-300 outline-none resize-none selection:bg-cyan-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Array Stream
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Constant matrix pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-cyan-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.6em]">Uniform Array Generation</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent italic tracking-[-0.08em]">full</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Create highly-optimized arrays of any shape filled with a single, constant value. The <span className="text-white font-medium italic underline decoration-cyan-500/30 underline-offset-8">customizable successor</span> to np.zeros() and np.ones().
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <PaintBucket size={24} className="text-cyan-400" /> Constant Fill
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
                { id: 'concept', label: '1. Core Theory', icon: BookOpen },
                { id: 'shapes', label: '2. Shape Geometry', icon: Layers },
                { id: 'compare', label: '3. Variation Grid', icon: Target },
                { id: 'apps', label: '4. AI & Signal Apps', icon: Cpu },
                { id: 'pro', label: '5. Pro Workflows', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-cyan-600 border-cyan-500 text-white shadow-[0_20px_60px_rgba(6,182,212,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-cyan-500/5 border border-cyan-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-cyan-500/10 group-hover:scale-125 transition-transform duration-700">
                  <RotateCw size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/20 pb-4">
                  <Lightbulb size={20} /> Teacher Advice 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  Compare with zeros() and ones() first. It's just a customizable version of them! Show real-world weight initialization in ML to anchor the concept.
               </p>
            </div>
            
            <div className="mt-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Activity size={20} /> Matrix Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Visualizing a matrix using heatmaps helps students see uniform patterns and structure clearly. Perfect for "Constant Pixels" demos.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Formatting Error
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Don't forget the <span className="text-rose-300 font-black italic underline decoration-rose-500/30 underline-offset-4 font-black italic font-black font-black font-black">tuple</span> for 2D. <code className="text-rose-300">np.full(3, 3, 7)</code> will fail—use <code className="text-rose-300">np.full((3, 3), 7)</code>.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. What is np.full?" color="cyan" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-cyan-600 pl-12 max-w-4xl text-left">
                         <span className="text-cyan-400 font-bold italic">np.full()</span> allows you to generate a multi-dimensional array of any shape where every element is identical to a custom <span className="text-cyan-400 font-bold">fill_value</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Weights", desc: "Constant Init", icon: "🧠" },
                           { label: "Datasets", desc: "Synthetic baseline", icon: "📈" },
                           { label: "Images", desc: "Static background", icon: "🖼️" },
                           { label: "Simulation", desc: "Standard states", icon: "🛠️" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-cyan-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="cyan"
                    title="The Standard Fill"
                    description="Creating a 3x3 matrix where every slot is assigned the number 7."
                    code={`import numpy as np\n\n# Shape: (3,3), Fill: 7\narr = np.full((3, 3), 7)\n\nprint("Custom Fill Result:")\nprint(arr)`} 
                    output="Custom Fill Result:\n[[7 7 7]\n [7 7 7]\n [7 7 7]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'shapes' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layers} title="2. Shape & Dimensionality Lab" color="emerald" />
                   
                   <div className="bg-emerald-950/10 border border-emerald-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                         <Grid size={140} />
                      </div>
                      <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-8">
                         Generate <span className="text-emerald-400 font-black">1D Vectors</span> or <span className="text-emerald-400 font-black">2D Matrices</span> instantly with zero Python loop overhead.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="bg-black/40 p-10 rounded-3xl border border-emerald-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-emerald-400 mb-4">np.full(5, 10)</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Simple 1D List (Size 5)</span>
                         </div>
                         <div className="bg-black/40 p-10 rounded-3xl border border-emerald-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-emerald-400 mb-4">np.full((2,2), 3.14)</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Floating Point Matrix</span>
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="emerald"
                    title="Precision Float Filling"
                    description="Filling a matrix with π (pie) for physics simulations."
                    code={`import numpy as np\n\n# Filling with a float\narr = np.full((2, 2), 3.14, dtype=float)\n\nprint("Pi Matrix:")\nprint(arr)`} 
                    output="Pi Matrix:\n[[3.14 3.14]\n [3.14 3.14]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'compare' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Target} title="3. The Initialization Grid" color="indigo" />
                   
                   <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
                      <table className="w-full text-left border-collapse">
                         <thead>
                            <tr className="bg-slate-800/20">
                               <th className="px-10 py-6 text-sm font-black text-slate-300 uppercase tracking-widest">Function</th>
                               <th className="px-10 py-6 text-sm font-black text-cyan-400 uppercase tracking-widest">Fill Strategy</th>
                               <th className="px-10 py-6 text-sm font-black text-emerald-400 uppercase tracking-widest">Best Use Case</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-slate-800">
                            {[
                               { f: "np.zeros()", s: "Fills with 0", u: "Empty counter grids" },
                               { f: "np.ones()", s: "Fills with 1", u: "Normalizing masks" },
                               { f: "np.full()", s: "Fills EVERYTHING", u: "Weights, specific values ✅" }
                            ].map((row, i) => (
                               <tr key={i} className="hover:bg-white/5 transition-colors">
                                  <td className="px-10 py-6 text-sm font-black text-white italic">{row.f}</td>
                                  <td className="px-10 py-6 text-sm font-medium text-slate-300">{row.s}</td>
                                  <td className="px-10 py-6 text-sm font-bold text-slate-400">{row.u}</td>
                               </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>

                   <CodeExample 
                    color="indigo"
                    title="Comparing Generation Speeds"
                    description="Speed-testing any value vs specialized zeros/ones."
                    code={`import numpy as np\n\n# The Customizable Way\nz = np.full((3, 3), 0)\no = np.full((3, 3), 1)\n\nprint("Zeros via full:")\nprint(z)`} 
                    output="Zeros via full:\n[[0 0 0]\n [0 0 0]\n [0 0 0]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'apps' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Cpu} title="4. Machine Learning & Engineering" color="rose" />
                   
                   <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <Activity size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <Cpu className="text-rose-500" size={28} /> Constant Weight Distribution
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left">
                        Initialize specific biases or layer weights in a neural network to a constant baseline before training.
                     </p>
                     
                     <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-10 overflow-hidden text-left">
                        <div className="flex items-center justify-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div key={i} className="w-12 h-12 bg-rose-500/20 border border-rose-500/40 rounded flex items-center justify-center text-[10px] font-black">0.5</div>
                            ))}
                        </div>
                     </div>

                     <CodeExample 
                        color="rose"
                        title="ML Weight Initialization"
                        description="Creating a 3x3 weight bias matrix set to 0.5."
                        code={`import numpy as np\n\nweights = np.full((3, 3), 0.5)\nprint("Layer Biases Initialized:")\nprint(weights)`} 
                        output="Layer Biases Initialized:\n[[0.5 0.5 0.5]\n [0.5 0.5 0.5]\n [0.5 0.5 0.5]]" 
                      />
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Pro-Level Workflows" color="amber" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4">
                            <Layers size={16} /> Boolean Masking
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Quickly create truth matrices for selective data access pipelines.
                         </p>
                         <CodeExample 
                           color="cyan"
                           title="Truth Grid"
                           code={`import numpy as np\n\nmask = np.full((2, 2), True)\nprint("Boolean Array:")\nprint(mask)`} 
                           output="Boolean Array:\n[[True  True]\n [True  True]]" 
                         />
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                            <Activity size={16} /> Memory Chaining
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Combine full() with arithmetic to generate complex base states instantly.
                         </p>
                         <CodeExample 
                           color="rose"
                           title="Value Offsetting"
                           code={`import numpy as np\n\n# Create 5s and add 2\narr = np.full((3, 3), 5) + 2\n\nprint("Computed Matrix:")\nprint(arr)`} 
                           output="Computed Matrix:\n[[7 7 7]\n [7 7 7]\n [7 7 7]]" 
                         />
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-cyan-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RotateCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-cyan-400 italic font-light">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                            Mini Exercise: Create a <span className="text-white font-bold">4x4 matrix</span> filled with 9, a <span className="text-white font-bold">size 6</span> 1D array of 0.5s, and a <span className="text-white font-bold">Boolean True</span> matrix.
                         </p>
                         <CodeExample 
                           color="cyan"
                           title="Laboratory Mission"
                           code={`import numpy as np\n\n# 1. 4x4 matrix of 9s\nm1 = np.full((4, 4), 9)\n\n# 2. 1D size 6 of 0.5\nm2 = np.full(6, 0.5)\n\n# 3. Boolean True\nm3 = np.full((2, 2), True)\n\nprint("Results Compiled:")\nprint(m1)`} 
                           output="Results Compiled:\n[[9 9 9 9]\n [9 9 9 9]\n [9 9 9 9]\n [9 9 9 9]]" 
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
            <div className="w-16 h-16 bg-cyan-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-cyan-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Technologies</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Constant State Initialization v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Uniform Data Generation with Zero Loop Overhead
         </p>
      </footer>
    </div>
  );
}
