import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  Settings, Zap, Rows, Columns,
  CheckCircle2, AlertTriangle, Fingerprint
} from 'lucide-react';

const PdAstype: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'convert' | 'types' | 'workflow' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'original':
        outLines = [
          '  Age',
          '0  25',
          '1  30',
          '2  28'
        ];
        break;
      case 'convert_int':
        outLines = [
          'Age    int64',
          'dtype: object'
        ];
        break;
      case 'multiple':
        outLines = [
          'Age         int64',
          'Salary    float64',
          'dtype: object'
        ];
        break;
      case 'string':
        outLines = [
          'Score    object',
          'dtype: object'
        ];
        break;
      case 'bool':
        outLines = [
          '   Passed',
          '0    True',
          '1   False',
          '2    True'
        ];
        break;
      case 'entire':
        outLines = [
          'Age        float64',
          'Salary     float64',
          'dtype: object'
        ];
        break;
      case 'real_world':
        outLines = [
          '  Product  Price',
          '0  Laptop    800',
          '1   Phone    500',
          '2  Tablet    300',
          '',
          'Mean Price: 533.33'
        ];
        break;
      case 'trick1':
        outLines = [
          'Name: City, dtype: category',
          'Categories (3, object): [London, Paris, Berlin]'
        ];
        break;
      case 'trick2':
        outLines = [
          '0    500',
          '1    300',
          '2    200',
          'Name: Price, dtype: int64'
        ];
        break;
      case 'trick3':
        outLines = [
          'Name: Country, dtype: category',
          'Memory usage decreased by 85%'
        ];
        break;
      case 'exercise':
        outLines = [
          '   Name  Age',
          '0  John   25',
          '1  Emma   30',
          '2  Alex   28',
          '',
          'dtypes:',
          'Name    object',
          'Age      int64'
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
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
          <Fingerprint className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Data Types <code className="text-emerald-600 dark:text-emerald-400 text-3xl sm:text-4xl bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-xl">astype()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Clean messy data by safely converting incorrect column structures into integers, floats, booleans, and more.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-emerald-500" />
            Conversion Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'basics' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-2" /> 1️⃣-3️⃣ Basics
            </button>
            <button
              onClick={() => setActiveTab('convert')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'convert' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Rows className="w-4 h-4 mr-2" /> 4️⃣-6️⃣ Columns
            </button>
            <button
              onClick={() => setActiveTab('types')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'types' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Columns className="w-4 h-4 mr-2" /> 7️⃣-9️⃣ Types
            </button>
             <button
              onClick={() => setActiveTab('workflow')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'workflow' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Zap className="w-4 h-4 mr-2" /> 🔟 Workflow
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'tips' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
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
                    <Fingerprint className="w-5 h-5 text-emerald-500 mr-2" />
                    1️⃣ What is astype() in Pandas?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p>The <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded font-bold text-emerald-600">astype()</code> method in Pandas is used to <b>change the data type</b> of a continuous column series, or the entire DataFrame frame.</p>
                    <p className="text-sm">In data analysis, datasets often contain incorrect or mixed data types resulting from sloppy CSVs, and <code className="text-slate-500">astype()</code> helps enforce strict schema typing instantly.</p>
                    
                    <div className="flex font-mono text-xs items-center justify-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 shadow-inner mt-4">
                        <span className="bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 px-3 py-1.5 rounded shadow-sm border border-rose-200 dark:border-rose-800">"100" (String)</span>
                        <span className="mx-3 text-slate-400">→</span>
                        <span className="bg-slate-200 dark:bg-slate-800 px-3 py-1.5 rounded shadow-sm border border-slate-300 dark:border-slate-700">astype(int)</span>
                        <span className="mx-3 text-slate-400">→</span>
                        <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded shadow-sm border border-emerald-200 dark:border-emerald-800">100 (Integer)</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                    2️⃣ Why Data Type Conversion is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300">
                      <p className="mb-4 text-sm">Real-world dirty datasets contain formatting errors causing massive mathematical breaks later.</p>
                      
                      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden text-sm mb-4">
                        <div className="grid grid-cols-2 bg-slate-100 dark:bg-slate-800 font-bold p-3 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                            <div>Problem Detected</div>
                            <div>Common Example</div>
                        </div>
                        <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800">
                            <div className="text-slate-600 dark:text-slate-400 flex items-center"><CheckCircle2 className="w-4 h-4 text-rose-500 mr-2" />Numbers stored as text</div>
                            <code className="text-rose-600 dark:text-rose-400 text-xs">"100" (instead of 100)</code>
                        </div>
                        <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800">
                            <div className="text-slate-600 dark:text-slate-400 flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-500 mr-2" />Boolean stored as string</div>
                             <code className="text-amber-600 dark:text-amber-400 text-xs">"True" (Text length 4)</code>
                        </div>
                        <div className="grid grid-cols-2 p-3 pb-4">
                            <div className="text-slate-600 dark:text-slate-400 flex items-center"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />Dates stored as text</div>
                             <code className="text-blue-600 dark:text-blue-400 text-xs">"2024-01-10" (No date logic)</code>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Strict Data Types Are Mandatory For:</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                          <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Calculations</span>
                          <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Machine Learning</span>
                          <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Statistical Analysis</span>
                          <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Data Visualization</span>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                      <code className="bg-white dark:bg-slate-950 px-3 py-2 rounded text-emerald-600 dark:text-emerald-400 font-bold block w-fit shadow-sm border border-slate-100 dark:border-slate-800">
                          DataFrame.astype(data_type)
                      </code>
                      <p className="text-slate-500 text-xs mt-3 uppercase font-bold tracking-wider">Implementation Example:</p>
                      <code className="text-xs text-slate-600 dark:text-slate-300">df[<span className="text-amber-500">"column_name"</span>].<span className="text-blue-500 font-bold">astype</span>(int)</code>
                  </div>

                </div>
              )}

              {activeTab === 'convert' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Rows className="w-5 h-5 text-indigo-500 mr-2" />
                    4️⃣-6️⃣ Converting Columns
                  </h3>

                  <div className="space-y-4">
                      <button onClick={() => runDemo('original')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                          <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">4️⃣ Example Bad Dataset</h4>
                          <p className="text-xs text-slate-500 mb-2">Note the quotations inside the array list. The Age column is strictly stored as <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">Text</code>.</p>
                          <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
data = {'{'}<br/>
{'    '}<span className="text-amber-500">"Age"</span>: [<span className="text-amber-500">"25"</span>, <span className="text-amber-500">"30"</span>, <span className="text-amber-500">"28"</span>]<br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/>
<span className="text-blue-500">print</span>(df)
                          </pre>
                        </div>
                      </button>

                      <button onClick={() => runDemo('convert_int')} className="w-full text-left group">
                        <div className="h-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CONVERT</div>
                            <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">5️⃣ Convert Column Data Type</h4>
                            <p className="text-xs text-slate-500 mb-2">Strip the string allocation and cast directly to a native integer array using <code className="text-xs font-bold">(int)</code>.</p>
                            <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
<span className="text-slate-400 italic"># Overwrite the original column with its cast variant</span><br/>
df[<span className="text-amber-500">"Age"</span>] = df[<span className="text-amber-500">"Age"</span>].<span className="text-blue-500 font-bold">astype</span>(<span className="text-blue-500 font-bold">int</span>)<br/><br/>
<span className="text-blue-500">print</span>(df.<span className="text-blue-500 font-bold">dtypes</span>)
                            </pre>
                        </div>
                      </button>

                      <button onClick={() => runDemo('multiple')} className="w-full text-left group">
                        <div className="h-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DICT</div>
                            <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">6️⃣ Convert Multiple Columns At Once</h4>
                            <p className="text-xs text-slate-500 mb-2">Pass an entire structured dictionary mapping directly into astype() to clean huge sets faster.</p>
                            <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
df = df.<span className="text-blue-500 font-bold">astype</span>({'{'}<br/>
{'    '}<span className="text-amber-500">"Age"</span>: <span className="text-amber-500">"int"</span>,<br/>
{'    '}<span className="text-amber-500">"Salary"</span>: <span className="text-amber-500">"float"</span><br/>
{'}'})<br/><br/>
<span className="text-blue-500">print</span>(df.<span className="text-blue-500 font-bold">dtypes</span>)
                            </pre>
                        </div>
                      </button>
                  </div>

                </div>
              )}

              {activeTab === 'types' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">7️⃣-9️⃣ Casting Data Types</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button onClick={() => runDemo('string')} className="text-left group w-full">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-400 dark:hover:border-rose-700 transition-colors relative shadow-sm h-full">
                              <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-2">7️⃣ Convert to String</h4>
                              <p className="text-[10px] text-slate-500 mb-2">Forces numeric tables back to text (usually lists them as 'object' in Pandas info logs).</p>
                              <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
df[<span className="text-amber-500">"Score"</span>] = df[<span className="text-amber-500">"Score"</span>].<span className="text-blue-500 font-bold">astype</span>(<span className="text-blue-500 font-bold">str</span>)<br/><br/>
<span className="text-blue-500">print</span>(df.dtypes)
                              </pre>
                          </div>
                      </button>

                      <button onClick={() => runDemo('bool')} className="text-left group w-full">
                          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-700 transition-colors relative shadow-sm h-full">
                              <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-2">8️⃣ Convert to Boolean</h4>
                              <p className="text-[10px] text-slate-500 mb-2">Map internal binary logic (like 1 vs 0 mapping logic) instantly to strict True/False states.</p>
                              <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
df[<span className="text-amber-500">"Passed"</span>] = df[<span className="text-amber-500">"Passed"</span>].<span className="text-blue-500 font-bold">astype</span>(<span className="text-blue-500 font-bold">bool</span>)<br/><br/>
<span className="text-blue-500">print</span>(df)
                              </pre>
                          </div>
                      </button>
                  </div>

                  <button onClick={() => runDemo('entire')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-400 dark:hover:border-sky-700 transition-colors relative shadow-sm h-full mt-4">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN FLOAT</div>
                          <h4 className="font-bold text-sm text-sky-600 dark:text-sky-400 mb-3">9️⃣ Convert Entire DataFrame</h4>
                          <p className="text-xs text-slate-500 mb-3">Applying logic to the root DataFrame object parses <b>every single column</b> simultaneously over to the requested schema target (e.g., float).</p>
                          <code className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 block">
                              df = df.<span className="text-blue-500 font-bold">astype</span>(<span className="text-blue-500 font-bold">float</span>)
                          </code>
                      </div>
                  </button>

                </div>
              )}

               {activeTab === 'workflow' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 overflow-x-auto mb-8">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          📊 Data Type Conversion Workflow
                      </h4>
                      <div className="flex items-center text-xs font-mono font-bold whitespace-nowrap justify-center">
                          <span className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 px-3 py-2 rounded">Dataset Load</span>
                          <span className="mx-2 text-slate-400">→</span>
                          <span className="bg-rose-50 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 px-3 py-2 rounded">Check (df.dtypes)</span>
                          <span className="mx-2 text-slate-400">→</span>
                          <span className="bg-sky-50 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 px-3 py-2 rounded">Fix with astype()</span>
                          <span className="mx-2 text-slate-400">→</span>
                          <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 px-3 py-2 rounded">Perform Analysis</span>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">🔟 Real-World Example</h3>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SALES</div>
                          <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-3">Example: E-Commerce Store Sales Dataset</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Prices exported from a frontend are formatted as strings. You cannot calculate the <code>.mean()</code> of strings without casting first.</p>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-3 overflow-x-auto">
data = {'{'}<br/>
{'  '}<span className="text-amber-500">"Product"</span>: [<span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Phone"</span>, <span className="text-amber-500">"Tablet"</span>],<br/>
{'  '}<span className="text-amber-500">"Price"</span>: [<span className="text-amber-500">"800"</span>, <span className="text-amber-500">"500"</span>, <span className="text-amber-500">"300"</span>] <span className="text-slate-400 italic"># STUCK AS STRINGS!</span><br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/><br/>
<span className="text-slate-400 italic"># Convert before executing any mean statistics</span><br/>
df[<span className="text-amber-500">"Price"</span>] = df[<span className="text-amber-500">"Price"</span>].<span className="text-blue-500 font-bold">astype</span>(<span className="text-blue-500 font-bold">int</span>)<br/><br/>
<span className="text-blue-500">print</span>(<span className="text-amber-500">"Mean Price:"</span>, df[<span className="text-amber-500">"Price"</span>].mean())
                          </pre>
                      </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    💡 Recommendations (15+ Years)
                  </h3>

                  <div className="space-y-4">
                      
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded mr-3">
                              <span className="font-bold text-sm text-indigo-600 dark:text-indigo-400">1️⃣</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Always Check Data Types First</span>
                            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">Identify incorrect footprints across a 50+ column file blindly using <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded">df.dtypes</code> immediately on load.</p>
                          </div>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start">
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded mr-3">
                              <span className="font-bold text-sm text-emerald-600 dark:text-emerald-400">2️⃣</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Common Pipeline Blueprint</span>
                            <div className="flex flex-wrap gap-2 text-[10px] font-mono mt-2">
                                <span className="bg-slate-100 dark:bg-slate-900 px-2 py-1 border border-slate-200 dark:border-slate-700">1. Load</span>
                                <span className="bg-slate-100 dark:bg-slate-900 px-2 py-1 border border-slate-200 dark:border-slate-700">2. Check Missing</span>
                                <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 font-bold border border-emerald-200 dark:border-emerald-800 rounded">3. Fix Data Types</span>
                                <span className="bg-slate-100 dark:bg-slate-900 px-2 py-1 border border-slate-200 dark:border-slate-700">4. Analyze</span>
                            </div>
                          </div>
                      </div>

                      <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-lg border border-rose-200 dark:border-rose-800/50 shadow-sm">
                          <span className="font-bold text-sm text-rose-700 dark:text-rose-400 block mb-2 flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/> 3️⃣ Handle Conversion Errors Carefully</span>
                          <p className="text-xs text-rose-800/80 dark:text-rose-300 mb-2">If your string dataset has a stray value like "unknown" inside, <code className="bg-white/50 dark:bg-black/20 px-1">astype(int)</code> will crash violently. Use a safer coercion bridge instead:</p>
                          <code className="font-mono text-[11px] bg-white dark:bg-slate-950 p-2 rounded block border border-rose-100 dark:border-rose-900">
                              pd.to_numeric(df[<span className="text-amber-600">"Age"</span>], errors=<span className="text-emerald-600">"coerce"</span>)
                          </code>
                      </div>

                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Zap className="w-5 h-5 text-sky-500 mr-2" />
                    🚀 Pandas Tips & Tricks
                  </h3>

                  <div className="grid grid-cols-1 gap-3">
                      <button onClick={() => runDemo('trick1')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-sky-400 shadow-sm flex items-center justify-between">
                              <span className="font-bold text-xs text-sky-600 dark:text-sky-400">Trick 1 — Convert Column to Category (ML)</span>
                              <code className="font-mono text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded block">df["City"].astype("category")</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick2')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-sky-400 shadow-sm flex items-center justify-between">
                              <span className="font-bold text-xs text-sky-600 dark:text-sky-400">Trick 2 — Convert Float Decimals to Solid Integer</span>
                              <code className="font-mono text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded block">df["Price"].astype(int)</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick3')} className="w-full text-left group">
                           <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-sky-400 shadow-sm flex items-center justify-between">
                              <span className="font-bold text-xs text-sky-600 dark:text-sky-400">Trick 3 — Extreme Memory Optimization</span>
                              <code className="font-mono text-[11px] bg-white dark:bg-slate-950 px-2 py-1 rounded block hidden sm:block">df["Country"].astype("category")</code>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-emerald-400" />
                     Dtypes Console
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
                        <Terminal className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4">Run an astype() snippet schema to verify conversion log metrics here.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                              line.includes('int64') || line.includes('float64') || line.includes('bool') || line.includes('category') ? 'text-emerald-400' :
                              line.includes('object') ? 'text-amber-300' :
                              line.includes('Mean Price:') ? 'text-emerald-400 font-bold' :
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
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            🧩 Practice Exercise
          </h2>
          <div className="z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                  <p className="text-slate-300 mb-2 text-sm font-medium">Use the provided dirty dataset:</p>
                  <pre className="bg-black/60 text-emerald-300 p-3 rounded-lg text-xs font-mono mb-4 border border-white/5 w-fit">
Name    Age
John    "25"
Emma    "30"
Alex    "28"
                  </pre>
                  
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4">
                      <p className="text-white text-xs font-bold mb-2 uppercase tracking-wide">Tasks & Rules:</p>
                      <p className="text-emerald-200 text-xs mb-2">Convert the <code className="bg-black/40 px-1 rounded">Age</code> column away from its string format into an evaluation integer type.</p>
                  </div>

                  <div className="text-[10px] text-yellow-400 font-bold bg-yellow-400/10 inline-flex items-center px-4 py-2 rounded-lg border border-yellow-400/20">
                    <span className="mr-2">Hint:</span> <code className="bg-black/40 px-2 py-1 rounded text-white font-mono tracking-wide">df["Age"] = df["Age"].astype(int)</code>
                  </div>
              </div>
              <div className="bg-black/60 p-5 rounded-2xl border border-white/5 shadow-inner">
                  <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                     <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Evaluation View Window</p>
                     <button onClick={() => runDemo('exercise')} className="bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow">RUN SIMULATION</button>
                  </div>
                   <div className="text-xs text-slate-400 mb-2 italic">Notice how the strings " " are removed.</div>
                  <pre className="text-white font-mono text-xs leading-relaxed">
   Name  Age<br/>
0  John   <span className="text-emerald-400 font-bold">25</span><br/>
1  Emma   <span className="text-emerald-400 font-bold">30</span><br/>
2  Alex   <span className="text-emerald-400 font-bold">28</span>
                  </pre>
              </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PdAstype;
