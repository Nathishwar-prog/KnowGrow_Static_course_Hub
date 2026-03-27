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
  Cpu,
  Repeat,
  FastForward,
  Server,
  Infinity as InfinityIcon,
  Play
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

const JsGenerators: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#050511] min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 text-[10px] font-black mb-8 border border-purple-100 dark:border-purple-900/50 shadow-xl shadow-purple-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Cpu size={14} className="fill-current" /> PAUSE & RESUME
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 drop-shadow-2xl">
            Generators
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Functions that can <span className="text-gray-900 dark:text-white font-bold underline decoration-purple-500 underline-offset-4 tracking-tight">pause execution</span> and resume later. Perfect for lazy execution, large data handling, and infinite sequences.
        </p>
      </header>

      {/* ── Section 1 & 2: What is it & Syntax ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-2xl text-purple-500 w-max border border-purple-100 dark:border-purple-500/20 shadow-lg">
                 <Info size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is a JavaScript Generator?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic mb-4">
                   A Generator is a special type of function in JavaScript that can pause execution and resume later.
                 </p>
                 <div className="bg-purple-500/5 border border-purple-500/20 p-5 rounded-2xl space-y-3">
                    <p className="text-sm font-bold text-gray-900 dark:text-purple-300">👉 Unlike normal functions (which run fully once called), generators:</p>
                    <ul className="text-sm font-medium text-gray-600 dark:text-gray-400 space-y-2 ml-2">
                        <li className="flex items-center gap-2"><Check size={16} className="text-purple-500"/> Can yield multiple values</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-purple-500"/> Can pause <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-purple-600 dark:text-purple-400">(yield)</code> and continue <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-purple-600 dark:text-purple-400">(next())</code></li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-purple-500"/> Are useful for lazy execution and large data handling</li>
                    </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={Code2} title="2. Syntax of Generator" subtitle="How to define and use them." color="text-pink-500" />
           <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative">
              <CodeBlock code={`function* generatorName() {
    yield value1;
    yield value2;
}`} />
              
              <div className="grid gap-3 mt-6">
                 <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-between">
                    <span className="text-[10px] font-black text-pink-400 uppercase tracking-[0.2em]">function*</span>
                    <span className="text-sm font-bold text-gray-300">Declares a generator</span>
                 </div>
                 <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-between">
                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em]">yield</span>
                    <span className="text-sm font-bold text-gray-300">Pauses execution and returns value</span>
                 </div>
                 <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center justify-between">
                    <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.2em]">next()</span>
                    <span className="text-sm font-bold text-gray-300">Resumes execution</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4 & 5: Basic Example & Flow ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative">
               <SectionHeader icon={Play} title="3. Basic Example" subtitle="The simplest form of a generator" color="text-rose-500" />
               <div className="relative z-10">
                  <CodeBlock code={`function* numbersGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbersGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }`} />
               </div>
            </div>

            <div className="space-y-8 flex flex-col">
               <div className="bg-purple-900/20 border border-purple-500/20 p-8 rounded-[2.5rem] flex flex-col shadow-xl relative overflow-hidden flex-1">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     <Target size={120} className="text-purple-500" />
                  </div>
                  <h4 className="text-xl font-black text-white mb-4 flex items-center gap-2 relative z-10">
                     🧠 4. How It Works (Step-by-Step Flow)
                  </h4>
                  <ul className="space-y-4 relative z-10 mt-2 text-gray-300 font-medium">
                    <li className="flex items-start gap-3">
                        <span className="bg-purple-500/20 text-purple-400 p-1 rounded-md shrink-0"><Check size={16}/></span>
                        <span>Generator function is called → does <b>NOT</b> execute immediately</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="bg-purple-500/20 text-purple-400 p-1 rounded-md shrink-0"><Check size={16}/></span>
                        <span>Returns an <b>iterator object</b></span>
                    </li>
                    <li className="flex flex-col gap-2 mt-4 p-4 bg-black/20 rounded-xl border border-white/5">
                        <span className="font-bold text-purple-400">Each .next():</span>
                        <div className="flex items-center gap-2 text-sm"><FastForward size={14} className="text-pink-400"/> Runs until next <code>yield</code></div>
                        <div className="flex items-center gap-2 text-sm"><Box size={14} className="text-pink-400"/> Returns <code>{`{ value, done }`}</code></div>
                    </li>
                  </ul>
               </div>

               <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative flex-1">
                  <h4 className="text-xl font-black text-rose-400 mb-6 flex items-center gap-2">
                     🎯 5. Visual Execution Flow
                  </h4>
                  <div className="space-y-3 font-mono text-sm">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-gray-300">Call generator → returns <span className="text-pink-400 font-bold">iterator</span></div>
                      <div className="w-0.5 h-4 bg-gray-600 mx-auto"></div>
                      <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-300"><span className="text-purple-400 font-bold">next()</span> → yield 1 → <span className="opacity-50">pause</span></div>
                      <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-300"><span className="text-purple-400 font-bold">next()</span> → yield 2 → <span className="opacity-50">pause</span></div>
                      <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-300"><span className="text-purple-400 font-bold">next()</span> → yield 3 → <span className="opacity-50">pause</span></div>
                      <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20 text-rose-300"><span className="text-rose-400 font-bold">next()</span> → done = <span className="text-white">true</span></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6 & 7: Logic & For...Of ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
               <SectionHeader icon={Activity} title="6. Example with Logic" subtitle="Using loops inside generators." color="text-teal-500" />
               <CodeBlock code={`function* evenNumbers(limit) {
    let num = 0;

    while (num <= limit) {
        yield num;
        num += 2;
    }
}

const evens = evenNumbers(6);

console.log(evens.next().value); // 0
console.log(evens.next().value); // 2
console.log(evens.next().value); // 4
console.log(evens.next().value); // 6`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
               <SectionHeader icon={Repeat} title="7. Generators with for...of" subtitle="Generators are iterable!" color="text-amber-500" />
               <div className="bg-amber-50 dark:bg-amber-500/10 p-4 rounded-2xl border border-amber-100 dark:border-amber-500/20 mb-6 text-amber-600 dark:text-amber-400 font-bold flex items-center justify-center">
                  Generators are iterable! You can loop through them.
               </div>
               <CodeBlock code={`function* fruits() {
    yield "Apple";
    yield "Banana";
    yield "Mango";
}

for (let fruit of fruits()) {
    console.log(fruit);
}
// Output:
// Apple
// Banana
// Mango`} />
           </div>
        </div>
      </section>

      {/* ── Section 8: Passing Values into Generator ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#0b1120] border border-white/5 p-12 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5">
                <Database size={200} className="text-cyan-500" />
             </div>
             <span className="px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 font-black text-[10px] uppercase tracking-widest mb-6 relative z-10 inline-block">⚙️ 8. Dynamic Inputs</span>
             <h3 className="text-3xl font-black text-white mb-8 relative z-10">Passing Values into Generator</h3>
             
             <div className="max-w-3xl mx-auto relative z-10 text-left">
                <CodeBlock code={`function* greet() {
    const name = yield "What is your name?";
    yield \`Hello, \${name}!\`;
}

const g = greet();

console.log(g.next().value);       // Ask question
console.log(g.next("Karthick"));   // Pass value`} />
                <div className="mt-6 flex justify-center gap-4">
                    <p className="text-sm font-medium text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-xl border border-cyan-500/20">
                       First <code>next()</code> runs to the first yield.
                    </p>
                    <p className="text-sm font-medium text-sky-400 bg-sky-500/10 px-4 py-2 rounded-xl border border-sky-500/20">
                       Next <code>next("Value")</code> passes value back in!
                    </p>
                </div>
             </div>
         </div>
      </section>

      {/* ── Section 9: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="9. Real-World Use Cases" subtitle="Where do we actually use generators?" color="text-indigo-500" />
        
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform h-full flex flex-col">
             <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6">
                <InfinityIcon size={24} className="text-indigo-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">✅ 1. Infinite Sequences</h4>
             <div className="flex-1">
                 <CodeBlock code={`function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}`} />
             </div>
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform h-full flex flex-col">
             <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Server size={24} className="text-emerald-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">✅ 2. Lazy Loading Data</h4>
             <div className="space-y-3 flex-1">
                 <p className="text-sm font-bold text-gray-600 dark:text-gray-300 bg-emerald-50 dark:bg-emerald-500/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-500/20">Fetch data only when needed.</p>
                 <p className="text-sm font-bold text-gray-600 dark:text-gray-300 bg-emerald-50 dark:bg-emerald-500/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-500/20">Highly useful for pagination & large datasets.</p>
             </div>
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform h-full flex flex-col">
             <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Layers size={24} className="text-orange-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">✅ 3. Async Programming</h4>
             <div className="space-y-3 flex-1 flex flex-col justify-center">
                 <p className="text-sm font-bold text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                     Before <code>async/await</code>, generators were widely used with libraries like <b>co</b> to handle asynchronous control flow elegantly.
                 </p>
             </div>
           </div>
        </div>
      </section>

      {/* ── Section 10: Generator vs Normal Function ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={Box} title="10. Generator vs Normal Function" subtitle="A quick comparison." color="text-fuchsia-500" />
         <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900/50">
                        <th className="p-6 text-sm font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Feature</th>
                        <th className="p-6 text-sm font-black text-rose-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l">Normal Function</th>
                        <th className="p-6 text-sm font-black text-purple-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l bg-purple-50 dark:bg-purple-900/10">Generator</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-medium text-gray-700 dark:text-gray-300">
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700">Execution</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">Runs fully</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l font-bold text-purple-600 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-900/5">Pauses</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700">Return</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">Single value</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l font-bold text-purple-600 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-900/5">Multiple values</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700">Control</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l">No pause</td>
                        <td className="p-6 border-b border-gray-100 dark:border-gray-700 border-l font-bold text-purple-600 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-900/5"><code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded text-purple-700 dark:text-purple-300">yield</code> control</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="p-6">Memory</td>
                        <td className="p-6 border-l">Higher (large data)</td>
                        <td className="p-6 border-l font-bold text-purple-600 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-900/5">Efficient</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          YIELD & RESUME
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-purple-500/10 decoration-2">
          "Mastering generators unlocks powerful ways to handle iterations and data flow elegantly."
        </p>
      </footer>

    </div>
  );
};

export default JsGenerators;