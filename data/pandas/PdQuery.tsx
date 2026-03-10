import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, 
  AlertTriangle, Settings, 
  Database, Filter, Binary, Search, Code,
  BarChart, CheckCircle2
} from 'lucide-react';

const PdQuery: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'filtering' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          '   Name  Age  Salary       City',
          '0  John   25   50000     Mumbai',
          '1  Sara   30   60000      Delhi',
          '2  Mike   28   55000  Bangalore',
          '3  Anna   35   70000    Chennai'
        ];
        break;
      case 'run_basic':
        outLines = [
          '> df.query("Age > 28")',
          '   Name  Age  Salary     City',
          '1  Sara   30   60000    Delhi',
          '3  Anna   35   70000  Chennai',
          '',
          '> # Selected rows where Age is strictly greater than 28'
        ];
        break;
      case 'run_multi':
        outLines = [
          '> df.query("Age > 25 and Salary > 55000")',
          '   Name  Age  Salary     City',
          '1  Sara   30   60000    Delhi',
          '3  Anna   35   70000  Chennai',
          '',
          '> # Requires BOTH conditions to be True (AND)'
        ];
        break;
      case 'run_or':
        outLines = [
          '> df.query("Age < 26 or Salary > 65000")',
          '   Name  Age  Salary     City',
          '0  John   25   50000   Mumbai',
          '3  Anna   35   70000  Chennai',
          '',
          '> # Requires AT LEAST ONE condition to be True (OR)'
        ];
        break;
      case 'run_var':
        outLines = [
          '> age_limit = 28',
          '> df.query("Age > @age_limit")',
          '   Name  Age  Salary     City',
          '1  Sara   30   60000    Delhi',
          '3  Anna   35   70000  Chennai',
          '',
          '> # Injected local Python variable using the @ symbol!'
        ];
        break;
      case 'run_string':
        outLines = [
          '> df.query("City == \'Delhi\'")',
          '   Name  Age  Salary   City',
          '1  Sara   30   60000  Delhi',
          '',
          '> # Filtered using string matching (Notice the inner single quotes)'
        ];
        break;
      case 'run_real_world':
        outLines = [
          '> df.query("Price > 30000")',
          '  Product  Price  Sales',
          '0  Laptop  80000     50',
          '',
          '> # Query extracted only the high-value products instantly.'
        ];
        break;
      case 'run_mistake_quote':
        outLines = [
          '> df.query(Age > 25)',
          "NameError: name 'Age' is not defined",
          '',
          '> # ❌ CRASH: The entire query expression MUST be wrapped in string quotes!'
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
        <div className="inline-flex items-center justify-center p-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl mb-6 shadow-sm border border-sky-200 dark:border-sky-800/50">
          <Search className="w-10 h-10 text-sky-600 dark:text-sky-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Filtering <code className="text-sky-600 dark:text-sky-400 text-3xl sm:text-4xl bg-sky-50 dark:bg-sky-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.query()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          In Pandas, the <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">query()</code> method is used to filter rows of a DataFrame using an expression string. It provides a clean and readable way to select data, similar to SQL WHERE clauses.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-sky-500" />
            Query Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('filtering')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'filtering' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Filter className="w-4 h-4 mr-1.5" /> 5️⃣-7️⃣ Conditions
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Code className="w-4 h-4 mr-1.5" /> 8️⃣-1️⃣1️⃣ Advanced
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣2️⃣-1️⃣4️⃣ Tips
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
                  <div className="bg-sky-50 dark:bg-sky-900/10 border-l-4 border-sky-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          <code>query()</code> allows you to filter rows using a <strong>string-based</strong> condition, which makes code significantly easier to read than traditional indexing.
                        </p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                    <Database className="w-5 h-5 text-sky-500 mr-2" />
                    1️⃣ What is <code className="text-sky-500 font-mono ml-2">query()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                      <p className="text-sm"><strong>Definition:</strong> <code>query()</code> is a Pandas DataFrame method that filters rows based on a Boolean expression written as a string.</p>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                    2️⃣ Why query() is Important
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">
                      <div className="grid grid-cols-2 gap-2 mt-2">
                         <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 p-2 rounded text-xs font-bold text-center border border-emerald-100 dark:border-emerald-800/50">Filter Rows Easily</div>
                         <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-2 rounded text-xs font-bold text-center border border-blue-100 dark:border-blue-800/50">Write Cleaner Code</div>
                         <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 p-2 rounded text-xs font-bold text-center border border-indigo-100 dark:border-indigo-800/50">Complex Conditions</div>
                         <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-800 dark:text-fuchsia-300 p-2 rounded text-xs font-bold text-center border border-fuchsia-100 dark:border-fuchsia-800/50">SQL-Like Reading</div>
                      </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                    <Settings className="w-5 h-5 text-slate-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                   <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center font-mono text-[13px] font-bold text-slate-700 dark:text-slate-300 shadow-sm overflow-x-auto whitespace-nowrap">
                      DataFrame.query(<span className="text-sky-500 font-normal">expr</span>, <span className="text-slate-500 font-normal">inplace=False</span>)
                  </div>

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
    "Name": ["John", "Sara", "Mike", "Anna"],
    "Age": [25, 30, 28, 35],
    "Salary": [50000, 60000, 55000, 70000],
    "City": ["Mumbai", "Delhi", "Bangalore", "Chennai"]
}

