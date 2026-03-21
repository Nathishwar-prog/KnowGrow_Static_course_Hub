import React, { useState } from 'react';
import { 
  BarChart3, Info, Code, Terminal, 
  Layers, Play, Zap, AlertCircle, Sparkles,
  Activity, Target, ClipboardList, TrendingUp,
  Layout, Palette, History, Columns, AlertTriangle, Users,
  Lightbulb
} from 'lucide-react';

const SbBarplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'hue' | 'stats' | 'styling' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_plot':
        outLines = [
          'Loading dataset "tips"...',
          'Extracting X="day", Y="total_bill"...',
          'Calculating aggregate defaults (mean)...',
          'Computing 95% confidence intervals (error bars)...',
          'Rendering Seaborn Barplot...',
          'Success: Average Bill Amount per Day displayed.'
        ];
        break;
      case 'hue_plot':
        outLines = [
          'Adding Hue parameter: "sex"',
          'Grouping data by Day and Gender...',
          'Splitting bars into Subgroups...',
          'Recalculating respective means and errors...',
          'Assigning color map for separation...',
          'Visualization updated: Comparison by Gender.'
        ];
        break;
      case 'agg_plot':
        outLines = [
          'Changing estimator from <mean> to <numpy.sum>...',
          'Aggregating total_bill items...',
          'Thursday Sum: ~$1096',
          'Friday Sum: ~$325',
          'Saturday Sum: ~$1778',
          'Sunday Sum: ~$1627',
          'Highest grossing day: Saturday visualized.'
        ];
        break;
      case 'style_plot':
        outLines = [
          'Applying palette="viridis"...',
          'Disabled confidence intervals (ci=None)...',
          'Swapping X and Y axes...',
          'Orientation: Horizontal',
          'Adding custom labels...',
          'Styled horizontal bar plot rendered.'
        ];
        break;
      case 'salary_example':
        outLines = [
          'Building DataFrame from raw Dictionary...',
          '[HR, IT, Sales, HR, IT, Sales] -> Categorical',
          'Mapping Salary aggregates...',
          'HR Avg: $31,000',
          'IT Avg: $51,000',
          'Sales Avg: $46,000',
          'Generating business presentation plot.'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  const newLocal = <Lightbulb className="w-10 h-10 text-amber-400 mr-4" />;
  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Header Area */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-violet-100 dark:bg-violet-900/30 rounded-3xl mb-8 shadow-sm border border-violet-200 dark:border-violet-800/50">
          <BarChart3 className="w-12 h-12 text-violet-600 dark:text-violet-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-full text-[10px] font-bold mb-6 border border-violet-500/20 tracking-[0.25em] uppercase">
          Seaborn Basics
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Bar Plots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Compare averages across categories instantly. Automatically calculate aggregate values and showcase confidence intervals beautifully with pandas DataFrames.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-violet-500 rounded-2xl shadow-lg shadow-violet-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is a Bar Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-violet-500 pl-6">
              "A Seaborn bar plot is used to compare numerical values across categories. Unlike basic bar charts, it automatically aggregates data and shows confidence intervals."
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                 <Target className="w-5 h-5 mr-3 text-violet-500" />
                 When to use barplot()
               </h3>
               <div className="grid grid-cols-1 gap-3">
                  {[
                    "Compare average values (e.g., avg salary per department)",
                    "Show group comparisons with hue splitting",
                    "Visualize categorical vs numerical data efficiently"
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                       <span className="w-2 h-2 rounded-full bg-violet-500 mr-4"></span>
                       <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-violet-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Code className="w-8 h-8 text-violet-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Basic Syntax</h2>
              </div>
              
              <div className="bg-slate-950/80 p-6 rounded-3xl border border-violet-500/20 mb-6 font-mono text-sm text-slate-300">
                <span className="text-fuchsia-400">import</span> seaborn <span className="text-fuchsia-400">as</span> sns<br/><br/>
                sns.<span className="text-violet-400">barplot</span>(<br/>
                &nbsp;&nbsp;x=<span className="text-amber-300">None</span>,<br/>
                &nbsp;&nbsp;y=<span className="text-amber-300">None</span>,<br/>
                &nbsp;&nbsp;data=<span className="text-amber-300">None</span>,<br/>
                &nbsp;&nbsp;estimator=<span className="text-sky-300">np.mean</span>,<br/>
                &nbsp;&nbsp;ci=<span className="text-emerald-300">95</span><br/>
                )
              </div>

              <div className="mt-auto p-5 bg-white/5 rounded-[2rem] border border-violet-500/30 flex items-center shadow-2xl shadow-violet-500/10">
                <Sparkles className="w-5 h-5 text-violet-400 mr-4 shrink-0" />
                <p className="text-[11px] text-violet-200/80 font-bold uppercase tracking-[0.15em] leading-relaxed">
                  Key Parameters: x/y (features), data (dataset), estimator (math function), ci (confidence interval), hue (grouping)
                </p>
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Bar Plot Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.barplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basics', icon: BarChart3 },
              { id: 'hue', label: 'Grouping', icon: Layers },
              { id: 'stats', label: 'Estimators', icon: Activity },
              { id: 'styling', label: 'Styling', icon: Palette },
              { id: 'real_world', label: 'Real Case', icon: History }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
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
                    <Code className="w-6 h-6 mr-4" />
                    Basic Bar Plot
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Let's use the built-in "tips" dataset to show the <b>average</b> total bill per day.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <button onClick={() => runDemo('basic_plot')} className="absolute bottom-6 right-6 p-4 bg-violet-600 text-white rounded-2xl shadow-xl hover:bg-violet-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                          <code className="block text-fuchsia-400 mb-2">import seaborn as sns</code>
                          <code className="block text-fuchsia-400 mb-2">import matplotlib.pyplot as plt</code>
                          <code className="block mt-4 text-slate-500 italic"># Load Dataset</code>
                          <code className="block mb-4">df = sns.<span className="text-sky-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)</code>
                          <code className="block text-slate-500 italic"># Basic Bar Plot</code>
                          <code className="block text-violet-400 font-bold tracking-widest mb-4">sns.barplot(x="day", y="total_bill", data=df)</code>
                          <code className="block text-sky-400">plt.title(<span className="text-amber-300">"Average Bill Amount per Day"</span>)</code>
                          <code className="block">plt.show()</code>
                        </pre>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-violet-100 dark:border-violet-900/20">
                       <h4 className="text-xs font-extrabold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3 flex items-center">
                         <Info className="w-4 h-4 mr-2" />
                         Output Explanation
                       </h4>
                       <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 font-medium">
                          <li>• <b>Each bar</b> = average (mean) total bill for that day.</li>
                          <li>• <b>Error lines (whiskers)</b> = confidence interval (data variability).</li>
                       </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Grouping */}
              {activeTab === 'hue' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-sky-500">
                    <Layers className="w-6 h-6 mr-4" />
                    Adding Hue (Grouping)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    The <code>hue</code> parameter splits the bars into further subcategories, instantly creating side-by-side grouped bars.
                  </p>
                  
                  <div className="bg-slate-950 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-sm leading-8 text-slate-300">
                        <span className="text-slate-500"># Splits each bar into Male vs Female</span><br/>
                        sns.<span className="text-violet-400">barplot</span>(<br/>
                        &nbsp;&nbsp;x=<span className="text-amber-300">"day"</span>, <br/>
                        &nbsp;&nbsp;y=<span className="text-amber-300">"total_bill"</span>, <br/>
                        &nbsp;&nbsp;<span className="text-fuchsia-400 font-bold underline">hue="sex"</span>, <br/>
                        &nbsp;&nbsp;data=df<br/>
                        )<br/>
                        plt.title(<span className="text-amber-300">"Average Bill by Day and Gender"</span>)<br/>
                        plt.show()
                     </pre>
                  </div>
                  <div className="flex justify-end pt-4">
                     <button onClick={() => runDemo('hue_plot')} className="px-10 py-5 bg-sky-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-sky-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Run Grouping Logic</button>
                  </div>
                </div>
              )}

              {/* Tab: Stats */}
              {activeTab === 'stats' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8 focus:outline-none">
                  <div className="flex items-center justify-between border-b dark:border-slate-800 pb-6">
                    <h3 className="text-2xl font-bold text-amber-500 flex items-center">
                      <Activity className="w-6 h-6 mr-4" />
                      Change Aggregation
                    </h3>
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    By default, barplot calculates the <b>mean</b>. You can change this using the <code>estimator</code> parameter to calculate sums, medians, or custom statistics.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl">
                     <pre className="font-mono text-sm leading-relaxed text-slate-300">
                        <span className="text-fuchsia-400">import</span> numpy <span className="text-fuchsia-400">as</span> np<br/><br/>
                        <span className="text-slate-500"># Calculate SUM instead of Mean</span><br/>
                        sns.<span className="text-violet-400">barplot</span>(<br/>
                        &nbsp;&nbsp;x=<span className="text-amber-300">"day"</span>, <br/>
                        &nbsp;&nbsp;y=<span className="text-amber-300">"total_bill"</span>, <br/>
                        &nbsp;&nbsp;data=df, <br/>
                        &nbsp;&nbsp;<span className="text-amber-400 font-bold underline">estimator=np.sum</span><br/>
                        )<br/>
                        plt.title(<span className="text-amber-300">"Total Bill per Day (Sum)"</span>)<br/>
                        plt.show()
                     </pre>
                  </div>
                  
                  <button onClick={() => runDemo('agg_plot')} className="w-full py-5 bg-amber-500 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-amber-400 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Estimator</button>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-fuchsia-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Palette className="w-6 h-6 mr-4" />
                    Appearance & Orientation
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                     {[
                       { p: 'palette="viridis"', d: "Changes the color scheme" },
                       { p: 'ci=None', d: "Removes error bars (cleaner UI)" },
                       { p: 'y="day", x="bill"', d: "Creates a Horizontal bar plot" }
                     ].map((item, i) => (
                       <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                          <code className="text-xs font-bold text-fuchsia-500 mb-2 block">{item.p}</code>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.d}</p>
                       </div>
                     ))}
                  </div>

                  <div className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800">
                     <pre className="font-mono text-sm text-slate-300 leading-relaxed">
                        <span className="text-slate-500"># Horizontal Styling</span><br/>
                        sns.barplot(<br/>
                        &nbsp;&nbsp;<span className="text-sky-400">y</span>=<span className="text-amber-300">"day"</span>, <br/>
                        &nbsp;&nbsp;<span className="text-sky-400">x</span>=<span className="text-amber-300">"total_bill"</span>,<br/>
                        &nbsp;&nbsp;data=df,<br/>
                        &nbsp;&nbsp;<span className="text-emerald-400 font-bold">palette</span>=<span className="text-amber-300">"viridis"</span>,<br/>
                        &nbsp;&nbsp;<span className="text-emerald-400 font-bold">ci</span>=<span className="text-sky-300">None</span><br/>
                        )
                     </pre>
                  </div>
                  <button onClick={() => runDemo('style_plot')} className="w-full py-5 bg-fuchsia-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-fuchsia-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Apply Styling Options</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-10">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <TrendingUp className="w-6 h-6 mr-4" />
                    Real-World Business Use Case
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    It's common to visualize simple pandas DataFrames directly from SQL queries or CSVs to compare metrics like salaries across departments.
                  </p>

                  <div className="bg-slate-950 p-8 rounded-[3.5rem] border border-slate-800 shadow-2xl relative group overflow-hidden">
                     <pre className="font-mono text-sm leading-7 text-slate-300 relative z-10">
                       <span className="text-fuchsia-400">import</span> pandas <span className="text-fuchsia-400">as</span> pd<br/><br/>
                       data = pd.<span className="text-sky-400">DataFrame</span>({'{'}<br/>
                       &nbsp;&nbsp;<span className="text-amber-300">"Department"</span>: [<span className="text-amber-300">"HR", "IT", "Sales", "HR", "IT", "Sales"</span>],<br/>
                       &nbsp;&nbsp;<span className="text-amber-300">"Salary"</span>: [<span className="text-emerald-400">30000, 50000, 45000, 32000, 52000, 47000</span>]<br/>
                       {'}'})<br/><br/>
                       sns.<span className="text-violet-400">barplot</span>(x=<span className="text-amber-300">"Department"</span>, y=<span className="text-amber-300">"Salary"</span>, data=data)<br/>
                       plt.title(<span className="text-amber-300">"Average Salary by Department"</span>)
                     </pre>
                  </div>

                  <button onClick={() => runDemo('salary_example')} className="w-full py-5 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Analyze Department Salaries</button>
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
                        SNS_BARPLOT_ENV
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
                        <BarChart3 className="w-16 h-16 opacity-5 animate-pulse" />
                        <div className="text-center relative">
                           <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Waiting for Execution</span>
                           <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-violet-500/50 mr-4 font-black select-none text-[8px] mt-1">[{i+1}]</span>
                              <span className={`leading-relaxed font-medium ${
                                line.includes('Success') || line.includes('visualized') ? 'text-emerald-400 font-bold' :
                                line.includes('Grouping') || line.includes('Splitting') ? 'text-sky-400' :
                                line.includes('Highest') || line.includes('Sum:') ? 'text-amber-400' :
                                line.includes('Avg:') ? 'text-violet-300 font-bold' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                           <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Ready</span>
                           <button onClick={resetConsole} className="text-[9px] text-violet-500 hover:text-violet-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-violet-500/20 pb-0.5">CLEAR</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-emerald-500/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Zap className="w-8 h-8 text-emerald-500 mr-4" />
               Key Insights <span className="text-xs ml-3 px-2 py-1 bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400 rounded-full uppercase tracking-widest">Very Important</span>
             </h2>

             <div className="space-y-6">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-emerald-400 mb-2">✔ Shows Aggregates, NOT Raw Values</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                     Unlike a standard chart that plots exact row values, barplot calculates the mean by default. Always double check with Pandas:
                   </p>
                   <code className="text-xs bg-slate-200 dark:bg-slate-950 p-2 rounded mt-3 block font-mono text-emerald-600 dark:text-emerald-400">
                     df.groupby("day")["total_bill"].mean()
                   </code>
                </div>
                
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-emerald-400 mb-2">✔ Error Bars = Uncertainty</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                     The little lines on top of the bars help you understand data variability and the reliability of the mean.
                   </p>
                </div>
             </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-rose-50 dark:bg-rose-950/20 p-10 rounded-[3rem] shadow-xl border border-rose-500/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-2 h-full bg-rose-500"></div>
             <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400 mb-6 flex items-center">
               <AlertTriangle className="w-8 h-8 mr-4" />
               Common Mistakes
             </h2>

             <div className="space-y-4">
                {[
                  { m: "Using barplot for raw counts", fx: "Use countplot() instead if you want to count occurrences." },
                  { m: "Misinterpreting bars as exact values", fx: "Remember: they are averages or sums depending on your estimator." },
                  { m: "Ignoring error bars entirely", fx: "They are crucial! They show statistical uncertainty in your data." }
                ].map((mistake, i) => (
                   <div key={i} className="flex items-start p-4 bg-white dark:bg-slate-900 rounded-2xl border border-rose-100 dark:border-rose-900/50">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900 dark:text-rose-400 flex items-center justify-center font-bold mr-4 shrink-0">X</div>
                      <div>
                         <p className="font-bold text-slate-800 dark:text-slate-200 mb-1">{mistake.m}</p>
                         <p className="text-sm text-slate-600 dark:text-slate-400 italic">👉 {mistake.fx}</p>
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
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 to-fuchsia-900/20 z-0"></div>
          
          <div className="relative z-10 mb-16 text-center">
             <h2 className="text-4xl font-black text-white mb-4 flex items-center justify-center">
               {newLocal}
               Pro Tips (From Experience)
             </h2>
             <p className="text-lg text-slate-300 font-medium tracking-tight">Level up your Seaborn visualizations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
             {[
               { t: "Clean UI without Error Bars", c: "sns.barplot(..., ci=None)", d: "Aesthetics often demand cleaner looks. Remove confidence intervals for pure presentations." },
               { t: "Use Median for Skewed Data", c: "sns.barplot(..., estimator=np.median)", d: "Means are heavily impacted by outliers. Median gives a better representation for skewed data." },
               { t: "Sort Bars for Readability", c: "order = df.groupby('day')['bill'].mean().sort_values().index\nsns.barplot(..., order=order)", d: "Instead of random categorical orders, visually rank bars from highest to lowest." },
               { t: "Global Styling Combo", c: "sns.set_style('whitegrid')", d: "Run this once at the top of your notebook to make all plots look vastly more professional." }
             ].map((tip, i) => (
               <div key={i} className="flex flex-col p-8 bg-slate-950/60 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:bg-slate-950 shadow-xl transition-all group">
                  <h4 className="font-extrabold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center mr-3 text-sm">🚀</span>
                    {tip.t}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{tip.d}</p>
                  <code className="bg-black/50 p-4 rounded-2xl text-violet-300 font-mono text-xs whitespace-pre-wrap font-bold border border-violet-500/20 group-hover:border-violet-500/50 transition-colors">
                    {tip.c}
                  </code>
               </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SbBarplot;
