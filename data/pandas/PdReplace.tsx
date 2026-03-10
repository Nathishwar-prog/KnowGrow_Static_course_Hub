import React, { useState } from 'react';
import { 
  Replace, Terminal, Lightbulb, 
  Settings, Database, ListFilter,
  RefreshCw, AlertTriangle, CheckCircle2,
  Table as TableIcon, SearchCode, Binary,
  ArrowRightLeft, MousePointer2,
  LineChart
} from 'lucide-react';

const PdReplace: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'mapping' | 'regex' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          '    Brand  Status     Price',
          '0   Apple     New     80000',
          '1  Google    Used     50000',
          '2   Apple     Old     40000',
          '3  Xiaomi     NaN     20000'
        ];
        break;
      case 'replace_single':
        outLines = [
          '> df.replace("New", "In-Stock")',
          '    Brand    Status     Price',
          '0   Apple  In-Stock     80000',
          '1  Google      Used     50000',
          '2   Apple       Old     40000',
          '3  Xiaomi       NaN     20000',
          '',
          '> # Successfully replaced a single value across the entire DataFrame!'
        ];
        break;
      case 'replace_multi':
        outLines = [
          '> df.replace(["Used", "Old"], "Second-Hand")',
          '    Brand       Status     Price',
          '0   Apple          New     80000',
          '1  Google  Second-Hand     50000',
          '2   Apple  Second-Hand     40000',
          '3  Xiaomi          NaN     20000',
          '',
          '> # Multiple values mapped to a single replacement.'
        ];
        break;
      case 'replace_dict':
        outLines = [
          '> df.replace({"New": "A1", "Used": "B2"})',
          '    Brand  Status     Price',
          '0   Apple      A1     80000',
          '1  Google      B2     50000',
          '2   Apple     Old     40000',
          '',
          '> # Precision replacement: specific keys to specific values.'
        ];
        break;
      case 'replace_regex':
        outLines = [
          '> # Replace any brand starting with "App" with "Brand-A"',
          '> df.replace(to_replace="^App.*", value="Brand-A", regex=True)',
          '      Brand  Status     Price',
          '0   Brand-A     New     80000',
          '1    Google    Used     50000',
          '2   Brand-A     Old     40000',
          '',
          '> # Regular Expressions enabled for pattern matching!'
        ];
        break;
      case 'replace_null':
        outLines = [
          '> import numpy as np',
          '> df.replace(np.nan, "Unknown")',
          '    Brand   Status     Price',
          '3  Xiaomi  Unknown     20000',
          '',
          '> # Cleaned up missing values with a placeholder string.'
        ];
        break;
      case 'mistake_inplace':
        outLines = [
          '> df.replace("New", "In-Stock")',
          '> print(df.iloc[0]["Status"])',
          '"New"',
          '',
          '> # ❌ PROBLEM: Value did not change permanently!',
          '> # Use: df.replace(..., inplace=True) or re-assign the variable.'
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
          Pandas Data Swap <code className="text-orange-600 dark:text-orange-400 text-3xl sm:text-4xl bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.replace()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Clean anomalies and standardize values. <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">replace()</code> is the ultimate tool for converting inconsistent entries into clean, actionable data.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-orange-500" />
            Translation Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Database className="w-4 h-4 mr-1.5" /> 1️⃣-5️⃣ Fundamentals
            </button>
             <button
              onClick={() => setActiveTab('mapping')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'mapping' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ArrowRightLeft className="w-4 h-4 mr-1.5" /> 6️⃣-8️⃣ Mapping
            </button>
            <button
              onClick={() => setActiveTab('regex')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'regex' ? 'bg-orange-600 text-white shadow-orange-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <SearchCode className="w-4 h-4 mr-1.5" /> 9️⃣-1️⃣1️⃣ Advanced
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
                          Unlike <code>rename()</code> which targets labels, <code>replace()</code> targets the <strong>actual data values</strong> inside your cells.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg">
                      <Replace className="w-5 h-5 text-orange-500 mr-2" />
                      1️⃣ What is <code className="text-orange-500 ml-2">replace()</code>?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>replace()</code> is a Pandas method used to dynamically swap values in a Series or DataFrame. It's essential for mapping categories, cleaning "junk" strings, or standardizing naming differences.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                      <ListFilter className="w-5 h-5 text-sky-500 mr-2" />
                      2️⃣ Why replace() is Important
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                         {['Standardize Data', 'Category Mapping', 'Anomalies Fix', 'Null Value Swap'].map((item) => (
                           <div key={item} className="p-2 bg-sky-50 dark:bg-sky-900/20 text-sky-800 dark:text-sky-300 rounded-lg text-[11px] font-bold text-center border border-sky-100 dark:border-sky-800/50 shadow-sm">
                             {item}
                           </div>
                         ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-widest text-slate-500">
                       <Settings className="w-4 h-4 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto shadow-inner">
                       <code className="text-orange-400 font-mono text-xs sm:text-sm block">
                         {"df.replace(to_replace, value, inplace=False)"}
                       </code>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <TableIcon className="w-5 h-5 text-indigo-500 mr-2" />
                       4️⃣ Creating Example Dataset
                    </h3>
                    <button onClick={() => runDemo('show_base')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-orange-500 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 group-active:scale-[0.98]">
                        <div className="bg-orange-100 dark:bg-orange-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <Database className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Load Inventory Data</p>
                          <p className="text-xs text-slate-500 italic">"Simulates a product inventory with status labels."</p>
                        </div>
                        <code className="text-[10px] font-bold text-orange-500 bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">BUILD</code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'mapping' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <RefreshCw className="w-5 h-5 text-orange-500 mr-2" />
                        5️⃣ Replacing a Single Value
                    </h3>
                    <div className="mt-4 p-5 bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/50 rounded-2xl relative">
                       <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 font-bold uppercase tracking-wide">Swap: "New" → "In-Stock"</p>
                       <button onClick={() => runDemo('replace_single')} className="group flex items-center">
                          <code className="text-[11px] font-bold text-orange-700 dark:text-orange-400 block bg-white dark:bg-slate-950 p-2.5 rounded-lg shadow-sm border border-orange-100 dark:border-orange-900 group-hover:bg-orange-50 dark:group-hover:bg-orange-800 transition-colors">
                            {'df.replace("New", "In-Stock")'}
                          </code>
                          <span className="ml-3 text-[10px] text-orange-500 font-bold animate-pulse">RUN</span>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <ListFilter className="w-5 h-5 text-sky-500 mr-2" />
                        6️⃣ Multiple Values to One
                    </h3>
                    <button onClick={() => runDemo('replace_multi')} className="w-full text-left mt-3">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:shadow-lg transition-all relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-1.5 h-full bg-sky-500"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 italic">"Use a list to group variations into a single standard category."</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800 leading-relaxed shadow-inner">
                          {'df.replace(["Used", "Old"], "Second-Hand")'}
                        </code>
                      </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <RefreshCw className="w-5 h-5 text-indigo-500 mr-2 text-sm" />
                        7️⃣ Dictionary Mapping
                    </h3>
                    <button onClick={() => runDemo('replace_dict')} className="w-full text-left mt-3 p-4 bg-indigo-50/20 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/50 rounded-xl hover:bg-indigo-50 transition-colors transition-all">
                        <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold mb-3 uppercase tracking-widest">Key-Value Precision</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block border-l-2 border-indigo-500 pl-3">
                          {'df.replace({"New": "A1", "Used": "B2"})'}
                        </code>
                        <p className="text-[9px] text-slate-500 mt-2">Replaces 'New' with 'A1' and 'Used' with 'B2' simultaneously.</p>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'regex' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <SearchCode className="w-5 h-5 text-emerald-500 mr-2" />
                        9️⃣ Pattern Matching (Regex)
                    </h3>
                    <div className="mt-4 bg-emerald-50/30 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 p-5 rounded-2xl group cursor-pointer" onClick={() => runDemo('replace_regex')}>
                       <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest leading-none">Power User Move</span>
                          <Binary className="w-4 h-4 text-emerald-400 opacity-40" />
                       </div>
                       <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed italic">"Replace anything starting with 'App' (like Apple or Application) using regular expressions."</p>
                       <code className="text-[10px] sm:text-[11px] font-bold text-emerald-700 dark:text-emerald-300 block bg-white dark:bg-slate-950 p-2.5 rounded shadow-sm border border-emerald-100 dark:border-emerald-900/50 group-hover:border-emerald-500 transition-colors">
                          {'df.replace(to_replace="^App.*", value="Brand-A", regex=True)'}
                       </code>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <RefreshCw className="w-5 h-5 text-rose-500 mr-2" />
                        🔟 Handling Null Values
                    </h3>
                    <button onClick={() => runDemo('replace_null')} className="w-full text-left mt-3">
                       <div className="bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl hover:bg-rose-50 transition-colors flex items-start">
                          <AlertTriangle className="w-5 h-5 text-rose-500 mr-3 shrink-0" />
                          <div>
                            <p className="text-[11px] font-bold text-slate-800 dark:text-white mb-1 leading-none">Placeholder Replacement</p>
                            <p className="text-[10px] text-slate-500 leading-tight mb-3">Replace missing <code>NaN</code> objects with descriptive strings like "Unknown".</p>
                            <code className="text-[10px] sm:text-[11px] bg-white dark:bg-slate-950 p-1.5 rounded border border-rose-100 dark:border-rose-900 font-bold text-rose-600">
                             {'df.replace(np.nan, "Unknown")'}
                            </code>
                          </div>
                       </div>
                    </button>
                  </section>

                  <section>
                     <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl mt-8">
                        <h4 className="text-[10px] font-bold text-indigo-400 uppercase mb-3 flex items-center">
                          <LineChart className="w-4 h-4 mr-1.5" />
                          1️⃣1️⃣ Real World Visualization
                        </h4>
                        <div className="flex flex-col items-center">
                            <div className="w-full max-w-[200px] h-20 border-b border-l border-slate-700 relative flex items-end justify-around pb-0.5 mb-2">
                               <div className="w-[15%] bg-orange-500/80 h-[90%]"></div>
                               <div className="w-[15%] bg-orange-500/80 h-[40%]"></div>
                               <div className="w-[15%] bg-orange-500/20 h-[55%] animate-pulse"></div>
                               <div className="absolute top-2 right-2 text-[7px] text-slate-600 uppercase">Values Swapped</div>
                            </div>
                            <span className="text-[8px] text-slate-600 font-bold uppercase tracking-tighter">New Used Unknown</span>
                        </div>
                     </div>
                  </section>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                        1️⃣2️⃣ Common Beginner Mistakes
                    </h3>
                    
                    <div className="space-y-4 mt-4">
                       <button onClick={() => runDemo('mistake_inplace')} className="w-full text-left p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl hover:bg-amber-100/50 transition-all group">
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-2 flex items-center">
                             ❌ Expecting original change
                          </p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight italic">"Just like rename(), replace() is non-destructive by default. You must save the result!"</p>
                          <div className="flex gap-2 mt-4">
                             <code className="text-[9px] bg-slate-950 p-1.5 rounded border border-rose-900/50 text-rose-400 line-through">df.replace("A", "B")</code>
                             <code className="text-[9px] bg-slate-950 p-1.5 rounded border border-emerald-900/50 text-emerald-400 font-bold">df = df.replace("A", "B")</code>
                          </div>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣3️⃣ Tips & Tricks (Professional Advice)
                    </h3>

                    <div className="space-y-4 mt-4 text-sans">
                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start hover:border-orange-200 transition-colors cursor-default">
                            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg mr-4 text-orange-600 font-bold shrink-0">01</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Standardize Before Grouping</p>
                               <p className="text-[11px] text-slate-500 italic">"If you have 'USA', 'U.S.A', and 'United States', replace them all with one string before doing any aggregation!"</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start hover:border-violet-200 transition-colors cursor-default">
                            <div className="bg-violet-100 dark:bg-violet-900/30 p-2 rounded-lg mr-4 text-violet-600 font-bold shrink-0">02</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Method Chaining</p>
                               <code className="text-[10px] sm:text-[11px] bg-slate-950 p-2.5 rounded block text-emerald-400 border border-slate-800 shadow-inner mt-2">
                                 {"df.replace('N/A', 0).replace('None', 0)"}
                               </code>
                               <p className="text-[10px] text-slate-500 mt-2">Chain replacements to clean multiple issues in one line of code.</p>
                            </div>
                         </div>
                    </div>
                  </section>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5 h-[500px] lg:h-auto">
            <div className="bg-[#0b0c0d] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-orange-400" />
                     Swap Engine Out
                  </h3>
                  <div className="flex space-x-1.5 opacity-30">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[500px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-600 animate-pulse flex flex-col items-center justify-center mt-32 px-10 text-center">
                        <RefreshCw className="w-12 h-12 mb-4 opacity-10 rotate-180" />
                        <span className="text-[11px] font-bold uppercase tracking-widest opacity-40">Load Data & Execute Swaps</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Brand') || line.includes('Status') || line.includes('Price') ? 'text-orange-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1' :
                              line.includes('PROBLEM') || line.includes('❌') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded' :
                              line.includes('Apple') || line.includes('Google') || line.includes('Xiaomi') || line.includes('In-Stock') || line.includes('Second-Hand') || line.includes('Unknown') ? 'text-sky-300' :
                              line.match(/^\s*\d+\s+/) || line.match(/^[A-Za-z]+:\s+\d/) ? 'text-emerald-300/80' :
                              'text-slate-400'
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

export default PdReplace;
