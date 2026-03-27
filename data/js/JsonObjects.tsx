import React, { useState } from 'react';
import {
  Blocks,
  Key,
  Box,
  Table,
  Zap,
  Files,
  ListTree,
  Terminal,
  ArrowRightLeft,
  Search,
  Database,
  Network,
  Code2,
  CheckCircle,
  XCircle,
  RotateCcw,
  Layout,
  Layers,
  Link,
  Copy,
  Check,
  ChevronRight
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-purple-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsonObjects: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 text-[10px] font-black mb-8 border border-purple-100 dark:border-purple-900/50 shadow-xl shadow-purple-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Blocks size={14} className="fill-current" /> KEY-VALUE COLLECTIONS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JSON <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 drop-shadow-2xl">
            Objects
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The core building blocks of data transport. Master the <span className="text-gray-900 dark:text-white font-bold underline decoration-purple-500 underline-offset-4 tracking-tight">structure and nesting</span> of modern information.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Structure ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full justify-center">
               <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-2xl text-purple-500 w-max border border-purple-100 dark:border-purple-500/20 shadow-lg">
                 <Box size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is a JSON Object?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                   👉 A JSON Object is a collection of <b>key-value pairs</b> enclosed in <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded text-purple-600 dark:text-purple-400">{"{ }"}</code>.
                 </p>
                 <CodeBlock code={`{\n  "name": "Karthick",\n  "age": 22\n}`} language="json" title="basic.json" />
                 <div className="bg-purple-50 dark:bg-purple-500/10 p-4 rounded-xl border border-purple-100 dark:border-purple-500/20">
                    <p className="text-purple-700 dark:text-purple-400 font-bold flex items-center gap-2">
                       📌 Keys must always be strings (wrapped in double quotes).
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-[#180f24] p-10 rounded-[3rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-10 p-6"><Layers size={150} className="text-indigo-500"/></div>
            <SectionHeader icon={Key} title="2. JSON Object Structure" color="text-indigo-400" />
            
            <p className="text-indigo-100 text-lg font-medium mb-8 relative z-10 leading-relaxed">
               Every object follows a strict 1:1 mapping between a unique key and its associated value.
            </p>
            
            <div className="space-y-4 relative z-10 font-mono text-sm">
               <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-2xl flex items-center justify-between">
                  <span className="text-pink-400 font-bold">"key" :</span>
                  <span className="text-cyan-400 font-bold">"value"</span>
               </div>
               <div className="p-4 flex items-center justify-center">
                  <ChevronRight size={24} className="text-indigo-500 rotate-90"/>
               </div>
               <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
                  <CodeBlock code={`{\n  "city": "Chennai",\n  "pincode": 600001\n}`} language="json" title="example.json" />
               </div>
            </div>
        </div>
      </section>

      {/* ── Section 3: Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Table} title="3. JSON Object vs JS Object" color="text-indigo-500" />
            <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg mt-4">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <th className="p-5 font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest text-xs">Feature</th>
                        <th className="p-5 font-black text-purple-600 dark:text-purple-400">JSON Object</th>
                        <th className="p-5 font-black text-indigo-600 dark:text-indigo-400">JS Object</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300 font-medium">
                     <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="p-5 font-bold text-gray-800 dark:text-gray-200">Format</td>
                        <td className="p-5">Static Text</td>
                        <td className="p-5 text-indigo-500 font-bold">Memory Object</td>
                     </tr>
                     <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="p-5 font-bold text-gray-800 dark:text-gray-200">Quotes</td>
                        <td className="p-5 font-bold text-rose-500">Required ("")</td>
                        <td className="p-5 text-indigo-400">Optional</td>
                     </tr>
                     <tr>
                        <td className="p-5 font-bold text-gray-800 dark:text-gray-200">Functions</td>
                        <td className="p-5 flex items-center gap-2 text-rose-500 font-black"><XCircle size={16}/> Not allowed</td>
                        <td className="p-5 flex items-center gap-2 text-emerald-500 font-black"><CheckCircle size={16}/> Allowed</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 4: Complex JSON ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#180f24] p-10 rounded-[4rem] border border-purple-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><ListTree size={300} className="text-white"/></div>
            <SectionHeader icon={ListTree} title="4. Complex JSON Object" color="text-purple-400" />
            <p className="text-purple-100 font-medium mb-10 text-lg relative z-10">
               JSON objects can contain arrays, nested objects, booleans, and more.
            </p>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
               <CodeBlock code={`{\n  "name": "Karthick",\n  "age": 22,\n  "isStudent": true,\n  "skills": ["JS", "React"],\n  "address": {\n    "city": "Chennai",\n    "zip": 600001\n  }\n}`} language="json" title="user_profile.json" />
               <div className="space-y-4">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-6 group hover:bg-white/10 transition-colors">
                     <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform"><Database size={24}/></div>
                     <div>
                        <h4 className="text-white font-bold">Data Storage</h4>
                        <p className="text-purple-200 text-sm">Perfect for storing structured profiles.</p>
                     </div>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-6 group hover:bg-white/10 transition-colors">
                     <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform"><Network size={24}/></div>
                     <div>
                        <h4 className="text-white font-bold">Interconnectivity</h4>
                        <p className="text-indigo-200 text-sm">Links entities via nesting.</p>
                     </div>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-6 group hover:bg-white/10 transition-colors">
                     <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400 group-hover:scale-110 transition-transform"><Layers size={24}/></div>
                     <div>
                        <h4 className="text-white font-bold">Multi-Type</h4>
                        <p className="text-pink-200 text-sm">Combines strings, numbers, and arrays.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5 & 6: Conversions ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={ArrowRightLeft} title="5. JSON to JS Object" color="text-purple-500" />
            <div className="relative">
               <CodeBlock code={`const json = '{"name":"Karthick","age":22}';\n\nconst obj = JSON.parse(json);\n\nconsole.log(obj.name); // Karthick`} />
               <div className="absolute -bottom-2 right-4 flex items-center gap-1 text-[10px] font-black text-purple-500 uppercase tracking-widest bg-purple-50 dark:bg-purple-900/40 px-3 py-1 rounded-full border border-purple-100 dark:border-purple-500/20">
                  <RotateCcw size={10}/> Reverse Engineering
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={ArrowRightLeft} title="6. JS to JSON Object" color="text-indigo-500" />
            <div className="relative">
               <CodeBlock code={`const obj = { name: "Karthick", age: 22 };\n\nconst json = JSON.stringify(obj);\n\nconsole.log(json); // '{"name":"Karthick","age":22}'`} />
               <div className="absolute -bottom-2 right-4 flex items-center gap-1 text-[10px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-900/40 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-500/20">
                  <Zap size={10}/> Serializing Data
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7 & 8: Access & Looping ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-12">
            <div className="p-1 text-center mb-8">
               <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">Manipulation Tools</span>
            </div>
         </div>
         
         <div className="lg:col-span-7 bg-[#180f24] p-10 border border-indigo-500/30 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Search} title="7. Accessing Data" color="text-indigo-400" />
            <CodeBlock code={`const obj = {\n  name: "Karthick",\n  address: {\n    city: "Chennai"\n  }\n};\n\nconsole.log(obj.name);         // Karthick\nconsole.log(obj.address.city); // Chennai`} title="data_access.js" />
         </div>

         <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={RotateCcw} title="8. Looping Objects" color="text-pink-500" />
            <p className="text-gray-500 dark:text-gray-400 font-medium mb-6">Use the `for...in` loop to iterate over all keys.</p>
            <CodeBlock code={`for (let key in obj) {\n  console.log(key, obj[key]);\n}`} title="iteration.js" />
         </div>
      </section>

      {/* ── Section 9: Nested Objects ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl relative overflow-hidden group">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors duration-1000"></div>
            <SectionHeader icon={Layers} title="9. Nested JSON Objects" color="text-purple-500" />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                     Deep nesting is common in complex datasets where one object lives inside another property.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-500/10 p-6 rounded-2xl border-l-4 border-purple-500">
                     <h4 className="font-black text-purple-700 dark:text-purple-400 mb-2">Access Pattern:</h4>
                     <code className="text-sm font-mono text-gray-800 dark:text-gray-200">data.user.profile.name</code>
                  </div>
               </div>
               <CodeBlock code={`{\n  "user": {\n    "profile": {\n      "name": "Karthick"\n    }\n  }\n}`} language="json" title="nested_data.json" />
            </div>
         </div>
      </section>

      {/* ── Section 10: Real API Example ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#180f24] p-12 rounded-[4rem] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-[-2rem] left-[-2rem] opacity-5"><Terminal size={300} className="text-cyan-500"/></div>
            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
               <div className="lg:w-1/2">
                  <SectionHeader icon={Terminal} title="10. Real API Response" color="text-cyan-400" />
                  <p className="text-cyan-100 font-medium text-lg leading-relaxed mb-8">
                     This is how a typical Product API delivers data to your frontend. Every field is meticulously typed and structured.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                     <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                        <span className="text-cyan-400 font-bold block">ID</span>
                        <span className="text-white font-mono">1</span>
                     </div>
                     <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                        <span className="text-cyan-400 font-bold block">Title</span>
                        <span className="text-white font-mono">"Product"</span>
                     </div>
                     <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                        <span className="text-cyan-400 font-bold block">Price</span>
                        <span className="text-white font-mono">$1000</span>
                     </div>
                     <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                        <span className="text-cyan-400 font-bold block">Brand</span>
                        <span className="text-white font-mono">"Dell"</span>
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 w-full">
                  <CodeBlock code={`{\n  "id": 1,\n  "title": "Product",\n  "price": 1000,\n  "details": {\n    "brand": "Dell",\n    "warranty": "1 year"\n  }\n}`} language="json" title="GET /api/products/1" />
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA STRUCTURED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-purple-500/10 decoration-2">
          "JSON Objects are the anatomy of the internet. Once you can parse, modify, and loop through them, you have the power to control any data stream in the world."
        </p>
      </footer>

    </div>
  );
};

export default JsonObjects;