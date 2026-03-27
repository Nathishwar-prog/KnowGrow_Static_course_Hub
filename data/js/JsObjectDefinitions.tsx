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
  GraduationCap,
  Brackets,
  PencilRuler,
  Cuboid,
  UserCircle
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
            <span className="ml-2 text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em]">{title}</span>
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-cyan-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsObjectDefinitions: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#030910] min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 text-[10px] font-black mb-8 border border-cyan-100 dark:border-cyan-900/50 shadow-xl shadow-cyan-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Box size={14} className="fill-current" /> DATA CONTAINERS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 drop-shadow-2xl">
            Definitions
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The core of JSON and JavaScript. Learn how to map real-world entities into code by grouping <span className="text-gray-900 dark:text-white font-bold underline decoration-cyan-500 underline-offset-4 tracking-tight">Structured Data</span> and <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight">Executable Actions</span> seamlessly.
        </p>
      </header>

      {/* ── Section 1 & 2: Intro & Benefits ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-cyan-50 dark:bg-cyan-500/10 rounded-2xl text-cyan-500 w-max border border-cyan-100 dark:border-cyan-500/20 shadow-lg">
                 <Package size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is an Object?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   An Object Definition is how you create and assemble a <strong className="text-cyan-500">Container</strong> holding related information in JS.
                 </p>
                 <div className="bg-sky-50 dark:bg-sky-500/5 p-5 rounded-2xl border border-sky-200 dark:border-sky-500/20 text-sm">
                    <p className="font-bold text-sky-700 dark:text-sky-400 flex items-center gap-2 mb-2">
                       <Database size={16}/> It is divided into exactly two things:
                    </p>
                    <ul className="text-gray-700 dark:text-gray-400 space-y-2 font-medium">
                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> <strong>Properties:</strong> The static Data (e.g. <code>name: "Karthick"</code>)</li>
                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> <strong>Methods:</strong> The executable Functions (e.g. <code>greet: function()</code>)</li>
                    </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#050f14] p-10 rounded-[3rem] border border-cyan-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Target size={150} className="text-cyan-500"/></div>
               <SectionHeader icon={Star} title="2. Why Objects Matter" subtitle="The blueprint of the modern web." color="text-cyan-400" />
               <ul className="space-y-4 font-medium text-gray-300 relative z-10 w-full mt-4">
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><UserCircle size={20} className="text-cyan-400 shrink-0"/> Represent Real-World Entities (Users, Products, Analytics)</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Database size={20} className="text-cyan-400 shrink-0"/> The absolute core of Structuring Data</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Layers size={20} className="text-cyan-400 shrink-0"/> Crucial requirement for Scalable Applications</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Cpu size={20} className="text-cyan-400 shrink-0"/> The functional backbone of standard OOP</li>
               </ul>
           </div>
        </div>
      </section>

      {/* ── Section 3: Ways to Define Objects ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><PencilRuler size={300} className="text-sky-500"/></div>
            
            <SectionHeader icon={PencilRuler} title="3. The 5 Creation Signatures" subtitle="Architectural Approaches" color="text-sky-500" />
            
            <div className="grid lg:grid-cols-2 gap-8 mt-10 relative z-10">
               
               {/* 3.1 Object Literal */}
               <div className="bg-sky-50 dark:bg-[#07111a] p-8 rounded-3xl border border-sky-100 dark:border-sky-500/20 flex flex-col h-full shadow-inner lg:col-span-2">
                   <div className="flex justify-between items-start mb-6">
                      <h4 className="font-black text-sky-600 dark:text-sky-400 text-xl flex items-center gap-2"><Code size={20}/> 3.1 Object Literal (Most Common)</h4>
                      <span className="bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-full border border-sky-200 dark:border-sky-800">The Go-To</span>
                   </div>
                   <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-6">👉 The simplest, cleanest, and most widely used syntax using direct curly braces <code>{}</code>.</p>
                   <CodeBlock language="javascript" code={`const user = {\n  name: "Karthick",\n  age: 22,\n  greet: function() {\n    return "Hello!";\n  }\n};\n\nconsole.log(user.name);\nconsole.log(user.greet());`} />
               </div>

               {/* 3.2 Using new Object() */}
               <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-3xl flex flex-col h-full shadow-md">
                   <h4 className="font-black text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2"><Box size={18} className="text-blue-500"/> 3.2 <code>new Object()</code></h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Slower, older style initializing an empty shell before population. <span className="text-rose-500 font-bold">Rarely used now.</span></p>
                   <CodeBlock language="javascript" code={`const user = new Object();\n\nuser.name = "Karthick";\nuser.age = 22;`} />
               </div>

               {/* 3.3 Constructor Function */}
               <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-3xl flex flex-col h-full shadow-md">
                   <h4 className="font-black text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2"><Database size={18} className="text-cyan-500"/> 3.3 Constructor Function</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Factory approach explicitly designed to stamp out many identical object instances.</p>
                   <CodeBlock language="javascript" code={`function User(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nconst user1 = new User("Karthick", 22);`} />
               </div>

               {/* 3.4 ES6 Class */}
               <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-3xl flex flex-col h-full shadow-md">
                   <h4 className="font-black text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2"><Layout size={18} className="text-indigo-500"/> 3.4 ES6 Class Wrapper</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 The Modern OOP wrapper syntax that completely replaces standard Constructors.</p>
                   <CodeBlock language="javascript" code={`class User {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\nconst user = new User("Karthick", 22);`} />
               </div>

               {/* 3.5 Object.create() */}
               <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-3xl flex flex-col h-full shadow-md">
                   <h4 className="font-black text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2"><Layers size={18} className="text-fuchsia-500"/> 3.5 <code>Object.create()</code></h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Advanced prototype-chain linking method. Injects existing objects as the immediate prototype.</p>
                   <CodeBlock language="javascript" code={`const person = { greet() { return "Hello!"; } };\n\nconst user = Object.create(person);\nuser.name = "Karthick";`} />
               </div>

            </div>
         </div>
      </section>

      {/* ── Section 4 & 5: Dissection & Access ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8 items-start">
         <div className="bg-[#0b1016] border border-cyan-500/20 p-10 rounded-[3rem] shadow-xl flex flex-col relative overflow-hidden h-full">
            <div className="absolute right-0 top-0 opacity-10 p-10"><Activity size={200} className="text-cyan-500"/></div>
            <SectionHeader icon={Search} title="4. Properties & Methods" subtitle="The internal split." color="text-cyan-400" />
            
            <div className="space-y-6 mt-4 relative z-10 w-full flex-1">
               <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
                  <p className="font-bold text-cyan-400 mb-3 flex items-center gap-2"><Hash size={16}/> Properties (Static Data)</p>
                  <CodeBlock code={`const car = {\n  brand: "BMW",\n  speed: 200\n};`} />
               </div>
               <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
                  <p className="font-bold text-blue-400 mb-3 flex items-center gap-2"><PlayCircle size={16}/> Methods (Functions)</p>
                  <CodeBlock code={`const car = {\n  start() {\n    console.log("Car started");\n  }\n};`} />
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-10 rounded-[3rem] shadow-xl flex flex-col h-full relative overflow-hidden">
             <div className="absolute right-0 top-0 opacity-5 p-10"><Terminal size={200} className="text-blue-500"/></div>
             <SectionHeader icon={Settings} title="5. Extractor Syntax" subtitle="Data Access Rules" color="text-blue-500" />
             
             <div className="space-y-6 mt-4 relative z-10 flex-1 flex flex-col justify-center">
                 <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-700 p-5 rounded-2xl">
                        <p className="font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">Dot Notation</p>
                        <code className="bg-white dark:bg-black border border-gray-300 dark:border-gray-600 block px-3 py-2 rounded text-cyan-600 dark:text-cyan-400 font-mono text-center font-bold">user.name</code>
                    </div>
                    <div className="flex-1 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-700 p-5 rounded-2xl">
                        <p className="font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">Bracket Notation</p>
                        <code className="bg-white dark:bg-black border border-gray-300 dark:border-gray-600 block px-3 py-2 rounded text-blue-600 dark:text-blue-400 font-mono text-center font-bold">user["name"]</code>
                    </div>
                 </div>

                 <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-5 rounded-2xl">
                    <p className="text-xs font-black uppercase tracking-widest text-amber-500 flex items-center gap-2 mb-3"><AlertTriangle size={14}/> When to use brackets?</p>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm font-medium space-y-2">
                       <li className="flex items-center gap-2"><CheckCircle size={14} className="text-amber-500"/> You need to resolve <strong>Dynamic Variable Keys</strong></li>
                       <li className="flex items-center gap-2"><CheckCircle size={14} className="text-amber-500"/> Keys contain <strong>Special Characters</strong> or spaces (e.g. <code>user["first name"]</code>)</li>
                    </ul>
                 </div>
             </div>
         </div>
      </section>

      {/* ── Section 6: Real World Mini Project ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-1 gap-8 items-center">
         
         <div className="bg-[#051211] p-10 md:p-14 border border-teal-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            
            <div className="absolute top-0 left-0 p-10 opacity-[0.03]"><GraduationCap size={300} className="text-teal-500"/></div>
            
            <div className="flex-1 w-full relative z-10">
               <SectionHeader icon={GraduationCap} title="6. Real-World Logic" subtitle="Student Object with getGrade" color="text-teal-400" />
               <p className="text-gray-400 font-medium mb-6">A complete production-ready Object packaging a student's fundamental identity with an internal executable behavior bound via <code className="text-teal-300 bg-teal-900/40 px-1 rounded">this</code>.</p>
               <CodeBlock language="javascript" code={`const student = {\n  name: "Karthick",\n  marks: 85,\n  // Internal Calculation Method\n  getGrade() {\n    return this.marks > 50 ? "Pass" : "Fail";\n  }\n};\n\nconsole.log(student.getGrade());`} />
            </div>

            <div className="w-full md:w-auto flex justify-center relative z-10">
                <div className="bg-[#0e241c] p-8 rounded-3xl border border-teal-500/30 shadow-2xl shadow-teal-900/50 text-center min-w-[200px]">
                   <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4 flex items-center justify-center gap-2"><Terminal size={14}/> Output Render</p>
                   <p className="font-mono text-white font-black text-5xl drop-shadow-lg text-emerald-400">"Pass"</p>
                </div>
            </div>
         </div>
         
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA ENTITIES
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-cyan-500/10 decoration-2">
          "Object Definitions are the absolute core of JavaScript. A deep understanding of the 5 Creation Signatures gives complete architectural control over how large applications manage JSON data and OOP entities."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectDefinitions;