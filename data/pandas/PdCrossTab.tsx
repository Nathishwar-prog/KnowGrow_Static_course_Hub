import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Settings, Zap, 
  Layers, AlertTriangle, CheckCircle2, Table, BarChart, 
  PieChart, XCircle, Check, Columns, Activity
} from 'lucide-react';

const PdCrossTab: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'advanced' | 'visuals' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'sample_data':
        outLines = [
          '   Gender Product',
          '0    Male  Laptop',
          '1  Female  Laptop',
          '2  Female   Phone',
          '3    Male   Phone',
          '4    Male  Laptop',
          '5  Female   Phone'
        ];
        break;
      case 'basic_crosstab':
        outLines = [
          'Product  Laptop  Phone',
          'Gender                ',
          'Female        1      2',
          'Male          2      1'
        ];
        break;
      case 'names_crosstab':
        outLines = [
          'Product Type     Laptop  Phone',
          'Customer Gender               ',
          'Female                1      2',
          'Male                  2      1'
        ];
        break;
      case 'percent_crosstab':
        outLines = [
          'Product    Laptop     Phone',
          'Gender                     ',
          'Female   0.333333  0.666667',
          'Male     0.666667  0.333333'
        ];
        break;
      case 'agg_crosstab':
        outLines = [
          'Product   Laptop    Phone',
          'Gender                   ',
          'Female   75000.0  30000.0',
          'Male     80000.0  35000.0'
        ];
        break;
      case 'margins_crosstab':
        outLines = [
          'Product  Laptop  Phone  All',
          'Gender                     ',
          'Female        1      2    3',
          'Male          2      1    3',
          'All           3      3    6'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Bar Chart...',
          'Product Purchase by Gender (Mock Output)',
          '========================================',
          'Female | Laptop: [███       ] 1',
          '       | Phone : [██████    ] 2',
          'Male   | Laptop: [██████    ] 2',
          '       | Phone : [███       ] 1'
        ];
        break;
      case 'exercise':
        outLines = [
          'Result      Fail  Pass',
          'Department            ',
          'CSE            0     2',
          'ECE            1     1'
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
          <Table className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Cross-Tabulation <code className="text-indigo-600 dark:text-indigo-400 text-3xl sm:text-4xl bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-xl">crosstab()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Create powerful frequency distribution tables and understand relationships between categories, similar to Excel Pivot Tables.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-indigo-500" />
            Crosstab Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-5️⃣ Basics
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Settings className="w-4 h-4 mr-1.5" /> 6️⃣-9️⃣ Advanced
            </button>
             <button
              onClick={() => setActiveTab('visuals')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'visuals' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 🔟-1️⃣2️⃣ Visuals
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
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
                    <Table className="w-5 h-5 text-indigo-500 mr-2" />
                    1️⃣ What is pd.crosstab()?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>The <code className="bg-slate-100 dark:bg-slate-900 text-indigo-600 font-bold px-1 rounded">pd.crosstab()</code> function creates a cross-tabulation table that shows the frequency distribution of variables.</p>
                    <p className="text-sm">In simple terms: It counts how many times combinations of categories occur in a dataset. It is similar to <b>Pivot Tables in Excel</b>.</p>
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-3 rounded-r text-sm">
                      <b>Definition:</b> A Pandas function used to compute a simple cross-tabulation of two or more categorical variables, producing a frequency table.
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Activity className="w-5 h-5 text-emerald-500 mr-2" />
                    2️⃣ Why pd.crosstab() is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">
                      <p className="mb-4">It helps you understand relationships between columns, perform categorical data analysis, and prepare data for ML.</p>
                      
                      <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 mb-4 text-xs font-mono">
                        <thead className="bg-slate-100 dark:bg-slate-900">
                          <tr>
                            <th className="p-2 border border-slate-200 dark:border-slate-700">Scenario</th>
                            <th className="p-2 border border-slate-200 dark:border-slate-700">Example</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400">Sales Analysis</td>
                            <td className="p-2 border border-slate-200 dark:border-slate-700">Product vs Region</td>
                          </tr>
                          <tr>
                            <td className="p-2 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400">Survey Data</td>
                            <td className="p-2 border border-slate-200 dark:border-slate-700">Gender vs Choice</td>
                          </tr>
                          <tr>
                            <td className="p-2 border border-slate-200 dark:border-slate-700 text-rose-600 dark:text-rose-400">Education</td>
                            <td className="p-2 border border-slate-200 dark:border-slate-700">Department vs Pass/Fail</td>
                          </tr>
                          <tr>
                            <td className="p-2 border border-slate-200 dark:border-slate-700 text-amber-600 dark:text-amber-400">Marketing</td>
                            <td className="p-2 border border-slate-200 dark:border-slate-700">Age group vs Product purchase</td>
                          </tr>
                        </tbody>
                      </table>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                      <code className="bg-white dark:bg-slate-950 px-3 py-2 rounded text-indigo-600 dark:text-indigo-400 font-bold block w-fit shadow-sm border border-slate-100 dark:border-slate-800 text-sm mb-4">
                          pd.crosstab(index, columns, values=None, aggfunc=None, normalize=False)
                      </code>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <li className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700"><span className="font-bold text-sky-500">index</span>: Row categories</li>
                          <li className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700"><span className="font-bold text-sky-500">columns</span>: Column categories</li>
                          <li className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700"><span className="font-bold text-sky-500">values</span>: Values to aggregate</li>
                          <li className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700"><span className="font-bold text-sky-500">aggfunc</span>: Aggregation function</li>
                          <li className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700 sm:col-span-2"><span className="font-bold text-sky-500">normalize</span>: Converts counts into percentages</li>
                      </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <button onClick={() => runDemo('sample_data')} className="text-left group w-full">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors relative shadow-sm h-full">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                            <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">4️⃣ Sample Dataset</h4>
                            <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 overflow-x-auto whitespace-pre">
data = {'{\n'}
  <span className="text-amber-500">"Gender"</span>: [<span className="text-amber-500">"Male"</span>, <span className="text-amber-500">"Female"</span>...],
  <span className="text-amber-500">"Product"</span>: [<span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Laptop"</span>...]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                    <button onClick={() => runDemo('basic_crosstab')} className="text-left group w-full">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors relative shadow-sm h-full">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CROSSTAB</div>
                            <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">5️⃣ Basic Execution</h4>
                            <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 overflow-x-auto whitespace-pre">
pd.<span className="text-blue-500 font-bold">crosstab</span>(df[<span className="text-amber-500">"Gender"</span>], df[<span className="text-amber-500">"Product"</span>])

<span className="text-slate-500 italic"># Counts female laptop buyers </span>
<span className="text-slate-500 italic"># vs male phone buyers etc.</span>
                            </pre>
                        </div>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Columns className="w-5 h-5 text-sky-500 mr-2" />
                    6️⃣-9️⃣ Advanced Configurations
                  </h3>

                  <button onClick={() => runDemo('names_crosstab')} className="text-left group w-full mb-4">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors relative shadow-sm h-full">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DEMO</div>
                      <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-2">6️⃣ Crosstab with Row & Column Names</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Makes output more readable for reports.</p>
                      <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2.5 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto">
pd.<span className="text-blue-500 font-bold">crosstab</span>(
  df[<span className="text-amber-500">"Gender"</span>], df[<span className="text-amber-500">"Product"</span>],
  rownames=[<span className="text-amber-500">"Customer Gender"</span>],
  colnames=[<span className="text-amber-500">"Product Type"</span>]
)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('percent_crosstab')} className="text-left group w-full mb-4">
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-700 transition-colors relative shadow-sm h-full">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN PERCENTAGE</div>
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2">7️⃣ Crosstab with Percentages</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Sometimes analysts need percentage distribution instead of counts. Use <code className="bg-black/10 dark:bg-white/10 px-1 rounded">normalize="index"</code>.</p>
                      <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2.5 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto">
pd.<span className="text-blue-500 font-bold">crosstab</span>(df[<span className="text-amber-500">"Gender"</span>], df[<span className="text-amber-500">"Product"</span>], normalize=<span className="text-amber-500">"index"</span>)
                      </pre>
                    </div>
                  </button>

                  <div className="grid md:grid-cols-2 gap-4">
                    <button onClick={() => runDemo('agg_crosstab')} className="text-left group w-full">
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm h-full">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN AGG</div>
                        <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">8️⃣ Crosstab with Aggregation</h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2">Aggregate values instead of counting them. (e.g. sum of sales).</p>
                        <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto">
pd.<span className="text-blue-500 font-bold">crosstab</span>(
  df[<span className="text-amber-500">"Gender"</span>], 
  df[<span className="text-amber-500">"Product"</span>],
  values=df[<span className="text-amber-500">"Sales"</span>],
  aggfunc=<span className="text-amber-500">"sum"</span>
)
                        </pre>
                      </div>
                    </button>
                    
                    <button onClick={() => runDemo('margins_crosstab')} className="text-left group w-full">
                      <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/50 rounded-xl p-4 hover:border-purple-400 dark:hover:border-purple-700 transition-colors relative shadow-sm h-full">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-purple-500 bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN TOTALS</div>
                        <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400 mb-2">9️⃣ Adding Totals (Margins)</h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2">To include row totals and column totals use <code className="bg-black/10 dark:bg-white/10 px-1 rounded">margins=True</code>.</p>
                        <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto mt-7">
pd.<span className="text-blue-500 font-bold">crosstab</span>(
  df[<span className="text-amber-500">"Gender"</span>], 
  df[<span className="text-amber-500">"Product"</span>], 
  margins=<span className="text-blue-500 font-bold">True</span>
)
                        </pre>
                      </div>
                    </button>
                  </div>
                </div>
              )}

               {activeTab === 'visuals' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <PieChart className="w-5 h-5 text-rose-500 mr-2" />
                      🔟-1️⃣2️⃣ Visualizations & Concepts
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-4">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-rose-400 dark:hover:border-rose-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN PLOT</div>
                        <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2">🔟 Visualization of Crosstab</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Visualization helps understand frequency arrays fast.</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1">
import matplotlib.pyplot as plt

ct = pd.<span className="text-blue-500 font-bold">crosstab</span>(df[<span className="text-amber-500">"Gender"</span>], df[<span className="text-amber-500">"Product"</span>])
ct.plot(kind=<span className="text-amber-500">"bar"</span>)

plt.title(<span className="text-amber-500">"Product Purchase"</span>)
plt.show()
                          </pre>
                          
                          <div className="bg-slate-100 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex-1 flex flex-col justify-end text-[10px] font-mono leading-tight">
                            <div className="text-center text-slate-500 mb-2 font-bold font-sans text-xs">Visual Representation</div>
                            <div className="flex items-end gap-2 h-20 mb-2 border-b border-l border-slate-400 pl-2 pb-1">
                              <div className="w-6 bg-blue-500 h-[100%] rounded-t mx-1" title="Female Phone"></div>
                              <div className="w-6 bg-teal-500 h-[50%] rounded-t mr-2" title="Female Laptop"></div>
                              <div className="w-6 bg-blue-500 h-[50%] rounded-t mx-1" title="Male Phone"></div>
                              <div className="w-6 bg-teal-500 h-[100%] rounded-t" title="Male Laptop"></div>
                            </div>
                            <div className="flex gap-2 pl-2">
                              <div className="text-slate-500 w-14 text-center">Female</div>
                              <div className="text-slate-500 w-14 text-center ml-2">Male</div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </button>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                        <h4 className="font-bold text-sm text-slate-800 dark:text-white mb-3">1️⃣1️⃣ crosstab() vs pivot_table()</h4>
                        <table className="w-full text-xs text-left">
                          <thead>
                            <tr className="border-b border-slate-200 dark:border-slate-700">
                              <th className="py-2">Feature</th>
                              <th className="py-2 text-center">crosstab</th>
                              <th className="py-2 text-center">pivot_table</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-slate-600 dark:text-slate-300">
                            <tr>
                              <td className="py-2 font-medium">Simpler syntax</td>
                              <td className="py-2 text-center text-emerald-500"><CheckCircle2 className="w-4 h-4 mx-auto"/></td>
                              <td className="py-2 text-center text-rose-500"><XCircle className="w-4 h-4 mx-auto"/></td>
                            </tr>
                            <tr>
                              <td className="py-2 font-medium">Best for counts</td>
                              <td className="py-2 text-center text-emerald-500"><CheckCircle2 className="w-4 h-4 mx-auto"/></td>
                              <td className="py-2 text-center text-rose-500"><XCircle className="w-4 h-4 mx-auto"/></td>
                            </tr>
                            <tr>
                              <td className="py-2 font-medium">Complex Math</td>
                              <td className="py-2 text-center text-rose-500"><XCircle className="w-4 h-4 mx-auto"/></td>
                              <td className="py-2 text-center text-emerald-500"><CheckCircle2 className="w-4 h-4 mx-auto"/></td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="mt-3 text-[10px] text-slate-500 bg-slate-50 dark:bg-slate-900 p-2 rounded">Use crosstab for categorical analysis and pivot_table for advanced aggregations.</div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 flex flex-col justify-center text-center">
                        <BarChart className="w-8 h-8 mx-auto text-indigo-500 mb-3 opacity-50" />
                        <h4 className="font-bold text-sm text-slate-800 dark:text-white mb-2">1️⃣2️⃣ Real-World Example</h4>
                        <code className="text-[10px] block mb-3 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 py-1 rounded">pd.crosstab(df["Age_Group"], df["Product"])</code>
                        <p className="text-xs text-slate-600 dark:text-slate-400 text-left">Answers questions like:</p>
                        <ul className="text-[11px] text-slate-500 text-left list-disc pl-4 mt-2 space-y-1">
                          <li>Which age group buys which product?</li>
                          <li>Customer behavior patterns</li>
                          <li>Target marketing strategy</li>
                        </ul>
                    </div>
                  </div>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣3️⃣ Common Mistakes
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                      <div className="flex items-center text-rose-600 dark:text-rose-400 font-bold text-sm mb-2">
                        <XCircle className="w-4 h-4 mr-2" /> Wrong Syntax
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">Passing the full DataFrame instead of a specific Column Series.</p>
                      <code className="font-mono text-[10px] text-rose-700 block bg-rose-100 dark:bg-rose-950 p-2 rounded">pd.crosstab(df, df["Product"]) <span className="float-right">❌</span></code>
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 p-4 rounded-xl shadow-sm">
                      <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2">
                        <Check className="w-4 h-4 mr-2" /> Correct Syntax
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">Always separate series out of your dataframe!</p>
                      <code className="font-mono text-[10px] text-emerald-700 block bg-emerald-100 dark:bg-emerald-950 p-2 rounded">pd.crosstab(df["Gender"], df["Product"]) <span className="float-right">✅</span></code>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 p-3 rounded-lg text-xs text-amber-800 dark:text-amber-400 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2 shrink-0" />
                    When using `values=`, you MUST provide an `aggfunc`, otherwise Pandas throws an error!
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣4️⃣ Tips & Tricks (15+ Yrs Exp)
                  </h3>

                  <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                          <div className="flex items-center mb-2">
                              <span className="font-bold text-sm text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/30 px-2 rounded mr-2">1️⃣</span>
                              <span className="font-bold text-sm text-slate-800 dark:text-slate-200">Use Crosstab in EDA</span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400">During Exploratory Data Analysis, always run <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded">pd.crosstab(df["target"], df["feature"])</code> to reveal hidden categorical correlation patterns quickly.</p>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                           <div className="bg-rose-100 dark:bg-rose-900/30 p-2 rounded mr-3 shrink-0">
                              <span className="font-bold text-sm text-rose-600 dark:text-rose-400">2️⃣</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Combine with Seaborn Heatmap</span>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2">Using <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded">sns.heatmap(pd.crosstab(...), annot=True)</code> makes your analysis visually powerful and ready for presentations.</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded mr-3 shrink-0">
                              <span className="font-bold text-sm text-sky-600 dark:text-sky-400">3️⃣</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Normalize for Data Science</span>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400">When preparing ML datasets, use <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded">normalize="index"</code>. This reveals exact probability relationships between your dependent and independent binary features.</p>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-indigo-400" />
                     Data Analysis Console
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
                        <span className="text-center text-sm px-4 font-sans">Initialize a crosstab query to generate an analysis table matrix.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('Product') || line.startsWith('Gender') || line.startsWith('Department') || line.startsWith('Result') ? 'text-indigo-300 font-bold' :
                              line.includes('Generating') ? 'text-emerald-400 italic mb-2' :
                              line.includes('===') ? 'text-slate-500 mb-2 block' :
                              line.includes('███') ? 'text-sky-300' :
                              !isNaN(Number(line.trim().charAt(0))) ? 'text-white' :
                              'text-slate-300'
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
         <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl shadow-xl relative h-full flex flex-col">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            🧩 1️⃣6️⃣ Practice Problem
          </h2>
          <div className="z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                  <p className="text-slate-300 mb-2 text-sm font-medium">Dataset (Students Pass/Fail rate):</p>
                  <div className="bg-black/40 p-3 rounded-xl border border-white/10 mb-4 overflow-x-auto">
                      <pre className="text-emerald-300 text-xs font-mono">
Student  Department  Result
A        CSE         Pass
B        ECE         Fail
C        CSE         Pass
D        ECE         Pass
                      </pre>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4">
                      <p className="text-white text-xs font-bold mb-2 uppercase tracking-wide">Your Task:</p>
                      <ul className="text-indigo-200 text-xs space-y-2 list-disc pl-4">
                        <li>Create a crosstab table for <code className="bg-black/50 px-1 rounded">Department</code> vs <code className="bg-black/50 px-1 rounded">Result</code>.</li>
                        <li>It should show how many passed and failed in CSE and ECE.</li>
                      </ul>
                  </div>

                  <div className="text-[10px] text-yellow-400 font-bold bg-yellow-400/10 inline-flex items-center px-4 py-2 rounded-lg border border-yellow-400/20 w-fit">
                    <span className="mr-2">Hint:</span> <code className="bg-black/40 px-2 py-1 rounded text-white font-mono tracking-wide">pd.crosstab(df["Department"], df["Result"])</code>
                  </div>
              </div>
              <div className="bg-black/60 p-5 rounded-2xl border border-white/5 shadow-inner">
                  <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                     <p className="text-indigo-400 text-xs font-bold uppercase tracking-wider">Solution Output</p>
                     <button onClick={() => runDemo('exercise')} className="bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow shrink-0">RUN QUERY</button>
                  </div>
                   <div className="text-xs text-slate-400 mb-2 italic">Result matrix showing Pass/Fail rates:</div>
                  <pre className="text-white font-mono text-xs leading-relaxed">
     <span className="text-slate-500">Result</span>      Fail <span className="text-emerald-400 font-bold">Pass</span><br/>
<span className="text-slate-500">Department</span>            <br/>
CSE            0     <span className="text-emerald-400 font-bold">2</span><br/>
ECE            1     <span className="text-emerald-400 font-bold">1</span>
                  </pre>
              </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PdCrossTab;
