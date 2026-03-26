import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, TrendingDown, ArrowDown } from 'lucide-react';

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
    min: (a: any, params: any = {}) => {
        const axis = params.axis !== undefined ? params.axis : null;
        const keepdims = params.keepdims || false;

        if (!Array.isArray(a[0])) { // 1D
            return Math.min(...a);
        }
        
        if (axis === null) {
            return Math.min(...a.flat());
        }
        
        if (axis === 0) { // Column-wise
            const cols = a[0].length;
            const res = new Array(cols).fill(Infinity);
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < cols; j++) {
                    res[j] = Math.min(res[j], (a[i][j] || Infinity));
                }
            }
            return keepdims ? [res] : res;
        }
        
        if (axis === 1) { // Row-wise
            const res = a.map((row: any) => Math.min(...row));
            return keepdims ? res.map((v: any) => [v]) : res;
        }
        return "Error: Axis mismatch";
    },
    argmin: (a: any) => {
        const flat = Array.isArray(a[0]) ? a.flat() : a;
        return flat.indexOf(Math.min(...flat));
    },
    nanmin: (a: any) => {
        const flat = Array.isArray(a[0]) ? a.flat() : a;
        const filtered = flat.filter((v: any) => typeof v === 'number' && !Number.isNaN(v));
        return filtered.length === 0 ? Infinity : Math.min(...filtered);
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
       .replace(/np\.min\((.+?),\s*axis=(.+?),\s*keepdims=(.+?)\)/g, 'np.min($1, {axis: $2, keepdims: $3})')
       .replace(/np\.min\((.+?),\s*axis=(.+?)\)/g, 'np.min($1, {axis: $2})')
       .replace(/np\.min\((.+?)\)/g, 'np.min($1)')
       .replace(/np\.argmin\((.+?)\)/g, 'np.argmin($1)')
       .replace(/np\.nanmin\((.+?)\)/g, 'np.nanmin($1)')
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

export default function NpMin() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5 font-sans font-black`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left font-sans font-black">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title, description, color="cyan" }: any) => {
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
          <div className="flex items-center gap-4 text-left font-sans">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Magnitude Baseline Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'SCANNING...' : 'FIND MINIMUM'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-cyan-300 outline-none resize-none selection:bg-cyan-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Baseline Statistics
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-bold">
              {sandboxOutput || output || '// Minimum value pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-600/40 selection:text-white font-sans antialiased overflow-x-hidden font-sans italic">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-cyan-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Baseline Magnitude Discovery</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">min</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold">
               Identify the <span className="text-white font-medium italic underline decoration-cyan-500/30 underline-offset-8">Minimum Value</span> within array domains. The surgical tool for finding record lows, lowest intensities, and absolute baselines for data normalization.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <TrendingDown size={24} className="text-cyan-400" /> Minimum Point
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
                { id: 'concept', label: '1. Baseline Detection', icon: BookOpen },
                { id: '2d', label: '2. Global Matrix Min', icon: Layout },
                { id: 'axes', label: '3. Diagonal scanning', icon: Scaling },
                { id: 'nan', label: '4. Non-Polluting Min', icon: Activity },
                { id: 'pro', label: '5. Senior Tips', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-cyan-600 border-cyan-500 text-white shadow-[0_20px_60px_rgba(8,145,178,0.4)] active:scale-95 text-left leading-none font-sans font-black italic' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-cyan-500/5 border border-cyan-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner font-sans font-black text-left">
               <div className="absolute -right-8 -bottom-8 p-10 text-cyan-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <ArrowDown size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/20 pb-4 font-sans font-black">
                  <Lightbulb size={20} /> Solver Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic">
                  np.min() identifies the absolute minimum <span className="text-cyan-300 font-black">baselines</span>. It is the core of the <span className="text-cyan-300 font-black italic font-sans font-bold">Min-Max Scaling</span> algorithm used extensively in machine learning feature scaling.
               </p>
            </div>
            
            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black">
                  <Activity size={20} /> Index Lookup
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans">
                  Need to know where the minimum is located? Use <span className="text-blue-300 font-black italic underline decoration-blue-500/30 underline-offset-4 font-sans font-bold font-sans font-bold">np.argmin()</span> to find its coordinate.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black">
                  <AlertTriangle size={20} /> Nan Hazard
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left">
                  Any <code className="text-rose-300 font-bold font-sans font-black">NaN</code> entry will contaminate np.min(), returning NaN. Use <code className="text-rose-300 font-bold font-sans font-black">np.nanmin()</code> as a professional guard for datasets with missing values.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Baseline Magnitude Discovery" color="cyan" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-cyan-600 pl-12 max-w-4xl font-sans font-bold text-left font-sans font-bold">
                         The <span className="text-cyan-400 font-bold italic font-sans font-bold font-sans font-sans">np.min()</span> operator identifies the lowest magnitude within an array, either globally or across specific dimensional axes.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Grading", desc: "Lowest student scores", icon: "📉" },
                           { label: "Pricing", desc: "Minimum market entry", icon: "💰" },
                           { label: "Imaging", desc: "Darkest pixel regions", icon: "🌑" },
                           { label: "Climate", desc: "Lowest recorded temp", icon: "❄️" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-cyan-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold text-left">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="cyan"
                    title="1D Baseline scan"
                    description="Executing a global minimum search on a standard vector."
                    code={`import numpy as np\n\narr = np.array([10, 20, 5, 40])\n\n# Standard global baseline\nresult = np.min(arr)\n\nprint("Determined Minimum:")\nprint(result)`} 
                    output="Determined Minimum:\n5" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. Global Matrix Minimum" color="blue" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold">
                      Default behavior for matrices: NumPy scans all available elements to return the absolute <span className="text-blue-400 font-black underline decoration-blue-500/30 underline-offset-8">Smallest Value</span> in the grid.
                   </p>

                   <CodeExample 
                    color="blue"
                    title="Matrix Baseline Sandbox"
                    description="Calculating the global minimum of a 2×3 array."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Searches every element in total\nprint("Matrix Global Result:")\nprint(np.min(arr))`} 
                    output="Matrix Global Result:\n1" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'axes' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. Diagonal Axis Scans" color="emerald" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-left">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black">
                            <ArrowDown size={16} /> axis = 0 (Vertical)
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold text-left">
                            Finds minimum in <span className="text-emerald-300 font-black">each column</span>.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-emerald-300 text-[10px] font-sans font-bold">np.min(arr, axis=0)</code>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4 font-sans font-black font-sans font-black">
                            <Layers size={16} /> axis = 1 (Horizontal)
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold text-left">
                            Finds minimum in <span className="text-indigo-300 font-black">each row</span>.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-indigo-300 text-[10px] font-sans font-bold">np.min(arr, axis=1)</code>
                      </div>
                   </div>

                   <CodeExample 
                    color="emerald"
                    title="Real-World Climate Lab"
                    description="Identifying the lowest recorded temperature per day."
                    code={`import numpy as np\n\n# Temperature data for 2 days across 3 readings each\ntemp = np.array([[30, 32, 28], [35, 31, 29]])\n\n# Min per day (axis=1)\nper_day = np.min(temp, axis=1)\n\nprint("Lowest Recording Per Day:")\nprint(per_day)`} 
                    output="Lowest Recording Per Day:\n[28 29]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'nan' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="4. Non-Polluting Baseline Hub" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold">
                     Missing data shouldn't crash your scaling pipeline. <code className="text-rose-400">nanmin()</code> is the industrial filter that <span className="text-white font-black underline decoration-rose-500/30 underline-offset-8 font-sans font-bold text-left">skips toxic NaNs</span> during the scan.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Safe Baseline filtering"
                    description="Executing np.nanmin() on a vectors with missing entries."
                    code={`import numpy as np\n\n# Standard min() returns NaN\narr = np.array([10, 20, np.nan, 5])\n\n# nanmin() skips the NaN trap\nresult = np.nanmin(arr)\n\nprint("Determined Safe Min:")\nprint(result)`} 
                    output="Determined Safe Min:\n5" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Statistical Workbench" color="amber" />
                   
                   <ul className="space-y-8 mb-16 text-left">
                      {[
                        { tip: "Find Position", desc: "Use argmin() to find precisely where the baseline value exists.", icon: Activity },
                        { tip: "Rank Retention", desc: "Use keepdims=True to maintain matrix dimensions during reduction.", icon: Scaling },
                        { tip: "Min-Max scaling", icon: Layers, desc: "Fundamental for preparing features for ML models by scaling range to [0, 1]." }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-8 group">
                           <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
                              <item.icon size={22} />
                           </div>
                           <div className="text-left font-sans font-bold font-sans">
                              <h5 className="text-sm font-black text-white uppercase tracking-widest mb-2 font-sans font-black">{item.tip}</h5>
                              <p className="text-xs text-slate-500 font-semibold leading-relaxed font-sans">{item.desc}</p>
                           </div>
                        </li>
                      ))}
                   </ul>

                   <div className="mt-28 bg-gradient-to-br from-cyan-800/40 to-blue-800/20 border border-cyan-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <TrendingDown size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans">
                            🧪 Baseline <span className="text-cyan-400 italic font-light font-sans font-bold font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans">Diagonal Minimum Mission</span> using the keepdims flag!
                         </p>
                         <CodeExample 
                           color="cyan"
                           title="Industrial Min-Audit Lab"
                           code={`import numpy as np\n\narr = np.array([[10, 2], [3, 4]])\n\n# Row minimum with dimension retention\nresult = np.min(arr, axis=1, keepdims=True)\n\nprint("Dimensions-Guarded Baseline:")\nprint(result)`} 
                           output="Dimensions-Guarded Baseline:\n[[2]\n [3]]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans text-left">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700 font-sans font-black">
            <div className="w-16 h-16 bg-cyan-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-cyan-600/40 font-sans font-black font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-bold">Baseline Discovery Engine v2.1</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none">
            Surgical Point Discovery with Axis Alignment Protection
         </p>
      </footer>
    </div>
  );
}
