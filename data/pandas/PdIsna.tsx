import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  AlertTriangle, Settings, 
  Database, Search, Activity, BarChart, XCircle
} from 'lucide-react';

const PdIsna: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'detecting' | 'realworld' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '   Name   Age     City',
          '0  John  25.0  Chennai',
          '1  Sara  30.0    Delhi',
          '2  Mike   NaN     None',
          '3  Anna  35.0   Mumbai'
        ];
        break;
      case 'run_isna':
        outLines = [
          '> df.isna()',
          '    Name    Age   City',
          '0  False  False  False',
          '1  False  False  False',
          '2  False   True   True',
          '3  False  False  False'
        ];
        break;
      case 'run_isna_sum':
        outLines = [
          '> df.isna().sum()',
          'Name    0',
          'Age     1',
          'City    1',
          'dtype: int64'
        ];
        break;
      case 'run_col_isna':
        outLines = [
          '> df["Age"].isna()',
          '0    False',
          '1    False',
          '2     True',
          '3    False',
          'Name: Age, dtype: bool'
        ];
        break;
      case 'run_any':
        outLines = [
          '> df.isna().values.any()',
          'True'
        ];
        break;
      case 'run_real_world':
        outLines = [
          '> df.isna().sum()',
          'Customer    0',
          'Email       1',
          'Phone       1',
          'dtype: int64',
          '',
          '> # Tells us some customers are missing contact info!'
        ];
        break;
      case 'run_mistake':
        outLines = [
          '> # ❌ Instead of just df.isna() filling up the screen...',
          '> # ✅ Use .sum() to summarize!',
          '> df.isna().sum()',
          'Name    0',
          'Age     1',
          'City    1',
          'dtype: int64'
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
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
          <Search className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas <code className="text-emerald-600 dark:text-emerald-400 text-3xl sm:text-4xl bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">isna()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In real-world datasets, missing values are very common. Pandas provides the <strong>isna()</strong> function to detect missing or null values in a DataFrame or Series.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-emerald-500" />
            Detection Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-3️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('detecting')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'detecting' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Activity className="w-4 h-4 mr-1.5" /> 4️⃣-8️⃣ Detecting
            </button>
            <button
              onClick={() => setActiveTab('realworld')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'realworld' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 9️⃣-🔟 Real-World
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣1️⃣ Tips & Mistakes
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
                  
                  {/* Notice Box */}
                  <div className="bg-rose-50 dark:bg-rose-900/10 border-l-4 border-rose-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Missing values in Pandas are usually represented as:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-rose-700 dark:text-rose-400 font-bold space-y-1">
                          <li>NaN (Not a Number)</li>
                          <li>None</li>
                          <li>NaT (Not a Time)</li>
                        </ul>
                  </div>

                  {/* Section 1 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                    <Search className="w-5 h-5 text-emerald-500 mr-2" />
                    1️⃣ What is <code className="text-emerald-500 font-mono ml-2">isna()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                      <p><strong>Definition:</strong> <code>isna()</code> is a Pandas method used to detect missing values in a dataset and return a Boolean result.</p>
                      
                      <div className="flex gap-4">
                         <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 p-3 rounded shadow-sm text-center flex-1">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">True</span>
                            <span className="text-xs">missing value</span>
                         </div>
                         <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 p-3 rounded shadow-sm text-center flex-1">
                            <span className="text-slate-600 dark:text-slate-400 font-bold block mb-1">False</span>
                            <span className="text-xs">valid value</span>
                         </div>
                      </div>

                      <p className="text-sm font-medium italic mt-2">
                        In simple terms: <code>isna()</code> checks which values in a dataset are empty or missing.
                      </p>
                  </div>

                  {/* Section 2 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Activity className="w-5 h-5 text-sky-500 mr-2" />
                    2️⃣ Why isna() is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300">
                      <p className="mb-3 text-sm"><code>isna()</code> helps data analysts to:</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><span className="text-emerald-500 mr-2">✓</span> Detect missing values</li>
                        <li className="flex items-start text-sm"><span className="text-emerald-500 mr-2">✓</span> Understand data quality</li>
                        <li className="flex items-start text-sm"><span className="text-emerald-500 mr-2">✓</span> Prepare data for machine learning</li>
                        <li className="flex items-start text-sm"><span className="text-emerald-500 mr-2">✓</span> Decide whether to use <code className="bg-slate-200 dark:bg-slate-800 px-1 mx-1 rounded text-xs">fillna()</code> or <code className="bg-slate-200 dark:bg-slate-800 px-1 mx-1 rounded text-xs">dropna()</code></li>
                      </ul>
                      <p className="text-sm text-slate-500 italic border-l-2 border-rose-300 dark:border-rose-600/50 pl-3">
                        "Missing values can cause errors in analysis or machine learning models, so detecting them is crucial."
                      </p>
                  </div>

                  {/* Section 3 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                  <div className="flex gap-4">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex-1 text-center font-mono text-sm font-bold text-slate-700 dark:text-slate-300">
                          DataFrame.isna()
                      </div>
                      <div className="flex items-center text-slate-400 font-bold">or</div>
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex-1 text-center font-mono text-sm font-bold text-slate-700 dark:text-slate-300">
                          Series.isna()
                      </div>
                  </div>

                </div>
              )}

              {activeTab === 'detecting' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Section 4 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Database className="w-5 h-5 text-emerald-500 mr-2" />
                        4️⃣ Creating Example Dataset
                  </h3>
                  
                  <button onClick={() => runDemo('show_base')} className="text-left group w-full">
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DATASET</div>
                         <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
import pandas as pd
import numpy as np

data = {'{'}
    "Name": ["John", "Sara", "Mike", "Anna"],
    "Age": [25, 30, <span className="text-rose-500 font-bold bg-rose-100 dark:bg-rose-900/30 px-0.5 rounded">np.nan</span>, 35],
    "City": ["Chennai", "Delhi", <span className="text-rose-500 font-bold bg-rose-100 dark:bg-rose-900/30 px-0.5 rounded">None</span>, "Mumbai"]
{'}'}
df = pd.DataFrame(data)
                        </pre>
                    </div>
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Section 5 */}
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-4">
                            <Search className="w-5 h-5 text-blue-500 mr-2" />
                            5️⃣ Using isna()
                        </h3>
                        <button onClick={() => runDemo('run_isna')} className="mt-3 text-left group w-full">
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-500 transition-colors shadow-sm relative">
                                <div className="absolute top-3 right-3 text-[9px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN df.isna()</div>
                                <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200">df.isna()</code>
                                <p className="text-[10px] text-slate-500 mt-2">Returns a full boolean mask DataFrame. True means missing.</p>
                            </div>
                        </button>
                      </div>

                      {/* Section 6 */}
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-4">
                            <Activity className="w-5 h-5 text-emerald-500 mr-2" />
                            6️⃣ Counting
                        </h3>
                        <button onClick={() => runDemo('run_isna_sum')} className="mt-3 text-left group w-full">
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-500 transition-colors shadow-sm relative">
                                <div className="absolute top-3 right-3 text-[9px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN sum()</div>
                                <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200">df.isna().sum()</code>
                                <p className="text-[10px] text-slate-500 mt-2">Combined with <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">sum()</code> to see how many missing values exist in each column.</p>
                            </div>
                        </button>
                      </div>
                  </div>

                  {/* Section 7 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Database className="w-5 h-5 text-indigo-500 mr-2" />
                        7️⃣ Detect Missing Values in a Column
                  </h3>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 p-4 rounded-xl shadow-sm flex items-center justify-between">
                      <div>
                          <code className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm inline-block mb-2">
                             df[<span className="text-amber-500">"Age"</span>].isna()
                          </code>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Checks missing values only in the Age column.</p>
                      </div>
                      <button onClick={() => runDemo('run_col_isna')} className="bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold px-4 py-2 rounded-lg transition-colors shadow-sm ml-4 whitespace-nowrap">
                          RUN COL
                      </button>
                  </div>

                  {/* Section 8 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Activity className="w-5 h-5 text-rose-500 mr-2" />
                        8️⃣ Checking If Dataset Contains Missing Values
                  </h3>
                  
                  <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm flex items-center justify-between">
                      <div>
                          <code className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm inline-block mb-2">
                             df.isna().values.any()
                          </code>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Meaning the dataset contains <em>some</em> missing value somewhere.</p>
                      </div>
                      <button onClick={() => runDemo('run_any')} className="bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold px-4 py-2 rounded-lg transition-colors shadow-sm ml-4 whitespace-nowrap">
                          RUN ANY()
                      </button>
                  </div>

                </div>
              )}

               {activeTab === 'realworld' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Section 9 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <BarChart className="w-5 h-5 text-indigo-500 mr-2" />
                        9️⃣ Visualization Example
                  </h3>
                   <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 p-4 rounded-xl shadow-sm">
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">After detecting missing values, we may visualize column counts. This helps analysts quickly identify columns with missing data.</p>
                        <code className="text-[10px] sm:text-[11px] bg-white dark:bg-slate-950 font-bold p-3 rounded block w-full shadow-inner border border-slate-200 dark:border-slate-800 mb-4 whitespace-pre-wrap">
import matplotlib.pyplot as plt

df.<span className="text-emerald-500">isna()</span>.<span className="text-emerald-500">sum()</span>.plot(kind="bar")

plt.title("Missing Values in Dataset")
plt.xlabel("Columns")
plt.ylabel("Missing Count")
plt.show()
                        </code>
                         <pre className="text-[10px] sm:text-[11px] font-mono text-center justify-center flex flex-col items-center text-slate-400 font-bold bg-white dark:bg-slate-900/80 p-3 shadow-inner rounded border border-slate-200 dark:border-slate-800/50 leading-[1.2]">
{`Missing Count
│
│     █
│     █
│ █   █
└────────────
Name Age City`}
                         </pre>
                  </div>

                  {/* Section 10 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Database className="w-5 h-5 text-emerald-500 mr-2" />
                        🔟 Real-World Example
                  </h3>

                  <button onClick={() => runDemo('run_real_world')} className="text-left group w-full">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 border-y border-r border-emerald-200 dark:border-slate-700 rounded-r-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN REAL WORLD</div>
                          <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300 mb-4">Imagine a Customer Dataset</h4>
                          
                          <table className="w-full text-left text-[11px] mb-4 border border-emerald-100 dark:border-emerald-900/50">
                             <thead className="bg-white dark:bg-slate-900">
                               <tr><th className="p-2 border-b border-emerald-100 dark:border-emerald-900/50">Customer</th><th className="p-2 border-b border-emerald-100 dark:border-emerald-900/50">Email</th><th className="p-2 border-b border-emerald-100 dark:border-emerald-900/50">Phone</th></tr>
                             </thead>
                             <tbody className="bg-white/50 dark:bg-slate-900/50">
                               <tr className="border-b border-emerald-50 dark:border-slate-800"><td className="p-2">Ravi</td><td className="p-2">ravi@email.com</td><td className="p-2">987654</td></tr>
                               <tr className="border-b border-emerald-50 dark:border-slate-800"><td className="p-2">Meena</td><td className="p-2"><span className="text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-1 rounded font-bold">NaN</span></td><td className="p-2">876543</td></tr>
                               <tr><td className="p-2">Arjun</td><td className="p-2">arjun@email.com</td><td className="p-2"><span className="text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-1 rounded font-bold">NaN</span></td></tr>
                             </tbody>
                          </table>

                          <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit">
                            df.isna().sum()
                          </code>
                        </div>
                  </button>
                    
                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Section 11 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <XCircle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣1️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-5 rounded-xl shadow-sm relative">
                      <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200">❌ Confusing isna() with isnull()</div>
                      
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 ml-2">Both functions are exactly the same. Pandas provides both for compatibility.</p>
                      
                      <div className="bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                          <code className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">df.isna()  ==  df.isnull()</code>
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 p-5 rounded-xl shadow-sm relative">
                      <button onClick={() => runDemo('run_mistake')} className="absolute top-4 right-4 text-[10px] font-bold text-amber-600 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-60 hover:opacity-100 transition-opacity">RUN MISTAKE</button>
                      <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200">❌ Not summarizing results</div>
                      
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 ml-2 w-4/5">Running only <code className="bg-white dark:bg-slate-800 px-1 rounded">df.isna()</code> produces a huge table of True/False values which is unreadable for large datasets.</p>
                      
                       <div className="flex flex-col sm:flex-row gap-4 mt-3">
                        <div className="flex-1 opacity-70">
                            <p className="text-[11px] text-slate-500 font-mono font-bold bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800 block shadow-inner text-center">
                              df.isna()
                            </p>
                            <p className="text-center text-[10px] font-bold text-rose-500 mt-1 uppercase">Large Table Output</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-bold bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 block shadow-inner text-center">
                              df.isna().sum()
                            </p>
                            <p className="text-center text-[10px] font-bold text-emerald-500 mt-1 uppercase">Better Approach (Summarized)</p>
                        </div>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-emerald-400" />
                     Pipeline Output Console
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[440px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Activity className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-5 font-sans leading-relaxed">Click interactive buttons on the left to execute <code className="text-emerald-500/50">isna()</code> detection checks!</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('Name ') || line.includes('Age ') || line.includes('City ') || line.includes('Customer') || line.includes('Email') || line.includes('Phone') ? 'text-emerald-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('False') || line.includes('0') ? 'text-slate-300' :
                              line.includes('True') || line.includes('NaN') || line.includes('None') || line.includes('1') ? 'text-rose-400 font-bold' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Anna') || line.includes('Chennai') || line.includes('Delhi') || line.includes('Mumbai') ? 'text-sky-300' :
                              line.includes('dtype:') ? 'text-slate-500 text-[11px]' :
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

export default PdIsna;
