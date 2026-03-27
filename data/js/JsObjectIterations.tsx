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
  EyeOff,
  FolderTree,
  Repeat1,
  MonitorPlay
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
            <span className="ml-2 text-[10px] font-black text-pink-400 uppercase tracking-[0.2em]">{title}</span>
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-pink-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsObjectIterations: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0d0510] min-h-screen font-sans selection:bg-pink-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-pink-600 dark:text-pink-400 text-[10px] font-black mb-8 border border-pink-100 dark:border-pink-900/50 shadow-xl shadow-pink-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Repeat1 size={14} className="fill-current" /> DATA TRAVERSAL
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-violet-500 drop-shadow-2xl">
            Iterations
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Unlock standard object structures. Learn how to bypass the fact that JSON is not natively iterable by mapping <span className="text-gray-900 dark:text-white font-bold underline decoration-pink-500 underline-offset-4 tracking-tight">Keys, Values, & Entries</span> into dynamic loop sequences.
        </p>
      </header>

      {/* ── Section 1 & 2: Intro & Benefits ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-pink-50 dark:bg-pink-500/10 rounded-2xl text-pink-500 w-max border border-pink-100 dark:border-pink-500/20 shadow-lg">
                 <FolderTree size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. Interrogating Objects</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   Object Iteration is the process of looping directly through un-ordered object properties. Since objects are <strong className="text-pink-500">not arrays</strong>, you cannot use a standard <code>for</code> loop directly on them.
                 </p>
                 <div className="bg-violet-50 dark:bg-violet-500/5 p-5 rounded-2xl border border-violet-200 dark:border-violet-500/20 text-sm">
                    <p className="font-bold text-violet-700 dark:text-violet-400 flex items-center gap-2 mb-2">
                       <Lightbulb size={16}/> Think of it like:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed italic">
                       📂 "Opening up a massive folder and systematically checking the name and contents of every single file inside."
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0f0511] p-10 rounded-[3rem] border border-pink-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Target size={150} className="text-pink-500"/></div>
               <SectionHeader icon={Star} title="2. Why Loop JSON?" subtitle="Real-world automation." color="text-pink-400" />
               <ul className="space-y-4 font-medium text-gray-300 relative z-10 w-full mt-4">
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Cpu size={20} className="text-pink-400 shrink-0"/> <strong>Process Data:</strong> Search filtering across 1,000s of rows</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><MonitorPlay size={20} className="text-pink-400 shrink-0"/> <strong>Dynamic UIs:</strong> Render un-known UI blocks automatically</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Network size={20} className="text-pink-400 shrink-0"/> <strong>Handle APIs:</strong> Tear apart unstructured database responses</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><Shuffle size={20} className="text-pink-400 shrink-0"/> <strong>Transform:</strong> Flip keys into values iteratively</li>
               </ul>
           </div>
        </div>
      </section>

      {/* ── Section 5: The Object Array Breakdown ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-[#100512] border border-violet-500/20 p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col items-center">
             <div className="absolute right-0 top-0 opacity-5 p-10"><Code2 size={250} className="text-violet-500"/></div>
             <h3 className="font-black text-violet-500 text-3xl tracking-tighter mb-10 flex items-center justify-center gap-3 relative z-10"><Terminal size={32}/> 5. System Map (Array Conversion)</h3>
             
             <div className="w-full flex-1 flex flex-col items-center justify-center space-y-4 relative z-10">
                 <div className="bg-pink-950/40 text-pink-100 p-4 rounded-xl font-mono text-sm border border-pink-500/30 w-full max-w-sm shadow-inner flex flex-col gap-2 mx-auto">
                    <span className="text-pink-500 font-bold uppercase tracking-widest text-[10px] text-center">Standard Target Object</span>
                    <code className="text-center text-lg">{'{ name: "Karthick", age: 22 }'}</code>
                 </div>

                 <div className="flex flex-col gap-4 mt-6 w-full">
                     <div className="bg-black/50 border border-gray-800 p-5 rounded-2xl flex items-center gap-6 w-full">
                        <span className="text-gray-500 font-bold font-mono uppercase tracking-widest w-24">Keys →</span>
                        <code className="text-sky-300 font-mono">["name", "age"]</code>
                     </div>
                     <div className="bg-black/50 border border-gray-800 p-5 rounded-2xl flex items-center gap-6 w-full">
                        <span className="text-gray-500 font-bold font-mono uppercase tracking-widest w-24">Values →</span>
                        <code className="text-amber-300 font-mono">["Karthick", 22]</code>
                     </div>
                     <div className="bg-black/50 border border-gray-800 p-5 rounded-2xl flex items-center gap-6 w-full">
                        <span className="text-pink-500 font-bold font-mono uppercase tracking-widest w-24">Entries →</span>
                        <code className="text-emerald-300 font-mono">[["name", "Karthick"], ["age", 22]]</code>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* ── Section 3: The 5 Iteration Syntaxes ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><ListOrdered size={300} className="text-violet-500"/></div>
            
            <SectionHeader icon={ListOrdered} title="3. How to Iterate" subtitle="The 5 Extraction Methods" color="text-violet-500" />
            
            <div className="grid lg:grid-cols-2 gap-8 mt-10 relative z-10">
               
               {/* 3.1 for...in */}
               <div className="bg-white dark:bg-[#0d0914] p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-md flex flex-col">
                   <h4 className="font-black text-violet-600 dark:text-violet-400 text-lg mb-4 flex items-center gap-2"><Repeat size={18}/> 3.1 for...in Loop</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 The most basic, older method. It natively loops strictly through an object's Keys.</p>
                   <CodeBlock language="javascript" code={`const user = { name: "Karthick", age: 22 };\n\nfor (let key in user) {\n  console.log(key, user[key]);\n}\n// name Karthick\n// age 22`} />
               </div>

               {/* 3.2 Object.keys() */}
               <div className="bg-white dark:bg-[#0d0914] p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-md flex flex-col">
                   <h4 className="font-black text-sky-600 dark:text-sky-500 text-lg mb-4 flex items-center gap-2"><Key size={18}/> 3.2 Object.keys()</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Converts the keys into an Array, unlocking standard <code>forEach</code> array mapping.</p>
                   <CodeBlock language="javascript" code={`const user = { name: "Karthick", age: 22 };\n\nObject.keys(user).forEach(key => {\n  console.log(key, user[key]);\n});`} />
               </div>

               {/* 3.3 Object.values() */}
               <div className="bg-white dark:bg-[#0d0914] p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-md flex flex-col">
                   <h4 className="font-black text-amber-600 dark:text-amber-500 text-lg mb-4 flex items-center gap-2"><Box size={18}/> 3.3 Object.values()</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Skips the keys entirely and extracts only the target values directly into a loopable Array.</p>
                   <CodeBlock language="javascript" code={`Object.values(user).forEach(value => {\n  console.log(value);\n});`} />
               </div>

               {/* 3.5 for...of */}
               <div className="bg-white dark:bg-[#0d0914] p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-md flex flex-col">
                   <h4 className="font-black text-fuchsia-600 dark:text-fuchsia-500 text-lg mb-4 flex items-center gap-2"><ToggleRight size={18}/> 3.5 for...of with Entries</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 flex-1">👉 Pair the modern ES6 <code>for...of</code> array loop with destructured entries.</p>
                   <CodeBlock language="javascript" code={`for (let [key, value] of Object.entries(user)) {\n  console.log(key, value);\n}`} />
               </div>

               {/* 3.4 Object.entries() */}
               <div className="bg-pink-50 dark:bg-[#150711] p-8 rounded-3xl border border-pink-200 dark:border-pink-900 shadow-inner flex flex-col lg:col-span-2">
                   <div className="flex justify-between items-start mb-6">
                      <h4 className="font-black text-pink-600 dark:text-pink-500 text-xl flex items-center gap-2"><Layers size={20}/> 3.4 Object.entries()</h4>
                      <span className="bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-full border border-pink-200 dark:border-pink-800">The Absolute Best Method</span>
                   </div>
                   <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-6">👉 Returns an array of `[key, value]` pairings. It is the cleanest, most universally functional approach utilizing direct destructuring arrays inside the callback loop.</p>
                   <CodeBlock language="javascript" code={`Object.entries(user).forEach(([key, value]) => {\n  console.log(key, value);\n});`} />
               </div>

            </div>
         </div>
      </section>

      {/* ── Section 4: Real World Mini Project ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-1 gap-8 items-center">
         
         <div className="bg-[#12060b] p-10 md:p-14 border border-pink-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            
            <div className="absolute top-0 left-0 p-10 opacity-10"><Database size={300} className="text-pink-500"/></div>
            
            <div className="flex-1 w-full relative z-10">
               <SectionHeader icon={Terminal} title="4. Real-World Handling" subtitle="Dynamic Display of API User Output" color="text-pink-400" />
               <p className="text-gray-400 font-medium mb-6">Whenever you have an object where the amount of keys mapped is unknown, <code>Object.entries()</code> processes the exact count with native destructuring <code>[key, value]</code> variables safely.</p>
               <CodeBlock language="javascript" code={`const user = {\n  name: "Karthick",\n  age: 22,\n  role: "Developer"\n};\n\nObject.entries(user).forEach(([key, value]) => {\n  console.log(\`\${key}: \${value}\`);\n});`} />
            </div>

            <div className="w-full md:w-auto flex justify-center relative z-10">
                <div className="bg-[#240c15] p-8 rounded-3xl border border-pink-500/30 shadow-2xl shadow-pink-900/50 text-left min-w-[200px]">
                   <p className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-4 flex items-center justify-center gap-2 border-b border-pink-900/50 pb-2"><Eye size={14}/> Output Logs</p>
                   <p className="font-mono text-gray-300 font-bold text-sm my-2">name: Karthick</p>
                   <p className="font-mono text-gray-300 font-bold text-sm my-2">age: 22</p>
                   <p className="font-mono text-gray-300 font-bold text-sm my-2">role: Developer</p>
                </div>
            </div>
         </div>
         
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA ITERATION
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-pink-500/10 decoration-2">
          "Unlocking the ability to cleanly iterate across massive Objects using 'Object.entries()' bridges the gap between raw unstructured data fetching and building highly dynamic lists."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectIterations;