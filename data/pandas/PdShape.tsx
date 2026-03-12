import React, { useState } from 'react';
import { 
  Maximize, Terminal, Lightbulb, 
  Settings, Database, LayoutGrid,
  Filter, AlertTriangle, CheckCircle2,
  Table as TableIcon, BarChart3, 
  Box, Info, MousePointer2, Play
} from 'lucide-react';

const PdShape: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'usage' | 'comparison' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          '    Name  Age     City',
          '0   John   25  Chennai',
          '1   Sara   30    Delhi',
          '2   Mike   28   Mumbai'
        ];
        break;
      case 'check_shape':
        outLines = [
          '> df.shape',
          '(3, 3)',
          '',
          '> # Row Position [0]: 3',
          '> # Col Position [1]: 3'
        ];
        break;
      case 'extract_rows':
        outLines = [
          '> rows = df.shape[0]',
          '> print(f"Total Rows: {rows}")',
          'Total Rows: 3'
        ];
        break;
      case 'extract_cols':
        outLines = [
          '> cols = df.shape[1]',
          '> print(f"Total Columns: {cols}")',
          'Total Columns: 3'
        ];
        break;
      case 'filter_shape':
        outLines = [
          '> # Filter Age > 26',
          '> filtered_df = df[df["Age"] > 26]',
          '> print(filtered_df.shape)',
          '(2, 3)',
          '',
          '> # 1 row filtered out, dimensions updated.'
        ];
        break;
      case 'large_dataset':
        outLines = [
          '> df_large = pd.read_csv("sales_data.csv")',
          '> df_large.shape',
          '(100000, 12)',
          '',
          '> # Insight: 1.2M total data points identified instantly.'
        ];
        break;
      case 'len_vs_shape':
        outLines = [
          '> print(f"Shape: {df.shape}")',
          'Shape: (3, 3)',
          '> print(f"Len: {len(df)}")',
          'Len: 3',
          '',
          '> # len() only gives vertical count (rows).'
        ];
        break;
      case 'error_call':
        outLines = [
          '> df.shape()',
          'TypeError: \'tuple\' object is not callable',
          '',
          '> # ❌ ERROR: shape is an attribute, NOT a function!',
          '> # Correct: df.shape'
        ];
        break;
      default:
        outLines = ['Action not recognized.'];
    }
    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200 leading-relaxed">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/30 rounded-2xl mb-6 shadow-sm border border-rose-200 dark:border-rose-800/50 group hover:scale-105 transition-transform">
          <Maximize className="w-10 h-10 text-rose-600 dark:text-rose-400 group-hover:rotate-12 transition-transform" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Dimensions <code className="text-rose-600 dark:text-rose-400 text-3xl sm:text-4xl bg-rose-50 dark:bg-rose-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.shape</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Know your boundaries. The <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">shape</code> attribute provides instant structural metadata about your dataset's magnitude.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-rose-500" />
            Inspection Console
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Box className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Principles
            </button>
             <button
              onClick={() => setActiveTab('usage')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'usage' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <LayoutGrid className="w-4 h-4 mr-1.5" /> 5️⃣-8️⃣ Use Cases
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'comparison' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Info className="w-4 h-4 mr-1.5" /> 9️⃣-1️⃣1️⃣ Geometry
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
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
                  
                  {/* Documentation Notice */}
                  <div className="bg-rose-50 dark:bg-rose-900/10 border-l-4 border-rose-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                          Before analyzing variables, an analyst must first verify the <strong>volume</strong>. <code>shape</code> provides the row and column count instantly without counting items manually.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg tracking-tight">
                      <Maximize className="w-5 h-5 text-rose-500 mr-2" />
                      1️⃣ What is shape in Pandas?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>shape</code> is a Pandas attribute that returns the dimensions of a DataFrame or Series as a tuple representing (rows, columns).
                    </p>
                    <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center">
                        <div className="flex items-end gap-1 mb-2">
                           <div className="w-4 h-4 rounded-sm bg-rose-500"></div>
                           <div className="w-4 h-4 rounded-sm bg-rose-400"></div>
                           <div className="w-4 h-4 rounded-sm bg-rose-300"></div>
                        </div>
                        <p className="font-bold text-rose-600 text-sm">(3, 3)</p>
                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Magnitude Detected</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6 tracking-tight">
                      <LayoutGrid className="w-5 h-5 text-indigo-500 mr-2" />
                      2️⃣ Why shape is Important
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                         {['Understand size', 'Verify loading', 'Post-filter check', 'Dataset monitoring'].map((item) => (
                           <div key={item} className="p-3 bg-indigo-50/30 dark:bg-indigo-900/10 text-slate-700 dark:text-slate-300 rounded-xl border border-indigo-100 dark:border-indigo-800/50 flex items-center">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 mr-2 shrink-0" />
                              <span className="text-[11px] font-bold">{item}</span>
                           </div>
                         ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-widest text-slate-500">
                       <Settings className="w-4 h-4 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto shadow-inner relative group">
                       <code className="text-rose-400 font-mono text-sm block">
                         {"DataFrame.shape"}
                       </code>
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <AlertTriangle className="w-4 h-4 text-rose-500/50" />
                       </div>
                    </div>
                    <p className="text-[10px] text-rose-500 font-bold mt-2 pl-1 italic">Notice: It is an ATTRIBUTE. Do not use parentheses ()!</p>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                       <TableIcon className="w-5 h-5 text-emerald-500 mr-2" />
                       4️⃣ Initialize Workspace
                    </h3>
                    <button onClick={() => runDemo('show_base')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-rose-500 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                        <div className="bg-rose-100 dark:bg-rose-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <Database className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Load Base Sample</p>
                          <p className="text-xs text-slate-500 italic">"Name, Age, City (3x3 grid)"</p>
                        </div>
                        <code className="text-[10px] font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/30 px-2 py-1 rounded">EXECUTE</code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'usage' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <Box className="w-5 h-5 text-rose-500 mr-2" />
                        5️⃣ & 6️⃣ Inspecting Components
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                       <button onClick={() => runDemo('check_shape')} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 text-left hover:border-rose-500 transition-all shadow-sm">
                          <p className="text-[10px] font-bold text-rose-600 mb-2 uppercase tracking-widest leading-none">Complete Dimensions</p>
                          <code className="text-[11px] font-bold block mb-1">df.shape</code>
                          <p className="text-[10px] text-slate-500 italic">Returns a tuple (3, 3)</p>
                       </button>
                       <div className="flex flex-col gap-2">
                          <button onClick={() => runDemo('extract_rows')} className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-left hover:border-sky-500 transition-all flex items-center justify-between group">
                             <div className="flex items-center">
                                <span className="text-[10px] font-bold text-sky-600 mr-3">ROWS:</span>
                                <code className="text-[10px] font-bold opacity-70">df.shape[0]</code>
                             </div>
                             <Play className="w-3 h-3 text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                          <button onClick={() => runDemo('extract_cols')} className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-left hover:border-emerald-500 transition-all flex items-center justify-between group">
                             <div className="flex items-center">
                                <span className="text-[10px] font-bold text-emerald-600 mr-3">COLS:</span>
                                <code className="text-[10px] font-bold opacity-70">df.shape[1]</code>
                             </div>
                             <Play className="w-3 h-3 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                       </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <Filter className="w-5 h-5 text-amber-500 mr-2" />
                        7️⃣ Dynamics After Filtering
                    </h3>
                    <div className="mt-4 p-5 bg-amber-50/20 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-2xl relative group overflow-hidden cursor-pointer" onClick={() => runDemo('filter_shape')}>
                       <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-medium italic">"Monitor how operations prune your dataset's magnitude."</p>
                       <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800 font-mono">
                          {'df[df["Age"] > 26].shape'}
                       </code>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight font-sans">
                        <Maximize className="w-5 h-5 text-indigo-500 mr-2" />
                        8️⃣ Large Dataset Monitoring
                    </h3>
                    <button onClick={() => runDemo('large_dataset')} className="w-full text-left mt-3 p-4 bg-indigo-50/20 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/50 rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-between">
                       <div>
                          <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold mb-1 uppercase tracking-widest leading-none">Big Data Insight</p>
                          <code className="text-[11px] font-mono leading-none">df.shape # Output: (100000, 12)</code>
                       </div>
                       <div className="p-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg">
                          <Maximize className="w-4 h-4 text-indigo-500" />
                       </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'comparison' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <BarChart3 className="w-5 h-5 text-rose-500 mr-2" />
                        9️⃣ Visualization Distribution
                    </h3>
                    <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 mt-4">
                        <code className="text-[10px] block text-emerald-400 mb-4 whitespace-pre-wrap">
{`import matplotlib.pyplot as plt

df.plot(x="Name", y="Age", kind="bar")
plt.title("Age Distribution")
plt.show()`}
                        </code>
                        <div className="flex flex-col items-center">
                           <div className="w-[180px] h-20 border-b border-l border-slate-700 flex items-end justify-around pb-0.5 px-2 relative">
                              <div className="w-[15%] bg-rose-500 h-[60%]"></div>
                              <div className="w-[15%] bg-rose-500 h-[80%]"></div>
                              <div className="w-[15%] bg-rose-500 h-[70%]"></div>
                              <div className="absolute right-0 top-0 opacity-10"><BarChart3 className="w-12 h-12" /></div>
                           </div>
                           <div className="w-[180px] flex justify-around mt-1">
                              {['John', 'Sara', 'Mike'].map(n => <span key={n} className="text-[8px] text-slate-600 font-bold">{n}</span>)}
                           </div>
                        </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <Info className="w-5 h-5 text-sky-500 mr-2" />
                        1️⃣1️⃣ shape vs len()
                    </h3>
                    <button onClick={() => runDemo('len_vs_shape')} className="w-full text-left mt-4 group">
                       <table className="w-full text-left text-[11px] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                          <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                            <tr><th className="p-3">Method</th><th className="p-3">Meaning</th></tr>
                          </thead>
                          <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-mono font-bold text-rose-500">df.shape</td><td className="p-3">Provides dimensional coordinates (rows AND columns)</td></tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-mono font-bold text-sky-500">len(df)</td><td className="p-3">Provides only vertical length (row count only)</td></tr>
                          </tbody>
                       </table>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                        1️⃣2️⃣ Common Beginner Mistakes
                    </h3>
                    
                    <div className="space-y-4 mt-4">
                       <button onClick={() => runDemo('error_call')} className="w-full text-left p-4 bg-rose-50/50 dark:bg-rose-900/10 border-l-4 border-rose-500 rounded-xl hover:bg-rose-50 transition-colors block group">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2 flex items-center">
                             ❌ Using parentheses
                          </p>
                          <div className="flex gap-4 mb-2">
                             <code className="text-[10px] text-rose-500 line-through">df.shape()</code>
                             <code className="text-[10px] text-emerald-500 font-bold">df.shape</code>
                          </div>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium italic">"shape is an attribute, intended for metadata lookup, not execution!"</p>
                       </button>

                       <div className="p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl">
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-1">❌ Position Confusion</p>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                             <div className="p-2 bg-white dark:bg-slate-900 rounded border border-amber-100 dark:border-amber-800 text-center"><span className="text-[9px] font-bold text-rose-600 block">[0] ROWS</span></div>
                             <div className="p-2 bg-white dark:bg-slate-900 rounded border border-amber-100 dark:border-amber-800 text-center"><span className="text-[9px] font-bold text-rose-600 block">[1] COLS</span></div>
                          </div>
                       </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣3️⃣ Professional Tips & Tricks
                    </h3>

                    <div className="space-y-4 mt-4 font-sans">
                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-rose-100 dark:bg-rose-900/30 p-2 rounded-lg mr-4 text-rose-600 font-bold shrink-0">01</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Verify Loading Health</p>
                               <p className="text-[11px] text-slate-500 leading-relaxed italic">"Always check .shape immediately after read_csv() to ensure no columns were skipped or data truncated."</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg mr-4 text-emerald-600 font-bold shrink-0">02</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none text-sans">Post-Cleaning Audit</p>
                               <p className="text-[11px] text-slate-500 mt-2 mb-3 leading-relaxed">Check how many rows survive after dropping missing values:</p>
                               <code className="text-[10px] bg-slate-950 p-2.5 rounded block text-emerald-400 border border-slate-800 shadow-inner font-bold w-fit">
                                 {"df.dropna().shape"}
                               </code>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group hover:border-violet-500 transition-colors cursor-pointer" onClick={() => runDemo('check_shape')}>
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-4 text-indigo-600 font-bold shrink-0">03</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">The Inspection Trinity</p>
                               <div className="flex gap-2 mt-3">
                                  {['shape', 'head()', 'info()'].map(tag => (
                                    <code key={tag} className="text-[8px] sm:text-[10px] bg-slate-100 dark:bg-slate-950 px-2 py-0.5 rounded border dark:border-slate-800 text-indigo-400 font-bold">{tag}</code>
                                  ))}
                               </div>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-rose-500/70" />
                     Dimensional Log
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
                        <Box className="w-12 h-12 mb-4 opacity-10" />
                        <span className="text-[11px] font-bold uppercase tracking-widest opacity-40">Probe DataFrame Geometry</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Value') || line.includes('Total') ? 'text-rose-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1' :
                              line.includes('TypeError') || line.includes('❌') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') ? 'text-sky-300 font-bold' :
                              line.match(/^\s*\d+/) || line.match(/^[A-Z]\s+/) || line.includes('(3, 3)') || line.includes('(2, 3)') ? 'text-emerald-300 font-bold shadow-emerald-500/10' :
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

export default PdShape;
