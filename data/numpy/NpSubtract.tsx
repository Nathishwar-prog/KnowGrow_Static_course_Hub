import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, TrendingDown, Minus, MinusCircle, Boxes, FlaskConical, LineChart } from 'lucide-react';

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
    array: (data: any) => JSON.parse(JSON.stringify(data)),
    arange: (start: number, stop?: number) => {
        const s = stop === undefined ? 0 : start;
        const e = stop === undefined ? start : stop;
        return Array.from({ length: e - s }, (_, i) => s + i);
    },
    subtract: (x: any, y: any) => {
        // Helper to check if broadcastable
        const isArr = (v: any) => Array.isArray(v);
        const isMatrix = (v: any) => isArr(v) && isArr(v[0]);

        if (!isArr(x) && !isArr(y)) return x - y;

        // Scalar Broadcasting (Array - Scalar)
        if (isArr(x) && !isArr(y)) {
            if (isMatrix(x)) return x.map((row: any[]) => row.map(v => v - y));
            return x.map(v => v - y);
        }
        
        // Scalar Broadcasting (Scalar - Array)
        if (!isArr(x) && isArr(y)) {
            if (isMatrix(y)) return y.map((row: any[]) => row.map(v => x - v));
            return y.map(v => x - v);
        }

        // 2D Matrix Subtraction
        if (isMatrix(x) && isMatrix(y)) {
            if (x.length !== y.length || x[0].length !== y[0].length) {
                throw new Error("ValueError: operands could not be broadcast together");
            }
            return x.map((row: any[], r: number) => row.map((v, c) => v - y[r][c]));
        }

        // 1D Array Subtraction
        if (x.length !== y.length) {
            throw new Error("ValueError: operands could not be broadcast together");
        }
        return x.map((v: number, i: number) => v - y[i]);
    },
    abs: (x: any) => Array.isArray(x) ? x.map(Math.abs) : Math.abs(x)
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
       .replace(/np\.subtract\((.+?),\s*(.+?),\s*out=(.+?)\)/g, '$3 = np.subtract($1, $2)')
       .replace(/np\.subtract\((.+?),\s*(.+?)\)/g, 'np.subtract($1, $2)')
       .replace(/np\.abs\((.+?)\)/g, 'np.abs($1)')
       .replace(/np\.arange\((.+?)\)/g, 'np.arange($1)')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/(\w+)\s*-\s*(\w+)/g, 'np.subtract($1, $2)') // Mock operator shorthand
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

