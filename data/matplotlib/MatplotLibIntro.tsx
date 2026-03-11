import React, { useState } from 'react';
import {
  BookOpen, Copy, Check, Info, BarChart2,
  TrendingUp, Layers, ArrowDown, ArrowRight, Activity, 
  Terminal, ThumbsUp, ThumbsDown, Lightbulb, Target, AlertTriangle, MonitorPlay
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

const FeaturesTable = ({ headers, rows }: { headers: string[], rows: (string | number | React.ReactNode)[][] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rows.map((row, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">{row[0]}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{row[1]}</p>
            </div>
        ))}
    </div>
);

const MatplotLibIntro: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <BookOpen className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Intro
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The powerful Python library that converts numbers into beautiful visual insights.
        </p>
      </header>

      {/* 1. What is Matplotlib? */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 translate-y-4"><BarChart2 className="w-48 h-48 text-emerald-500" /></div>
          
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Info className="w-6 h-6 mr-3 text-emerald-500" /> 1. What is Matplotlib?
          </h2>
          <div className="relative z-10">
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
                Matplotlib is a powerful Python library used for <strong>data visualization</strong>.<br/><br/>
                It allows developers and data scientists to create graphs, charts, and plots to visually represent data.
              </p>
              
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 border-l-4 border-emerald-500 rounded-r-xl mb-6">
                  <p className="text-emerald-800 dark:text-emerald-300 text-sm font-bold">In simple terms:</p>
                  <p className="text-emerald-700 dark:text-emerald-400 text-sm">Matplotlib converts numerical data into visual graphs so humans can easily understand patterns and trends.</p>
              </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-8 rounded-3xl shadow-xl flex flex-col relative border border-emerald-800/50 justify-center overflow-hidden">
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10 border-b border-emerald-500/30 pb-4">
            <Target className="w-6 h-6 mr-3 text-emerald-400" /> Widely Used In
          </h2>
          
          <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2"><Check className="w-5 h-5 text-emerald-400" /> <span>Data Science</span></div>
              <div className="flex items-center space-x-2"><Check className="w-5 h-5 text-emerald-400" /> <span>Machine Learning</span></div>
              <div className="flex items-center space-x-2"><Check className="w-5 h-5 text-emerald-400" /> <span>Artificial Intelligence</span></div>
              <div className="flex items-center space-x-2"><Check className="w-5 h-5 text-emerald-400" /> <span>Data Analysis</span></div>
              <div className="flex items-center space-x-2"><Check className="w-5 h-5 text-emerald-400" /> <span>Scientific Research</span></div>
              <div className="flex items-center space-x-2"><Check className="w-5 h-5 text-emerald-400" /> <span>Business Analytics</span></div>
          </div>
        </div>
      </section>

      {/* 2. Why Matplotlib is Important */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
           
           <h2 className="text-3xl font-black mb-4 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
               <Lightbulb className="w-8 h-8 mr-3 text-emerald-500" /> 2. Why Matplotlib is Important
           </h2>
           <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">Data in raw numbers is difficult to understand. Visualization helps us see patterns quickly.</p>
           
           <div className="grid lg:grid-cols-2 gap-8 items-center">
               
               <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                   <h3 className="text-rose-500 font-bold mb-4 flex items-center uppercase tracking-wider text-sm"><AlertTriangle className="w-4 h-4 mr-2" /> Without Visualization (Raw Data)</h3>
                   <ResultTable headers={['Month', 'Sales']} rows={[['Jan', 100], ['Feb', 120], ['Mar', 150], ['Apr', 180]]} />
               </div>

               <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/40 h-full flex flex-col justify-center">
                   <h3 className="text-emerald-600 dark:text-emerald-400 font-bold mb-4 flex items-center uppercase tracking-wider text-sm"><BarChart2 className="w-4 h-4 mr-2" /> With Visualization</h3>
                   <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-inner font-mono text-emerald-500 text-xs sm:text-sm overflow-x-auto whitespace-pre leading-tight">
{`Sales
180 |        *
160 |
140 |     *
120 |   *
100 | *
     --------------
     Jan Feb Mar Apr`}
                   </div>
                   <p className="mt-4 text-center font-bold text-gray-700 dark:text-gray-300">Graphs make analysis faster and clearer.</p>
               </div>
               
           </div>
        </div>
      </section>

      {/* 3 & 4. Features & Real World Applications */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Layers className="w-6 h-6 mr-3 text-emerald-500" /> 3. Features of Matplotlib
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Matplotlib provides many visualization capabilities.</p>
                <FeaturesTable 
                    headers={[]} 
                    rows={[
                        ['Line Plot', 'Used to show trends over time'],
                        ['Bar Chart', 'Compare different categories'],
                        ['Scatter Plot', 'Show relationship between variables'],
                        ['Histogram', 'Show data distribution'],
                        ['Pie Chart', 'Show percentage distribution'],
                        ['Subplots', 'Multiple graphs in one figure']
                    ]} 
                />
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <MonitorPlay className="w-6 h-6 mr-3 text-teal-500" /> 4. Real World Applications
                </h2>
                
                <div className="space-y-4 mb-6 relative z-10">
                    <div className="flex items-start">
                        <div className="bg-teal-100 dark:bg-teal-900/40 p-2 rounded-lg mr-3"><Activity className="w-5 h-5 text-teal-600 dark:text-teal-400"/></div>
                        <div><strong className="text-gray-900 dark:text-white">Data Science:</strong> <span className="text-gray-600 dark:text-gray-400 text-sm">Visualizing model results</span></div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-teal-100 dark:bg-teal-900/40 p-2 rounded-lg mr-3"><TrendingUp className="w-5 h-5 text-teal-600 dark:text-teal-400"/></div>
                        <div><strong className="text-gray-900 dark:text-white">Finance:</strong> <span className="text-gray-600 dark:text-gray-400 text-sm">Stock market analysis</span></div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-teal-100 dark:bg-teal-900/40 p-2 rounded-lg mr-3"><Activity className="w-5 h-5 text-teal-600 dark:text-teal-400"/></div>
                        <div><strong className="text-gray-900 dark:text-white">Healthcare:</strong> <span className="text-gray-600 dark:text-gray-400 text-sm">Disease pattern analysis</span></div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-teal-100 dark:bg-teal-900/40 p-2 rounded-lg mr-3"><BarChart2 className="w-5 h-5 text-teal-600 dark:text-teal-400"/></div>
                        <div><strong className="text-gray-900 dark:text-white">Business Analytics:</strong> <span className="text-gray-600 dark:text-gray-400 text-sm">Sales reports & dashboards</span></div>
                    </div>
                </div>

                <div className="mt-auto bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Dashboard Workflow Example</p>
                    <div className="flex flex-col items-center gap-1 text-sm font-bold text-gray-700 dark:text-gray-300">
                         <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-600 rounded w-full text-center">Company Sales Dashboard</div>
                         <ArrowDown className="text-teal-500 w-4 h-4" />
                         <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-600 rounded w-full text-center">Data Analysis</div>
                         <ArrowDown className="text-teal-500 w-4 h-4" />
                         <div className="bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 border border-teal-300 dark:border-teal-700 p-2 rounded w-full text-center">Graphs using Matplotlib</div>
                    </div>
                </div>
            </div>
      </section>

      {/* 5 & 6. Installing & Importing */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                   <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                       <Terminal className="w-6 h-6 mr-3 text-emerald-500" /> 5. Installing Matplotlib
                   </h2>
                   <p className="text-gray-600 dark:text-gray-300 mb-4">Before using Matplotlib, install it using pip.</p>
                   <CodeSnippetBlock codeSnippet="pip install matplotlib" language="bash" title="Installation Command" />
                   
                   <p className="text-gray-600 dark:text-gray-300 mt-6 mb-4 font-bold">Verify Installation:</p>
                   <CodeSnippetBlock codeSnippet={`import matplotlib\nprint(matplotlib.__version__)`} title="Python" />
                   <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/40 text-sm text-emerald-700 dark:text-emerald-400 mt-2">
                       <Check className="w-4 h-4 inline mr-1"/> If a version number appears, Matplotlib is successfully installed.
                   </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                   <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                       <Info className="w-6 h-6 mr-3 text-teal-500" /> 6. Importing Matplotlib
                   </h2>
                   <p className="text-gray-600 dark:text-gray-300 mb-4">The most commonly used module is <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-teal-600 dark:text-teal-400">pyplot</code>.</p>
                   <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt`} title="Python" />
                   
                   <div className="mt-auto pt-4 relative z-10 flex-1">
                       <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Explanation</p>
                       <ResultTable 
                           headers={['Part', 'Meaning']}
                           rows={[
                               [<code className="text-emerald-600 font-bold">matplotlib</code>, 'main library'],
                               [<code className="text-emerald-600 font-bold">pyplot</code>, 'plotting module'],
                               [<code className="text-emerald-600 font-bold">plt</code>, 'alias for easy use']
                           ]}
                       />
                   </div>
            </div>
      </section>

      {/* 7 & 8. Basic Example & Output */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-slate-900 to-gray-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-gray-800">
           
           <div className="grid lg:grid-cols-2 gap-12">
               <div>
                   <h2 className="text-2xl font-black mb-6 flex items-center text-white pb-4 border-b border-gray-700">
                       <Terminal className="w-6 h-6 mr-3 text-emerald-400" /> 7. Basic Example
                   </h2>
                   <p className="text-gray-300 mb-4">Let us create a simple line graph.</p>
                   <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nx = [1,2,3,4]\ny = [10,20,25,30]\n\nplt.plot(x,y)\n\nplt.title("Basic Line Graph")\nplt.xlabel("X Values")\nplt.ylabel("Y Values")\n\nplt.show()`} title="Python Code" />
               </div>
               
               <div className="flex flex-col">
                   <h2 className="text-2xl font-black mb-6 flex items-center text-white pb-4 border-b border-gray-700">
                       <BarChart2 className="w-6 h-6 mr-3 text-teal-400" /> 8. Output Visualization
                   </h2>
                   
                   <div className="bg-gray-950 rounded-xl p-4 font-mono text-emerald-400 text-xs sm:text-sm overflow-x-auto shadow-inner mb-6 whitespace-pre leading-tight border border-gray-800 relative">
{`Y Values
30 |            *
25 |        *
20 |     *
15 |
10 | *
   --------------------
    1   2   3   4
        X Values`}
                   </div>
                   
                   <div className="mt-auto bg-gray-800/80 p-5 rounded-xl border border-gray-700">
                       <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-2">Code Explanation</p>
                       <ul className="text-sm text-gray-300 space-y-2 font-mono">
                           <li><span className="text-emerald-400">plt.plot()</span> <span className="text-gray-400">- creates the graph</span></li>
                           <li><span className="text-emerald-400">plt.title()</span> <span className="text-gray-400">- adds title</span></li>
                           <li><span className="text-emerald-400">plt.xlabel()</span> <span className="text-gray-400">- labels X-axis</span></li>
                           <li><span className="text-emerald-400">plt.ylabel()</span> <span className="text-gray-400">- labels Y-axis</span></li>
                           <li><span className="text-emerald-400">plt.show()</span> <span className="text-gray-400">- displays the graph</span></li>
                       </ul>
                   </div>
               </div>
           </div>
        </div>
      </section>

      {/* 9 & 10. Architecture & Graph Types */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* 9. Architecture */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <Layers className="w-6 h-6 mr-3 text-indigo-500" /> 9. Matplotlib Architecture
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Matplotlib works in three main layers.</p>
              
              <div className="bg-gray-50 dark:bg-gray-900/40 p-5 rounded-xl border border-gray-200 dark:border-gray-700 mb-6 flex flex-col items-center gap-1 font-bold text-gray-700 dark:text-gray-300 text-sm">
                  <div className="bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-300 dark:border-indigo-700 p-2 rounded w-48 text-center text-indigo-800 dark:text-indigo-300">User Code</div>
                  <ArrowDown className="text-indigo-500 w-4 h-4" />
                  <div className="bg-white dark:bg-gray-800 p-2 border border-gray-300 dark:border-gray-600 rounded w-48 text-center shadow-sm">Pyplot API</div>
                  <ArrowDown className="text-indigo-500 w-4 h-4" />
                  <div className="bg-white dark:bg-gray-800 p-2 border border-gray-300 dark:border-gray-600 rounded w-48 text-center shadow-sm">Matplotlib Backend</div>
                  <ArrowDown className="text-indigo-500 w-4 h-4" />
                  <div className="bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-300 dark:border-emerald-700 p-2 rounded w-48 text-center text-emerald-800 dark:text-emerald-300">Graph Output</div>
              </div>
              
              <div className="mt-auto">
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Layers Explanation</p>
                 <ResultTable 
                     headers={['Layer', 'Description']}
                     rows={[
                         ['Scripting Layer', 'pyplot functions'],
                         ['Artist Layer', 'shapes and objects'],
                         ['Backend Layer', 'display output']
                     ]}
                 />
              </div>
          </div>
          
          {/* 10. Types of Graphs */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <BarChart2 className="w-6 h-6 mr-3 text-emerald-500" /> 10. Types of Graphs
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Matplotlib supports multiple chart types.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6 relative z-10 flex-1">
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-emerald-600 dark:text-emerald-400">Line Plot</h4>
                      <p className="text-xs text-gray-500 mt-1">Used for trends.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-emerald-600 dark:text-emerald-400">Bar Chart</h4>
                      <p className="text-xs text-gray-500 mt-1">Used for category comparison.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-emerald-600 dark:text-emerald-400">Scatter Plot</h4>
                      <p className="text-xs text-gray-500 mt-1">Used for correlation analysis.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-emerald-600 dark:text-emerald-400">Histogram</h4>
                      <p className="text-xs text-gray-500 mt-1">Used for data distribution.</p>
                  </div>
              </div>
              
              <div className="mt-auto bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/40">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center"><Activity className="w-4 h-4 mr-2 text-emerald-500"/> Example Workflow</p>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 text-center gap-2">
                         <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-600 rounded flex-1 shadow-sm">Raw Data</div>
                         <ArrowRight className="text-emerald-500 w-4 h-4 flex-shrink-0" />
                         <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-600 rounded flex-1 shadow-sm">Functions</div>
                         <ArrowRight className="text-emerald-500 w-4 h-4 flex-shrink-0" />
                         <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 p-2 rounded flex-1">Graph</div>
                    </div>
              </div>
          </div>
      </section>

      {/* 11 & 12. Advantages & Limitations */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* 11. Advantages */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-3xl shadow-sm border border-emerald-200 dark:border-emerald-800/40 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-emerald-800 dark:text-emerald-400 pb-4 border-b border-emerald-200 dark:border-emerald-800/50">
                  <ThumbsUp className="w-6 h-6 mr-3 text-emerald-500" /> 11. Advantages
              </h2>
              <ul className="space-y-4 relative z-10 text-gray-800 dark:text-gray-200 font-medium text-lg">
                  <li className="flex items-center"><Check className="w-6 h-6 mr-3 text-emerald-500 flex-shrink-0" /> Easy to learn</li>
                  <li className="flex items-center"><Check className="w-6 h-6 mr-3 text-emerald-500 flex-shrink-0" /> Highly customizable</li>
                  <li className="flex items-center"><Check className="w-6 h-6 mr-3 text-emerald-500 flex-shrink-0" /> Open-source</li>
                  <li className="flex items-center"><Check className="w-6 h-6 mr-3 text-emerald-500 flex-shrink-0" /> Works with NumPy and Pandas</li>
                  <li className="flex items-center"><Check className="w-6 h-6 mr-3 text-emerald-500 flex-shrink-0" /> Large community support</li>
              </ul>
          </div>

          {/* 12. Limitations */}
          <div className="bg-rose-50 dark:bg-rose-950/20 p-8 rounded-3xl shadow-sm border border-rose-200 dark:border-rose-900/40 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-rose-800 dark:text-rose-400 pb-4 border-b border-rose-200 dark:border-rose-800/50">
                  <ThumbsDown className="w-6 h-6 mr-3 text-rose-500" /> 12. Limitations
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">Even though Matplotlib is powerful, it has some limitations.</p>
              
              <div className="mt-auto relative z-10">
                 <ResultTable 
                     headers={['Limitation', 'Explanation']}
                     rows={[
                         ['Complex syntax', 'Compared to modern libraries'],
                         ['Less interactive', 'Compared to Plotly'],
                         ['Styling difficult', 'Needs extra configuration']
                     ]}
                 />
              </div>
          </div>
      </section>

      {/* 13 & 14. Learning Path & Tips */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700">
              
              <div className="grid lg:grid-cols-2 gap-12">
                  
                  {/* 13. Learning Path */}
                  <div>
                      <h2 className="text-2xl font-black mb-6 flex items-center text-white pb-4 border-b border-slate-700">
                          <BookOpen className="w-6 h-6 mr-3 text-indigo-400" /> 13. Personal Recommendation
                      </h2>
                      <p className="text-slate-300 text-sm mb-6">From my experience teaching visualization. Students should learn in this order:</p>
                      
                      <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 mb-6 flex flex-col items-center gap-1 font-bold text-xs sm:text-sm text-slate-300">
                          <div className="border border-indigo-500 text-indigo-300 p-2 rounded w-full max-w-[200px] text-center bg-indigo-900/30">Matplotlib Basics</div>
                          <ArrowDown className="text-slate-500 w-4 h-4" />
                          <div className="border border-slate-500 p-2 rounded w-full max-w-[200px] text-center bg-slate-900">Line Plot</div>
                          <ArrowDown className="text-slate-500 w-4 h-4" />
                          <div className="border border-slate-500 p-2 rounded w-full max-w-[200px] text-center bg-slate-900">Bar Chart</div>
                          <ArrowDown className="text-slate-500 w-4 h-4" />
                          <div className="border border-slate-500 p-2 rounded w-full max-w-[200px] text-center bg-slate-900">Scatter Plot</div>
                          <ArrowDown className="text-slate-500 w-4 h-4" />
                          <div className="border border-slate-500 p-2 rounded w-full max-w-[200px] text-center bg-slate-900">Histogram</div>
                          <ArrowDown className="text-slate-500 w-4 h-4" />
                          <div className="border border-indigo-500 text-indigo-300 p-2 rounded w-full max-w-[200px] text-center bg-indigo-900/30">Subplots</div>
                      </div>

                      <div className="bg-slate-800 p-5 rounded-xl border border-slate-600">
                          <p className="text-slate-400 text-xs font-bold uppercase tracking-wide mb-3">After Matplotlib:</p>
                          <ul className="text-slate-300 text-sm space-y-2">
                              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-emerald-400" /> <strong>Seaborn</strong> <span className="text-slate-500 ml-1">(statistical plotting)</span></li>
                              <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-blue-400" /> <strong>Plotly</strong> <span className="text-slate-500 ml-1">(interactive graphs)</span></li>
                          </ul>
                      </div>
                  </div>

                  {/* 14. Tips and Tricks */}
                  <div>
                      <h2 className="text-2xl font-black mb-6 flex items-center text-white pb-4 border-b border-slate-700">
                          <Lightbulb className="w-6 h-6 mr-3 text-amber-400" /> 14. Tips & Tricks for Beginners
                      </h2>
                      
                      <div className="space-y-6">
                          {/* Tip 1 */}
                          <div className="bg-slate-800 p-5 rounded-xl border-l-4 border-l-amber-500 border border-slate-700 shadow-sm relative">
                              <span className="absolute -top-3 -right-2 text-6xl text-slate-700 font-black opacity-30 select-none">1</span>
                              <h3 className="font-bold text-emerald-400 mb-2 relative z-10">Use NumPy</h3>
                              <p className="text-slate-300 text-sm mb-3">Always use NumPy with Matplotlib for better performance.</p>
                              <div className="bg-slate-900 p-2 rounded font-mono text-emerald-300 text-xs border border-slate-700 inline-block">import numpy as np</div>
                          </div>
                          
                          {/* Tip 2 */}
                          <div className="bg-slate-800 p-5 rounded-xl border-l-4 border-l-amber-500 border border-slate-700 shadow-sm relative">
                              <span className="absolute -top-3 -right-2 text-6xl text-slate-700 font-black opacity-30 select-none">2</span>
                              <h3 className="font-bold text-emerald-400 mb-2 relative z-10">Clear Labels</h3>
                              <p className="text-slate-300 text-sm mb-3">Use clear labels and titles in graphs.</p>
                              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                                  <div className="bg-rose-950/30 border border-rose-900/50 p-2 rounded text-rose-300"><span className="text-rose-500 font-bold mb-1 block">Bad Graph:</span> - No title<br/>- No labels</div>
                                  <div className="bg-emerald-900/30 border border-emerald-800/50 p-2 rounded text-emerald-300"><span className="text-emerald-500 font-bold mb-1 block">Good Graph:</span> - Title<br/>- X Label<br/>- Y Label</div>
                              </div>
                          </div>
                          
                          {/* Tip 3 */}
                          <div className="bg-slate-800 p-5 rounded-xl border-l-4 border-l-amber-500 border border-slate-700 shadow-sm relative">
                              <span className="absolute -top-3 -right-2 text-6xl text-slate-700 font-black opacity-30 select-none">3</span>
                              <h3 className="font-bold text-emerald-400 mb-2 relative z-10">Consistent Styling</h3>
                              <p className="text-slate-300 text-sm mb-3">Use consistent styling for readability.</p>
                              <div className="bg-slate-900 p-2 rounded font-mono text-emerald-300 text-xs border border-slate-700 inline-block">plt.style.use("ggplot")</div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

    </div>
  );
};

export default MatplotLibIntro;