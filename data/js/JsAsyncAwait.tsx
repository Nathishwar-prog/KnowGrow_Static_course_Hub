import React, { useState, useMemo, useEffect } from 'react';
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
  Clock,
  Waves,
  Play,
  Pause,
  CloudLightning,
  ShieldCheck,
  FastForward,
  Timer,
  Network,
  Download,
  Upload,
  CreditCard,
  UserCheck,
  Rocket
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

const JsAsyncAwait: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<'sequential' | 'parallel'>('sequential');
  const [progress, setProgress] = useState({ a: 0, b: 0 });
  const [results, setResults] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);

  const runSimulation = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setResults([]);
    setProgress({ a: 0, b: 0 });
    setStartTime(Date.now());
    setElapsed(0);

    const fetchData = (id: 'a' | 'b', delay: number) => {
      return new Promise<string>(resolve => {
        let current = 0;
        const interval = setInterval(() => {
          current += 5;
          setProgress(prev => ({ ...prev, [id]: current }));
          if (current >= 100) {
            clearInterval(interval);
            resolve(`Data ${id.toUpperCase()}`);
          }
        }, delay / 20);
      });
    };

    if (mode === 'sequential') {
      const res1 = await fetchData('a', 1500);
      setResults(prev => [...prev, res1]);
      const res2 = await fetchData('b', 1500);
      setResults(prev => [...prev, res2]);
    } else {
      const promiseA = fetchData('a', 1500);
      const promiseB = fetchData('b', 1500);
      const [r1, r2] = await Promise.all([promiseA, promiseB]);
      setResults([r1, r2]);
    }

    setIsRunning(false);
  };

  useEffect(() => {
    let timer: any;
    if (isRunning) {
      timer = setInterval(() => {
        setElapsed(Date.now() - (startTime || 0));
      }, 50);
    }
    return () => clearInterval(timer);
  }, [isRunning, startTime]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <Clock size={14} className="fill-current" /> ASYNCHRONOUS PATTERNS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Async<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 drop-shadow-2xl">
            Await
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the art of <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500 underline-offset-4">non-blocking</span> execution with modern, readable syntax.
        </p>
      </header>

      {/* ── Section 1-2: Concepts ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Waves} title="1. Async Fundamentals" subtitle="Handling time-dependent tasks without freezing the UI." color="text-sky-500" />
            <div className="space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                👉 JavaScript is single-threaded, but it handles <span className="text-sky-500 font-bold uppercase italic tracking-wider">APIs</span>, <span className="text-indigo-500 font-bold uppercase italic tracking-wider">Timers</span>, and <span className="text-blue-500 font-bold uppercase italic tracking-wider">File Loading</span> asynchronously.
              </p>
              
              <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <CloudLightning size={120} className="text-sky-500" />
                 </div>
                 <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.4em] mb-4">2. What is Async/Await?</h4>
                 <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium leading-relaxed italic">
                   "A modern way to handle Promises that makes asynchronous code look like synchronous (normal) code."
                 </p>
                 <div className="flex gap-4">
                    <div className="flex-1 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700">
                       <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">Benefit</span>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Synchronous Style</span>
                    </div>
                    <div className="flex-1 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700">
                       <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">Mechanism</span>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Promise Wrapper</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl overflow-hidden flex flex-col justify-between">
               <div className="flex justify-between items-center mb-10">
                  <h3 className="text-white font-black text-xl flex items-center gap-3">
                     <Rocket className="text-sky-500 animate-pulse" size={24} /> Async Lab
                  </h3>
                  <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-sky-400">
                    Time: {(elapsed / 1000).toFixed(2)}s
                  </div>
               </div>

               <div className="space-y-8 flex-1">
                  {[
                    { id: 'a', label: 'User Data', color: 'bg-sky-500' },
                    { id: 'b', label: 'Recent Posts', color: 'bg-indigo-500' }
                  ].map((req, i) => (
                    <div key={i} className="space-y-3">
                       <div className="flex justify-between items-center text-[10px] font-black uppercase text-gray-400 tracking-widest">
                          <span>Request {(i+1).toString().padStart(2, '0')} : {req.label}</span>
                          <span>{progress[req.id as 'a'|'b']}%</span>
                       </div>
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${req.color} transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.5)]`}
                            style={{ width: `${progress[req.id as 'a'|'b']}%` }}
                          ></div>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="mt-12 space-y-4">
                  <div className="flex gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/5">
                     <button 
                       onClick={() => setMode('sequential')}
                       className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'sequential' ? 'bg-sky-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                     >
                       Sequential
                     </button>
                     <button 
                       onClick={() => setMode('parallel')}
                       className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'parallel' ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                     >
                       Parallel
                     </button>
                  </div>
                  <button 
                    onClick={runSimulation}
                    disabled={isRunning}
                    className={`w-full py-4 rounded-3xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all ${isRunning ? 'bg-gray-800 text-gray-500 opacity-50' : 'bg-white text-[#0b1120] hover:scale-[0.98] shadow-xl shadow-sky-500/20'}`}
                  >
                    {isRunning ? <RefreshCw className="animate-spin" size={18} /> : mode === 'sequential' ? <Play size={18} /> : <CloudLightning size={18} />}
                    {isRunning ? 'EXECUTING...' : `RUN ${mode.toUpperCase()} FLOW`}
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3-4: Keywords ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-1000">
               <Zap size={100} className="text-sky-500" />
            </div>
            <SectionHeader icon={Terminal} title="3. async Function" subtitle="Transforming functions into Promise factories." color="text-sky-500" />
            <p className="text-gray-500 mb-8 font-medium">An async function <span className="text-sky-600 font-bold italic">always</span> returns a Promise, even if you return a raw value.</p>
            <CodeBlock title="Implicit Promise" code={`async function myFunc() {
    return "Hello"; 
}
// Returns Promise { "Hello" }`} />
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-1000">
               <Pause size={100} className="text-indigo-500" />
            </div>
            <SectionHeader icon={Timer} title="4. await Keyword" subtitle="Pausing the clock until data arrives." color="text-indigo-500" />
            <p className="text-gray-500 mb-8 font-medium">Used <span className="text-indigo-600 font-bold underline decoration-indigo-500/30">inside</span> async functions. It pauses execution until the promise resolves.</p>
            <CodeBlock title="The Pause Mechanism" code={`let result = await somePromise;
// Execution waits here...`} />
         </div>
      </section>

      {/* ── Section 5-6: Example & Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative z-10">
               <SectionHeader icon={Code2} title="5. Basic Example & 6. Evolution" subtitle="Cleaning up the Promise syntax." color="text-white" />
               <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
                  <div className="space-y-6">
                     <p className="text-gray-400 font-medium leading-relaxed">
                        Notice how much cleaner the async code looks compared to traditional `.then()` chaining. No more "callback hell" or deep nesting.
                     </p>
                     <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                        <h4 className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-4">The Promise Delay</h4>
                        <CodeBlock code={`function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data received"), 2000);
    });
}`} />
                     </div>
                  </div>
                  <div className="space-y-8">
                     <CodeBlock title="The Async/Await Way (Modern)" code={`async function getData() {
    console.log("Loading...");
    let data = await fetchData();
    console.log(data); // "Data received"
}`} />
                     <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                        <AlertTriangle className="text-amber-500" size={16} />
                        <span>Comparison: .then() is often harder to read when nested.</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Error handling ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={ShieldCheck} title="7. Error Handling" subtitle="Using try...catch for ironclad async code." color="text-emerald-500" />
         <div className="bg-white dark:bg-gray-800 p-10 rounded-[4rem] shadow-xl border border-gray-100 dark:border-gray-700 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-1000">
               <AlertTriangle size={120} className="text-emerald-500" />
            </div>
            <p className="text-gray-500 mb-8 font-medium">Since await handles the resolution, we must use traditional <code className="text-emerald-500 font-bold">try...catch</code> blocks to handle rejections.</p>
            <CodeBlock title="Safe Data Fetching" code={`async function getData() {
    try {
        let data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}`} />
            <div className="mt-8 flex items-center gap-4 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
               <CheckCircle className="text-emerald-500" size={20} />
               <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Golden Rule: Always wrap your waits in a try/catch.</span>
            </div>
         </div>
      </section>

      {/* ── Section 8 & 11: Real API ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Globe} title="8. Real API & 11. Complete Example" subtitle="Fetching production data from JSONPlaceholder." color="text-blue-500" />
         <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
               <CodeBlock title="Fetch User List" code={`async function getUsers() {
    let response = await fetch("https://json.../users");
    let data = await response.json();
    console.log(data);
}`} />
               <div className="mt-6 flex items-center gap-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                  <div className="p-3 bg-blue-500 text-white rounded-xl shadow-lg">
                     <Download size={20} />
                  </div>
                  <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">Standard pattern for REST API consumption in modern frontends.</p>
               </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
               <CodeBlock title="Complex Logic Example" code={`async function getPosts() {
    try {
        let res = await fetch("https://json.../posts");
        let posts = await res.json();
        let titles = posts.map(p => p.title);
        console.log(titles.slice(0, 5));
    } catch (err) {
        console.log("Error fetching posts");
    }
}`} />
               <div className="mt-6 p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">
                  Data Transformation Pipeline
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9-10: Execution Modes ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
               <SectionHeader icon={FastForward} title="9. Sequential vs 10. Parallel" subtitle="Unlocking performance with parallelism." color="text-amber-500" />
               <div className="space-y-6">
                  <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl border-l-4 border-l-sky-500">
                     <h4 className="text-xs font-black text-sky-500 uppercase tracking-widest mb-4">Sequential Execution</h4>
                     <p className="text-sm text-gray-500 mb-4 font-medium">Runs one after another. Total time = Request 1 + Request 2.</p>
                     <CodeBlock code={`let a = await fetchData1();
let b = await fetchData2();`} />
                  </div>
                  <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl border-l-4 border-l-indigo-500">
                     <h4 className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-4">Parallel Execution (Promise.all)</h4>
                     <p className="text-sm text-gray-500 mb-4 font-medium">Runs both simultaneously. Total time = Max(Req 1, Req 2). 🚀</p>
                     <CodeBlock code={`let [a, b] = await Promise.all([
    fetchData1(), fetchData2()
]);`} />
                  </div>
               </div>
            </div>
            
            <div className="bg-indigo-900/10 p-12 rounded-[4rem] border border-indigo-500/20 text-center flex flex-col items-center group">
               <div className="p-5 bg-indigo-500 text-white rounded-[2.5rem] mb-8 shadow-2xl shadow-indigo-500/40 group-hover:rotate-[360deg] transition-all duration-1000">
                  <Activity size={48} />
               </div>
               <h3 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">Performance Boost</h3>
               <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8 font-medium leading-relaxed">By using <span className="text-indigo-500 font-bold">Promise.all</span>, you can reduce the loading time of your application by up to 50% or more depending on the number of concurrent requests.</p>
               <div className="flex gap-2">
                  <div className="px-5 py-2 rounded-xl bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-widest">Efficient</div>
                  <div className="px-5 py-2 rounded-xl bg-sky-500/10 text-sky-500 text-[10px] font-black uppercase tracking-widest">Optimized</div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 12: Mistakes ── */}
      <section className="max-w-5xl mx-auto mb-32">
         <SectionHeader icon={AlertTriangle} title="12. Common Mistakes" subtitle="Avoiding pitfalls in async flow." color="text-rose-600" />
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Outside Async', code: 'await fetch(); // ❌', desc: 'await must be inside an async function.' },
              { title: 'Forgetting Await', code: 'let d = fetch(); // ❗', desc: 'This returns the Promise object, not the data.' },
              { title: 'Missing Error Handler', code: 'fetch()... // ⚠️', desc: 'Always use try/catch to prevent unhandled rejections.' }
            ].map((err, i) => (
               <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
                  <div className="absolute top-4 right-4 text-rose-500/20 group-hover:text-rose-500 transition-colors">
                     <AlertTriangle size={24} />
                  </div>
                  <h4 className="font-black text-rose-500 text-xs uppercase tracking-widest mb-4">{err.title}</h4>
                  <code className="bg-rose-500/5 text-rose-600 p-2 rounded block text-xs font-mono mb-6">{err.code}</code>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">{err.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 13: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Network} title="13. Real-World Use Cases" subtitle="Where async behavior powers the web." color="text-indigo-500" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
           {[
             { title: 'API Ingestion', icon: CloudLightning, color: 'text-sky-500' },
             { title: 'Auth Systems', icon: UserCheck, color: 'text-emerald-500' },
             { title: 'File Handling', icon: Upload, color: 'text-amber-500' },
             { title: 'Payments', icon: CreditCard, color: 'text-rose-500' },
             { title: 'State Sync', icon: Layers, color: 'text-indigo-500' }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform overflow-hidden relative text-center">
                <div className={`p-4 rounded-2xl ${item.color} bg-opacity-10 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                   <item.icon size={24} className={item.color} />
                </div>
                <span className="font-black text-gray-900 dark:text-white text-[10px] block relative z-10 uppercase tracking-[0.2em]">{item.title}</span>
                <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${item.color} opacity-5 rounded-full group-hover:scale-[10] transition-transform duration-1000`}></div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Wait for it.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
           Asynchronous programming isn't about doing things at the same time,<br />
           it's about managing time so your application never stops responding to the human.
         </p>
      </footer>

    </div>
  );
};

export default JsAsyncAwait;