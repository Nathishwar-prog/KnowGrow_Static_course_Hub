import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, Trash2, Maximize2, MoveDiagonal, History, AlertTriangle, Filter, CheckCircle2, ShieldCheck } from 'lucide-react';

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
    delete: (arr: any[], obj: number | number[], axis: number | null = null) => {
      const indices = Array.isArray(obj) ? obj : [obj];
      
      // 1D Case
      if (!Array.isArray(arr[0])) {
         return arr.filter((_, i) => !indices.includes(i));
      }

      // 2D Case
      if (axis === 0) { // Delete Row
         return arr.filter((_, i) => !indices.includes(i));
      }

      if (axis === 1) { // Delete Column
         return arr.map(row => row.filter((_: any, j: number) => !indices.includes(j)));
      }

      // No axis (Flattening)
      const flat = arr.flat(Infinity);
      return flat.filter((_, i) => !indices.includes(i));
    },
    where: (condition_arr: any[]) => {
        // Simple mock for np.where results
        return condition_arr.map((v, i) => v ? i : null).filter(v => v !== null);
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
       .replace(/np\.delete\((.+?), (.+?), axis=(.+?)\)/g, 'np.delete($1, $2, $3)')
       .replace(/np\.delete\((.+?), (.+?)\)/g, 'np.delete($1, $2)')
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

export default function NpDeleteModule() {
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Cleaning Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'TRIMMING...' : 'EXECUTE'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Cleaned Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Subset data stream'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-rose-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-rose-600/5 rounded-full blur-[200px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-rose-500 to-transparent"></div>
              <span className="text-rose-400 text-xs font-black uppercase tracking-[0.6em]">Immutable Array Trimming</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 bg-clip-text text-transparent italic tracking-[-0.08em]">delete</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Remove elements from an array based on index positions. Essential for data cleaning, feature pruning, and record management in production pipelines.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl transition-all hover:bg-slate-800">
               <Trash2 size={24} className="text-rose-400" /> Subset Pruning
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
                { id: 'concept', label: '1. Removal Concept', icon: BookOpen },
                { id: 'usage', label: '2. Basic Deletion', icon: Zap },
                { id: 'matrix', label: '3. Matrix Pruning', icon: Maximize2 },
                { id: 'cleaning', label: '4. Pipeline Clean', icon: Filter }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-rose-600 border-rose-500 text-white shadow-[0_20px_60px_rgba(225,29,72,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-rose-500/10 group-hover:scale-125 transition-transform duration-700 rotate-12">
                  <AlertTriangle size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/20 pb-4">
                  <AlertTriangle size={20} /> Immutability Warning
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  NumPy arrays are <span className="text-rose-300 font-black underline underline-offset-4 decoration-rose-500/30">immutable in size</span>. np.delete() does <span className="text-white font-bold italic">NOT</span> modify the original array; it returns a fresh, smaller copy.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <History size={20} /> Loop Trap
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  Avoid frequent deletions inside large loops. It is <span className="text-white font-bold">very slow</span>! Prefer boolean masking or filtering for high-performance trimming.
               </p>
            </div>
          </aside>

          {/* Module Core */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Removal & Trimming" color="rose" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-rose-600 pl-12 max-w-4xl">
                         <span className="text-rose-400 font-bold italic">np.delete()</span> trims your data by extracting everything <span className="text-rose-400 italic font-medium">except</span> the specified indices.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Data Cleaning", desc: "Remove corrupt records", icon: "📊" },
                           { label: "Feature Pruning", desc: "Drop noisy columns", icon: "🤖" },
                           { label: "Filtering", desc: "Subset your analysis", icon: "📉" },
                           { label: "Preprocessing", desc: "Clean input streams", icon: "🧪" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-rose-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12 group shadow-2xl transition-all hover:bg-slate-800/40">
                      <div className="flex-1 text-center lg:text-left">
                         <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.6em] mb-8">Constructor Syntax</h4>
                         <div className="bg-black/90 p-8 rounded-3xl border border-slate-800 font-mono text-amber-400 text-xl shadow-2xl group-hover:border-rose-500/10 transition-colors inline-block lg:block">
                            np.delete(arr, obj, axis=None)
                         </div>
                      </div>
                      <div className="w-full lg:w-px h-px lg:h-32 bg-slate-800"></div>
                      <div className="flex-1 space-y-6">
                         <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                            <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">obj</span>
                            <span className="text-sm text-slate-300 font-bold italic">Index or Indices to remove</span>
                         </div>
                         <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                            <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">axis</span>
                            <span className="text-sm text-slate-300 font-bold italic">Dimension (Optional)</span>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="Cleaning Vector Streams" color="amber" />
                   
                   <CodeExample 
                    color="amber"
                    title="1. Single Element Pruning"
                    description="Standard deletion of a single value at a specific index."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40])\n\n# Removes value 30 at index 2\nresult = np.delete(arr, 2)\n\nprint("Single Delete Result:")\nprint(result)`} 
                    output="Single Delete Result:\n[10 20 40]" 
                  />

                   <CodeExample 
                    color="rose"
                    title="2. Multiple Indices"
                    description="Removing several non-contiguous values in one pass."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40])\n\n# Removes index 1 and 3\nresult = np.delete(arr, [1, 3])\n\nprint("Batch Delete Result:")\nprint(result)`} 
                    output="Batch Delete Result:\n[10 30]" 
                  />

                  <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <Trash2 size={240} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <Trash2 className="text-rose-500" size={28} /> Visual Vector Removal
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                        Items are extracted, and the array "closes up" into a new compact seat.
                     </p>
                     <div className="grid grid-cols-5 gap-4">
                        {[10, 20, 30, 40, 50].map((val, i) => (
                           <div key={i} className={`p-6 rounded-2xl border text-center transition-all ${i === 2 ? 'bg-rose-500/20 border-rose-500/40 opacity-40 scale-90' : 'bg-slate-500/10 border-slate-500/30'}`}>
                              <div className={`text-xl font-black mb-1 ${i === 2 ? 'text-rose-400' : 'text-slate-300'}`}>{val}</div>
                              <div className="text-[8px] text-slate-600 font-black uppercase">{i === 2 ? 'DELETED' : `Index ${i}`}</div>
                           </div>
                        ))}
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'matrix' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Maximize2} title="Dimensional Pruning" color="emerald" />
                   
                   <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                      <div>
                         <div className="flex items-center gap-4 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                            <MoveDiagonal size={16} /> Row Removal (Axis 0)
                         </div>
                         <CodeExample 
                            color="rose"
                            title="Drop Full Row"
                            description="Pruning the second row of a 2D matrix."
                            code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4], [5, 6]])\n\nresult = np.delete(arr, 1, axis=0)\n\nprint("Row Pruning Result:")\nprint(result)`} 
                            output="Row Pruning Result:\n[[1  2]\n [5  6]]" 
                         />
                      </div>
                      <div>
                         <div className="flex items-center gap-4 text-amber-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-amber-500/10 pb-4">
                            <MoveDiagonal size={16} /> Column Removal (Axis 1)
                         </div>
                         <CodeExample 
                            color="amber"
                            title="Drop Feature Column"
                            description="Dropping the first column across all rows."
                            code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4], [5, 6]])\n\nresult = np.delete(arr, 0, axis=1)\n\nprint("Column Drop Result:")\nprint(result)`} 
                            output="Column Drop Result:\n[[2]\n [4]\n [6]]" 
                         />
                      </div>
                   </div>

                   <div className="bg-amber-950/20 border border-amber-500/20 rounded-[3rem] p-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 rotate-12">
                         <Trash2 size={140} />
                      </div>
                      <h4 className="text-2xl font-black text-amber-500 mb-8 flex items-center gap-4">
                         <Trash2 size={28} /> Flattening Warning
                      </h4>
                      <p className="text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
                         If you omit the <code className="text-amber-300">axis</code> parameter while providing a 2D array, NumPy will <span className="text-white font-bold italic underline decoration-amber-500/20">flatten it into a 1D vector</span> before deleting.
                      </p>
                      <div className="bg-black/60 p-8 rounded-2xl border border-amber-500/30 font-mono text-sm">
                         <div className="text-slate-500 mb-2"># No axis specified</div>
                         <div className="text-slate-300">result = np.delete(arr, 2)</div>
                         <div className="text-amber-400 mt-4"># Result: [1 2 4 5 6] (1D Vector)</div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'cleaning' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Filter} title="Production Cleaning Pipelines" color="indigo" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                      {[
                        { title: "INVALID DATA", desc: "Use np.where to identify and drop outlier flags", icon: "🧼" },
                        { title: "FEATURE DROP", desc: "Remove redundant columns found during analysis", icon: "✂️" },
                        { title: "DATA SHUFFLE", desc: "Drop specific records by ID after shuffling datasets", icon: "📑" }
                      ].map((m, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] group hover:bg-slate-800/60 transition-all border-b-4 border-b-indigo-500/20">
                           <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                              <span className="text-2xl">{m.icon}</span>
                           </div>
                           <h4 className="text-white font-black text-[11px] uppercase tracking-widest mb-3 tracking-[0.2em]">{m.title}</h4>
                           <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{m.desc}</p>
                        </div>
                      ))}
                   </div>

                   <div className="space-y-10">
                      <div className="p-10 bg-slate-950/40 border border-slate-800 rounded-[3.5rem] relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                            <CheckCircle2 size={180} />
                         </div>
                         <h4 className="text-white font-black text-2xl mb-12 flex items-center gap-4">
                            <CheckCircle2 className="text-indigo-500" size={28} /> Advanced Filter Logic
                         </h4>
                         <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                            <div>
                               <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4">
                                  <Filter size={16} /> Conditional Cleanup
                               </div>
                               <CodeExample 
                                 color="indigo"
                                 title="Delete with np.where"
                                 code={`import numpy as np\n\ndata = np.array([100, -999, 200, -999])\n\n# Identify indices matching corrupt flag\nindices = np.where(data == -999)\ncleaned = np.delete(data, indices)\n\nprint("Cleaned Dataset:")\nprint(cleaned)`} 
                                 output="Cleaned Dataset:\n[100 200]" 
                               />
                            </div>
                            <div>
                               <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4">
                                  <ShieldCheck size={16} /> Expert Best Practice
                               </div>
                               <div className="p-8 bg-black/40 rounded-3xl border border-indigo-500/20">
                                  <h5 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                                     <Zap className="text-amber-400" size={16} /> Prefer Boolean Masking
                                  </h5>
                                  <pre className="text-indigo-300 text-xs font-mono leading-relaxed">
                                     {`# Much faster for large data:\ncount = data[data > 10]\n\n# Avoids allocating multiple\n# temporary smaller arrays.`}
                                  </pre>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-rose-800/40 to-black border border-rose-500/30 rounded-[4.5rem] p-24 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-24 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Trash2 size={260} />
                      </div>
                      <div className="relative z-10 max-w-4xl">
                         <h3 className="text-7xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-rose-400 italic font-light lowercase tracking-widest">Laboratory</span>
                         </h3>
                         <p className="text-3xl text-slate-200 mb-16 font-light leading-snug">
                            A production dataset contains a noise record at index 1 and 2: <span className="text-white font-bold italic">[5, 10, 15, 20]</span>. Master the batch deletion!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Batch Delete Challenge"
                           code={`import numpy as np\n\narr = np.array([5, 10, 15, 20])\n\n# TASK: Remove values at index 1 AND 2\nresult = np.delete(arr, [1, 2])\n\nprint("Final Cleaned Sequence:")\nprint(result)`} 
                           output="Final Cleaned Sequence:\n[5 20]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-48 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-16 group">
         <div className="flex items-center gap-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-24 h-24 bg-rose-600 rounded-[3rem] flex items-center justify-center font-black text-white text-4xl italic shadow-[0_25px_60px_rgba(225,29,72,0.4)]">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.7em] text-[12px] block mb-2 tracking-[0.4em]">KnowGrow Intelligence</span>
               <span className="text-slate-600 font-bold text-sm uppercase tracking-widest leading-none">Record Pruning Infrastructure v8.1</span>
            </div>
         </div>
         <p className="text-[11px] text-slate-800 font-black uppercase tracking-[0.8em] text-center md:text-right">
            Pruning Immutable Tensors with Index Resolution
         </p>
      </footer>
    </div>
  );
}
