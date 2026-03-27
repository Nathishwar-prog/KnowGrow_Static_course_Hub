import React, { useState } from 'react';
import {
  BoxSelect,
  Activity,
  Layers,
  Briefcase,
  Key,
  Database,
  Search,
  CheckCircle,
  PlusCircle,
  Edit2,
  Trash2,
  Settings,
  Repeat,
  ShieldCheck,
  Code2,
  Copy,
  Check,
  Terminal,
  Info,
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

const JsObjectProperties: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-rose-600 dark:text-rose-400 text-[10px] font-black mb-8 border border-rose-100 dark:border-rose-900/50 shadow-xl shadow-rose-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <BookOpen size={14} className="fill-current" /> DATA STRUCTURES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-violet-500 drop-shadow-2xl">
            Properties
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The core structure of JavaScript. Learn how to store structured data using <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500 underline-offset-4 tracking-tight">key-value pairs</span> to represent real-world entities.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-violet-50 dark:bg-violet-500/10 rounded-2xl text-violet-500 w-max border border-violet-100 dark:border-violet-500/20 shadow-lg">
                 <BoxSelect size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are Object Properties?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   In JavaScript, an object is a collection of <span className="font-bold text-violet-500">key-value pairs</span>.
                   <br/><br/>
                   👉 Each key is called a <span className="font-bold">property</span>, and it holds a <span className="font-bold">value</span>.
                 </p>
                 <CodeBlock code={`const person = {\n  name: "Karthick",\n  age: 22,\n  isStudent: true\n};`} title="OBJECT EXAMPLE" />
                 <div className="bg-emerald-50 dark:bg-emerald-500/5 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 mt-4">
                    <p className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-2">
                       <CheckCircle size={18}/> Here:
                    </p>
                    <ul className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed list-disc list-inside space-y-1">
                       <li><code className="text-emerald-600 dark:text-emerald-400">name, age, isStudent</code> &rarr; Properties</li>
                       <li><code className="text-emerald-600 dark:text-emerald-400">"Karthick", 22, true</code> &rarr; Values</li>
                    </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#180f24] p-10 rounded-[3rem] border border-fuchsia-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Activity size={150} className="text-fuchsia-500"/></div>
               <SectionHeader icon={Key} title="2. Why Object Properties Matter?" subtitle="The purpose of objects." color="text-fuchsia-400" />
               <p className="text-gray-300 font-medium mb-6 relative z-10">
                  Object properties help you:
               </p>
               <ul className="space-y-3 mb-8 relative z-10 text-fuchsia-100 font-medium">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></div> Store structured data</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></div> Represent real-world entities</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></div> Build scalable applications (APIs, UI state, etc.)</li>
               </ul>
               <div className="relative z-10">
                 <p className="text-rose-400 font-bold mb-2">👉 Example:</p>
                 <CodeBlock code={`const car = {\n  brand: "Tesla",\n  model: "Model 3",\n  price: 50000\n};`} title="REAL WORLD ENTITY" />
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Accessing Properties ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 border border-amber-500/20 p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute -left-10 -top-10 opacity-5"><Search size={200} className="text-amber-500"/></div>
            <SectionHeader icon={Search} title="3. Accessing Object Properties" color="text-amber-500" />
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
               <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                     <CheckCircle className="text-green-500" size={20}/> Method 1: Dot Notation
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm font-medium">The most common way to access properties.</p>
                  <CodeBlock code={`console.log(person.name);\n// Output: Karthick`} />
               </div>
               <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                     <CheckCircle className="text-green-500" size={20}/> Method 2: Bracket Notation
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm font-medium">Pass the property name as a string.</p>
                  <CodeBlock code={`console.log(person["age"]);\n// Output: 22`} />
               </div>
            </div>

            <div className="mt-8 bg-orange-50 dark:bg-orange-500/5 p-6 rounded-2xl border border-orange-200 dark:border-orange-500/20 relative z-10">
               <h4 className="font-bold text-orange-700 dark:text-orange-400 flex items-center gap-2 mb-4">
                  🔥 When to use bracket notation?
               </h4>
               <ul className="space-y-2 mb-4 text-orange-800 dark:text-orange-200 font-medium">
                  <li className="flex items-center gap-2">&bull; Dynamic keys (from variables)</li>
                  <li className="flex items-center gap-2">&bull; Keys with spaces or special characters</li>
               </ul>
               <CodeBlock code={`const user = {\n  "full name": "Karthick Raja"\n};\n\nconsole.log(user["full name"]);`} />
            </div>
         </div>
      </section>

      {/* ── Sections 4 & 5: Adding/Updating & Deleting ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-blue-900/20 to-[#180f24] border border-blue-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Edit2} title="4. Adding & Updating" color="text-blue-400" />
            
            <div className="space-y-6">
               <div>
                  <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                     <PlusCircle size={18}/> Add Property
                  </h4>
                  <CodeBlock code={`person.city = "Chennai";`} />
               </div>
               <div>
                  <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                     <Repeat size={18}/> Update Property
                  </h4>
                  <CodeBlock code={`person.age = 23;`} />
               </div>
            </div>
         </div>

         <div className="bg-gradient-to-br from-rose-900/20 to-[#180f24] border border-rose-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Trash2} title="5. Deleting Properties" color="text-rose-400" />
            <p className="text-gray-300 font-medium mb-6">
               Use the <code className="text-rose-400 bg-rose-500/10 px-2 py-1 rounded">delete</code> keyword to remove a property entirely from an object.
            </p>
            <CodeBlock code={`delete person.isStudent;`} />
            
            <div className="mt-8 bg-rose-500/10 p-5 rounded-2xl border border-rose-500/20 flex flex-col gap-3">
               <p className="text-rose-200 text-sm font-medium flex gap-2">
                  <Info size={20} className="shrink-0 text-rose-400"/>
                  Deleting properties is generally not recommended for performance optimization in V8 engines. It's often better to set the value to undefined or null.
               </p>
            </div>
         </div>
      </section>

      {/* ── Sections 6 & 7: Checking & Looping ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={ShieldCheck} title="6. Checking Existence" color="text-emerald-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               Verify if a property exists in an object using the <code className="text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">in</code> operator or the built-in method.
            </p>
            <CodeBlock code={`console.log("name" in person); // true\n\n// OR\n\nconsole.log(person.hasOwnProperty("age")); // true`} />
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Repeat} title="7. Looping Properties" color="text-indigo-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               Use the <code className="text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 rounded">for...in</code> loop to iterate through all keys.
            </p>
            <CodeBlock code={`for (let key in person) {\n  console.log(key, person[key]);\n}`} />
            <div className="mt-4 bg-[#1e1e1e] rounded-xl p-4 border border-gray-700">
               <h5 className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">🧠 Output:</h5>
               <pre className="text-green-400 font-mono text-sm leading-relaxed">
                  name Karthick<br/>
                  age 23<br/>
                  city Chennai
               </pre>
            </div>
         </div>
      </section>

      {/* ── Section 8: Property Descriptors ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#180f24] border border-violet-500/30 p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10"><Settings size={200} className="text-violet-500" /></div>
            <SectionHeader icon={Settings} title="8. Property Descriptors" subtitle="Advanced Object Configuration" color="text-violet-400" />
            
            <p className="text-gray-300 font-medium text-lg mb-8 relative z-10">
               Every property has <span className="font-bold text-white">hidden settings</span> that control how it behaves.
            </p>

            <div className="grid lg:grid-cols-2 gap-10 relative z-10">
               <CodeBlock code={`Object.defineProperty(person, "id", {\n  value: 101,\n  writable: false,\n  enumerable: true,\n  configurable: false\n});`} title="DEFINE PROPERTY" />
               
               <div className="space-y-4">
                  <h4 className="text-violet-300 font-bold flex items-center gap-2 text-xl mb-4">
                     <Search size={20}/> Key Attributes
                  </h4>
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="bg-white/5 text-violet-300 border-b border-white/10">
                              <th className="p-4 font-bold">Attribute</th>
                              <th className="p-4 font-bold">Meaning</th>
                           </tr>
                        </thead>
                        <tbody className="text-gray-300 font-medium">
                           <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                              <td className="p-4"><code className="text-amber-400 bg-amber-400/10 px-2 py-1 rounded">writable</code></td>
                              <td className="p-4">Can the value be changed?</td>
                           </tr>
                           <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                              <td className="p-4"><code className="text-blue-400 bg-blue-400/10 px-2 py-1 rounded">enumerable</code></td>
                              <td className="p-4">Will it show up in loops?</td>
                           </tr>
                           <tr className="hover:bg-white/5 transition-colors">
                              <td className="p-4"><code className="text-rose-400 bg-rose-400/10 px-2 py-1 rounded">configurable</code></td>
                              <td className="p-4">Can it be deleted or modified later?</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9 & 10: Methods vs Properties & Nested ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Code2} title="9. Methods vs Properties" color="text-pink-500" />
            
            <CodeBlock code={`const user = {\n  name: "Karthick",\n  greet: function () {\n    return "Hello!";\n  }\n};`} />
            
            <div className="mt-6 flex flex-col gap-3 font-medium text-gray-700 dark:text-gray-300">
               <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
                  <span className="text-xl">👉</span> 
                  <span><code className="text-pink-500 font-bold">name</code> &rarr; Property (Stores a value)</span>
               </div>
               <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
                  <span className="text-xl">👉</span> 
                  <span><code className="text-pink-500 font-bold">greet</code> &rarr; Method (Function inside object)</span>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Layers} title="10. Nested Properties" color="text-sky-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               Objects can contain other objects. You chain dots to access deeply nested data.
            </p>
            <CodeBlock code={`const student = {\n  name: "Karthick",\n  address: {\n    city: "Chennai",\n    pincode: 600001\n  }\n};\n\nconsole.log(student.address.city); // Chennai`} />
         </div>
      </section>

      {/* ── Section 11: Real-World Example ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-[#180f24] to-gray-900 border border-cyan-500/30 p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute -left-10 bottom-0 p-10 opacity-10"><Briefcase size={250} className="text-cyan-500" /></div>
            <SectionHeader icon={Briefcase} title="11. Real-World Example" color="text-cyan-400" />
            
            <p className="text-gray-300 font-medium text-lg mb-8 relative z-10">
               How object properties look in a real application scenario, like an E-Commerce product catalog.
            </p>
            
            <div className="relative z-10">
               <CodeBlock code={`const product = {\n  id: 1,\n  name: "Laptop",\n  price: 75000,\n  specs: {\n    ram: "16GB",\n    storage: "512GB SSD"\n  }\n};\n\nconsole.log(product.specs.ram);\n// Output: 16GB`} title="E-COMMERCE DATA" />
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA MASTERED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-violet-500/10 decoration-2">
          "Objects and their properties are the fundamental building blocks of almost everything you'll build in JavaScript."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectProperties;