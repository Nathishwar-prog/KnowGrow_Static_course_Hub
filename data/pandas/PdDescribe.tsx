import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Activity, Layers, 
  AlertTriangle, CheckCircle2, Table, BarChart, Settings, 
  PieChart, ChevronRight, Calculator, AlignLeft
} from 'lucide-react';

const PdDescribe: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'stats' | 'advanced' | 'visuals' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '   Age  Salary',
          '0   22   40000',
          '1   25   50000',
          '2   28   60000',
          '3   30   65000',
          '4   35   70000'
        ];
        break;
      case 'describe_basic':
        outLines = [
          '             Age        Salary',
          'count   5.000000      5.000000',
          'mean   28.000000  57000.000000',
          'std     4.740000  11401.000000',
          'min    22.000000  40000.000000',
          '25%    25.000000  50000.000000',
          '50%    28.000000  60000.000000',
          '75%    30.000000  65000.000000',
          'max    35.000000  70000.000000'
        ];
        break;
      case 'describe_single':
        outLines = [
          'count     5.00',
          'mean     28.00',
          'std       4.74',
          'min      22.00',
          '25%      25.00',
          '50%      28.00',
          '75%      30.00',
          'max      35.00',
          'Name: Age, dtype: float64'
        ];
        break;
      case 'describe_cat':
        outLines = [
          '       Department',
          'count           3',
          'unique          2',
          'top            IT',
          'freq            2'
        ];
        break;
      case 'describe_all':
        outLines = [
          '             Age        Salary Department',
          'count   5.000000  5.0000000000          3',
          'unique       NaN           NaN          2',
          'top          NaN           NaN         IT',
          'freq         NaN           NaN          2',
          'mean   28.000000  57000.000000        NaN',
          'std     4.740000  11401.000000        NaN',
          'min    22.000000  40000.000000        NaN',
          '25%    25.000000  50000.000000        NaN',
          '50%    28.000000  60000.000000        NaN',
          '75%    30.000000  65000.000000        NaN',
          'max    35.000000  70000.000000        NaN'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Histogram...',
          'Age Distribution (Mock Output)',
          '========================================',
          'Freq |',
          '   2 |        ████          ████',
          '     |   ████ ████ ████     ████',
          '   1 |   ████ ████ ████ ████ ████',
          '     +----------------------------------',
          '      22   25   28   30   35'
        ];
        break;
      case 'real_world':
        outLines = [
          '              Price',
          'count      4.000000',
          'mean   47500.000000',
          'std    27537.852737',
          'min    20000.000000',
          '25%    27500.000000',
          '50%    45000.000000',
          '75%    65000.000000',
          'max    80000.000000'
        ];
        break;
      case 'custom_percentiles':
        outLines = [
          '             Age',
          'count   5.000000',
          'mean   28.000000',
          'std     4.743416',
          'min    22.000000',
          '10%    23.200000',
          '50%    28.000000',
          '90%    33.000000',
          'max    35.000000'
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
        <div className="inline-flex items-center justify-center p-4 bg-violet-100 dark:bg-violet-900/30 rounded-2xl mb-6 shadow-sm border border-violet-200 dark:border-violet-800/50">
          <Activity className="w-10 h-10 text-violet-600 dark:text-violet-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas describe() <code className="text-violet-600 dark:text-violet-400 text-3xl sm:text-4xl bg-violet-50 dark:bg-violet-900/20 px-3 py-1 rounded-xl">.describe()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The ultimate tool for Exploratory Data Analysis (EDA). Quickly generate summary statistics of your dataset to understand its central tendency, dispersion, and shape.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-violet-500" />
            EDA Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'stats' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Calculator className="w-4 h-4 mr-1.5" /> 5️⃣-7️⃣ Statistics
            </button>
             <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <AlignLeft className="w-4 h-4 mr-1.5" /> 8️⃣-9️⃣ Advanced Options
            </button>
             <button
              onClick={() => setActiveTab('visuals')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'visuals' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 🔟-1️⃣1️⃣ Viz
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
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
                    <Table className="w-5 h-5 text-violet-500 mr-2" />
                    1️⃣ What is <code className="mx-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-1 rounded">describe()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>It is a Pandas DataFrame method that generates descriptive statistics for numeric columns in a dataset, such as mean, standard deviation, minimum, and maximum values.</p>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Activity className="w-5 h-5 text-indigo-500 mr-2" />
                    2️⃣ Why is it Important?
                  </h3>
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-4 rounded-r-xl shadow-sm text-sm text-slate-700 dark:text-slate-300">
                    <p className="mb-2 font-bold text-indigo-800 dark:text-indigo-300">It quickly answers layout questions:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>How many records exist?</li>
                      <li>What is the average value?</li>
                      <li>What are the boundaries (min/max)?</li>
                      <li>How spread out is the data?</li>
                    </ul>
                    <p className="mt-2 text-indigo-600 dark:text-indigo-400 italic">No manual math required; <code className="font-bold">describe()</code> provides tracking in one command.</p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-emerald-500 mr-2" />
                    3️⃣ Basic Syntax & Parameters
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700 font-mono text-sm text-emerald-600 dark:text-emerald-400 font-bold overflow-x-auto">
                          DataFrame.describe(percentiles=None, include=None, exclude=None)
                      </div>
                      <table className="w-full text-left text-sm">
                          <thead className="bg-white dark:bg-slate-950 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                              <tr>
                                  <th className="p-3">Parameter</th>
                                  <th className="p-3">Description</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900">
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-sky-600 dark:text-sky-400">percentiles</td>
                                  <td className="p-3">Custom percentile splits (e.g., <code className="font-mono text-[10px] bg-slate-100 dark:bg-black px-1">[.10, .90]</code>)</td>
                              </tr>
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-amber-600 dark:text-amber-400">include</td>
                                  <td className="p-3">Include specific data types (e.g., <code className="font-mono text-[10px] bg-slate-100 dark:bg-black px-1">"all"</code>, <code className="font-mono text-[10px] bg-slate-100 dark:bg-black px-1">"object"</code>)</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-rose-600 dark:text-rose-400">exclude</td>
                                  <td className="p-3">Exclude specific data types</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-8">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">4️⃣ Base Example Dataset</h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto">
data = {'{'}
    <span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500">22</span>, <span className="text-emerald-500">25</span>, <span className="text-emerald-500">28</span>, <span className="text-emerald-500">30</span>, <span className="text-emerald-500">35</span>],
    <span className="text-amber-500">"Salary"</span>: [<span className="text-emerald-500">40000</span>, <span className="text-emerald-500">50000</span>, <span className="text-emerald-500">60000</span>, <span className="text-emerald-500">65000</span>, <span className="text-emerald-500">70000</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                </div>
              )}

              {activeTab === 'stats' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                      <h3 className="font-bold text-slate-900 dark:text-white flex items-center">
                        <Calculator className="w-5 h-5 text-violet-500 mr-2" />
                        5️⃣ Using <code className="ml-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-1 rounded font-mono">describe()</code>
                      </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                      <button onClick={() => runDemo('describe_basic')} className="text-left group w-full">
                        <div className="bg-violet-50 dark:bg-violet-900/10 border border-violet-200 dark:border-violet-800/50 rounded-xl p-4 hover:border-violet-400 dark:hover:border-violet-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-violet-500 bg-violet-100 dark:bg-violet-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN COMBO</div>
                          <h4 className="font-bold text-sm text-violet-700 dark:text-violet-400 mb-2">Full DataFrame</h4>
                          <code className="text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit">df.describe()</code>
                        </div>
                      </button>
                      <button onClick={() => runDemo('describe_single')} className="text-left group w-full">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SINGLE</div>
                          <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-2">7️⃣ Single Column Example</h4>
                          <code className="text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit border-l-2 border-l-indigo-500">df[<span className="text-amber-500 font-normal">"Age"</span>].describe()</code>
                        </div>
                      </button>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Layers className="w-5 h-5 text-emerald-500 mr-2" />
                    6️⃣ Understanding Each Statistic
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <span className="bg-slate-100 dark:bg-slate-900 font-bold font-mono text-[10px] px-1 rounded mr-2 mt-0.5 text-slate-600 dark:text-slate-400 w-12 text-center">count</span>
                          <span className="text-slate-600 dark:text-slate-300 flex-1">Number of non-null values.</span>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <span className="bg-slate-100 dark:bg-slate-900 font-bold font-mono text-[10px] px-1 rounded mr-2 mt-0.5 text-slate-600 dark:text-slate-400 w-12 text-center">mean</span>
                          <span className="text-slate-600 dark:text-slate-300 flex-1">The average value <br/><span className="text-[10px] text-slate-500">(Sum / Total)</span></span>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start sm:col-span-2">
                          <span className="bg-slate-100 dark:bg-slate-900 font-bold font-mono text-[10px] px-1 rounded mr-2 mt-0.5 text-sky-600 dark:text-sky-400 w-12 text-center border border-sky-200 dark:border-sky-800">std</span>
                          <span className="text-slate-600 dark:text-slate-300 flex-1">
                              <b>Standard Deviation:</b> Measures data spread.<br/>
                              <span className="text-xs"><span className="text-rose-500 font-bold">↑</span> Higher = widely spread <br className="sm:hidden"/> <span className="text-emerald-500 font-bold">↓</span> Lower = tightly grouped</span>
                          </span>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <span className="bg-slate-100 dark:bg-slate-900 font-bold font-mono text-[10px] px-1 rounded mr-2 mt-0.5 text-slate-600 dark:text-slate-400 w-12 text-center">min</span>
                          <span className="text-slate-600 dark:text-slate-300 flex-1">The smallest value.</span>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <span className="bg-slate-100 dark:bg-slate-900 font-bold font-mono text-[10px] px-1 rounded mr-2 mt-0.5 text-slate-600 dark:text-slate-400 w-12 text-center">max</span>
                          <span className="text-slate-600 dark:text-slate-300 flex-1">The largest value.</span>
                      </div>
                       <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start sm:col-span-2">
                          <span className="bg-emerald-100 dark:bg-emerald-900/30 font-bold font-mono text-[10px] px-1 rounded mr-2 mt-0.5 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-center whitespace-nowrap">Quartiles (Percentiles)</span>
                          <span className="text-slate-600 dark:text-slate-300 flex-1 text-xs">
                              <span className="font-bold font-mono w-8 inline-block mb-1">25%</span> First quartile (25% lying below).<br/>
                              <span className="font-bold font-mono w-8 inline-block mb-1">50%</span> The Median (middle value).<br/>
                              <span className="font-bold font-mono w-8 inline-block">75%</span> Third quartile (75% lying below).
                          </span>
                      </div>
                  </div>

                </div>
              )}

               {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center mb-3">
                          <AlignLeft className="w-6 h-6 text-amber-500 mr-2" />
                          8️⃣ Describe for Categorical Data
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-bold border-b border-amber-200 dark:border-amber-800/50 pb-2">By default, <code className="bg-white dark:bg-slate-800 px-1 rounded text-red-500 font-mono text-xs font-normal">describe()</code> analyzes numeric columns ONLY.</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">To analyze categorical (text) strings, we must specifically include object types.</p>
                      
                      <button onClick={() => runDemo('describe_cat')} className="text-left group w-full">
                        <div className="bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-700/50 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-500 transition-colors relative shadow-sm">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                            <code className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 bg-amber-50 dark:bg-amber-950 px-2 py-1.5 rounded border border-amber-100 dark:border-amber-800/60 shadow-sm block w-fit mb-4">df.describe(include=<span className="text-amber-600">"object"</span>)</code>
                            
                            <table className="w-full text-left text-[11px] font-mono border border-slate-200 dark:border-slate-800">
                                <thead className="bg-slate-100 dark:bg-slate-950">
                                    <tr>
                                        <th className="p-2 border-r border-slate-200 dark:border-slate-800">Term Output</th>
                                        <th className="p-2">Meaning</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-100 dark:border-slate-800/50 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900">
                                        <td className="p-2 border-r border-slate-200 dark:border-slate-800 font-bold text-slate-800 dark:text-slate-200">unique</td>
                                        <td className="p-2">Number of unique distinct values</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-800/50 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900">
                                        <td className="p-2 border-r border-slate-200 dark:border-slate-800 font-bold text-slate-800 dark:text-slate-200">top</td>
                                        <td className="p-2">The most frequent repeating value mode</td>
                                    </tr>
                                    <tr className="text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900">
                                        <td className="p-2 border-r border-slate-200 dark:border-slate-800 font-bold text-slate-800 dark:text-slate-200">freq</td>
                                        <td className="p-2">Frequency count of that top value</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                      <Table className="w-5 h-5 text-indigo-500 mr-2" />
                      9️⃣ Describe All Columns
                  </h3>

                  <button onClick={() => runDemo('describe_all')} className="text-left group w-full">
                      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN COMBO</div>
                        <code className="text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-indigo-200 dark:border-indigo-900/50 shadow-sm block w-fit mb-3">df.describe(include=<span className="text-amber-500 font-normal">"all"</span>)</code>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">This forces output statistics on every column type simultaneously:</p>
                        <ul className="flex gap-4 text-[10px] font-bold text-slate-500">
                            <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1"/> Numeric</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1"/> Categorical</li>
                            <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1"/> Boolean</li>
                        </ul>
                        <p className="text-[10px] bg-white/50 dark:bg-black/20 p-2 rounded mt-3 text-slate-500 italic text-center border border-slate-200 dark:border-slate-800 border-dashed">Warning: Mismatched logical columns output 'NaN' across mismatched calculation rows!</p>
                      </div>
                  </button>

                </div>
              )}

               {activeTab === 'visuals' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <BarChart className="w-5 h-5 text-sky-500 mr-2" />
                      🔟 Visualization Example
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-8">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN HISTOGRAM</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Visualizing the dataset distribution helps solidify numeric statistics.</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1 h-32">
import matplotlib.pyplot as plt

df[<span className="text-amber-500">"Age"</span>].<span className="text-sky-500 font-bold">hist</span>()

plt.title(<span className="text-amber-500">"Age Distribution"</span>)
plt.show()
                          </pre>
                          
                          <div className="bg-slate-100 dark:bg-slate-950 p-4 rounded border border-slate-200 dark:border-slate-800 flex-1 flex flex-col justify-end text-[10px] font-mono leading-tight h-32 relative">
                            <div className="absolute top-4 left-0 right-0 text-center text-slate-400 font-bold font-sans text-[10px] opacity-50">Histogram Render</div>
                            <div className="flex items-end justify-center gap-[2px] h-16 border-b border-l border-slate-300 pl-1 pb-1 relative pt-2 w-[80%] mx-auto z-10 opacity-70">
                              <span className="absolute left-[-20px] top-[-5px] text-[7px] text-slate-400">Freq</span>
                              <div className="w-5 h-[50%] bg-sky-500 border border-sky-600"></div>
                              <div className="w-5 h-[0%]"></div>
                              <div className="w-5 h-[100%] bg-sky-500 border border-sky-600"></div>
                              <div className="w-5 h-[100%] bg-sky-500 border border-sky-600"></div>
                              <div className="w-5 h-[100%] bg-sky-500 border border-sky-600"></div>
                              <div className="w-5 h-[0%]"></div>
                              <div className="w-5 h-[100%] bg-sky-500 border border-sky-600"></div>
                            </div>
                             <div className="flex justify-between pl-4 text-[8px] mt-1 text-slate-500 opacity-70 w-[80%] mx-auto">
                                <span>22</span> <span></span> <span>25</span> <span>28</span> <span>30</span> <span></span> <span>35</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <PieChart className="w-5 h-5 text-emerald-500 mr-2" />
                      1️⃣1️⃣ Real-World Business Example
                  </h3>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full mb-4">
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DESCRIBE</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-bold">Scenario: Electronics Pricing Dataset.</p>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                            <pre className="font-mono text-[9px] sm:text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto">
data = {'{'}
  <span className="text-amber-500">"Product"</span>: [<span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Phone"</span>, <span className="text-amber-500">"Tablet"</span>, <span className="text-amber-500">"TV"</span>],
  <span className="text-amber-500">"Price"</span>:   [<span className="text-emerald-500">80000</span>, <span className="text-emerald-500">30000</span>, <span className="text-emerald-500">20000</span>, <span className="text-emerald-500">60000</span>]
{'}'}
df = pd.DataFrame(data)

df.describe()
                            </pre>
                            <div className="bg-white/50 dark:bg-black/20 p-3 rounded border border-slate-200 dark:border-slate-800 flex flex-col justify-center shadow-inner">
                                <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center"><Activity className="w-3 h-3 mr-1 text-sky-500"/> Quickly Identifies Data Points:</p>
                                <ul className="text-[10px] space-y-1 text-slate-600 dark:text-slate-400 font-mono">
                                    <li>• <span className="text-emerald-500 font-bold">mean:</span> Ave price ($47.5k)</li>
                                    <li>• <span className="text-rose-500 font-bold">max:</span> Most Expensive ($80k)</li>
                                    <li>• <span className="text-sky-500 font-bold">min:</span> Cheapest ($20k)</li>
                                    <li>• <span className="text-amber-500 font-bold">std:</span> Price Distribution</li>
                                </ul>
                            </div>
                        </div>

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
                      <div className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">❌ Forgetting the Parentheses</div>
                       <p className="text-xs text-rose-600 dark:text-rose-400 mb-1">Wrong: <code className="bg-white dark:bg-slate-950 px-1 rounded mx-1 text-slate-800 dark:text-slate-200 border border-rose-200 dark:border-rose-900 border-dashed">df.describe</code></p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">Correct: <code className="bg-white dark:bg-slate-950 px-1 rounded mx-1 text-slate-800 dark:text-slate-200 border border-emerald-200 dark:border-emerald-900 shadow-sm border-l-2 border-l-emerald-500">df.describe()</code></p>
                      <p className="text-[10px] text-slate-500 mt-2">Without `()`, Python returns the memory object pointer to the method, not the calculation!</p>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative text-sm">
                      <div className="font-bold text-slate-700 dark:text-slate-300 flex items-center mb-2">❌ Expecting Text Summaries</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1 leading-relaxed">By default it <span className="font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-1">only summarizes numeric</span> columns.</p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2 text-center bg-white dark:bg-slate-950 p-1.5 rounded border border-emerald-100 dark:border-emerald-900 font-bold">You MUST invoke `include="all"` manually.</p>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣3️⃣ Professional Advice (Tips)
                  </h3>

                  <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-emerald-600 dark:text-emerald-400">1</span>
                          </div>
                          <div className="flex-1 w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Use <code className="bg-slate-100 dark:bg-slate-900 px-1 text-emerald-600">describe()</code> in Every Analysis</span>
                            <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 font-mono text-[10px] text-sky-500 font-bold w-full mx-auto shadow-inner mt-2">
                                <span className="text-center">df.head() <span className="text-slate-400 ml-2 animate-pulse hidden sm:inline">→</span></span> 
                                <span className="text-center">df.info() <span className="text-slate-400 ml-2 animate-pulse hidden sm:inline">→</span></span> 
                                <span className="text-emerald-500 text-center text-xs tracking-wider">df.describe()</span>
                            </div>
                            <p className="text-[10px] text-slate-500 text-center mt-1 w-full flex-1">Standard Pro Overview Chain.</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                           <div className="bg-sky-100 dark:bg-sky-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-sky-600 dark:text-sky-400">2</span>
                          </div>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Pair with Boxplots</span>
                             <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-between">
                                <code className="bg-sky-50 dark:bg-sky-900/20 px-3 py-1.5 rounded text-[11px] border border-sky-100 dark:border-sky-800 text-sky-700 dark:text-sky-300 font-bold block w-fit h-fit"><span className="text-slate-500 mr-2 font-normal">df.</span>boxplot()</code>
                                <div className="text-[10px] text-slate-600 dark:text-slate-400 border-l-2 border-slate-200 dark:border-slate-700 pl-3">
                                    <span className="font-bold mb-1 block">Quickly Detects visually:</span>
                                    <span className="bg-slate-100 dark:bg-slate-900 px-1 rounded mr-1">Outliers</span>
                                    <span className="bg-slate-100 dark:bg-slate-900 px-1 rounded mr-1">Spread Variance</span>
                                </div>
                            </div>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center hover:border-indigo-400 dark:hover:border-indigo-700 transition">
                          <button onClick={() => runDemo('custom_percentiles')} className="block absolute top-4 right-4 z-10 hidden" id="hidden_trigger"></button>
                          <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-indigo-600 dark:text-indigo-400">3</span>
                          </div>
                          <div className="w-full relative">
                            <button onClick={() => runDemo('custom_percentiles')} className="absolute top-0 right-0 text-[9px] font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/50 px-1.5 py-0.5 rounded opacity-70 hover:opacity-100 transition-opacity">RUN DEMO</button>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Use Custom Percentiles</span>
                            <p className="text-[10px] text-slate-500 mb-2">Extremely useful for advanced statistical analysis and fine segmentations.</p>
                            <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 px-2 py-1.5 flex rounded border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-bold w-full overflow-x-auto shadow-inner whitespace-nowrap">df.describe(percentiles=[0.10, 0.50, 0.90])</code>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-violet-400" />
                     Statistics Output Viewer
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-sm flex flex-col flex-1 overflow-y-auto max-h-[440px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Calculator className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans">Run describe commands to view DataFrame summaries.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.includes('Generating') ? 'text-emerald-400 italic mb-2 font-sans text-xs' :
                              line.includes('===') || line.includes('+--') || line.includes('dtype:') ? 'text-slate-500 block text-xs' :
                              line.includes('█') ? 'text-sky-400 font-bold' :
                              line.includes('Age') || line.includes('Salary') || line.includes('Department') || line.includes('Price') ? 'text-indigo-300 font-bold border-b border-slate-800/50 pb-1 mb-1' :
                              line.startsWith('count') || line.startsWith('mean') || line.startsWith('std') || line.startsWith('min') || line.startsWith('max') || line.includes('%') || line.startsWith('unique') || line.startsWith('top') || line.startsWith('freq') ? 'text-slate-400 border-b border-slate-800/30' :
                              !isNaN(Number(line.trim().charAt(0))) && i > 0 && !line.includes('%') ? 'text-emerald-300' :
                              'text-slate-200'
                           }`}>
                              {line.split(/(NaN)/g).map((part, idx) => 
                                 part === 'NaN' ? <span key={idx} className="text-rose-400/70 italic text-xs px-1">NaN</span> : part
                              )}
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

export default PdDescribe;
