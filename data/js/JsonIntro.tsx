import React, { useState } from 'react';
import {
  FileJson,
  Eye,
  PenTool,
  Bot,
  Globe,
  Smartphone,
  Database,
  Settings,
  Code,
  Table,
  CheckCircle,
  XCircle,
  LayoutTemplate,
  Terminal,
  Server,
  Network,
  AlertTriangle,
  ArrowRightLeft,
  Copy,
  Check
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-cyan-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsonIntro: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 text-[10px] font-black mb-8 border border-cyan-100 dark:border-cyan-900/50 shadow-xl shadow-cyan-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <FileJson size={14} className="fill-current" /> DATA INTERCHANGE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Introduction to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-2xl">
            JSON
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The undisputed <span className="text-gray-900 dark:text-white font-bold underline decoration-cyan-500 underline-offset-4 tracking-tight">king of data exchange</span>. Learn how modern web APIs, mobile apps, and databases share information instantly.
        </p>
      </header>

      {/* ── Section 1 & 2: What is JSON & Why Important ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full justify-center">
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is JSON?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 JSON (<strong className="text-cyan-600 dark:text-cyan-400">J</strong>ava<strong className="text-cyan-600 dark:text-cyan-400">S</strong>cript <strong className="text-cyan-600 dark:text-cyan-400">O</strong>bject <strong className="text-cyan-600 dark:text-cyan-400">N</strong>otation) is a lightweight format used to store and transport data.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 font-bold bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                       <Eye size={20} className="text-cyan-500"/> Easy to read
                    </li>
                    <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 font-bold bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                       <PenTool size={20} className="text-blue-500"/> Easy to write
                    </li>
                    <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 font-bold bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                       <Bot size={20} className="text-indigo-500"/> Easy for machines to parse
                    </li>
                 </ul>
               </div>
             </div>
           </div>
        </div>

        <div className="lg:col-span-7 bg-[#180f24] p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-10 p-6"><Network size={150} className="text-blue-500"/></div>
            <SectionHeader icon={Globe} title="2. Why JSON is Important?" color="text-blue-400" />
            
            <p className="text-blue-100 text-lg font-medium mb-8 relative z-10">JSON is used absolutely everywhere. Almost every time you call an API to fetch data, you receive JSON.</p>
            
            <div className="grid sm:grid-cols-2 gap-4 relative z-10">
               <div className="bg-blue-500/10 border border-blue-500/20 p-5 rounded-2xl flex items-center gap-4">
                  <Server size={28} className="text-blue-400"/>
                  <span className="text-blue-100 font-bold">Web APIs (Front ↔ Back)</span>
               </div>
               <div className="bg-blue-500/10 border border-blue-500/20 p-5 rounded-2xl flex items-center gap-4">
                  <Smartphone size={28} className="text-blue-400"/>
                  <span className="text-blue-100 font-bold">Mobile Apps</span>
               </div>
               <div className="bg-blue-500/10 border border-blue-500/20 p-5 rounded-2xl flex items-center gap-4">
                  <Database size={28} className="text-blue-400"/>
                  <span className="text-blue-100 font-bold">NoSQL Databases (MongoDB)</span>
               </div>
               <div className="bg-blue-500/10 border border-blue-500/20 p-5 rounded-2xl flex items-center gap-4">
                  <Settings size={28} className="text-blue-400"/>
                  <span className="text-blue-100 font-bold">Configuration Files (.json)</span>
               </div>
            </div>
        </div>
      </section>

      {/* ── Section 3, 4: Syntax & VS Table ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-5 bg-gradient-to-br from-teal-900/20 to-[#180f24] border border-teal-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Code} title="3. Basic Syntax" color="text-teal-400" />
            <CodeBlock code={`{\n  "name": "Karthick",\n  "age": 22,\n  "isStudent": true\n}`} language="json" title="user.json" />
            <ul className="text-teal-100 space-y-3 font-medium text-sm mt-6 bg-black/30 p-5 rounded-2xl border border-teal-500/20">
               <li className="flex items-start gap-2"><div className="mt-1"><CheckCircle size={14} className="text-teal-400"/></div> Keys MUST be in double quotes.</li>
               <li className="flex items-start gap-2"><div className="mt-1"><CheckCircle size={14} className="text-teal-400"/></div> Always written as Key-Value pairs.</li>
               <li className="flex items-start gap-2"><div className="mt-1"><CheckCircle size={14} className="text-teal-400"/></div> Values must be valid strict JSON types.</li>
            </ul>
         </div>

         <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Table} title="4. JSON vs JS Object" color="text-emerald-500" />
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg mt-4">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <th className="p-4 font-black text-gray-700 dark:text-gray-300">Feature</th>
                        <th className="p-4 font-black text-emerald-600 dark:text-emerald-400">JSON</th>
                        <th className="p-4 font-black text-blue-600 dark:text-blue-400">JS Object</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300 font-medium">
                     <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="p-4 font-bold text-gray-800 dark:text-gray-200">Format</td>
                        <td className="p-4">Text (pure string)</td>
                        <td className="p-4">Runtime Object</td>
                     </tr>
                     <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="p-4 font-bold text-gray-800 dark:text-gray-200">Quotes</td>
                        <td className="p-4 font-bold text-rose-500">Required ("")</td>
                        <td className="p-4 font-bold text-emerald-500">Optional</td>
                     </tr>
                     <tr>
                        <td className="p-4 font-bold text-gray-800 dark:text-gray-200">Functions</td>
                        <td className="p-4 flex items-center gap-2 text-rose-500"><XCircle size={16}/> Not allowed</td>
                        <td className="p-4 flex items-center gap-2 text-emerald-500"><CheckCircle size={16}/> Allowed</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 5 & 6: Types & Real World Example ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={LayoutTemplate} title="5. Data Types" color="text-indigo-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               JSON is extremely strict and only supports exactly 6 data types.
            </p>
            <div className="grid grid-cols-2 gap-4 font-mono text-sm">
               <div className="bg-indigo-50 dark:bg-indigo-500/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">String</span>
                  <span className="text-gray-800 dark:text-gray-200">"Hello"</span>
               </div>
               <div className="bg-indigo-50 dark:bg-indigo-500/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">Number</span>
                  <span className="text-gray-800 dark:text-gray-200">123, 3.14</span>
               </div>
               <div className="bg-indigo-50 dark:bg-indigo-500/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">Boolean</span>
                  <span className="text-gray-800 dark:text-gray-200">true, false</span>
               </div>
               <div className="bg-indigo-50 dark:bg-indigo-500/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">Null</span>
                  <span className="text-gray-800 dark:text-gray-200">null</span>
               </div>
               <div className="bg-indigo-50 dark:bg-indigo-500/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">Object</span>
                  <span className="text-gray-800 dark:text-gray-200">{`{ ... }`}</span>
               </div>
               <div className="bg-indigo-50 dark:bg-indigo-500/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">Array</span>
                  <span className="text-gray-800 dark:text-gray-200">[ ... ]</span>
               </div>
            </div>
         </div>

         <div className="bg-gradient-to-br from-[#180f24] to-cyan-900/20 p-10 border border-cyan-500/30 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 p-4"><Terminal size={200} className="text-cyan-500"/></div>
            <SectionHeader icon={Terminal} title="6. Real-World API Example" color="text-cyan-400" />
            <div className="relative z-10">
               <CodeBlock code={`{\n  "user": {\n    "name": "Karthick",\n    "email": "karthick@email.com"\n  },\n  "products": [\n    { "id": 1, "name": "Laptop" },\n    { "id": 2, "name": "Mobile" }\n  ]\n}`} language="json" title="GET /api/dashboard" />
            </div>
         </div>
      </section>

      {/* ── Section 7 & 8: Javascript Bindings & XML Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={ArrowRightLeft} title="7. JSON in JavaScript" color="text-purple-500" />
            
            <div className="mb-8">
               <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">✔️ Convert JSON String &rarr; JS Object</h4>
               <CodeBlock code={`const json = '{"name":"Karthick","age":22}';\n\nconst obj = JSON.parse(json);\nconsole.log(obj.name);`} />
            </div>
            
            <div>
               <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">✔️ Convert JS Object &rarr; JSON String</h4>
               <CodeBlock code={`const obj = { name: "Karthick", age: 22 };\n\nconst json = JSON.stringify(obj);\nconsole.log(json);`} />
            </div>
         </div>

         <div className="lg:col-span-5 bg-[#180f24] p-10 rounded-[3rem] border border-orange-500/20 shadow-2xl flex flex-col justify-center">
            <SectionHeader icon={Table} title="8. JSON vs XML" color="text-orange-400" />
            <div className="overflow-x-auto rounded-2xl border border-orange-500/20 shadow-lg mb-6 bg-black/40">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-orange-500/10 border-b border-orange-500/20">
                        <th className="p-4 font-black text-orange-300">Feature</th>
                        <th className="p-4 font-black text-white bg-orange-500/10">JSON</th>
                        <th className="p-4 font-black text-white line-through opacity-50">XML</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-300 text-sm font-medium">
                     <tr className="border-b border-orange-500/10">
                        <td className="p-4 font-bold text-orange-200">Size</td>
                        <td className="p-4 text-emerald-400 bg-orange-500/5">Small</td>
                        <td className="p-4 text-rose-400 opacity-70">Large</td>
                     </tr>
                     <tr className="border-b border-orange-500/10">
                        <td className="p-4 font-bold text-orange-200">Readability</td>
                        <td className="p-4 text-emerald-400 bg-orange-500/5">Easy</td>
                        <td className="p-4 text-rose-400 opacity-70">Complex</td>
                     </tr>
                     <tr>
                        <td className="p-4 font-bold text-orange-200">Speed</td>
                        <td className="p-4 text-emerald-400 bg-orange-500/5">Fast</td>
                        <td className="p-4 text-rose-400 opacity-70">Slower</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <p className="text-orange-200 font-bold text-center bg-orange-500/20 p-4 rounded-xl border border-orange-500/30">
               👉 JSON has entirely replaced XML in modern API development.
            </p>
         </div>
      </section>

      {/* ── Section 9, 10, 11: Mistakes, Usage, Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-8">
         <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-rose-50 dark:bg-rose-900/10 p-10 border border-rose-200 dark:border-rose-500/30 rounded-[3rem] shadow-xl">
               <SectionHeader icon={AlertTriangle} title="9. Common Mistakes ⚠️" color="text-rose-500" />
               <div className="space-y-6">
                  <div>
                     <h4 className="text-rose-600 dark:text-rose-400 font-bold mb-2 flex items-center gap-2"><XCircle size={18}/> Invalid (No Quotes & Undefined)</h4>
                     <CodeBlock code={`{\n  name: "Karthick",\n  age: undefined\n}`} language="json" />
                  </div>
                  <div>
                     <h4 className="text-emerald-600 dark:text-emerald-400 font-bold mb-2 flex items-center gap-2"><CheckCircle size={18}/> Correct</h4>
                     <CodeBlock code={`{\n  "name": "Karthick",\n  "age": 22\n}`} language="json" />
                  </div>
               </div>
            </div>

            <div className="space-y-8">
               <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 opacity-5"><Globe size={150} className="text-cyan-500"/></div>
                  <SectionHeader icon={Globe} title="10. Where to use JSON?" color="text-blue-500" />
                  <ul className="text-gray-700 dark:text-gray-300 font-bold space-y-4 text-lg relative z-10">
                     <li className="flex items-center gap-3"><span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-500"><Check size={18}/></span> Fetch API (HTTP Requests)</li>
                     <li className="flex items-center gap-3"><span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-500"><Check size={18}/></span> Legacy AJAX requests</li>
                     <li className="flex items-center gap-3"><span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-500"><Check size={18}/></span> Local Storage data</li>
                     <li className="flex items-center gap-3"><span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-500"><Check size={18}/></span> Backend to Frontend bridges</li>
                  </ul>
               </div>

               <div className="bg-[#180f24] p-10 border border-fuchsia-500/30 rounded-[3rem] shadow-2xl">
                  <SectionHeader icon={Terminal} title="11. Visualization Target" color="text-fuchsia-400" />
                  <CodeBlock code={`const data = {\n  name: "Karthick",\n  skills: ["JS", "React"]\n};\n\nconsole.log(JSON.stringify(data));`} title="CODE" />
                  <div className="mt-4 bg-[#1e1e1e] rounded-2xl p-6 border border-gray-700 shadow-lg relative">
                     <h4 className="text-fuchsia-400 font-mono text-sm tracking-widest font-black uppercase flex items-center gap-2 mb-4">
                        <Terminal size={16}/> Console Output
                     </h4>
                     <pre className="text-emerald-400 font-mono text-base font-bold overflow-x-auto">
                        {"{"}"name":"Karthick","skills":["JS","React"]{"}"}
                     </pre>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          FORMAT ESTABLISHED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-cyan-500/10 decoration-2">
          "JSON is the absolute backbone of modern software. If you understand how to write and parse JSON, you can integrate with millions of services instantly."
        </p>
      </footer>

    </div>
  );
};

export default JsonIntro;