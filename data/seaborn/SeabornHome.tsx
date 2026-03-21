import React, { useState } from 'react';
import {
  Info, Terminal, Play, Activity, Target, BoxSelect, Maximize,
  AlertTriangle, CheckCircle2, Focus, Eye, ShieldCheck,
  SplitSquareHorizontal, Layers3, CircleDot, Database,
  Compass, Map, BarChart3, LineChart, Code2
} from 'lucide-react';

const SeabornHome: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'roadmap' | 'path' | 'workflow'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basics':
        outLines = [
          '> pip install seaborn',
          'Successfully installed seaborn-0.13.0',
          '> python -c "import seaborn as sns"',
          'Loading built-in dataset "tips"...',
          'Executing sns.scatterplot()...',
          'Rendering First Seaborn Plot (Hello World 🎉)...',
          'Plot successfully displayed via plt.show()!'
        ];
        break;
      case 'roadmap':
        outLines = [
          'Scanning Seaborn API modules...',
          '[1] Relational Plots: show relationships between variables.',
          '[2] Categorical Plots: compare discrete categories.',
          '[3] Distribution Plots: understand data shaping.',
          '[4] Matrix Plots: reveal deep correlations.',
          '[5] Multi-Plot Grids: execute advanced EDA.',
          '[6] Regression Models: analyze predictive trends.',
          'Roadmap fully indexed and ready for deep learning.'
        ];
        break;
      case 'path':
        outLines = [
          'Initializing Learning Path algorithms...',
          'Loading Beginner Module (Scatter, Bar, Count)...',
          'Unlocking Intermediate Module (Box, Violin, Heatmap)...',
          'Preparing Advanced Systems (Pairplot, Jointplot, FacetGrid)...',
          'Concepts loaded: Distribution, Correlation, Categories...',
          'Learning Path successfully activated 🚀'
        ];
        break;
      case 'workflow':
        outLines = [
          'Initiating Real-World Data Science Workflow...',
          'Step 1: Exploring continuous data with scatterplot / histplot...',
          'Step 2: Checking distributions with boxplot / violinplot...',
          'Step 3: Calculating statistical correlation matrix via heatmap()...',
          'Step 4: Executing full feature deep-dive using pairplot()...',
          'Workflow completed. EDA insights harvested flawlessly.'
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-3xl mb-8 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <Compass className="w-12 h-12 text-teal-600 dark:text-teal-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-[10px] font-bold mb-6 border border-teal-500/20 tracking-[0.25em] uppercase">
          Complete Course Introduction
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-violet-500">Seaborn</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master the ultimate Python data visualization library built explicitly for data analysis and rich storytelling. Create beautiful, professional statistical dashboards natively with Pandas.
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
              <h2 className="text-3xl font-bold">What is Seaborn?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-teal-500 pl-6">
              "Seaborn is a Python data visualization library built directly on top of <b>Matplotlib</b>. It acts as an incredible wrapper that automatically applies beautiful themes and supports massive statistical plots directly reading from Pandas."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-teal-500" />
                Why Seaborn is Powerful?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Built-in themes & styles", "Direct Pandas DataFrame links", "Advanced statistical plots", "Extremely easy API routing"].map((stat, i) => (
                  <div key={i} className="flex flex-col justify-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 mb-2" />
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
                <h2 className="text-3xl font-bold text-white tracking-tight">Core Applications</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Database className="w-5 h-5 text-violet-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>EDA (Exploratory Data Analysis)</b>: The ultimate tool for understanding raw data immediately.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <BarChart3 className="w-5 h-5 text-teal-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Dashboards & Reporting</b>: Go from calculating statistics to presenting insights visually.</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-teal-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># 10. Matplotlib vs Seaborn</span><br />
                Feature: <span className="text-teal-400">Seaborn</span> vs <span className="text-violet-400">Matplotlib</span><br />
                Ease:&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-teal-400">Easy</span>&nbsp;&nbsp;&nbsp;&nbsp;vs <span className="text-violet-400">Moderate</span><br />
                Style:&nbsp;&nbsp;&nbsp;<span className="text-teal-400">Beautiful</span>&nbsp;vs <span className="text-violet-400">Basic</span><br />
                Stats:&nbsp;&nbsp;&nbsp;<span className="text-teal-400">Built-in</span>&nbsp;&nbsp;vs <span className="text-violet-400">Manual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Component Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-teal-100 dark:bg-teal-900/40 rounded-3xl mr-6 border border-teal-200 dark:border-teal-800">
              <Terminal className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Interactive Syllabus</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Select Course Modules</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Start Here', icon: Code2 },
              { id: 'roadmap', label: 'Course Roadmap', icon: Map },
              { id: 'path', label: 'Learning Path', icon: Target },
              { id: 'workflow', label: 'Pro Workflow', icon: Activity }
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
                    <Code2 className="w-6 h-6 mr-4" />
                    Setup & Hello World
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      To begin using Seaborn, install it via pip and import it alongside Matplotlib. Seaborn provides extremely useful built-in datasets to practice with before hitting real databases.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basics')} className="absolute bottom-6 right-6 p-4 bg-teal-600 text-white rounded-2xl shadow-xl hover:bg-teal-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-slate-500 italic"># 4. Install</span><br />
                        <span className="text-slate-300">!pip install seaborn</span><br /><br />
                        <span className="text-slate-500 italic"># 5. First Seaborn Plot!</span><br />
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        <span className="text-slate-500 italic"># Load built-in data ("tips", "iris", "flights")</span><br />
                        df = sns.<span className="text-blue-400">load_dataset</span>(<span className="text-teal-300">"tips"</span>)<br /><br />
                        sns.<span className="text-teal-400 font-bold tracking-widest">scatterplot</span>(x=<span className="text-teal-300">"total_bill"</span>, y=<span className="text-teal-300">"tip"</span>, data=df)<br />
                        plt.<span className="text-blue-400">title</span>(<span className="text-teal-300">"My First Seaborn Plot"</span>)<br />
                        plt.<span className="text-blue-400">show</span>()
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Roadmap */}
              {activeTab === 'roadmap' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-violet-500">
                    <Map className="w-6 h-6 mr-4" />
                    Complete Course Roadmap
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    The entire functional API of Seaborn is split into 7 major categories. Understanding what plot category to grab represents 90% of the battle in Data Visualization.
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200 dark:border-slate-800 rounded-2xl">
                      <b className="text-violet-500 block mb-2 font-sans uppercase tracking-widest">1. Relational</b>
                      <span className="text-slate-500">Show relationships</span><br/>
                      <span className="text-slate-700 dark:text-slate-300">scatterplot, lineplot, relplot</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200 dark:border-slate-800 rounded-2xl">
                      <b className="text-teal-500 block mb-2 font-sans uppercase tracking-widest">2. Categorical</b>
                      <span className="text-slate-500">Compare categories</span><br/>
                      <span className="text-slate-700 dark:text-slate-300">barplot, boxplot, stripplot...</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200 dark:border-slate-800 rounded-2xl">
                      <b className="text-blue-500 block mb-2 font-sans uppercase tracking-widest">3. Distribution</b>
                      <span className="text-slate-500">Understand shaping</span><br/>
                      <span className="text-slate-700 dark:text-slate-300">histplot, kdeplot, ecdfplot</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200 dark:border-slate-800 rounded-2xl">
                      <b className="text-fuchsia-500 block mb-2 font-sans uppercase tracking-widest">4. Matrices/Grids</b>
                      <span className="text-slate-500">Correlations/Exploration</span><br/>
                      <span className="text-slate-700 dark:text-slate-300">heatmap, pairplot, jointplot</span>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('roadmap')} className="px-10 py-5 bg-violet-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-violet-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Scan API Docs</button>
                  </div>
                </div>
              )}

              {/* Tab: Learning Path */}
              {activeTab === 'path' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-blue-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Target className="w-6 h-6 mr-4" />
                    Recommended Learning Path
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    To master Data Science, you must first master the concepts: <b>Distribution, Relationship, Correlation, Categories, and Visualization Design.</b> Following this tier list guarantees success.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl space-y-6">
                    <div>
                      <h4 className="flex items-center text-teal-400 text-xs font-bold uppercase tracking-widest mb-2"><span className="w-2 h-2 rounded-full bg-teal-400 mr-2"></span> Tier 1: Beginner Frameworks</h4>
                      <p className="text-sm font-mono text-slate-300 bg-slate-900 border border-slate-800 p-3 rounded-xl">Scatterplot &nbsp;→&nbsp; Barplot &nbsp;→&nbsp; Countplot</p>
                    </div>
                    <div>
                      <h4 className="flex items-center text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2"><span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span> Tier 2: Intermediate Deep Dives</h4>
                      <p className="text-sm font-mono text-slate-300 bg-slate-900 border border-slate-800 p-3 rounded-xl">Boxplot &nbsp;→&nbsp; Violinplot &nbsp;→&nbsp; Heatmap</p>
                    </div>
                    <div>
                      <h4 className="flex items-center text-violet-400 text-xs font-bold uppercase tracking-widest mb-2"><span className="w-2 h-2 rounded-full bg-violet-400 mr-2"></span> Tier 3: Advanced Dashboard Matrices</h4>
                      <p className="text-sm font-mono text-slate-300 bg-slate-900 border border-slate-800 p-3 rounded-xl">Pairplot &nbsp;→&nbsp; Jointplot &nbsp;→&nbsp; Clustermap &nbsp;→&nbsp; FacetGrid</p>
                    </div>
                  </div>

                  <button onClick={() => runDemo('path')} className="w-full py-5 bg-blue-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-blue-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Learning Path</button>
                </div>
              )}

              {/* Tab: Real World workflow */}
              {activeTab === 'workflow' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-fuchsia-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <Activity className="w-6 h-6 mr-4" />
                    Pro Data Science Workflow
                  </h3>

                  <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-sm mb-4 text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center">
                      <ShieldCheck className="w-5 h-5 text-fuchsia-500 mr-2" /> Real-World Strategy
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-medium italic">"Always construct distributions before attacking regressions and deep correlations."</p>
                    <ol className="text-xs font-mono text-slate-700 dark:text-slate-300 space-y-3">
                      <li className="flex items-center"><span className="font-black text-fuchsia-500 mr-3 text-lg">1</span> Start with scatterplot / histplot</li>
                      <li className="flex items-center"><span className="font-black text-fuchsia-500 mr-3 text-lg">2</span> Progress into boxplot / violinplot</li>
                      <li className="flex items-center"><span className="font-black text-fuchsia-500 mr-3 text-lg">3</span> Check data correlations (heatmap)</li>
                      <li className="flex items-center"><span className="font-black text-fuchsia-500 mr-3 text-lg">4</span> Explore entirety with pairplot</li>
                    </ol>
                  </div>

                  <button onClick={() => runDemo('workflow')} className="w-full py-4 bg-fuchsia-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-fuchsia-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Simulation Script</button>
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
                      SEABORN_ENV
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
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Installation</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-teal-500/50 mr-4 font-black select-none text-[8px] mt-1">SYS_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('successfully') || line.includes('flawlessly') || line.includes('activated') ? 'text-green-400 font-bold' :
                              line.includes('>') ? 'text-slate-300 font-bold' :
                                line.includes('import') || line.includes('sns.') || line.includes('plt.') ? 'text-blue-400 font-bold' :
                                  line.includes('[1]') || line.includes('[2]') || line.includes('[3]') || line.includes('[4]') || line.includes('[5]') || line.includes('[6]') ? 'text-violet-300 font-bold' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution End</span>
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

          {/* Guidelines */}
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-teal-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <ShieldCheck className="w-8 h-8 text-teal-500 mr-4" />
              15+ Years Pro Tips <span className="text-xs ml-3 px-2 py-1 bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-teal-400 mb-2">🚀 Visual Principles</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-violet-500 mr-3 shrink-0"></span> Keep visuals entirely simple. Do not over-saturate information.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span> Demand consistent styling. Set a global `set_theme()` for all analysis outputs.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-fuchsia-500 mr-3 shrink-0"></span> Always explicitly label your plots (titles, variables) — Context matters.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-teal-500 mr-3 shrink-0"></span> Target the story of the data. Don't waste time on needless plot decoration.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-800 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-2 h-full bg-orange-500"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-4 text-orange-500" />
              Student Mistakes
            </h2>

            <div className="space-y-4 flex-1">
              {[
                { m: "Immediate hyper-complexity.", fx: "Jumping to high-end plots directly is lethal. You must build fundamental distribution plots FIRST." },
                { m: "Skipping Context.", fx: "Ignoring what the data truly means algorithmically blocks insights. Understanding the column types comes before running sns.scatterplot()." },
                { m: "Sensory overload.", fx: "Overloading single visuals with 6 dimensions (X, Y, Hue, Size, Style, Col) completely crashes human comprehension limits." }
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

export default SeabornHome;