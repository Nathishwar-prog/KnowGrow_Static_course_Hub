import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Layout, 
  Activity, 
  Terminal, 
  Info, 
  Lock, 
  Unlock, 
  ArrowRight,
  Code2,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  Cpu,
  Eye,
  List,
  Binary,
  Layers,
  Box,
  Trash2,
  Filter,
  Search,
  BookOpen,
  Power,
  UserCheck,
  ShieldAlert,
  Ghost,
  Database,
  BarChart,
  Repeat,
  Share2
} from 'lucide-react';

// ─── Shared Components ────────────────────────────────────────────────────────

const CodeBlock = ({ code, title, language = 'javascript' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg relative group w-full bg-[#1e1e1e]">
      {title && (
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
            title="Copy code"
          >
            {copied ? <CheckCircle size={14} className="text-green-400" /> : <Package size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color}`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed">{subtitle}</p>}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsSetWeakSet: React.FC = () => {
  const [setInput, setSetInput] = useState("");
  const [setItems, setSetItems] = useState<string[]>(["John", "Mike"]);
  const [duplicateAttempt, setDuplicateAttempt] = useState(false);

  const handleAddItem = () => {
    if (!setInput.trim()) return;
    if (setItems.includes(setInput.trim())) {
      setDuplicateAttempt(true);
      setTimeout(() => setDuplicateAttempt(false), 2000);
    } else {
      setSetItems([...setItems, setInput.trim()]);
    }
    setSetInput("");
  };

  const handleRemoveItem = (item: string) => {
    setSetItems(setItems.filter(i => i !== item));
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <Database size={14} className="fill-current" /> UNIQUE DATA COLLECTIONS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          Set & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 drop-shadow-2xl">
            WeakSet
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the art of <span className="text-gray-900 dark:text-white font-bold italic underline decoration-sky-500/30">unique values</span> and <span className="text-gray-900 dark:text-white font-bold italic underline decoration-purple-500/30">memory-safe</span> object tracking. No duplicates, no compromises.
        </p>
      </header>

      {/* ── Section 1: Intro to Set ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is a Set?" subtitle="A collection of strictly unique values." color="text-sky-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                A Set is a collection where every value must be unique. If you try to add a value that already exists, it is automatically ignored.
              </p>
              <div className="p-6 bg-sky-500/5 border border-sky-500/10 rounded-3xl flex items-center gap-4 group hover:bg-sky-500 transition-colors duration-500">
                 <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 text-sky-500 shadow-xl border border-sky-100 group-hover:scale-110 transition-transform">
                    <CheckCircle size={24} />
                 </div>
                 <p className="text-sm font-black text-gray-500 group-hover:text-white leading-tight italic tracking-tight">
                    "Think of it like a list where every item is a VIP—no one gets in twice."
                 </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
             <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Code2 size={120} className="text-sky-500" />
                </div>
                <h4 className="text-xl font-black italic mb-6 tracking-tight flex items-center gap-3">
                   <Zap size={24} className="text-sky-500" /> Creating a Set
                </h4>
                <div className="space-y-6 relative z-10">
                   <CodeBlock title="Set Initialization" code={`let set = new Set();\n\nset.add(1);\nset.add(2);\nset.add(2); // duplicate!\n\nconsole.log(set); // Set(2) {1, 2}`} />
                   <CodeBlock title="Init with Array" code={`let set = new Set([1, 2, 3, 3]);\nconsole.log(set); // Set(3) {1, 2, 3}`} />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Set Interactive Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Activity} title="2. Set Interactive Lab" subtitle="Test the duplicate prevention logic in real-time." color="text-sky-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
             <div className="space-y-8">
                <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 space-y-6">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block italic underline decoration-sky-500/20">Add Value to Set</label>
                      <div className="flex gap-4">
                         <input 
                           type="text" 
                           value={setInput} 
                           onChange={(e) => setSetInput(e.target.value)}
                           onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
                           placeholder="Type a name..."
                           className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 font-mono text-xl font-black text-sky-600 focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-lg"
                         />
                         <button 
                           onClick={handleAddItem}
                           className="p-6 bg-sky-600 hover:bg-sky-500 text-white rounded-3xl shadow-xl shadow-sky-600/20 transition-all font-black"
                         >
                           ADD()
                         </button>
                      </div>
                      {duplicateAttempt && (
                        <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                           <ShieldAlert size={18} className="text-rose-500" />
                           <span className="text-xs font-black text-rose-600 uppercase tracking-wider italic">DUPLICATE DETECTED! VALUE REJECTED.</span>
                        </div>
                      )}
                   </div>
                </div>

                <div className="space-y-6">
                   <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-4 underline decoration-sky-500/20 italic">Common Set Methods</h5>
                   <div className="grid grid-cols-2 gap-4">
                      {[
                        { m: "add()", d: "Add value", c: "text-sky-500" },
                        { m: "delete()", d: "Remove value", c: "text-rose-500" },
                        { m: "has()", d: "Check value", c: "text-emerald-500" },
                        { m: "clear()", d: "Remove all", c: "text-amber-500" },
                        { m: "size", d: "Count items", c: "text-indigo-500" }
                      ].map((m, i) => (
                        <div key={i} className="p-5 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between group">
                           <div>
                              <span className={`text-xs font-black italic block ${m.c}`}>{m.m}</span>
                              <span className="text-[9px] text-gray-400 uppercase tracking-widest font-black leading-none">{m.d}</span>
                           </div>
                           <ArrowRight size={14} className="text-gray-200 group-hover:text-sky-500 transition-colors" />
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             <div className="bg-gray-950 p-12 rounded-[3.5rem] border border-white/5 space-y-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                   <List size={200} className="text-sky-500" />
                </div>
                
                <div className="flex justify-between items-center text-[10px] font-black tracking-[0.4em] uppercase text-white/20 relative z-10">
                   <span>Set Output</span>
                   <span className="text-sky-500 italic">size: {setItems.length}</span>
                </div>

                <div className="space-y-4 relative z-10">
                   <div className="text-3xl font-black italic text-white/50 mb-6 font-mono tracking-tighter">Set({setItems.length}) {"{"}</div>
                   <div className="flex flex-wrap gap-4 pl-8 border-l border-white/10 min-h-[100px] items-center">
                      {setItems.length === 0 ? (
                        <span className="text-white/10 italic text-sm">Empty Set... Add some values!</span>
                      ) : setItems.map((item, i) => (
                        <div key={i} className="px-6 py-4 bg-white/5 rounded-full border border-white/5 flex items-center gap-4 group/item hover:bg-white/10 transition-colors">
                           <span className="text-xl font-black text-sky-400 font-mono tracking-tighter italic whitespace-nowrap">"{item}"</span>
                           <button 
                             onClick={() => handleRemoveItem(item)}
                             className="p-1.5 rounded-full hover:bg-rose-500 text-transparent group-hover/item:text-white transition-all shadow-lg"
                           >
                              <Trash2 size={12} />
                           </button>
                        </div>
                      ))}
                   </div>
                   <div className="text-3xl font-black italic text-white/50 mt-6 font-mono tracking-tighter">{"}"}</div>
                </div>

                <div className="p-6 bg-sky-500/5 rounded-2xl border border-sky-500/10 flex items-center gap-4 animate-pulse relative z-10">
                   <Info size={18} className="text-sky-500" />
                   <p className="text-[10px] font-black text-sky-500 italic uppercase tracking-tighter leading-tight">
                      Unique logic is automatic. Adding "John" again would do nothing.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Loop & Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="space-y-8">
            <SectionHeader icon={Repeat} title="3. Looping Through Set" subtitle="Easy iteration over unique members." color="text-indigo-500" />
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
               <p className="text-gray-500 font-medium">Sets are fully iterable, meaning you can easily loop through them using modern logic.</p>
               <CodeBlock title="Iteration Logic" code={`let set = new Set([1, 2, 3]);\n\nfor (let value of set) {\n  console.log(value); // 1, 2, 3\n}`} />
            </div>
         </div>

         <div className="space-y-8">
            <SectionHeader icon={BarChart} title="4. Real-World Use Case" subtitle="The deduplication pattern." color="text-emerald-500" />
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                  <Filter size={100} className="text-emerald-500" />
               </div>
               <h5 className="text-xl font-black italic tracking-tight flex items-center gap-3">
                  <Binary size={24} className="text-emerald-500" /> Remove Duplicates
               </h5>
               <CodeBlock title="One-Line Dedupe" code={`let numbers = [1, 2, 2, 3, 4];\n\nlet unique = [...new Set(numbers)];\n\nconsole.log(unique); // [1, 2, 3, 4]`} />
               <div className="p-5 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-600 font-black text-xs italic text-center">
                  "The most common way to clean an array in modern JS."
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: What is WeakSet? ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-gray-950 p-12 rounded-[4rem] shadow-2xl border border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
              <Ghost size={250} className="text-white" />
           </div>
           
           <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-10">
                 <SectionHeader icon={Ghost} title="5. What is WeakSet?" subtitle="Silent collection for ephemeral objects." color="text-purple-400" />
                 <p className="text-gray-400 text-lg leading-relaxed italic">
                    A WeakSet is a collection of **objects only**, held weakly (no strong reference). This allows them to be garbage collected as soon as they are no longer used elsewhere.
                 </p>
                 <div className="space-y-6">
                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                       <h6 className="text-white font-black text-xl italic tracking-tight uppercase flex items-center gap-3">
                          <Trash2 size={24} className="text-purple-400" /> Memory Safety
                       </h6>
                       <p className="text-sm text-gray-500 leading-relaxed italic underline decoration-purple-500/20 underline">
                          Unlike a regular Set, objects in a WeakSet don't prevent the Engine from deleting them if they have no other references.
                       </p>
                    </div>
                    <div className="p-6 bg-rose-500/10 rounded-3xl border border-rose-500/20 flex items-center gap-4">
                       <AlertTriangle size={20} className="text-rose-500 shrink-0" />
                       <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest leading-tight">Limitation: Only objects allowed. weakSet.add(10) will CRASH.</span>
                    </div>
                 </div>
              </div>

              <div className="space-y-8">
                 <CodeBlock title="WeakSet Usage" code={`let weakSet = new WeakSet();\n\nlet obj1 = { name: "John" };\nlet obj2 = { name: "Mike" };\n\nweakSet.add(obj1);\nweakSet.add(obj2);\n\nconsole.log(weakSet.has(obj1)); // true`} />
                 
                 <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
                    <h5 className="text-xl font-black italic tracking-tight text-emerald-500 underline decoration-emerald-500/20 underline">Tracking Visited Users</h5>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans font-medium">Use WeakSet to track objects without causing memory leaks when those objects go out of scope.</p>
                    <CodeBlock title="Memory Leak Protection" code={`let visited = new WeakSet();\nlet user = { id: 101 };\n\nvisited.add(user);\n\n// later if...\nuser = null; // ✅ Auto removed from WeakSet`} />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 5: Matrix Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layers} title="6. Key Differences Matrix" subtitle="Choosing the right collection type." color="text-indigo-500" />
        <div className="bg-white dark:bg-gray-800 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden">
           <table className="w-full text-left">
              <thead>
                 <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] border-b border-gray-100 dark:border-gray-800">Feature</th>
                    <th className="p-8 text-[10px] font-black text-sky-500 uppercase tracking-[0.3em] border-b border-gray-100 dark:border-gray-800 text-center italic">Set</th>
                    <th className="p-8 text-[10px] font-black text-purple-500 uppercase tracking-[0.3em] border-b border-gray-100 dark:border-gray-800 text-center italic">WeakSet</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800 font-sans font-medium text-sm">
                 <tr className="group">
                    <td className="p-8 text-gray-900 dark:text-gray-100 font-black italic tracking-tight">Data Types</td>
                    <td className="p-8 text-gray-500 text-center italic">Any (Primitives + Objects)</td>
                    <td className="p-8 text-purple-500 font-black text-center italic">Only Objects ⚠️</td>
                 </tr>
                 <tr className="group">
                    <td className="p-8 text-gray-900 dark:text-gray-100 font-black italic tracking-tight">Allows Duplicates</td>
                    <td className="p-8 text-rose-500 font-black text-center italic">❌ No</td>
                    <td className="p-8 text-rose-500 font-black text-center italic">❌ No</td>
                 </tr>
                 <tr className="group">
                    <td className="p-8 text-gray-900 dark:text-gray-100 font-black italic tracking-tight">Iterable (for...of)</td>
                    <td className="p-8 text-emerald-500 font-black text-center italic">✅ Yes</td>
                    <td className="p-8 text-rose-500 font-black text-center italic">❌ No</td>
                 </tr>
                 <tr className="group">
                    <td className="p-8 text-gray-900 dark:text-gray-100 font-black italic tracking-tight">Garbage Collection</td>
                    <td className="p-8 text-rose-500 font-black text-center italic">❌ Prevented</td>
                    <td className="p-8 text-emerald-500 font-black text-center italic underline decoration-emerald-500/20 underline">✅ Automatic</td>
                 </tr>
              </tbody>
           </table>
        </div>
      </section>

      {/* ── Section 6: Pro Recommendations ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="7. Pro Recommendations & Tips" subtitle="Maintaining high-performance collections." color="text-sky-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
           {[
             { title: "Use Set When", desc: "You need unique values cross-type, or need to store primitives like numbers/strings.", icon: List, color: "text-sky-500 bg-sky-500/10" },
             { title: "Use WeakSet When", desc: "Tracking objects (like visited nodes) where you want to avoid manual memory management.", icon: Ghost, color: "text-purple-500 bg-purple-500/10" },
             { title: "Avoid WeakSet If", desc: "You need to iterate or know the exact 'size' of the collection. Use Set instead.", icon: ShieldAlert, color: "text-rose-500 bg-rose-500/10" }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4 group">
                <div className={`p-4 rounded-2xl w-fit ${item.color} group-hover:rotate-12 transition-transform`}>
                   <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white tracking-tight italic">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed italic">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* ── Tips Lab footer ── */}
        <div className="bg-gray-950 p-12 rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-[0_0_50px_-12px_rgba(14,165,233,0.15)]">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
              <Terminal size={200} className="text-sky-500" />
           </div>
           <h4 className="text-2xl font-black text-white mb-10 flex items-center gap-4 italic tracking-tight uppercase">
              <Zap size={24} className="text-sky-500 shadow-sm" /> Senior Architect Hacks
           </h4>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { label: "Fast Dedupe", text: "[...new Set(array)]", icon: Filter },
                { label: "Quick Check", text: "set.has(value)", icon: Search },
                { label: "Convert back", text: "Array.from(set)", icon: Repeat },
                { label: "Caching", text: "Great for fast lookups", icon: Layout }
              ].map((tip, i) => (
                <div key={i} className="space-y-3 p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                   <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center text-xs shadow-lg shadow-sky-500/20">
                      <tip.icon size={18} />
                   </div>
                   <div>
                      <span className="text-white font-black text-sm block mb-1 tracking-tight italic">{tip.label}</span>
                      <p className="text-[10px] text-gray-500 font-mono italic underline decoration-sky-500/20 uppercase tracking-tighter shadow-sm">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10 shadow-sm"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] italic">
            Unique. Immutable. Safe.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose font-sans">
            Sets provide the simplest way to manage unique primitive data, while WeakSets offer a memory-efficient ghost container for objects.<br />
            Choose your collection wisely to prevent duplicates and eliminate memory leaks before they occur.
         </p>
      </footer>

    </div>
  );
};

export default JsSetWeakSet;