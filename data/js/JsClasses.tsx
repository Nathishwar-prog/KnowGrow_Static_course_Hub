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
  Infinity,
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
  PawPrint
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

const JsClasses: React.FC = () => {
  const [bankBalance, setBankBalance] = useState(0);
  const [secretAttempt, setSecretAttempt] = useState('');
  const [studentMarks, setStudentMarks] = useState(91);

  const getGrade = (marks: number) => {
    return marks > 90 ? 'A' : 'B';
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 animate-pulse tracking-[0.2em]">
          <Construction size={14} className="fill-current" /> OBJECT TEMPLATES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Classes<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-600 drop-shadow-2xl">
            Blueprints
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The architectural core of Object-Oriented JS. Define <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-4 tracking-tight uppercase italic">Structures</span> once and create infinite unique instances.
        </p>
      </header>

      {/* ── Section 1-3: What & Creation ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What & 2. Creation" subtitle="Templates for multi-object systems." color="text-indigo-500" />
            <div className="space-y-6">
               <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                 👉 A <span className="text-indigo-500 font-black px-2 py-0.5 bg-indigo-500/5 rounded-lg border border-indigo-500/10">class</span> is a blueprint for creating objects.
               </p>
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
                  <div className="flex gap-12 items-center">
                     <div className="space-y-4">
                        <div className="flex gap-4 items-center">
                           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-xl shadow-indigo-500/20"><Box size={20} /></div>
                           <span className="text-xs font-black text-gray-400 uppercase tracking-widest italic">Blueprint: Car</span>
                        </div>
                        <ArrowRight className="text-gray-300 rotate-90 ml-6" />
                        <div className="flex gap-4 items-center">
                           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-xl shadow-emerald-500/20"><Target size={20} /></div>
                           <span className="text-xs font-black text-gray-400 uppercase tracking-widest italic">Object: Tesla</span>
                        </div>
                     </div>
                     <div className="flex-1 p-6 bg-slate-900 rounded-3xl border border-white/5">
                        <p className="text-[10px] text-gray-400 font-mono italic">"The constructor() runs automatically when a new object is created."</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[3rem] blur opacity-15"></div>
            <CodeBlock title="class_defn.js" code={`class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\nconst p1 = new Person("Karthick", 22);`} />
         </div>
      </section>

      {/* ── Section 4-6: Inheritance & Methods ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-16 rounded-[5rem] overflow-hidden shadow-2xl relative group border border-white/5">
            <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-110 transition-transform duration-1000">
               <GitMerge size={200} className="text-white" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <SectionHeader icon={GitMerge} title="5. Inheritance & 6. super()" subtitle="Passing traits down the lineage." color="text-indigo-400" />
                  <ul className="space-y-6">
                     {[
                       { t: 'extends', d: 'Creates a child class (inheritance).', icon: ChevronRight },
                       { t: 'super()', d: 'Calls the parent constructor.', icon: FastForward },
                       { t: 'methods', d: 'Common behaviors shared by all instances.', icon: Zap }
                     ].map((point, i) => (
                       <li key={i} className="flex gap-6 items-center">
                          <div className="w-10 h-10 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center">
                             <point.icon size={18} />
                          </div>
                          <div>
                             <h4 className="font-black text-white text-xs uppercase tracking-widest mb-0.5 italic">{point.t}</h4>
                             <p className="text-xs text-gray-500 font-medium italic underline decoration-indigo-500/20 underline-offset-4">{point.d}</p>
                          </div>
                       </li>
                     ))}
                  </ul>
                  <div className="p-8 bg-white/5 border border-white/5 rounded-3xl">
                     <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest block mb-4 italic">Linage Simulation</span>
                     <div className="flex gap-4 items-center">
                        <div className="p-3 bg-white/10 text-white rounded-lg flex items-center gap-2"><Layers size={14}/> Animal</div>
                        <ArrowRight className="text-gray-500" size={14} />
                        <div className="p-3 bg-indigo-500 text-white rounded-lg flex items-center gap-2 shadow-lg shadow-indigo-500/20"><PawPrint size={14}/> Dog</div>
                     </div>
                  </div>
               </div>
               <CodeBlock title="inheritance.js" code={`class Animal {\n    speak() { console.log("Sound"); }\n}\n\nclass Dog extends Animal {\n    bark() { console.log("Woof"); }\n}\n\nconst d = new Dog();\nd.speak(); // "Sound"`} />
            </div>
         </div>
      </section>

      {/* ── Section 7: Getters & Setters ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
         <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-15"></div>
            <CodeBlock title="getters_setters.js" code={`class User {\n    constructor(name) {\n        this._name = name;\n    }\n\n    get displayName() {\n        return this._name.toUpperCase();\n    }\n\n    set info(value) {\n        this._name = value;\n    }\n}`} />
         </div>
         <div className="space-y-8 order-1 lg:order-2">
            <SectionHeader icon={Fingerprint} title="7. Getters & Setters 🔥" subtitle="Intercepting property access." color="text-blue-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group">
               <div className="flex gap-4 items-center mb-6">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><Eye size={18}/></div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">Computed Properties</h4>
               </div>
               <p className="text-gray-500 font-medium italic leading-relaxed italic">
                 "Getters and Setters allow you to execute logic when reading or writing a property. They look like properties but behave like methods."
               </p>
            </div>
         </div>
      </section>

      {/* ── Section 8: Static Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Settings2} title="8. Static Methods" subtitle="Utilities without instantiation." color="text-emerald-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group">
               <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-6 italic underline decoration-emerald-500/20 underline-offset-4">Utility Pattern</h4>
               <p className="text-gray-500 font-medium italic leading-relaxed mb-8 italic">
                 "Static methods are called on the <span className="text-emerald-500 font-black">Class itself</span>, not on instances. Common for math or helper tools."
               </p>
               <div className="flex gap-4">
                  <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-center gap-4 flex-1">
                     <Cpu className="text-emerald-500" size={24} />
                     <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">No "new" needed</span>
                  </div>
               </div>
            </div>
         </div>
         <CodeBlock title="math_util.js" code={`class MathUtil {\n    static add(a, b) {\n        return a + b;\n    }\n}\n\nMathUtil.add(2, 3); // 5`} />
      </section>

      {/* ── Section 9: Private Fields ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-950 p-12 lg:p-20 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-12 transition-transform duration-1000">
               <Lock size={200} className="text-white" />
            </div>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/2 space-y-8">
                  <SectionHeader icon={ShieldAlert} title="9. Private Fields 🔒" subtitle="Encapsulating sensitive data." color="text-rose-500" />
                  <p className="text-gray-400 text-lg font-medium leading-relaxed italic">
                    "Use the <span className="text-rose-500 font-black"># prefix</span> to hide variables from the outside world. This is the modern standard for encapsulation."
                  </p>
                  
                  <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5 space-y-8">
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-rose-500 text-white rounded-xl flex items-center justify-center shadow-xl shadow-rose-500/20"><Lock size={18}/></div>
                           <span className="text-xs font-black text-rose-500 uppercase tracking-widest">Bank Vault</span>
                        </div>
                        <span className="text-3xl font-mono font-black text-white italic">${bankBalance}</span>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={() => setBankBalance(p => p + 100)}
                          className="py-4 bg-emerald-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-transform"
                        >
                           Deposit (Safe)
                        </button>
                        <button 
                          onClick={() => setSecretAttempt('ReferenceError: #balance is private')}
                          className="py-4 bg-white/5 text-gray-400 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-500/20 transition-all"
                        >
                           Hack #balance
                        </button>
                     </div>
                     <AnimatePresence>
                        {secretAttempt && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-center"
                          >
                             <span className="text-[10px] font-mono text-rose-500 font-bold">{secretAttempt}</span>
                          </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               </div>
               <div className="lg:w-1/2 w-full">
                  <CodeBlock title="secure_bank.js" code={`class Bank {\n    #balance = 0; // Private\n\n    deposit(amt) {\n        this.#balance += amt;\n    }\n\n    getBalance() {\n        return this.#balance;\n    }\n}`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 10: Complete Student Example ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Trophy} title="10. Student Application" subtitle="Grade calculation via classes." color="text-blue-500" />
            <div className="p-12 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden">
               <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-10 italic">Interactive Grade Predictor</h4>
               <div className="space-y-4 mb-10">
                  <div className="flex justify-between items-end mb-2">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Enter Marks</span>
                     <span className="text-2xl font-black text-blue-500 italic">{studentMarks}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={studentMarks}
                    onChange={(e) => setStudentMarks(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-100 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-blue-500"
                  />
               </div>
               <div className="flex justify-between items-center p-8 bg-blue-500/5 rounded-3xl border border-blue-500/10">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center font-black text-xl italic shadow-lg shadow-blue-500/20">
                         {getGrade(studentMarks)}
                      </div>
                      <span className="text-xs font-black text-gray-500 uppercase tracking-widest italic">Calculated Grade</span>
                   </div>
                   <Code2 className="text-blue-500 opacity-20" size={32} />
               </div>
            </div>
         </div>
         <CodeBlock title="student_logic.js" code={`class Student {\n    constructor(name, marks) {\n        this.name = name;\n        this.marks = marks;\n    }\n\n    get grade() {\n        return this.marks > 90 ? "A" : "B";\n    }\n}`} />
      </section>

      {/* ── Section 11: Classes vs Objects ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-12 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-6 transition-transform duration-1000">
               <Scale size={200} className="text-white" />
            </div>
            <h3 className="text-white font-black text-3xl mb-12 flex items-center gap-4 italic underline decoration-indigo-500/30 underline-offset-8">
               <Link className="text-indigo-500" /> 11. Architecture Matrix
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className="border-b border-white/10">
                         <th className="py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Feature</th>
                         <th className="py-6 text-[10px] font-black text-indigo-400 uppercase tracking-widest italic tracking-[0.2em] underline decoration-indigo-500/20">Class</th>
                         <th className="py-6 text-[10px] font-black text-emerald-400 uppercase tracking-widest italic tracking-[0.2em] underline decoration-emerald-500/20">Object</th>
                      </tr>
                   </thead>
                   <tbody className="text-sm font-medium">
                      {[
                        { f: 'Role', c: 'Blueprint (Architect) 🏗️', o: 'Instance (House) 🏡' },
                        { f: 'Usage', c: 'Define common structure 📏', o: 'Store unique data 💾' },
                        { f: 'Type', c: 'Definition 🧱', o: 'Data Packet 📦' }
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                           <td className="py-6 text-gray-400 italic font-bold">{row.f}</td>
                           <td className="py-6 text-indigo-400 italic font-black">{row.c}</td>
                           <td className="py-6 text-emerald-400 italic font-black">{row.o}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
            </div>
         </div>
      </section>

      {/* ── Section 12: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="p-12 bg-white dark:bg-gray-800 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
            <SectionHeader icon={Globe} title="12. Domain Use Cases 🌍" color="text-blue-500" />
            <div className="grid grid-cols-2 gap-4">
               {['User Systems 👤', 'Shopping Carts 🛒', 'Game Characters 🤺', 'API Models 📡', 'UI Components 🧱', 'DB Controllers 🗄️'].map((use, i) => (
                  <div key={i} className="p-5 bg-blue-500/5 rounded-2xl border border-blue-500/10 text-center flex items-center justify-center">
                     <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">{use}</span>
                  </div>
               ))}
            </div>
         </div>

         <div className="p-12 bg-slate-900 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group flex flex-col justify-center">
             <div className="space-y-6">
                <div className="flex gap-4 items-center">
                   <div className="w-12 h-12 bg-indigo-500 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/20"><User size={24}/></div>
                   <h4 className="text-white font-black text-xl italic tracking-tight italic">Industry Standard</h4>
                </div>
                <p className="text-gray-400 text-sm font-medium leading-loose italic italic border-l-2 border-indigo-500 pl-6 py-2">
                  "ES6 Classes brought a unified, cleaner syntax to JavaScript prototypes, making JS a first-class citizen in Enterprise Object-Oriented development."
                </p>
             </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
         <p className="text-4xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.4em]">
           Blueprint Finalized.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto italic underline decoration-indigo-500/10 underline-offset-8">
           "A class is not an object, but a promise of one. It defines the character that every instance will wear."
         </p>
      </footer>

    </div>
  );
};

export default JsClasses;