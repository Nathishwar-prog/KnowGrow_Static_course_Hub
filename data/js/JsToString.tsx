import React, { useState, useMemo } from 'react';
import { 
  Zap, 
  RefreshCw, 
  HelpCircle, 
  CheckCircle, 
  AlertTriangle, 
  Code2, 
  Terminal, 
  Activity, 
  Table, 
  Eye, 
  ShieldCheck, 
  PlusCircle, 
  MinusCircle, 
  ArrowRight,
  Info,
  Copy,
  Check,
  Hash,
  Layers,
  Box,
  Binary,
  Cpu,
  Database,
  Layout,
  Settings,
  Type
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

const JsToString: React.FC = () => {
  const [numInput, setNumInput] = useState<number>(255);
  const [base, setBase] = useState<number>(2);

  const baseResult = useMemo(() => {
    try {
      return numInput.toString(base);
    } catch (e) {
      return "Error";
    }
  }, [numInput, base]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 animate-pulse tracking-[0.2em]">
          <Type size={14} className="fill-current" /> STRING MANIPULATION CORE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-sky-600 drop-shadow-2xl">
            toString()
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The essential method to convert <span className="text-gray-900 dark:text-white font-bold">Numbers</span>, <span className="text-gray-900 dark:text-white font-bold">Arrays</span>, and <span className="text-gray-900 dark:text-white font-bold">Booleans</span> into readable string formats.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is toString()?" subtitle="A fundamental bridge between data types and text." color="text-indigo-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                <code>toString()</code> is a JavaScript method used to convert a value into a string. It is available on almost all built-in data types.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: "Numbers", icon: Hash, desc: '100 ➔ "100"' },
                   { label: "Arrays", icon: Layers, desc: '[1,2] ➔ "1,2"' },
                   { label: "Booleans", icon: CheckCircle, desc: 'true ➔ "true"' },
                   { label: "Objects", icon: Box, desc: '{..} ➔ "[object]"' }
                 ].map((item, i) => (
                   <div key={i} className="p-5 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20">
                         <item.icon size={18} />
                      </div>
                      <div>
                         <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">{item.label}</span>
                         <span className="font-mono text-xs font-black text-gray-900 dark:text-white">{item.desc}</span>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-2xl">
               <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <Terminal size={24} className="text-indigo-500" /> Basic Syntax
               </h3>
               <CodeBlock code={`value.toString()`} />
               <div className="p-8 bg-gray-950 rounded-[2.5rem] border border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-black text-white/30 tracking-widest uppercase mb-4">
                     <span>Code Script</span>
                     <span className="text-indigo-500 font-mono tracking-normal">number_to_str.js</span>
                  </div>
                  <div className="space-y-4 font-mono text-sm">
                     <div className="flex items-center gap-4">
                        <span className="text-gray-600">1</span>
                        <span className="text-white">let num = 100;</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <span className="text-gray-600">2</span>
                        <span className="text-white">let res = num.<span className="text-sky-400 font-bold tracking-tighter italic">toString</span>();</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <span className="text-gray-600">3</span>
                        <span className="text-gray-500 italic">// Output: "100"</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Base Conversion Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Binary} title="2. Number Base Conversion" subtitle="Unlocking the powerful radices within numbers." color="text-indigo-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
             <div className="space-y-8">
                <p className="text-gray-500 font-medium leading-relaxed">
                  The most powerful feature of <code>Number.toString()</code> is base conversion. You can convert any base-10 number into Binary, Octal, or Hexadecimal.
                </p>
                <div className="p-10 bg-gray-50 dark:bg-gray-900/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 space-y-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Input Number</label>
                      <input 
                        type="number" 
                        value={numInput} 
                        onChange={(e) => setNumInput(Number(e.target.value))}
                        className="w-full p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-2xl font-black text-indigo-500"
                      />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Select Target Base (Radix)</label>
                      <div className="grid grid-cols-3 gap-3">
                         {[
                           { label: "Binary (2)", val: 2 },
                           { label: "Octal (8)", val: 8 },
                           { label: "Hex (16)", val: 16 }
                         ].map((b) => (
                           <button 
                            key={b.val}
                            onClick={() => setBase(b.val)}
                            className={`p-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                              base === b.val 
                                ? 'bg-indigo-500 text-white shadow-xl shadow-indigo-500/40 scale-105' 
                                : 'bg-white dark:bg-gray-700 text-gray-500 hover:bg-gray-100'
                            }`}
                           >
                              {b.label}
                           </button>
                         ))}
                      </div>
                   </div>
                </div>
                <div className="p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-3xl">
                   <p className="text-indigo-600 dark:text-indigo-400 text-sm font-black flex items-center gap-2 italic">
                      <Zap size={18} /> Useful for Cryptography, Color codes (#ff0000), and Low-level programming.
                   </p>
                </div>
             </div>

             <div className="bg-gray-950 p-12 rounded-[3.5rem] border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
                   <Binary size={200} className="text-indigo-500" />
                </div>
                <div className="relative z-10 space-y-12">
                   <div className="flex justify-between items-center text-[10px] font-black text-white/20 tracking-[0.4em] uppercase">
                      <span>Conversion Logic</span>
                      <span className="text-indigo-500">RADIX: {base}</span>
                   </div>
                   <div className="space-y-6">
                      <span className="text-sm font-black text-gray-500 font-mono italic">({numInput}).toString({base})</span>
                      <div className="text-6xl sm:text-7xl font-black text-white tracking-tighter break-all">
                         {baseResult}
                      </div>
                   </div>
                   <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-emerald-500 font-mono text-sm">Success: Value converted to base-{base} string.</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Arrays & Booleans ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
        <div>
          <SectionHeader icon={Layers} title="3. Arrays to String" subtitle="Automatic comma separation." color="text-amber-500" />
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
             <p className="text-gray-500 font-medium">Arrays are converted into a simple comma-separated string of their elements.</p>
             <CodeBlock code={`let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"`} />
             <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/30 font-mono text-xs text-amber-600">
                <span className="font-black">Output:</span> "1,2,3"
             </div>
          </div>
        </div>

        <div>
           <SectionHeader icon={CheckCircle} title="4. Boolean to String" subtitle="Simple textual representation." color="text-emerald-500" />
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
              <p className="text-gray-500 font-medium">True and False values are converted directly into their string equivalents.</p>
              <CodeBlock code={`let val = true;
console.log(val.toString()); // "true"`} />
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 font-mono text-xs text-emerald-600">
                 <span className="font-black">Output:</span> "true"
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4: The Object Trap ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-gradient-to-br from-indigo-950 to-black p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <Box size={300} className="text-white" />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl font-black text-white italic tracking-tight">5. The "Object Trap" ⚠️</h2>
                <p className="text-gray-400 text-lg font-medium leading-relaxed">
                   By default, <code>toString()</code> on objects is rarely what you want. It returns the internal class name instead of the object content.
                </p>
                <div className="space-y-4">
                   <div className="flex items-center gap-4 text-rose-400 font-black text-sm italic">
                      <MinusCircle size={20} /> toString() outputs "[object Object]"
                   </div>
                   <div className="flex items-center gap-4 text-emerald-400 font-black text-sm italic">
                      <CheckCircle size={20} /> JSON.stringify() outputs readable content
                   </div>
                </div>
                <div className="p-6 bg-indigo-500/10 rounded-3xl border border-indigo-500/20">
                   <span className="text-indigo-400 font-black text-xs uppercase tracking-widest block mb-1 underline pb-2">Better Alternative</span>
                   <code className="text-white font-mono text-sm tracking-tighter italic">JSON.stringify(obj);</code>
                </div>
             </div>
             <div className="space-y-6">
                <CodeBlock title="Common Mistsake" code={`let obj = { name: "John" };
console.log(obj.toString()); // "[object Object]"`} />
                <CodeBlock title="The Professional Way" code={`let obj = { name: "John" };
console.log(JSON.stringify(obj)); // '{"name":"John"}'`} />
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Safety First ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="6. Important Safety Rules" subtitle="Avoiding the most common runtime crashes." color="text-rose-500" />
        <div className="grid md:grid-cols-2 gap-12 mt-12">
           <div className="p-10 bg-rose-50 dark:bg-rose-900/10 rounded-[3rem] border border-rose-100 dark:border-rose-900/30 space-y-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-30">
                 <AlertTriangle size={32} className="text-rose-500" />
              </div>
              <h4 className="text-2xl font-black text-rose-900 dark:text-rose-400 italic">The Crash: null & undefined</h4>
              <p className="text-rose-700/80 dark:text-rose-500/80 font-medium">
                 Calling <code>toString()</code> on null or undefined will throw an immediate <strong>TypeError</strong>.
              </p>
              <div className="p-5 bg-white dark:bg-gray-950 rounded-2xl border border-rose-200 dark:border-rose-800 font-mono text-xs text-rose-500 leading-relaxed">
                 null.toString(); &nbsp; // ❌ Uncaught TypeError <br />
                 undefined.toString(); // ❌ Uncaught TypeError
              </div>
           </div>

           <div className="p-10 bg-emerald-50 dark:bg-emerald-900/10 rounded-[3rem] border border-emerald-100 dark:border-emerald-900/30 space-y-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-30">
                 <ShieldCheck size={32} className="text-emerald-500" />
              </div>
              <h4 className="text-2xl font-black text-emerald-900 dark:text-emerald-400 italic">The Fix: String()</h4>
              <p className="text-emerald-700/80 dark:text-emerald-500/80 font-medium text-sm">
                 Use the global <code>String()</code> constructor for safe conversion that avoids runtime errors.
              </p>
              <div className="p-5 bg-white dark:bg-gray-950 rounded-2xl border border-emerald-200 dark:border-emerald-800 font-mono text-xs text-emerald-500 leading-relaxed">
                 String(null); &nbsp; &nbsp; &nbsp;// "null" <br />
                 String(undefined); // "undefined"
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700">
          <SectionHeader icon={Activity} title="7. Real-World Logic" subtitle="Formatting data for your UI." color="text-indigo-500" />
          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
             <div className="space-y-8">
                <p className="text-lg text-gray-500 font-medium leading-relaxed italic">
                   "You often need to turn numbers into strings when concatenating currency symbols or building template strings for your interface."
                </p>
                <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-[3rem] border border-gray-100 dark:border-gray-800 flex items-center gap-8">
                   <div className="p-6 rounded-[2rem] bg-indigo-500 text-white shadow-2xl">
                      <Hash size={32} />
                   </div>
                   <div>
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Price (Number)</span>
                      <span className="text-3xl font-black text-gray-900 dark:text-white">500</span>
                   </div>
                   <ArrowRight size={24} className="text-gray-300" />
                   <div>
                      <span className="text-xs font-black text-indigo-500 uppercase tracking-widest block mb-1 italic underline">Display String</span>
                      <span className="text-3xl font-black text-indigo-500">₹500</span>
                   </div>
                </div>
             </div>
             <div>
                <CodeBlock title="UI Implementation" code={`let price = 500;

// Display in UI
let display = "₹" + price.toString();

console.log(display); // "₹500"`} />
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Viz Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Table} title="8. Quick Visualization" subtitle="The transformation results at a glance." color="text-indigo-600" />
          
          <div className="overflow-x-auto mt-10">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-b border-gray-100 dark:border-gray-700">
                   <th className="py-5 px-6 text-sm font-black text-gray-400 uppercase tracking-widest">Original Type</th>
                   <th className="py-5 px-6 text-sm font-black text-gray-400 uppercase tracking-widest italic">Method</th>
                   <th className="py-5 px-6 text-sm font-black text-indigo-500 uppercase tracking-widest">String Result</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                 {[
                   { type: 'Number', method: "num.toString()", result: '"100"' },
                   { type: 'Array', method: "arr.toString()", result: '"1,2,3"' },
                   { type: 'Boolean', method: "val.toString()", result: '"true"' },
                   { type: 'Object', method: "obj.toString()", result: '"[object Object]"' },
                 ].map((row, i) => (
                   <tr key={i} className="group hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                     <td className="py-6 px-6 font-mono text-gray-900 dark:text-white font-bold">{row.type}</td>
                     <td className="py-6 px-6 text-gray-500 text-sm italic font-medium">{row.method}</td>
                     <td className="py-6 px-6 font-mono text-indigo-500 font-black">{row.result}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* ── Section 8: Recommendations ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={Settings} title="9. Recommendations & Pro Tips" subtitle="How to code gracefully with strings." color="text-indigo-500" />
        <div className="grid md:grid-cols-3 gap-8 mb-12">
           {[
             { title: "Numbers Only", desc: "Best to use toString() for Numbers when you're 100% sure the value exists.", icon: Hash, color: "text-blue-500 bg-blue-500/10" },
             { title: "Safety First", desc: "Use String(value) as a safety blanket. It won't crash on null/undefined.", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-500/10" },
             { title: "Avoid Object.ts", desc: "Always reach for JSON.stringify() when debugging or sending to APIs.", icon: Box, color: "text-rose-500 bg-rose-500/10" }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4">
                <div className={`p-4 rounded-2xl w-fit ${item.color}`}>
                   <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white tracking-tight italic underline decoration-indigo-500/30">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* ── Tips Lab ── */}
        <div className="bg-gray-950 p-10 rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)]">
           <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
              <Zap size={200} className="text-indigo-500" />
           </div>
           <h4 className="text-2xl font-black text-white mb-10 flex items-center gap-4 italic tracking-tight">
              <Terminal size={24} className="text-indigo-500" /> Advanced Tips & Tricks
           </h4>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { label: "Quick Hack", code: 'val + ""', icon: Zap },
                { label: "Base Trick", code: "(255).toString(16)", icon: Binary },
                { label: "Debugging", code: "console.log(val.toString())", icon: Cpu },
                { label: "Modern Way", code: "`${value}`", icon: Layout }
              ].map((tip, i) => (
                <div key={i} className="space-y-3">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                      <tip.icon size={20} />
                   </div>
                   <div>
                      <span className="text-white font-black text-sm block">{tip.label}</span>
                      <code className="text-[10px] text-gray-500 font-mono italic underline">{tip.code}</code>
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
           Consistency is Logic.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
           Mastering how values become text is the first step in building communicative interfaces.<br />
           Use the right conversion tool to ensure your code is both efficient and crash-proof.
         </p>
      </footer>

    </div>
  );
};

export default JsToString;