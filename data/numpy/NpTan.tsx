import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, TrendingUp, Compass, Gauge, Boxes, FlaskConical, LineChart, Binary } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') {
        if (!isFinite(val)) return val > 0 ? 'inf' : '-inf';
        return Number.isInteger(val) ? val.toFixed(1) : val.toExponential ? (Math.abs(val) > 1e4 ? val.toExponential(4) : val.toFixed(4)) : val.toFixed(4);
    }

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix
        const rows = val.map(row => ` [${row.map(v => NumpySandbox._format(v)).join('  ')}]`);
        return newFunction(rows);
      }
      return `[${val.map(v => NumpySandbox._format(v)).join(' ')}]`; // Vector
    }
    return String(val);
  },

  np: {
    array: (data: any) => JSON.parse(JSON.stringify(data)),
    pi: Math.PI,
    tan: (x: any) => {
        if (Array.isArray(x)) return x.map(Math.tan);
        return Math.tan(x);
    },
    sin: (x: any) => Array.isArray(x) ? x.map(Math.sin) : Math.sin(x),
    cos: (x: any) => Array.isArray(x) ? x.map(Math.cos) : Math.cos(x),
    deg2rad: (x: any) => {
        const factor = Math.PI / 180;
        return Array.isArray(x) ? x.map(v => v * factor) : x * factor;
    },
    linspace: (start: number, stop: number, num: number) => {
        const step = (stop - start) / (num - 1);
        return Array.from({ length: num }, (_, i) => start + (step * i));
    },
    clip: (x: any, min: number, max: number) => {
        const resolve = (v: number) => Math.min(Math.max(v, min), max);
        return Array.isArray(x) ? x.map(resolve) : resolve(x);
    },
    abs: (x: any) => Array.isArray(x) ? x.map(Math.abs) : Math.abs(x)
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    const customPrint = (...args: any[]) => {
      outputBuffer.push(args.map(arg => NumpySandbox._format(arg)).join(' '));
    };

    const sanitizedCode = code
       .replace(/import numpy as np/g, '')
       .replace(/import matplotlib.pyplot as plt/g, '')
       .replace(/plt\..+\(.*\)/g, '')
       .replace(/np\.pi/g, 'NumpySandbox.np.pi')
       .replace(/np\.tan\((.+?)\)/g, 'np.tan($1)')
       .replace(/np\.deg2rad\((.+?)\)/g, 'np.deg2rad($1)')
       .replace(/np\.clip\((.+?),\s*(.+?),\s*(.+?)\)/g, 'np.clip($1, $2, $3)')
       .replace(/np\.linspace\((.+?)\)/g, 'np.linspace($1)')
       .replace(/np\.abs\((.+?)\)/g, 'np.abs($1)')
       .replace(/np\.cos\((.+?)\)/g, 'np.cos($1)')
       .replace(/np\.sin\((.+?)\)/g, 'np.sin($1)')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const g = { inf: Infinity };
      const codeToRun = `
        const np = NumpySandbox.np;
        const print = customPrint;
        const inf = g.inf;
        ${sanitizedCode}
      `;
      const executor = new Function('NumpySandbox', 'customPrint', 'g', codeToRun);
      executor(NumpySandbox, customPrint, g);
      return outputBuffer.join('\n');
    } catch (e: any) {
      return `Error: ${e.message}`;
    }
  }
};

function newFunction(rows: string[]) {
  return `[${rows.join('\n ')}]`;;
}

