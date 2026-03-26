import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Boxes, ListFilter, MoveHorizontal, ArrowRight, Hammer } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(1);

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
    array: (data: any) => JSON.parse(JSON.stringify(data)), // Mock as deep copy for initial
    ravel: (a: any, params: any = {}) => {
        const order = params.order || 'C';
        if (!Array.isArray(a[0])) return [...a];
        if (order === 'C') return a.flat();
        if (order === 'F') {
            const rows = a.length;
            const cols = a[0].length;
            const res = [];
            for (let j = 0; j < cols; j++) {
                for (let i = 0; i < rows; i++) {
                   res.push(a[i][j]);
                }
            }
            return res;
        }
        return a.flat();
    },
    flatten: (a: any) => [...a.flat()]
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
       .replace(/np\.ravel\((.+?),\s*order=(.+?)\)/g, 'np.ravel($1, {order: $2})')
       .replace(/np\.ravel\((.+?)\)/g, 'np.ravel($1)')
       .replace(/(.+?)\.ravel\(\)/g, 'np.ravel($1)')
       .replace(/(.+?)\.flatten\(\)/g, 'np.flatten($1)')
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

export default function NpRavel() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left font-sans font-black">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title, description, color="cyan" }: any) => {
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Flattening Resolver Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'FLATTENING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-cyan-300 outline-none resize-none selection:bg-cyan-500/20 font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> 1D Vector Resolution
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Vector resolution pending...'}
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-[#020617] font-sans"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-cyan-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1 font-sans">
            <div className="flex items-center gap-6 mb-10 font-sans">
              <div className="h-px w-20 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.6em] font-sans">Vectorized Data Flattening</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">ravel</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold">
               Surgically collapse dimensions into a <span className="text-white font-medium italic underline decoration-cyan-500/30 underline-offset-8">1D Flattened View</span>. The high-speed conduit for preparing image data for neural networks and converting complex matrices into linear vectors without additional memory costs.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <Layers size={24} className="text-cyan-400 font-sans" /> Dimension Compression
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans">
              {[
                { id: 'concept', label: '1. Dimensional Collapse', icon: BookOpen },
                { id: 'order', label: '2. C vs F Flattening', icon: MoveHorizontal },
                { id: 'vsview', label: '3. View vs Copy', icon: RefreshCw },
                { id: 'image', label: '4. Image Normalization', icon: Layout },
                { id: 'pro', label: '5. Senior Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-cyan-600 border-cyan-500 text-white shadow-[0_20px_60px_rgba(8,145,178,0.4)] active:scale-95 text-left font-sans italic' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-cyan-500/5 border border-cyan-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-cyan-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Dev Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold font-sans">
                  <code className="text-cyan-300 font-black font-sans">np.ravel()</code> returns a <span className="text-cyan-200 font-black font-sans italic">View</span> whenever possible. This means no new memory is allocated, making it significantly faster than creating a copy with <code className="text-cyan-300 font-black font-sans underline italic">flatten()</code>.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black">
                  <Target size={20} /> ML Pipeline
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold">
                  Image matrices must be <span className="text-indigo-300 font-black font-sans font-bold font-sans">Flattened</span> into vectors before they can be processed by dense layers of a neural network.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black">
                  <AlertTriangle size={20} /> View Hazard
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-bold">
                  Since <code className="text-rose-300 font-bold font-sans font-black">ravel()</code> creates a view, modifying the flattened vector will <span className="text-rose-300 font-bold font-sans font-black underline italic">Change the Original Matrix</span>!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Dimensional Compression Theory" color="cyan" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-cyan-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans">
                         <span className="text-cyan-400 font-bold italic font-sans font-bold font-sans">np.ravel()</span> is the constructor for surgical dimension collapse. It transforms any multi-axis structure into a contiguous 1D stream, ready for immediate processing.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "ML Ready", desc: "Linearize features", icon: "🧠" },
                           { label: "Images", desc: "Pixel flattening", icon: "🖼️" },
                           { label: "Simplification", desc: "Easy iteration", icon: "📉" },
                           { label: "Speed", desc: "No memory allocation", icon: "⚡" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-cyan-500/20 font-sans font-black">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="cyan"
                    title="1D Compression Sandbox"
                    description="Converting a 2×3 matrix into a single 6-element linear array."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Collapse dimensions row-by-row\nflat = np.ravel(arr)\n\nprint("Determined 1D Vector:")\nprint(flat)`} 
                    output="Determined 1D Vector:\n[1 2 3 4 5 6]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'order' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={MoveHorizontal} title="2. Compression sequence Control" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      Choose between <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">Row-major ('C')</span> and <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">Column-major ('F')</span> sequences to define your vector's organization.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Sequence Switch Lab"
                    description="Executing column-wise ('F') flattening on a 2×3 matrix."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\n# Fortran-style Column-wise flattening\nflat_f = np.ravel(arr, order='F')\n\nprint("Column-wise Result:")\nprint(flat_f)`} 
                    output="Column-wise Result:\n[1 3 2 4]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'vsview' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={RefreshCw} title="3. View vs Copy: Performance Bridge" color="emerald" />
                   
                   <div className="p-12 bg-emerald-950/20 border border-emerald-500/30 rounded-[3rem] group">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <Hammer className="text-emerald-500 font-sans" size={28} /> Efficiency Battle: ravel() vs flatten()
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic">
                         <code className="text-emerald-400 font-bold">ravel()</code> creates a <span className="text-emerald-400 font-bold italic underline">View</span> — modifying it changes the original. 
                         <code className="text-emerald-400 font-bold">flatten()</code> creates an independent <span className="text-emerald-400 font-bold italic underline">Copy</span>.
                      </p>

                      <CodeExample 
                        color="emerald"
                        title="Memory Interaction Hub"
                        description="Modifying a ravel() vector and observing the change in the source matrix."
                        code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\n# Create view\nflat = np.ravel(arr)\n\n# Modification impacts original!\nflat[0] = 100\n\nprint("Modified Source Matrix:")\nprint(arr)`} 
                        output="Modified Source Matrix:\n[[100   2]\n [  3   4]]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'image' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="4. Image Feature Normalization" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                     Neural networks digest <span className="text-rose-400 font-black underline decoration-rose-500/30 underline-offset-8">Linear feature Vectors</span>. Use ravel() to instantly convert 2D pixel grids into 1D data streams.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Pixel-to-Feature Lab"
                    description="Flattening a small 2x2 grayscale pixel grid into an ML feature vector."
                    code={`import numpy as np\n\nimage = np.array([[255, 0], [128, 64]])\n\n# Preprocessing for Neural Network\nfeatures = np.ravel(image)\n\nprint("Flattened Feature Vector:")\nprint(features)`} 
                    output="Flattened Feature Vector:\n[255   0 128  64]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Efficiency Protocols" color="amber" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold font-sans">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black">
                            <MoveHorizontal size={16} /> .ravel() Attribute
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold font-sans">
                            Always use the shorthand <code className="text-cyan-300">arr.ravel()</code> for cleaner syntax in your data pipelines.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left font-sans font-bold">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black">
                            <Scaling size={16} /> Shape Chaining
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Chain with reshape for orientation: <code className="text-emerald-300">arr.ravel().reshape(-1, 1)</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-cyan-800/40 to-indigo-800/20 border border-cyan-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Boxes size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-sans font-black">
                            🧪 Large Array <span className="text-cyan-400 italic font-light font-sans font-bold font-sans font-sans font-black">Mission</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans">Sequential Matrix Linearization</span> using column-major order to resolve hidden vector patterns!
                         </p>
                         <CodeExample 
                           color="cyan"
                           title="Surgical Linearizer Lab"
                           code={`import numpy as np\n\narr = np.array([[10, 20, 30], [40, 50, 60]])\n\n# Efficient column-wise collapse\nresult = np.ravel(arr, order='F')\n\nprint("Column-wise Feature Vector:")\nprint(result)`} 
                           output="Column-wise Feature Vector:\n[10 40 20 50 30 60]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-cyan-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-cyan-600/40 font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black">Dimension Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black">
            Surgical Dimension Collapse with memory-efficient View Resolution
         </p>
      </footer>
    </div>
  );
}
