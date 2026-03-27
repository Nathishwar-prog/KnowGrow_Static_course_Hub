import React, { useState } from 'react';
import {
  Zap,
  Check,
  Copy,
  Info,
  Layers,
  Terminal,
  ArrowRight,
  Code2,
  Box,
  Layout,
  Database,
  Globe,
  Activity,
  AlertTriangle,
  CheckCircle,
  Package,
  RefreshCw,
  Eye,
  Target,
  CloudLightning,
  ShieldCheck,
  List,
  BarChart2,
  PieChart,
  LineChart,
  TrendingUp,
  Settings,
  RefreshCcw,
  MonitorPlay
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

// ─── Main Component ───────────────────────────────────────────────────────────

const JsGoogleChart: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-8 border border-blue-100 dark:border-blue-900/50 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <BarChart2 size={14} className="fill-current" /> DATA VISUALIZATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Google <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-cyan-500 drop-shadow-2xl">
            Charts
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Create powerful, <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4 tracking-tight">interactive</span>, and animated charts using a simple yet robust JavaScript library directly in your browser.
        </p>
      </header>

      {/* ── Section 1 & 2: What is it & Why use it ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-500 w-max border border-blue-100 dark:border-blue-500/20 shadow-lg">
                 <Info size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is Google Charts?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                   Google Charts is a powerful JavaScript library used to create interactive, responsive, and animated charts using data.
                 </p>
                 <div className="mt-6 inline-flex items-center gap-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <span className="text-blue-500"><Zap size={20}/></span>
                    <span className="text-sm font-bold text-gray-900 dark:text-blue-300">👉 Developed by Google & works directly in the browser.</span>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-8">
           <SectionHeader icon={Target} title="2. Why Use Google Charts?" subtitle="Key advantages of using this library." color="text-sky-500" />
           <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative">
              <h4 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                 <CheckCircle className="text-sky-400" size={24} /> Advantages:
              </h4>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                    <Check size={16} className="text-green-400" />
                    <span className="text-sm font-bold text-gray-300">Easy to use</span>
                 </div>
                 <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                    <Check size={16} className="text-green-400" />
                    <span className="text-sm font-bold text-gray-300">Interactive (hover/tooltips)</span>
                 </div>
                 <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                    <Check size={16} className="text-green-400" />
                    <span className="text-sm font-bold text-gray-300">Many chart types</span>
                 </div>
                 <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                    <Check size={16} className="text-green-400" />
                    <span className="text-sm font-bold text-gray-300">Works with live data</span>
                 </div>
                 <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 col-span-2">
                    <Check size={16} className="text-green-400" />
                    <span className="text-sm font-bold text-gray-300">No heavy setup required</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Simple Flow ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-gradient-to-r from-blue-900/20 to-sky-900/20 border border-blue-500/20 p-12 rounded-[4rem] text-center shadow-xl relative overflow-hidden">
            <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-black text-[10px] uppercase tracking-widest mb-6 relative z-10 inline-block">⚡ 3. How It Works (Simple Flow)</span>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 relative z-10 font-mono text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200">
               <div className="px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-2">
                  <Database size={20} className="text-blue-500"/> Load Library
               </div>
               <ArrowRight size={24} className="text-gray-400 hidden md:block" />
               <div className="px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-2">
                  <Box size={20} className="text-sky-500"/> Prepare Data
               </div>
               <ArrowRight size={24} className="text-gray-400 hidden md:block" />
               <div className="px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-2">
                  <PieChart size={20} className="text-cyan-500"/> Choose Chart
               </div>
               <ArrowRight size={24} className="text-gray-400 hidden md:block" />
               <div className="px-6 py-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-500/30 flex items-center gap-2">
                  <BarChart2 size={20}/> Draw Chart
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: Basic Setup & Output ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layers} title="4. Basic Setup (Step-by-Step)" subtitle="How to load and draw your first chart." color="text-cyan-500" />
        
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 space-y-6">
              <div>
                 <h4 className="font-black text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                    <span className="text-cyan-500">✅</span> Step 1: Load Google Charts
                 </h4>
                 <CodeBlock language="html" code={`<script src="https://www.gstatic.com/charts/loader.js"></script>`} />
              </div>
              
              <div>
                 <h4 className="font-black text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                    <span className="text-cyan-500">✅</span> Step 2: Load Chart Package
                 </h4>
                 <CodeBlock code={`google.charts.load('current', { packages: ['corechart'] });\ngoogle.charts.setOnLoadCallback(drawChart);`} />
              </div>

              <div>
                 <h4 className="font-black text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                    <span className="text-cyan-500">✅</span> Step 4: HTML Container
                 </h4>
                 <CodeBlock language="html" code={`<div id="chart_div" style="width: 100%; height: 400px;"></div>`} />
              </div>
           </div>

           <div className="bg-[#0b1120] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 flex flex-col justify-between">
              <div>
                 <h4 className="font-black text-white flex items-center gap-2 mb-3">
                    <span className="text-cyan-500">✅</span> Step 3: Create Chart Function
                 </h4>
                 <CodeBlock code={`function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales'],
        ['2020', 100],
        ['2021', 200],
        ['2022', 300],
        ['2023', 400]
    ]);

    var options = {
        title: 'Company Sales'
    };

    var chart = new google.visualization.LineChart(
        document.getElementById('chart_div')
    );

    chart.draw(data, options);
}`} />
              </div>

              <div className="mt-8 bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20">
                 <h4 className="text-lg font-black text-blue-400 mb-4 flex items-center gap-2">🎯 5. Output Visualization</h4>
                 <p className="text-sm font-bold text-gray-300 mb-3">👉 This will generate:</p>
                 <ul className="text-sm font-medium text-gray-400 space-y-2">
                    <li className="flex items-center gap-2"><Check size={16} className="text-blue-500"/> A line chart</li>
                    <li className="flex items-center gap-2"><Check size={16} className="text-blue-500"/> With interactive tooltips</li>
                    <li className="flex items-center gap-2"><Check size={16} className="text-blue-500"/> Responsive behavior</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Types of Charts ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={PieChart} title="6. Different Types of Charts" subtitle="Just change the object creation!" color="text-fuchsia-500" />
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 mx-auto bg-fuchsia-500/10 rounded-2xl flex items-center justify-center mb-4 text-fuchsia-500">
                  <PieChart size={32} />
               </div>
               <h4 className="font-black text-gray-900 dark:text-white mb-2">🥧 1. Pie Chart</h4>
               <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-xs font-mono text-gray-600 dark:text-gray-400 mt-4 border border-gray-200 dark:border-gray-700 text-left">
                  new google.visualization.PieChart(...)
               </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 text-blue-500">
                  <BarChart2 size={32} />
               </div>
               <h4 className="font-black text-gray-900 dark:text-white mb-2">📊 2. Bar Chart</h4>
               <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-xs font-mono text-gray-600 dark:text-gray-400 mt-4 border border-gray-200 dark:border-gray-700 text-left">
                  new google.visualization.BarChart(...)
               </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 mx-auto bg-sky-500/10 rounded-2xl flex items-center justify-center mb-4 text-sky-500">
                  <LineChart size={32} />
               </div>
               <h4 className="font-black text-gray-900 dark:text-white mb-2">📈 3. Line Chart</h4>
               <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-xs font-mono text-gray-600 dark:text-gray-400 mt-4 border border-gray-200 dark:border-gray-700 text-left">
                  new google.visualization.LineChart(...)
               </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl text-center group hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 text-emerald-500">
                  <Database size={32} />
               </div>
               <h4 className="font-black text-gray-900 dark:text-white mb-2">📉 4. Column Chart</h4>
               <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-xs font-mono text-gray-600 dark:text-gray-400 mt-4 border border-gray-200 dark:border-gray-700 text-left">
                  new google.visualization.ColumnChart(...)
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 7 & 8: Data Formats & Customization ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
               <SectionHeader icon={List} title="7. Data Formats" subtitle="Two ways to pass data." color="text-blue-500" />
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
                  <h4 className="font-black text-gray-900 dark:text-white mb-4">✅ Array Format <span className="text-xs ml-2 bg-green-500/10 text-green-600 px-2 py-1 rounded">(Easy)</span></h4>
                  <CodeBlock code={`var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours'],
    ['Work', 8],
    ['Sleep', 6],
    ['Study', 4]
]);`} />
                  
                  <div className="my-8 h-px bg-gray-200 dark:bg-gray-700"></div>

                  <h4 className="font-black text-gray-900 dark:text-white mb-4">✅ Object Format <span className="text-xs ml-2 bg-orange-500/10 text-orange-600 px-2 py-1 rounded">(Advanced)</span></h4>
                  <CodeBlock code={`var data = new google.visualization.DataTable();
data.addColumn('string', 'Task');
data.addColumn('number', 'Hours');
data.addRows([
    ['Work', 8],
    ['Sleep', 6]
]);`} />
               </div>
            </div>

            <div className="space-y-8">
               <SectionHeader icon={Settings} title="8. Customization" subtitle="Make it your own." color="text-rose-500" />
               <div className="bg-black p-8 rounded-[2.5rem] shadow-2xl border border-white/10">
                  <CodeBlock code={`var options = {
    title: 'My Chart',
    colors: ['#ff5733'],
    backgroundColor: '#f4f4f4',
    legend: { position: 'bottom' }
};`} />
                  <div className="mt-8 grid grid-cols-2 gap-4">
                     <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-center">
                        <span className="w-6 h-6 rounded-full inline-block mr-2" style={{backgroundColor: '#ff5733'}}></span> Colors
                     </div>
                     <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-center">
                        <MonitorPlay size={18} className="mr-2 text-rose-400"/> Layout
                     </div>
                  </div>
               </div>

               <SectionHeader icon={RefreshCcw} title="9. Dynamic Data" subtitle="Update charts in real-time." color="text-emerald-500" />
               <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
                  <CodeBlock code={`setInterval(() => {
    data.addRow(['New', Math.random() * 100]);
    chart.draw(data, options);
}, 2000);`} />
                  <p className="mt-4 p-4 bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 text-center">
                     👉 Updates chart automatically every 2 seconds
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 10: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="10. Real-World Use Cases" subtitle="Where this library shines." color="text-indigo-500" />
        
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform text-center">
             <div className="w-16 h-16 mx-auto bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Layout size={32} className="text-indigo-500" />
             </div>
             <h4 className="text-xl font-black text-gray-900 dark:text-white mb-6">📊 Dashboards</h4>
             <ul className="space-y-3 font-medium text-gray-600 dark:text-gray-400">
                <li className="flex items-center justify-center gap-2"><Check size={16} className="text-indigo-500"/> Sales analytics</li>
                <li className="flex items-center justify-center gap-2"><Check size={16} className="text-indigo-500"/> Admin panels</li>
             </ul>
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform text-center">
             <div className="w-16 h-16 mx-auto bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Activity size={32} className="text-sky-500" />
             </div>
             <h4 className="text-xl font-black text-gray-900 dark:text-white mb-6">📈 Live Data</h4>
             <ul className="space-y-3 font-medium text-gray-600 dark:text-gray-400">
                <li className="flex items-center justify-center gap-2"><Check size={16} className="text-sky-500"/> Stock prices</li>
                <li className="flex items-center justify-center gap-2"><Check size={16} className="text-sky-500"/> IoT dashboards</li>
             </ul>
           </div>

           <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform text-center">
             <div className="w-16 h-16 mx-auto bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={32} className="text-rose-500" />
             </div>
             <h4 className="text-xl font-black text-gray-900 dark:text-white mb-6">📉 Reports</h4>
             <ul className="space-y-3 font-medium text-gray-600 dark:text-gray-400">
                <li className="flex items-center justify-center gap-2"><Check size={16} className="text-rose-500"/> Student performance</li>
                <li className="flex items-center justify-center gap-2"><Check size={16} className="text-rose-500"/> Website traffic</li>
             </ul>
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA VISUALIZED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-blue-500/10 decoration-2">
          "A chart is worth a thousand data points. Google Charts makes it effortless."
        </p>
      </footer>

    </div>
  );
};

export default JsGoogleChart;