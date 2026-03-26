import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Terminal, 
  Code2, 
  Copy, 
  Check, 
  Eye, 
  Layers, 
  Database, 
  Globe, 
  Layout, 
  Package, 
  Activity, 
  ArrowRight,
  Info,
  Cpu,
  RefreshCw,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Search,
  BookOpen,
  Scale,
  Bug,
  Construction,
  Fingerprint,
  Monitor,
  Trophy,
  Workflow,
  Lock,
  GitCompare,
  ArrowUpDown,
  Divide,
  Calculator,
  Binary,
  Bitcoin,
  Coins,
  ShieldQuestion,
  AlertCircle,
  Hash,
  FastForward,
  Shuffle,
  Flag,
  Key,
  Unlock,
  Shield,
  Dna,
  Play,
  StopCircle,
  PlayCircle,
  ArrowRightCircle,
  Trash2,
  Columns,
  SkipForward,
  LogOut,
  Repeat,
  History,
  Link,
  ChevronRight,
  BrainCircuit,
  Network,
  Box,
  User,
  GitMerge,
  Settings2,
  Target,
  Tractor,
  PawPrint,
  Shapes,
  Maximize,
  Minimize,
  Grid
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

const JsCodeBlocks: React.FC = () => {
  const [scopeView, setScopeView] = useState<'nested' | 'sequential'>('nested');

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 animate-pulse tracking-[0.2em]">
          <Box size={14} className="fill-current" /> EXECUTION BOUNDARIES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Code<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-600 drop-shadow-2xl uppercase">
            Blocks
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The art of grouping statements. Master curly braces <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight uppercase italic">{`{ }`}</span> to control flow, scope, and the logical structure of your application.
        </p>
      </header>

      {/* ── Section 1-2: What & Purpose ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Info} title="1. Grouping Statements" subtitle="Structural unity in code." color="text-blue-500" />
            <div className="space-y-6">
               <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                 👉 A <span className="text-blue-500 font-black px-2 py-0.5 bg-blue-500/5 rounded-lg border border-blue-500/10">Code Block</span> is used to group zero or more statements together inside curly braces.
               </p>
               <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
                  <div className="flex gap-6 items-center">
                     <div className="flex-1 space-y-4">
                        <div className="flex gap-3">
                           <div className="w-2 h-8 bg-blue-500/20 rounded-full"></div>
                           <p className="text-xs text-gray-400 font-mono italic">"Bundles multiple actions into a single logical unit."</p>
                        </div>
                        <div className="flex gap-3 items-center">
                           <CheckCircle className="text-emerald-500" size={16} />
                           <span className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">Single Entry</span>
                        </div>
                     </div>
                     <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10 text-center">
                        <Maximize className="text-blue-500 mb-2 mx-auto" size={24} />
                        <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest">Grouping</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[3rem] blur opacity-15"></div>
            <CodeBlock title="simple_block.js" code={`{ \n    let x = 10; \n    console.log(x); \n    // This is a code block \n}`} />
         </div>
      </section>

      {/* ── Section 3-4: Scope & Variables ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8 order-2 lg:order-1">
            <CodeBlock title="block_scope.js" code={`{ \n    var a = 1; // Global/Function Scope \n    let b = 2; // Block Scope \n    const c = 3; // Block Scope \n}\n\nconsole.log(a); // ✅ Accessible\nconsole.log(b); // ❌ ReferenceError!`} />
         </div>
         <div className="space-y-8 order-1 lg:order-2 text-right lg:text-left">
            <SectionHeader icon={ShieldCheck} title="3. Block Scope" subtitle="Isolation by design." color="text-indigo-500" />
            <div className="bg-slate-900 p-10 rounded-[3.5rem] border border-white/5 space-y-8 relative overflow-hidden group">
               <Fingerprint className="absolute -right-4 -bottom-4 text-white opacity-5 group-hover:rotate-12 transition-transform duration-700" size={120} />
               <p className="text-gray-400 font-medium italic leading-relaxed">
                  "Variables declared with <span className="text-indigo-400 font-black">let</span> and <span className="text-indigo-400 font-black">const</span> are only visible inside the block where they are defined."
               </p>
               <div className="flex gap-4">
                  <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                     <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest block mb-1">var</span>
                     <span className="text-[10px] text-gray-500 italic">Bleeds Out</span>
                  </div>
                  <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                     <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest block mb-1">let / const</span>
                     <span className="text-[10px] text-gray-500 italic">Stay Inside</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5-6: Nesting & Labels ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#0b1120] p-12 lg:p-20 rounded-[5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-6 transition-transform duration-1000">
               <Layers size={200} className="text-white" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <SectionHeader icon={Repeat} title="5. Nesting Blocks" subtitle="Hierarchies of permission." color="text-blue-400" />
                  <div className="flex gap-2 mb-8">
                     {['nested', 'sequential'].map((v) => (
                        <button 
                          key={v}
                          onClick={() => setScopeView(v as any)}
                          className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${scopeView === v ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-500'}`}
                        >
                           {v}
                        </button>
                     ))}
                  </div>
                  <div className="relative p-12 bg-white/5 rounded-[4rem] border border-white/5 flex items-center justify-center min-h-[200px]">
                     <AnimatePresence mode="wait">
                        {scopeView === 'nested' ? (
                          <motion.div 
                            key="nested"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-48 h-48 bg-blue-500/10 border-2 border-blue-500/30 rounded-[3rem] flex items-center justify-center relative shadow-2xl"
                          >
                             <div className="w-24 h-24 bg-blue-500 border-4 border-white/10 rounded-[2rem] shadow-xl animate-pulse"></div>
                             <span className="absolute -top-10 text-[10px] font-black text-blue-400 uppercase tracking-widest">Inner Scope</span>
                          </motion.div>
                        ) : (
                          <motion.div 
                            key="seq"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex gap-4"
                          >
                             <div className="w-24 h-24 bg-blue-500/20 border border-blue-500/30 rounded-3xl"></div>
                             <div className="w-24 h-24 bg-indigo-500/20 border border-indigo-500/30 rounded-3xl"></div>
                          </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               </div>
               <div>
                  <CodeBlock title="nesting.js" code={`{ \n    let level1 = "Top"; \n    { \n        let level2 = "Inner"; \n        console.log(level1); // ✅ Accessible \n    } \n    console.log(level2); // ❌ Error \n}`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7-8: Control Flow Blocks ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8 order-2 lg:order-1">
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Workflow size={80} className="text-blue-500" />
               </div>
               <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6 italic tracking-[0.2em] underline decoration-blue-500/20">Control Architecture</h4>
               <p className="text-gray-500 font-medium italic leading-relaxed italic mb-8 italic">
                  "Most often, code blocks are paired with control flow statements like <span className="text-blue-500 font-black">if...else</span>, <span className="text-blue-500 font-black">for</span>, and <span className="text-blue-500 font-black">while</span> to define a multi-statement branch."
               </p>
               <div className="flex gap-3">
                  {['Conditionals', 'Loops', 'Try/Catch'].map((tag, i) => (
                    <div key={i} className="px-4 py-2 bg-blue-500/5 text-blue-500 text-[8px] font-black uppercase tracking-widest rounded-lg border border-blue-500/10">{tag}</div>
                  ))}
               </div>
            </div>
         </div>
         <div className="space-y-8 order-1 lg:order-2">
            <SectionHeader icon={Workflow} title="7-8. Control Logic" subtitle="Braces as boundaries." color="text-blue-500" />
            <CodeBlock title="control_flow.js" code={`if (age > 18) { \n    grantAccess(); \n    updateLog(); \n    alert("Welcome!"); \n} \n\nfor (let i=0; i<3; i++) { \n    console.log(i); \n}`} />
         </div>
      </section>

      {/* ── Section 9: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-rose-500/5 border border-rose-500/10 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-12 transition-transform duration-1000">
               <AlertCircle size={200} className="text-rose-500" />
            </div>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/2 space-y-8">
                  <SectionHeader icon={Bug} title="9. Structural Pitfalls" subtitle="Avoiding scope leakage." color="text-rose-500" />
                  <ul className="space-y-6">
                     {[
                       { t: 'Shadowing', d: 'Declaring a variable with the same name in an inner block.', icon: Shuffle },
                       { t: 'The "var" Trap', d: 'Using var, which ignores block boundaries entirely.', icon: AlertTriangle },
                       { t: 'Missing Braces', d: 'Omitting braces in one-line if statements (Hard to debug).', icon: Trash2 }
                     ].map((item, i) => (
                        <li key={i} className="flex gap-6 items-center">
                           <div className="w-12 h-12 bg-rose-500/20 text-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                              <item.icon size={20} />
                           </div>
                           <div>
                              <h4 className="font-black text-rose-600 dark:text-rose-400 text-xs uppercase tracking-widest mb-1 italic">{item.t}</h4>
                              <p className="text-xs text-gray-500 font-medium italic underline decoration-rose-500/10 underline-offset-4">{item.d}</p>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="lg:w-1/2 w-full">
                  <CodeBlock title="mistakes.js" code={`let x = 10;\n{\n    let x = 20; // Shadowing!\n    console.log(x); // 20\n}\nconsole.log(x); // 10\n\nif (true) console.log("No braces!"); // risky`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 10: Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Globe} title="10. Strategic Use Cases" subtitle="Where blocks shine." color="text-blue-500" />
         <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { t: 'Variable Isolation', d: 'Cleaning up local logic', icon: Shield },
              { t: 'Functional Grouping', d: 'Structuring complex branches', icon: Grid },
              { t: 'Modular Config', d: 'Temporary state silos', icon: Settings2 },
              { t: 'Modern APIs', d: 'Fetch and logic grouping', icon: Network }
            ].map((use, i) => (
               <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group hover:-translate-y-2 transition-transform">
                  <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-500/10 ring-4 ring-blue-500/5">
                     <use.icon size={24}/>
                  </div>
                  <h6 className="font-black text-[10px] text-gray-900 dark:text-white uppercase tracking-widest mb-2 italic tracking-[0.2em] underline decoration-blue-500/20 underline-offset-4">{use.t}</h6>
                  <p className="text-[10px] text-gray-400 italic font-medium">{use.d}</p>
               </div>
            ))}
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-10"></div>
         <p className="text-4xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.4em]">
           Blocks Unified.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto italic border-l-2 border-blue-500 pl-8 py-2">
           "A code block is not just a container; it is a declaration of intent. It defines the temporal and spatial boundaries of your logic."
         </p>
      </footer>

    </div>
  );
};

export default JsCodeBlocks;