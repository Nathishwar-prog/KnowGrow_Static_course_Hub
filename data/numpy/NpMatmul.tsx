import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Boxes, ArrowRight, Grid3X3 } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'string' && val.startsWith('ValueError')) return val;
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
    matmul: (a: any, b: any) => {
        // Handling 1D dot product
        if (!Array.isArray(a[0]) && !Array.isArray(b[0])) {
            return a.reduce((sum: number, val: number, idx: number) => sum + val * b[idx], 0);
        }
        
        // Matrix multiplication (m x n) * (n x p)
        const rowsA = a.length, colsA = Array.isArray(a[0]) ? a[0].length : 1;
        const rowsB = b.length, colsB = Array.isArray(b[0]) ? b[0].length : 1;
        
        if (colsA !== rowsB) return "ValueError: shapes not aligned: (2,2) and (1,2) mismatch logic";
        
        // Simple 2D implementation for sandbox
        const res = Array.from({ length: rowsA }, () => new Array(colsB).fill(0));
        for (let i = 0; i < rowsA; i++) {
            for (let j = 0; j < colsB; j++) {
                for (let k = 0; k < colsA; k++) {
                    res[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return res;
    },
    dot: (a: any, b: any) => NumpySandbox.np.matmul(a, b),
    random: {
        rand: () => "[[0.2  0.5]\n [0.8  0.1]] // Batch Sim"
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
       .replace(/(.+?)\s*@\s*(.+?)/g, 'np.matmul($1, $2)') // @ operator to matmul shim
       .replace(/np\.matmul\((.+?)\)/g, 'np.matmul($1)')
       .replace(/np\.dot\((.+?)\)/g, 'np.dot($1)')
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

export default function NpMatmul() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left">{title}</h2>
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4 text-left">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Algebraic Multiplier Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'DOT PRODUCT...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px]">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-indigo-300 outline-none resize-none selection:bg-indigo-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-sans font-black">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Vector Product Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Matrix product pending...'}
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
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans">Algebraic Vector Multiplication</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent italic tracking-[-0.08em]">matmul</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left">
               Perform the <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8 font-sans">Matrix Row-Column Product</span>. The computational engine for Neural Networks, coordinate transformations, and complex linear systems.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Grid3X3 size={24} className="text-indigo-400" /> Matrix Hub
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <nav className="sticky top-12 space-y-5">
              {[
                { id: 'concept', label: '1. Row-Column Logic', icon: BookOpen },
                { id: 'modern', label: '2. Modern @ Syntax', icon: Zap },
                { id: 'shapes', label: '3. Shape Alignment', icon: Scaling },
                { id: 'neural', label: '4. Neural Network Lab', icon: Cpu },
                { id: 'pro', label: '5. Senior Insights', icon: Layout }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-bold'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <Boxes size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4">
                  <Lightbulb size={20} /> Solver Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Unlike <code className="text-indigo-300 font-bold">*</code> multiplication, <code className="text-indigo-300 font-bold">np.matmul()</code> performs actual dot products of rows and columns!
               </p>
            </div>
            
            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Scaling size={20} /> Shape Law
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  The law of alignment: <span className="text-blue-300 font-black italic underline decoration-blue-500/30 underline-offset-4 font-sans italic font-sans font-sans font-sans">Columns of A == Rows of B</span>. If this fails, the system throws a ValueError.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                  <AlertTriangle size={20} /> Invalid Matrix
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Trying to multiply mismatched shapes like <code className="text-rose-300 font-bold font-sans">([[1,2]])</code> by <code className="text-rose-300 font-bold font-sans">([[1,2]])</code> will crash the environment!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Algebraic Logic Hub" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left font-sans text-left">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans">
                         <span className="text-indigo-400 font-bold italic font-sans italic font-sans font-sans">np.matmul()</span> is the actual matrix product of linear algebra. Every element in the result is the <span className="text-indigo-400 font-bold italic underline decoration-indigo-500/20 underline-offset-8 font-sans italic">dot product</span> of a row from the first matrix and a column from the second.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Neural Nets", desc: "Weights x Inputs", icon: "🧠" },
                           { label: "Graphics", desc: "Rotation matrices", icon: "📐" },
                           { label: "Physics", desc: "System transformations", icon: "⚛️" },
                           { label: "Batch Ops", desc: "Higher dimensions", icon: "📦" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans text-left">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="indigo"
                    title="2D Matrix Multiplier"
                    description="Executing a standard row-column product on two 2×2 matrices."
                    code={`import numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\n\n# Standard dot product of rows and columns\nC = np.matmul(A, B)\n\nprint("Product Matrix C:")\nprint(C)`} 
                    output="Product Matrix C:\n[[19  22]\n [43  50]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'modern' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="2. The Modern @ Protocol" color="cyan" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans">
                      Python 3.5+ introduced the <span className="text-cyan-400 font-black underline decoration-cyan-500/30 underline-offset-8">@ operator</span>. It is syntactically cleaner and serves as a direct alias for <code className="text-cyan-400 font-bold font-sans">np.matmul()</code>.
                   </p>

                   <CodeExample 
                    color="cyan"
                    title="Clean Syntax Sandbox"
                    description="Using the modern @ operator for matrix multiplication."
                    code={`import numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\n\n# Modern Syntax: A @ B\nresult = A @ B\n\nprint("Modern Result:")\nprint(result)`} 
                    output="Modern Result:\n[[19  22]\n [43  50]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'shapes' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. Shape Alignment Audit" color="rose" />
                   
                   <div className="bg-rose-950/20 border border-rose-500/30 rounded-[3.5rem] p-12 text-left mb-12 relative overflow-hidden group shadow-3xl">
                      <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
                         <Scaling size={240} />
                      </div>
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                         <Scaling className="text-rose-500" size={28} /> The (m×n) ⋅ (n×p) Rule
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans text-left">
                         The internal dimensions <span className="text-rose-400 font-bold italic font-sans italic font-sans font-sans italic font-sans">MUST match</span>. If A has 3 columns, B must have 3 rows.
                      </p>

                      <CodeExample 
                        color="rose"
                        title="Mismatch Detection Sandbox"
                        description="Observing shape errors with non-aligned coordinates."
                        code={`import numpy as np\n\n# Misaligned shapes demo\n# (1,2) and (1,2) cannot multiply\nA = np.array([[1, 2]])\nB = np.array([[1, 2]])\n\nprint("Executing Audit Multiply:")\nprint(np.matmul(A, B))`} 
                        output="Executing Audit Multiply:\nValueError: shapes not aligned: (2,2) and (1,2) mismatch logic" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'neural' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Cpu} title="4. Neural Network Simulation" color="emerald" />
                   
                   <div className="p-12 bg-emerald-950/20 border border-emerald-500/30 rounded-[3rem] group">
                      <h4 className="text-white font-black text-2xl mb-8 text-left font-sans text-left">Forward Pass Logic</h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans italic font-sans italic font-sans text-left font-sans">
                         In Deep Learning, neurons calculate outputs via <code className="text-emerald-400 font-bold italic font-sans italic font-sans">Inputs @ Weights</code>. This vectorized approach allows models to process thousands of samples instantly.
                      </p>

                      <CodeExample 
                        color="emerald"
                        title="Layer Weight Multiplier"
                        description="Simulating data features flowing through a weight matrix."
                        code={`import numpy as np\n\n# Input: 2 samples, 3 features\nX = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Weights: 3 features → 2 hidden units\nW = np.array([[1, 0], [0, 1], [1, 1]])\n\noutput = X @ W\n\nprint("Layer Output Signal:")\nprint(output)`} 
                        output="Layer Output Signal:\n[[ 4   5]\n [10  11]]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={RefreshCw} title="5. Senior Dev Protocol" color="amber" />
                   
                   <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 mb-16 text-left font-sans text-left">
                      <h5 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-8 italic font-sans tracking-[0.2em] border-b border-amber-500/10 pb-4">matmul vs dot Benchmark</h5>
                      <div className="grid grid-cols-2 gap-12 font-sans font-bold">
                         <div className="space-y-4">
                            <span className="text-[10px] text-slate-500 uppercase mb-2 block font-sans font-black tracking-widest leading-none">np.matmul()</span>
                            <div className="text-emerald-400 text-xs font-black italic">✅ Preferred for 3D+ Batches</div>
                            <div className="text-emerald-400 text-xs font-black italic">✅ Cleaner Semantics</div>
                            <div className="text-emerald-400 text-xs font-black italic text-left">✅ Modern @ Syntax alias</div>
                         </div>
                         <div className="space-y-4 font-sans font-bold">
                            <span className="text-[10px] text-slate-500 uppercase mb-2 block font-sans font-black tracking-widest leading-none">np.dot()</span>
                            <div className="text-rose-400 text-xs font-black italic">❌ Confusing in 3D Space</div>
                            <div className="text-rose-400 text-xs font-black italic">✅ Same for 2D Matrices</div>
                            <div className="text-rose-400 text-xs font-black italic text-left font-sans font-bold">✅ Older legacy behavior</div>
                         </div>
                      </div>
                   </div>

                   <ul className="space-y-8 mb-16 text-left">
                      {[
                        { tip: "Use @ Always", desc: "It is the standard for modern NumPy and Torch code.", icon: Zap },
                        { tip: "Batch Processing", desc: "matmul efficiently handles higher dimensions in Deep Learning batches.", icon: Boxes },
                        { tip: "Avoid * operator", icon: AlertTriangle, desc: "The asterisk (*) performs element-wise math, NOT matrix math." }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-8 group">
                           <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
                              <item.icon size={22} />
                           </div>
                           <div className="text-left">
                              <h5 className="text-sm font-black text-white uppercase tracking-widest mb-2 font-sans">{item.tip}</h5>
                              <p className="text-xs text-slate-500 font-semibold leading-relaxed font-sans">{item.desc}</p>
                           </div>
                        </li>
                      ))}
                   </ul>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s] font-sans">
                         <RefreshCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans">
                            🧪 Dimension <span className="text-indigo-400 italic font-light font-sans italic font-sans font-sans font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans text-left font-sans">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-sans font-sans">dot product mission</span> using two 1D arrays [1, 2] and [3, 4]. Verify that the scalar result is 11!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="1D Dot Product Lab"
                           code={`import numpy as np\n\na = np.array([1, 2])\nb = np.array([3, 4])\n\n# Scalar result of row dot column\nresult = a @ b\n\nprint("Resolved Scalar Value:")\nprint(result)`} 
                           output="Resolved Scalar Value:\n11" 
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
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700 font-sans">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black">KG</div>
            <div className="font-sans">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Algebraic Multiplier v5.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none">
            Surgical Matrix Matrix dot product with Shape Alignment Guards
         </p>
      </footer>
    </div>
  );
}
