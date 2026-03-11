import React, { useState } from 'react';
import { 
  Save, Info, Code, Terminal, 
  Play, Lightbulb, Zap, CheckCircle2, 
  FileDown, Image as ImageIcon, FileText, Share2,
  HardDrive, MonitorPlay, Sparkles, Activity,
  Layers, List, Clock, ShieldCheck, Target,
  Download, Filter, Maximize, MousePointer2,
  Presentation, Layout, ClipboardCheck, ArrowRightCircle
} from 'lucide-react';

function MplSavefig() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'formats' | 'resolution' | 'margins' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_save':
        outLines = [
          'Initializing Plot...',
          'Metadata: Simple Plot created.',
          'Executing: plt.savefig("myplot.png")',
          'Encoding Image: PNG format...',
          'File Written: 124KB to local directory.',
          'Success: Image "myplot.png" saved before plt.show().'
        ];
        break;
      case 'formats_demo':
        outLines = [
          'Generating export matrix...',
          'plt.savefig("chart.jpg") -> Compressed JPEG.',
          'plt.savefig("chart.pdf") -> Document PDF.',
          'plt.savefig("chart.svg") -> Scalable Vector Graphics.',
          'Success: 4 formats generated in filesystem buffer.'
        ];
        break;
      case 'dpi_demo':
        outLines = [
          'Setting dpi=300 (High Resolution)...',
          'Rasterizing canvas (300 dots per inch)...',
          'Sharpening edges and text labels...',
          'Success: Professional print-ready "chart.png" exported.'
        ];
        break;
      case 'margins_demo':
        outLines = [
          'Scanning for extra white space...',
          'Parameter: bbox_inches="tight" detected.',
          'Cropping padding to visible figure boundaries...',
          'Success: Figure saved with minimal margins for cleaner layout.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Loading Traffic Data: [120, 150, 170, 160, 180]',
          'Plotting with markers="o"...',
          'Saving: traffic_chart.png with resolution defaults.',
          'Success: Dashboard asset generated for monthly report.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Scanning for student variables: [days, minutes]',
          'Plotting Exercise Trends... OK.',
          'Checking: plt.savefig("exercise_chart.png") call... FOUND.',
          'Critical Check: Save occurs before plt.show()... YES.',
          'Performance: 100/100. Exercise log exported to image buffer!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Ultra-Slate Header with Save Motion */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-slate-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="inline-flex items-center justify-center p-5 bg-slate-200 dark:bg-slate-800 rounded-[2.5rem] mb-10 shadow-sm border border-slate-300 dark:border-slate-700 hover:scale-110 transition-transform cursor-pointer group">
          <Save className="w-14 h-14 text-slate-700 dark:text-slate-300 group-hover:rotate-12 transition-transform" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-slate-500/10 text-slate-600 dark:text-slate-400 rounded-full text-[10px] font-black mb-6 border border-slate-500/20 tracking-[0.4em] uppercase">
          Lesson 0.6: Export Dynamics
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter italic uppercase underline decoration-slate-500/20 underline-offset-[16px]">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-800 to-black dark:from-slate-300 dark:via-slate-100 dark:to-slate-400">Save Figure</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold italic">
          "Don't let your data stories die in the console. Export your visualizations into crisp, high-quality image files for the real world."
        </p>
      </header>

      {/* 2. Conceptual Foundation Section */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden flex flex-col justify-between transition-all hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-slate-800 dark:bg-slate-700 rounded-2xl shadow-lg shadow-slate-900/20 mr-5 hover:rotate-6 transition-transform">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black tracking-tight italic">What is plt.savefig()?</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-semibold italic border-l-4 border-slate-500 pl-8">
                "A powerful function used to export a plotted figure to various file formats like PNG, JPG, PDF, or SVG for external use."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50 flex flex-col items-center">
                    <ImageIcon className="w-8 h-8 text-slate-500 mb-3" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center italic">Raster Formats</span>
                 </div>
                 <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50 flex flex-col items-center">
                    <Layers className="w-8 h-8 text-slate-500 mb-3" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center italic">Vector Scaling</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black p-10 rounded-[3.5rem] shadow-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 text-white">
               <h3 className="text-2xl font-black mb-10 flex items-center tracking-tighter underline decoration-slate-500/30 underline-offset-8 uppercase">
                 <Share2 className="w-8 h-8 mr-4" />
                 Essential Use Cases
               </h3>
               <div className="space-y-4">
                 {[
                   { t: "Professional Reports", d: "Export charts for business and audit logic.", i: FileText },
                   { t: "Dynamic Presentations", d: "High-resolution graphs for large screens.", i: Presentation },
                   { t: "Web Dashboards", d: "Static or vector assets for app integration.", i: Layout },
                   { t: "Document Sharing", d: "PDF exports for academic and legal use.", i: FileDown }
                 ].map((mod, i) => (
                   <div key={i} className="flex items-center p-4 bg-white/10 rounded-3xl border border-white/10 hover:bg-white/20 transition-all cursor-crosshair">
                      <mod.i className="w-6 h-6 mr-5 text-slate-400 shrink-0" />
                      <div>
                         <h5 className="font-black text-sm tracking-tight italic">{mod.t}</h5>
                         <p className="text-[10px] text-slate-100/50 font-bold truncate">{mod.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Export Lab Section */}
      <section className="max-w-6xl mx-auto mb-20 px-2 lg:px-4">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-12 gap-8">
           <div className="flex items-center">
             <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] mr-6 shadow-sm border border-slate-200 dark:border-slate-700">
               <Terminal className="w-8 h-8 text-slate-700 dark:text-slate-300" />
             </div>
             <div>
               <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight underline decoration-slate-500/10 underline-offset-8 italic">Export Studio</h2>
               <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em] mt-2 italic">Format & Quality Control</p>
             </div>
           </div>

           <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basic Save', icon: Code },
              { id: 'formats', label: 'File Formats', icon: FileDown },
              { id: 'resolution', label: 'High Res (DPI)', icon: Maximize },
              { id: 'margins', label: 'Clean Margins', icon: Filter },
              { id: 'real_world', label: 'Traffic Report', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[3rem] text-xs font-black transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xl' 
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-3" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start font-black italic">
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-14 rounded-[4.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[600px] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 -z-0"><Save className="w-96 h-96 text-slate-500" /></div>
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col relative z-10">
                  <h3 className="text-2xl font-black flex items-center mb-10 pb-4 border-b border-slate-50 dark:border-slate-800 text-slate-700 dark:text-slate-300 tracking-tighter uppercase">
                    <Code className="w-7 h-7 mr-4 text-slate-500" />
                    3️⃣ & 4️⃣ Basic Export Flow
                  </h3>
                  <div className="space-y-10 flex-1 flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50">
                          <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 font-mono italic underline underline-offset-4">Parameter</span>
                          <code className="text-[11px] font-bold text-slate-600 dark:text-slate-300">"filename"</code>
                       </div>
                       <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50">
                          <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 font-mono italic underline underline-offset-4">Core Method</span>
                          <code className="text-[11px] font-bold text-slate-600 dark:text-slate-300">plt.savefig()</code>
                       </div>
                    </div>

                    <div className="bg-slate-950 p-12 rounded-[4rem] border border-slate-800 shadow-2xl relative group/code overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/code:scale-110 transition-transform"><HardDrive className="w-40 h-40 text-slate-500" /></div>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300 relative z-10">
                           plt.title("Simple Plot")<br/><br/>
                           <span className="text-slate-500 font-black italic decoration-slate-500/20 underline underline-offset-8">plt.savefig("myplot.png")</span><br/><br/>
                           plt.show()
                        </pre>
                        <button onClick={() => runDemo('basic_save')} className="absolute bottom-10 right-10 p-6 bg-slate-100 text-slate-900 rounded-[2rem] shadow-xl hover:bg-white transition-all active:scale-95 group-hover/code:ring-8 ring-white/10">
                           <Play className="w-7 h-7 fill-current" />
                        </button>
                    </div>
                    
                    <div className="flex items-center p-6 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-3xl">
                       <ShieldCheck className="w-8 h-8 text-slate-500 mr-5 shrink-0" />
                       <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest leading-loose">
                         Process: Create Plot -{'>'} Save Figure -{'>'} Display Chart.
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Formats */}
              {activeTab === 'formats' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-black flex items-center mb-6 pb-4 border-b border-slate-50 dark:border-slate-800 text-slate-700 dark:text-slate-300 uppercase italic">
                    <FileDown className="w-7 h-7 mr-4 text-slate-500" />
                    5️⃣ Diverse Export Formats
                  </h3>
                  <div className="grid grid-cols-2 gap-4 pb-4">
                     {[
                       { f: "PNG", d: "Web & Presentation", i: ImageIcon },
                       { f: "JPG", d: "General Images", i: ImageIcon },
                       { f: "PDF", d: "Documents/Reports", i: FileText },
                       { f: "SVG", d: "Scalable Vector", i: Share2 }
                     ].map((item, i) => (
                       <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800/50 group/item hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                          <item.i className="w-5 h-5 text-slate-500 mb-3 group-hover:scale-110 transition-transform" />
                          <h5 className="font-black text-xs text-slate-700 dark:text-slate-300">{item.f}</h5>
                          <p className="text-[9px] text-slate-500 uppercase tracking-tighter">{item.d}</p>
                       </div>
                     ))}
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
                     <pre className="font-mono text-xs text-slate-400 leading-loose">
                        plt.savefig("chart.pdf")<br/>
                        plt.savefig("chart.svg")
                     </pre>
                  </div>
                  <button onClick={() => runDemo('formats_demo')} className="w-full py-6 bg-slate-800 text-white font-black rounded-3xl shadow-xl hover:bg-slate-700 transition-all text-xs tracking-widest uppercase flex items-center justify-center">
                     <Layers className="w-5 h-5 mr-4" /> Synthesize format matrix
                  </button>
                </div>
              )}

              {/* Tab: Resolution */}
              {activeTab === 'resolution' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-black flex items-center mb-8 pb-4 border-b border-slate-50 dark:border-slate-800 text-slate-600 dark:text-slate-400 italic">
                    <Maximize className="w-7 h-7 mr-4 text-slate-400" />
                    6️⃣ Precision Output: DPI
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                     {[
                       { q: "Low", d: "72", c: "text-slate-400" },
                       { q: "Medium", d: "150", c: "text-slate-500" },
                       { q: "High", d: "300", c: "text-slate-800 dark:text-slate-200" }
                     ].map((val, i) => (
                       <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 text-center">
                          <span className={`block text-xl font-black mb-2 ${val.c}`}>{val.d}</span>
                          <span className="text-[9px] font-black uppercase text-slate-500">{val.q} Quality</span>
                       </div>
                     ))}
                  </div>
                  <div className="p-10 bg-slate-50 dark:bg-slate-800/50 rounded-[4rem] border border-slate-200 dark:border-slate-800 flex flex-col items-center">
                     <p className="text-xs font-black text-slate-500 mb-8 italic text-center underline decoration-slate-500/10 underline-offset-8">"High DPI ensures sharp and professional visuals for print & large displays."</p>
                     <code className="text-sm font-mono font-black text-slate-700 dark:text-slate-300 bg-slate-900 px-6 py-3 rounded-2xl border border-white/5">plt.savefig("myplot.png", dpi=300)</code>
                  </div>
                  <button onClick={() => runDemo('dpi_demo')} className="w-full py-6 bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-white font-black rounded-[3.5rem] shadow-xl hover:bg-slate-300 transition-all text-xs tracking-[0.4em] uppercase">Rasterize High-Res Data</button>
                </div>
              )}

              {/* Tab: Margins */}
              {activeTab === 'margins' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 space-y-10 relative z-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-black flex items-center mb-8 pb-4 border-b border-slate-50 dark:border-slate-800 text-slate-500 italic uppercase tracking-tighter">
                    <Filter className="w-7 h-7 mr-4" />
                    7️⃣ Eliminating White Space
                  </h3>
                  <div className="bg-slate-800 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group/tight">
                     <div className="absolute top-0 right-0 p-10 opacity-5 group-hover/tight:scale-110 transition-transform"><Maximize className="w-40 h-40" /></div>
                     <p className="text-sm font-black mb-10 leading-relaxed italic pr-12 text-slate-300">
                        "Remove extra margins and ensure the saved image fits the data perfectly."
                     </p>
                     <div className="bg-black/40 p-10 rounded-[2.5rem] border border-white/10 mb-2">
                        <pre className="font-mono text-sm text-slate-100">
                           plt.savefig("chart.png", <br/>
                           &nbsp;&nbsp;<span className="text-slate-400">bbox_inches="tight"</span>)
                        </pre>
                     </div>
                  </div>
                  <button onClick={() => runDemo('margins_demo')} className="w-full py-6 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 font-black rounded-3xl shadow-xl hover:scale-[1.02] transition-all text-xs tracking-widest uppercase">Perform Buffer Crop</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex-1 flex flex-col justify-center space-y-10 relative z-10 italic">
                  <h3 className="text-2xl font-black flex items-center mb-4 text-slate-800 dark:text-slate-200 tracking-tighter uppercase border-b dark:border-slate-800 pb-4">
                    <Activity className="w-7 h-7 mr-4 text-slate-500" />
                    9️⃣ Asset Generation: Website Traffic
                  </h3>
                  <div className="bg-slate-500/5 p-12 rounded-[4rem] border border-slate-500/20 flex flex-col items-center justify-center relative overflow-hidden group/case">
                     <div className="absolute top-0 right-0 p-10 opacity-[0.05] grayscale-0 group-hover/case:rotate-12 transition-transform duration-1000"><Share2 className="w-40 h-40 text-slate-400" /></div>
                     <div className="text-4xl font-black text-slate-700 dark:text-slate-300 mb-6 italic underline decoration-slate-500/20 underline-offset-8 tracking-tighter uppercase">traffic_chart.png</div>
                     <p className="text-sm font-bold text-slate-500 text-center leading-relaxed italic max-w-sm">
                        "Generating report assets for stakeholder distribution. Saved with precise naming for easy project organization."
                     </p>
                  </div>
                  <button onClick={() => runDemo('real_world')} className="w-full py-6 bg-slate-800 text-white dark:bg-white dark:text-slate-900 font-black rounded-[4rem] shadow-2xl hover:bg-slate-900 transition-all text-xs tracking-[0.4em] ring-offset-4 active:ring-8 ring-slate-500/10">Export Production Visual</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10 font-mono italic">
            
            {/* IO Buffer Status Terminal */}
            <div className="bg-[#0b0c10] rounded-[4.5rem] p-12 border border-slate-800 flex-1 min-h-[520px] shadow-2xl relative overflow-hidden group/terminal flex flex-col italic">
               <div className="absolute top-0 right-0 w-80 h-80 bg-slate-500/5 rounded-full blur-[100px] group-hover/terminal:bg-slate-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-10 px-4 transition-all">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-5 text-slate-500/70 animate-pulse font-bold" />
                      <h3 className="font-black text-slate-600 uppercase text-[10px] tracking-[0.5em] font-mono">
                        IO_BUFFER_CORE_v6
                      </h3>
                    </div>
                    <div className="flex space-x-2.5">
                       <div className="w-3.5 h-3.5 rounded-full bg-slate-950 shadow-inner"></div>
                       <div className="w-3.5 h-3.5 rounded-full bg-slate-500/50 shadow-[0_0_15px_rgba(100,116,139,0.5)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-6 space-y-6">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-12 opacity-30 select-none filter hover:brightness-125 transition-all duration-700 font-black italic">
                        <Save className="w-24 h-24 stroke-[1px] animate-bounce duration-[5000ms]" />
                        <div className="text-center">
                           <span className="block text-[8px] uppercase tracking-[0.7em] font-black text-slate-500 mb-3 underline decoration-slate-500/20 underline-offset-8">Awaiting IO Signal...</span>
                           <span className="text-[10px] text-white/40 tracking-tighter">Initialize Export Logic</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-5">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-6 duration-700 flex items-start group/line">
                              <span className="text-slate-500/30 mr-5 font-black select-none text-[8px] mt-1 shrink-0 uppercase tracking-widest decoration-slate-500/10 underline">file::out</span>
                              <span className={`leading-relaxed font-black transition-colors ${
                                line.includes('Success') || line.includes('Written') ? 'text-slate-100 font-extrabold tracking-tight underline decoration-slate-500/20 underline-offset-4' :
                                line.includes('Executing') || line.includes('Initializing') ? 'text-amber-500 italic' :
                                line.includes('Encoding') || line.includes('Rasterizing') ? 'text-slate-400' :
                                line.includes('Performance') ? 'text-slate-200 font-black tracking-widest uppercase border-b border-white/10' :
                                'text-slate-600 italic uppercase text-[9px] tracking-tight'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-12 flex justify-between items-center border-t border-white/5 mt-10 italic">
                           <div className="flex items-center gap-4">
                              <span className="w-3 h-3 rounded-full bg-slate-500 animate-pulse shadow-[0_0_15px_rgba(100,116,139,0.6)]"></span>
                              <span className="text-[9px] text-slate-700 font-black uppercase tracking-[0.4em] decoration-slate-500/10 underline italic font-mono">IO Stream Synchronized</span>
                           </div>
                           <button onClick={resetConsole} className="text-[10px] text-slate-500/70 hover:text-slate-400 font-black uppercase tracking-[0.3em] font-mono transition-colors border-b border-white/5">Purge Streams</button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Course Architecture Roadmap */}
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-black p-12 rounded-[5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-72 h-72 bg-slate-500/10 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-black text-[10px] mb-10 flex items-center uppercase tracking-[0.5em] opacity-80 underline decoration-slate-500 underline-offset-8 italic">
                 <List className="w-5 h-5 text-slate-400 mr-4 shrink-0" />
                 Course Sequence
               </h4>
               <div className="space-y-6 px-2 relative z-10 italic">
                  {[
                    "Matplotlib Plotting", "Matplotlib Line Plot", "Matplotlib Labels", "Matplotlib Legends", "Matplotlib Savefig"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-14 h-12 rounded-2xl flex items-center justify-center mr-8 transition-all duration-700 hover:scale-110 ${i === 4 ? 'bg-white text-slate-900 shadow-2xl shadow-white/10 rotate-12' : 'bg-white/5 border border-white/10 opacity-30 select-none grayscale'}`}>
                          <span className={`text-[11px] font-black italic ${i === 4 ? 'text-slate-900' : 'text-slate-500'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-black tracking-widest transition-colors uppercase italic ${i === 4 ? 'text-slate-300 underline decoration-slate-500/20 underline-offset-8' : 'text-slate-700'}`}>{path}</span>
                       {i === 4 && <ArrowRightCircle className="w-4 h-4 ml-auto text-slate-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Advice Grid */}
      <section className="max-w-6xl mx-auto mb-24 px-4 overflow-hidden italic font-black">
        <div className="bg-white dark:bg-slate-900 p-16 sm:p-24 rounded-[6rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 p-20 opacity-[0.03] scale-150 rotate-12 -z-0 pointer-events-none grayscale-0 group-hover:-rotate-12 transition-transform duration-[3000ms] transition-all">
             <Download className="w-96 h-96 text-slate-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 gap-10 relative z-10 tracking-tighter decoration-slate-500/20 underline underline-offset-[16px]">
             <div className="flex items-center">
                <div className="p-5 bg-slate-100 dark:bg-slate-800 rounded-[3rem] mr-10 shadow-2xl transition-transform hover:rotate-6">
                   <Lightbulb className="w-12 h-12 text-slate-700 dark:text-slate-300 font-bold" />
                </div>
                <div>
                   <h2 className="text-4xl text-slate-900 dark:text-white mb-2 uppercase tracking-tight">
                      Export Strategic Advice
                   </h2>
                   <p className="text-lg text-slate-500 dark:text-slate-400 font-bold tracking-tight lowercase">Professional file handling tactics.</p>
                </div>
             </div>
             <div className="h-0.5 w-40 bg-slate-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
             {[
               { t: "The Ritual Paradox", d: "Always call plt.savefig() BEFORE plt.show(). Reversing this can produce empty file buffers.", i: Clock, c: "text-slate-600" },
               { t: "Report Resolution", d: "Use high resolution (dpi=300) for printed reports and professional presentations.", i: MonitorPlay, c: "text-slate-500" },
               { t: "Vector Scalability", d: "Use SVG format for website graphics to allow infinite scaling without quality degradation.", i: Share2, c: "text-slate-700" },
               { t: "Project Hierarchy", d: "Organize visual assets into specific folders (e.g. 'plots/chart.png') to maintain project sanity.", i: HardDrive, c: "text-slate-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip transition-all">
                 <div className={`p-7 bg-slate-50 dark:bg-slate-800 rounded-[3rem] mr-10 shadow-sm group-hover/tip:bg-slate-900/10 transition-all duration-700 ${tip.c} bg-opacity-10 shrink-0`}>
                    <tip.i className="w-10 h-10 group-hover/tip:rotate-12 group-hover/tip:scale-110 transition-transform font-bold italic" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-black text-slate-900 dark:text-white mb-4 group-hover/tip:text-slate-600 transition-colors uppercase tracking-[0.4em] text-[10px] underline decoration-slate-500/10 italic">⭐ PRO TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-black italic tracking-tight">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Practice Mission Section */}
      <section className="max-w-4xl mx-auto pb-24 px-6 md:px-0">
        <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-black p-16 sm:p-24 rounded-[7.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[120px] -z-0 pointer-events-none group-hover:scale-110 transition-transform duration-[4000ms]"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-20 items-center italic">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-6 py-2.5 bg-white/10 text-white rounded-full text-[10px] font-black mb-12 border border-white/20 tracking-[0.4em] uppercase shadow-2xl backdrop-blur-xl italic font-mono tracking-tighter decoration-white/20 underline underline-offset-4">
                🎯 Production Challenge
              </div>
              <h2 className="text-6xl font-black text-white mb-10 leading-[1.1] tracking-tighter uppercase italic">
                Exercise Monitor v2
              </h2>
              <p className="text-slate-100 text-lg mb-14 leading-relaxed font-black pr-6 opacity-80 italic border-l-4 border-slate-400/30 pl-8">
                Create a plot showing <b>Daily Exercise Time</b> (Minutes) for a business week. Save your chart as high-quality <b>"exercise_chart.png"</b>!
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-slate-950 hover:bg-slate-50 px-16 py-8 rounded-[4rem] text-[14px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 uppercase tracking-widest italic mx-auto xl:mx-0 border-b-6 border-slate-900/40"
               >
                 <Download className="w-5 h-5 mr-5 group-hover/btn:scale-110 transition-transform" />
                 Initialize Production Export
               </button>
            </div>

            <div className="w-full xl:w-96 relative font-mono">
               <div className="bg-[#0b0c10] rounded-[6rem] border border-white/10 p-16 relative shadow-2xl overflow-hidden group-hover:rotate-2 transition-transform duration-1000">
                  <div className="flex justify-between items-center mb-14 px-4 opacity-50">
                    <div className="flex gap-3">
                       <div className="w-3.5 h-3.5 rounded-full bg-slate-500 shadow-[0_0_15px_rgba(100,116,139,0.7)] animate-ping"></div>
                       <div className="w-3.5 h-3.5 rounded-full bg-slate-500/40"></div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">EXPORT_LOG_v6</span>
                  </div>

                  <div className="h-48 relative flex items-center justify-center p-10 bg-slate-500/5 rounded-[5rem] border border-slate-500/10 overflow-hidden font-black group/mock">
                     <HardDrive className="w-24 h-24 text-slate-500/20 group-hover/mock:scale-110 transition-transform duration-1000 shadow-2xl" />
                     <div className="absolute inset-0 flex items-center justify-center italic text-[9px] font-black text-slate-500/10 tracking-[1.5em] uppercase select-none font-bold">WRITING_FILE...</div>
                  </div>
                  
                  <div className="mt-14 flex items-center justify-center gap-5 text-slate-500/10 text-[10px] font-black uppercase tracking-[0.6em] select-none italic underline decoration-slate-500/5 underline-offset-8">
                     <ClipboardCheck className="w-4 h-4" />
                     Stream Flushed
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Post-Export Design Footer */}
      <footer className="max-w-4xl mx-auto text-center pb-24 opacity-40 hover:opacity-100 transition-all">
         <p className="text-xs font-black text-slate-500 dark:text-slate-400 italic leading-relaxed tracking-widest uppercase mb-6 decoration-slate-500/10 underline underline-offset-8">
            The final step of visualization is sharing. Master the export to ensure your insights reach their audience with professional clarity.
         </p>
         <div className="h-0.5 w-32 bg-slate-500/10 mx-auto transition-all hover:w-64"></div>
      </footer>

    </div>
  );
}

export default MplSavefig;
