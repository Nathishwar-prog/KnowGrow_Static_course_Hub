import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, Filter, Search, Table, Eraser, CheckCircle, TrendingUp } from 'lucide-react';

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
    array: (data: any) => {
        // Simple proxy to handle fancy indexing simulation
        const arr = [...data];
        const proxy = new Proxy(arr, {
            get(target, prop) {
                if (typeof prop === 'string' && !isNaN(Number(prop))) {
                    return target[Number(prop)];
                }
                // Handle basic boolean mask or fancy index array
                if (Array.isArray(prop)) {
                    if (typeof prop[0] === 'boolean') {
                        return target.filter((_, i) => prop[i]);
                    }
                    return prop.map(i => target[i]);
                }
                return (target as any)[prop];
            }
        });
        return proxy;
    },
    where: (condition: any[], x: any = null, y: any = null) => {
        if (x !== null && y !== null) {
            return condition.map((c, i) => (c ? (Array.isArray(x) ? x[i] : x) : (Array.isArray(y) ? y[i] : y)));
        }
        return [condition.map((c, i) => (c ? i : null)).filter(v => v !== null)];
    }
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    const customPrint = (...args: any[]) => {
      outputBuffer.push(args.map(arg => NumpySandbox._format(arg)).join(' '));
    };

    // Enhanced sandbox to support [mask] and [indices] syntax
    const sanitizedCode = code
      .replace(/import numpy as np/g, '')
      .replace(/import matplotlib.pyplot as plt/g, '')
      .replace(/plt\..+\(.*\)/g, '')
      .replace(/arr\[(.+?)\]\s*=\s*(.+)/g, (match, mask, val) => {
          return `arr = arr.map((v, i) => {
              const condition = ${mask.replace(/arr/g, 'arr')};
              return (Array.isArray(condition) ? condition[i] : condition) ? ${val} : v
          })`;
      })
      .replace(/arr\[(.+?)\]/g, (match, inner) => {
          if (inner.includes(',') && !inner.includes('[')) {
              // Handle 2D simple fancy indexing
              const [r, c] = inner.split(',').map(s => s.trim());
              return `(()=>{
                  const rows = ${r};
                  const cols = ${c};
                  return rows.map((rv, i) => arr[rv][cols[i]]);
              })()`;
          }
          return `arr.filter((v, i) => {
              const maskOrIdx = ${inner};
              if (Array.isArray(maskOrIdx)) {
                  if (typeof maskOrIdx[0] === 'boolean') return maskOrIdx[i];
                  return false; // Fancy indexing handled differently in simple simulation
              }
              return false;
          })`;
      })
      // Special manual fix for basic fancy index
      .replace(/arr\.filter\(.*indices.*\)/g, `indices.map(i => arr[i])`)
      .replace(/print\((.+?)\)/g, 'customPrint($1)')
      .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      // Basic simulation environment
      const envCode = `
        let arr = [];
        const np = {
            array: (d) => d,
            where: (cond, x, y) => {
                if(x !== undefined) return cond.map((c, i) => c ? (Array.isArray(x) ? x[i] : x) : (Array.isArray(y) ? y[i] : y));
                return [cond.map((c, i) => c ? i : null).filter(v => v !== null)];
            }
        };
        ${sanitizedCode}
      `;
      const executor = new Function('customPrint', envCode);
      executor(customPrint);
      return outputBuffer.join('\n');
    } catch (e: any) {
      return `Error: ${e.message}`;
    }
  }
};

