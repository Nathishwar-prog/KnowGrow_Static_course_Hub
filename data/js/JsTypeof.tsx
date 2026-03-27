import React, { useState } from 'react';
import { 
  Search, Fingerprint, Zap, Info, Terminal, CodeXml, 
  Layers, Boxes, AlertCircle, CheckCircle, ShieldAlert, 
  Cpu, Laptop, Activity, MousePointer2, Settings, 
  Clipboard, Check, Copy, ArrowRight, Maximize2, 
  HelpCircle, Binary, Layout, Globe, ShieldCheck
} from 'lucide-react';

// ─── Code Block Component ───────────────────────────────────────────────────
const CodeBlock = ({ code, title, language = 'js' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2.5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5 grayscale opacity-50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">{title}</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase">{language}</span>
        </div>
      )}
      <div className="absolute top-12 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-indigo-500 hover:text-white transition-all border border-gray-700 shadow-lg" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-[#0d1117] text-indigo-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Type Inspector Sandbox ──────────────────────────────────────────────────
const TypeInspector = () => {
  const [activeCase, setActiveCase] = useState('string');

  const cases: Record<string, { display: string, value: any, color: string, icon: any, reality: string }> = {
    string: { display: '"Hello"', value: '"string"', color: 'bg-indigo-500', icon: Terminal, reality: 'Standard primitive.' },
    number: { display: '100', value: '"number"', color: 'bg-emerald-500', icon: Binary, reality: 'Standard numeric check.' },
    null: { display: 'null', value: '"object"', color: 'bg-amber-500', icon: ShieldAlert, reality: '⚠️ This is a legacy JavaScript bug! null is technically a primitive.' },
    array: { display: '[1, 2, 3]', value: '"object"', color: 'bg-rose-500', icon: Layers, reality: '⚠️ Arrays are objects. Use Array.isArray() for accurate checks.' },
    function: { display: '() => {}', value: '"function"', color: 'bg-sky-500', icon: CodeXml, reality: 'Functions are unique object-types.' },
    nan: { display: 'NaN', value: '"number"', color: 'bg-violet-500', icon: HelpCircle, reality: 'Weird! Not-A-Number is technically a numeric type.' },
    bigint: { display: '10n', value: '"bigint"', color: 'bg-teal-500', icon: Cpu, reality: 'Modern large integer primitive.' }
  };

  const active = cases[activeCase];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 lg:p-14 border border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-10 opacity-5 text-indigo-500 transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-12">
         <Search className="w-96 h-96" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
         <div className="lg:col-span-12 space-y-4">
            <h3 className="text-3xl font-black italic tracking-tighter uppercase flex items-center gap-4">
              <Fingerprint className="text-indigo-500 w-8 h-8" /> Type Discovery Engine
            </h3>
            <p className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] italic">Probing the metadata of JavaScript values</p>
         </div>

         <div className="lg:col-span-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {Object.keys(cases).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCase(key)}
                className={`py-6 px-4 rounded-[2rem] border-2 text-center flex flex-col items-center gap-3 transition-all transform hover:-translate-y-1 ${
                  activeCase === key 
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 shadow-xl' 
                    : 'bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 opacity-60'
                }`}
              >
                <div className={`p-2 rounded-xl text-white ${activeCase === key ? cases[key].color : 'bg-gray-400'}`}>
                   {React.createElement(cases[key].icon, { size: 18 })}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">{key}</span>
              </button>
            ))}
         </div>

         <div className="lg:col-span-6 bg-slate-900 rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden">
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-1.5 h-10 bg-indigo-500 rounded-full"></div>
                   <div>
                      <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1 italic">Input Variable</h4>
                      <code className="text-2xl font-black text-white italic">{active.display}</code>
                   </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                   <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 italic">typeof Operation Result</h4>
                   <div className="flex items-center gap-4">
                      <code className="text-4xl font-black text-emerald-400 animate-in fade-in slide-in-from-left-2">{active.value}</code>
                      <CheckCircle className="text-emerald-500 w-8 h-8 opacity-50" />
                   </div>
                </div>
            </div>
         </div>

         <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-[2.5rem] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 flex items-start gap-4">
               <Info className="text-indigo-500 w-8 h-8 flex-shrink-0" />
               <div>
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] block mb-2 underline decoration-2 underline-offset-4">Reality Check</span>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed italic animate-in fade-in duration-700">
                     "{active.reality}"
                  </p>
               </div>
            </div>

            <div className="p-8 pb-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group/card shadow-xl">
               <div className="absolute top-0 right-0 p-6 opacity-10 text-emerald-500 group-hover/card:scale-125 transition-transform duration-700">
                  <Terminal size={64} />
               </div>
               <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 block">Syntax Map</span>
               <code className="text-sm font-mono text-indigo-400">typeof {active.display}; // returns {active.value}</code>
            </div>
         </div>
      </div>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
