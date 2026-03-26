import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, MoveDiagonal, TrendingUp, AlertTriangle, ShieldCheck, Layers, GitCompare, LayoutPanelLeft } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(2);

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
    dot: (a: any[], b: any[]) => {
      // Vector Dot Product (1D)
      if (!Array.isArray(a[0]) && !Array.isArray(b[0])) {
          return a.reduce((sum, val, i) => sum + val * b[i], 0);
      }
      
      // Matrix Multiplication (2D)
      if (Array.isArray(a[0]) && Array.isArray(b[0])) {
          const result = Array(a.length).fill(0).map(() => Array(b[0].length).fill(0));
          for (let i = 0; i < a.length; i++) {
              for (let j = 0; j < b[0].length; j++) {
                  for (let k = 0; k < a[0].length; k++) {
                      result[i][j] += a[i][k] * b[k][j];
                  }
              }
          }
          return result;
      }

      // Matrix-Vector Product
      if (Array.isArray(a[0]) && !Array.isArray(b[0])) {
          return a.map(row => row.reduce((sum: number, val: number, i: number) => sum + val * b[i], 0));
      }

      return 0;
    },
    matmul: (a: any[], b: any[]) => NumpySandbox.np.dot(a, b)
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
       .replace(/(\w+) @ (\w+)/g, 'np.dot($1, $2)')
       .replace(/(\w+)\.T/g, '(transpose($1))') // Simple mock for T
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const transpose = (arr: any[][]) => arr[0].map((_, i) => arr.map(row => row[i]));
      const codeToRun = `
        const np = NumpySandbox.np;
        const print = customPrint;
        const transpose = ${transpose.toString()};
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

export default function NpDotModule() {
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
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30 font-black',
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30 font-black',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30 font-black',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30 font-black',
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
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest uppercase`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'TRANSFORMING...' : 'EXECUTE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[220px]">
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Transformation Result
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Matrix product stream'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em]">Linear Algebra Core</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">dot</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               The engine of machine learning and neural networks. Master vector products, matrix transformations, and the modern <strong>@</strong> operator for high-speed tensor algebra.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-[2rem] text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl transition-all hover:bg-slate-800">
               <Layers size={24} className="text-indigo-400" /> Tensor Products
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
                { id: 'concept', label: '1. Neural Basis', icon: BookOpen },
                { id: 'vector', label: '2. Vector Products', icon: Zap },
                { id: 'matrix', label: '3. Matrix Spacing', icon: LayoutPanelLeft },
                { id: 'apps', label: '4. Prediction Logic', icon: MoveDiagonal }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-125 transition-transform duration-700">
                  <GitCompare size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4">
                  <Lightbulb size={20} /> Modern Syntax
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Python 3.5+ introduced the <span className="text-indigo-300 font-black underline underline-offset-4 decoration-indigo-500/30">@ operator</span> for matrix multiplication. It is cleaner, more readable, and preferred in production AI code.
               </p>
            </div>
            
            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Shape Guard
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  The <span className="text-white font-bold">Columns of A</span> must equal the <span className="text-white font-bold">Rows of B</span>. If <code className="text-rose-300">A.shape[1] !== B.shape[0]</code>, the operation will fail!
               </p>
            </div>
          </aside>

          {/* Module Core */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Linear Algebra Heart" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl">
                         <span className="text-indigo-400 font-bold italic">np.dot()</span> performs a weighted sum of products. It’s the foundational math for rotating graphics, projecting data, and training neural networks.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "ML Prediction", desc: "Weights * Inputs", icon: "🤖" },
                           { label: "Neural Nets", desc: "Foundational layer math", icon: "🧠" },
                           { label: "Game Physics", desc: "Vector projections", icon: "🎮" },
                           { label: "Graphics", desc: "Rotations & Scaling", icon: "🎥" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group">
                      <h4 className="text-2xl font-black text-indigo-400 mb-8 flex items-center gap-4">
                         <ShieldCheck size={28} /> Math Resolution
                      </h4>
                      <p className="text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
                         For vectors A and B, it is the sum of products of corresponding elements:
                      </p>
                      <div className="bg-black/40 p-10 rounded-3xl border border-indigo-500/30 flex flex-col items-center text-center hover:bg-black/60 transition-colors">
                         <span className="text-4xl font-black text-indigo-400 mb-4">A ⋅ B = Σ (Aᵢ × Bᵢ)</span>
                         <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Dot Product Identity</span>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'vector' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="Vector Interaction" color="amber" />
                   
                   <CodeExample 
                    color="amber"
                    title="1. Standard Dot Product"
                    description="Multiplying and summing two 1D vectors."
                    code={`import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\n# (1*4) + (2*5) + (3*6) = 32\nresult = np.dot(a, b)\n\nprint("Dot Result:")\nprint(result)`} 
                    output="Dot Result:\n32.0" 
                  />

                  <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <MoveDiagonal size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <MoveDiagonal className="text-amber-500" size={28} /> Geometric Meaning
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                        The dot product reveals the <span className="text-white">directional alignment</span> between two vectors. A higher value means stronger alignment.
                     </p>
                     
                     <div className="flex justify-center gap-20 py-8">
                        <div className="relative">
                           <div className="w-1 h-32 bg-slate-800 absolute left-0 bottom-0"></div>
                           <div className="w-32 h-1 bg-slate-800 absolute left-0 bottom-0"></div>
                           <div className="w-20 h-2 bg-indigo-500 rounded-full origin-left rotate-[-45deg] relative translate-y-[45px]"></div>
                           <div className="w-24 h-2 bg-amber-500 rounded-full origin-left rotate-[-15deg] relative translate-y-[20px]"></div>
                        </div>
                        <div className="text-slate-500 text-xs font-bold leading-relaxed max-w-xs space-y-4">
                           <div className="flex items-center gap-3"><div className="w-3 h-3 bg-indigo-500 rounded-full"></div> Original Vector [1, 2]</div>
                           <div className="flex items-center gap-3"><div className="w-3 h-3 bg-amber-500 rounded-full"></div> Transformed Result</div>
                        </div>
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'matrix' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={LayoutPanelLeft} title="Matrix Dimensional Interaction" color="emerald" />
                   
                   <CodeExample 
                    color="emerald"
                    title="1. The @ Operator (Modern)"
                    description="Multiplying two matrices using the concise @ syntax."
                    code={`import numpy as np\n\na = np.array([\n    [1, 2],\n    [3, 4]\n])\n\nb = np.array([\n    [5, 6],\n    [7, 8]\n])\n\n# Modern matrix multiplication\nprint("Product Result:")\nprint(a @ b)`} 
                    output="Product Result:\n[[19.00  22.00]\n [43.00  50.00]]" 
                  />

                  <div className="p-10 bg-slate-950/40 border border-slate-800 rounded-[3.5rem] mt-10">
                     <h4 className="text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4">
                        <AlertTriangle size={16} /> Matrix Multiplicity Tip
                     </h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-500 font-bold italic leading-relaxed">
                        <div>
                           np.matmul() is similar to dot for matrices, but behaves differently on 3D+ tensors.
                        </div>
                        <div>
                           Use .T (Transpose) to flip rows and columns to satisfy the shape rule if dimensions don't align.
                        </div>
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'apps' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={MoveDiagonal} title="Prediction & Transformation" color="indigo" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 uppercase tracking-widest text-center">
                      {[
                        { title: "PREDICTION", desc: "Weights dot Inputs = Probabilities", icon: "🎲" },
                        { title: "NEURAL LAYER", desc: "The core op of Dense layers", icon: "🧠" },
                        { title: "SPACE TRANSFORM", desc: "Project 3D vectors into 2D screen", icon: "📐" }
                      ].map((m, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] group hover:bg-slate-800/60 transition-all border-b-4 border-b-indigo-500/20">
                           <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                              <span className="text-2xl">{m.icon}</span>
                           </div>
                           <h4 className="text-white font-black text-[11px] mb-3 tracking-[0.2em]">{m.title}</h4>
                           <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{m.desc}</p>
                        </div>
                      ))}
                   </div>

                   <div className="space-y-10">
                      <div className="p-10 bg-slate-950/40 border border-slate-800 rounded-[3.5rem] relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                            <ShieldCheck size={180} />
                         </div>
                         <h4 className="text-white font-black text-2xl mb-12 flex items-center gap-4">
                            <ShieldCheck className="text-indigo-500" size={28} /> AI Pipeline Implementation
                         </h4>
                         <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                            <div>
                               <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4">
                                  <TrendingUp size={16} /> Weighted Prediction
                               </div>
                               <CodeExample 
                                 color="indigo"
                                 title="Simple Regression"
                                 code={`import numpy as np\n\nweights = np.array([0.2, 0.5, 0.3])\ninputs = np.array([10, 20, 30])\n\n# Dot product for single score prediction\nprediction = np.dot(weights, inputs)\n\nprint(f"Prediction Output Score: {prediction}")`} 
                                 output="Prediction Output Score: 21.0" 
                               />
                            </div>
                            <div>
                               <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4">
                                  <Layers size={16} /> Graphic Transpose
                               </div>
                               <CodeExample 
                                 color="indigo"
                                 title="Matching Dimensions"
                                 code={`import numpy as np\n\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6]])\n\n# Use Transpose to align (1,2) with (2,2)\nresult = np.dot(a, b.T)\n\nprint("Transposed Dot Result:\\n", result)`} 
                                 output="Transposed Dot Result:\n [[17.00]\n [39.00]]" 
                               />
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-24 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-24 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <GitCompare size={260} />
                      </div>
                      <div className="relative z-10 max-w-4xl">
                         <h3 className="text-7xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-blue-400 italic font-light lowercase tracking-widest">Laboratory</span>
                         </h3>
                         <p className="text-3xl text-slate-200 mb-16 font-light leading-snug">
                            Compute the dot product of two raw sensory vectors: <span className="text-white font-bold italic">[2, 3, 4]</span> and <span className="text-white font-bold italic">[5, 6, 7]</span>. 
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Excision Challenge"
                           code={`import numpy as np\n\na = np.array([2, 3, 4])\nb = np.array([5, 6, 7])\n\n# TASK: Compute weighted intensity\nresult = np.dot(a, b)\n\nprint("Final Scalar Signal Intensity:")\nprint(result)`} 
                           output="Final Scalar Signal Intensity:\n56.0" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-48 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-16 group">
         <div className="flex items-center gap-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-24 h-24 bg-blue-600 rounded-[3rem] flex items-center justify-center font-black text-white text-4xl italic shadow-[0_25px_60px_rgba(37,99,235,0.4)]">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.7em] text-[12px] block mb-2 tracking-[0.4em]">KnowGrow Intelligence</span>
               <span className="text-slate-600 font-bold text-sm uppercase tracking-widest leading-none">Linear Resolution Infrastructure v9.3</span>
            </div>
         </div>
         <p className="text-[11px] text-slate-800 font-black uppercase tracking-[0.8em] text-center md:text-right">
            Mastering Tensor Multiplication with Modern Operator Syntax
         </p>
      </footer>
    </div>
  );
}
