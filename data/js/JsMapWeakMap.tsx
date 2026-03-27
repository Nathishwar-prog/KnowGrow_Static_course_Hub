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
  Trash
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

// ─── Main Component ───────────────────────────────────────────────────────────

const JsMapWeakMap: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0a0f12] min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-slate-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 text-[10px] font-black mb-8 border border-cyan-100 dark:border-cyan-900/50 shadow-xl shadow-cyan-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Ghost size={14} className="fill-current" /> MEMORY SAFE STORAGE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Weak<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 drop-shadow-2xl">Map</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The invisible dictionary. Store object logic privately without breaking <span className="text-gray-900 dark:text-white font-bold underline decoration-cyan-500 underline-offset-4 tracking-tight">Garbage Collection</span>.
        </p>
      </header>

      {/* ── Section 1 & 2: What is it, Initialization ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-cyan-50 dark:bg-cyan-500/10 rounded-2xl text-cyan-500 w-max border border-cyan-100 dark:border-cyan-500/20 shadow-lg">
                 <ShieldCheck size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is WeakMap?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 A <code className="text-cyan-500 font-bold bg-cyan-50 dark:bg-cyan-900/30 px-2 py-0.5 rounded">WeakMap</code> is a special type of Map with strict memory rules:
                 </p>
                 <ul className="space-y-3 font-medium text-gray-600 dark:text-gray-300 mb-6 pl-2">
                     <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500"/> Keys must be <strong className="text-cyan-500">objects only</strong></li>
                     <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500"/> Keys are <strong className="text-cyan-400">weakly referenced</strong></li>
                     <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500"/> Automatically removed by <strong className="text-emerald-400 border-b border-emerald-400 border-dashed">Garbage Collection</strong></li>
                 </ul>
                 <div className="bg-slate-50 dark:bg-slate-500/5 p-5 rounded-2xl border border-slate-200 dark:border-slate-500/20">
                    <p className="font-bold text-slate-700 dark:text-slate-400 flex items-center gap-2 mb-2">
                       <Lightbulb size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       WeakMap = <span className="font-bold text-cyan-600 dark:text-cyan-400">memory-safe Map for objects</span>
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b1216] p-10 rounded-[3rem] border border-cyan-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Target size={150} className="text-cyan-500"/></div>
               <SectionHeader icon={Terminal} title="2. Creation" subtitle="Initialization." color="text-cyan-400" />
               <div className="relative z-10 w-full">
                  <CodeBlock code={`let weakMap = new WeakMap();`} />
                  <p className="text-cyan-300 text-sm font-medium mt-4 bg-cyan-900/30 p-3 rounded-lg border border-cyan-500/20 shadow-inner">
                     Instantiates a pristine WeakMap structure.
                  </p>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Basic Example & KEY RULE ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl text-left flex flex-col justify-center">
            <SectionHeader icon={Activity} title="3. Basic Example" subtitle="Mapping data to an object." color="text-cyan-500" />
            <div className="mt-4">
                <CodeBlock code={`let user = { name: "Karthick" };\n\nlet weakMap = new WeakMap();\n\nweakMap.set(user, "User Data");\n\nconsole.log(weakMap.get(user)); // User Data`} />
            </div>
         </div>

         <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-500/20 p-10 rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-10 opacity-5"><AlertOctagon size={250} className="text-rose-500"/></div>
             <div className="relative z-10 w-full">
                 <SectionHeader icon={AlertTriangle} title="4. Key Rule" subtitle="(VERY IMPORTANT)" color="text-rose-500" />
                 <CodeBlock code={`// ❌ Passing a primitive String\nweakMap.set("name", "Karthick");\n\n// Uncaught TypeError: Invalid value used as weak map key`} />
                 <div className="mt-6 bg-rose-500/10 p-5 rounded-2xl border border-rose-500/30 font-bold text-rose-700 dark:text-rose-400 text-center text-lg shadow-inner">
                    👉 Keys must be Objects <strong className="uppercase">Only</strong>.
                 </div>
             </div>
         </div>
      </section>

      {/* ── Section 9 & 5: The Problem & Garbage Collection ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-[#0b1216] to-[#04080a] p-10 md:p-14 border border-emerald-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Trash size={250} className="text-emerald-500"/></div>
            
            <SectionHeader icon={Trash} title="9. Why WeakMap Exists?" subtitle="Solving the memory leak." color="text-emerald-400" />
            
            <div className="grid md:grid-cols-2 gap-10 relative z-10 mt-8">
               <div className="bg-rose-950/20 p-8 rounded-3xl border border-rose-500/20">
                  <h4 className="font-black text-rose-400 mb-4 flex items-center gap-2"><span className="text-xl">❌</span> Problem with normal Map</h4>
                  <CodeBlock code={`let map = new Map();\nlet obj = {};\n\nmap.set(obj, "data");\n\nobj = null; // Removing object reference`} />
                  <div className="bg-rose-900/40 p-4 rounded-xl text-sm font-medium text-rose-300 border border-rose-500/30">
                      Even though <code>obj = null</code>, the standard <code>Map</code> is holding onto it tightly. <strong>It stays in memory forever.</strong> (Memory leak)
                  </div>
               </div>

               <div className="bg-emerald-950/30 p-8 rounded-3xl border border-emerald-500/20">
                  <h4 className="font-black text-emerald-400 mb-4 flex items-center gap-2"><span className="text-xl">✅</span> Solution with WeakMap</h4>
                  <CodeBlock code={`let weakMap = new WeakMap();\nlet obj = {};\n\nweakMap.set(obj, "data");\n\nobj = null; // Removing object reference`} />
                  <div className="bg-emerald-900/40 p-4 rounded-xl text-sm font-medium text-emerald-300 border border-emerald-500/30">
                      The WeakMap checks if <code>obj</code> is still needed. Since it isn't, Garbage Collection <strong>automatically deletes the entry</strong>. (Memory freed) 🔥
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6 & 7: Map vs WeakMap Table & Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 grid md:grid-cols-12 gap-8">
         <div className="md:col-span-7 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Scale} title="6. Map vs WeakMap" color="text-cyan-500" />
            
            <table className="w-full text-left text-sm mt-4">
               <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                     <th className="p-4 font-black text-slate-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Feature</th>
                     <th className="p-4 font-black text-indigo-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">Map</th>
                     <th className="p-4 font-black text-cyan-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">WeakMap</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-4 font-bold text-gray-900 dark:text-white">Key Types</td>
                     <td className="p-4 border-l text-center font-bold">Any</td>
                     <td className="p-4 border-l text-center text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-50/50 dark:bg-cyan-900/10">Only objects</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-4 font-bold text-gray-900 dark:text-white">Garbage Collection</td>
                     <td className="p-4 border-l text-center text-rose-500">❌ No</td>
                     <td className="p-4 border-l text-center text-emerald-500 font-bold bg-cyan-50/50 dark:bg-cyan-900/10">✅ Yes</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-4 font-bold text-gray-900 dark:text-white">Iterable</td>
                     <td className="p-4 border-l text-center text-emerald-500 font-bold">✅ Yes</td>
                     <td className="p-4 border-l text-center text-rose-500 bg-cyan-50/50 dark:bg-cyan-900/10">❌ No</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-4 font-bold text-gray-900 dark:text-white">Size Property</td>
                     <td className="p-4 border-l text-center text-emerald-500 font-bold">✅ Yes</td>
                     <td className="p-4 border-l text-center text-rose-500 bg-cyan-50/50 dark:bg-cyan-900/10">❌ No</td>
                  </tr>
               </tbody>
            </table>
         </div>

         <div className="md:col-span-5 bg-[#0b1216] border border-cyan-500/20 p-10 rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Layers size={250} className="text-cyan-500"/></div>
            <div className="relative z-10 w-full">
               <SectionHeader icon={Terminal} title="7. WeakMap Methods" subtitle="Strictly limited." color="text-cyan-400" />
               
               <p className="text-gray-400 font-medium mb-4 text-sm mt-4">👉 Only <strong className="text-white">4 methods</strong> available:</p>
               <div className="bg-black/30 p-4 rounded-xl border border-cyan-500/10 w-full font-mono text-sm text-cyan-300 space-y-2 mb-6">
                  <div><PlusSquare size={14} className="inline mr-2 text-cyan-500"/>weakMap.set(key, val)</div>
                  <div><Eye size={14} className="inline mr-2 text-blue-500"/>weakMap.get(key)</div>
                  <div><HelpCircle size={14} className="inline mr-2 text-amber-500"/>weakMap.has(key)</div>
                  <div><MinusSquare size={14} className="inline mr-2 text-rose-500"/>weakMap.delete(key)</div>
               </div>

               <p className="text-rose-400 font-medium mb-3 text-sm">👉 <strong>NOT</strong> Available:</p>
               <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="bg-rose-950 text-rose-300 px-3 py-1.5 rounded-full border border-rose-500/30 line-through">.size</span>
                  <span className="bg-rose-950 text-rose-300 px-3 py-1.5 rounded-full border border-rose-500/30 line-through">.clear()</span>
                  <span className="bg-rose-950 text-rose-300 px-3 py-1.5 rounded-full border border-rose-500/30 line-through">iteration (for..of)</span>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Network size={250} className="text-emerald-500"/></div>
            
            <SectionHeader icon={Network} title="8. Real-World Use Cases" subtitle="Where this becomes extremely useful." color="text-emerald-500" />
            
            <div className="grid lg:grid-cols-3 gap-8 mt-10 relative z-10 w-full">
               {/* Private Data */}
               <div className="bg-slate-50 dark:bg-black/30 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4"><span className="text-emerald-500">🟢</span> 1. Private Data Storage</h4>
                  <CodeBlock code={`const privateData = new WeakMap();\n\nclass User {\n  constructor(name) {\n    privateData.set(this, { name });\n  }\n  getName() {\n    return privateData.get(this).name;\n  }\n}`} />
                  <p className="font-bold text-emerald-600 dark:text-emerald-400 mt-auto flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg"><Lock size={16}/> Data is hidden safely.</p>
               </div>

               {/* DOM Element Tracking */}
               <div className="bg-slate-50 dark:bg-black/30 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4"><span className="text-blue-500">🔵</span> 2. DOM Element Tracking</h4>
                  <CodeBlock code={`let wm = new WeakMap();\nlet btn = document.getElementById("btn");\n\nwm.set(btn, "Clicked");\n\nbtn = null; // clicked state is auto-deleted!`} />
                  <p className="font-bold text-blue-600 dark:text-blue-400 mt-auto flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg"><Ghost size={16}/> Removes listeners when deleted.</p>
               </div>

               {/* Memory Optimization */}
               <div className="bg-slate-50 dark:bg-black/30 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4"><span className="text-rose-500">🔴</span> 3. Memory Optimization</h4>
                  <div className="flex-1 mb-6 text-gray-600 dark:text-gray-300 font-medium">
                      👉 Useful when working with scaling architecture:
                  </div>
                  <ul className="space-y-3 font-medium text-gray-600 dark:text-gray-400 mt-auto">
                     <li className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Large Single-Page Apps</li>
                     <li className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Highly dynamic objects</li>
                     <li className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Caching system storage</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          GHOST IN THE MACHINE
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-cyan-500/10 decoration-2">
          "A WeakMap lets you attach metadata to objects without interfering with the browser's garbage collection cycle. It ensures your memory stays clean, automatically sweeping up data when it's no longer attached to anything real."
        </p>
      </footer>

    </div>
  );
};

export default JsMapWeakMap;