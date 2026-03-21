import React, { useState } from 'react';
import { 
  Info, Code, Terminal, Layers, Play,
  Zap, Activity, Target, Network,
  Palette, History, AlertTriangle, Lightbulb,
  Table, Search, CheckCircle2, Paintbrush,
  Eye, Droplet, LayoutTemplate,
  TrendingUp,
  GitMerge
} from 'lucide-react';

const SbColorPalettes: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'types' | 'usage' | 'custom' | 'cubehelix'>('types');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_types':
        outLines = [
          'Analyzing Dataset variable types...',
          'Categories detected -> Recommending Qualitative ("Set2")',
          'Numerical sequence detected -> Recommending Sequential ("viridis")',
          'Centered diverging metrics detected -> Recommending Diverging ("coolwarm")',
          'Appropriate palettes matched to data structures.'
        ];
        break;
      case 'global_vs_inline':
        outLines = [
          'Executing sns.set_palette("pastel")...',
          'Global matplotlib rcParams updated successfully.',
          'All subsequent plots will default to "pastel"...',
          '--> Drawing Barplot...',
          'Overriding global setting: applying inline palette="Set2"...',
          'Barplot rendered using "Set2" independently.'
        ];
        break;
      case 'custom_gen':
        outLines = [
          'Parsing custom array: ["red", "blue", "green"]...',
          'Registering literal Hex/RGB mapping list...',
          'Generating programmatic space: sns.color_palette("husl", 8)...',
          'Distributing hue evenly across 8 color bins...',
          'Custom categorical colormap registered.'
        ];
        break;
      case 'cubehelix':
        outLines = [
          'Initializing Cubehelix algorithm...',
          'Mapping params: start=2, rot=0, dark=0, light=1...',
          'Computing perceptually uniform intensity...',
          'Generating sequence safe for B&W printing...',
          'Scientific visualization colormap generated.'
        ];
        break;
      case 'palplot':
        outLines = [
          'Evaluating sns.color_palette("viridis")...',
          'Rendering horizontal strip of color blocks...',
          'Colors: [#440154, #414487, #2a788e, #22a884, #7ad151, #fde725]',
          'Visual preview (palplot) successfully displayed in notebook.'
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-3xl mb-8 shadow-sm border border-fuchsia-200 dark:border-fuchsia-800/50">
          <Palette className="w-12 h-12 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 rounded-full text-[10px] font-bold mb-6 border border-fuchsia-500/20 tracking-[0.25em] uppercase">
          Visual Storytelling
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Seaborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-amber-500">Color Palettes</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Colors influence perception. Master qualitative, sequential, and diverging palettes to enhance readability and tell the correct data science story.
        </p>
      </header>

      {/* 2. The 3 Types of Palettes Grid */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex items-center mb-8">
           <Layers className="w-8 h-8 text-fuchsia-500 mr-4" />
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">The 3 Major Categories</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
           
           {/* Qualitative */}
           <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-green-400 to-blue-400 opacity-80"></div>
              <h3 className="text-xl font-bold mb-3 mt-4 text-slate-800 dark:text-white flex items-center">
                 <LayoutTemplate className="w-5 h-5 mr-3 text-slate-400" />
                 Qualitative
              </h3>
              <p className="text-sm text-slate-500 font-medium mb-6">For categories with no inherent order or relationship.</p>
              
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl mb-6">
                 <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block mb-2">Use Cases</span>
                 <ul className="text-xs font-bold text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Gender categories</li>
                    <li>• Product types</li>
                    <li>• Departments</li>
                 </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                 {["deep", "muted", "pastel", "bright", "colorblind"].map(p => (
                   <span key={p} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-mono rounded-full text-slate-500 font-bold border border-slate-200 dark:border-slate-700">{p}</span>
                 ))}
              </div>
           </div>

           {/* Sequential */}
           <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-100 to-emerald-700 opacity-80"></div>
              <h3 className="text-xl font-bold mb-3 mt-4 text-slate-800 dark:text-white flex items-center">
                 <TrendingUp className="w-5 h-5 mr-3 text-emerald-500" />
                 Sequential
              </h3>
              <p className="text-sm text-slate-500 font-medium mb-6">For continuous or ordered data advancing in one direction.</p>
              
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl mb-6">
                 <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block mb-2">Use Cases</span>
                 <ul className="text-xs font-bold text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Temperature 🌡️</li>
                    <li>• Sales growth 📈</li>
                    <li>• Density/Heatmaps</li>
                 </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                 {["Blues", "Greens", "viridis", "magma"].map(p => (
                   <span key={p} className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-mono rounded-full text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-800/30">{p}</span>
                 ))}
              </div>
           </div>

           {/* Diverging */}
           <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-white to-red-500 opacity-80"></div>
              <h3 className="text-xl font-bold mb-3 mt-4 text-slate-800 dark:text-white flex items-center">
                 <Activity className="w-5 h-5 mr-3 text-red-500" />
                 Diverging
              </h3>
              <p className="text-sm text-slate-500 font-medium mb-6">For data spanning across a critical midpoint (e.g., zero).</p>
              
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl mb-6">
                 <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block mb-2">Use Cases</span>
                 <ul className="text-xs font-bold text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Profit vs Loss 💰</li>
                    <li>• Temperature anomalies</li>
                    <li>• Correlation (-1 to 1)</li>
                 </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                 {["coolwarm", "RdBu", "Spectral"].map(p => (
                   <span key={p} className="px-3 py-1 bg-rose-50 dark:bg-rose-900/20 text-[10px] font-mono rounded-full text-rose-600 dark:text-rose-400 font-bold border border-rose-200 dark:border-rose-800/30">{p}</span>
                 ))}
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
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Colormap Lab</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">3️⃣ Function: sns.color_palette()</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'types', label: 'View Palette', icon: Eye },
              { id: 'usage', label: 'Global & Inline', icon: Droplet },
              { id: 'custom', label: 'Custom & Husl', icon: Palette },
              { id: 'cubehelix', label: 'Cubehelix', icon: Zap }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-[2rem] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
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
              
              {/* Tab: Viewing */}
              {activeTab === 'types' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-fuchsia-600 dark:text-fuchsia-400">
                    <Eye className="w-6 h-6 mr-4" />
                    Viewing Palettes
                  </h3>
                  <div className="space-y-8 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Before applying colors to massive overarching charts, you can easily view a horizontal representation of any string code using `palplot`.
                    </p>
                    <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group mb-8">
                        <button onClick={() => runDemo('palplot')} className="absolute bottom-6 right-6 p-4 bg-fuchsia-600 text-white rounded-2xl shadow-xl hover:bg-fuchsia-500 active:scale-95 transition-all">
                           <Play className="w-5 h-5 fill-current" />
                        </button>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                          <code className="block text-purple-400 mb-2">import seaborn as sns</code>
                          <code className="block mt-4 text-slate-500 italic"># Preview the 'viridis' sequential map</code>
                          <code className="block text-fuchsia-400 font-bold tracking-widest">sns.palplot(sns.color_palette(<span className="text-amber-300">"viridis"</span>))</code>
                        </pre>
                    </div>

                    <div className="h-10 w-full rounded-2xl overflow-hidden shadow-inner flex">
                       <div className="h-full flex-1 bg-[#440154]"></div>
                       <div className="h-full flex-1 bg-[#482878]"></div>
                       <div className="h-full flex-1 bg-[#3e4a89]"></div>
                       <div className="h-full flex-1 bg-[#31688e]"></div>
                       <div className="h-full flex-1 bg-[#26828e]"></div>
                       <div className="h-full flex-1 bg-[#1f9e89]"></div>
                       <div className="h-full flex-1 bg-[#35b779]"></div>
                       <div className="h-full flex-1 bg-[#6ece58]"></div>
                       <div className="h-full flex-1 bg-[#b5de2b]"></div>
                       <div className="h-full flex-1 bg-[#fde725]"></div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center w-full block">"viridis" visualization output</span>
                  </div>
                </div>
              )}

              {/* Tab: Usage */}
              {activeTab === 'usage' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-amber-500">
                    <Droplet className="w-6 h-6 mr-4" />
                    Global vs Inline
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    You can set palettes globally for your entire notebook or application, or isolate them per-plot depending on your requirements.
                  </p>
                  
                  <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-[13px] leading-7 text-slate-300">
                        <span className="text-slate-500"># 1. Applies Globally to ALL plots in notebook</span><br/>
                        sns.<span className="text-fuchsia-400 font-bold underline">set_palette</span>(<span className="text-amber-300">"pastel"</span>)<br/><br/>
                        <span className="text-slate-500"># 2. Applies ONLY to this specific Barplot</span><br/>
                        sns.<span className="text-purple-400">barplot</span>(<br/>
                        &nbsp;&nbsp;x=<span className="text-amber-300">"day"</span>, y=<span className="text-amber-300">"total_bill"</span>, data=df, <br/>
                        &nbsp;&nbsp;<span className="text-fuchsia-400 font-bold underline">palette</span>=<span className="text-amber-300">"Set2"</span><br/>
                        )<br/>
                     </pre>
                  </div>
                  <div className="flex justify-end pt-4">
                     <button onClick={() => runDemo('global_vs_inline')} className="px-10 py-5 bg-amber-500 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-amber-400 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Palette Engine</button>
                  </div>
                </div>
              )}

              {/* Tab: Custom */}
              {activeTab === 'custom' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold text-rose-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Palette className="w-6 h-6 mr-4" />
                    Custom & HUSL Spaces
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Need matching brand colors? Input them explicitly. Or generate a highly distinct array of N-colors using the <code>husl</code> color space generator.
                  </p>

                  <div className="bg-slate-950 p-6 rounded-[2.5rem] border border-slate-800 shadow-xl mb-4">
                     <pre className="font-mono text-[12px] text-slate-300 leading-relaxed">
                        <span className="text-slate-500"># Explicitly supply Hex or Strings limitlessly</span><br/>
                        sns.<span className="text-fuchsia-400 font-bold">color_palette</span>([<span className="text-amber-300">"red"</span>, <span className="text-amber-300">"blue"</span>, <span className="text-amber-300">"green"</span>])
                     </pre>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-[2.5rem] border border-slate-800 shadow-xl">
                     <pre className="font-mono text-[12px] text-slate-300 leading-relaxed">
                        <span className="text-slate-500"># Generate exactly 8 distinctly spread colors</span><br/>
                        sns.<span className="text-fuchsia-400 font-bold">color_palette</span>(<span className="text-amber-300">"husl"</span>, <span className="text-amber-300">8</span>)
                     </pre>
                  </div>
                  
                  <button onClick={() => runDemo('custom_gen')} className="w-full py-5 mt-4 bg-rose-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-rose-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Process Custom Generations</button>
                </div>
              )}

              {/* Tab: Cubehelix */}
              {activeTab === 'cubehelix' && (
                <div className="animate-in fade-in zoom-in-95 duration-500 flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-sky-500 flex items-center border-b dark:border-slate-800 pb-6">
                    <Zap className="w-6 h-6 mr-4" />
                    Cubehelix Palette <span className="ml-3 px-2 py-1 bg-amber-500/20 text-amber-500 tracking-widest rounded-lg text-[10px] uppercase">Advanced 🔥</span>
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    The <code>cubehelix_palette</code> system produces sequential colour maps with linearly-increasing or decreasing brightness. Extremely advantageous for <b>Scientific visualizations</b> preserving perceptual uniformity even when printed in Black & White!
                  </p>

                  <div className="bg-slate-950 p-8 rounded-[3.5rem] border border-slate-800 shadow-2xl relative">
                     <pre className="font-mono text-[13px] leading-7 text-slate-300">
                       <span className="text-slate-500"># Generates perceptually uniform scientific map</span><br/>
                       sns.<span className="text-sky-400 font-bold">cubehelix_palette</span>(<br/>
                       &nbsp;&nbsp;<span className="text-amber-400 font-bold">start</span>=<span className="text-amber-300">2</span>,  <span className="text-slate-500"># Base hue</span><br/>
                       &nbsp;&nbsp;<span className="text-amber-400 font-bold">rot</span>=<span className="text-amber-300">0</span>,    <span className="text-slate-500"># Rotation around hue circle</span><br/>
                       &nbsp;&nbsp;<span className="text-amber-400 font-bold">dark</span>=<span className="text-amber-300">0</span>,   <span className="text-slate-500"># Lowest intensity (0 = Black)</span><br/>
                       &nbsp;&nbsp;<span className="text-amber-400 font-bold">light</span>=<span className="text-amber-300">1</span>   <span className="text-slate-500"># Highest intensity (1 = White)</span><br/>
                       )
                     </pre>
                  </div>

                  <button onClick={() => runDemo('cubehelix')} className="w-full py-5 bg-sky-600 text-white font-extrabold rounded-[2rem] shadow-xl hover:bg-sky-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Execute Scientific Algorithm</button>
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
                        COLOR_ENGINE
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
                        <Paintbrush className="w-16 h-16 opacity-5 animate-pulse" />
                        <div className="text-center relative">
                           <span className="block text-[8px] uppercase tracking-[0.5em] mb-2 font-black">Awaiting RGB Configuration</span>
                           <div className="h-0.5 w-12 bg-slate-800 mx-auto"></div>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-fuchsia-500/50 mr-4 font-black select-none text-[8px] mt-1">HEX_{i}</span>
                              <span className={`leading-relaxed font-medium ${
                                line.includes('successfully') || line.includes('ready') ? 'text-emerald-400 font-bold' :
                                line.includes('Global') || line.includes('Overriding') ? 'text-amber-400' :
                                line.includes('Cubehelix') || line.includes('uniform') ? 'text-sky-300 font-bold' :
                                line.includes('Categories') || line.includes('numerical') ? 'text-purple-400' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/50 mt-8">
                           <span className="text-[8px] text-slate-700 font-black uppercase tracking-[0.3em]">Execution Halted</span>
                           <button onClick={resetConsole} className="text-[9px] text-fuchsia-500 hover:text-fuchsia-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-fuchsia-500/20 pb-0.5">FLUSH</button>
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
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-fuchsia-500/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-fuchsia-500"></div>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
               <CheckCircle2 className="w-8 h-8 text-fuchsia-500 mr-4" />
               Key Insights <span className="text-xs ml-3 px-2 py-1 bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/40 dark:text-fuchsia-400 rounded-full uppercase tracking-widest hidden sm:inline">Critical</span>
             </h2>

             <div className="space-y-6">
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-fuchsia-400 mb-2">✔ High Psychological Interpretation</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                     Colors immediately influence the core perception of your data. Subconscious mapping implies red=bad, green=good, dark=dense.
                   </p>
                </div>
                
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                   <h4 className="font-bold text-slate-800 dark:text-fuchsia-400 mb-2">✔ The Wrong Palette Breaks Dashboards</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                     Using a Qualitative (categorical) palette on something representing depth or sequence (like heatmaps) creates visually misleading results. ALWAYS match palette to data type.
                   </p>
                </div>
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
                  { m: "Using random colors aimlessly.", fx: "If colors have absolutely no meaning, it confuses viewers. Stick to single colors if categorical separation isn't needed." },
                  { m: "Using Qualitative palettes for numeric data.", fx: "Don't use 'Set2' on a Heatmap. High values will randomly be pink, low values green—making it utterly unreadable." },
                  { m: "Applying far too many colors.", fx: "Causes visual overload. If you have 30 categories, a 30-color scheme is noise. Group data or use greys." }
                ].map((mistake, i) => (
                   <div key={i} className="flex items-start p-4 bg-white dark:bg-slate-900 rounded-2xl border border-rose-100 dark:border-rose-900/50">
                      <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900 dark:text-rose-400 flex items-center justify-center font-bold mr-4 shrink-0 text-xs">X</div>
                      <div>
                         <p className="font-bold text-slate-800 dark:text-slate-200 mb-1 text-sm">{mistake.m}</p>
                         <p className="text-[11px] text-slate-600 dark:text-slate-400 italic font-mono mt-2">👉 {mistake.fx}</p>
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
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/40 to-amber-900/20 z-0"></div>
          
          <div className="relative z-10 mb-16 text-center">
             <h2 className="text-4xl font-black text-white mb-4 flex items-center justify-center">
               <Lightbulb className="w-10 h-10 text-amber-400 mr-4" />
               Pro Tips (From Experience)
             </h2>
             <p className="text-lg text-slate-300 font-medium tracking-tight">Expert knowledge for design architecture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
             {[
               { t: "Use Colorblind-Friendly Maps", c: 'sns.color_palette("colorblind")', d: "A huge portion of the population suffers from Red/Green colorblindness. Standardize on accessible palettes for large audiences." },
               { t: "Keep Consistency Across Dashboards", c: '# Category A = Blue, Category B = Red', d: "If Department X is Blue in one graph, it MUST remain Blue in all other graphs. Don't swap mapping." },
               { t: "Limit Distinct Colors", c: '# Ideal limit', d: "Keep distinct categories to 3–6 items MAX. Any more, and the human brain struggles to constantly refer back to the legend." },
               { t: "Use Light to Dark Progression", c: '# Density implications', d: "Dark colors inherently imply HIGH value or density. Light colors imply low value. Do not reverse this instinctual rule." }
             ].map((tip, i) => (
               <div key={i} className="flex flex-col p-8 bg-slate-950/60 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:bg-slate-950 shadow-xl transition-all group">
                  <h4 className="font-extrabold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-fuchsia-600 text-white flex items-center justify-center mr-3 text-sm">🔥</span>
                    {tip.t}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{tip.d}</p>
                  <code className="bg-black/50 p-4 rounded-2xl text-fuchsia-300 font-mono text-[11px] whitespace-pre-wrap font-bold border border-fuchsia-500/20 group-hover:border-fuchsia-500/50 transition-colors">
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
            <div className="lg:col-span-1 bg-gradient-to-br from-amber-500 to-fuchsia-600 p-10 rounded-[3rem] shadow-xl border border-white/10 text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white/20 rounded-full blur-[80px]"></div>
               <h3 className="text-xl font-bold mb-6 flex items-center relative z-10">
                  <span className="bg-white/20 p-2 rounded-xl mr-3"><Target className="w-5 h-5"/></span>
                  Personal Rec.
               </h3>
               <p className="text-3xl font-black leading-tight mb-8 relative z-10">
                  Always decide the palette <span className="text-amber-200">before</span> you begin plotting.
               </p>
               
               <p className="text-sm font-bold tracking-widest uppercase mb-4 text-fuchsia-200">Think deeply:</p>
               <ul className="space-y-4 relative z-10">
                  <li className="flex items-center text-sm font-bold text-white">
                     <CheckCircle2 className="w-5 h-5 mr-3 text-amber-300"/> What exact story am I telling?
                  </li>
                  <li className="flex items-center text-sm font-bold text-white">
                     <CheckCircle2 className="w-5 h-5 mr-3 text-amber-300"/> What emotion should it convey?
                  </li>
               </ul>
            </div>

            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                  <Table className="w-6 h-6 mr-3 text-slate-500" /> Best Palette Choices (Cheat Sheet)
               </h3>
               
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-slate-400 font-bold">Scenario / Data Type</th>
                           <th className="p-4 border-b-2 dark:border-slate-800 text-xs uppercase tracking-widest text-fuchsia-500 font-black">Recommended String Codes</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 border-b dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300 flex items-center">
                              <LayoutTemplate className="w-4 h-4 mr-3 text-blue-500" /> Categorical Separations
                           </td>
                           <td className="p-4 border-b dark:border-slate-800 font-mono text-fuchsia-500 font-bold">"Set2", "pastel", "deep"</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 border-b dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300 flex items-center">
                              <TrendingUp className="w-4 h-4 mr-3 text-emerald-500" /> Heatmap / Progression
                           </td>
                           <td className="p-4 border-b dark:border-slate-800 font-mono text-emerald-500 font-bold">"viridis", "magma", "Blues"</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 border-b dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300 flex items-center">
                              <GitMerge className="w-4 h-4 mr-3 text-rose-500" /> Correlation / Divergence
                           </td>
                           <td className="p-4 border-b dark:border-slate-800 font-mono text-rose-500 font-bold">"coolwarm", "Spectral", "RdBu"</td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                           <td className="p-4 font-bold text-slate-700 dark:text-slate-300 flex items-center">
                              <Eye className="w-4 h-4 mr-3 text-amber-500" /> Web Accessibility
                           </td>
                           <td className="p-4 font-mono text-amber-500 font-bold">"colorblind"</td>
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

export default SbColorPalettes;
