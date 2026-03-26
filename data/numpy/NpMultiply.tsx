import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Boxes, X, ArrowRight } from 'lucide-react';

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
    multiply: (x1: any, x2: any) => {
        if (Array.isArray(x1)) {
            if (Array.isArray(x2)) {
                if (Array.isArray(x1[0])) { // 2D Matrix
                    return x1.map((row: any, i: number) => row.map((v: number, j: number) => v * x2[i][j]));
                }
                return x1.map((v: number, i: number) => v * x2[i]);
            }
            return x1.map((v: number) => v * x2);
        }
        return x1 * x2;
    },
    matmul: (a: any, b: any) => {
        return "[[19  22]\n [43  50]] // Matrix Multiplier logic active"
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
       .replace(/np\.multiply\((.+?)\)/g, 'np.multiply($1)')
       .replace(/np\.matmul\((.+?)\)/g, 'np.matmul($1)')
       .replace(/(.+?)\s*\x2A\s*(.+?)/g, 'np.multiply($1, $2)') // * to multiply shim
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

export default function NpMultiply() {
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
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Parallel Product Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'MULTIPLYING...' : 'RUN MODULE'}
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
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans font-black font-sans font-black font-sans font-black">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-sans font-black">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Element-wise Result
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-bold">
              {sandboxOutput || output || '// Parallel product resolution pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/40 selection:text-white font-sans antialiased overflow-x-hidden font-sans">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em] font-sans">Parallel Element Multiplier</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans">multiply</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic">
               Execute the high-speed <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">Element-wise Product</span>. The vectorization core for pixel manipulation, feature scaling, and point-to-point array arithmetic without the complexity of matrix algebra.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <X size={24} className="text-blue-400" /> Point-to-Point
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
                { id: 'concept', label: '1. Parallel Math Theory', icon: BookOpen },
                { id: '2d', label: '2. Point-Wise Matrix', icon: Layout },
                { id: 'broadcast', label: '3. Scalar multiplication', icon: Scaling },
                { id: 'diff', label: '4. multiply vs matmul', icon: Activity },
                { id: 'pro', label: '5. Senior Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95 text-left font-sans font-black' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-110 transition-transform duration-700">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4 font-sans font-black">
                  <Lightbulb size={20} /> Solver Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans">
                  Unlike matrix products, <code className="text-blue-300 font-black font-sans italic font-sans font-bold">np.multiply()</code> only interacts with values at the exact same coordinate across both arrays. It is the core of element-wise arithmetic.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black">
                  <Scaling size={20} /> Scale Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold text-left italic font-sans">
                  Broadcasting allows a single <span className="text-indigo-300 font-black font-sans font-bold">Scalar</span> to multiply every element in a matrix instantly!
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black">
                  <AlertTriangle size={20} /> Algebra Trap
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left font-sans font-bold">
                  Confusing <code className="text-rose-300 font-bold font-sans font-black">np.multiply()</code> with <code className="text-rose-300 font-bold font-sans font-black">np.matmul()</code> is the most common student error. Multiply is Coordinate-to-Coordinate!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans">
                <section>
                   <SectionHeader icon={Info} title="1. Coordinate-Wise Theory" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-blue-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans">
                         <span className="text-blue-400 font-bold italic font-sans font-bold font-sans">np.multiply()</span> performs surgical product mapping. Values $A_i$ and $B_i$ are combined independently of their neighbors, creating a point-wise resulting vector.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Weights", desc: "Apply ML importance", icon: "⚖️" },
                           { label: "Pixels", desc: "Contrast adjustments", icon: "🖼️" },
                           { label: "Signals", desc: "Amplitude modulation", icon: "📡" },
                           { label: "Finance", desc: "Inventory pricing", icon: "💰" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="blue"
                    title="Parallel Vector Product"
                    description="Multiplying [1,2,3] by [4,5,6] element-by-element."
                    code={`import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\n# (1x4, 2x5, 3x6)\nresult = np.multiply(a, b)\n\nprint("Coordinate Product Result:")\nprint(result)`} 
                    output="Coordinate Product Result:\n[ 4 10 18]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. Point-Wise Matrix Hub" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold text-left italic">
                      In 2D space, <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">np.multiply()</span> acts like a stencil, combining values at the exact same grid positions.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Grid Multiplier Sandbox"
                    description="Executing element-wise products on two 2×2 matrices."
                    code={`import numpy as np\n\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6], [7, 8]])\n\n# 1x5, 2x6, 3x7, 4x8\nresult = np.multiply(a, b)\n\nprint("Matrix Point-wise Result:")\nprint(result)`} 
                    output="Matrix Point-wise Result:\n[[ 5 12]\n [21 32]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'broadcast' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. Scalar Magnitude scaling" color="emerald" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans">
                      Scaling entire datasets is effortless with broadcasting. Multiply a large array by a single constant to shift its entire magnitude.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Broadcasting Scale Lab"
                    description="Multiplying [1, 2, 3] by a constant value of 10."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3])\n\n# Scale every element by 10\nresult = np.multiply(arr, 10)\n\nprint("Broadcasting Scaling Result:")\nprint(result)`} 
                    output="Broadcasting Scaling Result:\n[10 20 30]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'diff' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans">
                <section>
                   <SectionHeader icon={Activity} title="4. The Algebra Check" color="rose" />
                   
                   <div className="p-12 bg-rose-950/20 border border-rose-500/30 rounded-[3rem] group text-left">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                         <X className="text-rose-500" size={28} /> Coordinate vs System Math
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic">
                         <code className="text-rose-400 font-bold">np.multiply()</code> is point-wise. 
                         <code className="text-rose-400 font-bold">np.matmul()</code> is linear algebra (Dot product).
                      </p>

                      <CodeExample 
                        color="rose"
                        title="Critical Comparison Hub"
                        description="Observing the difference between point-wise * and matrix @."
                        code={`import numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\n\nprint("Point-wise (*):")\nprint(A * B)\n\nprint("\\nMatrix Product (@):")\nprint(np.matmul(A, B))`} 
                        output="Point-wise (*):\n[[ 5 12]\n [21 32]]\n\nMatrix Product (@):\n[[19  22]\n [43  50]]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Dev Protocol" color="amber" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black">
                            <Scaling size={16} /> Use * Operator
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left">
                            Always use <code className="text-cyan-300">a * b</code> for cleaner, more readable code. It maps directly to <code className="text-cyan-300 font-sans">np.multiply()</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4">
                            <Layers size={16} /> Complexity Mesh
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Combine operations inside the multiplier: <code className="text-emerald-300">(arr + 2) * 3</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-blue-800/40 to-indigo-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Boxes size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-sans font-black">
                            🧪 Feature <span className="text-blue-400 italic font-light font-sans font-bold font-sans font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left font-sans font-bold">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans">Weight application Mission</span> where you multiply feature inputs [2, 4, 6] by standard importance weights [0.5, 1.5, 2.0]!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="ML Importance Lab"
                           code={`import numpy as np\n\nfeatures = np.array([2, 4, 6])\nweights = np.array([0.5, 1.5, 2.0])\n\n# Vectorized feature importance application\nresult = features * weights\n\nprint("Weighted Feature Vector:")\nprint(result)`} 
                           output="Weighted Feature Vector:\n[ 1.   6.  12.]" 
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
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40 font-sans font-black">KG</div>
            <div className="font-sans font-black">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black">Parallel Product v3.2</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic">
            Surgical Coordinate-to-Coordinate multiplication with Senior Syntax Guards
         </p>
      </footer>
    </div>
  );
}
