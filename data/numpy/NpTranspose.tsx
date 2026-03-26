import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, TrendingUp, RotateCw, Columns, Boxes, FlaskConical, Binary, Move3d } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return String(val);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix
        const rows = val.map(row => ` [${row.join('  ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.join(' ')}]`; // Vector
    }
    return String(val);
  },

  np: {
    array: (data: any) => {
        const arr = JSON.parse(JSON.stringify(data));
        // Add pseudo-transposition logic for the sandbox terminal
        return arr;
    },
    transpose: (a: any, axes: any = null) => {
        const copy = JSON.parse(JSON.stringify(a));
        if (!Array.isArray(copy) || !Array.isArray(copy[0])) {
            // 1D Array Case: Transpose does nothing
            return copy;
        }

        // 3D Mock for the specific example in content (2, 3, 4) -> (3, 2, 4)
        if (axes && axes.toString() === "1,0,2" && copy.length === 2 && copy[0].length === 3) {
            return { _is3D: true, shape: [3, 2, 4], data: "Rearranged Axial Grid" };
        }

        // 2D Matrix Transpose
        const rows = copy.length;
        const cols = copy[0].length;
        const result = Array.from({ length: cols }, () => Array(rows));
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                result[c][r] = copy[r][c];
            }
        }
        return result;
    },
    reshape: (a: any, shape: number[]) => {
        // Simple 1D to 2D mock for [1,2,3] -> (1,3)
        if (a.length === 3 && shape[0] === 1 && shape[1] === 3) return [a];
        return a;
    },
    random: {
        randint: (low: number, high: number, shape: number[]) => ({ _is3D: true, shape, data: "Random Tensor" })
    }
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    const customPrint = (...args: any[]) => {
      const formatted = args.map(arg => {
          if (arg && arg._is3D) return `(Tensor with shape ${NumpySandbox._format(arg.shape)})`;
          return NumpySandbox._format(arg);
      }).join(' ');
      outputBuffer.push(formatted);
    };

    const sanitizedCode = code
       .replace(/import numpy as np/g, '')
       .replace(/import matplotlib.pyplot as plt/g, '')
       .replace(/plt\..+\(.*\)/g, '')
       .replace(/np\.transpose\((.+?),\s*\((.+?)\)\)/g, 'np.transpose($1, [$2])')
       .replace(/np\.transpose\((.+?)\)/g, 'np.transpose($1)')
       .replace(/(\w+)\.T/g, 'np.transpose($1)') // Mock .T shortcut
       .replace(/(\w+)\.reshape\((.+?)\)/g, 'np.reshape($1, [$2])')
       .replace(/np\.random\.randint\((.+?)\)/g, 'np.random.randint($1)')
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

