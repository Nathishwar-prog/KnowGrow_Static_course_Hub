import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, Activity, Cpu, CodeXml, Layers, LineChart, MoveHorizontal, ArrowRight } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(1);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Array with Step
        if (val.length === 2 && typeof val[1] === 'number') {
             return `Array: [${val[0].slice(0, 5).map(NumpySandbox._format).join(' ')}${val[0].length > 5 ? ' ...' : ''}]\nStep: ${NumpySandbox._format(val[1])}`;
        }
        const rows = val.map(row => ` [${row.map(NumpySandbox._format).join('  ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.map(NumpySandbox._format).join(' ')}]`; // Vector
    }
    return String(val);
  },

  np: {
    array: (data: any) => data,
    linspace: (start: number, stop: number, num: number = 50, endpoint: boolean = true, retstep: boolean = false) => {
        const div = endpoint ? (num - 1) : num;
        const step = (stop - start) / div;
        const res = [];
        for (let i = 0; i < num; i++) {
            res.push(start + step * i);
        }
        if (retstep) return [res, step];
        return res;
    },
    sin: (x: any) => Array.isArray(x) ? x.map(v => Math.sin(v)) : Math.sin(x),
    exp: (x: any) => Array.isArray(x) ? x.map(v => Math.exp(v)) : Math.exp(x),
    pi: Math.PI
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
       .replace(/2\*np\.pi/g, '(2 * Math.PI)')
       .replace(/np\.linspace\((.+?)\)/g, 'np.linspace($1)')
       .replace(/np\.sin\((.+?)\)/g, 'np.sin($1)')
       .replace(/np\.exp\((.+?)\)/g, 'np.exp($1)')
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

export default function NpLinspace() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left">{title}</h2>
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4 text-left">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Interval Generator Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'GENERATE...' : 'RUN MODULE'}
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
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Sample Data Hub
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Step-based sequence pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6 font-sans">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em]">Numerical Linear Spacing</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">linspace</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans">
               Inject precisely <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">evenly spaced numbers</span> into any interval. The architect's tool for defining smooth plotting domains and simulation time steps.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Scaling size={24} className="text-blue-400" /> Linear Grid
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
                { id: 'concept', label: '1. Interval Theory', icon: BookOpen },
                { id: 'precison', label: '2. Endpoint Logic', icon: Layout },
                { id: 'calc', label: '3. Step Sizing', icon: MoveHorizontal },
                { id: 'graphs', label: '4. Domain Plots', icon: LineChart },
                { id: 'pro', label: '5. Senior Insights', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-110 transition-transform duration-700">
                  <LineChart size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4">
                  <Lightbulb size={20} /> Solver Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Unlike arange(), linspace() is based on the <span className="text-blue-300 font-black">Number of Values</span>, not the step size. It always includes the endpoint by default!
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Activity size={20} /> Precision Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  linspace() maintains high <span className="text-indigo-300 font-black italic underline decoration-indigo-500/30 underline-offset-4 font-sans">floating-point precision</span> across large intervals, making it superior for graph plotting.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                  <AlertTriangle size={20} /> Float Warn
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  linspace() always returns <code className="text-rose-300 font-bold font-sans">float</code> values, even if given integer start/stop points. Never expect direct integer arrays!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Interval Architecture" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left font-sans">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl font-sans">
                         <span className="text-blue-400 font-bold italic font-sans italic">np.linspace()</span> generates a linear sequence of numbers. You define the start, the end, and the <span className="text-blue-400 font-bold italic underline decoration-blue-500/20 underline-offset-8 font-sans">exact sample count</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Graphing", desc: "Build domain X-axes", icon: "📈" },
                           { label: "Simulation", desc: "Fixed time steps", icon: "⏱️" },
                           { label: "ML Scaling", desc: "Feature normalization", icon: "🤖" },
                           { label: "Signals", desc: "Digital wave sampling", icon: "📡" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="blue"
                    title="Linear Space Generation"
                    description="Generating 5 evenly spaced samples between 0 and 10."
                    code={`import numpy as np\n\n# Start=0, Stop=10, Samples=5\narr = np.linspace(0, 10, 5)\n\nprint("Generated Interval:")\nprint(arr)`} 
                    output="Generated Interval:\n[ 0.   2.5  5.   7.5 10. ]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'precison' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. The Endpoint Logic" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans">
                      By default, linspace() <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">includes the stop value</span>. Toggle the endpoint flag to exclude it for open-interval simulations.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Excluding the Stop Point"
                    description="Generating points where 10 is not part of the set."
                    code={`import numpy as np\n\narr = np.linspace(0, 10, 5, endpoint=False)\n\nprint("Open-Interval Sequence:")\nprint(arr)`} 
                    output="Open-Interval Sequence:\n[0. 2. 4. 6. 8.]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'calc' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={MoveHorizontal} title="3. Implicit Step Sizing" color="emerald" />
                   
                   <div className="p-12 bg-emerald-950/20 border border-emerald-500/30 rounded-[3.5rem] p-12 text-left mb-12 relative overflow-hidden group shadow-3xl">
                      <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
                         <Scaling size={240} />
                      </div>
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                         <MoveHorizontal className="text-emerald-500" size={28} /> Automated Delta Computation
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans">
                         While you define the count, NumPy calculates the exact <span className="text-emerald-400 font-bold italic font-sans italic">Step Step</span> (delta). Use <code className="text-white font-black font-sans">retstep=True</code> to retrieve this value.
                      </p>

                      <CodeExample 
                        color="emerald"
                        title="Step Recovery Protocol"
                        description="Retrieving the calculated distance between points."
                        code={`import numpy as np\n\n# Return array AND step size\narr, step = np.linspace(0, 10, 5, retstep=True)\n\nprint(f"Array: {arr}")\nprint(f"Computed Step: {step}")`} 
                        output="Array: [ 0.   2.5  5.   7.5 10. ]\nComputed Step: 2.5" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'graphs' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={LineChart} title="4. Plotting & Domain Spacing" color="cyan" />
                   
                   <div className="p-12 bg-cyan-950/20 border border-cyan-500/30 rounded-[3rem] group">
                      <h4 className="text-white font-black text-2xl mb-8 text-left font-sans">Plotting Sine Waves</h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans">
                         Smooth graphs require high-resolution data. linspace() is the gold standard for generating <span className="text-cyan-400 font-bold italic underline underline-offset-8 decoration-cyan-500/30 font-sans italic">sampling points</span> for trigonometric functions.
                      </p>

                      <CodeExample 
                        color="cyan"
                        title="Trigonometric Resolution"
                        description="Generating 100 points for a smooth sine domain."
                        code={`import numpy as np\n\n# 100 points between 0 and 2π\nx = np.linspace(0, 2*np.pi, 100)\ny = np.sin(x)\n\nprint("X-Sampling High Points (First 5):")\nprint(x[:5])`} 
                        output="X-Sampling High Points (First 5):\n[0.  0.1 0.1 0.2 0.3]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Dev Comparisons" color="amber" />
                   
                   <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 mb-16 text-left font-sans">
                      <h5 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-8 italic font-sans tracking-[0.2em] border-b border-amber-500/10 pb-4">linspace vs arange Architecture</h5>
                      <div className="grid grid-cols-2 gap-12 font-sans">
                         <div className="space-y-4">
                            <span className="text-[10px] text-slate-500 uppercase mb-2 block font-sans font-black tracking-widest leading-none">np.linspace()</span>
                            <div className="text-emerald-400 text-xs font-black italic">✅ Preferred for Plotting</div>
                            <div className="text-emerald-400 text-xs font-black italic">✅ Exact Value Count</div>
                            <div className="text-emerald-400 text-xs font-black italic">✅ High Decimal Precision</div>
                         </div>
                         <div className="space-y-4">
                            <span className="text-[10px] text-slate-500 uppercase mb-2 block font-sans font-black tracking-widest leading-none">np.arange()</span>
                            <div className="text-rose-400 text-xs font-black italic">❌ Decimal Precision Issues</div>
                            <div className="text-rose-400 text-xs font-black italic">✅ Fixed Step Size</div>
                            <div className="text-rose-400 text-xs font-black italic">✅ Exact Integer Slicing</div>
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4">
                            <Layers size={16} /> Exponential Growth
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans">
                            Combine linspace() with exp() to model smooth growth curves.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-cyan-300 text-[10px] font-sans">y = np.exp(np.linspace(0, 5, 50))</code>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-amber-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-amber-500/10 pb-4">
                            <Scaling size={16} /> Reverse Generation
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Set Start &gt; Stop to generate a falling sequence.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-amber-300 text-[10px] font-sans">np.linspace(10, 0, 5)</code>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-blue-800/40 to-indigo-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Activity size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans">
                            🧪 Resolution <span className="text-blue-400 italic font-light font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans text-left">
                             Challenge: Create <span className="text-white font-bold italic font-sans">1000 high-precision points</span> between 0 and 1. Then calculate the step size used by NumPy!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="High-Res Sampling Mission"
                           code={`import numpy as np\n\n# 1000 points with step retrieval\narr, step = np.linspace(0, 1, 1000, retstep=True)\n\nprint(f"First 3 points: {arr[:3]}")\nprint(f"High-Res Step: {step}")`} 
                           output="First 3 points: [0.0 0.001 0.002]\nHigh-Res Step: 0.001" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Interval Sequencing v3.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none">
            High-Precision Linear Intervals for Analytical Modeling
         </p>
      </footer>
    </div>
  );
}
