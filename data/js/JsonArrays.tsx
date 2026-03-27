import React, { useState } from 'react';
import {
  Brackets,
  ListTree,
  Table,
  Database,
  ArrowRightLeft,
  Search,
  Repeat,
  Layers,
  Network,
  Filter,
  Zap,
  Terminal,
  Copy,
  Check,
  CheckCircle,
  XCircle,
  Code2
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-teal-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsonArrays: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-teal-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-teal-600 dark:text-teal-400 text-[10px] font-black mb-8 border border-teal-100 dark:border-teal-900/50 shadow-xl shadow-teal-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Database size={14} className="fill-current" /> DATA EXCHANGE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JSON <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 drop-shadow-2xl">
            Arrays
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The standard format for transferring lists of data across the web. Learn how to <span className="text-gray-900 dark:text-white font-bold underline decoration-teal-500 underline-offset-4 tracking-tight">parse, loop, and filter</span> JSON arrays effectively.
        </p>
      </header>

      {/* ── Section 1 & 2: What is it & Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-teal-50 dark:bg-teal-500/10 rounded-2xl text-teal-500 w-max border border-teal-100 dark:border-teal-500/20 shadow-lg">
                 <Brackets size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is a JSON Array?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 A JSON Array is an ordered list of values placed inside square brackets <code className="font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 px-2 py-1 rounded">[]</code>
                 </p>
                 <CodeBlock code={`[\n  "Apple",\n  "Banana",\n  "Mango"\n]`} language="json" />
                 <ul className="space-y-3 font-bold text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-3"><CheckCircle size={20} className="text-teal-500"/> Similar to JavaScript arrays</li>
                    <li className="flex items-center gap-3"><CheckCircle size={20} className="text-teal-500"/> Used heavily for data exchange (APIs & Files)</li>
                 </ul>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-[#180f24] p-10 rounded-[3rem] border border-cyan-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-5 p-6"><Table size={150} className="text-cyan-500"/></div>
            <SectionHeader icon={Table} title="2. JSON vs JS Array" color="text-cyan-400" />
            
            <div className="overflow-x-auto rounded-2xl border border-cyan-500/20 shadow-lg relative z-10 bg-black/40 backdrop-blur-sm">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-cyan-500/10 border-b border-cyan-500/20">
                        <th className="p-4 font-black text-cyan-300">Feature</th>
                        <th className="p-4 font-black text-white">JSON Array</th>
                        <th className="p-4 font-black text-white">JS Array</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-300 font-medium">
                     <tr className="border-b border-cyan-500/10">
                        <td className="p-4 font-bold text-cyan-200">Format</td>
                        <td className="p-4">Text (string)</td>
                        <td className="p-4">Object (runtime)</td>
                     </tr>
                     <tr className="border-b border-cyan-500/10">
                        <td className="p-4 font-bold text-cyan-200">Quotes</td>
                        <td className="p-4 text-orange-400 font-bold">Required ""</td>
                        <td className="p-4 text-emerald-400 font-bold">Optional '' or ""</td>
                     </tr>
                     <tr>
                        <td className="p-4 font-bold text-cyan-200">Functions</td>
                        <td className="p-4 text-red-400 flex items-center gap-2"><XCircle size={16}/> Not allowed</td>
                        <td className="p-4 text-emerald-400"><span className="flex items-center gap-2"><CheckCircle size={16}/> Allowed</span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
        </div>
      </section>

      {/* ── Section 3 & 4: JSON with Objects & Converting ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-indigo-900/20 to-[#180f24] border border-indigo-500/30 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10"><ListTree size={200} className="text-indigo-500" /></div>
            <SectionHeader icon={ListTree} title="3. JSON + Objects" subtitle="The real-world format." color="text-indigo-400" />
            <p className="text-indigo-200 font-medium mb-6 relative z-10">
               Almost all API responses return arrays containing multiple JSON objects.
            </p>
            <div className="relative z-10">
               <CodeBlock code={`[\n  { "name": "Karthick", "age": 22 },\n  { "name": "Ravi", "age": 24 }\n]`} language="json" />
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={ArrowRightLeft} title="4. Converting" color="text-fuchsia-500" />
            
            <div className="mb-8">
               <p className="text-fuchsia-600 dark:text-fuchsia-400 font-bold mb-2 flex items-center gap-2">
                  <span className="bg-fuchsia-100 dark:bg-fuchsia-500/20 p-1 rounded"><Code2 size={16}/></span> JSON &rarr; JS Object
               </p>
               <CodeBlock code={`const jsonData = '[{"name":"Karthick","age":22}]';\n\nconst data = JSON.parse(jsonData);\nconsole.log(data[0].name);`} />
            </div>
            
            <div>
               <p className="text-blue-600 dark:text-blue-400 font-bold mb-2 flex items-center gap-2">
                  <span className="bg-blue-100 dark:bg-blue-500/20 p-1 rounded"><Brackets size={16}/></span> JS Object &rarr; JSON String
               </p>
               <CodeBlock code={`const user = [{ name: "Karthick", age: 22 }];\n\nconst jsonString = JSON.stringify(user);\nconsole.log(jsonString);`} />
            </div>
         </div>
      </section>

      {/* ── Section 5 & 6: Accessing & Looping ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-4 bg-[#180f24] border border-emerald-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Search} title="5. Access Data" color="text-emerald-400" />
            <p className="text-gray-300 font-medium mb-6">
               Since parsed JSON becomes standard JS Arrays, you access them exactly the same way using bracket zero-indexing.
            </p>
            <CodeBlock code={`const users = [\n  { name: "Karthick", age: 22 },\n  { name: "Ravi", age: 24 }\n];\n\nconsole.log(users[0].name); // Karthick`} />
         </div>

         <div className="lg:col-span-8 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Repeat} title="6. Looping Through JSON Arrays" color="text-purple-500" />
            
            <div className="grid md:grid-cols-2 gap-6">
               <div>
                  <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-2">✔️ forEach()</h4>
                  <CodeBlock code={`users.forEach(user => {\n  console.log(user.name);\n});`} />
               </div>
               <div>
                  <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-2">✔️ map() (Returns new array)</h4>
                  <CodeBlock code={`const names = users.map(user => user.name);\nconsole.log(names);`} />
               </div>
               <div className="md:col-span-2">
                  <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-2">✔️ Classic for-loop</h4>
                  <CodeBlock code={`for (let i = 0; i < users.length; i++) {\n  console.log(users[i].age);\n}`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7 & 8: Nested & API Example ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-[#180f24] to-yellow-900/20 border border-yellow-500/30 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 p-6"><Layers size={200} className="text-yellow-500"/></div>
            <SectionHeader icon={Layers} title="7. Nested JSON Arrays" color="text-yellow-400" />
            <div className="relative z-10">
               <CodeBlock code={`[\n  {\n    "name": "Karthick",\n    "skills": ["JS", "React", "Node"]\n  }\n]`} language="json" />
               <div className="mt-6 bg-black/40 p-4 rounded-xl border border-yellow-500/20">
                  <p className="text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Access Example:</p>
                  <code className="text-yellow-300 font-mono text-lg font-black">console.log(data[0].skills[1]); <span className="text-gray-500 font-normal">// React</span></code>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Network} title="8. Real API Example" color="text-rose-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               This is exactly what you will see in the browser Network tab when fetching products from an API.
            </p>
            <CodeBlock code={`[\n  {\n    "id": 1,\n    "product": "Laptop",\n    "price": 75000\n  },\n  {\n    "id": 2,\n    "product": "Mobile",\n    "price": 20000\n  }\n]`} language="json" title="fetch('/api/products')" />
         </div>
      </section>

      {/* ── Section 9 & 10: Filtering & Transforming ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Filter} title="9. Filtering JSON Arrays" color="text-cyan-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               You can instantly query your array data using the built-in <code className="font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-2 py-1 rounded">.filter()</code> method.
            </p>
            <CodeBlock code={`const expensive = products.filter(p => p.price > 30000);\n\nconsole.log(expensive);`} title="EXTRACT DATA" />
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Zap} title="10. Transforming JSON" color="text-amber-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               Need just the titles? Use <code className="font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2 py-1 rounded">.map()</code> to pull out exact properties rapidly.
            </p>
            <CodeBlock code={`const productNames = products.map(p => p.product);\n\nconsole.log(productNames);`} title="TRANSFORM DATA" />
         </div>
      </section>

      {/* ── Section 11: Visualization Target ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-[#180f24] border border-fuchsia-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Terminal} title="11. Visualization Target" color="text-fuchsia-400" />
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex flex-col h-full">
                 <CodeBlock code={`const users = [\n  { name: "Karthick", age: 22 },\n  { name: "Ravi", age: 24 }\n];\n\nusers.forEach(user => \n  console.log(user.name)\n);`} title="CODE" />
               </div>
               <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col justify-center">
                  <h4 className="text-fuchsia-400 font-mono text-sm tracking-widest font-black uppercase flex items-center gap-2 mb-4">
                     <Terminal size={16}/> Console Output
                  </h4>
                  <pre className="text-white font-mono text-xl font-bold leading-loose">
                     Karthick<br/>Ravi
                  </pre>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA STREAMS SECURED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-teal-500/10 decoration-2">
          "JSON Arrays are the universal language of APIs. Once parsed into JavaScript, you have the full power of array methods to transform, filter, and render that data at will."
        </p>
      </footer>

    </div>
  );
};

export default JsonArrays;