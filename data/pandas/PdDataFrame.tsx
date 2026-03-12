import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Settings, Zap, 
  Layers, AlertTriangle, CheckCircle2, Table, BarChart, 
  Eye, Filter, Plus, Trash2, Columns, Code, Search
} from 'lucide-react';

const PdDataFrame: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'inspect' | 'manipulate' | 'visuals' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'create_dict':
        outLines = [
          '   Name  Age     City',
          '0  John   25  Chennai',
          '1  Sara   30   Mumbai',
          '2  Mike   28    Delhi'
        ];
        break;
      case 'create_list':
        outLines = [
          '   Name  Age     City',
          '0  John   25  Chennai',
          '1  Sara   30   Mumbai',
          '2  Mike   28    Delhi'
        ];
        break;
      case 'structure':
        outLines = [
          '# df.index',
          'RangeIndex(start=0, stop=3, step=1)',
          '',
          '# df.columns',
          "Index(['Name', 'Age', 'City'], dtype='object')",
          '',
          '# df.values',
          "[['John' 25 'Chennai']",
          " ['Sara' 30 'Mumbai']",
          " ['Mike' 28 'Delhi']]"
        ];
        break;
      case 'head':
        outLines = [
          '   Name  Age     City',
          '0  John   25  Chennai',
          '1  Sara   30   Mumbai'
        ];
        break;
      case 'info':
        outLines = [
          '<class \'pandas.core.frame.DataFrame\'>',
          'RangeIndex: 3 entries, 0 to 2',
          'Data columns (total 3 columns):',
          ' #   Column  Non-Null Count  Dtype ',
          '---  ------  --------------  ----- ',
          ' 0   Name    3 non-null      object',
          ' 1   Age     3 non-null      int64 ',
          ' 2   City    3 non-null      object',
          'dtypes: int64(1), object(2)',
          'memory usage: 204.0+ bytes'
        ];
        break;
      case 'describe':
        outLines = [
          '             Age',
          'count   3.000000',
          'mean   27.666667',
          'std     2.516611',
          'min    25.000000',
          '25%    26.500000',
          '50%    28.000000',
          '75%    29.000000',
          'max    30.000000'
        ];
        break;
      case 'select_col':
        outLines = [
          '0    John',
          '1    Sara',
          '2    Mike',
          'Name: Name, dtype: object'
        ];
        break;
      case 'add_col':
        outLines = [
          '   Name  Age     City  Salary',
          '0  John   25  Chennai   50000',
          '1  Sara   30   Mumbai   60000',
          '2  Mike   28    Delhi   55000'
        ];
        break;
      case 'filter':
        outLines = [
          '   Name  Age    City',
          '1  Sara   30  Mumbai',
          '2  Mike   28   Delhi'
        ];
        break;
      case 'sort':
        outLines = [
          '   Name  Age     City',
          '0  John   25  Chennai',
          '2  Mike   28    Delhi',
          '1  Sara   30   Mumbai'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Bar Chart...',
          'Age of Employees (Mock Output)',
          '========================================',
          '30 |      [████]',
          '28 |            [████]',
          '25 | [████]',
          '   +---------------------',
          '     John  Sara  Mike'
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
          <Table className="w-10 h-10 text-sky-600 dark:text-sky-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas DataFrame <code className="text-sky-600 dark:text-sky-400 text-3xl sm:text-4xl bg-sky-50 dark:bg-sky-900/20 px-3 py-1 rounded-xl">DataFrame()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The most important concept in Pandas. Almost 90% of data analysis tasks use DataFrames. Think of it like an Excel spreadsheet inside Python.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-sky-500" />
            DataFrame Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
            <button
              onClick={() => setActiveTab('inspect')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'inspect' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Eye className="w-4 h-4 mr-1.5" /> 5️⃣-7️⃣ Inspect
            </button>
             <button
              onClick={() => setActiveTab('manipulate')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'manipulate' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Settings className="w-4 h-4 mr-1.5" /> 8️⃣-1️⃣2️⃣ Edit
            </button>
             <button
              onClick={() => setActiveTab('visuals')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'visuals' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 1️⃣3️⃣-1️⃣4️⃣ Viz
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 Dev Tips
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
                    1️⃣ What is a Pandas DataFrame?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>A Pandas DataFrame is a <b>two-dimensional labeled data structure</b> that stores data in rows and columns. Each column can contain different data types.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-2">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-center text-xs font-bold font-mono">Excel Sheet</div>
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-center text-xs font-bold font-mono">SQL Table</div>
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-center text-xs font-bold font-mono">CSV Dataset</div>
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-center text-xs font-bold font-mono">Database DB</div>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Zap className="w-5 h-5 text-amber-500 mr-2" />
                    2️⃣-3️⃣ Importance & Import
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 text-sm space-y-4">
                      <p>DataFrames allow you to store structured data, analyze datasets easily, clean and transform data, and prepare data for ML.</p>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded text-sm font-mono flex items-center">
                          import pandas <span className="text-blue-600 dark:text-blue-400 font-bold mx-2">as</span> pd
                      </div>
                      <p className="text-xs text-slate-500 italic">This is the standard convention used worldwide.</p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Code className="w-5 h-5 text-emerald-500 mr-2" />
                    4️⃣ Creating a DataFrame
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <button onClick={() => runDemo('create_dict')} className="text-left group w-full">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors relative shadow-sm h-full flex flex-col">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DEMO</div>
                            <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-2">Method 1: From Dictionary</h4>
                            <p className="text-[10px] text-slate-500 mb-2">Most Common Approach.</p>
                            <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 overflow-x-auto flex-1 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800">
data = {'{\n'}
  <span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Sara"</span>, <span className="text-amber-500">"Mike"</span>],
  <span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500">25</span>, <span className="text-emerald-500">30</span>, <span className="text-emerald-500">28</span>],
  <span className="text-amber-500">"City"</span>: [<span className="text-amber-500">"Chennai"</span>, <span className="text-amber-500">"Mumbai"</span>, <span className="text-amber-500">"Delhi"</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                    <button onClick={() => runDemo('create_list')} className="text-left group w-full">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm h-full flex flex-col">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DEMO</div>
                            <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">Method 2: From List of Lists</h4>
                            <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 overflow-x-auto flex-1 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 mt-6">
data = [
  [<span className="text-amber-500">"John"</span>, <span className="text-emerald-500">25</span>, <span className="text-amber-500">"Chennai"</span>],
  [<span className="text-amber-500">"Sara"</span>, <span className="text-emerald-500">30</span>, <span className="text-amber-500">"Mumbai"</span>],
  [<span className="text-amber-500">"Mike"</span>, <span className="text-emerald-500">28</span>, <span className="text-amber-500">"Delhi"</span>]
]
df = pd.DataFrame(
  data, 
  columns=[<span className="text-amber-500">"Name"</span>, <span className="text-amber-500">"Age"</span>, <span className="text-amber-500">"City"</span>]
)
                            </pre>
                        </div>
                    </button>
                  </div>
                  
                  <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 rounded-xl p-4 shadow-sm flex items-center justify-between">
                      <div>
                          <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-1">Method 3: From CSV File</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">This is the most common real-world use case.</p>
                      </div>
                      <code className="bg-white dark:bg-slate-950 px-3 py-2 rounded text-rose-600 dark:text-rose-400 font-bold shadow-sm border border-slate-100 dark:border-slate-800 text-xs sm:text-sm">
                          pd.read_csv(<span className="text-amber-500 font-normal">"data.csv"</span>)
                      </code>
                  </div>
                </div>
              )}

              {activeTab === 'inspect' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Layers className="w-5 h-5 text-indigo-500 mr-2" />
                    5️⃣ Understanding Structure
                  </h3>

                  <button onClick={() => runDemo('structure')} className="text-left group w-full mb-6">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors relative shadow-sm h-full">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DEMO</div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">A DataFrame consists of Rows (Index), Columns, and Values.</p>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto">
<span className="text-blue-500">print</span>(df.index)
<span className="text-blue-500">print</span>(df.columns)
<span className="text-blue-500">print</span>(df.values)
                      </pre>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Eye className="w-5 h-5 text-sky-500 mr-2" />
                    6️⃣ Viewing Data
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <button onClick={() => runDemo('head')} className="text-left group w-full">
                          <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-xl p-4 hover:border-sky-400 transition-colors shadow-sm">
                              <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-2 text-center code">df.head()</h4>
                              <p className="text-xs text-slate-600 dark:text-slate-400 text-center">View First Rows (default 5)</p>
                          </div>
                      </button>
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm opacity-70">
                          <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400 mb-2 text-center code">df.tail()</h4>
                          <p className="text-xs text-slate-500 text-center">View Last Rows</p>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Search className="w-5 h-5 text-amber-500 mr-2" />
                    7️⃣ Checking Data Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <button onClick={() => runDemo('info')} className="text-left group w-full">
                      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 transition-colors shadow-sm h-full">
                        <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2 code">df.info()</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Shows summary info:</p>
                        <ul className="text-[10px] text-slate-500 list-disc pl-4 space-y-1">
                            <li>Column names</li>
                            <li>Non-null values count</li>
                            <li>Data types</li>
                            <li>Memory usage</li>
                        </ul>
                      </div>
                    </button>
                    <button onClick={() => runDemo('describe')} className="text-left group w-full">
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 transition-colors shadow-sm h-full">
                        <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2 code">df.describe()</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Shows statistical summary for numeric columns:</p>
                        <ul className="text-[10px] text-slate-500 list-disc pl-4 space-y-1">
                            <li>count, mean, std</li>
                            <li>min, max</li>
                            <li>quartiles (25%, 50%, 75%)</li>
                        </ul>
                      </div>
                    </button>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 p-3 flex justify-between items-center text-sm shadow-sm mt-2">
                      <span className="font-bold text-slate-600 dark:text-slate-400">Data Types Only:</span>
                      <code className="text-sky-500 font-bold">df.dtypes</code>
                  </div>

                </div>
              )}

               {activeTab === 'manipulate' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Columns className="w-5 h-5 text-sky-500 mr-2" />
                      8️⃣ Selecting Data
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                      <button onClick={() => runDemo('select_col')} className="text-left group w-full">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 transition-colors shadow-sm h-full">
                              <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-2">Select Column</h4>
                              <code className="text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded block mb-2 border border-slate-100 dark:border-slate-800">df[<span className="text-amber-500">"Name"</span>]</code>
                              <p className="text-[10px] text-slate-500">Returns a Pandas Series.</p>
                          </div>
                      </button>
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm">
                          <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">Select Multiple</h4>
                          <code className="text-[11px] sm:text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded block mb-2 border border-slate-100 dark:border-slate-800">df[[<span className="text-amber-500">"Name"</span>, <span className="text-amber-500">"City"</span>]]</code>
                          <p className="text-[10px] text-slate-500">Notice the double brackets <b>[[]]</b>.</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm sm:col-span-2 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                          <div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">Select Rows</h4>
                            <p className="text-[10px] text-slate-500">Use loc (label) or iloc (index).</p>
                          </div>
                          <div className="flex gap-2">
                              <code className="text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-100 dark:border-slate-800">df.<span className="text-indigo-500 font-bold">loc</span>[0]</code>
                              <code className="text-xs bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-100 dark:border-slate-800">df.<span className="text-indigo-500 font-bold">iloc</span>[1]</code>
                          </div>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                      <Settings className="w-5 h-5 text-emerald-500 mr-2" />
                      9️⃣-🔟 Adding & Deleting Data
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                      <button onClick={() => runDemo('add_col')} className="text-left group w-full">
                          <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 transition-colors shadow-sm h-full">
                              <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2 flex items-center"><Plus className="w-4 h-4 mr-1"/> Add Column</h4>
                              <code className="text-[10px] xl:text-xs bg-white dark:bg-slate-950 px-1 py-1 rounded block border border-slate-100 dark:border-slate-800 text-center font-bold">df[<span className="text-amber-600">"Salary"</span>] = [50k, 60k, 55k]</code>
                          </div>
                      </button>
                      <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 rounded-xl p-4 shadow-sm relative">
                           <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2 flex items-center"><Trash2 className="w-4 h-4 mr-1"/> Delete Column</h4>
                           <code className="text-[10px] xl:text-xs bg-white dark:bg-slate-950 px-1 py-1 rounded block mb-1 border border-slate-100 dark:border-slate-800">df.drop(<span className="text-amber-600">"Salary"</span>, axis=1)</code>
                           <p className="text-[9px] text-slate-500 text-center leading-tight">To make permanent add <b>inplace=True</b></p>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                      <Filter className="w-5 h-5 text-amber-500 mr-2" />
                      1️⃣1️⃣-1️⃣2️⃣ Filtering & Sorting
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                      <button onClick={() => runDemo('filter')} className="text-left group w-full">
                          <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 hover:border-amber-400 transition-colors shadow-sm h-full">
                              <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2">1️⃣1️⃣ Filter Data</h4>
                              <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-2">Example: Age greater than 26</p>
                              <code className="text-xs font-bold text-slate-800 dark:text-slate-200">df[ df[<span className="text-amber-500 font-normal">"Age"</span>] &gt; 26 ]</code>
                          </div>
                      </button>
                      <button onClick={() => runDemo('sort')} className="text-left group w-full">
                          <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 transition-colors shadow-sm h-full">
                              <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">1️⃣2️⃣ Sort Data</h4>
                              <code className="text-[11px] block mb-2">df.<span className="text-blue-500 font-bold">sort_values</span>(<span className="text-amber-500">"Age"</span>)</code>
                              <p className="text-[10px] text-slate-500">For descending: <code className="bg-white/50 px-1 rounded">ascending=False</code></p>
                          </div>
                      </button>
                  </div>

                </div>
              )}

               {activeTab === 'visuals' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <BarChart className="w-5 h-5 text-rose-500 mr-2" />
                      1️⃣3️⃣ Visualization with DataFrame
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Visualization helps understand data easily.</p>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-4">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-rose-400 dark:hover:border-rose-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN PLOT</div>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1">
import matplotlib.pyplot as plt

df.plot(x=<span className="text-amber-500">"Name"</span>, y=<span className="text-amber-500">"Age"</span>, kind=<span className="text-amber-500">"bar"</span>)

plt.title(<span className="text-amber-500">"Age of Employees"</span>)
plt.show()
                          </pre>
                          
                          <div className="bg-slate-100 dark:bg-slate-950 p-4 rounded border border-slate-200 dark:border-slate-800 flex-1 flex flex-col justify-end text-[10px] font-mono leading-tight">
                            <div className="text-center text-slate-500 mb-4 font-bold font-sans text-xs">Visual Example</div>
                            <div className="flex items-end justify-center gap-6 h-24 mb-2 border-b border-l border-slate-400 pl-2 pb-1 relative">
                                <span className="absolute left-[-20px] top-[-5px] text-[8px] text-slate-400">Age</span>
                              <div className="w-6 bg-blue-500 h-[80%] rounded-t relative" title="John"></div>
                              <div className="w-6 bg-blue-500 h-[100%] rounded-t relative" title="Sara"></div>
                              <div className="w-6 bg-blue-500 h-[90%] rounded-t relative" title="Mike"></div>
                            </div>
                            <div className="flex justify-center gap-6 pl-2">
                              <div className="text-slate-500 w-6 text-center">John</div>
                              <div className="text-slate-500 w-6 text-center">Sara</div>
                              <div className="text-slate-500 w-6 text-center">Mike</div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </button>

                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                        <h4 className="font-bold text-base text-slate-800 dark:text-white mb-4 flex items-center">
                            <Terminal className="w-4 h-4 mr-2 text-indigo-500" />
                            1️⃣4️⃣ Real World Example (Sales)
                        </h4>
                        
                        <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded mb-4 overflow-x-auto">
data = {'{'}
    <span className="text-amber-500">"Product"</span>: [<span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Phone"</span>, <span className="text-amber-500">"Tablet"</span>],
    <span className="text-amber-500">"Sales"</span>:   [<span className="text-emerald-500">120000</span>, <span className="text-emerald-500">80000</span>, <span className="text-emerald-500">40000</span>]
{'}'}
df = pd.DataFrame(data)
df.plot(x=<span className="text-amber-500">"Product"</span>, y=<span className="text-amber-500">"Sales"</span>, kind=<span className="text-amber-500">"bar"</span>)
                        </pre>

                        <div className="border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-900/10 p-3 rounded text-xs text-slate-600 dark:text-slate-400">
                            <p className="font-bold text-slate-800 dark:text-slate-200 mb-1">Used in:</p>
                            <ul className="flex gap-4">
                                <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1"/> Business dashboards</li>
                                <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1"/> Marketing analytics</li>
                                <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1"/> Sales reports</li>
                            </ul>
                        </div>
                  </div>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣5️⃣ Common Mistakes
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">❌ Forgetting <code className="text-rose-500 font-bold bg-white dark:bg-slate-950 px-1 rounded">pd.</code></div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Wrong: <code className="text-rose-600">DataFrame(data)</code></p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">Correct: <code className="bg-white dark:bg-slate-950 px-1 rounded text-emerald-700">pd.DataFrame(data)</code></p>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">❌ Dot vs Bracket Notation</div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-1">Wrong: <code className="text-rose-600">df.Name</code></p>
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mb-1">Correct: <code className="bg-white dark:bg-slate-950 px-1 rounded text-emerald-700">df["Name"]</code></p>
                      <p className="text-[9px] text-slate-500">Bracket notation is always recommended for beginners to avoid name conflict errors!</p>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣6️⃣ Tips & Tricks (15+ Yrs Exp)
                  </h3>

                  <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded mr-3 shrink-0">
                              <span className="font-bold text-sm text-sky-600 dark:text-sky-400">1️⃣</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Always Use head()</span>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400">When opening large datasets, run <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded">df.head()</code> instead of <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded">print(df)</code>. It prevents loading huge outputs and freezing your console.</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                           <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded mr-3 shrink-0">
                              <span className="font-bold text-sm text-emerald-600 dark:text-emerald-400">2️⃣</span>
                          </div>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Professional Analyst Workflow</span>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2">Always run these 3 commands first when loading new data:</p>
                            <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row gap-2 font-mono text-[10px] text-sky-500 font-bold mb-1">
                                <span>df.head()</span> <span>df.info()</span> <span>df.describe()</span>
                            </div>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded mr-3 shrink-0">
                              <span className="font-bold text-sm text-amber-600 dark:text-amber-400">3️⃣</span>
                          </div>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Keep Column Names Clean</span>
                            <div className="flex gap-4 mt-2">
                                <div className="text-[10px]">
                                    <span className="text-rose-500 font-bold mb-1 block">Bad:</span>
                                    <code className="bg-slate-100 dark:bg-slate-900 p-1 block mb-1 text-slate-600">Customer Name</code>
                                    <code className="bg-slate-100 dark:bg-slate-900 p-1 block text-slate-600">Total Sales Amount</code>
                                </div>
                                <div className="text-[10px]">
                                    <span className="text-emerald-500 font-bold mb-1 block">Better:</span>
                                    <code className="bg-slate-100 dark:bg-slate-900 p-1 block mb-1 text-slate-600">customer_name</code>
                                    <code className="bg-slate-100 dark:bg-slate-900 p-1 block text-slate-600">total_sales</code>
                                </div>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-2">Using snake_case avoids parsing/coding errors later down the line.</p>
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
                     DataFrame Console
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[440px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Table className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans">Initialize a DataFrame or run inspections to see Pandas output here.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('#') || line.includes('class') || line.includes('dtypes') || line.includes('memory') ? 'text-slate-400 italic' :
                              line.includes('Generating') ? 'text-emerald-400 italic mb-2' :
                              line.includes('===') || line.includes('---') || line.includes('RangeIndex') || line.includes('Data columns') ? 'text-slate-400 block' :
                              line.includes('███') ? 'text-sky-400' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Salary') ? 'text-indigo-300 font-bold' :
                              !isNaN(Number(line.trim().charAt(0))) ? 'text-emerald-200' :
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

export default PdDataFrame;
