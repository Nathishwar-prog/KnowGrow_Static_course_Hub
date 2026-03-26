import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Columns, Layout, AlertTriangle, RotateCw, Activity, Cpu, CodeXml, Layers, ArrowRight, MoveHorizontal } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'string' && val.startsWith('Error:')) return val;
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
    array: (data: any) => data,
    hstack: (tup: any) => {
        if (!Array.isArray(tup)) return "Error: np.hstack(tup) requires a tuple/list of arrays";
        if (tup.length === 0) return [];
        
        // Determine dimensionality
        const is2D = Array.isArray(tup[0]) && Array.isArray(tup[0][0]);
        const is1D = Array.isArray(tup[0]) && !Array.isArray(tup[0][0]);

        if (is2D) {
            const rows = tup[0].length;
            // Check row mismatch
            for (let i = 1; i < tup.length; i++) {
                if (tup[i].length !== rows) return `Error: All input arrays must have the same number of rows! (Found ${rows} vs ${tup[i].length})`;
            }
            const result = Array.from({ length: rows }, () => [] as any[]);
            for (let r = 0; r < rows; r++) {
                for (let i = 0; i < tup.length; i++) {
                    result[r] = result[r].concat(tup[i][r]);
                }
            }
            return result;
        } else if (is1D) {
            return tup.reduce((acc: any[], val: any[]) => acc.concat(val), []);
        }
        return "Error: Unsupported array shape for simplified sandbox";
    },
    vstack: (tup: any) => {
        if (!Array.isArray(tup)) return "Error: vstack requires a tuple/list of arrays";
        return tup.reduce((acc: any[], val: any[]) => acc.concat(val), []);
    },
    concatenate: (tup: any, options?: { axis: number }) => {
        const axis = options?.axis || 0;
        if (axis === 1) return NumpySandbox.np.hstack(tup);
        return NumpySandbox.np.vstack(tup);
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
       .replace(/np\.concatenate\((.+?),\s*axis=1\)/g, 'np.concatenate($1, {axis: 1})')
       .replace(/np\.concatenate\((.+?),\s*axis=0\)/g, 'np.concatenate($1, {axis: 0})')
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

export default function NpHstack() {
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Data Join Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'JOINING DATA...' : 'RUN CONCAT'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Horizontal Outcome
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Awaiting multidimensional join...'}
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
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em]">Dimensional Concatenation</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">hstack</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Combine arrays row-by-row, stacking them <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">horizontally</span>. Industrial-strength tool for feature engineering and dataset merging.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Columns size={24} className="text-blue-400" /> Lateral Join
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
                { id: 'concept', label: '1. Lateral Logic', icon: BookOpen },
                { id: '2dstack', label: '2. 2D Row-Lock', icon: Layout },
                { id: 'visual', label: '3. Matrix Blueprint', icon: MoveHorizontal },
                { id: 'compare', label: '4. Sequence Stack', icon: Target },
                { id: 'pro', label: '5. Data Pipeling', icon: Zap }
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
                  Horizontal = side-by-side. Draw matrix diagrams! It's the best way for students to grasp how columns increase while rows stay fixed.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Layers size={20} /> Feature Tip
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Use <code className="text-indigo-300">np.hstack</code> for feature merging in ML datasets. If your row count doesn't match, you'll hit a shape error!
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Missing Tuple
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Common Rookie Error: <code className="text-rose-300">np.hstack(a, b)</code>. ALWAYS wrap your arrays in a <span className="text-rose-300 font-black italic">tuple</span>: <code className="text-rose-300">np.hstack((a, b))</code>.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Lateral Stacking Concept" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl text-left">
                         <span className="text-blue-400 font-bold italic">np.hstack()</span> joins arrays column-wise, placing them <span className="text-blue-400 font-bold italic underline decoration-blue-500/20 underline-offset-8">side-by-side</span>. It's the primary way to expand the width of your datasets.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Dataset Merge", desc: "Join multiple files", icon: "📊" },
                           { label: "Features", desc: "Add data columns", icon: "🚀" },
                           { label: "Image Join", desc: "Panoramic stitch", icon: "🖼️" },
                           { label: "Prep", desc: "ML pre-processing", icon: "⚙️" }
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
                    title="Simple 1D Horizontal Merge"
                    description="Joining two flat arrays into one longer sequence."
                    code={`import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\n# Join them sequence-style\nresult = np.hstack((a, b))\n\nprint("Merged 1D Result:")\nprint(result)`} 
                    output="Merged 1D Result:\n[1 2 3 4 5 6]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2dstack' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. The 'Same Row' Rule" color="indigo" />
                   
                   <div className="bg-indigo-950/10 border border-indigo-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                         <Layers size={140} />
                      </div>
                      <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-8">
                         For 2D arrays, <span className="text-indigo-400 font-black">np.hstack</span> requires that the number of rows matches perfectly. Columns increase, but the vertical height stays fixed.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="bg-black/60 p-10 rounded-3xl border border-rose-500/20 flex flex-col items-center text-center hover:bg-black/80 transition-all">
                            <span className="text-xs font-black text-rose-500 uppercase tracking-widest mb-4 italic">Error Trigger</span>
                            <span className="text-2xl font-black text-slate-400">Rows Mismatch</span>
                         </div>
                         <div className="bg-black/60 p-10 rounded-3xl border border-emerald-500/20 flex flex-col items-center text-center hover:bg-black/80 transition-all">
                            <span className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-4 italic">Valid Logic</span>
                            <span className="text-2xl font-black text-slate-400">Rows = Shape[0]</span>
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="indigo"
                    title="Matrix Blueprint Stacking"
                    description="Joining two 2x2 matrices into a 2x4 resulting matrix."
                    code={`import numpy as np\n\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6], [7, 8]])\n\nresult = np.hstack((a, b))\n\nprint("Dimensional Expansion (H):")\nprint(result)`} 
                    output="Dimensional Expansion (H):\n[[1 2 5 6]\n [3 4 7 8]]" 
                  />
                  
                  <CodeExample 
                    color="rose"
                    title="Debugging Shape Error"
                    description="What happens when row counts don't align?"
                    code={`import numpy as np\n\na = np.array([[1, 2]])\nb = np.array([[3, 4], [5, 6]])\n\n# This will trigger a dimension error in real NumPy\n# Our sandbox provides a descriptive error message\nprint(np.hstack((a, b)))`} 
                    output="Error: All input arrays must have the same number of rows! (Found 1 vs 2)" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'visual' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={MoveHorizontal} title="3. Side-by-Side Blueprint" color="cyan" />
                   
                   <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <MoveHorizontal size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <MoveHorizontal className="text-cyan-500" size={28} /> Visualizing np.hstack()
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left">
                        Think of placing matrices horizontally. The join happens on <span className="text-white italic font-bold">axis 1</span>.
                     </p>
                     
                     <div className="bg-slate-950 p-10 rounded-2xl border border-slate-800 mb-10 overflow-hidden text-center">
                        <div className="flex items-center justify-center gap-4">
                           <div className="grid grid-cols-2 gap-1 border-2 border-blue-500/20 p-2 rounded-xl">
                              <div className="w-8 h-8 bg-blue-500/20 rounded"></div><div className="w-8 h-8 bg-blue-500/20 rounded"></div>
                              <div className="w-8 h-8 bg-blue-500/20 rounded"></div><div className="w-8 h-8 bg-blue-500/20 rounded"></div>
                           </div>
                           <div className="text-2xl text-slate-700">+</div>
                           <div className="grid grid-cols-2 gap-1 border-2 border-emerald-500/20 p-2 rounded-xl">
                              <div className="w-8 h-8 bg-emerald-500/20 rounded"></div><div className="w-8 h-8 bg-emerald-500/20 rounded"></div>
                              <div className="w-8 h-8 bg-emerald-500/20 rounded"></div><div className="w-8 h-8 bg-emerald-500/20 rounded"></div>
                           </div>
                           <div className="text-2xl text-slate-700">=</div>
                           <div className="grid grid-cols-4 gap-1 border-2 border-indigo-500/40 p-2 rounded-xl">
                              <div className="w-8 h-8 bg-blue-500/20 rounded"></div><div className="w-8 h-8 bg-blue-500/20 rounded"></div><div className="w-8 h-8 bg-emerald-500/20 rounded"></div><div className="w-8 h-8 bg-emerald-500/20 rounded"></div>
                              <div className="w-8 h-8 bg-blue-500/20 rounded"></div><div className="w-8 h-8 bg-blue-500/20 rounded"></div><div className="w-8 h-8 bg-emerald-500/20 rounded"></div><div className="w-8 h-8 bg-emerald-500/20 rounded"></div>
                           </div>
                        </div>
                     </div>

                     <CodeExample 
                        color="cyan"
                        title="3-Array Lateral Stack"
                        description="Joint three arrays side-by-side in a single call."
                        code={`import numpy as np\n\na = np.array([[1], [2]])\nb = np.array([[3], [4]])\nc = np.array([[5], [6]])\n\nresult = np.hstack((a, b, c))\n\nprint("Multi-Array Joint:")\nprint(result)`} 
                        output="Multi-Array Joint:\n[[1 3 5]\n [2 4 6]]" 
                      />
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'compare' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Target} title="4. Comparison & Equivalents" color="purple" />
                   
                   <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
                      <table className="w-full text-left border-collapse">
                         <thead>
                            <tr className="bg-slate-800/10">
                               <th className="px-10 py-6 text-sm font-black text-slate-300 uppercase tracking-widest">Function</th>
                               <th className="px-10 py-6 text-sm font-black text-blue-400 uppercase tracking-widest">Stack Logic</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-slate-800">
                            {[
                               { f: "np.hstack()", d: "Horizontal stacking (axis=1) ✅" },
                               { f: "np.vstack()", d: "Vertical stacking (axis=0)" },
                               { f: "np.concatenate()", d: "Flexible dimensional joining" },
                               { f: "np.column_stack()", d: "Stacks 1D arrays as columns" }
                            ].map((row, i) => (
                               <tr key={i} className="hover:bg-white/5 transition-colors">
                                  <td className="px-10 py-6 text-sm font-black text-white italic">{row.f}</td>
                                  <td className="px-10 py-6 text-sm font-medium text-slate-400 leading-relaxed">{row.d}</td>
                               </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>

                   <CodeExample 
                    color="purple"
                    title="Concatenate Equivalent"
                    description="Using axis=1 to mirror hstack behavior."
                    code={`import numpy as np\n\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6], [7, 8]])\n\n# np.concatenate((A, B), axis=1) == np.hstack((A, B))\nresult = np.concatenate((a, b), axis=1)\n\nprint("Result via Concatenate Axis-1:")\nprint(result)`} 
                    output="Result via Concatenate Axis-1:\n[[1 2 5 6]\n [3 4 7 8]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. High Performance Pipelining" color="amber" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4">
                            <Activity size={16} /> Feature Merging
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Combine two separate feature matrices into a single input for Scikit-Learn or PyTorch.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-cyan-300 text-xs">X = np.hstack((feat1, feat2))</code>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4">
                            <ArrowRight size={16} /> Diagnostic Mode
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Always check dimensions before stacking to prevent runtime termination.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-emerald-300 text-xs">print(a.shape, b.shape)</code>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RotateCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-indigo-400 italic font-light">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                             Mini Exercise: Create <span className="text-white font-bold">a = np.array([[1], [2]])</span> and <span className="text-white font-bold">b = np.array([[3], [4]])</span>. Join them horizontally, then try adding a third array!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Stacker Mission Lab"
                           code={`import numpy as np\n\na = np.array([[1], [2]])\nb = np.array([[3], [4]])\nc = np.array([[5], [6]])\n\n# Join horizontally\nresult = np.hstack((a, b, c))\n\nprint("Final Pipelined Matrix:")\nprint(result)`} 
                           output="Final Pipelined Matrix:\n[[1 3 5]\n [2 4 6]]" 
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
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Advanced Lateral Concatenation v3.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Surgical Data Joining with Zero Allocation Overhead
         </p>
      </footer>
    </div>
  );
}
