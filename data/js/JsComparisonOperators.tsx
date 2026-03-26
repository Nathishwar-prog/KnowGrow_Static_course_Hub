import React, { useState, useEffect } from 'react';
import { 
  Scale, Binary, Zap, AlertCircle, Info, Layers, 
  Lock, Unlock, Hash, Type, Check, Copy, 
  Search, Activity, Sparkles, ChevronRight, 
  ArrowRight, ShieldAlert, BookOpen, Calculator
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Code Block Component ─────────────────────────────────────────────────────
const CodeBlock = ({ code, title, language = 'javascript' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm relative group">
      {title && (
        <div className="bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">{title}</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase">{language}</span>
        </div>
      )}
      <div className="absolute top-12 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-emerald-500 hover:text-white transition-colors border border-slate-700"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-slate-900 text-emerald-400 leading-relaxed shadow-inner">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const JsComparisonOperators: React.FC = () => {
  // --- Lab 1: Equality Duel State ---
  const [val1, setVal1] = useState<any>(5);
  const [val2, setVal2] = useState<any>("5");
  const [op, setOp] = useState<'==' | '==='>('==');
  const [result, setResult] = useState<boolean>(false);

  useEffect(() => {
    if (op === '==') {
      setResult(val1 == val2);
    } else {
      setResult(val1 === val2);
    }
  }, [val1, val2, op]);

  const valueOptions = [
    { label: '5 (Num)', value: 5 },
    { label: '"5" (Str)', value: "5" },
    { label: '0 (Num)', value: 0 },
    { label: '"" (Str)', value: "" },
    { label: 'false', value: false },
    { label: 'true', value: true },
    { label: 'null', value: null },
    { label: 'undefined', value: undefined },
    { label: 'NaN', value: NaN },
    { label: '[]', value: [] }
  ];

  // --- Lab 2: Falsy Vault State ---
  const [vaultKey, setVaultKey] = useState<any>(null);
  const isFalsy = (v: any) => !v;

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20 min-h-screen font-sans selection:bg-indigo-200 selection:text-indigo-900 text-slate-900 dark:text-slate-100">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-20 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl mb-8 shadow-2xl transform hover:rotate-3 transition-transform cursor-pointer group"
        >
          <Scale className="w-12 h-12 text-white group-hover:animate-pulse" />
        </motion.div>
        <h1 className="text-6xl sm:text-7xl font-black mb-6 tracking-tight">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Comparison</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Master the art of logical relationship. Learn why <code className="text-indigo-600 dark:text-indigo-400 font-bold">5 == "5"</code> is true but <code className="text-blue-600 dark:text-blue-400 font-bold">5 === "5"</code> is false.
        </p>
      </header>

      {/* ── Section 1-2: Intro & Overview ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
              <Sparkles size={14} className="mr-2" /> Section 1: Definition
            </div>
            <h2 className="text-4xl font-black tracking-tight leading-tight italic decoration-indigo-500 decoration-wavy underline underline-offset-8">
              The Relationship Check
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Comparison means checking the relationship between two values and returning a Boolean: <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded font-bold italic">true</span> or <span className="px-2 py-0.5 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 rounded font-bold italic">false</span>.
            </p>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-6">
              <h3 className="font-black uppercase text-xs tracking-widest text-slate-400 mb-4 border-b pb-4">Operator Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-wider block">Equality</span>
                  <p className="text-xl font-mono font-bold text-slate-800 dark:text-white">==, ===</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-wider block">Inequality</span>
                  <p className="text-xl font-mono font-bold text-slate-800 dark:text-white">!=, !==</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-sky-500 uppercase tracking-wider block">Relational</span>
                  <p className="text-xl font-mono font-bold text-slate-800 dark:text-white">&gt;, &lt;, &gt;=, &lt;=</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Lab: Equality Duel */}
          <div className="bg-slate-900 rounded-[3rem] p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-indigo-500/10 -rotate-12 transform group-hover:rotate-0 transition-transform duration-700">
              <Scale size={180} />
            </div>
            
            <div className="relative z-10 space-y-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 italic">Lab: Equality Duel</h3>
                <div className="flex gap-2">
                  <button onClick={() => setOp('==')} className={`px-4 py-1 rounded-lg text-xs font-black transition-all ${op === '==' ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-500 border border-slate-800 hover:text-white'}`}>Loose (==)</button>
                  <button onClick={() => setOp('===')} className={`px-4 py-1 rounded-lg text-xs font-black transition-all ${op === '===' ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-500 border border-slate-800 hover:text-white'}`}>Strict (===)</button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <select 
                  onChange={(e) => {
                    const selected = valueOptions.find(o => o.label === e.target.value);
                    setVal1(selected?.value);
                  }}
                  className="bg-black/40 border border-slate-700 text-white p-4 rounded-2xl w-full text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none text-center cursor-pointer hover:bg-black/60"
                >
                  {valueOptions.map(o => <option key={o.label} value={o.label}>{o.label}</option>)}
                </select>
                
                <div className="p-4 bg-indigo-500/20 text-indigo-400 rounded-full font-black text-xl animate-pulse">
                  {op}
                </div>

                <select 
                  defaultValue='"5" (Str)'
                  onChange={(e) => {
                    const selected = valueOptions.find(o => o.label === e.target.value);
                    setVal2(selected?.value);
                  }}
                  className="bg-black/40 border border-slate-700 text-white p-4 rounded-2xl w-full text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none text-center cursor-pointer hover:bg-black/60"
                >
                  {valueOptions.map(o => <option key={o.label} value={o.label}>{o.label}</option>)}
                </select>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={result ? 'true' : 'false'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-10 rounded-[2.5rem] text-5xl font-black text-center shadow-2xl border ${result ? 'bg-emerald-500/10 border-emerald-500 text-emerald-500' : 'bg-rose-500/10 border-rose-500 text-rose-500'}`}
                >
                  {String(result).toUpperCase()}
                </motion.div>
              </AnimatePresence>

              <div className="p-4 bg-black/40 rounded-2xl border border-white/5 space-y-2">
                <div className="flex items-start gap-3">
                  <Info className="text-indigo-400 mt-1 flex-shrink-0" size={14} />
                  <p className="text-[10px] leading-relaxed text-slate-400 font-medium">
                    {op === '==' ? (
                      <><b>Loose Equality</b> performs <i>Type Coercion</i>. It tries to convert values to a common type before comparing.</>
                    ) : (
                      <><b>Strict Equality</b> checks both <b>Value</b> and <b>Type</b>. No conversion allowed.</>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Equality Deep Dive ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-16 border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-black italic tracking-tight flex items-center gap-3">
                <Binary className="text-indigo-500" /> Loose (==) vs Strict (===)
              </h2>
              
              <div className="space-y-4">
                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-700 group hover:border-indigo-500 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl"><Unlock size={18} /></div>
                    <h4 className="font-black text-lg">Loose Equality (==)</h4>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">Converts types behind the scenes before comparison.</p>
                  <CodeBlock code={`5 == "5"; // true\n// "5" -> 5 (Converted)`} />
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-700 group hover:border-blue-500 transition-all duration-500 border-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl"><Lock size={18} /></div>
                    <h4 className="font-black text-lg">Strict Equality (===)</h4>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">Compares both Value + Type. No surprises.</p>
                  <CodeBlock code={`5 === "5"; // false\n// Number vs String`} />
                </div>
              </div>

              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded-r-2xl">
                <p className="text-sm font-black text-emerald-800 dark:text-emerald-400">✅ Golden Rule: Always prefer === to avoid unexpected bugs.</p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8">
              <div className="p-8 bg-indigo-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-[40px]"></div>
                <h3 className="text-xl font-black mb-6 uppercase tracking-widest text-indigo-300 italic">4. Inequality Operators</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-black/20 rounded-2xl border border-white/5">
                    <code className="text-emerald-400">5 != "5"</code>
                    <span className="text-xs font-black bg-rose-500 text-white px-3 py-1 rounded-full shadow-lg">FALSE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-black/20 rounded-2xl border border-white/5">
                    <code className="text-emerald-400">5 !== "5"</code>
                    <span className="text-xs font-black bg-emerald-500 text-white px-3 py-1 rounded-full shadow-lg">TRUE</span>
                  </div>
                  <p className="text-xs text-indigo-200 opacity-70 italic mt-4 font-medium leading-relaxed">!= (Loose Inequality) coerces, while !== (Strict Inequality) does not.</p>
                </div>
              </div>

              <div className="p-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] shadow-sm">
                <h3 className="text-xl font-black mb-6 uppercase tracking-widest text-slate-400 italic">5. Relational Operators</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { c: '10 > 5', r: 'true' },
                    { c: '3 < 2', r: 'false' },
                    { c: '5 >= 5', r: 'true' },
                    { c: '2 <= 1', r: 'false' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                      <code className="text-indigo-600 block mb-1">{item.c}</code>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${item.r === 'true' ? 'text-emerald-500' : 'text-rose-500'}`}>{item.r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6-7: Coercion & Special Cases ── */}
      <section className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-amber-500/20 transition-all duration-700"></div>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4 italic underline decoration-amber-500 decoration-4 underline-offset-8">
            <Zap className="text-amber-500" /> Type Coercion ⚠️
          </h2>
          <p className="text-slate-400 font-medium mb-10 leading-relaxed text-lg italic">
            JavaScript automatically converts types when using loose operators or relational comparisons with mixed types.
          </p>
          
          <div className="space-y-6 flex-grow">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
              <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block mb-4">Relational Example</span>
              <p className="text-2xl font-mono text-white mb-2">"10" &gt; 5 <span className="text-emerald-500">→ true</span></p>
              <p className="text-xs text-slate-500 font-medium italic">Because "10" is coerced to the number 10.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
                <code className="text-xs text-rose-300 block mb-1">"" == 0</code>
                <span className="text-[10px] font-black uppercase text-emerald-500 italic">True</span>
              </div>
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
                <code className="text-xs text-amber-300 block mb-1">null == 0</code>
                <span className="text-[10px] font-black uppercase text-rose-500 italic">False</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-14 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col group">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4 italic italic underline decoration-blue-500 decoration-4 underline-offset-8">
            <Calculator className="text-blue-500" /> Special Comparisons
          </h2>
          
          <div className="space-y-8 flex-grow">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border border-blue-100 dark:border-blue-800/50">
                <Info size={24} className="text-blue-500" />
                <div>
                  <h4 className="font-bold text-sm">null vs undefined</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    <code className="text-blue-600 dark:text-blue-400 font-bold">null == undefined</code> is <b className="text-emerald-500 italic uppercase underline decoration-emerald-500/20">TRUE</b> (They are treated as a special pair).
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-rose-50 dark:bg-rose-900/20 rounded-3xl border border-rose-100 dark:border-rose-800/50 relative overflow-hidden">
                <AlertCircle size={24} className="text-rose-500" />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-rose-500 opacity-5 -rotate-12 transform group-hover:scale-150 transition-transform"></div>
                <div>
                  <h4 className="font-bold text-sm text-rose-900 dark:text-rose-400">The NaN Trap ❗</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    <code className="text-rose-600 font-bold italic">NaN === NaN</code> is <b className="text-rose-600 italic uppercase">FALSE</b>. Use <code className="text-emerald-600">Number.isNaN()</code> instead.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-inner">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Boolean Coercion</span>
              <ul className="space-y-3 font-mono text-xs">
                <li className="flex justify-between items-center"><span className="text-slate-500">true == 1</span> <span className="text-emerald-500 font-black tracking-widest">TRUE</span></li>
                <li className="flex justify-between items-center"><span className="text-slate-500">false == 0</span> <span className="text-emerald-500 font-black tracking-widest">TRUE</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8-9: String & Complex Comparison ── */}
      <section className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-black tracking-tight leading-tight">
            Advanced Comparison <span className="text-blue-600 italic">Nuances</span>
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="text-lg font-black italic flex items-center gap-2 mb-4">
                <Type className="text-sky-500" /> 8. String Comparison
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 italic font-medium">Strings are compared based on <b>Unicode</b> values (Dictionary order).</p>
              <CodeBlock code={`"apple" < "banana"; // true\n"Z" < "a"; // true (Case-sensitive!)`} />
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <Layers size={80} />
              </div>
              <h3 className="text-lg font-black italic flex items-center gap-2 mb-4">
                <Layers className="text-rose-500" /> 9. Object/Array Pitfall
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 italic font-medium">Arrays/Objects are compared by <b>Memory Reference</b>, not value.</p>
              <CodeBlock code={`[1,2] == [1,2]; // false\n\nconst a = [1,2];\nconst b = a;\na === b; // true (Same reference)`} />
            </div>
          </div>
        </div>

        {/* Lab 2: The Falsy Vault */}
        <div className="bg-indigo-600 rounded-[3.5rem] p-10 lg:p-14 text-white shadow-3xl relative overflow-hidden flex flex-col items-center">
          <ShieldAlert className="absolute -top-10 -right-10 w-96 h-96 text-white/5 -rotate-12 translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10 w-full text-center">
            <h3 className="text-2xl font-black mb-4 uppercase tracking-[0.2em]">10. The Falsy Vault</h3>
            <p className="text-indigo-100 font-medium mb-12 text-sm opacity-80 max-w-xs mx-auto italic">Values that evaluate to <b>false</b> in a logic context.</p>
            
            <div className="grid grid-cols-3 gap-3 mb-10">
              {['false', '0', '""', 'null', 'undefined', 'NaN', '[]', '{}', '"Hi"'].map((v) => (
                <button 
                  key={v}
                  onClick={() => setVaultKey(v)}
                  className={`p-4 rounded-2xl font-mono text-xs font-black transition-all transform active:scale-95 border-2 ${
                    vaultKey === v 
                    ? (isFalsy(v === 'false' ? false : v === '0' ? 0 : v === '""' ? "" : v === 'null' ? null : v === 'undefined' ? undefined : v === 'NaN' ? NaN : v === '[]' ? [] : v === '{}' ? {} : v === '"Hi"' ? "Hi" : v) ? 'bg-rose-500 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-emerald-500 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]')
                    : 'bg-indigo-700/50 border-white/10 hover:border-white/40'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            <div className="bg-black/20 p-6 rounded-3xl border border-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={vaultKey || 'empty'}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-2"
                >
                  {vaultKey ? (
                    <>
                      <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Identity Result</p>
                      <p className="text-4xl font-black tracking-tighter">
                        {isFalsy(vaultKey === 'false' ? false : vaultKey === '0' ? 0 : vaultKey === '""' ? "" : vaultKey === 'null' ? null : vaultKey === 'undefined' ? undefined : vaultKey === 'NaN' ? NaN : vaultKey === '[]' ? [] : vaultKey === '{}' ? {} : vaultKey === '"Hi"' ? "Hi" : vaultKey) ? 'FALSY 🚩' : 'TRUTHY ✅'}
                      </p>
                    </>
                  ) : (
                    <p className="text-xs italic text-indigo-300/60 py-4">Click a value to test its truthiness</p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <p className="mt-8 text-[10px] font-bold text-indigo-200">🚩 Note: Empty arrays [] and objects {"{}"} are TRUTHY in JS!</p>
          </div>
        </div>
      </section>

      {/* ── Section 11-12: Complete Example & Table ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-xl relative overflow-hidden group">
            <h3 className="text-xl font-black mb-8 italic flex items-center gap-3">
              <BookOpen className="text-indigo-400" /> 11. The Logic Masterlist
            </h3>
            <div className="space-y-3 font-mono text-sm border-l-2 border-indigo-500/30 pl-6">
              <p className="text-slate-400"><span className="text-indigo-400">console.log</span>(5 == "5") <span className="text-white">// true</span></p>
              <p className="text-slate-400"><span className="text-indigo-400">console.log</span>(null == undefined) <span className="text-white">// true</span></p>
              <p className="text-slate-400"><span className="text-indigo-400">console.log</span>([] == false) <span className="text-rose-400">// true ❗</span></p>
              <p className="text-slate-400"><span className="text-indigo-400">console.log</span>(NaN === NaN) <span className="text-rose-400">// false</span></p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-black mb-8 italic flex items-center gap-3">
              <Activity className="text-blue-500" /> 12. Quick Revision Table
            </h3>
            <div className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-900/50">
                  <tr>
                    <th className="p-4 font-black uppercase text-[10px] tracking-widest text-slate-400">Expression</th>
                    <th className="p-4 font-black uppercase text-[10px] tracking-widest text-slate-400">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {[
                    ['5 == "5"', 'true'],
                    ['5 === "5"', 'false'],
                    ['null == undefined', 'true'],
                    ['NaN === NaN', 'false'],
                    ['[] == false', 'true']
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                      <td className="p-4 font-mono font-bold text-slate-700 dark:text-slate-300">{row[0]}</td>
                      <td className={`p-4 font-black tracking-widest text-xs ${row[1] === 'true' ? 'text-emerald-500' : 'text-rose-500'}`}>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 13-14: Mistakes & Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <h3 className="text-3xl font-black italic flex items-center gap-4 text-rose-600">
             <ShieldAlert className="w-10 h-10" /> 13. Common Pitfalls
           </h3>
           <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Using == blindly",
                "Comparing objects directly",
                "Ignoring coercion",
                "Forgetting NaN behavior"
              ].map((m, i) => (
                <div key={i} className="p-6 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-800/50 rounded-[2rem] flex items-center gap-4 group hover:bg-rose-500 hover:text-white transition-all pointer-events-none">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-600 font-black group-hover:bg-white group-hover:text-rose-500">{i+1}</div>
                  <span className="font-bold text-sm tracking-tight">{m}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:scale-110 transition-transform duration-700">
            <Activity size={120} />
          </div>
          <h3 className="text-2xl font-black mb-10 flex items-center gap-4 italic z-10 relative">
            <Activity className="text-indigo-400" /> 14. Engineering Use Cases
          </h3>
          <ul className="grid sm:grid-cols-2 gap-6 relative z-10">
            {[
              "Form validation systems",
              "Authentication logic",
              "Conditional UI rendering",
              "API data filtering",
              "Response integrity checks"
            ].map((use, i) => (
              <li key={i} className="flex items-center gap-3">
                <ChevronRight className="text-indigo-400" size={16} />
                <span className="text-sm font-bold text-indigo-100">{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto text-center py-10 opacity-40">
        <div className="flex items-center justify-center gap-3 mb-4 font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter text-3xl">
          <Sparkles className="w-8 h-8 opacity-50 text-indigo-500" />
          KNOWGROW Hub
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-600 to-transparent mx-auto mb-4"></div>
        <p className="text-base font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase italic">Logical Architecture Specialist</p>
      </footer>

    </div>
  );
};

export default JsComparisonOperators;