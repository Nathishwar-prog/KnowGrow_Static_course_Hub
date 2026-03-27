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
  GitBranch,
  Split,
  Scale,
  ListTree,
  Lock,
  MessageSquare,
  AlertOctagon,
  NotepadText
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

const JsIfElse: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#070914] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <GitBranch size={14} className="fill-current" /> CONDITIONAL LOGIC
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500 drop-shadow-2xl">
            If / Else
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The foundation of dynamic programming. Learn how to <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight">make decisions</span> and control the flow of your JavaScript application.
        </p>
      </header>

      {/* ── Section 1 & 2: What is If Else + Basic Syntax ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-500 w-max border border-blue-100 dark:border-blue-500/20 shadow-lg">
                 <Split size={32} className="transform rotate-90" />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is if...else?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 The <code>if...else</code> statement is used to make decisions in your code based on certain conditions.
                 </p>
                 <div className="bg-blue-50 dark:bg-blue-500/5 p-5 rounded-2xl border border-blue-200 dark:border-blue-500/20">
                    <p className="font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2 mb-2">
                       <Info size={18}/> It allows your program to:
                    </p>
                    <ul className="text-gray-700 dark:text-gray-300 font-medium space-y-2 ml-2 mt-3">
                       <li className="flex items-center gap-2"><Check size={16} className="text-blue-500"/> Execute different code blocks</li>
                       <li className="flex items-center gap-2"><Check size={16} className="text-blue-500"/> Based on conditions (True or False)</li>
                    </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b1120] p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Code2 size={150} className="text-blue-500"/></div>
               <SectionHeader icon={Terminal} title="2. Basic Syntax" subtitle="The blueprint." color="text-blue-400" />
               <div className="relative z-10">
                  <CodeBlock code={`if (condition) {\n    // runs if condition is true\n} else {\n    // runs if condition is false\n}`} />
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Simple Example & Ladder ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Activity} title="3. Simple Example" subtitle="Yes or no." color="text-indigo-500" />
            <CodeBlock code={`let age = 18;\n\nif (age >= 18) {\n    console.log("You can vote");\n} else {\n    console.log("You cannot vote");\n}`} />
            <div className="mt-8 bg-[#0b1120] p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
               <p className="text-indigo-400 font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Terminal size={14}/> Output
               </p>
               <p className="font-mono text-gray-300">You can vote</p>
            </div>
         </div>

         <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 p-10 border border-indigo-500/20 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-8 opacity-10"><ListTree size={150} className="text-indigo-400"/></div>
            <SectionHeader icon={ListTree} title="4. if...else if Ladder" subtitle="Multiple conditions." color="text-indigo-400" />
            <div className="relative z-10">
               <CodeBlock code={`let marks = 75;\n\nif (marks >= 90) {\n    console.log("A Grade");\n} else if (marks >= 70) {\n    console.log("B Grade");\n} else {\n    console.log("C Grade");\n}`} />
            </div>
         </div>
      </section>

      {/* ── Section 5 & 6: Nested Logic & Real World ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Layers} title="5. Nested if" subtitle="(Advanced Logic)" color="text-violet-500" />
            <CodeBlock code={`let age = 20;\nlet hasID = true;\n\nif (age >= 18) {\n    if (hasID) {\n        console.log("Entry allowed");\n    } else {\n        console.log("ID required");\n    }\n} else {\n    console.log("Not eligible");\n}`} />
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Lock} title="6. Real-World Example" subtitle="Login validation." color="text-rose-500" />
            <CodeBlock code={`let username = "admin";\nlet password = "1234";\n\nif (username === "admin" && password === "1234") {\n    console.log("Login successful");\n} else {\n    console.log("Invalid credentials");\n}`} />
         </div>
      </section>

      {/* ── Section 7: Ternary Operator ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-[#0b1120] border border-blue-500/20 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10"><Zap size={200} className="text-yellow-500"/></div>
            
            <SectionHeader icon={Zap} title="7. Ternary Operator" subtitle="(Short Form)" color="text-yellow-400" />
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10 mt-8">
               <div>
                  <CodeBlock code={`let age = 18;\n\nlet result = (age >= 18) ? "Adult" : "Minor";\nconsole.log(result);`} />
               </div>
               <div className="flex flex-col justify-center">
                  <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-3xl backdrop-blur-sm">
                     <p className="text-yellow-300 font-bold mb-4 opacity-100 text-lg flex items-center gap-2">
                        <ArrowRight size={20}/> Same as if...else, but shorter!
                     </p>
                     <p className="font-mono text-sm text-gray-400">
                        <span className="text-blue-400">condition</span> ? <span className="text-green-400">true_value</span> : <span className="text-rose-400">false_value</span>;
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8 & 9: Truthy / Falsy ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-rose-900/10 via-background to-emerald-900/10 border border-gray-100 dark:border-gray-700 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={AlertOctagon} title="8. Truthy & Falsy Values" subtitle="(VERY IMPORTANT)" color="text-rose-500" />
            
            <div className="grid md:grid-cols-2 gap-12 mt-10">
               <div>
                  <h4 className="text-2xl font-black text-rose-500 mb-6 flex items-center gap-3">
                     <AlertTriangle size={24}/> Falsy Values
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 font-mono font-bold p-4 rounded-xl text-center border border-rose-200 dark:border-rose-500/20">false</div>
                     <div className="bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 font-mono font-bold p-4 rounded-xl text-center border border-rose-200 dark:border-rose-500/20">0</div>
                     <div className="bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 font-mono font-bold p-4 rounded-xl text-center border border-rose-200 dark:border-rose-500/20">"" <span className="text-xs opacity-70">(empty string)</span></div>
                     <div className="bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 font-mono font-bold p-4 rounded-xl text-center border border-rose-200 dark:border-rose-500/20">null</div>
                     <div className="bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 font-mono font-bold p-4 rounded-xl text-center border border-rose-200 dark:border-rose-500/20">undefined</div>
                     <div className="bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 font-mono font-bold p-4 rounded-xl text-center border border-rose-200 dark:border-rose-500/20">NaN</div>
                  </div>
               </div>

               <div>
                  <h4 className="text-2xl font-black text-emerald-500 mb-6 flex items-center gap-3">
                     <CheckCircle size={24}/> Truthy Values
                  </h4>
                  <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 p-8 rounded-2xl flex items-center justify-center h-[calc(100%-3rem)]">
                     <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400 text-center">
                        ✅ Everything else!
                     </p>
                  </div>
               </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
               <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-6">9. Example with Truthy/Falsy</h4>
               <CodeBlock code={`let name = "";\n\nif (name) {\n    console.log("Name exists");\n} else {\n    console.log("Name is empty"); // This runs because "" is Falsy\n}`} />
            </div>
         </div>
      </section>

      {/* ── Section 10: Comparison Operators ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={Scale} title="10. Comparison Operators" color="text-blue-500" />
         
         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <table className="w-full text-left text-sm">
               <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                     <th className="p-6 font-black text-blue-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 w-1/3">Operator</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l">Meaning</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-xl text-blue-600 dark:text-blue-400 font-bold">==</td>
                     <td className="p-6 border-l text-base">Equal (loose)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-xl text-indigo-600 dark:text-indigo-400 font-bold">===</td>
                     <td className="p-6 border-l text-base text-indigo-500 font-bold">Equal (strict) <span className="text-sm font-normal text-gray-500">(checks type too!)</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-xl text-blue-600 dark:text-blue-400 font-bold">!=</td>
                     <td className="p-6 border-l text-base">Not equal</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-xl text-blue-600 dark:text-blue-400 font-bold">&gt;</td>
                     <td className="p-6 border-l text-base">Greater than</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-mono text-xl text-blue-600 dark:text-blue-400 font-bold">&lt;</td>
                     <td className="p-6 border-l text-base">Less than</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          CHOOSE YOUR PATH
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-blue-500/10 decoration-2">
          "Mastering conditionals like if, else, and the ternary operator is the key to routing the behavior of your applications dynamically."
        </p>
      </footer>

    </div>
  );
};

export default JsIfElse;