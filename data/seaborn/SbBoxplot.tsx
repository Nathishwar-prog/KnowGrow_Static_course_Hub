import React, { useState } from 'react';
import { 
  Box, Info, Code, Terminal, 
  Layers, Play, Zap, Sparkles,
  Activity, Target, TrendingUp,
  Palette, History, AlertTriangle, Lightbulb,
  AlignEndHorizontal, Table, Search, CheckCircle2
} from 'lucide-react';

const SbBoxplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'hue' | 'styling' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_plot':
        outLines = [
          'Loading dataset "tips"...',
          'Extracting X="day", Y="total_bill"...',
          'Calculating Quartiles (Q1, Median, Q3)...',
          'Mapping Interquartile Range (IQR)...',
          'Plotting whiskers & detecting distinct outliers...',
          'Success: Five-number summary distribution displayed.'
        ];
        break;
      case 'hue_plot':
        outLines = [
          'Adding Hue parameter: "sex"',
          'Grouping underlying data into subgroups...',
          'Splitting category "day" into Male & Female boxes...',
          'Recalculating quartiles per respective group...',
          'Rendering adjacent nested comparisons.',
          'Visualization updated successfully.'
        ];
        break;
      case 'style_plot':
        outLines = [
          'Setting visual palette="Set2"...',
          'Applying explicit outlier rendering: showfliers=True...',
          'Swapping X and Y axes...',
          'Orientation switched to: Horizontal',
          'Horizontal styled Box Plot generated.'
        ];
        break;
      case 'salary_example':
        outLines = [
          'Building DataFrame from Salary dictionaries...',
          '[HR, IT, Sales] -> Categorical distribution detected.',
          'Scanning for extreme variability...',
          'Outlier detected in IT: $120,000',
          'Rendering standard boxes for general population...',
          'Plotting isolated dots for anomalies...',
          'Business salary distribution graph rendered.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-amber-100 dark:bg-amber-900/30 rounded-3xl mb-8 shadow-sm border border-amber-200 dark:border-amber-800/50">
          <Box className="w-12 h-12 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-[10px] font-bold mb-6 border border-amber-500/20 tracking-[0.25em] uppercase">
          Core Distributions
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Box Plots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          The ultimate Whisker Plot. Visualize numerical data distributions, understand the five-number summary, and instantly expose hidden outliers.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-amber-500 rounded-2xl shadow-lg shadow-amber-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is a Box Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-amber-500 pl-6">
              "A Box Plot (or whisker plot) visually summarizes the distribution of numerical data using quartiles. It's the core concept learners must understand first."
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                 <Activity className="w-5 h-5 mr-3 text-amber-500" />
                 The Five-Number Summary
               </h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Minimum", "Q1 (25%)", "Median (50%)", "Q3 (75%)", "Maximum", "Outliers"
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-center p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
                       {stat}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-amber-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Target className="w-8 h-8 text-amber-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Why Use Box Plot?</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                  {[
                    { t: "Understand Data Distribution", i: AlignEndHorizontal },
                    { t: "Detect Outliers Instantly", i: Search },
                    { t: "Compare Multiple Categories", i: Layers },
                    { t: "Identify Dataset Skewness", i: TrendingUp }
                  ].map((reason, i) => (
                    <div key={i} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                       <reason.i className="w-5 h-5 text-amber-500 mr-4" />
                       <span className="text-sm font-bold text-slate-200">{reason.t}</span>
                    </div>
                  ))}
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-amber-500/20 font-mono text-sm text-slate-300">
                <span className="text-slate-500 italic"># Basic Syntax</span><br/>
                sns.<span className="text-orange-400">boxplot</span>(<br/>
                &nbsp;&nbsp;x=<span className="text-amber-300">None</span>, y=<span className="text-amber-300">None</span>, data=<span className="text-amber-300">None</span><br/>
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
            <div className="p-4 bg-amber-100 dark:bg-amber-900/40 rounded-3xl mr-6 border border-amber-200 dark:border-amber-800">
              <Terminal className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Box Plot Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.boxplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basics', icon: Box },
              { id: 'hue', label: 'Grouping', icon: Layers },
              { id: 'styling', label: 'Styling & Outliers', icon: Palette },
              { id: 'real_world', label: 'Real Case', icon: History }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${
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

        <div className="grid lg:grid-cols-12 gap-8 items-start text-slate-100">
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 transition-all min-h-[550px] flex flex-col">
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-amber-600 dark:text-amber-400">
                    <Code className="w-6 h-6 mr-4" />
                    Basic Box Plot
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      By providing <code>x</code> and <code>y</code> columns mapped directly to your dataframe, Seaborn groups the numerical data and calculates all quartiles completely under the hood. 
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <button onClick={() => runDemo('basic_plot')} className="absolute bottom-6 right-6 p-4 bg-amber-600 text-white rounded-2xl shadow-xl hover:bg-amber-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                          <code className="block text-orange-400 mb-2">import seaborn as sns</code>
                          <code className="block text-orange-400 mb-2">import matplotlib.pyplot as plt</code>
                          <code className="block mt-4 text-slate-500 italic"># Load Dataset</code>
                          <code className="block mb-4">df = sns.<span className="text-sky-400">load_dataset</span>(<span className="text-yellow-300">"tips"</span>)</code>
                          <code className="block text-slate-500 italic"># Basic Box Plot</code>
                          <code className="block text-amber-400 font-bold tracking-widest mb-4">sns.boxplot(x="day", y="total_bill", data=df)</code>
                          <code className="block text-sky-400">plt.title(<span className="text-yellow-300">"Total Bill Distribution per Day"</span>)</code>
                          <code className="block">plt.show()</code>
                        </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Grouping */}
              {activeTab === 'hue' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-orange-500">
                    <Layers className="w-6 h-6 mr-4" />
                    Adding Hue (Grouping)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    The <code>hue</code> parameter helps compare groups inside primary categories (e.g., comparing genders across the days of the week).
                  </p>
                  
                  <div className="bg-slate-950 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-sm leading-8 text-slate-300">
                        <span className="text-slate-500"># Compares distributions side-by-side</span><br/>
                        sns.<span className="text-amber-400">boxplot</span>(<br/>
                        &nbsp;&nbsp;x=<span className="text-yellow-300">"day"</span>, <br/>
                        &nbsp;&nbsp;y=<span className="text-yellow-300">"total_bill"</span>, <br/>
                        &nbsp;&nbsp;<span className="text-orange-400 font-bold underline">hue="sex"</span>, <br/>
                        &nbsp;&nbsp;data=df<br/>
                        )<br/>
                        plt.title(<span className="text-yellow-300">"Distribution by Day and Gender"</span>)<br/>
                        plt.show()
                     </pre>
                  </div>
                  <div className="flex justify-end pt-4">
                     <button onClick={() => runDemo('hue_plot')} className="px-10 py-5 bg-orange-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-orange-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Apply Category Hue</button>
                  </div>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-amber-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Palette className="w-6 h-6 mr-4" />
                    Custom Appearance & Orientation
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                     {[
                       { p: 'palette="Set2"', d: "Customizes the color scheme of the boxes" },
                       { p: 'showfliers=True', d: "Explicitly toggles the rendering of outlier dots" },
                       { p: 'y="day", x="bill"', d: "Swaps axes for a Horizontal alignment" }
                     ].map((item, i) => (
                       <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                          <code className="text-xs font-bold text-amber-500 mb-2 block">{item.p}</code>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.d}</p>
                       </div>
                     ))}
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800">
                     <pre className="font-mono text-sm text-slate-300 leading-relaxed">
                        <span className="text-slate-500"># Horizontal Output + Outliers Visible</span><br/>
                        sns.boxplot(<br/>
                        &nbsp;&nbsp;<span className="text-sky-400 font-bold">y</span>=<span className="text-yellow-300">"day"</span>, <span className="text-sky-400 font-bold">x</span>=<span className="text-yellow-300">"total_bill"</span>,<br/>
                        &nbsp;&nbsp;data=df,<br/>
                        &nbsp;&nbsp;<span className="text-orange-400 font-bold">palette</span>=<span className="text-yellow-300">"Set2"</span>,<br/>
                        &nbsp;&nbsp;<span className="text-orange-400 font-bold">showfliers</span>=<span className="text-sky-300">True</span><br/>
                        )<br/>
                        plt.title(<span className="text-yellow-300">"Styled Horizontal Plot"</span>)<br/>
                        plt.show()
                     </pre>
                  </div>
                  <button onClick={() => runDemo('style_plot')} className="w-full py-5 bg-amber-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-amber-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Compile Styling Code</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-orange-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <TrendingUp className="w-6 h-6 mr-4" />
                    Salary Distribution Case
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    This example clearly demonstrates a massive outlier: notice the extreme $120,000 value sitting far outside the regular distribution box for the IT department.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[3.5rem] border border-slate-800 shadow-2xl relative group overflow-hidden">
                     {/* Floating Outlier Notification to mimic visual outlier */}
                     <div className="absolute top-8 right-8 flex flex-col items-center">
                        <span className="text-xs bg-rose-500 px-3 py-1 rounded-full text-white font-bold animate-bounce shadow-xl">$120k Outlier</span>
                     </div>
                     <pre className="font-mono text-[13px] leading-6 text-slate-300 relative z-10">
                       <span className="text-orange-400">import</span> pandas <span className="text-orange-400">as</span> pd<br/><br/>
                       data = pd.<span className="text-sky-400">DataFrame</span>({'{'}<br/>
                       &nbsp;&nbsp;<span className="text-yellow-300">"Dept"</span>: [<span className="text-yellow-300">"HR", "IT", "Sales", "HR", "IT", "Sales"</span>],<br/>
                       &nbsp;&nbsp;<span className="text-yellow-300">"Salary"</span>: [<span className="text-emerald-400">30k</span>, <span className="text-rose-500 font-bold">120k</span>, <span className="text-emerald-400">45k, 32k, 80k, 47k</span>]<br/>
                       {'}'})<br/><br/>
                       sns.<span className="text-amber-400">boxplot</span>(x=<span className="text-yellow-300">"Dept"</span>, y=<span className="text-yellow-300">"Salary"</span>, data=data)<br/>
                       plt.title(<span className="text-yellow-300">"Salary Distribution"</span>)
                     </pre>
                  </div>

                  <button onClick={() => runDemo('salary_example')} className="w-full py-5 bg-orange-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-orange-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Map Business Anomalies</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
             {/* Terminal Output Console */}
             <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] group-hover/terminal:bg-orange-500/10 transition-all duration-1000"></div>
               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-orange-500" />
                      <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                        BOXPLOT_CORE
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                        <Box className="w-16 h-16 opacity-5 animate-pulse" />
                        <div className="text-center relative">
                           <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Waiting for Data Stream</span>
                           <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-orange-500/50 mr-4 font-black select-none text-[8px] mt-1">[{i+1}]</span>
                              <span className={`leading-relaxed font-medium ${
                                line.includes('Success') || line.includes('generated') || line.includes('visualization') ? 'text-emerald-400 font-bold' :
                                line.includes('Grouping') || line.includes('Splitting') ? 'text-blue-400' :
                                line.includes('Outlier') || line.includes('anomalies') ? 'text-rose-400 font-bold' :
                                line.includes('Quartiles') || line.includes('IQR') ? 'text-amber-300' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                           <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Evaluation End</span>
                           <button onClick={resetConsole} className="text-[9px] text-orange-500 hover:text-orange-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-orange-500/20 pb-0.5">WIPE</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-amber-500/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
               <CheckCircle2 className="w-8 h-8 text-amber-500 mr-4" />
               Key Insights <span className="text-xs ml-3 px-2 py-1 bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400 rounded-full uppercase tracking-widest hidden sm:inline">Crucial</span>
             </h2>

             <div className="grid grid-cols-2 gap-4">
                {[
                  { l: "Median Line", d: "Center of the data" },
                  { l: "The Box", d: "Middle 50% (IQR)" },
                  { l: "Whiskers", d: "Data spread" },
                  { l: "Dots", d: "Outliers" }
                ].map((insight, i) => (
                   <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col justify-center items-center text-center">
                      <span className="text-amber-500 font-black text-sm uppercase tracking-widest mb-2">{insight.l}</span>
                      <span className="text-xs text-slate-500 font-medium">{insight.d}</span>
                   </div>
                ))}
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
                  { m: "Thinking whiskers = min/max roughly", fx: "Actually based strictly on 1.5 × IQR." },
                  { m: "Ignoring outliers completely", fx: "They may indicate errors, rare events, or crucial insights!" },
                  { m: "Using boxplot for tiny datasets", fx: "It is simply not meaningful for just a few data points." }
                ].map((mistake, i) => (
                   <div key={i} className="flex items-start p-4 bg-white dark:bg-slate-900 rounded-2xl border border-rose-100 dark:border-rose-900/50">
                      <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900 dark:text-rose-400 flex items-center justify-center font-bold mr-4 shrink-0 text-xs">X</div>
                      <div>
                         <p className="font-bold text-slate-800 dark:text-slate-200 mb-1 text-sm">{mistake.m}</p>
                         <p className="text-[11px] text-slate-600 dark:text-slate-400 italic">👉 {mistake.fx}</p>
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
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-slate-900/80 z-0"></div>
          
          <div className="relative z-10 mb-16 text-center">
             <h2 className="text-4xl font-black text-white mb-4 flex items-center justify-center">
               <Lightbulb className="w-10 h-10 text-amber-500 mr-4" />
               Pro Tips (From Experience)
             </h2>
             <p className="text-lg text-slate-300 font-medium tracking-tight">Essential visualization hacks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
             {[
               { t: "Combine with Strip Plot", c: 'sns.boxplot(...)\nsns.stripplot(..., color="black", alpha=0.4)', d: "Shows the summary statistics AND overlays the actual raw data points." },
               { t: "Remove Outliers for Clean Look", c: 'sns.boxplot(..., showfliers=False)', d: "If extreme values are blowing out the scale of your axis, hide them temporarily." },
               { t: "Highlight Median", c: 'sns.boxplot(..., medianprops={"color": "red"})', d: "Makes the median stand out vividly when presenting to non-technical stakeholders." },
               { t: "Sort Categories Visually", c: 'order = df.groupby("day")["bill"].median().sort_values().index\nsns.boxplot(..., order=order)', d: "Forces bars entirely to order by median value rather than alphabetical categorizations." }
             ].map((tip, i) => (
               <div key={i} className="flex flex-col p-8 bg-slate-950/60 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:bg-slate-950 shadow-xl transition-all group">
                  <h4 className="font-extrabold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center mr-3 text-sm">🔥</span>
                    {tip.t}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{tip.d}</p>
                  <code className="bg-black/50 p-4 rounded-2xl text-amber-300 font-mono text-xs whitespace-pre-wrap font-bold border border-amber-500/20 group-hover:border-amber-500/50 transition-colors">
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
            <div className="lg:col-span-1 bg-gradient-to-br from-indigo-900 to-slate-900 p-10 rounded-[3rem] shadow-xl border border-indigo-500/20 text-white flex flex-col justify-center">
               <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="bg-indigo-500 p-2 rounded-xl mr-3"><Target className="w-5 h-5"/></span>
                  Personal Rec.
               </h3>
               <p className="text-3xl font-black leading-tight mb-8">
                  Always use Boxplot <span className="text-indigo-400">before</span> any modeling.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-center text-sm font-medium text-indigo-200">
                     <CheckCircle2 className="w-4 h-4 mr-3 text-indigo-400"/> Quickly detects anomalies
                  </li>
                  <li className="flex items-center text-sm font-medium text-indigo-200">
                     <CheckCircle2 className="w-4 h-4 mr-3 text-indigo-400"/> Shows spread clearly
                  </li>
                  <li className="flex items-center text-sm font-medium text-indigo-200">
                     <CheckCircle2 className="w-4 h-4 mr-3 text-indigo-400"/> Crucial for feature understanding
                  </li>
               </ul>
            </div>

            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                  <Table className="w-6 h-6 mr-3 text-slate-500" /> Plot Comparison Guide
               </h3>
               
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-slate-400 font-bold">Feature</th>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-amber-500 font-black">Boxplot</th>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-cyan-500 font-black">Boxenplot</th>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-emerald-500 font-black">Violinplot</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 border-b dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300">Simplicity</td>
                           <td className="p-4 border-b dark:border-slate-800 text-amber-500 font-medium">⭐⭐⭐⭐⭐</td>
                           <td className="p-4 border-b dark:border-slate-800 text-cyan-500 font-medium">⭐⭐</td>
                           <td className="p-4 border-b dark:border-slate-800 text-emerald-500 font-medium">⭐⭐⭐</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 border-b dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300">Detail Level</td>
                           <td className="p-4 border-b dark:border-slate-800 text-slate-500">Medium</td>
                           <td className="p-4 border-b dark:border-slate-800 text-slate-500 font-bold uppercase text-[10px] tracking-widest">High</td>
                           <td className="p-4 border-b dark:border-slate-800 text-slate-500 font-bold uppercase text-[10px] tracking-widest">Very High</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 font-bold text-slate-700 dark:text-slate-300">Best Use Case</td>
                           <td className="p-4 text-slate-600 dark:text-slate-400">General Analytics</td>
                           <td className="p-4 text-slate-600 dark:text-slate-400">Large Data sets</td>
                           <td className="p-4 text-slate-600 dark:text-slate-400">Distribution Shapes</td>
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

export default SbBoxplot;
