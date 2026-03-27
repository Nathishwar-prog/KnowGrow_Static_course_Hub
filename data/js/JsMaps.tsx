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
  ShoppingCart
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

const JsMaps: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#070514] min-h-screen font-sans selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-violet-600 dark:text-violet-400 text-[10px] font-black mb-8 border border-violet-100 dark:border-violet-900/50 shadow-xl shadow-violet-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Database size={14} className="fill-current" /> DATA STRUCTURES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 drop-shadow-2xl">
            Maps
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The flexible key-value storage. Upgrade from objects to <span className="text-gray-900 dark:text-white font-bold underline decoration-violet-500 underline-offset-4 tracking-tight">high-performance</span>, strictly ordered data dictionaries.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-violet-50 dark:bg-violet-500/10 rounded-2xl text-violet-500 w-max border border-violet-100 dark:border-violet-500/20 shadow-lg">
                 <Package size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is a Map?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 A <code className="text-violet-500 font-bold bg-violet-50 dark:bg-violet-900/30 px-2 py-0.5 rounded">Map</code> is a built-in object used to store key–value pairs.
                 </p>
                 <div className="bg-purple-50 dark:bg-purple-500/5 p-5 rounded-2xl border border-purple-200 dark:border-purple-500/20">
                    <p className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-2 mb-2">
                       <Lightbulb size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       Map = <span className="font-bold text-purple-600 dark:text-purple-400">flexible key-value storage with any data type as key.</span>
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#120a22] p-10 rounded-[3rem] border border-violet-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Settings size={150} className="text-violet-500"/></div>
               <SectionHeader icon={Target} title="2. Why Map is Important?" subtitle="Compared to objects." color="text-violet-400" />
               <ul className="space-y-4 font-medium text-gray-300 relative z-10 mt-4">
                   <li className="flex items-start gap-3"><span className="text-emerald-500 mt-0.5">🟢</span> Keys can be <strong className="text-violet-400 px-1">any type</strong> (number, object, function).</li>
                   <li className="flex items-start gap-3"><span className="text-emerald-500 mt-0.5">🟢</span> Maintains absolute <strong className="text-fuchsia-400 px-1">insertion order</strong>.</li>
                   <li className="flex items-start gap-3"><span className="text-emerald-500 mt-0.5">🟢</span> Much <strong className="text-emerald-400 px-1">better performance</strong> for large datasets.</li>
               </ul>
           </div>
        </div>
      </section>

      {/* ── Section 3-8: Core API Grid ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 hidden lg:block"><Database size={250} className="text-violet-500"/></div>
            
            <SectionHeader icon={Terminal} title="Core API" subtitle="Create, Read, Update, Delete." color="text-violet-500" />
            
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 relative z-10 w-full">
               {/* Create */}
               <div className="bg-gray-50 dark:bg-black/30 p-6 rounded-3xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-3"><span className="text-violet-500">⚡</span> 3. Creating a Map</h4>
                  <CodeBlock code={`let map = new Map();`} />
               </div>

               {/* Add */}
               <div className="bg-gray-50 dark:bg-black/30 p-6 rounded-3xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-3"><span className="text-emerald-500">➕</span> 4. Adding Data</h4>
                  <CodeBlock code={`map.set("name", "Karthick");\nmap.set(1, "Number");\nmap.set(true, "Bool");`} />
               </div>

               {/* Get */}
               <div className="bg-gray-50 dark:bg-black/30 p-6 rounded-3xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-3"><span className="text-blue-500">🔍</span> 5. Getting Data</h4>
                  <CodeBlock code={`console.log(\n  map.get("name")\n); // Karthick`} />
               </div>

               {/* Has */}
               <div className="bg-gray-50 dark:bg-black/30 p-6 rounded-3xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-3"><span className="text-amber-500">❓</span> 6. Checking Key</h4>
                  <CodeBlock code={`map.has("name");\n// true`} />
               </div>

               {/* Remove */}
               <div className="bg-gray-50 dark:bg-black/30 p-6 rounded-3xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-3"><span className="text-rose-500">❌</span> 7. Removing Data</h4>
                  <CodeBlock code={`map.delete("name");\nmap.clear(); // all`} />
               </div>

               {/* Size */}
               <div className="bg-gray-50 dark:bg-black/30 p-6 rounded-3xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-3"><span className="text-sky-500">📏</span> 8. Map Size</h4>
                  <CodeBlock code={`console.log(\n  map.size\n);`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9 & 10: Iteration & Extraction ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-7 bg-[#120a22] p-10 border border-violet-500/20 rounded-[3rem] shadow-xl">
            <SectionHeader icon={RefreshCw} title="9. Iterating Map" color="text-violet-400" />
            
            <div className="grid sm:grid-cols-2 gap-8 mt-8">
               <div className="space-y-4">
                  <h4 className="font-black text-fuchsia-400 flex items-center gap-2"><span className="text-lg">🟢</span> for...of</h4>
                  <CodeBlock code={`let map = new Map([\n  ["name", "Karthick"],\n  ["age", 21]\n]);\n\nfor (let [k, v] of map) {\n  console.log(k, v);\n}`} />
               </div>

               <div className="space-y-4">
                  <h4 className="font-black text-blue-400 flex items-center gap-2"><span className="text-lg">🔵</span> forEach()</h4>
                  <CodeBlock code={`map.forEach((v, k) => {\n  console.log(k, v);\n});`} />
               </div>
            </div>
         </div>

         <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Layers} title="10. Special Methods" color="text-indigo-500" />
            <div className="space-y-4 mt-4 text-sm font-mono border-l-2 border-indigo-500 pl-4">
               <div>
                   <span className="font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2"><Key size={14}/> Keys</span>
                   <code className="text-gray-500 bg-gray-50 dark:bg-gray-900/50 block p-2 rounded">for (let k of map.keys())</code>
               </div>
               <div>
                   <span className="font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2"><Package size={14}/> Values</span>
                   <code className="text-gray-500 bg-gray-50 dark:bg-gray-900/50 block p-2 rounded">for (let v of map.values())</code>
               </div>
               <div>
                   <span className="font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2"><Link size={14}/> Entries</span>
                   <code className="text-gray-500 bg-gray-50 dark:bg-gray-900/50 block p-2 rounded">for (let e of map.entries())</code>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 11: Map vs Object Table ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 border bg-[#fafafa] dark:bg-[#121212] p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Scale size={200} className="text-indigo-500"/></div>
            <SectionHeader icon={Scale} title="11. Map vs Object" subtitle="(Important Details)" color="text-indigo-500" />
            
            <div className="relative z-10 mt-8 overflow-x-auto">
               <table className="w-full text-left text-sm">
                  <thead>
                     <tr className="bg-indigo-50 dark:bg-indigo-900/20">
                        <th className="p-4 rounded-tl-xl font-black text-indigo-700 dark:text-indigo-400 uppercase tracking-widest border-b border-indigo-100 dark:border-indigo-800">Feature</th>
                        <th className="p-4 font-black text-violet-700 dark:text-violet-400 uppercase tracking-widest border-b border-indigo-100 dark:border-indigo-800 border-l text-center">Map</th>
                        <th className="p-4 rounded-tr-xl font-black text-gray-700 dark:text-gray-400 uppercase tracking-widest border-b border-indigo-100 dark:border-indigo-800 border-l text-center">Object</th>
                     </tr>
                  </thead>
                  <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-b-xl shadow-sm block w-full table-row-group">
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-bold text-gray-900 dark:text-white border-l border-gray-100 dark:border-gray-800 rounded-bl-xl">Key Type</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 text-center text-violet-600 dark:text-violet-400 font-bold bg-violet-50/30 dark:bg-violet-900/10">Any</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 border-r text-center font-bold text-gray-500">String/Symbol</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-bold text-gray-900 dark:text-white border-l border-gray-100 dark:border-gray-800">Order</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 text-center text-violet-600 dark:text-violet-400 bg-violet-50/30 dark:bg-violet-900/10">Maintained</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 border-r text-center text-rose-500">Not guaranteed</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-bold text-gray-900 dark:text-white border-l border-gray-100 dark:border-gray-800">Iteration</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 text-center text-emerald-600 dark:text-emerald-400 font-bold">Easy</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 border-r text-center text-orange-500 font-bold">Limited</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-5 font-bold text-gray-900 dark:text-white border-l border-gray-100 dark:border-gray-800 border-b rounded-bl-xl">Performance</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 border-b text-center text-emerald-600 dark:text-emerald-400 font-bold">Faster (large data)</td>
                        <td className="p-5 border-l border-gray-100 dark:border-gray-800 border-b border-r text-center text-rose-500">Slower</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 12 & 13: Real World & Advanced ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl text-left flex flex-col justify-center">
            <SectionHeader icon={ShoppingCart} title="12. Real-World Example" subtitle="Product Price Store" color="text-emerald-500" />
            <div className="mt-4">
                <CodeBlock code={`let products = new Map();\n\nproducts.set("Laptop", 50000);\nproducts.set("Mobile", 20000);\n\nconsole.log(products.get("Laptop"));`} />
            </div>
         </div>

         <div className="bg-[#120a22] border border-violet-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Activity} title="13. Advanced Usage" color="text-violet-400" />
            <div className="space-y-4 font-mono text-sm mt-8 w-full">
               {/* Chaining */}
               <div className="bg-black/30 p-4 rounded-xl border border-violet-500/10 w-full overflow-hidden">
                  <span className="text-gray-500 font-sans font-bold text-xs uppercase tracking-widest block mb-2"><Link size={14} className="inline mr-1"/> Method Chaining</span>
                  <code className="text-violet-300">map.set("a", 1).set("b", 2);</code>
               </div>

               {/* Map -> Array */}
               <div className="bg-black/30 p-4 rounded-xl border border-indigo-500/10 w-full overflow-hidden">
                  <span className="text-gray-500 font-sans font-bold text-xs uppercase tracking-widest block mb-2"><RefreshCw size={14} className="inline mr-1"/> Map → Array</span>
                  <code className="text-indigo-300">let arr = [...map];</code>
               </div>

               {/* Object -> Map */}
               <div className="bg-black/30 p-4 rounded-xl border border-blue-500/10 w-full overflow-hidden">
                  <span className="text-gray-500 font-sans font-bold text-xs uppercase tracking-widest block mb-2"><Repeat size={14} className="inline mr-1"/> Object → Map</span>
                  <code className="text-blue-300">let obj = {`{ a: 1, b: 2 }`};\nlet map = new Map(Object.entries(obj));</code>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA MASTERY
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-violet-500/10 decoration-2">
          "Maps represent the next evolution of key-value storage in JavaScript, giving developers the strict order, flexible keys, and high-speed iteration that plain objects lack."
        </p>
      </footer>

    </div>
  );
};

export default JsMaps;