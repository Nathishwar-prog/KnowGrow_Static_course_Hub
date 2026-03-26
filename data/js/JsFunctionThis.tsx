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
  Globe,
  AlertTriangle,
  Link2,
  MousePointerClick,
  Clock,
  Target
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-amber-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsFunctionThis: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#120a00] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 animate-pulse tracking-[0.2em]">
          <Target size={14} className="fill-current" /> CONTEXT AND SCOPE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Function <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 drop-shadow-2xl">
            this
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The most misunderstood concept in JavaScript. Learn exactly what <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500 underline-offset-4 tracking-tight">this</span> refers to and how to control it.
        </p>
      </header>

      {/* ── Section 1 & 2: Definition & Golden Rule ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full justify-center">
               <div className="p-4 bg-amber-50 dark:bg-amber-500/10 rounded-2xl text-amber-500 w-max border border-amber-100 dark:border-amber-500/20 shadow-lg">
                 <Info size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is this?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                   <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-black uppercase tracking-widest mr-2 text-amber-600 dark:text-amber-400">🧠 Definition</span><br /><br />
                   <code className="text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded mr-1">this</code> refers to the object that is executing the current function.
                 </p>
               </div>
             </div>
          </div>
          
          <div className="bg-[#0b1120] p-10 rounded-[3rem] border border-orange-500/30 shadow-2xl relative overflow-hidden group flex flex-col justify-center">
             <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <Target size={200} className="text-orange-500" />
             </div>
             <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center p-5 bg-orange-500 text-white rounded-[2rem] shadow-xl shadow-orange-500/40 mb-8 mx-auto group-hover:-translate-y-2 transition-transform">
                   <Zap size={40} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest flex flex-col items-center">
                   <span className="text-orange-400 text-sm mb-2">📌 2. Golden Rule</span>
                   (🔥 MOST IMPORTANT)
                </h3>
                <p className="text-2xl font-bold text-gray-300 leading-relaxed max-w-sm mx-auto">
                   <code className="text-orange-400 mr-1">this</code> depends on <span className="text-white bg-orange-500 px-2 rounded-lg italic">HOW</span> a function is called, NOT where it is defined.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Visual Understanding ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-amber-900/20 border border-amber-500/20 p-12 rounded-[4rem] flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <Layout size={200} className="text-amber-500" />
           </div>
           <span className="px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 font-black text-[10px] uppercase tracking-widest mb-6 relative z-10">📌 3. Visual Understanding</span>
           <h3 className="text-3xl font-black text-white mb-6 relative z-10">Contextual Connections</h3>
           <p className="text-lg text-amber-100/70 font-medium max-w-2xl relative z-10">
              Think of <code className="font-bold">this</code> as a chameleon. It changes color based on what it's sitting on. Its value is completely determined at the exact moment the function is executed.
           </p>
        </div>
      </section>

      {/* ── Section 4: this in Different Situations ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layers} title="4. this in Different Situations" subtitle="The 5 classic rules of binding." color="text-orange-500" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Global Context */}
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><Globe size={20} /></div>
                 <h4 className="font-black text-gray-900 dark:text-white">🔹 1. Global Context</h4>
              </div>
              <CodeBlock code={`console.log(this);`} />
              <div className="space-y-2">
                 <p className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-xl flex items-center justify-between">
                    <span>👉 Browser</span> <code className="text-blue-500 font-bold bg-blue-500/10 px-2 rounded">window</code>
                 </p>
                 <p className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-xl flex items-center justify-between">
                    <span>👉 Strict mode</span> <code className="text-rose-500 font-bold bg-rose-500/10 px-2 rounded">undefined</code>
                 </p>
              </div>
           </div>

           {/* Function Invocation */}
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-sky-500/10 text-sky-500 rounded-xl"><Terminal size={20} /></div>
                 <h4 className="font-black text-gray-900 dark:text-white">🔹 2. Function Invocation</h4>
              </div>
              <CodeBlock code={`function show() {
    console.log(this);
}

show();`} />
              <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mt-4 bg-sky-50 dark:bg-sky-900/20 p-3 rounded-xl border border-sky-100 dark:border-sky-800/30">
                 👉 <code className="font-bold mr-1">this</code> → global object (or undefined in strict mode)
              </p>
           </div>

           {/* Method Invocation */}
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl"><Layers size={20} /></div>
                 <h4 className="font-black text-gray-900 dark:text-white">🔹 3. Method Invocation</h4>
              </div>
              <CodeBlock code={`let user = {
    name: "Karthick",
    greet: function() {
        console.log(this.name);
    }
};

user.greet();`} />
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-4 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                 👉 <code className="font-bold mr-1">this</code> → user
              </p>
           </div>

           {/* Constructor */}
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl"><Box size={20} /></div>
                 <h4 className="font-black text-gray-900 dark:text-white">🔹 4. Constructor (new)</h4>
              </div>
              <CodeBlock code={`function Person(name) {
    this.name = name;
}

let p = new Person("Karthick");`} />
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mt-4 bg-purple-50 dark:bg-purple-900/20 p-3 rounded-xl border border-purple-100 dark:border-purple-800/30">
                 👉 <code className="font-bold mr-1">this</code> → new object
              </p>
           </div>

           {/* Arrow Functions */}
           <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-[2.5rem] border border-amber-200 dark:border-amber-500/30 shadow-xl group hover:-translate-y-2 transition-transform lg:col-span-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <ArrowRight size={100} className="text-amber-500" />
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                 <div className="p-3 bg-amber-500 text-white shadow-lg rounded-xl"><ArrowRight size={20} /></div>
                 <h4 className="text-lg font-black text-amber-600 dark:text-amber-400">🔹 5. Arrow Functions (🔥 IMPORTANT)</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                 <CodeBlock code={`let obj = {
    name: "Karthick",
    greet: () => {
        console.log(this.name);
    }
};

obj.greet();`} />
                 <div className="space-y-4 flex flex-col justify-center">
                    <p className="text-sm font-medium text-rose-600 dark:text-rose-400 bg-white dark:bg-gray-900 p-3 rounded-xl border border-rose-100 dark:border-rose-900/30 shadow-sm flex items-center gap-2">
                       ❌ <code className="font-bold">this</code> is NOT obj
                    </p>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-white dark:bg-gray-900 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/30 shadow-sm flex items-center gap-2">
                       👉 It uses parent scope (lexical <code className="font-bold">this</code>)
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 5 & 6: Explicit Binding & Losing this ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-12">
            
            {/* call, apply, bind */}
            <div>
               <SectionHeader icon={Link2} title="📌 5. this with call, apply, bind" color="text-sky-500" />
               <div className="bg-sky-50 dark:bg-sky-900/10 p-8 rounded-[3rem] border border-sky-200 dark:border-sky-500/20 shadow-xl space-y-8">
                  <div>
                     <h4 className="font-black text-sky-600 dark:text-sky-400 mb-4 flex items-center gap-2">
                        🔹 Using call()
                     </h4>
                     <CodeBlock code={`function greet() {
    console.log(this.name);
}

let user = { name: "Karthick" };

greet.call(user);`} />
                  </div>
                  <div>
                     <h4 className="font-black text-sky-600 dark:text-sky-400 mb-4 flex items-center gap-2">
                        🔹 Using bind()
                     </h4>
                     <CodeBlock code={`let fn = greet.bind(user);
fn();`} />
                     <p className="text-sm font-black text-sky-600 dark:text-sky-400 mt-4 uppercase tracking-widest text-center bg-white dark:bg-[#0b1120] p-3 rounded-xl shadow-sm border border-sky-100 dark:border-sky-800">
                        👉 You can manually control <code className="ml-1">this</code>
                     </p>
                  </div>
               </div>
            </div>

            {/* Losing this */}
            <div>
               <SectionHeader icon={AlertTriangle} title="📌 6. Losing this" subtitle="(Common Problem)" color="text-rose-500" />
               <div className="bg-[#0b1120] p-10 rounded-[3rem] border border-rose-500/30 shadow-2xl relative overflow-hidden">
                  
                  <div className="mb-8">
                     <h5 className="font-black text-rose-400 text-lg flex items-center gap-2 mb-4">
                        ❌ Example
                     </h5>
                     <CodeBlock code={`let user = {
    name: "Karthick",
    greet: function() {
        console.log(this.name);
    }
};

let fn = user.greet;
fn(); // ❌ undefined`} />
                  </div>

                  <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl">
                     <h5 className="font-black text-emerald-400 text-lg flex items-center gap-2 mb-4">
                        ✅ Fix using bind()
                     </h5>
                     <div className="font-mono text-sm text-gray-300 space-y-2">
                        <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                           <span className="text-purple-400">let</span> fn = user.greet.<span className="text-emerald-400 font-bold">bind</span>(user);<br/>
                           fn();
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* ── Section 7: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="7. Real-World Examples" subtitle="Seeing the context." color="text-amber-500" />
        
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20">
                <MousePointerClick size={24} className="text-indigo-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎯 1. Event Handling</h4>
             <CodeBlock code={`button.addEventListener(
  "click", function() {
    console.log(this); 
    // 👉 button
});`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6 border border-rose-500/20">
                <Clock size={24} className="text-rose-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                🎯 2. setTimeout <span className="text-[10px] uppercase font-black bg-rose-500 text-white px-2 py-0.5 rounded ml-2">Problem</span>
             </h4>
             <CodeBlock code={`// 👉 Problem:
setTimeout(function() {
    console.log(this); // ❌ global
}, 1000);

// 👉 Fix:
setTimeout(() => {
    console.log(this); // ✅ lexical
}, 1000);`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                <Code2 size={24} className="text-emerald-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎯 3. Class Example</h4>
             <CodeBlock code={`class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}`} />
           </div>
        </div>
      </section>

      {/* ── Section 8: this Rules Summary ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={Info} title="8. this Rules Summary" subtitle="Cheat sheet for binding rules." color="text-amber-500" />
        
        <div className="bg-white dark:bg-[#0b1120] rounded-[3rem] border border-amber-200 dark:border-amber-500/20 shadow-2xl overflow-hidden mb-12">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] w-1/3">Scenario</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]"><code className="bg-white/20 px-1 py-0.5 rounded">this</code> Value</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {[
                 { scenario: 'Global', val: 'window / undefined', className: 'text-blue-600 dark:text-blue-400 bg-blue-500/5' },
                 { scenario: 'Function', val: 'global / undefined', className: 'text-sky-600 dark:text-sky-400 bg-sky-500/5' },
                 { scenario: 'Method', val: 'object', className: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/5' },
                 { scenario: 'Constructor', val: 'new object', className: 'text-purple-600 dark:text-purple-400 bg-purple-500/5' },
                 { scenario: 'Arrow', val: 'parent scope', className: 'text-amber-600 dark:text-amber-400 bg-amber-500/5' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="p-6 text-gray-900 dark:text-gray-300 font-black tracking-wide text-lg">{row.scenario}</td>
                  <td className={`p-6 font-bold ${row.className}`}>{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          EXECUTE()
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-amber-500/10 decoration-2">
          "Mastering `this` is mastering the environment your function lives in."
        </p>
      </footer>

    </div>
  );
};

export default JsFunctionThis;