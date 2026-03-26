import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, Layers, AlertTriangle, TrendingUp, CheckCircle, Clock } from 'lucide-react';

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
    append: (arr: any[], values: any, axis: number | null = null) => {
      // Basic simulation of np.append
      const flatArr = (a: any): any[] => Array.isArray(a) ? a.flat(Infinity) : [a];
      const flatVal = (v: any): any[] => Array.isArray(v) ? v.flat(Infinity) : [v];

      if (axis === null) {
        return [...flatArr(arr), ...flatVal(values)];
      }

      // 2D Append Simulation
      if (axis === 0) {
        return [...arr, ...(Array.isArray(values[0]) ? values : [values])];
      }

      if (axis === 1) {
        return arr.map((row, i) => [...row, ...(Array.isArray(values[i]) ? values[i] : [values[i]])]);
      }

      return [...arr, ...values];
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
       .replace(/arr = np\.append\((.+?)\)/g, 'arr = np.append($1)')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const codeToRun = `
        let arr = [];
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

export default function NpAppendModule() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800 flex justify-between items-center backdrop-blur-md">
          <div className="flex items-center gap-3">
             <div className={`w-2 h-2 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]}`}></div>
             <div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] block">{title || 'Append Sandbox'}</span>
                {description && <p className="text-[10px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-full transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'APPENDING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[200px]">
          <div className="p-6 bg-black/40 font-mono text-sm leading-relaxed border-b lg:border-b-0 lg:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-6 bg-slate-950/40 font-mono text-sm">
            <div className="text-slate-700 mb-4 uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div> Growth Terminal
            </div>
            <pre className="text-amber-400 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap">
              {sandboxOutput || output || '// Logic growth sequence'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/30 selection:text-white font-sans antialiased">
      {/* Immersive Dynamic Header */}
      <header className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-slate-900/50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[140px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.4em]">Array Expansion</span>
            </div>
            <h1 className="text-8xl font-black text-white mb-10 tracking-tighter leading-none">
              np.<span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.05em]">append</span>()
            </h1>
            <p className="text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
              Expand your arrays dynamically. Add elements, append entire rows, or merge dimensions with efficient vector expansion.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-2">
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-sm self-start shadow-xl">
               <Layers size={18} className="text-blue-400" /> Layered Growth
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-sm self-start shadow-xl">
               <Target size={18} className="text-emerald-400" /> Pipeline Ready
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Navigation */}
          <aside className="lg:w-80 flex-shrink-0">
            <nav className="sticky top-12 space-y-4">
              <button 
                onClick={() => setActiveTab('concept')}
                className={`w-full flex items-center gap-5 px-7 py-6 rounded-3xl text-sm font-black transition-all border ${activeTab === 'concept' ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-500/30' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
              >
                <BookOpen size={20} /> Core Concept
              </button>
              <button 
                onClick={() => setActiveTab('usage')}
                className={`w-full flex items-center gap-5 px-7 py-6 rounded-3xl text-sm font-black transition-all border ${activeTab === 'usage' ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-500/30' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
              >
                <Zap size={20} /> Basic Usage
              </button>
              <button 
                onClick={() => setActiveTab('matrix')}
                className={`w-full flex items-center gap-5 px-7 py-6 rounded-3xl text-sm font-black transition-all border ${activeTab === 'matrix' ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-500/30' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
              >
                <Layers size={20} /> Matrix Append
              </button>
              <button 
                onClick={() => setActiveTab('performance')}
                className={`w-full flex items-center gap-5 px-7 py-6 rounded-3xl text-sm font-black transition-all border ${activeTab === 'performance' ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-500/30' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
              >
                <TrendingUp size={20} /> Optimization
              </button>
            </nav>

            <div className="mt-12 bg-amber-500/5 border border-amber-500/20 rounded-[2rem] p-8">
               <h4 className="flex items-center gap-3 text-amber-500 font-black text-xs uppercase tracking-widest mb-4">
                  <AlertTriangle size={20} /> Critical Limit
               </h4>
               <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  NumPy arrays are <span className="text-amber-300 font-bold">fixed in size</span>. np.append() does NOT modify the original array; it allocates and returns an entirely <span className="text-amber-300 font-bold underline">NEW</span> array.
               </p>
            </div>
            
            <div className="mt-6 bg-blue-500/5 border border-blue-500/20 rounded-[2rem] p-8">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-xs uppercase tracking-widest mb-4">
                  <Lightbulb size={20} /> Shape Rule
               </h4>
               <p className="text-xs text-slate-400 leading-relaxed font-medium italic">
                  When appending to specific axes, the shapes must match exactly in all other dimensions. Check your shape with <code className="text-blue-300 font-bold">.shape</code>!
               </p>
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <section>
                   <SectionHeader icon={Info} title="1. What is np.append?" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[2.5rem] p-12 relative overflow-hidden group mb-12 shadow-2xl">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full group-hover:bg-blue-600/10 transition-colors"></div>
                      <p className="text-3xl font-light text-slate-100 leading-tight mb-10 border-l-8 border-blue-600 pl-8">
                         <span className="text-blue-400 font-bold">np.append()</span> is your primary mechanism for adding values to the end of an array dataset.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="p-8 rounded-3xl bg-black/40 border border-slate-800/80">
                            <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Logical Behavior</h4>
                            <p className="text-lg text-white font-black leading-relaxed">Returns a newly allocated copy with values appended.</p>
                         </div>
                         <div className="p-8 rounded-3xl bg-black/40 border border-slate-800/80">
                            <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Array Immutability</h4>
                            <p className="text-lg text-white font-black leading-relaxed">Numpy arrays are fixed-size; it creates a new instance every time.</p>
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                      <div className="bg-slate-900/40 border border-slate-800 rounded-[2rem] p-10 shadow-xl">
                        <h4 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                           <Layers className="text-blue-400" size={24} /> Purpose & Utility
                        </h4>
                        <ul className="grid grid-cols-1 gap-4">
                           {[
                             { label: "Step-by-step dataset building", icon: "📈" },
                             { label: "Preprocessing data collection", icon: "🧪" },
                             { label: "Sensor result logging", icon: "🤖" },
                             { label: "Pipeline tracking", icon: "📊" }
                           ].map((item, i) => (
                             <li key={i} className="flex items-center gap-4 bg-slate-950/50 p-5 rounded-2xl border border-slate-800/50 text-slate-400 font-bold text-sm">
                               <span className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl shadow-inner">{item.icon}</span>
                               {item.label}
                             </li>
                           ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-slate-900/70 to-black/20 border border-slate-800 rounded-[2rem] p-10 flex flex-col justify-center">
                         <h4 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-6">Syntax Structure</h4>
                         <div className="bg-black/80 px-8 py-6 rounded-2xl border border-slate-800 font-mono text-emerald-400 text-lg mb-8 shadow-2xl">
                            np.append(arr, val, axis)
                         </div>
                         <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                               <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">arr</span>
                               <span className="text-sm text-slate-300 font-bold italic">Original Array</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                               <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">values</span>
                               <span className="text-sm text-slate-300 font-bold italic">Data to add</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                               <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">axis</span>
                               <span className="text-sm text-slate-300 font-bold italic">Dimension (optional)</span>
                            </div>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="Basic Usage Patterns" color="emerald" />
                   
                   <CodeExample 
                    color="emerald"
                    title="1D Vector Growth"
                    description="Appending multiple values to a simple 1D array."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3])\n\n# Append multiple values into a new array instance\nresult = np.append(arr, [4, 5])\n\nprint("Resulting Array:", result)\nprint("Original arr remains:", arr)`} 
                    output="Resulting Array: [1 2 3 4 5]\nOriginal arr remains: [1 2 3]" 
                  />

                   <CodeExample 
                    color="emerald"
                    title="Single Value Integration"
                    description="Add an individual element to the end of a dataset."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3])\n\nresult = np.append(arr, 10)\n\nprint(f"New Array: {result}")`} 
                    output="New Array: [ 1  2  3 10]" 
                  />
                  
                  <div className="p-10 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[2.5rem]">
                     <h4 className="text-white font-black text-xl mb-6 flex items-center gap-3">
                        <TrendingUp className="text-emerald-500" size={24} /> Visualizing Dynamic Growth
                     </h4>
                     <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        In a step-by-step experiment, we use <code className="text-emerald-400">np.append</code> to add new data points to our results, letting the array "grow" over time as new logs arrive.
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-center">
                           <div className="text-blue-500 font-black text-2xl mb-1">[10, 20]</div>
                           <div className="text-[10px] text-slate-600 font-bold uppercase">Initial</div>
                        </div>
                        <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-center">
                           <div className="text-emerald-500 font-black text-2xl mb-1">+ 30</div>
                           <div className="text-[10px] text-slate-600 font-bold uppercase">Growth Step</div>
                        </div>
                        <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-center">
                           <div className="text-emerald-400 font-black text-2xl mb-1">[10, 20, 30]</div>
                           <div className="text-[10px] text-emerald-600 font-bold uppercase">Result</div>
                        </div>
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'matrix' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layers} title="Matrix & Multi-Dimension Append" color="amber" />
                   
                   <div className="bg-amber-950/10 border border-amber-500/20 rounded-3xl p-10 mb-12">
                      <p className="text-xl font-light text-slate-300 leading-relaxed mb-6 italic">
                        Appending to matrices requires precision. If you don't specify an <span className="text-amber-400 font-bold underline">axis</span>, NumPy will flatten your array.
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-black text-amber-500 uppercase tracking-widest">
                         <AlertTriangle size={14} /> Warning: Default behavior is flattening to 1D
                      </div>
                   </div>

                   <CodeExample 
                    color="amber"
                    title="Flattened (Default) Behavior"
                    description="Adding to a 2D array without axis converts result to 1D."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\n# Without axis parameter, shape is lost\nprint(np.append(arr, [5, 6]))`} 
                    output="[1 2 3 4 5 6]" 
                  />

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-16">
                     <div>
                        <div className="flex items-center gap-3 mb-6">
                           <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-black">R</div>
                           <h4 className="text-lg font-bold text-white">Append as NEW ROW</h4>
                        </div>
                        <CodeExample 
                           color="emerald"
                           title="Axis 0 (Rows)"
                           description="Correct row shape: [[val1, val2]]"
                           code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\nnew_row = [[5, 6]]\n\nresult = np.append(arr, new_row, axis=0)\nprint(result)`} 
                           output="[[1 2]\n [3 4]\n [5 6]]" 
                        />
                     </div>
                     <div>
                        <div className="flex items-center gap-3 mb-6">
                           <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center font-black">C</div>
                           <h4 className="text-lg font-bold text-white">Append as NEW COLUMN</h4>
                        </div>
                        <CodeExample 
                           color="blue"
                           title="Axis 1 (Columns)"
                           description="Correct column shape: [[val1], [val2]]"
                           code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\nnew_col = [[5], [6]]\n\nresult = np.append(arr, new_col, axis=1)\nprint(result)`} 
                           output="[[1 2 5]\n [3 4 6]]" 
                        />
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-700">
                <section>
                   <SectionHeader icon={TrendingUp} title="Performance & Best Practices" color="rose" />
                   
                   <div className="bg-rose-950/20 border border-rose-500/20 rounded-[2.5rem] p-12 mb-12 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-10 opacity-10">
                         <Clock size={140} />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                         <AlertTriangle className="text-rose-500" /> Never Append in Loops!
                      </h3>
                      <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-10">
                         NumPy allocates a new memory block for every single <code className="text-rose-400 font-bold italic">np.append</code> call. Inside a loop, this turns an <code className="text-slate-400 italic">O(N)</code> operation into <code className="text-rose-400 font-bold italic">O(N²)</code>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="p-8 bg-black/40 rounded-3xl border border-rose-500/20">
                            <h4 className="text-rose-500 font-black text-[10px] uppercase tracking-widest mb-4">The "Antigravity" Way ❌</h4>
                            <code className="text-xs text-rose-300 block mb-2 underline decoration-rose-500/50">for i in range(1000): arr = np.append(arr, i)</code>
                            <p className="text-[10px] text-slate-500 font-medium italic mt-4">This will lag your application on large datasets.</p>
                         </div>
                         <div className="p-8 bg-emerald-500/10 rounded-3xl border border-emerald-500/20">
                            <h4 className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-4">The Performance Way ✅</h4>
                            <code className="text-xs text-emerald-300 block mb-2 underline decoration-emerald-500/50">data = []; data.append(val); arr = np.array(data)</code>
                            <p className="text-[10px] text-slate-500 font-medium italic mt-4">Collect in Python lists first, then convert. 100x Faster! 🚀</p>
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                         <h4 className="text-white font-bold mb-6 flex items-center gap-3">
                            <CheckCircle className="text-blue-500" size={20} /> Recommendations
                         </h4>
                         <ul className="space-y-4">
                            {[
                              { text: "Always Reassign", sub: "arr = np.append(arr, val)", color: "blue" },
                              { text: "Use Concatenate", sub: "Prefer np.concatenate for multiple arrays", color: "emerald" },
                              { text: "Pre-allocate", sub: "Use np.zeros() if size is known", color: "amber" }
                            ].map((rec, i) => (
                               <li key={i} className="flex gap-4">
                                  <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${rec.color}-500 shadow-lg shadow-${rec.color}-500/30`}></div>
                                  <div>
                                     <div className="text-sm text-slate-200 font-black">{rec.text}</div>
                                     <div className="text-[10px] text-slate-500 font-medium italic mt-0.5">{rec.sub}</div>
                                  </div>
                               </li>
                            ))}
                         </ul>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl group transition-all hover:bg-slate-800/80">
                         <div className="flex items-center justify-between mb-8">
                            <h4 className="text-white font-bold text-lg">Sensor Logging Usage</h4>
                            <CodeXml size={20} className="text-rose-500" />
                         </div>
                         <CodeExample 
                            color="rose"
                            title="Real-time Collection Logic"
                            code={`# Collecting results sequentially\nresults = np.array([])\n\nresults = np.append(results, 0.85)\nresults = np.append(results, 0.90)\n\nprint(f"Log Sequence: {results}")`} 
                            output="Log Sequence: [0.85 0.9 ]" 
                         />
                      </div>
                   </div>

                   <div className="mt-20 bg-gradient-to-br from-indigo-700/20 to-blue-700/10 border border-blue-500/30 rounded-[3.5rem] p-16 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:scale-105 transition-transform">
                         <Target size={180} />
                      </div>
                      <div className="relative z-10 max-w-2xl">
                         <h3 className="text-5xl font-black text-white mb-8 tracking-tighter">🧪 Proficiency Lab</h3>
                         <p className="text-xl text-slate-300 mb-12 font-light leading-relaxed">
                            A production matrix needs a new measurement row <code className="text-white font-bold">[5, 6]</code> appended to its base. Maintain the 2D dimensionality!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Final Task Sandbox"
                           code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\n# YOUR TASK: Append as a new row (axis=0)\nresult = np.append(arr, [[5, 6]], axis=0)\n\nprint("Final Matrix Result:")\nprint(result)`} 
                           output="Final Matrix Result:\n[[1 2]\n [3 4]\n [5 6]]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-900 mt-20 flex justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
         <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white italic text-xl shadow-2xl">KG</div>
            <span className="text-slate-500 font-bold uppercase tracking-[0.4em] text-xs">KnowGrow Analytics Training</span>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-widest">Mastering Dynamic Vector Expansion v2.0</p>
      </footer>
    </div>
  );
}
