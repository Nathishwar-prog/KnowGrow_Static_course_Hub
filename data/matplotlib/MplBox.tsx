<<<<<<< Updated upstream
import React from 'react';

export default function MplBox() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-4">MplBox</h2>
        <p className="text-gray-400">
          Placeholder for MplBox content.
        </p>
      </div>
    </div>
  );
}
=======
import React, { useState } from 'react';
import {
  Box, Copy, Check, Info, ArrowRight,
  Maximize2, Terminal, Eye, Palette, 
  Activity, Code, List, BarChart2,
  TrendingUp, HeartPulse, Briefcase, Cpu
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-amber-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-amber-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
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

const MplBox: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950/20 min-h-screen font-sans">
      
      {/* 1. Header & Intro */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <Box className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Box Plot
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
           Visualizing data distribution and detecting outliers with Box-and-Whisker plots.
        </p>
      </header>

      {/* 1 & 2. Intro and Importance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-amber-500" /> 1. Introduction
          </h2>
          <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                A <strong>Box Plot</strong> (also called a Box-and-Whisker Plot) is a statistical chart used to show the distribution of numerical data.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-100 dark:border-amber-800/40">
                <p className="text-amber-800 dark:text-amber-300 text-sm font-bold mb-2 uppercase tracking-wider">It helps to visualize:</p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Median</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Quartiles</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Min Value</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Max Value</li>
                    <li className="flex items-center col-span-2"><Check className="w-4 h-4 text-green-500 mr-2" /> Outliers</li>
                </ul>
              </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <BarChart2 className="w-6 h-6 mr-3 text-orange-500" /> 2. Why Box Plots Are Important
          </h2>
          <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Box plots are essential tools for data analysts to understand the characteristics of their datasets quickly.
              </p>
              <ul className="space-y-3">
                  <li className="flex items-start">
                      <div className="p-1 bg-orange-100 dark:bg-orange-900/40 rounded-md mr-3 mt-1">
                          <Activity size={14} className="text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Understanding data spread</span>
                  </li>
                  <li className="flex items-start">
                      <div className="p-1 bg-orange-100 dark:bg-orange-900/40 rounded-md mr-3 mt-1">
                          <Activity size={14} className="text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Detecting outliers</span>
                  </li>
                  <li className="flex items-start">
                      <div className="p-1 bg-orange-100 dark:bg-orange-900/40 rounded-md mr-3 mt-1">
                          <Activity size={14} className="text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Comparing multiple datasets</span>
                  </li>
              </ul>
              
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">Example Case: Student Exam Scores</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">50, 60, 65, 70, 75, 80, 85, 90</p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 font-bold">A box plot quickly shows median, range, and unusual values.</p>
              </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Structure and Visualization */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
              
              <h2 className="text-3xl font-black mb-10 flex items-center border-b border-slate-700 pb-4">
                  <Maximize2 className="w-8 h-8 mr-3 text-amber-400" /> 3 & 4. Structure & Visualization
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                      <h3 className="text-xl font-bold flex items-center text-amber-100 mb-6">Statistical Elements</h3>
                      <ResultTable 
                        headers={['Element', 'Meaning']}
                        rows={[
                            [<span className="text-amber-400 font-bold">Minimum</span>, 'Lowest value'],
                            [<span className="text-amber-400 font-bold">Q1</span>, 'First quartile (25%)'],
                            [<span className="text-amber-400 font-bold">Median</span>, 'Middle value (50%)'],
                            [<span className="text-amber-400 font-bold">Q3</span>, 'Third quartile (75%)'],
                            [<span className="text-amber-400 font-bold">Maximum</span>, 'Highest value']
                        ]}
                      />
                  </div>
                  
                  <div className="flex flex-col">
                      <h3 className="text-xl font-bold flex items-center text-amber-100 mb-6 font-sans">Box Plot Diagram</h3>
                      <div className="bg-black/40 rounded-2xl p-6 border border-slate-700 flex-grow flex items-center justify-center">
                          <pre className="font-mono text-amber-300 text-xs sm:text-sm leading-relaxed overflow-x-auto text-center w-full">
{`Minimum   Q1     Median    Q3    Maximum
   |-------|-------|-------|-------|
           ┌───────────────┐
           │               │
-----------│       │       │-----------
           │               │
           └───────────────┘`}
                          </pre>
                      </div>
                      <div className="mt-6 bg-slate-800/50 p-4 rounded-xl text-sm border border-slate-700">
                          <ul className="space-y-2 text-slate-300">
                              <li><span className="text-amber-400 font-bold">• The box</span> shows the <strong>interquartile range</strong> (Q1 to Q3).</li>
                              <li><span className="text-amber-400 font-bold">• The line inside</span> represents the <strong>median</strong>.</li>
                              <li><span className="text-amber-400 font-bold">• The whiskers</span> show the range between <strong>min</strong> and <strong>max</strong>.</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. Matplotlib Box Plot Function */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
           
           <h2 className="text-3xl font-black mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
               <Terminal className="w-8 h-8 mr-3 text-amber-500" /> 5. Matplotlib Box Plot Function
           </h2>
           
           <div className="grid lg:grid-cols-12 gap-8 items-start">
               <div className="lg:col-span-5 relative z-10">
                   <p className="text-gray-600 dark:text-gray-300 mb-4">Matplotlib provides the function <code className="bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 px-1 font-bold rounded">plt.boxplot()</code>.</p>
                   <CodeSnippetBlock codeSnippet={`plt.boxplot(data)`} title="Syntax" />
               </div>
               
               <div className="lg:col-span-7">
                   <ResultTable 
                       headers={['Parameter', 'Description']}
                       rows={[
                           [<code className="text-amber-600 dark:text-amber-400 font-bold">data</code>, 'List or dataset to visualize'],
                           [<code className="text-amber-600 dark:text-amber-400 font-bold">vert</code>, 'Orientation (Vertical by default, set False for Horizontal)'],
                           [<code className="text-amber-600 dark:text-amber-400 font-bold">patch_artist</code>, 'Set to True to fill the box with color']
                       ]}
                   />
               </div>
           </div>
        </div>
      </section>

      {/* 6 & 7. Basic Example and Output */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Code className="w-6 h-6 mr-3 text-amber-500" /> 6. Basic Box Plot Example
                </h2>
                <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\ndata = [50, 60, 65, 70, 75, 80, 85, 90]\n\nplt.boxplot(data)\n\nplt.title("Student Score Distribution")\n\nplt.show()`} title="Python Code" />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Eye className="w-6 h-6 mr-3 text-orange-500" /> 7. Visualization Output
                </h2>
                
                <div className="bg-gray-950 rounded-xl p-6 font-mono text-amber-400 text-xs sm:text-sm overflow-x-auto shadow-inner mb-6 whitespace-pre leading-tight border border-gray-800 flex-grow items-center justify-center flex">
{`Scores
90 |           ─
85 |
80 |     ┌───────┐
75 |     │       │
70 |     │   │   │
65 |     │       │
60 |     └───────┘
55 |
50 |           ─`}
                </div>
                
                <div className="mt-auto bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-800/40">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Key Observations</p>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                        <li className="flex items-center"><ArrowRight size={12} className="mr-2 text-amber-500" /> The middle line is the <strong>Median</strong>.</li>
                        <li className="flex items-center"><ArrowRight size={12} className="mr-2 text-amber-500" /> The box shows the <strong>middle 50%</strong> of data.</li>
                    </ul>
                </div>
            </div>
      </section>

      {/* 8 & 9. Multiple Datasets */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-black mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <List className="w-8 h-8 mr-3 text-amber-500" /> 8 & 9. Box Plot for Multiple Datasets
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Box plots are extremely useful when you need to <strong>compare distributions</strong> across different groups or classes.
              </p>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nclass1 = [50, 60, 65, 70, 75]\nclass2 = [55, 65, 75, 85, 95]\nclass3 = [40, 50, 60, 70, 80]\n\ndata = [class1, class2, class3]\n\nplt.boxplot(data)\nplt.title("Class Score Comparison")\nplt.show()`} title="Comparing Classes Code" />
                  </div>
                  
                  <div className="flex flex-col space-y-6">
                      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-inner">
                          <p className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest text-center">Score Comparison Output</p>
                          <pre className="font-mono text-amber-400 text-xs sm:text-sm leading-loose text-center">
{`Scores

Class1      Class2      Class3
  │           │           │
 ┌───┐       ┌───┐       ┌───┐
 │ │ │       │ │ │       │ │ │
 └───┘       └───┘       └───┘`}
                          </pre>
                      </div>
                      <p className="text-center font-bold text-gray-500 dark:text-gray-400 italic">This allows easy comparison of score distributions between multiple classes.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 10 & 11. Horizontal and Colored Plots */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Maximize2 className="w-6 h-6 mr-3 text-amber-500 translate-rotate-90" /> 10. Horizontal Box Plot
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">Display the box plot horizontally using <code className="bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 px-1 font-bold rounded">vert=False</code>.</p>
                    <CodeSnippetBlock codeSnippet={`plt.boxplot(data, vert=False)`} title="Orientation Change" />
                    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-amber-400 font-mono text-xs overflow-x-auto select-none leading-loose">
{`Class1  ──────[  │  ]──────
Class2  ─────[  │  ]────────
Class3  ────[  │  ]────────`}
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Palette className="w-6 h-6 mr-3 text-orange-500" /> 11. Colored Box Plot
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">Add fill color to the box using <code className="bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 px-1 font-bold rounded">patch_artist=True</code>.</p>
                    <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\ndata = [50,60,65,70,75,80,85]\n\nplt.boxplot(data, patch_artist=True)\n\nplt.title("Colored Box Plot")\nplt.show()`} title="Styling Box" />
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-800/40 flex items-center">
                        <Info size={18} className="text-orange-500 mr-3 shrink-0" />
                        <p className="text-sm text-gray-700 dark:text-gray-300">Enabling <code className="font-bold">patch_artist</code> allows deeper customization of colors and borders.</p>
                    </div>
                </div>
            </div>
      </section>

      {/* 12. Detecting Outliers */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]"></div>
             
             <h2 className="text-3xl font-black mb-10 flex items-center relative z-10 border-b border-white/20 pb-4">
                 <Activity className="w-8 h-8 mr-3 text-amber-200" /> 12. Detecting Outliers
             </h2>
             
             <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                 <div className="space-y-6">
                     <p className="text-lg text-amber-50">
                        Box plots automatically detect and highlight <strong>outliers</strong> — data points that are significantly different from the rest of the observations.
                     </p>
                     <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <p className="text-xs uppercase font-bold text-amber-200 mb-2">Example Dataset</p>
                        <p className="font-mono text-xl">50, 55, 60, 65, 70, <span className="text-red-300 font-black underline">200</span></p>
                     </div>
                 </div>
                 
                 <div className="bg-gray-900 rounded-3xl p-8 border border-white/10 shadow-inner flex flex-col items-center">
                    <pre className="font-mono text-amber-400 text-sm leading-relaxed mb-4 text-center">
{`        *
        |  ← Outlier
 ┌──────────────┐
 │      │       │
 └──────────────┘`}
                    </pre>
                    <p className="text-sm text-gray-400 font-medium bg-gray-950 px-4 py-2 rounded-full border border-gray-800">
                       Outliers appear as <span className="text-amber-400">dots/asterisks</span> outside the whiskers.
                    </p>
                 </div>
             </div>
          </div>
      </section>

      {/* 13. Real World Applications */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden text-center">
               <h2 className="text-3xl font-black mb-8 pb-4 text-gray-900 dark:text-white relative z-10">
                   13. Real World Applications
               </h2>
               <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">Box plots are widely used tools for identifying trends and anomalies across industries.</p>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 text-left">
                   
                   <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-blue-800 dark:text-blue-300 flex items-center mb-4">
                           <TrendingUp className="w-5 h-5 mr-2" /> Data Science
                       </h3>
                       <p className="text-sm font-bold text-blue-900 dark:text-blue-100 bg-blue-100 dark:bg-blue-800/50 p-2 rounded text-center">Compare Dataset Distributions</p>
                   </div>

                   <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-4">
                           <HeartPulse className="w-5 h-5 mr-2" /> Healthcare
                       </h3>
                       <p className="text-sm font-bold text-emerald-900 dark:text-emerald-100 bg-emerald-100 dark:bg-emerald-800/50 p-2 rounded text-center">Analyze Patient Statistics</p>
                   </div>

                   <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-indigo-800 dark:text-indigo-300 flex items-center mb-4">
                           <Briefcase className="w-5 h-5 mr-2" /> Business Analytics
                       </h3>
                       <p className="text-sm font-bold text-indigo-900 dark:text-indigo-100 bg-indigo-100 dark:bg-indigo-800/50 p-2 rounded text-center">Compare Product Sales</p>
                   </div>
                   
                   <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-100 dark:border-purple-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-purple-800 dark:text-purple-300 flex items-center mb-4">
                           <Cpu className="w-5 h-5 mr-2" /> Machine Learning
                       </h3>
                       <p className="text-sm font-bold text-purple-900 dark:text-purple-100 bg-purple-100 dark:bg-purple-800/50 p-2 rounded text-center">Compare Model Performance</p>
                   </div>

               </div>

               <div className="mt-12 flex flex-col items-center">
                  <div className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <span className="text-gray-700 dark:text-gray-300 font-bold">Raw Data</span>
                    <ArrowRight className="text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-bold">Statistical Analysis</span>
                    <ArrowRight className="text-gray-400" />
                    <span className="text-amber-500 font-black">Box Plot Visualization</span>
                  </div>
               </div>
          </div>
      </section>

    </div>
  );
};

export default MplBox;
>>>>>>> Stashed changes
