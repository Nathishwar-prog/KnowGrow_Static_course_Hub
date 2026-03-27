import React, { useState } from 'react';
import {
  Database,
  Table,
  Type,
  Hash,
  ToggleLeft,
  Ban,
  Box,
  List,
  Layers,
  AlertTriangle,
  ArrowRightLeft,
  Terminal,
  Check,
  Copy,
  CheckCircle,
  XCircle,
  AlertCircle
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

const JsonDataTypes: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Database size={14} className="fill-current" /> STRICT FORMATTING
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JSON <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 drop-shadow-2xl">
            Data Types
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          JSON is incredibly strict. Understand the <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight">6 allowed data types</span> and what will immediately break your parsers.
        </p>
      </header>

      {/* ── Section 1 & 2: What are they & Overview Table ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>
             <div className="relative z-10">
               <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What are JSON Types?</h3>
               <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                 👉 JSON supports a <b>limited set</b> of data types used explicitly for data exchange.
               </p>
               <div className="bg-orange-50 dark:bg-orange-500/10 p-5 rounded-2xl border border-orange-200 dark:border-orange-500/30">
                  <p className="text-orange-700 dark:text-orange-400 font-bold flex items-center gap-2">
                     <AlertCircle size={20}/> Unlike JavaScript, JSON is strictly typed and heavily simplified!
                  </p>
               </div>
             </div>
           </div>
        </div>

        <div className="lg:col-span-7 bg-[#180f24] p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-5 p-6"><Table size={150} className="text-blue-500"/></div>
            <SectionHeader icon={Table} title="2. List of JSON Types" color="text-blue-400" />
            
            <div className="overflow-x-auto rounded-2xl border border-blue-500/20 shadow-lg relative z-10 bg-black/40 backdrop-blur-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-blue-500/10 border-b border-blue-500/20">
                        <th className="p-4 font-black text-blue-300 text-sm tracking-widest uppercase">Type</th>
                        <th className="p-4 font-black text-white text-sm tracking-widest uppercase">Example</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-300 text-sm">
                     <tr className="border-b border-blue-500/10">
                        <td className="p-4 font-bold text-blue-200">String</td>
                        <td className="p-4 text-emerald-400">"Karthick"</td>
                     </tr>
                     <tr className="border-b border-blue-500/10">
                        <td className="p-4 font-bold text-blue-200">Number</td>
                        <td className="p-4 text-orange-400">22, 3.14</td>
                     </tr>
                     <tr className="border-b border-blue-500/10">
                        <td className="p-4 font-bold text-blue-200">Boolean</td>
                        <td className="p-4 text-purple-400">true, false</td>
                     </tr>
                     <tr className="border-b border-blue-500/10">
                        <td className="p-4 font-bold text-blue-200">Null</td>
                        <td className="p-4 text-red-400">null</td>
                     </tr>
                     <tr className="border-b border-blue-500/10">
                        <td className="p-4 font-bold text-blue-200">Object</td>
                        <td className="p-4 text-yellow-300">{`{ "name": "Karthick" }`}</td>
                     </tr>
                     <tr>
                        <td className="p-4 font-bold text-blue-200">Array</td>
                        <td className="p-4 text-pink-400">[1, 2, 3]</td>
                     </tr>
                  </tbody>
               </table>
            </div>
        </div>
      </section>

      {/* ── Section 3, 4, 5, 6: Primitives Breakdown ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-[2.5rem] border border-emerald-200 dark:border-emerald-500/20 shadow-xl">
            <h3 className="text-2xl font-black text-gray-900 dark:text-emerald-300 flex items-center gap-3 mb-6">
               <Type className="text-emerald-500"/> 3. String
            </h3>
            <p className="text-emerald-800 dark:text-emerald-200 font-bold mb-4">👉 Must ALWAYS be in double quotes (keys and values)</p>
            <div className="grid sm:grid-cols-2 gap-4">
               <div>
                  <h4 className="text-emerald-600 dark:text-emerald-400 font-bold mb-2 flex flex-center gap-1"><CheckCircle size={16}/> Valid</h4>
                  <CodeBlock code={`{\n  "name": "Karthick"\n}`} language="json" />
               </div>
               <div>
                  <h4 className="text-red-500 font-bold mb-2 flex flex-center gap-1"><XCircle size={16}/> Invalid (Single Quote)</h4>
                  <CodeBlock code={`{ name: 'Karthick' }`} language="json" />
               </div>
            </div>
         </div>

         <div className="bg-orange-50 dark:bg-orange-900/10 p-8 rounded-[2.5rem] border border-orange-200 dark:border-orange-500/20 shadow-xl">
            <h3 className="text-2xl font-black text-gray-900 dark:text-orange-300 flex items-center gap-3 mb-6">
               <Hash className="text-orange-500"/> 4. Number
            </h3>
            <p className="text-orange-800 dark:text-orange-200 font-bold mb-4">👉 Supports Integers and Floats</p>
            <div className="grid sm:grid-cols-2 gap-4">
               <div>
                  <h4 className="text-emerald-600 dark:text-emerald-400 font-bold mb-2 flex flex-center gap-1"><CheckCircle size={16}/> Valid</h4>
                  <CodeBlock code={`{\n  "age": 22,\n  "price": 99.99\n}`} language="json" />
               </div>
               <div>
                  <h4 className="text-red-500 font-bold mb-2 flex flex-center gap-1"><XCircle size={16}/> Invalid (No Spec)</h4>
                  <div className="bg-red-500/10 p-4 border border-red-500/20 rounded-xl font-mono text-red-500 font-bold">
                     NaN <br/>
                     Infinity
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-purple-50 dark:bg-purple-900/10 p-8 rounded-[2.5rem] border border-purple-200 dark:border-purple-500/20 shadow-xl">
            <h3 className="text-2xl font-black text-gray-900 dark:text-purple-300 flex items-center gap-3 mb-6">
               <ToggleLeft className="text-purple-500"/> 5. Boolean
            </h3>
            <p className="text-purple-800 dark:text-purple-200 font-bold mb-4">👉 Only exactly `true` or `false` (no quotes)</p>
            <CodeBlock code={`{\n  "isStudent": true\n}`} language="json" />
         </div>

         <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-[2.5rem] border border-rose-200 dark:border-rose-500/20 shadow-xl">
            <h3 className="text-2xl font-black text-gray-900 dark:text-rose-300 flex items-center gap-3 mb-6">
               <Ban className="text-rose-500"/> 6. Null
            </h3>
            <p className="text-rose-800 dark:text-rose-200 font-bold mb-4">👉 Represents an empty or unknown value</p>
            <CodeBlock code={`{\n  "middleName": null\n}`} language="json" />
         </div>
      </section>

      {/* ── Section 7, 8, 9: Complex Types & Combined ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl">
               <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-4">
                  <Box className="text-amber-500"/> 7. Object
               </h3>
               <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">Collection of Key-Value pairs.</p>
               <CodeBlock code={`{\n  "name": "Karthick",\n  "age": 22\n}`} language="json" />
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl">
               <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-4">
                  <List className="text-pink-500"/> 8. Array
               </h3>
               <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">Ordered list of values.</p>
               <CodeBlock code={`{\n  "skills": ["JS", "React", "Node"]\n}`} language="json" />
            </div>
         </div>

         <div className="lg:col-span-7 bg-[#180f24] border border-fuchsia-500/30 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 p-6"><Layers size={200} className="text-fuchsia-500"/></div>
            <SectionHeader icon={Layers} title="9. Combined Example" subtitle="A typical real-world payload" color="text-fuchsia-400" />
            <div className="relative z-10">
               <CodeBlock code={`{\n  "name": "Karthick",\n  "age": 22,\n  "isStudent": true,\n  "skills": ["JS", "React"],\n  "address": {\n    "city": "Chennai"\n  },\n  "graduationYear": null\n}`} language="json" />
            </div>
         </div>
      </section>

      {/* ── Section 10 & 11: VS JS Types & Rules ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-[#180f24] p-10 rounded-[3rem] border border-amber-500/20 shadow-2xl relative overflow-hidden h-full">
            <SectionHeader icon={Table} title="10. JSON vs JavaScript" color="text-amber-400" />
            <div className="overflow-x-auto rounded-2xl border border-amber-500/20 shadow-lg relative z-10 bg-black/40">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-amber-500/10 border-b border-amber-500/20">
                        <th className="p-4 font-black text-amber-300">Feature</th>
                        <th className="p-4 font-black text-white">JSON</th>
                        <th className="p-4 font-black text-white">JavaScript</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-300 font-medium text-sm">
                     <tr className="border-b border-amber-500/10">
                        <td className="p-4 font-bold text-amber-200">Quotes (Keys/Strings)</td>
                        <td className="p-4 text-rose-400 font-bold">Always Required ("")</td>
                        <td className="p-4 text-emerald-400">Optional</td>
                     </tr>
                     <tr className="border-b border-amber-500/10">
                        <td className="p-4 font-bold text-amber-200">Functions</td>
                        <td className="p-4 flex items-center gap-2"><XCircle size={16} className="text-red-500"/> Not allowed</td>
                        <td className="p-4 flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Allowed</td>
                     </tr>
                     <tr className="border-b border-amber-500/10">
                        <td className="p-4 font-bold text-amber-200">Undefined</td>
                        <td className="p-4 flex items-center gap-2"><XCircle size={16} className="text-red-500"/> Not allowed</td>
                        <td className="p-4 flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Allowed</td>
                     </tr>
                     <tr>
                        <td className="p-4 font-bold text-amber-200">Dates</td>
                        <td className="p-4 flex items-center gap-2"><XCircle size={16} className="text-red-500"/> String only</td>
                        <td className="p-4 flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Native Obj</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={AlertTriangle} title="11. Important Rules ⚠️" color="text-red-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               JSON format strictly forbids loose JavaScript types. You cannot leave keys unquoted, and you cannot map `undefined`.
            </p>
            
            <div className="mb-6">
               <h4 className="text-red-600 dark:text-red-400 font-bold flex items-center gap-2 mb-2"><XCircle size={18}/> Invalid JSON Example</h4>
               <CodeBlock code={`{\n  name: "Karthick",   // no quotes on key ❌\n  age: undefined      // undefined not allowed ❌\n}`} language="json" />
            </div>
            
            <div>
               <h4 className="text-green-600 dark:text-green-400 font-bold flex items-center gap-2 mb-2"><CheckCircle size={18}/> Valid JSON Example</h4>
               <CodeBlock code={`{\n  "name": "Karthick",\n  "age": 22\n}`} language="json" />
            </div>
         </div>
      </section>

      {/* ── Section 12 & 13: Parsing and Stringifying ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={ArrowRightLeft} title="12. JSON Parsing" color="text-indigo-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               Converts a JSON <b>string</b> into a usable JavaScript <b>Object</b>.
            </p>
            <CodeBlock code={`const json = '{"name":"Karthick","age":22}';\n\nconst obj = JSON.parse(json);\n\nconsole.log(obj.name); // Karthick`} />
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={ArrowRightLeft} title="13. JSON Stringify" color="text-pink-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               Converts a JavaScript <b>Object</b> backing into a valid JSON <b>String</b> for transmission.
            </p>
            <CodeBlock code={`const obj = { name: "Karthick", age: 22 };\n\nconst json = JSON.stringify(obj);\n\nconsole.log(json);`} />
         </div>
      </section>

      {/* ── Section 14: Visualization Target ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-[#180f24] border border-blue-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Terminal} title="14. Visualization Target" color="text-blue-400" />
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex flex-col h-full">
                 <CodeBlock code={`const data = {\n  name: "Karthick",\n  active: true,\n  score: 95\n};\n\nconsole.log(JSON.stringify(data));`} title="CODE" />
               </div>
               <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col justify-center overflow-x-auto">
                  <h4 className="text-blue-400 font-mono text-sm tracking-widest font-black uppercase flex items-center gap-2 mb-4">
                     <Terminal size={16}/> Console Output
                  </h4>
                  <pre className="text-emerald-400 font-mono text-base font-bold leading-loose">
                     {"{"}"name":"Karthick","active":true,"score":95{"}"}
                  </pre>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA TYPES SECURED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-blue-500/10 decoration-2">
          "JSON forces a rigid, predictable structure onto JavaScript's otherwise loose architecture, making it the perfect universal language for the web."
        </p>
      </footer>

    </div>
  );
};

export default JsonDataTypes;