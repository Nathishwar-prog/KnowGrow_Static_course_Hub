import React, { useState } from 'react';
import {
  FileSpreadsheet, Save, Terminal, Lightbulb,
  Settings, Database, FileText,
  Share2, AlertTriangle,
  Table as TableIcon, BarChart3,
  Layers, Columns, Play,
  ListFilter, Activity, Package as PipIcon,
  BookOpen, FolderClosed,
  SearchCode
} from 'lucide-react';

const PdToExcel: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'intro' | 'ops' | 'reports' | 'pro'>('intro');

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
      case 'save_simple':
        outLines = [
          '> df.to_excel("students.xlsx")',
          '> # [SYSTEM] Initializing openpyxl engine...',
          '> # [DISK] Writing 3 records to students.xlsx',
          '',
          'Inside Excel (Sheet1):',
          '|   | A    | B    | C      | D      |',
          '|---|------|------|--------|--------|',
          '| 1 |      | Name | Age    | City   |',
          '| 2 | 0    | John | 25     | Chennai|',
          '| 3 | 1    | Sara | 30     | Delhi  |',
          '',
          '> # Notice the index (0, 1, 2) in Column A.'
        ];
        break;
      case 'no_index':
        outLines = [
          '> df.to_excel("students.xlsx", index=False)',
          '> # File created successfully.',
          '',
          'Inside Excel (Cleaned):',
          '|   | A    | B    | C      |',
          '|---|------|------|--------|',
          '| 1 | Name | Age  | City   |',
          '| 2 | John | 25   | Chennai|',
          '| 3 | Sara | 30   | Delhi  |'
        ];
        break;
      case 'multi_sheet':
        outLines = [
          '> with pd.ExcelWriter("report.xlsx") as writer:',
          '>     df.to_excel(writer, sheet_name="Students")',
          '>     df.to_excel(writer, sheet_name="Backup")',
          '',
          '> [SUCCESS] Multiple sheets written.',
          'Tabs created: [Students] [Backup]'
        ];
        break;
      case 'sales_export':
        outLines = [
          '> df_summary = df.groupby("Product").sum()',
          '> df_summary.to_excel("sales_report.xlsx", index=False)',
          '',
          'Excel Export Results:',
          'Product    Revenue',
          'Laptop     120000',
          'Phone       90000',
          'Tablet      60000'
        ];
        break;
      case 'error_missing':
        outLines = [
          '> df.to_excel("data.xlsx")',
          'ImportError: Missing optional dependency \'openpyxl\'.',
          '',
          '> # ❌ ERROR: You need the engine installed!',
          '> # Solution: pip install openpyxl'
        ];
        break;
      default:
        outLines = ['Action not recognized.'];
    }
    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200 leading-relaxed overflow-x-hidden">

      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800/50 group hover:scale-105 transition-all">
          <FileSpreadsheet className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Spreadsheet <code className="text-emerald-600 dark:text-emerald-400 text-3xl sm:text-4xl bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.to_excel()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed italic">
          Powering Business Intelligence. Move your Python analytics into the hands of stakeholders with high-fidelity Excel exports.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-emerald-500" />
            Excel Export Terminal
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end font-sans">
            <button
              onClick={() => setActiveTab('intro')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'intro' ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BookOpen className="w-4 h-4 mr-1.5" /> 1️⃣-5️⃣ Intro
            </button>
            <button
              onClick={() => setActiveTab('ops')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'ops' ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Layers className="w-4 h-4 mr-1.5" /> 6️⃣-1️⃣0️⃣ Operations
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'reports' ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart3 className="w-4 h-4 mr-1.5" /> 1️⃣1️⃣-1️⃣3️⃣ Analytics
            </button>
            <button
              onClick={() => setActiveTab('pro')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'pro' ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣4️⃣-1️⃣5️⃣ Tips
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
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto font-sans">

              {activeTab === 'intro' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  {/* Point 1: What is to_excel? */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 p-4 rounded-r-lg shadow-sm font-sans italic">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Excel is the universal language of business. <code>to_excel()</code> ensures your Python analysis is accessible to managers, stakeholders, and teams globally.
                    </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg tracking-tight">
                      <FileSpreadsheet className="w-5 h-5 text-emerald-500 mr-2" />
                      1️⃣ What is to_excel()?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>to_excel()</code> is a Pandas method used to write a DataFrame to an Excel file (.xlsx or .xls).
                    </p>
                    <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 overflow-hidden group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">In-Memory DataFrame</span>
                        <Play className="w-4 h-4 text-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <table className="w-full text-[10px] text-left">
                        <thead>
                          <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/50">
                            <th className="p-2">Name</th><th className="p-2">Age</th><th className="p-2">City</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-500">
                          <tr><td className="p-2">John</td><td className="p-2">25</td><td className="p-2">Chennai</td></tr>
                          <tr className="bg-emerald-500/5"><td className="p-2">Sara</td><td className="p-2">30</td><td className="p-2">Delhi</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Point 2: Why important? */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6 tracking-tight">
                      <Share2 className="w-5 h-5 text-indigo-500 mr-2" />
                      2️⃣ Key Use Cases
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      {[
                        { label: 'Business Reports', icon: <FileText className="w-3.5 h-3.5" /> },
                        { label: 'Financial Analysis', icon: <Activity className="w-3.5 h-3.5" /> },
                        { label: 'Data Sharing', icon: <Share2 className="w-3.5 h-3.5" /> },
                        { label: 'Dashboard Prep', icon: <BarChart3 className="w-3.5 h-3.5" /> }
                      ].map((item) => (
                        <div key={item.label} className="p-3 bg-indigo-50/50 dark:bg-indigo-900/10 text-slate-700 dark:text-slate-300 rounded-xl border border-indigo-100 dark:border-indigo-800/50 flex items-center">
                          <span className="text-indigo-500 mr-2">{item.icon}</span>
                          <span className="text-[11px] font-bold">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Point 3: Syntax */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-[0.2em] text-slate-500 font-mono">
                      <Settings className="w-4 h-4 mr-2" />
                      3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto shadow-inner">
                      <code className="text-emerald-400 font-mono text-sm block tracking-tighter">
                        {"df.to_excel(excel_writer, index=True, sheet_name='Sheet1')"}
                      </code>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded-lg border dark:border-slate-700 text-center">
                        <p className="text-[8px] font-black text-emerald-600 mb-0.5">WRITER</p>
                        <p className="text-[8px] text-slate-500 italic">File Path</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded-lg border dark:border-slate-700 text-center">
                        <p className="text-[8px] font-black text-emerald-600 mb-0.5">INDEX</p>
                        <p className="text-[8px] text-slate-500 italic">Keep IDs?</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded-lg border dark:border-slate-700 text-center">
                        <p className="text-[8px] font-black text-emerald-600 mb-0.5">COLUMNS</p>
                        <p className="text-[8px] text-slate-500 italic">Select Cols</p>
                      </div>
                    </div>
                  </section>

                  {/* Point 4: Installing */}
                  <section className="bg-amber-50/50 dark:bg-amber-900/10 p-5 rounded-2xl border border-amber-100 dark:border-amber-800/30">
                    <h3 className="font-bold text-amber-800 dark:text-amber-400 flex items-center text-sm mb-3">
                      <PipIcon className="w-4 h-4 mr-2" />
                      4️⃣ Engine Requirement
                    </h3>
                    <p className="text-[10px] text-amber-700/80 dark:text-amber-300/80 mb-3 italic">
                      Pandas uses <strong>openpyxl</strong> to write Excel files. You must install it via pip:
                    </p>
                    <div className="bg-[#0b0c10] p-3 rounded-lg flex items-center group relative overflow-hidden">
                      <code className="text-amber-400 font-mono text-xs">pip install openpyxl</code>
                      <Terminal className="absolute right-3 w-4 h-4 text-slate-700 group-hover:text-amber-500/50 transition-colors" />
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                      <Database className="w-5 h-5 text-indigo-500 mr-2" />
                      5️⃣ Set In-Memory Stage
                    </h3>
                    <button onClick={() => runDemo('show_base')} className="w-full text-left group mt-4 font-sans">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-emerald-500 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                        <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <Database className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Create Primary Sheet</p>
                          <p className="text-xs text-slate-500 italic">"John, Sara, Mike (Cities & Ages)"</p>
                        </div>
                        <code className="text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded tracking-tighter uppercase font-mono">MOUNT</code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'ops' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  {/* Point 6: Basic Export */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                      <Save className="w-5 h-5 text-emerald-500 mr-2" />
                      6️⃣ Initial Export Command
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed border-l-2 border-emerald-500/30 pl-3 italic">"Generates the file in your current working directory."</p>
                    <button onClick={() => runDemo('save_simple')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-emerald-500 transition-all shadow-sm flex items-center group overflow-hidden">
                        <code className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">df.to_excel("students.xlsx")</code>
                        <Play className="w-4 h-4 ml-auto text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  </section>

                  {/* Point 7: Export Without Index */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight font-sans">
                      <ListFilter className="w-5 h-5 text-indigo-500 mr-2" />
                      7️⃣ Stripping the Index
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed italic border-l-2 border-indigo-500/30 pl-3 italic">"Discard Pandas-generated IDs for a stakeholder-ready file."</p>
                    <button onClick={() => runDemo('no_index')} className="w-full text-left mt-4 group">
                      <div className="bg-[#0b0c10] border border-slate-800 p-4 rounded-xl shadow-inner group-hover:border-indigo-500 transition-colors">
                        <code className="text-indigo-400 text-[11px] font-bold">index=False</code>
                        <div className="flex gap-2 mt-3 opacity-30">
                          <div className="w-4 h-2 bg-rose-500 rounded"></div>
                          <div className="w-20 h-2 bg-slate-700 rounded"></div>
                        </div>
                      </div>
                    </button>
                  </section>

                  {/* Point 8/9: Specific Cols / Sheet Name */}
                  <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-5 rounded-2xl group hover:border-emerald-500 transition-all shadow-sm">
                        <Columns className="w-5 h-5 text-emerald-400 mb-3" />
                        <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">8️⃣ Targeted Extraction</h4>
                        <code className="text-[10px] text-emerald-600 font-bold block mb-2">columns=["Name", "Age"]</code>
                        <p className="text-[9px] text-slate-500 leading-tight italic">Export only the features you need.</p>
                      </div>
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-5 rounded-2xl group hover:border-indigo-500 transition-all shadow-sm">
                        <FolderClosed className="w-5 h-5 text-indigo-400 mb-3" />
                        <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">9️⃣ Custom Labelling</h4>
                        <code className="text-[10px] text-indigo-600 font-bold block mb-2">sheet_name="StudentData"</code>
                        <p className="text-[9px] text-slate-500 leading-tight italic">Rename the internal Excel tab.</p>
                      </div>
                    </div>
                  </section>

                  {/* Point 10: Multiple Sheets */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                      <Layers className="w-5 h-5 text-sky-500 mr-2" />
                      🔟 Power Writing (Multiple Sheets)
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed border-l-2 border-sky-500/30 pl-3 italic">"Use ExcelWriter to pack multiple DataFrames into one file."</p>
                    <button onClick={() => runDemo('multi_sheet')} className="w-full text-left group mt-4 font-sans">
                      <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden group-hover:border-sky-500 transition-colors">
                        <code className="block text-[10px] text-sky-300 font-mono leading-relaxed group-hover:text-white transition-colors">
                          {"with pd.ExcelWriter('report.xlsx') as writer:"}<br />
                          {"    df.to_excel(writer, sheet_name='Primary')"}<br />
                          {"    df_bk.to_excel(writer, sheet_name='Backup')"}
                        </code>
                        <Layers className="absolute right-4 bottom-4 w-12 h-12 text-sky-500/10" />
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'reports' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  {/* Point 11: Viz */}
                  <section>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-hidden relative group">
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-4 flex items-center tracking-widest leading-none">
                        <BarChart3 className="w-4 h-4 mr-1.5 text-emerald-500" />
                        1️⃣1️⃣ Pre-Export Visualization
                      </h4>
                      <div className="flex flex-col items-center">
                        <div className="w-[160px] h-[75px] border-b border-l border-slate-700 flex items-end justify-around pb-0.5 px-3 relative">
                          <div className="w-[18%] bg-emerald-500/80 h-[45%] rounded-t-sm animate-pulse"></div>
                          <div className="w-[18%] bg-emerald-500/80 h-[75%] rounded-t-sm"></div>
                          <div className="w-[18%] bg-emerald-500/80 h-[95%] rounded-t-sm animate-pulse"></div>
                        </div>
                        <div className="w-[160px] flex justify-around mt-2">
                          {['John', 'Sara', 'Mike'].map(n => <span key={n} className="text-[8px] text-slate-600 font-bold uppercase tracking-tighter">{n}</span>)}
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-500 text-center mt-6 italic">"Verify magnitudes visually before committing to the disk."</p>
                    </div>
                  </section>

                  {/* Point 12: Real World Example */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight font-sans">
                      <Activity className="w-5 h-5 text-indigo-500 mr-2" />
                      1️⃣2️⃣ Business Reporting Workflow
                    </h3>
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl mt-4 flex items-start group shadow-sm">
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2.5 rounded-xl mr-5">
                        <TableIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">Automated Sales Deck</p>
                        <p className="text-[11px] text-slate-500 leading-relaxed italic border-l-2 border-indigo-500/20 pl-2 mt-2">
                          Generate Laptop (120k), Phone (90k), and Tablet (60k) summaries for direct managerial review.
                        </p>
                        <button onClick={() => runDemo('sales_export')} className="mt-4 text-[10px] font-bold text-indigo-500 hover:text-indigo-600 flex items-center group">
                          EXECUTE REPORT <Play className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* Point 13: to_excel vs to_csv */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight transition-colors">
                      13. Formats Comparison Matrix
                    </h3>
                    <div className="mt-4 shadow-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 font-sans">
                      <table className="w-full text-left text-[11px] sm:text-xs">
                        <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                          <tr><th className="p-3">Method</th><th className="p-3">Primary Target</th><th className="p-4">Key Advantage</th></tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-sans">
                          <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 text-emerald-500 font-bold">to_excel()</td><td className="p-3">Business Stakeholders</td><td className="p-4 italic">Rich formatting, sheets</td></tr>
                          <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 text-sky-500 font-bold opacity-80">to_csv()</td><td className="p-3">Developers / Systems</td><td className="p-4 italic">Lightweight, Universal</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'pro' && (
                <div className="animate-fade-in space-y-6 pt-2 font-sans">

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                      <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                      14. Common Beginner Pitfalls
                    </h3>

                    <div className="space-y-4 mt-4">
                      <button onClick={() => runDemo('error_missing')} className="w-full text-left p-4 bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl group relative overflow-hidden">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase underline decoration-rose-500/30">❌ Missing Dependency</p>
                          <SearchCode className="w-4 h-4 text-rose-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-[10px] text-slate-600 dark:text-slate-400 italic">"ImportError: Missing optional dependency 'openpyxl'. Always PIP install before writing."</p>
                      </button>

                      <div className="p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-xl">
                        <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-2">❌ Row ID Clutter</p>
                        <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed italic">"Forgetting index=False result in an unwanted numeric column (0, 1, 2) in your final Excel report."</p>
                        <button onClick={() => runDemo('no_index')} className="mt-2 text-[9px] font-bold text-emerald-600 underline">VIEW CLEAN VERSION</button>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight font-sans italic">
                      <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                      1️⃣5️⃣ The Professional Edge (Tips & Tricks)
                    </h3>

                    <div className="space-y-4 mt-6">
                      {[
                        {
                          id: '01',
                          color: 'emerald',
                          title: 'Sanitized Exports',
                          desc: 'Always call .dropna() before to_excel(). Business teams don\'t want to see "NaN" in their reports.',
                          code: 'df_clean.to_excel("final.xlsx")'
                        },
                        {
                          id: '02',
                          color: 'indigo',
                          title: 'Monthly Analytics Automation',
                          desc: 'Pipe your groupby summaries directly into Excel format for recurring staff meetings.',
                          code: 'df.groupby("Day").mean()'
                        },
                        {
                          id: '03',
                          color: 'sky',
                          title: 'Multi-Sheet Backup',
                          desc: 'Write your current results and a "Backup/Original" snapshot into the same file using ExcelWriter.',
                          code: 'with pd.ExcelWriter()...'
                        }
                      ].map((tip) => (
                        <div key={tip.id} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group hover:border-emerald-500/50 transition-colors">
                          <div className={`bg-${tip.color}-100 dark:bg-${tip.color}-900/30 p-2.5 rounded-xl mr-5 text-sm font-black text-${tip.color}-600 shrink-0`}>
                            {tip.id}
                          </div>
                          <div className="flex-1">
                            <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-2 leading-tight tracking-tighter">{tip.title}</p>
                            <p className="text-[10px] text-slate-500 leading-relaxed mb-3 italic">{tip.desc}</p>
                            <code className={`text-[9px] bg-slate-50 dark:bg-slate-950 px-2 py-1 rounded border dark:border-slate-800 text-${tip.color}-500 font-mono italic`}>
                              {tip.code}
                            </code>
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
          <div className="lg:col-span-12 xl:col-span-5 h-[500px] xl:h-auto font-mono">
            <div className="bg-[#0b0c10] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 xl:mt-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                    <Terminal className="w-4 h-4 mr-2 text-emerald-500/70" />
                    Excel IO Engine
                  </h3>
                  <div className="flex space-x-1.5 opacity-30">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                </div>

                <div className="text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[500px] font-mono leading-relaxed tracking-tight">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-600 animate-pulse flex flex-col items-center justify-center mt-32 px-10 text-center">
                      <FileSpreadsheet className="w-12 h-12 mb-4 opacity-10" />
                      <span className="text-[11px] font-extrabold uppercase tracking-widest opacity-40">Choose Export Method & Commit</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => {
                      return (
                        <div key={i} className={`animate-fade-in whitespace-pre ${line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                            line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Product') || line.includes('Revenue') ? 'text-emerald-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1 tracking-wider' :
                              line.includes('ImportError') || line.includes('❌') || line.includes('ERROR') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded italic' :
                                line.includes('John') || line.includes('Sara') || line.includes('Mike') || line.includes('Laptop') ? 'text-sky-300 font-bold' :
                                  line.match(/^\|/) || line.match(/^[0-9]\s{5,}/) ? 'text-emerald-300/80 font-mono' :
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

export default PdToExcel;
