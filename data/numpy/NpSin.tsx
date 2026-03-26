import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Waves, TrendingUp, Circle, Binary, Ruler } from 'lucide-react';

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
    sin: (x: any) => Array.isArray(x) ? x.map(v => Math.sin(v)) : Math.sin(x),
    deg2rad: (x: any) => Array.isArray(x) ? x.map(v => v * Math.PI / 180) : (x * Math.PI / 180),
    linspace: (start: number, stop: number, num: number) => {
        const step = (stop - start) / (num - 1);
        return Array.from({ length: num }, (_, i) => start + (step * i));
    }
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
       .replace(/2\s*\*\s*np\.pi/g, '(2 * Math.PI)') // Handle 2*np.pi
       .replace(/np\.pi\/2/g, '(Math.PI / 2)')
       .replace(/np\.pi/g, 'Math.PI')
       .replace(/np\.sin\((.+?)\)/g, 'np.sin($1)')
       .replace(/np\.deg2rad\((.+?)\)/g, 'np.deg2rad($1)')
       .replace(/np\.linspace\((.+?),\s*(.+?),\s*(.+?)\)/g, 'np.linspace($1, $2, $3)')
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

export default function NpSin() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left font-sans font-black">{title}</h2>
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30 font-sans',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30 font-sans',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30 font-sans',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30 font-sans',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30 font-sans',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30 font-sans',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30 font-sans',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl font-sans">
          <div className="flex items-center gap-4 text-left font-sans">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Stochastic Wave Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'OSCILLATING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800 font-sans">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20 font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Wave Resonance Resolution
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Wave resolution pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/40 selection:text-white font-sans antialiased overflow-x-hidden font-sans">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617] font-sans"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left font-sans">
          <div className="flex-1 font-sans">
            <div className="flex items-center gap-6 mb-10 font-sans">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Vectorized Harmonic Motion</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">sin</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold">
               Calculate the <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">Perfect Sine Wave</span>. From sound oscillations to neural network periodic activation, master the primary trigonometric engine that transforms radians into high-precision vectors of harmonic motion.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <Waves size={24} className="text-blue-400 font-sans" /> Harmonic Vector
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans">
              {[
                { id: 'concept', label: '1. Harmonic Motion Theory', icon: BookOpen },
                { id: 'unit', label: '2. Unit Circle & Radians', icon: Circle },
                { id: 'wave', label: '3. Wave Generation', icon: Waves },
                { id: 'physics', label: '4. Oscillation Physics', icon: Activity },
                { id: 'pro', label: '5. Senior Wave Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95 text-left font-sans italic' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold font-sans">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <TrendingUp size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Physics Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold font-sans">
                  The sine function creates the $Y-coordinate$ as a point travels around the <span className="text-blue-300 font-black font-sans">Unit Circle</span>. It oscillates between -1 and 1, forming the classic sine wave pattern.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black">
                  <Binary size={20} /> Radians Guard
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold">
                  NumPy expects <span className="text-indigo-300 font-black font-sans font-bold font-sans">Radians</span>. If your data is in degrees, you must use <code className="text-indigo-300 font-black font-sans italic">np.deg2rad()</code> before processing.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black">
                  <AlertTriangle size={20} /> Domain Warning
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black">
                  Sine output never exceeds <span className="text-rose-300 font-bold font-sans font-black underline italic">[-1, 1]</span>. If you need bigger waves, multiply the result by a scalar <code className="text-rose-300 font-bold font-sans font-black underline italic">Amplitude</code>.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left">
                <section>
                   <SectionHeader icon={Info} title="1. Harmonic Motion Theory" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans">
                         <span className="text-blue-400 font-bold italic font-sans font-bold font-sans">np.sin()</span> is the vectorized engine for periodic oscillations. It transforms angular inputs into pure harmonic motion, forming the basis for signal processing, wave simulations, and physics.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Signals", desc: "Sound & Light", icon: "📻" },
                           { label: "Oscillation", desc: "Pendulum physics", icon: "⏲️" },
                           { label: "Graphics", desc: "Smooth animations", icon: "🎨" },
                           { label: "ML", desc: "Periodic activation", icon: "⚡" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20 font-sans font-black font-sans">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-blue-950/20 border border-blue-500/30 rounded-[3rem] group mb-16 text-left">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <Scaling className="text-blue-500 font-sans" size={28} /> Periodic Resolution
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic">
                         NumPy evaluates sine <span className="text-blue-400 font-bold font-sans font-black italic">Element-wise</span> across whole arrays, allowing for massive parallel wave generation that would be impossible with standard loops.
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'unit' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Circle} title="2. The Unit Circle Protocol" color="blue" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      Sine maps an <span className="text-blue-400 font-black underline decoration-blue-500/30 underline-offset-8">Angle (θ)</span> to its vertical projection in the unit circle.
                   </p>

                   <CodeExample 
                    color="blue"
                    title="Trigonometric Resolver"
                    description="Calculating sine for foundational radian targets: 0, π/2, and π."
                    code={`import numpy as np\n\n# Radian inputs: 0, 90deg, 180deg\narr = np.array([0, np.pi/2, np.pi])\n\n# Harmonic resolution\nresult = np.sin(arr)\n\nprint("Determined Sine values:")\nprint(result)`} 
                    output="Determined Sine values:\n[0.0 1.0 0.0]" 
                  />
                  
                  <div className="mt-12 p-10 bg-slate-900 border border-slate-800 rounded-3xl text-left">
                     <p className="text-xs text-slate-400 leading-relaxed font-sans font-bold">
                        <span className="text-blue-400 font-black block mb-4">DEGREE CONVERSION NOTICE</span>
                        If you have angles in degrees (0, 90, 180), convert them first:<br/>
                        <code className="text-blue-300 font-black">val = np.sin(np.deg2rad(90))</code> yields <code className="text-white">1.0</code>.
                     </p>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'wave' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Waves} title="3. Full Wave Generation" color="indigo" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans">
                      Construct smooth geometric waves by sampling radians over a <span className="text-indigo-400 font-bold font-sans font-black italic">Linear Space</span> of points.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Sampling Terminal"
                    description="Generating 5 points along a 2π cycle to define a basic wave backbone."
                    code={`import numpy as np\n\n# Sample 0 to 2π over 5 coordinates\nx = np.linspace(0, 2*np.pi, 5)\n\n# Generate sine wave backbone\nwave = np.sin(x)\n\nprint("Wave Coordinates (X):", x)\nprint("\\nWave Magnitude (Y):", wave)`} 
                    output="Wave Coordinates (X): [0.000 1.571 3.142 4.712 6.283]\n\nWave Magnitude (Y): [0.0 1.0 0.0 -1.0 0.0]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'physics' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="4. Pure oscillation Physics" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                     Simulate higher <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">Frequency</span> or amplified <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">Magnitude</span> with simple scalar arithmetic.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Signal Manipulation Hub"
                    description="Executing frequency doubling and amplitude scaling."
                    code={`import numpy as np\n\nx = np.linspace(0, 2*np.pi, 100)\n\n# Higher frequency: Sin(2x)\nhigh_freq = np.sin(2 * x)\n\n# Bigger wave: 2 * Sin(x)\nbig_wave = 2 * np.sin(x)\n\nprint("High Freq Sample (idx 25):", high_freq[25])\nprint("Big Wave Sample (idx 25):", big_wave[25])`} 
                    output="High Freq Sample (idx 25): -1.000\nBig Wave Sample (idx 25): 2.000" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Wave Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black">
                            <Binary size={16} /> Trig Triple
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Always keep related functions in mind: <code className="text-cyan-300">np.cos()</code> (phase shift) and <code className="text-cyan-300">np.tan()</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans">
                            <Ruler size={16} /> Domain Clipping
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Expect outputs to stay within <code className="text-emerald-300">[-1, 1]</code> for pure sine inputs!
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-blue-800/40 to-indigo-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Waves size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black">
                            ⚡ Sound Wave <span className="text-blue-400 italic font-light font-sans font-bold font-sans font-black">Simulation hub</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans">High-Frequency Sine Pulse</span> across 100 sample points!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Wave Pulse Resolver"
                           code={`import numpy as np\n\n# Sample 0 to 2π over 100 points\nx = np.linspace(0, 2*np.pi, 100)\n\n# Generate high-freq sine wave (freq=10)\nwave = np.sin(10 * x)\n\nprint("Determined Wave Pulse Head (first 5):")\nprint(wave[:5])`} 
                           output="Determined Wave Pulse Head (first 5):\n[0.0 0.614 0.967 0.923 0.491]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40 font-sans font-black font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black">Harmonic Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black">
            High-Precision Trigonometric Serialization with Vectorized Radian Evaluation
         </p>
      </footer>
    </div>
  );
}
