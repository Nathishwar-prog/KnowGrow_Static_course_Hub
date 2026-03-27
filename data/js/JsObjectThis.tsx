import React, { useState } from 'react';
import {
  Target,
  Crosshair,
  Globe,
  Box,
  AlertTriangle,
  ArrowRightCircle,
  Wrench,
  Link,
  Hammer,
  Code2,
  Bug,
  MousePointerClick,
  Terminal,
  Copy,
  Check,
  Zap,
  BookOpen
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-rose-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsObjectThis: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-rose-600 dark:text-rose-400 text-[10px] font-black mb-8 border border-rose-100 dark:border-rose-900/50 shadow-xl shadow-rose-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Target size={14} className="fill-current" /> EXECUTION CONTEXT
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 drop-shadow-2xl font-mono">
            this
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The most misunderstood keyword in JavaScript. Understand how <code className="text-gray-900 dark:text-white font-bold bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">this</code> changes based on <span className="underline decoration-rose-500 underline-offset-4 tracking-tight">how a function is called</span>.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-rose-50 dark:bg-rose-500/10 rounded-2xl text-rose-500 w-max border border-rose-100 dark:border-rose-500/20 shadow-lg">
                 <Crosshair size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is <code className="text-rose-500">this</code>?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 <code className="font-bold text-rose-500 bg-rose-500/10 px-2 py-1 rounded">this</code> refers to the <b>object that is executing the current function</b>.
                 </p>
                 <div className="bg-yellow-50 dark:bg-yellow-500/5 p-5 rounded-2xl border border-yellow-200 dark:border-yellow-500/20">
                    <p className="font-bold text-yellow-700 dark:text-yellow-400 flex items-center gap-2 mb-2">
                       📌 But here's the catch:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-lg leading-relaxed">
                       The value of <code className="font-mono text-rose-500">this</code> depends on <b>how the function is called</b>, not where it is written.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#180f24] p-10 rounded-[3rem] border border-purple-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Zap size={150} className="text-purple-500"/></div>
               <SectionHeader icon={Zap} title="2. Why this is Important?" subtitle="Mastering context." color="text-purple-400" />
               <ul className="space-y-4 relative z-10 font-bold text-lg text-gray-300">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div> Access object properties inside methods</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div> Build reusable components</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div> Control execution context</li>
               </ul>
           </div>
        </div>
      </section>

      {/* ── Sections 3, 4, 5: Scope Contexts ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8">
         <div className="bg-gradient-to-br from-blue-900/20 to-[#180f24] border border-blue-500/30 p-8 rounded-[2rem] shadow-xl flex flex-col h-full">
            <div className="p-3 bg-blue-500/20 rounded-xl w-max mb-6 text-blue-400 ring-1 ring-blue-500/50"><Globe size={24}/></div>
            <h3 className="text-xl font-black text-white mb-4">3. Global Scope</h3>
            <CodeBlock code={`console.log(this);`} language="javascript" title="GLOBAL" />
            <div className="flex-grow space-y-4 mt-4 text-sm font-medium">
               <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/20">
                  <span className="text-blue-300 font-bold block mb-1">👉 In Browser:</span>
                  <code className="text-white">this &rarr; window</code>
               </div>
               <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/20">
                  <span className="text-blue-300 font-bold block mb-1">👉 In Node.js:</span>
                  <code className="text-white">this &rarr; {} (module scope)</code>
               </div>
            </div>
         </div>

         <div className="bg-gradient-to-br from-emerald-900/20 to-[#180f24] border border-emerald-500/30 p-8 rounded-[2rem] shadow-xl flex flex-col h-full">
            <div className="p-3 bg-emerald-500/20 rounded-xl w-max mb-6 text-emerald-400 ring-1 ring-emerald-500/50"><Box size={24}/></div>
            <h3 className="text-xl font-black text-white mb-4">4. Inside Object Method</h3>
            <div className="flex-grow">
               <CodeBlock code={`const user = {\n  name: "Karthick",\n  greet() {\n    return "Hello " + this.name;\n  }\n};\n\nconsole.log(user.greet());\n// Output: Hello Karthick`} />
            </div>
            <p className="text-emerald-400 font-bold mt-4 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 text-center">
               👉 this refers to <code className="text-white">user</code> object
            </p>
         </div>

         <div className="bg-gradient-to-br from-orange-900/20 to-[#180f24] border border-orange-500/30 p-8 rounded-[2rem] shadow-xl flex flex-col h-full">
            <div className="p-3 bg-orange-500/20 rounded-xl w-max mb-6 text-orange-400 ring-1 ring-orange-500/50"><Terminal size={24}/></div>
            <h3 className="text-xl font-black text-white mb-4">5. Regular Function</h3>
            <div className="flex-grow">
               <CodeBlock code={`function show() {\n  console.log(this);\n}\n\nshow();`} />
            </div>
            <div className="flex-grow space-y-2 mt-4 text-sm font-medium">
               <div className="bg-orange-500/10 p-3 rounded-xl border border-orange-500/20">
                  <span className="text-orange-300 font-bold block mb-1">Non-strict mode:</span>
                  <code className="text-white">this &rarr; window</code>
               </div>
               <div className="bg-orange-500/10 p-3 rounded-xl border border-orange-500/20">
                  <span className="text-orange-300 font-bold block mb-1">Strict mode:</span>
                  <code className="text-white">"use strict"; &rarr; undefined</code>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6 & 7: Arrow Functions ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-red-500/20 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><AlertTriangle size={200} className="text-red-500" /></div>
            <SectionHeader icon={AlertTriangle} title="6. Arrow Functions ⚠️" color="text-red-500" />
            
            <CodeBlock code={`const user = {\n  name: "Karthick",\n  greet: () => {\n    console.log(this.name);\n  }\n};\n\nuser.greet(); // ❌ undefined`} title="THE ARROW TRAP" />
            
            <div className="mt-6 bg-red-50 dark:bg-red-500/10 p-6 rounded-2xl border border-red-200 dark:border-red-500/20 relative z-10">
               <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 text-lg">👉 Arrow functions:</h4>
               <ul className="space-y-2 text-red-900 dark:text-red-200 font-medium list-disc list-inside">
                  <li>Do <strong className="font-black text-red-500">NOT</strong> have their own <code className="bg-red-200 dark:bg-red-900/50 px-1 rounded">this</code></li>
                  <li>They inherit <code className="bg-red-200 dark:bg-red-900/50 px-1 rounded">this</code> from the parent scope</li>
               </ul>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-green-500/20 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Wrench} title="7. Fixing Arrow Function Issue" color="text-green-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               If you need to use an arrow function inside an object step back to a regular method first, so the arrow inherits the correct context.
            </p>
            <CodeBlock code={`const user = {\n  name: "Karthick",\n  greet() {\n    const arrow = () => {\n      console.log(this.name);\n    };\n    arrow();\n  }\n};\n\nuser.greet(); // ✅ Karthick`} title="THE FIX" />
            <div className="bg-green-50 dark:bg-green-500/10 p-4 border border-green-200 dark:border-green-500/20 rounded-xl font-bold text-green-700 dark:text-green-400">
               👉 Works because the arrow inherits outer <code className="text-green-600 dark:text-green-300 bg-green-200 dark:bg-green-900/50 px-1 rounded">this</code> (from greet method).
            </div>
         </div>
      </section>

      {/* ── Section 8: Call, Apply, Bind ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-[#180f24] to-indigo-900/20 border border-indigo-500/30 p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute -left-10 bottom-0 p-10 opacity-10"><Link size={250} className="text-indigo-500" /></div>
            <SectionHeader icon={Link} title="8. Explicit Binding Tools" subtitle="Control context explicitly." color="text-indigo-400" />
            
            <p className="text-gray-300 font-medium text-lg mb-8 relative z-10">
               You can manually set the value of <code className="text-indigo-400 font-bold">this</code> using these three built-in functions:
            </p>

            <div className="relative z-10 space-y-8">
               <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="text-indigo-300 font-bold flex items-center gap-2 text-xl mb-4">
                     <Check size={20} className="text-indigo-400"/> call()
                  </h4>
                  <CodeBlock code={`function greet() {\n  console.log("Hello " + this.name);\n}\n\nconst user = { name: "Karthick" };\n\ngreet.call(user);`} />
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                     <h4 className="text-indigo-300 font-bold flex items-center gap-2 text-xl mb-4">
                        <Check size={20} className="text-indigo-400"/> apply()
                     </h4>
                     <p className="text-gray-400 text-sm mb-4">Same as call, but takes arguments as an array.</p>
                     <CodeBlock code={`greet.apply(user);`} />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                     <h4 className="text-indigo-300 font-bold flex items-center gap-2 text-xl mb-4">
                        <Check size={20} className="text-indigo-400"/> bind()
                     </h4>
                     <p className="text-gray-400 text-sm mb-4">Returns a NEW function heavily bound.</p>
                     <CodeBlock code={`const newFunc = greet.bind(user);\nnewFunc();`} />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9 & 10: Constructors and Classes ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Hammer} title="9. Constructor Function" color="text-amber-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               When using the <code className="font-bold text-amber-500 bg-amber-50 dark:bg-amber-500/10 px-1 rounded">new</code> keyword, <code className="font-bold text-amber-500">this</code> points to the newly created instance.
            </p>
            <CodeBlock code={`function Person(name) {\n  this.name = name;\n}\n\nconst user = new Person("Karthick");\nconsole.log(user.name);`} title="CONSTRUCTOR" />
            <p className="mt-4 font-bold text-amber-700 dark:text-amber-400 text-center">👉 this refers to newly created object</p>
         </div>

         <div className="bg-[#180f24] border border-cyan-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Code2} title="10. Class (Modern JS)" color="text-cyan-400" />
            <p className="text-gray-300 font-medium mb-6">
               In modern ES6 classes, <code className="font-bold text-cyan-400">this</code> inside the constructor and methods refers to the class instance automatically.
            </p>
            <CodeBlock code={`class Person {\n  constructor(name) {\n    this.name = name;\n  }\n\n  greet() {\n    return "Hello " + this.name;\n  }\n}\n\nconst user = new Person("Karthick");\nconsole.log(user.greet());`} title="CLASS CONTEXT" />
         </div>
      </section>

      {/* ── Section 11 & 12: Losing this (Bugs & Fixes) ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-red-50 dark:bg-red-500/10 p-10 border border-red-200 dark:border-red-500/30 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Bug} title="11. Losing this (Common Bug ⚠️)" color="text-red-500" />
            <p className="text-red-900 dark:text-red-200 font-medium mb-6">
               If you extract a method from an object and call it later, it loses its context!
            </p>
            <CodeBlock code={`const user = {\n  name: "Karthick",\n  greet() {\n    console.log(this.name);\n  }\n};\n\nconst fn = user.greet;\nfn(); // ❌ undefined`} title="THE MISTAKE" />
            <p className="font-bold text-red-600 dark:text-red-400 mt-4 text-center">
               👉 this is lost because the function is called separately.
            </p>
         </div>

         <div className="bg-green-50 dark:bg-green-500/10 p-10 border border-green-200 dark:border-green-500/30 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Wrench} title="12. Fixing Lost this" color="text-green-500" />
            <p className="text-green-900 dark:text-green-200 font-medium mb-6">
               You can permanently bind the context using <code className="font-bold text-green-600 dark:text-green-400">bind()</code>.
            </p>
            <CodeBlock code={`const fn = user.greet.bind(user);\nfn(); // ✅ Karthick`} title="THE SOLUTION" />
            <div className="mt-8 flex justify-center">
               <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 ring-4 ring-green-500/40">
                  <Check size={48}/>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 13 & 14: Events & Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={MousePointerClick} title="13. Event Handlers" color="text-fuchsia-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               In DOM event handlers, <code className="font-bold text-fuchsia-500">this</code> automatically points to the HTML element that fired the event.
            </p>
            <CodeBlock code={`button.addEventListener("click", function () {\n  console.log(this); \n  // button element\n});`} language="javascript" />
            <p className="mt-4 text-fuchsia-600 dark:text-fuchsia-400 font-bold block text-sm">
               👉 refers to the element itself
            </p>
         </div>

         <div className="lg:col-span-8 bg-[#180f24] border border-rose-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Terminal} title="14. Visualization Target" color="text-rose-400" />
            <div className="grid md:grid-cols-2 gap-6">
               <CodeBlock code={`const obj = {\n  name: "Karthick",\n  show() {\n    console.log(this.name);\n  }\n};\n\nobj.show();`} title="CODE" />
               <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col justify-center">
                  <h4 className="text-rose-400 font-mono text-sm tracking-widest font-black uppercase flex items-center gap-2 mb-4">
                     <Terminal size={16}/> Console Output
                  </h4>
                  <pre className="text-white font-mono text-2xl font-bold">Karthick</pre>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          CONTEXT SECURED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-rose-500/10 decoration-2">
          "Understanding the exact runtime context of your functions is what separates standard developers from architectural engineers."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectThis;