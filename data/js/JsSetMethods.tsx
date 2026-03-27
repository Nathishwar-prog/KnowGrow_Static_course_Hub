import React, { useState, useMemo } from 'react';
import { 
  Zap, 
  Activity, 
  Terminal, 
  Layout,
  Info, 
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  Cpu,
  List,
  Binary,
  Box,
  Trash2,
  Filter,
  Search,
  BookOpen,
  Power,
  RefreshCw,
  Share2,
  Grid,
  ShieldCheck,
  MousePointer2,
  Database,
  Repeat,
  Lightbulb,
  Plus,
  Minus,
  X,
  Play,
  ArrowRight,
  Code2
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
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center text-white/90">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans">{title}</span>
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

const JsSetMethods: React.FC = () => {
  const [playgroundSet, setPlaygroundSet] = useState<Set<string>>(new Set(['JavaScript', 'React']));
  const [inputValue, setInputValue] = useState('');

  const addToSet = () => {
    if (inputValue.trim()) {
      const newSet = new Set(playgroundSet);
      newSet.add(inputValue.trim());
      setPlaygroundSet(newSet);
      setInputValue('');
    }
  };

  const removeFromSet = (val: string) => {
    const newSet = new Set(playgroundSet);
    newSet.delete(val);
    setPlaygroundSet(newSet);
  };

  const clearSet = () => {
    setPlaygroundSet(new Set());
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <Code2 size={14} className="fill-current" /> BUILT-IN FUNCTIONS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS Set <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-500 to-indigo-600 drop-shadow-2xl">
            Methods
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The complete guide to mastering <span className="text-gray-900 dark:text-white font-bold italic underline decoration-emerald-500/30">uniqueness</span> management. Add, remove, and check elements like a pro.
        </p>
      </header>

      {/* ── Section 1: Introduction ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What are Set Methods?" subtitle="The operational core of the Set data structure." color="text-sky-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                Set methods are **built-in functions** used to add, remove, check, and manage values inside a Set. They allow you to manipulate collections while maintaining strict uniqueness.
              </p>
              <div className="p-6 bg-amber-500/10 border-l-4 border-amber-500 rounded-2xl flex items-start gap-4">
                <AlertTriangle size={24} className="text-amber-500 mt-1 flex-shrink-0" />
                <div>
                   <h5 className="font-black text-amber-600 dark:text-amber-400 text-sm uppercase tracking-widest mb-1 italic">Quick Reminder</h5>
                   <ul className="text-sm font-medium text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Set stores **unique values** only</li>
                      <li>• No duplicates allowed (auto-ignored)</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
             <div className="p-10 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 overflow-hidden relative group">
                <div className="absolute -top-10 -right-10 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000 rotate-12">
                   <Grid size={200} className="text-sky-500" />
                </div>
                <h4 className="text-xl font-black text-white italic tracking-tight flex items-center gap-3 relative z-10">
                   <Plus size={24} className="text-sky-500" /> Initialization
                </h4>
                <div className="space-y-4 relative z-10">
                   <p className="text-gray-400 font-medium italic">You can create a Set and hydrate it immediately with an array.</p>
                   <CodeBlock title="Creating a Set" code={`let set = new Set([1, 2, 3]);\n\nconsole.log(set.size); // 3`} />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Core Methods ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Activity} title="2. Core Set Methods" subtitle="The basic building blocks of Set manipulation." color="text-emerald-500" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {/* Add */}
           <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-start">
                 <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl">
                    <Plus size={24} />
                 </div>
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mutation</span>
              </div>
              <h4 className="text-2xl font-black italic tracking-tight">add(value)</h4>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">Adds a new value to the Set. If the value already exists, it is **ignored**.</p>
              <CodeBlock title="add() Example" code={`let set = new Set();\n\nset.add(10);\nset.add(20);\nset.add(10); // duplicate!\n\nconsole.log(set);\n// Output: Set(2) {10, 20}`} />
           </div>

           {/* Delete */}
           <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-start">
                 <div className="p-4 bg-rose-500/10 text-rose-500 rounded-2xl">
                    <Trash2 size={24} />
                 </div>
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mutation</span>
              </div>
              <h4 className="text-2xl font-black italic tracking-tight">delete(value)</h4>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">Removes the specified value from the Set. Returns `true` if it existed, `false` otherwise.</p>
              <CodeBlock title="delete() Example" code={`let set = new Set([1, 2, 3]);\n\nset.delete(2);\n\nconsole.log(set);\n// Output: Set(2) {1, 3}`} />
           </div>

           {/* Has */}
           <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-start">
                 <div className="p-4 bg-sky-500/10 text-sky-500 rounded-2xl">
                    <Search size={24} />
                 </div>
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Inspection</span>
              </div>
              <h4 className="text-2xl font-black italic tracking-tight">has(value)</h4>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">Checks if a value exists in the Set. This is highly efficient (**O(1)** performance).</p>
              <CodeBlock title="has() Example" code={`let set = new Set([1, 2, 3]);\n\nconsole.log(set.has(2)); // true\nconsole.log(set.has(5)); // false`} />
           </div>

           {/* Clear */}
           <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-start">
                 <div className="p-4 bg-indigo-500/10 text-indigo-500 rounded-2xl">
                    <RefreshCw size={24} />
                 </div>
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Wipe</span>
              </div>
              <h4 className="text-2xl font-black italic tracking-tight">clear()</h4>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">Removes **all** elements from the Set. The size becomes 0 immediately.</p>
              <CodeBlock title="clear() Example" code={`let set = new Set([1, 2, 3]);\n\nset.clear();\n\nconsole.log(set);\n// Output: Set(0) {}`} />
           </div>

           {/* Size */}
           <div className="p-8 bg-indigo-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-start">
                 <div className="p-4 bg-emerald-500/20 text-emerald-400 rounded-2xl">
                    <Grid size={24} />
                 </div>
                 <span className="text-[10px] font-black text-emerald-400/60 uppercase tracking-widest italic font-mono">Property</span>
              </div>
              <h4 className="text-2xl font-black italic tracking-tight text-white">size</h4>
              <p className="text-indigo-100/60 font-medium text-sm leading-relaxed italic">A getter property that returns the number of unique elements in the collection.</p>
              <CodeBlock title="size Property" code={`let set = new Set([1, 2, 3]);\n\nconsole.log(set.size);\n// Output: 3`} />
           </div>

           {/* Chaining */}
           <div className="p-8 bg-gradient-to-br from-sky-600 to-indigo-700 rounded-[3rem] shadow-2xl space-y-6 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-white/20">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:rotate-45 transition-transform duration-1000">
                 <Repeat size={140} className="text-white" />
              </div>
              <div className="flex justify-between items-start relative z-10">
                 <div className="p-4 bg-white/20 text-white rounded-2xl backdrop-blur-md">
                    <Repeat size={24} />
                 </div>
                 <span className="text-[10px] font-black text-white/50 uppercase tracking-widest italic">Fluent API</span>
              </div>
              <h4 className="text-2xl font-black italic tracking-tight text-white relative z-10">Method Chaining</h4>
              <p className="text-white/80 font-medium text-sm leading-relaxed italic relative z-10">The `add()` method returns the Set instance, allowing for elegant one-liners.</p>
              <CodeBlock title="Chaining add()" code={`let set = new Set();\nset.add(1).add(2).add(3);\n\nconsole.log(set);\n// Output: Set(3) {1, 2, 3}`} />
           </div>
        </div>
      </section>

      {/* ── Section 3: Interactive Set Playground ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="p-1 sm:p-2 bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-indigo-500/20 rounded-[4rem]">
           <div className="bg-white dark:bg-gray-900 border border-white/20 dark:border-gray-800 rounded-[3.8rem] p-10 md:p-16 shadow-inner relative overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black tracking-widest uppercase">
                       <Terminal size={12} /> Sandbox Mode
                    </div>
                    <h3 className="text-4xl font-black italic tracking-tighter leading-none">
                       Interactive <span className="text-indigo-500">Set</span> Playground
                    </h3>
                    <p className="text-gray-500 font-medium text-lg italic leading-relaxed">
                       Experiment with methods in real-time. Notice how duplicates are automatically rejected.
                    </p>
                    
                    <div className="flex gap-4">
                       <div className="relative flex-grow group">
                          <input 
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addToSet()}
                            placeholder="Type a value..."
                            className="w-full bg-gray-50 dark:bg-gray-950 border-2 border-gray-100 dark:border-gray-800 rounded-2xl py-5 px-6 font-black italic transition-all focus:border-indigo-500 outline-none text-gray-900 dark:text-white"
                          />
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                             <button 
                               onClick={addToSet}
                               className="p-3 bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all"
                             >
                                <Plus size={20} strokeWidth={3} />
                             </button>
                             <button 
                               onClick={clearSet}
                               className="p-3 bg-rose-500/10 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition-all"
                               title="Clear All"
                             >
                                <Trash2 size={20} />
                             </button>
                          </div>
                       </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                       <span className="text-xs font-black uppercase text-gray-400 tracking-widest w-full mb-2">Common Methods:</span>
                       <button onClick={() => setInputValue('Learn')} className="px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-bold hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors">.add("Learn")</button>
                       <button onClick={() => setInputValue('JavaScript')} className="px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-bold hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors">.add("JavaScript")</button>
                       <button onClick={clearSet} className="px-5 py-2.5 rounded-xl border border-rose-500/20 text-rose-500 text-xs font-bold hover:bg-rose-500/5 transition-colors">.clear()</button>
                    </div>
                 </div>

                 <div className="relative">
                    <div className="bg-gray-50 dark:bg-gray-950 border-2 border-gray-100 dark:border-gray-800 rounded-[3rem] p-10 min-h-[400px] flex flex-col justify-center items-center shadow-2xl relative">
                       <div className="absolute top-8 left-10 flex flex-col gap-1 items-start">
                          <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest italic">Current Set Object</span>
                          <span className="text-2xl font-black italic tracking-tighter">Size: {playgroundSet.size}</span>
                       </div>
                       
                       <div className="flex flex-wrap justify-center gap-4 py-16">
                          {playgroundSet.size === 0 ? (
                            <div className="flex flex-col items-center gap-4 opacity-20">
                               <Box size={80} className="text-gray-400" />
                               <span className="font-mono text-sm uppercase font-black">Empty Set</span>
                            </div>
                          ) : (
                            Array.from(playgroundSet).map((val, i) => (
                              <div 
                                key={val} 
                                className="group relative bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 px-8 py-4 rounded-3xl shadow-xl hover:border-indigo-500 transition-all animate-in zoom-in duration-300"
                              >
                                 <span className="font-mono font-black italic">{typeof val === 'string' ? `"${val}"` : val}</span>
                                 <button 
                                   onClick={() => removeFromSet(val)}
                                   className="absolute -top-2 -right-2 p-1.5 bg-rose-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                 >
                                    <X size={12} strokeWidth={3} />
                                 </button>
                              </div>
                            ))
                          )}
                       </div>

                       <div className="mt-8 p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl w-full">
                          <code className="text-xs text-indigo-500 font-mono font-bold block overflow-x-hidden text-ellipsis italic underline decoration-transparent">
                             Set({playgroundSet.size}) {'{'} {Array.from(playgroundSet).join(', ')} {'}'}
                          </code>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4: Iteration Methods ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Repeat} title="3. Iteration Methods" subtitle="How to navigate and loop through Set data." color="text-indigo-500" />
        <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
               <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
                  <h5 className="text-xl font-black italic text-indigo-600 flex items-center gap-3 underline decoration-indigo-500/10">
                     <Share2 size={24} /> forEach()
                  </h5>
                  <p className="text-gray-500 font-medium">Executes a provided function once for each value in the Set object.</p>
                  <CodeBlock title="forEach Usage" code={`let set = new Set([1, 2, 3]);\n\nset.forEach(value => {\n  console.log(value);\n});\n// Output: 1, 2, 3`} />
               </div>

               <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
                  <h5 className="text-xl font-black italic text-emerald-600 flex items-center gap-3 underline decoration-emerald-500/10">
                     <Box size={24} /> values() & keys()
                  </h5>
                  <p className="text-gray-500 font-medium">Returns a new Iterator object. In Set, keys are identical to values.</p>
                  <CodeBlock title="Iterator Usage" code={`let set = new Set([1, 2, 3]);\n\nfor (let value of set.values()) {\n  console.log(value);\n}\n\n// set.keys() is the same as set.values()`} />
               </div>
            </div>

            <div className="space-y-8">
               <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
                  <h5 className="text-xl font-black italic text-sky-600 flex items-center gap-3 underline decoration-sky-500/10">
                     <Binary size={24} /> entries()
                  </h5>
                  <p className="text-gray-500 font-medium font-sans">Returns an iterator of `[value, value]` pairs, maintaining compatibility with Map.</p>
                  <CodeBlock title="entries Usage" code={`let set = new Set([1, 2]);\n\nfor (let entry of set.entries()) {\n  console.log(entry);\n}\n\n// Output:\n// [1, 1]\n// [2, 2]`} />
               </div>

               <div className="p-10 bg-indigo-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-6 flex flex-col justify-center">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-3xl italic">
                     <p className="text-indigo-200 text-sm font-medium leading-relaxed">
                        "Set iteration always follows the insertion order of elements."
                     </p>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                     <div className="h-px bg-white/20 flex-grow"></div>
                     <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest font-mono italic underline decoration-transparent">Guaranteed Order</span>
                     <div className="h-px bg-white/20 flex-grow"></div>
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* ── Section 5: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Zap} title="4. Real-World Applications" subtitle="Practical ways to use these methods in your apps." color="text-amber-500" />
         <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Remove Duplicates", 
                code: `let arr = [1, 2, 2, 3];\nlet unique = [...new Set(arr)];\nconsole.log(unique); // [1, 2, 3]`,
                icon: Filter,
                color: "text-emerald-500 bg-emerald-500/10",
                desc: "The fastest way to clean an array."
              },
              { 
                title: "Unique Visitors", 
                code: `let visitors = new Set();\nvisitors.add("user1");\nvisitors.add("user2");\nconsole.log(visitors.size); // 2`,
                icon: MousePointer2,
                color: "text-sky-500 bg-sky-500/10",
                desc: "Track distinct IDs effortlessly."
              },
              { 
                title: "Unique Words", 
                code: `let text = "hello hello world";\nlet words = new Set(text.split(" "));\nconsole.log(words); // {"hello", "world"}`,
                icon: List,
                color: "text-indigo-500 bg-indigo-500/10",
                desc: "Analyze vocabulary in text."
              }
            ].map((exp, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 group hover:shadow-2xl transition-all">
                 <div className={`p-4 rounded-2xl w-fit ${exp.color} group-hover:scale-110 transition-transform`}>
                    <exp.icon size={24} />
                 </div>
                 <h4 className="text-xl font-black italic tracking-tight">{exp.title}</h4>
                 <p className="text-xs text-gray-500 font-medium italic underline decoration-gray-500/10 uppercase tracking-widest">{exp.desc}</p>
                 <CodeBlock title={exp.title} code={exp.code} />
              </div>
            ))}
         </div>
      </section>

      {/* ── Section 6: Important Notes ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
             <SectionHeader icon={ShieldCheck} title="5. Important Rules" subtitle="The strict boundaries of the Set object." color="text-rose-500" />
             <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none rotate-45">
                   <AlertTriangle size={150} className="text-rose-500" />
                </div>
                <div className="space-y-6 relative z-10">
                   <div className="flex gap-6 items-start">
                      <div className="p-3 bg-rose-500/10 text-rose-500 rounded-xl">
                         <X size={20} strokeWidth={3} />
                      </div>
                      <div>
                         <h6 className="text-lg font-black italic tracking-tight mb-1">No Index Access</h6>
                         <p className="text-gray-500 text-sm font-medium">Sets are not indexed like arrays. You cannot access elements by position.</p>
                         <code className="text-rose-500 font-black text-xs block mt-2">set[0] // ➞ undefined</code>
                      </div>
                   </div>
                   <div className="flex gap-6 items-start">
                      <div className="p-3 bg-rose-500/10 text-rose-500 rounded-xl">
                         <Repeat size={20} />
                      </div>
                      <div>
                         <h6 className="text-lg font-black italic tracking-tight mb-1">No Duplicate Values</h6>
                         <p className="text-gray-500 text-sm font-medium">Any value already present in the set will be silently ignored if added again.</p>
                         <code className="text-rose-500 font-black text-xs block mt-2">set.add(1).add(1) // only one stored</code>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="space-y-8">
             <SectionHeader icon={Lightbulb} title="Pro Experience" subtitle="How to use Sets like a Senior Engineer." color="text-amber-500" />
             <div className="p-10 bg-gray-950 rounded-[3.5rem] border border-white/5 shadow-2xl space-y-8 relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 p-10 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
                   <Cpu size={250} className="text-amber-500" />
                </div>
                <div className="space-y-6 relative z-10">
                   {[
                     { label: "Use Set for Unique Data", text: "Perfect for lists of IDs, Tags, or filtered results." },
                     { label: "Check Presence Efficiently", text: "has() is optimized in ways array .includes() isn't." },
                     { label: "Convert to/from Arrays", text: "Use [...set] to access array methods on unique data." }
                   ].map((rec, i) => (
                     <div key={i} className="flex gap-5 items-start p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
                        <div className="p-2.5 bg-amber-500 text-white rounded-lg shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                           <CheckCircle size={14} />
                        </div>
                        <div>
                           <span className="text-white font-black text-sm block italic underline decoration-amber-500/20">{rec.label}</span>
                           <p className="text-[10px] text-gray-500 font-mono mt-1 font-medium">{rec.text}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
      </section>

      {/* ── Section 7: Tips & Tricks ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-gray-900 to-black p-12 md:p-20 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
               <Zap size={300} className="text-sky-500" />
            </div>
            
            <div className="relative z-10">
               <div className="flex flex-col md:flex-row items-baseline gap-4 mb-12">
                  <h3 className="text-5xl font-black italic text-white tracking-tighter">⚡ Tips & Tricks</h3>
                  <span className="text-sky-400 font-mono font-black italic uppercase tracking-widest text-xs">Cheat Sheet</span>
               </div>
               
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "One-Line Unique", code: "[...new Set(arr)]", icon: Filter },
                    { title: "Clone a Set", code: "new Set(original)", icon: Repeat },
                    { title: "Merge Sets", code: "new Set([...s1, ...s2])", icon: Plus },
                    { title: "Intersection", code: "new Set([...a].filter(x => b.has(x)))", icon: Share2 }
                  ].map((tip, i) => (
                    <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-all group">
                       <div className="p-4 bg-sky-500/20 text-sky-400 rounded-2xl w-fit mb-6 group-hover:bg-sky-500 group-hover:text-white transition-all">
                          <tip.icon size={24} />
                       </div>
                       <h5 className="text-white font-black italic mb-4">{tip.title}</h5>
                       <code className="text-[10px] font-mono font-bold text-gray-400 bg-black/40 p-3 rounded-xl block border border-white/5 group-hover:text-sky-300 transition-colors">
                          {tip.code}
                       </code>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] italic">
            Unique. Optimized. Mastered.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose font-sans max-w-2xl mx-auto italic">
            Sets are powerful when you need performance and uniqueness. Mastering these methods will make your data manipulation cleaner and significantly more efficient.
         </p>
      </footer>

    </div>
  );
};

export default JsSetMethods;
