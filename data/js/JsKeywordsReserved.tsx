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
  FileWarning
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-rose-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsKeywordsReserved: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0505] min-h-screen font-sans selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-rose-600 dark:text-rose-400 text-[10px] font-black mb-8 border border-rose-100 dark:border-rose-900/50 shadow-xl shadow-rose-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Lock size={14} className="fill-current" /> BLOCKED NAMES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Reserved <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 drop-shadow-2xl">
            Keywords
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Learn which words are <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500 underline-offset-4 tracking-tight">strictly off-limits</span> as identifiers in your JavaScript code.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-rose-50 dark:bg-rose-500/10 rounded-2xl text-rose-500 w-max border border-rose-100 dark:border-rose-500/20 shadow-lg">
                 <ShieldAlert size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are Reserved Keywords?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 Reserved keywords are words that are already used by JavaScript syntax, so you <span className="font-bold text-rose-500">cannot</span> use them as variable, function, or object names.
                 </p>
                 <div className="bg-rose-50 dark:bg-rose-500/5 p-5 rounded-2xl border border-rose-200 dark:border-rose-500/20">
                    <p className="font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2 mb-2">
                       <Info size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       Reserved keywords = <span className="text-rose-600 dark:text-rose-400 font-bold bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded">“blocked names”</span> in JavaScript.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-gradient-to-br from-[#1a0b0b] to-[#140505] p-10 rounded-[3rem] border border-red-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Ban size={150} className="text-red-500"/></div>
               <SectionHeader icon={Ban} title="2. Why They Cannot Be Used?" color="text-red-500" />
               <p className="text-gray-300 font-medium mb-6 relative z-10">
                  Because JavaScript already assigns them a special meaning. Reusing them breaks the language logic.
               </p>
               <div className="relative z-10 mb-6">
                  <CodeBlock code={`let if = 10; // ❌ SyntaxError`} />
               </div>
               <div className="relative z-10 bg-red-950/30 p-4 border border-red-500/20 rounded-xl">
                  <p className="text-red-200 text-sm font-medium">👉 <code className="text-red-400 font-bold bg-red-900/50 px-1.5 rounded">if</code> is used for conditions, so it cannot be reused as a variable name.</p>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Categories ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Layers} title="3. Categories of Reserved Keywords" subtitle="Organized groups of blocked names." color="text-orange-500" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
               <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-orange-500/30 transition-colors">
                  <h4 className="flex items-center gap-2 font-black text-gray-900 dark:text-white mb-4"><GitBranch size={18} className="text-orange-500"/> Control Flow</h4>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold text-orange-600 dark:text-orange-400">
                     {['if', 'else', 'switch', 'case', 'default', 'for', 'while', 'do', 'break', 'continue'].map(k => (
                        <span key={k} className="bg-orange-100 dark:bg-orange-500/10 px-2 py-1 rounded border border-orange-200 dark:border-orange-500/20">{k}</span>
                     ))}
                  </div>
               </div>

               <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 transition-colors">
                  <h4 className="flex items-center gap-2 font-black text-gray-900 dark:text-white mb-4"><Box size={18} className="text-blue-500"/> Declaration</h4>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                     {['var', 'let', 'const', 'function', 'class'].map(k => (
                        <span key={k} className="bg-blue-100 dark:bg-blue-500/10 px-2 py-1 rounded border border-blue-200 dark:border-blue-500/20">{k}</span>
                     ))}
                  </div>
               </div>

               <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-emerald-500/30 transition-colors">
                  <h4 className="flex items-center gap-2 font-black text-gray-900 dark:text-white mb-4"><BoxSelect size={18} className="text-emerald-500"/> Object-Oriented</h4>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                     {['this', 'new', 'super'].map(k => (
                        <span key={k} className="bg-emerald-100 dark:bg-emerald-500/10 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-500/20">{k}</span>
                     ))}
                  </div>
               </div>

               <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-rose-500/30 transition-colors">
                  <h4 className="flex items-center gap-2 font-black text-gray-900 dark:text-white mb-4"><AlertOctagon size={18} className="text-rose-500"/> Error Handling</h4>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold text-rose-600 dark:text-rose-400">
                     {['try', 'catch', 'finally', 'throw'].map(k => (
                        <span key={k} className="bg-rose-100 dark:bg-rose-500/10 px-2 py-1 rounded border border-rose-200 dark:border-rose-500/20">{k}</span>
                     ))}
                  </div>
               </div>

               <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-violet-500/30 transition-colors">
                  <h4 className="flex items-center gap-2 font-black text-gray-900 dark:text-white mb-4"><RefreshCw size={18} className="text-violet-500"/> Async & Advanced</h4>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold text-violet-600 dark:text-violet-400">
                     {['async', 'await', 'yield'].map(k => (
                        <span key={k} className="bg-violet-100 dark:bg-violet-500/10 px-2 py-1 rounded border border-violet-200 dark:border-violet-500/20">{k}</span>
                     ))}
                  </div>
               </div>

               <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-500/30 transition-colors">
                  <h4 className="flex items-center gap-2 font-black text-gray-900 dark:text-white mb-4"><MoreHorizontal size={18} className="text-gray-500"/> Other Reserved Words</h4>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold text-gray-600 dark:text-gray-400">
                     {['return', 'typeof', 'instanceof', 'delete', 'in'].map(k => (
                        <span key={k} className="bg-gray-200 dark:bg-gray-700/50 px-2 py-1 rounded border border-gray-300 dark:border-gray-600">{k}</span>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: Full List ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-[#1a0b0b] to-[#0f0505] p-10 md:p-14 border border-red-500/20 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><List size={300} className="text-red-500"/></div>
            <SectionHeader icon={List} title="4. Full Common Reserved Keywords List" color="text-red-400" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 font-mono text-sm font-bold text-red-200 relative z-10 mt-10">
               {['break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in', 'instanceof', 'let', 'new', 'return', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield', 'async', 'await'].map(word => (
                  <div key={word} className="bg-red-950/30 border border-red-500/10 px-3 py-2 rounded-lg text-center hover:border-red-500/50 hover:bg-red-900/30 transition-colors cursor-default">
                     {word}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Sections 5, 6, 7: Future, Strict, Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8">
         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl lg:col-span-2">
            <SectionHeader icon={FileWarning} title="5. Future Reserved" color="text-amber-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               👉 These are reserved for future use (ES standards). <span className="font-bold text-amber-500">Avoid using them ❗</span>
            </p>
            <div className="flex flex-wrap gap-3 font-mono text-sm font-bold text-amber-600 dark:text-amber-400 mb-6 bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-500/20">
               {['enum', 'implements', 'interface', 'package', 'private', 'protected', 'public'].map(k => (
                  <span key={k}>{k}</span>
               ))}
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl flex flex-col justify-center text-center">
            <div className="mx-auto bg-gray-100 dark:bg-gray-900 p-4 rounded-full mb-4 inline-block">
               <ShieldCheck size={32} className="text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">6. Strict Mode</h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">When using:</p>
            <code className="text-rose-500 font-bold bg-rose-50 dark:bg-rose-900/20 px-4 py-2 rounded-lg inline-block mb-4">"use strict";</code>
            <p className="text-sm font-medium text-gray-500">👉 Additional restrictions apply</p>
         </div>

         <div className="bg-gradient-to-br from-green-900/10 via-[#0f0505] to-red-900/10 p-8 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] shadow-xl lg:col-span-3">
            <SectionHeader icon={CheckCircle} title="7. Valid vs Invalid Examples" color="text-emerald-500" />
            <div className="grid md:grid-cols-2 gap-6 relative z-10 w-full mt-6">
                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-200 dark:border-red-500/20">
                    <h4 className="flex items-center gap-2 font-black text-red-600 dark:text-red-400 mb-4"><AlertTriangle size={18}/> Invalid</h4>
                    <CodeBlock code={`let class = "JS"; // ❌ SyntaxError`} />
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-500/20">
                    <h4 className="flex items-center gap-2 font-black text-emerald-600 dark:text-emerald-400 mb-4"><Check size={18}/> Valid</h4>
                    <CodeBlock code={`let className = "JS"; // ✅ Good to go`} />
                </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          NO TRESPASSING
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-rose-500/10 decoration-2">
          "The engine strictly enforces these names to prevent absolute chaos. Don't fight it, just name your variables something else!"
        </p>
      </footer>

    </div>
  );
};

export default JsKeywordsReserved;