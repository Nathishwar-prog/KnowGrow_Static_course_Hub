import React, { useState, useMemo } from 'react';
import { 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Terminal, 
  Code2, 
  Copy, 
  Check, 
  Eye, 
  Layers, 
  Database, 
  Globe, 
  Layout, 
  Package, 
  Activity, 
  ArrowRight,
  Info,
  Cpu,
  RefreshCw,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Search,
  BookOpen,
  Scale,
  Bug,
  Construction,
  Fingerprint,
  Monitor,
  Trophy,
  Workflow,
  Lock,
  GitCompare,
  ArrowUpDown,
  Infinity,
  Divide,
  Calculator,
  Binary,
  Bitcoin,
  Coins,
  ShieldQuestion,
  AlertCircle
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

const JsBigInt: React.FC = () => {
  const MAX_SAFE = 9007199254740991;
  const [offset, setOffset] = useState(0);

  const numberResult = MAX_SAFE + offset;
  const bigIntResult = BigInt(MAX_SAFE) + BigInt(offset);
  const isBroken = offset > 1 && numberResult === (MAX_SAFE + 1);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 animate-pulse tracking-[0.2em]">
          <Binary size={14} className="fill-current" /> ARBITRARY-PRECISION INTEGERS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Big<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 drop-shadow-2xl">
            Int
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Break the limits of standard numbers and handle <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-4">massive datasets</span> with absolute precision.
        </p>
      </header>

      {/* ── Section 1-2: Concepts & Problem ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Infinity} title="1. What & 2. Why?" subtitle="Representing integers beyond the safe limit." color="text-indigo-500" />
            <div className="space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                👉 Standard JavaScript Numbers use <span className="text-indigo-500 font-bold italic tracking-wider px-2 py-0.5 bg-indigo-500/5 rounded-lg border border-indigo-500/10 uppercase text-xs">64-bit Floating Point</span> representation, which has a precision ceiling.
              </p>
              
              <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <AlertCircle size={120} className="text-amber-500" />
                 </div>
                 <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] mb-4">The Precision Wall ⚠️</h4>
                 <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium leading-relaxed italic">
                   "JavaScript can safely store integers only up to 2^53 - 1."
                 </p>
                 <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700">
                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">Number.MAX_SAFE_INTEGER</span>
                    <span className="text-xl font-mono font-black text-indigo-600 dark:text-indigo-400">9007199254740991</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[500px]">
               <div className="flex justify-between items-center mb-10">
                  <h3 className="text-white font-black text-xl flex items-center gap-3">
                     <Monitor className="text-indigo-500 animate-pulse" size={24} /> Precision Visualizer
                  </h3>
                  <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-indigo-400 uppercase tracking-widest">
                    Limit: +{offset}
                  </div>
               </div>

               <div className="space-y-10 flex-1">
                  <div className="space-y-4">
                     <div className="flex justify-between items-center text-[10px] font-black uppercase text-gray-500 tracking-widest">
                        <span>Standard Number Result</span>
                        {isBroken && <span className="text-rose-500 animate-bounce">PRECISION LOSS 🔥</span>}
                     </div>
                     <div className={`p-6 bg-white/5 rounded-3xl border ${isBroken ? 'border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.1)]' : 'border-white/10'}`}>
                        <span className={`text-2xl font-mono font-black ${isBroken ? 'text-rose-400' : 'text-gray-300'}`}>
                          {numberResult.toString()}
                        </span>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="flex justify-between items-center text-[10px] font-black uppercase text-gray-500 tracking-widest">
                        <span>BigInt Result</span>
                        <span className="text-emerald-500">ACCURATE ✅</span>
                     </div>
                     <div className="p-6 bg-white/5 rounded-3xl border border-emerald-500/30">
                        <span className="text-2xl font-mono font-black text-emerald-400">
                          {bigIntResult.toString()}n
                        </span>
                     </div>
                  </div>
               </div>

               <div className="mt-12 flex gap-4">
                  {[1, 2, 5, 0].map((val) => (
                    <button 
                      key={val}
                      onClick={() => setOffset(val)}
                      className={`flex-1 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${offset === val ? 'bg-indigo-500 text-white shadow-xl shadow-indigo-500/20' : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'}`}
                    >
                      {val === 0 ? 'RESET' : `+${val}`}
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Creation & 4: Type ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-1000">
               <Fingerprint size={100} className="text-indigo-500" />
            </div>
            <SectionHeader icon={Terminal} title="3. Creating BigInt" subtitle="Explicit vs Implicit initialization." color="text-indigo-500" />
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
                   <h5 className="text-[10px] font-black text-indigo-600 block mb-1 uppercase tracking-tighter">Method 1: Suffix</h5>
                   <code className="text-xs font-mono font-bold">123...890n</code>
                </div>
                <div className="p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
                   <h5 className="text-[10px] font-black text-indigo-600 block mb-1 uppercase tracking-tighter">Method 2: Factory</h5>
                   <code className="text-xs font-mono font-bold">BigInt("123...")</code>
                </div>
            </div>
            <CodeBlock title="Creation Syntax" code={`const big = 12345678901234567890n;\nconst big2 = BigInt("124567890...");`} />
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-1000">
               <Search size={100} className="text-purple-500" />
            </div>
            <SectionHeader icon={Fingerprint} title="4. Type of BigInt" subtitle="A unique primitive type." color="text-purple-500" />
            <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-white/5 relative z-10 text-center">
               <code className="text-2xl font-mono font-black text-white block mb-4 italic">typeof 10n;</code>
               <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-500 text-white rounded-full shadow-2xl shadow-purple-500/30 text-xs font-black uppercase tracking-widest">
                  <Sparkles size={14} /> "bigint"
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5: Operations ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
           <SectionHeader icon={Calculator} title="5. BigInt Operations 🔥" subtitle="Integer-only arithmetic for massive values." color="text-white" />
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative z-10">
              {[
                { title: 'Addition', code: '10n + 20n', result: '30n' },
                { title: 'Subtraction', code: '20n - 5n', result: '15n' },
                { title: 'Multiplication', code: '5n * 2n', result: '10n' },
                { title: 'Division ❗', code: '10n / 3n', result: '3n' }
              ].map((op, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-all text-center">
                   <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4">{op.title}</h4>
                   <code className="text-sm font-mono text-gray-400 block mb-2">{op.code}</code>
                   <ArrowUpDown className="text-gray-700 mx-auto my-3" size={16} />
                   <code className="text-xl font-mono font-black text-white">{op.result}</code>
                </div>
              ))}
           </div>

           <div className="mt-12 flex items-center justify-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/5">
              <Divide className="text-rose-500" size={24} />
              <p className="text-sm text-gray-400 font-medium">
                <span className="text-rose-400 font-bold uppercase tracking-widest mr-2 underline decoration-rose-500/30 underline-offset-4">Important:</span> 
                BigInt does <span className="text-white font-bold">NOT support decimals</span>. Division always truncates toward zero.
              </p>
           </div>
        </div>
      </section>

      {/* ── Section 6: Mixing & 8: Math ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-1000">
               <GitCompare size={100} className="text-rose-500" />
            </div>
            <SectionHeader icon={ShieldAlert} title="6. Mixing with Number" subtitle="Forbidden fruit: No implicit conversion." color="text-rose-500" />
            <p className="text-gray-500 mb-8 font-medium">Mixing types directly will throw a <span className="text-rose-500 font-black">TypeError</span>. Use explicit conversion.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-6 bg-rose-500/5 rounded-2xl border border-rose-500/10 text-center">
                   <h5 className="text-[10px] font-black text-rose-500 uppercase mb-4">❌ Error</h5>
                   <code className="text-[10px] font-mono font-bold text-rose-600 dark:text-rose-400">10n + 5</code>
                </div>
                <div className="p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 text-center">
                   <h5 className="text-[10px] font-black text-emerald-500 uppercase mb-4">✅ Fixed</h5>
                   <code className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">10n + BigInt(5)</code>
                </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-1000">
               <Scale size={100} className="text-amber-500" />
            </div>
            <SectionHeader icon={ShieldQuestion} title="8. BigInt with Math" subtitle="The Math library gap." color="text-amber-500" />
            <p className="text-gray-500 mb-8 font-medium italic underline decoration-amber-500/30">The built-in Math object only speaks standard Numbers.</p>
            <CodeBlock title="Incompatibility Trap" code={`// ❌ Math.sqrt(16n); // Error\n\n// ✅ Correct\nMath.sqrt(Number(16n));`} />
         </div>
      </section>

      {/* ── Section 7: Comparisons ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={Scale} title="7. Comparisons" subtitle="Loose vs Strict equality." color="text-emerald-500" />
         <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl relative group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
               <GitCompare size={150} className="text-emerald-500" />
            </div>
            <ul className="space-y-6 relative z-10">
               {[
                 { code: '10n > 5', result: 'true', label: 'Value comparison works normally.', color: 'text-sky-500' },
                 { code: '10n == 10', result: 'true', label: 'Loose equality checks only value.', color: 'text-amber-500' },
                 { code: '10n === 10', result: 'false ❗', label: 'Strict equality fails (types: BigInt vs Number).', color: 'text-rose-500' }
               ].map((item, i) => (
                 <li key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-700 hover:scale-[1.01] transition-transform">
                    <code className="text-lg font-mono font-black text-gray-700 dark:text-gray-300 mb-2 md:mb-0">{item.code}</code>
                    <div className="flex items-center gap-6">
                       <span className={`text-xs font-bold ${item.color} uppercase tracking-widest`}>{item.label}</span>
                       <div className="px-5 py-2 bg-slate-900 rounded-xl font-mono text-emerald-400 font-black shadow-lg">
                          {item.result}
                       </div>
                    </div>
                 </li>
               ))}
            </ul>
         </div>
      </section>

      {/* ── Section 9: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="9. Real-World Use Cases 🌍" subtitle="Where precision is non-negotiable." color="text-indigo-500" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
           {[
             { title: 'Finance Systems', icon: Coins, color: 'text-amber-500', desc: 'Large money values' },
             { title: 'Cryptography', icon: Lock, color: 'text-indigo-500', desc: 'Secure keys' },
             { title: 'Blockchain', icon: Bitcoin, color: 'text-orange-500', desc: 'Smart contracts' },
             { title: 'Database IDs', icon: Database, color: 'text-sky-500', desc: '64-bit BigInt IDs' },
             { title: 'Science', icon: Cpu, color: 'text-emerald-500', desc: 'Large calculations' }
           ].map((item, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform overflow-hidden relative text-center">
                <div className={`p-4 rounded-2xl ${item.color} bg-opacity-10 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                   <item.icon size={24} className={item.color} />
                </div>
                <h4 className="font-black text-gray-900 dark:text-white text-[10px] block relative z-10 uppercase tracking-[0.2em] mb-2">{item.title}</h4>
                <p className="text-[10px] text-gray-400 font-medium relative z-10">{item.desc}</p>
                <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${item.color} opacity-5 rounded-full group-hover:scale-[10] transition-transform duration-1000`}></div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Infinity Plus One.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
           In a world of floating points, BigInt provides the absolute ground.<br />
           Precision isn't just a requirement; it's the foundation of trust in data.
         </p>
      </footer>

    </div>
  );
};

export default JsBigInt;