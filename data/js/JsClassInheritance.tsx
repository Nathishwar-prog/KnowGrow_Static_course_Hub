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
  GitBranch,
  ArrowUpCircle,
  PawPrint,
  Tractor,
  Settings2,
  Car as CarIcon
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-purple-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsClassInheritance: React.FC = () => {
  const [overrideMode, setOverrideMode] = useState<'parent' | 'child' | 'super'>('parent');
  const [isSuperCalled, setIsSuperCalled] = useState(true);

  const getOutput = () => {
    if (overrideMode === 'parent') return "Animal makes sound";
    if (overrideMode === 'child') return "Dog barks";
    return "Animal makes sound\nDog barks";
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 text-[10px] font-black mb-8 border border-purple-100 dark:border-purple-900/50 shadow-xl shadow-purple-500/5 animate-pulse tracking-[0.2em]">
          <GitMerge size={14} className="fill-current" /> GENETIC ARCHITECTURE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Class<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 drop-shadow-2xl uppercase">
            Inheritance
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the power of <span className="text-gray-900 dark:text-white font-bold underline decoration-purple-500 underline-offset-4 tracking-tight uppercase italic">Trait Passing</span>. Reuse logic, override behaviors, and build deep object hierarchies.
        </p>
      </header>

      {/* ── Section 1-2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What & 2. Why?" subtitle="Efficient code via lineages." color="text-purple-500" />
            <div className="space-y-6">
               <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                 👉 <span className="text-purple-500 font-black px-2 py-0.5 bg-purple-500/5 rounded-lg border border-purple-500/10">Inheritance</span> means a class can use properties and methods of another class.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Reuse', text: '♻️ Stop duplicating code', icon: RefreshCw },
                    { label: 'Structure', text: '🏗️ Cleaner hierarchies', icon: Layers },
                    { label: 'Maintain', text: '🛠️ Fix code once, update all', icon: Settings2 },
                    { label: 'Standard', text: '📜 Unified data models', icon: ShieldCheck }
                  ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-1 transition-transform">
                       <item.icon className="text-purple-500 mb-3" size={20} />
                       <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1 underline decoration-purple-500/20 underline-offset-4">{item.label}</span>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-[#0b1120] p-12 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000">
               <GitBranch size={150} className="text-indigo-400" />
            </div>
            <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-10 italic">Trait Flow Visualization 🧬</h4>
            <div className="space-y-12 relative">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white font-black italic shadow-xl">A</div>
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent relative">
                     <motion.div 
                       animate={{ x: [0, 200, 0] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                       className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full blur-sm"
                     />
                  </div>
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-2xl flex items-center justify-center text-white font-black italic shadow-2xl shadow-purple-500/20">B</div>
               </div>
               <p className="text-sm text-gray-400 font-mono text-center">
                  "Child B expands Parent A while keeping all its core features."
               </p>
            </div>
         </div>
      </section>

      {/* ── Section 3-4: extends & Basic Example ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8 order-2 lg:order-1">
            <CodeBlock title="animal_lineage.js" code={`class Animal {\n    speak() {\n        console.log("Animal sound");\n    }\n}\n\nclass Dog extends Animal {\n    bark() {\n        console.log("Woof!");\n    }\n}\n\nconst d = new Dog();\nd.speak(); // Inherited from Animal\nd.bark();  // Dog's own unique trait`} />
         </div>
         <div className="space-y-8 order-1 lg:order-2 text-right lg:text-left">
            <SectionHeader icon={PawPrint} title="3-4. Basic extends" subtitle="The keyword of connection." color="text-indigo-500" />
            <p className="text-gray-500 font-medium leading-relaxed italic border-r-4 border-indigo-500 pr-8 py-2 inline-block">
               "Use the <span className="text-indigo-500 font-black px-2 py-0.5 bg-indigo-500/5 rounded-lg border border-indigo-500/10 uppercase">extends</span> keyword to link two classes. The Child becomes a specialized version of the Parent."
            </p>
         </div>
      </section>

      {/* ── Section 5: Constructor & super() ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-12 lg:p-20 rounded-[5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-12 transition-transform duration-1000">
               <ArrowUpCircle size={200} className="text-white" />
            </div>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/2 space-y-8">
                  <SectionHeader icon={Info} title="5. The super() Bridge" subtitle="Syncing constructors." color="text-fuchsia-500" />
                  <p className="text-gray-400 text-lg font-medium leading-relaxed italic font-bold uppercase">
                    ⚠️ "You MUST call super() in a child constructor before accessing 'this'."
                  </p>
                  
                  <div className="bg-white/5 p-8 rounded-[3rem] border border-white/5 space-y-6">
                     <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-4">Constructor Validator</span>
                     <div className="flex gap-4 items-center">
                        <button 
                          onClick={() => setIsSuperCalled(false)}
                          className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${!isSuperCalled ? 'bg-rose-500 text-white shadow-xl shadow-rose-500/20' : 'bg-white/5 text-gray-500'}`}
                        >
                           Missing super()
                        </button>
                        <button 
                          onClick={() => setIsSuperCalled(true)}
                          className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${isSuperCalled ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/20' : 'bg-white/5 text-gray-500'}`}
                        >
                           With super()
                        </button>
                     </div>
                     <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 text-center transition-all h-20 flex items-center justify-center">
                        {!isSuperCalled ? (
                          <div className="flex items-center gap-2 text-rose-500 font-mono text-xs">
                             <AlertTriangle size={14} /> ReferenceError: Must call super constructor
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs">
                             <CheckCircle size={14} /> Class Blueprint Validated
                          </div>
                        )}
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 w-full">
                  <CodeBlock title="super_constructor.js" code={`class Dog extends Animal {\n    constructor(name, breed) {\n        super(name); // Calls Parent\n        this.breed = breed;\n    }\n}`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6-7: Overriding & super in Methods ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
                  <SectionHeader icon={Zap} title="6-7. Polymorphism" subtitle="Replacing & Enhancing." color="text-purple-500" />
                  <p className="text-sm text-gray-500 font-medium italic leading-relaxed italic mb-8 italic">
                    "Child classes can modify parent methods (override) or use 'super.method()' to extend them with additional behavior."
                  </p>
                  <div className="space-y-3">
                     {['parent', 'child', 'super'].map((m) => (
                        <button 
                          key={m}
                          onClick={() => setOverrideMode(m as any)}
                          className={`w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${overrideMode === m ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-50 dark:bg-gray-700 text-gray-400'}`}
                        >
                           {m === 'parent' ? 'Parent speak()' : m === 'child' ? 'Child speak()' : 'super.speak() + logic'}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            <div className="lg:col-span-2 bg-[#0b1120] p-12 rounded-[4.5rem] border border-white/5 shadow-2xl flex flex-col justify-between group overflow-hidden relative">
               <div className="absolute -right-4 -top-4 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                  <Repeat size={150} className="text-white" />
               </div>
               <div>
                  <h5 className="font-black text-[10px] text-indigo-400 uppercase tracking-widest mb-8 italic underline decoration-indigo-500/20 underline-offset-4">Method Dispatcher 📣</h5>
                  <div className="flex-1 bg-white/5 rounded-[3rem] p-10 font-mono text-xl text-white italic border border-white/5 shadow-inner">
                     {getOutput().split('\n').map((line, i) => (
                        <div key={i} className={i > 0 ? 'mt-2 text-indigo-400' : ''}>
                           &gt; {line}
                        </div>
                     ))}
                  </div>
               </div>
               <div className="mt-8">
                  <CodeBlock title="method_override.js" code={`class Dog extends Animal {\n    speak() {\n        super.speak(); // Optional parent call\n        console.log("Bark!");\n    }\n}`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Multi-Level Inheritance ── */}
      <section className="max-w-6xl mx-auto mb-32 text-center">
         <SectionHeader icon={Layers} title="8. Multi-Level Inheritance" subtitle="The family tree of data." color="text-indigo-500" />
         <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-12">
            {[
              { t: 'Animal', c: 'Base Class', icon: PawPrint, bg: 'bg-indigo-500' },
              { t: 'Dog', c: 'Middle Class', icon: DogIcon, bg: 'bg-purple-500' },
              { t: 'Puppy', c: 'Derived Class', icon: Sparkles, bg: 'bg-fuchsia-500' }
            ].map((tier, i) => (
               <React.Fragment key={i}>
                  {i > 0 && <ArrowRight className="text-gray-300 dark:text-gray-700 hidden md:block" />}
                  <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:scale-105 transition-transform w-56">
                     <div className={`w-12 h-12 ${tier.bg} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                        <tier.icon size={20} />
                     </div>
                     <h5 className="font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-1">{tier.t}</h5>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">{tier.c}</p>
                  </div>
               </React.Fragment>
            ))}
         </div>
      </section>

      {/* ── Section 9: Complete Example (Vehicle) ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8 text-right lg:text-left">
            <SectionHeader icon={Trophy} title="9. Vehicle Factory" subtitle="A complete architectural example." color="text-blue-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-2xl relative group overflow-hidden">
               <div className="absolute -left-4 -top-4 p-8 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                  <Tractor size={100} className="text-blue-500" />
               </div>
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                     <CarIcon className="text-blue-500" size={32} />
                     <div className="h-10 w-[2px] bg-gray-100 dark:bg-gray-700"></div>
                     <span className="text-2xl font-black text-gray-900 dark:text-white italic tracking-tighter uppercase whitespace-nowrap">Toyota Innova</span>
                  </div>
                  <div className="flex gap-2">
                     <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase tracking-widest rounded-lg">Started</span>
                     <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[8px] font-black uppercase tracking-widest rounded-lg">Info Ready</span>
                  </div>
               </div>
            </div>
         </div>
         <CodeBlock title="vehicle_factory.js" code={`class Vehicle {\n    start() { console.log(this.brand + " started"); }\n}\n\nclass Car extends Vehicle {\n    constructor(brand, model) {\n        super(brand);\n        this.model = model;\n    }\n    info() { console.log(this.brand, this.model); }\n}`} />
      </section>

      {/* ── Section 10: Inheritance vs Composition ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-12 lg:p-20 rounded-[5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 p-12 opacity-5 scale-150 group-hover:rotate-6 transition-transform duration-1000">
               <Scale size={200} className="text-white" />
            </div>
            <h3 className="text-white font-black text-3xl mb-12 flex items-center gap-4 italic underline decoration-purple-500/30 underline-offset-8">
               <GitCompare className="text-purple-500" /> 10. Design Alternatives
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className="border-b border-white/10">
                         <th className="py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Feature</th>
                         <th className="py-6 text-[10px] font-black text-purple-400 uppercase tracking-widest italic tracking-[0.2em]">Inheritance</th>
                         <th className="py-6 text-[10px] font-black text-emerald-400 uppercase tracking-widest italic tracking-[0.2em]">Composition</th>
                      </tr>
                   </thead>
                   <tbody className="text-sm font-medium">
                      {[
                        { f: 'Relationship', i: '"is-a" (Cat is Animal)', c: '"has-a" (Car has Engine)' },
                        { f: 'Flexibility', i: 'Rigid / Locked 🔒', c: 'Highly Flexible 🧩' },
                        { f: 'Focus', i: 'Common Traits 🧬', o: 'Modular Components 🧱' }
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                           <td className="py-6 text-gray-400 italic font-bold">{row.f}</td>
                           <td className="py-6 text-purple-400 italic font-black">{row.i}</td>
                           <td className="py-6 text-emerald-400 italic font-black">{row.c || (row as any).o}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
            </div>
         </div>
      </section>

      {/* ── Section 11: Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32 grid md:grid-cols-2 gap-8">
         <div className="p-10 bg-rose-500/5 border border-rose-500/10 rounded-[3.5rem] flex flex-col justify-between group">
            <div>
               <SectionHeader icon={AlertCircle} title="11. Dead Ends ⚠️" subtitle="Avoid these pitfalls." color="text-rose-500" />
               <ul className="space-y-4">
                  {[
                    'Forgetting super() call ❌',
                    'Infinite recursive calls 🔄',
                    'Over-nesting depth 🪜',
                    'Violating the Is-A rule 🐈‍⬛'
                  ].map((err, i) => (
                    <li key={i} className="text-xs font-bold text-gray-600 dark:text-gray-400 italic flex items-center gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span> {err}
                    </li>
                  ))}
               </ul>
            </div>
         </div>
         <div className="p-10 bg-emerald-500/5 border border-emerald-500/10 rounded-[3.5rem] flex flex-col justify-center text-center italic">
            <span className="text-[8px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-4">Best Practice</span>
            <p className="text-gray-500 font-medium leading-relaxed italic italic font-bold">
               "Inheritance is a powerful hammer, but not every problem is a nail. Build deep hierarchies only when a true parent-child relationship exists."
            </p>
         </div>
      </section>

      {/* ── Section 12: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid md:grid-cols-4 gap-6">
            {[
              { t: 'User Roles', d: 'Admin, Root, Guest', icon: User },
              { t: 'Game Dev', d: 'Hero, Enemy, NPC', icon: Trophy },
              { t: 'UI Systems', d: 'Buttons, Modals', icon: Monitor },
              { t: 'API Models', d: 'REST, GraphQL', icon: Globe }
            ].map((use, i) => (
               <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group">
                  <use.icon className="mx-auto text-purple-500 mb-4 group-hover:scale-110 transition-transform" size={24} />
                  <h6 className="font-black text-[10px] text-gray-900 dark:text-white uppercase tracking-widest mb-1 italic">{use.t}</h6>
                  <p className="text-[10px] text-gray-400 italic font-medium">{use.d}</p>
               </div>
            ))}
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-10"></div>
         <p className="text-4xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.4em]">
           Hierarchy Locked.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto italic border-y border-purple-100/10 py-4">
           "Inheritance is the art of giving your future self the best starting position. Build wisely."
         </p>
      </footer>

    </div>
  );
};

// Mock Icon for Multi-Level
const DogIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 5.172a2 2 0 0 0-1.414.586L3 11.344V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.656l-5.586-5.586A2 2 0 0 0 14 5.172Z"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><circle cx="12" cy="11.5" r="1.5"/></svg>
);

export default JsClassInheritance;