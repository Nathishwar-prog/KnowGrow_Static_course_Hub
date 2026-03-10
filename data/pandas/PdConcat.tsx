import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  Settings, Zap, Layers, Rows, Columns, DatabaseBackup,
  CheckCircle2, AlertTriangle, Blocks
} from 'lucide-react';

const PdConcat: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'vertical' | 'horizontal' | 'advanced' | 'workflow' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'original':
        outLines = [
          '# df1',
          '   Name  Marks',
          '0  John     85',
          '1  Emma     92',
          '',
          '# df2',
          '     Name  Marks',
          '0    Alex     78',
          '1  Sophia     88'
        ];
        break;
      case 'concat_vert':
        outLines = [
          '     Name  Marks',
          '0    John     85',
          '1    Emma     92',
          '0    Alex     78',
          '1  Sophia     88'
        ];
        break;
      case 'reset_index':
        outLines = [
          '     Name  Marks',
          '0    John     85',
          '1    Emma     92',
          '2    Alex     78',
          '3  Sophia     88'
        ];
        break;
      case 'concat_horiz':
        outLines = [
          '   Name  Marks    City',
          '0  John     85  London',
          '1  Emma     92   Paris'
        ];
        break;
      case 'concat_multi':
        outLines = [
          '     Name  Marks',
          '0    John     85',
          '1    Emma     92',
          '2    Alex     78',
          '3  Sophia     88',
          '4   David     90'
        ];
        break;
      case 'diff_cols':
        outLines = [
          '   Name  Marks   City',
          '0  John   85.0    NaN',
          '0  Emma    NaN  Paris'
        ];
        break;
      case 'real_world':
        outLines = [
          '   Sales',
          '0    200',
          '1    300',
          '2    250',
          '3    350'
        ];
        break;
      case 'trick1':
        outLines = [
          '0    1',
          '1    2',
          '2    3',
          '3    4',
          'dtype: int64'
        ];
        break;
      case 'trick2':
        outLines = [
          '        Name  Marks',
          'Jan 0   John     85',
          '    1   Emma     92',
          'Feb 0   Alex     78',
          '    1 Sophia     88'
        ];
        break;
      case 'trick3':
        outLines = [
          '     Name  Marks',
          '0    John     85',
          '1    Emma     92',
          '2    Alex     78',
          '3  Sophia     88',
          '4   David     90'
        ];
        break;
      case 'exercise':
        outLines = [
          '     Name  Marks',
          '0    John     85',
          '1    Emma     92',
          '0    Alex     78',
          '1  Sophia     88'
        ];
        break;
    }

    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-2xl mb-6 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <Layers className="w-10 h-10 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Concat <code className="text-teal-600 dark:text-teal-400 text-3xl sm:text-4xl bg-teal-50 dark:bg-teal-900/20 px-3 py-1 rounded-xl">concat()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Combine, stack, and stitch multiple DataFrames or Series together vertically or horizontally into massive master datasets.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-teal-500" />
            Concatenation Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
            <button
              onClick={() => setActiveTab('vertical')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'vertical' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Rows className="w-4 h-4 mr-1.5" /> 5️⃣-6️⃣ Rows
            </button>
             <button
              onClick={() => setActiveTab('horizontal')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'horizontal' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Columns className="w-4 h-4 mr-1.5" /> 7️⃣ Cols
            </button>
             <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Blocks className="w-4 h-4 mr-1.5" /> 8️⃣-🔟 Advanced
            </button>
             <button
              onClick={() => setActiveTab('workflow')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'workflow' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Zap className="w-4 h-4 mr-1.5" /> Flow
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 Dev Tips
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
                    <Layers className="w-5 h-5 text-teal-500 mr-2" />
                    1️⃣ What is concat() in Pandas?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>The <code className="bg-slate-100 dark:bg-slate-900 text-teal-600 font-bold px-1 rounded">concat()</code> function is used to rigidly combine two or more DataFrames or Series.</p>
                    <p className="text-sm">It stacks datasets together like LEGO blocks either <b>Vertically</b> (stacking row-wise on <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded">axis=0</code>) or <b>Horizontally</b> (connecting column-wise on <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded">axis=1</code>).</p>
                    
                    <div className="flex font-mono text-[11px] items-center justify-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 shadow-inner mt-4 overflow-x-auto">
                        <span className="bg-slate-200 dark:bg-slate-800 px-3 py-1.5 rounded shadow-sm border border-slate-300 dark:border-slate-600">Dataset A + Dataset B</span>
                        <span className="mx-3 text-slate-400">→</span>
                        <span className="bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 px-3 py-1.5 rounded shadow-sm border border-teal-200 dark:border-teal-800">concat()</span>
                        <span className="mx-3 text-slate-400">→</span>
                        <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded shadow-sm border border-indigo-200 dark:border-indigo-800">Combined Dataset</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <DatabaseBackup className="w-5 h-5 text-amber-500 mr-2" />
                    2️⃣ Why concat() is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300">
                      <p className="mb-4 text-sm">Real projects don't give you one perfectly packaged CSV. You get data across <b>multiple chunks</b>.</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                          <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mb-1" />
                              <span className="font-bold">Multiple CSVs</span>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mb-1" />
                              <span className="font-bold">Monthly Reports</span>
                          </div>
                           <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mb-1" />
                              <span className="font-bold">Separate Sources</span>
                          </div>
                           <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mb-1" />
                              <span className="font-bold">DB Exports</span>
                          </div>
                      </div>
                      
                       <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm mt-4 text-sm font-mono flex flex-col md:flex-row gap-2 justify-center items-center">
                          <span className="text-teal-600 dark:text-teal-400 font-bold">Jan Data</span>
                          <span className="text-slate-400 font-sans font-bold text-xs uppercase">+</span>
                          <span className="text-teal-600 dark:text-teal-400 font-bold">Feb Data</span>
                          <span className="text-slate-400 font-sans font-bold text-xs uppercase">+</span>
                          <span className="text-teal-600 dark:text-teal-400 font-bold">Mar Data</span>
                          <span className="text-slate-400 font-sans font-bold mx-2">→</span>
                          <span className="bg-teal-600 text-white px-2 py-1 rounded shadow">Total Analytics Frame</span>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣-4️⃣ Basic Syntax & Setup
                  </h3>
                  
                  <div className="space-y-4">
                      
                      <div className="bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                          <code className="bg-white dark:bg-slate-950 px-3 py-2 rounded text-teal-600 dark:text-teal-400 font-bold block w-fit shadow-sm border border-slate-100 dark:border-slate-800 text-sm mb-4">
                              pd.concat(objs, axis)
                          </code>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 rounded">
                                  <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">objs</span>
                                  <span className="text-slate-500">List of DataFrames <code>[df1, df2]</code></span>
                              </div>
                               <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 rounded">
                                  <span className="font-bold text-indigo-500 block mb-1">axis=0</span>
                                  <span className="text-slate-500">Combine rows (vertical)</span>
                              </div>
                               <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 rounded sm:col-start-2">
                                  <span className="font-bold text-rose-500 block mb-1">axis=1</span>
                                  <span className="text-slate-500">Combine columns (horizontal)</span>
                              </div>
                          </div>
                      </div>

                      <button onClick={() => runDemo('original')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                          <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">4️⃣ Example Disconnected Datasets</h4>
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
df1 = pd.DataFrame({'{'}<br/>
{'    '}<span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Emma"</span>],<br/>
{'    '}<span className="text-amber-500">"Marks"</span>: [<span className="text-emerald-500">85</span>, <span className="text-emerald-500">92</span>]<br/>
{'}'})<br/><br/>
df2 = pd.DataFrame({'{'}<br/>
{'    '}<span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"Alex"</span>, <span className="text-amber-500">"Sophia"</span>],<br/>
{'    '}<span className="text-amber-500">"Marks"</span>: [<span className="text-emerald-500">78</span>, <span className="text-emerald-500">88</span>]<br/>
{'}'})
                          </pre>
                        </div>
                      </button>

                  </div>

                </div>
              )}

              {activeTab === 'vertical' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Rows className="w-5 h-5 text-indigo-500 mr-2" />
                    5️⃣-6️⃣ Concatenating Rows
                  </h3>

                  <button onClick={() => runDemo('concat_vert')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors relative shadow-sm h-full mb-4">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN VERTICAL</div>
                          <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">5️⃣ Vertical Stacking (axis=0 is default)</h4>
                          <p className="text-[11px] text-slate-500 mb-2">Simply pass an array list of both dataframe objects. Pandas stacks them strictly matching column header names top to bottom.</p>
                          <code className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 block w-full overflow-x-auto whitespace-nowrap">
                          result = pd.<span className="text-blue-500 font-bold">concat</span>([df1, df2])
                          </code>
                      </div>
                  </button>

                  <button onClick={() => runDemo('reset_index')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN RESET</div>
                          <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> 6️⃣ Resetting Index Tracking</h4>
                          <p className="text-[11px] text-slate-500 mb-2">Notice how the default concat duplicates index tags (0,1,0,1). Use <code className="bg-white dark:bg-slate-950 px-1 border border-slate-200 dark:border-slate-800">ignore_index=True</code> to force Pandas to generate a fresh, uniform 0 to N index block!</p>
                          <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto whitespace-nowrap">
result = pd.<span className="text-blue-500 font-bold">concat</span>([df1, df2], ignore_index=<span className="text-blue-500 font-bold">True</span>)
                          </pre>
                      </div>
                  </button>

                </div>
              )}

               {activeTab === 'horizontal' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Columns className="w-5 h-5 text-rose-500 mr-2" />
                      7️⃣ Concatenating Columns
                  </h3>

                  <button onClick={() => runDemo('concat_horiz')} className="text-left group w-full mb-4">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-400 dark:hover:border-rose-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN HORIZONTAL</div>
                          <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-3">7️⃣ Horizontal Gluing (axis=1)</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Change to <code className="bg-white/50 px-1">axis=1</code> to stick entirely new data frames onto the side of another dataset structurally matching row-by-row mapping.</p>
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-3 overflow-x-auto">
df3 = pd.DataFrame({'{'}<br/>
{'    '}<span className="text-amber-500">"City"</span>: [<span className="text-amber-500">"London"</span>, <span className="text-amber-500">"Paris"</span>]<br/>
{'}'})<br/><br/>
<span className="text-slate-400 italic"># Concat Sideways mapping on index row ties</span><br/>
result = pd.<span className="text-blue-500 font-bold">concat</span>([df1, df3], axis=<span className="text-emerald-500">1</span>)<br/><br/>
<span className="text-blue-500">print</span>(result)
                          </pre>
                      </div>
                  </button>

                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 flex justify-center">
                      <div className="flex font-mono text-xs items-center gap-4 text-center text-slate-600 dark:text-slate-300">
                          <div>
                              <div className="font-bold text-indigo-500 border-b border-indigo-200 dark:border-indigo-800 mb-1">df1</div>
                              Name Marks<br/>
                              John 85<br/>
                              Emma 92
                          </div>
                          <div className="text-rose-400 text-lg">+</div>
                           <div>
                              <div className="font-bold text-rose-500 border-b border-rose-200 dark:border-rose-800 mb-1">df3</div>
                              City<br/>
                              London<br/>
                              Paris
                          </div>
                          <div className="text-emerald-400 text-lg ml-2 mr-2">→</div>
                          <div className="border border-emerald-200 dark:border-emerald-800 p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/10">
                              <div className="font-bold text-emerald-600 dark:text-emerald-400 border-b border-emerald-200 dark:border-emerald-800 mb-1">Combined</div>
                              Name Marks City<br/>
                              John 85 London<br/>
                              Emma 92 Paris
                          </div>
                      </div>
                  </div>

                </div>
              )}

               {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Blocks className="w-5 h-5 text-sky-500 mr-2" />
                      8️⃣-🔟 Advanced Configurations
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                      <button onClick={() => runDemo('concat_multi')} className="text-left group w-full">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors relative shadow-sm h-full flex flex-col justify-center">
                              <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN TRIPLE</div>
                              <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-2">8️⃣ Concatenating Multiple (&gt;2) DataFrames</h4>
                              <p className="text-[11px] text-slate-500 mb-2">You are not restricted to just two chunks! Pass 5, 50, or 500 DataFrames loaded dynamically into the list.</p>
                              <code className="font-mono text-[9px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 block overflow-x-auto w-full">
                              result = pd.<span className="text-blue-500 font-bold">concat</span>([df1, df2, df3], ignore_index=<span className="text-blue-500 font-bold">True</span>)
                              </code>
                          </div>
                      </button>

                      <button onClick={() => runDemo('diff_cols')} className="text-left group w-full">
                          <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/50 rounded-xl p-4 hover:border-rose-400 dark:hover:border-rose-700 transition-colors relative shadow-sm h-full">
                              <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MISSING</div>
                              <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2 flex items-center bg-rose-100 dark:bg-rose-900/40 w-fit px-2 py-1 rounded">9️⃣ Handling Different Columns (Critical Error)</h4>
                              <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2 font-bold">If you stack rows, but the DataFrames have different column names, Pandas will inject <code className="text-rose-600 bg-rose-200 dark:bg-rose-800 px-1 rounded mx-0.5">NaN</code> (Not a Number) for missing entries.</p>
                              <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
df1 = pd.DataFrame({'{'} <span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>], <span className="text-amber-500">"Marks"</span>: [<span className="text-emerald-500">85</span>] {'}'}) <br/>
df2 = pd.DataFrame({'{'} <span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"Emma"</span>], <span className="text-amber-500">"City"</span>: [<span className="text-amber-500">"Paris"</span>] {'}'}) <span className="text-slate-400 italic"># No marks!!</span><br/><br/>
result = pd.<span className="text-blue-500 font-bold">concat</span>([df1, df2])
                              </pre>
                          </div>
                      </button>

                       <button onClick={() => runDemo('real_world')} className="text-left group w-full">
                          <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm h-full">
                              <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MONTHS</div>
                              <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">🔟 Real-World: Combining Monthly Sales Data</h4>
                              <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2">Extracting January from API, February from CSV, then stitching logic to run total annual calculations across the master matrix.</p>
                              <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
