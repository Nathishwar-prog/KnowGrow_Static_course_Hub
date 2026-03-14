import React, { useState, useEffect } from 'react';
import {
  List, Layers, Zap, Info, Sparkles, 
  ChevronRight, Box, Type, Settings, 
  RefreshCw, Eye, MousePointer2, Code, 
  Database, Check, Copy, AlertCircle, 
  ArrowRight, Hash, Terminal, Layout
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
          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-amber-500 hover:text-white transition-colors border border-slate-700"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-slate-900 text-amber-300 leading-relaxed shadow-inner">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomNodeLists: React.FC = () => {
  const [highlighted, setHighlighted] = useState<number | null>(null);
  const [nodeCount, setNodeCount] = useState(3);
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [appliedColor, setAppliedColor] = useState<string>('text-slate-400');

  // Animation effect for live demo
  useEffect(() => {
    if (isLiveActive) {
      const timer = setTimeout(() => setIsLiveActive(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [nodeCount, isLiveActive]);

  const handleAddNode = () => {
    setNodeCount(prev => prev + 1);
    setIsLiveActive(true);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-amber-50 via-slate-50 to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-orange-950/20 min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900 text-slate-900 dark:text-slate-100">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-20 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl mb-8 shadow-2xl transform hover:rotate-3 hover:scale-105 transition-all duration-500 cursor-pointer group">
          <List className="w-12 h-12 text-white group-hover:animate-pulse" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black mb-6 tracking-tight">
          DOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Node Lists</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Master the collections returned by JavaScript. Learn to iterate, manipulate, and understand the crucial difference between static collections and live trees.
        </p>
      </header>

      {/* ── Section 1-2: Intro & Visual Concept ── */}
      <section className="max-w-6xl mx-auto mb-24 space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
              <Info size={14} className="mr-2" /> Collection Basics
            </div>
            <h2 className="text-4xl font-black tracking-tight leading-tight italic decoration-amber-500/30 underline underline-offset-8">
               More Than Just<br/>An Array.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              A <b>NodeList</b> is a collection of nodes returned by methods like <code className="text-amber-600 font-bold">querySelectorAll()</code>. While they look like arrays, they have specific properties that make them unique to the DOM.
            </p>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm border-l-4 border-l-amber-500">
               <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  "A NodeList is an array-like collection of DOM nodes that allows JavaScript to access multiple elements at once."
               </p>
            </div>
          </div>

          {/* Visual Concept Visualization */}
          <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-full bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-500/20 text-amber-500 rounded-xl"><Layers size={18}/></div>
                      <span className="text-xs font-black uppercase tracking-widest text-white">NodeList Visualization</span>
                   </div>
                   <span className="text-[10px] font-mono text-slate-500 tracking-tighter">length: 3</span>
                </div>

                <div className="space-y-4">
                   {[
                     { index: 0, tag: "li", content: "HTML" },
                     { index: 1, tag: "li", content: "CSS" },
                     { index: 2, tag: "li", content: "JavaScript" }
                   ].map((item) => (
                     <div 
                       key={item.index}
                       className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-6 ${highlighted === item.index ? 'border-amber-500 bg-amber-500/10' : 'border-white/5 bg-white/[0.02]'}`}
                       onMouseEnter={() => setHighlighted(item.index)}
                       onMouseLeave={() => setHighlighted(null)}
                     >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[10px] font-black font-mono transition-colors ${highlighted === item.index ? 'bg-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'bg-slate-800 text-slate-400'}`}>
                           {item.index}
                        </div>
                        <div className="flex-1">
                           <span className="text-[9px] font-black uppercase text-amber-500 block mb-1">Node Item</span>
                           <h4 className="text-white text-xs font-bold font-mono">&lt;{item.tag}&gt;{item.content}&lt;/{item.tag}&gt;</h4>
                        </div>
                        <ArrowRight size={14} className={`text-slate-700 transition-transform ${highlighted === item.index ? 'translate-x-1 text-amber-500' : ''}`} />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3-5: Creation & Access ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-8 items-stretch">
         <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-14 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
            <div>
               <h2 className="text-3xl font-black mb-8 italic tracking-tight flex items-center gap-3 underline decoration-amber-500/40 decoration-wavy">
                  <Hash className="text-amber-500" /> Selection & Syntax
               </h2>
               <p className="text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed">
                  The most common way to generate a NodeList is using <code className="px-2 py-0.5 bg-slate-100 dark:bg-slate-900 rounded font-bold">querySelectorAll()</code>. This method finds all matching elements and packages them into a static list.
               </p>
               <CodeBlock 
                 title="Creating a NodeList"
                 code={`let items = document.querySelectorAll(".text");\nconsole.log(items); // NodeList(3) [p, p, p]`} 
               />
            </div>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 flex items-center gap-6">
               <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-2xl">
                  <Terminal size={20} className="text-amber-600" />
               </div>
               <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Accessing indices</p>
                  <p className="text-xs font-mono font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                     console.log(items[0]); <span className="text-slate-500 ml-2">// First element</span>
                  </p>
               </div>
            </div>
         </div>

         <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-14 text-white shadow-2xl flex flex-col group relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"></div>
            <h2 className="text-3xl font-black mb-8 italic tracking-tight flex items-center gap-3">
               <Box className="text-amber-500" /> The Length Property
            </h2>
            <p className="text-slate-400 mb-12 font-medium leading-relaxed italic">
               The <code className="text-white">.length</code> property is your compass. It tells you exactly how many nodes are in the collection, allowing for precise looping operations.
            </p>
            
            <div className="relative h-48 bg-black/40 rounded-3xl border border-white/5 flex flex-col items-center justify-center group-hover:bg-black/60 transition-all overflow-hidden mb-8">
               <div className="text-7xl font-black text-amber-500 animate-in fade-in zoom-in duration-700 flex items-center gap-2">
                  {nodeCount} 
                  <span className="text-xs font-black uppercase text-slate-600 tracking-[0.4em] rotate-90 ml-4">Items</span>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
               <div className="absolute bottom-6 flex gap-2">
                  {Array.from({ length: nodeCount }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] animate-pulse"></div>
                  ))}
               </div>
            </div>

            <button 
              onClick={handleAddNode}
              className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-white transition-all active:scale-95"
            >
               <RefreshCw size={14} className={isLiveActive ? 'animate-spin' : ''} /> Dynamically Add Node
            </button>
         </div>
      </section>

      {/* ── Section 6: Looping Lab (forEach) ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-amber-600 rounded-[3rem] p-10 lg:p-20 text-white shadow-3xl relative overflow-hidden flex flex-col items-center">
            <Zap className="absolute -top-10 -left-10 w-80 h-80 text-white/5 -rotate-12" />
            <div className="relative z-10 w-full grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-6 text-center lg:text-left">
                  <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight italic">The .forEach() <br/>Iteration Lab</h2>
                  <p className="text-amber-100 font-medium mb-12 text-lg leading-relaxed italic opacity-80">
                    Applying actions to multiple elements at once is where NodeLists shine. The <code className="text-white text-xl">.forEach()</code> method is modern and built-in.
                  </p>
                  <CodeBlock 
                    title="Batch Transformation"
                    code={`elements.forEach(function(el) {\n  el.style.color = "blue";\n});`} 
                  />
               </div>

               <div className="bg-white rounded-[3.5rem] p-8 lg:p-12 shadow-3xl text-slate-900 relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-400 rounded-3xl rotate-12 flex items-center justify-center shadow-xl animate-bounce">
                     <Sparkles className="text-white" size={32} />
                  </div>
                  <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-8 text-center">Interactive Playground</h4>
                  <div className="space-y-4 mb-10">
                     {[1, 2, 3].map((i) => (
                       <div key={i} className={`p-5 rounded-2xl border-2 transition-all duration-500 flex items-center gap-4 font-bold text-sm ${appliedColor === 'text-amber-500' ? 'border-amber-500 bg-amber-50' : 'border-slate-100 bg-slate-50'}`}>
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${appliedColor === 'text-amber-500' ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-400'}`}>0{i}</div>
                          <span className={`${appliedColor} transition-colors duration-500 uppercase tracking-widest text-[10px]`}>Paragraph Element #{i}</span>
                       </div>
                     ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <button 
                       onClick={() => setAppliedColor('text-amber-500')}
                       className="py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-amber-500 transition-all active:scale-95 group"
                     >
                        <Zap size={14} className="group-hover:fill-white" /> Transform All
                     </button>
                     <button 
                       onClick={() => setAppliedColor('text-slate-400')}
                       className="py-4 border-2 border-slate-100 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-2"
                     >
                        <RefreshCw size={14} /> Reset Styles
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: NodeList vs HTMLCollection Table ── */}
      <section className="max-w-4xl mx-auto mb-24">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4 italic">The Collection Face-off</h2>
            <p className="text-slate-500 font-medium italic underline decoration-amber-500 decoration-wavy underline-offset-8 decoration-4">Which one should you use?</p>
         </div>

         <div className="bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 dark:border-slate-700">
                     <th className="p-8">Feature</th>
                     <th className="p-8 text-amber-600">NodeList</th>
                     <th className="p-8 text-slate-900 dark:text-white">HTMLCollection</th>
                  </tr>
               </thead>
               <tbody className="text-sm font-medium">
                  {[
                    { f: "Returned by", n: "querySelectorAll()", h: "getElementsByClassName()" },
                    { f: "Contains", n: "Nodes (Any type)", h: "Elements Only" },
                    { f: "Supports forEach()", n: "Yes ✅", h: "No ❌" },
                    { f: "Live collection", n: "Sometimes (Static generally)", h: "Always Live 🔄" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                       <td className="p-8 font-black text-[11px] uppercase tracking-widest text-slate-400 italic">{row.f}</td>
                       <td className="p-8 font-bold text-amber-600">{row.n}</td>
                       <td className="p-8 font-bold text-slate-700 dark:text-slate-300 italic opacity-80">{row.h}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>

      {/* ── Section 8: Static vs Live Comparison ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] p-10 lg:p-14 group">
               <h3 className="text-2xl font-black mb-6 flex items-center gap-3 italic">
                  <Box className="text-slate-400 group-hover:text-amber-500 transition-colors" /> Static NodeList
               </h3>
               <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  Does not update automatically. It's a "snapshot" taken at the moment you called the method. Adding elements later won't change the list count.
               </p>
               <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between font-mono">
                  <span className="text-xs text-slate-400">Snapshot Count:</span>
                  <span className="text-2xl font-black text-amber-600">3</span>
               </div>
            </div>

            <div className={`bg-amber-100/50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-[3rem] p-10 lg:p-14 transition-all duration-500 ${isLiveActive ? 'scale-105 shadow-2xl ring-4 ring-amber-500/20' : ''}`}>
               <h3 className="text-2xl font-black mb-6 flex items-center gap-3 italic text-amber-600">
                  <RefreshCw className={`text-amber-500 ${isLiveActive ? 'animate-spin' : ''}`} /> Live collection
               </h3>
               <p className="text-amber-700/80 dark:text-amber-400/80 font-medium leading-relaxed mb-8">
                  Updates dynamically. If you add a child node to an element, its <code className="italic font-bold">.childNodes</code> property automatically reflects the new node.
               </p>
               <div className={`p-6 bg-white dark:bg-slate-800 rounded-3xl border border-amber-200 dark:border-amber-700 shadow-lg flex items-center justify-between font-mono lg:translate-y-2 transition-transform ${isLiveActive ? 'scale-110' : ''}`}>
                  <span className="text-xs text-amber-600 font-bold uppercase tracking-widest">Live Count:</span>
                   <div className="flex items-center gap-3">
                      <span className="text-3xl font-black text-amber-600 tabular-nums animate-in zoom-in duration-500" key={nodeCount}>{nodeCount}</span>
                      {isLiveActive && <Sparkles className="text-amber-500" size={20} />}
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9: Real-World Example (Highlight Project) ── */}
      <section className="max-w-6xl mx-auto mb-20">
         <div className="bg-white dark:bg-slate-800 rounded-[4rem] p-12 lg:p-24 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(245,158,11,0.05),transparent)]"></div>
            
            <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6 text-center tracking-tighter italic">Highlight Matrix</h2>
            <p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl mb-20 font-medium italic leading-relaxed">
               Build dynamic Dashboards, Navigation Menus, or interactive lists where batch updates are applied using NodeList iteration.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-5xl relative z-10">
               <div className="space-y-4">
                  <CodeBlock 
                    title="The High-Performance Script"
                    code={`let items = document.querySelectorAll("#menu li");\n\nitems.forEach(function(item) {\n  item.style.backgroundColor = "lightgray";\n});`} 
                  />
                  <div className="p-6 bg-amber-50 dark:bg-amber-900/10 rounded-3xl border border-amber-100 dark:border-amber-800/30 flex items-start gap-4">
                     <Settings className="text-amber-500 mt-1 shrink-0" size={18} />
                     <p className="text-[11px] leading-relaxed italic text-amber-700 dark:text-amber-400 font-medium">
                        <b>Pro Tip:</b> Use classes instead of inline styles for batch updates to keep your DOM clean and performant.
                     </p>
                  </div>
               </div>

               <div className="bg-slate-900 rounded-[3.5rem] p-12 shadow-3xl relative group overflow-hidden border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-12 text-center underline decoration-amber-500/50 underline-offset-8 italic">Admin Dashboard Menu</h4>
                  <ul className="space-y-3 relative z-10">
                     {['Dashboard', 'Analytics', 'Users', 'Settings'].map((item, i) => (
                       <li 
                         key={i} 
                         className={`p-4 rounded-xl border font-black text-[10px] uppercase tracking-widest flex items-center justify-between transition-all duration-700 ${appliedColor === 'text-amber-500' ? 'border-amber-500/30 bg-amber-500/10 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.1)] scale-102' : 'border-white/5 bg-white/5 text-slate-500'}`}
                       >
                          <span>{item}</span>
                          {appliedColor === 'text-amber-500' && <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-lg" />}
                       </li>
                     ))}
                  </ul>
                  
                  <div className="mt-12 flex justify-center">
                     <button 
                       onClick={() => setAppliedColor(prev => prev === 'text-amber-500' ? 'text-slate-500' : 'text-amber-500')}
                       className={`px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl transition-all active:scale-95 flex items-center gap-3 ${appliedColor === 'text-amber-500' ? 'bg-amber-500 text-white shadow-amber-500/40' : 'bg-white text-slate-900'}`}
                     >
                        {appliedColor === 'text-amber-500' ? 'Reset Interface' : 'Highlight All Active'}
                        <Check size={14} />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto text-center py-10 opacity-40">
        <div className="flex items-center justify-center gap-3 mb-4 font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter text-3xl">
          <Sparkles className="w-8 h-8 opacity-50 text-amber-500" />
          KNOWGROW Hub
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-300 dark:via-amber-600 to-transparent mx-auto mb-4"></div>
        <p className="text-base font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase italic">The Collection Authority</p>
      </footer>

    </div>
  );
};

export default DomNodeLists;