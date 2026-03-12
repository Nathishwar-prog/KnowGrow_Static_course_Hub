import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Columns, Layers, 
  AlertTriangle, CheckCircle2, Table, Trash2, Settings, 
  BarChart, Scissors, EyeOff
} from 'lucide-react';

const PdDrop: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'columns' | 'rows' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '   Name  Age  Salary',
          '0  John   25   50000',
          '1  Sara   30   60000',
          '2  Mike   28   55000',
          '3  Anna   35   70000'
        ];
        break;
      case 'drop_col_1':
        outLines = [
          '   Name  Age',
          '0  John   25',
          '1  Sara   30',
          '2  Mike   28',
          '3  Anna   35'
        ];
        break;
      case 'drop_col_multi':
        outLines = [
          '   Name',
          '0  John',
          '1  Sara',
          '2  Mike',
          '3  Anna'
        ];
        break;
      case 'drop_row_1':
        outLines = [
          '   Name  Age  Salary',
          '0  John   25   50000',
          '2  Mike   28   55000',
          '3  Anna   35   70000'
        ];
        break;
      case 'drop_row_multi':
        outLines = [
          '   Name  Age  Salary',
          '0  John   25   50000',
          '3  Anna   35   70000'
        ];
        break;
      case 'inplace_demo':
        outLines = [
          '> df.drop("Salary", axis=1, inplace=True)',
          '',
          '> print(df) # Original DataFrame is modified',
          '   Name  Age',
          '0  John   25',
          '1  Sara   30',
          '2  Mike   28',
          '3  Anna   35'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Bar Chart...',
          'Employee Age (Mock Formatted Output)',
          '========================================',
          '35 |                   [██]',
          '30 |         [██]',
          '28 |               [██]',
          '25 |   [██]',
          '   +---------------------------',
          '      John  Sara  Mike  Anna'
        ];
        break;
      case 'real_world':
        outLines = [
          '   Customer  Age      Address',
          '0   Alice   42  123 Main St',
          '1   Bob     29  456 Oak Ave',
          '2   Charlie 35  789 Pine Rd'
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
        <div className="inline-flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/30 rounded-2xl mb-6 shadow-sm border border-rose-200 dark:border-rose-800/50">
          <Trash2 className="w-10 h-10 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Drop <code className="text-rose-600 dark:text-rose-400 text-3xl sm:text-4xl bg-rose-50 dark:bg-rose-900/20 px-3 py-1 rounded-xl">.drop()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Master the art of removing unwanted data. The drop() function is an essential tool for cleaning datasets before analysis or machine learning tracking.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-rose-500" />
            Drop Operation Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
            <button
              onClick={() => setActiveTab('columns')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'columns' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Columns className="w-4 h-4 mr-1.5" /> 5️⃣-6️⃣ Columns
            </button>
             <button
              onClick={() => setActiveTab('rows')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'rows' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Layers className="w-4 h-4 mr-1.5" /> 7️⃣-8️⃣ Rows
            </button>
             <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Settings className="w-4 h-4 mr-1.5" /> 1️⃣1️⃣-1️⃣3️⃣ Advanced
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 Pro Tips
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
                    <Table className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣ What is <code className="mx-2 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-1 rounded">drop()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>It is a Pandas DataFrame method used to remove specified rows or columns from a dataset based on labels or indexes.</p>
                    <p className="font-bold border-l-4 border-rose-500 pl-3 bg-rose-50 dark:bg-rose-900/10 py-2">In simple words: <code className="text-rose-600 dark:text-rose-400 font-mono">drop()</code> deletes unwanted data from a DataFrame.</p>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Scissors className="w-5 h-5 text-indigo-500 mr-2" />
                    2️⃣ Why is it Important?
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>Remove unnecessary or sensitive columns (e.g., Passwords, Addresses)</li>
                    <li>Delete duplicate or incorrect rows</li>
                    <li>Clean datasets before training machine learning models</li>
                    <li>Simplify data to reduce memory usage during analysis</li>
                  </ul>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-emerald-500 mr-2" />
                    3️⃣ Basic Syntax & Parameters
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700 font-mono text-sm text-emerald-600 dark:text-emerald-400 font-bold overflow-x-auto">
                          DataFrame.drop(labels=None, axis=0, index=None, columns=None, inplace=False)
                      </div>
                      <table className="w-full text-left text-sm">
                          <thead className="bg-white dark:bg-slate-950 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                              <tr>
                                  <th className="p-3">Parameter</th>
                                  <th className="p-3">Description</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900">
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-sky-600 dark:text-sky-400">labels</td>
                                  <td className="p-3">Name of row(index) or column to remove</td>
                              </tr>
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300"><Layers className="w-3 h-3 text-amber-500"/> axis</td>
                                  <td className="p-3 font-mono text-xs"><span className="text-amber-600 dark:text-amber-400">0 = rows</span>, <span className="text-indigo-500">1 = columns</span></td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-amber-600 dark:text-amber-400">index / columns</td>
                                  <td className="p-3">Specific rows/columns mapped directly</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-rose-600 dark:text-rose-400">inplace</td>
                                  <td className="p-3">Apply changes directly modifying original memory DataFrame</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-8">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full flex flex-col items-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASE</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2 w-full">4️⃣ Base Example Dataset</h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto">
data = {'{'}
    <span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Sara"</span>, <span className="text-amber-500">"Mike"</span>, <span className="text-amber-500">"Anna"</span>],
    <span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500">25</span>, <span className="text-emerald-500">30</span>, <span className="text-emerald-500">28</span>, <span className="text-emerald-500">35</span>],
    <span className="text-amber-500">"Salary"</span>: [<span className="text-emerald-500">50000</span>, <span className="text-emerald-500">60000</span>, <span className="text-emerald-500">55000</span>, <span className="text-emerald-500">70000</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                </div>
              )}

              {activeTab === 'columns' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                      <h3 className="font-bold text-slate-900 dark:text-white flex items-center">
                        <Columns className="w-5 h-5 text-indigo-500 mr-2" />
                        5️⃣-6️⃣ Dropping Columns
                      </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-bold">To target columns, you must specify <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-indigo-500">axis=1</code>.</p>

                  <div className="grid md:grid-cols-2 gap-4">
                      {/* Drop Single Col */}
                      <button onClick={() => runDemo('drop_col_1')} className="text-left group w-full">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN 1 COL</div>
                          <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-2">5️⃣ Dropping a Single Column</h4>
                          <code className="text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-indigo-900/50 shadow-sm block w-fit mb-3">df.drop(<span className="text-amber-500 font-normal">"Salary"</span>, axis=<span className="text-indigo-500 font-bold">1</span>)</code>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400">Notice the <code className="font-mono">axis=1</code> mapping specifically triggering a vertical deletion block against the `Salary` header label.</p>
                        </div>
                      </button>

                      {/* Drop Multiple Cols */}
                      <button onClick={() => runDemo('drop_col_multi')} className="text-left group w-full">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN N-COLS</div>
                          <h4 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-2">6️⃣ Dropping Multiple Columns</h4>
                          <code className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-sky-900/50 shadow-sm block w-fit mb-3">df.drop([<span className="text-amber-500 font-normal">"Age"</span>, <span className="text-amber-500 font-normal">"Salary"</span>], axis=<span className="text-indigo-500 font-bold">1</span>)</code>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400">Wrap multiple field labels inside a Python array list <code className="font-mono font-bold">[]</code> to delete simultaneously.</p>
                        </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                    9️⃣ Cleaner Syntax Alternative: <code className="ml-1 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-1 rounded shadow-sm">columns=</code> Parameter
                  </h3>
                  
                  <div className="bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                    Instead of specifying the somewhat ambiguous <code className="bg-slate-100 dark:bg-slate-900 px-1">axis=1</code> parameter, many modern Pandas analysts prefer directly assigning the target list to the explicit <code className="font-bold text-emerald-600">columns</code> parameter block for instant readability.
                    <div className="mt-3 bg-slate-50 dark:bg-slate-950 p-2 font-mono text-xs rounded border border-slate-100 dark:border-slate-800 text-center text-slate-700 dark:text-slate-300">
                        df.drop(<span className="text-emerald-500 font-bold">columns</span>=[<span className="text-amber-500 line-through">"Salary"</span>])
                    </div>
                  </div>

                </div>
              )}

               {activeTab === 'rows' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                      <h3 className="font-bold text-slate-900 dark:text-white flex items-center">
                        <Layers className="w-5 h-5 text-amber-500 mr-2" />
                        7️⃣-8️⃣ Dropping Rows
                      </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-bold">Targeting rows targets the default <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-amber-500">axis=0</code> lookup plane.</p>

                  <div className="grid md:grid-cols-2 gap-4">
                      {/* Drop Single Row */}
                      <button onClick={() => runDemo('drop_row_1')} className="text-left group w-full">
                        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN 1 ROW</div>
                          <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400 mb-2">7️⃣ Dropping a Single Row</h4>
                          <code className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-amber-900/50 shadow-sm block w-fit mb-3">df.drop(<span className="text-emerald-500">1</span>) <span className="text-slate-400 italic font-normal"># Same as axis=0</span></code>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400">Row matching Index <code className="font-mono">1</code> (Sara's data point object block) is removed completely.</p>
                        </div>
                      </button>

                      {/* Drop Multiple Rows */}
                      <button onClick={() => runDemo('drop_row_multi')} className="text-left group w-full">
                        <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-4 hover:border-fuchsia-400 dark:hover:border-fuchsia-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN N-ROWS</div>
                          <h4 className="font-bold text-sm text-fuchsia-700 dark:text-fuchsia-400 mb-2">8️⃣ Dropping Multiple Rows</h4>
                          <code className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-fuchsia-900/50 shadow-sm block w-fit mb-3">df.drop([<span className="text-emerald-500">1</span>, <span className="text-emerald-500">2</span>])</code>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400">Pass a Python Array List corresponding to numerical integer labels to delete multiple instances sequentially.</p>
                        </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                    🔟 Cleaner Syntax Alternative: <code className="ml-1 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-1 rounded shadow-sm">index=</code> Parameter
                  </h3>
                  
                  <div className="bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                    Just like the <code className="text-emerald-600 font-bold">columns</code> parameter bypasses `axis=1`, calling the explicit <code className="text-amber-500 font-bold">index</code> parameter skips using implicit `axis=0` bindings, making scripts self-documenting.
                    <div className="mt-3 bg-slate-50 dark:bg-slate-950 p-2 font-mono text-xs rounded border border-slate-100 dark:border-slate-800 text-center text-slate-700 dark:text-slate-300">
                        df.drop(<span className="text-amber-500 font-bold">index</span>=[<span className="text-emerald-500 line-through">1</span>, <span className="text-emerald-500 line-through">2</span>])
                    </div>
                  </div>

                </div>
              )}

               {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Settings className="w-5 h-5 text-rose-500 mr-2" />
                      1️⃣1️⃣ Using <code className="ml-1 text-rose-500 font-mono">inplace=True</code>
                  </h3>

                  <button onClick={() => runDemo('inplace_demo')} className="text-left group w-full mb-8">
                      <div className="bg-rose-50 dark:bg-rose-900/10 border-l-4 border-rose-500 border-y border-r border-rose-200 dark:border-slate-700 rounded-r-xl p-5 hover:border-rose-400 dark:hover:border-rose-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN LOGIC</div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 font-bold border-b border-rose-200 dark:border-rose-800/50 pb-2">By default, <code className="bg-white dark:bg-slate-800 px-1 rounded text-red-500 font-mono text-[11px] font-normal">drop()</code> does NOT change the original DataFrame object.</p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed text-justify">It generates a detached duplicate frame block in-memory. If you want to permanently execute the destructive deletion logic command immediately modifying your source structure directly apply <code className="text-[11px] font-bold bg-white dark:bg-slate-950 px-1 font-mono text-emerald-600 border border-slate-200 dark:border-slate-800 rounded">inplace=True</code>.</p>
                        
                        <div className="mt-3 bg-white dark:bg-slate-950 p-2 lg:p-3 font-mono text-[10px] sm:text-[11px] rounded border border-rose-100 dark:border-rose-900 flex justify-center text-slate-700 dark:text-slate-300">
                            df.drop(<span className="text-amber-500">"Salary"</span>, axis=<span className="text-indigo-500">1</span>, <span className="text-rose-500 font-bold animate-pulse ml-1">inplace=True</span>)
                        </div>
                      </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <BarChart className="w-5 h-5 text-sky-500 mr-2" />
                      1️⃣2️⃣ Visualization Mapping
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-8">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN VIZ</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Sometimes after dropping columns we visualize the remaining finalized data parameters.</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1">
import matplotlib.pyplot as plt

df.plot(x=<span className="text-amber-500">"Name"</span>, y=<span className="text-amber-500">"Age"</span>, kind=<span className="text-amber-500">"bar"</span>)

plt.title(<span className="text-amber-500">"Employee Age"</span>)
plt.show()
                          </pre>
                        </div>
                      </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <EyeOff className="w-5 h-5 text-emerald-500 mr-2" />
                      1️⃣3️⃣ Real-World Business Example
                  </h3>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full mb-4">
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CLEAN</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-bold">Scenario: Removing sensitive/unnecessary Phone columns from Customer Data.</p>
                        
                        <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1 h-32 mb-2">
data = {'{'}
  <span className="text-amber-500">"Customer"</span>: [<span className="text-amber-500">"Alice"</span>, <span className="text-amber-500">"Bob"</span>, <span className="text-amber-500">"Charlie"</span>],
  <span className="text-amber-500">"Age"</span>:      [<span className="text-emerald-500">42</span>, <span className="text-emerald-500">29</span>, <span className="text-emerald-500">35</span>],
  <span className="text-amber-500">"Phone"</span>:    [<span className="text-amber-500">"555-0101"</span>, <span className="text-amber-500">"555-0202"</span>, <span className="text-amber-500">"555-0303"</span>],
  <span className="text-amber-500">"Address"</span>:  [<span className="text-amber-500">"123 Main St"</span>, <span className="text-amber-500">"456 Oak Ave"</span>, <span className="text-amber-500">"789 Pine Rd"</span>]
{'}'}
df = pd.DataFrame(data)

<span className="text-slate-400 italic font-normal"># Drop the Private phone column to simplify metrics</span>
df.drop(columns=[<span className="text-amber-500">"Phone"</span>], inplace=<span className="text-emerald-500 font-bold">True</span>)
                        </pre>
                      </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣4️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">❌ Forgetting the <code className="text-rose-500">axis</code> Mapping</div>
                       <p className="text-[11px] text-rose-600 dark:text-rose-400 mb-1">Wrong: <code className="bg-white dark:bg-slate-950 px-1 rounded mx-1 text-slate-800 dark:text-slate-200 border border-rose-200 dark:border-rose-900 border-dashed">df.drop("Salary")</code></p>
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">Correct: <code className="bg-white dark:bg-slate-950 px-1 rounded mx-1 text-slate-800 dark:text-slate-200 border border-emerald-200 dark:border-emerald-900 shadow-sm border-l-2 border-l-emerald-500">df.drop("Salary", axis=1)</code></p>
                      <p className="text-[10px] text-slate-500 mt-2 leading-tight">Without `axis=1`, Python assumes you meant an index row titled "Salary" causing a generic internal KeyError failure lookup.</p>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative text-sm">
                      <div className="font-bold text-slate-700 dark:text-slate-300 flex items-center mb-2">❌ Variable Assignment Voiding</div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-1 leading-relaxed">Expecting original DataFrame to magically change when executing <span className="font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-1">drop()</span>.</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-center bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold">You MUST invoke `inplace=True` or remap mapping: <code className="font-normal border-b border-emerald-500">df = df.drop(...)</code></p>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣5️⃣ Professional Advice (Tips)
                  </h3>

                  <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-emerald-600 dark:text-emerald-400">1</span>
                          </div>
                          <div className="flex-1 w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Use <code className="bg-slate-100 dark:bg-slate-900 px-1 text-emerald-600">columns=</code> instead of Axis.</span>
                            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-1 font-mono text-[11px] text-emerald-600 font-bold w-full mx-auto shadow-inner mt-2">
                                <span className="text-center w-full">df.drop(<span className="text-emerald-500 border-b border-emerald-500 border-dotted">columns</span>=[<span className="text-amber-500 line-through">"Salary"</span>])</span>
                            </div>
                            <p className="text-[10px] text-slate-500 text-center mt-1 w-full flex-1">It makes your source code readable without having to memorize numerical mapping arrays indexing schemas.</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                           <div className="bg-sky-100 dark:bg-sky-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-sky-600 dark:text-sky-400">2</span>
                          </div>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Check Drop Viability Checking Nulls First</span>
                             <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-between">
                                <code className="bg-sky-50 dark:bg-sky-900/20 px-3 py-1.5 rounded text-[11px] border border-sky-100 dark:border-sky-800 text-sky-700 dark:text-sky-300 font-bold block w-fit h-fit"><span className="text-slate-500 mr-2 font-normal">df.</span>isnull().sum()</code>
                                <div className="text-[10px] text-slate-600 dark:text-slate-400 border-l-2 border-slate-200 dark:border-slate-700 pl-3">
                                    <span className="bg-slate-100 dark:bg-slate-900 px-1 rounded block mb-1">Run an analysis first!</span>
                                    <span>If a column is &gt;80% NaN values lacking context, deploy <code className="font-bold font-mono">.drop()</code> directly onto it.</span>
                                </div>
                            </div>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                          <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-indigo-600 dark:text-indigo-400">3</span>
                          </div>
                          <div className="w-full relative">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Combine Drop Cleaners</span>
                            <p className="text-[10px] text-slate-500 mb-2">Build a robust data scrubbing pipeline executing multiple logical chains consecutively before analyzing formats.</p>
                            <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 p-3 flex flex-col rounded border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-bold w-full overflow-x-auto shadow-inner space-y-1">
                                <span>df.drop_duplicates(<span className="text-rose-400 italic font-normal ml-2">inplace=True</span>)</span>
                                <span>df.dropna(<span className="text-rose-400 italic font-normal ml-11">inplace=True</span>)</span>
                                <span>df.drop(columns=[<span className="text-amber-500">"ID"</span>], <span className="text-rose-400 italic font-normal ml-1">inplace=True</span>)</span>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-rose-400" />
                     Execution Console
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-sm flex flex-col flex-1 overflow-y-auto max-h-[440px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Trash2 className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans">Run drop commands to view how DataFrames are modified.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.includes('Generating') ? 'text-emerald-400 italic mb-2 font-sans text-xs' :
                              line.includes('===') || line.includes('+--') || line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-xs' :
                              line.includes('█') ? 'text-sky-400 font-bold' :
                              line.includes('Name') || line.includes('Age') || line.includes('Salary') || line.includes('Customer') || line.includes('Address') || line.includes('Phone') ? 'text-indigo-300 font-bold border-b border-slate-800/50 pb-1 mb-1' :
                              !isNaN(Number(line.trim().charAt(0))) && i > 0 && !line.includes('%') ? 'text-emerald-300' :
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

export default PdDrop;
