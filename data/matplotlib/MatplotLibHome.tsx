import React, { useState, useEffect } from 'react';
import { 
  Play, Info, Lightbulb, Zap, BookOpen, Scaling, 
  BarChart3, LineChart, PieChart, MousePointer2, 
  Terminal, Layout, CheckCircle2, AlertCircle, 
  TrendingUp, Activity, FlaskConical, Boxes, 
  Settings, Grid3X3, Palette, GraduationCap, 
  ArrowRight, Sparkles, Code2, Presentation,
  History, Target, Gauge, Layers
} from 'lucide-react';

// Specialized Matplotlib Mock Library for Browser Execution
const MplSandbox = {
  _format: (val: any) => {
    if (typeof val === 'string') return `"${val}"`;
    if (Array.isArray(val)) return `[${val.join(', ')}]`;
    return String(val);
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    let plotData: any[] = [];
    let plotMeta = { title: '', xlabel: '', ylabel: '', grid: false };

    const customPrint = (...args: any[]) => {
      outputBuffer.push(args.map(arg => MplSandbox._format(arg)).join(' '));
    };

    const plt = {
      plot: (x: any[], y: any[], format: string = '') => {
        plotData.push({ type: 'line', x, y, format });
      },
      bar: (x: any[], y: any[]) => {
        plotData.push({ type: 'bar', x, y });
      },
      scatter: (x: any[], y: any[]) => {
        plotData.push({ type: 'scatter', x, y });
      },
      title: (t: string) => { plotMeta.title = t; },
      xlabel: (l: string) => { plotMeta.xlabel = l; },
      ylabel: (l: string) => { plotMeta.ylabel = l; },
      grid: (val: boolean = true) => { plotMeta.grid = val; },
      show: () => { /* Handled by renderer */ }
    };

    const sanitizedCode = code
      .replace(/import matplotlib\.pyplot as plt/g, '')
      .replace(/plt\./g, 'plt.')
      .replace(/print\((.+?)\)/g, 'customPrint($1)');

    try {
      const executor = new Function('plt', 'customPrint', sanitizedCode);
      executor(plt, customPrint);
      return { output: outputBuffer.join('\n'), plotData, plotMeta };
    } catch (e: any) {
      return { output: `Error: ${e.message}`, plotData: [], plotMeta: {} };
    }
  }
};

const PlotRenderer = ({ data, meta }: any) => {
  if (!data || data.length === 0) return (
    <div className="flex flex-col items-center justify-center h-64 text-slate-600 border-2 border-dashed border-slate-800 rounded-3xl animate-pulse">
       <LineChart size={48} className="mb-4 opacity-20" />
       <p className="text-sm font-medium italic">Visualization transmission pending...</p>
    </div>
  );

  return (
    <div className="bg-[#020617] p-8 rounded-[3rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
         <TrendingUp size={200} />
      </div>

      <div className="text-center mb-8">
        <h4 className="text-xl font-black text-white tracking-tight">{meta.title || 'Untitled Visualization'}</h4>
        <div className="flex justify-center gap-10 mt-4 h-64 items-end">
          {data[0]?.type === 'line' && (
             <div className="relative w-full h-full p-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200">
                  {/* Grid */}
                  {meta.grid && [0, 50, 100, 150].map(y => (
                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#1e293b" strokeDasharray="4" />
                  ))}
                  {/* Path */}
                  <path 
                    d={`M ${data[0].x.map((x:any, i:any) => `${(i / (data[0].x.length - 1)) * 400},${200 - (data[0].y[i] / Math.max(...data[0].y)) * 180}`).join(' L ')}`}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                  {/* Markers */}
                  {data[0].x.map((x:any, i:any) => (
                    <circle 
                      key={i}
                      cx={(i / (data[0].x.length - 1)) * 400} 
                      cy={200 - (data[0].y[i] / Math.max(...data[0].y)) * 180} 
                      r="6" 
                      fill="#064e3b"
                      stroke="#10b981"
                      strokeWidth="2"
                    />
                  ))}
                </svg>
             </div>
          )}
        </div>
        <div className="flex justify-between px-4 mt-6">
           <span className="text-[10px] font-black text-emerald-500/60 uppercase tracking-widest">{meta.xlabel || 'Time / Step'}</span>
           <span className="text-[10px] font-black text-emerald-500/60 uppercase tracking-widest leading-none rotate-90 origin-right transition-transform">{meta.ylabel || 'Value / Scalar'}</span>
        </div>
      </div>
    </div>
  );
};

