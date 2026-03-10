import React, { useState } from 'react';
import { 
  Code, Terminal, AlertCircle, CheckCircle2,
  Lightbulb, ShieldCheck, MessageSquareText, 
  Database, Table, FileSpreadsheet, Box, LineChart, Cpu, Zap
} from 'lucide-react';

const PandasHome: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'structures' | 'df' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'install':
        outLines = ['Successfully installed pandas-2.2.1', 'pandas imported successfully!'];
        break;
      case 'check_version':
        outLines = ['2.2.1'];
        break;
      case 'import_pd':
        outLines = ['Pandas imported successfully!'];
        break;
      case 'create_df':
        outLines = [
          '   Name  Age    City',
          '0  John   25  London',
          '1  Emma   30   Paris',
          '2  Alex   28  Berlin'
        ];
        break;
      case 'sales_data':
        outLines = [
          '  Product  Price',
          '0  Laptop    800',
          '1   Phone    500',
          '2  Tablet    300'
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
      case 'tail':
        outLines = [
          '   Name  Age    City',
          '95 Nina   29  Lisbon',
          '96 Paul   31  Athens',
          '97 Karl   27  Vienna',
          '98 Anna   24  Prague',
          '99 Luis   33  Warsaw'
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
      case 'exercise':
        outLines = [
           '   Name  Marks    City',
           '0  John     85  London',
           '1  Emma     92   Paris',
           '2  Alex     78  Berlin'
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
          Pandas Fundamentals
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Pandas is an open-source Python library used for powerful data manipulation, analysis, and cleaning of structured data.
        </p>
      </header>

      {/* 2. Intro & Why Pandas */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquareText className="w-6 h-6 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is Pandas & 2️⃣ Why it matters</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Pandas provides powerful tools to analyze structured data, clean messy datasets, manipulate tables, and perform statistical analysis. Built on top of NumPy, it is widely used in Data Science, Machine Learning, Data Analytics, Financial analysis, and Business intelligence.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
               <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center">
                 <Cpu className="w-5 h-5 mr-2" />
                 Real-World Data Workflow 
               </h3>
               <p className="text-sm text-indigo-700 dark:text-indigo-200 mb-3">In real-world projects, data comes as CSV files, Excel sheets, Databases, or JSON. Pandas handles them all:</p>
               <div className="flex items-center justify-between font-mono text-xs bg-slate-900 text-indigo-300 p-3 rounded-lg border border-slate-800">
                  <span>Raw Data</span> <span className="text-slate-500">→</span> 
                  <span className="text-white font-bold">Pandas</span> <span className="text-slate-500">→</span> 
                  <span className="text-emerald-400">Clean Data</span> <span className="text-slate-500">→</span> 
                  <span className="text-amber-400">Insights</span>
               </div>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
               <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center">
                 <Zap className="w-5 h-5 mr-2" />
                 3️⃣ Key Features
               </h3>
               <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 grid grid-cols-2 gap-1 items-center">
                  <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0"/> Data Cleaning</div>
                  <div className="text-xs text-slate-500">Handle missing values</div>
                  <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0"/> Data Filtering</div>
                  <div className="text-xs text-slate-500">Select specific data</div>
                  <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0"/> Data Aggregation</div>
                  <div className="text-xs text-slate-500">Calculate statistics</div>
                  <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0"/> Data Import/Export</div>
                  <div className="text-xs text-slate-500">Read CSV, Excel, SQL</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-indigo-500" />
            Interactive Pandas Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'basics' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Code className="w-4 h-4 mr-2" /> 4️⃣ Setup & Import
            </button>
            <button
              onClick={() => setActiveTab('structures')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'structures' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Box className="w-4 h-4 mr-2" /> 6️⃣ Data Structures
            </button>
            <button
              onClick={() => setActiveTab('df')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'df' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Table className="w-4 h-4 mr-2" /> 7️⃣ DataFrames
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'tips' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <LineChart className="w-4 h-4 mr-2" /> 🚀 Tips & Tricks
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
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-5">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">4️⃣ Installation & 5️⃣ Importing</h3>

                  <button onClick={() => runDemo('install')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN PIP</div>
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">4️⃣ Installing Pandas</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Before using Pandas, you need to install it using Python's package manager.</p>
                      <pre className="font-mono text-[11.5px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-slate-400">pip install pandas</span>
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('check_version')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">Checking Installation</h4>
                      <pre className="font-mono text-[11.5px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-blue-500">import</span> pandas <span className="text-blue-500">as</span> pd<br/><br/>
<span className="text-blue-500">print</span>(pd.__version__)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('import_pd')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-300 dark:hover:border-teal-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                      <h4 className="font-bold text-sm text-teal-600 dark:text-teal-400 mb-2">5️⃣ Standard Import Convention</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">The standard official community convention is to import pandas as <b>pd</b>.</p>
                      <pre className="font-mono text-[11.5px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-blue-500">import</span> pandas <span className="text-blue-500">as</span> pd<br/><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Pandas imported successfully!"</span>)
                      </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'structures' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">6️⃣ Core Data Structures</h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm mb-4">
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">Pandas mainly uses two powerful data structures:</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-indigo-200 flex flex-col items-center justify-center text-center">
                            <Box className="w-8 h-8 text-indigo-500 mb-2" />
                            <h4 className="font-bold text-indigo-700 dark:text-indigo-400">Series</h4>
                            <p className="text-xs text-slate-500 mt-1">One-dimensional labeled data</p>
                        </div>
                         <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-teal-200 flex flex-col items-center justify-center text-center">
                            <Table className="w-8 h-8 text-teal-500 mb-2" />
                            <h4 className="font-bold text-teal-700 dark:text-teal-400">DataFrame</h4>
                            <p className="text-xs text-slate-500 mt-1">Two-dimensional table (rows & cols)</p>
                        </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800 p-4 rounded-xl shadow-sm">
                        <h4 className="font-bold text-sm text-indigo-700 mb-3 tracking-wide uppercase text-center border-b border-indigo-200 pb-2">Series Visualization</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 text-center">
Index   Value<br/>
<span className="text-slate-400">0</span>       <span className="text-emerald-500">10</span><br/>
<span className="text-slate-400">1</span>       <span className="text-emerald-500">20</span><br/>
<span className="text-slate-400">2</span>       <span className="text-emerald-500">30</span>
                        </pre>
                    </div>
                     <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-800 p-4 rounded-xl shadow-sm">
                        <h4 className="font-bold text-sm text-teal-700 mb-3 tracking-wide uppercase text-center border-b border-teal-200 pb-2">DataFrame Visualization</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 text-center">
Idx  Name   Age<br/>
<span className="text-slate-400">0</span>    <span className="text-amber-500">John</span>   <span className="text-emerald-500">25</span><br/>
<span className="text-slate-400">1</span>    <span className="text-amber-500">Emma</span>   <span className="text-emerald-500">30</span><br/>
<span className="text-slate-400">2</span>    <span className="text-amber-500">Alex</span>   <span className="text-emerald-500">28</span>
                        </pre>
                    </div>
                  </div>

                </div>
              )}

              {activeTab === 'df' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">7️⃣-9️⃣ DataFrames</h3>
                  
                  <button onClick={() => runDemo('create_df')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-300 dark:hover:border-teal-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-teal-600 dark:text-teal-400 mb-2">7️⃣ Creating First DataFrame</h4>
                        <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
<span className="text-blue-500">import</span> pandas <span className="text-blue-500">as</span> pd<br/><br/>
data = {'{'}<br/>
{'    '}<span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Emma"</span>, <span className="text-amber-500">"Alex"</span>],<br/>
{'    '}<span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500">25</span>, <span className="text-emerald-500">30</span>, <span className="text-emerald-500">28</span>],<br/>
{'    '}<span className="text-amber-500">"City"</span>: [<span className="text-amber-500">"London"</span>, <span className="text-amber-500">"Paris"</span>, <span className="text-amber-500">"Berlin"</span>]<br/>
{'}'}<br/><br/>
df = pd.DataFrame(data)<br/>
<span className="text-blue-500">print</span>(df)
                        </pre>
                     </div>
                  </button>

                  <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                     <h4 className="font-bold text-sm text-indigo-800 dark:text-indigo-300 mb-2">8️⃣ DataFrame Visualization Concepts</h4>
                     <p className="text-xs text-indigo-700 mb-4 dark:text-indigo-300">Each column represents a <b>feature</b>, and each row represents a <b>record</b>.</p>
                     <div className="bg-white dark:bg-slate-900 p-2 rounded border border-indigo-200 overflow-x-auto text-xs font-mono">
<pre>
+----+-------+-----+--------+
| ID | Name  | Age | City   |
+----+-------+-----+--------+
| 0  | John  | 25  | London |
| 1  | Emma  | 30  | Paris  |
| 2  | Alex  | 28  | Berlin |
+----+-------+-----+--------+
</pre>
                     </div>
                  </div>

                  <button onClick={() => runDemo('sales_data')} className="w-full text-left group">
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN</div>
                        <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">9️⃣ Real-World Data Example</h4>
                         <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-hidden w-full">
<span className="text-slate-400 italic"># Sales Data Analysis</span><br/>
<span className="text-blue-500">import</span> pandas <span className="text-blue-500">as</span> pd<br/><br/>
sales = {'{'}<br/>
{'    '}<span className="text-amber-500">"Product"</span>: [<span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Phone"</span>, <span className="text-amber-500">"Tablet"</span>],<br/>
{'    '}<span className="text-amber-500">"Price"</span>: [<span className="text-emerald-500">800</span>, <span className="text-emerald-500">500</span>, <span className="text-emerald-500">300</span>]<br/>
{'}'}<br/><br/>
df = pd.DataFrame(sales)<br/>
<span className="text-blue-500">print</span>(df)
                        </pre>
                     </div>
                  </button>

                </div>
              )}
              
              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-4">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">💡 Tips & Tricks</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                      <button onClick={() => runDemo('head')} className="text-left group">
                          <div className="h-full bg-slate-50 dark:bg-slate-950 border border-slate-200 hover:border-amber-400 rounded-xl p-4 transition-colors shadow-sm">
                              <h4 className="font-bold text-xs text-amber-600 mb-2">First Rows</h4>
                              <p className="text-[10px] text-slate-500 mb-2">View first 5 rows.</p>
                              <code className="text-[11px] font-mono bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded font-bold">df.head()</code>
                          </div>
                      </button>
                      <button onClick={() => runDemo('tail')} className="text-left group">
                          <div className="h-full bg-slate-50 dark:bg-slate-950 border border-slate-200 hover:border-fuchsia-400 rounded-xl p-4 transition-colors shadow-sm">
                              <h4 className="font-bold text-xs text-fuchsia-600 mb-2">Last Rows</h4>
                              <p className="text-[10px] text-slate-500 mb-2">View last 5 rows.</p>
                              <code className="text-[11px] font-mono bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded font-bold">df.tail()</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('info')} className="text-left group">
                          <div className="h-full bg-slate-50 dark:bg-slate-950 border border-slate-200 hover:border-blue-400 rounded-xl p-4 transition-colors shadow-sm">
                              <h4 className="font-bold text-xs text-blue-600 mb-2">Data Info</h4>
                              <p className="text-[10px] text-slate-500 mb-2">Types & nulls.</p>
                              <code className="text-[11px] font-mono bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded font-bold">df.info()</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('describe')} className="text-left group">
                          <div className="h-full bg-slate-50 dark:bg-slate-950 border border-slate-200 hover:border-emerald-400 rounded-xl p-4 transition-colors shadow-sm">
                              <h4 className="font-bold text-xs text-emerald-600 mb-2">Summary</h4>
                              <p className="text-[10px] text-slate-500 mb-2">Calculate stats.</p>
                              <code className="text-[11px] font-mono bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded font-bold">df.describe()</code>
                          </div>
                      </button>
                  </div>

                  <div className="bg-violet-50 dark:bg-violet-900/10 border border-violet-200 dark:border-violet-800 p-4 rounded-xl shadow-sm mt-4">
                     <h4 className="font-bold text-violet-700 dark:text-violet-400 mb-3">🔟 Pandas Data Analysis Process</h4>
                     <div className="flex flex-col items-center justify-center space-y-2 mb-2">
                        <div className="bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full border border-violet-200 text-sm font-bold text-violet-600">Import Data</div>
                        <div className="text-violet-300">↓</div>
                        <div className="bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full border border-violet-200 text-sm font-bold text-violet-600">Explore Data</div>
                        <div className="text-violet-300">↓</div>
                        <div className="bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full border border-violet-200 text-sm font-bold text-violet-600">Clean Data</div>
                        <div className="text-violet-300">↓</div>
                        <div className="bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full border border-violet-200 text-sm font-bold text-violet-600">Analyze Data</div>
                         <div className="text-violet-300">↓</div>
                        <div className="bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full border border-violet-200 text-sm font-bold text-violet-600">Visualize Results</div>
                     </div>
                  </div>

                  <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800 p-4 rounded-xl shadow-sm mt-4 flex items-start">
                     <AlertCircle className="w-8 h-8 text-rose-500 shrink-0 mr-4" />
                     <div>
                         <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-1">Personal Dev Recommendation</h4>
                         <p className="text-xs text-rose-800/80 mb-2">Best environment for learning Pandas natively is through interactive notebooks because results appear instantly below the code:</p>
                         <ul className="list-disc pl-5 text-xs text-rose-800/80 font-bold space-y-1">
                             <li>Jupyter Notebook</li>
                             <li>Google Colab</li>
                             <li>VS Code notebooks</li>
                         </ul>
                     </div>
                  </div>

                </div>
              )}

            </div>
          </div>

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
                        <span className="text-center">Run a code snippet to view the interactive output here...</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        const isNum = !isNaN(Number(line));
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                              line.includes('class') || line.includes('Column') || line.includes('Dtype') ? 'text-indigo-300' :
                              line.startsWith(' ') && isNum ? 'text-emerald-400' :
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

      {/* 4. Practice Exercise Section */}
      <section className="max-w-4xl mx-auto pb-16">
         <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 border border-indigo-700 p-8 rounded-3xl shadow-xl relative h-full flex flex-col">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            🧩 Practice Exercise (For Students)
          </h2>
          <div className="z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                  <p className="text-indigo-100 mb-4 text-sm font-medium">Create a new DataFrame containing:</p>
                  <ul className="list-disc pl-5 text-indigo-200 mb-4 space-y-1 font-mono text-xs">
                      <li>Name</li>
                      <li>Marks</li>
                      <li>City</li>
                  </ul>
                  <p className="text-indigo-100 mb-2 text-sm font-medium">Example Data to Input:</p>
                  <pre className="bg-black/40 text-emerald-300 p-3 rounded-lg text-xs font-mono mb-4 border border-white/10">
John   85   London
Emma   92   Paris
Alex   78   Berlin
                  </pre>
                  <div className="text-xs text-yellow-400 font-bold bg-yellow-400/10 inline-block px-3 py-1.5 rounded-lg border border-yellow-400/20">
                    Hint: Use pd.DataFrame() 
                  </div>
              </div>
              <div className="bg-black/50 p-5 rounded-2xl border border-white/5 shadow-inner">
                  <div className="flex justify-between items-center mb-3">
                     <p className="text-indigo-300 text-xs font-bold uppercase tracking-wider">Expected Output Table</p>
                     <button onClick={() => runDemo('exercise')} className="bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded transition-colors shadow">RUN SOLUTION</button>
                  </div>
                  <pre className="text-white font-mono text-xs">
   Name  Marks   City
0  John     85 London
1  Emma     92  Paris
2  Alex     78 Berlin
                  </pre>
              </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PandasHome;