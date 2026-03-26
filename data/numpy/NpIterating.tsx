import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, RefreshCw, Layout, AlertTriangle, RotateCw, Activity, Cpu, CodeXml, Layers, MoveHorizontal, ArrowRight } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(1);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix or ndenumerate result
        if (typeof val[0][0] === 'object' && Array.isArray(val[0][0])) { // Enumerate
             const lines = val.map(item => `(${item[0].join(',')},) ${NumpySandbox._format(item[1])}`);
             return lines.join('\n');
        }
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
            res.flat = wrap(d.flat(Infinity));
            return res;
        };
        return wrap(data);
    },
    nditer: (arr: any) => arr.flat || arr.flat(Infinity),
    ndenumerate: (arr: any) => {
        const result: any[] = [];
        if (Array.isArray(arr[0])) {
            arr.forEach((row: any, r: number) => {
                row.forEach((val: any, c: number) => {
                    result.push([[r, c], val]);
                });
            });
        } else {
            arr.forEach((val: any, i: number) => {
                result.push([[i], val]);
            });
        }
        return result;
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
       .replace(/for x in np\.nditer\((\w+)(.*?)\):[\s\S]*?x\[\.\.\.\]\s*=\s*(.*?)\n/g, (match, arr, opt, expr) => {
           // Simulate modification: arr = arr.map(x => expr)
           const cleanExpr = expr.replace(/x/g, 'v');
           return `${arr} = ${arr}.map(v => ${cleanExpr});\n`;
       })
       .replace(/for x in np\.nditer\((\w+)(.*?)\):/g, 'for (const x of NumpySandbox.np.nditer($1))')
       .replace(/for idx, x in np\.ndenumerate\((\w+)\):/g, 'for (const [idx, x] of NumpySandbox.np.ndenumerate($1))')
       .replace(/for x in (\w+)\.flat:/g, 'for (const x of $1.flat)')
       .replace(/for x in (\w+):/g, 'for (const x of $1)')
       .replace(/for row in (\w+):/g, 'for (const row of $1)')
       .replace(/for elem in row:/g, 'for (const elem of row)')
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

export default function NpIterating() {
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
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Iteration Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'LOOPING...' : 'RUN CYCLE'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Element Stream
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Traversal pattern pending...'}
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
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em]">Serialized Array Traversal</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               NumPy.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent italic tracking-[-0.08em]">iteration</span>
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left">
               Visit and manipulate each element of multi-dimensional arrays efficiently. Use <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">np.nditer</span> for high-performance traversal in complex algorithms.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <RefreshCw size={24} className="text-indigo-400" /> Element Cycle
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
                { id: 'concept', label: '1. Basic Loops', icon: BookOpen },
                { id: '2diter', label: '2. 2D & Nested', icon: Layout },
                { id: 'nditer', label: '3. Advanced nditer()', icon: RefreshCw },
                { id: 'indices', label: '4. ndenumerate()', icon: Layers },
                { id: 'pro', label: '5. Vector Policy', icon: Zap }
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
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  Show 2D → 1D transformation visually first. Compare with ravel() early and explain the memory concept (copy vs view) clearly!
               </p>
            </div>
            
            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Senior Dev Tip
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  Iteration in NumPy is NOT preferred for performance. Python loops are slow! Use <span className="text-rose-400 font-black italic underline decoration-rose-500/20 underline-offset-4">Vectorization</span> whenever possible.
               </p>
            </div>

            <div className="mt-8 bg-cyan-500/5 border border-cyan-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Layers size={20} /> Trace Log
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Use <code className="text-cyan-300">np.ndenumerate</code> to get both the index (coordinate) and the value at the same time.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Basic Array Iteration" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left">
                         Iteration involves <span className="text-indigo-400 font-bold italic">visiting each element</span> of an array sequentially to perform custom logic, cleanup, or transformations.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Data Prep", desc: "Clean bad values", icon: "🧹" },
                           { label: "Pixel Logic", desc: "Process image data", icon: "🖼️" },
                           { label: "Custom Calc", icon: "🧮", desc: "Complex logic" },
                           { label: "Validation", desc: "Audit array data", icon: "🔍" }
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
                    title="1D Stream Traversal"
                    description="Standard sequence iteration across a flat array."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40])\n\nfor x in arr:\n    print(x)`} 
                    output="10\n20\n30\n40" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2diter' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. Multi-Dimensional Loops" color="violet" />
                   
                   <div className="bg-violet-950/10 border border-violet-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                         <Layers size={140} />
                      </div>
                      <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-8 text-left">
                         When iterating 2D arrays, NumPy defaults to <span className="text-violet-400 font-black underline decoration-violet-500/30 underline-offset-8">Row-by-Row</span> traversal. To reach elements, you need nested loops.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="bg-black/80 p-10 rounded-3xl border border-violet-500/20 text-center flex flex-col items-center">
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 italic">Standard Loop</span>
                            <span className="text-2xl font-black text-violet-400 leading-tight">Returns Entire Rows</span>
                         </div>
                         <div className="bg-black/80 p-10 rounded-3xl border border-violet-500/20 text-center flex flex-col items-center">
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 italic">Nested Loop</span>
                            <span className="text-2xl font-black text-violet-400 leading-tight">Returns Single Elements</span>
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="violet"
                    title="Row-wise vs Element-wise"
                    description="Observing the structural depth of iteration."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\nprint("Row Iteration:")\nfor row in arr:\n    print(row)\n\nprint("\\nElement Iteration:")\nfor row in arr:\n    for elem in row:\n        print(elem)`} 
                    output="Row Iteration:\n[1 2]\n[3 4]\n\nElement Iteration:\n1\n2\n3\n4" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'nditer' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={RefreshCw} title="3. The Advanced np.nditer() Engine" color="emerald" />
                   
                   <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <RefreshCw size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 text-left">
                        <RefreshCw className="text-emerald-500" size={28} /> High-Efficiency Traversal
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left">
                        <code className="text-emerald-400 font-bold italic">np.nditer()</code> is a powerful function to iterate over all elements regardless of dimension, flattening traversal internally.
                     </p>

                     <CodeExample 
                        color="emerald"
                        title="Automatic Dimensional Collapse"
                        description="Iterating over a 2D matrix without nested loops."
                        code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\nfor x in np.nditer(arr):\n    print(x)`} 
                        output="1\n2\n3\n4" 
                      />

                     <div className="bg-slate-950 p-10 rounded-3xl border border-slate-800 text-left">
                        <h5 className="text-emerald-400 font-black text-xs uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 flex items-center gap-2">
                           <CodeXml size={16} /> Modifying During Cycle
                        </h5>
                        <p className="text-xs text-slate-500 leading-relaxed mb-6 font-semibold italic">
                           Use <code className="text-emerald-300">op_flags=['readwrite']</code> to mutate the array while looping. ⚠️ Forgetting this will cause an error!
                        </p>
                        <CodeExample 
                          color="cyan"
                          title="In-Place Scalar Mutation"
                          code={`import numpy as np\n\narr = np.array([1, 2, 3, 4])\n\n# Multiply each element by 2\nfor x in np.nditer(arr, op_flags=['readwrite']):\n    x[...] = x * 2\n\nprint("Mutated Array:")\nprint(arr)`} 
                          output="Mutated Array:\n[2 4 6 8]" 
                        />
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'indices' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Layers} title="4. Coordinates with np.ndenumerate()" color="amber" />
                   
                   <p className="text-xl text-slate-400 font-light mb-12 italic text-left">
                     When you need both the <span className="text-white font-bold italic underline decoration-amber-500/30 underline-offset-8">Coordinate (Index)</span> and the raw value, use <code className="text-amber-400 font-black underline decoration-amber-500/30 underline-offset-8 italic">ndenumerate</code>.
                   </p>

                   <CodeExample 
                    color="amber"
                    title="Audit Traversal"
                    description="Viewing the index tuple along with each array entry."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3])\n\nfor idx, x in np.ndenumerate(arr):\n    print(idx, x)`} 
                    output="(0,) 1\n(1,) 2\n(2,) 3" 
                  />
                  
                   <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 mt-12">
                      <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Pro Trick: Flatten Quickly</h5>
                      <code className="block bg-black/60 p-4 rounded-xl text-amber-300 text-xs">for x in arr.flat: print(x)</code>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Vectorization vs Iteration" color="rose" />
                   
                   <div className="bg-rose-950/20 border border-rose-500/30 rounded-[3.5rem] p-16 relative overflow-hidden group shadow-2xl">
                     <div className="absolute top-0 right-0 p-16 opacity-5 animate-pulse">
                        <Activity size={240} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 text-left">
                        <Zap className="text-rose-500" size={28} /> The Professional Standard
                     </h4>
                     <p className="text-xl text-slate-300 leading-relaxed font-light mb-10 italic text-left">
                        Python loops are slow. NumPy's C-backend is optimized for <span className="text-rose-400 font-black italic underline underline-offset-8 decoration-rose-500/20">Vectorized Operations</span>.
                     </p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 bg-black/60 rounded-3xl border border-rose-500/20">
                           <h5 className="text-rose-500 font-black text-[10px] uppercase tracking-widest mb-4">Avoid (Slow)</h5>
                           <code className="text-xs text-slate-400">for x in arr: x = x * 2</code>
                        </div>
                        <div className="p-8 bg-black/60 rounded-3xl border border-emerald-500/20">
                           <h5 className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-4">Prefer (Fast)</h5>
                           <code className="text-xs text-emerald-400">arr = arr * 2</code>
                        </div>
                     </div>

                     <CodeExample 
                        color="rose"
                        title="Real-World: Negative Cleanup"
                        description="Replacing negative values with 0 using conditional iteration."
                        code={`import numpy as np\n\narr = np.array([1, -2, 3, -4])\n\nfor x in np.nditer(arr, op_flags=['readwrite']):\n    if x < 0:\n        x[...] = 0\n\nprint("Sanitized Dataset:")\nprint(arr)`} 
                        output="Sanitized Dataset:\n[1 0 3 0]" 
                      />
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
                             Challenge: Iterate over a <span className="text-white font-bold">2x2 matrix</span> using <code className="text-blue-400">nditer</code>, then try printing index/value pairs with <code className="text-blue-400">ndenumerate</code>!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Traversal Mission Lab"
                           code={`import numpy as np\n\narr = np.array([[10, 20], [30, 40]])\n\nprint("Enumerated Points:")\nfor idx, x in np.ndenumerate(arr):\n    print(idx, x)`} 
                           output="Enumerated Points:\n(0,0,) 10\n(0,1,) 20\n(1,0,) 30\n(1,1,) 40" 
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
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Iterative Traversal Lab v9.2</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Surgical Traversal with Optional Vector Bypass
         </p>
      </footer>
    </div>
  );
}
