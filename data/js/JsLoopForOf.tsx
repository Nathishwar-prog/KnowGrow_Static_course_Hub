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
  ListOrdered
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

// ─── Main Component ───────────────────────────────────────────────────────────

const JsLoopForOf: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#070b14] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <ListOrdered size={14} className="fill-current" /> ITERABLE VALUES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          for...of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-500 drop-shadow-2xl">
            Loop
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The modern way to iterate. Loop directly through the <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight">actual values</span> of arrays, strings, maps, and sets.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Syntax ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-500 w-max border border-blue-100 dark:border-blue-500/20 shadow-lg">
                 <Package size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is for...of Loop?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 The <code className="text-blue-500 font-bold bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded">for...of</code> loop is used to iterate over the <span className="font-bold text-blue-500">values</span> of iterable objects.
                 </p>
                 <div className="bg-sky-50 dark:bg-sky-500/5 p-5 rounded-2xl border border-sky-200 dark:border-sky-500/20">
                    <p className="font-bold text-sky-700 dark:text-sky-400 flex items-center gap-2 mb-2">
                       <Lightbulb size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       for...of = <span className="font-bold text-sky-600 dark:text-sky-400">loop through values (not keys)</span>
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b101c] p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Settings size={150} className="text-blue-500"/></div>
               <SectionHeader icon={Terminal} title="2. Syntax" subtitle="The blueprint." color="text-blue-400" />
               <div className="relative z-10">
                  <CodeBlock code={`for (let value of iterable) {\n    // code to execute\n}`} />
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: What are iterables + 6: Diff Table ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-indigo-900/20 to-gray-900 p-10 border border-indigo-500/20 rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute right-0 bottom-0 opacity-5 p-4"><Box size={200} className="text-indigo-500"/></div>
            <SectionHeader icon={Layers} title="3. What are Iterables?" color="text-indigo-400" />
            <p className="text-gray-300 font-medium mb-6 relative z-10">👉 Objects that can be looped over sequentially:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 relative z-10 font-bold text-indigo-300 text-sm">
               <div className="bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/30 flex items-center justify-between">Arrays <CheckCircle size={14} className="text-emerald-400"/></div>
               <div className="bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/30 flex items-center justify-between">Strings <CheckCircle size={14} className="text-emerald-400"/></div>
               <div className="bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/30 flex items-center justify-between">Maps <CheckCircle size={14} className="text-emerald-400"/></div>
               <div className="bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/30 flex items-center justify-between">Sets <CheckCircle size={14} className="text-emerald-400"/></div>
               <div className="bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/30 flex items-center justify-between">Generators <CheckCircle size={14} className="text-emerald-400"/></div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Scale} title="6. for...of vs for...in" color="text-sky-500" />
            
            <table className="w-full text-left text-sm mt-4">
               <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                     <th className="p-4 font-black text-sky-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Feature</th>
                     <th className="p-4 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">of</th>
                     <th className="p-4 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">in</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-4 font-bold text-gray-900 dark:text-white">Iterates</td>
                     <td className="p-4 border-l text-center text-blue-600 dark:text-blue-400 font-bold bg-blue-50/50 dark:bg-blue-900/10">Values</td>
                     <td className="p-4 border-l text-center text-fuchsia-600 dark:text-fuchsia-400 font-bold bg-fuchsia-50/50 dark:bg-fuchsia-900/10">Keys</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-4 font-bold text-gray-900 dark:text-white">Used for</td>
                     <td className="p-4 border-l text-center text-gray-600 dark:text-gray-400">Arrays, Strings</td>
                     <td className="p-4 border-l text-center text-gray-600 dark:text-gray-400">Objects</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-4 font-bold text-gray-900 dark:text-white">Output</td>
                     <td className="p-4 border-l text-center text-gray-600 dark:text-gray-400 text-xs">Actual values</td>
                     <td className="p-4 border-l text-center text-gray-600 dark:text-gray-400 text-xs">Index / property</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>

      {/* ── Section 4, 5, 7: Core Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8">
         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-4">
               <span className="bg-sky-50 dark:bg-sky-500/20 text-sky-500 p-2 rounded-xl"><Layers size={20}/></span> 4. Example (Array)
            </h3>
            <CodeBlock code={`let numbers = [10, 20, 30];\n\nfor (let num of numbers) {\n    console.log(num);\n}`} />
            <div className="mt-auto bg-gray-50 dark:bg-black/40 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
               <p className="font-mono text-xs uppercase tracking-widest text-sky-500 mb-2">Output</p>
               <div className="font-mono text-sm text-gray-600 dark:text-gray-300 space-y-1"><div>10</div><div>20</div><div>30</div></div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-4">
               <span className="bg-indigo-50 dark:bg-indigo-500/20 text-indigo-500 p-2 rounded-xl"><Hash size={20}/></span> 5. Example (String)
            </h3>
            <CodeBlock code={`let text = "JS";\n\nfor (let char of text) {\n    console.log(char);\n}`} />
            <div className="mt-auto bg-gray-50 dark:bg-black/40 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
               <p className="font-mono text-xs uppercase tracking-widest text-indigo-500 mb-2">Output</p>
               <div className="font-mono text-sm text-gray-600 dark:text-gray-300 space-y-1"><div>J</div><div>S</div></div>
            </div>
         </div>

         <div className="bg-blue-900/20 p-8 border border-blue-500/20 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-xl font-black text-white flex items-center gap-3 mb-4">
               <span className="bg-blue-500/20 text-blue-400 p-2 rounded-xl"><RefreshCw size={20}/></span> 7. Index + Value
            </h3>
            <p className="text-gray-400 font-medium text-sm mb-4">You can extract both by using <code className="bg-black/50 px-1 text-blue-300 rounded">.entries()</code>.</p>
            <CodeBlock code={`let arr = ["A", "B", "C"];\n\nfor (let [index, value] of arr.entries()) {\n    console.log(index, value);\n}`} />
            <div className="mt-auto bg-black/40 p-4 rounded-xl border border-blue-500/10">
               <p className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-2">Output</p>
               <div className="font-mono text-sm text-gray-300 space-y-1"><div>0 "A"</div><div>1 "B"</div><div>2 "C"</div></div>
            </div>
         </div>
      </section>

      {/* ── Section 9, 10, 11: Real-World Use Cases (Maps, Sets, Gens) ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#0b101c] border border-blue-500/20 p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Activity size={250} className="text-blue-500"/></div>
            
            <SectionHeader icon={Activity} title="Advanced Integrations" subtitle="Maps, Sets, and Generators." color="text-blue-400" />
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10 mt-8">
               <div className="space-y-4 bg-sky-950/20 border border-sky-500/20 p-6 rounded-3xl">
                  <h4 className="font-black text-sky-400 flex items-center gap-2"><MapIcon size={18}/> 9. Using Map</h4>
                  <CodeBlock code={`let map = new Map([\n    ["name", "Karthick"],\n    ["age", 21]\n]);\n\nfor (let [key, value] of map) {\n    console.log(key, value);\n}`} />
               </div>

               <div className="space-y-4 bg-emerald-950/20 border border-emerald-500/20 p-6 rounded-3xl">
                  <h4 className="font-black text-emerald-400 flex items-center gap-2"><Target size={18}/> 10. Using Set</h4>
                  <CodeBlock code={`let set = new Set([1, 2, 3]);\n\nfor (let val of set) {\n    console.log(val);\n}`} />
               </div>

               <div className="space-y-4 bg-fuchsia-950/20 border border-fuchsia-500/20 p-6 rounded-3xl">
                  <h4 className="font-black text-fuchsia-400 flex items-center gap-2"><Zap size={18}/> 11. Generators</h4>
                  <CodeBlock code={`function* gen() {\n    yield 1;\n    yield 2;\n}\n\nfor (let val of gen()) {\n    console.log(val);\n}`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Real World Application ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl text-center">
            <SectionHeader icon={LogIn} title="8. Real-World Application" subtitle="Looping through a User List." color="text-indigo-500" />
            <div className="max-w-2xl mx-auto text-left">
                <CodeBlock code={`let users = ["Karthick", "Ravi", "Arun"];\n\nfor (let user of users) {\n    console.log(\`Hello \${user}\`);\n}\n\n// Hello Karthick\n// Hello Ravi\n// Hello Arun`} />
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          MODERN ITERATION
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-blue-500/10 decoration-2">
          "The for...of loop removes the boilerplate of tracking indexes. It allows you to cleanly and linearly process data streams effortlessly directly on the values."
        </p>
      </footer>

    </div>
  );
};

export default JsLoopForOf;