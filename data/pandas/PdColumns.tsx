import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  Settings, Zap, Columns, ListTree, Calculator,
  CheckCircle2, AlertTriangle, BoxSelect, Trash2
} from 'lucide-react';

const PdColumns: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'select' | 'modify' | 'organize' | 'workflow' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'original':
        outLines = [
          '   Name  Age    City',
          '0  John   25  London',
          '1  Emma   30   Paris',
          '2  Alex   28  Berlin'
        ];
        break;
      case 'view_cols':
        outLines = [
          "Index(['Name', 'Age', 'City'], dtype='object')"
        ];
        break;
      case 'select_single':
        outLines = [
          '0    John',
          '1    Emma',
          '2    Alex',
          'Name: Name, dtype: object'
        ];
        break;
      case 'select_multi':
        outLines = [
          '   Name  Age',
          '0  John   25',
          '1  Emma   30',
          '2  Alex   28'
        ];
        break;
      case 'add_col':
        outLines = [
          '   Name  Age    City  Salary',
          '0  John   25  London   40000',
          '1  Emma   30   Paris   50000',
          '2  Alex   28  Berlin   45000'
        ];
        break;
      case 'calc_col':
        outLines = [
          '   Name  Age  Age_in_5_years',
          '0  John   25              30',
          '1  Emma   30              35',
          '2  Alex   28              33'
        ];
        break;
      case 'rename':
        outLines = [
          '  Student_Name  Age    City',
          '0         John   25  London',
          '1         Emma   30   Paris',
          '2         Alex   28  Berlin'
        ];
        break;
      case 'delete':
        outLines = [
          '   Name  Age',
          '0  John   25',
          '1  Emma   30',
          '2  Alex   28'
        ];
        break;
      case 'reorder':
        outLines = [
          '   Age  Name    City',
          '0   25  John  London',
          '1   30  Emma   Paris',
          '2   28  Alex  Berlin'
        ];
        break;
      case 'trick1':
        outLines = [
          "Index(['name', 'age', 'city'], dtype='object')"
        ];
        break;
      case 'trick2':
        outLines = [
          "Index(['Total_Sales', 'Net_Profit'], dtype='object')"
        ];
        break;
      case 'trick3':
        outLines = [
          '   Age  Marks',
          '0   25     85',
          '1   30     92',
          '2   28     78'
        ];
        break;
      case 'exercise':
        outLines = [
          '   Name  Marks Result',
          '0  John     85   Pass',
          '1  Emma     92   Pass',
          '2  Alex     78   Fail'
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
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <Columns className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Columns
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The ultimate guide to structuring labeled data fields: Selecting, modifying, deleting, and calculating powerful column metrics.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-indigo-500" />
            Columns Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-3️⃣ Basics
            </button>
            <button
              onClick={() => setActiveTab('select')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'select' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BoxSelect className="w-4 h-4 mr-1.5" /> 4️⃣-5️⃣ Select
            </button>
             <button
              onClick={() => setActiveTab('modify')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'modify' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Calculator className="w-4 h-4 mr-1.5" /> 6️⃣-7️⃣ Modify
            </button>
             <button
              onClick={() => setActiveTab('organize')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'organize' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Trash2 className="w-4 h-4 mr-1.5" /> 8️⃣-🔟 Organize
            </button>
             <button
              onClick={() => setActiveTab('workflow')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'workflow' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Zap className="w-4 h-4 mr-1.5" /> Flow
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
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
                    <Columns className="w-5 h-5 text-indigo-500 mr-2" />
                    1️⃣ What are Columns in Pandas?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>In Pandas, columns represent <b>labeled data fields</b> running vertically in a DataFrame.</p>
                    <p className="text-sm">Each column contains values of a specific type (like text strings or integers) and represents a unique feature or variable spanning across the dataset records.</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 shadow-inner mt-4">
                        <div className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded shadow-sm border border-indigo-200 dark:border-indigo-800 text-sm flex items-center">
                            Columns <span className="mx-2 text-indigo-400">→</span> <ListTree className="w-4 h-4 mr-2"/> Name | Age | City
                        </div>
                        <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded shadow-sm border border-slate-200 dark:border-slate-600 text-sm">
                            Rows <span className="mx-2 text-slate-400">→</span> Data records
                        </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    2️⃣-3️⃣ DataFrame Construction
                  </h3>
                  
                  <div className="space-y-4">
                      <button onClick={() => runDemo('original')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                          <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">2️⃣ Creating a DataFrame with Columns</h4>
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
<span className="text-slate-400 italic"># Dictionary keys become the Column Headers</span><br/>
data = {'{'}<br/>
{'    '}<span className="text-amber-500">"Name"</span>: [<span className="text-amber-500">"John"</span>, <span className="text-amber-500">"Emma"</span>, <span className="text-amber-500">"Alex"</span>],<br/>
{'    '}<span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500">25</span>, <span className="text-emerald-500">30</span>, <span className="text-emerald-500">28</span>],<br/>
{'    '}<span className="text-amber-500">"City"</span>: [<span className="text-amber-500">"London"</span>, <span className="text-amber-500">"Paris"</span>, <span className="text-amber-500">"Berlin"</span>]<br/>
{'}'}<br/><br/>
df = pd.DataFrame(data)<br/>
<span className="text-blue-500">print</span>(df)
                          </pre>
                        </div>
                      </button>

                      <button onClick={() => runDemo('view_cols')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 dark:hover:border-slate-600 transition-colors relative shadow-sm h-full flex flex-col items-center justify-center text-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN INDEX</div>
                            <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400 mb-2">3️⃣ Viewing Column Names</h4>
                            <p className="text-xs text-slate-500 mb-2">Extract the architectural blueprint of headers using the <code>.columns</code> property.</p>
                            <code className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 block w-max mt-2">
                                <span className="text-blue-500">print</span>(df.columns)
                            </code>
                        </div>
                      </button>
                  </div>

                </div>
              )}

              {activeTab === 'select' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <BoxSelect className="w-5 h-5 text-sky-500 mr-2" />
                    4️⃣-5️⃣ Selecting Columns
                  </h3>

                  <button onClick={() => runDemo('select_single')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors relative shadow-sm h-full mb-4">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SINGLE</div>
                          <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-2">4️⃣ Selecting a Single Column</h4>
                          <p className="text-[11px] text-slate-500 mb-2">You can isolate a single column returning a 1D Pandas Series using bracket notation mapping string headers.</p>
                          <code className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 block w-max">
                          <span className="text-blue-500">print</span>(df[<span className="text-amber-500">"Name"</span>])
                          </code>
                      </div>
                  </button>

                  <button onClick={() => runDemo('select_multi')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MULTI</div>
                          <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">5️⃣ Selecting Multiple Columns</h4>
                          <p className="text-[11px] text-slate-500 mb-2">Pass a <b className="text-slate-700 dark:text-slate-300">list of headers</b> into the bracket notation (double brackets <code>[[ ]]</code> ) to extract a sub-DataFrame structure.</p>
                          <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
<span className="text-blue-500">print</span>(df[[<span className="text-amber-500">"Name"</span>, <span className="text-amber-500">"Age"</span>]])
                          </pre>
                           <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center justify-center p-3 bg-white dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-800 text-[10px] font-mono">
                              <span className="text-slate-400">Original →  Name | Age | City</span>
                              <span className="text-slate-300 hidden sm:inline">|</span>
                              <span className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">Selected → Name | Age</span>
                          </div>
                      </div>
                  </button>

                </div>
              )}

               {activeTab === 'modify' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Calculator className="w-5 h-5 text-emerald-500 mr-2" />
                      6️⃣-7️⃣ Modifying & Creating Columns
                  </h3>

                  <button onClick={() => runDemo('add_col')} className="text-left group w-full mb-4">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN ADD</div>
                          <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-3">6️⃣ Adding a New Column</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">You can attach new columns natively mapping array lists straight to a new dataframe bracket header name.</p>
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-3 overflow-x-auto">
<span className="text-slate-400 italic"># Must match exact row length count (3 here)</span><br/>
df[<span className="text-amber-500">"Salary"</span>] = [<span className="text-emerald-500">40000</span>, <span className="text-emerald-500">50000</span>, <span className="text-emerald-500">45000</span>]<br/><br/>
<span className="text-blue-500">print</span>(df)
                          </pre>
                      </div>
                  </button>

                  <button onClick={() => runDemo('calc_col')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MATH</div>
                          <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-3">7️⃣ Creating Columns from Calculations</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Run scalar math against existing columns. Pandas broadcasts the arithmetic operation simultaneously to all rows in the dataset structure.</p>
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-3 overflow-x-auto">
<span className="text-slate-400 italic"># Add 5 years to everyone</span><br/>
df[<span className="text-amber-500">"Age_in_5_years"</span>] = df[<span className="text-amber-500">"Age"</span>] <span className="text-amber-500 font-bold">+</span> <span className="text-emerald-500">5</span><br/><br/>
<span className="text-blue-500">print</span>(df[[<span className="text-amber-500">"Name"</span>, <span className="text-amber-500">"Age"</span>, <span className="text-amber-500">"Age_in_5_years"</span>]])
                          </pre>
                      </div>
                  </button>

                </div>
              )}

               {activeTab === 'organize' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Trash2 className="w-5 h-5 text-rose-500 mr-2" />
                      8️⃣-🔟 Organizing Columns
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                      <button onClick={() => runDemo('rename')} className="text-left group w-full">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors relative shadow-sm h-full">
                              <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN RENAME</div>
                              <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">8️⃣ Renaming Columns</h4>
                              <p className="text-[11px] text-slate-500 mb-2">Feed a dictionary mapper to rename endpoints cleanly. Use <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">inplace=True</code> to commit the save natively into memory.</p>
                              <code className="font-mono text-[9px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 block overflow-x-auto">
                              df.<span className="text-blue-500">rename</span>(columns={'{'}<span className="text-amber-500">"Name"</span>: <span className="text-amber-500">"Student_Name"</span>{'}'}, inplace=<span className="text-blue-500 font-bold">True</span>)
                              </code>
                          </div>
                      </button>

                      <button onClick={() => runDemo('delete')} className="text-left group w-full">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-400 dark:hover:border-rose-700 transition-colors relative shadow-sm h-full">
                              <div className="absolute top-4 right-4 text-[10px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DROP</div>
                              <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2 flex items-center">9️⃣ Deleting Columns</h4>
                              <p className="text-[11px] text-slate-500 mb-2">Remove column tracks natively using <code>drop()</code>. Setting <code>axis=1</code> instructs Pandas to target columns (axis 0 is reserved for rows).</p>
                              <code className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 block overflow-x-auto">
                              df.<span className="text-blue-500">drop</span>(<span className="text-amber-500">"City"</span>, axis=<span className="text-emerald-500">1</span>, inplace=<span className="text-blue-500 font-bold">True</span>)
                              </code>
                          </div>
                      </button>

                       <button onClick={() => runDemo('reorder')} className="text-left group w-full">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors relative shadow-sm h-full">
                              <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SHUFFLE</div>
                              <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-2">🔟 Reordering Columns</h4>
                              <p className="text-[11px] text-slate-500 mb-2">Shuffle the structural view by slicing with double arrays mapping the explicit header layout sequence you want.</p>
                              <code className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 block overflow-x-auto">
                              df = df[[<span className="text-amber-500">"Age"</span>, <span className="text-amber-500">"Name"</span>, <span className="text-amber-500">"City"</span>]]
                              </code>
                          </div>
                      </button>
                  </div>

                </div>
              )}
              
               {activeTab === 'workflow' && (
                <div className="animate-fade-in space-y-6">
                
                  <div className="max-w-xl mx-auto mt-12 mb-12 relative p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                      <div className="absolute top-4 right-4"><Zap className="w-5 h-5 text-indigo-500/50" /></div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-600 dark:text-indigo-400 text-center mb-8">
                          📊 Column Operations Workflow
                      </h4>
                      <div className="flex flex-col items-center space-y-4 font-mono font-bold text-xs relative">
                          {/* Lines */}
                          <div className="absolute top-6 bottom-6 left-1/2 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2 z-0"></div>
                          
                          <div className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 px-6 py-2 rounded-xl z-10 shadow-sm text-slate-700 dark:text-slate-300">
                              Base Dataset CSV
                          </div>
                      
                          <div className="bg-sky-50 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border-2 border-sky-200 dark:border-sky-800 px-6 py-2 rounded-xl z-10 shadow-sm">
                              Select Target Column 🎯
                          </div>
                        
                          <div className="bg-amber-50 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border-2 border-amber-200 dark:border-amber-800/50 px-6 py-2 rounded-xl z-10 shadow-sm">
                              Modify / Rename / Math Calculate ⚙️
                          </div>
                          
                          <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border-2 border-emerald-300 dark:border-emerald-700/50 px-8 py-3 rounded-xl z-10 shadow-lg text-sm">
                              Deliver Clean Analyzed Matrix
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
                              <span className="font-bold text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 rounded mr-2">1️⃣</span>
                              <span className="font-bold text-sm text-slate-800 dark:text-slate-200">Use Meaningful Header Names</span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3">Clear nouns guarantee code readability immediately downstream. Obscure headers stall workflows tracking mathematical sources manually.</p>
                          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                              <div className="bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 p-2 rounded border border-rose-200 dark:border-rose-900/40">
                                  <span className="block mb-1 text-[9px] font-sans uppercase font-bold">Bad ❌</span>
                                  df["x"], df["y"]
                              </div>
                              <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 p-2 rounded border border-emerald-200 dark:border-emerald-900/40">
                                  <span className="block mb-1 text-[9px] font-sans uppercase font-bold">Better ✔</span>
                                  df["Salary"], df["Sales"]
                              </div>
                          </div>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                          <div className="flex items-center mb-2">
                              <span className="font-bold text-sm text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 rounded mr-2">2️⃣</span>
                              <span className="font-bold text-sm text-slate-800 dark:text-slate-200">Zero Spaces in Architectures</span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2">Spaces crash standard dot notation object lookups in Python breaking scripts entirely.</p>
                          <p className="text-[10px] font-mono"><span className="text-rose-500 line-through mr-3">Total Sales</span> <span className="text-emerald-500 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900">Total_Sales</span></p>
                      </div>

                       <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded mr-3">
                              <span className="font-bold text-sm text-sky-600 dark:text-sky-400">3️⃣</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Use .loc[] for Clean Multiple Extraction</span>
                            <p className="text-[11px] text-slate-600 dark:text-slate-300">Target slices expressly mapping row/column boundaries explicitly. Selects <span className="italic">all rows</span>, and specific target header endpoints: <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded block mt-1 w-fit">df.loc[:, ["Name", "Age"]]</code></p>
                          </div>
                      </div>

                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Zap className="w-5 h-5 text-indigo-500 mr-2" />
                    🚀 Pandas Column Tricks
                  </h3>

                  <div className="grid grid-cols-1 gap-3">
                      <button onClick={() => runDemo('trick1')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-2">
                              <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400 truncate mr-2 shrink-0">Trick 1 — Lowercase Entire Column Architecture</span>
                              <code className="font-mono text-[9px] sm:text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded w-fit md:w-auto overflow-x-auto">df.columns = df.columns.str.lower()</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick2')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-2">
                              <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400 shrink-0">Trick 2 — Space Elimination String Replace</span>
                              <code className="font-mono text-[9px] sm:text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded w-fit md:w-auto overflow-x-auto">df.columns = df.columns.str.replace(" ", "_")</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick3')} className="w-full text-left group">
                           <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-2">
                              <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400 mr-2 shrink-0">Trick 3 — Extract using only math int dtypes</span>
                              <code className="font-mono text-[9px] sm:text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded w-fit md:w-auto overflow-x-auto">df.select_dtypes(include="int")</code>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-indigo-400" />
                     Column Matrix Simulator
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
                        <Columns className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4">Compile a table logic block to render dataset framework mutations here.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                              line.includes('Index([') ? 'text-indigo-400' :
                              line.includes('Student_Name') || line.includes('Salary') || line.includes('Age_in_5_years') || line.includes('Result') ? 'text-amber-400 font-bold' :
                              line.includes('Pass') ? 'text-emerald-400 font-bold' :
                              line.includes('Fail') ? 'text-rose-400 font-bold' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Marks') ? 'text-indigo-300 font-bold' :
                              line.includes('object') ? 'text-slate-400 italic' :
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
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            🧩 Practice Exercise
          </h2>
          <div className="z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                  <p className="text-slate-300 mb-2 text-sm font-medium">Use the provided academic score dataset:</p>
                  <pre className="bg-black/60 text-emerald-300 p-3 rounded-lg text-xs font-mono mb-4 border border-white/5 w-fit">
Name    Age    Marks
John    25     85
Emma    30     92
Alex    28     78
                  </pre>
                  
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4">
                      <p className="text-white text-xs font-bold mb-2 uppercase tracking-wide">Tasks & Rules:</p>
                      <ul className="text-indigo-200 text-xs space-y-2">
                        <li>1️⃣ Extrapolate out ONLY the <code className="bg-black/40 px-1 rounded text-white font-mono">Name</code> and <code className="bg-black/40 px-1 rounded text-white font-mono">Marks</code> structures.</li>
                        <li>2️⃣ Create a brand new mapped column titled <code className="bg-black/40 px-1 rounded text-white font-mono">Result</code> mapping Pass/Fail.</li>
                        <li className="text-slate-400 mt-2 italic">Marks ≥ 80 → Pass | Marks &lt; 80 → Fail</li>
                      </ul>
                  </div>

                  <div className="text-[10px] text-yellow-400 font-bold bg-yellow-400/10 inline-flex items-center px-4 py-2 rounded-lg border border-yellow-400/20 w-fit">
                    <span className="mr-2">Hint:</span> <code className="bg-black/40 px-2 py-1 rounded text-white font-mono tracking-wide">df[["Name","Marks"]]</code>
                  </div>
              </div>
              <div className="bg-black/60 p-5 rounded-2xl border border-white/5 shadow-inner">
                  <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                     <p className="text-indigo-400 text-xs font-bold uppercase tracking-wider">Solution Blueprint View</p>
                     <button onClick={() => runDemo('exercise')} className="bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow shrink-0">RUN</button>
                  </div>
                   <div className="text-xs text-slate-400 mb-2 italic">Notice how Age is gone and Result is calculated perfectly.</div>
                  <pre className="text-white font-mono text-xs leading-relaxed">
   Name  Marks <span className="text-amber-400">Result</span><br/>
0  John     85   <span className="text-emerald-400 font-bold">Pass</span><br/>
1  Emma     92   <span className="text-emerald-400 font-bold">Pass</span><br/>
2  Alex     78   <span className="text-rose-400 font-bold">Fail</span>
                  </pre>
              </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PdColumns;