df = pd.DataFrame(data)`}
                        </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'filtering' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Filter className="w-5 h-5 text-sky-500 mr-2" />
                        5️⃣ Basic Query Example
                  </h3>
                  <button onClick={() => runDemo('run_basic')} className="text-left group w-full mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-sky-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASIC</div>
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-2 border-b border-slate-100 dark:border-slate-800 pb-1 w-fit">{"Filter employees > 28 years old"}</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded block w-fit mb-2 border border-slate-200 dark:border-slate-700">
                            {'df.query("Age > 28")'}
                        </code>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Binary className="w-5 h-5 text-emerald-500 mr-2" />
                        6️⃣ Multiple Conditions (AND)
                  </h3>
                  <button onClick={() => runDemo('run_multi')} className="text-left group w-full mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN AND</div>
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-2 border-b border-slate-100 dark:border-slate-800 pb-1 w-fit">Age &gt; 25 AND Salary &gt; 55000</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded block w-full sm:w-fit whitespace-nowrap overflow-x-auto mb-2 border border-slate-200 dark:border-slate-700">
                            {'df.query("Age > 25 and Salary > 55000")'}
                        </code>
                        <p className="text-[10px] text-slate-500">Notice you can type literal <code>and</code> instead of using confusing <code>&</code> symbols.</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Terminal className="w-5 h-5 text-amber-500 mr-2" />
                        7️⃣ Using OR Condition
                  </h3>
                   <button onClick={() => runDemo('run_or')} className="text-left group w-full mb-2">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN OR</div>
                         <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded block w-full sm:w-fit whitespace-nowrap overflow-x-auto border border-slate-200 dark:border-slate-700">
                            {'df.query("Age < 26 or Salary > 65000")'}
                        </code>
                    </div>
                  </button>

                </div>
              )}

               {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Code className="w-5 h-5 text-indigo-500 mr-2" />
                        8️⃣ Using Variables in Query
                  </h3>
                   <button onClick={() => runDemo('run_var')} className="text-left group w-full mb-6">
                    <div className="bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN @ VAR</div>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">You can pass external Python variables directly into the SQL-style query string using <code className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-100 dark:bg-indigo-900/50 px-1 rounded">@</code>.</p>
                        <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded block w-fit mb-2 shadow-sm border border-indigo-100 dark:border-indigo-900">
{`age_limit = 28
df.query("Age > @age_limit")`}
                        </code>
                    </div>
                  </button>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                        <MessageSquareText className="w-5 h-5 text-amber-500 mr-2" />
                        9️⃣ Filtering String Values
                  </h3>
                  <button onClick={() => runDemo('run_string')} className="text-left group w-full mb-6">
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 hover:border-amber-500 transition-colors shadow-sm relative">
                        <div className="absolute top-3 right-3 text-[9px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN STRING</div>
                        <p className="text-[11px] text-slate-700 dark:text-slate-300 font-bold mb-2">Select employees from City = Delhi.</p>
                        <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 border border-amber-200 dark:border-amber-800 shadow-inner px-2 py-1.5 rounded block mb-2 w-full sm:w-fit overflow-x-auto whitespace-nowrap">
                            {"df.query(\"City == 'Delhi'\")"}
                        </code>
                        <p className="text-[10px] text-slate-500">Notice you wrap the inner string in <b>single-quotes</b> so it doesn't break the outer expression string!</p>
                    </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <BarChart className="w-5 h-5 text-rose-500 mr-2" />
                        🔟 Visualization Example
                  </h3>
                   <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-sm">
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">After filtering data, we can instantly visualize the subset results.</p>
                        <code className="text-[10px] sm:text-[11px] bg-white dark:bg-slate-950 font-bold p-3 rounded block w-full shadow-inner border border-slate-200 dark:border-slate-800 mb-4 whitespace-pre-wrap">
{`import matplotlib.pyplot as plt

