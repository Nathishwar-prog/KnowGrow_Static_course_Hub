import React, { useState } from 'react';
import { 
  Palette, Info, Code, Terminal, 
  Droplet, Pipette, Layers, Maximize2,
  Play, Lightbulb, Zap, CheckCircle2,
  AlertCircle, Sparkles, MousePointer2,
  BarChart, List, MoveRight, HelpCircle,
  TrendingUp, Users, Presentation, ClipboardCheck,
  Activity, Eye, Layout, Type, Brush,
  Check,
  Target,
  History
} from 'lucide-react';

const MplColors: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'names' | 'codes' | 'hex' | 'multi' | 'bars' | 'real_world'>('names');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'simple_line':
        outLines = [
          'Initializing Plot Canvas...',
          'Setting line color: "green"',
          'Coordinates: [1, 10], [2, 15], [3, 20], [4, 25]',
          'Executing plt.plot(x, y, color="green")',
          'Success: Green Line Plot rendered.'
        ];
        break;
      case 'short_code':
        outLines = [
          'Code Detected: "r"',
          'Mapping to Color: Red',
          'Updating line property: color="r"',
          'Executing plt.plot(x, y, color="r")',
          'Success: Red Line Plot rendered.'
        ];
        break;
      case 'hex_code':
        outLines = [
          'Hex Value: #FF5733',
          'Interpreting RGB components...',
          'Applying custom hex styling to plot object.',
          'Executing plt.plot(x, y, color="#FF5733")',
          'Success: Custom Orange-Red plot displayed.'
        ];
        break;
      case 'multi_dataset':
        outLines = [
          'Dataset 1: Color="blue" (Primary)',
          'Dataset 2: Color="red" (Secondary)',
          'Generating Legend for differentiation...',
          'Executing plt.plot(x, y, ...)',
          'Success: Comparison plot with 2 colors ready.'
        ];
        break;
      case 'bar_colors':
        outLines = [
          'Mapping bar list: ["blue", "green", "orange"]',
          'Category 0: Laptop -> Blue',
          'Category 1: Mobile -> Green',
          'Category 2: Tablet -> Orange',
          'Executing plt.bar(products, sales, color=colors)',
          'Success: Rainbow bar chart displayed.'
        ];
        break;
      case 'profit_case':
        outLines = [
          'Dataset: Monthly Profit [200, 250, 180, 300]',
          'Applying Color: "purple"',
          'Applying Marker: "o"',
          'Rendering monthly performance trends...',
          'Success: Profit Visualization Complete.'
        ];
        break;
      case 'exercise':
        outLines = [
          'Analyzing Teacher Request...',
          'Days: ["Mon", "Tue", "Wed", "Thu", "Fri"]',
          'Visitors: [120, 150, 170, 160, 180]',
          'Color: "orange" -> Verified',
          'Marker: "o" -> Verified',
          'Result: 100% Correct. Aesthetics look professional!'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-100">
      
      {/* 1. Header Area */}
      <header className="max-w-5xl mx-auto text-center mb-16 pt-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-rose-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/30 rounded-3xl mb-8 shadow-sm border border-rose-200 dark:border-rose-800/50 transform hover:scale-110 transition-transform">
          <Palette className="w-12 h-12 text-rose-600 dark:text-rose-400" />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-[10px] font-bold mb-6 border border-rose-500/20 tracking-[0.25em] uppercase">
          Lesson 0.10
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Matplotlib <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500">Colors</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          The art of scientific storytelling. Beyond aesthetics, colors define readability, focus, and visual impact in every plot you build.
        </p>
      </header>

      {/* 2. Intro Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-rose-500 rounded-2xl shadow-lg shadow-rose-500/20 mr-4">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">1️⃣ What are Matplotlib Colors?</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed italic border-l-4 border-rose-500 pl-6">
              "Matplotlib colors are used to control the appearance and styling of visual elements in a plot, from lines to backgrounds."
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
               {[
                 { t: "Lines", i: Activity },
                 { t: "Bars", i: BarChart },
                 { t: "Markers", i: MousePointer2 },
                 { t: "Text", i: Type },
                 { t: "Background", i: Layout }
               ].map((item, i) => (
                 <div key={i} className="flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800/30">
                    <item.i className="w-3.5 h-3.5 text-rose-500 mr-2" />
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{item.t}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-200 dark:border-slate-800 relative group overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] -z-0"></div>
             <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-purple-500 rounded-2xl shadow-lg shadow-purple-500/20 mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">2️⃣ Why Colors Matter</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { t: "Highlight", d: "Draw attention to points.", i: Zap },
                    { t: "Differentiate", d: "Separate multiple datasets.", i: Layers },
                    { t: "Readability", d: "Improve data clarity.", i: Eye },
                    { t: "Engagement", d: "Make plots professional.", i: Sparkles }
                  ].map((benefit, i) => (
                    <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800/30 hover:bg-purple-500/5 transition-colors">
                       <benefit.i className="w-5 h-5 text-purple-500 mb-2" />
                       <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">{benefit.t}</h4>
                       <p className="text-[11px] text-slate-500 dark:text-slate-400">{benefit.d}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab & Simulator */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8">
          <div className="flex items-center">
            <div className="p-4 bg-rose-100 dark:bg-rose-900/40 rounded-3xl mr-6 shadow-sm border border-rose-200 dark:border-rose-800">
              <Pipette className="w-8 h-8 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight underline decoration-rose-500/30 decoration-4 underline-offset-8">Color Lab Studio</h2>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-2">Explore names, codes, and hex values</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-[2.2rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {[
              { id: 'names', label: 'Color Names', icon: Type },
              { id: 'codes', label: 'Short Codes', icon: Code },
              { id: 'hex', label: 'Hex Codes', icon: Pipette },
              { id: 'multi', label: 'Multi-Set', icon: Layers },
              { id: 'bars', label: 'Bar Colors', icon: BarChart },
              { id: 'real_world', label: 'Real Case', icon: History }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-3.5 rounded-3xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/30 scale-105' 
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
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[3.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[580px] flex flex-col transition-all">
              
              {/* Tab: Names */}
              {activeTab === 'names' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-rose-500">
                    <Droplet className="w-6 h-6 mr-4" />
                    3️⃣ Basic Color Names
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                     {[
                       { n: "red", c: "bg-red-500" },
                       { n: "blue", c: "bg-blue-500" },
                       { n: "green", c: "bg-green-500" },
                       { n: "yellow", c: "bg-yellow-400" },
                       { n: "black", c: "bg-slate-900" },
                       { n: "purple", c: "bg-purple-500" }
                     ].map((col, i) => (
                       <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 group cursor-pointer hover:border-rose-500/30 transition-all">
                          <code className="text-[10px] font-bold text-slate-500 group-hover:text-rose-500 uppercase tracking-tighter">"{col.n}"</code>
                          <div className={`w-5 h-5 rounded-lg ${col.c} shadow-md`}></div>
                       </div>
                     ))}
                  </div>
                  
                  <div className="bg-slate-950 rounded-[2rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-5"><Activity className="w-20 h-20 text-white" /></div>
                     <pre className="font-mono text-sm leading-relaxed text-slate-300">
                        <span className="text-blue-400">import</span> matplotlib.pyplot <span className="text-blue-400">as</span> plt<br/><br/>
                        <span className="text-slate-500"># Setting line color with string name</span><br/>
                        plt.<span className="text-rose-400 font-bold">plot</span>(x, y, <span className="text-emerald-400">color="green"</span>)<br/>
                        plt.show()
                     </pre>
                     <button onClick={() => runDemo('simple_line')} className="absolute bottom-6 right-6 p-4 bg-rose-600 text-white rounded-2xl shadow-xl hover:bg-rose-500 active:scale-90 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                     </button>
                  </div>
                </div>
              )}

              {/* Tab: Codes */}
              {activeTab === 'codes' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-indigo-500">
                    <Code className="w-6 h-6 mr-4" />
                    5️⃣ Single-Letter Color Codes
                  </h3>
                  <div className="overflow-hidden rounded-[2rem] border border-slate-100 dark:border-slate-800">
                    <table className="w-full text-left">
                       <thead className="bg-indigo-500/5 text-[10px] uppercase font-bold text-slate-400">
                          <tr>
                             <th className="px-8 py-4">Code</th>
                             <th className="px-8 py-4">Full Color Name</th>
                             <th className="px-8 py-4">Preview</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-50 dark:divide-slate-800 text-xs">
                          {[
                            { c: "r", n: "Red", bg: "bg-red-500" },
                            { c: "g", n: "Green", bg: "bg-green-500" },
                            { c: "b", n: "Blue", bg: "bg-blue-500" },
                            { c: "y", n: "Yellow", bg: "bg-yellow-400" },
                            { c: "k", n: "Black", bg: "bg-slate-900" },
                            { c: "m", n: "Magenta", bg: "bg-fuchsia-500" },
                            { c: "c", n: "Cyan", bg: "bg-cyan-400" }
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-indigo-500/5 transition-colors">
                               <td className="px-8 py-3 font-mono text-indigo-500 font-bold text-lg">'{row.c}'</td>
                               <td className="px-8 py-3 text-slate-600 dark:text-slate-400 font-medium">{row.n}</td>
                               <td className="px-8 py-3"><div className={`w-8 h-8 rounded-lg ${row.bg} shadow-sm border border-black/10`}></div></td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                  </div>
                  <button onClick={() => runDemo('short_code')} className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-xl hover:bg-indigo-500 active:scale-95 transition-all text-[10px] tracking-widest uppercase">Run Short Code Plot</button>
                </div>
              )}

              {/* Tab: Hex */}
              {activeTab === 'hex' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-10 focus:outline-none">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-emerald-500">
                    <Pipette className="w-6 h-6 mr-4" />
                    6️⃣ Hexadecimal Color Codes
                  </h3>
                  <div className="p-8 bg-emerald-500/5 rounded-[2.5rem] border border-emerald-500/10 flex flex-col items-center">
                     <div className="flex gap-4 items-center mb-6">
                        <div className="w-20 h-20 rounded-3xl bg-[#FF5733] shadow-2xl flex items-center justify-center">
                           <Check className="w-8 h-8 text-white opacity-40" />
                        </div>
                        <div className="space-y-1">
                           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Target Web Hex</p>
                           <h4 className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tighter">#FF5733</h4>
                        </div>
                     </div>
                     <p className="text-center text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                        "You can use hexadecimal values common in web design for highly specific brand colors."
                     </p>
                  </div>
                  <div className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800 shadow-2xl">
                     <pre className="font-mono text-sm text-slate-300">
                        <span className="text-slate-500"># Plotting with specific Hex Code</span><br/>
                        plt.plot(x, y, <span className="text-emerald-400">color="#FF5733"</span>)<br/>
                        plt.title("Custom Hex Color Plot")
                     </pre>
                  </div>
                  <button onClick={() => runDemo('hex_code')} className="w-full py-4 bg-emerald-700 text-white font-black rounded-2xl shadow-xl hover:bg-emerald-600 active:scale-95 transition-all text-xs uppercase tracking-widest italic tracking-tight">Render Custom Hex Visualization</button>
                </div>
              )}

              {/* Tab: Multi */}
              {activeTab === 'multi' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-blue-500">
                    <Layers className="w-6 h-6 mr-4" />
                    7️⃣ Using Multiple Colors
                  </h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed italic border-l-4 border-blue-500 pl-4">"When plotting multiple datasets, colors help distinguish them clearly at a glance."</p>
                  <div className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800 relative overflow-hidden group">
                     {/* Decorative Plot Path */}
                     <div className="absolute inset-x-8 bottom-8 h-32 opacity-10 pointer-events-none">
                        <div className="w-full h-full border-b border-l border-white/20 relative">
                           <div className="absolute w-full h-0.5 bg-blue-500 top-1/4 -rotate-12 translate-y-4"></div>
                           <div className="absolute w-full h-0.5 bg-red-500 bottom-1/4 rotate-6 -translate-y-2"></div>
                        </div>
                     </div>
                     <pre className="font-mono text-[13px] leading-relaxed text-slate-400 relative z-10">
                        plt.plot(x, y1, <span className="text-blue-400">color="blue"</span>, label="Dataset 1")<br/>
                        plt.plot(x, y2, <span className="text-rose-400">color="red"</span>, label="Dataset 2")<br/><br/>
                        <span className="text-indigo-400 font-bold">plt.legend()</span> <span className="text-slate-600 italic"># Essential for coloring charts</span><br/>
                        plt.title("Multiple Colored Lines")
                     </pre>
                  </div>
                  <button onClick={() => runDemo('multi_dataset')} className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl hover:bg-blue-500 active:scale-95 transition-all text-xs uppercase tracking-[0.2em]">Execute Color Comparison</button>
                </div>
              )}

              {/* Tab: Bars */}
              {activeTab === 'bars' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-amber-500">
                    <BarChart className="w-6 h-6 mr-4" />
                    8️⃣ Coloring Bar Charts
                  </h3>
                  <div className="flex gap-4 items-center bg-amber-500/5 p-6 rounded-3xl border border-amber-500/10">
                    <div className="p-3 bg-amber-500 rounded-2xl shadow-lg ring-4 ring-amber-500/20">
                      <Brush className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
                      "Each bar can have a different color by passing a list to the color parameter."
                    </p>
                  </div>
                  <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden group">
                     <pre className="font-mono text-sm leading-8 text-slate-400">
                        products = [<span className="text-amber-400">"Laptop", "Mobile", "Tablet"</span>]<br/>
                        sales = [120, 200, 150]<br/><br/>
                        <span className="text-indigo-400">colors = [<span className="text-blue-400">"blue"</span>, <span className="text-emerald-400">"green"</span>, <span className="text-amber-400">"orange"</span>]</span><br/><br/>
                        plt.bar(products, sales, <span className="text-rose-400">color=colors</span>)
                     </pre>
                  </div>
                  <button onClick={() => runDemo('bar_colors')} className="w-full py-4 bg-amber-600 text-white font-black rounded-2xl shadow-xl hover:bg-amber-500 active:scale-95 transition-all text-xs uppercase tracking-widest">Generate Multi-Color Bars</button>
                </div>
              )}

              {/* Tab: Real World */}
              {activeTab === 'real_world' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 text-purple-500">
                    <TrendingUp className="w-6 h-6 mr-4" />
                    9️⃣ Case Study: Monthly Profit
                  </h3>
                  <div className="bg-white dark:bg-slate-950 p-6 rounded-[2.2rem] border-2 border-slate-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                     <div className="w-24 h-24 rounded-[1.8rem] bg-purple-500/10 flex items-center justify-center p-6 border border-purple-500/20">
                        <TrendingUp className="w-full h-full text-purple-500" />
                     </div>
                     <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-center sm:text-left">
                        A purple line plot with circular markers makes profit trends look premium and professional.
                     </p>
                  </div>
                  <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 shadow-2xl relative">
                     <div className="absolute top-0 right-0 p-8 opacity-10 animate-pulse"><Pipette className="w-20 h-20 text-white" /></div>
                     <pre className="font-mono text-[14px] leading-8 text-slate-400">
                        plt.plot(months, profit, <br/>
                        &nbsp;&nbsp;<span className="text-purple-400">color="purple"</span>, <br/>
                        &nbsp;&nbsp;<span className="text-amber-400">marker="o"</span><br/>
                        )<br/>
                        plt.title(<span className="text-purple-300">"Monthly Profit Visualization"</span>)
                     </pre>
                     <div className="mt-8 flex justify-end">
                        <button onClick={() => runDemo('profit_case')} className="px-10 py-5 bg-purple-600 text-white font-black rounded-[2rem] shadow-xl hover:bg-purple-500 transition-all text-xs uppercase tracking-[0.2em] transform active:scale-90 flex items-center">
                           <Activity className="w-4 h-4 mr-3" /> Execute Trends
                        </button>
                     </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Console Area */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6 h-full">
            <div className="bg-[#0b0c10] rounded-[3.5rem] p-10 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden group/terminal flex flex-col">
               <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-[120px] group-hover/terminal:bg-rose-500/10 transition-all duration-1000"></div>
               
               <div className="relative z-10 flex flex-col h-full flex-1">
                  <div className="flex items-center justify-between mb-10 border-b border-slate-800 pb-6 px-2">
                    <div className="flex items-center">
                      <Terminal className="w-6 h-6 mr-4 text-rose-500/70" />
                      <h3 className="font-bold text-slate-600 uppercase text-[10px] tracking-[0.4em] font-mono">
                        COLOR_ENGINE_v2.0
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                       <div className="w-3 h-3 rounded-full bg-slate-900 ring-1 ring-slate-800"></div>
                       <div className="w-3 h-3 rounded-full bg-slate-900 ring-1 ring-slate-800"></div>
                       <div className="w-3 h-3 rounded-full bg-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.4)]"></div>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] flex flex-col flex-1 overflow-y-auto max-h-[380px] custom-scrollbar px-3 space-y-4">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-900 flex flex-col items-center justify-center flex-1 h-full mt-24 space-y-6 opacity-30 select-none">
                        <Pipette className="w-20 h-20 animate-bounce duration-[2000ms]" />
                        <div className="text-center">
                           <span className="block text-[8px] uppercase tracking-[0.5em] font-black text-rose-500 mb-2">System Initialized</span>
                           <span className="text-[10px] font-bold">Pick a Styling Tab to Plot</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {consoleOutput.map((line, i) => (
                           <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start group/line">
                              <span className="text-rose-500/30 mr-4 font-black select-none text-[8px] mt-1 tracking-tighter shrink-0">PLOT::COL</span>
                              <span className={`leading-relaxed font-semibold transition-colors ${
                                line.includes('Success') || line.includes('Correct') ? 'text-emerald-400' :
                                line.includes('Setting') || line.includes('Mapping') ? 'text-amber-400' :
                                line.includes('Code Detected') || line.includes('Value') ? 'text-indigo-400' :
                                line.includes('Result') ? 'text-purple-400 font-bold underline decoration-rose-500/30 underline-offset-4' :
                                'text-slate-400'
                              }`}>
                                {line}
                              </span>
                           </div>
                        ))}
                        <div className="pt-10 flex justify-between items-center border-t border-slate-800/40 mt-8">
                           <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              <span className="text-[8px] text-slate-600 font-black uppercase tracking-[0.3em]">Canvas Updated</span>
                           </div>
                           <button onClick={resetConsole} className="text-[9px] text-rose-500 hover:text-rose-400 font-black uppercase tracking-[0.2em] transition-colors flex items-center italic">
                              [ RESTART STREAM ]
                           </button>
                        </div>
                     </div>
                  )}
                  </div>
               </div>
            </div>

            {/* Teaching Order Visual */}
            <div className="bg-gradient-to-br from-indigo-900 via-rose-950 to-slate-900 p-10 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-rose-500/5 rounded-full blur-[100px]"></div>
               <h4 className="text-white font-extrabold text-[10px] mb-8 flex items-center uppercase tracking-[0.4em] opacity-80">
                 <ClipboardCheck className="w-4 h-4 text-amber-400 mr-3" />
                 Recommended Visual Path
               </h4>
               <div className="space-y-3 px-2">
                  {[
                    "Markers", "Colors", "Line Styles", "Grid", "Legends"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center group/item transition-all duration-300">
                       <div className={`w-12 h-10 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500 ${i === 1 ? 'bg-rose-600 shadow-xl shadow-rose-900/40 rotate-6 translate-x-1' : 'bg-white/5 border border-white/5'}`}>
                          <span className={`text-[10px] font-black ${i === 1 ? 'text-white' : 'text-slate-600'}`}>{i+1}</span>
                       </div>
                       <span className={`text-[11px] font-bold tracking-widest transition-colors ${i === 1 ? 'text-rose-400 scale-105' : 'text-slate-500 group-hover/item:text-slate-300'}`}>{path}</span>
                       {i === 1 && <Sparkles className="w-3.5 h-3.5 ml-auto text-rose-400 animate-pulse" />}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tips & Tricks Section */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="bg-white dark:bg-slate-900 p-12 sm:p-20 rounded-[4.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] scale-150 rotate-12 -z-0">
             <Palette className="w-96 h-96 text-rose-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8 relative z-10">
             <div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 flex items-center">
                   <Zap className="w-10 h-10 text-amber-500 mr-6" />
                   Aesthetic Best Practices
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium tracking-tight">Tactics for professional, accessible, and high-impact visualizations.</p>
             </div>
             <div className="h-0.5 w-40 bg-rose-500/20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 relative z-10 pr-4">
             {[
               { t: "Avoid Over-Coloring", d: "Too many colors cause cognitive confusion. Stick to 3–5 maximum per plot.", i: Layout, c: "text-rose-500" },
               { t: "The Highlight Rule", d: "Use a neutral palette (gray) with a single bold color (red) to focus attention.", i: Target, c: "text-amber-500" },
               { t: "Consistency is Key", d: "Once 'Product A' is assigned 'Blue', keep it blue throughout the entire dashboard.", i: History, p: "bg-indigo-500/10", c: "text-indigo-500" },
               { t: "Colorblind Safety", d: "Use accessible palettes like 'Viridis' or patterns to ensure everyone can interpret data.", i: Eye, c: "text-emerald-500" }
             ].map((tip, i) => (
               <div key={i} className="flex items-start group/tip p-2">
                 <div className={`p-6 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] mr-8 shadow-sm group-hover/tip:bg-slate-200 dark:group-hover/tip:bg-slate-950 transition-all duration-500 ${tip.c} bg-opacity-10 shrink-0`}>
                    <tip.i className="w-8 h-8 group-hover/tip:scale-110 group-hover/tip:rotate-12 transition-transform" />
                 </div>
                 <div className="pt-3">
                    <h4 className="font-extrabold text-slate-900 dark:text-white mb-3 group-hover/tip:text-rose-500 transition-colors uppercase tracking-[0.2em] text-[10px]">PRO TIP 0{i+1}: {tip.t}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{tip.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Final Practice Challenge */}
      <section className="max-w-4xl mx-auto pb-24 px-6">
        <div className="bg-gradient-to-br from-rose-600 via-rose-700 to-indigo-900 p-12 sm:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[100px] -z-0"></div>
          
          <div className="relative z-10 flex flex-col xl:flex-row gap-16 items-center">
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center px-4 py-1.5 bg-white/20 text-white rounded-full text-[10px] font-black mb-8 border border-white/20 tracking-[0.4em] uppercase">
                🎯 Styling Mission
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                Daily Performance Tracker
              </h2>
              <p className="text-rose-500/10 text-9xl font-black absolute -top-10 left-0 select-none pointer-events-none group-hover:left-1/2 transition-all duration-1000 opacity-20">VISITORS</p>
              <p className="text-rose-100 text-lg mb-12 leading-relaxed font-medium max-w-lg mx-auto xl:mx-0">
                Create a high-impact chart showing website visitors per day (Mon-Fri). Apply <b>Orange</b> coloring and <b>'o' markers</b> for a modern analytical feel.
              </p>

               <button 
                  onClick={() => runDemo('exercise')}
                  className="bg-slate-950 text-white hover:bg-black px-12 py-5 rounded-3xl text-xs font-black transition-all shadow-2xl flex items-center group/btn active:scale-95 border border-white/10 uppercase tracking-[0.2em] mx-auto xl:mx-0"
               >
                 <Play className="w-5 h-5 mr-4 fill-rose-500 text-rose-500 group-hover/btn:scale-125 transition-transform" />
                 SUBMIT ANALYTICAL PLOT
               </button>
            </div>

            <div className="w-full xl:w-96 relative">
               <div className="bg-[#0c0c0c]/80 backdrop-blur-xl rounded-[4rem] border border-white/10 p-10 relative shadow-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-700">
                  <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
                    <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40 ring-2 ring-rose-500/10"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40 ring-2 ring-rose-500/10"></div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-600 font-black uppercase tracking-[0.3em] italic opacity-50">Web_Visitors.png</span>
                  </div>

                  {/* Mock Visual representation */}
                  <div className="h-44 flex items-end justify-center relative px-4">
                     <svg className="w-full h-full" viewBox="0 0 100 80">
                        {/* Orange line with markers */}
                        <polyline points="0,60 25,40 50,30 75,35 100,10" fill="none" stroke="#f97316" strokeWidth="3" />
                        <circle cx="25" cy="40" r="3" fill="#f97316" className="animate-pulse" />
                        <circle cx="50" cy="30" r="3" fill="#f97316" />
                        <circle cx="75" cy="35" r="3" fill="#f97316" />
                        <circle cx="100" cy="10" r="4" fill="#fff" stroke="#f97316" strokeWidth="2" />
                     </svg>
                     <div className="absolute top-0 right-0 p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <span className="text-[8px] font-bold text-slate-500 uppercase">Live Preview</span>
                     </div>
                  </div>
                  
                  <div className="mt-10 flex items-center justify-center gap-3 text-white/20 text-[10px] font-black uppercase tracking-[0.4em] select-none">
                     <Brush className="w-3 h-3" />
                     Design Validated
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MplColors;
