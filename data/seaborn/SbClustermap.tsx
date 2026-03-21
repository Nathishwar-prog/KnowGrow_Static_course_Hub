import React, { useState } from 'react';
import { 
  Info, Code, Terminal, Layers, Play,
  Zap, Activity, Target, Network,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, GitMerge
} from 'lucide-react';

const SbClustermap: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'corr' | 'styling' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_plot':
        outLines = [
          'Generating random (10x5) standard normal dataset...',
          'Initializing Hierarchical Clustering Algorithm...',
          'Calculating pairwise Euclidean distances...',
          'Constructing dendrogram tree structures...',
          'Reordering underlying heatmap matrix based on linkage...',
          'Success: Basic Cluster Map rendered.'
        ];
        break;
      case 'corr_plot':
        outLines = [
          'Loading "iris" standard dataset...',
          'Computing Pearson Correlation Matrix: df.corr()...',
          'Grouping highly correlated features...',
          'Applying diverging colormap: "coolwarm"...',
          'Mapping annotations (annot=True)...',
          'Correlation clusters identified clearly.'
        ];
        break;
      case 'style_plot':
        outLines = [
          'Adapting visual palette -> "viridis"...',
          'Standardizing distribution (standard_scale=1)...',
          'Disabling column clustering (col_cluster=False)...',
          'Calculating strictly row-based dendrograms...',
          'Resizing figure to (8, 6)...',
          'Styled matrix rendered successfully.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Extracting un-labeled measurement features...',
          'Standardizing biological measurements across scales...',
          'Applying dark-modern theme: "mako"...',
          'Clustering 150 flower samples...',
          'Three distinct phenotypic clusters discovered automatically!',
          'Exploratory Data Analysis (EDA) complete.'
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-3xl mb-8 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <Network className="w-12 h-12 text-teal-600 dark:text-teal-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-[10px] font-bold mb-6 border border-teal-500/20 tracking-[0.25em] uppercase">
          Hierarchical Matrices
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Cluster Maps</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          The ultimate blend of Heatmaps and Hierarchical Clustering. Discover hidden patterns and analyze multidimensional correlations instantly.
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
              <h2 className="text-3xl font-bold">1️⃣ What is a Cluster Map?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-teal-500 pl-6">
              "A Cluster Map combines a standard Heatmap with Hierarchical Clustering trees on the borders. It automatically reorders rows and columns to expose similar groups naturally."
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                 <GitMerge className="w-5 h-5 mr-3 text-teal-500" />
                 Key Visual Concepts
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { l: "Heatmap", d: "Color represents numerical value intensity" },
                    { l: "Dendrogram", d: "Tree-like structures mapping similarity" },
                    { l: "Clustering", d: "Forces similar elements adjacent" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                       <span className="text-teal-600 dark:text-teal-400 font-black text-xs uppercase tracking-widest mb-2">{stat.l}</span>
                       <span className="text-[11px] text-slate-500 font-medium leading-relaxed">{stat.d}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-teal-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Target className="w-8 h-8 text-teal-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Why Use clustermap()?</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                  {[
                    { t: "Discover hidden patterns in raw data", i: Search },
                    { t: "Group similar data points mathematically", i: Network },
                    { t: "Analyze deep multidimensional correlations", i: Activity },
                    { t: "Work fluently with high-dimensional matrices", i: Layers }
                  ].map((reason, i) => (
                    <div key={i} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                       <reason.i className="w-5 h-5 text-teal-500 mr-4 shrink-0" />
                       <span className="text-sm font-bold text-slate-200">{reason.t}</span>
                    </div>
                  ))}
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-teal-500/20 font-mono text-sm text-slate-300">
                <span className="text-slate-500 italic"># Basic Syntax</span><br/>
                <span className="text-fuchsia-400">import</span> seaborn <span className="text-fuchsia-400">as</span> sns<br/><br/>
                sns.<span className="text-cyan-400">clustermap</span>(data)
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Clustermap Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.clustermap()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Maps', icon: Network },
              { id: 'corr', label: 'Correlation', icon: GitMerge },
              { id: 'styling', label: 'Scaling & Params', icon: Palette },
              { id: 'real_world', label: 'Biology EDA', icon: History }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
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
                    <Code className="w-6 h-6 mr-4" />
                    Basic Cluster Map
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Supplying a simple NumPy matrix or DataFrame to clustermap instantly triggers the hierarchical linking algorithms.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <button onClick={() => runDemo('basic_plot')} className="absolute bottom-6 right-6 p-4 bg-teal-600 text-white rounded-2xl shadow-xl hover:bg-teal-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                          <code className="block text-fuchsia-400 mb-2">import pandas as pd</code>
                          <code className="block text-fuchsia-400 mb-2">import numpy as np</code>
                          <code className="block mt-4 text-slate-500 italic"># Create Sample Data Matrix</code>
                          <code className="block mb-4">data = pd.<span className="text-sky-400">DataFrame</span>(np.random.<span className="text-cyan-300">rand</span>(<span className="text-amber-400">10</span>, <span className="text-amber-400">5</span>), columns=[<span className="text-amber-300">"A"</span>, <span className="text-amber-300">"B"</span>, <span className="text-amber-300">"C"</span>, <span className="text-amber-300">"D"</span>, <span className="text-amber-300">"E"</span>])</code>
                          <code className="block text-slate-500 italic"># Generate Map</code>
                          <code className="block text-teal-400 font-bold tracking-widest mb-4">sns.clustermap(data)</code>
                          <code className="block text-sky-400">plt.show()</code>
                        </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Correlation */}
              {activeTab === 'corr' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-cyan-500">
                    <GitMerge className="w-6 h-6 mr-4" />
                    Correlation Matrices
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    This is arguably the <b>most common use case</b>. Passing a corelation matrix groups highly-correlated metrics directly next to one another.
                  </p>
                  
                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-sm leading-8 text-slate-300">
                        df = sns.<span className="text-sky-400">load_dataset</span>(<span className="text-amber-300">"iris"</span>)<br/><br/>
                        <span className="text-slate-500"># Calculate correlations safely</span><br/>
                        corr = df.<span className="text-sky-400">select_dtypes</span>(<span className="text-amber-300">'number'</span>).<span className="text-sky-400">corr</span>()<br/><br/>
                        sns.<span className="text-teal-400">clustermap</span>(<br/>
                        &nbsp;&nbsp;corr, <br/>
                        &nbsp;&nbsp;<span className="text-cyan-400 font-bold">annot</span>=<span className="text-teal-300">True</span>, <br/>
                        &nbsp;&nbsp;<span className="text-cyan-400 font-bold">cmap</span>=<span className="text-amber-300">"coolwarm"</span><br/>
                        )<br/>
                        plt.show()
                     </pre>
                  </div>
                  <div className="flex justify-end pt-4">
                     <button onClick={() => runDemo('corr_plot')} className="px-10 py-5 bg-cyan-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-cyan-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Identify Feature Relationships</button>
                  </div>
                </div>
              )}

              {/* Tab: Styling & Params */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-teal-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Palette className="w-6 h-6 mr-4" />
                    Standardization & Parameters
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                     {[
                       { p: 'standard_scale=1', d: "Normalizes data. A MUST DO if columns are in completely different units/scales." },
                       { p: 'col_cluster=False', d: "Disables sorting on the columns while allowing row sorting." },
                       { p: 'cmap="viridis"', d: "Excellent colormap for general data visualization vs zero-crossed." }
                     ].map((item, i) => (
                       <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                          <code className="text-[11px] font-bold text-teal-500 mb-2 block">{item.p}</code>
                          <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{item.d}</p>
                       </div>
                     ))}
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800">
                     <pre className="font-mono text-[12px] text-slate-300 leading-relaxed">
                        <span className="text-slate-500"># Applying Normalization and clustering logic</span><br/>
                        sns.clustermap(<br/>
                        &nbsp;&nbsp;data, <br/>
                        &nbsp;&nbsp;<span className="text-cyan-400 font-bold">cmap</span>=<span className="text-amber-300">"viridis"</span>,<br/>
                        &nbsp;&nbsp;<span className="text-violet-400 font-bold">standard_scale</span>=<span className="text-amber-300">1</span>,  <span className="text-slate-500 italic"># Columns normalized 0-1</span><br/>
                        &nbsp;&nbsp;<span className="text-teal-400 font-bold">row_cluster</span>=<span className="text-teal-300">True</span>, <br/>
                        &nbsp;&nbsp;<span className="text-teal-400 font-bold">col_cluster</span>=<span className="text-teal-300">False</span>,<br/>
                        &nbsp;&nbsp;<span className="text-fuchsia-400 font-bold">figsize</span>=(<span className="text-amber-300">8</span>, <span className="text-amber-300">6</span>)<br/>
                        )
                     </pre>
                  </div>
                  <button onClick={() => runDemo('style_plot')} className="w-full py-5 bg-teal-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-teal-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Process Scaled Matrix</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-cyan-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Activity className="w-6 h-6 mr-4" />
                    Biological Segmentation Case
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Cluster maps are heavily utilized in <b>Biology (Gene Expression)</b>, <b>Customer Segmentation</b>, and general <b>Feature Analytics</b>. We'll group hundreds of flower properties to find "species" clusters automatically.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[3.5rem] border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-[12px] leading-6 text-slate-300">
                       df = sns.<span className="text-sky-400">load_dataset</span>(<span className="text-amber-300">"iris"</span>)<br/><br/>
                       <span className="text-slate-500"># Pass all columns EXCEPT the categorical species column</span><br/>
                       numerical_feats = df.iloc[:, :-<span className="text-amber-300">1</span>]<br/><br/>
                       sns.<span className="text-teal-400">clustermap</span>(<br/>
                       &nbsp;&nbsp;numerical_feats,<br/>
                       &nbsp;&nbsp;<span className="text-cyan-400 font-bold">cmap</span>=<span className="text-amber-300">"mako"</span>,<br/>
                       &nbsp;&nbsp;<span className="text-violet-400 font-bold">standard_scale</span>=<span className="text-amber-300">1</span>  <span className="text-slate-500"># Petal/Sepal units differ wildly</span><br/>
                       )
                     </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-5 bg-cyan-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-cyan-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Analytical Subgrouping</button>
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
                        DENDRO_ENGINE
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
                        <Network className="w-16 h-16 opacity-5 animate-pulse" />
                        <div className="text-center relative">
                           <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Matrix Payload</span>
                           <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-teal-500/50 mr-4 font-black select-none text-[8px] mt-1">NODE_{i}</span>
                              <span className={`leading-relaxed font-medium ${
                                line.includes('Success') || line.includes('identified') || line.includes('discovered') ? 'text-emerald-400 font-bold' :
                                line.includes('Hierarchical') || line.includes('Dendrogram') || line.includes('Euclidean') ? 'text-cyan-400' :
                                line.includes('Standardizing') || line.includes('Adapting') ? 'text-teal-300 font-bold' :
                                line.includes('clusters') || line.includes('matrix') ? 'text-violet-400' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                           <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Evaluation Complete</span>
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
               <CheckCircle2 className="w-8 h-8 text-teal-500 mr-4" />
               Key Insights <span className="text-xs ml-3 px-2 py-1 bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400 rounded-full uppercase tracking-widest hidden sm:inline">Critical</span>
             </h2>

             <div className="space-y-6">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-teal-400 mb-2">✔ Automatically Evaluates Pattern</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                     The matrix reorders data entirely to ensure connected relationships and similar patterns visually appear touching one another.
                   </p>
                </div>
                
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-teal-400 mb-2">✔ High-Density Relationship Maps</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                     Unlike pairplots which take up enormous space, clustermaps display the relationships of massive datasets cleanly.
                   </p>
                </div>
             </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-rose-50 dark:bg-rose-950/20 p-10 rounded-[3rem] shadow-xl border border-rose-500/20 relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 w-2 h-full bg-rose-500"></div>
             <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400 mb-6 flex items-center">
               <AlertTriangle className="w-8 h-8 mr-4" />
               Common Mistakes
             </h2>

             <div className="space-y-4 flex-1">
                {[
                  { m: "Using raw data dimensions without scaling.", fx: "If Column A is in 'millions' and Column B is percentages, the cluster will completely break. Always Standardize!" },
                  { m: "Inputting vastly too many features.", fx: "While compact, supplying thousands of unique columns makes finding exact features unreadable." },
                  { m: "Ignoring the dendrogram branches.", fx: "The trees are essential! The shorter the branch link, the more intimately correlated." }
                ].map((mistake, i) => (
                   <div key={i} className="flex items-start p-4 bg-white dark:bg-slate-900 rounded-2xl border border-rose-100 dark:border-rose-900/50">
                      <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900 dark:text-rose-400 flex items-center justify-center font-bold mr-4 shrink-0 text-xs">X</div>
                      <div>
                         <p className="font-bold text-slate-800 dark:text-slate-200 mb-1 text-sm">{mistake.m}</p>
                         <p className="text-[11px] text-slate-600 dark:text-slate-400 italic font-mono mt-2">👉 {mistake.fx}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* 5. Professional Tips Grid */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="bg-slate-900 p-12 sm:p-20 rounded-[4.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-cyan-900/20 z-0"></div>
          
          <div className="relative z-10 mb-16 text-center">
             <h2 className="text-4xl font-black text-white mb-4 flex items-center justify-center">
               <Lightbulb className="w-10 h-10 text-amber-400 mr-4" />
               Pro Tips (From Experience)
             </h2>
             <p className="text-lg text-slate-300 font-medium tracking-tight">Expert tricks for flawless cluster interpretation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
             {[
               { t: "Always Normalize Multidimensional Data", c: 'sns.clustermap(data, standard_scale=1)', d: "Essential for raw dataset entry. Converts feature scales so clustering focuses on patterns, not size magnitudes." },
               { t: "Use Correlation Matrix Directly", c: 'sns.clustermap(df.corr())', d: "Instead of clustering raw data, clustering a df.corr() is the undisputed best way to perform rapid Feature Selection." },
               { t: "Choose the Perfect Colormap", c: '"coolwarm" -> Correlation [-1 to 1]\n"viridis" -> General data\n"mako" -> Modern biological UI', d: "Colormaps implicitly direct the viewer. Don't use sequential colors for diverging data." },
               { t: "Reduce Noise and Margins", c: 'sns.clustermap(data, figsize=(6, 5))', d: "Make the plot more robust to view inside standard analytical dashboards by constraining its footprint." }
             ].map((tip, i) => (
               <div key={i} className="flex flex-col p-8 bg-slate-950/60 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:bg-slate-950 shadow-xl transition-all group">
                  <h4 className="font-extrabold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center mr-3 text-sm">🔥</span>
                    {tip.t}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{tip.d}</p>
                  <code className="bg-black/50 p-4 rounded-2xl text-teal-300 font-mono text-[11px] whitespace-pre-wrap font-bold border border-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                    {tip.c}
                  </code>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Deep Comparison & Recommendation */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
         <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-gradient-to-br from-slate-900 to-teal-950 p-10 rounded-[3rem] shadow-xl border border-teal-500/20 text-white flex flex-col justify-center">
               <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="bg-teal-500 p-2 rounded-xl mr-3"><Target className="w-5 h-5"/></span>
                  Personal Rec.
               </h3>
               <p className="text-[13px] text-teal-200 mb-4 font-bold tracking-widest uppercase">Utilize when:</p>
               <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-sm font-medium text-white">
                     <CheckCircle2 className="w-4 h-4 mr-3 text-teal-400"/> Doing thorough EDA
                  </li>
                  <li className="flex items-center text-sm font-medium text-white">
                     <CheckCircle2 className="w-4 h-4 mr-3 text-teal-400"/> Finding hidden group patterns
                  </li>
                  <li className="flex items-center text-sm font-medium text-white">
                     <CheckCircle2 className="w-4 h-4 mr-3 text-teal-400"/> Working with ML preprocessing
                  </li>
               </ul>
               
               <p className="text-[13px] text-rose-300 mb-4 font-bold tracking-widest uppercase">Avoid when:</p>
               <ul className="space-y-4">
                  <li className="flex items-center text-sm font-medium text-slate-300/80">
                     <AlertTriangle className="w-4 h-4 mr-3 text-rose-400/80"/> The dataset is incredibly small
                  </li>
                  <li className="flex items-center text-sm font-medium text-slate-300/80">
                     <AlertTriangle className="w-4 h-4 mr-3 text-rose-400/80"/> The audience is non-technical
                  </li>
               </ul>
            </div>

            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                  <Table className="w-6 h-6 mr-3 text-slate-500" /> Heatmap vs Clustermap
               </h3>
               
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-slate-400 font-bold">Feature</th>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-fuchsia-500 font-black">Standard Heatmap</th>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-teal-500 font-black">Clustermap</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 border-b dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300">Hierarchical Clustering</td>
                           <td className="p-4 border-b dark:border-slate-800 text-slate-500 font-medium">❌ No dendrograms</td>
                           <td className="p-4 border-b dark:border-slate-800 text-teal-500 font-bold">✅ Yes (X & Y axis)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 border-b dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300">Data Array Order</td>
                           <td className="p-4 border-b dark:border-slate-800 text-slate-500">Fixed (Matches underlying data)</td>
                           <td className="p-4 border-b dark:border-slate-800 text-teal-500 font-bold uppercase text-[10px] tracking-widest">Reordered Automatically</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 font-bold text-slate-700 dark:text-slate-300">Analytical Insight Level</td>
                           <td className="p-4 text-fuchsia-400 font-bold">Medium</td>
                           <td className="p-4 text-teal-400 font-bold">Very High</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 font-bold text-slate-700 dark:text-slate-300">Visual Complexity</td>
                           <td className="p-4 text-fuchsia-400">Low (Easy for beginners)</td>
                           <td className="p-4 text-rose-400 font-bold">High (Intimidating if untrained)</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default SbClustermap;
