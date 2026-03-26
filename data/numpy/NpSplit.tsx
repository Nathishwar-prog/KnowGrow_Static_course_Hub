import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Scissors, Split, Columns, Rows, Layers2, GitBranch } from 'lucide-react';

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
      return `[${val.map(v => typeof v === 'number' ? v : String(v)).join(' ')}]`; // Vector
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
    split: (ary: any[], sections: any, axis: number = 0) => {
        const copy = JSON.parse(JSON.stringify(ary));
        
        if (Array.isArray(sections)) {
            // Split at indices [2, 4] -> [0:2], [2:4], [4:end]
            const result = [];
            let last = 0;
            sections.forEach(idx => {
                result.push(copy.slice(last, idx));
                last = idx;
            });
            result.push(copy.slice(last));
            return result;
        }

        // 2D Axis-based split (simple mock for row vs col)
        if (Array.isArray(copy[0]) && axis === 1) {
             const result: any[][] = Array.from({ length: sections }, () => []);
             const cols = copy[0].length;
             if (cols % sections !== 0) throw new Error("ValueError: array split does not result in equal division");
             const size = cols / sections;
             for (let i = 0; i < sections; i++) {
                 result[i] = copy.map(row => row.slice(i * size, (i + 1) * size));
             }
             return result;
        }

        // Equal split
        if (copy.length % sections !== 0) {
            throw new Error(`ValueError: array split does not result in equal division`);
        }
        const size = copy.length / sections;
        const result = [];
        for (let i = 0; i < copy.length; i += size) {
            result.push(copy.slice(i, i + size));
        }
        return result;
    },
    array_split: (ary: any[], sections: number) => {
       const copy = JSON.parse(JSON.stringify(ary));
       const n = copy.length;
       const result = [];
       const size = Math.floor(n / sections);
       const remainder = n % sections;
       let start = 0;
       for (let i = 0; i < sections; i++) {
           const end = start + size + (i < remainder ? 1 : 0);
           result.push(copy.slice(start, end));
           start = end;
       }
       return result;
    },
    hsplit: (ary: any[], sections: number) => NumpySandbox.np.split(ary, sections, 1),
    vsplit: (ary: any[], sections: number) => NumpySandbox.np.split(ary, sections, 0)
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    const customPrint = (...args: any[]) => {
      const formatted = args.map(arg => {
          if (Array.isArray(arg) && Array.isArray(arg[0])) { // List of arrays
             return `[${arg.map(v => `array(${NumpySandbox._format(v)})`).join(', ')}]`;
          }
          return NumpySandbox._format(arg);
      }).join(' ');
      outputBuffer.push(formatted);
    };

    const sanitizedCode = code
       .replace(/import numpy as np/g, '')
       .replace(/np\.split\((.+?),\s*\[(.+?)\]\)/g, 'np.split($1, [$2])')
       .replace(/np\.split\((.+?),\s*(.+?),\s*axis=(.+?)\)/g, 'np.split($1, $2, $3)')
       .replace(/np\.split\((.+?)\)/g, 'np.split($1)')
       .replace(/np\.array_split\((.+?)\)/g, 'np.array_split($1)')
       .replace(/np\.arange\((.+?)\)/g, 'np.arange($1)')
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

