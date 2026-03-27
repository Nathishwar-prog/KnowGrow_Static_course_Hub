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
  Bookmark
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

// ─── Main Component ───────────────────────────────────────────────────────────

const JsMapRef: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#060714] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Bookmark size={14} className="fill-current" /> QUICK CHEATSHEET
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Map <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 drop-shadow-2xl">
            Reference
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The all-in-one cheat sheet. A <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-4 tracking-tight">high-density overview</span> of object iteration, manipulation, and advanced Map mechanics.
        </p>
      </header>

      {/* ── Section 1, 2, 3: Recap & Initialization ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full w-full">
               <SectionHeader icon={Info} title="1. Map Recap" color="text-indigo-500" />
               <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                 👉 A Map is a built-in object that stores <strong className="text-indigo-500">key–value pairs</strong>.
               </p>
               <div className="bg-purple-50 dark:bg-purple-500/5 p-5 rounded-2xl border border-purple-200 dark:border-purple-500/20 w-full mt-4">
                  <p className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-2 mb-4">
                     <Lightbulb size={18}/> Key Features:
                  </p>
                  <ul className="space-y-3 font-medium text-gray-700 dark:text-gray-300 pl-2">
                     <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Keys can be any type</li>
                     <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Maintains insertion order</li>
                     <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Designed for performance and flexibility</li>
                  </ul>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-8 flex flex-col justify-center">
           <div className="bg-[#0b101c] p-10 rounded-[3rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-center">
               <SectionHeader icon={Terminal} title="2. Creation" color="text-indigo-400" />
               <CodeBlock code={`let map = new Map();`} />
           </div>
           
           <div className="bg-[#0b101c] p-10 rounded-[3rem] border border-pink-500/20 shadow-2xl relative overflow-hidden flex-[1.5] flex flex-col justify-center mt-8">
               <SectionHeader icon={Database} title="3. Initialize with Values" color="text-pink-400" />
               <CodeBlock code={`let map = new Map([\n    ["name", "Karthick"],\n    ["age", 21]\n]);`} />
           </div>
        </div>
      </section>

      {/* ── 4 & 5: Unified Core API Grid (Reference Style) ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 hidden lg:block"><BoxSelect size={250} className="text-indigo-500"/></div>
            
            <SectionHeader icon={Database} title="4. Core Methods Summary" subtitle="The absolute essentials." color="text-indigo-500" />
            
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 relative z-10 w-full">
               <div className="bg-gray-50 dark:bg-black/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-x-hidden">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-2 font-mono text-sm"><span className="text-emerald-500">🟢</span> set(key, value)</h4>
                  <p className="text-gray-500 text-xs font-medium mb-3">Add or update.</p>
                  <code className="text-[11px] text-gray-400">map.set("city", "Chennai");</code>
               </div>

               <div className="bg-gray-50 dark:bg-black/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-x-hidden">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-2 font-mono text-sm"><span className="text-blue-500">🔵</span> get(key)</h4>
                  <p className="text-gray-500 text-xs font-medium mb-3">Get value by key.</p>
                  <code className="text-[11px] text-gray-400">map.get("name"); // "Karthick"</code>
               </div>

               <div className="bg-gray-50 dark:bg-black/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-x-hidden">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-2 font-mono text-sm"><span className="text-amber-500">🟡</span> has(key)</h4>
                  <p className="text-gray-500 text-xs font-medium mb-3">Check if key exists.</p>
                  <code className="text-[11px] text-gray-400">map.has("age"); // true</code>
               </div>

               <div className="bg-gray-50 dark:bg-black/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-x-hidden">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-2 font-mono text-sm"><span className="text-rose-500">🔴</span> delete(key)</h4>
                  <p className="text-gray-500 text-xs font-medium mb-3">Remove key.</p>
                  <code className="text-[11px] text-gray-400">map.delete("age");</code>
               </div>

               <div className="bg-gray-50 dark:bg-black/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-x-hidden">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-2 font-mono text-sm"><span className="text-red-500">🧹</span> clear()</h4>
                  <p className="text-gray-500 text-xs font-medium mb-3">Remove all entries.</p>
                  <code className="text-[11px] text-gray-400">map.clear();</code>
               </div>

               <div className="bg-gray-50 dark:bg-black/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-x-hidden">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-2 font-mono text-sm"><span className="text-sky-500">📏</span> size</h4>
                  <p className="text-gray-500 text-xs font-medium mb-3">Get number of entries.</p>
                  <code className="text-[11px] text-gray-400">map.size; // 2</code>
               </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100 dark:bg-gray-700 my-10 relative z-10"></div>

            <SectionHeader icon={RefreshCw} title="5. Iteration Methods" subtitle="Looping through Maps." color="text-pink-500" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10 w-full">
                <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-2xl border border-pink-100 dark:border-pink-500/20 lg:col-span-2">
                    <h5 className="font-bold text-pink-600 dark:text-pink-400 mb-2 font-mono text-xs"><Repeat size={14} className="inline mr-1"/> for...of</h5>
                    <div className="bg-white dark:bg-[#0b101c] p-2 rounded text-[10px] font-mono text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
                        for(let [k, v] of map) {/* */}
                    </div>
                </div>

                <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-2xl border border-pink-100 dark:border-pink-500/20 lg:col-span-3">
                    <h5 className="font-bold text-pink-600 dark:text-pink-400 mb-2 font-mono text-xs"><Repeat size={14} className="inline mr-1"/> forEach()</h5>
                    <div className="bg-white dark:bg-[#0b101c] p-2 rounded text-[10px] font-mono text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800 overflow-x-auto">
                        map.forEach((value, key) =&gt; {/* */})
                    </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-2xl border border-purple-100 dark:border-purple-500/20">
                    <h5 className="font-bold text-purple-600 dark:text-purple-400 mb-2 font-mono text-xs"><Key size={14} className="inline mr-1"/> keys()</h5>
                    <div className="bg-white dark:bg-[#0b101c] p-2 rounded text-[10px] font-mono text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
                        for(let k of map.keys())
                    </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-2xl border border-purple-100 dark:border-purple-500/20 lg:col-span-2">
                    <h5 className="font-bold text-purple-600 dark:text-purple-400 mb-2 font-mono text-xs"><Package size={14} className="inline mr-1"/> values()</h5>
                    <div className="bg-white dark:bg-[#0b101c] p-2 rounded text-[10px] font-mono text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
                        for(let v of map.values())
                    </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-2xl border border-purple-100 dark:border-purple-500/20 lg:col-span-2">
                    <h5 className="font-bold text-purple-600 dark:text-purple-400 mb-2 font-mono text-xs"><Link size={14} className="inline mr-1"/> entries()</h5>
                    <div className="bg-white dark:bg-[#0b101c] p-2 rounded text-[10px] font-mono text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
                        for(let e of map.entries())
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* ── Section 6 & 7: Notes & Object Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-4 bg-[#0b101c] border border-blue-500/20 p-10 rounded-[3rem] shadow-xl flex flex-col justify-center">
             <SectionHeader icon={Info} title="6. Important Notes" color="text-sky-400" />
             <ul className="space-y-4 font-medium text-gray-300">
                 <li className="flex items-start gap-3"><CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5"/> Map preserves order perfectly.</li>
                 <li className="flex items-start gap-3"><CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5"/> Keys are compared by reference (for objects).</li>
                 <li className="flex items-start gap-3"><CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5"/> <strong className="text-sky-400 underline">Not</strong> the same as the Array <code className="bg-sky-900/50 px-1 rounded">.map()</code> method!</li>
             </ul>
         </div>

         <div className="lg:col-span-8 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
             <SectionHeader icon={Scale} title="7. Map vs Object" subtitle="Quick Reference" color="text-indigo-500" />
             <div className="overflow-x-auto w-full">
                 <table className="w-full text-left text-sm mt-4">
                    <thead>
                       <tr className="bg-gray-50 dark:bg-gray-900/50">
                          <th className="p-4 font-black text-indigo-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Feature</th>
                          <th className="p-4 font-black text-violet-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">Map</th>
                          <th className="p-4 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">Object</th>
                       </tr>
                    </thead>
                    <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                       <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                          <td className="p-4 font-bold text-gray-900 dark:text-white">Key Types</td>
                          <td className="p-4 border-l text-center text-violet-600 dark:text-violet-400 font-bold bg-violet-50/50 dark:bg-violet-900/10">Any</td>
                          <td className="p-4 border-l text-center font-bold text-gray-500">String/Symbol</td>
                       </tr>
                       <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                          <td className="p-4 font-bold text-gray-900 dark:text-white">Order</td>
                          <td className="p-4 border-l text-center text-violet-600 dark:text-violet-400 bg-violet-50/50 dark:bg-violet-900/10">Maintained</td>
                          <td className="p-4 border-l text-center text-rose-500">Not guaranteed</td>
                       </tr>
                       <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                          <td className="p-4 font-bold text-gray-900 dark:text-white">Iteration</td>
                          <td className="p-4 border-l text-center text-emerald-600 dark:text-emerald-400 font-bold">Easy</td>
                          <td className="p-4 border-l text-center text-orange-500 font-bold">Complex</td>
                       </tr>
                       <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                          <td className="p-4 font-bold text-gray-900 dark:text-white">Performance</td>
                          <td className="p-4 border-l text-center text-emerald-600 dark:text-emerald-400 font-bold">Better</td>
                          <td className="p-4 border-l text-center text-emerald-500">Good</td>
                       </tr>
                    </tbody>
                 </table>
             </div>
         </div>
      </section>

      {/* ── Section 8 & 9: Advanced Usage & Real-World ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-[#0b101c] border border-fuchsia-500/20 p-10 rounded-[3rem] shadow-xl w-full">
            <SectionHeader icon={Activity} title="8. Advanced Conversions" color="text-fuchsia-400" />
            
            <div className="space-y-4 font-mono text-sm mt-8 w-full">
               {/* Chaining */}
               <div className="bg-black/30 p-4 rounded-xl border border-fuchsia-500/10 w-full overflow-hidden">
                  <span className="text-gray-500 font-sans font-bold text-xs uppercase tracking-widest block mb-2"><Link size={14} className="inline mr-1"/> Chaining</span>
                  <code className="text-fuchsia-300">map.set("a", 1).set("b", 2);</code>
               </div>

               {/* Map -> Array */}
               <div className="bg-black/30 p-4 rounded-xl border border-blue-500/10 w-full overflow-hidden">
                  <span className="text-gray-500 font-sans font-bold text-xs uppercase tracking-widest block mb-2"><RefreshCw size={14} className="inline mr-1"/> Map → Array</span>
                  <code className="text-blue-300">let arr = [...map];</code>
               </div>

               {/* Object -> Map */}
               <div className="bg-black/30 p-4 rounded-xl border border-emerald-500/10 w-full overflow-hidden">
                  <span className="text-gray-500 font-sans font-bold text-xs uppercase tracking-widest block mb-2"><Repeat size={14} className="inline mr-1"/> Object → Map</span>
                  <code className="text-emerald-300">let map = new Map(Object.entries(obj));</code>
               </div>

               {/* Map -> Object */}
               <div className="bg-black/30 p-4 rounded-xl border border-amber-500/10 w-full overflow-hidden">
                  <span className="text-gray-500 font-sans font-bold text-xs uppercase tracking-widest block mb-2"><Repeat size={14} className="inline mr-1"/> Map → Object</span>
                  <code className="text-amber-300">let obj = Object.fromEntries(map);</code>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={LogIn} title="9. Real-World Example" subtitle="Cache System." color="text-indigo-500" />
            <div className="mt-8 w-full overflow-hidden">
                <CodeBlock code={`let cache = new Map();\n\nfunction getData(key) {\n    if (cache.has(key)) {\n        return cache.get(key);\n    }\n    \n    let data = "Fetched Data";\n    cache.set(key, data);\n    \n    return data;\n}`} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium text-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700 shadow-inner mt-2">
                Maps are perfect for caching because <code className="font-bold">.has()</code> lookups are extremely fast.
            </p>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          ELEVATED MAPPING
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-indigo-500/10 decoration-2">
          "The Map object bridges the gap between raw data storage and complex dictionary management, providing developers an ultra-performant API out of the box."
        </p>
      </footer>

    </div>
  );
};

export default JsMapRef;