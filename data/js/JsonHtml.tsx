import React, { useState } from 'react';
import {
  Globe,
  Database,
  Code,
  Layout,
  ListTree,
  CreditCard,
  Table,
  Layers,
  ShieldAlert,
  Blocks,
  Terminal,
  Lightbulb,
  Rocket,
  CheckCircle,
  XCircle,
  Copy,
  Check,
  ChevronRight,
  MonitorSmartphone,
  Server
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

const JsonHtml: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Globe size={14} className="fill-current" /> DYNAMIC RENDERING
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JSON <span className="text-gray-400 font-light">+</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 drop-shadow-2xl">
            HTML
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Unlock the true power of JavaScript by <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight">generating responsive user interfaces</span> directly from JSON data payloads.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-500 w-max border border-emerald-100 dark:border-emerald-500/20 shadow-lg">
                 <Layout size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is JSON + HTML?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 It means using raw JSON data to <b>dynamically create</b> and display content on a web page at runtime.
                 </p>
                 <div className="bg-emerald-50 dark:bg-emerald-500/10 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-500/30">
                    <p className="text-emerald-700 dark:text-emerald-400 font-bold flex flex-col gap-2">
                       <span>📌 Instead of hardcoding all your HTML paragraphs and divs,</span>
                       <span><b>we generate the UI purely from the data.</b></span>
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-[#180f24] p-10 rounded-[3rem] border border-cyan-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-10 p-6"><Lightbulb size={150} className="text-cyan-500"/></div>
            <SectionHeader icon={Code} title="2. Why Use It?" color="text-cyan-400" />
            
            <ul className="space-y-6 relative z-10 text-lg">
               <li className="flex items-center gap-4 text-cyan-200 font-medium">
                  <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400"><MonitorSmartphone size={20}/></div>
                  Dynamic API content updates instantly
               </li>
               <li className="flex items-center gap-4 text-cyan-200 font-medium">
                  <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400"><Layers size={20}/></div>
                  Huge separation of Data & UI
               </li>
               <li className="flex items-center gap-4 text-cyan-200 font-medium">
                  <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400"><CheckCircle size={20}/></div>
                  Massively easier page updates
               </li>
               <li className="flex items-center gap-4 text-cyan-200 font-medium">
                  <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400"><Server size={20}/></div>
                  The exact pattern React/Vue/Angular uses
               </li>
            </ul>
        </div>
      </section>

      {/* ── Section 3: Basic createElement Example ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden">
            <SectionHeader icon={ListTree} title="3. Creating DOM Elements Safely" color="text-violet-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-8">
               Creating elements line-by-line is the safest way to build the DOM, avoiding string escaping issues.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
               <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2"><Database size={16} className="text-violet-500"/> 1. The JSON Data</h4>
                  <CodeBlock code={`const users = [\n  { name: "Karthick", age: 22 },\n  { name: "Ravi", age: 24 }\n];`} />
               </div>
               <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2"><Globe size={16} className="text-violet-500"/> 2. The HTML Target</h4>
                  <CodeBlock code={`<ul id="list"></ul>`} language="html" />
               </div>
            </div>
            
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2"><Code size={16} className="text-violet-500"/> 3. The JavaScript Injector</h4>
            <CodeBlock code={`const list = document.getElementById("list");\n\nusers.forEach(user => {\n  const li = document.createElement("li");\n  li.textContent = \`\${user.name} - \${user.age}\`;\n  list.appendChild(li);\n});`} />
            
            <div className="mt-8 bg-violet-50 dark:bg-violet-500/10 p-6 rounded-2xl border border-violet-100 dark:border-violet-500/20">
               <h4 className="font-black text-violet-700 dark:text-violet-400 mb-3 uppercase tracking-widest text-sm text-center">Output Rendered in Browser</h4>
               <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg font-medium text-center space-y-2">
                  <li>Karthick - 22</li>
                  <li>Ravi - 24</li>
               </ul>
            </div>
         </div>
      </section>

      {/* ── Section 4 & 5: innerHTML Shortcut & Real API ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-indigo-900/20 to-[#180f24] border border-indigo-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Rocket} title="4. innerHTML Shortcut" color="text-indigo-400" />
            <p className="text-indigo-200 font-medium mb-6 leading-relaxed">
               Using <code className="bg-black/30 px-2 py-1 rounded text-indigo-300 font-bold">.map().join("")</code> is faster and requires less code than `createElement`.
            </p>
            <CodeBlock code={`const list = document.getElementById("list");\n\nlist.innerHTML = users.map(user => \n  \`<li>\${user.name} - \${user.age}</li>\`\n).join("");`} />
         </div>

         <div className="bg-[#180f24] p-10 border border-emerald-500/30 rounded-[3rem] shadow-xl relative">
            <SectionHeader icon={Server} title="5. API to HTML" subtitle="The Real-world workflow" color="text-emerald-500" />
            <CodeBlock code={`fetch("https://jsonplaceholder.typicode.com/users")\n  .then(res => res.json())\n  .then(data => {\n    const container = document.getElementById("users");\n\n    container.innerHTML = data.map(user => \`\n      <div class="card">\n        <h3>\${user.name}</h3>\n        <p>\${user.email}</p>\n      </div>\n    \`).join("");\n  });`} />
         </div>
      </section>

      {/* ── Section 6, 7, 8: Cards, Tables, Nested ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-8">
         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl grid lg:grid-cols-2 gap-12">
            <div>
               <SectionHeader icon={CreditCard} title="6. HTML Cards" color="text-amber-500" />
               <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">Ideal for e-commerce product grids.</p>
               <CodeBlock code={`products.forEach(p => {\n  const div = document.createElement("div");\n  div.innerHTML = \`<h2>\${p.name}</h2><p>\${p.price}</p>\`;\n  container.appendChild(div);\n});`} />
            </div>
            <div>
               <SectionHeader icon={Table} title="7. Tables" color="text-cyan-500" />
               <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">Admin panels and data-heavy dashboards.</p>
               <CodeBlock code={`table.innerHTML = users.map(user => \`\n  <tr>\n    <td>\${user.name}</td>\n    <td>\${user.age}</td>\n  </tr>\n\`).join("");`} />
            </div>
         </div>

         <div className="bg-gradient-to-br from-[#180f24] to-purple-900/20 p-10 rounded-[3rem] border border-fuchsia-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 p-6"><Layers size={200} className="text-fuchsia-500"/></div>
            <SectionHeader icon={Layers} title="8. Nested JSON Rendering" color="text-fuchsia-400" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-8">
               <CodeBlock code={`const data = [\n  {\n    name: "Karthick",\n    skills: ["JS", "React"]\n  }\n];`} title="DATA" />
               <CodeBlock code={`document.body.innerHTML = data.map(user => \`\n  <h2>\${user.name}</h2>\n  <ul>\n    \${user.skills.map(skill => \n      \`<li>\${skill}</li>\`\n    ).join("")}\n  </ul>\n\`).join("");`} title="RENDER" />
            </div>
         </div>
      </section>

      {/* ── Section 9 & 10: Safety & Patterns ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-rose-50 dark:bg-rose-900/10 p-10 border border-rose-200 dark:border-rose-500/30 rounded-[3rem] shadow-xl">
            <SectionHeader icon={ShieldAlert} title="9. Safe Rendering ⚠️" color="text-rose-500" />
            <p className="text-rose-800 dark:text-rose-200 font-bold mb-6">👉 Avoid XSS (Cross-Site Scripting) Attacks by never blinding injecting unescaped user string data into HTML.</p>
            
            <div className="mb-4">
               <h4 className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2 mb-2"><CheckCircle size={18}/> Safe</h4>
               <code className="block bg-black/80 text-emerald-400 p-4 rounded-xl font-mono">element.textContent = user.name;</code>
            </div>
            
            <div>
               <h4 className="text-red-600 dark:text-red-400 font-bold flex items-center gap-2 mb-2"><XCircle size={18}/> Risky</h4>
               <code className="block bg-black/80 text-rose-400 p-4 rounded-xl font-mono">element.innerHTML = user.name;</code>
            </div>
         </div>

         <div className="bg-blue-50 dark:bg-blue-900/10 p-10 border border-blue-200 dark:border-blue-500/30 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Blocks} title="10. Template Pattern" subtitle="The Best Practice Strategy" color="text-blue-500" />
            <p className="text-blue-800 dark:text-blue-200 font-medium mb-6">Keep visual layout separated from your mapping logic.</p>
            <CodeBlock code={`function createUserCard(user) {\n  return \`\n    <div class="card">\n      <h3>\${user.name}</h3>\n      <p>\${user.age}</p>\n    </div>\n  \`;\n}\n\ncontainer.innerHTML = users.map(createUserCard).join("");`} />
         </div>
      </section>

      {/* ── Section 11 & Pro Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         <div className="lg:col-span-4 bg-[#180f24] border border-amber-500/30 p-10 rounded-[3rem] shadow-2xl relative">
            <SectionHeader icon={Lightbulb} title="⚡ Pro Tips" color="text-amber-400" />
            <ul className="space-y-6 text-amber-100 font-medium text-sm leading-relaxed">
               <li><b className="text-amber-400">1. Prefer textContent</b> over innerHTML to prevent secure injections.</li>
               <li><b className="text-amber-400">2. Use template functions</b> for cleaner, reusable code blocks.</li>
               <li><b className="text-amber-400">3. Keep UI separate.</b> Data &rarr; Function &rarr; HTML.</li>
               <li><b className="text-amber-400">4. Adopt Frameworks</b> (like React) for big apps, they do this automatically under the hood.</li>
               <li><b className="text-emerald-400">5. Always handle Empty Data.</b> Provide fallbacks!<br/><code className="bg-black/40 px-2 py-1 rounded block mt-2 whitespace-nowrap overflow-hidden text-ellipsis">if (!data.length) container...</code></li>
            </ul>
         </div>

         <div className="lg:col-span-8 bg-[#1e1e1e] border border-gray-700 p-10 rounded-[3rem] shadow-2xl flex flex-col justify-center">
            <SectionHeader icon={Terminal} title="11. Visualization Target" color="text-gray-400" />
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex flex-col h-full">
                 <CodeBlock code={`const users = [\n  { name: "Karthick" },\n  { name: "Ravi" }\n];\n\ndocument.body.innerHTML = users.map(\n  u => \`<p>\${u.name}</p>\`\n).join("");`} title="CODE" />
               </div>
               <div className="bg-black/50 rounded-2xl p-6 border border-gray-800 shadow-lg flex flex-col justify-center overflow-x-auto text-center">
                  <h4 className="text-gray-500 font-mono text-xs tracking-widest font-black uppercase flex items-center justify-center gap-2 mb-4">
                     <Globe size={14}/> Browser Engine
                  </h4>
                  <div className="text-white font-sans text-xl font-bold space-y-2">
                     <p className="bg-gray-800 py-2 rounded-lg border border-gray-700 shadow">Karthick</p>
                     <p className="bg-gray-800 py-2 rounded-lg border border-gray-700 shadow">Ravi</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer / Use Cases ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA VISUALIZED
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-400">
           <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow">Dashboards</span>
           <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow">E-commerce API</span>
           <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow">Social Media Feeds</span>
        </div>
      </footer>

    </div>
  );
};

export default JsonHtml;