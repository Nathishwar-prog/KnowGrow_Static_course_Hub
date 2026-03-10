import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  AlertTriangle, Settings, 
  Database, Table, BarChart, SlidersHorizontal, Calculator,
  Grid3X3, ArrowDownUp
} from 'lucide-react';

const PdPivotTable: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'aggregating' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          '  Product Region  Sales',
          '0  Laptop  North  50000',
          '1  Laptop  South  60000',
          '2   Phone  North  30000',
          '3   Phone  South  40000'
        ];
        break;
      case 'run_basic':
        outLines = [
          '> pd.pivot_table(df, values="Sales", index="Product")',
          '           Sales',
          'Product         ',
          'Laptop   55000.0',
          'Phone    35000.0',
          '',
          '> # Notice: Default aggregation is MEAN (average)'
        ];
        break;
      case 'run_columns':
        outLines = [
          '> pd.pivot_table(df, values="Sales", index="Product", columns="Region")',
          'Region     North    South',
          'Product                  ',
          'Laptop   50000.0  60000.0',
          'Phone    30000.0  40000.0'
        ];
        break;
      case 'run_agg':
        outLines = [
          '> pd.pivot_table(df, values="Sales", index="Product", aggfunc="sum")',
          '            Sales',
          'Product          ',
          'Laptop   110000.0',
          'Phone     70000.0',
          '',
          '> # Explicitly requested SUM instead of MEAN'
        ];
        break;
      case 'run_multi_agg':
        outLines = [
          '> pd.pivot_table(df, values="Sales", index="Product", aggfunc=["sum", "mean", "max"])',
          '              sum     mean    max',
          '            Sales    Sales  Sales',
          'Product                          ',
          'Laptop   110000.0  55000.0  60000',
          'Phone     70000.0  35000.0  40000'
        ];
        break;
      case 'run_margins':
        outLines = [
          '> pd.pivot_table(df, values="Sales", index="Product", columns="Region", aggfunc="sum", margins=True)',
          'Region     North     South       All',
          'Product                             ',
          'Laptop   50000.0   60000.0  110000.0',
          'Phone    30000.0   40000.0   70000.0',
          'All      80000.0  100000.0  180000.0',
          '',
          '> # Added "All" row and column totals!'
        ];
        break;
      case 'run_real_world':
        outLines = [
          '> pd.pivot_table(df, values="Revenue", index="Product", columns="Region", aggfunc="sum")',
          'Region      North     South',
          'Product                    ',
          'Laptop   120000.0  150000.0',
          'Phone     90000.0  110000.0',
          '',
          '> # Business: Laptop South is the highest performing segment.'
        ];
        break;
      case 'run_sorting':
        outLines = [
          '> pivot.sort_values("Sales", ascending=False)',
          '            Sales',
          'Product          ',
          'Laptop   110000.0',
          'Phone     70000.0',
          '',
          '> # Laptops ordered at the top!'
        ];
        break;
      case 'run_mistake':
        outLines = [
          '> df.pivot(index="Product", columns="Region", values="Sales")',
          'ValueError: Index contains duplicate entries, cannot reshape',
          '',
          '> # ❌ CRASH: pivot() cannot handle duplicate matches. Use pivot_table() with aggfunc!'
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
          <Table className="w-10 h-10 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas <code className="text-rose-600 dark:text-rose-400 text-3xl sm:text-4xl bg-rose-50 dark:bg-rose-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.pivot_table()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In data analysis, we often need to summarize large datasets. <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">pivot_table()</code> summarizes data by grouping and aggregating, working remarkably similar to Excel Pivot Tables.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-rose-500" />
            Pivot Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('aggregating')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'aggregating' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Calculator className="w-4 h-4 mr-1.5" /> 5️⃣-9️⃣ Aggregation
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Grid3X3 className="w-4 h-4 mr-1.5" /> 🔟-1️⃣2️⃣ Advanced
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣3️⃣-1️⃣4️⃣ Tips
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
                  
                  {/* Notice Box */}
                  <div className="bg-rose-50 dark:bg-rose-900/10 border-l-4 border-rose-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          <code>pivot_table()</code> groups data and calculates statistics like <code className="text-rose-600 dark:text-rose-400 font-bold">sum, mean, count</code> natively.
                        </p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                    <Database className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣ What is <code className="text-rose-500 font-mono ml-2">pivot_table()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4 text-sm">
                      <p><strong>Definition:</strong> <code>pivot_table()</code> is a Pandas function used to create a spreadsheet-style pivot table that summarizes data using aggregation functions.</p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6 text-sm">
                    <SlidersHorizontal className="w-5 h-5 text-emerald-500 mr-2" />
                    2️⃣ Why pivot_table() is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
                         <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 p-2 rounded text-xs font-bold text-center border border-emerald-100 dark:border-emerald-800/50">Business Analytics</div>
                         <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-2 rounded text-xs font-bold text-center border border-blue-100 dark:border-blue-800/50">Sales Analysis</div>
                         <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 p-2 rounded text-xs font-bold text-center border border-indigo-100 dark:border-indigo-800/50">Financial Reports</div>
                         <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-800 dark:text-fuchsia-300 p-2 rounded text-xs font-bold text-center border border-fuchsia-100 dark:border-fuchsia-800/50">Data Science</div>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                   <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center font-mono text-[11px] sm:text-[13px] font-bold text-slate-700 dark:text-slate-300 shadow-sm overflow-x-auto whitespace-nowrap">
                      pd.pivot_table(<span className="text-rose-500 font-normal">data</span>, <span className="text-blue-500 font-normal">values=None</span>, <span className="text-emerald-500">index=None</span>, <span className="text-amber-500">columns=None</span>, <span className="text-fuchsia-500">aggfunc='mean'</span>)
                  </div>

                  <table className="w-full text-left text-[11px] sm:text-xs mb-4 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm mt-4">
                             <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                               <tr><th className="p-2 border-b border-slate-200 dark:border-slate-700">Parameter</th><th className="p-2 border-b border-slate-200 dark:border-slate-700">Description</th></tr>
                             </thead>
                             <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-2 font-bold font-mono text-rose-500">data</td><td className="p-2">DataFrame</td></tr>
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-2 font-bold font-mono text-blue-500">values</td><td className="p-2">Column to aggregate</td></tr>
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-2 font-bold font-mono text-emerald-500">index</td><td className="p-2">Row categories</td></tr>
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-2 font-bold font-mono text-amber-500">columns</td><td className="p-2">Column categories</td></tr>
                               <tr><td className="p-2 font-bold font-mono text-fuchsia-500">aggfunc</td><td className="p-2">Aggregation function</td></tr>
                             </tbody>
                   </table>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Database className="w-5 h-5 text-indigo-500 mr-2" />
                        4️⃣ Creating Example Dataset
                  </h3>
                  
                  <button onClick={() => runDemo('show_base')} className="text-left group w-full">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">BUILD DATASET</div>
                         <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
{`import pandas as pd

data = {
    "Product": ["Laptop","Laptop","Phone","Phone"],
    "Region": ["North","South","North","South"],
    "Sales": [50000, 60000, 30000, 40000]
}

df = pd.DataFrame(data)`}
                        </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'aggregating' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Table className="w-5 h-5 text-rose-500 mr-2" />
                        5️⃣ Basic Pivot Table
                  </h3>
                  <button onClick={() => runDemo('run_basic')} className="text-left group w-full mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MEAN PIVOT</div>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded block w-fit mb-2">
                            {"pd.pivot_table(df, values='Sales', index='Product')"}
                        </code>
                        <p className="text-[10px] text-slate-500">Explanation: Default aggregation computes the <b>mean</b> (average) per product.</p>
                    </div>
                  </button>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Grid3X3 className="w-5 h-5 text-blue-500 mr-2" />
                        6️⃣ Pivot Table with Columns
                  </h3>
                  <button onClick={() => runDemo('run_columns')} className="text-left group w-full mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN COLUMNS</div>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded block w-fit mb-2">
                            {"pd.pivot_table(df, values='Sales', index='Product', columns='Region')"}
                        </code>
                        <p className="text-[10px] text-slate-500">Splits the Sales averages into North/South categories on the X-axis.</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Calculator className="w-5 h-5 text-emerald-500 mr-2" />
                        7️⃣ Using Different Aggregation Functions
                  </h3>
                   <button onClick={() => runDemo('run_agg')} className="text-left group w-full mb-2">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SUM</div>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 border-b border-slate-100 dark:border-slate-800 pb-2">Sum of Sales</p>
                        <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded block w-full whitespace-nowrap overflow-x-auto mb-2">
                            {"pd.pivot_table(df, values='Sales', index='Product', aggfunc='sum')"}
                        </code>
                        <p className="text-[10px] text-slate-500">Changes the calculator to addition instead of average.</p>
                    </div>
                  </button>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                        <SlidersHorizontal className="w-5 h-5 text-amber-500 mr-2" />
                        8️⃣ Multiple Aggregations
                  </h3>
                   <button onClick={() => runDemo('run_multi_agg')} className="text-left group w-full mb-2">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MULTI-AGG</div>
                        <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded block w-full whitespace-nowrap overflow-x-auto mb-2">
                            {"pd.pivot_table(df, values='Sales', index='Product', aggfunc=['sum','mean','max'])"}
                        </code>
                    </div>
                  </button>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                        <BarChart className="w-5 h-5 text-fuchsia-500 mr-2" />
                        9️⃣ Adding Totals (Margins)
                  </h3>
                   <button onClick={() => runDemo('run_margins')} className="text-left group w-full mb-2">
                    <div className="bg-fuchsia-50/50 dark:bg-fuchsia-900/10 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-4 hover:border-fuchsia-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MARGINS</div>
                        <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 shadow-inner px-3 py-1.5 rounded block w-full whitespace-nowrap overflow-x-auto mb-2 border border-fuchsia-100 dark:border-fuchsia-900">
                            {"pd.pivot_table(df, ... aggfunc='sum', margins=True)"}
                        </code>
                        <p className="text-[10px] text-slate-500">Adds an 'All' row mathematically summarizing the whole table automatically.</p>
                    </div>
                  </button>

                </div>
              )}

               {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <BarChart className="w-5 h-5 text-rose-500 mr-2" />
                        🔟 Visualization Example
                  </h3>
                   <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-sm">
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Pivot tables are often directly visualized for easier analysis.</p>
                        <code className="text-[10px] sm:text-[11px] bg-white dark:bg-slate-950 font-bold p-3 rounded block w-full shadow-inner border border-slate-200 dark:border-slate-800 mb-4 whitespace-pre-wrap">
{`import matplotlib.pyplot as plt

pivot = pd.pivot_table(df, values="Sales", index="Product", aggfunc="sum")

pivot.plot(kind="bar")
plt.title("Total Sales by Product")
plt.show()`}
                        </code>
                         <pre className="text-[10px] sm:text-[11px] font-mono text-center justify-center flex flex-col items-center text-rose-500 font-bold bg-white dark:bg-slate-900 p-3 shadow-inner rounded border border-rose-100 dark:border-rose-900/30 leading-[1.2]">
{`Sales
│
│ █
│ █     █
│ █     █
└────────────
Laptop Phone`}
                         </pre>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Database className="w-5 h-5 text-emerald-500 mr-2" />
                        1️⃣1️⃣ Real-World Example
                  </h3>

                  <button onClick={() => runDemo('run_real_world')} className="text-left group w-full">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 border-y border-r border-emerald-200 dark:border-slate-700 rounded-r-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN REVENUE DATA</div>
                          <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300 mb-2">Imagine a Revenue sales dataset:</h4>
                          
                          <table className="w-full text-left text-[11px] mb-4 border border-emerald-100 dark:border-emerald-900/50 bg-white dark:bg-slate-900">
                             <thead className="bg-emerald-100 dark:bg-emerald-900/30">
                               <tr><th className="p-2 border-b border-emerald-200 dark:border-emerald-900">Product</th><th className="p-2 border-b border-emerald-200 dark:border-emerald-900">Region</th><th className="p-2 border-b border-emerald-200 dark:border-emerald-900">Revenue</th></tr>
                             </thead>
                             <tbody>
                               <tr className="border-b border-emerald-50 dark:border-slate-800"><td className="p-2">Laptop</td><td className="p-2">North</td><td className="p-2 font-mono">120000</td></tr>
                               <tr className="border-b border-emerald-50 dark:border-slate-800"><td className="p-2">Laptop</td><td className="p-2">South</td><td className="p-2 font-mono">150000</td></tr>
                               <tr className="border-b border-emerald-50 dark:border-slate-800"><td className="p-2">Phone</td><td className="p-2">North</td><td className="p-2 font-mono">90000</td></tr>
                               <tr><td className="p-2">Phone</td><td className="p-2">South</td><td className="p-2 font-mono">110000</td></tr>
                             </tbody>
                          </table>

                          <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit">
                            {"pd.pivot_table(df, values='Revenue', index='Product', columns='Region', aggfunc='sum')"}
                          </code>
                        </div>
                  </button>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣2️⃣ pivot() vs pivot_table()
                  </h3>
                  
                  <table className="w-full text-left text-xs mb-4 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm">
                             <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                               <tr><th className="p-3 border-b border-slate-200 dark:border-slate-700">Feature</th><th className="p-3 border-b border-slate-200 dark:border-slate-700 font-mono text-rose-600 dark:text-rose-400">pivot()</th><th className="p-3 border-b border-slate-200 dark:border-slate-700 font-mono text-emerald-600 dark:text-emerald-400">pivot_table()</th></tr>
                             </thead>
                             <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-bold">Aggregation</td><td className="p-3 font-bold text-rose-500 text-lg leading-none">❌</td><td className="p-3 font-bold text-emerald-500 text-lg leading-none">✅</td></tr>
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-bold">Handles duplicates</td><td className="p-3 font-bold text-rose-500 text-lg leading-none">❌</td><td className="p-3 font-bold text-emerald-500 text-lg leading-none">✅</td></tr>
                               <tr><td className="p-3 font-bold">Simpler structure</td><td className="p-3 font-bold text-emerald-500 text-lg leading-none">✅</td><td className="p-3 font-bold text-rose-500 text-lg leading-none">❌</td></tr>
                             </tbody>
                   </table>
                   <p className="text-xs text-slate-500 italic block border-l-2 border-slate-300 dark:border-slate-700 pl-3"><strong>Recommendation:</strong> Use <code>pivot_table()</code> for most real-world datasets since it handles duplicated rows gracefully via aggregations.</p>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣3️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-5 rounded-xl shadow-sm relative">
                      <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200">❌ Using pivot() with Duplicates</div>
                       <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 block">Pivot tables require aggregation if duplicates exist. If you use standard `pivot()`, it crashes.</p>

                       <button onClick={() => runDemo('run_mistake')} className="mb-6 w-full bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900 p-2 rounded border border-rose-200 dark:border-rose-800 transition-colors group text-left">
                                <p className="text-[11px] text-rose-600 dark:text-rose-400 font-mono font-bold block mb-1">
                                  {"df.pivot(index='Product', columns='Region', values='Sales')"}
                                </p>
                                <p className="text-left text-[10px] font-bold text-rose-500 uppercase">Wrong (Click to Crash)</p>
                       </button>

                       <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200 pt-4 border-t border-rose-200 dark:border-rose-800/50">❌ Confusing groupby() and pivot_table()</div>
                       <table className="w-full text-left text-[11px] mt-2 border border-rose-100 dark:border-rose-900/50 rounded overflow-hidden">
                             <thead className="bg-white dark:bg-slate-900">
                               <tr><th className="p-2 border-b border-rose-100 dark:border-rose-900/50">Function</th><th className="p-2 border-b border-rose-100 dark:border-rose-900/50">Purpose</th></tr>
                             </thead>
                             <tbody className="bg-white/50 dark:bg-slate-900/50">
                               <tr className="border-b border-rose-50 dark:border-slate-800"><td className="p-2 font-bold font-mono text-purple-600 dark:text-purple-400">groupby()</td><td className="p-2">Flexible underlying grouping</td></tr>
                               <tr><td className="p-2 font-bold font-mono text-rose-600 dark:text-rose-400">pivot_table()</td><td className="p-2">Highly structured 2D summary tables</td></tr>
                             </tbody>
                        </table>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣4️⃣ Tips & Tricks (Professional Advice)
                  </h3>

                  <div className="space-y-4">
                      
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                            <div className="w-full">
                                <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 1 — Use pivot tables for Dashboards</span>
                                <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800 w-full sm:w-auto overflow-x-auto">
                                    {"pd.pivot_table(df, values='Sales', index='Region', columns='Product')"}
                                </code>
                                <p className="text-[10px] text-slate-500 leading-relaxed mt-2 uppercase font-bold tracking-wide">Very useful default for business reports.</p>
                            </div>
                        </div>

                      <button onClick={() => runDemo('run_sorting')} className="text-left group w-full">
                         <div className="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-800/80 transition-colors p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative cursor-pointer">
                            <div className="absolute top-2 right-2 text-[9px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100">RUN SORT</div>
                            <div className="w-full">
                              <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 2 — Combine with sorting</span>
                              <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800 whitespace-pre-wrap">
                                  {"pivot.sort_values('Sales', ascending=False)"}
                              </code>
                              <p className="text-[11px] text-slate-500 leading-relaxed mt-2">Helps immediately identify top-performing rows.</p>
                            </div>
                        </div>
                      </button>

                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                          <div className="w-full">
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 3 — Use with Visualization workflow</span>
                            <p className="text-[10px] text-slate-500 leading-relaxed mb-2">Pivot tables often immediately become the input for charts.</p>
                            <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-3 py-2 rounded-lg border border-slate-100 dark:border-slate-800 w-fit">
                                <span className="text-rose-500">pivot_table</span>
                                <span className="text-slate-400">→</span>
                                <span className="text-blue-500">plot()</span>
                                <span className="text-slate-400">→</span>
                                <span className="text-emerald-500">Dashboard</span>
                            </div>
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
                     Pipeline Output Console
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[440px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Table className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-5 font-sans leading-relaxed">Click interactive buttons on the left to execute Pandas <code className="text-rose-500/50 block mt-1">.pivot_table()</code> aggregations!</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('Laptop') || line.includes('Phone') ? 'text-sky-300' :
                              line.includes('Product') || line.includes('Region') || line.includes('Sales') || line.includes('Revenue') || line.includes('sum') || line.includes('mean') || line.includes('max') ? 'text-rose-300 font-bold border-slate-800/50 block' :
                              line.includes('ValueError') || line.includes('CRASH') ? 'text-rose-400 font-bold' :
                              line.includes('All') || line.includes('North') || line.includes('South') ? 'text-amber-300 font-bold' :
                              line.match(/^\s*\d+(?:\.\d+)?\s+/) || line.match(/^[A-Za-z]+:\s+\d/) ? 'text-emerald-300' :
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

export default PdPivotTable;
