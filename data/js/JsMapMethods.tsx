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
  HelpCircle
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-violet-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsMapMethods: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0b0714] min-h-screen font-sans selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-violet-600 dark:text-violet-400 text-[10px] font-black mb-8 border border-violet-100 dark:border-violet-900/50 shadow-xl shadow-violet-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <MapIcon size={14} className="fill-current" /> KEY-VALUE COLLECTIONS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Map <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-500 to-blue-500 drop-shadow-2xl">
            Methods
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The ultimate data dictionary. Create, query, and manage <span className="text-gray-900 dark:text-white font-bold underline decoration-violet-500 underline-offset-4 tracking-tight">ordered key-value pairs</span> effortlessly.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Creating ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-violet-50 dark:bg-violet-500/10 rounded-2xl text-violet-500 w-max border border-violet-100 dark:border-violet-500/20 shadow-lg">
                 <Database size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is a Map?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 A <code className="text-violet-500 font-bold bg-violet-50 dark:bg-violet-900/30 px-2 py-0.5 rounded">Map</code> is a collection of key-value pairs where:
                 </p>
                 <ul className="space-y-3 font-medium text-gray-600 dark:text-gray-300 mb-6 pl-2">
                     <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500"/> Keys can be <strong className="text-violet-500">any data type</strong> (not just strings)</li>
                     <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500"/> Maintains <strong className="text-indigo-400">insertion order</strong></li>
                 </ul>
                 <div className="bg-indigo-50 dark:bg-indigo-500/5 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-500/20">
                    <p className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-2 mb-2">
                       <Lightbulb size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       Map = <span className="font-bold text-indigo-600 dark:text-indigo-400">advanced object for storing data</span>.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b101c] p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Box size={150} className="text-indigo-500"/></div>
               <SectionHeader icon={Terminal} title="2. Creating a Map" subtitle="Initialization." color="text-indigo-400" />
               <div className="relative z-10">
                  <CodeBlock code={`let map = new Map();`} />
                  <p className="text-indigo-300 text-sm font-medium mt-4 bg-indigo-900/30 p-3 rounded-lg border border-indigo-500/20 shadow-inner">
                     Instantiates a fresh, empty Map structure ready for use.
                  </p>
               </div>
           </div>
        </div>
      </section>

      {/* ── Core Manipulation Grid ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
            <Settings className="text-violet-500" size={40} /> Core Operations
            </h2>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* 3. SET */}
             <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
                 <h4 className="font-black text-emerald-500 flex items-center gap-2 text-xl mb-2"><PlusSquare size={24}/> 3. set()</h4>
                 <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">👉 Adds key-value pairs</p>
                 <CodeBlock code={`map.set("name", "Karthick");\nmap.set(1, "Number key");`} />
             </div>

             {/* 4. GET */}
             <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
                 <h4 className="font-black text-blue-500 flex items-center gap-2 text-xl mb-2"><Eye size={24}/> 4. get()</h4>
                 <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">👉 Retrieves values by key</p>
                 <CodeBlock code={`console.log(map.get("name"));\n// Karthick`} />
             </div>

             {/* 5. HAS */}
             <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
                 <h4 className="font-black text-fuchsia-500 flex items-center gap-2 text-xl mb-2"><HelpCircle size={24}/> 5. has()</h4>
                 <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">👉 Checks if key exists</p>
                 <CodeBlock code={`console.log(map.has("name"));\n// true`} />
             </div>

             {/* 6. DELETE */}
             <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
                 <h4 className="font-black text-rose-500 flex items-center gap-2 text-xl mb-2"><MinusSquare size={24}/> 6. delete()</h4>
                 <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">👉 Removes specific key</p>
                 <CodeBlock code={`map.delete("name");`} />
             </div>

             {/* 7. CLEAR */}
             <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
                 <h4 className="font-black text-red-500 flex items-center gap-2 text-xl mb-2"><Trash2 size={24}/> 7. clear()</h4>
                 <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">👉 Wipes entire map</p>
                 <CodeBlock code={`map.clear();`} />
             </div>

             {/* 8. SIZE */}
             <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
                 <h4 className="font-black text-sky-500 flex items-center gap-2 text-xl mb-2"><Maximize size={24}/> 8. size</h4>
                 <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">👉 Returns total element count</p>
                 <CodeBlock code={`console.log(map.size);`} />
             </div>
         </div>
      </section>

      {/* ── Section 9: Iteration ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-blue-900/20 to-[#0b101c] p-10 md:p-14 border border-blue-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><RefreshCw size={250} className="text-blue-500"/></div>
            
            <SectionHeader icon={RefreshCw} title="9. Iterating a Map" color="text-blue-400" />
            
            <div className="grid md:grid-cols-2 gap-10 relative z-10 mt-8">
               <div className="bg-sky-950/30 p-8 rounded-3xl border border-sky-500/20">
                  <h4 className="font-black text-sky-400 mb-4 flex items-center gap-2"><span className="text-xl">🟢</span> Using for...of</h4>
                  <CodeBlock code={`let map = new Map([\n    ["name", "Karthick"],\n    ["age", 21]\n]);\n\nfor (let [key, value] of map) {\n    console.log(key, value);\n}`} />
               </div>

               <div className="bg-indigo-950/30 p-8 rounded-3xl border border-indigo-500/20">
                  <h4 className="font-black text-indigo-400 mb-4 flex items-center gap-2"><span className="text-xl">🔵</span> Using forEach()</h4>
                  <CodeBlock code={`map.forEach((value, key) => {\n    console.log(key, value);\n});`} />
                  <p className="text-xs text-indigo-300 bg-black/40 p-3 rounded-xl mt-4 border border-indigo-500/20">Note callback order: <code className="font-bold">value, key</code></p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 10: Special Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8">
         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-4">
               <span className="bg-amber-50 dark:bg-amber-500/20 text-amber-500 p-2 rounded-xl"><Key size={20}/></span> 10. keys()
            </h3>
            <CodeBlock code={`for (let key of map.keys()) {\n    console.log(key);\n}`} />
            <p className="text-gray-500 font-medium text-sm mt-auto text-center border-t border-gray-100 dark:border-gray-700 pt-4">Extracts only the keys array.</p>
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-4">
               <span className="bg-emerald-50 dark:bg-emerald-500/20 text-emerald-500 p-2 rounded-xl"><Database size={20}/></span> 10. values()
            </h3>
            <CodeBlock code={`for (let val of map.values()) {\n    console.log(val);\n}`} />
            <p className="text-gray-500 font-medium text-sm mt-auto text-center border-t border-gray-100 dark:border-gray-700 pt-4">Extracts only the values array.</p>
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-4">
               <span className="bg-purple-50 dark:bg-purple-500/20 text-purple-500 p-2 rounded-xl"><Layers size={20}/></span> 10. entries()
            </h3>
            <CodeBlock code={`for (let entry of map.entries()){\n    console.log(entry);\n}`} />
            <p className="text-gray-500 font-medium text-sm mt-auto text-center border-t border-gray-100 dark:border-gray-700 pt-4">Extracts <code>[key, value]</code> arrays.</p>
         </div>
      </section>

      {/* ── Section 11: Map vs Object Table ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Scale} title="11. Map vs Object" color="text-violet-500" />
            
            <table className="w-full text-left text-sm mt-4">
               <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                     <th className="p-6 font-black text-violet-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Feature</th>
                     <th className="p-6 font-black text-indigo-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">Map</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">Object</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Key types</td>
                     <td className="p-6 border-l text-center text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50/50 dark:bg-indigo-900/10">Any</td>
                     <td className="p-6 border-l text-center text-gray-500">String/Symbol</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Order</td>
                     <td className="p-6 border-l text-center text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10">Maintained</td>
                     <td className="p-6 border-l text-center text-rose-500">Not guaranteed</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Performance</td>
                     <td className="p-6 border-l text-center text-emerald-500 font-bold">Faster</td>
                     <td className="p-6 border-l text-center text-amber-500">Slower</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>

      {/* ── Section 12 & 13: Real World & Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl text-left flex flex-col justify-center">
            <SectionHeader icon={LogIn} title="12. Real-World" subtitle="User Data Storage" color="text-indigo-500" />
            <div className="mt-4">
                <CodeBlock code={`let user = new Map();\n\nuser.set("username", "admin");\nuser.set("role", "developer");\n\nconsole.log(user.get("username"));`} />
            </div>
         </div>

         <div className="bg-[#0b0c1c] border border-blue-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Network} title="13. Common Use Cases" color="text-blue-400" />
            
            <div className="mt-8 space-y-6">
               <div className="bg-black/20 p-5 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                  <h4 className="font-black text-blue-400 text-lg flex items-center gap-2 mb-2"><Activity size={20}/> Data Mapping</h4>
                  <p className="text-gray-300 font-medium">Linking arbitrary sets of data (like DOM elements to application state).</p>
               </div>
               
               <div className="bg-black/20 p-5 rounded-2xl border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
                  <h4 className="font-black text-indigo-400 text-lg flex items-center gap-2 mb-2"><Settings size={20}/> Caching</h4>
                  <p className="text-gray-300 font-medium">Temporarily caching results of expensive operations mapped to specific inputs (keys).</p>
               </div>
               
               <div className="bg-black/20 p-5 rounded-2xl border border-violet-500/10 hover:border-violet-500/30 transition-colors">
                  <h4 className="font-black text-violet-400 text-lg flex items-center gap-2 mb-2"><Layers size={20}/> Configuration Storage</h4>
                  <p className="text-gray-300 font-medium">Holding complex app configuration rules mapping settings to logic.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          ADVANCED STORAGE
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-violet-500/10 decoration-2">
          "Maps introduce rigorous structure to key-value storage. By allowing any data type to act as a key, Maps unlock incredibly powerful data mapping capabilities."
        </p>
      </footer>

    </div>
  );
};

export default JsMapMethods;