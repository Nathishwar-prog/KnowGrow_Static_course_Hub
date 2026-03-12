import React, { useState } from 'react';
import { 
  Target, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  AlertCircle, Sparkles, MousePointer2, 
  Settings, Brush, Palette, Maximize2, 
  Activity, Layers, List, Clock, 
  Check, Eye, ShieldCheck, TrendingUp,
  Droplets, Thermometer, LayoutList,
  ChevronRight
} from 'lucide-react';

function MplMarkers() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'types' | 'styling' | 'edges' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_marker':
        outLines = [
          'Initializing Plot...',
          'Loading x: [1, 2, 3, 4]',
          'Loading y: [10, 20, 25, 30]',
          'Setting marker="o" (Circle)...',
          'Executing plt.plot(x, y, marker="o")...',
          'Success: Discrete data points highlighted with circles.'
        ];
        break;
      case 'types_demo':
        outLines = [
          'Switching marker styles...',
          'Plot 1: marker="s" (Square)',
          'Plot 2: marker="^" (Triangle)',
          'Plot 3: marker="*" (Star)',
          'Plot 4: marker="D" (Diamond)',
          'Success: Multi-symbol identification active.'
        ];
        break;
      case 'styling_demo':
        outLines = [
          'Applying size and face color...',
          'Parameter: markersize=10',
          'Parameter: markerfacecolor="red"',
          'Updating marker rasterization...',
          'Success: Large red markers rendered on plot.'
        ];
        break;
      case 'edge_demo':
        outLines = [
          'Configuring border properties...',
          'markerfacecolor="yellow"',
          'markeredgecolor="black"',
          'markeredgewidth=2',
          'Rendering thick borders...',
          'Success: High-contrast styled markers complete.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Loading Temperature Data...',
          'Mon: 25, Tue: 28, Wed: 30, Thu: 27, Fri: 26',
          'plt.plot(days, temperature, marker="o", color="blue")',
          'Result: Individual daily fluctuations marked clearly.',
          'Dashboard state: Ready.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Scanning student variables...',
          'Days: ["Mon", "Tue", "Wed", "Thu", "Fri"] -> Found.',
          'Water (Liters): [2, 2.5, 3, 2.8, 3.2] -> Found.',
          'plt.plot(..., marker="s") -> Square markers detected!',
          'Edge Case Check: Passed.',
          'Performance: 100/100. Hydration data visualized accurately!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Indigo Identification Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-[2.5rem] mb-8 shadow-sm border border-indigo-200 dark:border-indigo-800/50 hover:rotate-12 transition-transform cursor-pointer">
          <Target className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-bold mb-6 border border-indigo-500/20 tracking-[0.4em] uppercase">
          Lesson 0.2.1
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-600 decoration-8 underline decoration-indigo-500/20 underline-offset-[12px]">Markers</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold">
          Highlight individual data points. Learn how to use symbols to make your charts precise and highly readable.
        </p>
      </header>

      {/* 2. Concept Overview */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-500/20 mr-5">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight italic">What are Markers?</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-indigo-500 pl-8">
                "Markers are symbols placed on individual data points to highlight their exact location on a plot."
              </p>
              
              <div className="flex gap-4">
                 <div className="flex-1 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700 items-center justify-center flex flex-col">
                    <div className="h-0.5 w-full bg-slate-300 dark:bg-slate-600 relative">
                       <div className="absolute left-1/4 -top-1 w-2.5 h-2.5 bg-slate-400 dark:bg-slate-500 rounded-full ring-4 ring-white dark:ring-slate-900"></div>
                       <div className="absolute right-1/4 -top-1 w-2.5 h-2.5 bg-slate-400 dark:bg-slate-500 rounded-full ring-4 ring-white dark:ring-slate-900"></div>
                    </div>
                    <span className="text-[9px] font-black text-slate-400 uppercase mt-8 tracking-widest">Discrete Identifiers</span>
                 </div>
                 <div className="flex-1 p-6 bg-indigo-500/5 rounded-3xl border border-indigo-500/10 items-center justify-center flex flex-col">
                    <Target className="w-8 h-8 text-indigo-500 mb-4 animate-pulse" />
                    <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest text-center">Precise View</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-900 p-10 rounded-[3.5rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter italic uppercase text-indigo-200">
                 <ShieldCheck className="w-8 h-8 mr-4" />
                 Why Use Markers?
               </h3>
               <div className="space-y-6">
                 {[
                   { t: "Visual Visibility", d: "Makes small, isolated data points instantly visible.", i: Eye },
                   { t: "Enhanced Readability", d: "Users can identify exact values without guessing.", i: Activity },
                   { t: "Discrete datasets", d: "Ideal for non-continuous categorical values.", i: List },
                   { t: "Small Datasets", d: "Effective when you have 5-20 data points.", i: Target }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-4 bg-white/10 rounded-3xl border border-white/10 hover:bg-white/20 transition-all cursor-crosshair">
                      <mod.i className="w-6 h-6 mr-5 text-indigo-300 shrink-0" />
                      <div>
                         <h5 className="font-bold text-sm tracking-tight">{mod.t}</h5>
                         <p className="text-[10px] text-indigo-100/50">{mod.d}</p>
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
             <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-[2.5rem] mr-6 shadow-sm border border-indigo-200 dark:border-indigo-800">
               <Terminal className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
             </div>
             <div>
               <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Marker Symbol Studio</h2>
               <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em] mt-2 underline decoration-indigo-500/30 underline-offset-4 italic">plt.plot(marker=...) Lab</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basics', icon: Code },
              { id: 'types', label: 'Marker Types', icon: LayoutList },
              { id: 'styling', label: 'Scaling', icon: Maximize2 },
              { id: 'edges', label: 'Color & Edge', icon: Brush },
              { id: 'real_world', label: 'Temperature', icon: Thermometer }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2.5rem] text-xs font-bold transition-all whitespace-nowrap ${
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
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[580px] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 -z-0"><Settings className="w-80 h-80 text-indigo-500" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col relative z-10">
                  <h3 className="text-2xl font-extrabold flex items-center mb-10 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500 italic">
                    <Code className="w-6 h-6 mr-4" />
                    3️⃣ & 4️⃣ Adding Markers
                  </h3>
                  <div className="space-y-6 flex-1">
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-bold italic underline decoration-indigo-500/20 underline-offset-8">
                      "Markers are added using the marker parameter in the plot function."
                    </p>
                    <div className="bg-slate-950 rounded-[3rem] p-10 border border-indigo-500/20 shadow-2xl relative overflow-hidden">
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                           plt.plot(x, y, <code className="text-indigo-400 font-bold decoration-indigo-500/30 underline italic">marker="o"</code>)<br/><br/>
                           plt.title("Line Plot with Markers")<br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_marker')} className="absolute bottom-8 right-8 p-5 bg-indigo-600 text-white rounded-2xl shadow-xl hover:bg-indigo-500 transition-all active:scale-95">
                           <Play className="w-6 h-6 fill-current" />
                        </button>
                    </div>
                    <div className="p-6 bg-indigo-500/5 rounded-3xl border border-indigo-500/10 flex items-center">
                       <CheckCircle2 className="w-8 h-8 text-indigo-500 mr-5 shrink-0" />
                       <p className="text-xs text-slate-500 font-black uppercase tracking-widest leading-loose">
                         Each data point in your x, y lists will now have a visible circle symbol.
                       </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Types */}
              {activeTab === 'types' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 relative z-10 flex flex-col">
                  <h3 className="text-2xl font-extrabold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500 uppercase tracking-tighter">
                    <LayoutList className="w-6 h-6 mr-4" />
                    5️⃣ Common Marker Types
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                     {[
                       { m: "o", s: "○", d: "Circle" },
                       { m: "s", s: "■", d: "Square" },
                       { m: "^", s: "▲", d: "Triangle" },
                       { m: "*", s: "★", d: "Star" },
                       { m: "x", s: "✖", d: "Cross" },
                       { m: "+", s: "+", d: "Plus" },
                       { m: "D", s: "◆", d: "Diamond" }
                     ].map((marker) => (
                       <div key={marker.m} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border dark:border-slate-800 text-center hover:border-blue-500 transition-all cursor-pointer group hover:-translate-y-2 shadow-sm">
                          <span className="text-2xl text-blue-500 font-black block mb-2">{marker.s}</span>
                          <code className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 transition-colors tracking-[0.2em] italic">"{marker.m}"</code>
                          <span className="block text-[8px] font-bold text-slate-500 mt-2 uppercase">{marker.d}</span>
                       </div>
                     ))}
                  </div>
                  <button onClick={() => runDemo('types_demo')} className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl hover:bg-blue-500 transition-all text-xs tracking-[0.4em] uppercase italic mt-auto">Cycle Symbol Library</button>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 relative z-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-extrabold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-cyan-500 italic">
                    <Maximize2 className="w-6 h-6 mr-4" />
                    6️⃣ & 7️⃣ Sizing & Face Color
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4 italic">
                     <div className="bg-cyan-500/5 p-8 rounded-[3rem] border border-cyan-500/10">
                        <div className="flex items-center mb-6">
                           <Maximize2 className="w-5 h-5 text-cyan-500 mr-4" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Marker Size</span>
                        </div>
                        <code className="text-xs font-mono font-black text-cyan-600">markersize=10</code>
                     </div>
                     <div className="bg-cyan-500/5 p-8 rounded-[3rem] border border-cyan-500/10 transition-transform cursor-pointer">
                        <div className="flex items-center mb-6">
                           <Palette className="w-5 h-5 text-cyan-500 mr-4" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Face Color</span>
                        </div>
                        <code className="text-xs font-mono font-black text-cyan-600">markerfacecolor="red"</code>
                     </div>
                  </div>
                  <div className="bg-slate-900 border border-cyan-500/20 rounded-[4rem] p-10 relative overflow-hidden group/size">
                     <div className="absolute top-0 right-0 p-8 opacity-[0.05] -z-0"><Maximize2 className="w-32 h-32" /></div>
                     <pre className="font-mono text-xs leading-loose text-slate-300 relative z-10">
                        plt.plot(x, y, marker="o", <br/>
                        &nbsp;&nbsp;<span className="text-cyan-400">markersize=12</span>,<br/>
                        &nbsp;&nbsp;<span className="text-cyan-400 underline decoration-cyan-500/20 underline-offset-4">markerfacecolor="yellow"</span>)
                     </pre>
                  </div>
                  <button onClick={() => runDemo('styling_demo')} className="w-full py-5 bg-cyan-600 text-white font-black rounded-[3rem] shadow-xl hover:bg-cyan-500 transition-all text-xs tracking-widest uppercase mt-4 italic">Scale Discrete Data Nodes</button>
                </div>
              )}

              {/* Tab: Edges */}
              {activeTab === 'edges' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-6 relative z-10">
                  <h3 className="text-2xl font-extrabold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500">
                    <Brush className="w-6 h-6 mr-4" />
                    8️⃣ Marker Edge Customization
                  </h3>
                  <div className="bg-indigo-500/5 p-8 rounded-[3.5rem] border border-indigo-500/10">
                     <p className="text-sm font-bold text-slate-500 italic mb-8 leading-relaxed pr-8">
                        "For ultra-clear visualizations, you can add borders to your markers using markeredgecolor and markeredgewidth."
                     </p>
                     <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="p-4 bg-white dark:bg-slate-950 rounded-2xl border dark:border-slate-800">
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-2 font-mono italic">Edge Color</span>
                          <code className="text-[10px] text-indigo-500 font-black italic">markeredgecolor="black"</code>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-950 rounded-2xl border dark:border-slate-800">
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-2 font-mono italic">Edge Width</span>
                          <code className="text-[10px] text-indigo-500 font-black italic">markeredgewidth=2</code>
                        </div>
                     </div>
                     <button onClick={() => runDemo('edge_demo')} className="w-full py-5 bg-indigo-600 text-white font-black rounded-3xl shadow-xl hover:bg-indigo-500 transition-all text-xs tracking-widest uppercase italic">Apply High-Contrast Strokes</button>
                  </div>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col justify-center space-y-10 relative z-10">
                  <h3 className="text-2xl font-extrabold flex items-center mb-4 text-indigo-500 italic decoration-indigo-500/20 underline underline-offset-8">
                    <Thermometer className="w-6 h-6 mr-4" />
                    9️⃣ Temperature Trend
                  </h3>
                  <div className="bg-indigo-500/5 p-10 rounded-[4rem] border border-indigo-500/20 flex flex-col items-center justify-center relative overflow-hidden group/temp">
                     <div className="absolute top-0 right-0 p-10 opacity-[0.05] grayscale group-hover/temp:grayscale-0 transition-all"><Droplets className="w-32 h-32 text-indigo-400" /></div>
                     <div className="text-5xl font-black text-indigo-600 mb-6 group-hover/temp:scale-110 transition-transform italic tracking-tighter">30°C</div>
                     <p className="text-sm font-bold text-slate-500 text-center leading-relaxed italic max-w-sm">
                        "Markers make it easy to identify individual temperature values for each day, especially when the line trend is subtle."
                     </p>
                  </div>
                  <button onClick={() => runDemo('real_world')} className="w-full py-6 bg-indigo-600 text-white font-black rounded-[4rem] shadow-xl hover:bg-indigo-500 transition-all text-xs uppercase tracking-[0.5em] italic">Generate Daily Metric View</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8">
            
            {/* Legend Logic Terminal */}
            <div className="bg-[#0c0d10] rounded-[3.5rem] p-10 border border-slate-800 flex-1 min-h-[480px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] group-hover/terminal:bg-indigo-500/10 transition-all duration-1000 font-mono"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1 italic font-mono">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-8 px-4">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-indigo-500/70 animate-pulse" />
                      <h3 className="font-bold text-slate-600 uppercase text-[10px] tracking-[0.4em]">
                        MARKER_CORE_EXEC
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-3 h-3 rounded-full bg-indigo-950 shadow-inner"></div>
                       <div className="w-3 h-3 rounded-full bg-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.4)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[350px] custom-scrollbar px-4 space-y-5">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-8 opacity-30 filter grayscale hover:grayscale-0 transition-all duration-1000 select-none">
                        <Target className="w-20 h-20 animate-bounce duration-[4000ms]" />
                        <div className="text-center">
                           <span className="block text-[8px] uppercase tracking-[0.5em] font-black text-indigo-500 mb-2">Awaiting Trigger</span>
                           <span className="text-[10px] font-bold text-white/50">Initialize Marker Rasterization</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-indigo-500/30 mr-4 font-black select-none text-[8px] mt-1 shrink-0 tracking-widest uppercase italic">MRK::LOG</span>
                              <span className={`leading-relaxed font-semibold transition-colors ${
                                line.includes('Success') || line.includes('Correct') ? 'text-indigo-400 font-bold tracking-tight' :
                                line.includes('Initializing') || line.includes('Scanning') ? 'text-amber-400 italic' :
                                line.includes('Processing') || line.includes('Loading') ? 'text-cyan-400' :
                                line.includes('Performance') ? 'text-indigo-500 font-extrabold underline decoration-indigo-500/10' :
                                'text-slate-500 italic uppercase text-[9px]'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/40 mt-10">
                           <div className="flex items-center gap-3">
                              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                              <span className="text-[8px] text-slate-600 font-extrabold uppercase tracking-[0.3em] font-sans">Node Alignment Locked</span>
                           </div>
                           <button onClick={resetConsole} className="text-[9px] text-indigo-500/70 hover:text-indigo-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-indigo-500/10">Purge Buffer</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Teaching Order Visualizer */}
            <div className="bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900 p-10 rounded-[3.8rem] border border-white/5 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-extrabold text-[10px] mb-8 flex items-center uppercase tracking-[0.4em] opacity-80 underline decoration-indigo-500 underline-offset-8">
                 <List className="w-4 h-4 text-indigo-400 mr-3" />
                 Customization Sequence
               </h4>
               <div className="space-y-4 px-2 relative z-10">
                  {[
                    "Matplotlib Line Plot", "Matplotlib Markers", "Matplotlib Colors", "Matplotlib Line Styles", "Matplotlib Grid", "Matplotlib Legends"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-12 h-10 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500 ${i === 1 ? 'bg-indigo-600 shadow-xl shadow-indigo-500/40 rotate-12 scale-110' : 'bg-white/5 border border-white/5 opacity-40'}`}>
                          <span className={`text-[10px] font-black ${i === 1 ? 'text-white italic' : 'text-slate-700'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-bold tracking-[0.1em] transition-colors ${i === 1 ? 'text-indigo-300 italic underline decoration-indigo-500/20' : 'text-slate-600 group-hover/item:text-slate-300 font-semibold'}`}>{path}</span>
                       {i === 1 && <ChevronRight className="w-3.5 h-3.5 ml-auto text-indigo-400 animate-pulse" />}
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
             <Target className="w-96 h-96 text-indigo-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 gap-8 relative z-10 font-black tracking-tight italic">
             <div className="flex items-center">
                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl mr-8 rotate-3 shadow-lg">
                   <Lightbulb className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                   <h2 className="text-4xl text-slate-900 dark:text-white mb-2 tracking-tighter decoration-indigo-500 decoration-4 underline">
                      Node Visualization Advice
                   </h2>
                   <p className="text-lg text-slate-500 dark:text-slate-400 font-medium tracking-tight">Best practices for using discrete indicators.</p>
                </div>
             </div>
             <div className="h-0.5 w-40 bg-indigo-500/20 hidden md:block italic"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
             {[
               { t: "The Sparse Rule", d: "Markers work best for small datasets (5-20 data points). Too many markers create clutter.", i: Target, c: "text-indigo-500" },
               { t: "Strategic Styling", d: "Combine markers with dotted or dashed lines (linestyle='--') for sophisticated charts.", i: Activity, c: "text-blue-500" },
               { t: "Emphasis Engine", d: "Use markerfacecolor='red' to highlight a specific critical value in your series.", i: Palette, c: "text-cyan-500" },
               { t: "Trend Context", d: "Always use markers in Time Series analysis to identify precise measurement cycles.", i: TrendingUp, c: "text-indigo-600" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip">
                 <div className={`p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.8rem] mr-10 shadow-sm group-hover/tip:bg-indigo-500/10 transition-all duration-500 ${tip.c} bg-opacity-10 shrink-0`}>
                    <tip.i className="w-10 h-10 group-hover/tip:rotate-12 group-hover/tip:scale-110 transition-transform" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-black text-slate-900 dark:text-white mb-4 group-hover/tip:text-indigo-600 transition-colors uppercase tracking-[0.3em] text-[10px]">⭐ PRO TIP 0{i + 1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-bold italic tracking-tight">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Practice Mission */}
      <section className="max-w-4xl mx-auto pb-24 px-6 md:px-0">
        <div className="bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-950 p-12 sm:p-24 rounded-[6.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[120px] -z-0 pointer-events-none group-hover:scale-110 transition-transform duration-[3000ms]"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-20 items-center">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-5 py-2.5 bg-white/10 text-white rounded-full text-[10px] font-black mb-10 border border-white/20 tracking-[0.4em] uppercase shadow-lg backdrop-blur-md">
                🎯 Discrete Lab Task
              </div>
              <h2 className="text-5xl font-black text-white mb-10 leading-[1.1] tracking-tighter italic">
                Hydration Monitor v1
              </h2>
              <p className="text-indigo-100 text-lg mb-14 leading-relaxed font-bold pr-4 italic">
                Create a chart tracking <b>Daily Water Intake</b> (Liters) for a week. Use <b>Square ("s") markers</b> to highlight exact consumption levels for each day.
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-indigo-950 hover:bg-slate-50 px-14 py-7 rounded-[3rem] text-[13px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 uppercase tracking-widest italic mx-auto xl:mx-0 border-b-6 border-indigo-900/10"
               >
                 <Play className="w-5 h-5 mr-4 fill-indigo-900 group-hover/btn:rotate-45 transition-transform" />
                 Initialize Node Sequence
               </button>
            </div>

            <div className="w-full xl:w-96 relative">
               <div className="bg-[#0b0b0e] rounded-[5.5rem] border border-white/10 p-16 relative shadow-2xl overflow-hidden group-hover:rotate-1 transition-transform duration-700">
                  <div className="flex justify-between items-center mb-12 px-2 opacity-50">
                    <div className="flex gap-2.5">
                       <div className="w-3 h-3 rounded-full bg-indigo-500/40 ring-2 ring-indigo-500/10 animate-ping shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                       <div className="w-3 h-3 rounded-full bg-indigo-500/40 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 font-extrabold uppercase tracking-[0.5em] italic">NODE_X_LAB</span>
                  </div>

                  <div className="h-52 relative flex items-center justify-center p-8 bg-indigo-500/5 rounded-[4rem] border border-indigo-500/10 overflow-hidden group/mock">
                     
                     {/* Droplet Background */}
                     <Droplets className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-indigo-500/5 rotate-12" />
                     
                     {/* Square Markers Representation */}
                     <div className="flex gap-8 items-end h-24 relative z-10 font-black">
                        <div className="flex flex-col items-center">
                           <div className="w-4 h-4 bg-indigo-500 shadow-xl shadow-indigo-500/20 rotate-45 mb-4 animate-bounce"></div>
                           <div className="h-12 w-0.5 bg-indigo-500/20"></div>
                        </div>
                        <div className="flex flex-col items-center">
                           <div className="w-4 h-4 bg-indigo-500 shadow-xl shadow-indigo-500/20 rotate-45 mb-8 animate-bounce delay-100"></div>
                           <div className="h-12 w-0.5 bg-indigo-500/20"></div>
                        </div>
                        <div className="flex flex-col items-center">
                           <div className="w-4 h-4 bg-indigo-500 shadow-xl shadow-indigo-500/20 rotate-45 mb-2 animate-bounce delay-200"></div>
                           <div className="h-12 w-0.5 bg-indigo-500/20"></div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-14 flex items-center justify-center gap-4 text-indigo-500/10 text-[10px] font-black uppercase tracking-[0.4em] select-none italic">
                     <Clock className="w-4 h-4" />
                     Monitoring Cycle Active
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Learning Roadmap Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-24 opacity-40 hover:opacity-100 transition-opacity">
         <p className="text-xs font-bold text-slate-500 dark:text-slate-400 italic font-medium leading-relaxed">
            Markers are the punctuation of data visualization. Without them, your trends are sentences without full stops. Use them wisely to anchor user attention.
         </p>
      </footer>

    </div>
  );
}

export default MplMarkers;
