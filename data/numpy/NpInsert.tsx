import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, PlusCircle, Layout, AlertTriangle, RotateCw, Activity, Cpu, CodeXml, Layers, MoveHorizontal, ArrowRight } from 'lucide-react';

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
    array: (data: any) => JSON.parse(JSON.stringify(data)), // Deep copy shim
    insert: (arr: any, obj: any, values: any, axis: number | null = null) => {
        let res = JSON.parse(JSON.stringify(arr));
        
        if (axis === null) {
            const flat = Array.isArray(res[0]) ? res.flat(Infinity) : res;
            if (Array.isArray(obj)) {
                 const insertions = obj.map((idx, i) => ({ idx, val: Array.isArray(values) ? values[i] : values }));
                 insertions.sort((a: any, b: any) => b.idx - a.idx);
                 insertions.forEach((ins: any) => flat.splice(ins.idx, 0, ins.val));
            } else {
                 flat.splice(obj, 0, ...(Array.isArray(values) ? values : [values]));
            }
            return flat;
        }
        
        if (axis === 0) {
            res.splice(obj, 0, values);
            return res;
        }
        
        if (axis === 1) {
            return res.map((row: any, i: number) => {
                const newRow = [...row];
                const val = Array.isArray(values) ? values[i] : values;
                newRow.splice(obj, 0, val);
                return newRow;
            });
        }
        return "Error: Axis logic not implemented";
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

export default function NpInsert() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title, description, color="emerald" }: any) => {
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
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Matrix Insert Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'INSERTING...' : 'RUN MODULE'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Array Geometry
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Structural update pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-emerald-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-emerald-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-teal-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-emerald-500 to-transparent"></div>
              <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.6em]">Structural Data Modification</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">insert</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Inject values at specific indices along any dimension. The specialized tool for <span className="text-white font-medium italic underline decoration-emerald-500/30 underline-offset-8">feature column injection</span> and structured array expansion.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <PlusCircle size={24} className="text-emerald-400" /> Index Injection
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
                { id: 'concept', label: '1. Injection Theory', icon: BookOpen },
                { id: '2dinsert', label: '2. Row & Col Splice', icon: Layout },
                { id: 'performance', label: '3. Memory Strategy', icon: Activity },
                { id: 'apps', label: '4. Feature Engineering', icon: Cpu },
                { id: 'pro', label: '5. Pro Methods', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-emerald-600 border-emerald-500 text-white shadow-[0_20px_60px_rgba(16,185,129,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-emerald-500/5 border border-emerald-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-emerald-500/10 group-hover:scale-125 transition-transform duration-700">
                  <RotateCw size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/20 pb-4">
                  <Lightbulb size={20} /> Performance Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  np.insert() is not memory efficient for large datasets because it creates a new array every time. Use <code className="text-emerald-300">np.concatenate</code> for bulk operations!
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Layers size={20} /> Integrity Note
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  🚨 VERY IMPORTANT: The original array is <span className="text-indigo-300 font-black italic">NOT changed</span>. NumPy always returns a fresh array instance.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Common Mistake
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Don't confuse with <code className="text-rose-300">append()</code>. Append only adds to the end, while <code className="text-rose-300">insert()</code> places data anywhere!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. What is np.insert?" color="emerald" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-emerald-600 pl-12 max-w-4xl text-left">
                         <span className="text-emerald-400 font-bold italic">np.insert()</span> joins new data into an existing array at a specific index, allowing you to <span className="text-emerald-400 font-bold italic underline decoration-emerald-500/20 underline-offset-8">expand structures</span> laterally or vertically.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "New Data", desc: "Inject student records", icon: "📑" },
                           { label: "Feature Add", desc: "Insert new columns", icon: "🚀" },
                           { label: "Prepending", desc: "Add to beginning", icon: "⏪" },
                           { label: "Bulk Insert", desc: "Multiple positions", icon: "📦" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-emerald-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="emerald"
                    title="Simple Index Injection"
                    description="Placing the value 99 at index 2 of a 1D sequence."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40])\n\n# Insert 99 at position 2\nnew_arr = np.insert(arr, 2, 99)\n\nprint("Original:", arr)\nprint("Modified Result:", new_arr)`} 
                    output="Original: [10 20 30 40]\nModified Result: [10 20 99 30 40]" 
                  />
                  
                   <CodeExample 
                    color="cyan"
                    title="Multiple Simultaneous Insertions"
                    description="Inserting multiple values into multiple indices at once."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4])\n\n# Indices: [1, 3], Values: [100, 200]\nnew_arr = np.insert(arr, [1, 3], [100, 200])\n\nprint("Multiple Insertions Result:")\nprint(new_arr)`} 
                    output="Multiple Insertions Result:\n[1 100 2 3 200 4]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2dinsert' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. Dimensional Insertion (2D)" color="indigo" />
                   
                   <div className="bg-indigo-950/10 border border-indigo-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                         <Layers size={140} />
                      </div>
                      <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-8">
                         Control whether to insert entire <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">rows (axis=0)</span> or <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">columns (axis=1)</span> in your matrix.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="bg-black/40 p-10 rounded-3xl border border-indigo-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-xs font-black text-rose-400 uppercase tracking-widest mb-4 italic">axis=0</span>
                            <span className="text-2xl font-black text-slate-400">Insert Row</span>
                         </div>
                         <div className="bg-black/40 p-10 rounded-3xl border border-indigo-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-4 italic">axis=1</span>
                            <span className="text-2xl font-black text-slate-400">Insert Column</span>
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="indigo"
                    title="Inserting a Matrix Row"
                    description="Adding a new record between existing rows."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\n# axis=0: Vertical insertion (Rows)\nnew_arr = np.insert(arr, 1, [9, 9], axis=0)\n\nprint("Matrix with New Row:")\nprint(new_arr)`} 
                    output="Matrix with New Row:\n[[1  2]\n [9  9]\n [3  4]]" 
                  />
                  
                  <CodeExample 
                    color="violet"
                    title="Inserting a Matrix Column"
                    description="Adding a new vertical feature to each row."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\n# axis=1: Horizontal insertion (Columns)\nnew_arr = np.insert(arr, 1, [5, 6], axis=1)\n\nprint("Matrix with New Column:")\nprint(new_arr)`} 
                    output="Matrix with New Column:\n[[1  5  2]\n [3  6  4]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Activity} title="3. The Memory Strategy" color="rose" />
                   
                   <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <ArrowRight size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 text-left">
                        <Activity className="text-rose-500" size={28} /> Senior Dev Tip: Efficiency
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left">
                        Because <code className="text-rose-400 font-bold italic">insert()</code> creates a full copy of the array every time it's called, it can be extremely slow in tight loops or for large datasets.
                     </p>
                     
                     <div className="bg-slate-950 p-10 rounded-2xl border border-slate-800 mb-10 text-left">
                        <div className="flex flex-col gap-6">
                           <div className="flex items-center gap-5">
                              <div className="w-10 h-10 bg-rose-500/10 border border-rose-500/20 rounded-lg flex items-center justify-center text-rose-500">❌</div>
                              <p className="text-sm font-black text-slate-300 tracking-tight leading-none uppercase tracking-widest">Repeated Insert operations</p>
                           </div>
                           <div className="flex items-center gap-5">
                              <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500">✅</div>
                              <p className="text-sm font-black text-slate-300 tracking-tight leading-none uppercase tracking-widest">Use np.concatenate() for bulk joins</p>
                           </div>
                        </div>
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'apps' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Cpu} title="4. Machine Learning Engineering" color="blue" />
                   
                   <p className="text-xl text-slate-400 font-light mb-12 italic text-left">
                     Use <code className="text-blue-400 font-bold">np.insert</code> surgically to add target features or record metadata to structured datasets.
                   </p>

                   <CodeExample 
                    color="blue"
                    title="Real-World: Feature Injection"
                    description="Adding an 'Experience' column as the 3rd feature in an HR dataset."
                    code={`import numpy as np\n\ndata = np.array([\n    [25, 50000],\n    [30, 60000]\n])\n\n# Add column at index 2 (axis=1)\nnew_data = np.insert(data, 2, [2, 5], axis=1)\n\nprint("Updated ML Dataset:")\nprint(new_data)`} 
                    output="Updated ML Dataset:\n[[25 50000 2]\n [30 60000 5]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Pro-Level Manipulations" color="amber" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4">
                            <Layers size={16} /> Prepending Data
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Always insert at index 0 to shift the entire array forward.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-cyan-300 text-[10px]">np.insert(arr, 0, value)</code>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4">
                            <MoveHorizontal size={16} /> Multi-Injection
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Pass a single value to fill multiple indices at once.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-emerald-300 text-[10px]">np.insert(arr, [1, 2, 3], 0)</code>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-emerald-800/20 border border-emerald-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-2xl">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RotateCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-emerald-400 italic font-light">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                             Challenge: Add three values at indices 1, 2, and 4 in a 6-element array. Then try inserting a new record row into a matrix!
                         </p>
                         <CodeExample 
                           color="emerald"
                           title="Array Geometry Lab"
                           code={`import numpy as np\n\narr = np.array([1, 2, 3])\n\n# Dynamic Expansion\nobs = np.insert(arr, 1, 99)\n\nprint("Surgical Result:")\nprint(obs)`} 
                           output="Surgical Result:\n[1 99 2 3]" 
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
            <div className="w-16 h-16 bg-emerald-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-emerald-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Advanced Index Manipulation v5.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Surgical Data Injection with Zero Source Contamination
         </p>
      </footer>
    </div>
  );
}
