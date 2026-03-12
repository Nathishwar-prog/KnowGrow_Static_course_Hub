import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Layers, 
  AlertTriangle, Table, Settings, 
  BarChart, Type, FileSearch, Zap, ShieldCheck,
  Search
} from 'lucide-react';

const PdDtypes: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'types' | 'casting' | 'select' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '   Name  Age   Salary  IsEmployee',
          '0  John   25  50000.5        True',
          '1  Sara   30  60000.0        True',
          '2  Mike   28  55000.2       False'
        ];
        break;
      case 'check_dtypes':
        outLines = [
          '> df.dtypes',
          'Name           object',
          'Age             int64',
          'Salary        float64',
          'IsEmployee       bool',
          'dtype: object'
        ];
        break;
      case 'check_single':
        outLines = [
          '> df["Age"].dtype',
          'dtype(\'int64\')'
        ];
        break;
      case 'astype_demo':
        outLines = [
          '> df["Age"] = df["Age"].astype(float)',
          '> df["Age"].dtype',
          'dtype(\'float64\')'
        ];
        break;
      case 'datetime_demo':
        outLines = [
          '> # Initial mapping: object (string)',
          '> df["Date"] = pd.to_datetime(["2024-01-01", "2024-01-02"])',
          '> df["Date"].dtype',
          'dtype(\'<M8[ns]\') # Pandas datetime64 internal mapping'
        ];
        break;
      case 'select_numeric':
        outLines = [
          '> df.select_dtypes(include=["number"])',
          '   Age   Salary',
          '0   25  50000.5',
          '1   30  60000.0',
          '2   28  55000.2'
        ];
        break;
      case 'select_object':
        outLines = [
          '> df.select_dtypes(include=["object"])',
          '   Name',
          '0  John',
          '1  Sara',
          '2  Mike'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Bar Chart (Numeric Data Only)...',
          'df.select_dtypes(include="number").plot(kind="bar")',
          '========================================',
          'Value |',
          '60k   |          [██]',
          '55k   |                   [██]',
          '50k   |  [██]',
          '  0   |  [__]    [__]     [__]',
          '       +-------------------------',
          '          Age    Salary    Age'
        ];
        break;
      case 'real_world':
        outLines = [
          '   Product  Price  Quantity',
          '0   Laptop  80000         5',
          '1    Phone  30000        10',
          '',
          '> df.dtypes',
          'Product     object',
          'Price        int64',
          'Quantity     int64',
          '',
          '> # Calculations are safe!'
        ];
        break;
      case 'info_demo':
        outLines = [
          '> df.info()',
          '<class \'pandas.core.frame.DataFrame\'>',
          'RangeIndex: 3 entries, 0 to 2',
          'Data columns (total 4 columns):',
          ' #   Column      Non-Null Count  Dtype  ',
          '---  ------      --------------  -----  ',
          ' 0   Name        3 non-null      object ',
          ' 1   Age         3 non-null      int64  ',
          ' 2   Salary      3 non-null      float64',
          ' 3   IsEmployee  3 non-null      bool   ',
          'dtypes: bool(1), float64(1), int64(1), object(1)',
          'memory usage: 203.0+ bytes'
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
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6 shadow-sm border border-blue-200 dark:border-blue-800/50">
          <Type className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Data Types <code className="text-blue-600 dark:text-blue-400 text-3xl sm:text-4xl bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-xl">.dtypes</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Understanding internal structures. Finding out what kind of data lives inside your columns is the most critical first step before launching into analytical math operations.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-blue-500" />
            Types Inspector Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-blue-600 text-white shadow-blue-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('types')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'types' ? 'bg-blue-600 text-white shadow-blue-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Layers className="w-4 h-4 mr-1.5" /> 5️⃣-7️⃣ Inspection
            </button>
            <button
              onClick={() => setActiveTab('casting')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'casting' ? 'bg-blue-600 text-white shadow-blue-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Zap className="w-4 h-4 mr-1.5" /> 8️⃣-9️⃣ Casting
            </button>
             <button
              onClick={() => setActiveTab('select')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'select' ? 'bg-blue-600 text-white shadow-blue-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <FileSearch className="w-4 h-4 mr-1.5" /> 🔟-1️⃣2️⃣ Selection/Viz
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-blue-600 text-white shadow-blue-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
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
                    <Table className="w-5 h-5 text-blue-500 mr-2" />
                    1️⃣ What is <code className="mx-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-1 rounded font-mono">dtypes</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>It is a Pandas DataFrame <b>attribute</b> that displays the underlying programmed data type of each column in a dataset natively natively.</p>
                     <p className="font-bold border-l-4 border-blue-500 pl-3 bg-blue-50 dark:bg-blue-900/10 py-2">It proves if a column contains strings, decimals, booleans, or parsed DateTimes.</p>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" />
                    2️⃣ Why is it Important?
                  </h3>
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/50 p-4 rounded-xl shadow-sm text-sm text-slate-700 dark:text-slate-300">
                    <p className="mb-2 font-bold text-emerald-800 dark:text-emerald-500">Knowing data types allows you to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Perform accurate mathematical calculations.</li>
                      <li>Detect corrupted mappings (e.g. Sales saved as 'text' strings).</li>
                      <li>Execute automated casting logic conversions.</li>
                      <li>Feed variables into strict typed Machine Learning array structures safely.</li>
                    </ul>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-4 h-4 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded font-mono text-sm border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-inner block w-fit">
                    df.dtypes
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Notice the lack of <code className="font-mono">()</code>? It operates as a direct class attribute mapping array, not a callable functional calculation!</p>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-8">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full flex flex-col items-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASE</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2 w-full flex items-center justify-between">
                                4️⃣ Example Dataset Structure
                            </h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto">
import pandas as pd

data = {'{'}
    <span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Sara"</span>, <span className="text-amber-500">"Mike"</span>],
    <span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500">25</span>, <span className="text-emerald-500">30</span>, <span className="text-emerald-500">28</span>],
    <span className="text-amber-500">"Salary"</span>: [<span className="text-sky-500">50000.5</span>, <span className="text-sky-500">60000.0</span>, <span className="text-sky-500">55000.2</span>],
    <span className="text-amber-500">"IsEmployee"</span>: [<span className="text-rose-500 font-bold">True</span>, <span className="text-rose-500 font-bold">True</span>, <span className="text-rose-500 font-bold">False</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                    <p className="text-xs text-slate-500 mt-2 text-center">We will analyze the 4 different datatypes loaded inside this frame.</p>

                </div>
              )}

              {activeTab === 'types' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                      <h3 className="font-bold text-slate-900 dark:text-white flex items-center">
                        <FileSearch className="w-5 h-5 text-blue-500 mr-2" />
                        5️⃣ Checking Full Frame Types
                      </h3>
                  </div>

                  <button onClick={() => runDemo('check_dtypes')} className="text-left group w-full">
                    <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 rounded-xl p-4 hover:border-blue-400 dark:hover:border-blue-700 transition-colors shadow-sm h-full relative">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DTYPES</div>
                      <code className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-blue-900/50 shadow-sm block w-fit border-l-4 border-l-blue-500 mb-2">df.dtypes</code>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-bold">Returns a Series array detailing the exact internal system mappings for every column layout.</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Table className="w-5 h-5 text-indigo-500 mr-2" />
                    6️⃣ Common Pandas Data Types Summary
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <table className="w-full text-left text-sm">
                          <thead className="bg-white dark:bg-slate-950 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                              <tr>
                                  <th className="p-3">Data Type</th>
                                  <th className="p-3">Description</th>
                                  <th className="p-3">Example Map</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 text-[11px] sm:text-xs">
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-900/10">object</td>
                                  <td className="p-3">Text Strings or mixed structural values</td>
                                  <td className="p-3 text-slate-500 italic">"Name"</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/10">int64</td>
                                  <td className="p-3">Strict Whole Integer numerical blocks</td>
                                  <td className="p-3 text-slate-500 italic">"Age" (25)</td>
                              </tr>
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-50/50 dark:bg-sky-900/10">float64</td>
                                  <td className="p-3">Decimal mapped fractional floating digits</td>
                                  <td className="p-3 text-slate-500 italic">"Salary" (55000.5)</td>
                              </tr>
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-900/10">bool</td>
                                  <td className="p-3">Binary Absolute Logic True/False elements</td>
                                  <td className="p-3 text-slate-500 italic">"IsEmployee"</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50/50 dark:bg-fuchsia-900/10">datetime64</td>
                                  <td className="p-3">Date, Time, or Timedelta variables</td>
                                  <td className="p-3 text-slate-500 italic">Date logs</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Search className="w-5 h-5 text-teal-500 mr-2" />
                    7️⃣ Single Column Targeting Specifics
                  </h3>

                  <button onClick={() => runDemo('check_single')} className="text-left group w-full">
                       <div className="bg-teal-50 dark:bg-teal-900/10 border-l-4 border-teal-500 border-y border-r border-teal-200 dark:border-slate-700 rounded-r-xl p-4 hover:border-teal-400 dark:hover:border-teal-700 transition-colors shadow-sm relative">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN TARGET</div>
                            <code className="text-xs sm:text-sm bg-white dark:bg-slate-950 font-bold p-2 text-teal-700 dark:text-teal-400 border border-slate-200 dark:border-slate-700 rounded block w-fit shadow-inner mb-2">df[<span className="text-amber-500 font-normal">"Age"</span>].dtype</code>
                            <p className="text-[10px] text-slate-500 leading-relaxed font-bold">Only outputs one specific label without the series. Notice it returns exactly singular `dtype` without an 's'.</p>
                       </div>
                  </button>

                </div>
              )}

               {activeTab === 'casting' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Zap className="w-5 h-5 text-fuchsia-500 mr-2" />
                        8️⃣ Changing Types Natively (<code className="ml-1 text-fuchsia-500 font-mono text-xl">astype()</code>)
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Sometimes mapped system logic captures elements incorrectly requiring forced casting mappings utilizing <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded font-bold">astype()</code>.</p>
                  
                  <div className="space-y-4">
                      
                      <button onClick={() => runDemo('astype_demo')} className="text-left group w-full">
                        <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-5 hover:border-fuchsia-400 dark:hover:border-fuchsia-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CAST</div>
                          <h4 className="font-bold text-sm text-fuchsia-700 dark:text-fuchsia-400 mb-2">Converting integer Age into a Float structure</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-fuchsia-900/50 shadow-sm block w-fit mb-3">df[<span className="text-amber-500 font-normal">"Age"</span>] = df[<span className="text-amber-500 font-normal">"Age"</span>].astype(<span className="text-emerald-500">float</span>)</code>
                          <p className="text-[11px] text-slate-500">Automatically upgrades our numerical representation variables internally without needing complex logic loops.</p>
                        </div>
                      </button>

                      <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 mt-8 flex items-center text-sm">
                        <FileSearch className="w-4 h-4 text-emerald-500 mr-2" />
                        9️⃣ Converting Text securely into System DateTime Array Strings
                      </h3>

                      <button onClick={() => runDemo('datetime_demo')} className="text-left group w-full">
                       <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DATES</div>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Most CSV text strings importing '2024-01-01' arrive as flat <code className="font-bold text-amber-600 bg-white dark:bg-slate-900 px-1 rounded shadow-sm relative z-10">object</code> structures preventing time math mappings natively. Wrap fields within `pd.to_datetime()`.</p>
                            <code className="text-[10px] xl:text-[11px] bg-white dark:bg-slate-950 font-bold p-3 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 rounded block w-full overflow-x-auto shadow-inner mb-2">df[<span className="text-amber-500 font-normal">"Date"</span>] = pd.to_datetime(df[<span className="text-amber-500 font-normal">"Date"</span>])</code>
                       </div>
                      </button>

                  </div>

                </div>
              )}

               {activeTab === 'select' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Layers className="w-5 h-5 text-indigo-500 mr-2" />
                        🔟 Conditional Selection (<code className="ml-1 text-indigo-500 font-mono text-lg">select_dtypes</code>)
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">You can query the Dataframe strictly isolating blocks matching variables natively.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                      {/* Num */}
                      <button onClick={() => runDemo('select_numeric')} className="text-left group w-full">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN NUM</div>
                          <h4 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-2 mt-2">Select numeric columns</h4>
                          <code className="text-[10px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.select_dtypes(include=[<span className="text-sky-500">"number"</span>])</code>
                        </div>
                      </button>
                      
                       {/* Text */}
                      <button onClick={() => runDemo('select_object')} className="text-left group w-full">
                        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN TXT</div>
                          <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400 mb-2 mt-2">Select text columns</h4>
                          <code className="text-[10px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.select_dtypes(include=[<span className="text-amber-500">"object"</span>])</code>
                        </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                      <BarChart className="w-5 h-5 text-emerald-500 mr-2" />
                      1️⃣1️⃣ Visualization Post-Processing
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-8">
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN VIZ</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Passing invalid Data formats like texts directly into plot matrices causes errors. Filter mappings directly into visualizations cleanly filtering out object string texts utilizing `select_dtypes`.</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1 shadow-inner">
import matplotlib.pyplot as plt

df.<span className="text-sky-500 font-bold">select_dtypes</span>(include=<span className="text-amber-500">"number"</span>).<span className="text-emerald-500 font-bold">plot</span>(kind=<span className="text-amber-500">"bar"</span>)

plt.title(<span className="text-amber-500">"Numeric Data Visualization"</span>)
plt.show()
                          </pre>
                        </div>
                      </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Settings className="w-5 h-5 text-slate-500 mr-2" />
                      1️⃣2️⃣ Real-World Filtering (Sales)
                  </h3>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full mb-4">
                      <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-slate-400 dark:hover:border-slate-600 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CHECK</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-bold">Scenario: Validating Sales data arrays correctly mapped numerical pricing variables natively before analysis mathematical processing logic execution runs.</p>
                        
                        <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto mb-3">
data = {'{'}
    <span className="text-amber-500">"Product"</span>: [<span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Phone"</span>],
    <span className="text-amber-500">"Price"</span>: [<span className="text-emerald-500">80000</span>, <span className="text-emerald-500">30000</span>],
    <span className="text-amber-500">"Quantity"</span>: [<span className="text-emerald-500">5</span>, <span className="text-emerald-500">10</span>]
{'}'}
df = pd.DataFrame(data)

<span className="text-slate-400 italic"># Confirming 'Price' runs mapped via int64 and mathematically calculates</span>
<span className="text-rose-500 font-bold">print</span>(df.dtypes)
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
                      <div className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">❌ Forgetting attributes lack () wrapper methods</div>
                       <p className="text-[11px] text-rose-600 dark:text-rose-400 mb-1">Wrong: <code className="bg-white dark:bg-slate-950 px-1 rounded mx-1 text-slate-800 dark:text-slate-200 border border-rose-200 dark:border-rose-900 border-dashed">df.dtypes()</code></p>
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">Correct: <code className="bg-white dark:bg-slate-950 px-1 rounded mx-1 text-slate-800 dark:text-slate-200 border border-emerald-200 dark:border-emerald-900 shadow-sm border-l-2 border-l-emerald-500">df.dtypes</code></p>
                      <p className="text-[10px] text-slate-500 mt-2 font-bold">dtypes is an attribute, completely separate from functions or operational method algorithms natively.</p>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative text-sm">
                      <div className="font-bold text-slate-700 dark:text-slate-300 flex items-center mb-2">❌ Wrong data type formats failing operations math mapping outputs</div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-1 leading-relaxed">Attempting calculating variables inside object mapping formats.</p>
                      <code className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-left bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-hidden font-mono shadow-inner shadow-emerald-50 w-full">df["Salary"].astype(float)</code>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣4️⃣ Professional Advice (Tips)
                  </h3>

                  <div className="space-y-4">
                      
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2 relative">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block">1. Always check Data Types first before operations variables filtering natively tracking sets matrices execution outputs logic execution arrays parameters mapping outputs calculations processing mappings!</span>
                            <div className="flex flex-wrap gap-2 text-xs text-slate-500 mt-2 font-mono font-bold">
                                <span className="bg-slate-100 dark:bg-slate-900 py-1.5 px-3 rounded text-amber-600 border border-slate-200 dark:border-slate-700">df.head()</span>
                                <span className="mt-1 text-emerald-400 animate-pulse text-lg leading-none">→</span>
                                <span className="bg-slate-100 dark:bg-slate-900 py-1.5 px-3 rounded text-sky-600 border border-slate-200 dark:border-slate-700">df.dtypes</span>
                            </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center relative">
                          <button onClick={() => runDemo('info_demo')} className="absolute top-2 right-2 text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN INFO</button>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">2. Combine output visualization mapping logs utilizing <code className="bg-slate-100 dark:bg-slate-950 font-mono px-1 rounded text-emerald-500 font-bold mx-1 text-[11px]">info()</code> wrapper variables mapping directly mapped algorithms arrays!</span>
                            <p className="text-[10px] text-slate-500 mt-1 mb-2">Generates mapped system memory readouts logging variables tracking elements matrix processing dynamically mappings natively arrays!</p>
                            <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 p-3 flex flex-col rounded border border-slate-200 dark:border-slate-700 text-sky-600 dark:text-sky-400 font-bold w-full overflow-x-auto shadow-inner space-y-1 block w-fit">
                                df.info()
                            </code>
                          </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 border-y border-r border-blue-200 dark:border-slate-700 p-4 rounded-r-xl relative shadow-inner">
                         <h4 className="font-bold text-sm text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                            <Settings className="w-4 h-4 mr-2 text-blue-500"/>
                            3. Use precise explicit limits arrays structures arrays to limit processing RAM overhead tracking natively constraints variables logic memory!
                         </h4>
                         <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 mt-2 leading-relaxed">Default integers consume <code className="font-mono bg-white dark:bg-slate-950">int64</code> space formats mapping arrays tracking natively limitations calculations natively processing logic outputs computations processing computations. Overwrite into <code className="font-mono font-bold px-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded">"int32"</code> to slash dataset arrays mapping calculations by exactly 50% computations arrays natively!</p>
                         <code className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 w-full block text-[11px] font-mono p-3 rounded text-slate-600 font-bold mt-2 shadow-sm">df[<span className="text-amber-500 font-normal">"Age"</span>] = df[<span className="text-amber-500 font-normal">"Age"</span>].astype(<span className="text-fuchsia-500 font-normal">"int32"</span>)</code>
                      </div>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-blue-400" />
                     Execution Console
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
                        <Type className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans">Run inspection operations determining what foundational formatting blocks make up the dataset structure mathematically strings integers blocks constraints calculations computations variables parameters calculations natively structures mapping values filters arrays mapping.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.includes('Generating') || line.includes('Calculations') ? 'text-emerald-400 italic mb-1 font-sans text-[11px]' :
                              line.includes('===') || line.includes('+--') || line.startsWith('>') || line.includes('#') || line.includes('dtype: ') || line.includes('---') ? 'text-slate-500 block text-[11px]' :
                              line.includes('█') ? 'text-blue-400 font-bold' :
                              line.includes('Name') || line.includes('Age') || line.includes('Salary') || line.includes('IsEmployee') || line.includes('Product') || line.includes('Price') || line.includes('Quantity') || line.includes('Value') || line.includes('Column ') ? 'text-indigo-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('object') ? 'text-amber-400 font-bold font-mono' :
                              line.includes('int64') || line.includes('int32') ? 'text-emerald-300 font-bold font-mono' :
                              line.includes('float64') || line.includes('float') ? 'text-sky-300 font-bold font-mono' :
                              line.includes('bool') ? 'text-rose-400 font-bold font-mono' :
                              line.includes('datetime') || line.includes('<M8') ? 'text-fuchsia-400 font-bold font-mono' :
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

export default PdDtypes;
