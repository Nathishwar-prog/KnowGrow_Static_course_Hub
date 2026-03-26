import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, TrendingUp, ArrowUp } from 'lucide-react';

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
    array: (data: any) => data,
    max: (a: any, params: any = {}) => {
        const axis = params.axis !== undefined ? params.axis : null;
        const keepdims = params.keepdims || false;

        if (!Array.isArray(a[0])) { // 1D
            return Math.max(...a);
        }
        
        if (axis === null) {
            return Math.max(...a.flat());
        }
        
        if (axis === 0) { // Column-wise
            const res = new Array(a[0].length).fill(-Infinity);
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a[0].length; j++) {
                    res[j] = Math.max(res[j], a[i][j]);
                }
            }
            return keepdims ? [res] : res;
        }
        
        if (axis === 1) { // Row-wise
            const res = a.map((row: any) => Math.max(...row));
            return keepdims ? res.map((v: any) => [v]) : res;
        }
        return "Error: Axis mismatch";
    },
    argmax: (a: any) => {
        const flat = Array.isArray(a[0]) ? a.flat() : a;
        return flat.indexOf(Math.max(...flat));
    },
    nanmax: (a: any) => {
        const flat = Array.isArray(a[0]) ? a.flat() : a;
        const filtered = flat.filter((v: any) => !Number.isNaN(v) && v !== null);
        return Math.max(...filtered);
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
       .replace(/np\.max\((.+?),\s*axis=(.+?),\s*keepdims=(.+?)\)/g, 'np.max($1, {axis: $2, keepdims: $3})')
       .replace(/np\.max\((.+?),\s*axis=(.+?)\)/g, 'np.max($1, {axis: $2})')
       .replace(/np\.max\((.+?)\)/g, 'np.max($1)')
       .replace(/np\.argmax\((.+?)\)/g, 'np.argmax($1)')
       .replace(/np\.nanmax\((.+?)\)/g, 'np.nanmax($1)')
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

export default function NpMax() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left">{title}</h2>
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30 font-sans',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30 font-sans',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30 font-sans',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30 font-sans',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30 font-sans',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30 font-sans',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4 text-left">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Peak Value Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'SCANNING...' : 'FIND PEAK'}
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
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Global Maximum
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-bold">
              {sandboxOutput || output || '// Maximum value pending...'}
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
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-green-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-emerald-500 to-transparent"></div>
              <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.6em] font-sans">Peak Magnitude Analysis</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">max</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans">
               Identify the <span className="text-white font-medium italic underline decoration-emerald-500/30 underline-offset-8">Greatest Value</span> within an array. The surgical tool for finding record peaks, highest scores, and maximum intensities across specified axes.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <TrendingUp size={24} className="text-emerald-400" /> Peak Finder
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <nav className="sticky top-12 space-y-5">
              {[
                { id: 'concept', label: '1. peak Detection', icon: BookOpen },
                { id: '2d', label: '2. Global Matrix Max', icon: Layout },
                { id: 'axes', label: '3. Column vs Row', icon: Scaling },
                { id: 'nan', label: '4. Handling NaN', icon: Activity },
                { id: 'pro', label: '5. Senior Insights', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-emerald-600 border-emerald-500 text-white shadow-[0_20px_60px_rgba(16,185,129,0.4)] active:scale-95 text-left font-sans font-black leading-none' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-emerald-500/5 border border-emerald-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans">
               <div className="absolute -right-8 -bottom-8 p-10 text-emerald-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <ArrowUp size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/20 pb-4 font-sans font-black">
                  <Lightbulb size={20} /> Solver Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold">
                  np.max() scanning is <span className="text-emerald-300 font-black">Vectorized</span>. It finds the global peak millions of times faster than a standard Python list loop!
               </p>
            </div>
            
            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black">
                  <Activity size={20} /> Index Finder
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold">
                  Need the position instead of the value? Use <span className="text-blue-300 font-black italic underline decoration-blue-500/30 underline-offset-4 font-sans italic font-sans font-sans font-sans">np.argmax()</span>.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black">
                  <AlertTriangle size={20} /> NaN Poison
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left">
                  A single <code className="text-rose-300 font-bold font-sans">NaN</code> in your array will turn the result of max() into NaN. Use the specialized <code className="text-rose-300 font-bold font-sans">nanmax()</code> variant to skip them!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Peak Identification" color="emerald" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left font-sans">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-emerald-600 pl-12 max-w-4xl text-left font-sans font-bold">
                         The <span className="text-emerald-400 font-bold italic font-sans italic font-sans font-sans italic font-sans">np.max()</span> engine scans your data for the absolute highest value, either globally or across specific dimensional axes.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Scores", desc: "Top student rankings", icon: "🏆" },
                           { label: "Pixels", desc: "Brighter image regions", icon: "🖼️" },
                           { label: "Climate", desc: "Peak temperature reading", icon: "🌡️" },
                           { label: "Signals", desc: "Peak signal intensity", icon: "📡" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-emerald-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans text-left font-bold">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed font-sans">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="emerald"
                    title="1D Magnitude Scan"
                    description="Identifying the highest scalar in a standard vector."
                    code={`import numpy as np\n\narr = np.array([10, 20, 5, 40])\n\n# Standard global peak\nresult = np.max(arr)\n\nprint("Peak Value found:")\nprint(result)`} 
                    output="Peak Value found:\n40" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. Multi-Dimensional Scan" color="blue" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold">
                      When applied to a matrix without an axis, NumPy performs a <span className="text-blue-400 font-black underline decoration-blue-500/30 underline-offset-8">Global Search</span> across all rows and columns.
                   </p>

                   <CodeExample 
                    color="blue"
                    title="Matrix Peak Search"
                    description="Executing a global maximum search on a 2×3 matrix."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Searches every element globally\nresult = np.max(arr)\n\nprint("Matrix Maximum:")\nprint(result)`} 
                    output="Matrix Maximum:\n6" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'axes' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. Row vs Column Analysis" color="cyan" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-left">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black">
                            <ArrowUp size={16} /> axis = 0 (Vertical)
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic font-sans text-left font-bold">
                            Finds the maximum value in <span className="text-cyan-300 font-black">each column</span>.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-cyan-300 text-[10px] font-sans font-bold">np.max(arr, axis=0)</code>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4 font-sans font-black">
                            <Layers size={16} /> axis = 1 (Horizontal)
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Finds the maximum value in <span className="text-indigo-300 font-black">each row</span>.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-indigo-300 text-[10px] font-sans font-bold">np.max(arr, axis=1)</code>
                      </div>
                   </div>

                   <CodeExample 
                    color="cyan"
                    title="Student Performance Lab"
                    description="Finding the highest grade per student across subjects."
                    code={`import numpy as np\n\n# Scores: [Math, Science, English] for 2 students\nscores = np.array([[85, 90, 78], [88, 76, 95]])\n\n# Max per student (axis=1)\nper_student = np.max(scores, axis=1)\n\nprint("Highest Scores Per Student:")\nprint(per_student)`} 
                    output="Highest Scores Per Student:\n[90 95]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'nan' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="4. NaN Tolerance Audit" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold text-left">
                     Raw datasets often contain missing values. <code className="text-rose-400">nanmax()</code> is the industrial guard that <span className="text-white font-black underline decoration-rose-500/30 underline-offset-8 font-sans">ignores NaNs</span> and finds the real peak.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Poison Tolerance Hub"
                    description="Safely scanning an array containing NaN values."
                    code={`import numpy as np\n\n# Standard max() would return NaN here\narr = np.array([10, 20, np.nan, 40])\n\n# nanmax() ignores the NaN poison\nresult = np.nanmax(arr)\n\nprint("Safe Max Result:")\nprint(result)`} 
                    output="Safe Max Result:\n40" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Peak Protocols" color="amber" />
                   
                   <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 mb-16 text-left font-sans font-bold text-left">
                      <h5 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-6 italic tracking-[0.2em] border-b border-amber-500/10 pb-4 font-sans font-black">Strategic Options</h5>
                      <div className="space-y-6 text-left font-sans font-bold">
                         <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            <p className="text-xs text-slate-400"><code className="text-amber-300 font-bold">keepdims=True</code> : Prevents the dimension collapse, keeping the result as a matrix.</p>
                         </div>
                         <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-amber-500 font-sans"></div>
                            <p className="text-xs text-slate-400 font-sans"><code className="text-amber-300 font-bold font-sans">np.argmax()</code> : Returns the index of the max value, not the value itself.</p>
                         </div>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-emerald-800/40 to-cyan-800/20 border border-emerald-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold text-left">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <TrendingUp size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-sans">
                            🧪 Magnitude <span className="text-emerald-400 italic font-light font-sans italic font-sans font-sans font-sans font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans text-left font-sans font-bold">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-sans font-sans font-sans">Row-Wise Peak Audit</span> and keep the original dimensions!
                         </p>
                         <CodeExample 
                           color="emerald"
                           title="Dimension Guard Mission"
                           code={`import numpy as np\n\narr = np.array([[10, 20], [30, 40]])\n\n# Row max with dimension retention\nresult = np.max(arr, axis=1, keepdims=True)\n\nprint("Dimension-Guarded Output:")\nprint(result)`} 
                           output="Dimension-Guarded Output:\n[[20]\n [40]]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700 font-sans">
            <div className="w-16 h-16 bg-emerald-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-emerald-600/40 font-sans font-black">KG</div>
            <div className="font-sans font-bold">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-bold">Peak Finder Engine v1.8</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none">
            Surgical Point Scanning with Axis Alignment Guards
         </p>
      </footer>
    </div>
  );
}
