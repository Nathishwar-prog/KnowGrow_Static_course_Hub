import React, { useState } from 'react';
import {
  Server,
  Globe,
  Database,
  Network,
  ArrowDownUp,
  Terminal,
  Settings,
  ShieldAlert,
  FileCode,
  Layout,
  Layers,
  Link,
  Code2,
  Box,
  CheckCircle,
  XCircle,
  ChevronRight,
  ArrowRight,
  MonitorSmartphone,
  Cpu,
  Copy,
  Check,
  Zap,
  RotateCcw
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-indigo-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsonPhp: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Server size={14} className="fill-current" /> SERVER-SIDE INTERCHANGE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JSON in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 drop-shadow-2xl">
            PHP
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The bridge between <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-4 tracking-tight">server-side logic</span> and frontend reality. Master the functions that power the modern web stack.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full justify-center">
               <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl text-indigo-500 w-max border border-indigo-100 dark:border-indigo-500/20 shadow-lg">
                 <Cpu size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is JSON in PHP?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                   👉 In PHP, JSON is the primary language used to send data to the browser and receive data from client-side JavaScript.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
                       <span className="block text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1 underline">PHP &rarr; JSON</span>
                       <code className="text-indigo-600 dark:text-indigo-400 font-bold">json_encode()</code>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-xl border border-purple-100 dark:border-purple-500/20">
                       <span className="block text-[10px] font-black text-purple-400 uppercase tracking-widest mb-1 underline">JSON &rarr; PHP</span>
                       <code className="text-purple-600 dark:text-purple-400 font-bold">json_decode()</code>
                    </div>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-[#180f24] p-10 rounded-[3rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-10 p-6"><Network size={150} className="text-indigo-500"/></div>
            <SectionHeader icon={Network} title="2. Why JSON with PHP?" color="text-indigo-400" />
            <p className="text-indigo-100 text-lg font-medium mb-8 relative z-10">
               JSON is the universal standard for web communication. PHP uses it to talk to apps written in any language.
            </p>
            <div className="grid grid-cols-2 gap-4 relative z-10">
               {[
                 { text: "Used in Rest APIs", icon: Globe, color: "text-blue-400" },
                 { text: "Easy JS Integration", icon: MonitorSmartphone, color: "text-emerald-400" },
                 { text: "Lightweight & Fast", icon: Zap, color: "text-amber-400" },
                 { text: "Universal Standard", icon: Layout, color: "text-purple-400" }
               ].map((item, idx) => (
                  <div key={idx} className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl flex items-center gap-3">
                     <item.icon className={item.color} size={20}/>
                     <span className="text-indigo-50 font-bold text-sm tracking-tight">{item.text}</span>
                  </div>
               ))}
            </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Encode & Decode ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Terminal} title="3. PHP → JSON" subtitle="json_encode()" color="text-indigo-500" />
            <CodeBlock code={`<?php\n$user = [\n  "name" => "Karthick",\n  "age" => 22\n];\n\necho json_encode($user);\n?>`} language="php" title="encoder.php" />
            <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl border border-emerald-100 dark:border-emerald-500/20 flex flex-col gap-2">
               <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Target Output</span>
               <p className="font-mono text-gray-700 dark:text-emerald-100 font-bold overflow-x-auto whitespace-nowrap">
                  {"{"}"name":"Karthick","age":22{"}"}
               </p>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={RotateCcw} title="4. JSON → PHP" subtitle="json_decode()" color="text-purple-500" />
            <CodeBlock code={`<?php\n$json = '{"name":"Karthick","age":22}';\n\n$data = json_decode($json, true);\n\necho $data["name"]; // Karthick\n?>`} language="php" title="decoder.php" />
            <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-2xl border border-purple-100 dark:border-purple-500/20">
               <p className="text-purple-700 dark:text-purple-300 font-bold text-sm flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded-md bg-purple-500 text-white text-[10px]">TIP</span> Set second param to `true` to get an associative array.
               </p>
            </div>
         </div>
      </section>

      {/* ── Section 5: JSON Arrays ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#180f24] p-12 rounded-[4rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Layers size={250} className="text-white"/></div>
            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
               <div className="lg:w-1/2">
                  <SectionHeader icon={Layers} title="5. JSON Arrays in PHP" color="text-indigo-400" />
                  <p className="text-indigo-100 text-lg font-medium leading-relaxed mb-8">
                     Sequential PHP arrays automatically become JSON arrays `[]` when encoded.
                  </p>
                  <CodeBlock code={`<?php\n$users = [\n  ["name" => "Karthick"],\n  ["name" => "Ravi"]\n];\n\necho json_encode($users);\n?>`} language="php" title="arrays.php" />
               </div>
               <div className="lg:w-1/2 w-full p-8 bg-black/40 rounded-3xl border border-indigo-500/20 backdrop-blur-xl">
                  <h4 className="text-indigo-400 font-mono text-xs tracking-widest font-black uppercase mb-6 flex items-center gap-2">
                     <Terminal size={14}/> Output Stream
                  </h4>
                  <pre className="text-emerald-400 font-mono text-sm leading-relaxed overflow-x-auto">
                     [{"{"}"name":"Karthick"{"}"},{"{"}"name":"Ravi"{"}"}]
                  </pre>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6 & 7: The API Loop ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={FileCode} title="6. PHP API Example" subtitle="Creating the endpoint" color="text-indigo-500" />
            <CodeBlock code={`<?php\nheader("Content-Type: application/json");\n\n$data = [\n  "status" => "success",\n  "users" => [\n    ["name" => "Karthick"],\n    ["name" => "Ravi"]\n  ]\n];\n\necho json_encode($data);\n?>`} language="php" title="api.php" />
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={Link} title="7. JS Fetch from PHP" subtitle="Consuming the data" color="text-blue-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               Modern JavaScript uses `fetch` to talk to your PHP backend effortlessly.
            </p>
            <CodeBlock code={`fetch("api.php")\n  .then(res => res.json())\n  .then(data => console.log(data.users));`} language="javascript" title="client.js" />
         </div>
      </section>

      {/* ── Section 8: JS -> PHP Post ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-[#180f24] p-12 rounded-[4rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-[-2rem] left-[-2rem] opacity-5"><ArrowDownUp size={300} className="text-emerald-500"/></div>
            <SectionHeader icon={ArrowDownUp} title="8. Sending JSON: JS &rarr; PHP" color="text-emerald-400" />
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
               <div>
                  <h4 className="font-bold text-emerald-400 mb-4 flex items-center gap-2 underline decoration-2 underline-offset-4 tracking-tighter uppercase text-xs font-black">
                     <MonitorSmartphone size={16}/> 1. Frontend POST
                  </h4>
                  <CodeBlock code={`fetch("server.php", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({ name: "Karthick" })\n});`} language="javascript" title="app.js" />
               </div>
               <div>
                  <h4 className="font-bold text-indigo-400 mb-4 flex items-center gap-2 underline decoration-2 underline-offset-4 tracking-tighter uppercase text-xs font-black">
                     <Server size={16}/> 2. PHP Input Buffer
                  </h4>
                  <CodeBlock code={`<?php\n$data = json_decode(file_get_contents("php://input"), true);\n\necho $data["name"];\n?>`} language="php" title="server.php" />
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mt-4">
                     <p className="text-emerald-100 text-[11px] font-bold">
                        👉 POST data isn't in `$_POST` for JSON! Use `php://input` to read the raw body.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9 & 10: Options & Errors ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-12 mb-8 text-center text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Advanced Server Ops</div>
         
         <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Settings} title="9. Important Options" subtitle="JSON_PRETTY_PRINT" color="text-indigo-500" />
            <div className="grid sm:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <p className="text-gray-500 dark:text-gray-400 font-medium text-sm leading-relaxed">
                     By default, `json_encode` returns a single long line. Use options to make it readable.
                  </p>
                  <CodeBlock code={`json_encode($data, JSON_PRETTY_PRINT);`} />
               </div>
               <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-700 shadow-lg">
                  <h4 className="text-emerald-400 font-mono text-xs tracking-widest font-black mb-4">Pretty Result</h4>
                  <pre className="text-gray-300 font-mono text-xs leading-relaxed">
{`{
  "name": "Karthick",
  "age": 22
}`}
                  </pre>
               </div>
            </div>
         </div>

         <div className="lg:col-span-5 bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-500/30 p-10 rounded-[3rem] shadow-xl flex flex-col justify-center">
            <SectionHeader icon={ShieldAlert} title="10. PHP JSON Errors" color="text-rose-500" />
            <p className="text-rose-500 font-black text-sm mb-6 uppercase tracking-widest">Always validate parsed strings!</p>
            <CodeBlock code={`<?php\n$json = '{"name":"Karthick"}';\n$data = json_decode($json);\n\nif (json_last_error() !== JSON_ERROR_NONE) {\n  echo "JSON Error";\n}\n?>`} language="php" />
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          SERVER LINKED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-indigo-500/10 decoration-2">
          "JSON is the heart of the modern web stack. It's the common language spoken by the front and the back. Mastering it in PHP opens the door to building powerful, scalable APIs that can power anything from a simple blog to a global social network."
        </p>
      </footer>

    </div>
  );
};

export default JsonPhp;