import React, { useState } from 'react';
import { 
  SortAsc, SortDesc, Terminal, Lightbulb, 
  Settings, Database, LayoutGrid,
  Filter, AlertTriangle, CheckCircle2,
  Table as TableIcon, BarChart3, 
  History, SlidersHorizontal, Play, MousePointer2
} from 'lucide-react';

const PdSortIndex: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'sorting' | 'logic' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          '       Name  Age',
          '2      Mike   28',
          '0      John   25',
          '1      Sara   30',
          '',
          '> # Notice: Index labels are scattered (2, 0, 1).'
        ];
        break;
      case 'sort_asc':
        outLines = [
          '> # Default: Ascending order',
          '> df.sort_index()',
          '       Name  Age',
          '0      John   25',
          '1      Sara   30',
          '2      Mike   28',
          '',
          '> # Rows rearranged to follow index label order 0 -> 1 -> 2.'
        ];
        break;
      case 'sort_desc':
        outLines = [
          '> df.sort_index(ascending=False)',
          '       Name  Age',
          '2      Mike   28',
          '1      Sara   30',
          '0      John   25',
          '',
          '> # Inverse sorting: Index labels 2 -> 1 -> 0.'
        ];
        break;
      case 'sort_axis1':
        outLines = [
          '> # Sorting by Columns (Alphabetical)',
          '> df.sort_index(axis=1)',
          '       Age  Name',
          '2       28  Mike',
          '0       25  John',
          '1       30  Sara',
          '',
          '> # Axis=1 targeted the column labels ("Age" before "Name").'
        ];
        break;
      case 'time_series':
        outLines = [
          '> # Time-Series Dataset',
          '> print(ts_df)',
          '2024-01-03   200',
          '2024-01-01   100',
          '2024-01-02   150',
          '',
          '> ts_df.sort_index()',
          '2024-01-01   100',
          '2024-01-02   150',
          '2024-01-03   200',
          '',
          '> # Chronic order restored successfully.'
        ];
        break;
      case 'index_vs_values':
        outLines = [
          '> # sort_values targets DATA',
          '> df.sort_values("Age")',
          '       Name  Age',
          '0      John   25',
          '2      Mike   28',
          '1      Sara   30',
          '',
          '> # Index is still unsorted (0, 2, 1), but Age is ascending.'
        ];
        break;
      case 'mistake_inplace':
        outLines = [
          '> df.sort_index()',
          '> print(df.index[0])',
          '2',
          '',
          '> # ❌ PROBLEM: Table reverted to original order!',
          '> # Use: df.sort_index(inplace=True) to save changes.'
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
        <div className="inline-flex items-center justify-center p-4 bg-amber-100 dark:bg-amber-900/30 rounded-2xl mb-6 shadow-sm border border-amber-200 dark:border-amber-800/50 group hover:rotate-3 transition-transform">
          <SortAsc className="w-10 h-10 text-amber-600 dark:text-amber-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Order <code className="text-amber-600 dark:text-amber-400 text-3xl sm:text-4xl bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.sort_index()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Restore structure to chaos. The <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">sort_index()</code> method reorganizes your rows (or columns) based on their labels, ensuring chronological and logical purity.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-amber-500" />
            Sorting Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-amber-600 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Database className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Fundamentals
            </button>
             <button
              onClick={() => setActiveTab('sorting')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'sorting' ? 'bg-amber-600 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <SortAsc className="w-4 h-4 mr-1.5" /> 5️⃣-8️⃣ Directions
            </button>
            <button
              onClick={() => setActiveTab('logic')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'logic' ? 'bg-amber-600 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <SlidersHorizontal className="w-4 h-4 mr-1.5" /> 9️⃣-1️⃣1️⃣ Chronology
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-amber-600 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
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
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto font-sans">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Documentation Notice */}
                  <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed italic">
                          Indexes often become unsorted after operations like filtering, concatenation, or merging. <code>sort_index()</code> restores categorical or numerical order instantly.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg tracking-tight">
                      <LayoutGrid className="w-5 h-5 text-amber-500 mr-2" />
                      1️⃣ What is sort_index()?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>sort_index()</code> is a Pandas method used to sort a DataFrame or Series by its index labels (the left-most unique identifiers).
                    </p>
                    <div className="mt-4 flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                        <div className="flex flex-col gap-2">
                           <div className="flex gap-4 opacity-40 text-[10px] uppercase font-bold tracking-widest px-1">
                              <span>Index</span>
                              <span>Data</span>
                           </div>
                           <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-xs font-bold font-mono">2</div>
                              <div className="w-20 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold">Mike</div>
                           </div>
                           <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xs font-bold font-mono">0</div>
                              <div className="w-20 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold">John</div>
                           </div>
                        </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6 tracking-tight">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                      2️⃣ Why sort_index() is Important
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                         {['Organize row order', 'Consistent structure', 'Analysis readiness', 'Result readability'].map((item) => (
                           <div key={item} className="p-3 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 shrink-0" />
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
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto shadow-inner">
                       <code className="text-amber-400 font-mono text-sm block leading-relaxed">
                         {"df.sort_index(axis=0, ascending=True, inplace=False)"}
                       </code>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-3 text-sans">
                       <div className="p-2 bg-amber-50/50 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-800/30">
                          <p className="text-[9px] font-bold text-amber-600 uppercase mb-1">AXIS</p>
                          <p className="text-[9px] text-slate-500 italic">0=Row, 1=Col</p>
                       </div>
                       <div className="p-2 bg-amber-50/50 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-800/30">
                          <p className="text-[9px] font-bold text-amber-600 uppercase mb-1">ASCENDING</p>
                          <p className="text-[9px] text-slate-500 italic">True/False</p>
                       </div>
                       <div className="p-2 bg-amber-50/50 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-800/30">
                          <p className="text-[9px] font-bold text-amber-600 uppercase mb-1">INPLACE</p>
                          <p className="text-[9px] text-slate-500 italic">Modify orig</p>
                       </div>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                       <Database className="w-5 h-5 text-indigo-500 mr-2" />
                       4️⃣ Initialize Disordered Data
                    </h3>
                    <button onClick={() => runDemo('show_base')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-amber-500 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                        <div className="bg-amber-100 dark:bg-amber-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <Database className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm tracking-tight text-sans">Load Scrambled Dataset</p>
                          <p className="text-xs text-slate-500 italic">"Mike(2), John(0), Sara(1)"</p>
                        </div>
                        <code className="text-[10px] font-bold text-amber-500 bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded">BUILD</code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'sorting' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <SortAsc className="w-5 h-5 text-emerald-500 mr-2" />
                        5️⃣ Ascending Order (Default)
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed italic">"Rearrange labels from smallest to largest (0, 1, 2)."</p>
                    <button onClick={() => runDemo('sort_asc')} className="w-full text-left group mt-4">
                       <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-emerald-500 transition-all shadow-sm flex items-center relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-1.5 h-full bg-emerald-500"></div>
                          <code className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">df.sort_index()</code>
                          <Play className="w-4 h-4 ml-auto text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                       </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <SortDesc className="w-5 h-5 text-rose-500 mr-2" />
                        6️⃣ Descending Order
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed italic">"Rearrange labels from largest to smallest (2, 1, 0)."</p>
                    <button onClick={() => runDemo('sort_desc')} className="w-full text-left group mt-4">
                       <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-rose-500 transition-all shadow-sm flex items-center relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-1.5 h-full bg-rose-500"></div>
                          <code className="text-[11px] font-bold text-rose-600 dark:text-rose-400">df.sort_index(ascending=False)</code>
                          <Play className="w-4 h-4 ml-auto text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                       </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight uppercase text-xs tracking-widest text-slate-500">
                        <SlidersHorizontal className="w-4 h-4 mr-2" />
                        7️⃣ Horizontal Matrix Sorting
                    </h3>
                    <div className="mt-4 p-5 bg-slate-950 border border-slate-800 rounded-2xl relative group cursor-pointer" onClick={() => runDemo('sort_axis1')}>
                        <p className="text-[10px] font-bold text-amber-500 mb-3 uppercase tracking-widest leading-none">Column Header Control</p>
                        <code className="text-[11px] font-bold text-amber-300 block mb-2 font-mono">
                          {'df.sort_index(axis=1)'}
                        </code>
                        <p className="text-[9px] text-slate-500 italic">"Reorders columns alphabetically: Age before Name."</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                        8️⃣ The Inplace Parameter
                    </h3>
                    <div className="mt-4 p-4 bg-amber-50/30 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-xl">
                        <p className="text-xs font-bold text-amber-800 dark:text-amber-300 mb-2">PERMANENT MODIFICATION</p>
                        <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed italic">
                           "By default, sort_index() creates a copy. To modify the actual DataFrame, use:"
                        </p>
                        <code className="text-[10px] sm:text-[11px] font-bold text-amber-600 dark:text-amber-400 block bg-white dark:bg-slate-950 p-2 mt-2 rounded border dark:border-slate-900 font-mono">
                           {'df.sort_index(inplace=True)'}
                        </code>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'logic' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 overflow-hidden relative">
                          <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3 flex items-center">
                             <BarChart3 className="w-4 h-4 mr-1.5 text-amber-500" />
                             9️⃣ Ordered Visualization
                          </h4>
                          <code className="text-[8px] block text-emerald-400 mb-4 font-mono leading-tight">
                             {`df = df.sort_index()\ndf.plot(kind="bar")`}
                          </code>
                          <div className="flex flex-col items-center">
                             <div className="w-[120px] h-[55px] border-b border-l border-slate-700 flex items-end justify-around pb-0.5 px-2 relative">
                                <div className="w-[20%] bg-amber-500/80 h-[90%]"></div>
                                <div className="w-[20%] bg-amber-500/80 h-[60%]"></div>
                                <div className="w-[20%] bg-amber-500/80 h-[75%]"></div>
                             </div>
                             <div className="w-[120px] flex justify-around mt-1">
                                {['John', 'Sara', 'Mike'].map(n => <span key={n} className="text-[7px] text-slate-600 font-bold">{n[0]}</span>)}
                             </div>
                          </div>
                       </div>
                       <button onClick={() => runDemo('time_series')} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl text-left hover:border-amber-500 transition-all shadow-sm group">
                          <h4 className="font-bold text-amber-600 text-[10px] uppercase mb-2 flex items-center tracking-widest leading-none">
                             <History className="w-4 h-4 mr-1.5" />
                             🔟 Chronology (Real World)
                          </h4>
                          <p className="text-[10px] text-slate-500 mb-3 italic">"Crucial for time-series data to ensure proper sequence."</p>
                          <code className="text-[10px] bg-amber-50 dark:bg-amber-950 p-2 rounded block border border-amber-100 dark:border-amber-900 text-amber-500 font-mono leading-tight">
                             df.sort_index()
                          </code>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight font-sans">
                        1️⃣1️⃣ sort_index() vs sort_values()
                    </h3>
                    <div className="mt-4 overflow-x-auto shadow-sm rounded-xl border border-slate-200 dark:border-slate-700">
                       <table className="w-full text-left text-[11px] sm:text-xs">
                          <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                            <tr><th className="p-3">Function</th><th className="p-3">Sorts By</th></tr>
                          </thead>
                          <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                            <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-mono font-bold text-amber-500">sort_index()</td><td className="p-3">Numerical or Label identifiers (Labels)</td></tr>
                            <tr className=""><td className="p-3 font-mono font-bold text-sky-500">sort_values()</td><td className="p-3">The actual cell content (Data)</td></tr>
                          </tbody>
                       </table>
                    </div>
                    <button onClick={() => runDemo('index_vs_values')} className="mt-4 flex items-center text-[10px] font-bold text-sky-500 hover:underline">
                       <Play className="w-3.5 h-3.5 mr-1.5" /> RUN COMPARISON DEMO
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
                       <div className="p-4 bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2">❌ Identification Confusion</p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 italic">"Mistaking index sorting for column sorting. sort_index() targets LABELS, not cell data."</p>
                       </div>

                       <button onClick={() => runDemo('mistake_inplace')} className="w-full text-left p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl hover:bg-amber-100 transition-colors block">
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-2">❌ Temporary Sorting</p>
                          <div className="flex gap-4 mb-3">
                             <code className="text-[9px] bg-slate-950 p-1.5 rounded text-rose-400 line-through">df.sort_index()</code>
                             <code className="text-[9px] bg-slate-950 p-1.5 rounded text-emerald-400 font-bold italic">inplace=True</code>
                          </div>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-tight">"Changes won't stick unless you update the original variable or use inplace."</p>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight font-sans">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣3️⃣ Professional Tips & Tricks
                    </h3>

                    <div className="space-y-4 mt-4 text-sans">
                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg mr-4 text-emerald-600 font-bold shrink-0">01</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none tracking-tight">Time-Series Hygiene</p>
                               <p className="text-[11px] text-slate-500 leading-relaxed italic">"Always call .sort_index() after loading time-series data to ensure chronological order for rolling/shifting."</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-amber-100 dark:bg-amber-900/40 p-2 rounded-lg mr-4 text-amber-600 font-bold shrink-0">02</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none tracking-tight">Post-Concat Operations</p>
                               <code className="text-[9px] sm:text-[10px] bg-slate-950 p-2.5 rounded block text-amber-400 border border-slate-800 mt-2 font-mono">
                                 {"pd.concat([df1, df2]).sort_index()"}
                               </code>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group hover:border-sky-500 transition-colors cursor-pointer" onClick={() => runDemo('sort_asc')}>
                            <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg mr-4 text-sky-600 font-bold shrink-0">03</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none tracking-tight">Clean Index Reset</p>
                               <code className="text-[10px] bg-slate-950 p-2.5 rounded block text-sky-400 border border-slate-800 mt-2 font-mono">
                                 {"df.sort_index().reset_index()"}
                               </code>
                               <p className="text-[10px] text-slate-500 mt-2 italic leading-tight">Restore logical row indices after sorting categorical data.</p>
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
            <div className="bg-[#0b0c0d] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0 font-mono">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-amber-500/70" />
                     Indexing Thread
                  </h3>
                  <div className="flex space-x-1.5 opacity-30">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[500px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-600 animate-pulse flex flex-col items-center justify-center mt-32 px-10 text-center">
                        <SortAsc className="w-12 h-12 mb-4 opacity-10" />
                        <span className="text-[11px] font-bold uppercase tracking-widest opacity-40">Identify Labels & Sort</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Index') || line.includes('Name') || line.includes('Age') || line.includes('Value') ? 'text-amber-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1' :
                              line.includes('PROBLEM') || line.includes('❌') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') ? 'text-sky-300 font-bold' :
                              line.match(/^\d{4}-\d{2}-\d{2}/) ? 'text-indigo-300' :
                              line.match(/^\d\s+/) || line.match(/^[0-2]\s{2}/) ? 'text-emerald-300 font-bold font-mono' :
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

export default PdSortIndex;
