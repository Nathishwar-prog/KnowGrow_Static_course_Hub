import React, { useState } from 'react';
import { 
  Info, Code, Terminal, Layers, Play,
  Zap, Activity, Target, AlignEndHorizontal,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, BarChart, 
  LineChart, Focus, GitBranch,
  TrendingUp
} from 'lucide-react';

const SbDisplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'curves' | 'grouping' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_plot':
        outLines = [
          'Initializing continuous distribution map...',
          'Engine defaulting to kind="hist"...',
          'Calculating strictly equal bin widths...',
          'Rendering vertical density bars...',
          'Adjusting granularity: applying bins=20...',
          'Histogram generated.'
        ];
        break;
      case 'curve_plot':
        outLines = [
          'Switching engine properties...',
          '--> Launching kind="kde" (Kernel Density Estimate)...',
          'Computing smooth probabilistic trends...',
          '--> Launching kind="ecdf" (Cumulative Distribution)...',
          'Calculating running proportions from 0.0 to 1.0...',
          'Distribution curves rendered successfully.'
        ];
        break;
      case 'grouping_plot':
        outLines = [
          'Detecting subset groupings...',
          '--> hue="sex": applying dual-color density mapping...',
          '--> col="time": triggering multi-figure FacetGrid matrix...',
          'Spawning separate subplots dynamically...',
          'Overlaying KDE curves (kde=True) onto faceted grids...',
          'Multi-dimensional comparisons mapped.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Generating 1000 simulated normally distributed salaries...',
          'Constraints: Mean=$50,000, StdDev=$10,000...',
          'Feeding array directly into sns.displot()...',
          'Calculating structural density and overlaying KDE...',
          'Visualizing perfect Gaussian Bell Curve.',
          'Data cleanly suited for predictive Machine Learning.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/30 rounded-3xl mb-8 shadow-sm border border-rose-200 dark:border-rose-800/50">
          <LineChart className="w-12 h-12 text-rose-600 dark:text-rose-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-[10px] font-bold mb-6 border border-rose-500/20 tracking-[0.25em] uppercase">
          Continuous Spread Engine
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500">Dist Plots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          The ultimate figure-level function to visualize the shape, spread, skewness, and outliers inside continuous numeric data arrays.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-rose-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-rose-500 rounded-2xl shadow-lg shadow-rose-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is displot()?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-rose-500 pl-6">
              "A figure-level wrapper designed explicitly for continuous data distribution. It houses Histograms, KDEs, and ECDFs in a single API."
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                 <Focus className="w-5 h-5 mr-3 text-rose-500" />
                 It helps you understand:
               </h3>
               <div className="grid grid-cols-2 gap-3">
                  {["Shape of data", "Mathematical Spread", "Skewness (Left/Right)", "Data Outliers"].map((stat, i) => (
                    <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                       <CheckCircle2 className="w-4 h-4 text-rose-500 mr-3" />
                       <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-rose-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Activity className="w-8 h-8 text-rose-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Supported "Kinds"</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                  {[
                    { k: "hist", d: "Histogram (default)", i: BarChart },
                    { k: "kde", d: "Kernel Density Plot", i: LineChart },
                    { k: "ecdf", d: "Cumulative Probability", i: TrendingUp }
                  ].map((kind, i) => (
                    <div key={i} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                       <kind.i className="w-5 h-5 text-rose-400 mr-4 shrink-0" />
                       <code className="text-xs font-bold text-rose-300 mr-3 bg-black/40 px-2 py-0.5 rounded">"{kind.k}"</code>
                       <span className="text-xs font-medium text-slate-300">{kind.d}</span>
                    </div>
                  ))}
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-rose-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Basic Syntax</span><br/>
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br/><br/>
                sns.<span className="text-rose-400 font-bold">displot</span>(data=<span className="text-amber-300">None</span>, x=<span className="text-amber-300">None</span>, kind=<span className="text-amber-300">"hist"</span>)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-rose-100 dark:bg-rose-900/40 rounded-3xl mr-6 border border-rose-200 dark:border-rose-800">
              <Terminal className="w-8 h-8 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Distribution Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.displot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Histograms', icon: BarChart },
              { id: 'curves', label: 'KDE & ECDF', icon: LineChart },
              { id: 'grouping', label: 'Hue & Facets', icon: Layers },
              { id: 'real_world', label: 'Salary Sim', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${
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

        <div className="grid lg:grid-cols-12 gap-8 items-start text-slate-100">
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 transition-all min-h-[550px] flex flex-col">
              
              {/* Tab: Histograms */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-rose-600 dark:text-rose-400">
                    <AlignEndHorizontal className="w-6 h-6 mr-4" />
                    Histograms & Bin Tuning
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      By default, `displot` generates a standard binned histogram. You can manually tweak the granularity of these bars using the <code>bins</code> parameter to expose hidden variance.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <button onClick={() => runDemo('basic_plot')} className="absolute bottom-6 right-6 p-4 bg-rose-600 text-white rounded-2xl shadow-xl hover:bg-rose-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-[13px] leading-8 text-slate-300">
                          <span className="text-slate-500 italic"># Load dataset</span><br/>
                          df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br/><br/>
                          <span className="text-slate-500 italic"># 1. Basic Histogram (Auto length)</span><br/>
                          sns.<span className="text-rose-400 font-bold tracking-widest">displot</span>(x=<span className="text-amber-300">"total_bill"</span>, data=df)<br/><br/>
                          <span className="text-slate-500 italic"># 2. Customizing discrete bins to 20 widths</span><br/>
                          sns.<span className="text-rose-400 font-bold tracking-widest">displot</span>(x=<span className="text-amber-300">"total_bill"</span>, data=df, <span className="text-purple-400 font-bold underline">bins</span>=<span className="text-amber-300">20</span>)
                        </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: KDE and ECDF */}
              {activeTab === 'curves' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-purple-500">
                    <LineChart className="w-6 h-6 mr-4" />
                    KDE & ECDF Curves
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Histograms are blocky. A <b>KDE</b> (Kernel Density Estimate) traces a smooth mathematical curve over the data. An <b>ECDF</b> plots perfectly accurate cumulative probabilities.
                  </p>
                  
                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                     <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                        <span className="text-slate-500"># KDE Only: Smooth estimated trend curve</span><br/>
                        sns.<span className="text-rose-400">displot</span>(x=<span className="text-amber-300">"total_bill"</span>, data=df, <span className="text-purple-400 font-bold">kind</span>=<span className="text-amber-300">"kde"</span>)<br/><br/>
                        <span className="text-slate-500"># Hist + Overlay: Best of both worlds</span><br/>
                        sns.<span className="text-rose-400">displot</span>(x=<span className="text-amber-300">"total_bill"</span>, data=df, <span className="text-teal-400 font-bold">kde</span>=<span className="text-amber-300">True</span>)
                     </pre>
                     
                     <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                        <span className="text-slate-500"># ECDF: Shows exact cumulative distribution percentages</span><br/>
                        sns.<span className="text-rose-400">displot</span>(x=<span className="text-amber-300">"total_bill"</span>, data=df, <span className="text-purple-400 font-bold">kind</span>=<span className="text-amber-300">"ecdf"</span>)
                     </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                     <button onClick={() => runDemo('curve_plot')} className="px-10 py-5 bg-purple-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-purple-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Map Trend Geometry</button>
                  </div>
                </div>
              )}

              {/* Tab: Hue & Facet */}
              {activeTab === 'grouping' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-rose-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Layers className="w-6 h-6 mr-4" />
                    Grouping & Faceting (🔥)
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Because `displot` is a figure-level function, it inherently borrows the immense power of <b>FacetGrids</b>. You can slice distributions up identically to `catplots`.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                     <pre className="font-mono text-[12px] text-slate-300 leading-7">
                        <span className="text-slate-500"># Split curves into distinct groups in ONE plot</span><br/>
                        sns.<span className="text-rose-400 font-bold">displot</span>(x=<span className="text-amber-300">"total_bill"</span>, <span className="text-cyan-400 font-bold underline">hue</span>=<span className="text-amber-300">"sex"</span>, data=df, kde=<span className="text-purple-400">True</span>)<br/><br/>
                        <span className="text-slate-500"># Spawn multiple adjacent subplots automatically</span><br/>
                        sns.<span className="text-rose-400 font-bold">displot</span>(<br/>
                        &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>, <br/>
                        &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">col</span>=<span className="text-amber-300">"time"</span>,  <span className="text-slate-500 italic"># Magic parameter</span><br/>
                        &nbsp;&nbsp;data=df, <br/>
                        &nbsp;&nbsp;kde=<span className="text-purple-400">True</span><br/>
                        )
                     </pre>
                  </div>
                  
                  <button onClick={() => runDemo('grouping_plot')} className="w-full py-5 bg-rose-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-rose-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Dimensional Split</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-teal-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <History className="w-6 h-6 mr-4" />
                    Real-World Distribution
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Financial and assessment algorithms heavily depend on knowing if underlying data mimics a Gaussian standard model. Let's analyze simulated wages.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[3.5rem] border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-[12px] leading-6 text-slate-300">
                       <span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np<br/>
                       <span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd<br/><br/>
                       <span className="text-slate-500"># Simulate 1000 salaries (Mean=50k, StdDev=10k)</span><br/>
                       data = pd.<span className="text-sky-400">DataFrame</span>(&#123;<br/>
                       &nbsp;&nbsp;<span className="text-amber-300">"Salary"</span>: np.random.<span className="text-sky-400">normal</span>(<span className="text-emerald-300">50000</span>, <span className="text-emerald-300">10000</span>, <span className="text-emerald-300">1000</span>)<br/>
                       &#125;)<br/><br/>
                       <span className="text-slate-500"># Ideal for Exam scores, Salary, & Sales trends</span><br/>
                       sns.<span className="text-rose-400 font-bold">displot</span>(<br/>
                       &nbsp;&nbsp;data[<span className="text-amber-300">"Salary"</span>], <span className="text-cyan-400">kde</span>=<span className="text-purple-400">True</span><br/>
                       )
                     </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-5 bg-teal-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-teal-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Compute Bell Curve Array</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
             {/* Terminal Output Console */}
             <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-[100px] group-hover/terminal:bg-rose-500/10 transition-all duration-1000"></div>
               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-rose-500" />
                      <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                        DENSITY_CALC
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                        <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                        <div className="text-center relative">
                           <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Variables</span>
                           <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-rose-500/50 mr-4 font-black select-none text-[8px] mt-1">TRACE_{i}</span>
                              <span className={`leading-relaxed font-medium ${
                                line.includes('successfully') || line.includes('cleanly') || line.includes('generated') ? 'text-emerald-400 font-bold' :
                                line.includes('Gaussian') || line.includes('KDE') || line.includes('ECDF') ? 'text-purple-400' :
                                line.includes('hue=') || line.includes('col=') || line.includes('bins=') ? 'text-cyan-300 font-bold' :
                                line.includes('Calculating') || line.includes('Computing') ? 'text-amber-400' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                           <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Map Resolved</span>
                           <button onClick={resetConsole} className="text-[9px] text-rose-500 hover:text-rose-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-rose-500/20 pb-0.5">FLUSH</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-rose-500/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-rose-500"></div>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
               <CheckCircle2 className="w-8 h-8 text-rose-500 mr-4" />
               Key Insights <span className="text-xs ml-3 px-2 py-1 bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400 rounded-full uppercase tracking-widest hidden sm:inline">Critical</span>
             </h2>

             <div className="space-y-6">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-rose-400 mb-2">✔ Immediate Interpretation Roles</h4>
                   <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                      <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-rose-500 mr-3"></span> Histograms <span className="mx-2 text-slate-500">→</span> pure frequency</li>
                      <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-rose-500 mr-3"></span> KDE curves <span className="mx-2 text-slate-500">→</span> smooth trends</li>
                      <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-rose-500 mr-3"></span> ECDF maps <span className="mx-2 text-slate-500">→</span> exact cumulative probability</li>
                   </ul>
                </div>
                
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-rose-400 mb-2">✔ The First Step in Engineering</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                     Without observing the Skewness (is data clumping left or right?) and verifying Normal Distribution, feeding data into ML algorithms can wildly fail.
                   </p>
                </div>
             </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-800 relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 w-2 h-full bg-amber-500"></div>
             <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
               <AlertTriangle className="w-8 h-8 mr-4 text-amber-500" />
               Common Mistakes
             </h2>

             <div className="space-y-4 flex-1">
                {[
                  { m: "Using exponentially too many bins.", fx: "If you set bins=100 on a tiny dataset, the plot becomes an unreadable barcode of noisy spikes instead of a grouped curve." },
                  { m: "Misinterpreting the KDE line.", fx: "Never forget: a Kernel Density Estimate is an algorithm 'guessing' the trend. It is NOT exact observation points." },
                  { m: "Ignoring heavy skewness.", fx: "If your plot has a massive 'tail' dragging to the right, most statistical forecasting will fail until you Normalize it (e.g., Log Transform)." }
                ].map((mistake, i) => (
                   <div key={i} className="flex items-start p-4 bg-slate-950 rounded-2xl border border-slate-800">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold mr-4 shrink-0 text-xs">X</div>
                      <div>
                         <p className="font-bold text-slate-200 mb-1 text-sm">{mistake.m}</p>
                         <p className="text-[11px] text-slate-400 bg-slate-900 px-3 py-2 rounded-lg italic font-mono mt-3 inline-block border border-slate-800">👉 {mistake.fx}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SbDisplot;
