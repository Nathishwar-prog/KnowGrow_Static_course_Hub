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
  List
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

const JsFunctionParameters: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020f0a] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 animate-pulse tracking-[0.2em]">
          <List size={14} className="fill-current" /> INPUT VARIABLES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Function <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 drop-shadow-2xl">
            Parameters
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The doorways to your functions. Learn how to pass data dynamically using <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight">parameters</span> and arguments.
        </p>
      </header>

      {/* ── Section 1 & 2: Definition & Params vs Args ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-500 w-max border border-emerald-100 dark:border-emerald-500/20 shadow-lg">
                 <Info size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are Function Parameters?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                   <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-black uppercase tracking-widest mr-2 text-emerald-600 dark:text-emerald-400">🧠 Definition</span><br /><br />
                   Parameters are variables listed in a function definition that receive values when the function is called.
                 </p>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={ArrowRight} title="2. Parameters vs Arguments" subtitle="Clear up the confusion." color="text-teal-500" />
           <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative">
              <CodeBlock code={`function add(a, b) { // parameters
    return a + b;
}

add(5, 10); // arguments`} />
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                 <div className="p-4 bg-teal-500/10 border border-teal-500/20 rounded-xl">
                    <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.2em] block mb-2">Parameters</span>
                    <span className="text-sm font-bold text-gray-300">Variables in function</span>
                 </div>
                 <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                    <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] block mb-2">Arguments</span>
                    <span className="text-sm font-bold text-gray-300">Actual values passed</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Visual Understanding ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-emerald-900/20 border border-emerald-500/20 p-12 rounded-[4rem] flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <Layout size={200} className="text-emerald-500" />
           </div>
           <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-6 relative z-10">📌 3. Visual Understanding</span>
           <h3 className="text-3xl font-black text-white mb-6 relative z-10">How Values Flow</h3>
           <p className="text-lg text-emerald-100/70 font-medium max-w-2xl relative z-10">
              Imagine parameters as empty boxes waiting to be filled, and arguments as the actual items you place inside those boxes when the function begins executing.
           </p>
        </div>
      </section>

      {/* ── Section 4: Types of Parameters ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layers} title="4. Types of Parameters in JavaScript" subtitle="Modern JS gives you powerful ways to handle inputs." color="text-teal-500" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Default Parameters */}
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl"><CheckCircle size={20} /></div>
                 <h4 className="font-black text-gray-900 dark:text-white">🔹 1. Default Parameters</h4>
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">ES6 Feature</p>
              <CodeBlock code={`function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet(); // Hello Guest`} />
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-4 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                 👉 Used when no argument is passed
              </p>
           </div>

           {/* Rest Parameters */}
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-teal-500/10 text-teal-500 rounded-xl"><Layers size={20} /></div>
                 <h4 className="font-black text-gray-900 dark:text-white">🔹 2. Rest Parameters</h4>
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Syntax: ...</p>
              <CodeBlock code={`function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));
// Output: 10`} />
              <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mt-4 bg-teal-50 dark:bg-teal-900/20 p-3 rounded-xl border border-teal-100 dark:border-teal-800/30">
                 👉 Collects multiple arguments into an array
              </p>
           </div>

           {/* Destructuring Parameters */}
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-sky-500/10 text-sky-500 rounded-xl"><Package size={20} /></div>
                 <h4 className="font-black text-gray-900 dark:text-white">🔹 3. Destructuring</h4>
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Object Unpacking</p>
              <CodeBlock code={`function display({name, age}) {
    console.log(name, age);
}

display({name: "Karthick", age: 21});`} />
           </div>

           {/* Function as Parameter */}
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl"><RefreshCw size={20} /></div>
                 <h4 className="font-black text-gray-900 dark:text-white">🔹 4. Function as Parameter (Callback)</h4>
              </div>
              <CodeBlock code={`function greet(fn) {
    fn();
}

greet(() => console.log("Hello"));`} />
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-4 bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                 👉 Functions can be passed as parameters
              </p>
           </div>

           {/* Optional Parameters */}
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-rose-500/10 text-rose-500 rounded-xl"><Eye size={20} /></div>
                 <h4 className="font-black text-gray-900 dark:text-white">🔹 5. Optional Params</h4>
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Passing fewer args</p>
              <CodeBlock code={`function greet(name, age) {
    console.log(name, age);
}

greet("Karthick"); 
// age = undefined`} />
           </div>
        </div>
      </section>

      {/* ── Section 5 & 6: Arguments Object & Behavior ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 border border-amber-500/30 bg-amber-500/5 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
               <div className="absolute -bottom-6 -right-6 opacity-20">
                  <AlertTriangle size={120} className="text-amber-500" />
               </div>
               <h4 className="text-xl font-black text-amber-500 mb-6 flex items-center gap-2">
                 <AlertTriangle size={24} />
                 📌 5. arguments Object
               </h4>
               <p className="text-xs text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest mb-6 bg-amber-500/10 w-max px-3 py-1 rounded-full">(Old Method)</p>
               <div className="relative z-10">
                  <CodeBlock code={`function show() {
    console.log(arguments);
}

show(1, 2, 3);`} />
               </div>
               <p className="text-sm font-bold text-amber-600 dark:text-amber-500 mt-4 relative z-10">
                 👉 Array-like object containing all passed arguments.
               </p>
            </div>

            <div className="lg:col-span-2 bg-[#0b1120] p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <SectionHeader icon={Target} title="6. Parameter Behavior" subtitle="Important Concepts" color="text-teal-400" />
               <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                     <h5 className="font-black text-white text-lg flex items-center gap-2">
                        <span className="text-rose-400">🔸</span> Missing Arguments
                     </h5>
                     <CodeBlock code={`function add(a, b) {
    return a + b;
}

add(5); // NaN`} />
                     <p className="text-rose-400 font-mono text-sm font-bold bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">👉 b = undefined</p>
                  </div>

                  <div className="space-y-4">
                     <h5 className="font-black text-white text-lg flex items-center gap-2">
                        <span className="text-cyan-400">🔸</span> Extra Arguments
                     </h5>
                     <CodeBlock code={`// Using 'add' from above
add(5, 10, 20);`} />
                     <p className="text-cyan-400 font-mono text-sm font-bold bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/20">👉 Extra values ignored</p>
                     <p className="text-xs text-gray-500 font-bold px-2">(unless using rest parameters)</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="7. Real-World Examples" subtitle="Where parameters define logic." color="text-emerald-500" />
        
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6">
                <CloudLightning size={24} className="text-sky-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎯 1. API Function</h4>
             <CodeBlock code={`function fetchUser(id, callback) {
    console.log("Fetching user:", id);
    callback();
}`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} className="text-rose-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎯 2. Form Validation</h4>
             <CodeBlock code={`function validate(name, email) {
    if (!name || !email) {
        return "Invalid input";
    }
    return "Valid";
}`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Terminal size={24} className="text-emerald-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎯 3. Dynamic Calculation</h4>
             <CodeBlock code={`function multiply(a, b = 1) {
    return a * b;
}`} />
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          PASS(DATA)
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-emerald-500/10 decoration-2">
          "Mastering parameters allows your functions to be flexible, reusable, and dynamic."
        </p>
      </footer>

    </div>
  );
};

export default JsFunctionParameters;