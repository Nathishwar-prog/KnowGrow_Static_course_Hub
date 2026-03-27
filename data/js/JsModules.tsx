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
  Trash,
  Dices,
  Percent,
  Sigma,
  Bug,
  Strikethrough,
  XOctagon,
  Code,
  Blocks,
  ArrowRightLeft,
  FolderTree,
  FileCode2
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 w-full">
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

// ─── Main Component ───────────────────────────────────────────────────────────

const JsModules: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#060a08] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Blocks size={14} className="fill-current" /> ARCHITECTURE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-500 drop-shadow-2xl">
            Modules
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The building blocks of modern applications. Split code into <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight">reusable pieces</span>, keep the global scope clean, and scale infinitely.
        </p>
      </header>

      {/* ── Section 1 & 2: Intro & "Why" ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-500 w-max border border-emerald-100 dark:border-emerald-500/20 shadow-lg">
                 <Package size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are Modules?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 Instead of writing everything in a single massive file, modules allow you to <strong className="text-emerald-500">export</strong> code from one file and <strong className="text-sky-500">import</strong> it into another.
                 </p>
                 <div className="bg-teal-50 dark:bg-teal-500/5 p-5 rounded-2xl border border-teal-200 dark:border-teal-500/20 text-sm">
                    <p className="font-bold text-teal-700 dark:text-teal-400 flex items-center gap-2 mb-2">
                       <Lightbulb size={16}/> Think about it:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       Modules act strictly as the <strong className="text-teal-600 dark:text-teal-300">building blocks</strong> of your application architecture.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#060e0a] p-10 rounded-[3rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Target size={150} className="text-emerald-500"/></div>
               <SectionHeader icon={Star} title="2. Why Use Them?" subtitle="The immediate benefits." color="text-emerald-400" />
               <ul className="space-y-4 font-medium text-gray-300 relative z-10 w-full mt-4">
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><CheckCircle size={18} className="text-emerald-400 shrink-0"/> Better code organization</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><CheckCircle size={18} className="text-emerald-400 shrink-0"/> Ultimate Reusability</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><CheckCircle size={18} className="text-emerald-400 shrink-0"/> Avoids global scope pollution</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><CheckCircle size={18} className="text-emerald-400 shrink-0"/> Much easier debugging</li>
                  <li className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner"><CheckCircle size={18} className="text-emerald-400 shrink-0"/> Required for Scalable architecture</li>
               </ul>
           </div>
        </div>
      </section>

      {/* ── Section 3: Basic Module Structure (Split View) ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 hidden lg:block"><ArrowRightLeft size={250} className="text-emerald-500"/></div>
            
            <SectionHeader icon={ArrowRightLeft} title="3. Module Mechanics" subtitle="Connecting two files together." color="text-emerald-500" />
            
            <div className="grid lg:grid-cols-2 gap-8 mt-10 relative z-10 w-full items-stretch">
               <div className="h-full">
                  <CodeBlock title="math.js (Exporting File)" language="javascript" code={`// file: math.js\nexport const PI = 3.14;\n\nexport function add(a, b) {\n  return a + b;\n}`} />
               </div>
               <div className="h-full flex flex-col justify-end">
                  <div className="hidden lg:flex justify-center -mt-8 mb-4">
                      <div className="bg-emerald-500 text-white p-2 rounded-full shadow-lg border-4 border-white dark:border-gray-800 z-20">
                          <Link size={24}/>
                      </div>
                  </div>
                  <CodeBlock title="main.js (Importing File)" language="javascript" code={`// file: main.js\nimport { PI, add } from './math.js';\n\nconsole.log(PI); // 3.14\nconsole.log(add(2, 3)); // 5`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: Types of Exports Grid ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
              <BoxSelect className="text-sky-500" size={40} /> Types of Exports
            </h2>
         </div>

         <div className="grid lg:grid-cols-3 gap-8 w-full">
            {/* 4.1 Named Exports */}
            <div className="bg-[#060e0a] border border-sky-500/30 p-8 rounded-3xl shadow-lg hover:border-sky-500/60 transition-colors flex flex-col w-full">
               <h4 className="font-black text-sky-400 text-xl mb-4 flex items-center gap-2"><Layers size={20}/> 4.1 Named Exports</h4>
               <p className="text-gray-400 text-sm font-medium mb-6">👉 Export multiple specific tools from exactly one file.</p>
               <div className="flex-1 space-y-4">
                  <CodeBlock title="math.js" code={`export const PI = 3.14;\nexport function add(a, b) {\n  return a + b;\n}`} />
                  <div className="bg-sky-950/40 border border-sky-400/20 p-4 rounded-xl">
                      <p className="text-xs uppercase font-bold text-emerald-400 mb-2">✅ Import Syntax</p>
                      <code className="text-white text-xs block">import {'{ PI, add }'} from './math.js';</code>
                  </div>
               </div>
            </div>

            {/* 4.2 Default Exports */}
            <div className="bg-[#060e0a] border border-emerald-500/30 p-8 rounded-3xl shadow-lg hover:border-emerald-500/60 transition-colors flex flex-col w-full">
               <h4 className="font-black text-emerald-400 text-xl mb-4 flex items-center gap-2"><Package size={20}/> 4.2 Default Export</h4>
               <p className="text-gray-400 text-sm font-medium mb-6">👉 Export precisely <strong>one</strong> main module per file.</p>
               <div className="flex-1 space-y-4">
                  <CodeBlock title="greet.js" code={`export default function greet(name) {\n  return \`Hello \${name}\`;\n}`} />
                  <div className="bg-emerald-950/40 border border-emerald-400/20 p-4 rounded-xl">
                      <p className="text-xs uppercase font-bold text-emerald-400 mb-2">✅ Import Syntax (No Braces)</p>
                      <code className="text-white text-xs block">import greet from './greet.js';</code>
                  </div>
               </div>
            </div>

            {/* 4.3 Mixed Exports */}
            <div className="bg-[#060e0a] border border-fuchsia-500/30 p-8 rounded-3xl shadow-lg hover:border-fuchsia-500/60 transition-colors flex flex-col w-full">
               <h4 className="font-black text-fuchsia-400 text-xl mb-4 flex items-center gap-2"><ToggleRight size={20}/> 4.3 Mixed Export</h4>
               <p className="text-gray-400 text-sm font-medium mb-6">👉 Combining one Default alongside other Named exports.</p>
               <div className="flex-1 space-y-4">
                  <CodeBlock title="utils.js" code={`export const ver = "1.0";\n\nexport default function sayHi() {\n  console.log("Hi");\n}`} />
                  <div className="bg-fuchsia-950/40 border border-fuchsia-400/20 p-4 rounded-xl">
                      <p className="text-xs uppercase font-bold text-emerald-400 mb-2">✅ Import Syntax</p>
                      <code className="text-white text-xs block">import sayHi, {'{ ver }'} from './utils.js';</code>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5 & 6: File Structure & HTML Script ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={FolderTree} title="5. File Structure" subtitle="Real Project Blueprint." color="text-amber-500" />
            <div className="bg-amber-50 dark:bg-black/40 border border-amber-200 dark:border-amber-900/50 p-6 rounded-2xl font-mono text-sm text-gray-800 dark:text-gray-300 w-full mt-4">
