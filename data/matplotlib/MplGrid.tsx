import React, { useState } from 'react';
import {
  Grid, Copy, Check, Info, ArrowRight,
  Maximize2, Terminal, Eye, Layout, 
  Activity, Code, List, BarChart2,
  TrendingUp, Briefcase, Zap, Settings,
  Hash, AlignLeft, MoveHorizontal, MoveVertical
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-sky-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-sky-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
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

const MplGrid: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-gray-900 dark:to-sky-950/20 min-h-screen font-sans">
      
      {/* 1. Header & Intro */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <Grid className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Grid
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
           Adding reference lines to improve readability and data interpretation.
        </p>
      </header>

      {/* 1 & 2. Intro and Importance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-sky-500" /> 1. Introduction
          </h2>
          <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                A <strong>Grid</strong> in Matplotlib is used to display reference lines across the plot area, helping users read and compare values more easily.
              </p>
              <div className="bg-sky-50 dark:bg-sky-900/20 p-4 rounded-xl border border-sky-100 dark:border-sky-800/40">
                <p className="text-sky-800 dark:text-sky-300 text-sm font-bold mb-2 uppercase tracking-wider underline">The Goal:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    Improve readability and precision by providing a roadmap for eyes across the visualization canvas.
                </p>
              </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
              <Hash size={150} />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-yellow-500" /> 2. Importance of Grids
          </h2>
          <div className="space-y-4 relative z-10">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Without grid lines, it can be difficult to estimate values. Grids turn "guessing" into "reading".
              </p>
              <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Without Grid</p>
                      <pre className="text-[10px] font-mono leading-none">
{`40 |       *
30 |    *
20 | *
   ------------
    1 2 3`}
                      </pre>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
                      <p className="text-[10px] font-bold text-sky-400 uppercase mb-2">With Grid</p>
                      <pre className="text-[10px] font-mono leading-none text-sky-500/60">
{`40 |-------*------
30 |----*---------
20 |-*-------------
   ----------------
    1 2 3`}
                      </pre>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Function & Basic Example */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl -z-10"></div>
              <h2 className="text-3xl font-black mb-10 flex items-center border-b border-slate-700 pb-4">
                  <Terminal className="w-8 h-8 mr-4 text-sky-400" /> 3 & 4. plt.grid() Function
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <p className="text-lg text-slate-300 font-medium">Use the <code className="text-sky-400">plt.grid()</code> function to toggle and control these reference lines.</p>
                    <ResultTable 
                        headers={['Parameter', 'Meaning']}
                        rows={[
                            [<code className="text-sky-400 font-bold">plt.grid(True)</code>, 'Enables the grid (Default)'],
                            [<code className="text-gray-400 font-bold">plt.grid(False)</code>, 'Disables the grid']
                        ]}
                    />
                    <div className="p-4 bg-sky-950/30 rounded-xl border border-sky-500/20">
                        <h4 className="text-xs font-bold text-sky-300 mb-2 uppercase tracking-widest">Typical Sequence</h4>
                        <div className="flex items-center space-x-2 text-sm font-mono text-slate-400">
                            <span>plot</span> → <span className="text-sky-400">grid</span> → <span>show</span>
                        </div>
                    </div>
                  </div>
                  <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nx = [1,2,3,4]\ny = [10,20,15,25]\n\nplt.plot(x,y)\n\nplt.grid(True) # Adds reference lines\n\nplt.title("Line Plot with Grid")\nplt.show()`} title="Basic Syntax" />
              </div>
          </div>
      </section>

      {/* 5. Visualization of Grid */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700 w-full">
                    <Eye className="w-6 h-6 mr-3 text-sky-500" /> 5. Visualization of Grid Lines
                </h2>
                <div className="w-full bg-gray-950 rounded-2xl p-8 sm:p-12 font-mono text-sky-400 shadow-inner relative overflow-hidden flex justify-center border border-gray-800">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" 
                         style={{ backgroundImage: 'linear-gradient(to right, #0ea5e9 1px, transparent 1px), linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>
<pre className="text-xs sm:text-sm leading-loose relative z-10 font-bold">
{`Value
25 |----*----------------
20 |-------*-------------
15 |-----------*---------
10 |-*-------------------
   ----------------------
    1   2   3   4`}
</pre>
                </div>
                <p className="mt-6 text-gray-500 dark:text-gray-400 italic text-center w-full">Reference lines allow the eye to trace data points back to the axis values instantly.</p>
          </div>
      </section>

      {/* 6. Grid on Specific Axis */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <MoveHorizontal className="w-6 h-6 mr-3 text-sky-500" /> 6. Axis-Specific Grids
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium leading-relaxed">
                    Sometimes you only need reference lines for one dimension to avoid "cluttering" the view.
                </p>
                <div className="grid lg:grid-cols-2 gap-4 w-full mb-6 text-sm">
                    <div className="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-2xl border border-sky-100 dark:border-sky-800/40">
                        <code className="text-sky-600 dark:text-sky-300 font-bold">axis='x'</code>
                        <p className="text-[10px] mt-1 text-gray-500 uppercase tracking-tighter font-bold">Vertical Lines</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl border border-cyan-100 dark:border-cyan-800/40">
                        <code className="text-cyan-600 dark:text-cyan-300 font-bold">axis='y'</code>
                        <p className="text-[10px] mt-1 text-gray-500 uppercase tracking-tighter font-bold">Horizontal Lines</p>
                    </div>
                </div>
                <CodeSnippetBlock codeSnippet={`plt.grid(axis='y') # Only horizontal lines\nplt.grid(axis='x') # Only vertical lines`} title="Syntax Selection" />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
                <h3 className="text-lg font-bold mb-4 flex items-center text-gray-400">
                    <MoveVertical className="w-4 h-4 mr-2" /> Y-Axis Visualization
                </h3>
                <div className="bg-gray-950 rounded-2xl p-8 font-mono text-cyan-400 text-xs shadow-inner flex flex-col items-center justify-center border border-gray-800 flex-grow">
<pre className="text-center leading-loose">
{`25 |---------
20 |---------
15 |---------
10 |---------
   ----------------
    1   2   3   4`}
</pre>
                </div>
                <div className="mt-6 p-4 bg-cyan-50 dark:bg-cyan-900/10 rounded-xl border border-cyan-100 dark:border-cyan-800/40">
                    <p className="text-sm text-cyan-700 dark:text-cyan-300 font-bold italic">Perfect for bar charts or time-series tracking.</p>
                </div>
            </div>
      </section>

      {/* 7. Grid Style Customization */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-bl-full"></div>
              <h2 className="text-3xl font-black mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <Settings className="w-8 h-8 mr-4 text-sky-500" /> 7. Styled Grid Customization
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">Fine-tune the appearance of lines to match your report's theme.</p>
                    <ResultTable 
                        headers={['Parameter', 'Purpose']}
                        rows={[
                            [<code className="text-sky-600 dark:text-sky-400 font-bold">color</code>, 'Grid line color (e.g., "gray")'],
                            [<code className="text-sky-600 dark:text-sky-400 font-bold">linestyle</code>, 'Line style (e.g., "--", "-.", ":")'],
                            [<code className="text-sky-600 dark:text-sky-400 font-bold">linewidth</code>, 'Thickness of the grid lines']
                        ]}
                    />
                  </div>
                  <CodeSnippetBlock codeSnippet={`plt.grid(\n  color='gray', \n  linestyle='--', \n  linewidth=1\n)`} title="Custom Styling" />
              </div>
          </div>
      </section>

      {/* 8 & 9. Grid in Bar Charts */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <BarChart2 className="w-6 h-6 mr-3 text-sky-500" /> 8 & 9. Grids in Bar Charts
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                    Grids are exceptionally useful in bar charts to compare discrete heights against horizontal markers.
                </p>
                <CodeSnippetBlock codeSnippet={`students = ["A","B","C","D"]\nmarks = [80,65,90,70]\n\nplt.bar(students, marks)\n\nplt.grid(axis='y') # Reference vertical values\n\nplt.show()`} title="Categorical Grid" />
            </div>

            <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center border border-slate-700">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Activity size={100} className="text-sky-400" />
                </div>
                <h3 className="text-xs font-black text-sky-400 mb-6 uppercase tracking-widest text-center underline decoration-sky-500/30 underline-offset-8">Output Visual</h3>
                <div className="bg-black/30 p-8 rounded-2xl border border-slate-700/50 shadow-inner">
<pre className="text-[10px] sm:text-xs font-mono text-sky-300 leading-relaxed">
{`Marks
90 |-------█------
80 |---█-----------
70 |-----------█--
60 |------█--------
   ----------------
    A  B  C  D`}
</pre>
                </div>
                <p className="mt-6 text-[10px] text-slate-500 text-center font-bold tracking-tight">Horizontal markers allow for instant categorization of performance tiers.</p>
            </div>
      </section>

      {/* 10. Real World Applications */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-sky-600 to-cyan-800 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl text-white text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.15),transparent)]"></div>
               <h2 className="text-3xl font-black mb-10 pb-4 border-b border-white/20 relative z-10">
                   10. Real World Applications
               </h2>
               
               <div className="grid md:grid-cols-3 gap-8 relative z-10 text-left">
                   
                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-sky-200 flex items-center mb-4 text-lg">
                           <Layout className="w-5 h-5 mr-3" /> Data Analysis
                       </h3>
                       <p className="text-sm text-sky-50 leading-relaxed">
                            Trend analysis graphs where identifying intersection points between time and value is critical.
                       </p>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-cyan-200 flex items-center mb-4 text-lg">
                           <TrendingUp className="w-5 h-5 mr-3" /> Financial Charts
                       </h3>
                       <p className="text-sm text-cyan-50 leading-relaxed">
                            Stock price movements over weeks or months require horizontal grids for target price levels.
                       </p>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-blue-200 flex items-center mb-4 text-lg">
                           <Activity className="w-5 h-5 mr-3" /> Scientific Research
                       </h3>
                       <p className="text-sm text-blue-50 leading-relaxed">
                            Measurement graphs for physics or chemistry where exact coordinate location is a mandatory requirement.
                       </p>
                   </div>

               </div>

               <div className="mt-12 flex flex-col items-center relative z-10">
                  <div className="flex flex-wrap justify-center items-center gap-4 bg-sky-950/40 backdrop-blur-sm p-6 rounded-3xl border border-sky-400/30 font-bold">
                    <span className="text-sky-300">Raw Data</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span className="text-sky-300">Plot</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span className="text-sky-300 ring-2 ring-sky-400 px-3 py-1 rounded-full bg-sky-500 shadow-lg text-white">Add Grid</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span className="text-emerald-400">Better Interpretation</span>
                  </div>
               </div>
          </div>
      </section>

    </div>
  );
};

export default MplGrid;
