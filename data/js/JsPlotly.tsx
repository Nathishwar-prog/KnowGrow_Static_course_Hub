import React, { useState, useMemo } from 'react';
import {
  Zap,
  Activity,
  Terminal,
  Info,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  List,
  Binary,
  Box,
  Search,
  BookOpen,
  Grid,
  ShieldCheck,
  MousePointer2,
  Database,
  Repeat,
  Lightbulb,
  Plus,
  ArrowRight,
  Code2,
  Layers,
  Eye,
  Settings,
  Sparkles,
  HelpCircle,
  Download,
  Maximize,
  Anchor,
  Globe,
  Star,
  ShieldAlert,
  Hash,
  TextCursor,
  CirclePlay,
  Scissors,
  Table,
  Cpu,
  Workflow,
  ClipboardList,
  CircleSlash,
  Target,
  BarChart3,
  LineChart,
  PieChart,
  Layout,
  LayoutDashboard,
  Presentation,
  Compass,
  FileCode2,
  BarChart,
  Trello
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
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center text-white/90">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans italic">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
            title="Copy code"
          >
            {copied ? <CheckCircle size={14} className="text-green-400" /> : <Package size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 font-medium font-sans border-transparent">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8 font-sans border-transparent border-transparent">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight italic underline decoration-transparent border-transparent border-transparent border-transparent">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color} border-transparent border-transparent`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed italic border-transparent border-transparent border-transparent">{subtitle}</p>}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsPlotly: React.FC = () => {
    const [chartType, setChartType] = useState('scatter');

    const chartData = useMemo(() => {
        if (chartType === 'scatter') {
           return {
               x: [1, 2, 3, 4],
               y: [10, 15, 13, 17],
               type: 'scatter'
           };
        } else if (chartType === 'bar') {
           return {
               x: ["A", "B", "C"],
               y: [10, 20, 15],
               type: 'bar'
           };
        } else {
           return {
               labels: ["A", "B", "C"],
               values: [10, 20, 30],
               type: 'pie'
           };
        }
    }, [chartType]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden text-gray-900 dark:text-white border-transparent border-transparent border-transparent border-transparent">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 border-transparent border-transparent border-transparent border-transparent">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] border-transparent border-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] border-transparent border-transparent"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative italic border-transparent border-transparent border-transparent border-transparent">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em] italic border-transparent border-transparent border-transparent">
          <Presentation size={14} className="fill-current border-transparent" /> SCIENTIFIC DATA VISUALIZATION
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9] italic border-transparent underline decoration-transparent border-transparent">
          JS Plotly <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-600 drop-shadow-2xl font-sans italic border-transparent border-transparent">
            Graphics
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent">
          Master the <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">Plotly.js</span> library to create enterprise-grade <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">interactive charts</span>, data-driven <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500/30">dashboards</span>, and complex statistical graphics with minimal code.
        </p>
      </header>

      {/* ── Section 1: Definition ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center italic border-transparent border-transparent">
        <div className="space-y-8 italic border-transparent border-transparent border-transparent">
          <SectionHeader icon={Info} title="1. What is Plotly?" subtitle="The standard for interactive JS graphics." color="text-sky-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group italic border-transparent border-transparent">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12 italic border-transparent border-transparent">
               <Trello size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans italic border-transparent underline decoration-transparent border-transparent border-transparent">
              "Plotly.js is a high-level, declarative JavaScript library that simplifies the creation of sophisticated and interactive charts and graphs. It's built on top of D3.js and stack.gl, offering a balanced approach between power and ease of use."
            </p>
            <div className="grid grid-cols-2 gap-4 italic border-transparent">
               {[
                 { label: "Charts", icon: PieChart },
                 { label: "Graphs", icon: LineChart },
                 { label: "Dashboards", icon: LayoutDashboard },
                 { label: "Interactive", icon: MousePointer2 }
               ].map((cat, i) => (
                 <div key={i} className="p-6 bg-sky-500/5 border border-sky-500/10 rounded-3xl group transition-all hover:scale-105 flex items-center gap-4 italic border-transparent">
                    <div className="text-sky-500 italic"><cat.icon size={20} /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white italic underline decoration-transparent">{cat.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 italic border-transparent border-transparent border-transparent">
           <SectionHeader icon={Zap} title="2. Why Use Plotly?" subtitle="Efficiency in data presentation." color="text-indigo-500" />
           <div className="p-10 bg-gray-950 rounded-[4rem] border border-white/5 relative group overflow-hidden shadow-2xl italic border-transparent">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 transition-transform duration-[2000ms] italic border-transparent">
                 <Grid size={300} className="text-sky-500" />
              </div>
              <ul className="space-y-6 italic border-transparent">
                 {[
                   "Easy to implement with minimal JS",
                   "Highly interactive by default (Zoom, Pan, Hover)",
                   "Supports 40+ chart types (Statistical, 3D, Maps)",
                   "Pure client-side rendering (No backend required)"
                 ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-400 font-medium italic italic border-transparent border-transparent">
                       <CheckCircle size={18} className="text-sky-500" /> {feat}
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* ── Section 2: Setup ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
        <SectionHeader icon={Settings} title="3. Setup Plotly" subtitle="Integrating the library into your project." color="text-emerald-500" />
        <div className="grid lg:grid-cols-2 gap-8 italic border-transparent border-transparent">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl italic border-transparent">
              <h4 className="text-lg font-black italic mb-4 flex items-center gap-3 italic border-transparent underline decoration-transparent underline decoration-transparent border-transparent">
                 <Globe size={18} className="text-sky-500" /> Include via CDN
              </h4>
              <p className="text-gray-500 text-xs font-medium italic underline decoration-transparent mb-6 italic border-transparent">The fastest way to get started is by including the library script from their CDN.</p>
              <CodeBlock language="html" code={`<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>`} />
           </div>
           <div className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl italic border-transparent">
              <h4 className="text-lg font-black italic mb-4 flex items-center gap-3 italic border-transparent underline decoration-transparent underline decoration-transparent border-transparent">
                 <Layout size={18} className="text-emerald-500" /> Create Container
              </h4>
              <p className="text-gray-500 text-xs font-medium italic underline decoration-transparent mb-6 italic border-transparent">Define an empty HTML container with a specific ID where the chart will render.</p>
              <CodeBlock language="html" code={`<div id="myChart"></div>`} />
           </div>
        </div>
      </section>

      {/* ── Section 3: Basic & Multiple ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent border-transparent">
        <div className="grid lg:grid-cols-2 gap-12 italic border-transparent border-transparent border-transparent">
           <div className="space-y-8 italic border-transparent">
              <SectionHeader icon={FileCode2} title="4. First Chart Example" subtitle="The core rendering syntax." color="text-sky-500" />
              <CodeBlock title="Plotly.newPlot()" code={`let data = [\n  {\n    x: [1, 2, 3, 4],\n    y: [10, 15, 13, 17],\n    type: "scatter"\n  }\n];\n\nPlotly.newPlot("myChart", data);`} />
              <div className="p-4 bg-sky-500/5 border border-sky-500/10 rounded-2xl text-[10px] text-sky-600 font-black italic border-transparent">👉 This creates a simple line chart with data points.</div>
           </div>

           <div className="space-y-8 italic border-transparent">
              <SectionHeader icon={Layers} title="7. Multiple Data Series" subtitle="Comparing multiple datasets." color="text-indigo-500" />
              <CodeBlock title="Multi-dataset array" code={`let data = [\n  {\n    x: [1,2,3],\n    y: [2,4,6],\n    name: "Line 1",\n    type: "scatter"\n  },\n  {\n    x: [1,2,3],\n    y: [3,5,7],\n    name: "Line 2",\n    type: "scatter"\n  }\n];\n\nPlotly.newPlot("myChart", data);`} />
           </div>
        </div>
      </section>

      {/* ── Section 4: Chart Types (The big grid) ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
         <SectionHeader icon={BarChart} title="5. Common Chart Types" subtitle="Choosing the right visualization for your data." color="text-emerald-500" />
         <div className="grid md:grid-cols-3 gap-8 italic border-transparent border-transparent">
            {[
              { 
                title: "Line Chart", 
                code: 'let data = [{\n  x: [1,2,3],\n  y: [2,6,3],\n  type: "scatter"\n}];', 
                icon: LineChart, 
                color: "sky" 
              },
              { 
                title: "Bar Chart", 
                code: 'let data = [{\n  x: ["A","B","C"],\n  y: [10,20,15],\n  type: "bar"\n}];', 
                icon: BarChart3, 
                color: "emerald" 
              },
              { 
                title: "Pie Chart", 
                code: 'let data = [{\n  labels: ["A","B","C"],\n  values: [10,20,30],\n  type: "pie"\n}];', 
                icon: PieChart, 
                color: "indigo" 
              }
            ].map((chart, i) => (
               <div key={i} className={`p-8 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-${chart.color}-500/10 shadow-xl group hover:-translate-y-2 transition-transform italic flex flex-col border-transparent`}>
                  <div className={`p-4 rounded-2xl bg-${chart.color}-500/10 text-${chart.color}-500 w-fit mb-6 italic border-transparent`}>
                     <chart.icon size={24} />
                  </div>
                  <h4 className="text-xl font-black italic mb-4 italic border-transparent underline decoration-transparent underline decoration-transparent border-transparent">{chart.title}</h4>
                  <div className="mt-auto italic border-transparent border-transparent">
                     <CodeBlock code={chart.code} />
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* ── Section 5: Dynamic Previewer ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group font-sans italic border-transparent border-transparent">
        <SectionHeader icon={Eye} title="Data Simulation Lab" subtitle="Witnessing data transformation in real-time." color="text-sky-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-emerald-500/20 rounded-[4rem] italic border-transparent border-transparent decoration-transparent border-transparent">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner italic overflow-hidden relative italic border-transparent border-transparent decoration-transparent border-transparent">
             <div className="grid lg:grid-cols-2 gap-16 items-center italic border-transparent border-transparent decoration-transparent border-transparent">
                <div className="space-y-8 italic border-transparent border-transparent">
                   <div className="space-y-4 italic border-transparent border-transparent">
                      <h3 className="text-4xl font-black italic tracking-tighter leading-tight italic border-transparent border-transparent underline decoration-transparent">Interactive Chart Engine</h3>
                      <p className="text-gray-500 font-medium italic underline decoration-gray-500/10 italic border-transparent border-transparent decoration-transparent border-transparent">Modify the visualization type to see how the rendering engine interprets the dataset.</p>
                   </div>
                   
                   <div className="flex flex-wrap gap-3 italic border-transparent border-transparent">
                      {['scatter', 'bar', 'pie'].map((type) => (
                         <button 
                            key={type}
                            onClick={() => setChartType(type)}
                            className={`px-6 py-3 rounded-2xl font-black italic tracking-widest text-[10px] transition-all italic border-transparent ${chartType === type ? 'bg-sky-500 text-white shadow-xl shadow-sky-500/20' : 'bg-gray-100 dark:bg-gray-900 text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                         >
                            {type.toUpperCase()}
                         </button>
                      ))}
                   </div>

                   <div className="space-y-4 italic border-transparent border-transparent">
                      <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 italic border-transparent">
                         <span className="text-[10px] font-black uppercase text-gray-400 italic block mb-4 italic border-transparent">Live Configuration</span>
                         <code className="text-xs font-mono text-indigo-500 italic border-transparent border-transparent">
                            {JSON.stringify(chartData, null, 2)}
                         </code>
                      </div>
                   </div>
                </div>

                <div className="relative italic border-transparent border-transparent">
                   <div className="p-12 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl relative group overflow-hidden text-center min-h-[400px] flex flex-col justify-center italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent">
                      <div className="absolute inset-0 opacity-[0.05] group-hover:scale-105 transition-transform duration-1000 italic border-transparent">
                         <Presentation size={300} className="text-sky-500 mx-auto italic border-transparent" />
                      </div>
                      <div className="relative z-10 space-y-8 uppercase italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent underline decoration-transparent">
                         <div className="space-y-2 italic border-transparent border-transparent">
                            <span className="text-[10px] font-black italic tracking-[0.3em] text-gray-500 italic border-transparent">Visual Output</span>
                            <div className="h-[200px] flex items-end justify-center gap-2 px-8 italic border-transparent">
                               {chartType === 'scatter' && (
                                  <div className="w-full h-full relative border-l border-b border-white/10 italic border-transparent">
                                     <div className="absolute left-[20%] bottom-[30%] w-3 h-3 bg-sky-500 rounded-full italic border-transparent"></div>
                                     <div className="absolute left-[40%] bottom-[60%] w-3 h-3 bg-sky-500 rounded-full italic border-transparent"></div>
                                     <div className="absolute left-[60%] bottom-[50%] w-3 h-3 bg-sky-500 rounded-full italic border-transparent"></div>
                                     <div className="absolute left-[80%] bottom-[80%] w-3 h-3 bg-sky-500 rounded-full italic border-transparent"></div>
                                  </div>
                               )}
                               {chartType === 'bar' && [40, 80, 60].map((h, i) => (
                                  <div key={i} className="flex-1 bg-emerald-500/20 border border-emerald-500/50 rounded-t-lg transition-all duration-700 italic border-transparent" style={{ height: `${h}%` }}></div>
                               ))}
                               {chartType === 'pie' && (
                                  <div className="w-40 h-40 rounded-full bg-gradient-conic from-indigo-500/20 via-indigo-500 to-indigo-500/40 border border-indigo-500 animate-spin-slow italic border-transparent"></div>
                               )}
                            </div>
                         </div>
                         <div className="h-px bg-white/5 w-1/2 mx-auto italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent"></div>
                         <p className="text-[10px] text-gray-500 font-bold italic border-transparent">Chart Status: <span className="text-sky-500">Rendered (Simulation)</span></p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Layout & Examples ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
        <div className="grid lg:grid-cols-2 gap-12 italic border-transparent border-transparent">
           <div className="space-y-8 italic border-transparent border-transparent">
              <SectionHeader icon={Layout} title="6. Adding Layout" subtitle="Refining UX with titles and scales." color="text-indigo-500" />
              <CodeBlock title="Layout configuration object" code={`let layout = {\n  title: "My First Chart",\n  xaxis: { title: "X Axis" },\n  yaxis: { title: "Y Axis" }\n};\n\nPlotly.newPlot("myChart", data, layout);`} />
           </div>

           <div className="space-y-8 italic border-transparent">
              <SectionHeader icon={LayoutDashboard} title="8. Real-World: Sales" subtitle="Practical dashboard rendering." color="text-sky-500" />
              <CodeBlock title="Sales Dashboard Instance" code={`let data = [{\n  x: ["Jan","Feb","Mar"],\n  y: [100,200,150],\n  type: "bar"\n}];\n\nlet layout = { title: "Monthly Sales" };\n\nPlotly.newPlot("myChart", data, layout);`} />
           </div>
        </div>
      </section>

      {/* ── Section 7: Interactivity ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent border-transparent">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl relative overflow-hidden group italic border-transparent border-transparent border-transparent">
           <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform italic border-transparent border-transparent border-transparent">
              <MousePointer2 size={240} className="text-indigo-500 italic border-transparent border-transparent border-transparent" />
           </div>
           <SectionHeader icon={Sparkles} title="9. Interactivity Engine" subtitle="Engaging the user with dynamic feedback." color="text-indigo-500" />
           <div className="grid md:grid-cols-2 gap-12 mt-12 italic border-transparent border-transparent">
              <div className="space-y-6 italic border-transparent border-transparent">
                 <p className="text-gray-500 font-medium italic underline decoration-transparent italic border-transparent border-transparent">Plotly supports out-of-the-box interaction features like zooming, panning, and native hover tooltips.</p>
                 <div className="flex flex-wrap gap-4 italic border-transparent border-transparent">
                    {["Hover tooltips", "Zooming", "Panning", "Click events"].map((f, i) => (
                       <span key={i} className="px-4 py-2 bg-indigo-500/5 border border-indigo-500/10 rounded-xl text-[10px] font-black text-indigo-600 uppercase italic border-transparent border-transparent">{f}</span>
                    ))}
                 </div>
              </div>
              <div className="italic border-transparent border-transparent">
                 <CodeBlock title="Event Handling" code={`document.getElementById("myChart")\n  .on("plotly_click", function(data){\n    alert("Point clicked!");\n  });`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 8: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic border-transparent border-transparent">
        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={AlertTriangle} title="10. Common Mistakes ⚠️" subtitle="Avoid these visualization failures." color="text-rose-500" />
           <div className="bg-rose-500/5 border border-rose-500/10 p-10 rounded-[3.5rem] space-y-10 group overflow-hidden relative italic border-transparent">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-500 rotate-12 italic border-transparent">
                 <CircleSlash size={60} />
              </div>
              {[
                { label: "Forgetting the CDN", text: "Without the Plotly script, the newPlot() method remains undefined.", icon: Globe },
                { label: "Wrong Container ID", text: "Passing an ID that doesn't exist in the DOM will result in null errors.", icon: Target },
                { label: "Data Format Issues", text: "Data mismatch between X and Y arrays (differing lengths) causes rendering failure.", icon: Database }
              ].map((err, i) => (
                 <div key={i} className="flex gap-6 items-start italic border-transparent border-transparent shadow shadow-rose-900/5 p-4 bg-white/5 rounded-3xl">
                    <div className="p-4 rounded-xl bg-white dark:bg-gray-950 text-rose-500 h-fit italic border-transparent shadow shadow-rose-900/10">
                       <err.icon size={20} />
                    </div>
                    <div>
                       <h6 className="text-[11px] font-black text-rose-600 uppercase tracking-widest italic underline decoration-transparent mb-1 italic border-transparent">{err.label}</h6>
                       <p className="text-[10px] text-gray-500 font-medium italic underline decoration-rose-500/10 underline decoration-transparent italic border-transparent">{err.text}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={Lightbulb} title="Expert Pro Tips" subtitle="15+ Years of Data Engineering Experience." color="text-amber-500" />
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 italic border-transparent">
              {[
                { label: "Start Simple → Scale", text: "Begin with basic line/bar series before moving to multi-trace dashboards.", icon: Zap, color: "text-sky-500" },
                { label: "Use Layout for UX", text: "Comprehensive titles and axis labels significantly improve chart readability.", icon: Layout, color: "text-indigo-500" },
                { label: "Maintain Data Hygene", text: "Always clean and normalize your data before passing it to the visualizer.", icon: Database, color: "text-emerald-500" },
                { label: "Combine with APIs", text: "Use Fetch/Promises to pull live data segments for dynamic real-time plotting.", icon: Network, color: "text-amber-500" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start group italic border-transparent border-transparent border-transparent">
                   <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${tip.color} group-hover:scale-110 transition-transform italic border-transparent shadow-current/5`}>
                      <tip.icon size={20} />
                   </div>
                   <div className="flex flex-col italic border-transparent border-transparent border-transparent">
                      <h6 className={`text-sm font-black italic underline decoration-transparent ${tip.color} block mb-1 uppercase tracking-widest italic border-transparent`}>🚀 {tip.label}</h6>
                      <p className="text-[10px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans italic border-transparent border-transparent">{tip.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Section 12: Practice Challenges ── */}
      <section className="max-w-6xl mx-auto mb-32 relative italic border-transparent border-transparent">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] -z-10 italic border-transparent border-transparent"></div>
         <SectionHeader icon={Target} title="12. Visualization Challenges" subtitle="Test your interactive plotting skills." color="text-emerald-500" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 italic border-transparent border-transparent border-transparent">
            {[
               { title: "Student Marks", desc: "Build a single-series bar chart representing a list of student scores.", icon: BarChart3 },
               { title: "Expense Slice", desc: "Create a pie chart visualization for monthly expense categories.", icon: PieChart },
               { title: "Dual Comparison", desc: "Render two distinct line series in one graph container.", icon: LineChart },
               { title: "Interaction Lab", desc: "Implement a hover tooltip system that displays custom point data.", icon: MousePointer2 }
            ].map((tip, i) => (
               <div key={i} className={`p-8 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-4 group relative overflow-hidden italic border-transparent border-transparent decoration-transparent border-transparent`}>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform italic border-transparent"></div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 group-hover:bg-white/10 transition-all italic border-transparent">
                     <tip.icon size={20} />
                  </div>
                  <h5 className="text-white font-black italic tracking-tight italic border-transparent underline decoration-transparent border-transparent">TASK #{i+1}</h5>
                  <p className="text-gray-500 text-[10px] italic leading-tight italic border-transparent underline decoration-transparent border-transparent underline decoration-transparent">{tip.title}</p>
                  <p className="text-gray-600 text-[9px] italic border-transparent underline decoration-transparent border-transparent underline decoration-transparent">{tip.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans italic border-transparent border-transparent border-transparent">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10 italic border-transparent border-transparent"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight italic border-transparent border-transparent border-transparent">
          Data Transparency. <br /> Total Insight Control.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed italic border-transparent border-transparent border-transparent">
          Plotly.js represents the pinnacle of web-based data visualization. By bridging the gap between professional statistical tools and front-end interactivity, it empowers developers to transform static datasets into living, breathing insights that drive modern decision-making.
        </p>
      </footer>

    </div>
  );
};

// Mock Network icon
const Network = (props: any) => <ShieldCheck {...props} />;

export default JsPlotly;