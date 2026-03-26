import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, BookOpen, Scaling, AlertTriangle, RefreshCw, Activity, Grid3X3, Eraser, Square, BoxSelect, Binary } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return val.toFixed(1).replace(/\.0$/, '.'); // Simple float format

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix
        const rows = val.map(row => ` [${row.map(v => typeof v === 'number' ? (Number.isInteger(v) ? v : v.toFixed(1)) : v).join('  ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.map(v => typeof v === 'number' ? (Number.isInteger(v) ? v : v.toFixed(1)) : v).join(' ')}]`; // Vector
    }
    return String(val);
  },

  np: {
    array: (data: any) => JSON.parse(JSON.stringify(data)),
    zeros: (shape: any, dtype: string = 'float') => {
        const create = (s: number[]): any => {
            if (s.length === 1) return Array(s[0]).fill(dtype === 'int' ? 0 : 0.0);
            const [dim, ...rest] = s;
            return Array(dim).fill(0).map(() => create(rest));
        };
        const s = Array.isArray(shape) ? shape : [shape];
        return create(s);
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
       .replace(/np\.zeros\(\((.+?)\)(.+?)\)/g, 'np.zeros([$1]$2)')
       .replace(/np\.zeros\((.+?),/g, 'np.zeros($1,')
       .replace(/np\.zeros\((.+?)\)/g, 'np.zeros($1)')
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

export default function NpZeros() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8 font-sans">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5 font-sans font-black`}>
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30 font-sans font-black',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30 font-sans font-black',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30 font-sans font-black',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30 font-sans font-black',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30 font-sans font-black',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30 font-sans font-black',
        sky: 'bg-sky-600 hover:bg-sky-500 shadow-sky-500/30 font-sans font-black',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl font-sans">
          <div className="flex items-center gap-4 text-left font-sans font-black">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans font-black`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">Zero-Value Terminal</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans font-black">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none font-sans font-black`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'INITIALIZING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans font-black">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800 font-sans font-black font-sans">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20 font-sans font-black font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans font-black font-sans">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-white font-sans font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans font-black font-sans"></div> Vectorized Null Grid
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black font-sans">
              {sandboxOutput || output || '// Initialization resolution pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/40 selection:text-white font-sans antialiased overflow-x-hidden font-sans">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6 font-sans">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617] font-sans font-black"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px] font-sans font-black"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-sky-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans font-black"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left font-sans font-black">
          <div className="flex-1 font-sans font-black font-sans font-black">
            <div className="flex items-center gap-6 mb-10 font-sans font-black font-sans">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent font-sans"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Array Pre-Allocation Engine</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left font-sans">
               np.<span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">zeros</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed italic font-sans font-bold">
               Master the art of <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">Blank Canvas Initialization</span>. Create high-speed pre-allocated memory buffers for ML weights, game grids, and deep learning tensors with surgical C-level precision.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans font-black">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Eraser size={24} className="text-blue-400 font-sans font-black" /> Null Resolver
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left font-sans font-black">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left font-sans font-black">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans font-black">
              {[
                { id: 'concept', label: '1. Null Grid Theory', icon: BookOpen },
                { id: 'basic', label: '2. Vector Generation', icon: Square },
                { id: '2d', label: '3. Matrix Buffers', icon: Grid3X3 },
                { id: '3d', label: '4. Tensors & Volumetrics', icon: BoxSelect },
                { id: 'pro', label: '5. Senior Allocator Tips', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95 text-left font-sans italic font-sans font-black font-sans font-black font-sans font-black font-sans' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans font-black font-sans font-black font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold font-sans font-black">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-110 transition-transform duration-700 font-sans font-black">
                  <Eraser size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Conceptual Core 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  In NumPy, <code className="text-blue-300 font-black font-sans italic">zeros</code> doesn't just fill values—it pre-allocates a contiguous block of memory where every byte represents a logical <span className="text-white">0</span> or <span className="text-white">0.0</span>.
               </p>
            </div>
            
            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <Activity size={20} /> Performance Advantage
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold font-sans font-black font-sans font-black font-sans">
                  Allocating a $1000 \times 1000$ matrix using <code className="text-blue-300 font-black font-sans italic font-sans font-black">np.zeros</code> is extremely fast because it utilizes highly optimized C routines and direct memory mapping.
               </p>
            </div>

            <div className="mt-8 bg-sky-500/5 border border-sky-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-sky-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-sky-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <Scaling size={20} /> Multi-Axis Rule ⚠️
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                  When creating multi-dimensional arrays, the <code className="text-sky-300 font-bold font-sans font-black font-sans italic">shape</code> must be a <span className="text-sky-300 font-bold font-sans font-black underline italic font-sans">Tuple</span> (e.g., `(3, 4)`). Passing raw numbers like `3, 4` will trigger a TypeError.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans font-black">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans font-black font-sans font-black font-sans font-black font-sans">
                <section>
                   <SectionHeader icon={Info} title="1. Null Grid Generation Theory" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full font-sans font-black"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                         <span className="text-blue-400 font-bold italic font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">Blank Canvas Allocation</span> is the foundation of data modeling. In NumPy, this feature is used to initialize weights in Neural Networks, create zeroed image masks, and pre-allocate empty datasets to avoid expensive resizing operations.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-sans">
                         {[
                           { label: "Weights", desc: "ML weight init", icon: "🤖" },
                           { label: "Masks", desc: "Empty image canvas", icon: "📷" },
                           { label: "Grids", desc: "Simulation datasets", icon: "🎮" },
                           { label: "Buffers", desc: "Pre-allocated storage", icon: "🔋" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-blue-950/20 border border-blue-500/30 rounded-[3rem] group mb-16 text-left">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <Eraser className="text-blue-500" size={28} /> Math Representation
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-bold">
                         Every element $A(i,j) = 0$. By default, NumPy generates these as <span className="text-blue-400 font-bold font-sans italic">float64</span> (0.), but can be cast to any type via the `dtype` parameter.
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'basic' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black">
                <section>
                   <SectionHeader icon={Square} title="2. Simple Vector Generation" color="blue" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black">
                      Generate a linear sequence of <span className="text-blue-400 font-black underline decoration-blue-500/30 underline-offset-8">Null Floats</span> with a single scalar shape parameter.
                   </p>

                   <CodeExample 
                    color="blue"
                    title="Null Vector Terminal"
                    description="Executing np.zeros on a rank-5 vector space."
                    code={`import numpy as np\n\n# Create a Null Vector of size 5\narr = np.zeros(5)\n\nprint("Determined Zero Vector:")\nprint(arr)`} 
                    output="Determined Zero Vector:\n[0. 0. 0. 0. 0.]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2d' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Grid3X3} title="3. Matrix Buffers resolve" color="blue" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                      Instantiate multidimensional <span className="text-blue-400 font-bold font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black">Zero Grids</span>. Crucial for images, data frames, and simulations.
                   </p>

                   <CodeExample 
                    color="cyan"
                    title="2D Matrix Sandbox"
                    description="Executing np.zeros for a 3x4 Row-Column grid."
                    code={`import numpy as np\n\n# 3 Rows x 4 Columns\narr = np.zeros((3, 4))\n\nprint("Determined Matrix Grid:")\nprint(arr)`} 
                    output="Determined Matrix Grid:\n[[0. 0. 0. 0.]\n [0. 0. 0. 0.]\n [0. 0. 0. 0.]]" 
                  />

                  <CodeExample 
                    color="emerald"
                    title="Integer Matrix Terminal"
                    description="Casting null values to explicit integers."
                    code={`import numpy as np\n\n# 2x2 Integer Matrix\narr = np.zeros((2, 2), dtype=int)\n\nprint("Determined Integer Nulls:")\nprint(arr)`} 
                    output="Determined Integer Nulls:\n[[0 0]\n [0 0]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '3d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans">
                <section>
                   <SectionHeader icon={BoxSelect} title="4. Tensors & Volumetrics" color="sky" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black font-sans font-black">
                     Allocate high-order <span className="text-sky-400 font-black underline decoration-sky-500/30 underline-offset-8">Rank-N Tensors</span>. The building blocks of Deep Learning and volumetric image data.
                   </p>

                   <CodeExample 
                    color="sky"
                    title="Rank-3 Tensor Terminal"
                    description="Defining a (2, 3, 2) volumetric null pool."
                    code={`import numpy as np\n\n# 2 Depth x 3 Rows x 2 Column tensor\narr = np.zeros((2, 3, 2))\n\nprint("Determined Tensor Metadata:")\nprint(f"Shape: {arr.shape}")\nprint("Rank 3 Tensor Slice:")\nprint(arr[0])`} 
                    output="Determined Tensor Metadata:\nShape: (2, 3, 2)\nRank 3 Tensor Slice:\n[[0. 0.]\n [0. 0.]\n [0. 0.]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Allocator Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                            <RefreshCw size={16} /> Memory First
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                            Pre-allocating with zeros is significantly faster than appending values to a Python list.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                            <Binary size={16} /> Type Precision
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                            Use `dtype=int` for grids or counts to save 50% memory vs default `float64`.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                            <Info size={16} /> The Null Suite
                         </div>
                         <div className="space-y-3 text-[10px] text-slate-500 font-bold">
                            <div className="flex justify-between border-b border-slate-800 pb-1"><span>np.zeros</span> <span>Zeros</span></div>
                            <div className="flex justify-between border-b border-slate-800 pb-1"><span>np.ones</span> <span>Ones</span></div>
                            <div className="flex justify-between"><span>np.empty</span> <span>Arbitrary</span></div>
                         </div>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-blue-800/40 to-sky-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Eraser size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                            ⚡ Null Canvas <span className="text-blue-400 italic font-light font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">Lab Workshop</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                             Challenge: Create a <span className="text-white font-bold italic font-sans font-bold font-sans font-black font-sans font-black">4x4 Identity-Zero Matrix</span>!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="The Matrix Studio"
                           code={`import numpy as np\n\n# 1. Create a 4x4 Zero Matrix\narr = np.zeros((4, 4), dtype=int)\n\n# 2. Add diagonal values\narr[0,0] = 1\narr[1,1] = 1\narr[2,2] = 1\narr[3,3] = 1\n\nprint("Determined Custom Null Grid:")\nprint(arr)`} 
                           output="Determined Custom Null Grid:\n[[1  0  0  0]\n [0  1  0  0]\n [0  0  1  0]\n [0  0  0  1]]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left italic font-sans">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40">KG</div>
            <div className="font-sans italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest leading-none">Null Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right leading-none">
            High-Performance Pre-Allocation with np.zeros and contiguous memory buffers for ML and Simulation
         </p>
      </footer>
    </div>
  );
}
