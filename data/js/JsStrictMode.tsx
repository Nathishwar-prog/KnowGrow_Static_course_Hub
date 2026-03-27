import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Layout, 
  Activity, 
  Terminal, 
  Info, 
  Lock, 
  Unlock, 
  ArrowRight,
  Code2,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  Cpu,
  Eye,
  List,
  Binary,
  Layers,
  Box,
  Trash2,
  Filter,
  Search,
  BookOpen,
  Power,
  UserCheck,
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

const JsStrictMode: React.FC = () => {
  const [isStrict, setIsStrict] = useState(false);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 animate-pulse tracking-[0.2em]">
          <ShieldCheck size={14} className="fill-current" /> ENFORCED STANDARDS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          Strict <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-600 drop-shadow-2xl">
            Mode
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Enable stricter parsing and <span className="text-gray-900 dark:text-white font-bold italic underline decoration-emerald-500/30">error handling</span>. Write cleaner, <span className="text-gray-900 dark:text-white font-bold italic underline decoration-teal-500/30">safer</span> code while avoiding legacy pitfalls.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is Strict Mode?" subtitle="A protective layer for your source code." color="text-emerald-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Strict Mode is a way to enable a stricter parsing and error handling in JavaScript.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: "Bug Catching", icon: Zap, desc: "Find errors early" },
                   { label: "Security", icon: Lock, desc: "Write safer logic" },
                   { label: "Best Practices", icon: Award, desc: "Avoid bad patterns" },
                   { label: "Modernity", icon: Cpu, desc: "Push ES6 usage" }
                 ].map((item, i) => (
                   <div key={i} className="p-5 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 group hover:bg-emerald-500/5 transition-colors">
                      <div className="p-3 rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                         <item.icon size={18} />
                      </div>
                      <div>
                         <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">{item.label}</span>
                         <span className="font-mono text-[10px] font-black">{item.desc}</span>
                      </div>
                   </div>
                 ))}
                 <div className="hidden">
                    {/* Placeholder to keep Award from being undefined if I don't import it */}
                 </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
             <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl">
                <h4 className="text-xl font-black italic mb-6 tracking-tight flex items-center gap-3">
                   <Power size={24} className="text-emerald-500" /> How to Enable
                </h4>
                <div className="space-y-6">
                   <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 underline">Global Scope</span>
                      <CodeBlock code={`"use strict";\nx = 10; // ❌ ReferenceError`} />
                   </div>
                   <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 underline">Function Scope</span>
                      <CodeBlock code={`function test() {\n  "use strict";\n  y = 20; // ❌ Error\n}`} />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Strictness Toggle Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Activity} title="2. Strictness Toggle Lab" subtitle="Experience the difference between legacy and strict behavior." color="text-emerald-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
             <div className="space-y-8">
                <div className="flex items-center gap-6 p-10 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 group relative">
                   <div className="absolute top-0 right-0 p-8 opacity-5">
                      <ShieldCheck size={100} className="text-emerald-500" />
                   </div>
                   <button 
                     onClick={() => setIsStrict(!isStrict)}
                     className={`w-28 h-12 rounded-full relative transition-all duration-500 shadow-2xl ${isStrict ? 'bg-emerald-500' : 'bg-gray-300'}`}
                   >
                     <div className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl transition-all duration-500 flex items-center justify-center ${isStrict ? 'left-[calc(100%-44px)]' : 'left-1'}`}>
                        {isStrict ? <Lock size={18} className="text-emerald-500" /> : <Unlock size={18} className="text-gray-400" />}
                     </div>
                   </button>
                   <div>
                      <h5 className="text-2xl font-black italic tracking-tight">{isStrict ? "Strict Mode ON" : "Legacy Mode OFF"}</h5>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">Enforcing strict execution rules</p>
                   </div>
                </div>

                <div className="bg-gray-950 p-10 rounded-[2.5rem] border border-white/5 space-y-6 animate-in fade-in duration-500">
                   <div className="flex justify-between items-center text-[10px] font-black text-white/20 tracking-[0.4em] uppercase">
                      <span>Source Code</span>
                      <span className="text-emerald-500 italic">SCENARIO: ASSIGNING TO UNDECLARED</span>
                   </div>
                   <div className="font-mono text-sm space-y-2">
                      <div className="text-emerald-500">{isStrict ? '"use strict";' : '// legacy code'}</div>
                      <div className="text-white">x = 10; <span className="text-gray-700 underline">// No declaration</span></div>
                   </div>
                </div>
             </div>

             <div className="bg-gray-50 dark:bg-gray-900/50 p-12 rounded-[3.5rem] border border-gray-100 dark:border-gray-800 relative group overflow-hidden h-[300px] flex items-center justify-center">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                   <Activity size={150} className="text-emerald-500" />
                </div>
                {isStrict ? (
                   <div className="text-center space-y-6 animate-in zoom-in duration-500">
                      <div className="p-6 bg-rose-500 rounded-3xl text-white shadow-2xl shadow-rose-500/40 inline-block">
                         <ShieldAlert size={48} />
                      </div>
                      <div>
                         <h5 className="text-4xl font-black text-rose-500 italic tracking-tighter">ReferenceError!</h5>
                         <p className="text-xs font-black text-gray-500 uppercase tracking-widest mt-2">"x is not defined"</p>
                      </div>
                      <p className="text-sm font-medium text-gray-400 max-w-xs leading-relaxed italic">
                         Strict mode catches the missing <code>let/const</code> declaring and prevents the creation of a global variable.
                      </p>
                   </div>
                ) : (
                   <div className="text-center space-y-6 animate-in zoom-in duration-500">
                      <div className="p-6 bg-emerald-500 rounded-3xl text-white shadow-2xl shadow-emerald-500/40 inline-block">
                         <Play size={48} />
                      </div>
                      <div>
                         <h5 className="text-4xl font-black text-emerald-500 italic tracking-tighter">Works (Bad ❌)</h5>
                         <p className="text-xs font-black text-gray-500 uppercase tracking-widest mt-2">Assignment successful</p>
                      </div>
                      <p className="text-sm font-medium text-gray-500 max-w-xs leading-relaxed">
                         The browser silently creates a global <code>window.x</code>. This is a common source of memory leaks and bugs.
                      </p>
                   </div>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Key Features Grids ── */}
      <section className="max-w-6xl mx-auto mb-32 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {[
           { 
             title: "Declaration Safety", 
             icon: Lock, 
             color: "text-emerald-500 bg-emerald-500/10",
             body: "Undeclared variables throw an error. You must explicitly use let, const, or var.",
             code: 'x = 10; // ❌ ReferenceError'
           },
           { 
             title: "Parameter Precision", 
             icon: Layers, 
             color: "text-teal-500 bg-teal-500/10",
             body: "Prevents duplicate parameter names in functions, ensuring logic clarity.",
             code: 'function sum(a, a) { } // ❌ Error'
           },
           { 
             title: "Secure This", 
             icon: UserCheck, 
             color: "text-sky-500 bg-sky-500/10",
             body: "Calls on regular functions result in undefined rather than the global window object.",
             code: 'show(); // this === undefined'
           },
           { 
             title: "Locked Variables", 
             icon: Trash2, 
             color: "text-rose-500 bg-rose-500/10",
             body: "Disallows using the delete operator on variables. Safeguards your environment.",
             code: 'delete x; // ❌ Error'
           },
           { 
             title: "Reserved Keywords", 
             icon: ShieldCheck, 
             color: "text-indigo-500 bg-indigo-500/10",
             body: "Protects future JS keywords from being used as variable names.",
             code: 'let public = 10; // ❌ Error'
           },
           { 
             title: "Visible Failures", 
             icon: Zap, 
             color: "text-amber-500 bg-amber-500/10",
             body: "Silent errors like assigning to read-only properties (NaN) become loud crashes.",
             code: 'NaN = 5; // ❌ Error'
           }
         ].map((item, i) => (
           <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 flex flex-col group hover:-translate-y-2 transition-transform duration-500">
              <div className={`p-4 rounded-2xl w-fit ${item.color}`}>
                 <item.icon size={24} />
              </div>
              <h4 className="text-2xl font-black italic tracking-tight">{item.title}</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.body}</p>
              <div className="mt-auto p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 font-mono text-[10px] text-rose-500 font-bold">
                 {item.code}
              </div>
           </div>
         ))}
         <div className="hidden">
           {/* Placeholder for Power if I need to use it in map */}
         </div>
      </section>

      {/* ── Section 4: Real World & Comparisons ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 group">
               <SectionHeader icon={Terminal} title="3. Real-World Debugging" subtitle="Catching state-mutating bugs instantly." color="text-emerald-500" />
               <p className="text-gray-500 font-medium max-w-md leading-relaxed">
                  Mistyping a variable name in a function can create a global variable silently. Strict mode prevents this entire category of bugs.
               </p>
               <CodeBlock title="Login Logic Error" code={`"use strict";

