import React, { useState } from 'react';
<<<<<<< HEAD
import { 
  Box, Info, Code, Terminal, 
  Layers, Maximize2, Play, Lightbulb, 
  Zap, CheckCircle2, AlertCircle, Sparkles,
  BarChart3, Activity, Target, Search,
  ClipboardList, ArrowUpDown, TrendingUp,
  Layout, Palette, History, MousePointer2
} from 'lucide-react';

const MplBox: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'multi' | 'outliers' | 'styling' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_box':
        outLines = [
          'Calculating Five-Number Summary...',
          'Median: 17.5',
          'Q1 (25%): 13.0',
          'Q3 (75%): 19.5',
          'Min: 10, Max: 24',
          'Rendering Box Plot...',
          'Success: Distribution visualized.'
        ];
        break;
      case 'multi_box':
        outLines = [
          'Loading Scores: [Math, Science, English]',
          'Calculating distributions per category...',
          'Math Median: 80.0',
          'Science Median: 78.0',
          'English Median: 79.0',
          'Executing plt.boxplot(data)',
          'Mapping X-Ticks: [1, 2, 3] -> ["Math", "Science", "English"]',
          'Rendering comparison complete.'
        ];
        break;
      case 'outlier_detect':
        outLines = [
          'Dataset: [10, 12, 13, 15, 16, 18, 19, 20, 100]',
          'Thresholding IQR range...',
          'Upper Bound reached at ~30.0',
          'Outlier detected: 100',
          'Plotting main box from 10 to 20',
          'Individual point rendered for value 100.'
        ];
        break;
      case 'style_box':
        outLines = [
          'Property update: patch_artist=True',
          'Property update: vert=True',
          'Enabling fill color for boxes...',
          'Adjusting box width to default 0.5',
          'Rendering styled distribution.'
        ];
        break;
      case 'salary_example':
        outLines = [
          'Loading Employee Salaries...',
          'Majority spread: $30k - $50k',
          'CEO/Exec Outlier: $90,000',
          'Generating skewness report...',
          'Median Salary: $42,000',
          'Visualization successful.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Checking Temperature Data...',
          'City A: [30, 32, 34, 33, 31, 29, 35]',
          'City B: [25, 27, 26, 28, 30, 29, 31]',
          'Validation: Two-city comparison detected.',
          'Labels: City A, City B verified.',
          'Result: Correct! Statistical spread mapped accurately.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl mb-8 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
          <Box className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-bold mb-6 border border-emerald-500/20 tracking-[0.25em] uppercase">
          Lesson 0.9
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Box Plots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Unlock statistical insights. Visualize data distribution, medians, and outliers through the precision of Box-and-Whisker plots.
        </p>
      </header>

      {/* 2. Statistical Foundation */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is a Box Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed italic border-l-4 border-emerald-500 pl-6">
              "A statistical visualization used to show the distribution of data based on quartiles. It helps us understand spread, median, variability, and outliers."
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest">
                 <History className="w-5 h-5 mr-3 text-emerald-500" />
                 2️⃣ The Five-Number Summary
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { t: "Minimum", d: "Smallest value", color: "text-slate-400" },
                    { t: "Q1", d: "25% below", color: "text-emerald-400" },
                    { t: "Median", d: "Middle 50%", color: "text-emerald-600 dark:text-emerald-400 font-bold" },
                    { t: "Q3", d: "75% below", color: "text-emerald-400" },
                    { t: "Maximum", d: "Largest value", color: "text-slate-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                       <span className={`text-xs ${stat.color} mb-1 uppercase font-bold tracking-tighter`}>{stat.t}</span>
                       <span className="text-[11px] text-slate-500 font-medium">{stat.d}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-emerald-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Target className="w-8 h-8 text-emerald-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">3️⃣ Component Breakdown</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                 {[
                   { t: "The Box", d: "Represents the Interquartile Range (Q1 to Q3).", i: Layout },
                   { t: "Median Line", d: "The theoretical middle value of the dataset.", i: Maximize2 },
                   { t: "Whiskers", d: "Lines extending to the Min and Max values.", i: ArrowUpDown },
                   { t: "Outliers", d: "Data points far outside the normal range.", i: Search }
                 ].map((part, i) => (
                   <div key={i} className="flex items-start p-5 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors group/item">
                      <div className="p-3 bg-emerald-500/20 rounded-xl mr-5 group-hover/item:rotate-6 transition-transform">
                        <part.i className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{part.t}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">{part.d}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="mt-auto p-5 bg-white/5 rounded-[2rem] border border-emerald-500/30 flex items-center shadow-2xl shadow-emerald-500/10 animate-pulse">
                <Sparkles className="w-5 h-5 text-emerald-400 mr-4" />
                <p className="text-[11px] text-emerald-200/80 font-bold uppercase tracking-[0.2em] leading-relaxed">
                  Excellent for identifying Skewness & Anomalies
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
            <div className="p-4 bg-emerald-100 dark:bg-emerald-900/40 rounded-3xl mr-6 border border-emerald-200 dark:border-emerald-800">
              <Terminal className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Box Plot Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">4️⃣ Function: plt.boxplot(data)</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basics', icon: Box },
              { id: 'multi', label: 'Multi-Set', icon: Layers },
              { id: 'outliers', label: 'Outliers', icon: Search },
              { id: 'styling', label: 'Styling', icon: Palette },
              { id: 'real_world', label: 'Real Case', icon: History }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30' 
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
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-emerald-600 dark:text-emerald-400">
                    <Code className="w-6 h-6 mr-4" />
                    5️⃣ Basic Box Plot Example
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      In Matplotlib, box plots are designed to visualize distribution through a singular function call.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <button onClick={() => runDemo('basic_box')} className="absolute bottom-6 right-6 p-4 bg-emerald-600 text-white rounded-2xl shadow-xl hover:bg-emerald-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                          <code className="block mb-2 text-blue-400">import matplotlib.pyplot as plt</code>
                          <code className="block text-slate-500 italic mb-4"># Random dataset summary</code>
                          <code className="block">data = [<span className="text-emerald-400">12, 15, 14, 10, 18, 20, 22, 24, 19, 17</span>]</code>
                          <code className="block mt-8 text-emerald-400 font-bold tracking-widest uppercase">plt.boxplot(data)</code>
                          <code className="block mt-4">plt.title(<span className="text-amber-400">"Basic Box Plot"</span>)</code>
                          <code className="block mt-4 text-slate-400">plt.show()</code>
                        </pre>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-emerald-100 dark:border-emerald-900/20">
                       <h4 className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3 flex items-center">
                         <Activity className="w-4 h-4 mr-2" />
                         Output Analysis
                       </h4>
                       <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 leading-relaxed font-medium">
                          <li>• <b>Median Line:</b> The yellow horizontal line inside the box.</li>
                          <li>• <b>The Box:</b> Covers the range from Q1 (13.0) to Q3 (19.5).</li>
                          <li>• <b>Whiskers:</b> Extend to the 10 and 24 bounds.</li>
                       </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Multi-Set */}
              {activeTab === 'multi' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500">
                    <Layers className="w-6 h-6 mr-4" />
                    6️⃣ Multiple Datasets Comparison
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium italic">Comparison of Student Score Distribution across 3 subjects.</p>
                  
                  <div className="bg-slate-950 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl">
                     <pre className="font-mono text-xs leading-6 text-slate-400">
                       {`math = [70, 75, 80, 85, 90]
science = [65, 70, 78, 82, 88]
english = [72, 76, 79, 83, 91]

data = [math, science, english]
plt.boxplot(data) # List of lists

# Customizing X-Ticks for identification
plt.xticks([1, 2, 3], ["Math", "Science", "English"])`}
                     </pre>
                  </div>
                  <div className="flex justify-end pt-4">
                     <button onClick={() => runDemo('multi_box')} className="px-10 py-5 bg-indigo-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-indigo-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Multi-Box Simulation</button>
                  </div>
                </div>
              )}

              {/* Tab: Outliers */}
              {activeTab === 'outliers' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-10 focus:outline-none overflow-y-auto no-scrollbar max-h-[600px] pr-2">
                  <div className="flex items-center justify-between border-b dark:border-slate-800 pb-6">
                    <h3 className="text-2xl font-bold text-rose-500 flex items-center">
                      <Search className="w-6 h-6 mr-4" />
                      7️⃣ Detecting Outliers
                    </h3>
                  </div>

                  <div className="flex gap-4 items-stretch h-32">
                     <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Standard Set</span>
                        <span className="text-sm font-mono text-emerald-500">10, 12, 13, 15... 20</span>
                     </div>
                     <div className="flex items-center text-slate-300">
                        <ArrowUpDown className="rotate-90" />
                     </div>
                     <div className="flex-1 bg-rose-500/5 rounded-2xl border border-rose-500/20 p-6 flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-1">Outlier Point</span>
                        <span className="text-sm font-mono text-rose-500 font-bold tracking-widest">100</span>
                     </div>
                  </div>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl">
                     <pre className="font-mono text-sm leading-relaxed text-slate-300">
                        <span className="text-slate-500"># 100 will appear as an outlier dot</span><br/>
                        data = [<span className="text-emerald-400">10, 12, 13, 15, 16, 18, 19, 20</span>, <span className="text-rose-500 font-bold underline">100</span>]<br/>
                        plt.boxplot(data)<br/>
                        plt.show()
                     </pre>
                  </div>
                  
                  <button onClick={() => runDemo('outlier_detect')} className="w-full py-5 bg-rose-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-rose-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Run Detection Logic</button>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-10">
                  <h3 className="text-2xl font-bold text-amber-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Palette className="w-6 h-6 mr-4" />
                    8️⃣ Customizing Appearance
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                     {[
                       { p: "vert", d: "Vertical (True) or Horizontal (False)", v: "bool" },
                       { p: "patch_artist", d: "Allows box color (bg) fills", v: "bool" },
                       { p: "widths", d: "Controls the thickness of boxes", v: "float" },
                       { p: "showmeans", d: "Explicitly marks the Mean point", v: "bool" }
                     ].map((item, i) => (
                       <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-amber-500/5 transition-colors group">
                          <code className="text-xs font-bold text-amber-500 mb-2 block group-hover:scale-110 transition-transform origin-left">{item.p}</code>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-medium mb-2">{item.d}</p>
                          <span className="text-[9px] px-2 py-0.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-full text-slate-400 font-bold uppercase">{item.v}</span>
                       </div>
                     ))}
                  </div>

                  <div className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800">
                     <pre className="font-mono text-sm text-slate-300">
                        plt.boxplot(data, <span className="text-emerald-400">vert=True</span>, <span className="text-amber-400">patch_artist=True</span>)
                     </pre>
                  </div>
                  <button onClick={() => runDemo('style_box')} className="w-full py-5 bg-amber-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-amber-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Apply Styling Simulation</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-10">
                  <h3 className="text-2xl font-bold text-emerald-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <TrendingUp className="w-6 h-6 mr-4" />
                    9️⃣ Salary Distribution Case
                  </h3>
                  
                  <div className="flex gap-6 items-center flex-col sm:flex-row bg-emerald-500/5 p-8 rounded-3xl border border-emerald-500/10">
                    <div className="p-4 bg-emerald-500 rounded-3xl shadow-lg ring-4 ring-emerald-500/20">
                       <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      In the corporate world, box plots are used to quickly identify the <b>Median Salary</b>, pay spread, and <b>Executive Outliers</b> what might skew the average.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-10 rounded-[3.5rem] border border-slate-800 shadow-2xl relative group overflow-hidden">
                     {/* Floating Outlier Indicator */}
                     <div className="absolute top-10 right-10 flex flex-col items-center animate-bounce">
                        <div className="px-3 py-1 bg-rose-500 text-white text-[9px] font-bold rounded-full mb-1">$90,000 !!</div>
                        <div className="w-0.5 h-12 bg-rose-500/30"></div>
                     </div>
                     
                     <pre className="font-mono text-sm leading-8 text-slate-300 relative z-10">
                       salary = [<br/>
                       &nbsp;&nbsp;<span className="text-emerald-400">30k, 35k, 37k, 40k, 42k, 45k, 48k, 50k</span>,<br/>
                       &nbsp;&nbsp;<span className="text-rose-500 font-bold underline">90000</span> <span className="text-slate-600 font-normal italic"># Outlier</span><br/>
                       ]<br/>
                       plt.boxplot(salary)<br/>
                       plt.title("Employee Distribution")
                     </pre>
                  </div>

                  <button onClick={() => runDemo('salary_example')} className="w-full py-5 bg-emerald-700 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-600 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Case Study Analysis</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
             {/* Terminal Output Console */}
             <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] group-hover/terminal:bg-emerald-500/10 transition-all duration-1000"></div>
               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-emerald-500" />
                      <h3 className="font-bold text-slate-600 uppercase text-[10px] tracking-[0.3em] font-mono">
                        MPL_BOX_SIM_v4
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                        <History className="w-16 h-16 opacity-5 animate-spin-slow" />
                        <div className="text-center relative">
                           <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Waiting for Data Stream</span>
                           <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-emerald-500/30 mr-4 font-black select-none text-[8px] mt-1 italic">BOX::</span>
                              <span className={`leading-relaxed font-medium ${
                                line.includes('Success') || line.includes('Correct') ? 'text-emerald-400 font-bold' :
                                line.includes('Distribution') || line.includes('Rendering') ? 'text-blue-400' :
                                line.includes('Median') || line.includes('Calculating') ? 'text-amber-400' :
                                line.includes('Outlier') ? 'text-rose-500 font-bold' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                           <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution Buffer Clear</span>
                           <button onClick={resetConsole} className="text-[9px] text-emerald-500 hover:text-emerald-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-emerald-500/20 pb-0.5">RESET</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Teaching Roadmap Visual */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-10 rounded-[4rem] border border-white/10 shadow-xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-extrabold text-[10px] mb-8 flex items-center uppercase tracking-[0.4em]">
                 <ClipboardList className="w-4 h-4 text-amber-400 mr-3" />
                 Learning Roadmap
               </h4>
               <div className="space-y-3 relative">
                  <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-white/5 -z-0"></div>
                  {[
                    "Line Plot", "Bar Chart", "Scatter Plot", "Histogram", "Box Plot"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center group/item cursor-default">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500 z-10 ${i === 4 ? 'bg-emerald-500 shadow-xl shadow-emerald-500/30 rotate-12' : 'bg-white/5 border border-white/5'}`}>
                          <span className={`text-xs font-black ${i === 4 ? 'text-white' : 'text-slate-600'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-bold tracking-wider transition-colors duration-300 ${i === 4 ? 'text-white underline underline-offset-8 decoration-emerald-500' : 'text-slate-500 group-hover/item:text-slate-300'}`}>{item}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Tips Grid */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="bg-white dark:bg-slate-900 p-12 sm:p-20 rounded-[4.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 p-16 opacity-[0.02] pointer-events-none transform -rotate-12 scale-150">
             <TrendingUp className="w-96 h-96 text-emerald-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20 gap-8 relative z-10">
             <div>
               <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 flex items-center">
                 <Zap className="w-10 h-10 text-amber-500 mr-6" />
                 Pro Tips & Tricks
               </h2>
               <p className="text-lg text-slate-500 dark:text-slate-400 font-medium tracking-tight">Expert strategies for exploratory data analysis (EDA).</p>
             </div>
             <div className="h-0.5 w-40 bg-emerald-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
             {[
               { t: "Statistical Focus", d: "Box plots are best for statistical comparisons, not simple category tallies. Use them to see variation.", i: ClipboardList, c: "text-indigo-500" },
               { t: "Master of Comparison", d: "Their true power shines when comparing multiple groups (e.g., Dept A vs Dept B salaries).", i: Layers, c: "text-emerald-500" },
               { t: "The Distribution Duo", d: "Combine Box Plots with Histograms. Histograms show shape; Box Plots show summary stats.", i: Maximize2, c: "text-amber-500" },
               { t: "The EDA Tool", d: "Standard in Exploratory Data Analysis (EDA) to quickly detect skewness and data quality issues.", i: Search, c: "text-rose-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group">
                 <div className={`p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] mr-8 group-hover:bg-white dark:group-hover:bg-slate-950 shadow-sm transition-all duration-500 ${tip.c} bg-opacity-10 group-hover:scale-105`}>
                    <tip.i className="w-8 h-8" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 transition-colors uppercase tracking-[0.2em] text-xs">⭐ {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-medium">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Final Practice Challenge */}
      <section className="max-w-5xl mx-auto pb-24 px-6">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-800 p-12 sm:p-24 rounded-[5.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px] -z-0"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-20 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center px-5 py-2 bg-white/20 text-white rounded-full text-[10px] font-black mb-10 border border-white/20 tracking-[0.3em] uppercase">
                🎯 Performance Challenge
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                Temperature Spread Analysis
              </h2>
              <p className="text-emerald-100 text-lg mb-12 leading-relaxed font-medium">
                Create a comparative box plot for two cities: <b>City A</b> and <b>City B</b>. Visualize their weekly high temperature variability and confirm the summary stats.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                 <div className="px-6 py-3 bg-white/10 text-white font-mono text-xs rounded-2xl border border-white/10 backdrop-blur-md">city1 = [30..35]</div>
                 <div className="px-6 py-3 bg-white/10 text-white font-mono text-xs rounded-2xl border border-white/10 backdrop-blur-md">city2 = [25..31]</div>
              </div>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-slate-950 text-emerald-400 hover:bg-slate-900 px-12 py-6 rounded-[2.5rem] text-[11px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 border border-emerald-500/20 italic tracking-widest uppercase"
               >
                 <Play className="w-5 h-5 mr-4 fill-emerald-400 group-hover/btn:scale-125 transition-transform" />
                 SUBMIT & VALIDATE VISUALS
               </button>
            </div>

            <div className="w-full xl:w-[450px] relative">
               <div className="bg-[#080808] rounded-[4.5rem] border border-white/10 p-12 relative shadow-2xl overflow-hidden w-full group-hover:scale-[1.02] transition-transform duration-700">
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/40"></div>
                       <div className="w-3 h-3 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/40"></div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-600 font-bold uppercase tracking-[0.4em] opacity-50">Distrib_v2.mp4</span>
                  </div>

                  {/* Simulated Box Plot Comparisons */}
                  <div className="h-56 flex items-center justify-around px-4 relative">
                     <div className="absolute inset-0 flex flex-col justify-between py-6 px-10 opacity-10 pointer-events-none">
                        <div className="w-full h-px bg-white/50"></div>
                        <div className="w-full h-px bg-white/50"></div>
                        <div className="w-full h-px bg-white/50"></div>
                        <div className="w-full h-px bg-white/50"></div>
                     </div>
                     
                     {/* City A Visual */}
                     <div className="flex flex-col items-center h-full justify-center group/v1">
                        <div className="w-0.5 h-16 bg-white/20"></div>
                        <div className="w-10 h-24 bg-emerald-500/80 rounded-lg border border-white/20 relative flex items-center shadow-lg shadow-emerald-500/20 animate-pulse">
                           <div className="absolute w-full h-0.5 bg-amber-400 z-10"></div>
                        </div>
                        <div className="w-0.5 h-12 bg-white/20 mt-[-2px]"></div>
                        <span className="mt-4 text-[9px] font-bold text-emerald-400 tracking-widest uppercase">City A</span>
                     </div>

                     {/* City B Visual */}
                     <div className="flex flex-col items-center h-full justify-center group/v2">
                        <div className="w-0.5 h-20 bg-white/20"></div>
                        <div className="w-10 h-16 bg-emerald-500/40 rounded-lg border border-white/20 relative flex items-center opacity-60">
                           <div className="absolute w-full h-0.5 bg-amber-400 z-10 top-1/2"></div>
                        </div>
                        <div className="w-0.5 h-10 bg-white/20 mt-[-2px]"></div>
                        <span className="mt-4 text-[9px] font-bold text-slate-500 tracking-widest uppercase">City B</span>
                     </div>
                  </div>
                  
                  <div className="mt-12 flex items-center justify-center gap-3 text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
                     <Activity className="w-3 h-3" />
                     Live Statistical Engine
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

=======
import {
  Box, Copy, Check, Info, ArrowRight,
  Maximize2, Terminal, Eye, Palette, 
  Activity, Code, List, BarChart2,
  TrendingUp, HeartPulse, Briefcase, Cpu
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'python' }: { codeSnippet: string, title?: string, language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-amber-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-amber-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
>>>>>>> 8e160902b63975ba55c058e2b2697ae2fb5543b6
    </div>
  );
};

<<<<<<< HEAD
export default MplBox;
=======
const ResultTable = ({ headers, rows }: { headers: string[], rows: (string | number | React.ReactNode)[][] }) => (
  <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-4 shadow-sm w-full font-sans">
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
            {row.map((cell, j) => (
               <td key={j} className="px-4 py-3">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MplBox: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950/20 min-h-screen font-sans">
      
      {/* 1. Header & Intro */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <Box className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Box Plot
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
           Visualizing data distribution and detecting outliers with Box-and-Whisker plots.
        </p>
      </header>

      {/* 1 & 2. Intro and Importance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-amber-500" /> 1. Introduction
          </h2>
          <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                A <strong>Box Plot</strong> (also called a Box-and-Whisker Plot) is a statistical chart used to show the distribution of numerical data.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-100 dark:border-amber-800/40">
                <p className="text-amber-800 dark:text-amber-300 text-sm font-bold mb-2 uppercase tracking-wider">It helps to visualize:</p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Median</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Quartiles</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Min Value</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Max Value</li>
                    <li className="flex items-center col-span-2"><Check className="w-4 h-4 text-green-500 mr-2" /> Outliers</li>
                </ul>
              </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <BarChart2 className="w-6 h-6 mr-3 text-orange-500" /> 2. Why Box Plots Are Important
          </h2>
          <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Box plots are essential tools for data analysts to understand the characteristics of their datasets quickly.
              </p>
              <ul className="space-y-3">
                  <li className="flex items-start">
                      <div className="p-1 bg-orange-100 dark:bg-orange-900/40 rounded-md mr-3 mt-1">
                          <Activity size={14} className="text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Understanding data spread</span>
                  </li>
                  <li className="flex items-start">
                      <div className="p-1 bg-orange-100 dark:bg-orange-900/40 rounded-md mr-3 mt-1">
                          <Activity size={14} className="text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Detecting outliers</span>
                  </li>
                  <li className="flex items-start">
                      <div className="p-1 bg-orange-100 dark:bg-orange-900/40 rounded-md mr-3 mt-1">
                          <Activity size={14} className="text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Comparing multiple datasets</span>
                  </li>
              </ul>
              
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">Example Case: Student Exam Scores</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">50, 60, 65, 70, 75, 80, 85, 90</p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 font-bold">A box plot quickly shows median, range, and unusual values.</p>
              </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Structure and Visualization */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
              
              <h2 className="text-3xl font-black mb-10 flex items-center border-b border-slate-700 pb-4">
                  <Maximize2 className="w-8 h-8 mr-3 text-amber-400" /> 3 & 4. Structure & Visualization
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                      <h3 className="text-xl font-bold flex items-center text-amber-100 mb-6">Statistical Elements</h3>
                      <ResultTable 
                        headers={['Element', 'Meaning']}
                        rows={[
                            [<span className="text-amber-400 font-bold">Minimum</span>, 'Lowest value'],
                            [<span className="text-amber-400 font-bold">Q1</span>, 'First quartile (25%)'],
                            [<span className="text-amber-400 font-bold">Median</span>, 'Middle value (50%)'],
                            [<span className="text-amber-400 font-bold">Q3</span>, 'Third quartile (75%)'],
                            [<span className="text-amber-400 font-bold">Maximum</span>, 'Highest value']
                        ]}
                      />
                  </div>
                  
                  <div className="flex flex-col">
                      <h3 className="text-xl font-bold flex items-center text-amber-100 mb-6 font-sans">Box Plot Diagram</h3>
                      <div className="bg-black/40 rounded-2xl p-6 border border-slate-700 flex-grow flex items-center justify-center">
                          <pre className="font-mono text-amber-300 text-xs sm:text-sm leading-relaxed overflow-x-auto text-center w-full">
{`Minimum   Q1     Median    Q3    Maximum
   |-------|-------|-------|-------|
           ┌───────────────┐
           │               │
-----------│       │       │-----------
           │               │
           └───────────────┘`}
                          </pre>
                      </div>
                      <div className="mt-6 bg-slate-800/50 p-4 rounded-xl text-sm border border-slate-700">
                          <ul className="space-y-2 text-slate-300">
                              <li><span className="text-amber-400 font-bold">• The box</span> shows the <strong>interquartile range</strong> (Q1 to Q3).</li>
                              <li><span className="text-amber-400 font-bold">• The line inside</span> represents the <strong>median</strong>.</li>
                              <li><span className="text-amber-400 font-bold">• The whiskers</span> show the range between <strong>min</strong> and <strong>max</strong>.</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. Matplotlib Box Plot Function */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
           
           <h2 className="text-3xl font-black mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
               <Terminal className="w-8 h-8 mr-3 text-amber-500" /> 5. Matplotlib Box Plot Function
           </h2>
           
           <div className="grid lg:grid-cols-12 gap-8 items-start">
               <div className="lg:col-span-5 relative z-10">
                   <p className="text-gray-600 dark:text-gray-300 mb-4">Matplotlib provides the function <code className="bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 px-1 font-bold rounded">plt.boxplot()</code>.</p>
                   <CodeSnippetBlock codeSnippet={`plt.boxplot(data)`} title="Syntax" />
               </div>
               
               <div className="lg:col-span-7">
                   <ResultTable 
                       headers={['Parameter', 'Description']}
                       rows={[
                           [<code className="text-amber-600 dark:text-amber-400 font-bold">data</code>, 'List or dataset to visualize'],
                           [<code className="text-amber-600 dark:text-amber-400 font-bold">vert</code>, 'Orientation (Vertical by default, set False for Horizontal)'],
                           [<code className="text-amber-600 dark:text-amber-400 font-bold">patch_artist</code>, 'Set to True to fill the box with color']
                       ]}
                   />
               </div>
           </div>
        </div>
      </section>

      {/* 6 & 7. Basic Example and Output */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Code className="w-6 h-6 mr-3 text-amber-500" /> 6. Basic Box Plot Example
                </h2>
                <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\ndata = [50, 60, 65, 70, 75, 80, 85, 90]\n\nplt.boxplot(data)\n\nplt.title("Student Score Distribution")\n\nplt.show()`} title="Python Code" />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Eye className="w-6 h-6 mr-3 text-orange-500" /> 7. Visualization Output
                </h2>
                
                <div className="bg-gray-950 rounded-xl p-6 font-mono text-amber-400 text-xs sm:text-sm overflow-x-auto shadow-inner mb-6 whitespace-pre leading-tight border border-gray-800 flex-grow items-center justify-center flex">
{`Scores
90 |           ─
85 |
80 |     ┌───────┐
75 |     │       │
70 |     │   │   │
65 |     │       │
60 |     └───────┘
55 |
50 |           ─`}
                </div>
                
                <div className="mt-auto bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-800/40">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Key Observations</p>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                        <li className="flex items-center"><ArrowRight size={12} className="mr-2 text-amber-500" /> The middle line is the <strong>Median</strong>.</li>
                        <li className="flex items-center"><ArrowRight size={12} className="mr-2 text-amber-500" /> The box shows the <strong>middle 50%</strong> of data.</li>
                    </ul>
                </div>
            </div>
      </section>

      {/* 8 & 9. Multiple Datasets */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-black mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <List className="w-8 h-8 mr-3 text-amber-500" /> 8 & 9. Box Plot for Multiple Datasets
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Box plots are extremely useful when you need to <strong>compare distributions</strong> across different groups or classes.
              </p>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nclass1 = [50, 60, 65, 70, 75]\nclass2 = [55, 65, 75, 85, 95]\nclass3 = [40, 50, 60, 70, 80]\n\ndata = [class1, class2, class3]\n\nplt.boxplot(data)\nplt.title("Class Score Comparison")\nplt.show()`} title="Comparing Classes Code" />
                  </div>
                  
                  <div className="flex flex-col space-y-6">
                      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-inner">
                          <p className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest text-center">Score Comparison Output</p>
                          <pre className="font-mono text-amber-400 text-xs sm:text-sm leading-loose text-center">
{`Scores

Class1      Class2      Class3
  │           │           │
 ┌───┐       ┌───┐       ┌───┐
 │ │ │       │ │ │       │ │ │
 └───┘       └───┘       └───┘`}
                          </pre>
                      </div>
                      <p className="text-center font-bold text-gray-500 dark:text-gray-400 italic">This allows easy comparison of score distributions between multiple classes.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 10 & 11. Horizontal and Colored Plots */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Maximize2 className="w-6 h-6 mr-3 text-amber-500 translate-rotate-90" /> 10. Horizontal Box Plot
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">Display the box plot horizontally using <code className="bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 px-1 font-bold rounded">vert=False</code>.</p>
                    <CodeSnippetBlock codeSnippet={`plt.boxplot(data, vert=False)`} title="Orientation Change" />
                    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-amber-400 font-mono text-xs overflow-x-auto select-none leading-loose">
{`Class1  ──────[  │  ]──────
Class2  ─────[  │  ]────────
Class3  ────[  │  ]────────`}
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Palette className="w-6 h-6 mr-3 text-orange-500" /> 11. Colored Box Plot
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">Add fill color to the box using <code className="bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 px-1 font-bold rounded">patch_artist=True</code>.</p>
                    <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\ndata = [50,60,65,70,75,80,85]\n\nplt.boxplot(data, patch_artist=True)\n\nplt.title("Colored Box Plot")\nplt.show()`} title="Styling Box" />
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-800/40 flex items-center">
                        <Info size={18} className="text-orange-500 mr-3 shrink-0" />
                        <p className="text-sm text-gray-700 dark:text-gray-300">Enabling <code className="font-bold">patch_artist</code> allows deeper customization of colors and borders.</p>
                    </div>
                </div>
            </div>
      </section>

      {/* 12. Detecting Outliers */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]"></div>
             
             <h2 className="text-3xl font-black mb-10 flex items-center relative z-10 border-b border-white/20 pb-4">
                 <Activity className="w-8 h-8 mr-3 text-amber-200" /> 12. Detecting Outliers
             </h2>
             
             <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                 <div className="space-y-6">
                     <p className="text-lg text-amber-50">
                        Box plots automatically detect and highlight <strong>outliers</strong> — data points that are significantly different from the rest of the observations.
                     </p>
                     <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <p className="text-xs uppercase font-bold text-amber-200 mb-2">Example Dataset</p>
                        <p className="font-mono text-xl">50, 55, 60, 65, 70, <span className="text-red-300 font-black underline">200</span></p>
                     </div>
                 </div>
                 
                 <div className="bg-gray-900 rounded-3xl p-8 border border-white/10 shadow-inner flex flex-col items-center">
                    <pre className="font-mono text-amber-400 text-sm leading-relaxed mb-4 text-center">
{`        *
        |  ← Outlier
 ┌──────────────┐
 │      │       │
 └──────────────┘`}
                    </pre>
                    <p className="text-sm text-gray-400 font-medium bg-gray-950 px-4 py-2 rounded-full border border-gray-800">
                       Outliers appear as <span className="text-amber-400">dots/asterisks</span> outside the whiskers.
                    </p>
                 </div>
             </div>
          </div>
      </section>

      {/* 13. Real World Applications */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden text-center">
               <h2 className="text-3xl font-black mb-8 pb-4 text-gray-900 dark:text-white relative z-10">
                   13. Real World Applications
               </h2>
               <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">Box plots are widely used tools for identifying trends and anomalies across industries.</p>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 text-left">
                   
                   <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-blue-800 dark:text-blue-300 flex items-center mb-4">
                           <TrendingUp className="w-5 h-5 mr-2" /> Data Science
                       </h3>
                       <p className="text-sm font-bold text-blue-900 dark:text-blue-100 bg-blue-100 dark:bg-blue-800/50 p-2 rounded text-center">Compare Dataset Distributions</p>
                   </div>

                   <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-4">
                           <HeartPulse className="w-5 h-5 mr-2" /> Healthcare
                       </h3>
                       <p className="text-sm font-bold text-emerald-900 dark:text-emerald-100 bg-emerald-100 dark:bg-emerald-800/50 p-2 rounded text-center">Analyze Patient Statistics</p>
                   </div>

                   <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-indigo-800 dark:text-indigo-300 flex items-center mb-4">
                           <Briefcase className="w-5 h-5 mr-2" /> Business Analytics
                       </h3>
                       <p className="text-sm font-bold text-indigo-900 dark:text-indigo-100 bg-indigo-100 dark:bg-indigo-800/50 p-2 rounded text-center">Compare Product Sales</p>
                   </div>
                   
                   <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-100 dark:border-purple-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-purple-800 dark:text-purple-300 flex items-center mb-4">
                           <Cpu className="w-5 h-5 mr-2" /> Machine Learning
                       </h3>
                       <p className="text-sm font-bold text-purple-900 dark:text-purple-100 bg-purple-100 dark:bg-purple-800/50 p-2 rounded text-center">Compare Model Performance</p>
                   </div>

               </div>

               <div className="mt-12 flex flex-col items-center">
                  <div className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <span className="text-gray-700 dark:text-gray-300 font-bold">Raw Data</span>
                    <ArrowRight className="text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-bold">Statistical Analysis</span>
                    <ArrowRight className="text-gray-400" />
                    <span className="text-amber-500 font-black">Box Plot Visualization</span>
                  </div>
               </div>
          </div>
      </section>

    </div>
  );
};

export default MplBox;
>>>>>>> 8e160902b63975ba55c058e2b2697ae2fb5543b6
