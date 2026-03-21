import React, { useState } from 'react';
import {
  Info, Terminal, Play, Activity, Target, BoxSelect, Maximize,
  AlertTriangle, CheckCircle2, Focus, Eye, ShieldCheck,
  SplitSquareHorizontal, Layers3, CircleDot,
  Combine, Waves
} from 'lucide-react';

const SbViolinplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'power' | 'combo' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basics':
        outLines = [
          'Loading numerical dataset "tips"...',
          'Executing sns.violinplot(x="day", y="total_bill", inner="quartile")...',
          'Calculating Kernel Density Estimate (KDE) curve for shape...',
          'Flipping KDE symmetrically to create violin polygon...',
          'Drawing internal quartile dashed lines...',
          'Basic Violin Plot generated successfully.'
        ];
        break;
      case 'power':
        outLines = [
          'Applying hue="sex" for discrete categorical mapping...',
          'Executing sns.violinplot(..., split=True)...',
          'Re-calculating dual independent KDE distributions...',
          'Fusing left-half (Male) and right-half (Female) into a single violin...',
          'Space optimized. Deep comparative insight deployed.'
        ];
        break;
      case 'combo':
        outLines = [
          'Layer 1: Executing sns.violinplot(x="day", y="total_bill")...',
          'Drawing underlying density shape and median dot...',
          'Layer 2: Executing sns.stripplot(color="black", alpha=0.4)...',
          'Overloading violin with raw scattered data points...',
          'Best-Practice combo chart successfully rendered.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Building Corporate Salary DataFrame (HR, IT, Sales)...',
          'Mapping "Department" to X and dense "Salary" to Y...',
          'Executing sns.violinplot(x="Department", y="Salary")...',
          'Detecting salary distribution skewness and bimodal peaks...',
          'Advanced EDA violin insight delivered.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-cyan-100 dark:bg-cyan-900/30 rounded-3xl mb-8 shadow-sm border border-cyan-200 dark:border-cyan-800/50">
          <Waves className="w-12 h-12 text-cyan-600 dark:text-cyan-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-[10px] font-bold mb-6 border border-cyan-500/20 tracking-[0.25em] uppercase">
          Distribution & Density Shape
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Violinplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.violinplot() — Visualize the extreme density shape of your data. The ultimate evolution that perfectly combines a Boxplot's summary stats with a KDE's smooth distribution curves.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-cyan-500 rounded-2xl shadow-lg shadow-cyan-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is a Violin Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
              "It is fundamentally a combination of a <b>Boxplot</b> and a <b>Kernel Density Estimate (KDE)</b>. It shows summary stats in the very center, while expanding its width outwards to show the exact shape of your data's density."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-cyan-500" />
                Why Use violinplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Understand distribution deeply", "See density shape + spread", "Compare multiple categories", "Replace boxplot for richer info"].map((stat, i) => (
                  <div key={i} className="flex flex-col justify-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mb-2" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-cyan-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Eye className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Intelligence</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Target className="w-5 h-5 text-blue-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Width = Density</b>: Wider sections mean there is a massive cluster of data points at that numerical value.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Maximize className="w-5 h-5 text-cyan-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-300"><b>Center Core</b>: Contains exactly what a basic boxplot holds (median dot, thick quartile bar, thin whiskers).</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-cyan-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Basic Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-cyan-400 font-bold">violinplot</span>(x=<span className="text-sky-300">None</span>, y=<span className="text-sky-300">None</span>, data=<span className="text-sky-300">None</span>)
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Violin Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.violinplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Base Violin', icon: BoxSelect },
              { id: 'power', label: 'Split Power', icon: Layers3 },
              { id: 'combo', label: 'Box Layer', icon: Combine },
              { id: 'real_world', label: 'Real-World', icon: SplitSquareHorizontal }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
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
                    <BoxSelect className="w-6 h-6 mr-4" />
                    Step 1-5: Base Violin Plot
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      By default, `violinplot` handles all KDE math for you and generates a mini boxplot on the inside. You can upgrade this explicitly using <code>inner="quartile"</code>, which replaces the mini-box with clear dashed percentile lines crossing the entire width of the violin!
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basics')} className="absolute bottom-6 right-6 p-4 bg-cyan-600 text-white rounded-2xl shadow-xl hover:bg-cyan-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-blue-400">load_dataset</span>(<span className="text-sky-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Draw standard vertical violin (Default 'box' inside)</span><br />
                        sns.<span className="text-cyan-400 font-bold tracking-widest">violinplot</span>(x=<span className="text-sky-300">"day"</span>, y=<span className="text-sky-300">"total_bill"</span>, data=df)<br /><br />
                        <span className="text-slate-500 italic"># Explode the inside to show clear quartile dashes!</span><br />
                        sns.<span className="text-cyan-400 font-bold tracking-widest">violinplot</span>(x=<span className="text-sky-300">"day"</span>, y=<span className="text-sky-300">"total_bill"</span>, data=df, <span className="text-blue-400 underline">inner</span>=<span className="text-sky-300">"quartile"</span>)
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Split Power */}
              {activeTab === 'power' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <Layers3 className="w-6 h-6 mr-4" />
                    Split Violins (Power Feature 🔥)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    When you use a binary <code>hue</code> variable (like "Male/Female" or "Yes/No"), you can set <code>split=True</code>. Instead of drawing two separate violins next to each other, Seaborn literally fuses them into the left and right halves of a single shape!
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># Half-Male, Half-Female Violin Fusion!</span><br />
                      sns.<span className="text-cyan-400 font-bold tracking-widest">violinplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-sky-300">"day"</span>,<br />
                      &nbsp;&nbsp;y=<span className="text-sky-300">"total_bill"</span>,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">hue</span>=<span className="text-sky-300">"sex"</span>,      <span className="text-slate-500"># Binary variable</span><br />
                      &nbsp;&nbsp;data=df,<br />
                      &nbsp;&nbsp;<span className="text-blue-400 font-bold">split</span>=<span className="text-sky-300">True</span>,     <span className="text-slate-500"># The ultimate space-saver</span><br />
                      &nbsp;&nbsp;<span className="text-blue-400">palette</span>=<span className="text-sky-300">"Set2"</span><br />
                      )
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('power')} className="px-10 py-5 bg-blue-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-blue-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Fuse KDE Shapes</button>
                  </div>
                </div>
              )}

              {/* Tab: Best Practice Combo */}
              {activeTab === 'combo' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-sky-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Combine className="w-6 h-6 mr-4" />
                    Combine with Stripplot (BEST PRACTICE 🔥🔥)
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    The absolute pinnacle of data visualization. A pure violin handles the smooth theoretical density curve. Calling a <code>stripplot</code> directly on top of it drops the actual, hardcore raw data points right over the density mass.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># 1. Base Layer: Density Distribution Shape</span><br />
                      sns.<span className="text-cyan-400 font-bold">violinplot</span>(x=<span className="text-sky-300">"day"</span>, y=<span className="text-sky-300">"total_bill"</span>, data=df)<br /><br />
                      <span className="text-slate-500"># 2. Perfect exact data payload directly on top</span><br />
                      sns.<span className="text-indigo-400 font-bold">stripplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-sky-300">"day"</span>,<br />
                      &nbsp;&nbsp;y=<span className="text-sky-300">"total_bill"</span>,<br />
                      &nbsp;&nbsp;data=df,<br />
                      &nbsp;&nbsp;<span className="text-blue-400">color</span>=<span className="text-sky-300">"black"</span>,<br />
                      &nbsp;&nbsp;<span className="text-blue-400">alpha</span>=<span className="text-sky-300">0.4</span>     <span className="text-slate-500"># Ghosted points on solid violin</span><br />
                      )
                    </pre>
                  </div>

                  <button onClick={() => runDemo('combo')} className="w-full py-5 bg-sky-600 text-slate-900 font-extrabold rounded-[2rem] shadow-xl hover:bg-sky-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Build Industry Combo Plot</button>
                </div>
              )}

              {/* Tab: Real World & VS */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-teal-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <SplitSquareHorizontal className="w-6 h-6 mr-4" />
                    Real-World Analytics & VS
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Insights */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Final Summary 📌</h4>
                      <div className="text-[10px] grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-3 mt-2 font-medium bg-transparent">
                        <b className="text-slate-500">Feature</b> <b className="text-cyan-500 dark:text-cyan-400">Description</b>
                        <span>Purpose</span> <span>Distribution Viz</span>
                        <span>Strength</span> <span>Rich inside KDE</span>
                        <span>Use Case</span> <span>Advanced EDA</span>
                      </div>
                    </div>

                    {/* Matrix vs box vs strip */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 mt-0">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest">plot comparison</h4>
                      <div className="text-[9px] grid grid-cols-4 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium bg-transparent text-center items-center">
                        <b className="text-slate-500 text-left">Feature</b> <b className="text-cyan-500 dark:text-cyan-400">Violin</b> <b className="text-slate-800 dark:text-slate-200">Box</b> <b className="text-slate-800 dark:text-slate-200">Strip</b>
                        <span className="text-left">Dist Shape</span> <span>✅</span> <span>❌</span> <span>❌</span>
                        <span className="text-left">Summ Stats</span> <span>✅</span> <span>✅</span> <span>❌</span>
                        <span className="text-left">Raw Data</span> <span>❌</span> <span>❌</span> <span>✅</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Dense Salary Behavior Analytics</span><br />
                      data = pd.<span className="text-blue-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-sky-300">"Dept"</span>: [<span className="text-sky-300">"HR"</span>, <span className="text-sky-300">"IT"</span>, <span className="text-sky-300">"Sales"</span>, <span className="text-sky-300">"HR"</span>, <span className="text-sky-300">"IT"</span>, <span className="text-sky-300">"Sales"</span>],<br />
                      &nbsp;&nbsp;<span className="text-sky-300">"Salary"</span>: [<span className="text-cyan-300">30k</span>, <span className="text-cyan-300">50k</span>, <span className="text-cyan-300">45k</span>, <span className="text-cyan-300">32k</span>, <span className="text-cyan-300">52k</span>, <span className="text-cyan-300">47k</span>]<br />
                      &#125;)<br /><br />
                      sns.<span className="text-cyan-400 font-bold">violinplot</span>(x=<span className="text-sky-300">"Dept"</span>, y=<span className="text-sky-300">"Salary"</span>, data=data)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-teal-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-teal-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Deep Salary Viz</button>
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
                      KDE_GENERATOR
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
                      <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Density Calls</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-cyan-500/50 mr-4 font-black select-none text-[8px] mt-1">LOG_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('successfully') || line.includes('deployed') || line.includes('delivered') ? 'text-green-400 font-bold' :
                              line.includes('split=True') || line.includes('independent') ? 'text-blue-400' :
                                line.includes('density') || line.includes('Kernel') || line.includes('Calculating') || line.includes('Re-calculating') ? 'text-cyan-300 font-bold' :
                                  line.includes('violinplot') || line.includes('stripplot') ? 'text-blue-400 font-bold' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution End</span>
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

          {/* Expert Workflows */}
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-cyan-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <ShieldCheck className="w-8 h-8 text-cyan-500 mr-4" />
              Expert Workflow <span className="text-xs ml-3 px-2 py-1 bg-cyan-100 text-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-cyan-400 mb-2">🚀 When to Use vs Avoid</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Use violinplot() specifically when you want **deep distribution insight**—especially for spotting bimodal data (two huge peaks) which a standard boxplot completely hides. **Avoid** using it when presenting to beginner audiences, as the density shape logic confuses non-technical stakeholders easily. Use a simpler `boxplot` for them.
                </p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-cyan-400 mb-2">🚀 Data Science Check</h4>
                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span> Use for <b>Large Data</b>. A massive dataset builds a much smoother, accurate density curve.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Fully utilize <code>split=True</code> when analyzing binary comparisons (like true/false).</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-teal-500 mr-3 shrink-0"></span> Pass <code>inner="quartile"</code> to immediately clarify median/stats for viewers.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-800 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-2 h-full bg-pink-500"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-4 text-pink-500" />
              Common Mistakes
            </h2>

            <div className="space-y-4 flex-1">
              {[
                { m: "Running on tiny datasets.", fx: "If you run an algorithm generating a density curve on only 12 data points, the resulting violin will be completely misleading and jagged. Stick to boxplots or stripplots for small logs." },
                { m: "Misinterpreting the width.", fx: "A thick violin center doesn't mean the data values there are inherently larger. Width exclusively means density (count frequency). It means simply that MORE data points exist at that Y value." },
                { m: "Ignoring inner details.", fx: "If you leave inner configuration on default, the tiny boxplot is sometimes hard to see. Explicitly exposing inner='quartile' gives you immediate, unmissable statistical bars across the whole violin." }
              ].map((mistake, i) => (
                <div key={i} className="flex items-start p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mr-4 shrink-0 text-xs">X</div>
                  <div>
                    <p className="font-bold text-slate-200 mb-1 text-sm">{mistake.m}</p>
                    <p className="text-[11px] text-slate-400 bg-slate-900 px-3 py-2 rounded-lg italic font-mono mt-3 inline-block border border-slate-800">👉 {mistake.fx}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SbViolinplot;
