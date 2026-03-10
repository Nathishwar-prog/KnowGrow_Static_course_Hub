import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Layers, 
  AlertTriangle, Table, Settings, 
  BarChart, Search, Copy, CheckCircle2, ShieldCheck,
  Eye
} from 'lucide-react';

const PdDuplicated: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'detect' | 'parameters' | 'visuals' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '   Name  Age     City',
          '0  John   25  Chennai',
          '1  Sara   30    Delhi',
          '2  John   25  Chennai',
          '3  Mike   28   Mumbai'
        ];
        break;
      case 'run_detect':
        outLines = [
          '> df.duplicated()',
          '0    False',
          '1    False',
          '2     True',
          '3    False',
          'dtype: bool'
        ];
        break;
      case 'run_filter':
        outLines = [
          '> df[df.duplicated()]',
          '   Name  Age     City',
          '2  John   25  Chennai'
        ];
        break;
      case 'run_sum':
        outLines = [
          '> df.duplicated().sum()',
          '1'
        ];
        break;
      case 'run_keep_last':
        outLines = [
          '> df.duplicated(keep="last")',
          '0     True',
          '1    False',
          '2    False',
          '3    False',
          'dtype: bool'
        ];
        break;
      case 'run_keep_false':
        outLines = [
          '> df.duplicated(keep=False)',
          '0     True',
          '1    False',
          '2     True',
          '3    False',
          'dtype: bool'
        ];
        break;
      case 'run_subset':
        outLines = [
          '> df.duplicated(subset=["Name"])',
          '0    False',
          '1    False',
          '2     True',
          '3    False',
          'dtype: bool'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Bar Chart (Name Frequency)...',
          '========================================',
          'Count |',
          '    2 |   [██]',
          '    1 |   [██]       [██]       [██]',
          '      +---------------------------------',
          '          John       Sara       Mike'
        ];
        break;
      case 'real_world':
        outLines = [
          '   CustomerID   Name',
          '0         101   Ravi',
          '1         102  Meena',
          '2         101   Ravi',
          '',
          '> df.duplicated(subset=["CustomerID"])',
          '0    False',
          '1    False',
          '2     True',
          'dtype: bool'
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
        <div className="inline-flex items-center justify-center p-4 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-2xl mb-6 shadow-sm border border-fuchsia-200 dark:border-fuchsia-800/50">
          <Copy className="w-10 h-10 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Duplicated <code className="text-fuchsia-600 dark:text-fuchsia-400 text-3xl sm:text-4xl bg-fuchsia-50 dark:bg-fuchsia-900/20 px-3 py-1 rounded-xl">.duplicated()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Detect duplicate rows mathematically. Instead of blindly deleting them, map them out producing Boolean Series tracking arrays isolating data redundancy.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-fuchsia-500" />
            Detection Tracking Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('detect')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'detect' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Search className="w-4 h-4 mr-1.5" /> 5️⃣-6️⃣, 🔟 Detect
            </button>
            <button
              onClick={() => setActiveTab('parameters')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'parameters' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Settings className="w-4 h-4 mr-1.5" /> 7️⃣-9️⃣ Parameters
            </button>
             <button
              onClick={() => setActiveTab('visuals')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'visuals' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 1️⃣1️⃣-1️⃣2️⃣ Visuals
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 Pro Tips
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
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Table className="w-5 h-5 text-fuchsia-500 mr-2" />
                    1️⃣ What is <code className="mx-2 bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 px-1 rounded">duplicated()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>It is a Pandas method that identifies duplicate rows natively, returning a Boolean Series (<code className="text-rose-500 font-bold">True</code>/<code className="text-emerald-500 font-bold">False</code>) indicating exactly if each tracked iterating row maps identically previously.</p>
                     <p className="font-bold border-l-4 border-fuchsia-500 pl-3 bg-fuchsia-50 dark:bg-fuchsia-900/10 py-2">
                        <span className="text-rose-600 dark:text-rose-400">True</span> → Indicates a Duplicate mapping row block<br/>
                        <span className="text-emerald-600 dark:text-emerald-500">False</span> → Unique non-repeating record block
                     </p>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <ShieldCheck className="w-5 h-5 text-indigo-500 mr-2" />
                    2️⃣ Why is it Important?
                  </h3>
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-900/50 p-4 rounded-xl shadow-sm text-sm text-slate-700 dark:text-slate-300">
                    <p className="mb-2 font-bold text-indigo-800 dark:text-indigo-400">Duplicate data mapping causes cascading pipeline issues:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Incorrect analysis executing weighted over-mapping counting variables</li>
                      <li>Wrong statistical averages artificially reducing variance processing</li>
                      <li>Unnecessary data frame redundancy memory allocations sizes</li>
                      <li>Poor Machine Learning analytical mathematical performance tracking</li>
                    </ul>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-amber-500 mr-2" />
                    3️⃣ Basic Syntax & Parameters
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700 font-mono text-[11px] sm:text-xs text-amber-600 dark:text-amber-400 font-bold overflow-x-auto">
                          DataFrame.duplicated(subset=None, keep='first')
                      </div>
                      <table className="w-full text-left text-sm">
                          <thead className="bg-white dark:bg-slate-950 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                              <tr>
                                  <th className="p-3">Parameter</th>
                                  <th className="p-3">Description</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 text-[11px] sm:text-xs">
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-fuchsia-600 dark:text-fuchsia-400 font-bold">subset</td>
                                  <td className="p-3">Array listing strictly isolating Column(s) utilized directly algorithmically identifying defining map duplicates.</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-teal-600 dark:text-teal-400 font-bold">keep</td>
                                  <td className="p-3">Designates mapping sequence (<code className="font-bold text-slate-800 dark:text-slate-300">first</code>, <code className="font-bold text-slate-800 dark:text-slate-300">last</code>, <code className="font-bold text-rose-500">False</code>) configuring which tracking matrix marks True logic output natively.</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-8">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full flex flex-col items-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASE</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2 w-full flex items-center justify-between">
                                4️⃣ Example Dataset Structure
                                <span className="text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-2 py-1 rounded tracking-wide font-bold">Row 2 repeats Row 0</span>
                            </h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
import pandas as pd

data = {'{'}
    <span className="text-amber-500">"Name"</span>: [<span className="text-sky-500 font-bold">"John"</span>, <span className="text-amber-500">"Sara"</span>, <span className="text-rose-500 font-bold">"John"</span>, <span className="text-amber-500">"Mike"</span>],
    <span className="text-amber-500">"Age"</span>: [<span className="text-sky-500 font-bold">25</span>, <span className="text-emerald-500">30</span>, <span className="text-rose-500 font-bold">25</span>, <span className="text-emerald-500">28</span>],
    <span className="text-amber-500">"City"</span>: [<span className="text-sky-500 font-bold">"Chennai"</span>, <span className="text-amber-500">"Delhi"</span>, <span className="text-rose-500 font-bold">"Chennai"</span>, <span className="text-amber-500">"Mumbai"</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                    
                </div>
              )}

              {activeTab === 'detect' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Search className="w-5 h-5 text-fuchsia-500 mr-2" />
                        5️⃣, 🔟 Detecting & Tracking Logs
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                      {/* Detect */}
                      <button onClick={() => runDemo('run_detect')} className="text-left group w-full">
                        <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-5 hover:border-fuchsia-400 dark:hover:border-fuchsia-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DETECT</div>
                          <h4 className="font-bold text-sm text-fuchsia-700 dark:text-fuchsia-400 mb-2 mt-2">5️⃣ Detecting Row Maps</h4>
                          <code className="text-[11px] sm:text-[12px] font-bolt text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-fuchsia-900/50 shadow-sm block w-fit mb-3">df.duplicated()</code>
                          <p className="text-[10px] text-slate-500 leading-relaxed font-bold">Outputs formatting True upon encountering mapped structural duplicates scanning rows natively downward sequentially.</p>
                        </div>
                      </button>

                      {/* Counting sum */}
                      <button onClick={() => runDemo('run_sum')} className="text-left group w-full">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN COUNT</div>
                          <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-2 mt-2">🔟 Counting Duplicate Rows</h4>
                          <code className="text-[11px] sm:text-[12px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-emerald-900/50 shadow-sm block w-fit mb-3">df.duplicated().sum()</code>
                          <p className="text-[10px] text-slate-500 leading-relaxed font-bold">Summarizes mapping Boolean True elements producing native simple counts indicating total redundant nodes.</p>
                        </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Eye className="w-5 h-5 text-indigo-500 mr-2" />
                    6️⃣ Display Only Duplicate Rows Visually
                  </h3>

                  <button onClick={() => runDemo('run_filter')} className="text-left group w-full">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 border-y border-r border-indigo-200 dark:border-slate-700 rounded-r-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm relative">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN FILTER VIEW</div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Rather than mapping Boolean `True/False` array series, mapping variables natively inside bracket structures tracks isolates filtering out elements cleanly displaying strictly exclusively duplicated mapping rows formats.</p>
                      <code className="text-xs sm:text-sm bg-white dark:bg-slate-950 font-bold p-2 text-indigo-700 dark:text-indigo-400 border border-slate-200 dark:border-slate-700 rounded block w-fit shadow-inner">df[df.duplicated()]</code>
                    </div>
                  </button>

                </div>
              )}

               {activeTab === 'parameters' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Settings className="w-5 h-5 text-fuchsia-500 mr-2" />
                        7️⃣-9️⃣ Granular Configuration (<code className="ml-1 text-fuchsia-500 font-mono text-xl">keep</code> / <code className="ml-1 text-fuchsia-500 font-mono text-xl">subset</code>)
                  </h3>
                  
                  <div className="space-y-4">
                      
                      <button onClick={() => runDemo('run_keep_last')} className="text-left group w-full">
                        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN KEEP LAST</div>
                          <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">7️⃣ Marking Last Duplicate (<code className="text-fuchsia-500 font-mono text-[11px]">keep="last"</code>)</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.duplicated(keep=<span className="text-amber-500">"last"</span>)</code>
                          <p className="text-[10px] text-slate-500">By default Pandas marks the second (bottom) matching mapping as True. Marking `last` designates mapping early mappings outputs True natively tracking instead.</p>
                        </div>
                      </button>

                      <button onClick={() => runDemo('run_keep_false')} className="text-left group w-full">
                        <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 rounded-xl p-4 hover:border-rose-400 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN KEEP FALSE</div>
                          <h4 className="font-bold text-sm text-rose-700 dark:text-rose-400 mb-2">8️⃣ Marking ALL Duplicates (<code className="text-rose-500 font-mono text-[11px]">keep=False</code>)</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.duplicated(keep=<span className="text-rose-500 font-bold">False</span>)</code>
                          <p className="text-[10px] text-slate-500">Marks EVERY row structure involved executing duplicate mappings as Boolean True completely unconditionally bypassing indexing tracking.</p>
                        </div>
                      </button>

                      <button onClick={() => runDemo('run_subset')} className="text-left group w-full mt-4">
                       <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 border-y border-r border-emerald-200 dark:border-slate-700 rounded-r-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SUBSET</div>
                            <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-400 mb-2">9️⃣ Specific Column Focus (<code className="text-emerald-500 font-mono text-[11px]">subset=</code>)</h4>
                            <code className="text-xs sm:text-sm bg-white dark:bg-slate-950 font-bold p-2 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 rounded block w-fit shadow-inner mb-2">df.duplicated(subset=[<span className="text-amber-500 font-normal">"Name"</span>])</code>
                            <p className="text-[10px] text-slate-500 mb-1 leading-relaxed">Instead of evaluating checking ALL matrices columns variables, checks exclusively comparing mapping variables strictly across chosen isolated strings tracking outputs.</p>
                       </div>
                      </button>

                  </div>

                </div>
              )}

               {activeTab === 'visuals' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <BarChart className="w-5 h-5 text-sky-500 mr-2" />
                      1️⃣1️⃣ Visualization Data Affects
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-8">
                      <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-xl p-5 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN VIZ</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">We can systematically explicitly visualize mapped tracking duplicate frequency array frequencies natively utilizing `value_counts()` chains mapping algorithms loops.</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1 shadow-inner group-hover:border-sky-200 dark:group-hover:border-sky-800 transition-colors">
import matplotlib.pyplot as plt

df[<span className="text-amber-500">"Name"</span>].<span className="text-fuchsia-500 font-bold">value_counts</span>().<span className="text-sky-500 font-bold">plot</span>(kind=<span className="text-amber-500">"bar"</span>)

plt.title(<span className="text-amber-500">"Name Frequency"</span>)
plt.show()
                          </pre>
                        </div>
                      </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Settings className="w-5 h-5 text-emerald-500 mr-2" />
                      1️⃣2️⃣ Real-World Business Scenario
                  </h3>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full mb-4">
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CHECK</div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2 font-bold">Isolating and scanning customer user base CRM tracking logs preventing identical CustomerID structural overlapping systems mappings formatting loops.</p>
                        
                        <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto mb-3 shadow-inner">
data = {'{'}
    <span className="text-amber-500">"CustomerID"</span>: [<span className="text-rose-500 font-bold">101</span>, <span className="text-emerald-500">102</span>, <span className="text-rose-500 font-bold">101</span>],
    <span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"Ravi"</span>, <span className="text-amber-500">"Meena"</span>, <span className="text-amber-500">"Ravi"</span>]
{'}'}
df = pd.DataFrame(data)

