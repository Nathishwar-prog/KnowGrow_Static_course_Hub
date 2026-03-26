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

const JsContinue: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const skipValue = 2;
  const items = [0, 1, 2, 3, 4];

  useEffect(() => {
    let timer: any;
    if (isRunning && currentIdx < items.length) {
      timer = setTimeout(() => {
        setCurrentIdx(prev => prev + 1);
      }, 1000);
    } else {
      setIsRunning(false);
    }
    return () => clearTimeout(timer);
  }, [isRunning, currentIdx]);

  const resetLab = () => {
    setCurrentIdx(0);
    setIsRunning(false);
  };

  const startLab = () => {
    setCurrentIdx(0);
    setIsRunning(true);
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 animate-pulse tracking-[0.2em]">
          <SkipForward size={14} className="fill-current" /> ITERATION CONTROL
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-500 drop-shadow-2xl">
            Continue
          </span><br />
          Statement
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The <span className="text-indigo-500 font-bold">continue</span> statement tells the loop to skip the current iteration and move directly to the next one.
        </p>
      </header>

      {/* ── Section 1: Definition & Usage ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What & 2. Where?" subtitle="Skipping the rest of the code block." color="text-indigo-500" />
            <div className="space-y-6">
               <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-indigo-500/20">
                     <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Simple Definition:</h3>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                    <span className="text-indigo-500 font-black tracking-widest px-2 py-0.5 bg-indigo-500/5 rounded-lg border border-indigo-500/10">continue</span> tells the loop: “Skip the rest of this iteration and go to the next one.”
                  </p>
               </div>

               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <Layers size={24} className="text-emerald-500" /> Where Can You Use it?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: 'for loop', icon: Repeat, check: true },
                      { label: 'while loop', icon: RefreshCw, check: true },
                      { label: 'do...while', icon: RotateCw, check: true }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-2">
                        <item.icon className="text-indigo-500" size={20} />
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.label}</span>
                        <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">Available ✅</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
               <Terminal size={150} className="text-indigo-500" />
            </div>
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 italic">
               <Fingerprint className="text-indigo-500" size={24} /> 3. Basic Syntax
            </h3>
            <p className="text-gray-400 mb-8 font-medium italic border-l-2 border-indigo-500/30 pl-6">
              Simply use the <span className="text-indigo-400 font-mono font-bold">continue;</span> keyword inside a conditional check within your loop.
            </p>
            <CodeBlock title="Syntax Example" code={`for (let i = 0; i < 5; i++) {\n    if (i === 2) {\n        continue;\n    }\n    console.log(i);\n}`} />
         </div>
      </section>

      {/* ── Section 2: Execution Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Activity} title="4. How It Works (Step-by-Step)" subtitle="Watching the loop skip over values." color="text-indigo-500" />
        
        <div className="grid lg:grid-cols-2 gap-12">
           <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative">
              <div className="flex justify-between items-center mb-10 text-white">
                 <h3 className="font-black text-xl flex items-center gap-3 italic">
                    <Monitor className="text-indigo-500 animate-pulse" size={24} /> Execution Lab
                 </h3>
                 <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-indigo-400 uppercase tracking-[0.2em]">
                   TARGET SKIP: {skipValue}
                 </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                 <div className="flex gap-2 mb-12">
                    {items.map((val, i) => {
                      const isProcessed = i < currentIdx;
                      const isCurrent = i === currentIdx;
                      const isSkipped = val === skipValue && isProcessed;

                      return (
                        <div key={val} className={`flex-1 h-32 rounded-2xl flex flex-col items-center justify-center font-black transition-all duration-500 border relative ${
                          isCurrent ? 'scale-110 border-indigo-500 shadow-2xl z-10 bg-indigo-500 text-white' : 
                          isProcessed ? (isSkipped ? 'bg-white/5 border-white/5 opacity-30 text-gray-700' : 'bg-emerald-500 text-white border-transparent') : 
                          'bg-white/5 border-white/5 text-gray-600'
                        }`}>
                          <span className="text-xs mb-1 uppercase tracking-tighter opacity-50">Iter</span>
                          <span className="text-2xl font-mono italic">{val}</span>
                          {val === skipValue && (
                            <div className={`absolute -top-2 px-3 py-0.5 text-[8px] rounded-full text-white shadow-xl shadow-indigo-900 font-bold border tracking-widest leading-relaxed ${isSkipped ? 'bg-indigo-600 border-indigo-400/30' : 'bg-gray-700 border-gray-600'}`}>SKIP ⏭️</div>
                          )}
                        </div>
                      );
                    })}
                 </div>

                 <div className="flex gap-4">
                    <button onClick={isRunning ? resetLab : startLab} className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isRunning ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' : 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20'}`}>
                       {isRunning ? <RefreshCw className="animate-spin" size={12} /> : <PlayCircle size={12} />}
                       {isRunning ? 'RESET LAB' : 'EXECUTE LOOP'}
                    </button>
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-center">
                       <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Current Output:</span>
                       <span className="text-emerald-400 font-mono text-lg">
                          {items.slice(0, currentIdx).filter(v => v !== skipValue).join(', ') || 'Waiting...'}
                       </span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl overflow-x-auto">
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-widest italic flex items-center gap-2">
                 <ClipboardList className="text-indigo-500" size={20} /> Desk Check Table
              </h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">i value</th>
                    <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Condition (i === 2)</th>
                    <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Action</th>
                    <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Output</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {[
                    { i: 0, cond: '❌ False', action: 'Print', out: '0' },
                    { i: 1, cond: '❌ False', action: 'Print', out: '1' },
                    { i: 2, cond: '✅ True', action: 'Skip iteration', out: '❌' },
                    { i: 3, cond: '❌ False', action: 'Print', out: '3' },
                    { i: 4, cond: '❌ False', action: 'Print', out: '4' }
                  ].map((row, idx) => (
                    <tr key={idx} className={`border-b border-gray-50 dark:border-gray-800/50 ${idx === skipValue ? 'bg-indigo-500/5' : ''}`}>
                      <td className="py-4 font-mono font-bold text-gray-700 dark:text-gray-300">{row.i}</td>
                      <td className="py-4 text-xs font-bold text-gray-500">{row.cond}</td>
                      <td className={`py-4 text-xs font-black uppercase tracking-tight ${idx === skipValue ? 'text-indigo-500' : 'text-emerald-500'}`}>{row.action}</td>
                      <td className="py-4 font-mono font-bold text-gray-900 dark:text-white">{row.out}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </div>
      </section>

      {/* ── Section 3: Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Workflow} title="5. Visualization (Loop Flow)" subtitle="Understanding the control transfer." color="text-indigo-500" />
         <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10">
               {[
                 { label: 'Loop Start', icon: Play, color: 'bg-emerald-500' },
                 { label: 'Check Condition', icon: Eye, color: 'bg-blue-500' },
                 { label: 'Execute Code?', icon: Code2, color: 'bg-indigo-500', isContinueNode: true },
                 { label: 'Next Iteration', icon: ArrowRightCircle, color: 'bg-indigo-500' }
               ].map((step, i) => (
                 <React.Fragment key={i}>
                    <div className="flex flex-col items-center group/step">
                       <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-xl group-hover/step:scale-110 transition-transform relative`}>
                          <step.icon size={32} />
                          {step.isContinueNode && (
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 text-center">
                               <div className="bg-rose-500 text-[8px] font-black text-white px-2 py-1 rounded-full uppercase tracking-[0.2em] mb-2 animate-bounce">Continue? YES</div>
                               <div className="h-4 w-px bg-rose-500 mx-auto"></div>
                            </div>
                          )}
                       </div>
                       <span className="text-xs font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest">{step.label}</span>
                    </div>
                    {i < 3 && (
                      <div className="hidden md:block">
                        <ArrowRight className="text-gray-300 dark:text-gray-700" size={32} />
                      </div>
                    )}
                 </React.Fragment>
               ))}
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-100 dark:border-indigo-800/50">
               <Info size={14} className="text-indigo-500" />
               <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-widest">Notice: "Next Iteration" triggers immediately if continue is hit.</span>
            </div>
         </div>
      </section>

      {/* ── Section 4: While Loop ── */}
      <section className="max-w-6xl mx-auto mb-32 space-y-8">
         <SectionHeader icon={RefreshCw} title="6. Example with while Loop 🔥" subtitle="Iteration control in dynamic loops." color="text-indigo-500" />
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-serif italic border-l-4 border-indigo-500/20 pl-8">
                 In a <span className="text-indigo-500 font-bold">while</span> loop, it's crucial to update the iterator <span className="text-indigo-500 font-mono underline">before</span> the continue statement, or you might hit an infinite loop!
               </p>
               <div className="p-8 bg-emerald-500/5 rounded-[3rem] border border-emerald-500/10">
                  <h4 className="text-xs font-black text-emerald-500 uppercase mb-4 tracking-widest italic flex items-center gap-2">
                     <CheckCircle size={16} /> Key Takeaway
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">The increment happens first, then we check if we should skip the logging.</p>
               </div>
            </div>
            <CodeBlock title="while Loop Logic" code={`let i = 0;\n\nwhile (i < 5) {\n    i++;\n\n    if (i === 3) {\n        continue;\n    }\n\n    console.log(i);\n}\n// Output: 1, 2, 4, 5`} />
         </div>
      </section>

      {/* ── Section 5: Real-World ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="p-16 bg-white dark:bg-gray-800 rounded-[5rem] shadow-2xl border border-gray-50 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
               <Shuffle size={200} className="text-emerald-500" />
            </div>
            <div className="max-w-2xl relative z-10">
               <SectionHeader icon={Globe} title="7. Real-World Example 🌍" subtitle="Efficient Data Filtering." color="text-emerald-500" />
               <p className="text-2xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                 🎯 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500">Skip Even Numbers</span>
               </p>
               <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-serif italic">
                 "Filtering data often requires skipping items that don't match a criteria. Using continue keeps your loop logic flat and readable."
               </p>
               <CodeBlock title="Filtering with Continue" code={`for (let i = 1; i <= 10; i++) {\n    if (i % 2 === 0) {\n        continue;\n    }\n    console.log(i);\n}\n// Output: 1, 3, 5, 7, 9`} />
            </div>
         </div>
      </section>

      {/* ── Section 6: vs Break ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Scale} title="8. continue vs break ⚖️" subtitle="Choosing the right escape route." color="text-indigo-500" />
         <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[#0b1120] p-12 rounded-[4rem] border border-white/5 shadow-2xl">
                <table className="w-full text-left">
                   <thead>
                      <tr className="border-b border-white/10">
                         <th className="py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Feature</th>
                         <th className="py-6 text-[10px] font-black text-indigo-500 uppercase tracking-widest italic">continue 🚀</th>
                         <th className="py-6 text-[10px] font-black text-rose-500 uppercase tracking-widest italic">break 🛑</th>
                      </tr>
                   </thead>
                   <tbody className="text-sm font-medium">
                      <tr className="border-b border-white/5">
                         <td className="py-6 text-gray-400 italic">Behavior</td>
                         <td className="py-6 text-indigo-400 font-bold">Skip Current Iteration</td>
                         <td className="py-6 text-rose-400 font-bold">Stop Entire Loop</td>
                      </tr>
                      <tr className="border-b border-white/5">
                         <td className="py-6 text-gray-400 italic">Loop Continues?</td>
                         <td className="py-6 text-emerald-400 font-black italic">✅ Yes</td>
                         <td className="py-6 text-rose-400 font-black italic">❌ No</td>
                      </tr>
                   </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 gap-6">
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
                  <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-4 italic underline decoration-indigo-500/20">continue example</h4>
                  <CodeBlock code={`for (let i = 1; i <= 5; i++) {\n    if (i === 3) continue;\n    console.log(i);\n}\n// Skips ONLY 3`} />
               </div>
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl border-l-4 border-l-rose-500">
                  <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-4 italic underline decoration-rose-500/20">break example</h4>
                  <CodeBlock code={`for (let i = 1; i <= 5; i++) {\n    if (i === 3) break;\n    console.log(i);\n}\n// STOPS at 3`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Next Stage.
         </p>
         <div className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 group hover:scale-105 transition-transform cursor-pointer">
            <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">Ready for</span>
            <span className="text-indigo-500 font-black uppercase tracking-widest italic">JS Switch?</span>
            <ArrowRight size={16} className="text-indigo-500 group-hover:translate-x-1 transition-transform" />
         </div>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto mt-12 underline decoration-indigo-500/10 decoration-2">
           "Flow control is the logic of movement. Continue ensures that even if one step is skipped, the journey goes on."
         </p>
      </footer>

    </div>
  );
};

const RotateCw = ({ size, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
  </svg>
);

const ClipboardList = ({ size, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4" />
    <path d="M12 16h4" />
    <path d="M8 11h.01" />
    <path d="M8 16h.01" />
  </svg>
);

export default JsContinue;