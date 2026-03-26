import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Zap,
  Check,
  Copy,
  Info,
  Layers,
  Package,
  FastForward,
  ArrowRight,
  Network,
  Layout,
  Globe,
  Database,
  Activity,
  Target,
  Box,
  SplitSquareHorizontal,
  Workflow
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

const JsFunctionDefinitions: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 text-[10px] font-black mb-8 border border-cyan-100 dark:border-cyan-900/50 shadow-xl shadow-cyan-500/5 animate-pulse tracking-[0.2em]">
          <Code2 size={14} className="fill-current" /> CORE CONCEPTS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Function <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-2xl">
            Definitions
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The building blocks of JavaScript. Learn how to write reusable, efficient, and dynamic blocks of <span className="text-gray-900 dark:text-white font-bold underline decoration-cyan-500 underline-offset-4 tracking-tight">code</span>.
        </p>
      </header>

      {/* ── Section 1: What is a Function? ── */}
      <section className="max-w-4xl mx-auto mb-24">
        <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
          <div className="flex items-start gap-6 relative z-10">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-500/10 rounded-2xl text-cyan-500 flex-shrink-0 border border-cyan-100 dark:border-cyan-500/20 shadow-lg">
              <Info size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">1. What is a Function?</h3>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-black uppercase tracking-widest mr-2 text-cyan-600 dark:text-cyan-400">🧠 Definition</span>
                A function is a reusable block of code designed to perform a specific task.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Types of Function Definitions ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layers} title="2. Types of Function Definitions in JavaScript" subtitle="Multiple ways to structure your logic." color="text-blue-500" />
        <div className="grid md:grid-cols-3 gap-8">
          {/* Declaration */}
          <div className="bg-white dark:bg-[#0b1120] p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-xl group hover:-translate-y-2 transition-transform">
            <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="text-blue-500">🔹 1.</span> Function Declaration
            </h4>
            <ul className="mb-6 space-y-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
              <li className="flex items-center gap-2">👉 <span className="px-2 py-0.5 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 rounded-md font-bold text-xs">Hoisted</span> (can call before definition)</li>
              <li className="flex items-center gap-2">👉 Traditional Syntax</li>
            </ul>
            <CodeBlock code={`greet(); // ✅ works

function greet() {
    console.log("Hello");
}`} />
          </div>

          {/* Expression */}
          <div className="bg-white dark:bg-[#0b1120] p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-xl group hover:-translate-y-2 transition-transform">
            <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="text-cyan-500">🔹 2.</span> Function Expression
            </h4>
            <ul className="mb-6 space-y-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
              <li className="flex items-center gap-2">👉 <span className="px-2 py-0.5 bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 rounded-md font-bold text-xs">Not hoisted</span> ❌</li>
              <li className="flex items-center gap-2">👉 Assigned to a variable</li>
            </ul>
            <CodeBlock code={`const greet = function() {
    console.log("Hello");
};`} />
          </div>

          {/* Arrow */}
          <div className="bg-white dark:bg-[#0b1120] p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-xl group hover:-translate-y-2 transition-transform">
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="text-indigo-500">🔹 3.</span> Arrow Function (ES6)
            </h4>
            <ul className="mb-6 space-y-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
              <li className="flex items-center gap-2">👉 <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 rounded-md font-bold text-xs">Not hoisted</span> ❌</li>
              <li className="flex items-center gap-2">👉 Short and modern syntax ⚡</li>
            </ul>
            <CodeBlock code={`const greet = () => {
    console.log("Hello");
};`} />
          </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Visual Comparison & Table ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={Layout} title="3 & 4. Visual Comparison" subtitle="Function Declaration vs Expression vs Arrow" color="text-indigo-500" />
        <div className="bg-[#0b1120] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] w-1/4">Feature</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Declaration</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Expression</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Arrow</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-6 text-gray-400 font-black tracking-wide">Hoisting</td>
                <td className="p-6 text-emerald-400 font-bold">✅ Yes</td>
                <td className="p-6 text-red-400 font-bold">❌ No</td>
                <td className="p-6 text-red-400 font-bold">❌ No</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-6 text-gray-400 font-black tracking-wide">Syntax</td>
                <td className="p-6 text-white font-mono text-xs">Traditional</td>
                <td className="p-6 text-white font-mono text-xs">Flexible</td>
                <td className="p-6 text-indigo-300 font-mono text-xs font-bold bg-indigo-500/10 px-4 rounded-lg inline-block my-4 mx-6">Short (=&gt;)</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 text-gray-400 font-black tracking-wide">this</td>
                <td className="p-6 text-white text-xs">Dynamic</td>
                <td className="p-6 text-white text-xs">Dynamic</td>
                <td className="p-6 text-cyan-400 text-xs font-black tracking-widest uppercase">Lexical</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 5: Named vs Anonymous Functions ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Package} title="5. Named vs Anonymous Functions" subtitle="Identity matters when debugging." color="text-cyan-500" />
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative">
            <h4 className="text-xl font-black text-gray-900 dark:text-white mb-6">🔹 Named Function</h4>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">A function with an internal name. Useful for cleaner stack traces.</p>
            <CodeBlock code={`function add(a, b) {
    return a + b;
}`} />
          </div>
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative">
            <h4 className="text-xl font-black text-gray-900 dark:text-white mb-6">🔹 Anonymous Function</h4>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">A function without a name. Often assigned to variables or used as callbacks.</p>
            <CodeBlock code={`const add = function(a, b) {
    return a + b;
};`} />
          </div>
        </div>
      </section>

      {/* ── Section 6, 7 & 8: Parameters & Arguments ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Target} title="6-8. Parameters & Arguments" subtitle="Passing data into your functions." color="text-fuchsia-500" />
         
         <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-xl col-span-1 lg:col-span-3 pb-12">
               <h4 className="text-lg font-black text-white mb-6">📌 6. Parameters vs Arguments</h4>
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <CodeBlock code={`function sum(a, b) {
    return a + b;
}

sum(5, 10);`} />
                  <div className="space-y-4">
                     <div className="p-4 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-2xl">
                        <span className="text-fuchsia-400 font-mono text-sm font-bold bg-fuchsia-500/20 px-2 py-1 rounded">a, b</span>
                        <span className="text-gray-400 text-sm ml-4 uppercase tracking-widest font-black text-[10px]">👉 Parameters (Variables in definition)</span>
                     </div>
                     <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
                        <span className="text-cyan-400 font-mono text-sm font-bold bg-cyan-500/20 px-2 py-1 rounded">5, 10</span>
                        <span className="text-gray-400 text-sm ml-4 uppercase tracking-widest font-black text-[10px]">👉 Arguments (Actual values passed)</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl lg:col-span-1">
               <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">📌 7. Default Parameters</h4>
               <p className="text-sm text-gray-500 mb-6 font-medium">Provide a fallback value if an argument is missing.</p>
               <CodeBlock code={`function greet(name = "Guest") {
    console.log("Hello " + name);
}`} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl lg:col-span-2">
               <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">📌 8. Rest Parameters</h4>
               <p className="text-sm text-gray-500 mb-6 font-medium">Collects multiple arguments into an array using <code className="text-indigo-500 bg-indigo-500/10 px-1 py-0.5 rounded font-bold">...</code> syntax.</p>
               <CodeBlock code={`function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}`} />
            </div>
         </div>
      </section>

      {/* ── Section 9 & 10: Execution Control ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-12">
            <div>
               <SectionHeader icon={ArrowRight} title="9. Returning Values" color="text-emerald-500" />
               <div className="bg-emerald-500/5 p-8 rounded-[2.5rem] border border-emerald-500/20 shadow-xl h-[calc(100%-5rem)] relative overflow-hidden">
                 <div className="absolute -bottom-10 -right-10 opacity-10">
                    <ArrowRight size={150} className="text-emerald-500" />
                 </div>
                 <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-6 relative z-10">Functions can send data back to the caller using the <code className="font-bold font-mono">return</code> keyword.</p>
                 <div className="relative z-10">
                   <CodeBlock code={`function multiply(a, b) {
    return a * b;
}`} />
                 </div>
               </div>
            </div>

            <div>
               <SectionHeader icon={FastForward} title="10. IIFE" subtitle="Immediately Invoked Function" color="text-rose-500" />
               <div className="bg-rose-500/5 p-8 rounded-[2.5rem] border border-rose-500/20 shadow-xl h-[calc(100%-5rem)] relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 opacity-10">
                    <Zap size={150} className="text-rose-500" />
                 </div>
                  <p className="text-rose-600 dark:text-rose-400 font-medium mb-6 relative z-10">
                    👉 Runs <span className="font-black italic">immediately</span> after definition.
                  </p>
                  <div className="relative z-10">
                     <CodeBlock code={`(function() {
    console.log("IIFE executed");
})();`} />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 11: Higher-Order Functions ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Workflow} title="11. Higher-Order Functions" subtitle="Functions that take or return other functions." color="text-indigo-500" />
        <div className="bg-indigo-900/40 p-10 rounded-[3rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-20">
              <Network size={150} className="text-indigo-400" />
           </div>
           <div className="max-w-xl relative z-10">
             <p className="text-indigo-200 text-lg font-medium mb-8 leading-relaxed">
                👉 This is a core concept in functional programming and standard JS methods like map, filter, and reduce.
             </p>
             <CodeBlock code={`function greet(fn) {
    fn(); // Executing the passed function
}

greet(() => console.log("Hello"));`} />
           </div>
        </div>
      </section>

      {/* ── Section 12: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="12. Real-World Examples" subtitle="Where functions live in the wild." color="text-amber-500" />
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Box size={24} className="text-amber-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎯 1. Utility Function</h4>
             <CodeBlock code={`function formatName(name) {
    return name.toUpperCase();
}`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Activity size={24} className="text-blue-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎯 2. Event Handler</h4>
             <CodeBlock code={`button.addEventListener("click", 
  function() {
    console.log("Clicked!");
  }
);`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Database size={24} className="text-purple-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎯 3. API Callback</h4>
             <CodeBlock code={`fetch("api")
    .then(res => res.json())
    .then(data => console.log(data));`} />
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          Define. Execute. Repeat.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-cyan-500/10 decoration-2">
          "Mastering functions is the first step to mastering JavaScript architecture."
        </p>
      </footer>

    </div>
  );
};

export default JsFunctionDefinitions;