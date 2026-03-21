import React, { useState } from 'react';
import {
  Info, Code, Terminal, Layers, Play,
  Activity, Target, TrendingUp,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2,
  Focus, Eye, ShieldCheck, LineChart,
  GitCommit, SplitSquareHorizontal
} from 'lucide-react';

const SbLineplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'grouping' | 'intervals' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_line':
        outLines = [
          'Loading dataset "flights"...',
          'Extracting temporal sequence: x="year"...',
          'Extracting numerical values: y="passengers"...',
          'Automatically applying data aggregation...',
          'Connecting sequential data points...',
          'Basic time-series Trend Line rendered successfully.'
        ];
        break;
      case 'group_line':
        outLines = [
          'Detecting category subsets via hue="month"...',
          'Detecting dynamic line patterning via style="month"...',
          'Attaching geometric locators: marker="o"...',
          'Splitting single timeline into multiple comparative series...',
          'Assigning unique dashes and colors entirely...',
          'Multi-line categorical chart rendered successfully.'
        ];
        break;
      case 'ci_line':
        outLines = [
          'Detecting multiple observations per X-axis integer...',
          'Calculating mean aggregate values...',
          'Computing 95% Bootstrap Confidence Intervals (CI)...',
          'Rendering shaded uncertainty bands...',
          'Applying custom palette="tab10" & linewidth=2...',
          'Production-level styled Lineplot generated.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Initializing custom Pandas DataFrame: Daily Sales...',
          'Pre-flight check: Verifying X-axis (Day) is sorted...',
          'Mapping discrete daily integers to continuous vector trajectory...',
          'Drawing linear progression paths...',
          'Analysis complete: Clear positive sales growth identified.',
          'Data cleanly suited for Executive Dashboards.'
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl mb-8 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
          <TrendingUp className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-bold mb-6 border border-emerald-500/20 tracking-[0.25em] uppercase">
          Time-Series Trajectory
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Lineplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.lineplot() — The definitive visualization chart used to track continuous data patterns, growth, and trends over ordered sequences and time.
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
              <h2 className="text-3xl font-bold">1️⃣ What is a Line Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-emerald-500 pl-6">
              "A chart where the <b>X-axis</b> represents ordered sequential data (like time or dates), the <b>Y-axis</b> acts as numerical values, and the continuous <b>line</b> reveals the core trend/pattern."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-emerald-500" />
                Why Use lineplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Analyze Time Trends", "Compare Time Series", "Continuous Data Patterns", "Identify Growth/Decline"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-emerald-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Eye className="w-8 h-8 text-emerald-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Intelligence</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <TrendingUp className="w-5 h-5 text-cyan-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Lines immediately</b> show how values strictly evolve over an advancing clock.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Layers className="w-5 h-5 text-indigo-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300">Automatically <b>aggregates messy data</b> into clean single-line calculations.</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-emerald-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-emerald-400 font-bold">lineplot</span>(x=<span className="text-amber-300">None</span>, y=<span className="text-amber-300">None</span>, data=<span className="text-amber-300">None</span>)
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Trend Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.lineplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Sequence', icon: LineChart },
              { id: 'grouping', label: 'Hue & Markers', icon: GitCommit },
              { id: 'intervals', label: 'Confidence & Style', icon: Target },
              { id: 'real_world', label: 'Sales vs Scatter', icon: SplitSquareHorizontal }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30'
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
                    <LineChart className="w-6 h-6 mr-4" />
                    Step 1-3: Basic Time Sequence
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Ensure your X-axis holds sequence-based data (like "year"). Passing the dataset natively calculates and connects the average Y value across that entire timeline.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_line')} className="absolute bottom-6 right-6 p-4 bg-emerald-600 text-white rounded-2xl shadow-xl hover:bg-emerald-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"flights"</span>)<br />
                        <span className="text-blue-400">print</span>(df.<span className="text-cyan-400">head</span>())<br /><br />
                        <span className="text-slate-500 italic"># Basic Line Plot</span><br />
                        sns.<span className="text-emerald-400 font-bold tracking-widest">lineplot</span>(x=<span className="text-amber-300">"year"</span>, y=<span className="text-amber-300">"passengers"</span>, data=df)<br /><br />
                        plt.<span className="text-cyan-400">title</span>(<span className="text-amber-300">"Passengers Over Time"</span>)<br />
                        plt.<span className="text-cyan-400">show</span>()
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Grouping */}
              {activeTab === 'grouping' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-cyan-500">
                    <GitCommit className="w-6 h-6 mr-4" />
                    Hue, Style & Markers
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    You can effortlessly split data into multiple overlapping trend lines by applying <code>hue</code>. Boost readability by ensuring each line has a different geometric <code>marker</code> and dashed <code>style</code>.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># Add Hue + Markers for extreme clarity</span><br />
                      sns.<span className="text-emerald-400">lineplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"year"</span>,<br />
                      &nbsp;&nbsp;y=<span className="text-amber-300">"passengers"</span>,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">hue</span>=<span className="text-amber-300">"month"</span>,   <span className="text-slate-500"># Color by group</span><br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">style</span>=<span className="text-amber-300">"month"</span>, <span className="text-slate-500"># Different dashes</span><br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">marker</span>=<span className="text-amber-300">"o"</span>,  <span className="text-slate-500"># Dots on points</span><br />
                      &nbsp;&nbsp;data=df<br />
                      )
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('group_line')} className="px-10 py-5 bg-cyan-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-cyan-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Map Multiple Categories</button>
                  </div>
                </div>
              )}

              {/* Tab: Intervals & Style */}
              {activeTab === 'intervals' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-indigo-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Target className="w-6 h-6 mr-4" />
                    Confidence Intervals (CI)
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    By default, if there are multiple Y variations scattered around a single X timestamp, seaborn aggregates them and renders a <b>shaded area</b> indicating statistical Confidence Interval (uncertainty).
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Disable Confidence Interval specifically</span><br />
                      sns.<span className="text-emerald-400 font-bold">lineplot</span>(x=<span className="text-amber-300">"year"</span>, y=<span className="text-amber-300">"passengers"</span>, data=df, <span className="text-cyan-400 font-bold underline">ci</span>=<span className="text-purple-400">None</span>)<br /><br />
                      <span className="text-slate-500"># Global Appearance Modifications</span><br />
                      sns.<span className="text-emerald-400 font-bold">lineplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"year"</span>,<br />
                      &nbsp;&nbsp;y=<span className="text-amber-300">"passengers"</span>, <br />
                      &nbsp;&nbsp;data=df,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">linewidth</span>=<span className="text-emerald-300">2</span>,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">palette</span>=<span className="text-amber-300">"tab10"</span><br />
                      )
                    </pre>
                  </div>

                  <button onClick={() => runDemo('ci_line')} className="w-full py-5 bg-indigo-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-indigo-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Draw Uncertainty Areas</button>
                </div>
              )}

              {/* Tab: Real World & Comparisons */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-teal-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <SplitSquareHorizontal className="w-6 h-6 mr-4" />
                    Real-World Analytics & VS
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Insights */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Best Use Cases 📈</h4>
                      <div className="text-xs grid grid-cols-1 gap-1.5 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        <p>✔ Tracking <b>Stock Prices</b></p>
                        <p>✔ Analyzing <b>Sales Trends</b></p>
                        <p>✔ Daily <b>Website Traffic</b> patterns</p>
                      </div>
                    </div>

                    {/* Plot showdown */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Lineplot vs Scatterplot</h4>
                      <div className="text-[10px] grid grid-cols-3 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium">
                        <b className="text-slate-500">Feature</b> <b className="text-emerald-500 dark:text-emerald-400">Line</b> <b className="text-slate-800 dark:text-slate-200">Scatter</b>
                        <span>Shows trend</span> <span>✅</span> <span>❌</span>
                        <span>Data type</span> <span>Continuous</span> <span>Any</span>
                        <span>Insight</span> <span>High</span> <span>Med</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Simple Corporate Sales Setup</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Day"</span>: [<span className="text-emerald-300">1</span>, <span className="text-emerald-300">2</span>, <span className="text-emerald-300">3</span>, <span className="text-emerald-300">4</span>, <span className="text-emerald-300">5</span>],<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Sales"</span>: [<span className="text-emerald-300">200</span>, <span className="text-emerald-300">250</span>, <span className="text-emerald-300">300</span>, <span className="text-emerald-300">280</span>, <span className="text-emerald-300">350</span>]<br />
                      &#125;)<br /><br />
                      sns.<span className="text-emerald-400 font-bold">lineplot</span>(x=<span className="text-amber-300">"Day"</span>, y=<span className="text-amber-300">"Sales"</span>, data=data, marker=<span className="text-amber-300">"o"</span>)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-teal-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-teal-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Evaluate Sales Progression</button>
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
                      VECTOR_TRACKER
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
                      <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting XY Sequence</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-emerald-500/50 mr-4 font-black select-none text-[8px] mt-1">SEQ_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('successfully') || line.includes('identified') ? 'text-teal-400 font-bold' :
                              line.includes('Calculating') || line.includes('Extracting') || line.includes('Detecting') ? 'text-blue-400' :
                                line.includes('hue=') || line.includes('style=') || line.includes('marker=') ? 'text-cyan-300 font-bold' :
                                  line.includes('palette=') || line.includes('linewidth=') ? 'text-indigo-400' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">End of Process</span>
                        <button onClick={resetConsole} className="text-[9px] text-emerald-500 hover:text-emerald-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-emerald-500/20 pb-0.5">PURGE</button>
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
              <ShieldCheck className="w-8 h-8 text-emerald-500 mr-4" />
              Expert Workflow <span className="text-xs ml-3 px-2 py-1 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-emerald-400 mb-2">🚀 When to Use</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Strictly use <code>lineplot()</code> when you are relying on <b>time-based data</b> and want to show exact trend evolution explicitly. <b>Avoid</b> when your X-axis data is purely categorical with no implicit order—use <code>barplot</code> instead.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-emerald-400 mb-2">🚀 Best Practice Enhancements</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-teal-500 mr-3 shrink-0"></span> <b className="mr-1">ALWAYS Sort Data:</b> <code>df = df.sort_values("year")</code></li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Keep graphics clean by maxing out at strictly <b>5–7 lines</b>.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 shrink-0"></span> Emphasize the primary analysis group using a bold <code>palette</code>.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span> Combine heavy timelines using <b>FacetGrid</b> dashboards.</li>
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
                { m: "Using unordered X-axis.", fx: "If the dates are scrambled in the CSV, seaborn will wildly criss-cross the line back and forth. You MUST sequentially sort the axis." },
                { m: "Adding far too many lines.", fx: "If you hue on a category that has 50 individual classes, the chart immediately becomes illegible \"spaghetti\"." },
                { m: "Removing Confidence Interval blindly.", fx: "People often set ci=None purely for aesthetics—doing this totally hides the reality of volatility and variance within groups." }
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

export default SbLineplot;