<span className="text-slate-400 italic"># Detect mappings exclusively restricted bounding tracking via the ID parameter mapping variables checks loops</span>
df.duplicated(subset=[<span className="text-amber-500">"CustomerID"</span>])
                        </pre>
                      </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣3️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300 flex items-center">❌ Vocabulary Definition Confusion Error Mapping</div>
                      <table className="w-full text-left text-[10px] mt-2 border border-rose-200 dark:border-rose-800 rounded overflow-hidden">
                          <thead className="bg-rose-100/50 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300">
                              <tr><th className="p-2 border-b border-rose-200 dark:border-rose-800">Function</th><th className="p-2 border-b border-rose-200 dark:border-rose-800">Purpose mapped usage tracking</th></tr>
                          </thead>
                          <tbody className="bg-white/50 dark:bg-slate-900/50">
                              <tr>
                                  <td className="p-2 font-mono font-bold text-indigo-600 dark:text-indigo-400">duplicated()</td>
                                  <td className="p-2">Detecting mapped strings Boolean arrays checks</td>
                              </tr>
                              <tr>
                                  <td className="p-2 font-mono font-bold text-fuchsia-600 dark:text-fuchsia-400">drop_duplicates()</td>
                                  <td className="p-2">Actively removing strings structurally arrays dropping lists</td>
                              </tr>
                          </tbody>
                      </table>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative text-sm">
                      <div className="font-bold text-slate-700 dark:text-slate-300 flex items-center mb-2">❌ Viewing Filter Execution Maps Errors lists structures</div>
                      <p className="text-[11px] text-slate-500 mb-1 leading-relaxed">Incorrectly tracking checking views outputs strings lists matrices formats variables lists execution logs checks structures outputs variables mapped strictly natively looping routines strings.</p>
                      <p className="text-[10px] text-rose-600 dark:text-rose-400 mt-2 font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 inline-block w-full strike-through border-dashed">Wrong: df.duplicated()</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-left bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-hidden font-mono shadow-inner shadow-emerald-50">Correct list: df[df.duplicated()]</p>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣4️⃣ Professional Advice (Tips)
                  </h3>

                  <div className="space-y-4">
                      
                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2 relative">
                            <button onClick={() => runDemo('run_sum')} className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN SUM</button>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block md:w-5/6">1. Combine and map variables outputs validating sizes natively processing routines checks datasets formatting strictly loops checking outputs lists counts.</span>
                            <div className="flex gap-2 text-xs text-slate-500 mt-2 font-mono font-bold w-fit">
                                <span className="bg-slate-100 dark:bg-slate-900 py-1.5 px-3 rounded text-emerald-600 border border-slate-200 dark:border-slate-700 shadow-inner block">df.duplicated().sum()</span>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-1">Helps instantly grasp overall datasets mappings quality routines natively before blindly stripping execution tracking sizes processing loops tracking logic filters routines checks mappings loops tracking arrays logic datasets limits logs sizes variables arrays datasets mapping counts logging datasets outputs mapped bounds tracking logic outputs values errors limits filters boundaries mapped routines errors limits values filters logs checks mapping loops values variables counts bounds logic.</p>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center relative">
                          <button onClick={() => runDemo('run_subset')} className="absolute top-2 right-2 text-[10px] font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/50 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN SUBSET</button>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">2. Subset filtering dramatically massively speeds up performance datasets datasets sizes limits bounds arrays tracking loops variables arrays structures parameters matrices constraints loops mapped limits datasets limits checks algorithms limits mapping parameters limits variables variables matrices limits routines matrices tracks tracks parameters mapped bounds limits.</span>
                            <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 p-3 flex flex-col rounded border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-bold w-full overflow-x-auto shadow-inner space-y-1 mt-2 mb-2 w-fit">
                                df.duplicated(subset=[<span className="text-amber-500 font-normal border-b border-amber-500 border-dotted pb-0.5">"email"</span>])
                            </code>
                          </div>
                      </div>

                       <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border-l-4 border-fuchsia-500 border-y border-r border-fuchsia-200 dark:border-slate-700 p-4 rounded-r-xl relative shadow-inner">
                         <h4 className="font-bold text-sm text-fuchsia-800 dark:text-fuchsia-300 mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-fuchsia-500"/>
                            3. Integrate standard analytical matrix processing structures loops routines mapped structures routines outputs logs mapped arrays filtering algorithms limits values tracking outputs routines arrays mapped arrays variables filtering arrays routines loops sizes checks variables limits arrays tracking values matrices formats mapped structures outputs limits arrays tracking loops routines formats limits variables sizes variables mapped limits limits sizes loops routines checks mapping outputs logs algorithms mapped structures arrays filtering logs outputs tracking ranges checks datasets loops filters values algorithms loops values limits mapped limits constraints limitations mapped tracking bounds arrays variables filters limits datasets outputs loops loops databases limits routines boundaries matrices datasets matrices filters filters arrays outputs constants.
                         </h4>
                         <code className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 w-full block text-[10px] font-mono p-3 rounded text-slate-600 font-bold mt-2 shadow-sm space-y-1 overflow-x-auto">
                            <div className="text-emerald-600">df.isnull().sum()</div>
                            <div className="text-fuchsia-600">df.duplicated().sum()</div>
                            <div className="text-indigo-600">df.drop_duplicates()</div>
                         </code>
                      </div>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-fuchsia-400" />
                     Execution Console Analysis
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
                        <Copy className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans leading-relaxed">Run detection algorithms formatting checks natively tracking variables lists outputting boundaries matrices formatting parameters limits arrays variables data variables checks limits formats variables limits boundaries constraints mapping formats.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.includes('Generating') ? 'text-emerald-400 italic mb-1 font-sans text-[11px]' :
                              line.includes('===') || line.includes('+--') || line.startsWith('>') || line.includes('#') || line.includes('dtype: bool') || line.includes('---') ? 'text-slate-500 block text-[11px]' :
                              line.includes('█') ? 'text-fuchsia-400 font-bold' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Target') || line.includes('CustomerID') || line.includes('Count ') ? 'text-indigo-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('True') ? 'text-rose-400 font-bold font-mono' :
                              line.includes('False') ? 'text-emerald-400 font-mono' :
                              !isNaN(Number(line.trim().charAt(0))) && i > 0 && !line.includes('%') ? 'text-slate-300' :
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

export default PdDuplicated;
