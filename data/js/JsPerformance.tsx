import React, { useState, useMemo } from 'react';
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
  Trash2,
  Filter,
  BookOpen,
  Power,
  RefreshCw,
  Share2,
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
  GitBranch,
  Eye,
  Globe,
  Settings,
  CircleSlash,
  Regex,
  TextCursor,
  Hash,
  Sparkles,
  Smartphone,
  ShieldAlert,
  HelpCircle,
  Download,
  Maximize,
  Anchor,
  Table,
  Flame,
  Workflow,
  Target,
  Cpu,
  Gauge,
  Layout,
  LayoutDashboard,
  Timer,
  BaggageClaim,
  Network,
  Lock,
  SearchCode,
  CheckSquare,
  History,
  WorkflowIcon,
  Scissors
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
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans italic">{title}</span>
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-amber-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8 font-sans border-transparent">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight italic underline decoration-transparent border-transparent">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color} border-transparent`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed italic border-transparent border-transparent">{subtitle}</p>}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsPerformance: React.FC = () => {
    const [labState, setLabState] = useState<'IDLE' | 'BAD' | 'GOOD'>('IDLE');
    const [progress, setProgress] = useState(0);
    const [timeTaken, setTimeTaken] = useState(0);

    const runLab = (type: 'BAD' | 'GOOD') => {
        setLabState(type);
        setProgress(0);
        const start = performance.now();
        
        let interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    const end = performance.now();
                    setTimeTaken(end - start);
                    return 100;
                }
                // Simulate slower BAD loop
                return type === 'BAD' ? p + 1 : p + 4;
            });
        }, type === 'BAD' ? 30 : 5);
    };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden text-gray-900 dark:text-white border-transparent border-transparent">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 border-transparent">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] border-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[140px] border-transparent"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative italic border-transparent border-transparent">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 animate-pulse tracking-[0.2em] italic border-transparent">
          <Gauge size={14} className="fill-current border-transparent" /> EXECUTION VELOCITY ENGINE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9] italic border-transparent underline decoration-transparent border-transparent">
          JS Performance <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 drop-shadow-2xl font-sans italic border-transparent">
            Optimization
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic border-transparent border-transparent border-transparent border-transparent border-transparent">
          Master the art of <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500/30">speed</span> and <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500/30">efficiency</span>. Learn to minimize DOM interactions, handle asynchronous traffic, and scale your logic without compromising user experience.
        </p>
      </header>

      {/* ── Section 1: Definition & Purpose ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center italic border-transparent">
        <div className="space-y-8 italic border-transparent">
          <SectionHeader icon={Info} title="1. What is JS Performance?" subtitle="How fast and efficiently your code runs." color="text-amber-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group italic border-transparent border-transparent">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12 italic border-transparent border-transparent">
               <Cpu size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans italic border-transparent underline decoration-transparent border-transparent border-transparent">
              "Performance isn't just about raw speed. It's about how efficiently your application consumes resources (CPU, Memory, Network) to provide a seamless result to the user."
            </p>
            <div className="grid grid-cols-2 gap-4 italic border-transparent">
               {[
                 { label: "Faster Execution", icon: Zap, color: "text-amber-500" },
                 { label: "Lower Memory", icon: Binary, color: "text-orange-500" },
                 { label: "Better SEO", icon: Globe, color: "text-rose-500" },
                 { label: "Better UX", icon: Smartphone, color: "text-emerald-500" }
               ].map((cat, i) => (
                 <div key={i} className="p-6 bg-amber-500/5 border border-amber-500/10 rounded-3xl group transition-all hover:scale-105 flex items-center gap-4 italic border-transparent">
                    <div className={`${cat.color} italic`}><cat.icon size={20} /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white italic underline decoration-transparent">{cat.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={Zap} title="3. Key Performance Factors" subtitle="The pillars of a responsive application." color="text-orange-500" />
           <div className="p-10 bg-gray-950 rounded-[4rem] border border-white/5 relative group overflow-hidden shadow-2xl italic border-transparent">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 transition-transform duration-[2000ms] italic border-transparent">
                 <Grid size={300} className="text-amber-500" />
              </div>
              <ul className="space-y-6 italic border-transparent">
                 {[
                   { t: "Execution Time", d: "How long your logic takes to compute.", i: Timer },
                   { t: "Memory Usage", d: "The heap footprint of your application data.", i: Database },
                   { t: "DOM Manipulation", d: "The bottleneck of frequent browser reflows.", i: Layout },
                   { t: "Network Requests", d: "Latency introduced by remote API synchronization.", i: Network }
                 ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-4 italic border-transparent">
                       <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 italic border-transparent"><feat.i size={18} /></div>
                       <div className="italic border-transparent">
                          <h4 className="text-white font-black italic tracking-tighter italic border-transparent underline decoration-transparent">{feat.t}</h4>
                          <p className="text-gray-500 text-[11px] font-medium italic underline decoration-transparent border-transparent">{feat.d}</p>
                       </div>
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* ── Section 2: Measuring ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent border-transparent">
        <SectionHeader icon={Gauge} title="4. Measuring Performance" subtitle="Knowing your numbers before you optimize." color="text-amber-500" />
        <div className="grid lg:grid-cols-2 gap-8 italic border-transparent border-transparent border-transparent">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl italic border-transparent border-transparent">
              <h4 className="text-xl font-black italic mb-4 flex items-center gap-3 italic border-transparent underline decoration-transparent underline decoration-transparent border-transparent">4.1 Using console.time()</h4>
              <p className="text-gray-500 text-xs font-medium italic underline decoration-transparent mb-6 italic border-transparent border-transparent">Quick and easy relative timing for specific logic blocks.</p>
              <CodeBlock title="Timer start/end" code={`console.time("test");\n\nfor (let i = 0; i < 1000000; i++) {}\n\nconsole.timeEnd("test");`} />
           </div>
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl italic border-transparent border-transparent">
              <h4 className="text-xl font-black italic mb-4 flex items-center gap-3 italic border-transparent underline decoration-transparent underline decoration-transparent border-transparent">4.2 Using performance.now()</h4>
              <p className="text-gray-500 text-xs font-medium italic underline decoration-transparent mb-6 italic border-transparent border-transparent">High-resolution timestamps for micro-optimization precision.</p>
              <CodeBlock title="High-res timing" code={`let start = performance.now();\n\n// your code logic here\n\nlet end = performance.now();\nconsole.log(end - start);`} />
           </div>
        </div>
      </section>

      {/* ── Section 3: Interactive Comparison ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group font-sans italic border-transparent border-transparent border-transparent">
        <SectionHeader icon={Activity} title="Performance Lab" subtitle="Visualizing different loop strategies in real-time." color="text-orange-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-500/20 rounded-[4rem] italic border-transparent border-transparent decoration-transparent border-transparent border-transparent">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner italic overflow-hidden relative italic border-transparent border-transparent decoration-transparent border-transparent border-transparent">
             <div className="grid lg:grid-cols-2 gap-16 items-center italic border-transparent border-transparent decoration-transparent border-transparent border-transparent">
                <div className="space-y-8 italic border-transparent border-transparent">
                   <div className="space-y-4 italic border-transparent border-transparent">
                      <h3 className="text-4xl font-black italic tracking-tighter leading-tight italic border-transparent border-transparent underline decoration-transparent">Execution Comparison</h3>
                      <p className="text-gray-500 font-medium italic underline decoration-gray-500/10 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent">Trigger the 'Unoptimized' vs 'Optimized' execution flows to witness the velocity impact.</p>
                   </div>
                   
                   <div className="flex gap-4 italic border-transparent border-transparent">
                      <button 
                         onClick={() => runLab('BAD')}
                         className={`flex-1 py-4 rounded-2xl font-black italic tracking-widest text-[10px] shadow-lg transition-all border-transparent ${labState === 'BAD' ? 'bg-rose-500 text-white shadow-rose-500/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}
                      >
                         UNOPTIMIZED LOOP
                      </button>
                      <button 
                         onClick={() => runLab('GOOD')}
                         className={`flex-1 py-4 rounded-2xl font-black italic tracking-widest text-[10px] shadow-lg transition-all border-transparent ${labState === 'GOOD' ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}
                      >
                         OPTIMIZED LOOP
                      </button>
                   </div>

                   <div className="space-y-4 italic border-transparent border-transparent">
                      <div className="flex justify-between items-center text-[10px] font-black uppercase text-gray-400 italic border-transparent border-transparent">
                         <span>Simulation Progress</span>
                         <span>{progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden italic border-transparent border-transparent">
                         <div className={`h-full transition-all duration-300 italic border-transparent ${labState === 'BAD' ? 'bg-rose-500' : 'bg-emerald-500'}`} style={{ width: `${progress}%` }}></div>
                      </div>
                   </div>
                </div>

                <div className="relative italic border-transparent border-transparent">
                   <div className="p-12 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative group overflow-hidden text-center min-h-[350px] flex flex-col justify-center italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent">
                      <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:rotate-45 transition-transform duration-1000 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent">
                         <Zap size={200} className="text-amber-500 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent" />
                      </div>
                      <div className="relative z-10 space-y-8 uppercase italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent">
                         <div className="space-y-2 italic border-transparent border-transparent">
                            <span className="text-[10px] font-black italic tracking-[0.3em] text-gray-500 italic border-transparent underline decoration-transparent">Profiling Result</span>
                            <div className="text-6xl font-black italic tracking-tight italic border-transparent border-transparent decoration-transparent underline decoration-transparent">
                               {progress === 100 ? `${timeTaken.toFixed(1)}ms` : 'Waiting...'}
                            </div>
                         </div>
                         <div className="h-px bg-white/5 w-1/2 mx-auto italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent"></div>
                         <div className="flex flex-col gap-2 italic border-transparent border-transparent border-transparent">
                            <div className="flex justify-between items-center italic border-transparent border-transparent">
                               <span className="text-[10px] text-gray-500 font-bold italic underline decoration-transparent">Loop Efficiency:</span>
                               <span className={`text-[10px] font-black ${labState === 'GOOD' ? 'text-emerald-500' : 'text-rose-500'} italic border-transparent underline decoration-transparent`}>{labState === 'GOOD' ? 'High Velocity' : 'Throttled'}</span>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Optimization Techniques ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
        <SectionHeader icon={Flame} title="5. Strategic Optimization" subtitle="Proven techniques to accelerate your codebase." color="text-amber-600" />
        <div className="grid lg:grid-cols-2 gap-12 italic border-transparent border-transparent">
           <div className="space-y-8 italic border-transparent">
              <h4 className="text-2xl font-black italic text-sky-500 italic border-transparent underline decoration-transparent underline decoration-transparent">5.1 Minimize DOM Access</h4>
              <p className="text-gray-500 font-medium italic underline decoration-transparent italic border-transparent border-transparent">DOM interaction is extremely heavy. Batch your updates in memory before writing to the document.</p>
              <div className="grid grid-cols-1 gap-4 italic border-transparent">
                 <CodeBlock title="❌ UNOPTIMIZED (1000 Interactions)" code={`for (let i = 0; i < 1000; i++) {\n  document.getElementById("app").innerHTML += i;\n}`} />
                 <CodeBlock title="✅ OPTIMIZED (1 Interaction)" code={`let content = "";\nfor (let i = 0; i < 1000; i++) {\n  content += i;\n}\ndocument.getElementById("app").innerHTML = content;`} />
              </div>
           </div>

           <div className="space-y-12 italic border-transparent">
              <div className="space-y-6 italic border-transparent">
                 <h4 className="text-2xl font-black italic text-indigo-500 italic border-transparent underline decoration-transparent underline decoration-transparent border-transparent">5.2 Efficient Looping</h4>
                 <div className="p-8 bg-indigo-500/5 border border-indigo-500/10 rounded-[2.5rem] italic border-transparent">
                    <p className="text-gray-400 text-xs font-medium italic underline decoration-transparent italic border-transparent border-transparent">Native 'for' loops are generally faster than 'forEach' for large arrays due to function overhead.</p>
                    <div className="grid grid-cols-2 gap-4 mt-6 italic border-transparent">
                       <div className="text-emerald-500 font-black italic font-mono text-[10px] italic border-transparent underline decoration-transparent border-transparent border-transparent underline decoration-transparent">FAST: for (let i=0; ...)</div>
                       <div className="text-rose-500 font-black italic font-mono text-[10px] italic border-transparent underline decoration-transparent border-transparent border-transparent underline decoration-transparent">SLOW: arr.forEach()</div>
                    </div>
                 </div>
              </div>

              <div className="space-y-6 italic border-transparent">
                 <h4 className="text-2xl font-black italic text-rose-500 italic border-transparent underline decoration-transparent underline decoration-transparent border-transparent">5.3 & 5.4 Traffic Control</h4>
                 <div className="grid grid-cols-2 gap-6 italic border-transparent">
                    <div className="space-y-4 italic border-transparent border-transparent">
                       <h5 className="text-[10px] font-black uppercase text-gray-500 tracking-widest italic underline decoration-transparent border-transparent">Debouncing</h5>
                       <p className="text-[10px] text-gray-400 italic underline decoration-transparent border-transparent border-transparent underline decoration-transparent">Wait for pause in input.</p>
                    </div>
                    <div className="space-y-4 italic border-transparent border-transparent border-transparent">
                       <h5 className="text-[10px] font-black uppercase text-gray-500 tracking-widest italic underline decoration-transparent border-transparent border-transparent">Throttling</h5>
                       <p className="text-[10px] text-gray-400 italic underline decoration-transparent border-transparent border-transparent underline decoration-transparent">Restrict execution rate.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 5: Real-World Search Input ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
         <div className="bg-gray-950 rounded-[4rem] p-12 border border-white/5 shadow-2xl relative overflow-hidden group italic border-transparent">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform italic border-transparent border-transparent">
               <SearchCode size={240} className="text-amber-500 italic border-transparent" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center italic border-transparent">
               <div className="md:w-1/3 italic border-transparent">
                  <SectionHeader icon={ShieldCheck} title="6. Real-World Case" subtitle="The production search standard." color="text-amber-500" />
                  <p className="text-gray-500 text-sm font-medium italic underline decoration-transparent italic border-transparent pb-3 underline decoration-transparent">Using debouncing on search inputs prevents "API Spam" by waiting for the user to finish typing.</p>
               </div>
               <div className="flex-1 italic border-transparent">
                  <CodeBlock title="Debounced Input Handler" code={`let search = debounce(() => {\n  console.log("Searching API...");\n}, 300);\n\ninput.addEventListener("input", search);`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6: Advanced Techniques ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent border-transparent">
        <SectionHeader icon={Sparkles} title="7. Advanced Velocity Hub" subtitle="Enterprise architectural scaling patterns." color="text-indigo-500" />
        <div className="grid lg:grid-cols-2 gap-8 italic border-transparent">
           {[
             { 
               title: "7.1 Memoization", 
               desc: "Cache calculation results based on input arguments to avoid redundant logic execution.", 
               code: 'function memoize(fn) {\n  let cache = {};\n  return function (x) {\n    if (cache[x]) return cache[x];\n    return cache[x] = fn(x);\n  };\n}', 
               icon: Database, 
               color: "sky" 
             },
             { 
               title: "7.2 Web Workers", 
               desc: "Offload heavy background processing to a separate thread to keep the UI main thread responsive.", 
               code: '// Off-thread background processing', 
               icon: WorkflowIcon, 
               color: "emerald" 
             },
             { 
               title: "7.3 Code Splitting", 
               desc: "Partition your application bundle and load specific chunks only when required by the user.", 
               icon: Scissors, 
               color: "violet" 
             },
             { 
               title: "7.4 Tree Shaking", 
               desc: "Automatically remove dead code/unused exports during the build process to reduce payload size.", 
               icon: Flame, 
               color: "rose" 
             }
           ].map((tech, i) => (
              <div key={i} className={`p-8 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-${tech.color}-500/10 shadow-xl group hover:-translate-y-2 transition-transform italic flex flex-col border-transparent`}>
                 <div className="flex justify-between items-center mb-6 italic border-transparent">
                    <h4 className="text-xl font-black italic tracking-tighter italic border-transparent underline decoration-transparent">{tech.title}</h4>
                    <div className={`p-3 rounded-xl bg-${tech.color}-500/10 text-${tech.color}-500 italic border-transparent`}>
                       <tech.icon size={20} />
                    </div>
                 </div>
                 <p className="text-gray-500 text-xs font-medium italic underline decoration-transparent mb-6 italic border-transparent">{tech.desc}</p>
                 {tech.code && <div className="mt-auto italic border-transparent"><CodeBlock code={tech.code} /></div>}
              </div>
           ))}
        </div>
      </section>

      {/* ── Section 7: Mistakes & Visualization ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic border-transparent">
        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={AlertTriangle} title="8. Common Pitfalls" subtitle="Anti-patterns that degrade velocity." color="text-rose-500" />
           <div className="bg-rose-500/5 border border-rose-500/10 p-10 rounded-[3.5rem] space-y-8 group overflow-hidden relative italic border-transparent">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-500 rotate-12 italic border-transparent">
                 <CircleSlash size={60} />
              </div>
              {[
                { label: "Excessive DOM Updates", text: "Updating the UI inside high-frequency loops causes massive reflow penalties.", icon: Layout },
                { label: "Unoptimized Iteration", text: "Using heavy functional iterators on massive datasets instead of indexed loops.", icon: History },
                { label: "Massive Bundle Payload", text: "Shipping unused libraries or thousands of lines of cold code to the browser.", icon: BaggageClaim },
                { label: "Main Thread Blockage", text: "Running 'sync' heavy tasks that freeze the browser's interaction layer.", icon: Lock }
              ].map((err, i) => (
                 <div key={i} className="flex gap-6 items-start italic border-transparent shadow shadow-rose-900/5 p-4 rounded-3xl bg-white/5">
                    <div className="p-4 rounded-xl bg-white dark:bg-gray-950 text-rose-500 h-fit italic border-transparent">
                       <err.icon size={20} />
                    </div>
                    <div>
                       <h6 className="text-[11px] font-black text-rose-600 uppercase tracking-widest italic underline decoration-transparent mb-1 italic border-transparent">PITFALL: {err.label}</h6>
                       <p className="text-[10px] text-gray-500 font-medium italic underline decoration-rose-500/10 border-transparent underline decoration-transparent italic border-transparent">{err.text}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={Lightbulb} title="Practitioner Advice" subtitle="15+ Years of Industry Experience." color="text-amber-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 italic border-transparent">
              {[
                { label: "Rational Optimization", text: "Optimize only when profiling proves necessary. Avoid over-engineering too early.", icon: Target, color: "text-amber-500" },
                { label: "Measure Before Fixing", text: "Always baseline your performance using Chrome DevTools before applying fixes.", icon: Gauge, color: "text-sky-500" },
                { label: "Tool Mastery", text: "The Chrome 'Performance' tab is your primary weapon for identifying bottlenecks.", icon: LayoutDashboard, color: "text-indigo-500" },
                { label: "Reduce Rendering Cost", text: "Focus heavily on reducing reflows and repaints to maintain a steady 60FPS UI.", icon: Flame, color: "text-rose-500" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start group italic border-transparent border-transparent">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${tip.color} group-hover:scale-110 transition-transform italic border-transparent border-transparent shadow-current/5`}>
                      <tip.icon size={20} />
                   </div>
                   <div className="flex flex-col italic border-transparent border-transparent">
                      <h6 className={`text-sm font-black italic underline decoration-transparent ${tip.color} block mb-1 uppercase tracking-widest italic border-transparent`}>🚀 {tip.label}</h6>
                      <p className="text-[10px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans italic border-transparent border-transparent">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Section 10: Practice Challenges ── */}
      <section className="max-w-6xl mx-auto mb-32 relative italic border-transparent border-transparent">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] -z-10 italic border-transparent border-transparent"></div>
         <SectionHeader icon={Target} title="11. Optimization Lab Tasks" subtitle="Test your foundational velocity skills." color="text-amber-500" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 italic border-transparent border-transparent border-transparent border-transparent">
            {[
               { title: "Loop Refactor", desc: "Optimize an O(N) loop to minimize global scope interactions.", icon: RotateCcw, color: "violet" },
               { title: "Static Debounce", desc: "Implement a delay-based capture handler for search input events.", icon: SearchCode, color: "indigo" },
               { title: "DOM Batching", desc: "Refactor nested DOM updates into a single atomic write operation.", icon: Layout, color: "rose" },
               { title: "Timer Audit", desc: "Measure the exact microsecond execution of a complex function.", icon: Timer, color: "amber" }
            ].map((tip, i) => (
               <div key={i} className={`p-8 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-4 group relative overflow-hidden italic border-transparent underline decoration-transparent border-transparent border-transparent border-transparent`}>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform italic border-transparent"></div>
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-${tip.color}-400 group-hover:bg-white/10 transition-all italic border-transparent`}>
                     <tip.icon size={20} />
                  </div>
                  <h5 className="text-white font-black italic tracking-tight italic border-transparent underline decoration-transparent">TASK #{i+1}</h5>
                  <p className="text-gray-400 text-[10px] italic underline decoration-transparent underline decoration-transparent border-transparent underline decoration-transparent">{tip.title}</p>
                  <div className={`p-4 bg-white/5 rounded-xl font-mono text-[9px] text-${tip.color}-400 italic font-black transition-colors border-transparent`}>Ready for Profiling</div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Final Summary ── */}
      <section className="max-w-4xl mx-auto mb-32 p-12 bg-white dark:bg-gray-800 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl text-center italic border-transparent border-transparent border-transparent">
         <SectionHeader icon={CheckSquare} title="12. Final Engine Summary" subtitle="Performance = Speed + Efficiency." color="text-emerald-500" />
         <div className="grid md:grid-cols-3 gap-8 mt-12 italic border-transparent">
            {[
               { t: "DOM Optimization", d: "Zero bottlenecks.", icon: Layout },
               { t: "Memory Control", d: "Light heap footprint.", icon: Binary },
               { t: "Async Control", d: "Non-blocking flow.", icon: Zap }
            ].map((s, i) => (
               <div key={i} className="space-y-4 italic border-transparent">
                  <div className="p-4 bg-emerald-500/10 text-emerald-500 w-fit mx-auto rounded-2xl italic border-transparent">
                     <s.icon size={24} />
                  </div>
                  <h5 className="text-xl font-black italic border-transparent underline decoration-transparent border-transparent underline decoration-transparent border-transparent tracking-tighter">{s.t}</h5>
                  <p className="text-gray-500 text-[10px] italic border-transparent underline decoration-transparent border-transparent underline decoration-transparent border-transparent">{s.d}</p>
               </div>
            ))}
         </div>
         <div className="mt-12 flex flex-wrap justify-center gap-4 italic border-transparent">
            {["Debouncing", "Lazy Loading", "Memoization"].map((tag, i) => (
               <span key={i} className="px-6 py-2 bg-gray-50 dark:bg-gray-950 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-widest italic border-transparent border-transparent">{tag}</span>
            ))}
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans italic border-transparent border-transparent">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10 italic border-transparent border-transparent"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight italic border-transparent border-transparent border-transparent">
          Zero Bottlenecks. <br /> Total Logic Efficiency.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed italic border-transparent border-transparent border-transparent">
          Performance engineering is the difference between a functional application and a professional one. By mastering the metrics of execution and the strategies of resource management, you ensure that your code remains resilient, scalable, and delightful for every user, on every device.
        </p>
      </footer>

    </div>
  );
};

export default JsPerformance;