import React, { useState } from 'react';
import { 
  History, Terminal, Lightbulb, 
  Settings, Clock, Database,
  TrendingDown, TrendingUp, AlertTriangle, CheckCircle2,
  Table as TableIcon, LineChart as ChartIcon, Calendar,
  Activity, Play
} from 'lucide-react';

const PdResample: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'rules' | 'logic' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'simple_resample':
        outLines = [
          '> # Converting Daily Sales to Monthly Totals',
          '> df.resample("M").sum()',
          '            Revenue',
          'Date               ',
          '2024-01-31    45000',
          '2024-02-29    38000',
          '2024-03-31    52000',
          '',
          '> # Downsampling successful. 90 rows reduced to 3.'
        ];
        break;
      case 'upsample_fill':
        outLines = [
          '> # Weekly to Daily (Upsampling)',
          '> df.resample("D").ffill()',
          '            Price',
          '2024-01-01    150',
          '2024-01-02    150  # Filled from previous',
          '2024-01-03    150  # Filled from previous',
          '2024-01-04    162  # New weekly point',
          '',
          '> # Used .ffill() to prevent NaN gaps in high-frequency data.'
        ];
        break;
      case 'multi_agg':
        outLines = [
          '> # Weekly analysis: Sum and Mean',
          '> df.resample("W").agg(["sum", "mean"])',
          '             Revenue       ',
          '                 sum   mean',
          '2024-01-07     14000   2000',
          '2024-01-14     15400   2200'
        ];
        break;
      case 'error_no_index':
        outLines = [
          '> df.resample("M")',
          'TypeError: Only valid with DatetimeIndex, TimedeltaIndex...',
          '',
          '> # ❌ ERROR: Your index is NOT a DatetimeIndex!',
          '> # Fix: df.index = pd.to_datetime(df.index)'
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
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-2xl mb-6 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <History className="w-10 h-10 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Time Mastery <code className="text-teal-600 dark:text-teal-400 text-3xl sm:text-4xl bg-teal-50 dark:bg-teal-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.resample()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The heartbeat of Time-Series Analysis. <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">resample()</code> allows you to change data frequency—from milliseconds to years—with a single command.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Activity className="w-8 h-8 mr-3 text-teal-500" />
            Time Engine Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Calendar className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Fundamentals
            </button>
             <button
              onClick={() => setActiveTab('rules')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'rules' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Clock className="w-4 h-4 mr-1.5" /> 5️⃣-9️⃣ Frequency
            </button>
            <button
              onClick={() => setActiveTab('logic')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'logic' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <TrendingUp className="w-4 h-4 mr-1.5" /> 🔟-1️⃣1️⃣ Advanced
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣2️⃣-1️⃣3️⃣ Tips
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
                  <div className="bg-teal-50 dark:bg-teal-900/10 border-l-4 border-teal-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic">
                          Imagine you have sensor data recorded every minute, but you want to see the hourly average. This process is called <strong>Resampling</strong>.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg">
                      <Calendar className="w-5 h-5 text-teal-500 mr-2" />
                      1️⃣ What is <code className="text-teal-500 ml-2">resample()</code>?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>resample()</code> is a Pandas method used for frequency conversion and resampling of time-series data. It is a powerful version of <code>groupby()</code> specifically designed for dates and times.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                      <Activity className="w-5 h-5 text-indigo-500 mr-2" />
                      2️⃣ Why it is Important
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                         {[
                           { title: 'Stock Analysis', desc: 'Convert tick data to daily bars.' },
                           { title: 'Weather Logs', desc: 'Average hourly temps to monthly.' },
                           { title: 'Sales Trends', desc: 'Sum daily profits into quarterly.' },
                           { title: 'Sensor Data', desc: 'Reduce noise in high-freq logs.' }
                         ].map((item) => (
                           <div key={item.title} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700">
                             <p className="text-[11px] font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-tighter mb-1">{item.title}</p>
                             <p className="text-[10px] text-slate-500 dark:text-slate-400">{item.desc}</p>
                           </div>
                         ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-widest text-slate-500">
                       <Settings className="w-4 h-4 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 shadow-inner">
                       <code className="text-teal-400 font-mono text-sm block">
                         {"df.resample(rule).agg_function()"}
                       </code>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-2 pl-1">Note: Always follow <code>resample()</code> with an aggregation like <code>.sum()</code> or <code>.mean()</code>.</p>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <Database className="w-5 h-5 text-emerald-500 mr-2" />
                       4️⃣ Prerequisites (The Legend)
                    </h3>
                    <div className="mt-4 p-4 bg-emerald-50/50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 rounded-lg">
                        <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-2">CRITICAL REQUIREMENT</p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          Your DataFrame <strong>MUST</strong> have a <code>DatetimeIndex</code>. If your dates are in a column, convert them first:
                        </p>
                        <code className="text-[10px] block bg-white dark:bg-slate-950 p-2 mt-2 rounded border border-emerald-100 dark:border-emerald-800 text-teal-600 font-bold">
                          {"df.index = pd.to_datetime(df['date_column'])"}
                        </code>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'rules' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <TrendingDown className="w-5 h-5 text-teal-500 mr-2" />
                        5️⃣ Downsampling (High frequency → Low)
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed italic">"Reducing 1 minute data to 1 hour data. Requires aggregation (sum, mean, etc)."</p>
                    <button onClick={() => runDemo('simple_resample')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-teal-500 transition-all shadow-sm flex items-center group-active:scale-[0.98]">
                        <div className="bg-teal-100 dark:bg-teal-900/40 p-3 rounded-xl mr-4">
                          <Play className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Monthly Revenue Sum</p>
                          <code className="text-[10px] text-teal-600 dark:text-teal-400">df.resample('M').sum()</code>
                        </div>
                      </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <TrendingUp className="w-5 h-5 text-indigo-500 mr-2" />
                        6️⃣ Upsampling (Low frequency → High)
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed italic">"Converting Monthly data to Daily. Creates gaps that must be filled."</p>
                    <button onClick={() => runDemo('upsample_fill')} className="w-full text-left group mt-4">
                       <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-inner group-hover:border-indigo-500 transition-all">
                          <code className="text-[11px] font-bold text-indigo-400 block mb-2">
                             {"df.resample('D').ffill()"}
                          </code>
                          <p className="text-[10px] text-slate-500">The <code>.ffill()</code> (forward fill) propagates the last valid observation forward.</p>
                       </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-xs uppercase tracking-widest text-slate-500">
                        8️⃣ Common Frequency Rules
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
                         {[
                           { rule: 'D', label: 'Daily' },
                           { rule: 'W', label: 'Weekly' },
                           { rule: 'M', label: 'Monthly' },
                           { rule: 'Q', label: 'Quarterly' },
                           { rule: 'A', label: 'Annual' },
                           { rule: 'H', label: 'Hourly' },
                           { rule: 'T', label: 'Minutes' },
                           { rule: 'S', label: 'Seconds' }
                         ].map(item => (
                           <div key={item.rule} className="flex flex-col items-center p-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                              <span className="text-xs font-extrabold text-teal-600">{item.rule}</span>
                              <span className="text-[9px] text-slate-400 uppercase font-bold">{item.label}</span>
                           </div>
                         ))}
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'logic' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <ChartIcon className="w-5 h-5 text-teal-500 mr-2" />
                        🔟 Aggregation & Visualization
                    </h3>
                    <div className="mt-4 bg-slate-950 p-5 rounded-2xl border border-slate-800 relative group overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <ChartIcon className="w-24 h-24" />
                       </div>
                       <code className="text-[11px] text-emerald-400 block mb-4">
{`# Multi-stat Resampling
df.resample('W').agg(['sum', 'mean']).plot()`}
                       </code>
                       
                       {/* Mock Chart */}
                       <div className="h-24 w-full flex items-end gap-1 mt-4 px-2">
                          {[30, 45, 25, 60, 40, 70, 55].map((h, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-teal-500 to-teal-300 rounded-sm" style={{ height: `${h}%` }}></div>
                          ))}
                       </div>
                       <div className="flex justify-between px-2 mt-2">
                          <span className="text-[8px] text-slate-600 font-bold">JAN</span>
                          <span className="text-[8px] text-slate-600 font-bold">MAR</span>
                          <span className="text-[8px] text-slate-600 font-bold">MAY</span>
                       </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <TrendingUp className="w-5 h-5 text-indigo-500 mr-2" />
                        1️⃣1️⃣ Real World Example
                    </h3>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-5 rounded-xl mt-4">
                       <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 mb-2">Stock Market Volatility</h4>
                       <p className="text-[11px] text-slate-500 leading-relaxed italic mb-4">
                         "Calculate the monthly standard deviation (Risk) of a stock from daily closing prices."
                       </p>
                       <code className="text-[11px] font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-950 p-2 rounded block w-fit border border-indigo-100 dark:border-indigo-900">
                         df['Close'].resample('M').std()
                       </code>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                        1️⃣2️⃣ Common Beginner Mistakes
                    </h3>
                    
                    <div className="space-y-4 mt-4">
                       <button onClick={() => runDemo('error_no_index')} className="w-full text-left p-4 bg-rose-50/50 dark:bg-rose-900/10 border-l-4 border-rose-500 rounded-xl hover:bg-rose-50 transition-colors block group">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2">❌ Forgetting DatetimeIndex</p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 italic">"Trying to resample a DataFrame indexed by simple integers (0, 1, 2...)"</p>
                          <code className="text-[10px] mt-3 block font-bold text-rose-600 bg-white dark:bg-slate-950 p-1.5 rounded w-fit border border-rose-100 dark:border-rose-900">CLICK TO SEE ERROR</code>
                       </button>

                       <div className="p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl">
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-1">❌ Missing Aggregation</p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400">Running <code>df.resample('M')</code> returns a resampler object, not your data. You MUST call <code>.sum()</code>, <code>.mean()</code>, etc. immediately after.</p>
                       </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣3️⃣ Professional Tips & Tricks
                    </h3>

                    <div className="space-y-4 mt-4 text-sans">
                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg mr-4 text-teal-600 font-bold shrink-0">01</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">The 'on' Parameter</p>
                               <p className="text-[11px] text-slate-500 leading-relaxed">If your dates aren't in the index, use <code>resample('D', on='date_col')</code> to avoid resetting the index.</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-4 text-indigo-600 font-bold shrink-0">02</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">Combining with asfreq()</p>
                               <p className="text-[11px] text-slate-500 mt-2">Use <code>.asfreq()</code> for raw frequency conversion without aggregation when upsampling.</p>
                               <code className="text-[10px] bg-slate-950 p-2 rounded block text-emerald-400 border border-slate-800 mt-3 font-bold w-fit">df.resample('H').asfreq()</code>
                            </div>
                         </div>
                    </div>
                  </section>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5 h-[500px] lg:h-auto">
            <div className="bg-[#0c0d0e] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-teal-500/70" />
                     Time Series Stream
                  </h3>
                  <div className="flex space-x-1.5 opacity-40">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[500px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-600 animate-pulse flex flex-col items-center justify-center mt-32 px-10 text-center">
                        <History className="w-12 h-12 mb-4 opacity-10" />
                        <span className="text-[11px] font-bold uppercase tracking-widest opacity-40">Load Time Index & Resample</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Date') || line.includes('Revenue') || line.includes('Price') || line.includes('sum') || line.includes('mean') ? 'text-teal-300 font-bold border-b border-slate-800/30 block mt-2 mb-1' :
                              line.includes('Error') || line.includes('❌') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded' :
                              line.match(/2024-\d{2}-\d{2}/) ? 'text-sky-300' :
                              line.match(/^\d+/) || line.match(/\s\d+/) ? 'text-emerald-300/80' :
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

export default PdResample;
