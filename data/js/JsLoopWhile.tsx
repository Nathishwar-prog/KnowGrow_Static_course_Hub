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
  ListOrdered,
  Timer
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-green-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsLoopWhile: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#070f07] min-h-screen font-sans selection:bg-green-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-green-600 dark:text-green-400 text-[10px] font-black mb-8 border border-green-100 dark:border-green-900/50 shadow-xl shadow-green-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Activity size={14} className="fill-current" /> DYNAMIC ITERATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          while <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 drop-shadow-2xl">
            Loop
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The flexible loop. Execute code endlessly <span className="text-gray-900 dark:text-white font-bold underline decoration-green-500 underline-offset-4 tracking-tight">as long as</span> a specific condition remains true.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Syntax ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-green-50 dark:bg-green-500/10 rounded-2xl text-green-500 w-max border border-green-100 dark:border-green-500/20 shadow-lg">
                 <RotateCcw size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is a while Loop?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 The <code className="text-green-500 font-bold bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded">while</code> loop is used to repeat a block of code <span className="font-bold text-green-500">as long as</span> a condition is true.
                 </p>
                 <div className="bg-emerald-50 dark:bg-emerald-500/5 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-500/20">
                    <p className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-2">
                       <Lightbulb size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       while loop = <span className="font-bold text-emerald-600 dark:text-emerald-400">repeat until condition becomes false</span>
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b1411] p-10 rounded-[3rem] border border-green-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-5 p-6"><Settings size={150} className="text-green-500"/></div>
               <SectionHeader icon={Terminal} title="2. Syntax" subtitle="The blueprint." color="text-green-400" />
               <div className="relative z-10">
                  <CodeBlock code={`while (condition) {\n    // code to execute\n}`} />
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3, 4, 5: How Works, Example, Flow ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-10 md:p-12 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
             <SectionHeader icon={List} title="3. How It Works" subtitle="(Step-by-Step)" color="text-green-500" />
             <div className="space-y-4">
                 <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center shrink-0">1</div>
                    <p className="font-medium text-gray-700 dark:text-gray-300"><span className="font-bold text-emerald-600 dark:text-emerald-400">Check</span> → is condition true?</p>
                 </div>
                 <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="w-8 h-8 rounded-full bg-teal-500 text-white font-black flex items-center justify-center shrink-0">2</div>
                    <p className="font-medium text-gray-700 dark:text-gray-300"><span className="font-bold text-teal-600 dark:text-teal-400">Execute</span> → run code</p>
                 </div>
                 <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="w-8 h-8 rounded-full bg-cyan-500 text-white font-black flex items-center justify-center shrink-0">3</div>
                    <p className="font-medium text-gray-700 dark:text-gray-300"><span className="font-bold text-cyan-600 dark:text-cyan-400">Repeat</span> → go back to step 1</p>
                 </div>
                 <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="w-8 h-8 rounded-full bg-rose-500 text-white font-black flex items-center justify-center shrink-0">4</div>
                    <p className="font-medium text-gray-700 dark:text-gray-300"><span className="font-bold text-rose-600 dark:text-rose-400">Stop</span> → when condition is false</p>
                 </div>
             </div>
         </div>

         <div className="lg:col-span-7 bg-[#070f07] border border-green-500/20 p-10 md:p-12 rounded-[3rem] shadow-xl flex flex-col justify-between">
            <div>
               <SectionHeader icon={PlayCircle} title="4. Simple Example" subtitle="Printing 1 to 5." color="text-green-400" />
               <CodeBlock code={`let i = 1;\n\nwhile (i <= 5) {\n    console.log(i);\n    i++;\n}`} />
               <div className="mt-8 bg-black/40 border border-green-500/10 p-6 rounded-2xl flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                     <p className="font-mono text-sm uppercase tracking-widest text-gray-500 mb-4">Output Log</p>
                     <div className="font-mono text-green-400 space-y-1">
                        <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
                     </div>
                  </div>
                  <div className="flex-[2]">
                     <p className="font-mono text-sm uppercase tracking-widest text-green-500 mb-4 flex items-center gap-2"><ArrowDownToLine size={14}/> 5. Visual Flow</p>
                     <div className="font-mono text-sm text-gray-400 space-y-2">
                        <div className="flex items-center gap-2"><div className="w-10 text-green-400">i=1</div> → check <span className="text-green-500">(true)</span> → print → <span className="text-sky-400">i++</span></div>
                        <div className="flex items-center gap-2"><div className="w-10 text-green-400">i=2</div> → check <span className="text-green-500">(true)</span> → print → <span className="text-sky-400">i++</span></div>
                        <div>...</div>
                        <div className="flex items-center gap-2 bg-rose-500/10 p-2 rounded -mx-2"><div className="w-10 text-rose-400">i=6</div> → check <span className="text-rose-500">(false)</span> → <span className="text-rose-400 font-bold">STOP</span></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6 & 7: Real-World Example & Infinite Loop ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
             <SectionHeader icon={LogIn} title="6. Real-World Example" subtitle="Login attempts system." color="text-teal-500" />
             <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">👉 Executing logic based on progressive attempt tracking:</p>
             <CodeBlock code={`let attempts = 0;\n\nwhile (attempts < 3) {\n    console.log("Trying login...");\n    attempts++;\n}`} />
             <div className="mt-4 bg-teal-50 dark:bg-teal-900/10 p-4 rounded-xl border border-teal-100 dark:border-teal-500/20 text-center font-mono text-teal-700 dark:text-teal-400 text-sm font-bold">
                 Runs up to exactly 3 times before locking out.
             </div>
         </div>

         <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-500/20 p-10 rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-10 opacity-5"><AlertOctagon size={250} className="text-rose-500"/></div>
             <div className="relative z-10 w-full">
                 <SectionHeader icon={AlertTriangle} title="7. Infinite Loop" subtitle="⚠️ Important Warning" color="text-rose-500" />
                 <CodeBlock code={`while (true) {\n    console.log("Infinite loop!");\n}`} />
                 <div className="mt-6 bg-rose-500/10 p-5 rounded-2xl border border-rose-500/30 font-bold text-rose-700 dark:text-rose-400 text-center text-lg shadow-inner">
                    👉 This never stops ❌ (Browser Crash)
                 </div>
                 <p className="text-sm font-medium text-rose-800 dark:text-rose-300 mt-4 text-center">
                    Always ensure your `<span className="font-mono bg-rose-200 dark:bg-rose-950 px-1 rounded">while</span>` condition has a way to eventually evaluate to <code>false</code>!
                 </p>
             </div>
         </div>
      </section>

      {/* ── Section 8: Break & Continue ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 border bg-[#fafafa] dark:bg-[#121212] p-10 md:p-14 rounded-[4rem] shadow-2xl">
            <SectionHeader icon={Settings} title="8. Using break and continue" subtitle="Controlling flow dynamically." color="text-amber-500" />
            
            <div className="grid md:grid-cols-2 gap-8 mt-10">
               <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-3xl border border-rose-200 dark:border-rose-500/20">
                  <h4 className="font-black text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2 text-xl"><span className="bg-rose-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">🔴</span> break</h4>
                  <CodeBlock code={`let i = 1;\n\nwhile (i <= 5) {\n    if (i === 3) break;\n    console.log(i);\n    i++;\n}`} />
                  <p className="text-rose-700 dark:text-rose-300 font-medium mt-4 text-sm bg-white dark:bg-black p-3 rounded-xl border border-rose-100 dark:border-rose-900/30">👉 Prevents further loops. Stops exactly at 3.</p>
               </div>

               <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-200 dark:border-blue-500/20">
                  <h4 className="font-black text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2 text-xl"><span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">🔵</span> continue</h4>
                  <CodeBlock code={`let i = 1;\n\nwhile (i <= 5) {\n    i++;\n    if (i === 3) continue;\n    console.log(i);\n}`} />
                  <p className="text-blue-700 dark:text-blue-300 font-medium mt-4 text-sm bg-white dark:bg-black p-3 rounded-xl border border-blue-100 dark:border-blue-900/30">👉 Skips to next cycle. Excludes 3 from prints.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9: while vs for ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Scale} title="9. while vs for" subtitle="Which loop to pick?" color="text-indigo-500" />
            
            <table className="w-full text-left text-sm mt-6">
               <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                     <th className="p-6 font-black text-indigo-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 w-1/3">Feature</th>
                     <th className="p-6 font-black text-green-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">while</th>
                     <th className="p-6 font-black text-emerald-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">for</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Use case</td>
                     <td className="p-6 border-l text-center text-green-600 dark:text-green-400 font-bold bg-green-50/50 dark:bg-green-900/10">Unknown iterations</td>
                     <td className="p-6 border-l text-center text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-900/10">Known iterations</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Structure</td>
                     <td className="p-6 border-l text-center text-gray-600 dark:text-gray-400">Flexible</td>
                     <td className="p-6 border-l text-center text-gray-600 dark:text-gray-400">Compact</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>

      {/* ── Section 10 & 11: Advanced & Patterns ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-[#0b1411] border border-green-500/20 p-10 rounded-[3rem] shadow-xl">
             <SectionHeader icon={Layers} title="10. Advanced Example" subtitle="Conditional accumulation." color="text-green-400" />
             <div className="mt-8">
                <p className="font-bold text-emerald-400 mb-3 flex items-center gap-2"><Calculator size={16}/> Sum until condition:</p>
                <CodeBlock code={`let sum = 0;\nlet i = 1;\n\nwhile (i <= 5) {\n    sum += i;\n    i++;\n}\n\nconsole.log(sum); // 15`} />
             </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
             <SectionHeader icon={Aperture} title="11. Common Patterns" color="text-teal-500" />
             <div className="space-y-6 mt-8">
                 <div>
                    <h4 className="font-bold text-teal-600 dark:text-teal-400 mb-3 flex items-center gap-2"><Timer size={16}/> Countdown</h4>
                    <CodeBlock code={`let i = 5;\n\nwhile (i > 0) {\n    console.log(i);\n    i--;\n}`} />
                 </div>
                 <div className="bg-gray-50 dark:bg-black/30 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h4 className="font-bold text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-2"><Lock size={16}/> User Input Loop (Pseudo logic)</h4>
                    <CodeBlock code={`while (userInput !== "exit") {\n    // keep asking input\n}`} language="javascript" />
                 </div>
             </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          TILL FALSE DO US PART
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-green-500/10 decoration-2">
          "The while loop is the king of dynamic scenarios. Use it when the number of cycles isn't mathematically clear, but the stop condition is absolute."
        </p>
      </footer>

    </div>
  );
};

export default JsLoopWhile;