const JsTypeof: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8faff] dark:bg-[#08090b] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-indigo-400/10 to-sapphire-400/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-tr from-indigo-500 to-indigo-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-indigo-500/20 transition-all hover:scale-110 active:scale-95 duration-500 cursor-pointer">
          <Search className="w-14 h-14 text-white shadow-xl" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none uppercase">
          typeof <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-600 italic font-black">Operator</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed italic">
          Metadata for your data. The essential operator for runtime type inspection and secure dynamic variable handling.
        </p>
      </header>

      {/* ── 1. What is typeof ── */}
      <section className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800/50">
            <Fingerprint className="w-4 h-4" /> The Definition
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-none tracking-tighter">
            Identify Your Data <br /> in Real-Time
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            The <code>typeof</code> operator is one of the most fundamental tools in JavaScript. It allows for runtime inspection of a variable's data type, returning a string that indicates the type of the unevaluated operand.
          </p>

          <div className="p-8 rounded-[3rem] bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 flex items-start gap-5">
             <Zap className="text-amber-500 w-12 h-12 flex-shrink-0 mt-1" />
             <div>
                <span className="text-amber-500 font-black uppercase text-xs tracking-widest block mb-2 underline decoration-2 underline-offset-4">Simple Logic</span>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed italic">
                   "typeof tells you exactly what kind of data—be it a primitive like a string or a complex object—a variable is currently holding."
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 p-4">
           {[
             { bg: 'bg-rose-50 dark:bg-rose-950/10', border: 'border-rose-100 dark:border-rose-900/30', color: 'text-rose-500', title: 'Without typeof', items: ['Hard to debug', 'Type collisions', 'Runtime crashes 😓'] },
             { bg: 'bg-indigo-50 dark:bg-indigo-950/10', border: 'border-indigo-100 dark:border-indigo-900/30', color: 'text-indigo-500', title: 'With typeof', items: ['Easy type checking', 'Safer code logic', 'Superior debugging 😎'] }
           ].map((card, i) => (
             <div key={i} className={`p-10 rounded-[3.5rem] border-2 shadow-sm ${card.bg} ${card.border} transition-all hover:scale-[1.05]`}>
                <div className={`${card.color} mb-6`}>{i === 0 ? <AlertCircle size={40} /> : <CheckCircle size={40} />}</div>
                <h4 className="font-black text-gray-900 dark:text-white text-xl mb-6 italic">{card.title}</h4>
                <ul className="space-y-4">
                   {card.items.map((item, idx) => (
                     <li key={idx} className="text-[10px] font-black opacity-60 uppercase tracking-widest flex items-center gap-2 italic">
                        <ArrowRight size={10} className={card.color} /> {item}
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </section>

      {/* ── INTERACTIVE INSPECTOR ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <TypeInspector />
      </section>

      {/* ── 5. All Results Grid ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-12">
         <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h2 className="text-4xl font-black italic tracking-tighter">The Complete Result Matrix</h2>
            <div className="px-5 py-2 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-sm flex items-center gap-3">
               <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Standard Specifications</span>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 rounded-[3.5rem] border-2 border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden relative">
            <div className="overflow-x-auto">
               <table className="w-full text-start">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900">
                        {['Value Type', 'Result Mapping', 'Status'].map((h) => (
                          <th key={h} className="text-start py-8 px-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{h}</th>
                        ))}
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                     {[
                       { val: '"text"', res: '"string"', stat: 'Native Primitive' },
                       { val: '123 or NaN', res: '"number"', stat: 'Native Numeric' },
                       { val: 'true / false', res: '"boolean"', stat: 'Logical State' },
                       { val: 'undefined', res: '"undefined"', stat: 'Unset Reference' },
                       { val: '{}', res: '"object"', stat: 'Plain Object' },
                       { val: '[]', res: '"object" ⚠️', stat: 'Non-primitive Object' },
                       { val: 'null', res: '"object" ❗', stat: 'Legacy System Bug' },
                       { val: 'function() {}', res: '"function"', stat: 'Executable Object' }
                     ].map((row, i) => (
                       <tr key={i} className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                          <td className="py-8 px-10"><code className="text-sm font-black text-gray-500 italic">{row.val}</code></td>
                          <td className="py-8 px-10"><code className="text-base font-black text-indigo-500">{row.res}</code></td>
                          <td className="py-8 px-10 italic text-[10px] font-black uppercase text-slate-400">{row.stat}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* ── 6. Quirk Alert ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="bg-rose-900 p-12 lg:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform duration-1000 group-hover:rotate-45">
               <ShieldAlert className="w-96 h-96 text-white" />
            </div>
            <div className="relative z-10 space-y-8">
               <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
                  <AlertCircle size={14} className="text-rose-400" /> Critical Quirk #1
               </div>
               <h3 className="text-4xl font-black italic italic leading-none">The null Anomaly</h3>
               <p className="text-lg text-rose-100 font-medium leading-relaxed italic opacity-80">
                 "In the very early days of JavaScript, values were stored in 32-bit units. The type tag for objects was 0. null was the null pointer (0x00), resulting in typeof null returning 'object'."
               </p>
               <CodeBlock language="javascript" code={`typeof null; // "object"\n// ❌ Don't rely on this!`} />
            </div>
         </div>

         <div className="bg-amber-500 p-12 lg:p-20 rounded-[4rem] text-slate-900 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 scale-150 -rotate-12 transition-transform duration-1000 group-hover:rotate-0">
               <Layout className="w-96 h-96 text-white" />
            </div>
            <div className="relative z-10 space-y-8">
               <div className="inline-flex items-center gap-3 px-5 py-2 bg-black/5 rounded-full text-[10px] font-black uppercase tracking-widest border border-black/10">
                  <Layout size={14} /> Critical Quirk #2
               </div>
               <h3 className="text-4xl font-black italic italic leading-none text-white">Array Detection</h3>
               <p className="text-lg text-amber-900 font-medium leading-relaxed italic opacity-80">
                 typeof will claim an array is an "object". To correctly identify an array, always use the dedicated Array class method.
               </p>
               <CodeBlock language="javascript" code={`typeof [1, 2, 3]; // "object"\nArray.isArray([1, 2, 3]); // true ✅`} />
            </div>
         </div>
      </section>

      {/* ── 8. Real World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         {[
           { title: 'Form Validation', desc: 'Ensuring user input types match backend expectations.', icon: Search },
           { title: 'Secure Debugging', desc: 'Logging variable states without causing evaluation errors.', icon: Terminal },
           { title: 'API Sanitation', desc: 'Parsing JSON responses with conditional type logic.', icon: Globe },
           { title: 'Reactive States', desc: 'Triggering UI changes based on primitive state updates.', icon: Zap }
         ].map((item, i) => (
           <div key={i} className="p-8 rounded-[3rem] bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center mb-6 shadow-xl shadow-indigo-500/20">
                 <item.icon size={24} />
              </div>
              <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2 italic underline decoration-2 underline-offset-4 decoration-indigo-500/20">{item.title}</h4>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">{item.desc}</p>
           </div>
         ))}
      </section>

      {/* ── 9. Pro Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-16">
         <div className="relative p-12 lg:p-24 rounded-[5rem] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <ShieldCheck className="w-64 h-64 text-indigo-500" />
            </div>
            <h3 className="text-4xl font-black text-indigo-900 dark:text-indigo-100 mb-16 flex items-center gap-4 italic uppercase tracking-tighter">
              <Zap className="text-indigo-500 animate-pulse" /> Senior Engineer Protocols
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] ml-auto">EST. 15 YRS</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
               {[
                 { tip: 'Always Verify Arrays', body: 'Never use typeof for arrays. Always default to Array.isArray(data) for reliable structure detection.' },
                 { tip: 'The Safe Object Check', body: 'Since null is an object, always check (typeof val === "object" && val !== null) for true object safety.' },
                 { tip: 'Callback Protection', body: 'Before execution, verify function signatures via (typeof callback === "function") to prevent crashes.' },
                 { tip: 'Use Specialized Tools', body: 'Avoid over-reliance on typeof. Use instanceof for constructor checks and precise logic.' }
               ].map((item, i) => (
                 <div key={i} className="bg-white dark:bg-gray-800/80 backdrop-blur-sm p-10 rounded-[3.5rem] border border-white dark:border-gray-700 shadow-lg group hover:scale-[1.03] transition-all">
                    <span className="text-xs font-black text-indigo-500 uppercase tracking-[0.3em] mb-4 block group-hover:translate-x-2 transition-transform italic">PROTOCOL_0{i+1}</span>
                    <h5 className="font-black text-gray-900 dark:text-white text-xl mb-4 italic leading-none">{item.tip}</h5>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 leading-relaxed italic opacity-80">{item.body}</p>
                 </div>
               ))}
            </div>
         </div>

         {/* ── 10. Common Mistakes ── */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Trusting null', body: 'Building logic that assumes a returned "object" isn\'t a null pointer.' },
              { title: 'Array Negligence', body: 'Using typeof to differentiate between plain objects and arrays ❌.' },
              { title: 'Ignoring NaN', body: 'Forgetting that NaN is technically a "number" and will pass standard type checks.' },
              { title: 'Undefined Checks', body: 'Not checking for "undefined" before accessing deeply nested properties.' }
            ].map((err, i) => (
              <div key={i} className="p-8 rounded-[3rem] bg-rose-50/50 dark:bg-rose-950/20 border-2 border-rose-100 dark:border-rose-900/40 transform hover:rotate-2 transition-all">
                 <div className="text-rose-500 mb-6"><AlertCircle size={32} /></div>
                 <h5 className="font-black text-rose-800 dark:text-rose-100 text-sm mb-2 uppercase italic leading-none">{err.title}</h5>
                 <p className="text-[10px] text-rose-700/60 dark:text-rose-400 font-bold leading-relaxed">{err.body}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Summary Footer ── */}
      <footer className="max-w-6xl mx-auto mb-20 text-center space-y-8">
         <div className="bg-slate-900 p-12 lg:p-24 rounded-[5rem] relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-sapphire-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-5xl font-black text-white mb-6 relative z-10 italic uppercase tracking-tighter">Probe the Types</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 font-bold relative z-10 italic leading-relaxed text-lg">
              "Logic depends on certainty. Use typeof to transform unknown variables into predictable data streams. Inspect early, code securely."
            </p>
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
               <button className="px-12 py-5 bg-indigo-500 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-110 transition-transform shadow-xl shadow-indigo-500/20 shadow-indigo-500/20">Master the operator</button>
               <button className="px-12 py-5 border border-slate-700 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all">Official Docs</button>
            </div>
         </div>
         <p className="text-[10px] font-black text-gray-400 uppercase tracking-[1em] opacity-20 py-10">Type Inspection Assessment — KnowGrow Platform v4.0</p>
      </footer>

    </div>
  );
};

export default JsTypeof;