jan = pd.DataFrame({'{'}<span className="text-amber-500">"Sales"</span>: [<span className="text-emerald-500">200</span>, <span className="text-emerald-500">300</span>]{'}'})<br/>
feb = pd.DataFrame({'{'}<span className="text-amber-500">"Sales"</span>: [<span className="text-emerald-500">250</span>, <span className="text-emerald-500">350</span>]{'}'})<br/><br/>
sales = pd.<span className="text-blue-500 font-bold">concat</span>([jan, feb], ignore_index=<span className="text-blue-500 font-bold">True</span>)<br/>
<span className="text-blue-500">print</span>(sales)
                              </pre>
                          </div>
                      </button>
                  </div>

                </div>
              )}
              
               {activeTab === 'workflow' && (
                <div className="animate-fade-in space-y-6">
                
                  <div className="max-w-xl mx-auto mt-12 mb-12 relative p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                      <div className="absolute top-4 right-4"><Zap className="w-5 h-5 text-teal-500/50" /></div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-teal-600 dark:text-teal-400 text-center mb-8">
                          📊 Concatenation Integration Workflow
                      </h4>
                      <div className="flex flex-col items-center space-y-4 font-mono font-bold text-xs relative">
                          {/* Lines */}
                          <div className="absolute top-6 bottom-6 left-1/2 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2 z-0"></div>
                          
                          <div className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 px-6 py-2 rounded-xl z-10 shadow-sm text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2">
                              <div>CSV 1</div> <div>DB 2</div> <div>API 3</div>
                          </div>
                      
                          <div className="bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-2 border-teal-200 dark:border-teal-800 px-6 py-2 rounded-xl z-10 shadow-sm">
                              [df1, df2, df3] List Wrap
                          </div>
                        
                          <div className="bg-amber-50 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border-2 border-amber-200 dark:border-amber-800/50 px-6 py-2 rounded-xl z-10 shadow-sm">
                              pd.concat(list) Operation
                          </div>
                          
                          <div className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 border-2 border-indigo-300 dark:border-indigo-700/50 px-8 py-3 rounded-xl z-10 shadow-lg text-sm text-center">
                              Combined Master Dataset <br/> <span className="text-[10px] text-indigo-500 font-sans mt-1">Ready for Machine Learning Analysis</span>
                          </div>
                      </div>
                  </div>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    💡 Recommendations (15+ Years)
                  </h3>

                  <div className="space-y-4">
                      
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                          <div className="flex items-center mb-2">
                              <span className="font-bold text-sm text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/30 px-2 rounded mr-2">1️⃣</span>
                              <span className="font-bold text-sm text-slate-800 dark:text-slate-200">Always Use ignore_index=True</span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400">When stacking vertically, explicitly ignore index resets prevents duplicate numeric keys forming. <code>concat([df1..], ignore_index=True)</code>.</p>
                      </div>

                       <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-lg border border-rose-200 dark:border-rose-800/50 shadow-sm flex items-start">
                           <div className="bg-rose-100 dark:bg-rose-900/30 p-2 rounded mr-3 shrink-0">
                              <span className="font-bold text-sm text-rose-600 dark:text-rose-400">2️⃣</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm text-rose-800 dark:text-rose-400 block mb-1">Ensure Column Consistency BEFORE Concat</span>
                            <p className="text-[11px] text-rose-700/80 dark:text-rose-300 mb-2">If columns differ, Pandas will blindly map rows and explode your structural memory replacing misses with <code>NaN</code>. Standardize endpoints pre-concat.</p>
                            <p className="text-[10px] font-mono text-rose-600">df["Marks"] vs df2["Mark"] = Error ❌</p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded mr-3 shrink-0">
                              <span className="font-bold text-sm text-sky-600 dark:text-sky-400">3️⃣</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Use Concat for SIMILAR Structures</span>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400">Concat is "dumb addition". If you have relational datasets sharing a unique ID like "User_ID" passing metrics across branches, you need to use SQL structured commands: <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded block mt-1 w-fit">merge()</code> or <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded block mt-1 w-fit border border-slate-200">join()</code></p>
                          </div>
                      </div>

                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Zap className="w-5 h-5 text-teal-500 mr-2" />
                    🚀 Pandas Concat Tricks
                  </h3>

                  <div className="grid grid-cols-1 gap-3">
                      <button onClick={() => runDemo('trick1')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-400 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-2">
                              <span className="font-bold text-xs text-teal-600 dark:text-teal-400 truncate mr-2 w-full md:w-auto">Trick 1 — Append Singular Series List Arrays</span>
                              <code className="font-mono text-[9px] sm:text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded w-fit md:w-auto overflow-x-auto block">pd.concat([s1, s2])</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick2')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-400 shadow-sm flex flex-col xl:flex-row xl:items-center justify-between gap-2">
                              <span className="font-bold text-xs text-teal-600 dark:text-teal-400 w-full xl:w-auto overflow-hidden">Trick 2 — Inject Multi-Index Dataset Tracer Keys</span>
                              <code className="font-mono text-[9px] sm:text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded w-fit xl:w-auto overflow-x-auto block">pd.concat([df1, df2], keys=["Jan","Feb"])</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick3')} className="w-full text-left group whitespace-nowrap">
                           <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-400 shadow-sm flex flex-col xl:flex-row xl:items-center justify-between gap-2 h-full">
                              <span className="font-bold text-xs text-teal-600 dark:text-teal-400 w-full xl:w-auto mb-1">Trick 3 — Dynamically Stitch Loaded Memory Loops</span>
                              <code className="font-mono text-[9px] sm:text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded w-fit xl:w-auto overflow-x-auto block">dfs = [df1, df2, df3...]; pd.concat(dfs)</code>
                          </div>
                      </button>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-teal-400" />
                     Concat Combiner Console
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="font-mono text-sm flex flex-col flex-1 overflow-y-auto max-h-[440px]">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Layers className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4">Fire a concat operation to merge outputs together visually here.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                              line.startsWith('#') ? 'text-teal-500 italic text-xs mt-2' :
                              line.includes('NaN') ? 'text-rose-400 font-bold bg-rose-400/10' :
                              line.includes('Jan') || line.includes('Feb') ? 'text-amber-400 font-bold' :
                              line.includes('David') || line.includes('3  Sophia') || line.includes('4   David') || line.includes('London') || line.includes('Paris') ? 'text-emerald-300' :
                              line.includes('Name') || line.includes('Marks') || line.includes('City') || line.includes('Sales') ? 'text-teal-300 font-bold' :
                              line.includes('dtype: int64') ? 'text-slate-400 italic' :
                              !isNaN(Number(line.trim().charAt(0))) ? 'text-emerald-200' :
                              'text-white'
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

      {/* 4. Practice Exercise Section */}
      <section className="max-w-4xl mx-auto pb-16">
         <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl shadow-xl relative h-full flex flex-col">
           <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            🧩 Practice Exercise
          </h2>
          <div className="z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                  <p className="text-slate-300 mb-2 text-sm font-medium">Use the provided split student databanks:</p>
                  <div className="flex gap-4 mb-4">
                      <pre className="bg-black/60 text-teal-300 p-3 rounded-lg text-xs font-mono border border-white/5 w-fit">
# df1
Name   Marks
John   85
Emma   92
                      </pre>
                      <pre className="bg-black/60 text-emerald-300 p-3 rounded-lg text-xs font-mono border border-white/5 w-fit">
# df2
Name   Marks
Alex   78
Sophia 88
                      </pre>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4">
                      <p className="text-white text-xs font-bold mb-2 uppercase tracking-wide">Tasks & Rules:</p>
                      <ul className="text-teal-200 text-xs space-y-2">
                        <li>1️⃣ Combine both datasets vertically.</li>
                        <li>2️⃣ Notice how the index does not inherently ignore original numbering structure.</li>
                      </ul>
                  </div>

                  <div className="text-[10px] text-yellow-400 font-bold bg-yellow-400/10 inline-flex items-center px-4 py-2 rounded-lg border border-yellow-400/20 w-fit">
                    <span className="mr-2">Hint:</span> <code className="bg-black/40 px-2 py-1 rounded text-white font-mono tracking-wide">pd.concat([df1, df2])</code>
                  </div>
              </div>
              <div className="bg-black/60 p-5 rounded-2xl border border-white/5 shadow-inner">
                  <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                     <p className="text-teal-400 text-xs font-bold uppercase tracking-wider">Solution Combined View</p>
                     <button onClick={() => runDemo('exercise')} className="bg-teal-600 hover:bg-teal-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow shrink-0">RUN</button>
                  </div>
                   <div className="text-xs text-slate-400 mb-2 italic">Notice how the default index stacks: 0, 1, 0, 1.</div>
                  <pre className="text-white font-mono text-xs leading-relaxed">
     Name  Marks<br/>
<span className="text-slate-500">0</span>    John     85<br/>
<span className="text-slate-500">1</span>    Emma     92<br/>
<span className="text-amber-500 font-bold">0</span>    Alex     78<br/>
<span className="text-amber-500 font-bold">1</span>  Sophia     88
                  </pre>
              </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PdConcat;
