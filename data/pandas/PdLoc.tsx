import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  AlertTriangle, Settings, 
  Database, Target, Filter, Edit, BarChart, Crosshair, MapPin
} from 'lucide-react';

const PdLoc: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'selecting' | 'filtering' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          'Index  Name  Age       City',
          '0      John   25    Chennai',
          '1      Sara   30      Delhi',
          '2      Mike   28     Mumbai',
          '3      Anna   35  Bangalore'
        ];
        break;
      case 'run_single_row':
        outLines = [
          '> df.loc[1]',
          'Name     Sara',
          'Age        30',
          'City    Delhi',
          'Name: 1, dtype: object'
        ];
        break;
      case 'run_multi_rows':
        outLines = [
          '> df.loc[0:2]',
          '   Name  Age     City',
          '0  John   25  Chennai',
          '1  Sara   30    Delhi',
          '2  Mike   28   Mumbai',
          '',
          '> # Notice: loc INCLUDES the end label (2)'
        ];
        break;
      case 'run_spec_cols':
        outLines = [
          '> df.loc[:, "Age"]',
          '0    25',
          '1    30',
          '2    28',
          '3    35',
          'Name: Age, dtype: int64'
        ];
        break;
      case 'run_rows_cols':
        outLines = [
          '> df.loc[0:2, ["Name", "Age"]]',
          '   Name  Age',
          '0  John   25',
          '1  Sara   30',
          '2  Mike   28'
        ];
        break;
      case 'run_cond_filter':
        outLines = [
          '> df.loc[df["Age"] > 28]',
          '   Name  Age       City',
          '1  Sara   30      Delhi',
          '3  Anna   35  Bangalore'
        ];
        break;
      case 'run_update':
        outLines = [
          '> df.loc[1, "Age"] = 32',
          '> print(df)',
          '   Name  Age       City',
          '0  John   25    Chennai',
          '1  Sara   32      Delhi',
          '2  Mike   28     Mumbai',
          '3  Anna   35  Bangalore'
        ];
        break;
      case 'run_mistake':
        outLines = [
          '> df.loc[:, 1]',
          'KeyError: 1',
          '',
          '> # ❌ CRASH: loc uses labels! 1 is an integer position for columns.'
        ];
        break;
      case 'run_real_world':
        outLines = [
          '> df.loc[df["Price"] > 30000]',
          '  Product  Price  Sales',
          '0  Laptop  80000     50',
          '',
          '> # Selected products priced above 30000'
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
          <Crosshair className="w-10 h-10 text-violet-600 dark:text-violet-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Indexing <code className="text-violet-600 dark:text-violet-400 text-3xl sm:text-4xl bg-violet-50 dark:bg-violet-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.loc[]</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In Pandas, <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">loc[]</code> is used to select rows and columns using <strong>labels (names)</strong> instead of positions. It is one of the most important indexing methods used in data analysis.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-violet-500" />
            Selection Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('selecting')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'selecting' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Target className="w-4 h-4 mr-1.5" /> 5️⃣-8️⃣ Selecting
            </button>
            <button
              onClick={() => setActiveTab('filtering')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'filtering' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Filter className="w-4 h-4 mr-1.5" /> 9️⃣-1️⃣2️⃣ Advanced
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 Tips & Mistakes
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
                  <div className="bg-violet-50 dark:bg-violet-900/10 border-l-4 border-violet-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          While <code>iloc</code> uses integer positions, <code className="text-violet-600 dark:text-violet-400 font-bold">loc</code> uses row and column labels!
                        </p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                    <Database className="w-5 h-5 text-violet-500 mr-2" />
                    1️⃣ What is <code className="text-violet-500 font-mono ml-2">loc[]</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                      <p className="text-sm"><strong>Definition:</strong> <code>loc[]</code> is a Pandas indexer used to access rows and columns based on label names.</p>
                      
                      <p className="text-sm">In simple words: <strong><code>loc[]</code> selects data using row labels and column names.</strong></p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Target className="w-5 h-5 text-violet-500 mr-2" />
                    2️⃣ Why loc[] is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">
                      <p className="mb-2"><code>loc[]</code> helps to:</p>
                      <ul className="space-y-1.5 mb-4 pl-2">
                          <li className="flex items-start"><span className="text-violet-500 mr-2">✔️</span> Select rows by label</li>
                          <li className="flex items-start"><span className="text-violet-500 mr-2">✔️</span> Filter data using conditions</li>
                          <li className="flex items-start"><span className="text-violet-500 mr-2">✔️</span> Select specific columns</li>
                          <li className="flex items-start"><span className="text-violet-500 mr-2">✔️</span> Update values in datasets</li>
                      </ul>
                       <p className="italic border-l-2 border-violet-200 dark:border-violet-800 pl-3 text-slate-500">
                          It is widely used in data preprocessing and feature engineering.
                       </p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center font-mono text-sm font-bold text-slate-700 dark:text-slate-300 shadow-sm overflow-x-auto">
                      df.loc[<span className="text-sky-500">row_label</span>, <span className="text-emerald-500">column_label</span>]
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

data = {'{'}
    "Name": ["John", "Sara", "Mike", "Anna"],
    "Age": [25, 30, 28, 35],
    "City": ["Chennai", "Delhi", "Mumbai", "Bangalore"]
{'}'}
df = pd.DataFrame(data)

<span className="text-slate-400 italic"># Row labels → 0, 1, 2, 3</span>
<span className="text-slate-400 italic"># Column labels → Name, Age, City</span>
                        </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'selecting' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Target className="w-5 h-5 text-violet-500 mr-2" />
                        5️⃣ Selecting a Single Row
                  </h3>
                  <button onClick={() => runDemo('run_single_row')} className="text-left group w-full mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-violet-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-violet-500 bg-violet-100 dark:bg-violet-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN 1 ROW</div>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded block w-fit mb-2">df.loc[1]</code>
                        <p className="text-[10px] text-slate-500">Explanation: 1 is the row label (returns Sara's data).</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Target className="w-5 h-5 text-blue-500 mr-2" />
                        6️⃣ Selecting Multiple Rows (Slicing)
                  </h3>
                  <button onClick={() => runDemo('run_multi_rows')} className="text-left group w-full mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN ROWS SLICE</div>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded block w-fit mb-2">
                            df.loc[0:<span className="text-rose-500 font-bold">2</span>]
                        </code>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 font-bold">Important difference from iloc:</p>
                        <p className="text-[10px] text-slate-500 mb-1"><code>loc</code> includes <b>both</b> start AND end labels! So row label 2 is included.</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Target className="w-5 h-5 text-emerald-500 mr-2" />
                        7️⃣ Selecting Specific Columns
                  </h3>
                   <button onClick={() => runDemo('run_spec_cols')} className="text-left group w-full mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN COLUMNS</div>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded block w-fit mb-2">
                            df.loc[<span className="text-violet-500 font-bold">:</span>, <span className="text-emerald-500">"Age"</span>]
                        </code>
                        <p className="text-[10px] text-slate-500">Explanation: <code>:</code> → all rows, <code>"Age"</code> → selected column.</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Target className="w-5 h-5 text-amber-500 mr-2" />
                        8️⃣ Selecting Rows and Columns Together
                  </h3>
                   <button onClick={() => runDemo('run_rows_cols')} className="text-left group w-full mb-2">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BOTH</div>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded block w-fit mb-2">
                            df.loc[<span className="text-sky-500 font-bold">0:2</span>, <span className="text-emerald-500">["Name", "Age"]</span>]
                        </code>
                        <p className="text-[10px] text-slate-500">Retrieves rows 0,1,2 for specific columns Name and Age.</p>
                    </div>
                  </button>

                </div>
              )}

               {activeTab === 'filtering' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Filter className="w-5 h-5 text-sky-500 mr-2" />
                        9️⃣ Conditional Filtering with loc
                  </h3>
                   <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 p-4 rounded-xl shadow-sm">
                        <p className="text-[13px] text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">Filter rows by passing a condition!</p>
                        
                         <button onClick={() => runDemo('run_cond_filter')} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 rounded-lg hover:border-sky-400 group relative text-left w-full shadow-sm">
                            <div className="absolute top-2 right-2 text-[9px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100">RUN FILTER</div>
                            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block mb-1 mt-1">df.loc[<span className="text-sky-600 dark:text-sky-400">df["Age"] &gt; 28</span>]</span>
                            <span className="text-[10px] text-slate-500 leading-tight block">Example: Age greater than 28</span>
                        </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Edit className="w-5 h-5 text-amber-500 mr-2" />
                        🔟 Updating Values with loc
                  </h3>
                   <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 p-4 rounded-xl shadow-sm">
                        <p className="text-[13px] text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">You can assign new values using <code>loc</code>.</p>
                        
                         <button onClick={() => runDemo('run_update')} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 rounded-lg hover:border-amber-400 group relative text-left w-full shadow-sm">
                            <div className="absolute top-2 right-2 text-[9px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100">RUN UPDATE</div>
                            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block mb-1 mt-1">df.loc[1, "Age"] = <span className="text-emerald-600 dark:text-emerald-400">32</span></span>
                            <span className="text-[10px] text-slate-500 leading-tight block">Example: change Age of Sara (Row label 1).</span>
                        </button>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <BarChart className="w-5 h-5 text-indigo-500 mr-2" />
                        1️⃣1️⃣ Visualization Example & 1️⃣2️⃣ Real-World Example
                  </h3>
                   <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 p-4 rounded-xl shadow-sm">
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">We can visualize selected rows!</p>
                        <code className="text-[10px] sm:text-[11px] bg-white dark:bg-slate-950 font-bold p-3 rounded block w-full shadow-inner border border-indigo-100 dark:border-indigo-900 mb-4 whitespace-pre-wrap">
import matplotlib.pyplot as plt

df.<span className="text-emerald-500">loc[0:2]</span>.plot(x="Name", y="Age", kind="bar")
plt.title("Age of Selected Employees")
plt.show()
                        </code>
                         <pre className="text-[10px] sm:text-[11px] font-mono text-center justify-center flex flex-col items-center text-indigo-400 font-bold bg-white dark:bg-slate-900/80 p-3 shadow-inner rounded border border-indigo-100 dark:border-indigo-900/30 leading-[1.2]">
{`Age
│
│ █
│ █     █
│ █  █  █
└────────────
John Sara Mike`}
                         </pre>

                         <div className="mt-6 pt-4 border-t border-indigo-200 dark:border-indigo-800/50">
                             <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Imagine a sales dataset:</p>
                             <button onClick={() => runDemo('run_real_world')} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 rounded-lg hover:border-indigo-400 group relative text-left w-full shadow-sm">
                                <div className="absolute top-2 right-2 text-[9px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100">RUN SALES</div>
                                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block mb-1 mt-1">df.loc[df["Price"] &gt; 30000]</span>
                                <span className="text-[10px] text-slate-500 leading-tight block">Select products priced above 30000. Useful in business analytics.</span>
                            </button>
                         </div>
                  </div>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣3️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-5 rounded-xl shadow-sm relative">
                      <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200">❌ Confusing loc with iloc</div>
                      
                      <table className="w-full text-left text-[11px] mb-4 border border-rose-100 dark:border-rose-900/50 rounded overflow-hidden">
                             <thead className="bg-white dark:bg-slate-900">
                               <tr><th className="p-2 border-b border-rose-100 dark:border-rose-900/50">Method</th><th className="p-2 border-b border-rose-100 dark:border-rose-900/50">Selection Type</th><th className="p-2 border-b border-rose-100 dark:border-rose-900/50">Example</th></tr>
                             </thead>
                             <tbody className="bg-white/50 dark:bg-slate-900/50">
                               <tr className="border-b border-rose-50 dark:border-slate-800"><td className="p-2 font-bold text-violet-600 dark:text-violet-400">loc</td><td className="p-2">label-based</td><td className="p-2">df.loc[1] → label</td></tr>
                               <tr className="border-b border-rose-50 dark:border-slate-800"><td className="p-2 font-bold text-fuchsia-600 dark:text-fuchsia-400">iloc</td><td className="p-2">position-based</td><td className="p-2">df.iloc[1] → position</td></tr>
                             </tbody>
                        </table>

                        <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200 mt-6 pt-4 border-t border-rose-200 dark:border-rose-800/50">❌ Using column index instead of name</div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-3">
                            <button onClick={() => runDemo('run_mistake')} className="flex-1 bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900 p-2 rounded border border-rose-200 dark:border-rose-800 text-center transition-colors group">
                                <p className="text-[11px] text-rose-600 dark:text-rose-400 font-mono font-bold block">
                                  df.loc[:, 1]
                                </p>
                                <p className="text-center text-[10px] font-bold text-rose-500 mt-1 uppercase">Wrong (Click to test)</p>
                            </button>
                            <div className="flex-1 bg-white dark:bg-slate-950 p-2 rounded border border-emerald-200 dark:border-emerald-800 shadow-inner text-center">
                                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-bold block">
                                  df.loc[:, "Age"]
                                </p>
                                <p className="text-center text-[10px] font-bold text-emerald-500 mt-1 uppercase">Correct</p>
                            </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣4️⃣ Tips & Tricks (Professional Advice)
                  </h3>

                  <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 1 — Use loc for filtering</span>
                             <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800">
                                df.loc[df["Salary"] &gt; 50000]
                            </code>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-2">Very common in data analysis pipelines.</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 2 — Use loc to update datasets</span>
                            <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800 whitespace-pre-wrap">
                                df.loc[df["Age"] &lt; 25, "Age"] = 25
                            </code>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-2">Used heavily in data cleaning to cap outliers.</p>
                          </div>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 3 — Combine with multiple conditions</span>
                            <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800 whitespace-pre-wrap">
                                df.loc[(df["Age"] &gt; 25) &amp; (df["City"] == "Delhi")]
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-violet-400" />
                     Execution Console
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
                        <Crosshair className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-5 font-sans leading-relaxed">Click interactive buttons on the left to execute Pandas <code className="text-violet-500/50 block mt-1">.loc[]</code> operations!</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Anna') || line.includes('Laptop') || line.includes('Phone') || line.includes('Tablet') ? 'text-sky-300' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Index') || line.includes('Product') || line.includes('Price') || line.includes('Sales') ? 'text-violet-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('KeyError') || line.includes('CRASH') ? 'text-rose-400 font-bold' :
                              line.match(/^\s*\d+\s+/) || line.match(/^[A-Za-z]+:\s+\d/) ? 'text-emerald-300' :
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

export default PdLoc;
