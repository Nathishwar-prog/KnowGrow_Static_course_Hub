import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, TrendingUp, FileText, Download, Upload, Boxes, FlaskConical, Binary, Database } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _format: (val: any) => {
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? val.toFixed(1) : val.toFixed(4);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix
        const rows = val.map(row => ` [${row.map(NumpySandbox._format).join('  ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.map(NumpySandbox._format).join(' ')}]`; // Vector
    }
    return String(val);
  },

  _fs: {
    "data.txt": "1 2 3\n4 5 6\n7 8 9",
    "data.csv": "col1,col2,col3\n10,20,30\n40,50,60",
    "messy.csv": "10,20,\n40,,60"
  },

  np: {
    array: (data: any) => JSON.parse(JSON.stringify(data)),
    loadtxt: (fname: string, params: any = {}) => {
        const delimiter = params.delimiter || /\s+/;
        const skiprows = params.skiprows || 0;
        const usecols = params.usecols || null;

        const content = NumpySandbox._fs[fname as keyof typeof NumpySandbox._fs];
        if (!content) throw new Error(`FileNotFoundError: No such file or directory: '${fname}'`);

        const lines = content.trim().split('\n').slice(skiprows);
        const data = lines.map(line => {
            let parts = line.split(delimiter);
            if (usecols) parts = usecols.map((idx: number) => parts[idx]);
            return parts.map(v => {
                const n = Number(v);
                return isNaN(n) ? 0 : n;
            });
        });
        return data;
    },
    savetxt: (fname: string, arr: any[], params: any = {}) => {
        const delimiter = params.delimiter || ' ';
        const fmt = params.fmt || null;
        
        let content = '';
        if (Array.isArray(arr[0])) {
            content = arr.map(row => row.map(v => fmt === "%d" ? Math.floor(v) : v.toFixed(6)).join(delimiter)).join('\n');
        } else {
            content = arr.map(v => fmt === "%d" ? Math.floor(v) : v.toFixed(6)).join(delimiter);
        }
        
        return `[TRANSMISSION SUCCESSFUL]\nVirtual File '${fname}' updated with content:\n${content}`;
    },
    genfromtxt: (fname: string, params: any = {}) => {
        const delimiter = params.delimiter || ',';
        const filling_values = params.filling_values !== undefined ? params.filling_values : 0;
        
        const content = NumpySandbox._fs[fname as keyof typeof NumpySandbox._fs];
        if (!content) throw new Error(`FileNotFoundError: No such file or directory: '${fname}'`);

        const lines = content.trim().split('\n');
        return lines.map(line => line.split(delimiter).map(v => {
            const n = Number(v);
            return (v === '' || isNaN(n)) ? filling_values : n;
        }));
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
       .replace(/np\.loadtxt\((.+?),\s*delimiter=(.+?),\s*skiprows=(.+?)\)/g, 'np.loadtxt($1, {delimiter: $2, skiprows: $3})')
       .replace(/np\.loadtxt\((.+?),\s*delimiter=(.+?),\s*usecols=\((.+?)\)\)/g, 'np.loadtxt($1, {delimiter: $2, usecols: [$3]})')
       .replace(/np\.loadtxt\((.+?),\s*delimiter=(.+?)\)/g, 'np.loadtxt($1, {delimiter: $2})')
       .replace(/np\.loadtxt\((.+?)\)/g, 'np.loadtxt($1)')
       .replace(/np\.savetxt\((.+?),\s*(.+?),\s*fmt=(.+?),\s*delimiter=(.+?)\)/g, 'np.savetxt($1, $2, {fmt: $3, delimiter: $4})')
       .replace(/np\.savetxt\((.+?),\s*(.+?)\)/g, 'np.savetxt($1, $2)')
       .replace(/np\.genfromtxt\((.+?),\s*delimiter=(.+?),\s*filling_values=(.+?)\)/g, 'np.genfromtxt($1, {delimiter: $2, filling_values: $3})')
       .replace(/print\((.+?)\)/g, 'customPrint($1)')
       .replace(/f"(.+?)"/g, (match, p1) => '`' + p1.replace(/\{(.+?)\}/g, '${$1}') + '`');

    try {
      const g = { data: [[10, 20, 30], [40, 50, 60]] };
      const codeToRun = `
        const np = NumpySandbox.np;
        const print = customPrint;
        const data = g.data;
        ${sanitizedCode}
      `;
      const executor = new Function('NumpySandbox', 'customPrint', 'g', codeToRun);
      executor(NumpySandbox, customPrint, g);
      return outputBuffer.join('\n');
    } catch (e: any) {
      return `Error: ${e.message}`;
    }
  }
};

