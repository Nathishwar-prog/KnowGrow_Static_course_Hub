import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  Timer, 
  Repeat, 
  Zap, 
  Power, 
  Terminal, 
  Activity, 
  Layout, 
  Info, 
  ArrowRight,
  Code2,
  CheckCircle,
  AlertTriangle,
  Play,
  RotateCcw,
  Monitor,
  Cpu,
  RefreshCw,
  PlusCircle,
  MinusCircle,
  Search,
  Box,
  Layers,
  ShieldCheck,
  Package
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
            title="Copy code"
          >
            {copied ? <CheckCircle size={14} className="text-green-400" /> : <Package size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsTiming: React.FC = () => {
  const [timeoutActive, setTimeoutActive] = useState(false);
  const [timeoutDone, setTimeoutDone] = useState(false);
  const [intervalVal, setIntervalVal] = useState(0);
  const [intervalActive, setIntervalActive] = useState(false);
  
  const timerRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  const startTimeout = () => {
    clearTimeout(timerRef.current);
    setTimeoutActive(true);
    setTimeoutDone(false);
    timerRef.current = setTimeout(() => {
      setTimeoutDone(true);
      setTimeoutActive(false);
    }, 2000);
  };

  const stopTimeout = () => {
    clearTimeout(timerRef.current);
    setTimeoutActive(false);
  };

  const startInterval = () => {
    if (intervalRef.current) return;
    setIntervalActive(true);
    intervalRef.current = setInterval(() => {
      setIntervalVal(p => p + 1);
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIntervalActive(false);
  };

  const resetInterval = () => {
    stopInterval();
    setIntervalVal(0);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <Clock size={14} className="fill-current" /> ASYNCHRONOUS EXERTION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 drop-shadow-2xl">
            Timing
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the flow of execution. Trigger events after <span className="text-gray-900 dark:text-white font-bold italic underline decoration-sky-500/30">delays</span> or repeat them spanning <span className="text-gray-900 dark:text-white font-bold italic underline decoration-indigo-500/30">intervals</span>.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is JS Timing?" subtitle="Controlling code execution over time." color="text-sky-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                JavaScript Timing refers to methods that allow you to execute code after a delay or repeatedly over time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: "Animations", icon: Play, desc: "Visual transitions" },
                   { label: "Auto Updates", icon: RefreshCw, desc: "Syncing data" },
                   { label: "API Polling", icon: Activity, desc: "Network status" },
                   { label: "UI Interactions", icon: Monitor, desc: "Debouncing input" }
                 ].map((item, i) => (
                   <div key={i} className="p-5 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/20">
                         <item.icon size={18} />
                      </div>
                      <div>
                         <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">{item.label}</span>
                         <span className="font-mono text-[10px] font-black text-gray-900 dark:text-white">{item.desc}</span>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-lg group hover:shadow-2xl transition-all h-full">
                <table className="w-full text-left">
                   <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                         <th className="py-4 px-4 text-xs font-black text-gray-400 uppercase tracking-widest">Function</th>
                         <th className="py-4 px-4 text-xs font-black text-gray-400 uppercase tracking-widest">Purpose</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                      <tr>
                         <td className="py-6 px-4 font-mono text-sky-500 font-bold">setTimeout()</td>
                         <td className="py-6 px-4 text-sm text-gray-500 font-medium">Runs code <span className="text-gray-900 dark:text-white font-black underline">ONCE</span> after delay</td>
                      </tr>
                      <tr>
                         <td className="py-6 px-4 font-mono text-indigo-500 font-bold">setInterval()</td>
                         <td className="py-6 px-4 text-sm text-gray-500 font-medium">Runs code <span className="text-gray-900 dark:text-white font-black underline">REPEATEDLY</span></td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Timing Playground ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Activity} title="2. Timing Lab Playground" subtitle="See timing functions in action with live visualizers." color="text-sky-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
             {/* Timeout Lab */}
             <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-[3rem] border border-gray-200 dark:border-gray-800 relative group overflow-hidden">
                   <div className="flex justify-between items-center mb-8">
                      <div className="flex gap-3 items-center">
                         <div className="p-3 rounded-xl bg-sky-500 text-white shadow-lg">
                            <Timer size={20} />
                         </div>
                         <h4 className="font-black text-gray-900 dark:text-white italic">setTimeout() Simulator</h4>
                      </div>
                      <div className="px-3 py-1 bg-sky-500/10 text-sky-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                         2s Delay
                      </div>
                   </div>
                   
                   <div className="flex justify-center items-center h-24 mb-6">
                      {timeoutActive ? (
                         <div className="w-16 h-16 rounded-full border-4 border-sky-500 border-t-transparent animate-spin" />
                      ) : timeoutDone ? (
                         <div className="text-emerald-500 flex flex-col items-center gap-2 animate-in zoom-in">
                            <CheckCircle size={48} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Executed!</span>
                         </div>
                      ) : (
                         <div className="text-gray-300 font-mono italic">Not running...</div>
                      )}
                   </div>

                   <div className="flex gap-4">
                      <button 
                        onClick={startTimeout}
                        className="flex-1 py-4 bg-sky-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all"
                      >
                         Run Timer
                      </button>
                      <button 
                         onClick={stopTimeout}
                         className="px-6 py-4 bg-gray-200 dark:bg-gray-700 text-gray-500 rounded-2xl text-xs font-black"
                      >
                         <Power size={18} />
                      </button>
                   </div>
                </div>
                <CodeBlock code={`setTimeout(() => {
  console.log("Done!");
}, 2000);`} />
             </div>

             {/* Interval Lab */}
             <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-[3rem] border border-gray-200 dark:border-gray-800 relative group overflow-hidden">
                   <div className="flex justify-between items-center mb-8">
                      <div className="flex gap-3 items-center">
                         <div className="p-3 rounded-xl bg-indigo-500 text-white shadow-lg">
                            <Repeat size={20} />
                         </div>
                         <h4 className="font-black text-gray-900 dark:text-white italic">setInterval() Simulator</h4>
                      </div>
                      <div className="px-3 py-1 bg-indigo-500/10 text-indigo-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                         1s Loop
                      </div>
                   </div>
                   
                   <div className="flex justify-center items-center h-24 mb-6">
                      <div className="text-6xl font-black text-indigo-500 font-mono tracking-tighter tabular-nums drop-shadow-xl">
                         {intervalVal}
                      </div>
                   </div>

                   <div className="flex gap-3">
                      <button 
                        onClick={startInterval}
                        disabled={intervalActive}
                        className={`flex-1 py-4 ${intervalActive ? 'bg-gray-100 text-gray-400' : 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'} rounded-2xl text-xs font-black uppercase tracking-widest transition-all`}
                      >
                         Start Interval
                      </button>
                      <button 
                        onClick={stopInterval}
                        className="px-6 py-4 bg-rose-500 text-white rounded-2xl text-xs font-black shadow-lg shadow-rose-500/30"
                      >
                         Stop
                      </button>
                      <button 
                        onClick={resetInterval}
                        className="px-6 py-4 bg-gray-200 dark:bg-gray-700 text-gray-500 rounded-2xl text-xs font-black"
                      >
                         <RotateCcw size={18} />
                      </button>
                   </div>
                </div>
                <CodeBlock code={`let id = setInterval(() => {
  count++;
}, 1000);`} />
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Stopping Timers ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Power} title="3. Stopping Timers" subtitle="How to clear memory and stop execution." color="text-rose-500" />
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
              <h4 className="text-2xl font-black text-gray-900 dark:text-white italic">clearTimeout()</h4>
              <p className="text-gray-500 font-medium leading-relaxed">Cancel a timer before it executes. Pass the variable that holds the timer ID.</p>
              <CodeBlock code={`let timer = setTimeout(() => {
  console.log("Won't run");
}, 3000);

clearTimeout(timer);`} title="Clear Manual Timer" />
           </div>

           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
              <h4 className="text-2xl font-black text-gray-900 dark:text-white italic">clearInterval()</h4>
              <p className="text-gray-500 font-medium leading-relaxed">Stops the repeated execution starting by setInterval. Essential for performance.</p>
              <CodeBlock code={`let interval = setInterval(() => {
  console.log("Running...");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);`} title="Stop After 5s" />
           </div>
        </div>
        <div className="mt-8 p-6 bg-rose-500/5 border border-rose-500/10 rounded-3xl">
           <p className="text-rose-600 dark:text-rose-400 text-sm font-black flex items-center gap-2">
              <ShieldCheck size={18} /> Always clear timers to prevent memory leaks in your applications.
           </p>
        </div>
      </section>

      {/* ── Section 4: Event Loop Visualizer ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-gradient-to-br from-indigo-950 to-black p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <Zap size={300} className="text-white" />
          </div>
          <SectionHeader icon={Zap} title="4. Visualizing the Event Loop 🧠" subtitle="Why 0ms is NEVER actually instant." color="text-sky-400" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center relative z-10">
             <div className="space-y-8">
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                   JavaScript uses an <span className="text-sky-400 font-bold">Event Loop</span>. Even with <code>0ms</code> delay, the code MUST go through the callback queue and wait for the stack to be empty.
                </p>
                <div className="space-y-4">
                   {[
                     { label: "1. Call Stack", text: "Current sync code executes here." },
                     { label: "2. Web APIs (Timers)", text: "Timers wait for their delay outside the main thread." },
                     { label: "3. Callback Queue", text: "Expired timers wait to move to the stack." },
                     { label: "4. Event Loop", text: "Pushes tasks from queue to stack when empty." }
                   ].map((item, i) => (
                     <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center text-[10px] font-black shrink-0">{i+1}</div>
                        <div>
                           <span className="text-white font-black text-sm block">{item.label}</span>
                           <span className="text-gray-500 text-xs">{item.text}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="space-y-6">
                <CodeBlock title="The 0ms Reality" code={`console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");`} />
                <div className="p-8 bg-black/40 backdrop-blur-xl rounded-[2.5rem] border border-white/10 flex justify-center items-center gap-6">
                   <div className="text-center">
                      <span className="text-[10px] font-black text-white/30 uppercase block mb-4">Flow Sequence</span>
                      <div className="flex gap-4 font-mono text-3xl font-black">
                         <span className="text-emerald-500">A</span>
                         <span className="text-gray-600">➔</span>
                         <span className="text-emerald-500">C</span>
                         <span className="text-gray-600">➔</span>
                         <span className="text-sky-500">B</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Real-World Scenarios ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Monitor} title="5. Real-World Use Cases" subtitle="Timing in production environment." color="text-indigo-500" />
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { 
               title: "Auto Session Logout", 
               icon: ShieldCheck, 
               color: "text-rose-500 bg-rose-500/10",
               code: 'setTimeout(() => alert("Session Expired"), 5000);' 
             },
             { 
               title: "Countdown UI", 
               icon: Timer, 
               color: "text-sky-500 bg-sky-500/10",
               code: 'setInterval(() => time--, 1000);' 
             },
             { 
               title: "Loader Removal", 
               icon: Layout, 
               color: "text-emerald-500 bg-emerald-500/10",
               code: 'setTimeout(() => loader.hide(), 3000);' 
             }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform duration-500">
                <div className={`p-4 rounded-2xl w-fit mb-6 ${item.color}`}>
                   <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">{item.title}</h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 font-mono text-[10px] text-gray-500 leading-relaxed overflow-x-auto">
                   {item.code}
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 6: Recommendations ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="6. Pro Recommendations" subtitle="Write cleaner, more stable timing logic." color="text-sky-500" />
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 space-y-6">
                <h4 className="text-2xl font-black text-gray-900 dark:text-white italic underline decoration-sky-500/30">setTimeout vs setInterval</h4>
                <p className="text-gray-500 font-medium leading-relaxed italic text-sm">
                   "Prefer recursive <code>setTimeout()</code> over <code>setInterval()</code>. It allows more control and prevents task accumulation if a task takes longer than the interval duration."
                </p>
                <CodeBlock code={`function repeat() {
  console.log("Running");
  setTimeout(repeat, 1000);
}
repeat();`} title="Recursive Timeout Loop" />
            </div>

            <div className="bg-indigo-950 p-10 rounded-[3rem] border border-white/5 space-y-8">
               <h4 className="text-2xl font-black text-white italic">Event Debouncing</h4>
               <p className="text-indigo-200/50 text-sm font-medium leading-relaxed">
                  Use timing to prevent heavy functions (like search) from firing too many times per second during user input.
               </p>
               <CodeBlock title="Debounce logic" code={`let timer;
function search() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("Searching...");
  }, 500);
}`} />
            </div>
        </div>

        {/* ── Tips Lab ── */}
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 relative overflow-hidden group shadow-2xl">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Delay Wrapper", code: "await new Promise(r => setTimeout(r, 2k));", icon: Zap, color: "text-amber-500 bg-amber-500/10" },
                { title: "Graphic Rule", code: "Use requestAnimationFrame for UI.", icon: Monitor, color: "text-sky-500 bg-sky-500/10" },
                { title: "Cleanup Tip", code: "Always clear timers on Unmount.", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-500/10" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-4 items-start">
                   <div className={`p-3 rounded-xl shrink-0 ${tip.color}`}>
                      <tip.icon size={20} />
                   </div>
                   <div>
                      <h5 className="font-black text-gray-900 dark:text-white text-lg italic tracking-tight">{tip.title}</h5>
                      <code className="text-[10px] text-gray-400 font-mono tracking-tighter">{tip.code}</code>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
            Time is Data.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
            Understanding JS Timing is fundamental for building interactive and high-performance applications.<br />
            Respect the Event Loop, and always manage your timers responsibly.
         </p>
      </footer>

    </div>
  );
};

export default JsTiming;