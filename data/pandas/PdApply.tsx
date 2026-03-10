import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  Settings, Zap, Columns, Rows, FileCode2,
  GitBranch, CheckCircle2, CopyPlus
} from 'lucide-react';

const PdApply: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'series' | 'df' | 'custom' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'series_orig':
        outLines = [
          '0    10',
          '1    20',
          '2    30',
          'dtype: int64'
        ];
        break;
      case 'series_apply':
        outLines = [
          '0    20',
          '1    40',
          '2    60',
          'dtype: int64'
        ];
        break;
      case 'df_col':
        outLines = [
          '   Price  NewPrice',
          '0    100     110.0',
          '1    200     220.0',
          '2    300     330.0'
        ];
        break;
      case 'df_row':
        outLines = [
          '   Math  Science  Total',
          '0    80       85    165',
          '1    90       88    178',
          '2    70       75    145'
        ];
        break;
      case 'custom_func':
        outLines = [
          '   Marks Grade',
          '0     95     A',
          '1     82     B',
          '2     65     C'
        ];
        break;
      case 'real_world':
        outLines = [
          '  Employee  Salary  NewSalary',
          '0     John   40000    44000.0',
          '1     Emma   50000    55000.0',
          '2     Alex   45000    49500.0'
        ];
        break;
      case 'trick1':
        outLines = [
          '0    JOHN',
          '1    EMMA',
          '2    ALEX',
          'Name: Name, dtype: object'
        ];
        break;
      case 'trick2':
        outLines = [
          '0    10',
          '1    21',
          '2    30',
          'Name: Price, dtype: int64'
        ];
        break;
      case 'trick3':
        outLines = [
          'Price       600',
          'NewPrice    660.0',
          'dtype: float64'
        ];
        break;
      case 'exercise':
        outLines = [
          '  Student  Marks Result',
          '0    John     85   Pass',
          '1    Emma     92   Pass',
          '2    Alex     70   Fail'
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
        <div className="inline-flex items-center justify-center p-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl mb-6 shadow-sm border border-sky-200 dark:border-sky-800/50">
          <Settings className="w-10 h-10 text-sky-600 dark:text-sky-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Apply Function <code className="text-sky-600 dark:text-sky-400 text-3xl sm:text-4xl bg-sky-50 dark:bg-sky-900/20 px-3 py-1 rounded-xl">apply()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Perform custom operations instantly on DataFrame rows, columns, or Series elements without writing complex loops.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-sky-500" />
            Apply Transformations
          </h2>
          <div className="flex gap-2 flex-wrap">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'basics' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-2" /> 1️⃣-3️⃣ Basics
            </button>
            <button
              onClick={() => setActiveTab('series')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'series' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Zap className="w-4 h-4 mr-2" /> 4️⃣ Series
            </button>
            <button
              onClick={() => setActiveTab('df')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'df' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Columns className="w-4 h-4 mr-2" /> 5️⃣-6️⃣ DataFrames
            </button>
             <button
              onClick={() => setActiveTab('custom')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'custom' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <FileCode2 className="w-4 h-4 mr-2" /> 7️⃣-9️⃣ Custom logic
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'tips' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-2" /> 🔟-🚀 Dev Tips
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
                    <MessageSquareText className="w-5 h-5 text-sky-500 mr-2" />
                    1️⃣ What is apply() in Pandas?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>The <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded font-bold text-sky-600">apply()</code> function is used to apply a custom function to rows or columns of a DataFrame or elements of a Series without writing complex/slow "for loops".</p>
                    <div className="flex font-mono text-xs items-center justify-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300">
                        <span className="bg-white dark:bg-slate-800 px-3 py-1.5 rounded shadow-sm border border-slate-200 dark:border-slate-600">Dataset</span>
                        <span className="mx-3 text-slate-400">→</span>
                        <span className="bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 px-3 py-1.5 rounded shadow-sm border border-sky-200 dark:border-sky-800">apply()</span>
                        <span className="mx-3 text-slate-400">→</span>
                        <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded shadow-sm border border-emerald-200 dark:border-emerald-800">Custom Transformation</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Zap className="w-5 h-5 text-amber-500 mr-2" />
                    2️⃣ Why apply() is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300">
                      <p className="mb-4 text-sm">Sometimes built-in aggregate functions like <code>sum()</code>, <code>mean()</code>, or <code>max()</code> are not enough. We may need bespoke <b>custom logic</b>.</p>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30 flex items-center">
                              <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2" />
                              Add complex tax logic to prices
                          </div>
                          <div className="bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30 flex items-center">
                              <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2" />
                              Categorize student grades
                          </div>
                          <div className="bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30 flex items-center">
                              <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2" />
                              Convert custom string units
                          </div>
                          <div className="bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30 flex items-center">
                              <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2" />
                              Format complex string layouts
                          </div>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-teal-500 mr-2" />
                    3️⃣ Basic Syntax & Direction
                  </h3>
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden text-sm">
                      <div className="p-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 font-mono text-center">
                          <code className="bg-white dark:bg-slate-950 px-2 py-1 rounded text-teal-600 dark:text-teal-400 font-bold">DataFrame.apply(function, axis)</code>
                      </div>
                      <div className="grid grid-cols-2 bg-slate-50 dark:bg-slate-900/50 font-bold p-3 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 text-xs uppercase tracking-wider">
                          <div>Parameter</div>
                          <div>Meaning</div>
                      </div>
                      <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <code className="text-slate-800 dark:text-slate-200 font-mono text-xs">function</code>
                          <div className="text-slate-600 dark:text-slate-400 text-xs">Function you intend to apply</div>
                      </div>
                      <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <code className="text-sky-600 dark:text-sky-400 font-bold font-mono text-xs bg-sky-50 dark:bg-sky-900/20 px-1 inline-block rounded w-max">axis=0</code>
                          <div className="text-slate-600 dark:text-slate-400 text-xs">Apply function vertically down <b className="text-slate-700 dark:text-slate-300">Columns</b></div>
                      </div>
                      <div className="grid grid-cols-2 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <code className="text-emerald-600 dark:text-emerald-400 font-bold font-mono text-xs bg-emerald-50 dark:bg-emerald-900/20 px-1 inline-block rounded w-max">axis=1</code>
                          <div className="text-slate-600 dark:text-slate-400 text-xs">Apply function horizontally across <b className="text-slate-700 dark:text-slate-300">Rows</b></div>
                      </div>
                  </div>

                </div>
              )}

              {activeTab === 'series' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">4️⃣ Using apply() on a Series</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">When used directly on a Series, apply executes the function across every single element linearly.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                      <button onClick={() => runDemo('series_orig')} className="text-left group w-full">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN ORIG</div>
                          <h4 className="font-bold text-sm text-slate-700 dark:text-slate-400 mb-2">Original Data</h4>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
<span className="text-blue-500">import</span> pandas <span className="text-blue-500">as</span> pd<br/><br/>
data = [<span className="text-emerald-500">10</span>, <span className="text-emerald-500">20</span>, <span className="text-emerald-500">30</span>]<br/>
s = pd.Series(data)<br/><br/>
<span className="text-blue-500">print</span>(s)
                          </pre>
                        </div>
                      </button>

                       <button onClick={() => runDemo('series_apply')} className="text-left group w-full">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN APPLY</div>
                          <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-2">After Apply Factor</h4>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
<span className="text-slate-400 italic"># Doubles each value in series</span><br/>
<br/>
<span className="text-blue-500">print</span>(s.<span className="text-blue-500 font-bold">apply</span>(<span className="text-blue-500 font-bold">lambda</span> x: x * <span className="text-emerald-500">2</span>))
                          </pre>
                        </div>
                      </button>
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800 p-5 rounded-xl mt-4">
                      <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-3 text-xs uppercase tracking-wider text-center">Transformation Linear Data Flow</h4>
                      <div className="flex flex-col items-center justify-center space-y-2 mt-4 font-mono text-sm font-bold w-full max-w-[200px] mx-auto">
                        <div className="flex justify-between w-full bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-indigo-200">
                            <span>10</span><span>20</span><span>30</span>
                        </div>
                        <div className="text-indigo-400 text-xs bg-indigo-100 dark:bg-indigo-900/40 px-3 py-1 rounded">apply() (x * 2)</div>
                        <div className="flex justify-between w-full bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 px-4 py-2 rounded-lg border border-sky-200 dark:border-sky-800">
                            <span>20</span><span>40</span><span>60</span>
                        </div>
                     </div>
                  </div>

                </div>
              )}

              {activeTab === 'df' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">5️⃣-6️⃣ Using apply() on DataFrames</h3>
                  
                  <button onClick={() => runDemo('df_col')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-400 dark:hover:border-teal-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN COL</div>
                          <h4 className="font-bold text-sm text-teal-600 dark:text-teal-400 mb-2 flex items-center"><Columns className="w-4 h-4 mr-2" /> 5️⃣ Applying to a Column</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Target a specific column (Series) to apply transformations, like adding a 10% tax margin.</p>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-2 overflow-x-auto">
data = {'{'} <span className="text-amber-500">"Price"</span>: [<span className="text-emerald-500">100</span>, <span className="text-emerald-500">200</span>, <span className="text-emerald-500">300</span>] {'}'}<br/>
df = pd.DataFrame(data)<br/><br/>
<span className="text-slate-400 italic"># Target the specific Series directly via dict lookup</span><br/>
df[<span className="text-amber-500">"NewPrice"</span>] = df[<span className="text-amber-500">"Price"</span>].<span className="text-blue-500 font-bold">apply</span>(<span className="text-blue-500 font-bold">lambda</span> x: x * <span className="text-emerald-500">1.1</span>)<br/><br/>
<span className="text-blue-500">print</span>(df)
                          </pre>
                      </div>
                  </button>

                  <button onClick={() => runDemo('df_row')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN ROW</div>
                          <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2 flex items-center"><Rows className="w-4 h-4 mr-2" /> 6️⃣ Applying Across Rows</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">To calculate across rows using multiple columns simultaneously, pass <code className="bg-emerald-100 dark:bg-emerald-900/50 px-1 rounded text-emerald-700 dark:text-emerald-300 font-bold">axis=1</code>.</p>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-2 overflow-x-auto">
data = {'{'}<br/>
{'  '}<span className="text-amber-500">"Math"</span>: [<span className="text-emerald-500">80</span>, <span className="text-emerald-500">90</span>, <span className="text-emerald-500">70</span>],<br/>
{'  '}<span className="text-amber-500">"Science"</span>: [<span className="text-emerald-500">85</span>, <span className="text-emerald-500">88</span>, <span className="text-emerald-500">75</span>]<br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/><br/>
<span className="text-slate-400 italic"># Calculate Total passing the entire row context via axis=1</span><br/>
df[<span className="text-amber-500">"Total"</span>] = df.<span className="text-blue-500 font-bold">apply</span>(<span className="text-blue-500 font-bold">lambda</span> row: row[<span className="text-amber-500">"Math"</span>] + row[<span className="text-amber-500">"Science"</span>], <span className="text-blue-500 font-bold">axis</span>=<span className="text-emerald-500">1</span>)<br/><br/>
<span className="text-blue-500">print</span>(df)
                          </pre>
                      </div>
                  </button>

                </div>
              )}

              {activeTab === 'custom' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">7️⃣-9️⃣ Custom Functions & Workflow</h3>

                  <button onClick={() => runDemo('custom_func')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN FUNC</div>
                          <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-2 flex items-center"><FileCode2 className="w-4 h-4 mr-2" /> 7️⃣ Using Custom User Def Functions</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Instead of using dense inline lambdas, define complex reusable logic externally first.</p>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-2 overflow-x-auto">
<span className="text-blue-500 font-bold">def</span> <span className="text-amber-400 font-bold">grade</span>(mark):<br/>
<span className="text-transparent">----</span><span className="text-blue-500 font-bold">if</span> mark &gt;= <span className="text-emerald-500">90</span>:<br/>
<span className="text-transparent">--------</span><span className="text-blue-500 font-bold">return</span> <span className="text-amber-500">"A"</span><br/>
<span className="text-transparent">----</span><span className="text-blue-500 font-bold">elif</span> mark &gt;= <span className="text-emerald-500">75</span>:<br/>
<span className="text-transparent">--------</span><span className="text-blue-500 font-bold">return</span> <span className="text-amber-500">"B"</span><br/>
<span className="text-transparent">----</span><span className="text-blue-500 font-bold">else</span>:<br/>
<span className="text-transparent">--------</span><span className="text-blue-500 font-bold">return</span> <span className="text-amber-500">"C"</span><br/><br/>
data = {'{'} <span className="text-amber-500">"Marks"</span>: [<span className="text-emerald-500">95</span>, <span className="text-emerald-500">82</span>, <span className="text-emerald-500">65</span>] {'}'}<br/>
df = pd.DataFrame(data)<br/><br/>
<span className="text-slate-400 italic"># Pass function name ref directly without parentheses ()</span><br/>
df[<span className="text-amber-500">"Grade"</span>] = df[<span className="text-amber-500">"Marks"</span>].<span className="text-blue-500 font-bold">apply</span>(grade)<br/><br/>
<span className="text-blue-500">print</span>(df)
                          </pre>
                      </div>
                  </button>
                  
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 overflow-x-auto">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">8️⃣ apply() Engine Workflow</h4>
                      <div className="flex items-center text-[10px] font-mono font-bold whitespace-nowrap justify-center">
                          <span className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 px-2 py-1 rounded">Dataset</span>
                          <span className="mx-1 text-slate-400">→</span>
                          <span className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 px-2 py-1 rounded">Select Col/Row</span>
                          <span className="mx-1 text-slate-400">→</span>
                          <span className="bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 px-2 py-1 rounded">Apply Function</span>
                          <span className="mx-1 text-slate-400">→</span>
                          <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2 py-1 rounded">Transformed</span>
                      </div>
                  </div>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                          <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-3">9️⃣ Real-World: Employee Salary Raise</h4>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-3 overflow-x-auto">
data = {'{'}<br/>
{'  '}<span className="text-amber-500">"Employee"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Emma"</span>, <span className="text-amber-500">"Alex"</span>],<br/>
{'  '}<span className="text-amber-500">"Salary"</span>: [<span className="text-emerald-500">40000</span>, <span className="text-emerald-500">50000</span>, <span className="text-emerald-500">45000</span>]<br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/><br/>
<span className="text-slate-400 italic"># Applies 10% raise across the team column</span><br/>
df[<span className="text-amber-500">"NewSalary"</span>] = df[<span className="text-amber-500">"Salary"</span>].<span className="text-blue-500 font-bold">apply</span>(<span className="text-blue-500 font-bold">lambda</span> x: x * <span className="text-emerald-500">1.10</span>)<br/><br/>
<span className="text-blue-500">print</span>(df)
                          </pre>
                      </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/10 rounded-full blur-xl pointer-events-none"></div>
                          <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 flex items-center mb-2"><GitBranch className="w-4 h-4 mr-2" /> 🔟 map() vs apply()</h4>
                          <div className="space-y-2 mt-4 text-xs">
                              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-2">
                                  <code className="text-sky-600 dark:text-sky-400 font-bold bg-sky-50 dark:bg-sky-900/20 px-1 rounded">map()</code>
                                  <span className="text-slate-600 dark:text-slate-400">Works ONLY on Series</span>
                              </div>
                              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-2">
                                  <code className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/20 px-1 rounded">apply()</code>
                                  <span className="text-slate-600 dark:text-slate-400">Series & DataFrame</span>
                              </div>
                               <div className="flex justify-between items-center pb-1">
                                  <code className="text-fuchsia-600 dark:text-fuchsia-400 font-bold bg-fuchsia-50 dark:bg-fuchsia-900/20 px-1 rounded">applymap()</code>
                                  <span className="text-slate-600 dark:text-slate-400">Every single element</span>
                              </div>
                          </div>
                      </div>

                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800/40 shadow-sm">
                          <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400 flex items-center mb-2"><Lightbulb className="w-4 h-4 mr-2" /> 1️⃣5️⃣+ Years XP Advice</h4>
                          <ul className="text-xs space-y-3 mt-3 text-slate-700 dark:text-slate-300">
                              <li>
                                  <span className="font-bold block text-rose-600 dark:text-rose-400">Avoid apply() for Big Data</span>
                                  Whenever possible, use vectorized operations because they are much faster. (e.g. <code className="bg-white dark:bg-slate-900 px-1 rounded mx-1">df["Price"] * 2</code> instead of apply)
                              </li>
                              <li>
                                  <span className="font-bold block text-emerald-600 dark:text-emerald-400">Use for Complex Logic</span>
                                  Best for conditional transformations, or executing long custom functions.
                              </li>
                          </ul>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <CopyPlus className="w-5 h-5 text-sky-500 mr-2" />
                    🚀 Pandas Tips & Tricks Reference
                  </h3>

                  <div className="grid grid-cols-1 gap-3">
                      <button onClick={() => runDemo('trick1')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-sky-400 shadow-sm flex items-center justify-between">
                              <span className="font-bold text-xs text-sky-600 dark:text-sky-400">Trick 1 — Convert Target Text to Uppercase</span>
                              <code className="font-mono text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded block">df["Name"].apply(str.upper)</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick2')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-sky-400 shadow-sm flex items-center justify-between">
                              <span className="font-bold text-xs text-sky-600 dark:text-sky-400">Trick 2 — Quick Round Decimals Math</span>
                              <code className="font-mono text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded block">df["Price"].apply(round)</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick3')} className="w-full text-left group">
                           <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-sky-400 shadow-sm flex items-center justify-between">
                              <span className="font-bold text-xs text-sky-600 dark:text-sky-400">Trick 3 — Apply Function to Entire Sheet</span>
                              <code className="font-mono text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded block">df.apply(np.sum)</code>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-sky-400" />
                     Execution Console
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
                        <FileCode2 className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4">Initialize an apply transformation to see the evaluation buffer string block output view panel here.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        const isNum = !isNaN(Number(line)) && line.trim() !== '';
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                              line.includes('Name:') || line.includes('dtype:') || line.includes('Grade') || line.includes('Result') ? 'text-sky-300' :
                              line.startsWith(' ') && isNum ? 'text-emerald-400' :
                              isNum ? 'text-emerald-400' :
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
           <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            🧩 Practice Exercise
          </h2>
          <div className="z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                  <p className="text-slate-300 mb-2 text-sm font-medium">Use the provided dataset:</p>
                  <pre className="bg-black/60 text-emerald-300 p-3 rounded-lg text-xs font-mono mb-4 border border-white/5 w-fit">
Student   Marks
John      85
Emma      92
Alex      70
                  </pre>
                  
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4">
                      <p className="text-white text-xs font-bold mb-2 uppercase tracking-wide">Tasks & Rules:</p>
                      <p className="text-sky-200 text-xs mb-2">Create a new column called <code className="bg-black/40 px-1 rounded">Result</code>.</p>
                      <ul className="text-slate-300 text-[11px] font-mono space-y-1">
                          <li><span className="text-emerald-400">Marks ≥ 80</span> → "Pass"</li>
                          <li><span className="text-rose-400">Marks &lt; 80</span> → "Fail"</li>
                      </ul>
                  </div>

                  <div className="text-[10px] text-yellow-400 font-bold bg-yellow-400/10 inline-flex items-center px-4 py-2 rounded-lg border border-yellow-400/20">
                    <span className="mr-2">Hint:</span> <code className="bg-black/40 px-2 py-1 rounded text-white font-mono tracking-wide">df["Result"] = df["Marks"].apply(...)</code>
                  </div>
              </div>
              <div className="bg-black/60 p-5 rounded-2xl border border-white/5 shadow-inner">
                  <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                     <p className="text-sky-400 text-xs font-bold uppercase tracking-wider">Evaluation View Window</p>
                     <button onClick={() => runDemo('exercise')} className="bg-sky-600 hover:bg-sky-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow">RUN SIMULATION</button>
                  </div>
                  <pre className="text-slate-200 font-mono text-xs leading-relaxed">
  Student  Marks Result<br/>
0   John    85   <span className="text-emerald-400 font-bold">Pass</span><br/>
1   Emma    92   <span className="text-emerald-400 font-bold">Pass</span><br/>
2   Alex    70   <span className="text-rose-400 font-bold">Fail</span>
                  </pre>
              </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PdApply;
