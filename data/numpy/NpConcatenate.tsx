import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, Layers, Maximize2, MoveDiagonal, TrendingUp, AlertTriangle, Workflow, Link } from 'lucide-react';

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
    concatenate: (arrays: any[][], axis: number = 0) => {
      if (!arrays || arrays.length === 0) return [];
      
      // 1D Case
      if (!Array.isArray(arrays[0][0])) {
         if (axis === 0) return arrays.flat();
      }

      // 2D Case
      if (axis === 0) {
        return arrays.reduce((acc, curr) => [...acc, ...curr], []);
      }
      
      if (axis === 1) {
        return arrays[0].map((_, i) => {
          return arrays.reduce((acc, curr) => [...acc, ...curr[i]], []);
        });
      }

      return arrays.flat();
    },
    vstack: (arrays: any[][]) => NumpySandbox.np.concatenate(arrays, 0),
    hstack: (arrays: any[][]) => NumpySandbox.np.concatenate(arrays, 1),
    ravel: (arr: any[]) => arr.flat(Infinity)
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
       .replace(/np\.concatenate\(\((.+?)\)/g, 'np.concatenate([$1]')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const codeToRun = `
        const np = {
            ...NumpySandbox.np,
            concatenate: (arrs, axis=0) => NumpySandbox.np.concatenate(arrs, axis)
        };
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

export default function NpConcatenateModule() {
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Concatenation Sandbox'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest uppercase`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'JOINING...' : 'EXECUTE'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Merged Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Join sequence stream'}
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em]">Array Fusion Architecture</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">concatenate</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Combine multiple arrays seamlessly along any axis. The high-performance, memory-efficient alternative to sequential appending.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-[2rem] text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl transition-all hover:bg-slate-800">
               <Workflow size={24} className="text-indigo-400" /> Pipeline Ready
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
                { id: 'concept', label: '1. Fusion Concept', icon: BookOpen },
                { id: 'usage', label: '2. Basic Joining', icon: Zap },
                { id: 'matrix', label: '3. Matrix Stack', icon: Layers },
                { id: 'pro', label: '4. Performance Pro', icon: TrendingUp }
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
                  <Workflow size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4">
                  <Lightbulb size={20} /> Pro Recommendation
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Always prefer <span className="text-indigo-300 font-black underline underline-offset-4 decoration-indigo-500/30">concatenate</span> over <span className="text-slate-500">append</span> for large datasets. It yields better memory locality and faster allocation.
               </p>
            </div>
            
            <div className="mt-8 bg-amber-500/5 border border-amber-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-amber-500 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Shape Guard
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  Arrays must match in <span className="text-white font-bold">ALL dimensions</span> except the target axis. Check your shape with <code className="text-amber-300">.shape</code> early!
               </p>
            </div>
          </aside>

          {/* Module Core */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. Fusion & Joining" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl">
                         <span className="text-indigo-400 font-bold italic">np.concatenate()</span> is the standard way to merge multiple arrays into one structured dataset along any chosen dimension.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Data Merging", desc: "Join multiple datasets", icon: "📊" },
                           { label: "ML Training", desc: "Combine train/test sets", icon: "🤖" },
                           { label: "Feature Eng", desc: "Merge feature vectors", icon: "🧬" },
                           { label: "Result Stacking", desc: "Collect simulation data", icon: "🧪" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12 group shadow-2xl">
                      <div className="flex-1">
                         <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.6em] mb-8">Constructor Syntax</h4>
                         <div className="bg-black/90 p-8 rounded-3xl border border-slate-800 font-mono text-emerald-400 text-xl shadow-2xl group-hover:border-emerald-500/10 transition-colors">
                            np.concatenate((a1, a2), axis=0)
                         </div>
                      </div>
                      <div className="w-full lg:w-px h-px lg:h-32 bg-slate-800"></div>
                      <div className="flex-1 space-y-6">
                         <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                            <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">Arrays</span>
                            <span className="text-sm text-slate-300 font-bold italic">Tuple/List of Arrays</span>
                         </div>
                         <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                            <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">axis</span>
                            <span className="text-sm text-slate-300 font-bold italic">Join Direction</span>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="Joining Patterns" color="emerald" />
                   
                   <CodeExample 
                    color="emerald"
                    title="1. Vector Fusion (1D)"
                    description="Merging two simple vectors into one continuous stream."
                    code={`import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\nresult = np.concatenate((a, b))\n\nprint("Merged Vector:")\nprint(result)`} 
                    output="Merged Vector:\n[1 2 3 4 5 6]" 
                  />

                  <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <TrendingUp size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <TrendingUp className="text-emerald-500" size={28} /> Visual Data Merge
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                        Viewing two datasets merging into one continuous sequence enables faster pattern detection.
                     </p>
                     <div className="grid grid-cols-6 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((val, i) => (
                           <div key={i} className={`p-6 rounded-2xl border text-center transition-all ${val <= 3 ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-emerald-500/10 border-emerald-500/30'}`}>
                              <div className={`text-xl font-black mb-1 ${val <= 3 ? 'text-indigo-400' : 'text-emerald-400'}`}>{val}</div>
                              <div className="text-[8px] text-slate-600 font-black uppercase">{val <= 3 ? 'Array A' : 'Array B'}</div>
                           </div>
                        ))}
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'matrix' && ( activeTab === 'matrix' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layers} title="Matrix Dimensional Stack" color="amber" />
                   
                   <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                      <div>
                         <div className="flex items-center gap-4 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4">
                            <Maximize2 size={16} /> Row-wise Join (Axis 0)
                         </div>
                         <CodeExample 
                            color="emerald"
                            title="Vertical Addition"
                            description="Stacking data vertically to add more records."
                            code={`import numpy as np\n\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6]])\n\nresult = np.concatenate((a, b), axis=0)\n\nprint("Vertical Stack:")\nprint(result)`} 
                            output="Vertical Stack:\n[[1  2]\n [3  4]\n [5  6]]" 
                         />
                      </div>
                      <div>
                         <div className="flex items-center gap-4 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-blue-500/10 pb-4">
                            <Maximize2 size={16} /> Column-wise Join (Axis 1)
                         </div>
                         <CodeExample 
                            color="blue"
                            title="Horizontal Expansion"
                            description="Stacking data horizontally to add more features."
                            code={`import numpy as np\n\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5], [6]])\n\nresult = np.concatenate((a, b), axis=1)\n\nprint("Horizontal Join:")\nprint(result)`} 
                            output="Horizontal Join:\n[[1  2  5]\n [3  4  6]]" 
                         />
                      </div>
                   </div>

                   <div className="bg-rose-950/20 border border-rose-500/20 rounded-[3rem] p-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                         <AlertTriangle size={140} />
                      </div>
                      <h4 className="text-2xl font-black text-rose-500 mb-8 flex items-center gap-4">
                         <AlertTriangle size={28} /> The Shape mismatch Error
                      </h4>
                      <p className="text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
                         Attempting to join arrays with different dimensions (except for the joining axis) will crash your pipeline.
                      </p>
                      <div className="bg-black/60 p-8 rounded-2xl border border-rose-500/30 font-mono text-sm">
                         <div className="text-slate-500 mb-2"># ❌ THIS WILL FAIL</div>
                         <div className="text-slate-300">a = np.array([[1, 2]]) <span className="text-slate-600 font-bold ml-4"># shape (1, 2)</span></div>
                         <div className="text-slate-300">b = np.array([[3, 4, 5]]) <span className="text-slate-600 font-bold ml-4"># shape (1, 3)</span></div>
                         <div className="text-rose-400 mt-4 underline decoration-rose-500/20">np.concatenate((a, b), axis=0)</div>
                      </div>
                   </div>
                </section>
              </div>
            ))}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={TrendingUp} title="Performance & Expert Hacks" color="indigo" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                      {[
                        { title: "VSTACK / HSTACK", desc: "Use semantic shortcuts for cleaner vertically/horizontally code", icon: "📐" },
                        { title: "FLATTEN FIRST", desc: "Join multi-dim arrays into a single stream with ravel()", icon: "📏" },
                        { title: "BATCH MERGE", desc: "Provide a list [...] instead of a tuple (...) for better dynamic joining", icon: "📦" }
                      ].map((m, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] group hover:bg-slate-800/50 transition-all border-b-4 border-b-indigo-500/20">
                           <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                              <span className="text-2xl">{m.icon}</span>
                           </div>
                           <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3 tracking-[0.2em]">{m.title}</h4>
                           <p className="text-xs text-slate-500 font-bold leading-relaxed">{m.desc}</p>
                        </div>
                      ))}
                   </div>

                   <div className="space-y-10">
                      <div className="p-10 bg-slate-950/40 border border-slate-800 rounded-[3.5rem] relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                            <Workflow size={180} />
                         </div>
                         <h4 className="text-white font-black text-2xl mb-12 flex items-center gap-4">
                            <Workflow className="text-indigo-500" size={28} /> Advanced Merging Logic
                         </h4>
                         <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                            <div>
                               <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4">
                                  <TrendingUp size={16} /> Feature Engineering
                               </div>
                               <CodeExample 
                                 color="indigo"
                                 title="Feature Fusion"
                                 code={`import numpy as np\n\nfeatures1 = np.array([[1, 2], [3, 4]])\nfeatures2 = np.array([[5], [6]])\n\n# Combine existing features with new feature column\nfinal = np.concatenate((features1, features2), axis=1)\n\nprint("Fusion Result:")\nprint(final)`} 
                                 output="Fusion Result:\n[[1  2  5]\n [3  4  6]]" 
                               />
                            </div>
                            <div>
                               <div className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/10 pb-4">
                                  <Maximize2 size={16} /> Stack Shortcuts
                               </div>
                               <CodeExample 
                                 color="indigo"
                                 title="vStack & hStack"
                                 code={`import numpy as np\n\na = np.array([1, 2])\nb = np.array([3, 4])\n\nvertical = np.vstack((a, b))\nhorizontal = np.hstack((a, b))\n\nprint("Vertical:\\n", vertical)\nprint("Horizontal:\\n", horizontal)`} 
                                 output="Vertical:\n [[1  2]\n [3  4]]\nHorizontal:\n [1 2 3 4]" 
                               />
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-blue-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Link size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-indigo-400 italic font-light">Laboratory</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                            A production dataset requires a ROW-WISE join of two captures: <span className="text-white font-bold italic">[[1, 2]]</span> and <span className="text-white font-bold italic">[[3, 4]]</span>. Master the axis selection!
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Join Challenge"
                           code={`import numpy as np\n\na = np.array([[1, 2]])\nb = np.array([[3, 4]])\n\n# TASK: Combine row-wise (axis=0)\nresult = np.concatenate((a, b), axis=0)\n\nprint("Final Unified Matrix:")\nprint(result)`} 
                           output="Final Unified Matrix:\n[[1  2]\n [3  4]]" 
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
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Intelligence</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Dataset Fusion Systems v8.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Merging Tensors with High Locality and Low Overhead
         </p>
      </footer>
    </div>
  );
}
