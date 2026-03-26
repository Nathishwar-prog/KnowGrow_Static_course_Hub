import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Calculator, Layout, AlertTriangle, RotateCw, Activity, Cpu, CodeXml, Layers, Scaling, ArrowRight } from 'lucide-react';

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
        det: (arr: any) => {
            if (!Array.isArray(arr) || !Array.isArray(arr[0])) return "Error: Matrix required";
            const rows = arr.length;
            const cols = arr[0].length;
            if (rows !== cols) return "Error: Matrix must be square";
            
            if (rows === 2) {
                return arr[0][0] * arr[1][1] - arr[0][1] * arr[1][0];
            }
            
            if (rows === 3) {
                 const a = arr[0][0], b = arr[0][1], c = arr[0][2];
                 const d = arr[1][0], e = arr[1][1], f = arr[1][2];
                 const g = arr[2][0], h = arr[2][1], i = arr[2][2];
                 return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
            }
            return "Error: Simplified sandbox only supports up to 3x3 determinants";
        },
        inv: (arr: any) => "Inverse (Identity check pass)",
        slogdet: (arr: any) => {
            const d = NumpySandbox.np.linalg.det(arr);
            if (typeof d === 'string') return d;
            return [Math.sign(d), Math.log(Math.abs(d))];
        }
    },
    isclose: (a: number, b: number) => Math.abs(a - b) < 1e-9
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
       .replace(/np\.linalg\.det\((.+?)\)/g, 'np.linalg.det($1)')
       .replace(/np\.linalg\.slogdet\((.+?)\)/g, 'np.linalg.slogdet($1)')
       .replace(/np\.isclose\((.+?),\s*0\)/g, 'np.isclose($1, 0)')
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

export default function NpLinalgDet() {
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
        purple: 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/30',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Determinant Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'SOLVING DET...' : 'RUN SOLVER'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Determinant Scalar
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Equation result pending...'}
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
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em]">Linear Algebra Engine</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.linalg.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">det</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left">
               Compute the scalar <span className="text-white font-medium">Determinant</span> of a square matrix. The critical indicator of matrix invertibility, spatial scaling, and existence of linear solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Calculator size={24} className="text-blue-400" /> Scalar Output
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
                { id: 'concept', label: '1. Math of Det', icon: BookOpen },
                { id: 'examples', label: '2. 2D & 3D Ops', icon: Layout },
                { id: 'invert', label: '3. Invertibility', icon: Scaling },
                { id: 'precision', label: '4. Performance', icon: Activity },
                { id: 'pro', label: '5. Senior Tricks', icon: Zap }
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
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-110 transition-transform duration-700">
                  <Calculator size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4">
                  <Lightbulb size={20} /> Solver Hint 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  If Determinant = 0, the matrix is "Singular" and cannot be inverted. Always use <code className="text-blue-300">np.isclose</code> to check for zero due to float precision!
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Scaling size={20} /> Matrix Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  ❗ Det only works on <span className="text-indigo-300 font-black italic">Square Matrices</span> (n × n). Using a rectangular matrix will trigger a shape error.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                  <AlertTriangle size={20} /> Floating Point
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Determinant results are usually floats. Be wary of precision errors in complex physics or graphics simulations.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Determinant Fundamentals" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl text-left">
                         The <span className="text-blue-400 font-bold italic">Determinant</span> is a scalar value that describes unique geometric and algebraic properties of a square matrix, including its <span className="text-blue-400 italic">invertibility status</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Invertibility", desc: "Check inverse exists", icon: "↺" },
                           { label: "Solutions", desc: "System uniqueness", icon: "✓" },
                           { label: "Scaling", desc: "Volume transformation", icon: "📐" },
                           { label: "Physics", desc: "Force & motion det", icon: "⚛️" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-800 mb-12">
                      <h4 className="text-white font-black text-xl mb-6 flex items-center gap-3 tracking-widest uppercase">
                         <Scaling size={20} className="text-blue-400" /> The 2×2 Formula
                      </h4>
                      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                         <div className="bg-black/60 p-10 rounded-3xl border border-slate-800 font-serif italic text-3xl">
                            det([a b; c d]) = ad - bc
                         </div>
                         <div className="text-sm text-slate-400 font-medium leading-relaxed max-w-sm text-left">
                            This simple cross-multiplication subtraction is the mathematical backbone for calculating matrix properties.
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="blue"
                    title="2×2 Determinant Calculation"
                    description="Standard numerical solver for a simple matrix."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\n# (1*4) - (2*3) = -2\ndet_val = np.linalg.det(arr)\n\nprint("Matrix Determinant:", det_val)`} 
                    output="Matrix Determinant: -2.0" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'examples' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. 3×3 & Higher Order Systems" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left">
                      NumPy's solver scales efficiently to higher dimensions, utilizing <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">LU decomposition</span> to handle large matrix systems.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="3×3 Complex Matrix"
                    description="Solving a 3D system determinant."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [0, 1, 4], [5, 6, 0]])\n\ndet_val = np.linalg.det(arr)\n\nprint("3×3 Master Determinant:")\nprint(det_val)`} 
                    output="3×3 Master Determinant:\n1.0" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'invert' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. The Invertibility Rule" color="emerald" />
                   
                   <div className="p-12 bg-emerald-950/20 border border-emerald-500/30 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
                        <Calculator size={240} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 text-left">
                        <Activity className="text-emerald-500" size={28} /> Singular vs Invertible
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left">
                        If <code className="text-emerald-400 font-bold">det = 0</code>, the matrix is <span className="text-white font-bold italic">Singular</span> (squashed into a lower dimension) and has no inverse.
                     </p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-8 bg-black/60 rounded-3xl border border-rose-500/20">
                           <h5 className="text-rose-500 font-black text-[10px] uppercase tracking-widest mb-4">Det = 0</h5>
                           <p className="text-xs text-slate-400 font-bold">Singular / Not Invertible</p>
                        </div>
                        <div className="p-8 bg-black/60 rounded-3xl border border-emerald-500/20">
                           <h5 className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-4">Det ≠ 0</h5>
                           <p className="text-xs text-slate-400 font-bold">Invertible / Unique Solution</p>
                        </div>
                     </div>

                     <CodeExample 
                        color="emerald"
                        title="Real-World Inversion Check"
                        description="Determining if an HR record matrix can be analytically reversed."
                        code={`import numpy as np\n\narr = np.array([[2, 3], [4, 6]])\ndet_val = np.linalg.det(arr)\n\n# Rule: If det is 0, no inverse exists\nif np.isclose(det_val, 0):\n    print("Verdict: Not Invertible")\nelse:\n    print("Verdict: Invertible")`} 
                        output="Verdict: Not Invertible" 
                      />
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'precision' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="4. Performance & Stability" color="rose" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4">
                            <Layers size={16} /> LU Decomposition
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Standard det() uses LU logic, which is highly optimized for medium-sized matrices.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                            <Calculator size={16} /> slogdet() Alternative
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            For mega-matrices, det() may overflow. Use <code className="text-rose-300">slogdet()</code> for log-stable results.
                         </p>
                         <CodeExample 
                           color="rose"
                           title="Log-Determinant Stability"
                           code={`import numpy as np\n\nsign, logdet = np.linalg.slogdet(arr)\nprint(f"LogDet: {logdet}")`} 
                           output="LogDet: 0.0" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Dev Recommendations" color="amber" />
                   
                   <ul className="space-y-8 mb-16">
                      {[
                        { tip: "Avoid Rank Drift", desc: "For checking matrix rank, use np.linalg.matrix_rank instead of det().", icon: Target },
                        { tip: "Tolerance Check", desc: "Never check det == 0. Always use np.isclose(det, 0) for float safety.", icon: Scaling },
                        { tip: "System Stability", desc: "Determinants are sensitive to outsized values; normalize your matrix before calculation.", icon: Cpu }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-8 group">
                           <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
                              <item.icon size={22} />
                           </div>
                           <div>
                              <h5 className="text-sm font-black text-white uppercase tracking-widest mb-2">{item.tip}</h5>
                              <p className="text-xs text-slate-500 font-semibold leading-relaxed text-left">{item.desc}</p>
                           </div>
                        </li>
                      ))}
                   </ul>

                   <div className="mt-28 bg-gradient-to-br from-blue-800/40 to-indigo-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RotateCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-blue-400 italic font-light">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                             Challenge: Design a <span className="text-white font-bold">3×3 matrix</span> with a determinant of 1. Then verify its invertibility using the solver!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="System Stability Mission"
                           code={`import numpy as np\n\narr = np.array([[1, 0, 0], [0, 1, 0], [0, 0, 1]])\n\ndet_val = np.linalg.det(arr)\n\nprint("Identity Determinant Check:")\nprint(det_val)`} 
                           output="Identity Determinant Check:\n1.0" 
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
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Linear Solution Solvers v4.5</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Surgical Matrix Auditing with Machine Precision
         </p>
      </footer>
    </div>
  );
}
