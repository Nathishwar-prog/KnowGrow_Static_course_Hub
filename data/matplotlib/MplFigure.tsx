import React, { useState } from 'react';
import { 
  Maximize2, Info, Code, Terminal, 
  Layers, Layout, Monitor, Save,
  Play, Lightbulb, Zap, CheckCircle2,
  AlertCircle, Sparkles, MousePointer2,
  BarChart, List, MoveRight, HelpCircle,
  TrendingUp, Users, Presentation, ClipboardCheck,
  Activity, Image as ImageIcon, Grid, FileCode
} from 'lucide-react';

const MplFigure: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'size' | 'multiple' | 'subplots' | 'saving' | 'real_world'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_fig':
        outLines = [
          'Initializing Matplotlib Backend...',
          'plt.figure() -> Created Figure object at 0x7f8...',
          'Adding default Axes [0, 0, 1, 1]...',
          'Plotting x=[1,2,3,4], y=[10,20,25,30]...',
          'Applying title: "Simple Plot"',
          'Success: Figure rendered in new window.'
        ];
        break;
      case 'size_fig':
        outLines = [
          'Allocating specific memory buffer...',
          'Setting geometry: 800x500 pixels (8x5 inches at default DPI)',
          'Adjusting axis constraints...',
          'Success: Custom sized Figure (8, 5) initialized.'
        ];
        break;
      case 'multi_fig':
        outLines = [
          'Creating Figure 1...',
          'Switching context to Figure 1 -> Plotting Dataset 1',
          'Creating Figure 2...',
          'Switching context to Figure 2 -> Plotting Dataset 2',
          'Success: 2 separate windows displayed simultaneously.'
        ];
        break;
      case 'subplot_fig':
        outLines = [
          'fig = plt.figure() -> Canvas Ready',
          'ax1 = add_subplot(1, 2, 1) -> Left Side Slot Created',
          'ax2 = add_subplot(1, 2, 2) -> Right Side Slot Created',
          'Rendering data to specific Axes handles...',
          'Success: 1 Figure with 2 Subplots generated.'
        ];
        break;
      case 'save_fig':
        outLines = [
          'Scanning figure hierarchy...',
          'Compressing layers for export...',
          'File format: PNG detected.',
          'DPI Setting: 100 (Default) or 300 (Pro)...',
          'Writing to plot.png...',
          'Success: High-resolution file saved to local directory.'
        ];
        break;
      case 'sales_case':
        outLines = [
          'Loading monthly sales trend...',
          'Applying figsize=(7, 4) for optimal dashboard fit...',
          'Markers added: "o"',
          'X-Labels: [Jan, Feb, Mar, Apr] mapped.',
          'Success: Professional report figure ready.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Validating solution...',
          'plt.figure(figsize=(10,6)) -> Detected',
          'plt.plot() -> Detected',
          'plt.savefig("my_plot.png", dpi=300) -> Detected',
          'Result: 100% Perfect! This chart is presentation-ready.'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Futuristic Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/30 rounded-3xl mb-8 shadow-sm border border-blue-200 dark:border-blue-800/50 transform hover:rotate-3 transition-transform cursor-pointer">
          <Monitor className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-bold mb-6 border border-blue-500/20 tracking-[0.3em] uppercase">
          Lesson 0.11
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter">
          The Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Figure</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          The master container. Learn how to manage the global canvas that holds every axis, label, and data point in your visualization.
        </p>
      </header>

      {/* 2. Conceptual Hierarchy Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/20 mr-4 group-hover:scale-110 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold italic tracking-tight underline decoration-blue-500/20 underline-offset-8 decoration-4">1ï¸âƒ£ What is a Figure?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium italic border-l-4 border-blue-500 pl-6">
              "Think of a Figure as the canvas, and the plots are drawn on that canvas. It is the top-level container for all elements."
            </p>
            
            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest">
                 <Layers className="w-5 h-5 mr-3 text-indigo-500" />
                 2ï¸âƒ£ Plot Structure Hierarchy
               </h3>
               <div className="p-8 bg-slate-50 dark:bg-slate-950 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 relative shadow-inner overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-[40px]"></div>
                  <div className="font-mono text-sm space-y-3 relative z-10">
                    <div className="flex items-center text-blue-500 font-bold group/item cursor-pointer">
                       <span className="w-4 h-4 border-2 border-blue-500 rounded-md mr-4 group-hover/item:bg-blue-500 transition-colors"></span>
                       <span>Figure (Top Level)</span>
                    </div>
                    <div className="pl-8 flex items-center text-indigo-400 font-medium group/item cursor-pointer">
                       <span className="w-0.5 h-10 bg-slate-200 dark:bg-slate-800 -mt-6 -ml-4 mr-4"></span>
                       <span className="w-3 h-3 border-2 border-indigo-400 rounded-sm mr-3"></span>
                       <span>Axes (Plot Area)</span>
                    </div>
                    <div className="pl-16 flex items-center text-slate-500 dark:text-slate-400 group/item cursor-pointer">
                       <span className="w-0.5 h-10 bg-slate-200 dark:bg-slate-800 -mt-6 -ml-4 mr-4"></span>
                       <span className="w-2 h-2 rotate-45 border border-slate-400 mr-3"></span>
                       <span>Axis (X / Y Scales)</span>
                    </div>
                    <div className="pl-16 flex items-center text-slate-500 dark:text-slate-400 group/item cursor-pointer">
                       <span className="w-0.5 h-10 bg-slate-220 dark:bg-slate-800 -mt-6 -ml-4 mr-4"></span>
                       <span className="w-2 h-2 rotate-45 border border-slate-400 mr-3"></span>
                       <span>Plot Data</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-10 rounded-[3.5rem] shadow-2xl border border-blue-500/20 flex flex-col justify-center overflow-hidden relative group">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center tracking-tight">
                <Presentation className="w-8 h-8 mr-4 text-blue-400" />
                Component Glossary
              </h3>
              <div className="grid gap-4">
                 {[
                   { t: "Figure", d: "Main container for the entire chart.", c: "bg-blue-500/20 text-blue-300" },
                   { t: "Axes", d: "The specific area where data is plotted.", c: "bg-indigo-500/20 text-indigo-300" },
                   { t: "Axis", d: "X and Y scales defining the coordinates.", c: "bg-slate-500/20 text-slate-300" },
                   { t: "Plot", d: "The visual representation (Line/Bar) of data.", c: "bg-emerald-500/20 text-emerald-300" }
                 ].map((gloss, i) => (
                   <div key={i} className="flex items-center p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:translate-x-2">
                       <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mr-6 ${gloss.c}`}>
                         {gloss.t}
                       </div>
                       <p className="text-xs text-slate-400 font-medium">{gloss.d}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Component Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-[2rem] mr-6 shadow-sm border border-blue-200 dark:border-blue-800">
              <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Figure Canvas Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.2em] mt-2 italic">3ï¸âƒ£ Function: plt.figure()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'basics', label: 'Basics', icon: Code },
              { id: 'size', label: 'Figure Size', icon: Maximize2 },
              { id: 'multiple', label: 'Multi-Fig', icon: Monitor },
              { id: 'subplots', label: 'Subplots', icon: Grid },
              { id: 'saving', label: 'Exporter', icon: Save },
              { id: 'real_world', label: 'Real Case', icon: BarChart }
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
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[4rem] shadow-2xl border border-slate-200 dark:border-slate-800 transition-all min-h-[580px] flex flex-col relative overflow-hidden">
              
              {/* Tab: Basics */}
              {activeTab === 'basics' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <Code className="w-6 h-6 mr-4" />
                    4ï¸âƒ£ Basic Implementation
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Initializing a new figure before plotting ensures that you have a clean canvas to draw on.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                        <div className="absolute top-4 right-8 p-1.5 bg-blue-500/10 text-blue-500 text-[8px] font-black uppercase tracking-widest rounded-md border border-blue-500/20">Canvas Mode</div>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                          <code className="block text-slate-500 italic mb-4"># Step 1: Initialize Figure</code>
                          <code className="block text-blue-400 font-bold underline decoration-blue-500/30">plt.figure()</code>
                          <code className="block mt-6 text-slate-400">x = [1, 2, 3, 4]</code>
                          <code className="block text-slate-400">y = [10, 20, 25, 30]</code>
                          <code className="block mt-6 text-indigo-400 font-medium italic">plt.plot(x, y)</code>
                          <code className="block mt-2">plt.title("Simple Plot")</code>
                          <code className="block mt-4 text-emerald-500 font-bold">plt.show()</code>
                        </pre>
                        <button onClick={() => runDemo('basic_fig')} className="absolute bottom-6 right-6 p-4 bg-blue-600 text-white rounded-2xl shadow-xl hover:bg-blue-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                    </div>
                    <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                       <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3 flex items-center">
                         <Activity className="w-4 h-4 mr-2" />
                         Execution Flow
                       </h4>
                       <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 font-medium">
                          <li>1. <b>plt.figure()</b> creates the memory window (The Container).</li>
                          <li>2. <b>plt.plot()</b> draws the actual line data inside the default axes.</li>
                          <li>3. <b>plt.show()</b> flushes the buffer to the screen.</li>
                       </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Size */}
              {activeTab === 'size' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500">
                    <Maximize2 className="w-6 h-6 mr-4" />
                    5ï¸âƒ£ Setting Figure Size
                  </h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed italic border-l-4 border-indigo-500 pl-4">"You can control the physical dimensions of the window using the figsize parameter (Width, Height in inches)."</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                        <span className="text-[10px] font-black text-indigo-500 uppercase block mb-1">Parameter 1</span>
                        <span className="text-2xl font-black text-slate-900 dark:text-white">WIDTH</span>
                     </div>
                     <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                        <span className="text-[10px] font-black text-indigo-500 uppercase block mb-1">Parameter 2</span>
                        <span className="text-2xl font-black text-slate-900 dark:text-white">HEIGHT</span>
                     </div>
                  </div>

                  <div className="bg-slate-950 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl">
                     <pre className="font-mono text-sm text-slate-300">
                        <span className="text-slate-500"># 8 inches wide, 5 inches high</span><br/>
                        plt.figure(<span className="text-indigo-400 font-bold underline decoration-indigo-500/40">figsize=(8, 5)</span>)<br/><br/>
                        plt.plot(x, y)<br/>
                        plt.title("Custom Size Visualization")
                     </pre>
                  </div>
                  <button onClick={() => runDemo('size_fig')} className="w-full py-5 bg-indigo-600 text-white font-black rounded-3xl shadow-xl hover:bg-indigo-500 active:scale-95 transition-all text-xs uppercase tracking-[0.2em]">Apply Geometry Change</button>
                </div>
              )}

              {/* Tab: Multiple */}
              {activeTab === 'multiple' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-emerald-500">
                    <Monitor className="w-6 h-6 mr-4" />
                    6ï¸âƒ£ Multiple Figure Windows
                  </h3>
                  <div className="bg-slate-950 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-10"><Monitor className="w-20 h-20 text-white" /></div>
                     <pre className="font-mono text-xs leading-6 text-slate-400">
                       {`# Create Window 1
plt.figure(1) 
plt.plot(x, y1)
plt.title("First Figure")

# Create Window 2
plt.figure(2)
plt.plot(x, y2)
plt.title("Second Figure")

plt.show() # Both windows pop up!`}
                     </pre>
                  </div>
                  <div className="p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold leading-relaxed shadow-sm">
                     "Each call to plt.figure() creates a totally independent canvas window, perfect for comparing different visualization types side-by-side."
                  </div>
                  <button onClick={() => runDemo('multi_fig')} className="w-full py-5 bg-emerald-600 text-white font-black rounded-[2.2rem] shadow-xl hover:bg-emerald-500 active:scale-95 transition-all text-[10px] tracking-widest uppercase">Spawn Multiple Windows</button>
                </div>
              )}

              {/* Tab: Subplots */}
              {activeTab === 'subplots' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8 h-full max-h-[600px] overflow-y-auto no-scrollbar pr-2">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-orange-500">
                    <Grid className="w-6 h-6 mr-4" />
                    7ï¸âƒ£ Figure with Subplots
                  </h3>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                     {[
                       { t: "Rows", v: "1" },
                       { t: "Cols", v: "2" },
                       { t: "Index", v: "1/2" }
                     ].map((item, i) => (
                       <div key={i} className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">{item.t}</span>
                          <span className="text-lg font-black text-orange-500">{item.v}</span>
                       </div>
                     ))}
                  </div>
                  <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-[11px] leading-6 text-slate-400">
                        {`fig = plt.figure()

# Subplot parameters: (Rows, Cols, Position)
ax1 = fig.add_subplot(1, 2, 1) # First slot
ax2 = fig.add_subplot(1, 2, 2) # Second slot

ax1.plot([1,2,3], [10,20,30])
ax2.plot([1,2,3], [30,20,10])`}
                     </pre>
                  </div>
                  <button onClick={() => runDemo('subplot_fig')} className="w-full py-5 bg-orange-600 text-white font-black rounded-3xl shadow-xl hover:bg-orange-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Grid Layout</button>
                </div>
              )}

              {/* Tab: Saving */}
              {activeTab === 'saving' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-10">
                  <h3 className="text-2xl font-bold flex items-center mb-10 pb-4 border-b border-slate-100 dark:border-slate-800 text-rose-500 italic">
                    <Save className="w-6 h-6 mr-4" />
                    8ï¸âƒ£ Exporting Figures
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                     {["PNG", "JPG", "PDF", "SVG"].map((fmt, i) => (
                       <div key={i} className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 text-center group cursor-pointer hover:border-rose-500 transition-colors">
                          <ImageIcon className="w-6 h-6 mx-auto mb-3 text-rose-500/40 group-hover:text-rose-500 transition-colors" />
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{fmt}</span>
                       </div>
                     ))}
                  </div>

                  <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
                     <div className="absolute top-4 right-8 px-3 py-1 bg-rose-500/10 text-rose-500 text-[8px] font-black uppercase tracking-widest rounded-full border border-rose-500/20">Exporter Mode</div>
                     <pre className="font-mono text-sm leading-8 text-slate-300">
                        plt.plot(x, y)<br/>
                        plt.title("Saved Figure")<br/><br/>
                        <span className="text-rose-400 font-bold">plt.savefig(<span className="text-emerald-400">"plot.png"</span>)</span><br/>
                        <span className="text-slate-600 italic"># DPI=300 for high resolution</span>
                     </pre>
                  </div>
                  <button onClick={() => runDemo('save_fig')} className="w-full py-5 bg-rose-600 text-white font-black rounded-[2.2rem] shadow-xl hover:bg-rose-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Generate Output File</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-10">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <TrendingUp className="w-6 h-6 mr-4" />
                    9ï¸âƒ£ Case Study: Monthly Sales Trend
                  </h3>
                  
                  <div className="bg-blue-500/5 p-8 rounded-[3rem] border border-blue-500/10 flex flex-col md:flex-row items-center gap-10">
                     <div className="w-24 h-24 bg-blue-500 rounded-[2rem] shadow-xl shadow-blue-500/20 flex items-center justify-center shrink-0">
                        <ImageIcon className="w-10 h-10 text-white" />
                     </div>
                     <div className="space-y-4">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Professional Visualization</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                           "Using optimized figsize=(7, 4) ensures the trends are perfectly scaled for modern dashboard cards or presentation slides."
                        </p>
                     </div>
                  </div>

                  <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 relative shadow-2xl overflow-hidden group">
                     {/* Floating Marker Indication */}
                     <div className="absolute top-10 right-10 flex flex-col items-center animate-bounce">
                        <div className="px-3 py-1 bg-emerald-500 text-white text-[9px] font-bold rounded-full mb-1">marker="o"</div>
                     </div>
                     <pre className="font-mono text-sm leading-8 text-slate-400">
                        plt.figure(<span className="text-blue-400 font-bold">figsize=(7, 4)</span>)<br/><br/>
                        months = ["Jan", "Feb", "Mar", "Apr"]<br/>
                        sales = [200, 250, 300, 280]<br/><br/>
                        plt.plot(months, sales, <span className="text-emerald-400">marker="o"</span>)
                     </pre>
                     <div className="mt-12 flex justify-end">
                        <button onClick={() => runDemo('sales_case')} className="px-10 py-5 bg-blue-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-blue-500 transition-all text-xs uppercase tracking-widest transform active:scale-95 flex items-center">
                           <Play className="w-4 h-4 mr-3" /> RENDER DASHBOARD FIG
                        </button>
                     </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6 h-full">
            {/* Console Output Mockup */}
            <div className="bg-[#0c0c0c] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] group-hover/terminal:bg-blue-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-blue-500/70" />
                      <h3 className="font-bold text-slate-600 uppercase text-[10px] tracking-[0.4em] font-mono">
                        FIG_ENGINE_v1.0
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
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-8 opacity-30 select-none">
                        <Monitor className="w-20 h-20 animate-pulse [animation-duration:3000ms]" />
                        <div className="text-center">
                           <span className="block text-[8px] uppercase tracking-[0.5em] font-black text-blue-500 mb-2">Hierarchy Idle</span>
                           <span className="text-[10px] font-bold">Select a component to Render</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-blue-500/30 mr-4 font-black select-none text-[8px] mt-1 shrink-0">FIG::HIE</span>
                              <span className={`leading-relaxed font-semibold transition-colors ${
                                line.includes('Success') || line.includes('Perfect') ? 'text-emerald-400' :
                                line.includes('Creating') || line.includes('Allocating') ? 'text-amber-400' :
                                line.includes('Detected') || line.includes('Mapping') ? 'text-indigo-400' :
                                line.includes('Initialization') ? 'text-blue-400 font-bold' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/40 mt-8">
                           <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                              <span className="text-[8px] text-slate-600 font-black uppercase tracking-[0.3em]">Canvas Ready</span>
                           </div>
                           <button onClick={resetConsole} className="text-[9px] text-blue-500 hover:text-blue-400 font-black uppercase tracking-[0.3em] transition-colors flex items-center italic">
                              RELOAD
                           </button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Teaching Order Visualizer */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-10 rounded-[4rem] border border-white/10 shadow-xl overflow-hidden relative group">
               <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-extrabold text-[10px] mb-8 flex items-center uppercase tracking-[0.4em] opacity-80">
                 <ClipboardCheck className="w-4 h-4 text-amber-400 mr-3" />
                 Figure Master Roadmap
               </h4>
               <div className="space-y-3 relative">
                  <div className="absolute left-[23px] top-6 bottom-6 w-px bg-white/10 -z-0"></div>
                  {[
                    { t: "Matplotlib Pyplot", c: "text-slate-500" },
                    { t: "Matplotlib Figure", c: "text-blue-400 font-black" },
                    { t: "Matplotlib Subplots", c: "text-slate-500" },
                    { t: "Matplotlib Layout", c: "text-slate-500" },
                    { t: "Matplotlib Grid", c: "text-slate-500" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center group/item cursor-default relative z-10">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500 ${i === 1 ? 'bg-blue-600 shadow-xl shadow-blue-500/30 rotate-12 scale-110' : 'bg-white/5 border border-white/10 opacity-40'}`}>
                          <span className={`text-[10px] font-black ${i === 1 ? 'text-white' : 'text-slate-600'}`}>0{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-bold tracking-widest transition-colors ${i === 1 ? 'text-white' : 'text-slate-500'}`}>{item.t}</span>
                       {i === 1 && <Sparkles className="w-3.5 h-3.5 ml-auto text-blue-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Tips Grid */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="bg-white dark:bg-slate-900 p-12 sm:p-20 rounded-[4.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 p-16 opacity-[0.03] scale-150 rotate-12">
             <Layout className="w-96 h-96 text-blue-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20 gap-8 relative z-10">
             <div>
               <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 flex items-center tracking-tighter italic">
                 Professional Advice
               </h2>
               <p className="text-lg text-slate-500 dark:text-slate-400 font-medium tracking-tight">How experts manage complex visualization dashboards.</p>
             </div>
             <div className="h-0.5 w-40 bg-blue-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
             {[
               { t: "Always Set Figure Size", d: "Default sizes rarely look good in formal reports. Manual overrides are mandatory for consistency.", i: Maximize2, c: "text-blue-500" },
               { t: "Dashboards over Charts", d: "One high-quality Figure containing multiple Subplots is always better than separate windows.", i: Layout, c: "text-indigo-500" },
               { t: "High-Resolution DPI", d: "When saving for presentations, always use dpi=300 for crisp, vector-like quality.", i: Save, c: "text-rose-500" },
               { t: "The Subplots Wrapper", d: "Best practice: Use fig, ax = plt.subplots(). It gives you deeper control over objects.", i: FileCode, c: "text-emerald-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group">
                 <div className={`p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] mr-8 group-hover:bg-white dark:group-hover:bg-slate-950 shadow-sm transition-all duration-500 ${tip.c} bg-opacity-10 group-hover:scale-105 shrink-0`}>
                    <tip.i className="w-8 h-8" />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors uppercase tracking-[0.2em] text-[10px]">â­ TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold italic">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Final Practice Challenge */}
      <section className="max-w-5xl mx-auto pb-24 px-6">
        <div className="bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 p-12 sm:p-24 rounded-[5.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px] -z-0"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-16 items-center">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-5 py-2 bg-white/20 text-white rounded-full text-[10px] font-black mb-10 border border-white/20 tracking-[0.4em] uppercase">
                ðŸŽ¯ Production Challenge
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight tracking-tighter italic">
                Presentation-Ready Trends
              </h2>
              <p className="text-blue-100 text-lg mb-12 leading-relaxed font-medium max-w-lg mx-auto xl:mx-0">
                Create a professional figure for a company board meeting. Use a size of <b>(10, 6)</b>, plot any trend, and <b>save it as "my_plot.png"</b> with high resolution.
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-white text-blue-900 hover:bg-slate-100 px-12 py-6 rounded-[2.5rem] text-[11px] font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 mx-auto xl:mx-0 uppercase tracking-widest italic"
               >
                 <Play className="w-5 h-5 mr-4 fill-blue-900 group-hover/btn:scale-125 transition-transform" />
                 INITIALIZE & SAVE FIGURE
               </button>
            </div>

            <div className="w-full xl:w-96 relative">
               <div className="bg-slate-950/80 backdrop-blur-xl rounded-[4.5rem] border border-white/10 p-12 relative shadow-2xl overflow-hidden w-full group-hover:scale-[1.03] transition-transform duration-700">
                  <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-4">
                    <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-blue-500/20 ring-1 ring-blue-500/40 animate-pulse"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-blue-500/20 ring-1 ring-blue-500/40"></div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-600 font-bold uppercase tracking-[0.4em] opacity-50 italic">Export_v1.png</span>
                  </div>

                  <div className="h-48 flex items-center justify-center p-4 border border-white/5 rounded-[2rem] bg-white/5 relative">
                     <Monitor className="w-16 h-16 text-blue-500/30 group-hover:text-blue-400 transition-colors" />
                     <div className="absolute bottom-4 right-4 animate-bounce">
                        <Save className="w-5 h-5 text-emerald-400" />
                     </div>
                  </div>
                  
                  <div className="mt-12 flex items-center justify-center gap-3 text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
                     <Sparkles className="w-3 h-3" />
                     Production Validated
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MplFigure;
