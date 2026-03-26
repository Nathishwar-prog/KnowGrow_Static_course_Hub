import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Boxes, Maximize, ArrowRight, Hammer } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'string' && val.startsWith('ValueError')) return val;
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(1);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Multi-dimensional
        if (Array.isArray(val[0][0])) { // 3D
           const depth = val.map(slice => `  [\n${slice.map(row => `   [${row.map(NumpySandbox._format).join(' ')}]`).join('\n')}\n  ]`);
           return `[\n${depth.join('\n\n')}\n]`;
        }
        const rows = val.map(row => ` [${row.map(NumpySandbox._format).join(' ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.map(NumpySandbox._format).join(' ')}]`; // Vector
    }
    return String(val);
  },

  np: {
    array: (data: any) => data,
    reshape: (a: any, ...shapeArgs: any[]) => {
        const flat = Array.isArray(a[0]) ? a.flat(Infinity) : a;
        const total = flat.length;
        
        let targetShape: number[] = [];
        if (Array.isArray(shapeArgs[0])) {
            targetShape = [...shapeArgs[0]];
        } else {
            targetShape = [...shapeArgs];
        }

        // Handle -1 Automatic Dimension
        const minusOneIndex = targetShape.indexOf(-1);
        if (minusOneIndex !== -1) {
            const productOfOthers = targetShape.reduce((p, c, i) => i === minusOneIndex ? p : p * c, 1);
            if (productOfOthers === 0) return `ValueError: cannot reshape with zero product dimension`;
            targetShape[minusOneIndex] = total / productOfOthers;
        }

        const newTotal = targetShape.reduce((p, c) => p * c, 1);
        if (newTotal !== total || !Number.isInteger(newTotal)) {
            return `ValueError: cannot reshape array of size ${total} into shape (${targetShape.join(',')})`;
        }

        const buildReshape = (data: any[], shape: number[]): any => {
            if (shape.length === 1) return data;
            const [dim, ...rest] = shape;
            const chunkSize = data.length / dim;
            const result = [];
            for (let i = 0; i < dim; i++) {
                result.push(buildReshape(data.slice(i * chunkSize, (i + 1) * chunkSize), rest));
            }
            return result;
        };

        return buildReshape(flat, targetShape);
    }
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
       .replace(/np\.reshape\((.+?),\s*\((.+?)\)\)/g, 'np.reshape($1, $2)')
       .replace(/np\.reshape\((.+?),\s*(.+?)\)/g, 'np.reshape($1, $2)')
       .replace(/(.+?)\.reshape\((.+?)\)/g, 'np.reshape($1, $2)')
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

export default function NpReshape() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left font-sans font-black">{title}</h2>
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30 font-sans',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30 font-sans',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30 font-sans',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30 font-sans',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30 font-sans',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30 font-sans',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30 font-sans',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl font-sans">
          <div className="flex items-center gap-4 text-left font-sans">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Adaptive Geometry Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'RESHAPING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20 font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Geometric Interpretation
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Adaptive geometry resolution pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617] font-sans"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1 font-sans">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent font-sans"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em] font-sans">Geometric Dimension Reformer</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">reshape</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold">
               Refactor array architecture without altering a single bit of data. The fundamental engine for <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8 font-sans">Structural Transformation</span>, preparing linear streams for neural networks and complex multi-dimensional matrix operations.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black font-sans">
               <Maximize size={24} className="text-blue-400 font-sans" /> Geometry Shift
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans">
              {[
                { id: 'concept', label: '1. Topological Theory', icon: BookOpen },
                { id: 'sizes', label: '2. Total Element Rule', icon: Scaling },
                { id: 'automatic', label: '3. Auto-Dimension (-1)', icon: RefreshCw },
                { id: '3d', label: '4. Tensors (3D Labs)', icon: Boxes },
                { id: 'pro', label: '5. Senior Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95 text-left font-sans italic' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-110 transition-transform duration-700">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Senior Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold font-sans">
                  Reshaping is <span className="text-blue-300 font-black font-sans italic">Memory Efficient</span>. In most cases, it returns a "view" of the data instead of copying it, allowing you to manipulate huge datasets instantly.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold font-sans">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black">
                  <Scaling size={20} /> Pipeline Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  Dimensionality mismatch is the most common bug in ML pipes. Use <span className="text-indigo-300 font-black font-sans italic font-sans font-bold font-sans">.reshape(-1, 1)</span> to safely convert data to a single column.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black">
                  <AlertTriangle size={20} /> Size Constraint
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black">
                  The product of your new dimensions <code className="text-rose-300 font-bold font-sans font-black font-sans">MUST</code> exactly match the total original elements. No more, no less!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans font-black font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans">
                <section>
                   <SectionHeader icon={Info} title="1. Structural Transformation Theory" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left font-sans font-bold font-sans">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl text-left font-sans font-bold">
                         <span className="text-blue-400 font-bold italic font-sans font-bold">np.reshape()</span> redefines the "view" of an array. The data remains static in memory, but the coordinate system used to access it is surgically refactored.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "ML Reform", desc: "Linearizing inputs", icon: "🧠" },
                           { label: "Tensorize", desc: "Building 3D grids", icon: "📦" },
                           { label: "Pixel Shifts", desc: "Image restructuring", icon: "🖼️" },
                           { label: "Efficiency", desc: "Zero-copy transformations", icon: "⚡" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20 font-sans font-black">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="blue"
                    title="Basic Refactoring Sandbox"
                    description="Converting a 1D vector of 6 elements into a 2×3 matrix."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4, 5, 6])\n\n# Refactor to 2 rows and 3 columns\nreshaped = np.reshape(arr, (2, 3))\n\nprint("Geometric Transformation Result:")\nprint(reshaped)`} 
                    output="Geometric Transformation Result:\n[[1 2 3]\n [4 5 6]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'sizes' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Scaling} title="2. The Absolute Multiplier Law" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      In the world of reshaping, <span className="text-rose-400 font-black underline decoration-rose-500/30 underline-offset-8">Scale Equality</span> is absolute. The product of your dimensions must exactly match the number of elements in the source.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Boundary Constraint terminal"
                    description="Triggering a size mismatch error to observe system behavior."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4, 5, 6])\n\n# Try to force 6 elements into a 3x3 (9 holes) grid\n# This will throw a ValueError\ntry:\n    np.reshape(arr, (3, 3))\nexcept Exception as e:\n    print(f"System Error: {e}")`} 
                    output="System Error: cannot reshape array of size 6 into shape (3,3)" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'automatic' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={RefreshCw} title="3. The Intelligence of -1" color="emerald" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black">
                      Don't calculate dimensions manually. Use <span className="text-emerald-400 font-bold font-sans font-black italic">Automatic Solver (-1)</span> to tell NumPy to deduce the missing coordinate based on the total elements.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Adaptive Dimension Solver"
                    description="Using -1 to tell NumPy: 'You figure out how many columns are needed for 2 rows'."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4, 5, 6])\n\n# Deduce columns automatically from 2 rows\nreshaped = arr.reshape(2, -1)\n\nprint("Solved Adaptive Geometry:")\nprint(reshaped)`} 
                    output="Solved Adaptive Geometry:\n[[1 2 3]\n [4 5 6]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '3d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Boxes} title="4. Higher-Order Tensor Construction" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                     Building <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">Tensors (3D+)</span> is fundamental for deep learning. Scale your 1D linear stream into deep volumetric blocks.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Tensor Synthesis Lab"
                    description="Converting an 8-element vector into a 2×2×2 volumetric cube."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8])\n\n# Tensorize: (depth, rows, columns)\nreshaped = arr.reshape(2, 2, 2)\n\nprint("Volumetric Tensor Resolved:")\nprint(reshaped)`} 
                    output="Volumetric Tensor Resolved:\n[\n  [\n   [1 2]\n   [3 4]\n  ]\n\n  [\n   [5 6]\n   [7 8]\n  ]\n]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Architectural Protocols" color="amber" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black">
                            <Scaling size={16} /> Column Vector Bias
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Always use <code className="text-cyan-300">.reshape(-1, 1)</code> for ML features. It forces data into a column without calculating sample size.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black">
                            <Layers size={16} /> Chain Logic
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Ravel first for safety: <code className="text-emerald-300">arr.ravel().reshape(3, 2)</code>. This ensures you're working with a clean linear stream.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-blue-800/40 to-indigo-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold font-sans">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Maximize size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-sans font-black font-sans font-black">
                            🧪 Architectural <span className="text-blue-400 italic font-light font-sans font-bold font-sans font-sans font-black font-sans font-black">Mission</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold font-sans">
                             Challenge: Design an <span className="text-white font-bold italic font-sans font-bold font-sans">ML Feature Prep mission</span> where you convert a 1D dataset into the column-major format required for regression!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Feature Alignment Lab"
                           code={`import numpy as np\n\ndata = np.array([1, 2, 3, 4])\n\n# Convert to required ML input format: (samples, 1 feature)\nreshaped = data.reshape(-1, 1)\n\nprint("Normalized ML Feature Matrix:")\nprint(reshaped)`} 
                           output="Normalized ML Feature Matrix:\n[[1]\n [2]\n [3]\n [4]]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40 font-sans font-black">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black italic">Geometric Resolver v4.5</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans">
            Surgical Topological refactoring with Automatic Dimension Solver (-1)
         </p>
      </footer>
    </div>
  );
}
