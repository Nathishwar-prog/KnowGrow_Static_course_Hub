import React, { useState, useMemo } from 'react';
import { 
  Type, 
  Hash, 
  Scissors, 
  RefreshCw, 
  Zap, 
  ShieldCheck, 
  Terminal, 
  Activity, 
  Layout, 
  Info, 
  ArrowRight,
  Code2,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  Cpu,
  Eye,
  List,
  Binary,
  Layers,
  Box,
  Trash2,
  Filter,
  MousePointer2,
  Search,
  BookOpen,
  Check
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
            {copied ? <Check size={14} className="text-green-400" /> : <Package size={14} />}
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

const JsStringMethods: React.FC = () => {
  const [playgroundText, setPlaygroundText] = useState("  JavaScript is Fun  ");
  const [activeMethod, setActiveMethod] = useState("trim");

  const methods = [
    { id: "trim", label: "trim()", desc: "Removes whitespace from both ends.", group: "Cleaning" },
    { id: "toUpperCase", label: "toUpperCase()", desc: "Converts text to Uppercase.", group: "Transform" },
    { id: "toLowerCase", label: "toLowerCase()", desc: "Converts text to Lowercase.", group: "Transform" },
    { id: "length", label: "length", desc: "Returns the number of characters.", group: "Metadata" },
    { id: "slice", label: "slice(0, 10)", desc: "Extracts a section (ends at 10).", group: "Extraction" },
    { id: "split", label: "split(' ')", desc: "Splits into an array by space.", group: "Array" },
    { id: "repeat", label: "repeat(2)", desc: "Repeats the string twice.", group: "Utilities" }
  ];

  const playgroundResult = useMemo(() => {
    switch (activeMethod) {
      case "trim": return `"${playgroundText.trim()}"`;
      case "toUpperCase": return `"${playgroundText.toUpperCase()}"`;
      case "toLowerCase": return `"${playgroundText.toLowerCase()}"`;
      case "length": return playgroundText.length.toString();
      case "slice": return `"${playgroundText.slice(0, 10)}"`;
      case "split": return JSON.stringify(playgroundText.split(' '));
      case "repeat": return `"${playgroundText.repeat(2)}"`;
      default: return playgroundText;
    }
  }, [playgroundText, activeMethod]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <BookOpen size={14} className="fill-current" /> STRING UTILITY TOOLKIT
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          String <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 drop-shadow-2xl">
            Methods
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The ultimate toolkit for <span className="text-gray-900 dark:text-white font-bold italic underline decoration-sky-500/30">manipulating</span>, <span className="text-gray-900 dark:text-white font-bold italic underline decoration-blue-500/30">cleaning</span>, and <span className="text-gray-900 dark:text-white font-bold italic underline decoration-indigo-500/30">transforming</span> text.
        </p>
      </header>

      {/* ── Section 1: Definition ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What are String Methods?" subtitle="Internal functions for text processing." color="text-sky-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                String methods are built-in functions used to manipulate and work with text (strings). 
              </p>
              <div className="p-6 bg-rose-500/5 border border-rose-500/10 rounded-3xl flex items-center gap-4 group hover:bg-rose-500/10 transition-colors">
                 <div className="p-4 rounded-2xl bg-rose-500 text-white shadow-xl shadow-rose-500/20">
                    <ShieldCheck size={24} />
                 </div>
                 <p className="text-sm font-black text-rose-600 italic tracking-tight">
                    Crucial: Strings are immutable. Methods always return a brand new string, leaving the original untouched.
                 </p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#1e1e1e] p-10 rounded-[3rem] border border-white/5 shadow-2xl">
               <div className="flex justify-between items-center mb-8">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Core Meta Example</span>
               </div>
               <CodeBlock title="Basic Measurement" code={`let text = "Hello";

console.log(text.length); // 5`} />
               <div className="flex items-center gap-4 p-4 mt-6 bg-white/5 rounded-2xl border border-white/5">
                  <Hash size={18} className="text-sky-500" />
                  <span className="text-xs font-mono font-bold text-gray-400">Length counts all characters (including spaces).</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Interactive Playground ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Activity} title="2. Method Playground" subtitle="Apply transformations to live text in real-time." color="text-sky-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
             <div className="space-y-8">
                <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 space-y-6">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block italic underline decoration-sky-500/20">Your Input String</label>
                      <input 
                        type="text" 
                        value={playgroundText} 
                        onChange={(e) => setPlaygroundText(e.target.value)}
                        className="w-full p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 font-mono text-xl font-black text-sky-600 focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-xl"
                      />
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                   {methods.map((m) => (
                      <button 
                        key={m.id}
                        onClick={() => setActiveMethod(m.id)}
                        className={`p-4 rounded-2xl text-left transition-all ${activeMethod === m.id ? 'bg-sky-500 text-white shadow-xl shadow-sky-500/40 ring-4 ring-sky-500/20' : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-500 hover:border-sky-200 hover:bg-sky-50'}`}
                      >
                         <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-black">{m.label}</span>
                            <span className={`text-[8px] font-black uppercase tracking-tighter px-1.5 py-0.5 rounded ${activeMethod === m.id ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}>{m.group}</span>
                         </div>
                         <p className={`text-[10px] leading-tight ${activeMethod === m.id ? 'text-white/70' : 'text-gray-400'}`}>{m.desc}</p>
                      </button>
                   ))}
                </div>
             </div>

             <div className="bg-gray-950 p-12 rounded-[3.5rem] border border-white/5 space-y-8 sticky top-10">
                <div className="flex justify-between items-center">
                   <div className="flex flex-col">
                      <span className="text-sky-500 font-black text-[10px] uppercase tracking-[0.3em]">Runtime Result</span>
                      <span className="text-white/20 text-[10px] font-mono italic">activeMethod: str.{activeMethod}()</span>
                   </div>
                   <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-sky-500">
                      <Zap size={20} />
                   </div>
                </div>
                
                <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/5 relative min-h-[150px] flex items-center justify-center overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Activity size={120} className="text-sky-500" />
                   </div>
                   <div className="font-mono text-3xl font-black text-sky-400 break-all text-center animate-in zoom-in duration-300">
                      {playgroundResult}
                   </div>
                </div>
                
                <div className="flex items-center gap-4 p-5 bg-sky-500/5 rounded-2xl border border-sky-500/10">
                   <Info size={18} className="text-sky-500 shrink-0" />
                   <p className="text-[10px] font-black text-sky-500/80 italic tracking-tight uppercase">
                      Changes only affect the return value. The source remains exactly: "{playgroundText}"
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Eye} title="3. Positional Mapping" subtitle="Understanding index geometry." color="text-indigo-500" />
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl overflow-x-auto overflow-y-hidden">
           <div className="inline-flex flex-col gap-6">
              <div className="flex gap-2">
                 {"JavaScript".split("").map((char, i) => (
                    <div key={i} className="w-12 h-16 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-center font-mono text-2xl font-black text-indigo-500 shadow-sm relative group">
                       <span className="group-hover:scale-125 transition-transform">{char}</span>
                    </div>
                 ))}
              </div>
              <div className="flex gap-2">
                 {"JavaScript".split("").map((_, i) => (
                    <div key={i} className="w-12 h-10 flex items-center justify-center font-mono text-[10px] font-black text-gray-400 bg-gray-50/30 dark:bg-gray-900/10 rounded-xl">
                       {i}
                    </div>
                 ))}
              </div>
           </div>
           <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl">
                 <div className="p-3 bg-sky-500 text-white rounded-xl"><Scissors size={18} /></div>
                 <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">charAt(1)</span>
                    <span className="font-mono text-lg font-black text-sky-500">➔ "a"</span>
                 </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl">
                 <div className="p-3 bg-indigo-500 text-white rounded-xl"><Hash size={18} /></div>
                 <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">indexOf("S")</span>
                    <span className="font-mono text-lg font-black text-indigo-500">➔ 4</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4: All Core Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {[
           { title: "Transformation", icon: RefreshCw, methods: [
             { m: "toUpperCase()", d: "Upper case", ex: '"hello" ➔ "HELLO"' },
             { m: "toLowerCase()", d: "Lower case", ex: '"BYE" ➔ "bye"' },
             { m: "trim()", d: "Space remover", ex: '" Hi " ➔ "Hi"' }
           ]},
           { title: "Slicing & Subsets", icon: Scissors, methods: [
             { m: "slice(0, 4)", d: "Flexible extraction", ex: '"Java" from "JavaScript"' },
             { m: "substring(4, 10)", d: "Subset extraction", ex: '"Script" from "JavaScript"' },
             { m: "charAt(index)", d: "Single character", ex: '"e" from "Hello"' }
           ]},
           { title: "Finding & Checks", icon: Search, methods: [
             { m: "includes()", d: "True/False check", ex: 'Includes "JS"?' },
             { m: "startsWith()", d: "Beginning check", ex: 'Starts with "Java"?' },
             { m: "endsWith()", d: "Ending check", ex: 'Ends with "Script"?' }
           ]},
           { title: "Replacement", icon: RefreshCw, methods: [
             { m: "replace()", d: "First match", ex: '"World" ➔ "JS"' },
             { m: "replaceAll()", d: "All occurrences", ex: '"apple" ➔ "orange"' }
           ]},
           { title: "Structural", icon: Layers, methods: [
             { m: "split()", d: "Convert to array", ex: '"Red,Blue" ➔ ["Red", "Blue"]' },
             { m: "concat()", d: "Combine strings", ex: '"A" + "B" ➔ "AB"' }
           ]}
         ].map((group, i) => (
           <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 flex flex-col group">
              <div className="flex items-center gap-4 mb-2">
                 <div className="p-4 bg-sky-500/10 text-sky-500 rounded-2xl shadow-lg group-hover:rotate-12 transition-transform">
                   <group.icon size={24} />
                 </div>
                 <h4 className="text-xl font-black italic tracking-tight">{group.title}</h4>
              </div>
              <div className="space-y-4">
                 {group.methods.map((method, mi) => (
                   <div key={mi} className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-xs font-black text-sky-600 font-mono italic underline lowercase tracking-tight">{method.m}</span>
                         <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{method.d}</span>
                      </div>
                      <p className="text-[10px] font-bold text-gray-500 italic mt-1 uppercase tracking-tighter decoration-sky-500/20 underline italic">{method.ex}</p>
                   </div>
                 ))}
              </div>
           </div>
         ))}
      </section>

      {/* ── Section 5: Real-World Use ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layout} title="4. Real-World Applications" subtitle="Deploying methods in production logic." color="text-emerald-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 group">
               <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl w-fit"><Filter size={24} /></div>
               <h4 className="text-2xl font-black italic tracking-tight">Form Cleaning</h4>
               <p className="text-gray-500 text-sm font-medium">Auto-formatting user input to prevent database duplicates.</p>
               <CodeBlock code={`let input = "  john  ";
let clean = input.trim().toUpperCase();
// "JOHN"`} />
            </div>

            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 group">
               <div className="p-4 bg-sky-500/10 text-sky-500 rounded-2xl w-fit"><Binary size={24} /></div>
               <h4 className="text-2xl font-black italic tracking-tight">CSV to Array</h4>
               <p className="text-gray-500 text-sm font-medium">Converting data strings into structured iterable arrays.</p>
               <CodeBlock code={`let data = "red,green,blue";
let colors = data.split(",");
// ["red", "green", "blue"]`} />
            </div>

            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 group lg:col-span-full xl:col-span-1">
               <div className="p-4 bg-indigo-500/10 text-indigo-500 rounded-2xl w-fit"><RefreshCw size={24} /></div>
               <h4 className="text-2xl font-black italic tracking-tight">UI Replacement</h4>
               <p className="text-gray-500 text-sm font-medium">Dynamic updates for message templates and user handles.</p>
               <CodeBlock code={`let msg = "Welcome user";
console.log(msg.replace("user", "Issac"));
// "Welcome Issac"`} />
            </div>
        </div>
      </section>

      {/* ── Section 6: Comparisons ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-gray-950 p-12 rounded-[4rem] shadow-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
               <Binary size={300} className="text-white" />
            </div>
            <SectionHeader icon={Info} title="5. Crucial Differences" subtitle="Choosing the right tool for the job." color="text-amber-400" />
            
            <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center relative z-10">
               <div className="space-y-4">
                  <h5 className="text-white font-black text-2xl italic tracking-tight">slice() vs substring()</h5>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                     While similar, <code>slice()</code> is vastly more flexible for modern developers.
                  </p>
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           <th className="py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Feature</th>
                           <th className="py-4 text-[10px] font-black text-sky-400 uppercase tracking-widest text-center">slice</th>
                           <th className="py-4 text-[10px] font-black text-amber-400 uppercase tracking-widest text-center">substring</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5 font-mono text-xs">
                        <tr>
                           <td className="py-4 text-gray-400 italic">Negative Index</td>
                           <td className="py-4 text-emerald-400 font-black text-center">✅ Yes</td>
                           <td className="py-4 text-rose-400 font-black text-center">❌ No</td>
                        </tr>
                        <tr>
                           <td className="py-4 text-gray-400 italic">Preferred Use</td>
                           <td className="py-4 text-sky-400 font-black text-center italic tracking-widest">ADVANCED</td>
                           <td className="py-4 text-amber-400 font-black text-center italic tracking-widest">BASIC</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div className="p-8 bg-white/5 rounded-[3rem] border border-white/5">
                  <h5 className="text-white font-black text-xl italic mb-6 tracking-tight">Template Optimization</h5>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 px-1">
                     Prefer template strings (backticks) over manual <code>concat()</code> for better performance and readability.
                  </p>
                  <CodeBlock title="Modern Syntax" code={`// ❌ Deprecated Style
console.log(a.concat(" ", b));

// ✅ Modern Expert Style
console.log(\`\${a} \${b}\`);`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7: Pro Recommendations ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="6. Pro Recommendations & Tips" subtitle="Engineering expert-level text logic." color="text-sky-500" />
        <div className="grid md:grid-cols-3 gap-8 mb-12">
           {[
             { title: "Normalize Input", desc: "Always call trim() before processing user inputs to prevent invisible whitespace bugs.", icon: Filter, color: "text-emerald-500 bg-emerald-500/10" },
             { title: "Boolean Existence", desc: "Use includes() for existence checks. It's significantly cleaner than indexOf() !== -1.", icon: Search, color: "text-indigo-500 bg-indigo-500/10" },
             { title: "Avoid concat()", desc: "Template strings provide superior readability and performance in modern engines.", icon: RefreshCw, color: "text-rose-500 bg-rose-500/10" }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4">
                <div className={`p-4 rounded-2xl w-fit ${item.color}`}>
                   <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white tracking-tight italic underline decoration-sky-500/10">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* ── Tips Lab footer ── */}
        <div className="bg-gray-950 p-12 rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-[0_0_50px_-12px_rgba(14,165,233,0.15)]">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
              <Zap size={200} className="text-sky-500" />
           </div>
           <h4 className="text-2xl font-black text-white mb-10 flex items-center gap-4 italic tracking-tight uppercase">
              <Terminal size={24} className="text-sky-500" /> Advanced Hacks
           </h4>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { label: "Method Chaining", code: "text.trim().toLowerCase()", icon: Activity },
                { label: "String to Array", code: "[...text]", icon: Box },
                { label: "Repeating", code: '"Hi ".repeat(3)', icon: RefreshCw },
                { label: "Padding", code: '"5".padStart(3, "0")', icon: Layout }
              ].map((tip, i) => (
                <div key={i} className="space-y-3 p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                   <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center text-xs shadow-lg">
                      <tip.icon size={18} />
                   </div>
                   <div>
                      <span className="text-white font-black text-sm block mb-1 tracking-tighter italic">{tip.label}</span>
                      <code className="text-[10px] text-gray-500 font-mono italic underline decoration-sky-500/20">{tip.code}</code>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
            Immutable & Powerful.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose font-sans">
            String methods are the foundation of sophisticated text parsing and UI manipulation.<br />
            Understand the geometry of indices, leverage template strings, and always treat text as immutable.
         </p>
      </footer>

    </div>
  );
};

export default JsStringMethods;