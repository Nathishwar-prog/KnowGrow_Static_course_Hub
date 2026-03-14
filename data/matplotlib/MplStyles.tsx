import React, { useState } from 'react';
import { 
  Palette, Info, Code, Terminal, 
  Play, Lightbulb, Zap, 
  Activity, Layers, List, 
  ShieldCheck, Brush, Sparkles,
  MonitorPlay, Layout, SunMoon,
  Clock, Target, Box, 
  Presentation, LayoutDashboard, Share2
} from 'lucide-react';

function MplStyles() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'available' | 'popular' | 'context' | 'traffic'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basics_style':
        outLines = [
          'Initializing Plotting Engine...',
          'Loading Style Module: plt.style',
          'Applying predefined theme: "ggplot"',
          'Updating global rcParams...',
          'Colors, Grids, and Fonts recalibrated.',
          'Success: Visual theme applied successfully.'
        ];
        break;
      case 'available_styles':
        outLines = [
          'plt.style.available called.',
          'Retrieving internal style directory...',
          'Found: [Solarize_Light2, bmh, classic, dark_background, ...]',
          'Total themes accessible: 26',
          'Ready for application.'
        ];
        break;
      case 'dark_mode':
        outLines = [
          'Switching to "dark_background" style...',
          'Inverting canvas contrast...',
          'Setting text to white. Setting grid to dark-gray.',
          'plt.show() triggered for presentation mode.',
          'Success: High-contrast Dark UI rendered.'
        ];
        break;
      case 'context_style':
        outLines = [
          'Entering Temporary Style Context...',
          'with plt.style.context("ggplot"):',
          'Executing current block with theme overrides...',
          'Block execution complete.',
          'Resetting global styles to default...',
          'Success: Original theme preserved.'
        ];
        break;
      case 'traffic_report':
        outLines = [
          'Loading Website Traffic Dataset...',
          'Applying "ggplot" for professional aesthetic.',
          'Plotting days vs visitors with markers.',
          'Updating Titles and Labels...',
          'Success: Informative traffic chart rasterized.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Scanning for Water Intake Data...',
          'Checking: plt.style.use("ggplot")... FOUND.',
          'Validating plt.plot(days, water, marker="o")... OK.',
          'Checking Axes: [Day, Liters]... VERIFIED.',
          'Performance: 100/100. Student project styled professionally!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100 italic">
      
      {/* 1. Header with Artistic Design */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-5 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-[2.5rem] mb-10 shadow-sm border border-fuchsia-200 dark:border-fuchsia-800/50 hover:rotate-12 transition-transform cursor-pointer group">
          <Palette className="w-14 h-14 text-fuchsia-600 dark:text-fuchsia-400 group-hover:scale-110 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 rounded-full text-[10px] font-black mb-6 border border-fuchsia-500/20 tracking-[0.4em] uppercase shadow-lg backdrop-blur-md">
          Module: Visual Engineering
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic uppercase underline decoration-fuchsia-500/20 underline-offset-[16px]">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-rose-500 to-amber-500">Styles</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold italic">
          "The designer's toolbox for Matplotlib. Styles allow you to apply consistent, professional themes to your data visualizations with a single line of code."
        </p>
      </header>

      {/* 2. Conceptual Foundation Overview */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between transition-all hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-fuchsia-500 rounded-2xl shadow-lg shadow-fuchsia-500/20 mr-6 group-hover:rotate-6 transition-transform">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter decoration-fuchsia-500/10 underline underline-offset-8">Theme Precedence</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-fuchsia-500 pl-8">
                "Matplotlib styles are predefined visual themes that control everything from background colors and grid lines to font and line styles."
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { l: "Save Time", i: Clock },
                   { l: "Consistent UI", i: LayoutDashboard },
                   { l: "Pro Aesthetics", i: Sparkles },
                   { l: "Quick Switch", i: Zap }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50 hover:bg-fuchsia-500/5 transition-all">
                      <div className="w-10 h-10 rounded-full bg-fuchsia-500/10 flex items-center justify-center mr-4">
                         <mod.i className="w-4 h-4 text-fuchsia-500 italic" />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{mod.l}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-700 via-rose-800 to-slate-950 p-10 rounded-[4rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white font-black italic uppercase tracking-tighter">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter border-b border-white/10 pb-6">
                 <ShieldCheck className="w-8 h-8 mr-5" />
                 Design Architecture
               </h3>
               <div className="space-y-6 leading-tight">
                 {[
                    "Global Theme Application via `plt.style.use()`",
                    "Temporary Local Styling via contexts",
                    "Customizing Overrides for branding",
                    "High-Contrast dark mode for displays"
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center group/item hover:bg-white/5 p-2 rounded-2xl transition-all">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-6 shrink-0 transition-transform group-hover/item:scale-110">
                         <Brush className="w-4 h-4 text-fuchsia-300" />
                      </div>
                      <p className="text-[11px] text-fuchsia-100/70 font-bold decoration-white/5 underline underline-offset-4">{mod}</p>
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-6 bg-white/5 rounded-[2.5rem] border border-white/10 flex items-center">
                  <Activity className="w-6 h-6 text-fuchsia-200 mr-5 animate-pulse" />
                  <p className="text-xs font-black leading-relaxed opacity-80 lowercase underline decoration-white/5 underline-offset-4 tracking-tighter italic">
                    Visual consistency transforms raw metrics into production artifacts.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Theme Laboratory */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-10">
           <div className="flex items-center translate-x-4">
             <div className="p-4 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-[3rem] mr-8 shadow-2xl border border-fuchsia-200 dark:border-fuchsia-800 transition-all hover:rotate-12">
               <Terminal className="w-10 h-10 text-fuchsia-600 dark:text-fuchsia-400 font-bold italic" />
             </div>
             <div>
               <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight underline decoration-fuchsia-500/10 underline-offset-10 italic uppercase tracking-tighter">Theme Laboratory</h2>
               <p className="text-xs text-slate-500 font-black uppercase tracking-[0.5em] mt-3 italic underline decoration-fuchsia-500/10 underline-offset-4 opacity-70">plt.style() Resource Manager</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-2 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar font-black">
            {[
              { id: 'basics', label: 'Use Style', icon: Code },
              { id: 'available', label: 'Styles List', icon: List },
              { id: 'popular', label: 'Popular Themes', icon: Sparkles },
              { id: 'context', label: 'Style Context', icon: Box },
              { id: 'traffic', label: 'Report Style', icon: Presentation }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-8 py-5 rounded-[4rem] text-[11px] font-black tracking-widest uppercase transition-all whitespace-nowrap italic ${
                  activeTab === tab.id 
                    ? 'bg-fuchsia-600 text-white shadow-xl shadow-fuchsia-900/40 scale-105' 
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-3" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start italic font-black">
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-14 rounded-[5rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[640px] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.04] rotate-12 -z-0 grayscale group-hover:grayscale-0 transition-all duration-1000"><Brush className="w-[30rem] h-[30rem] text-fuchsia-500" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col relative z-10">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-fuchsia-600 tracking-tighter uppercase italic underline decoration-fuchsia-500/10 underline-offset-8">
                    <Code className="w-10 h-10 mr-6 text-fuchsia-500" />
                    3ï¸âƒ£ Universal Application
                  </h3>
                  <div className="space-y-12 flex-1 flex flex-col justify-center">
                    <div className="p-10 bg-fuchsia-500/5 rounded-[4rem] border border-fuchsia-500/20 italic">
                       <span className="block text-[10px] text-fuchsia-600 uppercase tracking-[0.4em] mb-4">The Command</span>
                       <code className="text-2xl font-mono text-slate-700 dark:text-slate-300">plt.style.<span className="text-fuchsia-500 underline decoration-fuchsia-500/30 underline-offset-8 font-black">use</span>("ggplot")</code>
                    </div>
                    
                    <div className="bg-slate-950 p-12 rounded-[5rem] border border-fuchsia-500/20 shadow-2xl relative group/code overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/code:scale-110 transition-all"><Sparkles className="w-40 h-40 text-fuchsia-500" /></div>
                        <pre className="font-mono text-sm leading-8 text-slate-300 relative z-10">
                           plt.style.use("ggplot")<br/><br/>
                           plt.plot(x, y)<br/>
                           plt.title("Styled Plot")<br/><br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basics_style')} className="absolute bottom-12 right-12 p-8 bg-fuchsia-600 text-white rounded-[2.5rem] shadow-2xl hover:bg-fuchsia-500 transition-all active:scale-90 group-hover/code:ring-8 ring-fuchsia-500/10">
                           <Play className="w-8 h-8 fill-current" />
                        </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Available */}
              {activeTab === 'available' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-fuchsia-600 uppercase tracking-tighter italic underline decoration-fuchsia-500/10 underline-offset-8">
                    <List className="w-10 h-10 mr-6 text-fuchsia-500" />
                    4ï¸âƒ£ Exploring the Theme Library
                  </h3>
                  <div className="p-10 bg-slate-950 rounded-[4rem] border border-fuchsia-500/20 shadow-2xl relative font-mono">
                     <span className="block text-[9px] text-slate-500 uppercase tracking-widest mb-6 underline decoration-white/5 underline-offset-4">Inspect available themes</span>
                     <pre className="text-fuchsia-100 text-[11px] leading-6 mb-10 overflow-x-auto no-scrollbar">
                        ['Solarize_Light2', 'bmh', 'classic', 'dark_background', 'fast', 'ggplot', 'grayscale', 'seaborn', 'tableau-colorblind10']
                     </pre>
                     <div className="flex items-center text-[10px] text-slate-600 font-black italic">
                        <Target className="w-4 h-4 mr-4 text-fuchsia-500 animate-pulse" />
                        plt.style.available
                     </div>
                  </div>
                  <button onClick={() => runDemo('available_styles')} className="w-full py-8 bg-fuchsia-600 text-white font-black rounded-[4rem] shadow-2xl hover:bg-fuchsia-500 transition-all text-xs tracking-[0.5em] italic uppercase mt-6 transform hover:scale-[1.02] active:scale-95">Catalog System Resources</button>
                </div>
              )}

              {/* Tab: Popular */}
              {activeTab === 'popular' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-rose-500 uppercase tracking-tighter italic decoration-rose-500/10 underline underline-offset-8">
                    <Sparkles className="w-10 h-10 mr-6 text-rose-500" />
                    5ï¸âƒ£ Popular Style Catalog
                  </h3>
                  <div className="grid grid-cols-2 gap-4 pb-6 leading-tight">
                     {[
                       { f: "ggplot", d: "R-Style Statistics", c: "bg-orange-500/10" },
                       { f: "seaborn", d: "Modern & Attractive", c: "bg-blue-500/10" },
                       { f: "dark_background", d: "Presentation Mode", c: "bg-slate-800" },
                       { f: "classic", d: "Original Matplotlib", c: "bg-slate-200 dark:bg-slate-800" },
                       { f: "bmh", d: "Bayesian Aesthetics", c: "bg-rose-500/10" }
                     ].map((item, i) => (
                       <div key={i} className={`p-6 ${item.c} rounded-[2.5rem] border border-white/5 group/style cursor-pointer hover:scale-[1.03] transition-all`}>
                          <h5 className="font-black text-xs mb-3 group-hover:text-rose-500 transition-colors uppercase italic">{item.f}</h5>
                          <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{item.d}</p>
                       </div>
                     ))}
                  </div>
                  <button onClick={() => runDemo('dark_mode')} className="w-full py-7 bg-rose-700 text-white font-black rounded-[3rem] shadow-2xl hover:bg-rose-600 transition-all text-[11px] tracking-widest italic uppercase flex items-center justify-center filter hover:brightness-110">
                    <SunMoon className="w-5 h-5 mr-5" /> Activate Dark Background
                  </button>
                </div>
              )}

              {/* Tab: Context */}
              {activeTab === 'context' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-fuchsia-500 italic uppercase">
                    <Box className="w-10 h-10 mr-6 text-fuchsia-500 decoration-fuchsia-500/20 underline underline-offset-8" />
                    8ï¸âƒ£ Temporary Style Context
                  </h3>
                  <div className="p-10 bg-fuchsia-500/5 rounded-[4.5rem] border border-fuchsia-500/10 italic">
                     <p className="text-sm font-bold text-slate-500 mb-10 leading-relaxed italic opacity-80 decoration-fuchsia-500/20 underline underline-offset-4">
                        "Apply a style only for a specific block of code without modifying your global environment."
                     </p>
                     <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-fuchsia-500/20 shadow-2xl relative overflow-hidden font-mono text-[11px] italic">
                        <pre className="text-fuchsia-100">
                           with plt.style.<span className="text-fuchsia-400 font-black">context</span>("ggplot"):<br/>
                           &nbsp;&nbsp;plt.plot([1,2,3,4], [10,20,30,40])<br/>
                           &nbsp;&nbsp;plt.title("Temporary Style")<br/>
                           &nbsp;&nbsp;plt.show()
                        </pre>
                     </div>
                     <button onClick={() => runDemo('context_style')} className="w-full py-8 bg-fuchsia-700 text-white font-black rounded-[4rem] shadow-2xl hover:bg-fuchsia-600 transition-all text-[11px] tracking-widest uppercase mt-12 italic border-b-4 border-fuchsia-900/50">Run Context Override</button>
                  </div>
                </div>
              )}

              {/* Tab: Traffic */}
              {activeTab === 'traffic' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col justify-center space-y-12 relative z-10 italic uppercase font-black">
                  <h3 className="text-3xl font-black flex items-center mb-6 text-fuchsia-600 tracking-tighter border-b dark:border-slate-800 pb-6 uppercase italic underline decoration-fuchsia-500/10 underline-offset-8">
                    <Presentation className="w-10 h-10 mr-6 text-fuchsia-500" />
                    9ï¸âƒ£ Case Study: Dashboard Report
                  </h3>
                  <div className="bg-fuchsia-500/5 p-14 rounded-[5.5rem] border border-fuchsia-500/20 flex flex-col items-center justify-center relative overflow-hidden group/case italic">
                     <div className="absolute top-0 right-0 p-14 opacity-[0.05] grayscale-0 group-hover/case:rotate-12 transition-transform duration-1000"><LayoutDashboard className="w-48 h-48 text-fuchsia-400" /></div>
                     <div className="text-4xl font-black text-fuchsia-600 mb-8 italic underline decoration-fuchsia-500/20 underline-offset-8 tracking-tighter uppercase font-mono">plt.style.use("ggplot")</div>
                     <p className="text-sm font-bold text-slate-500 text-center leading-relaxed italic max-w-sm lowercase opacity-70 underline decoration-fuchsia-500/5 underline-offset-6">
                        "Generating professional-grade weekly traffic trends. Matplotlib Styles handle the grids and colors instantly."
                     </p>
                  </div>
                  <button onClick={() => runDemo('traffic_report')} className="w-full py-8 bg-black text-white dark:bg-white dark:text-black font-black rounded-[4.5rem] shadow-2xl hover:bg-slate-900 transition-all text-[11px] tracking-[0.5em] italic uppercase ring-offset-4 active:ring-[10px] ring-fuchsia-500/10">Synthesize Styled Production Asset</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10 font-mono italic font-black">
            
            {/* Visual Synthesis Engine Terminal */}
            <div className="bg-[#0b0c10] rounded-[5rem] p-12 border border-slate-800 flex-1 min-h-[560px] shadow-2xl relative overflow-hidden group/terminal flex flex-col italic font-black">
               <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-[100px] group-hover/terminal:bg-fuchsia-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-10 px-6 transition-all">
                    <div className="flex items-center">
                      <Terminal className="w-8 h-8 mr-6 text-fuchsia-500/70 animate-pulse font-bold" />
                      <h3 className="font-black text-slate-700 uppercase text-[10px] tracking-[0.6em] font-mono">
                         STYLE_ENGINE_v4
                      </h3>
                    </div>
                    <div className="flex space-x-3">
                       <div className="w-4 h-4 rounded-full bg-fuchsia-950 shadow-inner"></div>
                       <div className="w-4 h-4 rounded-full bg-fuchsia-500/50 shadow-[0_0_20px_rgba(217,70,239,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[420px] custom-scrollbar px-6 space-y-8 leading-loose uppercase italic tracking-tighter">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-14 opacity-20 select-none filter hover:brightness-150 transition-all duration-700 grayscale hover:grayscale-0">
                        <MonitorPlay className="w-28 h-28 stroke-[1px] animate-pulse [animation-duration:6000ms]" />
                        <div className="text-center">
                           <span className="block text-[9px] uppercase tracking-[0.8em] font-black text-fuchsia-600 mb-4 underline decoration-fuchsia-500/30 underline-offset-10 italic">Engine Standby...</span>
                           <span className="text-[11px] font-black text-white/40 tracking-widest decoration-white/5 underline underline-offset-4">Theme Rasterization Logic Required</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-6">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-8 duration-700 flex items-start group/line">
                              <span className="text-fuchsia-500/30 mr-6 font-black select-none text-[8px] mt-1 shrink-0 uppercase tracking-widest decoration-fuchsia-500/10 underline italic font-mono tracking-tighter">plt::out</span>
                              <span className={`leading-relaxed font-black transition-colors ${
                                line.includes('Success') || line.includes('Performance') ? 'text-fuchsia-400 font-extrabold tracking-tight underline decoration-fuchsia-500/10 underline-offset-6 font-mono' :
                                line.includes('Loading') || line.includes('Setting') || line.includes('Scanning') ? 'text-amber-500 italic lowercase' :
                                line.includes('Applying') || line.includes('Recalibrating') || line.includes('Retrieved') ? 'text-indigo-400 uppercase italic' :
                                line.includes('Found') || line.includes('Entering') ? 'text-fuchsia-500 font-black tracking-widest uppercase border-b border-fuchsia-500/20' :
                                'text-slate-600 italic uppercase text-[9px] tracking-tight decoration-slate-900 underline underline-offset-4'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-16 flex justify-between items-center border-t border-white/5 mt-14 italic uppercase font-black">
                           <div className="flex items-center gap-5">
                              <span className="w-3.5 h-3.5 rounded-full bg-fuchsia-500 animate-pulse shadow-[0_0_20px_rgba(217,70,239,0.7)]"></span>
                              <span className="text-[10px] text-slate-800 font-black tracking-[0.5em] decoration-fuchsia-500/10 underline italic font-mono lowercase">rcparams matrix locked</span>
                           </div>
                           <button onClick={resetConsole} className="text-[10px] text-fuchsia-500/70 hover:text-fuchsia-400 font-black tracking-[0.4em] font-mono transition-colors border-b-2 border-fuchsia-500/10 uppercase italic">Purge Log</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Teaching Roadmap Architecture */}
            <div className="bg-gradient-to-br from-fuchsia-950 via-rose-950 to-slate-900 p-12 rounded-[5.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-fuchsia-400/10 rounded-full blur-[120px]"></div>
               <h4 className="text-white font-black text-[11px] mb-12 flex items-center uppercase tracking-[0.6em] opacity-80 underline decoration-fuchsia-500 underline-offset-10 italic tracking-tighter">
                 <List className="w-6 h-6 text-fuchsia-400 mr-5 transition-transform group-hover:rotate-180 duration-1000" />
                 Specialist roadmap
               </h4>
               <div className="space-y-6 px-4 relative z-10 italic uppercase font-black tracking-tighter">
                  {[
                    "Matplotlib Colors", "Matplotlib Grid", "Matplotlib Legends", "Matplotlib Styles", "Matplotlib Subplots"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-14 h-12 rounded-2xl flex items-center justify-center mr-8 transition-all duration-700 hover:scale-110 ${i === 3 ? 'bg-fuchsia-600 shadow-2xl shadow-fuchsia-500/50 rotate-12' : 'bg-white/5 border border-white/10 opacity-30 select-none grayscale'}`}>
                          <span className={`text-[12px] font-black italic ${i === 3 ? 'text-white' : 'text-slate-600'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-black tracking-widest transition-colors uppercase italic ${i === 3 ? 'text-fuchsia-400 underline decoration-fuchsia-500/30 underline-offset-10' : 'text-slate-800'}`}>{path}</span>
                       {i === 3 && <Sparkles className="w-5 h-5 ml-auto text-fuchsia-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Design Advice */}
      <section className="max-w-6xl mx-auto mb-24 px-4 overflow-hidden italic font-black">
        <div className="bg-white dark:bg-slate-900 p-16 sm:p-28 rounded-[7rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group font-black italic">
          <div className="absolute bottom-0 left-0 p-24 opacity-[0.04] scale-150 rotate-12 -z-0 pointer-events-none grayscale-0 group-hover:-rotate-12 transition-transform [transition-duration:4000ms] transition-all">
             <Palette className="w-[40rem] h-[40rem] text-fuchsia-500 font-black" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-28 gap-12 relative z-10 tracking-tighter decoration-fuchsia-500/20 underline underline-offset-[20px] italic">
             <div className="flex items-center font-black italic uppercase italic">
                <div className="p-6 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-[3.5rem] mr-12 shadow-2xl transition-transform hover:rotate-6">
                   <Lightbulb className="w-14 h-14 text-fuchsia-600 dark:text-fuchsia-400 font-bold italic" />
                </div>
                <div>
                   <h2 className="text-5xl text-slate-900 dark:text-white mb-3 uppercase tracking-tighter italic">
                      Visual Standards Grid
                   </h2>
                   <p className="text-xl text-slate-500 dark:text-slate-400 font-bold tracking-tight lowercase italic border-l-4 border-fuchsia-500/20 pl-8">Specialist Design expert advice.</p>
                </div>
             </div>
             <div className="h-0.5 w-48 bg-fuchsia-500/20 hidden md:block italic tracking-widest font-black uppercase italic underline decoration-fuchsia-500/5 underline-offset-4">--- STYLE_MOD ---</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10 font-black italic">
             {[
               { t: "Consistency Hierarchy", d: "Always apply a universal style at the beginning of your script to maintain branding across all exports.", i: Layout, c: "text-fuchsia-600" },
               { t: "Presentation Mode", d: "Use the 'dark_background' theme for slides and dashboard displays to reduce eye strain and increase contrast.", i: Presentation, i2: SunMoon, c: "text-rose-600" },
               { t: "Hybrid Styling", d: "Combine plt.style.use() with manual grid or color overrides for high-precision branding alignment.", i: Layers, c: "text-indigo-500" },
               { t: "Data Science Standards", d: "Lean into Seaborn styling for statistical charts; it produces cleaner backgrounds for complex plots.", i: Activity, c: "text-fuchsia-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip transition-all hover:translate-x-4 duration-500 cursor-help">
                 <div className={`p-8 bg-slate-50 dark:bg-slate-800 rounded-[3.5rem] mr-12 shadow-sm group-hover/tip:bg-fuchsia-500/10 transition-all duration-1000 ${tip.c} bg-opacity-20 shrink-0 font-black`}>
                    <tip.i className="w-12 h-12 group-hover/tip:rotate-12 group-hover/tip:scale-125 transition-transform font-bold italic shadow-2xl" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-black text-slate-900 dark:text-white mb-6 group-hover/tip:text-fuchsia-600 transition-colors uppercase tracking-[0.5em] text-[11px] underline decoration-fuchsia-500/10 italic">â­ STYLE TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-black italic tracking-tighter opacity-80 lowercase decoration-fuchsia-500/5 underline underline-offset-8 decoration-dashed">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Production Sample Showcase */}
      <section className="max-w-6xl mx-auto mb-20 px-4 font-black italic">
         <div className="bg-fuchsia-600/5 rounded-[6rem] p-16 sm:p-24 border border-fuchsia-500/10 relative group overflow-hidden italic shadow-2xl backdrop-blur-3xl font-black transition-all">
            <div className="absolute top-0 right-0 p-14 opacity-[0.06] grayscale hover:grayscale-0 transition-all [transition-duration:2000ms]"><Share2 className="w-[35rem] h-[35rem] text-fuchsia-500 font-bold" /></div>
            <div className="relative z-10 flex flex-col xl:flex-row items-center gap-20">
               <div className="flex-1 text-center xl:text-left">
                  <h3 className="text-5xl font-black text-fuchsia-600 mb-10 tracking-tighter uppercase italic underline decoration-fuchsia-500/10 underline-offset-[16px]">9ï¸âƒ£ Styled Traffic Asset</h3>
                  <p className="text-xl font-black text-slate-500 dark:text-slate-400 mb-14 leading-relaxed italic opacity-80 lowercase decoration-fuchsia-500/5 underline underline-offset-10">
                     "Leveraging ggplot themes to generate production-ready website traffic reports. Visual polish is automated."
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10">
                     {[
                       { v: "Theme: ggplot", c: "bg-fuchsia-500/10" },
                       { v: "Markers: Circle 'o'", c: "bg-rose-600/20" }
                     ].map(v => (
                       <div key={v.v} className={`${v.c} px-10 py-6 rounded-[3rem] text-[11px] font-black text-fuchsia-600 uppercase tracking-widest text-center italic border border-fuchsia-500/10 shadow-xl`}>{v.v}</div>
                     ))}
                  </div>
                  <button onClick={() => runDemo('traffic_report')} className="w-full py-8 bg-fuchsia-600 text-white font-black rounded-[4rem] shadow-2xl hover:bg-fuchsia-500 focus:ring-[12px] ring-fuchsia-500/20 flex items-center justify-center gap-6 transition-all italic text-[12px] tracking-widest uppercase border-b-6 border-fuchsia-900/50 active:translate-y-2">
                     <MonitorPlay className="w-6 h-6 fill-current" /> GENERATE PROFESSIONAL REPORT
                  </button>
               </div>
               <div className="w-full xl:w-[28rem] bg-slate-950 p-14 rounded-[7rem] border border-fuchsia-500/30 shadow-2xl group/ex transform hover:-rotate-1 transition-transform">
                  <div className="flex items-center justify-center h-56 relative overflow-hidden mb-10 bg-fuchsia-500/5 rounded-[4rem] border border-fuchsia-500/10 shadow-inner">
                     <Palette className="w-32 h-32 text-fuchsia-500/20 group-hover/ex:scale-150 transition-transform [transition-duration:4000ms] font-black" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-fuchsia-500/10 tracking-[2em] uppercase select-none cursor-not-allowed">STYLE_BUFFER_OK</div>
                  </div>
                  <div className="h-0.5 w-full bg-fuchsia-500/20 mb-10 px-6"></div>
                  <div className="flex flex-col gap-6 font-mono opacity-60 italic text-[10px]">
                    <div className="flex justify-between font-black tracking-widest uppercase"><span>Engine::RC</span> <span className="text-fuchsia-500 underline decoration-fuchsia-500/20 underline-offset-8 tracking-widest uppercase font-black uppercase">Theme_Locked</span></div>
                    <div className="flex justify-between font-black tracking-widest uppercase"><span>Raster::MODE</span> <span className="text-fuchsia-500 underline decoration-fuchsia-500/20 underline-offset-8 tracking-widest uppercase font-black uppercase">Production_v4</span></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Practice Design Mission */}
      <section className="max-w-4xl mx-auto pb-28 px-6 md:px-0">
        <div className="bg-gradient-to-br from-fuchsia-700 via-rose-800 to-slate-950 p-16 sm:p-28 rounded-[8.5rem] shadow-2xl relative overflow-hidden group border-b-[12px] border-fuchsia-900/40 transform hover:scale-[1.01] transition-all italic font-black">
          <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[140px] -z-0 pointer-events-none group-hover:scale-125 transition-transform [transition-duration:5000ms]"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-24 items-center italic font-black">
            <div className="flex-1 text-center xl:text-left font-black italic">
              <div className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-full text-[11px] font-black mb-14 border border-white/20 tracking-[0.5em] uppercase shadow-2xl backdrop-blur-2xl italic tracking-tighter decoration-white/20 underline underline-offset-8">
                ðŸŽ¯ Design Lab Mission
              </div>
              <h2 className="text-6xl font-black text-white mb-12 leading-[1.0] tracking-tighter uppercase italic decoration-white/10 underline underline-offset-[16px]">
                Hydration Monitor
              </h2>
              <p className="text-rose-100 text-lg mb-16 leading-relaxed font-black pr-8 opacity-90 italic border-l-6 border-rose-400 pl-10 lowercase tracking-widest decoration-white/10 underline underline-offset-10">
                Visualize the flow! Create a chart using the <b>ggplot</b> style showing <b>Daily Water Intake</b> (Liters) across 5 days. Apply markers for a clean statistical look!
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-rose-950 hover:bg-slate-50 px-20 py-10 rounded-[5rem] text-[15px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-90 uppercase tracking-[0.4em] italic mx-auto xl:mx-0 border-b-8 border-rose-900/30 transform hover:translate-y-[-4px]"
               >
                 <Play className="w-6 h-6 mr-6 fill-rose-950 group-hover/btn:rotate-180 transition-transform duration-700 font-black" />
                 Initialize Styled Trial
               </button>
            </div>

            <div className="w-full xl:w-[26rem] relative font-mono">
               <div className="bg-[#0b0c10] rounded-[7rem] border border-white/10 p-20 relative shadow-2xl overflow-hidden group-hover:rotate-3 transition-transform duration-1000 rotate-2">
                  <div className="flex justify-between items-center mb-16 px-6 opacity-40 font-black italic uppercase italic">
                    <div className="flex gap-4">
                       <div className="w-4 h-4 rounded-full bg-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.8)] animate-pulse"></div>
                       <div className="w-4 h-4 rounded-full bg-fuchsia-500/40"></div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.6em] italic decoration-white/10 underline underline-offset-8 tracking-widest uppercase">STYLE_v4</span>
                  </div>

                  <div className="h-56 relative flex items-center justify-center p-12 bg-fuchsia-500/5 rounded-[5rem] border border-fuchsia-500/10 overflow-hidden font-black group/m font-black italic">
                     <Brush className="w-28 h-28 text-fuchsia-600/30 group-hover/m:rotate-[360deg] transition-transform [transition-duration:6000ms] font-black shadow-2xl" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-fuchsia-500/10 tracking-[2em] uppercase cursor-help select-none font-bold">STYLING_ENGINE...</div>
                  </div>
                  
                  <div className="mt-16 flex items-center justify-center gap-6 text-fuchsia-500/10 text-[11px] font-black uppercase tracking-[0.7em] select-none italic underline decoration-fuchsia-500/5 underline-offset-10 italic font-black uppercase">
                     <ShieldCheck className="w-5 h-5" />
                     RC_PARAMS Rasterized
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Design Signature Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-28 opacity-40 hover:opacity-100 transition-all font-black uppercase italic tracking-[0.2em] decoration-fuchsia-500/10 underline underline-offset-[12px]">
         <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed mb-8">
            Styles are the identity of your data stories. Automate the aesthetics, focus on the truth, and build consistent scientific narratives.
         </p>
         <div className="h-0.5 w-40 bg-fuchsia-500/10 mx-auto transition-all hover:w-[40rem] duration-1000"></div>
      </footer>

    </div>
  );
}

export default MplStyles;
