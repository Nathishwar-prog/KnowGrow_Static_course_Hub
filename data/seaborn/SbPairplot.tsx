import React, { useState } from 'react';
import {
  Info, Code, Terminal, Layers, Play,
  Activity, Target, Network, Grid2X2,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, TrendingUp,
  Focus, Eye, ShieldCheck, LineChart,
  Filter, SplitSquareHorizontal
} from 'lucide-react';

const SbPairplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'grouping' | 'advanced' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_pair':
        outLines = [
          'Loading dataset "iris"...',
          'Scanning DataFrame for all continuous numerical columns...',
          'Found 4 numerical features (sepal_length, sepal_width, petal_length, petal_width)...',
          'Constructing a 4x4 PairGrid matrix (16 total cells)...',
          'Populating Diagonal cells with univariable Histograms...',
          'Populating Off-Diagonal cells with precise bivariable Scatter Plots...',
          'Complete Dataset overview mapped.'
        ];
        break;
      case 'hue_pair':
        outLines = [
          'Detecting classification category: hue="species"...',
          'Splitting visual data into 3 distinct cluster classes...',
          'Applying color coding to all 16 matrix plots...',
          '--> Modifying Diagonal engine: diag_kind="kde"...',
          'Replacing blocky histograms with smooth density curves...',
          'Data Separation clearly revealed.'
        ];
        break;
      case 'filter_pair':
        outLines = [
          'Initializing Variable Filter...',
          'Slicing massive dataset constraints: vars=["sepal_length", "sepal_width"]...',
          'Shrinking N-dimensional matrix down to a tight 2x2 grid...',
          '--> Adjusting plot layout rules: height=2.5...',
          'Re-rendering focused topological relationship subsets...',
          'Performance Optimized. Redundant variables excluded.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Bootstrapping random analytics arrays...',
          'Simulating 100 rows of Employee Age, Salary, and Experience...',
          'Passing complete engineered DataFrame directly into sns.pairplot()...',
          'Mapping 3x3 (9 grid) relational matrix automatically...',
          'Detecting high correlation between Age and Experience clusters...',
          'Exploratory Data Analysis complete.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-3xl mb-8 shadow-sm border border-fuchsia-200 dark:border-fuchsia-800/50">
          <Grid2X2 className="w-12 h-12 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 rounded-full text-[10px] font-bold mb-6 border border-fuchsia-500/20 tracking-[0.25em] uppercase">
          Master Dataset Matrix
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-500">Pairplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.pairplot() — The most important high-level plot in Seaborn to instantly visualize every relationship, cluster, and outlier across an entire dataset simultaneously.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-fuchsia-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-fuchsia-500 rounded-2xl shadow-lg shadow-fuchsia-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is a Pair Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-fuchsia-500 pl-6">
              "It generates a matrix grid visualizing the relationships between <b>all numerical variables</b> in a dataset at once. Every pair gets a scatter plot, and every single variable gets a standalone distribution plot."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-fuchsia-500" />
                Why Use pairplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Explore entirely at once", "Detect dense clusters", "Observe correlations", "Spot extreme outliers"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-fuchsia-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-fuchsia-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Eye className="w-8 h-8 text-fuchsia-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Topography</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Network className="w-5 h-5 text-pink-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Each Off-Diagonal Cell</b> = Scatter plot relationship map between two distinct variables.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <TrendingUp className="w-5 h-5 text-orange-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>The Diagonal Axis</b> = Distribution shape (Histogram/KDE) of single isolated variables.</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-fuchsia-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-fuchsia-400 font-bold">pairplot</span>(data)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-fuchsia-100 dark:bg-fuchsia-900/40 rounded-3xl mr-6 border border-fuchsia-200 dark:border-fuchsia-800">
              <Terminal className="w-8 h-8 text-fuchsia-600 dark:text-fuchsia-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Matrix Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.pairplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Matrix', icon: Grid2X2 },
              { id: 'grouping', label: 'Hue & Diagonals', icon: Layers },
              { id: 'advanced', label: 'Feature Filters', icon: Filter },
              { id: 'real_world', label: 'EDA & Jointplot', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-900/30'
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
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-fuchsia-600 dark:text-fuchsia-400">
                    <Grid2X2 className="w-6 h-6 mr-4" />
                    Step 1-3: Basic Full Scatter
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      If you pass an entire raw Pandas DataFrame containing multiple numerical columns, Seaborn automatically drafts a massive matrix comparing every single numerical feature against every other feature.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_pair')} className="absolute bottom-6 right-6 p-4 bg-fuchsia-600 text-white rounded-2xl shadow-xl hover:bg-fuchsia-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"iris"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Magic functionality: Pass the whole dataframe</span><br />
                        sns.<span className="text-fuchsia-400 font-bold tracking-widest">pairplot</span>(df)<br /><br />
                        plt.<span className="text-cyan-400">show</span>()
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Grouping Context */}
              {activeTab === 'grouping' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-pink-500">
                    <Layers className="w-6 h-6 mr-4" />
                    Hue Clusters & Smooth KDE
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Adding a <code>hue</code> variable is arguably the most critical and impactful modification you can make. It reveals hidden classified groupings that otherwise just look like random noise.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># VERY IMPORTANT: Map categories directly via hue 🔥</span><br />
                      sns.<span className="text-fuchsia-400 font-bold tracking-widest">pairplot</span>(df, <span className="text-purple-400 font-bold underline">hue</span>=<span className="text-amber-300">"species"</span>)<br /><br />
                      <span className="text-slate-500"># Change diagonals from Histograms to Smooth Density</span><br />
                      sns.<span className="text-fuchsia-400 font-bold tracking-widest">pairplot</span>(df, <span className="text-purple-400 font-bold underline">diag_kind</span>=<span className="text-amber-300">"kde"</span>)
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('hue_pair')} className="px-10 py-5 bg-pink-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-pink-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Identify Core Clusters</button>
                  </div>
                </div>
              )}

              {/* Tab: Advanced Modifiers */}
              {activeTab === 'advanced' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-orange-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Filter className="w-6 h-6 mr-4" />
                    Focus Filters & Formatting
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Huge DataFrames containing 20+ numerical features will crash or freeze a pairplot. You MUST use the <code>vars</code> parameter to explicitly limit the computation to the 3-5 most important columns.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Limit plot to only extremely specific columns</span><br />
                      sns.<span className="text-fuchsia-400 font-bold">pairplot</span>(<br />
                      &nbsp;&nbsp;df, <br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">vars</span>=[<span className="text-amber-300">"sepal_length"</span>, <span className="text-amber-300">"sepal_width"</span>]<br />
                      )<br /><br />
                      <span className="text-slate-500"># Global Appearance Customization</span><br />
                      sns.<span className="text-fuchsia-400 font-bold">pairplot</span>(<br />
                      &nbsp;&nbsp;df, hue=<span className="text-amber-300">"species"</span>,<br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">palette</span>=<span className="text-amber-300">"Set2"</span>,<br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">height</span>=<span className="text-emerald-300">2.5</span>  <span className="text-slate-500 italic"># Reduces size for better UI layout</span><br />
                      )
                    </pre>
                  </div>

                  <button onClick={() => runDemo('filter_pair')} className="w-full py-5 bg-orange-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-orange-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Apply Memory Filter</button>
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
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">When to Apply 💰</h4>
                      <div className="text-xs grid grid-cols-1 gap-1.5 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        <p>🤖 Early Stage <b>Feature Analysis</b></p>
                        <p>👥 <b>Customer Segmentation</b></p>
                        <p>📈 Quick <b>Financial Modeling</b></p>
                      </div>
                    </div>

                    {/* pairplot vs jointplot */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">pair vs jointplot</h4>
                      <div className="text-[10px] grid grid-cols-3 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium bg-transparent">
                        <b className="text-slate-500">Feature</b> <b className="text-fuchsia-500 dark:text-fuchsia-400">Pair</b> <b className="text-slate-800 dark:text-slate-200">Joint</b>
                        <span>Variables</span> <span>Multiple</span> <span>Two</span>
                        <span>Case</span> <span>Overview</span> <span>Deep Dive</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Age vs Salary vs Experience 👥</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Age"</span>: np.random.<span className="text-cyan-400">randint</span>(<span className="text-emerald-300">20</span>, <span className="text-emerald-300">60</span>, <span className="text-emerald-300">100</span>),<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Salary"</span>: np.random.<span className="text-cyan-400">randint</span>(<span className="text-emerald-300">20000</span>, <span className="text-emerald-300">100000</span>, <span className="text-emerald-300">100</span>),<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Exp"</span>: np.random.<span className="text-cyan-400">randint</span>(<span className="text-emerald-300">1</span>, <span className="text-emerald-300">20</span>, <span className="text-emerald-300">100</span>)<br />
                      &#125;)<br /><br />
                      sns.<span className="text-fuchsia-400 font-bold">pairplot</span>(data)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Full System EDA</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            {/* Terminal Output Console */}
            <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
              <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-[100px] group-hover/terminal:bg-fuchsia-500/10 transition-all duration-1000"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                  <div className="flex items-center">
                    <Terminal className="w-6 h-6 mr-4 text-fuchsia-500" />
                    <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                      EDA_MACRO_SYS
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
                  </div>
                </div>

                <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                      <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Grid Analysis</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-fuchsia-500/50 mr-4 font-black select-none text-[8px] mt-1">SYS_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('mapped') || line.includes('complete') || line.includes('Optimized') ? 'text-emerald-400 font-bold' :
                              line.includes('Constructing') || line.includes('Detecting') || line.includes('Slicing') ? 'text-blue-400' :
                                line.includes('hue=') || line.includes('diag_kind=') || line.includes('vars=') ? 'text-cyan-300 font-bold' :
                                  line.includes('Diagonal') || line.includes('Off-Diagonal') ? 'text-fuchsia-400' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Evaluation Finished</span>
                        <button onClick={resetConsole} className="text-[9px] text-fuchsia-500 hover:text-fuchsia-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-fuchsia-500/20 pb-0.5">PURGE</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-fuchsia-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-fuchsia-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <ShieldCheck className="w-8 h-8 text-fuchsia-500 mr-4" />
              Expert EDA Protocol <span className="text-xs ml-3 px-2 py-1 bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/40 dark:text-fuchsia-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-fuchsia-400 mb-2">🚀 When to Use</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  This is arguably the most critical visualization in Python. ALWAYS use <code>pairplot()</code> immediately during your initial EDA before feeding anything into ML. It instantly isolates important class features and exposes redundant variables via matrix mapping.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-fuchsia-400 mb-2">🚀 Data Science Synergies</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Combine deeply with a <b>Correlation Heatmap</b>. Use Pairplot to literally see relationships, and the Heatmap to measure exact strength integers.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-fuchsia-500 mr-3 shrink-0"></span> Reduce chaotic sizes explicitly via <code>height=2</code> for UI layout controls.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span> You must explicitly apply your ML Target as the <code>hue="target"</code> variable!</li>
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
                { m: "Running raw on large datasets.", fx: "If you have 100 features and 1,000,000 rows, pairplot will genuinely crash your computer due to massive N-squared computation logic. Use `vars=[]` limiters." },
                { m: "Not setting hue contexts.", fx: "Without color classification mapping, deep dataset patterns are indistinguishable from meaningless random scatter noise. Always use Hue." },
                { m: "Showing 20+ features at once.", fx: "The matrix becomes entirely unreadable to humans. Use logic filters: max columns should typically hang around 3-5." }
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

export default SbPairplot;
