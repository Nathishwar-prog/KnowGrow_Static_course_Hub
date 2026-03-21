import React, { useState } from 'react';
import {
  Info, Code, Terminal, Layers, Play,
  Activity, Target, BoxSelect, Maximize,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, TrendingUp,
  Focus, Eye, ShieldCheck, LineChart,
  SplitSquareHorizontal, Grid3X3, Layers3
} from 'lucide-react';

const SbRelplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'dimensions' | 'advanced' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_rel':
        outLines = [
          'Loading numerical dataset "tips"...',
          'Detecting high-level Relational Figure builder...',
          'No "kind" specified. Defaulting to kind="scatter"...',
          'Establishing blank Figure-Level Canvas...',
          'Mapping X="total_bill", Y="tip"...',
          'Basic Scatter Wrapper mapped seamlessly.'
        ];
        break;
      case 'dim_rel':
        outLines = [
          'Preparing Multi-Dimensional Array Processor...',
          '--> Dimension 3: Applying hue="sex" (Color Mapping)...',
          '--> Dimension 4: Applying size="size" (Radius Scaling)...',
          '--> Dimension 5: Applying style="smoker" (Geometric Mapping)...',
          'Integrating massive legend dictionary...',
          '5-Dimensional hyper-plot generated gracefully.'
        ];
        break;
      case 'adv_rel':
        outLines = [
          'Initializing Super-Power mode: Faceting...',
          'Detecting categorical split: col="time"...',
          'Dividing data array into "Lunch" and "Dinner" matrices...',
          'Spawning 2 separate physical charts perfectly aligned...',
          'Pasting all hue, size, and style dimensions into each sub-grid...',
          'Dashboard-style Multi-Grid interface online.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Compiling Corporate Operations DataFrame...',
          'X=Day (Continuous Track), Y=Sales (Numerical Volume)...',
          'Executing structural parameter: kind="line"...',
          'Wrapping base lineplot() inside Figure-Level relplot()...',
          'Applying categorical color separation: hue="Region"...',
          'Clean, executive line-tracking analysis successfully deployed.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-violet-100 dark:bg-violet-900/30 rounded-3xl mb-8 shadow-sm border border-violet-200 dark:border-violet-800/50">
          <Layers3 className="w-12 h-12 text-violet-600 dark:text-violet-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-full text-[10px] font-bold mb-6 border border-violet-500/20 tracking-[0.25em] uppercase">
          Multi-Dimensional Wrapper
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">Relplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.relplot() — The ultimate Figure-level wrapper that lets you build hyper-complex scatter and line plots boasting 5 simultaneous dimensions and massive automatic FacetGrid dashboards!
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-violet-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-violet-500 rounded-2xl shadow-lg shadow-violet-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is relplot()?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-violet-500 pl-6">
              "It is fundamentally a high-level <b>Figure wrapper function</b>. Under the hood, it simply calls <code>scatterplot()</code> or <code>lineplot()</code> based on your instructions, but wraps them in a massive engine designed specifically to easily manage 5+ dimensions at once."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-violet-500" />
                Why Use relplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Map Huge Dimensions (5+)", "Auto-Split Faceted Plots", "Build Dashboards Fast", "Swap Plot Logic Instantly"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-violet-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-violet-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Eye className="w-8 h-8 text-violet-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Intelligence</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Target className="w-5 h-5 text-fuchsia-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>The Engine</b> = Powered entirely by `scatterplot()` or `lineplot()`.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Maximize className="w-5 h-5 text-cyan-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>The Core Draw</b> = It enables extreme multi-dimensional analysis inside a single command line.</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-violet-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-violet-400 font-bold">relplot</span>(x=<span className="text-amber-300">None</span>, y=<span className="text-amber-300">None</span>, data=<span className="text-amber-300">None</span>, <span className="text-cyan-400 underline">kind</span>=<span className="text-amber-300">"scatter"</span>)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-violet-100 dark:bg-violet-900/40 rounded-3xl mr-6 border border-violet-200 dark:border-violet-800">
              <Terminal className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Relation Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.relplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Wrappers', icon: BoxSelect },
              { id: 'dimensions', label: 'Multi-Dimensions', icon: Layers3 },
              { id: 'advanced', label: 'Faceting Superpower', icon: Grid3X3 },
              { id: 'real_world', label: 'relplot vs Scatter', icon: SplitSquareHorizontal }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/30'
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
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-violet-600 dark:text-violet-400">
                    <BoxSelect className="w-6 h-6 mr-4" />
                    Step 1-3: Base Wrappers
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      By default, `relplot` directly calls the Scatterplot engine. If you explicitly pass <code>kind="line"</code>, the underlying engine instantly switches out, but you retain all the massive multi-dimensional layout support.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_rel')} className="absolute bottom-6 right-6 p-4 bg-violet-600 text-white rounded-2xl shadow-xl hover:bg-violet-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Defauts strictly to Scatterplot</span><br />
                        sns.<span className="text-violet-400 font-bold tracking-widest">relplot</span>(x=<span className="text-amber-300">"total_bill"</span>, y=<span className="text-amber-300">"tip"</span>, data=df)<br /><br />
                        <span className="text-slate-500 italic"># Wraps around Lineplot instead</span><br />
                        sns.<span className="text-violet-400 font-bold tracking-widest">relplot</span>(x=<span className="text-amber-300">"size"</span>, y=<span className="text-amber-300">"total_bill"</span>, data=df, <span className="text-cyan-400 underline">kind</span>=<span className="text-amber-300">"line"</span>)
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Dimensional Power */}
              {activeTab === 'dimensions' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-cyan-500">
                    <Layers3 className="w-6 h-6 mr-4" />
                    5-Dimensional Injectors
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Because `relplot` is built as an overarching engine, it allows you to inject <b>Color, Geometry, and Scale</b> simultaneously, giving you a plot that tracks 5 completely distinct variables entirely by itself!
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># Packing 5 total variables into a single flat chart</span><br />
                      sns.<span className="text-violet-400 font-bold tracking-widest">relplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>, <span className="text-slate-500"># Dimension 1</span><br />
                      &nbsp;&nbsp;y=<span className="text-amber-300">"tip"</span>,        <span className="text-slate-500"># Dimension 2</span><br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">hue</span>=<span className="text-amber-300">"sex"</span>,    <span className="text-slate-500"># Dimension 3 (Color)</span><br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">size</span>=<span className="text-amber-300">"size"</span>,  <span className="text-slate-500"># Dimension 4 (Radius)</span><br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">style</span>=<span className="text-amber-300">"smoker"</span>,<span className="text-slate-500"># Dimension 5 (Geometry)</span><br />
                      &nbsp;&nbsp;data=df<br />
                      )
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('dim_rel')} className="px-10 py-5 bg-cyan-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-cyan-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Map Deep Variables</button>
                  </div>
                </div>
              )}

              {/* Tab: Faceting */}
              {activeTab === 'advanced' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-pink-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Grid3X3 className="w-6 h-6 mr-4" />
                    Faceting Super-Power (🔥)
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Because `relplot` is a <b>Figure-Level</b> command, just adding the <code>col</code> variable will magically spawn an entirely new set of sub-charts cleanly laid out side-by-side, perfectly formatted.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Instantly spawns a beautiful multi-plot layout grid!</span><br />
                      sns.<span className="text-violet-400 font-bold">relplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>,<br />
                      &nbsp;&nbsp;y=<span className="text-amber-300">"tip"</span>,<br />
                      &nbsp;&nbsp;hue=<span className="text-amber-300">"sex"</span>,<br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">col</span>=<span className="text-amber-300">"time"</span>, <span className="text-slate-500"># Generates Lunch & Dinner plots!!</span><br />
                      &nbsp;&nbsp;data=df<br />
                      )
                    </pre>
                  </div>

                  <button onClick={() => runDemo('adv_rel')} className="w-full py-5 bg-pink-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-pink-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Spawn Multi-Grid Dash</button>
                </div>
              )}

              {/* Tab: Real World & VS */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <SplitSquareHorizontal className="w-6 h-6 mr-4" />
                    Real-World Analytics & VS
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Insights */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Key Insights 🎯</h4>
                      <div className="text-[11px] grid grid-cols-1 gap-1.5 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        <p>✔ Multi-variable combinations</p>
                        <p>✔ Flawless Facetgrid support</p>
                        <p>✔ Powers Dashboards instantly</p>
                      </div>
                    </div>

                    {/* relplot vs scatterplot */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">rel vs scatterplot</h4>
                      <div className="text-[10px] grid grid-cols-3 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium bg-transparent">
                        <b className="text-slate-500">Feature</b> <b className="text-violet-500 dark:text-violet-400">Rel</b> <b className="text-slate-800 dark:text-slate-200">Scatter</b>
                        <span>Level</span> <span>Figure</span> <span>Axis</span>
                        <span>Faceting</span> <span>✅ Yes</span> <span>❌ No</span>
                        <span>Complex</span> <span>High</span> <span>Low</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Regional Line Dashboard</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Day"</span>: [<span className="text-amber-300">1</span>, <span className="text-amber-300">2</span>, <span className="text-amber-300">3</span>, <span className="text-amber-300">4</span>, <span className="text-amber-300">5</span>],<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Sales"</span>: [<span className="text-emerald-300">200</span>, <span className="text-emerald-300">250</span>, <span className="text-emerald-300">300</span>, <span className="text-emerald-300">280</span>, <span className="text-emerald-300">350</span>],<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Region"</span>: [<span className="text-amber-300">"North"</span>, <span className="text-amber-300">"South"</span>, <span className="text-amber-300">"North"</span>, <span className="text-amber-300">"South"</span>, <span className="text-amber-300">"North"</span>]<br />
                      &#125;)<br /><br />
                      sns.<span className="text-violet-400 font-bold">relplot</span>(x=<span className="text-amber-300">"Day"</span>, y=<span className="text-amber-300">"Sales"</span>, hue=<span className="text-amber-300">"Region"</span>, <span className="text-cyan-400">kind</span>=<span className="text-amber-300">"line"</span>, data=data)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute LineWrapper Engine</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            {/* Terminal Output Console */}
            <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
              <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px] group-hover/terminal:bg-violet-500/10 transition-all duration-1000"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                  <div className="flex items-center">
                    <Terminal className="w-6 h-6 mr-4 text-violet-500" />
                    <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                      RELATIONAL_CORE
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                  </div>
                </div>

                <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                      <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Waiting High-Level Wrap</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-violet-500/50 mr-4 font-black select-none text-[8px] mt-1">SYS_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('mapped seamlessly') || line.includes('successfully deployed') || line.includes('generated gracefully') ? 'text-emerald-400 font-bold' :
                              line.includes('Detecting high-level') || line.includes('Preparing') || line.includes('Detecting categorical') || line.includes('Dashboard') ? 'text-violet-400' :
                                line.includes('hue=') || line.includes('size=') || line.includes('style=') || line.includes('col=') || line.includes('kind=') ? 'text-cyan-300 font-bold' :
                                  line.includes('Dimension ') || line.includes('Spawning ') ? 'text-indigo-400 font-bold' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Wrapper Execution End</span>
                        <button onClick={resetConsole} className="text-[9px] text-violet-500 hover:text-violet-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-violet-500/20 pb-0.5">PURGE</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-violet-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-violet-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <ShieldCheck className="w-8 h-8 text-violet-500 mr-4" />
              Expert Workflow <span className="text-xs ml-3 px-2 py-1 bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-violet-400 mb-2">🚀 When to Use vs Avoid</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Strictly use <code>relplot()</code> when you are exploring very deep multi-dimensional data, or actively exploiting the <code>col</code> variable to spin up massive dashboard FacetGrids. <b>Avoid heavily</b> if you literally just need a simple 2-variable chart—use the much lighter <code>scatterplot()</code> or <code>lineplot()</code> instead.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-violet-400 mb-2">🚀 Aesthetics Check</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Keep visuals readable limit logic maps to a **Maximum of 3 Dimensions** (e.g. `x`, `y`, `hue`).</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-pink-500 mr-3 shrink-0"></span> Never Facet 50 charts. Stick to a Max logic of strictly <b>4-6 Facet Grid subplots</b>.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-violet-500 mr-3 shrink-0"></span> Keep these heavily complex plots clean by forcing <code>sns.set_theme(style="whitegrid")</code> at the top of your file.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-800 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-2 h-full bg-orange-500"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-4 text-orange-500" />
              Common Mistakes
            </h2>

            <div className="space-y-4 flex-1">
              {[
                { m: "Overloading 5+ absolute dimensions.", fx: "If you assign a unique column to x, y, hue, size, style, AND col... your graph becomes completely incomprehensible. Restrain yourself and stop at 3 or 4." },
                { m: "Using relplot for a simple 1D scatter.", fx: "relplot creates a heavy Figure-Level environment with outside legends. If you just need X/Y correlation, the native scatterplot() is vastly faster and easier to embed into existing axes." },
                { m: "Ignoring or breaking the legend.", fx: "When you pack 4 dimensions into a relplot, removing or breaking the auto-generated side legend means nobody looking at your dashboard has any idea what your dots/lines mean." }
              ].map((mistake, i) => (
                <div key={i} className="flex items-start p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold mr-4 shrink-0 text-xs">X</div>
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

export default SbRelplot;
