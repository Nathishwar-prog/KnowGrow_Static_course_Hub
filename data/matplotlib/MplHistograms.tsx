<<<<<<< Updated upstream
import React from 'react';

export default function MplHistograms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-4">MplHistograms</h2>
        <p className="text-gray-400">
          Placeholder for MplHistograms content.
        </p>
      </div>
    </div>
  );
}
=======
import React, { useState } from 'react';
import {
  BarChart3, Copy, Check, Info, ArrowRight,
  Maximize2, Terminal, Eye, Layout, 
  Activity, Code, List, BarChart2,
  TrendingUp, Briefcase, Zap, Settings,
  Hash, AlignLeft, MoveHorizontal, MoveVertical,
  Stethoscope, PieChart, FlaskConical, Scale, Tablet,
  Grid, Cpu
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-violet-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
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

const MplHistograms: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-950/20 min-h-screen font-sans">
      
      {/* 1. Header & Intro */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <BarChart3 className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Histograms
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
           Visualizing the distribution of numerical data through frequency-based intervals.
        </p>
      </header>

      {/* 1 & 2. Intro and Importance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-violet-500" /> 1. Introduction
          </h2>
          <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                A <strong>Histogram</strong> is used to show the distribution of numerical data. Instead of showing individual points, it groups data into intervals called <strong>bins</strong>.
              </p>
              <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-100 dark:border-violet-800/40">
                <p className="text-violet-800 dark:text-violet-300 text-sm font-bold mb-2 uppercase tracking-wider underline">The Concept:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    Displays how frequently values occur within specific ranges, providing a "bird's eye view" of dataset density.
                </p>
              </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
              <Activity size={150} />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-yellow-500" /> 2. Why Histograms Matter
          </h2>
          <div className="space-y-4 relative z-10">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Histograms are vital for detecting patterns, spreads, and frequency in datasets.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Dataset (Scores)</p>
                  <p className="text-xs font-mono text-violet-500 break-all leading-relaxed">
                    45, 50, 52, 55, 60, 62, 65, 70, 72, 75, 80
                  </p>
              </div>
              <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-gray-500 uppercase">
                  <li className="flex items-center"><Check className="w-3 h-3 text-green-500 mr-2" /> Distribution</li>
                  <li className="flex items-center"><Check className="w-3 h-3 text-green-500 mr-2" /> Data Spread</li>
                  <li className="flex items-center"><Check className="w-3 h-3 text-green-500 mr-2" /> Frequency</li>
                  <li className="flex items-center"><Check className="w-3 h-3 text-green-500 mr-2" /> Pattern Detection</li>
              </ul>
          </div>
        </div>
      </section>

      {/* 3. Example of Histogram Bins */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl -z-10"></div>
              <h2 className="text-3xl font-black mb-10 flex items-center border-b border-slate-700 pb-4">
                  <Hash className="w-8 h-8 mr-4 text-violet-400" /> 3. Histogram Bins
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <p className="text-lg text-slate-300 font-medium leading-relaxed">Bins divide your data into uniform ranges. Frequency tracks how many samples fall into each.</p>
                    <ResultTable 
                        headers={['Score Range', 'Frequency']}
                        rows={[
                            ['40 – 50', <span className="text-violet-400 font-bold">2</span>],
                            ['50 – 60', <span className="text-violet-400 font-bold">3</span>],
                            ['60 – 70', <span className="text-violet-400 font-bold">3</span>],
                            ['70 – 80', <span className="text-violet-400 font-bold">2</span>],
                            ['80 – 90', <span className="text-violet-400 font-bold">1</span>]
                        ]}
                    />
                  </div>
                  
                  <div className="bg-black/30 p-8 rounded-3xl border border-slate-700/50 shadow-inner">
                      <p className="text-xs font-black text-violet-400 mb-6 uppercase tracking-widest text-center">Bin Visualization</p>
                      <div className="flex flex-col items-center">
                          <pre className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
{`Frequency
3 |      █
2 |  █   █   █
1 |      █   █   █
   ---------------------
   40  50  60  70  80
       Score Range`}
                          </pre>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4 & 5. Function & Basic Example */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <Terminal className="w-6 h-6 mr-3 text-violet-500" /> 4 & 5. plt.hist() Function
                </h2>
                <div className="bg-violet-50 dark:bg-violet-950/20 p-4 rounded-xl border border-violet-100 dark:border-violet-800/40 mb-6 w-full">
                    <p className="text-xs font-bold text-violet-800 dark:text-violet-400 mb-2 uppercase tracking-tighter italic">Library Command</p>
                    <code className="text-xl font-mono text-violet-600 dark:text-violet-300">plt.hist(data)</code>
                </div>
                <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\ndata = [45,50,52,55,60,62,65,70,72,75,80]\n\nplt.hist(data)\n\nplt.title("Student Score Distribution")\nplt.show()`} title="Basic Score Histogram" />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <List className="w-6 h-6 mr-3 text-violet-500" /> Parameter Details
                </h2>
                <ResultTable 
                    headers={['Parameter', 'Description']}
                    rows={[
                        [<code className="text-violet-600 font-bold">data</code>, 'The input dataset values'],
                        [<code className="text-violet-600 font-bold">bins</code>, 'Number of intervals'],
                        [<code className="text-violet-600 font-bold">color</code>, 'Bar fill color'],
                        [<code className="text-violet-600 font-bold">edgecolor</code>, 'Border color for bins']
                    ]}
                />
                <div className="p-4 bg-violet-50 dark:bg-violet-900/10 rounded-xl border border-violet-100 dark:border-violet-800/40 w-full">
                    <p className="text-xs text-violet-700 dark:text-violet-400 font-bold">💡 Matplotlib automatically calculates bin sizes if not specified.</p>
                </div>
            </div>
      </section>

      {/* 6. Visualization of Histogram */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-200 dark:border-gray-700 text-center">
                 <h2 className="text-3xl font-black mb-8 pb-4 border-b border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white inline-block px-12">
                     6. Visual Output Analysis
                 </h2>
                 <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                     <div className="bg-gray-950 rounded-2xl p-10 font-mono text-violet-400 text-sm shadow-inner border border-gray-800">
<pre className="leading-relaxed">
{`Frequency
3 |      █
2 |  █   █   █
1 |      █   █   █
   ---------------------
   40  50  60  70  80
       Score Range`}
</pre>
                     </div>
                     <div className="text-left max-w-sm space-y-4">
                         <div className="flex items-start">
                             <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mr-4 shrink-0 font-bold text-violet-500 italic text-xs">Y</div>
                             <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-bold underline decoration-violet-500/20 underline-offset-4">Y-Axis represents "Frequency" (count of occurrences).</p>
                         </div>
                         <div className="flex items-start">
                             <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mr-4 shrink-0 font-bold text-violet-500 italic text-xs">X</div>
                             <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-bold underline decoration-violet-500/20 underline-offset-4">X-Axis segments represent "Bins" (data ranges).</p>
                         </div>
                     </div>
                 </div>
          </div>
      </section>

      {/* 7. Setting Number of Bins */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <Grid className="w-6 h-6 mr-3 text-violet-500" /> 7. Tuning the Bin Count
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">Control the resolution of your distribution. More bins unveil finer details.</p>
                <CodeSnippetBlock codeSnippet={`plt.hist(data, bins=5)\n# Groups data into exactly 5 equal-width intervals`} title="Specifying 5 Bins" />
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center border border-slate-800">
                <p className="text-[10px] uppercase font-bold text-violet-400 mb-4 tracking-widest italic">Granular View (5 Bins)</p>
<pre className="text-xs font-mono text-slate-300 leading-none">
{`Frequency
3 |     █
2 | █   █
1 | █   █   █
   ------------------
   40 50 60 70 80`}
</pre>
            </div>
      </section>

      {/* 8 & 9. Color and Borders */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Settings className="w-6 h-6 mr-3 text-violet-500" /> 8 & 9. Style Customization
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">Enhance visual clarity by adding fill colors and distinct borders to each bin.</p>
                <div className="space-y-4 mb-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/40 rounded-xl">
                        <code className="text-green-700 dark:text-green-400 font-bold italic">color="green"</code>
                    </div>
                </div>
                <CodeSnippetBlock codeSnippet={`plt.hist(data, bins=5, color="blue", edgecolor="black")`} title="High-Contrast Histogram" />
            </div>

            <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center">
                <div className="flex space-x-1 items-end h-32">
                    <div className="w-8 h-20 bg-blue-500 border border-black shadow-lg"></div>
                    <div className="w-8 h-28 bg-blue-500 border border-black shadow-lg"></div>
                    <div className="w-8 h-12 bg-blue-500 border border-black shadow-lg"></div>
                </div>
                <p className="mt-8 text-xs font-bold text-gray-400 uppercase tracking-widest text-center shadow-sm py-1 px-4 bg-white dark:bg-gray-800 rounded-full">edgecolor="black"</p>
            </div>
      </section>

      {/* 10. Random Data */}
      <section className="max-w-6xl mx-auto mb-16 px-8 py-12 bg-slate-900 rounded-[2.5rem] shadow-2xl text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl font-black mb-6 flex items-center border-b border-slate-800 pb-4">
                      <Cpu className="w-8 h-8 mr-4 text-violet-400" /> 10. Histogram with Random Data
                  </h2>
                  <p className="text-lg text-slate-300 mb-6">Histograms shine when dealing with massive datasets, often used to verify if a dataset follows a particular statistical distribution (like Normal/Bell curve).</p>
                  <div className="p-4 bg-violet-950/30 rounded-xl border border-violet-500/20">
                     <p className="text-xs font-bold text-violet-400 mb-1 uppercase tracking-widest">Logic Breakdown</p>
                     <p className="text-sm text-slate-400 leading-relaxed italic">
                        <code className="text-violet-300 font-bold">np.random.normal()</code> creates the data points, and the histogram renders the pattern.
                     </p>
                  </div>
              </div>
              <CodeSnippetBlock codeSnippet={`import numpy as np\n\ndata = np.random.normal(50, 10, 100)\n\nplt.hist(data, bins=10)\n\nplt.title("Random Data Distribution")\nplt.show()`} title="Simulated Distribution" />
          </div>
      </section>

      {/* 11. Real World Applications */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-violet-600 to-purple-800 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl text-white text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.1),transparent)]"></div>
               <h2 className="text-3xl font-black mb-10 pb-4 border-b border-white/20 relative z-10">
                   11. Real World Applications
               </h2>
               
               <div className="grid md:grid-cols-4 gap-6 relative z-10 text-left">
                   
                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-violet-200 flex items-center mb-4">
                           <FlaskConical className="w-5 h-5 mr-3" /> Data Science
                       </h3>
                       <p className="text-[11px] text-violet-50 leading-relaxed italic uppercase font-bold">Understanding dataset distribution for cleaning.</p>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-purple-200 flex items-center mb-4">
                           <Layout className="w-5 h-5 mr-3" /> Machine Learning
                       </h3>
                       <p className="text-[11px] text-purple-50 leading-relaxed italic uppercase font-bold">Analyzing features in training data sets.</p>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-pink-200 flex items-center mb-4">
                           <Scale className="w-5 h-5 mr-3" /> Finance
                       </h3>
                       <p className="text-[11px] text-pink-50 leading-relaxed italic uppercase font-bold">Visualizing stock market return distribution.</p>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-blue-200 flex items-center mb-4">
                           <Stethoscope className="w-5 h-5 mr-3" /> Healthcare
                       </h3>
                       <p className="text-[11px] text-blue-50 leading-relaxed italic uppercase font-bold">Tracking patient age or heart rate ranges.</p>
                   </div>

               </div>

               <div className="mt-12 flex flex-col items-center relative z-10">
                  <div className="flex flex-wrap justify-center items-center gap-4 bg-violet-950/40 backdrop-blur-sm p-4 rounded-3xl border border-violet-500/30 text-xs sm:text-sm font-bold uppercase tracking-widest text-violet-200">
                    <span>Raw Data</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span>Histogram</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span className="text-white bg-violet-500 px-4 py-1 rounded-full shadow-lg">Understand Pattern</span>
                    <ArrowRight size={14} className="text-white/40" />
                    <span className="text-green-400">Decision Making</span>
                  </div>
               </div>
          </div>
      </section>

    </div>
  );
};

export default MplHistograms;
>>>>>>> Stashed changes
