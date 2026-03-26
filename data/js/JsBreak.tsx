import React, { useState, useEffect } from 'react';
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
  Play,
  StopCircle,
  PlayCircle,
  ArrowRightCircle,
  Trash2,
  Columns,
  SkipForward,
  LogOut,
  Repeat
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

const JsBreak: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'break' | 'continue'>('break');
  const [breakValue, setBreakValue] = useState(3);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const items = [1, 2, 3, 4, 5];

  useEffect(() => {
    let timer: any;
    if (isRunning && currentIdx < items.length) {
      if (activeTab === 'break' && items[currentIdx] === breakValue) {
        setIsRunning(false);
      } else {
        timer = setTimeout(() => {
          setCurrentIdx(prev => prev + 1);
        }, 800);
      }
    } else {
      setIsRunning(false);
    }
    return () => clearTimeout(timer);
  }, [isRunning, currentIdx, activeTab, breakValue]);

  const resetLab = () => {
    setCurrentIdx(0);
    setIsRunning(false);
  };

  const startLab = () => {
    setCurrentIdx(0);
    setIsRunning(true);
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 text-[10px] font-black mb-8 border border-rose-100 dark:border-rose-900/50 shadow-xl shadow-rose-500/5 animate-pulse tracking-[0.2em]">
          <StopCircle size={14} className="fill-current" /> EXECUTION CONTROL
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Break<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-orange-500 drop-shadow-2xl">
            Statement
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Master the art of the early exit. Stop loops, exit switches, and <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500 underline-offset-4 tracking-tight">optimize performance</span> by cutting unnecessary cycles.
        </p>
      </header>

      {/* ── Section 1-2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What & 2. Why?" subtitle="Terminating execution when needed." color="text-rose-500" />
            <div className="space-y-6">
               <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                 👉 The <span className="text-rose-500 font-black tracking-widest px-2 py-0.5 bg-rose-500/5 rounded-lg border border-rose-500/10">break</span> statement immediately halts the innermost loop or switch.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Speed', text: 'Stop iterations ⚡', icon: Zap },
                    { label: 'Compute', text: 'Avoid calculations 💾', icon: Cpu },
                    { label: 'Efficiency', text: 'Performance gain 🚀', icon: Activity },
                    { label: 'Logic', text: 'Clean exit 🎯', icon: LogOut }
                  ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-1 transition-transform">
                       <item.icon className="text-rose-500 mb-3" size={20} />
                       <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">{item.label}</span>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-orange-500 rounded-[3.5rem] blur-2xl opacity-10"></div>
            <div className="relative bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl min-h-[450px] flex flex-col">
               <div className="flex justify-between items-center mb-10 text-white">
                  <h3 className="font-black text-xl flex items-center gap-3 italic">
                     <Monitor className="text-rose-500 animate-pulse" size={24} /> Loop Execution Lab
                  </h3>
                  <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-rose-400 uppercase tracking-[0.2em]">
                    Active: {activeTab.toUpperCase()}
                  </div>
               </div>

               <div className="flex-1 flex flex-col justify-center">
                  <div className="flex gap-2 mb-12">
                     {items.map((val, i) => {
                       const isProcessed = i < currentIdx;
                       const isCurrent = i === currentIdx;
                       const isSkipped = activeTab === 'continue' && val === breakValue && isProcessed;
                       const isHalted = activeTab === 'break' && val === breakValue && i <= currentIdx;

                       return (
                         <div key={val} className={`flex-1 h-32 rounded-2xl flex flex-col items-center justify-center font-black transition-all duration-500 border ${
                           isCurrent ? 'scale-110 border-rose-500 shadow-2xl z-10 bg-rose-500 text-white' : 
                           isProcessed ? (isSkipped ? 'bg-white/5 border-white/5 opacity-30 text-gray-700' : 'bg-emerald-500 text-white border-transparent') : 
                           'bg-white/5 border-white/5 text-gray-600'
                         }`}>
                           <span className="text-xs mb-1 uppercase tracking-tighter opacity-50">Iter</span>
                           <span className="text-2xl font-mono italic">{val}</span>
                           {activeTab === 'break' && val === breakValue && (
                             <div className="absolute -top-2 px-3 py-0.5 bg-rose-600 text-[8px] rounded-full text-white shadow-xl shadow-rose-900 font-bold border border-rose-400/30 tracking-widest leading-relaxed">BREAK 🛑</div>
                           )}
                           {activeTab === 'continue' && val === breakValue && (
                             <div className="absolute -top-2 px-3 py-0.5 bg-orange-600 text-[8px] rounded-full text-white shadow-xl shadow-orange-900 font-bold border border-orange-400/30 tracking-widest leading-relaxed">SKIP ⏭️</div>
                           )}
                         </div>
                       );
                     })}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="flex gap-2">
                        {['break', 'continue'].map((t) => (
                           <button 
                             key={t}
                             onClick={() => { setActiveTab(t as any); resetLab(); }}
                             className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === t ? 'bg-white text-slate-900' : 'bg-white/5 text-gray-500 border border-white/5'}`}
                           >
                              {t}
                           </button>
                        ))}
                     </div>
                     <div className="flex gap-2">
                        <button onClick={isRunning ? resetLab : startLab} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest ${isRunning ? 'bg-rose-500 text-white' : 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20'}`}>
                           {isRunning ? <RefreshCw className="animate-spin" size={12} /> : <PlayCircle size={12} />}
                           {isRunning ? 'RESET' : 'RUN'}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 3: break in Loops ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-8">
         <SectionHeader icon={Repeat} title="3. break in Loops 🔥" subtitle="Mastering exits across all loop flavors." color="text-rose-500" />
         <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group">
               <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-6 italic underline decoration-rose-500/30 underline-offset-4">3.1 The for Loop</h4>
               <p className="text-xs text-gray-500 mb-6 font-medium font-serif italic">Perfect for static iteration control.</p>
               <CodeBlock code={`for (let i = 1; i <= 5; i++) {\n    if (i === 3) break;\n    console.log(i);\n}\n// Output: 1, 2`} />
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group">
                <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-6 italic underline decoration-rose-500/30 underline-offset-4">3.2 The while Loop</h4>
                <p className="text-xs text-gray-500 mb-6 font-medium italic font-serif">Ideal for dynamic exit conditions.</p>
                <CodeBlock code={`while (i <= 5) {\n    if (i === 4) break;\n    console.log(i);\n    i++;\n}\n// Output: 1, 2, 3`} />
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group">
                <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-6 italic underline decoration-rose-500/30 underline-offset-4">3.3 The do...while</h4>
                <p className="text-xs text-gray-500 mb-6 font-medium italic font-serif">Ensures at least one check before exit.</p>
                <CodeBlock code={`do {\n    if (i === 2) break;\n    console.log(i);\n    i++;\n} while (i <= 5);\n// Output: 1`} />
            </div>
         </div>
      </section>

      {/* ── Section 4: switch & 5: Labels ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="bg-slate-900 p-12 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
               <Columns size={150} className="text-rose-500" />
            </div>
            <SectionHeader icon={Layout} title="4. break in switch ⚠️" subtitle="Avoiding the dangerous fall-through." color="text-rose-400" />
            <p className="text-gray-400 mb-8 font-medium leading-relaxed italic border-l-2 border-rose-500/30 pl-6">
              Missing a break results in <span className="text-rose-500 font-bold uppercase tracking-widest">fall-through</span>, where the next case executes regardless of the condition.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
               <div className="p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/10">
                  <h5 className="text-[8px] font-black text-emerald-500 uppercase mb-4 tracking-widest italic">✅ Correct</h5>
                  <code className="text-[10px] font-mono font-bold text-emerald-400 leading-loose">case 1: ... break;<br />case 2: ... break;</code>
               </div>
               <div className="p-6 bg-rose-500/5 rounded-3xl border border-rose-500/10">
                  <h5 className="text-[8px] font-black text-rose-500 uppercase mb-4 tracking-widest italic">❌ Fall-through</h5>
                  <code className="text-[10px] font-mono font-bold text-rose-400 leading-loose italic underline decoration-rose-500/20 underline-offset-4">case 1: ... // No break<br />case 2: ... // Runs ❗</code>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-0">
               <Layers size={150} className="text-indigo-500" />
            </div>
            <SectionHeader icon={Fingerprint} title="5. Labels (Advanced 🔥)" subtitle="Breaking out of nested loops." color="text-indigo-500" />
            <p className="text-gray-500 mb-8 font-medium italic underline decoration-indigo-500/30 underline-offset-4">Labels allow you to target specific loops for termination.</p>
            <CodeBlock title="Nested Exit" code={`outerLoop:\nfor (let i = 1; i <= 3; i++) {\n    for (let j = 1; j <= 3; j++) {\n        if (i === 2 && j === 2) break outerLoop;\n        console.log(i, j);\n    }\n}`} />
         </div>
      </section>

      {/* ── Section 6: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="p-16 bg-white dark:bg-gray-800 rounded-[5rem] shadow-2xl border border-gray-50 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
               <Search size={200} className="text-sky-500" />
            </div>
            <div className="max-w-2xl">
               <SectionHeader icon={Globe} title="6. Real-World Power 🌍" subtitle="Efficiency in data searching." color="text-sky-500" />
               <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-serif italic">
                 "Searching through an array of 1 million items? Why check the other 999,970 items once you've found what you need?"
               </p>
               <CodeBlock title="Optimized Search" code={`const arr = [10, 20, 30, 40];\nfor (let i = 0; i < arr.length; i++) {\n    if (arr[i] === 30) {\n        console.log("Found!", i);\n        break; // Exit the hunt 🏹\n    }\n}`} />
            </div>
         </div>
      </section>

      {/* ── Section 7: vs Continue ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Scale} title="7. break vs continue ⚠️" subtitle="A side-by-side comparison." color="text-emerald-500" />
         <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-900 p-12 rounded-[4rem] border border-white/5 shadow-2xl">
                <table className="w-full text-left">
                   <thead>
                      <tr className="border-b border-white/10">
                         <th className="py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Feature</th>
                         <th className="py-6 text-[10px] font-black text-rose-500 uppercase tracking-widest italic">break</th>
                         <th className="py-6 text-[10px] font-black text-orange-500 uppercase tracking-widest italic">continue</th>
                      </tr>
                   </thead>
                   <tbody className="text-sm font-medium">
                      <tr className="border-b border-white/5">
                         <td className="py-6 text-gray-400 italic">Stops Entire Loop</td>
                         <td className="py-6 text-emerald-400 font-black italic">YES ✅</td>
                         <td className="py-6 text-rose-400 font-black italic underline decoration-rose-500/20 decoration-2">NO ❌</td>
                      </tr>
                      <tr className="border-b border-white/5">
                         <td className="py-6 text-gray-400 italic">Skips Single Iteration</td>
                         <td className="py-6 text-rose-400 font-black italic underline decoration-rose-500/20 decoration-2">NO ❌</td>
                         <td className="py-6 text-emerald-400 font-black italic">YES ✅</td>
                      </tr>
                   </tbody>
                </table>
            </div>

            <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col justify-center">
               <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-6 italic underline decoration-orange-500/20 underline-offset-4 tracking-tighter">Skipping with continue</h4>
               <CodeBlock code={`for (let i = 1; i <= 5; i++) {\n    if (i === 3) continue;\n    console.log(i);\n}\n// Output: 1, 2, 4, 5 (3 was skipped)`} />
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Cycle Ended.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto italic underline decoration-rose-500/10">
           "Efficiency is not just about moving fast; it's about knowing exactly when to stop."
         </p>
      </footer>

    </div>
  );
};

export default JsBreak;