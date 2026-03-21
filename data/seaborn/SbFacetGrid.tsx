import React, { useState } from 'react';
import { 
  Info, Code, Terminal, Layers, Play,
  Zap, Activity, Target, AlignEndHorizontal,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, BarChart, 
  LineChart, LayoutDashboard, LayoutTemplate, LayoutGrid, Maximize,
  Grid2X2,
  TrendingUp
} from 'lucide-react';

const SbFacetGrid: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'multi_dim' | 'variants' | 'layout'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_plot':
        outLines = [
          'Initializing core FacetGrid architecture...',
          'Isolating subset dataframes by col="time"...',
          'Executing split: "Lunch" vs "Dinner"...',
          'Generating 1x2 empty panel layout...',
          'Mapping sns.histplot("total_bill") onto each individual axis...',
          'Structural dashboard mapped seamlessly.'
        ];
        break;
      case 'matrix_plot':
        outLines = [
          'Partitioning dynamic matrix iteratively...',
          'Detected row="sex", col="time", and hue="sex"...',
          'Generating 2x2 multi-dimensional grid framework...',
          'Mapping synchronized scatterplots within subsets...',
          'Executing g.add_legend() to explicitly render keys...',
          'Multi-variant grid finalized and locked.'
        ];
        break;
      case 'variant_plot':
        outLines = [
          'Configuring flexible plotting function injection...',
          '--> Injecting: sns.kdeplot...',
          'Mapping continuous density functions sequentially...',
          '--> Injecting: sns.scatterplot...',
          'Mapping granular scatter relationships systematically...',
          'Custom figure functions overlaid perfectly on Sub-Grids.'
        ];
        break;
      case 'layout_plot':
        outLines = [
          'Customizing grid geometry engines...',
          'Applying manual sizing: height=4, aspect=1.5...',
          'Enforcing boundary normalization: sharex=True, sharey=True...',
          'Formatting axes titles with dynamic {col_name} injection string...',
          'Grid visual hierarchy scaled natively for production.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl mb-8 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
          <LayoutGrid className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-bold mb-6 border border-emerald-500/20 tracking-[0.25em] uppercase">
          Multi-Panel Framework Engine
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">Facet Grids</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          The core underlying class behind `catplot` and `displot`. Split massive datasets by structural categories into dashboard-style small multiples instantly.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is FacetGrid?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-emerald-500 pl-6">
              "It is an explicit Object-Oriented Class designed entirely to construct a structural matrix of separate map panels based on distinct categorical subsets."
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                 <LayoutTemplate className="w-5 h-5 mr-3 text-emerald-500" />
                 Core Implementation Concept
               </h3>
               
               <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 mb-4 flex justify-between items-center px-8 flex-col sm:flex-row gap-4">
                  <div className="flex flex-col items-center">
                    <span className="font-black text-xs uppercase text-slate-400 mb-2">Step 1</span>
                    <span className="text-sm font-bold text-blue-500 bg-blue-50 dark:bg-blue-950 px-4 py-2 rounded-xl">Split by category</span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-slate-300" />
                  <div className="flex flex-col items-center">
                    <span className="font-black text-xs uppercase text-slate-400 mb-2">Step 2</span>
                    <span className="text-sm font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-950 px-4 py-2 rounded-xl">Draw multiple plots</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-emerald-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Target className="w-8 h-8 text-emerald-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Why Use It?</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                  {[
                    { t: "Compare multiple categories visually at scale", i: Layers },
                    { t: "Create 'small multiples' (complex subplots)", i: LayoutGrid },
                    { t: "Analyze high-dimensional abstract data", i: Search },
                    { t: "Build explicit dashboard-style visuals", i: LayoutDashboard }
                  ].map((reason, i) => (
                    <div key={i} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                       <reason.i className="w-5 h-5 text-emerald-500 mr-4 shrink-0" />
                       <span className="text-sm font-bold text-slate-200">{reason.t}</span>
                    </div>
                  ))}
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-emerald-500/20 font-mono text-[12px] leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># 2-Step Basic Syntax Formula</span><br/><br/>
                <span className="text-slate-500 italic"># 1. Instantiate Empty Grid</span><br/>
                g = sns.<span className="text-blue-400 font-bold">FacetGrid</span>(data, col=<span className="text-amber-300">None</span>)<br/>
                <span className="text-slate-500 italic"># 2. Map plotting function into grid slots</span><br/>
                g.<span className="text-emerald-400 font-bold">map</span>(func, <span className="text-amber-300">"x"</span>, <span className="text-amber-300">"y"</span>)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-emerald-100 dark:bg-emerald-900/40 rounded-3xl mr-6 border border-emerald-200 dark:border-emerald-800">
              <Terminal className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Subplot Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Class: sns.FacetGrid</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Flow', icon: LayoutTemplate },
              { id: 'multi_dim', label: 'Matrix & Hue', icon: Layers },
              { id: 'variants', label: 'Injection Kinds', icon: Target },
              { id: 'layout', label: 'Layout Config', icon: Maximize }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40' 
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
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-emerald-600 dark:text-emerald-400">
                    <Code className="w-6 h-6 mr-4" />
                    The Iterative Grid
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Understand the core flow: First you construct the `FacetGrid` object which physically draws blank squares. Then you use `.map()` to instruct Seaborn which plot to draw <i>inside</i> those squares.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <button onClick={() => runDemo('basic_plot')} className="absolute bottom-6 right-6 p-4 bg-emerald-600 text-white rounded-2xl shadow-xl hover:bg-emerald-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-[13px] leading-relaxed text-slate-300">
                          <code className="block mt-2 text-slate-500 italic"># 1. Setup Data</code>
                          <code className="block">df = sns.<span className="text-blue-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)</code><br/>
                          <code className="block text-slate-500 italic"># 2. Instantiate blank axes by column (time)</code>
                          <code className="block mb-2">g = sns.<span className="text-emerald-400 font-bold">FacetGrid</span>(df, <span className="text-blue-300">col</span>=<span className="text-amber-300">"time"</span>)</code><br/>
                          <code className="block text-slate-500 italic"># 3. Iteratively map histplots inside each blank col</code>
                          <code className="block text-slate-300 font-bold mb-4">g.<span className="text-emerald-400 underline">map</span>(sns.histplot, <span className="text-amber-300">"total_bill"</span>)</code>
                        </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Multi Dimensional Matrix */}
              {activeTab === 'multi_dim' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-7">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <Layers className="w-6 h-6 mr-4" />
                    Row, Col & Hue Structure
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    You can scale this up to a perfect multi-dimensional dashboard by assigning both `row` and `col` at once alongside `hue`, which maps groups uniquely per grid square.
                  </p>
                  
                  <div className="bg-slate-950 p-6 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-[12px] leading-8 text-slate-300">
                        <span className="text-slate-500"># Creates a [ Male/Female ] vs [ Lunch/Dinner ] Matrix</span><br/>
                        g = sns.<span className="text-emerald-400 font-bold">FacetGrid</span>(<br/>
                        &nbsp;&nbsp;df, <br/>
                        &nbsp;&nbsp;<span className="text-blue-400 font-bold">row</span>=<span className="text-amber-300">"sex"</span>, <span className="text-blue-400 font-bold">col</span>=<span className="text-amber-300">"time"</span>, <br/>
                        &nbsp;&nbsp;<span className="text-purple-400">hue</span>=<span className="text-amber-300">"sex"</span><br/>
                        )<br/><br/>
                        <span className="text-slate-500"># Mapping requires 'x' and 'y' when using scatter</span><br/>
                        g.<span className="text-emerald-400 font-bold">map</span>(sns.histplot, <span className="text-amber-300">"total_bill"</span>)<br/>
                        g.<span className="text-purple-400 font-bold underline">add_legend</span>() <span className="text-slate-500 italic"># CRITICAL when using hue!</span>
                     </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                     <button onClick={() => runDemo('matrix_plot')} className="px-10 py-5 bg-blue-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-blue-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Construct 2x2 DataFrame Matrix</button>
                  </div>
                </div>
              )}

              {/* Tab: Variant Mapping */}
              {activeTab === 'variants' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Target className="w-6 h-6 mr-4" />
                    Function Injection
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Because `FacetGrid.map()` simply accepts a <i>function pointer</i>, you can inject almost ANY core seaborn plot into the grid squares.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl mb-4">
                     <pre className="font-mono text-[12px] text-slate-300 leading-relaxed">
                        g = sns.FacetGrid(df, col=<span className="text-amber-300">"time"</span>)<br/><br/>
                        <span className="text-slate-500"># 1. Inject a KDE density function</span><br/>
                        g.<span className="text-emerald-400 font-bold">map</span>(<span className="text-rose-400 font-bold underline">sns.kdeplot</span>, <span className="text-amber-300">"total_bill"</span>)<br/><br/>
                        <span className="text-slate-500"># 2. Inject a bi-variate Scatter function</span><br/>
                        <span className="text-slate-500"># (Make sure to pass both X and Y target strings)</span><br/>
                        g.<span className="text-emerald-400 font-bold">map</span>(<span className="text-cyan-400 font-bold underline">sns.scatterplot</span>, <span className="text-amber-300">"total_bill"</span>, <span className="text-amber-300">"tip"</span>)
                     </pre>
                  </div>
                  
                  <button onClick={() => runDemo('variant_plot')} className="w-full py-5 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Deep Injection</button>
                </div>
              )}

              {/* Tab: Layout Layout */}
              {activeTab === 'layout' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-slate-400 flex items-center border-b dark:border-slate-800 pb-6">
                    <Maximize className="w-6 h-6 mr-4" />
                    Structural Grid Customization
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    By default, subplots can look squished. Utilize geometry tools like `height`, `aspect`, and `sharex` to standardize the view framework cleanly, completing the dashboard look.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-[11px] leading-6 text-slate-300">
                       <span className="text-slate-500"># 1. Re-scaling exact dimensions</span><br/>
                       g = sns.FacetGrid(<br/>
                       &nbsp;&nbsp;df, col=<span className="text-amber-300">"time"</span>,<br/>
                       &nbsp;&nbsp;<span className="text-emerald-400">height</span>=<span className="text-amber-300">4</span>, <span className="text-emerald-400">aspect</span>=<span className="text-amber-300">1.5</span>,<br/>
                       &nbsp;&nbsp;<span className="text-cyan-400">sharex</span>=<span className="text-purple-400">True</span>  <span className="text-slate-500"># Locks all grids to same exact Axis size</span><br/>
                       )<br/><br/>
                       g.<span className="text-emerald-400">map</span>(sns.histplot, <span className="text-amber-300">"total_bill"</span>)<br/><br/>
                       <span className="text-slate-500"># 2. Applying dynamic titles seamlessly via templating</span><br/>
                       g.<span className="text-blue-400 font-bold">set_titles</span>(<span className="text-amber-300">"Time Mapping: &#123;col_name&#125;"</span>)
                     </pre>
                  </div>

                  <button onClick={() => runDemo('layout_plot')} className="w-full py-5 bg-slate-800 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-slate-700 active:scale-95 transition-all text-xs uppercase tracking-widest border border-slate-700 group flex justify-center items-center">
                     <LayoutTemplate className="w-4 h-4 mr-3 group-hover:scale-125 transition-transform" /> Render Production Dashboard
                  </button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
             {/* Terminal Output Console */}
             <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] group-hover/terminal:bg-emerald-500/10 transition-all duration-1000"></div>
               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-emerald-500" />
                      <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                        FACET_GRID
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                        <LayoutDashboard className="w-16 h-16 opacity-5 animate-pulse" />
                        <div className="text-center relative">
                           <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Iteration</span>
                           <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-emerald-500/50 mr-4 font-black select-none text-[8px] mt-1">GRID_{i}</span>
                              <span className={`leading-relaxed font-medium ${
                                line.includes('finalized') || line.includes('seamlessly') || line.includes('perfectly') ? 'text-teal-400 font-bold' :
                                line.includes('Generating') || line.includes('Isolating') || line.includes('Mapping') ? 'text-emerald-300' :
                                line.includes('Injecting') || line.includes('Executing') || line.includes('Scaling') ? 'text-blue-400 font-bold' :
                                line.includes('Detected') || line.includes('Configuring') || line.includes('Enforcing') ? 'text-amber-400' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                           <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Grid Constructed</span>
                           <button onClick={resetConsole} className="text-[9px] text-emerald-500 hover:text-emerald-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-emerald-500/20 pb-0.5">PURGE ROW</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-emerald-500/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
               <CheckCircle2 className="w-8 h-8 text-emerald-500 mr-4" />
               Key Insights <span className="text-xs ml-3 px-2 py-1 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400 rounded-full uppercase tracking-widest hidden sm:inline">Critical</span>
             </h2>

             <div className="space-y-6">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start">
                   <Target className="w-6 h-6 text-emerald-500 mr-4 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-slate-800 dark:text-emerald-400 mb-2">Automated Categorical Sub-Splitting</h4>
                     <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                       It entirely removes the need for you to write long manual loops isolating sub-matrices of a dataframe. It maps those subsets intrinsically.
                     </p>
                   </div>
                </div>
                
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start">
                   <Target className="w-6 h-6 text-emerald-500 mr-4 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-slate-800 dark:text-emerald-400 mb-2">Applies Master Plot Across Subsets</h4>
                     <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                       When using `g.map()`, you are enforcing a strict mandate: "Draw THIS exact map function uniformly across all individual grid panels safely."
                     </p>
                   </div>
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
                  { m: "Forgetting to explicitly use .add_legend()", fx: "Since FacetGrid is lower level, if you use hue, you MUST manually trigger `g.add_legend()`, otherwise no color keys will appear." },
                  { m: "Building massively over-faceted grids.", fx: "If you have 10 categories mapping to 10 sub-categories, you create a 10x10 tiny grid that is unreadable and crashes runtime." },
                  { m: "Injecting hyper-complex aggregate plots via map.", fx: "Mapping deep statistical plots over 20 grid spaces will heavily slow rendering performance. Keep grid charts simple." }
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-blue-900/40 z-0"></div>
          
          <div className="relative z-10 mb-16 text-center">
             <h2 className="text-4xl font-black text-white mb-4 flex items-center justify-center">
               <Lightbulb className="w-10 h-10 text-amber-400 mr-4" />
               Pro Tips (From Experience)
             </h2>
             <p className="text-lg text-emerald-100/70 font-medium tracking-tight">Best practices when deploying matrix components.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
             {[
               { t: "Keep the Master Grid Simple", c: '# Logical Constraints Array:\n# Maximum 2–3 rows\n# Maximum 2–4 columns', d: "Do not exceed a 3x4 grid structure or you will create visual fatigue entirely defeating the point of data analytics." },
               { t: "Force Consistent Axes Constraints", c: 'g = sns.FacetGrid(\n  sharex=True, sharey=True\n)', d: "Usually enabled natively, but manually enforcing these standardizes X/Y markers ensuring panel 3 can be fairly visually compared back to panel 1." },
               { t: "Inject Clean Title Formats", c: '# Magic literal string injection\ng.set_titles("{col_name}")', d: "By default Seaborn appends 'col_name = X'. Passing exact strings like `{col_name}` dynamically cleans UI text removing redundant headers." },
               { t: "Enforce Standard Background Grids", c: 'sns.set_theme(style="whitegrid")', d: "Small sub-plots greatly benefit graphically from a unified stark whitegrid, providing structural contrast naturally." }
             ].map((tip, i) => (
               <div key={i} className="flex flex-col p-8 bg-slate-950/60 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:bg-slate-950 shadow-xl transition-all group">
                  <h4 className="font-extrabold text-white mb-4 flex items-center">
                     <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mr-3 text-sm">💡</span>
                     {tip.t}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{tip.d}</p>
                  <code className="bg-black/50 p-4 rounded-2xl text-emerald-300 font-mono text-[11px] whitespace-pre-wrap font-bold border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                    {tip.c}
                  </code>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Deep Comparison & Recommendation */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
         <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-gradient-to-br from-emerald-600 to-teal-800 p-10 rounded-[3rem] shadow-xl border border-white/10 text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white/20 rounded-full blur-[80px]"></div>
               <h3 className="text-xl font-bold mb-6 flex items-center relative z-10">
                  <span className="bg-white/20 p-2 rounded-xl mr-3"><Target className="w-5 h-5"/></span>
                  Personal Rec.
               </h3>
               
               <p className="text-sm font-bold tracking-widest uppercase mb-4 text-emerald-200 mt-2">Use when:</p>
               <ul className="space-y-4 relative z-10 mb-8">
                  <li className="flex items-start text-sm font-medium text-white">
                     <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-300 shrink-0"/> You natively want deep structural dataset comparisons.
                  </li>
                  <li className="flex items-start text-sm font-medium text-white">
                     <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-300 shrink-0"/> You are literally building analytics dashboards rapidly.
                  </li>
               </ul>

               <p className="text-sm font-bold tracking-widest uppercase mb-4 text-rose-200">Avoid when:</p>
               <ul className="space-y-4 relative z-10">
                  <li className="flex items-start text-sm font-medium text-white">
                     <AlertTriangle className="w-5 h-5 mr-3 text-rose-400 shrink-0"/> A high-order figure-function is adequate (i.e., use <code className="bg-black/30 px-1 rounded ml-1">catplot()</code> directly instead).
                  </li>
               </ul>
            </div>

            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                  <Table className="w-6 h-6 mr-3 text-slate-500" /> FacetGrid vs catplot
               </h3>
               
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-slate-400 font-bold">Feature Matrix</th>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-emerald-500 font-black">FacetGrid (Base)</th>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-blue-500 font-black">catplot (Wrapper)</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 border-b dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300">Total Flexibility</td>
                           <td className="p-4 border-b dark:border-slate-800 text-emerald-500 font-bold">VERY HIGH</td>
                           <td className="p-4 border-b dark:border-slate-800 text-blue-500 font-bold">MEDIUM</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 border-b dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300">Ease of Use Syntax</td>
                           <td className="p-4 border-b dark:border-slate-800 text-slate-500 font-medium">Medium (2 lines)</td>
                           <td className="p-4 border-b dark:border-slate-800 text-slate-500 font-medium">Easy (1 line)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 font-bold text-slate-700 dark:text-slate-300">Fine-grained OOP Control</td>
                           <td className="p-4 font-mono text-emerald-500 text-[11px] tracking-widest uppercase font-bold">Absolute Full Control</td>
                           <td className="p-4 font-mono text-blue-500 text-[11px] tracking-widest uppercase font-bold">Limited Abstraction</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default SbFacetGrid;
