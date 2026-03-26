import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Terminal, 
  Code2, 
  Copy, 
  Check, 
  Eye, 
  Layers, 
  Database, 
  Globe, 
  Layout, 
  Package, 
  Activity, 
  ArrowRight,
  Info,
  Cpu,
  RefreshCw,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Search,
  BookOpen,
  Scale,
  Bug,
  Construction,
  Fingerprint,
  Monitor,
  Trophy,
  Workflow,
  Lock,
  GitCompare,
  ArrowUpDown,
  Infinity,
  Divide,
  Calculator,
  Binary,
  Bitcoin,
  Coins,
  ShieldQuestion,
  AlertCircle,
  Hash,
  FastForward,
  Shuffle,
  Flag,
  Key,
  Unlock,
  Shield,
  Dna,
  Play,
  StopCircle,
  PlayCircle,
  ArrowRightCircle,
  Trash2,
  Columns,
  SkipForward,
  LogOut,
  Repeat,
  History,
  Link,
  ChevronRight,
  BrainCircuit,
  Network
} from 'lucide-react';

// ─── Shared Components ────────────────────────────────────────────────────────

const CodeBlock = ({ code, title, language = 'javascript' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg relative group w-full bg-[#1e1e1e]">
      {title && (
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-cyan-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color}`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed">{subtitle}</p>}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsCallbacks: React.FC = () => {
  const [hellMode, setHellMode] = useState<'nested' | 'modern'>('nested');
  const [fetchStatus, setFetchStatus] = useState<'idle' | 'fetching' | 'success' | 'error'>('idle');
  const [calcVals, setCalcVals] = useState({ a: 5, b: 3 });

  const simulateFetch = () => {
    setFetchStatus('fetching');
    setTimeout(() => {
      // 80% success rate
      const success = Math.random() > 0.2;
      setFetchStatus(success ? 'success' : 'error');
    }, 1500);
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 text-[10px] font-black mb-8 border border-cyan-100 dark:border-cyan-900/50 shadow-xl shadow-cyan-500/5 animate-pulse tracking-[0.2em]">
          <Network size={14} className="fill-current" /> FUNCTION CHAINING
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Callbacks<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-600 drop-shadow-2xl">
            Pattern
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The foundation of asynchronous JavaScript. Pass logic as <span className="text-gray-900 dark:text-white font-bold underline decoration-cyan-500 underline-offset-4 tracking-tight uppercase italic">Data</span> and execute it exactly when necessary.
        </p>
      </header>

      {/* ── Section 1-2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What & 2. Why?" subtitle="Functions as first-class parameters." color="text-cyan-500" />
            <div className="space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                 👉 A <span className="text-cyan-500 font-black px-2 py-0.5 bg-cyan-500/5 rounded-lg border border-cyan-500/10">callback</span> is a function passed as an argument to another function, to be executed "later".
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { title: 'Async Tasks', icon: RefreshCw, color: 'text-cyan-500' },
                   { title: 'Reusability', icon: Package, color: 'text-emerald-500' },
                   { title: 'Flexibility', icon: Activity, color: 'text-teal-500' },
                   { title: 'Completion', icon: CheckCircle, color: 'text-sky-500' }
                 ].map((item, i) => (
                   <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl hover:-translate-y-1 transition-transform">
                      <item.icon className={item.color + " mb-3"} size={20} />
                      <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.title}</h4>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[3.5rem] blur-2xl opacity-10"></div>
            <div className="relative bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl flex flex-col justify-center min-h-[400px]">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <BrainCircuit size={120} className="text-cyan-500" />
               </div>
               <h3 className="text-white font-black text-xl mb-8 flex items-center gap-3 italic">
                  <Terminal size={24} className="text-cyan-500 animate-pulse" /> Logic Injector
               </h3>
               <CodeBlock code={`function greet(name, callback) {\n    console.log("Hello " + name);\n    callback();\n}\n\ngreet("Karthick", () => console.log("Bye!"));`} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3-5: Async & Real World ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <SectionHeader icon={History} title="3. Async & 5. Real-World" subtitle="Simulation of delayed operations." color="text-emerald-500" />
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
               <div className="flex justify-between items-start mb-10">
                  <div className="max-w-md">
                    <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">Timeout Tracker ⏱️</h4>
                    <p className="text-gray-500 font-medium italic underline decoration-emerald-500/20 underline-offset-4">Execution continues immediately, while the callback waits in the Event Loop.</p>
                  </div>
                  <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-xl shadow-emerald-500/20">
                     <Zap size={20} />
                  </div>
               </div>
               <CodeBlock title="Asynchronous Example" code={`console.log("Start");\nsetTimeout(() => {\n    console.log("Task Done");\n}, 2000);\nconsole.log("End");`} />
            </div>
         </div>

         <div className="bg-slate-900 p-10 rounded-[4rem] border border-white/5 shadow-2xl flex flex-col justify-center relative group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-700">
               <Globe size={100} className="text-cyan-500" />
            </div>
            <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-8 italic">API Simulation 🌍</h4>
            
            <div className="flex-1 flex flex-col justify-center space-y-6">
               <button 
                 onClick={simulateFetch}
                 disabled={fetchStatus === 'fetching'}
                 className={`w-full py-6 rounded-3xl font-black uppercase tracking-widest text-xs transition-all border ${
                   fetchStatus === 'fetching' ? 'bg-white/5 border-white/10 text-gray-500 cursor-not-allowed' : 
                   fetchStatus === 'success' ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/20' :
                   fetchStatus === 'error' ? 'bg-rose-500 text-white shadow-xl shadow-rose-500/20' :
                   'bg-white text-slate-900 hover:scale-[1.02]'
                 }`}
               >
                 {fetchStatus === 'fetching' ? <RefreshCw className="animate-spin mx-auto" /> : 
                  fetchStatus === 'success' ? 'DATA RECEIVED ✅' : 
                  fetchStatus === 'error' ? 'FETCH FAILED ❌' : 'FETCH DATA (2s) 🏹'}
               </button>

               <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">Callback Result</span>
                  <span className="text-2xl font-mono font-black text-white italic transition-all duration-300">
                    {fetchStatus === 'fetching' ? '...' : fetchStatus === 'success' ? 'SUCCESS' : fetchStatus === 'error' ? 'ERROR' : 'READY'}
                  </span>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6-8: Callback Hell & Solutions ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Bug} title="7. Callback Hell & 8. The Solution" subtitle="Managing complex asynchronous flows." color="text-rose-500" />
         
         <div className="bg-white dark:bg-gray-800 p-12 rounded-[5rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                     <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.4em] italic mb-2">The Pyramid of Doom 💀</h4>
                     <p className="text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed italic">
                       "When callbacks are nested too deeply, code becomes impossible to read, debug, and maintain."
                     </p>
                  </div>

                  <div className="flex gap-4">
                     <button 
                       onClick={() => setHellMode('nested')}
                       className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${hellMode === 'nested' ? 'bg-rose-500 text-white shadow-xl shadow-rose-500/20' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}
                     >
                       Pyramid View
                     </button>
                     <button 
                       onClick={() => setHellMode('modern')}
                       className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${hellMode === 'modern' ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/20' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}
                     >
                       Flat View
                     </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                     {[
                       { label: 'Unreadable', icon: AlertTriangle },
                       { label: 'Fragile', icon: Bug },
                       { label: 'Indented', icon: Layers }
                     ].map((item, i) => (
                       <div key={i} className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-3xl">
                          <item.icon className="mx-auto mb-2 text-rose-400 opacity-50" size={16} />
                          <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{item.label}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="lg:w-1/2 w-full transition-all duration-700">
                  {hellMode === 'nested' ? (
                    <CodeBlock title="callback_hell.js" code={`task1(() => {\n    task2(() => {\n        task3(() => {\n            task4(() => {\n                console.log("Done");\n            });\n        });\n    });\n});`} />
                  ) : (
                    <CodeBlock title="modern_solution.js" code={`async function runTasks() {\n    await task1();\n    await task2();\n    await task3();\n    console.log("Done");\n}`} />
                  )}
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9: Error Handling ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
         <div className="space-y-8">
            <SectionHeader icon={ShieldAlert} title="9. Error-First Pattern" subtitle="Standardized industrial error handling." color="text-amber-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
               <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-6 italic underline decoration-amber-500/20 underline-offset-4">Protocol: (err, data)</h4>
               <p className="text-gray-500 font-medium italic leading-loose mb-8">
                 In this pattern, the first argument of the callback is reserved for the <span className="text-rose-500 font-black">Error object</span>. If successful, the Error is `null`.
               </p>
               <div className="flex gap-4">
                  <div className="flex-1 p-6 bg-amber-500/5 border border-amber-500/10 rounded-2xl flex items-center gap-4">
                     <AlertCircle className="text-amber-500" size={24} />
                     <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed italic">Check error FIRST</span>
                  </div>
               </div>
            </div>
         </div>
         <CodeBlock title="Production Pattern" code={`fetchData((err, data) => {\n    if (err) {\n        console.log(err);\n    } else {\n        console.log(data);\n    }\n});`} />
      </section>

      {/* ── Section 10: Comparison Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-12 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-6 transition-transform duration-1000">
               <Shuffle size={200} className="text-white" />
            </div>
            <h3 className="text-white font-black text-3xl mb-12 flex items-center gap-4">
               <Scale className="text-cyan-500" /> 10. Async Evolution Matrix
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className="border-b border-white/10">
                         <th className="py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Feature</th>
                         <th className="py-6 text-[10px] font-black text-cyan-500 uppercase tracking-widest italic">Callback</th>
                         <th className="py-6 text-[10px] font-black text-emerald-500 uppercase tracking-widest italic">Promise</th>
                         <th className="py-6 text-[10px] font-black text-teal-400 uppercase tracking-widest italic">Async/Await</th>
                      </tr>
                   </thead>
                   <tbody className="text-sm font-medium">
                      {[
                        { f: 'Readability', c: 'Low 📉', p: 'Medium 📊', a: 'High 📈' },
                        { f: 'Error Handling', c: 'Manual 🛠️', p: '.catch() ⚓', a: 'try...catch 🛡️' },
                        { f: 'Modern Usage', c: 'Less 🕰️', p: 'More 🚀', a: 'Most 👑' }
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-white/5 group/row hover:bg-white/5 transition-colors">
                           <td className="py-6 text-gray-400 italic">{row.f}</td>
                           <td className="py-6 text-cyan-400 font-bold italic">{row.c}</td>
                           <td className="py-6 text-emerald-400 font-bold italic">{row.p}</td>
                           <td className="py-6 text-teal-400 font-bold italic">{row.a}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
            </div>
         </div>
      </section>

      {/* ── Section 11: Calculator Example ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Calculator} title="11. Toolkit Example" subtitle="Passing logic as a functional tool." color="text-indigo-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
               <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-10 italic">Interactive Calculation Engine</h4>
               <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="space-y-2">
                     <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block ml-2">Value A</span>
                     <input 
                       type="number" 
                       value={calcVals.a}
                       onChange={(e) => setCalcVals(p => ({ ...p, a: parseInt(e.target.value) || 0 }))}
                       className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-indigo-500/20 font-mono font-black text-indigo-500"
                     />
                  </div>
                  <div className="space-y-2">
                     <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block ml-2">Value B</span>
                     <input 
                       type="number" 
                       value={calcVals.b}
                       onChange={(e) => setCalcVals(p => ({ ...p, b: parseInt(e.target.value) || 0 }))}
                       className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-indigo-500/20 font-mono font-black text-emerald-500"
                     />
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-indigo-500 text-white rounded-3xl shadow-xl shadow-indigo-500/20 text-center">
                     <span className="text-[8px] font-black uppercase tracking-widest block mb-1 opacity-60">ADDITION CALLBACK</span>
                     <span className="text-2xl font-black italic">{calcVals.a + calcVals.b}</span>
                  </div>
                  <div className="p-6 bg-emerald-500 text-white rounded-3xl shadow-xl shadow-emerald-500/20 text-center">
                     <span className="text-[8px] font-black uppercase tracking-widest block mb-1 opacity-60">MULTIPLY CALLBACK</span>
                     <span className="text-2xl font-black italic">{calcVals.a * calcVals.b}</span>
                  </div>
               </div>
            </div>
         </div>

         <CodeBlock title="calculator.js" code={`function calculate(a, b, op) {\n    return op(a, b);\n}\n\nconst add = (x, y) => x + y;\nconst mult = (x, y) => x * y;\n\ncalculate(5, 3, add); // 8`} />
      </section>

      {/* ── Section 12-13: Mistakes & Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="p-12 bg-white dark:bg-gray-800 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
            <SectionHeader icon={ShieldAlert} title="12. Common Mistakes ⚠️" color="text-rose-500" />
            <div className="space-y-6">
               {[
                 { t: 'Forgetting Execution', d: 'Passing a function without calling it: `callback` vs `callback()`' },
                 { t: 'The Hell Pyramid', d: 'Nesting too deeply instead of using modular helper functions.' },
                 { t: 'Ignoring Errors', d: 'Failing to check the (err) argument in production setups.' }
               ].map((m, i) => (
                 <div key={i} className="flex gap-6 items-start">
                    <div className="mt-1 p-2 bg-rose-500/10 text-rose-500 rounded-xl">
                       <Trash2 size={16} />
                    </div>
                    <div>
                       <h5 className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest mb-1 italic">{m.t}</h5>
                       <p className="text-xs text-gray-500 font-medium leading-relaxed italic">{m.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="p-12 bg-slate-900 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <SectionHeader icon={Workflow} title="13. Industry Use Cases 🌍" color="text-cyan-400" />
            <div className="grid grid-cols-2 gap-4">
               {['API Requests 📡', 'Event Handlers 🖱️', 'Timers/Intervals ⏳', 'File Stream 💾', 'DB Queries 🛠️', 'Redux Actions 🔐'].map((use, i) => (
                  <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5 text-center flex items-center justify-center">
                     <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em]">{use}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Chain Complete.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto italic underline decoration-cyan-500/10 underline-offset-8">
           "The power of callbacks lies in the ability to defer logic until the exact moment of readiness."
         </p>
      </footer>

    </div>
  );
};

export default JsCallbacks;