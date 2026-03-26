import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Calculator, Layout, AlertTriangle, Activity, Cpu, CodeXml, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'string' && val.startsWith('Error:')) return val;
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
    linalg: {
        det: (arr: any) => arr[0][0]*arr[1][1] - arr[0][1]*arr[1][0],
        solve: (A: any, b: any) => {
             const det = NumpySandbox.np.linalg.det(A);
             if (Math.abs(det) < 1e-9) return "Error: Singular matrix";
             
             if (Array.isArray(b[0])) { // multiple RHS
                 const a1 = A[0][0], a2 = A[0][1], a3 = A[1][0], a4 = A[1][1];
                 const inv = [[a4/det, -a2/det], [-a3/det, a1/det]];
                 const res = [[0,0],[0,0]];
                 for(let i=0; i<2; i++) {
                     for(let j=0; j<2; j++) {
                         let sum = 0;
                         for(let k=0; k<2; k++) {
                             sum += inv[i][k] * b[k][j];
                         }
                         res[i][j] = Math.abs(sum) < 1e-9 ? 0 : sum;
                     }
                 }
                 return res;
             }
             
             const x = (b[0] * A[1][1] - b[1] * A[0][1]) / det;
             const y = (A[0][0] * b[1] - A[1][0] * b[0]) / det;
             return [Math.abs(x) < 1e-9 ? 0 : x, Math.abs(y) < 1e-9 ? 0 : y];
        },
        lstsq: (A: any, b: any) => [NumpySandbox.np.linalg.solve(A, b), 0, 0, 0]
    },
    dot: (a: any, b: any) => {
        if (!Array.isArray(b[0])) { // Matrix-Vector
            return [
                a[0][0]*b[0] + a[0][1]*b[1],
                a[1][0]*b[0] + a[1][1]*b[1]
            ];
        }
        return "Error: Dot logic limited for sandbox";
    },
    isclose: (a: number, b: number) => Math.abs(a-b) < 1e-9
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
       .replace(/X\.T @ X/g, 'A') // Normal equation shim
       .replace(/X\.T @ y/g, 'b')
       .replace(/np\.linalg\.solve\((.+?),\s*(.+?)\)/g, 'np.linalg.solve($1, $2)')
       .replace(/np\.linalg\.det\((.+?)\)/g, 'np.linalg.det($1)')
       .replace(/np\.isclose\((.+?),\s*0\)/g, 'np.isclose($1, 0)')
       .replace(/np\.dot\((.+?),\s*(.+?)\)/g, 'np.dot($1, $2)')
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