<pre>
project/
│
├── index.html
├── main.js
├── math.js
├── utils/
│   └── helper.js
</pre>
            </div>
         </div>

         <div className="lg:col-span-7 bg-[#050812] border border-blue-500/20 p-10 md:p-12 rounded-[3rem] shadow-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 p-10"><Code2 size={200} className="text-blue-500"/></div>
            <div className="relative z-10 w-full">
               <SectionHeader icon={Terminal} title="6. HTML Integration" subtitle="How browsers load modules natively." color="text-blue-400" />
               <CodeBlock title="index.html" language="html" code={`<script type="module" src="main.js"></script>`} />
               <div className="bg-blue-950/30 p-5 rounded-2xl border border-blue-500/20 mt-6">
                  <p className="font-bold text-blue-400 mb-2 flex items-center gap-2"><AlertTriangle size={18}/> Critical Rule:</p>
                  <p className="text-gray-300 text-sm font-medium leading-relaxed">You absolutely <strong>must</strong> include the <code className="bg-black/50 px-2 py-0.5 rounded text-white border border-blue-500/30">type="module"</code> attribute on the script tag. Otherwise, standard browsers will throw an unexpected syntax error upon seeing `import` statements.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Mini Project ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 border bg-[#fafafa] dark:bg-[#121212] p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 hidden lg:block"><FileCode2 size={250} className="text-emerald-500"/></div>
            <SectionHeader icon={Activity} title="7. Mini Project Overview" subtitle="Pulling it all together." color="text-emerald-500" />
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10 mt-10">
               <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative">
                  <div className="absolute top-0 left-6 -mt-3 text-xs font-black uppercase tracking-widest bg-emerald-500 text-white px-3 py-1 rounded-full">File 1</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 mt-2">📌 math.js (Exporter)</h4>
                  <CodeBlock code={`export function multiply(a, b) {\n  return a * b;\n}`} />
               </div>

               <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative">
                  <div className="absolute top-0 left-6 -mt-3 text-xs font-black uppercase tracking-widest bg-blue-500 text-white px-3 py-1 rounded-full">File 2</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 mt-2">📌 main.js (Importer)</h4>
                  <CodeBlock code={`import { multiply } from './math.js';\n\nconsole.log(\n  "Result:", multiply(4, 5)\n);`} />
               </div>
            </div>
            <div className="mt-8 flex justify-center w-full relative z-10">
                <div className="bg-[#1e1e1e] p-5 rounded-2xl border border-emerald-500/30 inline-block max-w-sm w-full shadow-2xl shadow-emerald-500/10">
                   <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-2"><Terminal size={12}/> Console Output</p>
                   <p className="font-mono text-emerald-400 font-bold text-lg">Result: 20</p>
                </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          MODULAR SCALABILITY
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-emerald-500/10 decoration-2">
          "Mastering modules takes JavaScript away from being tiny scripts plugged into HTML, and shifts it into a robust, scalable Software Engineering architecture capable of building massive enterprise applications."
        </p>
      </footer>

    </div>
  );
};

export default JsModules;