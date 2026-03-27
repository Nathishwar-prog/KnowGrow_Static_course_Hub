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
  Users,
  Repeat,
  Lightbulb
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

const JsSetRef: React.FC = () => {
  const [activeVisMode, setActiveVisMode] = useState<'primitive' | 'object' | 'reference'>('primitive');

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 animate-pulse tracking-[0.2em]">
          <Database size={14} className="fill-current" /> MEMORY & REFERENCES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS Set <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-sky-600 drop-shadow-2xl">
            Reference
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the professional way JavaScript handles <span className="text-gray-900 dark:text-white font-bold italic underline decoration-indigo-500/30">uniqueness</span>. Understand the difference between values and memory locations.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is Set Reference?" subtitle="The heart of JavaScript's comparison logic." color="text-indigo-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                A JavaScript Set is a **reference type**. This means it doesn't just look at values—it looks at where those values live in memory (especially for objects).
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl group hover:bg-emerald-500 transition-all duration-500">
                    <Zap size={24} className="text-emerald-500 group-hover:text-white mb-4" />
                    <h5 className="font-black text-gray-900 dark:text-white group-hover:text-white mb-2">Primitives</h5>
                    <p className="text-[10px] uppercase font-black tracking-widest text-emerald-600 group-hover:text-white/80 italic">Compared by Value</p>
                 </div>
                 <div className="p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-3xl group hover:bg-indigo-500 transition-all duration-500">
                    <Share2 size={24} className="text-indigo-500 group-hover:text-white mb-4" />
                    <h5 className="font-black text-gray-900 dark:text-white group-hover:text-white mb-2">Objects</h5>
                    <p className="text-[10px] uppercase font-black tracking-widest text-indigo-600 group-hover:text-white/80 italic">Compared by Reference</p>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="p-10 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                  <Database size={200} className="text-indigo-500" />
                </div>
                <h4 className="text-xl font-black text-white italic tracking-tight flex items-center gap-3 relative z-10">
                   <Cpu size={24} className="text-indigo-500" /> Comparison Rules
                </h4>
                <div className="space-y-6 relative z-10 font-mono text-sm">
                   <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <span className="text-gray-500 block mb-2 underline decoration-gray-500/20 italic">// Primitive (Number)</span>
                      <span className="text-emerald-400">10 === 10</span> <span className="text-gray-500 italic">➞ true</span>
                   </div>
                   <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <span className="text-gray-500 block mb-2 underline decoration-gray-500/20 italic">// Objects (Different Ref)</span>
                      <span className="text-rose-400">{"{id:1} === {id:1}"}</span> <span className="text-gray-500 italic">➞ false</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Primitive vs Reference ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12">
           <div className="space-y-8">
              <SectionHeader icon={Repeat} title="2. Primitive vs Reference" subtitle="Seeing how duplication is detected." color="text-emerald-500" />
              <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
                 <h5 className="text-xl font-black italic text-emerald-600 flex items-center gap-2">
                    <CheckCircle size={20} /> Primitives (By Value)
                 </h5>
                 <p className="text-gray-500 font-medium">When adding primitives like numbers or strings, the Set removes duplicates because the **values** are identical.</p>
                 <CodeBlock title="Primitive Deduplication" code={`let set = new Set();\n\nset.add(10);\nset.add(10); // same value\n\nconsole.log(set.size); // 1\n// Output: Duplicate removed because values are same`} />
              </div>
           </div>

           <div className="space-y-8 pt-12 lg:pt-0">
              <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
                 <h5 className="text-xl font-black italic text-rose-500 flex items-center gap-2">
                    <AlertTriangle size={20} /> Objects (By Reference)
                 </h5>
                 <p className="text-gray-500 font-medium">Two objects with the same keys and values are treated as **different** because they occupy different memory locations.</p>
                 <CodeBlock title="Object Duplication" code={`let set = new Set();\n\nset.add({ name: "John" });\nset.add({ name: "John" }); // new memory location\n\nconsole.log(set.size); // 2\n// Output: Different memory locations ➞ treated as different`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Same Object Reference ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-indigo-950 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
              <ShieldCheck size={300} className="text-white" />
           </div>
           
           <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">
              <div className="space-y-8">
                 <SectionHeader icon={TargetIcon} title="3. Same Object Reference" subtitle="The key to preventing object duplicates." color="text-indigo-400" />
                 <p className="text-indigo-100/60 text-lg leading-relaxed italic">
                    If you add the **exact same variable** twice, the Set recognizes it's pointing to the same memory address.
                 </p>
                 <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 space-y-4">
                    <h6 className="text-emerald-400 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                       <CheckCircle size={16} /> Result: No Duplicate
                    </h6>
                    <p className="text-white font-mono text-sm">
                       let obj = {"{ name: \"John\" }"};\nset.add(obj);\nset.add(obj); <br/><br/>
                       <span className="text-indigo-400 italic">// set.size === 1</span>
                    </p>
                 </div>
              </div>
              <div>
                 <CodeBlock title="Reference Consistency" code={`let set = new Set();\n\nlet obj = { name: "John" };\n\nset.add(obj);\nset.add(obj);\n\nconsole.log(set.size); // 1\n// Output: Same reference ➞ no duplicate`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4: Memory Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Activity} title="4. Memory Visualization" subtitle="How JavaScript sees your data in RAM." color="text-sky-500" />
        
        <div className="grid lg:grid-cols-3 gap-8 text-center">
           {[
             { 
               id: 'primitive', 
               title: "Case 1: Primitive", 
               logic: "10 ➞ same value ➞ 1 entry", 
               color: "text-emerald-500",
               desc: "Value comparison only."
             },
             { 
               id: 'object', 
               title: "Case 2: Object", 
               logic: "{...} ➞ new memory ➞ 2 entries", 
               color: "text-rose-500",
               desc: "Structural equality ≠ reference equality."
             },
             { 
               id: 'reference', 
               title: "Case 3: Reference", 
               logic: "obj ───> { name: 'John' }", 
               color: "text-indigo-500",
               desc: "Pointing to the same target."
             }
           ].map((caseItem) => (
             <button
               key={caseItem.id}
               onClick={() => setActiveVisMode(caseItem.id as any)}
               className={`p-10 rounded-[3rem] transition-all duration-500 border-2 ${
                 activeVisMode === caseItem.id 
                   ? `bg-white dark:bg-gray-800 shadow-2xl border-indigo-500 -translate-y-4` 
                   : `bg-white/50 dark:bg-gray-900/50 border-transparent grayscale opacity-60 hover:grayscale-0 hover:opacity-100`
               }`}
             >
                <h5 className={`font-black mb-4 ${caseItem.color}`}>{caseItem.title}</h5>
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-6">{caseItem.desc}</p>
                <div className="p-5 bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 font-mono text-xs italic">
                   {caseItem.logic}
                </div>
             </button>
           ))}
        </div>

        <div className="mt-12 p-12 bg-white dark:bg-gray-800 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl overflow-hidden relative">
           <div className="flex flex-col md:flex-row items-center justify-around gap-12 relative z-10">
              {activeVisMode === 'primitive' && (
                <div className="flex items-center gap-12 animate-in zoom-in duration-500">
                   <div className="p-8 bg-emerald-500 text-white rounded-3xl shadow-xl font-black text-2xl">10</div>
                   <div className="h-px w-24 bg-gray-300 relative">
                      <div className="absolute right-0 -top-1.5"><ArrowRight size={14} className="text-gray-300" /></div>
                   </div>
                   <div className="p-8 bg-emerald-500/10 border-2 border-emerald-500 text-emerald-500 rounded-3xl font-black text-xl">Stored in Set</div>
                </div>
              )}

              {activeVisMode === 'object' && (
                <div className="flex flex-col gap-8 animate-in slide-in-from-right duration-500">
                   <div className="flex items-center gap-12">
                      <div className="p-6 bg-rose-500 text-white rounded-3xl font-mono text-sm underline italic">Reference A</div>
                      <ArrowRight className="text-gray-300" />
                      <div className="p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-3xl">{"{ id: 1 }"}</div>
                   </div>
                   <div className="flex items-center gap-12">
                      <div className="p-6 bg-indigo-500 text-white rounded-3xl font-mono text-sm underline italic">Reference B</div>
                      <ArrowRight className="text-gray-300" />
                      <div className="p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-3xl">{"{ id: 1 }"}</div>
                   </div>
                   <div className="p-4 bg-rose-500/10 text-rose-500 rounded-2xl text-center font-black text-[10px] uppercase">A !== B (Different Memory)</div>
                </div>
              )}

              {activeVisMode === 'reference' && (
                <div className="flex items-center gap-12 animate-in fade-in duration-700">
                   <div className="flex flex-col gap-10">
                      <div className="p-6 bg-indigo-500 text-white rounded-3xl font-mono font-black italic">obj_var1</div>
                      <div className="p-6 bg-indigo-500/50 text-white rounded-3xl font-mono font-black italic">obj_var2</div>
                   </div>
                   <div className="relative h-24 w-40">
                      <svg className="w-full h-full stroke-indigo-500 fill-none stroke-2">
                        <path d="M 0 20 L 150 50" markerEnd="url(#arrow)" />
                        <path d="M 0 80 L 150 50" markerEnd="url(#arrow)" />
                        <defs>
                          <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L9,3 z" fill="#6366f1" />
                          </marker>
                        </defs>
                      </svg>
                   </div>
                   <div className="p-10 bg-indigo-600 text-white rounded-[2rem] shadow-2xl shadow-indigo-500/40">
                      <span className="font-mono">{"{ name: \"John\" }"}</span>
                   </div>
                </div>
              )}
           </div>
        </div>
      </section>

      {/* ── Section 5: Real World Problems ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="space-y-8">
            <SectionHeader icon={ShieldAlert} title="5. Real-World Problem" subtitle="Why your sets are failing to deduplicate objects." color="text-rose-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
               <h6 className="text-xl font-black italic text-rose-600">🎯 Duplicate Objects Not Removed</h6>
               <p className="text-gray-500 font-medium">If you map an array of similar objects to a Set, it will fail because the mapping process creates new object references for each entry.</p>
               <CodeBlock title="Broken Deduplication" code={`let users = [\n  { id: 1 },\n  { id: 1 }\n];\n\nlet unique = new Set(users);\n\nconsole.log(unique.size); // 2\n// Output: Set cannot detect duplicate objects by value`} />
            </div>
         </div>

         <div className="space-y-8">
            <SectionHeader icon={CheckCircle} title="6. Solution: Deduplication" subtitle="The professional pattern for unique objects." color="text-emerald-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
               <h6 className="text-xl font-black italic text-emerald-600">✅ Using Map (Best Practice)</h6>
               <p className="text-gray-500 font-medium font-sans">Leverage IDs as keys in a Map to ensure structural uniqueness.</p>
               <CodeBlock title="ID-Based Deduplication" code={`let users = [\n  { id: 1 },\n  { id: 1 }\n];\n\nlet unique = [\n  ...new Map(users.map(u => [u.id, u])).values()\n];\n\nconsole.log(unique); // [{ id: 1 }]`} />
            </div>
         </div>
      </section>

      {/* ── Section 6: Set Stores References ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-gray-950 p-12 rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-2xl shadow-indigo-500/10">
           <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]"></div>
           <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">
              <div className="space-y-8">
                 <SectionHeader icon={Layout} title="7. Set Stores References" subtitle="Updating objects outside the set." color="text-indigo-400" />
                 <p className="text-gray-400 text-lg italic leading-relaxed">
                    Set stores the **pointer**, not a copy. If you modify the object original, the Set reflects that change immediately.
                 </p>
                 <CodeBlock title="Live Reference Update" code={`let obj = { name: "John" };\nlet set = new Set([obj]);\n\nobj.name = "Mike";\n\nconsole.log(set); \n// Output updates because same reference`} />
              </div>
              <div className="space-y-8">
                 <SectionHeader icon={Search} title="8. Checking Existence" subtitle="The strict rules of .has()" color="text-emerald-400" />
                 <CodeBlock title="Strict Presence Check" code={`let obj = { id: 1 };\nlet set = new Set();\nset.add(obj);\n\nconsole.log(set.has(obj)); // true\n// Output: Must use same reference`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 7: Summary & Pro Tips ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="9. Key Rules Summary" subtitle="The fundamental laws of Set memory." color="text-indigo-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
           {[
             { title: "Primitive", text: "Compared by value.", icon: Zap, color: "text-emerald-500 bg-emerald-500/10" },
             { title: "Object", text: "Compared by reference.", icon: Box, color: "text-indigo-500 bg-indigo-500/10" },
             { title: "Same Variable", text: "Recognized as identical.", icon: CheckCircle, color: "text-blue-500 bg-blue-500/10" },
             { title: "Different Ref", text: "Treated as duplicate.", icon: AlertTriangle, color: "text-rose-500 bg-rose-500/10" }
           ].map((rule, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-sm space-y-4 hover:shadow-xl transition-all">
                <div className={`p-4 rounded-2xl w-fit ${rule.color}`}>
                   <rule.icon size={24} />
                </div>
                <h4 className="text-lg font-black text-gray-900 dark:text-white tracking-tight italic underline decoration-gray-500/10">{rule.title}</h4>
                <p className="text-xs text-gray-500 font-medium italic">{rule.text}</p>
             </div>
           ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
           <div className="p-12 bg-white dark:bg-gray-800 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl space-y-8">
              <h4 className="text-3xl font-black italic tracking-tight flex items-center gap-4">
                 <Lightbulb size={32} className="text-amber-500" /> Personal Recommendations
              </h4>
              <div className="space-y-6">
                 {[
                   { label: "Use Set for Primitives", text: "Perfect for unique lists of Numbers, Strings, or IDs.", icon: Zap, color: "text-emerald-500" },
                   { label: "Be Careful with Objects", text: "Set will NOT remove duplicates automatically.", icon: AlertTriangle, color: "text-rose-500" },
                   { label: "Use Map for Object Deduplication", text: "The industry standard pattern for unique objects based on key (ID).", icon: Activity, color: "text-indigo-500" }
                 ].map((rec, i) => (
                   <div key={i} className="flex gap-5 items-start p-6 bg-gray-50 dark:bg-gray-950 rounded-3xl group">
                      <div className={`p-3 rounded-2xl bg-white dark:bg-gray-800 shadow-lg ${rec.color} group-hover:scale-110 transition-transform`}>
                         <rec.icon size={20} />
                      </div>
                      <div>
                         <span className={`text-sm font-black italic ${rec.color} block mb-1 underline decoration-current/10 underline italic`}>{rec.label}</span>
                         <p className="text-xs text-gray-500 font-medium leading-relaxed font-sans">{rec.text}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-12 bg-gray-950 rounded-[4rem] border border-white/5 shadow-2xl space-y-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
                 <Binary size={200} className="text-indigo-500" />
              </div>
              <h4 className="text-2xl font-black text-white italic tracking-tight flex items-center gap-4 uppercase tracking-[0.1em] relative z-10">
                 <Zap size={24} className="text-indigo-500" /> Tips & Tricks
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                 {[
                   { label: "1. Store IDs Only", text: "set.add(user.id) — avoids object overhead.", icon: HashIcon },
                   { label: "2. Normalize Data", text: "Convert objects → primitive keys first.", icon: RefreshCw },
                   { label: "3. Debug Ref", text: "console.log(obj1 === obj2)", icon: Search },
                   { label: "4. JSON Trick", text: "new Set(arr.map(JSON.stringify)) — quick but risky (loss of methods).", icon: Package }
                 ].map((tip, i) => (
                   <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-3 group/tip hover:bg-white/10 transition-colors">
                      <div className="p-3 bg-indigo-500 text-white rounded-xl w-fit shadow-lg shadow-indigo-500/20 group-hover/tip:rotate-12 transition-transform">
                         <tip.icon size={18} />
                      </div>
                      <span className="text-white font-black text-sm block italic">{tip.label}</span>
                      <p className="text-[10px] text-gray-500 font-mono italic underline decoration-indigo-500/20 uppercase tracking-tighter">{tip.text}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] italic">
            Reference is Truth.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose font-sans max-w-2xl mx-auto">
            Understanding how JavaScript manages memory is the difference between a Junior and a Senior engineer. <br />
            Always know whether you're comparing a value or a memory address to prevent logic leaks in your collections.
         </p>
      </footer>

    </div>
  );
};

const TargetIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

const HashIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>
);

export default JsSetRef;