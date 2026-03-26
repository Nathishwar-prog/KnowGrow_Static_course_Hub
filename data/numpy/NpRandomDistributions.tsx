import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Boxes, TrendingUp, Dices, Binary, Grid } from 'lucide-react';

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
    random: {
        seed: (s: number) => { /* Simplified seed mock */ },
        uniform: (low: number, high: number, size: number) => {
            return Array.from({ length: size }, () => Math.random() * (high - low) + low);
        },
        normal: (loc: number = 0, scale: number = 1, size: any = 1) => {
            const count = typeof size === 'number' ? size : 1;
            return Array.from({ length: count }, () => {
                const u1 = Math.random() || 0.0001;
                const u2 = Math.random() || 0.0001;
                const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
                return z0 * scale + loc;
            });
        },
        binomial: (n: number, p: number, size: number) => {
            return Array.from({ length: size }, () => {
                let success = 0;
                for (let i = 0; i < n; i++) if (Math.random() < p) success++;
                return success;
            });
        },
        randint: (low: number, high: number, size: number) => {
            return Array.from({ length: size }, () => Math.floor(Math.random() * (high - low) + low));
        },
        rand: (rows: number, cols: number) => {
           return Array.from({ length: rows }, () => Array.from({ length: cols }, () => Math.random()));
        },
        randn: (size: number) => {
           return Array.from({ length: size }, () => {
                const u1 = Math.random() || 0.0001;
                const u2 = Math.random() || 0.0001;
                return Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
            });
        },
        shuffle: (arr: any[]) => {
            const result = [...arr];
            for (let i = result.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [result[i], result[j]] = [result[j], result[i]];
            }
            return result;
        }
    }
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    const customPrint = (...args: any[]) => {
      outputBuffer.push(args.map(arg => NumpySandbox._format(arg)).join(' '));
    };

    const sanitizedCode = code
       .replace(/import numpy as np/g, '')
       .replace(/np\.random\.uniform\((.+?),\s*(.+?),\s*(.+?)\)/g, 'np.random.uniform($1, $2, $3)')
       .replace(/np\.random\.normal\(loc=(.+?),\s*scale=(.+?),\s*size=(.+?)\)/g, 'np.random.normal($1, $2, $3)')
       .replace(/np\.random\.binomial\(n=(.+?),\s*p=(.+?),\s*size=(.+?)\)/g, 'np.random.binomial($1, $2, $3)')
       .replace(/np\.random\.randint\((.+?),\s*(.+?),\s*size=(.+?)\)/g, 'np.random.randint($1, $2, $3)')
       .replace(/np\.random\.rand\((.+?),\s*(.+?)\)/g, 'np.random.rand($1, $2)')
       .replace(/np\.random\.randn\((.+?)\)/g, 'np.random.randn($1)')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/(.+?)\s*\[\s*:(.+?)\s*\]/g, '$1.slice(0, $2)')
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

