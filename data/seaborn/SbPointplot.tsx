import React, { useState } from 'react';
import {
  Info, Code, Terminal, Layers, Play,
  Activity, Target, MapPin, Grid2X2,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, TrendingUp,
  Focus, Eye, ShieldCheck, LineChart,
  Filter, SplitSquareHorizontal, GitCommit
} from 'lucide-react';

const SbPointplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'grouping' | 'styling' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_point':
        outLines = [
          'Loading dataset "tips"...',
          'Detecting Categorical X-Axis: "day"...',
          'Detecting Numerical Y-Axis: "total_bill"...',
          'Computing aggregated statistical means per category...',
          'Drawing central estimate Points...',
          'Connecting categories with trajectory trace Lines...',
          'Mapping 95% Confidence Interval Error Bars...',
          'Pointplot trend visualization complete.'
        ];
        break;
      case 'hue_point':
        outLines = [
          'Detecting sub-classification: hue="sex"...',
          'Splitting category groups into overlapping parallel vectors...',
          '--> Overriding default estimator (Mean) to np.median...',
          'Recalculating central tendency resistant to skewed distribution...',
          'Rendering median points per group...',
          'Group behavioral differences clearly illuminated.'
        ];
        break;
      case 'style_point':
        outLines = [
          'Modifying visual engine parameters...',
          '--> ci=None: Stripping vertical uncertainty error bars...',
          '--> markers="o": Applying circular geometric nodes...',
          '--> linestyles="-": Applying solid structural trace lines...',
          'Simplifying graph UX significantly...',
          'Clean executive-ready trajectory chart rendered.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Bootstrapping Custom Departmental DataFrame...',
          'Loading: HR, IT, and Sales Salary vectors...',
          'Sorting continuous variables by Categorical departments...',
          'Drawing cross-departmental trend trajectory...',
          'Comparing average salaries structurally without blocky Barplot clutter...',
          'EDA complete: IT represents highest median baseline.'
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl mb-8 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <GitCommit className="w-12 h-12 text-indigo-600 dark:text-indigo-400 rotate-90" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-bold mb-6 border border-indigo-500/20 tracking-[0.25em] uppercase">
          Categorical Trend Vectors
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">Pointplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.pointplot() — Combine the aggregated math of a Bar chart with the trend-tracing lines of a Line plot to cleanly compare category behavioral shifts without visual clutter.
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
              <h2 className="text-3xl font-bold">1️⃣ What is a Point Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
              "A Point Plot strictly compares Categories via <b>Points</b> (aggregated averages) and connects them via <b>Lines</b> to explicitly highlight trends across groups, complete with <b>Error Bars</b> mapping statistical uncertainty."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-indigo-500" />
                Why Use pointplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Compare Category Averages", "Visualize Group Deviations", "Illuminate Cross-Trends", "Avoid Bar Chart Clutter"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-indigo-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Eye className="w-8 h-8 text-indigo-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Intelligence</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Target className="w-5 h-5 text-violet-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>The Points</b> = Exact aggregated mathematical values (Mean by default).</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <GitCommit className="w-5 h-5 text-cyan-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>The Connecting Lines</b> = Force the eye to explicitly observe structural trends.</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-indigo-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-indigo-400 font-bold">pointplot</span>(x=<span className="text-amber-300">None</span>, y=<span className="text-amber-300">None</span>, data=<span className="text-amber-300">None</span>)
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Trajectory Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.pointplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Vector', icon: MapPin },
              { id: 'grouping', label: 'Hue & Estimators', icon: Layers },
              { id: 'styling', label: 'UX & Uncertainties', icon: Filter },
              { id: 'real_world', label: 'Point vs Barplot', icon: SplitSquareHorizontal }
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
                    <MapPin className="w-6 h-6 mr-4" />
                    Step 1-3: Basic Point Plot
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Like a bar chart, pointplot takes a Category (X) and calculates the numerical average (Y). Unlike a bar chart, it connects those aggregated points with a trace line to expose exactly how the behavior shifts.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_point')} className="absolute bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-2xl shadow-xl hover:bg-indigo-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Regular Vertical Point</span><br />
                        sns.<span className="text-indigo-400 font-bold tracking-widest">pointplot</span>(x=<span className="text-amber-300">"day"</span>, y=<span className="text-amber-300">"total_bill"</span>, data=df)<br /><br />
                        <span className="text-slate-500 italic"># Pro-Tip: Horizontal swap is just x/y reversing</span><br />
                        sns.<span className="text-indigo-400 font-bold tracking-widest">pointplot</span>(y=<span className="text-amber-300">"day"</span>, x=<span className="text-amber-300">"total_bill"</span>, data=df)
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Hue Context */}
              {activeTab === 'grouping' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-violet-500">
                    <Layers className="w-6 h-6 mr-4" />
                    Hue Clusters & Estimators (🔥)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Stacking multiple bar charts side-by-side gets messy. Using <code>hue</code> in a pointplot lays multiple explicit trend lines directly over each other. If data is heavily skewed by billionaires, swap the mean aggregation out using <code>estimator=np.median</code>.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># Cross-Compare Multiple Groups Explicitly</span><br />
                      sns.<span className="text-indigo-400 font-bold tracking-widest">pointplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"day"</span>, y=<span className="text-amber-300">"total_bill"</span>,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">hue</span>=<span className="text-amber-300">"sex"</span>,<br />
                      &nbsp;&nbsp;data=df<br />
                      )<br /><br />
                      <span className="text-slate-500"># Math Override: Swap Mean for Robust Median</span><br />
                      <span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np<br />
                      sns.<span className="text-indigo-400 font-bold tracking-widest">pointplot</span>(..., <span className="text-cyan-400 font-bold underline">estimator</span>=np.median)
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('hue_point')} className="px-10 py-5 bg-violet-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-violet-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Calculate Median Subsets</button>
                  </div>
                </div>
              )}

              {/* Tab: Advanced Modifiers */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-cyan-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Filter className="w-6 h-6 mr-4" />
                    Clean UX & Geometry
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Sometimes the vertical error bars (Confidence Intervals/Uncertainty) clutter up the dashboard. You can completely strip them via <code>ci=None</code> and heavily modify the geometric line and point trace parameters.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Remove Confidence Interval mapping (UX Pro Tip)</span><br />
                      sns.<span className="text-indigo-400 font-bold tracking-widest">pointplot</span>(..., <span className="text-purple-400 font-bold underline">ci</span>=<span className="text-purple-400">None</span>)<br /><br />
                      <span className="text-slate-500"># Deep Geometric Customization</span><br />
                      sns.<span className="text-indigo-400 font-bold tracking-widest">pointplot</span>(<br />
                      &nbsp;&nbsp;...<br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">markers</span>=<span className="text-amber-300">"o"</span>,   <span className="text-slate-500"># Circular point geometry</span><br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">linestyles</span>=<span className="text-amber-300">"-"</span> <span className="text-slate-500"># Solid continuous trace</span><br />
                      )
                    </pre>
                  </div>

                  <button onClick={() => runDemo('style_point')} className="w-full py-5 bg-cyan-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-cyan-600 active:scale-95 transition-all text-xs uppercase tracking-widest">Apply Minimalist UI</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <SplitSquareHorizontal className="w-6 h-6 mr-4" />
                    Real-World Analytics & VS
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Insights */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Best Use Cases 🎯</h4>
                      <div className="text-[11px] grid grid-cols-1 gap-1.5 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        <p>📈 Sales Tracking Analytics</p>
                        <p>📊 Performance Comparisons</p>
                        <p>🧾 Broad Survey Sub-Trends</p>
                      </div>
                    </div>

                    {/* pointplot vs barplot */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">point vs bar</h4>
                      <div className="text-[10px] grid grid-cols-3 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium bg-transparent">
                        <b className="text-slate-500">Feature</b> <b className="text-indigo-500 dark:text-indigo-400">Point</b> <b className="text-slate-800 dark:text-slate-200">Bar</b>
                        <span>Visuals</span> <span>Pts + Lines</span> <span>Bars</span>
                        <span>Clarity</span> <span>High</span> <span>Med</span>
                        <span>Trend</span> <span>✅ Explicit</span> <span>❌ None</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Departmental Salaries</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Dept"</span>: [<span className="text-amber-300">"HR"</span>, <span className="text-amber-300">"IT"</span>, <span className="text-amber-300">"Sales"</span>, <span className="text-amber-300">"HR"</span>, <span className="text-amber-300">"IT"</span>, <span className="text-amber-300">"Sales"</span>],<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Salary"</span>: [<span className="text-emerald-300">30k</span>, <span className="text-emerald-300">50k</span>, <span className="text-emerald-300">45k</span>, <span className="text-emerald-300">32k</span>, <span className="text-emerald-300">52k</span>, <span className="text-emerald-300">47k</span>]<br />
                      &#125;)<br /><br />
                      sns.<span className="text-indigo-400 font-bold">pointplot</span>(x=<span className="text-amber-300">"Dept"</span>, y=<span className="text-amber-300">"Salary"</span>, data=data)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Evaluate Executive KPIs</button>
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
                      VECTOR_STAT_SYS
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
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting XY Categories</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-indigo-500/50 mr-4 font-black select-none text-[8px] mt-1">SYS_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('complete') || line.includes('illuminated') || line.includes('rendered') ? 'text-emerald-400 font-bold' :
                              line.includes('Computing aggregated') || line.includes('Recalculating') || line.includes('Sorting continuous') ? 'text-indigo-400' :
                                line.includes('hue=') || line.includes('estimator=') || line.includes('ci=') ? 'text-cyan-300 font-bold' :
                                  line.includes('markers=') || line.includes('linestyles=') ? 'text-violet-400' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Statistical Process Ended</span>
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
              <ShieldCheck className="w-8 h-8 text-indigo-500 mr-4" />
              Expert Workflow <span className="text-xs ml-3 px-2 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-indigo-400 mb-2">🚀 When to Use</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Strictly use <code>pointplot()</code> when you are intentionally attempting to explicitly extract <b>categorical trends</b>, rendering it much cleaner than a bulky barplot. <b>Avoid</b> when you actually need raw distributions—use boxplot/violinplot instead.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-indigo-400 mb-2">🚀 Pro Statistics Execution</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Default averages are easily skewed. Apply <code>estimator=np.median</code>.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-violet-500 mr-3 shrink-0"></span> When building executive dashboards for high-level directors, force <code>ci=None</code> to drastically clean the UI footprint.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span> Use `hue` heavily to isolate specific categorical sub-populations.</li>
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
                { m: "Thinking the points represent raw data.", fx: "If you have 10,000 Sales entries for IT, pointplot only draws ONE line point representing the math statistical average. None of the raw data acts as a scatter node here." },
                { m: "Ignoring the Confidence Error Bars.", fx: "If the vertical error bars are massive, the aggregated 'Point' means essentially nothing because the data is incredibly volatile. Do not ignore uncertainty." },
                { m: "Using pointplots on extremely small datasets.", fx: "If a category only has 1 or 2 entries, calculating an aggregated 'Mean' with an error bar is statistically pointless and highly misleading." }
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

export default SbPointplot;
