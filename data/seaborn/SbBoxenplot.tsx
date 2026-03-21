import React, { useState } from 'react';
import { 
  Box, Info, Code, Terminal, 
  Layers, Play, Zap, Sparkles,
  Activity, Target, TrendingUp,
  Palette, History, AlertTriangle, Lightbulb,
  AlignEndHorizontal
} from 'lucide-react';

const SbBoxenplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'hue' | 'styling' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_plot':
        outLines = [
          'Loading dataset "tips"...',
          'Extracting X="day", Y="total_bill"...',
          'Calculating multiple quantile ranges (Letter Values)...',
          'Rendering Seaborn Boxen Plot (Letter Value Plot)...',
          'Success: Distribution depth & tail density displayed.'
        ];
        break;
      case 'hue_plot':
        outLines = [
          'Adding Hue parameter: "sex"',
          'Grouping large dataset by Day and Gender...',
          'Splitting quantiles into subgroups...',
          'Rendering thick and thin box layers for comparison...',
          'Visualization updated: Distribution by Gender.'
        ];
        break;
      case 'style_plot':
        outLines = [
          'Applying palette="coolwarm"...',
          'Swapping X and Y axes...',
          'Orientation: Horizontal',
          'Adapting letter-value boxes for horizontal spread...',
          'Styled horizontal boxen plot rendered.'
        ];
        break;
      case 'salary_example':
        outLines = [
          'Building DataFrame with deep distribution data...',
          '150 Rows Generated -> [HR, IT, Sales]',
          'Calculating deep quantiles for Salary ranges...',
          'HR Spread: $20,000 - $25,000',
          'IT Spread: $40,000 - $50,000',
          'Sales Spread: $30,000 - $45,000',
          'Plotting extreme tails... Engine rendering complete.'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  const ProTipIcon = <Lightbulb className="w-10 h-10 text-amber-400 mr-4" />;

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Header Area */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-cyan-100 dark:bg-cyan-900/30 rounded-3xl mb-8 shadow-sm border border-cyan-200 dark:border-cyan-800/50">
          <Box className="w-12 h-12 text-cyan-600 dark:text-cyan-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-[10px] font-bold mb-6 border border-cyan-500/20 tracking-[0.25em] uppercase">
          Advanced Distributions
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Boxen Plots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Unlock extreme distribution tracking. An advanced "Letter Value Plot" designed specifically to reveal the hidden depths, skewness, and tails of large datasets.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-cyan-500 rounded-2xl shadow-lg shadow-cyan-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is it?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
              "A Boxen Plot (Letter Value Plot) is an advanced version of a box plot. It shows data distribution with much more detail through multiple quantile layers."
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                 <Target className="w-5 h-5 mr-3 text-cyan-500" />
                 Why Use Boxen Plot?
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Large datasets (1000+ rows)",
                    "See distribution shape clearly",
                    "Extreme values & tails",
                    "More detail than boxplots"
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                       <span className="w-2 h-2 rounded-full bg-cyan-500 mr-4 shrink-0"></span>
                       <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-cyan-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Code className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Basic Syntax</h2>
              </div>
              
              <div className="bg-slate-950/80 p-6 rounded-3xl border border-cyan-500/20 mb-6 font-mono text-sm text-slate-300">
                <span className="text-pink-400">import</span> seaborn <span className="text-pink-400">as</span> sns<br/><br/>
                <span className="text-slate-500 italic"># Designed for deeper visual stats</span><br/>
                sns.<span className="text-cyan-400">boxenplot</span>(<br/>
                &nbsp;&nbsp;x=<span className="text-amber-300">None</span>,<br/>
                &nbsp;&nbsp;y=<span className="text-amber-300">None</span>,<br/>
                &nbsp;&nbsp;data=<span className="text-amber-300">None</span><br/>
                )
              </div>

              <div className="mt-auto p-5 bg-white/5 rounded-[2rem] border border-cyan-500/30 flex flex-col shadow-2xl shadow-cyan-500/10">
                <div className="flex items-center mb-3">
                   <Activity className="w-4 h-4 text-cyan-400 mr-3" />
                   <span className="text-xs text-white font-bold uppercase tracking-widest">Visual Layers</span>
                </div>
                <p className="text-xs text-cyan-200/80 leading-relaxed font-medium">
                  Boxplot → shows quartiles (Q1, median, Q3)<br/>
                  <strong className="text-cyan-300">Boxenplot → shows multiple quantile layers for deeper insight!</strong>
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
            <div className="p-4 bg-cyan-100 dark:bg-cyan-900/40 rounded-3xl mr-6 border border-cyan-200 dark:border-cyan-800">
              <Terminal className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Boxen Plot Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.boxenplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basics', icon: Box },
              { id: 'hue', label: 'Grouping', icon: Layers },
              { id: 'styling', label: 'Styling & Horizontal', icon: Palette },
              { id: 'real_world', label: 'Real Case', icon: History }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/30' 
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
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-cyan-600 dark:text-cyan-400">
                    <Code className="w-6 h-6 mr-4" />
                    Basic Boxen Plot
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Notice in the output how multiple concentric boxes are drawn, allowing you to see exactly where the mass of the data tails off. 
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <button onClick={() => runDemo('basic_plot')} className="absolute bottom-6 right-6 p-4 bg-cyan-600 text-white rounded-2xl shadow-xl hover:bg-cyan-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                          <code className="block text-pink-400 mb-2">import seaborn as sns</code>
                          <code className="block text-pink-400 mb-2">import matplotlib.pyplot as plt</code>
                          <code className="block mt-4 text-slate-500 italic"># Load Dataset</code>
                          <code className="block mb-4">df = sns.<span className="text-blue-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)</code>
                          <code className="block text-slate-500 italic"># Basic Boxen Plot</code>
                          <code className="block text-cyan-400 font-bold tracking-widest mb-4">sns.boxenplot(x="day", y="total_bill", data=df)</code>
                          <code className="block text-blue-400">plt.title(<span className="text-amber-300">"Distribution of Total Bill per Day"</span>)</code>
                          <code className="block">plt.show()</code>
                        </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Grouping */}
              {activeTab === 'hue' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <Layers className="w-6 h-6 mr-4" />
                    Adding Hue (Grouping)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    The <code>hue</code> parameter splits the layered distribution boxes into specific sub-groups (e.g., Male vs Female), allowing you to compare density drops across multiple categories easily.
                  </p>
                  
                  <div className="bg-slate-950 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-sm leading-8 text-slate-300">
                        <span className="text-slate-500"># Splits deep distribution into genders</span><br/>
                        sns.<span className="text-cyan-400">boxenplot</span>(<br/>
                        &nbsp;&nbsp;x=<span className="text-amber-300">"day"</span>, <br/>
                        &nbsp;&nbsp;y=<span className="text-amber-300">"total_bill"</span>, <br/>
                        &nbsp;&nbsp;<span className="text-pink-400 font-bold underline">hue="sex"</span>, <br/>
                        &nbsp;&nbsp;data=df<br/>
                        )<br/>
                        plt.title(<span className="text-amber-300">"Distribution by Day and Gender"</span>)<br/>
                        plt.show()
                     </pre>
                  </div>
                  <div className="flex justify-end pt-4">
                     <button onClick={() => runDemo('hue_plot')} className="px-10 py-5 bg-blue-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-blue-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Hue Split</button>
                  </div>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-pink-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Palette className="w-6 h-6 mr-4" />
                    Custom Appearance & Horizontal
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                     {[
                       { p: 'palette="coolwarm"', d: "Maps a beautiful color map to the boxes" },
                       { p: 'y="day", x="bill"', d: "Swaps axes for a Horizontal alignment" }
                     ].map((item, i) => (
                       <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                          <code className="text-xs font-bold text-pink-500 mb-2 block">{item.p}</code>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.d}</p>
                       </div>
                     ))}
                  </div>

                  <div className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800">
                     <pre className="font-mono text-sm text-slate-300 leading-relaxed">
                        <span className="text-slate-500"># Horizontal & Palette Styling</span><br/>
                        sns.boxenplot(<br/>
                        &nbsp;&nbsp;<span className="text-blue-400 font-bold">y</span>=<span className="text-amber-300">"day"</span>, <br/>
                        &nbsp;&nbsp;<span className="text-blue-400 font-bold">x</span>=<span className="text-amber-300">"total_bill"</span>,<br/>
                        &nbsp;&nbsp;data=df,<br/>
                        &nbsp;&nbsp;<span className="text-cyan-400 font-bold">palette</span>=<span className="text-amber-300">"coolwarm"</span><br/>
                        )<br/>
                        plt.title(<span className="text-amber-300">"Horizontal Styled Boxen Plot"</span>)<br/>
                        plt.show()
                     </pre>
                  </div>
                  <button onClick={() => runDemo('style_plot')} className="w-full py-5 bg-pink-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-pink-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Apply Styling Simulation</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-10">
                  <h3 className="text-2xl font-bold text-cyan-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <TrendingUp className="w-6 h-6 mr-4" />
                    Salary Distribution Case
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Boxen plots shine when you have <b>heavy</b> amounts of data to simulate. Let's imagine thousands of salaries across varying departments.
                  </p>

                  <div className="bg-slate-950 p-8 rounded-[3.5rem] border border-slate-800 shadow-2xl relative group overflow-hidden">
                     <pre className="font-mono text-[13px] leading-6 text-slate-300 relative z-10">
                       <span className="text-pink-400">import</span> pandas <span className="text-pink-400">as</span> pd<br/><br/>
                       data = pd.<span className="text-blue-400">DataFrame</span>({'{'}<br/>
                       &nbsp;&nbsp;<span className="text-amber-300">"Department"</span>: [<span className="text-amber-300">"HR"</span>]*<span className="text-cyan-400">50</span> + [<span className="text-amber-300">"IT"</span>]*<span className="text-cyan-400">50</span> + [<span className="text-amber-300">"Sales"</span>]*<span className="text-cyan-400">50</span>,<br/>
                       &nbsp;&nbsp;<span className="text-amber-300">"Salary"</span>: (<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;list(range(<span className="text-emerald-400">20000, 25000</span>)) +<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;list(range(<span className="text-emerald-400">40000, 50000</span>)) +<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;list(range(<span className="text-emerald-400">30000, 45000</span>))<br/>
                       &nbsp;&nbsp;)<br/>
                       {'}'})<br/><br/>
                       sns.<span className="text-cyan-400">boxenplot</span>(x=<span className="text-amber-300">"Department"</span>, y=<span className="text-amber-300">"Salary"</span>, data=data)
                     </pre>
                  </div>

                  <button onClick={() => runDemo('salary_example')} className="w-full py-5 bg-cyan-700 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-cyan-600 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Deep Distribution Graph</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
             {/* Terminal Output Console */}
             <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] group-hover/terminal:bg-cyan-500/10 transition-all duration-1000"></div>
               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-cyan-500" />
                      <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                        BOXEN_KERNEL
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                        <AlignEndHorizontal className="w-16 h-16 opacity-5 animate-pulse" />
                        <div className="text-center relative">
                           <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Stream</span>
                           <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-cyan-500/50 mr-4 font-black select-none text-[8px] mt-1">LV{i+1}</span>
                              <span className={`leading-relaxed font-medium ${
                                line.includes('Success') || line.includes('complete') ? 'text-emerald-400 font-bold' :
                                line.includes('Grouping') || line.includes('Splitting') ? 'text-blue-400' :
                                line.includes('Spread:') || line.includes('Horizontal') ? 'text-pink-400' :
                                line.includes('quantiles') || line.includes('layers') ? 'text-cyan-300 font-bold' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                           <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution Halted</span>
                           <button onClick={resetConsole} className="text-[9px] text-cyan-500 hover:text-cyan-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-cyan-500/20 pb-0.5">PURGE</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-cyan-500/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500"></div>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <Zap className="w-8 h-8 text-cyan-500 mr-4" />
               Key Insights <span className="text-xs ml-3 px-2 py-1 bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400 rounded-full uppercase tracking-widest">Very Important</span>
             </h2>

             <div className="space-y-6">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-cyan-400 mb-2">✔ Deep Distribution Focus</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                     It shows distribution depth, not just a summary. Each layer mapped on the plot represents a specific quantile range.
                   </p>
                </div>
                
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-cyan-400 mb-2">✔ The Boxplot Successor</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                     Vastly superior to standard boxplots when analyzing <b>Large datasets</b> and severely <b>Skewed data</b>.
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
                  { m: "Using boxenplot for small datasets", fx: "It becomes less meaningful. Stick to Boxplots or Swarmplots for small data." },
                  { m: "Confusing it entirely with a boxplot", fx: "Boxenplots show far more detail through layered boxes rather than simple whiskers." },
                  { m: "Ignoring the extremities (tails)", fx: "Boxenplot is explicitly designed to highlight those tails. Use them!" }
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
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-blue-900/20 z-0"></div>
          
          <div className="relative z-10 mb-16 text-center flex flex-col items-center">
             <h2 className="text-4xl font-black text-white mb-4 flex items-center justify-center">
               {ProTipIcon}
               Pro Tips (From Experience)
             </h2>
             <p className="text-lg text-slate-300 font-medium tracking-tight">Expert tricks for advanced letter value plots.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
             {[
               { t: "Large Data Only", c: "len(df) > 1000  # ideal use case", d: "Don't bother with datasets under a few hundred records. The algorithm needs volume to define quantiles accurately." },
               { t: "Combine with Strip Plot", c: 'sns.boxenplot(x="day", y="total_bill", data=df)\nsns.stripplot(x="day", y="total_bill", color="black", alpha=0.3)', d: "Stacking layers! This brilliant combo shows the aggregated distribution depth PLUS the actual scattered data points underneath." },
               { t: "Use Log Scale for Skewed Data", c: 'plt.yscale("log")', d: "Extremely skewed tails? Switch your Y-axis to logarithmic to prevent the visual from squishing the median." },
               { t: "Clean Grid UI", c: 'sns.set_style("whitegrid")', d: "The multiple boxes can be hard to track visually. A clean whitegrid background provides exact alignment guides." }
             ].map((tip, i) => (
               <div key={i} className="flex flex-col p-8 bg-slate-950/60 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:bg-slate-950 shadow-xl transition-all group">
                  <h4 className="font-extrabold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center mr-3 text-sm">🚀</span>
                    {tip.t}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{tip.d}</p>
                  <code className="bg-black/50 p-4 rounded-2xl text-cyan-300 font-mono text-xs whitespace-pre-wrap font-bold border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
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

export default SbBoxenplot;
