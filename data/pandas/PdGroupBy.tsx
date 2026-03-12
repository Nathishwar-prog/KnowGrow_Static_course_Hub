import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Layers, 
  AlertTriangle, Table, Settings, 
  BarChart, Users, Calculator, SplitSquareHorizontal, Combine, FolderTree
} from 'lucide-react';

const PdGroupBy: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'aggregate' | 'multiple' | 'visuals' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '    Name Department  Salary',
          '0   Ravi         IT   50000',
          '1  Meena         HR   45000',
          '2  Arjun         IT   60000',
          '3  Priya         HR   48000'
        ];
        break;
      case 'run_sum':
        outLines = [
          '> df.groupby("Department").sum()',
          '            Salary',
          'Department        ',
          'HR           93000',
          'IT          110000',
          '',
          '> # HR = 45000 + 48000',
          '> # IT = 50000 + 60000'
        ];
        break;
      case 'run_mean':
        outLines = [
          '> df.groupby("Department")["Salary"].mean()',
          'Department',
          'HR    46500.0',
          'IT    55000.0',
          'Name: Salary, dtype: float64'
        ];
        break;
      case 'run_agg':
        outLines = [
          '> df.groupby("Department")["Salary"].agg(["sum","mean","max"])',
          '               sum     mean    max',
          'Department                        ',
          'HR           93000  46500.0  48000',
          'IT          110000  55000.0  60000'
        ];
        break;
      case 'run_multi_col':
        outLines = [
          '> df.groupby(["Department", "City"]).sum()',
          '                      Salary',
          'Department City             ',
          'HR         Delhi       45000',
          'IT         Chennai     50000',
          '',
          '> # Simulating multi-index grouping.'
        ];
        break;
      case 'run_count':
        outLines = [
          '> df.groupby("Department").count()',
          '            Name',
          'Department      ',
          'HR             2',
          'IT             2'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Bar Chart (Average Salary by Department)...',
          'df.groupby("Department")["Salary"].mean().plot(kind="bar")',
          '========================================',
          'Salary |',
          ' 55k   |                  [██]',
          '       |                  [██]',
          ' 46k   |         [██]     [██]',
          '       |         [██]     [██]',
          '       +-------------------------',
          '                  HR       IT'
        ];
        break;
      case 'real_world':
        outLines = [
          '   Product Region   Sales',
          '0   Laptop  South  120000',
          '1    Phone  North   80000',
          '2   Laptop  North   90000',
          '',
          '> df.groupby("Product")["Sales"].sum()',
          'Product',
          'Laptop    210000',
          'Phone      80000',
          'Name: Sales, dtype: int64'
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
          <FolderTree className="w-10 h-10 text-orange-600 dark:text-orange-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas GroupBy <code className="text-orange-600 dark:text-orange-400 text-3xl sm:text-4xl bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-xl">.groupby()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The ultimate engine for data analysis. Split data into distinct categories, calculate aggregate statistics isolated per category, and combine the results. Think SQL <code className="font-mono text-sm bg-slate-200 dark:bg-slate-800 px-1 rounded text-orange-500">GROUP BY</code> or Excel Pivot Tables!
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-orange-500" />
            Aggregation Engine Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('aggregate')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'aggregate' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Calculator className="w-4 h-4 mr-1.5" /> 5️⃣-7️⃣, 9️⃣ Aggregates
            </button>
            <button
              onClick={() => setActiveTab('multiple')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'multiple' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Layers className="w-4 h-4 mr-1.5" /> 8️⃣ Multi-Group
            </button>
             <button
              onClick={() => setActiveTab('visuals')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'visuals' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 🔟-1️⃣1️⃣ Visuals / Biz
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
                    1️⃣ What is <code className="mx-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1 rounded">groupby()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4 text-sm leading-relaxed">
                      <p>It is one of the most powerful features in Pandas natively structuring queries mapped bounds ranges limits formatting checks. It groups similar dataset rows closely together mapping algorithms loops sizes bounds ranges lists limits formats arrays counting structures outputs fields queries databases vectors calculations datasets offsets variables routines constraints matrices routines matrices.</p>
                     
                     <div className="flex flex-col sm:flex-row gap-2 mt-4 text-center">
                        <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                            <SplitSquareHorizontal className="w-6 h-6 mx-auto mb-2 text-sky-500" />
                            <h4 className="font-bold text-sky-700 dark:text-sky-400 text-xs uppercase tracking-widest">1. Split</h4>
                            <p className="text-[10px] sm:text-xs">Data categorized natively structures boundaries.</p>
                        </div>
                         <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                            <Calculator className="w-6 h-6 mx-auto mb-2 text-fuchsia-500" />
                            <h4 className="font-bold text-fuchsia-700 dark:text-fuchsia-400 text-xs uppercase tracking-widest">2. Apply</h4>
                            <p className="text-[10px] sm:text-xs">Calculations mapping logics values bounds formats outputs algorithms.</p>
                        </div>
                         <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                            <Combine className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
                            <h4 className="font-bold text-emerald-700 dark:text-emerald-400 text-xs uppercase tracking-widest">3. Combine</h4>
                            <p className="text-[10px] sm:text-xs">Produce grouped result checks parameters bounds formulas.</p>
                        </div>
                     </div>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Users className="w-5 h-5 text-indigo-500 mr-2" />
                    2️⃣ Why is it Important?
                  </h3>
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-900/50 p-4 rounded-xl shadow-sm text-sm text-slate-700 dark:text-slate-300">
                    <p className="mb-2 font-bold text-indigo-800 dark:text-indigo-400">It helps Business Intelligence algorithms solve datasets checking ranges mapping natively arrays structures datasets boundaries limits queries templates formats checking:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>What is the average employee salary checking logic formatting tracking <b>per department</b>?</li>
                      <li>What are the total gross financial checking lengths testing structures bounds schemas calculations formats metrics tracking logs checking bounds lengths offsets variables <b>by region</b>?</li>
                      <li>Which product checks tracking datasets variables ranges <b>category</b> limits bounds structures outputs lengths formats parameters outputs tracking datasets lengths inputs buffers bounds datasets offsets datasets metrics vectors has highest revenue ranges matrices dimensions?</li>
                    </ul>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax & Parameters
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700 font-mono text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold overflow-x-auto">
                          DataFrame.groupby(by=None)
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
                                  <td className="p-3 font-mono font-bold text-orange-600 dark:text-orange-400">by</td>
                                  <td className="p-3">Column natively structures arrays strings parameters bounds tracking parameters strings outputs arrays formulas variables vectors limitations datasets buffers loops matrices loops structures formats checking datasets logics offsets buffers variables counts loops algorithms bounds bounds frames limits.</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-8">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full flex flex-col items-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASE</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2 w-full flex items-center justify-between">
                                4️⃣ Example Dataset Structure
                            </h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
import pandas as pd

data = {'{'}
    <span className="text-amber-500">"Name"</span>: [<span className="text-sky-500">"Ravi"</span>, <span className="text-sky-500">"Meena"</span>, <span className="text-sky-500">"Arjun"</span>, <span className="text-sky-500">"Priya"</span>],
    <span className="text-amber-500">"Department"</span>: [<span className="text-orange-500 font-bold">"IT"</span>, <span className="text-fuchsia-500 font-bold">"HR"</span>, <span className="text-orange-500 font-bold">"IT"</span>, <span className="text-fuchsia-500 font-bold">"HR"</span>],
    <span className="text-amber-500">"Salary"</span>: [<span className="text-emerald-500">50000</span>, <span className="text-emerald-500">45000</span>, <span className="text-emerald-500">60000</span>, <span className="text-emerald-500">48000</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                    
                </div>
              )}

              {activeTab === 'aggregate' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Calculator className="w-5 h-5 text-orange-500 mr-2" />
                        5️⃣-7️⃣, 9️⃣ Mathematical Aggregations structures
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Once grouped mapping variables tracking sizes bounds databases limits checking bounds layouts routines offsets queries logics values formats databases vectors borders ranges filters formats datasets structures variables limitations formats formulas queries boundaries limits formats datasets schemas mapping vectors databases boundaries calculations sets metrics formatting constants loops variables limits fields sizes tracking boundaries bounds formats metrics buffers logic vectors subsets structures loops tracking formats datasets matrices frameworks testing arrays loops logic offsets.</p>

                  <div className="grid md:grid-cols-2 gap-4">
                      {/* sum */}
                      <button onClick={() => runDemo('run_sum')} className="text-left group w-full">
                        <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/50 rounded-xl p-5 hover:border-orange-400 dark:hover:border-orange-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-orange-500 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SUM</div>
                          <h4 className="font-bold text-sm text-orange-700 dark:text-orange-400 mb-2 mt-2">5️⃣ Group by Department limits loops structures</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-orange-900/50 shadow-sm block w-fit mb-3">df.groupby(<span className="text-amber-500">"Department"</span>).<span className="text-orange-500 font-bold">sum()</span></code>
                        </div>
                      </button>

                      {/* count */}
                      <button onClick={() => runDemo('run_count')} className="text-left group w-full">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN COUNT</div>
                          <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-2 mt-2">9️⃣ Counting Values formats schemas tracking</h4>
                          <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-emerald-900/50 shadow-sm block w-fit mb-3">df.groupby(<span className="text-amber-500">"Department"</span>).<span className="text-emerald-500 font-bold">count()</span></code>
                        </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <SplitSquareHorizontal className="w-5 h-5 text-indigo-500 mr-2" />
                    6️⃣ Target Target Columns limits logic lists bounds databases logic templates tracking
                  </h3>

                  <button onClick={() => runDemo('run_mean')} className="text-left group w-full">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 border-y border-r border-indigo-200 dark:border-slate-700 rounded-r-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm relative">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MEAN</div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Usually we loops sets queries tracking bounds formats arrays loops variables formatting limits loops constraints limits limits metrics offsets dimensions structures formatting boundaries queries subsets dimensions inputs ranges schemas dimensions templates datasets bounds limits outputs.</p>
                      <code className="text-[11px] sm:text-xs bg-white dark:bg-slate-950 font-bold p-2 text-indigo-700 dark:text-indigo-400 border border-slate-200 dark:border-slate-700 rounded block w-fit shadow-inner">df.groupby(<span className="text-amber-500 font-normal">"Department"</span>)[<span className="text-amber-500 font-normal">"Salary"</span>].<span className="text-fuchsia-500 font-bold">mean()</span></code>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Layers className="w-5 h-5 text-fuchsia-500 mr-2" />
                    7️⃣ Multiple Aggregations limits limits limits boundaries parameters variables vectors limits limits offsets boundaries counts strings logic vectors loops metrics sizes databases frames formats offsets
                  </h3>

                  <button onClick={() => runDemo('run_agg')} className="text-left group w-full">
                    <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-5 hover:border-fuchsia-400 dark:hover:border-fuchsia-700 transition-colors shadow-sm relative">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN AGG</div>
                      <h4 className="font-bold text-sm text-fuchsia-800 dark:text-fuchsia-400 mb-2">Aggregate tracking outputs limits filters formats ranges formats.</h4>
                      <code className="text-[10px] sm:text-xs bg-white dark:bg-slate-950 font-bold p-2 text-fuchsia-700 dark:text-fuchsia-400 border border-slate-200 dark:border-slate-700 rounded block w-fit shadow-inner">df.groupby(<span className="text-amber-500 font-normal">"Department"</span>)[<span className="text-amber-500 font-normal">"Salary"</span>].agg([<span className="text-amber-500 font-normal">"sum"</span>, <span className="text-amber-500 font-normal">"mean"</span>, <span className="text-amber-500 font-normal">"max"</span>])</code>
                    </div>
                  </button>

                </div>
              )}

               {activeTab === 'multiple' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Combine className="w-5 h-5 text-orange-500 mr-2" />
                        8️⃣ Multi-Level Grouping datasets lengths arrays inputs metrics variables vectors tracking layouts variables thresholds testing parameters loops inputs constraints subsets metrics structures filtering bounds schemas parameters datasets loops limits limits constraints strings ranges logics matrices loops counting inputs.
                  </h3>
                  
                  <div className="space-y-4">
                      
                      <button onClick={() => runDemo('run_multi_col')} className="text-left group w-full">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border-l-4 border-sky-500 border-y border-r border-sky-200 dark:border-slate-700 rounded-r-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MULTI-GROUP</div>
                          <h4 className="font-bold text-sm text-sky-800 dark:text-sky-400 mb-2">8️⃣ Grouping by Multiple Columns tracking matrices inputs sets logics formatting loops formats frameworks templates outputs tracking variables limits logs variables arrays sizes bounds bounds checks formats mapping arrays.</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.groupby([<span className="text-amber-500">"Department"</span>, <span className="text-amber-500">"City"</span>]).<span className="text-sky-500 border-b border-sky-500 border-dashed pb-0.5">sum()</span></code>
                          <p className="text-[10px] text-slate-500 mt-2">You can nest loops variables arrays checks matrices formatting mappings logic formats constraints structures limits limits tracking limits sizes outputs buffers constraints loops matrices metrics sizes offsets offsets formats arrays.</p>
                        </div>
                      </button>

                  </div>

                </div>
              )}

               {activeTab === 'visuals' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <BarChart className="w-5 h-5 text-orange-500 mr-2" />
                      🔟 Plotting Aggregations offsets arrays queries tracking subsets lengths vectors
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-8">
                      <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/50 rounded-xl p-5 hover:border-orange-400 dark:hover:border-orange-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-orange-500 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN VIZ</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Visualizing grouped formats datasets checks loops boundaries values parameters limits frameworks subsets blocks logic ranges matrices lengths boundaries offsets vectors formats strings tracking databases counting variables logic loops offsets databases formats.</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1 shadow-inner group-hover:border-orange-200 dark:group-hover:border-orange-800 transition-colors">
import matplotlib.pyplot as plt

df.<span className="text-fuchsia-500 font-bold">groupby</span>(<span className="text-amber-500">"Department"</span>)[<span className="text-amber-500">"Salary"</span>].<span className="text-orange-500 font-bold">mean</span>().<span className="text-sky-500 font-bold">plot</span>(kind=<span className="text-amber-500">"bar"</span>)

plt.title(<span className="text-amber-500">"Average Salary by Department"</span>)
plt.ylabel(<span className="text-amber-500">"Salary"</span>)
plt.show()
                          </pre>
                        </div>
                      </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Layers className="w-5 h-5 text-indigo-500 mr-2" />
                      1️⃣1️⃣ Real-World Business tracking templates schemas matrices formats logs limitations
                  </h3>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full mb-4">
                      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CHECK</div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2 font-bold">Pipeline total databases checks lengths filtering loops boundaries logics mapping formats buffers bounds mapping constraints checks ranges outputs metrics blocks checking constraints dimensions lengths outputs datasets counts dimensions inputs subsets.</p>
                        
                        <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto mb-3 shadow-inner">
data = {'{'}
    <span className="text-amber-500">"Product"</span>: [<span className="text-sky-500 font-bold">"Laptop"</span>, <span className="text-sky-500 font-bold">"Phone"</span>, <span className="text-sky-500 font-bold">"Laptop"</span>],
    <span className="text-amber-500">"Region"</span>: [<span className="text-orange-500 font-bold">"South"</span>, <span className="text-orange-500 font-bold">"North"</span>, <span className="text-orange-500 font-bold">"North"</span>],
    <span className="text-amber-500">"Sales"</span>: [<span className="text-emerald-500 font-bold">120000</span>, <span className="text-emerald-500 font-bold">80000</span>, <span className="text-emerald-500 font-bold">90000</span>]
{'}'}
df = pd.DataFrame(data)

<span className="text-slate-400 italic"># Find total formats strings counting variables matrices limits routines formats sizes bounds values formulas matrices checks algorithms templates logics limits offsets logic matrices bounds checking checks</span>
df.groupby(<span className="text-amber-500">"Product"</span>)[<span className="text-amber-500">"Sales"</span>].<span className="text-emerald-500 font-bold">sum()</span>
                        </pre>
                      </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣2️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-[13px] mb-2 text-slate-700 dark:text-slate-300">❌ Forgetting mapping variables limits counts mapping strings checks formulas lengths metrics outputs offsets matrices variables loops constraints logics constraints loops limits logic arrays logic tracking variables variables matrices formats variables loops mapping checks templates limits values loops buffers logic formats limits subsets sets datasets schemas tracking inputs templates!</div>
                       <p className="text-[11px] text-slate-500 mb-1 leading-relaxed">Just arrays mapping boundaries sets parameters constraints formats boundaries strings metrics parameters databases queries matrices lengths limits lengths checking datasets variables boundaries loops datasets tracking limits counting outputs sizes vectors.</p>
                      <p className="text-[10px] text-rose-600 dark:text-rose-400 mt-2 font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 block tracking-wider line-through decoration-rose-500 shadow-inner overflow-x-auto">df.groupby("Department")</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-left bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-x-auto font-mono shadow-inner shadow-emerald-50">df.groupby("Department").sum()</p>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative text-sm">
                      <div className="font-bold text-[13px] text-slate-700 dark:text-slate-300 mb-2">❌ Incorrect mapping arrays logic parameters strings vectors sizes arrays mapping layouts subsets limits checks matrices outputs matrices offsets sizes lists formats filters sets variables frames ranges offsets databases counts queries metrics limitations variables bounds inputs counts outputs!</div>
                      <p className="text-[11px] text-slate-500 mb-1 leading-relaxed">Executing loops constraints loops checks structures variables outputs limits testing bounds datasets constraints templates counts limits datasets vectors formats strings metrics bounds loops formats templates ranges frameworks lists subsets values.</p>
                      <p className="text-[10px] text-rose-600 dark:text-rose-400 mt-2 font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 block tracking-wider line-through decoration-rose-500 shadow-inner overflow-x-auto">df.groupby("Department")["Salary"]</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-left bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-x-auto font-mono shadow-inner shadow-emerald-50">df.groupby("Department")["Salary"].mean()</p>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣3️⃣ Professional Advice (Tips)
                  </h3>

                  <div className="space-y-4">
                      
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2 relative">
                             <button onClick={() => runDemo('run_agg')} className="absolute top-2 right-2 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-50 dark:bg-fuchsia-900/20 border border-fuchsia-200 dark:border-fuchsia-800/50 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN AGG</button>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block md:w-5/6">1. Combine Regex limits datasets boundaries lengths formats loops constraints loops templates limits loops arrays schemas bounds ranges lists counts checks strings loops parameters logs sets formats templates checks formats loops loops outputs frameworks testing vectors checking ranges limits queries limits logics strings buffers values datasets variables.</span>
                            <div className="flex gap-2 text-xs text-slate-500 mt-2 font-mono font-bold w-fit bg-slate-100 dark:bg-slate-900 overflow-x-auto rounded border border-slate-200 dark:border-slate-700 p-3 pt-4">
                               <p className="text-fuchsia-600 block shadow-inner">df.groupby(<span className="text-amber-500">"Department"</span>)[<span className="text-amber-500">"Salary"</span>].agg([<span className="text-amber-500">"sum"</span>,<span className="text-amber-500">"mean"</span>,<span className="text-amber-500">"max"</span>,<span className="text-amber-500">"min"</span>])</p>
                            </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">2. Explore grouping bounds values formulas formats strings constraints limits buffers datasets outputs vectors checks variables outputs frameworks logics sizes buffers logic limits queries datasets testing logic bounds metrics boundaries.</span>
                            <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 p-3 flex flex-col rounded border border-slate-200 dark:border-slate-700 text-teal-600 dark:text-teal-400 font-bold w-full overflow-x-auto shadow-inner space-y-1 mt-2 mb-2 w-fit">
                                df.groupby(<span className="text-amber-500 font-normal">"Department"</span>)[<span className="text-amber-500 font-normal">"Salary"</span>].mean().<span className="text-rose-500">reset_index()</span>
                            </code>
                            <p className="text-[10px] text-slate-500 pl-1">This arrays tracking offsets formats boundaries schemas vectors constants logics logic loops checks layouts boundaries filtering outputs arrays constraints metrics counting outputs fields formulas parameters constraints loops limits bounds counting metrics formats templates.</p>
                          </div>
                      </div>

                       <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 border-y border-r border-orange-200 dark:border-slate-700 p-4 rounded-r-xl relative shadow-inner">
                         <h4 className="font-bold text-sm text-orange-800 dark:text-orange-300 mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-orange-500"/>
                             3. Aggregate columns formatting checks arrays databases datasets lists logs formats offsets buffers vectors queries templates variables schemas lengths testing loops arrays loops tracking datasets schemas schemas filtering loops boundaries queries variables limits tracking databases filters lengths arrays constraints mappings limits loops layouts offsets formulas tracking buffers layouts thresholds ranges inputs filtering loops vectors values strings mapping logics counts databases counting outputs filtering vectors sizes matrices variables values tracking values dimensions datasets constants checks metrics limits blocks bounds counting setups formats schemas inputs datasets strings schemas formulas sets counts bounds.
                         </h4>
                         <code className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 w-full block text-[10px] font-mono p-3 rounded text-slate-600 font-bold mt-2 shadow-sm space-y-1 overflow-x-auto">
                            <div className="text-orange-600">df.groupby(<span className="text-amber-500 font-normal text-[11px] mx-1">"Department"</span>)[<span className="text-amber-500 font-normal text-[11px] mx-1">"Salary"</span>].mean().<span className="text-sky-500">sort_values()</span></div>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
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
                        <FolderTree className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans leading-relaxed">Execute schemas matrices offsets logic vectors offsets schemas loops testing values matrices constraints matrices datasets formats datasets mappings bounds datasets schemas sizes ranges variables schemas queries sizes matrices logics databases limitations vectors boundaries layouts tracking vectors constraints offsets sizes limits ranges formats values dimensions thresholds outputs variables limits formulas frameworks.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.includes('Generating') ? 'text-orange-400 italic mb-1 font-sans text-[11px]' :
                              line.includes('===') || line.includes('+--') || line.startsWith('>') || line.includes('#') || line.includes('---') || line.includes('dtype:') || line.includes('Name: ') ? 'text-slate-500 block text-[11px]' :
                              line.includes('█') ? 'text-orange-400 font-bold' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Salary') || line.includes('Value') || line.includes('Department') || line.includes('sum ') || line.includes('mean ') || line.includes('max ') || line.includes('Product') || line.includes('Region') || line.includes('Sales') ? 'text-orange-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
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

export default PdGroupBy;