export default function MatplotLibHome() {
  const [activeTab, setActiveTab] = useState('intro');
  const [plotResult, setPlotResult] = useState<any>(null);

  const SectionHeader = ({ icon: Icon, title, color="emerald" }: any) => (
    <div className="flex items-center gap-6 mb-12">
      <div className={`p-4 rounded-[1.5rem] bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={32} />
      </div>
      <h2 className="text-4xl font-black text-white tracking-tighter leading-none">{title}</h2>
    </div>
  );

  const CodeSandbox = ({ code, title, description, color="emerald" }: any) => {
    const [sandboxCode, setSandboxCode] = useState(code);
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
        handleRun();
    }, []);

    const handleRun = async () => {
      setIsRunning(true);
      const res = await MplSandbox.execute(sandboxCode);
      setPlotResult(res);
      setTimeout(() => setIsRunning(false), 500);
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-[3rem] overflow-hidden mb-16 shadow-2xl transition-all hover:border-slate-700/60 group">
        <div className="bg-slate-900/90 px-10 py-6 border-b border-slate-800 flex justify-between items-center backdrop-blur-3xl">
          <div className="flex items-center gap-5">
             <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse"></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] block mb-1">Visual Studio Module</span>
                <p className="text-[11px] text-slate-400 font-medium italic leading-none">{description}</p>
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-black py-3 px-8 rounded-2xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50 tracking-[0.2em]"
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'RESOLVING...' : 'EXECUTE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="p-10 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800 min-h-[300px]">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full bg-transparent text-emerald-300 outline-none resize-none selection:bg-emerald-500/20 font-sans font-medium"
              spellCheck={false}
            />
          </div>
          <div className="p-10 bg-slate-950/40 relative">
            <div className="text-slate-700 mb-8 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-3">
              <div className="w-2 h-4 bg-emerald-500 rounded-full"></div> Renderer Output
            </div>
            {plotResult && <PlotRenderer data={plotResult.plotData} meta={plotResult.plotMeta} />}
            {plotResult?.output && (
                <pre className="mt-8 p-6 bg-black/40 rounded-2xl border border-slate-800 text-amber-400 font-mono text-xs overflow-x-auto whitespace-pre-wrap">
                    {plotResult.output}
                </pre>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-emerald-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-48 pb-40 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-0 w-[1400px] h-[1400px] bg-emerald-500/5 rounded-full blur-[160px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-[0.4em] mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
               <Presentation size={14} /> Data Visualization Core
            </div>
            <h1 className="text-[12rem] font-black text-white mb-10 tracking-tighter leading-[0.75] drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
               Matplot<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.05em]">lib</span>
            </h1>
            <p className="text-4xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light tracking-tight mb-20">
               Translate numeric datasets into <span className="text-white font-semibold underline decoration-emerald-500/30 underline-offset-[12px]">Cinematic Visualizations</span>. The structural backbone for Python’s analytical storytelling.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 scale-110">
               <div className="px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-[11px] font-black text-slate-300 backdrop-blur-3xl shadow-2xl flex items-center gap-4 group hover:border-emerald-500/30 transition-all">
                  <LineChart size={24} className="text-emerald-500" /> Pattern Discovery
               </div>
               <div className="px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-[11px] font-black text-slate-300 backdrop-blur-3xl shadow-2xl flex items-center gap-4 group hover:border-emerald-500/30 transition-all">
                  <TrendingUp size={24} className="text-cyan-500" /> Trend Analysis
               </div>
               <div className="px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-[11px] font-black text-slate-300 backdrop-blur-3xl shadow-2xl flex items-center gap-4 group hover:border-emerald-500/30 transition-all">
                  <BarChart3 size={24} className="text-emerald-400" /> Performance Metrics
               </div>
            </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-24 pb-48">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          {/* Section Navigation */}
          <aside className="lg:w-[400px] flex-shrink-0 sticky top-12">
            <nav className="space-y-4">
              {[
                { id: 'intro', label: '1. Visualization Nexus', icon: BookOpen },
                { id: 'setup', label: '2. Environment Build', icon: Settings },
                { id: 'plot', label: '3. Your First Graph', icon: LineChart },
                { id: 'catalog', label: '4. The Plot Library', icon: Grid3X3 },
                { id: 'pro', label: '5. Senior Insights', icon: GraduationCap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-6 px-10 py-8 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-emerald-600 border-emerald-500 text-white shadow-[0_20px_80px_rgba(16,185,129,0.3)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} className={activeTab === tab.id ? 'text-white' : 'text-slate-600'} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-20 p-12 bg-emerald-500/5 border border-emerald-500/20 rounded-[4rem] group relative overflow-hidden text-left shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-emerald-500/10 group-hover:scale-110 transition-transform duration-1000">
                  <TrendingUp size={200} />
               </div>
               <h4 className="flex items-center gap-3 text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-8 border-b border-emerald-500/10 pb-4 leading-none">
                  <Lightbulb size={20} /> Core Philosophy 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[2] font-semibold italic">
                  "If NumPy handles the numbers, Matplotlib explains them visually."
               </p>
               <div className="mt-8 flex items-center gap-4 px-6 py-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-[10px] font-black text-emerald-300 uppercase tracking-widest leading-none">
                  <Activity size={16} /> Data Translation
               </div>
            </div>
          </aside>

          {/* Core Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'intro' && (
              <div className="space-y-24 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left">
                <section>
                   <SectionHeader icon={Info} title="1. What is Matplotlib?" color="emerald" />
                   <div className="bg-slate-900/40 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-20 shadow-2xl">
                      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-16 border-l-[12px] border-emerald-600 pl-12 max-w-4xl italic">
                         Turning Numbers into <span className="text-emerald-400 font-bold">Meaningful Stories</span>. Matplotlib is the primary instrument for pattern discovery, trend analysis, and clear scientific data presentation.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {[
                            { title: "Line Charts", desc: "Temporal change", icon: LineChart, color: "emerald" },
                            { title: "Bar Charts", desc: "Categorical comparison", icon: BarChart3, color: "cyan" },
                            { title: "Scatter Plots", desc: "Correlation logic", icon: Sparkles, color: "emerald" },
                            { title: "Histograms", desc: "Density & Distribution", icon: Activity, color: "cyan" },
                            { title: "Pie Charts", desc: "Composition focus", icon: PieChart, color: "emerald" },
                            { title: "Scientific Plots", desc: "Complex tensors", icon: FlaskConical, color: "cyan" }
                         ].map((item, i) => (
                           <div key={i} className="p-10 rounded-[3rem] bg-black/40 border border-slate-800 hover:border-emerald-500/30 transition-all group/card">
                              <item.icon className={`text-${item.color}-500 mb-8 transition-transform group-hover/card:scale-125`} size={32} />
                              <h5 className="text-[11px] font-black text-slate-300 uppercase tracking-widest mb-3 leading-none italic">{item.title}</h5>
                              <p className="text-xs text-slate-500 leading-relaxed font-bold italic">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                      <div className="p-12 bg-emerald-500/5 border border-emerald-500/20 rounded-[3.5rem] relative group">
                        <div className="absolute top-8 right-8 text-emerald-500/20 group-hover:rotate-12 transition-transform"><GraduationCap size={64}/></div>
                        <h4 className="text-emerald-400 font-black text-xs uppercase tracking-[0.3em] mb-8 border-b border-emerald-500/10 pb-4">Professional Roles</h4>
                        <ul className="space-y-6">
                           {[
                              { role: "Data Scientists", task: "Exploratory analysis" },
                              { role: "Developers", task: "Interactive dashboards" },
                              { role: "Engineers", task: "Physical simulations" }
                           ].map((r, i) => (
                             <li key={i} className="flex items-center gap-4">
                                <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
                                <span className="text-slate-300 font-bold text-sm italic underline decoration-emerald-500/20 underline-offset-4">{r.role}</span>
                                <span className="text-slate-500 text-xs font-semibold">— {r.task}</span>
                             </li>
                           ))}
                        </ul>
                      </div>
                      <div className="p-12 bg-cyan-500/5 border border-cyan-500/20 rounded-[3.5rem] relative group">
                        <div className="absolute top-8 right-8 text-cyan-500/20 group-hover:-rotate-12 transition-transform"><Presentation size={64}/></div>
                        <h4 className="text-cyan-400 font-black text-xs uppercase tracking-[0.3em] mb-8 border-b border-cyan-500/10 pb-4">Real-World Utility</h4>
                        <ul className="space-y-6">
                           {[
                              { app: "Stock Navigation", icon: TrendingUp },
                              { app: "Academic Grading", icon: GraduationCap },
                              { app: "Commerce Analytics", icon: BarChart3 }
                           ].map((a, i) => (
                             <li key={i} className="flex items-center gap-4">
                                <a.icon className="text-cyan-500 flex-shrink-0" size={18} />
                                <span className="text-slate-300 font-bold text-sm italic hover:text-cyan-300 transition-colors uppercase tracking-widest leading-none">{a.app}</span>
                             </li>
                           ))}
                        </ul>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'setup' && (
              <div className="space-y-24 animate-in slide-in-from-right duration-700 text-left">
                <section>
                   <SectionHeader icon={Settings} title="2. Environment Build & Integration" color="emerald" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[3.5rem]">
                         <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400"><Terminal size={24}/></div>
                            <h4 className="text-xl font-black text-white italic">Binary Ingestion</h4>
                         </div>
                         <div className="bg-black/60 rounded-3xl p-8 border border-emerald-500/20 group relative">
                            <code className="text-emerald-300 font-mono text-sm">pip install matplotlib</code>
                            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-emerald-400 transition-colors">COPY</button>
                         </div>
                      </div>
                      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[3.5rem]">
                         <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400"><Code2 size={24}/></div>
                            <h4 className="text-xl font-black text-white italic">Import Protocol</h4>
                         </div>
                         <div className="bg-black/60 rounded-3xl p-8 border border-cyan-500/20 group relative overflow-hidden">
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-cyan-500/10"><Sparkles size={80}/></div>
                            <code className="text-cyan-300 font-mono text-sm relative z-10 font-bold uppercase tracking-widest">import matplotlib.pyplot as plt</code>
                         </div>
                         <p className="text-[11px] text-slate-500 font-bold italic mt-8 leading-relaxed">
                            <span className="text-cyan-400 font-black italic">Note:</span> <code className="text-slate-300 font-bold uppercase tracking-widest">pyplot</code> is the main high-level interface for creating charts.
                         </p>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'plot' && (
              <div className="space-y-20 animate-in zoom-in-95 duration-700 text-left">
                <section>
                   <SectionHeader icon={LineChart} title="3. The Genesis Visualization" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed mb-16 italic border-l-8 border-emerald-600 pl-8">
                       Constructing your first <span className="text-emerald-400 font-bold">Vector Line Plot</span>. Execute the protocol below to observe the translation of 1D arrays into coordinate space.
                   </p>

                   <CodeSandbox 
                      title="Plot Module Alpha"
                      description="Executing plt.plot on a linear series."
                      code={`import matplotlib.pyplot as plt\n\n# Coordinate Data\nx = [1, 2, 3, 4]\ny = [10, 20, 25, 30]\n\n# Construct the geometry\nplt.plot(x, y)\n\n# Metadata resolution\nplt.title("My First Graph")\nplt.xlabel("Days")\nplt.ylabel("Value Index")\n\n# Render\nplt.show()`} 
                   />

                   <div className="p-12 bg-emerald-950/20 border border-emerald-500/30 rounded-[3.5rem] relative overflow-hidden group mb-20 text-left italic font-bold">
                      <div className="absolute top-0 right-0 p-12 text-emerald-500/5 group-hover:scale-125 transition-transform duration-1000"><Boxes size={180}/></div>
                      <h4 className="text-white font-black text-2xl mb-12 flex items-center gap-4">
                         <Activity className="text-emerald-500" size={28} /> Component Anatomy
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {[
                            { cmd: "plt.plot()", mean: "Engine for graph construction" },
                            { cmd: "plt.title()", mean: "Master heading resolution" },
                            { cmd: "plt.xlabel()", mean: "X-Axis semantic label" },
                            { cmd: "plt.ylabel()", mean: "Y-Axis semantic label" },
                            { cmd: "plt.show()", mean: "Final buffer transmission" }
                         ].map((c, i) => (
                           <div key={i} className="flex gap-6 items-center p-6 bg-black/40 rounded-3xl border border-slate-800 transition-all hover:bg-black/60">
                              <code className="text-emerald-400 font-mono text-xs font-black uppercase tracking-widest">{c.cmd}</code>
                              <span className="text-xs text-slate-500 font-bold italic border-l border-slate-700 pl-6 uppercase tracking-[0.2em]">{c.mean}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'catalog' && (
              <div className="space-y-24 animate-in slide-in-from-right duration-700 text-left">
                <section>
                   <SectionHeader icon={Grid3X3} title="4. The Architecture Catalog" color="emerald" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                      <div className="space-y-6">
                        <p className="text-xl text-slate-400 leading-[1.8] font-light italic">
                           Matplotlib is a multi-dimensional visualization suite. You will progress through these architectural styles systematically:
                        </p>
                        <div className="flex flex-wrap gap-4 pt-10">
                           {["Line", "Bar", "Scatter", "Histogram", "Pie", "Subplots"].map((tag, i) => (
                              <span key={i} className="px-8 py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-[10px] font-black text-emerald-400 uppercase tracking-widest leading-none rotate-2 hover:rotate-0 transition-transform">
                                 {tag} Module
                              </span>
                           ))}
                        </div>
                      </div>
                      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] flex flex-col items-center justify-center text-center group">
                         <div className="relative mb-8">
                            <PieChart size={80} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                            <BarChart3 size={40} className="text-cyan-400 absolute -bottom-4 -right-4" />
                         </div>
                         <h5 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 font-bold italic">Geometric Library</h5>
                         <p className="text-xs text-slate-400 leading-relaxed font-bold italic">Standardized modules for all data topologies.</p>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-20 animate-in slide-in-from-right duration-700 text-left italic">
                <section>
                   <SectionHeader icon={GraduationCap} title="5. Senior Visualization Insights" color="emerald" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 text-left">
                      <div className="p-12 bg-emerald-950/20 border border-emerald-500/30 rounded-[3.5rem] group hover:bg-emerald-950/40 transition-all">
                         <h4 className="flex items-center gap-4 text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-10 border-b border-emerald-500/10 pb-6 uppercase tracking-widest leading-none">
                            <Sparkles size={18}/> 15+ Years Expert Protocol
                         </h4>
                         <ul className="space-y-10">
                            {[
                               { title: "Start Simple", desc: "Master plot(), bar(), and scatter() fundamentals first." },
                               { title: "Semantic Labeling", desc: "A graph without clear labels is an unsolved puzzle. Annotate everything." },
                               { title: "Meaningful Color", desc: "Use colors to represent logic (e.g., Red for Loss), not as arbitrary decoration." },
                               { title: "Real Data Practice", desc: "Model your daily expenses, screen time, or stock trends to build intuition." }
                            ].map((p, i) => (
                              <li key={i} className="flex gap-6 items-start">
                                 <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
                                 <div>
                                    <h6 className="text-white font-black text-sm mb-2 italic tracking-widest uppercase tracking-widest leading-none underline decoration-emerald-500/20 underline-offset-8 transition-all hover:decoration-emerald-400 duration-500">{p.title}</h6>
                                    <p className="text-xs text-slate-500 leading-relaxed font-bold italic leading-none">{p.desc}</p>
                                 </div>
                              </li>
                            ))}
                         </ul>
                      </div>
                      <div className="space-y-10">
                         <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] text-left italic font-bold">
                            <h5 className="text-cyan-400 font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-3">
                               <Zap size={16}/> Optimized Shortcuts
                            </h5>
                            <code className="block p-5 bg-black/60 rounded-2xl text-cyan-300 text-xs mb-4 font-bold italic tracking-widest leading-none italic font-bold">plt.plot(x, y, 'ro-')</code>
                            <p className="text-[10px] text-slate-500 font-bold italic border-l-4 border-cyan-500 pl-4 uppercase tracking-[0.4em] leading-none">Red (r) + Markers (o) + Solid Line (-)</p>
                         </div>
                         <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] text-left italic font-bold font-sans">
                            <h5 className="text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-3">
                               <Grid3X3 size={16}/> Logic Grid
                            </h5>
                            <code className="block p-5 bg-black/60 rounded-2xl text-emerald-300 text-xs mb-4 font-bold italic tracking-widest leading-none transition-all hover:bg-black/80">plt.grid()</code>
                            <p className="text-[10px] text-slate-500 font-bold italic uppercase tracking-[0.4em] leading-none italic border-l-4 border-emerald-500 pl-4">Enhance spatial readability instantly.</p>
                         </div>
                      </div>
                   </div>

                   <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] group relative overflow-hidden text-left shadow-2xl">
                      <div className="absolute top-0 right-0 p-16 text-rose-500/5 group-hover:scale-125 transition-transform duration-1000"><AlertCircle size={200}/></div>
                      <h4 className="flex items-center gap-4 text-rose-500 font-black text-[11px] uppercase tracking-widest mb-12 border-b border-rose-500/10 pb-6 uppercase tracking-widest leading-none">
                         <TrendingUp className="rotate-180" size={20} /> Beginner Pitfall Resolution
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left italic font-bold uppercase tracking-widest">
                         {[
                            "Forgetting show()", "Axis Anonymity", "Confusing Datassets", "Overloading Grids"
                         ].map((err, i) => (
                           <div key={i} className="flex flex-col items-center gap-4 text-center">
                              <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 font-black">❌</div>
                              <span className="text-[10px] text-slate-500 font-black tracking-[0.2em]">{err}</span>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-emerald-800/40 to-cyan-800/20 border border-emerald-500/30 rounded-[5rem] p-24 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 p-24 opacity-10 group-hover:scale-110 transition-transform duration-[2s]">
                         <LineChart size={240} />
                      </div>
                      <div className="relative z-10 max-w-4xl text-left font-sans italic font-bold uppercase tracking-widest">
                         <h3 className="text-7xl font-black text-white mb-12 tracking-tighter leading-[0.85] italic font-bold uppercase tracking-widest leading-none">
                            ⚡ Interactive <span className="text-emerald-400 font-light italic font-bold uppercase opacity-80 underline decoration-emerald-500/20 underline-offset-8">Progress Lab</span>
                         </h3>
                         <p className="text-3xl text-slate-100 mb-20 font-light leading-relaxed italic border-l-8 border-emerald-500 pl-10 transition-all hover:border-emerald-400">
                             Construct a <span className="text-emerald-300 font-bold italic font-bold uppercase tracking-widest">Study Progress Graph</span> to monitor your efficiency across a 5-day cycle.
                         </p>
                         <CodeSandbox 
                            title="Progress Visualization Studio"
                            code={`import matplotlib.pyplot as plt\n\n# Datasets\ndays = [1, 2, 3, 4, 5]\nstudy_hours = [2, 3, 5, 4, 6]\n\n# Protocol Construction\nplt.plot(days, study_hours, marker='o')\n\n# Metadata resolution\nplt.title("Personal Efficiency Study")\nplt.xlabel("Cycle (Days)")\nplt.ylabel("Investment (Hours)")\nplt.grid()\n\nplt.show()`} 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-48 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-16 group opacity-80 hover:opacity-100 transition-opacity">
         <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-emerald-600 rounded-[2.5rem] flex items-center justify-center font-black text-white text-3xl italic shadow-2xl shadow-emerald-600/40 rotate-12 group-hover:rotate-0 transition-transform duration-700">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.6em] text-[11px] block mb-2 font-bold italic">KnowGrow Static Edu</span>
               <span className="text-slate-600 font-bold text-sm uppercase tracking-widest transition-all hover:text-emerald-500 duration-500 italic">Matplotlib Visual Engine v5.1</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.8em] text-center md:text-right max-w-sm leading-relaxed transition-all hover:text-slate-500">
            Engineered for high-fidelity data visualization education with SVG-integrated chart rendering.
         </p>
      </footer>
    </div>
  );
}