import React, { useState } from 'react';
import { 
  BarChart, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  Activity, Layers, List, Check, Eye, 
  ShieldCheck, TrendingUp, Users, Presentation, 
  ClipboardCheck, Target, Layout, MoveRight,
  HelpCircle, Sparkles, MonitorPlay, 
  MousePointer2, Scissors, Palette, Maximize,
  Clock, Box, PieChart,
  Settings2,
  LineChart
} from 'lucide-react';

function MplPyplot() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'multiple' | 'labels' | 'types' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'import_demo':
        outLines = [
          'Analyzing Library: matplotlib',
          'Accessing Module: pyplot',
          'Setting local alias: plt',
          'Success: Interface established via "plt" alias.'
        ];
        break;
      case 'basic_pyplot':
        outLines = [
          'Defining x = [1, 2, 3, 4]',
          'Defining y = [10, 20, 25, 30]',
          'plt.plot(x, y) calls the rasterization engine...',
          'plt.show() triggers rendering event...',
          'Window: Basic Plot Displayed.'
        ];
        break;
      case 'multi_pyplot':
        outLines = [
          'Loading Dataset 1 (Series A)...',
          'Loading Dataset 2 (Series B)...',
          'plt.plot(x, y1) -> Line 1 defined.',
          'plt.plot(x, y2) -> Line 2 defined.',
          'Result: Multiple datasets layered on single canvas.'
        ];
        break;
      case 'labels_pyplot':
        outLines = [
          'Applying Title: "Sales Growth"',
          'Labeling X: "Months"',
          'Labeling Y: "Sales"',
          'Updating metadata buffers...',
          'Success: Informative chart ready for export.'
        ];
        break;
      case 'types_pyplot':
        outLines = [
          'plt.plot() -> Standard Line identified.',
          'plt.bar() -> Categorical Bars defined.',
          'plt.scatter() -> XY Distribution points rendered.',
          'Switching engine to SCATTER mode...',
          'Success: Viewport updated.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Loading Traffic Logs (Mon-Fri)...',
          'Visitors: [120, 150, 170, 160, 180]',
          'Applying marker="o" for data points.',
          'Setting axes labels: Day, Visitors.',
          'Success: Monthly traffic trend visualized.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Scanning for Screen Time variables...',
          'Days List: ["Mon", "Tue", "Wed", "Thu", "Fri"] -> Detected.',
          'Hours List: [3, 4, 5, 4, 6] -> Detected.',
          'plt.plot(marker="o") correctly implemented.',
          'Labels: Title, xlabel, ylabel verified.',
          'Performance: 100/100. Student achievement unlocked!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Header with Modern Indigo Design */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-3xl mb-8 shadow-sm border border-indigo-200 dark:border-indigo-800/50 hover:rotate-12 transition-transform cursor-pointer group">
          <MonitorPlay className="w-12 h-12 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black mb-6 border border-indigo-500/20 tracking-[0.4em] uppercase">
          Core Module: Pyplot
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic uppercase underline decoration-indigo-500/10 underline-offset-[16px]">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-600">Pyplot</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold italic">
          "The heart of Matplotlib. Pyplot provides a simple, MATLAB-style interface for creating and managing charts with effortless Python commands."
        </p>
      </header>

      {/* 2. Concept Foundation Overview */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-500/20 mr-5">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight italic">What is Pyplot?</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-indigo-500 pl-8">
                "A collection of functions that make Matplotlib work like MATLAB. It handles the underlying complexity, allowing you to create plots in seconds."
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-indigo-500/5 rounded-3xl border border-indigo-500/10 flex flex-col items-center">
                    <Activity className="w-7 h-7 text-indigo-600 mb-4" />
                    <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest text-center italic">Easy Interface</span>
                 </div>
                 <div className="p-6 bg-indigo-500/5 rounded-3xl border border-indigo-500/10 flex flex-col items-center">
                    <Zap className="w-7 h-7 text-indigo-600 mb-4" />
                    <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest text-center italic">Quick Analytics</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-700 via-violet-800 to-slate-950 p-10 rounded-[3.5rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white leading-loose italic">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter uppercase text-indigo-200 border-b border-white/10 pb-4">
                 <ShieldCheck className="w-8 h-8 mr-4" />
                 Pyplot Advantages
               </h3>
               <div className="space-y-6">
                 {[
                   { t: "MATLAB-Style", d: "Familiar plotting syntax for scientists.", i: Settings2 },
                   { t: "Quick Visuals", d: "Single commands to render complex data.", i: Sparkles },
                   { t: "Data Science Core", d: "Foundational tool for analytics pipelines.", i: Target },
                   { t: "Environment Ready", d: "Works seamlessly in notebooks and scripts.", i: MonitorPlay }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center group/item p-2 hover:bg-white/5 rounded-2xl transition-all">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-5 shrink-0">
                         <Check className="w-4 h-4 text-indigo-300" />
                      </div>
                      <div>
                         <h5 className="font-black text-sm tracking-tight italic">{mod.t}</h5>
                         <p className="text-[10px] text-indigo-100/50 font-bold">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Importing & Aliases Section */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="bg-white dark:bg-slate-900 p-12 sm:p-20 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] scale-150 -z-0"><Code className="w-64 h-64 text-indigo-500" /></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-12 flex items-center tracking-tighter italic">
              <ClipboardCheck className="w-10 h-10 text-indigo-600 mr-6" />
              3ï¸âƒ£ Importing & Aliases
            </h3>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-bold italic">
                  "Most developers use <span className="text-indigo-600 px-2 py-1 bg-indigo-500/5 rounded-lg border border-indigo-500/10">plt</span> as an alias to make code shorter and easier to read."
                </p>
                <div className="space-y-4">
                   {[
                     { p: "matplotlib", m: "Main Library" },
                     { p: "pyplot", m: "Plotting Module" },
                     { p: "plt", m: "Professional Alias" }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                        <code className="text-sm font-black text-indigo-600 mr-6 w-24">{item.p}</code>
                        <span className="text-xs font-bold text-slate-500 italic uppercase tracking-widest">{item.m}</span>
                     </div>
                   ))}
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden group/imp">
                 <pre className="font-mono text-sm text-slate-300 leading-relaxed italic">
                    import <span className="text-indigo-400">matplotlib.pyplot</span> as <span className="text-fuchsia-400 underline decoration-indigo-500/30 underline-offset-8">plt</span>
                 </pre>
                 <button onClick={() => runDemo('import_demo')} className="absolute bottom-8 right-8 p-5 bg-indigo-600 text-white rounded-2xl shadow-xl hover:bg-indigo-500 transition-all active:scale-95 group-hover/imp:ring-8 ring-indigo-500/10">
                    <Play className="w-6 h-6 fill-current" />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Command Studio */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-8">
           <div className="flex items-center">
             <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-[2.5rem] mr-6 shadow-sm border border-indigo-200 dark:border-indigo-800">
               <Terminal className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
             </div>
             <div>
               <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight underline decoration-indigo-500/10 underline-offset-8">Pyplot Command Studio</h2>
               <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em] mt-2 italic font-mono tracking-tighter decoration-indigo-500/20 underline">MATLAB-Style Interface</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Example', icon: Code },
              { id: 'multiple', label: 'Multiset Plots', icon: Layers },
              { id: 'labels', label: 'Titles & Labels', icon: ClipboardCheck },
              { id: 'types', label: 'Chart Types', icon: Target },
              { id: 'real_world', label: 'Real Case', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[3rem] text-xs font-black transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30' 
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-3" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-14 rounded-[4.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[600px] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 -z-0 grayscale group-hover:grayscale-0 transition-all duration-1000"><LineChart className="w-96 h-96 text-indigo-500 font-bold" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col relative z-10 italic">
                  <h3 className="text-2xl font-black flex items-center mb-10 pb-4 border-b border-slate-50 dark:border-slate-800 text-indigo-500 tracking-tighter">
                    <Code className="w-7 h-7 mr-4" />
                    4ï¸âƒ£ Basic Pyplot Flow
                  </h3>
                  <div className="space-y-8 flex-1 flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50">
                          <span className="block text-[9px] font-black text-indigo-600 uppercase tracking-widest mb-2 font-mono italic underline underline-offset-4 decoration-indigo-500/20">plt.plot()</span>
                          <span className="text-xs font-bold text-slate-500 tracking-tight">Creates the visual layer inside the figure buffer.</span>
                       </div>
                       <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50">
                          <span className="block text-[9px] font-black text-indigo-600 uppercase tracking-widest mb-2 font-mono italic underline underline-offset-4 decoration-indigo-500/20">plt.show()</span>
                          <span className="text-xs font-bold text-slate-500 tracking-tight">Displays the window and flushes the buffer.</span>
                       </div>
                    </div>
                    <div className="bg-slate-950 p-12 rounded-[4rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden group/code">
                        <pre className="font-mono text-sm leading-relaxed text-slate-300 relative z-10">
                           plt.<span className="text-fuchsia-400 underline decoration-indigo-500/30 underline-offset-8">plot</span>(x, y)<br/><br/>
                           plt.<span className="text-fuchsia-400 font-black italic">show</span>()
                        </pre>
                        <button onClick={() => runDemo('basic_pyplot')} className="absolute bottom-10 right-10 p-6 bg-indigo-600 text-white rounded-[2rem] shadow-xl hover:bg-indigo-500 transition-all active:scale-95 group-hover/code:ring-8 ring-indigo-500/10">
                           <Play className="w-7 h-7 fill-current" />
                        </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Multiple */}
              {activeTab === 'multiple' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-2xl font-black flex items-center mb-6 pb-4 border-b border-slate-50 dark:border-slate-800 text-violet-500 uppercase tracking-tighter">
                    <Layers className="w-7 h-7 mr-4" />
                    5ï¸âƒ£ Plotting Multiple Datasets
                  </h3>
                  <div className="bg-violet-500/5 p-10 rounded-[3.5rem] border border-violet-500/10">
                    <p className="text-sm font-bold text-slate-500 mb-10 leading-relaxed pr-12">
                      "Layering lines is simple: call plt.plot() for each dataset before the final plt.show() command."
                    </p>
                    <div className="bg-slate-950 p-10 rounded-[2.5rem] border border-violet-500/20 mb-8 shadow-2xl relative">
                       <pre className="font-mono text-xs text-slate-400 leading-loose">
                          {`plt.plot(x, y1) # Dataset 1
plt.plot(x, y2) # Dataset 2

plt.show()`}
                       </pre>
                    </div>
                    <button onClick={() => runDemo('multi_pyplot')} className="w-full py-6 bg-violet-600 text-white font-black rounded-3xl shadow-xl hover:bg-violet-500 transition-all text-xs tracking-widest uppercase flex items-center justify-center italic ring-offset-4 active:ring-4 ring-violet-500/20">
                       <Layers className="w-5 h-5 mr-4" /> Layer Multiple Trends
                    </button>
                  </div>
                </div>
              )}

              {/* Tab: Labels */}
              {activeTab === 'labels' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-black flex items-center mb-8 pb-4 border-b border-slate-50 dark:border-slate-800 text-indigo-500 italic uppercase tracking-[0.1em]">
                    <ClipboardCheck className="w-7 h-7 mr-4" />
                    6ï¸âƒ£ Descriptive Titles & Labels
                  </h3>
                  <div className="grid grid-cols-2 gap-4 pb-4 font-black">
                     <div className="p-6 bg-indigo-500/5 rounded-[2rem] border border-indigo-500/10">
                        <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest block mb-4 italic decoration-indigo-500/20 underline underline-offset-4">plt.title()</span>
                        <code className="text-[10px] text-slate-500 font-mono italic">"Sales Growth"</code>
                     </div>
                     <div className="p-6 bg-indigo-500/5 rounded-[2rem] border border-indigo-500/10">
                        <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest block mb-4 italic decoration-indigo-500/20 underline underline-offset-4">plt.xlabel()</span>
                        <code className="text-[10px] text-slate-500 font-mono italic">"Months"</code>
                     </div>
                  </div>
                  <div className="bg-slate-900 border border-indigo-500/20 rounded-[4rem] p-12 relative overflow-hidden italic shadow-2xl">
                     <pre className="font-mono text-sm leading-8 text-slate-300 relative z-10">
                        plt.plot(x, y)<br/><br/>
                        <span className="text-indigo-400 font-black underline decoration-indigo-500/20 underline-offset-8">plt.title("Sales Growth")</span><br/>
                        plt.xlabel("Months")
                     </pre>
                  </div>
                  <button onClick={() => runDemo('labels_pyplot')} className="w-full py-6 bg-indigo-600 text-white font-black rounded-[2.5rem] shadow-xl hover:bg-indigo-500 transition-all text-xs tracking-[0.4em] uppercase mt-4 italic">Update Dataset Metadata</button>
                </div>
              )}

              {/* Tab: Types */}
              {activeTab === 'types' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-6 relative z-10 italic">
                  <h3 className="text-2xl font-black flex items-center mb-6 pb-4 border-b border-slate-50 dark:border-slate-800 text-violet-500 uppercase tracking-tighter italic">
                    <Target className="w-7 h-7 mr-4" />
                    7ï¸âƒ£ Pyplot Visualization Library
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                     {[
                       { f: "plt.plot()", c: "Line Chart", i: TrendingUp },
                       { f: "plt.bar()", c: "Bar Chart", i: Layout },
                       { f: "plt.scatter()", c: "Scatter Plot", i: Target },
                       { f: "plt.hist()", c: "Histogram", i: BarChart },
                       { f: "plt.pie()", c: "Pie Chart", i: PieChart }
                     ].map((item, i) => (
                       <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border dark:border-slate-800 text-center hover:border-violet-500 transition-all cursor-pointer group hover:-translate-y-1">
                          <item.i className="w-6 h-6 text-violet-500 mx-auto mb-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                          <code className="text-[10px] text-violet-600 font-black block mb-1 font-mono">{item.f}</code>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter italic decoration-violet-500/20 underline underline-offset-4">{item.c}</span>
                       </div>
                     ))}
                  </div>
                  <button onClick={() => runDemo('types_pyplot')} className="w-full py-5 bg-violet-700 text-white font-black rounded-3xl shadow-xl hover:bg-violet-600 transition-all text-xs tracking-widest uppercase italic mt-4 flex items-center justify-center">
                     <Target className="w-4 h-4 mr-3" /> Execute Multi-Mode Rasterization
                  </button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col justify-center space-y-10 relative z-10 italic">
                  <h3 className="text-2xl font-black flex items-center mb-4 text-indigo-500 tracking-tighter italic border-b dark:border-slate-800 pb-4 uppercase">
                    <MonitorPlay className="w-7 h-7 mr-4" />
                    8ï¸âƒ£ Website Traffic Case Study
                  </h3>
                  <div className="bg-indigo-500/5 p-12 rounded-[4rem] border border-indigo-500/20 flex flex-col items-center justify-center relative overflow-hidden group/case">
                     <div className="absolute top-0 right-0 p-10 opacity-[0.05] grayscale-0 group-hover/case:rotate-12 transition-transform duration-1000"><Users className="w-40 h-40 text-indigo-400" /></div>
                     <div className="text-4xl font-black text-indigo-600 mb-6 italic underline decoration-indigo-500/20 underline-offset-8">Traffic Visualization</div>
                     <p className="text-sm font-bold text-slate-500 text-center leading-relaxed italic max-w-md">
                        "Visualizing weekly trends: Connecting daily data points with markers to show growth cycles."
                     </p>
                  </div>
                  <button onClick={() => runDemo('real_world')} className="w-full py-6 bg-indigo-600 text-white font-black rounded-[4rem] shadow-xl hover:bg-indigo-500 transition-all text-xs uppercase tracking-[0.4em] italic ring-offset-4 active:ring-8 ring-indigo-500/10">Generate Performance Overlay</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10 font-mono italic">
            
            {/* Visual Analytics Engine Terminal */}
            <div className="bg-[#0b0c10] rounded-[4.5rem] p-12 border border-slate-800 flex-1 min-h-[520px] shadow-2xl relative overflow-hidden group/terminal flex flex-col italic">
               <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] group-hover/terminal:bg-indigo-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-10 px-4 transition-all">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-5 text-indigo-500/70 animate-pulse font-bold" />
                      <h3 className="font-black text-slate-600 uppercase text-[10px] tracking-[0.5em] font-mono">
                        PYPLOT_ENGINE_v4
                      </h3>
                    </div>
                    <div className="flex space-x-2.5">
                       <div className="w-3.5 h-3.5 rounded-full bg-indigo-950 shadow-inner"></div>
                       <div className="w-3.5 h-3.5 rounded-full bg-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-5 space-y-6">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-12 opacity-30 select-none filter hover:brightness-125 transition-all duration-700">
                        <MonitorPlay className="w-24 h-24 stroke-[1px] animate-bounce [animation-duration:5000ms]" />
                        <div className="text-center">
                           <span className="block text-[8px] uppercase tracking-[0.6em] font-black text-indigo-500 mb-3 underline decoration-indigo-500/20 underline-offset-8">Engine Standby...</span>
                           <span className="text-[10px] font-black text-white/40 tracking-tighter">Awaiting Logic Initialization</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-5">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-6 duration-700 flex items-start group/line">
                              <span className="text-indigo-500/30 mr-5 font-black select-none text-[8px] mt-1 shrink-0 uppercase tracking-widest decoration-indigo-500/10 underline italic">plt::exec</span>
                              <span className={`leading-relaxed font-black transition-colors ${
                                line.includes('Success') || line.includes('Correct') ? 'text-indigo-400 font-extrabold tracking-tight underline decoration-indigo-500/10 underline-offset-4 font-mono' :
                                line.includes('Analyzing') || line.includes('Defining') ? 'text-amber-400 italic' :
                                line.includes('Loading') || line.includes('Switching') ? 'text-fuchsia-400' :
                                line.includes('Performance') ? 'text-indigo-500 font-black tracking-widest uppercase border-b border-indigo-500/20' :
                                'text-slate-600 italic uppercase text-[9px] tracking-tight'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-12 flex justify-between items-center border-t border-white/5 mt-10 italic">
                           <div className="flex items-center gap-4">
                              <span className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.6)]"></span>
                              <span className="text-[9px] text-slate-700 font-black uppercase tracking-[0.4em] decoration-indigo-500/10 underline italic">Visualization Buffer Locked</span>
                           </div>
                           <button onClick={resetConsole} className="text-[10px] text-indigo-500/70 hover:text-indigo-400 font-black uppercase tracking-[0.3em] transition-colors border-b border-indigo-500/10">Purge Memory</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Course Architecture Roadmap */}
            <div className="bg-gradient-to-br from-indigo-950 via-violet-950 to-slate-900 p-12 rounded-[5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-black text-[10px] mb-10 flex items-center uppercase tracking-[0.5em] opacity-80 underline decoration-indigo-500 underline-offset-8">
                 <List className="w-5 h-5 text-indigo-400 mr-4" />
                 Step-by-Step Mastery
               </h4>
               <div className="space-y-6 px-2 relative z-10 italic">
                  {[
                    "Matplotlib Introduction", "Matplotlib Pyplot", "Matplotlib Plotting", "Matplotlib Line Plot", "Matplotlib Markers", "Matplotlib Colors"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-14 h-12 rounded-2xl flex items-center justify-center mr-8 transition-all duration-700 hover:scale-110 ${i === 1 ? 'bg-indigo-600 shadow-2xl shadow-indigo-500/40 rotate-12' : 'bg-white/5 border border-white/10 opacity-30 select-none grayscale'}`}>
                          <span className={`text-[11px] font-black italic ${i === 1 ? 'text-white' : 'text-slate-600'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-black tracking-widest transition-colors uppercase italic ${i === 1 ? 'text-indigo-300 underline decoration-indigo-500/20 underline-offset-8' : 'text-slate-700'}`}>{path}</span>
                       {i === 1 && <Sparkles className="w-4 h-4 ml-auto text-indigo-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Professional Advice Grid */}
      <section className="max-w-6xl mx-auto mb-24 px-4 overflow-hidden italic">
        <div className="bg-white dark:bg-slate-900 p-16 sm:p-24 rounded-[6rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 p-20 opacity-[0.03] scale-150 rotate-12 -z-0 pointer-events-none grayscale-0 group-hover:-rotate-12 transition-transform [transition-duration:3000ms] transition-all">
             <Layers className="w-96 h-96 text-indigo-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 gap-10 relative z-10 font-black italic tracking-tighter decoration-indigo-500/20 underline underline-offset-[16px]">
             <div className="flex items-center">
                <div className="p-5 bg-indigo-100 dark:bg-indigo-900/30 rounded-[3rem] mr-10 shadow-2xl transition-transform hover:rotate-6">
                   <Lightbulb className="w-12 h-12 text-indigo-600 dark:text-indigo-400 font-bold" />
                </div>
                <div>
                   <h2 className="text-4xl text-slate-900 dark:text-white mb-2 uppercase tracking-tight">
                      Visualization Best Practices
                   </h2>
                   <p className="text-lg text-slate-500 dark:text-slate-400 font-bold tracking-tight lowercase">Pyplot Specialist Expert Advice.</p>
                </div>
             </div>
             <div className="h-0.5 w-40 bg-indigo-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
             {[
               { t: "The Ritual Mandate", d: "Always call plt.show() to ensure charts render correctly across all development environments.", i: ShieldCheck, c: "text-indigo-600" },
               { t: "Alias Consistency", d: "Standardize your code using 'import matplotlib.pyplot as plt' to align with global developer norms.", i: Users, c: "text-fuchsia-600" },
               { t: "Rapid Exploration", d: "Leverage Pyplot for debugging datasets and quick exploratory data analysis (EDA).", i: Target, c: "text-indigo-500" },
               { t: "Layout Precision", d: "Use plt.figure(figsize=(8,5)) to gain exact control over the chart aspect ratio.", i: Maximize, c: "text-violet-600" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip transition-all">
                 <div className={`p-7 bg-slate-50 dark:bg-slate-800 rounded-[3rem] mr-10 shadow-sm group-hover/tip:bg-indigo-500/10 transition-all duration-700 ${tip.c} bg-opacity-10 shrink-0`}>
                    <tip.i className="w-10 h-10 group-hover/tip:rotate-12 group-hover/tip:scale-110 transition-transform font-bold italic" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-black text-slate-900 dark:text-white mb-4 group-hover/tip:text-indigo-600 transition-colors uppercase tracking-[0.4em] text-[10px] underline decoration-indigo-500/10 italic">â­ PRO TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-black italic tracking-tight">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Practice Mission Section */}
      <section className="max-w-4xl mx-auto pb-24 px-6 md:px-0">
        <div className="bg-gradient-to-br from-indigo-700 via-violet-800 to-slate-950 p-16 sm:p-24 rounded-[7.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[120px] -z-0 pointer-events-none group-hover:scale-110 transition-transform [transition-duration:4000ms]"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-20 items-center italic">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-6 py-2.5 bg-white/10 text-white rounded-full text-[10px] font-black mb-12 border border-white/20 tracking-[0.4em] uppercase shadow-2xl backdrop-blur-xl italic font-mono tracking-tighter decoration-indigo-500/20 underline underline-offset-4">
                ðŸŽ¯ Discrete Lab Mission
              </div>
              <h2 className="text-6xl font-black text-white mb-10 leading-[1.1] tracking-tighter uppercase italic">
                Daily Screen Monitor
              </h2>
              <p className="text-indigo-100 text-lg mb-14 leading-relaxed font-black pr-6 opacity-80 italic border-l-4 border-indigo-400/30 pl-8">
                Visualize your digital life! Create a plot showing <b>Daily Screen Time</b> (Hours) across a 5-day cycle. Use <b>markers</b> and full labeling for professional accuracy!
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-indigo-950 hover:bg-slate-50 px-16 py-8 rounded-[4rem] text-[14px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 uppercase tracking-widest italic mx-auto xl:mx-0 border-b-6 border-indigo-900/20"
               >
                 <Play className="w-5 h-5 mr-5 fill-indigo-950 group-hover/btn:rotate-45 transition-transform" />
                 Initialize Monitor Cycle
               </button>
            </div>

            <div className="w-full xl:w-96 relative font-mono">
               <div className="bg-[#0b0c10] rounded-[6rem] border border-white/10 p-16 relative shadow-2xl overflow-hidden group-hover:rotate-2 transition-transform duration-1000">
                  <div className="flex justify-between items-center mb-14 px-4 opacity-50">
                    <div className="flex gap-3">
                       <div className="w-3.5 h-3.5 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] animate-ping"></div>
                       <div className="w-3.5 h-3.5 rounded-full bg-indigo-500/40"></div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">SCREEN_LOG_v4</span>
                  </div>

                  <div className="h-48 relative flex items-center justify-center p-10 bg-indigo-500/5 rounded-[5rem] border border-indigo-500/10 overflow-hidden font-black group/mock">
                     <MonitorPlay className="w-24 h-24 text-indigo-500/20 group-hover/mock:rotate-6 transition-transform duration-1000" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[9px] font-black text-indigo-500/10 tracking-[1.5em] uppercase select-none font-bold">MONITOR_ACTIVE</div>
                  </div>
                  
                  <div className="mt-14 flex items-center justify-center gap-5 text-indigo-500/10 text-[10px] font-black uppercase tracking-[0.6em] select-none italic underline decoration-indigo-500/5 underline-offset-8">
                     <Clock className="w-4 h-4" />
                     Metrics Rasterized
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Design Signature Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-24 opacity-40 hover:opacity-100 transition-all">
         <p className="text-xs font-black text-slate-500 dark:text-slate-400 italic leading-relaxed tracking-widest uppercase mb-6 decoration-indigo-500/10 underline underline-offset-8">
            Pyplot is the gateway to visual intuition. Master simple commands to build complex scientific narratives.
         </p>
         <div className="h-0.5 w-32 bg-indigo-500/10 mx-auto transition-all hover:w-64"></div>
      </footer>

    </div>
  );
}

export default MplPyplot;
