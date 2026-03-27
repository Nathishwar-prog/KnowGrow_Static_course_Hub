import React, { useState } from 'react';
import {
  Check,
  Copy,
  Terminal,
  Maximize,
  Minimize,
  Infinity as InfinityIcon,
  XOctagon,
  ShieldAlert,
  ShieldCheck,
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
  Search,
  Hash,
  Cpu,
  Calculator,
  PlayCircle,
  Shuffle,
  Star,
  Key,
  FolderOpen,
  FileText,
  PlusSquare,
  Trash2,
  HelpCircle,
  Bookmark,
  ShoppingCart,
  Ghost,
  Trash,
  Sigma,
  Bug,
  Code,
  CheckCircle,
  Binary,
  MonitorSmartphone,
  Tv,
  Printer,
  MonitorPlay,
  Smartphone,
  Brackets,
  Server,
  ListOrdered,
  PieChart
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
    <div className="mb-6 rounded-2xl overflow-hidden border border-amber-900/30 dark:border-amber-700/30 shadow-lg relative group w-full bg-[#1e1e1e]">
      {title && (
        <div className="bg-[#252526] px-4 py-3 border-b border-amber-900/50 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-amber-400 uppercase tracking-[0.2em]">{title}</span>
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

const JsObjectDisplay: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0a0501] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <MonitorSmartphone size={14} className="fill-current" /> DATA OUTPUT
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 drop-shadow-2xl">
            Display
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          How to make JSON human-readable. Learn the core methods to extract and format complex data structures into <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500 underline-offset-4 tracking-tight">UI Views</span> and <span className="text-gray-900 dark:text-white font-bold underline decoration-orange-500 underline-offset-4 tracking-tight">Console Logs</span>.
        </p>
      </header>

      {/* ── Section 1 & 2: Intro & Importance ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-amber-50 dark:bg-amber-500/10 rounded-2xl text-amber-500 w-max border border-amber-100 dark:border-amber-500/20 shadow-lg">
                 <Tv size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is Object Display?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   Object Display simply refers to how you output complex Object data down to users (Front-End) or developers (Console).
                 </p>
                 <div className="bg-orange-50 dark:bg-orange-500/5 p-5 rounded-2xl border border-orange-200 dark:border-orange-500/20 text-sm">
                    <p className="font-bold text-orange-700 dark:text-orange-400 flex items-center gap-2 mb-2">
                       <AlertTriangle size={16}/> Core Problem:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed italic">
                       Since Objects are 3D nested structures, they look like <code>[object Object]</code> if you attempt to print them raw. They must be flattened or formatted first.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#120a05] p-10 rounded-[3rem] border border-amber-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Target size={150} className="text-amber-500"/></div>
               <SectionHeader icon={Star} title="2. Why It's Crucial" subtitle="Primary use-cases" color="text-amber-400" />
               <ul className="space-y-4 font-medium text-gray-300 relative z-10 w-full mt-4">
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Bug size={20} className="text-amber-400 shrink-0"/> Debugging code logically</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Smartphone size={20} className="text-amber-400 shrink-0"/> Stamping data directly into Mobile/Web UIs</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Network size={20} className="text-amber-400 shrink-0"/> Logging live JSON API Response feeds</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><PieChart size={20} className="text-amber-400 shrink-0"/> Feeding analytics and Data Visualization</li>
               </ul>
           </div>
        </div>
      </section>

      {/* ── Section 5: Mental Model Visualization ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-[#120705] border border-amber-500/20 p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col items-center">
             <div className="absolute right-0 top-0 opacity-5 p-10"><Code2 size={250} className="text-amber-500"/></div>
             <h3 className="font-black text-amber-500 text-3xl tracking-tighter mb-10 flex items-center justify-center gap-3 relative z-10"><Eye size={32}/> 5. Architecture of Output</h3>
             
             <div className="w-full relative z-10 mb-8 max-w-sm">
                 <div className="bg-amber-500/10 border border-amber-500/30 p-4 font-mono text-center text-amber-300 font-bold rounded-xl shadow-inner">
                     Object → {'{'} name: "Karthick", age: 22 {'}'}
                 </div>
             </div>

             <div className="w-full relative z-10">
                 <div className="grid sm:grid-cols-3 gap-4 w-full">
                     <div className="bg-black/50 border border-amber-900/50 p-5 rounded-2xl flex flex-col items-center text-center gap-3 w-full">
                        <Terminal size={24} className="text-gray-400"/>
                        <span className="text-gray-300 font-medium font-mono text-sm border-b border-gray-800 pb-2 w-full">console.log()</span>
                        <span className="text-gray-500 text-xs uppercase tracking-widest font-black">Debug View</span>
                     </div>
                     <div className="bg-black/50 border border-orange-900/50 p-5 rounded-2xl flex flex-col items-center text-center gap-3 w-full">
                        <Code2 size={24} className="text-orange-400"/>
                        <span className="text-gray-300 font-medium font-mono text-sm border-b border-gray-800 pb-2 w-full">JSON.stringify()</span>
                        <span className="text-gray-500 text-xs uppercase tracking-widest font-black">String Format</span>
                     </div>
                     <div className="bg-black/50 border border-rose-900/50 p-5 rounded-2xl flex flex-col items-center text-center gap-3 w-full">
                        <MonitorPlay size={24} className="text-rose-400"/>
                        <span className="text-gray-300 font-medium font-mono text-sm border-b border-gray-800 pb-2 w-full">HTML</span>
                        <span className="text-gray-500 text-xs uppercase tracking-widest font-black">UI Display</span>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* ── Section 3: The 6 Ways ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><ListOrdered size={300} className="text-amber-500"/></div>
            
            <SectionHeader icon={ListOrdered} title="3. Display Strategies" subtitle="The 6 conversion techniques" color="text-amber-500" />
            
            <div className="grid lg:grid-cols-2 gap-8 mt-10 relative z-10">
               
               {/* 3.1 console.log */}
               <div className="bg-amber-50 dark:bg-[#0f0b08] p-8 rounded-3xl border border-amber-200 dark:border-amber-900 shadow-inner">
                   <h4 className="font-black text-amber-600 dark:text-amber-500 text-lg mb-4 flex items-center gap-2"><Terminal size={18}/> 3.1 console.log()</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">👉 The absolute standard for developer debugging. Renders an expandable, interactive tree natively inside the browser console.</p>
                   <CodeBlock code={`const user = { name: "Karthick", age: 22 };\n\nconsole.log(user);`} />
               </div>

               {/* 3.2 JSON.stringify */}
               <div className="bg-amber-50 dark:bg-[#0f0b08] p-8 rounded-3xl border border-amber-200 dark:border-amber-900 shadow-inner">
                   <h4 className="font-black text-orange-600 dark:text-orange-500 text-lg mb-4 flex items-center gap-2"><Brackets size={18}/> 3.2 JSON.stringify()</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">👉 Converts an 3D Object directly into a flat String. Crucial for transferring data across networks.</p>
                   <CodeBlock code={`const user = { name: "Karthick", age: 22 };\n\nconsole.log(JSON.stringify(user));\n// {"name":"Karthick","age":22}`} />
               </div>

               {/* 3.2 Pretty Print */}
               <div className="bg-[#120a05] p-8 rounded-3xl border border-orange-500/30 lg:col-span-2 shadow-2xl flex flex-col md:flex-row gap-8 items-center">
                   <div className="flex-1 w-full">
                       <h4 className="font-black text-orange-500 text-xl mb-4 flex items-center gap-2"><Printer size={20}/> Pretty Print JSON (Important)</h4>
                       <p className="text-gray-400 text-sm font-medium mb-4">By passing <code className="text-orange-300">null, 2</code> into <code>stringify</code>, you command the engine to inject spaces and line-breaks, formatting the output perfectly for human readability.</p>
                       <CodeBlock title="2-Space Indentation" code={`console.log(JSON.stringify(user, null, 2));`} />
                   </div>
                   <div className="w-full md:w-auto min-w-[250px] bg-black border border-gray-800 p-6 rounded-2xl shadow-inner">
                       <p className="text-xs uppercase text-gray-500 font-bold mb-3 border-b border-gray-800 pb-2">Output</p>
                       <pre className="text-orange-400 font-mono text-sm leading-loose">
{`{
  "name": "Karthick",
  "age": 22
}`}
                       </pre>
                   </div>
               </div>

               {/* 3.3 for...in */}
               <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-3xl flex flex-col h-full shadow-md">
                   <h4 className="font-black text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2"><Repeat size={18} className="text-rose-500"/> 3.3 for...in Loop</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Iterates manually over every key-value pair.</p>
                   <CodeBlock code={`const user = { name: "Karthick", age: 22 };\n\nfor (let key in user) {\n  console.log(key + ": " + user[key]);\n}`} />
               </div>

               {/* 3.4 Object.values() */}
               <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-3xl flex flex-col h-full shadow-md">
                   <h4 className="font-black text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2"><Box size={18} className="text-sky-500"/> 3.4 Object.values()</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Strips all keys, returning just the values directly as an Array.</p>
                   <CodeBlock code={`const user = { name: "Karthick", age: 22 };\n\nconsole.log(Object.values(user));\n// ["Karthick", 22]`} />
               </div>

               {/* 3.5 Object.entries() */}
               <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-3xl flex flex-col h-full shadow-md">
                   <h4 className="font-black text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2"><Layers size={18} className="text-emerald-500"/> 3.5 Object.entries()</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Converts the Object immediately into a structured 2D Array map.</p>
                   <CodeBlock code={`const user = { name: "Karthick", age: 22 };\n\nconsole.log(Object.entries(user));\n// [["name", "Karthick"], ["age", 22]]`} />
               </div>

               {/* 3.6 HTML DOM Display */}
               <div className="bg-rose-50 dark:bg-[#120508] p-8 rounded-3xl border border-rose-200 dark:border-rose-900 flex flex-col h-full shadow-inner lg:col-span-2">
                   <div className="flex justify-between items-start mb-6">
                      <h4 className="font-black text-rose-600 dark:text-rose-500 text-xl flex items-center gap-2"><MonitorPlay size={20}/> 3.6 Display in HTML</h4>
                      <span className="bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-full border border-rose-200 dark:border-rose-800">Very Important</span>
                   </div>
                   <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-6">👉 Injecting extracted Object variables directly into the DOM via <code className="font-bold">innerHTML</code> to render a front-end UI view.</p>
                   <CodeBlock code={`const user = { name: "Karthick", age: 22 };\n\ndocument.getElementById("output").innerHTML =\n  user.name + " is " + user.age + " years old";`} />
               </div>

            </div>
         </div>
      </section>

      {/* ── Section 4: Real World Mini Project ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-1 gap-8 items-center">
         
         <div className="bg-[#0f0905] p-10 md:p-14 border border-amber-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            
            <div className="absolute top-0 left-0 p-10 opacity-[0.03]"><Server size={300} className="text-amber-500"/></div>
            
            <div className="flex-1 w-full relative z-10">
               <SectionHeader icon={Terminal} title="4. Real-World Handling" subtitle="Formatting an API Response" color="text-amber-400" />
               <p className="text-gray-400 font-medium mb-6">Receiving a raw JSON user object, and wrapping it in a strict <code>JSON.stringify</code> with 2-space padding before throwing it down to the console logging system.</p>
               <CodeBlock language="javascript" code={`const user = {\n  id: 1,\n  name: "Karthick",\n  role: "Developer"\n};\n\nconst formatted = JSON.stringify(user, null, 2);\n\nconsole.log(formatted);`} />
            </div>
            
         </div>
         
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA PRESENTATION
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-amber-500/10 decoration-2">
          "Knowing how to unwrap and display Objects properly bridges the gap between raw data storage and actual visible application interfaces."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectDisplay;