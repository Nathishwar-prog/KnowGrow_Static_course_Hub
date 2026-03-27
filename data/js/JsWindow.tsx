import React, { useState, useEffect } from 'react';
import { 
  Monitor, Layout, Globe, Compass, Smartphone, 
  MousePointer2, Zap, Info, Terminal, CodeXml, 
  Layers, Boxes, AlertCircle, CheckCircle, 
  ShieldAlert, Timer, RefreshCw, XCircle, 
  Settings, Clipboard, Check, Copy, ArrowRight,
  Maximize2, Activity, Cpu, Laptop, ShieldCheck
} from 'lucide-react';

// ─── Code Block Component ───────────────────────────────────────────────────
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

// ─── Interactive Window Explorer ─────────────────────────────────────────────
const WindowExplorer = () => {
  const [activeProp, setActiveProp] = useState('document');
  
  const propsConfig: Record<string, { label: string, icon: any, color: string, value: string, desc: string }> = {
    document: { label: 'document', icon: Layout, color: 'text-emerald-500', value: 'HTML Document Object', desc: 'Provides access to the HTML DOM (Document Object Model) structure of the page.' },
    location: { label: 'location', icon: Globe, color: 'text-indigo-500', value: window.location.href, desc: 'Contains information about the current URL and allows for page navigation.' },
    history: { label: 'history', icon: Compass, color: 'text-amber-500', value: `Stack Length: ${window.history.length}`, desc: 'Provides methods to navigate forward and backward in the browser session stack.' },
    navigator: { label: 'navigator', icon: Smartphone, color: 'text-rose-500', value: 'System & Agent Info', desc: 'Contains details about the browser version, platform, and operating system.' },
    screen: { label: 'screen', icon: Monitor, color: 'text-teal-500', value: `${window.screen.width} x ${window.screen.height}`, desc: 'Provides details about the user\'s physical screen resolution and color depth.' }
  };

  const active = propsConfig[activeProp];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-500 group-hover:scale-125 transition-transform duration-1000">
         <Monitor className="w-80 h-80" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
         <div className="lg:col-span-12 mb-4">
            <h3 className="text-2xl font-black flex items-center gap-3">
               <Maximize2 className="text-indigo-500 w-6 h-6" /> Native Object Explorer
            </h3>
            <p className="text-sm font-medium text-gray-400 mt-2 uppercase tracking-widest">Live Inspecting window.* properties</p>
         </div>

         <div className="lg:col-span-4 space-y-3">
            {Object.keys(propsConfig).map((key) => (
              <button
                key={key}
                onClick={() => setActiveProp(key)}
                className={`w-full p-5 rounded-2xl border-2 text-start flex items-center justify-between transition-all ${
                  activeProp === key 
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 scale-[1.02]' 
                    : 'bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 hover:border-indigo-300'
                 }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl bg-white dark:bg-gray-800 shadow-sm ${propsConfig[key].color}`}>
                    {React.createElement(propsConfig[key].icon, { size: 18 })}
                  </div>
                  <span className={`text-sm font-black ${activeProp === key ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`}>
                    .{key}
                  </span>
                </div>
                {activeProp === key && <ArrowRight className="text-indigo-500 w-4 h-4 animate-out fade-out slide-out-to-right-2" />}
              </button>
            ))}
         </div>

         <div className="lg:col-span-8">
            <div className="bg-slate-900 rounded-[2rem] p-10 border border-white/5 shadow-inner min-h-[300px] flex flex-col justify-center">
               <div className="space-y-8">
                  <div className="flex items-center gap-4">
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-xl transform ${active.color} bg-white/5`}>
                        {React.createElement(active.icon)}
                     </div>
                     <div>
                        <h4 className="text-2xl font-black text-white italic">window.{active.label}</h4>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Provider Object</span>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2 block italic">Live Value Returned</span>
                        <code className="text-sm font-mono text-emerald-400 break-all">{active.value}</code>
                     </div>
                     <p className="text-sm text-slate-400 font-bold leading-relaxed px-2">
                        {active.desc}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
const JsWindow: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8faff] dark:bg-[#08090b] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-indigo-400/10 to-teal-400/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-tr from-indigo-500 to-indigo-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-indigo-500/20 transform hover:rotate-6 transition-all duration-500">
          <Monitor className="w-14 h-14 text-white shadow-xl" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none uppercase">
          window <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-600 italic">Object</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The ultimate global namespace. Rooted in the browser environment, it provides access to the DOM, navigation, timing, and essential browser APIs.
        </p>
      </header>

      {/* ── 1. What is window ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800/50">
            <Info className="w-4 h-4" /> The Definition
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
            The Sovereign Object <br /> of the Browser
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            The <code>window</code> object is the global object for JavaScript in the browser. It represents the actual browser window or tab containing the DOM document. Every global variable or function you create in the browser is actually a property of <code>window</code>.
          </p>

          <div className="p-8 rounded-[2.5rem] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 flex items-start gap-5">
             <Zap className="text-indigo-500 w-10 h-10 flex-shrink-0 mt-1" />
             <div>
                <span className="text-indigo-500 font-black uppercase text-xs tracking-widest block mb-1 underline decoration-2 underline-offset-4">Simple Concept</span>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed italic">
                   "The window object is the top-level container that contains every single feature provided by the browser environment."
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 p-4">
           {[
             { border: 'border-rose-100 dark:border-rose-900/30', bg: 'bg-rose-50 dark:bg-rose-950/10', icon: '❌', title: 'Without window', items: ['No access to features', 'No session control', 'Static local logic only'] },
             { border: 'border-indigo-100 dark:border-indigo-900/30', bg: 'bg-indigo-50 dark:bg-indigo-950/10', icon: '✅', title: 'With window', items: ['Access to DOM/APIs', 'Manual Navigation', 'Timing & Persistence'] }
           ].map((card, idx) => (
             <div key={idx} className={`p-8 rounded-[3.5rem] border-2 shadow-sm ${card.border} ${card.bg} transform hover:-translate-y-2 transition-all`}>
                <div className="text-3xl mb-6">{card.icon}</div>
                <h4 className="font-black text-gray-900 dark:text-white text-lg mb-4">{card.title}</h4>
                <ul className="space-y-3">
                   {card.items.map((item, i) => (
                     <li key={i} className="text-[10px] font-black opacity-60 flex items-center gap-2 uppercase tracking-tight">
                        <div className="w-1 h-1 rounded-full bg-current"></div> {item}
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </section>

      {/* ── 3. How It Works - Global Scope ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 rounded-[4rem] p-10 lg:p-20 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform duration-1000 group-hover:rotate-45">
               <Terminal className="w-96 h-96 text-indigo-500" />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <h2 className="text-4xl font-black italic tracking-tighter">Global Scoping</h2>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed">
                     When you declare a variable using <code>var</code> or define a standard function globally, it is automatically attached to the <code>window</code> object.
                  </p>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                           <Cpu size={24} />
                        </div>
                        <div>
                           <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-1">Observation</span>
                           <h5 className="font-black text-sm text-slate-100 italic">"Global variables become properties of window."</h5>
                        </div>
                     </div>
                  </div>

                  <CodeBlock 
                    title="Scope Demonstration"
                    language="javascript"
                    code={`var userName = "Issac";
function greet() { console.log("Hi!"); }

// All of these are identical:
console.log(userName);
console.log(window.userName); // "Issac"
window.greet(); // "Hi!"`}
                  />
               </div>

               <div className="space-y-6">
                  <div className="p-8 rounded-[3.5rem] bg-indigo-500 text-white shadow-xl shadow-indigo-500/20">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50 underline decoration-2 underline-offset-4">Context Identity</h4>
                     <h3 className="text-3xl font-black mb-6 italic leading-none">The 'this' Keyword</h3>
                     <p className="text-sm font-bold opacity-80 leading-relaxed mb-8">
                        In the browser's global context (outside any constructor or bound function), the <code>this</code> keyword always points directly to the <code>window</code> object.
                     </p>
                     <CodeBlock 
                       title="Native Binding Check"
                       language="javascript"
                       code={`function test() {
  console.log(this === window); // true
}

test();`}
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── INTERACTIVE EXPLORER ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <WindowExplorer />
      </section>

      {/* ── 5. Useful Methods ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-100 dark:border-amber-800/50 mb-10">
            <Activity className="w-4 h-4" /> Native Action Methods
         </div>
         <h2 className="text-4xl font-black mb-16 text-center sm:text-start italic tracking-tighter">System Interaction Suite</h2>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Interactive Dialogs', sub: 'Alert / Confirm / Prompt', icon: <AlertCircle />, color: 'bg-indigo-500', code: `window.alert("Hello!");\nwindow.confirm("Sure?");\nwindow.prompt("Name:");`, desc: 'Blocking modal dialogs that pause execution until the user interacts.' },
              { title: 'Timing Engines', sub: 'Timeout / Interval', icon: <Timer />, color: 'bg-emerald-500', code: `setTimeout(() => {...}, 2000);\nsetInterval(() => {...}, 1000);`, desc: 'Precision scheduling for executing code after delays or periodically.' },
              { title: 'Scroll & Viewport', sub: 'ScrollTo / ScrollBy', icon: <Maximize2 />, color: 'bg-rose-500', code: `window.scrollTo(0, 500);\nwindow.scrollBy(0, 100);`, desc: 'Programmatic control over the user\'s scroll position and viewport state.' }
            ].map((method, i) => (
              <div key={i} className="flex flex-col h-full bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-[3rem] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
                 <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl ${method.color} text-white shadow-lg`}>
                       {method.icon}
                    </div>
                    <div>
                       <h4 className="text-sm font-black uppercase tracking-tight leading-none text-gray-900 dark:text-white">{method.title}</h4>
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{method.sub}</span>
                    </div>
                 </div>
                 <p className="text-xs font-bold text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{method.desc}</p>
                 <div className="mt-auto">
                    <CodeBlock 
                      language="javascript"
                      code={method.code}
                    />
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* ── 7. Real World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 bg-indigo-900 rounded-[3.5rem] p-10 lg:p-20 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 p-12 opacity-5">
            <Laptop className="w-80 h-80" />
         </div>
         
         <div className="relative z-10">
            <h3 className="text-4xl font-black mb-16 text-center italic tracking-tighter">Strategic Deployment</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
               {[
                 { title: 'Navigation Core', desc: 'Redirecting users between pages or creating SPA logic via location/history.', icon: Compass },
                 { title: 'Popup Architect', desc: 'Managing dynamic alerts, tooltips, and modal UI states.', icon: Layout },
                 { title: 'Animation Sync', desc: 'Using timing methods (RAF/Intervals) to power smooth transition logic.', icon: Zap },
                 { title: 'Responsive Engine', desc: 'Detecting screen dimensions and orientation via the screen property.', icon: Monitor },
                 { title: 'User Analytics', desc: 'Gathering hardware and platform details via the navigator object.', icon: Smartphone },
                 { title: 'Cross-Tab Comms', desc: 'Controlling secondary windows and parent/child communication streams.', icon: Globe },
               ].map((item, i) => (
                 <div key={i} className="space-y-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-lg group-hover:scale-110">
                       <item.icon size={22} />
                    </div>
                    <h4 className="text-lg font-black italic">{item.title}</h4>
                    <p className="text-[11px] font-medium text-slate-400 leading-relaxed uppercase tracking-wider">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── 8. Pro Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-16">
         <div className="relative p-10 lg:p-20 rounded-[4rem] bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/30 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <ShieldCheck className="w-48 h-48 text-indigo-500" />
            </div>
            <h3 className="text-3xl font-black text-indigo-900 dark:text-indigo-100 mb-12 flex items-center gap-4">
              <Zap className="text-indigo-500" /> Expert Protocols
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] ml-auto">EST. 15 YRS</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
               {[
                 { tip: 'Global Pollution Control', body: 'Avoid using "var" globally. Use "let" and "const" to keep variables out of the window object.', color: 'text-rose-500 bg-rose-500/10' },
                 { tip: 'Implicit Access', body: 'You don\'t need to prefix with "window.". Calling alert() is exactly the same as window.alert().', color: 'text-indigo-500 bg-indigo-500/10' },
                 { tip: 'Redirect Awareness', body: 'Manipulation of window.location.href causes instant page reload. User state cleanup is required.', color: 'text-amber-500 bg-amber-500/10' },
                 { tip: 'Timer Memory Hygiene', body: 'Excessive setInterval instances create memory leaks and UI lag. Always terminate them when done.', color: 'text-emerald-500 bg-emerald-500/10' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 p-8 rounded-[2.5rem] bg-white dark:bg-gray-800/50 border border-white dark:border-gray-700 shadow-md transform hover:scale-[1.03] transition-transform">
                    <div className={`w-12 h-12 rounded-[1rem] ${item.color} flex items-center justify-center font-black flex-shrink-0 text-white shadow-lg`}>
                       {i+1}
                    </div>
                    <div>
                       <h5 className="font-black text-gray-900 dark:text-white text-base mb-2 uppercase tracking-tight underline decoration-2 underline-offset-4">{item.tip}</h5>
                       <p className="text-xs text-gray-500 dark:text-gray-400 font-bold leading-relaxed italic">{item.body}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* ── 9. Common Mistakes ── */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Global Over-Reliance', body: 'Treating the global namespace like a garbage bin for every variable.' },
              { title: 'UI Blocking Mixups', body: 'Using blocking methods like alert/prompt in professional production apps.' },
              { title: 'Timer Abandonment', body: 'Failing to use clearTimeout / clearInterval, leading to ghost operations.' },
              { title: 'Node.js Assumptions', body: 'Expecting the "window" object to exist in server-side environments.' }
            ].map((err, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
                 <div className="text-rose-500 mb-4"><XCircle size={32} /></div>
                 <h6 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-3">PITFALL_0{i+1}</h6>
                 <h5 className="font-black text-rose-800 dark:text-rose-100 text-sm mb-2 leading-tight uppercase underline decoration-rose-500/20">{err.title}</h5>
                 <p className="text-[10px] text-rose-700/60 dark:text-rose-400 font-bold leading-relaxed italic">{err.body}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Summary Footer ── */}
      <footer className="max-w-6xl mx-auto mb-20">
         <div className="bg-slate-900 p-12 lg:p-20 rounded-[4rem] text-center relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-4xl font-black text-white mb-6 relative z-10 italic uppercase tracking-tighter">Own the Globals</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 font-bold relative z-10 italic leading-relaxed">
              "Understanding the window object is understanding the boundary between your code and the metal of the browser. Master the globals, master the environment."
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
               <button className="px-12 py-4 bg-indigo-500 text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-indigo-500/20">Official Spec</button>
               <button className="px-12 py-4 border border-slate-700 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all">Interactive Demo</button>
            </div>
         </div>
         <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.8em] mt-20 opacity-20 py-10">Window Layer Assessment — KnowGrow Platform v4.0</p>
      </footer>

    </div>
  );
};

export default JsWindow;