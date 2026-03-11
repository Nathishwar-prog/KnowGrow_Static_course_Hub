import React, { useState } from 'react';
import { 
  Grid3X3, Info, Code, Terminal, 
  Layers, Layout, Eye, Hash,
  Play, Lightbulb, Zap, CheckCircle2,
  AlertCircle, Sparkles, MousePointer2,
  BarChart, List, MoveRight, HelpCircle,
  TrendingUp, Users, Presentation, ClipboardCheck,
  Activity, Brush, Ruler, Check
} from 'lucide-react';

const MplGrid: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'axis' | 'styling' | 'bars' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_grid':
        outLines = [
          'Initializing Plot...',
          'Coordinates: [1, 10], [2, 15], [3, 20], [4, 25]',
          'Executing plt.grid(True)',
          'Generating background reference lines...',
          'Major Ticks detected on X and Y.',
          'Success: Bi-directional grid rendered.'
        ];
        break;
      case 'axis_grid':
        outLines = [
          'Setting grid axis="y"',
          'Disabling Vertical lines...',
          'Enabling Horizontal reference lines.',
          'Rendering clean comparison layout...',
          'Success: Y-axis grid only.'
        ];
        break;
      case 'styled_grid':
        outLines = [
          'Property Update: color="gray"',
          'Property Update: linestyle="--"',
          'Property Update: linewidth=0.5',
          'Applying dashed pattern to grid layers...',
          'Success: Professional subtle grid active.'
        ];
        break;
      case 'bar_grid':
        outLines = [
          'Plotting Products: [Laptop, Mobile, Tablet]',
          'Sales: [120, 200, 150]',
          'Enabling Y-axis grid for height comparison...',
          'Success: Bar chart with magnitude references.'
        ];
        break;
      case 'temp_case':
        outLines = [
          'Loading Temperature Data: [25, 28, 30, 27]',
          'Adding Markers: "o"',
          'plt.grid(True) -> Active',
          'Enhancing readability for 4 months...',
          'Success: Analytical temperature chart ready.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Validating solution...',
          'Inputs: days, hours',
          'plt.plot(days, hours, marker="o") -> Verified',
          'plt.grid(True) -> Verified',
          'Result: Correct! The study hour trends are now easy to track.'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Dynamic Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-amber-100 dark:bg-amber-900/30 rounded-3xl mb-8 shadow-sm border border-amber-200 dark:border-amber-800/50 transform hover:scale-110 transition-transform">
          <Grid3X3 className="w-12 h-12 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-[10px] font-bold mb-6 border border-amber-500/20 tracking-[0.25em] uppercase">
          Lesson 0.12
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Grid Lines</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Enhance precision and readability. Add reference lines to your charts to make value comparisons effortless and professional.
        </p>
      </header>

      {/* 2. Foundation Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-amber-500 rounded-2xl shadow-lg shadow-amber-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">1️⃣ What is a Grid?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium italic border-l-4 border-amber-500 pl-6">
              "A set of horizontal and vertical lines that appear behind the data in a chart to improve readability and make value comparisons easier."
            </p>
            
            <div className="p-8 bg-slate-50 dark:bg-slate-950 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 relative shadow-inner overflow-hidden">
               <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10 pointer-events-none">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="border border-slate-400"></div>
                  ))}
               </div>
               <div className="relative z-10 space-y-4">
                  <h4 className="text-xs font-black text-amber-500 uppercase tracking-widest flex items-center">
                    <Activity className="w-4 h-4 mr-2" /> Basic Syntax
                  </h4>
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                     <code className="text-emerald-400 font-mono text-lg">plt.grid(True)</code>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-[10px] font-bold uppercase tracking-tighter">
                     <div className="p-3 bg-white/50 dark:bg-slate-800 rounded-xl flex items-center">
                        <Check className="w-3 h-3 text-emerald-500 mr-2" /> True -{'>'} Enable
                     </div>
                     <div className="p-3 bg-white/50 dark:bg-slate-800 rounded-xl flex items-center opacity-50">
                        <AlertCircle className="w-3 h-3 text-rose-500 mr-2" /> False -{'>'} Disable
                     </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] -z-0"></div>
             <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-amber-600 rounded-2xl shadow-lg shadow-amber-600/20 mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">2️⃣ Why Grids Matter</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                  {[
                    { t: "Improved Readability", d: "Instantly estimate exact values.", i: Eye },
                    { t: "Easy Comparisons", d: "Track differences between bars.", i: Ruler },
                    { t: "Analytical Power", d: "Essential for financial/science reports.", i: Layout },
                    { t: "Professional Look", d: "Adds a layer of precision to plots.", i: Sparkles }
                  ].map((benefit, i) => (
                    <div key={i} className="p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all group/item">
                       <benefit.i className="w-6 h-6 text-amber-500 mb-3 transform group-hover/item:scale-110 transition-transform" />
                       <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{benefit.t}</h4>
                       <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{benefit.d}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-5 bg-amber-500 rounded-3xl flex items-center shadow-xl shadow-amber-500/10">
                   <Lightbulb className="w-6 h-6 text-white mr-4 animate-pulse" />
                   <p className="text-xs text-white/90 font-bold leading-tight">
                     "Without grids, estimating exact data values becomes architectural guesswork."
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab & Console */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-amber-100 dark:bg-amber-900/40 rounded-[2rem] mr-6 shadow-sm border border-amber-200 dark:border-amber-800">
              <Terminal className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Grid Customization Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.2em] mt-2 italic underline decoration-amber-500/30 underline-offset-4">Interactive Experiments</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Demo', icon: Code },
              { id: 'axis', label: 'Specific Axis', icon: MoveRight },
              { id: 'styling', label: 'Styles', icon: Brush },
              { id: 'bars', label: 'Bar Grids', icon: BarChart },
              { id: 'real_world', label: 'Temperature', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-3.5 rounded-3xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/30' 
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
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[580px] flex flex-col relative overflow-hidden transition-all duration-500">
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-amber-500">
                    <Code className="w-6 h-6 mr-4" />
                    4️⃣ Basic Grid Example
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      The simplest way to enable grids is by calling <code>plt.grid(True)</code>. This overlays reference lines on both axes.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <div className="absolute top-4 right-8 flex gap-2">
                           <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                           <div className="w-2 h-2 rounded-full bg-emerald-500/20"></div>
                        </div>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                          <code className="block mb-2 text-blue-400 font-bold">import matplotlib.pyplot as plt</code><br/>
                          <code className="block">plt.plot(x, y)</code><br/>
                          <code className="block mt-4 text-emerald-400 font-black p-2 bg-emerald-500/10 rounded-lg inline-block">plt.grid(True)</code><br/>
                          <code className="block mt-6">plt.title("Line Plot with Grid")</code>
                          <code className="block">plt.show()</code>
                        </pre>
                        <button onClick={() => runDemo('basic_grid')} className="absolute bottom-6 right-6 p-4 bg-amber-600 text-white rounded-2xl shadow-xl hover:bg-amber-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                    </div>
                    <div className="p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10">
                       <h4 className="text-[10px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-3 italic">Output Explanation</h4>
                       <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">The chart will display horizontal and vertical grid lines behind the plot data for better spatial reference.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Axis */}
              {activeTab === 'axis' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500">
                    <MoveRight className="w-6 h-6 mr-4" />
                    5️⃣ Grid on Specific Axis
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 group hover:border-indigo-500 transition-colors">
                        <span className="text-[10px] font-black text-indigo-500 uppercase block mb-2">Vertical Only</span>
                        <code className="text-sm font-mono text-slate-600 dark:text-slate-300">plt.grid(axis="x")</code>
                     </div>
                     <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 group hover:border-indigo-500 transition-colors">
                        <span className="text-[10px] font-black text-indigo-500 uppercase block mb-2">Horizontal Only</span>
                        <code className="text-sm font-mono text-slate-600 dark:text-slate-300">plt.grid(axis="y")</code>
                     </div>
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
                     {/* Decorative Axis Grid */}
                     <div className="absolute inset-x-0 top-0 h-full flex flex-col justify-between p-10 opacity-5 pointer-events-none">
                        <div className="w-full h-px bg-white"></div>
                        <div className="w-full h-px bg-white"></div>
                        <div className="w-full h-px bg-white"></div>
                        <div className="w-full h-px bg-white"></div>
                     </div>
                     <pre className="font-mono text-sm leading-relaxed text-slate-300 relative z-10">
                        <span className="text-slate-500"># Setting specific Y-axis grid</span><br/>
                        plt.plot(x, y)<br/><br/>
                        plt.<span className="text-indigo-400 font-bold">grid</span>(<span className="text-emerald-400">axis="y"</span>)<br/><br/>
                        plt.title("Y-axis Grid Only")
                     </pre>
                  </div>
                  <button onClick={() => runDemo('axis_grid')} className="w-full py-5 bg-indigo-600 text-white font-black rounded-[2.2rem] shadow-xl hover:bg-indigo-500 transition-all text-xs uppercase tracking-widest">Render Axis specific Plot</button>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-emerald-500 italic">
                    <Brush className="w-6 h-6 mr-4" />
                    6️⃣ Customizing Grid Look
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-3">
                     {[
                       { p: "color", v: "'gray'", d: "Hex or name" },
                       { p: "linestyle", v: "'--'", d: "'-', '--', ':', '.-'" },
                       { p: "linewidth", v: "0.5", d: "Thickness (float)" }
                     ].map((prop, i) => (
                       <div key={i} className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                          <code className="text-[10px] font-black text-emerald-500 uppercase block mb-1">{prop.p}</code>
                          <span className="text-xs font-mono font-bold text-slate-500">{prop.v}</span>
                       </div>
                     ))}
                  </div>

                  <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 shadow-2xl relative flex-1 min-h-[200px] flex flex-col justify-center">
                     <pre className="font-mono text-sm leading-relaxed text-slate-300">
                        plt.<span className="text-emerald-400 font-bold">grid</span>(<br/>
                        &nbsp;&nbsp;color=<span className="text-slate-400">"gray"</span>,<br/>
                        &nbsp;&nbsp;linestyle=<span className="text-slate-400">"--"</span>,<br/>
                        &nbsp;&nbsp;linewidth=<span className="text-slate-400">0.5</span><br/>
                        )
                     </pre>
                     <p className="mt-8 text-[11px] text-slate-500 font-medium italic">Professional Dashboard best practice: Subtle, dashed lines.</p>
                  </div>
                  <button onClick={() => runDemo('styled_grid')} className="w-full py-5 bg-emerald-700 text-white font-black rounded-3xl shadow-xl hover:bg-emerald-600 transition-all text-xs uppercase tracking-widest">Apply Styled Configuration</button>
                </div>
              )}

              {/* Tab: Bar Grids */}
              {activeTab === 'bars' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-amber-500">
                    <BarChart className="w-6 h-6 mr-4" />
                    7️⃣ Grid with Bar Charts
                  </h3>
                  <div className="bg-amber-500/5 p-6 rounded-3xl border border-amber-500/10 flex items-center gap-6">
                     <div className="p-4 bg-amber-500 rounded-2xl shrink-0"><BarChart className="w-8 h-8 text-white" /></div>
                     <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        "Grid lines help compare bar heights easily, especially on the Y-axis."
                     </p>
                  </div>
                  <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl relative group">
                     <pre className="font-mono text-[13px] leading-relaxed text-slate-400">
                        {`products = ["Laptop", "Mobile", "Tablet"]
sales = [120, 200, 150]

plt.bar(products, sales)

# Horizontal lines are best for bars
plt.grid(axis="y") 

plt.title("Product Sales Comparision")`}
                     </pre>
                  </div>
                  <button onClick={() => runDemo('bar_grid')} className="w-full py-5 bg-amber-600 text-white font-black rounded-3xl shadow-xl hover:bg-amber-500 transition-all text-xs uppercase tracking-widest italic tracking-tight">Render Bar Comparison</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-rose-500">
                    <Activity className="w-6 h-6 mr-4" />
                    8️⃣ Monthly Temperature Case
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-6">
                     <div className="flex-1 bg-white dark:bg-slate-950 p-6 rounded-3xl border dark:border-slate-800 shadow-sm">
                        <h4 className="font-black text-[10px] text-slate-400 uppercase mb-4 tracking-widest text-center">Dataset Analysis</h4>
                        <div className="space-y-3">
                           {[
                             { m: "Jan", t: "25°" },
                             { m: "Feb", t: "28°" },
                             { m: "Mar", t: "30°" }
                           ].map((item, i) => (
                             <div key={i} className="flex justify-between items-center text-xs font-bold border-b dark:border-slate-800 pb-2">
                                <span className="text-slate-500">{item.m}</span>
                                <span className="text-rose-500">{item.t}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                     <div className="flex-[2] bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 relative shadow-2xl overflow-hidden group">
                        <pre className="font-mono text-[12px] leading-relaxed text-slate-400">
                           {`plt.plot(months, temperature, marker="o")
plt.grid(True)
plt.title("Monthly Heat Trends")
plt.show()`}
                        </pre>
                        <div className="mt-8 flex justify-end">
                           <button onClick={() => runDemo('temp_case')} className="px-10 py-4 bg-rose-600 text-white font-black rounded-2xl shadow-xl hover:bg-rose-500 transition-all text-xs uppercase flex items-center tracking-tighter active:scale-95">
                              <Sparkles className="w-4 h-4 mr-3" /> Analyze Trends
                           </button>
                        </div>
                     </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            {/* Terminal Console Simulation */}
            <div className="bg-[#0a0a0d] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[480px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] group-hover/terminal:bg-amber-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-amber-500/70" />
                      <h3 className="font-bold text-slate-600 uppercase text-[10px] tracking-[0.4em] font-mono">
                        GRID_SIM_ENGINE_v4
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.4)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-3 space-y-4">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-8 opacity-20 select-none grayscale">
                        <Grid3X3 className="w-20 h-20 animate-pulse duration-[3000ms]" />
                        <div className="text-center">
                           <span className="block text-[8px] uppercase tracking-[0.6em] font-black text-amber-500 mb-2">Reference Engine Idle</span>
                           <span className="text-[10px] font-bold">Launch a Rendering Simulation</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-amber-500/30 mr-4 font-black select-none text-[8px] mt-1 italic tracking-tighter shrink-0">MPL::GRID</span>
                              <span className={`leading-relaxed font-semibold transition-colors ${
                                line.includes('Success') || line.includes('Correct') ? 'text-emerald-400 font-bold' :
                                line.includes('Initializing') || line.includes('Setting') ? 'text-amber-400 underline decoration-amber-500/20 underline-offset-4' :
                                line.includes('Property') || line.includes('Disabling') ? 'text-indigo-400' :
                                line.includes('Major') ? 'text-blue-400' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/40 mt-8">
                           <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-[ping_2s_infinite]"></span>
                              <span className="text-[8px] text-slate-600 font-black uppercase tracking-[0.3em]">Buffer Validated</span>
                           </div>
                           <button onClick={resetConsole} className="text-[9px] text-amber-500 hover:text-amber-400 font-black uppercase tracking-[0.2em] transition-colors border-b-2 border-amber-500/20 pb-0.5">Flush Terminal</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Learning Sequence Visualizer */}
            <div className="bg-gradient-to-br from-indigo-900 via-amber-950 to-slate-900 p-10 rounded-[4rem] border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-amber-500/5 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-extrabold text-[10px] mb-8 flex items-center uppercase tracking-[0.4em] opacity-80">
                 <ClipboardCheck className="w-4 h-4 text-emerald-400 mr-3" />
                 Styling Order Pathway
               </h4>
               <div className="space-y-3 px-2 relative z-10">
                  {[
                    "Colors", "Markers", "Line Styles", "Grid Lines", "Legends", "Subplots"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-12 h-10 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500 ${i === 3 ? 'bg-amber-600 shadow-xl shadow-amber-900/40 rotate-6 scale-110' : 'bg-white/5 border border-white/5 opacity-50'}`}>
                          <span className={`text-[11px] font-black ${i === 3 ? 'text-white' : 'text-slate-700'}`}>{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-bold tracking-widest transition-colors ${i === 3 ? 'text-white italic' : 'text-slate-500 group-hover/item:text-slate-300'}`}>{path}</span>
                       {i === 3 && <Sparkles className="w-3.5 h-3.5 ml-auto text-amber-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tips & Tricks Section */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="bg-white dark:bg-slate-900 p-12 sm:p-20 rounded-[5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] scale-150 rotate-12 -z-0">
             <Grid3X3 className="w-96 h-96 text-amber-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20 gap-8 relative z-10">
             <div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 flex items-center tracking-tighter">
                   <Zap className="w-10 h-10 text-amber-500 mr-6" />
                   Professional Visual Tactics
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium tracking-tight">Expert strategies for balanced, high-fidelity grid layouts.</p>
             </div>
             <div className="h-0.5 w-40 bg-amber-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
             {[
               { t: "Use Grids Sparingly", d: "Too many grid lines cause cognitive clutter. Always opt for subtle styles (dotted/dashed).", i: Brush, c: "text-amber-500" },
               { t: "The Y-Axis Focus", d: "Standard Dashboards usually only need Y-axis grids to track magnitude correctly.", i: MoveRight, c: "text-indigo-500" },
               { t: "Marker + Grid Combo", d: "Combining markers with grid lines ensures every data point is spatially anchored.", i: MousePointer2, c: "text-rose-500" },
               { t: "Industry Standard", d: "Essential for Financial, Scientific, and Analytics dashboards to prevent misinterpretation.", i: Layout, c: "text-emerald-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip">
                 <div className={`p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] mr-8 shadow-sm group-hover/tip:bg-slate-200 dark:group-hover/tip:bg-slate-950 transition-all duration-500 ${tip.c} bg-opacity-10 shrink-0`}>
                    <tip.i className="w-8 h-8 group-hover/tip:scale-110 transition-transform" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-extrabold text-slate-900 dark:text-white mb-3 group-hover/tip:text-amber-600 transition-colors uppercase tracking-[0.2em] text-[10px]">⭐ PRO TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Practice Challenge */}
      <section className="max-w-4xl mx-auto pb-24 px-6">
        <div className="bg-gradient-to-br from-amber-600 via-orange-700 to-indigo-950 p-12 sm:p-24 rounded-[5.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[100px] -z-0"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-16 items-center">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-4 py-1.5 bg-white/20 text-white rounded-full text-[10px] font-black mb-10 border border-white/20 tracking-[0.3em] uppercase">
                🎯 Lab Challenge
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                Daily Study Performance
              </h2>
              <p className="text-amber-100 text-lg mb-12 leading-relaxed font-medium italic">
                Plot your daily study hours (Mon-Fri) with <b>circular markers</b> and <b>Full Grid Lines enabled (plt.grid(True))</b> to visualize your dedication.
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-slate-950 text-amber-500 hover:bg-black px-12 py-6 rounded-[2.5rem] text-[11px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 border border-amber-500/20 uppercase tracking-[0.1em] italic mx-auto xl:mx-0"
               >
                 <Play className="w-5 h-5 mr-4 fill-amber-500 group-hover/btn:scale-125 transition-transform" />
                 SUBMIT ANALYTICAL GRID
               </button>
            </div>

            <div className="w-full xl:w-96 relative">
               <div className="bg-[#0c0c0c] rounded-[4.5rem] border border-white/10 p-12 relative shadow-2xl overflow-hidden group-hover:scale-[1.05] transition-transform duration-700">
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40 ring-2 ring-amber-500/10"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40 ring-2 ring-amber-500/10"></div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-600 font-bold uppercase tracking-[0.4em] italic opacity-50">Study_v1.png</span>
                  </div>

                  {/* Mock Visual Grid Representation */}
                  <div className="h-44 relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center">
                     <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 opacity-20">
                        {[...Array(25)].map((_, i) => (
                           <div key={i} className="border border-white"></div>
                        ))}
                     </div>
                     <Activity className="w-20 h-20 text-amber-500/40 animate-pulse" />
                  </div>
                  
                  <div className="mt-12 flex items-center justify-center gap-3 text-white/20 text-[10px] font-black uppercase tracking-[0.4em] select-none">
                     <Brush className="w-3 h-3" />
                     Hierarchy Sync
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Summary Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-20 opacity-50">
         <p className="text-xs font-medium dark:text-slate-400">
            Matplotlib Grid improves readability by enabling vertical and horizontal reference anchors behind your data.
         </p>
      </footer>

    </div>
  );
};

export default MplGrid;
