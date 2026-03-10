import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  Settings, Zap, Filter, ListFilter, GitCompare,
  CheckCircle2, AlertTriangle, ToggleLeft
} from 'lucide-react';

const PdBooleanIndexing: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'logic' | 'multi' | 'workflow' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'original':
        outLines = [
          '     Name  Marks',
          '0    John     85',
          '1    Emma     92',
          '2    Alex     78',
          '3  Sophia     88'
        ];
        break;
      case 'basic_filter':
        outLines = [
          '     Name  Marks',
          '0    John     85',
          '1    Emma     92',
          '3  Sophia     88'
        ];
        break;
      case 'bool_series':
        outLines = [
          '0     True',
          '1     True',
          '2    False',
          '3     True',
          'Name: Marks, dtype: bool'
        ];
        break;
      case 'multi_and':
        outLines = [
          '     Name  Marks',
          '0    John     85',
          '3  Sophia     88'
        ];
        break;
      case 'multi_or':
        outLines = [
          '   Name  Marks',
          '1  Emma     92',
          '2  Alex     78'
        ];
        break;
      case 'not_cond':
        outLines = [
          '   Name  Marks',
          '2  Alex     78'
        ];
        break;
      case 'multi_col':
        outLines = [
          '   Name  Marks    City',
          '0  John     85  London',
          '2  Alex     78  London'
        ];
        break;
      case 'real_world':
        outLines = [
          '  Product  Price',
          '0  Laptop    800',
          '1   Phone    500'
        ];
        break;
      case 'trick1':
        outLines = [
          '   Name  Marks    City',
          '0  John     85  London',
          '1  Emma     92   Paris',
          '2  Alex     78  London'
        ];
        break;
      case 'trick2':
        outLines = [
          'Empty DataFrame',
          'Columns: [Name, Marks, City]',
          'Index: []'
        ];
        break;
      case 'trick3':
        outLines = [
          '   Name  Marks',
          '0  John     85'
        ];
        break;
      case 'exercise':
        outLines = [
          '  Student  Marks',
          '0    John     85',
          '1    Emma     92',
          '3  Sophia     88'
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
        <div className="inline-flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/30 rounded-2xl mb-6 shadow-sm border border-rose-200 dark:border-rose-800/50">
          <Filter className="w-10 h-10 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Boolean Indexing
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Filter and extract specific rows from massive datasets dynamically using True/False conditional logic.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-rose-500" />
            Indexing Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'basics' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-2" /> 1️⃣-4️⃣ Basics
            </button>
            <button
              onClick={() => setActiveTab('logic')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'logic' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ToggleLeft className="w-4 h-4 mr-2" /> 5️⃣-8️⃣ Logic Multi
            </button>
             <button
              onClick={() => setActiveTab('multi')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'multi' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ListFilter className="w-4 h-4 mr-2" /> 9️⃣ Cols & 🔟 Real
            </button>
             <button
              onClick={() => setActiveTab('workflow')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'workflow' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Zap className="w-4 h-4 mr-2" /> Workflow
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'tips' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-2" /> 💡 Dev Tips
            </button>
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-2"
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
                    <Filter className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣ What is Boolean Indexing?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p><b>Boolean Indexing</b> is a powerful method used to slice or filter data straight out of a DataFrame using strict True or False conditions.</p>
                    <p className="text-sm">Instead of writing loops to check every row, you pass a condition. Pandas returns only the matching rows.</p>
                    
                    <div className="flex font-mono text-[11px] items-center justify-center p-3 sm:p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 shadow-inner mt-4 overflow-x-auto">
                        <span className="bg-white dark:bg-slate-800 px-2 sm:px-3 py-1.5 rounded shadow-sm border border-slate-200 dark:border-slate-600">Dataset</span>
                        <span className="mx-1 sm:mx-3 text-slate-400">→</span>
                        <span className="bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-2 sm:px-3 py-1.5 rounded shadow-sm border border-amber-200 dark:border-amber-800">&gt; 80</span>
                        <span className="mx-1 sm:mx-3 text-slate-400">→</span>
                        <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-2 sm:px-3 py-1.5 rounded shadow-sm border border-indigo-200 dark:border-indigo-800">True/False</span>
                        <span className="mx-1 sm:mx-3 text-slate-400">→</span>
                        <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-2 sm:px-3 py-1.5 rounded shadow-sm border border-emerald-200 dark:border-emerald-800">Filtered Data</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                    2️⃣ Why is it Important?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300">
                      <p className="mb-4 text-sm">Real datasets often contain thousands of rows. You don't want all of them. You only want the ones that align with a specific question.</p>
                      
                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                          <div className="bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30">
                              <span className="font-bold text-amber-600 dark:text-amber-400 block mb-1">Students passing</span>
                              <code className="text-xs bg-white dark:bg-black/20 px-1 rounded">["Marks"] &gt; 80</code>
                          </div>
                          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                              <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Expensive products</span>
                              <code className="text-xs bg-white dark:bg-black/20 px-1 rounded">["Price"] &gt; 500</code>
                          </div>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <ListFilter className="w-5 h-5 text-rose-500 mr-2" />
                    3️⃣-4️⃣ Basic Dataset Filtering
                  </h3>
                  
                  <div className="space-y-4">
                      <button onClick={() => runDemo('original')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                          <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">3️⃣ Base Student Frame</h4>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
data = {'{'}<br/>
{'    '}<span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Emma"</span>, <span className="text-amber-500">"Alex"</span>, <span className="text-amber-500">"Sophia"</span>],<br/>
{'    '}<span className="text-amber-500">"Marks"</span>: [<span className="text-emerald-500">85</span>, <span className="text-emerald-500">92</span>, <span className="text-emerald-500">78</span>, <span className="text-emerald-500">88</span>]<br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/>
<span className="text-blue-500">print</span>(df)
                          </pre>
                        </div>
                      </button>

                      <button onClick={() => runDemo('basic_filter')} className="w-full text-left group">
                        <div className="h-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN FILTER</div>
                            <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">4️⃣ Basic Condition Filter</h4>
                            <p className="text-xs text-slate-500 mb-2">Notice how we wrap the DataFrame parameter <code>df[...]</code> around the internal condition!</p>
                            <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
<span className="text-slate-400 italic"># Filter students with marks strictly greater than 80</span><br/>
<span className="text-blue-500">print</span>(df[ df[<span className="text-amber-500">"Marks"</span>] &gt; <span className="text-emerald-500">80</span> ])
                            </pre>
                             <div className="mt-3 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800">
                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Concept Visualized:</span>
                                <div className="grid grid-cols-2 text-xs font-mono mt-1 gap-1">
                                    <div className="text-emerald-600 dark:text-emerald-400">John (85) → True</div>
                                    <div className="text-emerald-600 dark:text-emerald-400">Emma (92) → True</div>
                                    <div className="text-rose-500 dark:text-rose-400">Alex (78) → False</div>
                                    <div className="text-emerald-600 dark:text-emerald-400">Sophia (88) → True</div>
                                </div>
                            </div>
                        </div>
                      </button>
                  </div>

                </div>
              )}

              {activeTab === 'logic' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <ToggleLeft className="w-5 h-5 text-indigo-500 mr-2" />
                    5️⃣-8️⃣ Condition Logic Chains
                  </h3>

                  <button onClick={() => runDemo('bool_series')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 dark:hover:border-slate-600 transition-colors relative shadow-sm h-full mb-4">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SERIES</div>
                          <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400 mb-2">5️⃣ Behind the Scenes (Boolean Series)</h4>
                          <p className="text-[10px] text-slate-500 mb-2">When you evaluate a condition without wrapping it in <code>df[]</code>, Pandas spits out a raw map of Trues & Falses.</p>
                          <code className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 block w-max">
                          <span className="text-blue-500">print</span>(df[<span className="text-amber-500">"Marks"</span>] &gt; <span className="text-emerald-500">80</span>)
                          </code>
                      </div>
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      <button onClick={() => runDemo('multi_and')} className="text-left group w-full">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors relative shadow-sm h-full">
                              <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-2">6️⃣ Multiple Conditions (AND)</h4>
                              <p className="text-[10px] text-slate-500 mb-2">Wrap each condition in parentheses, joined by the bitwise <code>&</code> symbol.</p>
                              <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
<span className="text-slate-400 italic"># Marks &gt; 80 AND &lt; 90</span><br/>
<span className="text-blue-500">print</span>(df[ (df[<span className="text-amber-500">"Marks"</span>] &gt; <span className="text-emerald-500">80</span>) <span className="text-sky-500 font-bold">&</span> (df[<span className="text-amber-500">"Marks"</span>] &lt; <span className="text-emerald-500">90</span>) ])
                              </pre>
                          </div>
                      </button>

                      <button onClick={() => runDemo('multi_or')} className="text-left group w-full">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-700 transition-colors relative shadow-sm h-full">
                              <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2">7️⃣ Multiple Conditions (OR)</h4>
                              <p className="text-[10px] text-slate-500 mb-2">Use the vertical pipe <code>|</code> symbol for conditions where either side passes.</p>
                              <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
<span className="text-slate-400 italic"># Marks &gt; 90 OR &lt; 80</span><br/>
<span className="text-blue-500">print</span>(df[ (df[<span className="text-amber-500">"Marks"</span>] &gt; <span className="text-emerald-500">90</span>) <span className="text-amber-500 font-bold">|</span> (df[<span className="text-amber-500">"Marks"</span>] &lt; <span className="text-emerald-500">80</span>) ])
                              </pre>
                          </div>
                      </button>

                      <button onClick={() => runDemo('not_cond')} className="text-left group w-full md:col-span-2 mt-2">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-400 dark:hover:border-rose-700 transition-colors relative shadow-sm h-full flex flex-col items-center justify-center text-center">
                              <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN NOT</div>
                              <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2">8️⃣ NOT Condition ~</h4>
                              <p className="text-[11px] text-slate-500 mb-2">Use the tilde <code className="bg-white dark:bg-slate-950 px-1 py-0.5 rounded border border-slate-200 font-bold">~</code> symbol operator to perfectly invert a single condition block.</p>
                              <code className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 block w-max">
                              <span className="text-blue-500">print</span>(df[ <span className="text-rose-500 font-bold">~</span>(df[<span className="text-amber-500">"Marks"</span>] &gt; <span className="text-emerald-500">80</span>) ]) <span className="text-slate-400 italic"># Not above 80</span>
                              </code>
                          </div>
                      </button>

                  </div>

                </div>
              )}

               {activeTab === 'multi' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">9️⃣ Multi-Column Targeting & 🔟 Real World</h3>

                  <button onClick={() => runDemo('multi_col')} className="text-left group w-full mb-4">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SCRIPT</div>
                          <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-3">9️⃣ Finding String Equivalency</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Filtering works for strings using standard double equals <code>==</code>.</p>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-3 overflow-x-auto">
df[<span className="text-amber-500">"City"</span>] = [<span className="text-amber-500">"London"</span>, <span className="text-amber-500">"Paris"</span>, <span className="text-amber-500">"London"</span>, <span className="text-amber-500">"Berlin"</span>]<br/><br/>
<span className="text-slate-400 italic"># Find students matching text 'London' explicitly</span><br/>
<span className="text-blue-500">print</span>(df[ df[<span className="text-amber-500">"City"</span>] <span className="text-blue-500 font-bold">==</span> <span className="text-amber-500">"London"</span> ])
                          </pre>
                      </div>
                  </button>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN PRODUCTS</div>
                          <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-3">🔟 Real-World: Filtering Expensive E-Comm Products</h4>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-3 overflow-x-auto">
data = {'{'}<br/>
{'  '}<span className="text-amber-500">"Product"</span>: [<span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Phone"</span>, <span className="text-amber-500">"Tablet"</span>, <span className="text-amber-500">"Monitor"</span>],<br/>
{'  '}<span className="text-amber-500">"Price"</span>: [<span className="text-emerald-500">800</span>, <span className="text-emerald-500">500</span>, <span className="text-emerald-500">300</span>, <span className="text-emerald-500">250</span>]<br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/><br/>
<span className="text-slate-400 italic"># Variable map filtering out cheaper inventory lines</span><br/>
expensive = df[ df[<span className="text-amber-500">"Price"</span>] &gt; <span className="text-emerald-500">400</span> ]<br/><br/>
<span className="text-blue-500">print</span>(expensive)
                          </pre>
                      </div>
                  </button>

                </div>
              )}
              
               {activeTab === 'workflow' && (
                <div className="animate-fade-in space-y-6">
                
                  <div className="max-w-xl mx-auto mt-12 mb-12 relative p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                      <div className="absolute top-4 right-4"><GitCompare className="w-5 h-5 text-rose-500/50" /></div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-rose-600 dark:text-rose-400 text-center mb-8">
                          📊 Boolean Indexing Structure Workflow
                      </h4>
                      <div className="flex flex-col items-center space-y-4 font-mono font-bold text-xs relative">
                          {/* Lines */}
                          <div className="absolute top-6 bottom-6 left-1/2 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2 z-0"></div>
                          
                          <div className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 px-6 py-2 rounded-xl z-10 shadow-sm">
                              Raw Dataset Frame
                          </div>
                      
                          <div className="bg-rose-50 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 border-2 border-rose-200 dark:border-rose-800 px-6 py-2 rounded-xl z-10 shadow-sm">
                              Inject Conditions: ['Price'] &gt; 400
                          </div>
                        
                          <div className="bg-amber-50 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border-2 border-amber-200 dark:border-amber-800/50 px-6 py-2 rounded-xl z-10 shadow-sm">
                              Calculate True/False Array map
                          </div>
                          
                          <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border-2 border-emerald-300 dark:border-emerald-700/50 px-8 py-3 rounded-xl z-10 shadow-lg text-sm">
                              Output clean Filtered DataFrame
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
                      
                      <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-lg border border-rose-200 dark:border-rose-800/50 shadow-sm">
                          <span className="font-bold text-sm text-rose-700 dark:text-rose-400 block mb-2 flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/> 1️⃣ Parentheses Are Mandatory!</span>
                          <p className="text-xs text-rose-800/80 dark:text-rose-300 mb-2">Pandas bitwise logic operators <code className="bg-white/50 px-1 rounded mx-0.5 text-black">&</code> <code className="bg-white/50 px-1 rounded mx-0.5 text-black">|</code> have heavy precedence override quirks. If you leave parentheses out, the script crashes claiming "truth value is ambiguous".</p>
                          <div className="space-y-2 font-mono text-[10px]">
                              <div className="bg-white dark:bg-slate-950 p-2 rounded border border-rose-200 dark:border-rose-900 relative">
                                  <span className="absolute top-1 right-2 text-rose-500 font-bold">❌ INCORRECT</span>
                                  df[ df[<span className="text-slate-400">"Marks"</span>] &gt; <span className="text-slate-500">80</span> <span className="text-amber-500 font-bold">&</span> df[<span className="text-slate-400">"Marks"</span>] &lt; <span className="text-slate-500">90</span> ]
                              </div>
                              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded border border-emerald-200 dark:border-emerald-900/50 relative">
                                  <span className="absolute top-1 right-2 text-emerald-500 font-bold">✔ CORRECT</span>
                                  df[ <b className="text-emerald-500 text-sm">(</b>df[<span className="text-slate-400">"Marks"</span>] &gt; <span className="text-slate-500">80</span><b className="text-emerald-500 text-sm">)</b> <span className="text-emerald-500 font-bold">&</span> <b className="text-emerald-500 text-sm">(</b>df[<span className="text-slate-400">"Marks"</span>] &lt; <span className="text-slate-500">90</span><b className="text-emerald-500 text-sm">)</b> ]
                              </div>
                          </div>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded mr-3">
                              <span className="font-bold text-sm text-indigo-600 dark:text-indigo-400">2️⃣</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Use For Data Exploration Instantly</span>
                            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">Pop open a notebook and drill into segments quickly. Find outliers natively fast: <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded block mt-1">df[df["Price"] &gt; 500]</code></p>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded mr-3">
                              <span className="font-bold text-sm text-sky-600 dark:text-sky-400">3️⃣</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Combine with .loc[] for Cleaner Readability</span>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Preferred by professionals parsing data across locations: <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded block mt-1">df.loc[df["Marks"] &gt; 80]</code></p>
                          </div>
                      </div>

                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Zap className="w-5 h-5 text-rose-500 mr-2" />
                    🚀 Pandas Filter Tricks
                  </h3>

                  <div className="grid grid-cols-1 gap-3">
                      <button onClick={() => runDemo('trick1')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-rose-400 shadow-sm flex items-center justify-between">
                              <span className="font-bold text-xs text-rose-600 dark:text-rose-400 truncate mr-2">Trick 1 — .isin() Multiple Cities</span>
                              <code className="font-mono text-[9px] sm:text-[11px] bg-white dark:bg-slate-950 px-1 sm:px-2 py-1 rounded block">df[df["City"].isin(["London", "Paris"])]</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick2')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-rose-400 shadow-sm flex items-center justify-between">
                              <span className="font-bold text-xs text-rose-600 dark:text-rose-400">Trick 2 — Find/Filter Missing Values</span>
                              <code className="font-mono text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded block">df[df["Marks"].isnull()]</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick3')} className="w-full text-left group">
                           <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-rose-400 shadow-sm flex items-center justify-between overflow-x-auto">
                              <span className="font-bold text-xs text-rose-600 dark:text-rose-400 mr-2 whitespace-nowrap">Trick 3 — str.startswith() Strings Pattern</span>
                              <code className="font-mono text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded block">df[df["Name"].str.startswith("J")]</code>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-rose-400" />
                     Indexing Console
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
                        <ListFilter className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4">Run an indexing statement to watch the filtered DataFrame outputs populate.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                              line.includes('True') ? 'text-emerald-400 font-bold' :
                              line.includes('False') ? 'text-rose-400 font-bold' :
                              line.includes('Name') || line.includes('Marks') || line.includes('City') ? 'text-rose-300 font-bold' :
                              line.includes('Empty') ? 'text-slate-400 italic' :
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
           <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl pointer-events-none"></div>
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            🧩 Practice Exercise
          </h2>
          <div className="z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                  <p className="text-slate-300 mb-2 text-sm font-medium">Use the provided student dataset:</p>
                  <pre className="bg-black/60 text-emerald-300 p-3 rounded-lg text-xs font-mono mb-4 border border-white/5 w-fit">
Student   Marks
John      85
Emma      92
Alex      70
Sophia    88
                  </pre>
                  
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4">
                      <p className="text-white text-xs font-bold mb-2 uppercase tracking-wide">Tasks & Rules:</p>
                      <p className="text-rose-200 text-xs mb-2">1️⃣ Filter and show ONLY students with marks STRICTLY above <span className="text-white font-bold bg-white/10 px-1">80</span>.</p>
                  </div>

                  <div className="text-[10px] text-yellow-400 font-bold bg-yellow-400/10 inline-flex items-center px-4 py-2 rounded-lg border border-yellow-400/20">
                    <span className="mr-2">Hint:</span> <code className="bg-black/40 px-2 py-1 rounded text-white font-mono tracking-wide">df[df["Marks"] &gt; 80]</code>
                  </div>
              </div>
              <div className="bg-black/60 p-5 rounded-2xl border border-white/5 shadow-inner">
                  <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                     <p className="text-rose-400 text-xs font-bold uppercase tracking-wider">Filtered View Output</p>
                     <button onClick={() => runDemo('exercise')} className="bg-rose-600 hover:bg-rose-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow">RUN SIMULATION</button>
                  </div>
                   <div className="text-xs text-slate-400 mb-2 italic">Notice how Alex (70) was stripped out entirely.</div>
                  <pre className="text-white font-mono text-xs leading-relaxed">
  Student  Marks<br/>
0    John     <span className="text-emerald-400 font-bold">85</span><br/>
1    Emma     <span className="text-emerald-400 font-bold">92</span><br/>
3  Sophia     <span className="text-emerald-400 font-bold">88</span>
                  </pre>
              </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PdBooleanIndexing;
