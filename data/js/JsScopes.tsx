import React, { useState } from 'react';
import { 
  Zap, 
  Activity, 
  Terminal, 
  Layout,
  Info, 
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  Cpu,
  List,
  Binary,
  Box,
  Trash2,
  Filter,
  Search,
  BookOpen,
  Power,
  RefreshCw,
  Share2,
  Grid,
  ShieldCheck,
  MousePointer2,
  Database,
  Repeat,
  Lightbulb,
  Plus,
  Minus,
  X,
  Play,
  ArrowRight,
  Code2,
  Layers,
  GitBranch,
  Eye,
  Lock,
  Globe,
  Settings,
  CircleSlash
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
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center text-white/90">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
            title="Copy code"
          >
            {copied ? <CheckCircle size={14} className="text-green-400" /> : <Package size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8 font-sans">
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

const JsScopes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'global' | 'function' | 'block'>('global');

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 text-[10px] font-black mb-8 border border-purple-100 dark:border-purple-900/50 shadow-xl shadow-purple-500/5 animate-pulse tracking-[0.2em]">
          <Layers size={14} className="fill-current" /> EXECUTION CONTEXT
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS Scopes <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-sky-600 drop-shadow-2xl">
            Mechanics
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master variable visibility and memory management. Scope determines where your code can "see" and "access" data.
        </p>
      </header>

      {/* ── Section 1: Introduction ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What is Scope?" subtitle="The fundamental visibility area for variables." color="text-purple-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed font-sans italic border-l-4 border-purple-500 pl-6">
              "Scope determines where variables can be accessed in your code. Think of it as a visibility area—a bubble that protects and organizes your data."
            </p>
            <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-start gap-4">
               <Eye size={24} className="text-purple-500 mt-1" />
               <p className="text-sm font-medium text-gray-500 leading-relaxed">Properly understanding scope will make complex patterns like **closures, function factories, and asynchronous logic** significantly easier to master.</p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-[3rem]">
           <div className="bg-white dark:bg-gray-950 rounded-[2.8rem] p-10 shadow-2xl space-y-8 font-sans">
              <h4 className="text-xl font-black italic tracking-tight flex items-center gap-3">
                 <Grid size={24} className="text-purple-500" /> Scope Type Directory
              </h4>
              <div className="space-y-4">
                 {[
                   { type: "Global Scope", desc: "Accessible everywhere across the entire app.", color: "bg-emerald-500" },
                   { type: "Function Scope", desc: "Accessible only inside the function body.", color: "bg-sky-500" },
                   { type: "Block Scope", desc: "Accessible inside curly braces {} ONLY.", color: "bg-rose-500" }
                 ].map((row, i) => (
                   <div key={i} className="flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 group hover:border-purple-500/30 transition-all">
                      <div className="flex items-center gap-4">
                         <div className={`w-3 h-3 rounded-full ${row.color} shadow-lg shadow-current/20`}></div>
                         <span className="font-black italic text-sm">{row.type}</span>
                      </div>
                      <span className="text-[10px] font-medium text-gray-500 italic max-w-[180px] text-right">{row.desc}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: Scopes Deep Dive ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Terminal} title="2. Deep Dive: Global vs Local" subtitle="Analyzing the boundaries of variable access." color="text-sky-500" />
        
        <div className="flex flex-wrap gap-4 mb-10">
           {['global', 'function', 'block'].map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab as any)}
               className={`px-8 py-3 rounded-2xl border-2 font-black italic text-sm transition-all uppercase tracking-widest ${
                 activeTab === tab 
                 ? 'bg-sky-500 border-sky-500 text-white shadow-xl shadow-sky-500/20 scale-105' 
                 : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-400 hover:border-sky-500/50'
               }`}
             >
                {tab}
             </button>
           ))}
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
           {activeTab === 'global' && (
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <h3 className="text-4xl font-black italic text-emerald-500 flex items-center gap-4">
                      <Globe size={32} /> Global Scope
                   </h3>
                   <p className="text-gray-500 font-medium leading-relaxed italic">Variables declared outside any function or block. They are accessible everywhere throughout your application code.</p>
                   <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-3xl flex items-start gap-4">
                      <AlertTriangle size={24} className="text-rose-500 mt-1 flex-shrink-0" />
                      <div>
                         <h6 className="text-sm font-black text-rose-600 uppercase italic tracking-widest mb-1">The Global Problem</h6>
                         <p className="text-xs text-gray-500 italic">Global variables can be modified by any part of the program, which frequently leads to unexpected bugs and data collisions.</p>
                      </div>
                   </div>
                </div>
                <CodeBlock title="Global Scope Example" code={`let name = "Issac"; // Global\n\nfunction show() {\n  console.log(name); // Accessing Global\n}\n\nshow(); // 🖥 Output: Issac\n\nlet x = 10;\n// Can be modified anywhere ❌`} />
             </div>
           )}

           {activeTab === 'function' && (
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <h3 className="text-4xl font-black italic text-sky-500 flex items-center gap-4">
                      <Activity size={32} /> Function Scope
                   </h3>
                   <p className="text-gray-500 font-medium leading-relaxed italic">Variables declared inside a function body. They are encapsulated—private to that function and invisible to anything outside.</p>
                   <div className="p-6 bg-sky-500/10 border border-sky-500/20 rounded-3xl flex items-center gap-4">
                      <Lock size={20} className="text-sky-500" />
                      <p className="text-xs text-sky-700/60 font-black uppercase italic tracking-widest">Encapsulation Level: HIGH</p>
                   </div>
                </div>
                <CodeBlock title="Function Scope Example" code={`function test() {\n  let msg = "Hello"; // Local to test\n  console.log(msg); // ✅ Works\n}\n\ntest();\nconsole.log(msg); // ❌ ReferenceError: msg is not defined`} />
             </div>
           )}

           {activeTab === 'block' && (
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <h3 className="text-4xl font-black italic text-rose-500 flex items-center gap-4">
                      <Box size={32} /> Block Scope
                   </h3>
                   <p className="text-gray-500 font-medium leading-relaxed italic underline decoration-rose-500/10">Variables declared using `let` and `const` inside `{}` blocks. This is specific to modern JS (ES6+).</p>
                   <div className="p-8 bg-gray-950 rounded-[2.5rem] border border-white/5 space-y-4">
                      <div className="flex gap-4 items-center mb-2">
                        <CircleSlash size={20} className="text-rose-500" />
                        <h6 className="text-white font-black italic uppercase tracking-widest text-sm">The var Exception</h6>
                      </div>
                      <p className="text-gray-500 text-xs italic">`var` is **NOT** block scoped. It leaks out of blocks and into the surrounding function or global scope.</p>
                      <code className="text-rose-500 font-mono text-[10px] block mt-4 bg-white/5 p-3 rounded-lg border border-white/10">{`if(true) { var z = 30; }\nconsole.log(z); // ✅ Still works (Bad Practice)`}</code>
                   </div>
                </div>
                <CodeBlock title="Block Scope Example" code={`if (true) {\n  let x = 10;\n  const y = 20;\n}\n\nconsole.log(x); // ❌ Error\nconsole.log(y); // ❌ Error`} />
             </div>
           )}
        </div>
      </section>

      {/* ── Section 3: Lexical Scope & Chain ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={GitBranch} title="3. Lexical Scope & Chain" subtitle="The engine behind closures and variable lookups." color="text-purple-500" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-8 font-sans">
              <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 group overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000 rotate-12">
                   <GitBranch size={150} className="text-purple-500" />
                 </div>
                 <h4 className="text-2xl font-black italic text-purple-600 flex items-center gap-3">
                    Lexical Scope (🔥)
                 </h4>
                 <p className="text-gray-500 font-medium leading-relaxed">Inner functions have access to variables declared in their **physical outer scope** when the code was written.</p>
                 <CodeBlock title="Lexical Scope Demo" code={`function outer() {\n  let a = 10;\n\n  function inner() {\n    console.log(a); // ✅ Accesses outer variable\n  }\n\n  inner();\n}\n\nouter();`} />
              </div>

              <div className="p-10 bg-indigo-950 rounded-[3.5rem] border border-white/5 shadow-2xl space-y-6">
                 <h4 className="text-2xl font-black italic text-indigo-400">The Scope Chain</h4>
                 <p className="text-indigo-100/40 font-medium italic">Lookup order: Inner Scope → Outer Scope → Global Scope.</p>
                 <div className="space-y-3">
                    {[
                      { l: "1", v: "Global Scope (Main Layer)", c: "border-indigo-500/20" },
                      { l: "2", v: "Function Scope (Inner Layer)", c: "border-indigo-500/40 translate-x-4" },
                      { l: "3", v: "Block Scope (Deepest Layer)", c: "border-indigo-500/60 translate-x-8" }
                    ].map((step, i) => (
                      <div key={i} className={`p-4 border-l-4 ${step.c} bg-white/5 rounded-r-2xl flex items-center justify-between group`}>
                         <div className="flex gap-4 items-center">
                            <span className="text-indigo-500 font-black font-mono">0{step.l}</span>
                            <span className="text-white text-xs font-bold italic tracking-wider">{step.v}</span>
                         </div>
                         <ArrowRight size={14} className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-all font-sans" />
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="space-y-8 font-sans">
              <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.8rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
                 <h4 className="text-2xl font-black italic text-sky-600 underline decoration-sky-500/10">Shadowing</h4>
                 <p className="text-gray-500 font-medium leading-relaxed italic">When an inner variable has the same name as an outer variable, it temporarily **shadows** (overrides) the outer one.</p>
                 <CodeBlock title="Shadowing Example" code={`let x = 10; // Global\n\nfunction test() {\n  let x = 20; // Shadows Global x\n  console.log(x); \n}\n\ntest(); // 🖥 Output: 20`} />
              </div>

              <div className="p-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[3.8rem] shadow-2xl space-y-6 border border-white/20 relative overflow-hidden group">
                 <div className="absolute bottom-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                    <Zap size={200} className="text-white" />
                 </div>
                 <h4 className="text-2xl font-black italic text-white flex items-center gap-3 relative z-10 font-sans">
                    Real-World Closure
                 </h4>
                 <p className="text-white/80 font-medium leading-relaxed relative z-10 italic">Scope is the foundation of closures. Here, the inner function "remembers" its lexical scope even after the outer function has finished executing.</p>
                 <CodeBlock title="Closure Scoping" code={`function createUser() {\n  let role = "admin";\n\n  return function() {\n    console.log(role); // Remembers role\n  };\n}\n\nlet user = createUser();\nuser(); // ✅ Output: admin`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4: Interactive Scope Visualizer ── */}
      <section className="max-w-6xl mx-auto mb-32 font-sans font-medium">
         <SectionHeader icon={Box} title="4. Hierarchy Visualization" subtitle="Variables cascade from the top down." color="text-rose-500" />
         
         <div className="p-1 sm:p-2 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-rose-500/20 rounded-[4.5rem]">
            <div className="bg-white dark:bg-gray-950 rounded-[4.3rem] p-12 md:p-24 shadow-inner relative flex flex-col items-center">
               
               {/* Global Layer */}
               <div className="w-full max-w-2xl border-2 border-dashed border-emerald-500/30 rounded-[3rem] p-10 relative flex flex-col items-center group/global">
                  <div className="absolute -top-4 left-10 px-4 py-1 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest italic">Global Scope</div>
                  <div className="flex gap-4 mb-20">
                     <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500 text-emerald-500 rounded-xl text-xs font-mono font-black italic shadow-lg shadow-emerald-500/5 transition-transform group-hover/global:scale-110 cursor-help" title="Accessible anywhere">let user = "Dev";</div>
                  </div>

                  {/* Function Layer */}
                  <div className="w-full max-w-lg border-2 border-dashed border-sky-500/40 rounded-[2.5rem] p-10 relative flex flex-col items-center group/func">
                     <div className="absolute -top-4 left-10 px-4 py-1 bg-sky-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest italic">Function Scope</div>
                     <div className="flex gap-4 mb-16">
                        <div className="px-4 py-2 bg-sky-500/10 border border-sky-500 text-sky-500 rounded-xl text-xs font-mono font-black italic group-hover/func:translate-y-[-2px] transition-all cursor-help" title="Accessible only inside function">let password = "***";</div>
                     </div>

                     {/* Block Layer */}
                     <div className="w-full max-w-sm border-2 border-dashed border-rose-500/50 rounded-[2rem] p-10 relative flex flex-col items-center group/block">
                        <div className="absolute -top-4 left-10 px-4 py-1 bg-rose-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest italic">Block Scope</div>
                        <div className="px-4 py-2 bg-rose-500/10 border border-rose-500 text-rose-500 rounded-xl text-xs font-mono font-black italic group-hover/block:rotate-2 transition-all cursor-help" title="Accessible only inside {}">let tempValue = 42;</div>
                        <div className="mt-8 flex flex-col items-center gap-2 opacity-30 text-center">
                           <Lock size={20} className="text-gray-400" />
                           <span className="text-[10px] font-black uppercase tracking-tight italic">Ultimate Privacy</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-16 text-center max-w-lg">
                  <p className="text-gray-400 text-sm font-medium italic italic underline decoration-gray-400/20 underline decoration-transparent">
                     Variables flow downward. The deepest layer (Block) can see everything above it, but the Top layer (Global) cannot see what is hidden inside the blocks.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5: Recommendations & Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans font-medium">
          <div className="space-y-8">
             <SectionHeader icon={Lightbulb} title="Personal Recommendations" subtitle="Advice from production codebases." color="text-amber-500" />
             <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 font-sans">
                {[
                  { label: "Always Use let & const", text: "Avoid `var` entirely. It prevents block-level scoping and leads to confusing variable leakage.", icon: CheckCircle, color: "text-emerald-500 bg-emerald-500/10" },
                  { label: "Minimize Global Variables", text: "Avoid polluting the global namespace. It keeps your code safe from name collisions and side effects.", icon:Globe, color: "text-sky-500 bg-sky-500/10" },
                  { label: "Protect Your Data", text: "Use function and block scopes to encapsulate your logic. Treat every variable like a secret.", icon: Lock, color: "text-amber-500 bg-amber-500/10" }
                ].map((rec, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 bg-gray-50 dark:bg-gray-950 rounded-3xl group italic">
                     <div className={`p-4 rounded-2xl ${rec.color} group-hover:scale-110 transition-transform`}>
                        <rec.icon size={20} />
                     </div>
                     <div>
                        <h6 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1 italic font-sans">{rec.label}</h6>
                        <p className="text-sm font-black italic tracking-tight">{rec.text}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-8">
             <SectionHeader icon={Zap} title="⚡ Tips & Tricks" subtitle="Pro moves for scope management." color="text-sky-500" />
             <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Avoid Variable Leakage", text: "Always use `let` in for loops to prevent the index variable from leaking into the outer scope.", code: "for (let i = 0; i < 5; i++) { ... }" },
                  { title: "Smart Closures", text: "Use closures to create private variables that persist across function calls without being global.", code: "const counter = (() => { let count = 0; return () => ++count; })();" },
                  { title: "Debugging Lookups", text: "Use console log at different levels to track the scope chain and identify where a value is inherited from.", code: "console.log('Current value of a:', a);" }
                ].map((tip, i) => (
                  <div key={i} className="p-8 bg-gray-950 rounded-[2.8rem] border border-white/5 shadow-2xl space-y-4 group italic">
                     <h5 className="text-white font-black italic tracking-tight flex justify-between items-center underline decoration-indigo-500/10">
                        {tip.title}
                        <ArrowRight size={16} className="text-sky-500 opacity-0 group-hover:opacity-100 transition-all font-sans" />
                     </h5>
                     <p className="text-gray-500 text-xs italic">{tip.text}</p>
                     <div className="p-4 bg-white/5 border border-white/10 rounded-xl font-mono text-[10px] text-sky-400 overflow-hidden text-ellipsis italic underline decoration-transparent font-sans italic">{tip.code}</div>
                  </div>
                ))}
             </div>
          </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans italic leading-tight">
            See what you <br /> can access.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose max-w-2xl mx-auto font-medium italic underline decoration-transparent font-sans italic">
            Scope is the boundary of your variables. Mastering it gives you the power to write cleaner, safer, and more predictable JavaScript applications.
         </p>
      </footer>

    </div>
  );
};

export default JsScopes;