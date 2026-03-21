import React, { useState } from 'react';
import {
  Info, Terminal, Layers, Play,
  Palette, Monitor, Search,
  AlertTriangle, ListChecks, CheckCircle2,
  Focus, Eye, ShieldCheck,
  SplitSquareHorizontal, Layout, Maximize
} from 'lucide-react';

const SbSetTheme: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'core' | 'styles' | 'contexts' | 'real_world'>('core');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'basic_theme':
        outLines = [
          'Intercepting global Matplotlib rcParams...',
          'Wiping unformatted legacy plot parameters...',
          'Injecting modern Seaborn default configuration...',
          '--> Setting background to "darkgrid"...',
          '--> Switching default font matrices...',
          'Global Design System fully initialized.'
        ];
        break;
      case 'style_theme':
        outLines = [
          'Parsing custom aesthetic requests...',
          'Executing command: style="whitegrid"...',
          '--> Removing dark background, activating clean white canvas with structural lines...',
          'Executing command: palette="colorblind"...',
          '--> Overriding default color wheel with scientifically accessible Hex codes...',
          'Aesthetics successfully applied to all future plots.'
        ];
        break;
      case 'context_theme':
        outLines = [
          'Activating Font & Scale Rendering Engine...',
          'User requested context="talk"...',
          '--> Scaling Master Title size * 1.3...',
          '--> Scaling X and Y Axis labels globally...',
          '--> Expanding plotting canvas margins...',
          'Application is now heavily optimized for Presentation displays.'
        ];
        break;
      case 'real_world':
        outLines = [
          'Initializing Python Script Environment...',
          'Executing Global Command: sns.set_theme(style="whitegrid", palette="Set2")...',
          'Spinning up unrelated BarPlot: sns.barplot(x="day", y="total_bill")...',
          '--> Notice: BarPlot received ZERO styling arguments directly.',
          '--> Result: BarPlot completely inherited "whitegrid" and "Set2" colors perfectly!',
          'Clean, professional, and entirely centralized.'
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-3xl mb-8 shadow-sm border border-fuchsia-200 dark:border-fuchsia-800/50">
          <Palette className="w-12 h-12 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 rounded-full text-[10px] font-bold mb-6 border border-fuchsia-500/20 tracking-[0.25em] uppercase">
          Global Design System
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-500">Themes</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Master sns.set_theme() — Stop styling every single plot manually! Learn how to inject a massive, global UI design system at the very top of your codebase that makes every subsequent chart look infinitely cleaner, professional, and presentation-ready.
        </p>
      </header>

      {/* 2. Foundational Knowledge */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-fuchsia-500"></div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-fuchsia-500 rounded-2xl shadow-lg shadow-fuchsia-500/20 mr-4 group-hover:rotate-12 transition-transform">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What is set_theme?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-fuchsia-500 pl-6">
              "It is the overarching Global Configurator. Instead of trying to pass color dictionaries and font scale parameters to a BarPlot, a LinePlot, and a ScatterPlot one by one, you just define your artistic vision <b>once</b> globally. Everything else inherits it instantly."
            </p>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center text-xs uppercase tracking-widest mt-8">
                <Focus className="w-5 h-5 mr-3 text-fuchsia-500" />
                Why Use set_theme()?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Clean & Professional Look", "Guaranteed Consistency", "Dashboard Ready", "Fast Presentation Fixes"].map((stat, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-fuchsia-500 mr-3 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 p-10 rounded-[3rem] shadow-2xl border border-fuchsia-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px] -z-0"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Eye className="w-8 h-8 text-fuchsia-400 mr-4" />
                <h2 className="text-3xl font-bold text-white tracking-tight">2️⃣ Visual Intelligence</h2>
              </div>

              <div className="space-y-4 mb-5">
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 transition-colors">
                  <Monitor className="w-5 h-5 text-fuchsia-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-200"><b>The Magic:</b> If you change the code from <code>"notebook"</code> to <code>"talk"</code>, every single plot in your file instantly becomes 30% larger, making your presentation instantly readable.</span>
                </div>
                <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 transition-colors">
                  <Palette className="w-5 h-5 text-pink-400 mr-4 shrink-0" />
                  <span className="text-sm font-medium text-slate-200"><b>The Shift:</b> You feed the exact same data into the exact same line of plot code, but passing different global themes completely alters the UI output.</span>
                </div>
              </div>

              <div className="mt-auto bg-slate-950/80 p-5 rounded-2xl border border-fuchsia-500/20 font-mono text-xs leading-relaxed text-slate-300">
                <span className="text-slate-500 italic"># Invoking the Global Reset</span><br />
                <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                <span className="text-slate-500 italic"># Activates default darkgrid immediately</span><br />
                sns.<span className="text-fuchsia-400 font-bold">set_theme</span>()
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab Studio */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8 px-2">
          <div className="flex items-center">
            <div className="p-4 bg-fuchsia-100 dark:bg-fuchsia-900/40 rounded-3xl mr-6 border border-fuchsia-200 dark:border-fuchsia-800">
              <Terminal className="w-8 h-8 text-fuchsia-600 dark:text-fuchsia-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Artistic Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Engine: sns.set_theme()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'core', label: 'Core Concept', icon: Layers },
              { id: 'styles', label: 'Styles & Palettes', icon: Palette },
              { id: 'contexts', label: 'Layout Contexts', icon: Maximize },
              { id: 'real_world', label: 'Inheritance & VS', icon: SplitSquareHorizontal }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-900/30'
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

              {/* Tab: Core Principles */}
              {activeTab === 'core' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-fuchsia-600 dark:text-fuchsia-400">
                    <Layers className="w-6 h-6 mr-4" />
                    The 3 Core Parameters
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      The execution of <code>set_theme</code> relies strictly on 3 completely independent master attributes: <b>style</b> (background/grid layout), <b>palette</b> (the assigned color wheel logic), and <b>context</b> (global scaling multiplier).
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group">
                      <button onClick={() => runDemo('basic_theme')} className="absolute bottom-6 right-6 p-4 bg-fuchsia-600 text-white rounded-2xl shadow-xl hover:bg-fuchsia-500 active:scale-95 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </button>
                      <pre className="font-mono text-[13px] leading-8 text-slate-300">
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
                        <span className="text-slate-500 italic"># Activating the global configuration engine</span><br />
                        sns.<span className="text-fuchsia-400 font-bold tracking-widest">set_theme</span>(<br />
                        &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">style</span>=<span className="text-amber-300">"darkgrid"</span>, <span className="text-slate-500"># The Grid/Background System</span><br />
                        &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">palette</span>=<span className="text-amber-300">"deep"</span>,   <span className="text-slate-500"># The Color Wheel System</span><br />
                        &nbsp;&nbsp;<span className="text-cyan-400 font-bold underline">context</span>=<span className="text-amber-300">"notebook"</span><span className="text-slate-500"># The Font/Size Scaling System</span><br />
                        )
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Styles & Colors */}
              {activeTab === 'styles' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-pink-500">
                    <Palette className="w-6 h-6 mr-4" />
                    Overriding Colors & Canvases
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-xs mb-2 text-slate-800 dark:text-slate-200">Canvas <code>style=</code> Options</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal font-mono">
                        • "darkgrid" <span className="text-slate-400 italic">(Default)</span><br />
                        • <b>"whitegrid"</b> <span className="text-green-500">PRO Dashboards</span><br />
                        • "dark"<br />
                        • "white" <span className="text-slate-400 italic">(Minimalist)</span><br />
                        • "ticks"
                      </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-bold text-xs mb-2 text-slate-800 dark:text-slate-200">Color <code>palette=</code> Options</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal font-mono">
                        • "deep"<br />
                        • "muted"<br />
                        • "pastel"<br />
                        • "bright"<br />
                        • <b>"colorblind"</b> <span className="text-green-500">Accessible</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative space-y-4">
                    <pre className="font-mono text-[12px] leading-6 text-slate-300 p-4 bg-black/40 rounded-2xl border border-slate-800">
                      sns.<span className="text-fuchsia-400 font-bold">set_theme</span>(<br />
                      &nbsp;&nbsp;<span className="text-pink-400 font-bold underline">style</span>=<span className="text-amber-300">"whitegrid"</span>,<br />
                      &nbsp;&nbsp;<span className="text-pink-400 font-bold underline">palette</span>=<span className="text-amber-300">"colorblind"</span><br />
                      )
                    </pre>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button onClick={() => runDemo('style_theme')} className="px-10 py-5 bg-pink-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-pink-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Modern Visuals</button>
                  </div>
                </div>
              )}

              {/* Tab: Scaling Contexts */}
              {activeTab === 'contexts' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-cyan-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Maximize className="w-6 h-6 mr-4" />
                    The Global Multiplier (Context)
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    The <code>context</code> parameter solves the incredibly frustrating problem of building plots that look great on a laptop monitor, but are completely unreadable when placed on a Meeting Room Projector. It mathematically scales fonts and margins simultaneously.
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                    <div className="text-[12px] grid grid-cols-2 gap-4 text-slate-600 dark:text-slate-400 leading-normal font-mono">
                      <span>💻 <b>"notebook"</b> (Default laptop screen)</span>
                      <span>🎤 <b>"talk"</b> (Scaled for presentations)</span>
                      <span>📄 <b>"paper"</b> (Small technical prints)</span>
                      <span>🔭 <b>"poster"</b> (Massive TV displays)</span>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl">
                    <pre className="font-mono text-[12px] text-slate-300 leading-7">
                      <span className="text-slate-500"># Making plots instantly readable for a massive room!</span><br />
                      sns.<span className="text-fuchsia-400 font-bold">set_theme</span>(<span className="text-cyan-400 font-bold underline">context</span>=<span className="text-amber-300">"talk"</span>)
                    </pre>
                  </div>

                  <button onClick={() => runDemo('context_theme')} className="w-full py-5 bg-cyan-600 text-slate-900 font-extrabold rounded-[2rem] shadow-xl hover:bg-cyan-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Scale to Presenter Mode</button>
                </div>
              )}

              {/* Tab: Real World & Inheritance */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-rose-500 flex items-center border-b dark:border-slate-800 pb-4">
                    <SplitSquareHorizontal className="w-6 h-6 mr-4" />
                    Global Inheritance & Systems
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* set vs set */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 col-span-2">
                      <h4 className="font-bold text-sm mb-3 text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center"><ListChecks className="w-4 h-4 mr-2 text-fuchsia-500" /> set_theme vs set_style</h4>
                      <div className="text-[11px] grid grid-cols-3 gap-1.5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2 mt-2 font-medium bg-transparent">
                        <b className="text-slate-500">Feature</b> <b className="text-fuchsia-500 dark:text-fuchsia-400">set_theme()</b> <b className="text-slate-800 dark:text-slate-200">set_style()</b>
                        <span>Logical Scope</span> <span className="text-emerald-500 font-bold">Absolute Control</span> <span>Grid Style Only</span>
                        <span>Target Status</span> <span className="text-emerald-500 font-bold">Highly Valid</span> <span>Limited Usage</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-2xl relative mt-2">
                    <pre className="font-mono text-[10px] sm:text-[11px] leading-6 text-slate-300">
                      <span className="text-slate-500"># Real-World: Centralized Presentation Scripting</span><br />
                      df = sns.<span className="text-cyan-400">load_dataset</span>(<span className="text-amber-300">"tips"</span>)<br /><br />
                      <span className="text-slate-500"># Configure everything locally just once at the absolute ceiling.</span><br />
                      sns.<span className="text-fuchsia-400 font-bold">set_theme</span>(style=<span className="text-amber-300">"whitegrid"</span>, palette=<span className="text-amber-300">"Set2"</span>, context=<span className="text-amber-300">"talk"</span>)<br /><br />
                      <span className="text-slate-500"># Now, NO direct aesthetic kwargs are needed. Clean code!</span><br />
                      sns.<span className="text-cyan-400">barplot</span>(x=<span className="text-amber-300">"day"</span>, y=<span className="text-amber-300">"total_bill"</span>, data=df)<br />
                      plt.<span className="text-cyan-400">show</span>()
                    </pre>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full py-4 bg-rose-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-rose-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Inherited Layouts</button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            {/* Terminal Output Console */}
            <div className="bg-[#0a0a0a] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
              <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-[100px] group-hover/terminal:bg-fuchsia-500/10 transition-all duration-1000"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                  <div className="flex items-center">
                    <Terminal className="w-6 h-6 mr-4 text-fuchsia-500" />
                    <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.3em] font-mono">
                      DESIGN_THEME_SYS
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
                  </div>
                </div>

                <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-2 space-y-4">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-800/40 flex flex-col items-center justify-center h-full mt-20 space-y-8">
                      <Palette className="w-16 h-16 opacity-5 animate-pulse" />
                      <div className="text-center relative">
                        <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting Global Params</span>
                        <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {consoleOutput.map((line, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                          <span className="text-fuchsia-500/50 mr-4 font-black select-none text-[8px] mt-1">SYS_{i}</span>
                          <span className={`leading-relaxed font-medium ${line.includes('initialized') || line.includes('successfully applied') || line.includes('heavily optimized') || line.includes('perfectly!') ? 'text-emerald-400 font-bold' :
                              line.includes('Removing dark') || line.includes('Overriding default') || line.includes('Scaling Master') ? 'text-pink-400 font-bold' :
                                line.includes('Intercepting') || line.includes('Parsing custom') || line.includes('User requested') || line.includes('Executing Global') ? 'text-cyan-400' :
                                  line.includes('style=') || line.includes('palette=') || line.includes('context=') || line.includes('sns.') ? 'text-fuchsia-300 font-bold' :
                                    'text-slate-400'
                            }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                      <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                        <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Master Render End</span>
                        <button onClick={resetConsole} className="text-[9px] text-fuchsia-500 hover:text-fuchsia-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-fuchsia-500/20 pb-0.5">PURGE</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-fuchsia-500/20 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-2 h-full bg-fuchsia-500"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <ShieldCheck className="w-8 h-8 text-fuchsia-500 mr-4" />
              Expert Workflow <span className="text-xs ml-3 px-2 py-1 bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/40 dark:text-fuchsia-400 rounded-full uppercase tracking-widest hidden sm:inline">PRO TIP</span>
            </h2>

            <div className="space-y-4 flex-1">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 h-full">
                <h4 className="font-bold text-slate-800 dark:text-fuchsia-400 mb-2">🚀 Define Once, Run Forever</h4>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4">
                  You should almost NEVER style individual `sns` charts repeatedly inline. Your strict Data Science workflow is to map `sns.set_theme()` physically to the very top line of your code block immediately after your imports. It completely ensures that every visual output from script execution is totally unified and professional without polluting your actual chart-logic lines!
                </p>

                <ul className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 mt-4 border-t border-slate-200 dark:border-slate-700 pt-4">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-pink-500 mr-3 shrink-0"></span> Dashboards require clean lines. Strict use is: <code>style="whitegrid"</code>.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 shrink-0"></span> Executive Meetings require readability. Strict use is: <code>context="talk"</code>.</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-indigo-500 mr-3 shrink-0"></span> You can always completely terminate custom settings via <code>sns.reset_defaults()</code>.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-800 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-4 text-red-500" />
              Critical Styling Failures
            </h2>

            <div className="space-y-4 flex-1">
              {[
                { m: "Not setting any themes.", fx: "If you don't invoke set_theme(), Matplotlib defaults look like raw 1990s scientific text files. Extremely unprofessional." },
                { m: "Using Dark Themes in printed reports.", fx: "If deploying models in PDFs or Corporate White-Papers, passing style='darkgrid' consumes large amounts of background toner/fails accessibility." },
                { m: "Overusing crazy color palettes.", fx: "Sticking to 'colorblind' or 'deep' protects your chart's readability. Passing randomly aggressive palettes creates total visual clutter for leadership." }
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

export default SbSetTheme;
