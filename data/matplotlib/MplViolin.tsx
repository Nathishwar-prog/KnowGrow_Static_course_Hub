import React, { useState } from 'react';
import { 
  Activity, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  Layers, List, Check, Eye, ShieldCheck, 
  TrendingUp, MonitorPlay, MousePointer2, 
  Box, Maximize, Clock, Target, 
  Presentation, Sparkles, MoveRight, 
  HelpCircle, GitCommit, BarChart3, 
  ClipboardCheck, Share2
} from 'lucide-react';

function MplViolin() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'multi' | 'indicators' | 'exams'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_violin':
        outLines = [
          'Initializing Dataset: [10, 12, 14, 15, 18, 20, 22, 25]',
          'Calculating Kernel Density Estimation (KDE)...',
          'plt.violinplot(data) executing...',
          'Rasterizing symmetrical violin hull...',
          'Success: Basic distribution density rendered.'
        ];
        break;
      case 'multi_violin':
        outLines = [
          'Group A: [10, 12, 14, 15, 18]',
          'Group B: [20, 22, 24, 26, 28]',
          'Group C: [30, 32, 34, 36, 38]',
          'Executing multi-dataset positioning...',
          'plt.xticks([1, 2, 3], ["Group A", "Group B", "Group C"])',
          'Success: Comparative violin matrix generated.'
        ];
        break;
      case 'indicators_violin':
        outLines = [
          'Setting showmeans=True...',
          'Setting showmedians=True...',
          'Calculating statistical center points...',
          'Injecting mean/median markers into violin hulls...',
          'Success: Statistical indicators added to distribution.'
        ];
        break;
      case 'exams_case':
        outLines = [
          'Loading Math Scores: [70, 75, 80, 85, 90]',
          'Loading Science Scores: [65, 70, 78, 82, 88]',
          'Normalizing subject axis...',
          'plt.violinplot([math, science])',
          'Success: Exam score variance comparison ready.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Scanning for Class A/B study hours...',
          'Validating plt.violinplot(data) matrix... OK.',
          'Checking xticks mapping... FOUND.',
          'Verifying Title: "Study Hours Distribution"... YES.',
          'Performance: 100/100. Student plot distributed perfectly!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100 italic font-black">
      
      {/* 1. Header with Activity/Density Design */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden italic">
        <div className="absolute top-0 left-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-5 bg-rose-100 dark:bg-rose-900/30 rounded-[2.5rem] mb-10 shadow-sm border border-rose-200 dark:border-rose-800/50 hover:scale-110 transition-transform cursor-pointer group">
          <Activity className="w-14 h-14 text-rose-600 dark:text-rose-400 group-hover:rotate-12 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-[10px] font-black mb-6 border border-rose-500/20 tracking-[0.4em] uppercase shadow-lg backdrop-blur-md italic">
          Statistical Distribution Module
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic uppercase underline decoration-rose-500/20 underline-offset-[16px]">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-rose-400">Violin Plots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold italic">
          "Visualize the shape of your data. Violin plots combine the power of box plots with probability density to reveal the true fingerprint of your datasets."
        </p>
      </header>

      {/* 2. Conceptual Foundation Overview */}
      <section className="max-w-6xl mx-auto mb-20 px-4 italic font-black">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between transition-all hover:shadow-2xl font-black">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-rose-500 rounded-2xl shadow-lg shadow-rose-500/20 mr-6 group-hover:rotate-6 transition-transform">
                  <Info className="w-6 h-6 text-white italic shadow-2xl" />
                </div>
                <h2 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter decoration-rose-500/10 underline underline-offset-8 font-black">1ï¸âƒ£ Probability Density</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-rose-500 pl-8 transition-colors group-hover:text-slate-900 dark:group-hover:text-white underline decoration-rose-500/5 underline-offset-8 font-black">
                "A violin plot combines features of a box plot and a density plot to show the distribution of numerical data by displaying its probability density."
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { l: "Symmetrical Hull", i: Target },
                   { l: "Density Logic", i: Presentation }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800/50 hover:bg-rose-500/5 transition-all">
                      <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center mr-5">
                         <mod.i className="w-4 h-4 text-rose-500" />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-black italic">{mod.l}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-700 via-pink-800 to-indigo-950 p-10 rounded-[4rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group font-black italic">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white font-black italic uppercase italic shadow-sm italic">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter underline decoration-white/20 underline-offset-8 font-black">
                 <ShieldCheck className="w-8 h-8 mr-5" />
                 2ï¸âƒ£ Why Statistics?
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 leading-tight">
                 {[
                   { t: "Distribution Shape", d: "Reveals data skewness.", i: Zap },
                   { t: "Density View", d: "Displays where values cluster.", i: Eye },
                   { t: "Multi Comparison", d: "Excellent for group analysis.", i: Presentation },
                   { t: "Statistical Anal.", d: "Standard in scientific research.", i: Target }
                 ].map((mod, i) => (
                   <div key={i} className="flex flex-col p-6 bg-white/10 rounded-[3rem] border border-white/5 hover:bg-white/20 transition-all cursor-crosshair group/item relative overflow-hidden font-black">
                      <mod.i className="w-8 h-8 mb-4 text-rose-200 group-hover/item:scale-110 transition-transform font-bold italic shadow-2xl shadow-sm" />
                      <div>
                         <h5 className="font-black text-xs tracking-widest tracking-tighter mb-1 uppercase font-black">{mod.t}</h5>
                         <p className="text-[9px] text-white/40 font-bold decoration-white/5 underline underline-offset-4 font-black">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-6 bg-white/5 rounded-[2.5rem] border border-white/10 flex items-center shadow-2xl backdrop-blur-md">
                  <Sparkles className="w-6 h-6 text-rose-200 mr-5 animate-pulse font-black" />
                  <p className="text-xs font-black leading-relaxed opacity-80 decoration-rose-200/20 underline underline-offset-4 tracking-tighter uppercase italic shadow-sm font-black">
                    Violin plots provide more information than standard box plots.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Distribution Studio */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4 italic font-black">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-10">
           <div className="flex items-center translate-x-4">
             <div className="p-4 bg-rose-100 dark:bg-rose-900/40 rounded-[3rem] mr-8 shadow-2xl border border-rose-200 dark:border-rose-800 transition-all hover:rotate-6 font-black shadow-2xl font-black">
               <Terminal className="w-10 h-10 text-rose-600 dark:text-rose-400 font-bold italic shadow-2xl" />
             </div>
             <div>
               <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight underline decoration-rose-500/10 underline-offset-10 italic uppercase tracking-tighter font-black underline shadow-sm italic">Distribution Studio</h2>
               <p className="text-xs text-slate-500 font-black uppercase tracking-[0.5em] mt-3 italic underline decoration-rose-500/10 underline-offset-4 opacity-70">plt.violinplot() Density Engine</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-2 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar font-black shadow-2xl font-black">
            {[
              { id: 'basics', label: 'Basic Violin', icon: Code },
              { id: 'multi', label: 'Multi Comparison', icon: Layers },
              { id: 'indicators', label: 'Statistical Markers', icon: GitCommit },
              { id: 'exams', label: 'Score Hub', icon: Presentation }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-8 py-5 rounded-[4rem] text-[11px] font-black tracking-widest uppercase transition-all whitespace-nowrap italic ${
                  activeTab === tab.id 
                    ? 'bg-rose-600 text-white shadow-xl shadow-rose-900/40 scale-105 font-black uppercase' 
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
          <div className="lg:col-span-12 xl:col-span-7 space-y-6 font-black italic shadow-2xl">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-14 rounded-[5rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[640px] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.04] rotate-12 -z-0 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl"><Activity className="w-[30rem] h-[30rem] text-rose-500" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col relative z-10 italic font-black">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-rose-600 tracking-tighter uppercase italic underline decoration-rose-500/20 underline-offset-8 font-black">
                    <Code className="w-10 h-10 mr-6 text-rose-500 font-bold italic shadow-2xl" />
                    3ï¸âƒ£ & 4ï¸âƒ£ Core Implementation
                  </h3>
                  <div className="space-y-12 flex-1 flex flex-col justify-center italic font-black">
                    <div className="p-8 bg-rose-500/5 rounded-[3rem] border border-rose-500/10 italic font-black">
                       <span className="block text-[10px] text-rose-600 uppercase tracking-[0.4em] mb-4 shadow-sm italic underline decoration-rose-500/10">The Core Function</span>
                       <code className="text-2xl font-mono text-slate-700 dark:text-slate-300 tracking-tighter font-black shadow-sm">plt.<span className="text-rose-500 font-black">violinplot</span>(dataset)</code>
                    </div>

                    <div className="bg-slate-950 p-12 rounded-[5rem] border border-rose-500/20 shadow-2xl relative group/code overflow-hidden font-black">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/code:scale-110 transition-all font-mono italic shadow-2xl"><Target className="w-40 h-40 text-rose-500" /></div>
                        <pre className="font-mono text-xs sm:text-sm leading-8 text-slate-300 relative z-10 italic">
                           data = [10, 12, 14, 15, 18, 20, 22, 25]<br/><br/>
                           plt.<span className="text-rose-500 underline decoration-rose-500/30 underline-offset-8 font-black">violinplot</span>(data)<br/><br/>
                           plt.title("Basic Violin Plot")<br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_violin')} className="absolute bottom-12 right-12 p-8 bg-rose-600 text-white rounded-[2.5rem] shadow-2xl hover:bg-rose-500 transition-all active:scale-90 group-hover/code:ring-8 ring-rose-500/10 font-black shadow-2xl shadow-sm italic">
                           <Play className="w-8 h-8 fill-current font-black" />
                        </button>
                    </div>
                    
                    <div className="flex items-center p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-[3.5rem] shadow-sm italic text-[11px] font-black italic">
                       <HelpCircle className="w-8 h-8 text-rose-500 mr-8 shrink-0 animate-bounce font-black italic shadow-2xl font-black" />
                       <p className="text-slate-500 font-black uppercase tracking-widest leading-relaxed shadow-sm">
                         Result: A symmetrical violin hull visualizing value <span className="text-rose-600 underline shadow-sm">spread</span> and <span className="text-rose-600 underline shadow-sm">density</span>.
                       </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Multi Comparison */}
              {activeTab === 'multi' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center italic font-black">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-rose-500 uppercase tracking-tighter italic font-black underline decoration-rose-500/10 underline-offset-8">
                    <Layers className="w-10 h-10 mr-6 text-rose-500 font-bold italic shadow-2xl" />
                    5ï¸âƒ£ & 6ï¸âƒ£ Comparative Analysis
                  </h3>
                  <div className="bg-rose-500/5 p-10 rounded-[5rem] border border-rose-500/10 italic font-black">
                     <p className="text-sm font-bold text-slate-500 mb-10 leading-relaxed italic pr-12 text-slate-400 font-black lowercase underline decoration-rose-500/5 underline-offset-8 italic shadow-sm">
                        "Violin plots are especially useful for comparing multiple groups side-by-side. Use xticks() to label each dataset."
                     </p>
                     <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-rose-500/20 shadow-2xl relative font-mono italic font-black uppercase tracking-tighter shadow-sm font-black italic">
                        <pre className="text-rose-300 text-[11px] leading-8">
                           {`data = [[G1], [G2], [G3]]
plt.violinplot(data)
plt.xticks([1,2,3], ["A", "B", "C"])`}
                        </pre>
                     </div>
                     <button onClick={() => runDemo('multi_violin')} className="w-full py-8 bg-rose-700 text-white font-black rounded-[4rem] shadow-2xl hover:bg-rose-600 transition-all text-xs tracking-[0.5em] italic uppercase mt-12 transform hover:scale-[1.02] active:scale-95 font-black shadow-2xl">Execute Grouped Comparison</button>
                  </div>
                </div>
              )}

              {/* Tab: Statistical Markers */}
              {activeTab === 'indicators' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center italic font-black">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-pink-500 uppercase tracking-tighter italic font-black underline decoration-rose-500/20 underline-offset-8 font-black">
                    <GitCommit className="w-10 h-10 mr-6 text-pink-500 font-bold italic shadow-2xl font-black" />
                    7ï¸âƒ£ Indicators (Mean & Median)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-black italic shadow-sm italic">
                    {[
                      { l: "showmeans", v: "True", d: "Avg Value" },
                      { l: "showmedians", v: "True", d: "Mid Value" },
                      { l: "showextrema", v: "True", d: "Min/Max" }
                    ].map((param, i) => (
                      <div key={i} className="p-6 bg-pink-500/5 rounded-[2.5rem] border border-pink-500/10 hover:bg-pink-500/20 transition-all font-black shadow-sm">
                         <span className="block text-[10px] text-pink-600 uppercase tracking-widest mb-2 font-black italic shadow-sm">{param.l}</span>
                         <code className="text-lg text-pink-500 font-black shadow-sm">={param.v}</code>
                         <p className="text-[9px] text-slate-500 mt-2 font-black uppercase italic shadow-sm">{param.d}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[4rem] border border-pink-500/20 shadow-2xl relative font-mono italic shadow-2xl">
                     <pre className="text-pink-400 text-xs leading-loose italic font-black uppercase tracking-tighter shadow-sm font-black">
                        plt.violinplot(data, <br/>
                        &nbsp;&nbsp;<span className="text-white font-black">showmeans</span>=True, <br/>
                        &nbsp;&nbsp;<span className="text-white font-black">showmedians</span>=True)
                     </pre>
                  </div>
                  <button onClick={() => runDemo('indicators_violin')} className="w-full py-8 bg-pink-700 text-white font-black rounded-[4rem] shadow-2xl hover:bg-pink-600 transition-all text-[11px] tracking-widest uppercase italic font-black shadow-2xl">Rasterize Statistical Markers</button>
                </div>
              )}

              {/* Tab: Exam Hub */}
              {activeTab === 'exams' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col justify-center space-y-12 relative z-10 italic uppercase font-black font-black italic shadow-2xl">
                  <h3 className="text-3xl font-black flex items-center mb-6 text-rose-600 tracking-tighter border-b dark:border-slate-800 pb-6 uppercase italic underline decoration-rose-500/10 underline-offset-8 font-black">
                    <Presentation className="w-10 h-10 mr-6 text-rose-500 font-bold italic shadow-2xl" />
                    8ï¸âƒ£ Exam Score Analytics Case
                  </h3>
                  <div className="bg-rose-500/5 p-14 rounded-[5.5rem] border border-rose-500/20 flex flex-col items-center justify-center relative overflow-hidden group/case italic font-black shadow-sm">
                     <div className="absolute top-0 right-0 p-14 opacity-[0.05] grayscale-0 group-hover/case:rotate-12 transition-transform duration-1000 font-black shadow-2xl italic"><Activity className="w-48 h-48 text-rose-400 font-bold italic shadow-2xl shadow-sm font-black shadow-sm" /></div>
                     <div className="text-4xl font-black text-rose-600 mb-8 italic underline decoration-rose-500/20 underline-offset-8 tracking-tighter uppercase font-black italic shadow-sm italic shadow-2xl">Math vs Science</div>
                     <p className="text-sm font-bold text-slate-500 text-center leading-relaxed italic max-w-sm lowercase opacity-70 underline decoration-rose-500/5 underline-offset-6 font-black shadow-sm italic shadow-sm shadow-sm font-black">
                        "Deploying twin violin hulls to compare the probability density of exam scores, identifying which subject has higher performance consistency."
                     </p>
                  </div>
                  <button onClick={() => runDemo('exams_case')} className="w-full py-8 bg-black text-white dark:bg-white dark:text-black font-black rounded-[4.5rem] shadow-2xl hover:bg-slate-900 transition-all text-[11px] tracking-[0.5em] italic uppercase ring-offset-4 active:ring-[10px] ring-rose-500/10 font-black shadow-2xl">Deploy Analytic Benchmark</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10 font-mono italic font-black font-black italic shadow-2xl shadow-sm font-black">
            
            {/* Density Engine Terminal */}
            <div className="bg-[#0b0c10] rounded-[5rem] p-12 border border-slate-800 flex-1 min-h-[560px] shadow-2xl relative overflow-hidden group/terminal flex flex-col italic font-black shadow-2xl shadow-sm font-black shadow-sm">
               <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[100px] group-hover/terminal:bg-rose-500/10 transition-all duration-1000 font-black shadow-2xl shadow-sm shadow-sm"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1 italic font-black shadow-2xl shadow-sm shadow-sm">
                  <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-10 px-6 font-black font-black shadow-sm">
                    <div className="flex items-center">
                      <Terminal className="w-8 h-8 mr-6 text-rose-500/70 animate-pulse font-bold italic shadow-2xl font-black" />
                      <h3 className="font-black text-slate-700 uppercase text-[10px] tracking-[0.6em] font-mono font-black italic shadow-sm shadow-sm font-black">
                         DENSITY_ENGINE_v7
                      </h3>
                    </div>
                    <div className="flex space-x-3">
                       <div className="w-4 h-4 rounded-full bg-rose-950 shadow-inner shadow-sm italic shadow-sm"></div>
                       <div className="w-4 h-4 rounded-full bg-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.5)] shadow-sm italic shadow-sm"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[420px] custom-scrollbar px-6 space-y-8 leading-loose uppercase italic tracking-tighter font-black shadow-2xl shadow-sm italic shadow-sm">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-14 opacity-20 select-none filter hover:brightness-150 transition-all duration-700 grayscale hover:grayscale-0 font-black italic shadow-2xl shadow-sm shadow-sm font-black shadow-sm">
                        <MonitorPlay className="w-28 h-28 stroke-[1px] animate-pulse [animation-duration:6000ms] font-black shadow-sm shadow-sm shadow-sm" />
                        <div className="text-center font-black lg:text-left shadow-sm shadow-sm shadow-sm shadow-sm">
                           <span className="block text-[9px] uppercase tracking-[0.8em] font-black text-rose-600 mb-4 underline decoration-rose-500/30 underline-offset-10 italic shadow-sm">Engine Standby...</span>
                           <span className="text-[11px] font-black text-white/40 tracking-widest decoration-white/5 underline underline-offset-4 font-black shadow-sm italic shadow-sm shadow-sm">Statistical Raster Logic Required</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-6 font-black italic shadow-2xl shadow-sm shadow-sm font-black shadow-sm">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-8 duration-700 flex items-start group/line font-black italic shadow-2xl shadow-sm shadow-sm font-black">
                              <span className="text-rose-500/30 mr-6 font-black select-none text-[8px] mt-1 shrink-0 uppercase tracking-widest decoration-rose-500/10 underline italic font-mono tracking-tighter lowercase shadow-sm">plt::violin</span>
                              <span className={`leading-relaxed font-black transition-colors ${
                                line.includes('Success') || line.includes('Performance') ? 'text-rose-400 font-extrabold tracking-tight underline decoration-rose-500/10 underline-offset-6 font-mono uppercase italic shadow-sm shadow-sm shadow-sm' :
                                line.includes('Loading') || line.includes('Scanning') || line.includes('Calculating') ? 'text-pink-400 italic lowercase shadow-sm shadow-sm shadow-sm shadow-sm' :
                                line.includes('Executing') || line.includes('Injecting') || line.includes('Setting') || line.includes('Initializing') ? 'text-rose-500 uppercase italic shadow-sm shadow-sm shadow-sm font-black shadow-sm' :
                                line.includes('Result') ? 'text-rose-500 font-black tracking-widest uppercase border-b border-rose-500/20 italic shadow-sm shadow-sm shadow-sm shadow-sm' :
                                'text-slate-600 italic uppercase text-[9px] tracking-tight decoration-slate-900 underline underline-offset-4 shadow-sm shadow-sm shadow-sm shadow-sm'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-16 flex justify-between items-center border-t border-white/5 mt-14 italic uppercase font-black font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm">
                           <div className="flex items-center gap-5 italic font-black shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm">
                              <span className="w-3.5 h-3.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_20px_rgba(244,63,94,0.7)] font-black shadow-sm shadow-sm"></span>
                              <span className="text-[10px] text-slate-800 font-black tracking-[0.5em] decoration-rose-500/10 underline italic font-mono lowercase font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">hull_density_Rastered</span>
                           </div>
                           <button onClick={resetConsole} className="text-[10px] text-rose-500/70 hover:text-rose-400 font-black tracking-[0.4em] font-mono transition-colors border-b-2 border-rose-500/10 uppercase italic font-black shadow-sm shadow-sm shadow-sm shadow-sm">Purge IO</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Course Evolution Roadmap Architecture */}
            <div className="bg-gradient-to-br from-rose-950 via-pink-950 to-slate-900 p-12 rounded-[5.5rem] border border-white/10 shadow-2xl relative overflow-hidden group font-black italic shadow-2xl transition-all shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
               <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-rose-400/10 rounded-full blur-[120px] font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm"></div>
               <h4 className="text-white font-black text-[11px] mb-12 flex items-center uppercase tracking-[0.6em] opacity-80 underline decoration-rose-500 underline-offset-10 italic tracking-tighter lowercase font-mono font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                 <List className="w-6 h-6 text-rose-400 mr-5 transition-transform group-hover:rotate-180 duration-1000 italic font-black shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" />
                 Specialist roadmap
               </h4>
               <div className="space-y-6 px-4 relative z-10 italic uppercase font-black tracking-tighter font-black shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                  {[
                    "Matplotlib Histogram", "Matplotlib Box Plot", "Matplotlib Violin Plot", "Advanced EDA", "Custom Distributions"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300 font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                       <div className={`w-14 h-12 rounded-2xl flex items-center justify-center mr-8 transition-all duration-700 hover:scale-110 shadow-2xl font-black italic ${i === 2 ? 'bg-rose-600 shadow-rose-500/50 rotate-12 font-black shadow-sm' : 'bg-white/5 border border-white/10 opacity-30 select-none grayscale shadow-sm shadow-sm'}`}>
                          <span className={`text-[12px] font-black italic ${i === 2 ? 'text-white shadow-sm' : 'text-slate-600 shadow-sm shadow-sm'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-black tracking-widest transition-colors uppercase italic ${i === 2 ? 'text-rose-400 underline decoration-rose-500/30 underline-offset-10 shadow-sm' : 'text-slate-800 shadow-sm shadow-sm'}`}>{path}</span>
                       {i === 2 && <Sparkles className="w-5 h-5 ml-auto text-rose-400 animate-pulse font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Distribution Advice */}
      <section className="max-w-6xl mx-auto mb-24 px-4 overflow-hidden italic font-black shadow-sm">
        <div className="bg-white dark:bg-slate-900 p-16 sm:p-28 rounded-[7rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
          <div className="absolute bottom-0 left-0 p-24 opacity-[0.04] scale-150 rotate-12 -z-0 pointer-events-none grayscale-0 group-hover:-rotate-12 transition-transform [transition-duration:4000ms] transition-all font-black shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm"><Activity className="w-[40rem] h-[40rem] text-rose-500 font-black shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" /></div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-28 gap-12 relative z-10 tracking-tighter decoration-rose-500/20 underline underline-offset-[20px] italic font-black uppercase italic underline shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
             <div className="flex items-center font-black italic uppercase italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                <div className="p-6 bg-rose-100 dark:bg-rose-900/40 rounded-[3.5rem] mr-12 shadow-2xl transition-transform hover:rotate-6 font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                   <Lightbulb className="w-14 h-14 text-rose-600 dark:text-rose-400 font-bold italic shadow-2xl font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" />
                </div>
                <div>
                   <h2 className="text-5xl text-slate-900 dark:text-white mb-3 uppercase tracking-tighter italic font-black underline decoration-rose-500/5 shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                      DENSITY_ANALYSIS_MOD
                   </h2>
                   <p className="text-xl text-slate-500 dark:text-slate-400 font-bold tracking-tight lowercase italic border-l-4 border-rose-500/20 pl-8 font-black underline decoration-rose-500/5 shadow-sm shadow-sm shadow-sm shadow-sm">Distribution Matrix expert advice.</p>
                </div>
             </div>
             <div className="h-0.5 w-48 bg-rose-500/20 hidden md:block italic tracking-widest font-black uppercase italic underline decoration-rose-500/5 underline-offset-4 shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">--- DENSITY_MOD ---</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10 font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
             {[
               { t: "Large Dataset Rule", d: "Violin plots work best when the dataset contains many values. They prevent the clutter that individual points or massive bars create.", i: ShieldCheck, c: "text-rose-600 shadow-sm shadow-sm shadow-sm shadow-sm" },
               { t: "Comparative Grouping", d: "Compare Departments (A vs B), Product Categories, or Class scores side-by-side to identify variance differences at a glance.", i: Share2, c: "text-rose-600 shadow-sm shadow-sm shadow-sm shadow-sm" },
               { t: "Hybrid Strategy", d: "Many analysts combine Violin plots (for distribution) with Box plots (for exact statistical summary) for a complete visual audit.", i: Layers, c: "text-rose-500 shadow-sm shadow-sm shadow-sm shadow-sm" },
               { t: "EDA Core Requirement", d: "Always include violin plots in Exploratory Data Analysis (EDA) to understand feature variance before machine learning training.", i: BarChart3, c: "text-rose-500 shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip transition-all hover:translate-x-4 duration-500 cursor-help font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                 <div className={`p-8 bg-slate-50 dark:bg-slate-800 rounded-[3.5rem] mr-12 shadow-sm group-hover/tip:bg-rose-500/10 transition-all duration-1000 ${tip.c} bg-opacity-20 shrink-0 font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm`}>
                    <tip.i className="w-12 h-12 group-hover/tip:rotate-12 group-hover/tip:scale-125 transition-transform font-bold italic shadow-2xl font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" />
                 </div>
                 <div className="pt-2 italic font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                    <h4 className="font-black text-slate-900 dark:text-white mb-6 group-hover/tip:text-rose-600 transition-colors uppercase tracking-[0.5em] text-[11px] underline decoration-rose-500/10 italic font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">â­ STAT TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-black italic tracking-tighter opacity-80 lowercase decoration-rose-500/5 underline underline-offset-8 decoration-dashed font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Production Challenge Mission */}
      <section className="max-w-4xl mx-auto pb-28 px-6 md:px-0 font-black italic shadow-2xl transition-all shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
        <div className="bg-gradient-to-br from-rose-700 via-rose-800 to-indigo-950 p-16 sm:p-28 rounded-[8.5rem] shadow-2xl relative overflow-hidden group border-b-[12px] border-rose-900/40 transform hover:scale-[1.01] transition-all italic font-black shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm text-white shadow-2xl shadow-sm shadow-sm">
          <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[140px] -z-0 pointer-events-none group-hover:scale-125 transition-transform [transition-duration:5000ms] font-black shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-24 items-center italic font-black text-white italic font-black shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
            <div className="flex-1 text-center xl:text-left font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
              <div className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-full text-[11px] font-black mb-14 border border-white/20 tracking-[0.5em] uppercase shadow-2xl backdrop-blur-2xl italic tracking-tighter decoration-white/20 underline underline-offset-10 italic font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                ðŸŽ¯ Statistical Trial Mission
              </div>
              <h2 className="text-6xl font-black text-white mb-12 leading-[1.0] tracking-tighter uppercase italic decoration-white/10 underline underline-offset-[16px] font-black shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                Study Distribution
              </h2>
              <p className="text-rose-100 text-lg mb-16 leading-relaxed font-black pr-8 opacity-90 italic border-l-6 border-rose-400 pl-10 lowercase tracking-widest decoration-white/10 underline underline-offset-10 font-black shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                Plot the density! Create a violin plot comparing daily study hours of two classes (Class A vs Class B). Use <b>plt.xticks([1,2], ["Class A", "Class B"])</b> to identifier groups and title the report: <b>"Study Hours Distribution"</b>.
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-rose-950 hover:bg-slate-50 px-20 py-10 rounded-[5rem] text-[15px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-90 uppercase tracking-[0.4em] italic mx-auto xl:mx-0 border-b-8 border-rose-900/40 transform hover:translate-y-[-4px] shadow-2xl font-black italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm"
               >
                 <Play className="w-6 h-6 mr-6 fill-rose-950 group-hover/btn:rotate-180 transition-transform duration-700 font-black shadow-2xl shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" />
                 Initiate Density Raster
               </button>
            </div>

            <div className="w-full xl:w-[26rem] relative font-mono font-black shadow-2xl italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
               <div className="bg-[#0b0c10] rounded-[7rem] border border-white/10 p-20 relative shadow-2xl overflow-hidden group-hover:rotate-3 transition-transform duration-1000 rotate-2 translate-z-10 bg-rose-500/5 font-black shadow-2xl italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                  <div className="flex justify-between items-center mb-16 px-6 opacity-40 font-black italic uppercase italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                    <div className="flex gap-4 font-black italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                       <div className="w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.8)] animate-pulse font-black shadow-sm font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm"></div>
                       <div className="w-4 h-4 rounded-full bg-rose-500/40 font-black shadow-sm font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm"></div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.6em] italic decoration-white/10 underline underline-offset-8 tracking-widest uppercase italic font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">DENSITY_v2</span>
                  </div>

                  <div className="h-56 relative flex items-center justify-center p-12 bg-rose-500/5 rounded-[5rem] border border-rose-500/10 overflow-hidden font-black group/m font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                     <Activity className="w-28 h-28 text-rose-600/30 group-hover/m:rotate-[360deg] transition-transform [transition-duration:6000ms] font-black shadow-2xl shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-rose-500/10 tracking-[2.5em] uppercase cursor-help select-none font-bold font-black shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">HULL_RASTERIZING...</div>
                  </div>
                  
                  <div className="mt-16 flex items-center justify-center gap-6 text-rose-500/10 text-[11px] font-black uppercase tracking-[0.7em] select-none italic underline decoration-rose-500/5 underline-offset-10 italic font-black uppercase font-mono shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                     <ClipboardCheck className="w-5 h-5 shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" />
                     Hull Rasterized
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Design Signature Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-28 opacity-40 hover:opacity-100 transition-all font-black uppercase italic tracking-[0.2em] decoration-rose-500/10 underline underline-offset-[12px] font-mono shadow-sm italic transition-all duration-1000 shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
         <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed mb-8 shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
            Violin plots are the fingerprint of numerical data. Reveal the shape, quantify the density, and build a consistent visual identity for your statistical reports.
         </p>
         <div className="h-0.5 w-40 bg-rose-500/10 mx-auto transition-all hover:w-[40rem] duration-1000 shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm"></div>
      </footer>

    </div>
  );
}

export default MplViolin;
