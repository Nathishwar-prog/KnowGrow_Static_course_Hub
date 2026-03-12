import React, { useState } from 'react';
<<<<<<< HEAD
import { 
  BarChart2, Info, Code, Terminal, 
  Layers, Layout, Eye, Hash,
  Play, Lightbulb, Zap, CheckCircle2,
  AlertCircle, Sparkles, MousePointer2,
  BarChart, List, MoveRight, HelpCircle,
  TrendingUp, Users, Presentation, ClipboardCheck,
  Activity, Brush, Ruler, Check, Filter, PieChart
} from 'lucide-react';

const MplHistograms: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'bins' | 'styling' | 'numpy' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_hist':
        outLines = [
          'Scanning Dataset: [55, 60, 62, 65, 70, 72, ...]',
          'Calculating min/max bounds...',
          'Applying default binning (10 bins)...',
          'plt.hist(data) -> Frequency map generated.',
          'Success: Histogram rendered showing distribution.'
        ];
        break;
      case 'bin_control':
        outLines = [
          'User Input: bins=5',
          'Dividing data range into 5 equal width intervals.',
          'Range 1 [10-18]: 2 values found.',
          'Range 2 [18-26]: 4 values found...',
          'Generating low-resolution frequency view.',
          'Success: 5-bins Histogram initialized.'
        ];
        break;
      case 'style_hist':
        outLines = [
          'Setting bar color: "skyblue"',
          'Setting edge color: "black"',
          'Updating aesthetic parameters...',
          'plt.hist(data, color="skyblue", edgecolor="black")',
          'Success: Stylized Histogram displayed with clear borders.'
        ];
        break;
      case 'numpy_gen':
        outLines = [
          'Importing NumPy as np...',
          'Generating Normal Distribution -> mean=50, std=10, size=1000',
          'Calculating probability density handles...',
          'Creating 30 detailed bins for statistical curve.',
          'Success: Bell Curve / Normal Distribution rendered.'
        ];
        break;
      case 'age_case':
        outLines = [
          'Loading Survey Data [Ages 18-32]...',
          'Categorizing into 6 specific age groups.',
          'Setting bar color: "green"',
          'Success: Population demographic distribution complete.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Validating student code...',
          'Dataset: usage_time -> [30, 45, 50, ...]',
          'bins=5 -> Logic OK',
          'color="purple" -> UI OK',
          'edgecolor="black" -> Clarity OK',
          'Result: Correct! Histogram successfully highlights app usage peaks.'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Statistics Inspired Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-violet-100 dark:bg-violet-900/30 rounded-[2.5rem] mb-8 shadow-sm border border-violet-200 dark:border-violet-800/50 transform hover:rotate-6 transition-transform">
          <BarChart2 className="w-12 h-12 text-violet-600 dark:text-violet-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-full text-[10px] font-bold mb-6 border border-violet-500/20 tracking-[0.4em] uppercase">
          Lesson 0.13
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500">Histograms</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Visualize frequency and density. Master the most essential tool for statistics, data science, and exploratory data analysis.
        </p>
      </header>

      {/* 2. Concept Overview Section */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          <div className="lg:col-span-12 xl:col-span-7 bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-violet-500 rounded-2xl shadow-lg shadow-violet-500/20 mr-4">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">1️⃣ What is a Histogram?</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium italic border-l-4 border-violet-500 pl-6">
                "A histogram is a chart that shows how frequently data values occur within specific ranges, called bins."
              </p>
              
              <div className="space-y-6">
                 <h4 className="text-xs font-black text-violet-500 uppercase tracking-widest flex items-center">
                   <Hash className="w-4 h-4 mr-2" /> 2️⃣ Example Frequency Data
                 </h4>
                 <div className="overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
                    <table className="w-full text-left">
                       <thead className="bg-violet-500/5 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                          <tr>
                             <th className="px-8 py-4">Score Range</th>
                             <th className="px-8 py-4 text-center">Frequency (Count)</th>
                          </tr>
                       </thead>
                       <tbody className="text-xs font-bold divide-y divide-slate-100 dark:divide-slate-800/50">
                          {[
                            { r: "50 – 60", f: "2" },
                            { r: "60 – 70", f: "3" },
                            { r: "70 – 80", f: "3" },
                            { r: "80 – 90", f: "3" },
                            { r: "90 – 100", f: "1" }
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-violet-500/5 transition-colors">
                               <td className="px-8 py-3 text-slate-600 dark:text-slate-300">{row.r}</td>
                               <td className="px-8 py-3 text-center text-violet-500">{row.f}</td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-900 p-10 rounded-[3.5rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white">
               <h3 className="text-2xl font-black mb-8 flex items-center tracking-tighter italic">
                 <Filter className="w-8 h-8 mr-4 text-violet-300" />
                 EDA Logic
               </h3>
               <div className="space-y-6">
                 {[
                   { t: "Distribution Analysis", d: "Understand shape and spread of numbers.", i: Sparkles },
                   { t: "Binning Mechanism", d: "Group individual values into ranges.", i: Layers },
                   { t: "EDA Powerhouse", d: "Analyze patterns before modeling.", i: Eye },
                   { t: "Machine Learning", d: "Check feature density for bias.", i: Zap }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/15 transition-all cursor-default">
                      <mod.i className="w-5 h-5 mr-5 text-violet-300" />
                      <div>
                         <h5 className="font-bold text-sm tracking-tight">{mod.t}</h5>
                         <p className="text-[10px] text-white/50">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Lab & Console Simulation */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-10 gap-8">
           <div className="flex items-center">
             <div className="p-4 bg-violet-100 dark:bg-violet-900/40 rounded-3xl mr-6 shadow-sm border border-violet-200 dark:border-violet-800 group cursor-help">
               <Terminal className="w-8 h-8 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform" />
             </div>
             <div>
               <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Histogram Frequency Lab</h2>
               <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em] mt-2 underline decoration-violet-500/30 underline-offset-4">3️⃣ Function: plt.hist()</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Example', icon: Code },
              { id: 'bins', label: 'Bins Control', icon: Hash },
              { id: 'styling', label: 'Color & Edge', icon: Brush },
              { id: 'numpy', label: 'NumPy Normal', icon: PieChart },
              { id: 'real_world', label: 'Real Case', icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-3.5 rounded-3xl text-xs font-bold transition-all whitespace-nowrap ${
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

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 transition-all min-h-[580px] flex flex-col relative overflow-hidden">
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-violet-500 italic">
                    <Code className="w-6 h-6 mr-4" />
                    4️⃣ Basic Histogram Example
                  </h3>
                  <div className="space-y-6 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                      Instead of showing individual points, <code>plt.hist()</code> automatically calculates ranges and counts.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-10 border border-slate-800 relative group">
                        <div className="absolute top-4 right-8 flex gap-1.5">
                           <div className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                        </div>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                           <code className="text-blue-400">import</code> matplotlib.pyplot <code className="text-blue-400">as</code> plt<br/><br/>
                           <code className="text-slate-500 italic"># Student exam scores</code><br/>
                           data = [55, 60, 62, 65, 70, 72, 75, 78, 80, 85, 88, 90]<br/><br/>
                           plt.<code className="text-fuchsia-400 font-black">hist</code>(data)<br/>
                           plt.title(<code className="text-emerald-400">"Student Score Distribution"</code>)<br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_hist')} className="absolute bottom-6 right-6 p-4 bg-violet-600 text-white rounded-2xl shadow-xl hover:bg-violet-500 transition-all active:scale-90">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                    </div>
                    <div className="p-6 bg-violet-500/5 rounded-3xl border border-violet-500/10 flex items-center shadow-inner">
                       <CheckCircle2 className="w-8 h-8 text-violet-500 mr-5 shrink-0" />
                       <p className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed italic uppercase tracking-tighter">
                         "The histogram will show bars representing score ranges and their frequencies automatically."
                       </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Bins */}
              {activeTab === 'bins' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500 underline decoration-indigo-500/20 underline-offset-8">
                    <Hash className="w-6 h-6 mr-4" />
                    5️⃣ Controlling Number of Bins
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                        <span className="text-[10px] font-black text-indigo-500 block mb-1">bins=5</span>
                        <p className="text-xs font-medium text-slate-400 italic">Simplified grouping.</p>
                     </div>
                     <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                        <span className="text-[10px] font-black text-indigo-500 block mb-1">bins=10</span>
                        <p className="text-xs font-medium text-slate-400 italic">Detailed distribution.</p>
                     </div>
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 shadow-2xl relative">
                     <div className="absolute top-0 right-0 p-8 opacity-10"><Hash className="w-20 h-20 text-white" /></div>
                     <pre className="font-mono text-sm leading-8 text-slate-400">
                        data = [10, 20, 22, 25, 30, 35, 40, 42, 45, 50]<br/><br/>
                        plt.hist(data, <span className="text-indigo-400 font-black italic">bins=5</span>)<br/>
                        plt.title("Histogram with 5 Bins")
                     </pre>
                  </div>
                  <button onClick={() => runDemo('bin_control')} className="w-full py-5 bg-indigo-600 text-white font-black rounded-3xl shadow-xl hover:bg-indigo-500 transition-all text-xs tracking-widest uppercase">Update Resolution (Bins)</button>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-fuchsia-500">
                    <Brush className="w-6 h-6 mr-4" />
                    6️⃣ & 7️⃣ Styling & Edge Colors
                  </h3>
                  <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border dark:border-slate-800 shadow-sm flex items-center gap-8">
                     <div className="w-16 h-16 rounded-2xl bg-sky-400 ring-4 ring-black ring-offset-2 ring-offset-slate-900 shadow-xl shrink-0"></div>
                     <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 leading-relaxed italic">
                        "Edge colors make the histogram bars clearer and improve visual separation."
                     </p>
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[4rem] border border-slate-800 shadow-2xl">
                     <pre className="font-mono text-sm leading-10 text-slate-300">
                        plt.hist(data, bins=5, <br/>
                        &nbsp;&nbsp;<span className="text-fuchsia-400 font-bold italic">color="skyblue"</span>, <br/>
                        &nbsp;&nbsp;<span className="text-emerald-400 font-bold italic">edgecolor="black"</span><br/>
                        )
                     </pre>
                  </div>
                  <button onClick={() => runDemo('style_hist')} className="w-full py-5 bg-fuchsia-600 text-white font-black rounded-[2.5rem] shadow-xl hover:bg-fuchsia-500 transition-all text-[10px] tracking-[0.3em] uppercase">Apply Aesthetic Layer</button>
                </div>
              )}

              {/* Tab: NumPy */}
              {activeTab === 'numpy' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-10">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-emerald-500">
                    <PieChart className="w-6 h-6 mr-4" />
                    8️⃣ Normal Distribution (NumPy)
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                     {[
                       { l: "Mean", v: "50", d: "Center of bell" },
                       { l: "Std Dev", v: "10", d: "Spread width" },
                       { l: "Samples", v: "1000", d: "Random points" }
                     ].map((st, i) => (
                       <div key={i} className="bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10 text-center">
                          <span className="text-[9px] font-black text-emerald-500 uppercase block mb-1">{st.l}</span>
                          <span className="text-xl font-black text-slate-800 dark:text-white block">{st.v}</span>
                       </div>
                     ))}
                  </div>
                  <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
                     <div className="absolute top-4 right-8 p-1.5 bg-emerald-500/10 text-emerald-500 rounded text-[8px] font-black tracking-widest border border-emerald-500/20 uppercase">Stat Simulator</div>
                     <pre className="font-mono text-xs leading-6 text-slate-400">
                       {`import numpy as np

# Generate 1000 random samples
data = np.random.normal(50, 10, 1000)

plt.hist(data, bins=30)
plt.title("Normal Distribution Histogram")`}
                     </pre>
                  </div>
                  <button onClick={() => runDemo('numpy_gen')} className="w-full py-5 bg-emerald-600 text-white font-black rounded-3xl shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs tracking-widest uppercase italic">Execute Gaussian Sampling</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-violet-500 italic">
                    <Users className="w-6 h-6 mr-4" />
                    9️⃣ Age Distribution Case
                  </h3>
                  <div className="bg-violet-500/5 p-10 rounded-[3rem] border border-violet-500/10 relative overflow-hidden group/case">
                     <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover/case:scale-125 transition-transform duration-1000"><PieChart className="w-24 h-24 text-violet-500" /></div>
                     <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-8 leading-relaxed italic pr-12">
                        "Survey analysis often uses histograms to show how demographic variables like ages or incomes are distributed across a population."
                     </p>
                     <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-8">
                        <pre className="font-mono text-xs text-slate-400 leading-normal">
                           ages = [18, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 30, 32]<br/><br/>
                           plt.hist(ages, <span className="text-violet-400 font-black">bins=6</span>, color="green")<br/>
                           plt.xlabel("Age")<br/>
                           plt.ylabel("Frequency")
                        </pre>
                     </div>
                     <button onClick={() => runDemo('age_case')} className="w-full py-4 bg-violet-600 text-white font-black rounded-2xl shadow-xl hover:bg-violet-500 transition-all text-xs uppercase tracking-[0.2em] transform active:scale-90 flex items-center justify-center">
                        <Users className="w-4 h-4 mr-3" /> Map Population Demographic
                     </button>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            
            {/* Console Output Studio */}
            <div className="bg-[#0b0c10] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[480px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px] group-hover/terminal:bg-violet-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-violet-500/70" />
                      <h3 className="font-bold text-slate-600 uppercase text-[10px] tracking-[0.4em] font-mono">
                        STAT_KERNEL_v13
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-800"></div>
                       <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-800"></div>
                       <div className="w-3 h-3 rounded-full bg-violet-500/50 shadow-[0_0_15px_rgba(139,92,246,0.4)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-3 space-y-4 font-semibold tracking-tight">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-6 opacity-20 filter grayscale select-none">
                        <Hash className="w-20 h-20 animate-bounce duration-[2000ms]" />
                        <div className="text-center">
                           <span className="block text-[8px] uppercase tracking-[0.4em] font-black text-violet-500 mb-2">Memory Latencies Detected</span>
                           <span className="text-[10px] font-bold">Pick a Distribution Mode to Render</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-violet-500/30 mr-4 font-black select-none text-[8px] mt-1 shrink-0">STAT::FRE</span>
                              <span className={`leading-relaxed transition-colors ${
                                line.includes('Success') || line.includes('Correct') ? 'text-emerald-400' :
                                line.includes('Calculating') || line.includes('Generating') ? 'text-amber-400 italic' :
                                line.includes('Logic') || line.includes('Input') ? 'text-indigo-400' :
                                line.includes('Result') ? 'text-violet-400 font-bold underline decoration-violet-500/20 underline-offset-4' :
                                'text-slate-400 uppercase text-[9px]'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/40 mt-8">
                           <div className="flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                               <span className="text-[8px] text-slate-600 font-black uppercase tracking-[0.3em]">Distribution Finalized</span>
                           </div>
                           <button onClick={resetConsole} className="text-[9px] text-violet-500 hover:text-violet-400 font-black uppercase tracking-[0.2em] transition-colors flex items-center italic">
                              [ FLUSH BUFFER ]
                           </button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Teaching Order Visualizer */}
            <div className="bg-gradient-to-br from-indigo-900 via-fuchsia-950 to-slate-900 p-10 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-fuchsia-500/5 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-extrabold text-[10px] mb-8 flex items-center uppercase tracking-[0.4em] opacity-80">
                 <ClipboardCheck className="w-4 h-4 text-violet-400 mr-3" />
                 Statistical Roadmap
               </h4>
               <div className="space-y-3 relative z-10 px-2 font-mono">
                  {[
                    "Line Plot", "Bar Chart", "Scatter Plot", "Histograms", "Box Plot"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-12 h-10 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500 ${i === 3 ? 'bg-violet-600 shadow-xl shadow-violet-900/40 rotate-6 scale-110' : 'bg-white/5 border border-white/10 opacity-40'}`}>
                          <span className={`text-[10px] font-black ${i === 3 ? 'text-white' : 'text-slate-600'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-bold tracking-widest transition-colors ${i === 3 ? 'text-violet-400 italic' : 'text-slate-500 group-hover/item:text-slate-300'}`}>{path}</span>
                       {i === 3 && <Sparkles className="w-3.5 h-3.5 ml-auto text-violet-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Tips Grid */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="bg-white dark:bg-slate-900 p-12 sm:p-20 rounded-[4.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 p-16 opacity-[0.03] scale-150 rotate-12 -z-0">
             <BarChart2 className="w-96 h-96 text-violet-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20 gap-8 relative z-10">
             <div>
               <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 flex items-center tracking-tighter">
                 Professional EDA Advice
               </h2>
               <p className="text-lg text-slate-500 dark:text-slate-400 font-medium tracking-tight">How Data Scientists use Histograms for meaningful insights.</p>
             </div>
             <div className="h-0.5 w-40 bg-violet-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
             {[
               { t: "The Bin Sweet Spot", d: "Too few bins oversimplify; too many add noise. Start with 10–30 bins for most datasets.", i: Hash, c: "text-violet-500" },
               { t: "Distribution Archetypes", d: "Histograms are ideal for Income, Exam scores, Age distribution, and ML feature analysis.", i: Users, c: "text-indigo-500" },
               { t: "Density Pairings", d: "Professional projects often overlay kernel density curves for smooth statistical analysis.", i: Activity, c: "text-fuchsia-500" },
               { t: "EDA Mandatory", d: "Always build histograms during Exploratory Data Analysis to identify outliers or skewness.", i: PieChart, c: "text-emerald-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group p-2">
                 <div className={`p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] mr-8 group-hover:bg-violet-500/10 shadow-sm transition-all duration-500 ${tip.c} bg-opacity-10 shrink-0`}>
                    <tip.i className="w-8 h-8 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-violet-600 transition-colors uppercase tracking-[0.2em] text-[10px]">⭐ PRO TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold italic">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Practice Mission */}
      <section className="max-w-4xl mx-auto pb-24 px-6">
        <div className="bg-gradient-to-br from-violet-600 via-fuchsia-700 to-indigo-900 p-12 sm:p-24 rounded-[5.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-300/10 rounded-full blur-[100px] -z-0"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-16 items-center">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-[10px] font-black mb-10 border border-white/20 tracking-[0.4em] uppercase">
                🎯 Lab Challenge
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight tracking-tighter italic">
                Daily App Usage
              </h2>
              <p className="text-violet-100 text-lg mb-12 leading-relaxed font-medium max-w-lg mx-auto xl:mx-0">
                Create a histogram of app usage time (mins). Apply <b>5 bins</b>, a <b>purple</b> fill, and a <b>black edgecolor</b> for peak clarity.
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-slate-950 text-white hover:bg-black px-12 py-6 rounded-[2.5rem] text-[11px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 border border-white/10 mx-auto xl:mx-0 uppercase tracking-widest italic"
               >
                 <Play className="w-5 h-5 mr-4 fill-violet-500 group-hover/btn:scale-125 transition-transform" />
                 SUBMIT EDA DISTRIBUTIONS
               </button>
            </div>

            <div className="w-full xl:w-96 relative">
               <div className="bg-[#0c0c0c] rounded-[4.5rem] border border-white/10 p-12 relative shadow-2xl overflow-hidden group-hover:scale-[1.05] transition-transform duration-700">
                  <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-4 px-2">
                    <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-violet-500/40 ring-2 ring-violet-500/10 animate-pulse"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-violet-500/40 ring-2 ring-violet-500/10"></div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-600 font-bold uppercase tracking-[0.4em] italic opacity-50">App_Usage_Dist.png</span>
                  </div>

                  {/* Mock Visual representation */}
                  <div className="h-44 flex items-end justify-center gap-1.5 px-4 relative">
                     <div className="w-8 bg-violet-500 h-[20%] rounded-t-lg border border-black shadow-lg"></div>
                     <div className="w-8 bg-violet-500 h-[50%] rounded-t-lg border border-black shadow-lg"></div>
                     <div className="w-8 bg-violet-400 h-[85%] rounded-t-lg border border-black shadow-lg animate-pulse"></div>
                     <div className="w-8 bg-violet-500 h-[60%] rounded-t-lg border border-black shadow-lg"></div>
                     <div className="w-8 bg-violet-600 h-[30%] rounded-t-lg border border-black shadow-lg"></div>
                     
                     <div className="absolute top-0 right-0 p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                        <span className="text-[8px] font-bold text-white/40 uppercase">Frequency View</span>
                     </div>
                  </div>
                  
                  <div className="mt-12 flex items-center justify-center gap-3 text-white/20 text-[10px] font-black uppercase tracking-[0.4em] select-none">
                     <Sparkles className="w-3 h-3" />
                     Distribution Sync
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Learning Roadmap Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-20 opacity-40 hover:opacity-100 transition-opacity">
         <p className="text-xs font-bold text-slate-500 dark:text-slate-400 italic">
            Histograms group individual points into range bins to expose patterns in raw numerical data.
         </p>
      </footer>

=======
import {
  BarChart3, Copy, Check, Info, ArrowRight,
  Maximize2, Terminal, Eye, Layout, 
  Activity, Code, List, BarChart2,
  TrendingUp, Briefcase, Zap, Settings,
  Hash, AlignLeft, MoveHorizontal, MoveVertical,
  Stethoscope, PieChart, FlaskConical, Scale, Tablet,
  Grid, Cpu
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-violet-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
>>>>>>> 8e160902b63975ba55c058e2b2697ae2fb5543b6
    </div>
  );
};

<<<<<<< HEAD
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

const MplHistograms: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-950/20 min-h-screen font-sans">
      
      {/* 1. Header & Intro */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <BarChart3 className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Histograms
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
           Visualizing the distribution of numerical data through frequency-based intervals.
        </p>
      </header>

      {/* 1 & 2. Intro and Importance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-violet-500" /> 1. Introduction
          </h2>
          <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                A <strong>Histogram</strong> is used to show the distribution of numerical data. Instead of showing individual points, it groups data into intervals called <strong>bins</strong>.
              </p>
              <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-100 dark:border-violet-800/40">
                <p className="text-violet-800 dark:text-violet-300 text-sm font-bold mb-2 uppercase tracking-wider underline">The Concept:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    Displays how frequently values occur within specific ranges, providing a "bird's eye view" of dataset density.
                </p>
              </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
              <Activity size={150} />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-yellow-500" /> 2. Why Histograms Matter
          </h2>
          <div className="space-y-4 relative z-10">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Histograms are vital for detecting patterns, spreads, and frequency in datasets.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Dataset (Scores)</p>
                  <p className="text-xs font-mono text-violet-500 break-all leading-relaxed">
                    45, 50, 52, 55, 60, 62, 65, 70, 72, 75, 80
                  </p>
              </div>
              <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-gray-500 uppercase">
                  <li className="flex items-center"><Check className="w-3 h-3 text-green-500 mr-2" /> Distribution</li>
                  <li className="flex items-center"><Check className="w-3 h-3 text-green-500 mr-2" /> Data Spread</li>
                  <li className="flex items-center"><Check className="w-3 h-3 text-green-500 mr-2" /> Frequency</li>
                  <li className="flex items-center"><Check className="w-3 h-3 text-green-500 mr-2" /> Pattern Detection</li>
              </ul>
          </div>
        </div>
      </section>

      {/* 3. Example of Histogram Bins */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl -z-10"></div>
              <h2 className="text-3xl font-black mb-10 flex items-center border-b border-slate-700 pb-4">
                  <Hash className="w-8 h-8 mr-4 text-violet-400" /> 3. Histogram Bins
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <p className="text-lg text-slate-300 font-medium leading-relaxed">Bins divide your data into uniform ranges. Frequency tracks how many samples fall into each.</p>
                    <ResultTable 
                        headers={['Score Range', 'Frequency']}
                        rows={[
                            ['40 – 50', <span className="text-violet-400 font-bold">2</span>],
                            ['50 – 60', <span className="text-violet-400 font-bold">3</span>],
                            ['60 – 70', <span className="text-violet-400 font-bold">3</span>],
                            ['70 – 80', <span className="text-violet-400 font-bold">2</span>],
                            ['80 – 90', <span className="text-violet-400 font-bold">1</span>]
                        ]}
                    />
                  </div>
                  
                  <div className="bg-black/30 p-8 rounded-3xl border border-slate-700/50 shadow-inner">
                      <p className="text-xs font-black text-violet-400 mb-6 uppercase tracking-widest text-center">Bin Visualization</p>
                      <div className="flex flex-col items-center">
                          <pre className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
{`Frequency
3 |      █
2 |  █   █   █
1 |      █   █   █
   ---------------------
   40  50  60  70  80
       Score Range`}
                          </pre>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4 & 5. Function & Basic Example */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <Terminal className="w-6 h-6 mr-3 text-violet-500" /> 4 & 5. plt.hist() Function
                </h2>
                <div className="bg-violet-50 dark:bg-violet-950/20 p-4 rounded-xl border border-violet-100 dark:border-violet-800/40 mb-6 w-full">
                    <p className="text-xs font-bold text-violet-800 dark:text-violet-400 mb-2 uppercase tracking-tighter italic">Library Command</p>
                    <code className="text-xl font-mono text-violet-600 dark:text-violet-300">plt.hist(data)</code>
                </div>
                <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\ndata = [45,50,52,55,60,62,65,70,72,75,80]\n\nplt.hist(data)\n\nplt.title("Student Score Distribution")\nplt.show()`} title="Basic Score Histogram" />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <List className="w-6 h-6 mr-3 text-violet-500" /> Parameter Details
                </h2>
                <ResultTable 
                    headers={['Parameter', 'Description']}
                    rows={[
                        [<code className="text-violet-600 font-bold">data</code>, 'The input dataset values'],
                        [<code className="text-violet-600 font-bold">bins</code>, 'Number of intervals'],
                        [<code className="text-violet-600 font-bold">color</code>, 'Bar fill color'],
                        [<code className="text-violet-600 font-bold">edgecolor</code>, 'Border color for bins']
                    ]}
                />
                <div className="p-4 bg-violet-50 dark:bg-violet-900/10 rounded-xl border border-violet-100 dark:border-violet-800/40 w-full">
                    <p className="text-xs text-violet-700 dark:text-violet-400 font-bold">💡 Matplotlib automatically calculates bin sizes if not specified.</p>
                </div>
            </div>
      </section>

      {/* 6. Visualization of Histogram */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-200 dark:border-gray-700 text-center">
                 <h2 className="text-3xl font-black mb-8 pb-4 border-b border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white inline-block px-12">
                     6. Visual Output Analysis
                 </h2>
                 <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                     <div className="bg-gray-950 rounded-2xl p-10 font-mono text-violet-400 text-sm shadow-inner border border-gray-800">
<pre className="leading-relaxed">
{`Frequency
3 |      █
2 |  █   █   █
1 |      █   █   █
   ---------------------
   40  50  60  70  80
       Score Range`}
</pre>
                     </div>
                     <div className="text-left max-w-sm space-y-4">
                         <div className="flex items-start">
                             <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mr-4 shrink-0 font-bold text-violet-500 italic text-xs">Y</div>
                             <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-bold underline decoration-violet-500/20 underline-offset-4">Y-Axis represents "Frequency" (count of occurrences).</p>
                         </div>
                         <div className="flex items-start">
                             <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mr-4 shrink-0 font-bold text-violet-500 italic text-xs">X</div>
                             <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-bold underline decoration-violet-500/20 underline-offset-4">X-Axis segments represent "Bins" (data ranges).</p>
                         </div>
                     </div>
                 </div>
          </div>
      </section>

      {/* 7. Setting Number of Bins */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <Grid className="w-6 h-6 mr-3 text-violet-500" /> 7. Tuning the Bin Count
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">Control the resolution of your distribution. More bins unveil finer details.</p>
                <CodeSnippetBlock codeSnippet={`plt.hist(data, bins=5)\n# Groups data into exactly 5 equal-width intervals`} title="Specifying 5 Bins" />
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center border border-slate-800">
                <p className="text-[10px] uppercase font-bold text-violet-400 mb-4 tracking-widest italic">Granular View (5 Bins)</p>
<pre className="text-xs font-mono text-slate-300 leading-none">
{`Frequency
3 |     █
2 | █   █
1 | █   █   █
   ------------------
   40 50 60 70 80`}
</pre>
            </div>
      </section>

      {/* 8 & 9. Color and Borders */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Settings className="w-6 h-6 mr-3 text-violet-500" /> 8 & 9. Style Customization
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">Enhance visual clarity by adding fill colors and distinct borders to each bin.</p>
                <div className="space-y-4 mb-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/40 rounded-xl">
                        <code className="text-green-700 dark:text-green-400 font-bold italic">color="green"</code>
                    </div>
                </div>
                <CodeSnippetBlock codeSnippet={`plt.hist(data, bins=5, color="blue", edgecolor="black")`} title="High-Contrast Histogram" />
            </div>

            <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center">
                <div className="flex space-x-1 items-end h-32">
                    <div className="w-8 h-20 bg-blue-500 border border-black shadow-lg"></div>
                    <div className="w-8 h-28 bg-blue-500 border border-black shadow-lg"></div>
                    <div className="w-8 h-12 bg-blue-500 border border-black shadow-lg"></div>
                </div>
                <p className="mt-8 text-xs font-bold text-gray-400 uppercase tracking-widest text-center shadow-sm py-1 px-4 bg-white dark:bg-gray-800 rounded-full">edgecolor="black"</p>
            </div>
      </section>

      {/* 10. Random Data */}
      <section className="max-w-6xl mx-auto mb-16 px-8 py-12 bg-slate-900 rounded-[2.5rem] shadow-2xl text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl font-black mb-6 flex items-center border-b border-slate-800 pb-4">
                      <Cpu className="w-8 h-8 mr-4 text-violet-400" /> 10. Histogram with Random Data
                  </h2>
                  <p className="text-lg text-slate-300 mb-6">Histograms shine when dealing with massive datasets, often used to verify if a dataset follows a particular statistical distribution (like Normal/Bell curve).</p>
                  <div className="p-4 bg-violet-950/30 rounded-xl border border-violet-500/20">
                     <p className="text-xs font-bold text-violet-400 mb-1 uppercase tracking-widest">Logic Breakdown</p>
                     <p className="text-sm text-slate-400 leading-relaxed italic">
                        <code className="text-violet-300 font-bold">np.random.normal()</code> creates the data points, and the histogram renders the pattern.
                     </p>
                  </div>
              </div>
              <CodeSnippetBlock codeSnippet={`import numpy as np\n\ndata = np.random.normal(50, 10, 100)\n\nplt.hist(data, bins=10)\n\nplt.title("Random Data Distribution")\nplt.show()`} title="Simulated Distribution" />
          </div>
      </section>

      {/* 11. Real World Applications */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-violet-600 to-purple-800 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl text-white text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.1),transparent)]"></div>
               <h2 className="text-3xl font-black mb-10 pb-4 border-b border-white/20 relative z-10">
                   11. Real World Applications
               </h2>
               
               <div className="grid md:grid-cols-4 gap-6 relative z-10 text-left">
                   
                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-violet-200 flex items-center mb-4">
                           <FlaskConical className="w-5 h-5 mr-3" /> Data Science
                       </h3>
                       <p className="text-[11px] text-violet-50 leading-relaxed italic uppercase font-bold">Understanding dataset distribution for cleaning.</p>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-purple-200 flex items-center mb-4">
                           <Layout className="w-5 h-5 mr-3" /> Machine Learning
                       </h3>
                       <p className="text-[11px] text-purple-50 leading-relaxed italic uppercase font-bold">Analyzing features in training data sets.</p>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-pink-200 flex items-center mb-4">
                           <Scale className="w-5 h-5 mr-3" /> Finance
                       </h3>
                       <p className="text-[11px] text-pink-50 leading-relaxed italic uppercase font-bold">Visualizing stock market return distribution.</p>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-blue-200 flex items-center mb-4">
                           <Stethoscope className="w-5 h-5 mr-3" /> Healthcare
                       </h3>
                       <p className="text-[11px] text-blue-50 leading-relaxed italic uppercase font-bold">Tracking patient age or heart rate ranges.</p>
                   </div>

               </div>

               <div className="mt-12 flex flex-col items-center relative z-10">
                  <div className="flex flex-wrap justify-center items-center gap-4 bg-violet-950/40 backdrop-blur-sm p-4 rounded-3xl border border-violet-500/30 text-xs sm:text-sm font-bold uppercase tracking-widest text-violet-200">
                    <span>Raw Data</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span>Histogram</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span className="text-white bg-violet-500 px-4 py-1 rounded-full shadow-lg">Understand Pattern</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span className="text-green-400">Decision Making</span>
                  </div>
               </div>
          </div>
      </section>

    </div>
  );
};

>>>>>>> 8e160902b63975ba55c058e2b2697ae2fb5543b6
export default MplHistograms;
