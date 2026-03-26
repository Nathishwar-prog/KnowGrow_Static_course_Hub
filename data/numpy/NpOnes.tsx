import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Boxes, Binary, ArrowRight } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(1);

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
    ones: (shape: any, params: any = {}) => {
        const dtype = params.dtype || 'float';
        const fillVal = dtype === 'int' ? 1 : 1.0;
        
        if (typeof shape === 'number') {
            return new Array(shape).fill(fillVal);
        }
        
        const rows = shape[0];
        const cols = shape[1];
        if (cols === undefined) return new Array(rows).fill(fillVal);
        
        return Array.from({ length: rows }, () => new Array(cols).fill(fillVal));
    },
    ones_like: (arr: any) => {
        if (!Array.isArray(arr[0])) return new Array(arr.length).fill(1.0);
        return arr.map((row: any) => row.map(() => 1.0));
    },
    hstack: (tup: any[]) => {
        const [a, b] = tup;
        return a.map((row: any, i: number) => {
            const rowA = Array.isArray(row) ? row : [row];
            const rowB = Array.isArray(b[i]) ? b[i] : [b[i]];
            return [...rowA, ...rowB];
        });
    },
    eye: (n: number) => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i === j ? 1 : 0)),
    zeros: () => "[0. 0. 0.] // zeros simulation",
    full: () => "[5. 5. 5.] // full simulation"
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
       .replace(/np\.ones\((.+?),\s*dtype=(.+?)\)/g, 'np.ones($1, {dtype: "$2"})')
       .replace(/np\.ones\((.+?)\)/g, 'np.ones($1)')
       .replace(/np\.ones_like\((.+?)\)/g, 'np.ones_like($1)')
       .replace(/np\.hstack\((.+?)\)/g, 'np.hstack($1)')
       .replace(/np\.eye\((.+?)\)/g, 'np.eye($1)')
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

