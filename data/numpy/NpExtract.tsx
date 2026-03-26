import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Filter, AlertTriangle, RotateCw, Activity, Layers, CodeXml, Cpu, LayoutGrid } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(4);

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
        const wrap = (d: any): any => {
            if (!Array.isArray(d)) return d;
            const arr: any = d.map(v => Array.isArray(v) ? wrap(v) : v);
            
            arr.gt = (val: any) => wrap(arr.map((v: any) => Array.isArray(v) ? (v as any).gt(val) : v > val));
            arr.lt = (val: any) => wrap(arr.map((v: any) => Array.isArray(v) ? (v as any).lt(val) : v < val));
            arr.eq = (val: any) => wrap(arr.map((v: any) => Array.isArray(v) ? (v as any).eq(val) : v === val));
            arr.modEq = (m: any, val: any) => wrap(arr.map((v: any) => Array.isArray(v) ? (v as any).modEq(m, val) : v % m === val));
            arr.and = (other: any) => wrap(arr.map((v: any, i: number) => Array.isArray(v) ? (v as any).and(other[i]) : v && other[i]));
            
            return arr;
        };
        return wrap(data);
    },
    extract: (cond: any, arr: any) => {
        const flatten = (a: any): any[] => Array.isArray(a) ? a.reduce((acc, val) => acc.concat(flatten(val)), []) : [a];
        const flatArr = flatten(arr);
        const flatCond = flatten(cond);
        return flatArr.filter((_, i) => flatCond[i]);
    },
    arange: (stop: number) => Array.from({ length: stop }, (_, i) => i),
    where: (cond: any, t: any, f: any) => {
        if (Array.isArray(cond)) return cond.map((v, i) => v ? t : f);
        return cond ? t : f;
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
       .replace(/(\w+)\s*>\s*(\d+)/g, '$1.gt($2)')
       .replace(/(\w+)\s*<\s*(\d+)/g, '$1.lt($2)')
       .replace(/(\w+)\s*%\s*(\d+)\s*==\s*0/g, '$1.modEq($2, 0)')
       .replace(/\((.+?)\)\s*&\s*\((.+?)\)/g, '($1).and($2)')
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

export default function NpExtract() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none">{title}</h2>
    </div>
  );

  const CodeExample = ({ code, output, title, description, color="emerald" }: any) => {
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30',
        purple: 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/30',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-4">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5">{title || 'Data Extraction Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'FILTERING...' : 'EXTRACT'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px]">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-emerald-300 outline-none resize-none selection:bg-emerald-500/20"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div> Output Stream
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {sandboxOutput || output || '// Awaiting mask validation...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-emerald-600/40 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-[#020617]"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-emerald-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-emerald-500 to-transparent"></div>
              <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.6em]">Conditional Data Retrieval</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em]">
               np.<span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent italic tracking-[-0.08em]">extract</span>()
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight">
               Extract elements from an array that satisfy a specific condition. A surgical filtering tool for isolating signal from noise in large datasets.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl">
               <Filter size={24} className="text-emerald-400" /> Mask Filter
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
                { id: 'concept', label: '1. Core Theory', icon: BookOpen },
                { id: 'logic', label: '2. Masking Logic', icon: Activity },
                { id: 'visual', label: '3. Filtration View', icon: LayoutGrid },
                { id: 'vs', label: '4. Comparison', icon: Zap },
                { id: 'advanced', label: '5. Pipeline Mode', icon: Layers }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-emerald-600 border-emerald-500 text-white shadow-[0_20px_60px_rgba(16,185,129,0.4)] active:scale-95' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-emerald-500/5 border border-emerald-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner">
               <div className="absolute -right-8 -bottom-8 p-10 text-emerald-500/10 group-hover:scale-125 transition-transform duration-700">
                  <RotateCw size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/20 pb-4">
                  <Lightbulb size={20} /> Teacher Advice 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Start with real-world examples like "Filter students with marks {'>'} 50". Show mask creation separately and always compare with boolean indexing!
               </p>
            </div>
            
            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <Cpu size={20} /> Performance Insight
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold">
                  Fully vectorized and faster than Python loops. While boolean indexing is more common, <code className="text-blue-300">np.extract</code> remains a powerful tool in specific functional pipelines.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6">
                  <AlertTriangle size={20} /> Safety Warning
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic">
                  Wrong condition size error: <span className="text-rose-300 font-black">Condition must match array shape exactly</span>.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <section>
                   <SectionHeader icon={Info} title="1. What is np.extract?" color="emerald" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-emerald-600 pl-12 max-w-4xl">
                         <span className="text-emerald-400 font-bold italic">np.extract()</span> filters elements from an array based on a boolean mask—returning only the values where the condition is <span className="text-emerald-400 font-bold underline decoration-emerald-500/30">True</span>.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Data Filtering", desc: "Filter by marks/score", icon: "📊" },
                           { label: "Outlier Removal", desc: "Cut extreme values", icon: "✂️" },
                           { label: "Even/Odd", desc: "Mathematical splits", icon: "🔢" },
                           { label: "Mask Testing", desc: "Truth validation", icon: "✔️" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-emerald-500/20">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em]">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <CodeExample 
                    color="emerald"
                    title="Basic Mask Extraction"
                    description="Isolating values greater than a threshold."
                    code={`import numpy as np\n\narr = np.array([5, 10, 15, 20, 25])\n\n# Extract elements > 15\nresult = np.extract(arr > 15, arr)\n\nprint("Raw Array:", arr)\nprint("Filtered Result:", result)`} 
                    output="Raw Array: [5 10 15 20 25]\nFiltered Result: [20 25]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'logic' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Activity} title="2. The Step-by-Step Logic" color="cyan" />
                   
                   <div className="bg-cyan-950/10 border border-cyan-500/20 rounded-[3rem] p-12 mb-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                         <Activity size={140} />
                      </div>
                      <h4 className="text-white font-black text-2xl mb-8">Internal Processing</h4>
                      <ol className="space-y-6">
                        <li className="flex items-start gap-4 text-slate-300">
                            <span className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-xs font-black flex-shrink-0">1</span>
                            <p className="text-lg">NumPy checks each element against the <span className="text-cyan-400 font-bold">condition</span>.</p>
                        </li>
                        <li className="flex items-start gap-4 text-slate-300">
                            <span className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-xs font-black flex-shrink-0">2</span>
                            <p className="text-lg">If condition = <span className="text-emerald-400 font-bold tracking-widest">True</span> → keep it.</p>
                        </li>
                        <li className="flex items-start gap-4 text-slate-300">
                            <span className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-xs font-black flex-shrink-0">3</span>
                            <p className="text-lg">If condition = <span className="text-rose-400 font-bold tracking-widest">False</span> → discard it.</p>
                        </li>
                      </ol>
                   </div>

                   <CodeExample 
                    color="cyan"
                    title="Even Number Filtering"
                    description="Using modulo operations to extract specific patterns."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4, 5, 6])\n\n# Extract even numbers (divisible by 2)\nresult = np.extract(arr % 2 == 0, arr)\n\nprint("Mask Array:", arr % 2 == 0)\nprint("Final Output:", result)`} 
                    output="Mask Array: [False True False True False True]\nFinal Output: [2 4 6]" 
                  />
                  
                  <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] border-l-4 border-l-cyan-500">
                      <h4 className="text-cyan-400 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Layers size={16} /> 2D Array Behavior
                      </h4>
                      <p className="text-slate-400 text-sm mb-8">
                        ⚠️ Important: Output is <span className="text-white font-bold">always flattened (1D)</span>. Shape is NOT preserved.
                      </p>
                      <CodeExample 
                        color="cyan"
                        title="2D Matrix Extraction"
                        code={`import numpy as np\n\narr = np.array([[10, 20], [30, 40]])\n\nresult = np.extract(arr > 20, arr)\n\nprint("2D Input Shape:", arr.shape)\nprint("Resulting Shape:", result.shape)\nprint("Final Array:", result)`} 
                        output="2D Input Shape: (2, 2)\nResulting Shape: (2,)\nFinal Array: [30 40]" 
                      />
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'visual' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={LayoutGrid} title="3. Filtration Visualization" color="blue" />
                   
                   <div className="p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-[3.5rem] relative overflow-hidden group shadow-3xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                        <Filter size={200} />
                     </div>
                     <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4">
                        <LayoutGrid className="text-blue-500" size={28} /> Visualizing the Filter
                     </h4>
                     <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic">
                        See how np.extract() separates specific values from the original sequence.
                     </p>
                     
                     <div className="bg-slate-950 p-10 rounded-2xl border border-slate-800 mb-10 overflow-hidden">
                        <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-4">Original Sequence [0-9]</div>
                        <div className="flex gap-2 mb-10">
                           {Array.from({ length: 10 }).map((_, i) => (
                              <div key={i} className={`h-12 flex-1 rounded-lg flex items-center justify-center text-xs font-black border ${i > 5 ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                                 {i}
                              </div>
                           ))}
                        </div>
                        
                        <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-4">Extracted (arr {'>'} 5)</div>
                        <div className="flex gap-2">
                            <div className="flex-grow"></div>
                           {Array.from({ length: 10 }).map((_, i) => (
                              i > 5 ? (
                                <div key={i} className="h-12 w-12 rounded-lg bg-emerald-600 flex items-center justify-center text-xs font-black text-white shadow-lg shadow-emerald-500/20 animate-in slide-in-from-top-4 duration-500">
                                    {i}
                                </div>
                              ) : null
                           ))}
                           <div className="flex-grow"></div>
                        </div>
                     </div>

                     <CodeExample 
                        color="blue"
                        title="Plot-Ready Data Generation"
                        description="Creating masks and extraction targets for visualizations."
                        code={`import numpy as np\n\narr = np.arange(10)\nmask = arr > 5\nfiltered = np.extract(mask, arr)\n\nprint("Original:", arr)\nprint("Mask Array:", mask)\nprint("Filtered List:", filtered)`} 
                        output="Original: [0 1 2 3 4 5 6 7 8 9]\nMask Array: [False False False False False False True True True True]\nFiltered List: [6 7 8 9]" 
                      />
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'vs' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Zap} title="4. np.extract vs Boolean Indexing" color="purple" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <h5 className="text-xs font-black text-purple-400 uppercase tracking-widest mb-6">Method 1: np.extract()</h5>
                         <code className="block bg-black/60 p-4 rounded-xl text-emerald-400 mb-4 whitespace-nowrap overflow-x-auto text-sm">np.extract(arr &gt; 10, arr)</code>
                         <p className="text-[10px] text-slate-500 font-bold">Functional approach, always returns 1D.</p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <h5 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-6">Method 2: Boolean Indexing</h5>
                         <code className="block bg-black/60 p-4 rounded-xl text-emerald-400 mb-4 whitespace-nowrap overflow-x-auto text-sm">arr[arr &gt; 10]</code>
                         <p className="text-[10px] text-slate-500 font-bold">More common, highly readable Pythonic way.</p>
                      </div>
                   </div>

                   <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
                      <table className="w-full text-left border-collapse">
                         <thead>
                            <tr className="bg-slate-800/50">
                               <th className="px-10 py-6 text-sm font-black text-slate-300 uppercase tracking-widest">Feature</th>
                               <th className="px-10 py-6 text-sm font-black text-purple-400 uppercase tracking-widest">np.extract()</th>
                               <th className="px-10 py-6 text-sm font-black text-emerald-400 uppercase tracking-widest text-center">Boolean Indexing</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-slate-800">
                            {[
                               { f: "Output Structure", e: "Always 1D", b: "Keeps multidim structure" },
                               { f: "Popularity", e: "Less common", b: "Industry Standard ✅" },
                               { f: "Readability", e: "Medium", b: "High / Intuitive" },
                               { f: "Chainability", e: "Excellent", b: "Standard" }
                            ].map((row, i) => (
                               <tr key={i} className="hover:bg-white/5 transition-colors">
                                  <td className="px-10 py-6 text-sm font-bold text-slate-400">{row.f}</td>
                                  <td className="px-10 py-6 text-sm font-medium text-slate-300">{row.e}</td>
                                  <td className="px-10 py-6 text-sm font-black text-white text-center italic">{row.b}</td>
                               </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'advanced' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Layers} title="5. Advanced Extraction Pipelines" color="amber" />
                   
                   <div className="p-12 bg-amber-950/10 border border-amber-500/20 rounded-[4rem] mb-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform duration-[1s]">
                         <CodeXml size={180} />
                      </div>
                      <h3 className="text-4xl font-black text-white mb-8">Multiple Conditions</h3>
                      <p className="text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-4xl">
                        Compose complex logical statements using bitwise operators <span className="text-amber-400 font-bold">&</span> (and), <span className="text-amber-400 font-bold">|</span> (or), and <span className="text-amber-400 font-bold">~</span> (not).
                      </p>
                      
                      <CodeExample 
                        color="amber"
                        title="Range Filtering"
                        description="Extracting values that fall between 20 and 50."
                        code={`import numpy as np\n\narr = np.array([10, 20, 30, 40, 50])\n\n# Multi-condition: > 20 AND < 50\nresult = np.extract((arr > 20) & (arr < 50), arr)\n\nprint("Advanced Filter Result:", result)`} 
                        output="Advanced Filter Result: [30 40]" 
                      />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4">
                            <Zap size={16} /> Debug Tip
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold">
                            Always debug your <span className="text-cyan-400">mask</span> separately before passing it to extract.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-cyan-300 text-xs">print(arr &gt; 10)</code>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4">
                            <Target size={16} /> Functional Combo
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold">
                            Combine with <span className="text-emerald-400">np.where()</span> for complex mapping before extraction.
                         </p>
                         <code className="block bg-black/60 p-4 rounded-xl text-emerald-300 text-xs">mask = np.where(arr &gt; 20, True, False)</code>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-emerald-800/40 to-cyan-800/20 border border-emerald-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group">
                      <div className="relative z-10 max-w-3xl text-left">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            🧪 Mini <span className="text-emerald-400 italic font-light">Exercise</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed">
                            Challenge: Define <span className="text-white font-bold">arr = np.array([3, 6, 9, 12, 15, 18])</span>. 
                            Extract 1) values &gt; 10, 2) multiples of 3, and 3) values between 6 and 15.
                         </p>
                         <CodeExample 
                           color="emerald"
                           title="Student Lab Sandbox"
                           code={`import numpy as np\n\narr = np.array([3, 6, 9, 12, 15, 18])\n\n# TASK 1: Extract values > 10\nt1 = np.extract(arr > 10, arr)\n\n# TASK 2: Extract multiples of 3\nt2 = np.extract(arr % 3 == 0, arr)\n\n# TASK 3: Between 6 and 15\nt3 = np.extract((arr > 6) & (arr < 15), arr)\n\nprint("Task 1 (>10):", t1)\nprint("Task 2 (mul 3):", t2)\nprint("Task 3 (6-15):", t3)`} 
                           output="Task 1 (>10): [12 15 18]\nTask 2 (mul 3): [3 6 9 12 15 18]\nTask 3 (6-15): [9 12]" 
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
            <div className="w-16 h-16 bg-emerald-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-emerald-600/40">KG</div>
            <div>
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Technologies</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Advanced Logical Filtering v1.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right">
            Surgical Data Isolation with Zero Loop Overhead
         </p>
      </footer>
    </div>
  );
}
