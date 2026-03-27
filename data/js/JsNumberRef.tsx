import React, { useState } from 'react';
import {
  Check,
  Copy,
  Terminal,
  Settings,
  Scale,
  Maximize,
  Minimize,
  Infinity as InfinityIcon,
  XOctagon,
  ShieldAlert,
  ShieldCheck,
  DollarSign,
  ArrowRightLeft,
  Banknote,
  AlertTriangle,
  Info,
  Layers,
  Code2,
  Box,
  Layout,
  Database,
  Globe,
  Activity,
  Package,
  RefreshCw,
  Eye,
  Target,
  CloudLightning,
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
  ChevronRight,
  Calculator,
  Aperture,
  Lightbulb,
  PlayCircle,
  Shuffle,
  Star,
  Key,
  KeyRound,
  ListOrdered,
  Timer,
  FolderOpen,
  FileText,
  PlusSquare,
  MinusSquare,
  Trash2,
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
  Code,
  CheckCircle,
  PieChart,
  Binary
} from 'lucide-react';

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
            <span className="ml-2 text-[10px] font-black text-fuchsia-400 uppercase tracking-[0.2em]">{title}</span>
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 w-full" style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-fuchsia-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsNumberRef: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0c0512] min-h-screen font-sans selection:bg-fuchsia-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] font-black mb-8 border border-fuchsia-100 dark:border-fuchsia-900/50 shadow-xl shadow-fuchsia-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <BookOpen size={14} className="fill-current" /> ALL-IN-ONE CHEATSHEET
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Number <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-500 drop-shadow-2xl">
            Reference
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          A complete structural overview of the JavaScript Number API. Quickly locate <span className="text-gray-900 dark:text-white font-bold underline decoration-fuchsia-500 underline-offset-4 tracking-tight">properties, methods, and global functions</span> to handle math effectively.
        </p>
      </header>

      {/* ── Section 1 & 2: Intro & Overview ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl group-hover:bg-fuchsia-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-fuchsia-50 dark:bg-fuchsia-500/10 rounded-2xl text-fuchsia-500 w-max border border-fuchsia-100 dark:border-fuchsia-500/20 shadow-lg">
                 <List size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is this Cheatsheet?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 The JavaScript Number reference is a condensed, rapid-access encyclopedia of the entire mathematical typing system.
                 </p>
                 <div className="bg-pink-50 dark:bg-pink-500/5 p-5 rounded-2xl border border-pink-200 dark:border-pink-500/20 text-sm">
                    <p className="font-bold text-pink-700 dark:text-pink-400 flex items-center gap-2 mb-2">
                       <CheckCircle size={16}/> It specifically targets:
                    </p>
                    <ul className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed list-disc list-inside">
                       <li>Number Boundaries (Properties)</li>
                       <li>Instance Manipulators (Methods)</li>
                       <li>Global Environment Parsers</li>
                    </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#120510] p-10 rounded-[3rem] border border-fuchsia-500/20 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Hash size={150} className="text-fuchsia-500"/></div>
               <SectionHeader icon={Info} title="2. Number Overview" subtitle="A single unified type." color="text-fuchsia-400" />
               
               <div className="relative z-10 w-full mt-4">
                  <CodeBlock code={`let x = 10;          // Number\nlet y = 10.5;        // Decimal (Still Number)\nlet z = "100";       // String (NOT a Number)`} />
                  
                  <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl flex items-start gap-4 mt-6">
                     <AlertTriangle size={24} className="text-amber-500 shrink-0"/>
                     <div className="text-sm font-medium text-amber-200 leading-relaxed">
                        <strong className="block text-amber-500 mb-1">Critical Principle:</strong>
                        Unlike other languages (C++, Java, C#) that separate <code>int</code>, <code>float</code>, and <code>double</code>, JavaScript has <strong>exactly one standard number type</strong> (excluding the modern BigInt module).
                     </div>
                  </div>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Number Properties Reference Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><Settings size={300} className="text-fuchsia-500"/></div>
            
            <SectionHeader icon={Settings} title="3. Properties (Limits & Boundaries)" subtitle="Accessed via Number.Property" color="text-indigo-500" />
            
            <div className="overflow-x-auto relative z-10 w-full mt-10">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900/50 border-b-2 border-gray-200 dark:border-gray-700">
                        <th className="p-5 font-black text-gray-900 dark:text-white uppercase tracking-widest text-xs">Constant Property</th>
                        <th className="p-5 font-black text-gray-900 dark:text-white uppercase tracking-widest text-xs">Description</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                        <td className="p-5 font-mono font-bold text-indigo-600 dark:text-indigo-400">Number.MAX_VALUE</td>
                        <td className="p-5">The absolute largest floating-point number.</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                        <td className="p-5 font-mono font-bold text-indigo-600 dark:text-indigo-400">Number.MIN_VALUE</td>
                        <td className="p-5">The absolute smallest positive number (&gt; 0).</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                        <td className="p-5 font-mono font-bold text-indigo-600 dark:text-indigo-400">Number.MAX_SAFE_INTEGER</td>
                        <td className="p-5">Maximum integer bound <strong>without losing hardware precision</strong>.</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                        <td className="p-5 font-mono font-bold text-indigo-600 dark:text-indigo-400">Number.MIN_SAFE_INTEGER</td>
                        <td className="p-5">Minimum safe integer bound.</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                        <td className="p-5 font-mono font-bold text-rose-500">Number.POSITIVE_INFINITY</td>
                        <td className="p-5">Symbolic infinity return (Ex: <code>1 / 0</code>).</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                        <td className="p-5 font-mono font-bold text-rose-500">Number.NEGATIVE_INFINITY</td>
                        <td className="p-5">-Infinity.</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                        <td className="p-5 font-mono font-bold text-red-600 dark:text-red-500">Number.NaN</td>
                        <td className="p-5">Global error state representing <strong className="text-white">Not a Number</strong>.</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 4: Number Methods Table ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8 items-start">
         <div className="bg-[#120510] border border-fuchsia-500/20 p-10 rounded-[3rem] shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 p-10"><Terminal size={200} className="text-fuchsia-500"/></div>
            <SectionHeader icon={Terminal} title="4. Instance Methods" subtitle="Used directly on variable values." color="text-fuchsia-400" />
            
            <div className="relative z-10 w-full mt-4 bg-black/40 rounded-2xl border border-gray-800 overflow-hidden">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-900 border-b border-gray-700">
                        <th className="p-4 font-black text-white uppercase tracking-widest text-[10px]">Method</th>
                        <th className="p-4 font-black text-white uppercase tracking-widest text-[10px]">Description</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-xs font-medium text-gray-300">
                     <tr>
                        <td className="p-4 font-mono font-bold text-amber-400">toString()</td>
                        <td className="p-4">Convert the number to a string format natively.</td>
                     </tr>
                     <tr>
                        <td className="p-4 font-mono font-bold text-emerald-400">toFixed(n)</td>
                        <td className="p-4">Rounds perfectly to the set <code>n</code> decimal places.</td>
                     </tr>
                     <tr>
                        <td className="p-4 font-mono font-bold text-sky-400">toPrecision(n)</td>
                        <td className="p-4">Formats the specific string size to total exactly <code>n</code> digits.</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            
            <div className="relative z-10 w-full mt-6">
                <CodeBlock title="Formatting In Action" code={`let num = 5.6789;\n\nconsole.log(num.toString());     // "5.6789"\nconsole.log(num.toFixed(2));     // "5.68"\nconsole.log(num.toPrecision(3)); // "5.68"`} />
            </div>
         </div>

         {/* ── Section 6: Special Values ── */}
         <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-10 rounded-[3rem] shadow-xl flex flex-col h-full relative overflow-hidden">
             <div className="absolute right-0 top-0 opacity-5 p-10"><AlertOctagon size={200} className="text-rose-500"/></div>
             <SectionHeader icon={AlertTriangle} title="6. Special Math States" subtitle="Error outcomes." color="text-rose-500" />
             
             <div className="space-y-6 mt-4 relative z-10 flex-1 flex flex-col justify-center">
                 <div className="bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-700 p-5 rounded-2xl">
                     <p className="font-bold text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2"><XOctagon size={16}/> NaN (Execution Fail)</p>
                     <CodeBlock code={`console.log("abc" / 2); // NaN`} />
                 </div>
                 <div className="bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-700 p-5 rounded-2xl">
                     <p className="font-bold text-amber-600 dark:text-amber-500 mb-2 flex items-center gap-2"><InfinityIcon size={16}/> Infinity (Boundary Break)</p>
                     <CodeBlock code={`console.log(1 / 0); // Infinity`} />
                 </div>
             </div>
         </div>
      </section>

      {/* ── Section 5: Global Number Functions ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><Globe size={300} className="text-sky-500"/></div>
            
            <SectionHeader icon={Globe} title="5. Global Number Module" subtitle="Top-level functions & type guards." color="text-sky-500" />
            
            <div className="grid lg:grid-cols-5 gap-8 mt-10 relative z-10">
                <div className="lg:col-span-3 overflow-x-auto w-full">
                   <table className="w-full text-left border-collapse">
                      <thead>
                         <tr className="bg-gray-50 dark:bg-gray-900/50 border-b-2 border-gray-200 dark:border-gray-700">
                            <th className="p-4 font-black text-gray-900 dark:text-white uppercase tracking-widest text-[10px]">Method</th>
                            <th className="p-4 font-black text-gray-900 dark:text-white uppercase tracking-widest text-[10px]">Description</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                         <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                            <td className="p-4 font-mono font-bold text-sky-600 dark:text-sky-400">Number()</td>
                            <td className="p-4">Convert a full string entirely into a Number explicitly.</td>
                         </tr>
                         <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                            <td className="p-4 font-mono font-bold text-sky-600 dark:text-sky-400">parseInt()</td>
                            <td className="p-4">Extract the whole integer part from a string.</td>
                         </tr>
                         <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                            <td className="p-4 font-mono font-bold text-sky-600 dark:text-sky-400">parseFloat()</td>
                            <td className="p-4">Extract the float (number + decimal) from a string securely.</td>
                         </tr>
                         <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                            <td className="p-4 font-mono font-bold text-emerald-600 dark:text-emerald-500">isNaN()</td>
                            <td className="p-4">Check globally if output failed math sequence.</td>
                         </tr>
                         <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                            <td className="p-4 font-mono font-bold text-emerald-600 dark:text-emerald-500">Number.isNaN()</td>
                            <td className="p-4">Strict Engine boundary check for native NaN.</td>
                         </tr>
                         <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                            <td className="p-4 font-mono font-bold text-emerald-600 dark:text-emerald-500">Number.isInteger()</td>
                            <td className="p-4">Type check guaranteeing primitive lacks decimals.</td>
                         </tr>
                         <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                            <td className="p-4 font-mono font-bold text-emerald-600 dark:text-emerald-500">Number.isFinite()</td>
                            <td className="p-4">Type check validating number has not blown out Bounds to Infinity.</td>
                         </tr>
                      </tbody>
                   </table>
                </div>

                <div className="lg:col-span-2 flex flex-col justify-center">
                   <div className="bg-sky-50 dark:bg-black/30 border border-sky-100 dark:border-sky-900/50 p-6 rounded-3xl h-full flex flex-col justify-center shadow-inner">
                       <p className="text-xs uppercase font-bold tracking-widest text-sky-600 dark:text-sky-400 mb-4 flex items-center gap-2"><Globe size={14}/> Execution Test</p>
                       <CodeBlock title="Global Parsing" code={`console.log(Number("123"));      // 123
console.log(parseInt("10.5"));   // 10
console.log(parseFloat("10.5")); // 10.5
console.log(Number.isInteger(10)); // true`} />
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Currency Formatter ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#120510] border border-fuchsia-500/20 p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            
            <div className="absolute top-0 left-0 p-10 opacity-10"><Banknote size={250} className="text-fuchsia-500"/></div>
            
            <div className="flex-1 w-full relative z-10">
               <SectionHeader icon={ShoppingCart} title="7. Real-World Logic" subtitle="Building a Currency Formatter" color="text-fuchsia-400" />
               <p className="text-gray-400 font-medium mb-6">A production-ready e-commerce function combining explicit string concatenation with precise `.toFixed(2)` decimal locking.</p>
               <CodeBlock language="javascript" code={`function formatCurrency(amount) {\n  return "₹" + amount.toFixed(2);\n}\n\nconsole.log(formatCurrency(199.9));`} />
            </div>

            <div className="w-full md:w-auto flex justify-center relative z-10">
                <div className="bg-[#240e21] p-8 rounded-3xl border border-fuchsia-400/30 shadow-2xl shadow-fuchsia-500/20 text-center min-w-[200px]">
                   <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-300 mb-4 flex items-center justify-center gap-2"><Terminal size={14}/> Output Render</p>
                   <p className="font-mono text-white font-black text-5xl drop-shadow-lg">₹199.90</p>
                </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA MASTERY
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-fuchsia-500/10 decoration-2">
          "Having a total overview of the Number API transforms volatile text strings into mathematically secure, beautifully formatted Front-End interfaces."
        </p>
      </footer>

    </div>
  );
};

export default JsNumberRef;