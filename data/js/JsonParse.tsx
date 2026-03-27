import React, { useState } from 'react';
import {
  RotateCcw,
  FileText,
  Zap,
  ListTree,
  Terminal,
  ShieldAlert,
  Wrench,
  Search,
  AlertTriangle,
  Code2,
  CheckCircle,
  XCircle,
  Layers,
  Link,
  Table,
  Cpu,
  ArrowRight,
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsonParse: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <RotateCcw size={14} className="fill-current" /> DATA RE-HYDRATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JSON <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-500 drop-shadow-2xl">
            Parse()
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The magic wand that turns <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500 underline-offset-4 tracking-tight">raw strings</span> back into usable JavaScript objects. Unlock the power of data processing.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full justify-center">
               <div className="p-4 bg-sky-50 dark:bg-sky-500/10 rounded-2xl text-sky-500 w-max border border-sky-100 dark:border-sky-500/20 shadow-lg">
                 <RotateCcw size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is JSON.parse()?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                   👉 `JSON.parse()` is used to convert a <b>JSON string</b> into a <b>JavaScript object</b>.
                 </p>
                 <div className="flex items-center gap-6 bg-sky-50 dark:bg-sky-500/10 p-6 rounded-2xl border border-sky-200 dark:border-sky-500/30 font-black">
                    <span className="text-gray-400 uppercase text-[10px] tracking-widest">String</span>
                    <ArrowRight className="text-sky-500" />
                    <span className="text-sky-600 dark:text-sky-400 uppercase text-[10px] tracking-widest">Object</span>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-[#180f24] p-10 rounded-[3rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-10 p-6"><Cpu size={150} className="text-indigo-500"/></div>
            <SectionHeader icon={Zap} title="2. Why Do We Need It?" color="text-indigo-400" />
            
            <p className="text-indigo-100 text-lg font-medium mb-8 relative z-10 leading-relaxed">
               Most APIs send data as <b>pure text (strings)</b>. JavaScript cannot directly interact with a string as an object—it needs a translator.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative z-10">
               <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                     <span className="mt-1 p-1 bg-red-500/20 text-red-400 rounded-md"><XCircle size={14}/></span>
                     <p className="text-red-200 font-bold">JavaScript cannot read '{"{...}"}' as an object directly.</p>
                  </li>
                  <li className="flex items-start gap-4">
                     <span className="mt-1 p-1 bg-emerald-500/20 text-emerald-400 rounded-md"><CheckCircle size={14}/></span>
                     <p className="text-emerald-200 font-bold">`JSON.parse()` builds the object structure in memory instantly.</p>
                  </li>
               </ul>
            </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Example & Explanation ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-12 mb-8">
            <div className="p-1 px-8 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl w-max mx-auto flex items-center gap-4">
               <span className="text-sm font-black text-sky-500">LAB</span>
               <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-700"></div>
               <span className="text-sm font-bold text-gray-500">Live Transformation</span>
            </div>
         </div>
         
         <div className="lg:col-span-7">
            <SectionHeader icon={Terminal} title="3. Basic Example" color="text-sky-500" />
            <CodeBlock code={`const json = '{"name":"Karthick","age":22}';\n\nconst obj = JSON.parse(json);\n\nconsole.log(obj.name);`} title="transform.js" />
            <div className="mt-4 bg-[#1e1e1e] rounded-2xl p-6 border border-gray-700 shadow-lg relative">
               <h4 className="text-emerald-400 font-mono text-xs tracking-widest font-black uppercase flex items-center gap-2 mb-4">
                  <Terminal size={14}/> Console Output
               </h4>
               <p className="text-white font-mono text-xl">"Karthick"</p>
            </div>
         </div>

         <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Search} title="4. Step-by-Step" color="text-indigo-500" />
            <div className="space-y-6">
               <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block underline">STEP 1: RAW STRING</span>
                  <p className="font-mono text-rose-500 font-bold">'{"{...}"}'</p>
               </div>
               <div className="flex justify-center"><ArrowRight size={20} className="text-gray-300 dark:text-gray-600 rotate-90"/></div>
               <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-500/20 bg-sky-50 dark:bg-sky-500/10">
                  <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-1 block underline">STEP 2: JS OBJECT</span>
                  <p className="font-mono text-sky-600 dark:text-sky-400 font-bold">{`typeof obj === "object"`}</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5 & 6: Array & Nested ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-[#180f24] p-10 rounded-[3rem] border border-cyan-500/20 shadow-2xl">
            <SectionHeader icon={Layers} title="5. Parsing arrays" color="text-cyan-400" />
            <p className="text-cyan-100 font-medium mb-6">If the JSON string represents an array, `JSON.parse()` returns a real JS Array.</p>
            <CodeBlock code={`const json = '[{"name":"Karthick"},{"name":"Ravi"}]';\n\nconst users = JSON.parse(json);\n\nconsole.log(users[1].name); // Ravi`} title="array_parse.js" />
         </div>

         <div className="bg-[#180f24] p-10 rounded-[3rem] border border-indigo-500/20 shadow-2xl">
            <SectionHeader icon={ListTree} title="6. Nested Data" color="text-indigo-400" />
            <p className="text-indigo-100 font-medium mb-6">Deeply nested JSON strings are fully reconstructed recursively.</p>
            <CodeBlock code={`const json = '{"user":{"name":"Karthick","skills":["JS","React"]}}';\n\nconst data = JSON.parse(json);\n\nconsole.log(data.user.skills[0]); // JS`} title="nested_parse.js" />
         </div>
      </section>

      {/* ── Section 7: Error Handling (CRITICAL) ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-500/30 rounded-[3rem] p-10 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5"><ShieldAlert size={200} className="text-rose-500"/></div>
            <SectionHeader icon={ShieldAlert} title="7. Error Handling" subtitle="CRITICAL SECURITY CHECK" color="text-rose-500" />
            
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
               <div>
                  <div className="flex items-center gap-3 p-4 bg-rose-500/10 rounded-2xl mb-8 border border-rose-500/20">
                     <AlertTriangle className="text-rose-500" size={24}/>
                     <p className="text-rose-800 dark:text-rose-200 font-bold">Invalid JSON will crash your entire application!</p>
                  </div>
                  <h4 className="font-black text-rose-600 dark:text-rose-400 mb-4 uppercase tracking-tighter text-sm flex items-center gap-2">
                     <XCircle size={16}/> The Dangerous Way
                  </h4>
                  <CodeBlock code={`const badJson = "{name:'Karthick'}"; // ❌ invalid\nJSON.parse(badJson); // 💥 Error! App stops.`} />
               </div>
               <div>
                  <h4 className="font-black text-emerald-600 dark:text-emerald-400 mb-4 uppercase tracking-tighter text-sm flex items-center gap-2">
                     <CheckCircle size={16}/> The Safe Path (try/catch)
                  </h4>
                  <CodeBlock code={`try {\n  const data = JSON.parse(badJson);\n} catch (error) {\n  console.error("Invalid JSON:", error.message);\n}`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Reviver ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Wrench} title="8. Reviver Function" subtitle="Advanced Data Transformation" color="text-indigo-500" />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                     The **Reviver** function allows you to transform every key-value pair <i>during</i> the parsing process. 
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                     Useful for instant type conversion (e.g., converting strings back to Numbers or Dates).
                  </p>
               </div>
               <CodeBlock code={`const json = '{"age": "22"}';\n\nconst obj = JSON.parse(json, (key, value) => {\n  if (key === "age") return Number(value);\n  return value;\n});\n\nconsole.log(typeof obj.age); // number`} title="advanced_reviver.js" />
            </div>
         </div>
      </section>

      {/* ── Section 9: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#180f24] p-10 rounded-[3rem] border border-rose-500/20 shadow-2xl">
            <SectionHeader icon={AlertTriangle} title="9. Common Mistakes ⚠️" color="text-rose-400" />
            <div className="grid sm:grid-cols-3 gap-6">
               <div className="bg-white/5 border border-white/10 p-6 rounded-2xl group hover:border-rose-500/30 transition-colors">
                  <h4 className="text-rose-400 font-black mb-4 flex items-center gap-2"><XCircle size={16}/> Missing Quotes</h4>
                  <code className="text-xs text-rose-200 opacity-70">JSON.parse('{`{name:"K..."}`}')</code>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-2xl group hover:border-rose-500/30 transition-colors">
                  <h4 className="text-rose-400 font-black mb-4 flex items-center gap-2"><XCircle size={16}/> Single Quotes</h4>
                  <code className="text-xs text-rose-200 opacity-70">JSON.parse("{`{'name':'K...'}`}")</code>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-2xl group hover:border-rose-500/30 transition-colors">
                  <h4 className="text-rose-400 font-black mb-4 flex items-center gap-2"><XCircle size={16}/> Trailing Comma</h4>
                  <code className="text-xs text-rose-200 opacity-70">JSON.parse('{`{"name":"K...",}`}')</code>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 10: Real API ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-12 border border-sky-100 dark:border-sky-500/30 rounded-[4rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5"><Link size={150} className="text-sky-500"/></div>
            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
               <div className="lg:w-1/2">
                  <SectionHeader icon={Link} title="10. Real API Fetch" color="text-sky-500" />
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-lg leading-relaxed mb-6">
                     When using the `fetch` API, the `.json()` method is actually doing exactly what `JSON.parse()` does internally!
                  </p>
                  <ul className="space-y-4 font-bold text-gray-700 dark:text-gray-200">
                     <li className="flex items-center gap-3"><span className="p-1 px-2 rounded-lg bg-sky-500/10 text-sky-500 text-xs">1</span> Request data from server</li>
                     <li className="flex items-center gap-3"><span className="p-1 px-2 rounded-lg bg-sky-500/10 text-sky-500 text-xs">2</span> Receive raw text stream</li>
                     <li className="flex items-center gap-3"><span className="p-1 px-2 rounded-lg bg-sky-500/10 text-sky-500 text-xs">3</span> Auto-parse into JS object</li>
                  </ul>
               </div>
               <div className="lg:w-1/2 w-full">
                  <CodeBlock code={`fetch("https://api.example.com/user")\n  .then(res => res.json())\n  .then(data => console.log(data));`} title="MODERN_ASYNC.js" />
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA HYDRATED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-sky-500/10 decoration-2">
          "Parsing is the process of bringing static data to life. Without JSON.parse(), the internet would just be billions of strings floating in space. With it, we have the building blocks of modern applications."
        </p>
      </footer>

    </div>
  );
};

export default JsonParse;