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
  Timer,
  FolderOpen,
  FileText,
  PlusSquare,
  MinusSquare,
  Trash2,
  Maximize,
  HelpCircle,
  Bookmark,
  ShoppingCart,
  Ghost,
  Trash,
  Dices,
  Percent,
  Sigma,
  Bug,
  Strikethrough,
  XOctagon,
  Code
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 w-full" style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
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

const JsMistakes: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0a0606] min-h-screen font-sans selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-rose-600 dark:text-rose-400 text-[10px] font-black mb-8 border border-rose-100 dark:border-rose-900/50 shadow-xl shadow-rose-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Bug size={14} className="fill-current" /> DEBUGGING TRAPS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-500 to-amber-500 drop-shadow-2xl">
            Mistakes
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          JavaScript's loose typing and implicit conversions create <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500 underline-offset-4 tracking-tight">logical traps</span>. Avoid these beginner and pro pitfalls.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="p-10 bg-white dark:bg-gray-800/80 rounded-[3rem] border border-rose-200 dark:border-rose-500/30 shadow-2xl relative overflow-hidden backdrop-blur-xl">
           <div className="absolute top-0 right-0 p-10 opacity-10"><AlertTriangle size={200} className="text-rose-500"/></div>
           <SectionHeader icon={Info} title="1. What are these Mistakes?" color="text-rose-500" />
           <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6">
               JavaScript mistakes are common errors or unexpected behaviors that primarily occur due to:
           </p>
           <ul className="grid md:grid-cols-3 gap-4 mb-8 relative z-10 w-full">
              <li className="bg-rose-50 dark:bg-rose-900/20 p-4 flex flex-col items-center justify-center text-center rounded-2xl border border-rose-100 dark:border-rose-800">
                 <Link size={24} className="text-rose-500 mb-2"/>
                 <span className="font-bold text-gray-800 dark:text-rose-200">Loose Typing</span>
              </li>
              <li className="bg-amber-50 dark:bg-amber-900/20 p-4 flex flex-col items-center justify-center text-center rounded-2xl border border-amber-100 dark:border-amber-800">
                 <RefreshCw size={24} className="text-amber-500 mb-2"/>
                 <span className="font-bold text-gray-800 dark:text-amber-200">Implicit Conversions</span>
              </li>
              <li className="bg-orange-50 dark:bg-orange-900/20 p-4 flex flex-col items-center justify-center text-center rounded-2xl border border-orange-100 dark:border-orange-800">
                 <Target size={24} className="text-orange-500 mb-2"/>
                 <span className="font-bold text-gray-800 dark:text-orange-200">Developer Assumptions</span>
              </li>
           </ul>
           <div className="bg-gray-100 dark:bg-black/50 p-5 rounded-2xl font-mono text-sm text-center border border-gray-200 dark:border-gray-700">
              👉 These are <strong className="text-rose-500">not always syntax errors</strong> — many are silent logical traps!
           </div>
         </div>
      </section>

      {/* ── Section 2: Top 10 Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
              <AlertOctagon className="text-rose-500" size={40} /> Top 10 Warning Zones
            </h2>
         </div>

         <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* 2.1 = vs === */}
            <div className="bg-[#120a0a] border border-rose-500/20 p-8 rounded-3xl shadow-lg hover:border-rose-500/50 transition-colors flex flex-col w-full h-full">
               <h4 className="font-black text-rose-500 text-xl mb-4">2.1 Using <code>=</code> instead of <code>===</code></h4>
               <div className="flex-1 w-full flex flex-col">
                  <CodeBlock code={`if (x = 5) { // ❌ Assigns, doesn't check\n  console.log("True");\n}`} />
                  <div className="mt-auto">
                     <p className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-1">❌ Problem</p>
                     <p className="text-gray-400 font-medium text-sm mb-4"><code>=</code> represents Assignment. Condition forces `x = 5` and returns true.</p>
                     <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">✅ Fix</p>
                     <p className="text-gray-400 font-medium text-sm">Use strictly equals <code>===</code>.</p>
                  </div>
               </div>
            </div>

            {/* 2.2 Loose vs Strict */}
            <div className="bg-[#120a0a] border border-rose-500/20 p-8 rounded-3xl shadow-lg hover:border-rose-500/50 transition-colors flex flex-col w-full h-full">
               <h4 className="font-black text-rose-500 text-xl mb-4">2.2 Loose vs Strict (== vs ===)</h4>
               <div className="flex-1 w-full flex flex-col">
                  <CodeBlock code={`console.log(5 == "5");  // true 😱\nconsole.log(5 === "5"); // false ✅`} />
                  <div className="mt-auto">
                     <p className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-1">❌ Problem</p>
                     <p className="text-gray-400 font-medium text-sm mb-4"><code>==</code> converts types completely automatically behind the scenes.</p>
                     <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">✅ Fix</p>
                     <p className="text-gray-400 font-medium text-sm">Always use strict equality <code>===</code>.</p>
                  </div>
               </div>
            </div>

            {/* 2.3 Adding Num + String */}
            <div className="bg-[#120a0a] border border-amber-500/20 p-8 rounded-3xl shadow-lg hover:border-amber-500/50 transition-colors flex flex-col w-full h-full">
               <h4 className="font-black text-amber-500 text-xl mb-4">2.3 Adding Numbers & Strings</h4>
               <div className="flex-1 w-full flex flex-col">
                  <CodeBlock code={`let result = 10 + "5";\nconsole.log(result); // "105" 😱`} />
                  <div className="mt-auto">
                     <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">❌ Problem</p>
                     <p className="text-gray-400 font-medium text-sm mb-4">JS automatically converts Number → String upon concatenation attempt.</p>
                     <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">✅ Fix</p>
                     <p className="text-gray-400 font-medium text-sm"><code>10 + Number("5")</code></p>
                  </div>
               </div>
            </div>

            {/* 2.4 Floats */}
            <div className="bg-[#120a0a] border border-amber-500/20 p-8 rounded-3xl shadow-lg hover:border-amber-500/50 transition-colors flex flex-col w-full h-full">
               <h4 className="font-black text-amber-500 text-xl mb-4">2.4 Floating Point Precision</h4>
               <div className="flex-1 w-full flex flex-col">
                  <CodeBlock code={`console.log(0.1 + 0.2); \n// 0.30000000000000004 😨`} />
                  <div className="mt-auto">
                     <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">❌ Problem</p>
                     <p className="text-gray-400 font-medium text-sm mb-4">JS calculates floats via binary standard IEEE-754.</p>
                     <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">✅ Fix</p>
                     <p className="text-gray-400 font-medium text-sm"><code>(0.1 * 10 + 0.2 * 10) / 10</code></p>
                  </div>
               </div>
            </div>

            {/* 2.5 NaN == NaN */}
            <div className="bg-[#120a0a] border border-orange-500/20 p-8 rounded-3xl shadow-lg hover:border-orange-500/50 transition-colors flex flex-col w-full h-full">
               <h4 className="font-black text-orange-500 text-xl mb-4">2.5 NaN Equality Trap</h4>
               <div className="flex-1 w-full flex flex-col">
                  <CodeBlock code={`console.log(NaN === NaN); // false 😱`} />
                  <div className="mt-auto">
                     <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1">❌ Problem</p>
                     <p className="text-gray-400 font-medium text-sm mb-4"><code>NaN</code> (Not a Number) is never equal to anything, including itself.</p>
                     <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">✅ Fix</p>
                     <p className="text-gray-400 font-medium text-sm">Use <code>isNaN(NaN)</code></p>
                  </div>
               </div>
            </div>

            {/* 2.6 undefined vs null */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-lg flex flex-col w-full h-full">
               <h4 className="font-black text-gray-900 dark:text-white text-xl mb-4">2.6 Undefined vs Null</h4>
               <div className="flex-1 w-full flex flex-col justify-center">
                  <div className="bg-gray-50 dark:bg-black/30 p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-sm mb-3">
                     <span className="font-bold text-gray-800 dark:text-white w-24 inline-block">undefined:</span> Variable declared, not assigned.
                  </div>
                  <div className="bg-gray-50 dark:bg-black/30 p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-sm">
                     <span className="font-bold text-gray-800 dark:text-white w-24 inline-block">null:</span> Intentional empty value assigned.
                  </div>
               </div>
            </div>

            {/* 2.7 ASI */}
            <div className="bg-[#120a0a] border border-purple-500/20 p-8 rounded-3xl shadow-lg hover:border-purple-500/50 transition-colors flex flex-col w-full h-full">
               <h4 className="font-black text-purple-500 text-xl mb-4">2.7 Auto Semicolon Insertion</h4>
               <div className="flex-1 w-full flex flex-col">
                  <CodeBlock code={`function test() {\n  return\n  5; // 😱 Returns undefined\n}`} />
                  <div className="mt-auto">
                     <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-1">❌ Problem</p>
                     <p className="text-gray-400 font-medium text-sm mb-4">JS inserts a <code>;</code> after <code>return</code> natively.</p>
                     <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">✅ Fix</p>
                     <p className="text-gray-400 font-medium text-sm"><code>return 5;</code> (Keep return value on sameline)</p>
                  </div>
               </div>
            </div>

            {/* 2.8 Named Array Indexes */}
            <div className="bg-[#120a0a] border border-blue-500/20 p-8 rounded-3xl shadow-lg hover:border-blue-500/50 transition-colors flex flex-col w-full h-full">
               <h4 className="font-black text-blue-500 text-xl mb-4">2.8 Named Arrays</h4>
               <div className="flex-1 w-full flex flex-col">
                  <CodeBlock code={`let arr = [];\narr["name"] = "JS";\n\nconsole.log(arr.length); // 0 😱`} />
                  <div className="mt-auto">
                     <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">❌ Problem</p>
                     <p className="text-gray-400 font-medium text-sm">Array silently transforms into an object-like prototype, destroying standard Array mechanisms.</p>
                  </div>
               </div>
            </div>

            {/* 2.9 Confusing this */}
            <div className="bg-[#120a0a] border border-fuchsia-500/20 p-8 rounded-3xl shadow-lg hover:border-fuchsia-500/50 transition-colors flex flex-col lg:col-span-2 w-full h-full">
               <h4 className="font-black text-fuchsia-500 text-xl mb-4">2.9 Confusing <code>this</code> Context</h4>
               <div className="grid lg:grid-cols-2 gap-8 flex-1 w-full">
                  <CodeBlock code={`const obj = {\n  name: "JS",\n  greet: function() {\n    console.log(this.name);\n  }\n};\n\nconst greet = obj.greet;\ngreet(); // undefined 😱`} />
                  <div className="flex flex-col justify-center">
                     <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 mb-2">❌ Problem</p>
                     <p className="text-gray-400 font-medium text-sm mb-6">Detaching the method from its parent object rips away the context of <code>this</code>.</p>
                     <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">✅ Fix</p>
                     <p className="text-gray-400 font-medium text-sm mb-2">Use <code>.bind()</code>: <code className="bg-gray-800 px-1 rounded block mt-1 py-2 w-max text-white">const g = obj.greet.bind(obj);</code></p>
                  </div>
               </div>
            </div>
            
            {/* 2.10 Let / Const limits */}
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-500/40 p-8 rounded-3xl shadow-lg hover:border-red-500/60 transition-colors flex flex-col lg:col-span-2 w-full h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-5"><Globe size={150} className="text-red-500"/></div>
               <h4 className="font-black text-red-500 text-xl mb-4 relative z-10">2.10 Forgetting <code>var</code>, <code>let</code>, <code>const</code></h4>
               <div className="flex-1 w-full relative z-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 w-full">
                     <CodeBlock code={`x = 10; // global variable 😨`} />
                  </div>
                  <div className="flex-1 w-full">
                     <p className="text-gray-900 dark:text-red-200 font-medium text-lg mb-2">❌ Problem Context</p>
                     <p className="text-gray-700 dark:text-red-300 font-medium text-sm">Forgetting a declaration keyword accidentally scopes the variable to the Global Object (`window` in browser), severely polluting the global scope and causing overriding bugs.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 3: Scenario ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <SectionHeader icon={Code} title="3. Real-Time Bug Scenario" subtitle="Calculating Total Cart Price" color="text-indigo-500" />
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10 w-full mt-10">
               <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-500/30 p-8 rounded-3xl relative">
                  <div className="absolute top-4 right-4 bg-rose-500 text-white rounded-full p-1"><XOctagon size={16}/></div>
                  <h4 className="font-black text-gray-900 dark:text-white mb-4">❌ Wrong Code</h4>
                  <CodeBlock code={`function calculateTotal(p, t) {\n  return p + t;\n}\n\n// Imagine HTML Input is String\nconsole.log(calculateTotal("100", 20));`} language="javascript" />
                  <div className="bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 p-3 rounded-lg font-mono text-center font-bold">
                     Output: "10020" 💀
                  </div>
               </div>

               <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 p-8 rounded-3xl relative">
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white rounded-full p-1"><CheckCircle size={16}/></div>
                  <h4 className="font-black text-gray-900 dark:text-white mb-4">✅ Fixed Code</h4>
                  <CodeBlock code={`function calculateTotal(p, t) {\n  // Cast to number!\n  return Number(p) + t;\n}\n\nconsole.log(calculateTotal("100", 20));`} language="javascript" />
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 p-3 rounded-lg font-mono text-center font-bold">
                     Output: 120 🎉
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: 15yr Best Practices ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-[#0f0c18] border border-amber-500/20 p-10 md:p-14 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Star size={250} className="text-amber-500"/></div>
            <SectionHeader icon={Star} title="4. Pro Architect Best Practices" subtitle="(From 15+ Yrs Exp)" color="text-amber-400" />
            
            <div className="space-y-6 mt-8 font-medium relative z-10 w-full">
               <div className="bg-black/30 p-5 rounded-2xl border border-rose-500/20 flex gap-4">
                  <div className="pt-1"><CheckCircle size={24} className="text-rose-400"/></div>
                  <div className="w-full">
                      <h4 className="font-black text-white text-lg mb-1">Always Use Strict Mode</h4>
                      <CodeBlock code={`"use strict";`} />
                  </div>
               </div>
               
               <div className="bg-black/30 p-5 rounded-2xl border border-emerald-500/20 flex gap-4">
                  <div className="pt-1"><CheckCircle size={24} className="text-emerald-400"/></div>
                  <div className="w-full text-gray-400">
                      <h4 className="font-black text-white text-lg mb-1">Prefer <code className="text-emerald-400">const</code> over <code className="text-gray-500 line-through">let</code></h4>
                      Defaults to data immutability for better tracking.
                  </div>
               </div>
               
               <div className="bg-black/30 p-5 rounded-2xl border border-blue-500/20 flex gap-4">
                  <div className="pt-1"><CheckCircle size={24} className="text-blue-400"/></div>
                  <div className="w-full">
                      <h4 className="font-black text-white text-lg mb-2">Validate Runtime Inputs early</h4>
                      <CodeBlock code={`if(typeof x !== "number") {\n  throw Error("Invalid");\n}`} />
                  </div>
               </div>

               <div className="bg-black/30 p-5 rounded-2xl border border-fuchsia-500/20 flex gap-4 justify-between items-center text-white">
                   <div>
                       <h4 className="font-black text-white text-lg mb-1 flex items-center gap-2"><Settings className="text-fuchsia-400" size={20}/> Use ESLint</h4>
                       <p className="text-sm text-gray-400 font-medium">Linter extensions catch 90% of structural errors automatically.</p>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          BULLETPROOF CODE
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-rose-500/10 decoration-2">
          "The language is forgiving, which makes it incredibly dangerous in production. Write defensively. Test strictly. Treat silent type conversion as a bug."
        </p>
      </footer>

    </div>
  );
};

export default JsMistakes;