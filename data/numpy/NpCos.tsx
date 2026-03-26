import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, Waves, MoveDiagonal, TrendingUp, AlertTriangle, RotateCw, Activity } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(4);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix
        const rows = val.map(row => ` [${row.map(NumpySandbox._format).join('  ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.map(NumpySandbox._format).join(' ')}]`; // Vector
    }
    return String(val);
  },

  np: {
    pi: Math.PI,
    array: (data: any) => data,
    cos: (arr: any) => Array.isArray(arr) ? arr.map(v => Math.cos(v)) : Math.cos(arr),
    sin: (arr: any) => Array.isArray(arr) ? arr.map(v => Math.sin(v)) : Math.sin(arr),
    deg2rad: (arr: any) => Array.isArray(arr) ? arr.map(v => v * (Math.PI / 180)) : arr * (Math.PI / 180),
    linspace: (start: number, stop: number, num: number) => {
      const step = (stop - start) / (num - 1);
      return Array.from({ length: num }, (_, i) => start + step * i);
    },
    arange: (start: number, stop: number) => Array.from({ length: stop - start }, (_, i) => start + i),
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
       .replace(/np\.pi/g, 'Math.PI')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const codeToRun = `
        const np = NumpySandbox.np;
        const print = customPrint;
        ${sanitizedCode}
      `;
      const executor = new Function('NumpySandbox', 'customPrint', codeToRun);
      executor(NumpySandbox, customPrint);
      return outputBuffer.join('\n');
    } catch (e: any) {
      return `Error: ${e.message}`;
    }
  }
};

