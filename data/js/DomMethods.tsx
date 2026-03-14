import React, { useState, useRef } from 'react';
import {
  Search, PlusCircle, Trash2, Link2, 
  ListPlus, Wand2, Terminal, FileCode, 
  Layers, Zap, Check, Copy, ChevronRight,
  Info, Sparkles, Play, RefreshCw, Box,
  Eye, MousePointer2, Code, Database,
  Plus, X, Edit2, Image as ImageIcon, Settings
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
          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-violet-500 hover:text-white transition-colors border border-slate-700"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-slate-900 text-violet-300 leading-relaxed shadow-inner">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomMethods: React.FC = () => {
  // Selection Lab
  const [selectedMethod, setSelectedMethod] = useState<string>('getElementById');
  const [highlightedElement, setHighlightedElement] = useState<string | null>(null);

  // Creation Lab
  const [createdItems, setCreatedItems] = useState<string[]>([]);
  const [newItemText, setNewItemText] = useState("New DOM Element");

  // Attribute Lab
  const [currentImg, setCurrentImg] = useState("https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=200");

  // Real-world Project (Task List)
  const [tasks, setTasks] = useState<string[]>(["Study JavaScript", "Practice Coding"]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput("");
    }
  };

  const removeElementDemo = () => {
    // In a real DOM this would remove the node, here we simulate it
    setHighlightedElement(null);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-50 via-white to-violet-50 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950/20 min-h-screen font-sans selection:bg-violet-200 selection:text-violet-900 text-slate-900 dark:text-slate-100">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-20 relative">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-violet-600 to-fuchsia-700 rounded-3xl mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
          <Wand2 className="w-12 h-12 text-white group-hover:rotate-12 transition-transform" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black mb-6 tracking-tight">
          DOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Methods</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Master the functions that allow JavaScript to breathe life into static HTML documents.
        </p>
      </header>

      {/* ── Section 1-2: Intro & Table ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
            <Info size={14} className="mr-2" /> Global Functions
          </div>
          <h2 className="text-4xl font-black tracking-tight leading-tight">
            The Dynamic <span className="underline decoration-violet-500 decoration-wavy underline-offset-8">Interface</span> for Web Structure
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            DOM Methods are special functions that allow JavaScript to find, access, create, modify, and remove HTML elements in a webpage dynamically.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
             {[
               { icon: <Search size={18} />, text: "Select Elements" },
               { icon: <Edit2 size={18} />, text: "Change Content" },
               { icon: <PlusCircle size={18} />, text: "Add Elements" },
               { icon: <Trash2 size={18} />, text: "Remove Elements" }
             ].map((item, i) => (
               <li key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm font-bold text-sm hover:translate-x-1 transition-transform">
                  <span className="p-1.5 bg-violet-50 dark:bg-violet-900/40 rounded-lg text-violet-500">{item.icon}</span>
                  {item.text}
               </li>
             ))}
          </ul>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative">
          <div className="absolute top-0 right-10 -translate-y-1/2 p-3 bg-violet-600 rounded-2xl text-white shadow-xl rotate-6">
            <Layers size={24} />
          </div>
          <div className="mb-6 space-y-1">
             <h4 className="text-xs font-black text-violet-400 uppercase tracking-widest">Common Methods</h4>
             <p className="text-xs text-slate-500 italic">Essential tools for every developer</p>
          </div>
          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
             {[
               { m: "getElementById()", d: "Select by ID (Fastest)" },
               { m: "querySelector()", d: "Select by CSS selector" },
               { m: "createElement()", d: "Generate new node" },
               { m: "appendChild()", d: "Add to parent" },
               { m: "remove()", d: "Delete element" },
               { m: "setAttribute()", d: "Change attribute" }
             ].map((item, i) => (
               <div key={i} className="flex justify-between items-center p-3.5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                  <code className="text-xs font-bold text-violet-300">{item.m}</code>
                  <span className="text-[10px] font-black text-slate-500 uppercase">{item.d}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Selection Lab ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-16 border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-[80px] -z-10"></div>
           <div className="text-center mb-12">
              <h2 className="text-4xl font-black italic tracking-tight">Selection Lab</h2>
              <p className="text-slate-500 dark:text-slate-400 font-bold tracking-wide uppercase text-xs mt-2">Targeting elements with precision</p>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <div className="grid grid-cols-2 gap-3">
                    {['getElementById', 'getElementsByClassName', 'getElementsByTagName', 'querySelector', 'querySelectorAll'].map((m) => (
                      <button
                        key={m}
                        onClick={() => setSelectedMethod(m)}
                        className={`px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-left ${
                          selectedMethod === m
                          ? 'bg-violet-600 text-white shadow-lg ring-4 ring-violet-500/20'
                          : 'bg-slate-50 dark:bg-slate-900/50 text-slate-400 hover:bg-violet-50 hover:text-violet-600'
                        }`}
                      >
                        {m}()
                      </button>
                    ))}
                 </div>

                 <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden min-h-[160px] flex flex-col">
                    <div className="flex items-center gap-2 mb-4 text-[10px] font-black text-violet-500 uppercase tracking-widest">
                       <Terminal size={14} /> Console Output
                    </div>
                    <div className="flex-1 font-mono text-xs text-white/80 leading-relaxed whitespace-pre h-24 overflow-y-auto">
                       {selectedMethod === 'getElementById' && <span>{`// Selecting unique ID\nlet el = document.getElementById("title");\nconsole.log(el);\n// Output: <h1 id="title">Welcome</h1>`}</span>}
                       {selectedMethod === 'getElementsByClassName' && <span>{`// Returns HTML Collection\nlet el = document.getElementsByClassName("text");\nconsole.log(el[0]);\n// Output: <p class="text">Item 1</p>`}</span>}
                       {selectedMethod === 'getElementsByTagName' && <span>{`// Returns all matching tags\nlet el = document.getElementsByTagName("p");\nconsole.log(el.length); // 2`}</span>}
                       {selectedMethod === 'querySelector' && <span>{`// Selects FIRST match\nlet el = document.querySelector(".info");\nconsole.log(el);\n// Output: <p class="info">Hello</p>`}</span>}
                       {selectedMethod === 'querySelectorAll' && <span>{`// Returns NodeList (Static)\nlet items = document.querySelectorAll(".item");\nconsole.log(items.length); // 5`}</span>}
                    </div>
                 </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 relative">
                 <div className="absolute top-4 right-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">HTML Preview</div>
                 <div className="space-y-6">
                    <div className={`p-4 rounded-2xl transition-all duration-500 ${selectedMethod === 'getElementById' ? 'bg-violet-100 dark:bg-violet-900/40 ring-2 ring-violet-500' : 'bg-white dark:bg-slate-800'}`}>
                       <h1 id="title" className="text-2xl font-black">Welcome</h1>
                       <code className="text-[9px] text-slate-400 block mt-1">#title</code>
                    </div>
                    <div className="flex gap-4">
                       <div className={`flex-1 p-4 rounded-2xl transition-all duration-500 ${['getElementsByClassName', 'querySelector', 'querySelectorAll'].includes(selectedMethod) ? 'bg-violet-100 dark:bg-violet-900/40 ring-2 ring-violet-500' : 'bg-white dark:bg-slate-800'}`}>
                          <p className="text-xs font-bold leading-tight">Paragraph 1</p>
                          <code className="text-[9px] text-slate-400 block mt-1">.text</code>
                       </div>
                       <div className={`flex-1 p-4 rounded-2xl transition-all duration-500 ${['getElementsByClassName', 'querySelectorAll'].includes(selectedMethod) ? 'bg-violet-100 dark:bg-violet-900/40 ring-2 ring-violet-500' : 'bg-white dark:bg-slate-800'}`}>
                          <p className="text-xs font-bold leading-tight">Paragraph 2</p>
                          <code className="text-[9px] text-slate-400 block mt-1">.text</code>
                       </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[10px] text-slate-400 italic">
                       Try switching methods to see which DOM nodes are selected in the visualization.
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4-5: Creation & Adding Labs ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-8 items-stretch">
         {/* Creation Lab */}
         <div className="bg-violet-700 rounded-[3rem] p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col group">
            <Sparkles className="absolute top-[-5%] right-[-5%] w-64 h-64 text-white/5 -rotate-12 group-hover:rotate-12 transition-transform duration-1000" />
            <div className="relative z-10">
               <h2 className="text-4xl font-black mb-6 flex items-center gap-4">
                 <PlusCircle className="w-10 h-10" /> Dynamic Creation
               </h2>
               <p className="text-violet-100 font-medium mb-10 text-lg leading-relaxed italic">
                 "JavaScript gives you the power to extend reality. Create nodes from nothing and grant them properties."
               </p>
               
               <div className="space-y-4 mb-8">
                  <input 
                    type="text" 
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    className="w-full h-14 bg-white/10 backdrop-blur-md rounded-2xl px-6 border border-white/20 outline-none focus:bg-white/20 font-bold transition-all text-sm placeholder:text-white/40"
                    placeholder="Enter element text..."
                  />
                  <button 
                    onClick={() => {
                        setCreatedItems([...createdItems, newItemText]);
                        setNewItemText("New DOM Element");
                    }}
                    className="w-full py-4 bg-white text-violet-700 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-violet-50 transition-colors flex items-center justify-center gap-3"
                  >
                    <Plus size={18} /> Call createElement()
                  </button>
               </div>

               <div className="p-6 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/5 min-h-[120px]">
                  <p className="text-[10px] font-black uppercase text-violet-200 mb-4 tracking-widest opacity-60">Memory Pool (Append Preview)</p>
                  <div className="flex flex-wrap gap-2">
                     {createdItems.length === 0 && <span className="text-xs text-white/30 italic">No elements created yet...</span>}
                     {createdItems.map((item, idx) => (
                       <div key={idx} className="p-2 px-3 bg-white/10 rounded-lg text-[10px] font-bold border border-white/10 animate-in zoom-in-75 fade-in duration-300">
                          {item}
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Syntax Section */}
         <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-14 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
               <FileCode size={16} /> Implementation Pattern
            </div>
            <CodeBlock 
              title="Creating & Appending"
              code={`let para = document.createElement("p");\npara.textContent = "I was created!";\n\nconst area = document.getElementById("zone");\narea.appendChild(para);`} 
            />
            <div className="mt-8 space-y-4">
               <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-xl flex items-center justify-center font-black">1</div>
                  <p className="text-sm font-medium leading-relaxed italic text-slate-500">
                    <span className="font-black text-slate-900 dark:text-white">createElement</span> creates the node in memory, but isn't visible yet.
                  </p>
               </div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center font-black">2</div>
                  <p className="text-sm font-medium leading-relaxed italic text-slate-500">
                    <span className="font-black text-slate-900 dark:text-white">appendChild</span> plants the node into the DOM tree at a specific location.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6-7: Removal & Attributes ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-12">
         {/* Removal Lab */}
         <div className="space-y-8">
            <h2 className="text-3xl font-black flex items-center gap-3 italic">
               <Trash2 className="text-rose-500" /> The .remove() Method
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-700 shadow-sm">
               <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed italic border-l-4 border-rose-500/30 pl-4">
                  JavaScript can remove elements with laser precision. The element simply vanishes from the document structure and memory visualization.
               </p>
               <div className="space-y-3">
                  {createdItems.length > 0 ? createdItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl group border border-transparent hover:border-rose-200 transition-all">
                       <span className="text-sm font-black text-slate-700 dark:text-slate-300">{item}</span>
                       <button 
                         onClick={() => setCreatedItems(createdItems.filter((_, i) => i !== idx))}
                         className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-colors"
                       >
                          <X size={16} />
                       </button>
                    </div>
                  )) : (
                    <div className="text-center py-12 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-3xl">
                       <Trash2 className="mx-auto text-slate-200 mb-3" size={32} />
                       <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Create items above to try removing them</p>
                    </div>
                  )}
               </div>
            </div>
         </div>

         {/* Attribute Modification */}
         <div className="space-y-8">
            <h2 className="text-3xl font-black flex items-center gap-3 italic">
               <Settings className="text-sky-500" /> setAttribute()
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col h-full">
               <div className="flex-1 space-y-6">
                  <div className="p-4 bg-slate-900 rounded-3xl overflow-hidden relative group">
                     <img src={currentImg} key={currentImg} alt="Demo" className="w-full h-48 object-cover rounded-2xl transition-all duration-700 animate-in fade-in zoom-in-75" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                        <code className="text-[10px] text-sky-400 font-mono italic">img.setAttribute("src", "...")</code>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <button 
                       onClick={() => setCurrentImg("https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=200")}
                       className={`py-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-2 ${currentImg.includes("photo-154283") ? 'bg-sky-50 dark:bg-sky-900/20 border-sky-400 ring-4 ring-sky-500/10' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-700'}`}
                     >
                        <Code className={currentImg.includes("photo-154283") ? 'text-sky-500' : 'text-slate-300'} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Image Content</span>
                     </button>
                     <button 
                       onClick={() => setCurrentImg("https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=200")}
                       className={`py-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-2 ${currentImg.includes("photo-16333") ? 'bg-sky-50 dark:bg-sky-900/20 border-sky-400 ring-4 ring-sky-500/10' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-700'}`}
                     >
                        <ImageIcon className={currentImg.includes("photo-16333") ? 'text-sky-500' : 'text-slate-300'} />
                        <span className="text-[10px] font-black uppercase tracking-widest">React Asset</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Real-World Example (Dynamic List) ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-gradient-to-br from-violet-600 to-indigo-900 rounded-[4rem] p-10 lg:p-20 text-white shadow-3xl relative overflow-hidden flex flex-col items-center">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
           <div className="relative z-10 w-full grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-5xl font-black mb-8 leading-tight tracking-tighter italic lg:text-6xl text-center lg:text-left">The Magic <br/>Task List</h2>
                 <p className="text-violet-100 font-medium mb-12 text-xl leading-relaxed italic opacity-80 lg:text-left text-center">
                   Witness the full power of DOM Methods. This interactive project uses <b>createElement</b>, <b>appendChild</b>, and <b>value</b> access to build a real-time application.
                 </p>
                 <div className="space-y-6 hidden lg:block">
                    <div className="flex items-center gap-6 p-6 bg-white/10 rounded-[2.5rem] border border-white/10 shadow-inner backdrop-blur-md">
                       <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                          <Plus size={20} />
                       </div>
                       <div>
                          <p className="text-xs font-black uppercase tracking-[0.2em]">Live Creation</p>
                          <p className="text-[10px] text-violet-200 mt-1 opacity-60">Uses createElement to spawn list items.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 bg-white/10 rounded-[2.5rem] border border-white/10 shadow-inner backdrop-blur-md">
                       <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                          <Database size={20} />
                       </div>
                       <div>
                          <p className="text-xs font-black uppercase tracking-[0.2em]">State Injection</p>
                          <p className="text-[10px] text-violet-200 mt-1 opacity-60">Maps input value to textContent.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="relative bg-white rounded-[3.5rem] p-8 lg:p-12 shadow-3xl text-slate-900">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">
                    Dynamic Engine Active
                 </div>
                 
                 <div className="mb-10 flex gap-3">
                    <div className="relative flex-1">
                       <Edit2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                       <input 
                         type="text" 
                         value={taskInput}
                         onChange={(e) => setTaskInput(e.target.value)}
                         onKeyDown={(e) => e.key === 'Enter' && addTask()}
                         className="w-full h-16 bg-slate-50 rounded-3xl pl-12 pr-6 border border-slate-100 outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 font-bold transition-all text-sm"
                         placeholder="What needs to be done?"
                       />
                    </div>
                    <button 
                      onClick={addTask}
                      className="w-16 h-16 bg-violet-600 text-white rounded-3xl flex items-center justify-center shadow-xl hover:bg-slate-900 hover:scale-[1.05] transition-all"
                    >
                       <Plus size={24} strokeWidth={3} />
                    </button>
                 </div>

                 <div className="space-y-3 min-h-[300px]">
                    {tasks.length > 0 ? tasks.map((t, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-[2rem] border border-slate-100 animate-in slide-in-from-right-4 duration-300 group">
                         <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-600">
                            <Check size={14} strokeWidth={3} />
                         </div>
                         <span className="flex-1 font-bold text-sm text-slate-700">{t}</span>
                         <button 
                           onClick={() => setTasks(tasks.filter((_, idx) => idx !== i))}
                           className="p-2 text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all rounded-xl"
                         >
                            <X size={16} />
                         </button>
                      </div>
                    )) : (
                      <div className="flex flex-col items-center justify-center h-[300px] text-slate-200">
                         <ListPlus size={64} strokeWidth={1} className="mb-4 opacity-20" />
                         <p className="text-xs font-black uppercase tracking-widest italic opacity-40">Your list is currently empty</p>
                      </div>
                    )}
                 </div>

                 <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">DOM Nodes: <span className="text-violet-600">{tasks.length}</span></span>
                    <button 
                      onClick={() => setTasks([])}
                      className="text-[10px] font-black text-rose-400 hover:text-rose-600 uppercase tracking-widest flex items-center gap-2 transition-colors"
                    >
                       <RefreshCw size={12} /> Clear all
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto text-center py-10 opacity-40">
        <div className="flex items-center justify-center gap-3 mb-4 font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter text-3xl">
          <Sparkles className="w-8 h-8 opacity-50 text-violet-500" />
          KNOWGROW Hub
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-violet-300 dark:via-violet-600 to-transparent mx-auto mb-4"></div>
        <p className="text-base font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase italic">The Document Object Model Specialist</p>
      </footer>

    </div>
  );
};

export default DomMethods;