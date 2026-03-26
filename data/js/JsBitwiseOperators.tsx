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
  AlertCircle,
  Hash,
  FastForward,
  Shuffle,
  Flag,
  Key,
  Unlock,
  Shield,
  Dna,
  Play
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

const JsBitwiseOperators: React.FC = () => {
  const [valA, setValA] = useState(5);
  const [valB, setValB] = useState(3);
  const [op, setOp] = useState<'&' | '|' | '^' | '<<' | '>>' | '>>>'>('&');

  const binaryA = (valA >>> 0).toString(2).padStart(8, '0').slice(-8);
  const binaryB = (valB >>> 0).toString(2).padStart(8, '0').slice(-8);

  const calculateResult = () => {
    switch (op) {
      case '&': return valA & valB;
      case '|': return valA | valB;
      case '^': return valA ^ valB;
      case '<<': return valA << 1;
      case '>>': return valA >> 1;
      case '>>>': return valA >>> 1;
      default: return 0;
    }
  };

  const result = calculateResult();
  const binaryRes = (result >>> 0).toString(2).padStart(8, '0').slice(-8);

  const [permissions, setPermissions] = useState(0b100); // Start with READ only

  const togglePermission = (mask: number) => {
    setPermissions(prev => prev ^ mask);
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <Dna size={14} className="fill-current" /> DIGITAL DNA MANIPULATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Bitwise<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 drop-shadow-2xl font-black">
            Operators
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The fine art of binary logic. Master the <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500 underline-offset-4 tracking-tight">low-level tools</span> that power modern game engines and encryption.
        </p>
      </header>

      {/* ── Section 1-2: Concepts & Binary ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Binary} title="1. What & 2. Binary Basics" subtitle="Processing data at the 0s and 1s level." color="text-sky-500" />
            <div className="space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                👉 Numbers are converted into <span className="text-sky-500 font-black px-2 py-0.5 bg-sky-500/5 rounded-lg border border-sky-500/10">Binary Bits</span>. Operations are performed bit-by-bit and returned as a decimal.
              </p>
              
              <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <Cpu size={120} className="text-sky-500" />
                 </div>
                 <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.4em] mb-4">Storage Map 🧠</h4>
                 <div className="flex gap-4">
                    <div className="flex-1 p-6 bg-sky-500 text-white rounded-3xl shadow-xl shadow-sky-500/20 text-center">
                       <span className="text-[10px] font-black uppercase tracking-widest block mb-2 opacity-60">Number 5</span>
                       <span className="text-2xl font-mono font-black tracking-widest">0101</span>
                    </div>
                    <div className="flex-1 p-6 bg-slate-900 text-white rounded-3xl border border-white/5 text-center">
                       <span className="text-[10px] font-black uppercase tracking-widest block mb-2 opacity-60">Number 3</span>
                       <span className="text-2xl font-mono font-black tracking-widest">0011</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-blue-500 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
               <div className="flex justify-between items-center mb-10 text-white">
                  <h3 className="font-black text-xl flex items-center gap-3 italic">
                     <Terminal className="text-sky-500 animate-pulse" size={24} /> Bitwise Lab
                  </h3>
                  <div className="flex gap-2">
                     <input 
                       type="number" 
                       value={valA} 
                       onChange={(e) => setValA(parseInt(e.target.value) || 0)}
                       className="w-16 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs font-mono text-sky-400 outline-none"
                     />
                     <span className="text-gray-700 font-mono text-xl">{op}</span>
                     <input 
                       type="number" 
                       value={valB} 
                       onChange={(e) => setValB(parseInt(e.target.value) || 0)}
                       className="w-16 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs font-mono text-blue-400 outline-none"
                     />
                  </div>
               </div>

               <div className="flex-1 flex flex-col justify-center space-y-8">
                  <div className="space-y-4">
                     <div className="flex gap-1.5 h-12">
                        {binaryA.split('').map((bit, i) => (
                           <div key={i} className={`flex-1 rounded-xl flex items-center justify-center font-mono font-black transition-all ${bit === '1' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' : 'bg-white/5 text-gray-700 underline decoration-gray-800 underline-offset-8'}`}>
                              {bit}
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                     {['&', '|', '^', '<<', '>>', '>>>'].map((operator) => (
                       <button 
                         key={operator}
                         onClick={() => setOp(operator as any)}
                         className={`px-4 py-2 rounded-xl text-xs font-black transition-all border ${op === operator ? 'bg-sky-500 text-white border-transparent' : 'bg-white/5 text-gray-500 border-white/5 hover:text-white'}`}
                       >
                         {operator}
                       </button>
                     ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-1.5 h-12">
                        {binaryB.split('').map((bit, i) => (
                           <div key={i} className={`flex-1 rounded-xl flex items-center justify-center font-mono font-black transition-all ${bit === '1' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-gray-700 underline decoration-gray-800 underline-offset-8'}`}>
                              {bit}
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="pt-10 border-t border-white/5">
                     <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest underline decoration-sky-500/30 underline-offset-4">Decimal Result : {result}</span>
                        <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest italic animate-pulse">OUTPUT FOUND</span>
                     </div>
                     <div className="flex gap-1.5 h-12">
                        {binaryRes.split('').map((bit, i) => (
                           <div key={i} className={`flex-1 rounded-xl flex items-center justify-center font-mono font-black transition-all ${bit === '1' ? 'bg-white text-indigo-900' : 'bg-white/5 text-gray-700'}`}>
                              {bit}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Operator List ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-12 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
               <Layout size={200} className="text-white" />
            </div>
            <h3 className="text-white font-black text-3xl mb-12 flex items-center gap-4">
               <Hash className="text-sky-500" /> 3. Bitwise Operator Map
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { sym: '&', name: 'Bitwise AND', desc: 'Both bits must be 1' },
                 { sym: '|', name: 'Bitwise OR', desc: 'Either bit can be 1' },
                 { sym: '^', name: 'Bitwise XOR', desc: 'Different bits (0,1 or 1,0)' },
                 { sym: '~', name: 'Bitwise NOT', desc: 'Inverts all bits' },
                 { sym: '<<', name: 'Left Shift', desc: 'Shift bits left' },
                 { sym: '>>', name: 'Right Shift', desc: 'Shift right (signed)' },
                 { sym: '>>>', name: 'Zero-fill RS', desc: 'Shift right (unsigned)' }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-3xl hover:bg-white/10 transition-all text-center">
                    <div className="w-12 h-12 bg-sky-500 text-white rounded-2xl flex items-center justify-center font-black mx-auto mb-4 italic text-lg shadow-lg shadow-sky-500/20">
                       {item.sym}
                    </div>
                    <h5 className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-1 italic">{item.name}</h5>
                    <p className="text-[10px] text-gray-500 font-medium leading-relaxed underline underline-offset-4 decoration-white/5">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Section 4-7: Logical Ops ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="space-y-8">
            <SectionHeader icon={ShieldCheck} title="Logic Gates" subtitle="Refining bits via boolean logic." color="text-sky-500" />
            <div className="grid gap-6">
               {[
                 { id: 4, sym: '&', title: 'Bitwise AND', code: '5 & 3', out: '1' },
                 { id: 5, sym: '|', title: 'Bitwise OR', code: '5 | 3', out: '7' },
                 { id: 6, sym: '^', title: 'Bitwise XOR', code: '5 ^ 3', out: '6' }
               ].map((op) => (
                 <div key={op.id} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:scale-[1.01] transition-transform">
                    <div className="flex justify-between items-center mb-6">
                       <h4 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest">{op.id}. {op.title}</h4>
                       <span className="p-3 bg-sky-500 text-white rounded-xl font-black italic shadow-lg shadow-sky-500/20">{op.sym}</span>
                    </div>
                    <CodeBlock code={`${op.code}; // Output: ${op.out}`} />
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 scale-150 rotate-12 group-hover:scale-[2] transition-transform duration-1000">
               <Shuffle size={140} className="text-rose-500" />
            </div>
            <SectionHeader icon={RefreshCw} title="7. Bitwise NOT (~)" subtitle="The inversion formula." color="text-rose-500" />
            <div className="p-10 bg-slate-900 rounded-[2.5rem] text-center mb-8 border border-white/5 relative z-10 shadow-2xl">
               <code className="text-2xl font-mono font-black text-white italic block mb-2">~5; // Output: -6</code>
               <div className="inline-flex items-center gap-2 px-6 py-2 bg-rose-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                  <Calculator size={14} /> Formula: ~x = -(x + 1)
               </div>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed italic text-sm">
              Inverting bits converts the number using <span className="text-rose-500 font-black">2's complement</span>, which results in the negative offset of the original value + 1.
            </p>
         </div>
      </section>

      {/* ── Section 8-10: Shift Mastery ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={FastForward} title="Shift Operators Mastery" subtitle="Scaling data by factors of 2." color="text-sky-600" />
         <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group relative overflow-hidden">
               <h4 className="font-black text-gray-900 dark:text-white text-xs uppercase mb-6 tracking-widest italic">8. Left Shift ({ '<<' })</h4>
               <p className="text-[10px] text-gray-500 mb-8 font-medium italic underline decoration-sky-500/30 underline-offset-4">Mathematical Meaning: Multiply by 2ⁿ</p>
               <CodeBlock code="5 << 1; // 10\n// 0101 -> 1010" />
            </div>
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl group relative overflow-hidden">
               <h4 className="font-black text-gray-900 dark:text-white text-xs uppercase mb-6 tracking-widest italic">9. Right Shift ({ '>>' })</h4>
               <p className="text-[10px] text-gray-500 mb-8 font-medium italic underline decoration-blue-500/30 underline-offset-4">Mathematical Meaning: Divide by 2ⁿ</p>
               <CodeBlock code="5 >> 1; // 2\n// 0101 -> 0010" />
            </div>
            <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl group relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Zap size={100} className="text-emerald-500" />
               </div>
               <h4 className="font-black text-emerald-400 text-xs uppercase mb-6 tracking-widest">10. Zero-fill RS ({'>>>'})</h4>
               <p className="text-[10px] text-gray-500 mb-8 font-black uppercase tracking-widest italic italic">Removes the sign bit entirely.</p>
               <CodeBlock code="-5 >>> 1; \n// 2147483645" />
            </div>
         </div>
      </section>

      {/* ── Section 11: System Lab ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={Terminal} title="11. Complete System Example" subtitle="The full bitwise toolkit in action." color="text-sky-500" />
         <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[3rem] blur opacity-15"></div>
            <CodeBlock title="bitwise_core.js" code={`let a = 5; let b = 3;\n\nconsole.log(a & b);   // 1\nconsole.log(a | b);   // 7\nconsole.log(a ^ b);   // 6\nconsole.log(~a);      // -6\nconsole.log(a << 1);  // 10\nconsole.log(a >> 1);  // 2`} />
         </div>
      </section>

      {/* ── Section 12: Real-World Applications & Bit Masking Simulator ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Globe} title="12. Real-World Applications 🌍" subtitle="Beyond binary: High-performance logic." color="text-indigo-500" />
         
         <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl flex gap-6 items-center">
                  <div className="p-4 bg-sky-500 text-white rounded-2xl shadow-lg">
                     <Shuffle size={20} />
                  </div>
                  <div>
                     <h5 className="font-black text-gray-900 dark:text-white uppercase tracking-widest text-[10px] mb-1">Check Even / Odd</h5>
                     <code className="text-sky-500 text-xs font-mono font-black italic">num & 1 ? "Odd" : "Even"</code>
                  </div>
               </div>
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl flex gap-6 items-center">
                  <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg">
                     <Activity size={20} />
                  </div>
                  <div>
                     <h5 className="font-black text-gray-900 dark:text-white uppercase tracking-widest text-[10px] mb-1">XOR Swap (No Temp)</h5>
                     <code className="text-blue-500 text-xs font-mono font-black italic">a=a^b; b=a^b; a=a^b;</code>
                  </div>
               </div>
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl flex gap-6 items-center">
                  <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg">
                     <Zap size={20} />
                  </div>
                  <div>
                     <h5 className="font-black text-gray-900 dark:text-white uppercase tracking-widest text-[10px] mb-1">Fast Multiply/Divide</h5>
                     <code className="text-indigo-500 text-xs font-mono font-black italic">num { '<<' } 1; num { '>>' } 1;</code>
                  </div>
               </div>
            </div>

            <div className="bg-slate-900 p-10 rounded-[4rem] border border-white/5 shadow-2xl relative group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <Unlock size={120} className="text-sky-500" />
               </div>
               <h4 className="text-[10px] font-black text-sky-400 uppercase tracking-[0.4em] mb-8">4. Bit Masking (Advanced) 🔐</h4>
               <p className="text-xs text-gray-400 font-medium mb-10 leading-relaxed italic uppercase tracking-widest italic">
                 Permissions System Visualization
               </p>

               <div className="grid grid-cols-3 gap-4 mb-10">
                  {[
                    { mask: 0b100, label: 'READ', icon: Eye },
                    { mask: 0b010, label: 'WRITE', icon: Code2 },
                    { mask: 0b001, label: 'EXEC', icon: Play }
                  ].map((perm) => (
                    <button 
                      key={perm.label}
                      onClick={() => togglePermission(perm.mask)}
                      className={`p-6 rounded-3xl border transition-all flex flex-col items-center gap-2 ${permissions & perm.mask ? 'bg-sky-500 border-transparent text-white shadow-xl shadow-sky-500/20' : 'bg-white/5 border-white/5 text-gray-600'}`}
                    >
                       <perm.icon size={20} />
                       <span className="text-[8px] font-black tracking-widest uppercase">{perm.label}</span>
                    </button>
                  ))}
               </div>

               <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-2">Mask Value (Binary)</span>
                  <span className="text-xl font-mono font-black text-white italic">
                    {permissions.toString(2).padStart(3, '0')}
                  </span>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Binary Mastery.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto">
           "In the realm of high-performance computing, the smallest unit of data is the greatest lever of optimization."
         </p>
      </footer>

    </div>
  );
};

export default JsBitwiseOperators;