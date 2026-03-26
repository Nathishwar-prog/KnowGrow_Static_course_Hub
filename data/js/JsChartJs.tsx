import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Terminal, 
  Code2, 
  Copy, 
  Check, 
  Eye, 
  Layers, 
  Database, 
  Globe, 
  Layout, 
  Package, 
  Activity, 
  ArrowRight,
  Info,
  Cpu,
  RefreshCw,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Search,
  BookOpen,
  Scale,
  Bug,
  Construction,
  Fingerprint,
  Monitor,
  Trophy,
  Workflow,
  Lock,
  GitCompare,
  ArrowUpDown,
  Infinity,
  Divide,
  Calculator,
  Binary,
  Bitcoin,
  Coins,
  ShieldQuestion,
  AlertCircle,
  Hash,
  FastForward,
  Shuffle,
  Flag,
  Key,
  Unlock,
  Shield,
  Dna,
  Play,
  StopCircle,
  PlayCircle,
  ArrowRightCircle,
  Trash2,
  Columns,
  SkipForward,
  LogOut,
  Repeat,
  History,
  Link,
  ChevronRight,
  BrainCircuit,
  Network,
  Palette,
  Square,
  Circle,
  Type,
  Move,
  Gamepad2,
  Brush,
  BarChart3,
  LineChart,
  PieChart as PieChartIcon,
  TrendingUp,
  Settings2
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-fuchsia-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

// ─── Chart Simulators ─────────────────────────────────────────────────────────

