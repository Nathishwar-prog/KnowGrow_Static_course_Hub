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
  Key
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

const JsBitwise: React.FC = () => {
  const [valA, setValA] = useState(5);
  const [valB, setValB] = useState(3);
  const [operator, setOperator] = useState<'&' | '|' | '^' | '<<' | '>>'>('&');

  const binaryA = valA.toString(2).padStart(8, '0');
  const binaryB = valB.toString(2).padStart(8, '0');

  const result = useMemo(() => {
    switch (operator) {
      case '&': return valA & valB;
      case '|': return valA | valB;
      case '^': return valA ^ valB;
      case '<<': return valA << 1;
      case '>>': return valA >> 1;
      default: return 0;
    }
  }, [valA, valB, operator]);

  const binaryResult = result.toString(2).padStart(8, '0').slice(-8);

  return (
    <div className="p-4 sm:p-10 bg-[#f0fdf4] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 animate-pulse tracking-[0.2em]">
          <Cpu size={14} className="fill-current" /> LOW-LEVEL MANIPULATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Bitwise<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 drop-shadow-2xl">
            Operators
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Unlock the speed of the machine by manipulating data at its <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4">most fundamental level</span>—the bit.
        </p>
      </header>

      {/* ── Section 1-3: Concepts & Binary ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader icon={Binary} title="1. What & 3. Binary Basics" subtitle="Working beneath decimals at the bit level." color="text-emerald-500" />
            <div className="space-y-6">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                👉 Bitwise operators convert numbers into <span className="text-emerald-500 font-bold italic tracking-wider px-2 py-0.5 bg-emerald-500/5 rounded-lg border border-emerald-500/10 uppercase text-xs">0s and 1s</span>, perform operations, and return the decimal result.
              </p>
              
              <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <Zap size={120} className="text-emerald-500" />
                 </div>
                 <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4">2. Why Bitwise? ⚡</h4>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Speed', text: 'Faster Operations ⚡', color: 'bg-amber-500' },
                      { label: 'Storage', text: 'Memory Efficient 💾', color: 'bg-sky-500' },
                      { label: 'Fields', text: 'Graphics & Games 🎮', color: 'bg-purple-500' },
                      { label: 'Security', text: 'Cryptography 🔐', color: 'bg-rose-500' }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700">
                         <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">{item.label}</span>
                         <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.text}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
               <div className="flex justify-between items-center mb-10 text-white">
                  <h3 className="font-black text-xl flex items-center gap-3">
                     <Terminal className="text-emerald-500 animate-pulse" size={24} /> Bitwise Lab
                  </h3>
                  <div className="flex gap-2">
                     <input 
                       type="number" 
                       value={valA} 
                       onChange={(e) => setValA(Math.min(255, Math.max(0, parseInt(e.target.value) || 0)))}
                       className="w-16 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs font-mono text-emerald-400"
                     />
                     <input 
                       type="number" 
                       value={valB} 
                       onChange={(e) => setValB(Math.min(255, Math.max(0, parseInt(e.target.value) || 0)))}
                       className="w-16 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs font-mono text-cyan-400"
                     />
                  </div>
               </div>

               <div className="flex-1 space-y-8 flex flex-col justify-center">
                  <div className="space-y-2">
                     <div className="flex justify-between text-[8px] font-black text-emerald-500/50 tracking-[0.3em] uppercase">
                        <span>A : {valA}</span>
                     </div>
                     <div className="flex gap-1.5">
                        {binaryA.split('').map((bit, i) => (
                           <div key={i} className={`flex-1 aspect-square rounded-lg flex items-center justify-center font-mono text-sm font-black transition-all ${bit === '1' ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-white/5 text-gray-700'}`}>
                              {bit}
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="flex justify-center items-center py-2">
                     <div className="flex gap-1 p-1 bg-white/5 rounded-2xl border border-white/5">
                        {['&', '|', '^', '<<', '>>'].map((op) => (
                           <button 
                             key={op}
                             onClick={() => setOperator(op as any)}
                             className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-all ${operator === op ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                           >
                             {op}
                           </button>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-2">
                     <div className="flex justify-between text-[8px] font-black text-cyan-500/50 tracking-[0.3em] uppercase">
                        <span>B : {valB}</span>
                     </div>
                     <div className="flex gap-1.5">
                        {binaryB.split('').map((bit, i) => (
                           <div key={i} className={`flex-1 aspect-square rounded-lg flex items-center justify-center font-mono text-sm font-black transition-all ${bit === '1' ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-white/5 text-gray-700'}`}>
                              {bit}
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="pt-8 border-t border-white/5 space-y-2">
                     <div className="flex justify-between text-[8px] font-black text-gray-500 tracking-[0.3em] uppercase">
                        <span>Result : {result}</span>
                     </div>
                     <div className="flex gap-1.5">
                        {binaryResult.split('').map((bit, i) => (
                           <div key={i} className={`flex-1 aspect-square rounded-lg flex items-center justify-center font-mono text-sm font-black transition-all ${bit === '1' ? 'bg-white text-[#0b1120]' : 'bg-white/5 text-gray-700'}`}>
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

      {/* ── Section 4: Operators List ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-10 rounded-[4rem] shadow-2xl relative overflow-hidden border border-emerald-500/10">
            <div className="absolute top-0 right-0 p-12 text-emerald-500 opacity-5">
               <Fingerprint size={140} rotate={12} />
            </div>
            <h3 className="text-white font-black text-3xl mb-12 flex items-center gap-4">
               <Hash className="text-emerald-500" /> 4. Bitwise Operators Toolkit
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { sym: '&', name: 'AND', desc: 'Both bits must be 1' },
                 { sym: '|', name: 'OR', desc: 'Either bit can be 1' },
                 { sym: '^', name: 'XOR', desc: 'Different bits (0,1 or 1,0)' },
                 { sym: '~', name: 'NOT', desc: 'Invert all bits (2\'s comp)' },
                 { sym: '<<', name: 'Left Shift', desc: 'Shift left (Mult by 2)' },
                 { sym: '>>', name: 'Right Shift', desc: 'Shift right (Div by 2)' }
               ].map((op, i) => (
                 <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all group">
                    <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-xl font-black shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
                       {op.sym}
                    </div>
                    <div>
                       <span className="text-xs font-black text-emerald-400 block tracking-widest mb-1 italic uppercase">{op.name}</span>
                       <p className="text-[10px] text-gray-500 font-medium leading-relaxed">{op.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Section 5-10: Detailed Ops ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="space-y-8">
            <SectionHeader icon={Info} title="Logical Operations" subtitle="Processing individual bits." color="text-emerald-500" />
            <div className="grid gap-6">
               {[
                 { id: 5, sym: '&', title: 'Bitwise AND', code: '5 & 3', desc: '0101 & 0011 = 0001 (1)' },
                 { id: 6, sym: '|', title: 'Bitwise OR', code: '5 | 3', desc: '0101 | 0011 = 0111 (7)' },
                 { id: 7, sym: '^', title: 'Bitwise XOR', code: '5 ^ 3', desc: '0101 ^ 0011 = 0110 (6)' }
               ].map((op) => (
                 <div key={op.id} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group">
                    <div className="flex justify-between items-center mb-6">
                       <h4 className="font-black text-gray-900 dark:text-white uppercase tracking-widest text-xs">{op.title}</h4>
                       <div className="px-4 py-1.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-black rounded-full italic">{op.sym}</div>
                    </div>
                    <CodeBlock code={op.desc} />
                 </div>
               ))}
            </div>
         </div>

         <div className="space-y-8">
            <SectionHeader icon={FastForward} title="Shift Operations" subtitle="Moving bits left and right." color="text-cyan-500" />
            <div className="grid gap-6">
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
                  <h4 className="font-black text-gray-900 dark:text-white uppercase tracking-widest text-xs mb-6 italic">9. Left Shift ({ '<<' })</h4>
                  <p className="text-xs text-gray-500 mb-6 font-medium">Equiv: Multiply by 2. `5 { '<<' } 1` → `1010` (10)</p>
                  <CodeBlock code="let res = 5 << 1; // 10" />
               </div>
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
                  <h4 className="font-black text-gray-900 dark:text-white uppercase tracking-widest text-xs mb-6 italic">10. Right Shift ({ '>>' })</h4>
                  <p className="text-xs text-gray-500 mb-6 font-medium">Equiv: Divide by 2. `5 { '>>' } 1` → `0010` (2)</p>
                  <CodeBlock code="let res = 5 >> 1; // 2" />
               </div>
               <div className="bg-rose-500/5 border border-rose-500/10 p-8 rounded-[2.5rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                     <AlertTriangle size={64} className="text-rose-500" />
                  </div>
                  <h4 className="font-black text-rose-500 uppercase tracking-widest text-[10px] mb-4">8. Bitwise NOT (~)</h4>
                  <p className="text-xs text-rose-600/80 font-medium leading-relaxed italic">
                    ~5 = -6. This uses 2’s complement logic to invert all bits including the sign bit.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 11: Complete Example ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <SectionHeader icon={Terminal} title="11. Complete Example" subtitle="Putting it all together." color="text-emerald-600" />
         <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[3rem] blur opacity-10"></div>
            <CodeBlock title="main.js" code={`let a = 5; // 0101\nlet b = 3; // 0011\n\nconsole.log(a & b);  // 1\nconsole.log(a | b);  // 7\nconsole.log(a ^ b);  // 6\nconsole.log(a << 1); // 10\nconsole.log(a >> 1); // 2`} />
         </div>
      </section>

      {/* ── Section 12: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Globe} title="12. Real-World Applications 🌍" subtitle="Where bitwise logic saves the day." color="text-teal-500" />
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Even or Odd', 
                icon: Shuffle, 
                desc: 'Odd numbers always have the last bit as 1.',
                code: 'if (num & 1) { /* Odd */ }' 
              },
              { 
                title: 'XOR Swap', 
                icon: Activity, 
                desc: 'Swap two values without a temporary variable.',
                code: 'a^=b; b^=a; a^=b;' 
              },
              { 
                title: 'Fast Math', 
                icon: Zap, 
                desc: 'Shift bits for instant multiplication/division by 2.',
                code: 'n << 1; // n * 2' 
              },
              { 
                title: 'State Flags', 
                icon: Flag, 
                desc: 'Permissions or game states packed into one number.',
                code: 'STATE_READ | STATE_WRITE' 
              }
            ].map((app, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:scale-[1.02] transition-transform overflow-hidden relative">
                 <div className="p-4 rounded-2xl bg-teal-500 text-white w-fit mb-6 shadow-lg shadow-teal-500/20">
                    <app.icon size={24} />
                 </div>
                 <h4 className="font-black text-gray-900 dark:text-white text-xs uppercase tracking-widest mb-4 italic">{app.title}</h4>
                 <p className="text-[10px] text-gray-400 font-medium mb-6 leading-relaxed">{app.desc}</p>
                 <code className="bg-slate-900 text-emerald-400 p-2.5 rounded-xl block text-[9px] font-mono border border-emerald-500/20">{app.code}</code>
                 <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-teal-500 opacity-5 rounded-full group-hover:scale-[10] transition-transform duration-1000"></div>
              </div>
            ))}
         </div>
      </section>

      {/* ── Additional Tech Info ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-3 gap-8 text-center uppercase font-black text-[10px] tracking-[0.2em] text-gray-400 uppercase">
         {[
           { icon: Monitor, label: 'Graphics Pipelines' },
           { icon: Lock, label: 'Encrypted Buffers' },
           { icon: Package, label: 'Embedded Systems' }
         ].map((t, i) => (
           <div key={i} className="p-10 bg-white/5 border border-white/5 rounded-[3rem] flex flex-col items-center gap-4">
              <div className="p-4 bg-emerald-500/20 text-emerald-500 rounded-2xl">
                 <t.icon size={24} />
              </div>
              <span>{t.label}</span>
           </div>
         ))}
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Bit by Bit.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose max-w-2xl mx-auto italic">
           "The most powerful optimizations often lie in understanding exactly how the machine sees your data."
         </p>
      </footer>

    </div>
  );
};

export default JsBitwise;