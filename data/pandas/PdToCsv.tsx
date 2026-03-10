import React, { useState } from 'react';
import { 
  Save, FileDown, Terminal, Lightbulb, 
  Settings, Database, FileText,
  Share2, AlertTriangle, CheckCircle2,
  Table as TableIcon, BarChart3, 
  Layers, Columns, Play, MousePointer2,
  HardDrive, Filter, Activity,
  SlidersHorizontal,
  TrendingUp
} from 'lucide-react';

const PdToCsv: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'export' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          '    Name  Age     City',
          '0   John   25  Chennai',
          '1   Sara   30    Delhi',
          '2   Mike   28   Mumbai'
        ];
        break;
      case 'save_default':
        outLines = [
          '> df.to_csv("students.csv")',
          '> # File "students.csv" created!',
          '',
          '> # Inside students.csv (RAW):',
          ',Name,Age,City',
          '0,John,25,Chennai',
          '1,Sara,30,Delhi',
          '2,Mike,28,Mumbai',
          '',
          '> # Notice: Index column (0, 1, 2) is included by default.'
        ];
        break;
      case 'save_no_index':
        outLines = [
          '> df.to_csv("students.csv", index=False)',
          '> # File "students.csv" created (Cleaner)!',
          '',
          '> # Inside students.csv (RAW):',
          'Name,Age,City',
          'John,25,Chennai',
          'Sara,30,Delhi',
          'Mike,28,Mumbai'
        ];
        break;
      case 'save_cols':
        outLines = [
          '> df.to_csv("students.csv", columns=["Name","Age"])',
          '',
          '> # Inside students.csv:',
          'Name,Age',
          '0,John,25',
          '1,Sara,30',
          '2,Mike,28'
        ];
        break;
      case 'save_sep':
        outLines = [
          '> df.to_csv("students.csv", sep=";")',
          '',
          '> # Inside students.csv (Semicolon delimited):',
          'Name;Age;City',
          '0;John;25;Chennai',
          '1;Sara;30;Delhi'
        ];
        break;
      case 'sales_report':
        outLines = [
          '> # Exporting Sales Result...',
          '> df.to_csv("sales_report.csv", index=False)',
          '',
          '> # Content saved:',
          'Product,Revenue',
          'Laptop,120000',
          'Phone,90000',
          'Tablet,60000'
        ];
        break;
      case 'mistake_path':
        outLines = [
          '> df.to_csv("C:/unknown/data.csv")',
          'FileNotFoundError: [Errno 2] No such file or directory',
          '',
          '> # ❌ ERROR: The output folder must exist before saving!'
        ];
        break;
      case 'pipeline':
        outLines = [
          '> df = pd.read_csv("raw.csv")',
          '> df = df.dropna()',
          '> df.to_csv("clean.csv")',
          '> print("Pipeline Complete. Data sanitized and stored.")'
        ];
        break;
      default:
        outLines = ['Action not recognized.'];
    }
    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200 leading-relaxed">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl mb-6 shadow-sm border border-sky-200 dark:border-sky-800/50 group hover:scale-105 transition-transform">
          <FileDown className="w-10 h-10 text-sky-600 dark:text-sky-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Persistence <code className="text-sky-600 dark:text-sky-400 text-3xl sm:text-4xl bg-sky-50 dark:bg-sky-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.to_csv()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          From Memory to Disk. The <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200 font-bold uppercase">to_csv()</code> method is the bridge between your analysis workspace and the real world.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-sky-500" />
            Storage Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <FileText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Principles
            </button>
             <button
              onClick={() => setActiveTab('export')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'export' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Save className="w-4 h-4 mr-1.5" /> 5️⃣-8️⃣ Saving
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Layers className="w-4 h-4 mr-1.5" /> 9️⃣-1️⃣2️⃣ Pipelines
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-sky-600 text-white shadow-sky-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣3️⃣-1️⃣4️⃣ Tips
            </button>
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-auto"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6 pt-2">
                  
                  {/* Documentation Notice */}
                  <div className="bg-sky-50 dark:bg-sky-900/10 border-l-4 border-sky-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic">
                          After all the cleaning and analysis, the real value comes from sharing. <code>to_csv()</code> exports your work to a lightweight, universal format.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg tracking-tight">
                      <FileText className="w-5 h-5 text-sky-500 mr-2" />
                      1️⃣ What is to_csv()?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>to_csv()</code> is a Pandas method used to write a DataFrame to a CSV (Comma-Separated Values) file on your system.
                    </p>
                    <div className="mt-4 p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 group hover:border-sky-500/50 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                           <div className="flex -space-x-2">
                              <div className="w-8 h-8 rounded-full bg-sky-500 border-2 border-white dark:border-slate-900 z-10 flex items-center justify-center text-[10px] text-white font-bold font-mono italic">DF</div>
                              <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white dark:border-slate-900 flex items-center justify-center"><ArrowDownCircle className="w-4 h-4 text-white" /></div>
                           </div>
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] group-hover:text-sky-500 transition-colors">Export Logic</span>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg font-mono text-[10px] text-slate-500 leading-tight">
                           Name,Age,City<br/>John,25,Chennai<br/>Sara,30,Delhi
                        </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6 tracking-tight">
                      <Share2 className="w-5 h-5 text-indigo-500 mr-2" />
                      2️⃣ Why to_csv() is Important
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                         {[
                           { label: 'Export Datasets', icon: <FileDown className="w-3.5 h-3.5" /> },
                           { label: 'Share Results', icon: <Share2 className="w-3.5 h-3.5" /> },
                           { label: 'Save ML Models', icon: <HardDrive className="w-3.5 h-3.5" /> },
                           { label: 'Create Reports', icon: <FileText className="w-3.5 h-3.5" /> }
                         ].map((item) => (
                           <div key={item.label} className="p-3 bg-indigo-50/50 dark:bg-indigo-900/10 text-slate-700 dark:text-slate-300 rounded-xl border border-indigo-100 dark:border-indigo-800/50 flex items-center">
                              <span className="text-indigo-500 mr-2">{item.icon}</span>
                              <span className="text-[11px] font-bold">{item.label}</span>
                           </div>
                         ))}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-4 italic leading-relaxed">"Commonly used in data pipelines and engineering workflows to persist state."</p>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-widest text-slate-500 font-mono">
                       <Settings className="w-4 h-4 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto shadow-inner">
                       <code className="text-sky-400 font-mono text-sm block tracking-tighter">
                         {"DataFrame.to_csv(path_or_buf, index=True)"}
                       </code>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                       <div className="bg-slate-50 dark:bg-slate-900 p-2.5 rounded-lg border dark:border-slate-700 flex flex-col">
                          <span className="text-[9px] font-bold text-sky-600 mb-1">path_or_buf</span>
                          <span className="text-[9px] text-slate-500 italic uppercase">Target file path</span>
                       </div>
                       <div className="bg-slate-50 dark:bg-slate-900 p-2.5 rounded-lg border dark:border-slate-700 flex flex-col">
                          <span className="text-[9px] font-bold text-sky-600 mb-1">index</span>
                          <span className="text-[9px] text-slate-500 italic uppercase">Include labels?</span>
                       </div>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                       <Database className="w-5 h-5 text-indigo-500 mr-2" />
                       4️⃣ Initialize DataFrame Sequence
                    </h3>
                    <button onClick={() => runDemo('show_base')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-sky-500 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                        <div className="bg-sky-100 dark:bg-sky-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <Database className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Create In-Memory Object</p>
                          <p className="text-xs text-slate-500 italic">"Three students: Chennai, Delhi, Mumbai"</p>
                        </div>
                        <code className="text-[10px] font-bold text-sky-500 bg-sky-50 dark:bg-sky-900/30 px-2 py-1 rounded">MOUNT</code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'export' && (
                <div className="animate-fade-in space-y-6 pt-2">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <Save className="w-5 h-5 text-sky-500 mr-2" />
                        5️⃣ Standard Saving Command
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed border-l-2 border-sky-500/30 pl-3 italic">"Saves the file to your current project directory."</p>
                    <button onClick={() => runDemo('save_default')} className="w-full text-left group mt-4">
                       <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-sky-500 transition-all shadow-sm flex items-center">
                          <code className="text-[11px] font-bold text-sky-600 dark:text-sky-400">df.to_csv("students.csv")</code>
                          <Play className="w-4 h-4 ml-auto text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                       </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <Columns className="w-5 h-5 text-indigo-500 mr-2" />
                        6️⃣ Saving WITHOUT Index
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed border-l-2 border-indigo-500/30 pl-3 italic italic italic">"Remove internal Pandas IDs for a cleaner spreadsheet."</p>
                    <button onClick={() => runDemo('save_no_index')} className="w-full text-left group mt-4">
                       <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-inner group-hover:border-indigo-500 transition-colors">
                          <code className="text-[11px] font-bold text-indigo-400">index=False</code>
                          <p className="text-[10px] text-slate-500 mt-2">Essential for Excel-friendly exports.</p>
                       </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight uppercase text-[10px] tracking-widest text-slate-500">
                        7️⃣ Column Selection
                    </h3>
                    <div className="mt-4 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl group cursor-pointer" onClick={() => runDemo('save_cols')}>
                        <p className="text-[10px] font-extrabold text-sky-600 mb-3 uppercase tracking-widest leading-none">Privacy Filter</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block mb-2 font-mono">
                          {'columns=["Name","Age"]'}
                        </code>
                        <p className="text-[10px] text-slate-500 italic leading-tight">"Export only non-sensitive or relevant columns."</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <SlidersHorizontal className="w-4 h-4 mr-2" />
                        8️⃣ Changing the Separator (sep)
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-3 leading-relaxed italic italic">"Used when systems require semicolon (;) or tabs (\t) instead of commas."</p>
                    <button onClick={() => runDemo('save_sep')} className="w-full text-left group mt-4">
                       <div className="bg-sky-50 dark:bg-sky-900/10 p-4 rounded-xl border border-sky-100 dark:border-sky-800/50 flex items-center justify-between">
                          <code className="text-[11px] font-bold text-sky-600">sep=";"</code>
                          <ArrowRightLeft className="w-4 h-4 text-sky-500" />
                       </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6 pt-2">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <HardDrive className="w-5 h-5 text-amber-500 mr-2" />
                        9️⃣ Handling Large Datasets
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed bg-amber-50/50 dark:bg-amber-900/10 p-3 rounded-lg flex items-start italic">
                       <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                       "Pandas efficiently writes massive row-counts to disk without overflowing memory."
                    </p>
                  </section>

                  <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 overflow-hidden relative group">
                          <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3 flex items-center">
                             <BarChart3 className="w-4 h-4 mr-1.5 text-sky-500" />
                             🔟 Pre-Export Visualization
                          </h4>
                          <code className="text-[9px] block text-sky-400 mb-4 font-mono leading-tight tracking-tighter">
                             {"df.plot(kind='bar')\ndf.to_csv('results.csv')"}
                          </code>
                          <div className="flex flex-col items-center">
                             <div className="w-[120px] h-[55px] border-b border-l border-slate-700 flex items-end justify-around pb-0.5 px-2 relative">
                                <div className="w-[15%] bg-sky-500 h-[80%] rounded-t-sm"></div>
                                <div className="w-[15%] bg-sky-500 h-[60%] rounded-t-sm"></div>
                                <div className="w-[15%] bg-sky-500 h-[90%] rounded-t-sm"></div>
                                <div className="absolute right-0 top-0 opacity-10"><Share2 className="w-12 h-12" /></div>
                             </div>
                             <div className="w-[120px] flex justify-around mt-1">
                                {['J', 'S', 'M'].map(n => <span key={n} className="text-[7px] text-slate-600 font-bold">{n}</span>)}
                             </div>
                          </div>
                       </div>
                       <button onClick={() => runDemo('sales_report')} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl text-left hover:border-violet-500 transition-all shadow-sm">
                          <h4 className="font-bold text-violet-600 text-[10px] uppercase mb-2 flex items-center tracking-widest leading-none">
                             <TrendingUp className="w-4 h-4 mr-1.5" />
                             1️⃣1️⃣ Real-World (Sales)
                          </h4>
                          <p className="text-[10px] text-slate-500 mb-3 italic">"Share automated revenue reports with stakeholders."</p>
                          <code className="text-[9px] bg-violet-50 dark:bg-violet-950 p-2 rounded block border border-violet-100 dark:border-violet-900/50 text-violet-500 font-bold tracking-tight">
                             df.to_csv("sales_report.csv", index=False)
                          </code>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight transition-colors">
                        12. to_csv() vs Other Formats
                    </h3>
                    <div className="mt-4 shadow-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 font-sans">
                       <table className="w-full text-left text-[11px] sm:text-xs">
                          <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                            <tr><th className="p-3">Method</th><th className="p-3">File Type</th></tr>
                          </thead>
                          <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                             <tr className="border-b border-slate-100 dark:border-slate-800 font-mono font-bold italic"><td className="p-3 text-sky-500">to_csv()</td><td className="p-3 underline decoration-sky-500/30">Universal CSV</td></tr>
                             <tr className="border-b border-slate-100 dark:border-slate-800 font-mono font-bold"><td className="p-3 text-emerald-500 opacity-80">to_excel()</td><td className="p-3">Excel (.xlsx)</td></tr>
                             <tr className="border-b border-slate-100 dark:border-slate-800 font-mono font-bold text-[10px]"><td className="p-3 text-amber-500 opacity-80">to_json()</td><td className="p-3">Web JSON</td></tr>
                             <tr className="font-mono font-bold text-[10px]"><td className="p-3 text-violet-500 opacity-80">to_sql()</td><td className="p-3">Database Table</td></tr>
                          </tbody>
                       </table>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                        1️⃣3️⃣ Common Beginner Mistakes
                    </h3>
                    
                    <div className="space-y-4 mt-4 font-sans">
                       <div className="p-4 bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2">❌ Forgetting index=False</p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 italic">"This adds an unwanted Column '0' at the start of your CSV, cluttering Excel reports."</p>
                          <div className="flex gap-2 mt-3">
                             <code className="text-[9px] bg-slate-100 dark:bg-slate-950 p-1 rounded font-mono text-rose-500">,Name,Age</code>
                             <ArrowRight className="w-3 h-3 text-slate-400" />
                             <code className="text-[9px] bg-emerald-500/10 p-1 rounded font-mono text-emerald-500">Name,Age</code>
                          </div>
                       </div>

                       <button onClick={() => runDemo('mistake_path')} className="w-full text-left p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl hover:bg-amber-100 transition-all block group">
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-2 leading-none">❌ Non-Existent Directory</p>
                          <code className="text-[10px] text-amber-600 block mb-2 font-mono mt-2">df.to_csv("C:/unknown/data.csv")</code>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium italic">"Ensure the folder hierarchy exists before saving, or Pandas will crash."</p>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣4️⃣ Professional Advice (Tips & Tricks)
                    </h3>

                    <div className="space-y-4 mt-4 font-sans text-sans">
                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg mr-4 text-emerald-600 font-bold shrink-0">01</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none tracking-tight">Clean Before Export</p>
                               <p className="text-[11px] text-slate-500 leading-relaxed italic border-l-2 border-emerald-500/20 pl-2">"Always run .dropna() or .fillna() before to_csv() to avoid shipping 'messy' files to clients."</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg mr-4 text-sky-600 font-bold shrink-0">02</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none tracking-tight tracking-tight tracking-tight">Save Intermediate Results</p>
                               <p className="text-[10px] text-slate-500 mb-3 leading-relaxed">"In long pipelines, save 'stage1_output.csv' so you don't have to re-run heavy compute from scratch."</p>
                               <code className="text-[9px] bg-slate-950 p-2 rounded block text-sky-400 border border-slate-800 font-mono">
                                 {"df_stage.to_csv('checkpoint.csv')"}
                               </code>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group hover:border-violet-500 transition-colors cursor-pointer" onClick={() => runDemo('pipeline')}>
                            <div className="bg-violet-100 dark:bg-violet-900/30 p-2 rounded-lg mr-4 text-violet-600 font-bold shrink-0">03</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none tracking-tighter tracking-tighter">The Full Workflow Pipeline</p>
                               <p className="text-[10px] text-slate-500 mt-2 mb-3">Read Raw → Sanitize → Export Clean.</p>
                               <Play className="w-3.5 h-3.5 text-violet-500 animate-pulse" />
                            </div>
                         </div>
                    </div>
                  </section>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-12 xl:col-span-5 h-[500px] xl:h-auto">
            <div className="bg-[#0b0c10] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 xl:mt-0 font-mono">
               <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-sky-500/70" />
                     Disk IO Thread
                  </h3>
                  <div className="flex space-x-1.5 opacity-30">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[500px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-600 animate-pulse flex flex-col items-center justify-center mt-32 px-10 text-center">
                        <FileDown className="w-12 h-12 mb-4 opacity-10" />
                        <span className="text-[11px] font-extrabold uppercase tracking-widest opacity-40">Choose Format & Export</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Product') || line.includes('Revenue') ? 'text-sky-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1 tracking-wider' :
                              line.includes('FileNotFoundError') || line.includes('❌') || line.includes('ERROR') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded italic' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Laptop') ? 'text-indigo-300 font-bold' :
                              line.match(/^\d\s{2,}/) || line.match(/^[0-9],/) ? 'text-emerald-300 font-bold font-mono' :
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

export default PdToCsv;
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
const ArrowRightLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);
const ArrowDownCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);
