import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Boxes, Shuffle, Dices, Binary, Search, ListFilter } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(4);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix
        const rows = val.map(row => ` [${row.map(v => typeof v === 'number' ? v.toFixed(3) : String(v)).join('  ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.map(v => typeof v === 'number' ? v.toFixed(3) : String(v)).join(' ')}]`; // Vector
    }
    return String(val);
  },

  np: {
    array: (data: any) => data,
    random: {
        seed: (s: number) => { /* Mock seed */ },
        rand: (d0?: number, d1?: number) => {
           if (d0 === undefined) return Math.random();
           if (d1 === undefined) return Array.from({ length: d0 }, () => Math.random());
           return Array.from({ length: d0 }, () => Array.from({ length: d1 }, () => Math.random()));
        },
        randn: (d0: number, d1?: number) => {
           const getNormal = () => {
                const u1 = Math.random() || 0.0001;
                const u2 = Math.random() || 0.0001;
                return Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
           };
           if (d1 === undefined) return Array.from({ length: d0 }, () => getNormal());
           return Array.from({ length: d0 }, () => Array.from({ length: d1 }, () => getNormal()));
        },
        randint: (low: number, high: number, params: any) => {
           const size = params && params.size !== undefined ? params.size : null;
           const getInt = () => Math.floor(Math.random() * (high - low) + low);
           if (size === null) return getInt();
           return Array.from({ length: size }, getInt);
        },
        shuffle: (arr: any[]) => {
           const result = [...arr];
           for (let i = result.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [result[i], result[j]] = [result[j], result[i]];
           }
           return result;
        },
        choice: (a: any[], params: any) => {
           const size = params && params.size !== undefined ? params.size : 1;
           return Array.from({ length: size }, () => a[Math.floor(Math.random() * a.length)]);
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
       .replace(/np\.random\.randint\((.+?),\s*(.+?),\s*size=(.+?)\)/g, 'np.random.randint($1, $2, {size: $3})')
       .replace(/np\.random\.choice\((.+?),\s*size=(.+?)\)/g, 'np.random.choice($1, {size: $2})')
       .replace(/np\.random\.rand\((.+?),\s*(.+?)\)/g, 'np.random.rand($1, $2)')
       .replace(/np\.random\.rand\((.+?)\)/g, 'np.random.rand($1)')
       .replace(/np\.random\.rand\(\)/g, 'np.random.rand()')
       .replace(/np\.random\.randn\((.+?)\)/g, 'np.random.randn($1)')
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

export default function NpRandomIntro() {
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Stochastic Intro Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'EXECUTING...' : 'RUN MODULE'}
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
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Random Matrix Result
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
      <header className="relative pt-44 pb-32 px-6 font-sans">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617] font-sans"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1 font-sans">
            <div className="flex items-center gap-6 mb-10 font-sans">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans">The Stochastic Blueprint</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">random</span>
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold">
               Your primary gateway to <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Algorithmic Chance</span>. The fundamental module for generating synthetic data, shuffling datasets, and simulating numerical chaos for ML model verification.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black font-sans">
               <Dices size={24} className="text-indigo-400 font-sans" /> Chance Core
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left">
            <nav className="sticky top-12 space-y-5">
              {[
                { id: 'concept', label: '1. Modular Foundations', icon: BookOpen },
                { id: 'basic', label: '2. Float & Int Generators', icon: Scaling },
                { id: 'arrays', label: '3. Dimensional Matrices', icon: Layout },
                { id: 'ops', label: '4. Shuffle & Choice', icon: ListFilter },
                { id: 'seed', label: '5. Reproducibility Hub', icon: Target },
                { id: 'pro', label: '6. Senior Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic font-black' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner font-sans font-bold text-left font-sans">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Machine Learning Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  "Random" in computers is actually <span className="text-indigo-300 font-black font-sans">Pseudo-random</span>. It is generated by algorithms and is 100% reproducible if you know the starting seed!
               </p>
            </div>
            
            <div className="mt-8 bg-violet-500/5 border border-violet-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-violet-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black">
                  <Target size={20} /> Use Seeding!
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  Always use <code className="text-violet-300 font-bold font-sans italic font-sans">np.random.seed(42)</code> during experiments to ensure colleagues get identical results.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans">
                  <AlertTriangle size={20} /> Security Risk
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black">
                  Never use NumPy for <span className="text-rose-300 font-bold font-sans font-black font-sans italic">Secure Cryptography</span>. Use Python's `secrets` module for passwords and keys instead.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left">
                <section>
                   <SectionHeader icon={Info} title="1. Modular Stochastic Foundations" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans">
                         The <span className="text-indigo-400 font-bold italic font-sans font-bold">np.random</span> module is the algorithmic heartbeat of NumPy. It allows us to generate synthetic datasets, simulate stochastic processes, and inject high-speed "chaos" into our linear systems.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Values", desc: "Single random floats", icon: "🎲" },
                           { label: "Arrays", desc: "Muti-dimensional grids", icon: "📦" },
                           { label: "Distro", desc: "Normal/Uniform patterns", icon: "📊" },
                           { label: "Ops", desc: "Shuffling & Choice", icon: "🔀" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group text-left font-sans font-bold text-left italic font-sans font-black">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <Activity className="text-indigo-500 font-sans" size={28} /> Why Stochastic Math?
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans font-bold text-left font-sans font-black">
                         {[
                            "ML Train/Test split selection",
                            "Simulating weather/finance models",
                            "Data shuffling for neural networks",
                            "Stress testing algorithm edge cases"
                         ].map((point, i) => (
                            <div key={i} className="flex items-center gap-4 text-slate-400 font-light font-sans font-bold font-sans italic font-sans">
                               <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 font-sans"></div> {point}
                            </div>
                         ))}
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'basic' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Scaling} title="2. Float & Integer Hub" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      Generate high-speed <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">Unit Floats</span> or discrete integers within a surgical range.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Basic Scalar Generator"
                    description="Executing a single float (0 to 1) and a discrete integer sequence."
                    code={`import numpy as np\n\n# Single float between 0 and 1\nval = np.random.rand()\nprint("Random Float (0-1):", val)\n\n# Integers between 1 and 10 (size 5)\nints = np.random.randint(1, 10, size=5)\nprint("\\nDiscrete Integers (1-9):", ints)`} 
                    output="Random Float (0-1): 0.3745\n\nDiscrete Integers (1-9): [ 3  7  1  9  5]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'arrays' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Layout} title="3. Multi-Dimensional Grids" color="violet" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans">
                      Construct random arrays instantly. Define shapes for 1D vectors or 2D matrices to populate placeholders for model testing.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="Matrix Constructor Lab"
                    description="Generating 1D vectors and 2×3 matrices of Gaussian results."
                    code={`import numpy as np\n\n# 1D Array of size 3\nvec = np.random.rand(3)\nprint("Random Vector:\\n", vec)\n\n# 2x3 Matrix of Normal (Gaussian) values\n# randn = centered around 0\nmat = np.random.randn(2, 3)\nprint("\\nNormal 2x3 Matrix:\\n", mat)`} 
                    output="Random Vector:\n [ 0.12  0.45  0.78]\n\nNormal 2x3 Matrix:\n [[-0.45  1.03  0.67]\n  [ 0.12 -0.88  0.34]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'ops' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={ListFilter} title="4. Shuffle & Choice Operations" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black font-sans font-black italic">
                      Randomly <span className="text-emerald-400 font-black">Reorder</span> entire datasets or surgically pick samples from a predefined list.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Dataset Manipulation Hub"
                    description="Executing in-place shuffles and random sample selection."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4, 5])\n\n# Shuffles the original array\nnp.random.shuffle(arr)\nprint("Shuffled Dataset:", arr)\n\n# Pick 3 random samples from a choice list\npicked = np.random.choice([10, 20, 30], size=3)\nprint("\\nRandom Choice Selection:", picked)`} 
                    output="Shuffled Dataset: [ 4  2  5  1  3]\n\nRandom Choice Selection: [ 20  30  20]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'seed' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Target} title="5. The Reproducibility Hub" color="amber" />
                   
                   <div className="bg-amber-950/20 border border-amber-500/30 rounded-[3rem] p-12 text-left font-sans font-bold font-sans font-black italic">
                      <p className="text-xl text-slate-300 mb-8 font-sans font-bold text-left italic font-sans font-black font-sans font-bold">
                         Randomness in programming is a sequence. By setting a <span className="text-amber-400 font-bold font-sans font-black font-sans font-bold font-sans underline decoration-amber-500/30 underline-offset-8">Seed</span>, you start the sequence at a fixed point, ensuring everyone gets the same "random" results.
                      </p>
                      <CodeExample 
                        color="amber"
                        title="Fixed sequence lab"
                        description="Using seed(42) for identical result repeating."
                        code={`import numpy as np\n\nnp.random.seed(42)\nprint("Sequence A:", np.random.rand(3))\n\n# Resetting for same result\nnp.random.seed(42)\nprint("Sequence B:", np.random.rand(3))`} 
                        output="Sequence A: [ 0.375  0.951  0.732]\nSequence B: [ 0.375  0.951  0.732]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="6. Senior Development Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold font-sans">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black">
                            <Scaling size={16} /> Quick Matrix
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Initialize 3x3 weight grids in one line: <code className="text-cyan-300">np.random.rand(3, 3)</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black">
                            <Layers size={16} /> Range Shifting
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Shift range to 0-10 instantly using: <code className="text-emerald-300">np.random.rand(5) * 10</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Activity size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-sans font-black">
                            🎲 Dice <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-sans font-black">Simulation Module</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left font-sans font-bold">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans">10-roll Dice Simulator</span> using random integers!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Dice Master Hub"
                           code={`import numpy as np\n\n# Standard 6-sided dice (1-6)\ndice = np.random.randint(1, 7, size=10)\n\nprint("Determined Dice Sequence:")\nprint(dice)`} 
                           output="Determined Dice Sequence:\n [ 3  1  6  2  5  4  6  1  2  3]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black">Random Intro v1.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black">
            Unified Stochastic Introduction with Modular Matrix Population
         </p>
      </footer>
    </div>
  );
}
