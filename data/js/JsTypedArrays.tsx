import React, { useState, useMemo } from 'react';
import { 
  Database, 
  Cpu, 
  Zap, 
  Layers, 
  Code2, 
  Terminal, 
  Activity, 
  ShieldCheck, 
  Binary, 
  Image, 
  Info, 
  ArrowRight,
  Monitor,
  Layout,
  Table,
  Eye,
  Settings,
  AlertTriangle,
  ChevronRight,
  Copy,
  Check,
  Package,
  Box,
  Hash,
  RefreshCw,
  PlusCircle,
  MinusCircle
} from 'lucide-react';

// ─── Shared Components ────────────────────────────────────────────────────────

const CodeBlock = ({ code, title, language = 'javascript' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg relative group w-full bg-[#1e1e1e]">
      {title && (
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
            title="Copy code"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-blue-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color}`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed">{subtitle}</p>}
  </div>
);

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  colorClass = "blue"
}: { 
  icon: any; 
  title: string; 
  description: string; 
  colorClass?: string;
}) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
    <div className={`p-4 rounded-2xl w-fit mb-6 shadow-lg ${
      colorClass === 'blue' ? 'bg-blue-500 shadow-blue-500/20' :
      colorClass === 'purple' ? 'bg-purple-500 shadow-purple-500/20' :
      'bg-indigo-500 shadow-indigo-500/20'
    } text-white`}>
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{description}</p>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsTypedArrays: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Uint8' | 'Int16' | 'Float32'>('Uint8');
  
  // Simulation of ArrayBuffer memory (8 bytes)
  const [memory] = useState(new ArrayBuffer(8));
  
  // Reactive views based on selection
  const viewData = useMemo(() => {
    if (activeTab === 'Uint8') return Array.from(new Uint8Array(memory));
    if (activeTab === 'Int16') return Array.from(new Int16Array(memory));
    if (activeTab === 'Float32') return Array.from(new Float32Array(memory));
    return [];
  }, [activeTab, memory]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 animate-pulse tracking-[0.2em]">
          <Binary size={14} className="fill-current" /> HIGH PERFORMANCE BINARY
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Typed<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 drop-shadow-2xl">
            Arrays
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Handle raw binary data with <span className="text-gray-900 dark:text-white font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">peak performance</span> and memory efficiency in modern JavaScript.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-lg font-medium text-gray-600 dark:text-gray-300">
            <SectionHeader icon={Info} title="1. What are JS Typed Arrays?" subtitle="The bridge between JavaScript and low-level memory." color="text-blue-500" />
            <p>
              JS Typed Arrays are special array-like objects used to handle <span className="text-blue-500 font-bold">binary data</span> efficiently. They provide a mechanism for reading and writing raw binary data in memory buffers.
            </p>
            <div className="space-y-4">
              {[
                "Store fixed-type values (e.g., only integers or floats)",
                "Significantly faster and more memory-efficient",
                "Essential for graphics, audio, and networking APIs"
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 p-1 rounded-full bg-emerald-500 text-white shrink-0">
                    <Check size={12} />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-blue-500/5 rounded-3xl border border-blue-500/10">
              <p className="text-blue-600 dark:text-blue-400 font-black flex items-center gap-2">
                <Zap size={20} /> Think of them like arrays in C/C++ inside JavaScript.
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-2xl overflow-hidden">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 lowercase italic font-mono">
                    .ArrayBuffer()
                  </h3>
                  <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black tracking-widest uppercase">
                    Raw Memory
                  </div>
               </div>
               <div className="grid grid-cols-4 gap-3">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="aspect-square rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 flex items-center justify-center font-mono text-[10px] text-gray-400 group-hover:text-blue-500 transition-colors">
                      {Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase()}
                    </div>
                  ))}
               </div>
               <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-gray-500 font-medium leading-relaxed italic">
                    "Normal arrays contain any dynamic type. Typed Arrays are a window into a fixed block of bytes."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Why? ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Zap} title="2. Why Use Typed Arrays?" subtitle="The performance powerhouse of modern Web APIs." color="text-indigo-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Monitor} 
              title="WebGL & Graphics" 
              description="Feeding coordinate and color data directly to GPU buffers for 3D rendering."
              colorClass="blue"
            />
            <FeatureCard 
              icon={Activity} 
              title="Audio Processing" 
              description="Manipulating raw waveform data in real-time within the Web Audio API."
              colorClass="purple"
            />
            <FeatureCard 
              icon={Database} 
              title="Binary Networking" 
              description="Efficiently parsing WebSocket messages or complex API responses."
              colorClass="indigo"
            />
        </div>
        <div className="mt-12 bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-black text-gray-900 dark:text-white mb-4">Core Advantages:</h4>
              <ul className="space-y-4">
                {[
                  { label: "Predictable Memory", text: "Allocates a fixed amount of memory upfront.", icon: Box },
                  { label: "Blazing Fast", text: "Bypasses many of the overheads of dynamic JS arrays.", icon: Zap },
                  { label: "Lower Footprint", text: "Uses much less memory for large numerical datasets.", icon: Cpu }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 h-fit">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-white block">{item.label}</span>
                      <span className="text-sm text-gray-500">{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-gray-950 rounded-[2rem] border border-white/5 font-mono text-sm space-y-2">
              <div className="text-gray-500">// Normal JS Array (Heavy)</div>
              <div className="text-rose-400">let list = [1, 2, 3];</div>
              <div className="mt-4 text-gray-500">// Typed Array (Light & Dense)</div>
              <div className="text-emerald-400">let dense = new Uint32Array([1, 2, 3]);</div>
            </div>
        </div>
      </section>

      {/* ── Section 3: Components ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layers} title="3. Core Architecture" subtitle="How Typed Arrays are structured under the hood." color="text-purple-500" />
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { 
              title: "1. ArrayBuffer", 
              desc: "The raw memory block. A fixed-length sequence of bytes.", 
              detail: "Think of this as the physical tape of data.",
              icon: Layout,
              color: "text-blue-500 bg-blue-50 dark:bg-blue-900/30"
            },
            { 
              title: "2. TypedArray View", 
              desc: "Interprets the buffer as specific types (Int8, Float32, etc).", 
              detail: "A lens that views the buffer in chunks.",
              icon: Eye,
              color: "text-purple-500 bg-purple-50 dark:bg-purple-900/30"
            },
            { 
              title: "3. DataView", 
              desc: "Flexible, granular read/write access to different types.", 
              detail: "The ultimate tool for complex binary scraping.",
              icon: Settings,
              color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-lg relative h-full">
              <div className={`p-4 rounded-2xl w-fit mb-6 ${item.color}`}>
                <item.icon size={24} />
              </div>
              <h4 className="text-xl font-black text-gray-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">{item.desc}</p>
              <div className="text-xs italic text-gray-400 mt-auto">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 4: Memory Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Activity} title="4. Live Memory Explorer" subtitle="See how different views interpret the same memory buffer." color="text-blue-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
             <div className="space-y-8">
                <p className="text-gray-500 font-medium">
                  Select a Typed Array view below to see how it "interprets" an 8-byte <code>ArrayBuffer</code>.
                </p>
                <div className="flex flex-wrap gap-3">
                  {(['Uint8', 'Int16', 'Float32'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                        activeTab === tab 
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {tab}View
                    </button>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-black text-gray-400 uppercase tracking-widest">
                    <Terminal size={14} /> View Logic
                  </div>
                  <div className="p-6 bg-gray-950 rounded-2xl border border-white/5 font-mono text-sm">
                    {activeTab === 'Uint8' && <span className="text-blue-400">new Uint8Array(buffer); <span className="text-gray-500">// 8 elements (1 byte each)</span></span>}
                    {activeTab === 'Int16' && <span className="text-purple-400">new Int16Array(buffer); <span className="text-gray-500">// 4 elements (2 bytes each)</span></span>}
                    {activeTab === 'Float32' && <span className="text-indigo-400">new Float32Array(buffer); <span className="text-gray-500">// 2 elements (4 bytes each)</span></span>}
                  </div>
                </div>
             </div>

             <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-[2.5rem] border border-gray-200 dark:border-gray-800">
                <h5 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-8 flex justify-between items-center">
                  Memory Interpretation
                  <span className="text-blue-500">{viewData.length} Elements</span>
                </h5>
                <div className="flex flex-wrap gap-4 justify-center">
                  {viewData.map((val, i) => (
                    <div 
                      key={i} 
                      className={`min-w-[80px] h-20 rounded-2xl flex flex-col items-center justify-center border-t-4 shadow-xl transition-all duration-500 ${
                        activeTab === 'Uint8' ? 'bg-blue-500/10 border-blue-500 text-blue-600' :
                        activeTab === 'Int16' ? 'bg-purple-500/10 border-purple-500 text-purple-600' :
                        'bg-indigo-500/10 border-indigo-500 text-indigo-600'
                      }`}
                    >
                      <span className="text-xs font-black opacity-30 mb-1">IDX {i}</span>
                      <span className="text-xl font-black font-mono tracking-tight">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex gap-2 overflow-hidden rounded-full h-2 bg-gray-200 dark:bg-gray-800">
                   {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className={`flex-1 ${
                        activeTab === 'Uint8' ? 'bg-blue-500' :
                        activeTab === 'Int16' ? (i % 2 === 0 ? 'bg-purple-500' : 'bg-purple-400') :
                        (i < 4 ? 'bg-indigo-500' : 'bg-indigo-400')
                      } opacity-80`} />
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Types Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <SectionHeader icon={Table} title="5. Common Typed Arrays" subtitle="Choose the right precision for your data." color="text-indigo-500" />
          
          <div className="overflow-x-auto mt-10">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-b border-gray-100 dark:border-gray-700">
                   <th className="py-5 px-6 text-sm font-black text-gray-400 uppercase tracking-widest">Type</th>
                   <th className="py-5 px-6 text-sm font-black text-gray-400 uppercase tracking-widest">Description</th>
                   <th className="py-5 px-6 text-sm font-black text-gray-400 uppercase tracking-widest">Size (Bytes)</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                 {[
                   { type: 'Int8Array', desc: '8-bit signed integer', size: '1', color: 'text-rose-500 bg-rose-500/5' },
                   { type: 'Uint8Array', desc: '8-bit unsigned integer', size: '1', color: 'text-blue-500 bg-blue-500/5' },
                   { type: 'Uint8ClampedArray', desc: '8-bit unsigned (clamped)', size: '1', color: 'text-blue-500 bg-blue-500/5' },
                   { type: 'Int16Array', desc: '16-bit signed integer', size: '2', color: 'text-purple-500 bg-purple-500/5' },
                   { type: 'Float32Array', desc: '32-bit floating point', size: '4', color: 'text-indigo-500 bg-indigo-500/5' },
                   { type: 'Float64Array', desc: '64-bit floating point', size: '8', color: 'text-indigo-500 bg-indigo-500/5' },
                 ].map((row, i) => (
                   <tr key={i} className="group hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                     <td className="py-6 px-6 font-mono text-gray-900 dark:text-white font-bold">{row.type}</td>
                     <td className="py-6 px-6 text-gray-500 text-sm font-medium">{row.desc}</td>
                     <td className="py-6 px-6">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter ${row.color}`}>
                          {row.size} Byte{parseInt(row.size) > 1 && 's'}
                        </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* ── Section 6: Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
        <div>
          <SectionHeader icon={Code2} title="6. Basic Implementation" subtitle="Creating and manipulating Typed Arrays." color="text-emerald-500" />
          <CodeBlock 
            title="Step-by-Step Creation"
            code={`// 1. Create a buffer of 8 bytes
let buffer = new ArrayBuffer(8);

// 2. Create a view (Int32 = 4 bytes each)
let view = new Int32Array(buffer);

// 3. Assign values
view[0] = 100;
view[1] = 200;

console.log(view); // [100, 200]`}
          />
          <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
             <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 shrink-0">
               <Info size={20} />
             </div>
             <p className="text-sm text-gray-500 font-medium">
               The <span className="font-bold text-gray-900 dark:text-white">buffer</span> is the memory, the <span className="font-bold text-gray-900 dark:text-white">view</span> is the interface.
             </p>
          </div>
        </div>

        <div>
          <SectionHeader icon={Zap} title="7. Direct Creation (Shortcut)" subtitle="Convenient ways to initialize data." color="text-amber-500" />
          <CodeBlock 
            title="Shorter Syntax"
            code={`// Initialization from normal array
let arr = new Uint8Array([10, 20, 30, 40]);

console.log(arr.length); // 4
console.log(arr[0]);     // 10

// Creating with fixed size directly
let zeros = new Float32Array(5); // [0, 0, 0, 0, 0]`}
          />
          <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/30 text-amber-700 dark:text-amber-400">
             <Terminal size={16} className="shrink-0" />
             <span className="font-mono text-xs">Uint8Array(4) [10, 20, 30, 40]</span>
          </div>
        </div>
      </section>

      {/* ── Section 7: DataView ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-gradient-to-br from-gray-900 to-black p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <Layout size={300} className="text-white" />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight">8. Using DataView (Advanced) 🎯</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">DataView provides the most flexible way to read and write bytes, regardless of the system's endianness.</p>
              <div className="space-y-6">
                {[
                  { label: "Precision", text: "Read/Write different types at exact byte offsets." },
                  { label: "Endianness", text: "Control Big-Endian or Little-Endian formats." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-lg">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-black text-white text-lg">{item.label}</h4>
                      <p className="text-gray-400 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <CodeBlock title="DataView Example" code={`let buffer = new ArrayBuffer(4);
let view = new DataView(buffer);

// Set Int8 at offset 0
view.setInt8(0, 10);

// Set Int8 at offset 1
view.setInt8(1, 20);

// Read values
console.log(view.getInt8(0)); // 10
console.log(view.getInt8(1)); // 20`} />
               <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-3xl">
                  <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest mb-2 block">Why DataView?</span>
                  <p className="text-gray-400 text-xs italic leading-relaxed">
                    Unlike TypedArray views, DataView allows you to mix and match types in the same buffer (e.g., an Int8 followed by a Float32).
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Methods ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Settings} title="9. Typed Array Methods" subtitle="Optimized manipulation tools." color="text-gray-500" />
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: '.set()', desc: 'Copy an array or typed array into another.', code: 'arr.set([5, 6], 1);', out: 'Copies data fast' },
             { title: '.fill()', desc: 'Fill the entire array with a static value.', code: 'arr.fill(9);', out: 'Sets all to 9' },
             { title: '.subarray()', desc: 'Create a new view without copying data.', code: 'arr.subarray(1, 3);', out: 'High performance' },
           ].map((m, i) => (
             <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all group">
                <h4 className="font-black text-gray-900 dark:text-white text-xl mb-3 group-hover:text-blue-500 transition-colors">{m.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium leading-relaxed">{m.desc}</p>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-gray-50 dark:bg-gray-950 rounded-xl text-indigo-500 border border-gray-100 dark:border-gray-800">{m.code}</div>
                  <div className="text-emerald-500 italic opacity-80 pl-2">➔ {m.out}</div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Section 9: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Image} title="10. Real-World Case: Pixel Data" subtitle="Where theory meets visual rendering." color="text-rose-500" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                In HTML5 Canvas, pixel data is stored in a <code className="text-rose-500 font-bold bg-rose-500/5 px-2 py-1 rounded">Uint8ClampedArray</code>. Each pixel consists of 4 bytes: Red, Green, Blue, and Alpha.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: "Canvas API", icon: Layout },
                   { label: "Image Filters", icon: RefreshCw },
                   { label: "Video FX", icon: Monitor },
                   { label: "Game Assets", icon: Database }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                      <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-900/30 text-rose-500"><item.icon size={18} /></div>
                      <span className="font-black text-gray-700 dark:text-gray-200 text-sm">{item.label}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-2xl space-y-6">
              <h4 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                <Terminal size={20} className="text-rose-500" /> Pixel Manipulation
              </h4>
              <CodeBlock 
                code={`// RGBA for a single Orange pixel
let pixel = new Uint8ClampedArray([255, 128, 0, 255]);

console.log(pixel); // [255, 128, 0, 255]`}
              />
              <div className="flex justify-center py-4">
                 <div className="w-24 h-24 rounded-[2rem] shadow-2xl shadow-orange-500/50 bg-[#FF8000]" />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 10: Best Practices ── */}
      <section className="max-w-4xl mx-auto mb-32 space-y-12">
        <SectionHeader icon={ShieldCheck} title="11. Personal Recommendations" subtitle="Insights from heavy production usage." color="text-indigo-500" />
        
        <div className="grid md:grid-cols-2 gap-6">
           <div className="p-8 bg-emerald-50 dark:bg-emerald-900/10 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/50 space-y-4">
              <h4 className="font-black text-emerald-900 dark:text-emerald-200 text-xl flex items-center gap-2 italic">
                <PlusCircle size={24} /> Use When...
              </h4>
              <ul className="space-y-3 text-emerald-700/80 dark:text-emerald-400 font-medium">
                <li>✔ Performance critial math</li>
                <li>✔ WebGL / 3D Graphics</li>
                <li>✔ Game Engine development</li>
                <li>✔ Processing large binary files</li>
              </ul>
           </div>

           <div className="p-8 bg-rose-50 dark:bg-rose-900/10 rounded-[2.5rem] border border-rose-100 dark:border-rose-900/50 space-y-4">
              <h4 className="font-black text-rose-900 dark:text-rose-200 text-xl flex items-center gap-2 italic">
                <MinusCircle size={24} /> Avoid When...
              </h4>
              <ul className="space-y-3 text-rose-700/80 dark:text-rose-400 font-medium">
                <li>✖ Simple data storage</li>
                <li>✖ Human-readable text collections</li>
                <li>✖ General purpose scripting</li>
              </ul>
           </div>
        </div>

        {/* ── Tips ── */}
        <div className="space-y-4">
           {[
             { title: "Memory Matters", text: "Always allocate exactly what you need. Over-allocating wastes system RAM.", icon: AlertTriangle, color: "text-amber-500 bg-amber-500/10" },
             { title: "Avoid Conversions", text: "Switching between normal and typed arrays is expensive. Stay in Typed mode as long as possible.", icon: RefreshCw, color: "text-blue-500 bg-blue-500/10" },
             { title: "Subarray vs Slice", text: "Use .subarray() instead of .slice(). It creates a new view without copying bytes.", icon: Zap, color: "text-emerald-500 bg-emerald-500/10" }
           ].map((tip, i) => (
             <div key={i} className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm items-start">
                <div className={`p-2.5 rounded-xl shrink-0 ${tip.color}`}>
                   <tip.icon size={20} />
                </div>
                <div>
                  <h5 className="font-black text-gray-900 dark:text-white text-lg">{tip.title}</h5>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">{tip.text}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Optimize with Precision.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
           Typed Arrays are the gateway to high-performance JavaScript applications.<br />
           Master them, and unleash the full power of the modern web platform.
         </p>
      </footer>

    </div>
  );
};

export default JsTypedArrays;