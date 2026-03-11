import React, { useState } from 'react';
import {
  Home, Copy, Check, Info, ZoomIn, 
  Move, RefreshCw, BarChart2, Save,
  Terminal, Layers, ArrowDown, Activity, AlertTriangle, AlertCircle
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-blue-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-blue-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
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

const MatplotLibHome: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <Home className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Home Component
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The "Reset View" button for your Matplotlib graphs.
        </p>
      </header>

      {/* 1. Introduction to Matplotlib */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-blue-500" /> 1. Introduction to Matplotlib
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
            Matplotlib is one of the most popular Python data visualization libraries used to create charts, graphs, and plots.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
                <p className="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-100 dark:border-gray-700 pb-2">Widely used in:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Data Science</li>
                    <li>Machine Learning</li>
                    <li>Data Analysis</li>
                    <li>Scientific Computing</li>
                </ul>
            </div>
            <div>
                <p className="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-100 dark:border-gray-700 pb-2">Creates:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Line & Bar Charts</li>
                    <li>Scatter & Pie Plots</li>
                    <li>Histograms</li>
                    <li>Heatmaps</li>
                </ul>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-100 dark:border-blue-800/40 rounded-xl">
              <p className="text-blue-800 dark:text-blue-300 text-sm font-medium">
                  <strong>The Home Component</strong> refers to the Home button in the Matplotlib Navigation Toolbar, which resets the plot view to its original state.
              </p>
          </div>
        </div>

        {/* 2. What is the Matplotlib Home Component? */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-8 rounded-3xl shadow-xl flex flex-col relative border border-blue-800/50 justify-center overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4"><RefreshCw className="w-48 h-48 text-blue-500" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10 border-b border-blue-500/30 pb-4">
            <Home className="w-6 h-6 mr-3 text-blue-400" /> 2. What is it?
          </h2>
          
          <div className="relative z-10 flex-1">
              <h3 className="font-bold text-blue-300 mb-2">Definition</h3>
              <p className="mb-4 text-gray-300">The Home Component is part of the Navigation Toolbar that allows users to:</p>
              <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-400" /> Reset zoom</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-400" /> Reset pan</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-400" /> Return the graph to its original view</li>
              </ul>
              
              <h3 className="font-bold text-blue-300 mb-2">Simple Explanation</h3>
              <p className="text-gray-300 mb-2">When you zoom or move around the graph, the Home button returns the graph to the default starting view.</p>
              <div className="inline-block bg-blue-800/50 px-4 py-2 border border-blue-700 rounded-lg text-blue-100 font-medium">
                  Think of it like: "Reset View" button for the graph.
              </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Navigation Toolbar & Visualization */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden flex flex-col">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Layers className="w-6 h-6 mr-3 text-blue-500" /> 3. Navigation Toolbar in Matplotlib
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">When a plot window opens, Matplotlib shows a toolbar that contains multiple tools.</p>
                <div className="relative z-10 flex-1">
                    <ResultTable 
                        headers={['Tool', 'Function']}
                        rows={[
                            [<div className="flex items-center text-blue-600 dark:text-blue-400 font-bold"><Home className="w-4 h-4 mr-2"/> Home</div>, 'Reset graph view'],
                            ['Back', 'Go to previous view'],
                            ['Forward', 'Go to next view'],
                            [<div className="flex items-center"><Move className="w-4 h-4 mr-2 text-gray-500"/> Pan</div>, 'Move graph left/right/up/down'],
                            [<div className="flex items-center"><ZoomIn className="w-4 h-4 mr-2 text-gray-500"/> Zoom</div>, 'Zoom into specific region'],
                            [<div className="flex items-center"><Save className="w-4 h-4 mr-2 text-gray-500"/> Save</div>, 'Save graph as image']
                        ]}
                    />
                </div>
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <BarChart2 className="w-5 h-5 mr-3 text-blue-500" /> 4. Visualization
                </h2>
                
                {/* Mock Toolbar */}
                <div className="mb-8">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Example Toolbar Layout</p>
                    <div className="flex items-center gap-2 sm:gap-4 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium overflow-x-auto text-gray-700 dark:text-gray-300">
                        <button className="flex flex-col items-center hover:text-blue-500 p-1"><Home className="w-5 h-5"/><span>Home</span></button>
                        <span className="w-px h-6 bg-gray-300 dark:bg-gray-700"></span>
                        <button className="flex flex-col items-center hover:text-gray-900 dark:hover:text-white p-1"><span>Back</span></button>
                        <button className="flex flex-col items-center hover:text-gray-900 dark:hover:text-white p-1"><span>Fwd</span></button>
                        <span className="w-px h-6 bg-gray-300 dark:bg-gray-700"></span>
                        <button className="flex flex-col items-center hover:text-gray-900 dark:hover:text-white p-1"><Move className="w-5 h-5"/><span>Pan</span></button>
                        <button className="flex flex-col items-center hover:text-gray-900 dark:hover:text-white p-1"><ZoomIn className="w-5 h-5"/><span>Zoom</span></button>
                        <span className="w-px h-6 bg-gray-300 dark:bg-gray-700"></span>
                        <button className="flex flex-col items-center hover:text-gray-900 dark:hover:text-white p-1"><Save className="w-5 h-5"/><span>Save</span></button>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 text-sm font-mono text-center text-gray-600 dark:text-gray-300">
                     <div className="bg-gray-50 dark:bg-gray-900/50 p-2 rounded shadow w-full">Original Graph</div>
                     <ArrowDown className="text-blue-500 w-4 h-4" />
                     <div className="bg-gray-50 dark:bg-gray-900/50 p-2 rounded shadow w-full">User Zooms In</div>
                     <ArrowDown className="text-blue-500 w-4 h-4" />
                     <div className="bg-blue-100 dark:bg-blue-900/40 border border-blue-300 dark:border-blue-700 p-2 rounded-xl shadow w-full font-bold text-blue-800 dark:text-blue-300">Click HOME</div>
                     <ArrowDown className="text-blue-500 w-4 h-4" />
                     <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded border border-emerald-200 dark:border-emerald-800/50 shadow w-full text-emerald-700 dark:text-emerald-400">Graph returns to original</div>
                </div>
            </div>
      </section>

      {/* 5 & 6. Installing & Basic Example */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
           
           <div className="grid lg:grid-cols-2 gap-12">
               <div>
                   <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                       <Terminal className="w-6 h-6 mr-3 text-blue-500" /> 5. Installing Matplotlib
                   </h2>
                   <p className="text-gray-600 dark:text-gray-300 mb-4">Before using Matplotlib, install it.</p>
                   <CodeSnippetBlock codeSnippet="pip install matplotlib" language="bash" title="Installation using pip" />
                   
                   <p className="text-gray-600 dark:text-gray-300 mt-6 mb-4 font-bold">Verify installation:</p>
                   <CodeSnippetBlock codeSnippet={`import matplotlib\nprint(matplotlib.__version__)`} title="Python" />
               </div>
               
               <div>
                   <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                       <BarChart2 className="w-6 h-6 mr-3 text-indigo-500" /> 6. Basic Matplotlib Example
                   </h2>
                   <p className="text-gray-600 dark:text-gray-300 mb-4">Let us create a simple line graph.</p>
                   <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nx = [1,2,3,4,5]\ny = [10,20,25,30,40]\n\nplt.plot(x,y)\n\nplt.title("Sales Growth")\nplt.xlabel("Month")\nplt.ylabel("Sales")\n\nplt.show()`} title="Python Code" />
               </div>
           </div>
        </div>
      </section>

      {/* 7 & 8. Output & Advanced Example */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full">
              <h2 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                  7. Output Visualization
              </h2>
              
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-emerald-400 text-xs sm:text-sm overflow-x-auto shadow-inner mb-6 whitespace-pre leading-tight">
{`Sales
 40 |                           *
 35 |
 30 |                     *
 25 |               *
 20 |         *
 15 |
 10 |   *
    -------------------------------
      1   2   3   4   5
         Month`}
              </div>
              
              <div className="mt-auto bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl border border-blue-100 dark:border-blue-800/40">
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">When this graph opens, the toolbar appears below or above the chart.</p>
                  <p className="text-gray-700 dark:text-gray-300 font-bold text-sm">If the user:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 mb-2">
                      <li>Zooms the graph</li>
                      <li>Moves the graph</li>
                  </ul>
                  <p className="text-blue-700 dark:text-blue-400 font-bold bg-blue-100 dark:bg-blue-900/30 inline-block px-2 py-1 rounded">Clicking Home resets it.</p>
              </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full">
              <h2 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                  8. Advanced Example (Zoom + Home)
              </h2>
              <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0,10,100)\ny = np.sin(x)\n\nplt.plot(x,y)\nplt.title("Sine Wave")\nplt.show()`} title="Sine Wave" />
              
              <div className="mt-auto bg-gray-50 dark:bg-gray-900/40 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 font-bold mb-2">When displayed:</p>
                  <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2">
                       <li>Use <ZoomIn className="w-4 h-4 inline" /> zoom tool</li>
                       <li>Click <Home className="w-4 h-4 inline text-blue-500" /> <span className="font-bold text-blue-600 dark:text-blue-400">Home button</span></li>
                       <li>Graph resets to original sine wave view.</li>
                  </ol>
              </div>
          </div>
      </section>
      
      {/* 9, 10, 11. Internals, Backend, Real World */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700">
              
              <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                  {/* 9. Internal View Stack */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 flex flex-col">
                      <h3 className="text-blue-400 font-black text-xl mb-4">9. Internals: View Stack</h3>
                      <p className="text-slate-300 text-sm mb-4">Matplotlib keeps track of a <strong>View Stack</strong>. Managed by NavToolbar2 class.</p>
                      
                      <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 font-mono text-xs flex-1 flex flex-col items-center justify-center space-y-2">
                          <div className="bg-emerald-900/40 border border-emerald-500/50 text-emerald-300 px-3 py-2 rounded w-full text-center">Original View</div>
                          <ArrowDown className="text-slate-500 w-4 h-4" />
                          <div className="bg-slate-800 border border-slate-600 text-slate-300 px-3 py-2 rounded w-full text-center">Zoom View</div>
                          <ArrowDown className="text-slate-500 w-4 h-4" />
                          <div className="bg-slate-800 border border-slate-600 text-slate-300 px-3 py-2 rounded w-full text-center">Pan View</div>
                      </div>
                  </div>

                  {/* 10. Backend Insight */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 flex flex-col">
                      <h3 className="text-indigo-400 font-black text-xl mb-4">10. Developer Insight</h3>
                      <p className="text-slate-300 text-sm mb-4">Toolbars are controlled using backend classes.</p>
                      <CodeSnippetBlock codeSnippet={`from matplotlib.backends.backend_tkagg import NavigationToolbar2Tk`} title="Backend Example" />
                      <p className="text-slate-400 text-xs mt-auto">Provides functionality: Home, Back, Forward, Zoom, Pan.</p>
                  </div>
                  
                  {/* 11. Real World */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 flex flex-col">
                      <h3 className="text-orange-400 font-black text-xl mb-4">11. Real Word Use Case</h3>
                      <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 mb-4">
                          <p className="text-white font-bold mb-2 flex items-center"><Activity className="w-4 h-4 mr-2 text-orange-400" /> Data Analysis Dashboard</p>
                          <p className="text-slate-400 text-xs italic">Example: A stock market chart.</p>
                      </div>
                      <ul className="text-slate-300 text-sm space-y-2 flex-1">
                          <li>• Zoom into stock price</li>
                          <li>• Move around graph</li>
                          <li>• Click <strong className="text-white border-b border-orange-500">Home</strong> to return to full timeline.</li>
                      </ul>
                      <p className="text-slate-400 text-xs mt-2 border-t border-slate-700 pt-2">Used in: Jupyter notebooks, dashboards.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 12. Common Beginner Mistakes */}
      <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-rose-50 dark:bg-rose-950/20 p-8 rounded-3xl border border-rose-200 dark:border-rose-900/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5"><AlertTriangle className="w-48 h-48 text-rose-500" /></div>
              <h2 className="text-2xl font-black mb-8 text-rose-800 dark:text-rose-400 flex items-center relative z-10 border-b border-rose-200 dark:border-rose-800/50 pb-4">
                  <AlertCircle className="w-6 h-6 mr-3 text-rose-500" /> 12. Common Beginner Mistakes
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900/30">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">Mistake 1: Not using plt.show()</h3>
                      
                      <div className="mb-3">
                          <p className="text-xs uppercase font-bold text-rose-500 mb-1">Wrong</p>
                          <div className="bg-gray-100 dark:bg-gray-900 p-2 text-sm font-mono text-gray-500 rounded border border-gray-200 dark:border-gray-700 line-through">
                              plt.plot(x,y)
                          </div>
                      </div>
                      
                      <div>
                          <p className="text-xs uppercase font-bold text-emerald-500 mb-1">Correct</p>
                          <div className="bg-gray-100 dark:bg-gray-900 p-2 text-sm font-mono text-gray-800 dark:text-gray-200 rounded border border-gray-200 dark:border-gray-700">
                              plt.plot(x,y)<br/>
                              plt.show()
                          </div>
                      </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900/30 flex flex-col justify-center">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">Mistake 2: Thinking Home is a Python function.</h3>
                      
                      <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800/40">
                          <p className="text-sm font-bold text-amber-800 dark:text-amber-400 mb-2 uppercase tracking-wide">Important</p>
                          <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1 font-medium">
                              <li className="flex items-start"><Check className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0 mt-0.5"/> Home is a toolbar feature</li>
                              <li className="flex items-start text-rose-600 dark:text-rose-400"><AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5"/> NOT a Python command</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default MatplotLibHome;