import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Boxes, TrendingUp, ArrowRight } from 'lucide-react';

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
    power: (x1: any, x2: any) => {
        if (Array.isArray(x1)) {
            if (Array.isArray(x2)) {
                if (Array.isArray(x1[0])) { // 2D Matrix
                    return x1.map((row: any, i: number) => row.map((v: number, j: number) => Math.pow(v, x2[i][j])));
                }
                return x1.map((v: number, i: number) => Math.pow(v, x2[i]));
            }
            // Scalar power
            if (Array.isArray(x1[0])) { // 2D Matrix
                return x1.map((row: any) => row.map((v: number) => Math.pow(v, x2)));
            }
            return x1.map((v: number) => Math.pow(v, x2));
        }
        return Math.pow(x1, x2);
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
       .replace(/np\.power\((.+?),\s*(.+?)\)/g, 'np.power($1, $2)')
       .replace(/np\.power\((.+?)\)/g, 'np.power($1)')
       .replace(/(.+?)\s*\x2A\x2A\s*(.+?)/g, 'np.power($1, $2)') // ** to power shim
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

export default function NpPower() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
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
          <div className="flex items-center gap-4 text-left font-sans">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Exponential Solver Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'CALCULATING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-indigo-300 outline-none resize-none selection:bg-indigo-500/20 font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-sans font-black">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Exponent-wise Result
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Exponential product resolved pending...'}
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
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Fast Parallel Exponentiation</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               np.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">power</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic">
               Execute high-speed <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Element-wise Exponentiation</span>. The vectorization engine for polynomial feature engineering, scientific formula resolution, and data transformation at scale.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <TrendingUp size={24} className="text-indigo-400" /> Exponential Growth
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 font-sans">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left">
            <nav className="sticky top-12 space-y-5">
              {[
                { id: 'concept', label: '1. Power Theory', icon: BookOpen },
                { id: 'matrix', label: '2. Point-Wise Grids', icon: Layout },
                { id: 'root', label: '3. Root Calculations', icon: Scaling },
                { id: 'ml', label: '4. ML Polynomials', icon: Cpu },
                { id: 'pro', label: '5. Senior Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic font-black' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black">
                  <Lightbulb size={20} /> Solver Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans">
                  The <code className="text-indigo-300 font-black font-sans">**</code> operator is syntactical sugar for <code className="text-indigo-300 font-black font-sans">np.power()</code>. Use whichever fits your code's readability standards!
               </p>
            </div>
            
            <div className="mt-8 bg-violet-500/5 border border-violet-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-violet-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black">
                  <Scaling size={20} /> Root Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold text-left italic font-sans font-bold">
                  Passing <span className="text-violet-300 font-black font-sans font-bold font-sans">0.5</span> as the exponent is identical to calculating the <span className="text-violet-300 font-black font-sans font-bold font-sans italic">Square Root</span>!
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black">
                  <AlertTriangle size={20} /> System Trap
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left font-sans font-bold font-sans">
                  Confusing element-wise power with <code className="text-rose-300 font-bold font-sans font-black font-sans">matrix_power()</code> is a linear algebra mistake. np.power() is Surgical Co-ordinate math!
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left">
                <section>
                   <SectionHeader icon={Info} title="1. Exponentiation Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold">
                         <span className="text-indigo-400 font-bold italic font-sans font-bold">np.power()</span> raises a base to an exponent. It is the fuel for polynomial scaling and scientific magnitude transformations.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Squaring", desc: "x^2 Polynomials", icon: "📈" },
                           { label: "Roots", desc: "Fractional powers", icon: "📐" },
                           { label: "Scaling", desc: "Intensity shifts", icon: "⚡" },
                           { label: "Physics", desc: "Growth formulas", icon: "🌌" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="indigo"
                    title="1D Exponential Scan"
                    description="Raising every element in [1, 2, 3, 4] to the power of 2."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4])\n\n# Point-wise squaring\nresult = np.power(arr, 2)\n\nprint("Determined Squares:")\nprint(result)`} 
                    output="Determined Squares:\n[ 1  4  9 16]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'matrix' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layout} title="2. Point-Wise Grid Resolution" color="violet" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      In 2D space, <span className="text-violet-400 font-black underline decoration-violet-500/30 underline-offset-8">np.power()</span> acts like a parallel processor, scaling grid coordinates independently and instantly.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="Grid Power Sandbox"
                    description="Executing element-wise squaring on a 2×2 matrix."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\n# 2D Grid Point-wise power\nresult = np.power(arr, 2)\n\nprint("Matrix Power Result:")\nprint(result)`} 
                    output="Matrix Power Result:\n[[ 1  4]\n [ 9 16]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'root' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Scaling} title="3. Fractional Power (Roots)" color="emerald" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans">
                      Calculating roots is effortless. Pass <code className="text-emerald-400 font-bold font-sans font-bold">0.5</code> for square roots or <code className="text-emerald-400 font-bold font-sans font-bold">0.33</code> for cube roots of every element.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Square Root Hub"
                    description="Calculating roots of [1, 4, 9, 16] using power 0.5."
                    code={`import numpy as np\n\narr = np.array([1, 4, 9, 16])\n\n# Fractional power = Root\nroots = np.power(arr, 0.5)\n\nprint("Surgical Roots Resolved:")\nprint(roots)`} 
                    output="Surgical Roots Resolved:\n[1.00 2.00 3.00 4.00]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'ml' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Cpu} title="4. Machine Learning polynomials" color="rose" />
                   
                   <div className="p-12 bg-rose-950/20 border border-rose-500/30 rounded-[3rem] group text-left">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <Scaling className="text-rose-500" size={28} /> Feature Engineering Lab
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black font-sans font-black italic">
                         In regression models, adding <span className="text-rose-400 font-bold font-sans font-black">Squared Features</span> ($x^2$) often helps the model capture non-linear relationships.
                      </p>

                      <CodeExample 
                        color="rose"
                        title="ML Feature Synthesis"
                        description="Creating a squared feature vector for a prediction model."
                        code={`import numpy as np\n\nx = np.array([1, 2, 3])\n\n# Synthesize x-squared feature\nx_squared = np.power(x, 2)\n\nprint("Synthesized Feature Vector:")\nprint(x_squared)`} 
                        output="Synthesized Feature Vector:\n[1 4 9]" 
                      />
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Efficiency Protocols" color="amber" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-black font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black">
                            <Layers size={16} /> ** Syntax
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Always use <code className="text-cyan-300 font-sans font-bold">arr ** 2</code> for cleaner, more readable polynomial definitions. Python translates this into <code className="text-cyan-300">np.power()</code>.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-cyan-300 text-[10px] font-sans font-bold">x_poly = x ** 3</code>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black">
                            <Scaling size={16} /> Root shortcut
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Combine operations inside the power call: <code className="text-emerald-300">np.power(arr + 1, 2)</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-violet-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Activity size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-sans font-black">
                            🧪 Exponential <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-sans font-sans">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left font-sans font-bold">
                             Challenge: Design an <span className="text-white font-bold italic font-sans font-bold font-sans">Element-wise Exponent Mission</span> raising a base array to an exponent array!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Parallel Power Hub"
                           code={`import numpy as np\n\nbase = np.array([2, 3, 4])\nexp = np.array([3, 2, 1])\n\n# (2^3, 3^2, 4^1)\nresult = np.power(base, exp)\n\nprint("Surgical Exponential result:")\nprint(result)`} 
                           output="Surgical Exponential result:\n[8.00 9.00 4.00]" 
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
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black">Polynomial Solver v2.5</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic">
            Surgical Exponential transformation with fractional root resolution
         </p>
      </footer>
    </div>
  );
}
