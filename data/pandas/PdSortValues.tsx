import React, { useState } from 'react';
import { 
  SortAsc, SortDesc, Terminal, Lightbulb, 
  Settings, Database, LayoutGrid,
  Filter, AlertTriangle, CheckCircle2,
  Table as TableIcon, BarChart3, 
  Zap, SlidersHorizontal, Play, MousePointer2,
  Trophy, GraduationCap, DollarSign,
  TrendingUp
} from 'lucide-react';

const PdSortValues: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'logic' | 'series' | 'pro'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          '    Name  Age',
          '0   John   25',
          '1   Sara   30',
          '2   Mike   28'
        ];
        break;
      case 'sort_age_asc':
        outLines = [
          '> df.sort_values(by="Age")',
          '    Name  Age',
          '0   John   25',
          '2   Mike   28',
          '1   Sara   30',
          '',
          '> # Data rearranged: Age flows smallest to largest.'
        ];
        break;
      case 'sort_age_desc':
        outLines = [
          '> df.sort_values(by="Age", ascending=False)',
          '    Name  Age',
          '1   Sara   30',
          '2   Mike   28',
          '0   John   25',
          '',
          '> # Descending order: Oldest record first.'
        ];
        break;
      case 'sort_multi':
        outLines = [
          '> # Sorting by Age then Salary',
          '> df.sort_values(by=["Age", "Salary"])',
          '    Name  Age  Salary',
          '0   John   25   50000',
          '2   Mike   28   55000',
          '1   Sara   30   60000',
          '',
          '> # Multiple columns grouped for precise ordering.'
        ];
        break;
      case 'sort_series':
        outLines = [
          '> s = pd.Series([30, 10, 20])',
          '> s.sort_values()',
          '1    10',
          '2    20',
          '0    30',
          'dtype: int64',
          '',
          '> # Series values sorted; index labels follow their data.'
        ];
        break;
      case 'student_marks':
        outLines = [
          '> # Real-World: Top Performers',
          '> df.sort_values(by="Marks", ascending=False)',
          '  Student  Marks',
          '2       C     90',
          '0       A     80',
          '1       B     75',
          '',
          '> # Student C identified as the topper!'
        ];
        break;
      case 'top_5':
        outLines = [
          '> # Find top 5 values quickly',
          '> df.sort_values(by="Sales", ascending=False).head()',
          '   Item  Sales',
          '4  TV     500',
          '1  PC     450',
          '3  Tab    300',
          '0  Mob    200',
          '2  Cam    150'
        ];
        break;
      case 'mistake_no_by':
        outLines = [
          '> df.sort_values()',
          'TypeError: sort_values() missing 1 required positional argument: \'by\'',
          '',
          '> # ❌ ERROR: You MUST specify the column to sort by!'
        ];
        break;
      case 'mistake_inplace':
        outLines = [
          '> df.sort_values(by="Age")',
          '> print(df.iloc[0]["Age"])',
          '25',
          '',
          '> # ❌ PROBLEM: Changes were temporary.',
          '> # Use: inplace=True to save permanently.'
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
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800/50 group hover:scale-105 transition-transform">
          <SortAsc className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Ranker <code className="text-emerald-600 dark:text-emerald-400 text-3xl sm:text-4xl bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.sort_values()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed italic">
          Prioritize your data points. The <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200 font-bold uppercase">sort_values()</code> method is the engine for identification, ranking, and high-stakes reporting.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-emerald-500" />
            Ranking Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <LayoutGrid className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Intro
            </button>
             <button
              onClick={() => setActiveTab('logic')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'logic' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <SlidersHorizontal className="w-4 h-4 mr-1.5" /> 5️⃣-8️⃣ Logic
            </button>
            <button
              onClick={() => setActiveTab('series')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'series' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Zap className="w-4 h-4 mr-1.5" /> 9️⃣-1️⃣1️⃣ Advanced
            </button>
             <button
              onClick={() => setActiveTab('pro')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'pro' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣2️⃣-1️⃣4️⃣ Tips
            </button>
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-auto"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Documentation Start */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic">
                          Imagine searching for the highest salary in a million rows. You can't eyeball it. <code>sort_values()</code> brings those peaks directly to the top.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg tracking-tight">
                      <LayoutGrid className="w-5 h-5 text-emerald-500 mr-2" />
                      1️⃣ What is sort_values()?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>sort_values()</code> is a Pandas method used to sort a DataFrame or Series according to the values in one or more specified columns.
                    </p>
                    <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center">
                         <div className="flex gap-4 mb-2 text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                            <span>Name</span>
                            <span>Age</span>
                         </div>
                         <div className="space-y-1">
                            <div className="flex gap-4 items-center">
                               <div className="w-20 h-8 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs">John</div>
                               <div className="w-12 h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-600">25</div>
                            </div>
                            <div className="flex gap-4 items-center opacity-40">
                               <div className="w-20 h-8 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs">Mike</div>
                               <div className="w-12 h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-600">28</div>
                            </div>
                         </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6 tracking-tight">
                      <DollarSign className="w-5 h-5 text-indigo-500 mr-2" />
                      2️⃣ Why sort_values() is Important
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                         {[
                           { label: 'Identify Extremes', icon: <TrendingUp className="w-3.5 h-3.5" /> },
                           { label: 'Rank Records', icon: <Trophy className="w-3.5 h-3.5" /> },
                           { label: 'Organize Data', icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
                           { label: 'Top/Bottom Analysis', icon: <Filter className="w-3.5 h-3.5" /> }
                         ].map((item) => (
                           <div key={item.label} className="p-3 bg-indigo-50/50 dark:bg-indigo-900/10 text-slate-700 dark:text-slate-300 rounded-xl border border-indigo-100 dark:border-indigo-800/50 flex items-center">
                              <span className="text-indigo-500 mr-2">{item.icon}</span>
                              <span className="text-[11px] font-bold">{item.label}</span>
                           </div>
                         ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-widest text-slate-500 font-mono">
                       <Settings className="w-4 h-4 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto shadow-inner">
                       <code className="text-emerald-400 font-mono text-sm block">
                         {"df.sort_values(by, axis=0, ascending=True, inplace=False)"}
                       </code>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                       <Database className="w-5 h-5 text-sky-500 mr-2" />
                       4️⃣ Initialize Primary Dataset
                    </h3>
                    <button onClick={() => runDemo('show_base')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-emerald-500 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                        <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <Database className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm tracking-tight">Load Sample Inventory</p>
                          <p className="text-xs text-slate-500 italic">"John (25), Sara (30), Mike (28)"</p>
                        </div>
                        <code className="text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded tracking-tighter">MOUNT</code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'logic' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <SortAsc className="w-5 h-5 text-emerald-500 mr-2" />
                        5️⃣ Sorting by One Column
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed italic border-l-2 border-emerald-500/30 pl-3">"Simple linear sorting by a specific feature (like Age)."</p>
                    <button onClick={() => runDemo('sort_age_asc')} className="w-full text-left group mt-4">
                       <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-emerald-500 transition-all shadow-sm flex items-center relative overflow-hidden group">
                          <code className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">df.sort_values(by="Age")</code>
                          <Play className="w-4 h-4 ml-auto text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                       </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <SortDesc className="w-5 h-5 text-rose-500 mr-2" />
                        6️⃣ Descending Order (Ranking High)
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed italic border-l-2 border-rose-500/30 pl-3">"Reverse the flow to find the 'Top' or 'Max' items."</p>
                    <button onClick={() => runDemo('sort_age_desc')} className="w-full text-left group mt-4">
                       <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-rose-500 transition-all shadow-sm flex items-center">
                          <code className="text-[11px] font-bold text-rose-600 dark:text-rose-400">by="Age", ascending=False</code>
                          <SortDesc className="w-4 h-4 ml-auto text-rose-500" />
                       </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <SlidersHorizontal className="w-5 h-5 text-indigo-500 mr-2 text-sm" />
                        7️⃣ Multilevel Sorting
                    </h3>
                    <div className="mt-4 p-5 bg-indigo-50/20 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-2xl group cursor-pointer" onClick={() => runDemo('sort_multi')}>
                        <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 mb-3 uppercase tracking-widest leading-none">Tie-Breaker Logic</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block mb-2 font-mono">
                          {'df.sort_values(by=["Age", "Salary"])'}
                        </code>
                        <p className="text-[9px] text-slate-500 italic">"Sorts by Age first; if Age is equal, sorts by Salary."</p>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-xs tracking-widest uppercase text-slate-500">
                        8️⃣ The Inplace Trigger
                    </h3>
                    <div className="mt-4 p-4 bg-emerald-50/30 dark:bg-emerald-900/10 border-l-4 border-emerald-500 rounded-r-xl">
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-bold italic mb-2">
                           "By default, sort_values() is non-destructive. To overwrite the original:"
                        </p>
                        <code className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 block bg-white dark:bg-slate-950 p-2 mt-2 rounded border dark:border-slate-900 font-mono shadow-sm">
                           {'df.sort_values(by="Age", inplace=True)'}
                        </code>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'series' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <Zap className="w-5 h-5 text-emerald-500 mr-2" />
                        9️⃣ Sorting a Raw Series
                    </h3>
                    <div className="mt-4 bg-emerald-950 p-4 rounded-xl border border-emerald-800 relative group overflow-hidden cursor-pointer" onClick={() => runDemo('sort_series')}>
                       <code className="text-[11px] text-emerald-400 block mb-2 font-mono leading-relaxed">
{`s = pd.Series([30, 10, 20])
s.sort_values()`}
                       </code>
                       <div className="flex gap-2 mt-4">
                          <div className="p-2.5 bg-slate-900 rounded border border-emerald-900/40 font-mono text-[9px] text-emerald-500 line-through">0 : 30</div>
                          <div className="p-2.5 bg-slate-900 rounded border border-emerald-900/40 font-mono text-[9px] text-emerald-500">1 : 10</div>
                       </div>
                       <MousePointer2 className="absolute bottom-2 right-2 w-4 h-4 text-emerald-500 animate-pulse" />
                    </div>
                  </section>

                  <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 overflow-hidden relative group">
                          <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3 flex items-center">
                             <BarChart3 className="w-4 h-4 mr-1.5 text-emerald-500" />
                             🔟 Sorted Visualization
                          </h4>
                          <code className="text-[9px] block text-emerald-400 mb-4 font-mono leading-tight tracking-tighter">
                             {`df.sort_values(by="Age")\ndf.plot(kind="bar")`}
                          </code>
                          <div className="flex flex-col items-center">
                             <div className="w-[120px] h-[55px] border-b border-l border-slate-700 flex items-end justify-around pb-0.5 px-2 relative">
                                <div className="w-[15%] bg-emerald-500/80 h-[50%]"></div>
                                <div className="w-[15%] bg-emerald-500/80 h-[75%]"></div>
                                <div className="w-[15%] bg-emerald-500/80 h-[95%]"></div>
                                <div className="absolute right-0 top-0 opacity-10"><BarChart3 className="w-12 h-12" /></div>
                             </div>
                             <div className="w-[120px] flex justify-around mt-1">
                                {['John', 'Mike', 'Sara'].map(n => <span key={n} className="text-[7px] text-slate-600 font-bold">{n[0]}</span>)}
                             </div>
                          </div>
                       </div>
                       <button onClick={() => runDemo('student_marks')} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl text-left hover:border-violet-500 transition-all shadow-sm">
                          <h4 className="font-bold text-violet-600 text-[10px] uppercase mb-2 flex items-center tracking-widest leading-none">
                             <GraduationCap className="w-4 h-4 mr-1.5" />
                             1️⃣1️⃣ Real-World (Academics)
                          </h4>
                          <p className="text-[10px] text-slate-500 mb-2 italic">"Detect top-performing students instantly."</p>
                          <code className="text-[10px] bg-violet-50 dark:bg-violet-950 p-2 rounded block border border-violet-100 dark:border-violet-900/50 text-violet-500 font-mono leading-tight">
                             by="Marks", ascending=False
                          </code>
                       </button>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'pro' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <SortAsc className="w-5 h-5 text-emerald-500 mr-2" />
                        1️⃣2️⃣ sort_values() vs sort_index()
                    </h3>
                    <div className="mt-4 shadow-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                       <table className="w-full text-left text-[11px] sm:text-xs">
                          <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                            <tr><th className="p-3">Function</th><th className="p-3">Sorts By</th></tr>
                          </thead>
                          <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                             <tr className="border-b border-slate-100 dark:border-slate-800 font-mono font-bold"><td className="p-3 text-emerald-500">sort_values()</td><td className="p-3">Inner Cell Content (Data)</td></tr>
                             <tr className="font-mono font-bold"><td className="p-3 text-amber-500 opacity-60">sort_index()</td><td className="p-3 opacity-60">Row/Column Labels</td></tr>
                          </tbody>
                       </table>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                        1️⃣3️⃣ Common Beginner Mistakes
                    </h3>
                    
                    <div className="space-y-4 mt-4 text-sans">
                       <button onClick={() => runDemo('mistake_no_by')} className="w-full text-left p-4 bg-rose-50/50 dark:bg-rose-900/10 border-l-4 border-rose-500 rounded-xl hover:bg-rose-100 transition-all block group">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2">❌ Missing 'by' parameter</p>
                          <code className="text-[10px] text-rose-500 line-through block mb-2 font-mono">df.sort_values()</code>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium italic">"Unlike sort_index, values sorting REQUIRE a target column target."</p>
                       </button>

                       <button onClick={() => runDemo('mistake_inplace')} className="p-4 bg-amber-50/50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl relative group w-full text-left">
                          <p className="text-[10px] font-bold text-amber-600 mb-2 uppercase tracking-widest leading-none">❌ Temporary Paradox</p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium italic">"Running without inplace=True will show you the sorted data, but won't save it to the DataFrame."</p>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight font-sans">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        14. Professional Advice (Tips & Tricks)
                    </h3>

                    <div className="space-y-4 mt-4 font-sans text-sans">
                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group hover:border-emerald-500 transition-colors cursor-pointer" onClick={() => runDemo('top_5')}>
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg mr-4 text-emerald-600 font-bold shrink-0">01</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">Quick Peaks (.head)</p>
                               <code className="text-[9px] sm:text-[10px] bg-slate-100 dark:bg-slate-950 px-2 py-0.5 rounded border dark:border-slate-800 text-emerald-600 font-bold">.sort_values(by="Sales", ascending=False).head()</code>
                               <p className="text-[10px] text-slate-500 italic mt-2">"The fastest way to grab your 'Top 5' or 'Top 10' records."</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg mr-4 text-sky-600 font-bold shrink-0">02</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none tracking-tight">Chain with Filtering</p>
                               <code className="text-[10px] bg-slate-950 p-2 rounded block text-sky-400 border border-slate-800 mt-2 font-mono italic">
                                 {"df[df['Age'] > 25].sort_values(by='Age')"}
                               </code>
                            </div>
                         </div>
                    </div>
                  </section>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-12 xl:col-span-5 h-[500px] xl:h-auto">
            <div className="bg-[#0c0d10] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0 font-mono">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-emerald-500/70" />
                     Ranking Output
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
                        <span className="text-[11px] font-bold uppercase tracking-widest opacity-40">Choose Column & Sort</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Name') || line.includes('Age') || line.includes('Salary') || line.includes('Student') || line.includes('Marks') || line.includes('Item') ? 'text-emerald-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1 tracking-wider' :
                              line.includes('TypeError') || line.includes('❌') || line.includes('PROBLEM') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded italic' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('A') || line.includes('B') || line.includes('C') ? 'text-sky-300 font-bold' :
                              line.match(/^\d\s+/) || line.match(/^[0-9]\s{5,}/) ? 'text-emerald-300 font-bold font-mono' :
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

export default PdSortValues;
