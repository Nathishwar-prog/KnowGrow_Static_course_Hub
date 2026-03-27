import React, { useState, useEffect, useMemo } from 'react';
import {
  Zap,
  Activity,
  Terminal,
  Info,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  List,
  Binary,
  Box,
  Search,
  BookOpen,
  Grid,
  ShieldCheck,
  MousePointer2,
  Database,
  Repeat,
  Lightbulb,
  Plus,
  ArrowRight,
  Code2,
  Layers,
  Eye,
  Settings,
  Sparkles,
  HelpCircle,
  Download,
  Maximize,
  Anchor,
  Globe,
  Star,
  ShieldAlert,
  Hash,
  TextCursor,
  CirclePlay,
  Scissors,
  Table,
  Cpu,
  Workflow,
  ClipboardList,
  CircleSlash,
  Target,
  Timer,
  FastForward,
  Server,
  Hourglass,
  CheckSquare,
  Network,
  CloudLightning,
  Layout,
  Globe2,
  History
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
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center text-white/90">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
            title="Copy code"
          >
            {copied ? <CheckCircle size={14} className="text-green-400" /> : <Package size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 font-medium font-sans border-transparent">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-fuchsia-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8 font-sans border-transparent">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight italic underline decoration-transparent border-transparent">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color} border-transparent`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed italic border-transparent">{subtitle}</p>}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsPromises: React.FC = () => {
  const [simState, setSimState] = useState<'IDLE' | 'PENDING' | 'RESOLVED' | 'REJECTED'>('IDLE');
  const [progress, setProgress] = useState(0);

  const runSimulation = (willResolve: boolean) => {
    setSimState('PENDING');
    setProgress(0);
    
    let interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setSimState(willResolve ? 'RESOLVED' : 'REJECTED');
          return 100;
        }
        return p + 2;
      });
    }, 20);
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-fuchsia-500/30 overflow-x-hidden text-gray-900 dark:text-white border-transparent border-transparent">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 border-transparent">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[140px] border-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[140px] border-transparent"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative italic border-transparent border-transparent">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] font-black mb-8 border border-fuchsia-100 dark:border-fuchsia-900/50 shadow-xl shadow-fuchsia-500/5 animate-pulse tracking-[0.2em] italic border-transparent">
          <History size={14} className="fill-current" /> ASYNCHRONOUS FUTURE HANDLER
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9] italic border-transparent underline decoration-transparent">
          JS Promises <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-rose-500 to-indigo-600 drop-shadow-2xl font-sans italic border-transparent">
            Objects
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic border-transparent border-transparent border-transparent">
          Master the <span className="text-gray-900 dark:text-white font-bold underline decoration-fuchsia-500/30">asynchronous contract</span> that represents the future success or failure of an operation, providing a powerful alternative to legacy <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500/30">callback patterns</span>.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center italic border-transparent">
        <div className="space-y-8 italic border-transparent border-transparent">
          <SectionHeader icon={Info} title="1. What is a Promise?" subtitle="The contract of tomorrow's data." color="text-fuchsia-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group italic border-transparent border-transparent">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12 italic border-transparent border-transparent">
               <Cpu size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans italic decoration-transparent border-transparent border-transparent border-transparent">
              "A Promise is an object that acts as a placeholder for a result that isn't ready yet. It represents an asynchronous operation that will eventually complete as either a Success or a Failure."
            </p>
            <div className="p-6 bg-fuchsia-500/5 border border-fuchsia-500/10 rounded-2xl italic border-transparent">
               <span className="text-[12px] font-black text-fuchsia-600 uppercase tracking-widest block underline pb-2">Mental Model</span>
               <p className="text-[13px] text-gray-400 italic font-sans italic border-transparent">“I promise to give you a result later (success or failure)”</p>
            </div>
          </div>
        </div>

        <div className="space-y-8 italic border-transparent border-transparent">
           <SectionHeader icon={ShieldCheck} title="2. Why Use Promises?" subtitle="Escaping the legacy callback hell." color="text-rose-500" />
           <div className="grid grid-cols-2 gap-4 italic border-transparent">
              <div className="p-8 bg-rose-500/5 border border-rose-500/10 rounded-3xl italic group border-transparent">
                 <div className="text-rose-500 mb-4 opacity-50 group-hover:opacity-100 transition-opacity italic border-transparent">
                    <History size={24} />
                 </div>
                 <span className="text-[10px] font-black uppercase text-rose-600 tracking-widest block mb-2 italic border-transparent">Before ❌</span>
                 <p className="text-[11px] text-gray-500 italic decoration-transparent border-transparent pb-1">Callback Hell 😵</p>
                 <p className="text-[11px] text-gray-500 italic decoration-transparent border-transparent">Hard to maintain</p>
              </div>
              <div className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl italic group border-transparent">
                 <div className="text-emerald-500 mb-4 opacity-50 group-hover:opacity-100 transition-opacity italic border-transparent">
                    <FastForward size={24} />
                 </div>
                 <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest block mb-2 italic border-transparent">With ✅</span>
                 <p className="text-[11px] text-gray-500 italic decoration-transparent border-transparent pb-1">Cleaner Chainable logic</p>
                 <p className="text-[11px] text-gray-500 italic decoration-transparent border-transparent">Better error handling</p>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: States ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent">
         <SectionHeader icon={Layers} title="3. Promise States" subtitle="The lifecycle of an async operation." color="text-indigo-500" />
         <div className="grid lg:grid-cols-3 gap-8 italic border-transparent border-transparent">
            {[
              { label: "Pending", state: "waiting", icon: Hourglass, color: "sky", desc: "The initial state, neither fulfilled nor rejected." },
              { label: "Fulfilled", state: "success", icon: CheckSquare, color: "emerald", desc: "The operation completed successfully (resolve)." },
              { label: "Rejected", state: "error", icon: CircleSlash, color: "rose", desc: "The operation failed for some reason (reject)." }
            ].map((state, i) => (
               <div key={i} className={`p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-${state.color}-500/10 shadow-xl group hover:-translate-y-2 transition-transform italic border-transparent`}>
                  <div className={`p-4 rounded-2xl bg-${state.color}-500/10 text-${state.color}-500 w-fit mb-6 italic border-transparent`}>
                     <state.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-black italic tracking-tighter mb-2 italic border-transparent underline decoration-transparent">{state.label}</h4>
                  <p className="text-gray-500 font-medium italic underline decoration-transparent mb-4 italic border-transparent">State: <span className={`text-${state.color}-500 uppercase tracking-widest text-[9px] font-black`}>{state.state}</span></p>
                  <p className="text-[11px] text-gray-400 italic leading-relaxed italic border-transparent">{state.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 3: Creation & Consumption ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
        <div className="grid lg:grid-cols-2 gap-12 italic border-transparent border-transparent">
           <div className="space-y-8 italic border-transparent border-transparent">
              <SectionHeader icon={Plus} title="4. Creating a Promise" subtitle="Defining the asynchronous job." color="text-fuchsia-500" />
              <CodeBlock title="new Promise()" code={`let promise = new Promise((resolve, reject) => {\n  let success = true;\n\n  if (success) {\n    resolve("Task completed!");\n  } else {\n    reject("Task failed!");\n  }\n});`} />
           </div>

           <div className="space-y-8 italic border-transparent border-transparent">
              <SectionHeader icon={Database} title="5. Consuming a Promise" subtitle="Reacting to the results." color="text-rose-500" />
              <div className="grid grid-cols-1 gap-4 italic border-transparent">
                 <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl italic group border-transparent">
                    <div className="flex justify-between items-center mb-4 italic">
                       <h5 className="text-lg font-black italic text-emerald-500 tracking-tighter italic border-transparent underline decoration-transparent">5.1 .then()</h5>
                       <span className="text-[11px] text-gray-400 font-black uppercase tracking-widest italic border-transparent">Success</span>
                    </div>
                    <code className="text-[11px] font-mono text-gray-500 italic block underline decoration-gray-500/10 italic">promise.then(res =&gt; console.log(res));</code>
                 </div>
                 <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl italic group border-transparent">
                    <div className="flex justify-between items-center mb-4 italic">
                       <h5 className="text-lg font-black italic text-rose-500 tracking-tighter italic border-transparent underline decoration-transparent">5.2 .catch()</h5>
                       <span className="text-[11px] text-gray-400 font-black uppercase tracking-widest italic border-transparent">Error</span>
                    </div>
                    <code className="text-[11px] font-mono text-gray-500 italic block underline decoration-gray-500/10 italic">promise.catch(err =&gt; console.log(err));</code>
                 </div>
                 <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl italic group border-transparent">
                    <div className="flex justify-between items-center mb-4 italic">
                       <h5 className="text-lg font-black italic text-indigo-500 tracking-tighter italic border-transparent underline decoration-transparent">5.3 .finally()</h5>
                       <span className="text-[11px] text-gray-400 font-black uppercase tracking-widest italic border-transparent">Always</span>
                    </div>
                    <code className="text-[11px] font-mono text-gray-500 italic block underline decoration-gray-500/10 italic">promise.finally(() =&gt; console.log("Done!"));</code>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4: Visual Lifecycle Simulator ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group font-sans italic border-transparent">
        <SectionHeader icon={Eye} title="6. Promise Lifecycle Visual" subtitle="From start to terminal resolution." color="text-indigo-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-rose-500/20 rounded-[4rem] italic border-transparent border-transparent decoration-transparent border-transparent">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner italic overflow-hidden relative italic border-transparent border-transparent decoration-transparent border-transparent">
             <div className="grid lg:grid-cols-2 gap-16 items-center italic border-transparent border-transparent decoration-transparent border-transparent">
                <div className="space-y-8 italic border-transparent border-transparent">
                   <div className="space-y-4 italic border-transparent border-transparent">
                      <h3 className="text-4xl font-black italic tracking-tighter leading-tight italic border-transparent border-transparent underline decoration-transparent">Async Simulator</h3>
                      <p className="text-gray-500 font-medium italic underline decoration-gray-500/10 italic border-transparent border-transparent decoration-transparent border-transparent">Select an outcome to witness the internal state change in real-time.</p>
                   </div>
                   
                   <div className="flex gap-4 italic border-transparent">
                      <button 
                         onClick={() => runSimulation(true)}
                         disabled={simState === 'PENDING'}
                         className="flex-1 py-4 bg-emerald-500 text-white rounded-2xl font-black italic tracking-widest text-[10px] shadow-lg shadow-emerald-500/20 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 italic border-transparent"
                      >
                         RESOLVE (SUCCESS)
                      </button>
                      <button 
                         onClick={() => runSimulation(false)}
                         disabled={simState === 'PENDING'}
                         className="flex-1 py-4 bg-rose-500 text-white rounded-2xl font-black italic tracking-widest text-[10px] shadow-lg shadow-rose-500/20 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 italic border-transparent"
                      >
                         REJECT (FAILURE)
                      </button>
                   </div>

                   <div className="space-y-4 italic border-transparent border-transparent">
                      <div className="flex justify-between items-center text-[10px] font-black uppercase text-gray-400 italic border-transparent">
                         <span>Execution Flow</span>
                         <span>{progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden italic border-transparent">
                         <div className="h-full bg-fuchsia-600 transition-all duration-300 italic border-transparent" style={{ width: `${progress}%` }}></div>
                      </div>
                   </div>
                </div>

                <div className="relative italic border-transparent border-transparent">
                   <div className="p-12 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative group overflow-hidden text-center min-h-[350px] flex flex-col justify-center italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent">
                      <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:rotate-45 transition-transform duration-1000 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent">
                         <Workflow size={200} className="text-fuchsia-500 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent" />
                      </div>
                      <div className="relative z-10 space-y-8 uppercase italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent">
                         <div className="space-y-2 italic border-transparent border-transparent">
                            <span className="text-[10px] font-black italic tracking-[0.3em] text-gray-500 italic border-transparent">Active Lifecycle</span>
                            <div className="text-5xl font-black italic tracking-tight italic border-transparent border-transparent decoration-transparent">
                               {simState === 'IDLE' && <span className="text-gray-700 italic border-transparent">Idle</span>}
                               {simState === 'PENDING' && <span className="text-sky-500 animate-pulse italic border-transparent">Pending...</span>}
                               {simState === 'RESOLVED' && <span className="text-emerald-500 animate-in zoom-in italic border-transparent">Fulfilled ✅</span>}
                               {simState === 'REJECTED' && <span className="text-rose-500 animate-in zoom-in italic border-transparent">Rejected ❌</span>}
                            </div>
                         </div>
                         <div className="h-px bg-white/5 w-1/2 mx-auto italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent"></div>
                         <div className="flex flex-col gap-2 italic border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent">
                            <div className={`px-4 py-2 rounded-lg text-[9px] font-black tracking-widest italic border-transparent ${simState === 'RESOLVED' ? 'bg-emerald-500/10 text-emerald-500 translate-x-0' : 'text-white/10 opacity-30 translate-x-4'} transition-all`}>Success → then()</div>
                            <div className={`px-4 py-2 rounded-lg text-[9px] font-black tracking-widest italic border-transparent ${simState === 'REJECTED' ? 'bg-rose-500/10 text-rose-500 translate-x-0' : 'text-white/10 opacity-30 -translate-x-4'} transition-all`}>Failure → catch()</div>
                            <div className={`px-4 py-2 rounded-lg text-[9px] font-black tracking-widest italic border-transparent ${simState !== 'IDLE' && simState !== 'PENDING' ? 'bg-indigo-500/10 text-indigo-500' : 'text-white/10 opacity-30'} transition-all`}>TERMINAL → finally()</div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Real Examples & Chaining ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
        <div className="grid lg:grid-cols-2 gap-12 italic border-transparent border-transparent">
           <div className="space-y-8 italic border-transparent border-transparent">
              <SectionHeader icon={Timer} title="7. Real Example: Timeout" subtitle="Simulating network latency." color="text-sky-500" />
              <CodeBlock title="Async Simulation with Timeout" code={`let promise = new Promise((resolve) => {\n  setTimeout(() => {\n    resolve("Data loaded!");\n  }, 2000);\n});\n\npromise.then(res => console.log(res));\n\n// Output after 2 seconds: Data loaded!`} />
           </div>

           <div className="space-y-8 italic border-transparent border-transparent">
              <SectionHeader icon={Repeat} title="8. Promise Chaining" subtitle="Sequential asynchronous execution." color="text-fuchsia-500" />
              <CodeBlock title="Functional result passing" code={`new Promise((resolve) => {\n  resolve(2);\n})\n.then(num => num * 2)\n.then(num => num * 3)\n.then(result => console.log(result));\n\n// Output: 12`} />
              <div className="p-4 bg-fuchsia-500/5 border border-fuchsia-500/10 rounded-2xl text-[10px] text-fuchsia-600 font-black italic border-transparent">👉 Each .then() passes result to next link in the chain.</div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Error Handling vs Chaining ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent">
        <div className="p-12 bg-white dark:bg-gray-800 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl relative overflow-hidden group italic border-transparent border-transparent">
           <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform italic border-transparent">
              <ShieldAlert size={200} className="text-rose-500 italic border-transparent" />
           </div>
           <SectionHeader icon={AlertTriangle} title="9. Error Architecture" subtitle="Catching failures gracefully." color="text-rose-500" />
           <div className="grid md:grid-cols-2 gap-12 mt-12 italic border-transparent">
              <div className="space-y-6 italic border-transparent">
                 <p className="text-gray-500 font-medium italic underline decoration-transparent italic border-transparent">Use the terminal .catch() block to handle any failure that occurs anywhere in your promise chain.</p>
                 <CodeBlock title="Global catch pattern" code={`new Promise((resolve, reject) => {\n  reject("Something went wrong!");\n})\n.then(res => console.log(res))\n.catch(err => console.log(err));`} />
              </div>
              <div className="p-8 bg-rose-500/5 border border-rose-500/10 rounded-[3rem] text-center italic border-transparent self-center">
                 <div className="text-rose-500 mb-4 italic italic font-sans italic border-transparent">
                    <History size={48} className="mx-auto italic border-transparent" />
                 </div>
                 <h5 className="text-2xl font-black italic tracking-tighter text-rose-600 mb-2 italic border-transparent underline decoration-transparent border-transparent">12. Avoid Common Mistakes</h5>
                 <div className="space-y-4 text-left italic border-transparent">
                    <div className="flex gap-4 italic border-transparent border-transparent border-transparent border-transparent border-transparent">
                       <CircleSlash size={16} className="text-rose-500 shrink-0 italic border-transparent" />
                       <span className="text-[10px] text-gray-500 font-black italic border-transparent border-transparent">Not returning inside .then()</span>
                    </div>
                    <div className="flex gap-4 italic border-transparent border-transparent border-transparent border-transparent border-transparent">
                       <CircleSlash size={16} className="text-rose-500 shrink-0 italic border-transparent" />
                       <span className="text-[10px] text-gray-500 font-black italic border-transparent border-transparent">Nested promises (callback hell redux)</span>
                    </div>
                    <div className="flex gap-4 italic border-transparent border-transparent border-transparent border-transparent border-transparent">
                       <CircleSlash size={16} className="text-rose-500 shrink-0 italic border-transparent" />
                       <span className="text-[10px] text-gray-500 font-black italic border-transparent border-transparent">Ignoring errors (always use .catch)</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent">
        <SectionHeader icon={Grid} title="10. Static Promise Methods" subtitle="Executing multiple futures orchestration." color="text-indigo-500" />
        <div className="grid lg:grid-cols-2 gap-8 italic border-transparent">
           {[
             { 
               title: "10.1 Promise.all()", 
               desc: "Runs multiple promises in parallel and waits for ALL to resolve success.", 
               code: 'Promise.all([\n  Promise.resolve("A"),\n  Promise.resolve("B")\n]).then(res => console.log(res)); // ["A", "B"]', 
               icon: Layout, 
               color: "indigo" 
             },
             { 
               title: "10.2 Promise.race()", 
               desc: "Returns the result of whichever promise completes first (fastest win).", 
               code: 'Promise.race([\n  new Promise(res => setTimeout(() => res("Fast"), 100)),\n  new Promise(res => setTimeout(() => res("Slow"), 200))\n]).then(console.log);', 
               icon: CloudLightning, 
               color: "amber" 
             },
             { 
               title: "10.3 Promise.allSettled()", 
               desc: "Waits until all promises finish, returning all results (success or failure).", 
               code: '// Returns array of status objects', 
               icon: Server, 
               color: "sky" 
             },
             { 
               title: "10.4 Promise.any()", 
               desc: "Returns the very first promise that resolves successfully (ignores errors).", 
               code: '// Returns first success', 
               icon: Sparkles, 
               color: "emerald" 
             }
           ].map((m, i) => (
              <div key={i} className={`p-8 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-${m.color}-500/10 shadow-xl group hover:-translate-y-2 transition-transform italic h-full flex flex-col border-transparent`}>
                 <div className="flex justify-between items-center mb-6 italic border-transparent">
                    <h4 className="text-xl font-black italic tracking-tighter italic border-transparent underline decoration-transparent">{m.title}</h4>
                    <div className={`p-3 rounded-xl bg-${m.color}-500/10 text-${m.color}-500 italic border-transparent`}>
                       <m.icon size={20} />
                    </div>
                 </div>
                 <p className="text-gray-500 text-xs font-medium italic underline decoration-transparent mb-6 italic border-transparent">{m.desc}</p>
                 <div className="mt-auto italic border-transparent">
                    {m.code !== '// Returns array of status objects' && m.code !== '// Returns first success' ? <CodeBlock code={m.code} /> : <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded-2xl italic text-[10px] font-mono text-gray-400 border-transparent">{m.code}</div>}
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* ── Section 7: Modern Fetch ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
         <div className="bg-gray-950 rounded-[4rem] p-12 border border-white/5 relative overflow-hidden group italic shadow-2xl border-transparent">
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-110 transition-transform italic border-transparent">
               <Globe2 size={240} className="text-indigo-500 italic border-transparent" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center italic border-transparent">
               <div className="md:w-1/3 italic border-transparent">
                  <SectionHeader icon={Network} title="11. Real-World API" subtitle="The production standard for networking." color="text-indigo-500" />
                  <p className="text-gray-500 text-sm font-medium italic underline decoration-transparent italic border-transparent pb-3 underline decoration-transparent">Fetch uses promises to handle network requests efficiently across modern web browsers.</p>
               </div>
               <div className="flex-1 italic border-transparent">
                  <CodeBlock title="The Fetch API" code={`fetch("https://jsonplaceholder.typicode.com/posts")\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.log(err));`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Pro Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic border-transparent border-transparent">
        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={Lightbulb} title="Expert Strategies" subtitle="Industry advice from 15+ years of experience." color="text-amber-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 italic border-transparent">
              {[
                { label: "Prefer Async/Await", text: "Modern syntax is even cleaner. Use async keywords with try/catch for the best promise experience.", icon: FastForward, color: "text-indigo-500" },
                { label: "Always Handle Errors", text: "Silent failures are hard to debug. Ensure every chain or async block has robust error handling.", icon: ShieldAlert, color: "text-rose-500" },
                { label: "Parallel Performance", text: "Use Promise.all() when requests don't depend on each other. It's significantly faster.", icon: Zap, color: "text-emerald-500" },
                { label: "Keep Chains Clean", text: "Avoid deep nesting. Keep your chains linear and return values clearly between links.", icon: Repeat, color: "text-fuchsia-500" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start group italic border-transparent border-transparent border-transparent">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${tip.color} group-hover:scale-110 transition-transform italic border-transparent border-transparent`}>
                      <tip.icon size={20} />
                   </div>
                   <div className="flex flex-col italic border-transparent border-transparent">
                      <h6 className={`text-sm font-black italic underline decoration-transparent ${tip.color} block mb-1 uppercase tracking-widest italic border-transparent`}>🚀 {tip.label}</h6>
                      <p className="text-[10px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans italic border-transparent border-transparent">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="space-y-8 italic border-transparent border-transparent">
           <SectionHeader icon={Target} title="14. Skills Challenges" subtitle="Test your asynchronous orchestration capabilities." color="text-fuchsia-500" />
           <div className="grid grid-cols-1 gap-4 italic border-transparent">
              {[
                { title: "3-Second Resolve", desc: "Create a promise that resolves successfully after exactly 3000ms.", icon: Timer },
                { title: "Chain Triplet", desc: "Build a chain with three .then() calls passing data forward.", icon: Repeat },
                { title: "Error Guard", desc: "Implement a robust failure handler using the .catch() syntax.", icon: ShieldAlert },
                { title: "API Fetch Lab", desc: "Retrieve post data from a public API and log the JSON object.", icon: Globe2 }
              ].map((chal, i) => (
                <div key={i} className="p-8 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-4 group relative overflow-hidden italic border-transparent border-transparent decoration-transparent border-transparent">
                   <div className="flex justify-between items-center italic border-transparent">
                      <h5 className="text-white font-black italic flex items-center gap-3 italic border-transparent border-transparent underline decoration-transparent border-transparent">
                         <div className="w-2 h-2 rounded-full bg-fuchsia-500 border-transparent"></div> {chal.title}
                      </h5>
                      <span className="text-[8px] font-black text-gray-500 italic tracking-[0.3em] uppercase italic border-transparent">TASK #{i+1}</span>
                   </div>
                   <p className="text-gray-500 text-[10px] italic leading-tight italic border-transparent border-transparent">{chal.desc}</p>
                   <div className="p-4 bg-white/5 border border-white/10 rounded-xl font-mono text-[9px] text-fuchsia-400 group-hover:border-fuchsia-500/30 transition-colors italic border-transparent">Ready to Implement</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans italic border-transparent border-transparent">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mx-auto mb-10 italic border-transparent"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight italic border-transparent border-transparent">
          Deferred Logic. <br /> Total Sequential Control.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed italic border-transparent border-transparent">
          Promises are the heart of modern asynchronous JavaScript. By moving away from nested callbacks to linear, readable chains, you create a codebase that is not only easier to debug but also prepared for high-performance parallel execution and modern API integration.
        </p>
      </footer>

    </div>
  );
};

export default JsPromises;