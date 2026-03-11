import React, { useState } from 'react';
import {
  Maximize2, Copy, Check, Info, ArrowRight,
  Monitor, Terminal, Eye, Layout, 
  Activity, Code, List, BarChart2,
  TrendingUp, Briefcase, Zap, Cpu,
  Layers, Package, Grid, Settings
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'python' }: { codeSnippet: string, title?: string, language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-indigo-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-indigo-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const ResultTable = ({ headers, rows }: { headers: string[], rows: (string | number | React.ReactNode)[][] }) => (
  <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-4 shadow-sm w-full font-sans">
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
            {row.map((cell, j) => (
               <td key={j} className="px-4 py-3">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MplFigure: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950/20 min-h-screen font-sans">
      
      {/* 1. Header & Intro */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <Maximize2 className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Figure
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
           The top-level container for all your plots, axes, labels, and titles.
        </p>
      </header>

      {/* 1 & 2. Intro and Importance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-indigo-500" /> 1. Introduction
          </h2>
          <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                In Matplotlib, a <strong>Figure</strong> is the entire window or canvas where all plots are drawn. Every single graph exists inside a figure object.
              </p>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/40">
                <p className="text-indigo-800 dark:text-indigo-300 text-sm font-bold mb-2 uppercase tracking-wider underline">Definition:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    The top-level container that holds all visual elements like plots, axes, labels, and titles.
                </p>
              </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
              <Monitor size={150} />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Package className="w-6 h-6 mr-3 text-blue-500" /> 2. Importance of the Figure
          </h2>
          <div className="space-y-4 relative z-10">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The figure acts as the main container. Without it, Matplotlib cannot display graphs properly.
              </p>
              <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2">
                  <div className="px-6 py-1 bg-indigo-500 text-white rounded-full text-xs font-bold shadow-sm">Figure</div>
                  <ArrowRight size={14} className="rotate-90 text-gray-400" />
                  <div className="px-6 py-1 bg-blue-500 text-white rounded-full text-xs font-bold shadow-sm">Axes</div>
                  <ArrowRight size={14} className="rotate-90 text-gray-400" />
                  <div className="px-6 py-1 bg-teal-500 text-white rounded-full text-xs font-bold shadow-sm">Plot Elements</div>
              </div>
          </div>
        </div>
      </section>

      {/* 3. Structure of a Figure */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
              <h2 className="text-3xl font-black mb-10 flex items-center border-b border-slate-700 pb-4">
                  <Layers className="w-8 h-8 mr-4 text-indigo-400" /> 3. Layout Structure
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-lg text-slate-300 font-medium">A Matplotlib visualization is built in layers, starting from the container down to the individual data points.</p>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <div className="p-2 bg-indigo-500/20 rounded-lg mr-4 mt-1 border border-indigo-500/30">
                                <Maximize2 size={16} className="text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-indigo-300">Figure</h4>
                                <p className="text-sm text-slate-400">The entire drawing area (window/canvas).</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="p-2 bg-blue-500/20 rounded-lg mr-4 mt-1 border border-blue-500/30">
                                <Layout size={16} className="text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-300">Axes</h4>
                                <p className="text-sm text-slate-400">The individual plot area where a specific graph lives.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="p-2 bg-teal-500/20 rounded-lg mr-4 mt-1 border border-teal-500/30">
                                <Activity size={16} className="text-teal-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-teal-300">Plot Elements</h4>
                                <p className="text-sm text-slate-400">Lines, bars, markers that represent data.</p>
                            </div>
                        </li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/40 border border-slate-700 rounded-3xl p-8 shadow-inner font-mono text-indigo-400">
                      <div className="border-2 border-dashed border-slate-600 p-6 rounded-xl text-center relative">
                          <span className="absolute -top-3 left-6 px-2 bg-slate-900 text-xs text-indigo-300 font-bold tracking-widest">FIGURE</span>
                          <div className="border-2 border-indigo-500/40 p-10 rounded-lg bg-indigo-500/5">
                              <span className="text-xs text-indigo-300 opacity-60">Axes Container</span>
                              <div className="mt-4 flex justify-center space-x-2">
                                  <div className="h-1 w-8 bg-indigo-500"></div>
                                  <div className="h-1 w-12 bg-indigo-500 translate-y-[-4px]"></div>
                                  <div className="h-1 w-6 bg-indigo-500 translate-y-[2px]"></div>
                              </div>
                              <p className="mt-4 text-[10px] text-slate-500">Visual elements (Titles, Labels)</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. Creating a Figure & 5. Basic Example */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <Terminal className="w-6 h-6 mr-3 text-indigo-500" /> 4 & 5. Creating a Figure
                </h2>
                <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/40 mb-6 w-full">
                    <p className="text-xs font-bold text-indigo-800 dark:text-indigo-400 mb-2 uppercase">Core Function</p>
                    <code className="text-xl font-mono text-indigo-600 dark:text-indigo-300">plt.figure()</code>
                </div>
                <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nplt.figure()\n\nx = [1,2,3,4]\ny = [10,20,15,25]\n\nplt.plot(x,y)\n\nplt.title("Simple Figure Example")\n\nplt.show()`} title="Figure Initialization" />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Eye className="w-6 h-6 mr-3 text-blue-500" /> 6. Figure Layout Visualization
                </h2>
                <div className="bg-gray-950 rounded-2xl p-8 font-mono text-indigo-400 text-xs sm:text-sm shadow-inner flex flex-col items-center justify-center border border-gray-800 flex-grow">
<pre className="text-center leading-relaxed">
{`+----------------------------------+
|             Figure               |
|                                  |
|       +------------------+       |
|       |       Axes       |       |
|       |                  |       |
|       |     Graph        |       |
|       |                  |       |
|       +------------------+       |
|                                  |
+----------------------------------+`}
</pre>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl text-center border border-blue-100 dark:border-blue-800/40">
                    <p className="text-sm text-blue-700 dark:text-blue-300 font-bold italic">plt.show() triggers the final rendering of this entire architecture.</p>
                </div>
            </div>
      </section>

      {/* 7. Setting Figure Size */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 opacity-20"></div>
              <h2 className="text-3xl font-black mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <Grid className="w-8 h-8 mr-4 text-indigo-500" /> 7. Setting Figure Size
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">Customize the plot's dimensions using the <code className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-1 rounded font-bold">figsize</code> argument.</p>
                    <ResultTable 
                        headers={['Parameter', 'Meaning']}
                        rows={[
                            [<span className="text-indigo-600 font-bold">figsize=(8, 5)</span>, 'Dimensions in inches'],
                            [<span className="text-blue-600 font-bold">Value 8</span>, 'Width (horizontal)'],
                            [<span className="text-blue-600 font-bold">Value 5</span>, 'Height (vertical)']
                        ]}
                    />
                  </div>
                  <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nplt.figure(figsize=(8,5))\n\nx = [1,2,3,4]\ny = [10,20,15,25]\n\nplt.plot(x,y)\n\nplt.show()`} title="Defining Dimensions" />
              </div>
          </div>
      </section>

      {/* 8. Creating Multiple Figures */}
      <section className="max-w-6xl mx-auto mb-16 px-8 py-12 bg-slate-900 rounded-[2.5rem] shadow-2xl text-white">
          <h2 className="text-3xl font-black mb-10 flex items-center border-b border-slate-800 pb-4">
              <Layers className="w-8 h-8 mr-4 text-blue-400" /> 8. Creating Multiple Figures
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                  <p className="text-lg text-slate-300 mb-6">Each call to <code className="text-blue-400 font-bold">plt.figure(n)</code> starts a new drawing canvas, allowing you to generate separate windows or files for different data stories.</p>
                  <div className="space-y-4">
                      <div className="bg-black/40 p-4 border border-slate-700 rounded-2xl flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mr-4 shrink-0 font-bold text-blue-400">1</div>
                          <p className="text-sm font-bold text-slate-400 underline">Figure 1 → First graph (Canvas A)</p>
                      </div>
                      <div className="bg-black/40 p-4 border border-slate-700 rounded-2xl flex items-center">
                          <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mr-4 shrink-0 font-bold text-indigo-400">2</div>
                          <p className="text-sm font-bold text-slate-400 underline">Figure 2 → Second graph (Canvas B)</p>
                      </div>
                  </div>
              </div>
              <CodeSnippetBlock codeSnippet={`plt.figure(1)\nplt.plot([1,2,3],[4,5,6])\nplt.title("Figure 1")\n\nplt.figure(2)\nplt.plot([1,2,3],[6,5,4])\nplt.title("Figure 2")\n\nplt.show()`} title="Multi-Figure Logic" />
          </div>
      </section>

      {/* 9 & 10. Subplots */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-black mb-10 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <Grid className="w-8 h-8 mr-4 text-indigo-500" /> 9 & 10. Figure with Subplots
              </h2>
              
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-5">
                      <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium">A single figure can be split into smaller grid cells called subplots.</p>
                      <CodeSnippetBlock codeSnippet={`plt.figure()\n\nplt.subplot(1,2,1)\nplt.plot([1,2,3],[4,5,6])\nplt.title("Plot 1")\n\nplt.subplot(1,2,2)\nplt.plot([1,2,3],[6,5,4])\nplt.title("Plot 2")\n\nplt.show()`} title="Grid Logic" />
                  </div>
                  
                  <div className="lg:col-span-7 bg-gray-950 rounded-[2rem] p-10 font-mono text-indigo-400 text-sm overflow-hidden flex flex-col items-center border border-gray-800 shadow-2xl relative">
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                          <Layout size={100} />
                      </div>
                      <p className="text-xs uppercase font-bold text-gray-500 mb-6 tracking-widest">Subplot Visualization Output</p>
                      <pre className="leading-relaxed">
{`+-------------------------------+
|            Figure             |
|                               |
|   Plot 1        Plot 2        |
|   ┌─────┐      ┌─────┐        |
|   │     │      │     │        |
|   │     │      │     │        |
|   └─────┘      └─────┘        |
|                               |
+-------------------------------+`}
                      </pre>
                  </div>
              </div>
          </div>
      </section>

      {/* 12. Customization Options */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.1),transparent)]"></div>
             <h2 className="text-3xl font-black mb-10 flex items-center border-b border-white/20 pb-4 relative z-10">
                 <Settings className="w-8 h-8 mr-4 text-indigo-200" /> 12. Figure Customization Options
             </h2>
             
             <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                 <div className="space-y-6">
                     <p className="text-lg text-indigo-50 font-medium">Common parameters for the <code className="bg-white/10 px-1 rounded">plt.figure()</code> call to fine-tune your export or display results.</p>
                     <ResultTable 
                        headers={['Parameter', 'Purpose']}
                        rows={[
                            [<code className="text-white font-bold">figsize</code>, 'Physical size of the figure'],
                            [<code className="text-white font-bold">dpi</code>, 'Resolution (Dots Per Inch)'],
                            [<code className="text-white font-bold">facecolor</code>, 'Background color of the canvas']
                        ]}
                     />
                 </div>
                 <div className="p-6 bg-black/20 backdrop-blur-md rounded-3xl border border-white/10">
                    <p className="text-xs font-bold text-indigo-200 mb-4 uppercase tracking-widest">Advanced Config</p>
                    <code className="text-sm sm:text-lg font-mono text-indigo-100 break-all leading-relaxed whitespace-pre font-bold">plt.figure(\n  figsize=(8,5), \n  dpi=100, \n  facecolor="lightgray"\n)</code>
                 </div>
             </div>
          </div>
      </section>

      {/* 11. Real World Applications */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 text-center relative overflow-hidden">
               <h2 className="text-3xl font-black mb-8 pb-4 border-b border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white">
                   11. Real World Applications
               </h2>
               
               <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
                   
                   <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 hover:scale-[1.02] transition-transform">
                       <h3 className="font-bold text-indigo-800 dark:text-indigo-200 flex items-center mb-4 text-lg">
                           <Activity className="w-5 h-5 mr-3" /> Data Science
                       </h3>
                       <p className="text-sm text-gray-600 dark:text-gray-400">Essential for generating multiple graphs in automated analysis reports.</p>
                   </div>

                   <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50 hover:scale-[1.02] transition-transform">
                       <h3 className="font-bold text-blue-800 dark:text-blue-200 flex items-center mb-4 text-lg">
                           <Cpu className="w-5 h-5 mr-3" /> Machine Learning
                       </h3>
                       <p className="text-sm text-gray-600 dark:text-gray-400">Used to visualize training results vs error rates side-by-side.</p>
                   </div>

                   <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl border border-teal-100 dark:border-teal-800/50 hover:scale-[1.02] transition-transform">
                       <h3 className="font-bold text-teal-800 dark:text-teal-200 flex items-center mb-4 text-lg">
                           <Briefcase className="w-5 h-5 mr-3" /> Business Analytics
                       </h3>
                       <p className="text-sm text-gray-600 dark:text-gray-400">Powering dashboard charts for quarterly revenue and growth monitoring.</p>
                   </div>

               </div>

               <div className="flex flex-col items-center">
                  <div className="flex flex-wrap justify-center items-center gap-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 font-bold select-none cursor-default group">
                    <span className="text-gray-500 dark:text-gray-400">Data</span>
                    <ArrowRight size={14} className="text-indigo-400 group-hover:translate-x-1 transition-transform" />
                    <span className="text-indigo-600 dark:text-indigo-400">Matplotlib Figure</span>
                    <ArrowRight size={14} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                    <span className="text-blue-600 dark:text-blue-400">Multiple Graphs</span>
                    <ArrowRight size={14} className="text-teal-400 group-hover:translate-x-1 transition-transform" />
                    <span className="text-emerald-500 ring-2 ring-emerald-500/20 px-3 py-1 rounded-full bg-emerald-500/5">Actionable Insights</span>
                  </div>
               </div>
          </div>
      </section>

    </div>
  );
};

export default MplFigure;
