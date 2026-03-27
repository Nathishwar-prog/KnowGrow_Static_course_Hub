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
  Repeat,
  RotateCw,
  Share2,
  Hash,
  Play,
  StepForward,
  Waypoints,
  Settings2,
  Network,
  Gamepad2,
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-cyan-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsIterators: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#040f16] min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 text-[10px] font-black mb-8 border border-cyan-100 dark:border-cyan-900/50 shadow-xl shadow-cyan-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <StepForward size={14} className="fill-current" /> STEP-BY-STEP CONTROL
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 drop-shadow-2xl">
            Iterators
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the iteration protocol. Learn how to traverse data <span className="text-gray-900 dark:text-white font-bold underline decoration-cyan-500 underline-offset-4 tracking-tight">step-by-step</span> securely and efficiently.
        </p>
      </header>

      {/* ── Section 1 & 2: What is an Iterator + Structure ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-cyan-50 dark:bg-cyan-500/10 rounded-2xl text-cyan-500 w-max border border-cyan-100 dark:border-cyan-500/20 shadow-lg">
                 <StepForward size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is an Iterator?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 An Iterator is an object that allows you to traverse (loop through) data <span className="font-bold text-cyan-500">step-by-step</span>.
                 </p>
                 <div className="bg-emerald-50 dark:bg-emerald-500/5 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-500/20">
                    <p className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-2">
                       <Info size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       An iterator is an object with a <code className="bg-emerald-100 dark:bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-800 dark:text-emerald-300">.next()</code> method that returns values one at a time.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b1620] p-10 rounded-[3rem] border border-cyan-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Box size={150} className="text-cyan-500"/></div>
               <SectionHeader icon={Terminal} title="2. Iterator Structure" subtitle="The blueprint." color="text-cyan-400" />
               <div className="relative z-10">
                  <CodeBlock code={`{\n  next() {\n    return {\n      value: ...,   // current value\n      done: ...     // true/false\n    };\n  }\n}`} />
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4: How Works & Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Settings2} title="3. How Iterator Works" color="text-teal-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">👉 Each call to <code className="text-teal-500 font-bold">.next()</code> accomplishes two things:</p>
            <ul className="space-y-4 font-medium text-gray-700 dark:text-gray-300 mb-8">
               <li className="flex items-center gap-3 bg-teal-50 dark:bg-teal-500/10 p-4 rounded-xl border border-teal-100 dark:border-teal-500/20">
                  <CheckCircle size={20} className="text-teal-500 shrink-0"/> Returns the next <span className="font-mono text-teal-600 dark:text-teal-400 font-bold ml-1">value</span>
               </li>
               <li className="flex items-center gap-3 bg-teal-50 dark:bg-teal-500/10 p-4 rounded-xl border border-teal-100 dark:border-teal-500/20">
                  <CheckCircle size={20} className="text-teal-500 shrink-0"/> Indicates if iteration is finished via <span className="font-mono text-teal-600 dark:text-teal-400 font-bold ml-1">done</span>
               </li>
            </ul>
         </div>

         <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 p-10 border border-cyan-500/20 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute bottom-0 right-10 opacity-10"><Play size={100} className="text-cyan-400"/></div>
            <SectionHeader icon={Play} title="4. Basic Example" subtitle="(Manual Iterator)" color="text-cyan-400" />
            <div className="relative z-10">
               <CodeBlock code={`let arr = [10, 20, 30];\n\nlet iterator = arr[Symbol.iterator]();\n\nconsole.log(iterator.next()); // { value: 10, done: false }\nconsole.log(iterator.next()); // { value: 20, done: false }\nconsole.log(iterator.next()); // { value: 30, done: false }\nconsole.log(iterator.next()); // { value: undefined, done: true }`} />
            </div>
         </div>
      </section>

      {/* ── Section 5 & 6: Iterator vs Iterable & Protocol ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-12">
         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-8 pb-4">
                <SectionHeader icon={Activity} title="5. Iterator vs Iterable" subtitle="(Important Distinction)" color="text-cyan-500" />
            </div>
            <table className="w-full text-left text-sm">
               <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                     <th className="p-6 font-black text-cyan-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 w-1/3">Feature</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l">Iterator</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l">Iterable</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Has .next() method</td>
                     <td className="p-6 border-l text-lg">✅ Yes</td>
                     <td className="p-6 border-l text-lg">❌ No</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Has Symbol.iterator</td>
                     <td className="p-6 border-l text-lg">❌ No</td>
                     <td className="p-6 border-l text-lg">✅ Yes</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Used for looping</td>
                     <td className="p-6 border-l text-lg">✅ Yes</td>
                     <td className="p-6 border-l text-lg">✅ Yes</td>
                  </tr>
               </tbody>
            </table>
            <div className="bg-[#0b1620] p-6 text-center border-t border-cyan-500/20 shadow-inner">
               <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-3">The Relationship</p>
               <div className="inline-flex items-center flex-wrap justify-center gap-3">
                  <span className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">Iterable</span>
                  <ArrowRight className="text-gray-500"/>
                  <span className="text-sm text-gray-400 italic">gives</span>
                  <ArrowRight className="text-gray-500"/>
                  <span className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">Iterator</span>
                  <ArrowRight className="text-gray-500"/>
                  <span className="font-mono bg-gray-800 text-teal-300 px-4 py-2 rounded-lg text-sm border border-teal-500/30">iterator.next()</span>
               </div>
            </div>
         </div>

         <div className="bg-[#0b1620] border border-cyan-500/30 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Waypoints size={300} className="text-cyan-500"/></div>
            
            <SectionHeader icon={Waypoints} title="6. Iterator Protocol" subtitle="Sequence of events." color="text-cyan-400" />
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10 mt-8">
               <div className="bg-cyan-500/10 border border-cyan-500/30 p-8 rounded-3xl shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center font-black text-xl mb-4 shadow-lg">1</div>
                  <h4 className="font-bold text-gray-300 mb-2">Initialize</h4>
                  <p className="font-mono text-sm text-cyan-400 text-center">Call Symbol.iterator()</p>
               </div>
               <div className="bg-cyan-500/10 border border-cyan-500/30 p-8 rounded-3xl shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center font-black text-xl mb-4 shadow-lg">2</div>
                  <h4 className="font-bold text-gray-300 mb-2">Retrieve</h4>
                  <p className="font-mono text-sm text-cyan-400 text-center">Get iterator object</p>
               </div>
               <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-3xl shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xl mb-4 shadow-lg">3</div>
                  <h4 className="font-bold text-gray-300 mb-2">Execute</h4>
                  <p className="font-mono text-sm text-emerald-400 text-center">Call .next() repeatedly</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7 & 8: Loop & Custom Iterators ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Repeat} title="7. Using Iterator with Loop" color="text-sky-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">👉 <code className="bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 px-1 rounded">for...of</code> automatically uses iterators behind the scenes:</p>
            <CodeBlock code={`let str = "JS";\n\nfor (let char of str) {\n    console.log(char);\n}`} />
            <div className="mt-8 bg-sky-50 dark:bg-sky-900/10 p-5 rounded-2xl border border-sky-100 dark:border-sky-500/20">
               <p className="font-bold text-sky-700 dark:text-sky-400 mb-2 text-sm uppercase tracking-widest">Internally it:</p>
               <ul className="text-gray-700 dark:text-gray-300 font-medium space-y-1">
                 <li className="flex items-center gap-2">- Calls iterator</li>
                 <li className="flex items-center gap-2">- Calls .next() repeatedly</li>
               </ul>
            </div>
         </div>

         <div className="lg:col-span-7 bg-[#0b1620] p-10 border border-cyan-500/20 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Code2} title="8. Custom Iterator" subtitle="(Advanced)" color="text-cyan-400" />
            <CodeBlock code={`let myIterator = {\n    current: 1,\n    last: 3,\n\n    next() {\n        if (this.current <= this.last) {\n            return { value: this.current++, done: false };\n        }\n        return { done: true };\n    }\n};\n\nconsole.log(myIterator.next()); // { value: 1, done: false }\nconsole.log(myIterator.next()); // { value: 2, done: false }\nconsole.log(myIterator.next()); // { value: 3, done: false }`} />
         </div>
      </section>

      {/* ── Section 9: Making Object Iterable ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-emerald-900/20 via-[#0b1620] to-[#0b1620] border border-emerald-500/30 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Cpu size={200} className="text-emerald-500"/></div>
            
            <SectionHeader icon={Target} title="9. Making an Object Iterable" subtitle="Using a custom iterator." color="text-emerald-400" />
            <div className="relative z-10">
               <CodeBlock code={`let range = {\n    start: 1,\n    end: 3,\n\n    [Symbol.iterator]() {\n        let current = this.start;\n        let end = this.end;\n\n        return {\n            next() {\n                if (current <= end) {\n                    return { value: current++, done: false };\n                }\n                return { done: true };\n            }\n        };\n    }\n};\n\nfor (let num of range) {\n    console.log(num);\n} // 1, 2, 3`} />
            </div>
         </div>
      </section>

      {/* ── Section 10 & 11: Generators vs & Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col">
            <div className="p-8 pb-4">
                <SectionHeader icon={Zap} title="10. Generator vs Iterator" color="text-rose-500" />
                <p className="text-gray-500 dark:text-gray-400 mb-4 font-medium italic">👉 Generators automatically create iterators</p>
            </div>
            <table className="w-full text-left text-sm flex-1">
               <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                     <th className="p-6 font-black text-rose-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 w-1/3">Feature</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">Iterator</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">Generator</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Manual control</td>
                     <td className="p-6 border-l text-center text-lg">✅ Yes</td>
                     <td className="p-6 border-l text-center text-lg">❌ No</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Simplicity</td>
                     <td className="p-6 border-l text-center text-lg">❌ <span className="text-sm font-medium text-gray-500">Complex</span></td>
                     <td className="p-6 border-l text-center text-lg">✅ <span className="text-sm font-medium text-gray-500">Easy</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Syntax</td>
                     <td className="p-6 border-l text-center text-sm">Complex</td>
                     <td className="p-6 border-l text-center text-sm font-mono text-rose-500 dark:text-rose-400 font-bold">Simple (yield)</td>
                  </tr>
               </tbody>
            </table>
         </div>

         <div className="bg-gradient-to-br from-cyan-900/20 to-[#0b1620] border border-cyan-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Network} title="11. Real-World Use Cases" color="text-cyan-400" />
            
            <div className="mt-8 space-y-6">
               <div className="bg-black/20 p-5 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-colors">
                  <h4 className="font-black text-cyan-400 text-lg flex items-center gap-2 mb-2"><Database size={20}/> Data Streams</h4>
                  <p className="text-gray-300 font-medium">Process large sequential data continuously step-by-step.</p>
               </div>
               
               <div className="bg-black/20 p-5 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
                  <h4 className="font-black text-emerald-400 text-lg flex items-center gap-2 mb-2"><CloudLightning size={20}/> Lazy Loading</h4>
                  <p className="text-gray-300 font-medium">Load only the required data to optimize performance (e.g. infinite scrolling logs).</p>
               </div>
               
               <div className="bg-black/20 p-5 rounded-2xl border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
                  <h4 className="font-black text-indigo-400 text-lg flex items-center gap-2 mb-2"><Gamepad2 size={20}/> Game Logic</h4>
                  <p className="text-gray-300 font-medium">Step-by-step and frame-by-frame state control for characters and environments.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          PRECISION SCRIPTING
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-cyan-500/10 decoration-2">
          "Iterators hand manual sequencing control back to you. Use them when you need to meter out performance or define strict progression."
        </p>
      </footer>

    </div>
  );
};

export default JsIterators;