import React, { useState } from 'react';
import {
  Type, Copy, Check, Info, ArrowRight,
  Maximize2, Terminal, Eye, Layout, 
  Activity, Code, List, BarChart2,
  TrendingUp, Briefcase, Zap, Settings,
  Hash, AlignLeft, MoveHorizontal, MoveVertical,
  RotateCw, MousePointer2, FlaskConical, Globe, LineChart
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-emerald-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
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

const MplLabels: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-950/20 min-h-screen font-sans">
      
      {/* 1. Header & Intro */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <Type className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Labels
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
           Providing clarity and context by explaining the data axes of your visualizations.
        </p>
      </header>

      {/* 1 & 2. Intro and Importance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-emerald-500" /> 1. Introduction
          </h2>
          <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                In Matplotlib, <strong>Labels</strong> are used to describe different parts of a graph, specifically the horizontal (X) and vertical (Y) axes.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/40">
                <p className="text-emerald-800 dark:text-emerald-300 text-sm font-bold mb-2 uppercase tracking-wider underline">Simple Definition:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    Text descriptions that explain what the data ranges on the axes actually represent.
                </p>
              </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
              <AlignLeft size={150} />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-yellow-500" /> 2. Why Labels Matter
          </h2>
          <div className="space-y-4 relative z-10">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Without labels, a graph is just a collection of dots or lines. Labels turn raw visualization into a meaningful story.
              </p>
              <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-xl">
                      <p className="text-[10px] font-bold text-red-400 uppercase mb-2">No Labels (Confusing)</p>
                      <pre className="text-[10px] font-mono leading-none text-red-500/60">
{`   *
      *
 *`}
                      </pre>
                  </div>
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-xl">
                      <p className="text-[10px] font-bold text-emerald-400 uppercase mb-2">With Labels (Clear)</p>
                      <pre className="text-[10px] font-mono leading-none text-emerald-500">
{`Sales
30 |      *
20 |   *
10 | *
   ------------------
    Jan Feb Mar`}
                      </pre>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Types & Functions */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
              <h2 className="text-3xl font-black mb-10 flex items-center border-b border-slate-700 pb-4">
                  <Terminal className="w-8 h-8 mr-4 text-emerald-400" /> 3 & 4. Label Types & Functions
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-8">
                    <div>
                        <h3 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">Primary Axis Labels</h3>
                        <ResultTable 
                            headers={['Label Type', 'Description']}
                            rows={[
                                [<span className="font-bold">X-axis Label</span>, 'Describes the horizontal axis data'],
                                [<span className="font-bold">Y-axis Label</span>, 'Describes the vertical axis data']
                            ]}
                        />
                    </div>
                    <div>
                        <h3 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">Matplotlib Commands</h3>
                        <div className="space-y-3 font-mono text-sm uppercase">
                            <div className="p-3 bg-emerald-950/30 rounded-lg border border-emerald-500/20 flex justify-between">
                                <span className="text-emerald-200">plt.xlabel()</span>
                                <span className="text-slate-500">Horizontal</span>
                            </div>
                            <div className="p-3 bg-teal-950/30 rounded-lg border border-teal-500/20 flex justify-between">
                                <span className="text-teal-200">plt.ylabel()</span>
                                <span className="text-slate-500">Vertical</span>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p className="text-slate-400 italic text-sm">Pass the descriptive string directly into the function:</p>
                    <CodeSnippetBlock codeSnippet={`plt.xlabel("X-axis label")\nplt.ylabel("Y-axis label")`} title="Syntax" />
                  </div>
              </div>
          </div>
      </section>

      {/* 5 & 6. Basic Example & Visualization */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <LineChart className="w-6 h-6 mr-3 text-emerald-500" /> 5. Basic Label Example
                </h2>
                <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nx = [1,2,3,4]\ny = [10,20,15,25]\n\nplt.plot(x,y)\n\nplt.xlabel("Months")\nplt.ylabel("Sales")\n\nplt.title("Monthly Sales Data")\nplt.show()`} title="Sales Data Script" />
            </div>

            <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center">
                <h3 className="text-xs font-black text-emerald-500 mb-8 uppercase tracking-widest">6. Visual Output Architecture</h3>
                <div className="bg-gray-950 rounded-2xl p-8 sm:p-12 font-mono text-emerald-400 shadow-inner relative overflow-hidden border border-gray-800 w-full flex justify-center transform hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-emerald-600/50 uppercase tracking-[0.3em]">Vertical Axis Label</div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-emerald-600/50 uppercase tracking-[0.3em]">Horizontal Axis Label</div>
<pre className="text-xs sm:text-sm leading-loose">
{`Sales
25 |        *
20 |     *
15 |   *
10 | *
   -----------------------
    1   2   3   4
        Months`}
</pre>
                </div>
                <div className="mt-8 flex space-x-4">
                   <div className="flex items-center text-[10px] font-bold text-gray-400"><MoveHorizontal className="w-3 h-3 mr-1 text-emerald-500" /> Months (X)</div>
                   <div className="flex items-center text-[10px] font-bold text-gray-400"><MoveVertical className="w-3 h-3 mr-1 text-teal-500" /> Sales (Y)</div>
                </div>
            </div>
      </section>

      {/* 7. Customizing Label Appearance */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-black mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <Settings className="w-8 h-8 mr-4 text-emerald-500" /> 7. Label Customization
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Styles are applied using keyword arguments within the label functions.</p>
                    <ResultTable 
                        headers={['Parameter', 'Description']}
                        rows={[
                            [<code className="text-emerald-600 dark:text-emerald-400 font-bold">fontsize</code>, 'Controls text size (e.g., 14, 18)'],
                            [<code className="text-emerald-600 dark:text-emerald-400 font-bold">color</code>, 'Changes text color ("blue", "red")'],
                            [<code className="text-emerald-600 dark:text-emerald-400 font-bold">fontweight</code>, 'Controls bolding ("bold", "normal")']
                        ]}
                    />
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/40">
                        <p className="text-xs text-emerald-700 dark:text-emerald-300 font-bold italic">Example: <code className="text-black dark:text-white ml-2">plt.xlabel("Months", fontsize=14, color="blue")</code></p>
                    </div>
                  </div>
                  <CodeSnippetBlock codeSnippet={`# Bold and Big Labels\nplt.xlabel("Months", fontweight="bold")\n\n# Colorful Labels\nplt.ylabel("Sales", fontsize=14, color="green")`} title="Style Examples" />
              </div>
          </div>
      </section>

      {/* 8. Label Rotation */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <RotateCw className="w-6 h-6 mr-3 text-emerald-500" /> 8. Label Rotation
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium leading-relaxed">
                    Essential when labels are long or space is limited on the canvas.
                </p>
                <div className="bg-slate-900 rounded-xl p-4 w-full mb-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:rotate-45 transition-transform duration-700">
                        <RotateCw size={100} className="text-emerald-400" />
                    </div>
                    <code className="text-emerald-300 font-mono italic">plt.xlabel("Months", rotation=45)</code>
                </div>
                <div className="flex space-x-4 w-full">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl flex-grow border border-emerald-100 dark:border-emerald-800/30">
                        <p className="text-[10px] font-black text-emerald-500 uppercase mb-1">Use Case 1</p>
                        <p className="text-[11px] text-gray-500">Long Category Names</p>
                    </div>
                    <div className="p-3 bg-teal-50 dark:bg-teal-900/10 rounded-xl flex-grow border border-teal-100 dark:border-teal-800/30">
                        <p className="text-[10px] font-black text-teal-500 uppercase mb-1">Use Case 2</p>
                        <p className="text-[11px] text-gray-500">Dense Datasets</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-12 flex flex-col items-center justify-center relative overflow-hidden border border-slate-800">
                <div className="flex items-end space-x-4 border-b border-slate-700 pb-4 mb-4">
                    <div className="w-1 h-32 bg-emerald-500/20"></div>
                    <div className="w-1 h-32 bg-emerald-500/20"></div>
                    <div className="w-1 h-32 bg-emerald-500/20"></div>
                </div>
                <div className="flex space-x-6 text-emerald-400/80 font-mono text-[10px]">
                    <span className="rotate-45 -translate-x-2">Category_A_Label</span>
                    <span className="rotate-45 -translate-x-2">Category_B_Label</span>
                    <span className="rotate-45 -translate-x-2">Category_C_Label</span>
                </div>
                <p className="mt-12 text-[10px] text-slate-500 font-bold tracking-tighter uppercase italic">Simulated rotated x-tick labels</p>
            </div>
      </section>

      {/* 9 & 10. Bar Charts with Labels */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                            <BarChart2 className="w-6 h-6 mr-3 text-emerald-500" /> 9 & 10. Labels in Bar Charts
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">Labels are exceptionally useful in categorical bar charts to define groups and measurement metrics.</p>
                        <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800 shadow-inner mb-6">
                            <p className="text-xs font-black text-emerald-500 mb-4 uppercase tracking-widest text-center">Labeled Bar Visual</p>
<pre className="text-[10px] sm:text-xs font-mono text-emerald-300 leading-relaxed text-center">
{`Marks
90 |       █
80 |   █
70 |           █
60 |      █
   ----------------
    A  B  C  D
     Students`}
</pre>
                        </div>
                    </div>
                    <CodeSnippetBlock codeSnippet={`students = ["A","B","C","D"]\nmarks = [80,65,90,70]\n\nplt.bar(students, marks)\n\nplt.xlabel("Students")\nplt.ylabel("Marks")\n\nplt.title("Student Performance")\nplt.show()`} title="Categorical Labeled Plot" />
                </div>
          </div>
      </section>

      {/* 11. Real World Applications */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl text-white text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]"></div>
               <h2 className="text-3xl font-black mb-10 pb-4 border-b border-white/20 relative z-10">
                   11. Real World Applications
               </h2>
               
               <div className="grid md:grid-cols-3 gap-8 relative z-10 text-left">
                   
                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform group">
                       <h3 className="font-bold text-emerald-200 flex items-center mb-4 text-lg">
                           <Briefcase className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" /> Business Reports
                       </h3>
                       <p className="text-sm text-emerald-50 leading-relaxed">
                            Visualizing <strong>Revenue vs Month</strong>. Essential for stakeholder comprehension.
                       </p>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform group">
                       <h3 className="font-bold text-teal-200 flex items-center mb-4 text-lg">
                           <FlaskConical className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" /> Scientific Research
                       </h3>
                       <p className="text-sm text-teal-50 leading-relaxed">
                            Tracking <strong>Temperature vs Time</strong>. Precise labels are mandatory for validation.
                       </p>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform group">
                       <h3 className="font-bold text-sky-200 flex items-center mb-4 text-lg">
                           <Globe className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" /> Machine Learning
                       </h3>
                       <p className="text-sm text-sky-50 leading-relaxed">
                            Plotting <strong>Epoch vs Accuracy</strong>. Defines the success metrics of training models.
                       </p>
                   </div>

               </div>

               <div className="mt-12 flex flex-col items-center relative z-10">
                  <div className="flex flex-wrap justify-center items-center gap-4 bg-emerald-950/40 backdrop-blur-sm p-6 rounded-3xl border border-emerald-400/30 font-bold">
                    <span className="text-emerald-300">Raw Data</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span className="text-emerald-300">Create Graph</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span className="text-emerald-300 ring-2 ring-emerald-400 px-3 py-1 rounded-full bg-emerald-500 shadow-lg text-white">Add Labels</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span className="text-teal-400">Clear Visualization</span>
                  </div>
               </div>
          </div>
      </section>

    </div>
  );
};

export default MplLabels;
