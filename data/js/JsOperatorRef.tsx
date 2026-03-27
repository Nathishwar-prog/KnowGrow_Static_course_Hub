import React, { useState, useMemo } from 'react';
import {
  Zap,
  Activity,
  Terminal,
  Info,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  List,
  Binary,
  Box,
  Trash2,
  Filter,
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
  ArrowRight,
  Code2,
  Layers,
  GitBranch,
  Eye,
  Globe,
  Settings,
  CircleSlash,
  Regex,
  TextCursor,
  Hash,
  Sparkles,
  Smartphone,
  ShieldAlert,
  HelpCircle,
  Download,
  Maximize,
  Anchor,
  Table,
  Flame,
  Workflow,
  Target,
  Divide,
  Percent,
  AlignJustify,
  UserCheck,
  MoreHorizontal,
  BoxSelect,
  Layout,
  LayoutDashboard,
  Timer,
  BaggageClaim,
  Network,
  Lock,
  SearchCode,
  CheckSquare,
  History,
  WorkflowIcon,
  Minus,
  X,
  PlusCircle,
  Equal,
  Cpu
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
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans italic">{title}</span>
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 font-medium font-sans border-transparent">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8 font-sans border-transparent">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight italic underline decoration-transparent border-transparent">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color} border-transparent`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed italic border-transparent border-transparent">{subtitle}</p>}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsOperatorRef: React.FC = () => {
    const [valA, setValA] = useState(10);
    const [valB, setValB] = useState(5);
    const [activeOp, setActiveOp] = useState('+');

    const evalResult = useMemo(() => {
        try {
            switch(activeOp) {
                case '+': return valA + valB;
                case '-': return valA - valB;
                case '*': return valA * valB;
                case '/': return valA / valB;
                case '%': return valA % valB;
                case '>': return String(valA > valB);
                case '&&': return String(Boolean(valA && valB));
                default: return 'Err';
            }
        } catch(e) { return 'N/A'; }
    }, [valA, valB, activeOp]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden text-gray-900 dark:text-white border-transparent border-transparent">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 border-transparent">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] border-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] border-transparent"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative italic border-transparent border-transparent">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em] italic border-transparent">
          <WorkflowIcon size={14} className="fill-current border-transparent" /> OPERATIONAL LOGIC MASTER REFERENCE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9] italic border-transparent underline decoration-transparent border-transparent">
          JS Operator <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-600 drop-shadow-2xl font-sans italic border-transparent">
            Reference
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic border-transparent border-transparent border-transparent border-transparent border-transparent">
          Master the <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">symbols and keywords</span> that drive functional logic. From basic <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">arithmetic</span> to advanced <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">ternary</span> and <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">spread</span> utilities, operators are the core building blocks of every JS program.
        </p>
      </header>

      {/* ── Section 1: Definition ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center italic border-transparent border-transparent">
        <div className="space-y-8 italic border-transparent">
          <SectionHeader icon={Info} title="1. What are Operators?" subtitle="The fundamental symbols of action." color="text-sky-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group italic border-transparent">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12 italic border-transparent border-transparent">
               <Cpu size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans italic border-transparent underline decoration-transparent border-transparent border-transparent">
              "Operators are special symbols that perform an operation on one or more operands (values or variables). They transform input data into a new result."
            </p>
            <div className="p-6 bg-sky-500/5 border border-sky-500/10 rounded-2xl italic border-transparent">
               <code className="text-xl font-black italic tracking-tighter text-sky-500 italic border-transparent underline decoration-transparent">let sum = 5 + 3;</code>
               <div className="flex gap-4 mt-4 text-[10px] font-black uppercase tracking-widest text-gray-400 italic border-transparent border-transparent">
                  <span>+ → Operator</span>
                  <span>5, 3 → Operands</span>
               </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={Grid} title="2. Type Taxonomy" subtitle="Categorizing functional symbols." color="text-indigo-500" />
           <div className="p-10 bg-gray-950 rounded-[4rem] border border-white/5 relative group overflow-hidden shadow-2xl italic border-transparent">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 transition-transform duration-[2000ms] italic border-transparent">
                 <Grid size={300} className="text-sky-500" />
              </div>
              <div className="grid grid-cols-2 gap-6 relative z-10 italic border-transparent">
                 {[
                   "Arithmetic", "Assignment", "Comparison", "Logical", "Ternary", "Type", "String", "Spread / Rest"
                 ].map((cat, i) => (
                    <div key={i} className="flex gap-4 items-center italic border-transparent">
                       <div className="p-2 rounded-xl bg-sky-500/10 text-sky-500 italic border-transparent"><CheckSquare size={16} /></div>
                       <span className="text-white font-black italic tracking-tighter text-sm italic border-transparent underline decoration-transparent">{cat}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: Tables (Arithmetic & Assignment) ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent">
        <div className="grid lg:grid-cols-2 gap-12 italic border-transparent">
           <div className="space-y-8 italic border-transparent">
              <SectionHeader icon={PlusCircle} title="2.1 Arithmetic" subtitle="Basic mathematical computation." color="text-sky-600" />
              <div className="p-8 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl italic border-transparent">
                 <table className="w-full text-left text-[11px] italic">
                    <thead>
                       <tr className="border-b border-gray-100 dark:border-gray-700 uppercase tracking-widest text-gray-400 italic border-transparent font-black">
                          <th className="py-3">Op</th>
                          <th className="py-3">Description</th>
                          <th className="py-3">Example</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-gray-700 font-mono italic">
                       {[
                         { o: "+", d: "Addition", e: "5 + 2 = 7" },
                         { o: "-", d: "Subtraction", e: "5 - 2 = 3" },
                         { o: "*", d: "Multiplication", e: "5 * 2 = 10" },
                         { o: "/", d: "Division", e: "6 / 2 = 3" },
                         { o: "%", d: "Modulus", e: "5 % 2 = 1" },
                         { o: "**", d: "Exponent", e: "2 ** 3 = 8" }
                       ].map((row, i) => (
                         <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all italic border-transparent">
                            <td className="py-3 font-black text-sky-500 text-sm italic border-transparent underline decoration-transparent">{row.o}</td>
                            <td className="py-3 text-gray-500 italic border-transparent underline decoration-transparent">{row.d}</td>
                            <td className="py-3 text-gray-400 italic border-transparent underline decoration-transparent">{row.e}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
                 <div className="mt-8 italic border-transparent border-transparent">
                    <CodeBlock code={`let a = 10, b = 3;\nconsole.log(a % b); // 1`} />
                 </div>
              </div>
           </div>

           <div className="space-y-8 italic border-transparent">
              <SectionHeader icon={RotateCcw} title="2.2 Assignment" subtitle="Allocating values to storage." color="text-indigo-600" />
              <div className="p-8 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl italic border-transparent">
                 <table className="w-full text-left text-[11px] italic">
                    <thead>
                       <tr className="border-b border-gray-100 dark:border-gray-700 uppercase tracking-widest text-gray-400 italic border-transparent font-black">
                          <th className="py-3">Op</th>
                          <th className="py-3">Meaning</th>
                          <th className="py-3">Example</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-gray-700 font-mono italic">
                       {[
                         { o: "=", d: "Assign", e: "x = 5" },
                         { o: "+=", d: "x = x + 2", e: "x += 2" },
                         { o: "-=", d: "x = x - 2", e: "x -= 2" },
                         { o: "*=", d: "x = x * 2", e: "x *= 2" },
                         { o: "/=", d: "x = x / 2", e: "x /= 2" }
                       ].map((row, i) => (
                         <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all italic border-transparent">
                            <td className="py-3 font-black text-indigo-500 text-sm italic border-transparent underline decoration-transparent">{row.o}</td>
                            <td className="py-3 text-gray-400 italic border-transparent underline decoration-transparent">{row.e}</td>
                            <td className="py-3 text-gray-500 italic border-transparent underline decoration-transparent">{row.d}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
                 <div className="mt-8 italic border-transparent border-transparent">
                    <CodeBlock code={`let x = 5;\nx += 3; // 8`} />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Comparison & Logical ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent">
        <div className="grid lg:grid-cols-2 gap-12 italic border-transparent">
           <div className="space-y-8 italic border-transparent">
              <SectionHeader icon={History} title="2.3 Comparison" subtitle="Strict vs Loose equality logic." color="text-violet-600" />
              <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 italic border-transparent">
                 <div className="grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-[10px] italic border-transparent">
                    {[
                      { o: "==", m: "Equal (loose)" },
                      { o: "===", m: "Equal (strict)" },
                      { o: "!=", m: "Not equal" },
                      { o: "!==", m: "Strict not equal" },
                      { o: ">", m: "Greater than" },
                      { o: "<", m: "Less than" },
                      { o: ">=", m: "Greater or equal" },
                      { o: "<=", m: "Less or equal" }
                    ].map((row, i) => (
                       <div key={i} className="flex justify-between border-b border-gray-100 dark:border-gray-700 py-2 italic border-transparent">
                          <span className="text-violet-500 font-black italic border-transparent underline decoration-transparent">{row.o}</span>
                          <span className="text-gray-400 italic border-transparent underline decoration-transparent">{row.m}</span>
                       </div>
                    ))}
                 </div>
                 <CodeBlock title="Strict Equality vs Loose" code={`console.log(5 == "5");  // true\nconsole.log(5 === "5"); // false`} />
              </div>
           </div>

           <div className="space-y-8 italic border-transparent">
              <SectionHeader icon={Zap} title="2.4 Logical Operators" subtitle="Boolean truth manipulation." color="text-orange-600" />
              <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 italic border-transparent">
                 <div className="space-y-4 italic border-transparent">
                    <div className="flex justify-between items-center italic border-transparent">
                       <span className="text-2xl font-black italic text-orange-500 italic border-transparent underline decoration-transparent">&&</span>
                       <span className="text-gray-400 font-black italic tracking-widest text-[9px] italic border-transparent underline decoration-transparent">AND</span>
                    </div>
                    <div className="flex justify-between items-center italic border-transparent">
                       <span className="text-2xl font-black italic text-orange-500 italic border-transparent underline decoration-transparent">||</span>
                       <span className="text-gray-400 font-black italic tracking-widest text-[9px] italic border-transparent underline decoration-transparent">OR</span>
                    </div>
                    <div className="flex justify-between items-center italic border-transparent">
                       <span className="text-2xl font-black italic text-orange-500 italic border-transparent underline decoration-transparent">!</span>
                       <span className="text-gray-400 font-black italic tracking-widest text-[9px] italic border-transparent underline decoration-transparent">NOT</span>
                    </div>
                 </div>
                 <CodeBlock title="Complex Condition" code={`let age = 20;\nconsole.log(age > 18 && age < 30); // true`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4: Advanced Hub (Spread, Rest, Ternary) ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
         <SectionHeader icon={Sparkles} title="Advanced Evaluation Hub" subtitle="Enterprise logic patterns." color="text-indigo-500" />
         <div className="grid md:grid-cols-3 gap-8 italic border-transparent border-transparent">
            {/* Ternary */}
            <div className={`p-8 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-indigo-500/10 shadow-xl group hover:-translate-y-2 transition-transform italic flex flex-col border-transparent`}>
               <h4 className="text-xl font-black italic mb-2 italic border-transparent underline decoration-transparent underline decoration-transparent border-transparent">2.5 Ternary</h4>
               <p className="text-gray-500 text-[10px] font-medium mb-6 italic underline decoration-transparent border-transparent">The short-form if-else.</p>
               <CodeBlock code={`let age = 18;\nlet res = age >= 18 ? "Adult" : "Minor";`} />
            </div>
            {/* Spread/Rest */}
            <div className={`p-8 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-sky-500/10 shadow-xl group hover:-translate-y-2 transition-transform italic flex flex-col border-transparent`}>
               <h4 className="text-xl font-black italic mb-2 italic border-transparent underline decoration-transparent underline decoration-transparent border-transparent">2.9 Spread / Rest</h4>
               <p className="text-gray-500 text-[10px] font-medium mb-6 italic underline decoration-transparent border-transparent">Array/Object expansion.</p>
               <CodeBlock code={`// Spread\nlet arr = [1,2,3];\nlet n = [...arr, 4];\n\n// Rest\nfunction sum(...nums) { ... }`} />
            </div>
            {/* Type/String */}
            <div className={`p-8 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-violet-500/10 shadow-xl group hover:-translate-y-2 transition-transform italic flex flex-col border-transparent`}>
               <h4 className="text-xl font-black italic mb-2 italic border-transparent underline decoration-transparent underline decoration-transparent border-transparent">2.6 Type & 2.7 String</h4>
               <p className="text-gray-500 text-[10px] font-medium mb-6 italic underline decoration-transparent border-transparent">Types and Concatenation.</p>
               <CodeBlock code={`typeof "Hello"; // string\nlet text = "Hi" + " " + "Dev";`} />
            </div>
         </div>
      </section>

      {/* ── Section 5: Evaluator Lab ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group font-sans italic border-transparent border-transparent">
        <SectionHeader icon={Eye} title="3. Expression Lab" subtitle="Witnessing operator transformation in real-time." color="text-sky-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-violet-500/20 rounded-[4rem] italic border-transparent border-transparent decoration-transparent border-transparent">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner italic overflow-hidden relative italic border-transparent border-transparent decoration-transparent border-transparent">
             <div className="grid lg:grid-cols-2 gap-16 items-center italic border-transparent border-transparent decoration-transparent border-transparent">
                <div className="space-y-8 italic border-transparent border-transparent">
                   <div className="space-y-4 italic border-transparent border-transparent">
                      <h3 className="text-4xl font-black italic tracking-tighter leading-tight italic border-transparent border-transparent underline decoration-transparent tracking-tighter">Live Evaluator</h3>
                      <p className="text-gray-500 font-medium italic underline decoration-gray-500/10 italic border-transparent border-transparent decoration-transparent border-transparent">Adjust the operands and choose an action to see the operator's final output.</p>
                   </div>
                   
                   <div className="flex gap-4 italic border-transparent">
                      <div className="flex-1 space-y-2 italic border-transparent">
                         <label className="text-[9px] font-black uppercase text-gray-400 italic border-transparent">Operand A</label>
                         <input type="number" value={valA} onChange={(e) => setValA(Number(e.target.value))} className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl px-4 py-3 font-black italic border-transparent outline-none focus:border-sky-500" />
                      </div>
                      <div className="flex-1 space-y-2 italic border-transparent">
                         <label className="text-[9px] font-black uppercase text-gray-400 italic border-transparent">Operand B</label>
                         <input type="number" value={valB} onChange={(e) => setValB(Number(e.target.value))} className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl px-4 py-3 font-black italic border-transparent outline-none focus:border-sky-500" />
                      </div>
                   </div>

                   <div className="flex flex-wrap gap-2 italic border-transparent">
                      {['+', '-', '*', '/', '%', '>', '&&'].map((op) => (
                         <button 
                            key={op}
                            onClick={() => setActiveOp(op)}
                            className={`px-4 py-2 rounded-xl text-[10px] font-black italic border-transparent transition-all ${activeOp === op ? 'bg-sky-500 text-white shadow-xl shadow-sky-500/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}
                         >
                            {op}
                         </button>
                      ))}
                   </div>
                </div>

                <div className="relative italic border-transparent border-transparent">
                   <div className="p-12 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative group overflow-hidden text-center min-h-[350px] flex flex-col justify-center italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent">
                      <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:rotate-45 transition-transform duration-1000 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent">
                         <Workflow size={200} className="text-sky-500 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent" />
                      </div>
                      <div className="relative z-10 space-y-8 uppercase italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent">
                         <div className="space-y-2 italic border-transparent">
                            <span className="text-[10px] font-black italic tracking-[0.3em] text-gray-400 italic border-transparent underline decoration-transparent">Logic Result</span>
                            <div className="text-center italic border-transparent">
                               <span className="text-gray-500 font-mono text-xl italic border-transparent">{valA} {activeOp} {valB}</span>
                               <div className="text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-600 tracking-tighter mt-4 italic border-transparent underline decoration-transparent underline decoration-transparent">{evalResult}</div>
                            </div>
                         </div>
                         <div className="h-px bg-white/5 w-1/2 mx-auto italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent"></div>
                         <p className="text-[9px] text-gray-600 font-black italic tracking-widest italic border-transparent underline decoration-transparent">A ({valA}) {activeOp === '&&' ? 'logical-AND' : activeOp === '>' ? 'greater-than' : 'arithmetic'} B ({valB})</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Real-World Scenarios ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
        <SectionHeader icon={ShieldCheck} title="4. Implementation Contexts" subtitle="Practical usage in enterprise development." color="text-emerald-500" />
        <div className="grid md:grid-cols-3 gap-8 italic font-sans italic border-transparent border-transparent border-transparent">
           {[
             { 
               title: "📌 Login Check", 
               desc: "Logical-AND validation for user credentials.", 
               code: 'if (user === "admin" && pass === "1234") {\n  console.log("Login success");\n}', 
               color: "sky" 
             },
             { 
               title: "📌 Default Fallback", 
               desc: "Logical-OR for handling empty inputs.", 
               code: 'let name = input || "Guest";', 
               color: "indigo" 
             },
             { 
               title: "📌 Safe Navigation", 
               desc: "Optional chaining for nested objects.", 
               code: 'let user = {};\nconsole.log(user?.name); // undefined', 
               color: "emerald" 
             }
           ].map((app, i) => (
              <div key={i} className={`bg-white dark:bg-gray-800 p-8 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col italic border-transparent border-transparent decoration-transparent`}>
                 <h4 className={`text-xl font-black italic mb-4 text-${app.color}-500 italic border-transparent underline decoration-transparent`}>{app.title}</h4>
                 <p className="text-gray-500 text-[10px] font-medium mb-6 italic underline decoration-transparent border-transparent">{app.desc}</p>
                 <div className="mt-auto italic border-transparent">
                    <CodeBlock code={app.code} title={app.title} />
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* ── Section 7: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic border-transparent border-transparent border-transparent">
        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={AlertTriangle} title="5. Common Pitfalls ⚠️" subtitle="Avoid deep logic errors and bugs." color="text-rose-500" />
           <div className="bg-rose-500/5 border border-rose-500/10 p-10 rounded-[3.5rem] space-y-10 group overflow-hidden relative italic border-transparent">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-500 rotate-12 italic border-transparent border-transparent">
                 <CircleSlash size={60} />
              </div>
              {[
                { label: "Loose Equality (==)", text: "Always prefer === over == to ensure type-safe code comparison.", icon: Equal },
                { label: "|| vs ?? Confusion", text: "Logical-OR (||) fails on '0'. Nullish coalescing (??) is safer for defaults.", icon: HelpCircle },
                { label: "Precedence Errors", text: "Multiplication happens before addition. Use () to clarify your intent.", icon: ArrowRight }
              ].map((err, i) => (
                 <div key={i} className="flex gap-6 items-start italic border-transparent border-transparent shadow shadow-rose-900/5 p-4 bg-white/5 rounded-3xl">
                    <div className="p-4 rounded-xl bg-white dark:bg-gray-950 text-rose-500 h-fit italic border-transparent border-transparent">
                       <err.icon size={20} />
                    </div>
                    <div>
                       <h6 className="text-[11px] font-black text-rose-600 uppercase tracking-widest italic underline decoration-transparent mb-1 italic border-transparent">PITFALL: {err.label}</h6>
                       <p className="text-[10px] text-gray-500 font-medium italic underline decoration-rose-500/10 underline decoration-transparent italic border-transparent">{err.text}</p>
                    </div>
                 </div>
              ))}
              <div className="h-px bg-rose-500/10 italic border-transparent"></div>
              <CodeBlock title="Precedence Demo" code={`5 + 3 * 2; // 11, not 16`} />
           </div>
        </div>

        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={Lightbulb} title="Expert Pro Tips" subtitle="Logic from 15+ years of industry dev." color="text-amber-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 italic border-transparent border-transparent">
              {[
                { label: "Strict-First Policy", text: "Make strict equality (===) your default standard for every comparison.", icon: Lock, color: "text-indigo-500" },
                { label: "Ternary Simplicity", text: "Reserve ternary operators for simple binary results. Avoid nested ternaries.", icon: SearchCode, color: "text-sky-500" },
                { label: "Precedence Mastery", text: "Spend time studying the operator hierarchy to avoid critical math bugs.", icon: Target, color: "text-rose-500" },
                { label: "Safe Defaults with ??", text: "Always prefer 'value ?? default' to avoid bugs with 0 or false values.", icon: CheckSquare, color: "text-amber-500" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start group italic border-transparent border-transparent border-transparent shadow-current/5">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${tip.color} group-hover:scale-110 transition-transform italic border-transparent border-transparent`}>
                      <tip.icon size={20} />
                   </div>
                   <div className="flex flex-col italic border-transparent border-transparent">
                      <h6 className={`text-sm font-black italic underline decoration-transparent ${tip.color} block mb-1 uppercase tracking-widest italic border-transparent`}>🚀 {tip.label}</h6>
                      <p className="text-[10px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans italic border-transparent border-transparent">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Section 8: Practice Challenges ── */}
      <section className="max-w-6xl mx-auto mb-32 relative italic border-transparent border-transparent border-transparent">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] -z-10 italic border-transparent border-transparent"></div>
         <SectionHeader icon={Target} title="7. Practice Exercises" subtitle="Test your operational logic logic skills." color="text-emerald-500" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 italic border-transparent border-transparent border-transparent">
            {[
               { title: "Even/Odd %", desc: "Validate if a static number is even or odd using the modulus operator.", icon: Percent, color: "sky" },
               { title: "Value Comparison", desc: "Compare two input variables and return the larger value.", icon: AlignJustify, color: "indigo" },
               { title: "Login Contract", desc: "Create a combined condition to check both name and password strings.", icon: UserCheck, color: "emerald" },
               { title: "Ternary Switch", desc: "Toggle a message string using a conditional ternary operator.", icon: AlignJustify, color: "violet" }
            ].map((tip, i) => (
               <div key={i} className={`p-8 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-4 group relative overflow-hidden italic border-transparent underline decoration-transparent border-transparent border-transparent`}>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform italic border-transparent"></div>
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-${tip.color}-400 group-hover:bg-white/10 transition-all italic border-transparent`}>
                     <tip.icon size={20} />
                  </div>
                  <h5 className="text-white font-black italic tracking-tight italic border-transparent border-transparent underline decoration-transparent border-transparent">TASK #{i+1}</h5>
                  <p className="text-gray-500 text-[10px] italic border-transparent underline decoration-transparent border-transparent underline decoration-transparent">{tip.title}</p>
                  <div className={`p-4 bg-white/5 rounded-xl font-mono text-[9px] text-${tip.color}-400 italic font-black border-transparent underline decoration-transparent border-transparent`}>{tip.desc}</div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 8: Bitwise Advanced ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent">
         <div className="p-12 bg-gray-950 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group italic border-transparent">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform italic border-transparent border-transparent">
               <Binary size={240} className="text-sky-500 italic border-transparent" />
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center italic border-transparent">
               <div className="md:w-1/3 italic border-transparent">
                  <SectionHeader icon={Binary} title="2.8 Bitwise Logic" subtitle="Advanced binary manipulation." color="text-sky-500" />
                  <p className="text-gray-500 text-sm font-medium italic underline decoration-transparent italic border-transparent pb-3 underline decoration-transparent">Use these operators to perform operations directly on the binary representation (0s and 1s) of your numbers.</p>
               </div>
               <div className="flex-1 space-y-4 italic border-transparent">
                  <div className="grid grid-cols-2 gap-4 text-gray-500 font-mono text-xs italic border-transparent">
                     <span className="text-sky-400">& (AND)</span>
                     <span className="text-sky-400">| (OR)</span>
                     <span className="text-sky-400">^ (XOR)</span>
                     <span className="text-sky-400">~ (NOT)</span>
                  </div>
                  <div className="h-px bg-white/5 w-full italic border-transparent"></div>
                  <p className="text-[10px] text-gray-500 italic border-transparent border-transparent">Typically reserved for high-performance math or low-level data processing.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans italic border-transparent border-transparent border-transparent border-transparent">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10 italic border-transparent border-transparent"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight italic border-transparent border-transparent border-transparent border-transparent">
          Operational Mastery. <br /> Atomic Logic Control.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed italic border-transparent border-transparent border-transparent">
          Operators are the engines of JavaScript transformation. By mastering the nuances of equality, logical evaluation, and mathematical progression, you gain the power to write code that is not only functional but also type-safe, predictable, and highly efficient.
        </p>
      </footer>

    </div>
  );
};

export default JsOperatorRef;