import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Layers, 
  AlertTriangle, Table, Settings, 
  MapPin, Grid3X3, Target, 
  Database, ListOrdered, Hash, BarChart, ArrowDownToLine, RefreshCw, XCircle, CheckCircle2, FileSliders,
  CalendarDays
} from 'lucide-react';

const PdIndex: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'customizing' | 'properties' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '      Name  Age     City',
          '0     John   25  Chennai',
          '1     Sara   30    Delhi',
          '2     Mike   28   Mumbai'
        ];
        break;
      case 'check_index':
        outLines = [
          '> df.index',
          'RangeIndex(start=0, stop=3, step=1)',
          '',
          '> df.index.values',
          'array([0, 1, 2])'
        ];
        break;
      case 'custom_index':
        outLines = [
          '> df.index = ["A", "B", "C"]',
          '> print(df)',
          'Index   Name  Age     City',
          'A       John   25  Chennai',
          'B       Sara   30    Delhi',
          'C       Mike   28   Mumbai'
        ];
        break;
      case 'set_index':
        outLines = [
          '> df.set_index("Name")',
          'Name   Age     City',
          'John    25  Chennai',
          'Sara    30    Delhi',
          'Mike    28   Mumbai'
        ];
        break;
      case 'reset_index':
        outLines = [
          '> df.reset_index()',
          '   index  Name  Age     City',
          '0      A  John   25  Chennai',
          '1      B  Sara   30    Delhi',
          '2      C  Mike   28   Mumbai',
          '',
          '> df.reset_index(drop=True)',
          '   Name  Age     City',
          '0  John   25  Chennai',
          '1  Sara   30    Delhi',
          '2  Mike   28   Mumbai'
        ];
        break;
      case 'properties':
        outLines = [
          '> df.index.name',
          'None',
          '> df.index.size',
          '3',
          '> df.index.shape',
          '(3,)'
        ];
        break;
      case 'time_series':
        outLines = [
          '> df.set_index("Date")',
          '            Price',
          'Date             ',
          '2024-01-01    120',
          '2024-01-02    125',
          '2024-01-03    130'
        ];
        break;
      case 'mistake1':
        outLines = [
          '> df.index[0] = "X"',
          'TypeError: Index does not support mutable operations',
          '',
          '> # ❌ CRASH: Indexes are immutable!'
        ];
        break;
      default:
        outLines = ['Action not recognized.'];
    }
    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <ListOrdered className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Index <code className="text-indigo-600 dark:text-indigo-400 text-3xl sm:text-4xl bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">PdIndex</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In Pandas, every DataFrame and Series uses an <strong>Index</strong> to label and identify rows.
          The Index acts like an address system that helps Pandas locate and align data efficiently.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-indigo-500" />
            Indexing Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-5️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('customizing')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'customizing' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <FileSliders className="w-4 h-4 mr-1.5" /> 6️⃣-7️⃣ Customizing
            </button>
            <button
              onClick={() => setActiveTab('properties')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'properties' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <RefreshCw className="w-4 h-4 mr-1.5" /> 8️⃣-9️⃣ Reset & Props
            </button>
             <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 10-11 Advanced
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 12-14 Tips
            </button>
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-auto"
              title="Clear Console"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Section 1 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Database className="w-5 h-5 text-indigo-500 mr-2" />
                    1️⃣ What is Index in Pandas?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                      <p><strong>Definition:</strong> A Pandas Index is an <strong>immutable array-like structure</strong> used to store labels for rows in a DataFrame or Series.</p>
                      <p>In simple terms: The Index represents the <strong>row labels</strong> of the dataset.</p>
                      
                     {/* Section 3. Example dataset button */}
                     <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-4">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full flex flex-col items-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASE</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2 w-full flex items-center justify-between">
                                Example Dataset
                            </h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
import pandas as pd

data = {'{'}
    <span className="text-sky-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Sara"</span>, <span className="text-amber-500">"Mike"</span>],
    <span className="text-sky-500">"Age"</span>: [<span className="text-emerald-500 font-bold">25</span>, <span className="text-emerald-500 font-bold">30</span>, <span className="text-emerald-500 font-bold">28</span>],
    <span className="text-sky-500">"City"</span>: [<span className="text-amber-500">"Chennai"</span>, <span className="text-amber-500">"Delhi"</span>, <span className="text-amber-500">"Mumbai"</span>]
{'}'}
df = pd.DataFrame(data)
<span className="text-slate-400 italic"># Here: 0, 1, 2 → Index values. They uniquely identify each row.</span>
                            </pre>
                        </div>
                    </button>
                  </div>

                  {/* Section 2 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Target className="w-5 h-5 text-sky-500 mr-2" />
                    2️⃣ Why Index is Important
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-800/50 p-3 rounded-lg shadow-sm text-center">
                          <p className="text-xs text-sky-800 dark:text-sky-200 font-semibold">Identify rows uniquely</p>
                      </div>
                      <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-800/50 p-3 rounded-lg shadow-sm text-center">
                          <p className="text-xs text-sky-800 dark:text-sky-200 font-semibold">Align datasets during operations</p>
                      </div>
                      <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-800/50 p-3 rounded-lg shadow-sm text-center">
                          <p className="text-xs text-sky-800 dark:text-sky-200 font-semibold">Enable fast data selection</p>
                      </div>
                      <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-800/50 p-3 rounded-lg shadow-sm text-center">
                          <p className="text-xs text-sky-800 dark:text-sky-200 font-semibold">Support time-series</p>
                      </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Understanding Index is important because many Pandas operations such as selection, merging, grouping, and time-series analysis rely on it. It is a core component.</p>


                  {/* Section 3 & 5 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Target className="w-5 h-5 text-indigo-500 mr-2" />
                    3️⃣ Checking Index & 5️⃣ Accessing Values
                  </h3>
                  
                   <button onClick={() => runDemo('check_index')} className="text-left group w-full">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CHECK</div>
                        <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-2 mt-2">Check the index object and raw values</h4>
                        <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-indigo-900/50 shadow-sm block w-fit mb-3">df.index</code>
                        <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-indigo-900/50 shadow-sm block w-fit mb-3">df.index.values</code>
                        <p className="text-[10px] text-slate-500">Output contains RangeIndex meaning: <span className="font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/50 px-1 rounded">start</span> (starting index), <span className="font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/50 px-1 rounded">stop</span> (ending index), and <span className="font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/50 px-1 rounded">step</span> (interval).</p>
                    </div>
                  </button>


                  {/* Section 4 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <ListOrdered className="w-5 h-5 text-slate-500 mr-2" />
                    4️⃣ Types of Pandas Index
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <table className="w-full text-left text-[11px] sm:text-xs">
                          <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                            <tr>
                                <th className="p-3">Index Type</th>
                                <th className="p-3">Description</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900">
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-indigo-500">RangeIndex</td>
                                  <td className="p-3 text-slate-500">Default integer index</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold">Int64Index</td>
                                  <td className="p-3 text-slate-500">Integer-based index</td>
                              </tr>
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold">Float64Index</td>
                                  <td className="p-3 text-slate-500">Floating-point index</td>
                              </tr>
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold">Index</td>
                                  <td className="p-3 text-slate-500">Generic object index</td>
                              </tr>
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-sky-500">DatetimeIndex</td>
                                  <td className="p-3 text-slate-500">Time-based index</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-fuchsia-500">MultiIndex</td>
                                  <td className="p-3 text-slate-500">Hierarchical index</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                </div>
              )}

              {activeTab === 'customizing' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <FileSliders className="w-5 h-5 text-indigo-500 mr-2" />
                        6️⃣ Creating a Custom Index
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">You can replace the default index with custom labels.</p>

                  <button onClick={() => runDemo('custom_index')} className="text-left group w-full">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CUSTOM INDEX</div>
                        <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-2 mt-2">Assigning an Array</h4>
                        <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-indigo-900/50 shadow-sm block w-fit mb-3">
                            df.index = [<span className="text-sky-500">"A"</span>, <span className="text-sky-500">"B"</span>, <span className="text-sky-500">"C"</span>]
                        </code>
                        <p className="text-[10px] text-slate-500">Now rows are labeled A, B, C instead of numbers.</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Target className="w-5 h-5 text-indigo-500 mr-2" />
                        7️⃣ Setting a Column as Index
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A common operation is converting an existing column into an index.</p>

                  <button onClick={() => runDemo('set_index')} className="text-left group w-full">
                    <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-xl p-5 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SET_INDEX()</div>
                        <h4 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-2 mt-2">Using df.set_index()</h4>
                        <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-sky-900/50 shadow-sm block w-fit mb-3">
                            df.set_index(<span className="text-amber-500">"Name"</span>)
                        </code>
                        <p className="text-[10px] text-slate-500">Now Name becomes the row label.</p>
                    </div>
                  </button>

                </div>
              )}

               {activeTab === 'properties' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <RefreshCw className="w-5 h-5 text-indigo-500 mr-2" />
                        8️⃣ Resetting the Index
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Sometimes we need to revert back to the default numeric index.</p>

                   <button onClick={() => runDemo('reset_index')} className="text-left group w-full">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 border-y border-r border-indigo-200 dark:border-slate-700 rounded-r-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN RESET</div>
                          
                          <code className="text-[11px] xl:text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-indigo-900/50 shadow-sm block w-fit mb-4 mt-2">
                            df.reset_index()
                          </code>
                          
                          <div className="flex flex-col sm:flex-row gap-4 font-mono text-[10px] sm:text-xs text-slate-500">
                              <div className="bg-white dark:bg-slate-900/80 p-2 rounded text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 text-center w-full shadow-sm">
                                  <strong>reset_index()</strong><br/>Numeric defaults restored, old index becomes a normal column.
                              </div>
                               <div className="bg-sky-50 dark:bg-sky-900/30 p-2 rounded text-sky-800 dark:text-sky-400 border border-sky-200 dark:border-sky-800 text-center w-full shadow-sm">
                                  <strong>reset_index(drop=True)</strong><br/>Numeric defaults restored, old index is <strong>removed</strong> entirely.
                              </div>
                          </div>
                        </div>
                    </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Settings className="w-5 h-5 text-indigo-500 mr-2" />
                        9️⃣ Checking Index Properties
                  </h3>

                  <button onClick={() => runDemo('properties')} className="text-left group w-full">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm hover:border-indigo-300 transition-all relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN PROPERTIES</div>
                          <table className="w-full text-left text-[11px] sm:text-xs mt-8 lg:mt-0">
                              <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                                <tr>
                                    <th className="p-3">Property</th>
                                    <th className="p-3">Meaning</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900">
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                      <td className="p-3 font-mono font-bold text-indigo-600">df.index.name</td>
                                      <td className="p-3 text-slate-500">Name of the index (if explicitly set)</td>
                                  </tr>
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                      <td className="p-3 font-mono font-bold text-indigo-600">df.index.size</td>
                                      <td className="p-3 text-slate-500">Number of rows</td>
                                  </tr>
                                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                      <td className="p-3 font-mono font-bold text-indigo-600">df.index.shape</td>
                                      <td className="p-3 text-slate-500">Dimension of the index (tuple format)</td>
                                  </tr>
                              </tbody>
                          </table>
                        </div>
                  </button>
                    
                </div>
              )}

               {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <CalendarDays className="w-5 h-5 text-emerald-500 mr-2" />
                      🔟 Example with Time-Series Index
                  </h3>

                   <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Indexes are commonly used for time-series data. Setting a datetime column as an index converts the dataset into a time-series DataFrame natively.</p>

                  <div className="space-y-4">
                      <button onClick={() => runDemo('time_series')} className="text-left group w-full">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 p-4 rounded-r-xl shadow-sm hover:border-emerald-400 transition-colors relative">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN TIME-SERIES</div>
                            <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-400 mb-2 mt-2">Dataset → Time-Series</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.set_index(<span className="text-amber-500">"Date"</span>)</code>
                                <p className="text-[11px] text-slate-500">Now dates are used as indexes.</p>
                            </div>
                        </div>
                      </button>

                      <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <BarChart className="w-5 h-5 text-indigo-500 mr-2" />
                        1️⃣1️⃣ Visualization Example
                      </h3>
                      
                      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 p-4 rounded-xl shadow-sm">
                            <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Indexes often become labels in visualizations.</p>
                            <code className="text-[10px] sm:text-[11px] bg-white dark:bg-slate-950 font-bold p-3 rounded block w-full shadow-inner border border-indigo-100 dark:border-indigo-900 mb-4 whitespace-pre-wrap">
import matplotlib.pyplot as plt

df.<span className="text-emerald-500 text-sm">set_index</span>("Name")["Age"].plot(kind="bar")
plt.title("Age Distribution")
plt.show()
                            </code>
                             <p className="text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-widest text-center">Example representation:</p>
                             <pre className="text-[10px] sm:text-[11px] font-mono text-center text-indigo-500 font-bold bg-white dark:bg-slate-900/80 p-3 shadow-inner rounded border border-indigo-100 dark:border-indigo-900/30">
Age
│
│ █
│ █     █
│ █  █  █
└────────────
<span className="text-rose-500 bg-rose-50 dark:bg-rose-900/30 px-1 rounded mx-1">John</span><span className="text-rose-500 bg-rose-50 dark:bg-rose-900/30 px-1 rounded mx-1">Sara</span><span className="text-rose-500 bg-rose-50 dark:bg-rose-900/30 px-1 rounded mx-1">Mike</span>
                             </pre>
                             <p className="text-[11px] text-slate-500 mt-2 text-center">The index values (John, Sara, Mike) appear as chart labels along the X-Axis natively!</p>
                      </div>
                  </div>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣2️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative">
                       <button onClick={() => runDemo('mistake1')} className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN CRASH</button>
                      <div className="font-bold text-[13px] mb-2 text-slate-700 dark:text-slate-300 w-5/6">❌ Trying to modify index values directly</div>
                       <p className="text-[11px] text-slate-500 mb-1 leading-relaxed">Indexes are <strong>immutable</strong>. You cannot change a single index value once established.</p>
                      
                       <div className="flex flex-col sm:flex-row gap-4 mt-3">
                        <div className="flex-1">
                            <p className="text-[10px] text-rose-600 dark:text-rose-400 font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 block tracking-wider line-through decoration-rose-500 shadow-inner overflow-x-auto w-full text-center">
                              df.index[0] = "X"
                            </p>
                            <p className="text-center text-[10px] font-bold text-rose-500 mt-1 uppercase">Wrong</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono text-left bg-white dark:bg-slate-950 p-1.5 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-x-auto shadow-inner shadow-emerald-50 text-center">
                              df.index = ["X", "Y", "Z"]
                            </p>
                            <p className="text-center text-[10px] font-bold text-emerald-500 mt-1 uppercase">Correct approach</p>
                        </div>
                      </div>

                       <div className="mt-4 pt-4 border-t border-rose-100 dark:border-rose-900/50 font-bold text-[13px] mb-2 text-slate-700 dark:text-slate-300 w-5/6">❌ Confusing index with columns</div>
                       <table className="w-full text-left text-[11px] sm:text-xs text-slate-600 py-2">
                            <tbody className="bg-white dark:bg-slate-950 divide-y divide-slate-100 border border-slate-100 shadow-sm rounded">
                                <tr>
                                    <td className="p-2 font-bold w-1/3 border-r border-slate-100">Index</td>
                                    <td className="p-2">Row labels</td>
                                </tr>
                                 <tr>
                                    <td className="p-2 font-bold border-r border-slate-100">Columns</td>
                                    <td className="p-2">Column labels</td>
                                </tr>
                            </tbody>
                       </table>

                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣3️⃣ Tips & Tricks (Professional Advice)
                  </h3>

                  <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 1 — Use meaningful indexes</span>
                            <p className="text-[12px] text-slate-500 leading-relaxed mb-2">Instead of numeric indexes <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">0, 1, 2</code>, use meaningful identifiers: <code className="text-indigo-500 font-bold bg-indigo-50 dark:bg-indigo-900 px-1 rounded">CustomerID</code>, <code className="text-indigo-500 font-bold bg-indigo-50 dark:bg-indigo-900 px-1 rounded">ProductID</code>, <code className="text-indigo-500 font-bold bg-indigo-50 dark:bg-indigo-900 px-1 rounded">Date</code>. This improves data readability.</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 2 — Reset index after grouping</span>
                            <p className="text-[12px] text-slate-500 leading-relaxed mb-1">Grouping data moves the group column to the index natively. You can reset it.</p>
                            <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded inline-block">
                                df.groupby(<span className="text-amber-500">"Department"</span>).sum().<span className="text-emerald-500">reset_index()</span>
                            </code>
                             <p className="text-[11px] text-slate-500 mt-1">This converts grouped indexes back into columns.</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 3 — Use DatetimeIndex for time-series</span>
                            <p className="text-[12px] text-slate-500 leading-relaxed mb-1">Very useful for: stock market data, weather analysis, sales trends.</p>
                             <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded inline-block">
                                df.set_index(<span className="text-amber-500">"Date"</span>)
                            </code>
                          </div>
                      </div>

                      <div className="mt-8 bg-indigo-600 dark:bg-indigo-900/60 p-4 rounded-xl border border-indigo-700 dark:border-indigo-500/30 text-white shadow-lg relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                          <h3 className="font-bold text-xl border-b border-indigo-400/30 pb-2 flex items-center mb-3 relative z-10">
                            <CheckCircle2 className="w-5 h-5 mr-2" />
                            1️⃣4️⃣ Course Structure Walkthrough
                          </h3>
                           <p className="text-xs text-indigo-100 mb-3 relative z-10">To teach PdIndex effectively, structure the topic like this:</p>
                           <ol className="list-decimal list-inside text-sm font-bold text-indigo-50 space-y-1 relative z-10">
                                <li>Definition of Index</li>
                                <li>Default RangeIndex</li>
                                <li>Creating custom indexes</li>
                                <li><code className="bg-indigo-800/50 px-1 rounded text-xs select-all">set_index()</code> and <code className="bg-indigo-800/50 px-1 rounded text-xs select-all">reset_index()</code></li>
                                <li>Index properties</li>
                                <li>Time-series index example</li>
                           </ol>
                            <p className="text-xs text-indigo-200 mt-4 italic relative z-10">This helps learners understand how Pandas organizes data internally.</p>
                      </div>

                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-indigo-400" />
                     Pipeline Output Console
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[12px] flex flex-col flex-1 overflow-y-auto max-h-[440px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Terminal className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans leading-relaxed">Click interactive buttons to see simulated console output of Index operations!</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('TypeError') || line.includes('CRASH') ? 'text-rose-400 font-bold font-sans' :
                              line.includes('Name ') || line.includes('Age ') || line.includes('City ') || line.includes('Index ') || line.includes('index ') || line.includes('Price ') || line.includes('Date ') ? 'text-indigo-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Chennai') || line.includes('Delhi') || line.includes('Mumbai') || line.includes('A  ') || line.includes('B  ') || line.includes('C  ') ? 'text-sky-300' :
                              line.includes('RangeIndex') || line.includes('array') || line.includes('None') || line.match(/^\d+$/) || line.includes('(3,)') ? 'text-amber-300 font-bold' :
                              line.includes('120') || line.includes('125') || line.includes('130') || line.includes('25') || line.includes('30') || line.includes('28') ? 'text-emerald-300' :
                              !isNaN(Number(line.trim().charAt(0))) && i > 0 && !line.includes('2024') ? 'text-slate-300' :
                              'text-slate-200'
                           }`}>
                               {line}
                           </div>
                        )
                     })
                  )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PdIndex;
