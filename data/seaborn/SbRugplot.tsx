import React, { useState } from 'react';
import {
  Info, Terminal, Layers, Play,
  Activity, Target,
  AlertTriangle,
  ListChecks, CheckCircle2,
  Focus, Eye, ShieldCheck,
  SplitSquareHorizontal,
  AlignEndHorizontal, Ruler
} from 'lucide-react';

const SbRugplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'combos' | 'styling' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_rug':
        outLines = [
          'Initializing Marginal Distribution plot...',
          'Loading 1-Dimensional numerical array "total_bill"...',
          '--> Bypassing Histogram binning algorithms...',
          '--> Bypassing KDE smoothing kernels...',
          'Drawing literal vertical ticks exactly at actual data coordinates...',
          'Mapping marginal data density directly onto the axis...',
          'Raw position generation complete.'
        ];
        break;
      case 'combo_rug':
        outLines = [
          'Activating Multi-Plot combination engine...',
          'Step 1: Generating standard sns.kdeplot(..., fill=True)...',
          'Rendering smooth continuous probability volume...',
          'Step 2: Overlaying sns.rugplot() on the exact same axis...',
          'Injecting rigid factual markers immediately underneath the smooth curve...',
          'Perfect auxiliary support visual created.'
        ];
        break;
      case 'style_rug':
        outLines = [
          'Accessing underlying Matplotlib LineCollection parameters...',
          '--> Passing height=0.05: Shrinking ticks to avoid interfering with main plot...',
          '--> Passing alpha=0.5: Executing transparency overlap...',
          '--> Passing color="red": Applying explicit warning track hues...',
          'Dense data clusters correctly exposed via transparency.',
          'UI formatting finalized.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Simulating Corporate Salary array using np.random.normal(50k, 10k, 100)...',
          'Passing Gaussian Distribution into sns.kdeplot()...',
          'Generating Baseline Rug tracking beneath...',
          'Analyzing Output Matrix:',
          '- Dense clustering perfectly correlates with KDE peak.',
          '- Extreme Salary Outliers instantly identified uniquely on the Rug line.',
          'Execution finished securely.'
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
          <AlignEndHorizontal className="w-12 h-12 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-[10px] font-bold mb-6 border border-amber-500/20 tracking-[0.25em] uppercase">
          Marginal Distribution Tool
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Rugplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.rugplot() — The ultimate <b>support visual</b>. Instead of grouping data into bins or smoothing it into curves, `rugplot` draws a tiny vertical tick for every single exact mathematical observation along an axis.
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
              <h2 className="text-3xl font-bold">1️⃣ What is a Rug Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-amber-500 pl-6">
              "It is fundamentally a 1D scatter plot. Instead of painting a dot in space, it draws a physical mark (a rug fringe) precisely at the true value of every single unique data point observed."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-amber-500" />
                Why Use rugplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Visualize Exact Positions", "Detect Absolute Outliers", "Support Histogram Bins", "Verify Dense Clusters"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-amber-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Ruler className="w-8 h-8 text-amber-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Intelligence</h2>
              </div>

              <div className="space-y-4 mb-5">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 transition-colors">
                  <AlignEndHorizontal className="w-5 h-5 text-amber-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-200"><b>The Missing Links:</b> Histograms group data, obscuring exact locations. A Rugplot shows exactly where each underlying piece of data legitimately sits beneath the bins.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 transition-colors">
                  <Target className="w-5 h-5 text-orange-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-200"><b>Single Ticks:</b> 1 Tick = 1 Observation mathematically.</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-amber-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-amber-400 font-bold">rugplot</span>(x=<span className="text-amber-300">None</span>, data=<span className="text-amber-300">None</span>)
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Accuracy Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.rugplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Setup', icon: AlignEndHorizontal },
              { id: 'combos', label: 'Plot Combinations (🔥)', icon: Layers },
              { id: 'styling', label: 'Height & Opacity', icon: Eye },
              { id: 'real_world', label: 'Rug vs Hist/KDE', icon: SplitSquareHorizontal }
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
                    <AlignEndHorizontal className="w-6 h-6 mr-4" />
                    Step 1-3: Axis Tracing
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Invoking `rugplot` completely alone simply populates the bottom axis with thousands of tiny ticks corresponding exactly to numeric events.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_rug')} className="absolute bottom-6 right-6 p-4 bg-amber-600 text-white rounded-2xl shadow-xl hover:bg-amber-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-yellow-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Extremely Basic Execution (Horizontal Axis)</span><br />
                        sns.<span className="text-amber-400 font-bold tracking-widest">rugplot</span>(x=<span className="text-yellow-300">"total_bill"</span>, data=df)<br /><br />
                        <span className="text-slate-500 italic"># You can map vertically simply by swapping</span><br />
                        sns.<span className="text-amber-400 font-bold tracking-widest">rugplot</span>(y=<span className="text-yellow-300">"total_bill"</span>, data=df)<br />
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Critical Combinations */}
              {activeTab === 'combos' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-orange-500">
                    <Layers className="w-6 h-6 mr-4" />
                    Support Overlays (Mandatory)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Because `rugplot` is an axis-level function, its true power comes from mapping it explicitly beneath a larger, smoother plotting system (like KDEs or Histograms) so viewers can reference the real, raw data causing the curves.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># 1. Overlaying on Top of a Histogram</span><br />
                      sns.<span className="text-cyan-400">histplot</span>(x=<span className="text-yellow-300">"total_bill"</span>, data=df)<br />
                      sns.<span className="text-amber-400 font-bold tracking-widest">rugplot</span>(x=<span className="text-yellow-300">"total_bill"</span>, data=df)<br /><br />
                      <span className="text-slate-500"># 2. Perfect Smooth KDE Correlation</span><br />
                      sns.<span className="text-cyan-400">kdeplot</span>(x=<span className="text-yellow-300">"total_bill"</span>, data=df, fill=<span className="text-purple-400">True</span>)<br />
                      sns.<span className="text-amber-400 font-bold tracking-widest">rugplot</span>(x=<span className="text-yellow-300">"total_bill"</span>, data=df)
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('combo_rug')} className="px-10 py-5 bg-orange-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-orange-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Overlays</button>
                  </div>
                </div>
              )}

              {/* Tab: Styling Details */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-yellow-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Eye className="w-6 h-6 mr-4" />
                    Crucial UX Modifications
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    If your default `rugplot` intersects and ruins your primary KDE plot, you must use <code>height</code> to safely crush it to the bottom. Additionally, stacking 1000 points perfectly on top of each other hides density without <code>alpha</code>.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Formatting the base Rug ticks visually</span><br />
                      sns.<span className="text-amber-400 font-bold tracking-widest">rugplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-yellow-300">"total_bill"</span>, data=df,<br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">height</span>=<span className="text-emerald-300">0.05</span>, <span className="text-slate-500"># Prevents cluttering the histogram</span><br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">alpha</span>=<span className="text-emerald-300">0.5</span>,   <span className="text-slate-500"># Highlights dense tick clusters!</span><br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">color</span>=<span className="text-yellow-300">"red"</span>  <span className="text-slate-500"># Makes ticks stand out completely</span><br />
                      )
                    </pre>
                  </div>

                  <button onClick={() => runDemo('style_rug')} className="w-full py-5 bg-yellow-600 text-slate-900 font-extrabold rounded-[2rem] shadow-xl hover:bg-yellow-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Optimize Interference</button>
                </div>
              )}

              {/* Tab: Real World & VS */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-rose-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <SplitSquareHorizontal className="w-6 h-6 mr-4" />
                    Evaluation vs Systems
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* rug vs KDE vs HIST */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 col-span-2">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center"><ListChecks className="w-4 h-4 mr-2 text-amber-500" /> Rugplot vs Hist vs KDE</h4>
                      <div className="text-[11px] grid grid-cols-4 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium bg-transparent">
                        <b className="text-slate-500">Feature</b> <b className="text-amber-500 dark:text-amber-400">Rugplot</b> <b className="text-slate-800 dark:text-slate-200">Hist</b> <b className="text-slate-800 dark:text-slate-200">KDE</b>
                        <span>Shows Raw</span> <span className="text-emerald-500 font-bold">✅ Yes</span> <span>❌ No</span> <span>❌ No</span>
                        <span>Smooth UX</span> <span>❌ No</span> <span>❌ No</span> <span className="text-emerald-500 font-bold">✅ Yes</span>
                        <span>Readability</span> <span>Medium</span> <span>High</span> <span>High</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative mt-2">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Salary Distribution Matrix</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-yellow-300">"Salary"</span>: np.random.<span className="text-cyan-400">normal</span>(<span className="text-emerald-300">50000</span>, <span className="text-emerald-300">10000</span>, <span className="text-emerald-300">100</span>)<br />
                      &#125;)<br /><br />
                      sns.<span className="text-cyan-400">kdeplot</span>(data[<span className="text-yellow-300">"Salary"</span>], fill=<span className="text-purple-400">True</span>)<br />
                      sns.<span className="text-amber-400 font-bold">rugplot</span>(data[<span className="text-yellow-300">"Salary"</span>])
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-rose-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-rose-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Generate Density Model</button>
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
                      MARGINAL_TICK_SYS
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
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Support Plot</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-amber-500/50 mr-4 font-black select-none text-[8px] mt-1">SYS_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('complete') || line.includes('successfully') || line.includes('securely') || line.includes('created') ? 'text-emerald-400 font-bold' :
                            line.includes('Bypassing ') || line.includes('Activating ') ? 'text-orange-400 font-bold' :
                              line.includes('Initializing') || line.includes('Simulating') || line.includes('Executing') || line.includes('Overlaying') ? 'text-indigo-400' :
                                line.includes('height=') || line.includes('alpha=') || line.includes('color=') || line.includes('fill=True') ? 'text-cyan-300 font-bold' :
                                  'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Evaluation Protocol Ended</span>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-amber-500/20 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <ShieldCheck className="w-8 h-8 text-amber-500 mr-4" />
              Expert Application <span className="text-xs ml-3 px-2 py-1 bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-4 flex-1">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 h-full">
                <h4 className="font-bold text-slate-800 dark:text-amber-400 mb-2">🚀 The Support Weapon</h4>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4">
                  You should almost <b>never</b> use a `rugplot` completely isolated. It represents one of the strongest <b>Support Visuals</b> in data science! You generate your broad, massive Histogram or KDE probability chart, and then immediately run `rugplot()` to anchor it with absolute truth explicitly showcasing density and exposing massive outliers stretching away from the central cluster.
                </p>

                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4 border-t border-slate-200 dark:border-slate-700 pt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-3 shrink-0"></span> Keep your UI extremely clean by utilizing `height=0.05` to flatten the rug out of the way.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-amber-500 mr-3 shrink-0"></span> Use Transparency! Pass `alpha=0.5`. If 20 separate pieces of data fall on top of each other, opacity will make them visually glow/darken, proving tight clustering.</li>
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
                { m: "Running a lone Rugplot in production.", fx: "If you just hand a dashboard to a CEO consisting of pure vertical ticks covering an X-axis, they will interpret it as completely useless. It is a support plot only." },
                { m: "Applying to 100,000+ row datasets.", fx: "If you try painting a million physical lines on a single small axis track, it will just draw a completely solid black block overlapping everything. Rugplots fail cleanly when data exceeds 500-1000 pieces." },
                { m: "Ignoring default overlap scaling.", fx: "If your rug defaults to climbing 25% of the way up the screen, it will block visual information. Manually smash it into the floor formatting." }
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

export default SbRugplot;
