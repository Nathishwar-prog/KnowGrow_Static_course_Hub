import React, { useState } from 'react';
import {
  Zap,
  Check,
  Copy,
  Info,
  Layers,
  Terminal,
  ArrowRight,
  Code2,
  Box,
  Layout,
  Database,
  Globe,
  Activity,
  AlertTriangle,
  CheckCircle,
  Package,
  RefreshCw,
  Eye,
  Target,
  CloudLightning,
  ShieldCheck,
  List,
  Network,
  GitBranch,
  Repeat,
  FunctionSquare,
  BoxSelect,
  AlertOctagon,
  Clock,
  MoreHorizontal,
  BookOpen,
  Lock,
  Ban,
  ShieldAlert,
  FileWarning,
  Compass,
  Link,
  Map,
  Search,
  Hash,
  LogIn,
  RotateCcw,
  ToggleLeft,
  ToggleRight,
  Cpu,
  Power,
  ArrowDownToLine,
  ChevronRight,
  Calculator,
  Aperture,
  Lightbulb,
  Settings,
  PlayCircle,
  Shuffle,
  Star,
  Scale
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-emerald-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsLoopFor: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#06110d] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Repeat size={14} className="fill-current" /> CYCLE & REPEAT
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 drop-shadow-2xl">
            Loop
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The engine of <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight">repetition</span>. Execute code multiple times efficiently and with precise control.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Syntax ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-500 w-max border border-emerald-100 dark:border-emerald-500/20 shadow-lg">
                 <RefreshCw size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is a for Loop?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 A <code className="text-emerald-500 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded">for</code> loop is used to <span className="font-bold text-emerald-500">repeat</span> a block of code multiple times until a condition becomes false.
                 </p>
                 <div className="bg-teal-50 dark:bg-teal-500/5 p-5 rounded-2xl border border-teal-200 dark:border-teal-500/20">
                    <p className="font-bold text-teal-700 dark:text-teal-400 flex items-center gap-2 mb-2">
                       <Lightbulb size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       for loop = <span className="font-bold text-teal-600 dark:text-teal-400">repeat code with control</span>
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b1411] p-10 rounded-[3rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-5 p-6"><Settings size={150} className="text-emerald-500"/></div>
               <SectionHeader icon={Terminal} title="2. Basic Syntax" subtitle="The blueprint." color="text-emerald-400" />
               <div className="relative z-10">
                  <CodeBlock code={`for (initialization; condition; increment) {\n    // code to execute\n}`} />
               </div>
               <div className="relative z-10 mt-4 flex gap-2 font-mono text-sm text-center">
                  <div className="flex-1 bg-emerald-900/30 border border-emerald-500/20 p-2 rounded-lg text-emerald-300">Start</div>
                  <div className="flex-1 bg-amber-900/30 border border-amber-500/20 p-2 rounded-lg text-amber-300">Check</div>
                  <div className="flex-1 bg-sky-900/30 border border-sky-500/20 p-2 rounded-lg text-sky-300">Update</div>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4 & 5: How Works, Example, Flow ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-10 md:p-12 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
             <SectionHeader icon={List} title="3. How It Works" subtitle="(Step-by-Step)" color="text-teal-500" />
             <div className="space-y-4">
                 <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shrink-0">1</div>
                    <p className="font-medium text-gray-700 dark:text-gray-300"><span className="font-bold text-emerald-600 dark:text-emerald-400">Initialization</span> → runs once</p>
                 </div>
                 <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-black flex items-center justify-center shrink-0">2</div>
                    <p className="font-medium text-gray-700 dark:text-gray-300"><span className="font-bold text-amber-600 dark:text-amber-400">Condition</span> → checked before each loop</p>
                 </div>
                 <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-black flex items-center justify-center shrink-0">3</div>
                    <p className="font-medium text-gray-700 dark:text-gray-300"><span className="font-bold text-indigo-600 dark:text-indigo-400">Execute</span> → code runs</p>
                 </div>
                 <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="w-8 h-8 rounded-full bg-sky-500 text-white font-black flex items-center justify-center shrink-0">4</div>
                    <p className="font-medium text-gray-700 dark:text-gray-300"><span className="font-bold text-sky-600 dark:text-sky-400">Increment</span> → updates value</p>
                 </div>
                 <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="w-8 h-8 rounded-full bg-gray-800 text-white font-black flex items-center justify-center shrink-0">5</div>
                    <p className="font-medium text-gray-700 dark:text-gray-300"><span className="font-bold text-gray-900 dark:text-white">Repeat</span> → until condition is false</p>
                 </div>
             </div>
         </div>

         <div className="lg:col-span-7 bg-[#0b1411] border border-emerald-500/20 p-10 md:p-12 rounded-[3rem] shadow-xl flex flex-col justify-between">
            <div>
               <SectionHeader icon={PlayCircle} title="4. Simple Example" subtitle="Printing 1 to 5." color="text-emerald-400" />
               <CodeBlock code={`for (let i = 1; i <= 5; i++) {\n    console.log(i);\n}`} />
               <div className="mt-8 bg-black/40 border border-emerald-500/10 p-6 rounded-2xl flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                     <p className="font-mono text-sm uppercase tracking-widest text-gray-500 mb-4">Output Log</p>
                     <div className="font-mono text-green-400 space-y-1">
                        <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
                     </div>
                  </div>
                  <div className="flex-[2]">
                     <p className="font-mono text-sm uppercase tracking-widest text-emerald-500 mb-4 flex items-center gap-2"><ArrowDownToLine size={14}/> 5. Visual Flow</p>
                     <div className="font-mono text-sm text-gray-400 space-y-2">
                        <div className="flex items-center gap-2"><div className="w-10 text-emerald-400">i=1</div> → check <span className="text-emerald-500">(true)</span> → print → <span className="text-sky-400">i++</span></div>
                        <div className="flex items-center gap-2"><div className="w-10 text-emerald-400">i=2</div> → check <span className="text-emerald-500">(true)</span> → print → <span className="text-sky-400">i++</span></div>
                        <div>...</div>
                        <div className="flex items-center gap-2 bg-rose-500/10 p-2 rounded -mx-2"><div className="w-10 text-rose-400">i=6</div> → check <span className="text-rose-500">(false)</span> → <span className="text-rose-400 font-bold">STOP</span></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6: Loop Variations ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Shuffle} title="6. Loop Variations" color="text-teal-500" />
            
            <div className="grid md:grid-cols-3 gap-8 mt-10">
               <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 p-6 rounded-3xl hover:border-emerald-500/30 transition-colors">
                  <h4 className="flex items-center gap-2 font-black text-emerald-600 dark:text-emerald-400 mb-4"><span className="bg-emerald-100 dark:bg-emerald-900/50 p-1 rounded">🟢</span> Reverse Loop</h4>
                  <CodeBlock code={`for (let i = 5; i >= 1; i--) {\n    console.log(i);\n}`} language="javascript" />
               </div>
               
               <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 p-6 rounded-3xl hover:border-blue-500/30 transition-colors">
                  <h4 className="flex items-center gap-2 font-black text-blue-600 dark:text-blue-400 mb-4"><span className="bg-blue-100 dark:bg-blue-900/50 p-1 rounded">🔵</span> Increment by 2</h4>
                  <CodeBlock code={`for (let i = 0; i <= 10; i += 2) {\n    console.log(i);\n}`} language="javascript" />
               </div>

               <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-500/20 p-6 rounded-3xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-rose-500/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-3xl"></div>
                  <h4 className="flex items-center gap-2 font-black text-rose-600 dark:text-rose-400 mb-4 relative z-10"><span className="bg-rose-100 dark:bg-rose-900/50 p-1 rounded">🟡</span> Infinite Loop ⚠️</h4>
                  <div className="relative z-10">
                     <CodeBlock code={`for (;;) {\n    console.log("Infinite");\n}`} language="javascript" />
                  </div>
                  <p className="text-xs font-bold text-rose-500 mt-2 relative z-10 text-center uppercase tracking-wider">Browser Will Crash</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7 & 8: Nested Loop & Real-World Array ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-violet-900/20 to-[#0b1411] border border-violet-500/20 p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5"><Layers size={200} className="text-violet-500"/></div>
             <SectionHeader icon={Layers} title="7. Nested for Loop" subtitle="(Very Important)." color="text-violet-400" />
             <div className="relative z-10">
                 <CodeBlock code={`for (let i = 1; i <= 3; i++) {\n    for (let j = 1; j <= 2; j++) {\n        console.log(i, j);\n    }\n}`} />
                 <div className="mt-6 bg-black/40 p-5 rounded-xl border border-violet-500/10">
                    <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3">Output Trace</p>
                    <div className="grid grid-cols-2 gap-2 font-mono text-sm text-gray-300">
                        <div className="bg-violet-950/40 px-3 py-1 rounded">1 1</div>
                        <div className="bg-violet-950/40 px-3 py-1 rounded">1 2</div>
                        <div className="bg-fuchsia-950/40 px-3 py-1 rounded">2 1</div>
                        <div className="bg-fuchsia-950/40 px-3 py-1 rounded">2 2</div>
                        <div className="bg-purple-950/40 px-3 py-1 rounded">3 1</div>
                        <div className="bg-purple-950/40 px-3 py-1 rounded">3 2</div>
                    </div>
                 </div>
             </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
             <SectionHeader icon={Package} title="8. Real-World Example" subtitle="Iterating Arrays." color="text-emerald-500" />
             <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">👉 Looping through an array dynamically using its length:</p>
             <CodeBlock code={`let fruits = ["Apple", "Banana", "Mango"];\n\nfor (let i = 0; i < fruits.length; i++) {\n    console.log(fruits[i]);\n}`} />
             <div className="mt-4 bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-500/20">
                <p className="font-mono text-emerald-700 dark:text-emerald-400 font-bold text-sm text-center">Output: Apple, Banana, Mango</p>
             </div>
         </div>
      </section>

      {/* ── Section 9: Break & Continue ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 border bg-[#fafafa] dark:bg-[#121212] p-10 md:p-14 rounded-[4rem] shadow-2xl">
            <SectionHeader icon={AlertOctagon} title="9. break and continue" subtitle="Controlling the flow from within." color="text-rose-500" />
            
            <div className="grid md:grid-cols-2 gap-8 mt-10">
               <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-3xl border border-rose-200 dark:border-rose-500/20">
                  <h4 className="font-black text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2 text-xl"><span className="bg-rose-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">🔴</span> break</h4>
                  <p className="text-rose-700 dark:text-rose-300 font-medium mb-6 text-sm">👉 Stops loop completely</p>
                  <CodeBlock code={`for (let i = 1; i <= 5; i++) {\n    if (i === 3) break;\n    console.log(i);\n}`} />
                  <p className="font-mono text-sm text-center font-bold text-rose-500 bg-white dark:bg-black p-2 rounded-lg border border-rose-100 dark:border-rose-900/50 shadow-sm">Output: 1, 2</p>
               </div>

               <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-200 dark:border-blue-500/20">
                  <h4 className="font-black text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2 text-xl"><span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">🔵</span> continue</h4>
                  <p className="text-blue-700 dark:text-blue-300 font-medium mb-6 text-sm">👉 Skips current iteration</p>
                  <CodeBlock code={`for (let i = 1; i <= 5; i++) {\n    if (i === 3) continue;\n    console.log(i);\n}`} />
                  <p className="font-mono text-sm text-center font-bold text-blue-500 bg-white dark:bg-black p-2 rounded-lg border border-blue-100 dark:border-blue-900/50 shadow-sm">Output: 1, 2, 4, 5</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 10 & 11: Patterns & vs While ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-[#0b1411] p-10 border border-emerald-500/20 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Aperture} title="10. Common Patterns" color="text-emerald-400" />
            
            <div className="space-y-6">
                <div>
                   <h4 className="font-bold text-emerald-400 mb-3 flex items-center gap-2"><Calculator size={16}/> Sum of Numbers</h4>
                   <CodeBlock code={`let sum = 0;\n\nfor (let i = 1; i <= 5; i++) {\n    sum += i;\n}\n\nconsole.log(sum); // 15`} />
                </div>
                <div>
                   <h4 className="font-bold text-amber-400 mb-3 flex items-center gap-2"><Star size={16}/> Pattern Printing</h4>
                   <CodeBlock code={`for (let i = 1; i <= 3; i++) {\n    console.log("*".repeat(i));\n}\n// *\n// **\n// ***`} />
                </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Scale} title="11. for vs while" subtitle="When to use what." color="text-indigo-500" />
            
            <table className="w-full text-left text-sm mt-6">
               <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                     <th className="p-6 font-black text-indigo-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 w-1/3">Feature</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">for</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">while</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Best for</td>
                     <td className="p-6 border-l text-center text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-900/10">Known loops</td>
                     <td className="p-6 border-l text-center text-amber-600 dark:text-amber-400 font-bold bg-amber-50/50 dark:bg-amber-900/10">Unknown loops</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Structure</td>
                     <td className="p-6 border-l text-center text-gray-600 dark:text-gray-400">Compact</td>
                     <td className="p-6 border-l text-center text-gray-600 dark:text-gray-400">Flexible</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          AUTOMATED PROGRESS
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-emerald-500/10 decoration-2">
          "Loops are the fundamental mechanism of automation. They allow computers to perform thousands of repetitive tasks perfectly without ever getting bored."
        </p>
      </footer>

    </div>
  );
};

export default JsLoopFor;