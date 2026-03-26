import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, MoveHorizontal, ArrowRight, CircleDashed } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (val === Infinity) return 'inf';
    if (val === -Infinity) return '-inf';
    if (Number.isNaN(val)) return 'nan';
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(4);

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
    log: (x: any) => Array.isArray(x) ? x.map(v => v <= 0 ? (v === 0 ? -Infinity : NaN) : Math.log(v)) : (x <= 0 ? (x === 0 ? -Infinity : NaN) : Math.log(x)),
    log10: (x: any) => Array.isArray(x) ? x.map(v => v <= 0 ? (v === 0 ? -Infinity : NaN) : Math.log10(v)) : (x <= 0 ? (x === 0 ? -Infinity : NaN) : Math.log10(x)),
    log2: (x: any) => Array.isArray(x) ? x.map(v => v <= 0 ? (v === 0 ? -Infinity : NaN) : Math.log2(v)) : (x <= 0 ? (x === 0 ? -Infinity : NaN) : Math.log2(x)),
    log1p: (x: any) => Array.isArray(x) ? x.map(v => Math.log1p(v)) : Math.log1p(x),
    e: Math.E,
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
       .replace(/np\.e/g, 'Math.E')
       .replace(/np\.log\((.+?)\)/g, 'np.log($1)')
       .replace(/np\.log10\((.+?)\)/g, 'np.log10($1)')
       .replace(/np\.log1p\((.+?)\)/g, 'np.log1p($1)')
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

