import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  PieChart, 
  LineChart, 
  Map as MapIcon, 
  LayoutDashboard, 
  Zap, 
  Layers, 
  Monitor, 
  Database, 
  Terminal, 
  Workflow, 
  Search, 
  ArrowRight, 
  Info, 
  CheckCircle, 
  Code2, 
  PlusCircle, 
  Globe, 
  Cpu, 
  Activity, 
  Share2, 
  Eye, 
  Copy, 
  Check,
  MousePointer2,
  Scale
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

// ─── Main Component ───────────────────────────────────────────────────────────

const JsD3Js: React.FC = () => {
  const [chartData, setChartData] = useState([10, 20, 30, 40]);
  const [newValue, setNewValue] = useState('');

  const addData = () => {
    if (newValue && !isNaN(Number(newValue))) {
      setChartData([...chartData, Number(newValue)]);
      setNewValue('');
    }
  };

  const removeData = (index: number) => {
    setChartData(chartData.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 text-[10px] font-black mb-8 border border-orange-100 dark:border-orange-900/50 shadow-xl shadow-orange-500/5 animate-pulse tracking-[0.2em]">
          <BarChart3 size={14} className="fill-current" /> DATA VISUALIZATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 drop-shadow-2xl">
            D3.js
          </span><br />
          Library
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          D3.js (Data-Driven Documents) is used to create <span className="text-gray-900 dark:text-white font-bold underline decoration-orange-500 underline-offset-4 tracking-tight">dynamic, data-driven visualizations</span> in the browser.
        </p>
      </header>

      {/* ── Section 1: Introduction ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What & 2. Why?" subtitle="Binds data directly to the DOM." color="text-orange-500" />
            <div className="space-y-6">
               <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-orange-500/20">
                     <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Simple Definition:</h3>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                    D3.js helps you bring data to life using HTML, SVG, and CSS. It focuses on the mapping between data and visual elements.
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'DATA BINDING', text: 'Data to DOM 🔗', icon: Database },
                    { label: 'CONTROL', text: 'Full Visual Control 🎨', icon: MousePointer2 },
                    { label: 'REAL-TIME', text: 'Live Updates ⚡', icon: Activity },
                    { label: 'CUSTOM', text: 'Infinite Options 📈', icon: LayoutDashboard }
                  ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-1 transition-transform">
                       <item.icon className="text-orange-500 mb-3" size={20} />
                       <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">{item.label}</span>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
               <Monitor size={150} className="text-orange-500" />
            </div>
            <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3 italic">
               <Layers className="text-orange-500" size={24} /> 3. What You Can Build
            </h3>
            <div className="grid grid-cols-2 gap-6 relative z-10">
               {[
                 { label: 'Bar Charts', icon: BarChart3, desc: 'Dynamic Bars 📊' },
                 { label: 'Line Charts', icon: LineChart, desc: 'Trend Lines 📈' },
                 { label: 'Pie Charts', icon: PieChart, desc: 'Data Slices 🥧' },
                 { label: 'Maps', icon: MapIcon, desc: 'Geo Visuals 🌍' }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-3 text-center group/item hover:bg-white/10 transition-colors">
                    <item.icon className="text-orange-400 group-hover/item:scale-110 transition-transform" size={32} />
                    <div>
                       <p className="text-white font-black text-sm">{item.label}</p>
                       <p className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 text-center">
               <p className="text-gray-400 font-medium italic">And highly interactive dashboards!</p>
            </div>
         </div>
      </section>

      {/* ── Section 2: D3 Simulation Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Cpu} title="D3 Simulation Lab" subtitle="Simulating: Bind data → Create elements → Update DOM." color="text-orange-500" />
         
         <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Workflow size={120} className="text-orange-500" />
               </div>
               <h3 className="text-xl font-black text-white mb-10 flex items-center gap-3 italic">
                  <BarChart3 className="text-orange-500 animate-bounce" size={24} /> Live Visualization
               </h3>
               
               <div className="flex flex-col gap-4 mb-10 min-h-[250px] justify-end">
                  {chartData.map((val, i) => (
                    <div key={i} className="flex items-center gap-4 animate-in fade-in slide-in-from-left duration-500">
                       <div className="w-8 text-right font-mono text-xs text-orange-400 font-bold">{val}</div>
                       <div 
                         className="h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg shadow-lg shadow-orange-500/20 flex items-center justify-end px-3 text-[10px] font-black text-white transition-all duration-1000"
                         style={{ width: `${Math.min(val * 8, 300)}px` }}
                       >
                          {val}
                       </div>
                       <button 
                         onClick={() => removeData(i)}
                         className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-all"
                       >
                          ×
                       </button>
                    </div>
                  ))}
               </div>

               <div className="flex gap-4">
                  <input 
                    type="number" 
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder="Value (e.g. 25)"
                    className="flex-1 bg-white/5 border border-white/10 p-4 rounded-2xl outline-none text-white font-mono focus:ring-2 ring-orange-500/20"
                  />
                  <button 
                    onClick={addData}
                    className="px-8 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl transition-all active:scale-95"
                  >
                    ADD ➕
                  </button>
               </div>
            </div>

            <div className="space-y-6">
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group">
                  <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-4 italic underline decoration-orange-500/20 underline-offset-4">4. Core Concept: How it Works</h4>
                  <div className="p-6 bg-orange-500/5 rounded-3xl border border-orange-500/10 mb-6">
                     <p className="text-sm font-bold text-gray-900 dark:text-white mb-2">🔄 The Flow:</p>
                     <p className="text-orange-600 dark:text-orange-400 font-black tracking-widest uppercase text-[10px]">
                        Data → Bind → Enter → Update → Exit
                     </p>
                  </div>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed italic border-l-2 border-orange-500/30 pl-4">
                     D3 selections return an object that identifies which DOM elements exist, which need to be created, and which should be removed based on the dataset.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 3: Setup & Example ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
         <div className="space-y-8">
            <SectionHeader icon={Terminal} title="5. Setup & 6. First Example" subtitle="Getting started with CDN." color="text-orange-500" />
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group">
               <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-6 italic underline decoration-orange-500/20 underline-offset-4">Setup (CDN)</h4>
               <CodeBlock language="html" code={`<script src="https://d3js.org/d3.v7.min.js"></script>`} />
            </div>
            <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group">
               <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-6 italic underline decoration-orange-500/30 underline-offset-4">7. Output Visualization</h4>
               <p className="text-gray-400 font-medium italic border-l-2 border-orange-500/30 pl-6 mb-0">
                 Running the example code will produce horizontal blue bars whose widths grow dynamically based on the numbers in the <code className="text-orange-400">data</code> array.
               </p>
            </div>
         </div>

         <div className="bg-[#0b1120] p-10 rounded-[3.5rem] shadow-3xl border border-white/5 relative">
            <h4 className="text-xs font-black text-orange-500 uppercase mb-8 tracking-widest italic flex items-center gap-2">
               <Code2 size={24} /> Simple Bar Chart Example
            </h4>
            <CodeBlock title="index.html" language="html" code={`<!DOCTYPE html>\n<html>\n<head>\n    <script src="https://d3js.org/d3.v7.min.js"></script>\n</head>\n<body>\n\n<script>\n    let data = [10, 20, 30, 40];\n\n    d3.select("body")\n      .selectAll("div")\n      .data(data)\n      .enter()\n      .append("div")\n      .style("background", "blue")\n      .style("margin", "5px")\n      .style("height", "20px")\n      .style("width", d => d * 10 + "px")\n      .text(d => d);\n</script>\n\n</body>\n</html>`} />
         </div>
      </section>

      {/* ── Section 4: Breakdown ── */}
      <section className="max-w-6xl mx-auto mb-32 bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 transition-transform duration-1000 group-hover:scale-110">
            <Search size={200} className="text-orange-500" />
         </div>
         <SectionHeader icon={Info} title="8. Understanding the Code" subtitle="A step-by-step breakdown of D3 syntax." color="text-orange-500" />
         <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              { code: 'd3.select("body")', desc: 'Selects the <body> element as the starting point.' },
              { code: '.selectAll("div")', desc: 'Tells D3 that there will be divs for each data point.' },
              { code: '.data(data)', desc: 'Binds our array [10, 20, 30, 40] to our selection.' },
              { code: '.enter()', desc: 'Identifies data points that do not yet have corresponding DOM elements.' },
              { code: '.append("div")', desc: 'Creates new <div> elements for all "entering" data.' },
              { code: '.style("width", d => ...)', desc: 'Uses a callback to dynamically set style based on the value.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 border-b border-gray-100 dark:border-gray-700/50">
                 <div className="w-1.5 h-auto bg-orange-500 rounded-full shrink-0"></div>
                 <div>
                    <code className="text-[10px] font-black font-mono text-orange-600 dark:text-orange-400 block mb-1">{item.code}</code>
                    <p className="text-xs text-gray-500 font-medium italic">{item.desc}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* ── Section 5: Concepts Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Scale} title="11. Important Concepts" subtitle="Must-learn vocabulary for D3 power users." color="text-blue-500" />
         <div className="bg-[#0b1120] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-blue-600 text-white">
                     <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em]">Concept</th>
                     <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em]">Description</th>
                  </tr>
               </thead>
               <tbody className="text-sm font-medium">
                  {[
                    { c: 'Selection', d: 'Grabbing DOM elements with d3.select() or d3.selectAll()' },
                    { c: 'Data Binding', d: 'Connecting data arrays to visual items' },
                    { c: 'Enter/Exit', d: 'Handling new data (entering) and removed data (exiting)' },
                    { c: 'Scales', d: 'Mathematical maps that turn data values into pixel values' },
                    { c: 'Axes', d: 'Visual rulers that label your data regions' },
                    { c: 'Transitions', d: 'Smoothly animating changes to properties over time' }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-blue-500/5 transition-colors">
                       <td className="p-8 text-blue-400 font-black italic">{row.c}</td>
                       <td className="p-8 text-gray-400 font-medium italic">{row.d}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>

      {/* ── Section 6: Real World ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform duration-1000 group-hover:rotate-0">
                    <Share2 size={150} className="text-emerald-500" />
                </div>
                <SectionHeader icon={PlusCircle} title="9. SVG-Based Chart" subtitle="The Real D3 Power." color="text-emerald-500" />
                <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium leading-relaxed italic border-l-4 border-emerald-500/20 pl-6 relative z-10">
                   While divs are great for simple bars, D3 truly shines when manipulating <span className="text-emerald-500 font-bold uppercase tracking-widest">SVG (Scalable Vector Graphics)</span>. This allows for complex paths, circles, and polygons.
                </p>
                <div className="flex justify-center p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 relative z-10">
                   <PlusCircle size={64} className="text-emerald-500 animate-pulse" />
                </div>
            </div>

            <div className="bg-[#0b1120] p-12 rounded-[4rem] border border-white/5 shadow-2xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
                    <Globe size={150} className="text-orange-500" />
                </div>
                <SectionHeader icon={Globe} title="10. Real-World Use Cases" subtitle="Where D3 lives in the industry." color="text-orange-500" />
                <div className="space-y-4 relative z-10">
                   {[
                     { t: 'Sales Analytics', i: BarChart3 },
                     { t: 'User Activity', i: Monitor },
                     { t: 'Stock Market', i: Activity },
                     { t: 'Machine Learning', i: Cpu }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl group/row hover:bg-orange-500/10 transition-colors">
                        <item.i size={20} className="text-orange-500" />
                        <span className="text-gray-300 font-black italic">{item.t}</span>
                     </div>
                   ))}
                </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Art in Data.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto italic underline decoration-orange-500/10 decoration-2">
           "The greatest value of a picture is when it forces us to notice what we never expected to see."
         </p>
      </footer>

    </div>
  );
};

const RotateCw = ({ size, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
  </svg>
);

export default JsD3Js;