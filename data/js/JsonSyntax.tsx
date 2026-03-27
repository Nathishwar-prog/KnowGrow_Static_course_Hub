import React, { useState } from 'react';
import {
  ListChecks,
  Hash,
  Quote,
  Type,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Code2,
  Braces,
  ArrowRight,
  Layers,
  Table,
  Terminal,
  Search,
  Settings,
  ShieldCheck,
  Zap,
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

const JsonSyntax: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden text-gray-700 dark:text-gray-300">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-slate-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <ListChecks size={14} className="fill-current" /> DATA INTEGRITY RULES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JSON <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-slate-500 drop-shadow-2xl">
            Syntax
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The strict constitutional laws of JSON. Master the rules of <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight">data exchange</span> to prevent parsing failures and application crashes.
        </p>
      </header>

      {/* ── Section 1 & 2: Introduction ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full justify-center">
               <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-500 w-max border border-blue-100 dark:border-blue-500/20 shadow-lg">
                 <ShieldCheck size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">1. What is JSON Syntax?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                   👉 JSON Syntax defines the rules for writing <b>valid JSON data</b>. 
                 </p>
                 <div className="p-5 bg-rose-50 dark:bg-rose-500/10 border-l-4 border-rose-500 rounded-xl flex items-center gap-4 text-rose-700 dark:text-rose-400 font-bold">
                    <XCircle size={20}/>
                    <span>If syntax is wrong → ❌ Parse Error</span>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-[#0a0f18] p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-10 p-6"><Terminal size={150} className="text-blue-500"/></div>
            <SectionHeader icon={Braces} title="2. Basic Structure" color="text-blue-400" />
            <p className="text-blue-100 text-lg font-medium mb-8 relative z-10 italic">
               A standard JSON data snippet is always wrapped in an object or an array.
            </p>
            <CodeBlock code={`{\n  "name": "Karthick",\n  "age": 22,\n  "isStudent": true\n}`} title="example.json" />
            <div className="mt-4 flex items-center gap-2 text-blue-400 font-black text-[10px] tracking-widest uppercase">
               <CheckCircle size={14} className="fill-blue-500 text-white" /> Valid JSON Object
            </div>
        </div>
      </section>

      {/* ── Section 3: Core Rules Grid ── */}
      <section className="max-w-6xl mx-auto mb-32 relative">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 tracking-tighter uppercase mb-4">the 6 Pillars of JSON</h2>
            <div className="h-1 w-24 bg-blue-500/20 mx-auto rounded-full"></div>
         </div>
         
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               { rule: "Data in Key-Value Pairs", desc: '{"key": "value"}', icon: Hash, color: "text-blue-500" },
               { rule: "Keys in Double Quotes", desc: '"name": "Karthick"', icon: Quote, color: "text-indigo-500" },
               { rule: "Type Validation", desc: "Boolean, Null, Object, etc.", icon: Zap, color: "text-amber-500" },
               { rule: "Strings in Double Quotes", desc: '"city": "Chennai"', icon: Quote, color: "text-blue-500" },
               { rule: "No Trailing Commas", desc: "Strict comma placement", icon: XCircle, color: "text-rose-500" },
               { rule: "Brackets & Braces", desc: "{} and [] only", icon: Layers, color: "text-indigo-500" }
            ].map((rule, idx) => (
               <div key={idx} className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-500 group">
                  <div className={`p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl w-max mb-6 border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform ${rule.color}`}>
                     <rule.icon size={22} />
                  </div>
                  <h4 className="text-lg font-black text-gray-900 dark:text-white mb-3">✅ Rule {idx + 1}</h4>
                  <p className="text-gray-500 dark:text-gray-400 font-bold mb-4 tracking-tight leading-tight">{rule.rule}</p>
                  <code className="text-xs bg-gray-50 dark:bg-gray-900 p-2 rounded-lg font-mono text-gray-400">{rule.desc}</code>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 4, 5, 6: Structure Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8">
         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-xl flex flex-col justify-between h-full">
            <SectionHeader icon={Braces} title="4. Objects" color="text-blue-500" />
            <CodeBlock code={`{\n  "name": "Karthick",\n  "age": 22\n}`} title="object.json" />
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-xl flex flex-col justify-between h-full">
            <SectionHeader icon={Layers} title="5. Arrays" color="text-indigo-500" />
            <CodeBlock code={`[\n  "Apple",\n  "Banana",\n  "Mango"\n]`} title="array.json" />
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-xl flex flex-col justify-between h-full">
            <SectionHeader icon={Search} title="6. Nested" color="text-slate-500" />
            <CodeBlock code={`{\n  "user": {\n    "name": "Karthick",\n    "skills": ["JS"]\n  }\n}`} title="nested.json" />
         </div>
      </section>

      {/* ── Section 7: Valid vs Invalid ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-10">
         <div className="relative group">
            <div className="absolute top-0 right-0 p-6 opacity-40"><XCircle size={100} className="text-rose-500" /></div>
            <div className="bg-rose-50 dark:bg-rose-900/10 p-10 border border-rose-200 dark:border-rose-500/20 rounded-[3rem] shadow-xl opacity-80 backdrop-blur-sm grayscale group-hover:grayscale-0 transition-all duration-700">
               <SectionHeader icon={AlertTriangle} title="❌ Invalid Example" color="text-rose-500" />
               <ul className="mb-8 space-y-4">
                  <li className="flex items-center gap-3 text-rose-800 dark:text-rose-200 font-black italic"><XCircle size={14}/> No quotes on keys</li>
                  <li className="flex items-center gap-3 text-rose-800 dark:text-rose-200 font-black italic"><XCircle size={14}/> Undefined value used</li>
               </ul>
               <CodeBlock code={`{\n  name: "Karthick",\n  age: undefined\n}`} language="json" />
            </div>
         </div>

         <div className="relative group">
            <div className="absolute top-0 right-0 p-6 opacity-40"><CheckCircle size={100} className="text-emerald-500" /></div>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-10 border border-emerald-200 dark:border-emerald-500/20 rounded-[3rem] shadow-2xl scale-105 group-hover:scale-110 transition-transform duration-700">
               <SectionHeader icon={ShieldCheck} title="✅ Valid Example" color="text-emerald-500" />
               <ul className="mb-8 space-y-4">
                  <li className="flex items-center gap-3 text-emerald-800 dark:text-emerald-200 font-black italic"><CheckCircle size={14}/> Quoted Keys</li>
                  <li className="flex items-center gap-3 text-emerald-800 dark:text-emerald-200 font-black italic"><CheckCircle size={14}/> Valid JSON Types</li>
               </ul>
               <CodeBlock code={`{\n  "name": "Karthick",\n  "age": 22\n}`} language="json" />
            </div>
         </div>
      </section>

      {/* ── Section 8: Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Table} title="8. JSON vs JavaScript Syntax" subtitle="A side-by-side look at the constraints" color="text-indigo-500" />
            <div className="overflow-x-auto rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-lg mt-8">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 font-black tracking-widest uppercase text-[10px]">
                        <th className="p-6 text-gray-400">Feature</th>
                        <th className="p-6 text-blue-600 dark:text-blue-400">JSON</th>
                        <th className="p-6 text-indigo-600 dark:text-indigo-400">JavaScript</th>
                     </tr>
                  </thead>
                  <tbody className="font-bold text-sm tracking-tight leading-loose">
                     <tr className="border-b border-gray-50 dark:border-gray-800">
                        <td className="p-6 text-gray-800 dark:text-white italic">Quotes for Keys</td>
                        <td className="p-6"><span className="p-2 px-3 bg-blue-500 text-white rounded-full text-[10px] uppercase font-black">Required</span></td>
                        <td className="p-6 text-gray-400">Optional</td>
                     </tr>
                     <tr className="border-b border-gray-50 dark:border-gray-800">
                        <td className="p-6 text-gray-800 dark:text-white italic">Functions</td>
                        <td className="p-6 flex items-center gap-2 text-rose-500 font-black uppercase text-[10px] tracking-widest">❌ Not Allowed</td>
                        <td className="p-6 flex items-center gap-2 text-emerald-500 font-black uppercase text-[10px] tracking-widest">✅ Allowed</td>
                     </tr>
                     <tr className="border-0">
                        <td className="p-6 text-gray-800 dark:text-white italic">Undefined</td>
                        <td className="p-6 flex items-center gap-2 text-rose-500 font-black uppercase text-[10px] tracking-widest">❌ Not Allowed</td>
                        <td className="p-6 flex items-center gap-2 text-emerald-500 font-black uppercase text-[10px] tracking-widest">✅ Allowed</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_blue] rounded-full"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA ENFORCED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-blue-500/10 decoration-2">
          "Syntax is the law that prevents chaos in data exchange. In a world of mismatched applications, JSON's strict rules provide the common ground for perfect communication. Master the comma, and you master the network."
        </p>
      </footer>

    </div>
  );
};

export default JsonSyntax;