export default function NpLog() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left">{title}</h2>
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
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4 text-left">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Spectral Log Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
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
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px]">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Compressed Magnitude
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Power-of-E resolution pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/40 selection:text-white font-sans antialiased overflow-x-hidden font-sans">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em]">Exponential Compression</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">log</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left">
               Calculate the <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">Natural Logarithm</span> (Base e) for each array element. The essential transformation for data normalization and stabilizing skewed features in machine learning datasets.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <CircleDashed size={24} className="text-blue-400" /> Magnitude Compression
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
                { id: 'concept', label: '1. Math of Log(e)', icon: BookOpen },
                { id: 'rules', label: '2. Domain Safety', icon: Layout },
                { id: 'bases', label: '3. Multi-Base Logs', icon: Scaling },
                { id: 'ml', label: '4. Feature Scaling', icon: Cpu },
                { id: 'pro', label: '5. Preprocessing', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-110 transition-transform duration-700">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4">
                  <Lightbulb size={20} /> Math Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  The natural logarithm answers: "To what power must <code className="text-blue-300">e</code> be raised to get <code className="text-blue-300">x</code>?" It compresses growth dramatically as values increase.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Scaling size={20} /> Output Integrity
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  np.log() is <span className="text-indigo-300 font-black italic underline decoration-indigo-500/30 underline-offset-4">Vectorized</span>. It executes element-wise instructions at C-speed for fast data compression.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                  <AlertTriangle size={20} /> Boundary Warn
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Input must be <code className="text-rose-300 font-bold">&gt; 0</code>. log(0) returns <code className="text-rose-300">-inf</code> and negatives return <code className="text-rose-300">NaN</code>!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Logarithm Fundamentals" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left font-sans">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl text-left font-sans">
                         <span className="text-blue-400 font-bold italic font-sans italic font-sans">Natural Log (ln)</span> uses the mathematical constant <span className="text-blue-400 font-bold italic underline decoration-blue-500/20 underline-offset-8 font-sans">e ≈ 2.718</span> as its base. It is the inverse operation of <code className="text-blue-400 font-black font-sans italic">np.exp()</code>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "ML Scale", desc: "Normalize skewed data", icon: "🤖" },
                           { label: "Finance", desc: "Log-returns analysis", icon: "💰" },
                           { label: "Growth", desc: "Exponential trends", icon: "📉" },
                           { label: "Digital", desc: "Signal bit-depth", icon: "📶" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans text-left">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="blue"
                    title="Natural Log Traversal"
                    description="Computing log-base-e of common scalars and vectors."
                    code={`import numpy as np\n\n# ln(1)=0, ln(e)=1, ln(10)≈2.3\narr = np.array([1, np.e, 10])\n\nresult = np.log(arr)\n\nprint("Logarithmic result:")\nprint(result)`} 
                    output="Logarithmic result:\n[0.         1.         2.3026]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'rules' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. The Safety Domain" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans">
                      Inputs must be strictly <span className="text-rose-400 font-black underline decoration-rose-500/30 underline-offset-8">greater than zero</span>. Handling non-positive values is critical to prevent NaN (Not a Number) contamination.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Edge Case Detection"
                    description="Observing how np.log() handles zero and negatives."
                    code={`import numpy as np\n\n# log(1)=0, log(0)=-inf, log(-1)=NaN\narr = np.array([1, 0, -1])\n\nresult = np.log(arr)\n\nprint("Invalid Domain Results:")\nprint(result)`} 
                    output="Invalid Domain Results:\n[ 0. -inf  nan]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'bases' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. Multidimensional Base Support" color="emerald" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans">
                      NumPy provides specialized functions for <span className="text-emerald-400 font-bold italic underline decoration-emerald-500/20 underline-offset-8">Digital Science (log2)</span> and <span className="text-emerald-400 font-bold italic underline decoration-emerald-500/20 underline-offset-8 font-sans italic font-sans font-sans font-sans">Standard Magnitude (log10)</span>.
                   </p>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <CodeExample 
                        color="emerald"
                        title="Base 10 Magnitude"
                        description="Excellent for decibel or richter-scale logic."
                        code={`import numpy as np\n\narr = np.array([1, 10, 100])\nresult = np.log10(arr)\n\nprint("log10 logic:")\nprint(result)`} 
                        output="log10 logic:\n[0. 1. 2.]" 
                      />
                      <CodeExample 
                        color="cyan"
                        title="Base 2 Binary Bits"
                        description="Used in information theory and bit-depth."
                        code={`import numpy as np\n\narr = np.array([1, 2, 4, 8])\nresult = np.log2(arr)\n\nprint("log2 bits:")\nprint(result)`} 
                        output="log2 bits:\n[0. 1. 2. 3.]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'ml' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Cpu} title="4. Machine Learning Engineering" color="indigo" />
                   
                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group">
                      <h4 className="text-white font-black text-2xl mb-8 text-left">Large Magnitude Scaling</h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans text-left">
                         Exponentially distributed data causes ML convergence issues. Use <code className="text-indigo-400 font-bold italic font-sans italic">np.log()</code> to compress magnitudes into manageable intervals.
                      </p>

                      <CodeExample 
                        color="indigo"
                        title="Feature Normalization"
                        description="Compressing raw metric data for ML model feeding."
                        code={`import numpy as np\n\ndata = np.array([1, 10, 100, 1000])\n\nlog_data = np.log(data)\n\nprint("Compressed Data Matrix:")\nprint(log_data)`} 
                        output="Compressed Data Matrix:\n[0.         2.3026     4.6052     6.9078]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Industrial Guards" color="amber" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4">
                            <Scaling size={16} /> Precision trick: log1p
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans text-left">
                            More accurate for tiny values. <code className="text-cyan-300">log1p(x)</code> is equivalent to <code className="text-cyan-300">log(1+x)</code>.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-cyan-300 text-[10px] font-sans">np.log1p(arr)</code>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-amber-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-amber-500/10 pb-4">
                            <Activity size={16} /> Domain Clipping
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Force values to stay positive to prevent Inf/NaN crashes in live systems.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-amber-300 text-[10px] font-sans">np.log(np.clip(arr, 1e-10, None))</code>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-blue-800/40 to-indigo-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RefreshCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans">
                            🧪 Distribution <span className="text-blue-400 italic font-light font-sans italic font-sans font-sans font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans text-left">
                             Challenge: Create an array with <span className="text-white font-bold italic font-sans">0 and negative values</span>. Use the <code className="text-blue-400 font-sans">log1p</code> or <code className="text-blue-400 font-sans">clip</code> trick to safely calculate the logarithm!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Safe Scaling Mission"
                           code={`import numpy as np\n\narr = np.array([0, 10, 100])\n\n# Safety Trick: arr + 1\nsafe_log = np.log(arr + 1)\n\nprint("Resolved logs (base e):")\nprint(safe_log)`} 
                           output="Resolved logs (base e):\n[0.         2.3979     4.6151]" 
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
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Magnitude Normalization v2.2</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none">
            Surgical Data Compression with Domain Integrity Guards
         </p>
      </footer>
    </div>
  );
}
