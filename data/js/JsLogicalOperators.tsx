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
  Power
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-amber-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsLogicalOperators: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0a0a05] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <GitBranch size={14} className="fill-current" /> CONDITIONAL LOGIC
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Logical <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-sky-500 drop-shadow-2xl">
            Operators
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Combine, manipulate, and evaluate conditions using <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500 underline-offset-4 tracking-tight">boolean logic</span> to control application flow.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Types ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-amber-50 dark:bg-amber-500/10 rounded-2xl text-amber-500 w-max border border-amber-100 dark:border-amber-500/20 shadow-lg">
                 <Cpu size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are Logical Operators?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 Logical operators are used to <span className="font-bold text-amber-500">combine or manipulate</span> conditions in JavaScript.
                 </p>
                 <div className="bg-sky-50 dark:bg-sky-500/5 p-5 rounded-2xl border border-sky-200 dark:border-sky-500/20">
                    <p className="font-bold text-sky-700 dark:text-sky-400 flex items-center gap-2 mb-2">
                       <Info size={18}/> They return:
                    </p>
                    <ul className="text-gray-700 dark:text-gray-300 font-medium space-y-2 pl-2">
                       <li className="flex items-center gap-2"><CheckCircle size={14} className="text-sky-500"/> <code className="text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-1 rounded">true</code> or <code className="text-red-500 bg-red-50 dark:bg-red-900/30 px-1 rounded">false</code> (in conditional statements)</li>
                       <li className="flex items-center gap-2"><CheckCircle size={14} className="text-sky-500"/> OR <span className="text-indigo-500 font-bold bg-indigo-50 dark:bg-indigo-900/30 px-1 rounded">actual values</span> (in variable assignments/expressions)</li>
                    </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#141005] p-10 rounded-[3rem] border border-amber-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-5 p-6"><ToggleRight size={150} className="text-amber-500"/></div>
               <SectionHeader icon={List} title="2. Types of Operators" subtitle="The big three." color="text-amber-400" />
               
               <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                     <span className="font-black text-sky-400 tracking-widest uppercase">AND</span>
                     <span className="text-gray-400 font-medium text-sm">Logical AND</span>
                     <span className="font-mono text-2xl font-black text-sky-400 bg-sky-500/10 px-3 py-1 rounded shadow-inner">&&</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                     <span className="font-black text-amber-400 tracking-widest uppercase">OR</span>
                     <span className="text-gray-400 font-medium text-sm">Logical OR</span>
                     <span className="font-mono text-xl font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded shadow-inner">||</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                     <span className="font-black text-rose-400 tracking-widest uppercase">NOT</span>
                     <span className="text-gray-400 font-medium text-sm">Logical NOT</span>
                     <span className="font-mono text-2xl font-black text-rose-400 bg-rose-500/10 px-3 py-1 rounded shadow-inner">!</span>
                  </div>
               </div>
           </div>
        </div>
      </section>

      {/* ── Sections 3, 4, 5: AND, OR, NOT Details ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8">
         {/* AND BLOCK */}
         <div className="bg-gradient-to-br from-sky-900/20 to-gray-900 p-8 border border-sky-500/20 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-4">
               <span className="bg-sky-500/20 text-sky-400 p-2 rounded-xl">&&</span> AND
            </h3>
            <p className="text-sky-300 font-medium text-sm mb-6 bg-sky-950/50 p-3 rounded-lg border border-sky-500/10">👉 Returns true only if <span className="font-bold underline decoration-sky-500">BOTH</span> conditions are true.</p>
            <div className="mb-6 flex-1 text-center bg-gray-950 rounded-xl p-4 border border-gray-800 relative z-10 overflow-hidden">
               <table className="w-full text-sm font-mono text-gray-300">
                  <thead className="text-sky-500 bg-gray-900">
                     <tr><th className="py-2">A</th><th className="py-2">B</th><th className="py-2 bg-sky-950/30">A && B</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                     <tr><td className="py-2">T</td><td className="py-2">T</td><td className="py-2 bg-emerald-950/30 text-emerald-400 font-bold">T</td></tr>
                     <tr><td className="py-2">T</td><td className="py-2">F</td><td className="py-2 bg-rose-950/30 text-rose-400 font-bold">F</td></tr>
                     <tr><td className="py-2">F</td><td className="py-2">T</td><td className="py-2 bg-rose-950/30 text-rose-400 font-bold">F</td></tr>
                     <tr><td className="py-2">F</td><td className="py-2">F</td><td className="py-2 bg-rose-950/30 text-rose-400 font-bold">F</td></tr>
                  </tbody>
               </table>
            </div>
            <CodeBlock code={`let age = 20;\nlet hasID = true;\n\nif (age >= 18 && hasID) {\n    ... // Entry allowed\n}`} />
         </div>

         {/* OR BLOCK */}
         <div className="bg-gradient-to-br from-amber-900/20 to-gray-900 p-8 border border-amber-500/20 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-4">
               <span className="bg-amber-500/20 text-amber-400 p-2 rounded-xl">||</span> OR
            </h3>
            <p className="text-amber-300 font-medium text-sm mb-6 bg-amber-950/50 p-3 rounded-lg border border-amber-500/10">👉 Returns true if <span className="font-bold underline decoration-amber-500">ANY</span> one condition is true.</p>
            <div className="mb-6 flex-1 text-center bg-gray-950 rounded-xl p-4 border border-gray-800 relative z-10 overflow-hidden">
               <table className="w-full text-sm font-mono text-gray-300">
                  <thead className="text-amber-500 bg-gray-900">
                     <tr><th className="py-2">A</th><th className="py-2">B</th><th className="py-2 bg-amber-950/30">A || B</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                     <tr><td className="py-2">T</td><td className="py-2">T</td><td className="py-2 bg-emerald-950/30 text-emerald-400 font-bold">T</td></tr>
                     <tr><td className="py-2">T</td><td className="py-2">F</td><td className="py-2 bg-emerald-950/30 text-emerald-400 font-bold">T</td></tr>
                     <tr><td className="py-2">F</td><td className="py-2">T</td><td className="py-2 bg-emerald-950/30 text-emerald-400 font-bold">T</td></tr>
                     <tr><td className="py-2">F</td><td className="py-2">F</td><td className="py-2 bg-rose-950/30 text-rose-400 font-bold">F</td></tr>
                  </tbody>
               </table>
            </div>
            <CodeBlock code={`let isAdmin = false;\nlet isEditor = true;\n\nif (isAdmin || isEditor) {\n    ... // Access granted\n}`} />
         </div>

         {/* NOT BLOCK */}
         <div className="bg-gradient-to-br from-rose-900/20 to-gray-900 p-8 border border-rose-500/20 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-4">
               <span className="bg-rose-500/20 text-rose-400 p-2 rounded-xl">!</span> NOT
            </h3>
            <p className="text-rose-300 font-medium text-sm mb-6 bg-rose-950/50 p-3 rounded-lg border border-rose-500/10">👉 <span className="font-bold underline decoration-rose-500">Reverses</span> the boolean value.</p>
            <div className="mb-6 flex-1 flex items-center justify-center bg-gray-950 rounded-xl p-4 border border-gray-800 relative z-10 overflow-hidden">
               <table className="w-full text-sm font-mono text-gray-300 text-center">
                  <thead className="text-rose-500 bg-gray-900">
                     <tr><th className="py-2">A</th><th className="py-2 bg-rose-950/30">!A</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                     <tr><td className="py-2">T</td><td className="py-2 bg-rose-950/30 text-rose-400 font-bold">F</td></tr>
                     <tr><td className="py-2">F</td><td className="py-2 bg-emerald-950/30 text-emerald-400 font-bold">T</td></tr>
                  </tbody>
               </table>
            </div>
            <CodeBlock code={`let isLoggedIn = false;\n\nif (!isLoggedIn) {\n    ... // Please login\n}`} />
         </div>
      </section>

      {/* ── Section 6: Short-Circuit ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 border-2 border-orange-500 p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Zap size={250} className="text-orange-500"/></div>
            
            <SectionHeader icon={Zap} title="6. Short-Circuit Evaluation" subtitle="(VERY IMPORTANT behavior)." color="text-orange-500" />
            
            <p className="text-gray-900 dark:text-white font-bold text-xl mb-8 relative z-10">
               👉 JavaScript <span className="text-orange-500 underline underline-offset-4 decoration-4">stops evaluating early</span> if the result is already determined.
            </p>

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
               {/* AND */}
               <div className="bg-sky-50 dark:bg-sky-900/10 p-6 rounded-2xl border border-sky-200 dark:border-sky-500/20">
                  <h4 className="font-black text-sky-600 dark:text-sky-400 mb-4 flex items-center gap-2"><span className="bg-sky-500/20 px-2 rounded">&&</span> AND</h4>
                  <CodeBlock code={`false && console.log("Hi");`} />
                  <p className="text-sky-700 dark:text-sky-300 text-sm font-medium bg-sky-100 dark:bg-sky-900/40 p-3 rounded-xl border border-sky-200 dark:border-sky-500/30 shadow-inner">
                     👉 <strong className="text-sky-800 dark:text-sky-200">Output: Nothing.</strong> Stop early because <code className="text-sm bg-black/10 px-1 rounded">false && anything</code> is always false.
                  </p>
               </div>

               {/* OR */}
               <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-200 dark:border-amber-500/20">
                  <h4 className="font-black text-amber-600 dark:text-amber-400 mb-4 flex items-center gap-2"><span className="bg-amber-500/20 px-2 rounded">||</span> OR</h4>
                  <CodeBlock code={`true || console.log("Hi");`} />
                  <p className="text-amber-700 dark:text-amber-300 text-sm font-medium bg-amber-100 dark:bg-amber-900/40 p-3 rounded-xl border border-amber-200 dark:border-amber-500/30 shadow-inner">
                     👉 <strong className="text-amber-800 dark:text-amber-200">Output: Nothing.</strong> Stop early because <code className="text-sm bg-black/10 px-1 rounded">true || anything</code> is always true.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7 & 8: Return Values & Truthy/Falsy ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-[#141005] p-10 border border-amber-500/20 rounded-[3rem] shadow-xl">
            <SectionHeader icon={BoxSelect} title="7. Actual Return Values" subtitle="Not just booleans!" color="text-amber-400" />
            <CodeBlock code={`console.log(0 || "Hello");   // "Hello"\nconsole.log("JS" && 100);    // 100`} />
            
            <div className="mt-8 space-y-4 font-medium text-gray-300">
               <div className="flex bg-amber-900/20 p-4 rounded-xl border border-amber-500/10 items-start gap-4">
                  <span className="font-mono text-xl font-black text-amber-400 bg-amber-500/20 px-3 py-1 rounded">||</span>
                  <p className="pt-1">Returns the <strong className="text-amber-400">first truthy value</strong>. If all are falsy, returns the last falsy value.</p>
               </div>
               <div className="flex bg-sky-900/20 p-4 rounded-xl border border-sky-500/10 items-start gap-4">
                  <span className="font-mono text-xl font-black text-sky-400 bg-sky-500/20 px-3 py-1 rounded">&&</span>
                  <p className="pt-1">Returns the <strong className="text-sky-400">first falsy value</strong>. If all are truthy, returns the last truthy value.</p>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Activity} title="8. Truthy & Falsy" color="text-indigo-500" />
            
            <div className="space-y-6">
                <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-2xl border border-rose-200 dark:border-rose-500/20">
                    <h4 className="flex items-center gap-2 font-black text-rose-600 dark:text-rose-400 mb-4"><span className="text-xl">❌</span> Falsy Values:</h4>
                    <div className="flex flex-wrap gap-2 font-mono text-sm font-bold text-rose-800 dark:text-rose-300">
                       <span className="bg-white dark:bg-rose-950 px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-800 shadow-sm">false</span>
                       <span className="bg-white dark:bg-rose-950 px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-800 shadow-sm">0</span>
                       <span className="bg-white dark:bg-rose-950 px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-800 shadow-sm">""</span>
                       <span className="bg-white dark:bg-rose-950 px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-800 shadow-sm">null</span>
                       <span className="bg-white dark:bg-rose-950 px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-800 shadow-sm">undefined</span>
                       <span className="bg-white dark:bg-rose-950 px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-800 shadow-sm">NaN</span>
                    </div>
                </div>
                
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-500/20">
                    <h4 className="flex items-center gap-2 font-black text-emerald-600 dark:text-emerald-400 mb-4"><span className="text-xl">✅</span> Truthy Values:</h4>
                    <div className="font-medium text-emerald-800 dark:text-emerald-300 text-lg">
                       👉 <span className="font-bold underline">Everything else</span> in JavaScript!
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* ── Section 9, 10, 11: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8">
         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl flex flex-col justify-between">
            <div>
               <SectionHeader icon={LogIn} title="9. Real-World Logic" color="text-indigo-500" />
               <p className="text-gray-500 font-medium mb-4 text-sm mt-[-10px]">(Login Validation)</p>
               <CodeBlock code={`let u = "admin";\nlet p = "1234";\n\nif (u === "admin" && p === "1234") {\n  console.log("Success");\n}`} />
            </div>
         </div>

         <div className="bg-gradient-to-tr from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-8 border border-amber-200 dark:border-amber-500/20 rounded-[2.5rem] shadow-xl flex flex-col justify-between">
            <div>
               <SectionHeader icon={Package} title="10. Default Values" color="text-orange-500" />
               <p className="text-gray-500 font-medium mb-4 text-sm mt-[-10px]">(Using || fallback)</p>
               <CodeBlock code={`let name = userInput || "Guest";`} />
               <p className="text-sm font-bold text-orange-600 dark:text-orange-400 mt-4 bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  👉 If <code className="font-mono bg-white dark:bg-black p-1 rounded">userInput</code> is empty/falsy, it falls back to <code>"Guest"</code>.
               </p>
            </div>
         </div>

         <div className="bg-gray-900 p-8 border border-gray-800 rounded-[2.5rem] shadow-xl flex flex-col justify-between col-span-1 lg:col-span-1">
            <div>
               <SectionHeader icon={Layers} title="11. Combining" color="text-fuchsia-400" />
               <p className="text-gray-400 font-medium mb-4 text-sm mt-[-10px]">(Complex logic with parentheses)</p>
               <CodeBlock code={`if (age > 18 && \n   (country === "India" || \n    country === "USA")) {\n    console.log("Allowed");\n}`} />
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          CONTROLLED FLOW
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-amber-500/10 decoration-2">
          "Mastering logical operators is the key to writing concise, intelligent, and bug-free code. They are the synapses of your application's brain."
        </p>
      </footer>

    </div>
  );
};

export default JsLogicalOperators;