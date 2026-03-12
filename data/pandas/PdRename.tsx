import React, { useState } from 'react';
import { 
  Type, Terminal, Lightbulb, 
  Settings, Edit3, Database,
  Columns, Hash, AlertTriangle, CheckCircle2,
  Table as TableIcon, BarChart3, ChevronRight,
  RefreshCw, MousePointer2
} from 'lucide-react';

const PdRename: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'renaming' | 'inplace' | 'tips'>('basics');

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
      case 'rename_col':
        outLines = [
          '> df.rename(columns={"Age": "Years"})',
          '    Name  Years     City',
          '0   John     25  Chennai',
          '1   Sara     30    Delhi',
          '2   Mike     28   Mumbai',
          '',
          '> # Successfully renamed one column!'
        ];
        break;
      case 'rename_multi':
        outLines = [
          '> df.rename(columns={"Name": "Employee", "Age": "Years"})',
          '  Employee  Years     City',
          '0     John     25  Chennai',
          '1     Sara     30    Delhi',
          '2     Mike     28   Mumbai',
          '',
          '> # Renamed multiple columns using a dictionary mapping.'
        ];
        break;
      case 'rename_index':
        outLines = [
          '> df.rename(index={0: "A", 1: "B", 2: "C"})',
          '     Name  Age     City',
          'A    John   25  Chennai',
          'B    Sara   30    Delhi',
          'C    Mike   28   Mumbai',
          '',
          '> # Changed row labels from integers to letters!'
        ];
        break;
      case 'rename_all':
        outLines = [
          '> df.columns = ["Employee", "Years", "City"]',
          '> print(df.columns)',
          "Index(['Employee', 'Years', 'City'], dtype='object')",
          '',
          '> # Warning: This overwrites ALL columns. Use with care!'
        ];
        break;
      case 'run_real_world':
        outLines = [
          '> # Cleaning unclear column names',
          '> df.rename(columns={"col1":"Name", "col2":"Age", "col3":"City"})',
          '    Name  Age     City',
          '0   Ravi   25  Chennai',
          '1  Meena   30    Delhi'
        ];
        break;
      case 'mistake_missing_param':
        outLines = [
          '> df.rename({"Age": "Years"})',
          '# ... Output might look unchanged or cause unexpected index renaming ...',
          '',
          '> # ❌ ERROR: You forgot the columns= keyword!',
          '> # Correct: df.rename(columns={"Age": "Years"})'
        ];
        break;
      case 'mistake_inplace':
        outLines = [
          '> df.rename(columns={"Age": "Years"})',
          '> print(df.columns)',
          "Index(['Name', 'Age', 'City'], dtype='object')",
          '',
          '> # ❌ CONFUSION: The original DataFrame did NOT change!',
          '> # Need to use inplace=True or reassign: df = df.rename(...)'
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
        <div className="inline-flex items-center justify-center p-4 bg-amber-100 dark:bg-amber-900/30 rounded-2xl mb-6 shadow-sm border border-amber-200 dark:border-amber-800/50">
          <Edit3 className="w-10 h-10 text-amber-600 dark:text-amber-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Label Refactoring <code className="text-amber-600 dark:text-amber-400 text-3xl sm:text-4xl bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.rename()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Clean datasets start with clear names. <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">rename()</code> allows you to map unclear labels to meaningful descriptions effortlessly.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-amber-500" />
            Renaming Console
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-amber-600 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Database className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Fundamentals
            </button>
             <button
              onClick={() => setActiveTab('renaming')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'renaming' ? 'bg-amber-600 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Type className="w-4 h-4 mr-1.5" /> 5️⃣-7️⃣ Mapping
            </button>
            <button
              onClick={() => setActiveTab('inplace')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'inplace' ? 'bg-amber-600 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <RefreshCw className="w-4 h-4 mr-1.5" /> 8️⃣-1️⃣1️⃣ Persistence
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
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Notice Box */}
                  <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                          Datasets often come with cryptic column names like "col1" or "var_x". <code>rename()</code> is your best friend for making data readable for your team.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg">
                      <Database className="w-5 h-5 text-amber-500 mr-2" />
                      1️⃣ What is <code className="text-amber-500 ml-2">rename()</code>?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>rename()</code> is a Pandas method used to rename column labels or row index labels in a DataFrame. It is a non-destructive way to change names unless <code>inplace=True</code> is used.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                      <Columns className="w-5 h-5 text-sky-500 mr-2" />
                      2️⃣ Why rename() is Important
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                         {['Readable Names', 'Standardization', 'Clean ML Prep', 'Better EDA'].map((item) => (
                           <div key={item} className="p-2.5 bg-sky-50 dark:bg-sky-900/20 text-sky-800 dark:text-sky-300 rounded-xl text-[11px] font-bold text-center border border-sky-100 dark:border-sky-800/50">
                             {item}
                           </div>
                         ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-wider text-slate-500">
                       <Settings className="w-4 h-4 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto">
                       <code className="text-amber-400 font-mono text-sm block whitespace-nowrap">
                         {"DataFrame.rename(columns=None, index=None, inplace=False)"}
                       </code>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <TableIcon className="w-5 h-5 text-emerald-500 mr-2" />
                       4️⃣ Creating Example Dataset
                    </h3>
                    <button onClick={() => runDemo('show_base')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-amber-500 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                        <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <Database className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Initialize test_data</p>
                          <p className="text-xs text-slate-500">Columns: Name, Age, City</p>
                        </div>
                        <code className="text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded">BUILD</code>
                      </div>
                    </button>
                    <div className="mt-4 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                       <pre className="text-[10px] font-mono text-slate-600 dark:text-slate-400">
{`data = {
    "Name": ["John", "Sara", "Mike"],
    "Age": [25, 30, 28],
    "City": ["Chennai", "Delhi", "Mumbai"]
}`}
                       </pre>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'renaming' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Type className="w-5 h-5 text-amber-500 mr-2" />
                        5️⃣ Renaming a Single Column
                    </h3>
                    <div className="mt-4 p-5 bg-amber-50/20 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-2xl group transition-all">
                       <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 font-bold uppercase tracking-tight">Rename: Age → Years</p>
                       <button onClick={() => runDemo('rename_col')} className="w-fit">
                          <code className="text-[11px] font-bold text-amber-600 dark:text-amber-400 block bg-white dark:bg-slate-950 p-2.5 rounded-lg shadow-sm border border-amber-200 dark:border-amber-900 hover:scale-105 transition-transform">
                            {'df.rename(columns={"Age": "Years"})'}
                          </code>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Columns className="w-5 h-5 text-indigo-500 mr-2" />
                        6️⃣ Renaming Multiple Columns
                    </h3>
                    <button onClick={() => runDemo('rename_multi')} className="w-full text-left mt-3">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:shadow-lg transition-all relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-2 h-full bg-indigo-500"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 italic">"You can pass as many column pairs as you want in one dictionary!"</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800 leading-relaxed shadow-inner">
                          {'df.rename(columns={'}<br />
                          {'    "Name": "Employee",'} <br />
                          {'    "Age": "Years"'} <br />
                          {'})'}
                        </code>
                      </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Hash className="w-5 h-5 text-sky-500 mr-2" />
                        7️⃣ Renaming Index (Row Labels)
                    </h3>
                    <button onClick={() => runDemo('rename_index')} className="w-full text-left mt-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-sky-500 transition-colors shadow-sm relative group">
                        <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-30 transition-opacity">
                           <MousePointer2 className="w-8 h-8 text-sky-500" />
                        </div>
                        <p className="text-[10px] text-sky-600 dark:text-sky-400 font-bold mb-2 uppercase">Rename: 0, 1, 2 → A, B, C</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-300 block border-l-2 border-sky-500 pl-3">
                          {'df.rename(index={0: "A", 1: "B", 2: "C"})'}
                        </code>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'inplace' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <RefreshCw className="w-5 h-5 text-rose-500 mr-2" />
                        8️⃣ Renaming Permanently
                    </h3>
                    <div className="mt-4 bg-rose-50/20 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-5 rounded-2xl relative overflow-hidden group">
                       <p className="text-xs text-rose-800 dark:text-rose-300 mb-4 leading-relaxed font-medium">By default, Pandas returns a **new** DataFrame. To change the original variable directly:</p>
                       <code className="text-[12px] font-bold text-slate-800 dark:text-slate-200 block bg-white dark:bg-slate-950 p-2.5 rounded shadow-sm border border-rose-100 dark:border-rose-900 w-fit">
                          {'df.rename(columns={"Age": "Years"}, inplace=True)'}
                       </code>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Columns className="w-5 h-5 text-amber-500 mr-2" />
                        9️⃣ Renaming ALL Columns
                    </h3>
                    <button onClick={() => runDemo('rename_all')} className="w-full text-left mt-3">
                       <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md">
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 block italic leading-tight">"If you want to replace everything at once without a dictionary, assign a list directly to <code>.columns</code>."</p>
                          <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block border-l-2 border-amber-500 pl-3 bg-white dark:bg-slate-900 py-1.5 rounded-r">
                            {'df.columns = ["Employee", "Years", "City"]'}
                          </code>
                       </div>
                    </button>
                  </section>

                  <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                          <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3 flex items-center">
                             <BarChart3 className="w-4 h-4 mr-1.5 text-emerald-500" />
                             🔟 Visualization
                          </h4>
                          <code className="text-[9px] block text-emerald-400 mb-4 whitespace-pre">
{`df.rename(columns={"Age":"Years"}, inplace=True)`}
{`df.plot(x="Name", y="Years", kind="bar")`}
                          </code>
                          <div className="flex flex-col items-center">
                             <div className="w-[120px] h-[60px] border-b border-l border-slate-700 flex items-end justify-around pb-0.5">
                                <div className="w-[20%] bg-amber-500/80 h-[80%]"></div>
                                <div className="w-[20%] bg-amber-500/80 h-[70%]"></div>
                                <div className="w-[20%] bg-amber-500/80 h-[95%]"></div>
                             </div>
                             <span className="text-[7px] text-slate-600 font-bold uppercase mt-1">John Sara Mike</span>
                          </div>
                       </div>
                       <button onClick={() => runDemo('run_real_world')} className="bg-indigo-900/10 border border-indigo-800/30 p-4 rounded-xl text-left transition-colors hover:bg-indigo-900/20 group">
                          <h4 className="font-bold text-indigo-300 text-[10px] uppercase mb-2 flex items-center">
                             <Settings className="w-4 h-4 mr-1.5" />
                             1️⃣1️⃣ Real World Example
                          </h4>
                          <p className="text-[10px] font-bold text-slate-200 mb-2">Cryptic Columns Cleaning</p>
                          <p className="text-[9px] text-slate-400 leading-relaxed mb-4">Fixing datasets that come with names like <span className="text-amber-500 font-mono">col1, col2, col3</span>.</p>
                          <code className="text-[9px] bg-slate-950 p-1.5 rounded block border border-indigo-900/50 text-indigo-400 font-bold group-hover:border-indigo-500">EXECUTE CLEANUP</code>
                       </button>
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
                    
                    <div className="space-y-4 mt-4 text-sans">
                       <button onClick={() => runDemo('mistake_missing_param')} className="w-full text-left p-4 bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl hover:bg-rose-50 transition-colors block">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2 flex items-center">
                             ❌ Forgetting columns= parameter
                          </p>
                          <div className="flex gap-4">
                             <code className="text-[10px] text-rose-500 line-through">df.rename({"{"}"Age":"Years"{"}"})</code>
                             <code className="text-[10px] text-emerald-500 font-bold">df.rename(columns={"{"}"Age":"Years"{"}"})</code>
                          </div>
                          <p className="text-[10px] text-slate-500 mt-2">If you leave out the keyword, Pandas might try to rename the index instead!</p>
                       </button>

                       <button onClick={() => runDemo('mistake_inplace')} className="w-full text-left p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl hover:bg-amber-50 transition-colors block group mt-4">
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-2 flex items-center">
                             ❌ Expecting original change
                          </p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight italic">"Beginning students often think running <code>.rename()</code> fixes the DataFrame in-place. Always remind them to re-assign or use <code>inplace=True</code>!"</p>
                          <code className="text-[9px] bg-white dark:bg-slate-900 mt-3 p-1 rounded border border-amber-200 block text-amber-600 font-bold w-fit">CLICK TO SEE FAIL</code>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣3️⃣ Professional Tips & Tricks
                    </h3>

                    <div className="space-y-4 mt-4">
                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg mr-4 text-amber-600 font-bold shrink-0">01</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Consistent Naming Conventions</p>
                               <span className="text-[10px] bg-sky-50 dark:bg-sky-900/30 px-2 py-0.5 rounded text-sky-600 font-mono font-bold">lowercase_with_underscores</span>
                               <p className="text-[11px] text-slate-500 mt-2">Standardizes column names for SQL and data engineering pipelines.</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg mr-4 text-emerald-600 font-bold shrink-0">02</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">Global Case Conversion</p>
                               <p className="text-[11px] text-slate-500 mt-2 mb-3 leading-relaxed italic">"Convert all columns to lowercase in one single sweep:"</p>
                               <code className="text-[10px] sm:text-[11px] bg-slate-950 p-2.5 rounded block text-emerald-400 border border-slate-800 shadow-inner w-fit">
                                 {"df.columns = df.columns.str.lower()"}
                               </code>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-4 text-indigo-600 font-bold shrink-0">03</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Clean Immediately After Loading</p>
                               <p className="text-[11px] text-slate-500 leading-relaxed italic">"A clean pipeline starts by renaming cryptic API keys into readable domain names right after <code>read_csv</code>."</p>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-amber-500/70" />
                     Execution Logs
                  </h3>
                  <div className="flex space-x-1.5 opacity-40">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600/50"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600/50"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600/50"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[500px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-600 animate-pulse flex flex-col items-center justify-center mt-32 px-10">
                        <Columns className="w-12 h-12 mb-4 opacity-10" />
                        <span className="text-center text-[11px] font-bold uppercase tracking-widest opacity-40">Awaiting Label Change...</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Years') || line.includes('Employee') ? 'text-amber-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1' :
                              line.includes('ERROR') || line.includes('❌') || line.includes('CONFUSION') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Ravi') || line.includes('Meena') ? 'text-sky-300' :
                              line.match(/^\s*\d+\s+/) || line.match(/^[A-Z]\s+/) ? 'text-emerald-300/80' :
                              'text-slate-400 font-sans text-xs italic'
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

export default PdRename;
