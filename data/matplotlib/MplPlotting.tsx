import React, { useState } from 'react';
import { 
  LineChart, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  Activity, Layers, List, Check, Eye, 
  ShieldCheck, TrendingUp, Users, Presentation, 
  ClipboardCheck, Target, Layout, MoveRight,
  HelpCircle, MousePointer2, Sparkles, Clock,
  ArrowRightCircle, MonitorPlay
} from 'lucide-react';

function MplPlotting() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'auto_x' | 'markers' | 'multi' | 'labels'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_plot':
        outLines = [
          'Importing matplotlib.pyplot as plt...',
          'Defining x = [1, 2, 3, 4]',
          'Defining y = [10, 20, 25, 30]',
          'Executing plt.plot(x, y)...',
          'Connecting (1,10) -> (2,20) -> (3,25) -> (4,30)',
          'Success: Basic linear relationship visualized.'
        ];
        break;
      case 'auto_x_plot':
        outLines = [
          'Defining y = [10, 20, 30, 40]',
          'No X values provided. Generating indices...',
          'Assumed x = [0, 1, 2, 3]',
          'Executing plt.plot(y)...',
          'Success: Plot generated using default integer index.'
        ];
        break;
      case 'markers_plot':
        outLines = [
          'Applying marker parameter...',
          'marker="o" (Circle)',
          'Rendering nodes at data intersections...',
          'Success: Plot with highlighted data points visible.'
        ];
        break;
      case 'multi_plot':
        outLines = [
          'Loading Series 1 (Sales)...',
          'Loading Series 2 (Profit)...',
          'plt.plot(x, y1) called.',
          'plt.plot(x, y2) called.',
          'Success: Multiple lines layered on single canvas.'
        ];
        break;
      case 'labels_plot':
        outLines = [
          'Defining metadata...',
          'Setting Title: "Weekly Traffic"',
          'Setting X Label: "Days"',
          'Setting Y Label: "Visitors"',
          'plt.show() called.',
          'Success: Contextual information added to chart.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Loading Traffic Logs...',
          'Mon: 120, Tue: 150, Wed: 170, Thu: 160, Fri: 180',
          'plt.plot(days, visitors, marker="o")',
          'Success: Daily visitor trends rendered with markers.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Scanning for [days] list... Found.',
          'Scanning for [hours] list... Found.',
          'Checking plt.plot(days, hours, marker="o")... OK.',
          'Validation: All chart elements present.',
          'Performance: 100/100. Study hours visualized correctly!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. High-Impact Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/40 rounded-[2.5rem] mb-10 shadow-sm border border-blue-200 dark:border-blue-800/50 hover:scale-110 transition-transform cursor-pointer group">
          <MonitorPlay className="w-12 h-12 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black mb-6 border border-blue-500/20 tracking-[0.4em] uppercase">
          Lesson 0.1: Core Concepts
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 decoration-8 underline decoration-blue-500/20 underline-offset-[12px]">Plotting</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold italic">
          "The art of transforming raw numerical data into visual stories. Plotting reveals relationships, trends, and patterns at a glance."
        </p>
      </header>

      {/* 2. Concept Overview Section */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between transition-all hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/20 mr-5">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black tracking-tight italic">What is Plotting?</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-blue-500 pl-8">
                "Matplotlib plotting is the process of drawing charts and graphs from data using Python to visualize patterns and relationships."
              </p>
              
              <div className="space-y-4">
                 {[
                   { l: "Line Plots", d: "Trends & Continuity", i: TrendingUp },
                   { l: "Bar Charts", d: "Categorical Comparison", i: List },
                   { l: "Scatter Plots", d: "Data Correlation", i: Target }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                         <mod.i className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                         <h5 className="font-extrabold text-xs tracking-tight">{mod.l}</h5>
                         <p className="text-[10px] text-slate-500 font-bold italic">{mod.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-700 via-indigo-800 to-violet-950 p-10 rounded-[3.5rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter italic uppercase text-blue-200">
                 <ShieldCheck className="w-8 h-8 mr-4" />
                 Why Plotting Matters
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   { t: "Visual Insights", d: "Makes data easier to parse.", i: Eye },
                   { t: "Trend Detection", d: "Reveals hidden patterns.", i: TrendingUp },
                   { t: "Dataset Comparison", d: "Spot differences instantly.", i: Layers },
                   { t: "Multi-Field Use", d: "Research, ML & Analytics.", i: Activity }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-5 bg-white/10 rounded-3xl border border-white/10 hover:bg-white/20 transition-all cursor-crosshair">
                      <mod.i className="w-6 h-6 mr-4 text-blue-300 shrink-0" />
                      <div>
                         <h5 className="font-black text-xs tracking-tight uppercase tracking-widest">{mod.t}</h5>
                         <p className="text-[9px] text-blue-100/50 italic font-bold">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-6 bg-white/5 rounded-[2rem] border border-white/10 flex items-center">
                  <Sparkles className="w-6 h-6 text-indigo-300 mr-5" />
                  <p className="text-xs font-bold italic leading-relaxed text-blue-100/80">
                    Plotting transforms raw complexity into visual intuition.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Plotting Lab */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-8">
           <div className="flex items-center">
             <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-[2.5rem] mr-6 shadow-sm border border-blue-200 dark:border-blue-800">
               <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
             </div>
             <div>
               <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight italic underline decoration-blue-500/20 underline-offset-8">Plotting Engine Lab</h2>
               <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em] mt-2 italic">plt.plot() Controller</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Example', icon: Code },
              { id: 'auto_x', label: 'Auto X-Axis', icon: Layout },
              { id: 'markers', label: 'Markers (Nodes)', icon: Target },
              { id: 'multi', label: 'Multi-Series', icon: Layers },
              { id: 'labels', label: 'Titles & Labels', icon: ClipboardCheck }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[3rem] text-xs font-black transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
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
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-14 rounded-[4.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[600px] flex flex-col relative overflow-hidden group transition-all">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 -z-0"><LineChart className="w-96 h-96 text-blue-500" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 flex-1 flex flex-col relative z-10 font-bold italic">
                  <h3 className="text-2xl font-black flex items-center mb-10 pb-4 border-b border-slate-50 dark:border-slate-800 text-blue-600 tracking-tighter">
                    <Code className="w-7 h-7 mr-4" />
                    3️⃣ & 4️⃣ Basic Plotting & Imports
                  </h3>
                  <div className="space-y-8 flex-1">
                    <div className="p-8 bg-blue-500/5 rounded-[2.5rem] border border-blue-500/10 mb-2">
                       <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-4 italic">Step 1: The Import</span>
                       <code className="text-lg font-mono font-black text-slate-600 dark:text-slate-300">import <span className="text-blue-500">matplotlib.pyplot</span> as <span className="text-indigo-500">plt</span></code>
                    </div>
                    
                    <div className="bg-slate-950 rounded-[3.5rem] p-12 border border-blue-500/20 shadow-2xl relative group/code overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/code:scale-110 transition-transform"><CheckCircle2 className="w-40 h-40 text-blue-500" /></div>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300 relative z-10">
                           x = [1, 2, 3, 4]<br/>
                           y = [10, 20, 25, 30]<br/><br/>
                           plt.plot(x, y)<br/><br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_plot')} className="absolute bottom-10 right-10 p-6 bg-blue-600 text-white rounded-[2rem] shadow-xl hover:bg-blue-500 transition-all active:scale-95 group-hover/code:ring-8 ring-blue-500/10">
                           <Play className="w-7 h-7 fill-current" />
                        </button>
                    </div>
                    
                    <div className="flex items-center p-6 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-3xl">
                       <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-6 shadow-lg shadow-blue-500/20"><MoveRight className="w-5 h-5 text-white" /></div>
                       <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest leading-loose">
                         Connects points: <span className="text-blue-500 underline decoration-blue-500/20 underline-offset-4">(1,10) -{'>'} (2,20) -{'>'} (3,25) -{'>'} (4,30)</span>
                       </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Auto X-Axis */}
              {activeTab === 'auto_x' && (
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-2xl font-black flex items-center mb-6 pb-4 border-b border-slate-50 dark:border-slate-800 text-indigo-500 uppercase tracking-tighter">
                    <Layout className="w-7 h-7 mr-4" />
                    5️⃣ Automatic X-axis Generation
                  </h3>
                  <div className="bg-indigo-500/5 p-10 rounded-[3.5rem] border border-indigo-500/10">
                    <p className="text-sm font-bold text-slate-500 mb-10 leading-relaxed pr-8">
                      "If only one list is provided, Matplotlib automatically generates the X-axis values starting from 0."
                    </p>
                    <div className="bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 mb-10 shadow-2xl">
                       <pre className="font-mono text-xs text-slate-400">
                          {`# Only Y provided
y = [10, 20, 30, 40]

plt.plot(y)

# Matplotlib assumes x = [0, 1, 2, 3]`}
                       </pre>
                    </div>
                    <button onClick={() => runDemo('auto_x_plot')} className="w-full py-6 bg-indigo-600 text-white font-black rounded-3xl shadow-xl hover:bg-indigo-500 transition-all text-xs tracking-widest uppercase flex items-center justify-center ring-offset-4 active:ring-4 ring-indigo-500/20">
                       <Zap className="w-5 h-5 mr-4" /> Initialize Auto-Index
                    </button>
                  </div>
                </div>
              )}

              {/* Tab: Markers */}
              {activeTab === 'markers' && (
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-black flex items-center mb-8 pb-4 border-b border-slate-50 dark:border-slate-800 text-blue-500 italic">
                    <Target className="w-7 h-7 mr-4" />
                    6️⃣ Adding Plot Markers
                  </h3>
                  <div className="grid grid-cols-2 gap-6 pb-6">
                     <div className="p-8 bg-blue-500/5 rounded-[3rem] border border-blue-500/10 group/marker cursor-pointer transition-all hover:bg-blue-500/10">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-6 italic underline decoration-blue-500/20 underline-offset-8">Marker Config</span>
                        <code className="text-xl font-mono font-black text-blue-500 group-hover:scale-110 transition-transform inline-block">marker="o"</code>
                     </div>
                     <div className="p-8 bg-slate-900 border border-slate-800 rounded-[3rem] flex items-center justify-center group/dot">
                        <div className="w-6 h-6 rounded-full bg-blue-500 shadow-2xl shadow-blue-500/50 group-hover:scale-150 transition-transform"></div>
                     </div>
                  </div>
                  <div className="bg-slate-900 border border-blue-500/20 rounded-[4rem] p-12 relative overflow-hidden italic shadow-2xl">
                     <pre className="font-mono text-sm leading-8 text-slate-300 relative z-10">
                        plt.plot(x, y, <span className="text-blue-500 font-black">marker="o"</span>)
                     </pre>
                  </div>
                  <button onClick={() => runDemo('markers_plot')} className="w-full py-6 bg-blue-600 text-white font-black rounded-[2.5rem] shadow-xl hover:bg-blue-500 transition-all text-xs tracking-[0.4em] uppercase italic mt-4">Render Node Highlight</button>
                </div>
              )}

              {/* Tab: Multi */}
              {activeTab === 'multi' && (
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-2xl font-black flex items-center mb-8 pb-4 border-b border-slate-50 dark:border-slate-800 text-violet-500 uppercase tracking-tighter">
                    <Layers className="w-7 h-7 mr-4" />
                    7️⃣ Multiple Data Series
                  </h3>
                  <div className="bg-violet-500/5 p-10 rounded-[4rem] border border-violet-500/10">
                     <p className="text-sm font-bold text-slate-500 mb-10 leading-relaxed pr-12">
                        "Simply call plt.plot() multiple times before calling plt.show() to overlay datasets onto a single chart."
                     </p>
                     <div className="bg-slate-950 p-10 rounded-[2.5rem] border border-violet-500/10 mb-8 shadow-2xl">
                        <pre className="font-mono text-xs text-slate-400">
                           {`plt.plot(x, y1) # Line 1
plt.plot(x, y2) # Line 2

plt.show()`}
                        </pre>
                     </div>
                     <button onClick={() => runDemo('multi_plot')} className="w-full py-5 bg-violet-700 text-white font-black rounded-3xl shadow-xl hover:bg-violet-600 transition-all text-xs tracking-widest uppercase italic flex items-center justify-center">
                        <Layers className="w-5 h-5 mr-4" /> Layer Data Series
                     </button>
                  </div>
                </div>
              )}

              {/* Tab: Labels */}
              {activeTab === 'labels' && (
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 flex-1 flex flex-col space-y-10 relative z-10">
                  <h3 className="text-2xl font-black flex items-center mb-6 pb-4 border-b border-slate-50 dark:border-slate-800 text-blue-600 italic">
                    <ClipboardCheck className="w-7 h-7 mr-4" />
                    8️⃣ Metadata: Titles & Labels
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-4 font-mono italic underline decoration-blue-500/20 underline-offset-4">X-Axis Title</span>
                        <code className="text-[10px] text-blue-600 font-black italic tracking-tight font-mono">plt.xlabel("X Values")</code>
                     </div>
                     <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-4 font-mono italic underline decoration-blue-500/20 underline-offset-4">Main Heading</span>
                        <code className="text-[10px] text-blue-600 font-black italic tracking-tight font-mono">plt.title("Sample Plot")</code>
                     </div>
                  </div>
                  <div className="bg-slate-900 border border-blue-500/20 rounded-[4rem] p-12 shadow-2xl flex-1 flex flex-col justify-center">
                     <pre className="font-mono text-sm text-slate-300 leading-relaxed italic">
                        {`plt.plot(x, y)

plt.title("Sample Plot")
plt.xlabel("X Values")
plt.ylabel("Y Values")

plt.show()`}
                     </pre>
                  </div>
                  <button onClick={() => runDemo('labels_plot')} className="w-full py-6 bg-blue-600 text-white font-black rounded-[3rem] shadow-xl hover:bg-blue-500 transition-all text-xs tracking-widest uppercase italic">Synthesize metadata</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10">
            
            {/* Real-World Traffic Simulation */}
            <div className="bg-[#0b0c10] rounded-[4rem] p-12 border border-slate-800 flex-1 min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col italic font-mono">
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] group-hover/terminal:bg-blue-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-10 px-4">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-5 text-blue-500/70 animate-pulse" />
                      <h3 className="font-black text-slate-600 uppercase text-[10px] tracking-[0.4em]">
                        PLOT_ENGINE_v1.0
                      </h3>
                    </div>
                    <div className="flex space-x-2.5">
                       <div className="w-3.5 h-3.5 rounded-full bg-blue-950 shadow-inner"></div>
                       <div className="w-3.5 h-3.5 rounded-full bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-pulse"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-4 space-y-6">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-10 opacity-30 select-none grayscale hover:grayscale-0 transition-all duration-700">
                        <MonitorPlay className="w-24 h-24 stroke-[1px] animate-bounce duration-[4000ms]" />
                        <div className="text-center">
                           <span className="block text-[8px] uppercase tracking-[0.6em] font-black text-blue-500 mb-3 underline decoration-blue-500/20 underline-offset-8">Awaiting Command...</span>
                           <span className="text-[10px] font-bold text-white/50 tracking-tighter">Initialize Visual Rasterization</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-5">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-6 duration-700 flex items-start group/line">
                              <span className="text-blue-500/40 mr-5 font-black select-none text-[8px] mt-1 shrink-0 uppercase tracking-widest italic decoration-blue-500/10 underline">system::out</span>
                              <span className={`leading-relaxed font-black transition-colors ${
                                line.includes('Success') || line.includes('Result') ? 'text-blue-400 font-black tracking-tight underline decoration-blue-500/20 underline-offset-4' :
                                line.includes('Importing') || line.includes('Executing') ? 'text-amber-400 font-bold' :
                                line.includes('Defining') || line.includes('Scanning') ? 'text-indigo-400' :
                                line.includes('Performance') ? 'text-blue-500 font-black uppercase' :
                                'text-slate-500 italic uppercase text-[9px] tracking-tight'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-12 flex justify-between items-center border-t border-white/5 mt-12 italic">
                           <div className="flex items-center gap-4">
                              <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.6)]"></span>
                              <span className="text-[9px] text-slate-700 font-black uppercase tracking-[0.4em] decoration-blue-500/10 underline">Render sequence locked</span>
                           </div>
                           <button onClick={resetConsole} className="text-[10px] text-blue-500/70 hover:text-blue-400 font-black uppercase tracking-[0.3em] transition-colors border-b border-blue-500/20">Flush Buffer</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Teaching Roadmap Visualizer */}
            <div className="bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900 p-12 rounded-[4.5rem] border border-white/10 shadow-2xl relative overflow-hidden group transition-all">
               <div className="absolute top-[-20%] right-[-20%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-black text-[10px] mb-10 flex items-center uppercase tracking-[0.5em] opacity-80 underline decoration-blue-500 underline-offset-8 italic">
                 <List className="w-5 h-5 text-blue-400 mr-4 shrink-0" />
                 Lesson Architecture
               </h4>
               <div className="space-y-6 px-2 relative z-10">
                  {[
                    "Plotting Basics", "Line Plot Mastery", "Marker Dynamics", "Colors & Styles", "Grid Systems", "Legend Management"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-14 h-12 rounded-2xl flex items-center justify-center mr-8 transition-all duration-700 hover:scale-110 ${i === 0 ? 'bg-blue-600 shadow-2xl shadow-blue-500/40 rotate-12' : 'bg-white/5 border border-white/10 opacity-30 select-none grayscale'}`}>
                          <span className={`text-[11px] font-black italic ${i === 0 ? 'text-white' : 'text-slate-600'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-black tracking-widest transition-colors italic uppercase ${i === 0 ? 'text-blue-300 underline decoration-blue-500/30 underline-offset-8' : 'text-slate-700'}`}>{path}</span>
                       {i === 0 && <ArrowRightCircle className="w-4 h-4 ml-auto text-blue-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Tips Grid */}
      <section className="max-w-6xl mx-auto mb-24 px-4 overflow-hidden">
        <div className="bg-white dark:bg-slate-900 p-16 sm:p-24 rounded-[6rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 p-20 opacity-[0.03] scale-150 rotate-12 -z-0 pointer-events-none grayscale-0 group-hover:rotate-0 transition-transform duration-[2000ms]">
             <Activity className="w-96 h-96 text-blue-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 gap-8 relative z-10 font-black italic tracking-tighter decoration-blue-500/20 underline underline-offset-[12px]">
             <div className="flex items-center">
                <div className="p-5 bg-blue-100 dark:bg-blue-900/30 rounded-[2.5rem] mr-10 shadow-2xl">
                   <Lightbulb className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                   <h2 className="text-4xl text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">
                      Plotting Specialist Advice
                   </h2>
                   <p className="text-lg text-slate-500 dark:text-slate-400 font-bold tracking-tight lowercase">Refining the art of digital visualization.</p>
                </div>
             </div>
             <div className="h-0.5 w-40 bg-blue-500/20 hidden md:block italic"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
             {[
               { t: "The Label Standard", d: "Professional visualizations MUST include a title, X-label, and Y-label. Never leave context to guessing.", i: ClipboardCheck, c: "text-blue-600" },
               { t: "Marker Strategy", d: "Use markers (marker='o') for small datasets (5-20 points) to emphasize precise coordinate locations.", i: Target, c: "text-indigo-600" },
               { t: "Grid Advantage", d: "plt.grid(True) significantly improves values estimation. Use it to aid user readability.", i: Layout, c: "text-blue-500" },
               { t: "Simplicity Principle", d: "Keep plots simple. Too many layered elements distract from the core trend mission.", i: Sparkles, c: "text-violet-600" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip transition-all">
                 <div className={`p-7 bg-slate-50 dark:bg-slate-800 rounded-[3rem] mr-10 shadow-sm group-hover/tip:bg-blue-500/10 transition-all duration-700 ${tip.c} bg-opacity-10 shrink-0`}>
                    <tip.i className="w-10 h-10 group-hover/tip:rotate-12 group-hover/tip:scale-110 transition-transform italic" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-black text-slate-900 dark:text-white mb-4 group-hover/tip:text-blue-600 transition-colors uppercase tracking-[0.4em] text-[10px] underline decoration-blue-500/10 italic">⭐ PRO TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-black tracking-tight italic">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Real-World Traffic Showcase */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
         <div className="bg-blue-600/5 rounded-[5rem] p-16 border border-blue-500/10 relative group overflow-hidden italic shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-[0.05] grayscale"><Users className="w-80 h-80 text-blue-500" /></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
               <div className="flex-1">
                  <h3 className="text-4xl font-black text-blue-600 mb-8 tracking-tighter uppercase italic">9️⃣ Website Traffic Case Study</h3>
                  <p className="text-lg font-bold text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
                     "This real-world example demonstrates how a daily traffic plot reveals growth trends throughout the business week."
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                     {[
                       { v: "Mon: 120", c: "bg-blue-500/10" },
                       { v: "Fri: 180", c: "bg-blue-600/20" }
                     ].map(v => (
                       <div key={v.v} className={`${v.c} px-6 py-4 rounded-3xl text-[10px] font-black text-blue-600 uppercase tracking-widest text-center`}>{v.v} Units</div>
                     ))}
                  </div>
                  <button onClick={() => runDemo('real_world')} className="w-full py-6 bg-blue-600 text-white font-black rounded-3xl shadow-xl hover:bg-blue-500 focus:ring-4 ring-blue-500/20 flex items-center justify-center gap-4 transition-all italic text-xs tracking-widest">
                     <MonitorPlay className="w-5 h-5 fill-current" /> GENERATE TRAFFIC TRENDS
                  </button>
               </div>
               <div className="w-full md:w-1/3 bg-slate-950 p-10 rounded-[4rem] border border-blue-500/20 shadow-2xl group/ex">
                  <div className="flex items-center justify-center h-48 relative overflow-hidden mb-6">
                     <TrendingUp className="w-24 h-24 text-blue-500/20 group-hover/ex:scale-125 transition-transform duration-[2000ms]" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[9px] font-black text-blue-500/10 tracking-[1em] uppercase">VISUALIZATION_READY</div>
                  </div>
                  <div className="h-0.5 w-full bg-blue-500/20 mb-8 px-4"></div>
                  <div className="flex flex-col gap-3 font-mono opacity-50">
                    <div className="flex justify-between text-[8px] font-black"><span>ENG_01</span> <span className="text-blue-500">STABLE</span></div>
                    <div className="flex justify-between text-[8px] font-black"><span>ENG_02</span> <span className="text-blue-500">STABLE</span></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Practice Mission Section */}
      <section className="max-w-4xl mx-auto pb-24 px-6 md:px-0">
        <div className="bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-950 p-14 sm:p-24 rounded-[6.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[120px] -z-0 pointer-events-none group-hover:scale-110 transition-transform duration-[3000ms]"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-20 items-center italic">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-5 py-2.5 bg-white/10 text-white rounded-full text-[10px] font-black mb-10 border border-white/20 tracking-[0.4em] uppercase shadow-lg backdrop-blur-md">
                🎯 Lab Challenge
              </div>
              <h2 className="text-6xl font-black text-white mb-10 leading-[1.1] tracking-tighter">
                Daily Study Performance
              </h2>
              <p className="text-blue-100 text-lg mb-14 leading-relaxed font-black pr-4 opacity-80 decoration-blue-500/20 underline underline-offset-8">
                Create a plot showing <b>Daily Study Hours</b> across 5 days (Mon-Fri). Don't forget to add a <b>circle marker</b> and full chart labeling!
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-blue-950 hover:bg-slate-100 px-16 py-8 rounded-[3.5rem] text-[13px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 uppercase tracking-widest italic mx-auto xl:mx-0 border-b-6 border-blue-900/10"
               >
                 <Play className="w-5 h-5 mr-4 fill-blue-950 group-hover/btn:rotate-45 transition-transform" />
                 Initialize Trend sequence
               </button>
            </div>

            <div className="w-full xl:w-96 relative font-mono">
               <div className="bg-[#0b0b0e] rounded-[5.5rem] border border-white/10 p-16 relative shadow-2xl overflow-hidden group-hover:rotate-2 transition-transform duration-700">
                  <div className="flex justify-between items-center mb-12 px-4 opacity-40">
                    <div className="flex gap-3">
                       <div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-ping"></div>
                       <div className="w-3.5 h-3.5 rounded-full bg-blue-500/40"></div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">STUDY_LOG_v1</span>
                  </div>

                  <div className="h-44 relative flex items-center justify-center p-8 bg-blue-500/5 rounded-[4rem] border border-blue-500/10 overflow-hidden font-black">
                     <Clock className="w-20 h-20 text-blue-500/20 group-hover:rotate-12 transition-transform duration-1000" />
                     <div className="absolute inset-x-0 bottom-4 flex justify-between px-10">
                        <div className="h-6 w-1.5 bg-blue-500/20 rounded-full animate-bounce delay-75"></div>
                        <div className="h-10 w-1.5 bg-blue-500/40 rounded-full animate-bounce"></div>
                        <div className="h-8 w-1.5 bg-blue-500/20 rounded-full animate-bounce delay-150"></div>
                     </div>
                  </div>
                  
                  <div className="mt-14 flex items-center justify-center gap-4 text-blue-500/10 text-[10px] font-black uppercase tracking-[0.5em] select-none italic underline decoration-blue-500/5 underline-offset-8">
                     <ShieldCheck className="w-4 h-4" />
                     Data validation Encrypted
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Design Signature Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-24 opacity-30 hover:opacity-100 transition-opacity">
         <p className="text-xs font-black text-slate-500 dark:text-slate-400 italic leading-relaxed tracking-widest uppercase mb-4">
            Plotting is the heartbeat of data visualization. Master the foundation, layer your data, and tell the truth through visual hierarchy.
         </p>
         <div className="h-0.5 w-24 bg-blue-500/20 mx-auto"></div>
      </footer>

    </div>
  );
}

export default MplPlotting;
