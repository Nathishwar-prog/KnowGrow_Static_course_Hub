import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, BookOpen, Scaling, Layout, AlertTriangle, Activity, Layers, Boxes, Grid3X3, ArrowDownNarrowWide } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return String(val);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix
        const rows = val.map(row => ` [${row.join('  ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.join(' ')}]`; // Vector
    }
    return String(val);
  },

  np: {
    array: (data: any) => JSON.parse(JSON.stringify(data)),
    vstack: (tup: any[]) => {
        if (!Array.isArray(tup)) throw new Error("TypeError: vstack() takes 1 positional argument but more were given");
        
        const arrays = tup.map(a => (Array.isArray(a) && Array.isArray(a[0])) ? a : [a]); // Force 2D
        
        // Shape validation: All must have same number of columns
        const cols = arrays[0][0].length;
        for (let i = 1; i < arrays.length; i++) {
            if (arrays[i][0].length !== cols) {
                throw new Error("ValueError: all the input array dimensions for the concatenation axis must match exactly");
            }
        }

        // Concatenate along axis 0
        return [].concat(...arrays as any);
    },
    concatenate: (tup: any[], axis: number = 0) => {
        if (axis === 0) return NumpySandbox.np.vstack(tup);
        return tup;
    },
    reshape: (a: any, shape: number[]) => {
        // Mock reshape for 1D to row-matrix
        if (shape[1] === -1 && shape[0] === 1) return [a];
        return a;
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
       .replace(/np\.vstack\(\((.+?)\)\)/g, 'np.vstack([$1])')
       .replace(/np\.vstack\((.+?)\)/g, 'np.vstack($1)')
       .replace(/np\.concatenate\(\((.+?)\),\s*axis=(.+?)\)/g, 'np.concatenate([$1], $2)')
       .replace(/(\w+)\.reshape\((.+?)\)/g, 'np.reshape($1, [$2])')
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

export default function NpVstack() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8 font-sans">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5 font-sans font-black`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left font-sans font-black">{title}</h2>
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30 font-sans font-black',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30 font-sans font-black',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30 font-sans font-black',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30 font-sans font-black',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30 font-sans font-black',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30 font-sans font-black',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30 font-sans font-black',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl font-sans font-black">
          <div className="flex items-center gap-4 text-left font-sans font-black">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans font-black`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">Vertical Stacking Terminal</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans font-black">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none font-sans font-black`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'STACKING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans font-black">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800 font-sans font-black">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-indigo-300 outline-none resize-none selection:bg-indigo-500/20 font-sans font-black"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans font-black">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-white font-sans font-black">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans font-black"></div> Row-Aligned Matrix Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Stacking resolution pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-600/40 selection:text-white font-sans antialiased overflow-x-hidden font-sans">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6 font-sans">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617] font-sans font-black"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px] font-sans font-black"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans font-black"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left font-sans font-black">
          <div className="flex-1 font-sans font-black font-sans font-black">
            <div className="flex items-center gap-6 mb-10 font-sans font-black">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent font-sans font-black font-sans"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Vectorized Dimensional Layering</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left font-sans font-black font-sans font-black">
               np.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic font-sans font-black">vstack</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold font-sans">
               Master the art of <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Vertical Integration</span>. Combine datasets by stacking row upon row, enabling the construction of large feature matrices from atomic coordinate sets with high-speed C-level precision.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans font-black">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <Layers size={24} className="text-indigo-400 font-sans font-black" /> Vertical Resolver
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left font-sans font-black">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left font-sans font-black">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans font-black">
              {[
                { id: 'concept', label: '1. Layering Theory', icon: BookOpen },
                { id: '1d', label: '2. Basic Vector Stack', icon: Layers },
                { id: '2d', label: '3. Matrix Row-Fusion', icon: Grid3X3 },
                { id: 'multi', label: '4. Triple-Point Stack', icon: ArrowDownNarrowWide },
                { id: 'pro', label: '5. Senior Stacking Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic font-sans font-black font-sans font-black font-sans font-black font-sans' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans font-black font-sans font-black font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold font-sans font-black">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans font-black">
                  <Layout size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Conceptual Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  Think of <code className="text-indigo-300 font-black font-sans italic">vstack</code> like stacking physical papers 📄. You place the second Array directly underneath the first, increasing the total number of rows while keeping column width constant.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <Activity size={20} /> behind the Scenes
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold font-sans font-black font-sans font-black">
                  Internally, <code className="text-indigo-300 font-black font-sans italic font-sans font-black">vstack</code> is a high-speed wrapper for <code className="text-indigo-300 font-black font-sans italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black">np.concatenate((a, b), axis=0)</code>, optimized for 2D matrix growth.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <AlertTriangle size={20} /> Shape Guard ⚠️
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                  Vertical stacking will trigger a <span className="text-rose-300 font-bold font-sans font-black underline italic font-sans">ValueError</span> if your arrays do not share the exact same number of <span className="text-rose-300 font-bold font-sans font-black underline italic">Columns</span>. Horizontal alignment is mandatory.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans font-black">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans font-black font-sans font-black">
                <section>
                   <SectionHeader icon={Info} title="1. Dimensional Layering Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans font-black"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                         <span className="text-indigo-400 font-bold italic font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">Vertical Fusion</span> is the act of reordering matrices row by row. In NumPy, this power feature is used for building ML training pools, combining sensor logs from multiple time-steps, and rotating images by re-layering color planes.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Pool", desc: "Dataset building", icon: "📚" },
                           { label: "Logs", desc: "Time-series fusion", icon: "📉" },
                           { label: "Images", desc: "Row manipulation", icon: "📷" },
                           { label: "Batches", desc: "ML training samples", icon: "🤖" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans font-black font-sans font-black font-sans font-black">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed font-sans">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group mb-16 text-left font-sans font-black">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                         <Scaling className="text-indigo-500 font-sans font-black font-sans font-black font-sans font-black" size={28} /> Column Alignment Law
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                         Arrays can have different number of rows, but they must have the <span className="text-indigo-400 font-bold font-sans font-black italic">Exact Same Columns</span> to fuse vertically.
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === '1d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black">
                <section>
                   <SectionHeader icon={Layers} title="2. Basic Vector Stacking" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                      Transform multiple <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">1D Vectors</span> into a high-order 2D matrix structure.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Dual-Vector Stack Terminal"
                    description="Executing np.vstack on two separate 1D coordinate sets."
                    code={`import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\n# Fuse Row-wise\nresult = np.vstack((a, b))\n\nprint("Determined Matrix Grid:")\nprint(result)`} 
                    output="Determined Matrix Grid:\n[[1 2 3]\n [4 5 6]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2d' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Grid3X3} title="3. Matrix Row-Fusion resolve" color="violet" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                      Merge existing <span className="text-violet-400 font-bold font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black">2D Blocks</span> to create larger deep-rank datasets.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="Matrix Layering Sandbox"
                    description="Executing np.vstack on two compatible 2D matrix blocks."
                    code={`import numpy as np\n\na = np.array([[1, 2, 3]])\nb = np.array([[4, 5, 6]])\n\n# Vertical Layering\nresult = np.vstack((a, b))\n\nprint("Determined Integrated Grid:")\nprint(result)`} 
                    output="Determined Integrated Grid:\n[[1 2 3]\n [4 5 6]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'multi' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={ArrowDownNarrowWide} title="4. Triple-Point Transmission" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black font-sans font-black">
                     Stack an <span className="text-rose-400 font-black underline decoration-rose-500/30 underline-offset-8">Indefinite Tuple</span> of arrays in a single atomic transmission module.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="N-Array Stack Terminal"
                    description="Executing np.vstack on an 11, 22, 33 triple-coordinate pool."
                    code={`import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nc = np.array([7, 8, 9])\n\n# Infinite tuple support\nresult = np.vstack((a, b, c))\n\nprint("Determined Triple-Stack:")\nprint(result)`} 
                    output="Determined Triple-Stack:\n[[1 2 3]\n [4 5 6]\n [7 8 9]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black font-sans font-black">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Stacking Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold font-sans font-black font-sans font-black">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group font-sans font-black">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black font-sans font-black">
                            <Boxes size={16} /> Dataset Builder
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold font-sans font-black">
                            Use as the primary for feature collection: <code className="text-cyan-300">data = np.vstack((pool1, pool2))</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black">
                            <Layout size={16} /> flexibility Tip
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                            For advanced multi-axis control, prefer <code className="text-emerald-300">np.concatenate</code> with explicit <span className="text-emerald-300">axis=0</span>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Layers size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                            ⚡ Coordinate <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">Fusion hub</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans font-black font-sans font-black">Triple-Layer Stack</span> for the coordinate pool!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Dataset Fusion Lab"
                           code={`import numpy as np\n\na = np.array([10, 20, 30])\nb = np.array([40, 50, 60])\nc = np.array([70, 80, 90])\n\n# Resolve Triple Fusion\nresult = np.vstack((a, b, c))\n\nprint("Determined Fusion Grid:")\nprint(result)`} 
                           output="Determined Fusion Grid:\n[[10 20 30]\n [40 50 60]\n [70 80 90]]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">Vertical Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
            High-Performance Dimensional Layering with row-wise vstack and Column-Alignment Shape Protection
         </p>
      </footer>
    </div>
  );
}
