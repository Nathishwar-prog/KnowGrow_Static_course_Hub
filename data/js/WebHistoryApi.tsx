import React, { useState, useEffect } from 'react';
import {
  Compass, Navigation, ArrowLeft, ArrowRight, RefreshCw, History, 
  Monitor, Layers, Boxes, Home, Info, HelpCircle, CodeXml, 
  Terminal, Zap, ShieldAlert, CheckCircle, Smartphone, 
  Copy, Check, MousePointer2, Smartphone as MobileIcon, 
  Search, FileText, Globe, Layout, ExternalLink
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

// ─── Interactive History Simulator ──────────────────────────────────────────
const HistorySandbox = () => {
  const [stack, setStack] = useState<{title: string, path: string}[]>([{title: 'Home', path: '/home'}]);
  const [index, setIndex] = useState(0);
  const [lastAction, setLastAction] = useState('initialized');

  const pushState = (title: string, path: string) => {
    const newStack = stack.slice(0, index + 1);
    newStack.push({title, path});
    setStack(newStack);
    setIndex(newStack.length - 1);
    setLastAction(`pushState("${path}")`);
  };

  const back = () => {
    if (index > 0) {
      setIndex(index - 1);
      setLastAction('history.back()');
    }
  };

  const forward = () => {
    if (index < stack.length - 1) {
      setIndex(index + 1);
      setLastAction('history.forward()');
    }
  };

  const currentPage = stack[index];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 flex gap-2">
         <div className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-200 dark:border-indigo-800/50 flex items-center gap-1.5">
            <Compass className="w-3 h-3" /> Navigation Core
         </div>
      </div>

      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-4">
        <Monitor className="w-8 h-8 text-indigo-500" /> History stack Visualizer
      </h3>
      <p className="text-xs font-bold text-gray-400 mb-8 uppercase tracking-widest">Simulated Single Page Application</p>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
           {/* Simulated Browser URL Bar */}
           <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-800 flex items-center gap-4 shadow-inner">
              <div className="flex gap-2">
                 <button 
                    onClick={back} disabled={index === 0}
                    className="p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 text-gray-600 transition-all disabled:opacity-20 translate-y-[1px]"
                 >
                    <ArrowLeft size={16} />
                 </button>
                 <button 
                    onClick={forward} disabled={index === stack.length - 1}
                    className="p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 text-gray-600 transition-all disabled:opacity-20 translate-y-[1px]"
                 >
                    <ArrowRight size={16} />
                 </button>
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 text-xs font-mono border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                 <Globe className="w-3 h-3 text-emerald-500" />
                 <span className="opacity-40">knowgrow.edu</span>
                 <span className="font-black text-indigo-500">{currentPage.path}</span>
              </div>
              <RefreshCw className="w-4 h-4 text-gray-300" />
           </div>

           {/* Webpage Content */}
           <div className="aspect-video rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-500">
                 {currentPage.title === 'Home' ? <Home size={32} /> : 
                  currentPage.title === 'Store' ? <Layout size={32} /> : 
                  <HelpCircle size={32} />}
              </div>
              <h4 className="text-3xl font-black text-gray-900 dark:text-white">{currentPage.title} View</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">The content updated via <code>onpopstate</code> listener.</p>
              
              <div className="mt-8 flex gap-4">
                 <button onClick={() => pushState('Store', '/store')} className="px-6 py-2.5 bg-indigo-500 text-white rounded-xl font-bold text-xs uppercase hover:scale-105 transition-transform">Go to Store</button>
                 <button onClick={() => pushState('Help', '/support')} className="px-6 py-2.5 bg-gray-900 dark:bg-white dark:text-black text-white rounded-xl font-bold text-xs uppercase hover:scale-105 transition-transform">Get Help</button>
              </div>
           </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
           <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2 flex justify-between">
              <span>Stack Visualization</span>
              <span className="text-indigo-500">{index + 1} of {stack.length}</span>
           </div>
           
           <div className="space-y-2 max-h-[400px] overflow-auto pr-2 custom-scrollbar">
              {[...stack].reverse().map((page, i) => {
                 const actualIdx = stack.length - 1 - i;
                 const isActive = actualIdx === index;
                 const isFuture = actualIdx > index;

                 return (
                   <div key={i} className={`p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                     isActive ? 'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800' : 
                     isFuture ? 'bg-gray-50 border-gray-100 dark:bg-gray-800/30 opacity-40 border-dashed' : 
                     'bg-white border-gray-100 dark:bg-gray-800/50'
                   }`}>
                      <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-indigo-500 animate-pulse' : 'bg-gray-200'}`}></div>
                      <div className="flex-1">
                         <div className="text-[10px] font-black uppercase tracking-tighter opacity-40">Entry {actualIdx + 1}</div>
                         <div className="text-xs font-black text-gray-900 dark:text-white leading-none mt-1">{page.title}</div>
                         <code className="text-[10px] text-indigo-500 font-bold block mt-1">{page.path}</code>
                      </div>
                   </div>
                 );
              })}
           </div>

           <div className="p-4 rounded-2xl bg-gray-900 text-white font-mono text-[10px] space-y-2">
              <div className="text-gray-500 uppercase tracking-widest text-[8px] mb-2 border-b border-white/5 pb-2">Last Operation</div>
              <div className="flex items-center gap-2">
                 <span className="text-indigo-400">&gt;</span>
                 <span className="text-emerald-400">{lastAction}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const WebHistoryApi: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#fdfdff] dark:bg-[#0a0c10] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-indigo-100 selection:text-indigo-700 dark:selection:bg-indigo-900/40">
      
      {/* ── Hero Header ── */}
      <header className="max-w-5xl mx-auto text-center mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-indigo-400/10 to-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-tr from-indigo-500 to-indigo-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-indigo-500/20 transform hover:scale-110 transition-all duration-700">
          <History className="w-12 h-12 text-white shadow-xl" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none uppercase">
          Web History <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-600">API</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the browser's session stack. Manipulate URLs and navigation programmatically to build seamless Single Page Applications.
        </p>
      </header>

      {/* ── 1. What is Web History ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800/50">
            <Info className="w-4 h-4" /> The Concept
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
            Navigation Without <br /> Interaction Lag
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            The Web History API allows you to manipulate fixed entries in the browser's session history—the stack of all pages visited in a specific tab—using JavaScript, <strong className="text-indigo-500">without reloading the page</strong>.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
             <div className="p-6 rounded-[2.5rem] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-800/30 group hover:shadow-lg hover:shadow-indigo-500/5 transition-all">
                <Navigation className="w-10 h-10 text-indigo-500 mb-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <h4 className="font-black text-gray-900 dark:text-white text-lg mb-2 leading-none">Change URL</h4>
                <p className="text-[11px] font-bold text-indigo-700/60 dark:text-indigo-400/60 leading-relaxed uppercase tracking-widest">Update adress bar</p>
             </div>
             <div className="p-6 rounded-[2.5rem] bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-800/30 group hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
                <RefreshCw className="w-10 h-10 text-emerald-500 mb-6 group-hover:rotate-180 transition-transform" />
                <h4 className="font-black text-gray-900 dark:text-white text-lg mb-2 leading-none">No Relaod</h4>
                <p className="text-[11px] font-bold text-emerald-700/60 dark:text-emerald-400/60 leading-relaxed uppercase tracking-widest">Zero latency UX</p>
             </div>
          </div>
        </div>

        <div className="bg-slate-900 p-10 lg:p-14 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 -m-10 opacity-5 grayscale group-hover:grayscale-0 transition-all duration-1000">
              <Layers className="w-96 h-96 text-indigo-500" />
           </div>
           
           <div className="relative z-10 space-y-10">
              <div>
                 <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest border-l-2 border-indigo-500 pl-4 mb-4">Core Workflow</h4>
                 <h3 className="text-3xl font-black leading-tight">Managing the <br/> History Stack</h3>
              </div>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-indigo-400 text-xl flex-shrink-0">1</div>
                    <div>
                       <h5 className="font-black text-sm mb-1 uppercase tracking-tighter">Back ← Previous Pages</h5>
                       <p className="text-[10px] text-slate-400 font-bold leading-relaxed">Entries previously stored in the browser's RAM for the current session.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-emerald-400 text-xl flex-shrink-0">2</div>
                    <div>
                       <h5 className="font-black text-sm mb-1 uppercase tracking-tighter">Forward → Next Pages</h5>
                       <p className="text-[10px] text-slate-400 font-bold leading-relaxed">Entries that exist if the user navigated back from them.</p>
                    </div>
                 </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                 <Zap className="text-amber-400 w-6 h-6 flex-shrink-0 mt-1" />
                 <p className="text-[11px] font-bold text-slate-300 italic tracking-tight">
                   "Simple Definition: The History API lets you control browser navigation and URLs dynamically without refreshing the page."
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* ── INTERACTIVE SANDBOX ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <HistorySandbox />
      </section>

      {/* ── 4. Core Methods ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-12 gap-12 items-start">
         <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white flex items-center gap-4">
               <Terminal className="text-indigo-500 w-10 h-10" /> Navigation Engine
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
               Use these native methods to move users through your application programmatically.
            </p>

            <div className="space-y-4">
               {[
                 { name: 'history.back()', desc: 'Go to exact previous page in stack.' },
                 { name: 'history.forward()', desc: 'Move to the next page entries.' },
                 { name: 'history.go(n)', desc: 'Jump n steps (-1 = back, 1 = forward).' }
               ].map((item, i) => (
                 <div key={i} className="group p-6 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-2">
                       <code className="text-xs font-black text-indigo-500 lowercase">{item.name}</code>
                       <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-400 group-hover:text-indigo-500 transition-colors">
                          <MousePointer2 size={12} />
                       </div>
                    </div>
                    <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>

         <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[3.5rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-10 opacity-5 grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <Boxes className="w-80 h-80 text-indigo-500" />
               </div>
               
               <h3 className="text-3xl font-black mb-8 relative z-10">Complex State Manipulation</h3>
               <p className="text-slate-400 text-sm font-medium mb-10 relative z-10">
                  The real power of the API lies in <code>pushState</code> and <code>replaceState</code>, which allow you to inject data into the history entries.
               </p>

               <div className="space-y-6 relative z-10">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-4">
                     <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">THE PARAMETERS</span>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="px-3 py-2 bg-slate-800 rounded-lg border border-white/5">
                           <span className="text-[10px] font-black block mb-1">1. State Object</span>
                           <code className="text-[10px] text-emerald-400">{`{id: 101}`}</code>
                        </div>
                        <div className="px-3 py-2 bg-slate-800 rounded-lg border border-white/5">
                           <span className="text-[10px] font-black block mb-1">2. Title</span>
                           <code className="text-[10px] text-emerald-400">"Page Name"</code>
                        </div>
                        <div className="px-3 py-2 bg-slate-800 rounded-lg border border-white/5">
                           <span className="text-[10px] font-black block mb-1">3. URL Path</span>
                           <code className="text-[10px] text-indigo-400">"/new-url"</code>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                        <h5 className="font-black text-sm text-indigo-300 mb-2">.pushState()</h5>
                        <p className="text-[10px] text-slate-400 font-medium leading-relaxed italic">Adds a brand new entry to the history stack.</p>
                     </div>
                     <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                        <h5 className="font-black text-sm text-emerald-300 mb-2">.replaceState()</h5>
                        <p className="text-[10px] text-slate-400 font-medium leading-relaxed italic">Updates the current history entry without adding new.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── 5. Full Implementation Example ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-12 gap-10 items-center">
         <div className="lg:col-span-8 order-2 lg:order-1">
            <CodeBlock 
              title="Building a Basic SPA Router"
              language="javascript"
              code={`// 1. Navigation Logic
function navigate(page, path) {
    // Push new state to history
    history.pushState({view: page}, "", path);
    
    // Update the UI
    renderContent(page);
}

function renderContent(view) {
    document.getElementById("app").innerHTML = \`<h1>Showing \${view}</h1>\`;
}

// 2. CRITICAL: Handle Back/Forward Buttons
window.addEventListener("popstate", (event) => {
    if (event.state) {
        // Restore UI based on the saved state object
        renderContent(event.state.view);
    }
});`}
            />
         </div>

         <div className="lg:col-span-4 space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800/50">
               <RefreshCw className="w-4 h-4" /> The Popstate Event
            </div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
               The Navigation <br /> Listener
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
               The <code>popstate</code> event is triggered when the user navigates through history using the browser's <b>Back</b> or <b>Forward</b> buttons.
            </p>
            
            <div className="p-6 rounded-[2.5rem] bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <ShieldAlert className="w-16 h-16 text-rose-500" />
               </div>
               <h5 className="font-black text-xs text-rose-500 uppercase tracking-widest mb-3">⚠️ Important Note</h5>
               <p className="text-xs font-bold text-gray-600 dark:text-gray-300 leading-relaxed italic">
                 "Calling pushState() or replaceState() manually does NOT trigger the popstate event. It only reacts to browser UI interactions."
               </p>
            </div>
         </div>
      </section>

      {/* ── 9. Real World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-black text-center mb-12">Product Engineering</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: 'SPA Frameworks', icon: Layout, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-950/20', desc: 'The backbone of React, Vue, and Angular routing systems.' },
             { title: 'Dynamic Filters', icon: Search, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/20', desc: 'Update search results & URL without losing scroll position.' },
             { title: 'Dynamic Modals', icon: FileText, color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-950/20', desc: 'Give modals specific URLs that can be shared or bookmarked.' },
             { title: 'Pagination', icon: Layers, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-950/20', desc: 'Switch page results in a flat list without a heavy reload cycle.' },
           ].map((item, i) => (
             <div key={i} className="group p-8 rounded-[3.5rem] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className={`w-14 h-14 rounded-[1.5rem] ${item.bg} flex items-center justify-center mb-6`}>
                   <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* ── 10 & 11. Pro Tips & Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-20 space-y-12">
         <div className="bg-indigo-900 rounded-[4rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
            <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
               <Zap className="text-amber-400" /> Professional Strategies
               <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] ml-auto">EST. 15 YRS</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
               <div className="space-y-6">
                  {[
                    { tip: 'Always Listen to popstate', body: 'Failing to handle this will break the back button and ruin your UX.' },
                    { tip: 'Keep State Lightweight', body: 'Avoid massive state objects. Use IDs to fetch data instead of storing items.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                       <div className="w-10 h-10 rounded-2xl bg-sky-500/20 flex items-center justify-center text-sky-400 font-black text-sm flex-shrink-0">{i+1}</div>
                       <div>
                          <h5 className="font-black text-sm mb-1">{item.tip}</h5>
                          <p className="text-xs text-slate-300 font-medium">{item.body}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="space-y-6">
                  {[
                    { tip: 'Sync URL + UI', body: 'Ensure the address bar always accurately reflects the content displayed.' },
                    { tip: 'Router Abstraction', body: 'In complex apps, use libraries like React Router for cleaner management.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                       <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-black text-sm flex-shrink-0">{i+3}</div>
                       <div>
                          <h5 className="font-black text-sm mb-1">{item.tip}</h5>
                          <p className="text-xs text-slate-300 font-medium">{item.body}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Forgotten Listeners', body: 'Not adding the popstate listener makes navigation a one-way street.' },
              { title: 'Static UI Expectations', body: 'pushState updates the address bar but does NOT change your HTML.' },
              { title: 'Origin Violation', body: 'Trying to push a URL from different domain causes a security crash.' },
              { title: 'State Overload', body: 'Pushing too many entries for trivial UI changes pollutes history.' }
            ].map((err, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/20">
                 <h5 className="text-rose-500 font-black uppercase text-[9px] tracking-widest mb-3">CRITICAL_FAULT_0{i+1}</h5>
                 <h4 className="font-black text-rose-900 dark:text-rose-200 text-sm mb-2">{err.title}</h4>
                 <p className="text-[10px] text-rose-700/60 dark:text-rose-400/60 font-bold leading-relaxed">{err.body}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Summary Banner ── */}
      <footer className="max-w-6xl mx-auto mb-20">
         <div className="bg-slate-900 p-12 lg:p-16 rounded-[4rem] text-center relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-4xl font-black text-white mb-6 relative z-10 italic tracking-tighter uppercase">Architect Modern Routes</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 font-bold relative z-10">
               Build high-fidelity, single-page experiences that feel as fast as desktop software. Master the History API and own your URL logic.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
               <div className="px-10 py-4 bg-white text-slate-900 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer">Explore Frameworks</div>
               <div className="px-10 py-4 border border-slate-700 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all cursor-pointer">Live Demo</div>
            </div>
         </div>
      </footer>

      {/* Custom styles for the scrollbar and other small tweaks */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #312e81;
          border-radius: 10px;
        }
      `}</style>

    </div>
  );
};

export default WebHistoryApi;