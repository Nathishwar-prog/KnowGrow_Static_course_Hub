import React, { useState } from 'react';
import {
  Network,
  Share2,
  Zap,
  GitBranch,
  Link,
  Code2,
  Settings,
  Hammer,
  Table,
  Eye,
  Layers,
  Sparkles,
  BookOpen,
  Copy,
  Check,
  Terminal,
  Info,
  ChevronRight,
  Database
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-blue-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsObjectPrototypes: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Network size={14} className="fill-current" /> ADVANCED ARCHITECTURE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-2xl">
            Prototypes
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The unseen backbone of JavaScript. Learn how objects <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight">inherit properties</span> and methods dynamically through the prototype chain.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl text-indigo-500 w-max border border-indigo-100 dark:border-indigo-500/20 shadow-lg">
                 <Link size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is a Prototype?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   In JavaScript, every object has a hidden property called <code className="bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded font-bold">[[Prototype]]</code>
                 </p>
                 <div className="bg-blue-50 dark:bg-blue-500/5 p-4 rounded-2xl border border-blue-200 dark:border-blue-500/20 mb-6">
                    <p className="font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2">
                       👉 It points to another object from which it can inherit properties and methods.
                    </p>
                 </div>
                 <p className="text-gray-900 dark:text-white font-black text-xl flex items-center gap-2">
                    <Check size={24} className="text-green-500"/> This is called Prototypal Inheritance
                 </p>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#180f24] p-10 rounded-[3rem] border border-cyan-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Share2 size={150} className="text-cyan-500"/></div>
               <SectionHeader icon={Share2} title="2. Why Prototypes Exist?" subtitle="Efficiency in memory." color="text-cyan-400" />
               <p className="text-gray-300 font-medium mb-6 relative z-10 text-lg">
                  Without prototypes, you'd be copying methods into every single object instance you create.
               </p>
               <ul className="space-y-4 mb-8 relative z-10 font-medium text-lg text-gray-300">
                  <li className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-black">X</div> Instead of copying methods</li>
                  <li className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-black">✓</div> JavaScript shares them using prototypes</li>
               </ul>
               <div className="relative z-10 bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-xl flex items-center gap-4">
                 <Zap size={32} className="text-yellow-400" />
                 <p className="text-cyan-200 font-bold">👉 Saves memory + improves performance!</p>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Basic Example & Chain ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Code2} title="3. Basic Example" color="text-pink-500" />
            <CodeBlock code={`const person = {\n  greet() {\n    return "Hello!";\n  }\n};\n\nconst user = Object.create(person);\n\nconsole.log(user.greet()); // Hello!`} title="PROTOTYPE CREATION" />
            
            <div className="mt-8 bg-pink-50 dark:bg-pink-500/5 p-6 rounded-2xl border border-pink-200 dark:border-pink-500/20">
               <h4 className="font-bold text-pink-700 dark:text-pink-400 flex items-center gap-2 mb-4">
                  🔍 Explanation:
               </h4>
               <ol className="space-y-2 text-pink-800 dark:text-pink-200 font-medium list-[decimal] list-inside">
                  <li><code className="text-pink-900 dark:text-pink-100 font-bold">user</code> doesn't have <code className="text-pink-900 dark:text-pink-100 font-bold">greet</code></li>
                  <li>JS looks into its prototype (<code className="text-pink-900 dark:text-pink-100 font-bold">person</code>)</li>
                  <li>Finds <code className="text-pink-900 dark:text-pink-100 font-bold">greet</code> &rarr; executes it</li>
               </ol>
            </div>
         </div>

         <div className="bg-gradient-to-br from-[#180f24] to-blue-900/20 border border-blue-500/30 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 p-4"><GitBranch size={200} className="text-blue-500"/></div>
            <SectionHeader icon={GitBranch} title="4. Prototype Chain" subtitle="Core Concept" color="text-blue-400" />
            <p className="text-blue-200 font-medium mb-6 relative z-10">
               👉 JavaScript searches properties in this exact order:
            </p>
            <div className="flex flex-wrap items-center gap-2 text-white font-mono font-bold text-sm bg-blue-500/10 p-4 border border-blue-500/20 rounded-xl w-max mb-8 relative z-10">
               <span>object</span> <ChevronRight size={16} className="text-blue-400"/>
               <span>prototype</span> <ChevronRight size={16} className="text-blue-400"/>
               <span>prototype</span> <ChevronRight size={16} className="text-blue-400"/>
               <span>...</span> <ChevronRight size={16} className="text-blue-400"/>
               <span className="text-red-400">null</span>
            </div>
            
            <div className="relative z-10">
               <p className="text-yellow-400 font-bold mb-3 flex items-center gap-2">🔥 Example:</p>
               <CodeBlock code={`const animal = {\n  eats: true\n};\n\nconst dog = Object.create(animal);\ndog.barks = true;\n\nconsole.log(dog.eats); // true`} />
               <div className="bg-black/30 p-4 rounded-xl border border-white/5 mt-4">
                  <p className="text-gray-300 text-sm font-medium mb-2">👉 JS checks:</p>
                  <p className="text-white font-mono text-sm leading-relaxed">
                     <span className="text-gray-400">dog.eats</span> ❌ doesn't exist<br/>
                     <span className="text-green-400">animal.eats</span> ✅ found in prototype
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5 & 6: Accessing & Setting ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Settings} title="5. Accessing Prototype" color="text-emerald-500" />
            
            <div className="mb-8">
               <p className="text-emerald-500 font-bold flex items-center gap-2 mb-3"><Check size={20}/> Modern Way</p>
               <CodeBlock code={`Object.getPrototypeOf(obj);`} />
            </div>
            
            <div>
               <p className="text-orange-500 font-bold flex items-center gap-2 mb-3"><Sparkles size={20}/> Old Way (Avoid, Deprecated)</p>
               <CodeBlock code={`obj.__proto__;`} />
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Hammer} title="6. Setting Prototype" color="text-purple-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               Use <code className="text-purple-500 font-bold bg-purple-50 dark:bg-purple-500/10 px-2 py-1 rounded">Object.create()</code> to create a new object and set its prototype in one go.
            </p>
            <CodeBlock code={`const animal = { eats: true };\n\nconst cat = Object.create(animal);\n\nconsole.log(cat.eats); // true`} title="SETTING CHAIN" />
         </div>
      </section>

      {/* ── Section 7 & 8: Constructors & Internals ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#180f24] border border-fuchsia-500/30 p-10 py-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <SectionHeader icon={Database} title="7. Constructor Functions & Prototype" subtitle="How older JS built objects before Classes." color="text-fuchsia-400" />
            
            <div className="grid lg:grid-cols-2 gap-10 relative z-10">
               <div>
                  <CodeBlock code={`function Person(name) {\n  this.name = name;\n}\n\nPerson.prototype.greet = function () {\n  return "Hello " + this.name;\n};\n\nconst user1 = new Person("Karthick");\n\nconsole.log(user1.greet());`} title="CONSTRUCTOR INHERITANCE" />
                  <div className="bg-black/30 w-max border border-white/5 rounded-xl p-4 flex items-center gap-4">
                     <span className="text-fuchsia-400 font-bold">🎯 Output:</span>
                     <span className="text-white font-mono">Hello Karthick</span>
                  </div>
               </div>
               
               <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                     <Settings className="text-fuchsia-500"/> 8. How It Works Internally
                  </h3>
                  <div className="bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-2xl p-6">
                     <ol className="space-y-4 text-fuchsia-100 font-medium list-[decimal] list-inside mb-6">
                        <li><code className="bg-fuchsia-500/20 px-2 py-1 rounded text-white font-bold">new Person()</code> creates an empty object</li>
                        <li>Links this new object to <code className="bg-fuchsia-500/20 px-2 py-1 rounded text-white font-bold">Person.prototype</code></li>
                        <li>Returns the object</li>
                     </ol>
                     <p className="text-fuchsia-400 font-bold text-lg">👉 So all instances share the same methods in memory!</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9 & 10: Table Instance vs Prototype & hasOwnProperty ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Table} title="9. Prototype vs Instance" color="text-teal-500" />
            
            <CodeBlock code={`function Car(brand) {\n  this.brand = brand; // Instance property\n}\n\nCar.prototype.drive = function () { // Prototype method\n  return "Driving...";\n};`} language="javascript" />
            
            <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <th className="p-4 font-black text-gray-900 dark:text-white">Type</th>
                        <th className="p-4 font-black text-gray-900 dark:text-white">Stored Where</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300 font-medium">
                     <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-4"><span className="bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-300 px-2 py-1 rounded font-bold text-sm">Instance</span></td>
                        <td className="p-4">Inside the individual object</td>
                     </tr>
                     <tr>
                        <td className="p-4"><span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-300 px-2 py-1 rounded font-bold text-sm">Prototype</span></td>
                        <td className="p-4">Shared centrally in memory</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Eye} title="10. hasOwnProperty()" color="text-amber-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               Because objects inherit properties, sometimes you need to know if a property belongs <b>directly</b> to the object, or if it's inherited.
            </p>
            <CodeBlock code={`console.log(user1.hasOwnProperty("name"));  // true\nconsole.log(user1.hasOwnProperty("greet")); // false // (It inherited greet)`} />
            <div className="mt-6 bg-amber-50 dark:bg-amber-500/5 p-4 rounded-xl border border-amber-200 dark:border-amber-500/20 text-amber-800 dark:text-amber-300 text-sm font-bold">
               👉 Helps distinguish between Own properties vs Inherited properties
            </div>
         </div>
      </section>

      {/* ── Section 11 & 12: Chain Deep & Modern ES6 Classes ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-[#180f24] to-emerald-900/20 border border-emerald-500/30 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10"><Layers size={200} className="text-emerald-500" /></div>
            <SectionHeader icon={Layers} title="11. Chain Example (Deep)" color="text-emerald-400" />
            <p className="text-emerald-200 font-medium mb-6 relative z-10">
               Objects can inherit from objects, which inherit from other objects.
            </p>
            <div className="relative z-10">
               <CodeBlock code={`const livingBeing = {\n  alive: true\n};\n\nconst animal = Object.create(livingBeing);\nanimal.eats = true;\n\nconst dog = Object.create(animal);\ndog.barks = true;\n\nconsole.log(dog.alive); // true (Found 2 steps up!)`} />
            </div>
         </div>

         <div className="bg-gradient-to-br from-[#180f24] to-[#0f0914] border border-blue-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Code2} title="12. Modern JS (Classes)" color="text-blue-400" />
            <p className="text-gray-300 font-medium mb-6">
               ES6 Classes are "syntactical sugar" over JavaScript's existing prototype-based inheritance. <strong className="text-white">Behind the scenes &rarr; prototypes are still used!</strong>
            </p>
            <CodeBlock code={`class Person {\n  constructor(name) {\n    this.name = name;\n  }\n\n  greet() {\n    return "Hello " + this.name;\n  }\n}\n\nconst user = new Person("Karthick");\nconsole.log(user.greet());`} />
         </div>
      </section>

      {/* ── Section 13: Visualization Target ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-rose-500/20 rounded-[3rem] shadow-xl text-center">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-3">
               <Eye className="text-rose-500"/> 13. Output Visualization
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
               <CodeBlock code={`const obj = {\n  a: 1\n};\n\nconst child = Object.create(obj);\n\nconsole.log(child.a);\nconsole.log(child.hasOwnProperty("a"));`} title="CODE" />
               <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col justify-center">
                  <h4 className="text-rose-400 font-mono text-sm tracking-widest font-black uppercase flex items-center gap-2 mb-4">
                     <Terminal size={16}/> Console Output
                  </h4>
                  <pre className="text-white font-mono text-lg leading-loose"><span className="text-green-400">1</span> <span className="text-gray-500 text-sm ml-2">// inherited</span><br/><span className="text-red-400">false</span> <span className="text-gray-500 text-sm ml-2">// property is not its 'own'</span></pre>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          INHERITANCE MASTERED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-blue-500/10 decoration-2">
          "Understanding prototypes unlocks the true mechanics of JavaScript, bridging the gap between basic coding and advanced architectural design."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectPrototypes;