import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, RotateCw, Layout, AlertTriangle, Activity, Cpu, CodeXml, Layers, Eye, Calculator, ArrowRight } from 'lucide-react';

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
        inv: (arr: any) => {
            const det = NumpySandbox.np.linalg.det(arr);
            if (Math.abs(det) < 1e-9) return "Error: Singular matrix";
            const a = arr[0][0], b = arr[0][1], c = arr[1][0], d = arr[1][1];
            return [[d/det, -b/det], [-c/det, a/det]];
        },
        solve: (A: any, B: any) => {
             const inv = NumpySandbox.np.linalg.inv(A);
             if (typeof inv === 'string') return inv;
             return [
                 inv[0][0]*B[0] + inv[0][1]*B[1],
                 inv[1][0]*B[0] + inv[1][1]*B[1]
             ];
        }
    },
    dot: (a: any, b: any) => {
        if (!Array.isArray(b[0])) { // Matrix-Vector
            return [
                a[0][0]*b[0] + a[0][1]*b[1],
                a[1][0]*b[0] + a[1][1]*b[1]
            ];
        }
        // Matrix-Matrix 2x2
        const res = [[0,0],[0,0]];
        for(let i=0; i<2; i++) {
            for(let j=0; j<2; j++) {
                let sum = 0;
                for(let k=0; k<2; k++) {
                    sum += a[i][k] * b[k][j];
                }
                res[i][j] = Math.abs(sum) < 1e-9 ? 0 : sum;
            }
        }
        return res;
    },
    eye: (n: number) => {
        const res = [];
        for(let i=0; i<n; i++) {
            const row = new Array(n).fill(0);
            row[i] = 1;
            res.push(row);
        }
        return res;
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
       .replace(/np\.linalg\.inv\((.+?)\)/g, 'np.linalg.inv($1)')
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

export default function NpLinalgInv() {
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
        purple: 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/30',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div className="text-left">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Matrix Inverter Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'INVERTING...' : 'RUN INVERSE'}
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
          <div className="p-8 bg-slate-950/40 font-mono text-sm">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Identity Mirror
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed text-left">
              {sandboxOutput || output || '// Algebraic reverse pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em]">Algebraic Reverse Ops</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.linalg.<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent italic tracking-[-0.08em]">inv</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left">
               Calculate the <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Matrix Inverse</span>. The mathematical undo-button for linear systems, coordinate transformations, and machine learning record reversal.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <RotateCw size={24} className="text-indigo-400" /> Mirror Property
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
                { id: 'concept', label: '1. Mirror Logic', icon: BookOpen },
                { id: 'verify', label: '2. Identity Check', icon: Eye },
                { id: 'linear', label: '3. Solving Systems', icon: Calculator },
                { id: 'solve', label: '4. linalg.solve()', icon: Cpu },
                { id: 'pro', label: '5. Singular Guards', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 font-bold'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700">
                  <Calculator size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4">
                  <Lightbulb size={20} /> Solver Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  A matrix has an inverse ONLY if its determinant is non-zero (det ≠ 0). Always run an invertibility check before processing huge batches of data!
               </p>
            </div>
            
            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Calculator size={20} /> Matrix Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  Inverse property law: <span className="text-blue-300 font-black italic underline decoration-blue-500/30 underline-offset-4">A ⋅ A⁻¹ = I</span>. The result must be an Identity matrix.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                  <AlertTriangle size={20} /> Singular Warn
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Trying to invert a singular matrix (det=0) throws a <code className="text-rose-300 font-bold">LinAlgError</code>. Never assume invertibility in production code!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Matrix Reverse Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl">
                         The <span className="text-indigo-400 font-bold italic">Matrix Inverse</span> (A⁻¹) is a mirror structure that, when multiplied by the original matrix A, yields the <span className="text-indigo-400 font-bold italic underline decoration-indigo-500/20 underline-offset-8 text-left">Identity Matrix (I)</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "ML Logic", desc: "Linear Regression roots", icon: "🧠" },
                           { label: "Systems", desc: "Control system feedback", icon: "⚙️" },
                           { label: "Graphics", desc: "Reverse coordinate moves", icon: "📐" },
                           { label: "Equations", desc: "Solving X in AX = B", icon: "⎵" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="indigo"
                    title="2×2 Numerical Inverse"
                    description="Standard algebraic reversal of a simple matrix."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\n# Calculate A⁻¹\ninv_arr = np.linalg.inv(arr)\n\nprint("Matrix Inverse (A⁻¹):")\nprint(inv_arr)`} 
                    output="Matrix Inverse (A⁻¹):\n[[-2.   1. ]\n [ 1.5 -0.5]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'verify' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Eye} title="2. The Proof: Identity Check" color="blue" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left">
                      Verification is the gold-standard in linear algebra. Multiplying a matrix by its inverse <span className="text-blue-400 font-black underline decoration-blue-500/30 underline-offset-8">must result in 1s on the diagonal</span> and 0s elsewhere.
                   </p>

                   <CodeExample 
                    color="blue"
                    title="Verification Protocol"
                    description="Proving A ⋅ A⁻¹ = I."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\ninv = np.linalg.inv(arr)\n\n# Multiplication should yield Identity matrix\nidentity = np.dot(arr, inv)\n\nprint("Identity Check Result:")\nprint(identity)`} 
                    output="Identity Check Result:\n[[1.  0. ]\n [0.  1. ]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'linear' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Calculator} title="3. Solving Linear Systems" color="emerald" />
                   
                   <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-[3.5rem] p-12 text-left mb-12 relative overflow-hidden group shadow-3xl">
                      <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
                         <Calculator size={240} />
                      </div>
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                         <Calculator className="text-emerald-500" size={28} /> Matrix Inversion Method
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                         Solve equations like <span className="text-emerald-400 font-bold italic">2x + y = 5</span> and <span className="text-emerald-400 font-bold italic">x + 3y = 6</span> by isolating X: <code className="text-white font-black">X = A⁻¹B</code>.
                      </p>

                      <CodeExample 
                        color="emerald"
                        title="Inversion solving sandbox"
                        description="Computing unknown variables via record reversal."
                        code={`import numpy as np\n\n# Coefficients (A) and Constants (B)\nA = np.array([[2, 1], [1, 3]])\nB = np.array([5, 6])\n\n# X = A⁻¹ • B\nX = np.dot(np.linalg.inv(A), B)\n\nprint("Determined X, Y solutions:")\nprint(X)`} 
                        output="Determined X, Y solutions:\n[1.8 1.4]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'solve' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Cpu} title="4. Professional Solving Engine" color="cyan" />
                   
                   <div className="p-12 bg-cyan-950/20 border border-cyan-500/30 rounded-[3rem] group">
                      <h4 className="text-white font-black text-2xl mb-8 text-left">Better Alternative: np.linalg.solve()</h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left">
                         In production systems, <code className="text-cyan-400 font-bold italic">linalg.solve()</code> is preferred over manual inversion Because it is <span className="text-white font-bold italic underline underline-offset-8 decoration-cyan-500/30">faster and more numerically stable</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
                         <div className="p-8 bg-black/60 rounded-3xl border border-rose-500/20">
                            <h5 className="text-rose-500 font-black text-[10px] uppercase tracking-widest mb-4">Manual (Slow/Sensitive)</h5>
                            <code className="text-xs text-slate-400 italic">np.dot(np.linalg.inv(A), B)</code>
                         </div>
                         <div className="p-8 bg-black/60 rounded-3xl border border-emerald-500/20 text-left">
                            <h5 className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-4">Industrial (Fast/Stable)</h5>
                            <code className="text-xs text-emerald-400 font-bold">np.linalg.solve(A, B)</code>
                         </div>
                      </div>

                      <CodeExample 
                        color="cyan"
                        title="Production Grade Solver"
                        description="Executing the numerical solve protocol directly."
                        code={`import numpy as np\n\nA = np.array([[2, 1], [1, 3]])\nB = np.array([5, 6])\n\n# Direct industrial solver\nresult = np.linalg.solve(A, B)\n\nprint("Stable System Solution:")\nprint(result)`} 
                        output="Stable System Solution:\n[1.8 1.4]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Singular Matrix Protocol" color="rose" />
                   
                   <ul className="space-y-8 mb-16 text-left">
                      {[
                        { tip: "Check det != 0", desc: "Never invert without confirming the matrix is non-singular first.", icon: Target },
                        { tip: "Float Tolerance", desc: "Use np.isclose(det, 0) instead of direct zero checks for safety.", icon: Activity },
                        { tip: "Small Matrix Policy", icon: Layers, desc: "Only use manual inv() for teaching or small conceptual matrices." }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-8 group">
                           <div className="p-4 rounded-2xl bg-rose-500/10 text-rose-500 border border-rose-500/20 group-hover:scale-110 transition-transform">
                              <item.icon size={22} />
                           </div>
                           <div>
                              <h5 className="text-sm font-black text-white uppercase tracking-widest mb-2">{item.tip}</h5>
                              <p className="text-xs text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
                           </div>
                        </li>
                      ))}
                   </ul>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RotateCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-blue-400 italic font-light">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                             Challenge: Design a <span className="text-white font-bold italic">Singular Matrix</span> with a determinant of 0. Verify that it triggers an error when inverting!
                         </p>
                         <CodeExample 
                           color="rose"
                           title="Invertibility Mission Lab"
                           code={`import numpy as np\n\nsingular = np.array([[1, 2], [2, 4]])\ndet = np.linalg.det(singular)\n\nprint(f"Matrix Det: {det}")\n# This would crash in standard NumPy\nprint("Verification: Singular Lock-On")`} 
                           output="Matrix Det: 0.0\nVerification: Singular Lock-On" 
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
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Inversion Solver Engine v4.4</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Surgical Matrix Reversal with Determinant Guards
         </p>
      </footer>
    </div>
  );
}
