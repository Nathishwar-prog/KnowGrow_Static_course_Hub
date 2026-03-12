import React, { useState } from 'react';
import { 
  Ruler, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  Activity, Layers, List, Check, Eye, 
  ShieldCheck, TrendingUp, MonitorPlay, 
  MousePointer2, Box, Maximize, Clock, 
  Target, Presentation, Sparkles, RotateCw, 
  Type, AlignCenter, Palette, MoveRight, 
  ClipboardCheck, HelpCircle, Layout
} from 'lucide-react';

function MplTicks() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'labels' | 'rotation' | 'styling' | 'visitors'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_ticks':
        outLines = [
          'Initializing coordinate mapping...',
          'plt.xticks([1, 2, 3, 4]) called.',
          'plt.yticks([10, 20, 30]) called.',
          'Updating axis markers...',
          'Success: Scale recalibrated to specific intervals.'
        ];
        break;
      case 'custom_labels':
        outLines = [
          'Series found: [1, 2, 3, 4]',
          'Applying labels: ["Jan", "Feb", "Mar", "Apr"]',
          'plt.xticks(x, labels) mapping active.',
          'Success: Numeric values replaced with month descriptors.'
        ];
        break;
      case 'rotation_logic':
        outLines = [
          'Scanning product names: [Laptop, Smartphone, Tablet, ...]',
          'Detecting potential label collision...',
          'Applying plt.xticks(rotation=45)...',
          'Adjusting text angle for readability...',
          'Success: Rotated labels preventing overlap.'
        ];
        break;
      case 'styling_ticks':
        outLines = [
          'plt.xticks(fontsize=12) applied.',
          'plt.yticks(fontsize=12) applied.',
          'Recalculating canvas margins for larger text...',
          'Success: Tick visibility enhanced.'
        ];
        break;
      case 'visitors_report':
        outLines = [
          'Loading Daily Website Visitors dataset...',
          'Axis X: Setting labels to ["Mon", "Tue", "Wed", "Thu", "Fri"]',
          'Axis Y: Normalizing scale to [100, 120, 140, 160, 180]',
          'Rendering trend line with marker="o"',
          'Success: Professional analytics scale rasterized.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Scanning for Water Intake metrics...',
          'Validating plt.xticks(days, labels) logic... OK.',
          'Checking labels: [Mon, Tue, Wed, Thu, Fri]... FOUND.',
          'Verifying marker="o" logic... YES.',
          'Performance: 100/100. Student project scaled perfectly!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100 italic font-black">
      
      {/* 1. Header with Ruler/Scale Design */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden italic">
        <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-5 bg-cyan-100 dark:bg-cyan-900/30 rounded-[2.5rem] mb-10 shadow-sm border border-cyan-200 dark:border-cyan-800/50 hover:scale-110 transition-transform cursor-pointer group">
          <Ruler className="w-14 h-14 text-cyan-600 dark:text-cyan-400 group-hover:rotate-45 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-[10px] font-black mb-6 border border-cyan-500/20 tracking-[0.4em] uppercase shadow-lg backdrop-blur-md italic">
          Axis Calibration Module
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic uppercase underline decoration-cyan-500/20 underline-offset-[16px]">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-500">Ticks</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold italic">
          "Master the scale of your data. Ticks are the markers on the axes that indicate specific values, transforming a blank graph into a precise measurement tool."
        </p>
      </header>

      {/* 2. Conceptual Foundation Overview */}
      <section className="max-w-6xl mx-auto mb-20 px-4 italic font-black">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between transition-all hover:shadow-2xl font-black">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-cyan-500 rounded-2xl shadow-lg shadow-cyan-500/20 mr-6 group-hover:rotate-6 transition-transform">
                  <Info className="w-6 h-6 text-white italic shadow-2xl" />
                </div>
                <h2 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter decoration-cyan-500/10 underline underline-offset-8 font-black">Axis Markers</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-cyan-500 pl-8 transition-colors group-hover:text-slate-900 dark:group-hover:text-white underline decoration-cyan-500/5 underline-offset-8 font-black">
                "Ticks are the numbers or labels shown along the axes that indicate specific data values on the X and Y coordinate planes."
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { l: "X-Axis Ticks", i: MoveRight },
                   { l: "Y-Axis Ticks", i: TrendingUp }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800/50 hover:bg-cyan-500/5 transition-all">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mr-5">
                         <mod.i className="w-4 h-4 text-cyan-500" />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-black italic">{mod.l}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-700 via-blue-800 to-indigo-950 p-10 rounded-[4rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group font-black italic">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white font-black italic uppercase italic shadow-sm">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter underline decoration-white/20 underline-offset-8 font-black">
                 <ShieldCheck className="w-8 h-8 mr-5" />
                 Calibration Logic
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 leading-tight">
                 {[
                   { t: "Scale Control", d: "Limit displayed axis values.", i: Ruler },
                   { t: "Label Overlap", d: "Fix long text collisions.", i: RotateCw },
                   { t: "Text Replacement", d: "Numbers to Month/Days.", i: Type },
                   { t: "Visual Styling", d: "Adjust size & appearance.", i: Palette }
                 ].map((mod, i) => (
                   <div key={i} className="flex flex-col p-6 bg-white/10 rounded-[3rem] border border-white/5 hover:bg-white/20 transition-all cursor-crosshair group/item relative overflow-hidden font-black">
                      <mod.i className="w-8 h-8 mb-4 text-cyan-200 group-hover/item:scale-110 transition-transform shadow-2xl" />
                      <div>
                         <h5 className="font-black text-xs tracking-widest tracking-tighter mb-1 uppercase font-black">{mod.t}</h5>
                         <p className="text-[9px] text-white/40 font-bold decoration-white/5 underline underline-offset-4 font-black">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-6 bg-white/5 rounded-[2.5rem] border border-white/10 flex items-center shadow-2xl backdrop-blur-md">
                  <Sparkles className="w-6 h-6 text-cyan-200 mr-5 animate-pulse" />
                  <p className="text-xs font-black leading-relaxed opacity-80 decoration-cyan-200/20 underline underline-offset-4 tracking-tighter uppercase italic shadow-sm">
                    Precise ticks transform sketches into scientific instruments.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Scale Calibration Lab */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4 italic font-black">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-10">
           <div className="flex items-center translate-x-4">
             <div className="p-4 bg-cyan-100 dark:bg-cyan-900/40 rounded-[3rem] mr-8 shadow-2xl border border-cyan-200 dark:border-cyan-800 transition-all hover:rotate-6 font-black shadow-2xl">
               <Terminal className="w-10 h-10 text-cyan-600 dark:text-cyan-400 font-bold italic" />
             </div>
             <div>
               <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight underline decoration-cyan-500/10 underline-offset-10 italic uppercase tracking-tighter font-black underline shadow-sm">Scale Calibration Lab</h2>
               <p className="text-xs text-slate-500 font-black uppercase tracking-[0.5em] mt-3 italic underline decoration-cyan-500/10 underline-offset-4 opacity-70">plt.xticks() Syntax Studio</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-2 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar font-black shadow-2xl">
            {[
              { id: 'basics', label: 'Basic Ticks', icon: Code },
              { id: 'labels', label: 'Text Labels', icon: Type },
              { id: 'rotation', label: 'Rotation', icon: RotateCw },
              { id: 'styling', label: 'Tick Styles', icon: Palette },
              { id: 'visitors', label: 'Pro Visitors', icon: Presentation }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-8 py-5 rounded-[4rem] text-[11px] font-black tracking-widest uppercase transition-all whitespace-nowrap italic ${
                  activeTab === tab.id 
                    ? 'bg-cyan-600 text-white shadow-xl shadow-cyan-900/40 scale-105 font-black' 
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-3 font-black" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start italic font-black">
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-14 rounded-[5rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[640px] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.04] rotate-12 -z-0 grayscale group-hover:grayscale-0 transition-all duration-1000"><Ruler className="w-[30rem] h-[30rem] text-cyan-500" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col relative z-10 italic">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-cyan-600 tracking-tighter uppercase italic underline decoration-cyan-500/20 underline-offset-8 font-black">
                    <Code className="w-10 h-10 mr-6 text-cyan-500 font-black italic shadow-2xl" />
                    3️⃣ & 4️⃣ Custom Numeric Ticks
                  </h3>
                  <div className="space-y-12 flex-1 flex flex-col justify-center italic font-black">
                    <div className="grid grid-cols-2 gap-6 italic">
                       <div className="p-8 bg-cyan-500/5 rounded-[3rem] border border-cyan-500/10 italic font-black shadow-sm">
                          <span className="block text-[10px] text-cyan-600 uppercase tracking-[0.4em] mb-4">X-Axis Method</span>
                          <code className="text-xl font-mono text-slate-700 dark:text-slate-300 tracking-tighter font-black">plt.<span className="text-cyan-500 font-black">xticks</span>([1, 2, 3])</code>
                       </div>
                       <div className="p-8 bg-cyan-500/5 rounded-[3rem] border border-cyan-500/10 italic font-black shadow-sm">
                          <span className="block text-[10px] text-cyan-600 uppercase tracking-[0.4em] mb-4">Y-Axis Method</span>
                          <code className="text-xl font-mono text-slate-700 dark:text-slate-300 tracking-tighter font-black">plt.<span className="text-cyan-500 font-black">yticks</span>([10, 20])</code>
                       </div>
                    </div>

                    <div className="bg-slate-950 p-12 rounded-[5rem] border border-cyan-500/20 shadow-2xl relative group/code overflow-hidden font-black">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/code:scale-110 transition-all font-mono italic"><Target className="w-40 h-40 text-cyan-500 shadow-2xl" /></div>
                        <pre className="font-mono text-sm leading-8 text-slate-300 relative z-10 italic">
                           plt.plot(x, y)<br/><br/>
                           plt.<span className="text-cyan-500 underline decoration-cyan-500/30 underline-offset-8">xticks</span>([1, 2, 3, 4])<br/>
                           plt.<span className="text-cyan-500 underline decoration-cyan-500/30 underline-offset-8">yticks</span>([10, 20, 30])<br/><br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_ticks')} className="absolute bottom-12 right-12 p-8 bg-cyan-600 text-white rounded-[2.5rem] shadow-2xl hover:bg-cyan-500 transition-all active:scale-90 group-hover/code:ring-8 ring-cyan-500/10 font-black shadow-2xl">
                           <Play className="w-8 h-8 fill-current font-black" />
                        </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Text Labels */}
              {activeTab === 'labels' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center italic font-black">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-blue-500 uppercase tracking-tighter italic font-black underline decoration-blue-500/10 underline-offset-8">
                    <Type className="w-10 h-10 mr-6 text-blue-500 font-black" />
                    5️⃣ String Label Overrides
                  </h3>
                  <div className="bg-blue-500/5 p-12 rounded-[5rem] border border-blue-500/10 italic font-black">
                     <p className="text-sm font-bold text-slate-500 mb-12 leading-relaxed italic pr-12 text-slate-400 font-black lowercase underline decoration-blue-500/5 underline-offset-8">
                        "Replace numeric markers with meaningful strings like Months (Jan, Feb) or Product Categories to improve chart context."
                     </p>
                     <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-blue-500/20 shadow-2xl relative font-mono italic">
                        <pre className="text-xs text-blue-200 leading-9">
                           {`labels = ["Jan", "Feb", "Mar", "Apr"]
plt.xticks(x, labels)`}
                        </pre>
                     </div>
                     <button onClick={() => runDemo('custom_labels')} className="w-full py-8 bg-blue-700 text-white font-black rounded-[4rem] shadow-2xl hover:bg-blue-600 transition-all text-xs tracking-[0.5em] italic uppercase mt-12 transform hover:scale-[1.02] active:scale-95 font-black uppercase shadow-2xl">Apply Semantic Scale</button>
                  </div>
                </div>
              )}

              {/* Tab: Rotation */}
              {activeTab === 'rotation' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center italic font-black">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-cyan-500 uppercase tracking-tighter italic font-black underline decoration-cyan-500/20 underline-offset-8">
                    <RotateCw className="w-10 h-10 mr-6 text-cyan-500" />
                    6️⃣ Label Collision Fix
                  </h3>
                  <div className="p-10 bg-cyan-500/5 rounded-[4.5rem] border border-cyan-500/10 italic font-black shadow-sm">
                     <div className="flex justify-center mb-10 group/rot">
                        <RotateCw className="w-16 h-16 text-cyan-500 group-hover/rot:rotate-45 transition-transform duration-700 font-black shadow-2xl" />
                     </div>
                     <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-cyan-500/30 shadow-2xl relative overflow-hidden font-mono text-[11px] italic uppercase tracking-tighter font-black">
                        <pre className="text-cyan-400">
                           plt.<span className="text-white font-black underline">xticks</span>(<span className="text-cyan-500 font-black italic">rotation=45</span>)
                        </pre>
                     </div>
                     <button onClick={() => runDemo('rotation_logic')} className="w-full py-8 bg-cyan-800 text-white font-black rounded-[3rem] shadow-2xl hover:bg-cyan-700 transition-all text-[11px] tracking-widest italic uppercase mt-12 flex items-center justify-center filter hover:brightness-110 font-black shadow-2xl">Initialize Rotational Logic</button>
                  </div>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center italic font-black">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-indigo-500 uppercase tracking-tighter italic font-black underline decoration-indigo-500/20 underline-offset-8">
                    <Palette className="w-10 h-10 mr-6 text-indigo-500" />
                    7️⃣ Tick Font Customization
                  </h3>
                  <div className="grid grid-cols-2 gap-8 font-black italic">
                     <div className="p-10 bg-indigo-500/5 rounded-[4rem] border border-indigo-500/10 hover:bg-indigo-500/10 transition-all group/f italic font-black shadow-sm">
                        <span className="block text-[10px] text-indigo-600 tracking-[0.4em] uppercase mb-6 italic underline decoration-indigo-500/10 underline-offset-8 font-black shadow-sm">Property: fontsize</span>
                        <code className="text-2xl text-indigo-500 group-hover:scale-110 transition-transform inline-block font-black shadow-sm">fontsize=12</code>
                     </div>
                     <div className="p-10 bg-indigo-500/5 rounded-[4rem] border border-indigo-500/10 hover:bg-indigo-500/10 transition-all group/s italic font-black shadow-sm">
                        <span className="block text-[10px] text-indigo-600 tracking-[0.4em] uppercase mb-6 italic underline decoration-indigo-500/10 underline-offset-8 font-black shadow-sm">Visual: Styled Ticks</span>
                        <code className="text-2xl text-indigo-500 group-hover:scale-110 transition-transform inline-block font-black shadow-sm underline">plt.yticks()</code>
                     </div>
                  </div>
                  <button onClick={() => runDemo('styling_ticks')} className="w-full py-8 bg-indigo-600 text-white font-black rounded-[4rem] shadow-2xl hover:bg-indigo-500 transition-all text-[11px] tracking-widest uppercase mt-6 italic border-b-4 border-indigo-900/50 font-black shadow-2xl">Modify Scale Aesthetics</button>
                </div>
              )}

              {/* Tab: Visitors */}
              {activeTab === 'visitors' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col justify-center space-y-12 relative z-10 italic uppercase font-black">
                  <h3 className="text-3xl font-black flex items-center mb-6 text-cyan-600 tracking-tighter border-b dark:border-slate-800 pb-6 uppercase italic underline decoration-cyan-500/10 underline-offset-8 font-black">
                    <Presentation className="w-10 h-10 mr-6 text-cyan-500 font-black" />
                    8️⃣ Website Traffic Hub Case Study
                  </h3>
                  <div className="bg-cyan-500/5 p-14 rounded-[5.5rem] border border-cyan-500/20 flex flex-col items-center justify-center relative overflow-hidden group/case italic font-black">
                     <div className="absolute top-0 right-0 p-14 opacity-[0.05] grayscale-0 group-hover/case:rotate-12 transition-transform duration-1000 font-black"><MonitorPlay className="w-48 h-48 text-cyan-400 font-black shadow-2xl" /></div>
                     <div className="text-4xl font-black text-cyan-600 mb-8 italic underline decoration-cyan-500/20 underline-offset-8 tracking-tighter uppercase font-black shadow-sm italic">Daily Visitor Flow</div>
                     <p className="text-sm font-bold text-slate-500 text-center leading-relaxed italic max-w-sm lowercase opacity-70 underline decoration-cyan-500/5 underline-offset-6 font-black shadow-sm">
                        "Optimizing axis readability by setting custom Y-intercepts and X-day labels for an informative traffic reporting system."
                     </p>
                  </div>
                  <button onClick={() => runDemo('visitors_report')} className="w-full py-8 bg-black text-white dark:bg-white dark:text-black font-black rounded-[4.5rem] shadow-2xl hover:bg-slate-900 transition-all text-[11px] tracking-[0.5em] italic uppercase ring-offset-4 active:ring-[10px] ring-cyan-500/10 font-black shadow-2xl">Synthesize Professional Scale</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10 font-mono italic font-black font-black italic shadow-2xl">
            
            {/* Calibration Engine Terminal */}
            <div className="bg-[#0b0c10] rounded-[5rem] p-12 border border-slate-800 flex-1 min-h-[560px] shadow-2xl relative overflow-hidden group/terminal flex flex-col italic font-black shadow-2xl">
               <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] group-hover/terminal:bg-cyan-500/10 transition-all duration-1000 font-black shadow-2xl"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1 italic font-black shadow-2xl">
                  <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-10 px-6 transition-all font-black">
                    <div className="flex items-center">
                      <Terminal className="w-8 h-8 mr-6 text-cyan-500/70 animate-pulse font-bold italic shadow-2xl font-black" />
                      <h3 className="font-black text-slate-700 uppercase text-[10px] tracking-[0.6em] font-mono font-black italic">
                         SCALE_ENGINE_v4
                      </h3>
                    </div>
                    <div className="flex space-x-3">
                       <div className="w-4 h-4 rounded-full bg-cyan-950 shadow-inner"></div>
                       <div className="w-4 h-4 rounded-full bg-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[420px] custom-scrollbar px-6 space-y-8 leading-loose uppercase italic tracking-tighter font-black shadow-2xl italic">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-14 opacity-20 select-none filter hover:brightness-150 transition-all duration-700 grayscale hover:grayscale-0 font-black italic shadow-2xl">
                        <MonitorPlay className="w-28 h-28 stroke-[1px] animate-pulse duration-[6000ms] font-black" />
                        <div className="text-center font-black">
                           <span className="block text-[9px] uppercase tracking-[0.8em] font-black text-cyan-600 mb-4 underline decoration-cyan-500/30 underline-offset-10 italic shadow-sm">Engine Standby...</span>
                           <span className="text-[11px] font-black text-white/40 tracking-widest decoration-white/5 underline underline-offset-4 font-black shadow-sm">Axis Rasterization Logic Required</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-6 font-black italic shadow-2xl">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-8 duration-700 flex items-start group/line font-black">
                              <span className="text-cyan-500/30 mr-6 font-black select-none text-[8px] mt-1 shrink-0 uppercase tracking-widest decoration-cyan-500/10 underline italic font-mono tracking-tighter lowercase shadow-sm">plt::tick</span>
                              <span className={`leading-relaxed font-black transition-colors ${
                                line.includes('Success') || line.includes('Performance') ? 'text-cyan-400 font-extrabold tracking-tight underline decoration-cyan-500/10 underline-offset-6 font-mono uppercase italic shadow-sm' :
                                line.includes('Loading') || line.includes('Scanning') || line.includes('Initializating') ? 'text-blue-400 italic lowercase shadow-sm' :
                                line.includes('Applying') || line.includes('Recalculating') || line.includes('Setting') || line.includes('Detecting') ? 'text-cyan-500 uppercase italic shadow-sm' :
                                line.includes('Result') ? 'text-cyan-500 font-black tracking-widest uppercase border-b border-cyan-500/20 italic shadow-sm' :
                                'text-slate-600 italic uppercase text-[9px] tracking-tight decoration-slate-900 underline underline-offset-4 shadow-sm'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-16 flex justify-between items-center border-t border-white/5 mt-14 italic uppercase font-black font-black italic shadow-2xl">
                           <div className="flex items-center gap-5 italic font-black shadow-2xl">
                              <span className="w-3.5 h-3.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_20px_rgba(6,182,212,0.7)] font-black"></span>
                              <span className="text-[10px] text-slate-800 font-black tracking-[0.5em] decoration-cyan-500/10 underline italic font-mono lowercase font-black shadow-sm">axis_grid_Rastered</span>
                           </div>
                           <button onClick={resetConsole} className="text-[10px] text-cyan-500/70 hover:text-cyan-400 font-black tracking-[0.4em] font-mono transition-colors border-b-2 border-cyan-500/10 uppercase italic font-black shadow-sm">Flush IO</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Course Architecture Roadmap */}
            <div className="bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-900 p-12 rounded-[5.5rem] border border-white/10 shadow-2xl relative overflow-hidden group font-black italic shadow-2xl transition-all">
               <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-cyan-400/10 rounded-full blur-[120px] font-black"></div>
               <h4 className="text-white font-black text-[11px] mb-12 flex items-center uppercase tracking-[0.6em] opacity-80 underline decoration-cyan-500 underline-offset-10 italic tracking-tighter lowercase font-mono font-black italic shadow-2xl">
                 <List className="w-6 h-6 text-cyan-400 mr-5 transition-transform group-hover:rotate-180 duration-1000 italic font-black shadow-2xl" />
                 Specialist roadmap
               </h4>
               <div className="space-y-6 px-4 relative z-10 italic uppercase font-black tracking-tighter font-black shadow-2xl">
                  {[
                    "Matplotlib Labels", "Matplotlib Grid", "Matplotlib Ticks", "Matplotlib Subplots", "Advanced Formatting"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300 font-black italic shadow-2xl">
                       <div className={`w-14 h-12 rounded-2xl flex items-center justify-center mr-8 transition-all duration-700 hover:scale-110 shadow-2xl font-black italic ${i === 2 ? 'bg-cyan-600 shadow-cyan-500/50 rotate-12 font-black' : 'bg-white/5 border border-white/10 opacity-30 select-none grayscale'}`}>
                          <span className={`text-[12px] font-black italic ${i === 2 ? 'text-white' : 'text-slate-600'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-black tracking-widest transition-colors uppercase italic ${i === 2 ? 'text-cyan-400 underline decoration-cyan-500/30 underline-offset-10' : 'text-slate-800'}`}>{path}</span>
                       {i === 2 && <Sparkles className="w-5 h-5 ml-auto text-cyan-400 animate-pulse font-black italic shadow-2xl" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Axis Advice */}
      <section className="max-w-6xl mx-auto mb-24 px-4 overflow-hidden italic font-black">
        <div className="bg-white dark:bg-slate-900 p-16 sm:p-28 rounded-[7rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group font-black italic shadow-2xl">
          <div className="absolute bottom-0 left-0 p-24 opacity-[0.04] scale-150 rotate-12 -z-0 pointer-events-none grayscale-0 group-hover:-rotate-12 transition-transform duration-[4000ms] transition-all font-black"><Ruler className="w-[40rem] h-[40rem] text-cyan-500 font-black shadow-2xl" /></div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-28 gap-12 relative z-10 tracking-tighter decoration-cyan-500/20 underline underline-offset-[20px] italic font-black uppercase italic underline">
             <div className="flex items-center font-black italic uppercase italic shadow-sm">
                <div className="p-6 bg-cyan-100 dark:bg-cyan-900/40 rounded-[3.5rem] mr-12 shadow-2xl transition-transform hover:rotate-6 font-black italic">
                   <Lightbulb className="w-14 h-14 text-cyan-600 dark:text-cyan-400 font-bold italic shadow-2xl font-black" />
                </div>
                <div>
                   <h2 className="text-5xl text-slate-900 dark:text-white mb-3 uppercase tracking-tighter italic font-black underline decoration-cyan-500/5 shadow-sm">
                      Tick Design Grid
                   </h2>
                   <p className="text-xl text-slate-500 dark:text-slate-400 font-bold tracking-tight lowercase italic border-l-4 border-cyan-500/20 pl-8 font-black underline decoration-cyan-500/5 shadow-sm">Axis Scaling expert advice.</p>
                </div>
             </div>
             <div className="h-0.5 w-48 bg-cyan-500/20 hidden md:block italic tracking-widest font-black uppercase italic underline decoration-cyan-500/5 underline-offset-4 shadow-sm">--- SCALE_MOD ---</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10 font-black italic shadow-2xl">
             {[
               { t: "The Sparse Rule", d: "Avoid excessive tick marks. Too many labels clutter the axis; aim for 5–10 meaningful ticks per axis for maximum clarity.", i: ShieldCheck, c: "text-cyan-600" },
               { t: "Meaningful Descriptors", d: "Always use descriptive labels like Months, Days, or Categories instead of raw numbers when data is categorical.", i: Type, c: "text-blue-600" },
               { t: "Collision Neutralization", d: "Rotate long tick labels by 45 degrees to prevent overlapping and maintain text readability in dense plots.", i: RotateCw, c: "text-indigo-500" },
               { t: "Grid Synchronization", d: "Combine custom ticks with grid lines (plt.grid(True)) to create a visual reference system that guides the eye.", i: Layout, c: "text-cyan-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip transition-all hover:translate-x-4 duration-500 cursor-help font-black italic shadow-2xl">
                 <div className={`p-8 bg-slate-50 dark:bg-slate-800 rounded-[3.5rem] mr-12 shadow-sm group-hover/tip:bg-cyan-500/10 transition-all duration-1000 ${tip.c} bg-opacity-20 shrink-0 font-black italic shadow-2xl shadow-sm`}>
                    <tip.i className="w-12 h-12 group-hover/tip:rotate-12 group-hover/tip:scale-125 transition-transform font-bold italic shadow-2xl font-black shadow-sm" />
                 </div>
                 <div className="pt-2 italic font-black shadow-sm">
                    <h4 className="font-black text-slate-900 dark:text-white mb-6 group-hover/tip:text-cyan-600 transition-colors uppercase tracking-[0.5em] text-[11px] underline decoration-cyan-500/10 italic font-black">⭐ SCALE TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-black italic tracking-tighter opacity-80 lowercase decoration-cyan-500/5 underline underline-offset-8 decoration-dashed font-black">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Production Sample Showcase */}
      <section className="max-w-6xl mx-auto mb-20 px-4 font-black italic shadow-2xl transition-all">
         <div className="bg-cyan-600/5 rounded-[6rem] p-16 sm:p-24 border border-cyan-500/10 relative group overflow-hidden italic shadow-2xl backdrop-blur-3xl font-black transition-all">
            <div className="absolute top-0 right-0 p-14 opacity-[0.06] grayscale hover:grayscale-0 transition-all duration-[2000ms] font-black shadow-2xl shadow-sm"><Activity className="w-[35rem] h-[35rem] text-cyan-500 font-bold italic shadow-2xl shadow-sm" /></div>
            <div className="relative z-10 flex flex-col xl:flex-row items-center gap-20 italic font-black shadow-2xl">
               <div className="flex-1 text-center xl:text-left font-black italic shadow-2xl shadow-sm">
                  <h3 className="text-5xl font-black text-cyan-600 mb-10 tracking-tighter uppercase italic underline decoration-cyan-500/10 underline-offset-[16px] font-black shadow-sm italic">8️⃣ Informed Traffic Asset</h3>
                  <p className="text-xl font-black text-slate-500 dark:text-slate-400 mb-14 leading-relaxed italic opacity-80 lowercase decoration-cyan-500/5 underline underline-offset-10 font-black shadow-sm">
                     "Leveraging plt.xticks(days) and plt.yticks([scale]) to build an informative website visitor trend with clear intercept points."
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10 font-black italic shadow-2xl shadow-sm">
                     {[
                       { v: "X: Custom Days", c: "bg-cyan-500/10 shadow-sm" },
                       { v: "Y: Step Interval", c: "bg-blue-600/20 shadow-sm" }
                     ].map(v => (
                       <div key={v.v} className={`${v.c} px-10 py-6 rounded-[3rem] text-[11px] font-black text-cyan-600 uppercase tracking-widest text-center italic border border-cyan-500/10 shadow-xl font-black shadow-sm`}>{v.v}</div>
                     ))}
                  </div>
                  <button onClick={() => runDemo('visitors_report')} className="w-full py-8 bg-cyan-600 text-white font-black rounded-[4rem] shadow-2xl hover:bg-cyan-500 focus:ring-[12px] ring-cyan-500/20 flex items-center justify-center gap-6 transition-all italic text-[12px] tracking-widest uppercase border-b-6 border-cyan-900/50 active:translate-y-2 font-black shadow-2xl shadow-sm">
                     <MonitorPlay className="w-6 h-6 fill-current font-black italic shadow-2xl shadow-sm" /> RASTERIZE PRODUCTION SCALE
                  </button>
               </div>
               <div className="w-full xl:w-[28rem] bg-slate-950 p-14 rounded-[7rem] border border-cyan-500/30 shadow-2xl group/ex transform hover:-rotate-1 transition-transform font-black shadow-2xl italic shadow-sm">
                  <div className="flex items-center justify-center h-56 relative overflow-hidden mb-10 bg-cyan-500/5 rounded-[4rem] border border-cyan-500/10 shadow-inner font-black shadow-2xl shadow-sm">
                     <Ruler className="w-32 h-32 text-cyan-500/20 group-hover/ex:scale-150 transition-transform duration-[4000ms] font-black shadow-2xl shadow-sm" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-cyan-500/10 tracking-[2em] uppercase select-none cursor-not-allowed font-black shadow-sm italic shadow-2xl shadow-sm">AXIS_INTERCEPT_OK</div>
                  </div>
                  <div className="h-0.5 w-full bg-cyan-500/20 mb-10 px-6 font-black italic shadow-2xl shadow-sm"></div>
                  <div className="flex flex-col gap-6 font-mono opacity-60 italic text-[10px] font-black shadow-2xl shadow-sm">
                    <div className="flex justify-between font-black tracking-widest uppercase shadow-sm"><span>Engine::X</span> <span className="text-cyan-500 underline decoration-cyan-500/20 underline-offset-8 tracking-widest uppercase font-black uppercase tracking-tighter shadow-sm italic shadow-sm">Labels_Rasterized</span></div>
                    <div className="flex justify-between font-black tracking-widest uppercase shadow-sm"><span>Engine::Y</span> <span className="text-cyan-500 underline decoration-cyan-500/20 underline-offset-8 tracking-widest uppercase font-black uppercase tracking-tighter shadow-sm italic shadow-sm">Interval_Locked</span></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Practice Design Mission */}
      <section className="max-w-4xl mx-auto pb-28 px-6 md:px-0 font-black italic shadow-2xl transition-all">
        <div className="bg-gradient-to-br from-cyan-700 via-blue-800 to-slate-950 p-16 sm:p-28 rounded-[8.5rem] shadow-2xl relative overflow-hidden group border-b-[12px] border-cyan-900/40 transform hover:scale-[1.01] transition-all italic font-black shadow-2xl text-white shadow-2xl">
          <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[140px] -z-0 pointer-events-none group-hover:scale-125 transition-transform duration-[5000ms] font-black shadow-2xl"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-24 items-center italic font-black text-white italic font-black shadow-2xl shadow-sm">
            <div className="flex-1 text-center xl:text-left font-black italic shadow-2xl shadow-sm">
              <div className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-full text-[11px] font-black mb-14 border border-white/20 tracking-[0.5em] uppercase shadow-2xl backdrop-blur-2xl italic tracking-tighter decoration-white/20 underline underline-offset-10 italic font-black shadow-sm">
                🎯 Calibration Mission
              </div>
              <h2 className="text-6xl font-black text-white mb-12 leading-[1.0] tracking-tighter uppercase italic decoration-white/10 underline underline-offset-[16px] font-black shadow-sm italic">
                Hydration Tracker
              </h2>
              <p className="text-cyan-100 text-lg mb-16 leading-relaxed font-black pr-8 opacity-90 italic border-l-6 border-cyan-400 pl-10 lowercase tracking-widest decoration-white/10 underline underline-offset-10 font-black shadow-sm italic shadow-sm">
                Scale the flow! Create a chart showing <b>Daily Water Intake</b> (days 1-5). Use <b>plt.xticks(days, labels)</b> to map numeric indices to day names: <b>"Mon" to "Fri"</b>.
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-cyan-950 hover:bg-slate-50 px-20 py-10 rounded-[5rem] text-[15px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-90 uppercase tracking-[0.4em] italic mx-auto xl:mx-0 border-b-8 border-cyan-900/40 transform hover:translate-y-[-4px] shadow-2xl font-black italic shadow-sm"
               >
                 <Play className="w-6 h-6 mr-6 fill-cyan-950 group-hover/btn:rotate-180 transition-transform duration-700 font-black shadow-2xl shadow-sm italic shadow-sm" />
                 Initiate Scalar Trial
               </button>
            </div>

            <div className="w-full xl:w-[26rem] relative font-mono font-black shadow-2xl italic shadow-sm">
               <div className="bg-[#0b0c10] rounded-[7rem] border border-white/10 p-20 relative shadow-2xl overflow-hidden group-hover:rotate-3 transition-transform duration-1000 rotate-2 translate-z-10 bg-cyan-500/5 font-black shadow-2xl italic shadow-sm">
                  <div className="flex justify-between items-center mb-16 px-6 opacity-40 font-black italic uppercase italic shadow-sm shadow-sm">
                    <div className="flex gap-4 font-black italic shadow-sm">
                       <div className="w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-pulse font-black shadow-sm font-black"></div>
                       <div className="w-4 h-4 rounded-full bg-cyan-500/40 font-black shadow-sm font-black"></div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.6em] italic decoration-white/10 underline underline-offset-8 tracking-widest uppercase italic font-black shadow-sm shadow-sm">SCALE_v4</span>
                  </div>

                  <div className="h-56 relative flex items-center justify-center p-12 bg-cyan-500/5 rounded-[5rem] border border-cyan-500/10 overflow-hidden font-black group/m font-black italic shadow-2xl shadow-sm">
                     <Ruler className="w-28 h-28 text-cyan-600/30 group-hover/m:rotate-[360deg] transition-transform duration-[6000ms] font-black shadow-2xl shadow-sm italic shadow-sm" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-cyan-500/10 tracking-[2.5em] uppercase cursor-help select-none font-bold font-black shadow-sm italic shadow-sm">TICKS_RASTERIZING...</div>
                  </div>
                  
                  <div className="mt-16 flex items-center justify-center gap-6 text-cyan-500/10 text-[11px] font-black uppercase tracking-[0.7em] select-none italic underline decoration-cyan-500/5 underline-offset-10 italic font-black uppercase font-mono shadow-sm italic shadow-sm">
                     <ClipboardCheck className="w-5 h-5 shadow-sm italic shadow-sm" />
                     Intersect Rasterized
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Design Signature Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-28 opacity-40 hover:opacity-100 transition-all font-black uppercase italic tracking-[0.2em] decoration-cyan-500/10 underline underline-offset-[12px] font-mono shadow-sm italic transition-all duration-1000 shadow-sm">
         <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed mb-8 shadow-sm shadow-sm">
            Ticks are the language of chart precision. Calibrate your scale, replace your metrics, and build consistent scientific narratives through axis customization.
         </p>
         <div className="h-0.5 w-40 bg-cyan-500/10 mx-auto transition-all hover:w-[40rem] duration-1000 shadow-2xl shadow-sm shadow-sm"></div>
      </footer>

    </div>
  );
}

export default MplTicks;
