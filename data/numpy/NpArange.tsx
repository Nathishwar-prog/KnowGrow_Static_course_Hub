import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, TrendingUp, AlertTriangle, Square, Grid, RotateCcw } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(2);

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
    array: (data: any) => data,
    arange: (start: number, stop?: number, step: number = 1) => {
      let actualStart = stop === undefined ? 0 : start;
      let actualStop = stop === undefined ? start : stop;
      
      const result = [];
      if (step > 0) {
        for (let i = actualStart; i < actualStop; i += step) {
          result.push(i);
        }
      } else if (step < 0) {
        for (let i = actualStart; i > actualStop; i += step) {
          result.push(i);
        }
      }
      return result;
    },
    sin: (arr: any[]) => arr.map(v => Math.sin(v)),
    reshape: (arr: any[], rows: number, cols: number) => {
      const result = [];
      for (let i = 0; i < rows; i++) {
        result.push(arr.slice(i * cols, (i + 1) * cols));
      }
      return result;
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
       .replace(/(\w+)\.reshape\((.+?)\)/g, 'np.reshape($1, $2)')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const codeToRun = `
        const np = {
            ...NumpySandbox.np,
            sin: (a) => a.map(v => Math.sin(v))
        };
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

export default function NpArangeModule() {
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
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 group">
        <div className="bg-slate-900/80 px-7 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-md">
          <div className="flex items-center gap-4">
             <div className={`w-2.5 h-2.5 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Interactive Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[11px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-[0.1em]`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'GENERATING...' : 'EXECUTE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[220px]">
          <div className="p-7 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-7 bg-slate-950/60 font-mono text-sm">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Memory Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap">
              {sandboxOutput || output || '// Sequence generation stream'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/40 selection:text-white font-sans antialiased">
      {/* Cinematic Header */}
      <header className="relative pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[160px] -ml-96 -mt-96"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[140px] -mr-[400px] -mb-[400px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-5 mb-10">
            <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <span className="text-blue-400 text-xs font-black uppercase tracking-[0.5em]">Sequence Generation</span>
          </div>
          <h1 className="text-[10rem] font-black text-white mb-12 tracking-tighter leading-[0.8] drop-shadow-2xl">
            np.<span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">arange</span>()
          </h1>
          <p className="text-3xl text-slate-400 max-w-3xl leading-relaxed font-light tracking-tight">
            Create arrays with perfectly even spacing. A high-performance evolution of Python's <code className="text-slate-300 font-bold">range()</code> designed for vector math.
          </p>
          
          <div className="flex flex-wrap gap-5 mt-16 scale-110 origin-left">
            <div className="flex items-center gap-3 px-8 py-5 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-xl shadow-2xl">
               <TrendingUp size={20} className="text-blue-400" /> Vector Spacing
            </div>
            <div className="flex items-center gap-3 px-8 py-5 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-xl shadow-2xl">
               <Grid size={20} className="text-emerald-400" /> Plot Ready
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Navigation Control */}
          <aside className="lg:w-80 flex-shrink-0">
            <nav className="sticky top-12 space-y-5">
              {[
                { id: 'concept', label: '1. Fundamentals', icon: BookOpen },
                { id: 'usage', label: '2. Spacing Logic', icon: Zap },
                { id: 'floating', label: '3. Floating Points', icon: Square },
                { id: 'advanced', label: '4. Matrix Creation', icon: Grid }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-amber-500/5 border border-amber-500/20 rounded-[3rem] p-10 group overflow-hidden relative">
               <div className="absolute -right-8 -bottom-8 p-10 text-amber-500/10 group-hover:scale-125 transition-transform duration-700">
                  <AlertTriangle size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-amber-500 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Precision Note
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Floating point steps may cause tiny gaps. For <span className="text-amber-300 underline underline-offset-4">exact decimal splits</span>, prefer <span className="text-amber-300 font-black italic">np.linspace()</span>.
               </p>
            </div>
            
            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Lightbulb size={20} /> Pro Logic
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  Combine <code className="text-blue-300">np.arange()</code> with <code className="text-blue-300">reshape()</code> to generate test matrices instantly.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="Mastering np.arange" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-2xl">
                      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[10px] border-blue-600 pl-12 max-w-4xl">
                         Generate numbers from <span className="text-blue-400 italic">start</span> to <span className="text-blue-400 italic">stop</span> using a strictly fixed <span className="text-blue-400 italic">step</span> interval.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                         {[
                           { label: "Data Gen", icon: "📊" },
                           { label: "Graphing", icon: "📈" },
                           { label: "Simulations", icon: "🧮" },
                           { label: "ML Tests", icon: "🤖" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2rem] bg-black/50 border border-slate-800 flex flex-col items-center group-hover:border-blue-500/30 transition-all">
                              <span className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-12">
                      <h4 className="text-sm font-black text-blue-500 uppercase tracking-[0.4em] mb-10">Logic Components</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                         <div className="absolute inset-0 flex items-center md:px-24 pointer-events-none opacity-20">
                            <div className="h-px w-full bg-slate-700"></div>
                         </div>
                         {[
                           { name: "start", type: "First Value", desc: "Default is 0" },
                           { name: "stop", type: "Breakpoint", desc: "Value IS NOT included" },
                           { name: "step", type: "Increment", desc: "Spacing between values" }
                         ].map((param, i) => (
                           <div key={i} className="relative z-10 text-center md:text-left">
                              <div className="text-2xl font-black text-white font-mono mb-2">{param.name}</div>
                              <div className="text-xs font-black text-blue-400 uppercase mb-3 italic">{param.type}</div>
                              <p className="text-xs text-slate-500 font-bold">{param.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="Spacing Patterns" color="emerald" />
                   
                   <CodeExample 
                    color="emerald"
                    title="1. Core Generation"
                    description="Standard fixed-step integer sequence."
                    code={`import numpy as np\n\n# Standard numbers: 2 to 10 (stop NOT included)\narr = np.arange(2, 10)\n\nprint("Integer Sequence:")\nprint(arr)`} 
                    output="Integer Sequence:\n[2 3 4 5 6 7 8 9]" 
                  />

                   <CodeExample 
                    color="emerald"
                    title="2. Custom Jump Logic"
                    description="Jumping by 2 units at each step."
                    code={`import numpy as np\n\n# Start at 1, Jump by 2, End before 10\narr = np.arange(1, 10, 2)\n\nprint(f"Stepped Array: {arr}")`} 
                    output="Stepped Array: [1 3 5 7 9]" 
                  />

                   <CodeExample 
                    color="rose"
                    title="3. Countdown (Negative Step)"
                    description="Generating sequences in reverse."
                    code={`import numpy as np\n\n# Count down from 10 to 0 (step -2)\narr = np.arange(10, 0, -2)\n\nprint("Reverse Sequence:")\nprint(arr)`} 
                    output="Reverse Sequence:\n[10  8  6  4  2]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'floating' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Square} title="Decimal Resolution" color="cyan" />
                   
                   <div className="bg-cyan-950/20 border border-cyan-500/20 rounded-[3rem] p-12 mb-12">
                      <p className="text-2xl font-light text-slate-300 leading-relaxed mb-6 italic">
                         NumPy can generate fractional steps, but beware of <span className="text-cyan-400 font-bold underline">floating point drift</span> across long sequences.
                      </p>
                      <div className="flex items-center gap-3 text-[11px] font-black text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-400/20 self-start">
                         <AlertTriangle size={16} /> Precision Variance Insight
                      </div>
                   </div>

                   <CodeExample 
                    color="cyan"
                    title="Decimal Spacing"
                    description="Creating precise ranges between 0.0 and 1.0."
                    code={`import numpy as np\n\n# Interval gaps of 0.2 units\narr = np.arange(0, 1, 0.2)\n\nprint("FP Result:")\nprint(arr)`} 
                    output="FP Result:\n[0.  0.2 0.4 0.6 0.8]" 
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                     <div className="p-10 bg-slate-900 border-l-4 border-emerald-500 rounded-3xl">
                        <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-4">Recommended Usage</div>
                        <h4 className="text-white font-bold text-xl mb-4">Integers exclusively</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Arange remains the undisputed king of performance for whole-number counters and index arrays.</p>
                     </div>
                     <div className="p-10 bg-slate-900 border-l-4 border-amber-500 rounded-3xl">
                        <div className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-4">Alternative Logic</div>
                        <h4 className="text-white font-bold text-xl mb-4">Linear Space (Linspace)</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">When the exact number of decimal splits is critical, switch to <code className="text-amber-300 font-bold">np.linspace</code> for drift-free math.</p>
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'advanced' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Grid} title="Matrix Morphing" color="purple" />
                   
                   <div className="bg-slate-900/60 p-12 border border-slate-800 rounded-[3.5rem] mb-16 relative group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12">
                         <Grid size={200} />
                      </div>
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                         <RotateCcw className="text-purple-500" size={28} /> Instant Grid Generation
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-12">
                         Combining <code className="text-purple-400 font-bold underline">np.arange</code> with <code className="text-purple-400 font-bold underline">reshape</code> is the fastest way to build mock datasets and training matrices.
                      </p>
                      
                      <CodeExample 
                        color="purple"
                        title="3x3 Identity Growth Grid"
                        description="From linear sequence to structural matrix."
                        code={`import numpy as np\n\n# Create 9 elements (0-8) and reshape into 3x3\narr = np.arange(9).reshape(3, 3)\n\nprint("Generated Matrix:")\nprint(arr)`} 
                        output="Generated Matrix:\n[[0  1  2]\n [3  4  5]\n [6  7  8]]" 
                      />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] transition-all hover:bg-slate-800/40">
                         <h4 className="flex items-center gap-4 text-white font-black text-lg mb-8">
                            <Target className="text-cyan-400" size={24} /> Simulation Mapping
                         </h4>
                         <CodeExample 
                            color="cyan"
                            code={`# Generating inputs for sin wave\nx = np.arange(0, 10)\ny = np.sin(x)\n\nprint(f"X (Time): {x}")\nprint(f"Y (Sine Value): {y}")`} 
                            output="X (Time): [0 1 2 3 4 5 6 7 8 9]\nY (Sine Value): [ 0.    0.84  0.91  0.14 -0.76 -0.96 -0.28  0.66  0.99  0.41]" 
                         />
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] transition-all hover:bg-slate-800/40">
                         <h4 className="flex items-center gap-4 text-white font-black text-lg mb-8">
                            <TrendingUp className="text-emerald-500" size={24} /> Dataset Indexing
                         </h4>
                         <CodeExample 
                            color="emerald"
                            code={`# Creating 100 step indices\nindices = np.arange(0, 100)\n\nprint(f"Total indices generated: {len(indices)}")\nprint(f"First 5: {indices[:5]}")\nprint(f"Last 5: {indices[-5:]}")`} 
                            output="Total indices generated: 100\nFirst 5: [0 1 2 3 4]\nLast 5: [95 96 97 98 99]" 
                         />
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-blue-700/30 to-purple-700/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Target size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-[ -0.05em] leading-[0.9]">
                            🧪 Lab <span className="text-blue-400">Terminal</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                            A production simulation requires a dataset starting at <span className="text-white font-bold">5</span> and ending before <span className="text-white font-bold">21</span>, with a fixed growth step of <span className="text-white font-bold">3</span>.
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Final Implementation Challenge"
                           code={`import numpy as np\n\n# CHALLENGE: Create sequence 5 to 20 (step 3)\narr = np.arange(5, 21, 3)\n\nprint("Validated Sequence Result:")\nprint(arr)`} 
                           output="Validated Sequence Result:\n[ 5  8 11 14 17 20]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-32 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group">
         <div className="flex items-center gap-5 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Foundation</span>
               <span className="text-slate-600 font-bold text-xs">Vectorized Generation v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Mastering Numerical Range Distribution Systems
         </p>
      </footer>
    </div>
  );
}
