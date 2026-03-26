import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, CodeXml, Target, BookOpen, Layers, Database, Cpu, LayoutGrid, CheckCircle, TrendingUp } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(2);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix or higher
        if (Array.isArray(val[0][0])) { // 3D
            const depth = val.map(slice => {
                const rows = slice.map((row: any[]) => `  [${row.map(NumpySandbox._format).join('  ')}]`);
                return ` [\n${rows.join('\n')}\n ]`;
            });
            return `[\n${depth.join('\n')}\n]`;
        }
        const rows = val.map(row => ` [${row.map(NumpySandbox._format).join('  ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.map(NumpySandbox._format).join(' ')}]`; // Vector
    }
    return String(val);
  },

  np: {
    array: (data: any, { dtype = null } = {}) => {
        // Simple mock of np.array properties
        const arr = JSON.parse(JSON.stringify(data));
        
        const getShape = (a: any): number[] => {
            if (!Array.isArray(a)) return [];
            return [a.length, ...getShape(a[0])];
        };
        
        const getSize = (a: any): number => {
            if (!Array.isArray(a)) return 1;
            return a.reduce((sum, item) => sum + getSize(item), 0);
        };
        
        const getNDim = (a: any): number => {
            if (!Array.isArray(a)) return 0;
            return 1 + getNDim(a[0]);
        };

        const shape = getShape(arr);
        const size = getSize(arr);
        const ndim = getNDim(arr);
        
        // Mocking the properties on the array object
        (arr as any).shape = `(${shape.join(', ')})`;
        (arr as any).size = size;
        (arr as any).ndim = ndim;
        (arr as any).dtype = dtype || (typeof arr.flat(Infinity)[0] === 'number' ? 'int64' : typeof arr.flat(Infinity)[0]);

        return arr;
    }
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    const customPrint = (...args: any[]) => {
      outputBuffer.push(args.map(arg => {
          if (arg && (arg.shape || arg.dtype)) {
              return NumpySandbox._format(arg);
          }
          return arg;
      }).join(' '));
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

export default function NpArrayModule() {
  const [activeTab, setActiveTab] = useState('foundation');

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
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] block mb-1">{title || 'Array Sandbox'}</span>
                {description && <p className="text-xs text-slate-400 font-medium italic opacity-80">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-3 ${runColor[color as keyof typeof runColor]} text-white text-xs font-black py-3 px-8 rounded-2xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-[0.2em]`}
          >
            <Play size={16} fill="currentColor" /> {isRunning ? 'ALLOCATING...' : 'EXECUTE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[260px]">
          <div className="p-10 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[180px] bg-transparent text-blue-300 outline-none resize-none selection:bg-blue-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-10 bg-slate-950/60 font-mono text-sm">
            <div className="text-slate-700 mb-6 uppercase text-[11px] font-black tracking-[0.5em] flex items-center gap-3">
              <div className="w-1.5 h-5 bg-slate-800 rounded-full"></div> Memory Snapshot
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Structural data stream'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Fluid Header */}
      <header className="relative pt-48 pb-36 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 left-1/4 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] -ml-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-indigo-600/5 rounded-full blur-[150px] -mr-[450px] -mb-[450px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-6 mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <span className="text-blue-400 text-xs font-black uppercase tracking-[0.6em]">Core Data Architecture</span>
          </div>
          <h1 className="text-[11rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
             np.<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em]">array</span>()
          </h1>
          <p className="text-4xl text-slate-400 max-w-3xl leading-snug font-light tracking-tight mb-20">
             The bedrock of numerical computing. Efficiently store and manipulate N-dimensional data with speed optimized for modern processors.
          </p>
          
          <div className="flex flex-wrap gap-8 scale-110 origin-left">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-[2.5rem] text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl transition-all hover:bg-slate-800">
               <Cpu size={24} className="text-blue-400" /> Vector CPU Optimized
            </div>
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-[2.5rem] text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl transition-all hover:bg-slate-800">
               <Database size={24} className="text-emerald-400" /> Memory Efficient
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* Navigation Control */}
          <aside className="lg:w-96 flex-shrink-0">
            <nav className="sticky top-12 space-y-6">
              {[
                { id: 'foundation', label: '1. The Foundation', icon: BookOpen },
                { id: 'creation', label: '2. Array Creation', icon: Zap },
                { id: 'properties', label: '3. Data Schema', icon: LayoutGrid },
                { id: 'types', label: '4. Precision Types', icon: Database }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-6 px-10 py-8 rounded-[3rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-blue-600 border-blue-500 text-white shadow-[0_30px_70px_rgba(37,99,235,0.4)] scale-105 z-10' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={26} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-20 bg-blue-500/5 border border-blue-500/20 rounded-[4rem] p-12 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-12 -bottom-12 p-12 text-blue-500/10 group-hover:scale-125 transition-transform duration-1000 rotate-12">
                  <Database size={160} />
               </div>
               <h4 className="flex items-center gap-4 text-blue-400 font-black text-[11px] uppercase tracking-[0.3em] mb-8 border-b border-blue-500/20 pb-6">
                  <Lightbulb size={24} /> Architecture Tip
               </h4>
               <p className="text-sm text-slate-400 leading-relaxed font-semibold italic">
                  Always use NumPy for heavy numerical calculations. Avoid raw Python lists for processing—NumPy's <span className="text-blue-300 font-black underline underline-offset-8">vectorized operations</span> are orders of magnitude faster.
               </p>
            </div>
            
            <div className="mt-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[4rem] p-12 group">
               <h4 className="flex items-center gap-4 text-emerald-400 font-black text-[11px] uppercase tracking-[0.3em] mb-8">
                  <Target size={24} /> Critical Check
               </h4>
               <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                  Checking <code className="text-emerald-300">arr.shape</code> immediately after creation prevents 90% of dimensionality logic errors.
               </p>
            </div>
          </aside>

          {/* Module Core */}
          <main className="flex-1 min-w-0">
            {activeTab === 'foundation' && (
              <div className="space-y-24 animate-in fade-in slide-in-from-bottom-16 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="The Core Structure" color="blue" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[5rem] p-20 relative overflow-hidden group mb-20 shadow-[0_0_120px_rgba(30,41,59,0.6)]">
                      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[140px] rounded-full"></div>
                      <p className="text-5xl font-light text-slate-100 leading-tight mb-20 border-l-[12px] border-blue-600 pl-16 max-w-5xl">
                         The <span className="text-blue-400 font-black">NumPy Array</span> is a supercharged container designed for massive numerical data efficiency.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                         {[
                           { title: "BLAZING SPEED", desc: "Faster than Python lists", icon: "⚡" },
                           { title: "MEM-EFFICIENT", desc: "Optimized storage byte-logic", icon: "💾" },
                           { title: "AI READY", desc: "Core of Modern ML/Data Sci", icon: "🤖" }
                         ].map((m, i) => (
                           <div key={i} className="p-10 rounded-[3rem] bg-black/60 border border-slate-800 transition-all group-hover:border-blue-500/20 text-center">
                              <span className="text-5xl mb-8 block grayscale group-hover:grayscale-0 transition-all">{m.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 tracking-[0.3em]">{m.title}</h5>
                              <p className="text-xs text-slate-400 font-bold leading-relaxed">{m.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-slate-900 border border-slate-800 rounded-[4rem] p-16 flex flex-col xl:flex-row items-center gap-16 group shadow-2xl">
                      <div className="flex-1">
                         <h4 className="text-xs font-black text-blue-500 uppercase tracking-[0.6em] mb-12">Constructor Syntax</h4>
                         <div className="bg-black/95 p-12 rounded-[2.5rem] border border-slate-800 font-mono text-emerald-400 text-3xl shadow-3xl group-hover:border-emerald-500/10 transition-colors">
                            np.array(object, dtype=None)
                         </div>
                      </div>
                      <div className="w-full xl:w-px h-px xl:h-40 bg-slate-800"></div>
                      <div className="flex-1 space-y-8 py-4">
                         <div className="flex justify-between items-center py-4 border-b border-slate-800/50">
                            <span className="text-xs text-slate-500 font-black uppercase tracking-[0.2em]">object</span>
                            <span className="text-lg text-slate-300 font-bold italic">Input (List, Tuple, set)</span>
                         </div>
                         <div className="flex justify-between items-center py-4">
                            <span className="text-xs text-slate-500 font-black uppercase tracking-[0.2em]">dtype</span>
                            <span className="text-lg text-slate-300 font-bold italic">Override Type (Optional)</span>
                         </div>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'creation' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="Instantiation Logic" color="emerald" />
                   
                   <CodeExample 
                    color="emerald"
                    title="1. 1D Vector Assembly"
                    description="The simplest form of array creation."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4])\n\nprint("Generated Vector:")\nprint(arr)`} 
                    output="Generated Vector:\n[1 2 3 4]" 
                  />

                   <CodeExample 
                    color="emerald"
                    title="2. 2D Matrix Structuralization"
                    description="Nesting lists creates multidimensional tensors."
                    code={`import numpy as np\n\narr = np.array([\n    [1, 2],\n    [3, 4]\n])\n\nprint("2x2 Identity Matrix:")\nprint(arr)`} 
                    output="2x2 Identity Matrix:\n[[1 2]\n [3 4]]" 
                  />

                   <CodeExample 
                    color="emerald"
                    title="3. 3D Tensors"
                    description="Deep-nesting for spatial or volumetric data."
                    code={`import numpy as np\n\narr = np.array([\n    [[1, 2], [3, 4]],\n    [[5, 6], [7, 8]]\n])\n\nprint("3D Tensor Cube:")\nprint(arr)`} 
                    output="3D Tensor Cube:\n[\n [\n  [1  2]\n  [3  4]\n ]\n [\n  [5  6]\n  [7  8]\n ]\n]" 
                  />

                  <div className="p-16 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[4rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-16 opacity-5 translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <TrendingUp size={240} />
                     </div>
                     <h4 className="text-white font-black text-3xl mb-10 flex items-center gap-6">
                        <TrendingUp className="text-emerald-500" size={36} /> Array Data Trends
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-16 italic">
                        Viewing array data visually illuminates trends that raw lists hide behind bracket syntax.
                     </p>
                     <div className="grid grid-cols-5 gap-6 items-end h-40 group-hover:gap-8 transition-all">
                        {[10, 30, 20, 50, 40].map((val, i) => (
                           <div key={i} className="bg-emerald-500/20 border-t-2 border-emerald-500/40 rounded-t-xl group-hover:bg-emerald-500/40 transition-all shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-emerald-500/30" style={{ height: `${val}%` }}>
                              <div className="text-[10px] text-emerald-400 font-black text-center -mt-6 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{val}u</div>
                           </div>
                        ))}
                     </div>
                     <div className="flex justify-between mt-6 text-[11px] font-black text-slate-600 uppercase tracking-[0.4em] px-2">
                        <span>idx-0</span>
                        <span>idx-1</span>
                        <span>idx-2</span>
                        <span>idx-3</span>
                        <span>idx-4</span>
                     </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'properties' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={LayoutGrid} title="Schema & Metadata" color="amber" />
                   
                   <div className="bg-amber-950/10 border border-amber-500/20 rounded-[4rem] p-16 mb-16 shadow-2xl">
                      <p className="text-3xl font-light text-slate-300 leading-tight italic mb-12">
                         Every array in NumPy carries its own <span className="text-amber-400 font-black underline underline-offset-8">Metadata Passport</span>. These properties define how data is structured in memory.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                         {[
                           { name: ".shape", label: "Dimensions", color: "blue" },
                           { name: ".ndim", label: "Number of Axes", color: "emerald" },
                           { name: ".size", label: "Total Elements", color: "rose" },
                           { name: ".dtype", label: "Storage Type", color: "amber" }
                         ].map((p, i) => (
                           <div key={i} className="bg-black/40 p-8 rounded-[2rem] border border-slate-800 text-center">
                              <div className={`text-xl font-black mb-3 text-${p.color}-400 font-mono tracking-tighter`}>{p.name}</div>
                              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-none">{p.label}</div>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="amber"
                    title="Inspecting 2x3 Structural Metadata"
                    description="Revealing the internal mapping of a 2D matrix."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\nprint(f"Shape: {arr.shape}")\nprint(f"Axes: {arr.ndim}")\nprint(f"Elements: {arr.size}")\nprint(f"DType: {arr.dtype}")`} 
                    output="Shape: (2, 3)\nAxes: 2\nElements: 6\nDType: int64" 
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {[
                       { title: "Pixels → Arrays", desc: "Images are just 0-255 arrays", icon: "🖼️" },
                       { title: "Features → Tensors", desc: "ML inputs organized as shapes", icon: "🧬" },
                       { title: "Mixed Types", desc: "Auto-converts to highest resolution", icon: "⚗️" }
                     ].map((m, i) => (
                        <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-3xl group hover:border-blue-500/20 transition-all">
                           <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{m.icon}</div>
                           <h4 className="text-white font-bold mb-3">{m.title}</h4>
                           <p className="text-xs text-slate-500 font-medium italic">{m.desc}</p>
                        </div>
                     ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'types' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Database} title="Memory Precision (DTypes)" color="rose" />
                   
                   <div className="bg-rose-950/20 border border-rose-500/20 rounded-[3.5rem] p-16 mb-16 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                        <Database size={200} />
                      </div>
                      <p className="text-2xl font-light text-slate-300 leading-relaxed max-w-3xl border-l-[8px] border-rose-600 pl-10 mb-12">
                         NumPy uses <span className="text-rose-400 font-bold italic">fixed-precision types</span>. Unlike dynamic Python types, this allows for vectorized execution at the hardware level.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                         {[
                           { t: "int", d: "Integers" },
                           { t: "float", d: "Decimal" },
                           { t: "bool", d: "True/False" },
                           { t: "complex", d: "Complex numbers" }
                         ].map((type, i) => (
                           <div key={i} className="bg-black/60 p-6 rounded-2xl border border-slate-800 flex flex-col items-center">
                              <span className="text-rose-400 font-black font-mono mb-2 text-lg underline decoration-rose-500/20">{type.t}</span>
                              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{type.d}</span>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="rose"
                    title="Manual Type Casting"
                    description="Forcing decimal resolution on integer inputs."
                    code={`import numpy as np\n\n# Converting integers to floating point decimals\narr = np.array([1, 2, 3], dtype=float)\n\nprint(f"FP Array: {arr}")\nprint(f"Type Check: {arr.dtype}")`} 
                    output="FP Array: [1. 2. 3.]\nType Check: float64" 
                  />

                   <div className="mt-28 bg-gradient-to-br from-blue-700/30 to-rose-700/20 border border-blue-500/30 rounded-[5rem] p-24 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-24 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Target size={260} />
                      </div>
                      <div className="relative z-10 max-w-4xl">
                         <h3 className="text-7xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Structural <span className="text-blue-400 italic">Terminal</span>
                         </h3>
                         <p className="text-3xl text-slate-200 mb-16 font-light leading-snug">
                            Assemble a 2x3 production dataset containing whole numbers <span className="text-white font-bold underline decoration-blue-500/50 underline-offset-8">1-6</span> and verify its structural dimensions.
                         </p>
                         <CodeExample 
                           color="blue"
                           title="Final Implementation Challenge"
                           code={`import numpy as np\n\n# CHALLENGE: Create 2x3 and verify shape\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Extraction of metadata\nprint(f"Target Shape: {arr.shape}")\nprint(f"Resolution Axes: {arr.ndim}")`} 
                           output="Target Shape: (2, 3)\nResolution Axes: 2" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-16 group">
         <div className="flex items-center gap-7 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-20 h-20 bg-blue-600 rounded-[2.5rem] flex items-center justify-center font-black text-white text-3xl italic shadow-[0_20px_60px_rgba(37,99,235,0.4)]">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.6em] text-[11px] block mb-2">KnowGrow Architecture</span>
               <span className="text-slate-600 font-bold text-sm tracking-widest">N-Dimensional Structuralization v6.0</span>
            </div>
         </div>
         <p className="text-[11px] text-slate-800 font-black uppercase tracking-[0.8em] text-center md:text-right">
            Mastering Numerical Data Containers & Metaschema
         </p>
      </footer>
    </div>
  );
}
