import React, { useState } from 'react';
import {
  Palette, Copy, Check, Info, ArrowRight,
  Maximize2, Terminal, Eye, Palette as ColorIcon, 
  Activity, Code, List, BarChart2,
  TrendingUp, Briefcase, Zap, Type, 
  Layers, Presentation
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

const MplColors: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-emerald-950/20 min-h-screen font-sans">
      
      {/* 1. Header & Intro */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <Palette className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Colors
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
           Changing the appearance of lines, bars, markers, and backgrounds with rich color controls.
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
                In Matplotlib, colors are used to customize and enhance the appearance of charts and graphs.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/40">
                <p className="text-emerald-800 dark:text-emerald-300 text-sm font-bold mb-2 uppercase tracking-wider">Colors help make graphs:</p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><Check className="w-4 h-4 text-emerald-500 mr-2" /> More readable</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-emerald-500 mr-2" /> Visually attractive</li>
                    <li className="flex items-center col-span-2"><Check className="w-4 h-4 text-emerald-500 mr-2" /> Easy to interpret</li>
                </ul>
              </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
              <ColorIcon size={120} />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-yellow-500" /> 2. Importance of Colors
          </h2>
          <div className="space-y-4 relative z-10">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Colors help users quickly identify patterns and differences in data, turning a plain chart into a clear story.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Without Colors</p>
                      <ul className="space-y-1 text-xs font-mono">
                          <li>A █ (Gray)</li>
                          <li>B █ (Gray)</li>
                          <li>C █ (Gray)</li>
                      </ul>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">With Colors</p>
                      <ul className="space-y-1 text-xs font-mono">
                          <li className="text-red-500">A █ (Red)</li>
                          <li className="text-blue-500">B █ (Blue)</li>
                          <li className="text-green-500">C █ (Green)</li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. How to Use & Basic Example */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Code className="w-6 h-6 mr-3 text-emerald-500" /> 3 & 4. How to Use Colors
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
                    Colors can be applied to almost any plot element: lines, bars, markers, or backgrounds.
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-xl mb-6">
                    <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400 mb-2 uppercase">Syntax</p>
                    <code className="text-lg font-mono text-emerald-600 dark:text-emerald-300">plt.plot(x, y, color="red")</code>
                </div>
                <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nx = [1,2,3,4]\ny = [10,20,15,25]\n\nplt.plot(x, y, color="blue")\nplt.title("Line Plot with Color")\nplt.show()`} title="Basic Example" />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Eye className="w-6 h-6 mr-3 text-teal-500" /> 5. Visualization Example
                </h2>
                
                <div className="bg-gray-950 rounded-xl p-8 font-mono text-emerald-400 text-xs sm:text-sm overflow-x-auto shadow-inner mb-6 whitespace-pre leading-loose border border-gray-800 flex-grow items-center justify-center flex">
{`Y
25 |         *
20 |      *
15 |    *
10 |  *
   ------------------
    1  2  3  4
      (Blue Line)`}
                </div>
                
                <div className="mt-auto bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/40">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Explanation</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                        The parameter <code className="bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-200 px-1 rounded font-bold">color="blue"</code> explicitly tells Matplotlib to render the line segment connecting markers in blue.
                    </p>
                </div>
            </div>
      </section>

      {/* 6. Common Colors & Short Codes */}
      <section className="max-w-6xl mx-auto mb-16 px-4 py-12 bg-slate-900 rounded-[2.5rem] shadow-2xl text-white">
          <h2 className="text-3xl font-black mb-10 flex items-center border-b border-slate-800 pb-4">
              <List className="w-8 h-8 mr-4 text-emerald-400" /> 6 & 7. Color Names & Short Codes
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
              <div>
                  <h3 className="text-xl font-bold text-emerald-300 mb-6 flex items-center">
                    Full Color Names
                  </h3>
                  <ResultTable 
                    headers={['Color', 'Usage']}
                    rows={[
                        [<div className="flex items-center"><div className="w-4 h-4 rounded-full bg-red-500 mr-2 border border-white/20"></div>red</div>, <code className="text-emerald-400">color="red"</code>],
                        [<div className="flex items-center"><div className="w-4 h-4 rounded-full bg-blue-500 mr-2 border border-white/20"></div>blue</div>, <code className="text-emerald-400">color="blue"</code>],
                        [<div className="flex items-center"><div className="w-4 h-4 rounded-full bg-green-500 mr-2 border border-white/20"></div>green</div>, <code className="text-emerald-400">color="green"</code>],
                        [<div className="flex items-center"><div className="w-4 h-4 rounded-full bg-yellow-500 mr-2 border border-white/20"></div>yellow</div>, <code className="text-emerald-400">color="yellow"</code>],
                        [<div className="flex items-center"><div className="w-4 h-4 rounded-full bg-purple-500 mr-2 border border-white/20"></div>purple</div>, <code className="text-emerald-400">color="purple"</code>],
                        [<div className="flex items-center"><div className="w-4 h-4 rounded-full bg-black mr-2 border border-white/20"></div>black</div>, <code className="text-emerald-400">color="black"</code>]
                    ]}
                  />
              </div>

              <div>
                  <h3 className="text-xl font-bold text-emerald-300 mb-6 flex items-center">
                    Single-Letter Short Codes
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                      {[
                        { code: 'r', label: 'Red' }, { code: 'g', label: 'Green' },
                        { code: 'b', label: 'Blue' }, { code: 'c', label: 'Cyan' },
                        { code: 'm', label: 'Magenta' }, { code: 'y', label: 'Yellow' },
                        { code: 'k', label: 'Black' }, { code: 'w', label: 'White' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-black/40 border border-slate-700 p-4 rounded-2xl flex items-center justify-between group hover:border-emerald-500/50 transition-colors">
                            <code className="text-2xl font-black text-emerald-500 group-hover:scale-110 transition-transform">{item.code}</code>
                            <span className="text-slate-400 font-bold">{item.label}</span>
                        </div>
                      ))}
                  </div>
                  <div className="mt-8 p-4 bg-emerald-950/30 rounded-xl border border-emerald-900/50">
                      <p className="text-xs font-bold text-emerald-400 uppercase mb-2">Quick Syntax</p>
                      <code className="text-emerald-300">plt.plot(x, y, 'r')</code>
                      <p className="text-xs text-slate-500 mt-2 italic">This creates a solid red line using only the short code.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 8. HEX Color Codes */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-black mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <Type className="w-8 h-8 mr-4 text-emerald-500" /> 8. Using HEX Color Codes
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        Just like in web development, Matplotlib allows you to use <strong>HEX codes</strong> for precise control over millions of colors.
                      </p>
                      <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/40">
                          <code className="text-xl text-emerald-600 dark:text-emerald-400 font-black">plt.plot(x, y, color="#FF5733")</code>
                      </div>
                  </div>
                  
                  <ResultTable 
                    headers={['HEX Code', 'Color Name']}
                    rows={[
                        [<div className="flex items-center"><div className="w-4 h-4 rounded-full bg-[#FF0000] mr-2 border border-gray-200"></div>#FF0000</div>, 'Pure Red'],
                        [<div className="flex items-center"><div className="w-4 h-4 rounded-full bg-[#00FF00] mr-2 border border-gray-200"></div>#00FF00</div>, 'Pure Green'],
                        [<div className="flex items-center"><div className="w-4 h-4 rounded-full bg-[#0000FF] mr-2 border border-gray-200"></div>#0000FF</div>, 'Pure Blue'],
                        [<div className="flex items-center"><div className="w-4 h-4 rounded-full bg-[#FFFF00] mr-2 border border-gray-200"></div>#FFFF00</div>, 'Pure Yellow']
                    ]}
                  />
              </div>
          </div>
      </section>

      {/* 9 & 10. Multiple Colors and Bar Charts */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            {/* 9. Multiple Elements */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <Layers className="w-6 h-6 mr-3 text-emerald-500" /> 9. Multiple Colors in a Chart
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">different elements (markers, lines) can have distinct styles.</p>
                <CodeSnippetBlock codeSnippet={`plt.plot(x, y, color="red", marker="o")`} title="Red Line + Circle Markers" />
                <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 w-full">
                    <p className="text-xs font-bold text-red-500 mb-1">Visualization Result:</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">──── o ──── o ──── o ────</p>
                </div>
            </div>

            {/* 10. Bar Charts */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <BarChart2 className="w-6 h-6 mr-3 text-emerald-500" /> 10. Colors in Bar Charts
                </h2>
                <CodeSnippetBlock codeSnippet={`students = ["A","B","C","D"]\nmarks = [80,65,90,70]\n\nplt.bar(students, marks, color="green")`} title="Single Bar Color" />
                <div className="bg-emerald-950/40 p-4 rounded-xl font-mono text-emerald-400 text-xs w-full">
{`Marks
90 |       █
80 |   █
70 |           █
60 |      █
   ----------------
    A  B  C  D
   (Green Bars)`}
                </div>
            </div>
      </section>

      {/* 11 & 12. Multiple Colors & Background */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
             {/* 11. Multi-color Bars */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <Presentation className="w-6 h-6 mr-3 text-emerald-500" /> 11. Multiple Colors for Bars
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">Pass a list of colors to apply a unique color to each bar in the set.</p>
                <CodeSnippetBlock codeSnippet={`plt.bar(students, marks, color=["red","blue","green","orange"])`} title="Mixed Colors" />
                <div className="grid grid-cols-4 gap-2 w-full">
                    <div className="h-8 bg-red-500 rounded-md"></div>
                    <div className="h-12 bg-blue-500 rounded-md"></div>
                    <div className="h-16 bg-green-500 rounded-md"></div>
                    <div className="h-10 bg-orange-500 rounded-md"></div>
                </div>
            </div>

            {/* 12. Background Color */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 w-full">
                    <Maximize2 className="w-6 h-6 mr-3 text-emerald-500" /> 12. Changing Background Color
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">Use <code className="bg-gray-100 dark:bg-gray-900 font-bold px-1 rounded">facecolor</code> on the figure to change the surrounding canvas color.</p>
                <div className="p-4 bg-gray-200 dark:bg-gray-700 border-2 border-dashed border-gray-400 dark:border-gray-500 rounded-2xl w-full flex items-center justify-center">
                   <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg border border-gray-300 dark:border-gray-600">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Plot Area</p>
                   </div>
                </div>
                <div className="mt-6 w-full">
                    <CodeSnippetBlock codeSnippet={`plt.figure(facecolor="lightgray")`} title="Background Syntax" />
                </div>
            </div>
      </section>

      {/* 13. Real World Applications */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl text-white text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent)]"></div>
               <h2 className="text-3xl font-black mb-10 pb-4 border-b border-white/20 relative z-10">
                   13. Real World Applications
               </h2>
               
               <div className="grid md:grid-cols-3 gap-8 relative z-10 text-left">
                   
                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-emerald-200 flex items-center mb-4 text-lg">
                           <Briefcase className="w-5 h-5 mr-3" /> Business Dashboards
                       </h3>
                       <div className="flex flex-col space-y-2 text-sm text-emerald-50">
                            <span className="flex items-center"><div className="w-3 h-3 bg-green-500 mr-2 rounded-sm shadow-sm"></div> Revenue Highlights</span>
                            <span className="flex items-center"><div className="w-3 h-3 bg-red-500 mr-2 rounded-sm shadow-sm"></div> Critical Loss Items</span>
                       </div>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-teal-200 flex items-center mb-4 text-lg">
                           <Activity className="w-5 h-5 mr-3" /> Data Science Reports
                       </h3>
                       <p className="text-sm text-teal-50 leading-relaxed">
                            Distinct colors allow for easy comparison between multiple machine learning model results in a single ROC or Accuracy chart.
                       </p>
                   </div>

                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
                       <h3 className="font-bold text-blue-200 flex items-center mb-4 text-lg">
                           <TrendingUp className="w-5 h-5 mr-3" /> Scientific Visualization
                       </h3>
                       <div className="h-6 w-full bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500 rounded-full mb-3 shadow-inner"></div>
                       <p className="text-sm text-blue-50 leading-relaxed italic">
                            Temperature maps use color gradients (Cold to Hot).
                       </p>
                   </div>

               </div>

               <div className="mt-12 flex flex-col items-center relative z-10">
                  <div className="flex items-center space-x-4 bg-emerald-950/40 backdrop-blur-sm p-4 rounded-2xl border border-emerald-500/30 font-bold text-sm">
                    <span className="text-emerald-300">Data</span>
                    <ArrowRight className="text-white/40" />
                    <span className="text-emerald-300">Matplotlib Graph</span>
                    <ArrowRight className="text-white/40" />
                    <span className="text-emerald-300">Color Customization</span>
                    <ArrowRight className="text-white/20" />
                    <span className="text-white ring-2 ring-emerald-400 px-3 py-1 rounded-full bg-emerald-500 shadow-xl">Better Visualization</span>
                  </div>
               </div>
          </div>
      </section>

    </div>
  );
};

export default MplColors;
