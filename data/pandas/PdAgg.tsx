import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  Database, Table, Activity, TrendingUp, 
  Layers, Sigma, CheckCircle2, Box
} from 'lucide-react';

const PdAgg: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'agg' | 'groupby' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'simple_df':
        outLines = [
          '  Product  Sales',
          '0  Laptop    800',
          '1   Phone    500',
          '2  Tablet    300'
        ];
        break;
      case 'sum_sales':
        outLines = ['1600'];
        break;
      case 'mean_sales':
        outLines = ['533.33'];
        break;
      case 'agg_single':
        outLines = [
          'sum       1600.00',
          'mean       533.33',
          'max        800.00',
          'Name: Sales, dtype: float64'
        ];
        break;
      case 'agg_multi':
        outLines = [
          '        Sales  Quantity',
          'sum   1600.00     22.00',
          'mean   533.33      7.33'
        ];
        break;
      case 'groupby':
        outLines = [
          '          Sales',
          'Category       ',
          'Laptop     1700',
          'Phone       900'
        ];
        break;
      case 'real_world':
        outLines = [
          '        Revenue      ',
          '            sum  mean',
          'Store                ',
          'A          4500  2250',
          'B          3300  1650'
        ];
        break;
      case 'describe':
        outLines = [
          '             Sales',
          'count     3.000000',
          'mean    533.333333',
          'std     251.661147',
          'min     300.000000',
          '25%     400.000000',
          '50%     500.000000',
          '75%     650.000000',
          'max     800.000000'
        ];
        break;
      case 'named_agg':
        outLines = [
          '          total_sales',
          'Category             ',
          'Laptop           1700',
          'Phone             900'
        ];
        break;
      case 'trick1':
        outLines = [
          'min     300.00',
          'max     800.00',
          'mean    533.33',
          'Name: Sales, dtype: float64'
        ];
        break;
      case 'trick2':
        outLines = [
          'Sales       1600.00',
          'Quantity       7.33',
          'dtype: float64'
        ];
        break;
      case 'trick3':
        outLines = ['500'];
        break;
      case 'exercise':
        outLines = [
          'sum     255.0',
          'mean     85.0',
          'max      92.0',
          'Name: Marks, dtype: float64'
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
        <div className="inline-flex items-center justify-center p-4 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-2xl mb-6 shadow-sm border border-fuchsia-200 dark:border-fuchsia-800/50">
          <Sigma className="w-10 h-10 text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Aggregation <code className="text-fuchsia-600 dark:text-fuchsia-400 text-3xl sm:text-4xl bg-fuchsia-50 dark:bg-fuchsia-900/20 px-3 py-1 rounded-xl">agg()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Compute summary statistics from huge datasets. Analyze millions of rows instantly by calculating sums, averages, minimums, and more.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-fuchsia-500" />
            Aggregation Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'basics' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-2" /> 1️⃣-4️⃣ Basics
            </button>
            <button
              onClick={() => setActiveTab('agg')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'agg' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Sigma className="w-4 h-4 mr-2" /> 5️⃣-7️⃣ agg()
            </button>
            <button
              onClick={() => setActiveTab('groupby')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'groupby' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Layers className="w-4 h-4 mr-2" /> 8️⃣-🔟 GroupBy
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center ${activeTab === 'tips' ? 'bg-fuchsia-600 text-white shadow-fuchsia-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-2" /> 🚀 Dev Tips
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
                    <MessageSquareText className="w-5 h-5 text-fuchsia-500 mr-2" />
                    1️⃣ What is Aggregation?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                    <p><b>Aggregation</b> means computing summary statistics from a dataset. It helps us analyze large datasets by calculating values rather than reading individual rows.</p>
                    <div className="flex font-mono text-xs items-center justify-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300">
                        <span className="bg-white dark:bg-slate-800 px-3 py-1.5 rounded shadow-sm border border-slate-200 dark:border-slate-600">Dataset</span>
                        <span className="mx-3 text-slate-400">→</span>
                        <span className="bg-fuchsia-100 dark:bg-fuchsia-900/40 text-fuchsia-700 dark:text-fuchsia-300 px-3 py-1.5 rounded shadow-sm border border-fuchsia-200 dark:border-fuchsia-800">Aggregation</span>
                        <span className="mx-3 text-slate-400">→</span>
                        <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded shadow-sm border border-emerald-200 dark:border-emerald-800">Summary Information</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <TrendingUp className="w-5 h-5 text-amber-500 mr-2" />
                    2️⃣ Why Aggregation is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300">
                      <p className="mb-4 text-sm">Real-world datasets often contain thousands or millions of rows. Instead of analyzing each row individually, aggregation extracts insights quickly.</p>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                              <h4 className="text-xs font-bold uppercase text-slate-500 mb-2">Raw Data</h4>
                              <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300">
Product    Sales<br/>
Laptop       800<br/>
Phone        500<br/>
Tablet       300
                              </pre>
                          </div>
                          <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 p-3 rounded-lg border border-fuchsia-100 dark:border-fuchsia-800/30">
                              <h4 className="text-xs font-bold uppercase text-fuchsia-600 dark:text-fuchsia-400 mb-2 flex items-center">Insights Extracted <CheckCircle2 className="w-3 h-3 ml-1"/></h4>
                              <ul className="text-[11px] font-mono space-y-1 text-fuchsia-800 dark:text-fuchsia-200">
                                  <li>Total Sales → <span className="font-bold">1600</span></li>
                                  <li>Avg Sales   → <span className="font-bold">533.33</span></li>
                                  <li>Max Sales   → <span className="font-bold">800</span></li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Table className="w-5 h-5 text-teal-500 mr-2" />
                    3️⃣ Basic Built-in Functions
                  </h3>
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden text-sm">
                      <div className="grid grid-cols-2 bg-slate-100 dark:bg-slate-800 font-bold p-3 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                          <div>Function</div>
                          <div>Description</div>
                      </div>
                      <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <code className="text-fuchsia-600 dark:text-fuchsia-400 font-bold bg-fuchsia-50 dark:bg-fuchsia-900/20 px-1 inline-block rounded w-max">sum()</code>
                          <div className="text-slate-600 dark:text-slate-400">Total value</div>
                      </div>
                      <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <code className="text-fuchsia-600 dark:text-fuchsia-400 font-bold bg-fuchsia-50 dark:bg-fuchsia-900/20 px-1 inline-block rounded w-max">mean()</code>
                          <div className="text-slate-600 dark:text-slate-400">Average</div>
                      </div>
                      <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <code className="text-fuchsia-600 dark:text-fuchsia-400 font-bold bg-fuchsia-50 dark:bg-fuchsia-900/20 px-1 inline-block rounded w-max">min()</code>
                          <div className="text-slate-600 dark:text-slate-400">Minimum value</div>
                      </div>
                      <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <code className="text-fuchsia-600 dark:text-fuchsia-400 font-bold bg-fuchsia-50 dark:bg-fuchsia-900/20 px-1 inline-block rounded w-max">max()</code>
                          <div className="text-slate-600 dark:text-slate-400">Maximum value</div>
                      </div>
                      <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <code className="text-fuchsia-600 dark:text-fuchsia-400 font-bold bg-fuchsia-50 dark:bg-fuchsia-900/20 px-1 inline-block rounded w-max">count()</code>
                          <div className="text-slate-600 dark:text-slate-400">Number of values</div>
                      </div>
                      <div className="grid grid-cols-2 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <code className="text-fuchsia-600 dark:text-fuchsia-400 font-bold bg-fuchsia-50 dark:bg-fuchsia-900/20 px-1 inline-block rounded w-max">std()</code>
                          <div className="text-slate-600 dark:text-slate-400">Standard deviation</div>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Activity className="w-5 h-5 text-indigo-500 mr-2" />
                    4️⃣ Simple Aggregation Example
                  </h3>
                  
                  <div className="space-y-3">
                      <button onClick={() => runDemo('simple_df')} className="w-full text-left group">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                          <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">Base Dataset Content</h4>
                          <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
data = {'{'}<br/>
{'    '}<span className="text-amber-500">"Product"</span>: [<span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Phone"</span>, <span className="text-amber-500">"Tablet"</span>],<br/>
{'    '}<span className="text-amber-500">"Sales"</span>: [<span className="text-emerald-500">800</span>, <span className="text-emerald-500">500</span>, <span className="text-emerald-500">300</span>]<br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/>
<span className="text-blue-500">print</span>(df)
                          </pre>
                        </div>
                      </button>

                      <div className="grid grid-cols-2 gap-3">
                          <button onClick={() => runDemo('sum_sales')} className="text-left group">
                            <div className="h-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                                <h4 className="font-bold text-xs text-emerald-600 dark:text-emerald-400 mb-2">Find Total Sales</h4>
                                <code className="block mt-2 font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto">
                                <span className="text-blue-500">print</span>(df[<span className="text-amber-500">"Sales"</span>].sum())
                                </code>
                            </div>
                          </button>
                          <button onClick={() => runDemo('mean_sales')} className="text-left group">
                            <div className="h-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                                <h4 className="font-bold text-xs text-emerald-600 dark:text-emerald-400 mb-2">Find Avg Sales</h4>
                                <code className="block mt-2 font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto">
                                <span className="text-blue-500">print</span>(df[<span className="text-amber-500">"Sales"</span>].mean())
                                </code>
                            </div>
                          </button>
                      </div>
                  </div>

                </div>
              )}

              {activeTab === 'agg' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">5️⃣-7️⃣ Using the agg() Function</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Pandas provides the <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-fuchsia-600 font-bold font-mono">agg()</code> function to apply one or multiple aggregation operations at once seamlessly.</p>

                  <button onClick={() => runDemo('agg_single')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-fuchsia-300 dark:hover:border-fuchsia-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN DUMP</div>
                      <h4 className="font-bold text-sm text-fuchsia-600 dark:text-fuchsia-400 mb-2">5️⃣ Multiple Calculations at Once</h4>
                      <p className="text-xs text-slate-500 mb-2">Pass a list of string functions into <code>agg()</code> to retrieve all stats together.</p>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
result = df[<span className="text-amber-500">"Sales"</span>].<span className="text-blue-500 font-bold">agg</span>([<span className="text-amber-500">"sum"</span>, <span className="text-amber-500">"mean"</span>, <span className="text-amber-500">"max"</span>])<br/>
<span className="text-blue-500">print</span>(result)
                      </pre>
                    </div>
                  </button>

                   <button onClick={() => runDemo('agg_multi')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-fuchsia-300 dark:hover:border-fuchsia-700 transition-colors relative shadow-sm">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CHECK</div>
                      <h4 className="font-bold text-sm text-fuchsia-600 dark:text-fuchsia-400 mb-2">6️⃣ Aggregating Multiple Columns</h4>
                      <p className="text-xs text-slate-500 mb-2">You can run the same aggregations across the entire frame at once.</p>
                      <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
data = {'{'}<br/>
{'  '}<span className="text-amber-500">"Sales"</span>: [<span className="text-emerald-500">800</span>, <span className="text-emerald-500">500</span>, <span className="text-emerald-500">300</span>],<br/>
{'  '}<span className="text-amber-500">"Quantity"</span>: [<span className="text-emerald-500">5</span>, <span className="text-emerald-500">10</span>, <span className="text-emerald-500">7</span>]<br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/><br/>
<span className="text-blue-500">print</span>(df.<span className="text-blue-500 font-bold">agg</span>([<span className="text-amber-500">"sum"</span>, <span className="text-amber-500">"mean"</span>]))
                      </pre>
                    </div>
                  </button>

                   <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800 p-5 rounded-xl mt-4">
                      <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-3 text-sm flex items-center">
                          <Sigma className="w-5 h-5 mr-2" />
                          7️⃣ Flow Diagram Concept
                      </h4>
                      <div className="flex flex-col items-center justify-center space-y-2 mb-2 font-mono text-xs font-bold">
                        <div className="bg-white dark:bg-slate-900 px-6 py-2 rounded-lg border border-indigo-200 shadow-sm text-slate-700 dark:text-slate-300">Raw Dataset</div>
                        <div className="text-indigo-400">↓</div>
                        <div className="bg-indigo-100 dark:bg-indigo-900/40 px-6 py-2 rounded-lg border border-indigo-300 text-indigo-800 dark:text-indigo-200 shadow-sm">Aggregation Functions .agg()</div>
                        <div className="text-indigo-400">↓</div>
                        <div className="bg-fuchsia-100 dark:bg-fuchsia-900/40 px-6 py-2 rounded-lg border border-fuchsia-300 text-fuchsia-800 dark:text-fuchsia-200 shadow-sm">Statistical Summary Table</div>
                     </div>
                  </div>

                </div>
              )}

              {activeTab === 'groupby' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">8️⃣-🔟 GroupBy & Workflow</h3>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 p-4 rounded-xl shadow-sm mb-4">
                      <p className="text-sm text-amber-800 dark:text-amber-200">Aggregation becomes immensely more powerful when dynamically combined with <code className="bg-amber-100 dark:bg-amber-900/50 px-1 font-bold rounded">groupby()</code>.</p>
                  </div>

                  <button onClick={() => runDemo('groupby')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SCRIPT</div>
                          <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-3">8️⃣ Aggregation with groupby()</h4>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-3 overflow-x-auto">
data = {'{'}<br/>
{'  '}<span className="text-amber-500">"Category"</span>: [<span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Phone"</span>, <span className="text-amber-500">"Laptop"</span>, <span className="text-amber-500">"Phone"</span>],<br/>
{'  '}<span className="text-amber-500">"Sales"</span>: [<span className="text-emerald-500">800</span>, <span className="text-emerald-500">500</span>, <span className="text-emerald-500">900</span>, <span className="text-emerald-500">400</span>]<br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/><br/>
<span className="text-slate-400 italic"># Groups by Category, then sums the Sales columns</span><br/>
result = df.groupby(<span className="text-amber-500">"Category"</span>).agg({'{'}<span className="text-amber-500">"Sales"</span>: <span className="text-amber-500">"sum"</span>{'}'})<br/>
<span className="text-blue-500">print</span>(result)
                          </pre>
                      </div>
                  </button>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors relative shadow-sm h-full">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SALES</div>
                          <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-3">9️⃣ Real-World: Store Sales Analysis</h4>
                          <pre className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-3 overflow-x-auto">
data = {'{'}<br/>
{'  '}<span className="text-amber-500">"Store"</span>: [<span className="text-amber-500">"A"</span>, <span className="text-amber-500">"B"</span>, <span className="text-amber-500">"A"</span>, <span className="text-amber-500">"B"</span>],<br/>
{'  '}<span className="text-amber-500">"Revenue"</span>: [<span className="text-emerald-500">2000</span>, <span className="text-emerald-500">1500</span>, <span className="text-emerald-500">2500</span>, <span className="text-emerald-500">1800</span>]<br/>
{'}'}<br/>
df = pd.DataFrame(data)<br/><br/>
<span className="text-slate-400 italic"># Calculate both SUM and MEAN for each store</span><br/>
<span className="text-blue-500">print</span>(df.groupby(<span className="text-amber-500">"Store"</span>).agg({'{'}<span className="text-amber-500">"Revenue"</span>: [<span className="text-amber-500">"sum"</span>, <span className="text-amber-500">"mean"</span>]{'}'}))
                          </pre>
                      </div>
                  </button>

                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 overflow-x-auto">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">🔟 Aggregation Workflow</h4>
                      <div className="flex items-center text-xs font-mono font-bold whitespace-nowrap">
                          <span className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 px-2 py-1 rounded">Load Dataset</span>
                          <span className="mx-2 text-slate-400">→</span>
                          <span className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 px-2 py-1 rounded">Select Columns</span>
                          <span className="mx-2 text-slate-400">→</span>
                          <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-2 py-1 rounded">Apply agg()</span>
                          <span className="mx-2 text-slate-400">→</span>
                          <span className="bg-fuchsia-100 dark:bg-fuchsia-900/40 text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-200 dark:border-fuchsia-800 px-2 py-1 rounded">Summary Stats</span>
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

                  <div className="space-y-3">
                      <button onClick={() => runDemo('describe')} className="w-full text-left group">
                          <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-amber-400 flex items-center justify-between shadow-sm">
                              <div>
                                  <span className="font-bold text-sm text-amber-600 dark:text-amber-400">1️⃣ Explore Quickly</span>
                                  <span className="text-xs text-slate-600 dark:text-slate-300 ml-2 block sm:inline mt-1 sm:mt-0">Before analysis, always run this standard report.</span>
                              </div>
                              <code className="font-mono text-xs bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded font-bold">df.describe()</code>
                          </div>
                      </button>
                      
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                          <span className="font-bold text-sm text-amber-600 dark:text-amber-400 block mb-2">2️⃣ Combine groupby() + agg()</span>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">Extremely common pattern in data analyst jobs.</p>
                          <code className="font-mono text-[11px] bg-slate-100 dark:bg-slate-900 p-2 rounded block whitespace-nowrap overflow-x-auto text-blue-600 dark:text-blue-400">
                              df.groupby(<span className="text-amber-500">"Category"</span>).agg([<span className="text-amber-500">"sum"</span>, <span className="text-amber-500">"mean"</span>])
                          </code>
                      </div>

                      <button onClick={() => runDemo('named_agg')} className="w-full text-left group">
                          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-amber-400 shadow-sm transition-colors">
                              <span className="font-bold text-sm text-amber-600 dark:text-amber-400 block mb-2">3️⃣ Name Your Aggregations</span>
                              <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">Assigns clean header titles directly in output.</p>
                              <code className="font-mono text-[11px] bg-slate-100 dark:bg-slate-900 p-2 rounded block whitespace-nowrap overflow-x-auto text-blue-600 dark:text-blue-400">
                                  df.groupby(<span className="text-amber-500">"Category"</span>).agg(total_sales=(<span className="text-amber-500">"Sales"</span>, <span className="text-amber-500">"sum"</span>))
                              </code>
                          </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <TrendingUp className="w-5 h-5 text-fuchsia-500 mr-2" />
                    🚀 Pandas Tips & Tricks
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button onClick={() => runDemo('trick1')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-fuchsia-400 shadow-sm h-full flex flex-col justify-between">
                              <span className="font-bold text-[11px] text-fuchsia-600 dark:text-fuchsia-400 mb-1">Trick 1 — Multiple Aggregations</span>
                              <code className="font-mono text-[10px] bg-white dark:bg-slate-950 p-2 rounded mt-2 block break-all">df["Sales"].agg(["min", "max", "mean"])</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick2')} className="w-full text-left group">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-fuchsia-400 shadow-sm h-full flex flex-col justify-between">
                              <span className="font-bold text-[11px] text-fuchsia-600 dark:text-fuchsia-400 mb-1">Trick 2 — Aggregation by Column</span>
                              <code className="font-mono text-[10px] bg-white dark:bg-slate-950 p-2 rounded mt-2 block break-all">df.agg({'{'}"Sales": "sum", "Quantity": "mean"{'}'})</code>
                          </div>
                      </button>
                       <button onClick={() => runDemo('trick3')} className="w-full text-left group sm:col-span-2">
                          <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-fuchsia-400 shadow-sm flex flex-col justify-between">
                              <span className="font-bold text-[11px] text-fuchsia-600 dark:text-fuchsia-400 mb-1">Trick 3 — Custom Aggregation Function (Lambda)</span>
                              <code className="font-mono text-[10px] bg-white dark:bg-slate-950 p-2 rounded mt-2 block w-full text-center">df["Sales"].agg(lambda x: x.max() - x.min())</code>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-fuchsia-400" />
                     Runtime Output
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="font-mono text-xs flex flex-col flex-1 overflow-y-auto max-h-[440px]">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Sigma className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center">Run a code snippet to view output here...</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        const isNum = !isNaN(Number(line)) && line.trim() !== '';
                        return (
                           <div key={i} className={`mb-1.5 animate-fade-in whitespace-pre font-medium ${
                              line.includes('Name:') || line.includes('dtype:') || line.includes('Category') || line.includes('Store') ? 'text-fuchsia-300' :
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
         <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-3xl shadow-xl relative h-full flex flex-col">
           <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none"></div>
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center z-10">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            🧩 Practice Exercise
          </h2>
          <div className="z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                  <p className="text-slate-300 mb-4 text-sm font-medium">Use the provided dataset:</p>
                  <pre className="bg-black/40 text-blue-300 p-3 rounded-lg text-xs font-mono mb-4 border border-white/10 w-fit">
Student   Marks
John      85
Emma      92
Alex      78
                  </pre>
                  
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10 mb-4">
                      <p className="text-white text-xs font-bold mb-2">Tasks:</p>
                      <ul className="text-slate-300 text-xs space-y-1">
                          <li>1️⃣ Find total marks</li>
                          <li>2️⃣ Find average marks</li>
                          <li>3️⃣ Find maximum marks</li>
                      </ul>
                  </div>

                  <div className="text-[10px] text-yellow-400 font-bold bg-yellow-400/10 inline-flex items-center px-3 py-1.5 rounded-lg border border-yellow-400/20">
                    <span className="mr-2">Hint:</span> <code className="bg-black/30 px-1.5 py-0.5 rounded text-white">df["Marks"].agg(["sum", "mean", "max"])</code>
                  </div>
              </div>
              <div className="bg-black/50 p-5 rounded-2xl border border-white/5 shadow-inner">
                  <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                     <p className="text-fuchsia-300 text-xs font-bold uppercase tracking-wider">Expected Console Output</p>
                     <button onClick={() => runDemo('exercise')} className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-[10px] font-bold px-3 py-1 rounded transition-colors shadow">RUN SIMULATION</button>
                  </div>
                  <pre className="text-emerald-400 font-mono text-xs font-bold leading-relaxed">
Total   → 255<br/>
Average → 85<br/>
Maximum → 92
                  </pre>
              </div>
          </div>
         </div>
      </section>

    </div>
  );
};

export default PdAgg;
