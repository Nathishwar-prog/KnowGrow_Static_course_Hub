import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Settings, Zap, 
  Layers, AlertTriangle, CheckCircle2, Table, BarChart, 
  CalendarDays, Filter, ChevronRight, Hash, Clock
} from 'lucide-react';

const PdDateRange: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'numeric' | 'dates' | 'visuals' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '   Name  Age  Salary',
          '0  John   25   50000',
          '1  Sara   30   60000',
          '2  Mike   28   55000',
          '3  Anna   35   70000'
        ];
        break;
      case 'slice_rows':
        outLines = [
          '   Name  Age  Salary',
          '1  Sara   30   60000',
          '2  Mike   28   55000'
        ];
        break;
      case 'slice_cols':
        outLines = [
          '   Age  Salary',
          '0   25   50000',
          '1   30   60000',
          '2   28   55000',
          '3   35   70000'
        ];
        break;
      case 'filter_condition':
        outLines = [
          '   Name  Age  Salary',
          '0  John   25   50000',
          '1  Sara   30   60000',
          '2  Mike   28   55000'
        ];
        break;
      case 'filter_between':
        outLines = [
          '   Name  Age  Salary',
          '0  John   25   50000',
          '1  Sara   30   60000',
          '2  Mike   28   55000'
        ];
        break;
      case 'python_range':
        outLines = [
          '   Numbers',
          '0        1',
          '1        2',
          '2        3',
          '3        4',
          '4        5',
          '5        6',
          '6        7',
          '7        8',
          '8        9',
          '9       10'
        ];
        break;
      case 'pandas_date_range':
        outLines = [
          'DatetimeIndex([\'2024-01-01\', \'2024-01-02\', \'2024-01-03\',',
          '               \'2024-01-04\', \'2024-01-05\'],',
          '              dtype=\'datetime64[ns]\', freq=\'D\')'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Line Chart...',
          'Age Distribution (Mock Output)',
          '========================================',
          '35 |                   *',
          '   |',
          '30 |         *',
          '   |',
          '28 |               *',
          '   |',
          '25 |   *',
          '   +---------------------------',
          '       0     1     2     3'
        ];
        break;
      case 'real_world':
        outLines = [
          '  Product  Price',
          '1   Phone  30000',
          '3      TV  60000'
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
          <CalendarDays className="w-10 h-10 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Data Range <code className="text-fuchsia-600 dark:text-fuchsia-400 text-3xl sm:text-4xl bg-fuchsia-50 dark:bg-fuchsia-900/20 px-3 py-1 rounded-xl">range()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Master the art of selecting, filtering, and generating subsets of rows, columns, numerical values, and dates within specific intervals.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-fuchsia-500" />
            Range Selection Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-3️⃣ Slicing
            </button>
            <button
              onClick={() => setActiveTab('numeric')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'numeric' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Filter className="w-4 h-4 mr-1.5" /> 4️⃣-6️⃣ Values
            </button>
             <button
              onClick={() => setActiveTab('dates')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'dates' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Clock className="w-4 h-4 mr-1.5" /> 7️⃣ Dates
            </button>
             <button
              onClick={() => setActiveTab('visuals')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'visuals' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 8️⃣-9️⃣ Viz & Apps
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
                    1️⃣ What is a Data Range?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>When working with datasets in Pandas, a <b>data range refers to a continuous subset of data</b> selected based on index positions, values, or specific conditions within an interval.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                      <li>Selecting rows 1 to 10</li>
                      <li>Filtering values between 100 and 500</li>
                      <li>Creating a sequential range of dates</li>
                      <li>Selecting columns from A to D</li>
                    </ul>
                    <p className="text-sm font-medium">Understanding data ranges is essential for data filtering, analysis, and preprocessing.</p>
                  </div>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mb-4">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">Base Example Dataset</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">We will use this DataFrame for the following slicing examples.</p>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
data = {'{'}
  <span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Sara"</span>, <span className="text-amber-500">"Mike"</span>, <span className="text-amber-500">"Anna"</span>],
  <span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500">25</span>, <span className="text-emerald-500">30</span>, <span className="text-emerald-500">28</span>, <span className="text-emerald-500">35</span>],
  <span className="text-amber-500">"Salary"</span>: [<span className="text-emerald-500">50000</span>, <span className="text-emerald-500">60000</span>, <span className="text-emerald-500">55000</span>, <span className="text-emerald-500">70000</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>

                  <div className="grid md:grid-cols-2 gap-4">
                    <button onClick={() => runDemo('slice_rows')} className="text-left group w-full">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors relative shadow-sm h-full">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN ROW SLICE</div>
                            <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">2️⃣ Selecting Range of Rows</h4>
                            <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 mb-3">Using <code className="bg-white/50 px-1 rounded">iloc</code> (index location). End index is excluded!</p>
                            <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2.5 rounded border border-slate-100 dark:border-slate-800 text-center font-bold">
df.<span className="text-indigo-500 font-bold">iloc</span>[<span className="text-emerald-500">1</span>:<span className="text-emerald-500">3</span>]
                            </pre>
                        </div>
                    </button>
                    <button onClick={() => runDemo('slice_cols')} className="text-left group w-full">
                        <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-4 hover:border-fuchsia-400 dark:hover:border-fuchsia-700 transition-colors relative shadow-sm h-full">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN COL SLICE</div>
                            <h4 className="font-bold text-sm text-fuchsia-600 dark:text-fuchsia-400 mb-2">3️⃣ Selecting Range of Columns</h4>
                            <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 mb-3">Using <code className="bg-white/50 px-1 rounded">loc</code> for label slicing. <code className="bg-white/50 px-1 rounded">:</code> means all rows.</p>
                             <pre className="font-mono text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2.5 rounded border border-slate-100 dark:border-slate-800 text-center font-bold">
df.<span className="text-fuchsia-500 font-bold">loc</span>[:, <span className="text-amber-500">"Age"</span>:<span className="text-amber-500">"Salary"</span>]
                            </pre>
                        </div>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'numeric' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Filter className="w-5 h-5 text-emerald-500 mr-2" />
                    4️⃣-5️⃣ Filtering Values within a Range
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Sometimes we want to isolate rows where numeric values fall within a specific numeric range constraints.</p>

                  <button onClick={() => runDemo('filter_condition')} className="text-left group w-full mb-4">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm h-full">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CONDITIONAL</div>
                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-2">4️⃣ Manual Conditional Range Filtering</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Example: Salary between 50000 and 60000 inclusive.</p>
                      <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto">
<span className="text-slate-400 italic"># You must wrap multiple conditions in parentheses!</span>
df[(df[<span className="text-amber-500">"Salary"</span>] &gt;= <span className="text-emerald-500">50000</span>) &amp; (df[<span className="text-amber-500">"Salary"</span>] &lt;= <span className="text-emerald-500">60000</span>)]
                      </pre>
                    </div>
                  </button>

                   <button onClick={() => runDemo('filter_between')} className="text-left group w-full mb-8">
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm h-full shadow-emerald-500/10">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BETWEEN</div>
                      <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-2">5️⃣ Using the <code className="bg-white/50 px-1 rounded shadow-sm">between()</code> Function (Recommended)</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Pandas provides an easier, cleaner, and more readable method.</p>
                      <pre className="font-mono text-[11px] sm:text-xs text-emerald-800 dark:text-emerald-300 bg-white dark:bg-emerald-950 p-3 rounded border border-emerald-100 dark:border-emerald-800 overflow-x-auto font-bold text-center">
df[df[<span className="text-amber-600">"Salary"</span>].<span className="text-emerald-600">between</span>(<span className="text-emerald-500">50000</span>, <span className="text-emerald-500">60000</span>)]
                      </pre>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Hash className="w-5 h-5 text-sky-500 mr-2" />
                    6️⃣ Creating Range Data with <code className="ml-1 text-sky-500 bg-sky-50 dark:bg-sky-900/20 px-1 rounded font-mono font-bold">range()</code>
                  </h3>

                   <button onClick={() => runDemo('python_range')} className="text-left group w-full">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors relative shadow-sm h-full">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">You can dynamically populate a DataFrame using Python's native built-in integer range function generators.</p>
                      <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto">
df = pd.DataFrame({'{'}
    <span className="text-amber-500">"Numbers"</span>: <span className="text-sky-500 font-bold">range</span>(<span className="text-emerald-500">1</span>, <span className="text-emerald-500">11</span>) <span className="text-slate-500 italic"># 1 through 10</span>
{'}'})
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}

               {activeTab === 'dates' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="bg-sky-50 dark:bg-sky-900/10 border-l-4 border-sky-500 p-6 rounded-r-xl shadow-sm">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center mb-3">
                          <Clock className="w-6 h-6 text-sky-500 mr-2" />
                          7️⃣ Date Range in Pandas
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Pandas shines with Time Series data. It has an incredibly powerful sequence generation function called <code className="bg-white dark:bg-slate-800 px-1 rounded border border-slate-200 dark:border-slate-700 text-sky-600 font-bold shadow-sm">pd.date_range()</code>.</p>
                      
                      <button onClick={() => runDemo('pandas_date_range')} className="text-left group w-full">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors relative shadow-sm">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DATES</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">Generate Date Sequence</h4>
                            <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 p-3 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto">
dates = pd.<span className="text-sky-600 font-bold">date_range</span>(start=<span className="text-amber-500">"2024-01-01"</span>, periods=<span className="text-emerald-500">5</span>)

<span className="text-blue-500">print</span>(dates)
                            </pre>
                        </div>
                      </button>

                      <div className="mt-4 flex items-center gap-3">
                          <ChevronRight className="text-slate-400 w-5 h-5"/>
                          <p className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 p-2 rounded flex-1 shadow-sm border border-slate-200 dark:border-slate-700">You can inject this directly into DataFrames: <br/> <code className="font-mono text-indigo-500 font-bold">df = pd.DataFrame({"{"}"Date": dates{"}"})</code></p>
                      </div>
                  </div>

                </div>
              )}

               {activeTab === 'visuals' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <BarChart className="w-5 h-5 text-amber-500 mr-2" />
                      8️⃣ Visualization Example
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-8">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-amber-400 dark:hover:border-amber-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN PLOT</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Example: Visualizing Age distribution array mapping to index values.</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1">
import matplotlib.pyplot as plt

df.plot(y=<span className="text-amber-500">"Age"</span>, kind=<span className="text-amber-500">"line"</span>)

plt.title(<span className="text-amber-500">"Age Distribution"</span>)
plt.show()
                          </pre>
                          
                          <div className="bg-slate-100 dark:bg-slate-950 p-4 rounded border border-slate-200 dark:border-slate-800 flex-1 flex flex-col justify-end text-[10px] font-mono leading-tight">
                            <div className="text-center text-slate-500 mb-2 font-bold font-sans text-xs">Line Plot Render</div>
                            <div className="flex items-end justify-between h-20 mb-2 border-b border-l border-slate-400 pl-2 pb-1 relative pt-2">
                                <span className="absolute left-[-20px] top-[-5px] text-[8px] text-slate-400">Age</span>
                              <div className="w-1 h-1 bg-amber-500 rounded-full relative ml-2 mb-[-4px] z-10 mx-auto" style={{bottom: '0%'}}></div>
                              <div className="w-1 h-1 bg-amber-500 rounded-full relative mb-[-4px] z-10 mx-auto" style={{bottom: '50%'}}></div>
                              <div className="w-1 h-1 bg-amber-500 rounded-full relative mb-[-4px] z-10 mx-auto" style={{bottom: '30%'}}></div>
                              <div className="w-1 h-1 bg-amber-500 rounded-full relative mr-2 mb-[-4px] z-10 mx-auto" style={{bottom: '100%'}}></div>
                              
                              <svg className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none">
                                  <line x1="8%" y1="100%" x2="36%" y2="50%" stroke="rgb(245, 158, 11)" strokeWidth="1" />
                                  <line x1="36%" y1="50%" x2="64%" y2="70%" stroke="rgb(245, 158, 11)" strokeWidth="1" />
                                  <line x1="64%" y1="70%" x2="92%" y2="0%" stroke="rgb(245, 158, 11)" strokeWidth="1" />
                              </svg>
                            </div>
                            <div className="flex justify-between pl-2">
                              <div className="text-slate-500 text-center mx-auto">0</div>
                              <div className="text-slate-500 text-center mx-auto">1</div>
                              <div className="text-slate-500 text-center mx-auto">2</div>
                              <div className="text-slate-500 text-center mx-auto">3</div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Settings className="w-5 h-5 text-indigo-500 mr-2" />
                      9️⃣ Real-World Data Filter Application
                  </h3>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full mb-4">
                      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN FILTER</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-bold">Scenario: Filtering Product Sales priced between 25000 and 70000.</p>
                        <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto mb-3">
data = {'{'}
    <span className="text-amber-500">"Product"</span>: [<span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Phone"</span>, <span className="text-amber-500">"Tablet"</span>, <span className="text-amber-500">"TV"</span>],
    <span className="text-amber-500">"Price"</span>:   [<span className="text-emerald-500">80000</span>, <span className="text-emerald-500">30000</span>, <span className="text-emerald-500">20000</span>, <span className="text-emerald-500">60000</span>]
{'}'}
df = pd.DataFrame(data)

<span className="text-slate-400 italic"># Applies boolean mask indexing to return valid rows</span>
result = df[df[<span className="text-amber-500">"Price"</span>].<span className="text-blue-500 font-bold">between</span>(<span className="text-emerald-500">25000</span>, <span className="text-emerald-500">70000</span>)]
                        </pre>
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
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">❌ Using <code className="text-rose-500 bg-white dark:bg-slate-950 px-1 rounded mx-1">and</code> instead of <code className="text-emerald-500 bg-white dark:bg-slate-950 px-1 rounded mx-1">&amp;</code></div>
                      <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-2 font-mono">Wrong: <span className="text-rose-600 block bg-white dark:bg-slate-950 p-1 mt-1 rounded border border-rose-100 dark:border-rose-900">df[(df["Age"] &gt; 25 <span className="font-bold border-b border-rose-500">and</span> df["Age"] &lt; 35)]</span></p>
                      <p className="text-[10px] text-slate-600 dark:text-slate-400 font-mono">Correct: <span className="text-emerald-600 block bg-white dark:bg-slate-950 p-1 mt-1 rounded border border-emerald-100 dark:border-emerald-900">df[(df["Age"] &gt; 25) <span className="font-bold border-b border-emerald-500">&amp;</span> (df["Age"] &lt; 35)]</span></p>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative">
                      <div className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300 flex items-center">❌ Forgetting Parentheses</div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-1 leading-relaxed">Pandas boolean operators <code className="font-bold bg-slate-200 dark:bg-slate-800 px-1">&amp;</code> , <code className="font-bold bg-slate-200 dark:bg-slate-800 px-1">|</code> , <code className="font-bold bg-slate-200 dark:bg-slate-800 px-1">~</code> have higher precedence than comparative math symbols.</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100/50 dark:bg-emerald-900/40 p-2 rounded mt-2 text-center">Always wrap individual conditions in <code className="text-xs">()</code></p>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣1️⃣ Professional Advice (Tips)
                  </h3>

                  <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-emerald-600 dark:text-emerald-400">1</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Use <code className="bg-slate-100 dark:bg-slate-900 px-1 text-emerald-600">between()</code> for cleaner code</span>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1"><code className="line-through text-rose-400 mr-2 border border-slate-200 dark:border-slate-700 px-1 bg-slate-50 dark:bg-slate-900">(df["Age"] &gt;= 20) &amp; (df["Age"] &lt;= 30)</code> <br className="md:hidden" /> → use <code className="text-emerald-600 font-bold border border-emerald-200 dark:border-emerald-800 px-1 rounded bg-emerald-50 dark:bg-emerald-900/20">df["Age"].between(20,30)</code></p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                           <div className="bg-sky-100 dark:bg-sky-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-sky-600 dark:text-sky-400">2</span>
                          </div>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Performance: <code className="bg-slate-100 dark:bg-slate-900 px-1 text-sky-600">.iloc</code> for index ranges</span>
                             <div className="flex gap-4 mt-2">
                                <span className="bg-sky-50 dark:bg-sky-900/20 px-3 py-1 rounded text-[11px] border border-sky-100 dark:border-sky-800 text-sky-700 dark:text-sky-300"><b>iloc</b> → integer position (faster)</span>
                                <span className="bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded text-[11px] border border-amber-100 dark:border-amber-800 text-amber-700 dark:text-amber-300"><b>loc</b> → label based lookup</span>
                            </div>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                          <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-indigo-600 dark:text-indigo-400">3</span>
                          </div>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Use Date Ranges for Time-Series</span>
                            <p className="text-[11px] text-slate-500 mb-1">Essential logic block for Finance, Stock, and IOT log arrays.</p>
                            <code className="text-xs bg-slate-50 dark:bg-slate-900 px-2 py-1 flex rounded border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-bold w-fit">pd.date_range("2024-01-01", "2024-12-31")</code>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-fuchsia-400" />
                     Execution Console
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
                        <CalendarDays className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans">Run a filtering action or generator to display array ranges here.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.includes('DatetimeIndex') || line.includes('dtype=') ? 'text-amber-300 italic' :
                              line.includes('Generating') ? 'text-emerald-400 italic mb-2' :
                              line.includes('===') || line.includes('---') || line.includes('RangeIndex') || line.includes('Data columns') ? 'text-slate-400 block' :
                              line.includes('*') ? 'text-fuchsia-400 font-bold' :
                              line.includes('Name') || line.includes('Age') || line.includes('Salary') || line.includes('Product') || line.includes('Price') || line.includes('Numbers') ? 'text-sky-300 font-bold' :
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

export default PdDateRange;
