import React, { useState } from 'react';
import { 
  Info, Code, Terminal, Layers, Play,
  Zap, Activity, Target, Network,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, Paintbrush,
  Eye, Droplet, LayoutTemplate, TrendingUp,
  GitMerge, BarChart2, ListOrdered, AlignLeft, Target as Percent
} from 'lucide-react';

const SbEcdfplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'hue' | 'comp' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_plot':
        outLines = [
          'Scanning input data array...',
          'Sorting all observation data points incrementally...',
          'Calculating running proportions from [0.0 → 1.0]...',
          'Bypassing histogram binning completely...',
          'Rendering exact step-function graph.',
          'ECDF visualization successful.'
        ];
        break;
      case 'hue_plot':
        outLines = [
          'Partitioning dataset by hue="sex"...',
          'Sorting subset arrays independently...',
          'Calculating isolated sub-cumulative proportions...',
          'Mapping colored lines with explicit linewidth=2...',
          'Multi-distribution comparison overlaid successfully.'
        ];
        break;
      case 'comp_plot':
        outLines = [
          'Inverting probability calculation engine...',
          'Applying formula P(X > x) via complementary=True...',
          'Drawing exact survival function curve.',
          'Values map to "exceedance" proportions (1.0 → 0.0).',
          'Data transformation complete.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Simulating 1,000 wage arrays (Mean=$50k)...',
          'Generating cumulative percentiles...',
          'Scaling X-axis properties: plt.xscale("log")...',
          'Executing Business Intelligence query...',
          '--> Analyzed: 83% of dataset earns below $50k.',
          '--> Analyzed: ≈5% of dataset exceeds $70k.',
          'Percentile analysis successfully evaluated.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-cyan-100 dark:bg-cyan-900/30 rounded-3xl mb-8 shadow-sm border border-cyan-200 dark:border-cyan-800/50">
          <TrendingUp className="w-12 h-12 text-cyan-600 dark:text-cyan-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-[10px] font-bold mb-6 border border-cyan-500/20 tracking-[0.25em] uppercase">
          Empirical Cumulative Distribution
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">ECDF Plots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Unlock precise percentile data analysis. Visualize the exact proportion of data points less than or equal to any given value without binning biases.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-cyan-500 rounded-2xl shadow-lg shadow-cyan-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is an ECDF Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
              "An Empirical Cumulative Distribution Function uniquely answers: What percentage of my data is less than or equal to this exact value?"
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                 <GitMerge className="w-5 h-5 mr-3 text-cyan-500" />
                 Key Concept & Formula
               </h3>
               
               <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 mb-4">
                  <p className="font-mono text-sm text-center font-bold text-slate-700 dark:text-slate-300">
                     <span className="text-cyan-600 dark:text-cyan-400">ECDF(x)</span> = proportion of observations <span className="text-rose-500 mx-2">≤</span> x
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { l: "X-Axis", d: "Strictly the Data Values" },
                    { l: "Y-Axis", d: "% of data ≤ that value (0.0 to 1.0)" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                       <span className="text-cyan-600 dark:text-cyan-400 font-black text-xs uppercase tracking-widest mb-2">{stat.l}</span>
                       <span className="text-[11px] text-slate-500 font-medium leading-relaxed">{stat.d}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-indigo-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Target className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Why Use ECDF?</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                  {[
                    { t: "Requires ZERO binning structure (unlike Histograms)", i: AlignLeft },
                    { t: "See explicit percentile behavior directly", i: Percent },
                    { t: "Compare multiple distributions perfectly", i: GitMerge },
                    { t: "Track exact precision points on business data", i: Search }
                  ].map((reason, i) => (
                    <div key={i} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                       <reason.i className="w-5 h-5 text-cyan-500 mr-4 shrink-0" />
                       <span className="text-sm font-bold text-slate-200">{reason.t}</span>
                    </div>
                  ))}
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-cyan-500/20 font-mono text-sm text-slate-300">
                <span className="text-slate-500 italic"># Basic Syntax</span><br/>
                <span className="text-fuchsia-400">import</span> seaborn <span className="text-fuchsia-400">as</span> sns<br/><br/>
                sns.<span className="text-cyan-400">ecdfplot</span>(<br/>
                &nbsp;&nbsp;data=<span className="text-amber-300">None</span>, x=<span className="text-amber-300">None</span><br/>
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
            <div className="p-4 bg-cyan-100 dark:bg-cyan-900/40 rounded-3xl mr-6 border border-cyan-200 dark:border-cyan-800">
              <Terminal className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Percentile Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.ecdfplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Flow', icon: BarChart2 },
              { id: 'hue', label: 'Comparison', icon: Layers },
              { id: 'comp', label: 'Complementary', icon: ListOrdered },
              { id: 'real_world', label: 'Business Case', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40' 
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
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-cyan-600 dark:text-cyan-400">
                    <Code className="w-6 h-6 mr-4" />
                    Standard & Horizontal Vectors
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      By default, this produces a graph that climbs from <span className="font-bold text-slate-800 dark:text-white">0 to 1</span> (0% to 100%). Just like other Seaborn plots, swapping `x` for `y` flips orientation natively.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <button onClick={() => runDemo('basic_plot')} className="absolute bottom-6 right-6 p-4 bg-cyan-600 text-white rounded-2xl shadow-xl hover:bg-cyan-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-[13px] leading-relaxed text-slate-300">
                          <code className="block mt-2 text-slate-500 italic"># 1. Load Data</code>
                          <code className="block">df = sns.<span className="text-sky-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)</code>
                          <code className="block mt-4 text-slate-500 italic"># 2. Standard ECDF</code>
                          <code className="block mb-2">sns.<span className="text-cyan-400 font-bold tracking-widest">ecdfplot</span>(x=<span className="text-amber-300">"total_bill"</span>, data=df)</code>
                          <code className="block mt-4 text-slate-500 italic"># OR: Horizontal ECDF mapping</code>
                          <code className="block text-indigo-400 font-bold tracking-widest mb-4">sns.ecdfplot(y="total_bill", data=df)</code>
                        </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Hue Mapping */}
              {activeTab === 'hue' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500">
                    <Layers className="w-6 h-6 mr-4" />
                    Comparing Multiple Groups
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Unlike Histograms which frequently overlap into a messy blob, ECDFs are natively the greatest format in Statistics to visually compare numerous distributions cleanly.
                  </p>
                  
                  <div className="bg-slate-950 p-6 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-sm leading-8 text-slate-300">
                        <span className="text-slate-500"># Splits arrays into categorical subgroups internally</span><br/>
                        sns.<span className="text-cyan-400">ecdfplot</span>(<br/>
                        &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>,<br/>
                        &nbsp;&nbsp;<span className="text-indigo-400 font-bold border-b border-indigo-500/50 pb-0.5">hue</span>=<span className="text-amber-300">"sex"</span>,<br/>
                        &nbsp;&nbsp;data=df,<br/>
                        &nbsp;&nbsp;<span className="text-violet-400 font-bold">linewidth</span>=<span className="text-amber-300">2</span>  <span className="text-slate-500 italic"># Increases weight of step-lines</span><br/>
                        )<br/>
                     </pre>
                  </div>
                  <div className="flex justify-end pt-4">
                     <button onClick={() => runDemo('hue_plot')} className="px-10 py-5 bg-indigo-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-indigo-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Generate Hue Profiles</button>
                  </div>
                </div>
              )}

              {/* Tab: Complementary Map */}
              {activeTab === 'comp' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-cyan-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <ListOrdered className="w-6 h-6 mr-4" />
                    P(X {'>'} x) Survival
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Sometimes you don't care how many values fall <b>under</b> a target... you care how many values <b>exceed</b> it. By enabling complementary plotting, the curve flows backwards from 1.0 to 0.0.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl mb-4">
                     <pre className="font-mono text-[13px] text-slate-300 leading-relaxed">
                        <span className="text-slate-500"># Directly reveals 'Exceedance Probability'</span><br/>
                        sns.<span className="text-cyan-400">ecdfplot</span>(<br/>
                        &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>,<br/>
                        &nbsp;&nbsp;data=df,<br/>
                        &nbsp;&nbsp;<span className="text-emerald-400 font-bold underline mb-1 inline-block">complementary</span>=<span className="text-emerald-300 font-bold">True</span><br/>
                        )<br/>
                     </pre>
                  </div>
                  
                  <button onClick={() => runDemo('comp_plot')} className="w-full py-5 bg-cyan-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-cyan-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Complementary Pivot</button>
                </div>
              )}

              {/* Tab: Real World Business Case */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-sky-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Activity className="w-6 h-6 mr-4" />
                    Actual Business Analytic Queries
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  &gt;  When Business Stakeholders ask: "Exactly what percentage of clients earn between $50k and $70k?" - Standard Histograms will fail. You need exactly ECDFs. Combine them with Log Scales when checking revenue.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-[11px] leading-6 text-slate-300">
                       <span className="text-fuchsia-400">import</span> numpy <span className="text-fuchsia-400">as</span> np<br/>
                       data = pd.DataFrame(&#123; <span className="text-amber-300">"Salary"</span>: np.random.normal(<span className="text-emerald-300">50000</span>, <span className="text-emerald-300">10000</span>, <span className="text-emerald-300">1000</span>) &#125;)<br/><br/>
                       <span className="text-slate-500"># 1. Plot Exact Step-Functions for Salaries</span><br/>
                       sns.<span className="text-cyan-400 font-bold">ecdfplot</span>(data=data, x=<span className="text-amber-300">"Salary"</span>)<br/><br/>
                       <span className="text-slate-500"># 2. PRO-TIP: Large business numbers demand Logarithmic mapping</span><br/>
                       plt.<span className="text-sky-400 font-bold">xscale</span>(<span className="text-amber-300">"log"</span>)
                     </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-5 bg-sky-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-sky-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Run Percentile Extraction</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
             {/* Terminal Output Console */}
             <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] group-hover/terminal:bg-cyan-500/10 transition-all duration-1000"></div>
               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-cyan-500" />
                      <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                        EMPRC_ENGINE
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                        <TrendingUp className="w-16 h-16 opacity-5 animate-pulse" />
                        <div className="text-center relative">
                           <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Variables</span>
                           <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-cyan-500/50 mr-4 font-black select-none text-[8px] mt-1">PERCENT_{i}</span>
                              <span className={`leading-relaxed font-medium ${
                                line.includes('successful') || line.includes('Analyzed') || line.includes('complete') ? 'text-emerald-400 font-bold' :
                                line.includes('Sorting') || line.includes('Drawing') || line.includes('Exceedance') ? 'text-indigo-400' :
                                line.includes('Bypassing') || line.includes('Inverting') || line.includes('Scaling') ? 'text-cyan-300 font-bold' :
                                line.includes('Scanning') || line.includes('Partitioning') || line.includes('Simulating') ? 'text-amber-400' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                           <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Query Completed</span>
                           <button onClick={resetConsole} className="text-[9px] text-cyan-500 hover:text-cyan-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-cyan-500/20 pb-0.5">PURGE</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-cyan-500/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500"></div>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
               <CheckCircle2 className="w-8 h-8 text-cyan-500 mr-4" />
               Key Insights <span className="text-xs ml-3 px-2 py-1 bg-cyan-100 text-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-400 rounded-full uppercase tracking-widest hidden sm:inline">Critical</span>
             </h2>

             <div className="space-y-6">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start">
                   <Target className="w-6 h-6 text-cyan-500 mr-4 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-slate-800 dark:text-cyan-400 mb-2">Eliminates Binning Bias</h4>
                     <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                       Histograms change visually depending entirely on how wide the bins are set. An ECDF has <span className="font-bold underline">no bins</span>. It is an exact unadulterated representation.
                     </p>
                   </div>
                </div>
                
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start">
                   <Target className="w-6 h-6 text-cyan-500 mr-4 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-slate-800 dark:text-cyan-400 mb-2">Visually Compare Massive Groups</h4>
                     <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                       You can easily overlap 5 distinct variable ECDFs in one plot structure and compare shifts in distributions. You cannot do this with 5 overlapping histograms.
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
                  { m: "Expecting a naturally smooth curve.", fx: "If the dataset is tiny, you will see explicit blocky steps. This is mathematically correct behavior. It is a step-function, not a KDE." },
                  { m: "Misreading the severity of the slope.", fx: "If the line goes straight UP rapidly, it means massive amounts of data points are perfectly clustered at that X-axis value." },
                  { m: "Ignoring the absolute scale (0–1).", fx: "Do not read the Y-axis as absolute numbers. The Y-axis maps inherently to Probability Percentages (50% = 0.5)." }
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
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-indigo-900/40 z-0"></div>
          
          <div className="relative z-10 mb-16 text-center">
             <h2 className="text-4xl font-black text-white mb-4 flex items-center justify-center">
               <Lightbulb className="w-10 h-10 text-amber-400 mr-4" />
               Pro Tips (From Experience)
             </h2>
             <p className="text-lg text-slate-300 font-medium tracking-tight">Advanced strategies for business percentile analytics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
             {[
               { t: "Extract Hard Corporate Logic", c: '# Visually trace graph line:\n"80% of our active users spend below $X"', d: "Do not say 'the data is skewed'. Draw a line across the 0.8 mark to the X axis. That point is your 80th percentile. Report that instead." },
               { t: "Use Log Scales for Revenue", c: '# Spread out heavily localized money\nplt.xscale("log")', d: "Sales distributions usually have huge amounts clustered near zero, with long massive tails out to '$1M'. Log scaling fixes the ECDF visually." },
               { t: "Combine with exact KDE Maps", c: '# Utilize sns.displot architecture', d: "Layering a KDE underneath your ECDF provides the ultimate combo: the ECDF gives exact business percentages, and the KDE provides smooth conceptual visual trends." }
             ].map((tip, i) => (
               <div key={i} className="flex flex-col p-8 bg-slate-950/60 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:bg-slate-950 shadow-xl transition-all group">
                  <h4 className="font-extrabold text-white mb-4 flex items-center">
                     <span className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center mr-3 text-sm">💡</span>
                     {tip.t}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{tip.d}</p>
                  <code className="bg-black/50 p-4 rounded-2xl text-cyan-300 font-mono text-[11px] whitespace-pre-wrap font-bold border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
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
            <div className="lg:col-span-3 bg-gradient-to-br from-slate-900 via-indigo-950 to-cyan-950 p-10 rounded-[3rem] shadow-xl border border-cyan-500/20 text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]"></div>
               <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px]"></div>
               
               <div className="grid md:grid-cols-2 gap-10 relative z-10 w-full">
                  <div>
                     <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="bg-cyan-500/20 p-3 rounded-2xl mr-4"><Target className="w-6 h-6 text-cyan-400"/></span>
                        Personal Rec.
                     </h3>
                     <p className="text-[13px] text-cyan-300 mb-6 font-bold tracking-widest uppercase">Crucial Use Cases</p>
                     
                     <ul className="space-y-5">
                        <li className="flex items-start text-sm font-medium text-white">
                           <CheckCircle2 className="w-5 h-5 mr-4 text-emerald-400 shrink-0"/> 
                           <div>
                              <strong className="block text-emerald-300 mb-1">Business Analytics</strong>
                              When executives ask "What % of transactions are below X?" this directly visualizes the answer.
                           </div>
                        </li>
                        <li className="flex items-start text-sm font-medium text-white">
                           <CheckCircle2 className="w-5 h-5 mr-4 text-emerald-400 shrink-0"/> 
                           <div>
                              <strong className="block text-emerald-300 mb-1">Precise Distributions</strong>
                              Because it bypasses "binning", it is statistically exact.
                           </div>
                        </li>
                     </ul>
                  </div>

                  <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10">
                     <p className="text-[13px] text-rose-300 mb-6 font-bold tracking-widest uppercase">The Main Drawback</p>
                     
                     <div className="bg-rose-500/10 p-6 rounded-3xl border border-rose-500/20">
                        <div className="flex items-center mb-4">
                           <AlertTriangle className="w-6 h-6 mr-3 text-rose-400/80"/>
                           <strong className="text-white text-lg">Avoid for Beginners</strong>
                        </div>
                        <p className="text-sm font-medium text-slate-300 leading-relaxed">
                           A standard audience understands a bar chart perfectly. A step-function probability map spanning (0.0 to 1.0) is fundamentally <b>harder to understand</b> if you are not statistically trained. Use cautiously in general reporting.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default SbEcdfplot;
