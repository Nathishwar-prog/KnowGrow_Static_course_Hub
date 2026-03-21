import React, { useState } from 'react';
import { 
  Info, Code, Terminal, Layers, Play,
  Zap, Activity, Target, Network,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, Paintbrush,
  Eye, Droplet, LayoutTemplate, TrendingUp,
  GitMerge, BarChart2, ListOrdered, AlignLeft
} from 'lucide-react';

const SbCountplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'hue' | 'order' | 'advanced'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_plot':
        outLines = [
          'Loading dataset...',
          'Scanning target categorical column: "Department"...',
          'Tallying absolute frequencies...',
          'Found: HR=2, IT=3, Sales=2.',
          'Rendering vertical bars where height = count.',
          'Visualization successful.'
        ];
        break;
      case 'hue_plot':
        outLines = [
          'Scanning variable: x="day"...',
          'Detecting sub-category grouping: hue="sex"...',
          'Splitting absolute counts into secondary bins...',
          'Mapping distinct colors to secondary groups...',
          'Multi-dimensional frequency distribution rendered.'
        ];
        break;
      case 'order_plot':
        outLines = [
          'Executing df["day"].value_counts()...',
          'Extracting sorted index array in descending order...',
          'Applying explicit ordering to categorical axis...',
          'Rendering count plot sorted dynamically from highest to lowest...',
          'Visual readability significantly improved.'
        ];
        break;
      case 'advanced_plot':
        outLines = [
          'Generating base count plot...',
          'Retrieving raw Axes object (ax)...',
          'Iterating through graphical bar patches...',
          'Calculating precise center-top coordinates...',
          'Injecting ax.annotate() values physically onto chart...',
          'Exact numerical value labels successfully applied.'
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/30 rounded-3xl mb-8 shadow-sm border border-blue-200 dark:border-blue-800/50">
          <BarChart2 className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-bold mb-6 border border-blue-500/20 tracking-[0.25em] uppercase">
          Categorical Imbalance Detector
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Count Plots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          The ultimate function for categorical frequencies. Instantly analyze class distributions and detect data imbalances straight out of the box.
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
              <h2 className="text-3xl font-bold">1️⃣ What is a Count Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-blue-500 pl-6">
              "It is essentially a Bar Plot where the height of the bar specifically represents the pure frequency (count) of observations in that category."
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                 <GitMerge className="w-5 h-5 mr-3 text-blue-500" />
                 Key Visual Concepts
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { l: "X-Axis (or Y-Axis)", d: "A strict Categorical variable" },
                    { l: "Height / Length", d: "Absolute count of occurrences" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                       <span className="text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-widest mb-2">{stat.l}</span>
                       <span className="text-[11px] text-slate-500 font-medium leading-relaxed">{stat.d}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-blue-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Target className="w-8 h-8 text-blue-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ When to use it?</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                  {[
                    { t: "Count category frequencies blindly", i: BarChart2 },
                    { t: "Analyze class/label distribution", i: ListOrdered },
                    { t: "Detect severe imbalance in ML labels", i: AlertTriangle },
                    { t: "Rapid initial Exploratory Data Analysis (EDA)", i: Search }
                  ].map((reason, i) => (
                    <div key={i} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                       <reason.i className="w-5 h-5 text-blue-500 mr-4 shrink-0" />
                       <span className="text-sm font-bold text-slate-200">{reason.t}</span>
                    </div>
                  ))}
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-blue-500/20 font-mono text-sm text-slate-300">
                <span className="text-slate-500 italic"># Basic Syntax</span><br/>
                <span className="text-violet-400">import</span> seaborn <span className="text-violet-400">as</span> sns<br/><br/>
                sns.<span className="text-cyan-400">countplot</span>(<br/>
                &nbsp;&nbsp;x=<span className="text-amber-300">None</span>, data=<span className="text-amber-300">None</span><br/>
                )
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Frequency Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.countplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic & Horizontal', icon: BarChart2 },
              { id: 'hue', label: 'Grouping (Hue)', icon: Layers },
              { id: 'order', label: 'Sorting Arrays', icon: ListOrdered },
              { id: 'advanced', label: 'Value Labels', icon: Zap }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
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
                    <Code className="w-6 h-6 mr-4" />
                    Standard & Horizontal Counts
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      You exclusively only need to pass a categorical string and a dataframe. The length will generate instantly. Swap <code>x</code> for <code>y</code> to flip it horizontally!
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <button onClick={() => runDemo('basic_plot')} className="absolute bottom-6 right-6 p-4 bg-blue-600 text-white rounded-2xl shadow-xl hover:bg-blue-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-[13px] leading-relaxed text-slate-300">
                          <code className="block mt-2 text-slate-500 italic"># 1. Create Sample DataFrame</code>
                          <code className="block">data = pd.<span className="text-sky-400">DataFrame</span>(&#123;</code>
                          <code className="block">&nbsp;&nbsp;<span className="text-amber-300">"Department"</span>: [<span className="text-amber-300">"HR"</span>, <span className="text-amber-300">"IT"</span>, <span className="text-amber-300">"Sales"</span>, <span className="text-amber-300">"HR"</span>, <span className="text-amber-300">"IT"</span>, <span className="text-amber-300">"IT"</span>]</code>
                          <code className="block">&#125;)</code>
                          <code className="block mt-4 text-slate-500 italic"># 2. Standard Count Plot</code>
                          <code className="block mb-2">sns.<span className="text-blue-400 font-bold">countplot</span>(x=<span className="text-amber-300">"Department"</span>, data=data)</code>
                          <code className="block mt-4 text-slate-500 italic"># OR: Horizontal Count Plot</code>
                          <code className="block text-blue-400 font-bold tracking-widest mb-4">sns.countplot(y="Department", data=data)</code>
                        </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Hue Mapping */}
              {activeTab === 'hue' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-violet-500">
                    <Layers className="w-6 h-6 mr-4" />
                    Adding Hue (Grouping)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Break down frequency counts even deeper by applying a secondary `hue` variable. Perfect for visually checking for demographic/class imbalance.
                  </p>
                  
                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-sm leading-8 text-slate-300">
                        df = sns.<span className="text-sky-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br/><br/>
                        <span className="text-slate-500"># Splits counts into discrete subcategories locally</span><br/>
                        sns.<span className="text-blue-400">countplot</span>(<br/>
                        &nbsp;&nbsp;x=<span className="text-amber-300">"day"</span>,<br/>
                        &nbsp;&nbsp;<span className="text-violet-400 font-bold border-b border-violet-500/50 pb-0.5">hue</span>=<span className="text-amber-300">"sex"</span>,<br/>
                        &nbsp;&nbsp;data=df,<br/>
                        &nbsp;&nbsp;palette=<span className="text-amber-300">"pastel"</span><br/>
                        )<br/>
                        plt.title(<span className="text-amber-300">"Customer Count by Day and Gender"</span>)
                     </pre>
                  </div>
                  <div className="flex justify-end pt-4">
                     <button onClick={() => runDemo('hue_plot')} className="px-10 py-5 bg-violet-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-violet-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Generate Hue Clusters</button>
                  </div>
                </div>
              )}

              {/* Tab: Sorting Ordering */}
              {activeTab === 'order' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-blue-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <ListOrdered className="w-6 h-6 mr-4" />
                    Ordering Frequencies dynamically
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Plotting raw unordered categories makes the visual hard to read. Always sort your bars dynamically using standard pandas functionality passed into the `order` parameter.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl mb-4">
                     <pre className="font-mono text-[12px] text-slate-300 leading-relaxed">
                        <span className="text-slate-500"># 1. Dynamically extract the sorted unique array strings</span><br/>
                        sorted_idx = df[<span className="text-amber-300">"day"</span>].<span className="text-sky-400 font-bold">value_counts</span>().index<br/><br/>
                        <span className="text-slate-500"># 2. Inject directly into countplot</span><br/>
                        sns.<span className="text-blue-400">countplot</span>(<br/>
                        &nbsp;&nbsp;x=<span className="text-amber-300">"day"</span>,<br/>
                        &nbsp;&nbsp;data=df,<br/>
                        &nbsp;&nbsp;<span className="text-violet-400 font-bold underline">order</span>=sorted_idx<br/>
                        )
                     </pre>
                  </div>
                  
                  <button onClick={() => runDemo('order_plot')} className="w-full py-5 bg-blue-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-blue-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Automatic Sorting</button>
                </div>
              )}

              {/* Tab: Pro Labels */}
              {activeTab === 'advanced' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-violet-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Zap className="w-6 h-6 mr-4" />
                    Value Tags (Pro Tip)
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Seaborn doesn't print the actual numbers on top of the bars by default. It is highly recommended to iterate through the graphical patches (the bars) and explicitly annotate their integer counts.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-[12px] leading-6 text-slate-300">
                       <span className="text-slate-500"># 1. Store the Axes coordinate object</span><br/>
                       ax = sns.<span className="text-blue-400">countplot</span>(x=<span className="text-amber-300">"day"</span>, data=df)<br/><br/>
                       <span className="text-slate-500"># 2. Iterate and apply exact numerical annotations physically</span><br/>
                       <span className="text-violet-400">for</span> patch <span className="text-violet-400">in</span> ax.patches:<br/>
                       &nbsp;&nbsp;ax.<span className="text-sky-400">annotate</span>(<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;f<span className="text-amber-300">"&#123;</span><span className="text-violet-300">int(patch.get_height())</span><span className="text-amber-300">&#125;"</span>,<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;(patch.<span className="text-sky-400">get_x</span>() + patch.<span className="text-sky-400">get_width</span>() / <span className="text-amber-300">2.</span>, patch.<span className="text-sky-400">get_height</span>()),<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400 font-bold">ha</span>=<span className="text-amber-300">"center"</span>, <span className="text-cyan-400 font-bold">va</span>=<span className="text-amber-300">"bottom"</span><br/>
                       &nbsp;&nbsp;)
                     </pre>
                  </div>

                  <button onClick={() => runDemo('advanced_plot')} className="w-full py-5 bg-violet-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-violet-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Process Superimposed Values</button>
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
                        FREQ_ENGINE
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
                        <BarChart2 className="w-16 h-16 opacity-5 animate-pulse" />
                        <div className="text-center relative">
                           <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Aggregation Logic</span>
                           <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-blue-500/50 mr-4 font-black select-none text-[8px] mt-1">LOG_{i}</span>
                              <span className={`leading-relaxed font-medium ${
                                line.includes('successful') || line.includes('improved') || line.includes('applied') ? 'text-emerald-400 font-bold' :
                                line.includes('Tallying') || line.includes('Calculating') || line.includes('Executing') ? 'text-violet-400' :
                                line.includes('Splitting') || line.includes('Extracting') || line.includes('Iterating') ? 'text-blue-300 font-bold' :
                                line.includes('Found') || line.includes('exact') || line.includes('highest') ? 'text-amber-400' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                           <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution Halted</span>
                           <button onClick={resetConsole} className="text-[9px] text-blue-500 hover:text-blue-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-blue-500/20 pb-0.5">FLUSH</button>
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
               <CheckCircle2 className="w-8 h-8 text-blue-500 mr-4" />
               Key Insights <span className="text-xs ml-3 px-2 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 rounded-full uppercase tracking-widest hidden sm:inline">Critical</span>
             </h2>

             <div className="space-y-6">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start">
                   <Target className="w-6 h-6 text-blue-500 mr-4 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-slate-800 dark:text-blue-400 mb-2">Imbalance Detection</h4>
                     <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                       This is the singular most important chart for verifying your ML datasets aren't completely dominated by one singular category.
                     </p>
                   </div>
                </div>
                
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start">
                   <Target className="w-6 h-6 text-blue-500 mr-4 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-slate-800 dark:text-blue-400 mb-2">Absolute Count, NOT Average</h4>
                     <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                       A countplot only counts observation rows. It does not average a specific continuous data point whatsoever.
                     </p>
                   </div>
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
                  { m: "Throwing barplot() instead of countplot()", fx: "sns.barplot() fundamentally seeks an X and a Y to compute a mean average. Using it just to count elements is an invalid usage of the function." },
                  { m: "Refusing to sort frequency.", fx: "If frequencies jump up and down randomly along the X-axis, users can't infer rank quickly." },
                  { m: "Visualizing far too many categories.", fx: "If you have 50 separate categorical labels, a vertical bar chart turns into a dense blob. Try swapping to horizontal for readability." }
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-violet-900/40 z-0"></div>
          
          <div className="relative z-10 mb-16 text-center">
             <h2 className="text-4xl font-black text-white mb-4 flex items-center justify-center">
               <Lightbulb className="w-10 h-10 text-amber-400 mr-4" />
               Pro Tips (From Experience)
             </h2>
             <p className="text-lg text-slate-300 font-medium tracking-tight">Best practices to upgrade analytical clarity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
             {[
               { t: "Combine severely with Hue", c: '# Best for deep demographics\nsns.countplot(..., hue="Target_Class")', d: "Don't just count genders. Add hue='Outcome' so you can visibly see if one specific categorical sub-group performs vastly different than another." },
               { t: "Extract Percentage Data alongside it", c: 'df["day"].value_counts(normalize=True)', d: "A bar chart proves frequency, but management almost always asks for the direct percentage value. Always extract it manually via Pandas normalize=True." },
               { t: "Add value labels directly", c: '# Utilize ax.annotate() loops', d: "Instead of forcing viewers to guess if that bar hits 40 or 45 based on the Y-Axis lines, permanently brand the bar top with '42'." },
               { t: "Clean up the backend UI", c: 'sns.set_style("whitegrid")', d: "For basic frequency plots, standardizing to a clean whitegrid removes visual weight allowing the bars themselves to maintain focus." }
             ].map((tip, i) => (
               <div key={i} className="flex flex-col p-8 bg-slate-950/60 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:bg-slate-950 shadow-xl transition-all group">
                  <h4 className="font-extrabold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 text-sm">🔥</span>
                    {tip.t}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{tip.d}</p>
                  <code className="bg-black/50 p-4 rounded-2xl text-violet-300 font-mono text-[11px] whitespace-pre-wrap font-bold border border-violet-500/20 group-hover:border-violet-500/50 transition-colors">
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
            <div className="lg:col-span-1 bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] shadow-xl border border-white/10 text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white/20 rounded-full blur-[80px]"></div>
               <h3 className="text-xl font-bold mb-6 flex items-center relative z-10">
                  <span className="bg-white/20 p-2 rounded-xl mr-3"><Target className="w-5 h-5"/></span>
                  Personal Rec.
               </h3>
               <p className="text-2xl font-black leading-tight mb-8 relative z-10">
                  Always use Count Plots at the absolute <span className="text-amber-300">start</span> of your EDA.
               </p>
               
               <p className="text-sm font-bold tracking-widest uppercase mb-4 text-blue-200">Why though?</p>
               <ul className="space-y-4 relative z-10">
                  <li className="flex items-center text-sm font-bold text-white">
                     <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-400"/> Instantly shows data distribution natively
                  </li>
                  <li className="flex items-center text-sm font-bold text-white">
                     <CheckCircle2 className="w-5 h-5 mr-3 text-rose-400"/> Detects structural imbalances which would fatally ruin Machine Learning training algorithms.
                  </li>
               </ul>
            </div>

            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                  <Table className="w-6 h-6 mr-3 text-slate-500" /> countplot vs barplot
               </h3>
               
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-slate-400 font-bold">Feature</th>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-blue-500 font-black">sns.countplot()</th>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-violet-500 font-black">sns.barplot()</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 border-b dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300">What it inherently shows</td>
                           <td className="p-4 border-b dark:border-slate-800 text-blue-500 font-bold">Raw Count (Frequency)</td>
                           <td className="p-4 border-b dark:border-slate-800 text-violet-500 font-bold">Mean Average Base</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 border-b dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300">Required Input Dimensions</td>
                           <td className="p-4 border-b dark:border-slate-800 text-slate-500">Categorical (Just X or Y)</td>
                           <td className="p-4 border-b dark:border-slate-800 text-slate-500">Categorical + Numeric (X and Y)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 font-bold text-slate-700 dark:text-slate-300">Primary Analytical Use Case</td>
                           <td className="p-4 font-mono text-blue-500 text-xs tracking-widest uppercase font-bold">Frequency Discovery</td>
                           <td className="p-4 font-mono text-violet-500 text-xs tracking-widest uppercase font-bold">Aggregation Engine</td>
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

export default SbCountplot;
