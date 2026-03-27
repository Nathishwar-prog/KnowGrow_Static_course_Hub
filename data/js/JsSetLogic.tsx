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
  Code2,
  GitBranch,
  Layers,
  Sparkles,
  Link,
  Table
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

const JsSetLogic: React.FC = () => {
  const [setAString, setSetAString] = useState('1, 2, 3');
  const [setBString, setSetBString] = useState('2, 3, 4');

  const setA = useMemo(() => new Set(setAString.split(',').map(s => s.trim()).filter(s => s !== '')), [setAString]);
  const setB = useMemo(() => new Set(setBString.split(',').map(s => s.trim()).filter(s => s !== '')), [setBString]);

  const union = new Set([...setA, ...setB]);
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const difference = new Set([...setA].filter(x => !setB.has(x)));
  const symDiff = new Set([...[...setA].filter(x => !setB.has(x)), ...[...setB].filter(x => !setA.has(x))]);
  const isSubset = [...setA].every(x => setB.has(x));

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 animate-pulse tracking-[0.2em]">
          <GitBranch size={14} className="fill-current" /> SET THEORY OPERATIONS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS Set <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-rose-600 drop-shadow-2xl">
            Logic
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Unlock the powerful mathematical operations behind JavaScript Sets. Master Union, Intersection, and Difference with elegance.
        </p>
      </header>

      {/* ── Section 1: Introduction ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is Set Logic?" subtitle="Inspired by mathematical set theory." color="text-indigo-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                Set Logic refers to using JavaScript Set to perform **mathematical operations** and complex problem-solving. It's about how different collections relate to one another.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: "Union ➕", desc: "Combining all elements.", color: "text-blue-500 bg-blue-500/5" },
                   { label: "Intersection 🤝", desc: "Finding common values.", color: "text-purple-500 bg-purple-500/5" },
                   { label: "Difference ➖", desc: "Excluding others.", color: "text-rose-500 bg-rose-500/5" },
                   { label: "Subset ✔️", desc: "Checking containment.", color: "text-emerald-500 bg-emerald-500/5" }
                 ].map((item, i) => (
                   <div key={i} className={`p-4 rounded-3xl border border-gray-100 dark:border-gray-700/50 ${item.color}`}>
                      <h5 className="font-black text-sm mb-1 italic">{item.label}</h5>
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
             <div className="p-10 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                   <Zap size={200} className="text-indigo-500" />
                </div>
                <h4 className="text-xl font-black text-white italic tracking-tight flex items-center gap-3 relative z-10">
                   <Sparkles size={24} className="text-indigo-500" /> Why Use Set Logic?
                </h4>
                <div className="space-y-4 relative z-10">
                   <ul className="grid grid-cols-1 gap-4">
                      {[
                        { text: "Removes duplicates automatically", icon: RotateCcw },
                        { text: "Fast lookup (O(1))", icon: Activity },
                        { text: "Cleaner, more declarative code", icon: Terminal },
                        { text: "Great for efficiently filtering large datasets", icon: Filter }
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-center gap-4 text-gray-400 font-medium italic">
                           <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-400">
                              <benefit.icon size={16} />
                           </div>
                           {benefit.text}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Core Operations ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Terminal} title="2. Set Logic Operations" subtitle="The standard library of mathematical data manipulation." color="text-rose-500" />
        
        <div className="grid md:grid-cols-2 gap-8">
           {/* Union */}
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 group overflow-hidden relative">
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                <Plus size={200} className="text-blue-500" />
              </div>
              <h4 className="text-2xl font-black italic flex items-center gap-3 text-blue-500">
                 Union (Combine Sets)
              </h4>
              <p className="text-gray-500 font-medium leading-relaxed font-sans">Combine two sets into one, automatically filtering out any duplicate entries found in both.</p>
              <CodeBlock title="Union Example" code={`let a = new Set([1, 2, 3]);\nlet b = new Set([3, 4, 5]);\n\nlet union = new Set([...a, ...b]);\n\nconsole.log(union);\n// Output: Set(5) {1, 2, 3, 4, 5}`} />
           </div>

           {/* Intersection */}
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 group overflow-hidden relative">
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                <Link size={200} className="text-purple-500" />
              </div>
              <h4 className="text-2xl font-black italic flex items-center gap-3 text-purple-500">
                 Intersection (Common)
              </h4>
              <p className="text-gray-500 font-medium leading-relaxed font-sans">Extract only the values that are present in **both** sets. Extremely useful for permission checks.</p>
              <CodeBlock title="Intersection Example" code={`let a = new Set([1, 2, 3]);\nlet b = new Set([2, 3, 4]);\n\nlet intersection = new Set(\n  [...a].filter(x => b.has(x))\n);\n\nconsole.log(intersection);\n// Output: Set(2) {2, 3}`} />
           </div>

           {/* Difference */}
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 group overflow-hidden relative">
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                <Minus size={200} className="text-rose-500" />
              </div>
              <h4 className="text-2xl font-black italic flex items-center gap-3 text-rose-500">
                 Difference (A - B)
              </h4>
              <p className="text-gray-500 font-medium leading-relaxed font-sans">Find values that exist in Set A but are **not** present in Set B. Perfect for finding "pending" tasks.</p>
              <CodeBlock title="Difference Example" code={`let a = new Set([1, 2, 3]);\nlet b = new Set([2, 3, 4]);\n\nlet difference = new Set(\n  [...a].filter(x => !b.has(x))\n);\n\nconsole.log(difference);\n// Output: Set(1) {1}`} />
           </div>

           {/* Symmetric Difference */}
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 group overflow-hidden relative font-sans">
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                <Layers size={200} className="text-indigo-500" />
              </div>
              <h4 className="text-2xl font-black italic flex items-center gap-3 text-indigo-500">
                 Symmetric Difference
              </h4>
              <p className="text-gray-500 font-medium leading-relaxed">Returns values that are in either Set A or Set B, but **not in both** (The XOR of Sets).</p>
              <CodeBlock title="Symmetric Difference Example" code={`let a = new Set([1, 2, 3]);\nlet b = new Set([3, 4, 5]);\n\nlet symDiff = new Set([\n  ...[...a].filter(x => !b.has(x)),\n  ...[...b].filter(x => !a.has(x))\n]);\n\nconsole.log(symDiff);\n// Output: Set(4) {1, 2, 4, 5}`} />
           </div>
        </div>

        {/* Subset & Superset Check */}
        <div className="mt-12 p-12 bg-gray-950 rounded-[4rem] border border-white/5 shadow-2xl grid lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
              <h4 className="text-3xl font-black italic tracking-tight text-white flex items-center gap-4">
                 <ShieldCheck size={32} className="text-emerald-500" /> Subset & Superset
              </h4>
              <p className="text-gray-400 font-medium italic leading-relaxed">
                 Check if every element of one set exists within another. This is the logic used for roles and permissions (e.g., Does this user have *all* required tags?).
              </p>
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex items-center gap-4">
                 <div className="px-5 py-2 rounded-xl bg-emerald-500 text-white font-black italic text-sm">PRO TIP</div>
                 <p className="text-emerald-100/60 text-xs font-medium">Use `.every()` on the array representation for subset checks.</p>
              </div>
           </div>
           <div className="space-y-4">
              <CodeBlock title="Subset Checking" code={`let a = new Set([1, 2]);\nlet b = new Set([1, 2, 3]);\n\nlet isSubset = [...a].every(x => b.has(x));\nconsole.log(isSubset); // true\n\nlet isSuperset = [...b].every(x => a.has(x)); // false`} />
           </div>
        </div>
      </section>

      {/* ── Section 3: Interactive Visualizer ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Activity} title="3. Interactive Logic Visualizer" subtitle="Experiment with sets A and B in real-time." color="text-sky-500" />
        
        <div className="bg-white dark:bg-gray-800 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl p-10 md:p-16">
           <div className="grid lg:grid-cols-2 gap-16 mb-16">
              <div className="space-y-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase text-gray-400 tracking-widest italic ml-2">Set A (Comma Separated)</label>
                    <input 
                      type="text" 
                      value={setAString} 
                      onChange={(e) => setSetAString(e.target.value)}
                      className="bg-indigo-500/5 border-2 border-indigo-500/10 focus:border-indigo-500 rounded-3xl px-8 py-5 font-black italic outline-none transition-all text-gray-900 dark:text-white"
                      placeholder="1, 2, 3..."
                    />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase text-gray-400 tracking-widest italic ml-2">Set B (Comma Separated)</label>
                    <input 
                      type="text" 
                      value={setBString} 
                      onChange={(e) => setSetBString(e.target.value)}
                      className="bg-rose-500/5 border-2 border-rose-500/10 focus:border-rose-500 rounded-3xl px-8 py-5 font-black italic outline-none transition-all text-gray-900 dark:text-white"
                      placeholder="3, 4, 5..."
                    />
                 </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-8 relative font-sans">
                 <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-center">
                       <div className="w-24 h-24 rounded-full bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center shadow-xl">
                          <span className="font-black text-2xl text-indigo-500 italic">A</span>
                       </div>
                       <span className="text-[10px] font-black text-gray-400 mt-2 tracking-[0.2em]">{setA.size} items</span>
                    </div>
                    <div className="w-12 h-px bg-gray-200 dark:bg-gray-700"></div>
                    <div className="flex flex-col items-center">
                       <div className="w-24 h-24 rounded-full bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center shadow-xl">
                          <span className="font-black text-2xl text-rose-500 italic">B</span>
                       </div>
                       <span className="text-[10px] font-black text-gray-400 mt-2 tracking-[0.2em]">{setB.size} items</span>
                    </div>
                 </div>
                 <div className={`p-4 rounded-2xl flex items-center gap-3 ${isSubset ? 'bg-emerald-500/10 text-emerald-500' : 'bg-gray-100 dark:bg-gray-900 text-gray-400'} transition-colors`}>
                    <ShieldCheck size={20} />
                    <span className="font-black italic text-xs uppercase tracking-widest">A is subset of B: {isSubset ? 'TRUE' : 'FALSE'}</span>
                 </div>
              </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Union (A ∪ B)", set: union, color: "from-blue-500 to-indigo-600", desc: "All distinct values" },
                { label: "Intersection (A ∩ B)", set: intersection, color: "from-purple-500 to-violet-600", desc: "Shared values only" },
                { label: "Difference (A - B)", set: difference, color: "from-rose-500 to-pink-600", desc: "Values only in A" },
                { label: "Symmetric Diff", set: symDiff, color: "from-indigo-600 to-purple-700", desc: "Values unique to each" }
              ].map((res, i) => (
                <div key={i} className="flex flex-col h-full group">
                   <div className={`bg-gradient-to-br ${res.color} p-6 rounded-t-[2.5rem] shadow-lg group-hover:-translate-y-1 transition-transform`}>
                      <h5 className="text-white font-black italic text-sm mb-1">{res.label}</h5>
                      <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{res.desc}</p>
                   </div>
                   <div className="bg-gray-50 dark:bg-gray-950 border-x border-b border-gray-100 dark:border-gray-800 rounded-b-[2.5rem] p-6 flex-grow flex flex-col justify-center items-center shadow-inner">
                      <div className="flex flex-wrap justify-center gap-2">
                         {res.set.size === 0 ? (
                           <span className="text-[10px] uppercase font-black text-gray-400 italic font-mono">Empty Set</span>
                         ) : (
                           Array.from(res.set).map((val: any) => (
                             <span key={val} className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-xs font-black italic animate-in slide-in-from-bottom duration-300">{val}</span>
                           ))
                         )}
                      </div>
                      <span className="text-[10px] font-black italic text-gray-400 mt-4 uppercase tracking-[0.2em] font-mono">Size: {res.set.size}</span>
                   </div>
                </div>
              ))}
           </div>

           <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-950 rounded-[3rem] border border-gray-100 dark:border-gray-800 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Box size={100} className="text-gray-400" />
              </div>
              <h5 className="text-lg font-black italic tracking-tight mb-4 flex items-center gap-3">
                 <Binary size={24} className="text-gray-400" /> 4. ASCII Visualization
              </h5>
              <div className="font-mono text-xs p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-inner whitespace-pre leading-relaxed font-sans italic opacity-80">
                 {`A = {${Array.from(setA).join(',')}}\nB = {${Array.from(setB).join(',')}}\n\nUnion        ➞ {${Array.from(union).join(',')}}\nIntersection ➞ {${Array.from(intersection).join(',')}}\nDifference   ➞ {${Array.from(difference).join(',')}}`}
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Sparkles} title="5. High-Impact Examples" subtitle="Set logic in action within professional codebases." color="text-amber-500" />
         <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Remove Duplicate Users", 
                code: `let users = ["A", "B", "A", "C"];\nlet unique = [...new Set(users)];\nconsole.log(unique); // ["A", "B", "C"]`,
                icon: Database,
                color: "text-emerald-500",
                desc: "Data cleaning pattern."
              },
              { 
                title: "Common Interests", 
                code: `let user1 = new Set(["JS", "Py", "C++"]);\nlet user2 = new Set(["Py", "Java"]);\nlet common = [...user1].filter(x => user2.has(x));\nconsole.log(common); // ["Py"]`,
                icon: Share2,
                color: "text-sky-500",
                desc: "Social graph matching."
              },
              { 
                title: "Find Missing Items", 
                code: `let all = new Set([1, 2, 3, 4]);\nlet comp = new Set([1, 2]);\nlet pending = [...all].filter(x => !comp.has(x));\nconsole.log(pending); // [3, 4]`,
                icon: Trash2,
                color: "text-rose-500",
                desc: "Task state management."
              }
            ].map((exp, i) => (
              <div key={i} className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 hover:-translate-y-2 transition-transform duration-300">
                 <div className={`p-4 rounded-2xl w-fit bg-gray-50 dark:bg-gray-950 shadow-inner ${exp.color}`}>
                    <exp.icon size={24} />
                 </div>
                 <h4 className="text-xl font-black italic tracking-tight flex items-center gap-2">
                    🎯 {exp.title}
                 </h4>
                 <p className="text-xs text-gray-500 font-medium italic uppercase tracking-widest">{exp.desc}</p>
                 <CodeBlock title={exp.title} code={exp.code} />
              </div>
            ))}
         </div>
      </section>

      {/* ── Section 5: Recommendations & Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
             <SectionHeader icon={Lightbulb} title="Personal Recommendations" subtitle="Advice from years of production experience." color="text-amber-500" />
             <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                   <Lightbulb size={120} className="text-amber-500" />
                </div>
                {[
                  { label: "Use Set Logic When", text: "Working with unique data, comparing datasets, or filtering large arrays.", icon: CheckCircle, color: "text-emerald-500" },
                  { label: "Combine with Arrays", text: "Spread operator ([...set]) makes Set powerful by giving access to filter, map, and every.", icon: Box, color: "text-indigo-500" },
                  { label: "Avoid with Objects", text: "Sets compare objects by reference, not value ({id:1} !== {id:1}). Be careful!", icon: AlertTriangle, color: "text-rose-500" }
                ].map((rec, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 bg-gray-50 dark:bg-gray-950 rounded-3xl group">
                     <div className={`p-3 rounded-2xl bg-white dark:bg-gray-800 shadow-lg ${rec.color} group-hover:scale-110 transition-transform`}>
                        <rec.icon size={20} />
                     </div>
                     <div>
                        <h6 className={`text-sm font-black italic ${rec.color} block mb-1 underline decoration-current/10 underline italic font-sans uppercase tracking-widest`}>{rec.label}</h6>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed font-sans">{rec.text}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-8">
             <SectionHeader icon={Zap} title="⚡ One-Line Tips" subtitle="Concise patterns for your codebase." color="text-sky-500" />
             <div className="p-10 bg-gray-950 rounded-[3.5rem] border border-white/5 shadow-2xl space-y-10 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 p-10 opacity-5">
                   <Binary size={200} className="text-sky-500" />
                </div>
                {[
                  { title: "One-Line Intersection", code: "new Set([...a].filter(x => b.has(x)))" },
                  { title: "One-Line Difference", code: "new Set([...a].filter(x => !b.has(x)))" },
                  { title: "Convert Back to Array", code: "[...set]" }
                ].map((tip, i) => (
                  <div key={i} className="space-y-3 group">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-sky-500 shadow-lg shadow-sky-500/20"></div>
                        <h5 className="text-white font-black italic text-sm tracking-tight">{tip.title}</h5>
                     </div>
                     <code className="text-sky-400 font-mono text-[10px] font-bold block p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors">
                        {tip.code}
                     </code>
                  </div>
                ))}
             </div>
          </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] italic leading-tight">
            Logic Is the <br /> Foundation.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose font-sans max-w-2xl mx-auto">
            Set theory isn't just for mathematicians—it's for developers who want to solve complex data comparison problems with minimal code and maximum performance.
         </p>
      </footer>

    </div>
  );
};

export default JsSetLogic;