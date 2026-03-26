import React, { useState } from 'react';
import {
  Zap,
  Check,
  Copy,
  Info,
  Layers,
  Terminal,
  Play,
  Package,
  Eye,
  Activity,
  ArrowRight,
  Code2,
  MousePointerClick,
  RefreshCw,
  Box,
  Target,
  Layout,
  Link2
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

const JsFunctionInvocation: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0b0416] min-h-screen font-sans selection:bg-fuchsia-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] font-black mb-8 border border-fuchsia-100 dark:border-fuchsia-900/50 shadow-xl shadow-fuchsia-500/5 animate-pulse tracking-[0.2em]">
          <Play size={14} className="fill-current" /> EXECUTION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Function <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 drop-shadow-2xl">
            Invocation
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The art of bringing functions to life. Discover how the way you <span className="text-gray-900 dark:text-white font-bold underline decoration-fuchsia-500 underline-offset-4 tracking-tight">call a function</span> determines how it runs.
        </p>
      </header>

      {/* ── Section 1 & 2: Definition & Basic Invocation ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden">
               <div className="absolute -top-6 -right-6 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl group-hover:bg-fuchsia-500/20 transition-colors duration-700"></div>
               <div className="flex items-start gap-6 relative z-10">
                 <div className="p-4 bg-fuchsia-50 dark:bg-fuchsia-500/10 rounded-2xl text-fuchsia-500 flex-shrink-0 border border-fuchsia-100 dark:border-fuchsia-500/20 shadow-lg">
                   <Info size={32} />
                 </div>
                 <div>
                   <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">1. What is Function Invocation?</h3>
                   <p className="text-[15px] font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                     <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-[10px] font-black uppercase tracking-widest mr-2 text-fuchsia-600 dark:text-fuchsia-400">🧠 Definition</span><br /><br />
                     Function Invocation means calling/executing a function to run its code.
                   </p>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <SectionHeader icon={Terminal} title="2. Basic Function Invocation" subtitle="Triggering the defined logic." color="text-fuchsia-500" />
            <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
               <CodeBlock code={`function greet() {
    console.log("Hello");
}

greet(); // invocation`} />
               <div className="flex items-center gap-4 mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <Play size={18} className="text-purple-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-purple-300 tracking-wide">greet() → function is executed</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Types of Function Invocation ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Target} title="3. Types of Function Invocation" subtitle="(VERY IMPORTANT) How you invoke changes how it behaves." color="text-fuchsia-500" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Default Invocation */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform h-full flex flex-col">
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3">
               <span className="p-2 bg-indigo-500/10 text-indigo-500 rounded-lg"><Terminal size={18}/></span>
               🔹 1. Default Invocation
             </h4>
             <CodeBlock code={`function show() {
    console.log(this);
}

show();`} />
             <div className="mt-auto p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
                <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">👉 this binding:</span>
                <ul className="text-sm text-gray-600 dark:text-gray-300 font-medium space-y-1">
                   <li>Browser: <code className="font-bold text-indigo-500 bg-indigo-500/10 px-1 rounded">window</code></li>
                   <li>Strict mode: <code className="font-bold text-rose-500 bg-rose-500/10 px-1 rounded">undefined</code></li>
                </ul>
             </div>
          </div>

          {/* Method Invocation */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform h-full flex flex-col">
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3">
               <span className="p-2 bg-purple-500/10 text-purple-500 rounded-lg"><Layers size={18}/></span>
               🔹 2. Method Invocation
             </h4>
             <CodeBlock code={`let user = {
    name: "Karthick",
    greet: function() {
        console.log(this.name);
    }
};

user.greet();`} />
             <div className="mt-auto p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800/50">
                <span className="text-xs font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest block mb-2">👉 this binding:</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                   Refers to the object <code className="font-bold text-purple-500 bg-purple-500/10 px-1 rounded">user</code> that owns the method.
                </p>
             </div>
          </div>

          {/* Constructor Invocation */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform h-full flex flex-col">
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3">
               <span className="p-2 bg-fuchsia-500/10 text-fuchsia-500 rounded-lg"><Box size={18}/></span>
               🔹 3. Constructor Invocation
             </h4>
             <CodeBlock code={`function Person(name) {
    this.name = name;
}

let p = new Person("Karthick");
console.log(p.name);`} />
             <div className="mt-auto p-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-xl border border-fuchsia-100 dark:border-fuchsia-800/50 space-y-2">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2">
                   👉 <code className="text-fuchsia-500 bg-fuchsia-500/10 px-1 rounded font-bold">new</code> keyword creates object
                </p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2">
                   👉 <code className="text-fuchsia-500 bg-fuchsia-500/10 px-1 rounded font-bold">this</code> → new object
                </p>
             </div>
          </div>

          {/* Indirect Invocation */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform h-full flex flex-col">
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3">
               <span className="p-2 bg-rose-500/10 text-rose-500 rounded-lg"><Link2 size={18}/></span>
               🔹 4. Indirect Invocation
             </h4>
             <p className="text-xs text-gray-500 mb-4 font-black uppercase tracking-widest">(call, apply, bind)</p>
             <CodeBlock code={`function greet() {
    console.log(this.name);
}

let user = { name: "Karthick" };

greet.call(user);`} />
             <div className="mt-auto p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-800/50">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2">
                   👉 <code className="text-rose-500 bg-rose-500/10 px-1 rounded font-bold">this</code> is manually controlled
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 4 & 5: Concept Focus & Visual ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#0b1120] p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group border border-purple-500/20">
            <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:scale-125 transition-transform duration-1000">
               <Eye size={250} className="text-purple-500" />
            </div>
            
            <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] font-black uppercase tracking-[0.2em] text-purple-300 mb-8">
                  📌 4. Visual Understanding & <br/> 📌 5. Key Concept
               </div>
               
               <h2 className="text-4xl font-black text-white mb-6"> <code className="text-fuchsia-400 bg-fuchsia-400/10 px-3 py-1 rounded-[1rem]">this</code> Depends on Invocation</h2>
               <p className="text-lg text-gray-400 font-medium mb-12 max-w-2xl leading-relaxed">
                  Same function, entirely different result depending on <span className="text-white italic underline underline-offset-4 decoration-purple-500">how</span> it's called. This is the hardest part of JS functions!
               </p>

               <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <CodeBlock code={`function show() {
    console.log(this.name);
}

let user1 = { name: "A", show };
let user2 = { name: "B", show };`} />
                  </div>
                  <div className="flex flex-col justify-center space-y-6">
                     <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-3xl flex items-center justify-between">
                        <code className="text-sm font-mono text-purple-300 font-bold">user1.show();</code>
                        <div className="flex items-center gap-3">
                           <ArrowRight size={16} className="text-gray-500" />
                           <span className="text-lg font-black text-white">"A"</span>
                        </div>
                     </div>
                     <div className="p-6 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-3xl flex items-center justify-between">
                        <code className="text-sm font-mono text-fuchsia-300 font-bold">user2.show();</code>
                        <div className="flex items-center gap-3">
                           <ArrowRight size={16} className="text-gray-500" />
                           <span className="text-lg font-black text-white">"B"</span>
                        </div>
                     </div>
                     <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] text-center mt-4">
                        👉 this depends on how function is called
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Activity} title="6. Real-World Examples" subtitle="Where invocation types occur naturally." color="text-purple-500" />
        
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <MousePointerClick size={24} className="text-amber-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎯 1. Event Handler Invocation</h4>
             <CodeBlock code={`button.addEventListener("click", 
  function() {
    console.log(this); 
    // 👉 button element
  }
);`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Box size={24} className="text-emerald-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎯 2. Constructor Pattern</h4>
             <CodeBlock code={`function Car(model) {
    this.model = model;
}

let c = new Car("BMW");`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform">
             <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6">
                <RefreshCw size={24} className="text-sky-500" />
             </div>
             <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4">🎯 3. Callback Invocation</h4>
             <CodeBlock code={`setTimeout(function() {
    console.log("Executed");
}, 1000);`} />
           </div>
        </div>
      </section>

      {/* ── Section 7: Invocation vs Definition ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={Code2} title="7. Invocation vs Definition" subtitle="Understanding the fundamental difference." color="text-fuchsia-500" />
        
        <div className="bg-white dark:bg-[#0f172a] rounded-[3rem] border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden mb-12">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-fuchsia-600 text-white">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] w-1/3">Concept</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Meaning</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/10 transition-colors">
                <td className="p-8 text-gray-900 dark:text-gray-300 font-black tracking-wide text-lg">Definition</td>
                <td className="p-8 text-fuchsia-600 dark:text-fuchsia-400 font-bold">Creating function</td>
              </tr>
              <tr className="hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/10 transition-colors">
                <td className="p-8 text-gray-900 dark:text-gray-300 font-black tracking-wide text-lg">Invocation</td>
                <td className="p-8 text-purple-600 dark:text-purple-400 font-bold">Calling function</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="p-8 rounded-[2rem] border-2 border-dashed border-gray-300 dark:border-gray-700 relative">
              <div className="absolute -top-3 left-8 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-widest">
                 🏗️ Definition
              </div>
              <code className="text-gray-600 dark:text-gray-400 font-mono text-sm font-bold block mt-4">function test() &#123;&#125;</code>
           </div>
           
           <div className="p-8 rounded-[2rem] border-2 border-fuchsia-500 relative bg-fuchsia-500/5">
              <div className="absolute -top-3 left-8 px-3 py-1 bg-fuchsia-500 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg shadow-fuchsia-500/20">
                 ⚡ Invocation
              </div>
              <code className="text-fuchsia-700 dark:text-fuchsia-400 font-mono text-sm font-bold block mt-4 bg-white/5 dark:bg-black/20 w-max px-4 py-2 rounded-lg">test();</code>
           </div>
        </div>

      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          EXECUTE()
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-fuchsia-500/10 decoration-2">
          "Don't just write functions, master how they are invoked."
        </p>
      </footer>

    </div>
  );
};

export default JsFunctionInvocation;