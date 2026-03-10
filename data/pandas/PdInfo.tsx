import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  AlertTriangle, Table, Settings, 
  Activity, Database, LayoutTemplate, 
  Search, CheckCircle2, FileSearch, BarChart
} from 'lucide-react';

const PdInfo: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'output' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '   Name   Age       City  Salary',
          '0  John  25.0    Chennai   50000',
          '1  Sara  30.0      Delhi   60000',
          '2  Mike   NaN     Mumbai   55000',
          '3  Anna  35.0  Bangalore   70000'
        ];
        break;
      case 'run_info':
        outLines = [
          "> df.info()",
          "<class 'pandas.core.frame.DataFrame'>",
          "RangeIndex: 4 entries, 0 to 3",
          "Data columns (total 4 columns):",
          " #   Column  Non-Null Count  Dtype  ",
          "---  ------  --------------  -----  ",
          " 0   Name    4 non-null      object ",
          " 1   Age     3 non-null      float64",
          " 2   City    4 non-null      object ",
          " 3   Salary  4 non-null      int64  ",
          "dtypes: float64(1), int64(1), object(2)",
          "memory usage: 256.0+ bytes"
        ];
        break;
      case 'run_missing':
        outLines = [
          "> df.isnull().sum()",
          "Name      0",
          "Age       1",
          "City      0",
          "Salary    0",
          "dtype: int64"
        ];
        break;
      case 'run_large':
        outLines = [
          "> df = pd.read_csv('sales_data.csv')",
          "> df.info()",
          "<class 'pandas.core.frame.DataFrame'>",
          "RangeIndex: 500000 entries, 0 to 499999",
          "Data columns (total 10 columns):",
          "...",
          "memory usage: 38.1+ MB",
          "",
          "> # Helps confirm dataset loaded correctly!"
        ];
        break;
      case 'mistake_parens':
        outLines = [
          "> df.info",
          "<bound method DataFrame.info of    Name   Age       City  Salary\\n0  John  25.0    Chennai   50000\\n1  Sara  30.0      Delhi   60000...>",
          "",
          "> # ❌ Mistake: It shows the method object, not the output summary!"
        ];
        break;
      case 'run_workflow':
        outLines = [
          "> df.head()",
          "[Shows first 5 rows...]",
          "",
          "> df.info()",
          "[Shows data structure & nulls...]",
          "",
          "> df.describe()",
          "[Shows statistical summary...]"
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
        <div className="inline-flex items-center justify-center p-4 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl mb-6 shadow-sm border border-cyan-200 dark:border-cyan-800/50">
          <FileSearch className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas <code className="text-cyan-600 dark:text-cyan-400 text-3xl sm:text-4xl bg-cyan-50 dark:bg-cyan-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">info()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          When working with datasets in Pandas, one of the first steps is understanding the structure of the data.
          The <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">info()</code> method provides a quick summary of a DataFrame, including column names, data types, and missing values.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-cyan-500" />
            Exploration Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-cyan-600 text-white shadow-cyan-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-3️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('output')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'output' ? 'bg-cyan-600 text-white shadow-cyan-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Search className="w-4 h-4 mr-1.5" /> 4️⃣-6️⃣ Usage & Output
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-cyan-600 text-white shadow-cyan-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Activity className="w-4 h-4 mr-1.5" /> 7️⃣-🔟 Real-World Use
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-cyan-600 text-white shadow-cyan-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 11-12 Tips
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
                  
                  {/* Section 1 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Database className="w-5 h-5 text-cyan-500 mr-2" />
                    1️⃣ What is <code className="text-cyan-500 font-mono ml-2">info()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                      <p><strong>Definition:</strong> <code>info()</code> is a Pandas DataFrame method used to display a concise summary of a dataset.</p>
                      
                      <p>It includes information about:</p>
                      <ul className="grid grid-cols-2 gap-2 mt-2">
                        <li className="flex items-center text-sm"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span> column names</li>
                        <li className="flex items-center text-sm"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span> number of non-null values</li>
                        <li className="flex items-center text-sm"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span> data types</li>
                        <li className="flex items-center text-sm"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span> memory usage</li>
                      </ul>

                      <div className="bg-cyan-50 dark:bg-cyan-900/10 border-l-4 border-cyan-500 p-4 mt-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-cyan-800 dark:text-cyan-200">
                          In simple words: <code>info()</code> helps you quickly understand the <strong>structure and health</strong> of a dataset.
                        </p>
                      </div>
                  </div>

                  {/* Section 2 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                    2️⃣ Why info() is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300">
                      <p className="mb-3 text-sm">Data analysts use <code>info()</code> to:</p>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/50 p-3 rounded-lg text-center">
                              <p className="text-xs text-emerald-800 dark:text-emerald-200 font-semibold">Identify missing values</p>
                          </div>
                          <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/50 p-3 rounded-lg text-center">
                              <p className="text-xs text-emerald-800 dark:text-emerald-200 font-semibold">Check data types</p>
                          </div>
                          <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/50 p-3 rounded-lg text-center">
                              <p className="text-xs text-emerald-800 dark:text-emerald-200 font-semibold">Understand structure</p>
                          </div>
                          <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/50 p-3 rounded-lg text-center">
                              <p className="text-xs text-emerald-800 dark:text-emerald-200 font-semibold">Estimate memory usage</p>
                          </div>
                      </div>
                      <p className="text-sm text-slate-500 italic border-l-2 border-slate-300 dark:border-slate-600 pl-3">
                        "It is usually run immediately after loading a dataset and is a very important function used during <strong>Exploratory Data Analysis (EDA)</strong>."
                      </p>
                  </div>

                  {/* Section 3 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700 font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold overflow-x-auto text-center">
                          DataFrame.info(<span className="text-cyan-600 dark:text-cyan-400 font-normal text-xs">verbose=None, buf=None, max_cols=None, memory_usage=None</span>)
                      </div>
                      <div className="p-4 text-center">
                        <p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">In most cases, we simply use:</p>
                        <code className="text-sm font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm inline-block">
                          df.info()
                        </code>
                      </div>
                  </div>

                </div>
              )}

              {activeTab === 'output' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Section 4 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Table className="w-5 h-5 text-blue-500 mr-2" />
                        4️⃣ Creating Example Dataset
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Let's create a DataFrame with some specific data types and a missing value.</p>

                  <button onClick={() => runDemo('show_base')} className="text-left group w-full">
                    <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 rounded-xl p-5 hover:border-blue-400 dark:hover:border-blue-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DATASET</div>
                         <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
import pandas as pd
import numpy as np

data = {'{'}
    "Name": ["John", "Sara", "Mike", "Anna"],
    <span className="text-amber-500">"Age": [25, 30, np.nan, 35],</span> <span className="text-slate-400 italic"># Note the missing value!</span>
    "City": ["Chennai", "Delhi", "Mumbai", "Bangalore"],
    "Salary": [50000, 60000, 55000, 70000]
{'}'}
df = pd.DataFrame(data)
                        </pre>
                    </div>
                  </button>

                  {/* Section 5 & 6 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Search className="w-5 h-5 text-cyan-500 mr-2" />
                        5️⃣ Using info() & 6️⃣ Output
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Click below to see what <code>df.info()</code> outputs for our dataset.</p>

                  <button onClick={() => runDemo('run_info')} className="text-left group w-full mb-6">
                    <div className="bg-slate-800 dark:bg-slate-900 border border-slate-700 rounded-xl p-5 hover:border-cyan-500 transition-colors shadow-md h-full relative cursor-pointer group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-cyan-400 bg-cyan-900/50 border border-cyan-800 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">RUN INFO()</div>
                        <h4 className="font-bold text-sm text-white mb-2 mt-2">Execute info command</h4>
                        <code className="text-sm font-bold text-cyan-300 bg-black/50 px-3 py-1.5 rounded border border-slate-700 shadow-inner block w-fit mb-1">
                            df.info()
                        </code>
                    </div>
                  </button>

                  <div className="space-y-3">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1"><span className="bg-slate-100 dark:bg-slate-700 px-1 rounded mr-2">1️⃣</span> DataFrame Type</h4>
                          <code className="text-xs text-blue-600 dark:text-blue-400 font-mono mb-2 block">&lt;class 'pandas.core.frame.DataFrame'&gt;</code>
                          <p className="text-xs text-slate-500">Indicates the object type using python's class signature.</p>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"></div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1"><span className="bg-slate-100 dark:bg-slate-700 px-1 rounded mr-2">2️⃣</span> RangeIndex</h4>
                          <code className="text-xs text-cyan-600 dark:text-cyan-400 font-mono mb-2 block">RangeIndex: 4 entries, 0 to 3</code>
                          <p className="text-xs text-slate-500">Shows total number of rows (4 entries), starting index (0), and ending index (3).</p>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1"><span className="bg-slate-100 dark:bg-slate-700 px-1 rounded mr-2">3️⃣</span> Column Summary</h4>
                          <table className="w-full text-left text-[11px] mb-2 border border-slate-100 dark:border-slate-700">
                             <thead className="bg-slate-50 dark:bg-slate-800">
                               <tr><th className="p-1.5 border-b border-slate-100 dark:border-slate-700">Column</th><th className="p-1.5 border-b border-slate-100 dark:border-slate-700">Meaning</th></tr>
                             </thead>
                             <tbody>
                               <tr><td className="p-1.5 font-mono">Column</td><td className="p-1.5">column name</td></tr>
                               <tr><td className="p-1.5 font-mono">Non-Null Count</td><td className="p-1.5 font-bold text-emerald-600 dark:text-emerald-400">number of non-missing values</td></tr>
                               <tr><td className="p-1.5 font-mono">Dtype</td><td className="p-1.5">data type</td></tr>
                             </tbody>
                          </table>
                          <p className="text-xs text-slate-500">Example: <code className="bg-slate-100 dark:bg-slate-700 px-1">Age → 3 non-null values</code>. Meaning 1 value is missing (NaN).</p>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1"><span className="bg-slate-100 dark:bg-slate-700 px-1 rounded mr-2">4️⃣</span> Data Types Summary</h4>
                          <code className="text-xs text-purple-600 dark:text-purple-400 font-mono mb-2 block">dtypes: float64(1), int64(1), object(2)</code>
                          <p className="text-xs text-slate-500">Shows how many columns belong to each Pandas data type.</p>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1"><span className="bg-slate-100 dark:bg-slate-700 px-1 rounded mr-2">5️⃣</span> Memory Usage</h4>
                          <code className="text-xs text-amber-600 dark:text-amber-400 font-mono mb-2 block">memory usage: 256.0+ bytes</code>
                          <p className="text-xs text-slate-500">Indicates how much RAM the DataFrame consumes. Important for large datasets.</p>
                      </div>
                  </div>

                </div>
              )}

               {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Section 7 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                        7️⃣ Detect Missing Values
                  </h3>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 p-4 rounded-xl shadow-sm">
                      <p className="text-[13px] text-slate-700 dark:text-slate-300 mb-2">From <code>info()</code> output, if we see:</p>
                      <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 mb-2 ml-2">
                        <li>Age → <span className="font-bold text-amber-600 dark:text-amber-400">3 non-null</span> values</li>
                        <li>Total rows → <span className="font-bold">4</span></li>
                      </ul>
                      <p className="text-sm font-bold text-amber-700 dark:text-amber-300 mb-3">This means: 1 missing value.</p>
                      
                       <div className="mt-4 pt-3 border-t border-amber-200 dark:border-amber-800/50 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <span className="text-xs font-bold text-slate-500 uppercase">Alternative Method:</span>
                            <button onClick={() => runDemo('run_missing')} className="group flex-1 w-full text-left">
                                <code className="text-[11px] xl:text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm block w-full hover:border-amber-400 transition-colors flex justify-between items-center group-hover:bg-amber-50 dark:group-hover:bg-amber-900/20">
                                   <span>df.isnull().sum()</span>
                                   <span className="text-[9px] text-amber-500 bg-amber-100 dark:bg-amber-900/50 px-1.5 py-0.5 rounded opacity-50 group-hover:opacity-100">RUN</span>
                                </code>
                            </button>
                       </div>
                  </div>

                  {/* Section 8 & 10 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Database className="w-5 h-5 text-cyan-500 mr-2" />
                        8️⃣ Large Datasets & 🔟 Real-World Use
                  </h3>

                  <button onClick={() => runDemo('run_large')} className="text-left group w-full">
                        <div className="bg-cyan-50 dark:bg-cyan-900/10 border-l-4 border-cyan-500 border-y border-r border-cyan-200 dark:border-slate-700 rounded-r-xl p-5 hover:border-cyan-400 dark:hover:border-cyan-700 transition-colors shadow-sm relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN 500K ROWS</div>
                          <h4 className="font-bold text-sm text-cyan-800 dark:text-cyan-300 mb-2">Imagine a dataset with 500,000 rows.</h4>
                          <code className="text-[11px] xl:text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-cyan-900/50 shadow-sm block w-fit mb-3">
                            <span className="text-slate-400">df = pd.read_csv("sales_data.csv")</span><br/>
                            df.info()
                          </code>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                             Using info() helps quickly identify: missing email addresses, incorrect data types, memory usage. <strong>This is critical for data preprocessing.</strong>
                          </p>
                        </div>
                  </button>

                  {/* Section 9 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <BarChart className="w-5 h-5 text-indigo-500 mr-2" />
                        9️⃣ Visualization Example
                  </h3>
                   <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 p-4 rounded-xl shadow-sm">
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">After checking data structure with <code>info()</code>, we can visualize numeric columns to connect data structure with analysis.</p>
                        <code className="text-[10px] sm:text-[11px] bg-white dark:bg-slate-950 font-bold p-3 rounded block w-full shadow-inner border border-indigo-100 dark:border-indigo-900 mb-4 whitespace-pre-wrap">
import matplotlib.pyplot as plt

df.<span className="text-emerald-500">plot</span>(kind="bar")

plt.title("Dataset Overview")
plt.show()
                        </code>
                         <pre className="text-[10px] sm:text-[11px] font-mono text-center text-indigo-500 font-bold bg-white dark:bg-slate-900/80 p-3 shadow-inner rounded border border-indigo-100 dark:border-indigo-900/30 line-height-tight">
Value
│
│ █
│ █     █
│ █  █  █
└────────────
Name Age City Salary
                         </pre>
                  </div>
                    
                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Section 11 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣1️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative">
                       <button onClick={() => runDemo('mistake_parens')} className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN MISTAKE</button>
                      <div className="font-bold text-[13px] mb-2 text-slate-700 dark:text-slate-300 w-5/6">❌ Forgetting parentheses</div>
                      
                       <div className="flex flex-col sm:flex-row gap-4 mt-3">
                        <div className="flex-1">
                            <p className="text-[11px] text-rose-600 dark:text-rose-400 font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 block shadow-inner w-full text-center">
                              df.info <span className="text-[10px] font-normal text-rose-400 ml-1"># Wrong</span>
                            </p>
                        </div>
                        <div className="flex-1">
                            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-bold bg-white dark:bg-slate-950 p-1.5 rounded border border-emerald-100 dark:border-emerald-900 block shadow-inner text-center">
                              df.info() <span className="text-[10px] font-normal text-emerald-500 ml-1"># Correct</span>
                            </p>
                        </div>
                      </div>

                       <div className="mt-6 pt-4 border-t border-rose-100 dark:border-rose-900/50 font-bold text-[13px] mb-2 text-slate-700 dark:text-slate-300 w-5/6">❌ Ignoring data types</div>
                       <p className="text-[11px] text-slate-500 mb-2 leading-relaxed">Example problem: <code>Age → object type</code>. It should be numeric! Leaving numbers as string/object breaks math operations later.</p>
                       <div className="bg-white dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800 shadow-sm">
                           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Fix:</p>
                           <code className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">df["Age"] = df["Age"].astype(int)</code>
                       </div>
                    </div>
                  </div>
                  
                  {/* Section 12 */}
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣2️⃣ Professional Advice (Workflow)
                  </h3>

                  <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 1 — ALWAYS run info() after loading data</span>
                             <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800">
                                df = pd.read_csv("dataset.csv")<br/>
                                <span className="text-cyan-600 dark:text-cyan-400">df.info()</span>
                            </code>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-2">This helps identify data problems early before doing any modifications.</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-2">Tip 2 — Combine with other inspection functions</span>
                            <div className="flex items-center justify-between gap-2">
                                <ul className="text-xs font-mono font-bold space-y-1.5">
                                    <li className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">1. df.head()</li>
                                    <li className="bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded">2. df.info()</li>
                                    <li className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded">3. df.describe()</li>
                                </ul>
                                <button onClick={() => runDemo('run_workflow')} className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-[10px] font-bold px-3 py-2 rounded-lg transition-colors shadow-sm">
                                    RUN WORKFLOW
                                </button>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-3 border-t border-slate-100 dark:border-slate-700 pt-2">This is the standard professional workflow sequence used in industry.</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 3 — Use for memory optimization</span>
                            <p className="text-[11px] text-slate-500 leading-relaxed mb-2">Notice <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">memory usage</code> in the output? You can downcast data types to save RAM on massive datasets.</p>
                            <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800">
                                df["Age"] = df["Age"].astype(<span className="text-amber-600 dark:text-amber-400">"int32"</span>)
                            </code>
                            <p className="text-[10px] text-amber-600 dark:text-amber-400/80 mt-1 italic font-medium">This reduces memory usage in large datasets.</p>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-cyan-400" />
                     Data Analyst Console
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
                        <Terminal className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-5 font-sans leading-relaxed">Click the interactive buttons on the left to execute Pandas <code className="text-cyan-600/50">info()</code> operations and view terminal output here!</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('❌ Mistake') ? 'text-rose-400 font-bold font-sans' :
                              line.includes('Name ') || line.includes('Age ') || line.includes('City ') || line.includes('Salary') || line.includes('Column') || line.includes('Dtype') || line.includes('Non-Null') ? 'text-cyan-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Anna') || line.includes('Chennai') || line.includes('Delhi') || line.includes('Mumbai') || line.includes('Bangalore') ? 'text-sky-300' :
                              line.includes('DataFrame') || line.includes('RangeIndex') || line.includes('dtypes') || line.includes('memory') ? 'text-amber-300 font-bold' :
                              line.includes('50000') || line.includes('60000') || line.includes('55000') || line.includes('70000') || line.includes('4 non-null') || line.includes('3 non-null') ? 'text-emerald-300' :
                              line.includes('NaN') ? 'text-rose-300 font-bold bg-rose-900/30 px-1 rounded' :
                              line.includes('object') || line.includes('float64') || line.includes('int64') ? 'text-purple-300' :
                              line.includes('1') || line.includes('0') || line.includes('4') ? 'text-slate-300' :
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

export default PdInfo;
