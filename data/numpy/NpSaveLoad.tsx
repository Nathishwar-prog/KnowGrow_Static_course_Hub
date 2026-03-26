import React, { useState } from 'react';
import { Play, Info, Lightbulb, Zap, Target, BookOpen, Scaling, Layout, AlertTriangle, RefreshCw, Activity, Cpu, CodeXml, Layers, Save, HardDrive, Download, Database, FileText, Share2, ClipboardCheck, ArrowRight } from 'lucide-react';

// A powerful, self-contained sandbox for executing NumPy-like code in JavaScript.
const NumpySandbox = {
  _disk: {} as Record<string, any>,
  _format: (val: any) => {
    if (typeof val === 'string' && val.startsWith('[SYSTEM]')) return val;
    if (typeof val === 'boolean') return val ? 'True' : 'False';
    if (val === null || val === undefined) return String(val);
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(4);

    if (Array.isArray(val)) {
      if (val.length > 0 && Array.isArray(val[0])) { // Matrix
        const rows = val.map(row => ` [${row.map(v => typeof v === 'number' ? v.toFixed(3) : String(v)).join('  ')}]`);
        return `[${rows.join('\n ')}]`;
      }
      return `[${val.map(v => typeof v === 'number' ? v.toFixed(3) : String(v)).join(' ')}]`; // Vector
    }
    
    if (typeof val === 'object' && val !== null) {
        if (val.files) return `[NPZ Archive containing: ${val.files.join(', ')}]`;
        return JSON.stringify(val);
    }
    return String(val);
  },

  np: {
    array: (data: any) => JSON.parse(JSON.stringify(data)),
    random: {
        rand: (d0: number, d1: number) => Array.from({ length: d0 }, () => Array.from({ length: d1 }, () => Math.random()))
    },
    save: (file: string, arr: any) => {
        NumpySandbox._disk[file] = JSON.parse(JSON.stringify(arr));
        return `[SYSTEM] persistent_storage write: ${file} (application/octet-stream)`;
    },
    load: (file: string) => {
        const data = NumpySandbox._disk[file];
        if (!data) return `Error: File '${file}' not found in virtual disk.`;
        return data;
    },
    savez: (file: string, params: any) => {
        const keys = Object.keys(params);
        NumpySandbox._disk[file] = { ...params, files: keys };
        return `[SYSTEM] archive_storage write: ${file} (.npz binary containing ${keys.length} segments)`;
    },
    savez_compressed: (file: string, params: any) => {
        const keys = Object.keys(params);
        NumpySandbox._disk[file] = { ...params, files: keys, _compressed: true };
        return `[SYSTEM] compressed_storage write: ${file} (deflated binary stream)`;
    }
  },

  execute: async (code: string) => {
    let outputBuffer: string[] = [];
    const customPrint = (...args: any[]) => {
      outputBuffer.push(args.map(arg => NumpySandbox._format(arg)).join(' '));
    };

    const sanitizedCode = code
       .replace(/import numpy as np/g, '')
       .replace(/np\.savez\((.+?),\s*(.+?)\)/g, (match, file, rest) => {
          const parts = rest.split(',').map((p: string) => p.trim());
          const obj = parts.map((p: string) => {
              const [k, v] = p.split('=').map(s => s.trim());
              return `"${k}": ${v}`;
          }).join(', ');
          return `np.savez(${file}, {${obj}})`;
       })
       .replace(/np\.savez_compressed\((.+?),\s*(.+?)\)/g, (match, file, rest) => {
          const parts = rest.split(',').map((p: string) => p.trim());
          const obj = parts.map((p: string) => {
              const [k, v] = p.split('=').map(s => s.trim());
              return `"${k}": ${v}`;
          }).join(', ');
          return `np.savez_compressed(${file}, {${obj}})`;
       })
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

export default function NpSaveLoad() {
  const [activeTab, setActiveTab] = useState('concept');

  const SectionHeader = ({ icon: Icon, title, color }: any) => (
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3.5 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-400/20 shadow-xl shadow-${color}-500/5`}>
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-black text-white tracking-tight leading-none text-left font-sans font-black">{title}</h2>
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
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-0.5 font-sans">{title || 'Persistent Storage Terminal'}</span>
                {description && <p className="text-[11px] text-slate-400 font-medium italic font-sans">{description}</p>}
             </div>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 ${runColor[color as keyof typeof runColor]} text-white text-[10px] font-black py-2.5 px-6 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 tracking-widest leading-none`}
          >
            <Save size={14} fill="currentColor" /> {isRunning ? 'WRITING...' : 'RUN MODULE'}
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[200px] font-sans">
          <div className="p-8 bg-black/40 font-mono text-sm leading-relaxed border-b xl:border-b-0 xl:border-r border-slate-800">
            <textarea 
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="w-full h-full min-h-[160px] bg-transparent text-emerald-300 outline-none resize-none selection:bg-emerald-500/20 font-sans"
              spellCheck={false}
            />
          </div>
          <div className="p-8 bg-slate-950/40 font-mono text-sm text-left">
            <div className="text-slate-700 mb-5 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-2 font-black font-sans">
              <div className="w-1.5 h-4 bg-slate-800 rounded-full font-sans"></div> Disk Persistence Output
            </div>
            <pre className="text-amber-400/90 selection:bg-amber-400/10 overflow-x-auto whitespace-pre-wrap leading-relaxed font-sans font-black">
              {sandboxOutput || output || '// Persistent storage resolution pending...'}
            </pre>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-emerald-600/40 selection:text-white font-sans antialiased overflow-x-hidden font-sans">
      {/* Cinematic Header */}
      <header className="relative pt-44 pb-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-[#020617] font-sans"></div>
        <div className="absolute top-0 right-1/4 w-[1200px] h-[1200px] bg-emerald-600/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] -ml-96 -mb-96 opacity-40 font-sans"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12 text-left">
          <div className="flex-1 font-sans">
            <div className="flex items-center gap-6 mb-10 font-sans">
              <div className="h-px w-20 bg-gradient-to-r from-emerald-500 to-transparent"></div>
              <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.6em] font-sans">Binary Array Serialization</span>
            </div>
            <h1 className="text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8] drop-shadow-2xl translate-x-[-0.05em] text-left">
               Array.<span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent italic tracking-[-0.08em] font-sans italic">Disk</span>
            </h1>
            <p className="text-3xl text-slate-400 max-w-4xl leading-relaxed font-light tracking-tight text-left font-sans font-bold italic font-sans font-bold">
               Master the art of <span className="text-white font-medium italic underline decoration-emerald-500/30 underline-offset-8">Binary Persistence</span>. Learn to surgically save deep datasets and model layers to disk while preserving their exact structure, shape, and precision for high-speed retrieval.
            </p>
          </div>
          
          <div className="flex wrap gap-5 mb-10 scale-110 origin-right transition-transform hover:scale-125 duration-700 font-sans">
            <div className="flex items-center gap-4 px-10 py-6 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm font-black text-slate-300 backdrop-blur-3xl shadow-2xl font-sans font-black">
               <Database size={24} className="text-emerald-400 font-sans" /> Data Persistence
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col lg:flex-row gap-20 font-sans">
          {/* Navigation Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 font-sans text-left">
            <nav className="sticky top-12 space-y-5 flex flex-col font-sans">
              {[
                { id: 'concept', label: '1. Save & Load Theory', icon: BookOpen },
                { id: 'single', label: '2. .NPY Serialization', icon: FileText },
                { id: 'multiple', label: '3. .NPZ Archiving', icon: Layers },
                { id: 'compressed', label: '4. Binary Compression', icon: Database },
                { id: 'pro', label: '5. Senior Tricks', icon: Zap }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-5 px-8 py-7 rounded-[2.5rem] text-sm font-black transition-all border ${activeTab === tab.id ? 'bg-emerald-600 border-emerald-500 text-white shadow-[0_20px_60px_rgba(16,185,129,0.4)] active:scale-95 text-left font-sans italic' : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700 text-left font-sans font-bold leading-none italic font-sans'}`}
                >
                  <tab.icon size={22} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-16 bg-emerald-500/5 border border-emerald-500/20 rounded-[3rem] p-10 group relative overflow-hidden shadow-inner text-left font-sans font-bold">
               <div className="absolute -right-8 -bottom-8 p-10 text-emerald-500/10 group-hover:scale-110 transition-transform duration-700 font-sans">
                  <Cpu size={120} />
               </div>
               <h4 className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/20 pb-4 font-sans font-black font-sans font-black">
                  <Lightbulb size={20} /> ML Fact 👨‍🏫
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold italic font-sans font-bold font-sans">
                  Storing datasets as <span className="text-emerald-300 font-black font-sans italic italic">.npy binary files</span> is up to 10x faster than CSV, as it avoids slow text parsing and preserves the exact <code className="text-emerald-300 font-black font-sans">dtype</code> of your model.
               </p>
            </div>
            
            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] p-10 group text-left">
               <h4 className="flex items-center gap-3 text-blue-400 font-black text-[11px] uppercase tracking-widest mb-6 font-sans font-black font-sans font-black font-sans font-black">
                  <Save size={20} /> Pipeline Safety
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic font-sans font-bold text-left italic font-sans font-bold">
                  Always use <span className="text-blue-300 font-black font-sans font-bold font-sans">Compressed Archiving</span> for large datasets. It significantly reduces cloud storage costs while maintaining full fidelity.
               </p>
            </div>

            <div className="mt-8 bg-rose-500/5 border border-rose-500/20 rounded-[3rem] p-10 group text-left font-sans font-bold text-left italic font-sans font-black">
               <h4 className="flex items-center gap-3 text-rose-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-rose-500/10 pb-4 font-sans font-black font-sans font-black font-sans font-black">
                  <AlertTriangle size={20} /> Format Warning
               </h4>
               <p className="text-xs text-slate-400 leading-[1.8] font-semibold italic text-left font-sans font-bold font-sans font-black">
                  Files ending in <code className="text-rose-300 font-bold font-sans font-black font-sans italic">.npy</code> are for single arrays. Trying to load a dictionary archive as a single array will cause a <span className="text-rose-300 font-bold font-sans font-black underline italic">Binary Mismatch Error</span>.
               </p>
            </div>
          </aside>

          {/* Module Content */}
          <main className="flex-1 min-w-0 font-sans text-left font-sans font-black font-sans">
            {activeTab === 'concept' && (
              <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 text-left font-sans font-bold">
                <section>
                   <SectionHeader icon={Info} title="1. The Persistence Lifecycle Theory" color="emerald" />
                   <div className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-16 relative overflow-hidden group mb-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] font-sans text-left">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full font-sans"></div>
                      <p className="text-4xl font-light text-slate-100 leading-tight mb-14 border-l-[12px] border-emerald-600 pl-12 max-w-4xl text-left font-sans font-bold">
                         <span className="text-emerald-400 font-bold italic font-sans font-bold font-sans">Serialization</span> is the process of translating a live Python object into a binary format suitable for disk storage. In NumPy, this is the standard for long-term dataset persistence.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           { label: "ML Storage", desc: "Persist weights", icon: "🧠" },
                           { label: "Session Link", desc: "Pick up later", icon: "🔗" },
                           { label: "Efficiency", desc: "Binary speed", icon: "⚡" },
                           { label: "Zero-Loss", desc: "dtype preservation", icon: "🛡️" }
                         ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-slate-800 flex flex-col items-center text-center transition-all group-hover:border-emerald-500/20 font-sans font-black">
                              <span className="text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all font-sans italic">{item.icon}</span>
                              <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 tracking-[0.2em] font-sans font-bold font-sans font-bold font-sans">{item.label}</h5>
                              <p className="text-[10px] text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 font-sans font-bold text-left italic font-sans font-black">
                      <div className="p-10 bg-slate-900/60 border border-slate-800 rounded-3xl flex flex-col items-center text-center font-sans">
                         <Scaling className="text-emerald-400 mb-6 font-sans" size={40} />
                         <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3 font-sans">Step 1: Save</span>
                         <p className="text-xs text-slate-400 italic font-sans">Dump live object to binary disk file.</p>
                      </div>
                       <ArrowRight className="hidden md:block self-center text-slate-800 font-sans" size={32} />
                      <div className="p-10 bg-slate-900/60 border border-slate-800 rounded-3xl flex flex-col items-center text-center font-sans">
                         <Download className="text-emerald-400 mb-6 font-sans" size={40} />
                         <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3 font-sans">Step 2: Load</span>
                         <p className="text-xs text-slate-400 italic font-sans">Hydrate object back into memory instantly.</p>
                      </div>
                   </div>
                </section>
              </div>
            )}

            {activeTab === 'single' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={FileText} title="2. Single Array .NPY Serialization" color="emerald" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                      The <span className="text-emerald-400 font-black underline decoration-emerald-500/30 underline-offset-8">.npy</span> format is designed for high-performance retrieval of single matrices.
                   </p>

                   <CodeExample 
                    color="emerald"
                    title="Write/Read lifecycle Sandbox"
                    description="Executing a persistent write to the virtual disk and retrieving it immediately."
                    code={`import numpy as np\n\narr = np.array([1, 2, 3, 4])\n\n# Persist to disk\nnp.save('data.npy', arr)\n\n# Retrieve from disk\nloaded = np.load('data.npy')\n\nprint("Retrieved Array Segment:")\nprint(loaded)`} 
                    output="Retrieved Array Segment:\n[1 2 3 4]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'multiple' && (
              <div className="space-y-16 animate-in zoom-in-95 duration-800">
                <section>
                   <SectionHeader icon={Layers} title="3. .NPZ Collaborative Archiving" color="blue" />
                   
                   <p className="text-xl text-slate-400 leading-relaxed font-light mb-12 italic text-left font-sans font-bold font-sans font-black">
                      Store multiple arrays in a single structural archive. Use <span className="text-blue-400 font-bold font-sans font-black italic">Keyword Mapping</span> to retrieve segments by their unique ID.
                   </p>

                   <CodeExample 
                    color="blue"
                    title="Archive Management Hub"
                    description="Executing a multi-segment write and surgically retrieving parts by key."
                    code={`import numpy as np\n\ncore = np.array([1, 2, 3, 4])\n\n# Save with unique IDs 'a' and 'b'\nnp.savez('archive.npz', a=core, b=core*2)\n\n# Load as a mapped dictionary\ndata = np.load('archive.npz')\n\nprint("Retrieved Segment 'a':", data['a'])\nprint("Retrieved Segment 'b':", data['b'])`} 
                    output="Retrieved Segment 'a': [1 2 3 4]\nRetrieved Segment 'b': [2 4 6 8]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'compressed' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Database} title="4. Deflated Binary Compression" color="amber" />
                   
                   <p className="text-2xl font-light text-slate-300 leading-relaxed italic mb-12 text-left font-sans font-bold font-sans font-black italic">
                     When datasets scale into Gigabytes, use <span className="text-amber-400 font-black underline decoration-amber-500/30 underline-offset-8">Compressed Archiving</span> to minimize surgical storage footprints.
                   </p>

                   <CodeExample 
                    color="amber"
                    title="Volumetric Compression Lab"
                    description="Using compressed saving to deflate large coordinate structures."
                    code={`import numpy as np\n\n# Large random coordinate set\ndata = np.array([[10, 20], [30, 40]])\n\n# Save with compression overhead\nnp.savez_compressed('optimized.npz', state=data)\n\nprint("Archive Metadata:")\nprint(np.load('optimized.npz'))`} 
                    output="Archive Metadata:\n[NPZ Archive containing: state]" 
                  />
                </section>
              </div>
            )}

            {activeTab === 'pro' && (
              <div className="space-y-16 animate-in slide-in-from-right duration-700">
                <section>
                   <SectionHeader icon={Zap} title="5. Senior Persistence Protocols" color="violet" />
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-left font-sans font-bold">
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-cyan-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-cyan-500/10 pb-4 font-sans font-black">
                            <Share2 size={16} /> Data Portability
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold">
                            Always provide path targets in strings: <code className="text-cyan-300">np.save('checkpoints/weights.npy', w)</code>.
                         </p>
                      </div>
                      <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] group">
                         <div className="flex items-center gap-3 text-emerald-400 font-black text-[11px] uppercase tracking-widest mb-6 border-b border-emerald-500/10 pb-4 font-sans font-black">
                            <ClipboardCheck size={16} /> Segment Audit
                         </div>
                         <p className="text-xs text-slate-400 leading-relaxed mb-6 font-semibold italic text-left font-sans font-bold font-sans">
                            Inspect .npz contents before loading: <code className="text-emerald-300">data.files</code> yields the segment key list.
                         </p>
                      </div>
                   </div>

                   <div className="mt-28 bg-gradient-to-br from-emerald-800/40 to-blue-800/20 border border-emerald-500/30 rounded-[4.5rem] p-20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.5)] text-left font-sans font-bold font-sans">
                      <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-[1.5s]">
                         <HardDrive size={240} />
                      </div>
                      <div className="relative z-10 max-w-3xl text-left font-sans font-bold font-sans font-black font-sans font-black">
                         <h3 className="text-6xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-sans font-black font-sans font-sans font-sans font-black">
                            💾 Pipeline <span className="text-emerald-400 italic font-light font-sans font-bold font-sans font-sans font-black">Checkpoint Lab</span>
                         </h3>
                         <p className="text-2xl text-slate-200 mb-14 font-light leading-relaxed font-sans font-bold text-left italic font-sans font-bold">
                             Challenge: Design a <span className="text-white font-bold italic font-sans font-bold font-sans">Surgical Persistence Pipe</span> for a 100x5 random dataset!
                         </p>
                         <CodeExample 
                           color="emerald"
                           title="ML Dataset Archiver"
                           code={`import numpy as np\n\n# Simulate processed dataset (100 samples, 5 features)\ndataset = np.random.rand(100, 5)\n\n# Persist checkpoint\nnp.save('final_model_data.npy', dataset)\n\n# Verification Load\nretrieved_data = np.load('final_model_data.npy')\n\nprint("Checkpoint Resolved. Verification Shape:")\nprint(retrieved_data.length)`} 
                           output="Checkpoint Resolved. Verification Shape:\n100" 
                         />
                      </div>
                   </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-slate-900 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 group text-left font-sans font-bold text-left italic font-sans font-black font-sans font-black font-sans font-black">
         <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-16 h-16 bg-emerald-600 rounded-[2rem] flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-emerald-600/40 font-sans font-black">KG</div>
            <div className="font-sans font-black italic">
               <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-1">KnowGrow Analytics</span>
               <span className="text-slate-600 font-bold text-xs uppercase tracking-widest font-sans font-black">Binary Resolver v5.0</span>
            </div>
         </div>
         <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.6em] text-center md:text-right font-sans leading-none font-sans font-black italic font-sans font-black font-sans font-black">
            High-Speed Binary Serialization with Keyword Segment Archiving
         </p>
      </footer>
    </div>
  );
}
