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
  Unplug
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
            <span className="ml-2 text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">{title}</span>
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-emerald-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsObjectDestructuring: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#05100c] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Unplug size={14} className="fill-current" /> PROPERTY EXTRACTION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 drop-shadow-2xl">
            Destructuring
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The ultimate ES6 shortcut. Unpack deeply nested values from JSON and <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight">assign them directly</span> to clean, readable variables in a single line of code.
        </p>
      </header>

      {/* ── Section 1 & 6: Intro & Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-500 w-max border border-emerald-100 dark:border-emerald-500/20 shadow-lg">
                 <Split size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is Destructuring?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   Object Destructuring is a modern JS feature allowing you to instantly extract values out of objects into stand-alone variables manually typing <code>user.property</code> every time.
                 </p>
                 <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-500/5 p-4 rounded-xl border border-rose-200 dark:border-rose-500/20 text-sm">
                       <p className="font-bold text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-1"><XOctagon size={14}/> Old Way</p>
                       <code className="text-rose-800 dark:text-rose-300 font-mono block">let name = user.name;</code>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-500/5 p-4 rounded-xl border border-emerald-200 dark:border-emerald-500/20 text-sm">
                       <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1"><CheckCircle size={14}/> Modern</p>
                       <code className="text-emerald-800 dark:text-emerald-300 font-mono block">const {'{ name }'} = user;</code>
                    </div>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* 6. Visualization Flow */}
        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#05110d] p-10 rounded-[3rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Target size={150} className="text-emerald-500"/></div>
               <SectionHeader icon={Workflow} title="6. Mental Model" subtitle="How extraction works" color="text-teal-400" />
               
               <div className="w-full flex-1 flex flex-col items-center justify-center p-6 space-y-4">
                   <div className="bg-teal-950/40 text-teal-100 p-4 rounded-xl font-mono text-sm border border-teal-500/30 w-full shadow-inner flex flex-col gap-2">
                      <span className="text-teal-500 font-bold uppercase tracking-widest text-[10px]">1. The Target Object</span>
                      <code>{'{ name: "Karthick", age: 22 }'}</code>
                   </div>
                   <ArrowRightLeft size={24} className="text-emerald-500/50 rotate-90" />
                   <div className="bg-emerald-500 text-white p-4 rounded-xl font-mono text-sm shadow-emerald-500/20 shadow-xl w-full flex flex-col gap-2 border border-emerald-400">
                      <span className="text-emerald-100 font-bold uppercase tracking-widest text-[10px]">2. Destructure Syntax</span>
                      <code>const {'{ name, age }'} = Object;</code>
                   </div>
                   <ArrowRightLeft size={24} className="text-cyan-500/50 rotate-90" />
                   <div className="bg-cyan-950/40 text-cyan-100 p-4 rounded-xl font-mono text-sm border border-cyan-500/30 w-full shadow-inner flex flex-col gap-2">
                       <span className="text-cyan-500 font-bold uppercase tracking-widest text-[10px]">3. Extracted Variables</span>
                       <code>name = "Karthick"</code>
                       <code>age = 22</code>
                   </div>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 2 & 3: Why & Basic Syntax ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col h-full relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5"><Star size={200} className="text-emerald-500"/></div>
             <SectionHeader icon={Star} title="2. Why Use It?" subtitle="The benefits of unpacking." color="text-emerald-500" />
             
             <ul className="space-y-4 font-medium text-gray-700 dark:text-gray-300 relative z-10 w-full mt-4 flex-1">
                <li className="flex items-center gap-3 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-700 p-4 rounded-xl"><Terminal size={18} className="text-emerald-500 shrink-0"/> Significantly less boilerplate code.</li>
                <li className="flex items-center gap-3 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-700 p-4 rounded-xl"><Eye size={18} className="text-emerald-500 shrink-0"/> Massive readability improvements.</li>
                <li className="flex items-center gap-3 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-700 p-4 rounded-xl"><Download size={18} className="text-emerald-500 shrink-0"/> Painless specific data extraction.</li>
                <li className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 p-4 rounded-xl text-emerald-700 dark:text-emerald-300 font-bold"><Layers size={18} className="text-emerald-500 shrink-0"/> The absolute standard in React & Modern API handling.</li>
             </ul>
         </div>

         <div className="bg-[#051109] border border-emerald-500/20 p-10 rounded-[3rem] shadow-xl flex flex-col h-full items-center justify-center">
             <SectionHeader icon={Code2} title="3. The Core Syntax" subtitle="Mastering the braces." color="text-emerald-400" />
             <div className="w-full relative z-10 mt-6 max-w-md">
                 <div className="bg-emerald-900/40 border border-emerald-500/50 p-6 rounded-2xl">
                     <code className="text-emerald-300 font-mono text-sm sm:text-base whitespace-pre-wrap word-break">
                         const {'{'} <span className="text-yellow-400">key1</span>, <span className="text-yellow-400">key2</span> {'}'} = <span className="text-cyan-400">objectInstance</span>;
                     </code>
                 </div>
                 <p className="text-center text-emerald-500/70 text-sm mt-4 italic">The variables inside the braces must match the object's exact key names.</p>
             </div>
         </div>
      </section>

      {/* ── Section 4: 5 Example Step by Step Guide ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><Settings size={300} className="text-emerald-500"/></div>
            
            <SectionHeader icon={Settings} title="4. Implementation Guide" subtitle="5 Step-by-Step Destructuring Patterns" color="text-teal-500" />
            
            <div className="grid lg:grid-cols-2 gap-8 mt-10 relative z-10">
               
               {/* 4.1 Simple Destructuring */}
               <div className="bg-gray-50 dark:bg-[#080d11] p-8 rounded-3xl border border-gray-200 dark:border-gray-700 flex flex-col h-full shadow-md">
                   <h4 className="font-black text-teal-600 dark:text-teal-400 text-lg mb-4 flex items-center gap-2"><Box size={18}/> 4.1 Simple Extraction</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Pulling properties out normally.</p>
                   <CodeBlock language="javascript" code={`const user = {\n  name: "Karthick",\n  age: 22\n};\n\nconst { name, age } = user;\nconsole.log(name); // Karthick`} />
               </div>

               {/* 4.2 Rename Variables */}
               <div className="bg-gray-50 dark:bg-[#080d11] p-8 rounded-3xl border border-gray-200 dark:border-gray-700 flex flex-col h-full shadow-md">
                   <h4 className="font-black text-teal-600 dark:text-teal-400 text-lg mb-4 flex items-center gap-2"><Repeat size={18}/> 4.2 Rename Variable</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Map the extraction to a completely new variable name using <code>:</code>.</p>
                   <CodeBlock language="javascript" code={`// Maps 'name' property to 'userName' var\nconst { name: userName } = user;\n\nconsole.log(userName);`} />
               </div>

               {/* 4.3 Default Values */}
               <div className="bg-gray-50 dark:bg-[#080d11] p-8 rounded-3xl border border-gray-200 dark:border-gray-700 flex flex-col h-full shadow-md">
                   <h4 className="font-black text-teal-600 dark:text-teal-400 text-lg mb-4 flex items-center gap-2"><Lock size={18}/> 4.3 Default Values</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Assign a fallback value using <code>=</code> in case the property doesn't exist.</p>
                   <CodeBlock language="javascript" code={`// 'city' does not exist in user!\nconst { city = "Chennai" } = user;\n\nconsole.log(city); // Chennai fallback applies`} />
               </div>

               {/* 4.4 Nested Destructuring */}
               <div className="bg-gray-50 dark:bg-[#080d11] p-8 rounded-3xl border border-gray-200 dark:border-gray-700 flex flex-col h-full shadow-md">
                   <h4 className="font-black text-teal-600 dark:text-teal-400 text-lg mb-4 flex items-center gap-2"><Layers size={18}/> 4.4 Deep Nested</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Mine into deeply nested JSON objects instantly.</p>
                   <CodeBlock language="javascript" code={`const user = {\n  address: { city: "Chennai" }\n};\n\n// Extracts city by passing through address\nconst { address: { city } } = user;\n\nconsole.log(city);`} />
               </div>
               
               {/* 4.5 Param Destructuring */}
               <div className="bg-teal-50 dark:bg-[#05110d] p-8 rounded-3xl border border-teal-200 dark:border-teal-900 flex flex-col h-full shadow-inner lg:col-span-2">
                   <div className="flex justify-between items-start mb-6">
                      <h4 className="font-black text-emerald-600 dark:text-emerald-400 text-xl flex items-center gap-2"><FunctionSquare size={20}/> 4.5 Function Parameters</h4>
                      <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-full border border-emerald-200 dark:border-emerald-800">React Component Standard</span>
                   </div>
                   <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-6">👉 Extremely common in modern web dev. Destructure an object directly exactly as it passes into a function's parameters.</p>
                   <CodeBlock language="javascript" code={`function displayUser({ name, age }) {\n  console.log(name, age);\n}\n\ndisplayUser({ name: "Karthick", age: 22 });`} />
               </div>

            </div>
         </div>
      </section>

      {/* ── Section 5: Real World Mini Project ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-1 gap-8 items-center">
         
         <div className="bg-[#05120e] p-10 md:p-14 border border-emerald-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            
            <div className="absolute top-0 left-0 p-10 opacity-10"><Database size={300} className="text-emerald-500"/></div>
            
            <div className="flex-1 w-full relative z-10">
               <SectionHeader icon={Terminal} title="5. Real-World Handling" subtitle="Unpacking an API JSON Response" color="text-emerald-400" />
               <p className="text-gray-400 font-medium mb-6">When hitting server endpoints, APIs return highly nested objects. Destructuring bypasses tracking <code>response.data.user</code> manually.</p>
               <CodeBlock language="javascript" code={`const response = {\n  status: 200,\n  data: {\n    user: "Karthick",\n    role: "Developer"\n  }\n};\n\n// Deep extract \nconst { data: { user, role } } = response;\n\nconsole.log(user, role);`} />
            </div>

            <div className="w-full md:w-auto flex justify-center relative z-10">
                <div className="bg-[#0e2418] p-8 rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-900/50 text-center min-w-[200px]">
                   <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 flex items-center justify-center gap-2"><Eye size={14}/> Output Render</p>
                   <p className="font-mono text-white font-black text-2xl drop-shadow-lg text-emerald-300">"Karthick"</p>
                   <p className="font-mono text-white font-black text-2xl drop-shadow-lg text-teal-300 mt-2">"Developer"</p>
                </div>
            </div>
         </div>
         
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA EXTRACTION
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-emerald-500/10 decoration-2">
          "Object Destructuring isn't just a gimmick—it's the core standard for extracting React Props, unpacking Axios JSON responses, and writing clean, scalable Front-End code."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectDestructuring;