import React, { useState } from 'react';
import { 
  Layout, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  Activity, Layers, List, Check, Eye, 
  ShieldCheck, TrendingUp, Grid3X3, Tally4,
  MonitorPlay, MousePointer2, Box, Maximize,
  Clock, Scissors, Target, LayoutDashboard,
  Presentation, BarChart3, MoveRight, HelpCircle,
  Sparkles, PanelLeft,
  Share2,
  ClipboardCheck
} from 'lucide-react';

function MplSubplots() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'grid' | 'modern' | 'layout' | 'dashboard'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_subplot':
        outLines = [
          'Initializing Figure...',
          'Row: 1, Cols: 2',
          'plt.subplot(1, 2, 1) -> Loading Plot 1 (First Position)',
          'plt.subplot(1, 2, 2) -> Loading Plot 2 (Second Position)',
          'Success: Two charts arranged side-by-side.'
        ];
        break;
      case 'grid_subplot':
        outLines = [
          'Engine: Matrix Mode Initialized.',
          'Grid Dimensions: 2x2',
          'Position 1: Plotting Upper Left...',
          'Position 2: Plotting Upper Right...',
          'Position 3: Plotting Lower Left...',
          'Position 4: Plotting Lower Right...',
          'Total Plots: 4. Success: Grid layout complete.'
        ];
        break;
      case 'modern_subplots':
        outLines = [
          'Accessing Professional Logic: plt.subplots()...',
          'Object Unpacking: fig (Figure), ax (Axes Matrix)',
          'Setting ax[0,0] -> Plot 1',
          'Setting ax[1,1] -> Plot 4',
          'Success: Object-oriented subplot management active.'
        ];
        break;
      case 'tight_layout':
        outLines = [
          'Scanning for overlapping labels/titles...',
          'Executing plt.tight_layout()...',
          'Recalibrating margins for all subplots...',
          'Success: Spacing optimized automatically.'
        ];
        break;
      case 'dashboard_demo':
        outLines = [
          'Loading Dashboard Workspace...',
          'Subplot 1: Website Visitors trend.',
          'Subplot 2: Daily Sales conversion.',
          'Applying markers="o" to both series...',
          'Applying plt.tight_layout()...',
          'Success: Dashboard asset ready for export.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Scanning for Exercise variables: [study, exercise]',
          'Checking: fig, ax = plt.subplots(1, 2)... FOUND.',
          'Verifying ax[0].plot(study) call... YES.',
          'Verifying ax[1].plot(exercise) call... YES.',
          'Validation: plt.tight_layout() detected.',
          'Performance: 100/100. Student dashboard rasterized perfectly!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100 italic">
      
      {/* 1. Header with Structural Design */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-5 bg-teal-100 dark:bg-teal-900/40 rounded-[2.5rem] mb-10 shadow-sm border border-teal-200 dark:border-teal-800/50 hover:scale-110 transition-transform cursor-pointer group">
          <Grid3X3 className="w-14 h-14 text-teal-600 dark:text-teal-400 group-hover:rotate-90 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-[10px] font-black mb-6 border border-teal-500/20 tracking-[0.4em] uppercase shadow-lg backdrop-blur-md">
          Course Module: Grid Systems
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic uppercase underline decoration-teal-500/20 underline-offset-[16px]">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-500 to-indigo-600 underline">Subplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold italic">
          "Master the art of multi-chart organization. Subplots allow you to display multiple visualizations in a single figure for effortless comparison."
        </p>
      </header>

      {/* 2. Concept Foundation Grid */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between transition-all hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-teal-500 rounded-2xl shadow-lg shadow-teal-500/20 mr-6 group-hover:rotate-6 transition-transform">
                  <Info className="w-6 h-6 text-white italic shadow-2xl" />
                </div>
                <h2 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter decoration-teal-500/10 underline underline-offset-8">Multi-Plot Logic</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-teal-500 pl-8 transition-colors group-hover:text-slate-900 dark:group-hover:text-white underline decoration-teal-500/5 underline-offset-8">
                "A subplot is a smaller plot inside a larger figure, allowing multiple charts to be displayed in a single grid layout."
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { l: "Rows x Columns", i: Grid3X3 },
                   { l: "Grid Indexing", i: Tally4 }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800/50 hover:bg-teal-500/5 transition-all">
                      <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mr-5">
                         <mod.i className="w-4 h-4 text-teal-500" />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{mod.l}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-700 via-cyan-800 to-indigo-950 p-10 rounded-[4rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white font-black italic uppercase italic">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter underline decoration-white/20 underline-offset-8">
                 <ShieldCheck className="w-8 h-8 mr-5" />
                 Grid Benefits
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 leading-tight">
                 {[
                   { t: "Easy Comparison", d: "Align datasets side-by-side.", i: Layers },
                   { t: "Report Space", d: "Save real-estate in exports.", i: Maximize },
                   { t: "Dashboard UI", d: "Build mini-analytics views.", i: LayoutDashboard },
                   { t: "Relation Linking", d: "Organize related plots.", i: Box }
                 ].map((mod, i) => (
                   <div key={i} className="flex flex-col p-6 bg-white/10 rounded-[3rem] border border-white/5 hover:bg-white/20 transition-all cursor-crosshair group/item relative overflow-hidden">
                      <mod.i className="w-8 h-8 mb-4 text-teal-200 group-hover/item:scale-110 transition-transform" />
                      <div>
                         <h5 className="font-black text-xs tracking-widest tracking-tighter mb-1 uppercase">{mod.t}</h5>
                         <p className="text-[9px] text-white/40 font-bold decoration-white/5 underline underline-offset-4">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-6 bg-white/5 rounded-[2.5rem] border border-white/10 flex items-center shadow-2xl backdrop-blur-md">
                  <Sparkles className="w-6 h-6 text-teal-200 mr-5 animate-pulse" />
                  <p className="text-xs font-black leading-relaxed opacity-80 decoration-teal-200/20 underline underline-offset-4 tracking-tighter uppercase italic">
                    Subplots turn isolated charts into connected data stories.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Multi-Chart Grid Lab */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-10">
           <div className="flex items-center translate-x-4">
             <div className="p-4 bg-teal-100 dark:bg-teal-900/30 rounded-[3rem] mr-8 shadow-2xl border border-teal-200 dark:border-teal-800 transition-all hover:rotate-6">
               <Terminal className="w-10 h-10 text-teal-600 dark:text-teal-400 font-bold" />
             </div>
             <div>
               <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight underline decoration-teal-500/10 underline-offset-10 italic tracking-tighter uppercase">Multi-Chart Grid Lab</h2>
               <p className="text-xs text-slate-500 font-black uppercase tracking-[0.5em] mt-3 italic underline decoration-teal-500/10 underline-offset-4 opacity-70">plt.subplot() Matrix Engine</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-2 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar font-black">
            {[
              { id: 'basics', label: 'Basic Subplot', icon: Code },
              { id: 'grid', label: 'Grid Layout', icon: Grid3X3 },
              { id: 'modern', label: 'plt.subplots()', icon: PanelLeft },
              { id: 'layout', label: 'tight_layout', icon: Maximize },
              { id: 'dashboard', label: 'Analytics Hub', icon: LayoutDashboard }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-8 py-5 rounded-[4rem] text-[11px] font-black tracking-widest uppercase transition-all whitespace-nowrap italic ${
                  activeTab === tab.id 
                    ? 'bg-teal-600 text-white shadow-xl shadow-teal-900/40 scale-105' 
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
              <div className="absolute top-0 right-0 p-10 opacity-[0.04] rotate-12 -z-0 grayscale group-hover:grayscale-0 transition-all duration-1000"><Layout className="w-[30rem] h-[30rem] text-teal-500" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col relative z-10 italic">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-teal-600 tracking-tighter uppercase">
                    <Code className="w-10 h-10 mr-6 text-teal-500 italic decoration-teal-500/20 underline underline-offset-8" />
                    3️⃣ & 4️⃣ Basic Subplot Indexing
                  </h3>
                  <div className="space-y-12 flex-1 flex flex-col justify-center">
                    <div className="p-8 bg-teal-500/5 rounded-[3rem] border border-teal-500/10 italic">
                       <span className="block text-[10px] text-teal-600 uppercase tracking-[0.4em] mb-4">The Command</span>
                       <code className="text-2xl font-mono text-slate-700 dark:text-slate-300 tracking-tighter">plt.<span className="text-teal-500 font-black">subplot</span>(rows, cols, pos)</code>
                    </div>

                    <div className="bg-slate-950 p-12 rounded-[5rem] border border-teal-500/20 shadow-2xl relative group/code overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/code:scale-110 transition-all font-mono italic"><Tally4 className="w-40 h-40 text-teal-500" /></div>
                        <pre className="font-mono text-sm leading-8 text-slate-300 relative z-10">
                           plt.<span className="text-teal-500 underline decoration-teal-500/30 underline-offset-8">subplot</span>(1, 2, 1)<br/>
                           plt.title("First Plot")<br/><br/>
                           plt.<span className="text-teal-500 underline decoration-teal-500/30 underline-offset-8">subplot</span>(1, 2, 2)<br/>
                           plt.title("Second Plot")<br/><br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_subplot')} className="absolute bottom-12 right-12 p-8 bg-teal-600 text-white rounded-[2.5rem] shadow-2xl hover:bg-teal-500 transition-all active:scale-90 group-hover/code:ring-8 ring-teal-500/10">
                           <Play className="w-8 h-8 fill-current" />
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 flex items-center">
                          <span className="w-3 h-3 rounded-full bg-teal-500 mr-4 shadow-xl"></span>
                          <span className="text-[10px] font-black text-slate-500 uppercase">1/2 = Side-by-Side</span>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Grid Layout */}
              {activeTab === 'grid' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-cyan-500 uppercase tracking-tighter italic underline decoration-cyan-500/10 underline-offset-8">
                    <Grid3X3 className="w-10 h-10 mr-6 text-cyan-500" />
                    5️⃣ 2x2 Matrix Generation
                  </h3>
                  <div className="bg-cyan-500/5 p-12 rounded-[4.5rem] border border-cyan-500/10">
                    <p className="text-sm font-bold text-slate-500 mb-12 leading-relaxed italic pr-12 text-slate-400">
                      "Produce four separate visualizations arranged in a perfect grid by defining row/col limits and targeted positions."
                    </p>
                    <div className="bg-slate-950 p-10 rounded-[3.5rem] border border-cyan-500/20 shadow-2xl relative">
                       <pre className="font-mono text-[11px] text-slate-100 leading-9 italic">
                          plt.subplot(2, 2, 1) # Top Left<br/>
                          plt.subplot(2, 2, 2) # Top Right<br/>
                          plt.subplot(2, 2, 3) # Bottom Left<br/>
                          plt.subplot(2, 2, 4) # Bottom Right
                       </pre>
                    </div>
                    <button onClick={() => runDemo('grid_subplot')} className="w-full py-8 bg-cyan-600 text-white font-black rounded-[3.5rem] shadow-2xl hover:bg-cyan-500 transition-all text-xs tracking-[0.5em] italic uppercase mt-10">Matrix Rasterization Cycle</button>
                  </div>
                </div>
              )}

              {/* Tab: Modern Methode */}
              {activeTab === 'modern' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-indigo-500 uppercase tracking-tighter italic decoration-indigo-500/20 underline underline-offset-8">
                    <PanelLeft className="w-10 h-10 mr-6 text-indigo-500" />
                    6️⃣ Modern plt.subplots() (Pro)
                  </h3>
                  <div className="bg-indigo-500/5 p-12 rounded-[4.5rem] border border-indigo-500/10">
                     <p className="text-sm font-bold text-slate-500 mb-12 leading-relaxed italic pr-14 text-slate-400 uppercase tracking-tighter decoration-indigo-500/10 underline underline-offset-8">
                        "The recommended professional method because it provides direct access to the Axes objects for granular control."
                     </p>
                     <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-indigo-500/20 shadow-2xl relative">
                        <pre className="font-mono text-[11px] text-slate-100 leading-8 italic">
                           {`fig, ax = plt.subplots(2, 2)

ax[0,0].plot(x, y) # Top Left
ax[1,1].plot(x, z) # Bottom Right

plt.show()`}
                        </pre>
                     </div>
                     <button onClick={() => runDemo('modern_subplots')} className="w-full py-7 bg-indigo-700 text-white font-black rounded-[3rem] shadow-2xl hover:bg-indigo-600 transition-all text-[11px] tracking-widest italic uppercase mt-12 flex items-center justify-center filter hover:brightness-110">
                        <PanelLeft className="w-5 h-5 mr-5" /> Execute Object-Oriented Grid
                     </button>
                  </div>
                </div>
              )}

              {/* Tab: tight_layout */}
              {activeTab === 'layout' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-teal-500 italic uppercase italic underline decoration-teal-500/20 underline-offset-8">
                    <Maximize className="w-10 h-10 mr-6 text-teal-500" />
                    7️⃣ Auto-Layout Spacing
                  </h3>
                  <div className="p-10 bg-teal-500/5 rounded-[4.5rem] border border-teal-500/10 italic">
                     <div className="flex justify-center mb-10 group/space">
                        <div className="flex gap-2">
                           {[1, 2, 3].map(i => <div key={i} className="w-12 h-12 bg-teal-500/20 border border-teal-500/40 rounded-xl group-hover/space:translate-x-4 transition-transform font-black flex items-center justify-center text-[10px] text-teal-600">A</div>)}
                        </div>
                     </div>
                     <p className="text-sm font-bold text-slate-500 text-center mb-12 leading-relaxed italic opacity-80 decoration-teal-500/20 underline underline-offset-8 tracking-tighter">
                        "Fix overlapping labels and titles automatically by adjusting spacing between the subplots."
                     </p>
                     <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-teal-500/30 shadow-2xl relative overflow-hidden font-mono text-[11px] italic uppercase tracking-tighter">
                        <pre className="text-teal-400">
                           plt.<span className="text-white font-black">tight_layout</span>()
                        </pre>
                     </div>
                     <button onClick={() => runDemo('tight_layout')} className="w-full py-8 bg-teal-700 text-white font-black rounded-[4rem] shadow-2xl hover:bg-teal-600 transition-all text-[11px] tracking-widest uppercase mt-12 italic border-b-4 border-teal-900/50">Run Spacing Optimization</button>
                  </div>
                </div>
              )}

              {/* Tab: Dashboard */}
              {activeTab === 'dashboard' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col justify-center space-y-12 relative z-10 italic uppercase font-black">
                  <h3 className="text-3xl font-black flex items-center mb-6 text-teal-600 tracking-tighter border-b dark:border-slate-800 pb-6 uppercase italic underline decoration-teal-500/10 underline-offset-8">
                    <LayoutDashboard className="w-10 h-10 mr-6 text-teal-500" />
                    8️⃣ Analytics Dashboard Demo
                  </h3>
                  <div className="bg-teal-500/5 p-14 rounded-[5.5rem] border border-teal-500/20 flex flex-col items-center justify-center relative overflow-hidden group/case italic">
                     <div className="absolute top-0 right-0 p-14 opacity-[0.05] grayscale-0 group-hover/case:rotate-12 transition-transform duration-1000"><BarChart3 className="w-48 h-48 text-teal-400 font-bold shadow-2xl" /></div>
                     <div className="text-4xl font-black text-teal-600 mb-8 italic underline decoration-teal-500/20 underline-offset-8 tracking-tighter italic">Visitors vs Sales</div>
                     <p className="text-sm font-bold text-slate-500 text-center leading-relaxed italic max-w-sm lowercase opacity-70 underline decoration-teal-500/5 underline-offset-6">
                        "Creating a dual-chart dashboard to compare website traffic against daily conversions."
                     </p>
                  </div>
                  <button onClick={() => runDemo('dashboard_demo')} className="w-full py-8 bg-black text-white dark:bg-white dark:text-black font-black rounded-[4.5rem] shadow-2xl hover:bg-slate-900 transition-all text-[11px] tracking-[0.5em] italic uppercase ring-offset-4 active:ring-[10px] ring-teal-500/10">Synthesize Dashboard Workspace</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10 font-mono italic font-black">
            
            {/* Grid Logic Engine Terminal */}
            <div className="bg-[#0b0c10] rounded-[5rem] p-12 border border-slate-800 flex-1 min-h-[560px] shadow-2xl relative overflow-hidden group/terminal flex flex-col italic font-black">
               <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] group-hover/terminal:bg-teal-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-10 px-6 transition-all">
                    <div className="flex items-center">
                      <Terminal className="w-8 h-8 mr-6 text-teal-500/70 animate-pulse font-bold italic shadow-2xl" />
                      <h3 className="font-black text-slate-700 uppercase text-[10px] tracking-[0.6em] font-mono">
                         GRID_ENGINE_v4
                      </h3>
                    </div>
                    <div className="flex space-x-3">
                       <div className="w-4 h-4 rounded-full bg-teal-950 shadow-inner"></div>
                       <div className="w-4 h-4 rounded-full bg-teal-500/50 shadow-[0_0_20px_rgba(20,184,166,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[420px] custom-scrollbar px-6 space-y-8 leading-loose uppercase italic tracking-tighter">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-14 opacity-20 select-none filter hover:brightness-150 transition-all duration-700 grayscale hover:grayscale-0">
                        <MonitorPlay className="w-28 h-28 stroke-[1px] animate-pulse duration-[6000ms]" />
                        <div className="text-center">
                           <span className="block text-[9px] uppercase tracking-[0.8em] font-black text-teal-600 mb-4 underline decoration-teal-500/30 underline-offset-10 italic">Engine Standby...</span>
                           <span className="text-[11px] font-black text-white/40 tracking-widest decoration-white/5 underline underline-offset-4">Grid Logic Overlap Required</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-6">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-8 duration-700 flex items-start group/line">
                              <span className="text-teal-500/30 mr-6 font-black select-none text-[8px] mt-1 shrink-0 uppercase tracking-widest decoration-teal-500/10 underline italic font-mono tracking-tighter lowercase">plt::grid</span>
                              <span className={`leading-relaxed font-black transition-colors ${
                                line.includes('Success') || line.includes('Performance') || line.includes('Total') ? 'text-teal-400 font-extrabold tracking-tight underline decoration-teal-500/10 underline-offset-6 font-mono uppercase italic' :
                                line.includes('Loading') || line.includes('Initializing') || line.includes('Scanning') ? 'text-amber-500 italic lowercase' :
                                line.includes('Executing') || line.includes('Recalibrating') || line.includes('Object') ? 'text-indigo-400 uppercase italic' :
                                line.includes('Engine') || line.includes('Grid') ? 'text-teal-500 font-black tracking-widest uppercase border-b border-teal-500/20' :
                                'text-slate-600 italic uppercase text-[9px] tracking-tight decoration-slate-900 underline underline-offset-4'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-16 flex justify-between items-center border-t border-white/5 mt-14 italic uppercase font-black">
                           <div className="flex items-center gap-5">
                              <span className="w-3.5 h-3.5 rounded-full bg-teal-500 animate-pulse shadow-[0_0_20px_rgba(20,184,166,0.7)]"></span>
                              <span className="text-[10px] text-slate-800 font-black tracking-[0.5em] decoration-teal-500/10 underline italic font-mono lowercase">Raster matrix locked</span>
                           </div>
                           <button onClick={resetConsole} className="text-[10px] text-teal-500/70 hover:text-teal-400 font-black tracking-[0.4em] font-mono transition-colors border-b-2 border-teal-500/10 uppercase italic">Flush Buffer</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Course Sequence Roadmap Architecture */}
            <div className="bg-gradient-to-br from-teal-950 via-cyan-950 to-slate-900 p-12 rounded-[5.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-teal-400/10 rounded-full blur-[120px]"></div>
               <h4 className="text-white font-black text-[11px] mb-12 flex items-center uppercase tracking-[0.6em] opacity-80 underline decoration-teal-500 underline-offset-10 italic tracking-tighter lowercase font-mono">
                 <List className="w-6 h-6 text-teal-400 mr-5 transition-transform group-hover:rotate-180 duration-1000" />
                 Grid Roadmap
               </h4>
               <div className="space-y-6 px-4 relative z-10 italic uppercase font-black tracking-tighter">
                  {[
                    "Matplotlib Plotting", "Matplotlib Line Plot", "Matplotlib Figure", "Matplotlib Subplots", "Matplotlib Advanced Grid"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-14 h-12 rounded-2xl flex items-center justify-center mr-8 transition-all duration-700 hover:scale-110 shadow-2xl ${i === 3 ? 'bg-teal-600 shadow-teal-500/50 rotate-12' : 'bg-white/5 border border-white/10 opacity-30 select-none grayscale'}`}>
                          <span className={`text-[12px] font-black italic ${i === 3 ? 'text-white' : 'text-slate-600'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-black tracking-widest transition-colors uppercase italic ${i === 3 ? 'text-teal-400 underline decoration-teal-500/30 underline-offset-10' : 'text-slate-800'}`}>{path}</span>
                       {i === 3 && <Sparkles className="w-5 h-5 ml-auto text-teal-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Layout Advice */}
      <section className="max-w-6xl mx-auto mb-24 px-4 overflow-hidden italic font-black">
        <div className="bg-white dark:bg-slate-900 p-16 sm:p-28 rounded-[7rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group font-black italic">
          <div className="absolute bottom-0 left-0 p-24 opacity-[0.04] scale-150 rotate-12 -z-0 pointer-events-none grayscale-0 group-hover:-rotate-12 transition-transform duration-[4000ms] transition-all"><Grid3X3 className="w-[40rem] h-[40rem] text-teal-500" /></div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-28 gap-12 relative z-10 tracking-tighter decoration-teal-500/20 underline underline-offset-[20px] italic font-black uppercase">
             <div className="flex items-center font-black italic uppercase italic">
                <div className="p-6 bg-teal-100 dark:bg-teal-900/30 rounded-[3.5rem] mr-12 shadow-2xl transition-transform hover:rotate-6">
                   <Lightbulb className="w-14 h-14 text-teal-600 dark:text-teal-400 font-bold italic shadow-2xl" />
                </div>
                <div>
                   <h2 className="text-5xl text-slate-900 dark:text-white mb-3 uppercase tracking-tighter italic shadow-sm">
                      Layout Logic Grid
                   </h2>
                   <p className="text-xl text-slate-500 dark:text-slate-400 font-bold tracking-tight lowercase italic border-l-4 border-teal-500/20 pl-8">Subplot Matrix expert advice.</p>
                </div>
             </div>
             <div className="h-0.5 w-48 bg-teal-500/20 hidden md:block italic tracking-widest font-black uppercase italic underline decoration-teal-500/5 underline-offset-4">--- GRID_MOD ---</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10 font-black italic">
             {[
               { t: "The Comparison Rule", d: "Use subplots for comparing correlated datasets like Sales vs Profit or Temperature vs Humidity.", i: Layers, c: "text-teal-600" },
               { t: "Modern Paradigm", d: "Prefer `fig, ax = plt.subplots()` over the legacy `subplot()` command for better Axes control and clean OO code.", i: PanelLeft, c: "text-indigo-600" },
               { t: "Label Optimization", d: "Always add `plt.tight_layout()` as your final pre-show command to prevent text and label overlaps.", i: Maximize, c: "text-cyan-500" },
               { t: "Dashboard Standards", d: "Real-world data analytics projects often layer 4-6 visualizations into a single high-resolution figure.", i: LayoutDashboard, c: "text-teal-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip transition-all hover:translate-x-4 duration-500 cursor-help">
                 <div className={`p-8 bg-slate-50 dark:bg-slate-800 rounded-[3.5rem] mr-12 shadow-sm group-hover/tip:bg-teal-500/10 transition-all duration-1000 ${tip.c} bg-opacity-20 shrink-0 font-black`}>
                    <tip.i className="w-12 h-12 group-hover/tip:rotate-12 group-hover/tip:scale-125 transition-transform font-bold italic shadow-2xl" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-black text-slate-900 dark:text-white mb-6 group-hover/tip:text-teal-600 transition-colors uppercase tracking-[0.5em] text-[11px] underline decoration-teal-500/10 italic">⭐ GRID TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-black italic tracking-tighter opacity-80 lowercase decoration-teal-500/5 underline underline-offset-8 decoration-dashed">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Production Sample Showcase */}
      <section className="max-w-6xl mx-auto mb-20 px-4 font-black italic">
         <div className="bg-teal-600/5 rounded-[6rem] p-16 sm:p-24 border border-teal-500/10 relative group overflow-hidden italic shadow-2xl backdrop-blur-3xl font-black transition-all">
            <div className="absolute top-0 right-0 p-14 opacity-[0.06] grayscale hover:grayscale-0 transition-all duration-[2000ms]"><Share2 className="w-[35rem] h-[35rem] text-teal-500 font-bold" /></div>
            <div className="relative z-10 flex flex-col xl:flex-row items-center gap-20">
               <div className="flex-1 text-center xl:text-left">
                  <h3 className="text-5xl font-black text-teal-600 mb-10 tracking-tighter uppercase italic underline decoration-teal-500/10 underline-offset-[16px]">9️⃣ Multi-View Report</h3>
                  <p className="text-xl font-black text-slate-500 dark:text-slate-400 mb-14 leading-relaxed italic opacity-80 lowercase decoration-teal-500/5 underline underline-offset-10">
                     "Leveraging plt.subplots(1, 2) to build a synchronized view of Visitors and Sales within a single production artifact."
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10">
                     {[
                       { v: "Layout: 1 Row, 2 Col", c: "bg-teal-500/10" },
                       { v: "Logic: Object-Oriented", c: "bg-indigo-600/20" }
                     ].map(v => (
                       <div key={v.v} className={`${v.c} px-10 py-6 rounded-[3rem] text-[11px] font-black text-teal-600 uppercase tracking-widest text-center italic border border-teal-500/10 shadow-xl`}>{v.v}</div>
                     ))}
                  </div>
                  <button onClick={() => runDemo('dashboard_demo')} className="w-full py-8 bg-teal-600 text-white font-black rounded-[4rem] shadow-2xl hover:bg-teal-500 focus:ring-[12px] ring-teal-500/20 flex items-center justify-center gap-6 transition-all italic text-[12px] tracking-widest uppercase border-b-6 border-teal-900/50 active:translate-y-2">
                     <MonitorPlay className="w-6 h-6 fill-current" /> GENERATE DUAL-CHART ASSET
                  </button>
               </div>
               <div className="w-full xl:w-[28rem] bg-slate-950 p-14 rounded-[7rem] border border-teal-500/30 shadow-2xl group/ex transform hover:-rotate-1 transition-transform">
                  <div className="flex items-center justify-center h-56 relative overflow-hidden mb-10 bg-teal-500/5 rounded-[4rem] border border-teal-500/10 shadow-inner">
                     <Grid3X3 className="w-32 h-32 text-teal-500/20 group-hover/ex:scale-150 transition-transform duration-[4000ms] font-black" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-teal-500/10 tracking-[2em] uppercase select-none cursor-not-allowed">MATRIX_LOCKED_v4</div>
                  </div>
                  <div className="h-0.5 w-full bg-teal-500/20 mb-10 px-6"></div>
                  <div className="flex flex-col gap-6 font-mono opacity-60 italic text-[10px]">
                    <div className="flex justify-between font-black tracking-widest uppercase"><span>Engine::Axes</span> <span className="text-teal-500 underline decoration-teal-500/20 underline-offset-8 tracking-widest uppercase font-black uppercase tracking-tighter decoration-double">Subplot_Buffer_OK</span></div>
                    <div className="flex justify-between font-black tracking-widest uppercase"><span>Raster::Engine</span> <span className="text-teal-500 underline decoration-teal-500/20 underline-offset-8 tracking-widest uppercase font-black uppercase tracking-tighter decoration-double">Grid_Mode_Active</span></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Practice Design Mission */}
      <section className="max-w-4xl mx-auto pb-28 px-6 md:px-0">
        <div className="bg-gradient-to-br from-teal-700 via-cyan-800 to-indigo-950 p-16 sm:p-28 rounded-[8.5rem] shadow-2xl relative overflow-hidden group border-b-[12px] border-teal-900/40 transform hover:scale-[1.01] transition-all italic font-black">
          <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[140px] -z-0 pointer-events-none group-hover:scale-125 transition-transform duration-[5000ms]"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-24 items-center italic font-black text-white">
            <div className="flex-1 text-center xl:text-left font-black italic">
              <div className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-full text-[11px] font-black mb-14 border border-white/20 tracking-[0.5em] uppercase shadow-2xl backdrop-blur-2xl italic tracking-tighter decoration-white/20 underline underline-offset-10 italic">
                🎯 Discrete Grid Mission
              </div>
              <h2 className="text-6xl font-black text-white mb-12 leading-[1.0] tracking-tighter uppercase italic decoration-white/10 underline underline-offset-[16px]">
                Health Dashboard
              </h2>
              <p className="text-teal-100 text-lg mb-16 leading-relaxed font-black pr-8 opacity-90 italic border-l-6 border-teal-400 pl-10 lowercase tracking-widest decoration-white/10 underline underline-offset-10">
                Visualize the balance! Create a figure with two subplots: <b>Study Hours</b> and <b>Exercise Time</b>. Use the 1x2 modern layout method and don't forget the markers!
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-teal-950 hover:bg-slate-50 px-20 py-10 rounded-[5rem] text-[15px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-90 uppercase tracking-[0.4em] italic mx-auto xl:mx-0 border-b-8 border-teal-900/40 transform hover:translate-y-[-4px] shadow-2xl"
               >
                 <Play className="w-6 h-6 mr-6 fill-teal-950 group-hover/btn:rotate-180 transition-transform duration-700 font-black shadow-2xl" />
                 Initialize Scalar Matrix
               </button>
            </div>

            <div className="w-full xl:w-[26rem] relative font-mono">
               <div className="bg-[#0b0c10] rounded-[7rem] border border-white/10 p-20 relative shadow-2xl overflow-hidden group-hover:rotate-3 transition-transform duration-1000 rotate-2 translate-z-10 bg-teal-500/5">
                  <div className="flex justify-between items-center mb-16 px-6 opacity-40 font-black italic uppercase italic">
                    <div className="flex gap-4">
                       <div className="w-4 h-4 rounded-full bg-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.8)] animate-ping"></div>
                       <div className="w-4 h-4 rounded-full bg-teal-500/40"></div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.6em] italic decoration-white/10 underline underline-offset-8 tracking-widest uppercase">MATRIX_v4</span>
                  </div>

                  <div className="h-56 relative flex items-center justify-center p-12 bg-teal-500/5 rounded-[5rem] border border-teal-500/10 overflow-hidden font-black group/m font-black italic">
                     <Layout className="w-28 h-28 text-teal-600/30 group-hover/m:rotate-[360deg] transition-transform duration-[6000ms] font-black shadow-2xl" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-teal-500/10 tracking-[2.5em] uppercase cursor-help select-none font-bold">GRID_CALIBRATING...</div>
                  </div>
                  
                  <div className="mt-16 flex items-center justify-center gap-6 text-teal-500/10 text-[11px] font-black uppercase tracking-[0.7em] select-none italic underline decoration-teal-500/5 underline-offset-10 italic font-black uppercase font-mono">
                     <ClipboardCheck className="w-5 h-5" />
                     Axes Synthesized
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Design Signature Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-28 opacity-40 hover:opacity-100 transition-all font-black uppercase italic tracking-[0.2em] decoration-teal-500/10 underline underline-offset-[12px] font-mono">
         <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed mb-8">
            The grid is the backbone of comparative analysis. Master the subplot matrix, align your variables, and build dashboards that prove the correlation.
         </p>
         <div className="h-0.5 w-40 bg-teal-500/10 mx-auto transition-all hover:w-[40rem] duration-1000 shadow-2xl"></div>
      </footer>

    </div>
  );
}

export default MplSubplots;
