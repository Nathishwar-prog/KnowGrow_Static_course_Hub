import React, { useState } from 'react';
import {
  Info, Code, Terminal, Layers, Play,
  Activity, Target, Crosshair, MapPin,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, TrendingUp,
  Focus, Eye, ShieldCheck, LineChart,
  SplitSquareHorizontal, Calculator, DraftingCompass
} from 'lucide-react';

const SbRegplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'styling' | 'advanced' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_reg':
        outLines = [
          'Loading dataset "tips"...',
          'Detecting lightweight Axis-level plot rendering...',
          'Mapping dependent & independent continuous variables...',
          'Computing basic Ordinary Least Squares (OLS) linear math...',
          'Generating raw scatter nodes...',
          'Drawing best-fit regression line directly onto Axis...',
          'Mapping 95% confidence shaded area...',
          'Statistical Axis-level plotting complete.'
        ];
        break;
      case 'style_reg':
        outLines = [
          'Accessing deep matplotlib customization dictionaries...',
          '--> Passing: scatter_kws={"color": "blue", "alpha": 0.5}...',
          '--> Passing: line_kws={"color": "red"}...',
          'Applying custom palette overrides specifically to layers...',
          'Detecting parameters: ci=None (Stripping shaded bands)...',
          'Detecting parameters: scatter=False (Hiding raw nodes entirely)...',
          'Clean, highly customized UI chart produced.'
        ];
        break;
      case 'math_reg':
        outLines = [
          'Modifying regression engine solving algorithms...',
          '--> order=2: Upgrading from Linear to Polynomial (curves) equation...',
          '--> robust=True: Applying mathematical down-weighting to extreme outliers...',
          '--> logistic=True: Switching to Logistic Probability models for Binary (0/1) Outcomes...',
          'Computing advanced mathematical fits...',
          'Complex visual relations successfully modeled.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Simulating custom DataFrame: StudyHours vs Score...',
          'Establishing Matplotlib subplots grid...',
          'Injecting regplot() directly into targeted grid location...',
          'Extracting core correlation: Positive trajectory...',
          'Analysis isolated successfully without spawning large Figure-level grids.',
          'Ready for dashboard aggregation.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/30 rounded-3xl mb-8 shadow-sm border border-blue-200 dark:border-blue-800/50">
          <Crosshair className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-bold mb-6 border border-blue-500/20 tracking-[0.25em] uppercase">
          Axis-Level Precision Math
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">Regplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.regplot() — The lightweight, hyper-flexible brother to lmplot(). It draws essential scatter nodes and accurate regression lines directly onto a single, deeply customizable axis.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is regplot()?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-blue-500 pl-6">
              "Visually, it looks almost identical to an lmplot() (a scatter plot with a regression line running through it). The critical difference is that regplot is an <b>Axis-level</b> function, making it lightweight and easy to embed into complex matplotlib subplots."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-blue-500" />
                Why Use regplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Analyze Correlation", "Quick Trend Lines", "Embed into Subplots", "Extremely Customizable"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-blue-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Eye className="w-8 h-8 text-blue-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Intelligence</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Target className="w-5 h-5 text-fuchsia-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>The Points</b> = Raw scatter coordinates.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <TrendingUp className="w-5 h-5 text-emerald-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>The Line</b> = Mathematically fitted correlation trend.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Layers className="w-5 h-5 text-purple-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Shaded Area</b> = The exact Confidence Interval (uncertainty).</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-blue-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-sky-400 font-bold">regplot</span>(x=<span className="text-amber-300">None</span>, y=<span className="text-amber-300">None</span>, data=<span className="text-amber-300">None</span>)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-3xl mr-6 border border-blue-200 dark:border-blue-800">
              <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Axis Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.regplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Regression', icon: LineChart },
              { id: 'styling', label: 'Advanced Styling', icon: DraftingCompass },
              { id: 'advanced', label: 'Complex Math Fits', icon: Calculator },
              { id: 'real_world', label: 'regplot vs lmplot', icon: SplitSquareHorizontal }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30'
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
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-600 dark:text-blue-400">
                    <LineChart className="w-6 h-6 mr-4" />
                    Step 1-3: Axis-Level Setup
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Just pass two numerical arrays. Seaborn immediately plots the scatter nodes and calculates the standard linear trend line exactly where you tell it to display.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_reg')} className="absolute bottom-6 right-6 p-4 bg-blue-600 text-white rounded-2xl shadow-xl hover:bg-blue-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Quick Regression View</span><br />
                        sns.<span className="text-sky-400 font-bold tracking-widest">regplot</span>(<br />
                        &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>,<br />
                        &nbsp;&nbsp;y=<span className="text-amber-300">"tip"</span>,<br />
                        &nbsp;&nbsp;data=df<br />
                        )<br />
                        plt.<span className="text-cyan-400">title</span>(<span className="text-amber-300">"Total Bill vs Tip"</span>)<br />
                        plt.<span className="text-cyan-400">show</span>()
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Styling Deep */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-sky-500">
                    <DraftingCompass className="w-6 h-6 mr-4" />
                    Deep Dictionary Customization
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Because `regplot` connects extremely deeply with matplotlib, you can pass explicit dictionaries (<code>scatter_kws</code> and <code>line_kws</code>) to color the points and lines entirely separately, or even hide elements entirely.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># Separate styles for points vs line</span><br />
                      sns.<span className="text-sky-400 font-bold tracking-widest">regplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>, y=<span className="text-amber-300">"tip"</span>, data=df,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">scatter_kws</span>=&#123;<span className="text-amber-300">"color"</span>: <span className="text-amber-300">"blue"</span>, <span className="text-amber-300">"alpha"</span>: <span className="text-emerald-300">0.5</span>&#125;,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">line_kws</span>=&#123;<span className="text-amber-300">"color"</span>: <span className="text-amber-300">"red"</span>&#125;<br />
                      )<br /><br />
                      <span className="text-slate-500"># Totally disable scattered nodes</span><br />
                      sns.<span className="text-sky-400">regplot</span>(..., <span className="text-cyan-400 font-bold underline">scatter</span>=<span className="text-purple-400">False</span>)<br /><br />
                      <span className="text-slate-500"># Remove Confidence Interval shading (Cleaner UI)</span><br />
                      sns.<span className="text-sky-400">regplot</span>(..., <span className="text-cyan-400 font-bold underline">ci</span>=<span className="text-purple-400">None</span>)
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('style_reg')} className="px-10 py-5 bg-sky-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-sky-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Apply Deep Styles</button>
                  </div>
                </div>
              )}

              {/* Tab: Advanced Modifiers */}
              {activeTab === 'advanced' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-teal-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Calculator className="w-6 h-6 mr-4" />
                    Complex Mathematical Fits (🔥)
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Regplot is far more than just straight lines. You can instruct the engine to build Logistic Probability models, bypass extreme outliers, or force curves onto non-linear data distributions.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># 1. Fits curved (parabolic) relationships</span><br />
                      sns.<span className="text-sky-400 font-bold">regplot</span>(..., <span className="text-cyan-400 font-bold underline">order</span>=<span className="text-emerald-300">2</span>)<br /><br />
                      <span className="text-slate-500"># 2. Down-weights heavy extreme outliers</span><br />
                      sns.<span className="text-sky-400 font-bold">regplot</span>(..., <span className="text-cyan-400 font-bold underline">robust</span>=<span className="text-purple-400">True</span>)<br /><br />
                      <span className="text-slate-500"># 3. Fits Binary (0/1) logic thresholds</span><br />
                      sns.<span className="text-sky-400 font-bold">regplot</span>(x=<span className="text-amber-300">"total_bill"</span>, y=<span className="text-amber-300">"smoker"</span>, <span className="text-cyan-400 font-bold underline">logistic</span>=<span className="text-purple-400">True</span>)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('math_reg')} className="w-full py-5 bg-teal-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-teal-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Run Algorithm Variants</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-indigo-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <SplitSquareHorizontal className="w-6 h-6 mr-4" />
                    Real-World Analytics & VS
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Insights */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Best Use Cases 📈</h4>
                      <div className="text-[11px] grid grid-cols-1 gap-1.5 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        <p>📈 Marketing vs Exact Sales</p>
                        <p>📚 Study Hours vs Test Scope</p>
                        <p>💰 Price vs Elastic Demand</p>
                      </div>
                    </div>

                    {/* regplot vs lmplot */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">reg vs lmplot</h4>
                      <div className="text-[10px] grid grid-cols-3 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium bg-transparent">
                        <b className="text-slate-500">Feature</b> <b className="text-blue-500 dark:text-blue-400">Reg</b> <b className="text-slate-800 dark:text-slate-200">Lm</b>
                        <span>Level</span> <span>Axis</span> <span>Figure</span>
                        <span>Flexibility</span> <span>High</span> <span>Medium</span>
                        <span>Faceting</span> <span>❌ None</span> <span>✅ Yes</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Embedding in rigid custom grids</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-amber-300">"StudyHours"</span>: np.random.<span className="text-cyan-400">normal</span>(<span className="text-emerald-300">5</span>, <span className="text-emerald-300">2</span>, <span className="text-emerald-300">100</span>),<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Score"</span>: np.random.<span className="text-cyan-400">normal</span>(<span className="text-emerald-300">70</span>, <span className="text-emerald-300">10</span>, <span className="text-emerald-300">100</span>)<br />
                      &#125;)<br /><br />
                      sns.<span className="text-sky-400 font-bold">regplot</span>(x=<span className="text-amber-300">"StudyHours"</span>, y=<span className="text-amber-300">"Score"</span>, data=data)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-indigo-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-indigo-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Evaluate Model Efficiency</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            {/* Terminal Output Console */}
            <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] group-hover/terminal:bg-blue-500/10 transition-all duration-1000"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                  <div className="flex items-center">
                    <Terminal className="w-6 h-6 mr-4 text-blue-500" />
                    <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                      AXIS_MATH_KERNEL
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                </div>

                <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                      <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Ready For Assignment</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-blue-500/50 mr-4 font-black select-none text-[8px] mt-1">SYS_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('complete') || line.includes('successfully') || line.includes('Ready for dashboard') ? 'text-emerald-400 font-bold' :
                              line.includes('Computing basic') || line.includes('Modifying') || line.includes('Establishing') ? 'text-indigo-400' :
                                line.includes('scatter_kws=') || line.includes('logistic=') || line.includes('robust=') || line.includes('order=') || line.includes('line_kws=') ? 'text-cyan-300 font-bold' :
                                  line.includes('Axis-level') || line.includes('Polynomial') || line.includes('Logistic') ? 'text-blue-400 font-bold' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution Halted</span>
                        <button onClick={resetConsole} className="text-[9px] text-blue-500 hover:text-blue-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-blue-500/20 pb-0.5">PURGE</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <ShieldCheck className="w-8 h-8 text-blue-500 mr-4" />
              Expert Workflow <span className="text-xs ml-3 px-2 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-blue-400 mb-2">🚀 When to Use</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Strictly use <code>regplot()</code> when you need an extremely quick relationship insight, OR when you need to perfectly inject the regression chart inside an existing, complex matplotlib subplot arrangement. <b>Use lmplot</b> if you strictly need multiple subsets automatically generated via `col` / `hue`.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-blue-400 mb-2">🚀 Customization Mastery</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Since `regplot` relies on Matplotlib objects, you can easily control UI opacity with <code>scatter_kws=&#123;"alpha":0.5&#125;</code>.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-fuchsia-500 mr-3 shrink-0"></span> Default regressions assume lines are perfectly straight. Use <code>order=2</code> if the shape is curved.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span> Clean up noisy presentation dashboards by explicitly telling seaborn <code>ci=None</code>.</li>
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
                { m: "Assuming Causation blindly.", fx: "Just because the regression line draws an absolute positive correlation mapping Ice Cream Sales to Shark Attacks does not mean ice cream summons sharks! Correlation ≠ causation." },
                { m: "Forcing linear fits on non-linear data.", fx: "If your scatter forms a 'U' curve, a linear regression line drawn horizontally right through the middle is essentially a meaningless math error. Observe the plot first, then fix with order=2." },
                { m: "Ignoring brutal outliers.", fx: "A single extreme numerical value among a sequence of normal values will mathematically drag the entire regression line violently toward it, faking the trend. Stop this using robust=True." }
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

export default SbRegplot;
