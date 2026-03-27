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
  Sigma
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-blue-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsMathRef: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#04080e] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Calculator size={14} className="fill-current" /> NUMBER MANIPULATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Math <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-500 drop-shadow-2xl">
            Reference
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The built-in powerhouse for calculations. Master <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight">mathematical constants</span>, rounding algorithms, and random number generation.
        </p>
      </header>

      {/* ── Section 1 & 2: What is Math & Structure ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-500 w-max border border-blue-100 dark:border-blue-500/20 shadow-lg">
                 <Calculator size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is JS Math?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 The <code className="text-blue-500 font-bold bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded">Math</code> object is a built-in object that provides mathematical constants and functions safely across environments.
                 </p>
                 <div className="bg-amber-50 dark:bg-amber-500/5 p-5 rounded-2xl border border-amber-200 dark:border-amber-500/20 text-sm">
                    <p className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-2 mb-2">
                       <AlertTriangle size={16}/> Essential Rule:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       Math is <strong>not</strong> a constructor. You cannot use <code className="bg-white dark:bg-black/30 px-1 rounded mx-1 line-through text-amber-600">new Math()</code>. You directly access its properties globally!
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b101c] p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Database size={150} className="text-blue-500"/></div>
               <SectionHeader icon={Terminal} title="2. Object Structure" subtitle="Properties vs Methods." color="text-blue-400" />
               <div className="relative z-10 w-full space-y-4">
                  <div className="bg-indigo-950/30 border border-indigo-500/20 p-5 rounded-2xl flex items-center gap-4">
                      <div className="bg-indigo-500 text-white p-2 rounded-lg font-bold"><Hash size={20}/></div>
                      <div>
                         <code className="text-indigo-300 font-bold block mb-1">Math.property</code>
                         <span className="text-xs text-gray-400 uppercase tracking-widest font-black">Constants (Variables)</span>
                      </div>
                  </div>
                  <div className="bg-sky-950/30 border border-sky-500/20 p-5 rounded-2xl flex items-center gap-4">
                      <div className="bg-sky-500 text-white p-2 rounded-lg font-bold"><FunctionSquare size={20}/></div>
                      <div>
                         <code className="text-sky-300 font-bold block mb-1">Math.method()</code>
                         <span className="text-xs text-gray-400 uppercase tracking-widest font-black">Functions (Algorithms)</span>
                      </div>
                  </div>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Constants Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 hidden lg:block"><Sigma size={250} className="text-indigo-500"/></div>
            
            <SectionHeader icon={Sigma} title="3. Math Constants" subtitle="Immutable mathematical values." color="text-indigo-500" />
            
            <div className="overflow-x-auto w-full mt-10 relative z-10">
               <table className="w-full text-left text-sm">
                  <thead>
                     <tr className="bg-indigo-50 dark:bg-indigo-900/20">
                        <th className="p-4 rounded-tl-xl font-black text-indigo-700 dark:text-indigo-400 uppercase tracking-widest border-b border-indigo-100 dark:border-indigo-800">Property</th>
                        <th className="p-4 font-black text-gray-500 uppercase tracking-widest border-b border-indigo-100 dark:border-indigo-800 border-l text-center">Description</th>
                        <th className="p-4 rounded-tr-xl font-black text-gray-500 uppercase tracking-widest border-b border-indigo-100 dark:border-indigo-800 border-l text-center">Example Value</th>
                     </tr>
                  </thead>
                  <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-b-xl shadow-sm block w-full table-row-group">
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-bold text-gray-900 dark:text-white border-l border-gray-100 dark:border-gray-800 font-mono text-indigo-500 text-xs">Math.PI</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 text-center">Value of π</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 border-r text-center font-mono">3.14159</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-bold text-gray-900 dark:text-white border-l border-gray-100 dark:border-gray-800 font-mono text-indigo-500 text-xs">Math.E</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 text-center">Euler's number</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 border-r text-center font-mono">2.718</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-bold text-gray-900 dark:text-white border-l border-gray-100 dark:border-gray-800 font-mono text-indigo-500 text-xs">Math.SQRT2</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 text-center">Square root of 2</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 border-r text-center font-mono">1.414</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-bold text-gray-900 dark:text-white border-l border-gray-100 dark:border-gray-800 font-mono text-indigo-500 text-xs">Math.SQRT1_2</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 text-center">Square root of 1/2</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 border-r text-center font-mono">0.707</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-bold text-gray-900 dark:text-white border-l border-gray-100 dark:border-gray-800 font-mono text-indigo-500 text-xs">Math.LN2 / Math.LN10</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 text-center">Natural Log (base e)</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 border-r text-center font-mono">0.693 / 2.302</td>
                     </tr>
                  </tbody>
               </table>
               
               <div className="mt-8 grid md:grid-cols-2 gap-8">
                  <CodeBlock code={`console.log(Math.PI);\nconsole.log(Math.SQRT2);`} />
                  <div className="bg-black/80 p-5 rounded-2xl border border-gray-700 h-full flex flex-col justify-center">
                     <p className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">Output</p>
                     <div className="font-mono text-sm text-gray-300">
                        <div>3.141592653589793</div>
                        <div>1.4142135623730951</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: Most Important Math Methods Grid ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
            <Calculator className="text-blue-500" size={40} /> Top 5 Method Categories
            </h2>
         </div>

         {/* 4.1 Rounding */}
         <div className="bg-[#0b101c] border border-blue-500/20 p-10 rounded-[3rem] shadow-xl mb-10 overflow-hidden relative">
             <div className="absolute top-0 right-0 p-10 opacity-5"><Percent size={200} className="text-blue-500"/></div>
             <SectionHeader icon={RefreshCw} title="4.1 Rounding Methods" color="text-blue-400" />
             
             <div className="grid lg:grid-cols-12 gap-8 relative z-10 w-full mt-6">
                <div className="lg:col-span-4 flex flex-col gap-4 font-mono text-sm">
                    <div className="bg-blue-950/40 p-4 rounded-xl border border-blue-500/30 flex justify-between">
                       <span className="font-bold text-blue-300">Math.round()</span>
                       <span className="text-gray-400 text-xs uppercase">Nearest int</span>
                    </div>
                    <div className="bg-blue-950/40 p-4 rounded-xl border border-blue-500/30 flex justify-between">
                       <span className="font-bold text-blue-300">Math.ceil()</span>
                       <span className="text-gray-400 text-xs uppercase">Round UP</span>
                    </div>
                    <div className="bg-blue-950/40 p-4 rounded-xl border border-blue-500/30 flex justify-between">
                       <span className="font-bold text-blue-300">Math.floor()</span>
                       <span className="text-gray-400 text-xs uppercase">Round DOWN</span>
                    </div>
                    <div className="bg-blue-950/40 p-4 rounded-xl border border-blue-500/30 flex justify-between">
                       <span className="font-bold text-blue-300">Math.trunc()</span>
                       <span className="text-gray-400 text-xs uppercase">Remove decimal</span>
                    </div>
                </div>
                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6 bg-black/40 p-6 rounded-3xl border border-blue-500/10">
                   <div>
                       <CodeBlock code={`let num = 4.7;\nconsole.log(Math.round(num)); // 5\nconsole.log(Math.ceil(num));  // 5\nconsole.log(Math.floor(num)); // 4\nconsole.log(Math.trunc(num)); // 4`} language="javascript" />
                   </div>
                   <div className="flex flex-col justify-center">
                       <h5 className="font-black text-white text-sm uppercase tracking-widest text-center mb-4">🎯 Visualization (4.7)</h5>
                       <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm px-4 py-2 bg-gray-800/50 rounded-lg">
                             <span className="text-gray-400 font-mono">ceil() ↑</span><span className="font-bold text-blue-400">5</span>
                          </div>
                          <div className="flex items-center justify-between text-sm px-4 py-2 bg-gray-800/50 rounded-lg border border-blue-500/30">
                             <span className="text-blue-300 font-mono">round() ~</span><span className="font-bold text-blue-400">5</span>
                          </div>
                          <div className="flex items-center justify-between text-sm px-4 py-2 bg-gray-800/50 rounded-lg border-l-2 border-amber-500">
                             <span className="text-gray-400 font-mono">floor() ↓</span><span className="font-bold text-amber-400">4</span>
                          </div>
                          <div className="flex items-center justify-between text-sm px-4 py-2 bg-gray-800/50 rounded-lg border-l-2 border-rose-500">
                             <span className="text-gray-400 font-mono">trunc() ✂</span><span className="font-bold text-rose-400">4</span>
                          </div>
                       </div>
                   </div>
                </div>
             </div>
         </div>

         {/* 4.2 - 4.4 Grid */}
         <div className="grid md:grid-cols-3 gap-8 mb-10">
             {/* Power & Root */}
             <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col">
                 <h4 className="font-black text-rose-500 flex items-center gap-2 text-xl mb-6"><Zap size={22}/> 4.2 Power / Root</h4>
                 <div className="space-y-2 font-mono text-sm text-gray-500 border-l-2 border-rose-200 dark:border-rose-900 pl-4 mb-6 flex-1">
                     <div>Math.pow(x,y) <span className="text-xs ml-1 bg-gray-100 dark:bg-gray-900 px-1 rounded font-sans">x to power y</span></div>
                     <div>Math.sqrt(x) <span className="text-xs ml-1 bg-gray-100 dark:bg-gray-900 px-1 rounded font-sans">Sq root</span></div>
                     <div>Math.cbrt(x) <span className="text-xs ml-1 bg-gray-100 dark:bg-gray-900 px-1 rounded font-sans">Cube root</span></div>
                 </div>
                 <CodeBlock code={`console.log(Math.pow(2, 3)); // 8\nconsole.log(Math.sqrt(16));  // 4\nconsole.log(Math.cbrt(27));  // 3`} />
             </div>

             {/* Abs & Sign */}
             <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col">
                 <h4 className="font-black text-emerald-500 flex items-center gap-2 text-xl mb-6"><ArrowRight size={22}/> 4.3 Abs & Sign</h4>
                 <div className="space-y-2 font-mono text-sm text-gray-500 border-l-2 border-emerald-200 dark:border-emerald-900 pl-4 mb-6 flex-1">
                     <div>Math.abs(x) <span className="text-xs ml-1 bg-gray-100 dark:bg-gray-900 px-1 rounded font-sans">Absolute (+)</span></div>
                     <div>Math.sign(x) <span className="text-xs ml-1 bg-gray-100 dark:bg-gray-900 px-1 rounded font-sans">-1, 0, or 1</span></div>
                 </div>
                 <CodeBlock code={`console.log(Math.abs(-10));  // 10\nconsole.log(Math.sign(-5)); // -1`} />
             </div>

             {/* Min & Max */}
             <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col">
                 <h4 className="font-black text-amber-500 flex items-center gap-2 text-xl mb-6"><ChevronRight size={22}/> 4.4 Min & Max</h4>
                 <div className="space-y-2 font-mono text-sm text-gray-500 border-l-2 border-amber-200 dark:border-amber-900 pl-4 mb-6 flex-1">
                     <div>Math.min(...) <span className="text-xs ml-1 bg-gray-100 dark:bg-gray-900 px-1 rounded font-sans">Smallest</span></div>
                     <div>Math.max(...) <span className="text-xs ml-1 bg-gray-100 dark:bg-gray-900 px-1 rounded font-sans">Largest</span></div>
                 </div>
                 <CodeBlock code={`console.log(Math.min(1, 5)); // 1\nconsole.log(Math.max(1, 5)); // 5`} />
             </div>
         </div>

         {/* 4.5 Random */}
         <div className="bg-gradient-to-br from-indigo-900/40 to-[#0b101c] border border-indigo-500/20 p-10 rounded-[3rem] shadow-xl overflow-hidden relative">
             <div className="absolute right-[-2%] bottom-[-10%] opacity-10"><Dices size={250} className="text-white"/></div>
             <SectionHeader icon={Dices} title="4.5 Random Numbers" subtitle="Generating unpredictability." color="text-indigo-400" />
             
             <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                   <h4 className="font-black text-indigo-300 flex items-center gap-2 mb-4"><span className="text-lg">🎲</span> Math.random()</h4>
                   <p className="text-sm font-medium text-gray-400 mb-4">Generates a random float between <code className="font-bold text-white">0</code> (inclusive) and <code className="font-bold text-white">1</code> (exclusive).</p>
                   <CodeBlock code={`console.log(Math.random());\n// e.g. 0.8123984129`} />
                </div>
                
                <div className="bg-indigo-600/30 border border-indigo-400/50 p-6 rounded-3xl shadow-inner">
                   <h4 className="font-black text-white flex items-center gap-2 mb-4"><span className="text-lg">🎯</span> Custom Range Random</h4>
                   <p className="text-sm font-medium text-indigo-200 mb-4">Multiply the random return logic by Max, wrap in <code className="font-bold bg-black/40 px-1 rounded-sm">Math.floor()</code>, and add Min offset.</p>
                   <CodeBlock code={`// Random Int between 1 and 10\nlet random = Math.floor(Math.random() * 10) + 1;\nconsole.log(random);`} />
                </div>
             </div>
         </div>
      </section>

      {/* ── Section 5 & 6: Real-World Example & Best Practices ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Terminal} title="5. Mini Project" subtitle="Random Dice Roller" color="text-teal-500" />
            <div className="mt-4 w-full">
                <CodeBlock code={`function rollDice() {\n  return Math.floor(Math.random() * 6) + 1;\n}\n\nconsole.log("Rolled:", rollDice());`} />
                <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 p-4 rounded-xl font-mono text-teal-600 dark:text-teal-400 font-bold text-center mt-4">
                   Output Example: "You rolled: 4"
                </div>
            </div>
         </div>

         <div className="lg:col-span-7 bg-[#0f0c18] border border-fuchsia-500/20 p-10 md:p-12 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Star} title="6. Best Practices" subtitle="(From 15+ Yrs Exp)" color="text-fuchsia-400" />
            
            <div className="space-y-6 mt-8 font-medium">
               <div className="bg-black/30 p-5 rounded-2xl border border-emerald-500/20">
                  <h4 className="font-black text-emerald-400 text-lg flex items-center gap-2 mb-2"><CheckCircle size={18}/> Always Use Math.floor() for Random</h4>
                  <p className="text-gray-400 text-sm mb-2">Avoid using `Math.round()` for arrays/randoms as it skews un-evenly.</p>
                  <code className="text-emerald-300 font-mono text-sm bg-emerald-950/50 p-1 rounded inline-block">Math.floor(Math.random() * n)</code>
               </div>
               
               <div className="bg-black/30 p-5 rounded-2xl border border-sky-500/20">
                  <h4 className="font-black text-sky-400 text-lg flex items-center gap-2 mb-2"><CheckCircle size={18}/> Avoid Math.pow() in Modern JS</h4>
                  <p className="text-gray-400 text-sm mb-2">Use the ES6 exponent operator <code>**</code> as it is cleaner and mathematically standards-compliant.</p>
                  <code className="text-sky-300 font-mono text-sm bg-sky-950/50 p-1 rounded inline-block mt-1">2 ** 3  // Much better than Math.pow(2,3)</code>
               </div>
               
               <div className="bg-black/30 p-5 rounded-2xl border border-amber-500/20">
                  <h4 className="font-black text-amber-400 text-lg flex items-center gap-2 mb-2"><CheckCircle size={18}/> Handle Edge Cases</h4>
                  <p className="text-gray-400 text-sm mb-2">Math functions silently fail into <code>NaN</code>. Always sanitize numerical inputs!</p>
                  <code className="text-amber-300 font-mono text-sm bg-amber-950/50 p-1 rounded inline-block">Math.sqrt(-1); // NaN → validate input!</code>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA COMPUTATION
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-blue-500/10 decoration-2">
          "The Math object abstracts away the complexities of calculus, geometry, and random generation. Master these methods to handle data processing and spatial logic natively."
        </p>
      </footer>

    </div>
  );
};

export default JsMathRef;