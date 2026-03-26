import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Volume2, ArrowRight } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (val === Infinity) return 'inf';
    if (val === -Infinity) return '-inf';
    if (Number.isNaN(val)) return 'nan';
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
    log10: (x: any) => Array.isArray(x) ? x.map(v => v <= 0 ? (v === 0 ? -Infinity : NaN) : Math.log10(v)) : (x <= 0 ? (x === 0 ? -Infinity : NaN) : Math.log10(x)),
    log: (x: any) => Array.isArray(x) ? x.map(v => v <= 0 ? (v === 0 ? -Infinity : NaN) : Math.log(v)) : (x <= 0 ? (x === 0 ? -Infinity : NaN) : Math.log(x)),
    log2: (x: any) => Array.isArray(x) ? x.map(v => v <= 0 ? (v === 0 ? -Infinity : NaN) : Math.log2(v)) : (x <= 0 ? (x === 0 ? -Infinity : NaN) : Math.log2(x)),
    clip: (arr: any, min: number, max: number | null) => {
        const c = (v: number) => Math.min(Math.max(v, min), max === null ? v : max);
        return Array.isArray(arr) ? arr.map(c) : c(arr);
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
       .replace(/np\.log10\((.+?)\)/g, 'np.log10($1)')
       .replace(/np\.clip\((.+?),\s*(.+?),\s*(.+?)\)/g, 'np.clip($1, $2, $3)')
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

export default function NpLog10() {
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
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4 text-left">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Scientific Log Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'RESOLVING LOG...' : 'RUN MODULE'}
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
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Magnitude Shift
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Log-10 translation pending...'}
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em]">Base-10 Scientific Scale</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">log10</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left">
               Calculate the <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8 font-sans">Logarithm Base 10</span> for each element. The standard for scientific measurements, decibel systems, and logarithmic domain plotting.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Volume2 size={24} className="text-indigo-400" /> Domain Compression
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
                { id: 'concept', label: '1. Power of 10 Theory', icon: BookOpen },
                { id: 'rules', label: '2. Positive Domain', icon: Layout },
                { id: 'scientific', label: '3. DB & PH Scale', icon: Volume2 },
                { id: 'comp', label: '4. Log Comparison', icon: Scaling },
                { id: 'pro', label: '5. Senior Guards', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 font-sans font-bold'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700">
                  <Scaling size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4">
                  <Lightbulb size={20} /> Solver Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  np.log10() answers: "To what power must 10 be raised to get x?" converting large ranges like 1000 into a compact value of 3.
               </p>
            </div>
            
            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Activity size={20} /> Matrix Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  Fully <span className="text-blue-300 font-black italic underline decoration-blue-500/30 underline-offset-4 font-sans">Vectorized</span>. It executes scientific scaling across entire data matrices with zero Python loop overhead.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                  <AlertTriangle size={20} /> Domain Guard
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Input must be strictly <code className="text-rose-300 font-bold">&gt; 0</code>. log10(0) returns <code className="text-rose-300">-inf</code>, while negative values return <code className="text-rose-300">NaN</code>!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Base-10 Fundamental Scale" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left font-sans text-left">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans">
                         <span className="text-indigo-400 font-bold italic font-sans italic font-sans font-sans">np.log10()</span> compresses massive numbers into a compact, human-interpretable scale. It is the primary tool for <span className="text-indigo-400 font-bold italic underline decoration-indigo-500/20 underline-offset-8 font-sans">log-scale graphing</span> and scientific metrics.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "pH Scale", desc: "Chemical acidity checks", icon: "🧪" },
                           { label: "Decibels", desc: "Sound power levels", icon: "🔊" },
                           { label: "Richter", desc: "Earthquake magnitude", icon: "🗺️" },
                           { label: "Graphs", desc: "Plotting wide ranges", icon: "📈" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans text-left">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="indigo"
                    title="Power of Ten Logic"
                    description="Standard base-10 calculation for scalar and vector inputs."
                    code={`import numpy as np\n\n# log10(1)=0, log10(10)=1, log10(100)=2\narr = np.array([1, 10, 100, 1000])\n\nresult = np.log10(arr)\n\nprint("Base-10 Translation Result:")\nprint(result)`} 
                    output="Base-10 Translation Result:\n[0. 1. 2. 3.]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'rules' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. The Safety Domain Filter" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans">
                      Non-positive values are <span className="text-rose-400 font-black underline decoration-rose-500/30 underline-offset-8">strictly illegal</span>. Handling these edge cases is vital for stable numerical pipelines.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Domain Boundary Checks"
                    description="Observing NaN and -inf behavior for invalid inputs."
                    code={`import numpy as np\n\n# 1 is safe, 0 is -inf, -10 is NaN\narr = np.array([1, 0, -10])\n\nresult = np.log10(arr)\n\nprint("Boundary Audit Result:")\nprint(result)`} 
                    output="Boundary Audit Result:\n[ 0. -inf  nan]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'scientific' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Volume2} title="3. Scientific Scale Implementation" color="emerald" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans text-left">
                      Use <code className="text-emerald-400 font-bold">np.log10()</code> for industrial measurements like sound intensity. The decibel scale represents power ratios in log base-10 format.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Audio Intensity (DB Scale)"
                    description="Calculating decibel levels from raw sound power."
                    code={`import numpy as np\n\nintensity = np.array([1, 10, 100, 1000])\n\n# Equation: 10 * log10(Intensity)\ndb = 10 * np.log10(intensity)\n\nprint("Decibel (dB) Values:")\nprint(db)`} 
                    output="Decibel (dB) Values:\n[ 0. 10. 20. 30.]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'comp' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Scaling} title="4. Logarithmic Comparison Matrix" color="violet" />
                   
                   <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 mb-16 text-left font-sans">
                      <h5 className="text-xs font-black text-violet-400 uppercase tracking-widest mb-8 italic font-sans tracking-[0.2em] border-b border-violet-500/10 pb-4">Specialized Log Functions</h5>
                      <div className="grid grid-cols-3 gap-8 text-left font-sans">
                         <div className="space-y-4">
                            <span className="text-[10px] text-slate-500 uppercase mb-2 block font-sans font-black tracking-widest leading-none">np.log()</span>
                            <div className="text-violet-300 text-xs font-black shadow-none border-none">Base e (ln)</div>
                            <div className="text-[10px] text-slate-500 font-bold italic">ML & Calculus</div>
                         </div>
                         <div className="space-y-4 border-l border-slate-800 pl-8">
                            <span className="text-[10px] text-slate-500 uppercase mb-2 block font-sans font-black tracking-widest leading-none">np.log10()</span>
                            <div className="text-violet-300 text-xs font-black">Base 10</div>
                            <div className="text-[10px] text-slate-500 font-bold italic">Science & Scales</div>
                         </div>
                         <div className="space-y-4 border-l border-slate-800 pl-8">
                            <span className="text-[10px] text-slate-500 uppercase mb-2 block font-sans font-black tracking-widest leading-none">np.log2()</span>
                            <div className="text-violet-300 text-xs font-black">Base 2</div>
                            <div className="text-[10px] text-slate-500 font-bold italic">Binary & Bits</div>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Preprocessing Guards" color="amber" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4">
                            <Scaling size={16} /> Domain Clipping
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans text-left">
                            Force values to stay positive to prevent Inf/NaN crashes in scientific pipelines.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-cyan-300 text-[10px] font-sans">np.log10(np.clip(arr, 1e-10, None))</code>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-amber-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-amber-500/10 pb-4">
                            <Layers size={16} /> Safe Offset (+1)
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans text-left">
                            Common trick to normalize data that contains zeros.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-amber-300 text-[10px] font-sans">scaled = np.log10(arr + 1)</code>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RefreshCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans">
                            🧪 Magnitude <span className="text-blue-400 italic font-light font-sans italic font-sans font-sans font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans text-left">
                             Challenge: Create an array demonstrating <span className="text-white font-bold italic font-sans font-sans font-sans">pH acidity logic</span> using the base-10 solver!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Scientific Audit Mission"
                           code={`import numpy as np\n\n# pH = -log10[H+]\nconcentration = np.array([1e-7, 1e-1, 1e-14])\nph = -np.log10(concentration)\n\nprint("Computed pH Scale:")\nprint(ph)`} 
                           output="Computed pH Scale:\n[ 7.  1. 14.]" 
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
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black">KG</div>
            <div className="font-sans">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Base-10 Translation v1.5</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none">
            Common Logarithm Scaling for Scientific Domains
         </p>
      </footer>
    </div>
  );
}
