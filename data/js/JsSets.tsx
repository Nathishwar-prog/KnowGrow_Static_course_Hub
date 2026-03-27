import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Zap, 
  Activity, 
  Terminal, 
  Layout,
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
  Box,
  Trash2,
  Filter,
  Search,
  BookOpen,
  Power,
  UserCheck,
  ShieldAlert,
  BarChart,
  RefreshCw,
  Share2,
  Grid,
  ShieldCheck,
  MousePointer2,
  Database,
  Users
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

const JsSets: React.FC = () => {
  const [operationSetA, setOperationSetA] = useState<number[]>([1, 2]);
  const [operationSetB, setOperationSetB] = useState<number[]>([2, 3]);
  const [activeOperation, setActiveOperation] = useState<'union' | 'intersection' | 'difference'>('union');

  const operationResult = useMemo(() => {
    const a = new Set(operationSetA);
    const b = new Set(operationSetB);
    switch (activeOperation) {
      case 'union': return Array.from(new Set([...a, ...b]));
      case 'intersection': return Array.from(a).filter(x => b.has(x));
      case 'difference': return Array.from(a).filter(x => !b.has(x));
      default: return [];
    }
  }, [operationSetA, operationSetB, activeOperation]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <Layers size={14} className="fill-current" /> UNIQUE VALUE STORAGE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 drop-shadow-2xl">
            Sets
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the professional way to manage <span className="text-gray-900 dark:text-white font-bold italic underline decoration-sky-500/30">unique data</span>. Faster, cleaner, and strictly <span className="text-gray-900 dark:text-white font-bold italic underline decoration-indigo-500/30">duplicate-free</span>.
        </p>
      </header>

      {/* ── Section 1: Intro to Set ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is a Set?" subtitle="The architecture of uniqueness." color="text-sky-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                A Set is a built-in JavaScript object that stores unique values only. It automatically removes any duplicate entries during storage.
              </p>
              <div className="grid grid-cols-3 gap-3">
                 {[
                   { label: "Unique Only", icon: ShieldCheck, color: "text-emerald-500" },
                   { label: "Insertion Order", icon: List, color: "text-sky-500" },
                   { label: "Any Type", icon: Grid, color: "text-indigo-500" }
                 ].map((item, i) => (
                   <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center gap-2 text-center group hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-sm">
                      <item.icon size={20} className={item.color} />
                      <span className="text-[9px] font-black uppercase tracking-tighter text-gray-400">{item.label}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
             <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Code2 size={120} className="text-sky-500" />
                </div>
                <h4 className="text-xl font-black italic mb-6 tracking-tight flex items-center gap-3">
                   <Package size={24} className="text-sky-500" /> Creation & Initialization
                </h4>
                <div className="space-y-6 relative z-10">
                   <CodeBlock title="Empty Set" code={`let set = new Set();`} />
                   <CodeBlock title="Init with Array" code={`let set = new Set([1, 2, 3, 3]);\n\nconsole.log(set); // Set(3) {1, 2, 3}`} />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Adding & Operations ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
               <SectionHeader icon={Zap} title="2. Efficient Operations" subtitle="Manipulating your unique collection." color="text-indigo-500" />
               <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
                  <p className="text-gray-500 font-medium">Adding values is smart. If the value exists, nothing happens.</p>
                  <CodeBlock title="Add & Check" code={`let set = new Set();\n\nset.add(10);\nset.add(20);\nset.add(10); // Duplicate ignored!\n\nconsole.log(set.size); // 2`} />
                  <div className="grid grid-cols-2 gap-4">
                     {[
                       { m: "add(val)", d: "Add element" },
                       { m: "delete(val)", d: "Remove element" },
                       { m: "has(val)", d: "Check presence" },
                       { m: "clear()", d: "Remove all" }
                     ].map((m, i) => (
                       <div key={i} className="p-5 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 group hover:border-indigo-500 transition-colors">
                          <span className="text-xs font-black text-indigo-500 italic block underline decoration-indigo-500/10 underline italic lowercase tracking-tight">{m.m}</span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold block mt-1">{m.d}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="space-y-8">
               <SectionHeader icon={Activity} title="3. Looping Patterns" subtitle="Iterating unique members." color="text-sky-500" />
               <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 h-full flex flex-col justify-center">
                  <div className="space-y-6">
                     <div className="p-6 bg-sky-500/5 rounded-3xl border border-sky-500/10">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4 underline italic decoration-sky-500/20 italic">for...of loop</span>
                        <CodeBlock code={`for (let val of set) {\n  console.log(val);\n}`} />
                     </div>
                     <div className="p-6 bg-indigo-500/5 rounded-3xl border border-indigo-500/10">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4 underline italic decoration-indigo-500/20 italic">forEach loop</span>
                        <CodeBlock code={`set.forEach(val => console.log(val));`} />
                     </div>
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* ── Section 3: Set Operations Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-gray-950 p-12 rounded-[4rem] shadow-2xl border border-white/5 relative overflow-hidden group">
          <SectionHeader icon={Activity} title="4. Advanced Set Operations Lab" subtitle="Visualize mathematical set logic in JavaScript." color="text-sky-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center relative z-10">
             <div className="space-y-8">
                <div className="grid grid-cols-3 gap-4">
                   {[
                     { id: 'union', label: 'Union (a ∪ b)', color: 'bg-indigo-500' },
                     { id: 'intersection', label: 'Intersect (a ∩ b)', color: 'bg-sky-500' },
                     { id: 'difference', label: 'Diff (a - b)', color: 'bg-purple-500' }
                   ].map((op) => (
                     <button 
                       key={op.id}
                       onClick={() => setActiveOperation(op.id as any)}
                       className={`p-4 rounded-3xl text-[10px] font-black transition-all ${activeOperation === op.id ? `${op.color} text-white shadow-xl ${op.color}/40` : 'bg-white/5 text-gray-500 hover:text-white'}`}
                     >
                       {op.label.toUpperCase()}
                     </button>
                   ))}
                </div>
                
                <div className="p-8 bg-white/5 rounded-[3rem] border border-white/5 space-y-6">
                   <div className="flex items-center justify-between px-2">
                       <span className="text-white/20 font-mono text-xs uppercase tracking-widest">Operation logic</span>
                       <Zap size={14} className="text-sky-500" />
                   </div>
                   <div className="font-mono text-xs text-sky-400 space-y-2 opacity-80 pl-4 border-l border-white/10 italic italic underline decoration-sky-500/20 underline">
                      {activeOperation === 'union' && "let union = new Set([...a, ...b]);"}
                      {activeOperation === 'intersection' && "let overlap = [...a].filter(x => b.has(x));"}
                      {activeOperation === 'difference' && "let diff = [...a].filter(x => !b.has(x));"}
                   </div>
                </div>
             </div>

             <div className="relative h-[400px] w-full flex items-center justify-center p-12 bg-white/5 rounded-[4rem] border border-white/5">
                <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-indigo-500/40 bg-indigo-500/5 flex items-center justify-start pl-8 text-white font-black text-2xl shadow-2xl shadow-indigo-500/10">A</div>
                <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-purple-500/40 bg-purple-500/5 flex items-center justify-end pr-8 text-white font-black text-2xl shadow-2xl shadow-purple-500/10">B</div>
                
                <div className="relative z-10 flex flex-wrap max-w-[200px] justify-center gap-2 animate-in fade-in zoom-in duration-500">
                   {operationResult.map((val, i) => (
                     <div key={i} className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-black text-xl shadow-xl shadow-sky-500/20">
                        {val}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Converters & Real World ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="space-y-8">
            <SectionHeader icon={RefreshCw} title="5. Converting Set ↔ Array" subtitle="Effortless data transformation." color="text-emerald-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 group">
               <div className="space-y-6">
                  <div>
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4 italic underline decoration-emerald-500/10 italic">Set ➔ Array (The Spread)</span>
                     <CodeBlock code={`let arr = [...set];`} />
                  </div>
                  <ArrowRight className="text-gray-200 mx-auto" size={32} />
                  <div>
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4 italic underline decoration-emerald-500/10 italic">Array ➔ Set (The Cleaning)</span>
                     <CodeBlock code={`let set = new Set(arr);`} />
                  </div>
               </div>
            </div>
         </div>

         <div className="space-y-8">
            <SectionHeader icon={Layout} title="6. Real-World Use Cases" subtitle="Problem solvers for production logic." color="text-sky-500" />
            <div className="grid grid-cols-1 gap-6">
               {[
                 { title: "Remove Duplicates", desc: "Clean an array of noisy duplicates in one single line.", code: "[...new Set(numbers)]", icon: Trash2 },
                 { title: "Unique Visitors", desc: "Track users by ID without bloat. Instant checks with has().", code: "visitors.add('user1')", icon: Users },
                 { title: "Filtering Names", desc: "Filter unique name sets from large input collections.", code: "let unique = [...new Set(names)]", icon: Filter }
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:border-sky-500 transition-colors">
                    <div className="flex gap-6 items-center">
                       <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl group-hover:bg-sky-500 group-hover:text-white transition-colors duration-500">
                          <item.icon size={24} />
                       </div>
                       <div className="flex-1">
                          <h6 className="text-xl font-black italic tracking-tight">{item.title}</h6>
                          <p className="text-xs text-gray-500 font-medium mb-4">{item.desc}</p>
                          <code className="text-[10px] font-bold text-sky-500 font-mono italic underline decoration-sky-500/10 italic uppercase tracking-tighter shadow-sm">{item.code}</code>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Section 5: Important Behavior ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl space-y-12">
           <SectionHeader icon={AlertTriangle} title="7. The Reference Trap" subtitle="Understanding how objects behave in Sets." color="text-amber-500" />
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <p className="text-gray-500 font-medium leading-relaxed">
                    Sets use **Strict Equality (===)**. For objects, it checks memory references, not the structural content of the object.
                 </p>
                 <CodeBlock title="Object Ambiguity" code={`let set = new Set();\n\nset.add({ name: "John" });\nset.add({ name: "John" });\n\nconsole.log(set.size); // 2!`} />
              </div>
              <div className="p-10 bg-amber-500/5 rounded-[3rem] border border-amber-500/10 space-y-6">
                 <div className="p-4 bg-amber-500 text-white rounded-2xl shadow-xl shadow-amber-500/20 w-fit">
                    <Info size={24} />
                 </div>
                 <h5 className="text-xl font-black italic text-amber-600 tracking-tight">Different References = Different Values</h5>
                 <p className="text-xs text-amber-700/70 leading-relaxed font-bold italic tracking-tight uppercase shadow-sm">
                    Two objects with the exact same keys and values are treated as distinct entities by a Set because they live at different memory addresses.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Performance Matrix ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={BarChart} title="8. Performance Advantage" subtitle="Why Sets win at scale." color="text-indigo-500" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="p-12 bg-white dark:bg-gray-800 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 flex flex-col justify-center text-center">
               <Cpu size={50} className="text-indigo-500 mx-auto" />
               <h4 className="text-2xl font-black italic tracking-tight">O(1) vs O(n)</h4>
               <p className="text-gray-500 text-sm font-medium">Checking presence with <code>has()</code> is extremely fast, regardless of the collection's size.</p>
               <div className="flex gap-4 items-center justify-center">
                  <div className="px-6 py-2 bg-indigo-500 text-white rounded-full text-xs font-black shadow-lg">SET: CONSTANT TIME</div>
                  <ArrowRight size={14} className="text-gray-300" />
                  <div className="px-6 py-2 border border-gray-200 text-gray-400 rounded-full text-xs font-black">ARRAY: LINEAR TIME</div>
               </div>
            </div>
            <div className="space-y-6">
               <ul className="space-y-6">
                  {[
                    "Faster existence checks with has()",
                    "Native duplicate removal logic",
                    "Highly optimized for large unique datasets",
                    "Maintains order without the overhead of index shifts"
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-4 items-center group">
                       <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-2xl group-hover:scale-110 transition-transform"><CheckCircle size={20} /></div>
                       <span className="text-gray-600 dark:text-gray-300 font-black italic tracking-tight uppercase text-xs">{tip}</span>
                    </li>
                  ))}
               </ul>
            </div>
        </div>
      </section>

      {/* ── Section 7: Pro Recommendations ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="9. Pro Recommendations & Tips" subtitle="Engineering high-end unique collections." color="text-sky-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
           {[
             { title: "Unique Value Master", desc: "Use Set whenever you need unique values and don't require indexed access like array[0].", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-500/10" },
             { title: "Fast Lookup", desc: "If you frequently search for existence, Sets outperform arrays significantly at scale.", icon: Search, color: "text-sky-500 bg-sky-500/10" },
             { title: "Data Caching", desc: "Excellent for caching visited IDs, routes, or processed data tokens.", icon: Database, color: "text-indigo-500 bg-indigo-500/10" }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4 group">
                <div className={`p-4 rounded-2xl w-fit ${item.color} group-hover:rotate-12 transition-transform`}>
                   <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white tracking-tight italic underline decoration-sky-500/10">{item.title}</h4>
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
              <Zap size={24} className="text-sky-500" /> Senior Engineer Hacks
           </h4>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { label: "One-Line Dedupe", text: "[...new Set(arr)]", icon: Filter },
                { label: "Fast Existence", text: "set.has(value)", icon: Search },
                { label: "Set Cloning", text: "new Set(original)", icon: RefreshCw },
                { label: "Spread Power", text: "Works well with arrays", icon: Share2 }
              ].map((tip, i) => (
                <div key={i} className="space-y-3 p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                   <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center text-xs shadow-lg shadow-sky-500/20">
                      <tip.icon size={18} />
                   </div>
                   <div>
                      <span className="text-white font-black text-sm block mb-1 tracking-tight italic">{tip.label}</span>
                      <p className="text-[10px] text-gray-500 font-mono italic underline decoration-sky-500/20 uppercase tracking-tighter">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] italic">
            Unique. Immutable. Efficient.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose font-sans">
            Sets are the ultimate solution for strictly unique data and lightning-fast existence checks.<br />
            Favor them for high-performance lookups, use them as native deduplicators, and always beware of reference equality for objects.
         </p>
      </footer>

    </div>
  );
};

export default JsSets;
