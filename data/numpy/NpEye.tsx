import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Square, Grid3X3, AlertTriangle, RotateCw, Activity, Cpu, CodeXml, Layers, Eye } from 'lucide-react';

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
    eye: (N: number, M?: number, k: number = 0) => {
        const rows = N;
        const cols = M === undefined || M === null ? N : M;
        const res = Array.from({ length: rows }, () => Array(cols).fill(0));
        for (let i = 0; i < rows; i++) {
            const j = i + k;
            if (j >= 0 && j < cols) {
                res[i][j] = 1;
            }
        }
        return res;
    },
    dot: (a: any, b: any) => {
        if (!Array.isArray(a[0])) return null; // Simplified 2D only
        const rowsA = a.length;
        const colsA = a[0].length;
        const rowsB = b.length;
        const colsB = b[0].length;
        if (colsA !== rowsB) return "Incompatible dimensions for dot product";
        const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));
        for (let i = 0; i < rowsA; i++) {
            for (let j = 0; j < colsB; j++) {
                for (let l = 0; l < colsA; l++) {
                    result[i][j] += a[i][l] * b[l][j];
                }
            }
        }
        return result;
    },
    identity: (n: number) => NumpySandbox.np.eye(n),
    diag: (v: any) => {
        if (Array.isArray(v)) {
            const res = Array.from({ length: v.length }, () => Array(v.length).fill(0));
            v.forEach((val, i) => res[i][i] = val);
            return res;
        }
        return null;
    },
    ones: (shape: any) => {
       const [r, c] = Array.isArray(shape) ? shape : [shape, shape];
       return Array.from({ length: r }, () => Array(c).fill(1));
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

export default function NpEye() {
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
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Matrix Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'INITIALIZING...' : 'EXECUTE'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Identity Result
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Matrix pattern pending...'}
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
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em]">Algebraic Identity Framework</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">eye</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Create Identity Matrices with precision. The mathematical "1" of Linear Algebra, essential for <span className="text-white font-medium">Neural Weight Initialization</span> and spatial transformations.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Grid3X3 size={24} className="text-blue-400" /> Identity Matrix
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
                { id: 'concept', label: '1. Identity Concept', icon: BookOpen },
                { id: 'shifts', label: '2. Diagonal Shifts', icon: Layers },
                { id: 'multiply', label: '3. Dot Product Rule', icon: Activity },
                { id: 'compare', label: '4. Related Tools', icon: Target },
                { id: 'apps', label: '5. Real-World ML', icon: Cpu }
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
                  <Lightbulb size={20} /> Teacher Advice 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Start with the identity concept in math, then show the multiplication property, and finally visualize with a heatmap. Pattern recognition is key!
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Target size={20} /> Similarity Check
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  Don't confuse with <code className="text-indigo-300">np.ones()</code>. Identity matrices ONLY have 1s on the diagonal.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Pro Tip
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Using <code className="text-rose-300">np.eye</code> for masking diagonals is ⚡ significantly faster than manual loop creation.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Identity Matrix Concept" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl">
                         <span className="text-blue-400 font-bold italic">np.eye()</span> creates a 2D array where all diagonal elements are <span className="text-blue-400 italic">1</span> and all others are <span className="text-blue-400 italic">0</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Linear Algebra", desc: "Foundation of matrices", icon: "📐" },
                           { label: "ML Init", desc: "Weight matrix base", icon: "🤖" },
                           { label: "Graphics", desc: "Rotation identity", icon: "🎨" },
                           { label: "Neural Nets", desc: "Residual links", icon: "🔗" }
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
                    title="Square Identity Matrix"
                    description="The standard 3x3 identity matrix (I₃)."
                    code={`import numpy as np\n\n# Create a 3x3 diagonal of 1s\nI = np.eye(3)\n\nprint("Identity Matrix (3x3):")\nprint(I)`} 
                    output="Identity Matrix (3x3):\n[[1.0  0.0  0.0]\n [0.0  1.0  0.0]\n [0.0  0.0  1.0]]" 
                  />
                  
                   <CodeExample 
                    color="indigo"
                    title="Non-Square Matrix"
                    description="Yes, Identity-like matrices can be rectangular."
                    code={`import numpy as np\n\n# 2 rows, 4 columns\nrect = np.eye(2, 4)\n\nprint("Rectangular Eye:")\nprint(rect)`} 
                    output="Rectangular Eye:\n[[1.0  0.0  0.0  0.0]\n [0.0  1.0  0.0  0.0]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'shifts' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layers} title="2. The 'k' Parameter: Shifting Gears" color="violet" />
                   
                   <div className="bg-violet-950/10 border border-violet-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                         <Layers size={140} />
                      </div>
                      <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-8">
                         The <span className="text-violet-400 font-black">k</span> parameter allows you to move the diagonal string of 1s above or below the center.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="bg-black/40 p-10 rounded-3xl border border-violet-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-violet-400 mb-4">k = 1</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Above Main Diagonal</span>
                         </div>
                         <div className="bg-black/40 p-10 rounded-3xl border border-violet-500/20 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                            <span className="text-4xl font-black text-violet-400 mb-4">k = -1</span>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Below Main Diagonal</span>
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="violet"
                    title="Diagonal Shift Sandbox"
                    description="Experiments with positive and negative shifts."
                    code={`import numpy as np\n\n# Shifted Up (Above Main)\nabove = np.eye(3, k=1)\n\n# Shifted Down (Below Main)\nbelow = np.eye(3, k=-1)\n\nprint("K=1 (Upper):")\nprint(above)\nprint("\\nK=-1 (Lower):")\nprint(below)`} 
                    output="K=1 (Upper):\n[[0.0  1.0  0.0]\n [0.0  0.0  1.0]\n [0.0  0.0  0.0]]\n\nK=-1 (Lower):\n[[0.0  0.0  0.0]\n [1.0  0.0  0.0]\n [0.0  1.0  0.0]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'multiply' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="3. The Identity Property" color="emerald" />
                   
                   <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <Square size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <Eye className="text-emerald-500" size={28} /> Matrix Multiplication Identity
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                        Multiplying any matrix A by the Identity matrix I leaves A <span className="text-white font-bold italic">unchanged</span>. It is the "1" of matrix world.
                     </p>
                     
                     <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-10 overflow-hidden text-center">
                        <div className="flex items-center justify-center gap-8 font-serif text-3xl">
                           <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">Matrix A</div>
                           <div className="text-slate-500">×</div>
                           <div className="p-4 bg-blue-500/20 border border-blue-500/40 rounded-xl">Identity I</div>
                           <div className="text-slate-500">=</div>
                           <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">Matrix A</div>
                        </div>
                     </div>

                     <CodeExample 
                        color="emerald"
                        title="Dot Product Demo"
                        description="Verifying the identity property A • I = A."
                        code={`import numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nI = np.eye(2)\n\n# Perform matrix multiplication\nresult = np.dot(A, I)\n\nprint("Original A:")\nprint(A)\nprint("\\nResult (A • I):")\nprint(result)`} 
                        output="Original A:\n[[1  2]\n [3  4]]\n\nResult (A • I):\n[[1.0  2.0]\n [3.0  4.0]]" 
                      />
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'compare' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Target} title="4. Identity Variations" color="amber" />
                   
                   <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
                      <table className="w-full text-left border-collapse">
                         <thead>
                            <tr className="bg-slate-800/10">
                               <th className="px-10 py-6 text-sm font-black text-slate-300 uppercase tracking-widest">Function</th>
                               <th className="px-10 py-6 text-sm font-black text-amber-400 uppercase tracking-widest">Operational Role</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-slate-800">
                            {[
                               { f: "np.eye()", d: "Standard identity, supports non-square and shifts" },
                               { f: "np.identity()", d: "Strictly square identity matrices" },
                               { f: "np.diag()", d: "Identity-like but with custom values on diagonal" }
                            ].map((row, i) => (
                               <tr key={i} className="hover:bg-white/5 transition-colors">
                                  <td className="px-10 py-6 text-sm font-black text-white italic">{row.f}</td>
                                  <td className="px-10 py-6 text-sm font-medium text-slate-400 leading-relaxed">{row.d}</td>
                               </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>

                   <CodeExample 
                    color="amber"
                    title="Comparison Sandbox"
                    code={`import numpy as np\n\nprint("eye(2, 3):")\nprint(np.eye(2, 3))\n\nprint("\\ndiag([5, 10]):")\nprint(np.diag([5, 10]))`} 
                    output="eye(2, 3):\n[[1.0  0.0  0.0]\n [0.0  1.0  0.0]]\n\ndiag([5, 10]):\n[[5  0]\n [0  10]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'apps' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Cpu} title="5. High Resolution Laboratory" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group hover:bg-slate-800/60 transition-all border-b-4 border-b-blue-500/20">
                         <div className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/10 pb-4">
                            <Activity size={16} /> Masking Diagonals
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic">
                            Create a boolean mask for the main diagonal to isolate data features.
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Fast Masking"
                           code={`import numpy as np\n\n# Boolean Identity\nmask = np.eye(3, dtype=bool)\n\nprint("Identity Mask:")\nprint(mask)`} 
                           output="Identity Mask:\n[[True  False  False]\n [False  True  False]\n [False  False  True]]" 
                         />
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group hover:bg-slate-800/60 transition-all border-b-4 border-b-rose-500/20">
                         <div className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                            <Layers size={16} /> Matrix Normalization
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic">
                            Normalize identity shifts for specific layer offsets in a neural network.
                         </p>
                         <CodeExample 
                           color="rose"
                           title="Layer Shift Init"
                           code={`import numpy as np\n\n# Multi-layer shift setup\nweights = np.eye(4)\nprint("Base Weights:")\nprint(weights)`} 
                           output="Base Weights:\n[[1.0  0.0  0.0  0.0]\n [0.0  1.0  0.0  0.0]\n [0.0  0.0  1.0  0.0]\n [0.0  0.0  0.0  1.0]]" 
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
                            Mini Exercise: Create a <span className="text-white font-bold">4x4</span> identity, a <span className="text-white font-bold">3x5</span> shifted matrix, and an integer-based identity.
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Student Mission"
                           code={`import numpy as np\n\n# 1. 4x4 Identity\nm1 = np.eye(4)\n\n# 2. 3x5 shifted up (k=1)\nm2 = np.eye(3, 5, k=1)\n\nprint("4x4 Standard:")\nprint(m1)\nprint("\\n3x5 Shifted (k=1):")\nprint(m2)`} 
                           output="4x4 Standard:\n[[1.0  0.0  0.0  0.0]\n [0.0  1.0  0.0  0.0]\n [0.0  0.0  1.0  0.0]\n [0.0  0.0  0.0  1.0]]\n\n3x5 Shifted (k=1):\n[[0.0  1.0  0.0  0.0  0.0]\n [0.0  0.0  1.0  0.0  0.0]\n [0.0  0.0  0.0  1.0  0.0]]" 
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
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Mastering Matrix Identity v5.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Linear Algebra Foundational Blocks with Zero Overhead
         </p>
      </footer>
    </div>
  );
}
