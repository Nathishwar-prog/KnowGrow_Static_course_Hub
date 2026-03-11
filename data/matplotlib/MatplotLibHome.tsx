import React, { useState } from 'react';
import { 
  BarChart3, LineChart, PieChart, ScatterChart, Activity, 
  Code, Terminal, Layout, Info, Layers, 
  Settings, Zap, CheckCircle2, AlertCircle, 
  Lightbulb, Play, Flame, Package, Download,
  ExternalLink, BarChart, MousePointer2
} from 'lucide-react';

const MatplotLibHome: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'intro' | 'setup' | 'first_plot' | 'components' | 'types'>('intro');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'install_pip':
        outLines = ['Collecting matplotlib', '  Downloading matplotlib-3.8.2-cp310-cp310-win_amd64.whl (7.6 MB)', 'Installing collected packages: matplotlib', 'Successfully installed matplotlib-3.8.2'];
        break;
      case 'install_conda':
        outLines = ['Collecting package metadata (current_repodata.json): done', 'Solving environment: done', '## Package Plan ##', '  environment location: /anaconda3', '  added / updated specs:', '    - matplotlib', 'The following packages will be downloaded:', '    matplotlib-3.8.2 | 7.6 MB', 'Proceed ([y]/n)? y', 'Downloading and Extracting Packages', 'matplotlib-3.8.2 | ########## | 100%', 'Preparing transaction: done', 'Verifying transaction: done', 'Executing transaction: done'];
        break;
      case 'first_plot':
        outLines = [
          'Plotting line chart...',
          'Adding title: "Simple Line Plot"',
          'Adding xlabel: "X Axis"',
          'Adding ylabel: "Y Axis"',
          'Displaying plot window...',
          'Done.'
        ];
        break;
      case 'sales_analysis':
        outLines = [
          'Monthly Sales Data Trend:',
          'Jan: 200',
          'Feb: 250',
          'Mar: 300',
          'Apr: 280',
          'Trend: Increasing growth observed until March with a slight dip in April.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Successfully created line plot!',
          'Labels: Year, Revenue',
          'Grid: Enabled',
          'Figure size: (8, 5)',
          'Result: Plot displayed successfully.'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-6 shadow-sm border border-orange-200 dark:border-orange-800/50">
          <Activity className="w-10 h-10 text-orange-600 dark:text-orange-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Mastery
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The foundation of Python data visualization. Transform raw numbers into beautiful, meaningful insights.
        </p>
      </header>

      {/* 2. Intro Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-6">
              <Info className="w-6 h-6 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold">1️⃣ What is Matplotlib?</h2>
            </div>
            <p className="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
              Matplotlib is a powerful Python library used for creating <b>static, animated, and interactive visualizations</b>. It helps convert numerical data into graphical representations, making it easier to understand patterns, trends, and insights.
            </p>
            <div className="space-y-4">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-sm uppercase tracking-wider">
                 <Flame className="w-4 h-4 mr-2 text-rose-500" />
                 Why it is Important
               </h3>
               <ul className="grid grid-cols-1 gap-3">
                  {[
                    "Humans understand graphs faster than numbers",
                    "It helps identify trends and patterns",
                    "Used for data analysis reports",
                    "Helps explain insights to non-technical stakeholders"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center mb-6 text-white">
                <BarChart3 className="w-6 h-6 text-orange-400 mr-3" />
                <h2 className="text-2xl font-bold">2️⃣ Real-World Example</h2>
              </div>
              <p className="text-slate-300 text-sm mb-6">
                Imagine you are analyzing monthly sales data. Instead of reading numbers, a line chart instantly shows the trend.
              </p>
              
              <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-700 mb-6 font-mono text-xs overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="text-orange-400 border-b border-slate-800">
                    <tr>
                      <th className="pb-2">Month</th>
                      <th className="pb-2">Sales</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400">
                    <tr><td className="py-1">Jan</td><td className="py-1">200</td></tr>
                    <tr><td className="py-1">Feb</td><td className="py-1">250</td></tr>
                    <tr><td className="py-1 text-white font-bold">Mar</td><td className="py-1 text-white font-bold">300</td></tr>
                    <tr><td className="py-1">Apr</td><td className="py-1">280</td></tr>
                  </tbody>
                </table>
              </div>

              <button 
                onClick={() => runDemo('sales_analysis')}
                className="mt-auto w-full py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-orange-900/40 flex items-center justify-center group"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Analyze Sales Trend
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Area */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 px-2">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4">
              <Terminal className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Matplotlib Lab</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Interactive walkthrough of basic concepts</p>
            </div>
          </div>
          
          <div className="flex bg-white dark:bg-slate-800 p-1 rounded-xl shadow-inner border border-slate-200 dark:border-slate-700 overflow-x-auto max-w-full">
            {[
              { id: 'intro', label: 'Overview', icon: Info },
              { id: 'setup', label: 'Setup', icon: Package },
              { id: 'first_plot', label: 'First Plot', icon: Play },
              { id: 'components', label: 'Anatomy', icon: Layout },
              { id: 'types', label: 'Types', icon: Layers },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-orange-600 text-white shadow-md' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 min-h-[500px] transition-all">
              
              {/* Tab: Intro */}
              {activeTab === 'intro' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-6">
                  <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                    <Info className="w-5 h-5 mr-3 text-orange-500" />
                    Introduction & Definition
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-orange-50 dark:bg-orange-900/10 p-5 rounded-2xl border border-orange-100 dark:border-orange-800/30">
                      <h4 className="font-bold text-orange-800 dark:text-orange-400 mb-2">Simple Definition</h4>
                      <p className="text-sm text-orange-700 dark:text-orange-300 leading-relaxed">
                        Matplotlib is a Python library used to create static, animated, and interactive visualizations such as line charts, bar charts, scatter plots, histograms, and more.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { title: "Power", desc: "Very powerful and flexible", icon: Zap },
                        { title: "Community", desc: "Large community support", icon: Activity },
                        { title: "Integration", desc: "Works with NumPy & Pandas", icon: Layers },
                        { title: "Customization", desc: "Highly customizable", icon: Settings },
                      ].map((card, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                          <div className="flex items-center mb-2">
                            <card.icon className="w-4 h-4 text-orange-500 mr-2" />
                            <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 uppercase">{card.title}</h4>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">{card.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="p-5 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                      <h4 className="font-bold text-indigo-800 dark:text-indigo-400 mb-3 flex items-center text-sm">
                        <Activity className="w-4 h-4 mr-2" />
                        8️⃣ Where Matplotlib is Used
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {["Data Science", "Machine Learning", "Stats", "Business", "Research", "Finance"].map((field, i) => (
                          <div key={i} className="bg-white dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-indigo-200 dark:border-indigo-800/50 text-[11px] font-medium text-center">
                            {field}
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-[11px] text-slate-500 italic text-center">
                        Commonly used together with NumPy, Pandas, Scikit-Learn, and Seaborn.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Setup */}
              {activeTab === 'setup' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-6">
                  <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                    <Package className="w-5 h-5 mr-3 text-emerald-500" />
                    3️⃣ Installation & 4️⃣ Importing
                  </h3>
                  
                  <div className="space-y-4">
                    <button onClick={() => runDemo('install_pip')} className="w-full text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 rounded-bl-xl opacity-50 group-hover:opacity-100">PIP INSTALL</div>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">Using pip</h4>
                        <p className="text-xs text-slate-500 mb-3">Install via standard Python package manager.</p>
                        <pre className="font-mono text-[12px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                          <span className="text-slate-400">$</span> pip install matplotlib
                        </pre>
                      </div>
                    </button>

                    <button onClick={() => runDemo('install_conda')} className="w-full text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 hover:border-teal-300 dark:hover:border-teal-700 transition-all shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 text-[10px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 rounded-bl-xl opacity-50 group-hover:opacity-100">CONDA INSTALL</div>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">Using Anaconda</h4>
                        <p className="text-xs text-slate-500 mb-3">Install via Conda package manager.</p>
                        <pre className="font-mono text-[12px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                          <span className="text-slate-400">$</span> conda install matplotlib
                        </pre>
                      </div>
                    </button>

                    <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                      <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-2 flex items-center">
                        <Info className="w-4 h-4 mr-2" />
                        4️⃣ Importing Matplotlib
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                        Most Python developers import Matplotlib like this using <b>pyplot</b>.
                      </p>
                      <pre className="font-mono text-[12px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="text-blue-500">import</span> matplotlib.pyplot <span className="text-blue-500">as</span> plt
                      </pre>
                      <div className="mt-4 flex items-start">
                        <Lightbulb className="w-4 h-4 text-amber-500 mr-3 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-[11px] font-bold text-indigo-800 dark:text-indigo-300">Why pyplot?</p>
                          <p className="text-[11px] text-indigo-600/70 dark:text-indigo-400/70">pyplot provides MATLAB-style plotting functions that make creating graphs very easy.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: First Plot */}
              {activeTab === 'first_plot' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-6">
                  <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                    <Play className="w-5 h-5 mr-3 text-orange-500" />
                    5️⃣ Your First Matplotlib Example
                  </h3>
                  
                  <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                      <div className="flex space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">example.py</span>
                      <button 
                        onClick={() => runDemo('first_plot')}
                        className="p-1 hover:bg-slate-700 rounded transition-colors text-emerald-400"
                        title="Run Code"
                      >
                        <Play className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                    <pre className="p-6 font-mono text-[13px] leading-relaxed overflow-x-auto">
                      <div className="text-blue-400 font-bold mb-2">import matplotlib.pyplot as plt</div>
                      <div className="text-slate-500 italic mb-2"># 1. Prepare Data</div>
                      <div className="mb-1 text-slate-300">x = [<span className="text-emerald-400">1, 2, 3, 4</span>]</div>
                      <div className="mb-4 text-slate-300">y = [<span className="text-emerald-400">10, 20, 25, 30</span>]</div>
                      
                      <div className="text-slate-500 italic mb-2"># 2. Create plot</div>
                      <div className="mb-4 text-amber-400">plt.plot(x, y)</div>
                      
                      <div className="text-slate-500 italic mb-2"># 3. Style labels</div>
                      <div className="mb-1 text-blue-300">plt.title(<span className="text-emerald-400">"Simple Line Plot"</span>)</div>
                      <div className="mb-1 text-blue-300">plt.xlabel(<span className="text-emerald-400">"X Axis"</span>)</div>
                      <div className="mb-4 text-blue-300">plt.ylabel(<span className="text-emerald-400">"Y Axis"</span>)</div>
                      
                      <div className="text-slate-500 italic mb-2"># 4. Show it</div>
                      <div className="text-orange-400">plt.show()</div>
                    </pre>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/10 p-5 rounded-2xl border border-orange-100 dark:border-orange-800/30">
                    <h4 className="font-bold text-orange-800 dark:text-orange-400 mb-2 text-sm">Visual Output</h4>
                    <p className="text-xs text-orange-700 dark:text-orange-300 leading-relaxed mb-4">
                      The output will display a line graph connecting the points:
                    </p>
                    <div className="flex items-center justify-center space-x-4 font-mono text-xs bg-white dark:bg-slate-950 p-4 rounded-xl border border-orange-200 dark:border-orange-900/50 shadow-inner overflow-x-auto">
                      <span className="text-slate-500">(1,10)</span>
                      <span className="text-orange-400">→</span>
                      <span className="text-slate-500">(2,20)</span>
                      <span className="text-orange-400">→</span>
                      <span className="text-slate-500">(3,25)</span>
                      <span className="text-orange-400">→</span>
                      <span className="text-slate-500">(4,30)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Components */}
              {activeTab === 'components' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-6">
                  <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                    <Layout className="w-5 h-5 mr-3 text-indigo-500" />
                    6️⃣ Anatomy of a Plot
                  </h3>
                  
                  <div className="relative border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-950 p-6">
                    <div className="grid grid-cols-1 gap-4">
                       {[
                         { name: "Figure", desc: "Entire window or page containing the plot", color: "bg-blue-100 text-blue-700 border-blue-200" },
                         { name: "Axes", desc: "The area where data is plotted", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                         { name: "Title", desc: "Name of the chart", color: "bg-amber-100 text-amber-700 border-amber-200" },
                         { name: "X/Y Axis", desc: "Horizontal and vertical scales", color: "bg-rose-100 text-rose-700 border-rose-200" },
                         { name: "Legend", desc: "Describes plotted data", color: "bg-purple-100 text-purple-700 border-purple-200" },
                       ].map((comp, i) => (
                         <div key={i} className={`flex items-start p-4 rounded-xl border ${comp.color} dark:bg-opacity-5 dark:border-opacity-20`}>
                            <div className="font-bold text-xs uppercase tracking-wider w-24 shrink-0">{comp.name}</div>
                            <div className="text-xs opacity-80">{comp.desc}</div>
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                    <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-300 mb-2">Hierarchical Structure</h4>
                    <p className="text-[11px] text-indigo-600/70 dark:text-indigo-400/70 leading-relaxed">
                      A <b>Figure</b> is like a canvas. <b>Axes</b> are the actual plots drawn on that canvas. You can have multiple Axes in one Figure (Subplots).
                    </p>
                  </div>
                </div>
              )}

              {/* Tab: Types */}
              {activeTab === 'types' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-6">
                  <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                    <Layers className="w-5 h-5 mr-3 text-indigo-500" />
                    7️⃣ Types of Plots Supported
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { name: "Line Plot", use: "Trend over time", icon: LineChart, color: "text-blue-500" },
                      { name: "Bar Chart", use: "Category comparison", icon: BarChart3, color: "text-emerald-500" },
                      { name: "Scatter Plot", use: "Relationship variables", icon: ScatterChart, color: "text-amber-500" },
                      { name: "Histogram", use: "Data distribution", icon: Activity, color: "text-rose-500" },
                      { name: "Pie Chart", use: "Percentage share", icon: PieChart, color: "text-purple-500" },
                      { name: "Box Plot", use: "Statistical spread", icon: Box, color: "text-indigo-500" },
                    ].map((type, i) => (
                      <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:translate-y-[-2px] transition-transform">
                        <div className={`p-2 rounded-lg bg-slate-50 dark:bg-slate-950 w-fit mb-3 ${type.color}`}>
                          <type.icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs mb-1">{type.name}</h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">{type.use}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 bg-rose-50 dark:bg-rose-900/10 rounded-2xl border border-rose-100 dark:border-rose-800/30">
                    <h4 className="font-bold text-sm text-rose-700 dark:text-rose-400 mb-3 flex items-center">
                       <AlertCircle className="w-4 h-4 mr-2" />
                       1️⃣0️⃣ Known Limitations
                    </h4>
                    <ul className="space-y-2 text-[11px] text-rose-800/80 dark:text-rose-300/80">
                      <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-rose-400 mr-2 shrink-0" /> Syntax can feel complex for beginners</li>
                      <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-rose-400 mr-2 shrink-0" /> Styling requires extra code</li>
                      <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-rose-400 mr-2 shrink-0" /> Not as modern-looking as newer libraries (Seaborn)</li>
                    </ul>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#1e1e1e] rounded-[2.5rem] p-8 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col group/terminal">
               <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] group-hover/terminal:bg-orange-500/10 transition-all duration-1000"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                    <div className="flex items-center">
                      <Terminal className="w-5 h-5 mr-3 text-orange-500" />
                      <h3 className="font-bold text-slate-400 uppercase text-xs tracking-widest font-mono">
                        Simulator_v1.0
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
                       <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
                       <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
                    </div>
                  </div>

                  <div className="font-mono text-xs flex flex-col flex-1 overflow-y-auto max-h-[440px] px-2 custom-scrollbar">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-600 flex flex-col items-center justify-center mt-32 space-y-4">
                        <Activity className="w-16 h-16 opacity-10 animate-pulse" />
                        <span className="text-center max-w-[200px] leading-relaxed opacity-50">Interact with the components to see the simulation output...</span>
                     </div>
                  ) : (
                     <div className="space-y-2">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-2 duration-300 flex items-start">
                              <span className="text-orange-500/50 mr-3 mt-1 underline">➜</span>
                              <span className={`font-medium ${
                                line.startsWith('Successfully') ? 'text-emerald-400' :
                                line.startsWith('Collecting') ? 'text-blue-400' :
                                line.includes('Error') ? 'text-rose-400' :
                                'text-slate-100'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-4 flex justify-between items-center border-t border-slate-800 mt-4">
                           <span className="text-[10px] text-slate-500 italic">Execution complete.</span>
                           <button onClick={resetConsole} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded hover:bg-slate-700 transition-colors">Clear</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tips & Recommendation Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 p-8 rounded-3xl shadow-xl border border-indigo-700 relative overflow-hidden">
             <div className="absolute top-[-20%] right-[-20%] w-[50%] h-[50%] bg-white/5 rounded-full blur-3xl"></div>
             <div className="relative z-10">
               <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                 <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
                 💡 Pro Developer Advice
               </h2>
               <div className="space-y-4">
                 {[
                   { t: "Tip 1", subtitle: "Always use plt.figure()", desc: "It controls the chart size: plt.figure(figsize=(8,5))", icon: Maximize2 },
                   { t: "Tip 2", subtitle: "Use Grid for Readability", desc: "Enable grids with plt.grid(True) for easier value tracking.", icon: Grid },
                   { t: "Tip 3", subtitle: "Use Labels Always", desc: "Charts without labels are useless: plt.xlabel('Year')", icon: Tag },
                   { t: "Tip 4", subtitle: "Pandas + Matplotlib", desc: "import pandas as pd; import matplotlib.pyplot as plt", icon: Layers }
                 ].map((tip, i) => (
                   <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-start group hover:bg-white/20 transition-all cursor-default">
                      <div className="p-2 bg-indigo-500/20 rounded-lg mr-4 mt-1">
                        <Activity className="w-4 h-4 text-indigo-300" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-0.5">{tip.t}: {tip.subtitle}</h4>
                        <p className="text-indigo-200 text-xs leading-relaxed">{tip.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>

           <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Layout className="w-6 h-6 text-orange-500 mr-3" />
               🎓 Learning Roadmap
             </h2>
             <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
               Personal recommendation from 15+ years experience: Follow this order for faster learning.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
               {[
                 "1. Matplotlib Intro",
                 "2. Line Plot",
                 "3. Bar Chart",
                 "4. Scatter Plot",
                 "5. Histogram",
                 "6. Subplots",
                 "7. Styling & Colors",
                 "8. Real Dataset Viz"
               ].map((step, i) => (
                 <div key={i} className="flex items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700/50 group hover:border-orange-500/30 transition-all">
                   <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 flex items-center justify-center text-[10px] font-bold mr-3 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                     {i + 1}
                   </div>
                   <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{step}</span>
                 </div>
               ))}
             </div>
             
             <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100 dark:border-orange-800/30 flex items-center justify-between">
                <span className="text-xs font-bold text-orange-800 dark:text-orange-300">Ready to start?</span>
                <button 
                  onClick={() => setActiveTab('first_plot')}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg text-[10px] font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/20"
                >
                  GO TO FIRST PLOT
                </button>
             </div>
           </div>
        </div>
      </section>

      {/* 5. Practice Exercise */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-slate-900 to-black p-8 sm:p-12 rounded-[3rem] shadow-2xl border border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-[10px] font-bold mb-4 border border-orange-500/20 tracking-widest uppercase">
                Challenge
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-6">
                🚀 Practice Exercise
              </h2>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Create a professional line chart for <b>Annual Revenue</b>. Ensure your plot includes a custom figure size, labels, and the grid system enabled.
              </p>
              
              <div className="space-y-4 mb-8">
                 <div className="flex items-center text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                    Use <code className="bg-slate-800 px-1 rounded text-orange-400 mx-1">plt.figure(figsize=(10,6))</code>
                 </div>
                 <div className="flex items-center text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                    Set X-axis to <code className="bg-slate-800 px-1 rounded text-orange-400 mx-1">"Year"</code>
                 </div>
                 <div className="flex items-center text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                    Enable <code className="bg-slate-800 px-1 rounded text-orange-400 mx-1">plt.grid(True)</code>
                 </div>
              </div>
            </div>

            <div className="w-full md:w-80 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-3xl shadow-inner relative">
               <div className="flex justify-between items-center mb-6">
                 <h4 className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Expected Output</h4>
                 <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-orange-600 hover:bg-orange-500 text-white text-[10px] font-extrabold px-4 py-2 rounded-xl transition-all shadow-lg shadow-orange-950 active:scale-95"
                 >
                   RUN SOLUTION
                 </button>
               </div>
               
               <div className="aspect-[4/3] bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center p-4 relative overflow-hidden group/chart">
                  <div className="absolute inset-2 border-l border-b border-slate-700"></div>
                  <div className="w-full space-y-3 opacity-30 group-hover/chart:opacity-100 transition-opacity duration-700">
                    <div className="h-0.5 bg-orange-500 w-[20%] rotate-[20deg] origin-left"></div>
                    <div className="h-0.5 bg-orange-500 w-[30%] rotate-[40deg] origin-left translate-x-[20%] translate-y-[-10%]"></div>
                    <div className="h-0.5 bg-orange-500 w-[50%] rotate-[-10deg] origin-left translate-x-[50%] translate-y-[-20%]"></div>
                  </div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-slate-500">Year</div>
                  <div className="absolute left-1 top-1/2 -rotate-90 origin-left text-[8px] text-slate-500">Revenue</div>
                  <div className="absolute inset-2 grid grid-cols-4 grid-rows-4 pointer-events-none opacity-10">
                    <div className="border-r border-b border-slate-500"></div>
                    <div className="border-r border-b border-slate-500"></div>
                    <div className="border-r border-b border-slate-500"></div>
                    <div className="border-b border-slate-500"></div>
                    <div className="border-r border-b border-slate-500"></div>
                    <div className="border-r border-b border-slate-500"></div>
                    <div className="border-r border-b border-slate-500"></div>
                    <div className="border-b border-slate-500"></div>
                  </div>
               </div>

               <div className="mt-4 flex items-center justify-center text-emerald-400 text-[10px] font-bold gap-2">
                 <Zap className="w-3 h-3 animate-bounce" />
                 Difficulty: Beginner Friendly
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Placeholder icons missing from lucide-react in current scope if any
const Maximize2: React.FC<any> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);

const Grid: React.FC<any> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="3" y1="15" x2="21" y2="15"></line>
    <line x1="9" y1="3" x2="9" y2="21"></line>
    <line x1="15" y1="3" x2="15" y2="21"></line>
  </svg>
);

const Tag: React.FC<any> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);

const Box: React.FC<any> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

export default MatplotLibHome;