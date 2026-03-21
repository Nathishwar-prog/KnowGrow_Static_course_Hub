import React, { useState } from 'react';
import {
  Info, Terminal, Play, Activity, Target, BoxSelect, Maximize,
  AlertTriangle, CheckCircle2, Focus, Eye, ShieldCheck,
  SplitSquareHorizontal, Layers3, CircleDot,
  BarChart, Zap, Combine
} from 'lucide-react';

const SbStripplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'jitter' | 'combo' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basics':
        outLines = [
          'Loading numerical dataset "tips"...',
          'Executing sns.stripplot(x="day", y="total_bill", data=df)...',
          'Plotting raw data points across categorical X axis...',
          'Warning: Points are heavily overlapping on a single vertical line.',
          'Basic Strip Plot generated successfully.'
        ];
        break;
      case 'jitter':
        outLines = [
          'Loading numerical dataset "tips"...',
          'Applying jitter=True to horizontal spread...',
          'Resolving overlap: Plotting points dynamically along categorical axes...',
          'Applying hue="sex" for discrete color mapping...',
          'Adjusting opacity (alpha=0.6) and dot size (size=6)...',
          'Clean, jittered Strip Plot compiled.'
        ];
        break;
      case 'combo':
        outLines = [
          'Executing sns.boxplot(x="day", y="total_bill", data=df)...',
          'Drawing statistical summary (median, quartiles, whiskers)...',
          'Executing sns.stripplot(x="day", y="total_bill", data=df, color="black", alpha=0.5)...',
          'Overlaying raw data points directly onto the boxplot...',
          'Ultimate visualization combo successfully rendered.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Compiling Corporate Salary DataFrame...',
          'Extracting "Department" (Categorical) and "Salary" (Numerical)...',
          'Executing sns.stripplot(x="Department", y="Salary", jitter=True)...',
          'Distributing HR, IT, and Sales salary points...',
          'Salary distribution visualization deployed. Outliers detected.'
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl mb-8 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <CircleDot className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-bold mb-6 border border-indigo-500/20 tracking-[0.25em] uppercase">
          Categorical Distribution
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-500">Stripplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.stripplot() — Visualize individual data points across categories. Reveal the raw truth, prevent aggregation loss, and spot extreme outliers instantly.
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
              <h2 className="text-3xl font-bold">1️⃣ What is a Strip Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
              "It is fundamentally a scatterplot where one axis is categorical. <b>Each dot equals exactly one observation.</b> It gives you absolute visibility over the raw data distribution."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-indigo-500" />
                Why Use stripplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["See actual raw data points", "Avoid heavy aggregation", "Instantly spot outliers", "Visually compare spreads"].map((stat, i) => (
                  <div key={i} className="flex flex-col justify-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mb-2" />
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
                  <Target className="w-5 h-5 text-rose-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>No Mapping Bias</b> = Shows the raw truth of how dataset points cluster natively.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Maximize className="w-5 h-5 text-emerald-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>The Foundation</b> = Categories on one axis, continuous numerical values on the other.</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-indigo-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Basic Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-indigo-400 font-bold">stripplot</span>(x=<span className="text-amber-300">None</span>, y=<span className="text-amber-300">None</span>, data=<span className="text-amber-300">None</span>)
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Strip Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.stripplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic plot', icon: BoxSelect },
              { id: 'jitter', label: 'Jitter & Hue', icon: Zap },
              { id: 'combo', label: 'Box Combo', icon: Combine },
              { id: 'real_world', label: 'Real-World', icon: SplitSquareHorizontal }
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
                    <BoxSelect className="w-6 h-6 mr-4" />
                    Step 1-5: Base Strip Plot
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      By default, `stripplot` draws all points exactly where they lie. If many points have the same value, they will perfectly overlap each other. You can also reverse the X/Y axes to make it horizontal!
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basics')} className="absolute bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-2xl shadow-xl hover:bg-indigo-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Basic vertical default plotting</span><br />
                        sns.<span className="text-indigo-400 font-bold tracking-widest">stripplot</span>(x=<span className="text-amber-300">"day"</span>, y=<span className="text-amber-300">"total_bill"</span>, data=df)<br /><br />
                        <span className="text-slate-500 italic"># Want Horizontal? Just swap X & Y!</span><br />
                        sns.<span className="text-indigo-400 font-bold tracking-widest">stripplot</span>(y=<span className="text-amber-300">"day"</span>, x=<span className="text-amber-300">"total_bill"</span>, data=df)
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Jitter & Hue */}
              {activeTab === 'jitter' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-rose-500">
                    <Zap className="w-6 h-6 mr-4" />
                    Jitter & Customizations (🔥)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Adding <code>jitter=True</code> is critical. It spreads out overlapping points randomly along the categorical axis so you can actually see density. Combine with <code>hue</code> to instantly group the distribution.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># The definitive way to customize a stripplot</span><br />
                      sns.<span className="text-indigo-400 font-bold tracking-widest">stripplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"day"</span>,<br />
                      &nbsp;&nbsp;y=<span className="text-amber-300">"total_bill"</span>,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">hue</span>=<span className="text-amber-300">"sex"</span>,      <span className="text-slate-500"># Grouping mapping</span><br />
                      &nbsp;&nbsp;data=df,<br />
                      &nbsp;&nbsp;<span className="text-emerald-400 font-bold">jitter</span>=<span className="text-rose-400">True</span>,     <span className="text-slate-500"># Prevents point overlap!</span><br />
                      &nbsp;&nbsp;<span className="text-cyan-400">size</span>=<span className="text-amber-300">6</span>,          <span className="text-slate-500"># Controls dot styling size</span><br />
                      &nbsp;&nbsp;<span className="text-cyan-400">alpha</span>=<span className="text-amber-300">0.6</span>        <span className="text-slate-500"># Transparency limits clutter</span><br />
                      )
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('jitter')} className="px-10 py-5 bg-rose-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-rose-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Apply Jitter Engine</button>
                  </div>
                </div>
              )}

              {/* Tab: Best Practice Combo */}
              {activeTab === 'combo' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-amber-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Combine className="w-6 h-6 mr-4" />
                    Combine with Boxplot (Best Practice)
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Boxplots show summary statistics (medians, quartiles) but hide the real dataset. Combining them puts the <b>raw data</b> visually directly over the <b>summary box</b>.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># 1. First layer: Summary Statistics Boxplot</span><br />
                      sns.<span className="text-indigo-400 font-bold">boxplot</span>(x=<span className="text-amber-300">"day"</span>, y=<span className="text-amber-300">"total_bill"</span>, data=df)<br /><br />
                      <span className="text-slate-500"># 2. Second layer: Raw Data Strip Points on top</span><br />
                      sns.<span className="text-indigo-400 font-bold">stripplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"day"</span>,<br />
                      &nbsp;&nbsp;y=<span className="text-amber-300">"total_bill"</span>,<br />
                      &nbsp;&nbsp;data=df,<br />
                      &nbsp;&nbsp;<span className="text-cyan-400">color</span>=<span className="text-amber-300">"black"</span>,<br />
                      &nbsp;&nbsp;<span className="text-cyan-400">alpha</span>=<span className="text-amber-300">0.5</span><br />
                      )
                    </pre>
                  </div>

                  <button onClick={() => runDemo('combo')} className="w-full py-5 bg-amber-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-amber-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Build Combo Plot</button>
                </div>
              )}

              {/* Tab: Real World & VS */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <SplitSquareHorizontal className="w-6 h-6 mr-4" />
                    Real-World Usage & Swarm VS
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Insights */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Used Heavily In 🏢</h4>
                      <div className="text-[11px] grid grid-cols-1 gap-1.5 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        <p>🧾 Survey data visualization</p>
                        <p>👥 Customer demographic analysis</p>
                        <p>💰 Corporate salary comparisons</p>
                      </div>
                    </div>

                    {/* strip vs swarm */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">strip vs swarmplot</h4>
                      <div className="text-[10px] grid grid-cols-3 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium bg-transparent">
                        <b className="text-slate-500">Feature</b> <b className="text-indigo-500 dark:text-indigo-400">Strip</b> <b className="text-slate-800 dark:text-slate-200">Swarm</b>
                        <span>Overlap</span> <span>Possible</span> <span>No</span>
                        <span>Speed</span> <span>Fast</span> <span>Slower</span>
                        <span>Accuracy</span> <span>Med</span> <span>High</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Department Salary Spread</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Dept"</span>: [<span className="text-amber-300">"HR"</span>, <span className="text-amber-300">"IT"</span>, <span className="text-amber-300">"Sales"</span>, <span className="text-amber-300">"HR"</span>, <span className="text-amber-300">"IT"</span>, <span className="text-amber-300">"Sales"</span>],<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Salary"</span>: [<span className="text-emerald-300">30k</span>, <span className="text-emerald-300">50k</span>, <span className="text-emerald-300">45k</span>, <span className="text-emerald-300">32k</span>, <span className="text-emerald-300">52k</span>, <span className="text-emerald-300">47k</span>]<br />
                      &#125;)<br /><br />
                      sns.<span className="text-indigo-400 font-bold">stripplot</span>(x=<span className="text-amber-300">"Dept"</span>, y=<span className="text-amber-300">"Salary"</span>, <span className="text-emerald-400">jitter</span>=<span className="text-rose-400">True</span>, data=data)
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
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] group-hover/terminal:bg-indigo-500/10 transition-all duration-1000"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                  <div className="flex items-center">
                    <Terminal className="w-6 h-6 mr-4 text-indigo-500" />
                    <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                      STRIP_EXEC_ENV
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
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Plot Commands</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-indigo-500/50 mr-4 font-black select-none text-[8px] mt-1">SYS_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('successfully') || line.includes('compiled') || line.includes('deployed') ? 'text-emerald-400 font-bold' :
                              line.includes('Warning') || line.includes('overlap') ? 'text-amber-400' :
                                line.includes('jitter') || line.includes('alpha') || line.includes('hue') ? 'text-cyan-300 font-bold' :
                                  line.includes('boxplot') || line.includes('stripplot') ? 'text-indigo-400 font-bold' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution End</span>
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

          {/* Expert Workflows */}
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-indigo-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <ShieldCheck className="w-8 h-8 text-indigo-500 mr-4" />
              Expert Workflow <span className="text-xs ml-3 px-2 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-indigo-400 mb-2">🚀 When to Use vs Avoid</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Use stripplot() when you explicitly want <b>raw data visibility</b> or when teaching beginners. **Avoid** using it when the dataset is absolutely massive—if you have millions of rows, use a <code>swarmplot()</code> or <code>boxenplot()</code> instead to avoid a wall of ink.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-indigo-400 mb-2">🚀 Aesthetics Check</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-rose-500 mr-3 shrink-0"></span> Always use `jitter=True` to prevent a terrible straight line.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-sky-500 mr-3 shrink-0"></span> Keep dot `size` balanced. Not too massive, not microscopic.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 shrink-0"></span> Force visual grouping instantly with `hue="category"`.</li>
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
                { m: "Not using jitter.", fx: "If you leave out jitter, all points with the same category fall onto one massive overlapping straight line. You completely lose data spread visibility." },
                { m: "Plotting too many points.", fx: "If you feed a 500,000-row dataframe into a stripplot, you simply just generate a solid block of color. It's a cluttered mess." },
                { m: "Using it totally alone.", fx: "Usually, providing just dots isn't enough context for stakeholders. It is universally best practice to combine it with a box or violin plot underneath." }
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

export default SbStripplot;
