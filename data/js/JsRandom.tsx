import React, { useState, useMemo, useEffect } from 'react';
import {
  Zap,
  Activity,
  Terminal,
  Info,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  List,
  Binary,
  Box,
  Search,
  BookOpen,
  Grid,
  ShieldCheck,
  MousePointer2,
  Database,
  Repeat,
  Lightbulb,
  Plus,
  ArrowRight,
  Code2,
  Layers,
  Eye,
  Settings,
  Sparkles,
  HelpCircle,
  Download,
  Maximize,
  Anchor,
  Globe,
  Star,
  ShieldAlert,
  Hash,
  TextCursor,
  CirclePlay,
  Scissors,
  Table,
  Cpu,
  Workflow,
  ClipboardList,
  CircleSlash,
  Target,
  Dices,
  Palette,
  Lock,
  RefreshCw,
  Layout,
  Smartphone,
  Coins
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
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center text-white/90">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
            title="Copy code"
          >
            {copied ? <CheckCircle size={14} className="text-green-400" /> : <Package size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 font-medium font-sans border-transparent">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-violet-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8 font-sans">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight italic underline decoration-transparent">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color}`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed italic border-transparent">{subtitle}</p>}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsRandom: React.FC = () => {
  const [randomVal, setRandomVal] = useState(0.374829173);
  const [engineN, setEngineN] = useState(10);
  const [engineType, setEngineType] = useState('floor');

  const generateRandom = () => setRandomVal(Math.random());

  const engineResult = useMemo(() => {
    const raw = randomVal * engineN;
    return engineType === 'floor' ? Math.floor(raw) : raw;
  }, [randomVal, engineN, engineType]);

  const [otpVal, setOtpVal] = useState('1000');
  const [diceVal, setDiceVal] = useState(1);
  const [colorVal, setColorVal] = useState('#a3f9c1');

  useEffect(() => {
    setOtpVal(String(Math.floor(1000 + Math.random() * 9000)));
    setDiceVal(Math.floor(Math.random() * 6) + 1);
    setColorVal("#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
  }, []);

  const refreshExamples = () => {
    setOtpVal(String(Math.floor(1000 + Math.random() * 9000)));
    setDiceVal(Math.floor(Math.random() * 6) + 1);
    setColorVal("#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-violet-500/30 overflow-x-hidden text-gray-900 dark:text-white border-transparent">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative italic">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-violet-600 dark:text-violet-400 text-[10px] font-black mb-8 border border-violet-100 dark:border-violet-900/50 shadow-xl shadow-violet-500/5 animate-pulse tracking-[0.2em] italic">
          <Sparkles size={14} className="fill-current" /> PSEUDO-RANDOM NUMBER GENERATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9] italic underline decoration-transparent">
          JS Random <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-500 to-pink-600 drop-shadow-2xl font-sans italic">
            Engine
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic border-transparent border-transparent">
          Master the built-in <span className="text-gray-900 dark:text-white font-bold underline decoration-violet-500/30">Math.random()</span> utility that allows you to generate unpredictable values for everything from <span className="text-gray-900 dark:text-white font-bold underline decoration-violet-500/30">OTP tokens</span> to <span className="text-gray-900 dark:text-white font-bold underline decoration-violet-500/30">game logic</span>.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center italic">
        <div className="space-y-8 italic">
          <SectionHeader icon={Info} title="1. What is Random in JS?" subtitle="The fundamental value generator." color="text-violet-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group italic">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12 italic border-transparent">
               <Cpu size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans italic decoration-transparent border-transparent border-transparent">
              "JavaScript provides the built-in Math.random() method. It generates a floating-point, pseudo-random number spanning from 0 (inclusive) up to but not including 1."
            </p>
            <div className="flex justify-center italic border-transparent">
                <div className="p-8 bg-violet-500/5 border-2 border-dashed border-violet-500/20 rounded-3xl italic">
                   <span className="text-4xl font-black text-violet-500 font-mono tracking-tighter italic">0 ≤ value &lt; 1</span>
                </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 italic">
           <SectionHeader icon={Terminal} title="2. Basic Usage" subtitle="Fetching the raw numeric seed." color="text-indigo-500" />
           <div className="p-10 bg-gray-950 rounded-[4rem] border border-white/5 relative group overflow-hidden shadow-2xl italic">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 transition-transform duration-[2000ms] italic border-transparent">
                 <Grid size={300} className="text-violet-500" />
              </div>
              <CodeBlock title="Math.random() call" code={`let num = Math.random();\nconsole.log(num);`} />
              <div className="flex items-center gap-4 text-gray-400 font-medium italic italic border-transparent border-transparent">
                 <CheckCircle size={18} className="text-violet-500" />
                 <span>Example Output: <span className="text-violet-400 font-mono">0.374829173</span></span>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: Range Logic ── */}
      <section className="max-w-6xl mx-auto mb-32 italic">
        <SectionHeader icon={Maximize} title="3. Numbers in Range" subtitle="Transforming the seed into useful scales." color="text-violet-500" />
        <div className="grid lg:grid-cols-2 gap-8 italic font-sans italic">
           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 italic group overflow-hidden relative border-transparent">
              <h4 className="text-2xl font-black italic text-violet-500 flex items-center gap-4 italic underline decoration-violet-500/10">3.1 Random Number (0 to N)</h4>
              <p className="text-gray-500 font-medium italic italic decoration-transparent border-transparent italic">"Simple multiplication scales the 0-1 range to 0-N."</p>
              <CodeBlock code={`let num = Math.random() * 10;\nconsole.log(num); // 0 → 9.999`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 italic group overflow-hidden relative border-transparent">
              <h4 className="text-2xl font-black italic text-indigo-500 flex items-center gap-4 italic underline decoration-indigo-500/10">3.2 Random Integer (0 to N)</h4>
              <p className="text-gray-500 font-medium italic italic decoration-transparent border-transparent italic">"Utilize Math.floor() to remove decimal segments."</p>
              <CodeBlock code={`let num = Math.floor(Math.random() * 10);\nconsole.log(num); // 0 → 9`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 italic group overflow-hidden relative border-transparent">
              <h4 className="text-2xl font-black italic text-pink-500 flex items-center gap-4 italic underline decoration-pink-500/10 underline decoration-transparent">3.3 Floating Min-Max</h4>
              <CodeBlock title="getRandom(min, max)" code={`function getRandom(min, max) {\n  return Math.random() * (max - min) + min;\n}\n\nconsole.log(getRandom(5, 10)); // 5 → 10`} />
           </div>

           <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 italic group overflow-hidden relative border-transparent">
              <h4 className="text-2xl font-black italic text-emerald-500 flex items-center gap-4 italic underline decoration-emerald-500/10 underline decoration-transparent">3.4 Integer Min-Max</h4>
              <CodeBlock title="getRandomInt(min, max)" code={`function getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nconsole.log(getRandomInt(1, 100)); // 1 → 100`} />
           </div>
        </div>
      </section>

      {/* ── Section 3: Visual Logic ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group font-sans italic border-transparent">
        <SectionHeader icon={Eye} title="4. Engine Visualization" subtitle="Witnessing the decimal-to-integer transformation." color="text-indigo-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-violet-500/20 via-indigo-500/20 to-pink-500/20 rounded-[4rem] italic border-transparent border-transparent decoration-transparent border-transparent">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner italic overflow-hidden relative italic border-transparent border-transparent decoration-transparent border-transparent">
             <div className="grid lg:grid-cols-2 gap-16 items-center italic border-transparent border-transparent decoration-transparent border-transparent">
                <div className="space-y-8 italic border-transparent border-transparent">
                   <div className="space-y-4 italic border-transparent border-transparent">
                      <div className="flex items-center justify-between italic border-transparent">
                         <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] italic underline decoration-violet-500/20 border-transparent">Seed Generation</label>
                         <button onClick={generateRandom} className="p-2 rounded-xl bg-violet-500 text-white hover:rotate-180 transition-transform italic border-transparent border-transparent">
                            <RefreshCw size={16} />
                         </button>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-3xl px-8 py-5 font-mono text-xl font-black italic tracking-tighter text-violet-500 text-center border-transparent border-transparent">
                         {randomVal.toFixed(9)}
                      </div>
                   </div>
                   <div className="space-y-6 italic border-transparent border-transparent">
                      <div className="flex gap-4 items-center italic border-transparent border-transparent">
                         <div className="flex-1 space-y-2 italic border-transparent border-transparent">
                            <label className="text-[9px] font-black uppercase text-gray-400 italic border-transparent">Multiplier (N)</label>
                            <input 
                               type="number" 
                               value={engineN} 
                               onChange={(e) => setEngineN(Number(e.target.value))}
                               className="bg-gray-100 dark:bg-gray-800 border-none rounded-xl px-4 py-2 w-full font-black italic border-transparent border-transparent"
                            />
                         </div>
                         <div className="flex-1 space-y-2 italic border-transparent border-transparent">
                            <label className="text-[9px] font-black uppercase text-gray-400 italic border-transparent">Type</label>
                            <div className="flex gap-2 italic border-transparent border-transparent">
                               <button onClick={() => setEngineType('floor')} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${engineType === 'floor' ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-500'}`}>FLOOR</button>
                               <button onClick={() => setEngineType('raw')} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${engineType === 'raw' ? 'bg-pink-500 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-500'}`}>RAW</button>
                            </div>
                         </div>
                      </div>
                      <div className="space-y-4 text-[11px] font-medium text-gray-500 italic decoration-transparent border-transparent border-transparent">
                         <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500 italic">1</div>
                            <span>Math.random() → <span className="font-mono text-violet-500">{randomVal.toFixed(3)}</span></span>
                         </div>
                         <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 italic">2</div>
                            <span>Multiply ({engineN}) → <span className="font-mono text-indigo-500">{(randomVal * engineN).toFixed(3)}</span></span>
                         </div>
                         <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 italic">3</div>
                            <span>Floor result → <span className="font-mono text-pink-500 italic underline decoration-transparent">{engineType === 'floor' ? Math.floor(randomVal * engineN) : 'N/A'}</span></span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="relative italic border-transparent border-transparent">
                   <div className="p-12 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative group overflow-hidden text-center min-h-[350px] flex flex-col justify-center italic border-transparent border-transparent decoration-transparent border-transparent">
                      <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:rotate-45 transition-transform duration-1000 italic border-transparent border-transparent decoration-transparent border-transparent">
                         <Workflow size={200} className="text-violet-500 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent" />
                      </div>
                      <div className="relative z-10 space-y-8 uppercase underline decoration-transparent italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent">
                         <span className="text-[10px] font-black italic tracking-[0.3em] text-gray-400 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent">Calculated Value</span>
                         <div className="text-8xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-indigo-600 tracking-tighter animate-in zoom-in border-transparent border-transparent decoration-transparent">
                            {engineType === 'floor' ? engineResult : engineResult.toFixed(2)}
                         </div>
                         <div className="h-px bg-white/5 w-1/2 mx-auto italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent"></div>
                         <code className="text-violet-400 text-xs font-mono block italic underline decoration-transparent italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent">Logic: Math.{engineType === 'floor' ? 'floor' : ''}(random * {engineN})</code>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent">
        <div className="flex justify-between items-center mb-10 italic border-transparent">
           <SectionHeader icon={ShieldCheck} title="5. Real-World Applications" subtitle="Practical code for everyday dev scenarios." color="text-indigo-500" />
           <button onClick={refreshExamples} className="p-3 rounded-2xl bg-white dark:bg-gray-800 text-indigo-500 shadow-xl border border-gray-100 dark:border-gray-700 hover:scale-110 active:rotate-180 transition-all italic border-transparent border-transparent">
              <RefreshCw size={24} />
           </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 italic font-sans italic border-transparent">
           {[
             { 
               title: "Generate OTP", 
               desc: "Secure 4-digit verification tokens.", 
               val: otpVal, 
               code: 'Math.floor(1000 + Math.random() * 9000)', 
               icon: Smartphone, 
               color: "sky" 
             },
             { 
               title: "Random Color", 
               desc: "Dynamic UI theme generation.", 
               val: colorVal, 
               code: '"#" + Math.floor(...).toString(16)', 
               icon: Palette, 
               preview: colorVal,
               color: "indigo" 
             },
             { 
               title: "Dice Roll", 
               desc: "Perfect 1-6 integer generation.", 
               val: diceVal, 
               code: 'Math.floor(Math.random() * 6) + 1', 
               icon: Dices, 
               color: "violet" 
             },
             { 
               title: "Array Pick", 
               desc: "Random item from specific lists.", 
               val: "Apple", 
               code: 'items[Math.floor(Math.random()*len)]', 
               icon: Package, 
               color: "rose" 
             }
           ].map((app, i) => (
              <div key={i} className={`bg-white dark:bg-gray-800 p-8 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col italic border-transparent border-transparent decoration-transparent`}>
                 <div className={`p-4 rounded-2xl bg-${app.color}-500/10 text-${app.color}-500 mb-6 w-fit transition-transform group-hover:scale-110 italic border-transparent border-transparent`}>
                    <app.icon size={28} />
                 </div>
                 <h4 className={`text-xl font-black italic mb-2 italic border-transparent border-transparent decoration-transparent underline decoration-${app.color}-500/20`}>{app.title}</h4>
                 <p className="text-gray-500 text-[10px] font-medium mb-6 italic underline decoration-transparent border-transparent border-transparent">{app.desc}</p>
                 <div className="flex-1 italic border-transparent border-transparent">
                    <div className="mb-4 bg-gray-50 dark:bg-gray-950 p-6 rounded-2xl text-center shadow-inner relative overflow-hidden italic border-transparent">
                       {app.preview && <div className="absolute inset-0 opacity-20" style={{ background: app.preview }}></div>}
                       <span className={`text-3xl font-black italic text-${app.color}-500 italic relative z-10 border-transparent decoration-transparent border-transparent`}>{app.val}</span>
                    </div>
                    <code className="text-[9px] font-mono text-gray-400 block p-3 bg-gray-100 dark:bg-gray-900 rounded-xl italic border-transparent">{app.code}</code>
                 </div>
              </div>
           ))}
        </div>

        {/* Shuffle Array */}
        <div className="mt-12 bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl italic group overflow-hidden relative italic border-transparent border-transparent border-transparent border-transparent">
           <div className="absolute bottom-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform italic border-transparent border-transparent">
              <RefreshCw size={240} className="text-violet-500 italic border-transparent border-transparent" />
           </div>
           <div className="flex flex-col md:flex-row gap-12 items-center italic border-transparent border-transparent">
              <div className="md:w-1/3 text-center italic border-transparent border-transparent border-transparent">
                 <div className="p-8 bg-violet-500 text-white rounded-[2.5rem] shadow-2xl shadow-violet-500/20 mb-6 inline-block rotate-6 italic border-transparent border-transparent">
                    <Layout size={40} />
                 </div>
                 <h3 className="text-3xl font-black italic tracking-tighter italic border-transparent border-transparent">6. Advanced: Shuffle</h3>
                 <p className="text-[10px] font-black text-violet-500 uppercase tracking-widest mt-2 italic underline decoration-transparent">Fisher-Yates Algorithm</p>
              </div>
              <div className="flex-1 space-y-6 italic border-transparent border-transparent border-transparent">
                 <p className="text-gray-500 font-medium italic underline decoration-transparent italic border-transparent border-transparent border-transparent border-transparent border-transparent">The most efficient way to randomize an entire array by swapping elements from back to front.</p>
                 <CodeBlock title="Shuffle logic" code={`function shuffle(arr) {\n  for (let i = arr.length - 1; i > 0; i--) {\n    let j = Math.floor(Math.random() * (i + 1));\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n  return arr;\n}`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 5: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic border-transparent">
        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={AlertTriangle} title="7. Logic Pitfalls ⚠️" subtitle="Avoid these typical calculation errors." color="text-rose-500" />
           <div className="bg-rose-500/5 border border-rose-500/10 p-10 rounded-[3.5rem] space-y-10 group overflow-hidden relative italic border-transparent">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-500 rotate-12 italic border-transparent">
                 <CircleSlash size={60} />
              </div>
              {[
                { label: "Forgetting Math.floor()", text: "Math.random() * 10 gives decimals (e.g. 7.32), not solid integers.", icon: Hash },
                { label: "Wrong Range Formula", text: "Incorrect: random * max + min. Correct: random * (max-min) + min.", icon: Scissors },
                { label: "Missing Max Value", text: "Ensure you use +1 in the floor calculation to include the max bound.", icon: Plus }
              ].map((err, i) => (
                 <div key={i} className="flex gap-6 items-start italic border-transparent border-transparent shadow shadow-rose-900/5 p-4 rounded-3xl bg-white/5">
                    <div className="p-4 rounded-xl bg-white dark:bg-gray-950 text-rose-500 h-fit italic border-transparent border-transparent">
                       <err.icon size={20} />
                    </div>
                    <div>
                       <h6 className="text-[11px] font-black text-rose-600 uppercase tracking-widest italic underline decoration-transparent mb-1 italic border-transparent border-transparent">PITFALL #{i+1}: {err.label}</h6>
                       <p className="text-[10px] text-gray-500 font-medium italic underline decoration-rose-500/10 underline decoration-transparent italic border-transparent border-transparent">{err.text}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={Lightbulb} title="Expert Pro Tips" subtitle="15+ Years of Industry Logic." color="text-amber-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 italic border-transparent">
              {[
                { label: "Floor for Integers", text: "Always default to Math.floor() when you need whole numbers for UI or indices.", icon: Target, color: "text-sky-500" },
                { label: "Clarity via Constants", text: "Define your bounds clearly: const MIN = 1; const MAX = 10; for better maintenance.", icon: Grid, color: "text-indigo-500" },
                { label: "Security Limitations", text: "Math.random() is NOT secure. For passwords or money, use crypto.getRandomValues().", icon: Lock, color: "text-rose-500" },
                { label: "Utility Functions", text: "Create a reusable randomInt(min, max) function to keep your codebase clean.", icon: Code2, color: "text-amber-500" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start group italic border-transparent border-transparent">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${tip.color} group-hover:scale-110 transition-transform italic border-transparent border-transparent shadow-current/5`}>
                      <tip.icon size={20} />
                   </div>
                   <div className="flex flex-col italic border-transparent border-transparent border-transparent">
                      <h6 className={`text-sm font-black italic underline decoration-transparent ${tip.color} block mb-1 uppercase tracking-widest italic border-transparent border-transparent`}>🚀 {tip.label}</h6>
                      <p className="text-[10px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans italic border-transparent border-transparent">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Section 10: Practice Challenges ── */}
      <section className="max-w-6xl mx-auto mb-32 relative italic border-transparent">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px] -z-10 italic border-transparent"></div>
         <SectionHeader icon={Target} title="9. Logical Challenges" subtitle="Test your foundational understanding of randomness." color="text-violet-500" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 italic border-transparent">
            {[
               { title: "Number (1–50)", desc: "Generate a whole number between 50 and 1 inclusive.", icon: Hash, color: "violet" },
               { title: "Pick Name", desc: "Select a random element from a list of user strings.", icon: ClipboardList, color: "indigo" },
               { title: "Random Password", desc: "Create a string of unpredictable alphanumeric characters.", icon: Lock, color: "rose" },
               { title: "Coin Toss", desc: "Simulate a 50/50 chance resulting in Head or Tail.", icon: Coins, color: "amber" }
            ].map((tip, i) => (
               <div key={i} className={`p-8 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-4 group relative overflow-hidden italic border-transparent decoration-transparent border-transparent border-transparent`}>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform italic border-transparent"></div>
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-${tip.color}-400 group-hover:bg-white/10 transition-all italic border-transparent`}>
                     <tip.icon size={20} />
                  </div>
                  <h5 className="text-white font-black italic tracking-tight italic border-transparent underline decoration-transparent">TASK #{i+1}</h5>
                  <p className="text-gray-400 text-[10px] italic underline decoration-transparent border-transparent border-transparent leading-relaxed">{tip.title}: {tip.desc}</p>
                  <div className={`p-4 bg-white/5 rounded-xl font-mono text-[9px] text-${tip.color}-400 underline decoration-transparent font-black italic border-transparent border-transparent shadow shadow-current/10`}>Active Task</div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans italic border-transparent border-transparent">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mb-10 italic border-transparent border-transparent"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight italic border-transparent border-transparent">
          Unpredictable Logic. <br /> Total Math Control.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed italic border-transparent border-transparent">
          Randomness in JavaScript is a pseudo-scientific utility that, when understood and scaled correctly, becomes the engine for security tokens, visual effects, and dynamic user experiences. Mastering the range formula is the first step toward building truly interactive applications.
        </p>
      </footer>

    </div>
  );
};

export default JsRandom;