export default function NpCosModule() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title, description, color="blue" }: any) => {
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
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Trigonometry Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'CALCULATING...' : 'EXECUTE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px]">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Radiant Result
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Oscillatory data stream'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em]">Vectorized Periodic Function</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">cos</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Compute the cosine of each element in an array with high-precision vectorized trigonometry. Fundamental for signal processing and cyclical data features.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Waves size={24} className="text-blue-400" /> Wave Analysis
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <nav className="sticky top-12 space-y-5">
              {[
                { id: 'concept', label: '1. Core Concept', icon: BookOpen },
                { id: 'math', label: '2. Spacing & Units', icon: Activity },
                { id: 'usage', label: '3. Periodic Usage', icon: Zap },
                { id: 'apps', label: '4. Case Studies', icon: MoveDiagonal }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-125 transition-transform duration-700">
                  <RotateCw size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4">
                  <Lightbulb size={20} /> Pro Concept
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  NumPy uses <span className="text-blue-300 font-black underline underline-offset-4 decoration-blue-500/30">radians only</span>. Most beginner errors occur when inputs are passed in degrees. Always convert first!
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Target size={20} /> Cycle Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  For cyclical features like time-of-day, use <code className="text-indigo-300">cos(2π * time / 24)</code> to ensure midnight and midnight-1 are close in feature space.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. What is np.cos?" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl">
                         <span className="text-blue-400 font-bold italic">np.cos()</span> applies the cosine function element-wise to your array, outputting values between <span className="text-blue-400 italic">-1 and 1</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Signal Proc", desc: "Digital wave forms", icon: "📊" },
                           { label: "Game Physics", desc: "Smooth rotation/vibe", icon: "🎮" },
                           { label: "Waves", desc: "Fluid simulation", icon: "🌊" },
                           { label: "ML Cycles", desc: "Temporal features", icon: "🤖" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="blue"
                    title="Simple Trig Test"
                    description="Calculating standard cosine values for 0, 90, and 180 degrees (in radians)."
                    code={`import numpy as np\n\n# np.pi/2 = 90 deg, np.pi = 180 deg\narr = np.array([0, np.pi/2, np.pi])\n\nresult = np.cos(arr)\n\nprint("Cosine Values:")\nprint(result)`} 
                    output="Cosine Values:\n[ 1.0000  0.0000 -1.0000]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'math' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="2. Degrees vs Radians Logic" color="amber" />
                   
                   <div className="bg-amber-950/10 border border-amber-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                         <AlertTriangle size={140} />
                      </div>
                      <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-8">
                         NumPy universal functions <span className="text-amber-400 font-black underline underline-offset-8 decoration-amber-500/30">do not understand degrees</span>. You must use conversion tools before processing.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="bg-black/40 p-10 rounded-3xl border border-amber-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-amber-400 mb-4">np.deg2rad()</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Standard conversion utility</span>
                         </div>
                         <div className="bg-black/40 p-10 rounded-3xl border border-amber-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-amber-400 mb-4">arr * π / 180</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Manual conversion logic</span>
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="emerald"
                    title="Safe Conversion Workflow"
                    description="Correctly mapping human-readable degrees into machine-friendly radians."
                    code={`import numpy as np\n\nangles = np.array([0, 90, 180])\n\n# Convert Degrees → Radians\nradians = np.deg2rad(angles)\nresult = np.cos(radians)\n\nprint("Result from Degrees:")\nprint(result)`} 
                    output="Result from Degrees:\n[ 1.0000  0.0000 -1.0000]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="3. Smooth Curves & Waveforms" color="emerald" />
                   
                   <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <Waves size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <Waves className="text-emerald-500" size={28} /> Visualizing the Wave
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                        Generate a high-resolution range to see the smooth oscillation of the cosine waveform.
                     </p>
                     
                     <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-10 overflow-hidden">
                        <div className="flex items-end justify-between h-32 gap-1 group-hover:gap-2 transition-all">
                           {Array.from({ length: 40 }).map((_, i) => (
                              <div key={i} className="flex-1 bg-emerald-500/20 border-t border-emerald-500/40 rounded-full transition-all hover:bg-emerald-500/60" 
                                style={{ height: `${50 + 50 * Math.cos(i * (Math.PI * 2 / 39))}%` }}>
                              </div>
                           ))}
                        </div>
                     </div>

                     <CodeExample 
                        color="emerald"
                        title="High-Res Linspace Wave"
                        description="Creating a smooth wave pattern between 0 and 2π."
                        code={`import numpy as np\n\nx = np.linspace(0, 2*np.pi, 100)\ny = np.cos(x)\n\nprint(f"Total points generated: {len(y)}")\nprint(f"First 5: {y[:5]}")`} 
                        output="Total points generated: 100\nFirst 5: [1.0000 0.9980 0.9921 0.9823 0.9686]" 
                      />
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'apps' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={MoveDiagonal} title="4. Real-World Case Studies" color="rose" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group hover:bg-slate-800/60 transition-all border-b-4 border-b-rose-500/20">
                         <div className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                            <Activity size={16} /> Seasonal Feature Engineering
                         </div>
                         <CodeExample 
                           color="rose"
                           title="Cyclical Time Encoding"
                           code={`import numpy as np\n\ntime = np.arange(0, 24)\n# Map 24h into a 2π cycle\nfeature = np.cos(2 * np.pi * time / 24)\n\nprint("Hour vs Feature Intensity:")\nprint(f"0h: {feature[0]:.2f}")\nprint(f"12h: {feature[12]:.2f}")`} 
                           output="Hour vs Feature Intensity:\n0h: 1.00\n12h: -1.00" 
                         />
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group hover:bg-slate-800/60 transition-all border-b-4 border-b-rose-500/20">
                         <div className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                            <Waves size={16} /> Physics Simulation
                         </div>
                         <CodeExample 
                           color="rose"
                           title="Oscillation position"
                           code={`import numpy as np\n\namplitude = 5\ntime = np.linspace(0, 10, 5)\nposition = amplitude * np.cos(time)\n\nprint("Object Positions:")\nprint(position)`} 
                           output="Object Positions:\n[ 5.0000 -4.5056  2.0837  1.4239 -4.1953]" 
                         />
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RotateCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-blue-400 italic font-light">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                            Convert a sequence of standard human angles <span className="text-white font-bold">[0, 30, 60, 90]</span> into radians and apply the vectorized <span className="text-blue-400 font-bold underline decoration-blue-500/30 underline-offset-8">cosine transform</span>.
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Conversion Challenge"
                           code={`import numpy as np\n\nangles = np.array([0, 30, 60, 90])\n\n# TASK: Convert to radians and compute cos\nradians = np.deg2rad(angles)\nresult = np.cos(radians)\n\nprint("Final Precision Trigonometry Metrics:")\nprint(result)`} 
                           output="Final Precision Trigonometry Metrics:\n[ 1.0000  0.8660  0.5000  0.0000]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Foundation</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Mastering Periodic Functions v9.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Oscillatory Signal Processing with Zero Loop Overhead
         </p>
      </footer>
    </div>
  );
}
