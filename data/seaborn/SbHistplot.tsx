import React, { useState } from 'react';
import {
  Info, Code, Terminal, Layers, Play,
  Activity, Target, BarChart2, BarChart,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, TrendingUp,
  Focus, Eye, ShieldCheck, LineChart,
  SlidersHorizontal
} from 'lucide-react';

const SbHistplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'curves' | 'grouping' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_hist':
        outLines = [
          'Loading dataset "tips"...',
          'Parsing numeric continuous column: "total_bill"...',
          'Initializing Seaborn histogram engine...',
          'Dividing data into discrete bins automatically...',
          'Calculating frequency (count) for each interval...',
          'Basic Sidebar/Horizontal Histogram rendered successfully.'
        ];
        break;
      case 'kde_hist':
        outLines = [
          'Loading numerical array...',
          'Applying custom bin granularity: bins=20...',
          'Enabling Kernel Density Estimate (kde=True)...',
          'Computing smooth statistical probability curve...',
          'Normalizing representation to probability (stat="density")...',
          'Rich analytical Histogram generated successfully.'
        ];
        break;
      case 'group_hist':
        outLines = [
          'Detecting category subsets via hue="sex"...',
          'Grouping variables...',
          'Applying layered distribution drawing...',
          'Restyling bar layout with multiple="stack"...',
          'Overlaying multi-colored category segments...',
          'Stacked Demographic Histogram rendered successfully.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Initializing numpy random number generator...',
          'Generating 1000 standard Normal values (Mean=$50k, SD=$10k)...',
          'Checking mathematical data skewness...',
          'Determining symmetrical shape...',
          'Rendering pure Gaussian distribution...',
          'Data cleanly suited for predictive Machine Learning algorithms.'
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-cyan-100 dark:bg-cyan-900/30 rounded-3xl mb-8 shadow-sm border border-cyan-200 dark:border-cyan-800/50">
          <BarChart2 className="w-12 h-12 text-cyan-600 dark:text-cyan-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-[10px] font-bold mb-6 border border-cyan-500/20 tracking-[0.25em] uppercase">
          Numeric Frequency Mapper
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Histplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.histplot() — The fundamental tool to visualize the exact distribution, outliers, and skewness of continuous numerical arrays.
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
              <h2 className="text-3xl font-bold">1️⃣ What is a Histogram?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
              "It visualizes the distribution of numerical data using bins. Data is divided into intervals, and the <b>height of each bar represents frequency (count)</b>."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-cyan-500" />
                Why Use histplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Understand Distribution", "Detect Skewness", "Identify Outliers", "Check Normality"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-cyan-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Eye className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Understanding</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <TrendingUp className="w-5 h-5 text-blue-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Shape</b> tells you everything about your data</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Activity className="w-5 h-5 text-emerald-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300">Symmetric = Normal Distribution</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-cyan-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-cyan-400 font-bold">histplot</span>(data=<span className="text-amber-300">None</span>, x=<span className="text-amber-300">None</span>)<br />
                plt.<span className="text-blue-400">show</span>()
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Histogram Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.histplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic & Horizontal', icon: BarChart2 },
              { id: 'curves', label: 'Bins, KDE & Stats', icon: LineChart },
              { id: 'grouping', label: 'Stack & Group', icon: Layers },
              { id: 'real_world', label: 'Real World / Displot', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/30'
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
                    <BarChart2 className="w-6 h-6 mr-4" />
                    Step 1-3: Basic Histograms
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Loading your dataset and extracting simple distribution patterns. Passing `x` yields vertical columns. Passing `y` creates horizontal bars.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_hist')} className="absolute bottom-6 right-6 p-4 bg-cyan-600 text-white rounded-2xl shadow-xl hover:bg-cyan-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        df = sns.<span className="text-blue-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Vertical Histogram</span><br />
                        sns.<span className="text-cyan-400 font-bold tracking-widest">histplot</span>(x=<span className="text-amber-300">"total_bill"</span>, data=df)<br /><br />
                        <span className="text-slate-500 italic"># Horizontal Histogram</span><br />
                        sns.<span className="text-cyan-400 font-bold tracking-widest">histplot</span>(y=<span className="text-amber-300">"total_bill"</span>, data=df)
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Density & Curves */}
              {activeTab === 'curves' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <SlidersHorizontal className="w-6 h-6 mr-4" />
                    Bins, KDE Curves & Normalizing
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Combine the actual counts (Histogram) and the smooth curve estimate (KDE). Adjust bins for granularity, or switch the <code>stat</code> property to view probabilities.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># KDE (VERY IMPORTANT 🔥)</span><br />
                      sns.<span className="text-cyan-400">histplot</span>(x=<span className="text-amber-300">"total_bill"</span>, data=df, <span className="text-purple-400 font-bold underline">kde</span>=<span className="text-amber-300">True</span>)<br /><br />
                      <span className="text-slate-500"># Bin Modification</span><br />
                      sns.<span className="text-cyan-400">histplot</span>(..., <span className="text-purple-400 font-bold underline">bins</span>=<span className="text-emerald-300">20</span>) <span className="text-slate-500"># More bins=more detail</span><br /><br />
                      <span className="text-slate-500"># Normalize Histogram to Density</span><br />
                      sns.<span className="text-cyan-400">histplot</span>(..., <span className="text-purple-400 font-bold underline">stat</span>=<span className="text-amber-300">"density"</span>)
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('kde_hist')} className="px-10 py-5 bg-blue-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-blue-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Map Density</button>
                  </div>
                </div>
              )}

              {/* Tab: Grouping */}
              {activeTab === 'grouping' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-indigo-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Layers className="w-6 h-6 mr-4" />
                    Hue, Mapping & Stacking
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Compare distributions across categories with `hue`. Change how multiple variables overlap using the `multiple` parameter.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Compare multiple distributions side by side</span><br />
                      sns.<span className="text-cyan-400 font-bold">histplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>, <br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">hue</span>=<span className="text-amber-300">"sex"</span>,  <span className="text-slate-500"># Color by category</span><br />
                      &nbsp;&nbsp;data=df, <br />
                      &nbsp;&nbsp;kde=<span className="text-amber-300">True</span><br />
                      )<br /><br />
                      <span className="text-slate-500"># Multiple configurations: "layer" (def), "stack", "dodge"</span><br />
                      sns.<span className="text-cyan-400 font-bold">histplot</span>(..., multiple=<span className="text-amber-300">"stack"</span>)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('group_hist')} className="w-full py-5 bg-indigo-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-indigo-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Stack Array</button>
                </div>
              )}

              {/* Tab: Comparison & Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <Target className="w-6 h-6 mr-4" />
                    Real-World & Displot comparison
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Insights */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Distribution Shapes</h4>
                      <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400">
                        <li><b className="text-emerald-500">Symmetric</b> → Normal</li>
                        <li><b className="text-amber-500">Right skew</b> → tail on right</li>
                        <li><b className="text-amber-500">Left skew</b> → tail on left</li>
                      </ul>
                    </div>

                    {/* histplot vs displot */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">histplot vs displot</h4>
                      <div className="text-[11px] grid grid-cols-3 gap-2 text-slate-600 dark:text-slate-400 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                        <b className="text-slate-500">Feature</b> <b className="text-slate-800 dark:text-slate-200">histplot</b> <b className="text-slate-800 dark:text-slate-200">displot</b>
                        <span>Level</span> <span>Axis</span> <span>Figure</span>
                        <span>Faceting</span> <span>❌</span> <span>✅</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Simulating Real-World Employee Salaries</span><br />
                      <span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np<br />
                      data = pd.<span className="text-blue-400">DataFrame</span>(&#123; <span className="text-amber-300">"Salary"</span>: np.random.<span className="text-blue-400">normal</span>(<span className="text-emerald-300">50000</span>, <span className="text-emerald-300">10000</span>, <span className="text-emerald-300">1000</span>) &#125;)<br /><br />
                      sns.<span className="text-cyan-400 font-bold">histplot</span>(data[<span className="text-amber-300">"Salary"</span>], kde=<span className="text-purple-400">True</span>)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Analyze Salary Spread</button>
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
                      FREQ_LOG_SYS
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
                      <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Array Sequence</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-cyan-500/50 mr-4 font-black select-none text-[8px] mt-1">FREQ_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('successfully') || line.includes('suited for') ? 'text-emerald-400 font-bold' :
                              line.includes('Generating') || line.includes('Applying layered') || line.includes('Calculating') ? 'text-blue-400' :
                                line.includes('kde=') || line.includes('multiple=') || line.includes('hue=') ? 'text-cyan-300 font-bold' :
                                  line.includes('Computing smooth') || line.includes('Normalizing') ? 'text-indigo-400' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Runtime Exited</span>
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
              <ShieldCheck className="w-8 h-8 text-cyan-500 mr-4" />
              Pro Tips (Real-World) <span className="text-xs ml-3 px-2 py-1 bg-cyan-100 text-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-400 rounded-full uppercase tracking-widest hidden sm:inline">Expert</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-cyan-400 mb-2">🚀 Always Start with Histogram</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  It is ALWAYS the first step in EDA. It helps you decide on Normalization, Log transformation, and Outlier handling before passing data into ML models.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-cyan-400 mb-2">🚀 Pro Enhancements</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span> Use <b>KDE</b> for mathematical insight (<code>kde=True</code>)</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-indigo-500 mr-3 shrink-0"></span> Adjust Bins Smartly: Try <b>10, 20, 30</b> and compare</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Use Transparency (<code>alpha=0.5</code>) when layering</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-500 mr-3 shrink-0"></span> Check Log Scale (<code>plt.xscale("log")</code>) for heavy skew</li>
                </ul>
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
                { m: "Too many bins.", fx: "Creates a noisy plot acting more like a barcode than a distribution curve." },
                { m: "Too few bins.", fx: "Causes severe loss of detail. Entire patterns can be hidden within large intervals." },
                { m: "Misreading the KDE curve.", fx: "Remember that a Kernel Density Estimate is purely a mathematical estimation guessing the lines, not exact observation points." }
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

export default SbHistplot;
