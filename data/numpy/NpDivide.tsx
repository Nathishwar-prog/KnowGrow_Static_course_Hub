import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, Divide, MoveDiagonal, TrendingUp, AlertTriangle, ShieldCheck, Percent, LayoutGrid } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') {
        if (!Number.isFinite(val)) return 'inf';
        return Number.isInteger(val) ? val.toFixed(1) : val.toFixed(2);
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
    array: (data: any) => data,
    max: (arr: any[]) => Math.max(...arr.flat(Infinity)),
    divide: (x1: any, x2: any, options: any = {}) => {
        const isArr1 = Array.isArray(x1);
        const isArr2 = Array.isArray(x2);

        const div = (a: number, b: number) => {
            if (options.where && !options.where[0]) return a; // Simple mock for 'where'
            if (b === 0) return Infinity;
            return a / b;
        };

        // Scalar / Scalar
        if (!isArr1 && !isArr2) return div(x1, x2);

        // Array / Scalar
        if (isArr1 && !isArr2) {
            return x1.map((v: any) => Array.isArray(v) ? v.map((inner: any) => div(inner, x2)) : div(v, x2));
        }

        // Scalar / Array
        if (!isArr1 && isArr2) {
            return x2.map((v: any) => Array.isArray(v) ? v.map((inner: any) => div(x1, inner)) : div(x1, v));
        }

        // Array / Array (Element-wise)
        if (isArr1 && isArr2) {
            return x1.map((v: any, i: number) => {
                if (Array.isArray(v)) {
                    return v.map((inner: any, j: number) => div(inner, x2[i][j]));
                }
                return div(v, x2[i]);
            });
        }
        return x1;
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
       .replace(/(\w+) \/ (\w+)/g, 'np.divide($1, $2)')
       .replace(/(\w+) \/ (\d+\.?\d*)/g, 'np.divide($1, $2)')
       .replace(/np\.divide\((.+?), (.+?), where=(.+?)\)/g, 'np.divide($1, $2, {where: $3})')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const codeToRun = `
        const np = {
            ...NumpySandbox.np,
            max: (arr) => NumpySandbox.np.max(arr)
        };
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

export default function NpDivideModule() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none">{title}</h2>
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
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30 font-black',
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30 font-black',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30 font-black',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30 font-black',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Division Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest uppercase`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'RESOLVING...' : 'EXECUTE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[220px]">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Ratio Stream
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Quotient result stream'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em]">Element-Wise Quotient Engine</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">divide</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Precision math across N-dimensional arrays. Normalize datasets, compute ratios, and handle division-by-zero safely with high-performance C execution.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-[2rem] text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl transition-all hover:bg-slate-800">
               <Divide size={24} className="text-blue-400" /> Ratio Logic
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
                { id: 'concept', label: '1. Division Concept', icon: BookOpen },
                { id: 'usage', label: '2. Basic Scaling', icon: Zap },
                { id: 'safety', label: '3. Zero Guards', icon: ShieldCheck },
                { id: 'apps', label: '4. Data Cases', icon: MoveDiagonal }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-125 transition-transform duration-700">
                  <Divide size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4">
                  <Lightbulb size={20} /> Pro Concept
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Always use <span className="text-blue-300 font-black underline underline-offset-4 decoration-blue-500/30">np.divide()</span> when safety parameters (like 'where') are needed. For standard math, the <span className="text-white font-bold">/</span> operator is identical and preferred.
               </p>
            </div>
            
            <div className="mt-8 bg-amber-500/5 border border-amber-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-amber-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Zero Hazard
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  NumPy returns <code className="text-amber-300">inf</code> for division by zero. Use the <code className="text-white">where=</code> argument to handle these cases in production pipelines.
               </p>
            </div>
          </aside>

          {/* Module Core */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Precision Division" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl">
                         <span className="text-blue-400 font-bold italic">np.divide()</span> performs element-wise quotient calculations, essential for normalization and feature scaling.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Normalizing", desc: "Scale data [0, 1]", icon: "📊" },
                           { label: "Ratio Analysis", desc: "Profit/Cost metrics", icon: "📈" },
                           { label: "Scaling", desc: "Image preprocessing", icon: "🤖" },
                           { label: "Physics", desc: "Vector resolution", icon: "🧮" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12 group shadow-2xl transition-all hover:bg-slate-800/40">
                      <div className="flex-1 text-center lg:text-left">
                         <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.6em] mb-8">Constructor Syntax</h4>
                         <div className="bg-black/90 p-8 rounded-3xl border border-slate-800 font-mono text-cyan-400 text-xl shadow-2xl group-hover:border-blue-500/10 transition-colors inline-block lg:block">
                            np.divide(numerator, denominator)
                         </div>
                      </div>
                      <div className="w-full lg:w-px h-px lg:h-32 bg-slate-800"></div>
                      <div className="flex-1 space-y-6">
                         <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                            <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">x1</span>
                            <span className="text-sm text-slate-300 font-bold italic">Numerator Array</span>
                         </div>
                         <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                            <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">x2</span>
                            <span className="text-sm text-slate-300 font-bold italic">Denominator Array</span>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="Scaling & Vector Math" color="amber" />
                   
                   <CodeExample 
                    color="amber"
                    title="1. Element-Wise Division"
                    description="Standard matching division between two arrays."
                    code={`import numpy as np\n\na = np.array([10, 20, 30])\nb = np.array([2, 5, 10])\n\nresult = np.divide(a, b)\n\nprint("Division Task Output:")\nprint(result)`} 
                    output="Division Task Output:\n[5.0 4.0 3.0]" 
                  />

                   <CodeExample 
                    color="emerald"
                    title="2. Scalar Broadcasting"
                    description="Scaling an entire dataset by a single constant value."
                    code={`import numpy as np\n\na = np.array([10, 20, 30])\n\n# Divide entire array by 10\nresult = a / 10\n\nprint("Broadcasting Scale:")\nprint(result)`} 
                    output="Broadcasting Scale:\n[1.0 2.0 3.0]" 
                  />

                   <CodeExample 
                    color="blue"
                    title="3. 2D Matrix Division"
                    description="Parallel ratio calculations across multi-dimensional grids."
                    code={`import numpy as np\n\na = np.array([[10, 20], [30, 40]])\nb = np.array([[2, 4], [5, 10]])\n\nresult = np.divide(a, b)\n\nprint("Matrix Division Grid:")\nprint(result)`} 
                    output="Matrix Division Grid:\n[[5.0  5.0]\n [6.0  4.0]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'safety' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={ShieldCheck} title="Zero Guard Resilience" color="emerald" />
                   
                   <div className="bg-rose-950/20 border border-rose-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 rotate-12">
                         <Divide size={140} />
                      </div>
                      <h4 className="text-2xl font-black text-rose-500 mb-8 flex items-center gap-4">
                         <AlertTriangle size={28} /> The Infinity Result
                      </h4>
                      <p className="text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
                         Unlike standard Python, NumPy does not crash on divide-by-zero. It returns <span className="text-white font-bold italic underline decoration-rose-500/20">inf</span> (Infinity).
                      </p>
                      
                      <div className="bg-black/60 p-8 rounded-2xl border border-rose-500/30 font-mono text-sm group-hover:border-rose-500/50 transition-all">
                        <div className="text-slate-500 mb-2"># Division by Zero behavior</div>
                        <div className="text-slate-300">a = np.array([10]) / 0</div>
                        <div className="text-rose-400 mt-4"># Result: [inf]</div>
                      </div>
                   </div>

                   <CodeExample 
                    color="emerald"
                    title="Where Condition Logic"
                    description="Safely avoiding division errors using conditional filtering."
                    code={`import numpy as np\n\na = np.array([10, 20])\nb = np.array([2, 0])\n\n# Safely divide ONLY where denominator is not zero\nresult = np.divide(a, b, where=b!=0)\n\nprint("Safe Division Result:")\nprint(result)`} 
                    output="Safe Division Result:\n[5.0 10.0]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'apps' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={MoveDiagonal} title="Production Normalization" color="indigo" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 uppercase tracking-widest text-center">
                      {[
                        { title: "NORMALIZE", desc: "Scale data to [0, 1] relative to max value", icon: "📐" },
                        { title: "PROFIT RATIO", desc: "Instantly compute Revenue / Cost", icon: "💎" },
                        { title: "IMAGE SCALE", desc: "Divide pixel array by 255.0 for AI", icon: "🖼️" }
                      ].map((m, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] group hover:bg-slate-800/60 transition-all border-b-4 border-b-indigo-500/20">
                           <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                              <span className="text-2xl">{m.icon}</span>
                           </div>
                           <h4 className="text-white font-black text-[11px] mb-3 tracking-[0.2em]">{m.title}</h4>
                           <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{m.desc}</p>
                        </div>
                      ))}
                   </div>

                   <div className="space-y-10">
                      <div className="p-10 bg-slate-950/40 border border-slate-800 rounded-[3.5rem] relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                            <Percent size={180} />
                         </div>
                         <h4 className="text-white font-black text-2xl mb-12 flex items-center gap-4">
                            <LayoutGrid className="text-indigo-500" size={28} /> Feature Preprocessing
                         </h4>
                         <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                            <div>
                               <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4">
                                  <TrendingUp size={16} /> Dataset Normalization
                               </div>
                               <CodeExample 
                                 color="indigo"
                                 title="Relational Scaling"
                                 code={`import numpy as np\n\ndata = np.array([10, 20, 30])\n\n# Scale by max value found in dataset\nnormalized = data / np.max(data)\n\nprint("Normalized Data Stream:")\nprint(normalized)`} 
                                 output="Normalized Data Stream:\n[0.33 0.67 1.0]" 
                               />
                            </div>
                            <div>
                               <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4">
                                  <ShieldCheck size={16} /> Business Metrics
                               </div>
                               <CodeExample 
                                 color="indigo"
                                 title="Profitability Ratio"
                                 code={`import numpy as np\n\nrevenue = np.array([100, 200, 300])\ncost = np.array([50, 100, 150])\n\nresult = revenue / cost\nprint("Profit Ratio Index:")\nprint(result)`} 
                                 output="Profit Ratio Index:\n[2.0 2.0 2.0]" 
                               />
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-24 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-24 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Divide size={260} />
                      </div>
                      <div className="relative z-10 max-w-4xl">
                         <h3 className="text-7xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-blue-400 italic font-light lowercase tracking-widest">Laboratory</span>
                         </h3>
                         <p className="text-3xl text-slate-200 mb-16 font-light leading-snug">
                            Scale a sequence of raw observations <span className="text-white font-bold italic">[20, 40, 60]</span> against a provided weight base <span className="text-white font-bold italic">[2, 4, 5]</span>. 
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Precision Scaling Task"
                           code={`import numpy as np\n\na = np.array([20, 40, 60])\nb = np.array([2, 4, 5])\n\n# TASK: Perform ratio division\nresult = np.divide(a, b)\n\nprint("Final Normalized Vector Identity:")\nprint(result)`} 
                           output="Final Normalized Vector Identity:\n[10.0 10.0 12.0]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-48 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-16 group">
         <div className="flex items-center gap-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-24 h-24 bg-blue-600 rounded-[3rem] flex items-center justify-center font-black text-white text-4xl italic shadow-[0_25px_60px_rgba(37,99,235,0.4)]">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.7em] text-[12px] block mb-2 tracking-[0.4em]">KnowGrow Intelligence</span>
               <span className="text-slate-600 font-bold text-sm uppercase tracking-widest leading-none">Ratio Resolution Infrastructure v9.2</span>
            </div>
         </div>
         <p className="text-[11px] text-slate-800 font-black uppercase tracking-[0.8em] text-center md:text-right">
            Performing Tensors Quotient resolution with Zero Loop Overflow
         </p>
      </footer>
    </div>
  );
}
