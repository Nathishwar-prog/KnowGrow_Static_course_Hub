import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Layers, 
  AlertTriangle, Table, Settings, 
  BarChart, Filter, Eraser, Search, Beaker, Scissors
} from 'lucide-react';

const PdDropna: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'operations' | 'parameters' | 'visuals' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '1  Sara   NaN  60000.0',
          '2  Mike  28.0      NaN',
          '3  Anna  35.0  70000.0'
        ];
        break;
      case 'check_nan':
        outLines = [
          '> df.isnull().sum()',
          'Name      0',
          'Age       1',
          'Salary    1',
          'dtype: int64'
        ];
        break;
      case 'drop_default':
        outLines = [
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '3  Anna  35.0  70000.0'
        ];
        break;
      case 'drop_axis1':
        outLines = [
          '   Name',
          '0  John',
          '1  Sara',
          '2  Mike',
          '3  Anna'
        ];
        break;
      case 'drop_all':
        outLines = [
          '> # Since no row is *completely* empty (all NaN),',
          '> # no rows are dropped when using how="all"',
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '1  Sara   NaN  60000.0',
          '2  Mike  28.0      NaN',
          '3  Anna  35.0  70000.0'
        ];
        break;
      case 'drop_subset':
        outLines = [
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '2  Mike  28.0      NaN',
          '3  Anna  35.0  70000.0'
        ];
        break;
      case 'drop_thresh':
        outLines = [
          '> # Keeps rows with AT LEAST 2 non-NaN values',
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '1  Sara   NaN  60000.0',
          '2  Mike  28.0      NaN',
          '3  Anna  35.0  70000.0'
        ];
        break;
      case 'inplace_demo':
        outLines = [
          '> df.dropna(inplace=True)',
          '',
          '> print(df) # Memory is permanently updated',
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '3  Anna  35.0  70000.0'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Bar Chart (Salary Distribution)...',
          'Notice Sara and Mike are excluded due to missing data.',
          '========================================',
          'Salary |',
          ' 70000 |                  [██]',
          ' 50000 |    [██]',
          '       +-------------------------',
          '             John         Anna'
        ];
        break;
      case 'real_world':
        outLines = [
          '   Customer            Email  Phone',
          '0      Ravi   ravi@email.com  98765',
          '1     Meena              NaN  87654',
          '2     Arjun  arjun@email.com    NaN',
          '',
          '> # df.dropna(subset=["Email"])',
          '   Customer            Email  Phone',
          '0      Ravi   ravi@email.com  98765',
          '2     Arjun  arjun@email.com    NaN',
          '> # Meena dropped because Email was NaN'
        ];
        break;
      case 'alternatives':
        outLines = [
          '> # Filling missing data instead of dropping',
          '> df.fillna(0)',
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '1  Sara   0.0  60000.0',
          '2  Mike  28.0      0.0',
          '3  Anna  35.0  70000.0'
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
        <div className="inline-flex items-center justify-center p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-6 shadow-sm border border-orange-200 dark:border-orange-800/50">
          <Eraser className="w-10 h-10 text-orange-600 dark:text-orange-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Dropna <code className="text-orange-600 dark:text-orange-400 text-3xl sm:text-4xl bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-xl">.dropna()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Clean datasets effectively by removing missing (NaN) values. This is a critical first step in data preprocessing before training machine learning models or analyzing metrics.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-orange-500" />
            NaN Cleanser Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('operations')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'operations' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Scissors className="w-4 h-4 mr-1.5" /> 5️⃣-6️⃣ Operations
            </button>
            <button
              onClick={() => setActiveTab('parameters')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'parameters' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Settings className="w-4 h-4 mr-1.5" /> 7️⃣-🔟 Parameters
            </button>
             <button
              onClick={() => setActiveTab('visuals')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'visuals' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 1️⃣2️⃣-1️⃣3️⃣ Visuals
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
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
                    <Table className="w-5 h-5 text-orange-500 mr-2" />
                    1️⃣ What is <code className="mx-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1 rounded">dropna()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>It is a Pandas method used to selectively remove rows or columns that contain missing (NaN) values in a dataset block.</p>
                     <p className="font-bold border-l-4 border-orange-500 pl-3 bg-orange-50 dark:bg-orange-900/10 py-2">In simple words: <code className="text-orange-600 dark:text-orange-400 font-mono">dropna()</code> deletes data nodes that are empty or broken.</p>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    2️⃣ Why is it Important?
                  </h3>
                  <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 p-4 rounded-xl shadow-sm text-sm text-slate-700 dark:text-slate-300">
                    <p className="mb-2 font-bold text-rose-800 dark:text-rose-400">Missing Null data arrays cause critical application failures:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Incorrect analysis mapping algorithms</li>
                      <li>Incomplete statistical averages calculating NaN as 0</li>
                      <li>Mathematical structural data inconsistency</li>
                      <li>Critical parsing errors during Machine Learning modeling loops</li>
                    </ul>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-indigo-500 mr-2" />
                    3️⃣ Basic Syntax & Parameters
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700 font-mono text-[11px] sm:text-xs text-indigo-600 dark:text-indigo-400 font-bold overflow-x-auto">
                          DataFrame.dropna(axis=0, how='any', thresh=None, subset=None, inplace=False)
                      </div>
                      <table className="w-full text-left text-sm">
                          <thead className="bg-white dark:bg-slate-950 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                              <tr>
                                  <th className="p-3">Parameter</th>
                                  <th className="p-3">Description</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 text-xs sm:text-sm">
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-indigo-600 dark:text-indigo-400">axis</td>
                                  <td className="p-3"><code className="font-bold font-mono">0</code> = drop rows, <code className="font-bold font-mono">1</code> = drop columns</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-sky-600 dark:text-sky-400">how</td>
                                  <td className="p-3"><code className="font-bold font-mono">any</code> removes rows with any NaN, <code className="font-bold font-mono">all</code> removes rows if all mapping values are exclusively NaN</td>
                              </tr>
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-amber-600 dark:text-amber-400">thresh</td>
                                  <td className="p-3">Minimum integer number of non-NaN values required to prevent dropping</td>
                              </tr>
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-fuchsia-600 dark:text-fuchsia-400">subset</td>
                                  <td className="p-3">Specific single/array lists of columns to check explicitly for missing values</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-emerald-600 dark:text-emerald-400">inplace</td>
                                  <td className="p-3">Modify the original mapped local DataFrame block permanently</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-8">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full flex flex-col items-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASE</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2 w-full flex items-center justify-between">
                                4️⃣ Example Dataset 
                                <span className="text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-2 py-1 rounded">Contains 2 NaNs</span>
                            </h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto">
import pandas as pd
import numpy as np

data = {'{'}
    <span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Sara"</span>, <span className="text-amber-500">"Mike"</span>, <span className="text-amber-500">"Anna"</span>],
    <span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500">25</span>, <span className="text-rose-500 font-bold">np.nan</span>, <span className="text-emerald-500">28</span>, <span className="text-emerald-500">35</span>],
    <span className="text-amber-500">"Salary"</span>: [<span className="text-emerald-500">50000</span>, <span className="text-emerald-500">60000</span>, <span className="text-rose-500 font-bold">np.nan</span>, <span className="text-emerald-500">70000</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>

                     <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2 mt-8">
                      <h3 className="font-bold text-slate-900 dark:text-white flex items-center">
                        <Search className="w-5 h-5 text-indigo-500 mr-2" />
                        1️⃣1️⃣ Checking Missing Values (Pre-Req)
                      </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Before removing missing values blindly, it is standard professional practice to detect and tally them to understand the loss variable scale.</p>

                  <button onClick={() => runDemo('check_nan')} className="text-left group w-full">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN TALLY</div>
                      <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-3 ml-1">Sum missing elements null tracker matrix</h4>
                      <code className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-indigo-900/50 shadow-sm block w-fit border-l-4 border-l-indigo-500 mb-2">df.isnull().sum()</code>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'operations' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Scissors className="w-5 h-5 text-sky-500 mr-2" />
                        5️⃣-6️⃣ Standard Deletion Logic
                  </h3>
                  
                  <div className="space-y-4">
                      {/* Drop Rows default */}
                      <button onClick={() => runDemo('drop_default')} className="text-left group w-full">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-xl p-5 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DEFAULT (ROWS)</div>
                          <h4 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-2 flex items-center justify-between">
                             5️⃣ Removing Rows with Missing Values
                             <span className="text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1 py-0.5 rounded ml-2">axis=0</span>
                          </h4>
                          <code className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-sky-900/50 shadow-sm block w-fit mb-3">df.dropna()</code>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Runs on default <code className="font-mono">axis=0</code> and <code className="font-mono">how='any'</code> mappings. Sara (missing Age) and Mike (missing Salary) are dropped completely.</p>
                        </div>
                      </button>

                      {/* Drop Cols */}
                      <button onClick={() => runDemo('drop_axis1')} className="text-left group w-full">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN COLS (AXIS 1)</div>
                          <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-2 flex items-center justify-between">
                             6️⃣ Dropping Columns with Missing Values
                             <span className="text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1 py-0.5 rounded ml-2">axis=1</span>
                          </h4>
                          <code className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-indigo-900/50 shadow-sm block w-fit mb-3">df.dropna(<span className="text-amber-500 font-bold">axis=1</span>)</code>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Passing variable trigger 1 completely drops the structural vertical column components mapping if a single null exists. Drops entire Age & Salary columns.</p>
                        </div>
                      </button>
                  </div>

                </div>
              )}

               {activeTab === 'parameters' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Settings className="w-5 h-5 text-fuchsia-500 mr-2" />
                        7️⃣-🔟 Granular Configuration Methods
                  </h3>
                  
                  <div className="space-y-4">
                      
                      {/* how=all */}
                      <button onClick={() => runDemo('drop_all')} className="text-left group w-full">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN HOW=ALL</div>
                          <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">7️⃣ Using <code className="text-fuchsia-500 font-mono text-sm ml-1">how='all'</code></h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.dropna(how=<span className="text-fuchsia-500">"all"</span>)</code>
                          <p className="text-[10px] text-slate-500">Only removes rows if <u>every single value</u> across all dimensions is entirely missing.</p>
                        </div>
                      </button>

                      {/* Subset */}
                      <button onClick={() => runDemo('drop_subset')} className="text-left group w-full">
                       <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 border-y border-r border-emerald-200 dark:border-slate-700 rounded-r-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SUBSET</div>
                            <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-400 mb-2">8️⃣ Using <code className="text-emerald-500 font-mono text-sm ml-1">subset=</code> Parameter</h4>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Ignore Nulls natively present internally unless mapped missing triggers exist inside targeted mapping columns explicitly.</p>
                            <code className="text-xs sm:text-sm bg-white dark:bg-slate-950 font-bold p-2 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 rounded block w-fit shadow-inner mb-2">df.dropna(subset=[<span className="text-amber-500 font-normal">"Age"</span>])</code>
                            <p className="text-[10px] text-slate-500 mt-2">Mike's missing Salary is ignored, but Sara is removed because her Age specifically is missing.</p>
                       </div>
                      </button>

                      {/* Thresh */}
                      <button onClick={() => runDemo('drop_thresh')} className="text-left group w-full">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN THRESH</div>
                          <h4 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-2">9️⃣ Using <code className="text-sky-500 font-mono text-sm ml-1">thresh=</code></h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.dropna(thresh=<span className="text-emerald-500">2</span>)</code>
                          <p className="text-[10px] text-slate-500 leading-relaxed w-[90%]">Allows keeping rows dropping provided they fulfill mapping requirements containing at minimum N integer amounts of completely valid non-NaN integers mapped objects mapping.</p>
                        </div>
                      </button>

                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6 text-sm">
                    <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                    🔟 Make Changes Permanent (<code className="ml-1 text-amber-500 font-mono">inplace=True</code>)
                  </h3>
                  
                  <button onClick={() => runDemo('inplace_demo')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300 relative hover:border-amber-400 transition-colors">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN INPLACE</div>
                        By default, methods return a new DataFrame mapping detached memory reference. Modify directly:
                        <div className="mt-3 bg-white dark:bg-slate-950 p-2 font-mono text-xs rounded border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 w-fit font-bold shadow-sm">
                            df.dropna(<span className="text-amber-500">inplace=True</span>)
                        </div>
                      </div>
                  </button>

                </div>
              )}

               {activeTab === 'visuals' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <BarChart className="w-5 h-5 text-emerald-500 mr-2" />
                      1️⃣2️⃣ Visualization Post-Processing
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-8">
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN VIZ</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">After cleaning missing values securely mapping, we visualize the dataset preventing formatting crash pipeline issues.</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1">
import matplotlib.pyplot as plt

df.<span className="text-emerald-500 font-bold">dropna</span>().<span className="text-sky-500 font-bold">plot</span>(x=<span className="text-amber-500">"Name"</span>, y=<span className="text-amber-500">"Salary"</span>, kind=<span className="text-amber-500">"bar"</span>)

plt.title(<span className="text-amber-500">"Salary Distribution"</span>)
plt.show()
                          </pre>
                        </div>
                      </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Beaker className="w-5 h-5 text-indigo-500 mr-2" />
                      1️⃣3️⃣ Real-World Customer Filtering
                  </h3>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full mb-4">
                      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN FILTER</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-bold">Scenario: Removing users providing absent critical metrics mapping elements (Email constraint lock requirement).</p>
                        
                        <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto mb-3">
data = {'{'}
    <span className="text-amber-500">"Customer"</span>: [<span className="text-amber-500">"Ravi"</span>, <span className="text-amber-500">"Meena"</span>, <span className="text-amber-500">"Arjun"</span>],
    <span className="text-amber-500">"Email"</span>: [<span className="text-amber-500">"ravi@e"</span>, <span className="text-rose-500 font-bold">np.nan</span>, <span className="text-amber-500">"arj@e"</span>],
    <span className="text-amber-500">"Phone"</span>: [<span className="text-amber-500">"98765"</span>, <span className="text-amber-500">"87654"</span>, <span className="text-rose-500 font-bold">np.nan</span>]
{'}'}
df = pd.DataFrame(data)

<span className="text-slate-400 italic"># If email is essential, prune rows missing specifically Email mappings</span>
df.dropna(subset=[<span className="text-amber-500">"Email"</span>], inplace=<span className="text-indigo-500 font-bold">True</span>)
                        </pre>
                      </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣4️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">❌ Not checking missing values first</div>
                       <p className="text-[11px] text-slate-500 mb-2 leading-tight">Calling native dropping algorithm commands directly without grasping the overall damage proportion magnitude to total dataset integer records available.</p>
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-emerald-100 dark:border-emerald-900 inline-block w-full">Always run: <code className="ml-1 tracking-wide font-mono">df.isnull().sum()</code></p>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative text-sm">
                      <div className="font-bold text-slate-700 dark:text-slate-300 flex items-center mb-2">❌ Variable Assignment Voiding</div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-1 leading-relaxed">Expecting original DataFrame to magically change when executing <span className="font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-1">dropna()</span> block sequence arrays directly referencing mapping values.</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-center bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold">Use: `inplace=True` or `df = df.dropna()`</p>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣5️⃣ Professional Advice (Tips)
                  </h3>

                  <div className="space-y-4">
                      
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center relative">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block md:w-48 shrink-0">1. Fill values instead of wiping row completely.</span>
                            <div className="flex-1 w-full relative group">
                                <button onClick={() => runDemo('alternatives')} className="absolute top-0 right-0 text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">RUN FILLNA</button>
                                <p className="text-[10px] text-slate-500 mb-2">Sometimes it is better to fill missing values preventing data deletion loss map size arrays.</p>
                                <div className="flex flex-wrap gap-2">
                                    <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 font-bold shadow-sm whitespace-nowrap">df.fillna(0)</code>
                                    <span className="text-xs text-slate-400 flex items-center">-or-</span>
                                    <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 text-sky-600 dark:text-sky-400 font-bold shadow-sm whitespace-nowrap">df.fillna(df.mean())</code>
                                </div>
                            </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                          <div className="w-full relative">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">2. Combine Data Cleaning Full Workflow</span>
                            <p className="text-[10px] text-slate-500 mb-2">Real-world pipeline commonly used natively by professional enterprise Data Science tracking operations systems metrics algorithms modeling layers routines processing sequentially.</p>
                            <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 p-3 flex flex-col rounded border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-bold w-full overflow-x-auto shadow-inner space-y-1">
                                <span>df.isnull().sum()</span>
                                <span>df.dropna()</span>
                                <span>df.drop_duplicates()</span>
                                <span>df.reset_index(drop=<span className="text-amber-500 font-normal">True</span>)</span>
                            </code>
                          </div>
                      </div>

                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-orange-400" />
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
                        <Eraser className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans">Run dropna logic to view how Missing values map nulls are filtered formatting securely.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.includes('Generating') || line.includes('Notice Sara') ? 'text-emerald-400 italic mb-1 font-sans text-[11px]' :
                              line.includes('===') || line.includes('+--') || line.startsWith('>') || line.includes('#') || line.includes('dtype: ') ? 'text-slate-500 block text-[11px]' :
                              line.includes('█') ? 'text-orange-400 font-bold' :
                              line.includes('Name') || line.includes('Age') || line.includes('Salary') || line.includes('Customer') || line.includes('Email') || line.includes('Phone') ? 'text-indigo-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('NaN') ? 'text-rose-400 font-bold font-mono' :
                              !isNaN(Number(line.trim().charAt(0))) && i > 0 && !line.includes('%') ? 'text-emerald-300' :
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

export default PdDropna;