export default function NpSplit() {
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
          <div className="flex items-center gap-4 text-left font-sans font-bold">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans font-black">{title || 'Stochastic Segmentation Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'SEGMENTING...' : 'RUN MODULE'}
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
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Segmented Dataset Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Dataset resolution pending...'}
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
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Vectorized Dimensional Segmentation</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               Array.<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">split</span>
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold font-sans">
               Master the art of <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Data Atomization</span>. Surgically divide massive datasets into precise segments for model training, batch processing, and hierarchical segmentation without creating unnecessary overhead.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <Split size={24} className="text-indigo-400 font-sans" /> Segment Resolver
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left font-sans">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans">
              {[
                { id: 'concept', label: '1. Segmentation Theory', icon: BookOpen },
                { id: 'equal', label: '2. Atomic Equal Split', icon: Scissors },
                { id: 'indices', label: '3. Precise Index Split', icon: Target },
                { id: '2d', label: '4. multi-axis Split', icon: Layers },
                { id: 'pro', label: '5. Senior Split Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic font-sans font-black font-sans font-black font-sans' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans font-black font-sans font-black'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner font-sans font-bold text-left font-sans font-black font-sans">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans font-black">
                  <Activity size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> ML Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  Splitting is the core of <span className="text-indigo-300 font-black font-sans italic italic">Train-Test Logic</span>. In ML workflows, we surgically divide our dataset into training (e.g. 70%) and testing (e.g. 30%) pools using index splitting.
               </p>
            </div>
            
            <div className="mt-8 bg-violet-500/5 border border-violet-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-violet-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black">
                  <Layers2 size={20} /> View Persistence
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold">
                  Just like slicing, <span className="text-violet-300 font-black font-sans font-bold font-sans">np.split()</span> returns views whenever possible, ensuring Zero-Copy performance for high-volume data streams.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black">
                  <AlertTriangle size={20} /> Division Error!
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black">
                  Standard <code className="text-rose-300 font-bold font-sans font-black font-sans italic">np.split()</code> throws a <span className="text-rose-300 font-bold font-sans font-black underline italic">ValueError</span> if the array size isn't divisible by your section count.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans font-black">
                <section>
                   <SectionHeader icon={Info} title="1. Array Segmentation Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold font-sans">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans">
                         <span className="text-indigo-400 font-bold italic font-sans font-bold font-sans">Segmentation</span> is the process of breaking a single high-rank structure into a list of sub-arrays. This allows for distributed computation, mini-batch training, and hierarchical isolation of data segments.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Atomize", desc: "Equal segmentation", icon: "⚛️" },
                           { label: "Isolate", desc: "Index boundaries", icon: "🧪" },
                           { label: "Stream", desc: "Mini-batch pooling", icon: "📡" },
                           { label: "Split", desc: "Train-Test logic", icon: "🛤️" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20 font-sans font-black font-sans">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold font-sans">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed font-sans">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group mb-16 text-left">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black">
                         <GitBranch className="text-indigo-500 font-sans" size={28} /> Split Topology
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic">
                         NumPy offers multiple segmentation vectors: <code className="text-indigo-300 font-black font-sans italic italic font-sans">np.split()</code> (Divisible), <code className="text-indigo-300 font-black font-sans italic italic font-sans font-black">np.vsplit()</code> (Rows), and <code className="text-indigo-300 font-black font-sans italic italic font-sans font-black">np.hsplit()</code> (Columns).
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'equal' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black">
                <section>
                   <SectionHeader icon={Scissors} title="2. Atomic Equal Segmentation" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      The <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8 font-sans">Equal Divide</span> engine perfectly partitions arrays into matching sub-units, provided the count is divisible.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="Atomic Split Sandbox"
                    description="Executing a 3-way equal split on a 6-element vector."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4, 5, 6])\n\n# Split into 3 equal lists\nsegments = np.split(arr, 3)\n\nprint("Determined Segments:")\nprint(segments)`} 
                    output="Determined Segments:\n[array([1 2]), array([3 4]), array([5 6])]" 
                  />
                  
                  <div className="mt-8 p-8 bg-rose-500/5 border border-rose-500/20 rounded-3xl text-left">
                     <p className="text-xs text-rose-300 leading-relaxed font-sans">
                        <span className="font-black uppercase tracking-widest block mb-4 font-sans font-black font-sans font-black">Divisibility Warning</span>
                        Attempting <code className="text-rose-400 font-sans">np.split(arr, 4)</code> on 6 element data will trigger a <code className="text-rose-400 font-sans">ValueError</code>. For unequal splits, switch to <code className="text-white font-sans">np.array_split()</code>.
                     </p>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'indices' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Target} title="3. Precise Index-Based Split" color="violet" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans font-black">
                      Define surgical <span className="text-violet-400 font-bold font-sans font-black italic">Boundary Indices</span> to isolate asymmetric data segments.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="Boundary Isolation Terminal"
                    description="Executing a split at indices 2 and 4 to create custom-sized chunks."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4, 5, 6])\n\n# Split at index 2 and 4\nsegments = np.split(arr, [2, 4])\n\nprint("Isolated Segments:")\nprint(segments)`} 
                    output="Isolated Segments:\n[array([1 2]), array([3 4]), array([5 6])]" 
                  />
                </section>
              </div>
            )}

            {activeTab === '2d' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layers} title="4. multi-axis Grid Segmentation" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                     Surgically partition <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">Matrix Tensors</span> along either rows (axis=0) or columns (axis=1).
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Grid Partition Terminal"
                    description="Executing a column-wise split on a 4x2 matrix grid."
                    code={`import numpy as np\n\narr = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])\n\n# Split Row-wise into 2 blocks (axis=0 default)\nblocks = np.split(arr, 2)\n\nprint("Determined Matrix Segments:")\nprint(blocks)`} 
                    output="Determined Matrix Segments:\n[array([[1 2]\n [3 4]]), array([[5 6]\n [7 8]])]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Split Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black font-sans font-black">
                            <Columns size={16} /> Columnar Extraction
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Split columns instantly using: <code className="text-cyan-300">np.hsplit(arr, 2)</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black">
                            <Rows size={16} /> Row-wise Isolation
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Separate matrix rows surgically with: <code className="text-emerald-300">np.vsplit(arr, 2)</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold font-sans">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <GitBranch size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black">
                            ⚡ Train-Test <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-black">Residency hub</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans">Surgical 70/30 Split</span> for a 10-element dataset!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Dataset Atomizer Lab"
                           code={`import numpy as np\n\ndata = np.arange(10)\n\n# Split at index 7 (70% train, 30% test)\ntrain, test = np.split(data, [7])\n\nprint("Training Pool:", train)\nprint("\\nTesting Pool:", test)`} 
                           output="Training Pool: [0 1 2 3 4 5 6]\n\nTesting Pool: [7 8 9]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black font-sans font-black font-sans">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black font-sans font-black font-sans">Segment Resolver v4.1</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black">
            High-Performance Dataset Segmentation with multi-axis Axis Logic and Atomic Index Splitting
         </p>
      </footer>
    </div>
  );
}
