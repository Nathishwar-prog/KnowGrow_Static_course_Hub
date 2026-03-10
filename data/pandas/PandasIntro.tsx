import React, { useState } from 'react';
import { 
  Terminal, AlertCircle, CheckCircle2,
  Lightbulb, MessageSquareText, 
  Database, Table, Box, LineChart, 
  Settings, Users, Activity, FileDigit
} from 'lucide-react';

const PandasIntro: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'intro' | 'setup' | 'structures' | 'operations' | 'tips'>('intro');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'install':
        outLines = ['Installing collected packages: numpy, pandas', 'Successfully installed pandas-2.2.0 numpy-1.26.3'];
        break;
      case 'version':
        outLines = ['2.2.0'];
        break;
      case 'import':
        outLines = ['Pandas is ready!'];
        break;
      case 'series':
        outLines = [
          '0    10',
          '1    20',
          '2    30',
          'dtype: int64'
        ];
        break;
      case 'dataframe':
        outLines = [
          '   Name  Age',
          '0  John   25',
          '1  Emma   30',
          '2  Alex   28'
        ];
        break;
      case 'basic_ops':
        outLines = [
          '  Product  Price',
          '0  Laptop    800',
          '1   Phone    500',
          '2  Tablet    300',
          '',
          '533.33'
        ];
        break;
      case 'real_world':
        outLines = [
          '  Student  Marks',
          '0    John     85',
          '1    Emma     92',
          '2    Alex     78',
          '',
          '85.0'
        ];
        break;
      case 'exercise':
        outLines = [
          '  Product  Price  Quantity',
          '0  Laptop    800         5',
          '1   Phone    500        10',
          '2  Tablet    300         7'
        ];
        break;
      case 'head':
        outLines = [
          '   Name  Age    City',
          '0  John   25  London',
          '1  Emma   30   Paris',
          '2  Alex   28  Berlin',
          '3  Sara   22  Rome',
          '4  Mike   35  Madrid'
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
          'memory usage: 200.0+ bytes'
        ];
        break;
      case 'describe':
        outLines = [
          '            Age',
          'count       3.0',
          'mean       27.6',
          'min        25.0',
          'max        30.0'
        ];
        break;
      case 'columns':
        outLines = ['Index([\'Product\', \'Price\', \'Quantity\'], dtype=\'object\')'];
        break;
      case 'select_col':
        outLines = [
          '0    800',
          '1    500',
          '2    300',
          'Name: Price, dtype: int64'
        ];
        break;
      case 'filter_data':
        outLines = [
          '  Product  Price',
          '0  Laptop    800',
          '1   Phone    500'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <Database className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Introduction to Pandas
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A powerful Python library used for data analysis, manipulation, and cleaning of structured datasets.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-indigo-500" />
            Pandas Interactive Guide
          </h2>
          <div className="flex gap-2 flex-wrap">
             <button
              onClick={() => setActiveTab('intro')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'intro' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-2" /> 1️⃣-3️⃣ Intro
            </button>
            <button
              onClick={() => setActiveTab('setup')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'setup' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Settings className="w-4 h-4 mr-2" /> 4️⃣-5️⃣ Setup
            </button>
            <button
              onClick={() => setActiveTab('structures')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'structures' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Box className="w-4 h-4 mr-2" /> 6️⃣-7️⃣ Structures
            </button>
            <button
              onClick={() => setActiveTab('operations')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'operations' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Activity className="w-4 h-4 mr-2" /> 8️⃣-🔟 Operations
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'tips' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <LineChart className="w-4 h-4 mr-2" /> 🚀 Dev Tips
            </button>
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-2"
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
              
              {activeTab === 'intro' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <MessageSquareText className="w-5 h-5 text-indigo-500 mr-2" />
                    1️⃣ What is Pandas?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p><b>Pandas</b> is a powerful Python library used for data analysis and data manipulation. It provides tools to work with structured data such as tables, spreadsheets, and datasets.</p>
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                        <p className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">Pandas helps developers and analysts:</p>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-1 shrink-0"/> Clean data</li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-1 shrink-0"/> Transform datasets</li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-1 shrink-0"/> Analyze large amounts of information</li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-1 shrink-0"/> Prepare data for machine learning</li>
                        </ul>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
                    2️⃣ Why Pandas is Used
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300">
                      <p className="mb-4">Real-world data is often messy. Consider this example raw dataset:</p>
                      <pre className="font-mono text-xs bg-slate-900 text-slate-300 p-3 rounded-lg border border-slate-800 mb-4 inline-block">
Name,Age,City<br/>
John,25,London<br/>
<span className="text-rose-400">Emma,,Paris</span>  <span className="text-slate-500 italic">&lt;- missing value</span><br/>
Alex,28,Berlin
                      </pre>
                      <p className="mb-2 text-sm"><b>Problems Pandas solves quickly:</b> missing values, inconsistent formatting, large datasets.</p>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl text-center border border-slate-200 dark:border-slate-700 mt-4">
                          <p className="font-bold text-sm mb-3">Workflow Visualization:</p>
                          <div className="flex flex-col items-center justify-center space-y-1 text-xs font-mono font-bold">
                              <div className="bg-white dark:bg-slate-800 px-3 py-1 rounded border border-slate-300 dark:border-slate-600">Raw Data</div>
                              <div className="text-slate-400">↓</div>
                              <div className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded border border-indigo-200 dark:border-indigo-800">Pandas Cleaning</div>
                              <div className="text-slate-400">↓</div>
                              <div className="bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 px-3 py-1 rounded border border-teal-200 dark:border-teal-800">Data Analysis</div>
                              <div className="text-slate-400">↓</div>
                              <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-3 py-1 rounded border border-amber-200 dark:border-amber-800">Insights</div>
                          </div>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Users className="w-5 h-5 text-teal-500 mr-2" />
                    3️⃣ Who Uses Pandas?
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                <th className="p-3 font-bold text-slate-700 dark:text-slate-200">Field</th>
                                <th className="p-3 font-bold text-slate-700 dark:text-slate-200">Use Case</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="p-3 font-semibold">Data Science</td>
                                <td className="p-3">Data preprocessing</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="p-3 font-semibold">Machine Learning</td>
                                <td className="p-3">Dataset preparation</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="p-3 font-semibold">Finance</td>
                                <td className="p-3">Stock data analysis</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="p-3 font-semibold">Business Analytics</td>
                                <td className="p-3">Sales reporting</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="p-3 font-semibold">Research</td>
                                <td className="p-3">Statistical analysis</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>

                </div>
              )}

              {activeTab === 'setup' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">4️⃣ Installing & 5️⃣ Importing</h3>

                  <button onClick={() => runDemo('install')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN PIP</div>
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">4️⃣ Installing Pandas</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">To use Pandas, install it using pip in your terminal/command prompt.</p>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-slate-400">pip install pandas</span>
                      </pre>
                    </div>
                  </button>

                   <button onClick={() => runDemo('version')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CHECK</div>
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">Check Installation</h4>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-blue-500">import</span> pandas <span className="text-blue-500">as</span> pd<br/><br/>
<span className="text-blue-500">print</span>(pd.__version__)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('import')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-300 dark:hover:border-teal-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SCRIPT</div>
                      <h4 className="font-bold text-sm text-teal-600 dark:text-teal-400 mb-2">5️⃣ Importing Pandas</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Pandas is usually imported with the standardized alias <code>pd</code>.</p>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-blue-500">import</span> pandas <span className="text-blue-500">as</span> pd<br/><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Pandas is ready!"</span>)
                      </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'structures' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">6️⃣ Data Structures & 7️⃣ Excel Comparison</h3>
                  
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm">
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-3">Pandas mainly provides two core data structures:</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/50 flex flex-col items-center justify-center text-center">
                            <span className="font-bold text-indigo-700 dark:text-indigo-400 block mb-1">Series</span>
                            <span className="text-xs text-indigo-600/70 dark:text-indigo-300/70">One-dimensional data (Column)</span>
                        </div>
                         <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg border border-teal-100 dark:border-teal-800/50 flex flex-col items-center justify-center text-center">
                            <span className="font-bold text-teal-700 dark:text-teal-400 block mb-1">DataFrame</span>
                            <span className="text-xs text-teal-600/70 dark:text-teal-300/70">Two-dimensional table (Rows/Cols)</span>
                        </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                      <button onClick={() => runDemo('series')} className="text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm h-full">
                              <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SERIES</div>
                              <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-3">Series Example</h4>
                              <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded-lg border border-slate-100 dark:border-slate-800 mb-3">
<span className="text-blue-500">import</span> pandas <span className="text-blue-500">as</span> pd<br/><br/>
data = [<span className="text-emerald-500">10</span>, <span className="text-emerald-500">20</span>, <span className="text-emerald-500">30</span>]<br/>
s = pd.Series(data)<br/>
<span className="text-blue-500">print</span>(s)
                              </pre>
                              <div className="bg-indigo-100 dark:bg-indigo-900/40 p-2 rounded text-xs font-mono">
                                  <b>Visualization:</b><br/>
                                  Idx  Val<br/>
                                  0    10<br/>
                                  1    20<br/>
                                  2    30
                              </div>
                          </div>
                      </button>

                       <button onClick={() => runDemo('dataframe')} className="text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-300 dark:hover:border-teal-700 transition-colors relative shadow-sm h-full">
                              <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN FRAME</div>
                              <h4 className="font-bold text-sm text-teal-600 dark:text-teal-400 mb-3">DataFrame Example</h4>
                              <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded-lg border border-slate-100 dark:border-slate-800 mb-3">
<span className="text-blue-500">import</span> pandas <span className="text-blue-500">as</span> pd<br/><br/>
data = {'{'}<br/>
{'  '}<span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Emma"</span>, <span className="text-amber-500">"Alex"</span>],<br/>
{'  '}<span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500">25</span>, <span className="text-emerald-500">30</span>, <span className="text-emerald-500">28</span>]<br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/>
<span className="text-blue-500">print</span>(df)
                              </pre>
                               <div className="bg-teal-100 dark:bg-teal-900/40 p-2 rounded text-xs font-mono">
                                  <b>Visualization:</b><br/>
                                  Idx Name Age<br/>
                                  0   John 25<br/>
                                  1   Emma 30<br/>
                                  2   Alex 28
                              </div>
                          </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <FileDigit className="w-5 h-5 text-emerald-500 mr-2" />
                    7️⃣ Pandas vs Excel
                  </h3>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Many beginners understand Pandas faster if compared with Excel:</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50">
                                <th className="p-2 border border-emerald-200 dark:border-emerald-800/50 font-bold text-emerald-800 dark:text-emerald-400">Excel Concept</th>
                                <th className="p-2 border border-emerald-200 dark:border-emerald-800/50 font-bold text-emerald-800 dark:text-emerald-400">Pandas Equivalent</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            <tr>
                                <td className="p-2 border border-emerald-100 dark:border-emerald-800/30">Spreadsheet</td>
                                <td className="p-2 border border-emerald-100 dark:border-emerald-800/30 font-mono text-xs">DataFrame</td>
                            </tr>
                             <tr>
                                <td className="p-2 border border-emerald-100 dark:border-emerald-800/30">Columns</td>
                                <td className="p-2 border border-emerald-100 dark:border-emerald-800/30 font-mono text-xs">Series</td>
                            </tr>
                             <tr>
                                <td className="p-2 border border-emerald-100 dark:border-emerald-800/30">Filters</td>
                                <td className="p-2 border border-emerald-100 dark:border-emerald-800/30 font-mono text-xs">Data filtering</td>
                            </tr>
                             <tr>
                                <td className="p-2 border border-emerald-100 dark:border-emerald-800/30">Pivot tables</td>
                                <td className="p-2 border border-emerald-100 dark:border-emerald-800/30 font-mono text-xs">GroupBy</td>
                            </tr>
                             <tr>
                                <td className="p-2 border border-emerald-100 dark:border-emerald-800/30">Formulas</td>
                                <td className="p-2 border border-emerald-100 dark:border-emerald-800/30 font-mono text-xs">Python functions</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>

                </div>
              )}

              {activeTab === 'operations' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">8️⃣-🔟 Basic Operations & Workflow</h3>

                  <button onClick={() => runDemo('basic_ops')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">8️⃣ Basic Pandas Operations</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Example Dataset Analysis:</p>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
<span className="text-blue-500">import</span> pandas <span className="text-blue-500">as</span> pd<br/><br/>
data = {'{'}<br/>
{'    '}<span className="text-amber-500">"Product"</span>: [<span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Phone"</span>, <span className="text-amber-500">"Tablet"</span>],<br/>
{'    '}<span className="text-amber-500">"Price"</span>: [<span className="text-emerald-500">800</span>, <span className="text-emerald-500">500</span>, <span className="text-emerald-500">300</span>]<br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/>
<span className="text-blue-500">print</span>(df)<br/><br/>
<span className="text-slate-400 italic"># Analyze data easily (find mean price)</span><br/>
<span className="text-blue-500">print</span>(df[<span className="text-amber-500">"Price"</span>].mean())
                        </pre>
                     </div>
                  </button>

                  <div className="bg-violet-50 dark:bg-violet-900/10 border border-violet-200 dark:border-violet-800 p-4 rounded-xl shadow-sm mt-4">
                     <h4 className="font-bold text-violet-700 dark:text-violet-400 mb-3 text-sm">9️⃣ Typical Pandas Data Analysis Workflow</h4>
                     <div className="flex flex-wrap items-center justify-center gap-2">
                        <div className="bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-violet-200 text-xs font-bold text-violet-600">Load Dataset</div>
                        <div className="text-violet-400 text-xs">→</div>
                        <div className="bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-violet-200 text-xs font-bold text-violet-600">Inspect Data</div>
                        <div className="text-violet-400 text-xs">→</div>
                        <div className="bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-violet-200 text-xs font-bold text-violet-600">Clean Missing Values</div>
                        <div className="text-violet-400 text-xs">→</div>
                        <div className="bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-violet-200 text-xs font-bold text-violet-600">Filter & Transform</div>
                        <div className="text-violet-400 text-xs">→</div>
                         <div className="bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-violet-200 text-xs font-bold text-violet-600">Analyze & Summarize</div>
                        <div className="text-violet-400 text-xs">→</div>
                        <div className="bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1.5 rounded-full border border-emerald-300 text-xs font-bold text-emerald-700">Visualize Results</div>
                     </div>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN EXAMPLE</div>
                        <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">🔟 Real-World Example: Student Marks</h4>
                         <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
<span className="text-blue-500">import</span> pandas <span className="text-blue-500">as</span> pd<br/><br/>
data = {'{'}<br/>
{'    '}<span className="text-amber-500">"Student"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Emma"</span>, <span className="text-amber-500">"Alex"</span>],<br/>
{'    '}<span className="text-amber-500">"Marks"</span>: [<span className="text-emerald-500">85</span>, <span className="text-emerald-500">92</span>, <span className="text-emerald-500">78</span>]<br/>
{'}'}<br/><br/>
df = pd.DataFrame(data)<br/>
<span className="text-blue-500">print</span>(df)<br/><br/>
<span className="text-slate-400 italic"># Find average marks</span><br/>
<span className="text-blue-500">print</span>(df[<span className="text-amber-500">"Marks"</span>].mean())
                        </pre>
                     </div>
                  </button>

                </div>
              )}
              
              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                      💡 Developer Recommendations (15+ Years)
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button onClick={() => runDemo('head')} className="text-left group">
                          <div className="h-full bg-slate-50 dark:bg-slate-950 border border-slate-200 hover:border-amber-400 rounded-xl p-4 transition-colors shadow-sm">
                              <h4 className="font-bold text-xs text-amber-600 mb-1">1️⃣ Explore First</h4>
                              <p className="text-[10px] text-slate-500 mb-2 leading-tight">Shows the first few rows of the dataset.</p>
                              <code className="text-[11px] font-mono bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded font-bold">df.head()</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('info')} className="text-left group">
                          <div className="h-full bg-slate-50 dark:bg-slate-950 border border-slate-200 hover:border-blue-400 rounded-xl p-4 transition-colors shadow-sm">
                              <h4 className="font-bold text-xs text-blue-600 mb-1">2️⃣ Check Structure</h4>
                              <p className="text-[10px] text-slate-500 mb-2 leading-tight">Shows rows, types, & missing values.</p>
                              <code className="text-[11px] font-mono bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded font-bold">df.info()</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('describe')} className="text-left group">
                          <div className="h-full bg-slate-50 dark:bg-slate-950 border border-slate-200 hover:border-emerald-400 rounded-xl p-4 transition-colors shadow-sm">
                              <h4 className="font-bold text-xs text-emerald-600 mb-1">3️⃣ Quick Stats</h4>
                              <p className="text-[10px] text-slate-500 mb-2 leading-tight">Instantly get mean, min, max, std dev.</p>
                              <code className="text-[11px] font-mono bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded font-bold">df.describe()</code>
                          </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 mt-8">🚀 Pandas Tips & Tricks</h3>
                  
                  <div className="space-y-2">
                      <button onClick={() => runDemo('columns')} className="w-full text-left group">
                          <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 flex items-center justify-between shadow-sm">
                              <div>
                                  <span className="font-bold text-sm text-indigo-600 dark:text-indigo-400">Trick 1</span>
                                  <span className="text-sm text-slate-600 dark:text-slate-300 ml-2">— Show Column Names</span>
                              </div>
                              <code className="font-mono text-xs bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">df.columns</code>
                          </div>
                      </button>
                      <button onClick={() => runDemo('select_col')} className="w-full text-left group">
                          <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 flex items-center justify-between shadow-sm">
                              <div>
                                  <span className="font-bold text-sm text-indigo-600 dark:text-indigo-400">Trick 2</span>
                                  <span className="text-sm text-slate-600 dark:text-slate-300 ml-2">— Select One Column</span>
                              </div>
                              <code className="font-mono text-xs bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">df["Price"]</code>
                          </div>
                      </button>
                      <button onClick={() => runDemo('filter_data')} className="w-full text-left group">
                          <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 flex items-center justify-between shadow-sm">
                              <div>
                                  <span className="font-bold text-sm text-indigo-600 dark:text-indigo-400">Trick 3</span>
                                  <span className="text-sm text-slate-600 dark:text-slate-300 ml-2">— Filter Data</span>
                              </div>
                              <code className="font-mono text-xs bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">df[df["Price"] &gt; 400]</code>
                          </div>
                      </button>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-indigo-400" />
                     Runtime Output
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="font-mono text-xs flex flex-col flex-1 overflow-y-auto max-h-[440px]">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Terminal className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center">Run a code snippet to view output here...</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        const isNum = !isNaN(Number(line)) && line.trim() !== '';
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                              line.includes('class') || line.includes('Column') || line.includes('Dtype') || line.includes('Index(') ? 'text-indigo-300' :
                              line.startsWith(' ') && isNum ? 'text-emerald-400' :
                              isNum ? 'text-emerald-400' :
                              'text-white'
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

      {/* 3. Practice Exercise Section */}
      <section className="max-w-4xl mx-auto pb-16">
         <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-3xl shadow-xl relative h-full flex flex-col">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            🧩 Practice Exercise
          </h2>
          <div className="z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                  <p className="text-slate-300 mb-4 text-sm font-medium">Create a dataset with the following structure:</p>
                  <ul className="list-disc pl-5 text-indigo-300 mb-4 space-y-1 font-mono text-xs">
                      <li>Product</li>
                      <li>Price</li>
                      <li>Quantity</li>
                  </ul>
                  <p className="text-slate-300 mb-2 text-sm font-medium">Example data to insert:</p>
                  <pre className="bg-black/40 text-emerald-300 p-3 rounded-lg text-xs font-mono mb-4 border border-white/10">
Laptop   800   5
Phone    500   10
Tablet   300   7
                  </pre>
                  <div className="text-xs text-yellow-400 font-bold bg-yellow-400/10 inline-flex items-center px-3 py-1.5 rounded-lg border border-yellow-400/20">
                    <span className="mr-2">Hint:</span> <code className="bg-black/30 px-1.5 py-0.5 rounded text-white">pd.DataFrame()</code>
                  </div>
              </div>
              <div className="bg-black/50 p-5 rounded-2xl border border-white/5 shadow-inner">
                  <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                     <p className="text-indigo-300 text-xs font-bold uppercase tracking-wider">Expected Console Output</p>
                     <button onClick={() => runDemo('exercise')} className="bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded transition-colors shadow">RUN SIMULATION</button>
                  </div>
                  <pre className="text-slate-200 font-mono text-xs">
  Product  Price  Quantity
0  Laptop    800         5
1   Phone    500        10
2  Tablet    300         7
                  </pre>
              </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PandasIntro;