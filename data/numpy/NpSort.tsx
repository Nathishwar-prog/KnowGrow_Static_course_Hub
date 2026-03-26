import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, ListFilter, ArrowDownUp, TrendingDown, MoveRight, ClipboardList } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(1);

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
    sort: (a: any, axis: number = -1) => {
        const copy = JSON.parse(JSON.stringify(a));
        if (!Array.isArray(copy)) return copy;
        
        if (Array.isArray(copy[0])) { // 2D
            if (axis === 0) { // Column sort
               const rows = copy.length;
               const cols = copy[0].length;
               for (let c = 0; c < cols; c++) {
                   const col = [];
                   for (let r = 0; r < rows; r++) col.push(copy[r][c]);
                   col.sort((x, y) => x - y);
                   for (let r = 0; r < rows; r++) copy[r][c] = col[r];
               }
            } else { // Row sort (axis 1 or -1)
                copy.forEach((row: any[]) => row.sort((x, y) => x - y));
            }
            return copy;
        }
        return copy.sort((x: number, y: number) => x - y);
    },
    argsort: (a: any[]) => {
        return a.map((val, i) => [val, i])
                .sort((x, y) => x[0] - y[0])
                .map(x => x[1]);
    }
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    const customPrint = (...args: any[]) => {
      outputBuffer.push(args.map(arg => NumpySandbox._format(arg)).join(' '));
    };

    const sanitizedCode = code
       .replace(/import numpy as np/g, '')
       .replace(/(.+?)\s*\[\s*::-1\s*\]/g, '($1).reverse()')
       .replace(/(.+?)\s*\[\s*-3:\s*\]/g, '($1).slice(-3)')
       .replace(/(.+?)\.sort\(\)/g, '($1).sort((x, y) => x - y)')
       .replace(/np\.sort\((.+?),\s*axis=(.+?)\)/g, 'np.sort($1, $2)')
       .replace(/np\.sort\((.+?)\)/g, 'np.sort($1)')
       .replace(/np\.argsort\((.+?)\)/g, 'np.argsort($1)')
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

