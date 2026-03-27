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
  Activity as PlaySquare,
  Repeat1,
  Waypoints,
  Settings2,
  Network
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-fuchsia-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsIterables: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#120510] min-h-screen font-sans selection:bg-fuchsia-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] font-black mb-8 border border-fuchsia-100 dark:border-fuchsia-900/50 shadow-xl shadow-fuchsia-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Repeat size={14} className="fill-current" /> ADVANCED LOOPING
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-500 drop-shadow-2xl">
            Iterables
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Unlock the iteration protocol. Learn how objects can be <span className="text-gray-900 dark:text-white font-bold underline decoration-fuchsia-500 underline-offset-4 tracking-tight">looped over</span> seamlessly using modern JavaScript constructs.
        </p>
      </header>

      {/* ── Section 1 & 2: What are Iterables + Built-in ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl group-hover:bg-fuchsia-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-fuchsia-50 dark:bg-fuchsia-500/10 rounded-2xl text-fuchsia-500 w-max border border-fuchsia-100 dark:border-fuchsia-500/20 shadow-lg">
                 <RotateCw size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are Iterables?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 Iterables are objects that can be <span className="font-bold text-fuchsia-500">looped over</span> (iterated) using constructs like:
                 </p>
                 <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-mono text-sm border border-gray-200 dark:border-gray-700 shadow-sm">for...of</span>
                    <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-mono text-sm border border-gray-200 dark:border-gray-700 shadow-sm">... (Spread)</span>
                    <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-mono text-sm border border-gray-200 dark:border-gray-700 shadow-sm">Array.from()</span>
                 </div>
                 
                 <div className="bg-pink-50 dark:bg-pink-500/5 p-5 rounded-2xl border border-pink-200 dark:border-pink-500/20">
                    <p className="font-bold text-pink-700 dark:text-pink-400 flex items-center gap-2 mb-2">
                       <Info size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">An iterable is any object that implements the <b>iteration protocol</b>.</p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#1f0f1c] p-10 rounded-[3rem] border border-fuchsia-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Database size={150} className="text-fuchsia-500"/></div>
               <SectionHeader icon={List} title="2. Built-in Iterables" subtitle="Native iteration." color="text-fuchsia-400" />
               <div className="relative z-10 w-full mt-4">
                  <div className="bg-black/40 border border-fuchsia-500/20 rounded-2xl overflow-hidden shadow-inner p-6 space-y-4">
                     <p className="font-mono text-sm text-gray-300 flex justify-between items-center"><span className="text-blue-400">let</span> arr = [1, 2, 3]; <span className="text-gray-500">// Array</span></p>
                     <p className="font-mono text-sm text-gray-300 flex justify-between items-center"><span className="text-blue-400">let</span> str = "Hello"; <span className="text-gray-500">// String</span></p>
                     <p className="font-mono text-sm text-gray-300 flex justify-between items-center"><span className="text-blue-400">let</span> map = <span className="text-rose-400">new</span> Map(); <span className="text-gray-500">// Map</span></p>
                     <p className="font-mono text-sm text-gray-300 flex justify-between items-center"><span className="text-blue-400">let</span> set = <span className="text-rose-400">new</span> Set(); <span className="text-gray-500">// Set</span></p>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-2 text-fuchsia-300 font-bold bg-fuchsia-500/10 py-3 rounded-xl border border-fuchsia-500/20 shadow-[0_0_15px_rgba(217,70,239,0.15)]">
                     <CheckCircle size={18}/> 👉 All of these are iterable natively!
                  </div>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4: for...of & Iterator Protocol ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Repeat1} title="3. Example using for...of" color="text-pink-500" />
            <CodeBlock code={`let text = "JS";\n\nfor (let char of text) {\n    console.log(char);\n}`} />
            <div className="mt-6 bg-[#1f0f1c] p-6 rounded-2xl border border-pink-500/20 shadow-inner">
               <p className="text-pink-400 font-black text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Terminal size={14}/> Output
               </p>
               <div className="font-mono text-gray-300 space-y-1 pl-4 border-l-2 border-pink-500/30">
                  <p>J</p>
                  <p>S</p>
               </div>
            </div>
         </div>

         <div className="bg-gradient-to-br from-fuchsia-900/20 to-purple-900/20 p-10 border border-fuchsia-500/20 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-10 right-10 opacity-10"><Hash size={100} className="text-fuchsia-400"/></div>
            <SectionHeader icon={Hash} title="4. What is an Iterator?" subtitle="The .next() method." color="text-fuchsia-400" />
            <div className="relative z-10">
               <p className="text-gray-300 font-medium mb-6">👉 An iterator is an object that implements a <code>.next()</code> method, which returns an object with <code>value</code> and <code>done</code> properties.</p>
               <CodeBlock code={`let arr = [10, 20];\n\nlet iterator = arr[Symbol.iterator]();\n\nconsole.log(iterator.next()); // { value: 10, done: false }\nconsole.log(iterator.next()); // { value: 20, done: false }\nconsole.log(iterator.next()); // { done: true }`} />
            </div>
         </div>
      </section>

      {/* ── Section 5 & 6: Symbol.iterator & Protocol ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#1f0f1c] border border-fuchsia-500/30 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.05)_0%,transparent_100%)]"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12">
               <div>
                  <SectionHeader icon={Settings2} title="5. Symbol.iterator" subtitle="(Core Concept)" color="text-fuchsia-400" />
                  <div className="bg-fuchsia-500/10 p-8 rounded-3xl border border-fuchsia-500/20">
                     <p className="text-fuchsia-100 text-lg mb-4">👉 Every iterable <b>must</b> have the property:</p>
                     <div className="bg-black/50 p-4 rounded-xl font-mono text-fuchsia-300 text-center border border-fuchsia-500/30 shadow-inner mb-4">
                        object[Symbol.iterator]
                     </div>
                     <p className="text-gray-400 font-medium text-center">👉 This property is a function that <b>returns an iterator</b>.</p>
                  </div>
               </div>

               <div className="flex flex-col justify-center">
                  <SectionHeader icon={Waypoints} title="6. Iteration Protocol" subtitle="How it works under the hood." color="text-pink-400" />
                  <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 w-full bg-white/5 p-6 rounded-3xl border border-white/10">
                     <span className="font-bold bg-fuchsia-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg whitespace-nowrap">Iterable</span>
                     <ArrowRight className="text-gray-500 shrink-0"/>
                     <span className="font-mono bg-gray-800 text-fuchsia-300 px-4 py-2 rounded-lg text-sm border border-fuchsia-500/30 whitespace-nowrap">Symbol.iterator()</span>
                     <ArrowRight className="text-gray-500 shrink-0"/>
                     <span className="font-bold bg-pink-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg whitespace-nowrap">Iterator</span>
                     <ArrowRight className="text-gray-500 shrink-0"/>
                     <span className="font-mono bg-gray-800 text-pink-300 px-4 py-2 rounded-lg text-sm border border-pink-500/30 whitespace-nowrap">next()</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7 & 8: Spread & Custom Iterables ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Share2} title="7. Spread Operator" subtitle="...magic" color="text-purple-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">The spread operator implicitly uses the iteration protocol!</p>
            <CodeBlock code={`let str = "Hi";\n\nlet arr = [...str];\n\nconsole.log(arr); \n// ["H", "i"]`} />
         </div>

         <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Code2} title="8. Custom Iterable" subtitle="(Advanced)" color="text-rose-500" />
            <CodeBlock code={`let myObj = {\n    start: 1,\n    end: 3,\n    \n    [Symbol.iterator]() {\n        let current = this.start;\n        let end = this.end;\n        \n        return {\n            next() {\n                if (current <= end) {\n                    return { value: current++, done: false };\n                }\n                return { done: true };\n            }\n        };\n    }\n};\n\nfor (let num of myObj) {\n    console.log(num);\n} // 1, 2, 3`} />
         </div>
      </section>

      {/* ── Section 9: Iterable vs Array Table ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={Activity} title="9. Iterables vs Arrays" color="text-fuchsia-500" />
         
         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <table className="w-full text-left text-sm">
               <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                     <th className="p-6 font-black text-fuchsia-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 w-1/3">Feature</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">Iterable</th>
                     <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l text-center">Array</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Loopable</td>
                     <td className="p-6 border-l text-center text-lg">✅ Yes</td>
                     <td className="p-6 border-l text-center text-lg">✅ Yes</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Indexed</td>
                     <td className="p-6 border-l text-center text-lg">❌ <span className="text-sm font-medium text-gray-500">Not always</span></td>
                     <td className="p-6 border-l text-center text-lg">✅ Yes</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                     <td className="p-6 font-bold text-gray-900 dark:text-white">Methods</td>
                     <td className="p-6 border-l text-center text-lg">❌ <span className="text-sm font-medium text-gray-500">Limited</span></td>
                     <td className="p-6 border-l text-center text-lg">✅ <span className="text-sm font-medium text-gray-500">Many</span></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>

      {/* ── Section 10 & 11: Generators & Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-[#1f0f1c] border border-fuchsia-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Zap} title="10. Generators are Iterables!" color="text-fuchsia-400" />
            <p className="text-gray-300 font-medium mb-6">👉 Generators automatically implement the iteration protocol and become iterable!</p>
            <div className="mt-8">
               <CodeBlock code={`function* gen() {\n    yield 1;\n    yield 2;\n}\n\nfor (let val of gen()) {\n    console.log(val);\n}`} />
            </div>
         </div>

         <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Network} title="11. Real-World Use Cases" color="text-pink-400" />
            
            <div className="mt-8 space-y-6">
               <div className="bg-black/20 p-5 rounded-2xl border border-pink-500/10">
                  <h4 className="font-black text-pink-400 text-lg flex items-center gap-2 mb-2"><Database size={20}/> Data Processing</h4>
                  <p className="text-gray-300">Cleanly looping through structured API results or mapping endpoints.</p>
               </div>
               
               <div className="bg-black/20 p-5 rounded-2xl border border-pink-500/10">
                  <h4 className="font-black text-rose-400 text-lg flex items-center gap-2 mb-2"><Layout size={20}/> UI Rendering</h4>
                  <p className="text-gray-300">Using map or loops for dynamic list rendering in frameworks like React.</p>
               </div>
               
               <div className="bg-black/20 p-5 rounded-2xl border border-pink-500/10">
                  <h4 className="font-black text-fuchsia-400 text-lg flex items-center gap-2 mb-2"><CloudLightning size={20}/> Lazy Evaluation</h4>
                  <p className="text-gray-300">Efficient memory usage by generating elements only when needed via Iterators instead of full Arrays.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          CONTINUOUS MOTION
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-fuchsia-500/10 decoration-2">
          "Iterators decouple the iteration logic from the data exactly. They give JavaScript its powerful and flexible looping capabilities."
        </p>
      </footer>

    </div>
  );
};

export default JsIterables;