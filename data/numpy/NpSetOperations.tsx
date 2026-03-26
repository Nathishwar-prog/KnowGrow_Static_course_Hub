import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, ListFilter, CircleCheck, GitCompare, Share2, ClipboardList, Filter } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(1);

    if (Array.isArray(val)) {
       // Check for return_counts type result [data, counts]
       if (val.length === 2 && Array.isArray(val[0]) && Array.isArray(val[1]) && val[0].length === val[1].length) {
          return `(array([${val[0].join(', ')}]), array([${val[1].join(', ')}]))`;
       }
      return `[${val.map(NumpySandbox._format).join(' ')}]`; // Vector
    }
    return String(val);
  },

  np: {
    array: (data: any) => data,
    unique: (arr: any, params: any = {}) => {
        const uniqueValues = [...new Set(arr)].sort((a: any, b: any) => a - b);
        if (params.return_counts) {
            const counts = uniqueValues.map(v => arr.filter((x: any) => x === v).length);
            return [uniqueValues, counts];
        }
        if (params.return_index) {
          const indices = uniqueValues.map(v => arr.indexOf(v));
          return [uniqueValues, indices];
        }
        return uniqueValues;
    },
    intersect1d: (a: any[], b: any[]) => {
        const setB = new Set(b);
        return [...new Set(a.filter(x => setB.has(x)))].sort((a,b) => a-b);
    },
    union1d: (a: any[], b: any[]) => {
        return [...new Set([...a, ...b])].sort((a,b) => a-b);
    },
    setdiff1d: (a: any[], b: any[]) => {
        const setB = new Set(b);
        return [...new Set(a.filter(x => !setB.has(x)))].sort((a,b) => a-b);
    },
    setxor1d: (a: any[], b: any[]) => {
        const setA = new Set(a);
        const setB = new Set(b);
        const diff1 = a.filter(x => !setB.has(x));
        const diff2 = b.filter(x => !setA.has(x));
        return [...new Set([...diff1, ...diff2])].sort((a,b) => a-b);
    }
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    const customPrint = (...args: any[]) => {
      outputBuffer.push(args.map(arg => NumpySandbox._format(arg)).join(' '));
    };

    const sanitizedCode = code
       .replace(/import numpy as np/g, '')
       .replace(/np\.unique\((.+?),\s*return_counts=True\)/g, 'np.unique($1, {return_counts: true})')
       .replace(/np\.unique\((.+?),\s*return_index=True\)/g, 'np.unique($1, {return_index: true})')
       .replace(/np\.unique\((.+?)\)/g, 'np.unique($1)')
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

export default function NpSetOperations() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Stochastic Set Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'COMPUTING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-indigo-300 outline-none resize-none selection:bg-indigo-500/20 font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Set Relationship Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Set resolution pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-600/40 selection:text-white font-sans antialiased overflow-x-hidden font-sans">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617] font-sans"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left font-sans">
          <div className="flex-1 font-sans">
            <div className="flex items-center gap-6 mb-10 font-sans">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Vectorized Relational Logic</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               Array.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">sets</span>
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold font-sans">
               Master the art of <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Relational Comparison</span>. Surgically extract common users, independent unique sets, and exclusive differences between massive array datasets without nested loops.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <GitCompare size={24} className="text-indigo-400 font-sans" /> Relational Ops
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
                { id: 'concept', label: '1. Relational Theory', icon: BookOpen },
                { id: 'unique', label: '2. Duplicate Purge', icon: Filter },
                { id: 'compare', label: '3. Intersection & Union', icon: Share2 },
                { id: 'diff', label: '4. Set Differences', icon: GitCompare },
                { id: 'pro', label: '5. Senior Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Senior Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  NumPy set operations <span className="text-indigo-300 font-black font-sans italic italic">automatically sort</span> the result. This is extremely efficient for large-scale data cleaning but means you will lose the original element sequence.
               </p>
            </div>
            
            <div className="mt-8 bg-violet-500/5 border border-violet-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-violet-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black">
                  <CircleCheck size={20} /> Data Integrity
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold">
                  Always use <span className="text-violet-300 font-black font-sans font-bold font-sans">unique()</span> before comparisons to ensure your relational math isn't skewed by duplicate frequency!
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black">
                  <AlertTriangle size={20} /> 1D Constriction
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black">
                  Set operations like <code className="text-rose-300 font-bold font-sans font-black font-sans italic">intersect1d</code> are built specifically for 1-dimensional comparisons. For higher dimensions, ravel first!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Array Relational Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans font-black"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold">
                         NumPy <span className="text-indigo-400 font-bold italic font-sans font-bold font-sans">Set Logic</span> transforms standard comparison tasks into blazing-fast vectorized operations. They are the primary tools for identifying data overlap and purifying collections.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Purge", desc: "Remove duplicates", icon: "🧹" },
                           { label: "Relate", desc: "Common elements", icon: "🤝" },
                           { label: "Unify", desc: "Combine unique sets", icon: "🔄" },
                           { label: "Exclude", desc: "Difference analysis", icon: "➖" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20 font-sans font-black">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold font-sans">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group mb-16 text-left">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <ClipboardList className="text-indigo-500 font-sans" size={28} /> Relational Mapping
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic">
                         NumPy set functions act like mathematical operators for arrays: <code className="text-indigo-300 font-black font-sans italic">A ∩ B</code> (Common), <code className="text-indigo-300 font-black font-sans italic">A ∪ B</code> (Combined), and <code className="text-indigo-300 font-black font-sans italic">A - B</code> (Difference).
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'unique' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Filter} title="2. Duplicate Purge (np.unique)" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      The <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">np.unique()</span> engine surgically removes redundant elements and presents a sorted, clean set.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Purification Sandbox"
                    description="Executing a duplicate removal on a redundancy-heavy array."
                    code={`import numpy as np\n\narr = np.array([1, 2, 2, 3, 4, 4, 1, 5])\n\n# Purge 1D duplicates\nclean = np.unique(arr)\n\nprint("Purified Dataset:")\nprint(clean)`} 
                    output="Purified Dataset:\n[1 2 3 4 5]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'compare' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Share2} title="3. Intersection & Union Logic" color="blue" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black">
                      Find the <span className="text-blue-400 font-bold font-sans font-black italic">Overlap</span> between sets or unify them into a single unique collection using vectorized comparison.
                   </p>

                   <CodeExample 
                    color="blue"
                    title="Relational Comparison Hub"
                    description="Executing Intersection (Overlap) and Union (Total Unique) on two datasets."
                    code={`import numpy as np\n\na = np.array([1, 2, 3, 4])\nb = np.array([3, 4, 5, 6])\n\n# Common elements only\ncommon = np.intersect1d(a, b)\nprint("Intersection (Common):", common)\n\n# Combine and remove duplicates\ntotal = np.union1d(a, b)\nprint("\\nUnion (All Unique):", total)`} 
                    output="Intersection (Common): [3 4]\n\nUnion (All Unique): [1 2 3 4 5 6]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'diff' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={GitCompare} title="4. Difference & Exclusive XOR" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                     Identify elements that exist <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">Exclusively</span> in one set or find everything that doesn't overlap.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Exclusion Analysis Terminal"
                    description="Executing Set Difference and Symmetric Difference (XOR) logic."
                    code={`import numpy as np\n\na = np.array([1, 2, 3, 4])\nb = np.array([3, 4, 5, 6])\n\n# Elements in a but NOT in b\ndiff = np.setdiff1d(a, b)\nprint("Difference (A-B):", diff)\n\n# Elements NOT in both (Exclusive)\nxor = np.setxor1d(a, b)\nprint("\\nExclusive XOR:", xor)`} 
                    output="Difference (A-B): [1 2]\n\nExclusive XOR: [1 2 5 6]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Relational Protocols" color="violet" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black">
                            <Activity size={16} /> Frequency Audit
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Count occurrences instantly with: <code className="text-cyan-300">np.unique(arr, return_counts=True)</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black">
                            <Layers size={16} /> Index discovery
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold font-sans">
                            Find first appearance positions with: <code className="text-emerald-300">np.unique(arr, return_index=True)</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold font-sans">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Share2 size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-sans font-black">
                            🔐 Unified User <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-sans font-black">Cross-Analysis</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold">
                             Challenge: Find common users between two distinct App IDs datasets!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="User Cross-Check Lab"
                           code={`import numpy as np\n\napp1_users = np.array([101, 102, 103, 105, 107])\napp2_users = np.array([102, 103, 104, 106, 108])\n\n# Identify overlapping IDs\ncommon = np.intersect1d(app1_users, app2_users)\n\n# Identify IDs exclusive to App 1\nexclusive_1 = np.setdiff1d(app1_users, app2_users)\n\nprint("Active Common Users:", common)\nprint("\\nExclusive New Users (App 1):", exclusive_1)`} 
                           output="Active Common Users: [102 103]\n\nExclusive New Users (App 1): [101 105 107]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black font-sans font-black font-sans">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black">Relational Resolver v5.1</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black">
            High-Speed Set Operations with Automatic Sorting and Duplicate Purging
         </p>
      </footer>
    </div>
  );
}
