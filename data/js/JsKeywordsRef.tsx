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
  BookOpen
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

const JsKeywordsRef: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-rose-600 dark:text-rose-400 text-[10px] font-black mb-8 border border-rose-100 dark:border-rose-900/50 shadow-xl shadow-rose-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <BookOpen size={14} className="fill-current" /> DICTIONARY OF CODE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-violet-500 drop-shadow-2xl">
            Keywords
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The reserved language of the browser. Understand the <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500 underline-offset-4 tracking-tight">special words</span> that give JavaScript its meaning and functionality.
        </p>
      </header>

      {/* ── Section 1 & 2: What are Keywords ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-rose-50 dark:bg-rose-500/10 rounded-2xl text-rose-500 w-max border border-rose-100 dark:border-rose-500/20 shadow-lg">
                 <Terminal size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are JS Keywords?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 Keywords are <span className="font-bold text-rose-500">reserved words</span> in JavaScript that have special built-in meaning.
                 </p>
                 <div className="bg-violet-50 dark:bg-violet-500/5 p-5 rounded-2xl border border-violet-200 dark:border-violet-500/20">
                    <p className="font-bold text-violet-700 dark:text-violet-400 flex items-center gap-2 mb-2">
                       <AlertTriangle size={18}/> Important Rule:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       You <span className="text-rose-500 font-bold">cannot</span> use them as variable names or function names, because they are actively used by the language itself to function!
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#180f24] p-10 rounded-[3rem] border border-violet-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Layers size={150} className="text-violet-500"/></div>
               <SectionHeader icon={List} title="2. Types of Keywords" subtitle="Organized groups." color="text-violet-400" />
               <p className="text-gray-300 font-medium mb-6 relative z-10">
                  JavaScript has dozens of keywords. Rather than one giant list, let's break them down logically into learning-friendly categories:
               </p>
               <div className="grid grid-cols-2 gap-3 relative z-10 text-sm font-bold text-violet-300">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2"><Box size={16}/> Variables</div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2"><GitBranch size={16}/> Control Flow</div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2"><Repeat size={16}/> Loops</div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2"><FunctionSquare size={16}/> Functions</div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2"><BoxSelect size={16}/> Objects</div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2"><AlertOctagon size={16}/> Errors</div>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Variables ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 border border-amber-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Box} title="3. Variable Keywords" color="text-amber-500" />
            <div className="flex gap-4 font-mono text-xl font-black text-amber-500 mb-6">
               <span className="bg-amber-50 dark:bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-200 dark:border-amber-500/20">var</span>
               <span className="bg-amber-50 dark:bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-200 dark:border-amber-500/20">let</span>
               <span className="bg-amber-50 dark:bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-200 dark:border-amber-500/20">const</span>
            </div>
            <CodeBlock code={`let name = "Karthick";\nconst PI = 3.14;`} />
            <div className="mt-6 bg-[#180f24] p-5 rounded-2xl border border-amber-500/20 shadow-inner flex items-center gap-4">
               <Info size={24} className="text-amber-400 shrink-0"/>
               <p className="text-gray-300 font-medium">👉 Modern JS: Prefer <code className="text-amber-400">let</code> & <code className="text-amber-400">const</code> — Avoid <code className="text-rose-400">var</code>.</p>
            </div>
         </div>
      </section>

      {/* ── Sections 4 & 5: Control Flow & Loops ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-blue-900/20 to-[#180f24] border border-blue-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={GitBranch} title="4. Control Flow" color="text-blue-400" />
            <div className="flex flex-wrap gap-2 font-mono text-sm font-bold text-blue-400 mb-6">
               <span className="bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">if</span>
               <span className="bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">else</span>
               <span className="bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">switch</span>
               <span className="bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">case</span>
               <span className="bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">default</span>
            </div>
            <CodeBlock code={`if (age > 18) {\n    console.log("Adult");\n} else {\n    console.log("Minor");\n}`} />
         </div>

         <div className="bg-gradient-to-br from-emerald-900/20 to-[#180f24] border border-emerald-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Repeat} title="5. Loop Keywords" color="text-emerald-400" />
            <div className="flex flex-wrap gap-2 font-mono text-sm font-bold text-emerald-400 mb-6">
               <span className="bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">for</span>
               <span className="bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">while</span>
               <span className="bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">do</span>
               <span className="bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">break</span>
               <span className="bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">continue</span>
            </div>
            <CodeBlock code={`for (let i = 0; i < 3; i++) {\n    console.log(i);\n}`} />
         </div>
      </section>

      {/* ── Sections 6 & 7: Functions & Objects ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={FunctionSquare} title="6. Function Keywords" color="text-fuchsia-500" />
            <div className="flex flex-wrap gap-2 font-mono text-sm font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-6">
               <span className="bg-fuchsia-50 dark:bg-fuchsia-500/10 px-3 py-1.5 rounded-lg border border-fuchsia-200 dark:border-fuchsia-500/20">function</span>
               <span className="bg-fuchsia-50 dark:bg-fuchsia-500/10 px-3 py-1.5 rounded-lg border border-fuchsia-200 dark:border-fuchsia-500/20">return</span>
            </div>
            <CodeBlock code={`function add(a, b) {\n    return a + b;\n}`} />
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={BoxSelect} title="7. Object & Class" color="text-sky-500" />
            <div className="flex flex-wrap gap-2 font-mono text-sm font-bold text-sky-600 dark:text-sky-400 mb-6">
               <span className="bg-sky-50 dark:bg-sky-500/10 px-3 py-1.5 rounded-lg border border-sky-200 dark:border-sky-500/20">class</span>
               <span className="bg-sky-50 dark:bg-sky-500/10 px-3 py-1.5 rounded-lg border border-sky-200 dark:border-sky-500/20">constructor</span>
               <span className="bg-sky-50 dark:bg-sky-500/10 px-3 py-1.5 rounded-lg border border-sky-200 dark:border-sky-500/20">this</span>
               <span className="bg-sky-50 dark:bg-sky-500/10 px-3 py-1.5 rounded-lg border border-sky-200 dark:border-sky-500/20">new</span>
            </div>
            <CodeBlock code={`class Person {\n    constructor(name) {\n        this.name = name;\n    }\n}`} />
         </div>
      </section>

      {/* ── Sections 8 & 9: Errors & Async ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-rose-900/20 to-[#180f24] border border-rose-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={AlertOctagon} title="8. Error Handling" color="text-rose-400" />
            <div className="flex flex-wrap gap-2 font-mono text-sm font-bold text-rose-400 mb-6">
               <span className="bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20">try</span>
               <span className="bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20">catch</span>
               <span className="bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20">finally</span>
               <span className="bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20">throw</span>
            </div>
            <CodeBlock code={`try {\n    throw "Error!";\n} catch (e) {\n    console.log(e);\n}`} />
         </div>

         <div className="bg-gradient-to-br from-violet-900/20 to-[#180f24] border border-violet-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Clock} title="9. Async (Modern JS)" color="text-violet-400" />
            <div className="flex flex-wrap gap-2 font-mono text-sm font-bold text-violet-400 mb-6">
               <span className="bg-violet-500/10 px-3 py-1.5 rounded-lg border border-violet-500/20">async</span>
               <span className="bg-violet-500/10 px-3 py-1.5 rounded-lg border border-violet-500/20">await</span>
               <span className="bg-violet-500/10 px-3 py-1.5 rounded-lg border border-violet-500/20">Promise</span>
            </div>
            <CodeBlock code={`async function fetchData() {\n    let data = await fetch("url");\n}`} />
         </div>
      </section>

      {/* ── Section 10 & 11: Other & List ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={MoreHorizontal} title="10. Other" color="text-gray-500" />
            <div className="flex flex-col gap-3 font-mono text-sm font-bold text-gray-600 dark:text-gray-300">
               <span className="bg-gray-100 dark:bg-gray-900 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700">typeof</span>
               <span className="bg-gray-100 dark:bg-gray-900 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700">instanceof</span>
               <span className="bg-gray-100 dark:bg-gray-900 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700">delete</span>
               <span className="bg-gray-100 dark:bg-gray-900 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700">in</span>
               <span className="bg-gray-100 dark:bg-gray-900 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700">of</span>
            </div>
         </div>

         <div className="lg:col-span-8 bg-[#180f24] p-10 border border-rose-500/20 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Database} title="11. Complete Keywords List" color="text-rose-400" />
            
            <div className="font-mono text-sm md:text-base leading-loose text-gray-300 bg-black/30 p-8 rounded-2xl border border-white/5 space-y-4">
               <div><span className="text-amber-400">var</span>, <span className="text-amber-400">let</span>, <span className="text-amber-400">const</span></div>
               <div><span className="text-blue-400">if</span>, <span className="text-blue-400">else</span>, <span className="text-blue-400">switch</span>, <span className="text-blue-400">case</span>, <span className="text-blue-400">default</span></div>
               <div><span className="text-emerald-400">for</span>, <span className="text-emerald-400">while</span>, <span className="text-emerald-400">do</span>, <span className="text-emerald-400">break</span>, <span className="text-emerald-400">continue</span></div>
               <div><span className="text-fuchsia-400">function</span>, <span className="text-fuchsia-400">return</span></div>
               <div><span className="text-sky-400">class</span>, <span className="text-sky-400">new</span>, <span className="text-sky-400">this</span>, <span className="text-sky-400">constructor</span></div>
               <div><span className="text-rose-400">try</span>, <span className="text-rose-400">catch</span>, <span className="text-rose-400">finally</span>, <span className="text-rose-400">throw</span></div>
               <div><span className="text-violet-400">async</span>, <span className="text-violet-400">await</span></div>
               <div><span className="text-gray-400">typeof</span>, <span className="text-gray-400">instanceof</span>, <span className="text-gray-400">delete</span>, <span className="text-gray-400">in</span>, <span className="text-gray-400">of</span></div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          VOCABULARY MASTERED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-rose-500/10 decoration-2">
          "Like grammar in spoken language, JavaScript keywords dictate the structure, flow, and exact methodology of your software."
        </p>
      </footer>

    </div>
  );
};

export default JsKeywordsRef;