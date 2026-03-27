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
  ArrowUpCircle,
  Clock,
  Cpu,
  Brain,
  PlaySquare,
  XCircle,
  HelpCircle,
  Scale
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

const JsHoisting: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#090510] min-h-screen font-sans selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-violet-600 dark:text-violet-400 text-[10px] font-black mb-8 border border-violet-100 dark:border-violet-900/50 shadow-xl shadow-violet-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <ArrowUpCircle size={14} className="fill-current" /> BEHIND THE SCENES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500 drop-shadow-2xl">
            Hoisting
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Variables appearing before they exist? Welcome to <span className="text-gray-900 dark:text-white font-bold underline decoration-violet-500 underline-offset-4 tracking-tight">Hoisting</span>, JavaScript's unique way of allocating memory before your code runs.
        </p>
      </header>

      {/* ── Section 1 & 2: What is Hoisting & Execution Phase ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-violet-50 dark:bg-violet-500/10 rounded-2xl text-violet-500 w-max border border-violet-100 dark:border-violet-500/20 shadow-lg">
                 <ArrowUpCircle size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is Hoisting?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope during the creation phase of execution.
                 </p>
                 <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 p-5 rounded-2xl">
                    <p className="font-bold text-red-600 dark:text-red-400 flex items-center gap-2">
                       <AlertTriangle size={18}/> Important:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mt-2">
                       Only <b>declarations</b> are hoisted, <u>not initializations</u>.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-8 flex flex-col justify-center">
           <SectionHeader icon={Cpu} title="2. How JavaScript Executes Code" subtitle="Two crucial phases." color="text-fuchsia-500" />
           <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative grid gap-6">
              
              <div className="bg-fuchsia-500/10 border border-fuchsia-500/20 p-6 rounded-2xl">
                 <h4 className="text-xl font-black text-fuchsia-400 mb-4 flex items-center gap-2">1️⃣ Creation Phase</h4>
                 <ul className="text-gray-300 font-medium space-y-2">
                    <li className="flex items-center gap-2"><Check size={16} className="text-fuchsia-500"/> Memory is allocated</li>
                    <li className="flex items-center gap-2"><Check size={16} className="text-fuchsia-500"/> Variables → <code className="bg-black/30 px-1 rounded text-fuchsia-300">undefined</code></li>
                    <li className="flex items-center gap-2"><Check size={16} className="text-fuchsia-500"/> Functions → fully stored</li>
                 </ul>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl">
                 <h4 className="text-xl font-black text-blue-400 mb-4 flex items-center gap-2">2️⃣ Execution Phase</h4>
                 <ul className="text-gray-300 font-medium space-y-2">
                    <li className="flex items-center gap-2"><PlaySquare size={16} className="text-blue-500"/> Code runs line by line</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-500"/> Values are assigned</li>
                 </ul>
              </div>

           </div>
        </div>
      </section>

      {/* ── Section 3: Basic var Example ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 border border-violet-500/20 p-12 rounded-[4rem] shadow-xl relative overflow-hidden">
            <SectionHeader icon={Code2} title="3. Basic Example (var Hoisting)" subtitle="The classic unexpected output." color="text-violet-400" />
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10 mt-8">
               <div>
                  <h4 className="font-black text-white flex items-center gap-2 mb-4">What you write:</h4>
                  <CodeBlock code={`console.log(a); // undefined\n\nvar a = 10;`} />
               </div>
               <div>
                  <h4 className="font-black text-white flex items-center gap-2 mb-4">
                     <span className="text-violet-400"><Eye size={20}/></span> Behind the scenes:
                  </h4>
                  <CodeBlock code={`var a;          // hoisted\nconsole.log(a); // undefined\na = 10;         // assignment stays`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4 & 5: Let/Const & TDZ ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8 flex flex-col justify-center">
           <SectionHeader icon={AlertTriangle} title="4. Hoisting with let and const" subtitle="They hoist, but they behave differently." color="text-rose-500" />
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
              <CodeBlock code={`console.log(b); // ❌ ReferenceError\n\nlet b = 20;`} />
              <div className="mt-8 bg-rose-50 dark:bg-rose-500/10 border border-rose-100 dark:border-rose-500/20 p-5 rounded-2xl">
                 <p className="font-bold text-rose-600 dark:text-rose-400 text-lg mb-2">👉 Why?</p>
                 <p className="text-gray-700 dark:text-gray-300 font-medium">Because of the <b>Temporal Dead Zone (TDZ)</b>.</p>
              </div>
           </div>
        </div>

        <div className="space-y-8 flex flex-col justify-center">
           <div className="p-10 bg-[#0b1120] rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-10 opacity-10">
                <Clock size={150} className="text-cyan-500" />
             </div>
             <SectionHeader icon={Clock} title="5. Temporal Dead Zone (TDZ)" subtitle="The forbidden time." color="text-cyan-400" />
             
             <div className="relative z-10 text-gray-300 font-medium space-y-6 mt-4">
                <p>👉 The time between:</p>
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-cyan-500/30 font-mono text-sm text-cyan-300">
                   <div className="bg-white/5 p-3 rounded-lg w-max border border-white/5">Start: Variable declaration</div>
                   <ArrowUpCircle size={16} className="text-cyan-600" />
                   <div className="bg-white/5 p-3 rounded-lg w-max border border-white/5">End: Initialization</div>
                </div>
                <div className="bg-red-500/20 p-4 rounded-xl border border-red-500/30 text-red-300 font-bold flex items-center gap-3">
                   <XCircle size={20} className="shrink-0"/>
                   During TDZ → accessing the variable throws an Error.
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Function Hoisting ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Activity} title="6. Function Hoisting" subtitle="Declaration vs Expression" color="text-teal-500" />
        
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-teal-500/20 relative">
              <div className="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white font-black px-6 py-2 rounded-full shadow-lg whitespace-nowrap text-sm">
                 ✅ Function Declaration (Fully Hoisted)
              </div>
              <div className="mt-8">
                 <CodeBlock code={`greet(); // Works!\n\nfunction greet() {\n    console.log("Hello");\n}`} />
              </div>
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-rose-500/20 relative">
              <div className="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white font-black px-6 py-2 rounded-full shadow-lg whitespace-nowrap text-sm">
                 ❌ Function Expression (Not Fully Hoisted)
              </div>
              <div className="mt-8">
                 <CodeBlock code={`sayHi(); // ❌ Error (sayHi is not a function)\n\nvar sayHi = function () {\n    console.log("Hi");\n};`} />
                 <p className="mt-4 p-4 bg-rose-50 dark:bg-rose-500/10 rounded-xl text-rose-600 dark:text-rose-400 font-bold text-sm">
                    👉 Only variable <code>sayHi</code> is hoisted (<code className="bg-white/50 dark:bg-black/20 px-1 rounded">undefined</code>), not the function body.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 7: var vs let vs const ── */}
      <section className="max-w-5xl mx-auto mb-32">
         <SectionHeader icon={Scale} title="7. var vs let vs const (Hoisting)" subtitle="A definitive comparison." color="text-indigo-500" />
         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900/50">
                        <th className="p-6 text-sm font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Feature</th>
                        <th className="p-6 text-sm font-black text-yellow-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l font-mono">var</th>
                        <th className="p-6 text-sm font-black text-cyan-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l font-mono">let</th>
                        <th className="p-6 text-sm font-black text-rose-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l font-mono">const</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-medium text-gray-700 dark:text-gray-300">
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 font-bold">Hoisted?</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">✅ Yes</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">✅ Yes</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">✅ Yes</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 font-bold">Initial value (Hoist)</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l font-mono text-gray-500">undefined</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l font-bold text-rose-500">❌ TDZ</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l font-bold text-rose-500">❌ TDZ</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 font-bold">Access before declare</td>
                        <td className="p-6 border-l text-green-500">Allowed</td>
                        <td className="p-6 border-l text-red-500">Error</td>
                        <td className="p-6 border-l text-red-500">Error</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 8, 9 & 10: Visual Execution & Tricky Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-16">
         
         {/* Visual Flow Header */}
         <div className="bg-[#0b1120] p-10 rounded-[3rem] border border-white/5 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 opacity-10 p-10"><Layers size={200} className="text-violet-500"/></div>
             <h3 className="text-3xl font-black text-white mb-8 relative z-10 flex items-center gap-3">
                 🎬 8. Visual Execution Flow
             </h3>
             <div className="relative z-10 flex flex-col md:flex-row gap-6 font-mono">
                <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-white/10">
                   <h4 className="text-violet-400 font-bold mb-4 uppercase tracking-widest text-xs">Creation Phase:</h4>
                   <p className="text-gray-300">a → <span className="text-gray-500">undefined</span></p>
                   <p className="text-gray-300 mt-2">b → <span className="text-rose-400">TDZ</span></p>
                </div>
                <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-white/10">
                   <h4 className="text-fuchsia-400 font-bold mb-4 uppercase tracking-widest text-xs">Execution Phase:</h4>
                   <p className="text-green-400">✔ assign values</p>
                   <p className="text-green-400 mt-2">✔ run statements</p>
                </div>
             </div>
         </div>

         <div className="grid lg:grid-cols-2 gap-8">
            {/* Tricky Example */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">
               <SectionHeader icon={HelpCircle} title="9. Tricky Example" subtitle="(Interview Favorite)" color="text-amber-500" />
               <div className="flex-1 space-y-6">
                  <CodeBlock code={`var x = 5;\n\nfunction test() {\n    console.log(x);\n    var x = 10;\n}\n\ntest();`} />
                  <div className="bg-amber-50 dark:bg-amber-500/10 p-5 rounded-2xl border border-amber-100 dark:border-amber-500/20">
                     <p className="font-bold text-amber-700 dark:text-amber-400">🤔 Output:</p>
                     <p className="font-mono text-gray-500 mt-2">undefined</p>
                  </div>
                  <div>
                     <p className="font-bold text-gray-700 dark:text-gray-300 mb-3">🔍 Why?</p>
                     <CodeBlock code={`function test() {\n    var x;          // hoisted inside function scope\n    console.log(x); // undefined\n    x = 10;         // assigned later\n}`} />
                  </div>
               </div>
            </div>

            {/* Another Important Example */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">
               <SectionHeader icon={Brain} title="10. Execution Priority" subtitle="Another Important Example." color="text-blue-500" />
               <div className="flex-1 space-y-6">
                  <CodeBlock code={`console.log(a);\n\nfunction a() {}`} />
                  <div className="bg-blue-50 dark:bg-blue-500/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-500/20">
                     <p className="font-bold text-blue-700 dark:text-blue-400">🤔 Output:</p>
                     <p className="font-mono text-gray-700 dark:text-gray-300 mt-2">Function definition <i>(not undefined)</i></p>
                  </div>
                  <div className="bg-[#0b1120] p-6 rounded-2xl shadow-inner mt-auto">
                     <p className="font-bold text-fuchsia-400 mb-2">👉 Because:</p>
                     <p className="text-gray-300 font-medium">Functions are <b>fully hoisted</b> before variables.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          LIFTED TO THE TOP
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-violet-500/10 decoration-2">
          "Understanding hoisting and the execution context is the key to mastering JavaScript's most unexpected behaviors."
        </p>
      </footer>

    </div>
  );
};

export default JsHoisting;