export default function NpTxtFiles() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8 font-sans">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5 font-sans font-black`}>
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
        emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30 font-sans font-black',
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30 font-sans font-black',
        amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30 font-sans font-black',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30 font-sans font-black',
        cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30 font-sans font-black',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30 font-sans font-black',
        violet: 'bg-violet-600 hover:bg-violet-500 shadow-violet-500/30 font-sans font-black',
    };

    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-2xl transition-all hover:border-slate-700/60 font-sans">
        <div className="bg-slate-900/90 px-8 py-5 border-b border-slate-800 flex justify-between items-center backdrop-blur-xl font-sans font-black">
          <div className="flex items-center gap-4 text-left font-sans font-black">
             <div className={`w-3 h-3 rounded-full ${runColor[color as keyof typeof runColor].split(' ')[0]} animate-pulse font-sans font-black`}></div>
             <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans font-black">I/O Transmission Terminal</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans font-black">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none font-sans font-black`}
          >
            <Play size={14} fill="currentColor" /> {isRunning ? 'SYNCING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans font-black">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800 font-sans">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-indigo-300 outline-none resize-none selection:bg-indigo-500/20 font-sans font-black"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left font-sans font-black font-sans font-black">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-white font-sans font-black">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans font-black"></div> Disk Buffer Result
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// File transmission pending...'}
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-[#020617] font-sans font-black"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px] font-sans font-black"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left font-sans font-black">
          <div className="flex-1 font-sans font-black">
            <div className="flex items-center gap-6 mb-10 font-sans font-black font-sans font-black">
              <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent font-sans font-black font-sans font-black"></div>
              <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.6em] font-sans font-black">Vectorized File I/O Transmission</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left font-sans font-black">
               Disk <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic font-sans font-black">Transmission</span>
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold font-sans font-black">
               Master the <span className="text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">Persisted Matrix Data</span> flow. Ingest legacy datasets with `loadtxt`, exports analytical results with `savetxt`, and manage messy CSV structures with vectorized C-level precision.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans font-black">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black font-sans font-black">
               <Database size={24} className="text-indigo-400 font-sans font-black" /> I/O Resolver
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans text-left font-sans font-black">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left font-sans font-black">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans font-black">
              {[
                { id: 'concept', label: '1. Persistent Storage Theory', icon: BookOpen },
                { id: 'load', label: '2. loadtxt (Import)', icon: Download },
                { id: 'save', label: '3. savetxt (Export)', icon: Upload },
                { id: 'messy', label: '4. genfromtxt (Messy CSV)', icon: AlertTriangle },
                { id: 'pro', label: '5. Senior I/O Protocols', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 text-left font-sans italic font-sans font-black font-sans font-black font-sans font-black' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans font-black font-sans font-black font-sans font-black font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold font-sans font-black font-sans font-black">
               <div className="absolute -right-8 -bottom-8 p-10 text-indigo-500/10 group-hover:scale-110 transition-transform duration-700 font-sans font-black">
                  <FileText size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> Senior Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold">
                  NumPy's text functions are optimized for <span className="text-indigo-300 font-black font-sans italic font-sans font-black">Pure Numeric Arrays</span>. For mixed data (strings + numbers), either use <code className="text-indigo-300 font-black font-sans italic font-sans font-black font-sans font-black">genfromtxt</code> or transition to Pandas.
               </p>
            </div>
            
            <div className="mt-8 bg-indigo-500/5 border border-indigo-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-indigo-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                  <Cpu size={20} /> Matrix Persistence
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                  Using <code className="text-indigo-300 font-black font-sans italic font-sans font-black">savetxt</code> with <code className="text-indigo-300 font-black font-sans italic font-sans font-black font-sans font-black font-sans font-black">fmt="%d"</code> allows for efficient, human-readable integer storage suitable for legacy analytics software.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                  <AlertTriangle size={20} /> Strictness Warning ⚠️
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                  <code className="text-rose-300 font-bold font-sans font-black font-sans italic">loadtxt</code> will trigger a ValueError if the dataset contains missing values or non-numeric headers. Use <span className="text-rose-300 font-bold font-sans font-black underline italic font-sans">skiprows=1</span> to bypass headers.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans font-black">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans font-black font-sans">
                <section>
                   <SectionHeader icon={Info} title="1. Persistent Dimensional Theory" color="indigo" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left font-sans font-bold font-sans font-black font-sans font-black">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full font-sans font-black font-sans font-black"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-indigo-600 pl-12 max-w-4xl text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                         <span className="text-indigo-400 font-bold italic font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">Data Persistence</span> is the act of reading from or writing to the disk. In NumPy, this power feature is used to ingest legacy CSV datasets, export ML training pool results, and store coordinate matrices for visualization.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "Ingest", desc: "loadtxt resolver", icon: "📥" },
                           { label: "Export", desc: "savetxt generator", icon: "📤" },
                           { label: "CSV", desc: "Delimiter aware", icon: "📊" },
                           { label: "Messy", desc: "Missing value fill", icon: "🧯" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-indigo-500/20 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-indigo-950/20 border border-indigo-500/30 rounded-[3rem] group mb-16 text-left font-sans font-black">
                      <h4 className="text-white font-black text-2xl mb-8 flex items-center gap-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                         <Boxes className="text-indigo-500 font-sans font-black font-sans font-black" size={28} /> The I/O Pipeline
                      </h4>
                      <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 italic text-left font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black">
                         NumPy automatically resolves text grids into <span className="text-indigo-400 font-bold font-sans font-black italic">NumPy NDArrays</span>, enabling immediate vectorized math on freshly loaded disk data.
                      </p>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'load' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black">
                <section>
                   <SectionHeader icon={Download} title="2. The loadtxt Ingestion Engine" color="indigo" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black font-sans font-black">
                      Ingest clean numeric data from <span className="text-indigo-400 font-black underline decoration-indigo-500/30 underline-offset-8">Legacy Text Buffers</span> or CSV structures with custom delimiters.
                   </p>

                   <CodeExample 
                    color="indigo"
                    title="TXT Ingestion Terminal"
                    description="Executing np.loadtxt on a virtual data.txt buffer."
                    code={`import numpy as np\n\n# Loading a space-separated TXT file\ndata = np.loadtxt("data.txt")\n\nprint("Determined Matrix Ingest:")\nprint(data)`} 
                    output="Determined Matrix Ingest:\n[[1. 2. 3.]\n [4. 5. 6.]\n [7. 8. 9.]]" 
                  />

                  <CodeExample 
                    color="cyan"
                    title="CSV Resolver Sandbox"
                    description="Executing np.loadtxt on a comma-separated CSV file."
                    code={`import numpy as np\n\n# Loading with custom delimiter\ndata = np.loadtxt("data.csv", delimiter=",", skiprows=1)\n\nprint("Determined CSV Ingest (Minus Headers):")\nprint(data)`} 
                    output="Determined CSV Ingest (Minus Headers):\n[[10 20 30]\n [40 50 60]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'save' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Upload} title="3. The savetxt Export Engine" color="violet" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                      Export your processed coordinates back to <span className="text-violet-400 font-bold font-sans font-black italic font-sans font-black">Disk Buffers</span> using high-precision formatting strings.
                   </p>

                   <CodeExample 
                    color="violet"
                    title="Formatted Export Terminal"
                    description="Executing np.savetxt with integer formatting and comma delimiter."
                    code={`import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Save with integer format %d\nnp.savetxt("output.csv", arr, fmt="%d", delimiter=",")\n\nprint("Disk Export Operation Status:")\nprint("Transmission Successful.")`} 
                    output="Disk Export Operation Status:\nTransmission Successful." 
                  />
                </section>
              </div>
            )}

            {activeTab === 'messy' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={AlertTriangle} title="4. Messy Data Resolution (genfromtxt)" color="rose" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic font-sans font-black font-sans font-black">
                     Manage explosive <span className="text-rose-400 font-black underline decoration-rose-500/30 underline-offset-8">Missing Value Errors</span> by resolving empty CSV cells into a default filling constant.
                   </p>

                   <CodeExample 
                    color="rose"
                    title="Error Shield Terminal"
                    description="Executing np.genfromtxt on a messy dataset with missing values."
                    code={`import numpy as np\n\n# Resolve empty cells into 0\ndata = np.genfromtxt("messy.csv", delimiter=",", filling_values=0)\n\nprint("Determined Sanitized ingest:")\nprint(data)`} 
                    output="Determined Sanitized ingest:\n[[10, 20, 0]\n [40, 0, 60]]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior I/O Protocols" color="blue" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold font-sans font-black font-sans font-black">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                            <Scaling size={16} /> Column Selector
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold font-sans font-black font-sans">
                            Ingest only specific feature columns using: <code className="text-cyan-300">usecols=(0,1)</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group text-left">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                            <FlaskConical size={16} /> Output Sanitizer
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold font-sans font-black font-sans font-black font-sans font-black">
                            Save clean scientific outputs with: <code className="text-emerald-300">fmt="%.2f"</code>.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-indigo-800/40 to-blue-800/20 border border-indigo-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold font-sans font-black">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <Database size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
                            ⚡ Coordinate <span className="text-indigo-400 italic font-light font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">Transmission hub</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
                             Challenge: Load a 3D dataset, multiply by 2, and resolve the export!
                         </p>
                         <CodeExample 
                           color="indigo"
                           title="Dataset Transmission Lab"
                           code={`import numpy as np\n\n# 1. Ingest clean data\nraw = np.loadtxt("data.txt")\n\n# 2. Vectorized transformation\nscaled = raw * 2\n\n# 3. Resolve export\nnp.savetxt("transmission.txt", scaled, fmt="%d")\n\nprint("Transmission Final Result Matrix:")\nprint(scaled)`} 
                           output="Transmission Final Result Matrix:\n[[2 4 6]\n [8 10 12]\n [14 16 18]]" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
            <div className="w-16 h-16 bg-indigo-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-indigo-600/40 font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">KG</div>
            <div className="font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1 font-sans">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans">Disk Resolver v4.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black font-sans font-black">
            High-Performance Dataset Ingestion with np.loadtxt and Persistent Export Resolution via savetxt
         </p>
      </footer>
    </div>
  );
}
