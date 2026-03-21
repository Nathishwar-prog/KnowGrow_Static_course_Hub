import React, { useState } from 'react';
import {
  Info, Code, Terminal, Layers, Play,
  Activity, Target, LayoutGrid,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, BarChart,
  Thermometer, Focus, Eye, ShieldCheck,
  Zap, Scissors
} from 'lucide-react';

const SbHeatmap: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'styling' | 'advanced' | 'comparison'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_heatmap':
        outLines = [
          'Loading dataset "tips"...',
          'Filtering numeric columns only...',
          'Computing pairwise correlation matrix (df.corr)...',
          'Initializing seaborn heatmap engine...',
          'Mapping continuous values to color gradients...',
          'Basic Heatmap rendered successfully.'
        ];
        break;
      case 'style_heatmap':
        outLines = [
          'Applying diverging colormap: cmap="coolwarm"...',
          'Enabling cell annotations (annot=True)...',
          'Formatting float values to 2 decimal places (fmt=".2f")...',
          'Applying limits: vmin=-1, vmax=1 for consistent scaling...',
          'Styling borders with linewidths=0.5...',
          'Production-level Heatmap styled successfully.'
        ];
        break;
      case 'mask_heatmap':
        outLines = [
          'Detecting duplicate information in correlation matrix...',
          'Generating boolean mask using numpy.triu()...',
          'Applying upper triangle mask to heatmap...',
          'Hiding redundant cells and diagonal identicals (1.0)...',
          'Rendering clean, professional UI...',
          'Masked Heatmap generated successfully.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Loading "iris" dataset for Feature Selection...',
          'Calculating correlation between sepal and petal dimensions...',
          'Applying sequential colormap "viridis"...',
          'Tracing strong positive correlation: petal_length & petal_width...',
          'Flagging highly correlated features for potential reduction...',
          'Feature analysis complete.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-orange-100 dark:bg-orange-900/30 rounded-3xl mb-8 shadow-sm border border-orange-200 dark:border-orange-800/50">
          <LayoutGrid className="w-12 h-12 text-orange-600 dark:text-orange-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-[10px] font-bold mb-6 border border-orange-500/20 tracking-[0.25em] uppercase">
          2D Correlation Engine
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Heatmaps</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.heatmap() — A powerful 2D grid where color dynamically represents value intensity, relationships, and feature correlations.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is a Heatmap?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-orange-500 pl-6">
              "A 2D grid where <b>rows & columns</b> represent variables, <b>cells</b> represent values, and <b>colors</b> represent the magnitude (low to high)."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-orange-500" />
                Why Heatmaps Matter:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Spot patterns & trends", "Detect correlations", "Find anomalies", "Reduce feature redundancy"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-3" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-orange-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Eye className="w-8 h-8 text-orange-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Intuition</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Thermometer className="w-5 h-5 text-red-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Darker / brighter colors</b> = stronger values</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Palette className="w-5 h-5 text-blue-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Diverging colors (Blue/Red)</b> = negative/positive correlation</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-orange-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                sns.<span className="text-orange-400 font-bold">heatmap</span>(data)<br />
                plt.<span className="text-cyan-400">show</span>()
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-3xl mr-6 border border-orange-200 dark:border-orange-800">
              <Terminal className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Heatmap Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.heatmap()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Heatmap', icon: LayoutGrid },
              { id: 'styling', label: 'Annotations & Color', icon: Palette },
              { id: 'advanced', label: 'Masking Pro Trick', icon: Scissors },
              { id: 'comparison', label: 'Real World / vs Clustermap', icon: Table }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/30'
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
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-orange-600 dark:text-orange-400">
                    <LayoutGrid className="w-6 h-6 mr-4" />
                    Step 1-3: Basic Heatmap Flow
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      The most common use case is plotting a <b>Correlation Matrix</b>. First load your data, compute the correlation, and pass it directly into the heatmap.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_heatmap')} className="absolute bottom-6 right-6 p-4 bg-orange-600 text-white rounded-2xl shadow-xl hover:bg-orange-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-slate-500 italic"># Step 1: Load Data</span><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Step 2: Create Correlation Matrix</span><br />
                        corr = df.<span className="text-cyan-400">corr</span>(numeric_only=<span className="text-purple-400">True</span>)<br /><br />
                        <span className="text-slate-500 italic"># Step 3: Basic Heatmap</span><br />
                        sns.<span className="text-orange-400 font-bold tracking-widest">heatmap</span>(corr)<br />
                        plt.<span className="text-cyan-400">title</span>(<span className="text-amber-300">"Basic Heatmap"</span>)<br />
                        plt.<span className="text-cyan-400">show</span>()
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Styling & Annotations */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <Palette className="w-6 h-6 mr-4" />
                    Annotations, Colormaps & Scales
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    A basic heatmap is hard to read. Add <b>annotations</b> to show exact values, use the <b>proper colormap</b>, and control the <b>scale</b> for consistency.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># Production Level Styling</span><br />
                      plt.<span className="text-cyan-400">figure</span>(figsize=(<span className="text-emerald-300">10</span>, <span className="text-emerald-300">8</span>))<br /><br />
                      sns.<span className="text-orange-400">heatmap</span>(<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;corr,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400 font-bold underline">annot</span>=<span className="text-amber-300">True</span>,      <span className="text-slate-500 italic"># Show exact values</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400 font-bold underline">cmap</span>=<span className="text-amber-300">"coolwarm"</span>, <span className="text-slate-500 italic"># Diverging palette</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">linewidths</span>=<span className="text-emerald-300">0.5</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">fmt</span>=<span className="text-amber-300">".2f"</span>,       <span className="text-slate-500 italic"># 2 decimal places</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400 font-bold underline">vmin</span>=<span className="text-emerald-300">-1</span>, <span className="text-purple-400 font-bold underline">vmax</span>=<span className="text-emerald-300">1</span>  <span className="text-slate-500 italic"># Control scale</span><br />
                      )
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('style_heatmap')} className="px-10 py-5 bg-blue-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-blue-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Style Heatmap</button>
                  </div>
                </div>
              )}

              {/* Tab: Masking */}
              {activeTab === 'advanced' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-red-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Scissors className="w-6 h-6 mr-4" />
                    Mask Upper Triangle (🔥 Trick)
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Correlation matrices are mirrored across the diagonal. Mask the upper triangle to remove duplicate information and create a cleaner UI.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np<br /><br />
                      <span className="text-slate-500"># Create a boolean mask of the upper triangle</span><br />
                      mask = np.<span className="text-cyan-400">triu</span>(corr)<br /><br />
                      <span className="text-slate-500"># Apply the mask</span><br />
                      sns.<span className="text-orange-400 font-bold">heatmap</span>(<br />
                      &nbsp;&nbsp;corr,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">mask</span>=mask, <span className="text-slate-500 italic"># Hides the duplicated upper half</span><br />
                      &nbsp;&nbsp;annot=<span className="text-amber-300">True</span>,<br />
                      &nbsp;&nbsp;cmap=<span className="text-amber-300">"coolwarm"</span><br />
                      )
                    </pre>
                  </div>

                  <button onClick={() => runDemo('mask_heatmap')} className="w-full py-5 bg-red-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-red-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Masking</button>
                </div>
              )}

              {/* Tab: Comparison */}
              {activeTab === 'comparison' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <Table className="w-6 h-6 mr-4" />
                    Real-World & Clustermap
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* How to read */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">How to Read (Value)</h4>
                      <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400">
                        <li><b className="text-emerald-500">+1</b>: Strong positive relation</li>
                        <li><b className="text-red-500">-1</b>: Strong negative relation</li>
                        <li><b className="text-slate-500">0</b>: No relation</li>
                      </ul>
                      <p className="text-[10px] mt-3 italic line-clamp-3">Example: petal_length & petal_width → highly correlated. Good candidate for feature selection.</p>
                    </div>

                    {/* Clustermap vs Heatmap */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Heatmap vs Clustermap</h4>
                      <div className="text-[11px] grid grid-cols-3 gap-2 text-slate-600 dark:text-slate-400">
                        <b className="text-slate-500">Feature</b> <b className="text-slate-800 dark:text-slate-200">Heatmap</b> <b className="text-slate-800 dark:text-slate-200">Clustermap</b>
                        <span>Complexity</span> <span>Easy</span> <span>Advanced</span>
                        <span>Clustering</span> <span>❌</span> <span>✅</span>
                        <span>Use Case</span> <span>EDA</span> <span className="whitespace-nowrap">Deep patterns</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Feature Selection</span><br />
                      df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"iris"</span>)<br />
                      corr = df.<span className="text-cyan-400">corr</span>(numeric_only=<span className="text-purple-400">True</span>)<br />
                      sns.<span className="text-orange-400 font-bold">heatmap</span>(corr, annot=<span className="text-purple-400">True</span>, cmap=<span className="text-amber-300">"viridis"</span>)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Analyze Iris Features</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            {/* Terminal Output Console */}
            <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] group-hover/terminal:bg-orange-500/10 transition-all duration-1000"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                  <div className="flex items-center">
                    <Terminal className="w-6 h-6 mr-4 text-orange-500" />
                    <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                      HEAT_GRID
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                  </div>
                </div>

                <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                      <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Grid Layout</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-orange-500/50 mr-4 font-black select-none text-[8px] mt-1">LOG_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('successfully') || line.includes('complete') ? 'text-emerald-400 font-bold' :
                              line.includes('Duplicate') || line.includes('upper triangle') || line.includes('coolwarm') ? 'text-blue-400' :
                                line.includes('annot=') || line.includes('vmax=') || line.includes('fmt=') ? 'text-cyan-300 font-bold' :
                                  line.includes('Computing') || line.includes('Calculating') ? 'text-amber-400' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution Terminated</span>
                        <button onClick={resetConsole} className="text-[9px] text-orange-500 hover:text-orange-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-orange-500/20 pb-0.5">CLEAR LOGS</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-orange-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <ShieldCheck className="w-8 h-8 text-orange-500 mr-4" />
              Pro Tips (15+ Years Exp) <span className="text-xs ml-3 px-2 py-1 bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400 rounded-full uppercase tracking-widest hidden sm:inline">Expert</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-orange-400 mb-2">🚀 Always Start with Heatmap in EDA</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  It gives instant understanding of relationships. In real projects, ALWAYS plot heatmap, remove highly correlated features, then build the model. This improves model performance and interpretability.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-orange-400 mb-2">🚀 Proper Palette Usage</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span> Use <b>Diverging Palette</b> (<code>cmap="coolwarm"</code>) for Correlation</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></span> Use <b>Sequential Palette</b> (<code>cmap="viridis"</code>) for Intensity Data</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-3"></span> Focus only on strong correlations (<b>&gt; 0.7</b>)</li>
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
                { m: "Using wrong colormap.", fx: "Leads to confusion. Use coolwarm for negative-neutral-positive data like correlation." },
                { m: "No annotation for beginners.", fx: "Just colors without numbers makes it hard to interpret exact values." },
                { m: "Too many features.", fx: "Turns the heatmap into a cluttered, unreadable mess. Reduce dimensions or use mask." },
                { m: "Ignoring scaling.", fx: "Without vmin and vmax, color interpretation becomes inconsistent and misleading." }
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

export default SbHeatmap;
