import React, { useState } from 'react';
import { 
  MessageSquareText, Info, Code, Terminal, 
  ArrowUpRight, Target, Type, Palette, 
  BarChart3, Activity, Lightbulb, Play, 
  Flame, CheckCircle2, AlertCircle, Sparkles,
  MousePointer2, Move, Layout, Layers,
  Maximize2, Zap
} from 'lucide-react';

const MplAnnotations: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'syntax' | 'examples' | 'styling' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'simple_annotate':
        outLines = [
          'Plotting data points...',
          'Adding annotation: "Highest Value" at (4, 30)',
          'Rendering plot...',
          'Successfully displayed graph with text label at xy=(4, 30)'
        ];
        break;
      case 'arrow_annotate':
        outLines = [
          'Plotting line chart...',
          'Point: (4, 30) identified as "Peak Value"',
          'Drawing arrow from text (3, 35) to point (4, 30)',
          'Arrow color: black',
          'Rendering complete.'
        ];
        break;
      case 'scatter_annotate':
        outLines = [
          'Generated Scatter Plot with 3 points.',
          'Annotating Point A at (5, 10)',
          'Annotating Point B at (7, 12)',
          'Annotating Point C at (8, 9)',
          'Labels aligned to markers.'
        ];
        break;
      case 'sales_example':
        outLines = [
          'Monthly Sales Data Loaded: [200, 250, 300, 270]',
          'Max Value found at Index 2 (Mar): 300',
          'Annotating "Highest Sales" with green arrow props.',
          'Canvas updated successfully.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Checking student solution...',
          'Days: ["Mon", "Tue", "Wed", "Thu"]',
          'Temp: [30, 32, 35, 31]',
          'Annotation "Highest Temp" pointed to ("Wed", 35)',
          'Result: Correct! Visualization marks peak temperature accurately.'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-amber-100 dark:bg-amber-900/30 rounded-2xl mb-6 shadow-sm border border-amber-200 dark:border-amber-800/50">
          <MessageSquareText className="w-10 h-10 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="inline-flex items-center px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-[10px] font-bold mb-4 border border-amber-500/20 tracking-widest uppercase">
          Lesson 0.7
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Annotations
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Enhance your plots with descriptive text and arrows. Direct your audience's attention to the most critical data points.
        </p>
      </header>

      {/* 2. Intro Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center mb-6">
              <Info className="w-6 h-6 text-amber-500 mr-3" />
              <h2 className="text-2xl font-bold">1️⃣ What is Annotation?</h2>
            </div>
            <p className="mb-6 text-slate-600 dark:text-slate-400 leading-relaxed italic text-sm border-l-4 border-amber-500 pl-4">
              "An annotation is a text label with optional arrows used to describe or emphasize a specific part of a graph."
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
               Matplotlib Annotation is used to add descriptive text or arrows to highlight important data points in a plot.
            </p>
            <div className="space-y-4">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-wider">
                 <Target className="w-4 h-4 mr-2 text-rose-500" />
                 2️⃣ Why Annotations Are Important
               </h3>
               <div className="grid grid-cols-2 gap-3">
                  {[
                    "Highlight important values",
                    "Explain peaks or drops",
                    "Improve readability",
                    "Better for presentations"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center text-[11px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 shrink-0" />
                      {benefit}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 rounded-3xl shadow-xl border border-slate-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl transition-all group-hover:bg-amber-500/20"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center mb-6 text-white">
                <BarChart3 className="w-6 h-6 text-amber-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Visual Example</h2>
              </div>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Imagine a stock price graph. Instead of making users hunt for the record, we can explicitly point to the <b>highest price point</b> using an annotation.
              </p>
              
              <div className="flex-1 bg-slate-950/50 rounded-2xl border border-slate-700 p-6 flex flex-col items-center justify-center relative mb-4">
                 <div className="w-full h-24 flex items-end justify-between px-4 pb-2 border-l border-b border-slate-700 relative">
                    {/* Mock Graph Path */}
                    <div className="absolute bottom-2 left-0 w-full h-full flex items-end">
                       <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <path d="M0 35 L25 20 L50 25 L75 5 L100 15" fill="none" stroke="#f59e0b" strokeWidth="2" />
                          <circle cx="75" cy="5" r="3" fill="#ef4444" />
                       </svg>
                    </div>
                    {/* Annotation Layer */}
                    <div className="absolute top-2 right-4 animate-bounce">
                       <div className="bg-rose-500 text-white text-[9px] font-bold px-2 py-1 rounded shadow-lg flex items-center">
                          Peak: $540
                       </div>
                       <div className="w-px h-6 bg-rose-500 mx-auto"></div>
                    </div>
                 </div>
                 <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-widest font-bold font-mono">Simulated Annotation View</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center">
                 <Sparkles className="w-5 h-5 text-amber-400 mr-3" />
                 <p className="text-[11px] text-slate-400">Annotations turn a boring graph into a data-driven story.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Area */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 px-2">
          <div className="flex items-center">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-xl mr-4">
              <Terminal className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Annotation Lab</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Interactive Guide to plt.annotate()</p>
            </div>
          </div>
          
          <div className="flex bg-white dark:bg-slate-900 p-1 rounded-2xl shadow-inner border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Tech', icon: Code },
              { id: 'syntax', label: 'Syntax', icon: Type },
              { id: 'examples', label: 'Examples', icon: Layout },
              { id: 'styling', label: 'Styling', icon: Palette },
              { id: 'real_world', label: 'Real Case', icon: Target },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/20' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
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
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 min-h-[500px] transition-all">
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                    <Info className="w-6 h-6 mr-3 text-amber-500" />
                    3️⃣ Basic Syntax & Function
                  </h3>
                  <div className="space-y-6">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      The most common function used to add annotations is <b>plt.annotate()</b>. It allows you to place text relative to data coordinates.
                    </p>
                    
                    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-2xl">
                       <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase">Syntax Pattern</span>
                       </div>
                       <pre className="font-mono text-base text-slate-200">
                         plt.annotate(<span className="text-rose-400">text</span>, xy=(<span className="text-emerald-400">x</span>,<span className="text-emerald-400">y</span>))
                       </pre>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                      <table className="w-full text-left bg-white dark:bg-slate-900">
                        <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                          <tr>
                            <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">Parameter</th>
                            <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          {[
                            { p: "text", d: "Annotation text" },
                            { p: "xy", d: "Coordinates of the targeted point" },
                            { p: "xytext", d: "Position of the text label" },
                            { p: "arrowprops", d: "Arrow styling dictionary" }
                          ].map((row, i) => (
                            <tr key={i}>
                              <td className="px-6 py-4 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">{row.p}</td>
                              <td className="px-6 py-4 text-xs text-slate-600 dark:text-slate-400">{row.d}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Syntax (First Examples) */}
              {activeTab === 'syntax' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                    <Code className="w-6 h-6 mr-3 text-emerald-500" />
                    4️⃣ Simple Annotation
                  </h3>
                  
                  <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                    <div className="px-6 py-4 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center text-[10px] font-bold text-slate-400 font-mono tracking-widest uppercase">
                       <span>Example: Highlight Point</span>
                       <button onClick={() => runDemo('simple_annotate')} className="text-emerald-500 hover:text-emerald-400"><Play className="w-4 h-4 fill-current" /></button>
                    </div>
                    <pre className="p-8 font-mono text-[13px] leading-relaxed text-slate-300">
                      <div className="mb-2"><span className="text-blue-400">import</span> matplotlib.pyplot <span className="text-blue-400">as</span> plt</div>
                      <div className="mb-1 text-slate-500"># Data setup</div>
                      <div className="mb-1">x = [<span className="text-emerald-400">1, 2, 3, 4</span>]</div>
                      <div className="mb-4">y = [<span className="text-emerald-400">10, 20, 25, 30</span>]</div>
                      
                      <div className="mb-1 text-slate-400 italic">plt.plot(x, y)</div>
                      <div className="mb-6">
                        <span className="text-amber-400">plt.annotate</span>(
                        <span className="text-emerald-400">"Highest Value"</span>, 
                        xy=(<span className="text-emerald-400">4, 30</span>)
                        )
                      </div>
                      
                      <div className="text-indigo-400">plt.title(<span className="text-emerald-400">"Simple Annotation Example"</span>)</div>
                      <div className="text-blue-500 font-bold">plt.show()</div>
                    </pre>
                  </div>

                  <div className="p-5 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2 text-sm">Output Outcome</h4>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-300 leading-relaxed">
                      The graph will show a text label near the point (4,30) indicating that this is the highest value in the current sequence.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab: Examples (Arrows & Scatter) */}
              {activeTab === 'examples' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-8 h-full max-h-[600px] overflow-y-auto no-scrollbar pr-2">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                      <ArrowUpRight className="w-5 h-5 mr-3 text-orange-500" />
                      5️⃣ Annotation with Arrow
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Annotations become more powerful when arrows are used to point to specific data points.
                    </p>
                    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                       <button onClick={() => runDemo('arrow_annotate')} className="w-full text-left p-6 font-mono text-[12px] text-slate-300 relative group overflow-x-auto">
                          <div className="absolute top-4 right-4 bg-orange-500/10 text-orange-500 text-[9px] px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CODE</div>
                          <div className="mb-4">plt.annotate(</div>
                          <div className="pl-4 text-emerald-400">"Peak Value",</div>
                          <div className="pl-4">xy=(<span className="text-emerald-400">4, 30</span>),</div>
                          <div className="pl-4">xytext=(<span className="text-emerald-400">3, 35</span>),</div>
                          <div className="pl-4 text-amber-500">arrowprops=dict(facecolor='black')</div>
                          <div>)</div>
                       </button>
                    </div>
                  </div>

                  <div className="pt-6 space-y-4 border-t border-slate-100 dark:border-slate-800">
                    <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-800 pb-3 mt-4">
                      <Target className="w-5 h-5 mr-3 text-indigo-500" />
                      6️⃣ Annotation in Scatter Plot
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Annotations are commonly used with scatter plots to label individual observations.
                    </p>
                    <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                       <pre className="font-mono text-[11px] text-slate-600 dark:text-slate-400 leading-6">
                         plt.scatter(x, y)<br/><br/>
                         plt.annotate(<span className="text-rose-500">"Point A"</span>, (<span className="text-indigo-500 font-bold">5, 10</span>))<br/>
                         plt.annotate(<span className="text-rose-500">"Point B"</span>, (<span className="text-indigo-500 font-bold">7, 12</span>))<br/>
                         plt.annotate(<span className="text-rose-500">"Point C"</span>, (<span className="text-indigo-500 font-bold">8, 9</span>))
                       </pre>
                       <div className="mt-4 flex justify-end">
                          <button onClick={() => runDemo('scatter_annotate')} className="bg-indigo-600 text-white text-[10px] font-bold px-4 py-2 rounded-lg shadow-md hover:bg-indigo-500 transition-all">SIMULATE SCATTER LABELS</button>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-8">
                  <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                    <Palette className="w-5 h-5 mr-3 text-rose-500" />
                    7️⃣ Styling Annotations
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Matplotlib allows extensive customization of arrow styles, text colors, and sizes.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {[
                       { prop: "facecolor", desc: "Arrow color (inside fill)", val: "'red', 'blue', 'green'" },
                       { prop: "shrink", desc: "Space between arrow end and point", val: "0.05 (fractional)" },
                       { prop: "fontsize", desc: "Text size for labels", val: "12, 14, 16" },
                       { prop: "color", desc: "Primary text color", val: "'black', 'white'" },
                     ].map((item, i) => (
                       <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:bg-rose-500/5 transition-colors group">
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1 group-hover:text-rose-500 tracking-wide">{item.prop}</h4>
                          <p className="text-[10px] text-slate-500 mb-2 leading-relaxed">{item.desc}</p>
                          <code className="text-[10px] bg-white dark:bg-slate-950 p-1 px-2 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-indigo-500">{item.val}</code>
                       </div>
                     ))}
                  </div>

                  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <pre className="font-mono text-xs text-slate-300">
                       <span className="text-slate-500"># Complex Styling Example</span><br/>
                       plt.annotate(<br/>
                       &nbsp;&nbsp;<span className="text-rose-400">"Important Point"</span>, <span className="text-slate-500"># text</span><br/>
                       &nbsp;&nbsp;xy=(<span className="text-emerald-400">2, 20</span>), &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># point location</span><br/>
                       &nbsp;&nbsp;xytext=(<span className="text-emerald-400">3, 25</span>), &nbsp;&nbsp;<span className="text-slate-500"># text position</span><br/>
                       &nbsp;&nbsp;<span className="text-amber-400">arrowprops</span>=dict(<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;facecolor=<span className="text-emerald-400">'red'</span>,<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;shrink=<span className="text-emerald-400">0.05</span><br/>
                       &nbsp;&nbsp;)<br/>
                       )
                    </pre>
                  </div>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-8">
                  <h3 className="text-xl font-bold flex items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                    <Target className="w-5 h-5 mr-3 text-amber-500" />
                    8️⃣ Real-World Example
                  </h3>
                  
                  <p className="text-sm text-slate-600 font-bold dark:text-slate-400">Case Study: Highlighting Maximum Sales</p>
                  
                  <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl relative">
                    <div className="absolute top-0 right-0 p-3 flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                    </div>
                    <pre className="p-8 font-mono text-[12px] leading-6 text-slate-300">
                      months = [<span className="text-emerald-400">"Jan","Feb","Mar","Apr"</span>]<br/>
                      sales = [<span className="text-emerald-400">200, 250, 300, 270</span>]<br/><br/>
                      plt.plot(months, sales)<br/><br/>
                      plt.<span className="text-amber-400 font-bold">annotate</span>(<br/>
                      &nbsp;&nbsp;<span className="text-rose-400">"Highest Sales"</span>,<br/>
                      &nbsp;&nbsp;xy=(<span className="text-emerald-400">"Mar", 300</span>),<br/>
                      &nbsp;&nbsp;xytext=(<span className="text-emerald-400">"Feb", 320</span>),<br/>
                      &nbsp;&nbsp;arrowprops=dict(facecolor=<span className="text-emerald-400">"green"</span>)<br/>
                      )
                    </pre>
                    <button 
                      onClick={() => runDemo('sales_example')}
                      className="absolute bottom-6 right-8 bg-amber-600 text-white text-[10px] font-extrabold px-6 py-3 rounded-2xl shadow-xl hover:bg-amber-500 active:scale-95 transition-all"
                    >
                      EXECUTE SALES CHART
                    </button>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-800/30">
                    <div className="p-3 bg-white dark:bg-slate-950 rounded-xl shadow-sm">
                       <Lightbulb className="w-6 h-6 text-amber-500" />
                    </div>
                    <p className="text-[11px] text-amber-900/70 dark:text-amber-400/70 leading-relaxed font-medium">
                       In business reports, pointing directly to the month with the highest revenue ensures your stakeholders don't miss the <b>key takeaway</b>.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#0f0f0f] rounded-[2.5rem] p-8 border border-slate-800 h-full min-h-[450px] shadow-2xl relative overflow-hidden flex flex-col group/terminal">
               <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] group-hover/terminal:bg-amber-500/10 transition-all duration-1000"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-5">
                    <div className="flex items-center">
                      <Terminal className="w-5 h-5 mr-3 text-amber-500" />
                      <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-widest font-mono">
                        Annotate_SIM_v3
                      </h3>
                    </div>
                    <div className="flex space-x-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] px-2 custom-scrollbar">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-700 flex flex-col items-center justify-center mt-28 space-y-6">
                        <Activity className="w-16 h-16 opacity-5 animate-pulse" />
                        <span className="text-center max-w-[160px] leading-relaxed opacity-40 text-[9px] uppercase tracking-[0.2em]">Ready for simulation signal...</span>
                     </div>
                  ) : (
                     <div className="space-y-3">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start">
                              <span className="text-amber-500/30 mr-3 mt-1 underline">➜</span>
                              <span className={`leading-relaxed ${
                                line.startsWith('Successfully') ? 'text-emerald-400 font-bold' :
                                line.includes('Plotting') || line.includes('Generating') ? 'text-blue-400' :
                                line.includes('Annotating') || line.includes('Adding') ? 'text-amber-400' :
                                'text-slate-200'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-6 flex justify-between items-center border-t border-slate-800/50 mt-4">
                           <span className="text-[9px] text-slate-600 font-bold">SIMULATION COMPLETE</span>
                           <button onClick={resetConsole} className="text-[9px] text-amber-500 hover:text-amber-400 tracking-widest font-bold uppercase transition-colors">RESET</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 rounded-[2rem] border border-indigo-500/20 shadow-xl overflow-hidden relative">
              <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-indigo-500/10 rounded-full blur-[80px]"></div>
              <h4 className="text-white font-bold text-xs mb-4 flex items-center uppercase tracking-widest">
                <Lightbulb className="w-4 h-4 text-yellow-400 mr-2" />
                Instructor's Flow
              </h4>
              <div className="grid grid-cols-5 gap-2">
                 {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className={`h-1.5 rounded-full ${num === 5 ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'bg-white/10'}`}></div>
                 ))}
              </div>
              <div className="mt-4 space-y-2">
                 {[
                   { n: "1", t: "Line Plot", s: "learned" },
                   { n: "2", t: "Scatter Plot", s: "learned" },
                   { n: "3", t: "Markers", s: "learned" },
                   { n: "4", t: "Colors", s: "learned" },
                   { n: "5", t: "Annotations", s: "active" },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center text-[10px] py-1 border-b border-white/5 last:border-0">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center mr-3 text-[8px] font-bold ${item.s === 'active' ? 'bg-amber-500 text-white' : 'bg-emerald-500/20 text-emerald-400'}`}>
                        {item.s === 'learned' ? '✓' : item.n}
                      </span>
                      <span className={item.s === 'active' ? 'text-white font-bold' : 'text-slate-500'}>{item.t}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tips & Tricks Section */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[3.5rem] shadow-xl border border-slate-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
             <div>
               <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center mb-2">
                 <Zap className="w-8 h-8 text-amber-500 mr-4" />
                 Pro Developer Advice
               </h2>
               <p className="text-sm text-slate-500 dark:text-slate-400">Tactics from 15+ years of experience to make your plots stand out.</p>
             </div>
             <div className="h-0.5 w-24 bg-amber-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { t: "Avoid Over-Annotating", d: "Too many annotations make charts messy. Use them only for critical points.", i: AlertCircle, c: "text-rose-500" },
               { t: "Use Arrows for Emphasis", d: "Text alone can be ambiguous. Arrows clarify which point is being referenced.", i: Move, c: "text-amber-500" },
               { t: "Adjust xytext Position", d: "Position text away from your markers to prevent overlapping and clustering.", i: Maximize2, c: "text-indigo-500" },
               { t: "Combine with Markers", d: "Use markers='o' alongside annotations to make key points visually explicit.", i: Target, c: "text-emerald-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group">
                 <div className={`p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl mr-6 group-hover:bg-white dark:group-hover:bg-slate-950 shadow-sm transition-all duration-300 ${tip.c} bg-opacity-10`}>
                    <tip.i className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 transition-colors uppercase tracking-tight text-sm">⭐ {tip.t}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Final Practice Challenge */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-8 sm:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 bg-white/20 text-white rounded-full text-[10px] font-bold mb-6 border border-white/20 tracking-widest uppercase">
                🎯 Lab Mission
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-6 leading-tight">
                Benchmark: Tracking Peak Temperatures
              </h2>
              <p className="text-amber-100 text-sm mb-8 leading-relaxed font-medium">
                Create a weather chart for the week and annotate the <b>highest temperature</b> on Wednesday (35°C).
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                 <div className="flex items-center text-[10px] text-amber-50 font-bold bg-white/10 p-2 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white mr-2 shrink-0" />
                    xy=("Wed", 35)
                 </div>
                 <div className="flex items-center text-[10px] text-amber-50 font-bold bg-white/10 p-2 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white mr-2 shrink-0" />
                    xytext=("Tue", 37)
                 </div>
              </div>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-slate-900 text-amber-500 hover:bg-slate-800 px-10 py-4 rounded-[2rem] text-xs font-extrabold transition-all shadow-2xl flex items-center group/play border border-amber-500/20 active:scale-95"
               >
                 <Play className="w-4 h-4 mr-3 group-hover/play:scale-125 transition-transform" />
                 VALIDATE STUDENT CODE
               </button>
            </div>

            <div className="w-full md:w-80 relative">
               <div className="bg-[#0c0c0c] rounded-[3rem] border border-white/10 p-8 relative shadow-inner overflow-hidden">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-1.5">
                       <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                       <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 tracking-tighter uppercase font-bold">Chart_Preview.png</span>
                  </div>

                  <div className="h-44 flex flex-col items-center justify-center relative">
                     <svg className="w-full h-full" viewBox="0 0 100 80">
                        {/* Simplified line chart */}
                        <polyline points="0,50 33,30 66,10 100,25" fill="none" stroke="#f59e0b" strokeWidth="3" />
                        <circle cx="66" cy="10" r="4" fill="#fff" className="animate-pulse" />
                        
                        {/* Annotation representation */}
                        <path d="M45,0 L61,7" fill="none" stroke="#fff" strokeWidth="1.5" />
                        <path d="M59,4 L62,8 L58,9" fill="#fff" />
                     </svg>
                     <div className="absolute top-[-5px] left-[15px] bg-white text-amber-600 text-[9px] font-bold px-3 py-1.5 rounded-xl shadow-lg transform -rotate-6">
                        Peak: 35°C
                     </div>
                  </div>
                  
                  <div className="mt-8 flex items-center justify-center gap-2 text-white/40 text-[9px] font-bold uppercase tracking-widest">
                     <Activity className="w-3 h-3" />
                     Live Simulation Active
                  </div>
               </div>
               
               {/* Decorative floating dots */}
               <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 rounded-full blur-xl animate-pulse"></div>
               <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MplAnnotations;