export default function NpLinalgSolve() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title, description, color="cyan" }: any) => {
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
        purple: 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/30',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4 text-left">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Linear System Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'CALCULATING...' : 'RUN SOLVER'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px]">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-cyan-300 outline-none resize-none selection:bg-cyan-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Unknown Solution X
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Solution vector pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-cyan-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.6em]">System Solution Protocol</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.linalg.<span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em]">solve</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left">
               Compute unknown variables in a linear system with surgical accuracy. The industrial standard for solving <span className="text-white font-medium italic underline decoration-cyan-500/30 underline-offset-8">Ax = b</span> equations in ML, Physics, and Data Pipelines.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Calculator size={24} className="text-cyan-400" /> System Solver
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
                { id: 'concept', label: '1. Equation Theory', icon: BookOpen },
                { id: 'basics', label: '2. Standard Ax = b', icon: Layout },
                { id: 'verify', label: '3. Solution Audit', icon: CheckCircle2 },
                { id: 'industrial', label: '4. Industrial Solve', icon: Cpu },
                { id: 'pro', label: '5. Advanced Paths', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-cyan-600 border-cyan-500 text-white shadow-[0_20px_60px_rgba(6,182,212,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-cyan-500/5 border border-cyan-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left">
               <div className="absolute -right-8 -bottom-8 p-10 text-cyan-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <Cpu size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/20 pb-4">
                  <Lightbulb size={20} /> Performance Rule 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  linalg.solve() uses LU Decomposition. It is significantly <span className="text-cyan-400 font-black underline decoration-cyan-500/30 underline-offset-4 font-sans">FASTER and more STABLE</span> than manual matrix inversion (A⁻¹ ⋅ b).
               </p>
            </div>
            
            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Activity size={20} /> Matrix Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  ❗ The coefficient matrix A must be <span className="text-blue-300 font-black italic">SQUARE</span> (n × n) and non-singular (det ≠ 0) for an exact solution to exist.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                  <AlertTriangle size={20} /> Singular Warn
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  Trying to solve a singular system throws a <code className="text-rose-300">LinAlgError</code>. If no exact solution exists, use <code className="text-rose-300 font-bold underline underline-offset-4">np.linalg.lstsq</code> instead.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Linear Equality Systems" color="cyan" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-cyan-600 pl-12 max-w-4xl text-left font-sans">
                         Solving a linear system means finding the unknown <span className="text-cyan-400 font-bold italic">x vector</span> that satisfies the equation <span className="text-cyan-400 font-bold italic underline decoration-cyan-500/20 underline-offset-8 font-sans">Ax = b</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Regression", desc: "Predict ML weights", icon: "🧠" },
                           { label: "Physics", desc: "Force balance simulation", icon: "⚛️" },
                           { label: "Optimization", desc: "Finding sweet spots", icon: "📐" },
                           { label: "Equations", desc: "Pure algebraic solving", icon: "⎵" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-cyan-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-800 mb-12">
                      <h4 className="text-white font-black text-xl mb-6 flex items-center gap-3 tracking-widest uppercase">
                         <Calculator size={20} className="text-cyan-400" /> Algebraic Form
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                         <div className="bg-black/60 p-10 rounded-3xl border border-slate-800">
                             <h6 className="text-cyan-400 font-black text-[10px] uppercase mb-6 tracking-widest italic">Standard Equality</h6>
                             <div className="font-serif italic text-2xl text-slate-100 leading-none">
                                2x + y = 5<br/>
                                x + 3y = 6
                             </div>
                         </div>
                         <div className="bg-black/60 p-10 rounded-3xl border border-slate-800 text-left">
                             <h6 className="text-cyan-400 font-black text-[10px] uppercase mb-6 tracking-widest italic">Matrix Representation</h6>
                             <div className="font-mono text-xs text-slate-400 leading-relaxed font-sans">
                                A = [[2, 1], [1, 3]]<br/>
                                b = [5, 6]
                             </div>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'basics' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. The standard Solver Protocol" color="blue" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left">
                      Pass the coefficient matrix <span className="text-blue-400 font-bold">A</span> and the result vector <span className="text-blue-400 font-bold">b</span> to compute the unknown <span className="text-blue-400 font-bold">x</span> instantly.
                   </p>

                   <CodeExample 
                    color="blue"
                    title="Simple System Solution"
                    description="Finding x and y for the 2×2 system demo."
                    code={`import numpy as np\n\nA = np.array([[2, 1], [1, 3]])\nb = np.array([5, 6])\n\n# Direct Solver\nx = np.linalg.solve(A, b)\n\nprint("Solution Vector X:")\nprint(x)`} 
                    output="Solution Vector X:\n[1.8 1.4]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'verify' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={CheckCircle2} title="3. Numerical Soulution Audit" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left">
                      Verification is the hallmark of professional engineering. Proving that <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">A ⋅ x = b</span> confirms the integrity of the solver.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Verification Sandbox"
                    description="Multiplying the solved X back into the system."
                    code={`import numpy as np\n\nA = np.array([[2, 1], [1, 3]])\nx = np.array([1.8, 1.4])\n\n# Result should match original b [5, 6]\nb_check = np.dot(A, x)\n\nprint("Audit Result:")\nprint(b_check)`} 
                    output="Audit Result:\n[5. 6. ]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'industrial' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Cpu} title="4. Matrix RHS (Multiple Systems)" color="violet" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left">
                     Solve multiple systems at once by passing a matrix of constants into <code className="text-violet-400 font-bold italic">b</code>. Each column in the result will satisfy a corresponding column in the constants matrix.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="Parallel System Solving"
                    description="Executing two systems in a single instruction cycle."
                    code={`import numpy as np\n\nA = np.array([[3, 1], [1, 2]])\nB = np.array([[9, 8], [5, 5]])\n\n# Solve AX = B\nX = np.linalg.solve(A, B)\n\nprint("Simultaneous Batch Solution:")\nprint(X)`} 
                    output="Simultaneous Batch Solution:\n[[2. 1.]\n [1. 2.]]" 
                  />
                  
                   <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 mt-12 text-left">
                      <h5 className="text-xs font-black text-rose-500 uppercase tracking-widest mb-4 italic">Solver Comparison</h5>
                      <div className="grid grid-cols-2 gap-8">
                         <div>
                            <span className="text-[10px] text-slate-500 uppercase mb-2 block">Method: inv(A) @ b</span>
                            <span className="text-xs text-rose-400 font-black">❌ Slower / Less Stable</span>
                         </div>
                         <div>
                            <span className="text-[10px] text-slate-500 uppercase mb-2 block">Method: solve(A, b)</span>
                            <span className="text-xs text-emerald-400 font-black">✅ Optimized LU Logic</span>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Advanced Solution Paths" color="amber" />
                   
                   <div className="bg-amber-950/10 border border-amber-500/20 rounded-[3rem] p-12 mb-16 text-left shadow-2xl">
                      <h4 className="flex items-center gap-3 text-amber-400 font-black text-xs uppercase tracking-widest mb-8 border-b border-amber-500/10 pb-4">
                         <Target size={18} /> Normal Equation: ML Record Prediction
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-10 font-semibold italic text-left">
                        Calculating Linear Regression weights (<span className="text-amber-300">w</span>) by solving the normal equation <span className="text-white font-bold italic">(XᵀX)w = Xᵀy</span>.
                      </p>
                      
                      <CodeExample 
                        color="amber"
                        title="Linear Regression Solver"
                        code={`import numpy as np\n\n# Feature Matrix and Target\nX = np.array([[1, 1], [1, 2], [1, 3]])\ny = np.array([1, 2, 2])\n\n# Normal equation components\nA = X.T @ X\nb = X.T @ y\n\nw = np.linalg.solve(A, b)\n\nprint("Optimized Weights (w):")\nprint(w)`} 
                        output="Optimized Weights (w):\n[0.7 0.5]" 
                      />
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RotateCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans">
                            🧪 Decision <span className="text-cyan-400 italic font-light font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans">
                             Challenge: If a matrix is <span className="text-white font-bold">Singular</span>, which tool should you use to find the <span className="text-white font-bold underline decoration-cyan-500/30 underline-offset-8 font-sans italic">best-fit</span> solution? 
                         </p>
                         <CodeExample 
                           color="cyan"
                           title="Least Squares Mission Lab"
                           code={`import numpy as np\n\n# Tip: use np.linalg.lstsq(A, b, rcond=None)\nprint("The Answer is LSTSQ!")`} 
                           output="The Answer is LSTSQ!" 
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
            <div className="w-16 h-16 bg-cyan-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-cyan-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans">Industrial Linear Solvers v7.2</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none">
            Exact Algebraic Solution Engine with LU Stability
         </p>
      </footer>
    </div>
  );
}

// Minimal Rotate icon shim
const RotateCw = ({ size }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.27L21 8" />
    <path d="M21 3v5h-5" />
  </svg>
);
