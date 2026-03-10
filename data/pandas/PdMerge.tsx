import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  AlertTriangle, Settings, 
  Database, GitMerge, Combine, ArrowLeftRight, CheckCircle2,
  TableProperties,
  Target
} from 'lucide-react';

const PdMerge: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'types' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df1)',
          '   ID  Name',
          '0   1  John',
          '1   2  Sara',
          '2   3  Mike',
          '',
          '> print(df2)',
          '   ID Department',
          '0   1         HR',
          '1   2         IT',
          '2   4    Finance'
        ];
        break;
      case 'run_inner':
        outLines = [
          '> pd.merge(df1, df2, on="ID", how="inner")',
          '   ID  Name Department',
          '0   1  John         HR',
          '1   2  Sara         IT',
          '',
          '> # Only IDs 1 and 2 exist in BOTH datasets.'
        ];
        break;
      case 'run_outer':
        outLines = [
          '> pd.merge(df1, df2, on="ID", how="outer")',
          '   ID  Name Department',
          '0   1  John         HR',
          '1   2  Sara         IT',
          '2   3  Mike        NaN',
          '3   4   NaN    Finance',
          '',
          '> # All IDs are included. Missing matches get NaN.'
        ];
        break;
      case 'run_left':
        outLines = [
          '> pd.merge(df1, df2, on="ID", how="left")',
          '   ID  Name Department',
          '0   1  John         HR',
          '1   2  Sara         IT',
          '2   3  Mike        NaN',
          '',
          '> # All rows from df1 are kept. ID 4 from df2 is dropped.'
        ];
        break;
      case 'run_right_on':
        outLines = [
          '> pd.merge(df1, df2, left_on="EmpID", right_on="ID")',
          '   EmpID  Name  ID Department',
          '0      1  John   1         HR',
          '1      2  Sara   2         IT',
          '',
          '> # Merged using entirely different column names!'
        ];
        break;
      case 'run_real_world':
        outLines = [
          '> pd.merge(orders, customers, on="CustID")',
          '   OrderID  CustID  Amount   Name',
          '0     1001     101     250   Ravi',
          '1     1002     102     150  Meena',
          '',
          '> # SQL-style relational database join successful!'
        ];
        break;
      case 'run_indicator':
        outLines = [
          '> pd.merge(df1, df2, on="ID", how="outer", indicator=True)',
          '   ID  Name Department      _merge',
          '0   1  John         HR        both',
          '1   2  Sara         IT        both',
          '2   3  Mike        NaN   left_only',
          '3   4   NaN    Finance  right_only',
          '',
          '> # indicator=True adds the _merge column to track origins.'
        ];
        break;
      case 'run_suffixes':
        outLines = [
          '> pd.merge(df1, df2, on="ID", suffixes=("_emp", "_dept"))',
          '   ID Name_emp Name_dept',
          '0   1     John   John_HR',
          '1   2     Sara   Sara_IT',
          '',
          '> # Handled identical column names cleanly!'
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
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-2xl mb-6 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <Combine className="w-10 h-10 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Relational <code className="text-teal-600 dark:text-teal-400 text-3xl sm:text-4xl bg-teal-50 dark:bg-teal-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.merge()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In Pandas, <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">merge()</code> is the high-performance equivalent of SQL JOIN operations, used to combine DataFrames based on a common matching column or key.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-teal-500" />
            Merge Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('types')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'types' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ArrowLeftRight className="w-4 h-4 mr-1.5" /> 5️⃣-8️⃣ JOIN Types
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <GitMerge className="w-4 h-4 mr-1.5" /> 9️⃣-1️⃣1️⃣ Advanced
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣2️⃣-1️⃣4️⃣ Tips
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
                  <div className="bg-teal-50 dark:bg-teal-900/10 border-l-4 border-teal-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          <code>merge()</code> is primarily used when joining DataFrames on <strong>columns</strong>, whereas <code>join()</code> is typically used for index-based alignment.
                        </p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                    <Database className="w-5 h-5 text-teal-500 mr-2" />
                    1️⃣ What is <code className="text-teal-500 font-mono ml-2">merge()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-3 pb-2 text-sm leading-relaxed">
                      <p><strong>Definition:</strong> <code>pd.merge()</code> is a Pandas top-level function used to combine two DataFrames based on a shared common column or key.</p>
                      <p>In simple terms: It acts identically to a SQL <code className="text-teal-600 dark:text-teal-400 font-bold">JOIN</code> clause, combining rows vertically from tables that share a matching key map.</p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                    2️⃣ Why merge() is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">
                      <div className="grid grid-cols-2 gap-2 mt-2">
                         <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 p-2 rounded text-xs font-bold text-center border border-emerald-100 dark:border-emerald-800/50">Combine Datasets</div>
                         <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-2 rounded text-xs font-bold text-center border border-blue-100 dark:border-blue-800/50">SQL-Style Joins</div>
                         <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 p-2 rounded text-xs font-bold text-center border border-indigo-100 dark:border-indigo-800/50">Relational Ops</div>
                         <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-800 dark:text-fuchsia-300 p-2 rounded text-xs font-bold text-center border border-fuchsia-100 dark:border-fuchsia-800/50">Connect Maps</div>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                   <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center font-mono text-[13px] font-bold text-slate-700 dark:text-slate-300 shadow-sm overflow-x-auto whitespace-nowrap">
                      pd.merge(<span className="text-blue-500 font-normal">left_df</span>, <span className="text-fuchsia-500 font-normal">right_df</span>, <span className="text-teal-500">on="column_name"</span>, <span className="text-emerald-500">how="inner"</span>)
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <TableProperties className="w-5 h-5 text-indigo-500 mr-2" />
                        4️⃣ Creating Example Datasets
                  </h3>
                  
                  <button onClick={() => runDemo('show_base')} className="text-left group w-full">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">BUILD TABLES</div>
                         <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
{`import pandas as pd

df1 = pd.DataFrame({
    "ID": [1, 2, 3], 
    "Name": ["John", "Sara", "Mike"]
})

df2 = pd.DataFrame({
    "ID": [1, 2, 4], 
    "Department": ["HR", "IT", "Finance"]
})`}
                        </pre>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 font-bold mb-1">Look closely at the IDs:</p>
                        <ul className="text-[10px] text-slate-500 pl-4 list-disc space-y-1">
                          <li>IDs 1 and 2 exist in BOTH datasets.</li>
                          <li>ID 3 only exists in df1.</li>
                          <li>ID 4 only exists in df2.</li>
                        </ul>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'types' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                          <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                                <Combine className="w-5 h-5 text-teal-500 mr-2" />
                                5️⃣ Inner Merge <span className="text-xs text-slate-400 font-normal ml-2">(Default)</span>
                          </h3>
                          <button onClick={() => runDemo('run_inner')} className="text-left group w-full h-full pb-2">
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-500 transition-colors shadow-sm relative h-full flex flex-col justify-between">
                                <div>
                                    <div className="absolute top-3 right-3 text-[9px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">INNER</div>
                                    <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block mb-2 w-fit">
                                        how=<span className="text-teal-500">"inner"</span>
                                    </code>
                                    <p className="text-[10px] text-slate-500 leading-relaxed max-w-[90%]">Keeps <b>ONLY</b> rows with keys that exist in both datasets (Intersection).</p>
                                </div>
                            </div>
                          </button>
                      </div>

                      <div>
                          <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                                <GitMerge className="w-5 h-5 text-amber-500 mr-2" />
                                6️⃣ Outer Merge
                          </h3>
                          <button onClick={() => runDemo('run_outer')} className="text-left group w-full h-full pb-2">
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-500 transition-colors shadow-sm relative h-full flex flex-col justify-between">
                                <div>
                                    <div className="absolute top-3 right-3 text-[9px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">OUTER</div>
                                    <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block mb-2 w-fit">
                                        how=<span className="text-amber-500">"outer"</span>
                                    </code>
                                    <p className="text-[10px] text-slate-500 leading-relaxed max-w-[90%]">Keeps <b>EVERYTHING</b> from both datasets. Missing matches are filled with NaN (Union).</p>
                                </div>
                            </div>
                          </button>
                      </div>

                      <div>
                          <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                                <ArrowLeftRight className="w-5 h-5 text-blue-500 mr-2" />
                                7️⃣ Left Merge
                          </h3>
                          <button onClick={() => runDemo('run_left')} className="text-left group w-full h-full pb-4">
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-500 transition-colors shadow-sm relative h-full">
                                <div className="absolute top-3 right-3 text-[9px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">LEFT</div>
                                <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block mb-2 w-fit">
                                    how=<span className="text-blue-500">"left"</span>
                                </code>
                                <p className="text-[10px] text-slate-500 leading-relaxed max-w-[90%]">Keeps all rows from the Left df (df1). Non-matches from df2 get NaNs.</p>
                            </div>
                          </button>
                      </div>

                       <div>
                          <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                                <ArrowLeftRight className="w-5 h-5 text-fuchsia-500 mr-2" />
                                8️⃣ Right Merge
                          </h3>
                          <button className="text-left group w-full h-full pb-4 cursor-default">
                            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 transition-colors relative h-full opacity-80">
                                <div className="absolute top-3 right-3 text-[9px] font-bold text-slate-400 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">RIGHT</div>
                                <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block mb-2 w-fit">
                                    how=<span className="text-fuchsia-500">"right"</span>
                                </code>
                                <p className="text-[10px] text-slate-500 leading-relaxed max-w-[90%]">Keeps all rows from the Right df (df2). Non-matches from df1 get NaNs.</p>
                            </div>
                          </button>
                      </div>

                  </div>
                </div>
              )}

               {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Combine className="w-5 h-5 text-indigo-500 mr-2" />
                        9️⃣ Multi-Column Merge
                  </h3>
                   <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-sm">
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">You can require a match on multiple columns to ensure uniqueness.</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit">
                            {"pd.merge(df1, df2, on=['ID', 'Year'])"}
                        </code>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                   <Target className="w-5 h-5 text-amber-500 mr-2" />
                        🔟 Merging with Different Keys
                  </h3>
                  <button onClick={() => runDemo('run_right_on')} className="text-left group w-full mb-6">
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 hover:border-amber-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MAPPED KEYS</div>
                        <p className="text-[11px] text-slate-700 dark:text-slate-300 font-bold mb-2">What if the ID column has a different name in df1 vs df2?</p>
                        <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner px-2 py-2 rounded block mb-2 w-full overflow-x-auto whitespace-nowrap">
                            pd.merge(df1, df2,  <span className="text-amber-600">left_on="EmpID"</span>, <span className="text-amber-600">right_on="ID"</span>)
                        </code>
                        <p className="text-[10px] text-slate-500">Uses EmpID from the left table and ID from the right table to match rows.</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Database className="w-5 h-5 text-emerald-500 mr-2" />
                        1️⃣1️⃣ Real-World Example
                  </h3>

                  <button onClick={() => runDemo('run_real_world')} className="text-left group w-full">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 border-y border-r border-emerald-200 dark:border-slate-700 rounded-r-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SQL JOIN</div>
                          <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300 mb-2">Customer and Orders Tables</h4>
                          <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mb-3">Combining purchase history with user identities.</p>
                          <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit">
                            {"pd.merge(orders, customers, on='CustID')"}
                          </code>
                        </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <ArrowLeftRight className="w-5 h-5 text-blue-500 mr-2" />
                        1️⃣2️⃣ merge() vs join()
                  </h3>
                   <table className="w-full text-left text-[11px] sm:text-xs mb-4 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm">
                             <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                               <tr><th className="p-3 border-b border-slate-200 dark:border-slate-700">Feature</th><th className="p-3 border-b border-slate-200 dark:border-slate-700 font-mono text-teal-600 dark:text-teal-400">merge()</th><th className="p-3 border-b border-slate-200 dark:border-slate-700 font-mono text-fuchsia-600 dark:text-fuchsia-400">join()</th></tr>
                             </thead>
                             <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-bold">Joins Based On</td><td className="p-3">Columns (Highly flexible)</td><td className="p-3">Index</td></tr>
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-bold">Calling Method</td><td className="p-3">pd.merge(df1, df2)</td><td className="p-3">df1.join(df2)</td></tr>
                             </tbody>
                   </table>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣3️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-5 rounded-xl shadow-sm relative">
                      <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200">❌ Forgetting the "on" argument</div>
                       <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 block">Without <code>on="col"</code>, pandas merges on ALL common column names. If there are none, you might accidentally create a massive Cross Join (Cartesian Product).</p>

                       <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200 mt-6 pt-4 border-t border-rose-200 dark:border-rose-800/50">❌ Ignoring _x and _y overlapping columns</div>
                       <p className="text-[11px] text-slate-600 dark:text-slate-400 block mb-2">If both DataFrames have a column named "Age" but you join on "ID", Pandas automatically renames them to <code>Age_x</code> and <code>Age_y</code> to prevent collisions!</p>
                       <p className="text-[11px] text-teal-600 font-bold block mb-2">To fix this, use Tip 1 below! 👇</p>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣4️⃣ Tips & Tricks
                  </h3>

                  <div className="space-y-4">
                      
                      <button onClick={() => runDemo('run_suffixes')} className="text-left group w-full">
                        <div className="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-800/80 transition-colors p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative cursor-pointer">
                             <div className="absolute top-2 right-2 text-[9px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100">RUN SUFFIXES TEST</div>
                            <div className="w-full">
                                <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 1 — Control Overlapping Names</span>
                                <code className="text-[10px] sm:text-[11px] font-bold text-teal-600 dark:text-teal-400 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800 w-full overflow-x-auto whitespace-nowrap">
                                    {"pd.merge(df1, df2, on='ID', suffixes=('_emp', '_dept'))"}
                                </code>
                                <p className="text-[10px] text-slate-500 leading-relaxed mt-2 font-bold max-w-full">This replaces the default `_x` and `_y` with names you provide.</p>
                            </div>
                        </div>
                      </button>

                       <button onClick={() => runDemo('run_indicator')} className="text-left group w-full">
                          <div className="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-800/80 transition-colors p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative cursor-pointer">
                              <div className="absolute top-2 right-2 text-[9px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100">RUN INDICATOR TEST</div>
                              <div className="w-full">
                                <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 2 — Use indicator=True</span>
                                <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800 whitespace-pre-wrap">
                                    {"pd.merge(df1, df2, on='ID', how='outer', indicator=True)"}
                                </code>
                                <p className="text-[11px] text-slate-500 leading-relaxed mt-2">Adds a new <code>_merge</code> column to output telling you exactly where the row data came from (both, left_only, right_only).</p>
                              </div>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-teal-400" />
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
                        <Combine className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-5 font-sans leading-relaxed">Click interactive buttons on the left to execute Pandas <code className="text-teal-500/50 block mt-1">.merge()</code> joins!</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Ravi') || line.includes('Meena') ? 'text-sky-300' :
                              line.includes('ID') || line.includes('Name') || line.includes('Department') || line.includes('OrderID') || line.includes('CustID') || line.includes('Amount') || line.includes('_merge') ? 'text-teal-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('HR') || line.includes('IT') || line.includes('Finance') ? 'text-emerald-400' :
                              line.includes('NaN') || line.includes('left_only') || line.includes('right_only') ? 'text-rose-400 font-bold' :
                              line.includes('both') ? 'text-amber-300' :
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

export default PdMerge;