filtered = df.query("Age > 25")
filtered.plot(x="Name", y="Salary", kind="bar")

plt.title("Salary of Selected Employees")
plt.show()`}
                        </code>
                         <pre className="text-[10px] sm:text-[11px] font-mono text-center justify-center flex flex-col items-center text-sky-500 font-bold bg-white dark:bg-slate-900 p-3 shadow-inner rounded border border-sky-100 dark:border-sky-900/30 leading-[1.2]">
{`Salary
│
│ █
│ █      █
│ █  █   █
└────────────
Sara Mike Anna`}
                         </pre>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Database className="w-5 h-5 text-emerald-500 mr-2" />
                        1️⃣1️⃣ Real-World Example
                  </h3>

                  <button onClick={() => runDemo('run_real_world')} className="text-left group w-full">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 border-y border-r border-emerald-200 dark:border-slate-700 rounded-r-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN REAL WORLD</div>
                          <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300 mb-2">Imagine a Sales Dataset</h4>
                          
                          <table className="w-full text-left text-[11px] mb-4 border border-emerald-100 dark:border-emerald-900/50 bg-white dark:bg-slate-900">
                             <thead className="bg-emerald-100 dark:bg-emerald-900/30">
                               <tr><th className="p-2 border-b border-emerald-200 dark:border-emerald-900">Product</th><th className="p-2 border-b border-emerald-200 dark:border-emerald-900">Price</th><th className="p-2 border-b border-emerald-200 dark:border-emerald-900">Sales</th></tr>
                             </thead>
                             <tbody>
                               <tr className="border-b border-emerald-50 dark:border-slate-800"><td className="p-2">Laptop</td><td className="p-2 font-mono">80000</td><td className="p-2">50</td></tr>
                               <tr className="border-b border-emerald-50 dark:border-slate-800"><td className="p-2">Phone</td><td className="p-2 font-mono">30000</td><td className="p-2">120</td></tr>
                               <tr><td className="p-2">Tablet</td><td className="p-2 font-mono">20000</td><td className="p-2">80</td></tr>
                             </tbody>
                          </table>

                          <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mb-2 font-bold">Filter high-value items:</p>
                          <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-3 py-2 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit">
                            {"df.query('Price > 30000')"}
                          </code>
                        </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-2">
                        <Binary className="w-5 h-5 text-blue-500 mr-2" />
                        1️⃣2️⃣ query() vs Boolean Indexing
                  </h3>
                   <table className="w-full text-left text-[11px] sm:text-xs mb-4 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm">
                             <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                               <tr><th className="p-3 border-b border-slate-200 dark:border-slate-700">Method</th><th className="p-3 border-b border-slate-200 dark:border-slate-700 font-mono text-teal-600 dark:text-teal-400">Example Code</th></tr>
                             </thead>
                             <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-bold">Boolean indexing </td><td className="p-3"><code>df[df["Age"] {'>'} 28]</code></td></tr>
                               <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-bold text-sky-500">Query method </td><td className="p-3 text-sky-500 font-bold"><code>df.query("Age {'>'} 28")</code></td></tr>
                             </tbody>
                   </table>
                   <p className="text-[11px] sm:text-xs text-slate-500 italic block border-l-2 border-slate-300 dark:border-slate-700 pl-3"><strong>Recommendation:</strong> Use <code>query()</code> for cleaner and more readable filtering, especially with multiple conditions.</p>
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣3️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-5 rounded-xl shadow-sm relative">
                      <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200">❌ Forgetting Quotes</div>
                      
                        <div className="flex flex-col sm:flex-row gap-4 mt-3">
                            <button onClick={() => runDemo('run_mistake_quote')} className="flex-1 bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900 p-2 rounded border border-rose-200 dark:border-rose-800 text-center transition-colors group">
                                <p className="text-[11px] text-rose-600 dark:text-rose-400 font-mono font-bold block">
                                  df.query(Age {'>'} 25)
                                </p>
                                <p className="text-center text-[10px] font-bold text-rose-500 mt-1 uppercase">Wrong (Click to Crash)</p>
                            </button>
                            <div className="flex-1 bg-white dark:bg-slate-950 p-2 rounded border border-emerald-200 dark:border-emerald-800 shadow-inner text-center flex flex-col justify-center">
                                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-bold block">
                                  df.query("Age {'>'} 25")
                                </p>
                                <p className="text-center text-[10px] font-bold text-emerald-500 mt-1 uppercase">Correct Method</p>
                            </div>
                      </div>

                       <div className="font-bold text-sm mb-2 text-slate-800 dark:text-slate-200 mt-6 pt-4 border-t border-rose-200 dark:border-rose-800/50">❌ Incorrect string comparisons</div>
                       <p className="text-[11px] text-slate-600 dark:text-slate-400 block mb-2 font-mono bg-white dark:bg-slate-950 p-1.5 rounded border border-rose-200 dark:border-rose-900 w-fit">{"Wrong: df.query(\"City == Delhi\")"}</p>
                       <p className="text-[11px] text-slate-600 dark:text-slate-400 block mb-2 font-mono bg-emerald-50 dark:bg-emerald-900/30 p-1.5 rounded border border-emerald-200 dark:border-emerald-800 w-fit text-emerald-800 dark:text-emerald-300">{"Correct: df.query(\"City == 'Delhi'\")"}</p>

                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣4️⃣ Tips & Tricks (Professional Advice)
                  </h3>

                  <div className="space-y-4">
                      
                      <div className="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-800/80 transition-colors p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                            <div className="w-full">
                                <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-2">Tip 1 — Use query() for readable filtering</span>
                                <div className="space-y-2">
                                    <div className="flex items-center text-[10px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded p-2">
                                        <span className="text-rose-500 font-bold mr-3 uppercase w-16 text-center">Instead Of</span>
                                        <code className="text-slate-600 dark:text-slate-400">{'df[(df["Age"] > 25) & (df["Salary"] > 50000)]'}</code>
                                    </div>
                                    <div className="flex items-center text-[10px] sm:text-[11px] bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 rounded p-2">
                                        <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-3 uppercase w-16 text-center">Use</span>
                                        <code className="text-emerald-700 dark:text-emerald-300 font-bold">{'df.query("Age > 25 and Salary > 50000")'}</code>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-800/80 transition-colors p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 relative">
                            <div className="w-full">
                                <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-1">Tip 2 — Combine with sorting</span>
                                <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 px-2 py-1.5 rounded inline-block border border-slate-100 dark:border-slate-800 w-full sm:w-auto overflow-x-auto whitespace-nowrap">
                                    {"df.query('Age > 25').sort_values('Salary')"}
                                </code>
                                <p className="text-[10px] text-slate-500 leading-relaxed mt-2 uppercase font-bold tracking-wide">Helps instantly identify top-performing filtered records.</p>
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
               <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-sky-400" />
                     Execution Console
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
                        <Search className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-5 font-sans leading-relaxed">Click interactive buttons on the left to execute Pandas <code className="text-sky-500/50 block mt-1">.query()</code> expressions!</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Anna') || line.includes('Laptop') ? 'text-sky-300' :
                              line.includes('Name') || line.includes('Age') || line.includes('Salary') || line.includes('City') || line.includes('Product') || line.includes('Price') || line.includes('Sales') ? 'text-teal-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('NameError') || line.includes('CRASH') ? 'text-rose-400 font-bold' :
                              line.match(/^\s*\d+\s+/) || line.match(/^[A-Za-z]+:\s+\d/) ? 'text-emerald-300' :
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

export default PdQuery;
