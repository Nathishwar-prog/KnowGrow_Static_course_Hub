import React, { useState, useEffect } from 'react';
import {
  Square, TreeDeciduous, Search, Type, Palette, PlusCircle, 
  Trash2, Info, Activity, MousePointer2, Layout, Check, 
  Copy, Globe, Zap, Hash, Layers, Code2, Terminal, MoreHorizontal
} from 'lucide-react';

// ─── Code Block Component ─────────────────────────────────────────────────────
const CodeBlock = ({ code, title }: { code: string; title?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-emerald-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomElements: React.FC = () => {
  const [demoText, setDemoText] = useState("Hello World");
  const [demoColor, setDemoColor] = useState("emerald");
  const [spawnedElements, setSpawnedElements] = useState<number[]>([]);
  const [counter, setCounter] = useState(0);

  const handleUpdateContent = () => {
    setDemoText("Welcome to JavaScript");
  };

  const handleUpdateStyle = () => {
    setDemoColor(demoColor === "emerald" ? "blue" : "emerald");
  };

  const handleSpawn = () => {
    setCounter(prev => prev + 1);
    setSpawnedElements(prev => [...prev, counter]);
  };

  const handleRemove = (id: number) => {
    setSpawnedElements(prev => prev.filter(item => item !== id));
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-pointer">
          <Square className="w-8 h-8 text-white fill-current/20" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          DOM Elements
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The building blocks of the web. Learn how to select, manipulate, and generate HTML elements using the power of JavaScript.
        </p>
      </header>

      {/* ── Section 1: What are DOM Elements? ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-emerald-500" /> What are DOM Elements?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            A <strong className="text-emerald-600 dark:text-emerald-400">DOM element</strong> represents a single HTML tag in the DOM tree. For example, <code className="text-emerald-500 font-bold">{"<h1>"}</code> and <code className="text-emerald-500 font-bold">{"<p>"}</code> are DOM elements.
          </p>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-2xl border-l-4 border-emerald-500">
             <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">Simple Definition</h4>
             <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug">
               A DOM element is an HTML tag that can be accessed and manipulated using JavaScript through the DOM.
             </p>
          </div>
        </div>
        <div className="w-full">
          <CodeBlock 
            title="HTML Structure"
            code={`<h1>Hello World</h1>\n<p>This is a paragraph</p>`} 
          />
        </div>
      </section>

      {/* ── Section 2: DOM Tree Representation ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
           <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
             <TreeDeciduous className="text-emerald-500 w-8 h-8 mr-4" /> DOM Tree Representation
           </h2>
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  When the browser loads an HTML document, it creates a tree structure where each node is an element.
                </p>
                <CodeBlock 
                  title="Source HTML"
                  code={`<html>\n  <body>\n    <h1>Welcome</h1>\n    <p>JavaScript DOM</p>\n  </body>\n</html>`} 
                />
             </div>
             <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold mb-6 italic">Document</div>
                  <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mb-6"></div>
                  <div className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-xs font-bold mb-6 uppercase">HTML</div>
                  <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mb-6"></div>
                  <div className="px-4 py-2 bg-emerald-400 text-white rounded-lg text-xs font-bold mb-6">body</div>
                  <div className="flex items-center gap-12">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mb-2"></div>
                      <div className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-emerald-400 rounded-md text-[10px] font-black tracking-widest uppercase">h1</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mb-2"></div>
                      <div className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-emerald-400 rounded-md text-[10px] font-black tracking-widest uppercase">p</div>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* ── Section 3-8: Selector Matrix ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
          <Search className="text-teal-500 w-8 h-8 mr-4" /> Accessing DOM Elements
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { tag: "ID", method: "getElementById()", code: 'document.getElementById("demo")', desc: "Selects the unique element with the matching ID attribute.", icon: <Hash size={18} /> },
            { tag: "Tag", method: "getElementsByTagName()", code: 'document.getElementsByTagName("p")', desc: "Returns a live HTMLCollection of all matching tag names.", icon: <Code2 size={18} /> },
            { tag: "Class", method: "getElementsByClassName()", code: 'document.getElementsByClassName("box")', desc: "Returns a collection of all elements with the specified class.", icon: <Layers size={18} /> },
            { tag: "Query", method: "querySelector()", code: 'document.querySelector(".box")', desc: "Returns the first element that matches the specified CSS selector.", icon: <Search size={18} /> },
            { tag: "All", method: "querySelectorAll()", code: 'document.querySelectorAll(".box")', desc: "Returns a static NodeList of all matching CSS selectors.", icon: <Activity size={18} /> },
            { tag: "Body", method: "document.body", code: 'document.body', desc: "Direct shortcut access to the element representation of the page body.", icon: <Layout size={18} /> }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.tag}</span>
              </div>
              <h4 className="text-sm font-black text-gray-900 dark:text-white mb-2 font-mono">{item.method}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed font-medium">{item.desc}</p>
              <div className="bg-gray-900 px-3 py-2 rounded-lg">
                <code className="text-[10px] text-teal-400 font-mono break-all">{item.code}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 9-10: Content & Style Sandbox ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
           <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center">
             <Type className="text-emerald-500 w-8 h-8 mr-4" /> Manipulation Sandbox
           </h2>
           <p className="text-gray-600 dark:text-gray-400 font-medium">
             JavaScript can dynamically update both the <strong className="text-emerald-500">content</strong> (innerHTML) and <strong className="text-emerald-500">style</strong> of DOM elements.
           </p>
           <CodeBlock 
             title="Content Update"
             code={`document.getElementById("demo")\n  .innerHTML = "Welcome to JavaScript";`} 
           />
           <CodeBlock 
             title="Style Update"
             code={`document.getElementById("demo")\n  .style.color = "blue";`} 
           />
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-xl border border-emerald-100 dark:border-emerald-900/30 relative">
          <div className="absolute top-4 right-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            Live Preview
          </div>
          <h4 className="text-sm font-black text-gray-800 dark:text-white mb-10 flex items-center gap-2">
            <Palette className="w-4 h-4 text-emerald-500" /> Interactive Element
          </h4>

          <div className="flex flex-col items-center gap-10">
            <div className={`p-10 rounded-3xl border-2 border-dashed ${demoColor === 'emerald' ? 'border-emerald-200 bg-emerald-50/30' : 'border-blue-200 bg-blue-50/30'} flex items-center justify-center min-w-[280px] transition-all duration-500`}>
               <p id="demo-preview" style={{ color: demoColor === 'emerald' ? '#10b981' : '#3b82f6' }} className="text-3xl font-black transition-colors duration-500">
                  {demoText}
               </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              <button 
                onClick={handleUpdateContent}
                className="flex items-center justify-center gap-2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
              >
                <Type size={14} /> Update Text
              </button>
              <button 
                onClick={handleUpdateStyle}
                className="flex items-center justify-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-xl font-bold text-xs transition-all active:scale-95"
              >
                <Palette size={14} /> Toggle Color
              </button>
            </div>
            
            <p className="text-[10px] text-gray-400 italic text-center leading-relaxed">
              These buttons simulate selecting the element and applying properties via <code className="font-bold">.innerHTML</code> and <code className="font-bold">.style.color</code>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 11-12: Lifecycle Demo (Create/Remove) ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 text-teal-500">
            <PlusCircle size={240} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-4 flex items-center">
              <PlusCircle className="text-emerald-400 w-8 h-8 mr-4" /> Element Lifecycle
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-10 border-b border-white/5 pb-4">
              Dynamically populate or clean up your DOM tree using <code className="text-emerald-400">createElement</code> and <code className="text-emerald-400">remove</code>.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                 <CodeBlock 
                   title="Creation Logic"
                   code={`let newElement = document.createElement("p");\nnewElement.innerHTML = "New Paragraph";\ndocument.body.appendChild(newElement);`} 
                 />
                 <CodeBlock 
                   title="Removal Logic"
                   code={`let element = document.getElementById("demo");\nelement.remove();`} 
                 />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 backdrop-blur-sm shadow-inner">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Live Document Preview</span>
                    <button 
                      onClick={handleSpawn}
                      className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-[10px] font-black uppercase transition-all flex items-center gap-2"
                    >
                      <PlusCircle size={14} /> Add Element
                    </button>
                 </div>

                 <div className="min-h-[220px] flex flex-wrap gap-3 content-start">
                   {spawnedElements.length === 0 && (
                     <div className="w-full h-[180px] flex flex-col items-center justify-center opacity-30">
                        <Terminal size={48} className="text-gray-400 mb-2" />
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Waiting for nodes...</p>
                     </div>
                   )}
                   {spawnedElements.map((id) => (
                     <div key={id} className="group relative px-4 py-2 bg-white/10 border border-white/10 rounded-xl text-[11px] font-bold text-emerald-300 animate-in zoom-in-50 duration-300 flex items-center gap-3">
                        <Square size={12} className="fill-current/20" /> New Node #{id}
                        <button 
                          onClick={() => handleRemove(id)}
                          className="w-5 h-5 rounded-md bg-rose-500/20 text-rose-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-500 hover:text-white"
                          title="Remove element"
                        >
                          <Trash2 size={10} />
                        </button>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 13: Real-World Uses ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10 flex items-center">
          <Activity className="text-emerald-500 w-8 h-8 mr-4" /> Real-World Applications
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
           {[
             { title: "Form Validation", desc: "Access input fields", icon: <Check size={16} /> },
             { title: "Dynamic UI", desc: "Change page content", icon: <RefreshCw size={16} /> },
             { title: "Event Handling", desc: "Button click actions", icon: <MousePointer2 size={16} /> },
             { title: "Animations", desc: "Moving elements", icon: <Zap size={16} /> },
             { title: "Dashboard Apps", desc: "Live web dashboards", icon: <Layout size={16} /> }
           ].map((item, i) => (
             <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 text-center hover:translate-y-[-5px] transition-transform">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                   {item.icon}
                </div>
                <h4 className="text-xs font-black text-gray-900 dark:text-white mb-1 tracking-tight">{item.title}</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter italic">Example: {item.desc}</p>
             </div>
           ))}
        </div>
        
        <div className="mt-8 p-6 bg-emerald-600 rounded-3xl flex items-center justify-between text-white overflow-hidden relative shadow-xl shadow-emerald-500/20">
           <div className="flex items-center gap-4 relative z-10 font-bold italic">
              <Terminal size={20} />
              Quick Reference: Targeting a Login Button
           </div>
           <code className="bg-white/10 px-4 py-2 rounded-xl text-xs font-mono relative z-10 border border-white/20">
              document.getElementById("loginButton")
           </code>
           <MoreHorizontal className="absolute right-[-10px] opacity-10 w-40 h-40 scale-150 rotate-12" />
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-6xl mx-auto text-center py-12 opacity-50 border-t border-gray-100 dark:border-gray-800 uppercase tracking-widest text-xs font-black text-gray-400">
        <div className="flex items-center justify-center gap-2 mb-2 italic">
          <Square className="w-5 h-5 fill-current" /> KNOWGROW HUB
        </div>
        <p>JavaScript Course Components • DOM Elements Module</p>
      </footer>

    </div>
  );
};

// Re-usable refresh icon since Lucide RefreshCw might be missing in some versions
const RefreshCw = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M3 21v-5h5" />
  </svg>
);

export default DomElements;