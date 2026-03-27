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
  Factory,
  CopyPlus,
  ArrowRight,
  Workflow,
  Rocket
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
            <span className="ml-2 text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">{title}</span>
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

const JsObjectConstructors: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0a0c14] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Factory size={14} className="fill-current" /> BLUEPRINTS & FACTORIES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500 drop-shadow-2xl">
            Constructors
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Stop writing repetitive objects manually. Define a <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight">rigid blueprint</span> to rapidly mass-produce identical data structures using the <code>new</code> keyword.
        </p>
      </header>

      {/* ── Section 1 & 2: Intro & Benefits ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-500 w-max border border-blue-100 dark:border-blue-500/20 shadow-lg">
                 <CopyPlus size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is a Constructor?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   An Object Constructor is a special function used to seamlessly stamp out creating multiple objects sharing the exact same structural signature.
                 </p>
                 <div className="bg-sky-50 dark:bg-sky-500/5 p-5 rounded-2xl border border-sky-200 dark:border-sky-500/20 text-sm">
                    <p className="font-bold text-sky-700 dark:text-sky-400 flex items-center gap-2 mb-2">
                       <Factory size={16}/> Think of it like:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed italic">
                       "A factory that produces identical objects based on a single unified blueprint."
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#050b12] p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Target size={150} className="text-blue-500"/></div>
               <SectionHeader icon={Star} title="2. The Immediate Benefits" subtitle="Why ditch manual objects?" color="text-blue-400" />
               <ul className="space-y-4 font-medium text-gray-300 relative z-10 w-full mt-4">
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><CheckCircle size={18} className="text-blue-400 shrink-0"/> Rapid, highly Reusable object creation</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><CheckCircle size={18} className="text-blue-400 shrink-0"/> Forces clean, purely Scalable code signatures</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><CheckCircle size={18} className="text-blue-400 shrink-0"/> Kills manual variable repetition</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><CheckCircle size={18} className="text-blue-400 shrink-0"/> Makes tracking properties & methods effortless</li>
               </ul>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Syntax & Flow Visualizer ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col h-full relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5"><Code2 size={200} className="text-indigo-500"/></div>
             <SectionHeader icon={Code2} title="3. Constructor Syntax" subtitle="Standard capitalize convention." color="text-indigo-500" />
             
             <div className="flex flex-col justify-center mt-4 relative z-10 w-full">
                 <CodeBlock language="javascript" code={`function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\n// Trigger production using "new"\nconst user1 = new Person("Karthick", 22);\nconst user2 = new Person("Rahul", 25);\n\nconsole.log(user1.name); // Karthick`} />
             </div>
         </div>

         {/* Visual Flowchart */}
         <div className="bg-[#0b0c16] border border-indigo-500/20 p-10 rounded-[3rem] shadow-xl flex flex-col h-full justify-center">
             <SectionHeader icon={Workflow} title="4. How it stamps data" subtitle="Execution sequence" color="text-indigo-400" />
             <div className="w-full flex-1 flex items-center justify-center p-6">
                 <div className="bg-black/50 p-8 rounded-3xl border border-indigo-900/30 w-full flex flex-col items-center gap-6 shadow-inner">
                     <div className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-mono font-bold w-48 text-center shadow-lg border border-indigo-400">
                         Person()
                     </div>
                     <ArrowRight size={24} className="text-indigo-500/50 rotate-90" />
                     <div className="bg-violet-600 text-white px-6 py-2 rounded-xl font-mono font-bold w-48 text-center text-sm shadow-lg border border-violet-400">
                         new
                     </div>
                     <ArrowRight size={24} className="text-violet-500/50 rotate-90" />
                     <div className="bg-gray-800 text-white p-4 rounded-xl border border-gray-600 text-center w-48 text-sm font-mono">
                         <span className="font-bold text-emerald-400 block mb-2 border-b border-gray-700 pb-2">Object Instance</span>
                         <span className="block text-gray-300">├── name</span>
                         <span className="block text-gray-300">└── age</span>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* ── Section 5, 6, 7: Methods -> Prototype Shift ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><Repeat size={300} className="text-rose-500"/></div>
            
            <SectionHeader icon={ShieldAlert} title="5 & 6. The Method Problem" subtitle="Why 'this.method' is dangerous." color="text-rose-500" />
            
            <div className="grid lg:grid-cols-2 gap-12 mt-10 relative z-10 items-center">
               <div className="w-full relative shadow-lg">
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest z-10 border border-rose-300 shadow-md">Wastes Memory</div>
                  <CodeBlock code={`function Person(name, age) {\n  this.name = name;\n  this.age = age;\n\n  // Method inside constructor\n  this.greet = function() {\n    return \`Hi, I'm \${this.name}\`;\n  };\n}\n\nconst user = new Person("Karthick", 22);\nconsole.log(user.greet());`} />
               </div>

               <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 p-8 rounded-3xl h-full flex flex-col justify-center text-rose-800 dark:text-rose-200">
                   <h4 className="font-black text-rose-600 dark:text-rose-400 text-xl mb-4 flex items-center gap-2"><AlertTriangle size={24}/> Memory Leak Warning</h4>
                   <p className="font-medium mb-4 leading-relaxed">
                       Putting a function directly inside the Constructor using <code className="bg-rose-100 dark:bg-rose-900/50 px-1 rounded">this.methodName</code> works, but it's fundamentally flawed for scaling.
                   </p>
                   <ul className="space-y-2 mt-4 font-mono text-sm bg-white/50 dark:bg-black/30 p-4 rounded-xl border border-rose-200 dark:border-rose-800">
                      <li>👉 Every single new object generates its own exact, duplicate copy of the same function.</li>
                      <li>👉 Creating 1,000 users? You just cloned 1,000 identical functions.</li>
                   </ul>
               </div>
            </div>

            {/* The Fix */}
            <div className="mt-16 bg-[#040e08] border border-emerald-500/30 p-10 rounded-[3rem] shadow-inner relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 p-10"><Rocket size={200} className="text-emerald-500"/></div>
                <div className="relative z-10">
                   <h4 className="font-black text-emerald-400 text-2xl mb-8 flex items-center gap-3"><CheckCircle size={30}/> 7. Top-Tier Fix: The Prototype</h4>
                   <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
                       <CodeBlock title="Prototype Injection" code={`function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\n// Inject method ONCE into the Prototype\nPerson.prototype.greet = function() {\n  return \`Hi, I'm \${this.name}\`;\n};\n\nconst user1 = new Person("Karthick", 22);\nconst user2 = new Person("Rahul", 25);`} />
                       
                       <div className="bg-emerald-950/40 p-6 rounded-2xl border border-emerald-500/20 text-emerald-100">
                          <p className="font-medium leading-relaxed">
                             By assigning the method to <code className="bg-emerald-900/50 px-1 rounded font-bold text-emerald-400 border border-emerald-700">Person.prototype</code>, the function is stored strictly once in memory. Both <code>user1</code> and <code>user2</code> securely reference the exact same method instead of cloning it.
                          </p>
                       </div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Internals of NEW ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-[#12050f] border border-fuchsia-500/20 p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col items-center">
             <div className="absolute right-0 top-0 opacity-5 p-10"><Cpu size={250} className="text-fuchsia-500"/></div>
             <h3 className="font-black text-fuchsia-500 text-3xl tracking-tighter mb-10 flex items-center justify-center gap-3 relative z-10"><Terminal size={32}/> 8. Engine Internals: The <code>new</code> Keyword</h3>
             
             <div className="w-full relative z-10 mb-8 max-w-sm">
                 <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 p-4 font-mono text-center text-fuchsia-300 font-bold rounded-xl shadow-inner">
                     new Person("Karthick", 22);
                 </div>
             </div>

             <div className="w-full relative z-10">
                 <p className="text-gray-400 font-medium mb-6 text-center">When triggered, the JS Engine automatically initiates this strict 4-step sequence:</p>
                 <div className="grid sm:grid-cols-2 gap-4 w-full">
                     <div className="bg-black/50 border border-gray-800 p-5 rounded-2xl flex items-center gap-3 w-full">
                        <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-black">1</div>
                        <span className="text-gray-300 font-medium font-mono text-sm">Creates strict empty object <code className="text-fuchsia-400">{}</code></span>
                     </div>
                     <div className="bg-black/50 border border-gray-800 p-5 rounded-2xl flex items-center gap-3 w-full">
                        <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-black">2</div>
                        <span className="text-gray-300 font-medium font-mono text-sm">Binds <code className="text-fuchsia-400">this</code> to the new object</span>
                     </div>
                     <div className="bg-black/50 border border-gray-800 p-5 rounded-2xl flex items-center gap-3 w-full">
                        <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-black">3</div>
                        <span className="text-gray-300 font-medium font-mono text-sm">Links the <code className="text-fuchsia-400">prototype</code> chain</span>
                     </div>
                     <div className="bg-black/50 border border-gray-800 p-5 rounded-2xl flex items-center gap-3 w-full">
                        <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-black">4</div>
                        <span className="text-gray-300 font-medium font-mono text-sm">Automatically <code className="text-fuchsia-400">returns</code> object</span>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* ── Section 9: Real World Mini Project ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-1 gap-8 items-center">
         
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl h-full flex flex-col relative overflow-hidden">
             <div className="absolute right-0 top-0 opacity-[0.03] p-10"><Banknote size={300} className="text-emerald-500"/></div>
             
             <div className="relative z-10 w-full mb-8">
                 <SectionHeader icon={Banknote} title="9. Enterprise Mini Project" subtitle="Bank Account System with Prototypes" color="text-emerald-500" />
             </div>

             <div className="relative z-10 w-full">
                 <CodeBlock language="javascript" code={`function Account(name, balance) {\n  this.name = name;\n  this.balance = balance;\n}\n\n// Safely attaching utility methods to Prototype\nAccount.prototype.deposit = function(amount) {\n  this.balance += amount;\n};\n\nAccount.prototype.getBalance = function() {\n  return this.balance;\n};\n\n// Execution Engine\nconst user = new Account("Karthick", 1000);\nuser.deposit(500);\n\nconsole.log(user.getBalance()); // 1500`} />
             </div>
         </div>
         
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA ARCHITECTURE
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-blue-500/10 decoration-2">
          "Constructors laid the raw foundation for Object-Oriented design in JavaScript. Understanding how 'new' and 'prototype' connect under the hood empowers developers to build deeply scalable applications without bleeding system memory."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectConstructors;