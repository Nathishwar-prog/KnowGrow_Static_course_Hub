import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, TrendingUp, Binary, Ruler, Boxes, FlaskConical } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') {
        if (isNaN(val)) return 'nan';
        return Number.isInteger(val) ? val.toFixed(1) : val.toFixed(4);
    }
    
    // Complex number mock
    if (val && val._isComplex) {
       return `${val.real.toFixed(1)}${val.imag >= 0 ? '+' : ''}${val.imag.toFixed(1)}j`;
    }

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
    linspace: (start: number, stop: number, num: number) => {
        const step = (stop - start) / (num - 1);
        return Array.from({ length: num }, (_, i) => start + (step * i));
    },
    sqrt: (x: any) => {
        if (valIsComplex(x)) {
            // Complex sqrt (simplified mock)
            if (Array.isArray(x)) return x.map(v => v < 0 ? { _isComplex: true, real: 0, imag: Math.sqrt(Math.abs(v)) } : Math.sqrt(v));
            return x < 0 ? { _isComplex: true, real: 0, imag: Math.sqrt(Math.abs(x)) } : Math.sqrt(x);
        }
        if (Array.isArray(x)) return x.map(v => v < 0 ? NaN : Math.sqrt(v));
        return x < 0 ? NaN : Math.sqrt(x);
    },
    abs: (x: any) => Array.isArray(x) ? x.map(Math.abs) : Math.abs(x),
    arange: (start: number, stop?: number) => {
        const s = stop === undefined ? 0 : start;
        const e = stop === undefined ? start : stop;
        return Array.from({ length: e - s }, (_, i) => s + i);
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
       .replace(/import math/g, '')
       .replace(/arr\.astype\(complex\)/g, 'NumpySandbox._toComplex(arr)')
       .replace(/plt\..+\(.*\)/g, '')
       .replace(/np\.sqrt\((.+?),\s*where=(.+?)\)/g, 'np.sqrt($1)') // Simplified mock for 'where'
       .replace(/np\.sqrt\((.+?)\)/g, 'np.sqrt($1)')
       .replace(/np\.abs\((.+?)\)/g, 'np.abs($1)')
       .replace(/np\.arange\((.+?)\)/g, 'np.arange($1)')
       .replace(/np\.linspace\((.+?)\)/g, 'np.linspace($1)')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const g = { complexRoot: false };
      const codeToRun = `
        const np = NumpySandbox.np;
        const print = customPrint;
        let valIsComplex = (arr) => g.complexRoot;
        ${sanitizedCode}
      `;
      // Check for complex conversion in code to toggle behavior
      if (code.includes('complex')) {
          (NumpySandbox as any)._complexToggle = true;
      } else {
          (NumpySandbox as any)._complexToggle = false;
      }

      const executor = new Function('NumpySandbox', 'customPrint', 'valIsComplex', 'g', codeToRun);
      executor(NumpySandbox, customPrint, (arr: any) => (NumpySandbox as any)._complexToggle, g);
      return outputBuffer.join('\n');
    } catch (e: any) {
      return `Error: ${e.message}`;
    }
  },
  _toComplex: (arr: any) => {
    (NumpySandbox as any)._complexToggle = true;
    return arr;
  }
};

// Global-ish helper for sandbox function scope
const valIsComplex = (x: any) => false;

export default function NpSqrt() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left font-sans font-black">{title}</h2>
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">Square Root Resolution Terminal</span>
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
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20 font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Vectorized Root Result
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Radical resolution pending...'}
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617] font-sans"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left font-sans">
          <div className="flex-1 font-sans">
            <div className="flex items-center gap-6 mb-10 font-sans">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent font-sans"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Vectorized Radical Operations</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">sqrt</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold">
               Calculate the <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">Sub-linear Growth</span> of your data. Master the primary mathematical engine for Euclidean distances, ML normalization, and physics formulas with high-performance C-level precision.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black font-sans">
               <TrendingUp size={24} className="text-blue-400 font-sans" /> Radical Resolve
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
                { id: 'concept', label: '1. Square Root Theory', icon: BookOpen },
                { id: '1d', label: '2. Vectorized Radical', icon: Binary },
                { id: 'negative', label: '3. Negative & Complex', icon: Scaling },
                { id: 'physics', label: '4. Euclidean Physics', icon: Activity },
                { id: 'pro', label: '5. Senior Root Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95 text-left font-sans italic font-sans font-black font-sans font-black' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans font-black font-sans font-black'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-110 transition-transform duration-700 font-sans font-black">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Senior Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold font-sans">
                  The square root of <code className="text-blue-300 font-black font-sans italic">x</code> is a value <code className="text-blue-300 font-black font-sans italic font-sans">y</code> such that <code className="text-blue-300 font-black font-sans italic font-sans">y² = x</code>. NumPy applies this instantly across entire arrays, yielding a <span className="text-blue-300 font-bold font-sans font-black font-sans">Float</span> output by default.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <Cpu size={20} /> C-Level Speed
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold font-sans">
                  NumPy's <span className="text-indigo-300 font-black font-sans font-bold font-sans">sqrt()</span> is orders of magnitude faster than Python loops because it executes in optimized C-layer memory blocks.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <AlertTriangle size={20} /> Domain Warning
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans">
                  Calculating the root of a negative value returns <span className="text-rose-300 font-bold font-sans font-black underline italic font-sans">nan</span> (Not a Number) unless you explicitly cast the array to <code className="text-rose-300 font-black font-sans font-black font-sans italic">complex</code>.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left">
                <section>
                   <SectionHeader icon={Info} title="1. Radical Growth Theory" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full font-sans font-black"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans">
                         <span className="text-blue-400 font-bold italic font-sans font-bold font-sans">Radical Resolve</span> is the process of reversing exponentiation. In NumPy, this is used to normalize feature space, calculate physical distances, and resolve loss functions in deep learning.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Distance", desc: "Euclidean metrics", icon: "📐" },
                           { label: "Normal", desc: "Feature scaling", icon: "⚖️" },
                           { label: "Physics", desc: "Velocity vectors", icon: "🚀" },
                           { label: "Loss", desc: "Error resolution", icon: "📉" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20 font-sans font-black font-sans font-black font-sans">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-blue-950/20 border border-blue-500/30 rounded-[3rem] group mb-16 text-left">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <Ruler className="text-blue-500 font-sans font-black" size={28} /> Scalar vs Vectorized Root
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic">
                         NumPy applies the radical instantly: <code className="text-blue-300 font-black font-sans italic font-sans">np.sqrt(16)</code> yields 4.0, while <code className="text-blue-300 font-black font-sans italic font-sans">np.sqrt([1, 4])</code> yields [1.0, 2.0] without any Python loops.
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === '1d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Binary} title="2. Vectorized Radical Resolve" color="blue" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      Compute the square root of <span className="text-blue-400 font-black underline decoration-blue-500/30 underline-offset-8 font-sans font-black">Every Coordinate</span> in your array with a single atomic call.
                   </p>

                   <CodeExample 
                    color="blue"
                    title="Radical Resolve Sandbox"
                    description="Executing square root on a perfect-square vector."
                    code={`import numpy as np\n\narr = np.array([1, 4, 9, 16, 25])\n\n# Vectorized square root\nresult = np.sqrt(arr)\n\nprint("Determined Radical Vector:")\nprint(result)`} 
                    output="Determined Radical Vector:\n[1.0 2.0 3.0 4.0 5.0]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'negative' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. Domain Errors & Complex Roots" color="rose" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans font-black">
                      Handle <span className="text-rose-400 font-bold font-sans font-black italic">Negative Numbers</span> by either returning NaN or switching to the Complex numbering system.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Complex Resolve Terminal"
                    description="Executing sqrt on negative values to observe NaN and Complex results."
                    code={`import numpy as np\n\n# Negative value vs positive\narr = np.array([4, -9, 16])\n\n# Default behavior (NaN)\nprint("Default (NaN):", np.sqrt(arr))\n\n# Complex behavior (j-component)\ncomplex_res = np.sqrt(arr.astype(complex))\nprint("\\nComplex Vector:", complex_res)`} 
                    output="Default (NaN): [2.0 nan 4.0]\n\nComplex Vector: [2.0+0.0j 0.0+3.0j 4.0+0.0j]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'physics' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="4. Euclidean Physics Lab" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                     Calculate <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">Spatial Distances</span> by resolving the root of squared coordinate sums.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Vector Magnitude Terminal"
                    description="Executing the Pythagorean theorem using vectorized math."
                    code={`import numpy as np\n\nx = 3\ny = 4\n\n# Distance = sqrt(x^2 + y^2)\ndistance = np.sqrt(x**2 + y**2)\n\nprint("Determined Magnitude:", distance)`} 
                    output="Determined Magnitude: 5.0" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Radical Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black font-sans font-black">
                            <FlaskConical size={16} /> Safe Resolver
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Always wrap negative-prone data in absolute value: <code className="text-cyan-300">np.sqrt(np.abs(arr))</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black">
                            <Boxes size={16} /> Broadcast Logic
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Sqrt supports full broadcasting across tensors of differing ranks.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-blue-800/40 to-indigo-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <TrendingUp size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black">
                            ⚡ Coordinate <span className="text-blue-400 italic font-light font-sans font-bold font-sans font-black font-sans font-black">Resolve hub</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans">Surgical Radical probe</span> for a 5-element dataset!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Dataset Radical Lab"
                           code={`import numpy as np\n\narr = np.array([10, 20, 30, 40, 50])\n\n# Find square roots\nroots = np.sqrt(arr)\n\nprint("Determined Dataset Roots:")\nprint(roots)`} 
                           output="Determined Dataset Roots:\n[3.1623 4.4721 5.4772 6.3246 7.0711]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40 font-sans font-black font-sans font-black font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black font-sans font-black font-sans font-black font-sans">Radical Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black">
            High-Performance Square Root resolution with Complex numbering support and Vectorized C-level Precision
         </p>
      </footer>
    </div>
  );
}
