import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Sigma, BarChart } from 'lucide-react';

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
    mean: (a: any, params: any = {}) => {
        const axis = params.axis !== undefined ? params.axis : null;
        const keepdims = params.keepdims || false;

        const sumArr = (arr: any[]) => arr.reduce((s, v) => s + (v || 0), 0);

        if (!Array.isArray(a[0])) { // 1D
            return sumArr(a) / a.length;
        }
        
        if (axis === null) {
            const flat = a.flat();
            return sumArr(flat) / flat.length;
        }
        
        if (axis === 0) { // Column-wise
            const cols = a[0].length;
            const res = new Array(cols).fill(0);
            for (let j = 0; j < cols; j++) {
                let sum = 0;
                for (let i = 0; i < a.length; i++) {
                    sum += (a[i][j] || 0);
                }
                res[j] = sum / a.length;
            }
            return keepdims ? [res] : res;
        }
        
        if (axis === 1) { // Row-wise
            const res = a.map((row: any) => sumArr(row) / row.length);
            return keepdims ? res.map((v: any) => [v]) : res;
        }
        return "Error: Axis mismatch";
    },
    nanmean: (a: any) => {
        const flat = Array.isArray(a[0]) ? a.flat() : a;
        const filtered = flat.filter((v: any) => typeof v === 'number' && !Number.isNaN(v));
        return filtered.length === 0 ? NaN : (filtered.reduce((s: number, v: number) => s + v, 0) / filtered.length);
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
       .replace(/np\.mean\((.+?),\s*axis=(.+?),\s*keepdims=(.+?)\)/g, 'np.mean($1, {axis: $2, keepdims: $3})')
       .replace(/np\.mean\((.+?),\s*axis=(.+?)\)/g, 'np.mean($1, {axis: $2})')
       .replace(/np\.mean\((.+?)\)/g, 'np.mean($1)')
       .replace(/np\.nanmean\((.+?)\)/g, 'np.nanmean($1)')
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

export default function NpMean() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left">{title}</h2>
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Average Logic Terminal'}</span>
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
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px]">
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Global Arithmetic Mean
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-bold">
              {sandboxOutput || output || '// Calculated mean pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-600/40 selection:text-white font-sans antialiased overflow-x-hidden font-sans italic">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans">Central Tendency Analysis</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em]">mean</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans">
               Compute the <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Arithmetic Average</span> across array elements. The core statistic for data normalization, performance auditing, and Stabilizing feature distributions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <Sigma size={24} className="text-indigo-400" /> Statistical Core
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
                { id: 'concept', label: '1. sigma Sum Theory', icon: BookOpen },
                { id: '2d', label: '2. Global Matrix Mean', icon: Layout },
                { id: 'axes', label: '3. Dimensional Averages', icon: Scaling },
                { id: 'nan', label: '4. Handling Nan Mean', icon: Activity },
                { id: 'pro', label: '5. Senior Insights', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left leading-none italic font-sans' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700">
                  <BarChart size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans">
                  <Lightbulb size={20} /> Solver Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans text-left font-bold">
                  The mean is calculated by summing all <span className="text-indigo-300 font-black font-sans">x</span> values and dividing by the total count <span className="text-indigo-300 font-black italic font-sans font-bold font-sans">n</span>. It is the most common measure of central tendency.
               </p>
            </div>
            
            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black">
                  <Sigma size={20} /> Math Model
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold text-left">
                  Mean = <span className="text-blue-300 font-black italic underline decoration-blue-500/30 underline-offset-4 font-sans font-bold font-sans">∑x / n</span>. It stabilizing feature distributions for machine learning normalization.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black">
                  <AlertTriangle size={20} /> Nan Pollution
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left">
                  NumPy's mean() returns <code className="text-rose-300 font-bold font-sans text-left">NaN</code> if your data contains even a single missing value. Use <code className="text-rose-300 font-bold font-sans text-left">np.nanmean()</code> to filter them out!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left">
                <section>
                   <SectionHeader icon={Info} title="1. Arithmetic Mean Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left font-sans">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl font-sans font-bold">
                         The <span className="text-indigo-400 font-bold italic font-sans font-bold font-sans font-sans">np.mean()</span> operator identifies the middle-point (average) of your data, serving as the baseline for variance and standard deviation.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Grading", desc: "Student score averages", icon: "🎓" },
                           { label: "Normalizing", desc: "Z-score calculation", icon: "⚖️" },
                           { label: "Metrics", desc: "SLA response averages", icon: "📊" },
                           { label: "Finance", desc: "Average daily returns", icon: "💰" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans font-bold">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold text-left">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="indigo"
                    title="1D Central Average"
                    description="Computing the mean of a standard numerical vector."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40])\n\n# Sum=100, Count=4 -> 25.0\nresult = np.mean(arr)\n\nprint("Calculated Mean:")\nprint(result)`} 
                    output="Calculated Mean:\n25.0" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. Global Matrix Averaging" color="blue" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold">
                      Default behavior for matrices: NumPy collapses the entire grid into a <span className="text-blue-400 font-black underline decoration-blue-500/30 underline-offset-8">Single Scalar Value</span>.
                   </p>

                   <CodeExample 
                    color="blue"
                    title="Matrix Total Mean"
                    description="Calculating the average of every element in a 2×3 grid."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# (1+2+3+4+5+6)/6 = 3.5\nprint("Global Mean Result:")\nprint(np.mean(arr))`} 
                    output="Global Mean Result:\n3.5" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'axes' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. Dimensional Mean Logic" color="cyan" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-left">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans">
                            <RefreshCw size={16} /> axis = 0 (Vertical)
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Finds the average in <span className="text-cyan-300 font-black font-sans">each column</span>.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-cyan-300 text-[10px] font-sans font-bold">np.mean(arr, axis=0)</code>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4 font-sans">
                            <Layers size={16} /> axis = 1 (Horizontal)
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Finds the average in <span className="text-indigo-300 font-black font-sans">each row</span>.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-indigo-300 text-[10px] font-sans font-bold">np.mean(arr, axis=1)</code>
                      </div>
                   </div>

                   <CodeExample 
                    color="cyan"
                    title="Educational Analytics Lab"
                    description="Calculating average grades per student across multiple subjects."
                    code={`import numpy as np\n\n# Marks for 2 students in 3 subjects\nmarks = np.array([[80, 90, 85], [70, 75, 80]])\n\n# Mean per student (axis=1)\nper_student = np.mean(marks, axis=1)\n\nprint("Avg Score Per Student:")\nprint(per_student)`} 
                    output="Avg Score Per Student:\n[85. 75.]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'nan' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="4. NaN Tolerance Audit" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold">
                     Standard mean is fragile against missing data. <code className="text-rose-400">nanmean()</code> is the industrial guard that <span className="text-white font-black underline decoration-rose-500/30 underline-offset-8 font-sans font-bold">filters NaNs</span> during the sum.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Poison filtering Hub"
                    description="Safely averaging an array containing null/NaN values."
                    code={`import numpy as np\n\n# Standard mean() would return NaN\narr = np.array([10, 20, np.nan, 30])\n\n# nanmean() skips the null poison\nresult = np.nanmean(arr)\n\nprint("Safe Mean Result:")\nprint(result)`} 
                    output="Safe Mean Result:\n20.0" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Efficiency Protocols" color="amber" />
                   
                   <ul className="space-y-8 mb-16 text-left">
                      {[
                        { tip: "Use Median for Skew", desc: "With outliers, the mean is misleading. Use np.median() for robustness.", icon: BarChart },
                        { tip: "Dimension Guard", desc: "Use keepdims=True to maintain matrix rank during reductions.", icon: Scaling },
                        { tip: "High Precision dtype", icon: Activity, desc: "For large sums, use dtype=np.float64 to avoid overflow error." }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-8 group">
                           <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
                              <item.icon size={22} />
                           </div>
                           <div className="text-left font-sans font-bold">
                              <h5 className="text-sm font-black text-white uppercase tracking-widest mb-2 font-sans">{item.tip}</h5>
                              <p className="text-xs text-slate-500 font-semibold leading-relaxed font-sans">{item.desc}</p>
                           </div>
                        </li>
                      ))}
                   </ul>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s] font-sans">
                         <Sigma size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans">
                            🧪 Arithmetic <span className="text-blue-400 italic font-light font-sans font-bold font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans">Column-Wise Average Audit</span> and enforce float64 precision!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Industrial Mean Mission"
                           code={`import numpy as np\n\narr = np.array([[10, 20], [30, 40]])\n\n# Column average with precision flag\nresult = np.mean(arr, axis=0, dtype=np.float64)\n\nprint("Precision Audited Average:")\nprint(result)`} 
                           output="Precision Audited Average:\n[20.0  30.0]" 
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
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700 font-sans font-black">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black">KG</div>
            <div className="font-sans font-bold">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-bold">Central Tendency Engine v2.5</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none">
            Arithmetic Mean Scanning with Precision Overrides
         </p>
      </footer>
    </div>
  );
}
