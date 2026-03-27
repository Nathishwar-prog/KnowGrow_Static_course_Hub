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
  Map as MapIcon,
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
  Scale,
  Key,
  KeyRound,
  ListOrdered
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

const JsLoops: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#050b0a] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <RefreshCw size={14} className="fill-current" /> ITERATION MASTERY
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 drop-shadow-2xl">
            Loops
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The core of automation. Run code <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight">again and again</span> efficiently until a specific condition is met.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-500 w-max border border-emerald-100 dark:border-emerald-500/20 shadow-lg">
                 <Repeat size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are Loops in JS?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 Loops are used to <span className="font-bold text-emerald-500">repeat</span> a block of code multiple times.
                 </p>
                 <div className="bg-teal-50 dark:bg-teal-500/5 p-5 rounded-2xl border border-teal-200 dark:border-teal-500/20">
                    <p className="font-bold text-teal-700 dark:text-teal-400 flex items-center gap-2 mb-2">
                       <Lightbulb size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       Loop = <span className="font-bold text-teal-600 dark:text-teal-400">run code again and again</span> until a condition is met.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b1411] p-10 rounded-[3rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-5 p-6"><Settings size={150} className="text-emerald-500"/></div>
               <SectionHeader icon={Info} title="2. Why Loops?" subtitle="Working harder vs smarter." color="text-emerald-400" />
               <div className="grid md:grid-cols-2 gap-6 relative z-10 mt-4">
                  <div className="bg-rose-950/30 border border-rose-500/20 p-5 rounded-2xl">
                     <h4 className="font-black text-rose-400 mb-2 flex items-center gap-2"><span className="text-lg">❌</span> Without loops</h4>
                     <CodeBlock code={`console.log(1);\nconsole.log(2);\nconsole.log(3);`} />
                  </div>
                  <div className="bg-emerald-950/30 border border-emerald-500/20 p-5 rounded-2xl">
                     <h4 className="font-black text-emerald-400 mb-2 flex items-center gap-2"><span className="text-lg">✅</span> With loops</h4>
                     <CodeBlock code={`for(let i=1; i<=3; i++){\n  console.log(i);\n}`} />
                  </div>
               </div>
               <p className="text-emerald-300 font-bold mt-6 relative z-10 text-center text-sm uppercase tracking-widest bg-emerald-900/30 py-4 px-2 rounded-xl border border-emerald-500/20">👉 Saves time • Reduces code • Improves logic</p>
           </div>
        </div>
      </section>

      {/* ── Section 3: Types of Loops ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 right-0 p-10 opacity-5 hidden lg:block"><Layers size={250} className="text-teal-500"/></div>
            
            <SectionHeader icon={Terminal} title="3. Types of Loops in JavaScript" subtitle="The 5 main iteration structures." color="text-teal-500" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 mt-10 w-full">
               {/* for loop */}
               <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-200 dark:border-blue-500/20 shadow-sm transition-transform hover:-translate-y-1">
                  <h4 className="font-black text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2 text-xl"><span className="text-2xl">🔵</span> for Loop</h4>
                  <p className="text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">👉 Used when number of iterations is known.</p>
                  <CodeBlock code={`for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`} />
               </div>

               {/* while loop */}
               <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-3xl border border-emerald-200 dark:border-emerald-500/20 shadow-sm transition-transform hover:-translate-y-1">
                  <h4 className="font-black text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2 text-xl"><span className="text-2xl">🟢</span> while Loop</h4>
                  <p className="text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">👉 Used when condition is dynamic/unknown.</p>
                  <CodeBlock code={`let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}`} />
               </div>

               {/* do while loop */}
               <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-3xl border border-amber-200 dark:border-amber-500/20 shadow-sm transition-transform hover:-translate-y-1">
                  <h4 className="font-black text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2 text-xl"><span className="text-2xl">🟡</span> do...while Loop</h4>
                  <p className="text-amber-800 dark:text-amber-300 text-sm font-medium mb-4">👉 Runs at least once guaranteed.</p>
                  <CodeBlock code={`let i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 5);`} />
               </div>

               {/* for of loop */}
               <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-3xl border border-purple-200 dark:border-purple-500/20 shadow-sm transition-transform hover:-translate-y-1">
                  <h4 className="font-black text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2 text-xl"><span className="text-2xl">🟣</span> for...of Loop</h4>
                  <p className="text-purple-800 dark:text-purple-300 text-sm font-medium mb-4">👉 Loop directly through actual <span className="font-bold underline">values</span> (arrays).</p>
                  <CodeBlock code={`let arr = [10, 20];\nfor (let val of arr) {\n  console.log(val);\n}`} />
               </div>

               {/* for in loop */}
               <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-3xl border border-orange-200 dark:border-orange-500/20 shadow-sm transition-transform hover:-translate-y-1">
                  <h4 className="font-black text-orange-600 dark:text-orange-400 mb-2 flex items-center gap-2 text-xl"><span className="text-2xl">🟠</span> for...in Loop</h4>
                  <p className="text-orange-800 dark:text-orange-300 text-sm font-medium mb-4">👉 Loop through object <span className="font-bold underline">keys/properties</span>.</p>
                  <CodeBlock code={`let obj = { a: 1, b: 2 };\nfor (let key in obj) {\n  console.log(key);\n}`} />
               </div>

               {/* ── Section 4: Comparison Table ── */}
               <div className="bg-[#18181b] p-6 rounded-3xl border border-gray-700 shadow-sm flex flex-col justify-center min-h-[250px]">
                  <h4 className="font-black text-white mb-4 flex items-center gap-2"><Scale size={18} className="text-teal-400"/> 4. Loop Comparison</h4>
                  <div className="overflow-x-auto w-full">
                     <table className="w-full text-left text-xs text-gray-300">
                        <thead className="bg-gray-800 text-gray-400 uppercase tracking-widest text-[10px]">
                           <tr>
                              <th className="p-2 border-b border-gray-700">Loop</th>
                              <th className="p-2 border-b border-gray-700">Best For</th>
                              <th className="p-2 border-b border-gray-700">Feature</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800 font-medium whitespace-nowrap">
                           <tr><td className="p-2 text-white font-bold">for</td><td className="p-2 text-teal-400">Known count</td><td className="p-2 text-gray-400">Compact</td></tr>
                           <tr><td className="p-2 text-white font-bold">while</td><td className="p-2 text-teal-400">Unknown count</td><td className="p-2 text-gray-400">Flexible</td></tr>
                           <tr><td className="p-2 text-white font-bold">do..while</td><td className="p-2 text-teal-400">Run ≥ 1 time</td><td className="p-2 text-gray-400">Post-check</td></tr>
                           <tr><td className="p-2 text-purple-400 font-bold font-mono text-[11px]">for..of</td><td className="p-2 text-purple-300">Arrays (Values)</td><td className="p-2 text-gray-400">Values</td></tr>
                           <tr><td className="p-2 text-orange-400 font-bold font-mono text-[11px]">for..in</td><td className="p-2 text-orange-300">Objects (Keys)</td><td className="p-2 text-gray-400">Keys</td></tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5: Break & Continue ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 border bg-[#fafafa] dark:bg-[#121212] p-10 md:p-14 rounded-[4rem] shadow-2xl">
            <SectionHeader icon={AlertOctagon} title="5. Loop Control Statements" subtitle="Controlling the flow from within." color="text-rose-500" />
            
            <div className="grid md:grid-cols-2 gap-8 mt-10">
               <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-3xl border border-rose-200 dark:border-rose-500/20">
                  <h4 className="font-black text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2 text-xl"><span className="bg-rose-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">🔴</span> break</h4>
                  <p className="text-rose-700 dark:text-rose-300 font-medium mb-6 text-sm">👉 Stops loop completely</p>
                  <CodeBlock code={`for (let i = 1; i <= 5; i++) {\n    if (i === 3) break;\n    console.log(i);\n}`} />
               </div>

               <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-200 dark:border-blue-500/20">
                  <h4 className="font-black text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2 text-xl"><span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">🔵</span> continue</h4>
                  <p className="text-blue-700 dark:text-blue-300 font-medium mb-6 text-sm">👉 Skips current iteration</p>
                  <CodeBlock code={`for (let i = 1; i <= 5; i++) {\n    if (i === 3) continue;\n    console.log(i);\n}`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6, 7, 8: Nested, Real-World, Patterns ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8">
         <div className="bg-gradient-to-br from-violet-900/20 to-[#0b1411] border border-violet-500/20 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col justify-between">
             <div className="absolute top-0 right-0 p-8 opacity-5"><Layers size={150} className="text-violet-500"/></div>
             <div className="relative z-10 w-full">
                <SectionHeader icon={Layers} title="6. Nested Loops" subtitle="(Important)." color="text-violet-400" />
                <CodeBlock code={`for (let i = 1; i <= 2; i++) {\n  for (let j = 1; j <= 2; j++) {\n    console.log(i, j);\n  }\n}`} />
             </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl flex flex-col justify-between overflow-hidden">
             <div className="w-full">
                <SectionHeader icon={Package} title="7. Real-World" subtitle="Looping through arrays." color="text-indigo-500" />
                <CodeBlock code={`let users = ["Karthick", "Ravi"];\n\nfor (let user of users) {\n    console.log(user);\n}`} />
             </div>
         </div>

         <div className="bg-[#0b1411] p-8 border border-emerald-500/20 rounded-[2.5rem] shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="w-full">
               <SectionHeader icon={Aperture} title="8. Common Patterns" color="text-emerald-400" />
               <div className="space-y-4">
                   <div className="bg-emerald-900/30 p-3 rounded-xl border border-emerald-500/20 w-full">
                      <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2 text-sm"><Calculator size={14}/> Sum Numbers</h4>
                      <CodeBlock code={`let sum = 0;\nfor(let i=1; i<=5; i++) sum+=i;`} language="javascript" />
                   </div>
                   <div className="bg-amber-900/30 p-3 rounded-xl border border-amber-500/20 w-full">
                      <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2 text-sm"><Star size={14}/> Pattern Print</h4>
                      <CodeBlock code={`for(let i=1; i<=3; i++)\n  console.log("*".repeat(i));`} language="javascript" />
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          ENDLESS POSSIBILITIES
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-emerald-500/10 decoration-2">
          "Loops unlock the power of scale in programming. Whether it's 5 items or 5 million items, the loop logic elegantly handles the workload precisely the exact same way."
        </p>
      </footer>

    </div>
  );
};

export default JsLoops;