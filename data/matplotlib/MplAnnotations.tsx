import React, { useState } from 'react';
import {
  MessageSquare, Copy, Check, Info, ArrowUpRight,
  MapPin, Activity, Terminal, Eye, Target, 
  TrendingUp, AlertCircle, Thermometer, Crosshair, Code, Layers
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

const MplAnnotations: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-violet-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <MessageSquare className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Matplotlib Annotations
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Adding notes, labels, and pointing out crucial details directly on your data.
        </p>
      </header>

      {/* 1. Introduction & 2. Why Annotations Are Important */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 translate-y-4"><MapPin className="w-48 h-48 text-violet-500" /></div>
          
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Info className="w-6 h-6 mr-3 text-violet-500" /> 1. What are Annotations?
          </h2>
          <div className="relative z-10">
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
                Annotations in Matplotlib are used to add notes, labels, or explanations directly onto a graph.
              </p>
              
              <p className="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-100 dark:border-gray-700 pb-2">They help highlight:</p>
              <ul className="list-none space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-400"><Check className="w-4 h-4 mr-2 text-violet-500" /> Important points</li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400"><Check className="w-4 h-4 mr-2 text-violet-500" /> Peaks or drops in data</li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400"><Check className="w-4 h-4 mr-2 text-violet-500" /> Special events</li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400"><Check className="w-4 h-4 mr-2 text-violet-500" /> Observations</li>
              </ul>
              
              <div className="bg-violet-50 dark:bg-violet-900/20 p-4 border-l-4 border-violet-500 rounded-r-xl">
                  <p className="text-violet-800 dark:text-violet-300 text-sm font-bold">Simple Definition</p>
                  <p className="text-violet-700 dark:text-violet-400 text-sm">Matplotlib Annotations are text labels attached to specific data points in a graph to provide additional information.</p>
              </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-violet-900 to-fuchsia-950 text-white p-8 rounded-3xl shadow-xl flex flex-col relative border border-violet-800/50 justify-center">
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10 border-b border-violet-500/30 pb-4">
            <Eye className="w-6 h-6 mr-3 text-violet-400" /> 2. Why Are They Important?
          </h2>
          <p className="text-gray-300 mb-6">In real-world data analysis, graphs often contain important insights. Annotations help explain these insights clearly.</p>
          
          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
              
              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 text-center text-rose-400">Without Annotation</p>
                  <div className="bg-gray-800 p-3 rounded shadow-inner font-mono text-gray-500 text-xs sm:text-sm overflow-x-auto whitespace-pre leading-tight">
{`Sales Graph
    *
   *
  *
 *`}
                  </div>
              </div>

              <div className="bg-violet-900/50 p-4 rounded-xl border border-violet-700 shadow-inner">
                  <p className="text-xs font-bold uppercase tracking-wider mb-2 text-center text-violet-300">With Annotation</p>
                  <div className="bg-violet-950 p-3 rounded font-mono text-violet-300 text-xs sm:text-sm overflow-x-auto whitespace-pre leading-tight border border-violet-800">
{`Sales Graph

        *  ← Highest Sales
       *
      *
     *`}
                  </div>
              </div>
              
          </div>
          <p className="text-center mt-4 text-sm text-fuchsia-300 font-bold bg-white/5 p-2 rounded">This makes the graph easier to understand.</p>
        </div>
      </section>

      {/* 3. Syntax of Matplotlib Annotation */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-400 to-fuchsia-500"></div>
           
           <h2 className="text-3xl font-black mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
               <Terminal className="w-8 h-8 mr-3 text-violet-500" /> 3. Syntax of Matplotlib Annotation
           </h2>
           
           <div className="grid lg:grid-cols-12 gap-8 items-start">
               <div className="lg:col-span-5 relative z-10">
                   <p className="text-gray-600 dark:text-gray-300 mb-4">The main function used is <code className="bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 px-1 font-bold rounded">plt.annotate()</code>.</p>
                   <CodeSnippetBlock codeSnippet={`plt.annotate(text, xy=(x,y))`} title="Basic Syntax" />
               </div>
               
               <div className="lg:col-span-7">
                   <ResultTable 
                       headers={['Parameter', 'Description']}
                       rows={[
                           [<code className="text-violet-600 dark:text-violet-400 font-bold">text</code>, 'Annotation message'],
                           [<code className="text-violet-600 dark:text-violet-400 font-bold">xy</code>, 'Location of the point'],
                           [<code className="text-violet-600 dark:text-violet-400 font-bold">xytext</code>, 'Position of text'],
                           [<code className="text-violet-600 dark:text-violet-400 font-bold">arrowprops</code>, 'Arrow style']
                       ]}
                   />
               </div>
           </div>
        </div>
      </section>

      {/* 4 & 5. Basic Example & Visualization */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Code className="w-6 h-6 mr-3 text-violet-500" /> 4. Basic Annotation Example
                </h2>
                <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nx = [1,2,3,4]\ny = [10,20,15,25]\n\nplt.plot(x,y)\n\nplt.annotate("Highest Value",\n             xy=(4,25))\n\nplt.title("Simple Annotation Example")\nplt.show()`} title="Python Code" />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Activity className="w-6 h-6 mr-3 text-fuchsia-500" /> 5. Visualization Example
                </h2>
                
                <div className="bg-gray-950 rounded-xl p-4 font-mono text-violet-400 text-xs sm:text-sm overflow-x-auto shadow-inner mb-6 whitespace-pre leading-tight border border-gray-800">
{`Value
25 |            *  ← Highest Value
20 |        *
15 |     *
10 | *
   ----------------------
    1   2   3   4`}
                </div>
                
                <div className="mt-auto bg-violet-50 dark:bg-violet-900/10 p-4 rounded-xl border border-violet-100 dark:border-violet-800/40">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Explanation</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">The annotation marks the highest data point.</p>
                </div>
            </div>
      </section>

      {/* 6 & 7. Annotation with Arrow */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 transform translate-x-4"><ArrowUpRight className="w-32 h-32 text-violet-500" /></div>
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4 relative z-10">
                    <ArrowUpRight className="w-6 h-6 mr-3 text-violet-500" /> 6. Annotation with Arrow
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 relative z-10">Matplotlib allows arrows pointing to data points.</p>
                
                <div className="relative z-10">
                    <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nx = [1,2,3,4]\ny = [10,20,15,25]\n\nplt.plot(x,y)\n\nplt.annotate("Peak",\n             xy=(4,25),\n             xytext=(3,27),\n             arrowprops=dict(facecolor="black"))\n\nplt.show()`} title="Code Example" />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Target className="w-6 h-6 mr-3 text-fuchsia-500" /> 7. Visualization with Arrow
                </h2>
                
                <div className="bg-gray-950 rounded-xl p-4 font-mono text-violet-400 text-xs sm:text-sm overflow-x-auto shadow-inner mb-6 whitespace-pre leading-tight border border-gray-800">
{`Value
27 |          Peak
26 |           ↑
25 |            *
20 |        *
15 |     *
10 | *
   ----------------------
    1   2   3   4`}
                </div>
                
                <div className="mt-auto bg-fuchsia-50 dark:bg-fuchsia-900/10 p-4 rounded-xl border border-fuchsia-100 dark:border-fuchsia-800/40">
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-bold flex items-center">
                       <Check className="w-4 h-4 mr-2 text-fuchsia-500" /> The arrow clearly highlights the important data point.
                    </p>
                </div>
            </div>
      </section>

      {/* 8. Advanced Annotation Example & 10. Important Parameters */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700">
              
              <div className="grid lg:grid-cols-2 gap-12">
                  
                  {/* 8. Advanced Example */}
                  <div>
                      <h2 className="text-2xl font-black mb-6 flex items-center text-white pb-4 border-b border-slate-700">
                          <Layers className="w-6 h-6 mr-3 text-violet-400" /> 8. Advanced Annotation Example
                      </h2>
                      <p className="text-slate-300 text-sm mb-4">Adding multiple annotations to a single plot.</p>
                      
                      <CodeSnippetBlock codeSnippet={`import matplotlib.pyplot as plt\n\nx = [1,2,3,4]\ny = [10,20,15,25]\n\nplt.plot(x,y)\n\nplt.annotate("Start", xy=(1,10))\nplt.annotate("Rise", xy=(2,20))\nplt.annotate("Drop", xy=(3,15))\nplt.annotate("Peak", xy=(4,25))\n\nplt.title("Multiple Annotations")\nplt.show()`} title="Multiple Annotations" />
                  </div>

                  {/* 10. Parameters */}
                  <div>
                      <h2 className="text-2xl font-black mb-6 flex items-center text-white pb-4 border-b border-slate-700">
                          <AlertCircle className="w-6 h-6 mr-3 text-fuchsia-400" /> 10. Important Parameters
                      </h2>
                      
                      <div className="mb-6">
                           <ResultTable 
                               headers={['Parameter', 'Purpose']}
                               rows={[
                                   [<code className="text-violet-400 font-bold">xy</code>, 'Data point location'],
                                   [<code className="text-violet-400 font-bold">xytext</code>, 'Text position'],
                                   [<code className="text-violet-400 font-bold">arrowprops</code>, 'Arrow style'],
                                   [<code className="text-violet-400 font-bold">fontsize</code>, 'Text size'],
                                   [<code className="text-violet-400 font-bold">color</code>, 'Text color']
                               ]}
                           />
                      </div>
                      
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-4">Complex Example</p>
                      <CodeSnippetBlock codeSnippet={`plt.annotate("Peak",\n             xy=(4,25),\n             xytext=(3,28),\n             fontsize=12,\n             color="red",\n             arrowprops=dict(arrowstyle="->"))`} title="Styling Parameters" />
                  </div>

              </div>
          </div>
      </section>
      
      {/* 9. Real World Use Case */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-violet-50 to-transparent dark:from-violet-900/10 dark:to-transparent"></div>
               <h2 className="text-3xl font-black mb-8 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700 relative z-10">
                   <Target className="w-8 h-8 mr-3 text-violet-500" /> 9. Real World Use Case
               </h2>
               <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 relative z-10">Annotations are used in many data analysis scenarios.</p>

               <div className="grid md:grid-cols-3 gap-6 relative z-10">
                   {/* Case 1 */}
                   <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-2xl border border-violet-100 dark:border-violet-800/50">
                       <h3 className="font-bold text-violet-800 dark:text-violet-300 flex items-center mb-4 pb-2 border-b border-violet-200 dark:border-violet-800/50">
                           <TrendingUp className="w-5 h-5 mr-2" /> Stock Market
                       </h3>
                       <div className="bg-gray-900 p-3 rounded text-violet-400 font-mono text-xs whitespace-pre">
{`Stock Price

       * ← Market Crash
      *
     *`}
                       </div>
                   </div>

                   {/* Case 2 */}
                   <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-6 rounded-2xl border border-fuchsia-100 dark:border-fuchsia-800/50">
                       <h3 className="font-bold text-fuchsia-800 dark:text-fuchsia-300 flex items-center mb-4 pb-2 border-b border-fuchsia-200 dark:border-fuchsia-800/50">
                           <Thermometer className="w-5 h-5 mr-2" /> Weather Data
                       </h3>
                       <p className="text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Highlight:</p>
                       <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                           <li>• highest temperature</li>
                           <li>• lowest temperature</li>
                       </ul>
                   </div>

                   {/* Case 3 */}
                   <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
                       <h3 className="font-bold text-indigo-800 dark:text-indigo-300 flex items-center mb-4 pb-2 border-b border-indigo-200 dark:border-indigo-800/50">
                           <Crosshair className="w-5 h-5 mr-2" /> Machine Learning
                       </h3>
                       <p className="text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Mark:</p>
                       <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                           <li>• accuracy improvement</li>
                           <li>• loss reduction</li>
                       </ul>
                   </div>
               </div>
          </div>
      </section>

    </div>
  );
};

export default MplAnnotations;
