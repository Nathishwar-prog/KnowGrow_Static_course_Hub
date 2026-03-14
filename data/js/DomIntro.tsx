import React, { useState } from 'react';
import {
  Network, GitBranch, Zap, FileJson, 
  Layers, MousePointer2, Info, Terminal, 
  ChevronRight, Box, Type, Settings, 
  Sparkles, List, Play, Check, Copy,
  Code, Database, RefreshCw, Layout
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
          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-indigo-500 hover:text-white transition-colors border border-slate-700"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-slate-900 text-indigo-300 leading-relaxed shadow-inner">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomIntro: React.FC = () => {
  const [demoText, setDemoText] = useState("Welcome");
  const [activeTab, setActiveTab] = useState<'visual' | 'code'>('visual');

  const changeText = () => {
    setDemoText("Hello Karthick!");
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 dark:from-slate-900 dark:via-indigo-900/10 dark:to-blue-900/10 min-h-screen font-sans selection:bg-indigo-200 selection:text-indigo-900">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-20 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl mb-8 shadow-2xl transform hover:rotate-6 hover:scale-110 transition-all duration-500 cursor-pointer group">
          <Network className="w-12 h-12 text-white group-hover:animate-pulse" />
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          DOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Intro</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The Document Object Model is the bridge between your static code and a living, breathing interactive web application.
        </p>
      </header>

      {/* ── Section 1: What is DOM? ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-black uppercase tracking-widest">
              <Info size={14} className="mr-2" /> The Definition
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
              A Programming Interface for <span className="italic underline decoration-indigo-500 underline-offset-8">Dynamic</span> Content
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              The DOM converts a webpage into a structured object model (tree) so that programming languages like JavaScript can interact with it.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
               {[
                 { icon: <Layout className="text-indigo-500" />, title: "Structure", desc: "Converts HTML into a tree of objects." },
                 { icon: <Zap className="text-blue-500" />, title: "Manipulation", desc: "Update tags, text, and styles live." },
                 { icon: <Settings className="text-indigo-400" />, title: "Configuration", desc: "Add or remove elements on the fly." },
                 { icon: <RefreshCw className="text-blue-400" />, title: "No Reload", desc: "Update page without refreshing." }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-4 p-2 bg-slate-50 dark:bg-slate-900 inline-block rounded-xl">{item.icon}</div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="relative group">
             <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl rounded-[3rem] group-hover:bg-indigo-500/30 transition-colors"></div>
             <div className="relative bg-slate-900 rounded-[3rem] p-8 border border-slate-800 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                   <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
                   <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Live Document Object</span>
                </div>
                <CodeBlock 
                  title="A Simple Discovery"
                  code={`// Every part of your HTML is a node\nconst body = document.body;\nconsole.log(body.tagName); // "BODY"`} 
                />
                <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                   <p className="text-xs text-indigo-300 font-medium italic leading-relaxed">
                      "When you load a page, the DOM tree grows. JavaScript is the gardener."
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Tree Structure Visualization ── */}
      <section className="max-w-6xl mx-auto mb-20 bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-16 border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] -z-10"></div>
         <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 italic">The DOM Tree</h2>
            <p className="text-slate-500 dark:text-slate-400 font-semibold tracking-wide">A hierarchical map of your entire document.</p>
         </div>

         <div className="flex flex-col items-center">
            {/* Tree UI */}
            <div className="relative space-y-12 w-full max-w-2xl mx-auto">
               <div className="flex justify-center">
                  <div className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black shadow-2xl border border-indigo-500 animate-in fade-in slide-in-from-top-4 duration-500">Document</div>
               </div>
               
               <div className="flex flex-col items-center space-y-12">
                  <div className="relative">
                     <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-indigo-200 dark:bg-indigo-900/50"></div>
                     <div className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black shadow-xl">html</div>
                     
                     <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-indigo-200 dark:bg-indigo-900/50"></div>
                     <div className="absolute -bottom-12 left-1/2 -translate-x-[150px] w-0.5 h-12 bg-indigo-200 dark:bg-indigo-900/50 -rotate-[30deg]"></div>
                     <div className="absolute -bottom-12 left-1/2 translate-x-[150px] w-0.5 h-12 bg-indigo-200 dark:bg-indigo-900/50 rotate-[30deg]"></div>
                  </div>

                  <div className="flex justify-center space-x-12 sm:space-x-32 relative">
                     <div className="flex flex-col items-center">
                        <div className="px-6 py-3 bg-blue-500 text-white rounded-xl font-bold text-sm shadow-md">head</div>
                        <div className="mt-8 flex flex-col items-center relative">
                           <div className="w-0.5 h-8 bg-blue-200 dark:bg-blue-900/30"></div>
                           <div className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-black">title</div>
                        </div>
                     </div>
                     <div className="flex flex-col items-center">
                        <div className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold text-sm shadow-md">body</div>
                        <div className="mt-8 flex justify-center space-x-8 relative">
                           <div className="flex flex-col items-center">
                              <div className="w-0.5 h-8 bg-indigo-200 dark:bg-indigo-900/30"></div>
                              <div className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-black">h1</div>
                           </div>
                           <div className="flex flex-col items-center">
                              <div className="w-0.5 h-8 bg-indigo-200 dark:bg-indigo-900/30"></div>
                              <div className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-black">p</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 3: Importance Table ── */}
      <section className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-8 items-stretch text-white">
         <div className="bg-indigo-700 rounded-[3rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden flex flex-col justify-center transform hover:scale-[1.01] transition-all group">
            <Sparkles className="absolute -top-10 -right-10 w-48 h-48 text-white/5 opacity-50 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
            <h2 className="text-4xl font-black mb-8 leading-tight">Why is the <br/>DOM Important?</h2>
            <p className="text-indigo-100 text-lg font-medium leading-relaxed mb-10 italic">
               Without the DOM, web pages would remain static museums. The DOM turns them into playgrounds.
            </p>
            <div className="space-y-4">
               {[
                 { f: "Login forms", d: "Validate user input instantly." },
                 { f: "Dark mode", d: "Change CSS dynamically." },
                 { f: "Todo apps", d: "Add or remove tasks via nodes." },
                 { f: "Games", d: "Update UI at 60 frames per second." }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-md">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                       <Check size={16} />
                    </div>
                    <div>
                       <span className="text-xs font-black uppercase tracking-widest block">{item.f}</span>
                       <p className="text-[10px] text-indigo-100 opacity-70 italic">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* ── Section 4: JS Relationship ── */}
         <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-12 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <Zap className="text-amber-500 fill-amber-500" /> The Connection
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 leading-relaxed">
              JavaScript uses the <code className="px-2 py-0.5 bg-slate-100 dark:bg-slate-900 rounded text-indigo-600 dark:text-indigo-400 font-bold">document</code> object to find, query, and manipulate elements in the tree.
            </p>
            
            <div className="space-y-4 mb-8">
               <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">1. HTML Target</span>
                  <code className="text-xs text-indigo-500 dark:text-indigo-400 font-bold italic">{'<h1 id="title">Hello</h1>'}</code>
               </div>
               <div className="flex justify-center flex-col items-center">
                  <ChevronRight className="rotate-90 text-slate-300" />
                  <span className="text-[8px] font-black text-slate-300 uppercase my-1 tracking-[0.3em]">Selection</span>
                  <ChevronRight className="rotate-90 text-slate-300" />
               </div>
               <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2 block">2. JavaScript Access</span>
                  <code className="text-[11px] text-emerald-400 font-mono">{'let el = document.getElementById("title");'}</code>
               </div>
            </div>
            
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-800 flex items-start gap-3">
               <MousePointer2 className="text-amber-600 mt-1 shrink-0" />
               <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed font-bold">
                  <span className="text-amber-600 uppercase italic underline decoration-wavy underline-offset-4">document</span> is the root object representing your entire website.
               </p>
            </div>
         </div>
      </section>

      {/* ── Section 5: The Document Object ── */}
      <section className="max-w-6xl mx-auto mb-20">
         <div className="grid lg:grid-cols-2 gap-12 text-white overflow-hidden rounded-[4rem] bg-slate-900 shadow-3xl">
            <div className="p-10 lg:p-16 flex flex-col justify-center space-y-8 bg-gradient-to-br from-indigo-600 to-indigo-800">
               <h2 className="text-4xl font-black italic tracking-tight">The Document Object</h2>
               <div className="space-y-6">
                  {[
                    { prop: "document.body", desc: "Returns the <body> element" },
                    { prop: "document.title", desc: "Returns the page title string" },
                    { prop: "document.URL", desc: "Returns the full page address" },
                    { prop: "document.head", desc: "Returns the <head> section" }
                  ].map((p, i) => (
                    <div key={i} className="flex justify-between items-center group cursor-pointer">
                       <code className="text-sm font-black text-indigo-200 group-hover:text-white transition-colors tracking-tighter">{p.prop}</code>
                       <span className="text-[10px] font-bold text-indigo-100 opacity-60 uppercase tracking-widest group-hover:opacity-100 transition-opacity">{p.desc}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="p-10 lg:p-16 flex flex-col justify-center relative">
               <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[120%] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
               <CodeBlock 
                 title="Live Document Inspector"
                 code={`console.log(document.title);\n// Output: "KnowGrow Static Hub"`} 
               />
               <div className="mt-8 flex items-center justify-center gap-12 font-black text-indigo-500 uppercase tracking-widest text-[10px]">
                  <div className="text-center group">
                     <span className="block italic opacity-40 group-hover:opacity-100 transition-opacity">Read Mode</span>
                     <Box size={20} className="mx-auto mt-2 opacity-20 group-hover:opacity-100 transition-all group-hover:scale-125" />
                  </div>
                  <div className="text-center group">
                     <span className="block italic opacity-40 group-hover:opacity-100 transition-opacity">Write Mode</span>
                     <Code size={20} className="mx-auto mt-2 opacity-20 group-hover:opacity-100 transition-all group-hover:scale-125" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6: Node Types ── */}
      <section className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { type: "Element", icon: <Layout />, example: "<h1>, <div>", color: "indigo" },
           { type: "Text", icon: <Type />, example: "Inner text content", color: "blue" },
           { type: "Attribute", icon: <Settings />, example: "id, class, src", color: "sky" },
           { type: "Comment", icon: <Sparkles />, example: "<!-- comment -->", color: "slate" }
         ].map((node, i) => (
           <div key={i} className={`p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-700 shadow-sm hover:border-${node.color}-500/50 transition-all cursor-default`}>
              <div className={`p-3 bg-${node.color}-50 dark:bg-${node.color}-900/30 text-${node.color}-500 inline-block rounded-2xl mb-6 shadow-sm`}>
                 {node.icon}
              </div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{node.type} Node</h4>
              <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">{node.type}</p>
              <code className="text-[10px] font-mono p-1 px-2 bg-slate-50 dark:bg-slate-900 rounded-lg text-slate-500">{node.example}</code>
           </div>
         ))}
      </section>

      {/* ── Section 7-8: Methods & Properties ── */}
      <section className="max-w-6xl mx-auto mb-20">
         <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-12 lg:p-16 border border-slate-100 dark:border-slate-700 shadow-sm text-white">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-12 text-center underline decoration-indigo-500 decoration-[6px] underline-offset-[12px]">The Toolbox</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
               {/* Methods */}
               <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                     <Terminal className="text-indigo-500" />
                     <span className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Global Methods</span>
                  </div>
                  <div className="space-y-2">
                     {[
                       { m: "getElementById()", d: "Select by ID" },
                       { m: "getElementsByClassName()", d: "Select by Class" },
                       { m: "getElementsByTagName()", d: "Select by Tag" },
                       { m: "querySelector()", d: "Select CSS Match" },
                       { m: "querySelectorAll()", d: "Select All Matches" }
                     ].map((item, i) => (
                       <div key={i} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 hover:scale-[1.02] transition-transform group">
                          <code className="text-sm font-black text-indigo-600 dark:text-indigo-400 group-hover:text-blue-500 transition-colors tracking-tighter">{item.m}</code>
                          <span className="text-[10px] font-bold text-slate-400 italic">{item.d}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Properties */}
               <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                     <Settings className="text-blue-500" />
                     <span className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Instance Properties</span>
                  </div>
                  <div className="space-y-2">
                     {[
                       { m: "innerHTML", d: "Get/Set HTML tags" },
                       { m: "textContent", d: "Get/Set raw text" },
                       { m: "style", d: "Direct CSS access" },
                       { m: "attributes", d: "Access all attributes" },
                       { m: "parentNode", d: "Navigate upwards" }
                     ].map((item, i) => (
                       <div key={i} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 hover:scale-[1.02] transition-transform group">
                          <code className="text-sm font-black text-blue-600 dark:text-blue-400 group-hover:text-indigo-500 transition-colors tracking-tighter">{item.m}</code>
                          <span className="text-[10px] font-bold text-slate-400 italic">{item.d}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9: Interactive Demo ── */}
      <section className="max-w-6xl mx-auto mb-20">
         <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-[4rem] p-10 lg:p-20 text-white shadow-3xl relative overflow-hidden flex flex-col items-center">
            <Zap className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] text-white/5 -rotate-12 translate-x-1/2 translate-y-1/2" />
            <h2 className="text-5xl font-black mb-6 text-center tracking-tight leading-tight">Moment of Truth</h2>
            <p className="text-indigo-100 text-xl font-medium mb-12 text-center max-w-2xl leading-relaxed italic opacity-80 decoration-wavy underline decoration-white/20">
               Click the dynamic button below to trigger your first DOM manipulation in this course.
            </p>
            
            <div className="w-full max-w-4xl bg-white rounded-[3.5rem] p-8 lg:p-12 shadow-2xl text-slate-900 flex flex-col md:flex-row gap-12 items-center">
               <div className="flex-1 text-center md:text-left space-y-4">
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest block">The Target element</span>
                  <h2 id="message" className="text-5xl font-black italic tracking-tighter animate-in zoom-in duration-500" key={demoText}>
                    {demoText}
                  </h2>
                  <div className="pt-8 flex flex-col gap-4">
                     <button 
                       onClick={changeText}
                       className="group relative px-10 py-5 bg-indigo-600 text-white rounded-[1.5rem] font-black text-lg uppercase tracking-widest shadow-2xl hover:bg-slate-900 hover:scale-[1.05] transition-all overflow-hidden"
                     >
                        <Play className="inline-block mr-3 animate-pulse" fill="white" /> Click Me
                        <div className="absolute top-0 -left-full w-full h-full bg-white/20 skew-x-[-20deg] group-hover:left-[150%] transition-all duration-700"></div>
                     </button>
                     <button 
                       onClick={() => setDemoText("Welcome")} 
                       className="px-6 py-2 bg-slate-100 rounded-xl text-[10px] font-black text-slate-400 hover:bg-indigo-50 hover:text-indigo-500 transition-colors uppercase tracking-[0.2em]"
                     >
                        Reset Demo
                     </button>
                  </div>
               </div>
               
               <div className="flex-1 w-full relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none"></div>
                  <CodeBlock 
                    title="Manipulation Script"
                    code={`function changeText() {\n  const el = document.getElementById("message");\n  el.innerHTML = "Hello Karthick!";\n}`} 
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto text-center py-20 opacity-40">
        <div className="flex items-center justify-center gap-3 mb-4 font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter text-3xl">
          <Sparkles className="w-8 h-8 opacity-50" />
          KNOWGROW Hub
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-600 to-transparent mx-auto mb-4"></div>
        <p className="text-base font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase italic">The Document Object Model Specialist</p>
      </footer>

    </div>
  );
};

export default DomIntro;