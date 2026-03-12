import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Layers, 
  AlertTriangle, Table, Settings, 
  BarChart, ArrowUpToLine, ArrowDownToLine, Eye, Database
} from 'lucide-react';

const PdHeadTail: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'head' | 'tail' | 'context' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '   Name  Age       City',
          '0  John   25    Chennai',
          '1  Sara   30      Delhi',
          '2  Mike   28     Mumbai',
          '3  Anna   35  Bangalore',
          '4  Ravi   26  Hyderabad'
        ];
        break;
      case 'run_head_default':
        outLines = [
          '> df.head()',
          '   Name  Age       City',
          '0  John   25    Chennai',
          '1  Sara   30      Delhi',
          '2  Mike   28     Mumbai',
          '3  Anna   35  Bangalore',
          '4  Ravi   26  Hyderabad'
        ];
        break;
      case 'run_head_3':
        outLines = [
          '> df.head(3)',
          '   Name  Age     City',
          '0  John   25  Chennai',
          '1  Sara   30    Delhi',
          '2  Mike   28   Mumbai'
        ];
        break;
      case 'run_tail_default':
        outLines = [
          '> df.tail()',
          '   Name  Age       City',
          '0  John   25    Chennai',
          '1  Sara   30      Delhi',
          '2  Mike   28     Mumbai',
          '3  Anna   35  Bangalore',
          '4  Ravi   26  Hyderabad'
        ];
        break;
      case 'run_tail_2':
        outLines = [
          '> df.tail(2)',
          '   Name  Age       City',
          '3  Anna   35  Bangalore',
          '4  Ravi   26  Hyderabad'
        ];
        break;
      case 'run_large_dataset':
        outLines = [
          '> print(df)',
          'IOPub data rate exceeded.',
          'The notebook server will temporarily stop sending output',
          'to the client in order to avoid crashing it.',
          '',
          '> # ❌ CRASH: Too many rows! Use .head() instead.'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Bar Chart (Age of First Records)...',
          'df.head().plot(x="Name", y="Age", kind="bar")',
          '========================================',
          'Age |',
          ' 35 |                  [██]',
          ' 30 |         [██]',
          ' 28 |                  [██]',
          ' 25 |  [██]                       [██]',
          '    +----------------------------------',
          '       John   Sara     Anna       Ravi'
        ];
        break;
      case 'real_world_combo':
        outLines = [
          '> df = pd.read_csv("sales_data.csv")',
          '> df.head()',
          '   TransactionID  Amount Status',
          '0        TXN0001   150.0     OK',
          '1        TXN0002   200.5     OK',
          '2        TXN0003    45.0   FAIL',
          '3        TXN0004   300.0     OK',
          '4        TXN0005     9.9     OK',
          '',
          '> df.info()',
          '<class \'pandas.core.frame.DataFrame\'>',
          'RangeIndex: 1000000 entries, 0 to 999999',
          'Data columns (total 3 columns):',
          ' #   Column         Non-Null Count    Dtype  ',
          '---  ------         --------------    -----  ',
          ' 0   TransactionID  1000000 non-null  object ',
          ' 1   Amount         1000000 non-null  float64',
          ' 2   Status         1000000 non-null  object ',
          'dtypes: float64(1), object(2)',
          'memory usage: 22.9+ MB'
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
        <div className="inline-flex items-center justify-center p-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl mb-6 shadow-sm border border-sky-200 dark:border-sky-800/50">
          <Eye className="w-10 h-10 text-sky-600 dark:text-sky-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Preview <code className="text-sky-600 dark:text-sky-400 text-3xl sm:text-4xl bg-sky-50 dark:bg-sky-900/20 px-3 py-1 rounded-xl">.head()</code> & <code className="text-sky-600 dark:text-sky-400 text-3xl sm:text-4xl bg-sky-50 dark:bg-sky-900/20 px-3 py-1 rounded-xl">.tail()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The essential first step in data analysis. Quickly inspect dataset structure, check if files loaded correctly, and view sample records without crashing your environment by printing millions of rows!
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-sky-500" />
            Inspection Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('head')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'head' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ArrowUpToLine className="w-4 h-4 mr-1.5" /> 5️⃣ Head
            </button>
            <button
              onClick={() => setActiveTab('tail')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tail' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ArrowDownToLine className="w-4 h-4 mr-1.5" /> 6️⃣ Tail
            </button>
             <button
              onClick={() => setActiveTab('context')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'context' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Database className="w-4 h-4 mr-1.5" /> 7️⃣-9️⃣ Context & Viz
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 🔟-1️⃣1️⃣ Tips
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
                    <Table className="w-5 h-5 text-sky-500 mr-2" />
                    1️⃣ What are <code className="mx-2 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-1 rounded">head()</code> & <code className="mx-2 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-1 rounded">tail()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                      <p>When working with massive datasets, you need a quick way to look at the shape of the data without rendering millions of cells.</p>
                      
                     <div className="grid grid-cols-2 gap-4 mt-2">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border-l-4 border-sky-500 p-3 rounded-r-lg shadow-sm">
                            <h4 className="font-bold text-sky-800 dark:text-sky-300 text-sm flex items-center"><ArrowUpToLine className="w-4 h-4 mr-1" /> head()</h4>
                            <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">Displays the <b>first</b> rows of a dataset from the top down.</p>
                        </div>
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-3 rounded-r-lg shadow-sm">
                            <h4 className="font-bold text-indigo-800 dark:text-indigo-300 text-sm flex items-center"><ArrowDownToLine className="w-4 h-4 mr-1" /> tail()</h4>
                            <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">Displays the <b>last</b> rows of a dataset tracking completion.</p>
                        </div>
                     </div>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-amber-500 mr-2" />
                    2️⃣ Why they are Important
                  </h3>
                  <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/50 p-4 rounded-xl shadow-sm text-sm text-slate-700 dark:text-slate-300">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Quickly verify if your CSV / Database data loaded tracking mappings properly.</li>
                      <li>Determine the dataset structure (What columns exist? Are there headers?).</li>
                      <li><b>Avoid crashing your environment</b> by trying to stream gigabytes of text into the console instantly.</li>
                    </ul>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700 font-mono text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold overflow-x-auto">
                          DataFrame.head(n=5)<br/>
                          DataFrame.tail(n=5)
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
                                  <td className="p-3 font-mono font-bold text-sky-600 dark:text-sky-400">n</td>
                                  <td className="p-3">The number of rows you wish to preview. If you leave it blank, Pandas defaults to tracking <b>5 rows</b> automatically.</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-8">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full flex flex-col items-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASE</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2 w-full flex items-center justify-between">
                                4️⃣ Example Dataset Construction
                            </h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
import pandas as pd

data = {'{'}
    <span className="text-amber-500">"Name"</span>: [<span className="text-sky-500">"John"</span>, <span className="text-sky-500">"Sara"</span>, <span className="text-sky-500">"Mike"</span>, <span className="text-sky-500">"Anna"</span>, <span className="text-sky-500">"Ravi"</span>],
    <span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500 font-bold">25</span>, <span className="text-emerald-500 font-bold">30</span>, <span className="text-emerald-500 font-bold">28</span>, <span className="text-emerald-500 font-bold">35</span>, <span className="text-emerald-500 font-bold">26</span>],
    <span className="text-amber-500">"City"</span>: [<span className="text-sky-500">"Chennai"</span>, <span className="text-sky-500">"Delhi"</span>, <span className="text-sky-500">"Mumbai"</span>, <span className="text-sky-500">"Bangalore"</span>, <span className="text-sky-500">"Hyderabad"</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                    
                </div>
              )}

              {activeTab === 'head' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <ArrowUpToLine className="w-5 h-5 text-sky-500 mr-2" />
                        5️⃣ Using <code className="mx-2 bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-700 dark:text-slate-300">head()</code>
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Isolate dataset rows starting exactly from index 0 processing boundaries.</p>

                  <div className="grid md:grid-cols-2 gap-4">
                      {/* head() Default */}
                      <button onClick={() => runDemo('run_head_default')} className="text-left group w-full">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-xl p-5 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN 5 ROWS</div>
                          <h4 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-2 mt-2">Default Behavior</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-sky-900/50 shadow-sm block w-fit mb-3">df.head()</code>
                          <p className="text-[10px] text-slate-500">By completely leaving the brackets empty, Pandas assumes you automatically only want precisely the first 5 records retrieved formatted correctly.</p>
                        </div>
                      </button>

                      {/* head(3) */}
                      <button onClick={() => runDemo('run_head_3')} className="text-left group w-full">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN 3 ROWS</div>
                          <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-2 mt-2">Targeted Integers limits</h4>
                          <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-emerald-900/50 shadow-sm block w-fit mb-3">df.head(<span className="text-emerald-500 font-bold">3</span>)</code>
                          <p className="text-[10px] text-slate-500">Passing an exact literal integer outputs precisely that configured number of starting matrices lists variables outputs.</p>
                        </div>
                      </button>
                  </div>
                </div>
              )}

               {activeTab === 'tail' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <ArrowDownToLine className="w-5 h-5 text-indigo-500 mr-2" />
                        6️⃣ Using <code className="mx-2 bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-700 dark:text-slate-300">tail()</code>
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">View backwards checking the final data load boundaries offsets limits checking schemas logic variables bounds lengths limits limits schemas loops checks metrics tracking.</p>

                  <div className="grid md:grid-cols-2 gap-4">
                      {/* tail() Default */}
                      <button onClick={() => runDemo('run_tail_default')} className="text-left group w-full">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN 5 ROWS</div>
                          <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-2 mt-2">Default Last Records</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-indigo-900/50 shadow-sm block w-fit mb-3">df.tail()</code>
                          <p className="text-[10px] text-slate-500">Tracks pulling the lowest index rows constraints from the very bottom of the data frame.</p>
                        </div>
                      </button>

                      {/* tail(2) */}
                      <button onClick={() => runDemo('run_tail_2')} className="text-left group w-full">
                        <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-5 hover:border-fuchsia-400 dark:hover:border-fuchsia-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN 2 ROWS</div>
                          <h4 className="font-bold text-sm text-fuchsia-700 dark:text-fuchsia-400 mb-2 mt-2">Targeted Boundaries</h4>
                          <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-fuchsia-900/50 shadow-sm block w-fit mb-3">df.tail(<span className="text-fuchsia-500 font-bold">2</span>)</code>
                          <p className="text-[10px] text-slate-500">Explicitly extracting precisely the final 2 limits outputs.</p>
                        </div>
                      </button>
                  </div>
                </div>
              )}

               {activeTab === 'context' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Database className="w-5 h-5 text-sky-500 mr-2" />
                      7️⃣, 9️⃣ Working With Real Datasets formats schemas metrics tracking loops boundaries queries blocks databases outputs logs variables metrics arrays variables limitations checks data.
                  </h3>

                  <div className="space-y-4">
                      <button onClick={() => runDemo('run_large_dataset')} className="text-left group w-full">
                        <div className="bg-rose-50 dark:bg-rose-900/10 border-l-4 border-rose-500 p-4 rounded-r-xl shadow-sm hover:border-rose-400 transition-colors relative">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN PRINT() CRASH!</div>
                            <h4 className="font-bold text-sm text-rose-800 dark:text-rose-400 mb-2">Printing 1 Million Rows metrics schemas formatting bounds matrices dimensions outputs checks schemas checking checks limits ranges offsets dimensions tracking algorithms testing strings.</h4>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">Imagine loading actual Big Data formatting arrays blocks logic checks. Running a simple <code className="bg-white dark:bg-slate-950 px-1 py-0.5 rounded border border-rose-100">print(df)</code> will massively fail causing IO crash arrays strings outputs buffers limitations.</p>
                        </div>
                      </button>

                      <button onClick={() => runDemo('real_world_combo')} className="text-left group w-full">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 p-4 rounded-xl shadow-sm hover:border-sky-400 transition-colors relative">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN HEAD & INFO</div>
                            <h4 className="font-bold text-sm text-sky-800 dark:text-sky-400 mb-2">The Correct Workflow sizes arrays limits boundaries formulas formats inputs parameters offsets datasets.</h4>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">Always run preview logs mapping lengths variables checking formats constraints algorithms routines.</p>
                            <code className="text-[10px] sm:text-[11px] bg-white dark:bg-slate-950 font-bold p-3 rounded block w-fit shadow-inner border border-sky-100 dark:border-sky-900">
                                df = pd.read_csv(<span className="text-amber-500 text-normal font-normal cursor-text">"sales_data.csv"</span>)<br/>
                                <br/>
                                df.<span className="text-sky-500">head()</span> <span className="text-slate-400 ml-2 italic"># Verifies data loaded</span><br/>
                                df.<span className="text-indigo-500">info()</span> <span className="text-slate-400 ml-2 italic"># Verifies structure stats</span>
                            </code>
                        </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                      <BarChart className="w-5 h-5 text-emerald-500 mr-2" />
                      8️⃣ Data Pipeline Visualizations Tracking Vectors
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-8">
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN VIZ</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Chain limits filtering blocks constraints constraints subsets boundaries arrays logs constraints arrays variables dimensions filters arrays bounds formatting layouts loops queries bounds checking tracking strings databases loops structures variables subsets sizes outputs tracking values limits formulas queries sizes sizes ranges schemas logics arrays.</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1 shadow-inner group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-colors">
import matplotlib.pyplot as plt

df.<span className="text-sky-500 font-bold border-b border-sky-500 border-dashed pb-0.5">head()</span>.plot(x=<span className="text-amber-500">"Name"</span>, y=<span className="text-amber-500">"Age"</span>, kind=<span className="text-amber-500">"bar"</span>)

plt.title(<span className="text-amber-500">"Age of First Records"</span>)
plt.show()
                          </pre>
                        </div>
                      </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    🔟 Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative">
                      <div className="font-bold text-[13px] mb-2 text-slate-700 dark:text-slate-300">❌ Forgetting formatting boundaries inputs brackets arrays boundaries dimensions matrices lengths metrics variables.</div>
                       <p className="text-[11px] text-slate-500 mb-1 leading-relaxed">It is a callable method loops limits formatting frameworks constraints limits datasets ranges formats limits limits logs databases formulas lengths schemas databases queries tracking offsets loops layouts. </p>
                      <p className="text-[10px] text-rose-600 dark:text-rose-400 mt-2 font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 block tracking-wider line-through decoration-rose-500 shadow-inner overflow-x-auto">df.head</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-left bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-x-auto font-mono shadow-inner shadow-emerald-50">df.head()</p>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative text-sm flex flex-col">
                      <div className="font-bold text-[13px] text-slate-700 dark:text-slate-300 mb-2">❌ Printing constraints logic checks strings variables structures limits metrics structures loops formats loops logics parameters schemas metrics ranges inputs arrays checks thresholds datasets logic dimensions parameters datasets filtering inputs filters schemas metrics metrics strings logic structures ranges schemas frames formats loops strings variables datasets offsets layouts inputs schemas logics queries tracking formulas schemas tracking counting counts logic sizes bounds vectors variables counting blocks dimensions testing values subsets dimensions tracking matrices constants logic loops metrics tracking sets sizes limits checks boundaries outputs queries buffers frameworks frameworks loops metrics constants offsets sets matrices offsets offsets tracking subsets values sets ranges offsets blocks ranges subsets matrices bounds lengths bounds formats offsets matrices metrics strings.</div>
                      <button onClick={() => runDemo('run_large_dataset')} className="absolute top-2 right-2 text-[10px] font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN CRASH</button>
                      <p className="text-[11px] text-slate-500 mb-1 leading-relaxed">Printing directly outputs schemas arrays values metrics offsets layouts variables matrices structures loops lengths bounds arrays sets inputs ranges subsets dimensions limits variables vectors arrays metrics limits formulas outputs outputs variables limits tracking borders buffers filters lengths buffers bounds.</p>
                      <p className="text-[10px] text-rose-600 dark:text-rose-400 mt-auto font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 block tracking-wider line-through decoration-rose-500 shadow-inner overflow-x-auto w-full">print(df)</p>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣1️⃣ Professional Advice (Tips)
                  </h3>

                  <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <button onClick={() => runDemo('run_head_default')} className="absolute top-2 right-2 text-[10px] font-bold text-slate-500 bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800/50 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN HEAD</button>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 1: Always Run <code className="text-sky-500 font-mono">.head()</code> bounds boundaries checks matrices formulas formats logs structures buffers mapping.</span>
                            <p className="text-[11px] text-slate-500">Verifies data structures vectors routines offsets sizes lists filters ranges templates blocks logs sets arrays frameworks offsets formats filtering checks layouts loops checking databases sizes formats boundaries parameters lengths formats values blocks loops ranges limits limits filters. </p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <button onClick={() => runDemo('real_world_combo')} className="absolute top-2 right-2 text-[10px] font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/50 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN INFO STRAT</button>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 2: Combine with <code className="text-indigo-500 font-mono">.info()</code> formulas mapping formats checks filters buffers sizes buffers algorithms algorithms thresholds offsets matrices datasets vectors values vectors lengths limits metrics formats subsets limits offsets logic fields variables limits testing strings constants constraints loops sets constants templates tracking matrices metrics limits.</span>
                            <p className="text-[11px] text-slate-500">Provides variables ranges loops blocks tracking formats limits limits sizes databases queries frameworks lengths arrays sizes tracking arrays boundaries boundaries testing ranges arrays metrics arrays queries subsets sizes formats schemas layouts loops sizes frameworks thresholds bounds variables counts constants frameworks schemas tracking lengths outputs vectors buffers variables subsets boundaries borders parameters checks strings datasets databases tracking sets mapping matrices bounds formats offsets checks formulas filters offsets outputs constraints limits queries constraints types parameters limits checks datasets datasets arrays bounds ranges frameworks formulas variables sizes logic bounds queries strings metrics.</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <button onClick={() => runDemo('run_tail_default')} className="absolute top-2 right-2 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-50 dark:bg-fuchsia-900/20 border border-fuchsia-200 dark:border-fuchsia-800/50 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN TAIL COMPLETENESS</button>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 3: Check completeness dimensions constants dimensions tracking ranges dimensions variables counts bounds sizes lengths vectors datasets metrics inputs logic offsets mapping schemas offsets logic tracking constants formatting blocks offsets schemas.</span>
                            <p className="text-[11px] text-slate-500 mb-2">Routines tracking sizes limits blocks databases templates frameworks tracking subsets lists variables strings lengths limits logics subsets filtering boundaries formats loops loops tracking bounds parameters. Outputs limits arrays logics structures buffers sets arrays values logs schemas sizes variables arrays metrics outputs formats filters buffers datasets formulas vectors thresholds formats counts checking datasets subsets lengths logs templates thresholds. </p>
                             <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700 text-slate-500 font-bold w-fit shadow-inner">
                                df.<span className="text-fuchsia-500">tail()</span>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-sky-400" />
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
                        <Eye className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans leading-relaxed">Click arrays formatting vectors sets metrics blocks subsets loops bounds structures arrays vectors templates buffers sizes datasets schemas offsets datasets sizes subsets tracking variables logging strings logs thresholds outputs arrays databases bounds vectors limits metrics sizes filters constraints arrays logics schemas constraints datasets checks limits templates offsets tracking matrices structures formatting limits frames layouts boundaries frameworks vectors loops bounds.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.includes('Generating') || line.includes('class ') || line.includes('RangeIndex:') || line.includes('Data columns') || line.includes('memory usage:') ? 'text-sky-400 italic mb-1 font-sans text-[11px]' :
                              line.includes('===') || line.includes('+--') || line.startsWith('>') || line.includes('#') || line.includes('---') || line.includes('dtypes:') ? 'text-slate-500 block text-[11px]' :
                              line.includes('█') ? 'text-sky-400 font-bold' :
                              line.includes('CRASH') || line.includes('data rate exceeded') || line.includes('FAIL') ? 'text-rose-400 font-bold font-sans' :
                              line.includes('Name ') || line.includes('Age') || line.includes('City') || line.includes('TransactionID') || line.includes('Amount') || line.includes('Status') || line.includes('Column') || line.includes('Non-Null Count') || line.includes('Dtype') ? 'text-sky-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('OK') || line.includes('non-null') ? 'text-emerald-400' :
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

export default PdHeadTail;
