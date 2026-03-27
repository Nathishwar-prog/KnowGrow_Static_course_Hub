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
  CheckCircle
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
            <span className="ml-2 text-[10px] font-black text-orange-400 uppercase tracking-[0.2em]">{title}</span>
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-orange-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsNumberProperties: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0c0805] min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 text-[10px] font-black mb-8 border border-orange-100 dark:border-orange-900/50 shadow-xl shadow-orange-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Scale size={14} className="fill-current" /> SYSTEM CAPABILITIES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Number <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 drop-shadow-2xl">
            Properties
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The mathematical extremes of JavaScript. Discover system memory limits, <span className="text-gray-900 dark:text-white font-bold underline decoration-orange-500 underline-offset-4 tracking-tight">safe calculation boundaries</span>, and built-in error states.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="p-10 bg-white dark:bg-gray-800/80 rounded-[3rem] border border-orange-200 dark:border-orange-500/30 shadow-2xl relative overflow-hidden backdrop-blur-xl">
           <div className="absolute top-0 right-0 p-10 opacity-10"><Database size={200} className="text-orange-500"/></div>
           <SectionHeader icon={Info} title="1. System Number Properties" color="text-orange-500" />
           <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6 relative z-10 w-full">
               Number properties are unchangeable, built-in constants attached securely to the root <code className="text-orange-500 font-bold bg-orange-50 dark:bg-orange-900/30 px-2 py-0.5 rounded">Number</code> object representing:
           </p>
           <ul className="grid sm:grid-cols-3 gap-4 mb-8 relative z-10 w-full">
              <li className="bg-amber-50 dark:bg-amber-900/20 p-4 flex flex-col items-center justify-center text-center rounded-2xl border border-amber-100 dark:border-amber-800">
                 <Maximize size={24} className="text-amber-500 mb-2"/>
                 <span className="font-bold text-gray-800 dark:text-amber-200">System Limits</span>
              </li>
              <li className="bg-orange-50 dark:bg-orange-900/20 p-4 flex flex-col items-center justify-center text-center rounded-2xl border border-orange-100 dark:border-orange-800">
                 <ShieldAlert size={24} className="text-orange-500 mb-2"/>
                 <span className="font-bold text-gray-800 dark:text-orange-200">Safe Boundaries</span>
              </li>
              <li className="bg-yellow-50 dark:bg-yellow-900/20 p-4 flex flex-col items-center justify-center text-center rounded-2xl border border-yellow-100 dark:border-yellow-800">
                 <XOctagon size={24} className="text-yellow-500 mb-2"/>
                 <span className="font-bold text-gray-800 dark:text-yellow-200">Special Errors</span>
              </li>
           </ul>
           <div className="bg-gray-100 dark:bg-black/50 p-5 rounded-2xl font-mono text-sm text-center border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 relative z-10">
              👉 Access these globally strictly via <strong className="text-orange-500">Number.PROPERTY_NAME</strong> (not on individual var instances).
           </div>
         </div>
      </section>

      {/* ── Section 2: Important Number Properties ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
              <Cpu className="text-amber-500" size={40} /> Extreme Constants
            </h2>
         </div>

         <div className="grid lg:grid-cols-2 gap-8 w-full">
            {/* 2.1 Max Value */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-lg flex flex-col w-full">
               <h4 className="font-black text-gray-900 dark:text-white text-xl mb-4 flex items-center gap-2"><Maximize size={20} className="text-orange-500"/> 2.1 MAX_VALUE</h4>
               <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6 flex-1">👉 The absolute largest floating-point number the engine can represent natively.</p>
               <div className="w-full flex flex-col">
                  <CodeBlock code={`console.log(Number.MAX_VALUE);`} />
                  <div className="bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-gray-700 p-4 rounded-xl flex items-center justify-between">
                      <p className="text-[10px] uppercase font-bold text-gray-400">Output</p>
                      <code className="text-orange-500 font-bold text-xs break-all text-right w-3/4">1.7976931348623157e+308</code>
                  </div>
               </div>
            </div>

            {/* 2.2 Min Value */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-lg flex flex-col w-full">
               <h4 className="font-black text-gray-900 dark:text-white text-xl mb-4 flex items-center gap-2"><Minimize size={20} className="text-sky-500"/> 2.2 MIN_VALUE</h4>
               <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6 flex-1">👉 The absolute smallest POSITIVE number (closest to zero, but not zero or negative).</p>
               <div className="w-full flex flex-col">
                  <CodeBlock code={`console.log(Number.MIN_VALUE);`} />
                  <div className="bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-gray-700 p-4 rounded-xl flex items-center justify-between">
                      <p className="text-[10px] uppercase font-bold text-gray-400">Output</p>
                      <code className="text-sky-500 font-bold text-xs">5e-324</code>
                  </div>
               </div>
            </div>

            {/* Inifinity */}
            <div className="bg-[#120a05] border border-amber-500/20 p-8 rounded-3xl shadow-lg flex flex-col w-full hover:border-amber-500/50 transition-colors lg:col-span-2">
               <h4 className="font-black text-amber-500 text-xl mb-4 flex items-center gap-2"><InfinityIcon size={20}/> 2.3 & 2.4 Infinity Boundaries</h4>
               <p className="text-gray-400 text-sm font-medium mb-6">👉 Value returned securely upon exceeding <code className="text-orange-400">MAX_VALUE</code> or dividing by zero.</p>
               
               <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/50 p-5 rounded-xl border border-amber-900/30">
                     <code className="text-xs text-white block mb-2 font-bold font-mono">Number.POSITIVE_INFINITY</code>
                     <p className="text-emerald-400 font-mono text-xs">console.log(1 / 0); // Infinity</p>
                  </div>
                  <div className="bg-black/50 p-5 rounded-xl border border-amber-900/30">
                     <code className="text-xs text-white block mb-2 font-bold font-mono">Number.NEGATIVE_INFINITY</code>
                     <p className="text-rose-400 font-mono text-xs">console.log(-1 / 0); // -Infinity</p>
                  </div>
               </div>
            </div>

            {/* NaN */}
            <div className="bg-rose-50 dark:bg-[#120505] border border-rose-200 dark:border-rose-500/20 p-8 rounded-3xl shadow-lg flex flex-col w-full lg:col-span-2 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><XOctagon size={200}/></div>
               <h4 className="font-black text-rose-600 dark:text-rose-500 text-xl mb-4 flex items-center gap-2"><AlertTriangle size={20}/> 2.5 Number.NaN</h4>
               <p className="text-gray-700 dark:text-gray-400 text-sm font-medium mb-6 relative z-10 w-full max-w-xl">
                   Signifies a <strong>"Not a Number"</strong> execution error. Ironically, its underlying JS type is still technically a "number". It forces failure on bad calculations.
               </p>
               <div className="relative z-10 w-full">
                  <CodeBlock code={`console.log(Number.NaN);\n\n// Bad Math Output Engine:\nconsole.log(0 / 0); // NaN\nconsole.log("Apple" * 5); // NaN`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 3, 4, 6: Safe Integer Range Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col justify-center text-center">
            
            <SectionHeader icon={ShieldCheck} title="3 & 4. Integer Bounds & CPU Precision" subtitle="Very Important Rule" color="text-amber-500" />
            
            <p className="text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto mb-10 leading-relaxed text-left md:text-center">
               Hardware limits prevent 100% precision above a certain point. Beyond the explicit <strong className="text-amber-500">Safe Integer</strong> boundary, basic arithmetic secretly begins failing due to floating point capacity exhaustion.
            </p>

            {/* Warning Visual representation */}
            <div className="w-full bg-gray-50 dark:bg-black/40 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 shadow-inner relative overflow-hidden flex flex-col items-center justify-center">
               
               <h3 className="uppercase tracking-[0.2em] text-xs font-black text-emerald-500 mb-6 flex items-center gap-2"><CheckCircle size={14}/> Safe Engine Zone <CheckCircle size={14}/></h3>
               
               <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 w-full">
                  
                  {/* Left Limit */}
                  <div className="text-center w-full md:w-auto">
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Number.MIN_SAFE_INTEGER</p>
                     <p className="font-mono font-bold text-rose-500 text-lg md:text-xl px-4 py-2 bg-rose-50 dark:bg-rose-950/20 rounded-lg whitespace-nowrap overflow-x-auto">-9007199254740991</p>
                  </div>
                  
                  {/* Arrow Connectors */}
                  <div className="hidden md:flex flex-row items-center gap-1 text-gray-300 dark:text-gray-700 mt-5">
                     <ArrowRightLeft size={30} className="text-emerald-500/50" />
                  </div>
                  <div className="md:hidden flex flex-col items-center text-emerald-500/50 my-2">
                     <svg width="2" height="20" viewBox="0 0 2 20" fill="currentColor">
                        <path d="M1 0v20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                     </svg>
                  </div>

                  {/* Right Limit */}
                  <div className="text-center w-full md:w-auto">
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Number.MAX_SAFE_INTEGER</p>
                     <p className="font-mono font-bold text-emerald-500 text-lg md:text-xl px-4 py-2 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg whitespace-nowrap overflow-x-auto">9007199254740991</p>
                  </div>
               </div>
               
               {/* Precision Failure Example */}
               <div className="mt-8 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 p-4 rounded-xl text-left w-full max-w-xl mx-auto shadow-sm">
                  <p className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest flex items-center gap-2 mb-2"><AlertTriangle size={14}/> The Danger (Precision Lost)</p>
                  <code className="text-gray-800 dark:text-gray-300 text-xs font-mono block mb-1">let x = Number.MAX_SAFE_INTEGER;</code>
                  <code className="text-gray-800 dark:text-gray-300 text-xs font-mono block" dangerouslySetInnerHTML={{ __html: 'console.log(<span class="text-rose-500 font-bold">x + 1 === x + 2</span>); // true 😱' }}></code>
               </div>

            </div>
         </div>
      </section>

      {/* ── Section 5: Real World Mini Project ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8 items-center">
         
         <div className="bg-[#120a05] p-10 md:p-14 border border-amber-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-10 opacity-10"><Banknote size={250} className="text-amber-500"/></div>
            <div className="relative z-10">
               <SectionHeader icon={Banknote} title="5. Mini Project" subtitle="Large Financial Calculation" color="text-amber-500" />
               <p className="text-gray-400 font-medium mb-6">When calculating massive, high-precision Enterprise data (like Banking balances), reaching the 9-quadrillion limit breaks arithmetic. We force the JS Engine back into precision using <code className="text-emerald-400 font-bold">BigInt</code> appended with <code className="text-white">n</code>.</p>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 md:p-10 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl h-full flex flex-col justify-center">
             <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2 flex items-center gap-1"><XOctagon size={14}/> Unsafe Result</p>
                <CodeBlock language="javascript" code={`let amount = 9007199254740991;\nconsole.log(amount + 1); // Fails secretly`} />
             </div>
             <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2 mt-4 flex items-center gap-1"><CheckCircle size={14}/> Secure BigInt Fix</p>
                <CodeBlock language="javascript" code={`// Notice the "n" appended suffix \nlet big = 9007199254740991n;\nconsole.log(big + 1n);`} />
             </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          ARCHITECTURAL LIMITS
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-orange-500/10 decoration-2">
          "JavaScript Number Properties aren't functions to execute. They are the fixed boundaries of the engine's memory. Respecting the Safe Integer limit is required to prevent catastrophic mathematical failures."
        </p>
      </footer>

    </div>
  );
};

export default JsNumberProperties;