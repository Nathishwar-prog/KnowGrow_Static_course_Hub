import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, Search, MousePointer2, TrendingUp, Grid, Crown } from 'lucide-react';

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
    argmax: (arr: any[], axis: number | null = null) => {
      // Basic simulation of np.argmax
      if (axis === null) {
        const flat = arr.flat(Infinity);
        let maxVal = flat[0];
        let maxIdx = 0;
        for (let i = 1; i < flat.length; i++) {
          if (flat[i] > maxVal) {
            maxVal = flat[i];
            maxIdx = i;
          }
        }
        return maxIdx;
      }

      // 2D Axis simulation
      if (axis === 0) { // Column-wise
        const cols = arr[0].length;
        const result = [];
        for (let j = 0; j < cols; j++) {
            let maxVal = arr[0][j];
            let maxIdx = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i][j] > maxVal) {
                    maxVal = arr[i][j];
                    maxIdx = i;
                }
            }
            result.push(maxIdx);
        }
        return result;
      }

      if (axis === 1) { // Row-wise
        return arr.map(row => {
            let maxVal = row[0];
            let maxIdx = 0;
            for (let i = 1; i < row.length; i++) {
                if (row[i] > maxVal) {
                    maxVal = row[i];
                    maxIdx = i;
                }
            }
            return maxIdx;
        });
      }
      return 0;
    },
    unravel_index: (index: number, shape: number[]) => {
        // Simple 2D unravel
        const col = index % shape[1];
        const row = Math.floor(index / shape[1]);
        return [row, col];
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

export default function NpArgmaxModule() {
  const [activeTab, setActiveTab] = useState('discovery');

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
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Index Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[11px] font-black py-2.5 px-7 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'LOCATING...' : 'EXECUTE'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Positional Result
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap">
              {sandboxOutput || output || '// Value position stream'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/40 selection:text-white font-sans antialiased">
      {/* Immersive Header */}
      <header className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[160px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-600/5 rounded-full blur-[140px] -ml-64 -mb-64"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.5em]">Positional Maximum Logic</span>
            </div>
            <h1 className="text-[9rem] font-black text-white mb-12 tracking-tighter leading-[0.85] drop-shadow-2xl">
               np.<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent italic tracking-[-0.08em]">argmax</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-3xl leading-relaxed font-light tracking-tight">
               Identify exactly where your peaks are. Return the index of the highest value in an array across any dimension.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-4 scale-110 origin-right">
            <div className="flex items-center gap-3 px-8 py-5 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-xl shadow-2xl">
               <MousePointer2 size={20} className="text-blue-400" /> Index Discovery
            </div>
            <div className="flex items-center gap-3 px-8 py-5 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-xl shadow-2xl">
               <Crown size={20} className="text-amber-400" /> Peak Selection
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
                { id: 'discovery', label: '1. Discovery', icon: BookOpen },
                { id: 'usage', label: '2. Basic Usage', icon: Zap },
                { id: 'dimensional', label: '3. Multi-Dimension', icon: Grid },
                { id: 'mastery', label: '4. Expert Mastery', icon: Crown }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_60px_rgba(37,99,235,0.3)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group relative overflow-hidden">
               <div className="absolute -right-8 -bottom-8 p-10 text-blue-500/10 group-hover:scale-125 transition-transform duration-700">
                  <Search size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-4">
                  <Lightbulb size={20} /> Expert Advice
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Most beginners forget <span className="text-blue-300 underline decoration-blue-500/50 underline-offset-4 font-black">axis selection</span>, leading to flattened results. Always specify axis for matrices!
               </p>
            </div>
            
            <div className="mt-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Target size={20} /> Prediction Rule
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  In Machine Learning classification, <code className="text-emerald-300">argmax</code> is the standard for picking the highest probability class.
               </p>
            </div>
          </aside>

          {/* Module Core */}
          <main className="flex-1 min-w-0">
            {activeTab === 'discovery' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="Locating Maximums" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_0_100px_rgba(30,41,59,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[10px] border-blue-600 pl-12 max-w-4xl">
                         <span className="text-blue-400 font-bold">np.argmax()</span> doesn't return the largest value itself—it tells you the <span className="text-blue-400 italic">exact position</span> where it lives.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "ML Predictions", desc: "Select final class", icon: "🤖" },
                           { label: "Peak Analysis", desc: "Find data spikes", icon: "📊" },
                           { label: "Optimization", desc: "Best solution index", icon: "🎯" },
                           { label: "Image Scan", desc: "Brightest pixel", icon: "🧠" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2rem] bg-black/50 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-blue-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12 group">
                      <div className="flex-1">
                         <h4 className="text-sm font-black text-blue-500 uppercase tracking-[0.5em] mb-8">Basic Logic Breakdown</h4>
                         <div className="bg-black/90 p-8 rounded-3xl border border-slate-800 font-mono text-emerald-400 text-xl shadow-2xl group-hover:border-emerald-500/10 transition-colors">
                            np.argmax(arr, axis=None)
                         </div>
                      </div>
                      <div className="w-full lg:w-px h-px lg:h-32 bg-slate-800"></div>
                      <div className="flex-1 space-y-6">
                         <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                            <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">arr</span>
                            <span className="text-sm text-slate-300 font-bold italic">Input data array</span>
                         </div>
                         <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                            <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">axis</span>
                            <span className="text-sm text-slate-300 font-bold italic">Dimension (Optional)</span>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="Core Implementation" color="emerald" />
                   
                   <CodeExample 
                    color="emerald"
                    title="1. Vector Indexing"
                    description="Standard 1D array peak location."
                    code={`import numpy as np\n\narr = np.array([10, 25, 15, 40, 5])\n\n# Locates the index of 40\nindex = np.argmax(arr)\n\nprint(f"Max Index: {index}")\nprint(f"Value at Index: {arr[index]}")`} 
                    output="Max Index: 3\nValue at Index: 40" 
                  />

                   <CodeExample 
                    color="emerald"
                    title="2. Duplicates Logic"
                    description="Argmax returns the FIRST occurrence of a maximum."
                    code={`import numpy as np\n\narr = np.array([5, 10, 10, 2, 8])\n\n# Found at index 1 and 2, but picks 1\nindex = np.argmax(arr)\n\nprint(f"Resulting Index: {index}")`} 
                    output="Resulting Index: 1" 
                  />

                  <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <TrendingUp size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <TrendingUp className="text-emerald-500" size={28} /> Visual Peak Mapping
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                        Imagine a line graph: <code className="text-emerald-400">np.argmax</code> is the magnifying glass that points directly at the absolute highest summit.
                     </p>
                     <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        {[5, 10, 40, 15].map((val, i) => (
                           <div key={i} className={`p-8 rounded-3xl border text-center transition-all ${val === 40 ? 'bg-emerald-500/20 border-emerald-500 shadow-2xl shadow-emerald-500/20' : 'bg-slate-950 border-slate-800 opacity-40'}`}>
                              <div className="text-2xl font-black text-white mb-2">{val}</div>
                              <div className="text-[10px] text-slate-500 font-black uppercase">Index {i}</div>
                              {val === 40 && <div className="text-[8px] text-emerald-400 font-bold mt-2 tracking-widest">PEAK FOUND</div>}
                           </div>
                        ))}
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'dimensional' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Grid} title="Matrix Dimension Logic" color="amber" />
                   
                   <div className="bg-amber-950/10 border border-amber-500/20 rounded-[3rem] p-12 mb-12">
                      <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-8">
                         When working with matrices, <code className="text-amber-400">argmax</code> can either look at the entire grid (flattened) or focus on specific directions using <span className="text-amber-400 font-black underline underline-offset-8">axis</span> control.
                      </p>
                      <div className="flex gap-4">
                         <div className="flex-1 bg-black/40 p-6 rounded-2xl border border-slate-800">
                            <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block mb-1 underline">Axis 0</span>
                            <span className="text-xs text-slate-400 font-bold">Column-wise Peak</span>
                         </div>
                         <div className="flex-1 bg-black/40 p-6 rounded-2xl border border-slate-800">
                            <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block mb-1 underline">Axis 1</span>
                            <span className="text-xs text-slate-400 font-bold">Row-wise Peak</span>
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="amber"
                    title="2D Flattened Result"
                    description="Argmax treats matrix as one long list if axis=None."
                    code={`import numpy as np\n\narr = np.array([\n    [10, 20, 30],\n    [5, 50, 15]\n])\n\n# Found at position index 4 (Value 50)\nprint(f"Flattened Global Peak Index: {np.argmax(arr)}")`} 
                    output="Flattened Global Peak Index: 4" 
                  />

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                      <div>
                         <h4 className="text-white font-bold mb-6 flex items-center gap-3">
                            <Search className="text-emerald-500" size={20} /> Column Peak (Axis 0)
                         </h4>
                         <CodeExample 
                            color="emerald"
                            code={`import numpy as np\n\narr = np.array([\n    [10, 20, 30],\n    [5, 50, 15]\n])\n\n# Vertical maximum positions\nprint(np.argmax(arr, axis=0))`} 
                            output="[0 1 0]" 
                         />
                      </div>
                      <div>
                         <h4 className="text-white font-bold mb-6 flex items-center gap-3">
                            <Search className="text-blue-500" size={20} /> Row Peak (Axis 1)
                         </h4>
                         <CodeExample 
                            color="blue"
                            code={`import numpy as np\n\narr = np.array([\n    [10, 20, 30],\n    [5, 50, 15]\n])\n\n# Horizontal maximum positions\nprint(np.argmax(arr, axis=1))`} 
                            output="[2 1]" 
                         />
                      </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'mastery' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Crown} title="Expert Solutions & Hacks" color="rose" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                      {[
                        { title: "ML PROBS", desc: "Select highest probability class predictions", icon: "🧠" },
                        { title: "SALES PEAKS", desc: "Instantly find best performing day/store", icon: "💹" },
                        { title: "COORDINATES", desc: "Map index back to (X, Y) grid space", icon: "📍" }
                      ].map((m, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] group hover:bg-slate-800/50 transition-all">
                           <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                              <span className="text-2xl">{m.icon}</span>
                           </div>
                           <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3">{m.title}</h4>
                           <p className="text-xs text-slate-500 font-bold leading-relaxed">{m.desc}</p>
                        </div>
                      ))}
                   </div>

                   <div className="space-y-8">
                      <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl group">
                         <div className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                            <Zap size={14} /> Trick 1: Reverse Locating
                         </div>
                         <code className="text-xs block bg-black/60 p-4 rounded-xl border border-slate-800 text-rose-200 mb-4">
                            np.argmax(arr[::-1])
                         </code>
                         <p className="text-xs text-slate-500 font-semibold italic">A clever hack to find the last occurrence of a maximum value.</p>
                      </div>

                      <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl group">
                         <div className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4">
                            <Zap size={14} /> Trick 2: Coordinate Mapping
                         </div>
                         <CodeExample 
                           color="rose"
                           title="Unraveling Dimensions"
                           code={`import numpy as np\n\narr = np.array([[10, 20], [30, 40]])\nidx = np.argmax(arr)\n\n# Convert 1D index to Grid (Row, Col)\ncoords = np.unravel_index(idx, arr.shape)\n\nprint(f"Flattened Index: {idx}")\nprint(f"Grid Coordinate: {coords}")`} 
                           output="Flattened Index: 3\nGrid Coordinate: [1, 1]" 
                         />
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-blue-700/30 to-rose-700/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Crown size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Proficiency <span className="text-blue-400 italic">Terminal</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                            A production experiment captures data: <span className="text-white font-bold">[12, 45, 7, 89, 23]</span>. Locate the peak index and its absolute value.
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Final Task Sandbox"
                           code={`import numpy as np\n\narr = np.array([12, 45, 7, 89, 23])\n\n# TASK: Find peak position and value\nidx = np.argmax(arr)\nval = arr[idx]\n\nprint(f"Peak detected @ index: {idx}")\nprint(f"Summit Value: {val}")`} 
                           output="Peak detected @ index: 3\nSummit Value: 89" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-32 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group">
         <div className="flex items-center gap-5 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-blue-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs">Positional Intelligence v5.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Mastering Maximum Probabilities & Spikes
         </p>
      </footer>
    </div>
  );
}
