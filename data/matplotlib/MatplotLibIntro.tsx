import React, { useState } from 'react';
import { 
  BarChart3, LineChart, PieChart, ScatterChart, Activity, 
  Code, Terminal, Layout, Info, Layers, 
  Settings, Zap, CheckCircle2, AlertCircle, 
  Lightbulb, Play, Flame, Package, Box,
  GitBranch, GraduationCap, Star, ClipboardCheck,
  MousePointer2, Move, Maximize2, Hash
} from 'lucide-react';

const MatplotLibIntro: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'ecosystem' | 'architecture' | 'setup' | 'lab' | 'types'>('ecosystem');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'visitor_stats':
        outLines = [
          'Website Visitors Trend (Daily):',
          'Monday:    120',
          'Tuesday:   150',
          'Wednesday: 170',
          'Thursday:  160',
          'Analysis: Peak traffic on Wednesday. Growth trend: +42% since Monday.'
        ];
        break;
      case 'import_plt':
        outLines = ['Module imported: matplotlib.pyplot as plt', 'Pyplot engine ready. Ready to generate charts.'];
        break;
      case 'first_vis':
        outLines = [
          'Preparing canvas...',
          'Mapping data points: (1,10) → (2,15) → (3,20) → (4,25)',
          'Setting Title: "Basic Line Plot"',
          'Setting Labels: X Axis, Y Axis',
          'Rendering complete. Plot shown in pop-up window.'
        ];
        break;
      case 'student_marks':
        outLines = [
          'Student Marks Comparison:',
          'Alex: 75 [|||||||||||||       ]',
          'John: 82 [||||||||||||||      ]',
          'Sara: 90 [||||||||||||||||    ]',
          'Mike: 65 [|||||||||||         ]',
          'Status: Bar chart generated successfully.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Solution Check:',
          '1. Figure(figsize=(8,5)) ... OK',
          '2. plt.grid(True) ... OK',
          '3. Labels added ... OK',
          'Result: Professional visualization generated.'
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
          <LineChart className="w-10 h-10 text-orange-600 dark:text-orange-400" />
        </div>
        <div className="inline-flex items-center px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-[10px] font-bold mb-4 border border-orange-500/20 tracking-widest uppercase">
          Lesson 0.1
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Introduction
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The core conceptual gateway to data visualization in Python. Move beyond tables and discover the power of visual storytelling.
        </p>
      </header>

      {/* 2. Intro & Why Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-6">
              <Info className="w-6 h-6 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold">1️⃣ What is Matplotlib?</h2>
            </div>
            <p className="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              Matplotlib is a Python data visualization library used to create <b>graphs, charts, and plots from numerical data</b>. It allows developers and data scientists to visualize data patterns, trends, and relationships using graphical representations.
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/10 p-5 rounded-2xl border border-orange-100 dark:border-orange-800/30">
               <h3 className="font-bold text-orange-800 dark:text-orange-400 flex items-center text-sm mb-2">
                 Simple Definition
               </h3>
               <p className="text-xs text-orange-700 dark:text-orange-300">
                 A Python library used for creating static, animated, and interactive data visualizations.
               </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center mb-6 text-white">
                <Flame className="w-6 h-6 text-orange-400 mr-3" />
                <h2 className="text-2xl font-bold">2️⃣ Why It Matters</h2>
              </div>
              <p className="text-slate-300 text-sm mb-6">
                Raw data in tables can be difficult to understand. Let's look at <b>Website Visitors</b> data:
              </p>
              
              <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-700 mb-6 font-mono text-xs overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="text-orange-400 border-b border-slate-800">
                    <tr><th>Day</th><th className="text-right">Visitors</th></tr>
                  </thead>
                  <tbody className="text-slate-400">
                    <tr><td className="py-1">Monday</td><td className="py-1 text-right">120</td></tr>
                    <tr><td className="py-1">Tuesday</td><td className="py-1 text-right">150</td></tr>
                    <tr><td className="py-1">Wednesday</td><td className="py-1 text-right">170</td></tr>
                    <tr><td className="py-1">Thursday</td><td className="py-1 text-right">160</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-6">
                 {["Easy to understand", "Discover patterns", "Pro for Reports", "ML Friendly"].map((benefit, i) => (
                   <div key={i} className="flex items-center text-[10px] text-slate-400 font-bold uppercase">
                     <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-2" />
                     {benefit}
                   </div>
                 ))}
              </div>

              <button 
                onClick={() => runDemo('visitor_stats')}
                className="mt-auto w-full py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center group/btn"
              >
                <Activity className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                Convert to Visual Insights
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Area */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 px-2">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
              <Terminal className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Interactive Lesson</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Section 3️⃣ - 🔟 Guided Tour</p>
            </div>
          </div>
          
          <div className="flex bg-white dark:bg-slate-800 p-1 rounded-xl shadow-inner border border-slate-200 dark:border-slate-700 overflow-x-auto max-w-full">
            {[
              { id: 'ecosystem', label: 'Ecosystem', icon: Layers },
              { id: 'architecture', label: 'Architecture', icon: Layout },
              { id: 'setup', label: 'Setup', icon: Package },
              { id: 'lab', label: 'First Plot', icon: Play },
              { id: 'types', label: 'Overview', icon: Box },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-indigo-600 text-white shadow-md' 
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
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 min-h-[500px] transition-all overflow-y-auto">
              
              {/* Point 3: Ecosystem */}
              {activeTab === 'ecosystem' && (
                <div className="animate-in fade-in duration-500 space-y-6">
                  <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                    <Layers className="w-5 h-5 mr-3 text-indigo-500" />
                    3️⃣ Python Ecosystem
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Matplotlib works closely with other Python libraries to create a complete data science workflow.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { lib: "NumPy", purpose: "Numerical calculations", color: "text-blue-500" },
                      { lib: "Pandas", purpose: "Data manipulation", color: "text-emerald-500" },
                      { lib: "Matplotlib", purpose: "Data visualization", color: "text-orange-500" },
                      { lib: "Seaborn", purpose: "Advanced statistical plots", color: "text-rose-500" },
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
                        <span className={`font-bold text-sm ${item.color}`}>{item.lib}</span>
                        <span className="text-[11px] text-slate-500">{item.purpose}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                    <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-4 flex items-center text-xs uppercase tracking-wider">
                      <Settings className="w-4 h-4 mr-2" />
                      Data Science Workflow
                    </h4>
                    <div className="flex items-center justify-center space-x-3 text-[10px] font-mono font-bold">
                       {/* Circular nodes */}
                       <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full border border-indigo-200 bg-white dark:bg-slate-950 flex items-center justify-center">Data</div>
                       </div>
                       <span className="text-slate-400">→</span>
                       <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full border border-indigo-200 bg-white dark:bg-slate-950 flex items-center justify-center">Pd</div>
                       </div>
                       <span className="text-slate-400">→</span>
                       <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full border border-indigo-200 bg-white dark:bg-slate-950 flex items-center justify-center">Analysis</div>
                       </div>
                       <span className="text-slate-400">→</span>
                       <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full border border-orange-200 bg-orange-50 dark:bg-orange-900/40 flex items-center justify-center text-orange-600">Mpl</div>
                       </div>
                       <span className="text-slate-400">→</span>
                       <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full border border-emerald-200 bg-emerald-50 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600">Viz</div>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Point 4: Architecture */}
              {activeTab === 'architecture' && (
                <div className="animate-in fade-in duration-500 space-y-6">
                  <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                    <Layout className="w-5 h-5 mr-3 text-indigo-500" />
                    4️⃣ Basic Architecture
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg relative">
                       <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-400 uppercase">Anatomy</div>
                       
                       <div className="p-8 border-2 border-dashed border-blue-400/30 rounded-xl mb-4 relative">
                          <div className="absolute -top-3 left-4 bg-blue-500 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">1. Figure</div>
                          
                          <div className="p-6 border border-emerald-400/50 bg-emerald-500/5 rounded-lg flex flex-col items-center justify-center min-h-[120px] relative">
                             <div className="absolute -top-3 left-4 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">2. Axes</div>
                             
                             <div className="flex items-end justify-center w-full space-x-8">
                                <div className="h-20 w-1 bg-rose-400/50 relative">
                                   <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] font-bold text-rose-500">Y-Axis</div>
                                </div>
                                <div className="h-1 w-20 bg-rose-400/50 relative">
                                   <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] font-bold text-rose-500">X-Axis</div>
                                </div>
                             </div>
                             <div className="mt-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">3. Axis Components</div>
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                       {[
                         { t: "Figure", d: "The entire canvas" },
                         { t: "Axes", d: "The actual plotting area" },
                         { t: "Axis", d: "The X and Y scales" }
                       ].map((item, i) => (
                         <div key={i} className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-center">
                            <h4 className="text-xs font-bold text-indigo-600 mb-1">{item.t}</h4>
                            <p className="text-[10px] text-slate-500">{item.d}</p>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Point 5: Importing & Setup */}
              {activeTab === 'setup' && (
                <div className="animate-in fade-in duration-500 space-y-6">
                  <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                    <Package className="w-5 h-5 mr-3 text-emerald-500" />
                    5️⃣ Importing Matplotlib
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-2xl group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Standard Import</span>
                        <button onClick={() => runDemo('import_plt')} className="text-emerald-500 hover:text-emerald-400"><Play className="w-4 h-4" /></button>
                      </div>
                      <pre className="font-mono text-sm text-slate-300">
                        <span className="text-blue-500">import</span> matplotlib.pyplot <span className="text-blue-500">as</span> plt
                      </pre>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                       <div className="p-3 bg-white dark:bg-slate-950 rounded-xl shadow-sm">
                         <Info className="w-6 h-6 text-indigo-500" />
                       </div>
                       <div>
                         <h4 className="font-bold text-sm text-indigo-800 dark:text-indigo-400 mb-1">Why pyplot?</h4>
                         <p className="text-xs text-indigo-600/70 dark:text-indigo-400/70 leading-relaxed">
                           pyplot provides simple functions to create charts quickly, similar to MATLAB plotting. It's the most common way to use Matplotlib.
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Point 6: Lab / First Visualization */}
              {activeTab === 'lab' && (
                <div className="animate-in fade-in duration-500 space-y-6">
                  <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                    <Play className="w-5 h-5 mr-3 text-orange-500" />
                    6️⃣ First Matplotlib Visualization
                  </h3>
                  
                  <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                    <div className="px-6 py-4 bg-slate-900/50 border-b border-slate-800 flex justify-between items-center">
                       <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                       </div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Lesson_0_1.py</div>
                       <button onClick={() => runDemo('first_vis')} className="text-orange-500 hover:text-orange-400 transition-colors"><Zap className="w-4 h-4 fill-current" /></button>
                    </div>
                    <pre className="p-8 font-mono text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                      <div className="mb-2"><span className="text-blue-400">import</span> matplotlib.pyplot <span className="text-blue-400">as</span> plt</div>
                      <div className="text-slate-500 italic mb-2"># 1. Provide Data</div>
                      <div className="mb-1">x = [<span className="text-emerald-400">1, 2, 3, 4</span>]</div>
                      <div className="mb-4">y = [<span className="text-emerald-400">10, 15, 20, 25</span>]</div>
                      
                      <div className="text-slate-500 italic mb-2"># 2. Render Plot</div>
                      <div className="mb-4 text-amber-400">plt.plot(x, y)</div>
                      
                      <div className="text-slate-500 italic mb-2"># 3. Add Context</div>
                      <div className="mb-1 text-indigo-400">plt.title(<span className="text-emerald-400">"Basic Line Plot"</span>)</div>
                      <div className="mb-1 text-indigo-400">plt.xlabel(<span className="text-emerald-400">"X Axis"</span>)</div>
                      <div className="mb-4 text-indigo-400">plt.ylabel(<span className="text-emerald-400">"Y Axis"</span>)</div>
                      
                      <div className="text-orange-400">plt.show()</div>
                    </pre>
                  </div>

                  <div className="p-5 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100 dark:border-orange-800/30">
                    <h4 className="font-bold text-orange-800 dark:text-orange-400 mb-2 text-sm uppercase">Mapping Logic</h4>
                    <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 bg-white dark:bg-slate-950 p-4 rounded-xl border border-orange-200 dark:border-orange-900/50">
                       <span className="group relative cursor-help">
                         (1,10)
                         <span className="absolute -top-8 left-0 scale-0 group-hover:scale-100 transition-all bg-black text-white p-1 rounded">Start</span>
                       </span>
                       <span className="text-orange-300">→</span>
                       <span>(2,15)</span>
                       <span className="text-orange-300">→</span>
                       <span>(3,20)</span>
                       <span className="text-orange-300">→</span>
                       <span className="group relative cursor-help">
                         (4,25)
                         <span className="absolute -top-8 left-0 scale-0 group-hover:scale-100 transition-all bg-black text-white p-1 rounded">End</span>
                       </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Point 7-9: Types & Advantages/Limitations */}
              {activeTab === 'types' && (
                <div className="animate-in fade-in duration-500 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                      <Box className="w-5 h-5 mr-3 text-indigo-500" />
                      7️⃣ Common Plot Types
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { n: "Line Plot", p: "Trend over time", i: LineChart },
                        { n: "Bar Chart", p: "Compare categories", i: BarChart3 },
                        { n: "Scatter Plot", p: "Show relations", i: ScatterChart },
                        { n: "Histogram", p: "Distributions", i: Activity },
                        { n: "Pie Chart", p: "Percentage share", i: PieChart },
                        { n: "Box Plot", p: "Stats summary", i: Box },
                      ].map((item, i) => (
                        <div key={i} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-indigo-400 transition-all">
                           <item.i className="w-4 h-4 text-indigo-500 mb-2" />
                           <h4 className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{item.n}</h4>
                           <p className="text-[9px] text-slate-500">{item.p}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold flex items-center text-emerald-600">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        8️⃣ Advantages
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                        <li className="flex items-center"><Star className="w-3 h-3 text-emerald-400 mr-2 shrink-0"/> Open-source and free</li>
                        <li className="flex items-center"><Star className="w-3 h-3 text-emerald-400 mr-2 shrink-0"/> Highly customizable</li>
                        <li className="flex items-center"><Star className="w-3 h-3 text-emerald-400 mr-2 shrink-0"/> Export (PNG, PDF, SVG)</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold flex items-center text-rose-600">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        9️⃣ Limitations
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                        <li className="flex items-center text-rose-800/60"><AlertCircle className="w-3 h-3 mr-2 shrink-0"/> Verbose for beginners</li>
                        <li className="flex items-center text-rose-800/60"><AlertCircle className="w-3 h-3 mr-2 shrink-0"/> Basic default looks</li>
                        <li className="flex items-center text-rose-800/60"><AlertCircle className="w-3 h-3 mr-2 shrink-0"/> Needs Seaborn for beauty</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#111111] rounded-[2.5rem] p-8 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col group/terminal">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] group-hover/terminal:bg-indigo-500/10 transition-all duration-1000"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                    <div className="flex items-center">
                      <Terminal className="w-5 h-5 mr-3 text-indigo-500" />
                      <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-widest font-mono">
                        Data_Output_v2
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[440px] px-2 custom-scrollbar">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-700 flex flex-col items-center justify-center mt-32 space-y-6">
                        <Activity className="w-20 h-20 opacity-5 animate-pulse" />
                        <span className="text-center max-w-[180px] leading-relaxed opacity-40 text-[9px] uppercase tracking-widest">Awaiting interaction...</span>
                     </div>
                  ) : (
                     <div className="space-y-3">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in slide-in-from-left-4 duration-500 flex items-start">
                              <span className="text-indigo-500/40 mr-3 mt-1 font-bold">»</span>
                              <span className={`leading-relaxed ${
                                line.includes('Successfully') ? 'text-emerald-400' :
                                line.includes('Mapping') || line.includes('Preparing') ? 'text-blue-400' :
                                line.includes('Analysis') || line.includes('Status') ? 'text-amber-400' :
                                'text-slate-200'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-6 flex justify-between items-center border-t border-slate-800/50 mt-4 opacity-50">
                           <span className="text-[9px] text-slate-600 tracking-wider">Simulated Python Runtime</span>
                           <button onClick={resetConsole} className="text-[9px] bg-white/5 text-slate-400 px-3 py-1 rounded-full hover:bg-white/10 transition-colors uppercase font-bold">Clear</button>
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
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-8">
               <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center">
                 <GraduationCap className="w-8 h-8 text-indigo-500 mr-4" />
                 Learning Roadmap
               </h2>
               <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
                 Sequence recommended by instructors for 15+ years experience. This builds your skills step-by-step.
               </p>
               <div className="space-y-3 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-indigo-100 dark:before:bg-indigo-900/30">
                 {[
                   "Matplotlib Intro", "Matplotlib Pyplot", "Line Plot Mastery",
                   "Markers & Colors", "Bar Chart Creation", "Scatter Plots",
                   "Histograms", "Subplots", "Styling & Refinement"
                 ].map((step, i) => (
                   <div key={i} className="flex items-center group relative pl-8">
                     <div className="absolute left-0 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 text-indigo-500 text-[10px] font-bold flex items-center justify-center z-10 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                       {i + 1}
                     </div>
                     <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-500 transition-colors">{step}</span>
                   </div>
                 ))}
               </div>
           </div>

           <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
               <Zap className="w-6 h-6 text-amber-500 mr-3" />
               Tips & Tricks for Beginners
             </h2>
             <div className="grid grid-cols-1 gap-6">
               {[
                 { t: "Always Use plt.show()", d: "Without it, graphs may not display in some environments.", i: Play },
                 { t: "Use figsize Layout", d: "plt.figure(figsize=(8,5)) ensures adequate space.", i: Maximize2 },
                 { t: "Use Grid Lines", d: "plt.grid(True) improves readability drastically.", i: Hash },
                 { t: "Meaningful Titles", d: "Professional charts always need Titles, Labels, and Legends.", i: ClipboardCheck }
               ].map((tip, i) => (
                 <div key={i} className="flex items-start p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-amber-400/50 transition-all cursor-default group">
                   <div className="p-3 bg-white dark:bg-slate-950 rounded-xl shadow-sm mr-4 group-hover:bg-amber-500/10 transition-all">
                     <tip.i className="w-5 h-5 text-amber-500" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">⭐ {tip.t}</h4>
                     <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{tip.d}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* 5. Practice Exercise */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 p-8 sm:p-12 rounded-[3.5rem] shadow-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold mb-6 border border-white/20 tracking-widest uppercase">
                🔟 Simple Real-Life Example
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-6">
                Student Marks Visualization
              </h2>
              <p className="text-indigo-100/70 text-sm mb-8 leading-relaxed">
                Create a bar chart comparing scores for <b>Alex, John, Sara, and Mike</b>. Marks: [75, 82, 90, 65].
              </p>
              
              <div className="space-y-4 mb-8">
                 <div className="flex items-center text-xs text-indigo-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2" />
                    Function: <code className="bg-black/40 px-2 py-0.5 rounded text-indigo-300 mx-1">plt.bar(students, marks)</code>
                 </div>
                 <div className="flex items-center text-xs text-indigo-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2" />
                    Title: <code className="bg-black/40 px-2 py-0.5 rounded text-indigo-300 mx-1">"Student Marks"</code>
                 </div>
              </div>

               <button 
                  onClick={() => runDemo('student_marks')}
                  className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-3 rounded-2xl text-xs font-extrabold transition-all shadow-xl flex items-center group/play"
               >
                 <Play className="w-4 h-4 mr-2 group-hover/play:scale-110 transition-transform" />
                 SIMULATE CHART
               </button>
            </div>

            <div className="w-full md:w-80 space-y-4">
               {/* Visual Placeholder for a bar chart */}
               <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-6 flex items-end justify-between overflow-hidden relative group/chart">
                  <div className="absolute inset-x-6 bottom-6 border-b border-white/10"></div>
                  <div className="absolute inset-y-6 left-6 border-l border-white/10"></div>
                  
                  {[75, 82, 90, 65].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-[18%] bg-white/10 group-hover/chart:bg-indigo-400 transition-all duration-1000 origin-bottom rounded-t-sm"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/chart:opacity-100 transition-opacity bg-indigo-900/40 backdrop-blur-sm pointer-events-none">
                     <span className="text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 border border-white/20 rounded-full bg-black/20">Preview Output</span>
                  </div>
               </div>
               
               <p className="text-center text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">Expected Result: Bar Comparison</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MatplotLibIntro;