export default function NpRandomDistributions() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Stochastic Engine Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'SIMULATING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-indigo-300 outline-none resize-none selection:bg-indigo-500/20 font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Distribution Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Stochastic resolution pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-600/40 selection:text-white font-sans antialiased overflow-x-hidden font-sans">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Structured Stochastic Engines</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">random</span>
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic">
               Master the art of <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Structured Randomness</span>. Generate data following Uniform, Normal, and Binomial patterns to simulate real-world phenomena, train ML models, and inject controlled noise into your algorithms.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <Dices size={24} className="text-indigo-400" /> Statistical Noise
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left">
            <nav className="sticky top-12 space-y-5">
              {[
                { id: 'concept', label: '1. Distribution Theory', icon: BookOpen },
                { id: 'uniform', label: '2. Uniform Range', icon: Scaling },
                { id: 'normal', label: '3. Normal (Gaussian)', icon: TrendingUp },
                { id: 'binomial', label: '4. Binomial Trials', icon: Binary },
                { id: 'seed', label: '5. Seeding & integers', icon: RefreshCw },
                { id: 'pro', label: '6. Senior Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic font-black' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black">
                  <Lightbulb size={20} /> ML Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  Randomness in ML is structured. We use distributions to generate synthetic data, <span className="text-indigo-300 font-black font-sans">initialize neural weights</span>, and add noise to improve model robustness!
               </p>
            </div>
            
            <div className="mt-8 bg-violet-500/5 border border-violet-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-violet-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black">
                   <Target size={20} /> Reproducibility
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans">
                  Always use <code className="text-violet-300 font-bold font-sans">np.random.seed(42)</code>. It ensures the "random" sequence is identical every time you run your experiment!
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black">
                  <AlertTriangle size={20} /> Security Warning
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans">
                  NumPy's random module is <span className="text-rose-300 font-bold font-sans">Pseudorandom</span>. Never use it for cryptography or secure password generation — use dedicated secure libraries instead!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left">
                <section>
                   <SectionHeader icon={Info} title="1. Structured Randomness Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left font-sans font-bold font-sans">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl font-sans font-bold text-left">
                         The <span className="text-indigo-400 font-bold italic font-sans font-bold">np.random</span> module doesn't just produce noise—it generates structured numerical patterns that mirror statistical distributions found in nature and industry.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Uniform", desc: "Even spread distributions", icon: "📐" },
                           { label: "Normal", desc: "Gaussian bell curves", icon: "🔔" },
                           { label: "Binomial", desc: "Binary success trials", icon: "🪙" },
                           { label: "Integers", desc: "Discrete random counts", icon: "🔢" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group mb-16 text-left">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <Scaling className="text-indigo-500 font-sans" size={28} /> The Stochastic Engine
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans">
                         NumPy uses the <span className="text-indigo-400 font-bold font-sans font-bold">Mersenne Twister</span> generator, providing high-quality pseudorandom numbers that are significantly more efficient than Python's built-in <code className="text-indigo-300 font-bold font-sans">random</code> module.
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'uniform' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Scaling} title="2. Uniform Range Distribution" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      Every value in an <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">Uniform Distribution</span> has an equal probability of being selected.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Even-Probability Sandbox"
                    description="Generating 5 values evenly spread between 0 and 10."
                    code={`import numpy as np\n\n# range low=0, high=10, count=5\narr = np.random.uniform(0, 10, 5)\n\nprint("Uniform Random sample:")\nprint(arr)`} 
                    output="Uniform Random sample:\n[2.33 7.81 1.54 9.12 4.67]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'normal' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={TrendingUp} title="3. Normal (Gaussian) Bell Curve" color="violet" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-violet-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-violet-500/10 pb-4 font-sans font-black">
                             Structural Bell Curve
                         </div>
                         <div className="font-mono text-[10px] text-violet-300/60 leading-tight space-y-1 font-sans font-bold text-left italic">
                            <div>        ^</div>
                            <div>       / \</div>
                            <div>      /   \</div>
                            <div>     /     \</div>
                            <div>----|-------|----</div>
                            <div className="flex justify-between w-32 font-sans font-bold"><span>-1</span> <span>0</span> <span>+1</span></div>
                         </div>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <h5 className="text-xs font-black text-slate-500 uppercase mb-4 font-sans font-black font-sans font-bold text-left">Gaussian Params</h5>
                         <p className="text-xs text-slate-400 leading-relaxed font-sans font-bold text-left">
                            <span className="text-violet-300 font-bold">loc:</span> Mean (center point)<br/>
                            <span className="text-violet-300 font-bold font-sans">scale:</span> Standard deviation (spread)<br/>
                            <span className="text-violet-300 font-bold font-sans">size:</span> Output shape
                         </p>
                      </div>
                   </div>

                   <CodeExample 
                    color="violet"
                    title="Bell Curve Generator"
                    description="Simulating data centered around 0 with 1 std deviation."
                    code={`import numpy as np\n\n# Standard Normal: mean=0, std=1\narr = np.random.normal(loc=0, scale=1, size=5)\n\nprint("Normal Distribution sample:")\nprint(arr)`} 
                    output="Normal Distribution sample:\n[0.12 -0.45 1.03 0.67 -0.22]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'binomial' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Binary} title="4. Binomial Success trials" color="emerald" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black italic">
                      Models the number of <span className="text-emerald-400 font-black">Successes</span> in a fixed number of binary trials (like flipping a coin).
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Coin Flip Simulation"
                    description="Flipping a coin 10 times, across 5 independent experiments."
                    code={`import numpy as np\n\n# n=10 flips, p=0.5 probability, size=5 experiments\narr = np.random.binomial(n=10, p=0.5, size=5)\n\nprint("Binomial success counts:")\nprint(arr)`} 
                    output="Binomial success counts:\n[6 4 5 7 3]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'seed' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={RefreshCw} title="5. Seeding & Integer Domain" color="amber" />
                   
                   <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 mb-12 text-left font-sans font-bold">
                      <p className="text-xs text-slate-400 leading-relaxed font-sans font-bold text-left">
                         <span className="text-amber-400 font-black uppercase tracking-widest text-[10px] font-sans font-black block mb-4">REPRODUCIBILITY HUB</span>
                         Set a seed using <code className="text-amber-300 font-bold font-sans">np.random.seed(42)</code> to ensure that every analyst repeating your code gets the <span className="text-white font-black italic font-sans font-black">Exact Same Results</span>. This is vital for ML verification!
                      </p>
                   </div>

                   <CodeExample 
                    color="amber"
                    title="Structured Integer Generator"
                    description="Generating 5 random integers between 1 and 10."
                    code={`import numpy as np\n\n# low=1, high=10, size=5\narr = np.random.randint(1, 10, size=5)\n\nprint("Discrete Random integers:")\nprint(arr)`} 
                    output="Discrete Random integers:\n[3 7 1 9 5]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="6. Senior Stochastic workbench" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left font-sans font-bold">
                      {[
                        { title: "rand(3,3)", desc: "Create matrix of random floats.", icon: Grid },
                        { title: "randn(5)", desc: "Standard normal samples.", icon: TrendingUp },
                        { title: "shuffle(arr)", desc: "In-place data randomization.", icon: RefreshCw }
                      ].map((item, i) => (
                        <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] group font-sans font-bold">
                           <item.icon size={22} className="text-blue-400 mb-4" />
                           <h5 className="text-xs font-black text-white uppercase mb-2 font-sans font-black">{item.title}</h5>
                           <p className="text-[10px] text-slate-500 font-bold font-sans leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Activity size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-sans font-black">
                            🧪 Distribution <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-sans font-sans font-black">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left font-sans font-bold">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans">Score Simulation Mission</span> centered around 70 with 10 std dev!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Real-World Score Hub"
                           code={`import numpy as np\n\n# Simulate 100 student exam scores\nscores = np.random.normal(loc=70, scale=10, size=100)\n\n# Take first 10 for analysis\nprint("Simulation Head (Top 10):")\nprint(scores[:10])`} 
                           output="Simulation Head (Top 10):\n[68.45 72.12 59.88 81.34 70.05 65.43 75.99 71.21 69.11 83.45]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black">Stochastic Resolver v5.2</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black">
            Structured Random Generation with Seeding and Gaussian Curvature
         </p>
      </footer>
    </div>
  );
}
