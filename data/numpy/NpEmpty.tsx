import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, Cpu, MoveDiagonal, TrendingUp, AlertTriangle, ShieldCheck, Database, LayoutGrid } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') {
        // Mocking the unpredictable nature of np.empty
        if (val.toString().includes('e')) return val.toExponential(3);
        return val.toFixed(4);
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
    // Mocking unpredictable/uninitialized memory
    empty: (shape: number | number[]) => {
        const generateGarbage = () => (Math.random() - 0.5) * Math.pow(10, Math.floor(Math.random() * 40) - 20);
        
        if (Array.isArray(shape)) {
            const [rows, cols] = shape;
            return Array(rows).fill(0).map(() => Array(cols).fill(0).map(generateGarbage));
        }
        return Array(shape).fill(0).map(generateGarbage);
    },
    fill: (arr: any[], value: number) => {
        if (Array.isArray(arr[0])) {
            return arr.map(row => row.fill(value));
        }
        return arr.fill(value);
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
       .replace(/arr\.fill\((.+?)\)/g, 'np.fill(arr, $1)')
       .replace(/arr\[:\] = \[(.+?)\]/g, 'arr = [$1]') // Simple mock for slice fill
       .replace(/arr\[:\] = (.+?)/g, 'np.fill(arr, $1)')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const codeToRun = `
        const np = NumpySandbox.np;
        const print = customPrint;
        let arr; 
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

export default function NpEmptyModule() {
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Memory Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest uppercase`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'ALLOCATING...' : 'EXECUTE'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Uninitialized Dump
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Garbage value stream'}
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em]">Raw Memory Allocation</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">empty</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Fastest memory reservation. np.empty() allocates a block of memory without zeroing it out, revealing whatever residual data was left behind by previous operations.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-[2rem] text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl transition-all hover:bg-slate-800">
               <Cpu size={24} className="text-indigo-400" /> Bare Metal Speed
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
                { id: 'concept', label: '1. Uninitialized Base', icon: BookOpen },
                { id: 'usage', label: '2. Raw Examples', icon: Zap },
                { id: 'safety', label: '3. Hazard Guide', icon: ShieldCheck },
                { id: 'apps', label: '4. Compute Cases', icon: MoveDiagonal }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-rose-500/10 group-hover:scale-125 transition-transform duration-700 rotate-12">
                  <AlertTriangle size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/20 pb-4">
                  <AlertTriangle size={20} /> Garbage Warning
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Never trust values from <span className="text-rose-300 font-black underline underline-offset-4 decoration-rose-500/30">np.empty()</span> directly. They are unpredictable residuals from previous system state. Always <span className="text-white font-bold italic underline">overwrite</span> them immediately.
               </p>
            </div>
          </aside>

          {/* Module Core */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. High-Performance Allocation" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl">
                         <span className="text-indigo-400 font-bold italic">np.empty()</span> does not initialize your array values. It allocates memory instantly, offering superior speed for massive data pre-allocation.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Bare Allocation", desc: "No data initialization", icon: "⚡" },
                           { label: "System Fast", desc: "Faster than zeros/ones", icon: "🚀" },
                           { label: "Raw Memory", desc: "Residual value dump", icon: "💾" },
                           { label: "Pre-Alloc", desc: "Reserve space early", icon: "🧠" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12 group shadow-2xl transition-all hover:bg-slate-800/40">
                      <div className="flex-1 text-center lg:text-left">
                         <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.6em] mb-8">Constructor Syntax</h4>
                         <div className="bg-black/90 p-8 rounded-3xl border border-slate-800 font-mono text-amber-400 text-xl shadow-2xl group-hover:border-indigo-500/10 transition-colors inline-block lg:block">
                            np.empty(shape, dtype=float)
                         </div>
                      </div>
                      <div className="w-full lg:w-px h-px lg:h-32 bg-slate-800"></div>
                      <div className="flex-1 space-y-6">
                         <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                            <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">shape</span>
                            <span className="text-sm text-slate-300 font-bold italic">Dimensions (e.g., 5 or (2,3))</span>
                         </div>
                         <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                            <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">dtype</span>
                            <span className="text-sm text-slate-300 font-bold italic">Memory Precision</span>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="Raw Allocation Identity" color="amber" />
                   
                   <CodeExample 
                    color="amber"
                    title="1. Vector Memory Dump"
                    description="Creating an uninitialized 1D vector."
                    code={`import numpy as np\n\narr = np.empty(3)\n\nprint("Notice uninitialized residuals:")\nprint(arr)`} 
                    output="Notice uninitialized residuals:\n[1.234e-10  5.678e+20  9.012e-05]" 
                  />

                   <CodeExample 
                    color="emerald"
                    title="2. 2D Surface Reservation"
                    description="Allocating a multi-dimensional matrix grid."
                    code={`import numpy as np\n\n# Reserve 2x3 matrix space\narr = np.empty((2, 3))\n\nprint("2D Garbage Dump:")\nprint(arr)`} 
                    output="2D Garbage Dump:\n[[1.2e-10  5.6e+03  0.0]\n [9.1e+02  3.4e-05  7.8e+01]]" 
                  />

                   <CodeExample 
                    color="blue"
                    title="3. Typed Allocation"
                    description="Emptying memory for a specific integer resolution."
                    code={`import numpy as np\n\n# Reserve space for 2x2 integer block\narr = np.empty((2, 2), dtype=int)\n\nprint("Typed uninitialized data:")\nprint(arr)`} 
                    output="Typed uninitialized data:\n[[4352  128]\n [   0 9871]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'safety' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={ShieldCheck} title="Hazard Resilience Guide" color="rose" />
                   
                   <div className="p-12 bg-rose-950/20 border border-rose-500/20 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <Database size={240} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <AlertTriangle className="text-rose-500" size={28} /> The Empty Paradox
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                        Beginners often assume np.empty() is like np.zeros(). <span className="text-white font-bold">It is not.</span> Values are whatever bits were left in that memory address.
                     </p>
                     
                     <div className="bg-slate-950 p-10 rounded-3xl border border-rose-500/10">
                        <h5 className="text-rose-400 font-bold text-sm mb-4 uppercase">Correct workflow:</h5>
                        <pre className="text-slate-400 font-mono text-xs leading-relaxed">
                           {`# BAD ❌\narr = np.empty(5)\nprint(arr[0] + 1) # Unpredictable result\n\n# GOOD ✅\narr = np.empty(5)\narr.fill(10) # Overwrite immediately\nprint(arr[0] + 1) # Guaranteed 11`}
                        </pre>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                           <ShieldCheck size={32} />
                        </div>
                        <h5 className="text-white font-black text-xs uppercase tracking-widest mb-3">Safe Learning</h5>
                        <p className="text-xs text-slate-500 font-bold leading-relaxed">Use <code className="text-emerald-300">np.zeros()</code> or <code className="text-emerald-300">np.ones()</code> if you need predictable starting values.</p>
                     </div>
                     <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                           <Cpu size={32} />
                        </div>
                        <h5 className="text-white font-black text-xs uppercase tracking-widest mb-3">Pro Compute</h5>
                        <p className="text-xs text-slate-500 font-bold leading-relaxed">Use <code className="text-indigo-300">np.empty()</code> only in performance-critical code where you overwrite the entire block.</p>
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'apps' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={MoveDiagonal} title="High-Speed Compute Cases" color="indigo" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 uppercase tracking-widest text-center">
                      {[
                        { title: "PRE-ALLOCATION", desc: "Reserve 1,000,000 items instantly without zeroing", icon: "📐" },
                        { title: "SIM BUFFERS", desc: "Fast memory recycling for high-freq simulations", icon: "🏎️" },
                        { title: "DATA PIPELINE", desc: "Batch preprocessing without initialization lag", icon: "📦" }
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
                            <TrendingUp size={180} />
                         </div>
                         <h4 className="text-white font-black text-2xl mb-12 flex items-center gap-4">
                            <LayoutGrid className="text-indigo-500" size={28} /> Scientific Computation
                         </h4>
                         <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                            <div>
                               <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4">
                                  <TrendingUp size={16} /> Loop Initialization
                               </div>
                               <CodeExample 
                                 color="indigo"
                                 title="Efficient Pre-fill"
                                 code={`import numpy as np\n\n# Faster than zeros() for big loops\narr = np.empty(1000)\n\nfor i in range(1000):\n    arr[i] = i * 2\n\nprint("First 5 entries:")\nprint(arr[:5])`} 
                                 output="First 5 entries:\n[0.0 2.0 4.0 6.0 8.0]" 
                               />
                            </div>
                            <div>
                               <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4">
                                  <ShieldCheck size={16} /> Instant Overwrite
                               </div>
                               <CodeExample 
                                 color="indigo"
                                 title="Slice Transformation"
                                 code={`import numpy as np\n\narr = np.empty(5)\n# Immediate slice overwrite using list\narr[:] = [10, 20, 30, 40, 50]\n\nprint("Clean over-fill result:")\nprint(arr)`} 
                                 output="Clean over-fill result:\n[10.0 20.0 30.0 40.0 50.0]" 
                               />
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-24 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-24 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Cpu size={260} />
                      </div>
                      <div className="relative z-10 max-w-4xl">
                         <h3 className="text-7xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-blue-400 italic font-light lowercase tracking-widest">Laboratory</span>
                         </h3>
                         <p className="text-3xl text-slate-200 mb-16 font-light leading-snug">
                            Reserve memory for a vector of size 5 and perform an <span className="text-white font-bold underline decoration-blue-500/30 underline-offset-8 italic">immediate overwrite</span> with values 1 to 5.
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Allocation Challenge"
                           code={`import numpy as np\n\n# TASK: Create empty array of size 5\narr = np.empty(5)\n\n# TASK: Fill with values 1 to 5\narr[:] = [1, 2, 3, 4, 5]\n\nprint("Final Clean Initialized Identity:")\nprint(arr)`} 
                           output="Final Clean Initialized Identity:\n[1.0 2.0 3.0 4.0 5.0]" 
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
               <span className="text-slate-400 font-black uppercase tracking-[0.7em] text-[12px] block mb-2 tracking-[0.4em]">KnowGrow Engineering</span>
               <span className="text-slate-600 font-bold text-sm uppercase tracking-widest leading-none">Uninitialized Memory Systems v8.5</span>
            </div>
         </div>
         <p className="text-[11px] text-slate-800 font-black uppercase tracking-[0.8em] text-center md:text-right">
            Mastering Raw Tensors Allocation for Bare Metal performance
         </p>
      </footer>
    </div>
  );
}
