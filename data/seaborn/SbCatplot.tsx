import React, { useState } from 'react';
import { 
  Box, Info, Code, Terminal, 
  Layers, Play, Zap, Sparkles,
  Activity, Target, LayoutDashboard,
  Palette, AlertTriangle, Lightbulb,
  Grid, BarChart3, CheckCircle2
} from 'lucide-react';

const SbCatplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'types' | 'facets' | 'styling'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_plot':
        outLines = [
          'Loading dataset "tips"...',
          'Initializing figure-level FacetGrid...',
          'Detecting kind="bar"...',
          'Routing to sns.barplot engine...',
          'Rendering complete. One function to rule them all.'
        ];
        break;
      case 'multi_types':
        outLines = [
          'Switching kind parameter dynamically...',
          '--> Executing kind="box"...',
          '--> Executing kind="violin"...',
          '--> Executing kind="strip"...',
          '--> Executing kind="swarm"...',
          'All visual styles successfully tested on the same code block.'
        ];
        break;
      case 'facet_plot':
        outLines = [
          'Initializing multi-axis FacetGrid...',
          'Parameter col="time" detected -> building horizontal splits...',
          'Parameter row="sex" detected -> building vertical splits...',
          'Generating Subplot Grid (2x2)...',
          'Populating grid with violin plots...',
          'Multi-dimensional visualization active.'
        ];
        break;
      case 'style_plot':
        outLines = [
          'Capturing FacetGrid object as "g"...',
          'Applying dimensions: height=5, aspect=1.5...',
          'Modifying global configuration: sns.set_theme(style="whitegrid")...',
          'Executing g.fig.subplots_adjust(top=0.9)...',
          'Setting g.fig.suptitle("Custom Dashboard Title")...',
          'Analytics Dashboard ready for presentation.'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Header Area */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl mb-8 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <LayoutDashboard className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-bold mb-6 border border-indigo-500/20 tracking-[0.25em] uppercase">
          Figure-Level Master
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Cat Plots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          The wrapper function that rules them all. Visualize relationships with multiple plot types and automatic sub-tabbing using a single, unified syntax.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is catplot()?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
              "It is a figure-level function used to visualize relationships between categorical and numerical data... across multiple plot types."
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                 <Sparkles className="w-5 h-5 mr-3 text-indigo-500" />
                 The Key Idea
               </h3>
               <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Instead of calling different functions like <code>boxplot()</code>, <code>violinplot()</code>, or <code>stripplot()</code> individually... <b>You can control everything using just one function -&gt; catplot().</b>
               </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-indigo-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Target className="w-8 h-8 text-indigo-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Supported "Kinds"</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { k: "bar", d: "Bar plot" },
                    { k: "box", d: "Box plot" },
                    { k: "violin", d: "Violin plot" },
                    { k: "strip", d: "Strip plot" },
                    { k: "swarm", d: "Swarm plot" },
                    { k: "point", d: "Point plot" }
                  ].map((kind, i) => (
                    <div key={i} className="flex items-center p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                       <code className="text-xs font-bold text-indigo-400 mr-3 px-2 py-0.5 bg-black/30 rounded">"{kind.k}"</code>
                       <span className="text-xs font-medium text-slate-300">{kind.d}</span>
                    </div>
                  ))}
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-indigo-500/20 font-mono text-sm text-slate-300">
                <span className="text-slate-500 italic"># Basic Syntax</span><br/>
                sns.<span className="text-purple-400">catplot</span>(<br/>
                &nbsp;&nbsp;x=<span className="text-amber-300">None</span>, y=<span className="text-amber-300">None</span>,<br/>
                &nbsp;&nbsp;data=<span className="text-amber-300">None</span>, <span className="text-indigo-400 font-bold">kind</span>=<span className="text-amber-300">"strip"</span><br/>
                )
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-3xl mr-6 border border-indigo-200 dark:border-indigo-800">
              <Terminal className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Cat Plot Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.catplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Flow', icon: BarChart3 },
              { id: 'types', label: 'Try Kinds', icon: Layers },
              { id: 'facets', label: 'Faceting', icon: Grid },
              { id: 'styling', label: 'Dashboards', icon: Palette }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${
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

        <div className="grid lg:grid-cols-12 gap-8 items-start text-slate-100">
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 transition-all min-h-[550px] flex flex-col">
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-600 dark:text-indigo-400">
                    <Code className="w-6 h-6 mr-4" />
                    Step-by-step Execution
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      One function to generate multiple visual styles. By default, it will create a <code>strip</code> plot unless defined otherwise. Let's make a Bar plot.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <button onClick={() => runDemo('basic_plot')} className="absolute bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-2xl shadow-xl hover:bg-indigo-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-[13px] leading-relaxed text-slate-300">
                          <code className="block text-purple-400 mb-2">import seaborn as sns</code>
                          <code className="block text-purple-400 mb-2">import matplotlib.pyplot as plt</code>
                          <code className="block mt-4 text-slate-500 italic"># Load Dataset</code>
                          <code className="block mb-4">df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)</code>
                          <code className="block text-slate-500 italic"># Basic Catplot (Bar type)</code>
                          <code className="block text-indigo-400 font-bold tracking-widest mb-4">sns.catplot(x="day", y="total_bill", data=df, kind="bar")</code>
                          <code className="block text-cyan-400">plt.show()</code>
                        </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Kinds */}
              {activeTab === 'types' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-purple-500">
                    <Layers className="w-6 h-6 mr-4" />
                    Try Different Plot Types
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    You can quickly pivot between entire visual philosophies by literally changing a single word in your code.
                  </p>
                  
                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <span className="text-xs text-slate-500 font-bold italic"># Box Plot</span>
                        <pre className="font-mono text-[11px] text-slate-300 bg-black/50 p-3 rounded-xl border border-slate-800">
                           sns.catplot(..., <span className="text-purple-400 font-bold">kind="box"</span>)
                        </pre>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs text-slate-500 font-bold italic"># Violin Plot</span>
                        <pre className="font-mono text-[11px] text-slate-300 bg-black/50 p-3 rounded-xl border border-slate-800">
                           sns.catplot(..., <span className="text-purple-400 font-bold">kind="violin"</span>)
                        </pre>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs text-slate-500 font-bold italic"># Strip Plot</span>
                        <pre className="font-mono text-[11px] text-slate-300 bg-black/50 p-3 rounded-xl border border-slate-800">
                           sns.catplot(..., <span className="text-purple-400 font-bold">kind="strip"</span>)
                        </pre>
                     </div>
                     <div className="space-y-2">
                        <span className="text-xs text-slate-500 font-bold italic"># Swarm Plot</span>
                        <pre className="font-mono text-[11px] text-slate-300 bg-black/50 p-3 rounded-xl border border-slate-800">
                           sns.catplot(..., <span className="text-purple-400 font-bold">kind="swarm"</span>)
                        </pre>
                     </div>
                  </div>
                  <div className="flex justify-end pt-4">
                     <button onClick={() => runDemo('multi_types')} className="px-10 py-5 bg-purple-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-purple-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Kind Simulation</button>
                  </div>
                </div>
              )}

              {/* Tab: Faceting */}
              {activeTab === 'facets' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-indigo-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Grid className="w-6 h-6 mr-4" />
                    Faceting (SUPER POWER 🔥)
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    <code>row</code> & <code>col</code> properties automatically generate entire subplot grids mapping multi-dimensional data without writing a single standard subplots loop.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800">
                     <pre className="font-mono text-[13px] text-slate-300 leading-relaxed">
                        <span className="text-slate-500"># Multi-Dimensional Visualization generated automatically</span><br/>
                        sns.<span className="text-purple-400">catplot</span>(<br/>
                        &nbsp;&nbsp;x=<span className="text-amber-300">"day"</span>, y=<span className="text-amber-300">"total_bill"</span>,<br/>
                        &nbsp;&nbsp;<span className="text-indigo-400 font-bold underline">row="sex"</span>, <br/>
                        &nbsp;&nbsp;<span className="text-indigo-400 font-bold underline">col="time"</span>, <br/>
                        &nbsp;&nbsp;data=df,<br/>
                        &nbsp;&nbsp;kind=<span className="text-amber-300">"violin"</span><br/>
                        )<br/>
                     </pre>
                  </div>
                  <button onClick={() => runDemo('facet_plot')} className="w-full py-5 bg-indigo-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-indigo-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Generate FacetGrid Matrix</button>
                </div>
              )}

              {/* Tab: Dashboards */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-fuchsia-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Palette className="w-6 h-6 mr-4" />
                    Custom Dashboard Aesthetics
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Because `catplot` returns a `FacetGrid` (not an Axes), customizing it requires accessing the object explicitly. Let's adjust spacing, themes, and master titles.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[3.5rem] border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-[12px] leading-6 text-slate-300">
                       <span className="text-slate-500"># Perfect for Business Analytics Reports</span><br/>
                       g = sns.<span className="text-indigo-400">catplot</span>(<br/>
                       &nbsp;&nbsp;x=<span className="text-amber-300">"day"</span>, y=<span className="text-amber-300">"total_bill"</span>,<br/>
                       &nbsp;&nbsp;data=df, kind=<span className="text-amber-300">"bar"</span>,<br/>
                       &nbsp;&nbsp;<span className="text-emerald-400 font-bold">palette</span>=<span className="text-amber-300">"Set2"</span>, <span className="text-cyan-400 font-bold">height</span>=<span className="text-amber-300">5</span>, <span className="text-cyan-400 font-bold">aspect</span>=<span className="text-amber-300">1.5</span><br/>
                       )<br/><br/>
                       <span className="text-slate-500 italic"># IMPORTANT: Adjusting Figure-Level attributes</span><br/>
                       g.fig.<span className="text-sky-400">subplots_adjust</span>(top=<span className="text-amber-300">0.9</span>)<br/>
                       g.fig.<span className="text-sky-400">suptitle</span>(<span className="text-amber-300">"Executive Dashboard"</span>)
                     </pre>
                  </div>

                  <button onClick={() => runDemo('style_plot')} className="w-full py-5 bg-fuchsia-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-fuchsia-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Compile Dashboard UI</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
             {/* Terminal Output Console */}
             <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] group-hover/terminal:bg-indigo-500/10 transition-all duration-1000"></div>
               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-indigo-500" />
                      <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                        CATPLOT_ENGINE
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                        <LayoutDashboard className="w-16 h-16 opacity-5 animate-pulse" />
                        <div className="text-center relative">
                           <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Facet Config</span>
                           <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-indigo-500/50 mr-4 font-black select-none text-[8px] mt-1">FACET::</span>
                              <span className={`leading-relaxed font-medium ${
                                line.includes('complete') || line.includes('ready') || line.includes('successful') ? 'text-emerald-400 font-bold' :
                                line.includes('Executing') || line.includes('Generating') ? 'text-purple-400' :
                                line.includes('global configuration') || line.includes('dimensions') ? 'text-fuchsia-400 font-bold' :
                                line.includes('multi-axis') || line.includes('splits') ? 'text-indigo-300' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                           <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution Halted</span>
                           <button onClick={resetConsole} className="text-[9px] text-indigo-500 hover:text-indigo-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-indigo-500/20 pb-0.5">PURGE</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Important Insights & Common Mistakes */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Key Insights */}
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-indigo-500/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
               <CheckCircle2 className="w-8 h-8 text-indigo-500 mr-4" />
               Key Insights <span className="text-xs ml-3 px-2 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 rounded-full uppercase tracking-widest hidden sm:inline">Crucial</span>
             </h2>

             <div className="space-y-6">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-indigo-400 mb-2">✔ Wrapper Function Magic</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                     catplot() doesn't actually plot directly; it wraps standard functions and maps them onto a massive <b>FacetGrid</b>.
                   </p>
                </div>
                
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-indigo-400 mb-2">✔ Designed for Dashboards</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                     It is fundamentally the best tool inside Seaborn for comparing multiple categories side-by-side or building multi-tab reporting.
                   </p>
                </div>
             </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-rose-50 dark:bg-rose-950/20 p-10 rounded-[3rem] shadow-xl border border-rose-500/20 relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 w-2 h-full bg-rose-500"></div>
             <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400 mb-6 flex items-center">
               <AlertTriangle className="w-8 h-8 mr-4" />
               Common Mistakes
             </h2>

             <div className="space-y-4 flex-1">
                {[
                  { m: "Using standard plt.title() directly limits features.", fx: 'Store object & use: g = sns.catplot(...)\ng.fig.suptitle("Title")' },
                  { m: "Forgetting it's a Figure-Level Object.", fx: "Unlike axes-level plots, it returns an entire FacetGrid object. Treat it accordingly!" },
                  { m: "Overusing too many facets (rows/cols).", fx: "Creating a 10x10 subplot grid with row+col will irreparably confuse readers." }
                ].map((mistake, i) => (
                   <div key={i} className="flex items-start p-4 bg-white dark:bg-slate-900 rounded-2xl border border-rose-100 dark:border-rose-900/50">
                      <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900 dark:text-rose-400 flex items-center justify-center font-bold mr-4 shrink-0 text-xs">X</div>
                      <div>
                         <p className="font-bold text-slate-800 dark:text-slate-200 mb-1 text-sm">{mistake.m}</p>
                         <p className="text-[11px] text-slate-600 dark:text-slate-400 italic font-mono mt-2">👉 {mistake.fx}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* 5. Professional Tips Grid */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="bg-slate-900 p-12 sm:p-20 rounded-[4.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-slate-900/80 z-0"></div>
          
          <div className="relative z-10 mb-16 text-center">
             <h2 className="text-4xl font-black text-white mb-4 flex items-center justify-center">
               <Lightbulb className="w-10 h-10 text-indigo-500 mr-4" />
               Pro Tips (From Experience)
             </h2>
             <p className="text-lg text-slate-300 font-medium tracking-tight">Best practices for the ultimate analytics dashboards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
             {[
               { t: "Always Store the Object", c: 'g = sns.catplot(...)\ng.set_titles("Custom Title")', d: "Don't just run and show it. Store the FacetGrid in a variable so you can fine-tune titles, margins, and properties." },
               { t: "Adjust Grid Spacing", c: 'g.fig.subplots_adjust(top=0.9)', d: "When you add large master titles using suptitle, plots might overlap. Adjust the 'top' margin to fix this!" },
               { t: "Combine with Global Themes", c: 'sns.set_theme(style="whitegrid")', d: "Makes your entire generated multi-grid immediately look professional for corporate reporting." },
               { t: "Use for Dashboards", c: 'Business Reports & Analytics', d: "Because it spawns many charts aligned accurately in a single function call, it's the undisputed king of fast EDA reporting." }
             ].map((tip, i) => (
               <div key={i} className="flex flex-col p-8 bg-slate-950/60 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:bg-slate-950 shadow-xl transition-all group">
                  <h4 className="font-extrabold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3 text-sm">🚀</span>
                    {tip.t}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{tip.d}</p>
                  <code className="bg-black/50 p-4 rounded-2xl text-indigo-300 font-mono text-[11px] whitespace-pre-wrap font-bold border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                    {tip.c}
                  </code>
               </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SbCatplot;
