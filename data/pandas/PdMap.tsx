import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  AlertTriangle, Settings, 
  Database, RefreshCw, Replace, Code, BarChart, FileCode, CheckCircle2
} from 'lucide-react';

const PdMap: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'transforming' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          '   Name Gender',
          '0  John      M',
          '1  Sara      F',
          '2  Mike      M'
        ];
        break;
      case 'run_dict_map':
        outLines = [
          '> gender_map = {"M": "Male", "F": "Female"}',
          '> df["Gender"] = df["Gender"].map(gender_map)',
          '   Name  Gender',
          '0  John    Male',
          '1  Sara  Female',
          '2  Mike    Male'
        ];
        break;
      case 'run_func_map':
        outLines = [
          '> df["Name"] = df["Name"].map(str.upper)',
          '   Name Gender',
          '0  JOHN      M',
          '1  SARA      F',
          '2  MIKE      M',
          '',
          '> # Applied str.upper to every element in the Name Series'
        ];
        break;
      case 'run_lambda_map':
        outLines = [
          '> df["Age"] = df["Age"].map(lambda x: x + 5)',
          '0    30',
          '1    35',
          '2    33',
          'Name: Age, dtype: int64'
        ];
        break;
      case 'run_nan_map':
        outLines = [
          '> mapping = {"M": "Male"}',
          '> df["Gender"].map(mapping)',
          '0    Male',
          '1     NaN',
          '2    Male',
          'Name: Gender, dtype: object',
          '',
          '> # ⚠️ Warning: Since "F" was missing from mapping dict, it became NaN!'
        ];
        break;
      case 'run_real_world':
        outLines = [
          '> status_map = {1: "Active", 0: "Inactive"}',
          '> df["Status"] = df["Status"].map(status_map)',
          '  Customer    Status',
          '0     Ravi    Active',
          '1    Meena  Inactive',
          '2    Arjun    Active'
        ];
        break;
      case 'run_mistake':
        outLines = [
          '> df.map({"M": "Male"})',
          "AttributeError: \"DataFrame\" object has no attribute \"map\"",
          '',
          '> # ❌ CRASH: map() only works on a single Series (Column), not a whole DataFrame!'
        ];
        break;
      case 'run_encode':
        outLines = [
          '> df["Gender"] = df["Gender"].map({"Male": 1, "Female": 0})',
          '   Name  Gender',
          '0  John       1',
          '1  Sara       0',
          '2  Mike       1',
          '',
          '> # ✅ Successfully Label Encoded for Machine Learning!'
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
          <RefreshCw className="w-10 h-10 text-orange-600 dark:text-orange-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Series <code className="text-orange-600 dark:text-orange-400 text-3xl sm:text-4xl bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.map()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In Pandas, <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">map()</code> is used to transform or replace values in a <strong>Series</strong> based on a mapping relationship. It is crucial for label encoding and data cleaning.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-orange-500" />
            Mapping Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('transforming')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'transforming' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Replace className="w-4 h-4 mr-1.5" /> 5️⃣-8️⃣ Mapping Data
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 9️⃣-1️⃣1️⃣ Advanced
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣2️⃣-1️⃣3️⃣ Tips
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
                  <div className="bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          <code>map()</code> works mainly with Pandas <strong>Series</strong> (a single column) rather than full DataFrames.
                        </p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                    <Database className="w-5 h-5 text-orange-500 mr-2" />
                    1️⃣ What is <code className="text-orange-500 font-mono ml-2">map()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                      <p className="text-sm"><strong>Definition:</strong> <code>map()</code> is a Pandas method used to map or substitute values using a function, dictionary, or Series.</p>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-6 mt-2">
                         <div className="text-center font-bold text-sky-600 dark:text-sky-400">"M"</div>
                         <div className="text-orange-400">{'→'}</div>
                         <div className="text-center font-bold text-emerald-600 dark:text-emerald-400">"Male"</div>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                    2️⃣ Why map() is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">
                      <p className="mb-2"><code>map()</code> is useful when you want to:</p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                         <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 p-2 rounded text-xs font-bold text-center border border-emerald-100 dark:border-emerald-800/50">Replace Categorical Values</div>
                         <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-2 rounded text-xs font-bold text-center border border-blue-100 dark:border-blue-800/50">Encode Labels for ML</div>
                         <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 p-2 rounded text-xs font-bold text-center border border-indigo-100 dark:border-indigo-800/50">Transform Column Values</div>
                         <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-800 dark:text-fuchsia-300 p-2 rounded text-xs font-bold text-center border border-fuchsia-100 dark:border-fuchsia-800/50">Apply Custom Functions</div>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                   <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center font-mono text-sm font-bold text-slate-700 dark:text-slate-300 shadow-sm overflow-x-auto">
                      Series.map(<span className="text-orange-500 font-normal">arg</span>, <span className="text-slate-500 font-normal">na_action=None</span>)
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Database className="w-5 h-5 text-indigo-500 mr-2" />
                        4️⃣ Creating Example Dataset
                  </h3>
                  
                  <button onClick={() => runDemo('show_base')} className="text-left group w-full">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DATASET</div>
                         <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
import pandas as pd

{`data = {
    "Name": ["John", "Sara", "Mike"],
    "Gender": ["M", "F", "M"]
}`}
df = pd.DataFrame(data)
                        </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'transforming' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Replace className="w-5 h-5 text-orange-500 mr-2" />
                        5️⃣ Using map() with Dictionary
                  </h3>
                  <button onClick={() => runDemo('run_dict_map')} className="text-left group w-full mb-6">
                    <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/50 rounded-xl p-4 hover:border-orange-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-orange-500 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DICT MAP</div>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block mb-2 whitespace-pre">
{'gender_map = {"M": "Male", "F": "Female"}'}
                        </code>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner px-2 py-1 rounded block w-fit mb-2">
                            df[<span className="text-orange-500">"Gender"</span>] = df[<span className="text-orange-500">"Gender"</span>].map(<span className="text-emerald-500">gender_map</span>)
                        </code>
                        <p className="text-[10px] text-slate-500">Explanation: Dictionary keys match original values, values become the new data.</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <FileCode className="w-5 h-5 text-blue-500 mr-2" />
                        6️⃣ Using map() with Function 
                  </h3>
                  <button onClick={() => runDemo('run_func_map')} className="text-left group w-full mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN FUNC MAP</div>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded block w-fit mb-2">
                            df["Name"].map(<span className="text-blue-500 font-bold">str.upper</span>)
                        </code>
                        <p className="text-[10px] text-slate-500">Pass an existing built-in function to transform the entire series.</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Code className="w-5 h-5 text-emerald-500 mr-2" />
                        7️⃣ Using map() with Lambda
                  </h3>
                   <button onClick={() => runDemo('run_lambda_map')} className="text-left group w-full mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN LAMBDA</div>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded block w-fit mb-2">
                            df["Age"].map(<span className="text-emerald-500">lambda x: x + 5</span>)
                        </code>
                        <p className="text-[10px] text-slate-500">If Age was [25, 30, 28], it adds 5 to every row.</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                        8️⃣ Handling Missing Values Note
                  </h3>
                   <button onClick={() => runDemo('run_nan_map')} className="text-left group w-full mb-2">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 rounded-xl p-4 hover:border-rose-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-80 group-hover:opacity-100 transition-opacity">TEST NULL INJECTION</div>
                        <p className="text-[11px] text-slate-700 dark:text-slate-300 font-bold mb-1">If mapping dictionary does not match a value, it becomes <span className="bg-rose-200 dark:bg-rose-800 px-1 rounded text-rose-900 dark:text-rose-100">NaN</span>!</p>
                        <code className="text-[10px] font-bold text-slate-800 dark:text-slate-200 block mb-1">{"mapping = {'M': 'Male'}"}</code>
                        <code className="text-[10px] font-bold text-slate-800 dark:text-slate-200 block">df["Gender"].map(mapping)</code>
                    </div>
                  </button>

                </div>
              )}

               {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <BarChart className="w-5 h-5 text-indigo-500 mr-2" />
                        9️⃣ Visualization Example
                  </h3>
                   <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 p-4 rounded-xl shadow-sm">
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">After mapping values, we can visualize categorical counts.</p>
                        <code className="text-[10px] sm:text-[11px] bg-white dark:bg-slate-950 font-bold p-3 rounded block w-full shadow-inner border border-indigo-100 dark:border-indigo-900 mb-4 whitespace-pre-wrap">
import matplotlib.pyplot as plt

df["Gender"].<span className="text-indigo-500 font-bold">value_counts()</span>.plot(kind="bar")
plt.title("Gender Distribution")
plt.show()
                        </code>
                         <pre className="text-[10px] sm:text-[11px] font-mono text-center justify-center flex flex-col items-center text-indigo-400 font-bold bg-white dark:bg-slate-900/80 p-3 shadow-inner rounded border border-indigo-100 dark:border-indigo-900/30 leading-[1.2]">
{`Count
│
│ █
│ █      █
│ █  █   █
└────────────
Male Female`}
                         </pre>
                  </div>

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
                               <tr><th className="p-2 border-b border-emerald-100 dark:border-emerald-900/50">Customer</th><th className="p-2 border-b border-emerald-100 dark:border-emerald-900/50">Status Code</th></tr>
                             </thead>
                             <tbody className="bg-white/50 dark:bg-slate-900/50">
                               <tr className="border-b border-emerald-50 dark:border-slate-800"><td className="p-2">Ravi</td><td className="p-2 font-mono">1</td></tr>
                               <tr className="border-b border-emerald-50 dark:border-slate-800"><td className="p-2">Meena</td><td className="p-2 font-mono">0</td></tr>
                               <tr><td className="p-2">Arjun</td><td className="p-2 font-mono">1</td></tr>
                             </tbody>
                          </table>

                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-bold">Convert numeric codes back into readable labels:</p>
                          <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit">
                            {"df[\"Status\"].map({1: 'Active', 0: 'Inactive'})"}
                          </code>
                        </div>
                  </button>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣1️⃣ map() vs apply()
                  </h3>
                  
                  <table className="w-full text-left text-xs mb-4 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm">
                             <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                               <tr><th className="p-3 border-b border-slate-200 dark:border-slate-700">Feature</th><th className="p-3 border-b border-slate-200 dark:border-slate-700 font-mono text-orange-600 dark:text-orange-400">map()</th><th className="p-3 border-b border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400">apply()</th></tr>
                             </thead>
                             <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-bold">Works on</td><td className="p-3">Series Only</td><td className="p-3">Series or DataFrame</td></tr>
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-bold">Speed</td><td className="p-3 text-emerald-600 font-bold">Faster</td><td className="p-3">Slightly slower</td></tr>
                               <tr><td className="p-3 font-bold">Use case</td><td className="p-3">Value replacement</td><td className="p-3">Complex transformations</td></tr>
                             </tbody>
                   </table>
                   <p className="text-xs text-slate-500 italic block border-l-2 border-slate-300 dark:border-slate-700 pl-3"><strong>Recommendation:</strong> Use map() for simple value replacements or encoding tasks.</p>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣2️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-5 rounded-xl shadow-sm relative">
                      <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200">❌ Using map() on a DataFrame</div>
                      
                        <div className="flex flex-col sm:flex-row gap-4 mt-3">
                            <button onClick={() => runDemo('run_mistake')} className="flex-1 bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900 p-2 rounded border border-rose-200 dark:border-rose-800 text-center transition-colors group">
                                <p className="text-[11px] text-rose-600 dark:text-rose-400 font-mono font-bold block">
                                  df.map(...)
                                </p>
                                <p className="text-center text-[10px] font-bold text-rose-500 mt-1 uppercase">Wrong (Click to Crash)</p>
                            </button>
                            <div className="flex-1 bg-white dark:bg-slate-950 p-2 rounded border border-emerald-200 dark:border-emerald-800 shadow-inner text-center flex flex-col justify-center">
                                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-bold block">
                                  df["column"].map(...)
                                </p>
                                <p className="text-center text-[10px] font-bold text-emerald-500 mt-1 uppercase">Correct Method</p>
                            </div>
                      </div>

                       <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200 mt-6 pt-4 border-t border-rose-200 dark:border-rose-800/50">❌ Missing mapping keys</div>
                       <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 ml-2">If "M" is in your dict but "F" is missing, result → <span className="text-rose-500 font-bold bg-rose-100 dark:bg-rose-900/50 px-1 rounded">NaN</span> values natively replace the missing match.</p>

                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣3️⃣ Tips & Tricks (Professional Advice)
                  </h3>

                  <div className="space-y-4">
                      
                      <button onClick={() => runDemo('run_encode')} className="text-left group w-full">
                        <div className="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-800/80 transition-colors p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative cursor-pointer">
                             <div className="absolute top-2 right-2 text-[9px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100">RUN ML ENCODE</div>
                            <div className="w-full">
                                <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 1 — Use map() for Label Encoding</span>
                                <code className="text-[10px] xl:text-[11px] font-bold text-orange-600 dark:text-orange-400 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800 w-full sm:w-auto overflow-x-auto">
                                    {'df["Gender"] = df["Gender"].map({"Male": 1, "Female": 0})'}
                                </code>
                                <p className="text-[10px] text-slate-500 leading-relaxed mt-2 uppercase font-bold tracking-wide">Extremely useful for Machine Learning Datasets.</p>
                            </div>
                        </div>
                      </button>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 2 — Combine with fillna()</span>
                            <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800 whitespace-pre-wrap">
                                df["Gender"].map(mapping)<span className="text-blue-500 font-bold">.fillna("Unknown")</span>
                            </code>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-2">Prevents missing keys from exploding into NaNs.</p>
                          </div>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 3 — Use apply() for Complex Logic</span>
                            <p className="text-[10px] text-slate-500 leading-relaxed mb-2">If your map requires multi-variable checks, skip <code>map</code> entirely and switch to <code>apply</code>.</p>
                            <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800 whitespace-pre-wrap">
                                df["Age"].apply(lambda x: "Adult" if x &gt;= 18 else "Minor")
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
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

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[440px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <RefreshCw className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-5 font-sans leading-relaxed">Click interactive buttons on the left to execute Pandas <code className="text-orange-500/50 block mt-1">.map()</code> transformations!</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Ravi') || line.includes('Meena') || line.includes('Arjun') ? 'text-sky-300' :
                              line.includes('Name') || line.includes('Gender') || line.includes('Age') || line.includes('Status') || line.includes('Customer') ? 'text-orange-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('AttributeError') || line.includes('CRASH') || line.includes('NaN') || line.includes('Warning') ? 'text-rose-400 font-bold' :
                              line.includes('Male') || line.includes('Female') || line.includes('Active') || line.includes('Inactive') ? 'text-emerald-400 font-bold' :
                              line.match(/^\s*\d+\s+/) || line.match(/^[A-Za-z]+:\s+\d/) ? 'text-slate-400' :
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

export default PdMap;
