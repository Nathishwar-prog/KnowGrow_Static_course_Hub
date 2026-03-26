import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Percent, Search, ArrowRight } from 'lucide-react';

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
    percentile: (a: any, q: any, params: any = {}) => {
        const axis = params.axis !== undefined ? params.axis : null;

        const calculateP = (arr: number[], p: number) => {
            const sorted = [...arr].sort((x, y) => x - y);
            if (sorted.length === 0) return NaN;
            const index = (p / 100) * (sorted.length - 1);
            const lower = Math.floor(index);
            const upper = Math.ceil(index);
            const weight = index - lower;
            return sorted[lower] * (1 - weight) + sorted[upper] * weight;
        };

        const processRaw = (arr: any) => {
            if (Array.isArray(q)) return q.map(percent => calculateP(arr, percent));
            return calculateP(arr, q);
        };

        if (!Array.isArray(a[0])) { // 1D
            return processRaw(a);
        }
        
        if (axis === null) {
            return processRaw(a.flat());
        }
        
        if (axis === 0) { // Column-wise
            const cols = a[0].length;
            const res = [];
            for (let j = 0; j < cols; j++) {
                const colArr = a.map((row: any) => row[j]);
                res.push(processRaw(colArr));
            }
            return res;
        }
        
        if (axis === 1) { // Row-wise
            return a.map((row: any) => processRaw(row));
        }
        return "Error: Axis mismatch";
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
       .replace(/np\.percentile\((.+?),\s*(.+?),\s*axis=(.+?)\)/g, 'np.percentile($1, $2, {axis: $3})')
       .replace(/np\.percentile\((.+?),\s*(.+?)\)/g, 'np.percentile($1, $2)')
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

export default function NpPercentile() {
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Distribution Resolver Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'CALCULATING...' : 'RUN MODULE'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Percentile Insight
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Statistical distribution resolved pending...'}
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
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans">Statistical Distribution analysis</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">percentile</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic">
               Solve for the <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Distribution Threshold</span>. The foundational metric for outlier detection, performance grading, and understanding what value lies below X% of your numerical landscape.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <Percent size={24} className="text-indigo-400 font-sans" /> Quartile Resolver
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
                { id: 'concept', label: '1. Partitioning Theory', icon: BookOpen },
                { id: 'quartiles', label: '2. Quartile resolution', icon: Scaling },
                { id: 'axes', label: '3. Dimensional spread', icon: Layout },
                { id: 'outliers', label: '4. The Outlier Guard', icon: Search },
                { id: 'pro', label: '5. Senior Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner font-sans font-bold text-left">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Physics Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  The median is simply the <span className="text-indigo-300 font-black font-sans">50th percentile</span>. Percentiles provide a more granular view of data spread than the mean alone.
               </p>
            </div>
            
            <div className="mt-8 bg-violet-500/5 border border-violet-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-violet-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black">
                  <Scaling size={20} /> IQR Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-bold font-sans">
                  The Interquartile Range (IQR) = <span className="text-violet-300 font-black font-sans italic font-sans font-bold">75th - 25th percentile</span>. This range contains the central 50% of your data.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black">
                  <AlertTriangle size={20} /> Data Hazard
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left font-sans font-black">
                  Percentiles require data to be <span className="text-rose-300 font-bold font-sans font-black">internally sorted</span>. NumPy handles this efficiently, but remember it returns floats even for integer arrays!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Distribution Partitioning Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold">
                         <span className="text-indigo-400 font-bold italic font-sans italic">np.percentile()</span> extracts the "cutting point" of a distribution. A 90th percentile means 90% of your data points are equal to or lower than the result.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Grading", desc: "Performance thresholds", icon: "🎓" },
                           { label: "Salaries", desc: "Income distribution", icon: "💰" },
                           { label: "Cleaning", desc: "Outlier detection", icon: "🧹" },
                           { label: "Scaling", desc: "Robust normalization", icon: "⚖️" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="indigo"
                    title="50th percentile (Median)"
                    description="Confirming that the 50th percentile matches the median value."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40, 50])\n\n# The middle point (30.0)\nresult = np.percentile(arr, 50)\n\nprint("Determined 50th Percentile:")\nprint(result)`} 
                    output="Determined 50th Percentile:\n30.0" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'quartiles' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Scaling} title="2. Quartile Map resolution" color="violet" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold">
                      Extract the full snapshot of your data spread by passing <span className="text-violet-400 font-black underline decoration-violet-500/30 underline-offset-8">an array of values</span> [25, 50, 75].
                   </p>

                   <CodeExample 
                    color="violet"
                    title="Quartile resolver Hub"
                    description="Fetching 25th, 50th, and 75th percentiles simultaneously."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40, 50])\n\n# Fetches Lower, Median, Upper quartiles\nquartiles = np.percentile(arr, [25, 50, 75])\n\nprint("Array Quartiles:")\nprint(quartiles)`} 
                    output="Array Quartiles:\n[20. 30. 40.]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'axes' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Layout} title="3. Dimensional Spread analysis" color="emerald" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold">
                      Apply distribution logic across matrix rows or columns. Essential for comparing thresholds across different categories or time-steps.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Matrix Percentile Scan"
                    description="Executing dimensional searches on a 2×3 dataset."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Row-wise 50th percentile (Median)\nper_row = np.percentile(arr, 50, axis=1)\n\nprint("Row-wise Distribution Midpoints:")\nprint(per_row)`} 
                    output="Row-wise Distribution Midpoints:\n[2. 5.]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'outliers' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Search} title="4. The Outlier Boundary guard" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold">
                     Professionals use percentiles to define <span className="text-rose-400 font-black underline decoration-rose-500/30 underline-offset-8 font-sans font-bold text-left italic font-sans font-bold">Threshold Boundaries</span>. Anything outside these percentiles is flagged as an outlier.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Top 10% Threshold Hub"
                    description="Identifying the mark that separates the top 10% of students."
                    code={`import numpy as np\n\nmarks = np.array([40, 50, 60, 70, 80, 90])\n\n# Mark below which 90% students fall\nthreshold = np.percentile(marks, 90)\n\nprint("Top Performance Threshold (90th percentile):")\nprint(threshold)`} 
                    output="Top Performance Threshold (90th percentile):\n85.0" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Statistical Protocols" color="amber" />
                   
                   <ul className="space-y-8 mb-16 text-left">
                      {[
                        { tip: "IQR Detection", desc: "Calculate Q3 - Q1 to define the Interquartile Range for robust spread analysis.", icon: Scaling },
                        { tip: "Extreme Filtering", desc: "Flag outliers using 1.5 * IQR bounds derived from percentiles.", icon: Search },
                        { tip: "Bulk Evaluation", icon: Activity, desc: "Pass [10, 90] to instantly get bottom and top performance tails." }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-8 group">
                           <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
                              <item.icon size={22} />
                           </div>
                           <div className="text-left font-sans font-bold font-sans">
                              <h5 className="text-sm font-black text-white uppercase tracking-widest mb-2 font-sans font-black">{item.tip}</h5>
                              <p className="text-xs text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
                           </div>
                        </li>
                      ))}
                   </ul>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-violet-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Percent size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-sans font-black">
                            🧪 Distribution <span className="text-indigo-400 italic font-light font-sans font-bold font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left">
                             Challenge: Design an <span className="text-white font-bold italic font-sans font-bold font-sans">IQR Audit Mission</span> by extracting 25th and 75th percentiles!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Surgical Spread Mission"
                           code={`import numpy as np\n\narr = np.array([10, 20, 30, 40, 50, 100])\n\n# Q1 (25th) and Q3 (75th)\nquartiles = np.percentile(arr, [25, 75])\niqr = quartiles[1] - quartiles[0]\n\nprint("Interquartile Range resolved:")\nprint(iqr)`} 
                           output="Interquartile Range resolved:\n22.5" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black">Percentile Resolver v3.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic">
            Surgical Partition Resolution with Dimensional Spread Analysis
         </p>
      </footer>
    </div>
  );
}
