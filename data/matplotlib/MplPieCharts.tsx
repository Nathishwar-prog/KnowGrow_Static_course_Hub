import React, { useState } from 'react';
import { 
  PieChart as PieChartIcon, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  Sparkles, MousePointer2, Palette, 
  Activity, Layers, List, Check, Eye, 
  ShieldCheck, Percent, Trophy, Globe,
  Coffee, Laptop, Scissors, Target
} from 'lucide-react';

function MplPieCharts() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'labels' | 'percentage' | 'explode' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_pie':
        outLines = [
          'Initializing Canvas...',
          'Data: [40, 25, 20, 15]',
          'Calculating sum: 100',
          'Computing slice angles (360° total)...',
          'Executing plt.pie(data)...',
          'Success: Simple proportional distribution rendered.'
        ];
        break;
      case 'label_pie':
        outLines = [
          'Mapping labels: ["Python", "Java", "C++", "JS"]',
          'Aligning text rotation to slice centroids...',
          'Rendering labels outward from center...',
          'Success: Named category identification active.'
        ];
        break;
      case 'pct_pie':
        outLines = [
          'Formatting: autopct="%1.1f%%"',
          'Calculating string: Python -> "40.0%"',
          'Calculating string: Java -> "25.0%"',
          'Rendering floating labels inside slices...',
          'Success: Percentage overlays synchronized.'
        ];
        break;
      case 'explode_pie':
        outLines = [
          'Parameter: explode=[0.1, 0, 0, 0]',
          'Offsetting Slice 0 by 10% from radius origin...',
          'Generating visual separation...',
          'Success: Primary category (Python) highlighted.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Loading Expense Dataset...',
          'Rent: 500, Food: 300, Transport: 200, Fun: 150',
          'Calculating autopct distribution...',
          'Setting title: "Monthly Expenses"',
          'Success: Financial distribution visualized.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Validating student variables: [time, labels]',
          'Time sum check: 8+3+2+3+8 = 24 hours -> OK.',
          'Checking autopct parameter... Found.',
          'Verifying label mapping... 5 categories match.',
          'Performance: 100/100. Daily cycle visualized flawlessly!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Ultra-Premium Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-5 bg-rose-100 dark:bg-rose-900/40 rounded-[2.5rem] mb-10 shadow-sm border border-rose-200 dark:border-rose-800/50 hover:rotate-12 transition-transform cursor-pointer group">
          <PieChartIcon className="w-14 h-14 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-[10px] font-bold mb-6 border border-rose-500/20 tracking-[0.4em] uppercase">
          Lesson 0.5
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-500 to-amber-600 decoration-8 underline decoration-rose-500/20 underline-offset-[12px]">Pie Charts</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold">
          Visualize percentages and distributions. Learn how to divide a circle into proportions to tell a story of contribution.
        </p>
      </header>

      {/* 2. Conceptual Distribution Foundation */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-rose-500 rounded-2xl shadow-lg shadow-rose-500/20 mr-5">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight italic">What is a Pie Chart?</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-rose-500 pl-8">
                "A circular chart that shows the proportion of categories within a dataset. Each slice represents a percentage of the total whole."
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50 flex flex-col items-center">
                    <Laptop className="w-6 h-6 text-rose-500 mb-4" />
                    <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-1">Python</span>
                    <span className="text-xs font-bold text-slate-500 italic underline decoration-rose-500/20 underline-offset-4">40.0% Share</span>
                 </div>
                 <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50 flex flex-col items-center">
                    <Coffee className="w-6 h-6 text-orange-500 mb-4" />
                    <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-1">Java</span>
                    <span className="text-xs font-bold text-slate-500 italic underline decoration-orange-500/20 underline-offset-4">25.0% Share</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-600 via-orange-700 to-amber-900 p-10 rounded-[3.5rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000 font-black italic"></div>
            <div className="relative z-10 text-white">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter italic uppercase text-rose-200">
                 <ShieldCheck className="w-8 h-8 mr-4" />
                 Distribution Benefits
               </h3>
               <div className="space-y-6">
                 {[
                   { t: "Wholistic View", d: "Instantly see how parts contribute to the whole.", i: Globe },
                   { t: "Fractional Precision", d: "Display exact percentages for each category.", i: Percent },
                   { t: "Visual Hierarchy", d: "Size of slice intuitively shows importance.", i: Layers },
                   { t: "Trend Comparison", d: "Ideal for market share or expense reports.", i: Activity }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-4 bg-white/10 rounded-[2rem] border border-white/10 hover:bg-white/20 transition-all cursor-crosshair">
                      <mod.i className="w-6 h-6 mr-5 text-rose-300 shrink-0" />
                      <div>
                         <h5 className="font-bold text-sm tracking-tight">{mod.t}</h5>
                         <p className="text-[10px] text-rose-100/50 italic">{mod.d}</p>
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
             <div className="p-4 bg-rose-100 dark:bg-rose-900/40 rounded-[2.5rem] mr-6 shadow-sm border border-rose-200 dark:border-rose-800">
               <Terminal className="w-8 h-8 text-rose-600 dark:text-rose-400" />
             </div>
             <div>
               <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight underline decoration-rose-500/20 underline-offset-8">Pie Slicing Studio</h2>
               <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em] mt-2 italic">plt.pie() Control Center</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basics', icon: Code },
              { id: 'labels', label: 'Labels', icon: List },
              { id: 'percentage', label: 'Pct Overlay', icon: Percent },
              { id: 'explode', label: 'Explode', icon: Scissors },
              { id: 'real_world', label: 'Expenses', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[3rem] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/30' 
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
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[4.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[580px] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 -z-0"><PieChartIcon className="w-80 h-80 text-rose-500" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col relative z-10">
                  <h3 className="text-2xl font-extrabold flex items-center mb-10 pb-4 border-b border-slate-100 dark:border-slate-800 text-rose-500 tracking-tighter italic">
                    <Code className="w-6 h-6 mr-4" />
                    3️⃣ & 4️⃣ Basic Pie Chart
                  </h3>
                  <div className="space-y-6 flex-1">
                    <div className="p-6 bg-rose-500/5 rounded-3xl border border-rose-500/10 italic">
                       <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest block mb-1">Numerical Input</span>
                       <code className="text-xs font-bold text-slate-500">data = [40, 25, 20, 15]</code>
                    </div>
                    <div className="bg-slate-950 rounded-[4rem] p-10 border border-rose-500/20 shadow-2xl relative group/code overflow-hidden">
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                           data = [40, 25, 20, 15]<br/><br/>
                           <code className="text-rose-400 font-black underline decoration-rose-500/20 underline-offset-8 italic">plt.pie(data)</code><br/><br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_pie')} className="absolute bottom-8 right-8 p-6 bg-rose-600 text-white rounded-[2rem] shadow-xl hover:bg-rose-500 transition-all active:scale-95 group-hover/code:ring-4 ring-rose-500/20">
                           <Play className="w-6 h-6 fill-current" />
                        </button>
                    </div>
                    <div className="flex items-start p-6 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-3xl">
                       <ShieldCheck className="w-6 h-6 text-rose-600 mr-5 shrink-0" />
                       <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest leading-loose italic">
                         The chart will display four slices, each representing the relative proportion of your numerical data.
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Labels */}
              {activeTab === 'labels' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 relative z-10 flex flex-col">
                  <h3 className="text-2xl font-extrabold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-orange-500 italic uppercase tracking-tighter">
                    <List className="w-6 h-6 mr-4" />
                    5️⃣ Adding Slice Labels
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                     {["Python", "Java", "C++", "JavaScript"].map((lang, i) => (
                       <div key={lang} className="p-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700/50 rounded-2xl flex items-center shadow-sm">
                          <span className={`w-3 h-3 rounded-full mr-4 ${['bg-blue-500', 'bg-orange-500', 'bg-green-500', 'bg-red-500'][i]}`}></span>
                          <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic">{lang}</span>
                       </div>
                     ))}
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[4rem] border border-orange-500/20 shadow-2xl relative overflow-hidden">
                     <pre className="font-mono text-sm leading-8 text-slate-300">
                        labels = ["Python", "Java", "C++", "JS"]<br/>
                        plt.pie(data, <code className="text-orange-400 font-black italic">labels=labels</code>)
                     </pre>
                  </div>
                  <button onClick={() => runDemo('label_pie')} className="w-full py-5 bg-orange-600 text-white font-black rounded-[2rem] shadow-xl hover:bg-orange-500 transition-all text-xs tracking-widest uppercase italic mt-auto">Map Identifiers to Whole</button>
                </div>
              )}

              {/* Tab: Percentage */}
              {activeTab === 'percentage' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 relative z-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-extrabold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-rose-500 italic underline decoration-rose-500/10 underline-offset-8">
                    <Percent className="w-6 h-6 mr-4" />
                    6️⃣ Displaying Percentages
                  </h3>
                  <div className="p-8 bg-rose-500/5 rounded-[3rem] border border-rose-500/10 mb-4 group/pct cursor-pointer transition-transform">
                     <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest block mb-4">Precision Parameter</span>
                     <code className="text-lg font-mono font-black text-rose-500 group-hover:scale-110 transition-transform inline-block">autopct="%1.1f%%"</code>
                     <p className="text-[10px] font-bold text-slate-400 mt-4 leading-relaxed italic">
                        The "%1.1f%%" format code displays percentages with <span className="text-rose-600 underline">one decimal place</span> directly on the slices.
                     </p>
                  </div>
                  <div className="bg-slate-900 border border-rose-500/20 rounded-[4rem] p-10 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-10 opacity-[0.03] -z-0"><Percent className="w-32 h-32" /></div>
                     <pre className="font-mono text-sm leading-relaxed text-slate-300 relative z-10">
                        plt.pie(data, <br/>
                        &nbsp;&nbsp;labels=labels, <br/>
                        &nbsp;&nbsp;<span className="text-rose-400 font-black">autopct="%1.1f%%"</span>)
                     </pre>
                  </div>
                  <button onClick={() => runDemo('pct_pie')} className="w-full py-5 bg-rose-600 text-white font-black rounded-[3rem] shadow-xl hover:bg-rose-500 transition-all text-xs tracking-[0.3em] uppercase italic mt-4">Compute Fractional Overlays</button>
                </div>
              )}

              {/* Tab: Explode */}
              {activeTab === 'explode' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 relative z-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-extrabold flex items-center mb-10 pb-4 border-b border-slate-100 dark:border-slate-800 text-amber-500 italic uppercase">
                    <Scissors className="w-6 h-6 mr-4" />
                    8️⃣ Exploding a Slice
                  </h3>
                  <div className="bg-amber-500/5 p-10 rounded-[4rem] border border-amber-500/10 relative overflow-hidden group/exp">
                     <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-8 leading-relaxed italic pr-12">
                        "The explode parameter separates one or more slices from the main pie chart body for maximum emphasis."
                     </p>
                     <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-amber-500/20 mb-8">
                        <pre className="font-mono text-xs text-slate-400">
                           explode = [0.1, 0, 0, 0]<br/><br/>
                           plt.pie(data, <br/>
                           &nbsp;&nbsp;labels=labels, <br/>
                           &nbsp;&nbsp;explode=explode)
                        </pre>
                     </div>
                     <button onClick={() => runDemo('explode_pie')} className="w-full py-5 bg-amber-600 text-white font-black rounded-3xl shadow-xl hover:bg-amber-500 transition-all text-xs uppercase italic tracking-widest flex items-center justify-center">
                        <Scissors className="w-5 h-5 mr-4" /> Fracture identified category
                     </button>
                  </div>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col justify-center space-y-8 relative z-10">
                  <h3 className="text-2xl font-extrabold flex items-center mb-6 border-b dark:border-slate-800 pb-4 text-rose-600 italic tracking-tighter uppercase">
                    <Activity className="w-6 h-6 mr-4" />
                    9️⃣ Monthly Expense Distribution
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center">
                        <span className="text-[40px] font-black text-rose-500 mb-2 italic">"$500"</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic underline decoration-rose-500/30 underline-offset-4 font-mono">Rent Allocation</span>
                     </div>
                     <div className="bg-rose-600/5 border border-rose-500/20 p-8 rounded-[3rem] flex flex-col items-center justify-center group/exp">
                        <Globe className="w-12 h-12 text-rose-500 mb-4 animate-spin-slow" />
                        <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest italic text-center leading-relaxed">Financial Breakdown active</span>
                     </div>
                  </div>
                  <button onClick={() => runDemo('real_world')} className="w-full py-6 bg-rose-600 text-white font-black rounded-[4rem] shadow-xl hover:bg-rose-500 transition-all text-xs tracking-widest uppercase italic">Synthesize Allocation Map</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8">
            
            {/* Legend Logic Terminal */}
            <div className="bg-[#0c0d10] rounded-[4rem] p-10 border border-slate-800 flex-1 min-h-[480px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-[100px] group-hover/terminal:bg-rose-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-8 px-4">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-rose-500/70 animate-pulse" />
                      <h3 className="font-bold text-slate-600 uppercase text-[10px] tracking-[0.4em] font-mono italic">
                        PIE_SLICE_CORE_v5
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-3 h-3 rounded-full bg-rose-950 shadow-inner"></div>
                       <div className="w-3 h-3 rounded-full bg-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.4)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[350px] custom-scrollbar px-4 space-y-5">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-10 opacity-20 filter grayscale hover:grayscale-0 transition-all duration-700 select-none italic font-black">
                        <PieChartIcon className="w-24 h-24 animate-bounce duration-[4000ms]" />
                        <div className="text-center">
                           <span className="block text-[8px] uppercase tracking-[0.5em] font-black text-rose-500 mb-2 font-mono">Awaiting Proportional Data</span>
                           <span className="text-[10px] font-bold text-white/50 underline decoration-rose-500/20 underline-offset-8">Execute Distribution Sequence</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-rose-500/30 mr-4 font-black select-none text-[8px] mt-1 shrink-0 italic tracking-widest font-mono">PIE::PROC</span>
                              <span className={`leading-relaxed font-semibold transition-colors ${
                                line.includes('Success') || line.includes('Correct') ? 'text-rose-400 font-extrabold tracking-tight' :
                                line.includes('Initializing') || line.includes('Scanning') ? 'text-amber-400 italic' :
                                line.includes('Calculating') || line.includes('Computing') ? 'text-blue-400' :
                                line.includes('Performance') ? 'text-rose-500 font-black underline decoration-rose-500/10' :
                                'text-slate-500 italic uppercase text-[9px]'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/40 mt-10 italic">
                           <div className="flex items-center gap-3">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.5)]"></span>
                              <span className="text-[8px] text-slate-600 font-extrabold uppercase tracking-[0.3em] font-mono underline underline-offset-4 decoration-rose-500/10">Whole Ratio Locked</span>
                           </div>
                           <button onClick={resetConsole} className="text-[9px] text-rose-500/70 hover:text-rose-400 font-black uppercase tracking-[0.2em] transition-colors font-mono">Flush Buffer</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Teaching Order Visualizer */}
            <div className="bg-gradient-to-br from-rose-950 via-amber-950 to-slate-900 p-10 rounded-[3.8rem] border border-white/5 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-rose-500/5 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-extrabold text-[10px] mb-8 flex items-center uppercase tracking-[0.5em] opacity-80 underline decoration-rose-500 underline-offset-8 italic">
                 <List className="w-4 h-4 text-rose-400 mr-3" />
                 Course Sequence
               </h4>
               <div className="space-y-4 px-2 relative z-10">
                  {[
                    "Matplotlib Line Plot", "Matplotlib Bar Chart", "Matplotlib Histogram", "Matplotlib Scatter Plot", "Matplotlib Pie Chart"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-12 h-10 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500 ${i === 4 ? 'bg-rose-600 shadow-xl shadow-rose-500/40 rotate-12 scale-110' : 'bg-white/5 border border-white/5 opacity-40'}`}>
                          <span className={`text-[10px] font-black ${i === 4 ? 'text-white italic' : 'text-slate-500'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-extrabold tracking-[0.1em] transition-colors ${i === 4 ? 'text-rose-300 italic underline decoration-rose-500/20 underline-offset-4' : 'text-slate-600 group-hover/item:text-slate-300 font-semibold'}`}>{path}</span>
                       {i === 4 && <Sparkles className="w-3.5 h-3.5 ml-auto text-rose-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Advice Grid */}
      <section className="max-w-6xl mx-auto mb-24 px-4">
        <div className="bg-white dark:bg-slate-900 p-12 sm:p-24 rounded-[5.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 p-16 opacity-[0.03] scale-150 rotate-12 -z-0 pointer-events-none">
             <PieChartIcon className="w-96 h-96 text-rose-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 gap-8 relative z-10 font-black italic tracking-tighter">
             <div className="flex items-center">
                <div className="p-4 bg-rose-100 dark:bg-rose-900/30 rounded-3xl mr-8 shadow-xl">
                   <Lightbulb className="w-10 h-10 text-rose-600 dark:text-rose-400" />
                </div>
                <div>
                   <h2 className="text-4xl text-slate-900 dark:text-white mb-2 underline decoration-rose-500/20 underline-offset-8">
                      Pie Chart Best Practices
                   </h2>
                   <p className="text-lg text-slate-500 dark:text-slate-400 font-medium tracking-tight">How to visualize fractions without 100% confusion.</p>
                </div>
             </div>
             <div className="h-0.5 w-40 bg-rose-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
             {[
               { t: "The Slicing Limit", d: "Avoid too many categories. 3–6 slices is the sweet spot for professional readability.", i: Target, c: "text-rose-500" },
               { t: "Strategic Explosion", d: "Use explode=[0.1, 0, ...] to fracture the most important category for emphasis.", i: Scissors, c: "text-amber-500" },
               { t: "The Percent Mandate", d: "Always include percentages using autopct='%1.1f%%' to anchor visual guessing.", i: Percent, c: "text-orange-500" },
               { t: "Color Differentiation", d: "Choose distinct, high-contrast colors to help users differentiate thin slices.", i: Palette, c: "text-rose-600" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip">
                 <div className={`p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.8rem] mr-10 shadow-sm group-hover/tip:bg-rose-500/10 transition-all duration-500 ${tip.c} bg-opacity-10 shrink-0`}>
                    <tip.i className="w-9 h-9 group-hover/tip:rotate-12 group-hover/tip:scale-110 transition-transform italic" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-black text-slate-900 dark:text-white mb-4 group-hover/tip:text-rose-600 transition-colors uppercase tracking-[0.3em] text-[10px]">⭐ PRO TIP 0{i + 1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-black italic tracking-tight">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Practice Mission */}
      <section className="max-w-4xl mx-auto pb-24 px-6 md:px-0">
        <div className="bg-gradient-to-br from-rose-600 via-orange-700 to-slate-950 p-12 sm:p-24 rounded-[6.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[120px] -z-0 pointer-events-none group-hover:scale-110 transition-transform duration-[3000ms]"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-20 items-center">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-5 py-2.5 bg-white/10 text-white rounded-full text-[10px] font-black mb-10 border border-white/20 tracking-[0.4em] uppercase shadow-lg backdrop-blur-md italic font-mono">
                🎯 Proportional Task
              </div>
              <h2 className="text-5xl font-black text-white mb-10 leading-[1.1] tracking-tighter italic">
                Life Cycle Analysis
              </h2>
              <p className="text-rose-100 text-lg mb-14 leading-relaxed font-extrabold pr-4 italic">
                Visualize your day! Create a pie chart showing <b>Daily Time Distribution</b> across activities (Sleep, Study, Fun, etc.). Ensure you use <b>autopct</b> for precision!
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-rose-950 hover:bg-rose-50 px-14 py-7 rounded-[3.5rem] text-[13px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 uppercase tracking-widest italic mx-auto xl:mx-0 border-b-6 border-rose-900/10"
               >
                 <Play className="w-5 h-5 mr-4 fill-rose-900 group-hover/btn:rotate-45 transition-transform" />
                 Initialize Distribution Log
               </button>
            </div>

            <div className="w-full xl:w-96 relative">
               <div className="bg-[#0b0b0e] rounded-[5.5rem] border border-white/10 p-16 relative shadow-2xl overflow-hidden group-hover:rotate-1 transition-transform duration-700">
                  <div className="flex justify-between items-center mb-12 px-2 opacity-50">
                    <div className="flex gap-2.5">
                       <div className="w-3 h-3 rounded-full bg-rose-500/40 ring-2 ring-rose-500/10 animate-ping shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                       <div className="w-3 h-3 rounded-full bg-rose-500/40"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 font-extrabold uppercase tracking-[0.5em] italic">SLICE_DIST_v3</span>
                  </div>

                  <div className="h-52 relative flex items-center justify-center p-8 bg-rose-500/5 rounded-[4rem] border border-rose-500/10 overflow-hidden group/mock">
                     
                     {/* Pie Visual Representation */}
                     <div className="relative w-32 h-32 rounded-full border-4 border-rose-500/20 shadow-2xl flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/40 to-transparent animate-spin-slow"></div>
                        <Percent className="w-12 h-12 text-rose-500/40 relative z-10 animate-pulse" />
                     </div>
                     
                     {/* Small Accents */}
                     <div className="absolute top-4 left-4 w-2 h-10 bg-rose-500/10 rounded-full rotate-45"></div>
                     <div className="absolute bottom-4 right-4 w-2 h-10 bg-rose-500/10 rounded-full rotate-45"></div>
                  </div>
                  
                  <div className="mt-14 flex items-center justify-center gap-4 text-rose-500/20 text-[10px] font-black uppercase tracking-[0.4em] select-none italic font-mono tracking-tighter">
                     <Trophy className="w-4 h-4" />
                     Proportional Logic Locked
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer Navigation */}
      <footer className="max-w-4xl mx-auto text-center pb-24 opacity-40 hover:opacity-100 transition-opacity">
         <p className="text-xs font-black text-slate-500 dark:text-slate-400 italic leading-relaxed tracking-widest uppercase">
            Pie charts are the ultimate tool for fractional storytelling. Master the whole by understanding its parts.
         </p>
      </footer>

    </div>
  );
}

export default MplPieCharts;
