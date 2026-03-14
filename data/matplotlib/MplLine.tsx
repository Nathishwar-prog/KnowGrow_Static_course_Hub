import React, { useState } from 'react';
import { 
  LineChart, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  AlertCircle, Sparkles, MousePointer2, 
  BarChart, List, MoveRight, HelpCircle, 
  TrendingUp, Activity, Layers, Brush, 
  Target, Check, Clock, Eye, ShieldCheck, 
  MousePointer, Palette, Scissors, MoveUpRight,
  Users
} from 'lucide-react';

function MplLine() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'markers' | 'styles' | 'multi' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_plot':
        outLines = [
          'Initializing Plot...',
          'Loading x: [1, 2, 3, 4]',
          'Loading y: [10, 20, 25, 30]',
          'Executing plt.plot(x, y)...',
          'Canvas drawn: (1,10) -> (2,20) -> (3,25) -> (4,30)',
          'Result: Linear trend visualization rendered.'
        ];
        break;
      case 'marker_demo':
        outLines = [
          'Configuring markers...',
          'Parameter: marker="o" (Circle)',
          'Mapping markers to coordinate intersections...',
          'Success: Individual data points highlighted for clarity.'
        ];
        break;
      case 'style_demo':
        outLines = [
          'Setting linestyle="--" (Dashed)',
          'Setting color="green"',
          'Updating line stroke properties...',
          'Success: Stylized green dashed line updated.'
        ];
        break;
      case 'multi_plot':
        outLines = [
          'Processing multiple datasets...',
          'Dataset 1: Sales (label="Sales")',
          'Dataset 2: Profit (label="Profit")',
          'Rendering legend box...',
          'Success: Comparative analysis chart complete.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Loading Daily Traffic Logs...',
          'Mon: 120, Tue: 150, Wed: 170, Thu: 160, Fri: 180',
          'Applying blue stroke with "o" markers...',
          'Setting labels: Day vs Visitors',
          'Success: Business website traffic trend visualized.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Validating student code...',
          'Days variable: ["Mon", "Tue", "Wed", "Thu", "Fri"] -> Found.',
          'Hours variable: [2, 3, 4, 3, 5] -> Found.',
          'plt.plot(days, hours, marker="o") call... Confirmed.',
          'Performance: 100/100. Trend analysis accuracy confirmed!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Header with Motion-based Design */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/30 rounded-[2rem] mb-8 shadow-sm border border-blue-200 dark:border-blue-800/50 hover:scale-110 transition-transform cursor-pointer group">
          <LineChart className="w-12 h-12 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-bold mb-6 border border-blue-500/20 tracking-[0.4em] uppercase">
          Lesson 0.2
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 decoration-8 underline decoration-blue-500/20 underline-offset-[12px]">Line Plot</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          The foundation of data trends. Learn how to connect data points to visualize change, growth, and continuous measurements.
        </p>
      </header>

      {/* 2. Conceptual Foundation */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/20 mr-5">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight italic">What is a Line Plot?</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-blue-500 pl-8">
                "A Line Plot displays data points connected by straight lines, typically used to show trends or changes in data over time."
              </p>
              
              <div className="space-y-4">
                 <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                    <span className="w-12 text-blue-500 font-black text-xs">JAN</span>
                    <div className="h-2 flex-1 mx-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-[40%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    </div>
                    <span className="text-xs font-bold text-slate-500">200 USD</span>
                 </div>
                 <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                    <span className="w-12 text-blue-500 font-black text-xs">FEB</span>
                    <div className="h-2 flex-1 mx-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-[55%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    </div>
                    <span className="text-xs font-bold text-slate-500">250 USD</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-900 p-10 rounded-[3.5rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter italic uppercase text-blue-200">
                 <Target className="w-8 h-8 mr-4" />
                 Common Use Cases
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   { t: "Stock Prices", d: "Market trends over time.", i: TrendingUp },
                   { t: "Temperatures", d: "Daily/seasonal changes.", i: Activity },
                   { t: "Sales Growth", d: "Quarterly performance.", i: BarChart },
                   { t: "Web Traffic", d: "Visitor monitoring.", i: Users },
                   { t: "Study Hours", d: "Personal productivity.", i: Clock },
                   { t: "Sensors", d: "Continuous monitoring.", i: ShieldCheck }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-crosshair">
                      <mod.i className="w-5 h-5 mr-4 text-blue-300 shrink-0" />
                      <div>
                         <h5 className="font-bold text-[11px] tracking-tight">{mod.t}</h5>
                         <p className="text-[9px] text-blue-100/50">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Lab & Console Simulation */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-8">
           <div className="flex items-center">
             <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-3xl mr-6 shadow-sm border border-blue-200 dark:border-blue-800">
               <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
             </div>
             <div>
               <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Trend Analysis Studio</h2>
               <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em] mt-2 underline decoration-blue-500/30 underline-offset-4 italic">plt.plot() Lab</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.8rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Syntax', icon: Code },
              { id: 'markers', label: 'Markers', icon: Target },
              { id: 'styles', label: 'Styles & Colors', icon: Palette },
              { id: 'multi', label: 'Multi-Line', icon: Layers },
              { id: 'real_world', label: 'Real Case', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-3xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30' 
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
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[580px] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 -z-0"><LineChart className="w-80 h-80" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col relative z-10">
                  <h3 className="text-2xl font-extrabold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500 italic">
                    <Code className="w-6 h-6 mr-4" />
                    3ï¸âƒ£ & 4ï¸âƒ£ Basic Line Plot
                  </h3>
                  <div className="space-y-6 flex-1">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-3xl">
                          <span className="block text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 italic">Parameter X</span>
                          <code className="text-xs font-bold text-slate-500">X-axis values</code>
                       </div>
                       <div className="p-6 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-3xl">
                          <span className="block text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2 italic">Parameter Y</span>
                          <code className="text-xs font-bold text-slate-500">Y-axis values</code>
                       </div>
                    </div>
                    <div className="bg-slate-950 rounded-[3rem] p-10 border border-blue-500/20 shadow-2xl relative">
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                           plt.plot(x, y)<br/><br/>
                           plt.title("Basic Line Plot")<br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_plot')} className="absolute bottom-8 right-8 p-5 bg-blue-600 text-white rounded-2xl shadow-xl hover:bg-blue-500 transition-all active:scale-95">
                           <Play className="w-6 h-6 fill-current" />
                        </button>
                    </div>
                    <div className="flex items-start p-6 bg-blue-500/5 rounded-3xl border border-blue-500/10">
                       <CheckCircle2 className="w-6 h-6 text-blue-500 mr-4 shrink-0 mt-1" />
                       <p className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed italic">
                         "The plot connects points in sequence: (x1, y1) -{'>'} (x2, y2) -{'>'} (x3, y3)..."
                       </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Markers */}
              {activeTab === 'markers' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 relative z-10 flex flex-col">
                  <h3 className="text-2xl font-extrabold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500">
                    <Target className="w-6 h-6 mr-4" />
                    5ï¸âƒ£ Adding Markers
                  </h3>
                  <div className="grid grid-cols-5 gap-2">
                     {[
                       { m: "o", l: "Circle" }, { m: "s", l: "Square" }, { m: "^", l: "Triangle" }, 
                       { m: "*", l: "Star" }, { m: "x", l: "Cross" }
                     ].map((marker) => (
                       <div key={marker.m} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border dark:border-slate-700 text-center hover:border-indigo-500 transition-colors cursor-pointer group">
                          <span className="text-2xl font-black text-indigo-500 block mb-1 group-hover:scale-125 transition-transform">{marker.m}</span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">{marker.l}</span>
                       </div>
                     ))}
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
                     <pre className="font-mono text-sm leading-8 text-slate-300">
                        plt.plot(x, y, <code className="text-indigo-400 italic">marker="o"</code>)
                     </pre>
                  </div>
                  <button onClick={() => runDemo('marker_demo')} className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl hover:bg-indigo-500 transition-all text-xs tracking-widest uppercase italic mt-auto">Highlight Intersection Points</button>
                </div>
              )}

              {/* Tab: Styles */}
              {activeTab === 'styles' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 relative z-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-extrabold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-violet-500 italic">
                    <Brush className="w-6 h-6 mr-4" />
                    6ï¸âƒ£ & 7ï¸âƒ£ Line Style & Color
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-violet-500/5 p-8 rounded-[3rem] border border-violet-500/10">
                        <span className="text-[10px] font-black text-violet-600 uppercase tracking-widest block mb-4 italic underline decoration-violet-500/20 underline-offset-8">Common Styles</span>
                        <div className="space-y-4">
                           <div className="flex items-center justify-between"><code className="text-xs font-bold text-slate-500">"-"</code> <div className="h-0.5 w-24 bg-slate-300"></div></div>
                           <div className="flex items-center justify-between"><code className="text-xs font-bold text-slate-500">"--"</code> <div className="h-0.5 w-24 border-t-2 border-dashed border-slate-300"></div></div>
                           <div className="flex items-center justify-between"><code className="text-xs font-bold text-slate-500">":"</code> <div className="h-0.5 w-24 border-t-2 border-dotted border-slate-300"></div></div>
                        </div>
                     </div>
                     <div className="bg-violet-950 p-8 rounded-[3rem] border border-violet-500/10 flex items-center justify-center">
                        <pre className="font-mono text-xs text-violet-200">
                           plt.plot(x, y,<br/>
                           &nbsp;&nbsp;linestyle="--",<br/>
                           &nbsp;&nbsp;color="green")
                        </pre>
                     </div>
                  </div>
                  <button onClick={() => runDemo('style_demo')} className="w-full py-5 bg-violet-700 text-white font-black rounded-3xl shadow-xl hover:bg-violet-600 transition-all text-xs tracking-[0.3em] uppercase italic">Render Stylized Pattern</button>
                </div>
              )}

              {/* Tab: Multi */}
              {activeTab === 'multi' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-6 relative z-10">
                  <h3 className="text-2xl font-extrabold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <Layers className="w-6 h-6 mr-4" />
                    8ï¸âƒ£ Plotting Multiple Lines
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-700/50">
                     <p className="text-sm font-bold text-slate-500 mb-6 leading-relaxed italic pr-12">
                        "Simply call plt.plot() multiple times before plt.show(). Use labels and legends to distinguish them."
                     </p>
                     <div className="bg-slate-950 p-8 rounded-2xl border border-blue-500/10 mb-6">
                        <pre className="font-mono text-xs text-slate-300">
                           {`plt.plot(x, sales, label="Sales")
plt.plot(x, profit, label="Profit")

plt.legend()`}
                        </pre>
                     </div>
                     <button onClick={() => runDemo('multi_plot')} className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl hover:bg-blue-500 transition-all text-xs uppercase italic tracking-widest flex items-center justify-center">
                        <Layers className="w-4 h-4 mr-3" /> Compare Datasets
                     </button>
                  </div>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col justify-center space-y-8 relative z-10">
                  <h3 className="text-2xl font-extrabold flex items-center mb-4 text-blue-500 italic">
                    <Activity className="w-6 h-6 mr-4" />
                    9ï¸âƒ£ Traffic Trends Case Study
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white dark:bg-slate-950 p-6 rounded-[2rem] border dark:border-slate-800">
                        <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-4">Input Logs</span>
                        <div className="space-y-2">
                           {["Mon: 120", "Tue: 150", "Wed: 170"].map(v => (
                             <div key={v} className="text-[10px] font-bold text-slate-500 bg-slate-50 dark:bg-slate-900 p-2 rounded-lg">{v}</div>
                           ))}
                        </div>
                     </div>
                     <div className="bg-blue-600/5 border-2 border-blue-500/10 p-6 rounded-[2.5rem] flex flex-col items-center justify-center">
                        <TrendingUp className="w-12 h-12 text-blue-500 mb-4 animate-bounce" />
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">Upward Trend</span>
                     </div>
                  </div>
                  <button onClick={() => runDemo('real_world')} className="w-full py-6 bg-blue-600 text-white font-black rounded-[2.5rem] shadow-xl hover:bg-blue-500 transition-all text-xs uppercase tracking-[0.5em] italic">Generate Traffic Report</button>
                </div>
              )}

            </div>
          </div>

          {/* Console Simulation Side */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8">
            <div className="bg-[#0c0d10] rounded-[3.5rem] p-10 border border-slate-800 flex-1 min-h-[480px] shadow-2xl relative overflow-hidden group/terminal flex flex-col text-white">
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] group-hover/terminal:bg-blue-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-8 px-4">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-blue-500/70 animate-pulse" />
                      <h3 className="font-bold text-slate-600 uppercase text-[10px] tracking-[0.4em] font-mono">
                        LINE_ENGINE_v2
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-3 h-3 rounded-full bg-blue-900 shadow-inner"></div>
                       <div className="w-3 h-3 rounded-full bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[350px] custom-scrollbar px-4 space-y-5">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-8 opacity-20 filter grayscale hover:grayscale-0 transition-all duration-700 select-none">
                        <LineChart className="w-20 h-20 animate-bounce [animation-duration:3000ms]" />
                        <div className="text-center">
                           <span className="block text-[8px] uppercase tracking-[0.5em] font-black text-blue-500 mb-2 underline decoration-blue-500/20 underline-offset-4 font-mono">Engine Idling...</span>
                           <span className="text-[10px] font-bold italic text-white/50">Awaiting Signal</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-blue-500/30 mr-4 font-black select-none text-[8px] mt-1 shrink-0">L_ENG::EXEC</span>
                              <span className={`leading-relaxed font-semibold transition-colors ${
                                line.includes('Success') || line.includes('Result') ? 'text-blue-400 font-bold tracking-tight' :
                                line.includes('Initializing') || line.includes('Executing') ? 'text-amber-400 italic font-mono' :
                                line.includes('Configuring') || line.includes('Mapping') ? 'text-indigo-400' :
                                line.includes('Performance') ? 'text-blue-500 font-black underline decoration-blue-500/10' :
                                'text-slate-500 italic uppercase text-[9px]'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/40 mt-10">
                           <div className="flex items-center gap-3">
                              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                              <span className="text-[8px] text-slate-600 font-black uppercase tracking-widest italic tracking-[0.3em]">Trend Rendering Complete</span>
                           </div>
                           <button onClick={resetConsole} className="text-[9px] text-blue-500/70 hover:text-blue-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-blue-500/20">Flush Buffer</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Teaching Order Visualizer */}
            <div className="bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900 p-10 rounded-[3.8rem] border border-white/5 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-extrabold text-[10px] mb-8 flex items-center uppercase tracking-[0.5em] opacity-80 decoration-blue-500 underline underline-offset-8">
                 <List className="w-4 h-4 text-blue-400 mr-3" />
                 Lesson Architecture
               </h4>
               <div className="space-y-4 px-2 relative z-10">
                  {[
                    "Pyplot Fundamentals", "Line Plot Mastery", "Marker Dynamics", "Colors & Styles", "Grid Systems", "Legend Management"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-12 h-10 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500 ${i === 1 ? 'bg-blue-600 shadow-xl shadow-blue-500/40 rotate-12 scale-110' : 'bg-white/5 border border-white/5 opacity-40'}`}>
                          <span className={`text-[10px] font-black ${i === 1 ? 'text-white italic' : 'text-slate-700'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-extrabold tracking-[0.1em] transition-colors ${i === 1 ? 'text-blue-300 italic underline decoration-blue-500/20 underline-offset-4' : 'text-slate-600 group-hover/item:text-slate-300'}`}>{path}</span>
                       {i === 1 && <MoveUpRight className="w-3.5 h-3.5 ml-auto text-blue-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Tips Grid */}
      <section className="max-w-6xl mx-auto mb-24 px-4">
        <div className="bg-white dark:bg-slate-900 p-12 sm:p-24 rounded-[5.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 p-16 opacity-[0.03] scale-150 rotate-12 -z-0 pointer-events-none">
             <LineChart className="w-96 h-96 text-blue-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 gap-8 relative z-10">
             <div className="flex items-center">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-3xl mr-8">
                   <Lightbulb className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                   <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tighter italic">
                      Trend Expert Advice
                   </h2>
                   <p className="text-lg text-slate-500 dark:text-slate-400 font-medium tracking-tight">Mastering continuous data storytelling.</p>
                </div>
             </div>
             <div className="h-0.5 w-40 bg-blue-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
             {[
               { t: "Marker Strategy", d: "Use markers for small datasets. They help highlight individual precise points.", i: Target, c: "text-blue-500" },
               { t: "Continuous Focus", d: "Line plots are best for Time Series, Growth trends, and Sensor logs.", i: Clock, c: "text-indigo-500" },
               { t: "The Grid Advantage", d: "Adding plt.grid(True) significantly improves readability for value estimation.", i: Scissors, i2: List, c: "text-violet-500" },
               { t: "Legend Mandate", d: "Always use legends when plotting multiple trends to maintain professional clarity.", i: ShieldCheck, c: "text-blue-600" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip">
                 <div className={`p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.8rem] mr-10 shadow-sm group-hover/tip:bg-blue-500/10 transition-all duration-500 ${tip.c} bg-opacity-10 shrink-0`}>
                    <tip.i className="w-9 h-9 group-hover/tip:rotate-12 group-hover/tip:scale-110 transition-transform" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-black text-slate-900 dark:text-white mb-4 group-hover/tip:text-blue-600 transition-colors uppercase tracking-[0.3em] text-[10px]">â­ PRO TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-bold italic tracking-tight">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Practice Mission */}
      <section className="max-w-4xl mx-auto pb-24 px-6">
        <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-950 p-12 sm:p-24 rounded-[6.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[120px] -z-0 pointer-events-none group-hover:scale-110 transition-transform [transition-duration:3000ms]"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-20 items-center">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-5 py-2.5 bg-white/20 text-white rounded-full text-[10px] font-black mb-10 border border-white/20 tracking-[0.4em] uppercase shadow-xl backdrop-blur-md">
                ðŸŽ¯ Lab Challenge
              </div>
              <h2 className="text-5xl font-black text-white mb-10 leading-[1.1] tracking-tighter italic">
                Daily Study Performance
              </h2>
              <p className="text-blue-100 text-lg mb-14 leading-relaxed font-bold pr-4 italic">
                Visualize your week! Create a line plot showing <b>Daily Study Hours</b> with circular <b>"o" markers</b> to highlight individual session data.
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-blue-950 hover:bg-blue-50 px-14 py-7 rounded-[3rem] text-[12px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 uppercase tracking-[0.4em] italic mx-auto xl:mx-0 border-b-4 border-blue-900/10"
               >
                 <Play className="w-5 h-5 mr-4 fill-blue-900 group-hover/btn:rotate-45 transition-transform" />
                 Initialize Trend Sequence
               </button>
            </div>

            <div className="w-full xl:w-96 relative">
               <div className="bg-[#0b0b0e] rounded-[5.5rem] border border-white/10 p-16 relative shadow-2xl overflow-hidden group-hover:rotate-1 transition-transform duration-700">
                  <div className="flex justify-between items-center mb-12 px-2 opacity-50">
                    <div className="flex gap-2.5">
                       <div className="w-3 h-3 rounded-full bg-blue-500/40 ring-2 ring-blue-500/10 animate-ping"></div>
                       <div className="w-3 h-3 rounded-full bg-blue-500/40"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 font-extrabold uppercase tracking-[0.5em] italic">TREND_CORE_v2</span>
                  </div>

                  <div className="h-52 relative flex items-center justify-center p-8 bg-blue-500/5 rounded-[4rem] border border-blue-500/10 overflow-hidden group/mock">
                     <div className="absolute inset-0 opacity-10">
                        <div className="h-[1px] w-full bg-blue-500/30 absolute top-1/4"></div>
                        <div className="h-[1px] w-full bg-blue-500/30 absolute top-1/2"></div>
                        <div className="h-[1px] w-full bg-blue-500/30 absolute top-3/4"></div>
                     </div>
                     <TrendingUp className="w-24 h-24 text-blue-500/30 group-hover:scale-125 group-hover:rotate-6 transition-all duration-1000" />
                     
                     {/* Data Point Mocks */}
                     <div className="absolute top-[60%] left-[20%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                     <div className="absolute top-[40%] left-[50%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                     <div className="absolute top-[20%] left-[80%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  
                  <div className="mt-14 flex items-center justify-center gap-4 text-blue-500/20 text-[10px] font-black uppercase tracking-[0.4em] select-none">
                     <ShieldCheck className="w-4 h-4" />
                     Trend Analysis Encrypted
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer Navigation */}
      <footer className="max-w-4xl mx-auto text-center pb-24 opacity-40 hover:opacity-100 transition-opacity">
         <p className="text-xs font-bold text-slate-500 dark:text-slate-400 italic">
            Line plots are the vital heartbeat of data visualization. Master them first to unlock the power of professional storytelling.
         </p>
      </footer>

    </div>
  );
}

export default MplLine;
