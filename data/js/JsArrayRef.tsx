import React, { useState, useMemo } from 'react';
import { 
  Play, 
  RotateCcw, 
  Search, 
  Filter, 
  Shuffle, 
  Layers, 
  Code2, 
  CheckCircle, 
  ShieldCheck,
  Terminal, 
  ArrowRight,
  Monitor,
  Cpu,
  RefreshCw,
  Zap,
  Box,
  Hash,
  Copy,
  Check,
  Package,
  Activity,
  Infinity,
  Database,
  Eye,
  Settings,
  Target,
  PlusCircle,
  MinusCircle,
  Scissors,
  Table,
  AlertTriangle,
  Globe,
  ShoppingCart,
  BarChart3,
  Layout,
  Share2,
  GitCompare,
  CopyIcon,
  HardDrive,
  Network
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
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-rose-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsArrayRef: React.FC = () => {
  const [copyMode, setCopyMode] = useState<'reference' | 'spread'>('reference');
  const [memoryValue, setMemoryValue] = useState([1, 2, 3]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 text-[10px] font-black mb-8 border border-rose-100 dark:border-rose-900/50 shadow-xl shadow-rose-500/5 animate-pulse tracking-[0.2em]">
          <Network size={14} className="fill-current" /> MEMORY ARCHITECTURE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Array<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-500 to-amber-600 drop-shadow-2xl">
            Reference
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Understanding that your variable holds an <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500 underline-offset-4">address</span>, not the actual values.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Eye} title="1. What is an Array Reference?" subtitle="The fundamental concept of reference types in JS." color="text-rose-500" />
            <div className="space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                👉 In JavaScript, arrays are <span className="text-rose-500 font-black italic">reference types</span>. This means a variable does NOT store the actual array, but a reference (memory address) to it.
              </p>
              
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                   <HardDrive size={100} className="text-rose-500" />
                </div>
                <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.4em] mb-6">Internal View</h4>
                <div className="flex items-center gap-6 mb-8">
                   <div className="space-y-4 flex-1">
                      <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700 font-mono text-xs flex items-center justify-between">
                         <span className="text-gray-400">let arr =</span>
                         <span className="text-rose-500 font-bold tracking-widest uppercase">0xAF23</span>
                      </div>
                      <ArrowRight className="text-gray-300 mx-auto" />
                      <div className="p-3 bg-rose-500 text-white rounded-xl font-mono text-center shadow-lg shadow-rose-500/20">
                         [1, 2, 3]
                      </div>
                   </div>
                   <div className="flex-1 text-xs text-gray-400 font-medium leading-loose">
                      The variable stores the <span className="text-rose-500 underline">address</span>. When you move the variable, you're only copying the address, not the data.
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-amber-500 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-[#111111] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl overflow-hidden">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-white font-black text-xl flex items-center gap-3">
                   <Activity size={24} className="text-rose-500 animate-pulse" /> Memory Lab
                </h3>
                <div className="flex gap-2">
                   {['reference', 'spread'].map((m) => (
                      <button 
                        key={m}
                        onClick={() => setCopyMode(m as any)}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                          copyMode === m ? 'bg-rose-500 text-white shadow-xl shadow-rose-500/40' : 'bg-white/5 text-gray-500 hover:text-white'
                        }`}
                      >
                        {m}
                      </button>
                   ))}
                </div>
              </div>

              <div className="space-y-12 relative py-8">
                 <div className="flex items-center gap-8 translate-x-4">
                    <div className="w-24 h-24 rounded-3xl bg-white flex flex-col items-center justify-center shadow-2xl relative">
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter absolute -top-6 left-0">arr1</span>
                       <span className="text-rose-500 font-black text-2xl">RefA</span>
                    </div>
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-rose-500 to-amber-500 relative">
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-amber-500 rounded-full blur-sm"></div>
                    </div>
                    <div className="w-32 h-32 rounded-[2.5rem] bg-amber-500 text-white flex items-center justify-center font-black text-3xl shadow-2xl shadow-amber-500/40">
                       {memoryValue.join(',')}
                    </div>
                 </div>

                 <div className={`flex items-center gap-8 transition-all duration-700 ${copyMode === 'reference' ? 'translate-x-4' : 'translate-x-4'}`}>
                    <div className="w-24 h-24 rounded-3xl bg-white flex flex-col items-center justify-center shadow-2xl relative">
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter absolute -top-6 left-0">arr2</span>
                       <span className={`font-black text-2xl transition-colors duration-500 ${copyMode === 'reference' ? 'text-rose-500' : 'text-emerald-500'}`}>
                         {copyMode === 'reference' ? 'RefA' : 'RefB'}
                       </span>
                    </div>
                    {copyMode === 'reference' ? (
                       <div className="flex-1 h-[2px] bg-rose-500 relative rotate-[30deg] origin-left -translate-y-8">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-rose-500/50 rounded-full blur-sm"></div>
                       </div>
                    ) : (
                      <>
                        <div className="flex-1 h-[2px] bg-emerald-500 relative">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full blur-sm"></div>
                        </div>
                        <div className="w-32 h-32 rounded-[2.5rem] bg-emerald-500 text-white flex items-center justify-center font-black text-3xl shadow-2xl shadow-emerald-500/40">
                           {memoryValue.join(',')}
                        </div>
                      </>
                    )}
                 </div>
              </div>

              <div className="mt-10 p-6 bg-white/5 rounded-3xl border border-white/5 text-center">
                 <button 
                  onClick={() => setMemoryValue([...memoryValue, memoryValue.length + 1])}
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all"
                 >
                   Modify Memory (arr2.push)
                 </button>
                 <p className="mt-4 text-[10px] font-medium text-gray-500 leading-relaxed uppercase tracking-widest">
                   {copyMode === 'reference' 
                    ? '⚠️ Modifying arr2 impacts arr1 (Same Reference)' 
                    : '✅ Modifying arr2 is safe (Different Memory)'}
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Modifying Side Effects ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
             <SectionHeader icon={AlertTriangle} title="3. Modifying One Affects Others" color="text-rose-500" subtitle="The #1 cause of bugs in JavaScript." />
             <div className="space-y-6">
                <p className="text-gray-500 dark:text-gray-400 font-medium">Because both variables refer to the same memory location, any change via one variable is visible through the other.</p>
                <CodeBlock title="Side Effect Example" code={`const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1); // Output: [1, 2, 3, 4]`} />
                <div className="p-5 bg-rose-500/5 border border-rose-500/10 rounded-2xl flex items-center gap-4">
                   <div className="p-3 bg-rose-500 text-white rounded-xl shadow-lg">
                      <Zap size={18} />
                   </div>
                   <span className="text-rose-600 dark:text-rose-400 font-black text-sm italic underline decoration-rose-500/30">Shared Memory == Shared State.</span>
                </div>
             </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-white/5 relative overflow-hidden flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Box size={140} className="text-white" />
             </div>
             <h3 className="text-white font-black text-3xl mb-8 flex items-center gap-4">
               <GitCompare className="text-amber-500" size={32} /> Equality Check
             </h3>
             <p className="text-gray-400 mb-8 leading-relaxed font-medium capitalize">
               Comparing two separate arrays with the same content will return <span className="text-rose-500 font-bold">false</span> because they belong to different memory addresses.
             </p>
             <CodeBlock title="The Equality Gap" code={`const a = [1, 2];
const b = [1, 2];

console.log(a === b); // false (Different addresses)`} />
             <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                <p className="text-emerald-500 font-black text-xs flex items-center gap-2">
                   <CheckCircle size={14} /> Correct Comparison: JSON.stringify(a) === JSON.stringify(b)
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Prim vs Ref Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32 bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
        <SectionHeader icon={Shuffle} title="4. Primitive vs Reference" subtitle="The core dichotomy of JavaScript values." color="text-indigo-500" />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
           <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 rounded-2xl bg-indigo-500 text-white">
                    <Hash size={20} />
                 </div>
                 <h4 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-wider">Primitive (Copy Value)</h4>
              </div>
              <CodeBlock title="Primitive Behavior" code={`let a = 10;
let b = a;
b = 20;

console.log(a); // 10 (Independent)`} />
              <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-800/50 text-emerald-700 dark:text-emerald-400 text-xs font-bold leading-relaxed">
                 Numbers, strings, and booleans are stored directly. Copying them creates a brand new independent cell in memory.
              </div>
           </div>

           <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 rounded-2xl bg-rose-500 text-white">
                    <Layers size={20} />
                 </div>
                 <h4 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-wider">Reference (Copy Address)</h4>
              </div>
              <CodeBlock title="Reference Behavior" code={`let a = [1, 2];
let b = a;
b[0] = 99;

console.log(a); // [99, 2] (Linked)`} />
              <div className="p-4 bg-rose-50 dark:bg-rose-900/10 rounded-2xl border border-rose-100 dark:border-rose-800/50 text-rose-700 dark:text-rose-400 text-xs font-bold leading-relaxed">
                 Objects and arrays store a cursor. Copying them only copies the cursor. Both variables now point to the same "cloud" of data.
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4: Cloning Strategy ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={CopyIcon} title="6. How to Copy Arrays Properly" subtitle="Creating independent versions of your data." color="text-emerald-500" />
         <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Spread Operator', 
                icon: Zap, 
                code: 'const copy = [...arr];', 
                desc: 'The modern & preferred way for shallow clones.', 
                color: 'bg-indigo-500' 
              },
              { 
                title: '.slice() Method', 
                icon: Scissors, 
                code: 'const copy = arr.slice();', 
                desc: 'The reliable ES5 way to create a copy.', 
                color: 'bg-sky-500' 
              },
              { 
                title: 'Array.from()', 
                icon: Package, 
                code: 'const copy = Array.from(arr);', 
                desc: 'Useful for transforming and copying simultaneously.', 
                color: 'bg-emerald-500' 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 group hover:-translate-y-2 transition-transform duration-500">
                 <div className={`p-4 rounded-2xl ${item.color} text-white shadow-lg w-fit mb-6`}>
                    <item.icon size={24} />
                 </div>
                 <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">{item.title}</h4>
                 <p className="text-sm text-gray-500 mb-6 font-medium leading-relaxed">{item.desc}</p>
                 <CodeBlock code={item.code} />
              </div>
            ))}
         </div>
      </section>

      {/* ── Section 5: Shallow vs Deep ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
               <SectionHeader icon={Monitor} title="7. Shallow Copy ⚠️" color="text-rose-500" />
               <p className="text-gray-500 mb-8 max-w-sm font-medium">Nested objects inside an array are NOT copied—they are still referenced.</p>
               <CodeBlock title="Shallow Bug Example" code={`const arr1 = [{name: "A"}];
const arr2 = [...arr1];

arr2[0].name = "B";
console.log(arr1); // [{name: "B"}] ❗`} />
               <div className="mt-8 px-6 py-3 rounded-2xl bg-rose-500/5 text-rose-500 font-black text-[10px] uppercase tracking-widest border border-rose-500/20">
                  Spread and slice only go 1 level deep.
               </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-10 rounded-[3rem] shadow-2xl flex flex-col items-center text-center text-white">
               <SectionHeader icon={RefreshCw} title="Deep Copy ✅" color="text-white" />
               <p className="text-white/70 mb-8 max-w-sm font-medium">Serialization creates a completely independent copy, regardless of nesting.</p>
               <CodeBlock title="Deep Copy Hack" code={`const arr1 = [{name: "A"}];
const arr2 = JSON.parse(JSON.stringify(arr1));

arr2[0].name = "B";
console.log(arr1); // [{name: "A"}] Independent!`} />
               <div className="mt-8 px-6 py-3 rounded-2xl bg-white/10 text-white font-black text-[10px] uppercase tracking-widest border border-white/20">
                  Fully recursive independent memory clone.
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6: Function Behavior ── */}
      <section className="max-w-6xl mx-auto mb-32 bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-xl border border-gray-100 dark:border-gray-700">
         <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
               <SectionHeader icon={Terminal} title="8. Function Behavior" subtitle="Functions can have global side effects." color="text-rose-500" />
               <p className="text-gray-500 font-medium leading-[2]">When you pass an array into a function, you are passing the <span className="text-rose-500 font-black italic underline underline-offset-4 decoration-rose-500/30">REFERENCE</span>. Any modification inside the function changes the original data outside!</p>
            </div>
            <div className="lg:col-span-8">
               <CodeBlock title="Side Effects in Functions" code={`function modify(arr) {
    arr.push(100);
}

const data = [1, 2];
modify(data);

console.log(data); // [1, 2, 100]`} />
            </div>
         </div>
      </section>

      {/* ── Section 7: Final Example ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">9. Complete Example 🎯</h2>
              <p className="text-gray-400 mb-8 leading-relaxed font-medium">Observe the difference between reference assignment and actual cloning in a single test.</p>
              <div className="space-y-6">
                 {[
                   { label: 'Reference copy', text: 'refCopy = original;', sub: 'Both share RefA', color: 'bg-rose-500' },
                   { label: 'Cloned copy', text: 'realCopy = [...original];', sub: 'New RefB created', color: 'bg-emerald-500' }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/5">
                       <div className={`w-3 h-12 ${item.color} rounded-sm shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.1)]`}></div>
                       <div>
                          <span className="text-white font-black text-xs uppercase tracking-widest block">{item.label}</span>
                          <code className="text-gray-400 text-xs font-mono">{item.text}</code>
                          <span className="text-[10px] text-white/30 block mt-1">{item.sub}</span>
                       </div>
                    </div>
                 ))}
              </div>
            </div>
            <CodeBlock title="The Great Comparison" code={`const original = [1, 2, 3];

const refCopy = original;
const realCopy = [...original];

refCopy.push(4);
realCopy.push(5);

console.log(original); // [1, 2, 3, 4] (Impacted)
console.log(realCopy); // [1, 2, 3, 5] (Independent)`} />
          </div>
        </div>
      </section>

      {/* ── Section 8: Mistakes ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={AlertTriangle} title="10. Common Mistakes" subtitle="Avoid these reference-related developer traps." color="text-rose-600" />
         <div className="grid gap-6">
            {[
              { title: 'Thinking assignment creates new array', code: 'const b = a; // same reference ❌' },
              { title: 'Not understanding nested objects', code: 'Even spread is shallow ❗' },
              { title: 'Comparing arrays directly', code: '[1,2] === [1,2]; // false ❌' }
            ].map((err, i) => (
               <div key={i} className="flex items-center gap-6 p-6 bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 rounded-3xl relative overflow-hidden group">
                  <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                     <AlertTriangle size={60} />
                  </div>
                  <div className="p-3 bg-rose-500 text-white rounded-xl shadow-lg">
                     <MinusCircle size={20} />
                  </div>
                  <div>
                     <h4 className="font-black text-rose-900 dark:text-rose-200 text-base">{err.title}</h4>
                     <code className="text-rose-500 font-mono text-xs">{err.code}</code>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 9: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="11. Real-World Use Cases" subtitle="Where this concept matters most in production." color="text-sky-500" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
           {[
             { title: 'React State', icon: Layout, color: 'text-sky-500' },
             { title: 'Redux Updates', icon: RefreshCw, color: 'text-purple-500' },
             { title: 'API Data', icon: Database, color: 'text-rose-500' },
             { title: 'Form Handling', icon: Activity, color: 'text-amber-500' },
             { title: 'Bug Hunting', icon: Search, color: 'text-emerald-500' }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:scale-105 transition-all duration-500 overflow-hidden relative">
                <item.icon size={28} className={`${item.color} mb-4 relative z-10`} />
                <span className="font-black text-gray-900 dark:text-white text-xs block relative z-10 uppercase tracking-widest">{item.title}</span>
                <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${item.color} opacity-5 rounded-full group-hover:scale-[10] transition-transform duration-1000`}></div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Reference Matters.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
           Understanding how JavaScript manages memory is the bridge between a coder and an engineer.<br />
           Always know whether you're moving values or just pointers.
         </p>
      </footer>

    </div>
  );
};

export default JsArrayRef;