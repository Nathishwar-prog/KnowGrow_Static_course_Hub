import React, { useState } from 'react';
import {
  Move, ArrowUp, ArrowDown, ArrowLeftRight, 
  Component, Layout, Info, Sparkles, 
  ChevronRight, Box, Type, Settings, 
  Zap, Check, Copy, RefreshCw, Eye, 
  MousePointer2, Code, Database, List,
  ArrowBigUp, ArrowBigDown, ArrowBigLeft, ArrowBigRight
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

const DomNavigation: React.FC = () => {
  type NodeType = 'container' | 'h1' | 'p1' | 'p2';
  
  interface DomNode {
    name: string;
    type: string;
    children?: string[];
    parent?: string;
    siblings?: string[];
  }

  const [activeNode, setActiveNode] = useState<NodeType | null>(null);
  const [navMode, setNavMode] = useState<'elements' | 'nodes'>('elements');
  const [siblingFocus, setSiblingFocus] = useState<number>(1);

  // Relationship Data
  const nodes: Record<NodeType, DomNode> = {
    container: { name: "div#container", type: "Parent", children: ["h1", "p1", "p2"] },
    h1: { name: "h1", type: "Child", parent: "container", siblings: ["p1", "p2"] },
    p1: { name: "p#first", type: "Child", parent: "container", siblings: ["h1", "p2"] },
    p2: { name: "p#second", type: "Child", parent: "container", siblings: ["h1", "p1"] }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-amber-50 via-slate-50 to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-orange-950/20 min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900 text-slate-900 dark:text-slate-100">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-20 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl mb-8 shadow-2xl transform hover:rotate-3 hover:scale-105 transition-all duration-500 cursor-pointer group">
          <Move className="w-12 h-12 text-white group-hover:animate-bounce" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black mb-6 tracking-tight">
          DOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Navigation</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Learn how to traverse the tree structure of your webpage, moving from parent to child and between siblings with surgical precision.
        </p>
      </header>

      {/* ── Section 1-2: Intro & Structure Visualization ── */}
      <section className="max-w-6xl mx-auto mb-20 space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
              <Info size={14} className="mr-2" /> The Hierarchy
            </div>
            <h2 className="text-4xl font-black tracking-tight leading-tight">
              Moving Through the <span className="underline decoration-amber-500 decoration-wavy underline-offset-8 italic">DNA</span> of Your Webpage
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              DOM Navigation refers to the process of moving between elements (nodes) in the DOM tree. Every element has a position relative to others: <b>Parents</b>, <b>Children</b>, and <b>Siblings</b>.
            </p>
            <div className="flex flex-wrap gap-4">
               {[
                 { label: "Parent", icon: <ArrowUp size={14}/>, color: "bg-amber-600" },
                 { label: "Children", icon: <ArrowDown size={14}/>, color: "bg-orange-500" },
                 { label: "Siblings", icon: <ArrowLeftRight size={14}/>, color: "bg-yellow-500" }
               ].map((tag, i) => (
                 <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className={`p-1 ${tag.color} text-white rounded-md`}>{tag.icon}</div>
                    <span className="text-xs font-black uppercase tracking-widest">{tag.label}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Visual Structure Map */}
          <div className="bg-slate-900 rounded-[3rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-full bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10 space-y-8">
                <div id="container" className={`p-6 border-2 rounded-[2rem] transition-all cursor-pointer ${activeNode === 'container' ? 'border-amber-500 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.2)]' : 'border-white/10'}`} onClick={() => setActiveNode('container')}>
                   <div className="flex justify-between items-center mb-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <span>#container</span>
                      <span className="text-amber-500">Parent</span>
                   </div>
                   
                   <div className="grid grid-cols-1 gap-4">
                      <div id="main-title" className={`p-4 border-2 rounded-xl transition-all ${activeNode === 'h1' ? 'border-orange-500 bg-orange-500/10' : 'border-white/10'}`} onClick={(e) => { e.stopPropagation(); setActiveNode('h1'); }}>
                         <span className="text-[9px] font-black uppercase text-slate-500">h1</span>
                         <p className="text-white text-xs font-bold mt-1">Main Title</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div id="first" className={`p-4 border-2 rounded-xl transition-all ${activeNode === 'p1' ? 'border-yellow-500 bg-yellow-500/10' : 'border-white/10'}`} onClick={(e) => { e.stopPropagation(); setActiveNode('p1'); }}>
                            <span className="text-[9px] font-black uppercase text-slate-500">p#first</span>
                            <p className="text-white text-[10px] font-medium mt-1">First paragraph</p>
                         </div>
                         <div id="second" className={`p-4 border-2 rounded-xl transition-all ${activeNode === 'p2' ? 'border-yellow-500 bg-yellow-500/10' : 'border-white/10'}`} onClick={(e) => { e.stopPropagation(); setActiveNode('p2'); }}>
                            <span className="text-[9px] font-black uppercase text-slate-500">p#second</span>
                            <p className="text-white text-[10px] font-medium mt-1">Second paragraph</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-4 border border-white/5 min-h-[60px]">
                   {activeNode ? (
                     <div className="flex items-start gap-3 animate-in fade-in slide-in-from-left-2">
                        <Sparkles className="text-amber-400 mt-1 shrink-0" size={16} />
                        <div>
                           <p className="text-white text-xs font-bold uppercase tracking-widest">{nodes[activeNode].name}</p>
                           <p className="text-slate-500 text-[10px] italic">
                              {nodes[activeNode].type} {nodes[activeNode].parent && `of ${nodes[activeNode].parent}`}
                              {nodes[activeNode].children && ` containing ${nodes[activeNode].children?.join(', ')}`}
                           </p>
                        </div>
                     </div>
                   ) : (
                     <p className="text-slate-500 text-xs text-center italic py-2">Click an element in the map to see relationships</p>
                   )}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Parent Node Navigation ── */}
      <section className="max-w-6xl mx-auto mb-20">
         <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-16 border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-6">
                  <h2 className="text-3xl font-black italic tracking-tight flex items-center gap-3">
                     <ArrowUp className="text-amber-500" /> parentNode
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                     Moving upwards from a child to its parent is simple. The <code className="px-2 py-0.5 bg-slate-100 dark:bg-slate-900 rounded text-amber-600 font-bold">parentNode</code> property retrieves the container holding the current element.
                  </p>
                  <CodeBlock 
                    title="Ascending the Tree"
                    code={`let el = document.getElementById("first");\nconsole.log(el.parentNode);\n// Output: <div id="container">...</div>`} 
                  />
               </div>
               
               <div className="relative group p-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[2.5rem] shadow-2xl overflow-hidden cursor-pointer" onClick={() => setActiveNode('container')}>
                  <div className="absolute inset-0 bg-white dark:bg-slate-900 m-1 rounded-[2.2rem]"></div>
                  <div className="relative p-12 flex flex-col items-center">
                     <div className="w-full p-8 border-2 border-dashed border-amber-200 dark:border-amber-900/50 rounded-3xl flex flex-col items-center group-hover:bg-amber-50 dark:group-hover:bg-amber-900/10 transition-colors">
                        <div className="px-4 py-2 bg-amber-500 text-white rounded-lg text-xs font-black shadow-lg mb-6">Parent Container</div>
                        <div className="p-4 bg-slate-900 text-white rounded-xl shadow-xl animate-bounce">
                           <span className="text-[10px] font-black uppercase text-amber-500 tracking-widest block mb-1">Target</span>
                           <p className="text-xs">childElement</p>
                        </div>
                     </div>
                     <div className="mt-8 flex items-center gap-2 font-black text-amber-500 uppercase tracking-widest text-[10px]">
                        <ArrowBigUp size={16} /> Ascending to Parent
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4-5: Child Node Navigation ── */}
      <section className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-8 items-stretch">
         <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-3xl font-black mb-8 flex items-center gap-4 italic underline decoration-amber-500 decoration-4 underline-offset-8">
               <ArrowDown className="text-amber-500" /> Child Discovery
            </h2>
            
            <div className="flex bg-black/40 p-1.5 rounded-2xl mb-10 w-fit self-center lg:self-start">
               {['elements', 'nodes'].map((mode) => (
                 <button
                   key={mode}
                   onClick={() => setNavMode(mode as any)}
                   className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                     navMode === mode
                     ? 'bg-amber-500 text-white shadow-lg'
                     : 'text-slate-500 hover:text-white'
                   }`}
                 >
                   {mode === 'elements' ? '.children' : '.childNodes'}
                 </button>
               ))}
            </div>

            <div className="space-y-4">
               <div className="p-6 bg-white/5 rounded-3xl border border-white/5 min-h-[220px]">
                  <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-6 block italic">Results Visualization</p>
                  <div className="flex flex-col gap-3">
                     <div className="p-4 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex justify-between items-center transition-all animate-in slide-in-from-left-4">
                        <span className="text-xs font-bold">Element: h1</span>
                        <span className="text-[9px] font-black uppercase opacity-50">index: 0</span>
                     </div>
                     {navMode === 'nodes' && (
                       <div className="p-4 bg-slate-500/10 border border-white/5 rounded-2xl flex justify-between items-center italic text-slate-500 animate-in fade-in duration-500">
                          <span className="text-[10px]">#text (Whitespace)</span>
                          <span className="text-[9px] font-black uppercase opacity-50">Node</span>
                       </div>
                     )}
                     <div className="p-4 bg-orange-400/20 border border-orange-400/30 rounded-2xl flex justify-between items-center transition-all animate-in slide-in-from-left-4 delay-75">
                        <span className="text-xs font-bold">Element: p</span>
                        <span className="text-[9px] font-black uppercase opacity-50">index: {navMode === 'nodes' ? 2 : 1}</span>
                     </div>
                  </div>
               </div>
               
               <div className="p-4 bg-black/50 rounded-2xl flex items-start gap-3">
                  <Info className="text-amber-400 mt-1 shrink-0" size={14} />
                  <p className="text-[10px] leading-relaxed text-slate-400 font-medium">
                     <b>.children</b> returns only HTML tags, while <b>.childNodes</b> includes everything: elements, text, and even comments.
                  </p>
               </div>
            </div>
         </div>

         {/* Section 6: First/Last Element */}
         <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-14 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-center">
            <h2 className="text-3xl font-black mb-8 italic tracking-tight flex items-center gap-3">
               <ArrowLeftRight className="text-orange-500" /> Edge Selection
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed">
               Use these properties to jump directly to the first or last element within a container, skipping all whitespace nodes.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 group hover:border-amber-500 transition-colors cursor-pointer">
                  <ArrowBigLeft className="text-slate-300 mb-3 group-hover:text-amber-500 group-hover:-translate-x-1 transition-all" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">First Child</p>
                  <code className="text-[11px] font-bold text-slate-900 dark:text-white">firstElementChild</code>
               </div>
               <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 group hover:border-orange-500 transition-colors cursor-pointer text-right">
                  <ArrowBigRight className="text-slate-300 ml-auto mb-3 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Last Child</p>
                  <code className="text-[11px] font-bold text-slate-900 dark:text-white">lastElementChild</code>
               </div>
            </div>
            <CodeBlock 
              title="Surgical Traverse"
              code={`let first = container.firstElementChild;\nlet last = container.lastElementChild;`} 
            />
         </div>
      </section>

      {/* ── Section 7: Sibling Navigation Interactive ── */}
      <section className="max-w-6xl mx-auto mb-20">
         <div className="bg-amber-600 rounded-[3rem] p-10 lg:p-20 text-white shadow-3xl relative overflow-hidden flex flex-col items-center">
            <ArrowLeftRight className="absolute -bottom-10 -right-10 w-96 h-96 text-white/5 -rotate-12 translate-x-1/2 translate-y-1/2" />
            <div className="relative z-10 w-full grid lg:grid-cols-2 gap-20 items-center">
               <div className="order-2 lg:order-1 relative bg-white rounded-[3.5rem] p-8 lg:p-12 shadow-3xl text-slate-900">
                  <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-8 text-center">Sibling List Traverse</h4>
                  <ul id="list-demo" className="space-y-4 mb-10">
                     {[1, 2, 3].map((i) => (
                       <li 
                         key={i} 
                         className={`p-5 rounded-2xl border-2 transition-all flex items-center justify-between font-bold text-sm ${
                           siblingFocus === i 
                           ? 'border-amber-500 bg-amber-50 ring-4 ring-amber-500/10' 
                           : 'border-slate-100 bg-slate-50 text-slate-400'
                         }`}
                       >
                          <span>List Item #{i}</span>
                          {siblingFocus === i && <Zap size={16} className="text-amber-500 fill-amber-500 animate-pulse" />}
                       </li>
                     ))}
                  </ul>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <button 
                       onClick={() => setSiblingFocus(prev => Math.max(1, prev - 1))}
                       disabled={siblingFocus === 1}
                       className="py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-amber-500 disabled:opacity-20 transition-all"
                     >
                        <ArrowBigLeft size={16} /> previousElementSibling
                     </button>
                     <button 
                       onClick={() => setSiblingFocus(prev => Math.min(3, prev + 1))}
                       disabled={siblingFocus === 3}
                       className="py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-amber-500 disabled:opacity-20 transition-all"
                     >
                        nextElementSibling <ArrowBigRight size={16} />
                     </button>
                  </div>
               </div>

               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter italic lg:text-left text-center">Sibling <br/>Synchronization</h2>
                  <p className="text-amber-100 font-medium mb-12 text-lg leading-relaxed italic opacity-80 lg:text-left text-center">
                    Elements sharing the same parent are <b>Siblings</b>. Moving horizontally between them is essential for carousels, tabs, and step-based wizards.
                  </p>
                  <div className="space-y-4 font-mono text-[11px] text-amber-200 lg:text-left text-center border-l-2 border-amber-500/30 pl-6">
                     <div className="flex gap-4 group">
                        <span className="text-white font-black opacity-40 group-hover:opacity-100">nextSibling</span> ⎯ Returns next node
                     </div>
                     <div className="flex gap-4 group">
                        <span className="text-white font-black opacity-40 group-hover:opacity-100">previousSibling</span> ⎯ Returns prev node
                     </div>
                     <div className="flex gap-4 group">
                        <span className="text-white font-black opacity-40 group-hover:opacity-100">nextElementSibling</span> ⎯ Returns next tag
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Real-World Example (Highlight Generator) ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-white dark:bg-slate-800 rounded-[4rem] p-12 lg:p-20 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center">
            <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6 text-center tracking-tighter">Real-World Highlight</h2>
            <p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl mb-16 font-medium italic">
               A classic usage: highlighting the next item in a menu based on user interaction tree traversal.
            </p>
            
            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center">
               <ul id="menu-app" className="w-full space-y-3 mb-10">
                  <li className={`p-4 rounded-xl border-2 font-black tracking-widest text-xs uppercase flex items-center justify-center transition-all ${siblingFocus === 1 ? 'border-amber-500 text-amber-500 bg-amber-50 dark:bg-amber-900/10' : 'border-transparent text-slate-300'}`}>1. Overview</li>
                  <li className={`p-4 rounded-xl border-2 font-black tracking-widest text-xs uppercase flex items-center justify-center transition-all ${siblingFocus === 2 ? 'border-amber-500 text-amber-500 bg-amber-50 dark:bg-amber-900/10 shadow-[0_4px_20px_rgba(245,158,11,0.3)] scale-105' : 'border-transparent text-slate-300'}`}>2. Core Concept</li>
                  <li className={`p-4 rounded-xl border-2 font-black tracking-widest text-xs uppercase flex items-center justify-center transition-all ${siblingFocus === 3 ? 'border-amber-500 text-amber-500 bg-amber-50 dark:bg-amber-900/10' : 'border-transparent text-slate-300'}`}>3. Implementation</li>
               </ul>
               
               <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full mb-10 relative overflow-hidden">
                  <div className="absolute top-0 h-full bg-amber-500 transition-all duration-500 shadow-[0_0_10px_rgba(245,158,11,1)]" style={{ left: `${(siblingFocus - 1) * 33.3}%`, width: '33.3%' }}></div>
               </div>

               <div className="flex gap-2">
                  <button 
                    onClick={() => setSiblingFocus(prev => prev > 1 ? prev - 1 : 1)}
                    className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-amber-500 hover:text-white transition-all shadow-sm"
                  >
                     <ArrowBigLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setSiblingFocus(prev => prev < 3 ? prev + 1 : 3)}
                    className="p-5 bg-slate-900 text-white rounded-2xl hover:bg-amber-500 transition-all shadow-xl"
                  >
                     <ArrowBigRight size={20} />
                  </button>
               </div>
            </div>
            
            <div className="mt-16 w-full max-w-2xl">
               <CodeBlock 
                 title="The Script Behind the Curtain"
                 code={`let curr = document.getElementById("first");\ncurr.nextElementSibling.style.color = "red";`} 
               />
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
        <p className="text-base font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase italic">The Document Object Model Traversal Specialist</p>
      </footer>

    </div>
  );
};

export default DomNavigation;