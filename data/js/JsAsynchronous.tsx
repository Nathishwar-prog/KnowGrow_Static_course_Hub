import React, { useState } from 'react';
import { 
  Zap, 
  Clock, 
  Activity, 
  Layers, 
  Code2, 
  CheckCircle, 
  TriangleAlert, 
  Globe, 
  Terminal, 
  ArrowRight,
  Monitor,
  Cpu,
  RefreshCw,
  Play,
  Copy,
  Check,
  MessageSquare,
  FileUp,
  Bell
} from 'lucide-react';

// ─── Reusable Components ──────────────────────────────────────────────────────

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
            <span className="ml-2 text-xs font-medium text-gray-400 uppercase tracking-widest">{title}</span>
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2">
      <div className={`p-2 rounded-xl bg-gray-100 dark:bg-gray-800 mr-4 shadow-sm ${color}`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-14 font-medium">{subtitle}</p>}
  </div>
);

const JsAsynchronous: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-sky-500/30">
      
      {/* ── Hero Header ── */}
      <header className="max-w-5xl mx-auto text-center mb-20 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-sm font-bold mb-6 border border-sky-200 dark:border-sky-800 shadow-sm animate-pulse">
          <Zap size={16} /> MODERN JS GUIDE
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Asynchronous</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the art of non-blocking execution. Build faster, smoother applications by handling tasks without freezing the main thread.
        </p>
      </header>

      {/* ── Section 1: What is Asynchronous JS? ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
              <SectionHeader icon={Clock} title="1. What is Async JS?" color="text-indigo-500" />
              <div className="space-y-6">
                <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
                  <p className="text-lg font-bold text-indigo-900 dark:text-indigo-200 mb-2">👉 Definition:</p>
                  <p className="text-indigo-700 dark:text-indigo-300 italic text-xl font-medium">
                    “Executing tasks without blocking the main thread”
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Cpu size={20} className="text-gray-400" /> 🧠 Simple Idea
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0 font-bold text-gray-500">S</div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Synchronous</p>
                        <p className="text-sm text-gray-500">One task at a time (wait → next)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center shrink-0 font-bold text-white shadow-lg shadow-sky-500/30">A</div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white text-sky-500">Asynchronous</p>
                        <p className="text-sm text-gray-500">Start task → move on → finish later</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Activity size={24} className="text-rose-500" /> 🔹 2. Synchronous vs Asynchronous
              </h3>
              
              <div className="space-y-4">
                <p className="font-black text-xs uppercase tracking-widest text-gray-400 mb-2">🔸 Synchronous Example</p>
                <CodeBlock title="Synchronous Code" code={`console.log("Start");

for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log("End");`} />
                <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-xl font-mono text-xs text-green-400 border border-gray-800">
                  <Terminal size={14} /> Output: Start, 0, 1, 2, End
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Async Example & Why programming ── */}
      <section className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
          <p className="font-black text-xs uppercase tracking-widest text-sky-500 mb-4">🔸 Asynchronous Example</p>
          <CodeBlock title="Asynchronous Code" code={`console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 2000);

console.log("End");`} />
          <div className="space-y-2 font-mono text-xs p-4 bg-gray-950 rounded-xl border border-gray-800">
             <div className="flex justify-between items-center text-gray-500 border-b border-gray-800 pb-2 mb-2 italic">
               <span>Output Sequence</span>
               <Clock size={12} />
             </div>
             <p className="text-white">Start</p>
             <p className="text-white">End</p>
             <p className="text-sky-400 py-1 bg-sky-400/10 px-2 rounded mt-2 border border-sky-400/20 italic">(wait 2 sec)</p>
             <p className="text-green-400 font-bold">Async Task</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-gray-900 dark:from-black dark:to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Zap size={120} className="text-sky-500" />
          </div>
          <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
             <CheckCircle size={32} className="text-sky-500" /> 🔹 3. Why Async?
          </h2>
          
          <div className="grid grid-cols-2 gap-6 relative z-10">
            <div className="space-y-4">
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">👉 Without async:</p>
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl space-y-3">
                <div className="flex items-center gap-3 text-red-400 font-bold">
                  <TriangleAlert size={18} /> UI freezes ❌
                </div>
                <div className="flex items-center gap-3 text-red-400 font-bold">
                  <Activity size={18} /> Slow performance ❌
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">👉 With async:</p>
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl space-y-3">
                <div className="flex items-center gap-3 text-emerald-400 font-bold">
                  <Monitor size={18} /> Smooth UI ✅
                </div>
                <div className="flex items-center gap-3 text-emerald-400 font-bold">
                  <Zap size={18} /> Faster apps ✅
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Event Loop (Core Concept) ── */}
      <section className="max-w-6xl mx-auto mb-20 bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"></div>
        <SectionHeader icon={RefreshCw} title="4. Event Loop (Core Concept 🔥)" subtitle="The engine behind JavaScript's non-blocking nature." color="text-purple-500" />
        
        <div className="grid md:grid-cols-4 gap-6 mt-12 relative">
          {[
            { title: 'Call Stack', desc: 'Executes code', icon: Layers, color: 'bg-orange-500' },
            { title: 'Web APIs', desc: 'Handles async tasks', icon: Globe, color: 'bg-blue-500' },
            { title: 'Callback Queue', desc: 'Stores completed tasks', icon: Terminal, color: 'bg-green-500' },
            { title: 'Event Loop', desc: 'Moves tasks to stack', icon: RefreshCw, color: 'bg-purple-500' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={32} />
              </div>
              <h4 className="font-black text-gray-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-8 left-[calc(25%*i+18%)] w-[14%] border-t-2 border-dashed border-gray-300 dark:border-gray-600">
                  <ArrowRight size={16} className="absolute -right-2 -top-[9px] text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
             <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">👉 Flow:</h3>
             <div className="flex flex-wrap items-center gap-3 font-bold text-gray-700 dark:text-gray-300">
               <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">Call Stack</span>
               <ArrowRight className="text-gray-400" />
               <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">Web API</span>
               <ArrowRight className="text-gray-400" />
               <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">Callback Queue</span>
               <ArrowRight className="text-gray-400" />
               <span className="px-4 py-2 bg-purple-500 text-white rounded-xl shadow-lg shadow-purple-500/30">Event Loop</span>
               <ArrowRight className="text-gray-400" />
               <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">Call Stack</span>
             </div>
          </div>
          <div className="w-full md:w-64 aspect-video bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center p-6 text-white text-center shadow-xl">
             <p className="font-bold">Event Loop checks if Stack is <span className="underline">EMPTY</span> before pushing waiting tasks.</p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Ways to Handle Async ── */}
      <section className="max-w-6xl mx-auto mb-20 space-y-10">
        <SectionHeader icon={Code2} title="5. Ways to Handle Asynchronous Code" subtitle="From old methods to modern elegant solutions." color="text-amber-500" />
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Callbacks */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center justify-between">
               <span>🔸 5.1 Callbacks <span className="text-gray-400 font-medium text-sm ml-2">(Old Method)</span></span>
               <Terminal size={20} className="text-gray-400" />
            </h3>
            <CodeBlock title="Callback Sample" code={`function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 2000);
}

fetchData(function(data) {
    console.log(data);
});`} />
            <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-700 dark:text-amber-400">
               <p className="font-black flex items-center gap-2 mb-2 italic">⚠️ Problem: Callback Hell</p>
               <CodeBlock language="javascript" code={`doTask1(() => {
    doTask2(() => {
        doTask3(() => {
            // messy ❗
        });
    });
});`} />
            </div>
          </div>

          {/* Promises */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center justify-between">
               <span>🔸 5.2 Promises <span className="text-sky-500 font-medium text-sm ml-2">(Improved 🔥)</span></span>
               <Zap size={20} className="text-sky-500" />
            </h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-400 text-xs uppercase mb-3">Creating Promise</p>
                <CodeBlock code={`const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 2000);
});`} />
              </div>
              <div>
                <p className="font-bold text-gray-400 text-xs uppercase mb-3">Using Promise</p>
                <CodeBlock code={`promise
    .then(result => console.log(result))
    .catch(err => console.log(err));`} />
              </div>
            </div>
          </div>
        </div>

        {/* Async/Await */}
        <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-[1px] rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.9rem]">
             <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
               <div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                    <Zap size={32} className="text-sky-500" /> 🔸 5.3 Async/Await
                  </h3>
                  <p className="text-sky-500 font-bold uppercase tracking-widest text-sm mt-1">Modern Standard 🔥🔥</p>
               </div>
               <div className="px-6 py-3 bg-sky-500 text-white rounded-2xl font-bold shadow-lg shadow-sky-500/30 flex items-center gap-2">
                 <Play size={18} /> Most readable
               </div>
             </div>
             
             <div className="grid lg:grid-cols-2 gap-10">
               <div className="space-y-6">
                 <p className="text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                   Async/Await is syntactic sugar built on top of Promises. It makes asynchronous code look and behave a bit more like synchronous code.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 font-bold text-gray-800 dark:text-gray-200">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs"><Check size={14} /></div>
                      Cleaner syntax
                    </li>
                    <li className="flex items-center gap-3 font-bold text-gray-800 dark:text-gray-200">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs"><Check size={14} /></div>
                      Better error handling with try/catch
                    </li>
                 </ul>
               </div>
               <CodeBlock title="Async/Await Pattern" code={`async function getData() {
    let data = await promise;
    console.log(data);
}`} />
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Common APIs & Example ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Globe size={28} className="text-sky-500" /> 🔹 6. Common Async APIs
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'setTimeout()', color: 'bg-orange-500' },
                { name: 'setInterval()', color: 'bg-amber-500' },
                { name: 'fetch()', color: 'bg-sky-500' },
                { name: 'XMLHttpRequest', color: 'bg-indigo-500' },
                { name: 'Event listeners', color: 'bg-purple-500' }
              ].map((api, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 group hover:border-sky-500 transition-colors">
                  <div className={`w-2 h-8 ${api.color} rounded-full`}></div>
                  <span className="font-bold text-gray-700 dark:text-gray-200">{api.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
             <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Play size={28} className="text-green-500" /> 🔹 7. Complete Example 🎯
            </h3>
            <CodeBlock title="User Loader" code={`function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: "Karthick" });
        }, 2000);
    });
}

async function showUser() {
    console.log("Loading...");
    
    let user = await getUser();
    
    console.log(user.name);
}

showUser();`} />
            <div className="p-4 bg-black rounded-xl border border-gray-800 font-mono text-xs">
               <p className="text-gray-500 italic mb-2">// 🎯 Output:</p>
               <p className="text-white">Loading...</p>
               <p className="text-gray-400 italic py-1">(wait 2 sec)</p>
               <p className="text-emerald-400 font-bold">Karthick</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Real World Example ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-gray-900 rounded-[3rem] p-10 shadow-2xl border border-gray-800 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-5">
             <RefreshCw size={200} className="text-sky-500 animate-[spin_10s_linear_infinite]" />
           </div>
           
           <div className="relative z-10">
              <h2 className="text-4xl font-black mb-4 flex items-center gap-4">
                <Globe size={40} className="text-sky-400" /> 🔹 8. Real-World Example 🌍
              </h2>
              <p className="text-xl text-gray-400 font-medium mb-10 max-w-2xl">
                The <span className="text-sky-400 font-bold underline decoration-sky-400/30">Fetch API</span> is the most common use of asynchronous code in modern web development.
              </p>

              <div className="grid lg:grid-cols-5 gap-10 items-start">
                 <div className="lg:col-span-3">
                   <CodeBlock title="Fetching Posts" code={`async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    
    console.log(data);
}`} />
                 </div>
                 <div className="lg:col-span-2 space-y-6 pt-4">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                       <h4 className="font-bold text-sky-400 mb-2 uppercase text-xs tracking-widest">How it works:</h4>
                       <ul className="space-y-3">
                         {[
                           'Browser sends network request',
                           'JS waits (await) for server response',
                           'Response converted to JSON',
                           'Data used in UI'
                         ].map((text, i) => (
                           <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                             <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-[10px] font-bold">{i+1}</div>
                             {text}
                           </li>
                         ))}
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 7: Mistakes & Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
           <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
             <TriangleAlert size={32} className="text-rose-500" /> 🔹 9. Common Mistakes ⚠️
           </h3>
           <div className="space-y-6">
              {[
                { 
                  title: 'Blocking code', 
                  desc: 'while(true) {} // freezes browser ❌',
                  icon: Monitor
                },
                { 
                  title: 'Not handling errors', 
                  desc: 'Always use .catch() or try...catch',
                  icon: TriangleAlert
                },
                { 
                  title: 'Forgetting async/await rules', 
                  desc: 'Forgot await? You get a Promise object instead of data.',
                  icon: Clock
                }
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-rose-50 dark:bg-rose-900/10 rounded-2xl border border-rose-100 dark:border-rose-800/50">
                   <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-500/30">
                     <m.icon size={20} />
                   </div>
                   <div>
                     <p className="font-black text-gray-900 dark:text-white mb-1">❌ {m.title}</p>
                     <p className="text-sm text-rose-700 dark:text-rose-400 font-medium font-mono">{m.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
           <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
             <Monitor size={32} className="text-emerald-500" /> 🔹 10. Real-World Use Cases 🌍
           </h3>
           <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'API calls', sub: 'Login, data fetch', icon: Globe },
                { name: 'Chat apps', sub: 'Real-time sync', icon: MessageSquare },
                { name: 'Notifications', sub: 'Instant updates', icon: Bell },
                { name: 'File uploads', sub: 'Background transfer', icon: FileUp },
                { name: 'Streaming data', sub: 'Video, Stocks', icon: Activity }
              ].map((u, i) => (
                <div key={i} className="p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 hover:scale-[1.02] transition-transform cursor-default">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-500/20">
                    <u.icon size={20} />
                  </div>
                  <p className="font-black text-gray-900 dark:text-white mb-1">{u.name}</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold opacity-80">{u.sub}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer Quote ── */}
      <footer className="max-w-4xl mx-auto text-center py-20">
         <div className="h-px w-24 bg-sky-500/30 mx-auto mb-10"></div>
         <p className="text-2xl font-black text-gray-400 dark:text-gray-600 mb-4 font-mono uppercase tracking-[0.2em]">
           Await the Future.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
           JS Asynchronous programming is not just a feature — it's the core of modern web performance.
         </p>
      </footer>

    </div>
  );
};

export default JsAsynchronous;