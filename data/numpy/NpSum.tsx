import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, TrendingUp, Plus, PlusCircle, Boxes, FlaskConical, BarChart3, Binary, Sigma } from 'lucide-react';

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
    array: (data: any) => JSON.parse(JSON.stringify(data)),
    sum: (a: any, axis: any = null, params: any = {}) => {
        const keepdims = params.keepdims || false;
        
        const resolveVal = (v: any) => typeof v === 'boolean' ? (v ? 1 : 0) : v;

        if (axis === null) {
            return a.flat(Infinity).reduce((acc: number, v: any) => acc + resolveVal(v), 0);
        }

        if (axis === 0) { // Column-wise
            const cols = a[0].length;
            const res = Array.from({ length: cols }, (_, c) => a.reduce((sum: number, r: any[]) => sum + resolveVal(r[c]), 0));
            return keepdims ? [res] : res;
        }

        if (axis === 1) { // Row-wise
            const res = a.map((row: any[]) => row.reduce((sum: number, v: any) => sum + resolveVal(v), 0));
            return keepdims ? res.map((v: number) => [v]) : res;
        }
    },
    cumsum: (a: any[]) => {
        let sum = 0;
        return a.map(v => (sum += v));
    },
    int64: "int64"
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
       .replace(/np\.sum\((.+?),\s*axis=(.+?),\s*keepdims=(.+?)\)/g, 'np.sum($1, $2, {keepdims: $3})')
       .replace(/np\.sum\((.+?),\s*axis=(.+?)\)/g, 'np.sum($1, $2)')
       .replace(/np\.sum\((.+?),\s*dtype=(.+?)\)/g, 'np.sum($1)') // Simplified mock for 'dtype'
       .replace(/np\.sum\((.+?)\)/g, 'np.sum($1)')
       .replace(/np\.cumsum\((.+?)\)/g, 'np.cumsum($1)')
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

