import React, { useState, useEffect } from 'react';
import {
  Monitor, FileCode, Box, Layers, 
  Settings, MousePointer2, Zap, Layout,
  Sparkles, Check, Copy, Info, 
  MessageSquare, History, Globe, Database,
  Eye, ToggleLeft, ToggleRight, Trash2,
  AlertCircle, ChevronRight, List, Type, Code
} from 'lucide-react';

// ─── Code Block Component ─────────────────────────────────────────────────────
const CodeBlock = ({ code, title, language = "javascript" }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm relative group">
      {title && (
        <div className="bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">{title}</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase">{language}</span>
        </div>
      )}
      <div className="absolute top-12 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-royal-500 hover:text-white transition-colors border border-slate-700"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-slate-900 text-blue-300 leading-relaxed shadow-inner">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomObjectsRef: React.FC = () => {
  const [windowInfo, setWindowInfo] = useState({ width: 0, height: 0, title: '' });
  const [isObjectView, setIsObjectView] = useState(false);
  const [userName, setUserName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [contentMode, setContentMode] = useState<'welcome' | 'hello'>('welcome');

  useEffect(() => {
    const updateInfo = () => {
      setWindowInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        title: document.title
      });
    };
    updateInfo();
    window.addEventListener('resize', updateInfo);
    return () => window.removeEventListener('resize', updateInfo);
  }, []);

  const commonObjects = [
    { name: "window", icon: <Monitor size={18}/>, desc: "The top-level browser window object." },
    { name: "document", icon: <FileCode size={18}/>, desc: "Represents the loaded HTML webpage." },
    { name: "element", icon: <Box size={18}/>, desc: "Any individual HTML tag transformed into an object." },
    { name: "forms", icon: <Layout size={18}/>, desc: "Colletion of all form elements." },
    { name: "images", icon: <Layers size={18}/>, desc: "Reference to all images in the document." },
    { name: "links", icon: <Globe size={18}/>, desc: "List of all hyperlinks present on the page." },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 text-slate-900 dark:text-slate-100">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-24 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl mb-8 shadow-2xl transform hover:-rotate-2 hover:scale-105 transition-all duration-500 cursor-pointer group">
          <Layers className="w-12 h-12 text-white group-hover:animate-pulse" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black mb-6 tracking-tight">
          HTML DOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Objects</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed italic">
          From static markup to dynamic living entities. Learn how every part of your webpage is an object ready for script manipulation.
        </p>
      </header>

      {/* ── Section 1-2: Intro & Hierarchy Visualization ── */}
      <section className="max-w-6xl mx-auto mb-24 space-y-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-black uppercase tracking-widest shadow-sm border border-blue-200 dark:border-blue-800">
              <Zap size={14} className="mr-2" /> The Object Bridge
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
              JavaScript <span className="text-blue-600 italic">Interprets</span> Your Markup
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              HTML is just a file. The <b>DOM Object Model</b> is the browser's way of turning that static file into a set of objects that your scripts can "talk" to.
            </p>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4">
               <Info className="text-blue-500 mt-1 shrink-0" size={20} />
               <p className="text-sm font-medium text-slate-500 italic">
                 "In the DOM, everything is an object. The page is the 'document' object, the browser is the 'window' object."
               </p>
            </div>
          </div>

          {/* Interactive Hierarchy Map */}
          <div className="bg-slate-900 rounded-[3.5rem] p-12 border border-slate-800 shadow-3xl relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             <div className="relative z-10 space-y-4 flex flex-col items-center">
                <div className="w-56 p-4 bg-indigo-600 rounded-2xl shadow-xl border-b-4 border-indigo-800 flex flex-col items-center group-hover:-translate-y-1 transition-transform">
                   <Monitor size={24} className="text-white mb-2" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100">Window Object</span>
                </div>
                <div className="h-6 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500"></div>
                <div className="w-48 p-4 bg-blue-600 rounded-2xl shadow-xl border-b-4 border-blue-800 flex flex-col items-center group-hover:-translate-y-1 transition-transform">
                   <FileCode size={20} className="text-white mb-2" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-blue-100">Document Object</span>
                </div>
                <div className="h-6 w-0.5 bg-gradient-to-b from-blue-500 to-slate-700"></div>
                <div className="flex gap-4">
                   <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
                      <Box size={14} className="text-slate-400" />
                      <span className="text-[8px] font-bold text-slate-500 mt-1 uppercase">Elements</span>
                   </div>
                   <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
                      <Layers size={14} className="text-slate-400" />
                      <span className="text-[8px] font-bold text-slate-500 mt-1 uppercase">Attributes</span>
                   </div>
                   <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
                      <Type size={14} className="text-slate-400" />
                      <span className="text-[8px] font-bold text-slate-500 mt-1 uppercase">Text</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3-4: Object Mirror (Inspector) ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-8 items-stretch">
         <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-14 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
            <h2 className="text-3xl font-black mb-8 italic tracking-tight flex items-center gap-3 decoration-blue-500/20 underline underline-offset-8">
               <History className="text-blue-500" /> Object Inspector
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 font-medium italic opacity-80">
              Your browser constantly updates these top-level objects. See the real-time values of your current session.
            </p>
            <div className="space-y-4 flex-1">
               {[
                 { label: "window.innerWidth", value: `${windowInfo.width}px`, icon: <Monitor size={14}/> },
                 { label: "window.innerHeight", value: `${windowInfo.height}px`, icon: <Monitor size={14}/> },
                 { label: "document.title", value: windowInfo.title || "KnowGrow Hub", icon: <FileCode size={14}/> },
                 { label: "document.URL", value: "/data/js/dom-objects", icon: <Globe size={14}/> },
               ].map((prop, i) => (
                 <div key={i} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl hover:border-blue-200 dark:hover:border-blue-900 transition-all group/item">
                    <div className="flex items-center gap-3">
                       <span className="text-slate-400 group-hover/item:text-blue-500 transition-colors">{prop.icon}</span>
                       <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{prop.label}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">{prop.value}</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="space-y-6 flex flex-col justify-between">
            <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-14 text-white shadow-2xl flex-1 relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px]"></div>
               <h3 className="text-2xl font-black mb-6 italic flex items-center gap-3 tracking-tight underline italic decoration-blue-500">
                  <Monitor size={20} className="text-blue-500" /> The Window Object
               </h3>
               <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                  The <code className="text-blue-400 font-black">window</code> object is the global king. Everything in your browser window exists within this object.
               </p>
               <CodeBlock 
                 title="Accessing the Window"
                 code={`console.log(window.innerWidth);\n// Output: ${windowInfo.width}`} 
               />
            </div>
            <div className="bg-blue-600 rounded-[2.5rem] p-8 lg:p-10 text-white shadow-xl relative group">
               <div className="flex items-center gap-6">
                  <div className="p-4 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform">
                     <FileCode size={32} className="text-white" />
                  </div>
                  <div>
                     <h4 className="text-xl font-black tracking-tight mb-1">The Document Object</h4>
                     <p className="text-blue-100 text-[11px] font-medium opacity-80 uppercase tracking-widest tracking-tighter italic">Represents the loaded HTML webpage</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5-7 & 10: Markup vs Object Arena ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] p-12 lg:p-20 border border-slate-100 dark:border-slate-800 shadow-inner relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
               <div>
                  <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight italic mb-4">Markup vs Object</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl italic">
                    Elements are written in files. Objects are what JavaScript actually controls in memory.
                  </p>
               </div>
               <button 
                 onClick={() => setIsObjectView(!isObjectView)}
                 className="flex items-center gap-4 bg-white dark:bg-slate-800 p-2 pr-6 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform"
               >
                  <div className={`p-3 rounded-full transition-all duration-500 ${isObjectView ? 'bg-indigo-500' : 'bg-blue-500'}`}>
                     {isObjectView ? <Layers size={20} className="text-white" /> : <Code size={20} className="text-white" />}
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">
                    Switch to {isObjectView ? 'MARKUP' : 'OBJECT'} VIEW
                  </span>
               </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 relative">
               <div className={`transition-all duration-700 ${!isObjectView ? 'scale-100 opacity-100' : 'scale-95 opacity-30 blur-sm pointer-events-none'}`}>
                  <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                     <FileCode size={14} /> Static Markup (index.html)
                  </h4>
                  <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-slate-800 shadow-xl overflow-hidden relative">
                     <pre className="text-sm font-mono text-blue-300 leading-relaxed">
                        <code>{`<h1 id="title">\n  Hello World\n</h1>`}</code>
                     </pre>
                     <div className="mt-8 pt-8 border-t border-slate-800">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center opacity-30 grayscale">
                           <span className="text-4xl font-black tracking-tighter italic">Hello World</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className={`transition-all duration-700 ${isObjectView ? 'scale-100 opacity-100' : 'scale-95 opacity-30 blur-sm pointer-events-none'}`}>
                  <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                     <Zap size={14} /> Living Object (DOM Engine)
                  </h4>
                  <div className="bg-indigo-600 rounded-[2.5rem] p-10 border-4 border-white/20 shadow-2xl relative">
                     <div className="space-y-4">
                        {[
                          { key: "id", val: '"title"' },
                          { key: "innerHTML", val: '"Hello World"' },
                          { key: "className", val: '"hero-title"' },
                          { key: "style", val: "{ color: 'blue' }" }
                        ].map((prop, i) => (
                          <div key={i} className="flex justify-between items-center bg-white/10 p-4 rounded-xl border border-white/5">
                             <span className="text-[9px] font-black uppercase tracking-widest text-indigo-100">{prop.key}</span>
                             <span className="text-[11px] font-mono font-bold text-white italic">{prop.val}</span>
                          </div>
                        ))}
                     </div>
                     <div className="mt-8 pt-8 border-t border-white/20">
                        <div className="p-4 bg-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-1 group">
                           <span className="text-4xl font-black tracking-tighter italic text-indigo-600 animate-pulse">Hello World</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8-9: Common Objects & Content Lab ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-3 gap-8">
         <div className="lg:col-span-1 bg-slate-900 rounded-[3rem] p-10 lg:p-12 text-white shadow-2xl flex flex-col group">
            <h2 className="text-2xl font-black mb-8 italic flex items-center gap-3 tracking-tight uppercase underline italic decoration-blue-500">
               <List size={20} className="text-blue-500" /> Objects Registry
            </h2>
            <div className="space-y-4 flex-1">
               {commonObjects.map((obj, i) => (
                 <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-help group/item">
                    <div className="flex items-center gap-4 mb-2">
                       <span className="text-blue-500 group-hover/item:scale-110 transition-transform">{obj.icon}</span>
                       <span className="text-xs font-black uppercase tracking-widest text-indigo-400">{obj.name}</span>
                    </div>
                    <p className="text-[9px] text-slate-500 leading-relaxed font-medium italic opacity-0 group-hover/item:opacity-100 transition-opacity">
                      {obj.desc}
                    </p>
                 </div>
               ))}
            </div>
         </div>

         <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-[3.5rem] p-10 lg:p-14 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] -z-10"></div>
            <div className="flex-1 space-y-6">
               <h2 className="text-3xl font-black tracking-tighter italic uppercase leading-tight">Changing Webpage <br/><span className="text-blue-600">Content</span></h2>
               <p className="text-slate-500 dark:text-slate-400 font-medium italic text-sm">
                 Notice how clicking the button invokes an <b>object method</b> to modify an <b>object property</b>.
               </p>
               <CodeBlock 
                 title="The Script"
                 code={`function changeText() {\n  doc.getElementById("msg").innerHTML = \n  "Hello Karthick!";\n}`} 
               />
            </div>
            
            <div className="w-full lg:w-80 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center shadow-inner relative group min-h-[300px]">
               <div className="mb-10 p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-xl w-full border border-slate-100 dark:border-slate-700 group-hover:-translate-y-2 transition-transform">
                  <h2 className="text-2xl font-black tracking-tighter italic text-slate-800 dark:text-white">
                    {contentMode === 'welcome' ? 'Welcome' : 'Hello Karthick!'}
                  </h2>
               </div>
               <button 
                 onClick={() => setContentMode(contentMode === 'welcome' ? 'hello' : 'welcome')}
                 className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-blue-500 active:scale-95 transition-all flex items-center gap-3"
               >
                  <MousePointer2 size={16} /> Click Me
               </button>
            </div>
         </div>
      </section>

      {/* ── Section 11: Real-World Example (Interactive Page) ── */}
      <section className="max-w-6xl mx-auto mb-20">
         <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[4rem] p-12 lg:p-24 text-white shadow-3xl text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-1000"></div>

            <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
               <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tighter italic uppercase underline decoration-white/20 underline-offset-[16px]">Interactive Bridge</h2>
               <p className="text-blue-100 max-w-xl mb-16 text-lg font-medium italic opacity-90 leading-relaxed">
                  The most common bridge between user input and the DOM. Capture a value from a text input object and project it onto the screen.
               </p>

               <div className="w-full bg-white rounded-[3rem] p-8 lg:p-12 shadow-4xl text-slate-900">
                  <div className="flex flex-col md:flex-row gap-4 mb-10">
                     <div className="relative flex-1">
                        <input 
                          type="text" 
                          id="name"
                          placeholder="What's your name?"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && setSubmittedName(userName)}
                          className="w-full p-5 pl-14 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-slate-400"
                        />
                        <Type className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                     </div>
                     <button 
                       onClick={() => setSubmittedName(userName)}
                       className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center gap-3 group/btn"
                     >
                        Submit <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </div>

                  <div className="min-h-[120px] bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center relative overflow-hidden group/arena">
                     {submittedName ? (
                       <div className="animate-in zoom-in slide-in-from-bottom-4 duration-500 flex flex-col items-center gap-2">
                          <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest opacity-60">Result Output</span>
                          <p className="text-4xl font-black tracking-tighter italic text-indigo-700">Hello {submittedName}!</p>
                       </div>
                     ) : (
                       <div className="flex flex-col items-center opacity-20 text-slate-400">
                          <AlertCircle size={32} className="mb-2" />
                          <p className="text-xs font-black uppercase tracking-widest">Awaiting interaction</p>
                       </div>
                     )}
                     <div className="absolute bottom-4 right-8 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">DOM Listener Active</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto text-center py-10 opacity-30">
        <div className="flex items-center justify-center gap-3 mb-4 font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter text-3xl">
          <Sparkles className="w-8 h-8 opacity-50 text-blue-500" />
          KNOWGROW Hub
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent mx-auto mb-4"></div>
        <p className="text-base font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase italic">The Dynamic Object Architecture Specialist</p>
      </footer>
    </div>
  );
};

export default DomObjectsRef;