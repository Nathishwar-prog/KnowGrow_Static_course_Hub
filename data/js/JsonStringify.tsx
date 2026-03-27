import React, { useState } from 'react';
import {
  ArrowRight,
  FileJson,
  Zap,
  Layers,
  Settings,
  Filter,
  ShieldAlert,
  Database,
  Save,
  Link,
  Table,
  Code2,
  CheckCircle,
  XCircle,
  RotateCcw,
  Layout,
  Terminal,
  Search,
  PlusCircle,
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

const JsonStringify: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <FileJson size={14} className="fill-current" /> DATA SERIALIZATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JSON <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 drop-shadow-2xl">
            Stringify()
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The essential method for <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500 underline-offset-4 tracking-tight">flattening objects</span> into transferable text. Prepare your data for the global network.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full justify-center">
               <div className="p-4 bg-amber-50 dark:bg-amber-500/10 rounded-2xl text-amber-500 w-max border border-amber-100 dark:border-amber-500/20 shadow-lg">
                 <ArrowRight size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is JSON.stringify()?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                   👉 `JSON.stringify()` is used to convert a <b>JavaScript object</b> into a <b>JSON string</b>.
                 </p>
                 <div className="flex items-center gap-6 bg-amber-50 dark:bg-amber-500/10 p-6 rounded-2xl border border-amber-200 dark:border-amber-500/30 font-black">
                    <span className="text-gray-400 uppercase text-[10px] tracking-widest">Object</span>
                    <ArrowRight className="text-amber-500" />
                    <span className="text-amber-600 dark:text-amber-400 uppercase text-[10px] tracking-widest">String</span>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-[#1a1200] p-10 rounded-[3rem] border border-amber-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-10 p-6"><Database size={150} className="text-amber-500"/></div>
            <SectionHeader icon={Zap} title="2. Why Do We Need It?" color="text-amber-400" />
            <p className="text-amber-100 text-lg font-medium mb-8 relative z-10">
               Network cables and databases only "speak" in text strings. JavaScript objects are too "wet" for the wire—they must be dried into JSON.
            </p>
            <div className="grid grid-cols-1 gap-3 relative z-10">
               {[
                 { text: "Send data to remote servers", icon: Link },
                 { text: "Store data in Local Storage", icon: Save },
                 { text: "Transfer data between threads", icon: ArrowRight }
               ].map((item, idx) => (
                  <div key={idx} className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex items-center gap-3">
                     <item.icon className="text-amber-400" size={18}/>
                     <span className="text-amber-50 font-bold text-sm tracking-tight">{item.text}</span>
                  </div>
               ))}
               <p className="mt-4 text-xs font-black text-rose-400 uppercase tracking-widest bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
                  ⚠️ JavaScript objects cannot be sent directly over network!
               </p>
            </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Example labs ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-12 text-center mb-8">
            <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 p-2 px-6 rounded-full border border-gray-100 dark:border-gray-700 shadow-xl">
               <span className="p-1 px-3 bg-amber-500 rounded-full text-white text-[10px] font-black uppercase">Operation</span>
               <span className="text-gray-400 font-mono text-xs">Transforming Memory to Text</span>
            </div>
         </div>
         
         <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Terminal} title="3. Basic Example" color="text-amber-500" />
            <CodeBlock code={`const obj = { name: "Karthick", age: 22 };\n\nconst json = JSON.stringify(obj);\n\nconsole.log(json);`} title="serialize.js" />
            <div className="p-6 bg-[#1e1e1e] rounded-2xl border border-gray-700">
               <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-4">Console Output</h4>
               <p className="text-white font-mono text-sm leading-relaxed overflow-x-auto whitespace-nowrap">
                  {"{"}"name":"Karthick","age":22{"}"}
               </p>
            </div>
         </div>

         <div className="lg:col-span-5 bg-[#1a1200] p-10 border border-amber-500/20 rounded-[3rem] shadow-2xl flex flex-col justify-center">
            <SectionHeader icon={Search} title="4. Step-by-Step" color="text-amber-400" />
            <ul className="space-y-6">
               <li className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform"><PlusCircle className="text-gray-400" size={20}/></div>
                  <div>
                     <span className="text-[10px] font-black text-gray-500 uppercase">Input</span>
                     <p className="text-white font-bold tracking-tight">JavaScript Object</p>
                  </div>
               </li>
               <li className="flex justify-center"><ChevronRight className="text-amber-500 rotate-90" size={24}/></li>
               <li className="flex items-center gap-4 group">
                  <div className="p-3 bg-amber-500/20 rounded-2xl border border-amber-500/30 group-hover:scale-110 transition-transform"><CheckCircle className="text-amber-400" size={20}/></div>
                  <div>
                     <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Output</span>
                     <p className="text-white font-bold tracking-tight">JSON String</p>
                  </div>
               </li>
            </ul>
         </div>
      </section>

      {/* ── Section 5 & 6: Data Types ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Layers} title="5. Converting Arrays" color="text-orange-500" />
            <CodeBlock code={`const arr = ["JS", "React", "Node"];\n\nconst json = JSON.stringify(arr);\n\nconsole.log(json); // ["JS","React","Node"]`} title="arrays.js" />
         </div>
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Layout} title="6. Nested Objects" color="text-amber-500" />
            <CodeBlock code={`const user = {\n  name: "Karthick",\n  skills: ["JS", "React"]\n};\n\nconsole.log(JSON.stringify(user));`} title="nested.js" />
         </div>
      </section>

      {/* ── Section 7 & 8: Advanced Formatting ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="p-1 text-center mb-12">
            <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500 tracking-tighter uppercase">Advanced Controllers</span>
         </div>
         <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-[#1e1e1e] p-10 rounded-[3rem] border border-gray-700 shadow-2xl overflow-hidden relative group">
               <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><Layout size={300} className="text-white"/></div>
               <SectionHeader icon={Layout} title="7. Pretty Print" subtitle="Human Readable JSON" color="text-amber-400" />
               <p className="text-gray-400 mb-8 font-medium italic">Use the 3rd argument (space) to indent the output.</p>
               <CodeBlock code={`const json = JSON.stringify(user, null, 2);`} />
               <div className="bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                  <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`{
  "name": "Karthick",
  "skills": [
    "JS",
    "React"
  ]
}`}
                  </pre>
               </div>
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col justify-center">
               <SectionHeader icon={Filter} title="8. Replacer Function" subtitle="Data Filtering" color="text-orange-500" />
               <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium leading-relaxed">
                  Pass a function to filter out sensitive keys like passwords before sending data.
               </p>
               <CodeBlock code={`const json = JSON.stringify(user, (key, value) => {\n  if (key === "password") return undefined;\n  return value;\n});`} title="security_filter.js" />
            </div>
         </div>
      </section>

      {/* ── Section 9: Handling Unsupported ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
         <div className="bg-rose-50 dark:bg-rose-900/10 p-10 rounded-[3rem] border border-rose-100 dark:border-rose-500/20 shadow-xl relative overflow-hidden h-full">
            <div className="absolute -bottom-10 -left-10 opacity-5"><ShieldAlert size={200} className="text-rose-500"/></div>
            <SectionHeader icon={ShieldAlert} title="9. Data Loss Warning" subtitle="⚠️ Unsupported Values" color="text-rose-500" />
            <p className="text-rose-800 dark:text-rose-200 font-bold mb-6">Certain values are stripped during stringification:</p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-600 dark:text-rose-400 flex items-center gap-3">
                  <XCircle size={18}/> <span className="font-black italic">Functions</span>
               </div>
               <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-600 dark:text-rose-400 flex items-center gap-3">
                  <XCircle size={18}/> <span className="font-black italic">Undefined</span>
               </div>
            </div>
         </div>
         <div className="h-full">
            <CodeBlock code={`const obj = {\n  name: "Karthick",\n  func: function () {},\n  v: undefined\n};\n\nconsole.log(JSON.stringify(obj));\n// {"name":"Karthick"}`} title="filtering_behavior.js" />
         </div>
      </section>

      {/* ── Section 10: Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Settings} title="10. Common Use Cases" color="text-orange-500" />
         <div className="grid sm:grid-cols-3 gap-8 text-center sm:text-left">
            {[
               { t: "Local Storage", d: "Saving complex objects to the browser's disk.", c: "localStorage.setItem(...)", icon: Save },
               { t: "Server Dispatch", d: "Sending data via POST requests in fetch() calls.", c: "body: JSON.stringify(obj)", icon: Link },
               { t: "Deep Copy Trick", d: "Creating a completely disconnected data copy.", c: "JSON.parse(JSON.stringify(obj))", icon: Copy }
            ].map((use, i) => (
               <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl hover:-translate-y-2 transition-transform h-full">
                  <div className="p-3 bg-amber-500/10 text-amber-500 w-max rounded-2xl mb-6 mx-auto sm:mx-0"><use.icon size={24}/></div>
                  <h4 className="text-xl font-black text-gray-900 dark:text-white mb-4">{use.t}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6 leading-relaxed">{use.d}</p>
                  <code className="text-xs bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl block font-bold text-amber-600 border border-gray-100 dark:border-gray-700">{use.c}</code>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 11: Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Table} title="11. Stringify vs Parse" color="text-amber-500" />
            <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg mt-4">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <th className="p-5 font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest text-xs">Method</th>
                        <th className="p-5 font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest text-xs">Direction</th>
                        <th className="p-5 font-black text-orange-600 dark:text-orange-400">Target Result</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300 font-medium">
                     <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="p-5 font-bold text-gray-800 dark:text-gray-200 italic font-mono uppercase">stringify</td>
                        <td className="p-5 flex items-center gap-2">Object <ArrowRight size={14}/> JSON</td>
                        <td className="p-5 font-bold text-amber-500 underline decoration-2">Serialized String</td>
                     </tr>
                     <tr className="border-0">
                        <td className="p-5 font-bold text-gray-800 dark:text-gray-200 italic font-mono uppercase">parse</td>
                        <td className="p-5 flex items-center gap-2">JSON <ArrowRight size={14}/> Object</td>
                        <td className="p-5 font-bold text-orange-500 underline decoration-2">Runtime Object</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 12: Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#1a1200] p-12 rounded-[4rem] border border-amber-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 select-none font-black text-[15rem] leading-[0.8] text-amber-500 pointer-events-none">OUT</div>
            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
               <div className="lg:w-1/2">
                  <SectionHeader icon={Terminal} title="12. Result Preview" color="text-amber-400" />
                  <p className="text-amber-100 font-medium text-lg leading-relaxed italic drop-shadow-lg mb-8">
                     Visualizing the data packet preparation before it departures for the server.
                  </p>
                  <CodeBlock code={`const data = { language: "JavaScript" };\n\nconsole.log(JSON.stringify(data));`} />
               </div>
               <div className="lg:w-1/2 w-full p-10 bg-black/50 rounded-3xl border border-amber-500/20 backdrop-blur-xl">
                  <h4 className="text-amber-400 font-mono text-xs tracking-widest font-black uppercase mb-6 flex justify-between items-center group">
                     <span>Output Payload</span>
                     <RotateCcw size={14} className="opacity-50 animate-spin-slow"/>
                  </h4>
                  <pre className="text-amber-400 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre selection:bg-amber-500/30">
                     {"{"}"language":"JavaScript"{"}"}
                  </pre>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-xl shadow-amber-500/50"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA FLATTENED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-amber-500/10 decoration-2">
          "JSON.stringify() is the bridge that turns complex runtime structures into universal payloads. Without it, the client and server would speak in incompatible dialects. With it, the internet shares one common frequency."
        </p>
      </footer>

    </div>
  );
};

export default JsonStringify;