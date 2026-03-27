import React, { useState } from 'react';
import {
  Zap,
  Database,
  Download,
  Play,
  Globe,
  Table,
  Terminal,
  Settings,
  Layers,
  Search,
  Share2,
  Wrench,
  Layout,
  Code2,
  Server,
  Network,
  Cpu,
  CheckCircle,
  XCircle,
  ArrowRight,
  ClipboardList,
  PlusCircle,
  Edit3,
  Trash2,
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-emerald-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsonServer: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Server size={14} className="fill-current" /> ZERO-BACKEND PROTOTYPING
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JSON <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 drop-shadow-2xl">
            Server
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Turn your static JSON files into fully functional <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight">REST APIs</span> in seconds. The ultimate tool for frontend excellence.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full justify-center">
               <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-500 w-max border border-emerald-100 dark:border-emerald-500/20 shadow-lg">
                 <Zap size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is JSON Server?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                   👉 JSON Server is a tool that lets you create a <b>fake REST API</b> using a simple JSON file.
                 </p>
                 <div className="flex items-center gap-6 bg-emerald-50 dark:bg-emerald-500/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-500/30 font-black">
                    <span className="text-gray-400 uppercase text-[10px] tracking-widest">.json file</span>
                    <ArrowRight className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 uppercase text-[10px] tracking-widest">REST API</span>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-[#0f1714] p-10 rounded-[3rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center text-emerald-50">
            <div className="absolute right-0 top-0 opacity-10 p-6"><Cpu size={150} className="text-emerald-500"/></div>
            <SectionHeader icon={PlusCircle} title="2. Why Use JSON Server?" color="text-emerald-400" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
               {[
                 { text: "No Backend Coding", icon: XCircle, color: "text-rose-400" },
                 { text: "Frontend Focused", icon: Layout, color: "text-sky-400" },
                 { text: "Quick Prototype", icon: Zap, color: "text-amber-400" },
                 { text: "Learn API Logic", icon: GraduationCap, color: "text-teal-400" }
               ].map((item, idx) => (
                  <div key={idx} className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-center gap-3">
                     <item.icon className={item.color} size={20}/>
                     <span className="font-bold text-sm tracking-tight">{item.text}</span>
                  </div>
               ))}
            </div>
        </div>
      </section>

      {/* ── Section 3, 4, 5: Getting Started ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-12 mb-8 text-center">
            <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 tracking-tighter uppercase">3-Step Deployment</h2>
         </div>

         <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Download} title="3. Install" color="text-sky-500" />
            <CodeBlock code={`npm install -g json-server`} title="terminal" />
         </div>

         <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={FileJson} title="4. Mock DB" color="text-amber-500" />
            <CodeBlock code={`{\n  "users": [\n    { "id": 1, "name": "Karthick" }\n  ]\n}`} language="json" title="db.json" />
         </div>

         <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Play} title="5. Start" color="text-emerald-500" />
            <CodeBlock code={`json-server --watch db.json`} title="terminal" />
         </div>
      </section>

      {/* ── Section 6: Endpoints ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Globe} title="6. Available API Endpoints" color="text-indigo-500" />
            <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <th className="p-5 font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest text-[10px]">Method</th>
                        <th className="p-5 font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest text-[10px]">URL</th>
                        <th className="p-5 font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest text-[10px]">Action</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300 font-medium">
                     {[
                        { m: "GET", u: "/users", a: "Fetch All", c: "bg-blue-500" },
                        { m: "GET", u: "/users/1", a: "Fetch One", c: "bg-blue-500" },
                        { m: "POST", u: "/users", a: "Add New", c: "bg-emerald-500" },
                        { m: "PUT", u: "/users/1", a: "Full Update", c: "bg-amber-500" },
                        { m: "DELETE", u: "/users/1", a: "Remove", c: "bg-rose-500" }
                     ].map((row, i) => (
                        <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-0 group hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                           <td className="p-5"><span className={`px-2 py-1 rounded text-[10px] font-black text-white ${row.c}`}>{row.m}</span></td>
                           <td className="p-5 font-mono text-sm">{row.u}</td>
                           <td className="p-5 font-bold italic">{row.a}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Section 7, 8, 9, 10: CRUD Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Search} title="7. Fetch Data (GET)" color="text-blue-500" />
            <CodeBlock code={`fetch("http://localhost:3000/users")\n  .then(res => res.json())\n  .then(data => console.log(data));`} />
         </div>

         <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={PlusCircle} title="8. Add Data (POST)" color="text-emerald-500" />
            <CodeBlock code={`fetch("http://localhost:3000/users", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "New User" })\n});`} />
         </div>

         <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Edit3} title="9. Update (PUT/PATCH)" color="text-amber-500" />
            <CodeBlock code={`fetch("http://localhost:3000/users/1", {\n  method: "PATCH",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "Updated Name" })\n});`} />
         </div>

         <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Trash2} title="10. Delete Data" color="text-rose-500" />
            <CodeBlock code={`fetch("http://localhost:3000/users/1", {\n  method: "DELETE"\n});`} />
         </div>
      </section>

      {/* ── Section 11 & 12: Advanced Operations ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="bg-[#0f1714] p-10 rounded-[3rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute right-0 bottom-0 opacity-10 p-6"><Search size={150} className="text-emerald-500"/></div>
            <SectionHeader icon={Search} title="11. Query & Filtering" color="text-emerald-400" />
            <div className="space-y-4 relative z-10">
               <div className="p-4 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-xl">
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-1">Filtering</span>
                  <code className="text-emerald-100 text-sm">/users?name=Karthick</code>
               </div>
               <div className="p-4 bg-emerald-500/10 border-l-4 border-teal-500 rounded-xl">
                  <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest block mb-1">Pagination</span>
                  <code className="text-teal-100 text-sm">/users?_limit=2</code>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Layers} title="12. Relationships" color="text-indigo-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               JSON Server can even handle relational data using nested IDs and the `_expand` parameter.
            </p>
            <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border-l-4 border-indigo-500 overflow-x-auto whitespace-nowrap">
               <code className="text-indigo-600 dark:text-indigo-400 font-bold">/posts?_expand=user</code>
            </div>
         </div>
      </section>

      {/* ── Section 13, 14, 15: Config & Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-12 mb-8 text-center text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500 uppercase tracking-tighter">Pro Configuration</div>
         
         <div className="lg:col-span-6 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Settings} title="13. Custom Port" color="text-emerald-500" />
            <CodeBlock code={`json-server --watch db.json --port 4000`} title="terminal" />
         </div>

         <div className="lg:col-span-6 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Wrench} title="14. Middleware" color="text-teal-500" />
            <p className="text-gray-500 font-medium mb-6 italic">Customize your routes using a `routes.json` file.</p>
            <CodeBlock code={`// Advanced customization available via middlewares`} />
         </div>

         <div className="lg:col-span-12 bg-[#180f24] p-12 rounded-[4rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden mt-12">
            <div className="absolute top-0 left-0 p-10 opacity-5 font-black text-9xl text-emerald-500 pointer-events-none italic tracking-tighter uppercase select-none">RESULT</div>
            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
               <div className="lg:w-1/2">
                  <SectionHeader icon={Terminal} title="15. Final Visualization" color="text-emerald-400" />
                  <p className="text-emerald-100 font-medium text-lg mb-8 italic drop-shadow-lg leading-relaxed">
                     The perfect simulation of a real product API. Watch your static data come to life on the network.
                  </p>
                  <div className="flex items-center gap-4 bg-emerald-500/20 p-4 rounded-2xl border border-emerald-500/30">
                     <CheckCircle className="text-emerald-400" />
                     <span className="text-emerald-100 font-bold">Live on http://localhost:3000</span>
                  </div>
               </div>
               <div className="lg:w-1/2 w-full p-8 bg-black/40 rounded-3xl border border-emerald-500/20 backdrop-blur-xl group">
                  <h4 className="text-emerald-400 font-mono text-xs tracking-widest font-black uppercase mb-6 flex justify-between items-center group-hover:scale-105 transition-transform">
                     <span>Console Output</span>
                     <RotateCcw size={14} className="animate-spin-slow opacity-50"/>
                  </h4>
                  <pre className="text-emerald-400 font-mono text-sm leading-relaxed overflow-x-auto selection:bg-emerald-500/30">
{`[
  { 
    "id": 1, 
    "name": "Laptop", 
    "price": 75000 
  }
]`}
                  </pre>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          LOCAL BACKEND UP
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-emerald-500/10 decoration-2 italic">
          "JSON Server is more than just a mock. It's the silent partner of every great frontend engineer, allowing the logic to be built even when the backend is still in the clouds."
        </p>
      </footer>

    </div>
  );
};

const GraduationCap = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
  </svg>
);

const FileJson = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10 12l-2 3 2 3M14 12l2 3-2 3"/>
  </svg>
);

const RotateCcw = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
  </svg>
);

export default JsonServer;