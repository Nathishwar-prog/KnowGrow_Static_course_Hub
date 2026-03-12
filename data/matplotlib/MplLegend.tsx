import React, { useState } from 'react';
import { 
  Tag, Info, Code, Terminal, 
  Layout, Maximize, Play, Lightbulb, 
  Zap, CheckCircle2, AlertCircle, Sparkles, 
  MousePointer2, BarChart, List, MoveRight, 
  HelpCircle, TrendingUp, Users, Presentation, 
  ClipboardCheck, Activity, Brush, Box, Check,
  Target, Layers, Square, Layers2, ShieldCheck, 
  MousePointer, Eye
} from 'lucide-react';

function MplLegend() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'position' | 'styling' | 'bars' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_legend':
        outLines = [
          'Initializing Plot...',
          'Setting label="Sales" for Line 1',
          'Setting label="Profit" for Line 2',
          'Executing plt.legend() -> Mapping labels to colors...',
          'Success: Legend box rendered in default top-right corner.'
        ];
        break;
      case 'position_legend':
        outLines = [
          'Scanning chart area for open space...',
          'Parameter: loc="upper left"',
          'Relocating legend box to [0.05, 0.95] coordinate space.',
          'Checking for data overlap... None found.',
          'Success: Legend moved to North-West corner.'
        ];
        break;
      case 'style_legend':
        outLines = [
          'Setting title="Company Data"...',
          'Setting fontsize=12...',
          'Setting frameon=True (Visible border)',
          'Setting shadow=True (Depth effect)',
          'Success: Stylized legend frame updated.'
        ];
        break;
      case 'bar_legend':
        outLines = [
          'import numpy as np -> OK',
          'Calculating grouped bar offsets (x-width/2)...',
          'Mapping Blue bars -> "Sales"',
          'Mapping Orange bars -> "Profit"',
          'plt.legend() -> Identification complete.',
          'Success: Grouped bar chart legends active.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Loading multiple datasets: [A, B, C]',
          'Validating unique label assignment...',
          'Applying loc="best" override.',
          'Success: Complex multi-line chart legend synchronized.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Checking student variables: [revenue, expenses]',
          'Verifying plt.legend() call... Found.',
          'Checking labels... Found "Revenue" and "Expenses"',
          'Marker detection: "o" -> Valid.',
          'Performance: 100/100. Professional descriptive chart complete!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">

      {/* 1. Emerald Identification Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl mb-8 shadow-sm border border-emerald-200 dark:border-emerald-800/50 hover:rotate-12 transition-transform cursor-pointer">
          <Tag className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-bold mb-6 border border-emerald-500/20 tracking-[0.4em] uppercase">
          Lesson 0.15
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600">Legends</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          The ultimate identification tool. Learn how to describe multiple datasets in a single chart using descriptive legends.
        </p>
      </header>

      {/* 2. Concept Foundation Overview */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20 mr-5">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight italic">What is a Matplotlib Legend?</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-emerald-500 pl-8">
                "A legend is a descriptive box that identifies and describes different datasets in a visualization using colors, markers, or lines."
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/10">
                  <span className="block text-emerald-600 font-black text-xs mb-1">Blue Line</span>
                  <span className="text-xs font-bold text-slate-500">Sales Trends</span>
                </div>
                <div className="p-6 bg-rose-500/5 rounded-3xl border border-rose-500/10">
                  <span className="block text-rose-600 font-black text-xs mb-1">Red Line</span>
                  <span className="text-xs font-bold text-slate-500">Profit Margin</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-indigo-900 p-10 rounded-[3.5rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter italic uppercase text-emerald-200">
                <Layers className="w-8 h-8 mr-4" />
                Why Legends Matter
              </h3>
              <div className="space-y-6">
                {[
                  { t: "Dataset Isolation", d: "Instantly distinguish between multiple metrics.", i: Target },
                  { t: "Enhanced Readability", d: "Users don't have to guess what colors mean.", i: Eye },
                  { t: "Professional Finish", d: "Standard requirement for business dashboards.", i: ShieldCheck },
                  { t: "Complex Analysis", d: "Essential for charts with 3+ overlapping lines.", i: Activity }
                ].map((mod, i) => (
                  <div key={i} className="flex items-center p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-crosshair">
                    <mod.i className="w-5 h-5 mr-5 text-emerald-300 shrink-0" />
                    <div>
                      <h5 className="font-bold text-sm tracking-tight">{mod.t}</h5>
                      <p className="text-[10px] text-emerald-100/50">{mod.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Lab & Console Simulation */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-8">
          <div className="flex items-center">
            <div className="p-4 bg-emerald-100 dark:bg-emerald-900/40 rounded-3xl mr-6 shadow-sm border border-emerald-200 dark:border-emerald-800">
              <Terminal className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Legend Control Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em] mt-2 underline decoration-emerald-500/30 underline-offset-4 italic">plt.legend() Studio</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.8rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Legend', icon: Code },
              { id: 'position', label: 'Positioning', icon: MousePointer },
              { id: 'styling', label: 'Styles & Titles', icon: Brush },
              { id: 'bars', label: 'Bar Charts', icon: BarChart },
              { id: 'real_world', label: 'Multi-Data', icon: Layers2 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-3xl text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
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
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 -z-0"><Tag className="w-80 h-80" /></div>

              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col relative z-10">
                  <h3 className="text-2xl font-extrabold flex items-center mb-10 pb-4 border-b border-slate-100 dark:border-slate-800 text-emerald-500 italic">
                    <Code className="w-6 h-6 mr-4" />
                    4️⃣ Basic Legend Example
                  </h3>
                  <div className="space-y-6 flex-1">
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-bold italic underline decoration-emerald-500/20 underline-offset-8">
                      "Legends only work when labels are defined inside the plot functions."
                    </p>
                    <div className="bg-slate-950 rounded-[3rem] p-10 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
                      <pre className="font-mono text-sm leading-relaxed text-slate-300">
                        plt.plot(x, sales, <code className="text-emerald-400">label="Sales"</code>)<br />
                        plt.plot(x, profit, <code className="text-emerald-400">label="Profit"</code>)<br /><br />
                        <code className="text-blue-400 font-black underline decoration-blue-500/30">plt.legend()</code><br /><br />
                        plt.show()
                      </pre>
                      <button onClick={() => runDemo('basic_legend')} className="absolute bottom-8 right-8 p-5 bg-emerald-600 text-white rounded-2xl shadow-xl hover:bg-emerald-500 transition-all active:scale-90">
                        <Play className="w-6 h-6 fill-current" />
                      </button>
                    </div>
                    <div className="p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 flex items-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500 mr-5 shrink-0" />
                      <div className="text-xs text-slate-500 font-black uppercase tracking-widest leading-loose">
                        The legend box will automatically map "Sales" and "Profit" to their respective line colors.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Position */}
              {activeTab === 'position' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 relative z-10 flex flex-col">
                  <h3 className="text-2xl font-extrabold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500 uppercase tracking-tighter italic">
                    <Maximize className="w-6 h-6 mr-4" />
                    5️⃣ Changing Legend Position
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pb-6">
                    {[
                      "upper right", "upper left", "lower right", "lower left", "center", "best"
                    ].map((loc) => (
                      <div key={loc} className="p-3 bg-slate-50 dark:bg-slate-800 border dark:border-slate-800 rounded-xl text-[10px] font-black uppercase text-slate-500 text-center hover:border-emerald-500 cursor-pointer">
                        {loc}
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
                    <span className="absolute top-4 right-8 text-[8px] font-black text-indigo-500 uppercase tracking-[0.4em]">Loc Modulo</span>
                    <pre className="font-mono text-sm leading-8 text-slate-400">
                      plt.plot(x, y, label="Dataset A")<br /><br />
                      plt.legend(<code className="text-indigo-400 font-bold italic">loc="upper left"</code>)
                    </pre>
                  </div>
                  <button onClick={() => runDemo('position_legend')} className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl hover:bg-indigo-500 transition-all text-xs tracking-[0.4em] uppercase italic mt-auto">Re-calculate Spatial Placement</button>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-10 relative z-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-extrabold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-teal-500 italic underline decoration-teal-500/20 underline-offset-8">
                    <Brush className="w-6 h-6 mr-4" />
                    6️⃣ & 7️⃣ Titles & Styling
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { p: "title", v: "'Revenue'", d: "Heads Leg." },
                      { p: "fontsize", v: "12", d: "Text Scale" },
                      { p: "frameon", v: "True", d: "Show Box" },
                      { p: "shadow", v: "True", d: "Depth FX" }
                    ].map((mod, i) => (
                      <div key={i} className="bg-teal-500/5 p-4 rounded-2xl border border-teal-500/10 text-center group cursor-pointer hover:scale-105 transition-transform">
                        <code className="text-[10px] font-black text-teal-600 uppercase block mb-1">{mod.p}</code>
                        <span className="text-[9px] font-bold text-slate-400 italic block">{mod.d}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[4rem] border border-slate-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.02] -z-0"><Brush className="w-40 h-40" /></div>
                    <pre className="font-mono text-sm leading-relaxed text-slate-300 relative z-10">
                      plt.legend(<br />
                      &nbsp;&nbsp;<span className="text-teal-400 italic">title="Company Data"</span>,<br />
                      &nbsp;&nbsp;<span className="text-teal-400 italic">fontsize=12</span>,<br />
                      &nbsp;&nbsp;<span className="text-teal-400 italic">frameon=True</span><br />
                      )
                    </pre>
                  </div>
                  <button onClick={() => runDemo('style_legend')} className="w-full py-5 bg-teal-600 text-white font-black rounded-3xl shadow-xl hover:bg-teal-500 transition-all text-xs tracking-widest uppercase italic">Render Styled Identified Box</button>
                </div>
              )}

              {/* Tab: Bars */}
              {activeTab === 'bars' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 relative z-10">
                  <h3 className="text-2xl font-extrabold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-emerald-500">
                    <BarChart className="w-6 h-6 mr-4" />
                    8️⃣ Legend with Bar Chart
                  </h3>
                  <div className="bg-emerald-500/5 p-8 rounded-[3rem] border border-emerald-500/10 relative overflow-hidden group/bar">
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-8 leading-relaxed italic pr-12">
                      "Legends are essential for grouped and multi-dataset bar charts to distinguish between categorical values like Sales vs Profit."
                    </p>
                    <div className="bg-slate-950 p-8 rounded-2xl border border-emerald-500/10 mb-8">
                      <pre className="font-mono text-xs text-slate-400 leading-normal">
                        {`plt.bar(x - 0.2, sales, label="Sales")
plt.bar(x + 0.2, profit, label="Profit")

plt.legend() # Automatically links bar colors`}
                      </pre>
                    </div>
                    <button onClick={() => runDemo('bar_legend')} className="w-full py-4 bg-emerald-600 text-white font-black rounded-2xl shadow-xl hover:bg-emerald-500 transition-all text-xs uppercase flex items-center justify-center tracking-[0.2em] italic">
                      <BarChart className="w-4 h-4 mr-3" /> Map categorical Legend
                    </button>
                  </div>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col justify-center space-y-10 relative z-10">
                  <h3 className="text-2xl font-extrabold flex items-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-4 text-emerald-500 italic">
                    <Layers2 className="w-6 h-6 mr-4" />
                    Multi-Dataset Complexity
                  </h3>
                  <div className="bg-white dark:bg-slate-950 p-8 rounded-[2.5rem] border dark:border-slate-800 flex items-center gap-10">
                    <div className="flex flex-col gap-3 shrink-0">
                      <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-lg animate-pulse"></div>
                      <div className="w-4 h-4 rounded-full bg-rose-500 opacity-30"></div>
                      <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg animate-pulse"></div>
                    </div>
                    <p className="text-sm font-bold text-slate-400 italic leading-loose pr-4">
                      "In complex charts with 3+ overlapping lines, legends become the primary navigation tool for the viewer's eyes."
                    </p>
                  </div>
                  <button onClick={() => runDemo('real_world')} className="w-full py-6 bg-emerald-600/10 border-2 border-emerald-500/20 text-emerald-500 font-black rounded-[2.5rem] shadow-xl hover:bg-emerald-600/20 transition-all text-xs uppercase tracking-widest italic group-hover:scale-[1.02]">
                    Sync Identification Layers
                  </button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8">

            {/* Legend Logic Terminal */}
            <div className="bg-[#0c0d10] rounded-[3.5rem] p-10 border border-slate-800 flex-1 min-h-[480px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] group-hover/terminal:bg-emerald-500/10 transition-all duration-1000"></div>

              <div className="relative z-10 flex flex-col h-full flex-1">
                <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-8 px-4">
                  <div className="flex items-center">
                    <Terminal className="w-6 h-6 mr-4 text-emerald-500/70 animate-pulse" />
                    <h3 className="font-bold text-slate-600 uppercase text-[10px] tracking-[0.4em] font-mono">
                      LEGEND_SYNC_CORE
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-900 shadow-inner"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
                  </div>
                </div>

                <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[350px] custom-scrollbar px-4 space-y-5">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-8 opacity-20 filter grayscale hover:grayscale-0 transition-all duration-700 select-none">
                      <Tag className="w-20 h-20 animate-bounce duration-[3000ms]" />
                      <div className="text-center">
                        <span className="block text-[8px] uppercase tracking-[0.5em] font-black text-emerald-500 mb-2 underline decoration-emerald-500/20 underline-offset-4">Buffer Awaiting Signal</span>
                        <span className="text-[10px] font-bold italic">Initialize Descriptive Box</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-emerald-500/30 mr-4 font-black select-none text-[8px] mt-1 shrink-0">LGN::MAP</span>
                          <span className={`leading-relaxed font-semibold transition-colors ${line.includes('Success') || line.includes('Correct') ? 'text-emerald-400 font-bold tracking-tight' :
                              line.includes('Scanning') || line.includes('Executing') ? 'text-amber-400 italic' :
                                line.includes('Mapping') || line.includes('Relocating') ? 'text-indigo-400' :
                                  line.includes('Result') || line.includes('Performance') ? 'text-emerald-500 font-black underline decoration-emerald-500/10' :
                                    'text-slate-500 italic uppercase text-[9px]'}`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/40 mt-10">
                        <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                          <span className="text-[8px] text-slate-600 font-black uppercase tracking-[0.3em] italic">Box Layers Locked</span>
                        </div>
                        <button onClick={resetConsole} className="text-[9px] text-emerald-500/70 hover:text-emerald-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-emerald-500/20">Purge Memory</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Teaching Order Visualizer */}
            <div className="bg-gradient-to-br from-indigo-950 via-teal-950 to-slate-900 p-10 rounded-[3.8rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]"></div>
              <h4 className="text-white font-extrabold text-[10px] mb-8 flex items-center uppercase tracking-[0.4em] opacity-80 decoration-emerald-500 underline underline-offset-8">
                <ClipboardCheck className="w-4 h-4 text-emerald-400 mr-3" />
                Metadata Sequence
              </h4>
              <div className="space-y-4 px-2 relative z-10">
                {[
                  "Matplotlib Line Plot", "Matplotlib Colors", "Matplotlib Labels", "Matplotlib Legends"
                ].map((path, i) => (
                  <div key={i} className="flex items-center group/item transition-all duration-300">
                    <div className={`w-12 h-10 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500 ${i === 3 ? 'bg-emerald-600 shadow-xl shadow-emerald-500/40 rotate-12 scale-110' : 'bg-white/5 border border-white/5 opacity-40'}`}>
                      <span className={`text-[10px] font-black ${i === 3 ? 'text-white italic' : 'text-slate-700'}`}>0{i + 1}</span>
                    </div>
                    <span className={`text-[11px] font-bold tracking-[0.1em] transition-colors ${i === 3 ? 'text-emerald-300 font-black italic' : 'text-slate-600 group-hover/item:text-slate-300'}`}>{path}</span>
                    {i === 3 && <Sparkles className="w-3.5 h-3.5 ml-auto text-emerald-400 animate-pulse" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tips & Tricks Grid */}
      <section className="max-w-6xl mx-auto mb-24 px-4">
        <div className="bg-white dark:bg-slate-900 p-12 sm:p-24 rounded-[5.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 p-16 opacity-[0.03] scale-150 rotate-12 -z-0 pointer-events-none">
            <Tag className="w-96 h-96 text-emerald-500" />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 gap-8 relative z-10">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 flex items-center tracking-tighter italic">
                Professional Identification
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium tracking-tight">Best practices for non-intrusive descriptive boxes.</p>
            </div>
            <div className="h-0.5 w-40 bg-emerald-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            {[
              { t: "The Legend Mandate", d: "If your chart contains two or more datasets, a legend is non-negotiable for clarity.", i: Check, c: "text-emerald-500" },
              { t: "Spatial Intelligence", d: "Avoid covering data. Use loc='upper left' or positional tweaks to find empty canvas space.", i: Maximize, i2: MousePointer2, c: "text-blue-500" },
              { t: "Label Brevity", d: "Keep legend labels short. Use 'Sales' or 'Profit' instead of long-winded sentences.", i: Zap, c: "text-amber-500" },
              { t: "Color Consistency", d: "Use consistent colors (e.g. Red=Expenses, Green=Profit) across your entire report.", i: Brush, c: "text-teal-500" }
            ].map((tip, i) => (
              <div key={i} className="flex items-start group/tip p-2">
                <div className={`p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.8rem] mr-10 shadow-sm group-hover/tip:bg-emerald-500/10 transition-all duration-500 ${tip.c} bg-opacity-10 shrink-0`}>
                  <tip.i className="w-9 h-9 group-hover/tip:rotate-12 group-hover/tip:scale-110 transition-transform" />
                </div>
                <div className="pt-2">
                  <h4 className="font-black text-slate-900 dark:text-white mb-4 group-hover/tip:text-emerald-600 transition-colors uppercase tracking-[0.3em] text-[10px]">⭐ PRO TIP 0{i + 1}: {tip.t}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-bold italic tracking-tight">{tip.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Practice Mission */}
      <section className="max-w-4xl mx-auto pb-24 px-6">
        <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-950 p-12 sm:p-24 rounded-[6.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[120px] -z-0 pointer-events-none group-hover:scale-110 transition-transform duration-[3000ms]"></div>

          <div className="relative z-10 flex flex-col xl:flex-row gap-20 items-center">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-5 py-2.5 bg-white/20 text-white rounded-full text-[10px] font-black mb-10 border border-white/20 tracking-[0.4em] uppercase shadow-xl">
                🎯 Lab Challenge
              </div>
              <h2 className="text-5xl font-black text-white mb-10 leading-[1.1] tracking-tighter italic">
                Business Intelligence Dashboard
              </h2>
              <p className="text-emerald-100 text-lg mb-14 leading-relaxed font-bold pr-4">
                Create a chart comparing <b>Revenue</b> vs <b>Expenses</b> with circular markers. Your mission: Add a descriptive legend with the title <b>"Company Data"</b> and place it in the <b>"upper left"</b> corner.
              </p>

              <button
                onClick={() => runDemo('exercise')}
                className="bg-white text-emerald-950 hover:bg-emerald-50 px-14 py-7 rounded-[3rem] text-[12px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 uppercase tracking-widest italic mx-auto xl:mx-0 border-b-4 border-emerald-900/10"
              >
                <Play className="w-5 h-5 mr-4 fill-emerald-900 group-hover/btn:rotate-45 transition-transform" />
                INITIALIZE SYNCED LEGENDS
              </button>
            </div>

            <div className="w-full xl:w-96 relative">
              <div className="bg-[#0b0b0e] rounded-[5.5rem] border border-white/10 p-16 relative shadow-2xl overflow-hidden group-hover:rotate-1 transition-transform duration-700">
                <div className="flex justify-between items-center mb-12 px-2 opacity-50">
                  <div className="flex gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500/40 ring-2 ring-emerald-500/10 animate-ping"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/40"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 font-extrabold uppercase tracking-[0.5em] italic">LEGEND_FS_v4</span>
                </div>

                {/* Mock Visual representation */}
                <div className="h-52 relative bg-emerald-500/5 rounded-[3.5rem] overflow-hidden border border-emerald-500/10 flex flex-col items-center justify-center group/mock">

                  {/* Legend Box Mock */}
                  <div className="absolute top-6 left-8 bg-slate-900/90 border border-emerald-500/20 p-4 rounded-2xl shadow-2xl backdrop-blur-md transform -translate-x-2 group-hover:translate-x-0 transition-transform">
                    <div className="text-[7px] font-black text-emerald-500 uppercase mb-3 tracking-widest pb-2 border-b border-emerald-500/10">Company Data</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-1 bg-emerald-500 rounded-full"></div>
                        <div className="text-[6px] font-bold text-white/50 tracking-tighter">Revenue</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-1 bg-rose-500 rounded-full"></div>
                        <div className="text-[6px] font-bold text-white/50 tracking-tighter">Expenses</div>
                      </div>
                    </div>
                  </div>

                  <TrendingUp className="w-20 h-20 text-emerald-500/20 group-hover:scale-110 transition-transform duration-1000" />
                </div>

                <div className="mt-14 flex items-center justify-center gap-4 text-emerald-500/20 text-[10px] font-black uppercase tracking-[0.4em] select-none">
                  <ShieldCheck className="w-4 h-4" />
                  Identification Locked
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Learning Roadmap Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-24 opacity-40 hover:opacity-100 transition-opacity">
        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 italic">
          Legends transform arbitrary colors into specific business dimensions. Identification is the anchor of visualization.
        </p>
      </footer>

    </div>
  );
}

export default MplLegend;
