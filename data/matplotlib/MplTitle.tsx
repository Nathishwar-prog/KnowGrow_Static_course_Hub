import React, { useState } from 'react';
import { 
  Heading1, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  Activity, Layers, List, Check, Eye, 
  ShieldCheck, TrendingUp, MonitorPlay, 
  MousePointer2, Box, Maximize, Clock, 
  Target, Presentation, Sparkles, MoveRight, 
  AlignLeft, AlignCenter, AlignRight, Palette, 
  Layout, ClipboardCheck, HelpCircle,
  ArrowRight
} from 'lucide-react';

function MplTitle() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'styling' | 'position' | 'padding' | 'traffic'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_title':
        outLines = [
          'Initializing series plotting: [10, 20, 25, 30]',
          'plt.title("Sales Growth") called.',
          'Injecting text heading above axis frame...',
          'Success: Chart identified as "Sales Growth".'
        ];
        break;
      case 'styled_title':
        outLines = [
          'Applying Color: "blue"',
          'Applying Fontsize: 16',
          'Applying FontWeight: "bold"',
          'plt.title("Styled Chart Title", color="blue", fontsize=16)',
          'Success: Premium heading rasterized with custom aesthetics.'
        ];
        break;
      case 'position_align':
        outLines = [
          'Detecting loc parameter...',
          'Position set to: "left"',
          'Shifting title baseline to vertical axis align...',
          'Success: Side-aligned heading applied.'
        ];
        break;
      case 'padding_logic':
        outLines = [
          'plt.title("Chart with Padding", pad=20) called.',
          'Increasing vertical offset by 20 points...',
          'Expanding safety margin between title and dataset...',
          'Success: Layout breathing room calibrated.'
        ];
        break;
      case 'traffic_case':
        outLines = [
          'Loading Weekly Website Visitors dataset...',
          'X-Axis: Days (Mon-Fri)',
          'Y-Axis: Visitor Count',
          'Injecting Main Title: "Weekly Website Visitors"',
          'Success: Professional analytics report titled and labeled.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Scanning for Study Hours metrics...',
          'Checking: plt.title("Daily Study Hours")... OK.',
          'Verifying X/Y Labels... FOUND.',
          'Checking marker="o" usage... YES.',
          'Performance: 100/100. Student project titled perfectly!'
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
        <div className="absolute top-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-5 bg-violet-100 dark:bg-violet-900/30 rounded-[2.5rem] mb-10 shadow-sm border border-violet-200 dark:border-violet-800/50 hover:scale-110 transition-transform cursor-pointer group">
          <Heading1 className="w-14 h-14 text-violet-600 dark:text-violet-400 group-hover:rotate-6 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-full text-[10px] font-black mb-6 border border-violet-500/20 tracking-[0.4em] uppercase shadow-lg backdrop-blur-md italic">
          Visualization Branding Module
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic uppercase underline decoration-violet-500/20 underline-offset-[16px]">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500">Titles</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold italic">
          "Give your data a name. A Title in Matplotlib describes what the chart represents and helps users quickly understand the purpose of your visualization."
        </p>
      </header>

      {/* 2. Conceptual Foundation Overview */}
      <section className="max-w-6xl mx-auto mb-20 px-4 italic font-black">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between transition-all hover:shadow-2xl font-black">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="p-3 bg-violet-500 rounded-2xl shadow-lg shadow-violet-500/20 mr-6 group-hover:rotate-6 transition-transform">
                  <Info className="w-6 h-6 text-white italic shadow-2xl" />
                </div>
                <h2 className="text-3xl font-black tracking-tight italic uppercase tracking-tighter decoration-violet-500/10 underline underline-offset-8 font-black">Identity Layer</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-violet-500 pl-8 transition-colors group-hover:text-slate-900 dark:group-hover:text-white underline decoration-violet-500/5 underline-offset-8 font-black">
                "A Matplotlib title is a descriptive text heading placed above the chart to explain the visualization's purpose and context."
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { l: "Top-Side Heading", i: Target },
                   { l: "Visual Context", i: Presentation }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-5 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800/50 hover:bg-violet-500/5 transition-all">
                      <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center mr-5">
                         <mod.i className="w-4 h-4 text-violet-500" />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-black italic">{mod.l}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-700 via-purple-800 to-indigo-950 p-10 rounded-[4rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group font-black italic shadow-2xl">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white font-black italic uppercase italic shadow-sm italic">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter underline decoration-white/20 underline-offset-8 font-black">
                 <ShieldCheck className="w-8 h-8 mr-5" />
                 2️⃣ Title Logistics
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 leading-tight">
                 {[
                   { t: "Quick Understanding", d: "Explains purpose instantly.", i: Zap },
                   { t: "Improved Clarity", d: "Makes dashboards clearer.", i: Eye },
                   { t: "Insight Comm", d: "Helps share discoveries.", i: Presentation },
                   { t: "Reader Focus", d: "Guides viewer correctly.", i: Target }
                 ].map((mod, i) => (
                   <div key={i} className="flex flex-col p-6 bg-white/10 rounded-[3rem] border border-white/5 hover:bg-white/20 transition-all cursor-crosshair group/item relative overflow-hidden font-black">
                      <mod.i className="w-8 h-8 mb-4 text-violet-200 group-hover/item:scale-110 transition-transform font-bold italic shadow-2xl shadow-sm" />
                      <div>
                         <h5 className="font-black text-xs tracking-widest tracking-tighter mb-1 uppercase font-black">{mod.t}</h5>
                         <p className="text-[9px] text-white/40 font-bold decoration-white/5 underline underline-offset-4 font-black">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-6 bg-white/5 rounded-[2.5rem] border border-white/10 flex items-center shadow-2xl backdrop-blur-md">
                  <Sparkles className="w-6 h-6 text-violet-200 mr-5 animate-pulse font-black" />
                  <p className="text-xs font-black leading-relaxed opacity-80 decoration-violet-200/20 underline underline-offset-4 tracking-tighter uppercase italic shadow-sm font-black">
                    Clear titles transform data into professional reports.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Headline Studio */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4 italic font-black">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-10">
           <div className="flex items-center translate-x-4">
             <div className="p-4 bg-violet-100 dark:bg-violet-900/40 rounded-[3rem] mr-8 shadow-2xl border border-violet-200 dark:border-violet-800 transition-all hover:rotate-6 font-black shadow-2xl">
               <Terminal className="w-10 h-10 text-violet-600 dark:text-violet-400 font-bold italic shadow-2xl" />
             </div>
             <div>
               <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight underline decoration-violet-500/10 underline-offset-10 italic uppercase tracking-tighter font-black underline shadow-sm italic">Headline Studio</h2>
               <p className="text-xs text-slate-500 font-black uppercase tracking-[0.5em] mt-3 italic underline decoration-violet-500/10 underline-offset-4 opacity-70">plt.title() Parameter Engine</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-2 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar font-black shadow-2xl font-black">
            {[
              { id: 'basics', label: 'Basic Title', icon: Code },
              { id: 'styling', label: 'Title Styling', icon: Palette },
              { id: 'position', label: 'Positioning', icon: AlignCenter },
              { id: 'padding', label: 'Layout Padding', icon: Box },
              { id: 'traffic', label: 'Traffic Insight', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-8 py-5 rounded-[4rem] text-[11px] font-black tracking-widest uppercase transition-all whitespace-nowrap italic ${
                  activeTab === tab.id 
                    ? 'bg-violet-600 text-white shadow-xl shadow-violet-900/40 scale-105 font-black' 
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
              <div className="absolute top-0 right-0 p-10 opacity-[0.04] rotate-12 -z-0 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl"><Heading1 className="w-[30rem] h-[30rem] text-violet-500 shadow-2xl" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col relative z-10 italic font-black">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-violet-600 tracking-tighter uppercase italic underline decoration-violet-500/20 underline-offset-8 font-black">
                    <Code className="w-10 h-10 mr-6 text-violet-500 font-bold italic shadow-2xl" />
                    3️⃣ & 4️⃣ Headline Basics
                  </h3>
                  <div className="space-y-12 flex-1 flex flex-col justify-center italic font-black">
                    <div className="p-8 bg-violet-500/5 rounded-[3rem] border border-violet-500/10 italic font-black shadow-sm">
                       <span className="block text-[10px] text-violet-600 uppercase tracking-[0.4em] mb-4 shadow-sm">The Fundamental Command</span>
                       <code className="text-2xl font-mono text-slate-700 dark:text-slate-300 tracking-tighter font-black shadow-sm">plt.<span className="text-violet-500 font-black">title</span>("Your Title")</code>
                    </div>

                    <div className="bg-slate-950 p-12 rounded-[5rem] border border-violet-500/20 shadow-2xl relative group/code overflow-hidden font-black shadow-2xl">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/code:scale-110 transition-all font-mono italic shadow-2xl font-black"><Target className="w-40 h-40 text-violet-500 shadow-2xl" /></div>
                        <pre className="font-mono text-sm leading-8 text-slate-300 relative z-10 italic font-black">
                           plt.plot(x, y)<br/><br/>
                           plt.<span className="text-violet-500 underline decoration-violet-500/30 underline-offset-8">title</span>("Sales Growth")<br/><br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_title')} className="absolute bottom-12 right-12 p-8 bg-violet-600 text-white rounded-[2.5rem] shadow-2xl hover:bg-violet-500 transition-all active:scale-90 group-hover/code:ring-8 ring-violet-500/10 font-black shadow-2xl">
                           <Play className="w-8 h-8 fill-current font-black" />
                        </button>
                    </div>
                    
                    <div className="p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-[3.5rem] shadow-sm italic flex items-center font-black">
                       <ArrowRight className="w-8 h-8 text-violet-500 mr-8 shrink-0 font-black italic shadow-2xl" />
                       <p className="text-slate-500 font-black uppercase tracking-widest leading-relaxed shadow-sm">
                         Result: The text <span className="text-violet-600 font-black shadow-sm">"Sales Growth"</span> appears centered above the coordinate frame.
                       </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Title Styling */}
              {activeTab === 'styling' && ( 
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center italic font-black">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-blue-500 uppercase tracking-tighter italic font-black underline decoration-blue-500/10 underline-offset-8">
                    <Palette className="w-10 h-10 mr-6 text-blue-500 font-bold italic" />
                    5️⃣ Aesthetic Customization
                  </h3>
                  <div className="grid grid-cols-2 gap-8 font-black italic shadow-sm">
                     <div className="p-10 bg-blue-500/5 rounded-[4rem] border border-blue-500/10 hover:bg-blue-500/10 transition-all group/p italic font-black">
                        <span className="block text-[10px] text-blue-600 tracking-[0.4em] uppercase mb-6 shadow-sm">Parameter: fontsize</span>
                        <code className="text-2xl text-blue-500 group-hover:scale-110 transition-transform inline-block font-black shadow-sm italic font-black">16</code>
                     </div>
                     <div className="p-10 bg-blue-500/5 rounded-[4rem] border border-blue-500/10 hover:bg-blue-500/10 transition-all group/s italic font-black">
                        <span className="block text-[10px] text-blue-600 tracking-[0.4em] uppercase mb-6 shadow-sm">Parameter: color</span>
                        <code className="text-2xl text-blue-500 group-hover:scale-110 transition-transform inline-block font-black shadow-sm italic font-black">"blue"</code>
                     </div>
                  </div>
                  <div className="bg-slate-950 p-12 rounded-[5rem] border border-blue-500/20 shadow-2xl relative overflow-hidden group/code italic font-black shadow-2xl">
                     <pre className="font-mono text-xs sm:text-sm leading-10 text-slate-300 relative z-10 italic font-black uppercase tracking-tighter shadow-sm font-black">
                        plt.<span className="text-blue-500">title</span>("Styled Title", <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400 font-black">fontsize</span>=16, <span className="text-blue-400 font-black">color</span>="blue", <span className="text-blue-400 font-black">fontweight</span>="bold")
                     </pre>
                  </div>
                  <button onClick={() => runDemo('styled_title')} className="w-full py-8 bg-blue-600 text-white font-black rounded-[4rem] shadow-2xl hover:bg-blue-500 transition-all text-xs tracking-[0.5em] italic uppercase mt-6 transform hover:scale-[1.02] active:scale-95 font-black uppercase shadow-2xl shadow-sm">Apply Theme Design</button>
                </div>
              )}

              {/* Tab: Positioning */}
              {activeTab === 'position' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center italic font-black">
                  <h3 className="text-3xl font-black flex items-center mb-10 pb-6 border-b border-slate-50 dark:border-slate-800 text-indigo-500 uppercase tracking-tighter italic font-black underline decoration-indigo-500/20 underline-offset-8">
                    <AlignCenter className="w-10 h-10 mr-6 text-indigo-500 font-bold italic" />
                    6️⃣ Alignment Control (loc)
                  </h3>
                  <div className="grid grid-cols-3 gap-6 font-black italic shadow-sm">
                     {[
                       { label: 'left', icon: AlignLeft },
                       { label: 'center', icon: AlignCenter },
                       { label: 'right', icon: AlignRight }
                     ].map(pos => (
                       <div key={pos.label} className="p-8 bg-indigo-500/5 rounded-[3rem] border border-indigo-500/10 flex flex-col items-center hover:bg-indigo-500/20 transition-all font-black shadow-sm">
                          <pos.icon className="w-8 h-8 text-indigo-500 mb-6 font-black italic shadow-2xl font-black" />
                          <span className="text-[10px] text-indigo-600 font-black uppercase tracking-widest underline underline-offset-4 decoration-indigo-500/10 shadow-sm italic font-black lowercase shadow-sm">{pos.label}</span>
                       </div>
                     ))}
                  </div>
                  <div className="bg-slate-950 p-12 rounded-[5rem] border border-indigo-500/20 shadow-2xl relative overflow-hidden font-mono text-[11px] italic font-black shadow-2xl">
                     <pre className="text-indigo-400 tracking-tighter italic font-black uppercase shadow-sm">
                        plt.<span className="text-white font-black">title</span>("Aligned Title", <span className="text-indigo-200">loc="left"</span>)
                     </pre>
                  </div>
                  <button onClick={() => runDemo('position_align')} className="w-full py-8 bg-indigo-700 text-white font-black rounded-[4rem] shadow-2xl hover:bg-indigo-600 transition-all text-[11px] tracking-widest uppercase mt-4 italic border-b-4 border-indigo-900/50 font-black shadow-2xl">Shift Heading Focus</button>
                </div>
              )}

              {/* Tab: Padding */}
              {activeTab === 'padding' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-12 relative z-10 flex flex-col justify-center italic font-black">
                  <h3 className="text-3xl font-black flex items-center mb-8 pb-6 border-b border-slate-50 dark:border-slate-800 text-violet-500 uppercase tracking-tighter italic font-black underline decoration-violet-500/20 underline-offset-8">
                    <Box className="w-10 h-10 mr-6 text-violet-500 font-bold italic shadow-2xl" />
                    7️⃣ Spatial Padding (pad)
                  </h3>
                  <div className="p-12 bg-violet-500/10 rounded-[5rem] border border-violet-500/20 italic font-black shadow-sm">
                     <div className="flex justify-center mb-12">
                        <div className="w-full h-1 bg-violet-500/20 rounded-full relative font-black shadow-sm">
                           <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 px-8 py-3 bg-violet-600 text-white text-[9px] font-black rounded-full italic tracking-widest uppercase shadow-2xl shadow-sm">PAD=20</div>
                        </div>
                     </div>
                     <p className="text-sm font-bold text-slate-500 mb-10 leading-relaxed italic pr-12 text-slate-400 font-black lowercase underline decoration-violet-500/5 underline-offset-8 italic shadow-sm">
                        "Increase spacing between the title text and the chart border to prevent layout crowding and improve readability."
                     </p>
                     <div className="bg-slate-950 p-10 rounded-[3.5rem] border border-violet-500/20 font-mono italic font-black shadow-2xl shadow-sm">
                         <pre className="text-violet-400 text-xs">plt.title("Padded Heading", <span className="text-white font-black">pad</span>=20)</pre>
                     </div>
                  </div>
                  <button onClick={() => runDemo('padding_logic')} className="w-full py-8 bg-violet-800 text-white font-black rounded-[4rem] shadow-2xl hover:bg-violet-700 transition-all text-[11px] tracking-widest uppercase italic font-black shadow-2xl">Calibrate Spatial Grid</button>
                </div>
              )}

              {/* Tab: Traffic Case */}
              {activeTab === 'traffic' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col justify-center space-y-12 relative z-10 italic uppercase font-black font-black italic shadow-2xl">
                  <h3 className="text-3xl font-black flex items-center mb-6 text-violet-600 tracking-tighter border-b dark:border-slate-800 pb-6 uppercase italic underline decoration-violet-500/10 underline-offset-8 font-black">
                    <TrendingUp className="w-10 h-10 mr-6 text-violet-500 font-bold italic shadow-2xl" />
                    8️⃣ Website Traffic Hub Case Study
                  </h3>
                  <div className="bg-violet-500/5 p-14 rounded-[5.5rem] border border-violet-500/20 flex flex-col items-center justify-center relative overflow-hidden group/case italic font-black shadow-sm">
                     <div className="absolute top-0 right-0 p-14 opacity-[0.05] grayscale-0 group-hover/case:rotate-12 transition-transform duration-1000 font-black shadow-2xl italic"><MonitorPlay className="w-48 h-48 text-violet-400 font-bold italic shadow-2xl" /></div>
                     <div className="text-4xl font-black text-violet-600 mb-8 italic underline decoration-violet-500/20 underline-offset-8 tracking-tighter uppercase font-black italic shadow-sm italic shadow-2xl">Weekly Traffic Flow</div>
                     <p className="text-sm font-bold text-slate-500 text-center leading-relaxed italic max-w-sm lowercase opacity-70 underline decoration-violet-500/5 underline-offset-6 font-black shadow-sm">
                        "A professional chart must include a clear Title, X-Axis Label, and Y-Axis Label to communicate insights effectively to the audience."
                     </p>
                  </div>
                  <button onClick={() => runDemo('traffic_case')} className="w-full py-8 bg-black text-white dark:bg-white dark:text-black font-black rounded-[4.5rem] shadow-2xl hover:bg-slate-900 transition-all text-[11px] tracking-[0.5em] italic uppercase ring-offset-4 active:ring-[10px] ring-violet-500/10 font-black shadow-2xl shadow-sm">Initialize Insight Presentation</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10 font-mono italic font-black font-black italic shadow-2xl shadow-sm">
            
            {/* Title Engine Terminal */}
            <div className="bg-[#0b0c10] rounded-[5rem] p-12 border border-slate-800 flex-1 min-h-[560px] shadow-2xl relative overflow-hidden group/terminal flex flex-col italic font-black shadow-2xl shadow-sm">
               <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px] group-hover/terminal:bg-violet-500/10 transition-all duration-1000 font-black shadow-2xl shadow-sm"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1 italic font-black shadow-2xl shadow-sm">
                  <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-10 px-6 transition-all font-black">
                    <div className="flex items-center">
                      <Terminal className="w-8 h-8 mr-6 text-violet-500/70 animate-pulse font-bold italic shadow-2xl font-black" />
                      <h3 className="font-black text-slate-700 uppercase text-[10px] tracking-[0.6em] font-mono font-black italic shadow-sm shadow-sm">
                         TITLE_ENGINE_v3
                      </h3>
                    </div>
                    <div className="flex space-x-3">
                       <div className="w-4 h-4 rounded-full bg-violet-950 shadow-inner shadow-sm"></div>
                       <div className="w-4 h-4 rounded-full bg-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.5)] shadow-sm"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[420px] custom-scrollbar px-6 space-y-8 leading-loose uppercase italic tracking-tighter font-black shadow-2xl shadow-sm italic">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-14 opacity-20 select-none filter hover:brightness-150 transition-all duration-700 grayscale hover:grayscale-0 font-black italic shadow-2xl shadow-sm shadow-sm">
                        <MonitorPlay className="w-28 h-28 stroke-[1px] animate-pulse duration-[6000ms] font-black shadow-sm" />
                        <div className="text-center font-black lg:text-left">
                           <span className="block text-[9px] uppercase tracking-[0.8em] font-black text-violet-600 mb-4 underline decoration-violet-500/30 underline-offset-10 italic shadow-sm">Engine Standby...</span>
                           <span className="text-[11px] font-black text-white/40 tracking-widest decoration-white/5 underline underline-offset-4 font-black shadow-sm italic shadow-sm">Topic Labeling Logic Required</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-6 font-black italic shadow-2xl shadow-sm">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-8 duration-700 flex items-start group/line font-black italic shadow-2xl">
                              <span className="text-violet-500/30 mr-6 font-black select-none text-[8px] mt-1 shrink-0 uppercase tracking-widest decoration-violet-500/10 underline italic font-mono tracking-tighter lowercase shadow-sm">plt::title</span>
                              <span className={`leading-relaxed font-black transition-colors ${
                                line.includes('Success') || line.includes('Performance') ? 'text-violet-400 font-extrabold tracking-tight underline decoration-violet-500/10 underline-offset-6 font-mono uppercase italic shadow-sm' :
                                line.includes('Loading') || line.includes('Scanning') || line.includes('Initializing') ? 'text-purple-400 italic lowercase shadow-sm shadow-sm' :
                                line.includes('Applying') || line.includes('Injecting') || line.includes('Increasing') || line.includes('Detecting') ? 'text-violet-500 uppercase italic shadow-sm shadow-sm font-black' :
                                line.includes('Result') ? 'text-violet-500 font-black tracking-widest uppercase border-b border-violet-500/20 italic shadow-sm shadow-sm' :
                                'text-slate-600 italic uppercase text-[9px] tracking-tight decoration-slate-900 underline underline-offset-4 shadow-sm shadow-sm'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-16 flex justify-between items-center border-t border-white/5 mt-14 italic uppercase font-black font-black italic shadow-2xl shadow-sm shadow-sm">
                           <div className="flex items-center gap-5 italic font-black shadow-2xl shadow-sm shadow-sm">
                              <span className="w-3.5 h-3.5 rounded-full bg-violet-500 animate-pulse shadow-[0_0_20px_rgba(139,92,246,0.7)] font-black shadow-sm"></span>
                              <span className="text-[10px] text-slate-800 font-black tracking-[0.5em] decoration-violet-500/10 underline italic font-mono lowercase font-black shadow-sm shadow-sm shadow-sm">header_label_Rastered</span>
                           </div>
                           <button onClick={resetConsole} className="text-[10px] text-violet-500/70 hover:text-violet-400 font-black tracking-[0.4em] font-mono transition-colors border-b-2 border-violet-500/10 uppercase italic font-black shadow-sm shadow-sm">Reset IO</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Course Evolution Roadmap Architecture */}
            <div className="bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-900 p-12 rounded-[5.5rem] border border-white/10 shadow-2xl relative overflow-hidden group font-black italic shadow-2xl transition-all shadow-sm shadow-sm">
               <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-violet-400/10 rounded-full blur-[120px] font-black shadow-sm shadow-sm"></div>
               <h4 className="text-white font-black text-[11px] mb-12 flex items-center uppercase tracking-[0.6em] opacity-80 underline decoration-violet-500 underline-offset-10 italic tracking-tighter lowercase font-mono font-black italic shadow-2xl shadow-sm">
                 <List className="w-6 h-6 text-violet-400 mr-5 transition-transform group-hover:rotate-180 duration-1000 italic font-black shadow-2xl shadow-sm" />
                 Specialist roadmap
               </h4>
               <div className="space-y-6 px-4 relative z-10 italic uppercase font-black tracking-tighter font-black shadow-2xl shadow-sm shadow-sm">
                  {[
                    "Matplotlib Labels", "Matplotlib Title", "Matplotlib Legends", "Matplotlib Annotations", "Advanced Storytelling"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300 font-black italic shadow-2xl shadow-sm shadow-sm">
                       <div className={`w-14 h-12 rounded-2xl flex items-center justify-center mr-8 transition-all duration-700 hover:scale-110 shadow-2xl font-black italic ${i === 1 ? 'bg-violet-600 shadow-violet-500/50 rotate-12 font-black' : 'bg-white/5 border border-white/10 opacity-30 select-none grayscale shadow-sm'}`}>
                          <span className={`text-[12px] font-black italic ${i === 1 ? 'text-white shadow-sm' : 'text-slate-600 shadow-sm'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-black tracking-widest transition-colors uppercase italic ${i === 1 ? 'text-violet-400 underline decoration-violet-500/30 underline-offset-10 shadow-sm' : 'text-slate-800 shadow-sm'}`}>{path}</span>
                       {i === 1 && <Sparkles className="w-5 h-5 ml-auto text-violet-400 animate-pulse font-black italic shadow-2xl shadow-sm shadow-sm" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Title Advice */}
      <section className="max-w-6xl mx-auto mb-24 px-4 overflow-hidden italic font-black">
        <div className="bg-white dark:bg-slate-900 p-16 sm:p-28 rounded-[7rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group font-black italic shadow-2xl shadow-sm shadow-sm">
          <div className="absolute bottom-0 left-0 p-24 opacity-[0.04] scale-150 rotate-12 -z-0 pointer-events-none grayscale-0 group-hover:-rotate-12 transition-transform duration-[4000ms] transition-all font-black shadow-2xl shadow-sm"><Heading1 className="w-[40rem] h-[40rem] text-violet-500 font-black shadow-2xl shadow-sm shadow-sm" /></div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-28 gap-12 relative z-10 tracking-tighter decoration-violet-500/20 underline underline-offset-[20px] italic font-black uppercase italic underline shadow-sm shadow-sm">
             <div className="flex items-center font-black italic uppercase italic shadow-sm">
                <div className="p-6 bg-violet-100 dark:bg-violet-900/40 rounded-[3.5rem] mr-12 shadow-2xl transition-transform hover:rotate-6 font-black italic shadow-2xl">
                   <Lightbulb className="w-14 h-14 text-violet-600 dark:text-violet-400 font-bold italic shadow-2xl font-black shadow-sm shadow-sm" />
                </div>
                <div>
                   <h2 className="text-5xl text-slate-900 dark:text-white mb-3 uppercase tracking-tighter italic font-black underline decoration-violet-500/5 shadow-sm shadow-sm">
                      Branding Logic Grid
                   </h2>
                   <p className="text-xl text-slate-500 dark:text-slate-400 font-bold tracking-tight lowercase italic border-l-4 border-violet-500/20 pl-8 font-black underline decoration-violet-500/5 shadow-sm">Heading Matrix expert advice.</p>
                </div>
             </div>
             <div className="h-0.5 w-48 bg-violet-500/20 hidden md:block italic tracking-widest font-black uppercase italic underline decoration-violet-500/5 underline-offset-4 shadow-sm shadow-sm">--- TITLE_MOD ---</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10 font-black italic shadow-2xl shadow-sm shadow-sm">
             {[
               { t: "The Minimalist Rule", d: "Keep titles short and clear. Good: 'Monthly Sales'. Bad: 'Sales Data Collected From January to April in Retail Store'. Breathability is key.", i: ShieldCheck, c: "text-violet-600 shadow-sm" },
               { t: "Deep Description", d: "Avoid generic titles like 'Chart'. Use descriptive labels like 'Daily Website Traffic' to communicate specific context.", i: Target, c: "text-purple-600 shadow-sm" },
               { t: "Triadic Consistency", d: "Professional charts always include the Triple Threat: A main Title, an X-axis label, and a Y-axis label in a unified format.", i: Layout, c: "text-indigo-600 shadow-sm" },
               { t: "Dashboard Standards", d: "Maintain consistent font size, color, and padding across all chart titles in a report to ensure design harmony.", i: CheckCircle2, c: "text-violet-500 shadow-sm" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip transition-all hover:translate-x-4 duration-500 cursor-help font-black italic shadow-2xl shadow-sm shadow-sm">
                 <div className={`p-8 bg-slate-50 dark:bg-slate-800 rounded-[3.5rem] mr-12 shadow-sm group-hover/tip:bg-violet-500/10 transition-all duration-1000 ${tip.c} bg-opacity-20 shrink-0 font-black italic shadow-2xl shadow-sm shadow-sm`}>
                    <tip.i className="w-12 h-12 group-hover/tip:rotate-12 group-hover/tip:scale-125 transition-transform font-bold italic shadow-2xl font-black shadow-sm" />
                 </div>
                 <div className="pt-2 italic font-black shadow-sm shadow-sm">
                    <h4 className="font-black text-slate-900 dark:text-white mb-6 group-hover/tip:text-violet-600 transition-colors uppercase tracking-[0.5em] text-[11px] underline decoration-violet-500/10 italic font-black shadow-sm shadow-sm">⭐ TITLE TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-black italic tracking-tighter opacity-80 lowercase decoration-violet-500/5 underline underline-offset-8 decoration-dashed font-black shadow-sm">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Production Sample Showcase */}
      <section className="max-w-6xl mx-auto mb-20 px-4 font-black italic shadow-2xl transition-all shadow-sm">
         <div className="bg-violet-600/5 rounded-[6rem] p-16 sm:p-24 border border-violet-500/10 relative group overflow-hidden italic shadow-2xl backdrop-blur-3xl font-black transition-all shadow-sm">
            <div className="absolute top-0 right-0 p-14 opacity-[0.06] grayscale hover:grayscale-0 transition-all duration-[2000ms] font-black shadow-2xl shadow-sm"><MoveRight className="w-[35rem] h-[35rem] text-violet-500 font-bold italic shadow-2xl shadow-sm shadow-sm" /></div>
            <div className="relative z-10 flex flex-col xl:flex-row items-center gap-20 italic font-black shadow-2xl shadow-sm shadow-sm">
               <div className="flex-1 text-center xl:text-left font-black italic shadow-2xl shadow-sm shadow-sm">
                  <h3 className="text-5xl font-black text-violet-600 mb-10 tracking-tighter uppercase italic underline decoration-violet-500/10 underline-offset-[16px] font-black shadow-sm shadow-sm shadow-sm italic">8️⃣ Informed Analytics Asset</h3>
                  <p className="text-xl font-black text-slate-500 dark:text-slate-400 mb-14 leading-relaxed italic opacity-80 lowercase decoration-violet-500/5 underline underline-offset-10 font-black shadow-sm shadow-sm shadow-sm">
                     "Leveraging plt.title() in conjunction with axis labels to build a completely understandable and professional Weekly Website Visitors chart."
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10 font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm font-black">
                     {[
                       { v: "Title: Weekly Traffic", c: "bg-violet-500/10 shadow-sm shadow-sm shadow-sm" },
                       { v: "Markers: Points of Int", c: "bg-indigo-600/20 shadow-sm shadow-sm shadow-sm" }
                     ].map(v => (
                       <div key={v.v} className={`${v.c} px-10 py-6 rounded-[3rem] text-[11px] font-black text-violet-600 uppercase tracking-widest text-center italic border border-violet-500/10 shadow-xl font-black shadow-sm shadow-sm`}>{v.v}</div>
                     ))}
                  </div>
                  <button onClick={() => runDemo('traffic_case')} className="w-full py-8 bg-violet-600 text-white font-black rounded-[4rem] shadow-2xl hover:bg-violet-500 focus:ring-[12px] ring-violet-500/20 flex items-center justify-center gap-6 transition-all italic text-[12px] tracking-widest uppercase border-b-6 border-violet-900/50 active:translate-y-2 font-black shadow-2xl shadow-sm shadow-sm shadow-sm">
                     <Presentation className="w-6 h-6 fill-current font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm" /> DEPLOY COMPLETE CHART LOGIC
                  </button>
               </div>
               <div className="w-full xl:w-[28rem] bg-slate-950 p-14 rounded-[7rem] border border-violet-500/30 shadow-2xl group/ex transform hover:-rotate-1 transition-transform font-black shadow-2xl shadow-sm italic shadow-sm shadow-sm">
                  <div className="flex items-center justify-center h-56 relative overflow-hidden mb-10 bg-violet-500/5 rounded-[4rem] border border-violet-500/10 shadow-inner font-black shadow-2xl shadow-sm shadow-sm">
                     <Heading1 className="w-32 h-32 text-violet-500/20 group-hover/ex:scale-150 transition-transform duration-[4000ms] font-black shadow-2xl shadow-sm shadow-sm shadow-sm" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-violet-500/10 tracking-[2em] uppercase select-none cursor-not-allowed font-black shadow-sm italic shadow-2xl shadow-sm shadow-sm">RASTER_HEADER_OK</div>
                  </div>
                  <div className="h-0.5 w-full bg-violet-500/20 mb-10 px-6 font-black italic shadow-2xl shadow-sm shadow-sm"></div>
                  <div className="flex flex-col gap-6 font-mono opacity-60 italic text-[10px] font-black shadow-2xl shadow-sm shadow-sm shadow-sm">
                    <div className="flex justify-between font-black tracking-widest uppercase shadow-sm shadow-sm"><span>Engine::Branding</span> <span className="text-violet-500 underline decoration-violet-500/20 underline-offset-8 tracking-widest uppercase font-black uppercase tracking-tighter shadow-sm shadow-sm italic shadow-sm">Title_Applied</span></div>
                    <div className="flex justify-between font-black tracking-widest uppercase shadow-sm shadow-sm"><span>Engine::Baseline</span> <span className="text-violet-500 underline decoration-violet-500/20 underline-offset-8 tracking-widest uppercase font-black uppercase tracking-tighter shadow-sm shadow-sm italic shadow-sm">Center_Align</span></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Practice Design Mission */}
      <section className="max-w-4xl mx-auto pb-28 px-6 md:px-0 font-black italic shadow-2xl transition-all shadow-sm shadow-sm">
        <div className="bg-gradient-to-br from-violet-700 via-purple-800 to-indigo-950 p-16 sm:p-28 rounded-[8.5rem] shadow-2xl relative overflow-hidden group border-b-[12px] border-violet-900/40 transform hover:scale-[1.01] transition-all italic font-black shadow-2xl shadow-sm shadow-sm text-white shadow-2xl">
          <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[140px] -z-0 pointer-events-none group-hover:scale-125 transition-transform duration-[5000ms] font-black shadow-2xl shadow-sm shadow-sm shadow-sm"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-24 items-center italic font-black text-white italic font-black shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
            <div className="flex-1 text-center xl:text-left font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
              <div className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-full text-[11px] font-black mb-14 border border-white/20 tracking-[0.5em] uppercase shadow-2xl backdrop-blur-2xl italic tracking-tighter decoration-white/20 underline underline-offset-10 italic font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                🎯 Title Design Mission
              </div>
              <h2 className="text-6xl font-black text-white mb-12 leading-[1.0] tracking-tighter uppercase italic decoration-white/10 underline underline-offset-[16px] font-black shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                Study Journal
              </h2>
              <p className="text-violet-100 text-lg mb-16 leading-relaxed font-black pr-8 opacity-90 italic border-l-6 border-violet-400 pl-10 lowercase tracking-widest decoration-white/10 underline underline-offset-10 font-black shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                Name the flow! Create a chart showing <b>Daily Study Hours</b> (Mon-Fri). Use <b>plt.title("Daily Study Hours")</b> and ensure you include <b>plt.xlabel("Days")</b> and <b>plt.ylabel("Hours")</b> for a professional finish.
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-violet-950 hover:bg-slate-50 px-20 py-10 rounded-[5rem] text-[15px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-90 uppercase tracking-[0.4em] italic mx-auto xl:mx-0 border-b-8 border-violet-900/40 transform hover:translate-y-[-4px] shadow-2xl font-black italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm"
               >
                 <Play className="w-6 h-6 mr-6 fill-violet-950 group-hover/btn:rotate-180 transition-transform duration-700 font-black shadow-2xl shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" />
                 Initiate Title Raster
               </button>
            </div>

            <div className="w-full xl:w-[26rem] relative font-mono font-black shadow-2xl italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
               <div className="bg-[#0b0c10] rounded-[7rem] border border-white/10 p-20 relative shadow-2xl overflow-hidden group-hover:rotate-3 transition-transform duration-1000 rotate-2 translate-z-10 bg-violet-500/5 font-black shadow-2xl italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                  <div className="flex justify-between items-center mb-16 px-6 opacity-40 font-black italic uppercase italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                    <div className="flex gap-4 font-black italic shadow-sm shadow-sm shadow-sm">
                       <div className="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.8)] animate-pulse font-black shadow-sm font-black shadow-sm"></div>
                       <div className="w-4 h-4 rounded-full bg-violet-500/40 font-black shadow-sm font-black shadow-sm shadow-sm"></div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.6em] italic decoration-white/10 underline underline-offset-8 tracking-widest uppercase italic font-black shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">TITLE_v1</span>
                  </div>

                  <div className="h-56 relative flex items-center justify-center p-12 bg-violet-500/5 rounded-[5rem] border border-violet-500/10 overflow-hidden font-black group/m font-black italic shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                     <Heading1 className="w-28 h-28 text-violet-600/30 group-hover/m:rotate-[360deg] transition-transform duration-[6000ms] font-black shadow-2xl shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[10px] font-black text-violet-500/10 tracking-[2.5em] uppercase cursor-help select-none font-bold font-black shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">HEADER_RASTERIZING...</div>
                  </div>
                  
                  <div className="mt-16 flex items-center justify-center gap-6 text-violet-500/10 text-[11px] font-black uppercase tracking-[0.7em] select-none italic underline decoration-violet-500/5 underline-offset-10 italic font-black uppercase font-mono shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
                     <ClipboardCheck className="w-5 h-5 shadow-sm italic shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm" />
                     Heading Rasterized
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Design Signature Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-28 opacity-40 hover:opacity-100 transition-all font-black uppercase italic tracking-[0.2em] decoration-violet-500/10 underline underline-offset-[12px] font-mono shadow-sm italic transition-all duration-1000 shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
         <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed mb-8 shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm">
            Titles are the brand of your visualization. Name your data, align your message, and build a consistent visual identity for your data reports.
         </p>
         <div className="h-0.5 w-40 bg-violet-500/10 mx-auto transition-all hover:w-[40rem] duration-1000 shadow-2xl shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm shadow-sm"></div>
      </footer>

    </div>
  );
}

export default MplTitle;
