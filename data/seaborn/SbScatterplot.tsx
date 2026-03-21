import React, { useState } from 'react';
import {
  Info, Terminal, Layers, Play,
  Activity, Target, Search,
  Palette, AlertTriangle, ListChecks, CheckCircle2,
  Focus, Eye, ShieldCheck, LineChart,
  SplitSquareHorizontal, Crosshair
} from 'lucide-react';

const SbScatterplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'dimensions' | 'styling' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_scatter':
        outLines = [
          'Initializing Foundational Data Science Plot...',
          'Loading 2-Dimensional Matrix: "total_bill" vs "tip"...',
          'Assigning Feature 1 (X-axis) -> horizontal mapping...',
          'Assigning Feature 2 (Y-axis) -> vertical mapping...',
          'Rendering isolated physical points representing True Observations...',
          'Execution complete. Baseline Relationship generated.'
        ];
        break;
      case 'dim_scatter':
        outLines = [
          'Booting up Multi-Dimensional Layer Engine...',
          '--> Injecting Category Matrix: hue="sex" (Color applied)...',
          '--> Injecting Magnitude Matrix: size="size" (Radius Scaling applied)...',
          '--> Injecting Geometry Matrix: style="smoker" (Shapes applied)...',
          'Spinning up 4D visual representation inside a 2D plane...',
          'Warning: Reaching maximum safe cognitive dimensions.',
          'Multi-variable cluster mapped.'
        ];
        break;
      case 'opac_scatter':
        outLines = [
          'Detecting massive cluster overlap in center field...',
          '--> Applying density modification: alpha=0.5...',
          'Rendering semi-transparent data points...',
          'Dense overlapping sections successfully darkened to represent heavy density.',
          '--> Applying Logarithmic Scaling: plt.xscale("log")...',
          'Skewed outliers successfully pulled back into visible analytical range.',
          'Visual optimization complete.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Importing Financial Arrays: AdSpend vs Sales...',
          'Executing sns.scatterplot()...',
          'Scanning graphical output for mathematical correlations...',
          '--> Result: Strong Positive Correlation detected.',
          '(As X [AdSpend] increases, Y [Sales] definitively increases).',
          'Scanning for Random Noise... Minimal.',
          'Data cleanly prepped for rigorous Linear Regression (sns.regplot) testing.'
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl mb-8 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <Crosshair className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-bold mb-6 border border-indigo-500/20 tracking-[0.25em] uppercase">
          The Foundational Plot
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Scatterplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.scatterplot() — The absolute <b>first plot</b> every Data Scientist pulls out. No smoothing curves, no bins, no models. Just purely plotting raw Feature X against Feature Y to reveal the hidden story of the data.
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
              <h2 className="text-3xl font-bold">1️⃣ What is a Scatter Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
              "It is the purest visualization of relational data. You map one variable directly to the X-axis, one to the Y-axis. Every single dot represents exactly One True Observation from your dataset."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-indigo-500" />
                Why is it So Important?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["See Actual Correlation", "Spot Groups & Clusters", "Find Wild Outliers", "Detect Non-Linearity"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-indigo-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Target className="w-8 h-8 text-indigo-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Intelligence</h2>
              </div>

              <div className="space-y-4 mb-5">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 transition-colors">
                  <LineChart className="w-5 h-5 text-indigo-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-200"><b>The Foundation:</b> Before you ever write ML code or Linear Regressions, you literally just look at this plot to tell you if a relationship even exists.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 transition-colors">
                  <Activity className="w-5 h-5 text-cyan-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-200"><b>Intuition:</b> No math required. Just purely looking at the spread gives you the story of your data instantly.</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-indigo-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-cyan-400 font-bold">scatterplot</span>(x=<span className="text-amber-300">"col1"</span>, y=<span className="text-amber-300">"col2"</span>, data=df)
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Scatter Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.scatterplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Frame', icon: Crosshair },
              { id: 'dimensions', label: 'Multi-Dimensions (🔥)', icon: Layers },
              { id: 'styling', label: 'Overlaps & Scales', icon: Eye },
              { id: 'real_world', label: 'Real World & VS', icon: SplitSquareHorizontal }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
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
                    <Crosshair className="w-6 h-6 mr-4" />
                    Step 1-2: Base Construction
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Executing the baseline requires only a DataFrame and strictly two numerical targets assigned to the explicit X and Y axes. This instantly paints the raw spread.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_scatter')} className="absolute bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-2xl shadow-xl hover:bg-indigo-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Just plot X against Y directly.</span><br />
                        sns.<span className="text-indigo-400 font-bold tracking-widest">scatterplot</span>(<br />
                        &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>,<br />
                        &nbsp;&nbsp;y=<span className="text-amber-300">"tip"</span>,<br />
                        &nbsp;&nbsp;data=df<br />
                        )
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Critical Combinations */}
              {activeTab === 'dimensions' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-cyan-500">
                    <Layers className="w-6 h-6 mr-4" />
                    Adding Dimensions (SUPERPOWER)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Because this plot represents singular dots, you can easily alter the properties of those dots to map entirely new columns of data over them.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># Compressing 5 Columns into a 2D Chart</span><br />
                      sns.<span className="text-indigo-400 font-bold">scatterplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>,<br />
                      &nbsp;&nbsp;y=<span className="text-amber-300">"tip"</span>,<br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">hue</span>=<span className="text-amber-300">"sex"</span>,     <span className="text-slate-500"># Adds Color Groups</span><br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">size</span>=<span className="text-amber-300">"size"</span>,   <span className="text-slate-500"># Scales by Magnitude</span><br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">style</span>=<span className="text-amber-300">"smoker"</span>,<span className="text-slate-500"># Changes Shape (X vs O)</span><br />
                      &nbsp;&nbsp;data=df<br />
                      )
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('dim_scatter')} className="px-10 py-5 bg-cyan-600 text-slate-900 font-extrabold rounded-[2rem] shadow-xl hover:bg-cyan-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Multi-Dimensions</button>
                  </div>
                </div>
              )}

              {/* Tab: Styling Details */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-fuchsia-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Palette className="w-6 h-6 mr-4" />
                    Overlaps & Readability
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    When you have 500+ dots tightly clustered, it creates a solid block of color making it impossible to see density. Using <code>alpha</code> injects transparency, making overlapping dots visually darker.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Fixing overlapping messes cleanly for production</span><br />
                      plt.<span className="text-cyan-400">figure</span>(figsize=(<span className="text-amber-300">8</span>, <span className="text-amber-300">6</span>))<br /><br />
                      sns.<span className="text-indigo-400 font-bold">scatterplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>, y=<span className="text-amber-300">"tip"</span>, hue=<span className="text-amber-300">"sex"</span>, data=df,<br />
                      &nbsp;&nbsp;<span className="text-fuchsia-400 font-bold underline">alpha</span>=<span className="text-emerald-300">0.5</span>,     <span className="text-slate-500"># CRITICAL: Adds transparency</span><br />
                      &nbsp;&nbsp;<span className="text-fuchsia-400 font-bold underline">palette</span>=<span className="text-amber-300">"Set2"</span> <span className="text-slate-500"># Prettier grouping colors</span><br />
                      )<br /><br />
                      <span className="text-slate-500"># Pulling extreme Skewed data inward</span><br />
                      plt.<span className="text-cyan-400">xscale</span>(<span className="text-amber-300">"log"</span>)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('opac_scatter')} className="w-full py-5 bg-fuchsia-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-fuchsia-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Optimize Visual Density</button>
                </div>
              )}

              {/* Tab: Real World & VS */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <SplitSquareHorizontal className="w-6 h-6 mr-4" />
                    How to Read Scatter Data
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Insights */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Reading Paths 🎯</h4>
                      <div className="text-[11px] grid grid-cols-1 gap-1.5 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        <p>📈 <b>Positive:</b> Upwards right (X↗ Y↗)</p>
                        <p>📉 <b>Negative:</b> Downwards right (X↗ Y↘)</p>
                        <p>➖ <b>None:</b> Complete random static</p>
                        <p>🔄 <b>Non-Linear:</b> Formations of U-Curves</p>
                      </div>
                    </div>

                    {/* scatter vs regplot vs jointplot */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-[11px] mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Scatter vs Reg vs Joint</h4>
                      <div className="text-[9px] grid grid-cols-4 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 font-medium bg-transparent overflow-x-auto">
                        <b className="text-slate-500">Feature</b> <b className="text-indigo-500 dark:text-indigo-400">Scatter</b> <b className="text-slate-800 dark:text-slate-200">Reg</b> <b className="text-slate-800 dark:text-slate-200">Joint</b>
                        <span>Relation</span> <span>✅</span> <span>✅</span> <span>✅</span>
                        <span>Trend Line</span> <span>❌</span> <span>✅</span> <span>Opt</span>
                        <span>Distro</span> <span>❌</span> <span>❌</span> <span>✅</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Marketing Analysis Correlation</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-amber-300">"AdSpend"</span>: np.random.<span className="text-cyan-400">randint</span>(<span className="text-emerald-300">1000</span>, <span className="text-emerald-300">10000</span>, <span className="text-emerald-300">100</span>),<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Sales"</span>: np.random.<span className="text-cyan-400">randint</span>(<span className="text-emerald-300">20000</span>, <span className="text-emerald-300">80000</span>, <span className="text-emerald-300">100</span>)<br />
                      &#125;)<br /><br />
                      sns.<span className="text-indigo-400 font-bold">scatterplot</span>(x=<span className="text-amber-300">"AdSpend"</span>, y=<span className="text-amber-300">"Sales"</span>, data=data)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Budget Correlation</button>
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
                      CORRELATION_MAP_SYS
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
                      <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Waiting for Data Vectors</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-indigo-500/50 mr-4 font-black select-none text-[8px] mt-1">SYS_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('complete') || line.includes('successfully') || line.includes('cleanly prepped') ? 'text-emerald-400 font-bold' :
                              line.includes('Warning') || line.includes('Detecting massive overlap') ? 'text-orange-400 font-bold' :
                                line.includes('Initializing') || line.includes('Booting up') || line.includes('Importing') || line.includes('Scanning') ? 'text-indigo-400' :
                                  line.includes('hue=') || line.includes('size=') || line.includes('style=') || line.includes('alpha=') || line.includes('color=') || line.includes('Positive Correlation') ? 'text-cyan-300 font-bold' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Mapping Engine Complete</span>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-indigo-500/20 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <ShieldCheck className="w-8 h-8 text-indigo-500 mr-4" />
              Expert Workflow <span className="text-xs ml-3 px-2 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-4 flex-1">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 h-full">
                <h4 className="font-bold text-slate-800 dark:text-indigo-400 mb-2">🚀 The 3-Step Production Loop</h4>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4">
                  In real-world projects, generating a simple `scatterplot` is a mandatory initial step before doing anything else. The workflow is strictly: <b>1. Render Scatterplot -&gt; 2. Prove Visual Correlation Exists -&gt; 3. Apply Regression (`regplot`) or ML Modeling.</b> This entirely avoids making wrong foundational assumptions that completely break complex models.
                </p>

                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4 border-t border-slate-200 dark:border-slate-700 pt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-3 shrink-0"></span> Keep parameters clean limits to a Max of 3 Dimensions at once. Ex: `(x, y, hue)`.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> If data is massively clumped on one side and strings out infinitely rightwards, use <code>plt.xscale("log")</code>.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-800 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-4 text-red-500" />
              Critical Mistakes
            </h2>

            <div className="space-y-4 flex-1">
              {[
                { m: "Too many logical dimensions.", fx: "If you assign X, Y, Hue, Size, and Style all at the exact same time, the plot dissolves into a confusing, unreadable mess of random geometries and sizes." },
                { m: "Ignoring Transparency (Alpha).", fx: "Without passing alpha=0.5, a cluster of 500 overlapping dots just looks like 1 giant solid dot. You lose all insight into Data Density mapping!" },
                { m: "Misinterpreting Visual Non-Linearity.", fx: "If you see a giant 'U' shape in the scatter plot, but you ignore it and force a straight Linear Regression Line through it, your model will be fundamentally broken." },
                { m: "Ignoring Extreme Outliers.", fx: "Allowing a massive anomaly dot scaling off the map to stay in your data without looking at it will warp all your mathematical averages later." }
              ].map((mistake, i) => (
                <div key={i} className="flex items-start p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold mr-4 shrink-0 text-xs text-center shrink-0">X</div>
                  <div>
                    <p className="font-bold text-slate-200 mb-1 text-[13px]">{mistake.m}</p>
                    <p className="text-[11px] text-slate-400 bg-slate-900 px-3 py-2 rounded-lg italic font-mono mt-2 inline-block border border-slate-800">👉 {mistake.fx}</p>
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

export default SbScatterplot;
