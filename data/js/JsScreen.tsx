import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Maximize, 
  Minimize, 
  Settings, 
  Info, 
  CheckCircle,
  AlertTriangle,
  Zap,
  Activity,
  Terminal,
  Grid,
  Box,
  Layout,
  MousePointer2,
  Gamepad2,
  Tv,
  Eye,
  RefreshCw,
  Search,
  Code2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Binary,
  Lightbulb,
  Cpu,
  Package,
  Sparkles
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8 font-sans">
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

const JsScreen: React.FC = () => {
  const [screenInfo, setScreenInfo] = useState({
    width: 0,
    height: 0,
    availWidth: 0,
    availHeight: 0,
    colorDepth: 0,
    pixelDepth: 0,
    innerWidth: 0,
    innerHeight: 0
  });

  useEffect(() => {
    const updateInfo = () => {
      setScreenInfo({
        width: typeof screen !== 'undefined' ? screen.width : 0,
        height: typeof screen !== 'undefined' ? screen.height : 0,
        availWidth: typeof screen !== 'undefined' ? screen.availWidth : 0,
        availHeight: typeof screen !== 'undefined' ? screen.availHeight : 0,
        colorDepth: typeof screen !== 'undefined' ? screen.colorDepth : 0,
        pixelDepth: typeof screen !== 'undefined' ? screen.pixelDepth : 0,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    };

    updateInfo();
    window.addEventListener('resize', updateInfo);
    return () => window.removeEventListener('resize', updateInfo);
  }, []);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden text-gray-900 dark:text-white">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-20 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <Monitor size={14} className="fill-current" /> DEVICE DISPLAY API
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS Screen <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 drop-shadow-2xl">
            Object
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The `screen` object provides detailed metrics about the user’s device monitor. Understand physical resolution versus available workspace.
        </p>
      </header>

      {/* ── Section 1: Introduction ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What is screen in JS?" subtitle="Part of the Window API: window.screen" color="text-sky-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
              The `screen` object provides information about the user’s physical device screen (monitor/display). It gives you the dimensions and technical specs of the hardware itself.
            </p>
            <div className="p-6 bg-sky-500/10 border-l-4 border-sky-500 rounded-2xl font-mono text-sm group">
               <span className="text-sky-600 dark:text-sky-400 font-black italic group-hover:underline decoration-transparent">console.log(window.screen);</span>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
              <Zap size={200} className="text-sky-500" />
           </div>
           <h4 className="text-xl font-black text-white italic tracking-tight flex items-center gap-3 relative z-10">
              <Activity size={24} className="text-sky-500" /> Key Use Cases
           </h4>
           <div className="grid grid-cols-2 gap-4 relative z-10 font-sans">
              {[
                { label: "Responsive Design", icon: Smartphone },
                { label: "Detect Screen Size", icon: Grid },
                { label: "Optimize UI Layout", icon: Layout },
                { label: "Game Resolution", icon: Gamepad2 },
                { label: "Fullscreen Apps", icon: Maximize },
                { label: "Hardware Stats", icon: Cpu }
              ].map((use, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors flex items-center gap-3">
                   <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg">
                      <use.icon size={16} />
                   </div>
                   <span className="text-xs text-gray-400 font-bold">{use.label}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Section 2: Real-time Screen Monitor ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[4rem] p-10 md:p-16 shadow-2xl relative overflow-hidden font-sans">
           <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-sky-500 rounded-full animate-ping duration-[4000ms]"></div>
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 relative z-10 gap-4">
              <div>
                 <h3 className="text-4xl font-black italic tracking-tighter leading-none mb-4">
                    Live <span className="text-sky-500">Screen</span> Monitor
                 </h3>
                 <p className="text-gray-500 font-medium italic">Detecting your current display environment in real-time.</p>
              </div>
              <div className="px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black tracking-widest uppercase animate-pulse border border-emerald-500/20">
                 System Active
              </div>
           </div>

           <div className="grid lg:grid-cols-3 gap-12 relative z-10">
              <div className="lg:col-span-2 space-y-10">
                 <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { label: "screen.width", val: screenInfo.width, desc: "Total physical width", color: "text-blue-500" },
                      { label: "screen.height", val: screenInfo.height, desc: "Total physical height", color: "text-blue-500" },
                      { label: "screen.availWidth", val: screenInfo.availWidth, desc: "Usable width (No Taskbar)", color: "text-indigo-500" },
                      { label: "screen.availHeight", val: screenInfo.availHeight, desc: "Usable height (No Taskbar)", color: "text-indigo-500" }
                    ].map((stat, i) => (
                      <div key={i} className="p-8 bg-gray-50 dark:bg-gray-950 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 flex flex-col justify-between group hover:border-sky-500/30 transition-all">
                         <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">{stat.desc}</span>
                            <RefreshCw size={14} className="text-sky-500 opacity-0 group-hover:opacity-100 animate-spin transition-all" />
                         </div>
                         <div className="space-y-1">
                            <span className={`text-4xl font-black italic ${stat.color}`}>{stat.val}px</span>
                            <h5 className="font-mono text-xs text-gray-500 font-bold italic underline decoration-sky-500/10 tracking-tight">{stat.label}</h5>
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="p-10 bg-sky-950 rounded-[3rem] border border-white/5 space-y-8 shadow-2xl shadow-sky-500/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                       <Maximize size={150} className="text-white" />
                    </div>
                    <h4 className="text-xl font-black text-white italic flex items-center gap-3">
                       <Tv size={24} className="text-sky-400" /> Available Workspace Visualization
                    </h4>
                    <div className="aspect-video bg-black/40 rounded-3xl border border-white/10 p-4 flex flex-col relative overflow-hidden">
                       <div className="absolute inset-0 bg-sky-500/5 pointer-events-none"></div>
                       {/* Full Screen Border */}
                       <div className="absolute inset-0 border-2 border-dashed border-sky-500/20 flex items-center justify-center">
                          <span className="text-[10px] uppercase font-black text-sky-500/40 absolute top-4">Physical Monitor ({screenInfo.width}x{screenInfo.height})</span>
                       </div>
                       
                       {/* Available Area */}
                       <div className="flex-grow bg-white/5 border border-white/10 rounded-xl relative flex items-center justify-center p-8 group-hover:bg-white/10 transition-all duration-700">
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-black text-white/20 uppercase">Available Area</div>
                          <div className="text-center font-mono">
                             <div className="text-3xl text-sky-400 font-black mb-1">{screenInfo.availWidth} x {screenInfo.availHeight}</div>
                             <div className="text-[10px] text-gray-500 uppercase tracking-wider">Screen Without Taskbar/Dock</div>
                          </div>
                       </div>
                       
                       {/* Taskbar mock */}
                       <div className="mt-4 h-10 w-full bg-gray-800/80 rounded-lg flex items-center justify-center border border-white/5">
                          <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest italic font-sans italic">OS Taskbar Mock (Exclusion Zone)</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-8">
                 <div className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
                    <h5 className="text-xl font-black italic flex items-center gap-3 text-indigo-500">
                       <Binary size={24} /> Color Specs
                    </h5>
                    <div className="space-y-6">
                       <div className="flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800">
                          <div>
                             <h6 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Color Depth</h6>
                             <span className="text-2xl font-black italic">{screenInfo.colorDepth} bits</span>
                          </div>
                          <Eye size={24} className="text-indigo-500 opacity-50" />
                       </div>
                       <div className="flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800">
                          <div>
                             <h6 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Pixel Depth</h6>
                             <span className="text-2xl font-black italic">{screenInfo.pixelDepth} bits</span>
                          </div>
                          <Grid size={24} className="text-indigo-500 opacity-50" />
                       </div>
                    </div>
                 </div>

                 <div className="p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-[3rem] space-y-6 relative overflow-hidden group">
                    <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-110 transition-transform">
                       <ShieldCheck size={150} className="text-emerald-500" />
                    </div>
                    <h5 className="text-xl font-black italic text-emerald-600 dark:text-emerald-400 flex items-center gap-3">
                       <Settings size={22} /> Best Practices
                    </h5>
                    <ul className="space-y-4">
                       {[
                         { label: "Device Info", text: "Use `screen` ONLY for physical device data.", icon: Monitor },
                         { label: "Layout Control", text: "Use `window.innerWidth` for responsive sizing.", icon: Smartphone }
                       ].map((tip, i) => (
                         <li key={i} className="flex gap-4">
                            <div className="p-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm h-fit">
                               <tip.icon size={16} className="text-emerald-500" />
                            </div>
                            <div>
                               <h6 className="text-[10px] font-black uppercase text-emerald-600/60 mb-1">{tip.label}</h6>
                               <p className="text-xs text-gray-500 font-medium italic leading-relaxed">{tip.text}</p>
                            </div>
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Detailed Property Breakdown ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
         <div className="space-y-10 font-sans">
            <SectionHeader icon={Terminal} title="3. Property Reference" subtitle="The complete list of essential screen metrics." color="text-indigo-500" />
            
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-12">
               {[
                 { title: "screen.width", desc: "Returns the total physical width of the screen in pixels.", code: "console.log(screen.width);" },
                 { title: "screen.height", desc: "Returns the total physical height of the screen in pixels.", code: "console.log(screen.height);" },
                 { title: "screen.availWidth", desc: "Total width minus features like the Windows Taskbar.", code: "console.log(screen.availWidth);" },
                 { title: "screen.availHeight", desc: "Total height minus taskbars or menu bars.", code: "console.log(screen.availHeight);" },
                 { title: "screen.colorDepth / pixelDepth", desc: "Returns the bit depth of the color palette for displaying images.", code: "console.log(screen.colorDepth);" }
               ].map((prop, i) => (
                 <div key={i} className="space-y-4 relative group">
                    <div className="absolute -left-6 top-1 w-1 h-0 group-hover:h-full bg-indigo-500 transition-all duration-500 rounded-full opacity-50"></div>
                    <h5 className="text-xl font-black italic tracking-tight flex items-center gap-3">
                       <Code2 size={24} className="text-indigo-500" /> {prop.title}
                    </h5>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">{prop.desc}</p>
                    <CodeBlock title={prop.title} code={prop.code} />
                 </div>
               ))}
            </div>
         </div>

         <div className="space-y-10">
            <SectionHeader icon={Sparkles} title="4. Real-World Applications" subtitle="Practical code patterns used in production." color="text-sky-500" />
            <div className="space-y-8">
               {[
                 { 
                   title: "Responsive Check", 
                   code: `if (screen.width < 768) {\n  console.log("Mobile device");\n} else {\n  console.log("Desktop device");\n}`,
                   icon: Smartphone, 
                   color: "text-blue-500 bg-blue-500/10",
                   desc: "Detect hardware category."
                 },
                 { 
                   title: "Adjust UI Dynamically", 
                   code: `let box = document.getElementById("box");\n\nif (screen.width < 600) {\n  box.style.width = "100%";\n}`,
                   icon: Layout, 
                   color: "text-sky-500 bg-sky-500/10",
                   desc: "Adaptive UI logic."
                 },
                 { 
                   title: "Game Resolution", 
                   code: `let width = screen.width;\nlet height = screen.height;\n\nconsole.log(\`Game resolution: \${width}x\${height}\`);`,
                   icon: Gamepad2, 
                   color: "text-indigo-500 bg-indigo-500/10",
                   desc: "Canvas optimization."
                 }
               ].map((exp, i) => (
                 <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4 group hover:shadow-2xl transition-all">
                    <div className="flex items-center justify-between mb-4">
                       <div className={`p-4 rounded-2xl ${exp.color} group-hover:scale-110 transition-transform`}>
                          <exp.icon size={22} />
                       </div>
                       <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase italic">{exp.desc}</span>
                    </div>
                    <h4 className="text-xl font-black italic tracking-tight">🎯 {exp.title}</h4>
                    <CodeBlock title={exp.title} code={exp.code} />
                 </div>
               ))}
            </div>
         </div>
      </section>
 
      {/* ── Section 4: Comparison Table ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic">
         <div className="space-y-8">
            <SectionHeader icon={Layers} title="5. screen vs window" subtitle="The difference between device size and viewport size." color="text-rose-500" />
            <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-inner">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="px-8 py-6 text-xs font-black uppercase text-gray-500 tracking-widest">Feature</th>
                        <th className="px-8 py-6 text-xs font-black uppercase text-sky-500 tracking-widest">screen</th>
                        <th className="px-8 py-6 text-xs font-black uppercase text-indigo-500 tracking-widest">window</th>
                     </tr>
                  </thead>
                  <tbody>
                     {[
                       { feature: "Physical Device Size", screen: "✅", window: "❌" },
                       { feature: "Browser Viewport", screen: "❌", window: "✅" },
                       { feature: "Available Workarea", screen: "✅", window: "❌" },
                       { feature: "Responsive Logic", screen: "⚠️ No", window: "💎 Yes" }
                     ].map((row, i) => (
                       <tr key={i} className="group hover:bg-white dark:hover:bg-black/20 transition-colors">
                          <td className="px-8 py-6 font-bold text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{row.feature}</td>
                          <td className="px-8 py-6 font-black text-sky-500">{row.screen}</td>
                          <td className="px-8 py-6 font-black text-indigo-500">{row.window}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <div className="p-6 bg-indigo-500/5 rounded-3xl border border-indigo-500/10 flex items-center justify-between group underline overflow-hidden relative">
               <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 bg-indigo-500 text-white rounded-xl shadow-lg">
                     <Search size={20} />
                  </div>
                  <div>
                    <h6 className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1 italic">Comparison Code</h6>
                    <span className="text-indigo-400 font-mono text-sm underline italic">console.log(window.innerWidth);</span>
                  </div>
               </div>
               <ArrowRight className="text-indigo-300 transform group-hover:translate-x-2 transition-transform" />
            </div>
         </div>

         <div className="space-y-8">
            <SectionHeader icon={Lightbulb} title="Personal Recommendations" subtitle="Advice from expert front-end developers." color="text-amber-500" />
            <div className="p-10 bg-gray-950 rounded-[3.8rem] border border-white/5 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000 rotate-12">
                  <Binary size={200} className="text-amber-500" />
               </div>
               <div className="space-y-8 relative z-10">
                  {[
                    { label: "Prefer window.innerWidth", text: "Always use internal viewport width for UI placement and media query logic.", color: "text-sky-400" },
                    { label: "Use screen for Hardware", text: "Reserve the screen object for hardware stats or determining game base resolutions.", color: "text-indigo-400" },
                    { label: "CSS is King", text: "Combine JavaScript screen detection with CSS Media Queries for the most robust results.", color: "text-emerald-400" }
                  ].map((rec, i) => (
                    <div key={i} className="flex gap-6 items-start group/rec">
                       <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover/rec:bg-white/10 transition-colors h-fit">
                          <CheckCircle size={20} className="text-amber-500" />
                       </div>
                       <div>
                          <h6 className={`text-sm font-black italic underline decoration-transparent ${rec.color} block mb-1 uppercase tracking-[0.1em]`}>{rec.label}</h6>
                          <p className="text-xs text-gray-500 font-medium leading-relaxed italic">{rec.text}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5: Tips & Tricks ── */}
      <section className="max-w-6xl mx-auto mb-32 grid md:grid-cols-3 gap-8">
         {[
           { title: "1. Detect Mobile", code: "if (screen.width <= 768)", desc: "Quick device category filter.", icon: Smartphone },
           { title: "2. Debug Display", code: "console.log(screen)", desc: "See the full hardware object.", icon: BugIcon },
           { title: "3. Listen for Resize", code: "window.onresize = ...", desc: "Always handle viewport shifts.", icon: RefreshCw }
         ].map((tip, i) => (
           <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6 group hover:-translate-y-2 transition-all">
              <div className="p-4 bg-sky-500/10 text-sky-500 rounded-2xl w-fit group-hover:bg-sky-500 group-hover:text-white transition-all">
                 <tip.icon size={24} />
              </div>
              <div>
                 <h5 className="text-lg font-black italic mb-2">{tip.title}</h5>
                 <p className="text-xs text-gray-500 font-medium mb-6 italic uppercase tracking-widest">{tip.desc}</p>
                 <div className="p-4 bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl group-hover:border-sky-500/50 transition-colors">
                    <code className="text-[10px] font-mono font-black text-sky-600 dark:text-sky-400">{tip.code}</code>
                 </div>
              </div>
           </div>
         ))}
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
            Hardware context. <br /> Viewport truth.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose max-w-2xl mx-auto">
            While the physical screen sets the stage, the browser window defines the performance. Mastering the interplay between both is key to high-performance responsive web design.
         </p>
      </footer>

    </div>
  );
};

const BugIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>
);

export default JsScreen;
