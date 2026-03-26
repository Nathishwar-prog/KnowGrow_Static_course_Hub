import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, Database, LayoutGrid, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';

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
    array: (data: any, options: any = {}) => {
        const arr = JSON.parse(JSON.stringify(data));
        const dtype = options.dtype || (typeof arr.flat(Infinity)[0] === 'number' ? (Number.isInteger(arr.flat(Infinity)[0]) ? 'int64' : 'float64') : typeof arr.flat(Infinity)[0]);
        
        // Mocking nbytes based on dtype
        const size = arr.flat(Infinity).length;
        let bytesPerElement = 8;
        if (dtype === 'int8') bytesPerElement = 1;
        if (dtype === 'int16') bytesPerElement = 2;
        if (dtype === 'int32' || dtype === 'float32') bytesPerElement = 4;
        
        const nbytes = size * bytesPerElement;

        return {
            data: arr,
            dtype: dtype,
            nbytes: nbytes,
            astype: (newType: string | any) => {
                const typeStr = typeof newType === 'string' ? newType : 'int64';
                return NumpySandbox.np.array(arr, { dtype: typeStr });
            },
            toString: () => NumpySandbox._format(arr)
        };
    },
    int8: 'int8',
    int64: 'int64',
    float32: 'float32',
    float64: 'float64'
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    const customPrint = (...args: any[]) => {
      outputBuffer.push(args.map(arg => {
          if (arg && arg.data !== undefined) return arg.toString();
          return NumpySandbox._format(arg);
      }).join(' '));
    };

    const sanitizedCode = code
       .replace(/import numpy as np/g, '')
       .replace(/np\.int8/g, "'int8'")
       .replace(/np\.int64/g, "'int64'")
       .replace(/np\.float32/g, "'float32'")
       .replace(/np\.float64/g, "'float64'")
       .replace(/(\w+)\.dtype/g, '$1.dtype')
       .replace(/(\w+)\.nbytes/g, '$1.nbytes')
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