const BarChartSim = ({ data, colors }: { data: number[]; colors: string[] }) => (
  <div className="flex items-end justify-between h-48 w-full gap-2 px-4">
    {data.map((val, i) => (
      <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: `${val * 2}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="w-full rounded-t-xl shadow-lg relative"
          style={{ backgroundColor: colors[i % colors.length] }}
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            {val}
          </div>
        </motion.div>
        <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">
          {['Jan', 'Feb', 'Mar', 'Apr'][i]}
        </span>
      </div>
    ))}
  </div>
);

const PieChartSim = ({ data, colors, doughnut = false }: { data: number[]; colors: string[]; doughnut?: boolean }) => {
  const total = data.reduce((a, b) => a + b, 0);
  let accumulatedAngle = 0;

  return (
    <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {data.map((val, i) => {
          const percentage = (val / total) * 100;
          const angle = (percentage / 100) * 360;
          const x1 = 50 + 50 * Math.cos((accumulatedAngle * Math.PI) / 180);
          const y1 = 50 + 50 * Math.sin((accumulatedAngle * Math.PI) / 180);
          accumulatedAngle += angle;
          const x2 = 50 + 50 * Math.cos((accumulatedAngle * Math.PI) / 180);
          const y2 = 50 + 50 * Math.sin((accumulatedAngle * Math.PI) / 180);
          const largeArcFlag = angle > 180 ? 1 : 0;

          return (
            <motion.path
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              d={`M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
              fill={colors[i % colors.length]}
              className="hover:translate-x-1 hover:-translate-y-1 transition-transform cursor-pointer"
            />
          );
        })}
        {doughnut && (
          <circle cx="50" cy="50" r="30" fill="white" className="dark:fill-gray-900" />
        )}
      </svg>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const JsChartJs: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'bar' | 'line' | 'pie' | 'doughnut'>('bar');
  const [datasetMode, setDatasetMode] = useState<'2024' | '2025'>('2024');

  const chartData = {
    bar: datasetMode === '2024' ? [10, 20, 15, 25] : [15, 25, 20, 35],
    line: [30, 50, 40],
    pie: [10, 20, 30],
    doughnut: [60, 25, 15]
  };

  const chartColors = ['#f43f5e', '#6366f1', '#10b981', '#f59e0b'];

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-fuchsia-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] font-black mb-8 border border-fuchsia-100 dark:border-fuchsia-900/50 shadow-xl shadow-fuchsia-500/5 animate-pulse tracking-[0.2em]">
          <BarChart3 size={14} className="fill-current" /> DATA STORYTELLING
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Chart.js<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-emerald-500 drop-shadow-2xl">
            Insights
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The ultimate charting library. Transform raw data into <span className="text-gray-900 dark:text-white font-bold underline decoration-fuchsia-500 underline-offset-4 tracking-tight uppercase italic">Interactive Dashboards</span> with just a few lines of code.
        </p>
      </header>

      {/* ── Section 1-2: What & Why ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Info} title="1. What & 2. Why?" subtitle="Visual intelligence at scale." color="text-fuchsia-500" />
            <div className="space-y-6">
               <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
                 👉 <span className="text-fuchsia-500 font-black px-2 py-0.5 bg-fuchsia-500/5 rounded-lg border border-fuchsia-500/10">Chart.js</span> is a library that creates beautiful, responsive charts using HTML5 &lt;canvas&gt;.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Responsive', text: 'Works on all screens 📱', icon: Monitor },
                    { label: 'Easy API', text: 'Simple JSON config ✅', icon: Code2 },
                    { label: 'Performant', text: 'Canvas accelerated ⚡', icon: Activity },
                    { label: 'Aesthetic', text: 'Stunning defaults 🎨', icon: Palette }
                  ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-1 transition-transform">
                       <item.icon className="text-fuchsia-500 mb-3" size={20} />
                       <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">{item.label}</span>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
               <TrendingUp size={120} className="text-indigo-500" />
            </div>
            <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-8 italic">The Dashboard Engine 📊</h4>
            <div className="space-y-4">
               <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
               </div>
               <p className="text-sm text-gray-400 font-mono leading-relaxed">
                  Chart.js handles the complex math of <span className="text-white italic font-bold uppercase">scaling, axises, and animations</span> automatically, so you can focus on the data.
               </p>
            </div>
         </div>
      </section>

      {/* ── Section 3: Types of Charts ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Layers} title="3. Chart Gallery" subtitle="A tool for every data narrative." color="text-indigo-500" />
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {['Bar 📊', 'Line 📈', 'Pie 🥧', 'Doughnut 🍩', 'Radar 🕸️', 'Polar ❄️', 'Scatter ◽', 'Bubble 🫧'].map((type, i) => (
               <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg text-center hover:bg-fuchsia-500 hover:text-white transition-all cursor-default">
                  <span className="text-[8px] font-black uppercase tracking-tighter italic">{type}</span>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 4-8: Setup & Labs ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 space-y-8">
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl">
                  <SectionHeader icon={Settings2} title="4. Setup" subtitle="Installation & Integration." color="text-fuchsia-500" />
                  <div className="space-y-6">
                     <div className="p-5 bg-slate-900 rounded-2xl">
                        <span className="text-[8px] font-black text-gray-500 uppercase block mb-2">Step 1: Include CDN</span>
                        <code className="text-[10px] text-fuchsia-400 break-all leading-loose">
                           &lt;script src="https://cdn.jsdelivr.net/npm/chart.js"&gt;&lt;/script&gt;
                        </code>
                     </div>
                     <div className="p-5 bg-slate-900 rounded-2xl">
                        <span className="text-[8px] font-black text-gray-500 uppercase block mb-2">Step 2: Create Canvas</span>
                        <code className="text-[10px] text-indigo-400">
                           &lt;canvas id="myChart"&gt;&lt;/canvas&gt;
                        </code>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl flex flex-col space-y-8 relative overflow-hidden group">
               <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white italic flex items-center gap-3">
                     <Monitor className="text-fuchsia-500" /> 5-8. Interactive Lab
                  </h3>
                  <div className="flex gap-2">
                     {['bar', 'pie', 'doughnut'].map((t) => (
                        <button 
                          key={t}
                          onClick={() => setActiveChart(t as any)}
                          className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeChart === t ? 'bg-fuchsia-500 text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}
                        >
                           {t}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="flex-1 min-h-[300px] flex items-center justify-center bg-gray-50 dark:bg-slate-900/50 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-inner p-8">
                  {activeChart === 'bar' && <BarChartSim data={chartData.bar} colors={chartColors} />}
                  {(activeChart === 'pie' || activeChart === 'doughnut') && (
                    <PieChartSim 
                      data={chartData.pie} 
                      colors={chartColors} 
                      doughnut={activeChart === 'doughnut'} 
                    />
                  )}
               </div>

               <div className="p-6 bg-slate-900 rounded-2xl border border-white/5 font-mono text-xs text-gray-400 italic">
                  <span className="text-[8px] font-black text-gray-500 uppercase block mb-2 underline decoration-fuchsia-500/30">Auto-Generated Script</span>
                  {activeChart === 'bar' && 'new Chart(ctx, { type: "bar", data: { labels: ["Jan", "Feb"...], datasets: [...] } });'}
                  {activeChart === 'pie' && 'new Chart(ctx, { type: "pie", data: { labels: ["A", "B", "C"], datasets: [...] } });'}
                  {activeChart === 'doughnut' && 'new Chart(ctx, { type: "doughnut", data: { ... } });'}
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9: Multiple Datasets ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-slate-900 p-16 rounded-[5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <SectionHeader icon={GitCompare} title="9. Multi-Dataset Comparison" subtitle="Comparing trends over time." color="text-emerald-400" />
                  <p className="text-gray-400 font-medium italic leading-loose">
                     "Group multiple data arrays into a single chart to visualize growth, comparison, and variance across categories."
                  </p>
                  <div className="flex gap-4">
                     <button 
                       onClick={() => setDatasetMode('2024')}
                       className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${datasetMode === '2024' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-500'}`}
                     >
                       Fiscal 2024
                     </button>
                     <button 
                       onClick={() => setDatasetMode('2025')}
                       className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${datasetMode === '2025' ? 'bg-emerald-600 text-white' : 'bg-white/5 text-gray-500'}`}
                     >
                       Fiscal 2025
                     </button>
                  </div>
               </div>
               <div className="p-10 bg-white/5 rounded-[3rem] border border-white/5">
                  <BarChartSim data={chartData.bar} colors={datasetMode === '2024' ? ['#6366f1'] : ['#10b981']} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 10: Customization ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
         <div className="space-y-8">
            <SectionHeader icon={Palette} title="10. Customization 🎨" subtitle="Branding your data visuals." color="text-fuchsia-500" />
            <div className="grid grid-cols-2 gap-4">
               {[
                 { t: 'Title', d: 'Display custom headers.', icon: Type },
                 { t: 'Legend', d: 'Toggle labels & keys.', icon: Layout },
                 { t: 'Tooltips', d: 'Interactive hover info.', icon: Eye },
                 { t: 'Colors', d: 'Custom palettes & CSS.', icon: Palette }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col">
                    <item.icon className="text-fuchsia-500 mb-3" size={20} />
                    <h5 className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest mb-1 italic">{item.t}</h5>
                    <p className="text-[10px] text-gray-500 font-medium italic underline decoration-fuchsia-500/20 underline-offset-4">{item.d}</p>
                 </div>
               ))}
            </div>
         </div>
         <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-3xl blur opacity-15"></div>
            <CodeBlock title="options_config.js" code={`options: {\n    plugins: {\n        title: { display: true, text: "Report" },\n        legend: { position: "top" }\n    }\n}`} />
         </div>
      </section>

      {/* ── Section 11: Real-World Dashboard ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Globe} title="11. Business Dashboard 🌍" subtitle="Where data drives decisions." color="text-teal-500" />
         <div className="grid md:grid-cols-3 gap-6">
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col justify-between group overflow-hidden relative">
               <div className="absolute -right-4 -top-4 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                  <Activity size={80} className="text-fuchsia-500" />
               </div>
               <div>
                  <h5 className="font-black text-[10px] text-gray-400 uppercase tracking-widest mb-1 italic">Active Revenue</h5>
                  <p className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">$1,200k</p>
               </div>
               <div className="mt-8 border-t border-gray-100 dark:border-gray-700 pt-6">
                  <div className="flex justify-between text-[8px] font-black text-gray-400 uppercase tracking-widest italic mb-2">
                     <span>Growth</span>
                     <span className="text-emerald-500">+24%</span>
                  </div>
                  <div className="h-1 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                     <div className="h-full w-3/4 bg-emerald-500 rounded-full"></div>
                  </div>
               </div>
            </div>

            <div className="p-10 bg-slate-900 rounded-[3rem] border border-white/5 shadow-2xl flex flex-col justify-between group overflow-hidden relative">
               <div className="absolute -right-4 -top-4 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                  <Globe size={80} className="text-indigo-500" />
               </div>
               <div>
                  <h5 className="font-black text-[10px] text-gray-500 uppercase tracking-widest mb-1 italic">Global Traffic</h5>
                  <p className="text-4xl font-black text-white tracking-tighter">1.9M</p>
               </div>
               <div className="mt-8">
                  <div className="flex gap-1 h-8 items-end">
                     {[3, 6, 2, 8, 4, 9, 3, 7].map((h, i) => (
                        <div key={i} className="flex-1 bg-indigo-500 rounded-t-sm" style={{ height: `${h * 10}%` }}></div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col justify-between group overflow-hidden relative">
                <div className="absolute -right-4 -top-4 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                  <RefreshCw size={80} className="text-emerald-500" />
               </div>
               <div>
                  <h5 className="font-black text-[10px] text-gray-400 uppercase tracking-widest mb-1 italic">Retention</h5>
                  <p className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">84%</p>
               </div>
               <div className="mt-8 flex justify-center">
                  <PieChartSim data={[84, 16]} colors={['#10b981', '#f1f5f9']} doughnut />
               </div>
            </div>
         </div>
         
         <div className="mt-12 text-center">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] inline-flex items-center gap-3 italic">
               <ShieldCheck className="text-emerald-500" size={14} /> Analytics are the heartbeat of modern business architecture.
            </p>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mx-auto mb-10"></div>
         <p className="text-4xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.4em]">
           Chart Ready.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto italic border-y border-fuchsia-100/10 py-4">
           "Numbers speak, but charts tell the story. Chart.js is the translator."
         </p>
      </footer>

    </div>
  );
};

export default JsChartJs;