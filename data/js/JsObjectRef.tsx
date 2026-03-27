import React, { useState } from 'react';
import {
  Share2,
  AlertTriangle,
  Cpu,
  Layers,
  Copy,
  Terminal,
  Check,
  Zap,
  SplitSquareHorizontal,
  Table,
  CheckCircle,
  XCircle,
  Scissors,
  Network,
  Database,
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

const JsObjectRef: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Network size={14} className="fill-current" /> MEMORY & POINTERS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 drop-shadow-2xl">
            Reference
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The difference between 'copying a value' and 'sharing an address'. Understand how JavaScript <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500 underline-offset-4 tracking-tight">stores objects in memory</span>.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-amber-50 dark:bg-amber-500/10 rounded-2xl text-amber-500 w-max border border-amber-100 dark:border-amber-500/20 shadow-lg">
                 <Share2 size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is Object Reference?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   In JavaScript, objects are stored in memory (heap) and variables store <span className="font-bold text-amber-500">references (addresses)</span>, not actual values.
                 </p>
                 <CodeBlock code={`const obj1 = { name: "Karthick" };\nconst obj2 = obj1;`} />
                 <div className="bg-emerald-50 dark:bg-emerald-500/5 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-500/20">
                    <p className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                       <CheckCircle size={20}/> Both obj1 and obj2 point to the SAME object.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#180f24] p-10 rounded-[3rem] border border-red-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><AlertTriangle size={150} className="text-red-500"/></div>
               <SectionHeader icon={AlertTriangle} title="2. Why This is Important?" subtitle="The mutation trap." color="text-red-400" />
               <p className="text-gray-300 font-medium mb-6 relative z-10">
                  Because they share the exact same reference, mutating the "copy" alters the original!
               </p>
               <div className="relative z-10">
                 <CodeBlock code={`obj2.name = "Raja";\n\nconsole.log(obj1.name); // Raja 😲`} title="THE MUTATION" />
                 <ul className="mt-4 space-y-2 text-red-300 font-bold">
                    <li>👉 Changing one affects the other</li>
                    <li>👉 Because both share the same reference</li>
                 </ul>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Visual Understanding ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-indigo-900/20 to-[#180f24] border border-indigo-500/30 p-10 py-14 rounded-[3rem] shadow-2xl relative overflow-hidden text-center">
            <h3 className="text-3xl font-black text-white mb-8 flex flex-col items-center justify-center gap-3">
               <Cpu className="text-indigo-400" size={48}/> 3. Visual Understanding
            </h3>
            
            <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-gray-700 mb-8 max-w-lg mx-auto shadow-inner text-left font-mono font-bold text-lg leading-loose">
               <div className="flex items-center gap-4 text-indigo-400"><span className="text-white w-16">obj1</span> ──► <span className="text-green-400 bg-green-500/10 px-3 py-1 rounded-xl">{`{ name: "Karthick" }`}</span></div>
               <div className="flex items-center gap-4 text-indigo-400"><span className="text-white w-16">obj2</span> ──► <span className="text-gray-500 italic px-3 py-1">(same memory location)</span></div>
            </div>

            <div className="flex justify-center gap-8 text-lg font-bold">
               <span className="flex items-center gap-2 text-red-400 bg-red-500/10 px-4 py-2 rounded-xl"><XCircle size={20}/> Not two objects</span>
               <span className="flex items-center gap-2 text-green-400 bg-green-500/10 px-4 py-2 rounded-xl"><CheckCircle size={20}/> Only one object with two references</span>
            </div>
         </div>
      </section>

      {/* ── Section 4: Primitive vs Reference & Comparing ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Table} title="4. Primitive vs Reference" color="text-fuchsia-500" />
            
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-8">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <th className="p-4 font-black">Type</th>
                        <th className="p-4 font-black">Stored As</th>
                        <th className="p-4 font-black">Example</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300 font-medium">
                     <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Primitive</td>
                        <td className="p-4 bg-emerald-50 dark:bg-emerald-500/10">Value</td>
                        <td className="p-4">number, string</td>
                     </tr>
                     <tr>
                        <td className="p-4 font-bold text-fuchsia-600 dark:text-fuchsia-400">Object</td>
                        <td className="p-4 bg-fuchsia-50 dark:bg-fuchsia-500/10">Reference</td>
                        <td className="p-4">object, array</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
               <div className="bg-emerald-50 dark:bg-emerald-500/10 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-500/20">
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2"><CheckCircle size={18}/> Primitive</h4>
                  <CodeBlock code={`let a = 10;\nlet b = a;\nb = 20;\n\nconsole.log(a); // 10 ✅`} />
               </div>
               <div className="bg-red-50 dark:bg-red-500/10 p-5 rounded-2xl border border-red-200 dark:border-red-500/20">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2"><XCircle size={18}/> Object</h4>
                  <CodeBlock code={`let a = { v: 10 };\nlet b = a;\nb.v = 20;\n\nconsole.log(a.v); // 20 ❌`} />
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={SplitSquareHorizontal} title="5. Comparing Objects" subtitle="Why values don't equal values." color="text-amber-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               If you create two identical objects, they are <b>not</b> equal.
            </p>
            <CodeBlock code={`const obj1 = { name: "Karthick" };\nconst obj2 = { name: "Karthick" };\n\nconsole.log(obj1 === obj2); // false`} title="STRICT EQUALITY" />
            
            <div className="mt-8 bg-amber-50 dark:bg-amber-500/5 p-6 rounded-2xl border border-amber-200 dark:border-amber-500/20">
               <h4 className="font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2 mb-2">
                  👉 Because:
               </h4>
               <ul className="list-disc list-inside space-y-2 text-amber-900 dark:text-amber-200 font-medium">
                  <li>They occupy <b>different memory references</b> (heap addresses).</li>
                  <li>Even if their internal values look exactly the same!</li>
               </ul>
            </div>
         </div>
      </section>

      {/* ── Section 6 & 7: Copying Objects & Problem ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-[#180f24] border border-blue-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Copy} title="6. How to Copy Objects" color="text-blue-400" />
            
            <div className="mb-6 bg-red-500/10 p-4 border border-red-500/20 rounded-xl">
               <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><XCircle size={18}/> Wrong Way (Reference Copy)</h4>
               <CodeBlock code={`const copy = original;`} language="javascript" />
            </div>
            
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-lg"><CheckCircle size={20}/> Shallow Copy Methods</h4>
            
            <div className="space-y-4">
               <div>
                  <p className="text-gray-300 font-bold mb-2">✔️ 1. Spread Operator</p>
                  <CodeBlock code={`const copy = { ...original };`} />
               </div>
               <div>
                  <p className="text-gray-300 font-bold mb-2">✔️ 2. Object.assign()</p>
                  <CodeBlock code={`const copy = Object.assign({}, original);`} />
               </div>
            </div>
         </div>

         <div className="bg-[#180f24] border border-yellow-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={AlertTriangle} title="7. Shallow Copy Problem ⚠️" color="text-yellow-400" />
            <p className="text-gray-300 font-medium mb-6">
               Shallow copies only clone the <b>first level</b> of properties.
               <br/>Nested objects are <span className="text-yellow-400 font-bold underline">STILL references!</span>
            </p>
            <CodeBlock code={`const user = {\n  name: "Karthick",\n  address: { city: "Chennai" }\n};\n\nconst copy = { ...user };\ncopy.address.city = "Madurai";\n\nconsole.log(user.address.city); // Madurai 😬`} title="NESTED MUTATION" />
            <p className="text-red-400 font-bold mt-4 flex items-center gap-2 border border-red-500/20 bg-red-500/10 px-4 py-2 rounded-xl">
               👉 Nested objects still share the same reference!
            </p>
         </div>
      </section>

      {/* ── Section 8 & 9: Deep Copy & Function Args ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-[#180f24] to-emerald-900/20 border border-emerald-500/30 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10"><Layers size={200} className="text-emerald-500" /></div>
            <SectionHeader icon={Layers} title="8. Deep Copy (Solution)" color="text-emerald-400" />
            <p className="text-emerald-200 font-medium mb-6 relative z-10">
               Clones every single level, completely severing any references to the original object.
            </p>
            
            <div className="relative z-10 space-y-6">
               <div>
                  <p className="text-white font-bold mb-2 flex items-center gap-2"><Check size={18} className="text-emerald-400"/> 1. JSON Trick (Older/Classic)</p>
                  <CodeBlock code={`const deepCopy = JSON.parse(JSON.stringify(user));`} />
               </div>
               <div>
                  <p className="text-white font-bold mb-2 flex items-center gap-2"><Zap size={18} className="text-amber-400"/> 2. structuredClone() (Modern Native)</p>
                  <CodeBlock code={`const deepCopy = structuredClone(user);`} />
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Scissors} title="9. Function Arguments" color="text-rose-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               When you pass an object into a function, you are passing the <b>reference</b>. Mutating it inside the function mutates the original.
            </p>
            <CodeBlock code={`function update(obj) {\n  obj.name = "Updated";\n}\n\nconst user = { name: "Karthick" };\nupdate(user);\n\nconsole.log(user.name); // Updated`} title="PASS BY REFERENCE" />
            <div className="bg-rose-50 dark:bg-rose-500/10 p-4 border border-rose-200 dark:border-rose-500/20 rounded-xl font-bold text-rose-700 dark:text-rose-400">
               👉 Functions also pass reference, not copy!
            </div>
         </div>
      </section>

      {/* ── Section 10 & 11: Memory Insight & Visualizer ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-5 p-4"><Database size={200}/></div>
            <SectionHeader icon={Database} title="10. Memory Insight (Advanced)" color="text-zinc-600 dark:text-zinc-400" />
            
            <div className="space-y-4 font-mono font-bold text-lg text-gray-700 dark:text-gray-300 relative z-10 mb-8">
               <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center gap-4">
                  <span className="text-blue-500">Objects</span> &rarr; Stored in Heap
               </div>
               <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center gap-4">
                  <span className="text-orange-500">Variables</span> &rarr; Stored in Stack
               </div>
               <div className="p-4 flex items-center justify-center text-zinc-500">
                  <Network size={24} className="mr-3"/> Stack stores pointer &rarr; Heap data
               </div>
            </div>
            
            <p className="text-center font-black text-2xl text-gray-900 dark:text-white relative z-10">
               👉 That pointer = reference
            </p>
         </div>

         <div className="bg-[#180f24] border border-fuchsia-500/30 p-10 rounded-[3rem] shadow-2xl flex flex-col justify-between">
            <div>
               <SectionHeader icon={Terminal} title="11. Visualization Code" color="text-fuchsia-400" />
               <CodeBlock code={`const a = { value: 1 };\nconst b = a;\n\nb.value = 99;\n\nconsole.log(a.value); // 99`} title="CODE EXECUTION" />
            </div>
            
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col justify-center">
               <h4 className="text-fuchsia-400 font-mono text-sm tracking-widest font-black uppercase flex items-center gap-2 mb-4">
                  <Terminal size={16}/> Console Output
               </h4>
               <pre className="text-green-400 font-mono text-4xl block font-black">99</pre>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          POINTERS MASTERED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-amber-500/10 decoration-2">
          "Understanding how memory and references work is the most crucial step in avoiding state-mutation bugs in modern JavaScript frameworks."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectRef;