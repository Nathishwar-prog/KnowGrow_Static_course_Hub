import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RotateCw, Activity, Cpu, CodeXml, Layers, ArrowUpLeft, MoveRight } from 'lucide-react';

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
        eig: (arr: any) => {
            if (!Array.isArray(arr) || !Array.isArray(arr[0])) return "Error: Matrix required";
            if (arr.length !== 2 || arr[0].length !== 2) return "Error: Sandbox only supports 2x2 eig";
            
            const a = arr[0][0], b = arr[0][1], c = arr[1][0], d = arr[1][1];
            // Characteristic equation: lambda^2 - (a+d)lambda + (ad-bc) = 0
            const trace = a + d;
            const det = a * d - b * c;
            const delta = trace * trace - 4 * det;
            
            if (delta < 0) return "Error: Complex eigenvalues not supported in simplified sandbox";
            
            const disc = Math.sqrt(delta);
            const l1 = (trace + disc) / 2;
            const l2 = (trace - disc) / 2;
            
            // Eigenvectors: (a-l)x + by = 0 -> v = [b, l-a] or [l-d, c]
            let v1_raw = [b, l1 - a];
            if (Math.abs(v1_raw[0]) < 1e-9 && Math.abs(v1_raw[1]) < 1e-9) v1_raw = [l1 - d, c];
            
            let v2_raw = [b, l2 - a];
            if (Math.abs(v2_raw[0]) < 1e-9 && Math.abs(v2_raw[1]) < 1e-9) v2_raw = [l2 - d, c];
            
            const n1 = Math.sqrt(v1_raw[0]**2 + v1_raw[1]**2);
            const n2 = Math.sqrt(v2_raw[0]**2 + v2_raw[1]**2);
            
            const v1 = [v1_raw[0]/n1, v1_raw[1]/n1];
            const v2 = [v2_raw[0]/n2, v2_raw[1]/n2];
            
            // NumPy returns eigenvectors as COLUMNS in a 2D array
            const vectors = [[v1[0], v2[0]], [v1[1], v2[1]]];
            return [NumpySandbox.np.array([l1, l2]), NumpySandbox.np.array(vectors)];
        },
        eigh: (arr: any) => NumpySandbox.np.linalg.eig(arr)
    },
    dot: (a: any, b: any) => {
        if (!Array.isArray(a[0])) { // a is 2x2, b is 1x2 (vector)
            const res = [
                a[0][0] * b[0] + a[0][1] * b[1],
                a[1][0] * b[0] + a[1][1] * b[1]
            ];
            return res;
        }
        return "Error: Dot in sandbox limited to Matrix-Vector for eig verification";
    },
    argmax: (arr: any) => arr.indexOf(Math.max(...arr))
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
       .replace(/values,\s*vectors\s*=\s*np\.linalg\.eig\((.+?)\)/g, 'const [values, vectors] = np.linalg.eig($1)')
       .replace(/values,\s*vectors\s*=\s*np\.linalg\.eigh\((.+?)\)/g, 'const [values, vectors] = np.linalg.eigh($1)')
       .replace(/vectors\[:,\s*0\]/g, 'vectors.map(r => r[0])') // column extraction shim
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

export default function NpLinalgEig() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title, description, color="violet" }: any) => {
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
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Eigen Solver Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'RESOLVING EIGS...' : 'SOLVE Av=λv'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px]">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-violet-300 outline-none resize-none selection:bg-violet-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Spectral Result
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Characteristic roots pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-violet-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-violet-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-violet-500 to-transparent"></div>
              <span className="text-violet-400 text-xs font-black uppercase tracking-[0.6em]">Spectral Decomposition Engine</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.linalg.<span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent italic tracking-[-0.08em]">eig</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left">
               Compute the <span className="text-white font-medium italic underline decoration-violet-500/30 underline-offset-8">Eigenvalues</span> and <span className="text-white font-medium italic underline decoration-violet-500/30 underline-offset-8">Eigenvectors</span>. The spectral foundation for PCA, Google PageRank, and structural stability analysis.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <ArrowUpLeft size={24} className="text-violet-400" /> Directional Pivot
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
                { id: 'concept', label: '1. Spectral DNA', icon: BookOpen },
                { id: 'basics', label: '2. Basic Eig Solution', icon: Layout },
                { id: 'verify', label: '3. Identity Verification', icon: Scaling },
                { id: 'performance', label: '4. eigh() Protocol', icon: Activity },
                { id: 'pro', label: '5. Principal Components', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-violet-600 border-violet-500 text-white shadow-[0_20px_60px_rgba(124,58,237,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-violet-500/5 border border-violet-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-violet-500/10 group-hover:scale-110 transition-transform duration-700">
                  <Cpu size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-violet-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-violet-500/20 pb-4">
                  <Lightbulb size={20} /> Solver Hint 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left">
                  Eigenvectors satisfy <code className="text-violet-300">Av = λv</code>. After calculation, always verify that the matrix transformation only scales the vector without rotating it!
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Layers size={20} /> Column Logic
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  ❗ NumPy returns eigenvectors as <span className="text-indigo-300 font-black italic underline decoration-indigo-500/30 underline-offset-4">Columns</span>, not rows. This is a common point of confusion for students and engineers alike.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                  <AlertTriangle size={20} /> Complex Values
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Results may contain non-real components. Use <code className="text-rose-300">values.real</code> to isolate the physical scaling factors in real-world simulations.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Spectral DNA Fundamentals" color="violet" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-violet-600 pl-12 max-w-4xl">
                         The <span className="text-violet-400 font-bold italic">Eigen-System</span> decomposes a matrix into its core scaling factors (λ) and invariant directions (v), satisfying the fundamental law: <span className="text-violet-400 font-bold italic">Av = λv</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "PCA", desc: "Data compression", icon: "📊" },
                           { label: "PageRank", desc: "Search importance", icon: "🌐" },
                           { label: "Stability", desc: "System equilibrium", icon: "⚖️" },
                           { label: "Physics", desc: "Vibration modes", icon: "⚛️" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-violet-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-800 mb-12">
                      <h4 className="text-white font-black text-xl mb-6 flex items-center gap-3 tracking-widest uppercase">
                         <MoveRight size={20} className="text-violet-400" /> Defining Outputs
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                         <div className="bg-black/60 p-10 rounded-3xl border border-slate-800">
                             <h6 className="text-violet-400 font-black text-xs uppercase mb-4">Eigenvalues (λ)</h6>
                             <p className="text-xs text-slate-400 leading-relaxed font-semibold italic">Scalars that describe the amount of stretching or shrinking along each invariant direction.</p>
                         </div>
                         <div className="bg-black/60 p-10 rounded-3xl border border-slate-800 text-left">
                             <h6 className="text-violet-400 font-black text-xs uppercase mb-4">Eigenvectors (v)</h6>
                             <p className="text-xs text-slate-400 leading-relaxed font-semibold italic text-left">Unit vectors that do NOT rotate when transformed by the matrix, only change in magnitude.</p>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'basics' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. Solving the Characteristic Equation" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left">
                      NumPy uses high-precision algorithms to find roots of the characteristic polynomial, returning normalized unit vectors for every eigenvalue found.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="2×2 Spectral Solution"
                    description="Standard spectral decomposition of a simple coordinate matrix."
                    code={`import numpy as np\n\narr = np.array([[4, -2], [1, 1]])\n\n# Compute values and vectors\nvalues, vectors = np.linalg.eig(arr)\n\nprint("Eigenvalues (λ):")\nprint(values)\nprint("\\nEigenvectors (v - Column wise):")\nprint(vectors)`} 
                    output="Eigenvalues (λ):\n[3.0  2.0]\n\nEigenvectors (v - Column wise):\n[[0.9  0.7]\n [0.4  0.7]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'verify' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. Verifying the Identity Law" color="emerald" />
                   
                   <div className="p-12 bg-emerald-950/20 border border-emerald-500/30 rounded-[3.5rem] relative overflow-hidden group shadow-3xl text-left">
                     <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
                        <Activity size={240} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <ArrowUpLeft className="text-emerald-500" size={28} /> Proving Av = λv
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                        After the solver returns, we can prove the result by comparing the transformed vector <span className="text-white font-bold italic">Av</span> against the scaled vector <span className="text-white font-bold italic">λv</span>.
                     </p>

                     <CodeExample 
                        color="emerald"
                        title="Numerical Proof Lab"
                        description="Verification that Matrix * Vector = Scalar * Vector."
                        code={`import numpy as np\n\nA = np.array([[4, -2], [1, 1]])\nvalues, vectors = np.linalg.eig(A)\n\n# Take the first eigen pair\nv = vectors[:, 0]\nlam = values[0]\n\nprint("A • v:")\nprint(np.dot(A, v))\nprint("\\nλ * v:")\nprint(lam * v)`} 
                        output="A • v:\n[2.7  1.3]\n\nλ * v:\n[2.7  1.3]" 
                      />
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="4. Deployment Protocols" color="rose" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4">
                            <Layers size={16} /> Matrix Symmetry
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic">
                            For symmetric matrices, <code className="text-cyan-300">eigh()</code> is significantly faster and more numerically stable.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                            <Scaling size={16} /> Normalization Law
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Always remember: NumPy eigenvectors have a unit norm (length = 1).
                         </p>
                         <code className="text-[10px] text-slate-500 block">np.linalg.norm(vectors[:, 0]) == 1</code>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. PCA & Principal Components" color="amber" />
                   
                   <p className="text-xl text-slate-400 font-light mb-12 italic text-left">
                     Finding the most significant components in a dataset by isolating the eigenvectors corresponding to the <span className="text-white font-bold italic underline decoration-amber-500/30 underline-offset-8">largest eigenvalues</span>.
                   </p>

                   <CodeExample 
                    color="amber"
                    title="Component Selection Sandbox"
                    description="Isolating the primary scaling direction for dimensionality reduction."
                    code={`import numpy as np\n\ndata = np.array([[2, 0], [0, 1]])\nvalues, vectors = np.linalg.eig(data)\n\n# Selecting Largest Component\nimportant_vector = vectors[:, np.argmax(values)]\n\nprint("Primary Principal Component:")\nprint(important_vector)`} 
                    output="Primary Principal Component:\n[1.0  0.0]" 
                  />

                   <div className="mt-28 bg-gradient-to-br from-violet-800/40 to-indigo-800/20 border border-violet-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-2xl text-left">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <RotateCw size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-violet-400 italic font-light">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                             Challenge: Design a <span className="text-white font-bold">2×2 matrix</span> with values [4, -2, 1, 1]. Verify that λ=3 and λ=2 are the roots!
                         </p>
                         <CodeExample 
                           color="fuchsia"
                           title="Eigen-State Mission Lab"
                           code={`import numpy as np\n\narr = np.array([[4, -2], [1, 1]])\nvalues, vectors = np.linalg.eig(arr)\n\nprint("Found Eigenvalues Root Logic:")\nprint(values)`} 
                           output="Found Eigenvalues Root Logic:\n[3.0  2.0]" 
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
            <div className="w-16 h-16 bg-violet-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-violet-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Spectral Matrix Auditing v3.3</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Surgical Vector Pivot with Machine Stability
         </p>
      </footer>
    </div>
  );
}
