import React, { useState } from 'react';
import {
  Scale,
  FileJson,
  FileCode,
  Table,
  Zap,
  Turtle,
  Braces,
  Code2,
  Database,
  Network,
  HardDrive,
  Settings,
  CheckCircle,
  XCircle,
  ArrowRight,
  Terminal,
  Search,
  Layout,
  History,
  Activity,
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

const JsonVsXml: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden text-gray-700 dark:text-gray-300">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-slate-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Scale size={14} className="fill-current" /> DATA FORMAT CLASH
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JSON <span className="text-gray-400 italic font-medium px-4">vs</span> XML
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The ultimate comparison between the world's most popular data formats. Discover why JSON conquered the web and where XML <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight">still reigns supreme</span>.
        </p>
      </header>

      {/* ── Section 1: Overview ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border-l-8 border-l-blue-500 shadow-xl relative overflow-hidden h-full group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-700"><FileJson size={200} className="text-blue-500" /></div>
            <SectionHeader icon={FileJson} title="JSON" subtitle="JavaScript Object Notation" color="text-blue-500" />
            <p className="text-lg font-medium mb-8 leading-relaxed italic">👉 Lightweight data format used in modern web apps.</p>
            <CodeBlock code={`{\n  "name": "Karthick",\n  "age": 22\n}`} language="json" title="example.json" />
         </div>

         <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border-l-8 border-l-orange-500 shadow-xl relative overflow-hidden h-full group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-700"><FileCode size={200} className="text-orange-500" /></div>
            <SectionHeader icon={FileCode} title="XML" subtitle="eXtensible Markup Language" color="text-orange-500" />
            <p className="text-lg font-medium mb-8 leading-relaxed italic">👉 Markup-based format used for structured data.</p>
            <CodeBlock code={`<user>\n  <name>Karthick</name>\n  <age>22</age>\n</user>`} language="xml" title="example.xml" />
         </div>
      </section>

      {/* ── Section 2: Summary Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Table} title="2. Key Differences" subtitle="A side-by-side technical breakdown" color="text-indigo-500" />
            <div className="overflow-x-auto rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-lg">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 font-black tracking-widest uppercase text-[10px]">
                        <th className="p-6 text-gray-400">Feature</th>
                        <th className="p-6 text-blue-600 dark:text-blue-400">JSON ✅</th>
                        <th className="p-6 text-orange-600 dark:text-orange-400">XML 📄</th>
                     </tr>
                  </thead>
                  <tbody className="font-bold text-sm tracking-tight leading-loose">
                     {[
                        { f: "Format", j: "Key-value", x: "Tags" },
                        { f: "Readability", j: "Easy", x: "Verbose" },
                        { f: "Size", j: "Smaller", x: "Larger" },
                        { f: "Speed", j: "Faster", x: "Slower" },
                        { f: "Parsing", j: "Simple", x: "Complex" },
                        { f: "Usage", j: "Modern APIs", x: "Legacy / Config" }
                     ].map((row, i) => (
                        <tr key={i} className="border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                           <td className="p-6 text-gray-800 dark:text-white italic">{row.f}</td>
                           <td className="p-6 text-blue-500 font-black uppercase text-[10px] tracking-widest">{row.j}</td>
                           <td className="p-6 text-orange-500 font-black uppercase text-[10px] tracking-widest">{row.x}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 3 & 4: Syntax & Representation ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="bg-[#0a0f18] p-10 rounded-[4rem] border border-blue-500/20 shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <SectionHeader icon={Braces} title="3. Syntax Comparison" color="text-blue-400" />
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-4">JSON: Clean & Short</span>
                  <CodeBlock code={`{\n  "city": "Chennai"\n}`} />
               </div>
               <div>
                  <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest block mb-4">XML: Tag Overload</span>
                  <CodeBlock code={`<city>Chennai</city>`} />
               </div>
            </div>
            <div className="mt-4 p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-xl text-blue-100 font-black italic shadow-lg shadow-blue-500/10">
               ✅ JSON is shorter and cleaner!
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Layout} title="4. Representation" color="text-indigo-500" />
            <div className="space-y-6">
               <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border-l-4 border-blue-500">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2">JSON (Object Map)</span>
                  <CodeBlock code={`{ "user": { "name": "Karthick" } }`} />
               </div>
               <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border-l-4 border-orange-500">
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest block mb-2">XML (Document Tree)</span>
                  <CodeBlock code={`<user><name>Karthick</name></user>`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5: Parsing ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
         <div>
            <SectionHeader icon={Terminal} title="5. Parsing Efficiency" subtitle="Browser Native vs Legacy DOM" color="text-emerald-500" />
            <p className="text-xl font-medium mb-8 leading-relaxed italic text-gray-500">
               JSON is parsed directly into JavaScript memory. XML requires a complex DOM traversal that slows down the browser.
            </p>
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-3">
               <Zap size={20}/> 🚀 JSON parsing is 10x easier!
            </div>
         </div>
         <div className="space-y-4">
            <CodeBlock code={`// JSON\nconst obj = JSON.parse(jsonString);`} title="native.js" />
            <CodeBlock code={`// XML\nconst parser = new DOMParser();\nconst xml = parser.parseFromString(str, "text/xml");`} title="complex.js" />
         </div>
      </section>

      {/* ── Section 6 & 7: Performance ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="p-10 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-110 transition-transform"><Activity size={200} className="text-blue-500"/></div>
            <SectionHeader icon={Zap} title="6. Parsing Speed" color="text-blue-500" />
            <div className="flex items-center gap-8 mb-6">
               <div className="flex-1">
                  <div className="h-4 bg-blue-500 rounded-full w-full mb-2"></div>
                  <span className="text-[10px] font-black uppercase text-blue-500">JSON (Flash Fast)</span>
               </div>
               <div className="flex-1 opacity-30">
                  <div className="h-4 bg-orange-500 rounded-full w-1/3 mb-2"></div>
                  <span className="text-[10px] font-black uppercase text-orange-400">XML (Slow)</span>
               </div>
            </div>
            <p className="font-bold italic text-blue-600">⚡ JSON is preferred for high-speed APIs.</p>
         </div>

         <div className="p-10 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-110 transition-transform"><HardDrive size={200} className="text-indigo-500"/></div>
            <SectionHeader icon={HardDrive} title="7. Data Size" color="text-indigo-600" />
            <p className="text-sm font-medium mb-6 leading-relaxed italic text-gray-400">XML closing tags double the bandwidth cost for small payloads.</p>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 text-center">
                  <span className="text-emerald-500 font-black text-xs uppercase block mb-1">JSON Buffer</span>
                  <span className="text-2xl font-black text-gray-900 dark:text-white tracking-widest leading-none">42KB</span>
               </div>
               <div className="bg-rose-500/10 p-4 rounded-xl border border-rose-500/20 text-center opacity-50 grayscale">
                  <span className="text-rose-500 font-black text-xs uppercase block mb-1">XML Buffer</span>
                  <span className="text-2xl font-black text-gray-900 dark:text-white tracking-widest leading-none">128KB</span>
               </div>
            </div>
            <p className="mt-4 font-bold text-center text-teal-500 uppercase text-[10px] tracking-widest">✔️ JSON saves bandwidth</p>
         </div>
      </section>

      {/* ── Section 8: XML Benefits ── */}
      <section className="max-w-6xl mx-auto mb-32 bg-[#1a1200] p-12 rounded-[4rem] border border-amber-500/20 shadow-2xl relative overflow-hidden">
         <div className="absolute -top-10 -right-10 opacity-10 rotate-12"><History size={300} className="text-orange-500"/></div>
         <div className="relative z-10 max-w-2xl">
            <SectionHeader icon={History} title="8. Features of XML (Legacy Power)" subtitle="Why it still exists in enterprise" color="text-orange-400" />
            <p className="text-amber-100 text-lg font-medium leading-relaxed mb-8 italic drop-shadow-lg">
               While JSON rules modern APIs, XML is the backbone of legacy document systems and complex enterprise logic.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                  { t: "Attributes Support", d: "Store metadata directly in tags." },
                  { t: "Schema Validation", d: "Strict data verification with XSD." },
                  { t: "Document Storage", d: "Better for mixed-content files." },
                  { t: "Legacy Persistence", d: "Used in millions of bank systems." }
               ].map((item, idx) => (
                  <div key={idx} className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl group hover:bg-orange-500/20 transition-colors">
                     <h5 className="text-orange-400 font-black text-sm mb-1 uppercase tracking-tighter">{item.t}</h5>
                     <p className="text-amber-100/60 text-xs font-medium italic">{item.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Section 9 & 10: Usage & Selection ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-12">
         <div className="lg:col-span-12 mb-12 text-center">
            <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500 uppercase tracking-tighter">Selection Strategy</h2>
            <p className="text-gray-500 font-black text-[10px] tracking-[0.4em] mt-2">DEPLOY THE RIGHT FORMAT</p>
         </div>
         
         <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group h-full flex flex-col justify-center">
                <SectionHeader icon={CheckCircle} title="9. Real-World Usage" color="text-blue-500" />
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-4">
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-2">JSON Dominance</span>
                      {["REST APIs", "React Apps", "Mobile Dev"].map((use, i) => (
                         <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-600"><CheckCircle size={14} className="text-blue-500"/> {use}</div>
                      ))}
                   </div>
                   <div className="space-y-4">
                      <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest block mb-2">XML Strongholds</span>
                      {["SOAP APIs", "System Config", "Bank Legacy"].map((use, i) => (
                         <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-500"><CheckCircle size={14} className="text-orange-500"/> {use}</div>
                      ))}
                   </div>
                </div>
            </div>
         </div>

         <div className="lg:col-span-7 bg-[#0a0f18] p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl flex flex-col justify-center">
            <SectionHeader icon={Settings} title="10. When to Use What?" color="text-blue-400" />
            <div className="overflow-hidden rounded-2xl border border-blue-500/20 shadow-xl">
               <table className="w-full text-left bg-black/40 backdrop-blur-xl">
                  <thead>
                     <tr className="border-b border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                        <th className="p-4">Use Case</th>
                        <th className="p-4 text-center">Format</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-bold">
                     {[
                        { u: "Web APIs & Browser Apps", b: "JSON", c: "text-blue-400" },
                        { u: "Lightweight Mobile Apps", b: "JSON", c: "text-blue-400" },
                        { u: "Mixed Document Storage", b: "XML", c: "text-orange-400" },
                        { u: "Enterprise Legacy Systems", b: "XML", c: "text-orange-400" }
                     ].map((decision, idx) => (
                        <tr key={idx} className="border-b border-blue-500/10 last:border-0 hover:bg-blue-500/5 transition-colors">
                           <td className="p-4 text-gray-300 italic">{decision.u}</td>
                           <td className={`p-4 text-center ${decision.c} font-black tracking-widest text-[10px]`}>{decision.b}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 11: Final Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#180f24] p-12 rounded-[4rem] border border-blue-500/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 p-10 opacity-5 select-none font-black text-[15rem] leading-[0.8] text-blue-500 pointer-events-none group-hover:scale-110 transition-transform duration-1000 uppercase">RUN</div>
            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
               <div className="lg:w-1/2">
                  <SectionHeader icon={Terminal} title="11. Visualization" color="text-blue-400" />
                  <p className="text-blue-100 font-medium text-lg leading-relaxed italic drop-shadow-lg mb-8">
                     Proving the efficiency of native JSON parsing over the verbose XML alternative.
                  </p>
                  <CodeBlock code={`const json = '{"name":"Karthick"}';\nconsole.log(JSON.parse(json).name);`} title="verify.js" />
               </div>
               <div className="lg:w-1/2 w-full p-10 bg-black/50 rounded-3xl border border-blue-500/20 backdrop-blur-xl group-hover:border-blue-500/40 transition-colors">
                  <h4 className="text-blue-400 font-mono text-xs tracking-widest font-black uppercase mb-6 flex justify-between items-center group-hover:scale-105 transition-transform">
                     <span>Execution Result</span>
                     <History size={14} className="opacity-50 group-hover:rotate-180 transition-transform duration-500"/>
                  </h4>
                  <pre className="text-blue-400 font-mono text-xl leading-none overflow-x-auto whitespace-pre selection:bg-blue-500/30">
                     Karthick
                  </pre>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_blue] rounded-full"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          FORMAT COMPARISON DONE
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-blue-500/10 decoration-2 text-center group">
          "JSON didn't win because XML was bad; JSON won because it was <span className="text-blue-500 group-hover:underline transition-all">born of the web</span>. For the browser, JSON isn't just a format—it's native memory."
        </p>
      </footer>

    </div>
  );
};

export default JsonVsXml;