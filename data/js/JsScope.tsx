import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Unlock, 
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
  Globe, 
  Settings, 
  CircleSlash,
  Key,
  ShieldAlert
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

const JsScope: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<'global' | 'function' | 'block'>('global');

  return (
    <div className="p-4 sm:p-10 bg-[#fdfdfd] dark:bg-[#020617] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 animate-pulse tracking-[0.2em]">
          <Shield size={14} className="fill-current" /> ACCESS CONTROL SYSTEM
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS Scope <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-600 drop-shadow-2xl">
            Mechanics
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
           Determining access rights for your data. In simple words: <span className="text-gray-900 dark:text-white font-bold italic underline decoration-emerald-500/30">"Who can use this variable?"</span>
        </p>
      </header>

      {/* ── Section 1: Introduction ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What is Scope?" subtitle="The boundary of variable accessibility." color="text-emerald-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed font-sans italic">
              "Scope defines where a variable is accessible in your code. It's the primary way JavaScript regulates data visibility and security."
            </p>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Variable Conflicts", desc: "Prevents naming collisions.", icon: CircleSlash },
                 { label: "Code Security", desc: "Locks down private data.", icon: Lock },
                 { label: "Debugging", desc: "Smarter troubleshooting.", icon: Activity },
                 { label: "Advanced Logic", desc: "Enables Closures.", icon: Zap }
               ].map((benefit, i) => (
                 <div key={i} className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl group hover:bg-emerald-500/10 transition-all">
                    <benefit.icon size={16} className="text-emerald-500 mb-2" />
                    <h6 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{benefit.label}</h6>
                    <p className="text-[10px] text-gray-400 font-medium italic">{benefit.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
           <div className="p-10 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000 rotate-12">
                 <Shield size={200} className="text-emerald-500" />
              </div>
              <h4 className="text-xl font-black text-white italic tracking-tight flex items-center gap-3 relative z-10">
                 <ShieldCheck size={24} className="text-emerald-500" /> Hierarchy of Access
              </h4>
              <div className="space-y-6 relative z-10 font-sans">
                 {[
                   { level: "Global Scope", v: "Public Access", color: "text-emerald-500", icon: Globe },
                   { level: "Function Scope", v: "Private Access", color: "text-blue-500", icon: Key },
                   { level: "Block Scope", v: "Restricted Access", color: "text-rose-500", icon: Lock }
                 ].map((row, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-4">
                         <div className={`p-2 rounded-xl bg-gray-900 ${row.color}`}>
                            <row.icon size={18} />
                         </div>
                         <span className="font-black italic text-sm text-white">{row.level}</span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{row.v}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: Scopes Visualizer ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Terminal} title="2. Types of Scope" subtitle="Exploring the different levels of visibility." color="text-blue-500" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 font-sans">
              <div className="flex flex-col gap-4">
                 {[
                   { id: 'global', name: 'Global', desc: 'Accessible everywhere.' },
                   { id: 'function', name: 'Function', desc: 'Private to a function.' },
                   { id: 'block', name: 'Block', desc: 'Private to {} curly braces.' }
                 ].map((tab) => (
                   <button 
                     key={tab.id}
                     onClick={() => setActiveLevel(tab.id as any)}
                     className={`p-6 rounded-[2.5rem] border-2 transition-all flex items-center justify-between group ${
                       activeLevel === tab.id 
                       ? 'bg-blue-500 border-blue-500 text-white shadow-xl shadow-blue-500/20' 
                       : 'bg-white dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 text-gray-500 hover:border-blue-500/30'
                     }`}
                   >
                      <div className="flex flex-col items-start gap-1">
                         <span className="font-black italic text-xl">{tab.name} Scope</span>
                         <span className={`text-[10px] font-medium uppercase tracking-widest ${activeLevel === tab.id ? 'text-white/60' : 'text-gray-400'}`}>{tab.desc}</span>
                      </div>
                      <ArrowRight size={20} className={`transition-transform duration-500 ${activeLevel === tab.id ? 'translate-x-2' : 'group-hover:translate-x-1 opacity-20'}`} />
                   </button>
                 ))}
              </div>
           </div>

           <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              {activeLevel === 'global' && (
                <div className="space-y-6">
                   <div className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-[3rem] space-y-4 italic">
                      <p className="text-gray-500 font-medium leading-relaxed font-sans underline decoration-emerald-500/10 uppercase tracking-widest text-xs">Variables declared outside all functions. Accessible everywhere.</p>
                   </div>
                   <CodeBlock title="Global Scope Example" code={`let name = "Issac"; // Global\n\nfunction show() {\n  console.log(name); // Accessing outdoors\n}\n\nshow(); // 🖥 Output: Issac`} />
                </div>
              )}
              {activeLevel === 'function' && (
                <div className="space-y-6">
                   <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-[3rem] space-y-4 italic">
                      <p className="text-gray-500 font-medium leading-relaxed font-sans underline decoration-blue-500/10 uppercase tracking-widest text-xs">Variables declared inside a function body. Private access only.</p>
                   </div>
                   <CodeBlock title="Function Scope Example" code={`function test() {\n  let msg = "Hello"; // Local\n  console.log(msg);\n}\n\ntest();\nconsole.log(msg); // ❌ ReferenceError`} />
                </div>
              )}
              {activeLevel === 'block' && (
                <div className="space-y-6">
                   <div className="p-8 bg-rose-500/5 border border-rose-500/10 rounded-[3rem] space-y-8 italic">
                      <p className="text-gray-500 font-medium leading-relaxed font-sans underline decoration-rose-500/10 uppercase tracking-widest text-xs italic">Variables inside {} curly braces (with let/const).</p>
                      <div className="p-4 bg-rose-500/10 rounded-2xl flex items-center gap-4">
                         <ShieldAlert size={20} className="text-rose-500 flex-shrink-0" />
                         <p className="text-[10px] text-rose-600 font-black uppercase tracking-tight italic">Warning: var is NOT block-scoped!</p>
                      </div>
                   </div>
                   <CodeBlock title="Block Scope Example" code={`if (true) {\n  let x = 10; // Block Protected\n  var y = 20; // Leaked!\n}\n\nconsole.log(x); // ❌ Error\nconsole.log(y); // ✅ Works! Leaked from block.`} />
                </div>
              )}
           </div>
        </div>
      </section>

      {/* ── Section 3: Hierarchy & Lexical ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
         <div className="space-y-10 group bg-gray-950 p-12 rounded-[4rem] border border-white/5 relative overflow-hidden shadow-2xl shadow-indigo-500/10">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000 rotate-12">
               <GitBranch size={200} className="text-indigo-500" />
            </div>
            <h4 className="text-3xl font-black text-white italic tracking-tight flex items-center gap-4">
               <Layers size={32} className="text-indigo-500" /> Scope Hierarchy
            </h4>
            <div className="space-y-12 relative z-10 font-sans italic">
               <p className="text-gray-400 font-medium leading-relaxed italic">The lookup process is one-way: <span className="text-indigo-400 font-black underline italic decoration-indigo-500/20 underline decoration-transparent">Inner scopes can access outer scopes</span>, but not vice-versa.</p>
               <div className="flex flex-col gap-4">
                  {[
                    { l: "Global", icon: Globe, c: "border-indigo-500 text-indigo-500 rotate-3" },
                    { l: "Function", icon: Share2, c: "border-blue-500 text-blue-500 -rotate-2" },
                    { l: "Block", icon: Lock, c: "border-emerald-500 text-emerald-500 rotate-1" }
                  ].map((lvl, i) => (
                    <div key={i} className={`p-6 bg-white/5 border-l-4 ${lvl.c} rounded-r-3xl flex items-center justify-between group/lvl transition-all hover:bg-white/10`}>
                       <div className="flex gap-4 items-center">
                          <lvl.icon size={20} />
                          <span className="font-black italic text-lg">{lvl.l} Scope</span>
                       </div>
                       <Plus size={16} className="opacity-20 group-hover/lvl:opacity-100 group-hover/lvl:rotate-90 transition-all font-sans" />
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="space-y-10">
            <SectionHeader icon={Repeat} title="3. Lexical Scope & Chain" subtitle="Fixed boundaries decided at write-time." color="text-emerald-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 group">
               <h4 className="text-2xl font-black italic flex items-center gap-3 text-emerald-600">
                  <Play size={24} className="group-hover:translate-x-1 transition-transform" /> Lexical Scoping
               </h4>
               <p className="text-gray-500 font-medium leading-relaxed font-sans italic underline decoration-emerald-500/10">Scope is decided exactly where your code is written physically. Inner functions inherit variables from their parents.</p>
               <CodeBlock title="Lexical Chain Demo" code={`function outer() {\n  let a = 10;\n\n  function inner() {\n    console.log(a); // ✅ decidied by position\n  }\n\n  inner();\n}\n\nouter();`} />
            </div>
         </div>
      </section>

      {/* ── Section 4: Advanced Concepts ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="space-y-10">
            <SectionHeader icon={Activity} title="4. Advanced Shadowing" subtitle="When the internal overrides the external." color="text-rose-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
               <p className="text-gray-500 font-medium leading-relaxed font-sans italic">"Shadowing" happens when an accurately placed inner variable overrides an outer one with the same name.</p>
               <CodeBlock title="Shadowing Demo" code={`let x = 10; // Global\n\nfunction demo() {\n  let x = 50; // Shadows Global x\n  console.log(x);\n}\n\ndemo(); // 🖥 Output: 50`} />
            </div>
         </div>

         <div className="space-y-10 font-sans italic uppercase tracking-tight">
            <SectionHeader icon={Zap} title="5. Real-World Closure" subtitle="Scope as the foundation of memory." color="text-emerald-500" />
            <div className="p-10 bg-gradient-to-br from-gray-900 to-black rounded-[4rem] border border-white/5 shadow-3xl space-y-8 relative overflow-hidden group">
               <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
               <div className="relative z-10 space-y-6">
                  <div className="p-4 bg-emerald-500 text-white rounded-2xl w-fit shadow-lg shadow-emerald-500/20 italic">
                     <Share2 size={24} />
                  </div>
                  <h4 className="text-2xl font-black italic tracking-tighter text-white">The Persistent Counter</h4>
                  <p className="text-gray-500 text-sm font-medium italic underline decoration-emerald-500/20 font-sans tracking-widest uppercase">Closures are possible because scope persists across executions.</p>
                  <CodeBlock title="Closure Scoping Example" code={`function counter() {\n  let count = 0; // Protected in function scope\n\n  return function() {\n    count++; // Accesses outer count\n    console.log(count);\n  };\n}\n\nlet inc = counter();\ninc(); // 1\ninc(); // 2`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5: Best Practices ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Lightbulb} title="6. Pro Recommendations" subtitle="Expert advice on scope management." color="text-emerald-500" />
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            {[
              { label: "Always Use let/const", text: "Cleaner, safer, and block-level scoped.", icon: CheckCircle, color: "text-emerald-500 bg-emerald-500/10" },
              { label: "Keep Scope Small", text: "Minimize variable lifetimes for easy debugging.", icon: Minus, color: "text-blue-500 bg-blue-500/10" },
              { label: "Avoid Pollution", text: "Wrap code in modules to keep the global scope clean.", icon: CircleSlash, color: "text-rose-500 bg-rose-500/10" },
              { label: "Master Foundation", text: "Understand scope properly before learning closures.", icon: BookOpen, color: "text-indigo-500 bg-indigo-500/10" }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 group hover:-translate-y-2 transition-all">
                 <div className={`p-4 rounded-2xl w-fit ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} />
                 </div>
                 <h5 className="text-sm font-black italic uppercase tracking-widest underline decoration-gray-500/10">{item.label}</h5>
                 <p className="text-xs text-gray-500 font-medium italic leading-relaxed">{item.text}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Section 6: Tips & Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic leading-tight">
          <div className="space-y-10 group overflow-hidden relative">
             <div className="p-10 bg-white dark:bg-gray-800 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 relative">
                <h4 className="text-2xl font-black italic tracking-tight flex items-center gap-4 text-rose-500 font-sans">
                   <ShieldAlert size={28} /> Common Mistakes
                </h4>
                <div className="space-y-6 font-sans">
                   <div className="p-6 bg-rose-500/5 border-l-4 border-rose-500 rounded-r-3xl group/err">
                      <h6 className="text-sm font-black italic text-rose-600 mb-1 font-sans">Using var Everywhere</h6>
                      <p className="text-xs text-gray-500 font-semibold italic">Causes unexpected bugs due to hoisting and leaking from blocks.</p>
                      <code className="text-[10px] text-rose-400 mt-2 block font-mono underline decoration-transparent italic">var x = 10; // Avoid this!</code>
                   </div>
                   <div className="p-6 bg-rose-500/5 border-l-4 border-rose-500 rounded-r-3xl group/err">
                      <h6 className="text-sm font-black italic text-rose-600 mb-1">Global Over-Pollution</h6>
                      <p className="text-xs text-gray-500 font-semibold italic underline decoration-rose-500/10">Hard to manage and maintain in large scale applications.</p>
                      <code className="text-[10px] text-rose-400 mt-2 block font-mono italic underline decoration-transparent">let data = "global"; // Too many of these!</code>
                   </div>
                </div>
             </div>
          </div>

          <div className="space-y-10">
             <div className="p-10 bg-gray-950 rounded-[4rem] border border-white/5 shadow-2xl space-y-8">
                <h4 className="text-2xl font-black italic tracking-tight flex items-center gap-4 text-emerald-500">
                   <Zap size={28} /> Tips & Tricks
                </h4>
                <div className="grid grid-cols-1 gap-4 font-sans italic">
                   {[
                     { t: "Block Scope in Loops", c: "for (let i = 0; i < 5; i++) { ... }" },
                     { t: "Easier Debugging", c: "Use intentional console logs at different levels." },
                     { t: "Functional Isolation", c: "Wrap logic in IIFEs or modules." },
                     { t: "Default to Const", c: "const x = 1; // Change to let only if needed." }
                   ].map((tip, i) => (
                     <div key={i} className="p-5 bg-white/5 rounded-2xl flex items-center justify-between group/tip">
                        <div className="flex flex-col items-start gap-1">
                           <span className="text-white font-black italic text-xs">{tip.t}</span>
                           <code className="text-[10px] text-emerald-500/60 font-mono italic">{tip.c}</code>
                        </div>
                        <CheckCircle size={16} className="text-emerald-500 opacity-20 group-hover/tip:opacity-100 transition-opacity font-sans italic" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans italic">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans italic leading-tight">
            Security In <br /> The Bubble.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose font-sans italic max-w-2xl mx-auto font-medium underline decoration-transparent italic">
            Scope is the architect of JavaScript's internal memory management. Understanding its hierarchy is the single biggest jump you'll make towards senior-level coding.
         </p>
      </footer>

    </div>
  );
};

export default JsScope;