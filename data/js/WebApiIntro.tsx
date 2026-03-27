import React, { useState, useEffect } from 'react';
import {
  Globe, CodeXml, Layers, Boxes, Monitor, Zap, Search, Layout, 
  Database, MapPin, History, MousePointer2, Cpu, Bell, Clipboard, 
  Play, RefreshCw, Smartphone, ListTodo, Info, AlertCircle, 
  CheckCircle, Terminal, ArrowRight, ShieldCheck, Activity, 
  Wifi, Server, Timer, Share2, PanelTop, Table as TableIcon,
  Check, Copy
} from 'lucide-react';

// ─── Code Block with Copy ────────────────────────────────────────────────────
const CodeBlock = ({ code, title, language = 'js' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2.5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5 grayscale opacity-50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">{title}</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase">{language}</span>
        </div>
      )}
      <div className="absolute top-12 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-indigo-500 hover:text-white transition-all border border-gray-700 shadow-lg" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-[#0d1117] text-indigo-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Event Loop Simulator ────────────────────────────────────────────────────
const EventLoopSimulator = () => {
  const [stage, setStage] = useState(0);
  const [active, setActive] = useState(false);

  const stages = [
    { name: 'Call Stack', desc: 'JavaScript calls the Web API (e.g., setTimeout)' },
    { name: 'Web API Container', desc: 'The Browser handles the task in its own thread' },
    { name: 'Callback Queue', desc: 'The result waits for the Stack to be empty' },
    { name: 'Call Stack (Final)', desc: 'The callback function is executed' }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (active) {
      if (stage < 3) {
        timer = setTimeout(() => setStage(s => s + 1), 1500);
      } else {
        timer = setTimeout(() => { setActive(false); setStage(0); }, 3000);
      }
    }
    return () => clearTimeout(timer);
  }, [active, stage]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 flex gap-2">
         <div className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-200 dark:border-indigo-800/50 flex items-center gap-1.5">
            <RefreshCw className="w-3 h-3" /> Event Loop Engine
         </div>
      </div>

      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-4">
        <Cpu className="w-8 h-8 text-indigo-500" /> Behind the Scenes Simulation
      </h3>
      <p className="text-[10px] font-black text-gray-400 mb-10 uppercase tracking-[0.2em]">Asynchronous Web API Flow</p>

      <div className="grid lg:grid-cols-4 gap-4 mb-10">
         {stages.map((s, i) => (
           <div key={i} className={`p-5 rounded-2xl border-2 transition-all duration-500 flex flex-col items-center justify-center text-center gap-3 ${stage === i && active ? 'scale-105 border-indigo-500 bg-indigo-500/5 shadow-xl shadow-indigo-500/10' : 'border-gray-100 dark:border-gray-800 opacity-40'}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${stage === i && active ? 'bg-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-900 text-gray-400'}`}>
                 {i + 1}
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-tighter leading-none">{s.name}</h4>
              <p className="text-[9px] font-bold text-gray-500 leading-tight">{s.desc}</p>
           </div>
         ))}
      </div>

      <div className="flex flex-col items-center gap-6">
         <div className="w-full h-2 bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden relative">
            <div 
              className="absolute h-full bg-indigo-500 transition-all duration-[1500ms] ease-linear"
              style={{ width: `${active ? (stage + 1) * 25 : 0}%` }}
            ></div>
         </div>
         <button 
           onClick={() => { if(!active) setActive(true); }}
           disabled={active}
           className={`px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all ${active ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-indigo-500 text-white hover:scale-105 shadow-xl shadow-indigo-500/20'}`}
         >
           {active ? 'Simulator Running...' : 'Execute Async API Task'}
         </button>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const WebApiIntro: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#fdfdff] dark:bg-[#0a0c10] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-indigo-100 selection:text-indigo-700 dark:selection:bg-indigo-900/40">
      
      {/* ── Hero Header ── */}
      <header className="max-w-5xl mx-auto text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-indigo-400/10 to-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-tr from-indigo-500 to-indigo-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-indigo-500/20 transform hover:-rotate-6 transition-all duration-500">
          <Globe className="w-12 h-12 text-white shadow-xl" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-none uppercase">
          Web API <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-600">Intro</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The bridge between pure logic and the outside world. Master the tools provided by the browser to build truly interactive, modern web applications.
        </p>
      </header>

      {/* ── 1. What is a Web API? ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800/50">
            <Info className="w-4 h-4" /> Global Definition
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tighter">
            Browser Powers <br /> Beyond JS Core
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            A Web API is a set of built-in browser features that allow JavaScript to interact with the browser and the outside world. They are <strong>provided by the browser itself</strong>, not the JavaScript language core.
          </p>
          
          <div className="p-6 rounded-[2.5rem] bg-indigo-900 text-white shadow-xl flex items-start gap-4">
             <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Zap className="text-indigo-400 w-6 h-6" />
             </div>
             <div>
                <span className="text-indigo-300 font-black uppercase text-[10px] tracking-widest block mb-1">Simple Concept</span>
                <p className="text-xs font-bold text-indigo-100/70 leading-relaxed italic">
                  "Web APIs are tools provided by the browser that let JavaScript interact with the web environment."
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           {[
             { title: 'JavaScript Core', items: ['Variables & Types', 'Functions & Logic', 'Pure Math & Strings'], icon: <CodeXml />, color: 'bg-amber-500', bg: 'bg-amber-50/50 dark:bg-amber-950/10', border: 'border-amber-100' },
             { title: 'Web APIs', items: ['Access the DOM', 'Store & Fetch Data', 'Geolocation & Media'], icon: <Globe />, color: 'bg-indigo-500', bg: 'bg-indigo-50/50 dark:bg-indigo-950/10', border: 'border-indigo-100' }
           ].map((type, i) => (
             <div key={i} className={`p-8 rounded-[3.5rem] border-2 ${type.border} ${type.bg} flex flex-col items-center text-center shadow-sm`}>
                <div className={`w-12 h-12 rounded-[1.5rem] ${type.color} text-white flex items-center justify-center mb-6`}>
                   {type.icon}
                </div>
                <h4 className="font-black text-gray-900 dark:text-white text-base mb-6">{type.title}</h4>
                <ul className="space-y-3 text-start w-full">
                   {type.items.map((item, id) => (
                     <li key={id} className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${type.color}`}></div> {item}
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </section>

      {/* ── 2. Why Web APIs Matter? ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-slate-900 p-10 lg:p-14 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
               <Boxes className="w-96 h-96 text-indigo-500" />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-6">
                  <h3 className="text-4xl font-black">Why they Matter?</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">Without Web APIs, JavaScript is trapped in a void—able to perform math but unable to affect the browser UI or communicate with servers.</p>
                  
                  <div className="grid grid-cols-1 gap-3">
                     {[
                       'Access and Modify the DOM',
                       'Communicate with Servers (Fetch)',
                       'Persistent Browser Storage',
                       'User Location & Hardware Sensing',
                       'Advanced 2D/3D Media & Canvas'
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                          <CheckCircle className="text-emerald-400 w-5 h-5 flex-shrink-0" />
                          <span className="text-xs font-bold text-slate-200">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10">
                  <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4">The Power Equation</div>
                  <div className="flex flex-col items-center gap-6">
                     {[
                       { tech: 'JavaScript', category: 'LOGIC', color: 'bg-amber-500' },
                       { tech: 'Web APIs', category: 'CAPABILITIES', color: 'bg-indigo-500' },
                       { tech: 'The Browser', category: 'EXECUTION', color: 'bg-emerald-500' }
                     ].map((eq, i) => (
                       <React.Fragment key={i}>
                          <div className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                             <div className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-lg ${eq.color}`}></div>
                                <span className="font-black text-sm uppercase">{eq.tech}</span>
                             </div>
                             <span className="text-[10px] font-black opacity-30">{eq.category}</span>
                          </div>
                          {i < 2 && <div className="text-2xl font-black text-indigo-500">+</div>}
                       </React.Fragment>
                     ))}
                     <div className="text-2xl font-black text-emerald-500 mt-2">= Powerful Application</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── 4. Types of Web APIs Grid ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <h2 className="text-4xl font-black text-center mb-16 italic tracking-tight">The API Universe</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'DOM API', icon: Layout, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-950/20', desc: 'Manipulate HTML structures & CSS styles instantly.' },
              { name: 'Fetch API', icon: Wifi, color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-950/20', desc: 'Exchange complex data payloads with remote servers.' },
              { name: 'Web Storage API', icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/20', desc: 'Persist data locally in the browser memory system.' },
              { name: 'Geolocation API', icon: MapPin, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-950/20', desc: 'Access GPS and network location of the device hardware.' },
              { name: 'History API', icon: History, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-950/20', desc: 'Control browser navigation items programmatically.' },
              { name: 'Canvas API', icon: Monitor, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/20', desc: 'Render complex 2D and 3D graphics in real-time.' },
              { name: 'Web Workers', icon: Cpu, color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-950/20', desc: 'Run heavy computational scripts in background threads.' },
              { name: 'Notifications API', icon: Bell, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/20', desc: 'Display push alerts to users even when tab is idle.' },
              { name: 'Clipboard API', icon: Clipboard, color: 'text-cyan-500', bg: 'bg-cyan-50 dark:bg-cyan-950/20', desc: 'Directly access and modify system clipboard data.' }
            ].map((api, i) => (
              <div key={i} className="group p-8 rounded-[3.5rem] bg-white dark:bg-gray-800 border-2 border-transparent hover:border-gray-100 dark:hover:border-gray-700 shadow-sm hover:shadow-xl transition-all">
                 <div className={`w-14 h-14 rounded-[1.5rem] ${api.bg} flex items-center justify-center mb-6`}>
                    <api.icon className={`w-6 h-6 ${api.color}`} />
                 </div>
                 <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2 leading-none uppercase italic tracking-tighter">{api.name}</h4>
                 <p className="text-[11px] font-bold text-gray-400 group-hover:text-gray-600 transition-colors leading-relaxed">{api.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── 5. Behind the Scenes Simulator ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <EventLoopSimulator />
      </section>

      {/* ── Async Example Section ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-12 gap-12 items-center">
         <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl font-black flex items-center gap-4">
               <Timer className="text-indigo-500 w-10 h-10" /> Async Proof
            </h2>
            <p className="text-lg font-medium text-gray-500 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
              "setTimeout() is a Web API. Notice how the logic continues even while the browser is waiting for the timer to pop."
            </p>
            <div className="p-8 rounded-[3.5rem] bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-100 dark:border-indigo-900/40">
               <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4">Execution Logic</div>
               <div className="space-y-3">
                  {[
                    { step: 'Start', mood: 'Stack Executed' },
                    { step: 'End', mood: 'Stack Executed (Continuous)' },
                    { step: 'Inside Web API', mood: 'Returned via Callback Queue' }
                  ].map((log, i) => (
                    <div key={i} className="flex justify-between items-center pb-2 border-b border-indigo-500/10 last:border-0 last:pb-0">
                       <span className="text-sm font-black text-indigo-600">{log.step}</span>
                       <span className="text-[9px] font-black text-indigo-300 uppercase italic">{log.mood}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="lg:col-span-7">
            <CodeBlock 
              title="Async API Example"
              language="javascript"
              code={`console.log("Start");

// setTimeout is a Web API tool
setTimeout(() => {
  console.log("Inside Web API");
}, 2000);

console.log("End");

/* 
  OUTPUT:
  1. Start
  2. End
  3. Inside Web API (arriving 2 seconds late)
*/`}
            />
         </div>
      </section>

      {/* ── 6. Real World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-12 text-center uppercase tracking-tighter">Native Product Deployment</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Social Media', icon: Smartphone, color: 'text-indigo-500', items: ['DOM', 'Fetch', 'History'] },
              { title: 'E-commerce', icon: ListTodo, color: 'text-emerald-500', items: ['Storage', 'Fetch', 'Payment'] },
              { title: 'Navigation', icon: MapPin, color: 'text-rose-500', items: ['Geolocation', 'Canvas', 'Fetch'] },
              { title: 'Streaming', icon: Play, color: 'text-amber-500', items: ['Media', 'Workers', 'Fetch'] },
              { title: 'Messages', icon: Share2, color: 'text-sky-500', items: ['Notifications', 'Fetch', 'DOM'] }
            ].map((u, i) => (
              <div key={i} className="p-6 rounded-[2.5rem] bg-white dark:bg-gray-800 border-2 border-gray-50 dark:border-gray-700 hover:shadow-lg transition-all flex flex-col items-center text-center">
                 <div className={`w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-900 ${u.color} flex items-center justify-center mb-4`}>
                    <u.icon className="w-6 h-6" />
                 </div>
                 <h5 className="font-extrabold text-sm mb-4 leading-none">{u.title}</h5>
                 <div className="flex flex-col gap-1.5 opacity-40">
                    {u.items.map((it, idx) => (
                      <span key={idx} className="text-[8px] font-black uppercase tracking-widest">{it}</span>
                    ))}
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* ── 7 & 8. Pro Tips & Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-10">
         <div className="p-12 rounded-[4rem] bg-indigo-900 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <ShieldCheck className="w-48 h-48" />
            </div>
            <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
               <Zap className="text-amber-400" /> API Mastery Protocols
               <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] ml-auto">EST. 15 YRS</span>
            </h3>
            
            <div className="space-y-6 relative z-10">
               {[
                 { tip: 'Standard vs Non-Standard', body: 'Know what is Core JS (logic) vs Web API (capabilities). Essential interview knowledge!' },
                 { tip: 'Async Prioritization', body: 'Master Fetch, setTimeout, and Promises first. They form the basis of modern web dev.' },
                 { tip: 'Synergistic Stacks', body: 'The best apps combine multiple APIs. Example: Fetch (data) + Storage (cache) + DOM (view).' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-indigo-400 font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">{i+1}</div>
                    <div>
                       <h5 className="font-black text-base mb-1">{item.tip}</h5>
                       <p className="text-[11px] text-indigo-100/40 font-bold leading-relaxed">{item.body}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Conflating Definitions', body: 'Thinking Web APIs are part of the JS language core.' },
              { title: 'Ignoring Side-Effects', body: 'Not handling asynchronous behavior correctly.' },
              { title: 'Silent Failure', body: 'Forgetting to handle errors (especially in Fetch).' },
              { title: 'Bloated Performance', body: 'Overusing heavy APIs (like Workers) without need.' }
            ].map((err, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/20 border-2 border-rose-100 dark:border-rose-900/30">
                 <h5 className="text-rose-500 font-black uppercase text-[10px] tracking-widest mb-4">API_ERROR_0{i+1}</h5>
                 <h4 className="font-black text-rose-900 dark:text-rose-200 text-sm mb-2">{err.title}</h4>
                 <p className="text-[10px] text-rose-600/60 dark:text-rose-400/60 font-bold leading-relaxed">{err.body}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Summary Banner ── */}
      <footer className="max-w-6xl mx-auto mb-20 text-center">
         <div className="bg-slate-900 p-16 lg:p-24 rounded-[5rem] relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <h2 className="text-5xl font-black text-white mb-8 relative z-10 italic tracking-tighter uppercase underline decoration-indigo-500 underline-offset-8 decoration-4">Unlock the Browser</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-bold relative z-10 leading-relaxed text-lg">
               Web APIs are the keys to the kingdom. Master how JS talks to the web, and there is nothing you cannot build.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10 font-black uppercase tracking-widest text-[10px]">
               <div className="px-12 py-5 bg-indigo-500 text-white rounded-full hover:scale-110 shadow-xl shadow-indigo-500/30 transition-all cursor-pointer">Learn More</div>
               <div className="px-12 py-5 border border-slate-700 text-white rounded-full hover:bg-slate-800 transition-all cursor-pointer">View Roadmap</div>
            </div>
         </div>
         <p className="mt-12 text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] opacity-30">Browser Integration Layer — KnowGrow Static HUB</p>
      </footer>

    </div>
  );
};

export default WebApiIntro;