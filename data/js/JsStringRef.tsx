import React, { useState } from 'react';
import { 
  Database, 
  Box, 
  Zap, 
  Layers, 
  RefreshCw, 
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
  Type,
  List,
  Binary,
  Share2,
  Copy,
  Lock,
  Unlock,
  Trash2
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
            {copied ? <CheckCircle size={14} className="text-green-400" /> : <Copy size={14} />}
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

const JsStringRef: React.FC = () => {
  const [memoryMode, setMemoryMode] = useState<'primitive' | 'reference'>('primitive');

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 animate-pulse tracking-[0.2em]">
          <Database size={14} className="fill-current" /> MEMORY ARCHITECTURE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          String <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 drop-shadow-2xl">
            Reference
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Unlock the secrets of how JavaScript stores text. Master <span className="text-gray-900 dark:text-white font-bold italic underline decoration-indigo-500/30">Value Types</span> vs <span className="text-gray-900 dark:text-white font-bold italic underline decoration-purple-500/30">Reference Types</span>.
        </p>
      </header>

      {/* ── Section 1: Definition ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. Value vs Reference" subtitle="Understanding the primitive behavior of strings." color="text-indigo-500" />
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                In JavaScript, a String is a primitive data type, meaning it is stored and handled **by value**, not by reference.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-3xl group hover:bg-indigo-500 transition-colors duration-500">
                    <Layers size={24} className="text-indigo-500 group-hover:text-white mb-4" />
                    <span className="text-[10px] font-black text-gray-400 group-hover:text-indigo-100 uppercase tracking-widest block mb-2">Immutable</span>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-white">Strings cannot be changed once created.</p>
                 </div>
                 <div className="p-6 bg-purple-500/5 border border-purple-500/10 rounded-3xl group hover:bg-purple-500 transition-colors duration-500">
                    <Copy size={24} className="text-purple-500 group-hover:text-white mb-4" />
                    <span className="text-[10px] font-black text-gray-400 group-hover:text-purple-100 uppercase tracking-widest block mb-2">Value Copies</span>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-white">Assignments create independent copies.</p>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-2xl space-y-8">
             <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-black italic tracking-tight flex items-center gap-2">
                   <Code2 size={24} className="text-indigo-500" /> Primitive Storage
                </h4>
                <div className="px-3 py-1 bg-indigo-500/10 text-indigo-500 rounded-full text-[10px] font-black">BY VALUE</div>
             </div>
             <CodeBlock title="Primitive Assignment" code={`let a = "Hello";
let b = a;

b = "World";

console.log(a); // "Hello" (Unchanged!)
console.log(b); // "World"`} />
             <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-center gap-4">
                <CheckCircle size={24} className="text-emerald-500" />
                <p className="text-xs font-black text-emerald-600 italic tracking-tight">Changing 'b' does NOT affect 'a'. This is Value Storage.</p>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Memory Visualization Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Activity} title="2. Memory Pointer Lab" subtitle="Visualize how pointers behave for different data types." color="text-indigo-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
             <div className="space-y-6">
                <div className="flex gap-4 p-2 bg-gray-100 dark:bg-gray-900 rounded-3xl w-fit border border-gray-200 dark:border-gray-800">
                   <button 
                     onClick={() => setMemoryMode('primitive')}
                     className={`px-6 py-3 rounded-2xl text-xs font-black transition-all ${memoryMode === 'primitive' ? 'bg-indigo-500 text-white shadow-xl shadow-indigo-500/30' : 'text-gray-500 hover:text-indigo-500'}`}
                   >
                     PRIMITIVE
                   </button>
                   <button 
                     onClick={() => setMemoryMode('reference')}
                     className={`px-6 py-3 rounded-2xl text-xs font-black transition-all ${memoryMode === 'reference' ? 'bg-purple-500 text-white shadow-xl shadow-purple-500/30' : 'text-gray-500 hover:text-purple-500'}`}
                   >
                     REFERENCE
                   </button>
                </div>
                <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 min-h-[220px] flex flex-col justify-center">
                   <h5 className="text-xl font-black italic mb-4 tracking-tighter text-indigo-500">
                      {memoryMode === 'primitive' ? "Strings (Value Copy)" : "Objects (Shared Reference)"}
                   </h5>
                   <p className="text-sm text-gray-400 font-medium leading-relaxed">
                      {memoryMode === 'primitive' 
                        ? "Assignments create a brand new slice of memory. Variables point to separate values." 
                        : "Variables share a pointer to the exact same memory location. Updating one updates all."}
                   </p>
                </div>
             </div>

             <div className="p-10 bg-gray-950 rounded-[3rem] border border-white/5 relative overflow-hidden min-h-[400px]">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                   <Share2 size={150} className="text-white" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-center items-center gap-12">
                   {memoryMode === 'primitive' ? (
                     <div className="flex flex-col gap-8 w-full animate-in slide-in-from-right duration-500">
                        <div className="flex items-center gap-6">
                           <div className="w-16 h-16 rounded-2xl bg-indigo-500 text-white flex items-center justify-center font-black text-2xl shadow-xl">a</div>
                           <ArrowRight className="text-white/20" />
                           <div className="px-8 py-4 rounded-full border border-indigo-500/40 text-indigo-400 font-mono font-bold italic tracking-tighter">"Hello"</div>
                        </div>
                        <div className="flex items-center gap-6">
                           <div className="w-16 h-16 rounded-2xl bg-indigo-500 text-white flex items-center justify-center font-black text-2xl shadow-xl">b</div>
                           <ArrowRight className="text-white/20" />
                           <div className="px-8 py-4 rounded-full border border-indigo-500/40 text-indigo-400 font-mono font-bold italic tracking-tighter">"Hello" (Copy)</div>
                        </div>
                     </div>
                   ) : (
                     <div className="flex flex-col gap-1 w-full animate-in slide-in-from-left duration-500">
                        <div className="flex justify-between items-center px-10 relative">
                           <div className="flex flex-col gap-8">
                             <div className="w-16 h-16 rounded-2xl bg-purple-500 text-white flex items-center justify-center font-black text-2xl shadow-xl z-20">obj1</div>
                             <div className="w-16 h-16 rounded-2xl bg-purple-500 text-white flex items-center justify-center font-black text-2xl shadow-xl z-20">obj2</div>
                           </div>
                           
                           <div className="absolute left-[80px] top-[30px] w-24 h-24 border-t-2 border-b-2 border-r-2 border-purple-500/40 rounded-r-3xl" />
                           
                           <div className="p-8 rounded-[2rem] bg-indigo-500 text-white shadow-2xl shadow-indigo-500/20 text-center font-mono italic font-bold">
                              {"{ name: 'John' }"}
                           </div>
                        </div>
                     </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Immutability Lab ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="space-y-8">
            <SectionHeader icon={Lock} title="3. Strings are Immutable" subtitle="The 'ReadOnly' nature of characters." color="text-rose-500" />
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
               <p className="text-gray-500 font-medium font-sans">
                  You cannot modify individual characters directly via index assignment. It's not allowed in JS.
               </p>
               <CodeBlock title="Direct Modification Fail" code={`let text = "Hello";

text[0] = "Y"; // ❌ Silently ignored

console.log(text); // "Hello"`} />
               <div className="p-6 bg-rose-500/5 border border-rose-500/10 rounded-2xl flex items-center gap-4">
                  <AlertTriangle size={24} className="text-rose-500 shrink-0" />
                  <p className="text-xs font-black text-rose-600 italic tracking-tight">Trying to update string[index] results in total failure—the original remains untouched.</p>
               </div>
            </div>
         </div>

         <div className="space-y-8">
            <SectionHeader icon={RefreshCw} title="4. How Changes Work" subtitle="Recreation instead of modification." color="text-sky-500" />
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8">
               <p className="text-gray-500 font-medium">
                  When you "change" a string, JavaScript actually builds a brand new string in memory.
               </p>
               <CodeBlock title="Concatenation Memory" code={`let text = "Hello";

text = text + " World";

console.log(text); // "Hello World"`} />
               <div className="flex gap-4">
                  <div className="flex-1 p-5 rounded-3xl bg-sky-500/10 border border-sky-500/20 text-center">
                     <span className="text-sky-500 font-black text-[10px] tracking-widest block uppercase mb-1 underline">Action</span>
                     <span className="text-xs font-bold text-gray-500 italic uppercase tracking-tighter font-mono underline decoration-sky-500/20 italic">"New memory allocated"</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: Primitive vs Object ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl">
           <SectionHeader icon={Box} title="5. The Object Trap" subtitle="Why you should avoid 'new String()'." color="text-amber-500" />
           <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                 <p className="text-gray-500 font-medium">
                    JavaScript allows creating strings as objects, but this leads to unpredictable comparison behavior.
                 </p>
                 <CodeBlock title="Type Differences" code={`let str1 = "Hello";              // primitive
let str2 = new String("Hello");  // object

console.log(typeof str1); // string
console.log(typeof str2); // object`} />
              </div>
              <div className="p-10 bg-gray-50 dark:bg-gray-900/50 rounded-[3rem] border border-gray-100 dark:border-gray-800 space-y-8">
                 <h5 className="text-xl font-black italic text-amber-500 tracking-tight underline">Equality Weirdness</h5>
                 <div className="space-y-4">
                    <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-xs font-black">
                       <span className="text-emerald-500">Primitive comparison:</span><br />
                       "Hello" === "Hello" // <span className="text-emerald-400">true</span>
                    </div>
                    <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-xs font-black">
                       <span className="text-rose-500">Object comparison:</span><br />
                       new String("H") === new String("H") // <span className="text-rose-400">false</span>
                    </div>
                 </div>
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Different memory addresses = False equality</p>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 5: Pass by Value ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={RefreshCw} title="6. Real-World Execution" subtitle="Functional behavior and pass-by-value." color="text-indigo-500" />
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
               <p className="text-gray-500 font-medium">
                  When passed to a function, strings are copied by value. Modifying the parameter inside does NOT affect the original.
               </p>
               <CodeBlock title="Functional Context" code={`function updateName(name) {
  name = "New Name";
}

let userName = "John";

updateName(userName);

console.log(userName); // "John"`} />
            </div>
            <div className="bg-indigo-950 p-12 rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-2xl h-full flex flex-col justify-center">
               <div className="absolute top-0 right-0 p-12 opacity-10">
                  <ShieldCheck size={180} className="text-indigo-400" />
               </div>
               <h4 className="text-3xl font-black text-white italic mb-10 tracking-tight">Methods & Safety 🛡️</h4>
               <p className="text-indigo-300 text-sm leading-relaxed mb-10 italic">
                  Strings methods always return **brand new values**. 
                  They never modify the instance they are called on.
               </p>
               <div className="space-y-4 relative z-10">
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/5 font-mono text-xs font-bold text-indigo-400">
                     let text = "hello";<br />
                     let upper = text.toUpperCase();<br />
                     text; // "hello" (Unchanged)
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* ── Section 6: Pro Recommendations ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="7. Pro Recommendations & Tips" subtitle="Handling memory like an engineer." color="text-indigo-500" />
        <div className="grid md:grid-cols-3 gap-8 mb-12">
           {[
             { title: "Strings = Immutable", desc: "Never try in-place modification. Always re-assign or use high-level methods.", icon: Lock, color: "text-rose-500 bg-rose-500/10" },
             { title: "Avoid new String()", desc: "It causes massive confusion during object-to-object comparison. Keep it primitive.", icon: Trash2, color: "text-amber-500 bg-amber-500/10" },
             { title: "Use Proper Methods", desc: "Leverage text.replace() or similar methods instead of trying pointer tricks.", icon: Zap, color: "text-sky-500 bg-sky-500/10" }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4">
                <div className={`p-4 rounded-2xl w-fit ${item.color}`}>
                   <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white tracking-tight italic underline decoration-indigo-500/10">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* ── Tips Lab footer ── */}
        <div className="bg-gray-950 p-12 rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-[0_0_50px_-12px_rgba(99,102,241,0.15)]">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
              <Zap size={200} className="text-indigo-500" />
           </div>
           <h4 className="text-2xl font-black text-white mb-10 flex items-center gap-4 italic tracking-tight">
              <Terminal size={24} className="text-indigo-500" /> Senior Architect Hacks
           </h4>
           <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                { label: "Safe Copy", text: "let copy = original;", icon: Copy, desc: "Already safe (Primitive)" },
                { label: "Efficient Join", text: "`${first} ${last}`", icon: Binary, desc: "Faster than concatenation" },
                { label: "Loop Warning", text: "Avoid re-allocation", icon: RefreshCw, desc: "Minimize loop creation" }
              ].map((tip, i) => (
                <div key={i} className="space-y-4 p-6 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-colors">
                   <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-lg">
                      <tip.icon size={22} />
                   </div>
                   <div>
                      <span className="text-white font-black text-lg block mb-1 tracking-tight">{tip.label}</span>
                      <code className="text-[10px] text-indigo-400 font-mono italic block mb-2">{tip.text}</code>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black italic">{tip.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
            Value is Constant.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
            Understanding that strings are primitives is the first step toward master-level memory management in JS.<br />
            Respect immutability, avoid constructor objects, and always think about memory allocation footprints.
         </p>
      </footer>

    </div>
  );
};

export default JsStringRef;