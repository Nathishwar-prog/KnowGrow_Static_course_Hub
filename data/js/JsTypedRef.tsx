import React, { useState } from 'react';
import { 
  Link2, Layers, Cpu, Zap, Info, Terminal, CodeXml, 
  Database, Boxes, AlertCircle, CheckCircle, ShieldAlert, 
  Share2, MousePointer2, Settings, Clipboard, Check, 
  Copy, ArrowRight, Maximize2, Hash, Box, GitBranch,
  Globe,
  ShieldCheck
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
        <button onClick={handleCopy} className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-emerald-500 hover:text-white transition-all border border-gray-700 shadow-lg" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-[#0d1117] text-emerald-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Reference Sandbox Visualizer ───────────────────────────────────────────
const MemoryVisualizer = () => {
  const [activeTab, setActiveTab] = useState<'primitive' | 'reference'>('primitive');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 lg:p-14 border border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-10 opacity-5 text-emerald-500 transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-6">
         <Database className="w-96 h-96" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-start">
         <div className="lg:col-span-12 space-y-4">
            <h3 className="text-3xl font-black italic tracking-tighter uppercase flex items-center gap-4">
              <Box className="text-emerald-500 w-8 h-8" /> Data Handling Engine
            </h3>
            <p className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] italic">Visualizing how memory allocates your variables</p>
         </div>

         <div className="lg:col-span-12 flex gap-4 mb-4">
            {['primitive', 'reference'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest border-2 transition-all ${
                  activeTab === tab 
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-xl shadow-emerald-500/20' 
                    : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-400'
                }`}
              >
                {tab} types
              </button>
            ))}
         </div>

         <div className="lg:col-span-6 space-y-6">
            <div className={`p-8 rounded-[2.5rem] border-2 shadow-sm transition-all ${activeTab === 'primitive' ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/10 dark:border-emerald-800/50' : 'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/10 dark:border-indigo-800/50'}`}>
               <div className="flex items-center gap-4 mb-6 text-emerald-600 dark:text-emerald-400">
                  {activeTab === 'primitive' ? <Hash size={24} /> : <Share2 size={24} />}
                  <h4 className="text-xl font-black uppercase tracking-tight italic">
                     Stored By {activeTab === 'primitive' ? 'Value' : 'Reference'}
                  </h4>
               </div>
               <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic opacity-80">
                  {activeTab === 'primitive' 
                    ? "Variables store the actual data. When you copy it, you create a brand new, independent clone. Stored in the STACK." 
                    : "Variables store a memory address. When you copy it, you copy the address, not the data. Both variables point to the same HEAP object."}
               </p>
               <CodeBlock 
                 language="javascript"
                 title={activeTab === 'primitive' ? 'Value Copy' : 'Reference Lead'}
                 code={activeTab === 'primitive' 
                   ? `let a = 10;\nlet b = a;\nb = 20;\n\nconsole.log(a); // 10\nconsole.log(b); // 20`
                   : `let obj1 = { name: "Issac" };\nlet obj2 = obj1;\n\nobj2.name = "John";\n\nconsole.log(obj1.name); // "John" 😲`}
               />
            </div>
         </div>

         <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-[3rem] p-10 border border-white/5 relative min-h-[400px]">
               <div className="absolute top-0 right-0 p-6 opacity-30 text-emerald-500">
                  <Cpu className="w-8 h-8" />
               </div>
               <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-10 italic">Machine Visual State</h5>
               
               <div className="space-y-12">
                  <div className="flex items-center gap-8 group">
                     <div className="text-center space-y-2">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-white italic group-hover:border-emerald-500/50 transition-colors">Var_A</div>
                        <span className="text-[8px] font-black text-slate-500 tracking-widest uppercase">Variable Name</span>
                     </div>
                     <div className="flex-1 h-[2px] bg-gradient-to-r from-emerald-500 to-transparent"></div>
                     <div className="text-center space-y-2">
                        <div className={`w-24 h-16 rounded-2xl flex items-center justify-center font-black text-white italic shadow-lg transform group-hover:scale-110 transition-transform ${activeTab === 'primitive' ? 'bg-emerald-500 shadow-emerald-500/20' : 'bg-white/10 border border-white/20'}`}>
                           {activeTab === 'primitive' ? '10' : '0x7F21'}
                        </div>
                        <span className="text-[8px] font-black text-slate-500 tracking-widest uppercase">{activeTab === 'primitive' ? 'STACK VALUE' : 'HEAP ADDRESS'}</span>
                     </div>
                  </div>

                  <div className="flex items-center gap-8 group">
                     <div className="text-center space-y-2">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-white italic group-hover:border-emerald-500/50 transition-colors">Var_B</div>
                        <span className="text-[8px] font-black text-slate-500 tracking-widest uppercase">Variable Name</span>
                     </div>
                     <div className="flex-1 h-[2px] bg-gradient-to-r from-emerald-500 to-transparent"></div>
                     <div className="text-center space-y-2 relative">
                        {activeTab === 'reference' && (
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                             <ArrowRight className="text-emerald-500 -rotate-90 animate-bounce" />
                          </div>
                        )}
                        <div className={`w-24 h-16 rounded-2xl flex items-center justify-center font-black text-white italic shadow-lg transform group-hover:scale-110 transition-transform ${activeTab === 'primitive' ? 'bg-rose-500 shadow-rose-500/20' : 'bg-white/10 border border-white/20 border-emerald-500/50'}`}>
                           {activeTab === 'primitive' ? '20' : '0x7F21'}
                        </div>
                        <span className="text-[8px] font-black text-slate-500 tracking-widest uppercase">{activeTab === 'primitive' ? 'STACK VALUE' : 'HEAP ADDRESS'}</span>
                     </div>
                  </div>

                  {activeTab === 'reference' && (
                    <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4">
                       <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Target in the Heap</span>
                       <div className="w-full p-6 rounded-[2rem] bg-emerald-500/10 border-2 border-dashed border-emerald-500/30 flex items-center justify-center gap-4">
                          <Layers className="text-emerald-500 w-5 h-5" />
                          <span className="text-sm font-black text-white italic">Object: {`{ name: "John" }`}</span>
                       </div>
                    </div>
                  )}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
const JsTypedRef: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8faff] dark:bg-[#08090b] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-emerald-100 selection:text-emerald-700 font-sans leading-relaxed">
      
      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-emerald-500/20 transform hover:-rotate-12 transition-all duration-500 cursor-pointer group">
          <Link2 className="w-14 h-14 text-white shadow-xl group-hover:scale-110 transition-transform" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none uppercase italic">
          Typed <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Reference</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
          Master the fundamentals of JavaScript assignment. Learn how data lives in memory and why understanding the 'reference' is the key to predictable state.
        </p>
      </header>

      {/* ── 1. What is a Typed Reference ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800/50">
            <Info className="w-4 h-4" /> Core Principle
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-none tracking-tighter">
            Values vs. <br /> Memory Addresses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            In JavaScript, "typed reference" describes how variables store values logic-wise. Primitives are stored as literal values, while Objects/Arrays are stored as references (pointers) to locations in the memory heap.
          </p>

          <div className="p-8 rounded-[3rem] bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 flex items-start gap-5">
             <Zap className="text-emerald-500 w-12 h-12 flex-shrink-0 mt-1" />
             <div>
                <span className="text-emerald-500 font-black uppercase text-xs tracking-widest block mb-1 underline decoration-2 underline-offset-4">Simple Logic</span>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed italic">
                   "It defines whether a variable holds the actual content or just the memory house where the content lives."
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 p-4">
           {[
             { bg: 'bg-rose-50 dark:bg-rose-950/10', border: 'border-rose-100 dark:border-rose-900/30', color: 'text-rose-500', title: 'The Confusion', items: ['Unexpected logic bugs 😓', 'Unintentional data mutation', 'Dirty shared state'] },
             { bg: 'bg-emerald-50 dark:bg-emerald-950/10', border: 'border-emerald-100 dark:border-emerald-900/30', color: 'text-emerald-500', title: 'The Mastery', items: ['Predictable behavior', 'Superior debugging 😎', 'Modular architecture'] }
           ].map((card, i) => (
             <div key={i} className={`p-10 rounded-[3.5rem] border-2 shadow-sm ${card.bg} ${card.border} transition-all hover:scale-[1.05]`}>
                <div className={`${card.color} mb-6 uppercase text-[10px] font-black tracking-widest`}>{i === 0 ? 'DANGER ZONE' : 'STABILITY'}</div>
                <h4 className="font-black text-gray-900 dark:text-white text-lg mb-6 italic">{card.title}</h4>
                <ul className="space-y-4">
                   {card.items.map((item, idx) => (
                     <li key={idx} className="text-[10px] font-black opacity-60 uppercase tracking-tight flex items-center gap-2 italic">
                        <ArrowRight size={10} className={card.color} /> {item}
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </section>

      {/* ── INTERACTIVE VISUALIZER ── */}
      <section className="max-w-6xl mx-auto mb-40">
         <MemoryVisualizer />
      </section>

      {/* ── 3. Memory Allocation Table ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-12">
         <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h2 className="text-4xl font-black italic tracking-tighter">Architecture & Allocation</h2>
            <div className="px-5 py-2 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-sm flex items-center gap-3">
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Hardware Layer Logic</span>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 rounded-[3.5rem] border-2 border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden relative">
            <div className="overflow-x-auto">
               <table className="w-full text-start border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900">
                        {['Data Type Group', 'Memory Storage', 'Assignment Behavior'].map((h) => (
                          <th key={h} className="text-start py-8 px-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{h}</th>
                        ))}
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-bold">
                     {[
                       { type: 'Primitives (string, number, boolean, null, undefined, bigint, symbol)', storage: 'STACK', behavior: 'Copy literal Value' },
                       { type: 'Reference (Object, Array, Function)', storage: 'HEAP', behavior: 'Copy reference Address' }
                     ].map((row, i) => (
                       <tr key={i} className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                          <td className="py-8 px-10"><code className="text-sm font-black text-gray-500 italic">{row.type}</code></td>
                          <td className="py-8 px-10"><span className="px-4 py-1.5 rounded-full bg-emerald-500 text-white text-[10px] font-black tracking-widest">{row.storage}</span></td>
                          <td className="py-8 px-10 italic text-sm font-black uppercase text-slate-400">{row.behavior}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── 5. Unintended Changes (Scenario) ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-12 lg:p-22 rounded-[4.5rem] text-white shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform duration-1000 group-hover:rotate-45">
               <GitBranch className="w-96 h-96 text-white" />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-10">
                  <div className="inline-flex items-center gap-3 px-6 py-2 bg-rose-500/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-rose-500/30 text-rose-400">
                     <AlertCircle size={14} /> Problem Scenario
                  </div>
                  <h3 className="text-5xl font-black italic italic leading-none tracking-tighter uppercase underline decoration-rose-500/20 underline-offset-8">The Mutation Trap</h3>
                  <p className="text-xl text-slate-300 font-medium leading-relaxed italic">
                    "Assigning an existing array to a new variable creates a shared reference linkage. Mutations on one leak instantly into the other."
                  </p>
                  
                  <div className="p-1.5 bg-rose-500/5 rounded-[2.5rem] border border-rose-500/10">
                    <CodeBlock 
                      language="javascript" 
                      title="DANGER: Mutation Leak"
                      code={`let arr1 = [1, 2, 3];\nlet arr2 = arr1;\n\narr2.push(4);\n\nconsole.log(arr1); // [1, 2, 3, 4] 😬`} 
                    />
                  </div>
               </div>

               <div className="space-y-10 p-12 rounded-[4rem] bg-emerald-500 shadow-2xl shadow-emerald-500/10 relative">
                  <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-white/20 text-white italic">
                     <CheckCircle size={14} /> Technical Solution
                  </div>
                  <h3 className="text-5xl font-black italic italic leading-none text-white tracking-tighter uppercase">Safe Cloning</h3>
                  <p className="text-xl text-emerald-100 font-medium leading-relaxed italic opacity-80">
                    Create a fresh, shallow clone using the spread operator to allocate a new, independent memory block in the heap.
                  </p>
                  <CodeBlock 
                    language="javascript" 
                    title="STAIR: Pure Implementation"
                    code={`let arr1 = [1, 2, 3];\nlet arr2 = [...arr1]; // Clone\n\narr2.push(4);\n\nconsole.log(arr1); // [1, 2, 3] ✅`} 
                  />
               </div>
            </div>
         </div>
      </section>

      {/* ── 6. Cloning Toolbox ── */}
      <section className="max-w-6xl mx-auto mb-32 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {[
           { title: 'Spread Syntax', desc: 'The modern standard for shallow cloning objects and arrays.', icon: Share2, color: 'bg-emerald-500', code: `let obj2 = { ...obj1 };` },
           { title: 'Object.assign()', desc: 'Native method to merge or clone objects into a target.', icon: Boxes, color: 'bg-sky-500', code: `let obj2 = Object.assign({}, obj1);` },
           { title: 'Deep Copy (Advanced)', desc: 'The safest way to clone heavily nested data structures.', icon: Layers, color: 'bg-indigo-500', code: `let clone = JSON.parse(JSON.stringify(obj));` }
         ].map((tool, i) => (
           <div key={i} className="flex flex-col h-full bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-[3rem] p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="flex items-center gap-4 mb-6">
                 <div className={`p-3 rounded-2xl ${tool.color} text-white shadow-lg`}>
                    <tool.icon size={22} />
                 </div>
                 <div>
                    <h4 className="text-sm font-black uppercase tracking-tight leading-none text-gray-900 dark:text-white">{tool.title}</h4>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">Cloning Mechanism</span>
                 </div>
              </div>
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 leading-relaxed mb-10 italic">"{tool.desc}"</p>
              <div className="mt-auto">
                 <CodeBlock language="javascript" code={tool.code} />
              </div>
           </div>
         ))}
      </section>

      {/* ── 7. Real World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 group">
         <div className="flex items-center gap-8 mb-16 overflow-hidden">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase whitespace-nowrap">Production Deployment</h2>
            <div className="w-full h-1 bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
         </div>
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
            {[
              { title: 'React State', desc: 'Updating state immutably to trigger re-renders safely.', icon: Cpu },
              { title: 'Form Buffering', desc: 'Cloning user data before sanitizing for logic streams.', icon: Boxes },
              { title: 'API Sanitation', desc: 'Cleaning remote data without affecting the raw response.', icon: Globe },
              { title: 'State Snapshots', desc: 'Storing historical states for Undo/Redo architectures.', icon: Database }
            ].map((item, i) => (
              <div key={i} className="space-y-6 cursor-help relative group/item">
                 <div className="w-16 h-16 rounded-3xl bg-white dark:bg-gray-800 border-2 border-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-inner group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all transform group-hover/item:-translate-y-2 group-hover/item:shadow-xl group-hover/item:shadow-emerald-500/20">
                    <item.icon size={28} />
                 </div>
                 <div className="space-y-2">
                    <h4 className="text-xl font-black italic leading-none">{item.title}</h4>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] leading-relaxed italic">{item.desc}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* ── 8. Pro Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-16">
         <div className="relative p-12 lg:p-24 rounded-[5.5rem] bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-100 dark:border-emerald-900/40 overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <ShieldCheck className="w-64 h-64 text-emerald-500" />
            </div>
            <h3 className="text-4xl font-black text-emerald-900 dark:text-emerald-100 mb-16 flex items-center gap-4 italic uppercase tracking-tighter">
              <Zap className="text-emerald-500 animate-pulse" /> Engineering Protocols
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em] ml-auto italic border-b-2 border-emerald-500/20 pb-1">EST. 15 YRS EXP.</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10 font-sans">
               {[
                 { tip: 'Always Clone Objects Before Modifying', body: 'Primary Rule: Creating a clone ensures data purity and avoids side-effects in unrelated functional modules.' },
                 { tip: 'Use Spread for Quick Copy', body: 'The spread syntax {...} is the modern, expressive standard for shallow clones. It is highly readable and efficient.' },
                 { tip: 'Be Careful with Nested Objects', body: 'Critical Caveat: Spread does not clone deeply. Nested children still share references to the original memory.' },
                 { tip: 'Debug with console.log()', body: 'When in doubt, log variables at every step to visualize exactly where mutation is occurring in the stack.' }
               ].map((item, i) => (
                 <div key={i} className="bg-white dark:bg-gray-800/90 backdrop-blur-xl p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-lg group hover:scale-[1.03] transition-all hover:shadow-emerald-500/10">
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 block group-hover:translate-x-2 transition-transform italic underline decoration-emerald-500/20 underline-offset-4">PROTOCOL_GATE_0{i+1}</span>
                    <h5 className="font-black text-gray-900 dark:text-white text-xl mb-4 italic leading-tight">{item.tip}</h5>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 leading-relaxed italic opacity-80">{item.body}</p>
                 </div>
               ))}
            </div>
         </div>

         {/* ── 9. Common Mistakes ── */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Value Assumptions', body: 'Mistakenly believing that objects copy by value and being shocked by global mutation.' },
              { title: 'Shallow/Deep Confusion', body: 'Attempting to clone deep JSON structures using only a single level spread operator.' },
              { title: 'Shared State Mutation', body: 'Directly pushing or popping from reference arrays passed into functions ❌.' },
              { title: 'Ignoring References', body: 'Disregarding the memory heap model during large-scale React component design.' }
            ].map((err, i) => (
              <div key={i} className="p-10 rounded-[3.5rem] bg-rose-50/50 dark:bg-rose-950/20 border-2 border-rose-100 dark:border-rose-900/40 transform group cursor-not-allowed transition-all hover:rotate-2">
                 <div className="text-rose-500 mb-8"><AlertCircle size={36} /></div>
                 <h5 className="font-black text-rose-800 dark:text-rose-100 text-sm mb-4 uppercase italic leading-none underline decoration-rose-500/10 underline-offset-4">{err.title}</h5>
                 <p className="text-[11px] text-rose-700/60 dark:text-rose-400 font-bold leading-relaxed italic">{err.body}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Summary Footer ── */}
      <footer className="max-w-6xl mx-auto mb-20 text-center space-y-12">
         <div className="bg-slate-900 p-12 lg:p-24 rounded-[6rem] relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-6xl font-black text-white mb-8 relative z-10 italic uppercase tracking-tighter leading-none">Break the Reference</h2>
            <p className="text-slate-400 max-w-3xl mx-auto mb-12 font-bold relative z-10 italic leading-relaxed text-xl opacity-70">
              "Understanding how data lives is as important as what the data is. Predictable memory management leads to robust, error-free applications."
            </p>
            <div className="flex flex-wrap justify-center gap-10 relative z-10">
               <button className="px-14 py-5 bg-emerald-500 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-110 shadow-xl shadow-emerald-500/20 transition-all active:scale-95">Analyze Memory Heap</button>
               <button className="px-14 py-5 border border-slate-700 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all hover:border-emerald-500/50">Performance Profile</button>
            </div>
         </div>
         <p className="text-[11px] font-black text-gray-400 uppercase tracking-[1em] opacity-10 py-10 italic">Memory Integrity Layer — KnowGrow Hub v4.0</p>
      </footer>

    </div>
  );
};

export default JsTypedRef;