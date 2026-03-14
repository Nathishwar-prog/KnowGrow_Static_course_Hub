import React, { useState } from 'react';
import { 
  Type, Info, Code, Terminal, 
  ArrowLeftRight, ArrowUpDown, Layout, AlignLeft,
  Play, Lightbulb, Zap, CheckCircle2,
  AlertCircle, Sparkles, MousePointer2,
  BarChart, List, MoveRight, HelpCircle,
  TrendingUp, Users, Presentation, ClipboardCheck,
  Activity, Brush, RotateCcw, Check,
  Eye, Ruler
} from 'lucide-react';

const MplLabels: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'titles' | 'axes' | 'styling' | 'rotation' | 'real_world'>('titles');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'add_title':
        outLines = [
          'Initializing Plot Canvas...',
          'Metadata Update: title="Sales Growth"',
          'Executing plt.title("Sales Growth")',
          'Success: Chart title rendered at center-top.'
        ];
        break;
      case 'add_axis':
        outLines = [
          'Setting X-Axis Label: "Months"',
          'Setting Y-Axis Label: "Sales"',
          'Mapping axis units to spatial coordinates...',
          'plt.xlabel("Months") -> Active',
          'plt.ylabel("Sales") -> Active',
          'Success: Contextual labels added to primary axes.'
        ];
        break;
      case 'style_labels':
        outLines = [
          'Styling Title: fontsize=14',
          'Styling X-Axis: fontsize=12, color="blue"',
          'Styling Y-Axis: fontsize=12, color="green"',
          'Applying typography changes...',
          'Success: Custom styled labels active.'
        ];
        break;
      case 'rotate_labels':
        outLines = [
          'Scanning tick labels on X-axis...',
          'Long labels detected: ["Laptop", "Smartphone", ...]',
          'Applying rotation=45...',
          'Recalculating layout margins to prevent clipping.',
          'Success: High-readability rotated labels applied.'
        ];
        break;
      case 'traffic_case':
        outLines = [
          'Dataset: Website Traffic [Mon-Fri]',
          'Title: "Website Traffic"',
          'X-Label: "Day of the Week"',
          'Y-Label: "Number of Visitors"',
          'Success: Professional traffic chart descriptive layers ready.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Analyzing Exercise Plot...',
          'Title: "Daily Exercise Routine" -> OK',
          'X-Label: "Days" -> OK',
          'Y-Label: "Exercise Time (minutes)" -> OK',
          'Marker: "o" -> Detected',
          'Result: 100% Correct. The chart is fully descriptive!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Impactful Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/30 rounded-3xl mb-8 shadow-sm border border-blue-200 dark:border-blue-800/50 transform hover:scale-110 transition-transform">
          <Type className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-bold mb-6 border border-blue-500/20 tracking-[0.3em] uppercase">
          Lesson 0.14
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Labels & Titles</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
          The voice of your data. Without clear titles and axis labels, even the most beautiful chart remains a mystery.
        </p>
      </header>

      {/* 2. Conceptual Foundation Section */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/20 mr-4">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">1ï¸âƒ£ What are Labels?</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium italic border-l-4 border-blue-500 pl-6">
                "Matplotlib labels are text elements used to describe the X-axis, Y-axis, and title of a chart, making it clear and meaningful."
              </p>
              
              <div className="space-y-4">
                 <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center">
                   <List className="w-4 h-4 mr-2" /> 2ï¸âƒ£ Main Types of Labels
                 </h4>
                 <div className="overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 shadow-inner">
                    <table className="w-full text-left">
                       <thead className="bg-blue-500/5 text-[9px] font-black uppercase text-slate-400 tracking-[0.2em]">
                          <tr>
                             <th className="px-8 py-4">Label Type</th>
                             <th className="px-8 py-4">Function</th>
                          </tr>
                       </thead>
                       <tbody className="text-xs font-bold divide-y divide-slate-100 dark:divide-slate-800/50">
                          {[
                            { l: "Title", f: "Describes the entire chart" },
                            { l: "X-axis Label", f: "Describes horizontal axis" },
                            { l: "Y-axis Label", f: "Describes vertical axis" }
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-blue-500/5 transition-colors">
                               <td className="px-8 py-3 text-blue-500">{row.l}</td>
                               <td className="px-8 py-3 text-slate-600 dark:text-slate-400">{row.f}</td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-blue-500/20 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter italic">
                 <Layout className="w-8 h-8 mr-4 text-blue-400" />
                 Label Best Practices
               </h3>
               <div className="space-y-6">
                 {[
                   { t: "Clarity", d: "Explain exactly what the plot represents.", i: Eye },
                   { t: "Context", d: "Help users interpret X and Y measurements.", i: Users },
                   { t: "Professionalism", d: "Essential for data analysis and reports.", i: Presentation },
                   { t: "Navigation", d: "Guide the viewer's eye through data.", i: MousePointer2 }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                      <mod.i className="w-5 h-5 mr-5 text-blue-400 shrink-0" />
                      <div>
                         <h5 className="font-bold text-sm tracking-tight">{mod.t}</h5>
                         <p className="text-[10px] text-blue-100/40">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
               
               <div className="mt-10 p-5 bg-blue-500/20 rounded-2xl border border-blue-500/30 flex items-center shadow-xl">
                  <Lightbulb className="w-5 h-5 text-blue-400 mr-4 animate-pulse" />
                  <p className="text-[11px] text-blue-100 font-bold leading-tight uppercase tracking-tighter">
                    "Charts without labels are not useful in real-world reports."
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Lab & Console Simulation */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-10 gap-8">
           <div className="flex items-center">
             <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-3xl mr-6 shadow-sm border border-blue-200 dark:border-blue-800">
               <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
             </div>
             <div>
               <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Label Customization Lab</h2>
               <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em] mt-2 italic underline decoration-blue-500/30 underline-offset-4">Interactive Playground</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'titles', label: 'Titles', icon: Type },
              { id: 'axes', label: 'Axis Labels', icon: ArrowLeftRight },
              { id: 'styling', label: 'Styling', icon: Brush },
              { id: 'rotation', label: 'Rotation', icon: RotateCcw },
              { id: 'real_world', label: 'Real Case', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-3.5 rounded-3xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30' 
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
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[4.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 transition-all min-h-[580px] flex flex-col relative overflow-hidden">
              
              {/* Tab: Titles */}
              {activeTab === 'titles' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <Type className="w-6 h-6 mr-4" />
                    3ï¸âƒ£ Adding a Title
                  </h3>
                  <div className="space-y-6 flex-1">
                    <div className="flex justify-between items-center mb-2 px-6 py-3 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Function Name</span>
                       <code className="text-sm font-mono font-black text-blue-500">plt.title()</code>
                    </div>
                    <div className="bg-slate-950 rounded-[2.5rem] p-10 border border-slate-800 relative group shadow-2xl">
                        <div className="absolute top-4 right-8 p-1 bg-blue-500/20 text-blue-400 text-[8px] font-black rounded uppercase tracking-tighter">Header Mode</div>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                           plt.plot(x, y)<br/><br/>
                           plt.<code className="text-blue-400 font-black">title</code>(<code className="text-emerald-400">"Sales Growth"</code>)<br/><br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('add_title')} className="absolute bottom-6 right-6 p-4 bg-blue-600 text-white rounded-2xl shadow-xl hover:bg-blue-500 transition-all active:scale-95">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                       {['left', 'center', 'right'].map((pos) => (
                         <div key={pos} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 text-center group cursor-pointer hover:border-blue-500">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">{pos}</span>
                            <AlignLeft className={`w-5 h-5 mx-auto ${pos === 'center' ? 'rotate-0' : pos === 'left' ? 'rotate-0' : 'rotate-180'} text-blue-500 opacity-30 group-hover:opacity-100 transition-opacity`} />
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Axes */}
              {activeTab === 'axes' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500">
                    <ArrowLeftRight className="w-6 h-6 mr-4" />
                    4ï¸âƒ£ Adding Axis Labels
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center mb-4">
                           <ArrowLeftRight className="w-5 h-5 text-indigo-500 mr-3" />
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">X-Axis Label</span>
                        </div>
                        <code className="text-xs font-mono font-bold text-indigo-500">plt.xlabel("Months")</code>
                     </div>
                     <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center mb-4">
                           <ArrowUpDown className="w-5 h-5 text-violet-500 mr-3" />
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Y-Axis Label</span>
                        </div>
                        <code className="text-xs font-mono font-bold text-violet-500">plt.ylabel("Sales")</code>
                     </div>
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
                     <pre className="font-mono text-sm leading-relaxed text-slate-400">
                        plt.plot(months, sales)<br/><br/>
                        plt.<span className="text-indigo-400 font-bold">xlabel</span>("Months")<br/>
                        plt.<span className="text-indigo-400 font-bold">ylabel</span>("Sales")<br/><br/>
                        plt.title("Monthly Sales")
                     </pre>
                  </div>
                  <button onClick={() => runDemo('add_axis')} className="w-full py-5 bg-indigo-600 text-white font-black rounded-3xl shadow-xl hover:bg-indigo-500 transition-all text-xs tracking-widest uppercase italic">Apply Descriptive Labels</button>
                </div>
              )}

              {/* Tab: Styling */}
              {activeTab === 'styling' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-emerald-500">
                    <Brush className="w-6 h-6 mr-4" />
                    5ï¸âƒ£ Styling Labels
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                     {[
                       { p: "fontsize", v: "12", c: "text-blue-500" },
                       { p: "color", v: "'blue'", c: "text-emerald-500" },
                       { p: "fontweight", v: "'bold'", c: "text-indigo-500" },
                       { p: "loc", v: "'left'", c: "text-violet-500" }
                     ].map((prop, i) => (
                       <div key={i} className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center group cursor-pointer">
                          <code className={`text-[9px] font-black ${prop.c} uppercase block mb-1`}>{prop.p}</code>
                          <span className="text-[10px] font-mono font-bold text-slate-500">{prop.v}</span>
                       </div>
                     ))}
                  </div>

                  <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 shadow-2xl relative flex-1 min-h-[220px] flex flex-col justify-center">
                     <pre className="font-mono text-sm leading-relaxed text-slate-300">
                        plt.xlabel("Time", <br/>
                        &nbsp;&nbsp;<span className="text-blue-400">fontsize=12</span>, <br/>
                        &nbsp;&nbsp;<span className="text-blue-400">color="blue"</span><br/>
                        )<br/>
                        plt.title("Styled Labels", <span className="text-emerald-400">fontsize=14</span>)
                     </pre>
                  </div>
                  <button onClick={() => runDemo('style_labels')} className="w-full py-5 bg-emerald-700 text-white font-black rounded-3xl shadow-xl hover:bg-emerald-600 transition-all text-xs uppercase tracking-widest">Apply Typographic parameters</button>
                </div>
              )}

              {/* Tab: Rotation */}
              {activeTab === 'rotation' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-10 pb-4 border-b border-slate-100 dark:border-slate-800 text-amber-500 italic">
                    <RotateCcw className="w-6 h-6 mr-4" />
                    8ï¸âƒ£ Rotating Labels (Ticks)
                  </h3>
                  <div className="bg-amber-500/5 p-6 rounded-[2.5rem] border border-amber-500/10 flex items-center gap-6">
                     <div className="p-4 bg-amber-500 rounded-2xl shrink-0 shadow-lg rotate-45"><Type className="w-8 h-8 text-white" /></div>
                     <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold italic">
                        "Sometimes axis labels overlap, especially when category names are long. Use rotation for better readability."
                     </p>
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[3.5rem] border border-slate-800 shadow-2xl relative group">
                     <pre className="font-mono text-[13px] leading-relaxed text-slate-400">
                        {`# Categories: Laptop, Smartphone, Tablet...
plt.bar(products, sales)

# Rotate labels 45 degrees
plt.xticks(rotation=45)

plt.title("Product Sales")`}
                     </pre>
                  </div>
                  <button onClick={() => runDemo('rotate_labels')} className="w-full py-5 bg-amber-600 text-white font-black rounded-3xl shadow-xl hover:bg-amber-500 transition-all text-xs uppercase tracking-widest tracking-tighter">Fix Label Overlap</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <Activity className="w-6 h-6 mr-4" />
                    7ï¸âƒ£ Case Study: Website Traffic
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-6">
                     <div className="flex-1 bg-white dark:bg-slate-950 p-6 rounded-[2.2rem] border dark:border-slate-800 shadow-sm flex flex-col justify-center text-center">
                        <div className="text-3xl font-black text-blue-500 mb-2">120+</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mon Visitors</div>
                     </div>
                     <div className="flex-[2] bg-slate-950 p-10 rounded-[3rem] border border-slate-800 relative shadow-2xl overflow-hidden group">
                        <pre className="font-mono text-[12px] leading-6 text-slate-400">
                           {`days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
visitors = [120, 150, 170, 160, 180]

plt.plot(days, visitors, marker="o")

plt.xlabel("Day of the Week")
plt.ylabel("Number of Visitors")
plt.title("Website Traffic")`}
                        </pre>
                        <div className="mt-8 flex justify-end">
                           <button onClick={() => runDemo('traffic_case')} className="px-10 py-5 bg-blue-600 text-white font-black rounded-[2rem] shadow-xl hover:bg-blue-500 transition-all text-xs uppercase flex items-center tracking-tighter italic shadow-blue-900/40">
                              <Sparkles className="w-4 h-4 mr-3" /> Map Analytics Labels
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
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] group-hover/terminal:bg-blue-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-blue-500/70" />
                      <h3 className="font-bold text-slate-600 uppercase text-[10px] tracking-[0.4em] font-mono">
                        LABEL_TEXT_ENGINE
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-3 space-y-4">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-8 opacity-20 select-none grayscale cursor-wait">
                        <Type className="w-20 h-20 animate-pulse [animation-duration:3000ms]" />
                        <div className="text-center">
                           <span className="block text-[8px] uppercase tracking-[0.6em] font-black text-blue-500 mb-2">Typography Buffer Idle</span>
                           <span className="text-[10px] font-bold italic">Assign Metadata to the Canvas</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-blue-500/30 mr-4 font-black select-none text-[8px] mt-1 shrink-0 italic">TX::LBL</span>
                              <span className={`leading-relaxed font-semibold transition-colors ${
                                line.includes('Success') || line.includes('Correct') ? 'text-emerald-400 font-bold' :
                                line.includes('Initializing') || line.includes('Setting') ? 'text-amber-400 underline decoration-amber-500/20 underline-offset-4' :
                                line.includes('Mapping') || line.includes('Applying') ? 'text-indigo-400' :
                                line.includes('Result') ? 'text-blue-400 font-black' :
                                'text-slate-400 italic'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/40 mt-8">
                           <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-ping"></span>
                              <span className="text-[8px] text-slate-600 font-black uppercase tracking-[0.3em] italic">Text Layers Synchronized</span>
                           </div>
                           <button onClick={resetConsole} className="text-[9px] text-blue-500 hover:text-blue-400 font-black uppercase tracking-[0.2em] transition-colors">Clear Engine</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Teaching Order Visualizer */}
            <div className="bg-gradient-to-br from-indigo-900 via-blue-950 to-slate-900 p-10 rounded-[4rem] border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-extrabold text-[10px] mb-8 flex items-center uppercase tracking-[0.4em] opacity-80">
                 <ClipboardCheck className="w-4 h-4 text-emerald-400 mr-3" />
                 Readability Sequence
               </h4>
               <div className="space-y-3 px-2 relative z-10">
                  {[
                    "Matplotlib Titles", "Matplotlib Labels", "Matplotlib Grid", "Matplotlib Legends", "Matplotlib Colors"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-12 h-10 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500 ${i === 1 ? 'bg-blue-600 shadow-xl shadow-blue-500/40 rotate-12 scale-110' : 'bg-white/5 border border-white/5 opacity-50'}`}>
                          <span className={`text-[11px] font-black ${i === 1 ? 'text-white' : 'text-slate-700'}`}>{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-bold tracking-widest transition-colors ${i === 1 ? 'text-white font-black italic' : 'text-slate-500 group-hover/item:text-slate-300'}`}>{path}</span>
                       {i === 1 && <Sparkles className="w-3.5 h-3.5 ml-auto text-blue-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tips & Tricks Section */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="bg-white dark:bg-slate-900 p-12 sm:p-24 rounded-[5.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] scale-150 rotate-12 -z-0">
             <Type className="w-96 h-96 text-blue-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 gap-8 relative z-10">
             <div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 flex items-center tracking-tighter italic underline decoration-blue-500/20 underline-offset-8">
                   Professional Advice
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium tracking-tight">Best practices for crystal-clear data storytelling.</p>
             </div>
             <div className="h-0.5 w-40 bg-blue-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
             {[
               { t: "The Label Mandate", d: "Always include a Title, X-axis, and Y-axis label. An unlabelled chart is professional guesswork.", i: Check, c: "text-blue-500" },
               { t: "Efficiency First", d: "Keep labels short and punchy. Use 'Monthly Sales' instead of long, descriptive sentences.", i: Zap, c: "text-amber-500" },
               { t: "Units of Measure", d: "Always include units when necessary: Revenue ($), Temp (Â°C), or Distance (km).", i: Ruler, c: "text-rose-500" },
               { t: "Actionable Titles", d: "Your title should explain what the chart shows, not just what the axes are.", i: Layout, c: "text-emerald-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip">
                 <div className={`p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.8rem] mr-8 shadow-sm group-hover/tip:bg-blue-500/10 transition-all duration-500 ${tip.c} bg-opacity-10 shrink-0`}>
                    <tip.i className="w-8 h-8 group-hover/tip:rotate-12 group-hover/tip:scale-110 transition-transform" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-extrabold text-slate-900 dark:text-white mb-4 group-hover/tip:text-blue-600 transition-colors uppercase tracking-[0.2em] text-[10px]">â­ PRO TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold italic">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Practice Mission */}
      <section className="max-w-4xl mx-auto pb-24 px-6">
        <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-950 p-12 sm:p-24 rounded-[6rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-300/10 rounded-full blur-[100px] -z-0"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-16 items-center">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-[10px] font-black mb-10 border border-white/20 tracking-[0.4em] uppercase">
                ðŸŽ¯ Lab Mission
              </div>
              <h2 className="text-5xl font-black text-white mb-8 leading-tight tracking-tighter italic">
                Daily Exercise Routine
              </h2>
              <p className="text-blue-100 text-lg mb-12 leading-relaxed font-semibold pr-4">
                Create a plot for daily exercise (Mon-Fri) with <b>circular markers</b>. Your mission: Add a clear <b>Title</b>, <b>X-Label</b>, and <b>Y-Label (with minutes unit)</b>.
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-blue-900 hover:bg-slate-100 px-12 py-6 rounded-[2.5rem] text-[11px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 uppercase tracking-[0.1em] italic mx-auto xl:mx-0"
               >
                 <Play className="w-5 h-5 mr-4 fill-blue-900 group-hover/btn:scale-125 transition-transform" />
                 VALIDATE LABEL METADATA
               </button>
            </div>

            <div className="w-full xl:w-96 relative">
               <div className="bg-slate-950 rounded-[4.5rem] border border-white/10 p-16 relative shadow-2xl overflow-hidden group-hover:scale-[1.05] transition-transform duration-700">
                  <div className="flex justify-between items-center mb-10 px-2 opacity-50">
                    <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-blue-500/40"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-blue-500/40"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 font-black uppercase tracking-[0.4em]">EXERCISE_LAB.v1</span>
                  </div>

                  {/* Mock Visual representation */}
                  <div className="h-44 relative bg-blue-500/5 rounded-[3rem] overflow-hidden border border-blue-500/10 flex flex-col items-center justify-center">
                     <div className="text-[10px] text-blue-400 font-black mb-4 uppercase tracking-[0.2em] animate-pulse">Daily Routine</div>
                     <Activity className="w-16 h-16 text-blue-500/40" />
                     <div className="absolute bottom-4 left-6 text-[8px] text-slate-600 font-bold uppercase tracking-widest">Days -{'>'}</div>
                  </div>
                  
                  <div className="mt-12 flex items-center justify-center gap-3 text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
                     <CheckCircle2 className="w-3 h-3 text-emerald-500/40" />
                     Text Layers Synced
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Summary Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-20 opacity-40 hover:opacity-100 transition-opacity">
         <p className="text-xs font-bold text-slate-500 dark:text-slate-400 italic">
            Proper labelling is the difference between a random line and a powerful data insight.
         </p>
      </footer>

    </div>
  );
};

export default MplLabels;
