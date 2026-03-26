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
  Settings as SettingsIcon,
  HardDrive
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

const JsClassStatic: React.FC = () => {
  const [accessMode, setAccessMode] = useState<'class' | 'instance'>('class');
  const [mathA, setMathA] = useState(10);
  const [mathB, setMathB] = useState(20);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 animate-pulse tracking-[0.2em]">
          <Cpu size={14} className="fill-current" /> CLASS-LEVEL LOGIC
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Class<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 drop-shadow-2xl uppercase">
            Static
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The engine of shared utilities. Define methods and properties that belong to the <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight uppercase italic text-shadow-sm">Class Prototype</span> itself, not its children.
        </p>
      </header>

      {/* ── Section 1-2: What & Key Idea ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is Static?" subtitle="Shared logic without instances." color="text-emerald-500" />
            <div className="space-y-6">
               <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                 👉 The <span className="text-emerald-500 font-black px-2 py-0.5 bg-emerald-500/5 rounded-lg border border-emerald-500/10">static</span> keyword defines methods or properties that belong to the class itself, <span className="text-rose-500 uppercase font-black">Not</span> to objects.
               </p>
               
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                     <Scale size={150} className="text-emerald-500" />
                  </div>
                  <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-8 italic underline decoration-emerald-500/20 underline-offset-4 tracking-[0.2em]">2. Key Idea Matrix</h4>
                  <div className="grid grid-cols-2 gap-px bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                     <div className="p-6 bg-gray-50/50 dark:bg-gray-800/50 text-[10px] font-black text-gray-400 uppercase tracking-widest">Type</div>
                     <div className="p-6 bg-gray-50/50 dark:bg-gray-800/50 text-[10px] font-black text-gray-400 uppercase tracking-widest">Accessed By</div>
                     <div className="p-6 bg-white dark:bg-gray-800 text-sm font-bold border-t border-gray-100 dark:border-gray-700 italic">Normal Method</div>
                     <div className="p-6 bg-white dark:bg-gray-800 text-sm font-black text-gray-900 dark:text-white border-t border-gray-100 dark:border-gray-700 underline decoration-emerald-500/30">Object (instance)</div>
                     <div className="p-6 bg-emerald-500/5 dark:bg-emerald-500/10 text-sm font-black text-emerald-500 italic border-t border-emerald-100 dark:border-emerald-900/50 underline decoration-emerald-500/50 decoration-2">Static Method</div>
                     <div className="p-6 bg-emerald-500/5 dark:bg-emerald-500/10 text-sm font-black text-emerald-500 border-t border-emerald-100 dark:border-emerald-900/50 italic animate-pulse tracking-tight">Class Itself</div>
                  </div>
               </div>
            </div>
         </div>

         <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[3rem] blur opacity-15"></div>
            <CodeBlock title="math_util.js" code={`class MathUtil {\n    static add(a, b) {\n        return a + b;\n    }\n}\n\n// ✅ Correct\nconsole.log(MathUtil.add(2, 3));\n\n// ❌ Wrong Way\nconst obj = new MathUtil();\nobj.add(2, 3); // TypeError!`} />
         </div>
      </section>

      {/* ── Section 3-4: Basic Example & Why Use ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
               {[
                 { t: 'Utility', d: 'Common functions like Math', icon: Calculator },
                 { t: 'Helpers', d: 'Parsing or validation logic', icon: Target },
                 { t: 'Shared', d: 'Global config constants', icon: Settings2 },
                 { t: 'Efficiency', d: 'No object memory needed', icon: Zap }
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-1 transition-transform">
                    <item.icon className="text-teal-500 mb-4" size={24} />
                    <h5 className="font-black text-[10px] text-gray-400 uppercase tracking-widest mb-1 italic tracking-[0.2em]">{item.t}</h5>
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 italic">{item.d}</p>
                 </div>
               ))}
            </div>
         </div>
         <div className="space-y-8 order-1 lg:order-2 text-right lg:text-left">
            <SectionHeader icon={Calculator} title="3. Math Sandbox & 4. Why?" subtitle="Logic without boundaries." color="text-teal-500" />
            <div className="p-10 bg-emerald-500/5 border border-emerald-500/10 rounded-[3.5rem] space-y-8">
               <div className="flex gap-4 items-center mb-4">
                  <div className="p-3 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/20"><Calculator size={18}/></div>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest italic">MathUtil.add() Lab</span>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <label className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">Input A</label>
                     <input 
                       type="number" 
                       value={mathA} 
                       onChange={(e) => setMathA(parseInt(e.target.value) || 0)}
                       className="w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-4 rounded-2xl text-xl font-black italic focus:ring-2 ring-emerald-500/20 outline-none"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">Input B</label>
                     <input 
                       type="number" 
                       value={mathB} 
                       onChange={(e) => setMathB(parseInt(e.target.value) || 0)}
                       className="w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-4 rounded-2xl text-xl font-black italic focus:ring-2 ring-emerald-500/20 outline-none"
                     />
                  </div>
               </div>
               <div className="p-8 bg-emerald-500 text-white rounded-3xl shadow-xl shadow-emerald-500/20 text-center relative overflow-hidden group">
                  <motion.div 
                    key={mathA + mathB}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10"
                  >
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] block mb-2 opacity-50">Result via Static Method</span>
                     <span className="text-5xl font-black tracking-tighter italic">{mathA + mathB}</span>
                  </motion.div>
                  <Cpu className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-700" size={100} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5-6: Static Properties & vs Instance ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-12 lg:p-20 rounded-[5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-12 transition-transform duration-1000">
               <Fingerprint size={200} className="text-white" />
            </div>
            <div className="flex flex-col lg:flex-row gap-16">
               <div className="lg:w-1/3 space-y-8">
                  <SectionHeader icon={Info} title="5. Static Props & 6. Comparisons" subtitle="Global vs Shared traits." color="text-emerald-400" />
                  <div className="space-y-3">
                     {['class', 'instance'].map((m) => (
                        <button 
                          key={m}
                          onClick={() => setAccessMode(m as any)}
                          className={`w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${accessMode === m ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white/5 text-gray-500'}`}
                        >
                           {m === 'class' ? 'Call User.info() (Static)' : 'Call u.greet() (Instance)'}
                        </button>
                     ))}
                  </div>
                  <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                     <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-4 italic">6. Dynamic Dispatcher</span>
                     <div className="font-mono text-sm text-gray-400 italic">
                        {accessMode === 'class' ? '> User Class' : '> Hello Karthick'}
                     </div>
                  </div>
               </div>
               <div className="lg:w-2/3">
                  <CodeBlock title="static_vs_instance.js" code={`class User {\n    static appName = "MyApp"; // Static Property\n\n    constructor(name) {\n        this.name = name;\n    }\n\n    greet() {\n        return "Hello " + this.name; // Instance Method\n    }\n\n    static info() {\n        return "User class"; // Static Method\n    }\n}\n\nconsole.log(User.appName); // "MyApp"\nconst u = new User("Karthick"); u.greet(); // Instance call`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Using Static Inside Class ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
         <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur opacity-15"></div>
            <CodeBlock title="static_chaining.js" code={`class Calculator {\n    static square(x) {\n        return x * x;\n    }\n\n    static cube(x) {\n        return x * this.square(x); // Calls sibling static\n    }\n}`} />
         </div>
         <div className="space-y-8">
            <SectionHeader icon={Repeat} title="7. Internal Wiring" subtitle="Static calls static." color="text-teal-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Workflow size={100} className="text-teal-500" />
               </div>
               <p className="text-gray-500 font-medium italic leading-relaxed italic mb-8 italic">
                  "Static methods can call other static methods using the <span className="text-emerald-500 font-black">this</span> keyword. In this context, 'this' refers to the Class itself."
               </p>
               <div className="flex gap-4 items-center">
                  <div className="p-4 bg-teal-500/10 text-teal-500 rounded-2xl flex items-center justify-center font-black text-xs italic border border-teal-500/20">this = Class</div>
                  <ArrowRight className="text-gray-300" size={14} />
                  <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center font-black text-xs italic border border-emerald-500/20">Static Logic</div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Static with Inheritance ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#0f172a] p-16 rounded-[5rem] overflow-hidden shadow-2xl relative group border border-white/5">
            <div className="absolute top-0 right-0 p-20 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
               <GitMerge size={200} className="text-white" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <SectionHeader icon={GitMerge} title="8. Static Inheritance 🔥" subtitle="Traits for the lineage." color="text-emerald-400" />
                  <div className="bg-white/5 p-10 rounded-[4rem] border border-white/5 space-y-10">
                     <div className="space-y-12 relative">
                        <div className="flex flex-col gap-8 items-center">
                           <div className="p-6 bg-white/10 text-white rounded-2xl border border-white/10 w-full text-center group cursor-pointer hover:bg-white/20 transition-all">
                              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-1">Parent: Animal</span>
                              <span className="text-sm font-bold italic">static category()</span>
                           </div>
                           <ArrowUpDown className="text-emerald-500 animate-bounce" size={24} />
                           <div className="p-6 bg-emerald-500 text-white rounded-2xl shadow-xl shadow-emerald-500/20 w-full text-center">
                              <span className="text-[10px] font-black text-white/50 uppercase tracking-widest block mb-1">Child: Dog</span>
                              <span className="text-sm font-black italic">Inherits "Living Being"</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <CodeBlock title="static_inheritance.js" code={`class Animal {\n    static category() {\n        return "Living Being";\n    }\n}\n\nclass Dog extends Animal {}\n\nconsole.log(Dog.category()); // ✅ Inherited!`} />
                  <p className="text-xs text-gray-500 font-medium italic text-center mt-6">
                     "Static methods are passed down the prototype chain to sub-classes."
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Globe} title="9. Real-World Engineering" subtitle="Static patterns in JS core." color="text-teal-500" />
         <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { t: 'Math Core', d: 'Math.max(10, 20)', icon: Calculator, code: 'Math.max()' },
              { t: 'Date Engine', d: 'Date.now()', icon: History, code: 'Date.now()' },
              { t: 'App Config', d: 'AppConfig.version = "1.0"', icon: SettingsIcon, code: 'Config.version' }
            ].map((item, i) => (
               <div key={i} className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
                  <div className="w-14 h-14 bg-teal-500/10 text-teal-500 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                     <item.icon size={28}/>
                  </div>
                  <h6 className="font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-2 italic">{item.t}</h6>
                  <p className="text-xs text-gray-400 font-medium mb-8 italic">{item.d}</p>
                  <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl font-mono text-[10px] text-teal-500 font-black border border-gray-100 dark:border-gray-700">
                     &gt; {item.code}
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 10: Complete Student Example ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Trophy} title="10. Student Engine" subtitle="Static processing for instances." color="text-emerald-500" />
            <div className="p-12 bg-[#0b1120] rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform">
                  <BookOpen size={150} className="text-white" />
               </div>
               <div className="space-y-10 relative z-10">
                  <div className="flex gap-6 items-center">
                     <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/20"><User size={28}/></div>
                     <div>
                        <h4 className="text-white font-black text-xl italic tracking-tight">Student Data Instance</h4>
                        <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest italic tracking-[0.2em]">Processing via Static calculate()</p>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/5">
                     <div className="p-6 bg-white/5">
                        <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-2">Marks Input</span>
                        <span className="text-2xl font-black text-white italic">95</span>
                     </div>
                     <div className="p-6 bg-emerald-500/20 flex flex-col justify-center items-center">
                        <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest block mb-2">Static Result</span>
                        <span className="text-3xl font-black text-emerald-500 italic drop-shadow-lg animate-pulse">A</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="lg:w-full">
            <CodeBlock title="student_static.js" code={`class Student {\n    constructor(name, marks) {\n        this.name = name;\n        this.marks = marks;\n    }\n\n    getGrade() {\n        // ✅ Instance delegate to Static\n        return Student.calculateGrade(this.marks);\n    }\n\n    static calculateGrade(marks) {\n        return marks > 90 ? "A" : "B";\n    }\n}`} />
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
         <p className="text-4xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.4em] italic leading-relaxed">
           Static Logic Finalized.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto italic border-l-2 border-emerald-500 pl-8 py-2">
           "Static methods are not just helpers; they are the architectural anchors that define what a class is, independent of any single object."
         </p>
      </footer>

    </div>
  );
};

export default JsClassStatic;