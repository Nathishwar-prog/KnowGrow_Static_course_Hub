import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  AlertTriangle, Settings, 
  Database, GitMerge, Combine, ArrowLeftRight, XCircle
} from 'lucide-react';

const PdJoin: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'types' | 'handling' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df1)',
          '      Age',
          'John   25',
          'Sara   30',
          'Mike   35',
          '',
          '> print(df2)',
          '      Salary',
          'John   50000',
          'Mike   60000',
          'Anna   55000'
        ];
        break;
      case 'run_join_left':
        outLines = [
          '> df1.join(df2, how="left")',
          '      Age   Salary',
          'John   25  50000.0',
          'Sara   30      NaN',
          'Mike   35  60000.0',
          '',
          '> # Kept all df1 (Left) indexes. Sara gets NaN salary.'
        ];
        break;
      case 'run_join_inner':
        outLines = [
          '> df1.join(df2, how="inner")',
          '      Age  Salary',
          'John   25   50000',
          'Mike   35   60000',
          '',
          '> # Kept only matching indexes (John & Mike).'
        ];
        break;
      case 'run_join_outer':
        outLines = [
          '> df1.join(df2, how="outer")',
          '       Age   Salary',
          'Anna   NaN  55000.0',
          'John  25.0  50000.0',
          'Mike  35.0  60000.0',
          'Sara  30.0      NaN',
          '',
          '> # Kept ALL indexes from both DataFrames.'
        ];
        break;
      case 'run_join_right':
        outLines = [
          '> df1.join(df2, how="right")',
          '       Age  Salary',
          'John  25.0   50000',
          'Mike  35.0   60000',
          'Anna   NaN   55000',
          '',
          '> # Kept all df2 (Right) indexes.'
        ];
        break;
      case 'run_error_overlap':
        outLines = [
          '> df1.join(df2)',
          'ValueError: columns overlap but no suffix specified:',
          "Index(['City'], dtype='object')",
          '',
          '> # ❌ CRASH: DataFrames share a column name.'
        ];
        break;
      case 'run_suffix':
        outLines = [
          '> df1.join(df2, lsuffix="_emp", rsuffix="_hr")',
          '      City_emp  City_hr',
          'John        NY       NY',
          'Mike        LA       SF',
          '',
          '> # ✅ Successfully joined by appending suffixes to column names!'
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
        <div className="inline-flex items-center justify-center p-4 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-2xl mb-6 shadow-sm border border-fuchsia-200 dark:border-fuchsia-800/50">
          <GitMerge className="w-10 h-10 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas <code className="text-fuchsia-600 dark:text-fuchsia-400 text-3xl sm:text-4xl bg-fuchsia-50 dark:bg-fuchsia-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">join()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">join()</code> method allows you to easily combine two differently-indexed DataFrames into a single DataFrame based on their <strong>Index labels</strong>!
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-fuchsia-500" />
            Join Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> Basics
            </button>
             <button
              onClick={() => setActiveTab('types')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'types' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Combine className="w-4 h-4 mr-1.5" /> Join Types
            </button>
            <button
              onClick={() => setActiveTab('handling')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'handling' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ArrowLeftRight className="w-4 h-4 mr-1.5" /> Overlapping
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 Tips
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
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                    <Database className="w-5 h-5 text-fuchsia-500 mr-2" />
                    What is <code className="text-fuchsia-500 font-mono ml-2">join()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                      <p><strong>Definition:</strong> <code>join()</code> is a Pandas method used to merge columns of another DataFrame.</p>
                      
                      <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border-l-4 border-fuchsia-500 p-4 mt-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-fuchsia-800 dark:text-fuchsia-200 leading-relaxed">
                          <strong>Key characteristic:</strong> Unlike <code>merge()</code> which uses column values by default, <code>join()</code> aligns DataFrames based on their <strong className="bg-fuchsia-200 dark:bg-fuchsia-800 px-1 rounded text-fuchsia-900 dark:text-fuchsia-100">Index</strong>. It works horizontally!
                        </p>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    Basic Syntax
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center font-mono text-sm font-bold text-slate-700 dark:text-slate-300 shadow-sm overflow-x-auto">
                      df1.join(other_df, <span className="text-blue-500 font-normal">how='left'</span>, <span className="text-amber-500 font-normal">lsuffix=''</span>, <span className="text-emerald-500 font-normal">rsuffix=''</span>)
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Database className="w-5 h-5 text-indigo-500 mr-2" />
                        Creating Example DataFrames
                  </h3>
                  
                  <button onClick={() => runDemo('show_base')} className="text-left group w-full">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DATASET</div>
                         <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
import pandas as pd

<span className="text-slate-400 italic"># Indexes: John, Sara, Mike</span>
df1 = pd.DataFrame(
    {'{'} "Age": [25, 30, 35] {'}'}, 
    index=["John", "Sara", "Mike"]
)

<span className="text-slate-400 italic"># Indexes: John, Mike, Anna</span>
df2 = pd.DataFrame(
    {'{'} "Salary": [50000, 60000, 55000] {'}'}, 
    index=["John", "Mike", "Anna"]
)
                        </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'types' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Combine className="w-5 h-5 text-indigo-500 mr-2" />
                        Filtering with <code className="text-indigo-500 font-mono ml-2">how=</code>
                  </h3>
                  
                  <p className="text-[13px] text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      Just like SQL, the <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">how</code> parameter dictates which DataFrame's indexes are kept during the merge. Let's try all 4 variants!
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                      <button onClick={() => runDemo('run_join_left')} className="text-left group w-full">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-500 transition-colors shadow-sm relative">
                            <div className="absolute top-3 right-3 text-[9px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN LEFT</div>
                            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1 tracking-wide">Left Join <span className="text-[10px] text-slate-400 font-normal">(Default)</span></h4>
                            <code className="text-[10px] sm:text-[11px] font-bold text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-1 rounded block w-fit mb-2">how='left'</code>
                            <p className="text-[10px] text-slate-500">Uses <strong className="text-slate-700 dark:text-slate-300">df1</strong>'s indexes. Missing target rows become NaN.</p>
                        </div>
                      </button>

                      <button onClick={() => runDemo('run_join_inner')} className="text-left group w-full">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-500 transition-colors shadow-sm relative">
                            <div className="absolute top-3 right-3 text-[9px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN INNER</div>
                            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1 tracking-wide">Inner Join</h4>
                            <code className="text-[10px] sm:text-[11px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-1 rounded block w-fit mb-2">how='inner'</code>
                            <p className="text-[10px] text-slate-500">Only keeps indexes that exist in <strong className="text-slate-700 dark:text-slate-300">BOTH</strong> DataFrames.</p>
                        </div>
                      </button>

                      <button onClick={() => runDemo('run_join_outer')} className="text-left group w-full">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-500 transition-colors shadow-sm relative">
                            <div className="absolute top-3 right-3 text-[9px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN OUTER</div>
                            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1 tracking-wide">Outer Join</h4>
                            <code className="text-[10px] sm:text-[11px] font-bold text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-1 rounded block w-fit mb-2">how='outer'</code>
                            <p className="text-[10px] text-slate-500">Keeps <strong className="text-slate-700 dark:text-slate-300">ALL</strong> indexes from both DataFrames (Unions them).</p>
                        </div>
                      </button>

                       <button onClick={() => runDemo('run_join_right')} className="text-left group w-full">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-purple-500 transition-colors shadow-sm relative">
                            <div className="absolute top-3 right-3 text-[9px] font-bold text-purple-500 bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN RIGHT</div>
                            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1 tracking-wide">Right Join</h4>
                            <code className="text-[10px] sm:text-[11px] font-bold text-purple-500 bg-purple-50 dark:bg-purple-900/20 px-1 rounded block w-fit mb-2">how='right'</code>
                            <p className="text-[10px] text-slate-500">Uses <strong className="text-slate-700 dark:text-slate-300">target df2</strong>'s indexes as the strict baseline.</p>
                        </div>
                      </button>
                  </div>

                </div>
              )}

               {activeTab === 'handling' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <ArrowLeftRight className="w-5 h-5 text-amber-500 mr-2" />
                        Overlapping Column Names
                  </h3>
                   <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 p-4 rounded-xl shadow-sm">
                        <p className="text-[13px] text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">If both DataFrames share the same column name (like <code className="bg-amber-100 dark:bg-amber-900/50 px-1 rounded">City</code>), they will violently collide when joining side-by-side.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button onClick={() => runDemo('run_error_overlap')} className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 p-3 rounded-lg hover:border-rose-400 group relative text-left">
                                <div className="absolute top-2 right-2 text-[9px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100">RUN CRASH</div>
                                <span className="text-[11px] font-bold text-rose-800 dark:text-rose-300 block mb-1 mt-3">❌ df1.join(df2)</span>
                                <span className="text-[10px] text-rose-600 dark:text-rose-400 opacity-80 leading-tight block">Will trigger ValueError overlapping!</span>
                            </button>
                             <button onClick={() => runDemo('run_suffix')} className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/50 p-3 rounded-lg hover:border-emerald-400 group relative text-left">
                                <div className="absolute top-2 right-2 text-[9px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100">RUN FIX</div>
                                <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 block mb-1 mt-3">✅ lsuffix="_emp", rsuffix="_hr"</span>
                                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 opacity-80 leading-tight block">Renames the duplicated columns automatically.</span>
                            </button>
                        </div>
                  </div>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <XCircle className="w-5 h-5 text-rose-500 mr-2" />
                    Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-5 rounded-xl shadow-sm relative">
                      <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200">❌ Confusing join() with merge()</div>
                      
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 ml-2">Both combine DataFrames horizontally, but they have completely different defaults!</p>
                      
                       <table className="w-full text-left text-[11px] mb-2 border border-rose-100 dark:border-rose-900/50 rounded overflow-hidden">
                             <thead className="bg-white dark:bg-slate-900">
                               <tr><th className="p-2 border-b border-rose-100 dark:border-rose-900/50">Method</th><th className="p-2 border-b border-rose-100 dark:border-rose-900/50">Matching Mechanism</th></tr>
                             </thead>
                             <tbody className="bg-white/50 dark:bg-slate-900/50">
                               <tr className="border-b border-rose-50 dark:border-slate-800"><td className="p-2 font-bold text-fuchsia-600 dark:text-fuchsia-400">df.join()</td><td className="p-2">Matches strictly on <strong>Indexes</strong>.</td></tr>
                               <tr className="border-b border-rose-50 dark:border-slate-800"><td className="p-2 font-bold text-blue-600 dark:text-blue-400">df.merge()</td><td className="p-2">Matches strictly on <strong>Columns</strong>.</td></tr>
                             </tbody>
                        </table>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    Professional Advice
                  </h3>

                  <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 1 — set_index() before joining</span>
                            <p className="text-[11px] text-slate-500 leading-relaxed mb-2">If you have two unindexed CSVs but want to join them on their UserID, set the index first before triggering <code>join()</code>!</p>
                             <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800 whitespace-pre">
                                df1 = df1.set_index("UserID")<br/>
                                df2 = df2.set_index("ID")<br/>
                                <span className="text-fuchsia-600 dark:text-fuchsia-400">df1.join(df2)</span>
                            </code>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 2 — Multiple Joins</span>
                            <p className="text-[11px] text-slate-500 leading-relaxed mb-2">You can pass a LIST of DataFrames to quickly attach multiple datasets via their indexes in one line, as long as they don't have overlapping columns!</p>
                            <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800">
                                df1.join([df2, df3, df4])
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-fuchsia-400" />
                     Data Combination Output
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
                        <GitMerge className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-5 font-sans leading-relaxed">Click interactive buttons on the left to execute Pandas <code className="text-fuchsia-500/50 block mt-1">join(how='...')</code> mechanisms!</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Anna') ? 'text-sky-300' :
                              line.includes('Age') || line.includes('Salary') || line.includes('City') ? 'text-fuchsia-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('NaN') ? 'text-rose-400 font-bold bg-rose-900/30 px-1 rounded' :
                              line.includes('ValueError') || line.includes('CRASH') ? 'text-rose-400 font-bold' :
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

export default PdJoin;