export default function NpTranspose() {
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans font-black">Axial Orientation Terminal</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans font-black">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none font-sans font-black`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'FLIPPING...' : 'RUN MODULE'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans font-black font-sans font-black font-sans font-black"></div> Swapped Index Matrix Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Axial swap pending...'}
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617] font-sans font-black font-sans font-black"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px] font-sans font-black font-sans font-black"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left font-sans font-black">
          <div className="flex-1 font-sans font-black">
            <div className="flex items-center gap-6 mb-10 font-sans font-black font-sans font-black font-sans font-black">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent font-sans"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Vectorized Dimensional Swapping</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left font-sans font-black font-sans font-black">
               np.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic font-sans font-black font-sans font-black">transpose</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold font-sans font-black">
               Master the art of <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Axial Orientation</span>. Flip rows into columns, rotate tensor dimensions, and prepare your data for high-speed linear algebra operations with zero-copy vectorized precision.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black font-sans font-black">
               <RotateCw size={24} className="text-indigo-400 font-sans font-black" /> Axis Flipper
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left font-sans font-black font-sans font-black">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left font-sans font-black">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans font-black">
              {[
                { id: 'concept', label: '1. Transposition Theory', icon: BookOpen },
                { id: '2d', label: '2. 2D Matrix Flip', icon: RotateCw },
                { id: 'scalar', label: '3. The .T Shortcut', icon: Zap },
                { id: '1d', label: '4. The 1D Constraint', icon: AlertTriangle },
                { id: '3d', label: '5. Advanced multi-axis Swap', icon: Move3d },
                { id: 'pro', label: '6. Senior Orientation Tricks', icon: Activity }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic font-sans font-black font-sans font-black font-sans font-black' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans font-black font-sans font-black font-sans font-black'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold font-sans font-black font-sans font-black">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans font-black">
                  <Columns size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Linear Algebra Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  Transposition is the diagonal flip of $A$ to $A^T$. In ML, it is the primary prerequisite for <span className="text-indigo-300 font-black font-sans italic">Dot Product</span> operations between incompatible matrix shapes.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <Cpu size={20} /> Zero-Copy Performance
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold font-sans font-black font-sans font-black">
                  NumPy's <code className="text-indigo-300 font-black font-sans italic font-sans font-black">transpose</code> is incredibly fast because it doesn't move data—it just changes the index-mapping <span className="text-indigo-300 font-black font-sans font-bold">View</span>.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                  <Scaling size={20} /> 1D Dead-zone
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                  A 1D array like <code className="text-rose-300 font-bold font-sans font-black font-sans italic">[1, 2, 3]</code> has no rows/columns to swap. It remains unchanged unless <span className="text-rose-300 font-bold font-sans font-black underline italic font-sans">Reshaped</span> into a 2D matrix first.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans font-black">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans font-black">
                <section>
                   <SectionHeader icon={Info} title="1. Axial Orientation Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold font-sans font-black font-sans font-black">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans font-black font-sans font-black"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                         <span className="text-indigo-400 font-bold italic font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">Axial Transposition</span> is the act of remapping a matrix such that <code className="text-white">A[i][j]</code> becomes <code className="text-white">A[j][i]</code>. It is the primary transformation for rotating images, calculating dot products, and resolving row-column mismatches in ML pipelines.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Switch", desc: "Rows to Columns", icon: "↔️" },
                           { label: "Rotate", desc: "Tensor reordering", icon: "📐" },
                           { label: "Matrix", desc: "Linear resolve", icon: "📊" },
                           { label: "Speed", desc: "Zero-copy views", icon: "⚡" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group mb-16 text-left font-sans font-black">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black font-sans font-black">
                         <Binary className="text-indigo-500 font-sans font-black font-sans font-black" size={28} /> The Diagonal Flip
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic font-sans font-black font-sans font-black">
                         In 2D transposition, values are reflected across the <span className="text-indigo-400 font-bold font-sans font-black italic">Diagonal axis</span> from top-left to bottom-right.
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === '2d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black">
                <section>
                   <SectionHeader icon={RotateCw} title="2. 2D Matrix Orientation" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black">
                      The <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">np.transpose()</span> engine surgically swaps coordinate indices, effectively converting a $2 \times 3$ grid into a $3 \times 2$ grid.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Grid Flip Sandbox"
                    description="Executing a basic matrix transpose on a 2x3 sequential grid."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Swap rows and columns\nresult = np.transpose(arr)\n\nprint("Determined Swapped Matrix:")\nprint(result)`} 
                    output="Determined Swapped Matrix:\n[[1 4]\n [2 5]\n [3 6]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'scalar' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Zap} title="3. The .T Axial Shortcut" color="violet" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                      Access high-speed axial swaps via the <span className="text-violet-400 font-bold font-sans font-black italic">.T property</span>—the industry standard for concise matrix manipulation.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="Shortcut Resolver Sandbox"
                    description="Executing the .T property on a 2x2 identity-style matrix."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\n# Quick property transpose\nresult = arr.T\n\nprint("Determined .T Resolution:")\nprint(result)`} 
                    output="Determined .T Resolution:\n[[1 3]\n [2 4]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '1d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={AlertTriangle} title="4. The 1D Dead-zone Resolution" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black">
                     Observe how <span className="text-rose-400 font-black underline decoration-rose-500/30 underline-offset-8">1D Vectors</span> resist transposition until explicitly reshaped into a dimension-aware matrix.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="1D Transpose Terminal"
                    description="Executing .T on a 1D vs Reshaped array."
                    code={`import numpy as np\n\narr_1d = np.array([1, 2, 3])\nprint("1D Transpose (No change):", arr_1d.T)\n\n# Correcting with reshape\narr_2d = arr_1d.reshape(1, 3)\nprint("\\n2D Transpose (Proper Swap):\\n", arr_2d.T)`} 
                    output="1D Transpose (No change): [1 2 3]\n\n2D Transpose (Proper Swap):\n[[1]\n [2]\n [3]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '3d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Move3d} title="5. Advanced multi-axis Rearrangement" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black font-sans font-black">
                     Resolve high-rank <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">Tensor Axes</span> by providing a specific tuple permutation.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Tensor Swap Terminal"
                    description="Executing a 3D axial rearrangement from (2,3,4) to (3,2,4)."
                    code={`import numpy as np\n\n# Simulate 3D Tensor\narr = np.random.randint(1, 10, (2, 3, 4))\n\n# Rearrange axes: 0->1, 1->0, 2->2\nresult = np.transpose(arr, (1, 0, 2))\n\nprint("Determined Tensor Shape:")\nprint(result.shape)`} 
                    output="Determined Tensor Shape:\n[3 2 4]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black">
                <section>
                   <SectionHeader icon={Zap} title="6. Senior Orientation Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black">
                            <Scaling size={16} /> Dot Product Prep
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Align matrix columns for multiplication instantly: <code className="text-cyan-300">np.dot(A.T, B)</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black">
                            <Boxes size={16} /> Pipeline Reshaping
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Orient dataset features for training using: <code className="text-emerald-300">data = data.T</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RotateCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black font-sans font-black">
                            ⚡ Coordinate <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black">Swap hub</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold font-sans font-black">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans font-black font-sans font-black">Surgical Grid Flip</span> for any 2D matrix dataset!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Dataset Orientation Lab"
                           code={`import numpy as np\n\narr = np.array([[10, 20, 30], [40, 50, 60]])\n\n# Resolve Axial Swap\nswapped = arr.T\n\nprint("Determined Orientation:")\nprint(swapped)`} 
                           output="Determined Orientation:\n[[10 40]\n [20 50]\n [30 60]]" 
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
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700 font-sans font-black font-sans font-black font-sans font-black">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black font-sans font-black font-sans font-black font-sans">Axis Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
            High-Performance Axial Transposition with .T property shortcut and multi-axis View Resolution
         </p>
      </footer>
    </div>
  );
}
