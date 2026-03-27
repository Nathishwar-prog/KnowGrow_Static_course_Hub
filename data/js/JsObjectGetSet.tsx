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
  Binary,
  Split,
  Workflow,
  Download,
  Unlock,
  Unplug,
  DoorOpen,
  DoorClosed,
  Shield,
  EyeOff
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
            <span className="ml-2 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">{title}</span>
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-indigo-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsObjectGetSet: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#070914] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Shield size={14} className="fill-current" /> DATA ENCAPSULATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Getters & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-sky-500 drop-shadow-2xl">
            Setters
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master object security. Instead of exposing raw data, build <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-4 tracking-tight">invisible interceptors</span> that automatically validate, compute, and protect your properties when accessed.
        </p>
      </header>

      {/* ── Section 1 & 2: Intro & Benefits ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl text-indigo-500 w-max border border-indigo-100 dark:border-indigo-500/20 shadow-lg">
                 <DoorClosed size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are Get & Set?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   Getters and Setters are special invisible functions layered on top of objects properties. To the outside world, they look like standard properties, but internally they execute code.
                 </p>
                 <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-sky-50 dark:bg-sky-500/5 p-5 rounded-xl border border-sky-200 dark:border-sky-500/20 text-sm">
                       <p className="font-bold text-sky-600 dark:text-sky-400 mb-2 flex items-center gap-1"><Eye size={18}/> Get</p>
                       <p className="text-gray-600 dark:text-gray-400 font-medium">Intercepts attempts to <strong className="text-sky-500">read</strong> a value.</p>
                    </div>
                    <div className="bg-fuchsia-50 dark:bg-fuchsia-500/5 p-5 rounded-xl border border-fuchsia-200 dark:border-fuchsia-500/20 text-sm">
                       <p className="font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2 flex items-center gap-1"><Settings size={18}/> Set</p>
                       <p className="text-gray-600 dark:text-gray-400 font-medium">Intercepts attempts to <strong className="text-fuchsia-500">modify</strong> a value.</p>
                    </div>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b0c16] p-10 rounded-[3rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><ShieldCheck size={150} className="text-indigo-500"/></div>
               <SectionHeader icon={Star} title="2. The Immediate Benefits" subtitle="Why secure data?" color="text-indigo-400" />
               <ul className="space-y-4 font-medium text-gray-300 relative z-10 w-full mt-4">
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Lock size={20} className="text-indigo-400 shrink-0"/> <strong>Encapsulation:</strong> Protect hidden internal data (`_property`)</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><XOctagon size={20} className="text-indigo-400 shrink-0"/> <strong>Data Validation:</strong> Block bad assignments (e.g. `age = -5`)</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Repeat size={20} className="text-indigo-400 shrink-0"/> <strong>Seamless API:</strong> No messy `user.setAge()` calls required</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Calculator size={20} className="text-indigo-400 shrink-0"/> <strong>Computed Values:</strong> Build properties that sync dynamically</li>
               </ul>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Syntax & How It Works ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-1 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5"><Code2 size={200} className="text-indigo-500"/></div>
             
             <SectionHeader icon={Code2} title="3. The Core Syntax" subtitle="Interception via Object Literal" color="text-indigo-500" />
             
             <div className="grid lg:grid-cols-2 gap-12 mt-6 relative z-10 w-full items-start">
                 
                 <div className="w-full">
                     <CodeBlock language="javascript" code={`const user = {\n  firstName: "Karthick",\n  lastName: "Raja",\n\n  // INTERCEPT READING\n  get fullName() {\n    return \`\${this.firstName} \${this.lastName}\`;\n  },\n\n  // INTERCEPT WRITING\n  set fullName(value) {\n    const parts = value.split(" ");\n    this.firstName = parts[0];\n    this.lastName = parts[1];\n  }\n};\n\n// Usage acts like a normal property!\nconsole.log(user.fullName); // Karthick Raja\n\nuser.fullName = "John Doe";\nconsole.log(user.firstName); // John`} />
                 </div>

                 <div className="flex flex-col gap-6">
                     <p className="text-gray-500 dark:text-gray-400 font-medium">When executing, the compiler automatically delegates standard property access to these hidden functions:</p>
                     
                     <div className="bg-sky-50 dark:bg-[#07111b] border border-sky-200 dark:border-sky-900/50 p-6 rounded-2xl shadow-inner relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-6 opacity-10"><Eye size={40} className="text-sky-500"/></div>
                         <code className="text-lg font-black text-gray-900 dark:text-white mb-2 block">user.fullName</code>
                         <p className="text-sky-600 dark:text-sky-400 font-bold uppercase tracking-widest text-xs">→ Automatically calls <span className="bg-sky-100 dark:bg-sky-900/50 px-2 py-1 rounded">get</span></p>
                     </div>
                     
                     <div className="bg-fuchsia-50 dark:bg-[#150613] border border-fuchsia-200 dark:border-fuchsia-900/50 p-6 rounded-2xl shadow-inner relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-6 opacity-10"><Settings size={40} className="text-fuchsia-500"/></div>
                         <code className="text-lg font-black text-gray-900 dark:text-white mb-2 block">user.fullName = "John"</code>
                         <p className="text-fuchsia-600 dark:text-fuchsia-400 font-bold uppercase tracking-widest text-xs">→ Automatically calls <span className="bg-fuchsia-100 dark:bg-fuchsia-900/50 px-2 py-1 rounded">set</span></p>
                     </div>
                 </div>

             </div>
         </div>
      </section>

      {/* ── Section 5: Real World Mini Project ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8 items-center">
         
         <div className="bg-[#0b0c16] p-10 md:p-14 border border-indigo-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            
            <div className="absolute top-0 right-0 p-10 opacity-10"><Banknote size={200} className="text-indigo-500"/></div>
            
            <div className="relative z-10 w-full mb-8">
               <SectionHeader icon={ShieldCheck} title="5. Security Validation" subtitle="Bank Account Balance Checks" color="text-indigo-400" />
               <p className="text-gray-400 font-medium mb-6 leading-relaxed">
                   Here we use <code className="text-sky-300 bg-sky-900/40 px-1 rounded">_balance</code> to hold the real data (the underscore is a developer convention for "private"). We force all updates through the <code className="text-fuchsia-300 bg-fuchsia-900/40 px-1 rounded">set balance</code> interceptor, which completely blocks negative assignments.
               </p>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 md:p-10 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl flex flex-col relative overflow-hidden h-full">
            <CodeBlock language="javascript" code={`const account = {\n  _balance: 0, // Hidden internal state\n\n  get balance() {\n    return this._balance;\n  },\n\n  // Security Gate\n  set balance(amount) {\n    if (amount < 0) {\n      console.log("Invalid amount ❌");\n    } else {\n      this._balance = amount;\n    }\n  }\n};\n\naccount.balance = 1000;\nconsole.log(account.balance); // 1000\n\naccount.balance = -50; // "Invalid amount ❌"`} />
         </div>
         
      </section>

      {/* ── Section 6: Classes (Modern) ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><Layout size={300} className="text-indigo-500"/></div>
            
            <SectionHeader icon={Box} title="6. Modern Class Syntax" subtitle="Get/Set inside ES6 Classes" color="text-sky-500" />
            
            <div className="grid lg:grid-cols-2 gap-12 mt-10 relative z-10 items-center">
               <div className="w-full relative">
                  <CodeBlock language="javascript" code={`class User {\n  constructor(name) {\n    this._name = name;\n  }\n\n  // Modify read output\n  get name() {\n    return this._name.toUpperCase();\n  }\n\n  // Validate write input\n  set name(value) {\n    if (value.length < 3) {\n      console.log("Name too short ❌");\n    } else {\n      this._name = value;\n    }\n  }\n}\n\nconst user = new User("Karthick");\n\nconsole.log(user.name); // KARTHICK\nuser.name = "Jo";       // "Name too short ❌"`} />
               </div>

               <div className="flex flex-col gap-6">
                   <div className="bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/50 p-8 rounded-3xl text-gray-800 dark:text-sky-100 shadow-sm">
                       <h4 className="font-black text-sky-600 dark:text-sky-400 text-xl mb-4 flex items-center gap-2"><Settings size={20}/> Class Level Interception</h4>
                       <p className="font-medium leading-relaxed">
                           In modern OOP architectures, this is exactly how you handle object states. Instead of exposing raw class variables, you wrap them in getters/setters immediately on creation to prevent your system from accepting poisoned or corrupted state assignments.
                       </p>
                   </div>
               </div>
            </div>

         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA PROTECTION
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-indigo-500/10 decoration-2">
          "Implementing Getters and Setters shifts your objects from being passive data containers into intelligent, self-validating state machines."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectGetSet;