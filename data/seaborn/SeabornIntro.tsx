import React, { useState } from 'react';
import {
  Info, Terminal, Play, Activity, Target, BoxSelect, Maximize,
  AlertTriangle, CheckCircle2, Focus, Eye, ShieldCheck,
  SplitSquareHorizontal, Layers3, CircleDot,
  HeartHandshake, Rocket, Sparkles, BookOpen, Fingerprint
} from 'lucide-react';

const SeabornIntro: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'library' | 'workflow' | 'applications'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basics':
        outLines = [
          '> pip install seaborn',
          'Requirement already satisfied',
          '> python',
          '>>> import seaborn as sns',
          '>>> df = sns.load_dataset("tips")',
          '>>> sns.scatterplot(x="total_bill", y="tip", data=df)',
          'Rendering First Beautiful Plot...',
          'Done! Hello World generated successfully 🎉'
        ];
        break;
      case 'library':
        outLines = [
          'Scanning Seaborn Architecture...',
          '📊 Relational Plots: scatterplot(), lineplot() → Show relationships',
          '📦 Categorical Plots: barplot(), boxplot(), violinplot() → Compare categories',
          '📈 Distribution Plots: histplot(), kdeplot() → Understand shape',
          '🔥 Matrix Plots: heatmap() → Show correlations',
          '🧩 Advanced Plots: pairplot(), jointplot() → Deep data analysis',
          'All statistical modules successfully loaded.'
        ];
        break;
      case 'workflow':
        outLines = [
          'Initiating Real-World Workflow Simulation...',
          '[Step 1] Executing sns.histplot() → Understanding raw data distribution...',
          '[Step 2] Executing sns.scatterplot() → Finding 2D feature relationships...',
          '[Step 3] Executing sns.boxplot() → Comparing categorical clusters...',
          '[Step 4] Executing sns.heatmap() → Calculating global correlation matrix...',
          'Real-World Data Scientist Workflow completed flawlessly.'
        ];
        break;
      case 'applications':
        outLines = [
          'Initializing Use-Case Matrix...',
          'Checking: Conducting Exploratory Data Analysis (EDA)? → MATCHED',
          'Checking: Creating Visual Dashboards? → MATCHED',
          'Checking: Presenting Business Insights? → MATCHED',
          'Checking: Performing Statistical Mathematical Analysis? → MATCHED',
          'Seaborn application verified.'
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-3xl mb-8 shadow-sm border border-fuchsia-200 dark:border-fuchsia-800/50">
          <Sparkles className="w-12 h-12 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 rounded-full text-[10px] font-bold mb-6 border border-fuchsia-500/20 tracking-[0.25em] uppercase">
          Complete Beginner Guide
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Introduction to <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-500">Seaborn 🎀</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Your very first impression of Python's most beautiful statistical visualization tool. Go from raw matrix data to breathtaking insights effortlessly.
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
              <h2 className="text-3xl font-bold">What is Seaborn?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-fuchsia-500 pl-6">
              "Seaborn is a Python library built on top of Matplotlib specifically engineered for creating extremely beautiful and informative <b>statistical visualizations</b> seamlessly directly out of Pandas."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <HeartHandshake className="w-5 h-5 mr-3 text-fuchsia-500" />
                Why Seaborn?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Easier", "More beautiful", "More meaningful"].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                    <CheckCircle2 className="w-5 h-5 text-fuchsia-500 mb-2" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-fuchsia-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <ShieldCheck className="w-8 h-8 text-fuchsia-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">What Makes It Special?</h2>
              </div>

              <div className="space-y-4 mb-4 flex-1">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-2xl mr-4 shrink-0">🎨</span>
                  <span className="text-sm font-medium text-slate-300"><b>Built-in themes</b>: No styling headache. It simply looks amazing immediately.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-2xl mr-4 shrink-0">📊</span>
                  <span className="text-sm font-medium text-slate-300"><b>Statistical Engine</b>: More than basic bar charts—automatic calculation logic.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-2xl mr-4 shrink-0">🐼</span>
                  <span className="text-sm font-medium text-slate-300"><b>Pandas Native</b>: Feeds perfectly off massive multi-dimensional DataFrames.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Component Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-fuchsia-100 dark:bg-fuchsia-900/40 rounded-3xl mr-6 border border-fuchsia-200 dark:border-fuchsia-800">
              <Terminal className="w-8 h-8 text-fuchsia-600 dark:text-fuchsia-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Interactive Classroom</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Learn by executing</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Setup', icon: Rocket },
              { id: 'library', label: 'Plot Library', icon: BookOpen },
              { id: 'workflow', label: 'Real Workflow', icon: Activity },
              { id: 'applications', label: 'Applications', icon: Target }
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
                    <Rocket className="w-6 h-6 mr-4" />
                    Hello World & Built-in Sets
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      First, install Seaborn and import it alongside Matplotlib. Seaborn actually provides magnificent built-in datasets strictly for practicing and validating plots without needing to connect your database!
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basics')} className="absolute bottom-6 right-6 p-4 bg-fuchsia-600 text-white rounded-2xl shadow-xl hover:bg-fuchsia-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-slate-500 italic"># Terminal</span><br />
                        <span className="text-slate-300">pip install seaborn</span><br /><br />
                        <span className="text-slate-500 italic"># Python File (Plotting Hello World 🎉)</span><br />
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        <span className="text-slate-500 italic"># Built-in Datasets ("tips", "iris", "flights") 🔥</span><br />
                        df = sns.<span className="text-blue-400">load_dataset</span>(<span className="text-indigo-300">"tips"</span>)<br /><br />
                        sns.<span className="text-fuchsia-400 font-bold tracking-widest">scatterplot</span>(x=<span className="text-indigo-300">"total_bill"</span>, y=<span className="text-indigo-300">"tip"</span>, data=df)<br />
                        plt.<span className="text-blue-400">title</span>(<span className="text-indigo-300">"My First Seaborn Plot"</span>)<br />
                        plt.<span className="text-blue-400">show</span>()
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Library */}
              {activeTab === 'library' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500">
                    <BookOpen className="w-6 h-6 mr-4" />
                    Types of Plots
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Seaborn categorizes visual outputs into families so you always know what algorithmic tool to grab dependent on your current Data shape.
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200 dark:border-slate-800 rounded-2xl">
                      <b className="text-indigo-500 block mb-2 font-sans uppercase tracking-widest">1. Relational 📊</b>
                      <span className="text-slate-500 italic">Show relationships</span><br/>
                      <span className="text-slate-700 dark:text-slate-300 font-bold mt-1 inline-block">scatterplot(), lineplot()</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200 dark:border-slate-800 rounded-2xl">
                      <b className="text-fuchsia-500 block mb-2 font-sans uppercase tracking-widest">2. Categorical 📦</b>
                      <span className="text-slate-500 italic">Compare categories</span><br/>
                      <span className="text-slate-700 dark:text-slate-300 font-bold mt-1 inline-block">barplot(), boxplot(), violinplot()</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200 dark:border-slate-800 rounded-2xl">
                      <b className="text-blue-500 block mb-2 font-sans uppercase tracking-widest">3. Distribution 📈</b>
                      <span className="text-slate-500 italic">Understand shaping</span><br/>
                      <span className="text-slate-700 dark:text-slate-300 font-bold mt-1 inline-block">histplot(), kdeplot()</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200 dark:border-slate-800 rounded-2xl">
                      <b className="text-rose-500 block mb-2 font-sans uppercase tracking-widest">4. Advanced Arrays 🎨</b>
                      <span className="text-slate-500 italic">Deep insights/Correlations</span><br/>
                      <span className="text-slate-700 dark:text-slate-300 font-bold mt-1 inline-block">heatmap(), pairplot()</span>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('library')} className="px-10 py-5 bg-indigo-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-indigo-500 active:scale-95 transition-all text-xs uppercase tracking-widest">View Library Index</button>
                  </div>
                </div>
              )}

              {/* Tab: Real World workflow */}
              {activeTab === 'workflow' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-rose-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <Activity className="w-6 h-6 mr-4" />
                    Real-World Workflow (IMPORTANT)
                  </h3>

                  <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-sm mb-4 text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center">
                      <Fingerprint className="w-5 h-5 text-rose-500 mr-2" /> How real data scientists work:
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium italic">"Teach this clearly. You don't just guess graphs. You follow a very strict pipeline format to discover truth."</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                        <span className="text-2xl mr-4 basis-8">📊</span>
                        <div><strong className="text-sm text-slate-800 dark:text-rose-400 font-mono">histplot()</strong><span className="text-xs text-slate-500 block">→ understand distribution</span></div>
                      </div>
                      <div className="flex items-center p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                        <span className="text-2xl mr-4 basis-8">🔗</span>
                        <div><strong className="text-sm text-slate-800 dark:text-indigo-400 font-mono">scatterplot()</strong><span className="text-xs text-slate-500 block">→ find relationships</span></div>
                      </div>
                      <div className="flex items-center p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                        <span className="text-2xl mr-4 basis-8">📦</span>
                        <div><strong className="text-sm text-slate-800 dark:text-pink-400 font-mono">boxplot()</strong><span className="text-xs text-slate-500 block">→ compare categories</span></div>
                      </div>
                      <div className="flex items-center p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                        <span className="text-2xl mr-4 basis-8">🔥</span>
                        <div><strong className="text-sm text-slate-800 dark:text-orange-400 font-mono">heatmap()</strong><span className="text-xs text-slate-500 block">→ check correlations</span></div>
                      </div>
                    </div>
                  </div>

                  <button onClick={() => runDemo('workflow')} className="w-full py-4 bg-rose-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-rose-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Simulate Workflow Run</button>
                </div>
              )}

              {/* Tab: App vs */}
              {activeTab === 'applications' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-teal-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <Target className="w-6 h-6 mr-4" />
                    Applications & Metrics
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* When To Use */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-4 text-slate-800 dark:text-slate-200 uppercase tracking-widest">When to use?</h4>
                      <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-3 font-medium">
                        <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-500 mr-2"/> Exploring data (EDA)</li>
                        <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-500 mr-2"/> Creating dashboards</li>
                        <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-500 mr-2"/> Presenting insights to users</li>
                        <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-teal-500 mr-2"/> Heavy statistical analytics</li>
                      </ul>
                    </div>

                    {/* VS Matrix */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-4 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Vs. Matplotlib</h4>
                      <div className="text-[10px] grid grid-cols-3 gap-2 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-3 mt-2 font-medium bg-transparent text-left items-center">
                        <b className="text-slate-500">Feature</b> <b className="text-fuchsia-500">Seaborn</b> <b className="text-slate-800 dark:text-slate-200">Matplotlib</b>
                        <span>Ease of run</span> <span className="text-teal-400 font-bold">Easy</span> <span>Moderate</span>
                        <span>Base style</span> <span className="text-teal-400 font-bold">Beautiful</span> <span>Basic</span>
                        <span>Stats Plots</span> <span className="text-teal-400 font-bold">Built-in</span> <span>Manual</span>
                      </div>
                    </div>
                  </div>
                  
                  <button onClick={() => runDemo('applications')} className="w-full py-4 bg-teal-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-teal-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Verify Integrations</button>
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
                      VSCODE_SIM
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
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting System Action</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-fuchsia-500/50 mr-4 font-black select-none text-[8px] mt-1">LOG_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('successfully') || line.includes('flawlessly') || line.includes('MATCHED') ? 'text-green-400 font-bold' :
                              line.includes('>') ? 'text-slate-300 font-bold' :
                                line.includes('>>>') || line.includes('import') ? 'text-blue-400 font-bold' :
                                  line.includes('sns.') || line.includes('plt.') ? 'text-fuchsia-300 font-bold' :
                                    line.includes('[Step ') ? 'text-rose-300 font-bold' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution End</span>
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

          {/* Setup Rules */}
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-fuchsia-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-fuchsia-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <ShieldCheck className="w-8 h-8 text-fuchsia-500 mr-4" />
              Pro Tips (From Experience) <span className="text-xs ml-3 px-2 py-1 bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/40 dark:text-fuchsia-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-fuchsia-500 mr-3 shrink-0"></span> <b>Start simple.</b> Don't launch into pairplots immediately. Use a base scatterplot.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-indigo-500 mr-3 shrink-0"></span> <b>Focus on data story!</b> Your graphics need to explain truth, not just look complex.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-pink-500 mr-3 shrink-0"></span> <b>Use consistent colors.</b> Let your styles transfer between completely different visualizations mapping matching objects.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-fuchsia-500 mr-3 shrink-0"></span> <b>Always label your plots.</b> X and Y axis need direct textual definitions using `plt.title()` and `plt.ylabel()`.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-800 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-2 h-full bg-rose-500"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-4 text-rose-500" />
              Common Beginner Mistakes
            </h2>

            <div className="space-y-4 flex-1">
              {[
                { m: "Jumping directly to complex plots.", fx: "If you run an algorithm generating a density curve on only 12 data points, the resulting violin is jagged entirely. Stick to simple scatter." },
                { m: "Ignoring data understanding.", fx: "Not knowing what kind of categorical structure your columns contain absolutely locks analytical potential." },
                { m: "Overloading charts visually.", fx: "If you pack X, Y, Hue, Size, Col, and Row all into one graphic, humans can no longer interpret it rapidly." },
                { m: "Not utilizing themes.", fx: "Default matplotlib frames look strictly from 2003. Call a `sns.set_theme()` immediately." }
              ].map((mistake, i) => (
                <div key={i} className="flex items-start p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold mr-4 shrink-0 text-xs">X</div>
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

export default SeabornIntro;