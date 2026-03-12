import React, { useState } from 'react';
import { 
  Calendar, Clock, Terminal, Lightbulb, 
  Settings, Database, Filter, 
  TrendingUp, Activity, AlertTriangle, 
  CheckCircle2, Table as TableIcon, 
  Layers, SearchCode, Play, MousePointer2,
  CalendarDays, Timer, RefreshCw
} from 'lucide-react';

const PdToDatetime: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'extraction' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          '         Date  Sales',
          '0  2024-01-01    100',
          '1  2024-01-02    150',
          '2  2024-01-03    200',
          '',
          '> print(df["Date"].dtype)',
          'object  # ❌ This is just a string!'
        ];
        break;
      case 'convert':
        outLines = [
          '> df["Date"] = pd.to_datetime(df["Date"])',
          '> print(df["Date"].dtype)',
          'datetime64[ns]  # ✅ Successfully converted!',
          '',
          '> # Now we can perform time-math.'
        ];
        break;
      case 'extract':
        outLines = [
          '> df["Year"] = df["Date"].dt.year',
          '> df["Month"] = df["Date"].dt.month',
          '> df["Day"] = df["Date"].dt.day',
          '        Date  Year  Month  Day',
          '0 2024-01-01  2024      1    1',
          '1 2024-01-02  2024      1    2'
        ];
        break;
      case 'formats':
        outLines = [
          '> # Handling "DD-MM-YYYY"',
          '> pd.to_datetime("31-12-2024", format="%d-%m-%Y")',
          'Timestamp("2024-12-31 00:00:00")',
          '',
          '> # Errors="coerce" handles bad dates:',
          '> pd.to_datetime(["2024-01-01", "Invalid"], errors="coerce")',
          '0   2024-01-01',
          '1          NaT',
          'dtype: datetime64[ns]'
        ];
        break;
      case 'time_index':
        outLines = [
          '> df.set_index("Date", inplace=True)',
          '> print(df.index)',
          'DatetimeIndex(["2024-01-01", "2024-01-02", "2024-01-03"],',
          '              dtype="datetime64[ns]", name="Date", freq=None)',
          '',
          '> # Now we can do: df.resample("M").sum()'
        ];
        break;
      case 'stock_demo':
        outLines = [
          '> # Real-World: Stock Price Movement',
          '> df["Price"].diff()',
          'Date',
          '2024-01-01    NaN',
          '2024-01-02    5.0',
          '2024-01-03   -3.0'
        ];
        break;
      case 'mistake_format':
        outLines = [
          '> pd.to_datetime("02/01/2024")',
          'Timestamp("2024-02-01 00:00:00")  # Is this Feb 1st?',
          '',
          '> # ❌ AMBIGUITY! Use dayfirst=True for UK/EU formats:',
          '> pd.to_datetime("02/01/2024", dayfirst=True)',
          'Timestamp("2024-01-02 00:00:00")  # Ah, Jan 2nd!'
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
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50 group hover:rotate-3 transition-transform">
          <Calendar className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Chronology <code className="text-indigo-600 dark:text-indigo-400 text-3xl sm:text-4xl bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.to_datetime()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Unlock the fourth dimension. The <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200 font-bold uppercase tracking-wide">to_datetime()</code> function bridges the gap between static strings and dynamic time-series intelligence.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-indigo-500" />
            Time Machine Terminal
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Clock className="w-4 h-4 mr-1.5" /> 1️⃣-6️⃣ Conversion
            </button>
             <button
              onClick={() => setActiveTab('extraction')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'extraction' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <CalendarDays className="w-4 h-4 mr-1.5" /> 7️⃣-9️⃣ Attributes
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Activity className="w-4 h-4 mr-1.5" /> 🔟-1️⃣2️⃣ Analysis
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣3️⃣-1️⃣4️⃣ Pro Tips
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
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic">
                          "2024-01-01" as a string is just text. As a datetime object, it knows it's a Monday, that it's in Q1, and how many seconds have passed since the previous record.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg tracking-tight">
                      <Clock className="w-5 h-5 text-indigo-500 mr-2" />
                      1️⃣ What is to_datetime()?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>to_datetime()</code> is a core Pandas function used to convert date strings or other representations into standardized internal datetime format.
                    </p>
                    <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center group">
                        <div className="flex gap-4 items-center transition-all group-hover:scale-105">
                           <div className="px-3 py-2 bg-slate-200 dark:bg-slate-800 rounded font-mono text-[10px] text-slate-500">"2024-01-01"</div>
                           <RefreshCw className="w-4 h-4 text-indigo-500 animate-spin-slow" />
                           <div className="px-3 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded font-mono text-[10px] text-indigo-600 font-bold">Timestamp(2024-01-01)</div>
                        </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6 tracking-tight">
                      <TrendingUp className="w-5 h-5 text-emerald-500 mr-2" />
                      2️⃣ Why to_datetime() is Important
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                         {[
                           { label: 'Time-Series Analysis', icon: <Activity className="w-3.5 h-3.5" /> },
                           { label: 'Date Filtering', icon: <Filter className="w-3.5 h-3.5" /> },
                           { label: 'Extract Components', icon: <Layers className="w-3.5 h-3.5" /> },
                           { label: 'Resampling Logic', icon: <RefreshCw className="w-3.5 h-3.5" /> }
                         ].map((item) => (
                           <div key={item.label} className="p-3 bg-emerald-50/50 dark:bg-emerald-900/10 text-slate-700 dark:text-slate-300 rounded-xl border border-emerald-100 dark:border-emerald-800/50 flex items-center">
                              <span className="text-emerald-500 mr-2">{item.icon}</span>
                              <span className="text-[11px] font-bold">{item.label}</span>
                           </div>
                         ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-widest text-slate-500 font-mono">
                       <Settings className="w-4 h-4 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto shadow-inner">
                       <code className="text-indigo-400 font-mono text-sm block tracking-tighter">
                         {"pd.to_datetime(arg, format=None, errors='raise', dayfirst=False)"}
                       </code>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                       <Database className="w-5 h-5 text-sky-500 mr-2" />
                       4️⃣-6️⃣ Conversion Lifecycle
                    </h3>
                    <div className="flex flex-col gap-4 mt-4">
                        <button onClick={() => runDemo('show_base')} className="w-full text-left group">
                          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-indigo-500 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                            <div className="bg-indigo-100 dark:bg-indigo-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                              <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-slate-900 dark:text-white text-sm tracking-tight">Step 4: Load Str-Dataset</p>
                              <p className="text-xs text-slate-500 italic">"Dates stored as text/object type."</p>
                            </div>
                            <code className="text-[10px] font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">LOAD</code>
                          </div>
                        </button>

                        <button onClick={() => runDemo('convert')} className="w-full text-left group">
                          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-emerald-500 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                            <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                              <Timer className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-slate-900 dark:text-white text-sm tracking-tight">Step 5/6: Transform & Verify</p>
                              <p className="text-xs text-slate-500 italic">"Confirm dtype: datetime64[ns]"</p>
                            </div>
                            <code className="text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded tracking-tighter uppercase whitespace-nowrap">DTYPE SYNC</code>
                          </div>
                        </button>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'extraction' && (
                <div className="animate-fade-in space-y-6 pt-2">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <Layers className="w-5 h-5 text-indigo-500 mr-2" />
                        7️⃣ Extracting Date Components
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed border-l-2 border-indigo-500/30 pl-3 italic">"Use the .dt accessor to pluck specific parts of the date."</p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                         {[
                           { name: 'Year', cmd: 'dt.year' },
                           { name: 'Month', cmd: 'dt.month' },
                           { name: 'Day', cmd: 'dt.day' },
                           { name: 'Weekday', cmd: 'dt.weekday' }
                         ].map(part => (
                           <div key={part.name} className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center group hover:border-indigo-500 transition-colors">
                              <span className="text-[10px] font-bold text-slate-400 tracking-widest">{part.name}</span>
                              <code className="text-[10px] text-indigo-400 font-mono">{part.cmd}</code>
                           </div>
                         ))}
                    </div>
                    <button onClick={() => runDemo('extract')} className="mt-4 w-full p-3 bg-indigo-600 text-white rounded-xl font-bold text-xs flex items-center justify-center hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
                       <Play className="w-4 h-4 mr-2" /> RUN EXTRACTION ENGINE
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <SearchCode className="w-5 h-5 text-amber-500 mr-2" />
                        8️⃣ Custom Date Formats
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-3 leading-relaxed italic border-l-2 border-amber-500/30 pl-3 italic italic italic">"Handling non-standard dates like 'DD-MM-YYYY'."</p>
                    <div className="mt-4 p-4 bg-amber-50/20 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl">
                       <code className="text-[11px] font-bold text-amber-600 dark:text-amber-400 font-mono">
                          {'format="%d-%m-%Y"'}
                       </code>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight uppercase text-[10px] tracking-widest text-slate-500">
                        9️⃣ Error Handling Strategies
                    </h3>
                    <button onClick={() => runDemo('formats')} className="w-full mt-4 flex flex-col gap-2">
                       <div className="w-full flex gap-3">
                          <div className="flex-1 p-3 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-left">
                             <p className="text-[10px] font-black text-indigo-500 mb-1 leading-none uppercase">Errors="coerce"</p>
                             <p className="text-[9px] text-slate-500 leading-tight">Invalid dates become NaT (Not a Time).</p>
                          </div>
                          <div className="flex-1 p-3 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-left">
                             <p className="text-[10px] font-black text-rose-500 mb-1 leading-none uppercase">Errors="raise"</p>
                             <p className="text-[9px] text-slate-500 leading-tight">Crashes if any format is bad (Default).</p>
                          </div>
                       </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6 pt-2">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <Filter className="w-5 h-5 text-sky-500 mr-2" />
                        🔟 Time-Series Indexing
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed border-l-2 border-sky-500/30 pl-3 italic italic">"Promoting the Date column to the Index for powerful time-slicing."</p>
                    <button onClick={() => runDemo('time_index')} className="w-full text-left group mt-4">
                       <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 group-hover:border-sky-500 transition-colors">
                          <code className="text-[11px] font-bold text-sky-400">df.set_index("Date", inplace=True)</code>
                          <p className="text-[9px] text-slate-500 mt-2 font-mono italic">"Turns rows into chronological pointers."</p>
                       </div>
                    </button>
                  </section>

                  <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 overflow-hidden relative group">
                          <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3 flex items-center">
                             <TrendingUp className="w-4 h-4 mr-1.5 text-indigo-500" />
                             1️⃣1️⃣ Trend Visualization
                          </h4>
                          <code className="text-[9px] block text-indigo-400 mb-4 font-mono leading-tight tracking-tighter">
                             {"df.plot(x='Date', kind='line')"}
                          </code>
                          <div className="flex flex-col items-center">
                             <div className="w-[120px] h-[55px] border-b border-l border-slate-700 relative flex items-end px-2">
                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                   <path d="M0,80 L33,40 L66,35 L100,5" fill="none" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                                <div className="absolute right-0 top-0 opacity-10 animate-pulse"><TrendingUp className="w-12 h-12" /></div>
                             </div>
                             <div className="w-[120px] flex justify-around mt-1">
                                {['Jan1', 'Jan2', 'Jan3'].map(n => <span key={n} className="text-[7px] text-slate-600 font-bold tracking-tighter">{n}</span>)}
                             </div>
                          </div>
                       </div>
                       <button onClick={() => runDemo('stock_demo')} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl text-left hover:border-emerald-500 transition-all shadow-sm">
                          <h4 className="font-bold text-emerald-600 text-[10px] uppercase mb-2 flex items-center tracking-widest leading-none">
                             <Activity className="w-4 h-4 mr-1.5" />
                             1️⃣2️⃣ Real-World (Stocks)
                          </h4>
                          <p className="text-[10px] text-slate-500 mb-3 italic">"Calculate daily price changes using datetime logic."</p>
                          <code className="text-[9px] bg-emerald-50 dark:bg-emerald-950 p-2 rounded block border border-emerald-100 dark:border-emerald-900/50 text-emerald-500 font-bold tracking-tight">
                             df["Price"].diff()
                          </code>
                       </button>
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
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2">❌ Skipping Conversion</p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 italic font-medium">"Trying to resample or filter by date on a string column will crash your code. Always convert first!"</p>
                       </div>

                       <button onClick={() => runDemo('mistake_format')} className="w-full text-left p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl hover:bg-amber-100 transition-all block group">
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-2 leading-none">❌ Ambiguous Formats (02/01)</p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium italic mt-2 italic italic">"Interpretation varies between countries. Use dayfirst=True for DMY formats."</p>
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
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-4 text-indigo-600 font-bold shrink-0">01</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none tracking-tight">Convert Early</p>
                               <p className="text-[11px] text-slate-500 leading-relaxed border-l-2 border-indigo-500/20 pl-2">"Make datetime conversion the second line of your script right after reading the CSV."</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg mr-4 text-emerald-600 font-bold shrink-0">02</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none tracking-tight tracking-tight tracking-tight">Post-Conversion Resampling</p>
                               <p className="text-[10px] text-slate-500 mb-3 leading-relaxed">"Set the date as index to enable powerful resampling: sum by Month, Year, etc."</p>
                               <code className="text-[9px] bg-slate-950 p-2 rounded block text-emerald-400 border border-slate-800 font-mono">
                                 {".resample('M').sum()"}
                               </code>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group hover:border-indigo-500 transition-colors cursor-pointer">
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-4 text-indigo-600 font-bold shrink-0">03</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none tracking-tighter">Seasonality Insights</p>
                               <p className="text-[10px] text-slate-500 mt-2 mb-3">Extract day names or weekday numbers to identify weekend sales trends.</p>
                               <div className="flex gap-2">
                                  <code className="text-[9px] bg-indigo-50 dark:bg-indigo-900/30 p-1 px-2 rounded border border-indigo-100 dark:border-indigo-800/50 text-indigo-600">.day_name()</code>
                                  <code className="text-[9px] bg-indigo-50 dark:bg-indigo-900/30 p-1 px-2 rounded border border-indigo-100 dark:border-indigo-800/50 text-indigo-600">.weekday</code>
                               </div>
                            </div>
                         </div>
                    </div>
                  </section>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-12 xl:col-span-5 h-[500px] xl:h-auto font-mono">
            <div className="bg-[#0b0c10] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 xl:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-indigo-500/70" />
                     Datetime Engine
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
                        <Calendar className="w-12 h-12 mb-4 opacity-10" />
                        <span className="text-[11px] font-extrabold uppercase tracking-widest opacity-40">Choose Op & Transform</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Date') || line.includes('Sales') || line.includes('Year') || line.includes('Month') || line.includes('Day') || line.includes('Price') ? 'text-indigo-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1 tracking-wider' :
                              line.includes('Invalid') || line.includes('❌') || line.includes('TypeError') || line.includes('raise') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded italic' :
                              line.includes('2024') || line.includes('Jan') || line.includes('Timestamp') ? 'text-indigo-400 font-bold' :
                              line.match(/^\d+/) || line.match(/^[0-9.-]/) || line.includes('NaT') ? 'text-emerald-300 font-bold font-mono' :
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

export default PdToDatetime;
