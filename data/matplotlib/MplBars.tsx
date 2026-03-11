import React, { useState } from 'react';
import { 
  BarChart3, Info, Code, Terminal, 
  Palette, Layout, Layers, Maximize2,
  Play, Lightbulb, Zap, CheckCircle2,
  AlertCircle, Sparkles, MousePointer2,
  BarChart, List, MoveRight, HelpCircle,
  TrendingUp, Users, Presentation, ClipboardCheck,
  Activity
} from 'lucide-react';

const MplBars: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'styling' | 'horizontal' | 'grouped' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_bar':
        outLines = [
          'Initializing Plot Canvas...',
          'Categories: ["John", "Sara", "Mike", "Anna"]',
          'Heights: [85, 90, 75, 88]',
          'Executing plt.bar(students, marks)',
          'Rendering vertical bars...',
          'Success: Bar Chart displayed.'
        ];
        break;
      case 'color_bar':
        outLines = [
          'Applying Color: "green"',
          'Hex Code Detected: #008000',
          'Updating bar facecolor property...',
          'Plotting updated visualization.'
        ];
        break;
      case 'horizontal_bar':
        outLines = [
          'Switching to plt.barh()',
          'Categories mapped to Y-axis.',
          'Values mapped to X-axis length.',
          'Rendering horizontal layout for improved readability.'
        ];
        break;
      case 'grouped_bar':
        outLines = [
          'Importing numpy as np',
          'Calculating offset indices for side-by-side display...',
          'Set 1 (Math): [85, 90, 75, 88]',
          'Set 2 (Science): [80, 85, 78, 92]',
          'Drawing multiple bar series...',
          'Legend added: [Math, Science]'
        ];
        break;
      case 'sales_case':
        outLines = [
          'Monthly Dataset Loaded.',
          'Jan -> 200',
          'Feb -> 250',
          'Mar -> 300 (Peak)',
          'Apr -> 280',
          'Rendering Marketing Report Visualization...'
        ];
        break;
      case 'exercise':
        outLines = [
          'Validating solution...',
          'Inputs: Languages, Users',
          'plt.bar(languages, users) -> Verified',
          'Labels X/Y -> Verified',
          'Title -> Verified',
          'Result: 100% Correct. Great job!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Dynamic Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl mb-8 shadow-sm border border-indigo-200 dark:border-indigo-800/50 transform hover:rotate-6 transition-transform">
          <BarChart3 className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold mb-6 border border-indigo-500/20 tracking-[0.2em] uppercase">
          Lesson 0.8
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Bar Charts</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Master categorical comparison. Learn to turn product sales, survey results, and population metrics into compelling rectangular visual stories.
        </p>
      </header>

      {/* 2. Conceptual Grid */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center translate-y-0 hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-indigo-500 rounded-2xl shadow-lg shadow-indigo-500/20 mr-4">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is a Bar Chart?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
              "A graphical representation used to compare different categories where the height or length represents the value of each category."
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-sm uppercase tracking-widest">
                 <Presentation className="w-5 h-5 mr-3 text-purple-500" />
                 Dataset Illustration
               </h3>
               <div className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-inner">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-indigo-500/5 text-[10px] font-bold text-slate-500 uppercase">
                      <tr>
                        <th className="px-6 py-3">Product</th>
                        <th className="px-6 py-3">Sales Volume</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                      {[
                        { n: "Laptop", v: "120" },
                        { n: "Mobile", v: "200" },
                        { n: "Tablet", v: "90" },
                        { n: "Watch", v: "150" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                          <td className="px-6 py-3 font-bold text-slate-700 dark:text-slate-300">{row.n}</td>
                          <td className="px-6 py-3 font-mono text-indigo-500">{row.v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-indigo-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <TrendingUp className="w-8 h-8 text-indigo-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Crucial Advantages</h2>
              </div>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                Bar charts are the backbone of business reporting. They convert abstract numbers into immediate, actionable visual hierarchies.
              </p>
              
              <div className="grid grid-cols-2 gap-4 flex-1 mb-8">
                 {[
                   { t: "Easy Understanding", d: "Instantly clear to anyone.", i: Sparkles },
                   { t: "Categorical Power", d: "Ideal for non-numeric labels.", i: Layers },
                   { t: "Visual Contrast", d: "Comparisons become obvious.", i: Layout },
                   { t: "Dashboard Ready", d: "Standard in analytics apps.", i: BarChart }
                 ].map((adv, i) => (
                   <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all hover:bg-white/10 group/item cursor-default flex flex-col justify-center">
                      <adv.i className="w-6 h-6 text-indigo-400 mb-3 transform group-hover/item:scale-110 transition-transform" />
                      <h4 className="font-bold text-white text-sm mb-1">{adv.t}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{adv.d}</p>
                   </div>
                 ))}
              </div>

              <div className="p-5 bg-indigo-500 rounded-[2rem] flex items-center shadow-xl shadow-indigo-500/20">
                 <div className="p-3 bg-white/20 rounded-xl mr-5">
                   <Lightbulb className="w-6 h-6 text-white" />
                 </div>
                 <p className="text-xs text-white/90 font-medium leading-relaxed">
                   "Bar charts identify which month had the highest sales in just a glance."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab & Console */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8">
          <div className="flex items-center">
            <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-3xl mr-6 shadow-sm border border-indigo-200 dark:border-indigo-800">
              <Terminal className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Bar Chart Studio</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: plt.bar(x, height)</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Bar', icon: Code },
              { id: 'styling', label: 'Styling', icon: Palette },
              { id: 'horizontal', label: 'Horizontal', icon: MoveRight },
              { id: 'grouped', label: 'Grouped', icon: Layers },
              { id: 'real_world', label: 'Real Case', icon: BarChart3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-3 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30 ring-2 ring-indigo-500/20' 
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-3" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[3.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 transition-all min-h-[550px] flex flex-col">
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-600 dark:text-indigo-400">
                    <Code className="w-6 h-6 mr-4" />
                    4️⃣ Basic Example: Student Marks
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      The core function creates vertical bars. X-axis is usually category names, and Y-axis is the magnitude.
                    </p>
                    <div className="bg-slate-950 rounded-[2rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <div className="absolute top-4 right-6 text-[10px] uppercase font-bold text-indigo-500/50">Python Syntax</div>
                        <button onClick={() => runDemo('basic_bar')} className="absolute bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-2xl shadow-xl hover:bg-indigo-500 active:scale-90 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                          <code className="block mb-2">import matplotlib.pyplot as plt</code>
                          <code className="block text-slate-500 italic mb-4"># Data for 4 students</code>
                          <code className="block">students = ["John", "Sara", "Mike", "Anna"]</code>
                          <code className="block">marks = [85, 90, 75, 88]</code>
                          <code className="block mt-6 text-indigo-400">plt.bar(students, marks)</code>
                          <code className="block mt-2 text-slate-400">plt.title("Student Marks")</code>
                          <code className="block text-slate-400">plt.xlabel("Students")</code>
                          <code className="block text-slate-400">plt.ylabel("Marks")</code>
                          <code className="block mt-4 text-emerald-500 font-bold">plt.show()</code>
                        </pre>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-indigo-100 dark:border-indigo-900/20">
                       <h4 className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">Resulting Output</h4>
                       <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">The chart will display four vertical bars, where the height of each bar represents the student's marks (85, 90, 75, 88).</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-emerald-500">
                    <Palette className="w-6 h-6 mr-4" />
                    5️⃣ Colors & 7️⃣ Width
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { l: "Red", c: "bg-red-500", v: "'red'" },
                      { l: "Emerald", c: "bg-emerald-500", v: "'green'" },
                      { l: "Indigo", c: "bg-indigo-500", v: "'blue'" },
                      { l: "Amber", c: "bg-amber-500", v: "'orange'" },
                    ].map((col, i) => (
                      <div key={i} className="flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-white/5">
                        <div className={`w-10 h-10 rounded-lg ${col.c} mr-4 shadow-sm`}></div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">{col.l}</p>
                          <code className="text-xs text-emerald-500">{col.v}</code>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800">
                     <pre className="font-mono text-sm text-slate-300">
                        <span className="text-slate-500"># Setting Bar Color & Width</span><br/>
                        plt.bar(students, marks, <br/>
                        &nbsp;&nbsp;<span className="text-emerald-400">color="green"</span>, <br/>
                        &nbsp;&nbsp;<span className="text-amber-400">width=0.5</span><br/>
                        )
                     </pre>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                     {[
                       { t: "Thin", v: "0.2" },
                       { t: "Medium", v: "0.5" },
                       { t: "Thick", v: "0.8" }
                     ].map((item, i) => (
                       <div key={i} className="text-center p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
                          <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">{item.t}</p>
                          <p className="text-sm font-bold text-indigo-500 leading-none">{item.v}</p>
                       </div>
                     ))}
                  </div>
                  
                  <button onClick={() => runDemo('color_bar')} className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl hover:bg-emerald-500 active:scale-95 transition-all uppercase text-[10px] tracking-widest">Update Simulation Appearance</button>
                </div>
              )}

              {/* Tab: Horizontal */}
              {activeTab === 'horizontal' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-orange-500">
                    <MoveRight className="w-6 h-6 mr-4" />
                    6️⃣ Horizontal Bar: plt.barh()
                  </h3>
                  <div className="p-6 bg-orange-500/10 rounded-2xl border border-orange-500/20 text-orange-700 dark:text-orange-400 text-xs font-medium leading-relaxed mb-6">
                     "Horizontal charts are useful when category names (like 'Infrastructure as a Service') are too long for the X-axis."
                  </div>
                  <div className="bg-slate-950 rounded-[2rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10"><MoveRight className="w-24 h-24 text-white" /></div>
                      <pre className="font-mono text-sm text-slate-300 relative z-10">
                        <span className="text-slate-500"># Using BarH instead of Bar</span><br/>
                        <span className="text-orange-400 font-bold">plt.barh</span>(students, marks)<br/><br/>
                        plt.title("Horizontal View")<br/>
                        plt.show()
                      </pre>
                      <button onClick={() => runDemo('horizontal_bar')} className="mt-8 bg-orange-500 text-white text-[10px] font-bold px-8 py-3 rounded-xl hover:bg-orange-400 transition-all uppercase tracking-widest">Render BarH</button>
                  </div>
                </div>
              )}

              {/* Tab: Grouped */}
              {activeTab === 'grouped' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex-1 flex flex-col h-full max-h-[500px] overflow-y-auto no-scrollbar pr-2">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-purple-500">
                    <Layers className="w-6 h-6 mr-4" />
                    8️⃣ Grouped Bar Charts
                  </h3>
                  <div className="space-y-6">
                    <p className="text-sm text-slate-500 leading-relaxed italic">Comparing Math vs Science marks for multiple students side-by-side.</p>
                    <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800 overflow-x-auto shadow-inner">
                       <pre className="font-mono text-[11px] leading-6 text-slate-400 whitespace-pre">
                         {`import numpy as np
import matplotlib.pyplot as plt

students = ["John", "Sara", "Mike", "Anna"]
math = [85, 90, 75, 88]
science = [80, 85, 78, 92]

# Positioning logic
x = np.arange(len(students))
width = 0.35

plt.bar(x - width/2, math, width, label="Math")
plt.bar(x + width/2, science, width, label="Science")

plt.xticks(x, students)
plt.legend()
plt.show()`}
                       </pre>
                    </div>
                    <button onClick={() => runDemo('grouped_bar')} className="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl shadow-xl hover:bg-purple-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Comparison Logic</button>
                  </div>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-pink-500">
                    <TrendingUp className="w-6 h-6 mr-4" />
                    9️⃣ Monthly Sales Case
                  </h3>
                  <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden group">
                     {/* Decorative Graph */}
                     <div className="absolute inset-0 flex items-end justify-center px-10 pb-10 opacity-10 pointer-events-none">
                        <div className="flex gap-4 w-full h-full items-end justify-center">
                           <div className="w-full bg-pink-500 rounded-t-lg h-[40%]"></div>
                           <div className="w-full bg-pink-500 rounded-t-lg h-[60%]"></div>
                           <div className="w-full bg-pink-500 rounded-t-lg h-[100%]"></div>
                           <div className="w-full bg-pink-500 rounded-t-lg h-[80%]"></div>
                        </div>
                     </div>
                     <pre className="font-mono text-sm text-slate-300 relative z-10">
                        months = [<span className="text-pink-400">"Jan", "Feb", "Mar", "Apr"</span>]<br/>
                        sales = [<span className="text-emerald-400">200, 250, 300, 280</span>]<br/><br/>
                        plt.bar(months, sales, <span className="text-amber-400">color="orange"</span>)<br/>
                        <span className="text-slate-500"># Always label for professional reports</span><br/>
                        plt.title("Monthly Sales Dashboard")<br/>
                        plt.show()
                     </pre>
                     <div className="mt-12 flex justify-end relative z-20">
                        <button onClick={() => runDemo('sales_case')} className="px-10 py-4 bg-pink-600 text-white font-extrabold rounded-2xl shadow-xl hover:bg-pink-500 active:scale-95 transition-all flex items-center">
                           <Play className="w-4 h-4 mr-3" /> GENERATE REPORT
                        </button>
                     </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Terminal Mockup */}
            <div className="bg-[#0c0c0c] rounded-[3rem] p-10 border border-slate-800 h-full min-h-[480px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] group-hover/terminal:bg-indigo-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-indigo-500" />
                      <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-widest font-mono">
                        MPL_BAR_SIM_v4
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                       <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                       <div className="w-3 h-3 rounded-full bg-slate-800 ring-2 ring-indigo-500/20"></div>
                    </div>
                  </div>

                  <div className="font-mono text-xs flex flex-col flex-1 overflow-y-auto max-h-[350px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-16 space-y-6">
                        <Activity className="w-20 h-20 opacity-10 animate-pulse" />
                        <div className="text-center">
                           <span className="block text-[10px] uppercase tracking-[0.3em] mb-2">System Idle</span>
                           <span className="text-[9px] font-bold">Select a tab and click Play to simulate output</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-indigo-500/40 mr-4 font-bold select-none text-[10px]">[{i+1}]</span>
                              <span className={`leading-relaxed ${
                                line.includes('Success') || line.includes('Verified') ? 'text-emerald-400 font-bold' :
                                line.includes('Plotting') || line.includes('Rendering') ? 'text-indigo-400' :
                                line.includes('Executing') || line.includes('Updating') ? 'text-amber-400' :
                                'text-slate-300'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-8 flex justify-between items-center border-t border-slate-800/50 mt-6">
                           <span className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">Process Ended Successfully</span>
                           <button onClick={resetConsole} className="text-[9px] text-indigo-500 hover:text-indigo-400 font-extrabold uppercase tracking-widest transition-colors">CLEAR</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Learning Structure Visualizer */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-[3rem] border border-white/10 shadow-xl overflow-hidden relative">
               <div className="absolute top-[-20%] left-[-20%] w-60 h-60 bg-white/5 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-extrabold text-xs mb-6 flex items-center uppercase tracking-[0.2em]">
                 <Lightbulb className="w-4 h-4 text-amber-400 mr-2" />
                 Lesson Pathway
               </h4>
               <div className="space-y-3">
                  {[
                    "Basic Bar Chart",
                    "Bar Colors",
                    "Horizontal Layout",
                    "Width Customization",
                    "Grouped Charts",
                    "Real Datasets"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center text-[11px] p-3 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all cursor-default relative overflow-hidden">
                       <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></div>
                       <span className="w-5 h-5 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mr-4 font-bold text-[9px]">{i+1}</span>
                       <span className="text-slate-400 group-hover:text-white transition-colors">{step}</span>
                       <CheckCircle2 className="w-3.5 h-3.5 ml-auto text-white/10 group-hover:text-emerald-400 transition-colors" />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tips & Tricks Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-white dark:bg-slate-900 p-10 sm:p-16 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transform rotate-12 scale-150"><Zap className="w-64 h-64 text-indigo-500" /></div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
             <div className="relative">
               <div className="absolute -top-10 -left-6 text-7xl font-bold text-indigo-500/5 select-none font-serif tracking-tighter italic">Pro</div>
               <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                 Professional Advice
               </h2>
               <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium capitalize">Mastering the aesthetics of categorical data visualization.</p>
             </div>
             <div className="h-0.5 w-32 bg-indigo-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {[
               { t: "Keep It Simple", d: "Aim for 4 – 10 categories. Too many bars create cognitive overload.", i: List, c: "text-indigo-500" },
               { t: "Use Strategic Colors", d: "Color bars selectively to highlight outliers or specific targets.", i: Palette, c: "text-emerald-500" },
               { t: "Grid Lines Matter", d: "Use plt.grid(axis='y') to help users map bar heights to exact values.", i: Layout, c: "text-amber-500" },
               { t: "Mandatory Labeling", d: "Never ship a chart without Titles, X-Labels, and Y-Labels.", i: ClipboardCheck, c: "text-rose-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group">
                 <div className={`p-5 bg-slate-50 dark:bg-slate-800/50 rounded- [2.5rem] mr-8 group-hover:bg-indigo-500 group-hover:scale-110 shadow-lg transition-all duration-500 ${tip.c} bg-opacity-10 group-hover:text-white`}>
                    <tip.i className="w-8 h-8" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors uppercase tracking-widest text-sm">⭐ {tip.t}</h4>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Final Challenge */}
      <section className="max-w-4xl mx-auto pb-24 px-4">
        <div className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 p-10 sm:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px] -z-0"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-1.5 bg-white/20 text-white rounded-full text-[10px] font-bold mb-8 border border-white/20 tracking-[0.2em] uppercase">
                🎯 Production Test
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                Language Popularity Benchmark
              </h2>
              <p className="text-indigo-100 text-lg mb-12 leading-relaxed font-medium">
                Create a bar chart comparing 4 major languages: Python (45), Java (30), C++ (20), and JavaScript (35). Ensure the layout is professional with full labeling.
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-indigo-900 hover:bg-slate-100 px-12 py-5 rounded-[2.5rem] text-sm font-extrabold transition-all shadow-2xl flex items-center group/btn active:scale-95"
               >
                 <Play className="w-5 h-5 mr-4 fill-indigo-900 group-hover/btn:scale-125 transition-transform" />
                 SUBMIT & RUN VISUALIZATION
               </button>
            </div>

            <div className="w-full md:w-80 flex flex-col items-center">
               <div className="bg-slate-950/80 backdrop-blur-xl rounded-[4rem] border border-white/10 p-10 relative shadow-2xl overflow-hidden w-full group-hover:scale-105 transition-transform duration-700">
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/20 ring-1 ring-red-500/40"></div>
                       <div className="w-3 h-3 rounded-full bg-amber-500/20 ring-1 ring-amber-500/40"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest italic opacity-50">Preview_Final.png</span>
                  </div>

                  <div className="h-48 flex items-end justify-center gap-4 relative border-b border-l border-white/10 px-4 pb-2">
                     <div className="w-full bg-indigo-500/80 rounded-t-xl h-[45%] animate-pulse"></div>
                     <div className="w-full bg-indigo-500/80 rounded-t-xl h-[30%] delay-75"></div>
                     <div className="w-full bg-indigo-500/80 rounded-t-xl h-[20%] delay-150"></div>
                     <div className="w-full bg-indigo-500/80 rounded-t-xl h-[35%] delay-200"></div>
                  </div>
                  
                  <div className="mt-10 flex items-center justify-center gap-3 text-white/40 text-[10px] font-extrabold tracking-[0.3em] uppercase">
                     <Sparkles className="w-3 h-3" />
                     Production Validated
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MplBars;
