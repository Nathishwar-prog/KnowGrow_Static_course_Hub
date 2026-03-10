import React, { useState } from 'react';
import { 
  FileCode, Terminal, Lightbulb, 
  Settings, Database, FileSpreadsheet,
  Download, Filter, AlertCircle, CheckCircle2,
  Table as TableIcon
} from 'lucide-react';

const PdReadCsv: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'parameters' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'simple_read':
        outLines = [
          '> df = pd.read_csv("data.csv")',
          '> print(df.head())',
          '   ID   Name   Age      City',
          '0   1   John    25    Mumbai',
          '1   2   Sara    30     Delhi',
          '2   3   Mike    28  Bangalore'
        ];
        break;
      case 'read_sep':
        outLines = [
          '> df = pd.read_csv("data.txt", sep=";")',
          '> print(df.columns)',
          "Index(['Name', 'Email', 'Role'], dtype='object')",
          '',
          '> # Successfully parsed semicolon-separated data!'
        ];
        break;
      case 'read_cols':
        outLines = [
          '> df = pd.read_csv("data.csv", usecols=["Name", "Salary"])',
          '> print(df.columns)',
          "Index(['Name', 'Salary'], dtype='object')",
          '',
          '> # Memory Saved: Dropped unused columns during import!'
        ];
        break;
      case 'read_nrows':
        outLines = [
          '> df = pd.read_csv("huge_file.csv", nrows=100)',
          '> print(len(df))',
          '100',
          '',
          '> # Only first 100 rows loaded. Fast for massive files!'
        ];
        break;
      case 'read_index':
        outLines = [
          '> df = pd.read_csv("data.csv", index_col="ID")',
          '> print(df.index.name)',
          "'ID'",
          '> print(df.iloc[0])',
          'Name    John',
          'Age       25'
        ];
        break;
      case 'handle_na':
        outLines = [
          '> df = pd.read_csv("data.csv", na_values=["missing", "n/a"])',
          '> print(df.isna().sum())',
          'Age        2',
          'Salary     5',
          '',
          '> # Custom strings "missing" and "n/a" are now NaN objects!'
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
          <FileSpreadsheet className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Data Import <code className="text-emerald-600 dark:text-emerald-400 text-3xl sm:text-4xl bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.read_csv()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The most important entry point for data analysis. <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">read_csv()</code> converts Comma Separated Values files into powerful Pandas DataFrames.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-emerald-500" />
            File Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Database className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Fundamentals
            </button>
             <button
              onClick={() => setActiveTab('parameters')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'parameters' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Settings className="w-4 h-4 mr-1.5" /> 5️⃣-8️⃣ Load Controls
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <FileCode className="w-4 h-4 mr-1.5" /> 9️⃣-1️⃣1️⃣ Data Cleaning
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣2️⃣-1️⃣4️⃣ Pro Tips
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
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto font-sans">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Notice Box */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Pandas can load data from local files, URLs, or even cloud buckets using the same <code>read_csv()</code> function!
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg">
                      <Database className="w-5 h-5 text-emerald-500 mr-2" />
                      1️⃣ What is <code className="text-emerald-500 ml-2">read_csv()</code>?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>pd.read_csv()</code> is the primary method for loading external CSV data into a Pandas DataFrame. It is highly optimized for performance and can handle millions of lines efficiently.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                      <CheckCircle2 className="w-5 h-5 text-sky-500 mr-2" />
                      2️⃣ Why Use This Method?
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                         <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                           <p className="text-xs font-bold text-emerald-600 mb-1 leading-none uppercase tracking-wide">Universal Format</p>
                           <p className="text-[10px] text-slate-500">CSV is the global standard for shared datasets.</p>
                         </div>
                         <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                           <p className="text-xs font-bold text-blue-600 mb-1 leading-none uppercase tracking-wide">Custom Parsers</p>
                           <p className="text-[10px] text-slate-500">Easily handle different delimiters (tabs, semi-colons).</p>
                         </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <Settings className="w-5 h-5 text-slate-500 mr-2" />
                       3️⃣ Direct Loading Syntax
                    </h3>
                    <div className="bg-[#0f172a] p-4 rounded-xl shadow-lg border border-slate-800 mt-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase font-bold text-slate-500">Standard Import</span>
                        <div className="flex gap-1.5">
                           <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                           <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                           <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        </div>
                      </div>
                      <code className="text-emerald-400 font-mono text-[13px] block">
                        {"import pandas as pd"}
                        <br />
                        <span className="text-slate-300">df = </span>
                        {"pd.read_csv("}<span className="text-amber-300">"filename.csv"</span>{")"}
                      </code>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <TableIcon className="w-5 h-5 text-indigo-500 mr-2" />
                       4️⃣ Interactive Basic Demo
                    </h3>
                    <button onClick={() => runDemo('simple_read')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-emerald-500 hover:shadow-emerald-500/10 transition-all shadow-sm flex items-center transition-all bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                        <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <Download className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Load Default CSV</p>
                          <p className="text-xs text-slate-500">Reads 'data.csv' and creates a DataFrame automatically.</p>
                        </div>
                        <code className="text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded">EXECUTE</code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'parameters' && ( activeTab === 'parameters' && 
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Settings className="w-5 h-5 text-emerald-500 mr-2" />
                        5️⃣ Delimiters & Separators
                    </h3>
                    <div className="mt-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Not all files are comma-separated. Use <code>sep</code> for tabs or semicolons:</p>
                      <button onClick={() => runDemo('read_sep')} className="w-full">
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm block w-fit mx-auto hover:border-emerald-500 transition-colors">
                          {"pd.read_csv('data.txt', sep=';')"}
                        </code>
                      </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                        <Filter className="w-5 h-5 text-sky-500 mr-2" />
                        6️⃣ Select Specific Columns
                    </h3>
                    <button onClick={() => runDemo('read_cols')} className="w-full text-left mt-4 group">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-[10px] font-bold py-0.5 px-2 bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 rounded-full uppercase">Optimization</span>
                           <code className="text-[9px] text-slate-400">usecols=...</code>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 block italic leading-tight">"If your file has 100 columns but you only need 2, use <code>usecols</code> to save massive RAM."</p>
                        <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 block border-l-2 border-sky-500 pl-3 py-1">
                          {"pd.read_csv('file.csv', usecols=['Name', 'Salary'])"}
                        </code>
                      </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Download className="w-5 h-5 text-amber-500 mr-2" />
                        7️⃣ Loading Partial Data
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <button onClick={() => runDemo('read_nrows')} className="p-4 bg-amber-50/30 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl hover:bg-amber-100/50 transition-colors group">
                           <p className="font-bold text-amber-600 dark:text-amber-400 text-xs mb-1 uppercase tracking-wider">Fast Preview</p>
                           <code className="text-[10px] text-slate-800 dark:text-slate-200 block mt-2 whitespace-nowrap overflow-x-hidden">nrows=100</code>
                           <p className="text-[9px] text-slate-500 mt-1">Stops loading after 100 lines.</p>
                        </button>
                        <div className="p-4 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl">
                           <p className="font-bold text-slate-500 dark:text-slate-400 text-xs mb-1 uppercase tracking-wider">Skip Headers</p>
                           <code className="text-[10px] text-slate-800 dark:text-slate-200 block mt-2">skiprows=5</code>
                           <p className="text-[9px] text-slate-500 mt-1">Ignores first 5 rows.</p>
                        </div>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <TableIcon className="w-5 h-5 text-indigo-500 mr-2" />
                        8️⃣ Defining the Index
                    </h3>
                    <button onClick={() => runDemo('read_index')} className="w-full text-left mt-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-indigo-500 transition-colors relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-1 h-full bg-indigo-500"></div>
                       <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">Set a column as the DataFrame Index immediately during import:</p>
                       <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block bg-slate-50 dark:bg-slate-950 p-2 rounded">
                         {"pd.read_csv('data.csv', index_col='ID')"}
                       </code>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <FileCode className="w-5 h-5 text-rose-500 mr-2" />
                        9️⃣ Handling Missing Values (NA)
                    </h3>
                    <div className="mt-4 space-y-3">
                       <p className="text-sm text-slate-600 dark:text-slate-300">CSV files often use custom strings like <span className="text-rose-500 font-mono">'n/a'</span> or <span className="text-rose-500 font-mono">'empty'</span> to represent missing data. Pandas can handle these automatically:</p>
                       <button onClick={() => runDemo('handle_na')} className="w-full">
                         <div className="bg-rose-50/30 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl text-center group transition-all hover:bg-rose-50 dark:hover:bg-rose-900/20">
                           <code className="text-[12px] font-bold text-slate-800 dark:text-slate-200 block mb-2 overflow-x-auto whitespace-nowrap">
                             {"pd.read_csv('data.csv', na_values=['Missing', '??'])"}
                           </code>
                           <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest leading-none">Execute & Clean</p>
                         </div>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Download className="w-5 h-5 text-emerald-500 mr-2" />
                        🔟 Working with Large Datasets
                    </h3>
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-800 mt-4 relative group">
                        <div className="absolute top-4 right-4 text-emerald-300 dark:text-emerald-800 opacity-20 group-hover:opacity-100 transition-opacity">
                           <FileSpreadsheet className="w-16 h-16" />
                        </div>
                        <h4 className="font-extrabold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                           <Settings className="w-4 h-4 mr-2" />
                           Reading Files in "Chunks"
                        </h4>
                        <p className="text-xs text-emerald-700 dark:text-emerald-400 mb-4 leading-relaxed">If a file is 10GB but your monitor has only 8GB RAM, use <code>chunksize</code> to process it line-by-line in blocks of 10,000:</p>
                        <code className="text-[11px] font-mono block bg-white dark:bg-slate-950 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900 w-full xl:w-fit">
                           {"for chunk in pd.read_csv('huge.csv', chunksize=10000):"}
                           <br />
                           {"    # process chunk block here"}
                        </code>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <FileCode className="w-5 h-5 text-blue-500 mr-2" />
                        1️⃣1️⃣ Compression Handling
                    </h3>
                    <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-4 rounded-xl mt-4 flex items-center">
                        <div className="mr-4">
                           <Download className="w-8 h-8 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Auto-Decompression</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 italic">Pandas automatically detects and reads <b>.zip</b> or <b>.gz</b> files without needing external tools.</p>
                        </div>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <AlertCircle className="w-5 h-5 text-rose-500 mr-2" />
                        1️⃣2️⃣ Common Beginner Mistakes
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-4 mt-4">
                       <div className="bg-rose-50/50 dark:bg-rose-900/10 border-l-4 border-rose-500 p-4 rounded-lg">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-1 flex items-center">
                             <span className="mr-1">❌</span> The "Trailing Separator" Error
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">If your CSV has an extra comma at the end of lines, Pandas might add an unwanted <code>Unnamed: 0</code> column. Use <code>index_col=0</code> to fix it!</p>
                       </div>

                       <div className="bg-rose-50/50 dark:bg-rose-900/10 border-l-4 border-rose-500 p-4 rounded-lg">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-1 flex items-center">
                             <span className="mr-1">❌</span> Incorrect Delimiters
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Loading a Tab-Separated file (.tsv) with <code>read_csv</code> without <code>sep='\t'</code> will load everything into ONE column.</p>
                       </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣3️⃣ Pro Loading Tips
                    </h3>

                    <div className="space-y-4 mt-4">
                       <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden flex items-start">
                           <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg mr-4">
                              <span className="text-lg font-bold text-amber-600">01</span>
                           </div>
                           <div>
                              <p className="font-bold text-sm text-slate-900 dark:text-white mb-1">Combine Columns as Dates</p>
                              <code className="text-[10px] bg-slate-50 dark:bg-slate-950 px-2 py-0.5 rounded border dark:border-slate-800 block text-emerald-600 dark:text-emerald-400 font-bold mb-2">parse_dates=['Date']</code>
                              <p className="text-[11px] text-slate-500 leading-relaxed">Automatically converts date columns from strings to Datetime objects during import.</p>
                           </div>
                       </div>

                       <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden flex items-start">
                           <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg mr-4">
                              <span className="text-lg font-bold text-sky-600">02</span>
                           </div>
                           <div>
                              <p className="font-bold text-sm text-slate-900 dark:text-white mb-1">Setting Column Types</p>
                              <code className="text-[10px] bg-slate-50 dark:bg-slate-950 px-2 py-0.5 rounded border dark:border-slate-800 block text-blue-600 dark:text-blue-400 font-bold mb-2">dtype={"{"}"ID": int, "Price": float{"}"}</code>
                              <p className="text-[11px] text-slate-500 leading-relaxed">Force specific types to prevent Pandas from guessing incorrectly (e.g. reading zip codes as numbers).</p>
                           </div>
                       </div>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                        1️⃣4️⃣ Summary Dashboard
                    </h3>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-bold">
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 p-2 rounded border border-emerald-100 dark:border-emerald-800/50 text-center">FAST PERFORMANCE</div>
                        <div className="bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 p-2 rounded border border-teal-100 dark:border-teal-800/50 text-center">MEMORY EFFICIENT</div>
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 p-2 rounded border border-indigo-100 dark:border-indigo-800/50 text-center">COMPRESSION DETECTED</div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 p-2 rounded border border-blue-100 dark:border-blue-800/50 text-center">URL COMPATIBLE</div>
                    </div>
                  </section>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5 h-[500px] lg:h-auto">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-emerald-400" />
                     Data Import Console
                  </h3>
                  <div className="flex space-x-1.5 cursor-default">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[500px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <FileSpreadsheet className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-5 font-sans leading-relaxed">Click interactive buttons on the left to execute Pandas <code className="text-emerald-500/50 block mt-1">.read_csv()</code> operations!</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('ID') || line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Salary') ? 'text-emerald-300 font-bold border-b border-slate-800/10 pb-0.5 block mt-2 mb-1' :
                              line.includes('NaN') || line.includes('missing') ? 'text-rose-400' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') ? 'text-sky-300' :
                              line.match(/^\s*\d+\s+/) || line.match(/^[A-Za-z]+:\s+\d/) ? 'text-emerald-300' :
                              'text-slate-300'
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

export default PdReadCsv;
