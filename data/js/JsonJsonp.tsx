import React, { useState } from 'react';
import {
  History,
  Globe,
  RefreshCw,
  Table,
  ZapOff,
  ShieldAlert,
  Lock,
  Terminal,
  ArrowRightLeft,
  Search,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Blocks,
  FileJson,
  Database,
  Code2,
  Copy,
  Check,
  Server,
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

const JsonJsonp: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <History size={14} className="fill-current" /> LEGACY CROSS-ORIGIN
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JSON <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 drop-shadow-2xl">
            JSONP
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500 underline-offset-4 tracking-tight">original hack</span> for fetching cross-domain data. Understand how JSONP bypassed the browser restrictions of the past.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-amber-50 dark:bg-amber-500/10 rounded-2xl text-amber-500 w-max border border-amber-100 dark:border-amber-500/20 shadow-lg">
                 <RefreshCw size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is JSONP?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                   👉 JSONP stands for <b>JSON with Padding</b>.
                 </p>
                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-6">
                   It is a technique used to fetch data from another domain—specifically created <b>before</b> modern solutions like CORS existed.
                 </p>
                 <div className="bg-amber-50 dark:bg-amber-500/10 p-5 rounded-2xl border border-amber-200 dark:border-amber-500/30">
                    <p className="text-amber-700 dark:text-amber-400 font-bold flex items-center gap-2">
                       📌 It works by wrapping raw JSON data inside a <b>callback function</b>.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-[#180f24] p-10 rounded-[3rem] border border-orange-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-10 p-6"><Globe size={150} className="text-orange-500"/></div>
            <SectionHeader icon={Globe} title="2. Why was it Needed?" color="text-orange-400" />
            
            <div className="relative z-10 space-y-6">
               <div className="bg-red-500/10 border border-red-500/20 p-5 rounded-2xl">
                  <h4 className="text-red-400 font-black flex items-center gap-2 mb-2 text-sm uppercase tracking-widest">🚫 THE PROBLEM</h4>
                  <p className="text-red-100 font-bold text-lg leading-relaxed">Same-Origin Policy (SOP)</p>
               </div>
               
               <p className="text-orange-100 font-medium leading-relaxed">
                  Browsers inherently block requests to different domains for security:
               </p>
               
               <div className="flex items-center gap-4 text-white font-mono text-sm bg-black/40 p-4 rounded-xl border border-orange-500/20">
                  <span className="text-emerald-400">frontend.com</span>
                  <XCircle size={20} className="text-red-500 shrink-0"/>
                  <span className="text-orange-300">api.other.com</span>
               </div>
               
               <p className="text-orange-200/80 font-medium italic">
                  👉 JSONP was the clever "hack" workaround for this restriction.
               </p>
            </div>
        </div>
      </section>

      {/* ── Section 3: How it Works Flow ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden">
            <SectionHeader icon={RefreshCw} title="3. How JSONP Works" color="text-amber-500" />
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-10 text-lg">
               Instead of `fetch` or AJAX, JSONP uses the <code className="bg-amber-100 dark:bg-amber-500/20 px-2 py-1 rounded font-bold text-amber-700 dark:text-amber-400">&lt;script&gt;</code> tag, which is <b>NOT</b> restricted by the same-origin policy.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {[
                 { step: "01", title: "Client Script", desc: "Adds a <script> tag to the document.", icon: Blocks, color: "bg-blue-500" },
                 { step: "02", title: "Callback", desc: "Sends a custom callback name via URL query.", icon: Code2, color: "bg-purple-500" },
                 { step: "03", title: "Server Call", desc: "Server wraps JSON in a function call.", icon: Server, color: "bg-amber-500" },
                 { step: "04", title: "Execute", desc: "Browser executes the script immediately.", icon: Terminal, color: "bg-emerald-500" }
               ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-[2rem] relative group hover:-translate-y-2 transition-transform shadow-lg shadow-gray-200/50 dark:shadow-none">
                     <div className={`absolute -top-3 -right-3 w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white font-black shadow-lg`}>
                        {item.step}
                     </div>
                     <item.icon className="text-gray-400 mb-4" size={24}/>
                     <h4 className="font-black text-gray-900 dark:text-white mb-2">{item.title}</h4>
                     <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Section 4: Comparison Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#180f24] p-10 rounded-[3rem] border border-orange-500/20 shadow-2xl relative overflow-hidden">
            <SectionHeader icon={Table} title="4. JSON vs JSONP" color="text-orange-400" />
            <div className="overflow-x-auto rounded-3xl border border-orange-500/20 shadow-lg mt-4 bg-black/40 backdrop-blur-md">
               <table className="w-full text-left border-collapse font-sans">
                  <thead>
                     <tr className="bg-orange-500/10 border-b border-orange-500/30">
                        <th className="p-5 font-black text-orange-300 uppercase tracking-widest text-xs">Feature</th>
                        <th className="p-5 font-black text-white text-lg">JSON</th>
                        <th className="p-5 font-black text-white text-lg">JSONP</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-300 font-medium">
                     <tr className="border-b border-orange-500/10">
                        <td className="p-5 font-bold text-orange-200 bg-orange-500/5">Format</td>
                        <td className="p-5 text-emerald-400 font-bold">Pure Data</td>
                        <td className="p-5 text-amber-400 font-bold italic">Function Call</td>
                     </tr>
                     <tr className="border-b border-orange-500/10">
                        <td className="p-5 font-bold text-orange-200 bg-orange-500/5">Security</td>
                        <td className="p-5 text-emerald-400 flex items-center gap-2"><CheckCircle size={16}/> Safe</td>
                        <td className="p-5 text-red-500 flex items-center gap-2 font-black"><ShieldAlert size={16}/> Risky</td>
                     </tr>
                     <tr className="border-b border-orange-500/10">
                        <td className="p-5 font-bold text-orange-200 bg-orange-500/5">Usage</td>
                        <td className="p-5">Modern APIs</td>
                        <td className="p-5 opacity-50 italic">Legacy Only</td>
                     </tr>
                     <tr>
                        <td className="p-5 font-bold text-orange-200 bg-orange-500/5">Method</td>
                        <td className="p-5 font-mono text-cyan-400 text-sm">fetch / AJAX</td>
                        <td className="p-5 font-mono text-amber-400 text-sm">{`<script>`} tag</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 5, 6, 7: Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Terminal} title="5. Core Concept Example" color="text-amber-500" />
            <div className="space-y-6">
               <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2"><Server size={16} className="text-amber-500"/> Server Response</h4>
                  <CodeBlock code={`callback({\n  name: "Karthick",\n  age: 22\n});`} language="javascript" />
               </div>
               <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2"><Blocks size={16} className="text-amber-500"/> Client Code</h4>
                  <CodeBlock code={`<script>\n  function callback(data) {\n    console.log(data.name);\n  }\n</script>\n\n<script src="https://api.example.com/user?callback=callback"></script>`} language="html" />
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl">
               <SectionHeader icon={RefreshCw} title="6. Dynamic Request" color="text-blue-500" />
               <CodeBlock code={`function getData() {\n  const script = document.createElement("script");\n  script.src = "https://api.example.com/data?callback=handleData";\n  document.body.appendChild(script);\n}\n\nfunction handleData(data) {\n  console.log(data);\n}\n\ngetData();`} />
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[2.5rem] shadow-xl">
               <SectionHeader icon={RefreshCw} title="7. Real World API Script" color="text-emerald-500" />
               <CodeBlock code={`const url = "https://example.com/api?callback=showData";\n\nfunction showData(response) {\n  console.log(response);\n}`} />
            </div>
         </div>
      </section>

      {/* ── Section 8 & 9: Limitations & Risks ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-rose-50 dark:bg-rose-900/10 p-10 border border-rose-200 dark:border-rose-500/30 rounded-[3rem] shadow-xl">
            <SectionHeader icon={ZapOff} title="8. Limitations of JSONP ⚠️" color="text-rose-500" />
            <ul className="space-y-4">
               {[
                 { text: "Only supports GET requests.", icon: XCircle },
                 { text: "No native error handling (404/500).", icon: XCircle },
                 { text: "Strict Security Risks.", icon: ShieldAlert },
                 { text: "Extremely hard to debug.", icon: XCircle }
               ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-rose-800 dark:text-rose-200 font-bold p-3 bg-white dark:bg-black/30 rounded-xl border border-rose-100 dark:border-rose-900/40">
                     <item.icon className="text-rose-500" size={20}/>
                     {item.text}
                  </li>
               ))}
            </ul>
         </div>

         <div className="bg-[#180f24] p-10 border border-red-500/30 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute right-[-2rem] bottom-[-2rem] opacity-5"><ShieldAlert size={250} className="text-red-500"/></div>
            <SectionHeader icon={ShieldAlert} title="9. Security Risk" color="text-red-500" />
            <p className="text-red-100 font-medium mb-6 relative z-10 leading-relaxed text-lg">
               Since JSONP executes JavaScript directly inside your browser context, a malicious server could send and execute any harmful code they want!
            </p>
            <div className="relative z-10">
               <CodeBlock code={`maliciousFunction(); // ⚠️ Executed immediately!`} language="javascript" title="RISKY PAYLOAD" />
            </div>
         </div>
      </section>

      {/* ── Section 10 & 11: Replace & CORS ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-emerald-50 dark:bg-emerald-900/20 p-10 border border-emerald-200 dark:border-emerald-500/30 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={CheckCircle} title="10. Modern Replacement" subtitle="Use this instead!" color="text-emerald-500" />
            <p className="text-emerald-800 dark:text-emerald-200 font-bold mb-6 text-lg">
               Today we use <b>CORS</b> (Cross-Origin Resource Sharing) which is standard, secure, and supports all HTTP methods.
            </p>
            <CodeBlock code={`fetch("https://api.example.com/data")\n  .then(res => res.json())\n  .then(data => console.log(data));`} title="MODERN FETCH" />
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={ArrowRightLeft} title="11. JSONP vs CORS" color="text-blue-500" />
            <div className="space-y-4 font-bold">
               <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 flex justify-between items-center group">
                  <span className="text-gray-500">Security</span>
                  <div className="flex items-center gap-6">
                     <span className="text-red-500 line-through opacity-50">Low</span>
                     <span className="text-emerald-500 flex items-center gap-1"><CheckCircle size={16}/> High</span>
                  </div>
               </div>
               <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 flex justify-between items-center group">
                  <span className="text-gray-500">Methods</span>
                  <div className="flex items-center gap-6">
                     <span className="text-orange-500 font-mono text-sm line-through opacity-50">GET ONLY</span>
                     <span className="text-emerald-500 font-mono text-sm flex items-center gap-1"><CheckCircle size={16}/> ALL (POST, PUT...)</span>
                  </div>
               </div>
               <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 flex justify-between items-center group">
                  <span className="text-gray-500">Status</span>
                  <div className="flex items-center gap-6">
                     <span className="text-red-500 line-through opacity-50 uppercase tracking-tighter">Deprecated</span>
                     <span className="text-emerald-500 uppercase tracking-widest text-xs flex items-center gap-1"><CheckCircle size={12}/> Standard</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 12: Visualization ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-[#180f24] border border-amber-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Terminal} title="12. Visualization Target" color="text-amber-400" />
            <div className="grid md:grid-cols-2 gap-8">
               <div className="flex flex-col h-full">
                 <CodeBlock code={`function show(data) {\n  console.log(data);\n}\n\n<script src="api.com?callback=show"></script>`} title="JSONP REQUEST" />
               </div>
               <div className="bg-[#1e1e1e] rounded-2xl p-8 border border-gray-700 shadow-lg flex flex-col justify-center text-center">
                  <h4 className="text-amber-400 font-mono text-xs tracking-widest font-black uppercase flex items-center justify-center gap-2 mb-6">
                     <Globe size={16}/> Browser Network Trace
                  </h4>
                  <div className="space-y-4">
                     <div className="bg-black/40 p-3 rounded-lg border border-orange-500/20 text-orange-200 font-mono text-sm truncate">
                        GET api.com?callback=show
                     </div>
                     <ChevronRight className="text-orange-500 rotate-90 mx-auto" size={24}/>
                     <div className="bg-black/60 p-4 rounded-xl border border-emerald-500/20 text-emerald-400 font-mono text-sm">
                        show({`{"msg": "Success"}`})
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          LEGACY OVERRIDDEN
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-amber-500/10 decoration-2">
          "JSONP was a beautiful hack in a world without CORS. While deprecated today, understanding it gives you deep insight into how the web evolved to handle secure data interchange."
        </p>
      </footer>

    </div>
  );
};

export default JsonJsonp;