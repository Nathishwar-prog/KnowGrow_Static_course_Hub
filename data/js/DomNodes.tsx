import React, { useState } from 'react';
import {
  Network, Boxes, FileText, Settings, 
  Sparkles, Zap, Trash2, Plus, 
  ChevronRight, Box, Type, Info,
  Check, Copy, Terminal, Database,
  Layout, Eye, MousePointer2, GitBranch,
  Layers, MessageSquare, StickyNote,
  Code, AlertCircle
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
          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-teal-500 hover:text-white transition-colors border border-slate-700"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-slate-900 text-teal-300 leading-relaxed shadow-inner">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomNodes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [sandboxNodes, setSandboxNodes] = useState<{id: number, text: string}[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [inspectNode, setInspectNode] = useState<'element' | 'text' | 'attr' | 'comment' | 'doc'>('element');

  const nodeTypes = [
    { type: "Element Node", value: 1, desc: "HTML element", example: "<div>, <p>", icon: <Layout size={16}/> },
    { type: "Attribute Node", value: 2, desc: "Attributes of elements", example: 'id="container"', icon: <Settings size={16}/> },
    { type: "Text Node", value: 3, desc: "Text inside element", example: '"Hello"', icon: <Type size={16}/> },
    { type: "Comment Node", value: 8, desc: "HTML comments", example: "<!-- note -->", icon: <MessageSquare size={16}/> },
    { type: "Document Node", value: 9, desc: "Entire HTML document", example: "document", icon: <Database size={16}/> },
  ];

  const nodeProperties = {
    element: { name: "P", type: 1, value: "null" },
    text: { name: "#text", type: 3, value: "Hello World" },
    attr: { name: "class", type: 2, value: "btn-primary" },
    comment: { name: "#comment", type: 8, value: "Fix later" },
    doc: { name: "#document", type: 9, value: "null" }
  };

  const addSandboxNode = () => {
    if (inputValue.trim()) {
      setSandboxNodes([...sandboxNodes, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const removeNode = (id: number) => {
    setSandboxNodes(sandboxNodes.filter(node => node.id !== id));
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-teal-50 via-slate-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950/20 min-h-screen font-sans selection:bg-teal-200 selection:text-teal-900 text-slate-900 dark:text-slate-100">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-20 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-teal-500 to-indigo-600 rounded-3xl mb-8 shadow-2xl transform hover:rotate-3 hover:scale-105 transition-all duration-500 cursor-pointer group">
          <Network className="w-12 h-12 text-white group-hover:animate-spin" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black mb-6 tracking-tight">
          DOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Nodes</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Everything is a Node. Discover the fundamental particles that make up your webpage and learn how to engineer them from scratch.
        </p>
      </header>

      {/* ── Section 1-2: Intro & Tree Visualization ── */}
      <section className="max-w-6xl mx-auto mb-24 space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
              <Info size={14} className="mr-2" /> Atomic Units
            </div>
            <h2 className="text-4xl font-black tracking-tight leading-tight">
              The Smallest Unit<br/>of the <span className="text-teal-600 italic">Web Ecosystem</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              In the DOM, <b>everything</b> is a node. From the entire document itself to the smallest comment, every part of your HTML is converted into a structured component in a tree.
            </p>
            <div className="flex flex-wrap gap-3">
               {["Elements", "Text", "Attributes", "Comments"].map((item, i) => (
                 <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold shadow-sm">{item}</span>
               ))}
            </div>
          </div>

          {/* Visual Tree Explorer */}
          <div className="bg-slate-900 rounded-[3rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-full bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-40 p-4 bg-teal-500 rounded-2xl shadow-xl flex flex-col items-center">
                   <div className="text-[10px] font-black uppercase text-teal-100 mb-1">Document</div>
                   <Database size={24} className="text-white" />
                </div>
                <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-indigo-500"></div>
                <div className="w-48 p-4 bg-indigo-500 rounded-2xl shadow-xl flex flex-col items-center">
                   <div className="text-[10px] font-black uppercase text-indigo-100 mb-1">Element Node</div>
                   <Layout size={20} className="text-white" />
                   <p className="text-xs text-white/50 mt-1 font-mono">&lt;div&gt;</p>
                </div>
                <div className="flex gap-12 mt-2">
                   <div className="flex flex-col items-center">
                      <div className="w-1 h-8 bg-indigo-500/30 mb-2"></div>
                      <div className="p-3 bg-white/10 border border-white/5 rounded-xl flex flex-col items-center">
                        <Type size={16} className="text-teal-400" />
                        <span className="text-[9px] text-slate-500 font-bold mt-1">TEXT NODE</span>
                      </div>
                   </div>
                   <div className="flex flex-col items-center">
                      <div className="w-1 h-8 bg-indigo-500/30 mb-2"></div>
                      <div className="p-3 bg-white/10 border border-white/5 rounded-xl flex flex-col items-center">
                        <Settings size={16} className="text-indigo-400" />
                        <span className="text-[9px] text-slate-500 font-bold mt-1">ATTR NODE</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3-6: Node Type Registry ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-2xl relative">
            <div className="p-10 lg:p-14 border-b border-slate-100 dark:border-slate-700">
               <h2 className="text-3xl font-black italic flex items-center gap-3 tracking-tighter uppercase">
                  <Layers className="text-teal-500" /> The Node Registry
               </h2>
               <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Identify every component type in the DOM architecture.</p>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <th className="p-8">Type</th>
                        <th className="p-8">Description</th>
                        <th className="p-8">Example</th>
                        <th className="p-8">Visual</th>
                     </tr>
                  </thead>
                  <tbody>
                     {nodeTypes.map((node, i) => (
                       <tr key={node.value} className="border-b border-slate-50 dark:border-slate-700/50 hover:bg-teal-50 dark:hover:bg-teal-900/10 transition-colors group">
                          <td className="p-8 font-black text-slate-900 dark:text-white uppercase tracking-tight italic flex items-center gap-4">
                             <span className="text-teal-500 p-2 bg-teal-500/10 rounded-lg group-hover:bg-teal-500 group-hover:text-white transition-all">{node.icon}</span>
                             {node.type}
                          </td>
                          <td className="p-8 text-sm font-medium text-slate-600 dark:text-slate-400 italic font-medium">{node.desc}</td>
                          <td className="p-8 text-xs font-mono font-bold text-teal-600 dark:text-teal-400">{node.example}</td>
                          <td className="p-8">
                             <div className="px-3 py-1 bg-slate-900 text-white rounded-lg text-[10px] font-black tracking-widest text-center shadow-lg border border-white/5">
                                TYPE {node.value}
                             </div>
                          </td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 7-8: Property Inspector ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-8 items-stretch">
         <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-14 text-white shadow-3xl relative overflow-hidden flex flex-col group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-3xl font-black mb-8 flex items-center gap-4 italic underline decoration-teal-500 decoration-4 underline-offset-8 uppercase tracking-tighter">
               <Eye className="text-teal-500" /> Property Inspector
            </h2>
            
            <div className="flex bg-black/40 p-1.5 rounded-2xl mb-10 w-fit">
               {Object.keys(nodeProperties).map((key) => (
                 <button
                   key={key}
                   onClick={() => setInspectNode(key as any)}
                   className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                     inspectNode === key
                     ? 'bg-teal-500 text-white shadow-lg'
                     : 'text-slate-500 hover:text-white'
                   }`}
                 >
                   {key}
                 </button>
               ))}
            </div>

            <div className="flex-1 flex flex-col justify-center gap-4">
               {[
                 { label: "nodeName", value: nodeProperties[inspectNode].name, color: "text-orange-400" },
                 { label: "nodeType", value: nodeProperties[inspectNode].type, color: "text-teal-400" },
                 { label: "nodeValue", value: nodeProperties[inspectNode].value, color: "text-indigo-400" }
               ].map((prop, i) => (
                 <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center group-hover:border-white/10 transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{prop.label}</span>
                    <span className={`text-sm font-mono font-bold ${prop.color}`}>{prop.value}</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-14 border border-slate-100 dark:border-slate-700 shadow-sm">
            <h2 className="text-3xl font-black mb-8 italic tracking-tight flex items-center gap-3">
               <Code className="text-teal-500" /> Behind the Scenes
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed">
               JavaScript doesn't just see tags; it sees <b>Node Objects</b>. You can check any node's properties to verify its purpose in the hierarchy.
            </p>
            <CodeBlock 
              title="Inspecting the Tree"
              code={`let el = document.getElementById("title");\nconsole.log(el.nodeName); // "H1"\nconsole.log(el.nodeType); // 1`} 
            />
            <div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-3xl border border-teal-100 dark:border-teal-800 flex items-start gap-4">
               <AlertCircle className="text-teal-500 mt-1 shrink-0" size={18} />
               <p className="text-[11px] leading-relaxed italic text-teal-700 dark:text-teal-400 font-medium">
                  Notice how <code className="font-bold">nodeName</code> for elements is always capitalized. This is a standard DOM behavior.
               </p>
            </div>
         </div>
      </section>

      {/* ── Section 9-10: Create & Remove Nodes Sandbox ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-indigo-600 rounded-[3rem] p-10 lg:p-20 text-white shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
               <div>
                  <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter italic">Dynamic Node <br/>Generation</h2>
                  <p className="text-indigo-100 font-medium mb-12 text-lg leading-relaxed italic opacity-80">
                    Surgical precision. Use <code className="text-white">createElement</code> to build nodes in memory and <code className="text-white font-bold italic">appendChild</code> to inject them into the reality of your page.
                  </p>
                  <CodeBlock 
                    title="Creation Lifecycle"
                    code={`let p = document.createElement("p");\np.textContent = "New Node";\ndocument.body.appendChild(p);`} 
                  />
               </div>

               <div className="bg-white rounded-[3.5rem] p-10 lg:p-14 shadow-3xl text-slate-900">
                  <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-10 text-center flex items-center justify-center gap-2">
                     <Box size={14} /> LIVE PREVIEW ARENA
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-4 mb-8">
                     <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Node content..."
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addSandboxNode()}
                          className="flex-1 p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all"
                        />
                        <button 
                          onClick={addSandboxNode}
                          className="p-4 bg-indigo-500 text-white rounded-2xl hover:bg-teal-500 transition-all shadow-xl flex items-center justify-center group"
                        >
                           <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                        </button>
                     </div>
                  </div>

                  <div className="min-h-[250px] p-6 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 flex flex-col gap-3 relative">
                     {sandboxNodes.length === 0 && (
                       <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 text-slate-400">
                          <Boxes size={40} className="mb-2" />
                          <p className="text-[10px] font-black uppercase tracking-widest">Awaiting Nodes</p>
                       </div>
                     )}
                     {sandboxNodes.map((node) => (
                       <div 
                         key={node.id} 
                         className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-between group animate-in slide-in-from-right-4 fade-in duration-300"
                       >
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-indigo-50 rounded-lg"><DraftNodeIcon size={14} className="text-indigo-500" /></div>
                             <span className="text-xs font-bold text-slate-700">{node.text}</span>
                          </div>
                          <button 
                            onClick={() => removeNode(node.id)}
                            className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                          >
                             <Trash2 size={16} />
                          </button>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 11: Real-World Example (Dynamic List) ── */}
      <section className="max-w-6xl mx-auto mb-20">
         <div className="bg-white dark:bg-slate-800 rounded-[4rem] p-12 lg:p-24 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
            <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter italic uppercase underline decoration-teal-500/20 underline-offset-[16px]">Dynamic List Engine</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mb-20 font-medium italic text-lg leading-relaxed">
               This is the core algorithm behind modern task managers and social feeds. Every post you see is essentially a new node appended to the document.
            </p>
            
            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-16 items-start text-left">
               <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    The Logic
                  </div>
                  <CodeBlock 
                    title="Real-World App"
                    code={`function addTask() {\n  let li = document.createElement("li");\n  li.textContent = taskValue;\n  list.appendChild(li);\n}`} 
                  />
                  <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                     <Zap size={20} className="text-teal-500 shrink-0" />
                     <p className="text-xs font-medium text-slate-500 italic">This demo uses pure DOM methods to replicate a mini React-like behavior!</p>
                  </div>
               </div>

               <div className="bg-slate-900 rounded-[3.5rem] p-12 shadow-3xl text-white relative group overflow-hidden border border-white/5 w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10">
                     <div className="flex justify-between items-center mb-10">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] italic">Task Manager v1.0</span>
                        <div className="flex gap-1">
                           {[1, 2].map(i => <div key={i} className="w-1 h-1 rounded-full bg-teal-500 animate-pulse" />)}
                        </div>
                     </div>
                     
                     <div className="space-y-3 mb-12">
                        <div className="p-4 bg-teal-500/20 border border-teal-500/30 rounded-2xl flex items-center gap-3">
                           <Check size={14} className="text-teal-500" />
                           <span className="text-xs font-bold group-hover:translate-x-1 transition-transform">Learn DOM Nodes</span>
                        </div>
                        <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-3 opacity-60">
                           <div className="w-3 h-3 rounded-full border border-white/20" />
                           <span className="text-xs font-bold">Practice Manipulation</span>
                        </div>
                     </div>

                     <div className="h-2 w-full bg-white/5 rounded-full mb-1 overflow-hidden relative">
                        <div className="absolute top-0 left-0 h-full bg-teal-500 transition-all duration-1000 shadow-[0_0_15px_rgba(20,184,166,1)]" style={{ width: '65%' }}></div>
                     </div>
                     <div className="text-[9px] font-bold text-slate-500 text-right uppercase tracking-widest mt-2">65% nodes complete</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto text-center py-10 opacity-30">
        <div className="flex items-center justify-center gap-3 mb-4 font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter text-3xl">
          <Sparkles className="w-8 h-8 opacity-50 text-teal-500" />
          KNOWGROW Hub
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent mx-auto mb-4"></div>
        <p className="text-base font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase italic">The Node Architecture Specialist</p>
      </footer>

    </div>
  );
};

// Helper icon
const DraftNodeIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

export default DomNodes;