export default function NpTan() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8 font-sans">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5 font-sans font-black`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left font-sans font-black">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title, description, color="indigo" }: any) => {
    const [sandboxCode, setSandboxCode] = useState(code);
    const [sandboxOutput, setSandboxOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const handleRun = async () => {
      setIsRunning(true);
      const res = await NumpySandbox.execute(sandboxCode);
      setSandboxOutput(res);
      setIsRunning(false);
    };

    const runColor = {
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30 font-sans font-black',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30 font-sans font-black',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30 font-sans font-black',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30 font-sans font-black',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30 font-sans font-black',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30 font-sans font-black',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30 font-sans font-black',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl font-sans">
          <div className="flex items-center gap-4 text-left font-sans font-black">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans font-black`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans font-black">Geometric Ratio Terminal</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans font-black">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none font-sans font-black`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'RESOLVING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800 font-sans">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-indigo-300 outline-none resize-none selection:bg-indigo-500/20 font-sans font-black"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans font-black">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-white font-sans font-black">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans font-black"></div> Vectorized Ratio Result
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Ratio resolution pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-600/40 selection:text-white font-sans antialiased overflow-x-hidden font-sans">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6 font-sans">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617] font-sans"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px] font-sans"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left font-sans font-black">
          <div className="flex-1 font-sans font-black">
            <div className="flex items-center gap-6 mb-10 font-sans font-black">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent font-sans"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Vectorized Tangential Resolve</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left font-sans font-black">
               np.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic font-sans font-black">tan</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold font-sans font-black">
               Calculate the <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Coordinate Slope</span> ratios. Master the primary geometric engine for game development rotations, signal periodicity, and physics simulations with vectorized C-level precision.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans font-black">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black font-sans font-black">
               <Compass size={24} className="text-indigo-400 font-sans font-black" /> Slope Resolver
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left font-sans font-black">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left font-sans">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans">
              {[
                { id: 'concept', label: '1. Geometric Theory', icon: BookOpen },
                { id: 'atomic', label: '2. Basic Vector tan', icon: Compass },
                { id: 'radians', label: '3. Radian Resolution', icon: Gauge },
                { id: 'asymp', label: '4. Asymptote handling', icon: Activity },
                { id: 'pro', label: '5. Senior Geometric Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic font-sans font-black font-sans font-black font-sans font-black' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans font-black font-sans font-black font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <LineChart size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black font-sans">
                  <Lightbulb size={20} /> Geometric Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold font-sans">
                  The Tangent function represents the <span className="text-indigo-300 font-black font-sans italic">Ratio of Sine to Cosine</span>. It defines the slope of a line passing through the origin at a given angle.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left font-sans">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <Binary size={20} /> Periodic Resolve
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold font-sans font-black">
                  Tangent is a periodic function that repeats every <code className="text-indigo-300 font-black font-sans italic">π</code> radians, creating vertical asymptotes where cosine resolves to zero.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <AlertTriangle size={20} /> Domain Warning ⚠️
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                  NumPy's <code className="text-rose-300 font-bold font-sans font-black font-sans italic">tan()</code> always expects <span className="text-rose-300 font-bold font-sans font-black underline italic font-sans">Radians</span>. Inputting degrees directly will yield mathematically incorrect ratios.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans font-black">
                <section>
                   <SectionHeader icon={Info} title="1. Tangential Ratio Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold font-sans font-black">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans font-black"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans font-black">
                         <span className="text-indigo-400 font-bold italic font-sans font-bold font-sans font-black">Coordinate Slope Resolution</span> is the act of determining the tangent ratio. In NumPy, this power feature is used to resolve rotations in game dev, analyze periodic signal spikes, and simulate physics trajectories.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Slopes", desc: "Angular ratios", icon: "📐" },
                           { label: "Phase", desc: "Signal spikes", icon: "📡" },
                           { label: "Games", desc: "Rotation math", icon: "🎮" },
                           { label: "Physics", desc: "Vector resolve", icon: "🛰️" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20 font-sans font-black font-sans font-black font-sans font-black">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans font-black font-sans">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold font-sans font-black">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group mb-16 text-left font-sans font-black">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <FlaskConical className="text-indigo-500 font-sans font-black font-sans font-black" size={28} /> The Fundamental Ratio
                      </h4>
                      <div className="bg-black/40 p-8 rounded-2xl border border-indigo-500/10 font-mono text-indigo-300 font-sans font-black">
                          tan(x) = sin(x) / cos(x)
                      </div>
                      <p className="mt-8 text-slate-400 italic">Note: As cosine approaches 0, the tangent ratio approaches infinity, creating vertical asymptotes.</p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'atomic' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Compass} title="2. Atomic Vector Tangent" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black">
                      Compute the <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">Tangential Ratio</span> for an entire 1D vector of radians instantly.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Scalar Ratio Sandbox"
                    description="Executing np.tan on a 45-degree equivalent radian constant."
                    code={`import numpy as np\n\nangle = np.pi / 4  # 45 degrees\nresult = np.tan(angle)\n\nprint("Determined Tangent Ratio:")\nprint(result)`} 
                    output="Determined Tangent Ratio:\n1.0" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'radians' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Gauge} title="3. Radian Resolution Protocol" color="violet" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans font-black">
                      Safely convert input <span className="text-violet-400 font-bold font-sans font-black italic">Degrees</span> to the mandatory Radian system using the deg2rad engine.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="Radian Resolver Sandbox"
                    description="Executing tan on a converted degree-vector [0, 45, 90]."
                    code={`import numpy as np\n\ndegrees = np.array([0, 45, 90])\n\n# Mandatory Conversion\nradians = np.deg2rad(degrees)\nresult = np.tan(radians)\n\nprint("Degree-to-Radian Ratios:")\nprint(result)`} 
                    output="Degree-to-Radian Ratios:\n[0.0 1.0 inf]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'asymp' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="4. Asymptote & Infinity Management" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                     Manage explosive <span className="text-rose-400 font-black underline decoration-rose-500/30 underline-offset-8">Asymptotic Growth</span> by clipping output ranges or avoiding unstable domain points.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Asymptote Shield Terminal"
                    description="Executing clipped tan to manage vertical spikes near pi/2."
                    code={`import numpy as np\n\nx = np.linspace(-np.pi, np.pi, 10)\n\n# Raw results (with spikes)\nraw = np.tan(x)\n\n# Clipped results (safe visualization)\nsafe = np.clip(np.tan(x), -10, 10)\n\nprint("Safe Clipped Ratios:")\nprint(safe)`} 
                    output="Safe Clipped Ratios:\n[0.0 -0.7265 -3.0777 -10.0 -3.0777 0.0 3.0777 10.0 3.0777 -0.0]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Geometric Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black font-sans font-black">
                            <Scaling size={16} /> Signal Spike Filter
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Avoid unstable points by filtering where cosine is near zero: <code className="text-cyan-300">np.abs(np.cos(x)) &gt; 1e-5</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black">
                            <LineChart size={16} /> Trig Equalities
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Verify the ratio equality manually: <code className="text-emerald-300">np.sin(x) / np.cos(x)</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Compass size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black font-sans">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black font-sans font-black font-sans font-black">
                            ⚡ Geometric <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black">Resolution hub</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold font-sans font-black font-sans font-black font-sans">
                             Challenge: Compute the <span className="text-white font-bold italic font-sans font-bold font-sans font-black font-sans font-black">Tangential Ratios</span> for [0, 30, 45, 60] degrees!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Dataset Ratio Lab"
                           code={`import numpy as np\n\ndegrees = np.array([0, 30, 45, 60])\n\n# Convert to radians\nradians = np.deg2rad(degrees)\n\n# Resolve tangent ratios\nratios = np.tan(radians)\n\nprint("Determined Slope Ratios:")\nprint(ratios)`} 
                           output="Determined Slope Ratios:\n[0.0 0.5774 1.0 1.7321]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black font-sans">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black font-sans font-black font-sans font-black">Ratio Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
            High-Performance Tangent Resolution with asymptomatic clipping and Radian system resolution
         </p>
      </footer>
    </div>
  );
}
