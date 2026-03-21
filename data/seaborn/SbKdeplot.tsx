import React, { useState } from 'react';
import {
  Info, Code, Terminal, Layers, Play,
  Activity, Target, Waves, Sliders,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, TrendingUp,
  Focus, Eye, ShieldCheck, LineChart,
  Network
} from 'lucide-react';

const SbKdeplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'styling' | 'advanced' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_kde':
        outLines = [
          'Loading continuous numerical dataset "tips"...',
          'Extracting 1D variable array: x="total_bill"...',
          'Initializing Kernel Density Estimator (KDE)...',
          'Applying continuous probability density calculations...',
          'Detecting stylistic engine: fill=True...',
          'Rendering smooth, continuous density curve.'
        ];
        break;
      case 'smooth_kde':
        outLines = [
          'Detecting category subsets via hue="sex"...',
          'Splitting math operations across array divisions...',
          'Modifying Gaussian Kernel smoothness coefficient...',
          '--> bw_adjust=0.5: Tracing tighter variations in dataset...',
          '--> Default: Tracing high-level general shapes...',
          'Multivariate layered Density mapping successful.'
        ];
        break;
      case 'advanced_kde':
        outLines = [
          'Initializing Bivariate Density Estimator...',
          'Accepting dual arrays: x="total_bill", y="tip"...',
          'Computing 2D topological mapping patterns...',
          'Generating gradient-filled density regions...',
          'Calculating precise iso-proportion contour rings (levels=5)...',
          'Topological Contour mapping rendered successfully.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Simulating continuous random float metrics...',
          'Array Constraints: Mean=$50,000, StdDev=$10,000...',
          'Bypass discrete Histograms -> Direct to Density Mapping...',
          'Drawing exact continuous probabilities mapping (Area = 1.0)...',
          'Calculating curve peaks (mathematical Modes)...',
          'Continuous distribution generated for ML Analysis.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-3xl mb-8 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <Waves className="w-12 h-12 text-teal-600 dark:text-teal-400 -rotate-12" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-[10px] font-bold mb-6 border border-teal-500/20 tracking-[0.25em] uppercase">
          Continuous Probability Wave
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Kdeplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.kdeplot() — Generate smooth mathematical curves that map the continuous probability density of data, entirely bypassing blocky histograms.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-teal-500 rounded-2xl shadow-lg shadow-teal-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is a KDE Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-teal-500 pl-6">
              "KDE stands for <b>Kernel Density Estimation</b>. Unlike a Histogram with discrete bars, a KDE plot generates a continuous, mathematically smoothed curve of your distribution."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-teal-500" />
                Why Use kdeplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Understand precise shape", "Compare multi-groups", "Avoid binning issues", "Visualize probabilities"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-teal-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Eye className="w-8 h-8 text-teal-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Reality</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Waves className="w-5 h-5 text-blue-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Smooth curves</b> give a much cleaner macroscopic view than blocky histograms.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <TrendingUp className="w-5 h-5 text-emerald-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300">Total area measured under the generated curve always <b>equals 1</b> (100% Probability).</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-teal-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-teal-400 font-bold">kdeplot</span>(data=<span className="text-amber-300">None</span>, x=<span className="text-amber-300">None</span>)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-teal-100 dark:bg-teal-900/40 rounded-3xl mr-6 border border-teal-200 dark:border-teal-800">
              <Terminal className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Estimator Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.kdeplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Curve & Fill', icon: LineChart },
              { id: 'styling', label: 'Groups & Smoothness', icon: Sliders },
              { id: 'advanced', label: '2D & Contours', icon: Network },
              { id: 'real_world', label: 'Math vs Histograms', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/30'
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
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-teal-600 dark:text-teal-400">
                    <LineChart className="w-6 h-6 mr-4" />
                    Step 1-3: Basic KDE Plot
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Providing a single continuous variable traces a thin, readable mathematical distribution curve. To make the visualization far more intuitive, simply pass <code>fill=True</code>.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_kde')} className="absolute bottom-6 right-6 p-4 bg-teal-600 text-white rounded-2xl shadow-xl hover:bg-teal-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-blue-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Basic Line Estimate</span><br />
                        sns.<span className="text-teal-400 font-bold tracking-widest">kdeplot</span>(x=<span className="text-amber-300">"total_bill"</span>, data=df)<br /><br />
                        <span className="text-slate-500 italic"># Filled KDE (UX Pro-Tip 🔥)</span><br />
                        sns.<span className="text-teal-400 font-bold tracking-widest">kdeplot</span>(x=<span className="text-amber-300">"total_bill"</span>, data=df, <span className="text-cyan-400 font-bold underline">fill</span>=<span className="text-amber-300">True</span>)<br /><br />
                        plt.<span className="text-blue-400">title</span>(<span className="text-amber-300">"KDE of Total Bill"</span>)<br />
                        plt.<span className="text-blue-400">show</span>()
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <Sliders className="w-6 h-6 mr-4" />
                    Multiple Distros & Bandwidth
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Because KDE curves are transparent, plotting multiple datasets via <code>hue</code> is extremely clean. You can also adjust how exact or wavy the curve gets using <code>bw_adjust</code>.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># Hue Comparison</span><br />
                      sns.<span className="text-teal-400">kdeplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>,<br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">hue</span>=<span className="text-amber-300">"sex"</span>, <span className="text-slate-500"># Compares Categories</span><br />
                      &nbsp;&nbsp;data=df, fill=<span className="text-amber-300">True</span><br />
                      )<br /><br />
                      <span className="text-slate-500"># Smoothness Controls</span><br />
                      <span className="text-slate-500"># smaller = detailed | larger = smoother</span><br />
                      sns.<span className="text-teal-400">kdeplot</span>(..., <span className="text-purple-400 font-bold underline">bw_adjust</span>=<span className="text-emerald-300">0.5</span>)
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('smooth_kde')} className="px-10 py-5 bg-blue-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-blue-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Simulate Precision</button>
                  </div>
                </div>
              )}

              {/* Tab: Advanced 2D */}
              {activeTab === 'advanced' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-indigo-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Network className="w-6 h-6 mr-4" />
                    2D KDE & Contours (🔥)
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Instead of a 2D Scatterplot getting cluttered with thousands of dots, you can pass both <b>X</b> AND <b>Y</b> into a KDE to output density contour rings mapping concentration hotspots!
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Advanced 2D Density Regions</span><br />
                      sns.<span className="text-teal-400 font-bold">kdeplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>,<br />
                      &nbsp;&nbsp;y=<span className="text-amber-300">"tip"</span>,<br />
                      &nbsp;&nbsp;data=df,<br />
                      &nbsp;&nbsp;fill=<span className="text-amber-300">True</span><br />
                      )<br /><br />
                      <span className="text-slate-500"># Distinct Contour Topologies</span><br />
                      sns.<span className="text-teal-400 font-bold">kdeplot</span>(..., <span className="text-purple-400 font-bold underline">levels</span>=<span className="text-emerald-300">5</span>)  <span className="text-slate-500"># Iso-lines</span>
                    </pre>
                  </div>

                  <button onClick={() => runDemo('advanced_kde')} className="w-full py-5 bg-indigo-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-indigo-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Render Topography</button>
                </div>
              )}

              {/* Tab: Real World & Comparisons */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <Table className="w-6 h-6 mr-4" />
                    Real-World Analytics & VS
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Insights */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Key Insights</h4>
                      <div className="text-xs grid grid-cols-1 gap-1.5 text-slate-600 dark:text-slate-400 leading-relaxed">
                        <p>✔ Shows distribution precisely</p>
                        <p>✔ Area under curve = exactly <b>1.0</b></p>
                        <p>✔ Identifies <b>Peaks</b> (Modes) cleanly</p>
                      </div>
                    </div>

                    {/* KDE vs Hist */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Plot Showdown</h4>
                      <div className="text-[10px] grid grid-cols-4 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium">
                        <b className="text-slate-500">Feature</b> <b className="text-teal-500 dark:text-teal-400">KDE</b> <b className="text-slate-800 dark:text-slate-200">HIST</b> <b className="text-slate-800 dark:text-slate-200">ECDF</b>
                        <span>Smooth</span> <span>✅</span> <span>❌</span> <span>❌</span>
                        <span>Data</span> <span>Approx</span> <span>Med</span> <span>Exact</span>
                        <span>Read</span> <span>High</span> <span>Med</span> <span>Med</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Analytics: Salary Distributions 💰</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Salary"</span>: np.random.<span className="text-cyan-400">normal</span>(<span className="text-emerald-300">50000</span>, <span className="text-emerald-300">10000</span>, <span className="text-emerald-300">1000</span>)<br />
                      &#125;)<br /><br />
                      sns.<span className="text-teal-400 font-bold">kdeplot</span>(data[<span className="text-amber-300">"Salary"</span>], fill=<span className="text-amber-300">True</span>)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Calculate Normal Variance</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            {/* Terminal Output Console */}
            <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] group-hover/terminal:bg-teal-500/10 transition-all duration-1000"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                  <div className="flex items-center">
                    <Terminal className="w-6 h-6 mr-4 text-teal-500" />
                    <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                      MATH_KERNEL_SYS
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                  </div>
                </div>

                <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                      <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Calculus</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-teal-500/50 mr-4 font-black select-none text-[8px] mt-1">SYS_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('successful') || line.includes('rendered') ? 'text-emerald-400 font-bold' :
                              line.includes('Modifying') || line.includes('Computing') || line.includes('Calculating precise') ? 'text-blue-400' :
                                line.includes('fill=') || line.includes('bw_adjust=') || line.includes('levels=') ? 'text-cyan-300 font-bold' :
                                  line.includes('Bivariate') || line.includes('Gaussian Kernel') ? 'text-indigo-400' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Module End</span>
                        <button onClick={resetConsole} className="text-[9px] text-teal-500 hover:text-teal-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-teal-500/20 pb-0.5">PURGE</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-teal-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <ShieldCheck className="w-8 h-8 text-teal-500 mr-4" />
              Expert Workflow <span className="text-xs ml-3 px-2 py-1 bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-teal-400 mb-2">🚀 When to Use vs Avoid</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Use KDE when you specifically want smooth distribution insight or are comparing multiple groups neatly. <b>Avoid</b> KDE when your dataset is very small, as the curve algorithm mathematically generates "tails" that never existed in the data. Always use <code>histplot</code> directly for microscopic data sizes.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-teal-400 mb-2">🚀 Best Practice Enhancements</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Combine with Histogram! <code>sns.histplot(..., kde=True)</code></li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span> Use <code>fill=True</code> to massively boost visual UX.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-teal-500 mr-3 shrink-0"></span> Use <b>2D KDE</b> patterns as a modern, clean equivalent to thousands of scatterplot points.</li>
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
                { m: "Using KDE for small datasets.", fx: "Extremely misleading. KDE guarantees a broad curve distribution algorithmically even if your data only has 5 points." },
                { m: "Over-smoothing via Bandwidth adjustments.", fx: "If you crank the bandwidth parameter up too far, the line becomes flat art and hides actual dataset gaps/variance entirely." },
                { m: "Misinterpreting mathematical peaks.", fx: "Unlike a histogram where height = exact record counts, the peaks on a KDE relate strictly to density probabilities (y-axis limits)." }
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

export default SbKdeplot;
