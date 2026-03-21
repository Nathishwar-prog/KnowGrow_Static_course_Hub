import React, { useState } from 'react';
import {
  Info, Code, Terminal, Layers, Play,
  Activity, Target, Stethoscope, Search,
  Palette, History, AlertTriangle, Lightbulb,
  Table, ListChecks, CheckCircle2, TrendingUp,
  Focus, Eye, ShieldCheck, LineChart,
  SplitSquareHorizontal, CheckCircle, XCircle
} from 'lucide-react';

const SbResidplot: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'diagnostics' | 'styling' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_resid':
        outLines = [
          'Initializing Diagnostic Systems...',
          'Fetching independent Predictor values (X)...',
          'Fetching Actual ground truth vectors (Y)...',
          'Executing implicit OLS Regression model...',
          'Mathematically subtracting [Prediction] from [Actual]...',
          'Generating harsh Y=0 baseline (Zero Error Reference)...',
          'Mapping purely the leftover Errors (Residuals)...',
          'Validation visual complete.'
        ];
        break;
      case 'diag_resid':
        outLines = [
          'Booting up Lowess (Locally Weighted Scatterplot Smoothing)...',
          'Detecting localized non-linear clusters...',
          'Forcing trend line through raw residual cloud...',
          '--> Warning: Analysing Line trajectory...',
          'If line curves heavily away from Y=0, original Linear Model is INVALID.',
          'If line remains flat, Homoscedasticity is confirmed.',
          'Model health evaluated.'
        ];
        break;
      case 'style_resid':
        outLines = [
          'Accessing deep matplotlib scatter kwargs...',
          '--> Modifying opacity: scatter_kws={"alpha": 0.5}...',
          'Rendering semi-transparent error nodes...',
          'Exposing dense error clustering and extreme outlier overlaps...',
          'Custom diagnostic UI updated.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Simulating custom DataFrame: StudyHours vs Score...',
          'Generating linear baseline + Gaussian Normal noise (0, 5)...',
          'Passing data into sns.residplot()...',
          'Validating core ML Assumptions...',
          'Scanning for Funnel Shapes (Heteroscedasticity)... Not Found.',
          'Scanning for Parabolic Curves... Not Found.',
          'Verification: Model is valid and safe for production.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-3xl mb-8 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <Activity className="w-12 h-12 text-teal-600 dark:text-teal-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-[10px] font-bold mb-6 border border-teal-500/20 tracking-[0.25em] uppercase">
          Model Diagnostic Testing
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Residplots</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.residplot() — This isn't just visualization. This is rigorous ML validation. Learn to plot the absolute mathematical Error (Actual vs Predicted) to prove your Regression Model is actually safe to use.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-teal-500 rounded-2xl shadow-lg shadow-teal-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is a Residual Plot?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-teal-500 pl-6">
              "A residual plot visualizes the exact mathematical difference between your model's Predicted values and the Actual ground-truth values. The formula is literally <b>Residual = Actual − Predicted</b>."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-teal-500" />
                Why Use residplot()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Prove a Model is Valid", "Detect Non-Linearity", "Identify Wild Outliers", "Validate Core Assumptions"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-teal-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <ShieldCheck className="w-8 h-8 text-teal-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Intelligence</h2>
              </div>

              <div className="space-y-4 mb-5">
                <div className="flex items-center p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 transition-colors">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-emerald-100"><b>The Ideal Case</b> = Nothing but pure random static/noise centered directly around the 0 line.</span>
                </div>
                <div className="flex items-center p-4 bg-red-500/10 rounded-2xl border border-red-500/20 transition-colors">
                  <XCircle className="w-5 h-5 text-red-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-red-100"><b>The Problem Case</b> = You can physically see a U-curve, a Funnel shape, or obvious sloping patterns.</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-teal-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Core Syntax</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                sns.<span className="text-teal-400 font-bold">residplot</span>(x=<span className="text-amber-300">None</span>, y=<span className="text-amber-300">None</span>, data=<span className="text-amber-300">None</span>)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-teal-100 dark:bg-teal-900/40 rounded-3xl mr-6 border border-teal-200 dark:border-teal-800">
              <Terminal className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Diagnostic Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.residplot()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Check', icon: Target },
              { id: 'diagnostics', label: 'Lowess Trend (🔥)', icon: Activity },
              { id: 'styling', label: 'UX & Styles', icon: Eye },
              { id: 'real_world', label: 'reg vs residplot', icon: SplitSquareHorizontal }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/30'
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
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-teal-600 dark:text-teal-400">
                    <Target className="w-6 h-6 mr-4" />
                    Step 1-3: The Error Baseline
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Instead of showing a trend line moving upwards, <code>residplot</code> flattens the trend line into a strict <code>Y=0</code> horizontal line, and plots the distance of every single point away from that theoretical perfect mathematical prediction.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_resid')} className="absolute bottom-6 right-6 p-4 bg-teal-600 text-white rounded-2xl shadow-xl hover:bg-teal-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br />
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
                        df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                        <span className="text-slate-500 italic"># Plotting the mathematical model Error (Residuals)</span><br />
                        sns.<span className="text-teal-400 font-bold tracking-widest">residplot</span>(<br />
                        &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>,<br />
                        &nbsp;&nbsp;y=<span className="text-amber-300">"tip"</span>,<br />
                        &nbsp;&nbsp;data=df<br />
                        )<br />
                        plt.<span className="text-cyan-400">show</span>()
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Diagnostics Context */}
              {activeTab === 'diagnostics' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-emerald-500">
                    <Activity className="w-6 h-6 mr-4" />
                    Detecting Hidden Curves (Lowess)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    Sometimes humans are bad at spotting patterns in messy scatter data. Using <code>lowess=True</code> forces Seaborn to trace a localized smoothing line. If that smoothing line is curved, <b>your linear model has definitively failed</b> because the data is non-linear.
                  </p>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      <span className="text-slate-500"># Force a dynamic moving-average diagnostic line</span><br />
                      sns.<span className="text-teal-400 font-bold tracking-widest">residplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>, y=<span className="text-amber-300">"tip"</span>, data=df,<br />
                      &nbsp;&nbsp;<span className="text-purple-400 font-bold underline">lowess</span>=<span className="text-purple-400">True</span><br />
                      )<br />
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('diag_resid')} className="px-10 py-5 bg-emerald-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Run Lowess Diagnostic</button>
                  </div>
                </div>
              )}

              {/* Tab: Styling & Combos */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-cyan-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Eye className="w-6 h-6 mr-4" />
                    Visibility Formatting
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    When dealing with dense error clouds overlapping near the 0-line, adjusting UX elements like point opacity (`alpha`) becomes crucial to accurately diagnosing model density structures.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Drop opacity to observe density layering at Y=0</span><br />
                      sns.<span className="text-teal-400 font-bold">residplot</span>(<br />
                      &nbsp;&nbsp;x=<span className="text-amber-300">"total_bill"</span>, y=<span className="text-amber-300">"tip"</span>, data=df,<br />
                      &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">scatter_kws</span>=&#123;<span className="text-amber-300">"alpha"</span>: <span className="text-emerald-300">0.5</span>&#125;<br />
                      )
                    </pre>
                  </div>

                  <button onClick={() => runDemo('style_resid')} className="w-full py-5 bg-cyan-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-cyan-600 active:scale-95 transition-all text-xs uppercase tracking-widest">Apply Depth Transparency</button>
                </div>
              )}

              {/* Tab: Real World & VS */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-sky-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <SplitSquareHorizontal className="w-6 h-6 mr-4" />
                    Real-World Analytics & VS
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Insights */}
                    {/* regplot vs residplot */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 col-span-2">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center"><ListChecks className="w-4 h-4 mr-2 text-teal-500" /> residplot vs regplot</h4>
                      <div className="text-[11px] grid grid-cols-3 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium bg-transparent">
                        <b className="text-slate-500">Feature</b> <b className="text-teal-500 dark:text-teal-400">residplot</b> <b className="text-slate-800 dark:text-slate-200">regplot</b>
                        <span>Core Purpose</span> <span>Error Analysis</span> <span>Relationship Form</span>
                        <span>Y-Axis Value</span> <span>The leftover Error</span> <span>The Trend Line</span>
                        <span>Primary Use</span> <span>Model Validation</span> <span>EDA Analysis</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative mt-2">
                    <pre className="font-mono text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Diagnostic Workflow in ML</span><br />
                      data = pd.<span className="text-cyan-400">DataFrame</span>(&#123; <br />
                      &nbsp;&nbsp;<span className="text-amber-300">"StudyHours"</span>: np.<span className="text-cyan-400">linspace</span>(<span className="text-emerald-300">1</span>, <span className="text-emerald-300">10</span>, <span className="text-emerald-300">100</span>),<br />
                      &nbsp;&nbsp;<span className="text-amber-300">"Score"</span>: np.<span className="text-cyan-400">linspace</span>(<span className="text-emerald-300">50</span>, <span className="text-emerald-300">90</span>, <span className="text-emerald-300">100</span>) + np.random.<span className="text-cyan-400">normal</span>(<span className="text-emerald-300">0</span>, <span className="text-emerald-300">5</span>, <span className="text-emerald-300">100</span>)<br />
                      &#125;)<br /><br />
                      sns.<span className="text-teal-400 font-bold">residplot</span>(x=<span className="text-amber-300">"StudyHours"</span>, y=<span className="text-amber-300">"Score"</span>, data=data)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-sky-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-sky-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute ML Validation</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            {/* Terminal Output Console */}
            <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] group-hover/terminal:bg-teal-500/10 transition-all duration-1000"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                  <div className="flex items-center">
                    <Terminal className="w-6 h-6 mr-4 text-teal-500" />
                    <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                      DIAG_VALIDATION_SYS
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                  </div>
                </div>

                <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                      <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Validation Scan</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-teal-500/50 mr-4 font-black select-none text-[8px] mt-1">SYS_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('complete') || line.includes('safe') || line.includes('confirmed') ? 'text-emerald-400 font-bold' :
                              line.includes('Warning') || line.includes('INVALID') || line.includes('failed') ? 'text-red-400 font-bold' :
                                line.includes('Initializing') || line.includes('Simulating') || line.includes('Executing') ? 'text-indigo-400' :
                                  line.includes('lowess=') || line.includes('scatter_kws=') || line.includes('Y=0') ? 'text-cyan-300 font-bold' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Evaluation Protocol Ended</span>
                        <button onClick={resetConsole} className="text-[9px] text-teal-500 hover:text-teal-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-teal-500/20 pb-0.5">PURGE</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-teal-500/20 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <ShieldCheck className="w-8 h-8 text-teal-500 mr-4" />
              Expert Validation <span className="text-xs ml-3 px-2 py-1 bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-4 flex-1">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 h-full">
                <h4 className="font-bold text-slate-800 dark:text-teal-400 mb-2">🚀 The Mandatory ML Habit</h4>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4">
                  You should NEVER blindly trust a regression model output. Your mandatory Data Science workflow should be: Make Regression → Form Prediction → <b>ALWAYS check the residplot</b>. If it looks like pure random static, proceed to production!
                </p>

                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4 border-t border-slate-200 dark:border-slate-700 pt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Combine deeply with `regplot()`. First, view the actual relationship. Second, view the calculated Error leftover.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 shrink-0"></span> Keep your eye entirely focused on the `0` line vertically. Is the mass balanced perfectly around it?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-800 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-4 text-red-500" />
              Critical Danger Zones
            </h2>

            <div className="space-y-4 flex-1">
              {[
                { m: "Trusting R² metrics alone.", fx: "A model can literally output an incredible R-Squared score while simultaneously predicting a total failure of a parabolic curve. Do not use numbers alone, always visualize your residuals." },
                { m: "Ignoring a Funnel Shape.", fx: "If the points start extremely tight near zero and then spread out wider like a megaphone towards the right, this is called Heteroscedasticity. Your model's accuracy deteriorates as X gets bigger." },
                { m: "Not checking for curves.", fx: "If the scatter forms a smiley face or a rainbow arch over the 0-line, you have forced a linear straight line through a curved dataset. Your model is totally invalid." }
              ].map((mistake, i) => (
                <div key={i} className="flex items-start p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold mr-4 shrink-0 text-xs text-center shrink-0">X</div>
                  <div>
                    <p className="font-bold text-slate-200 mb-1 text-[13px]">{mistake.m}</p>
                    <p className="text-[11px] text-slate-400 bg-slate-900 px-3 py-2 rounded-lg italic font-mono mt-2 inline-block border border-slate-800">👉 {mistake.fx}</p>
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

export default SbResidplot;
