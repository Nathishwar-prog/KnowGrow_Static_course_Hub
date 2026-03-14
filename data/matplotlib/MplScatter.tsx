import React, { useState } from 'react';
import { 
  Target, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  Activity, Layers, List, Check, Eye, 
  ShieldCheck, TrendingUp, Users, Presentation, 
  Maximize, Palette, Sparkles, MonitorPlay, 
  MousePointer2, Scissors, Box, MapPin,
  ClipboardCheck, Clock, Layout, MoveRight
} from 'lucide-react';

function MplScatter() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'custom' | 'multi' | 'groups' | 'height_weight'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_scatter':
        outLines = [
          'Defining Study Hours: [1, 2, 3, 4, 5]',
          'Defining Exam Scores: [40, 50, 65, 70, 80]',
          'Executing plt.scatter(x, y)...',
          'Rasterizing points: (1,40), (2,50), (3,65), (4,70), (5,80)',
          'Success: Correlation visualization rendered.'
        ];
        break;
      case 'custom_scatter':
        outLines = [
          'Setting marker color to "red"...',
          'Setting marker size s=100...',
          'plt.scatter(x, y, color="red", s=100)',
          'Success: Individual data points highlighted for emphasis.'
        ];
        break;
      case 'multi_scatter':
        outLines = [
          'Series 1: Math Scores (Blue)',
          'Series 2: Science Scores (Green)',
          'Applying plt.legend()...',
          'Success: Multiple datasets compared on single coordinate plane.'
        ];
        break;
      case 'groups_scatter':
        outLines = [
          'Loading color map: ["red", "blue", "green", "orange", "purple"]',
          'Applying plt.scatter(x, y, c=colors)',
          'Assigning unique color index to each node...',
          'Success: Scatter plot with dynamic group coloring.'
        ];
        break;
      case 'height_weight':
        outLines = [
          'Loading physical metrics dataset...',
          'Height (cm) mapped to X-axis.',
          'Weight (kg) mapped to Y-axis.',
          'Checking for linear correlation...',
          'Success: Height vs Weight relationship visualized.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Scanning for Exercise Hours... Detected.',
          'Scanning for Calories Burned... Detected.',
          'Validating plt.scatter(hours, calories) logic...',
          'Checking Axes Labels: [Exercise Hours, Calories Burned]... OK.',
          'Performance: 100/100. Trend analyzed successfully!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100 italic">
      
      {/* 1. Header with Geometric Motion */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-red-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-5 bg-red-100 dark:bg-red-900/30 rounded-[2.50rem] mb-10 shadow-sm border border-red-200 dark:border-red-800/50 hover:scale-110 transition-transform cursor-pointer group">
          <Target className="w-14 h-14 text-red-600 dark:text-red-400 group-hover:rotate-45 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-red-500/10 text-red-600 dark:text-red-400 rounded-full text-[10px] font-black mb-6 border border-red-500/20 tracking-[0.4em] uppercase shadow-lg backdrop-blur-md">
          Chart Type: Scalar Analysis
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic uppercase underline decoration-red-500/20 underline-offset-[16px]">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500">Scatter Plot</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold italic">
          "Uncover the hidden relationships between variables. Scatter plots turn individual data points into visual evidence of correlation and patterns."
        </p>
      </header>

      {/* 2. Conceptual Foundation Section */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between transition-all hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-red-500 rounded-2xl shadow-lg shadow-red-500/20 mr-6 group-hover:rotate-12 transition-transform">
                  <Info className="w-6 h-6 text-white italic" />
                </div>
                <h2 className="text-3xl font-black tracking-tight italic">Correlation Visualization</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-red-500 pl-8 transition-colors group-hover:text-slate-900 dark:group-hover:text-white">
                "A Scatter Plot shows how two variables relate to each other by placing data points on a coordinate plane as individual markers."
              </p>
              
              <div className="space-y-4">
                 {[
                   { l: "Study Study Hours", d: "Exam Score relationship", i: TrendingUp },
                   { l: "Variable Mapping", d: "Individual point coordinates", i: MapPin }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50 hover:bg-red-500/5 transition-all">
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mr-5">
                         <mod.i className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                         <h5 className="font-black text-xs tracking-tight uppercase tracking-widest">{mod.l}</h5>
                         <p className="text-[10px] text-slate-500 font-bold italic">{mod.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-700 via-orange-800 to-indigo-950 p-10 rounded-[4rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white font-black italic uppercase italic">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter underline decoration-white/20 underline-offset-8">
                 <ShieldCheck className="w-8 h-8 mr-5" />
                 Analysis Engine Use-Cases
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 leading-tight">
                 {[
                   { t: "Machine Learning", d: "Feature relationship analysis.", i: Activity },
                   { t: "Statistical Study", d: "Determining correlation strength.", i: Target },
                   { t: "Feature Grouping", d: "Category clustering visually.", i: Layers },
                   { t: "Regression Basis", d: "The foundation for trend lines.", i: Zap }
                 ].map((mod, i) => (
                   <div key={i} className="flex flex-col p-6 bg-white/10 rounded-[3rem] border border-white/5 hover:bg-white/20 transition-all cursor-crosshair group/item relative overflow-hidden">
                      <mod.i className="w-8 h-8 mb-4 text-orange-200 group-hover/item:scale-110 transition-transform" />
                      <div>
                         <h5 className="font-black text-xs tracking-widest tracking-tighter mb-1 uppercase">{mod.t}</h5>
                         <p className="text-[9px] text-white/40 font-bold decoration-white/5 underline underline-offset-4">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-6 bg-white/5 rounded-[2.5rem] border border-white/10 flex items-center">
                  <Sparkles className="w-6 h-6 text-orange-200 mr-5 animate-pulse" />
                  <p className="text-xs font-bold leading-relaxed opacity-80 decoration-orange-200/20 underline underline-offset-4 tracking-tighter uppercase italic">
                    Scatter plots transform numeric complexity into visual proof.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Scatter Matrix Studio */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-10">
           <div className="flex items-center translate-x-4">
             <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-[3rem] mr-8 shadow-2xl border border-red-200 dark:border-red-800 transition-all hover:rotate-6">
               <Terminal className="w-10 h-10 text-red-600 dark:text-red-400 font-bold" />
             </div>
             <div>
               <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight underline decoration-red-500/10 underline-offset-10 italic tracking-tighter uppercase">Scatter Matrix Studio</h2>
               <p className="text-xs text-slate-500 font-black uppercase tracking-[0.5em] mt-3 italic underline decoration-red-500/10 underline-offset-4 opacity-70">plt.scatter() Coordinate Lab</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-2 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Scatter', icon: Code },
              { id: 'custom', label: 'Point Custom', icon: Palette },
              { id: 'multi', label: 'Multi-Dataset', icon: Layers },
              { id: 'groups', label: 'Group Colors', icon: Users },
              { id: 'height_weight', label: 'Height vs Weight', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-8 py-5 rounded-[4rem] text-[11px] font-black tracking-widest uppercase transition-all whitespace-nowrap italic ${
                  activeTab === tab.id 
                    ? 'bg-red-600 text-white shadow-xl shadow-red-900/40 scale-105' 
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
              <div className="absolute top-0 right-0 p-10 opacity-[0.04] rotate-12 -z-0 grayscale group-hover:grayscale-0 transition-all duration-1000"><Target className="w-[30rem] h-[30rem] text-red-500" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col relative z-10 italic">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-red-600 tracking-tighter uppercase">
                    <Code className="w-10 h-10 mr-6 text-red-500 italic decoration-red-500/20 underline underline-offset-8" />
                    3ï¸âƒ£ & 4ï¸âƒ£ Basic Scatter Logic
                  </h3>
                  <div className="space-y-12 flex-1 flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group/coord">
                          <code className="block text-[10px] font-black text-red-600 uppercase tracking-widest mb-4 font-mono italic underline underline-offset-4 decoration-red-500/20">Coordinate Map</code>
                          <span className="text-xs font-bold text-slate-500 lowercase tracking-tight">Study hours vs Exam scores.</span>
                          <MapPin className="absolute top-2 right-2 w-10 h-10 opacity-[0.03] group-hover/coord:scale-110 transition-transform" />
                       </div>
                       <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
                          <code className="block text-[10px] font-black text-red-600 uppercase tracking-widest mb-4 font-mono italic underline underline-offset-4 decoration-red-500/20">Method</code>
                          <span className="text-xs font-bold text-slate-500 lowercase tracking-tight">plt.scatter(x, y)</span>
                       </div>
                    </div>

                    <div className="bg-slate-950 p-12 rounded-[5rem] border border-red-500/20 shadow-2xl relative group/code overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/code:scale-110 transition-all"><Sparkles className="w-40 h-40 text-red-500" /></div>
                        <pre className="font-mono text-sm leading-8 text-slate-300 relative z-10">
                           x = [1, 2, 3, 4, 5]<br/>
                           y = [40, 50, 65, 70, 80]<br/><br/>
                           plt.<span className="text-red-500 underline decoration-red-500/30 underline-offset-8">scatter</span>(x, y)<br/><br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_scatter')} className="absolute bottom-12 right-12 p-8 bg-red-600 text-white rounded-[2.5rem] shadow-2xl hover:bg-red-500 transition-all active:scale-90 group-hover/code:ring-8 ring-red-500/10">
                           <Play className="w-8 h-8 fill-current" />
                        </button>
                    </div>
                    
                    <div className="flex items-center p-8 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[3.5rem] shadow-sm italic text-xs">
                       <MapPin className="w-8 h-8 text-red-500 mr-8 shrink-0 animate-bounce" />
                       <p className="text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                         Result: Individual markers at <span className="text-red-500 underline decoration-red-500/10 underline-offset-4 font-black italic">(1,40), (2,50), (3,65)...</span>
                       </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Customization */}
              {activeTab === 'custom' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-orange-500 uppercase tracking-tighter italic">
                    <Palette className="w-10 h-10 mr-6 text-orange-500 italic decoration-orange-500/20 underline underline-offset-8" />
                    5ï¸âƒ£ & 6ï¸âƒ£ Custom Colors & Sizes
                  </h3>
                  <div className="grid grid-cols-2 gap-8 font-black">
                     <div className="p-10 bg-orange-500/5 rounded-[4rem] border border-orange-500/10 hover:bg-orange-500/10 transition-all group/p">
                        <span className="block text-[10px] text-orange-600 tracking-[0.4em] uppercase mb-6 italic underline decoration-orange-500/20 underline-offset-8">Property: color</span>
                        <code className="text-2xl text-orange-500 group-hover:scale-110 transition-transform inline-block">color="red"</code>
                     </div>
                     <div className="p-10 bg-orange-500/5 rounded-[4rem] border border-orange-500/10 hover:bg-orange-500/10 transition-all group/s">
                        <span className="block text-[10px] text-orange-600 tracking-[0.4em] uppercase mb-6 italic underline decoration-orange-500/20 underline-offset-8">Property: s (size)</span>
                        <code className="text-2xl text-orange-500 group-hover:scale-110 transition-transform inline-block">s=100</code>
                     </div>
                  </div>
                  <div className="bg-slate-950 p-12 rounded-[5rem] border border-orange-500/20 shadow-2xl relative overflow-hidden group/code">
                     <pre className="font-mono text-sm leading-10 text-slate-300 relative z-10">
                        plt.<span className="text-orange-500">scatter</span>(x, y, <span className="text-orange-500">color="red", s=100</span>)
                     </pre>
                  </div>
                  <button onClick={() => runDemo('custom_scatter')} className="w-full py-8 bg-orange-600 text-white font-black rounded-[4rem] shadow-2xl hover:bg-orange-500 transition-all text-xs tracking-[0.5em] italic uppercase mt-6 transform hover:scale-[1.02] active:scale-95">Synthesize Visual Emphasis</button>
                </div>
              )}

              {/* Tab: Multi */}
              {activeTab === 'multi' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-red-500 uppercase tracking-tighter italic">
                    <Layers className="w-10 h-10 mr-6 text-red-500 decoration-red-500/20 underline underline-offset-8" />
                    7ï¸âƒ£ Multiple Correlation Analysis
                  </h3>
                  <div className="bg-red-500/5 p-12 rounded-[5rem] border border-red-500/10">
                     <p className="text-sm font-bold text-slate-500 mb-12 leading-relaxed italic pr-12 text-slate-400">
                        "Layer multiple datasets like Math vs Science scores to visualize performance clusters in a single coordinate plane."
                     </p>
                     <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-red-500/20 shadow-2xl relative">
                        <pre className="font-mono text-[11px] text-slate-400 leading-8 italic">
                           {`plt.scatter(x, math, color="blue", label="Math")
plt.scatter(x, science, color="green", label="Science")

plt.legend()`}
                        </pre>
                     </div>
                     <button onClick={() => runDemo('multi_scatter')} className="w-full py-7 bg-red-800 text-white font-black rounded-[3rem] shadow-2xl hover:bg-red-700 transition-all text-[11px] tracking-widest italic uppercase mt-12 flex items-center justify-center filter hover:brightness-110">
                        <Layers className="w-5 h-5 mr-5" /> Execute Dataset Overlap
                     </button>
                  </div>
                </div>
              )}

              {/* Tab: Groups */}
              {activeTab === 'groups' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-indigo-500 italic uppercase italic">
                    <Users className="w-10 h-10 mr-6 text-indigo-500 decoration-indigo-500/20 underline underline-offset-8" />
                    8ï¸âƒ£ Individual Point Grouping
                  </h3>
                  <div className="p-10 bg-indigo-500/5 rounded-[4.5rem] border border-indigo-500/10 italic">
                     <div className="flex flex-wrap gap-4 mb-12 justify-center">
                        {["red", "blue", "green", "orange", "purple"].map(c => (
                           <div key={c} className="w-10 h-10 rounded-full shadow-lg border-2 border-white dark:border-slate-800 group-hover:scale-110 transition-transform" style={{ backgroundColor: c }}></div>
                        ))}
                     </div>
                     <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden italic font-mono uppercase tracking-tighter">
                        <pre className="text-xs text-indigo-200">
                           colors = ["red", "blue", "green", "orange", "purple"]<br/><br/>
                           plt.<span className="text-indigo-400">scatter</span>(x, y, <span className="text-indigo-400 underline decoration-indigo-500/30 underline-offset-8">c=colors</span>)
                        </pre>
                     </div>
                     <button onClick={() => runDemo('groups_scatter')} className="w-full py-7 bg-indigo-700 text-white font-black rounded-[4rem] shadow-2xl hover:bg-indigo-600 transition-all text-[11px] tracking-widest uppercase mt-12 italic border-b-4 border-indigo-900/50">Perform Cluster Map Rasterization</button>
                  </div>
                </div>
              )}

              {/* Tab: Height Weight */}
              {activeTab === 'height_weight' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col justify-center space-y-12 relative z-10 italic uppercase font-black">
                  <h3 className="text-3xl font-black flex items-center mb-6 text-red-600 tracking-tighter border-b dark:border-slate-800 pb-6 uppercase italic">
                    <Activity className="w-10 h-10 mr-6 text-red-500" />
                    9ï¸âƒ£ Physiological Case Study
                  </h3>
                  <div className="bg-red-500/5 p-14 rounded-[5.5rem] border border-red-500/20 flex flex-col items-center justify-center relative overflow-hidden group/case italic">
                     <div className="absolute top-0 right-0 p-14 opacity-[0.05] grayscale-0 group-hover/case:rotate-12 transition-transform duration-1000"><Presentation className="w-48 h-48 text-red-400" /></div>
                     <div className="text-4xl font-black text-red-600 mb-8 italic underline decoration-red-500/20 underline-offset-8 tracking-tighter uppercase">Height vs Weight</div>
                     <p className="text-sm font-bold text-slate-500 text-center leading-relaxed italic max-w-sm lowercase opacity-70">
                        "Visualizing physiological data to confirm linear correlation between height (cm) and weight (kg)."
                     </p>
                  </div>
                  <button onClick={() => runDemo('height_weight')} className="w-full py-8 bg-black text-white dark:bg-white dark:text-black font-black rounded-[4.5rem] shadow-2xl hover:bg-slate-900 transition-all text-[11px] tracking-[0.5em] italic uppercase ring-offset-4 active:ring-8 ring-red-500/10">Analyze Biological Variables</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10 font-mono italic">
            
            {/* Coordinate Logic Engine Terminal */}
            <div className="bg-[#0b0c10] rounded-[5rem] p-12 border border-slate-800 flex-1 min-h-[560px] shadow-2xl relative overflow-hidden group/terminal flex flex-col italic font-black">
               <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] group-hover/terminal:bg-red-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-10 px-6 transition-all">
                    <div className="flex items-center">
                      <Terminal className="w-8 h-8 mr-6 text-red-500/70 animate-pulse font-bold" />
                      <h3 className="font-black text-slate-700 uppercase text-[10px] tracking-[0.6em] font-mono">
                         SCALAR_ENGINE_v8
                      </h3>
                    </div>
                    <div className="flex space-x-3">
                       <div className="w-4 h-4 rounded-full bg-red-950 shadow-inner"></div>
                       <div className="w-4 h-4 rounded-full bg-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[420px] custom-scrollbar px-6 space-y-8 leading-loose uppercase italic tracking-tighter">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-14 opacity-20 select-none filter hover:brightness-150 transition-all duration-700 grayscale hover:grayscale-0">
                        <MonitorPlay className="w-28 h-28 stroke-[1px] animate-pulse [animation-duration:6000ms]" />
                        <div className="text-center">
                           <span className="block text-[9px] uppercase tracking-[0.8em] font-black text-red-600 mb-4 underline decoration-red-500/30 underline-offset-10 italic">Buffer Standby...</span>
                           <span className="text-[11px] font-black text-white/40 tracking-widest decoration-white/5 underline underline-offset-4">Rasterization Logic Required</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-6">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-8 duration-700 flex items-start group/line">
                              <span className="text-red-500/30 mr-6 font-black select-none text-[8px] mt-1 shrink-0 uppercase tracking-widest decoration-red-500/10 underline italic font-mono tracking-tighter">plt::out</span>
                              <span className={`leading-relaxed font-black transition-colors ${
                                line.includes('Success') || line.includes('Performance') ? 'text-red-400 font-extrabold tracking-tight underline decoration-red-500/10 underline-offset-6 font-mono' :
                                line.includes('Defining') || line.includes('Loading') || line.includes('Scanning') ? 'text-amber-500 italic lowercase' :
                                line.includes('Executing') || line.includes('Applying') || line.includes('Validating') ? 'text-indigo-400 uppercase italic' :
                                line.includes('Result') ? 'text-red-500 font-black tracking-widest uppercase border-b border-red-500/20' :
                                'text-slate-600 italic uppercase text-[9px] tracking-tight decoration-slate-900 underline underline-offset-4'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-16 flex justify-between items-center border-t border-white/5 mt-14 italic uppercase font-black">
                           <div className="flex items-center gap-5">
                              <span className="w-3.5 h-3.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.7)]"></span>
                              <span className="text-[10px] text-slate-800 font-black tracking-[0.5em] decoration-red-500/10 underline italic font-mono lowercase">Raster matrix locked</span>
                           </div>
                           <button onClick={resetConsole} className="text-[10px] text-red-500/70 hover:text-red-400 font-black tracking-[0.4em] font-mono transition-colors border-b-2 border-red-500/10 uppercase italic">Flush IO</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Course Evolution Architecture */}
            <div className="bg-gradient-to-br from-red-950 via-orange-950 to-slate-900 p-12 rounded-[5.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-red-400/10 rounded-full blur-[120px]"></div>
               <h4 className="text-white font-black text-[11px] mb-12 flex items-center uppercase tracking-[0.6em] opacity-80 underline decoration-red-500 underline-offset-10 italic tracking-tighter">
                 <List className="w-6 h-6 text-red-400 mr-5" />
                 Specialist roadmap
               </h4>
               <div className="space-y-6 px-4 relative z-10 italic uppercase font-black tracking-tighter">
                  {[
                    "Matplotlib Line Plot", "Matplotlib Bar Chart", "Matplotlib Scatter Plot", "Matplotlib Histogram", "Matplotlib Box Plot"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-14 h-12 rounded-2xl flex items-center justify-center mr-8 transition-all duration-700 hover:scale-110 ${i === 2 ? 'bg-red-600 shadow-2xl shadow-red-500/50 rotate-12' : 'bg-white/5 border border-white/10 opacity-30 select-none grayscale'}`}>
                          <span className={`text-[12px] font-black italic ${i === 2 ? 'text-white' : 'text-slate-600'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-black tracking-widest transition-colors uppercase italic ${i === 2 ? 'text-red-400 underline decoration-red-500/30 underline-offset-10' : 'text-slate-800'}`}>{path}</span>
                       {i === 2 && <Sparkles className="w-5 h-5 ml-auto text-red-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Analysis Advice */}
      <section className="max-w-6xl mx-auto mb-24 px-4 overflow-hidden italic font-black">
        <div className="bg-white dark:bg-slate-900 p-16 sm:p-28 rounded-[7rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 p-24 opacity-[0.04] scale-150 rotate-12 -z-0 pointer-events-none grayscale-0 group-hover:-rotate-12 transition-transform [transition-duration:4000ms] transition-all">
             <Target className="w-[40rem] h-[40rem] text-red-500 font-black" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-28 gap-12 relative z-10 tracking-tighter decoration-red-500/20 underline underline-offset-[20px] italic">
             <div className="flex items-center">
                <div className="p-6 bg-red-100 dark:bg-red-900/30 rounded-[3.5rem] mr-12 shadow-2xl transition-transform hover:rotate-6">
                   <Lightbulb className="w-14 h-14 text-red-600 dark:text-red-400 font-bold italic" />
                </div>
                <div>
                   <h2 className="text-5xl text-slate-900 dark:text-white mb-3 uppercase tracking-tighter italic">
                      Scalar Strategy Grid
                   </h2>
                   <p className="text-xl text-slate-500 dark:text-slate-400 font-bold tracking-tight lowercase italic border-l-4 border-red-500/20 pl-8">Scatter Plot Specialist Expert Advice.</p>
                </div>
             </div>
             <div className="h-0.5 w-48 bg-red-500/20 hidden md:block italic tracking-widest">--- ANALYSIS_MOD ---</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10 italic">
             {[
               { t: "Correlation Focus", d: "Ideal for machine learning datasets and statistical research to spot feature relationships instantly.", i: Target, c: "text-red-600" },
               { t: "Marker Size Balance", d: "Avoid s > 150 for dense sets. Overlapping markers can obscure data density and clusters.", i: Maximize, c: "text-orange-600" },
               { t: "Categorical Tinting", d: "Use different colors (c='red', 'blue') to distinguish distinct categories within the same coordinate plane.", i: Users, c: "text-indigo-500" },
               { t: "Regression Fusion", d: "Combine scatter points with regression trend lines for professional data science modeling.", i: TrendingUp, c: "text-red-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip transition-all hover:translate-x-4 duration-500 cursor-help">
                 <div className={`p-8 bg-slate-50 dark:bg-slate-800 rounded-[3.5rem] mr-12 shadow-sm group-hover/tip:bg-red-500/10 transition-all duration-1000 ${tip.c} bg-opacity-20 shrink-0 font-black`}>
                    <tip.i className="w-12 h-12 group-hover/tip:rotate-12 group-hover/tip:scale-125 transition-transform font-bold italic shadow-2xl" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-black text-slate-900 dark:text-white mb-6 group-hover/tip:text-red-600 transition-colors uppercase tracking-[0.5em] text-[11px] underline decoration-red-500/10 italic">â­ SCALAR TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-black italic tracking-tighter opacity-80 lowercase decoration-red-500/5 underline underline-offset-8">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Real-World Analysis Showcase */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
         <div className="bg-red-600/5 rounded-[6rem] p-16 sm:p-24 border border-red-500/10 relative group overflow-hidden italic shadow-2xl backdrop-blur-3xl font-black transition-all">
            <div className="absolute top-0 right-0 p-14 opacity-[0.06] grayscale hover:grayscale-0 transition-all [transition-duration:2000ms]"><MonitorPlay className="w-[35rem] h-[35rem] text-red-500 font-bold" /></div>
            <div className="relative z-10 flex flex-col xl:flex-row items-center gap-20">
               <div className="flex-1 text-center xl:text-left">
                  <h3 className="text-5xl font-black text-red-600 mb-10 tracking-tighter uppercase italic underline decoration-red-500/10 underline-offset-[16px]">9ï¸âƒ£ Height vs Weight Model</h3>
                  <p className="text-xl font-black text-slate-500 dark:text-slate-400 mb-14 leading-relaxed italic opacity-80 lowercase decoration-red-500/5 underline underline-offset-10">
                     "Measuring the physiological correlation between stature and mass. A foundational study in biological data science."
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10">
                     {[
                       { v: "X: Height (cm)", c: "bg-red-500/10" },
                       { v: "Y: Weight (kg)", c: "bg-red-600/20" }
                     ].map(v => (
                       <div key={v.v} className={`${v.c} px-10 py-6 rounded-[3rem] text-[11px] font-black text-red-600 uppercase tracking-widest text-center italic border border-red-500/10 shadow-xl`}>{v.v}</div>
                     ))}
                  </div>
                  <button onClick={() => runDemo('height_weight')} className="w-full py-8 bg-red-600 text-white font-black rounded-[4rem] shadow-2xl hover:bg-red-500 focus:ring-[12px] ring-red-500/20 flex items-center justify-center gap-6 transition-all italic text-[12px] tracking-widest uppercase border-b-6 border-red-900/50 active:translate-y-2">
                     <Presentation className="w-6 h-6 fill-current" /> Initialize Scalar Scan
                  </button>
               </div>
               <div className="w-full xl:w-[28rem] bg-slate-950 p-14 rounded-[7rem] border border-red-500/30 shadow-2xl group/ex transform hover:-rotate-1 transition-transform">
                  <div className="flex items-center justify-center h-56 relative overflow-hidden mb-10 bg-red-500/5 rounded-[4rem] border border-red-500/10 shadow-inner">
                     <Target className="w-32 h-32 text-red-500/20 group-hover/ex:scale-150 transition-transform [transition-duration:4000ms] font-black" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-red-500/10 tracking-[1.5em] uppercase select-none cursor-not-allowed">MODEL_LOCKED</div>
                  </div>
                  <div className="h-0.5 w-full bg-red-500/20 mb-10 px-6"></div>
                  <div className="flex flex-col gap-6 font-mono opacity-60 italic text-[10px]">
                    <div className="flex justify-between font-black tracking-widest uppercase"><span>UNIT_X</span> <span className="text-red-500 underline decoration-red-500/20 underline-offset-8 tracking-widest uppercase font-black">Height::cm</span></div>
                    <div className="flex justify-between font-black tracking-widest uppercase"><span>UNIT_Y</span> <span className="text-red-500 underline decoration-red-500/20 underline-offset-8 tracking-widest uppercase font-black">Weight::kg</span></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Practice Laboratory Mission */}
      <section className="max-w-4xl mx-auto pb-28 px-6 md:px-0">
        <div className="bg-gradient-to-br from-red-700 via-orange-800 to-slate-950 p-16 sm:p-28 rounded-[8.5rem] shadow-2xl relative overflow-hidden group border-b-[12px] border-red-900/40 transform hover:scale-[1.01] transition-all">
          <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[140px] -z-0 pointer-events-none group-hover:scale-125 transition-transform [transition-duration:5000ms]"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-24 items-center italic font-black">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-full text-[11px] font-black mb-14 border border-white/20 tracking-[0.5em] uppercase shadow-2xl backdrop-blur-2xl italic tracking-tighter decoration-white/20 underline underline-offset-8">
                ðŸŽ¯ Correlation Lab
              </div>
              <h2 className="text-6xl font-black text-white mb-12 leading-[1.0] tracking-tighter uppercase italic decoration-white/10 underline underline-offset-[16px]">
                Exercise vs Calories
              </h2>
              <p className="text-orange-100 text-lg mb-16 leading-relaxed font-black pr-8 opacity-90 italic border-l-6 border-orange-400 pl-10 lowercase tracking-widest decoration-white/10 underline underline-offset-10">
                Visualize the thermodynamics! Create a scatter plot showing <b>Exercise Hours</b> vs <b>Calories Burned</b>. Don't forget specific axes labels!
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-red-950 hover:bg-slate-50 px-20 py-10 rounded-[5rem] text-[15px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-90 uppercase tracking-[0.4em] italic mx-auto xl:mx-0 border-b-8 border-red-900/30 transform hover:translate-y-[-4px]"
               >
                 <Play className="w-6 h-6 mr-6 fill-red-950 group-hover/btn:rotate-180 transition-transform duration-700" />
                 Initiate Scalar Trial
               </button>
            </div>

            <div className="w-full xl:w-[26rem] relative font-mono">
               <div className="bg-[#0b0c10] rounded-[7rem] border border-white/10 p-20 relative shadow-2xl overflow-hidden group-hover:rotate-3 transition-transform duration-1000 rotate-2">
                  <div className="flex justify-between items-center mb-16 px-6 opacity-40">
                    <div className="flex gap-4">
                       <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)] animate-pulse"></div>
                       <div className="w-4 h-4 rounded-full bg-red-500/40"></div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.6em] italic decoration-white/10 underline underline-offset-8 tracking-widest uppercase">LOG_v8</span>
                  </div>

                  <div className="h-56 relative flex items-center justify-center p-12 bg-red-500/5 rounded-[5rem] border border-red-500/10 overflow-hidden font-black group/m">
                     <Target className="w-28 h-28 text-red-500/20 group-hover/m:rotate-[360deg] transition-transform [transition-duration:6000ms] font-black shadow-2xl" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-red-500/10 tracking-[2em] uppercase cursor-help select-none font-bold">CALIBRATING...</div>
                  </div>
                  
                  <div className="mt-16 flex items-center justify-center gap-6 text-red-500/10 text-[11px] font-black uppercase tracking-[0.7em] select-none italic underline decoration-red-500/5 underline-offset-10 italic">
                     <ClipboardCheck className="w-5 h-5" />
                     Scalar Rasterized
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Design Signature Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-28 opacity-40 hover:opacity-100 transition-all font-black uppercase italic tracking-[0.2em] decoration-red-500/10 underline underline-offset-[12px]">
         <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed mb-8">
            Scatter plots are the architects of statistical proof. Master the markers, reveal the clusters, and prove the logic through coordinates.
         </p>
         <div className="h-0.5 w-40 bg-red-500/10 mx-auto transition-all hover:w-[40rem] duration-1000"></div>
      </footer>

    </div>
  );
}

export default MplScatter;
