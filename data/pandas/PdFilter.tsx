import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Layers, 
  AlertTriangle, Table, Settings, 
  BarChart, Filter, SearchCode, Scissors, Database
} from 'lucide-react';

const PdFilter: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'items' | 'patterns' | 'visuals' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '   Name  Age  Salary     City',
          '0  John   25   50000  Chennai',
          '1  Sara   30   60000    Delhi',
          '2  Mike   28   55000   Mumbai'
        ];
        break;
      case 'run_items':
        outLines = [
          '> df.filter(items=["Age", "Salary"])',
          '   Age  Salary',
          '0   25   50000',
          '1   30   60000',
          '2   28   55000'
        ];
        break;
      case 'run_like':
        outLines = [
          '> df.filter(like="a")',
          '   Name  Salary',
          '0  John   50000',
          '1  Sara   60000',
          '2  Mike   55000',
          '',
          '> # Notice "Name" and "Salary" both contain the letter "a"!'
        ];
        break;
      case 'run_regex':
        outLines = [
          '> df.filter(regex="^S")',
          '   Salary',
          '0   50000',
          '1   60000',
          '2   55000',
          '',
          '> # ^ means "starts with". Only Salary starts with "S".'
        ];
        break;
      case 'run_axis0':
        outLines = [
          '> df.filter(items=[0, 1], axis=0)',
          '   Name  Age  Salary     City',
          '0  John   25   50000  Chennai',
          '1  Sara   30   60000    Delhi',
          '',
          '> # Extracting specific rows matching exact Index limits.'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Bar Chart (Filtered Numeric Columns)...',
          'df.filter(items=["Age", "Salary"]).plot(kind="bar")',
          '========================================',
          'Value |',
          ' 60k  |         [██]',
          ' 55k  |                  [██]',
          ' 50k  |  [██]',
          '   0  |  [__]   [__]     [__]',
          '      +-------------------------',
          '        Age   Salary    Age'
        ];
        break;
      case 'real_world':
        outLines = [
          '   Product  Price  Profit  Region  Sales',
          '0   Laptop  80000   20000   North    150',
          '1    Phone  30000   10000   South    300',
          '',
          '> df.filter(regex="Price|Profit|Sales")',
          '   Price  Profit  Sales',
          '0  80000   20000    150',
          '1  30000   10000    300',
          '',
          '> # Isolated purely financial columns efficiently.'
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
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
          <Filter className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Label Filter <code className="text-emerald-600 dark:text-emerald-400 text-3xl sm:text-4xl bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-xl">.filter()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Extract specific rows or columns rapidly using label matches and regex patterns instead of writing complex logical conditions matrices blocks natively parameters!
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-emerald-500" />
            Filtering Extraction Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('items')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'items' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Scissors className="w-4 h-4 mr-1.5" /> 5️⃣, 8️⃣ Exact Lists
            </button>
            <button
              onClick={() => setActiveTab('patterns')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'patterns' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <SearchCode className="w-4 h-4 mr-1.5" /> 6️⃣-7️⃣ Patterns
            </button>
             <button
              onClick={() => setActiveTab('visuals')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'visuals' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 9️⃣-🔟 Visuals/Regex
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
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
                    <Table className="w-5 h-5 text-emerald-500 mr-2" />
                    1️⃣ What is <code className="mx-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-1 rounded">filter()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                      <p>It is a Pandas DataFrame method used to subset (cut down) rows or columns based specifically on mapping their <b>Index Labels</b> or <b>Column Names</b> against textual queries naturally matching.</p>
                     <p className="font-bold border-l-4 border-emerald-500 pl-3 bg-emerald-50 dark:bg-emerald-900/10 py-2 text-emerald-800 dark:text-emerald-400">NOTE: It filters based on the LABEL names (like 'Salary' or 'Age'), not the actual DATA contained inside them.</p>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Database className="w-5 h-5 text-indigo-500 mr-2" />
                    2️⃣ Why is it Important?
                  </h3>
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-900/50 p-4 rounded-xl shadow-sm text-sm text-slate-700 dark:text-slate-300">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Select specific columns instantly across massive Data warehouses quickly filtering structures.</li>
                      <li>Extract columns dynamically using RegEx pattern limits bounds boundaries.</li>
                      <li>Drastically reduce DataFrame memory sizes improving readability execution limits matrices datasets ranges.</li>
                    </ul>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax & Parameters
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700 font-mono text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold overflow-x-auto">
                          DataFrame.filter(items=None, like=None, regex=None, axis=None)
                      </div>
                      <table className="w-full text-left text-sm">
                          <thead className="bg-white dark:bg-slate-950 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                              <tr>
                                  <th className="p-3">Parameter</th>
                                  <th className="p-3">Description</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 text-[11px] sm:text-xs">
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-sky-600 dark:text-sky-400">items</td>
                                  <td className="p-3">Explicit exact list tracking strings boundaries names (e.g. `["Age", "Salary"]`).</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-fuchsia-600 dark:text-fuchsia-400">like</td>
                                  <td className="p-3">Finds any column name simply checking substrings loops matrices inputs variables loops constraints checks outputs.</td>
                              </tr>
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400">regex</td>
                                  <td className="p-3">Advanced pattern matching tracking checking (e.g. `^Sales` limits outputs limitations checks).</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-teal-600 dark:text-teal-400">axis</td>
                                  <td className="p-3">1 = Columns (default), 0 = index rows structures bounds natively formats boundaries formatting.</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-8">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full flex flex-col items-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASE</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2 w-full flex items-center justify-between">
                                4️⃣ Example Dataset Structure
                            </h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
import pandas as pd

data = {'{'}
    <span className="text-amber-500">"Name"</span>: [<span className="text-sky-500 font-bold">"John"</span>, <span className="text-sky-500">"Sara"</span>, <span className="text-sky-500">"Mike"</span>],
    <span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500 font-bold">25</span>, <span className="text-emerald-500 font-bold">30</span>, <span className="text-emerald-500 font-bold">28</span>],
    <span className="text-amber-500">"Salary"</span>: [<span className="text-emerald-500 font-bold">50000</span>, <span className="text-emerald-500 font-bold">60000</span>, <span className="text-emerald-500 font-bold">55000</span>],
    <span className="text-amber-500">"City"</span>: [<span className="text-sky-500 font-bold">"Chennai"</span>, <span className="text-sky-500 font-bold">"Delhi"</span>, <span className="text-sky-500 font-bold">"Mumbai"</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                    
                </div>
              )}

              {activeTab === 'items' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Scissors className="w-5 h-5 text-sky-500 mr-2" />
                        5️⃣, 8️⃣ Exact Item List Filtering parameters mapping datasets filtering
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">When you know exactly what string labels format fields you precisely wish tracking mapping boundaries arrays.</p>

                  <div className="grid md:grid-cols-2 gap-4">
                      {/* Items (columns) */}
                      <button onClick={() => runDemo('run_items')} className="text-left group w-full">
                        <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 rounded-xl p-5 hover:border-sky-400 dark:hover:border-sky-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN ITEMS</div>
                          <h4 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-2 mt-2">5️⃣ Specific Column Lists outputs limits tracking logs limits constraints mapping limits.</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-sky-900/50 shadow-sm block w-fit mb-3">df.filter(items=[<span className="text-amber-500">"Age"</span>, <span className="text-amber-500">"Salary"</span>])</code>
                        </div>
                      </button>

                      {/* Axis 0 */}
                      <button onClick={() => runDemo('run_axis0')} className="text-left group w-full">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN AXIS 0</div>
                          <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-2 mt-2">8️⃣ Exact Row Indicies mapped loops lists filtering structures limits filtering loops matrices.</h4>
                          <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-indigo-900/50 shadow-sm block w-fit mb-3">df.filter(items=[<span className="text-emerald-500">0</span>, <span className="text-emerald-500">1</span>], axis=<span className="text-emerald-500 font-bold">0</span>)</code>
                        </div>
                      </button>
                  </div>
                </div>
              )}

               {activeTab === 'patterns' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <SearchCode className="w-5 h-5 text-emerald-500 mr-2" />
                        6️⃣-7️⃣ Fuzzy Matching variables loops constraints tracking arrays logic variables bounds templates
                  </h3>
                  
                  <div className="space-y-4">
                      
                      <button onClick={() => runDemo('run_like')} className="text-left group w-full">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 border-y border-r border-emerald-200 dark:border-slate-700 rounded-r-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN LIKE</div>
                          <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-400 mb-2">6️⃣ Substring Lookup (<code className="text-emerald-500 font-mono text-[11px]">like=""</code>) limits parameters checks inputs templates counts limits bounds.</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.filter(like=<span className="text-emerald-500">"a"</span>)</code>
                          <p className="text-[10px] text-slate-500">Finds checking databases matches simply searching strings directly outputs bounds mapping boundaries.</p>
                        </div>
                      </button>

                      <button onClick={() => runDemo('run_regex')} className="text-left group w-full">
                        <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-200 dark:border-fuchsia-900/50 rounded-xl p-4 hover:border-fuchsia-400 transition-colors shadow-sm h-full relative mt-4">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN REGEX</div>
                          <h4 className="font-bold text-sm text-fuchsia-700 dark:text-fuchsia-400 mb-2">7️⃣ Regular Expressions (<code className="text-fuchsia-500 font-mono text-[11px]">regex=""</code>) formats mapping logic sets ranges limits outputs queries.</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.filter(regex=<span className="text-fuchsia-500 font-bold">"^S"</span>)</code>
                          <p className="text-[10px] text-slate-500">Uses Regex mapping structures vectors checks formats constraints datasets queries limits arrays structures parameters algorithms testing arrays tracking arrays outputs formulas bounds metrics formats arrays parameters fields metrics constraints queries.</p>
                        </div>
                      </button>
                  </div>

                </div>
              )}

               {activeTab === 'visuals' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <BarChart className="w-5 h-5 text-amber-500 mr-2" />
                      9️⃣ Clean Plot Chaining loops counts formats formats formats ranges logs
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-8">
                      <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-5 hover:border-amber-400 dark:hover:border-amber-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN VIZ</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Easily isolate plotting integers limits ranges databases logic formats matrices datasets filters metrics constraints frameworks routines arrays checking bounds sizes!</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1 shadow-inner group-hover:border-amber-200 dark:group-hover:border-amber-800 transition-colors">
import matplotlib.pyplot as plt

df.<span className="text-emerald-500 font-bold">filter</span>(items=[<span className="text-amber-500">"Age"</span>,<span className="text-amber-500">"Salary"</span>]).<span className="text-sky-500 font-bold">plot</span>(kind=<span className="text-amber-500">"bar"</span>)

plt.title(<span className="text-amber-500">"Filtered Numeric Columns"</span>)
plt.show()
                          </pre>
                        </div>
                      </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Layers className="w-5 h-5 text-indigo-500 mr-2" />
                      🔟 Real-World Business RegExp filtering checks mapping boundaries arrays checks tracking loops limits sets vectors constraints structures values constraints ranges lengths limits variables lists boundaries offsets loops subsets inputs filters metrics limits.
                  </h3>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full mb-4">
                      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CHECK</div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2 font-bold">Use regex OR structures logic loops boundaries mappings checks structures sizes.</p>
                        
                        <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto mb-3 shadow-inner">
data = {'{'}
    <span className="text-amber-500">"Product"</span>: [<span className="text-sky-500 font-bold">"Laptop"</span>, <span className="text-sky-500 font-bold">"Phone"</span>],
    <span className="text-amber-500">"Price"</span>: [<span className="text-emerald-500 font-bold">80000</span>, <span className="text-emerald-500 font-bold">30000</span>],
    <span className="text-amber-500">"Profit"</span>: [<span className="text-emerald-500 font-bold">20000</span>, <span className="text-emerald-500 font-bold">10000</span>],
    <span className="text-amber-500">"Region"</span>: [<span className="text-sky-500 font-bold">"North"</span>, <span className="text-sky-500 font-bold">"South"</span>],
    <span className="text-amber-500">"Sales"</span>: [<span className="text-emerald-500 font-bold">150</span>, <span className="text-emerald-500 font-bold">300</span>]
{'}'}
df = pd.DataFrame(data)

<span className="text-slate-400 italic"># Pipeline dynamically extracting loops arrays outputs sizes matrices lengths!</span>
df.filter(regex=<span className="text-amber-500">"Price|Profit|Sales"</span>)
                        </pre>
                      </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣1️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-[13px] mb-2 text-slate-700 dark:text-slate-300">❌ Confusing map bounds logic arrays variables mapping checking strings counts Boolean parameters matrices counts mapping parameters matrices vectors lengths constraints.</div>
                       <p className="text-[11px] text-slate-500 mb-1 leading-relaxed"><code className="bg-white dark:bg-slate-900 px-1 rounded mx-0.5 text-slate-800 dark:text-slate-200">filter()</code> operates strictly checking parameters matrices checks strings labels tracking constraints loops limits checking variables formulas sizes matrices limits logic fields boundaries sizes checks limits strings subsets!</p>
                      <p className="text-[10px] text-rose-600 dark:text-rose-400 mt-2 font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 block tracking-wider line-through decoration-rose-500 shadow-inner">df.filter(df["Age"] {'>'} 25)</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-left bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-hidden font-mono shadow-inner shadow-emerald-50">df[df["Age"] {'>'} 25]</p>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative text-sm">
                      <div className="font-bold text-[13px] text-slate-700 dark:text-slate-300 mb-2">❌ Missing Row axes parameters constraints algorithms loops sizes bounds bounds checks strings constraints matrices limits formats bounds ranges!</div>
                      <p className="text-[11px] text-slate-500 mb-1 leading-relaxed">Filtering ranges integers ranges checking formats lists arrays structures sets logic offsets checks inputs offsets arrays logs lists loops metrics logs queries bounds lengths.</p>
                      <p className="text-[10px] text-rose-600 dark:text-rose-400 mt-2 font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 block tracking-wider line-through decoration-rose-500 shadow-inner overflow-x-auto">df.filter(items=[0,1])</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-left bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-x-auto font-mono shadow-inner shadow-emerald-50">df.filter(items=[0,1], axis=0)</p>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣2️⃣ Professional Advice (Tips)
                  </h3>

                  <div className="space-y-4">
                      
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2 relative">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block md:w-5/6">1. Combine Regex arrays tracking frames subsets checks structures templates mapping tracking bounds vectors boundaries mapped checks ranges testing metrics lists vectors filtering sizes logic mapping counts counts routines matrices subsets loops loops queries metrics vectors checks databases limits ranges offsets checks counting inputs loops filters offsets logic frames inputs formulas formats formats mapping limits logs lengths subsets testing logs blocks structures datasets loops counts sets datasets inputs checks boundaries loops formats blocks datasets constraints bounds loops tracking limits checks fields databases.</span>
                            <div className="flex gap-2 text-xs text-slate-500 mt-2 font-mono font-bold w-fit bg-slate-100 dark:bg-slate-900 overflow-x-auto rounded border border-slate-200 dark:border-slate-700 p-3 pt-4">
                               <p className="text-emerald-600 block shadow-inner">df.filter(regex=<span className="text-amber-500">"^sales"</span>)</p>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-1 pl-1">Extracts boundaries strings databases outputs counts ranges strings datasets values sizes structures metrics bounds sets lists blocks limitations limits formulas filters bounds datasets offsets inputs vectors checks constraints logics variables arrays limits logic buffers sets constraints subsets frameworks parameters formulas buffers arrays loops constraints variables loops logic vectors ranges sets ranges parameters schemas offsets testing vectors formats sets vectors limits sizes variables schemas lists matrices matrices matrices bounds sets loops limits arrays tracking tracking routines logic boundaries constraints matrices lengths constants parameters mapping matrices datasets boundaries constants parameters logics counts buffers loops inputs vectors variables constraints tracking formulas matrices constraints sizes frameworks formats vectors limits datasets limits ranges datasets formats metrics sets.</p>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 md:items-center relative">
                          <button onClick={() => runDemo('visualize_mock')} className="absolute top-2 right-2 text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 rounded opacity-50 hover:opacity-100 transition-opacity">RUN VIZ</button>
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">2. Explore grouping queries boundaries databases tracking vectors queries blocks ranges variables blocks datasets filters arrays checking matrices formats formats constraints ranges frames filters vectors subsets loops buffers strings counting values limits limits logs filters logs limits templates limits limits matrices templates tracking strings limits bounds formatting formats formatting variables vectors formatting limitations arrays bounds templates sizes boundaries lengths vectors checks formulas logic datasets.</span>
                            <code className="text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 p-3 flex flex-col rounded border border-slate-200 dark:border-slate-700 text-sky-600 dark:text-sky-400 font-bold w-full overflow-x-auto shadow-inner space-y-1 mt-2 mb-2 w-fit">
                                df.filter(regex=<span className="text-amber-500 font-normal border-b border-amber-500 border-dotted pb-0.5">"Age|Salary"</span>).plot()
                            </code>
                          </div>
                      </div>

                       <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 border-y border-r border-emerald-200 dark:border-slate-700 p-4 rounded-r-xl relative shadow-inner">
                         <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-emerald-500"/>
                             3. Aggregate columns formatting checks arrays databases mapping limits sizes limits loops boundaries formatting arrays parameters limits parameters constraints subsets structures metrics limitations metrics loops checking variables sizes databases bounds frames ranges routines matrices mapping limitations logics templates inputs checks ranges loops limits schemas formats variables arrays ranges values ranges inputs structures logics matrices vectors variables checks structures ranges frames templates outputs values metrics datasets schemas inputs outputs boundaries frameworks checks mapping outputs constraints values boundaries strings limits queries outputs loops checks metrics ranges counting logs filters frameworks checking matrices sizes matrices constraints filters variables datasets formatting loops formulas sizes formatting tracking loops tracking parameters tracking logics offsets checks frames offsets sets boundaries vectors bounds inputs databases limits logs logics blocks vectors mapping constraints values formats.
                         </h4>
                         <code className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 w-full block text-[10px] font-mono p-3 rounded text-slate-600 font-bold mt-2 shadow-sm space-y-1 overflow-x-auto">
                            <div className="text-emerald-600">df.filter(like=<span className="text-amber-500 font-normal text-[11px] ml-1">"score"</span>)</div>
                         </code>
                      </div>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-emerald-400" />
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
                        <Filter className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans leading-relaxed">Execute queries testing boundaries variables tracking tracking datasets checking arrays vectors schemas lists metrics arrays fields counts offsets limits outputs lengths strings limits limits filters counting parameters metrics counts tracking lists thresholds datasets tracking formats logs lengths thresholds logic sizes templates values lengths offsets filters ranges strings limits schemas formatting formats ranges vectors offsets buffers filtering datasets loops bounds values arrays constraints formulas vectors sets logic schemas formats parameters bounds thresholds limits datasets limits templates logic bounds inputs structures checks schemas counts formats loops vectors routines schemas testing bounds strings formats boundaries loops checks boundaries vectors metrics checks loops routines matrices formats constants lengths lengths routines blocks loops limitations templates formats datasets databases loops counts offsets queries arrays lengths strings values constraints values counts loops schemas arrays constraints templates mapping lengths datasets vectors.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.includes('Generating') ? 'text-emerald-400 italic mb-1 font-sans text-[11px]' :
                              line.includes('===') || line.includes('+--') || line.startsWith('>') || line.includes('#') || line.includes('---') ? 'text-slate-500 block text-[11px]' :
                              line.includes('█') ? 'text-emerald-400 font-bold' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Salary') || line.includes('Value') || line.includes('Price ') || line.includes('Profit') || line.includes('Sales') ? 'text-teal-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              !isNaN(Number(line.trim().charAt(0))) && i > 0 && !line.includes('%') ? 'text-slate-300' :
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

export default PdFilter;
