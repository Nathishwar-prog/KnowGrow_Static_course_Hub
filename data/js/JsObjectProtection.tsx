import React, { useState } from 'react';
import {
  ShieldCheck,
  Shield,
  ShieldAlert,
  Lock,
  Unlock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Table,
  Eye,
  Layers,
  Sparkles,
  Lightbulb,
  Briefcase,
  Code2,
  Copy,
  Check,
  Zap,
  BookOpen,
  Terminal
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-rose-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsObjectProtection: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f0914] min-h-screen font-sans selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-red-600 dark:text-red-400 text-[10px] font-black mb-8 border border-red-100 dark:border-red-900/50 shadow-xl shadow-red-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <ShieldCheck size={14} className="fill-current" /> SECURITY & INTEGRITY
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Object <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 drop-shadow-2xl">
            Protection
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Keep your application data secure, predictable, and bug-free by controlling how objects can be <span className="text-gray-900 dark:text-white font-bold underline decoration-red-500 underline-offset-4 tracking-tight">modified</span>.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-500 w-max border border-blue-100 dark:border-blue-500/20 shadow-lg">
                 <Shield size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is Object Protection?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   Object Protection in JavaScript means controlling:
                 </p>
                 <ul className="space-y-3 mb-6 text-gray-700 dark:text-gray-300 font-medium">
                    <li className="flex items-center gap-3"><XCircle className="text-red-500 shrink-0" size={20}/> Adding new properties</li>
                    <li className="flex items-center gap-3"><XCircle className="text-red-500 shrink-0" size={20}/> Deleting properties</li>
                    <li className="flex items-center gap-3"><XCircle className="text-red-500 shrink-0" size={20}/> Modifying existing values</li>
                 </ul>
                 <div className="bg-emerald-50 dark:bg-emerald-500/5 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-500/20">
                    <p className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                       👉 It helps make your data secure, predictable, and bug-free.
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#180f24] p-10 rounded-[3rem] border border-red-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 p-6"><AlertTriangle size={150} className="text-red-500"/></div>
               <SectionHeader icon={AlertTriangle} title="2. Why Do We Need It?" subtitle="The risk of unprotected data." color="text-red-400" />
               <p className="text-gray-300 font-medium mb-6 relative z-10">
                  Without protection, any part of your code can mutate crucial application data accidentally:
               </p>
               <div className="relative z-10">
                 <CodeBlock code={`const user = { name: "Karthick" };\n\nuser.name = "Hacker";\nuser.role = "admin";\ndelete user.name;`} title="UNPROTECTED OBJECT" />
                 <p className="text-red-400 font-bold mt-4 text-lg flex items-center gap-2">
                    <ShieldAlert size={24} /> 👉 This can break your app logic!
                 </p>
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: The Three Main Methods ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-10 py-14 rounded-[3rem] shadow-xl relative overflow-hidden">
            <SectionHeader icon={Table} title="3. Main Protection Methods" subtitle="A quick comparison of Object methods." color="text-indigo-500" />
            
            <div className="overflow-x-auto relative z-10 rounded-2xl border border-gray-200 dark:border-gray-700">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        <th className="p-5 font-black text-lg">Method</th>
                        <th className="p-5 font-black text-center">Add</th>
                        <th className="p-5 font-black text-center">Delete</th>
                        <th className="p-5 font-black text-center">Modify</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300 font-medium">
                     <tr className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="p-5"><code className="text-blue-500 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 font-bold">preventExtensions()</code></td>
                        <td className="p-5 text-center"><XCircle className="mx-auto text-red-500" size={20}/></td>
                        <td className="p-5 text-center"><CheckCircle className="mx-auto text-green-500" size={20}/></td>
                        <td className="p-5 text-center"><CheckCircle className="mx-auto text-green-500" size={20}/></td>
                     </tr>
                     <tr className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="p-5"><code className="text-orange-500 bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20 font-bold">seal()</code></td>
                        <td className="p-5 text-center"><XCircle className="mx-auto text-red-500" size={20}/></td>
                        <td className="p-5 text-center"><XCircle className="mx-auto text-red-500" size={20}/></td>
                        <td className="p-5 text-center"><CheckCircle className="mx-auto text-green-500" size={20}/></td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="p-5"><code className="text-red-500 bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20 font-bold">freeze()</code></td>
                        <td className="p-5 text-center"><XCircle className="mx-auto text-red-500" size={20}/></td>
                        <td className="p-5 text-center"><XCircle className="mx-auto text-red-500" size={20}/></td>
                        <td className="p-5 text-center"><XCircle className="mx-auto text-red-500" size={20}/></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── Sections 4, 5, 6: Method Details ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8">
         {/* preventExtensions */}
         <div className="bg-gradient-to-br from-blue-900/20 to-[#180f24] border border-blue-500/30 p-8 rounded-[2rem] shadow-xl flex flex-col h-full">
            <div className="p-3 bg-blue-500/20 rounded-xl w-max mb-6 text-blue-400 ring-1 ring-blue-500/50"><Unlock size={24}/></div>
            <h3 className="text-xl font-black text-white mb-2">4. preventExtensions()</h3>
            <p className="text-blue-200 font-medium mb-6 text-sm">👉 Prevents adding new properties</p>
            <div className="flex-grow">
               <CodeBlock code={`const obj = { name: "Karthick" };\n\nObject.preventExtensions(obj);\n\nobj.age = 22; // ❌ Not added`} language="javascript" />
            </div>
            <div className="mt-4 bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 text-sm">
               <span className="font-bold text-green-400 block mb-2">✅ Allowed:</span>
               <ul className="text-gray-300 space-y-1">
                  <li>• Modify existing properties</li>
                  <li>• Delete properties</li>
               </ul>
            </div>
         </div>

         {/* seal */}
         <div className="bg-gradient-to-br from-orange-900/20 to-[#180f24] border border-orange-500/30 p-8 rounded-[2rem] shadow-xl flex flex-col h-full">
            <div className="p-3 bg-orange-500/20 rounded-xl w-max mb-6 text-orange-400 ring-1 ring-orange-500/50"><Lock size={24}/></div>
            <h3 className="text-xl font-black text-white mb-2">5. seal()</h3>
            <p className="text-orange-200 font-medium mb-6 text-sm">👉 Locks structure (no add/delete)</p>
            <div className="flex-grow">
               <CodeBlock code={`const obj = { name: "Karthick" };\n\nObject.seal(obj);\n\nobj.name = "Raja";  // ✅ Allowed\ndelete obj.name;    // ❌ Blocked\nobj.age = 22;       // ❌ Blocked`} />
            </div>
         </div>

         {/* freeze */}
         <div className="bg-gradient-to-br from-red-900/20 to-[#180f24] border border-red-500/30 p-8 rounded-[2rem] shadow-xl flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Lock size={120} className="text-red-500"/></div>
            <div className="p-3 bg-red-500/20 rounded-xl w-max mb-6 text-red-500 ring-1 ring-red-500/50 relative z-10"><Lock size={24}/></div>
            <h3 className="text-xl font-black text-white mb-2 relative z-10">6. freeze() <span className="text-xs ml-2 bg-red-500 px-2 py-1 rounded-full animate-pulse text-white font-bold">Most Important</span></h3>
            <p className="text-red-200 font-medium mb-6 text-sm relative z-10">👉 Completely locks the object 🔒</p>
            <div className="flex-grow relative z-10">
               <CodeBlock code={`const obj = { name: "Karthick" };\n\nObject.freeze(obj);\n\nobj.name = "Raja";  // ❌ Blocked\nobj.age = 22;       // ❌ Blocked\ndelete obj.name;    // ❌ Blocked`} />
            </div>
            <p className="text-red-400 font-bold mt-4 text-center border border-red-500/20 bg-red-500/10 py-2 rounded-xl relative z-10">This makes object immutable</p>
         </div>
      </section>

      {/* ── Sections 7 & 8: Visual Comparison & Checking Status ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Eye} title="7. Visual Comparison" color="text-fuchsia-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               See how different protection levels react when you mutate an object exactly the same way.
            </p>
            <CodeBlock code={`const obj = { name: "Karthick" };\n\n// Try one at a time:\n// Object.preventExtensions(obj);\n// Object.seal(obj);\n// Object.freeze(obj);\n\nobj.name = "Updated";\nobj.age = 22;\ndelete obj.name;\n\nconsole.log(obj);`} title="PLAYGROUND CODE" />
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={CheckCircle} title="8. Checking Status" color="text-teal-500" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
               You can check the current level of protection applied to an object using these built-in checks.
            </p>
            <CodeBlock code={`Object.isExtensible(obj); // false if prevented\nObject.isSealed(obj);     // true if sealed\nObject.isFrozen(obj);     // true if frozen`} title="STATUS CHECKERS" />
         </div>
      </section>

      {/* ── Section 9 & 10: Shallow vs Deep Freeze ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-[#180f24] border border-yellow-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={AlertTriangle} title="9. Shallow Protection ⚠️" color="text-yellow-400" />
            <p className="text-yellow-200 font-medium mb-6">
               <code className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Object.freeze()</code> is <b>shallow</b>. Nested objects are NOT protected automatically!
            </p>
            <CodeBlock code={`const user = {\n  name: "Karthick",\n  address: {\n    city: "Chennai"\n  }\n};\n\nObject.freeze(user);\n\nuser.address.city = "Madurai"; // ✅ STILL changes!`} title="SHALLOW FREEZE FLAW" />
         </div>

         <div className="bg-[#180f24] border border-cyan-500/30 p-10 rounded-[3rem] shadow-2xl">
            <SectionHeader icon={Layers} title="10. Deep Freeze (Advanced)" color="text-cyan-400" />
            <p className="text-cyan-200 font-medium mb-6">
               To protect nested properties, recursively freeze all child objects first.
            </p>
            <CodeBlock code={`function deepFreeze(obj) {\n  Object.keys(obj).forEach(key => {\n    if (typeof obj[key] === "object" && obj[key] !== null) {\n      deepFreeze(obj[key]);\n    }\n  });\n  return Object.freeze(obj);\n}\n\ndeepFreeze(user);\nuser.address.city = "Madurai"; // ❌ Now blocked`} title="CUSTOM DEEP FREEZE" />
         </div>
      </section>

      {/* ── Output Visualization Target ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 border border-emerald-500/20 rounded-[3rem] shadow-xl text-center">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-3">
               <Zap className="text-emerald-500"/> Output Visualization
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
               <CodeBlock code={`const obj = { name: "Karthick" };\nObject.freeze(obj);\n\nobj.name = "Raja";\n\nconsole.log(obj);`} title="INPUT" />
               <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col justify-center">
                  <h4 className="text-emerald-400 font-mono text-sm tracking-widest font-black uppercase flex items-center gap-2 mb-4">
                     <Terminal size={16}/> Console Output
                  </h4>
                  <pre className="text-white font-mono text-lg">{`{ name: "Karthick" }`}</pre>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 11 & 12: Pro Tips & Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-[#180f24] to-[#0f0914] border border-purple-500/30 p-10 md:p-14 rounded-[3rem] shadow-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Lightbulb size={250} className="text-purple-500" /></div>
            <SectionHeader icon={Lightbulb} title="💡 Pro Tips (From 15+ Yrs Exp)" color="text-purple-400" />
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
               <div className="bg-purple-900/20 border border-purple-500/20 p-6 rounded-2xl">
                  <h4 className="text-purple-300 font-bold mb-3 flex items-center gap-2">🔥 1. Always freeze constants</h4>
                  <CodeBlock code={`const CONFIG = Object.freeze({\n  API_URL: "https://api.com"\n});`} language="javascript" />
               </div>
               
               <div className="bg-purple-900/20 border border-purple-500/20 p-6 rounded-2xl">
                  <h4 className="text-purple-300 font-bold mb-3 flex items-center gap-2">🔥 2. Use seal() for strict updates</h4>
                  <p className="text-gray-300 text-sm">When values can change over time, but the overall structure of the object never should.</p>
               </div>

               <div className="bg-purple-900/20 border border-purple-500/20 p-6 rounded-2xl">
                  <h4 className="text-purple-300 font-bold mb-3 flex items-center gap-2">🔥 3. Watch for Performance</h4>
                  <p className="text-gray-300 text-sm">Avoid overusing protection in performance-critical code or very large arrays. Freeze adds slight engine overhead.</p>
               </div>

               <div className="bg-purple-900/20 border border-purple-500/20 p-6 rounded-2xl">
                  <h4 className="text-purple-300 font-bold mb-3 flex items-center gap-2">🔥 4. Combine with Strict Mode</h4>
                  <CodeBlock code={`"use strict"; // Errors will be thrown`} language="javascript" />
               </div>
            </div>
         </div>

         {/* Real-World Use Cases */}
         <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-10 md:p-14 rounded-[3rem] shadow-xl relative w-full">
            <SectionHeader icon={Briefcase} title="🚀 Real-World Use Cases" color="text-rose-500" />
            <div className="grid md:grid-cols-3 gap-6">
               <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                     <CheckCircle className="text-green-500" size={18}/> 1. API Config
                  </h4>
                  <CodeBlock code={`const API_CONFIG = Object.freeze({\n  baseURL: "https://api.com",\n  timeout: 5000\n});`} />
               </div>
               <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                     <CheckCircle className="text-green-500" size={18}/> 2. React State (Redux)
                  </h4>
                  <CodeBlock code={`const state = Object.freeze({\n  user: "Karthick"\n});`} />
               </div>
               <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                     <CheckCircle className="text-green-500" size={18}/> 3. Security Data
                  </h4>
                  <CodeBlock code={`const roles = Object.freeze({\n  ADMIN: "admin",\n  USER: "user"\n});`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          INTEGRITY SECURED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-red-500/10 decoration-2">
          "Immutable and protected objects prevent hundreds of bugs before they ever reach production."
        </p>
      </footer>

    </div>
  );
};

export default JsObjectProtection;