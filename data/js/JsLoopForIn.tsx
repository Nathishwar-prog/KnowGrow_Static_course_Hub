import React, { useState } from 'react';
import {
  Zap,
  Check,
  Copy,
  Info,
  Layers,
  Terminal,
  ArrowRight,
  Code2,
  Box,
  Layout,
  Database,
  Globe,
  Activity,
  AlertTriangle,
  CheckCircle,
  Package,
  RefreshCw,
  Eye,
  Target,
  CloudLightning,
  ShieldCheck,
  List,
  Network,
  GitBranch,
  Repeat,
  FunctionSquare,
  BoxSelect,
  AlertOctagon,
  Clock,
  MoreHorizontal,
  BookOpen,
  Lock,
  Ban,
  ShieldAlert,
  FileWarning,
  Compass,
  Link,
  Map,
  Search,
  Hash,
  LogIn,
  RotateCcw,
  ToggleLeft,
  ToggleRight,
  Cpu,
  Power,
  ArrowDownToLine,
  ChevronRight,
  Calculator,
  Aperture,
  Lightbulb,
  Settings,
  PlayCircle,
  Shuffle,
  Star,
  Scale,
  Key,
  KeyRound
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-fuchsia-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsLoopForIn: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#110611] min-h-screen font-sans selection:bg-fuchsia-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] font-black mb-8 border border-fuchsia-100 dark:border-fuchsia-900/50 shadow-xl shadow-fuchsia-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <KeyRound size={14} className="fill-current" /> OBJECT ITERATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          for...in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-purple-500 drop-shadow-2xl">
            Loop
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The ultimate tool for traversing object properties. Access <span className="text-gray-900 dark:text-white font-bold underline decoration-fuchsia-500 underline-offset-4 tracking-tight">keys and values</span> dynamically in JavaScript objects.
        </p>
      </header>

      {/* ── Section 1 & 2: What & Syntax ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl group-hover:bg-fuchsia-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-fuchsia-50 dark:bg-fuchsia-500/10 rounded-2xl text-fuchsia-500 w-max border border-fuchsia-100 dark:border-fuchsia-500/20 shadow-lg">
                 <Package size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is for...in Loop?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 The <code className="text-fuchsia-500 font-bold bg-fuchsia-50 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded">for...in</code> loop is used to iterate over the properties (<span className="font-bold text-fuchsia-500">keys</span>) of an object.
                 </p>
                 <div className="bg-purple-50 dark:bg-purple-500/5 p-5 rounded-2xl border border-purple-200 dark:border-purple-500/20">
                    <p className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-2 mb-2">
                       <Lightbulb size={18}/> Simple definition:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                       for...in = <span className="font-bold text-purple-600 dark:text-purple-400">loop through object keys</span>
                    </p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#180b18] p-10 rounded-[3rem] border border-fuchsia-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-5 p-6"><Settings size={150} className="text-fuchsia-500"/></div>
               <SectionHeader icon={Terminal} title="2. Syntax" subtitle="The blueprint." color="text-fuchsia-400" />
               <div className="relative z-10">
                  <CodeBlock code={`for (let key in object) {\n    // code to execute\n}`} />
               </div>
           </div>
        </div>
      </section>

      {/* ── Section 3, 4, 5: Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8">
         <div className="bg-gradient-to-br from-fuchsia-900/20 to-gray-900 p-8 border border-fuchsia-500/20 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-xl font-black text-white flex items-center gap-3 mb-4">
               <span className="bg-fuchsia-500/20 text-fuchsia-400 p-2 rounded-xl"><Key size={20}/></span> 3. Basic Example
            </h3>
            <p className="text-gray-400 font-medium text-sm mb-6">Iterating just the keys.</p>
            <CodeBlock code={`let person = {\n  name: "Karthick",\n  age: 21,\n  city: "Chennai"\n};\n\nfor (let key in person) {\n  console.log(key);\n}`} />
            <div className="mt-4 bg-black/40 p-4 rounded-xl border border-fuchsia-500/10">
               <p className="font-mono text-xs uppercase tracking-widest text-fuchsia-400 mb-2">Output</p>
               <div className="font-mono text-sm text-gray-300 space-y-1"><div>name</div><div>age</div><div>city</div></div>
            </div>
         </div>

         <div className="bg-gradient-to-br from-purple-900/20 to-gray-900 p-8 border border-purple-500/20 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-xl font-black text-white flex items-center gap-3 mb-4">
               <span className="bg-purple-500/20 text-purple-400 p-2 rounded-xl"><Eye size={20}/></span> 4. Access Values
            </h3>
            <p className="text-gray-400 font-medium text-sm mb-6">Using <code className="bg-black/50 px-1 rounded">object[key]</code> syntax.</p>
            <CodeBlock code={`for (let key in person) {\n  console.log(person[key]);\n}`} />
            <div className="mt-auto bg-black/40 p-4 rounded-xl border border-purple-500/10">
               <p className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-2">Output</p>
               <div className="font-mono text-sm text-gray-300 space-y-1"><div>Karthick</div><div>21</div><div>Chennai</div></div>
            </div>
         </div>

         <div className="bg-gradient-to-br from-pink-900/20 to-gray-900 p-8 border border-pink-500/20 rounded-[2.5rem] shadow-xl flex flex-col">
            <h3 className="text-xl font-black text-white flex items-center gap-3 mb-4">
               <span className="bg-pink-500/20 text-pink-400 p-2 rounded-xl"><Layers size={20}/></span> 5. Key + Value
            </h3>
            <p className="text-gray-400 font-medium text-sm mb-6">Combine both using template literals.</p>
            <CodeBlock code={`for (let key in person) {\n  console.log(\n    \`\${key}: \${person[key]}\`\n  );\n}`} />
            <div className="mt-auto bg-black/40 p-4 rounded-xl border border-pink-500/10">
               <p className="font-mono text-xs uppercase tracking-widest text-pink-400 mb-2">Output</p>
               <div className="font-mono text-sm text-gray-300 space-y-1"><div>name: Karthick</div><div>age: 21</div><div>city: Chennai</div></div>
            </div>
         </div>
      </section>

      {/* ── Section 6, 7, 8: Arrays vs Objects ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Scale size={250} className="text-amber-500"/></div>
            
            <SectionHeader icon={AlertTriangle} title="6. Using for...in with Arrays" subtitle="⚠️ Not Recommended" color="text-amber-500" />
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
               <div className="space-y-6">
                  <CodeBlock code={`let arr = ["A", "B", "C"];\n\nfor (let index in arr) {\n    console.log(index);\n}`} />
                  <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-2xl border border-rose-200 dark:border-rose-500/20">
                     <p className="font-mono text-rose-700 dark:text-rose-400 font-bold text-sm mb-2">Output: 0, 1, 2</p>
                     <p className="text-rose-800 dark:text-rose-200 font-medium text-sm">👉 It gives standard indexes as string keys, not absolute values!</p>
                  </div>
               </div>

               <div className="space-y-6 flex flex-col justify-center">
                  <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-200 dark:border-amber-500/20">
                     <h4 className="font-black text-amber-700 dark:text-amber-400 mb-4 flex items-center gap-2">⚠️ Why Avoid for Arrays?</h4>
                     <ul className="space-y-3 text-sm font-medium text-amber-900 dark:text-amber-200">
                        <li className="flex items-center gap-2"><span className="text-rose-500">❌</span> Order is not guaranteed</li>
                        <li className="flex items-center gap-2"><span className="text-rose-500">❌</span> Can include extra prototype properties</li>
                        <li className="flex items-center gap-2"><span className="text-rose-500">❌</span> Better alternative exists (for...of)</li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8 relative z-10">
               <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-500/20">
                  <h4 className="font-black text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">✅ 7. Correct Way for Arrays</h4>
                  <CodeBlock code={`for (let value of arr) {\n    console.log(value); // A, B, C\n}`} />
               </div>

               <div className="bg-[#180b18] p-8 rounded-3xl border border-fuchsia-500/20 shadow-inner overflow-hidden">
                  <h4 className="font-black text-fuchsia-400 mb-6 flex items-center gap-2">⚖️ 8. for...in vs for...of</h4>
                  <table className="w-full text-left text-sm">
                     <thead>
                        <tr className="bg-fuchsia-900/20">
                           <th className="p-4 font-black text-fuchsia-400 uppercase tracking-widest border-b border-fuchsia-500/10 text-xs">Feature</th>
                           <th className="p-4 font-black text-gray-400 uppercase tracking-widest border-b border-fuchsia-500/10 border-l border-fuchsia-500/10 text-xs text-center">in</th>
                           <th className="p-4 font-black text-gray-400 uppercase tracking-widest border-b border-fuchsia-500/10 border-l border-fuchsia-500/10 text-xs text-center">of</th>
                        </tr>
                     </thead>
                     <tbody className="font-medium text-gray-300 divide-y divide-fuchsia-500/10">
                        <tr>
                           <td className="p-4 font-bold text-white">Iterates</td>
                           <td className="p-4 border-l border-fuchsia-500/10 text-center font-bold text-fuchsia-300">Keys</td>
                           <td className="p-4 border-l border-fuchsia-500/10 text-center font-bold text-emerald-300">Values</td>
                        </tr>
                        <tr>
                           <td className="p-4 font-bold text-white">Used for</td>
                           <td className="p-4 border-l border-fuchsia-500/10 text-center">Objects</td>
                           <td className="p-4 border-l border-fuchsia-500/10 text-center">Arrays/Iterables</td>
                        </tr>
                        <tr>
                           <td className="p-4 font-bold text-white">Output</td>
                           <td className="p-4 border-l border-fuchsia-500/10 text-center text-xs">property names</td>
                           <td className="p-4 border-l border-fuchsia-500/10 text-center text-xs">actual values</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9: Checking Own Properties ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-gradient-to-br from-[#180b18] to-gray-900 border border-fuchsia-500/20 p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><ShieldCheck size={250} className="text-fuchsia-500"/></div>
            
            <SectionHeader icon={ShieldCheck} title="9. Checking Own Properties" subtitle="Playing it safe." color="text-fuchsia-400" />
            
            <div className="relative z-10">
                <p className="text-gray-300 font-medium mb-6">👉 Use <code className="text-fuchsia-400 bg-fuchsia-900/40 px-2 rounded">hasOwnProperty()</code> to avoid iterating through inherited properties from the object's prototype.</p>
                <CodeBlock code={`for (let key in obj) {\n    if (obj.hasOwnProperty(key)) {\n        console.log(key);\n    }\n}`} />
            </div>
         </div>
      </section>

      {/* ── Section 10 & 11: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-700 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Activity} title="10. Real-World Example" subtitle="Display User Data." color="text-fuchsia-500" />
            <CodeBlock code={`let user = {\n    username: "admin",\n    role: "developer"\n};\n\nfor (let key in user) {\n    console.log(\`\${key} → \${user[key]}\`);\n}\n\n// username → admin\n// role → developer`} />
         </div>

         <div className="bg-[#180b18] border border-fuchsia-500/20 p-10 rounded-[3rem] shadow-xl">
            <SectionHeader icon={Network} title="11. Common Use Cases" color="text-fuchsia-400" />
            
            <div className="mt-8 space-y-6">
               <div className="bg-black/20 p-5 rounded-2xl border border-fuchsia-500/10 hover:border-fuchsia-500/30 transition-colors">
                  <h4 className="font-black text-fuchsia-400 text-lg flex items-center gap-2 mb-2"><Database size={20}/> Object Data Processing</h4>
                  <p className="text-gray-300 font-medium">Extracting data pairs dynamically from API JSON responses.</p>
               </div>
               
               <div className="bg-black/20 p-5 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-colors">
                  <h4 className="font-black text-purple-400 text-lg flex items-center gap-2 mb-2"><Settings size={20}/> Configuration Handling</h4>
                  <p className="text-gray-300 font-medium">Iterating through a settings object to apply application rules.</p>
               </div>
               
               <div className="bg-black/20 p-5 rounded-2xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                  <h4 className="font-black text-pink-400 text-lg flex items-center gap-2 mb-2"><Layout size={20}/> Dynamic UI Rendering</h4>
                  <p className="text-gray-300 font-medium">Generating form fields or details tables dynamically based on object properties.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          KEY BY KEY
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-fuchsia-500/10 decoration-2">
          "The for...in loop is your Swiss Army knife for objects. It gives you the power to dynamically unpack and process data regardless of the object's schema."
        </p>
      </footer>

    </div>
  );
};

export default JsLoopForIn;