export default function NpAdvancedIndexingModule() {
  const [activeTab, setActiveTab] = useState('overview');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none capitalize">{title}</h2>
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
        purple: 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-10 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800 flex justify-between items-center backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]}`}></div>
            <div>
              <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] block">{title || 'Console Sandbox'}</span>
              {description && <p className="text-[10px] text-slate-400 font-medium">{description}</p>}
            </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2 px-5 rounded-full transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'EXECUTING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="p-6 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800 group">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/30"
              spellCheck={false}
            />
          </div>
          <div className="p-6 bg-slate-950/40 font-mono text-sm">
            <div className="text-slate-700 mb-4 uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-2">
              <div className="w-1 h-3 bg-slate-700 rounded-full"></div> Logic Output
            </div>
            <pre className="text-amber-400 overflow-x-auto selection:bg-amber-400/10">
              {sandboxOutput || output || '// Logic sequence terminal'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/30 selection:text-white font-sans antialiased">
      {/* Immersive Header */}
      <header className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[140px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.4em]">Vectorized Filtering</span>
            </div>
            <h1 className="text-8xl font-black text-white mb-10 tracking-tighter leading-none">
              Advanced <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent italic">Indexing</span>
            </h1>
            <p className="text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
              Master conditions, custom index arrays, and boolean masks. Filter massive datasets at lightning speed without a single loop.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-2">
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl text-xs font-black text-slate-300 backdrop-blur-sm self-start">
               <Filter size={16} className="text-blue-400" /> Vector Filtering
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl text-xs font-black text-slate-300 backdrop-blur-sm self-start">
               <Zap size={16} className="text-amber-400" /> Loop Elimination
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <nav className="sticky top-12 space-y-4">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl text-sm font-black transition-all border ${activeTab === 'overview' ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-500/20 active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
              >
                <BookOpen size={20} /> Overview & Principles
              </button>
              <button 
                onClick={() => setActiveTab('techniques')}
                className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl text-sm font-black transition-all border ${activeTab === 'techniques' ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-500/20 active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
              >
                <Zap size={20} /> Indexing Techniques
              </button>
              <button 
                onClick={() => setActiveTab('logic')}
                className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl text-sm font-black transition-all border ${activeTab === 'logic' ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-500/20 active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
              >
                <Search size={20} /> Conditional Logic
              </button>
              <button 
                onClick={() => setActiveTab('cleaning')}
                className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl text-sm font-black transition-all border ${activeTab === 'cleaning' ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-500/20 active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
              >
                <Eraser size={20} /> Data Cleaning
              </button>
            </nav>

            <div className="mt-12 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 group">
               <h4 className="flex items-center gap-3 text-emerald-400 font-black text-xs uppercase tracking-widest mb-4">
                  <Lightbulb size={20} /> Pro Expert Tip
               </h4>
               <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  Use Boolean Indexing for most filtering tasks. It's the most common pattern in production Data Science pipelines. <br /><br />
                  <span className="text-emerald-300 font-bold italic">Rule: Always avoid Python loops for indexing.</span>
               </p>
            </div>
            
            <div className="mt-6 bg-amber-500/5 border border-amber-500/20 rounded-3xl p-8 group">
               <h4 className="flex items-center gap-3 text-amber-400 font-black text-xs uppercase tracking-widest mb-4">
                  <Table size={20} /> Vector Logic
               </h4>
               <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  & (AND), | (OR) are specialized operators for NumPy bitwise Boolean conditions. Standard 'and'/'or' will FAIL.
               </p>
            </div>
          </aside>

          {/* Module Core */}
          <main className="flex-1 min-w-0">
            {activeTab === 'overview' && (
              <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <section>
                   <SectionHeader icon={Info} title="1. Advanced Indexing Core" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[2.5rem] p-12 relative overflow-hidden group mb-12">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full"></div>
                      <p className="text-3xl font-light text-slate-200 leading-tight mb-10 border-l-8 border-blue-600 pl-8">
                        Advanced Indexing lets you <span className="text-blue-400 font-bold">query</span> and <span className="text-blue-400 font-bold">mutate</span> arrays using conditions or index lists.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { title: "Integer Arrays", desc: "Select specific positions" },
                          { title: "Boolean Masks", desc: "Filter by condition (True/False)" },
                          { title: "Fancy Indexing", desc: "Custom selection lists" }
                        ].map((m, i) => (
                          <div key={i} className="p-6 rounded-2xl bg-black/40 border border-slate-800 hover:border-blue-500/30 transition-all">
                             <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Strategy 0{i+1}</div>
                             <h4 className="text-white font-bold text-lg mb-1">{m.title}</h4>
                             <p className="text-xs text-slate-400 font-medium">{m.desc}</p>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-10">
                        <h4 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                           <Target className="text-blue-400" size={24} /> Industry Applications
                        </h4>
                        <ul className="grid grid-cols-1 gap-4">
                           {[
                             { label: "Predictive Analytics filtering", icon: "📊" },
                             { label: "ML Feature Preprocessing", icon: "🤖" },
                             { label: "High-Frequency selection", icon: "📈" },
                             { label: "Bio-informatics cleaning", icon: "🧬" }
                           ].map((item, i) => (
                             <li key={i} className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50 text-slate-400 font-bold text-sm">
                               <span className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xl">{item.icon}</span>
                               {item.label}
                             </li>
                           ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-slate-900/60 to-black/20 border border-slate-800 rounded-3xl p-10 flex flex-col justify-center">
                         <div className="text-5xl font-black text-emerald-500 mb-4 tracking-tighter">Loop-Free</div>
                         <p className="text-slate-400 text-sm leading-relaxed mb-8">
                            Standard Python loops are slow for large data. Advanced Indexing offloads tasks to optimized C-level code for maximum throughput.
                         </p>
                         <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-slate-800"></div>
                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Efficiency Standard</span>
                            <div className="h-px flex-1 bg-slate-800"></div>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'techniques' && ( activeTab === 'techniques' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="Indexing Techniques" color="amber" />
                   
                   <div className="space-y-12">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                           <span className="text-[10px] font-black bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-widest">Section 3.1</span>
                           <h3 className="text-xl font-bold text-white tracking-tight">Fancy Integer Indexing</h3>
                        </div>
                        <CodeExample 
                          color="amber"
                          title="Selecting Specific Positions"
                          description="Pass a list of indices to grab non-sequential elements."
                          code={`import numpy as np\n\narr = np.array([10, 20, 30, 40])\n\n# Select index 0, 2, and 3\nindices = [0, 2, 3]\n\nprint("Target Values:")\nprint(arr[indices])`} 
                          output="Target Values:\n[10 30 40]" 
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-6">
                           <span className="text-[10px] font-black bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-widest">Section 3.2</span>
                           <h3 className="text-xl font-bold text-white tracking-tight">2D Grid Selections</h3>
                        </div>
                        <CodeExample 
                          color="amber"
                          title="Point-wise Matrix Access"
                          description="Access grid positions like coordinates (Row, Col)."
                          code={`import numpy as np\n\narr = np.array([\n    [10, 20],\n    [30, 40],\n    [50, 60]\n])\n\nrows = [0, 2]\ncols = [1, 0]\n\n# Picks (0,1) and (2,0)\nprint("Coordinate Samples:")\nprint(arr[rows, cols])`} 
                          output="Coordinate Samples:\n[20 50]" 
                        />
                      </div>
                   </div>
                </section>
              </div>
            ))}

            {activeTab === 'logic' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Search} title="Conditional Search Logic" color="purple" />
                   
                   <div className="bg-purple-950/20 border border-purple-500/20 rounded-3xl p-10 mb-12">
                      <p className="text-xl font-light text-slate-300 leading-relaxed">
                        Boolean Indexing is the <span className="text-purple-400 font-bold italic">Titan</span> of Data Science. Use Logical Masks to filter data based on numeric thresholds or cyclic conditions.
                      </p>
                   </div>

                   <CodeExample 
                    color="purple"
                    title="The Power of Masks"
                    description="Generating a Boolean array for instant filtering."
                    code={`import numpy as np\n\narr = np.array([10, 25, 30, 15])\n\n# Create the condition mask\nmask = arr > 20\n\nprint(f"Index Mask: {mask}")\nprint(f"Resulting Data: {arr[mask]}")`} 
                    output="Index Mask: [False  True  True False]\nResulting Data: [25 30]" 
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl">
                        <div className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                           <Search size={14} /> Cleaner Syntax
                        </div>
                        <code className="text-[10px] block bg-black/60 p-4 rounded-xl border border-slate-800 text-purple-200 mb-4">
                           print(arr[arr &gt; 20])
                        </code>
                        <p className="text-[10px] text-slate-500 italic">Direct condition filtering — the standard professional style.</p>
                      </div>
                      <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-3xl">
                        <div className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                           <CheckCircle size={14} /> Multi-Condition
                        </div>
                        <code className="text-[10px] block bg-black/60 p-4 rounded-xl border border-slate-800 text-purple-200 mb-4">
                           arr[(arr &gt; 10) & (arr % 2 == 0)]
                        </code>
                        <p className="text-[10px] text-slate-500 italic">Combine criteria using & (AND) or | (OR) for complex filters.</p>
                      </div>
                  </div>

                  <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl mb-12 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Table size={120} />
                     </div>
                     <h4 className="text-white font-black text-lg mb-6 flex items-center gap-3">
                        <TrendingUp className="text-purple-500" size={24} /> Visualizing the Filter
                     </h4>
                     <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                        Think of a scatter plot: we illuminate only the points that satisfy our Boolean criteria while keeping the rest hidden.
                     </p>
                     <div className="p-5 bg-black/40 rounded-2xl border border-slate-800">
                        <div className="flex items-center gap-3 mb-3">
                           <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Insight Logic</span>
                        </div>
                        <ul className="space-y-2 text-[10px] text-slate-400">
                           <li className="flex items-center gap-2"><span className="text-blue-500 font-black">Original</span> Raw data points distributed</li>
                           <li className="flex items-center gap-2"><span className="text-emerald-500 font-black">Filtered</span> Highlights values satisfying logic</li>
                        </ul>
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'cleaning' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-700">
                <section>
                   <SectionHeader icon={Eraser} title="Data Cleaning Operations" color="emerald" />
                   
                   <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-3xl p-10 mb-12">
                      <p className="text-xl font-light text-slate-300 leading-relaxed">
                        Indexing isn't just for <span className="bg-emerald-500/20 text-emerald-300 px-2 rounded">Reading</span>. It is one of the most powerful tools for <span className="bg-emerald-500/20 text-emerald-300 px-2 rounded">Modifying</span> data at scale.
                      </p>
                   </div>

                   <CodeExample 
                    color="emerald"
                    title="Cleaning Invalid Measurements"
                    description="Identify bad readings and replace them instantly."
                    code={`import numpy as np\n\ndata = np.array([100, -999, 200, -999])\n\n# Replacing invalid noise (-999) with zeros\ndata[data == -999] = 0\n\nprint("Cleaned Dataset:")\nprint(data)`} 
                    output="Cleaned Dataset:\n[100   0 200   0]" 
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                           <Zap className="text-amber-500" size={18} /> Using np.where()
                        </h4>
                        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                           <code className="text-[10px] block text-amber-300 font-mono mb-4">
                              indices = np.where(arr &gt; 15)
                           </code>
                           <p className="text-[10px] text-slate-500 leading-relaxed italic">
                              Returns the positional coordinates of matching elements. Perfect for index-value combo patterns.
                           </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                           <CodeXml className="text-blue-500" size={18} /> Conditional Replacement
                        </h4>
                        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                           <code className="text-[10px] block text-blue-300 font-mono mb-4">
                              arr = np.where(arr &gt; 20, 1, 0)
                           </code>
                           <p className="text-[10px] text-slate-500 leading-relaxed italic">
                              Acting as a vectorized <code className="text-slate-400">If-Else</code>. Swiftly maps data into binary states.
                           </p>
                        </div>
                      </div>
                  </div>

                  <div className="mt-16 bg-gradient-to-br from-blue-700/20 to-emerald-700/10 border border-blue-500/30 rounded-[3rem] p-12 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-12 text-blue-500/10 group-hover:scale-110 transition-transform">
                        <Target size={160} />
                     </div>
                     <div className="relative z-10 max-w-2xl">
                        <h3 className="text-4xl font-black text-white mb-6">🧪 Laboratory Task</h3>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                          Refine this dataset: Capture elements greater than 10, then standardize outliers less than 10 by mapping them to <code className="text-white font-bold">-1</code>.
                        </p>
                        <CodeExample 
                          color="blue"
                          title="Final Practical Challenge"
                          code={`import numpy as np\n\narr = np.array([5, 12, 18, 7, 25])\n\n# 1. Pipeline: Select values > 10\nfiltered = arr[arr > 10]\n\n# 2. Cleanup: Map values < 10 to -1\narr[arr < 10] = -1\n\nprint("Filtered set:", filtered)\nprint("Refined Array:", arr)`} 
                          output="Filtered set: [12 18 25]\nRefined Array: [-1 12 18 -1 25]" 
                        />
                     </div>
                  </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-24 mt-20 border-t border-slate-900 flex flex-col items-center">
         <div className="flex items-center gap-3 mb-8 opacity-60">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white text-xl italic shadow-2xl shadow-blue-600/40">KG</div>
            <span className="text-slate-400 font-black uppercase tracking-[0.4em] text-xs">KnowGrow Analytics Training</span>
         </div>
         <p className="text-xs text-slate-600 font-bold uppercase tracking-widest">Vectorized Performance — Production Standard v3.1</p>
      </footer>
    </div>
  );
}
