import React, { useState } from 'react';
import { 
  Type, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  Activity, Layers, List, Check, Eye, 
  ShieldCheck, TrendingUp, MonitorPlay, 
  MousePointer2, Box, Maximize, Clock, 
  Target, Presentation, Sparkles, RotateCw, 
  AlignCenter, Palette, MoveRight, ClipboardCheck,
  HelpCircle
} from 'lucide-react';

function MplText() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'styling' | 'multi_rotate' | 'alignment' | 'sales_peaks'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_text':
        outLines = [
          'Plotting Data: [1, 2, 3, 4] vs [10, 20, 25, 30]',
          'Executing plt.text(2, 20, "Important Point")...',
          'Rasterizing label at coordinate (2, 20)',
          'Success: Custom annotation anchored to data point.'
        ];
        break;
      case 'styled_text':
        outLines = [
          'Applying Color: "red"',
          'Applying Fontsize: 12',
          'Applying FontWeight: "bold"',
          'plt.text(2, 20, "Peak Value", color="red", fontsize=12)',
          'Success: Styled annotation rendered for emphasis.'
        ];
        break;
      case 'multi_rotate':
        outLines = [
          'Series: [10, 20, 30] with markers="o"',
          'Labeling Point A at (1, 10)...',
          'Labeling Point B at (2, 20) with rotation=45...',
          'Labeling Point C at (3, 30)...',
          'Success: Multiple rotated labels placed.'
        ];
        break;
      case 'alignment_demo':
        outLines = [
          'Testing Horizontal Alignment (ha)...',
          'plt.text(pos, "Aligned", ha="center")',
          'plt.text(pos, "Aligned", ha="right")',
          'Success: Text alignment recalibrated for clarity.'
        ];
        break;
      case 'sales_peak':
        outLines = [
          'Loading Monthly Sales Dataset...',
          'Detecting Maximum: March (300)',
          'Applying plt.text("Mar", 300, "Highest Sales")',
          'Success: Trend peak identified and labeled.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Scanning for Daily Study Hours...',
          'Checking: plt.text("Fri", 5, "Highest Study Time")... FOUND.',
          'Verifying marker="o" usage... YES.',
          'Validation: plt.title() detected.',
          'Performance: 100/100. Student project annotated perfectly!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100 italic font-black">
      
      {/* 1. Header with Typographic Design */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden italic">
        <div className="absolute top-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-5 bg-amber-100 dark:bg-amber-900/30 rounded-[2.5rem] mb-10 shadow-sm border border-amber-200 dark:border-amber-800/50 hover:scale-110 transition-transform cursor-pointer group">
          <Type className="w-14 h-14 text-amber-600 dark:text-amber-400 group-hover:rotate-12 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-[10px] font-black mb-6 border border-amber-500/20 tracking-[0.4em] uppercase shadow-lg backdrop-blur-md italic">
          Course Module: Chart Annotation
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic uppercase underline decoration-amber-500/20 underline-offset-[16px]">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500">Text Labels</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold italic">
          "Add intelligence to your visuals. Matplotlib Text allows you to insert explanations and notes anywhere on a plot to highlight insights."
        </p>
      </header>

      {/* 2. Conceptual Foundation Overview */}
      <section className="max-w-6xl mx-auto mb-20 px-4 italic">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between transition-all hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-amber-500 rounded-2xl shadow-lg shadow-amber-500/20 mr-6 group-hover:rotate-6 transition-transform">
                  <Info className="w-6 h-6 text-white italic shadow-2xl" />
                </div>
                <h2 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter decoration-amber-500/10 underline underline-offset-8">Data Narration</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-amber-500 pl-8 transition-colors group-hover:text-slate-900 dark:group-hover:text-white underline decoration-amber-500/5 underline-offset-8">
                "Matplotlib text is used to display custom labels inside a chart at specific coordinates to explain peaks, trends, or notes."
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { l: "Anchor to (x,y)", i: Target },
                   { l: "Insight Context", i: Presentation }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800/50 hover:bg-amber-500/5 transition-all">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mr-5">
                         <mod.i className="w-4 h-4 text-amber-500" />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{mod.l}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-700 via-orange-800 to-indigo-950 p-10 rounded-[4rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group font-black italic">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white font-black italic uppercase italic">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter underline decoration-white/20 underline-offset-8">
                 <ShieldCheck className="w-8 h-8 mr-5" />
                 Narrative Elements
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 leading-tight">
                 {[
                   { t: "Peak Labels", d: "Highlight maximum values.", i: TrendingUp },
                   { t: "Explanatory Notes", d: "Explain data anomalies.", i: Box },
                   { t: "Point Naming", d: "Identify specific markers.", i: MousePointer2 },
                   { t: "Trend Callouts", d: "Annotate slope changes.", i: Activity }
                 ].map((mod, i) => (
                   <div key={i} className="flex flex-col p-6 bg-white/10 rounded-[3rem] border border-white/5 hover:bg-white/20 transition-all cursor-crosshair group/item relative overflow-hidden">
                      <mod.i className="w-8 h-8 mb-4 text-amber-200 group-hover/item:scale-110 transition-transform" />
                      <div>
                         <h5 className="font-black text-xs tracking-widest tracking-tighter mb-1 uppercase">{mod.t}</h5>
                         <p className="text-[9px] text-white/40 font-bold decoration-white/5 underline underline-offset-4 font-black">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-6 bg-white/5 rounded-[2.5rem] border border-white/10 flex items-center shadow-2xl backdrop-blur-md">
                  <Sparkles className="w-6 h-6 text-amber-200 mr-5 animate-pulse" />
                  <p className="text-xs font-black leading-relaxed opacity-80 decoration-amber-200/20 underline underline-offset-4 tracking-tighter uppercase italic shadow-sm">
                    Text transforms visual trends into verbal insights.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Annotation Studio */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4 italic font-black">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-10">
           <div className="flex items-center translate-x-4">
             <div className="p-4 bg-amber-100 dark:bg-amber-900/40 rounded-[3rem] mr-8 shadow-2xl border border-amber-200 dark:border-amber-800 transition-all hover:rotate-6">
               <Terminal className="w-10 h-10 text-amber-600 dark:text-amber-400 font-bold" />
             </div>
             <div>
               <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight underline decoration-amber-500/10 underline-offset-10 italic uppercase tracking-tighter font-black underline">Annotation Studio</h2>
               <p className="text-xs text-slate-500 font-black uppercase tracking-[0.5em] mt-3 italic underline decoration-amber-500/10 underline-offset-4 opacity-70">plt.text() Coordinate Engine</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-2 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar font-black">
            {[
              { id: 'basics', label: 'Basic Text', icon: Code },
              { id: 'styling', label: 'Styling Labs', icon: Palette },
              { id: 'multi_rotate', label: 'Multi & Rotate', icon: RotateCw },
              { id: 'alignment', label: 'Alignment (ha)', icon: AlignCenter },
              { id: 'sales_peaks', label: 'Sales Showcase', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-8 py-5 rounded-[4rem] text-[11px] font-black tracking-widest uppercase transition-all whitespace-nowrap italic ${
                  activeTab === tab.id 
                    ? 'bg-amber-600 text-white shadow-xl shadow-amber-900/40 scale-105 font-black' 
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-3 font-black" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start italic font-black">
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-14 rounded-[5rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[640px] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.04] rotate-12 -z-0 grayscale group-hover:grayscale-0 transition-all duration-1000"><Type className="w-[30rem] h-[30rem] text-amber-500" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col relative z-10 italic">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-amber-600 tracking-tighter uppercase italic underline decoration-amber-500/20 underline-offset-8 font-black">
                    <Code className="w-10 h-10 mr-6 text-amber-500 font-black italic" />
                    2️⃣ & 3️⃣ Core Text Syntax
                  </h3>
                  <div className="space-y-12 flex-1 flex flex-col justify-center italic">
                    <div className="p-8 bg-amber-500/5 rounded-[3rem] border border-amber-500/10 italic">
                       <span className="block text-[10px] text-amber-600 uppercase tracking-[0.4em] mb-4">The Command</span>
                       <code className="text-2xl font-mono text-slate-700 dark:text-slate-300 tracking-tighter font-black">plt.<span className="text-amber-500 font-black">text</span>(x, y, "label")</code>
                    </div>

                    <div className="bg-slate-950 p-12 rounded-[5rem] border border-amber-500/20 shadow-2xl relative group/code overflow-hidden font-black">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/code:scale-110 transition-all font-mono italic"><Target className="w-40 h-40 text-amber-500" /></div>
                        <pre className="font-mono text-sm leading-8 text-slate-300 relative z-10 italic">
                           plt.plot([1,2,3,4], [10,20,25,30])<br/><br/>
                           plt.<span className="text-amber-500 underline decoration-amber-500/30 underline-offset-8">text</span>(2, 20, "Important Point")<br/><br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_text')} className="absolute bottom-12 right-12 p-8 bg-amber-600 text-white rounded-[2.5rem] shadow-2xl hover:bg-amber-500 transition-all active:scale-90 group-hover/code:ring-8 ring-amber-500/10">
                           <Play className="w-8 h-8 fill-current" />
                        </button>
                    </div>
                    
                    <div className="flex items-center p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-[3.5rem] shadow-sm italic text-xs font-black">
                       <HelpCircle className="w-8 h-8 text-amber-500 mr-8 shrink-0 animate-bounce" />
                       <p className="text-slate-500 font-black uppercase tracking-widest leading-relaxed">
                         Result: Anchor "Important Point" precisely at <span className="text-amber-600 underline decoration-amber-500/10 underline-offset-4">(2, 20)</span> coordinate.
                       </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Styling Labs */}
              {activeTab === 'styling' && ( activeTab === 'styling' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-orange-500 uppercase tracking-tighter italic font-black underline decoration-orange-500/10 underline-offset-8">
                    <Palette className="w-10 h-10 mr-6 text-orange-500" />
                    4️⃣ Text Styling Parameters
                  </h3>
                  <div className="grid grid-cols-2 gap-8 font-black italic">
                     <div className="p-10 bg-orange-500/5 rounded-[4rem] border border-orange-500/10 hover:bg-orange-500/10 transition-all group/p italic">
                        <span className="block text-[10px] text-orange-600 tracking-[0.4em] uppercase mb-6 italic underline decoration-orange-500/10 underline-offset-8">Property: fontsize</span>
                        <code className="text-2xl text-orange-500 group-hover:scale-110 transition-transform inline-block font-black">fontsize=12</code>
                     </div>
                     <div className="p-10 bg-orange-500/5 rounded-[4rem] border border-orange-500/10 hover:bg-orange-500/10 transition-all group/s italic">
                        <span className="block text-[10px] text-orange-600 tracking-[0.4em] uppercase mb-6 italic underline decoration-orange-500/10 underline-offset-8">Property: color</span>
                        <code className="text-2xl text-orange-500 group-hover:scale-110 transition-transform inline-block font-black">color="red"</code>
                     </div>
                  </div>
                  <div className="bg-slate-950 p-12 rounded-[5rem] border border-orange-500/20 shadow-2xl relative overflow-hidden group/code italic">
                     <pre className="font-mono text-sm leading-10 text-slate-300 relative z-10 italic">
                        plt.<span className="text-orange-500">text</span>(x, y, "Label", <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400 font-black">fontsize</span>=12, <span className="text-orange-400 font-black">color</span>="red", <span className="text-orange-400 font-black">fontweight</span>="bold")
                     </pre>
                  </div>
                  <button onClick={() => runDemo('styled_text')} className="w-full py-8 bg-orange-600 text-white font-black rounded-[4rem] shadow-2xl hover:bg-orange-500 transition-all text-xs tracking-[0.5em] italic uppercase mt-6 transform hover:scale-[1.02] active:scale-95 font-black uppercase">Synthesize Aesthetic Output</button>
                </div>
              ))}

              {/* Tab: Multi & Rotate */}
              {activeTab === 'multi_rotate' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-amber-500 uppercase tracking-tighter italic font-black underline decoration-amber-500/20 underline-offset-8">
                    <RotateCw className="w-10 h-10 mr-6 text-amber-500 font-black" />
                    5️⃣ & 6️⃣ Scaling & Rotation
                  </h3>
                  <div className="bg-amber-500/5 p-12 rounded-[4.5rem] border border-amber-500/10 italic">
                     <p className="text-sm font-bold text-slate-500 mb-12 leading-relaxed italic pr-12 text-slate-400 font-black lowercase underline decoration-amber-500/5 underline-offset-8">
                        "Layer multiple annotations and rotate them by specific degrees to prevent label collision and overlap."
                     </p>
                     <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-amber-500/20 shadow-2xl relative font-mono italic">
                        <pre className="text-xs text-amber-200 leading-8">
                           {`plt.text(1, 10, "Point A")
plt.text(2, 20, "Trend", rotation=45)
plt.text(3, 30, "Point C")`}
                        </pre>
                     </div>
                     <button onClick={() => runDemo('multi_rotate')} className="w-full py-7 bg-amber-800 text-white font-black rounded-[3rem] shadow-2xl hover:bg-amber-700 transition-all text-[11px] tracking-widest italic uppercase mt-12 flex items-center justify-center filter hover:brightness-110 font-black">
                        <RotateCw className="w-5 h-5 mr-5" /> Execute Rotational Overlap
                     </button>
                  </div>
                </div>
              )}

              {/* Tab: Alignment */}
              {activeTab === 'alignment' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center italic">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-indigo-500 uppercase tracking-tighter italic font-black underline decoration-indigo-500/20 underline-offset-8">
                    <AlignCenter className="w-10 h-10 mr-6 text-indigo-500" />
                    7️⃣ Horizontal Alignment (ha)
                  </h3>
                  <div className="p-10 bg-indigo-500/5 rounded-[4.5rem] border border-indigo-500/10 italic">
                     <div className="flex justify-center gap-6 mb-12 font-black italic uppercase italic">
                        {['left', 'center', 'right'].map(align => (
                           <div key={align} className="px-6 py-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-[10px] text-indigo-600 font-black tracking-widest">{align}</div>
                        ))}
                     </div>
                     <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-indigo-500/30 shadow-2xl relative overflow-hidden font-mono text-[11px] italic">
                        <pre className="text-indigo-400 tracking-tighter">
                           plt.text(x, y, "Text", <span className="text-white font-black">ha</span>="center")
                        </pre>
                     </div>
                     <button onClick={() => runDemo('alignment_demo')} className="w-full py-8 bg-indigo-700 text-white font-black rounded-[4rem] shadow-2xl hover:bg-indigo-600 transition-all text-[11px] tracking-widest uppercase mt-12 italic border-b-4 border-indigo-900/50 font-black uppercase tracking-widest shadow-2xl">Recalibrate Alignment Logic</button>
                  </div>
                </div>
              )}

              {/* Tab: Sales Showcase */}
              {activeTab === 'sales_peaks' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col justify-center space-y-12 relative z-10 italic uppercase font-black">
                  <h3 className="text-3xl font-black flex items-center mb-6 text-amber-600 tracking-tighter border-b dark:border-slate-800 pb-6 uppercase italic underline decoration-amber-500/10 underline-offset-8">
                    <TrendingUp className="w-10 h-10 mr-6 text-amber-500" />
                    8️⃣ Peak Detection Showcase
                  </h3>
                  <div className="bg-amber-500/5 p-14 rounded-[5.5rem] border border-amber-500/20 flex flex-col items-center justify-center relative overflow-hidden group/case italic font-black">
                     <div className="absolute top-0 right-0 p-14 opacity-[0.05] grayscale-0 group-hover/case:rotate-12 transition-transform duration-1000 font-black"><Presentation className="w-48 h-48 text-amber-400 font-black shadow-2xl" /></div>
                     <div className="text-4xl font-black text-amber-600 mb-8 italic underline decoration-amber-500/20 underline-offset-8 tracking-tighter uppercase font-black">March Maximum Peak</div>
                     <p className="text-sm font-bold text-slate-500 text-center leading-relaxed italic max-w-sm lowercase opacity-70 underline decoration-amber-500/5 underline-offset-6 font-black">
                        "Highlighting the peak sales performance automatically. मार्च (March) represents the 300 unit maximum."
                     </p>
                  </div>
                  <button onClick={() => runDemo('sales_peak')} className="w-full py-8 bg-black text-white dark:bg-white dark:text-black font-black rounded-[4.5rem] shadow-2xl hover:bg-slate-900 transition-all text-[11px] tracking-[0.5em] italic uppercase ring-offset-4 active:ring-[10px] ring-amber-500/10 font-black shadow-2xl">Initialize Peak Annotation</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10 font-mono italic font-black">
            
            {/* Annotation Engine Terminal */}
            <div className="bg-[#0b0c10] rounded-[5rem] p-12 border border-slate-800 flex-1 min-h-[560px] shadow-2xl relative overflow-hidden group/terminal flex flex-col italic font-black">
               <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] group-hover/terminal:bg-amber-500/10 transition-all duration-1000 font-black"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1 italic font-black">
                  <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-10 px-6 transition-all font-black">
                    <div className="flex items-center">
                      <Terminal className="w-8 h-8 mr-6 text-amber-500/70 animate-pulse font-bold italic shadow-2xl" />
                      <h3 className="font-black text-slate-700 uppercase text-[10px] tracking-[0.6em] font-mono font-black italic">
                         ANNOTATION_ENGINE_v2
                      </h3>
                    </div>
                    <div className="flex space-x-3">
                       <div className="w-4 h-4 rounded-full bg-amber-950 shadow-inner"></div>
                       <div className="w-4 h-4 rounded-full bg-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[420px] custom-scrollbar px-6 space-y-8 leading-loose uppercase italic tracking-tighter font-black">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-14 opacity-20 select-none filter hover:brightness-150 transition-all duration-700 grayscale hover:grayscale-0 font-black">
                        <MonitorPlay className="w-28 h-28 stroke-[1px] animate-pulse duration-[6000ms] font-black" />
                        <div className="text-center font-black">
                           <span className="block text-[9px] uppercase tracking-[0.8em] font-black text-amber-600 mb-4 underline decoration-amber-500/30 underline-offset-10 italic">Engine Standby...</span>
                           <span className="text-[11px] font-black text-white/40 tracking-widest decoration-white/5 underline underline-offset-4 font-black">Text Rasterization Logic Required</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-6 font-black italic">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-8 duration-700 flex items-start group/line font-black">
                              <span className="text-amber-500/30 mr-6 font-black select-none text-[8px] mt-1 shrink-0 uppercase tracking-widest decoration-amber-500/10 underline italic font-mono tracking-tighter lowercase shadow-sm">plt::text</span>
                              <span className={`leading-relaxed font-black transition-colors ${
                                line.includes('Success') || line.includes('Performance') ? 'text-amber-400 font-extrabold tracking-tight underline decoration-amber-500/10 underline-offset-6 font-mono uppercase italic shadow-sm' :
                                line.includes('Loading') || line.includes('Highlighting') || line.includes('Scanning') ? 'text-orange-400 italic lowercase shadow-sm' :
                                line.includes('Executing') || line.includes('Applying') || line.includes('Anchor') || line.includes('Detecting') ? 'text-amber-500 uppercase italic shadow-sm' :
                                line.includes('Result') ? 'text-amber-500 font-black tracking-widest uppercase border-b border-amber-500/20 italic shadow-sm' :
                                'text-slate-600 italic uppercase text-[9px] tracking-tight decoration-slate-900 underline underline-offset-4 shadow-sm'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-16 flex justify-between items-center border-t border-white/5 mt-14 italic uppercase font-black font-black italic">
                           <div className="flex items-center gap-5 italic font-black">
                              <span className="w-3.5 h-3.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_20px_rgba(245,158,11,0.7)] font-black"></span>
                              <span className="text-[10px] text-slate-800 font-black tracking-[0.5em] decoration-amber-500/10 underline italic font-mono lowercase font-black">rc_raster_locked</span>
                           </div>
                           <button onClick={resetConsole} className="text-[10px] text-amber-500/70 hover:text-amber-400 font-black tracking-[0.4em] font-mono transition-colors border-b-2 border-amber-500/10 uppercase italic font-black shadow-sm">Clear IO</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Course Evolution Roadmap Architecture */}
            <div className="bg-gradient-to-br from-amber-950 via-orange-950 to-slate-900 p-12 rounded-[5.5rem] border border-white/10 shadow-2xl relative overflow-hidden group font-black italic shadow-2xl transition-all">
               <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-amber-400/10 rounded-full blur-[120px] font-black"></div>
               <h4 className="text-white font-black text-[11px] mb-12 flex items-center uppercase tracking-[0.6em] opacity-80 underline decoration-amber-500 underline-offset-10 italic tracking-tighter lowercase font-mono font-black italic">
                 <List className="w-6 h-6 text-amber-400 mr-5 transition-transform group-hover:rotate-180 duration-1000 italic font-black shadow-2xl" />
                 Specialist roadmap
               </h4>
               <div className="space-y-6 px-4 relative z-10 italic uppercase font-black tracking-tighter font-black shadow-2xl">
                  {[
                    "Matplotlib Labels", "Matplotlib Legends", "Matplotlib Text Labels", "Matplotlib Annotations", "Advanced Storytelling"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300 font-black italic shadow-2xl">
                       <div className={`w-14 h-12 rounded-2xl flex items-center justify-center mr-8 transition-all duration-700 hover:scale-110 shadow-2xl font-black italic ${i === 2 ? 'bg-amber-600 shadow-amber-500/50 rotate-12' : 'bg-white/5 border border-white/10 opacity-30 select-none grayscale'}`}>
                          <span className={`text-[12px] font-black italic ${i === 2 ? 'text-white shadow-sm' : 'text-slate-600 shadow-sm'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-black tracking-widest transition-colors uppercase italic ${i === 2 ? 'text-amber-400 underline decoration-amber-500/30 underline-offset-10 shadow-sm' : 'text-slate-800 shadow-sm'}`}>{path}</span>
                       {i === 2 && <Sparkles className="w-5 h-5 ml-auto text-amber-400 animate-pulse font-black italic shadow-2xl" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Annotation Advice */}
      <section className="max-w-6xl mx-auto mb-24 px-4 overflow-hidden italic font-black">
        <div className="bg-white dark:bg-slate-900 p-16 sm:p-28 rounded-[7rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group font-black italic">
          <div className="absolute bottom-0 left-0 p-24 opacity-[0.04] scale-150 rotate-12 -z-0 pointer-events-none grayscale-0 group-hover:-rotate-12 transition-transform duration-[4000ms] transition-all font-black"><Type className="w-[40rem] h-[40rem] text-amber-500 font-black" /></div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-28 gap-12 relative z-10 tracking-tighter decoration-amber-500/20 underline underline-offset-[20px] italic font-black uppercase italic underline">
             <div className="flex items-center font-black italic uppercase italic">
                <div className="p-6 bg-amber-100 dark:bg-amber-900/40 rounded-[3.5rem] mr-12 shadow-2xl transition-transform hover:rotate-6 font-black italic">
                   <Lightbulb className="w-14 h-14 text-amber-600 dark:text-amber-400 font-bold italic shadow-2xl font-black" />
                </div>
                <div>
                   <h2 className="text-5xl text-slate-900 dark:text-white mb-3 uppercase tracking-tighter italic shadow-sm font-black underline decoration-amber-500/5">
                      Narrative Logic Grid
                   </h2>
                   <p className="text-xl text-slate-500 dark:text-slate-400 font-bold tracking-tight lowercase italic border-l-4 border-amber-500/20 pl-8 font-black underline decoration-amber-500/5">Annotation Matrix expert advice.</p>
                </div>
             </div>
             <div className="h-0.5 w-48 bg-amber-500/20 hidden md:block italic tracking-widest font-black uppercase italic underline decoration-amber-500/5 underline-offset-4">--- TEXT_MOD ---</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10 font-black italic">
             {[
               { t: "The Minimalist Rule", d: "Avoid excessive labels. Too much text clutters the figure; use annotations strictly for critical insights like peaks or anomalies.", i: ShieldCheck, c: "text-amber-600" },
               { t: "Proximal Anchoring", d: "Always anchor text close to the data point it describes to maintain structural clarity and visual connection.", i: MousePointer2, c: "text-orange-600" },
               { t: "Storytelling Peaks", d: "Highlight Highest Sales, Maximum Temperatures, or Peak Profits to instantly guide the viewer's eye.", i: TrendingUp, c: "text-yellow-600" },
               { t: "Hybrid Markers", d: "Combine specific data markers (o, s) with text labels for high-precision data identification in complex plots.", i: Target, c: "text-amber-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip transition-all hover:translate-x-4 duration-500 cursor-help font-black italic">
                 <div className={`p-8 bg-slate-50 dark:bg-slate-800 rounded-[3.5rem] mr-12 shadow-sm group-hover/tip:bg-amber-500/10 transition-all duration-1000 ${tip.c} bg-opacity-20 shrink-0 font-black italic shadow-2xl`}>
                    <tip.i className="w-12 h-12 group-hover/tip:rotate-12 group-hover/tip:scale-125 transition-transform font-bold italic shadow-2xl font-black" />
                 </div>
                 <div className="pt-2 italic font-black">
                    <h4 className="font-black text-slate-900 dark:text-white mb-6 group-hover/tip:text-amber-600 transition-colors uppercase tracking-[0.5em] text-[11px] underline decoration-amber-500/10 italic font-black shadow-sm">⭐ TEXT TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-black italic tracking-tighter opacity-80 lowercase decoration-amber-500/5 underline underline-offset-8 decoration-dashed font-black shadow-sm">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Production Sample Showcase */}
      <section className="max-w-6xl mx-auto mb-20 px-4 font-black italic shadow-2xl transition-all">
         <div className="bg-amber-600/5 rounded-[6rem] p-16 sm:p-24 border border-amber-500/10 relative group overflow-hidden italic shadow-2xl backdrop-blur-3xl font-black transition-all">
            <div className="absolute top-0 right-0 p-14 opacity-[0.06] grayscale hover:grayscale-0 transition-all duration-[2000ms] font-black shadow-2xl"><MoveRight className="w-[35rem] h-[35rem] text-amber-500 font-bold italic shadow-2xl" /></div>
            <div className="relative z-10 flex flex-col xl:flex-row items-center gap-20 italic font-black shadow-2xl">
               <div className="flex-1 text-center xl:text-left font-black italic shadow-2xl">
                  <h3 className="text-5xl font-black text-amber-600 mb-10 tracking-tighter uppercase italic underline decoration-amber-500/10 underline-offset-[16px] font-black shadow-sm">9️⃣ Highlighted Peak Trend</h3>
                  <p className="text-xl font-black text-slate-500 dark:text-slate-400 mb-14 leading-relaxed italic opacity-80 lowercase decoration-amber-500/5 underline underline-offset-10 font-black shadow-sm">
                     "Visualizing monthly units while highlighting March as the maximum sales period using plt.text anchor logic."
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10 font-black italic shadow-2xl">
                     {[
                       { v: "Anchor: Mar (300)", c: "bg-amber-500/10 shadow-sm" },
                       { v: "Logic: Fixed Coordinate", c: "bg-orange-600/20 shadow-sm" }
                     ].map(v => (
                       <div key={v.v} className={`${v.c} px-10 py-6 rounded-[3rem] text-[11px] font-black text-amber-600 uppercase tracking-widest text-center italic border border-amber-500/10 shadow-xl font-black shadow-sm`}>{v.v}</div>
                     ))}
                  </div>
                  <button onClick={() => runDemo('sales_peak')} className="w-full py-8 bg-amber-600 text-white font-black rounded-[4rem] shadow-2xl hover:bg-amber-500 focus:ring-[12px] ring-amber-500/20 flex items-center justify-center gap-6 transition-all italic text-[12px] tracking-widest uppercase border-b-6 border-amber-900/50 active:translate-y-2 font-black shadow-2xl">
                     <Presentation className="w-6 h-6 fill-current font-black italic shadow-2xl" /> ANALYZE PEAK DISTRIBUTION
                  </button>
               </div>
               <div className="w-full xl:w-[28rem] bg-slate-950 p-14 rounded-[7rem] border border-amber-500/30 shadow-2xl group/ex transform hover:-rotate-1 transition-transform font-black shadow-2xl italic">
                  <div className="flex items-center justify-center h-56 relative overflow-hidden mb-10 bg-amber-500/5 rounded-[4rem] border border-amber-500/10 shadow-inner font-black shadow-2xl">
                     <Type className="w-32 h-32 text-amber-500/20 group-hover/ex:scale-150 transition-transform duration-[4000ms] font-black shadow-2xl shadow-sm" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-amber-500/10 tracking-[2em] uppercase select-none cursor-not-allowed font-black shadow-sm italic shadow-2xl">RASTER_BUFFER_OK</div>
                  </div>
                  <div className="h-0.5 w-full bg-amber-500/20 mb-10 px-6 font-black italic shadow-2xl"></div>
                  <div className="flex flex-col gap-6 font-mono opacity-60 italic text-[10px] font-black shadow-2xl">
                    <div className="flex justify-between font-black tracking-widest uppercase shadow-sm"><span>Engine::Type</span> <span className="text-amber-500 underline decoration-amber-500/20 underline-offset-8 tracking-widest uppercase font-black uppercase tracking-tighter shadow-sm italic">Text_Buffer_02</span></div>
                    <div className="flex justify-between font-black tracking-widest uppercase shadow-sm"><span>Raster::Coord</span> <span className="text-amber-500 underline decoration-amber-500/20 underline-offset-8 tracking-widest uppercase font-black uppercase tracking-tighter shadow-sm italic">(Mar, 300)</span></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Practice Lab Mission */}
      <section className="max-w-4xl mx-auto pb-28 px-6 md:px-0 font-black italic shadow-2xl transition-all">
        <div className="bg-gradient-to-br from-amber-700 via-orange-800 to-indigo-950 p-16 sm:p-28 rounded-[8.5rem] shadow-2xl relative overflow-hidden group border-b-[12px] border-amber-900/40 transform hover:scale-[1.01] transition-all italic font-black shadow-2xl text-white">
          <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[140px] -z-0 pointer-events-none group-hover:scale-125 transition-transform duration-[5000ms] font-black"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-24 items-center italic font-black text-white italic font-black shadow-2xl">
            <div className="flex-1 text-center xl:text-left font-black italic shadow-2xl">
              <div className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-full text-[11px] font-black mb-14 border border-white/20 tracking-[0.5em] uppercase shadow-2xl backdrop-blur-2xl italic tracking-tighter decoration-white/20 underline underline-offset-10 italic font-black shadow-sm">
                🎯 Annotation Lab Mission
              </div>
              <h2 className="text-6xl font-black text-white mb-12 leading-[1.0] tracking-tighter uppercase italic decoration-white/10 underline underline-offset-[16px] font-black shadow-sm italic">
                Daily Study Peak
              </h2>
              <p className="text-amber-100 text-lg mb-16 leading-relaxed font-black pr-8 opacity-90 italic border-l-6 border-amber-400 pl-10 lowercase tracking-widest decoration-white/10 underline underline-offset-10 font-black shadow-sm italic">
                Annotate the flow! Create a chart showing <b>Daily Study Hours</b> (Mon-Fri) and label the highest point (Fri, 5) with: <b>"Highest Study Time"</b>. Enable markers for precision!
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-indigo-950 hover:bg-slate-50 px-20 py-10 rounded-[5rem] text-[15px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-90 uppercase tracking-[0.4em] italic mx-auto xl:mx-0 border-b-8 border-indigo-900/40 transform hover:translate-y-[-4px] shadow-2xl font-black italic"
               >
                 <Play className="w-6 h-6 mr-6 fill-indigo-950 group-hover/btn:rotate-180 transition-transform duration-700 font-black shadow-2xl shadow-sm italic" />
                 Initialize Text Logic
               </button>
            </div>

            <div className="w-full xl:w-[26rem] relative font-mono font-black shadow-2xl italic">
               <div className="bg-[#0b0c10] rounded-[7rem] border border-white/10 p-20 relative shadow-2xl overflow-hidden group-hover:rotate-3 transition-transform duration-1000 rotate-2 translate-z-10 bg-amber-500/5 font-black shadow-2xl italic">
                  <div className="flex justify-between items-center mb-16 px-6 opacity-40 font-black italic uppercase italic shadow-sm">
                    <div className="flex gap-4 font-black italic shadow-sm">
                       <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.8)] animate-ping font-black shadow-sm"></div>
                       <div className="w-4 h-4 rounded-full bg-amber-500/40 font-black shadow-sm"></div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.6em] italic decoration-white/10 underline underline-offset-8 tracking-widest uppercase italic font-black shadow-sm">LOG_v2</span>
                  </div>

                  <div className="h-56 relative flex items-center justify-center p-12 bg-amber-500/5 rounded-[5rem] border border-amber-500/10 overflow-hidden font-black group/m font-black italic shadow-2xl">
                     <Type className="w-28 h-28 text-amber-600/30 group-hover/m:rotate-[360deg] transition-transform duration-[6000ms] font-black shadow-2xl shadow-sm italic" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-amber-500/10 tracking-[2.5em] uppercase cursor-help select-none font-bold font-black shadow-sm italic">TEXT_RASTERIZING...</div>
                  </div>
                  
                  <div className="mt-16 flex items-center justify-center gap-6 text-amber-500/10 text-[11px] font-black uppercase tracking-[0.7em] select-none italic underline decoration-amber-500/5 underline-offset-10 italic font-black uppercase font-mono shadow-sm italic">
                     <ClipboardCheck className="w-5 h-5 shadow-sm italic" />
                     Label Rasterized
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Design Signature Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-28 opacity-40 hover:opacity-100 transition-all font-black uppercase italic tracking-[0.2em] decoration-amber-500/10 underline underline-offset-[12px] font-mono shadow-sm italic transition-all duration-1000">
         <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed mb-8 shadow-sm">
            Text is the voice of your data. Anchor your notes, highlight your peaks, and guide your audience through the narrative of the chart.
         </p>
         <div className="h-0.5 w-40 bg-amber-500/10 mx-auto transition-all hover:w-[40rem] duration-1000 shadow-2xl shadow-sm"></div>
      </footer>

    </div>
  );
}

export default MplText;
