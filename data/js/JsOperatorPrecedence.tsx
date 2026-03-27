import React, { useState } from 'react';
import {
  Scale,
  Zap,
  Divide,
  Plus,
  Minus,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Code2,
  ArrowRight,
  History,
  Settings,
  Activity,
  Maximize2,
  Layers,
  Table,
  Terminal,
  Search,
  Copy,
  Check,
  ChevronRight
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-indigo-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsOperatorPrecedence: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden text-gray-700 dark:text-gray-300">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Activity size={14} className="fill-current" /> EXECUTION PRIORITY ENGINE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Operator <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-emerald-500 to-blue-500 drop-shadow-2xl">
            Precedence
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The internal engine's hierarchy of power. Learn which operators <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-4 tracking-tight text-center">strike first</span> and how to command the execution flow with precision.
        </p>
      </header>

      {/* ── Section 1 & 2: Definitions ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full justify-center">
               <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl text-indigo-500 w-max border border-indigo-100 dark:border-indigo-500/20 shadow-lg">
                 <Scale size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is Precedence?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                   👉 Operator precedence determines which operation is executed first in an expression. 
                 </p>
                 <div className="flex items-center gap-4 p-4 bg-indigo-50 dark:bg-indigo-500/10 border-l-4 border-indigo-500 rounded-xl">
                   <CheckCircle className="text-indigo-500" size={20}/>
                   <span className="font-black text-xs uppercase tracking-widest text-indigo-700 dark:text-indigo-400">Order of Evaluation</span>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-[#0f1218] p-10 rounded-[3rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-10 p-6"><Zap size={150} className="text-indigo-500"/></div>
            <SectionHeader icon={Activity} title="2. Why It Matters?" color="text-indigo-400" />
            <p className="text-indigo-100 text-lg font-medium mb-8 relative z-10">
               Without precedence, the engine wouldn't know if <code className="text-emerald-400 font-bold">2 + 3 * 4</code> should be <span className="underline decoration-rose-500">20</span> or <span className="underline decoration-emerald-500">14</span>.
            </p>
            <CodeBlock code={`console.log(2 + 3 * 4);\n// Output: 14\n\n// Why? Multiplication (*) has higher power than Addition (+)`} title="precedence_test.js" />
        </div>
      </section>

      {/* ── Section 3: PEMDAS Pillar ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl text-center">
            <SectionHeader icon={Settings} title="3. The Priority Pyramid" subtitle="The engine's hierarchy of operations" color="text-emerald-500" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
               {[
                  { p: "1", t: "Parentheses", o: "( )", c: "bg-indigo-500" },
                  { p: "2", t: "Exponentiation", o: "**", c: "bg-blue-500" },
                  { p: "3", t: "Multi/Div/Mod", o: "* / %", c: "bg-emerald-500" },
                  { p: "4", t: "Add/Sub", o: "+ -", c: "bg-teal-500" }
               ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-3xl group hover:-translate-y-2 transition-transform duration-500">
                     <span className={`w-8 h-8 ${item.c} text-white rounded-full flex items-center justify-center font-black text-xs mx-auto mb-4`}>{item.p}</span>
                     <h4 className="text-gray-900 dark:text-white font-black uppercase text-xs mb-2 tracking-widest">{item.t}</h4>
                     <code className="text-2xl font-black text-indigo-500">{item.o}</code>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Section 4 & 5: Breakdowns & Parentheses ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="bg-[#0f1218] p-10 rounded-[3rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <SectionHeader icon={History} title="4. Example Breakdown" color="text-emerald-400" />
            <div className="space-y-6">
               <div className="p-6 bg-emerald-500/10 rounded-2xl border-l-4 border-emerald-500 group">
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-1">Step 01</span>
                  <p className="text-white font-bold italic mb-2">5 * 2 = 10</p>
                  <span className="text-xs text-emerald-500 opacity-60">High Priority Task</span>
               </div>
               <div className="p-6 bg-emerald-500/10 rounded-2xl border-l-4 border-indigo-500 group">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-1">Step 02</span>
                  <p className="text-white font-bold italic mb-2">10 + 10 = 20</p>
                  <span className="text-xs text-indigo-500 opacity-60">Secondary Priority</span>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Maximize2} title="5. Parentheses Control" subtitle="Override the hierarchy" color="text-indigo-500" />
            <p className="text-gray-500 font-medium mb-8 leading-relaxed">
               Parentheses acting as the "Boss" operator—they force the engine to calculate their contents before anything else.
            </p>
            <CodeBlock code={`console.log((10 + 5) * 2);\n// Step 1: 15 (Inside ( ))\n// Step 2: 15 * 2\n// Output: 30`} title="override.js" />
         </div>
      </section>

      {/* ── Section 6: Associativity ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Layers} title="6. Associativity" subtitle="Solving ties in the engine" color="text-blue-500" />
            <div className="grid lg:grid-cols-2 gap-8">
               <div className="p-8 bg-blue-50 dark:bg-blue-500/10 rounded-[2.5rem] border border-blue-100 dark:border-blue-500/20">
                  <h4 className="text-xl font-black text-blue-600 mb-6 flex items-center gap-3">
                     <ArrowRight size={20}/> Left-to-Right
                  </h4>
                  <p className="text-gray-500 font-medium mb-6 italic">Most arithmetic operators follow this direction.</p>
                  <CodeBlock code={`console.log(10 - 5 - 2);\n// 10 - 5 = 5\n// 5 - 2 = 3`} title="arithmetic.js" />
               </div>

               <div className="p-8 bg-emerald-50 dark:bg-emerald-500/10 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-500/20 shadow-xl shadow-emerald-500/5">
                  <h4 className="text-xl font-black text-emerald-600 mb-6 flex items-center gap-3">
                     <History size={20} className="scale-x-[-1]"/> Right-to-Left
                  </h4>
                  <p className="text-gray-500 font-medium mb-6 italic text-right">Assignments and Exponents strike from the right.</p>
                  <CodeBlock code={`let x, y;\nx = y = 5;\n// y = 5 → x = y`} title="assignment.js" />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Full Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl overflow-hidden group">
            <SectionHeader icon={Table} title="7. Precedence Rank Table" subtitle="From High (Power) to Low (Persistence)" color="text-indigo-500" />
            <div className="overflow-x-auto rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-lg mt-8">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 font-black tracking-widest uppercase text-[10px]">
                        <th className="p-6 text-indigo-500">Level</th>
                        <th className="p-6 text-gray-700 dark:text-gray-200">Operators</th>
                     </tr>
                  </thead>
                  <tbody className="font-bold text-sm tracking-tight leading-loose">
                     {[
                        { l: "High", o: "()", c: "text-emerald-500" },
                        { l: "•", o: "++ --", c: "text-blue-500 text-center" },
                        { l: "•", o: "**", c: "text-blue-500 text-center" },
                        { l: "•", o: "* / %", c: "text-blue-500 text-center" },
                        { l: "•", o: "+ -", c: "text-blue-500 text-center" },
                        { l: "•", o: "< > <= >= == ===", c: "text-blue-500 text-center" },
                        { l: "•", o: "&& ||", c: "text-blue-500 text-center" },
                        { l: "Low", o: "? : (Ternary)", c: "text-amber-500" },
                        { l: "Lowest", o: "=", c: "text-rose-500" }
                     ].map((row, i) => (
                        <tr key={i} className="border-b border-gray-50 dark:border-gray-800 last:border-0 group-hover:bg-gray-50 dark:group-hover:bg-gray-900/50 transition-colors">
                           <td className={`p-6 italic ${row.c}`}>{row.l}</td>
                           <td className="p-6 font-mono text-indigo-600 dark:text-indigo-400 leading-none py-4 bg-gray-900/5">{row.o}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 8, 9, 10, 11, 12: Examples & Bugs ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl h-full flex flex-col justify-center">
            <SectionHeader icon={Code2} title="8. Logical Precedence" color="text-amber-500" />
            <p className="text-gray-500 mb-6 font-medium italic">Did you know <code className="text-amber-600 font-black">&&</code> is more powerful than <code className="text-amber-500 font-black">||</code>?</p>
            <CodeBlock code={`console.log(true || false && false);\n// Steps: false && false → false\n// Then: true || false → true\n// Output: true`} title="logic.js" />
         </div>

         <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl h-full flex flex-col justify-center">
            <SectionHeader icon={Activity} title="9. Math vs Comparison" color="text-blue-500" />
            <p className="text-gray-500 mb-6 font-medium italic">Arithmetic always wins over Comparison logic.</p>
            <CodeBlock code={`console.log(5 + 5 > 8);\n// Steps: 5 + 5 = 10\n// Then: 10 > 8 = true\n// Output: true`} title="compare.js" />
         </div>

         <div className="lg:col-span-2 p-10 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-500/20 rounded-[3.5rem] shadow-xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="flex-1">
                  <SectionHeader icon={AlertTriangle} title="10. Real-World Bug Example" color="text-rose-500" subtitle="The equality pitfall" />
                  <p className="text-rose-900 dark:text-rose-200 font-bold mb-6 italic">Evaluate as: <code className="bg-rose-500/20 px-2 rounded">10 + (5 * 2) === 30</code></p>
                  <CodeBlock code={`let result = 10 + 5 * 2 === 30;\n// 20 === 30 → false ❌\n\nlet fix = (10 + 5) * 2 === 30;\n// 30 === 30 → true ✅`} title="bug_report.js" />
               </div>
               <div className="flex-1 grid grid-cols-1 gap-6">
                  <div className="p-8 bg-white dark:bg-gray-800/50 rounded-3xl border border-rose-500/10 flex flex-col justify-center h-full gap-8">
                     <SectionHeader icon={Zap} title="11. Unary Power" color="text-indigo-500" />
                     <CodeBlock code={`let x = 5;\nconsole.log(++x * 2);\n// ++x = 6\n// 6 * 2 = 12\n// Output: 12`} title="unary.js" />
                  </div>
                  <div className="p-8 bg-white dark:bg-gray-800/50 rounded-3xl border border-rose-500/10 flex flex-col justify-center h-full gap-8">
                     <SectionHeader icon={Divide} title="12. Ternary Last" color="text-teal-500" />
                     <p className="text-xs font-black text-gray-400 uppercase tracking-widest leading-loose italic">
                        The ternary operator <code className="text-teal-500">? :</code> is a late bloomer, only running after most math and comparisons are finished.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 13: Lab Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#0c0d11] p-12 rounded-[4rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 select-none font-black text-[15rem] leading-[0.8] text-indigo-500 pointer-events-none group-hover:scale-105 transition-transform duration-1000 uppercase">RUN</div>
            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
               <div className="lg:w-1/2">
                  <SectionHeader icon={Terminal} title="13. Final Blueprint" color="text-indigo-400" />
                  <p className="text-indigo-100 font-medium text-lg leading-relaxed italic drop-shadow-lg mb-8">
                     Visualizing the complex order of operations from powers to products to sums.
                  </p>
                  <CodeBlock code={`console.log(2 + 3 * 2 ** 2);`} title="blueprint.js" />
                  <div className="space-y-3 mt-4">
                     {[
                        "2 ** 2 = 4 (Exponent First)",
                        "3 * 4 = 12 (Multi Second)",
                        "2 + 12 = 14 (Addition Last)"
                     ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs font-black text-indigo-400 uppercase tracking-widest pl-4 border-l border-indigo-500/30">
                           <ChevronRight size={14}/> {step}
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 w-full p-10 bg-black/40 rounded-3xl border border-indigo-500/20 backdrop-blur-xl group-hover:border-indigo-500/40 transition-colors">
                  <h4 className="text-indigo-400 font-mono text-xs tracking-widest font-black uppercase mb-6 flex justify-between items-center group-hover:scale-110 transition-transform">
                     <span>Result Value</span>
                     <History size={14} className="opacity-50 animate-spin-slow"/>
                  </h4>
                  <pre className="text-indigo-400 font-mono text-5xl leading-none overflow-x-auto whitespace-pre selection:bg-indigo-500/30">
                     14
                  </pre>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_20px_indigo]"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          EXECUTION FLOW SECURED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-indigo-500/10 decoration-2">
          "Operator Precedence isn't just about math; it's about the engine's cognitive hierarchy. When you learn the order, you stop guessing and start commanding. Precision is the mark of a true software architect."
        </p>
      </footer>

    </div>
  );
};

export default JsOperatorPrecedence;
