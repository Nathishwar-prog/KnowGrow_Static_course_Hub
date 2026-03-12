import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Layers, 
  AlertTriangle, CheckCircle2, Table, Settings, 
  BarChart, Search, CopyX, Sparkles, Calculator
} from 'lucide-react';

const PdDropDuplicates: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'remove' | 'advanced' | 'visuals' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '   Name  Age     City',
          '0  John   25  Chennai',
          '1  Sara   30    Delhi',
          '2  John   25  Chennai',
          '3  Mike   28   Mumbai',
          '4  Sara   30    Delhi'
        ];
        break;
      case 'check_dupes':
        outLines = [
          '0    False',
          '1    False',
          '2     True',
          '3    False',
          '4     True',
          'dtype: bool'
        ];
        break;
      case 'drop_default':
        outLines = [
          '   Name  Age     City',
          '0  John   25  Chennai',
          '1  Sara   30    Delhi',
          '3  Mike   28   Mumbai'
        ];
        break;
      case 'drop_last':
        outLines = [
          '   Name  Age     City',
          '2  John   25  Chennai',
          '3  Mike   28   Mumbai',
          '4  Sara   30    Delhi'
        ];
        break;
      case 'drop_false':
        outLines = [
          '   Name  Age     City',
          '3  Mike   28   Mumbai'
        ];
        break;
      case 'drop_subset':
        outLines = [
          '   Name  Age     City',
          '0  John   25  Chennai',
          '1  Sara   30    Delhi',
          '3  Mike   28   Mumbai'
        ];
        break;
      case 'inplace_demo':
        outLines = [
          '> df.drop_duplicates(inplace=True)',
          '',
          '> print(df) # Source memory modified completely',
          '   Name  Age     City',
          '0  John   25  Chennai',
          '1  Sara   30    Delhi',
          '3  Mike   28   Mumbai'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Bar Chart (Age Distribution)...',
          '========================================',
          'Count |',
          '    2 |     [██]',
          '      |     [██]        [██]',
          '    1 |     [██]   [██] [██]',
          '      +---------------------------------',
          '         25     28     30'
        ];
        break;
      case 'real_world':
        outLines = [
          '   CustomerID   Name            Email',
          '0         101   Ravi   ravi@email.com',
          '1         102  Meena  meena@email.com',
          '',
          '> # Duplicate CustomerID 101 was successfully dropped.'
        ];
        break;
      case 'sum_dupes':
        outLines = [
          '> df.duplicated().sum()',
          '2'
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
          <CopyX className="w-10 h-10 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Drop Duplicates <code className="text-teal-600 dark:text-teal-400 text-3xl sm:text-4xl bg-teal-50 dark:bg-teal-900/20 px-3 py-1 rounded-xl">.drop_duplicates()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Remove repeated rows cleanly and safely. In real-world datasets, duplicate rows often appear due to data entry errors, system imports, or merging datasets.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-teal-500" />
            Duplicate Cleanser Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Search className="w-4 h-4 mr-1.5" /> 🔟 Detection
            </button>
            <button
              onClick={() => setActiveTab('remove')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'remove' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Layers className="w-4 h-4 mr-1.5" /> 5️⃣-9️⃣ Operations
            </button>
             <button
              onClick={() => setActiveTab('visuals')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'visuals' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 1️⃣1️⃣-1️⃣2️⃣ Visuals
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
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
                    <Table className="w-5 h-5 text-teal-500 mr-2" />
                    1️⃣ What is <code className="mx-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-1 rounded">drop_duplicates()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>It is a Pandas DataFrame method used to remove duplicate rows and keep only unique records in a dataset.</p>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                    2️⃣ Why is it Important?
                  </h3>
                  <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-xl shadow-sm text-sm text-slate-700 dark:text-slate-300">
                    <p className="mb-2 font-bold text-amber-800 dark:text-amber-500">Duplicate data causes major problems:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Incorrect analysis and skewed metric results</li>
                      <li>Wrong statistical averages and variances</li>
                      <li>Data inconsistency across reporting</li>
                      <li>Poor machine learning model training</li>
                    </ul>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-sky-500 mr-2" />
                    3️⃣ Basic Syntax & Parameters
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700 font-mono text-sm text-sky-600 dark:text-sky-400 font-bold overflow-x-auto">
                          DataFrame.drop_duplicates(subset=None, keep='first', inplace=False)
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
                                  <td className="p-3 font-mono text-xs text-fuchsia-600 dark:text-fuchsia-400">subset</td>
                                  <td className="p-3">Column(s) used to identify exactly what constitutes a duplicate</td>
                              </tr>
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-indigo-600 dark:text-indigo-400">keep</td>
                                  <td className="p-3">Which duplicate memory pointer to retain (<code className="font-bold font-mono">first</code>, <code className="font-bold font-mono">last</code>, <code className="font-bold font-mono text-rose-500">False</code>)</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono text-xs text-emerald-600 dark:text-emerald-400">inplace</td>
                                  <td className="p-3">Modify the original DataFrame block permanently</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-8">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full flex flex-col items-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASE</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2 w-full flex items-center justify-between">
                                4️⃣ Example Dataset 
                                <span className="text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-2 py-1 rounded">Contains 2 Duplicates</span>
                            </h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto">
data = {'{'}
    <span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Sara"</span>, <span className="text-rose-500 font-bold">"John"</span>, <span className="text-amber-500">"Mike"</span>, <span className="text-rose-500 font-bold">"Sara"</span>],
    <span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500">25</span>, <span className="text-emerald-500">30</span>, <span className="text-rose-500 font-bold">25</span>, <span className="text-emerald-500">28</span>, <span className="text-rose-500 font-bold">30</span>],
    <span className="text-amber-500">"City"</span>: [<span className="text-amber-500">"Chennai"</span>, <span className="text-amber-500">"Delhi"</span>, <span className="text-rose-500 font-bold">"Chennai"</span>, <span className="text-amber-500">"Mumbai"</span>, <span className="text-rose-500 font-bold">"Delhi"</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                      <h3 className="font-bold text-slate-900 dark:text-white flex items-center">
                        <Search className="w-5 h-5 text-indigo-500 mr-2" />
                        🔟 Checking Duplicate Rows
                      </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Before removing duplicates, you can detect their exact index positions running the sibling verification method.</p>

                  <button onClick={() => runDemo('check_dupes')} className="text-left group w-full mb-8">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-6 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DETECTION</div>
                      <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-3 ml-1 ">Detect boolean mapping mask</h4>
                      <code className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-indigo-900/50 shadow-sm block w-fit border-l-4 border-l-indigo-500 mb-3">df.duplicated()</code>
                      <p className="text-xs text-slate-600 dark:text-slate-400 bg-white/60 dark:bg-black/20 p-2 rounded w-fit">Returns a Pandas Boolean Series array. <br/> <code className="font-bold text-amber-500">True</code> indicates it is a duplicate of a previously seen row.</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Calculator className="w-5 h-5 text-emerald-500 mr-2" />
                    Quick Count Helper
                  </h3>

                  <button onClick={() => runDemo('sum_dupes')} className="text-left group w-full">
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm h-full relative">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SUM</div>
                      <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-2">How many total duplicates?</h4>
                      <code className="text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-emerald-900/50 shadow-sm block w-fit">df.duplicated().sum()</code>
                      <p className="text-[10px] text-slate-500 mt-2">Sums the boolean Trues to output exactly how many rows need dropping.</p>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'remove' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Layers className="w-5 h-5 text-sky-500 mr-2" />
                        5️⃣-7️⃣ Core Removal Operations
                  </h3>
                  
                  <div className="space-y-4">
                      {/* Default */}
                      <button onClick={() => runDemo('drop_default')} className="text-left group w-full">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DEFAULT</div>
                          <h4 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-2 flex items-center justify-between">
                             5️⃣ Removing Duplicate Rows
                             <span className="text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1 py-0.5 rounded ml-2">default</span>
                          </h4>
                          <code className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-sky-900/50 shadow-sm block w-fit mb-2">df.drop_duplicates()</code>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400">By default, Pandas drops subsequent duplicates and <b>keeps the first occurrence.</b></p>
                        </div>
                      </button>

                       <div className="grid sm:grid-cols-2 gap-4">
                            {/* Keep Last */}
                            <button onClick={() => runDemo('drop_last')} className="text-left group w-full">
                                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors shadow-sm h-full relative">
                                <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN LAST</div>
                                <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">6️⃣ Keeping the Last Duplicate</h4>
                                <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-1.5 py-1 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.drop_duplicates(keep=<span className="text-amber-500">"last"</span>)</code>
                                <p className="text-[10px] text-slate-500">Keeps the newest entry relative to the bottom.</p>
                                </div>
                            </button>
                            
                             {/* Keep False */}
                            <button onClick={() => runDemo('drop_false')} className="text-left group w-full">
                                <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 rounded-xl p-4 hover:border-rose-400 transition-colors shadow-sm h-full relative">
                                <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN NONE</div>
                                <h4 className="font-bold text-sm text-rose-700 dark:text-rose-400 mb-2">7️⃣ Removing All Duplicates Completely</h4>
                                <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-1.5 py-1 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.drop_duplicates(keep=<span className="text-rose-500 font-bold">False</span>)</code>
                                <p className="text-[10px] text-slate-500">This removes EVERY row that is linked as a duplicate without keeping any survivor.</p>
                                </div>
                            </button>
                       </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-2" />
                    8️⃣ Specific Column Filtering (<code className="ml-1 text-indigo-600 font-mono">subset=</code>)
                  </h3>

                  <button onClick={() => runDemo('drop_subset')} className="text-left group w-full">
                       <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 border-y border-r border-indigo-200 dark:border-slate-700 rounded-r-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm relative">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SUBSET</div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 font-bold border-b border-indigo-200 dark:border-indigo-800/50 pb-2">Sometimes duplicates aren't exact identical row clones, but exist based ONLY on a critical key column.</p>
                            <code className="text-xs sm:text-sm bg-white dark:bg-slate-950 font-bold p-2 text-indigo-700 dark:text-indigo-400 border border-slate-200 dark:border-slate-700 rounded inline-block shadow-inner mb-2">df.drop_duplicates(subset=[<span className="text-amber-500 font-normal">"Name"</span>])</code>
                            <p className="text-[10px] text-slate-500 mt-2">Here, duplicates check algorithm triggers solely against identical strings residing in the Name mapping.</p>
                       </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-4 text-sm">
                    <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                    9️⃣ Make Changes Permanent (<code className="ml-1 text-amber-500 font-mono">inplace=True</code>)
                  </h3>
                  
                  <button onClick={() => runDemo('inplace_demo')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300 relative hover:border-amber-400 transition-colors">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN INPLACE</div>
                        By default, drop_duplicates() does not modify the original loaded memory DataFrame. To force the execution mapping update the dataset:
                        <div className="mt-3 bg-white dark:bg-slate-950 p-2 font-mono text-xs rounded border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 w-fit font-bold">
                            df.drop_duplicates(<span className="text-amber-500">inplace=True</span>)
                        </div>
                      </div>
                  </button>

                </div>
              )}

               {activeTab === 'visuals' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <BarChart className="w-5 h-5 text-emerald-500 mr-2" />
                      1️⃣1️⃣ Visualization Data Affects
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-8">
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN VIZ</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">After successfully tracking and mapping duplicates out of existence, you typically visualize the clean data tracking distributions.</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1">
import matplotlib.pyplot as plt

df[<span className="text-amber-500">"Age"</span>].<span className="text-teal-500 font-bold">value_counts</span>().<span className="text-sky-500 font-bold">plot</span>(kind=<span className="text-amber-500">"bar"</span>)

plt.title(<span className="text-amber-500">"Age Distribution"</span>)
plt.ylabel(<span className="text-amber-500">"Count"</span>)
plt.show()
                          </pre>
                        </div>
                      </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Sparkles className="w-5 h-5 text-indigo-500 mr-2" />
                      1️⃣2️⃣ Real-World Data Filter Application
                  </h3>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full mb-4">
                      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN FILTER</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-bold">Scenario: Duplicate ID generation in Customer Registrations list.</p>
                        
                        <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto mb-3">
data = {'{'}
    <span className="text-amber-500">"CustomerID"</span>: [<span className="text-rose-500 font-bold">101</span>, <span className="text-emerald-500">102</span>, <span className="text-rose-500 font-bold">101</span>],
    <span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"Ravi"</span>, <span className="text-amber-500">"Meena"</span>, <span className="text-amber-500">"Ravi"</span>],
    <span className="text-amber-500">"Email"</span>: [<span className="text-amber-500">"ravi@e"</span>, <span className="text-amber-500">"meen@e"</span>, <span className="text-amber-500">"ravi@e"</span>]
{'}'}
df = pd.DataFrame(data)

<span className="text-slate-400 italic"># Ensure customer appears only strictly once via ID subset lock</span>
df.drop_duplicates(subset=[<span className="text-amber-500">"CustomerID"</span>], inplace=<span className="text-indigo-500 font-bold">True</span>)
                        </pre>
                      </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣3️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300">❌ Forgetting Parentheses Wrapper</div>
                       <p className="text-[11px] text-rose-600 dark:text-rose-400 mb-1">Wrong: <code className="bg-white dark:bg-slate-950 px-1 rounded mx-1 text-slate-800 dark:text-slate-200 border border-rose-200 dark:border-rose-900 border-dashed">df.drop_duplicates</code></p>
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">Correct: <code className="bg-white dark:bg-slate-950 px-1 rounded mx-1 text-slate-800 dark:text-slate-200 border border-emerald-200 dark:border-emerald-900 shadow-sm border-l-2 border-l-emerald-500">df.drop_duplicates()</code></p>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative text-sm">
                      <div className="font-bold text-slate-700 dark:text-slate-300 flex items-center mb-2">❌ Immutable Memory Expectation</div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-1 leading-relaxed">Expecting the variable <span className="font-bold bg-rose-100 dark:bg-rose-900/30 px-1">df</span> to instantly mutate its internal row count natively.</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-left bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold">Use: `inplace=True` or `df = df.drop...`</p>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣4️⃣ Professional Advice (Tips)
                  </h3>

                  <div className="space-y-4">
                      
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                          <div className="bg-teal-100 dark:bg-teal-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-teal-600 dark:text-teal-400">1</span>
                          </div>
                          <div className="w-full relative">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Pre-Check Counter</span>
                            <button onClick={() => runDemo('sum_dupes')} className="absolute top-0 right-0 text-[10px] font-bold text-teal-500 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/50 px-2 py-0.5 rounded opacity-70 hover:opacity-100 transition-opacity">RUN DUMP</button>
                            <p className="text-[11px] text-slate-500 mb-2">Always check integer duplication quantity size BEFORE destruction mapping drops.</p>
                            <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 px-3 flex py-1.5 rounded border border-slate-200 dark:border-slate-700 text-teal-600 dark:text-teal-400 font-bold shadow-inner">df.duplicated().sum()</code>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                           <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-indigo-600 dark:text-indigo-400">2</span>
                          </div>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Subset Key Optimization</span>
                             <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-between">
                                <code className="bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1.5 rounded text-[11px] border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 font-bold block w-fit h-fit"><span className="text-slate-500 mr-2 font-normal">df.</span>drop_duplicates(subset=[<span className="text-amber-500 font-normal">"email"</span>])</code>
                                <div className="text-[10px] text-slate-600 dark:text-slate-400 border-l-2 border-slate-200 dark:border-slate-700 pl-3">
                                    <span className="font-bold mb-1 block">Speed increase via single-field tracking:</span>
                                    <span>Instead of checking 50 columns recursively, mapping via `subset=` vastly improves large dataset algorithm performance tracking!</span>
                                </div>
                            </div>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
                          <div className="bg-sky-100 dark:bg-sky-900/30 p-2 w-10 h-10 flex justify-center items-center rounded shrink-0">
                              <span className="font-bold text-base text-sky-600 dark:text-sky-400">3</span>
                          </div>
                          <div className="w-full relative">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Combine Data Cleaning Workflows</span>
                            <p className="text-[10px] text-slate-500 mb-2">Build a robust data scrubbing pipeline executing multiple logical chains consecutively restoring ordered iteration matrices index counters.</p>
                            <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 p-3 flex flex-col rounded border border-slate-200 dark:border-slate-700 text-sky-600 dark:text-sky-400 font-bold w-full overflow-x-auto shadow-inner space-y-1">
                                <span>df.drop_duplicates()</span>
                                <span>df.dropna()</span>
                                <span>df.reset_index(drop=<span className="text-amber-500 font-normal">True</span>) <span className="text-slate-400 italic"># Important! Rebuilds sequence ordering.</span></span>
                            </code>
                          </div>
                      </div>

                      <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-200 dark:border-teal-800/50 p-4 rounded-xl relative shadow-inner">
                         <h4 className="font-bold text-sm text-teal-800 dark:text-teal-300 mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-teal-500"/>
                            1️⃣5️⃣ Teacher's Course Recommendations
                         </h4>
                         <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Recommended path structure for successfully grasping deduplication patterns algorithmically in Python Data Science implementations:</p>
                         <ol className="list-decimal pl-5 text-[11px] text-slate-500 space-y-1 mt-3 font-mono">
                             <li>Definition mapping visualization</li>
                             <li>Initialize dummy corrupted duplicate layout dataset.</li>
                             <li>Process using <code className="bg-white dark:bg-slate-800 text-teal-600">drop_duplicates()</code>.</li>
                             <li>Explain variable tracking via Keep/Subset modifications.</li>
                             <li>Present <code className="bg-white dark:bg-slate-800 text-teal-600">duplicated()</code> prior to destructive functions.</li>
                             <li>Reinforce context learning by framing inside Real World mockups.</li>
                         </ol>
                      </div>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
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

                  <div className="font-mono text-[13px] sm:text-sm flex flex-col flex-1 overflow-y-auto max-h-[440px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <CopyX className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans">Run deduplication commands to view how Pandas scrubs repeated array elements securely.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.includes('Generating') ? 'text-emerald-400 italic mb-2 font-sans text-xs' :
                              line.includes('===') || line.includes('+--') || line.startsWith('>') || line.includes('#') || line.includes('dtype: bool') ? 'text-slate-500 block text-xs' :
                              line.includes('█') ? 'text-teal-400 font-bold' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Customer') || line.includes('Email') || line.includes('Count') ? 'text-indigo-300 font-bold border-b border-slate-800/50 pb-1 mb-1' :
                              line.includes('True') ? 'text-rose-400 font-bold' :
                              line.includes('False') ? 'text-emerald-400' :
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

export default PdDropDuplicates;
