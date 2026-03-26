import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Layers, AlertTriangle, RotateCw, Activity, Cpu, CodeXml, MoveHorizontal, Copy, Eye } from 'lucide-react';

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
    array: (data: any) => {
        const wrap = (d: any): any => {
            if (!Array.isArray(d)) return d;
            const res: any = d.map(v => Array.isArray(v) ? wrap(v) : v);
            
            res.flatten = (order: string = 'C') => {
                if (order === 'F') {
                    const rows = res.length;
                    const cols = res[0].length;
                    const flat = [];
                    for (let j = 0; j < cols; j++) {
                        for (let i = 0; i < rows; i++) {
                            flat.push(res[i][j]);
                        }
                    }
                    return wrap(flat);
                }
                return wrap(res.flat(Infinity));
            };

            res.ravel = () => {
                const flat = res.flat(Infinity);
                return new Proxy(flat, {
                    get(target, prop) {
                        return target[prop as any];
                    },
                    set(target, prop, value) {
                        const index = parseInt(String(prop));
                        if (!isNaN(index)) {
                            target[index] = value;
                            const cols = res[0].length;
                            const r = Math.floor(index / cols);
                            const c = index % cols;
                            if (res[r]) res[r][c] = value;
                        }
                        return true;
                    }
                });
            };

            return res;
        };
        return wrap(data);
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
       .replace(/(\w+)\.flatten\((.*?)\)/g, '$1.flatten($2)')
       .replace(/(\w+)\.ravel\(\)/g, '$1.ravel()')
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

export default function NpFlatten() {
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
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Data Reshape Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'FLATTENING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px]">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-indigo-300 outline-none resize-none selection:bg-indigo-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> 1D Stream
            </div>
            <pre className="text-emerald-400/90 selection:bg-emerald-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Reshape logic pending...'}
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
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-sky-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em]">Dimensional Linearization</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               arr.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent italic tracking-[-0.08em]">flatten</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Convert multi-dimensional arrays into a 1D sequence. Essential for <span className="text-white font-medium">Image Preprocessing</span>, feature engineering, and standardizing data for ML input layers.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Layers size={24} className="text-indigo-400" /> 1D Reduction
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
                { id: 'order', label: '2. Row/Col Logic', icon: MoveHorizontal },
                { id: 'behavior', label: '3. Copy vs View', icon: Copy },
                { id: 'compare', label: '4. vs ravel()', icon: Eye },
                { id: 'apps', label: '5. Prep for ML', icon: Cpu }
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
                  Show 2D to 1D transformation visually first. Compare with ravel() early and explain the memory concept (copy vs view) clearly!
               </p>
            </div>
            
            <div className="mt-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Zap size={20} /> Performance Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  <span className="text-emerald-400 font-bold">Safety → flatten</span> (creates copy). <span className="text-emerald-400 font-bold">Speed → ravel</span> (creates view). Use based on memory constraints!
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Common Mistake
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Don't confuse with <code className="text-rose-300">reshape(-1)</code>. While both can return 1D, <code className="text-rose-300">flatten()</code> guarantees a new copy.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. What is arr.flatten?" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl">
                         <span className="text-indigo-400 font-bold italic">arr.flatten()</span> collapses a multi-dimensional array into a <span className="text-indigo-400 italic font-medium">single row (1D)</span>, returning a fresh copy of the data.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Data Prep", desc: "For ML inputs", icon: "📊" },
                           { label: "Image Proc", desc: "Pixels to vector", icon: "🖼️" },
                           { label: "Engineering", desc: "Feature linearization", icon: "🛠️" },
                           { label: "Safety", desc: "Independent copies", icon: "🛡️" }
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
                    title="Basic Matrix Flattening"
                    description="Converting a 2x3 matrix into a 6-element sequence."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Standard row-wise collapse\nflat = arr.flatten()\n\nprint("Original Shape:", arr.shape)\nprint("Flattened Result:", flat)`} 
                    output="Original Shape: (2, 3)\nFlattened Result: [1 2 3 4 5 6]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'order' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={MoveHorizontal} title="2. Flattening Order Styles" color="violet" />
                   
                   <div className="bg-violet-950/10 border border-violet-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                         <Layers size={140} />
                      </div>
                      <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-8">
                         Choose how NumPy traverses your array: <span className="text-violet-400 font-black underline underline-offset-8 decoration-violet-500/30">Row-wise ('C')</span> or <span className="text-violet-400 font-black underline underline-offset-8 decoration-violet-500/30">Column-wise ('F')</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="bg-black/40 p-10 rounded-3xl border border-violet-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-violet-400 mb-4">Order 'C'</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Row-by-Row (Default)</span>
                         </div>
                         <div className="bg-black/40 p-10 rounded-3xl border border-violet-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-violet-400 mb-4">Order 'F'</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Column-by-Column</span>
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="violet"
                    title="Order Sandbox"
                    description="Seeing the difference between C-style and Fortran-style flattening."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\nc_style = arr.flatten(order='C')\nf_style = arr.flatten(order='F')\n\nprint("Row-wise (C):", c_style)\nprint("Col-wise (F):", f_style)`} 
                    output="Row-wise (C): [1 2 3 4 5 6]\nCol-wise (F): [1 4 2 5 3 6]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'behavior' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Copy} title="3. The Copy Guarantee" color="rose" />
                   
                   <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <Copy size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <AlertTriangle className="text-rose-500" size={28} /> Independent Memory
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                        Because <code className="text-rose-400 font-bold">flatten()</code> returns a new copy, modifying it <span className="text-white font-bold">does not</span> affect the source array.
                     </p>
                     
                     <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-10 overflow-hidden">
                        <div className="flex items-center justify-center gap-10">
                           <div className="flex flex-col items-center">
                              <div className="w-20 h-20 bg-indigo-500/20 border border-indigo-500/40 rounded-xl flex items-center justify-center text-xs font-black">Original</div>
                              <div className="h-6 w-px bg-slate-800 my-2"></div>
                              <div className="text-[10px] text-slate-500 font-black">Safe & Protected</div>
                           </div>
                           <div className="text-2xl text-slate-800">→</div>
                           <div className="flex flex-col items-center">
                              <div className="w-20 h-20 bg-rose-500/20 border border-rose-500/40 rounded-xl flex items-center justify-center text-xs font-black">Flattened</div>
                              <div className="h-6 w-px bg-slate-800 my-2"></div>
                              <div className="text-[10px] text-rose-500 font-black">New Copy</div>
                           </div>
                        </div>
                     </div>

                     <CodeExample 
                        color="rose"
                        title="Integrity Test"
                        description="Proving that flatten() provides data separation."
                        code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\nflat = arr.flatten()\nflat[0] = 100\n\nprint("Modified Flattened:", flat)\nprint("Untouched Original (0,0):", arr[0][0])`} 
                        output="Modified Flattened: [100 2 3 4]\nUntouched Original (0,0): 1" 
                      />
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'compare' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Eye} title="4. Comparison: flatten() vs ravel()" color="amber" />
                   
                   <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
                      <table className="w-full text-left border-collapse">
                         <thead>
                            <tr className="bg-slate-800/10">
                               <th className="px-10 py-6 text-sm font-black text-slate-300 uppercase tracking-widest">Feature</th>
                               <th className="px-10 py-6 text-sm font-black text-rose-400 uppercase tracking-widest">arr.flatten()</th>
                               <th className="px-10 py-6 text-sm font-black text-amber-400 uppercase tracking-widest text-center">arr.ravel()</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-slate-800">
                            {[
                               { f: "Memory Operation", e: "Returns a COPY ✅", b: "Returns a VIEW (View refers to same memory)" },
                               { f: "Memory Usage", e: "More (new alloc)", b: "Less (shared memory)" },
                               { f: "Original Integrity", e: "Safe from change", b: "Linked modifications ⚠️" },
                               { f: "Exeuction Speed", e: "Slower", b: "Faster ⚡" }
                            ].map((row, i) => (
                               <tr key={i} className="hover:bg-white/5 transition-colors">
                                  <td className="px-10 py-6 text-sm font-bold text-slate-400">{row.f}</td>
                                  <td className="px-10 py-6 text-sm font-medium text-slate-300">{row.e}</td>
                                  <td className="px-10 py-6 text-sm font-black text-white text-center italic">{row.b}</td>
                               </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>

                   <CodeExample 
                    color="amber"
                    title="Real-time Ravel Interaction"
                    description="Watch how ravel changes the original, while flatten stays independent."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\nflat = arr.flatten()\nrav = arr.ravel()\n\nflat[0] = 777   # Independent\nrav[1] = 999    # Linked to original arr[0][1]\n\nprint("Original Matrix After Ravel Edit:")\nprint(arr)`} 
                    output="Original Matrix After Ravel Edit:\n[[1  999]\n [3   4]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'apps' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Cpu} title="5. High Performance Engineering" color="emerald" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4">
                            <Activity size={16} /> Image Vectorization
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic">
                            Convert 2D pixel grids into 1D vectors for input into fully connected Neural Network layers.
                         </p>
                         <CodeExample 
                           color="emerald"
                           title="Pixel Prep"
                           code={`import numpy as np\n\nimage = np.array([[255, 128], [0, 64]])\nvector = image.flatten()\n\nprint("Flattened Feature Vector:")\nprint(vector)`} 
                           output="Flattened Feature Vector:\n[255 128 0 64]" 
                         />
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4">
                            <Layers size={16} /> Reshape Chaining
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic">
                            Use flatten as a gateway to reshape between different logic formats.
                         </p>
                         <CodeExample 
                           color="emerald"
                           title="Logic Re-piping"
                           code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4], [5, 6]])\n# Flatten then reshape to 2x3\nnew_pipe = arr.flatten().reshape(2, 3)\n\nprint("Re-piped Matrix:")\nprint(new_pipe)`} 
                           output="Re-piped Matrix:\n[[1  2  3]\n [4  5  6]]" 
                         />
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RotateCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Mini <span className="text-indigo-400 italic font-light">Exercise</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                            Challenge: Create <span className="text-white font-bold">arr = np.array([[10, 20], [30, 40]])</span>. 
                            Flatten it row-wise, then column-wise, and finally prove the copy behavior by modifying an element!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Student Mission Lab"
                           code={`import numpy as np\n\narr = np.array([[10, 20], [30, 40]])\n\n# 1. Flatten row-wise\nf_row = arr.flatten(order='C')\n\n# 2. Flatten column-wise\nf_col = arr.flatten(order='F')\n\nprint("Row-wise:", f_row)\nprint("Col-wise:", f_col)`} 
                           output="Row-wise: [10 20 30 40]\nCol-wise: [10 30 20 40]" 
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
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Dimensional Linearization Lab v8.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Mastering Copy Logic with Zero Memory Overhead
         </p>
      </footer>
    </div>
  );
}
