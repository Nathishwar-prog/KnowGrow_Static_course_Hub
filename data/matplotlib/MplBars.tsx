<<<<<<< Updated upstream
import React from 'react';

export default function MplBars() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-4">MplBars</h2>
        <p className="text-gray-400">
          Placeholder for MplBars content.
        </p>
      </div>
    </div>
  );
}
=======
import React, { useState } from 'react';
import {
  BarChart3, Copy, Check, Info, ArrowRight,
  AlignLeft, Maximize2, Terminal, Eye, Palette, 
  TrendingUp, Activity, Tags, Code, Users
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
  <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-4 shadow-sm w-full">
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

const MplBars: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950/20 min-h-screen font-sans">
      
      {/* 1. Header & Intro */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <BarChart3 className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Bars
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Comparing values across different categories using rectangular bars.
        </p>
      </header>

      {/* 2 & 3. Why Bar Charts Are Used & Visualization */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Info className="w-6 h-6 mr-3 text-amber-500" /> 1 & 2. Introduction & Usage
          </h2>
          <div className="relative z-10">
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
                A Bar Chart in Matplotlib is used to compare values across different categories using rectangular bars.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Each bar represents a category, and the height or length of the bar shows the value of that category. They are incredibly useful when comparing numerical values between distinct groups.
              </p>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 border-l-4 border-amber-500 rounded-r-xl mb-6">
                  <p className="text-amber-800 dark:text-amber-300 text-sm font-bold flex justify-between items-center mb-2">Example: Student Marks <ArrowRight className="w-4 h-4 ml-2" /></p>
                  <ResultTable 
                      headers={['Student', 'Marks']}
                      rows={[
                          ['A', '80'], ['B', '65'], ['C', '90'], ['D', '70']
                      ]}
                  />
                  <p className="text-sm text-amber-900/70 dark:text-amber-200/70 text-center font-bold italic">Instead of numbers, a graph makes comparison easier.</p>
              </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-900 to-orange-950 text-white p-8 rounded-3xl shadow-xl flex flex-col relative border border-amber-800/50 justify-center">
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10 border-b border-amber-500/30 pb-4">
            <Eye className="w-6 h-6 mr-3 text-amber-400" /> 3. Visualization of a Bar Chart
          </h2>
          
          <div className="bg-gray-900/80 p-6 rounded-xl border border-amber-700/50 shadow-inner mb-6 flex-grow flex items-center justify-center">
              <div className="font-mono text-amber-300 text-xs sm:text-sm whitespace-pre leading-loose select-none">
{`Marks
90 |        █
80 |   █
70 |            █
60 |       █
   ---------------------
     A   B   C   D
        Students`}
              </div>
          </div>

          <div className="bg-black/20 p-4 rounded-xl text-amber-100 text-sm">
             <p className="font-bold mb-2">From this graph we can easily see:</p>
             <ul className="list-none space-y-1">
                 <li className="flex items-center"><Check className="w-4 h-4 text-green-400 mr-2"/> Student C scored the highest</li>
                 <li className="flex items-center"><Check className="w-4 h-4 text-red-400 mr-2"/> Student B scored the lowest</li>
             </ul>
          </div>
        </div>
      </section>

      {/* 4. Matplotlib Bar Chart Function */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
           
           <h2 className="text-3xl font-black mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
               <Terminal className="w-8 h-8 mr-3 text-amber-500" /> 4. Matplotlib Bar Chart Function
           </h2>
           
           <div className="grid lg:grid-cols-12 gap-8 items-start">
               <div className="lg:col-span-5 relative z-10">
                   <p className="text-gray-600 dark:text-gray-300 mb-4">Matplotlib provides the function <code className="bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 px-1 font-bold rounded">plt.bar()</code>.</p>
                   <CodeSnippetBlock codeSnippet={`plt.bar(x, height)`} title="Syntax" />
               </div>
               
               <div className="lg:col-span-7">
                   <ResultTable 
                       headers={['Parameter', 'Description']}
                       rows={[
                           [<code className="text-amber-600 dark:text-amber-400 font-bold">x</code>, 'Categories on X-axis'],
                           [<code className="text-amber-600 dark:text-amber-400 font-bold">height</code>, 'Values of each category'],
                           [<code className="text-amber-600 dark:text-amber-400 font-bold">color</code>, 'Color of bars'],
                           [<code className="text-amber-600 dark:text-amber-400 font-bold">width</code>, 'Width of bars']
                       ]}
                   />
               </div>
           </div>
        </div>
      </section>

      {/* 5 & 6. Basic Bar Chart Example */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Code className="w-6 h-6 mr-3 text-amber-500" /> 5. Basic Bar Chart Example
                </h2>
                <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nstudents = ["A", "B", "C", "D"]\nmarks = [80, 65, 90, 70]\n\nplt.bar(students, marks)\n\nplt.title("Student Marks")\nplt.xlabel("Students")\nplt.ylabel("Marks")\n\nplt.show()`} title="Python Code" />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Activity className="w-6 h-6 mr-3 text-orange-500" /> 6. Output Visualization
                </h2>
                
                <div className="bg-gray-950 rounded-xl p-4 font-mono text-amber-400 text-xs sm:text-sm overflow-x-auto shadow-inner mb-6 whitespace-pre leading-tight border border-gray-800">
{`Marks
90 |        █
80 |   █
70 |            █
60 |       █
   ---------------------
     A   B   C   D
        Students`}
                </div>
                
                <div className="mt-auto bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-800/40">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Explanation</p>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                        <li><code className="text-amber-600 dark:text-amber-400 font-bold">students</code> → X-axis categories</li>
                        <li><code className="text-amber-600 dark:text-amber-400 font-bold">marks</code> → Height of bars</li>
                        <li><code className="text-amber-600 dark:text-amber-400 font-bold">plt.bar()</code> → Creates the bar chart</li>
                    </ul>
                </div>
            </div>
      </section>

      {/* 7 & 8. Colors! */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700">
              <h2 className="text-3xl font-black mb-8 flex items-center text-white pb-4 border-b border-slate-700/50">
                   <Palette className="w-8 h-8 mr-3 text-amber-400" /> 7 & 8. Bar Chart Colors
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                      <h3 className="text-xl font-bold flex items-center text-amber-100 mb-4">Single Color</h3>
                      <p className="text-slate-400 text-sm mb-4">We can customize all bars to be the same color.</p>
                      <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nstudents = ["A","B","C","D"]\nmarks = [80,65,90,70]\n\nplt.bar(students, marks, color="green")\n\nplt.title("Student Marks Chart")\nplt.show()`} title="Single Color" />
                  </div>

                  <div>
                      <h3 className="text-xl font-bold flex items-center text-amber-100 mb-4">Multiple Colors</h3>
                      <p className="text-slate-400 text-sm mb-4">Pass a list of colors to apply a different color to each bar.</p>
                      <CodeSnippetBlock codeSnippet={`plt.bar(students, marks, color=["red","blue","green","orange"])`} title="List of Colors" />
                      
                      <div className="mt-6 bg-black/40 p-4 rounded-lg border border-slate-800 text-sm font-mono leading-relaxed">
                          <p className="text-slate-500 uppercase text-xs font-bold mb-2">Visualization</p>
                          <div className="flex flex-col space-y-1">
                              <div><span className="text-red-400">A █ (Red)</span></div>
                              <div><span className="text-blue-400">B █ (Blue)</span></div>
                              <div><span className="text-green-400">C █ (Green)</span></div>
                              <div><span className="text-orange-400">D █ (Orange)</span></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 9 & 10. Horizontal Bar Chart */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <AlignLeft className="w-6 h-6 mr-3 text-amber-500" /> 9. Horizontal Bar Chart
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Matplotlib supports horizontal bar charts using <code className="bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 px-1 font-bold rounded">plt.barh()</code>.</p>
                <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nstudents = ["A","B","C","D"]\nmarks = [80,65,90,70]\n\nplt.barh(students, marks)\n\nplt.title("Horizontal Bar Chart")\nplt.show()`} title="plt.barh() Example" />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Maximize2 className="w-6 h-6 mr-3 text-orange-500" /> 10. Horizontal Visualization
                </h2>
                
                <div className="bg-gray-950 rounded-xl p-4 font-mono text-amber-400 text-xs sm:text-sm overflow-x-auto shadow-inner mb-6 whitespace-pre leading-loose border border-gray-800 flex-grow content-center">
{`A | ████████████
B | █████████
C | ███████████████
D | ███████████`}
                </div>
                
                <div className="mt-auto bg-orange-50 dark:bg-orange-900/10 p-4 rounded-xl border border-orange-100 dark:border-orange-800/40 flex items-center">
                    <div className="p-2 bg-orange-200 dark:bg-orange-800 rounded-full mr-3 text-orange-700 dark:text-orange-200">
                        <Info size={16} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-bold">
                        Horizontal bars are incredibly useful when category labels are long and overlap on the X-axis.
                    </p>
                </div>
            </div>
      </section>

      {/* 12 & 13. Advanced (Width & Labels) */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            {/* 12. Width */}
            <div className="bg-gradient-to-tr from-amber-50 to-white dark:from-amber-950/20 dark:to-gray-800 p-8 rounded-3xl shadow-sm border border-amber-200 dark:border-amber-800/40 h-full flex flex-col">
                <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                    <Maximize2 className="w-6 h-6 mr-3 text-amber-500" /> 12. Adjusting Bar Width
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">We can change the thickness of the bars using the width parameter.</p>
                <CodeSnippetBlock codeSnippet={`plt.bar(students, marks, width=0.5)`} title="Changing Width" />
                
                <div className="mt-auto">
                    <ResultTable 
                        headers={['Width', 'Result']}
                        rows={[
                            ['0.2', 'Thin bars'],
                            ['0.5', 'Medium bars'],
                            ['1.0', 'Thick bars']
                        ]}
                    />
                </div>
            </div>

            {/* 13 & 14. Labels */}
            <div className="bg-gradient-to-tl from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-800 p-8 rounded-3xl shadow-sm border border-orange-200 dark:border-orange-800/40 h-full">
                <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                    <Tags className="w-6 h-6 mr-3 text-orange-500" /> 13 & 14. Adding Labels to Bars
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Sometimes we want to show exact values explicitly on top of bars.</p>
                
                <CodeSnippetBlock codeSnippet={`for i in range(len(students)):\n    plt.text(i, marks[i], marks[i])`} title="Adding text via loop" />
                
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-amber-300 text-xs whitespace-pre">
{`Marks
90 |        █ 90
80 |   █ 80
70 |            █ 70
60 |       █ 65
   ---------------------
     A   B   C   D`}
                </div>
            </div>
      </section>

      {/* 11. Real World Applications */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden text-center">
               <h2 className="text-3xl font-black mb-8 pb-4 text-gray-900 dark:text-white relative z-10">
                   11. Real World Applications
               </h2>
               <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">Bar charts are arguably the most widely used visualization tool across every industry globally.</p>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 text-left">
                   
                   <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-blue-800 dark:text-blue-300 flex items-center mb-4">
                           <TrendingUp className="w-5 h-5 mr-2" /> Business Analytics
                       </h3>
                       <p className="text-sm font-bold text-blue-900 dark:text-blue-100 bg-blue-100 dark:bg-blue-800/50 p-2 rounded">Product Sales Comparison</p>
                   </div>

                   <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-4">
                           <Users className="w-5 h-5 mr-2" /> Education
                       </h3>
                       <p className="text-sm font-bold text-emerald-900 dark:text-emerald-100 bg-emerald-100 dark:bg-emerald-800/50 p-2 rounded">Student Performance Analysis</p>
                   </div>

                   <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-100 dark:border-purple-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-purple-800 dark:text-purple-300 flex items-center mb-4">
                           <Activity className="w-5 h-5 mr-2" /> Data Science
                       </h3>
                       <p className="text-sm font-bold text-purple-900 dark:text-purple-100 bg-purple-100 dark:bg-purple-800/50 p-2 rounded">Model Accuracy Comparison</p>
                   </div>
                   
                   <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800/50 hover:-translate-y-1 transition-transform">
                       <h3 className="font-bold text-rose-800 dark:text-rose-300 flex items-center mb-4">
                           <BarChart3 className="w-5 h-5 mr-2" /> Marketing
                       </h3>
                       <p className="text-sm font-bold text-rose-900 dark:text-rose-100 bg-rose-100 dark:bg-rose-800/50 p-2 rounded">Website Traffic by Source</p>
                   </div>

               </div>
          </div>
      </section>

    </div>
  );
};

export default MplBars;
>>>>>>> Stashed changes
