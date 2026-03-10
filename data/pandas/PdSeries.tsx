import React, { useState } from 'react';
import { 
  Database, Terminal, Lightbulb, 
  Settings, Layers, Hash,
  Zap, Table as TableIcon, 
  BarChart3, AlertTriangle, CheckCircle2,
  List, Layout, MousePointer2, Play
} from 'lucide-react';

const PdSeries: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'creation' | 'operations' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'create_list':
        outLines = [
          '> data = [10, 20, 30, 40]',
          '> s = pd.Series(data)',
          '> print(s)',
          '0    10',
          '1    20',
          '2    30',
          '3    40',
          'dtype: int64',
          '',
          '> # Pandas auto-generated integer index (0-3).'
        ];
        break;
      case 'custom_index':
        outLines = [
          '> data = [10, 20, 30]',
          '> s = pd.Series(data, index=["A", "B", "C"])',
          '> print(s)',
          'Index  Value',
          'A      10',
          'B      20',
          'C      30',
          '',
          '> # Labels "A", "B", "C" are now mapped to values.'
        ];
        break;
      case 'from_dict':
        outLines = [
          '> data = {"a": 100, "b": 200}',
          '> s = pd.Series(data)',
          '> print(s)',
          'a    100',
          'b    200',
          'dtype: int64',
          '',
          '> # Keys became the index, values became the data.'
        ];
        break;
      case 'access_data':
        outLines = [
          '> s = pd.Series([100, 200], index=["a", "b"])',
          '> print(s["a"])  # Access by Label',
          '100',
          '> print(s[0])    # Access by Position',
          '100'
        ];
        break;
      case 'vectorized':
        outLines = [
          '> s = pd.Series([10, 20, 30])',
          '> print(s * 2)',
          '0    20',
          '1    40',
          '2    60',
          'dtype: int64',
          '',
          '> # No loops needed! Faster than standard Python lists.'
        ];
        break;
      case 'to_frame':
        outLines = [
          '> s = pd.Series([10, 20], name="Sales")',
          '> df = s.to_frame()',
          '> print(type(df))',
          "<class 'pandas.core.frame.DataFrame'>",
          '',
          '> # Series converted to 2D DataFrame successfully.'
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
        <div className="inline-flex items-center justify-center p-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl mb-6 shadow-sm border border-sky-200 dark:border-sky-800/50">
          <Layers className="w-10 h-10 text-sky-600 dark:text-sky-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Foundation <code className="text-sky-600 dark:text-sky-400 text-3xl sm:text-4xl bg-sky-50 dark:bg-sky-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">Series</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The building block of data structures. At its core, every DataFrame is just a collection of <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">Series</code> objects.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-sky-500" />
            Series Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Layout className="w-4 h-4 mr-1.5" /> 1️⃣-3️⃣ Intro
            </button>
             <button
              onClick={() => setActiveTab('creation')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'creation' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Database className="w-4 h-4 mr-1.5" /> 4️⃣-7️⃣ Creation
            </button>
            <button
              onClick={() => setActiveTab('operations')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'operations' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Zap className="w-4 h-4 mr-1.5" /> 8️⃣-1️⃣1️⃣ Logic
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣2️⃣-1️⃣3️⃣ Pro Tips
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
                  
                  {/* Documentation Start */}
                  <div className="bg-sky-50 dark:bg-sky-900/10 border-l-4 border-sky-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Think of a <strong>Series</strong> as a single column of a table or a labeled list. It is a one-dimensional array-like object.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg">
                      <Layout className="w-5 h-5 text-sky-500 mr-2" />
                      1️⃣ What is a Pandas Series?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> A Pandas Series is a one-dimensional array-like object that contains data and corresponding labels called an index.
                    </p>
                    <div className="mt-4 flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                        <div className="flex flex-col items-center">
                           <div className="flex gap-4 mb-2 opacity-50 text-[10px] font-bold uppercase tracking-widest">
                              <span>Index</span>
                              <span>Value</span>
                           </div>
                           <div className="space-y-1">
                              {[0, 1, 2].map(i => (
                                <div key={i} className="flex gap-4">
                                   <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold">{i}</div>
                                   <div className="w-16 h-8 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-xs font-bold">{(i+1)*10}</div>
                                </div>
                              ))}
                           </div>
                        </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                      <Hash className="w-5 h-5 text-indigo-500 mr-2" />
                      2️⃣ Why Series is Important
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                          Building block of a DataFrame.
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                          Supports vectorized (instant) operations.
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                          Allows labeled indexing for faster retrieval.
                        </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-widest text-slate-500">
                       <Settings className="w-4 h-4 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto shadow-inner">
                       <code className="text-sky-400 font-mono text-xs sm:text-sm block">
                         {"pd.Series(data, index=None, dtype=None)"}
                       </code>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                       <div className="p-2.5 bg-sky-50 dark:bg-sky-900/20 rounded-xl border border-sky-100 dark:border-sky-800/50">
                          <p className="text-[10px] font-bold text-sky-600 mb-1">DATA</p>
                          <p className="text-[10px] text-slate-500 leading-tight">List, array, or dict</p>
                       </div>
                       <div className="p-2.5 bg-sky-50 dark:bg-sky-900/20 rounded-xl border border-sky-100 dark:border-sky-800/50">
                          <p className="text-[10px] font-bold text-sky-600 mb-1">INDEX</p>
                          <p className="text-[10px] text-slate-500 leading-tight">Custom labels</p>
                       </div>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'creation' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <List className="w-5 h-5 text-sky-500 mr-2" />
                        4️⃣ & 5️⃣ From Lists
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                       <button onClick={() => runDemo('create_list')} className="p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-left hover:border-sky-500 transition-all group">
                          <p className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-widest">Base List</p>
                          <code className="text-[11px] font-bold text-sky-500">pd.Series([10, 20, 30])</code>
                          <p className="text-[10px] text-slate-500/70 mt-2 font-medium italic">"Implicit integer index."</p>
                       </button>
                       <button onClick={() => runDemo('custom_index')} className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-left hover:border-sky-500 transition-all shadow-sm group">
                          <p className="text-[10px] font-bold text-sky-600 mb-2 uppercase tracking-widest">Labeled List</p>
                          <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 italic">index=["A", "B", "C"]</code>
                          <p className="text-[10px] text-slate-500 mt-2 font-medium">Map meaningful names to data.</p>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Database className="w-5 h-5 text-indigo-500 mr-2" />
                        6️⃣ From Dictionary
                    </h3>
                    <div className="mt-4 p-5 bg-indigo-50/20 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-2xl group cursor-pointer" onClick={() => runDemo('from_dict')}>
                       <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-medium italic">"In dictionaries, keys automatically become labels!"</p>
                       <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800 font-mono">
                         {'data = {"a": 100, "b": 200, "c": 300}'}
                         <br />
                         <span className="text-indigo-500">s = pd.Series(data)</span>
                       </code>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-widest text-slate-500">
                        7️⃣ Accessing Elements
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                       <button onClick={() => runDemo('access_data')} className="flex flex-col p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-sky-500 transition-colors">
                          <span className="text-[10px] font-bold text-sky-600 mb-1">BY LABEL</span>
                          <code className="text-[11px] font-mono leading-none">s["a"]</code>
                       </button>
                       <button onClick={() => runDemo('access_data')} className="flex flex-col p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-sky-500 transition-colors">
                          <span className="text-[10px] font-bold text-indigo-600 mb-1">BY POSITION</span>
                          <code className="text-[11px] font-mono leading-none">s[0]</code>
                       </button>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'operations' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Zap className="w-5 h-5 text-sky-500 mr-2" />
                        8️⃣ Vectorized Operations
                    </h3>
                    <div className="mt-4 p-5 bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-2xl relative overflow-hidden group">
                       <p className="text-xs text-sky-800 dark:text-sky-300 mb-3 leading-relaxed font-bold">FASTER THAN LOOPS</p>
                       <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-4 italic">Mathematical operations apply to the whole Series instantly.</p>
                       <button onClick={() => runDemo('vectorized')} className="group flex items-center">
                          <code className="text-[11px] font-bold text-sky-700 dark:text-sky-400 bg-white dark:bg-slate-950 p-2 rounded shadow-sm border border-sky-100 dark:border-sky-900/50 group-hover:scale-105 transition-transform">
                            {'print(s * 2)'}
                          </code>
                          <Zap className="w-4 h-4 ml-3 text-sky-500 animate-pulse" />
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Settings className="w-5 h-5 text-indigo-500 mr-2" />
                        9️⃣ Series Attributes
                    </h3>
                    <table className="w-full text-left text-[11px] sm:text-xs border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm mt-4">
                       <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                         <tr><th className="p-3">Attribute</th><th className="p-3">Meaning</th></tr>
                       </thead>
                       <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                         <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-mono font-bold text-sky-600">s.index</td><td className="p-3">Fetches the labels</td></tr>
                         <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-mono font-bold text-sky-600">s.values</td><td className="p-3">Fetches the actual data</td></tr>
                         <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-mono font-bold text-sky-600">s.dtype</td><td className="p-3">The underlying data type</td></tr>
                       </tbody>
                    </table>
                  </section>

                  <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                          <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3 flex items-center">
                             <BarChart3 className="w-4 h-4 mr-1.5 text-sky-500" />
                             🔟 Visualization
                          </h4>
                          <code className="text-[9px] block text-sky-400 mb-4 whitespace-pre">
                             {`s = pd.Series([10, 20, 30], \nindex=["A", "B", "C"])`}
                             <br />
                             {`s.plot(kind="bar")`}
                          </code>
                          <div className="flex flex-col items-center">
                             <div className="w-[120px] h-[60px] border-b border-l border-slate-700 flex items-end justify-around pb-0.5">
                                <div className="w-[20%] bg-sky-500/80 h-[40%]"></div>
                                <div className="w-[20%] bg-sky-500/80 h-[70%]"></div>
                                <div className="w-[20%] bg-sky-500/80 h-[95%]"></div>
                             </div>
                             <span className="text-[7px] text-slate-600 font-bold uppercase mt-1 tracking-widest">A B C</span>
                          </div>
                       </div>
                       <div className="bg-sky-900/10 border border-sky-800/30 p-4 rounded-xl text-left hover:bg-sky-900/20 transition-all group">
                          <h4 className="font-bold text-sky-300 text-[10px] uppercase mb-2 flex items-center tracking-widest">
                             <TableIcon className="w-4 h-4 mr-1.5" />
                             1️⃣1️⃣ Real World
                          </h4>
                          <p className="text-[10px] font-bold text-slate-200 mb-1 leading-none">Monthly Sales Tracker</p>
                          <p className="text-[9px] text-slate-400 leading-relaxed italic mb-4">"Track revenue across months using names as labels."</p>
                          <code className="text-[10px] bg-slate-950 p-2 rounded block border border-sky-900/50 text-sky-400 font-mono leading-none">
                             Jan: 1000<br />
                             Feb: 1500<br />
                             Mar: 2000
                          </code>
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
                       <div className="p-4 bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl relative">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2">❌ 1D vs 2D Confusion</p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400">A Series is 1-Dimensional (one list). A DataFrame is 2-Dimensional (a full table). Don't try to pass 2D arrays into a Series constructor!</p>
                       </div>

                       <div className="p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl">
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-1">❌ Index Alignment Trap</p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400">Math operations (like <code>s1 + s2</code>) align by **labels**, not position. If labels don't match, you'll get <code>NaN</code> values!</p>
                       </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣3️⃣ Professional Tips & Tricks
                    </h3>

                    <div className="space-y-4 mt-4">
                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg mr-4 text-sky-600 font-bold shrink-0">01</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">Column Selection</p>
                               <p className="text-[11px] text-slate-500">Choosing a single column from a DataFrame as <code>df["Sales"]</code> always returns a **Series**.</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg mr-4 text-emerald-600 font-bold shrink-0">02</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">Instant Stats</p>
                               <div className="flex flex-wrap gap-2 mt-2">
                                  {['.mean()', '.sum()', '.max()'].map(tag => (
                                    <code key={tag} className="text-[10px] bg-slate-100 dark:bg-slate-950 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 text-emerald-600 font-bold">{tag}</code>
                                  ))}
                               </div>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group hover:border-sky-500 transition-colors cursor-pointer" onClick={() => runDemo('to_frame')}>
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-4 text-indigo-600 font-bold shrink-0">03</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">Promote to DataFrame</p>
                               <code className="text-[10px] bg-slate-950 p-2 rounded block text-sky-400 border border-slate-800 mt-2 font-bold w-fit">s.to_frame()</code>
                               <p className="text-[10px] text-slate-500 mt-2 italic leading-tight">"Useful when moving from a single column back into a analysis pipeline."</p>
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
            <div className="bg-[#0b0c10] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-sky-500/70" />
                     Execution Logs
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
                        <Layers className="w-12 h-12 mb-4 opacity-10" />
                        <span className="text-[11px] font-bold uppercase tracking-widest opacity-40">Initialize Series Pipeline</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Index') || line.includes('Value') || line.includes('Sales') || line.includes('Month') ? 'text-sky-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1' :
                              line.includes('TypeError') || line.includes('❌') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded' :
                              line.match(/^\s*\d+\s+/) || line.match(/^[A-Z]\s+/) || line.match(/^[a-z]\s+/) ? 'text-emerald-300/80' :
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

export default PdSeries;