export default function NpSubtract() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5 font-sans`}>
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
          <div className="flex items-center gap-4 text-left font-sans font-black">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">Differential Resolution Terminal</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'RESOLVING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800 font-sans">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-indigo-300 outline-none resize-none selection:bg-indigo-500/20 font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Differential Result Vector
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Differential resolution pending...'}
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617] font-sans"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left font-sans">
          <div className="flex-1 font-sans">
            <div className="flex items-center gap-6 mb-10 font-sans">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent font-sans"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Vectorized Element-wise Differential</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">subtract</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold font-sans">
               Solve for the <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Coordinate Gap</span>. Master the primary mathematical engine for error calculation, loss functions, and financial profit/loss resolution with vectorized C-level precision.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black font-sans">
               <MinusCircle size={24} className="text-indigo-400 font-sans" /> Gap Resolver
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left font-sans">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left font-sans">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans">
              {[
                { id: 'concept', label: '1. Differential Theory', icon: BookOpen },
                { id: 'vector', label: '2. Vectorized Subtrahend', icon: Minus },
                { id: 'broad', label: '3. Scalar Broadcasting', icon: Scaling },
                { id: '2d', label: '4. Matrix Differential', icon: Layout },
                { id: 'pro', label: '5. Senior Subtraction Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic font-sans font-black font-sans font-black font-sans' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans font-black font-sans font-black font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans font-black">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Senior Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold font-sans">
                  The operator shorthand <code className="text-indigo-300 font-black font-sans italic">arr1 - arr2</code> is internally resolved as <code className="text-indigo-300 font-black font-sans italic font-sans">np.subtract()</code>, allowing for identical high-performance vectorized execution.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <Cpu size={20} /> C-Level Precision
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold">
                  Vectorized subtraction eliminates the overhead of Python's <code className="text-indigo-300 font-black font-sans italic font-sans">for</code> loops, executing differential resolution directly in memory blocks.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans">
                  <AlertTriangle size={20} /> Shape Rule ⚠️
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans">
                  Subtraction will fail with a <span className="text-rose-300 font-bold font-sans font-black underline italic font-sans font-black">ValueError</span> unless both arrays share the exact same shape or are compatible with Broad-casting rules.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans font-black font-sans">
                <section>
                   <SectionHeader icon={Info} title="1. Element-wise Differential Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold font-sans font-black">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans font-black font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans font-black font-sans">
                         <span className="text-indigo-400 font-bold italic font-sans font-bold font-sans font-black font-sans">Differential Resolution</span> is the mathematical act of subtracting one coordinate from another. In NumPy, this power feature is used to calculate errors, resolve profit/loss vectors, and determine pixel-level differences in images.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Error", desc: "Predicted vs Actual", icon: "🎯" },
                           { label: "Finance", desc: "Profit vs Loss", icon: "💰" },
                           { label: "Image", desc: "Pixel delta", icon: "🖼️" },
                           { label: "Gap", desc: "Dataset comparison", icon: "📏" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20 font-sans font-black font-sans font-black font-sans font-black">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans font-black">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold font-sans font-black font-sans font-black">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group mb-16 text-left font-sans font-black">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <LineChart className="text-indigo-500 font-sans font-black" size={28} /> The Difference Curve
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic font-sans font-black font-sans">
                         In visualization, subtracting two curves (e.g. <code className="text-indigo-300 font-black font-sans italic">y1 - y2</code>) reveals the <span className="text-indigo-400 font-bold font-sans font-black italic">Magnitude Gap</span> at every single point along the domain.
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'vector' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Minus} title="2. Vectorized Subtrahend" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black font-sans">
                      Compute the differential for <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">Coordinate Pairs</span> across entire arrays instantly.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Vector Gap Terminal"
                    description="Executing array-on-array subtraction between two vectors."
                    code={`import numpy as np\n\narr1 = np.array([10, 20, 30])\narr2 = np.array([1, 2, 3])\n\n# Vectorized Subtraction\nresult = np.subtract(arr1, arr2)\n\nprint("Determined Differential Vector:")\nprint(result)`} 
                    output="Determined Differential Vector:\n[9 18 27]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'broad' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. Scalar Broadcasting Power" color="violet" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans font-black">
                      Subtract a constant <span className="text-violet-400 font-bold font-sans font-black italic font-sans font-black">Scalar</span> from every coordinate in a high-rank tensor without manual loops.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="Broadcasting Resolver Sandbox"
                    description="Executing scalar-to-array subtraction via broadcasting."
                    code={`import numpy as np\n\narr = np.array([10, 20, 30])\n\n# Subtract 5 from every element\nresult = np.subtract(arr, 5)\n\nprint("Broadcasted Subtraction:")\nprint(result)`} 
                    output="Broadcasted Subtraction:\n[5 15 25]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black">
                <section>
                   <SectionHeader icon={Layout} title="4. Matrix Differential Resolve" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                     Resolve the <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">Geometric Gap</span> between two 2D tensors of identical shape.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Matrix Gap Terminal"
                    description="Executing element-wise subtraction on a 2x2 grid matrix."
                    code={`import numpy as np\n\na = np.array([[10, 20], [30, 40]])\nb = np.array([[1, 2], [3, 4]])\n\n# Element-wise grid resolve\nresult = np.subtract(a, b)\n\nprint("Determined Sub-Matrix Gap:")\nprint(result)`} 
                    output="Determined Sub-Matrix Gap:\n [[ 9 18]\n  [27 36]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Differential Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black font-sans font-black">
                            <FlaskConical size={16} /> Error Scaling
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Calculate absolute error instantly with: <code className="text-cyan-300">np.abs(np.subtract(predicted, actual))</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black">
                            <Boxes size={16} /> In-place Optimization
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Save memory by writing the result back into the same array: <code className="text-emerald-300">np.subtract(a, b, out=a)</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <TrendingDown size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black font-sans">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black font-sans font-black font-sans">
                            ⚡ Differential <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-black font-sans font-black font-sans">Resolution hub</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold font-sans font-black">
                             Challenge: Compute the <span className="text-white font-bold italic font-sans font-bold font-sans font-black">Geometric Gap</span> for a 3-element coordinate set!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Dataset Gap Lab"
                           code={`import numpy as np\n\na = np.array([50, 60, 70])\nb = np.array([10, 20, 30])\n\n# Vectorized Subtraction\nresult = np.subtract(a, b)\n\nprint("Determined Coordinate Gap:")\nprint(result)`} 
                           output="Determined Coordinate Gap:\n[40 40 40]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black italic font-sans font-black">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black font-sans font-black font-sans font-black">Gap Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
            High-Performance Element-wise Subtraction with scalar Broadcasting and multi-axis Matrix Resolution
         </p>
      </footer>
    </div>
  );
}
