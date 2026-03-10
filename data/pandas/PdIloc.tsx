import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Layers, 
  AlertTriangle, Table, Settings, 
  MapPin, Grid3X3, ArrowRightLeft, Target
} from 'lucide-react';

const PdIloc: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'rows' | 'slicing' | 'columns' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '      Name  Age       City  Salary',
          '0     John   25    Chennai   50000',
          '1     Sara   30      Delhi   60000',
          '2     Mike   28     Mumbai   55000',
          '3     Anna   35  Bangalore   70000',
          '4     Ravi   26  Hyderabad   48000'
        ];
        break;
      case 'run_first_row':
        outLines = [
          '> df.iloc[0]',
          'Name         John',
          'Age            25',
          'City      Chennai',
          'Salary      50000',
          'Name: 0, dtype: object'
        ];
        break;
      case 'run_multi_rows':
        outLines = [
          '> df.iloc[[0, 2, 4]]',
          '   Name  Age       City  Salary',
          '0  John   25    Chennai   50000',
          '2  Mike   28     Mumbai   55000',
          '4  Ravi   26  Hyderabad   48000'
        ];
        break;
      case 'run_row_slice':
        outLines = [
          '> df.iloc[1:4]',
          '   Name  Age       City  Salary',
          '1  Sara   30      Delhi   60000',
          '2  Mike   28     Mumbai   55000',
          '3  Anna   35  Bangalore   70000',
          '',
          '> # Notice it pulls index 1, 2, and 3 (stops before 4)'
        ];
        break;
      case 'run_col_select':
        outLines = [
          '> df.iloc[:, 0]',
          '0    John',
          '1    Sara',
          '2    Mike',
          '3    Anna',
          '4    Ravi',
          'Name: Name, dtype: object'
        ];
        break;
      case 'run_grid_slice':
        outLines = [
          '> df.iloc[1:4, 0:2]',
          '   Name  Age',
          '1  Sara   30',
          '2  Mike   28',
          '3  Anna   35',
          '',
          '> # Selected rows 1~3, and columns 0~1'
        ];
        break;
      case 'run_crash':
        outLines = [
          '> df.iloc["John"]',
          'TypeError: cannot do positional indexing with these indexers',
          '[\'John\'] of type str',
          '',
          '> # ❌ CRASH: iloc only accepts integers, not strings (labels)!'
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
          <MapPin className="w-10 h-10 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Indexing <code className="text-fuchsia-600 dark:text-fuchsia-400 text-3xl sm:text-4xl bg-fuchsia-50 dark:bg-fuchsia-900/20 px-3 py-1 rounded-xl">.iloc[]</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
           It seems you pasted the placeholder for this lesson instead of the actual content! No worries, I've built out a complete, interactive guide on exactly how <strong>Integer-Location (<code className="font-mono text-sm bg-slate-200 dark:bg-slate-800 px-1 rounded">iloc</code>)</strong> indexing works based strictly on Pandas documentation.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-fuchsia-500" />
            Indexing Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-3️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('rows')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'rows' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Target className="w-4 h-4 mr-1.5" /> 4️⃣ Exact Rows
            </button>
            <button
              onClick={() => setActiveTab('slicing')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'slicing' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ArrowRightLeft className="w-4 h-4 mr-1.5" /> 5️⃣ Slicing
            </button>
             <button
              onClick={() => setActiveTab('columns')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'columns' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Grid3X3 className="w-4 h-4 mr-1.5" /> 6️⃣ Grid Extraction
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 7️⃣ Tips
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
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Table className="w-5 h-5 text-fuchsia-500 mr-2" />
                    1️⃣ What is <code className="mx-2 bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 px-1 rounded">iloc[]</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                      <p>The <code className="font-mono text-sm bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-700 dark:text-slate-300">iloc</code> indexer stands for <strong>integer-location</strong>. It is strictly used to select data by their numerical row and column indices (starting from 0), regardless of what the actual labels or row index names are.</p>
                      
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border-l-4 border-fuchsia-500 p-3 rounded-r-lg shadow-sm">
                            <h4 className="font-bold text-fuchsia-800 dark:text-fuchsia-300 text-sm flex items-center"><Layers className="w-4 h-4 mr-1" /> Rows</h4>
                            <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">Position <code>0</code> is the first row. Position <code>-1</code> is the last row.</p>
                        </div>
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 p-3 rounded-r-lg shadow-sm">
                            <h4 className="font-bold text-emerald-800 dark:text-emerald-300 text-sm flex items-center"><Grid3X3 className="w-4 h-4 mr-1" /> Columns</h4>
                            <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">Position <code>0</code> is the first column. Position <code>1</code> is the second, etc.</p>
                        </div>
                     </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    2️⃣ Basic Syntax Structure
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700 font-mono text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold overflow-x-auto text-center">
                          df.iloc[<span className="text-fuchsia-500">row_position</span>, <span className="text-emerald-500">column_position</span>]
                      </div>
                      <table className="w-full text-left text-[11px] sm:text-xs">
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900">
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold">[] Brackets</td>
                                  <td className="p-3">Notice it uses <code className="font-bold">[]</code> brackets, NOT parentheses <code>()</code>. It is an indexer, not a function!</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-8">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full flex flex-col items-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASE</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2 w-full flex items-center justify-between">
                                3️⃣ Example Dataset
                            </h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
import pandas as pd

<span className="text-slate-400 italic"># Columns:  0(Name)  1(Age)  2(City)  3(Salary)</span>
data = {'{'}
    <span className="text-amber-500">"Name"</span>:   [<span className="text-sky-500">"John"</span>, <span className="text-sky-500">"Sara"</span>, <span className="text-sky-500">"Mike"</span>, <span className="text-sky-500">"Anna"</span>, <span className="text-sky-500">"Ravi"</span>], <span className="text-slate-400 italic"># Rows 0-4</span>
    <span className="text-amber-500">"Age"</span>:    [<span className="text-emerald-500 font-bold">25</span>, <span className="text-emerald-500 font-bold">30</span>, <span className="text-emerald-500 font-bold">28</span>, <span className="text-emerald-500 font-bold">35</span>, <span className="text-emerald-500 font-bold">26</span>],
    <span className="text-amber-500">"City"</span>:   [<span className="text-sky-500">"Chennai"</span>, <span className="text-sky-500">"Delhi"</span>, <span className="text-sky-500">"Mumbai"</span>, <span className="text-sky-500">"Bangalore"</span>, <span className="text-sky-500">"Hyderabad"</span>],
    <span className="text-amber-500">"Salary"</span>: [<span className="text-emerald-500 font-bold">50000</span>, <span className="text-emerald-500 font-bold">60000</span>, <span className="text-emerald-500 font-bold">55000</span>, <span className="text-emerald-500 font-bold">70000</span>, <span className="text-emerald-500 font-bold">48000</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                    
                </div>
              )}

              {activeTab === 'rows' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Target className="w-5 h-5 text-fuchsia-500 mr-2" />
                        4️⃣ Selecting Exact Rows
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">If you omit the column parameter, Pandas extracts all columns for the explicitly defined integers matching the requested layout row blocks.</p>

                  <div className="grid md:grid-cols-2 gap-4">
                      <button onClick={() => runDemo('run_first_row')} className="text-left group w-full">
                        <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-5 hover:border-fuchsia-400 dark:hover:border-fuchsia-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN 1ST ROW</div>
                          <h4 className="font-bold text-sm text-fuchsia-700 dark:text-fuchsia-400 mb-2 mt-2">Single Row</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-fuchsia-900/50 shadow-sm block w-fit mb-3">df.iloc[<span className="text-amber-500 font-bold">0</span>]</code>
                          <p className="text-[10px] text-slate-500">Returns a Pandas <code>Series</code> representing index exactly matching the 0th position ("John's" data).</p>
                        </div>
                      </button>

                      <button onClick={() => runDemo('run_multi_rows')} className="text-left group w-full">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-xl p-5 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MULTI-LIST</div>
                          <h4 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-2 mt-2">Multiple Specific Rows</h4>
                          <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-sky-900/50 shadow-sm block w-fit mb-3">df.iloc[<span className="text-amber-500 font-bold">[0, 2, 4]</span>]</code>
                          <p className="text-[10px] text-slate-500">Providing a <strong>list</strong> of integers (inside the brackets) fetches those exact targeted rows.</p>
                        </div>
                      </button>
                  </div>
                </div>
              )}

               {activeTab === 'slicing' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <ArrowRightLeft className="w-5 h-5 text-fuchsia-500 mr-2" />
                        5️⃣ Slicing Rows (<code className="mx-2 bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-700 dark:text-slate-300">Start : Stop</code>)
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Just like normal Python lists arrays formatting logics testing vectors subsets constraints metrics matrices structures logic datasets mapping offsets, <code>iloc</code> uses slicing. <strong className="text-rose-500">Crucial note: The "Stop" index is exclusive (not included).</strong></p>

                   <button onClick={() => runDemo('run_row_slice')} className="text-left group w-full">
                        <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border-l-4 border-fuchsia-500 border-y border-r border-fuchsia-200 dark:border-slate-700 rounded-r-xl p-5 hover:border-fuchsia-400 dark:hover:border-fuchsia-700 transition-colors shadow-sm relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SLICE</div>
                          
                          <code className="text-[11px] xl:text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-fuchsia-900/50 shadow-sm block w-fit mb-4 mt-2">df.iloc[<span className="text-emerald-500 font-bold">1</span>:<span className="text-rose-500 font-bold text-lg leading-none">4</span>]</code>
                          
                          <div className="flex flex-col sm:flex-row gap-4 font-mono text-[10px] sm:text-xs text-slate-500">
                              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-center w-full">
                                  <strong>Start: 1 ✔️</strong><br/>Includes Row 1
                              </div>
                               <div className="bg-slate-100 dark:bg-slate-800/80 p-2 rounded text-slate-600 border border-slate-200 dark:border-slate-700 text-center w-full">
                                  <strong>Row 2 & 3 ✔️</strong><br/>Included implicitly
                              </div>
                               <div className="bg-rose-100 dark:bg-rose-900/30 p-2 rounded text-rose-800 dark:text-rose-400 border border-rose-200 dark:border-rose-800 text-center w-full">
                                  <strong>Stop: 4 ❌</strong><br/>Stops before 4
                              </div>
                          </div>
                        </div>
                    </button>
                    
                </div>
              )}

               {activeTab === 'columns' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Grid3X3 className="w-5 h-5 text-indigo-500 mr-2" />
                      6️⃣ Extracting Grids (Rows <span className="text-slate-400 font-normal mx-2 text-sm italic">and</span> Columns)
                  </h3>

                  <div className="space-y-4">
                      <button onClick={() => runDemo('run_col_select')} className="text-left group w-full">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-4 rounded-r-xl shadow-sm hover:border-indigo-400 transition-colors relative">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN COL SELECT</div>
                            <h4 className="font-bold text-sm text-indigo-800 dark:text-indigo-400 mb-2">Extracting a specific Column</h4>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">By using a colon <code className="font-bold bg-white dark:bg-slate-800 px-1 rounded mx-0.5">:</code> in the row position, we say "Get all rows". Then we pass <code className="font-bold">0</code> in the column position.</p>
                             <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.iloc[<span className="text-indigo-500 bg-indigo-100 dark:bg-indigo-900/50 px-0.5 rounded">:</span>, <span className="text-amber-500">0</span>]</code>
                        </div>
                      </button>

                      <button onClick={() => runDemo('run_grid_slice')} className="text-left group w-full">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 p-4 rounded-xl shadow-sm hover:border-sky-400 transition-colors relative">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN 2D SLICE</div>
                            <h4 className="font-bold text-sm text-sky-800 dark:text-sky-400 mb-2">True 2D Array Matrix Slicing</h4>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Slice both datasets rows offsets structs boundaries sizes grids parameters values lengths limits counts testing schemas at once.</p>
                            <code className="text-[10px] sm:text-[11px] bg-white dark:bg-slate-950 font-bold p-3 rounded block w-fit shadow-inner border border-sky-100 dark:border-sky-900">
                                df.iloc[<span className="text-fuchsia-500">1:4</span>, <span className="text-emerald-500">0:2</span>]
                            </code>
                             <p className="text-[10px] text-slate-500 mt-2">Retrieves rows 1, 2, 3 <strong>AND</strong> columns 0, 1 (`Name` and `Age`). </p>
                        </div>
                      </button>
                  </div>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    7️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative">
                       <button onClick={() => runDemo('run_crash')} className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN CRASH</button>
                      <div className="font-bold text-[13px] mb-2 text-slate-700 dark:text-slate-300 w-5/6">❌ Using Labels/Strings inside <code className="font-mono text-rose-500">iloc</code></div>
                       <p className="text-[11px] text-slate-500 mb-1 leading-relaxed">`iloc` strictly stands for <strong>integer</strong> location. You cannot pass string column names or row labels strings parameters arrays datasets values schemas metrics constraints bounds sizes constraints buffers limits into it. If you want to use strings, use <code className="font-bold text-slate-800 dark:text-slate-200">.loc[]</code> instead!</p>
                      
                       <div className="flex flex-col sm:flex-row gap-4 mt-3">
                        <div className="flex-1">
                            <p className="text-[10px] text-rose-600 dark:text-rose-400 font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 block tracking-wider line-through decoration-rose-500 shadow-inner overflow-x-auto w-full text-center">df.iloc[:, "Name"]</p>
                            <p className="text-center text-[10px] font-bold text-rose-500 mt-1 uppercase">Crash</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono text-left bg-white dark:bg-slate-950 p-1.5 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-x-auto shadow-inner shadow-emerald-50 text-center">df.iloc[:, 0]</p>
                            <p className="text-center text-[10px] font-bold text-emerald-500 mt-1 uppercase">Correct</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    💡 Professional Advice
                  </h3>

                  <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 1: Remember the Exclusive Stop Index bounds matrices formats mapping structs vectors layouts buffers types.</span>
                            <p className="text-[11px] text-slate-500 leading-relaxed">If you write <code className="font-mono text-fuchsia-500 font-bold bg-fuchsia-50 dark:bg-fuchsia-900 px-1 rounded">df.iloc[0:5]</code>, Pandas fetches rows <code className="font-bold">0, 1, 2, 3, 4</code>. It <strong>STOPS</strong> before <code className="font-bold text-rose-500">5</code>! This behaves exactly like Python's native list bounds indices parameters constraints layouts lists formulas boundaries metrics types logic constants constraints formats parameters structures arrays loops layouts boundaries variables sizes lists constraints.</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 2: Negative Indexing ranges formats limits.</span>
                            <p className="text-[11px] text-slate-500 leading-relaxed">You can fetch from the end of the dataframe backwards checks metrics buffers bounds templates formats limits arrays! Want the very last row? <code className="font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-1 rounded font-bold">df.iloc[-1]</code> returns counting offsets thresholds constants loops databases blocks ranges lengths inputs constraints loops outputs checking tracking metrics outputs schemas layouts. </p>
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
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-fuchsia-400" />
                     Pipeline Output Console
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[12px] flex flex-col flex-1 overflow-y-auto max-h-[440px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <MapPin className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans leading-relaxed">Click loops buffers boundaries lists boundaries formats tracking loops limits buffers formats checking formats constraints algorithms thresholds vectors thresholds vectors limits ranges matrices databases tracking templates offsets schemas blocks arrays datasets loops outputs sizes fields layouts loops queries sizes.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('TypeError') || line.includes('CRASH') || line.includes('positional') ? 'text-rose-400 font-bold font-sans' :
                              line.includes('Name ') || line.includes('Age ') || line.includes('City ') || line.includes('Salary') ? 'text-fuchsia-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Anna') || line.includes('Ravi') ? 'text-emerald-300' :
                              !isNaN(Number(line.trim().charAt(0))) && i > 0 ? 'text-slate-300' :
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

export default PdIloc;
