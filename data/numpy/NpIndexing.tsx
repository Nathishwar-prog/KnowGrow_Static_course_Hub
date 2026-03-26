import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Grid, MousePointer2, AlertTriangle, RotateCw, Activity, Cpu, CodeXml, Layers, Slice, ListFilter } from 'lucide-react';

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
            
            // Mock indexing methods
            res.gt = (val: any) => res.map((v: any) => v > val);
            res.lt = (val: any) => res.map((v: any) => v < val);
            res.and = (other: any) => res.map((v: any, i: number) => v && other[i]);

            res._get = (idx: any) => {
                if (typeof idx === 'string' && idx.includes(',')) {
                    const parts = idx.split(',').map(s => s.trim());
                    if (parts.length === 2) {
                        const [r, c] = parts;
                        if (r === ':') return wrap(res.map((row: any) => row[parseInt(c)]));
                        if (c === ':') return wrap(res[parseInt(r)]);
                        return res[parseInt(r)][parseInt(c)];
                    }
                }
                if (Array.isArray(idx)) {
                    if (typeof idx[0] === 'boolean') return wrap(res.filter((_: any, i: number) => idx[i]));
                    if (typeof idx[0] === 'number') return wrap(idx.map(i => res[i]));
                }
                const i = typeof idx === 'number' ? idx : parseInt(idx);
                if (i < 0) return res[res.length + i];
                return res[i];
            };

            res._slice = (start?: number, end?: number, step: number = 1) => {
                let s = start === undefined ? 0 : start;
                let e = end === undefined ? res.length : (end < 0 ? res.length + end : end);
                let sliced = res.slice(s, e);
                if (step === -1) return wrap([...sliced].reverse());
                if (step !== 1) return wrap(sliced.filter((_: any, i: number) => i % step === 0));
                return wrap(sliced);
            };

            res._set = (idx: number, val: any) => {
                res[idx] = val;
                return res;
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
       // Basic transformations for the sandbox
       .replace(/(\w+)\[(-?\d+)\]\s*=\s*(.+)/g, '$1._set($2, $3)') // arr[1] = 99
       .replace(/(\w+)\[(-?\d+)\]/g, '$1._get($2)') // arr[0]
       .replace(/(\w+)\[(-?\d+)\s*,\s*(-?\d+)\]/g, '$1._get("$2,$3")') // arr[0,1]
       .replace(/(\w+)\[\s*:\s*,\s*(\d+)\s*\]/g, '$1._get(":,$2")') // arr[:,1]
       .replace(/(\w+)\[(\d+):(\d+)\]/g, '$1._slice($2, $3)') // arr[1:4]
       .replace(/(\w+)\[::-1\]/g, '$1._slice(undefined, undefined, -1)') // arr[::-1]
       .replace(/(\w+)\[::(\d+)\]/g, '$1._slice(undefined, undefined, $2)') // arr[::2]
       .replace(/(\w+)\[(\w+)\s*>\s*(\d+)\]/g, '$1._get($2.gt($3))') // arr[arr > 20]
       .replace(/(\w+)\[\[(.+?)\]\]/g, '$1._get([$2])') // arr[[0, 2]]
       .replace(/(\w+)\[\((.+?)\s*>\s*(\d+)\)\s*&\s*\((.+?)\s*<\s*(\d+)\)\]/g, '$1._get($2.gt($3).and($4.lt($5)))') // boolean compound
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

export default function NpIndexing() {
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
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30',
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Indexing Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'RETRIEVING...' : 'RUN QUERY'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px]">
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Index Entry
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Value lookup pending...'}
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em]">Precision Data Access</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">indexing</span>
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Navigate and manipulate multi-dimensional data with surgery-like precision. From basic <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">Coordinate Access</span> to advanced <span className="text-white font-medium">Boolean Filtering</span>.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <MousePointer2 size={24} className="text-blue-400" /> Value Selection
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
                { id: 'concept', label: '1. Array Coordinates', icon: BookOpen },
                { id: 'slices', label: '2. Slicing logic', icon: Slice },
                { id: 'fancy', label: '3. Fancy Indexing', icon: Grid },
                { id: 'bool', label: '4. Boolean Filter', icon: ListFilter },
                { id: 'pro', label: '5. Pro Selection', icon: Zap }
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

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-125 transition-transform duration-700">
                  <RotateCw size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4">
                  <Lightbulb size={20} /> Teacher Advice 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  Start with 1D basics, then move to 2D visualization. Teach boolean indexing early! Most real-world work uses a combination of Boolean logic and slicing.
               </p>
            </div>
            
            <div className="mt-8 bg-cyan-500/5 border border-cyan-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Activity size={20} /> Performance Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  NumPy indexing is vectorized and extremely fast. <span className="text-cyan-400 font-bold italic">Never use Python loops</span> for data retrieval when indexing is possible!
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Common Mistake
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Row/Col confusion: <code className="text-rose-300">arr[1][0]</code> works but is not recommended. Use the optimized multidimensional syntax: <code className="text-rose-300 font-black underline underline-offset-4">arr[1, 0]</code>.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Array Layout & Coordinates" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl text-left">
                         Every element in a NumPy array has a specific address (index). <span className="text-blue-400 font-black underline decoration-blue-500/30 underline-offset-8">Pick values using positions</span> or conditions.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "1D Index", desc: "[0, 1, 2...]", icon: "📏" },
                           { label: "2D Index", desc: "[row, column]", icon: "🔲" },
                           { label: "3D Index", desc: "[depth, r, c]", icon: "🧊" },
                           { label: "Negative", desc: "Access from end", icon: "⏪" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="blue"
                    title="1D Positive & Negative Access"
                    description="Standard integer indexing to grab single units."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40])\n\n# Accessing elements\nfirst = arr[0]\nlast = arr[-1]\n\nprint(f"Index 0: {first}")\nprint(f"Index -1: {last}")`} 
                    output="Index 0: 10\nIndex -1: 40" 
                  />
                  
                   <CodeExample 
                    color="indigo"
                    title="2D Coordinate Mapping"
                    description="Accessing values in a matrix using [row, col] format."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Grab value '2' at Row 0, Col 1\nval = arr[0, 1]\n\nprint("2D Selection Result:", val)`} 
                    output="2D Selection Result: 2" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'slices' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Slice} title="2. Range Selection (Slicing)" color="violet" />
                   
                   <div className="bg-violet-950/10 border border-violet-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group shadow-inner">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                         <Slice size={140} />
                      </div>
                      <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-8">
                         Slicing follows the <span className="text-violet-400 font-black">[start : end]</span> rule. The end index is <span className="text-rose-400 font-bold italic underline underline-offset-8 decoration-rose-500/30">always excluded</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="bg-black/40 p-10 rounded-3xl border border-violet-500/20 text-center flex flex-col items-center">
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">1D Slice Syntax</span>
                            <span className="text-3xl font-black text-violet-400">arr[1:4]</span>
                         </div>
                         <div className="bg-black/40 p-10 rounded-3xl border border-rose-500/20 text-center flex flex-col items-center">
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Select All (Full Axis)</span>
                            <span className="text-3xl font-black text-rose-400">arr[:, 1]</span>
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="violet"
                    title="Standard 1D Slilcing"
                    description="Extracting a sub-sequence of elements."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40, 50])\n\n# Elements from index 1 to 3 (4 is excluded)\nresult = arr[1:4]\n\nprint("Sliced Sequence:", result)`} 
                    output="Sliced Sequence: [20 30 40]" 
                  />
                  
                   <CodeExample 
                    color="rose"
                    title="2D Vertical Slicing"
                    description="Selecting all items in a specific column."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# : means ALL rows, 1 means Column 1\ncol_data = arr[:, 1]\n\nprint("Column-1 Values:", col_data)`} 
                    output="Column-1 Values: [2 5]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'fancy' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Grid} title="3. Fancy Indexing" color="amber" />
                   
                   <div className="p-12 bg-amber-950/10 border border-amber-500/20 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <Grid size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 text-left">
                        <Grid className="text-amber-500" size={28} /> Selecting Multiple Indices
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left">
                        Pass a list of indices to NumPy to select non-contiguous elements in a single step.
                     </p>

                     <CodeExample 
                        color="amber"
                        title="Non-Contiguous Selection"
                        description="Accessing index 0 and 2 simultaneously."
                        code={`import numpy as np\n\narr = np.array([10, 20, 30, 40])\n\n# Selection logic: [first, third]\nselected = arr[[0, 2]]\n\nprint("Fancy Result:")\nprint(selected)`} 
                        output="Fancy Result:\n[10 30]" 
                      />
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'bool' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={ListFilter} title="4. Boolean Indexing (Filtering)" color="emerald" />
                   
                   <div className="bg-emerald-950/10 border border-emerald-500/20 rounded-[3rem] p-16 mb-16 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:scale-110 transition-transform duration-[2s]">
                         <Activity size={240} />
                      </div>
                      <h3 className="text-4xl font-black text-white mb-8">The Filter Pattern</h3>
                      <p className="text-xl text-slate-300 font-light leading-relaxed mb-12 italic text-left">
                        Instead of loops, use logical conditions directly within brackets to filter entire arrays instantly.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                         <div className="p-10 bg-black/60 rounded-3xl border border-emerald-500/20">
                            <h5 className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-6 italic">Syntax Logic</h5>
                            <pre className="text-slate-300 text-sm font-mono font-bold">arr[arr &gt; threshold]</pre>
                            <p className="text-[10px] text-slate-500 font-black mt-4 uppercase tracking-[0.2em]">Fully Vectorized Filtering</p>
                         </div>
                         <div className="p-10 bg-black/60 rounded-3xl border border-emerald-500/20">
                            <h5 className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-6 italic">Compound Filter</h5>
                            <pre className="text-emerald-400 text-sm font-mono">arr[(arr &gt; 10) & (arr &lt; 40)]</pre>
                            <p className="text-[10px] text-slate-500 font-black mt-4 uppercase tracking-[0.2em]">Multi-Conditional Query</p>
                         </div>
                      </div>

                      <CodeExample 
                        color="emerald"
                        title="Database Filtering Simulation"
                        description="Extracting values that satisfy a logic gate."
                        code={`import numpy as np\n\narr = np.array([10, 20, 30, 40])\n\n# Keep only values > 20\nfiltered = arr[arr > 20]\n\nprint("Filter Result:", filtered)`} 
                        output="Filter Result: [30 40]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Pro-Level Manipulations" color="cyan" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4">
                            <Activity size={16} /> Modifying in Place
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Access an element and re-assign it—updating the source memory directly.
                         </p>
                         <CodeExample 
                           color="cyan"
                           title="In-Place Update"
                           code={`import numpy as np\n\narr = np.array([10, 20, 30])\n\narr[1] = 99\n\nprint("Updated Array:", arr)`} 
                           output="Updated Array: [10 99 30]" 
                         />
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                            <Layers size={16} /> Array Reversal
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            The "Triple Colon" trick to instantly flip an entire axis.
                         </p>
                         <CodeExample 
                           color="rose"
                           title="Sequence Reverse"
                           code={`import numpy as np\n\narr = np.array([1, 2, 3, 4])\n# Step = -1 (Reverse)\nrev = arr[::-1]\n\nprint("Flipped Array:", rev)`} 
                           output="Flipped Array: [4 3 2 1]" 
                         />
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-2xl">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RotateCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-blue-400 italic font-light">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                             Mini Exercise: Create <span className="text-white font-bold">arr = np.array([[10, 20, 30], [40, 50, 60]])</span>. 
                             Access 50, get the second column, and reverse the first row!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Surgical Indexing Lab"
                           code={`import numpy as np\n\narr = np.array([[10, 20, 30], [40, 50, 60]])\n\n# 1. Access 50\nval = arr[1, 1]\n\n# 2. Second Column\ncol2 = arr[:, 1]\n\nprint(f"Target Value: {val}")\nprint(f"Col-2 Slice: {col2}")`} 
                           output="Target Value: 50\nCol-2 Slice: [20 50]" 
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
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Mastering Coordinate Access v2.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Surgical Value Selection with Zero Loop Overhead
         </p>
      </footer>
    </div>
  );
}
