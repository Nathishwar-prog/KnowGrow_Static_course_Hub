import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, TrendingUp, Plus, Sigma, Boxes, FlaskConical, BarChart3, Binary } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? val.toFixed(1) : (Math.abs(val) > 1e4 ? val.toExponential(4) : val.toFixed(4));

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
    mean: (a: any, axis: any = null) => {
        if (axis === null) {
            const flat = a.flat(Infinity);
            return flat.reduce((acc: number, v: number) => acc + v, 0) / flat.length;
        }
        if (axis === 0) { // Column-wise
            const cols = a[0].length;
            return Array.from({ length: cols }, (_, c) => a.reduce((sum: number, r: any[]) => sum + r[c], 0) / a.length);
        }
        if (axis === 1) { // Row-wise
            return a.map((row: any[]) => row.reduce((sum: number, v: number) => sum + v, 0) / row.length);
        }
    },
    var: (a: any, axis: any = null, ddof: number = 0) => {
        const computeVar = (vals: number[]) => {
            const mean = vals.reduce((acc, v) => acc + v, 0) / vals.length;
            const deviations = vals.map(v => Math.pow(v - mean, 2));
            return deviations.reduce((acc, v) => acc + v, 0) / (vals.length - ddof);
        };

        if (axis === null) {
            return computeVar(a.flat(Infinity));
        }

        if (axis === 0) { // Columns
            const cols = a[0].length;
            return Array.from({ length: cols }, (_, c) => {
                const colVals = a.map((r: any[]) => r[c]);
                return computeVar(colVals);
            });
        }
        if (axis === 1) { // Rows
            return a.map((row: any[]) => computeVar(row));
        }
    },
    std: (a: any, axis: any = null, ddof: number = 0) => {
        const variance = NumpySandbox.np.var(a, axis, ddof);
        if (Array.isArray(variance)) return variance.map(v => Math.sqrt(v));
        return Math.sqrt(variance);
    },
    nanvar: (a: any) => NumpySandbox.np.var(a.flat(Infinity).filter((v: any) => !isNaN(v))),
    random: {
        normal: (loc: number, scale: number, size: number) => Array.from({ length: size }, () => loc + (Math.random() * scale * 2 - scale)) // Mock
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
       .replace(/np\.var\((.+?),\s*axis=(.+?),\s*ddof=(.+?)\)/g, 'np.var($1, $2, $3)')
       .replace(/np\.var\((.+?),\s*axis=(.+?)\)/g, 'np.var($1, $2)')
       .replace(/np\.var\((.+?),\s*ddof=(.+?)\)/g, 'np.var($1, null, $2)')
       .replace(/np\.var\((.+?)\)/g, 'np.var($1)')
       .replace(/np\.std\((.+?)\)/g, 'np.std($1)')
       .replace(/np\.mean\((.+?)\)/g, 'np.mean($1)')
       .replace(/np\.nanvar\((.+?)\)/g, 'np.nanvar($1)')
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

export default function NpVar() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8 font-sans">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5 font-sans font-black`}>
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30 font-sans font-black',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30 font-sans font-black',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30 font-sans font-black',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30 font-sans font-black',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30 font-sans font-black',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30 font-sans font-black',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30 font-sans font-black',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl font-sans font-black">
          <div className="flex items-center gap-4 text-left font-sans font-black">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans font-black`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">Dispersion Resolution Terminal</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans font-black">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none font-sans font-black`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'PROBING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans font-black">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800 font-sans font-black">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-indigo-300 outline-none resize-none selection:bg-indigo-500/20 font-sans font-black"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans font-black">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-white font-sans font-black">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans font-black"></div> Average squared Deviation Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Variance resolution pending...'}
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
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px] font-sans"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left font-sans font-black">
          <div className="flex-1 font-sans font-black">
            <div className="flex items-center gap-6 mb-10 font-sans font-black">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent font-sans"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black font-sans">Vectorized Variance Probing</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left font-sans font-black">
               np.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic font-sans font-black font-sans">var</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold">
               Calculate the <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Data Spread</span> pulse. Master the primary engineering tool for quantifying inconsistency, risk indexing, and feature normalization with vectorized C-level precision.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans font-black">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <Sigma size={24} className="text-indigo-400 font-sans font-black" /> Sigma Squared Resolver
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left font-sans font-black">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left font-sans font-black">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans font-black">
              {[
                { id: 'concept', label: '1. Variance Theory', icon: BookOpen },
                { id: 'math', label: '2. The σ² Pipeline', icon: Activity },
                { id: 'axis', label: '3. multi-axis Dispersion', icon: Scaling },
                { id: 'stats', label: '4. Population vs Sample', icon: Binary },
                { id: 'relate', label: '5. Var vs Std Relation', icon: TrendingUp },
                { id: 'pro', label: '6. Senior Variance Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic font-sans font-black font-sans font-black font-sans font-black font-sans' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans font-black font-sans font-black font-sans font-black'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold font-sans font-black">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans font-black">
                  <BarChart3 size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Statistical Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  Variance ($\sigma^2$) measures the average of the <span className="text-indigo-300 font-black font-sans italic">Squared Deviations</span> from the mean. A larger variance reveals highly inconsistent data points.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <Scaling size={20} /> Stability Monitor
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold font-sans font-black font-sans font-black">
                  While <code className="text-indigo-300 font-black font-sans italic font-sans font-black">std</code> is in original units, <code className="text-indigo-300 font-black font-sans italic font-sans font-black font-sans font-black font-sans font-black">var</code> is in squared units—critical for mathematical consistency in loss functions.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                  <AlertTriangle size={20} /> Sample Bias ⚠️
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                  Always use <code className="text-rose-300 font-bold font-sans font-black font-sans italic">ddof=1</code> (Bessel's Correction) when calculating variance for a <span className="text-rose-300 font-bold font-sans font-black underline italic font-sans">Sample</span> instead of the entire population.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans font-black font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans font-black font-sans font-black">
                <section>
                   <SectionHeader icon={Info} title="1. Dispersion Dynamics Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans font-black font-sans font-black"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                         <span className="text-indigo-400 font-bold italic font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans">Spread Resolution</span> is the mathematical act of quantifying inconsistency. In NumPy, this power feature is used for risk assessment in finance, detecting noise in images, and performing feature scaling in ML pipelines.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Spread", desc: "Data inconsistency", icon: "📊" },
                           { label: "Risk", desc: "Volatility index", icon: "📉" },
                           { label: "Noise", desc: "Intensity variance", icon: "🔉" },
                           { label: "Scale", desc: "Feature normalization", icon: "⚖️" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group mb-16 text-left font-sans font-black">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black font-sans font-black font-sans font-black">
                         <Sigma className="text-indigo-500 font-sans font-black font-sans font-black font-sans font-black font-sans font-black" size={28} /> Squared Deviation Resolve
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                         Small Variance = Tightly packed cluster. Large Variance = Highly inconsistent data points scattered across the domain.
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'math' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black">
                <section>
                   <SectionHeader icon={Activity} title="2. The σ² Calculation Pipeline" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                      Execute the 4-step surgical resolve: <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">Mean $\rightarrow$ Deviation $\rightarrow$ Square $\rightarrow$ Average</span>.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Variance Resolve Terminal"
                    description="Executing np.var on a linear sequence to resolve squared dispersion."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40, 50])\n\n# Vectorized Variance Calculation\nresult = np.var(arr)\n\nprint("Determined Sigma Squared (σ²):")\nprint(result)`} 
                    output="Determined Sigma Squared (σ²):\n200.0000" 
                  />
                  
                  <div className="mt-12 p-10 bg-slate-900 border border-slate-800 rounded-[3rem] text-left">
                     <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6 font-sans">Mathematical Step Resolver</h5>
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-[10px] text-indigo-300 font-sans">
                        <div className="p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-xl font-sans">1. Mean: 30</div>
                        <div className="p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-xl font-sans">2. Deviations: [-20...20]</div>
                        <div className="p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-xl font-sans font-bold">3. Squares: [400, 100, 0, 100, 400]</div>
                        <div className="p-4 bg-indigo-500/10 border border-indigo-400/20 rounded-xl font-sans font-bold italic">4. Average: 200</div>
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'axis' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800 font-sans font-black">
                <section>
                   <SectionHeader icon={Scaling} title="3. multi-axis Dispersion Resolve" color="violet" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                      Compute dispersion along specific <span className="text-violet-400 font-bold font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">Dimensional Axes</span>. Axis 0 resolves column-wise variance, while Axis 1 resolves row-level stability.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="multi-axis Sigma Sandbox"
                    description="Executing column-wise vs row-wise variance on a 2x3 matrix."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Column-wise Resolve (Axis 0)\ncol_var = np.var(arr, axis=0)\n\n# Row-wise Resolve (Axis 1)\nrow_var = np.var(arr, axis=1)\n\nprint("Column σ²:", col_var)\nprint("Row σ²:", row_var)`} 
                    output="Column σ²: [2.25 2.25 2.25]\nRow σ²: [0.6667 0.6667]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black">
                <section>
                   <SectionHeader icon={Binary} title="4. Degree of Freedom Shielding" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black font-sans font-black">
                     Manage explosive <span className="text-rose-400 font-black underline decoration-rose-500/30 underline-offset-8">Sample Bias</span> by resolving variance with Bessel's Correction ($ddof=1$).
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Bessel Correction Terminal"
                    description="Observing the variance shift between population and sample-bias modeling."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40, 50])\n\n# Default Population Variance\npop_var = np.var(arr)\n\n# Corrected Sample Variance\nsample_var = np.var(arr, ddof=1)\n\nprint("Population σ² (ddof=0):", pop_var)\nprint("Sample σ² (ddof=1):", sample_var)`} 
                    output="Population σ² (ddof=0): 200.0\nSample σ² (ddof=1): 250.0" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'relate' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black font-sans font-black">
                <section>
                   <SectionHeader icon={TrendingUp} title="5. Var ↔ Std Geometric Relation" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black">
                     Resolve the mathematical bridge: <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">Variance is the Square of Standard Deviation</span>.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Trig Relation Terminal"
                    description="Verifying the std == sqrt(var) mathematical equality."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30, 40, 50])\n\nvariance = np.var(arr)\nstd_dev = np.std(arr)\n\nprint("Resolved Variance:", variance)\nprint("Sqrt of Variance:", np.sqrt(variance))\nprint("Resolved Std Dev:", std_dev)`} 
                    output="Resolved Variance: 200.0\nSqrt of Variance: 14.1421\nResolved Std Dev: 14.1421" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                <section>
                   <SectionHeader icon={Zap} title="6. Senior Variance Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black">
                            <Layers size={16} /> Feature Normalizer
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black">
                            Scale your data correctly for ML models using: <code className="text-cyan-300">(data - mean) / sqrt(var)</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                            <FlaskConical size={16} /> Masked Shield
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                            Safely bypass NaNs in your coordinate stream using: <code className="text-emerald-300">np.nanvar(data)</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold font-sans font-black font-sans font-black">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Sigma size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                            ⚡ Coordinate <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">Spread hub</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                             Challenge: Resolve the <span className="text-white font-bold italic font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">Sample Squared Sigma</span> and compare with std for the dirty coordinate set!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Dataset Spread Lab"
                           code={`import numpy as np\n\narr = np.array([5, 15, 25, 35, 45])\n\n# 1. Resolve Sample Variance\nvar_res = np.var(arr, ddof=1)\n\n# 2. Resolve Standard Deviation\nstd_res = np.std(arr, ddof=1)\n\nprint("Determined Sample σ²:", var_res)\nprint("Determined Sample σ:", std_res)\nprint("Verification (sqrt(var)):", np.sqrt(var_res))`} 
                           output="Determined Sample σ²: 250.0\nDetermined Sample σ: 15.8114\nVerification (sqrt(var)): 15.8114" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">Spread Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
            High-Performance Dataset Variance Resolution with population/sample bias modeling and squared-unit analysis
         </p>
      </footer>
    </div>
  );
}
