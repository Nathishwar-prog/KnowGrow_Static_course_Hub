import React, { useState } from 'react';
import {
  Info, Code, Terminal, Layers, Play,
  Activity, Target, Calculator,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, TrendingUp,
  Focus, Eye, ShieldCheck, LineChart,
  SplitSquareHorizontal, Ruler, Network
} from 'lucide-react';

const SbLmplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'grouping' | 'advanced' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_lm':
        outLines = [
          'Loading dataset "tips"...',
          'Mapping independent variable: x="total_bill"...',
          'Mapping dependent variable: y="tip"...',
          'Rendering base scatter plot points...',
          'Computing Ordinary Least Squares (OLS) linear math...',
          'Drawing best-fit regression line...',
          'Calculating and shading 95% confidence uncertainties.',
          'Linear Model mapped successfully.'
        ];
        break;
      case 'group_lm':
        outLines = [
          'Detecting category subsets via hue="sex"...',
          'Computing isolated regression fits per category...',
          'Detecting Facet request: col="time"...',
          'Spinning up figure-level FacetGrid architecture...',
          'Spawning multiple isolated 2D charts...',
          'Populating separate linear trends for each chart...',
          'Multi-regression grid rendered successfully.'
        ];
        break;
      case 'adv_lm':
        outLines = [
          'Modifying regression engine parameters...',
          '--> order=2: Upgrading to Polynomial non-linear regression...',
          'Fitting curved mathematical relationships...',
          '--> robust=True: Applying robust regression weights...',
          'Detecting massive outliers and mathematically down-weighting them...',
          'Removing confidence intervals via ci=None...',
          'Advanced statistical relationships drawn cleanly.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Bootstrapping Analytics: Study Hours vs Scores...',
          'Generating highly variable normally distributed arrays...',
          'Passing continuous arrays into sns.lmplot()...',
          'Extracting hidden mathematical trend correlation...',
          'Drawing single definitive best-fit estimation line...',
          'Data processed. Ready for Predictive Machine Learning.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-amber-100 dark:bg-amber-900/30 rounded-3xl mb-8 shadow-sm border border-amber-200 dark:border-amber-800/50">
          <Ruler className="w-12 h-12 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-[10px] font-bold mb-6 border border-amber-500/20 tracking-[0.25em] uppercase">
          Linear Correlation Engine
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Lmplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.lmplot() — Visually identify relationships, trends, and correlations between continuous data variables using powerful best-fit computational regression lines.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-amber-500 rounded-2xl shadow-lg shadow-amber-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is lmplot()?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-amber-500 pl-6">
              "It is the perfect fusion of a <b>Scatter Plot</b> and a mathematically calculated <b>Regression Line</b>. It helps you instantly visualize linear trends and correlations."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-amber-500" />
                Why Use lmplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Analyze Relationships", "Visualize Linear Trends", "Basic Regression Math", "Detect Outliers"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-amber-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Eye className="w-8 h-8 text-amber-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Intelligence</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Target className="w-5 h-5 text-cyan-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Points</b> = The raw scatter data</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <TrendingUp className="w-5 h-5 text-emerald-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Solid Line</b> = The calculated regression trend</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Layers className="w-5 h-5 text-purple-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Shaded Area</b> = The statistical Confidence Interval</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-amber-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-amber-400 font-bold">lmplot</span>(x=<span className="text-amber-300">None</span>, y=<span className="text-amber-300">None</span>, data=<span className="text-amber-300">None</span>)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-amber-100 dark:bg-amber-900/40 rounded-3xl mr-6 border border-amber-200 dark:border-amber-800">
              <Terminal className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Regression Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.lmplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Regression', icon: LineChart },
              { id: 'grouping', label: 'Hue & Faceting', icon: SplitSquareHorizontal },
              { id: 'advanced', label: 'Polynomial & Robust', icon: Calculator },
              { id: 'real_world', label: 'EDA Analytics', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/30'
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
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-amber-600 dark:text-amber-400">
                    <LineChart className="w-6 h-6 mr-4" />
                    Step 1-3: Basic Linear Fit
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Providing two continuous arrays into the axes will instantly map out standard scatter points and trace a computationally precise trend line straight through the center mass.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_lm')} className="absolute bottom-6 right-6 p-4 bg-amber-600 text-white rounded-2xl shadow-xl hover:bg-amber-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Basic Scatter + Math Regression</span><br />
                        sns.<span className="text-amber-400 font-bold tracking-widest">lmplot</span>(<br />
                        &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>, <br />
                        &nbsp;&nbsp;y=<span className="text-amber-300">"tip"</span>, <br />
                        &nbsp;&nbsp;data=df<br />
                        )<br />
                        plt.<span className="text-cyan-400">show</span>()
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Grouping Context */}
              {activeTab === 'grouping' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-orange-500">
                    <SplitSquareHorizontal className="w-6 h-6 mr-4" />
                    Hue Grouping & Faceting (🔥)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    You can compute <b>multiple independent regression lines</b> by passing groups into <code>hue</code>. Furthermore, because `lmplot` is explicitly a Figure-Level graphing tool, it supports automatic FacetGrid generation via <code>col</code>!
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># Separate Best-fit Lines per Category</span><br />
                      sns.<span className="text-amber-400">lmplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>,<br />
                      &nbsp;&nbsp;y=<span className="text-amber-300">"tip"</span>,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">hue</span>=<span className="text-amber-300">"sex"</span>,<br />
                      &nbsp;&nbsp;data=df<br />
                      )<br /><br />
                      <span className="text-slate-500"># Spawn entirely separate plots (Faceting)</span><br />
                      sns.<span className="text-amber-400">lmplot</span>(..., <span className="text-purple-400 font-bold underline">col</span>=<span className="text-amber-300">"time"</span>)
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('group_lm')} className="px-10 py-5 bg-orange-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-orange-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Spawn Multi-Grid Models</button>
                  </div>
                </div>
              )}

              {/* Tab: Advanced Modifiers */}
              {activeTab === 'advanced' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-red-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Calculator className="w-6 h-6 mr-4" />
                    Advanced Mathematics
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Forcibly fit curved relationships using Polynomial mathematics (<code>order=2</code>), or instruct seaborn to ignore extreme scatter outliers using Robust regressions (<code>robust=True</code>).
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Fits a visually curved relationship</span><br />
                      sns.<span className="text-amber-400 font-bold">lmplot</span>(x=<span className="text-amber-300">"total_bill"</span>, y=<span className="text-amber-300">"tip"</span>, data=df, <span className="text-cyan-400 font-bold underline">order</span>=<span className="text-emerald-300">2</span>)<br /><br />
                      <span className="text-slate-500"># Math ignores extreme outliers distorting the line</span><br />
                      sns.<span className="text-amber-400 font-bold">lmplot</span>(..., <span className="text-cyan-400 font-bold underline">robust</span>=<span className="text-purple-400">True</span>)<br /><br />
                      <span className="text-slate-500"># Remove Confidence Interval mapping & change icon</span><br />
                      sns.<span className="text-amber-400 font-bold">lmplot</span>(..., <span className="text-cyan-400 font-bold underline">ci</span>=<span className="text-purple-400">None</span>, <span className="text-cyan-400 underline">markers</span>=<span className="text-amber-300">"o"</span>)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('adv_lm')} className="w-full py-5 bg-red-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-red-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Compute Polynomial Logic</button>
                </div>
              )}

              {/* Tab: Real World & Comparisons */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <Target className="w-6 h-6 mr-4" />
                    Real-World Analytics & VS
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Key Insights */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Key Concepts</h4>
                      <div className="text-xs grid grid-cols-1 gap-1.5 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        <p>✔ Shows combined trend & relationship</p>
                        <p>✔ Line strictly maps the <b>Best Fit</b></p>
                        <p>✔ Band = <b>statistical uncertainty</b></p>
                      </div>
                    </div>

                    {/* lmplot vs regplot */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">lmplot vs regplot</h4>
                      <div className="text-[10px] grid grid-cols-3 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium">
                        <b className="text-slate-500">Feature</b> <b className="text-amber-500 dark:text-amber-400">lmplot</b> <b className="text-slate-800 dark:text-slate-200">regplot</b>
                        <span>Level</span> <span>Figure</span> <span>Axis</span>
                        <span>Facets</span> <span>✅ Yes</span> <span>❌ No</span>
                        <span>Flex</span> <span>High</span> <span>Medium</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Feature Analysis: Study vs Score 📚</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-amber-300">"StudyHours"</span>: np.random.<span className="text-cyan-400">normal</span>(<span className="text-emerald-300">5</span>, <span className="text-emerald-300">2</span>, <span className="text-emerald-300">100</span>),<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Score"</span>: np.random.<span className="text-cyan-400">normal</span>(<span className="text-emerald-300">70</span>, <span className="text-emerald-300">10</span>, <span className="text-emerald-300">100</span>)<br />
                      &#125;)<br /><br />
                      sns.<span className="text-amber-400 font-bold">lmplot</span>(x=<span className="text-amber-300">"StudyHours"</span>, y=<span className="text-amber-300">"Score"</span>, data=data)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Measure Correlation Vectors</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            {/* Terminal Output Console */}
            <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] group-hover/terminal:bg-amber-500/10 transition-all duration-1000"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                  <div className="flex items-center">
                    <Terminal className="w-6 h-6 mr-4 text-amber-500" />
                    <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                      REGRESSION_LOG
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                  </div>
                </div>

                <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                      <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting XY Mappings</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-amber-500/50 mr-4 font-black select-none text-[8px] mt-1">LOG_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('successfully') || line.includes('Ready for Predictive') ? 'text-emerald-400 font-bold' :
                              line.includes('Computing Ordinary') || line.includes('Polynomial') || line.includes('robust') ? 'text-purple-400' :
                                line.includes('col=') || line.includes('hue=') ? 'text-cyan-300 font-bold' :
                                  line.includes('FacetGrid') || line.includes('Drawing') ? 'text-indigo-400' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution Terminated</span>
                        <button onClick={resetConsole} className="text-[9px] text-amber-500 hover:text-amber-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-amber-500/20 pb-0.5">PURGE</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-amber-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <ShieldCheck className="w-8 h-8 text-amber-500 mr-4" />
              Expert EDA Protocol <span className="text-xs ml-3 px-2 py-1 bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-amber-400 mb-2">🚀 Pre-ML Protocol</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Strictly use <code>lmplot()</code> when heavily exploring feature correlations during EDA before feeding arrays to ML. <b>Avoid</b> when your analysis involves purely categorical columns—you must use <code>countplot</code> or <code>barplot</code> instead.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-amber-400 mb-2">🚀 Pro Enhancements</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Always meticulously check just the scatter data <i>before</i> running math regressions to manually verify logic.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-500 mr-3 shrink-0"></span> Use <code>hue</code> to rapidly cross-compare trend variations.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-amber-500 mr-3 shrink-0"></span> If data looks explicitly curved, upgrade to <code>order=2</code>!</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-800 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-4 text-red-500" />
              Common Mistakes
            </h2>

            <div className="space-y-4 flex-1">
              {[
                { m: "Assuming computational causation.", fx: "Correlation ≠ Causation. Just because lmplot draws a beautiful upward line between Ice Cream Sales and Shark Attacks doesn't mean eating ice cream summons sharks." },
                { m: "Using linear fits on non-linear data.", fx: "If the scattered points form a clear parabolic U-shape, a straight linear regression line drawn directly through the middle tells you exactly nothing. Use order=2." },
                { m: "Ignoring brutal outliers.", fx: "One extreme dot carrying a value of 9000 among variables of 10 will geometrically drag the entire regression line up. Use robust=True to down-weight it." }
              ].map((mistake, i) => (
                <div key={i} className="flex items-start p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold mr-4 shrink-0 text-xs">X</div>
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

export default SbLmplot;