export default function NpSort() {
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
          <div className="flex items-center gap-4 text-left font-sans font-bold">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Stochastic Sort Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'RANKING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800 font-sans">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-indigo-300 outline-none resize-none selection:bg-indigo-500/20 font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Ordered Dataset Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Dataset resolution pending...'}
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
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Vectorized Order Resolution</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               Array.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">sort</span>
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold font-sans">
               Master the <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Ascending Bias</span> of NumPy. Sorted arrays are the backbone of data cleaning, ranking algorithms, and optimized searching—executing at near C-level speeds via vectorized order resolution.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black font-sans">
               <ArrowDownUp size={24} className="text-indigo-400 font-sans" /> Rank Resolver
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans">
              {[
                { id: 'concept', label: '1. Sorting Theory', icon: BookOpen },
                { id: '1d', label: '2. 1D Array Ranking', icon: ArrowDownUp },
                { id: '2d', label: '3. 2D Axis-Based Sort', icon: ListFilter },
                { id: 'index', label: '4. Index-based argsort', icon: Layers },
                { id: 'pro', label: '5. Senior Sort Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans font-black font-sans font-black font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold font-sans">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Senior Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold font-sans">
                  Unlike Python's native <code className="text-indigo-300 font-black font-sans italic italic">.sort()</code>, NumPy's <code className="text-indigo-300 font-black font-sans italic italic font-sans">np.sort()</code> returns a <span className="text-indigo-300 font-black font-sans italic italic font-sans">Sorted Copy</span> by default, leaving your original dataset intact.
               </p>
            </div>
            
            <div className="mt-8 bg-violet-500/5 border border-violet-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-violet-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <TrendingDown size={20} /> Reverse Ordering
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold font-sans">
                  To achieve descending rank, simply sort and then <span className="text-violet-300 font-black font-sans font-bold font-sans font-black">Carve the Tail</span> using the <code className="text-violet-300 font-bold font-sans font-black font-sans">[::-1]</code> slice syntax.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black">
                  <AlertTriangle size={20} /> Axis Confusion!
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans">
                  In 2D sorting, <span className="text-rose-300 font-bold font-sans font-black underline italic font-sans">axis=1</span> (default) sorts within rows, while <span className="text-rose-300 font-bold font-sans font-black underline italic font-sans">axis=0</span> sorts down through the columns.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans font-bold font-sans font-black">
                <section>
                   <SectionHeader icon={Info} title="1. Array Ranking Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans">
                         Sorting isn't just about arrangement—it's about <span className="text-indigo-400 font-bold italic font-sans font-bold font-sans">Optimization</span>. Sorted datasets enable binary searches and are prerequisite for many Machine Learning algorithms that rely on ordered feature space.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Rank", desc: "Isolate top scores", icon: "🥇" },
                           { label: "Clean", desc: "Identify outliers", icon: "🧼" },
                           { label: "Search", desc: "Binary efficiency", icon: "🔍" },
                           { label: "Speed", desc: "C-Optimized sort", icon: "⚡" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20 font-sans font-black font-sans font-black font-sans">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group mb-16 text-left">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <ClipboardList className="text-indigo-500 font-sans" size={28} /> Topological Order vs Rank
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic">
                         While <code className="text-indigo-300 font-black font-sans italic font-sans">np.sort()</code> gives you the actual values, <code className="text-indigo-300 font-black font-sans italic font-sans">np.argsort()</code> gives you the <span className="text-indigo-400 font-bold font-sans font-black italic">Indices</span> of the sorted order—crucial for reordering labels alongside data.
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === '1d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={ArrowDownUp} title="2. 1D Array Ranking" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      The <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">np.sort()</span> engine performs an ascending sort by default, returning a surgical copy of the data.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="1D Ranking Sandbox"
                    description="Executing a basic ascending sort on a chaotic vector."
                    code={`import numpy as np\n\narr = np.array([40, 10, 30, 20])\n\n# Ascending Sort\nsorted_arr = np.sort(arr)\n\n# Descending (Sort + Reverse)\nreverse_sort = np.sort(arr)[::-1]\n\nprint("Ordered Vector:", sorted_arr)\nprint("Descending Order:", reverse_sort)`} 
                    output="Ordered Vector: [10 20 30 40]\nDescending Order: [40 30 20 10]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2d' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={ListFilter} title="3. multi-axis Grid Sorting" color="violet" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans">
                      Sort your matrices along specific <span className="text-violet-400 font-bold font-sans font-black italic">Axes</span>. Axis 1 (Default) sorts each row, while Axis 0 sorts down through columns.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="Topological Grid Resolver"
                    description="Executing Row-wise vs Column-wise sorting on a 2x3 matrix."
                    code={`import numpy as np\n\narr = np.array([[3, 1, 2], [6, 5, 4]])\n\n# Sort Each Row (axis=1)\nrow_sort = np.sort(arr, axis=1)\n\n# Sort Down Columns (axis=0)\ncol_sort = np.sort(arr, axis=0)\n\nprint("Row Sort Result:\\n", row_sort)\nprint("\\nColumn Sort Result:\\n", col_sort)`} 
                    output="Row Sort Result:\n [[1 2 3]\n  [4 5 6]]\n\nColumn Sort Result:\n [[3 1 2]\n  [6 5 4]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'index' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layers} title="4. Index-based argsort" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                     When you need to keep labels aligned with their sorted values, use <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">argsort()</span> to get the index map.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Index Mapping Terminal"
                    description="Executing argsort to retrieve the positions of sorted values."
                    code={`import numpy as np\n\narr = np.array([40, 10, 30, 20])\n\n# Indices of sorted values\nindices = np.argsort(arr)\n\nprint("Indices of Sorted values:", indices)\nprint("Check: arr[indices] yields:", arr[indices])`} 
                    output="Indices of Sorted values: [1 3 2 0]\nCheck: arr[indices] yields: [10 20 30 40]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Order Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black">
                            <TrendingDown size={16} /> Extreme Isolation
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Isolate top 3 values instantly: <code className="text-cyan-300">np.sort(arr)[-3:]</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black">
                            <RefreshCw size={16} /> In-Place Mutability
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Modify the original array directly to save memory: <code className="text-emerald-300">arr.sort()</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold font-sans font-black font-sans">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <ArrowDownUp size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black font-sans">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black">
                            📊 Grade ranking <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-black">Efficiency hub</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold">
                             Challenge: Rank student scores from lowest to highest using vectorized sort!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Grade Resolver Lab"
                           code={`import numpy as np\n\nscores = np.array([85, 90, 78, 92])\n\n# Determine rank order\nranked_scores = np.sort(scores)\n\nprint("Determined Grade Rank:")\nprint(ranked_scores)`} 
                           output="Determined Grade Rank:\n[78 85 90 92]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black font-sans">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black font-sans">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black">Ordered Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black">
            High-Performance Ascending Order Resolution with multi-axis Axis Logic and Index Mapping
         </p>
      </footer>
    </div>
  );
}
