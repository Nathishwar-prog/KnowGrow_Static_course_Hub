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
  Cpu,
  Database,
  Layout,
  MousePointer2,
  Lock,
  Search
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

const JsTypeConversion: React.FC = () => {
  const [val1, setVal1] = useState<any>("5");
  const [val2, setVal2] = useState<any>(2);
  const [operator, setOperator] = useState<'+' | '-' | '*' | '/' | '=='>('+');

  const result = useMemo(() => {
    try {
      if (operator === '+') return val1 + val2;
      if (operator === '-') return val1 - val2;
      if (operator === '*') return val1 * val2;
      if (operator === '/') return val1 / val2;
      if (operator === '==') return val1 == val2;
      return "Error";
    } catch (e) {
      return "Error";
    }
  }, [val1, val2, operator]);

  const typeResult = typeof result;

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 animate-pulse tracking-[0.2em]">
          <RefreshCw size={14} className="fill-current" /> MASTERING DYNAMIC LOGIC
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Type<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-600 drop-shadow-2xl">
            Conversion
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The art of transforming values from one type to another, either through <span className="text-gray-900 dark:text-white font-bold">Explicit Methods</span> or the "magic" of <span className="text-gray-900 dark:text-white font-bold">Coercion</span>.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What is Type Conversion?" subtitle="The core mechanism of JavaScript's dynamic typing." color="text-amber-500" />
            <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Type Conversion is the process of converting a value from one data type (like a <span className="text-amber-500 font-black">String</span>) into another (like a <span className="text-amber-500 font-black">Number</span>).
              </p>
              <div className="grid grid-cols-3 gap-3">
                 {[
                   { from: '"10"', to: '10' },
                   { from: 'true', to: '1' },
                   { from: 'null', to: '0' }
                 ].map((item, i) => (
                   <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center">
                      <span className="text-xs font-black text-gray-400 mb-1 uppercase tracking-widest">From</span>
                      <span className="font-mono text-rose-500 font-bold mb-2">{item.from}</span>
                      <ArrowRight size={14} className="text-gray-300 mb-2" />
                      <span className="text-xs font-black text-gray-400 mb-1 uppercase tracking-widest">To</span>
                      <span className="font-mono text-emerald-500 font-bold">{item.to}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500">
               <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-amber-500 text-white shadow-lg">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">1. Implicit Conversion</h4>
                    <span className="text-xs font-black text-amber-500 uppercase tracking-widest">(Type Coercion)</span>
                  </div>
               </div>
               <p className="text-sm text-gray-500 font-medium mb-6">JavaScript automatically converts types depending on the operation.</p>
               <CodeBlock code={`let result = "5" + 2; // "52"`} />
            </div>

            <div className="group bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500">
               <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-500 text-white shadow-lg">
                    <MousePointer2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">2. Explicit Conversion</h4>
                    <span className="text-xs font-black text-blue-500 uppercase tracking-widest">(Manual)</span>
                  </div>
               </div>
               <p className="text-sm text-gray-500 font-medium mb-6">You manually convert types using built-in methods.</p>
               <CodeBlock code={`let num = Number("5"); // 5`} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Implicit Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Activity} title="2. Implicit Conversion Playground" subtitle="Experience how JS handles type coercion behind the scenes." color="text-amber-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
             <div className="space-y-8">
                <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 space-y-6">
                   <div className="grid grid-cols-3 gap-4 items-center">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Value 1</label>
                        <select 
                          className="w-full p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-sm"
                          onChange={(e) => {
                            const v = e.target.value;
                            if (v === 'null') setVal1(null);
                            else if (v === 'true') setVal1(true);
                            else if (v === 'false') setVal1(false);
                            else if (!isNaN(Number(v)) && v !== '""') setVal1(Number(v));
                            else if (v === '""') setVal1("");
                            else setVal1(v.replace(/"/g, ''));
                          }}
                        >
                          <option value='"5"'>"5"</option>
                          <option value='true'>true</option>
                          <option value='1'>1</option>
                          <option value='null'>null</option>
                          <option value='"hello"'>"hello"</option>
                          <option value='""'>""</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Operator</label>
                         <select 
                          className="w-full p-4 bg-amber-500 text-white rounded-2xl border-none font-black text-lg text-center"
                          value={operator}
                          onChange={(e) => setOperator(e.target.value as any)}
                         >
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                            <option value="==">==</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Value 2</label>
                        <select 
                          className="w-full p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-sm"
                          onChange={(e) => {
                            const v = e.target.value;
                            if (v === 'null') setVal2(null);
                            else if (v === 'true') setVal2(true);
                            else if (v === 'false') setVal2(false);
                            else if (!isNaN(Number(v)) && v !== '""') setVal2(Number(v));
                            else if (v === '""') setVal2("");
                            else setVal2(v.replace(/"/g, ''));
                          }}
                        >
                          <option value='2'>2</option>
                          <option value='"2"'>"2"</option>
                          <option value='true'>true</option>
                          <option value='false'>false</option>
                          <option value='null'>null</option>
                        </select>
                      </div>
                   </div>
                </div>

                <div className="p-6 bg-amber-500/5 rounded-3xl border border-amber-500/10">
                   <p className="text-amber-600 dark:text-amber-400 text-sm font-medium leading-relaxed">
                     <Zap size={16} className="inline mr-2" />
                     {operator === '+' ? 'The + operator prefers string concatenation if any operand is a string.' : 'The arithmetic operators (-, *, /) force conversion to numbers.'}
                   </p>
                </div>
             </div>

             <div className="bg-gray-950 p-10 rounded-[3rem] border border-white/5 shadow-inner">
                <div className="flex justify-between items-center text-[10px] font-black text-white/30 tracking-[0.4em] uppercase mb-12">
                   <span>Expression</span>
                   <span>Result</span>
                </div>
                <div className="flex flex-col gap-10">
                   <div className="flex items-center justify-between">
                      <div className="font-mono text-2xl text-white tracking-tighter">
                         <span className={typeof val1 === 'string' ? 'text-amber-400' : 'text-blue-400'}>
                           {typeof val1 === 'string' ? `"${val1}"` : String(val1)}
                         </span>
                         <span className="mx-4 text-gray-600">{operator}</span>
                         <span className={typeof val2 === 'string' ? 'text-amber-400' : 'text-blue-400'}>
                           {typeof val2 === 'string' ? `"${val2}"` : String(val2)}
                         </span>
                      </div>
                      <div className="h-px bg-gray-800 flex-1 mx-8" />
                      <div className="text-right">
                         <div className={`text-4xl font-black tracking-tight ${
                           typeResult === 'string' ? 'text-emerald-400' : 
                           typeResult === 'boolean' ? 'text-indigo-400' : 
                           'text-blue-400'
                         }`}>
                           {typeResult === 'string' ? `"${result}"` : String(result)}
                         </div>
                         <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2">
                           Type: {typeResult}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Explicit Methods ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Code2} title="3. Explicit Conversion Methods" subtitle="Methods to manually transform your data types." color="text-blue-500" />
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { 
               title: "String ➔ Number", 
               methods: ['Number("10")', 'parseInt("10px")', 'parseFloat("10.5")'], 
               icon: HashIcon,
               color: "text-blue-500 bg-blue-50 dark:bg-blue-900/30"
             },
             { 
               title: "Number ➔ String", 
               methods: ['String(100)', '(100).toString()'], 
               icon: TypeIcon,
               color: "text-amber-500 bg-amber-50 dark:bg-amber-900/30"
             },
             { 
               title: "Any ➔ Boolean", 
               methods: ['Boolean(1) // true', 'Boolean("") // false', 'Boolean("Hi") // true'], 
               icon: CheckCircle,
               color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30"
             }
           ].map((card, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform duration-500">
                <div className={`p-4 rounded-2xl w-fit mb-6 ${card.color}`}>
                   <card.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">{card.title}</h4>
                <div className="space-y-3">
                   {card.methods.map((m, idx) => (
                     <div key={idx} className="p-3 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 font-mono text-xs text-gray-500 dark:text-gray-400">
                        {m}
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 4: Special Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-gradient-to-br from-rose-900 to-black p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <AlertTriangle size={300} className="text-white" />
          </div>
          <SectionHeader icon={AlertTriangle} title="4. Special Cases (Very Important)" subtitle="The tricky edge cases that cause most bugs." color="text-rose-400" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 relative z-10">
             {[
               { title: "null", num: "0", str: '"null"', bool: "false" },
               { title: "undefined", num: "NaN", str: '"undefined"', bool: "false" },
               { title: '"" (Empty String)', num: "0", str: '""', bool: "false" }
             ].map((row, i) => (
               <div key={i} className="p-8 bg-black/40 backdrop-blur-xl rounded-[2.5rem] border border-white/10 space-y-6">
                  <h4 className="text-2xl font-black text-white italic">{row.title}</h4>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                        <span className="text-[10px] font-black text-white/30 tracking-widest uppercase">Number()</span>
                        <span className="font-mono text-rose-400 font-black">{row.num}</span>
                     </div>
                     <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                        <span className="text-[10px] font-black text-white/30 tracking-widest uppercase">String()</span>
                        <span className="font-mono text-amber-400 font-black">{row.str}</span>
                     </div>
                     <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                        <span className="text-[10px] font-black text-white/30 tracking-widest uppercase">Boolean()</span>
                        <span className="font-mono text-emerald-400 font-black">{row.bool}</span>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="5. Comparison Conversion" subtitle="The critical difference between loose and strict equality." color="text-indigo-500" />
        <div className="grid lg:grid-cols-2 gap-8 items-center">
           <div className="space-y-8">
              <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl">
                 <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">== vs ===</h4>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="p-2 rounded-lg bg-indigo-500 text-white shadow-lg shrink-0">
                          <Zap size={18} />
                       </div>
                       <div>
                          <span className="font-black text-indigo-500 block">== (Loose Equality)</span>
                          <p className="text-sm text-gray-500 font-medium italic">Converts types automatically before comparison.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="p-2 rounded-lg bg-emerald-500 text-white shadow-lg shrink-0">
                          <Lock size={18} />
                       </div>
                       <div>
                          <span className="font-black text-emerald-500 block">=== (Strict Equality)</span>
                          <p className="text-sm text-gray-500 font-medium italic">Comparisons happen without conversion. Types must match.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-4">
              <CodeBlock title="Loose Equality ✖" code={'"5" == 5 // true'} />
              <CodeBlock title="Strict Equality ✔" code={'"5" === 5 // false'} />
              <div className="p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-3xl">
                 <p className="text-indigo-600 dark:text-indigo-400 text-sm font-black flex items-center gap-2">
                    <ShieldCheck size={18} /> Always prefer === to prevent unexpected bugs.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700">
           <SectionHeader icon={Layout} title="6. Real-World Example: Form Inputs" subtitle="Why type conversion is vital for processing user data." color="text-sky-500" />
           <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
              <div className="space-y-8">
                 <p className="text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                   When you get values from forms or APIs, they arrive as <span className="text-amber-500 font-black italic">Strings</span>. To Perform math, you must convert them.
                 </p>
                 <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-800">
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Input Simulation</div>
                    <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono">
                       <span className="text-gray-400">form.input.value = </span>
                       <span className="text-amber-500">"100"</span>
                    </div>
                    <ArrowDownIcon className="mx-8 my-4 text-gray-300 h-6" />
                    <div className="flex items-center gap-4 bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10 font-mono">
                       <span className="text-emerald-600">Number("100") + 50 = </span>
                       <span className="text-emerald-500 font-black">150</span>
                    </div>
                 </div>
              </div>
              <div className="space-y-6">
                 <CodeBlock title="Form Processing logic" code={`let input = "100";

// Convert user input to number
let total = Number(input) + 50;

console.log(total); // 150`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 7: Viz Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Table} title="7. Quick Reference Table" subtitle="Visualization of common conversions." color="text-indigo-500" />
          
          <div className="overflow-x-auto mt-10">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-b border-gray-100 dark:border-gray-700">
                   <th className="py-5 px-6 text-sm font-black text-gray-400 uppercase tracking-widest">Value</th>
                   <th className="py-5 px-6 text-sm font-black text-blue-400 uppercase tracking-widest">Number()</th>
                   <th className="py-5 px-6 text-sm font-black text-amber-400 uppercase tracking-widest">String()</th>
                   <th className="py-5 px-6 text-sm font-black text-emerald-400 uppercase tracking-widest">Boolean()</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                 {[
                   { val: '"10"', num: "10", str: '"10"', bool: "true" },
                   { val: '""', num: "0", str: '""', bool: "false" },
                   { val: "null", num: "0", str: '"null"', bool: "false" },
                   { val: "undefined", num: "NaN", str: '"undefined"', bool: "false" },
                 ].map((row, i) => (
                   <tr key={i} className="group hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                     <td className="py-6 px-6 font-mono text-gray-900 dark:text-white font-bold">{row.val}</td>
                     <td className="py-6 px-6 font-mono text-blue-500 font-black">{row.num}</td>
                     <td className="py-6 px-6 font-mono text-amber-500 font-black">{row.str}</td>
                     <td className="py-6 px-6 font-mono text-emerald-500 font-black">{row.bool}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* ── Section 8: Recommendations ── */}
      <section className="max-w-5xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="8. Professional Recommendations" subtitle="Best practices from seasoned developers." color="text-emerald-500" />
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Prefer Explicit", desc: "Never rely on implicit magic. Use Number(val) to be clear about your intent.", icon: Eye, color: "text-blue-500 bg-blue-500/10" },
             { title: "Strict Equality", desc: "Always use ===. Avoid == like the plague to prevent logic leaks.", icon: Lock, color: "text-indigo-500 bg-indigo-500/10" },
             { title: "Validate First", desc: "Always check for NaN using isNaN() before performing complex math.", icon: Search, color: "text-emerald-500 bg-emerald-500/10" }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4">
                <div className={`p-4 rounded-2xl w-fit ${item.color}`}>
                   <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white tracking-tight italic">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* ── Tips Lab ── */}
        <div className="mt-12 bg-gray-950 p-10 rounded-[4rem] border border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
              <Zap size={200} className="text-amber-500" />
           </div>
           <h4 className="text-2xl font-black text-white mb-10 flex items-center gap-4 italic tracking-tight">
              <Terminal size={24} className="text-amber-500" /> Tips & Quick Tricks
           </h4>
           <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {[
                { label: "Quick Number", code: '+ "10" // result: 10', icon: Zap },
                { label: "Quick Boolean", code: "!!value // flips twice", icon: RefreshCw },
                { label: "Watch for NaN", code: 'Number("abc") // NaN', icon: AlertTriangle },
                { label: "Form Data Rule", code: "// Inputs are ALWAYS strings", icon: Layout }
              ].map((tip, i) => (
                <div key={i} className="flex gap-4 items-center">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                      <tip.icon size={20} />
                   </div>
                   <div>
                      <span className="text-white font-black text-sm block">{tip.label}</span>
                      <code className="text-[10px] text-gray-500 font-mono">{tip.code}</code>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Code with Intent.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
           Type conversion is the foundation of robust logic in dynamic languages.<br />
           By mastering it, you transition from "guessing" to "knowing" exactly how your data flows.
         </p>
      </footer>

    </div>
  );
};

const HashIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>
);

const TypeIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
);

const ArrowDownIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
);

export default JsTypeConversion;