export default function NpOnes() {
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
          <div className="flex items-center gap-4 text-left font-sans">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">Unit Vector Terminal</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'INITIALIZING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20 font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Unit-Filled Matrix
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Unit vector resolution pending...'}
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617] font-sans"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1 font-sans">
            <div className="flex items-center gap-6 mb-10 font-sans text-left">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em] font-sans">Unit Vector Initialization</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">ones</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic">
               Generate arrays filled entirely with <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">Unit Values (1s)</span>. The foundational blueprint for matrix placeholders, ML weight initialization, and data masks.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black font-sans">
               <Boxes size={24} className="text-blue-400 font-sans" /> Unity Logic
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left">
            <nav className="sticky top-12 space-y-5">
              {[
                { id: 'concept', label: '1. Unity Foundations', icon: BookOpen },
                { id: '2d', label: '2. Dimensional Matrices', icon: Layout },
                { id: 'dtype', label: '3. Data Type Control', icon: Binary },
                { id: 'ml', label: '4. ML Bias Injection', icon: Cpu },
                { id: 'pro', label: '5. Senior Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95 text-left font-sans italic' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-110 transition-transform duration-700">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4 font-sans font-black font-sans">
                  <Lightbulb size={20} /> Physics Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans">
                  Unit vectors are essential for normalizing magnitudes! np.ones() provides the <span className="text-blue-300 font-black font-sans italic font-sans font-bold font-sans">One-Filled Placeholder</span> for testing complex linear algebra systems.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                  <Scaling size={20} /> Shape Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-bold text-left italic font-sans font-bold">
                  Always pass your <span className="text-indigo-300 font-black font-sans font-bold font-sans">Shape</span> as a tuple like (3, 3). Forgetting the parentheses is the #1 reason for initialization errors.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black">
                  <AlertTriangle size={20} /> Type Hazard
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-bold">
                  By default, ones() creates <code className="text-rose-300 font-bold font-sans font-black">float64</code> values (1.0). Use <code className="text-rose-300 font-bold font-sans font-black">dtype=int</code> if you specifically need integers!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black text-left font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 font-sans">
                <section>
                   <SectionHeader icon={Info} title="1. Unity Matrix Foundations" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans">
                         <span className="text-blue-400 font-bold italic font-sans font-bold font-sans">np.ones()</span> is the constructor for surgical unity. It provides an immediate blank-canvas of ones, serving as the starting point for countless mathematical operations.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Weights", desc: "Initialize NNs", icon: "🧠" },
                           { label: "Masks", desc: "Binary filters", icon: "🎭" },
                           { label: "Placeholders", desc: "Empty buffers", icon: "📦" },
                           { label: "Testing", desc: "Identity checks", icon: "🧪" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed font-sans">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="blue"
                    title="1D Unity Vector"
                    description="Generating a simple array of 5 floating-point units."
                    code={`import numpy as np\n\n# Default is float (1.0)\narr = np.ones(5)\n\nprint("Unity Vector:")\nprint(arr)`} 
                    output="Unity Vector:\n[1. 1. 1. 1. 1.]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. Multi-Dimensional Unity" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold text-left italic">
                      Construct complex grids by passing a <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8 font-sans font-black italic">Shape Tuple</span>. Perfectly aligned matrices of ones are ready for broadcast or stacking.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Matrix Constructor Sandbox"
                    description="Executing a 2×3 matrix initialization of unit values."
                    code={`import numpy as np\n\n# Tuple shape (rows, columns)\narr = np.ones((2, 3))\n\nprint("Unit Matrix Grid:")\nprint(arr)`} 
                    output="Unit Matrix Grid:\n[[1. 1. 1.]\n [1. 1. 1.]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'dtype' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Binary} title="3. Rigid Data Type Control" color="emerald" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans">
                      Optimization starts with type selection. Switch from <code className="text-emerald-400 font-bold font-sans font-bold">float64</code> to <code className="text-emerald-400 font-bold font-sans font-bold">int</code> to save memory for discrete masks and index grids.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Integer Persistence Hub"
                    description="Creating 2×2 integer-based unity blocks."
                    code={`import numpy as np\n\n# Explicit dtype override\narr = np.ones((2, 2), dtype=int)\n\nprint("Integer Unity Block:")\nprint(arr)`} 
                    output="Integer Unity Block:\n[[1 1]\n [1 1]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'ml' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Cpu} title="4. Machine Learning Bias Injection" color="cyan" />
                   
                   <div className="p-12 bg-cyan-950/20 border border-cyan-500/30 rounded-[3rem] group">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <Scaling className="text-cyan-500 font-sans" size={28} /> Linear Regression Preprocessing
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic">
                         In ML models, we often prepend a <span className="text-cyan-400 font-bold font-sans font-bold font-sans">Column of 1s</span> to our feature matrix to represent the intercept (bias) term.
                      </p>

                      <CodeExample 
                        color="cyan"
                        title="Feature Bias Lab"
                        description="Injecting a bias column using ones() and hstack()."
                        code={`import numpy as np\n\ndata = np.array([[2, 3], [4, 5]])\n\n# Create bias column matching data rows\nbias = np.ones((data.shape[0], 1))\n\n# Stack horizontally: [bias, data]\nnew_data = np.hstack((bias, data))\n\nprint("Normalized ML Matrix:")\nprint(new_data)`} 
                        output="Normalized ML Matrix:\n[[1. 2. 3.]\n [1. 4. 5.]]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Pattern Protocols" color="amber" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group font-sans">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black">
                            <Layers size={16} /> ones_like()
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-semibold">
                            Instantly mirror the <span className="text-cyan-300 font-black font-sans italic font-sans font-bold">Shape & Dtype</span> of an existing array into a new one filled with 1s.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-cyan-300 text-[10px] font-sans font-bold">np.ones_like(arr)</code>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans">
                            <Scaling size={16} /> Custom magnitude
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Multiply a unit matrix by any scalar to quickly fill it with that value.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-emerald-300 text-[10px] font-sans font-bold">np.ones((3,3)) * 5</code>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-blue-800/40 to-indigo-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s] font-sans">
                         <Layers size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-sans font-black">
                            🧪 Mirror <span className="text-blue-400 italic font-light font-sans font-bold font-sans font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left font-sans font-bold">
                             Challenge: Design an <span className="text-white font-bold italic font-sans font-bold font-sans">Identity Matrix transformation</span> using ones and eye!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Surgical Identity Hub"
                           code={`import numpy as np\n\n# Create 3x3 diagonal mask\nmask = np.eye(3)\n\n# Combine with unit grid\nresult = np.ones((3,3)) * mask\n\nprint("Identity resolved via unity:")\nprint(result)`} 
                           output="Identity resolved via unity:\n[[1. 0. 0.]\n [0. 1. 0.]\n [0. 0. 1.]]" 
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
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40 font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black">Unity Constructor v3.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic">
            Surgical Unit Vector Initialization with Explicit Dtype Control
         </p>
      </footer>
    </div>
  );
}