export default function NpDataTypesModule() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-10">
      <div className={`p-4 rounded-3xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-2xl shadow-${color}-500/10`}>
        <Icon size={32} />
      </div>
      <h2 className="text-4xl font-black text-white tracking-tighter leading-none">{title}</h2>
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
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/40',
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/40',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/40',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/40',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-[2.5rem] overflow-hidden mb-12 shadow-[0_30px_100px_rgba(0,0,0,0.5)] transition-all hover:border-slate-700/80">
        <div className="bg-slate-900/95 px-10 py-6 border-b border-slate-800 flex justify-between items-center backdrop-blur-2xl">
          <div className="flex items-center gap-5">
             <div className={`w-3.5 h-3.5 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] block mb-1">{title || 'Type Sandbox'}</span>
                {description && <p className="text-xs text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-3 ${runColor[color as keyof typeof runColor]} text-white text-xs font-black py-3 px-8 rounded-2xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-[0.2em] uppercase`}
          >
            <Play size={16} fill="currentColor" /> {isRunning ? 'CONVERTING...' : 'EXECUTE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[220px]">
          <div className="p-10 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-10 bg-slate-950/60 font-mono text-sm">
            <div className="text-slate-700 mb-6 uppercase text-[11px] font-black tracking-[0.5em] flex items-center gap-3">
              <div className="w-1.5 h-5 bg-slate-800 rounded-full"></div> Memory Allocation
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Structural type stream'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-48 pb-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/10 rounded-full blur-[200px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-blue-600/5 rounded-full blur-[160px] -ml-64 -mb-64 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-0.5 w-24 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em]">Memory Schema Optimization</span>
            </div>
            <h1 className="text-[11rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
               np.<span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.1em]">dtypes</span>
            </h1>
            <p className="text-4xl text-slate-400 max-w-4xl leading-snug font-light tracking-tight">
               Define the precision and footprint of your data. Mastering dtypes is the secret to high-speed computations and memory-efficient AI pipelines.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 scale-110 origin-right transition-transform hover:scale-125 duration-1000">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-[2.5rem] text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Database size={24} className="text-blue-400" /> Byte Resolution
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* Navigation Sidebar */}
          <aside className="lg:w-96 flex-shrink-0">
            <nav className="sticky top-12 space-y-6">
              {[
                { id: 'concept', label: '1. Memory Mapping', icon: BookOpen },
                { id: 'types', label: '2. Type Directory', icon: LayoutGrid },
                { id: 'usage', label: '3. Manipulation', icon: Zap },
                { id: 'optimization', label: '4. Optimization', icon: ShieldCheck }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-6 px-10 py-8 rounded-[3rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_30px_100px_rgba(79,70,229,0.3)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={26} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-20 bg-rose-500/5 border border-rose-500/20 rounded-[4rem] p-12 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-12 -bottom-12 p-12 text-rose-500/10 group-hover:scale-125 transition-transform duration-700 rotate-12">
                  <AlertTriangle size={160} />
               </div>
               <h4 className="flex items-center gap-4 text-rose-400 font-black text-[11px] uppercase tracking-[0.3em] mb-8 border-b border-rose-500/20 pb-6">
                  <AlertTriangle size={24} /> Precision Trap
               </h4>
               <p className="text-sm text-slate-400 leading-relaxed font-semibold italic">
                  Ignoring dtypes can waste <span className="text-white font-black underline decoration-rose-500/30">8x more memory</span> and slow down computations. Choosing the smallest fitting dtype is the <span className="text-rose-300 font-black italic">Golden Rule</span>.
               </p>
            </div>
          </aside>

          {/* Module Core */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-24 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. What are NumPy dtypes?" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[5rem] p-20 relative overflow-hidden group mb-20 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
                      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[140px] rounded-full"></div>
                      <p className="text-5xl font-light text-slate-100 leading-tight mb-20 border-l-[15px] border-indigo-600 pl-16 max-w-5xl">
                         <span className="text-indigo-400 font-black">Data Types (dtypes)</span> define exactly how individual elements are mapped into computer memory.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                         {[
                           { title: "PERFORMANCE", desc: "Up to 10x faster vectorized math", icon: "⚡" },
                           { title: "MEMORY USAGE", desc: "Shrink massive data sets by 80%", icon: "💾" },
                           { title: "ACCURACY", desc: "Manage floating point drift", icon: "🎯" }
                         ].map((item, i) => (
                           <div key={i} className="p-10 rounded-[3.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20">
                              <span className="text-5xl mb-8 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 tracking-[0.3em]">{item.title}</h5>
                              <p className="text-xs text-slate-400 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="blue"
                    title="Checking Resolution"
                    description="Identifying the default data type allocated by NumPy."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3])\n\n# Check the mapping resolution\nprint(f"Implicit DType: {arr.dtype}")`} 
                    output="Implicit DType: int64" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'types' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={LayoutGrid} title="2. The Type Directory" color="emerald" />
                   
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                      <div className="bg-slate-950/60 p-12 border border-slate-800 rounded-[4rem] group hover:border-indigo-500/20 transition-all">
                         <h4 className="text-indigo-400 font-black text-xs uppercase tracking-[0.6em] mb-12 flex items-center gap-4">
                            <TrendingUp size={20} /> Integer Spectrum
                         </h4>
                         <div className="space-y-6">
                            {[
                              { t: "int8", d: "Ultra-small (-128 to 127)", b: "1 byte" },
                              { t: "int16", d: "Small integers", b: "2 bytes" },
                              { t: "int32", d: "Standard distribution", b: "4 bytes" },
                              { t: "int64", d: "Massive scale (default)", b: "8 bytes" }
                            ].map((row, i) => (
                               <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                                  <div>
                                     <div className="text-white font-mono font-black">{row.t}</div>
                                     <div className="text-[10px] text-slate-500 font-bold">{row.d}</div>
                                  </div>
                                  <div className="text-[10px] bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full font-black uppercase tracking-widest border border-indigo-500/20">{row.b}</div>
                               </div>
                            ))}
                         </div>
                      </div>
                      <div className="bg-slate-950/60 p-12 border border-slate-800 rounded-[4rem] group hover:border-emerald-500/20 transition-all">
                         <h4 className="text-emerald-400 font-black text-xs uppercase tracking-[0.6em] mb-12 flex items-center gap-4">
                            <TrendingUp size={20} /> Floating Resolution
                         </h4>
                         <div className="space-y-6">
                            {[
                              { t: "float16", d: "Low precision economy", b: "2 bytes" },
                              { t: "float32", d: "Medium (ML Standard)", b: "4 bytes" },
                              { t: "float64", d: "High Precision (Default)", b: "8 bytes" },
                              { t: "bool", d: "True / False mapping", b: "1 byte" }
                            ].map((row, i) => (
                               <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                                  <div>
                                     <div className="text-white font-mono font-black">{row.t}</div>
                                     <div className="text-[10px] text-slate-500 font-bold">{row.d}</div>
                                  </div>
                                  <div className="text-[10px] bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full font-black uppercase tracking-widest border border-emerald-500/20">{row.b}</div>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>

                   <CodeExample 
                    color="emerald"
                    title="Manual Type Allocation"
                    description="Forcing a specific footprint during array creation."
                    code={`import numpy as np\n\n# Force float precision on whole numbers\narr = np.array([1, 2, 3], dtype=float)\n\nprint("Float Mapping:")\nprint(arr)\nprint(f"Footprint: {arr.nbytes} bytes")`} 
                    output="Float Mapping:\n[1.00  2.00  3.00]\nFootprint: 24 bytes" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="3. Dynamic Transformation" color="amber" />
                   
                   <CodeExample 
                    color="amber"
                    title="Type Casting (astype)"
                    description="Correctly converting an existing array to a new precision type."
                    code={`import numpy as np\n\narr = np.array([1.5, 2.7, 3.2])\n\n# Convert to integers (truncates decimals)\nnew_arr = arr.astype(int)\n\nprint("Cast Result:")\nprint(new_arr)\nprint(f"Original: {arr.dtype} -> New: {new_arr.dtype}")`} 
                    output="Cast Result:\n[1 2 3]\nOriginal: float64 -> New: int64" 
                  />

                   <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[4rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <TrendingUp size={240} />
                     </div>
                     <h4 className="text-white font-black text-3xl mb-10 flex items-center gap-6">
                        <TrendingUp className="text-amber-500" size={36} /> Auto-Upcasting Logic
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-16 italic">
                        When mixing types, NumPy automatically promotes to the <span className="text-white font-black underline decoration-amber-500/30">highest precision available</span> to prevent data loss.
                     </p>
                     
                     <div className="bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 font-mono text-sm group-hover:border-amber-500/20 transition-all">
                        <div className="text-slate-500 mb-2"># Mixture of Int and Float</div>
                        <div className="text-slate-300">arr = np.array([1, 2.5, 3])</div>
                        <div className="text-amber-400 mt-4"># Resulting Array: [1. 2.5 3.]</div>
                        <div className="text-slate-600 mt-2 font-bold italic tracking-widest text-[10px]">ALL ELEMENTS PROMOTED TO FLOAT64</div>
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'optimization' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={ShieldCheck} title="4. Expert Optimization" color="indigo" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 uppercase tracking-widest">
                      {[
                        { title: "FLOAT 32 ML", desc: "Twice as fast for model training with minimal accuracy loss", icon: "🧠" },
                        { title: "INT 8 SENSORS", desc: "Shrink massive time-series logs down to bit-sized segments", icon: "💹" },
                        { title: "SCHEMA LOCK", desc: "Set dtype=np.int16 early to lock memory allocation", icon: "🔒" }
                      ].map((m, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-10 rounded-[3.5rem] group hover:bg-slate-800/60 transition-all border-b-8 border-b-indigo-500/10">
                           <div className="w-16 h-16 rounded-[2rem] bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                              <span className="text-3xl">{m.icon}</span>
                           </div>
                           <h4 className="text-white font-black text-[11px] mb-4 tracking-[0.2em]">{m.title}</h4>
                           <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{m.desc}</p>
                        </div>
                      ))}
                   </div>

                   <CodeExample 
                    color="rose"
                    title="Memory Scaling Benchmark"
                    description="Comparing the actual byte-footprint of different integer resolutions."
                    code={`import numpy as np\n\n# Small range needs only int8 (1 byte per element)\na = np.array([1, 2, 3], dtype=np.int8)\n\n# Standard integers use int64 (8 bytes per element)\nb = np.array([1, 2, 3], dtype=np.int64)\n\nprint(f"int8 Footprint: {a.nbytes} bytes")\nprint(f"int64 Footprint: {b.nbytes} bytes")`} 
                    output="int8 Footprint: 3 bytes\nint64 Footprint: 24 bytes" 
                  />

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/30 border border-blue-500/30 rounded-[5rem] p-24 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-24 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Database size={260} />
                      </div>
                      <div className="relative z-10 max-w-4xl">
                         <h3 className="text-7xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Schema <span className="text-indigo-400 italic font-light lowercase tracking-widest">Laboratory</span>
                         </h3>
                         <p className="text-3xl text-slate-200 mb-16 font-light leading-snug">
                            Transform an integer dataset into <span className="text-white font-bold underline decoration-blue-500/30 underline-offset-8 italic">Floating Point resolution</span>. Verify the resulting metadata schema.
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Conversion Challenge"
                           code={`import numpy as np\n\narr = np.array([1, 2, 3])\n\n# TASK: Convert to float using astype\nnew_arr = arr.astype(float)\n\nprint("Final Precision Identity:")\nprint(new_arr.dtype)\nprint(new_arr)`} 
                           output="Final Precision Identity:\nfloat64\n[1.00  2.00  3.00]" 
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
            <div className="w-24 h-24 bg-indigo-600 rounded-[3rem] flex items-center justify-center font-black text-white text-4xl italic shadow-[0_25px_60px_rgba(79,70,229,0.4)]">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.7em] text-[12px] block mb-2 tracking-[0.4em]">KnowGrow Engineering</span>
               <span className="text-slate-600 font-bold text-sm uppercase tracking-widest leading-none">Bit-Level Accuracy v10.0</span>
            </div>
         </div>
         <p className="text-[11px] text-slate-800 font-black uppercase tracking-[0.8em] text-center md:text-right">
            Mastering Resolution & Memory Footprint Systems
         </p>
      </footer>
    </div>
  );
}