export default function NpSum() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5 font-sans`}>
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
          <div className="flex items-center gap-4 text-left font-sans font-black">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">Total Accumulation Terminal</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'TOTALING...' : 'RUN MODULE'}
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
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans font-black">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-white font-sans font-black">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Vectorized Aggregate Result
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Aggregation pending...'}
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617] font-sans"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left font-sans">
          <div className="flex-1 font-sans">
            <div className="flex items-center gap-6 mb-10 font-sans">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent font-sans"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Vectorized Sigma Aggregation</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic font-sans font-black">sum</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold font-sans">
               Master the art of <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Total Data Resolve</span>. Perform high-performance sigma totaling across any axis, enabling cumulative analysis, mini-batch loss aggregation, and boolean condition counting with vectorized C-level precision.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black font-sans">
               <PlusCircle size={24} className="text-indigo-400 font-sans" /> Total Resolver
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left font-sans">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left font-sans">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans">
              {[
                { id: 'concept', label: '1. Totaling Theory', icon: BookOpen },
                { id: '1d', label: '2. Basic Vector Sum', icon: Plus },
                { id: 'axis', label: '3. multi-axis Aggregate', icon: Scaling },
                { id: 'cum', label: '4. Cumulative Growth', icon: Activity },
                { id: 'pro', label: '5. Senior Totaling Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic font-sans font-black font-sans font-black font-sans' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans font-black font-sans font-black'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans font-black">
                  <BarChart3 size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black font-sans">
                  <Lightbulb size={20} /> Senior Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  Vectorized <code className="text-indigo-300 font-black font-sans italic">np.sum()</code> is significantly faster than Python's native <code className="text-indigo-300 font-black font-sans italic font-sans">sum()</code> because it resolves totaling directly in C-optimized memory blocks.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                  <Binary size={20} /> Boolean Logic
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold">
                  Summing boolean arrays like <code className="text-indigo-300 font-black font-sans italic">arr &gt; 10</code> automatically counts the number of <span className="text-indigo-300 font-black font-sans font-bold font-sans">True</span> occurrences!
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <AlertTriangle size={20} /> Axis Warning ⚠️
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans">
                  In 2D aggregation, <span className="text-rose-300 font-bold font-sans font-black underline italic font-sans">axis=0</span> totals down through columns, while <span className="text-rose-300 font-bold font-sans font-black underline italic font-sans">axis=1</span> totals across individual rows.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans font-black">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans font-black">
                <section>
                   <SectionHeader icon={Info} title="1. Sigma Aggregation Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold font-sans font-black font-sans font-black">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans font-black"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans font-black font-sans font-black font-sans">
                         <span className="text-indigo-400 font-bold italic font-sans font-bold font-sans font-black font-sans font-black">Total Data Resovle</span> is the act of condensing a coordinate space into its sigma total. In NumPy, this power feature is used to calculate total revenue, mini-batch loss, and population counts via boolean masking.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Sales", desc: "Total revenue", icon: "💰" },
                           { label: "Loss", desc: "Loss aggregation", icon: "📉" },
                           { label: "Count", desc: "Condition totals", icon: "🔢" },
                           { label: "Intens", desc: "Pixel intensity", icon: "💡" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20 font-sans font-black font-sans font-black font-sans font-black">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans font-black font-sans font-black font-sans">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold font-sans font-black">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group mb-16 text-left">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <Sigma className="text-indigo-500 font-sans font-black" size={28} /> Scalar Total Probe
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic">
                         NumPy evaluates totals instantly: <code className="text-indigo-300 font-black font-sans italic font-sans font-black">np.sum([True, False, True])</code> yields 2, resolve every <span className="text-indigo-400 font-bold font-sans font-black italic">True</span> as 1 and every <span className="text-indigo-400 font-bold font-sans font-black italic">False</span> as 0.
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === '1d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Plus} title="2. Basic Vector Summation" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      Compute the total <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8 font-sans font-black font-sans">Aggregate Magnitude</span> for an entire 1D vector instantly.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Vector Total Terminal"
                    description="Executing a basic total sum on a 5-element vector."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4, 5])\n\n# Vectorized Sum\ntotal = np.sum(arr)\n\nprint("Determined Sigma Total:")\nprint(total)`} 
                    output="Determined Sigma Total:\n15" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'axis' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. multi-axis Aggregate Resolve" color="violet" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                      Total your data along specific <span className="text-violet-400 font-bold font-sans font-black italic">Dimensional Axes</span>. Axis 0 totals down columns, while Axis 1 totals across rows.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="multi-axis Totaling Sandbox"
                    description="Executing column-wise vs row-wise aggregation on a 2x3 matrix."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Total Down Columns (Axis 0)\ncol_sum = np.sum(arr, axis=0)\n\n# Total Across Rows (Axis 1)\nrow_sum = np.sum(arr, axis=1)\n\nprint("Column-wise Sigma:", col_sum)\nprint("Row-wise Sigma:", row_sum)`} 
                    output="Column-wise Sigma: [5 7 9]\nRow-wise Sigma: [6 15]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'cum' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="4. Cumulative Growth Analysis" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                     Observe how values <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">Accumulate</span> over time using the cumulative sum engine.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Cumulative Growth Terminal"
                    description="Executing cumsum to track progression over a dataset."
                    code={`import numpy as np\n\ndata = np.array([5, 10, 15, 20, 25])\n\n# Track running total\nprogression = np.cumsum(data)\n\nprint("Cumulative Progression:")\nprint(progression)`} 
                    output="Cumulative Progression:\n[5 15 30 50 75]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Totaling Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black font-sans font-black">
                            <Binary size={16} /> Boolean Counting
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Count values meeting a condition instantly: <code className="text-cyan-300">np.sum(arr &gt; 25)</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                            <Layout size={16} /> Rank Persistence
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Keep the result's dimensional rank for easier broadcasting: <code className="text-emerald-300">keepdims=True</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Sigma size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black font-sans font-black font-sans font-black">
                            ⚡ Dataset <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black">Totaling hub</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold font-sans font-black font-sans font-black font-sans">
                             Challenge: Compute the <span className="text-white font-bold italic font-sans font-bold font-sans font-black font-sans font-black">Row-wise Sigma</span> and count values &gt; 25!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Aggregate Resolver Lab"
                           code={`import numpy as np\n\narr = np.array([[10, 20, 30], [40, 50, 60]])\n\n# Row-wise totals\nrow_sigma = np.sum(arr, axis=1)\n\n# Count values > 25\nhigh_count = np.sum(arr > 25)\n\nprint("Row Sigma Total:", row_sigma)\nprint("Values > 25 count:", high_count)`} 
                           output="Row Sigma Total: [60 150]\nValues > 25 count: 4" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black font-sans font-black font-sans">KG</div>
            <div className="font-sans font-black italic font-sans">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black font-sans font-black">Total Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
            High-Performance Sigma Aggregation with multi-axis Axis Logic and Cumulative Growth Resolution
         </p>
      </footer>
    </div>
  );
}