function login(user) {
  username = user; // ❌ ReferenceError (Found it!)
}

login("Issac");`} />
            </div>

            <div className="bg-gray-950 p-12 rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-2xl h-full flex flex-col justify-center">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
                  <Cpu size={200} className="text-white" />
               </div>
               <h4 className="text-3xl font-black text-white italic mb-10 tracking-tight flex items-center gap-4">
                  <Binary size={24} className="text-emerald-500" /> Auto Strict Mode
               </h4>
               <p className="text-gray-300 text-sm leading-relaxed mb-10 italic">
                  Modern JavaScript approaches like **ES6 Modules** apply strict mode automatically to all files.
               </p>
               <div className="space-y-4 relative z-10 w-fit">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5 font-mono text-xs font-bold text-emerald-400">
                     <span className="text-white/20 uppercase tracking-widest block mb-1 underline line-through decoration-emerald-500/20">Legacy code</span>
                     // No strict mode by default
                  </div>
                  <div className="p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20 font-mono text-xs font-bold text-emerald-400">
                     <span className="text-emerald-500 uppercase tracking-widest block mb-1 underline italic italic decoration-emerald-500/20 underline">Module.js (Modern)</span>
                     // Strict mode is ENABLED automatically
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* ── Section 5: Best Practices ── */}
      <section className="max-w-6xl mx-auto mb-32 grid md:grid-cols-2 gap-8">
         <div className="p-10 bg-emerald-500/10 rounded-[4rem] border border-emerald-500/20 relative group overflow-hidden">
            <CheckCircle size={100} className="absolute -bottom-10 -right-10 text-emerald-500 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
            <h4 className="text-3xl font-black text-emerald-600 mb-8 italic tracking-tight underline italic decoration-emerald-500/20">When TO Use ✅</h4>
            <ul className="space-y-4">
               {[
                 "In every modern JS application",
                 "Inside functional scopes for legacy apps",
                 "Combined with ESLint for enforcement",
                 "At the top of all standalone script files",
                 "When building reusable library modules"
               ].map((item, i) => (
                 <li key={i} className="flex gap-4 items-center">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 font-black"><ArrowRight size={12} /></div>
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium text-sm">{item}</span>
                 </li>
               ))}
            </ul>
         </div>

         <div className="p-10 bg-rose-500/10 rounded-[4rem] border border-rose-500/20 relative group overflow-hidden">
            <XCircle size={100} className="absolute -bottom-10 -right-10 text-rose-500 opacity-10 group-hover:-rotate-12 transition-transform duration-700" />
            <h4 className="text-3xl font-black text-rose-600 mb-8 italic tracking-tight underline italic decoration-rose-500/20">When NOT to Use ❌</h4>
            <ul className="space-y-4">
               {[
                 "Globally if using old legacy libraries",
                 "If old libraries rely on silent errors",
                 "In code that requires global this behavior",
                 "If code must delete declared variables",
                 "Mixing with non-strict concatenated scripts"
               ].map((item, i) => (
                 <li key={i} className="flex gap-4 items-center">
                    <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center text-white shrink-0 font-black"><ArrowRight size={12} /></div>
                    <span className="text-rose-700 dark:text-rose-400 font-medium text-sm">{item}</span>
                 </li>
               ))}
            </ul>
         </div>
      </section>

      {/* ── Section 6: Pro Recommendations ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="4. Pro Recommendations & Tips" subtitle="Maintaining high-end code status." color="text-emerald-500" />
        <div className="grid md:grid-cols-3 gap-8 mb-12">
           {[
             { title: "Always Enable", desc: "Use strict mode or ES6 modules to prevent hidden bugs and silent failures.", icon: Lock, color: "text-emerald-500 bg-emerald-500/10" },
             { title: "Lint Everything", desc: "Combine strict mode with ESLint. It catches bad practices before you even run the code.", icon: Filter, color: "text-teal-500 bg-teal-500/10" },
             { title: "Avoid Legacy", desc: "Strict mode pushes you toward modern syntax. Embrace it to stay relevant.", icon: RotateCcw, color: "text-sky-500 bg-sky-500/10" }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4">
                <div className={`p-4 rounded-2xl w-fit ${item.color}`}>
                   <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white tracking-tight italic underline decoration-emerald-500/10">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* ── Tips Lab footer ── */}
        <div className="bg-gray-950 p-12 rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)]">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
              <ShieldCheck size={200} className="text-emerald-500" />
           </div>
           <h4 className="text-2xl font-black text-white mb-10 flex items-center gap-4 italic tracking-tight">
              <Terminal size={24} className="text-emerald-500" /> Strategic Tips & Tricks
           </h4>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { label: "Debug Fast", text: "Throws errors immediately", icon: Zap },
                { label: "Module First", text: "Uses Strict Mode auto", icon: Layers },
                { label: "Clean Stmts", text: "\"use strict\" at top", icon: ShieldCheck },
                { label: "Global Check", text: "Avoids global variables", icon: Layout }
              ].map((tip, i) => (
                <div key={i} className="space-y-3 p-6 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-colors">
                   <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xs shadow-lg shadow-emerald-500/20">
                      <tip.icon size={18} />
                   </div>
                   <div>
                      <span className="text-white font-black text-sm block mb-1 tracking-tighter italic">{tip.label}</span>
                      <p className="text-[10px] text-gray-500 font-mono italic underline decoration-emerald-500/20 uppercase tracking-tighter">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
            Safety by Enforced Code.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
            Strict mode isn't just a debugger tool; it's a commitment to professional code quality.<br />
            Enforce strictness, catch errors early, and never allow legacy behavior to compromise your architectural integrity.
         </p>
      </footer>

    </div>
  );
};

// Placeholder icons for undefined ones
const Award = ({ size, className }: any) => <ShieldCheck size={size} className={className} />;
const XCircle = ({ size, className }: any) => <ShieldAlert size={size} className={className} />;
const Play = ({ size, className }: any) => <Activity size={size} className={className} />;

export default JsStrictMode;