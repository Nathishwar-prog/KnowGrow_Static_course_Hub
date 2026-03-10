import React, { useState } from 'react';
import { 
  FileSpreadsheet, Terminal, Lightbulb, 
  Settings, Database, Download, 
  Filter, AlertCircle, CheckCircle2,
  Table as TableIcon, Layers, BarChart3,
  ExternalLink, ListChecks
} from 'lucide-react';

const PdReadExcel: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'sheets' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'simple_read':
        outLines = [
          '> df = pd.read_excel("students.xlsx")',
          '> print(df)',
          '    Name  Age     City',
          '0   John   25  Chennai',
          '1   Sara   30    Delhi',
          '2   Mike   28   Mumbai'
        ];
        break;
      case 'read_sheet':
        outLines = [
          '> df = pd.read_excel("students.xlsx", sheet_name="Sheet1")',
          '> print(df.shape)',
          '(3, 3)',
          '',
          '> # Successfully loaded specific sheet data!'
        ];
        break;
      case 'multi_sheet':
        outLines = [
          '> sheets_dict = pd.read_excel("students.xlsx", sheet_name=None)',
          '> print(sheets_dict.keys())',
          "dict_keys(['Sheet1', 'Sheet2', 'Reports'])",
          '',
          '> # Notice: Now you have a Dictionary of DataFrames!'
        ];
        break;
      case 'read_cols':
        outLines = [
          '> df = pd.read_excel("students.xlsx", usecols=["Name", "Age"])',
          '> print(df.columns)',
          "Index(['Name', 'Age'], dtype='object')",
          '',
          '> # Filtered columns during import phase.'
        ];
        break;
      case 'read_nrows':
        outLines = [
          '> df = pd.read_excel("students.xlsx", nrows=2)',
          '> print(len(df))',
          '2',
          '',
          '> # Perfect for a quick preview of large files!'
        ];
        break;
      case 'read_index':
        outLines = [
          '> df = pd.read_excel("students.xlsx", index_col="Name")',
          '> print(df.index.name)',
          "'Name'",
          '> print(df.iloc[0])',
          'Age        25',
          'City  Chennai'
        ];
        break;
      case 'run_real_world':
        outLines = [
          '> df = pd.read_excel("sales_report.xlsx")',
          '> df.groupby("Region").sum()',
          '        Revenue',
          'Region         ',
          'East      60000',
          'North    120000',
          'South     90000'
        ];
        break;
      case 'error_engine':
        outLines = [
          '> pd.read_excel("data.xlsx")',
          'ImportError: Missing optional dependency \'openpyxl\'.  Use pip or conda to install openpyxl.',
          '',
          '> # ❌ ERROR: You must install the excel engine first!'
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
        <div className="inline-flex items-center justify-center p-4 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-6 shadow-sm border border-green-200 dark:border-green-800/50">
          <FileSpreadsheet className="w-10 h-10 text-green-600 dark:text-green-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Excel <code className="text-green-600 dark:text-green-400 text-3xl sm:text-4xl bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.read_excel()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Unlock your business data. <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">read_excel()</code> imports spreadsheets directly into Python for high-powered analysis and reporting.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-green-500" />
            Excel Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-green-600 text-white shadow-green-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Database className="w-4 h-4 mr-1.5" /> 1️⃣-5️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('sheets')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'sheets' ? 'bg-green-600 text-white shadow-green-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Layers className="w-4 h-4 mr-1.5" /> 6️⃣-9️⃣ Sheets & Rows
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-green-600 text-white shadow-green-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart3 className="w-4 h-4 mr-1.5" /> 🔟-1️⃣2️⃣ Analysis
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-green-600 text-white shadow-green-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣3️⃣-1️⃣4️⃣ Pro Tips
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
                  <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Excel data often contains multiple sheets. With <code>read_excel()</code>, you can choose exactly which one to import!
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Database className="w-5 h-5 text-green-500 mr-2" />
                      1️⃣ What is <code className="text-green-500 ml-2">read_excel()</code>?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>read_excel()</code> is a Pandas function used to read data from an Excel file (.xlsx or .xls) into a Pandas DataFrame.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                      <ListChecks className="w-5 h-5 text-sky-500 mr-2" />
                      2️⃣ Why it is Important
                    </h3>
                    <ul className="grid grid-cols-2 gap-2 mt-3">
                         {['Business reports', 'Financial data', 'Surveys & Research', 'Sales data'].map((item) => (
                           <li key={item} className="bg-sky-50 dark:bg-sky-900/20 text-sky-800 dark:text-sky-300 p-2 rounded text-[11px] font-bold text-center border border-sky-100 dark:border-sky-800/50">
                             {item}
                           </li>
                         ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <Settings className="w-5 h-5 text-slate-500 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <table className="w-full text-left text-[11px] sm:text-xs border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm mt-3">
                      <thead className="bg-slate-100 dark:bg-slate-800">
                        <tr><th className="p-2 border-b">Parameter</th><th className="p-2 border-b">Description</th></tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-900">
                        <tr><td className="p-2 border-b font-mono text-green-600">io</td><td className="p-2 border-b italic">Excel file path</td></tr>
                        <tr><td className="p-2 border-b font-mono text-green-600">sheet_name</td><td className="p-2 border-b italic">Excel sheet to read</td></tr>
                        <tr><td className="p-2 border-b font-mono text-green-600">header</td><td className="p-2 border-b italic">Row used as column names</td></tr>
                        <tr><td className="p-2 font-mono text-green-600">usecols</td><td className="p-2 italic">Select specific columns</td></tr>
                      </tbody>
                    </table>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <ExternalLink className="w-5 h-5 text-amber-500 mr-2" />
                       4️⃣ Installing Required Library
                    </h3>
                    <div className="bg-black/90 p-4 rounded-xl shadow-inner mt-3 group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-2 h-full bg-amber-500/20"></div>
                      <p className="text-[11px] text-slate-400 mb-2 font-mono"># Pandas uses openpyxl as a backend engine</p>
                      <code className="text-amber-400 font-mono text-sm block">
                        pip install openpyxl
                      </code>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <TableIcon className="w-5 h-5 text-indigo-500 mr-2" />
                       5️⃣ Basic Import Demo
                    </h3>
                    <button onClick={() => runDemo('simple_read')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-green-500 hover:shadow-green-500/10 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                        <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <Download className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Load students.xlsx</p>
                          <p className="text-xs text-slate-500 italic">"Converts spreadsheet data into a Python dataset."</p>
                        </div>
                        <code className="text-[10px] font-bold text-green-500 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">EXECUTE</code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'sheets' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Layers className="w-5 h-5 text-green-500 mr-2" />
                        6️⃣ Reading a Specific Sheet
                    </h3>
                    <button onClick={() => runDemo('read_sheet')} className="w-full text-left mt-4 group">
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                         <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Target any sheet by its name string:</p>
                         <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block bg-white dark:bg-slate-950 p-2 rounded shadow-sm border border-slate-200 dark:border-slate-800 w-fit">
                           {'df = pd.read_excel("students.xlsx", sheet_name="Sheet1")'}
                         </code>
                      </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Layers className="w-5 h-5 text-sky-500 mr-2" />
                        7️⃣ Reading Multiple Sheets
                    </h3>
                    <button onClick={() => runDemo('multi_sheet')} className="w-full text-left mt-3">
                      <div className="bg-sky-50/30 dark:bg-sky-900/10 border border-sky-200 dark:border-sky-800/50 p-4 rounded-xl shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-sky-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Passing <code className="text-sky-600 font-bold">None</code> loads <b>EVERY</b> sheet in the file:</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block">
                          {'df_all = pd.read_excel("students.xlsx", sheet_name=None)'}
                        </code>
                        <p className="text-[10px] text-sky-500 mt-2 font-bold uppercase tracking-wider">Returns a Dictionary of DataFrames</p>
                      </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Filter className="w-5 h-5 text-amber-500 mr-2" />
                        8️⃣ Reading Specific Columns
                    </h3>
                    <button onClick={() => runDemo('read_cols')} className="w-full text-left mt-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-amber-500 transition-colors">
                        <p className="text-xs text-slate-500 mb-2 italic">"Pick only what you need to save memory."</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block border-l-2 border-amber-500 pl-3">
                          {'df = pd.read_excel("students.xlsx", usecols=["Name", "Age"])'}
                        </code>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm">
                        <Download className="w-5 h-5 text-indigo-500 mr-2" />
                        9️⃣ Reading Limited Rows
                    </h3>
                    <button onClick={() => runDemo('read_nrows')} className="w-full text-left mt-3 p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">Preview massive spreadsheets by loading only top rows:</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block w-fit bg-white dark:bg-slate-900 px-3 py-1 rounded">
                          {'df = pd.read_excel("students.xlsx", nrows=2)'}
                        </code>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <ListChecks className="w-5 h-5 text-rose-500 mr-2" />
                        🔟 Setting Index Column
                    </h3>
                    <button onClick={() => runDemo('read_index')} className="w-full text-left mt-4 group">
                       <div className="bg-rose-50/30 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-5 rounded-2xl transition-all hover:bg-rose-50 dark:hover:bg-rose-900/20">
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Use a column like 'Name' or 'ID' as the row address:</p>
                          <code className="text-[12px] font-bold text-slate-800 dark:text-slate-200 block bg-white dark:bg-slate-950 p-2 rounded shadow-inner border border-rose-100 dark:border-rose-900">
                             {'df = pd.read_excel("students.xlsx", index_col="Name")'}
                          </code>
                       </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <BarChart3 className="w-5 h-5 text-emerald-500 mr-2" />
                        1️⃣1️⃣ Visualization Example
                    </h3>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mt-4">
                        <code className="text-[11px] block text-emerald-400 mb-4 whitespace-pre-wrap">
{`import matplotlib.pyplot as plt

df = pd.read_excel("students.xlsx")
df.plot(x="Name", y="Age", kind="bar")

plt.title("Student Age Distribution")
plt.show()`}
                        </code>
                        <div className="flex flex-col items-center">
                           <div className="w-full max-w-[200px] h-[100px] border-b-2 border-l-2 border-slate-700 relative flex items-end justify-around pb-1">
                              <div className="w-[15%] bg-emerald-500 rounded-t h-[60%]"></div>
                              <div className="w-[15%] bg-emerald-500 rounded-t h-[90%]"></div>
                              <div className="w-[15%] bg-emerald-500 rounded-t h-[75%]"></div>
                              <div className="absolute -left-8 top-1/2 -rotate-90 text-[9px] text-slate-500 font-bold uppercase">Age</div>
                           </div>
                           <div className="w-full max-w-[200px] flex justify-around mt-1">
                              {['John', 'Sara', 'Mike'].map(n => <span key={n} className="text-[8px] text-slate-600 font-bold">{n}</span>)}
                           </div>
                        </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Database className="w-5 h-5 text-blue-500 mr-2" />
                        1️⃣2️⃣ Real-World Example
                    </h3>
                    <button onClick={() => runDemo('run_real_world')} className="w-full text-left mt-4 group">
                        <div className="bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-5 rounded-r-2xl border-y border-r border-blue-200 dark:border-blue-800 group-hover:bg-blue-100/50 transition-all">
                           <h4 className="font-extrabold text-blue-800 dark:text-blue-300 text-sm mb-2">Scenario: Sales Performance File</h4>
                           <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-4 italic leading-relaxed">Imagine a company sales report with Region and Revenue. We can load and instantly group the performance:</p>
                           <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block bg-white dark:bg-slate-950 p-2 rounded border border-blue-100 dark:border-blue-900">
                             {'df = pd.read_excel("sales_report.xlsx")'}
                             <br />
                             {'df.groupby("Region").sum()'}
                           </code>
                        </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <AlertCircle className="w-5 h-5 text-rose-500 mr-2" />
                        1️⃣3️⃣ Common Beginner Mistakes
                    </h3>
                    
                    <div className="space-y-4 mt-4">
                       <button onClick={() => runDemo('error_engine')} className="w-full text-left group">
                          <div className="bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl hover:border-rose-500 transition-colors">
                            <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2 flex items-center tracking-wider">
                               ❌ Missing Excel Engine
                            </p>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">If you get an <b>ImportError</b>, it means openpyxl isn't installed. Run <code>pip install openpyxl</code> in your terminal!</p>
                          </div>
                       </button>

                       <div className="bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2 flex items-center tracking-wider">
                             ❌ Incorrect File Path
                          </p>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">If the file is in a different folder, relative paths won't work. Always use the full path like <code>"C:/data/file.xlsx"</code> or move the file to your script folder.</p>
                       </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣4️⃣ Tips & Tricks (Professional Advice)
                    </h3>

                    <div className="space-y-4 mt-4">
                       {[
                         { title: 'Always preview the dataset', code: 'df.head()', desc: 'Instantly verify headers and structure.' },
                         { title: 'Check data health', code: 'df.info()', desc: 'Check types and missing values immediately.' },
                         { title: 'Standard Workflow', code: 'df.info() + df.describe()', desc: 'The golden rule for any analysis start.' }
                       ].map((tip, idx) => (
                         <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg mr-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                               <span className="text-sm font-bold uppercase tracking-widest">{idx + 1}</span>
                            </div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">{tip.title}</p>
                               <code className="text-[10px] bg-slate-50 dark:bg-slate-950 px-2 py-0.5 rounded border dark:border-slate-800 block text-amber-600 dark:text-amber-400 font-bold mb-1 w-fit">{tip.code}</code>
                               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{tip.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                  </section>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5 h-[550px] lg:h-auto">
            <div className="bg-[#0c0c0d] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-green-500/70" />
                     Excel Parser Out
                  </h3>
                  <div className="flex space-x-1.5 opacity-30">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[500px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-600 animate-pulse flex flex-col items-center justify-center mt-32">
                        <FileSpreadsheet className="w-12 h-12 mb-4 opacity-10" />
                        <span className="text-center text-[11px] px-10 font-bold uppercase tracking-widest opacity-40">Execute Workbook Simulation</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Revenue') ? 'text-green-300 font-bold border-b border-slate-800/30 block mt-2 mb-1' :
                              line.includes('ImportError') || line.includes('ERROR') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') ? 'text-sky-300' :
                              line.match(/^\s*\d+\s+/) || line.match(/^[A-Za-z]+:\s+\d/) ? 'text-emerald-300/80' :
                              'text-slate-400'
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

export default PdReadExcel;
