import React, { useState } from 'react';
import {
  Info, Code, Terminal, Layers, Play,
  Activity, Target, LayoutPanelTop, FileSearch,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, TrendingUp,
  Focus, Eye, ShieldCheck, LineChart,
  Hexagon, Maximize2
} from 'lucide-react';

const SbJointplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'kinds' | 'styling' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_joint':
        outLines = [
          'Loading dataset "tips"...',
          'Extracting 2-dimensional continuous variables (x, y)...',
          'Initializing Seaborn JointGrid architecture...',
          'Rendering central scatter plot map...',
          'Attaching marginal distribution histogram to top axis...',
          'Attaching marginal distribution histogram to right axis...',
          'Joint relationship mapping rendered successfully.'
        ];
        break;
      case 'kind_joint':
        outLines = [
          'Parsing specific visual "kind" parameter...',
          '--> kind="hex": Binning large data into geometric hexagons...',
          '--> kind="kde": Running 2D kernel density estimations...',
          '--> kind="reg": Calculating Ordinary Least Squares (OLS) regression...',
          'Drawing linear trend lines and smooth density contours...',
          'Multi-type relational grid populated successfully.'
        ];
        break;
      case 'style_joint':
        outLines = [
          'Detecting stylistic engine parameters...',
          'Updating aesthetic palette to color="purple"...',
          'Resizing entire Figure canvas to height=6...',
          'Adjusting scatter dot transparency via alpha=0.5...',
          'Recalculating Marginal and Central plot ratios...',
          'Styled JointGrid successfully drawn.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Initializing analytics array for StudyHours and Exams...',
          'Generating randomized continuous distribution models...',
          'Mapping x="StudyHours" against y="Score"...',
          'Applying kind="reg" to detect learning performance trends...',
          'Measuring density spikes in study vs results matrices...',
          'Data successfully pre-processed for ML Model.'
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl mb-8 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <LayoutPanelTop className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-bold mb-6 border border-indigo-500/20 tracking-[0.25em] uppercase">
          Dual Correlation Grid
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Jointplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.jointplot() — A high-impact visualization used in real-world analytics to show relationship matrices and individual distributions together in one unified design.
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
              <h2 className="text-3xl font-bold">1️⃣ What is a Joint Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
              "It combines a <b>scatter plot</b> in the center (for relationship) and <b>distribution plots</b> on the top and right margins (for individual frequency)."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-indigo-500" />
                Why Use jointplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Analyze Relationships", "Correlation + Distro", "Detect Clusters", "Perform EDA for ML"].map((stat, i) => (
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
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Structure</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Target className="w-5 h-5 text-purple-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Center</b> = Relationship (X vs Y)</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <LayoutPanelTop className="w-5 h-5 text-emerald-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Sides / Margins</b> = Distributions (Hisograms/KDE)</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-indigo-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-cyan-400 font-bold">jointplot</span>(x=<span className="text-amber-300">None</span>, y=<span className="text-amber-300">None</span>, data=<span className="text-amber-300">None</span>)
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Joint Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.jointplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Graph', icon: Target },
              { id: 'kinds', label: 'Engine Types (hex/kde)', icon: Hexagon },
              { id: 'styling', label: 'Scaling & Customization', icon: Maximize2 },
              { id: 'real_world', label: 'Real World Analytics', icon: LineChart }
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
                    <Target className="w-6 h-6 mr-4" />
                    Step 1-3: Basic Joint Plot
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      By default, `jointplot` outputs a beautiful <b>Scatter Plot</b> in the core grid, accompanied by pure <b>Histograms</b> representing frequency bounds along the X and Y edges.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_joint')} className="absolute bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-2xl shadow-xl hover:bg-indigo-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Default behavior (Scatter + Histogram)</span><br />
                        sns.<span className="text-indigo-400 font-bold tracking-widest">jointplot</span>(<br />
                        &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>,<br />
                        &nbsp;&nbsp;y=<span className="text-amber-300">"tip"</span>,<br />
                        &nbsp;&nbsp;data=df<br />
                        )<br />
                        plt.<span className="text-cyan-400">show</span>()
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Kinds */}
              {activeTab === 'kinds' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-purple-500">
                    <Hexagon className="w-6 h-6 mr-4" />
                    Different Plot Types (kind)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Swap out the inner relational plotting engine using <code>kind</code>. Use <b>kde</b> for smooth continuous density, <b>hex</b> for giant data clusters, and <b>reg</b> to automatically run linear regressions.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># 1. Smooth Density View</span><br />
                      sns.<span className="text-cyan-400">jointplot</span>(..., <span className="text-purple-400 font-bold underline">kind</span>=<span className="text-amber-300">"kde"</span>)<br /><br />
                      <span className="text-slate-500"># 2. Hex Plot (Best avoiding overlap in Large Data 🔥)</span><br />
                      sns.<span className="text-cyan-400">jointplot</span>(..., <span className="text-purple-400 font-bold underline">kind</span>=<span className="text-amber-300">"hex"</span>)<br /><br />
                      <span className="text-slate-500"># 3. Regression Plot (Adds best-fit line)</span><br />
                      sns.<span className="text-cyan-400">jointplot</span>(..., <span className="text-purple-400 font-bold underline">kind</span>=<span className="text-amber-300">"reg"</span>)
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('kind_joint')} className="px-10 py-5 bg-purple-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-purple-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Map Inner Engine</button>
                  </div>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-pink-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Maximize2 className="w-6 h-6 mr-4" />
                    Styling, Scale & Height
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Customize the global square height, inject a uniform color palette, or manually pass alpha limits to solve scatter overlap problems.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Resize layout & inject brand colors</span><br />
                      sns.<span className="text-cyan-400 font-bold">jointplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>, y=<span className="text-amber-300">"tip"</span>, data=df,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">color</span>=<span className="text-amber-300">"purple"</span>,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">height</span>=<span className="text-emerald-300">6</span>,<br />
                      &nbsp;&nbsp;<span className="text-purple-400">alpha</span>=<span className="text-emerald-300">0.5</span>  <span className="text-slate-500 italic"># Translucent dots</span><br />
                      )<br /><br />
                      <span className="text-slate-500"># Scale X-axis exponentially to tame crazy outliers</span><br />
                      plt.<span className="text-cyan-400 font-bold">xscale</span>(<span className="text-amber-300">"log"</span>)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('style_joint')} className="w-full py-5 bg-pink-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-pink-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Styling Build</button>
                </div>
              )}

              {/* Tab: Real World & Comparisons */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <LineChart className="w-6 h-6 mr-4" />
                    Real-World Analytics & VS
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Insights */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Summary</h4>
                      <div className="text-xs grid grid-cols-1 gap-1 text-slate-600 dark:text-slate-400">
                        <p><b>Purpose:</b> Relationship + Dist</p>
                        <p><b>Types:</b> scatter, kde, hex, reg</p>
                        <p><b>Use Case:</b> EDA</p>
                      </div>
                    </div>

                    {/* jointplot vs displot */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Vs Scatterplot</h4>
                      <div className="text-[11px] grid grid-cols-3 gap-2 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2">
                        <b className="text-slate-500">Feature</b> <b className="text-slate-800 dark:text-slate-200">Joint</b> <b className="text-slate-800 dark:text-slate-200">Scatter</b>
                        <span>Dist</span> <span>✅</span> <span>❌</span>
                        <span>Insight</span> <span>High</span> <span>Med</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Analytics: Study Hours vs Score 📚</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-amber-300">"StudyHours"</span>: np.random.<span className="text-cyan-400">normal</span>(<span className="text-emerald-300">5</span>, <span className="text-emerald-300">2</span>, <span className="text-emerald-300">100</span>),<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Score"</span>: np.random.<span className="text-cyan-400">normal</span>(<span className="text-emerald-300">70</span>, <span className="text-emerald-300">10</span>, <span className="text-emerald-300">100</span>)<br />
                      &#125;)<br /><br />
                      <span className="text-slate-500"># Track correlations and single trends instantly</span><br />
                      sns.<span className="text-indigo-400 font-bold">jointplot</span>(x=<span className="text-amber-300">"StudyHours"</span>, y=<span className="text-amber-300">"Score"</span>, data=data, kind=<span className="text-amber-300">"reg"</span>)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Simulate Exam Results</button>
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
                      JOINT_MATRIX_VM
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
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Grid Config</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-indigo-500/50 mr-4 font-black select-none text-[8px] mt-1">GRID_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('successfully') || line.includes('pre-processed') ? 'text-emerald-400 font-bold' :
                              line.includes('Applying kind') || line.includes('hex') || line.includes('regression') ? 'text-purple-400' :
                                line.includes('color=') || line.includes('alpha=') || line.includes('height=') ? 'text-cyan-300 font-bold' :
                                  line.includes('Attaching marginal') || line.includes('Recalculating') ? 'text-indigo-400' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Runtime Exited</span>
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
                <h4 className="font-bold text-slate-800 dark:text-indigo-400 mb-2">🚀 Pre-ML Analysis Workflow</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Always use <code>jointplot()</code> before building ML models. Marginal plots give extra context you'll miss in simple scatters. If you need <i>multi-variable</i> comparison, switch to <code>pairplot()</code> instead.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-indigo-400 mb-2">🚀 Best Practice Enhancements</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-500 mr-3 shrink-0"></span> Append <code>kind="reg"</code> to instantly confirm linear relationships.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 shrink-0"></span> Use <code>kind="hex"</code> for big datasets to entirely avoid clutter.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Force <code>alpha=0.5</code> if sticking to traditional scatters with many points.</li>
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
                { m: "Using with Categorical Data.", fx: "Not suitable! jointplot belongs to strictly continuous numerical x and y analysis." },
                { m: "Overplotting in massive datasets.", fx: "Dots will stack entirely black. Switch to hex bins or alpha=0.1 so density drives color." },
                { m: "Ignoring the marginal distributions.", fx: "If you only look at the scatter center, you miss the skewness clues hiding in the outer histograms." }
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

export default SbJointplot;
