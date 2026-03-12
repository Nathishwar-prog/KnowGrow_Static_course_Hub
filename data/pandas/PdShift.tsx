import React, { useState } from 'react';
import { 
  ArrowDownCircle, ArrowUpCircle, Terminal, Lightbulb, 
  Settings, History, TrendingUp, TrendingDown,
  AlertTriangle, CheckCircle2, Table as TableIcon, 
  LineChart, Activity, Layers, Play
} from 'lucide-react';

const PdShift: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'shifting' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          '   Day  Sales',
          '0  Mon    100',
          '1  Tue    150',
          '2  Wed    200',
          '3  Thu    180'
        ];
        break;
      case 'shift_down':
        outLines = [
          '> # shift(1) moves indices down',
          '> df["Prev"] = df["Sales"].shift(1)',
          '   Day  Sales   Prev',
          '0  Mon    100    NaN',
          '1  Tue    150  100.0',
          '2  Wed    200  150.0',
          '3  Thu    180  200.0',
          '',
          '> # Value from Mon (100) now aligns with Tue.'
        ];
        break;
      case 'shift_up':
        outLines = [
          '> # shift(-1) moves indices up',
          '> df["Next"] = df["Sales"].shift(-1)',
          '   Day  Sales   Next',
          '0  Mon    100  150.0',
          '1  Tue    150  200.0',
          '2  Wed    200  180.0',
          '3  Thu    180    NaN',
          '',
          '> # Value from Tue (150) now aligns with Mon.'
        ];
        break;
      case 'shift_multi':
        outLines = [
          '> # Shifting by 2 periods',
          '> df["Lag2"] = df["Sales"].shift(2)',
          '   Day  Sales   Lag2',
          '0  Mon    100    NaN',
          '1  Tue    150    NaN',
          '2  Wed    200  100.0',
          '3  Thu    180  150.0'
        ];
        break;
      case 'diff_logic':
        outLines = [
          '> # Calculating manual difference',
          '> df["Growth"] = df["Sales"] - df["Sales"].shift(1)',
          '   Day  Sales  Growth',
          '0  Mon    100     NaN',
          '1  Tue    150    50.0',
          '2  Wed    200    50.0',
          '3  Thu    180   -20.0',
          '',
          '> # Logic: Current Sales - Yesterday\'s Sales'
        ];
        break;
      case 'stock_example':
        outLines = [
          '> # Financial Model: Price Change',
          '> df["Change"] = df["Price"] - df["Price"].shift(1)',
          '   Date  Price  Change',
          '0  Day1    100     NaN',
          '1  Day2    105     5.0',
          '2  Day3    102    -3.0'
        ];
        break;
      case 'mistake_fill':
        outLines = [
          '> df["Shifted"].fillna(0)',
          '   Day  Sales  Shifted',
          '0  Mon    100      0.0  # NaN replaced with 0!',
          '1  Tue    150    100.0'
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
        <div className="inline-flex items-center justify-center p-4 bg-violet-100 dark:bg-violet-900/30 rounded-2xl mb-6 shadow-sm border border-violet-200 dark:border-violet-800/50">
          <History className="w-10 h-10 text-violet-600 dark:text-violet-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Sequential Flow <code className="text-violet-600 dark:text-violet-400 text-3xl sm:text-4xl bg-violet-50 dark:bg-violet-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.shift()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Unlock time-series insights. The <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">shift()</code> method slides your data across the index for powerful lag analysis and trend comparisons.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-violet-500" />
            Lag/Lead Terminal
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Layers className="w-4 h-4 mr-1.5" /> 1️⃣-3️⃣ Principles
            </button>
             <button
              onClick={() => setActiveTab('shifting')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'shifting' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ArrowDownCircle className="w-4 h-4 mr-1.5" /> 5️⃣-7️⃣ Shifting
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <TrendingUp className="w-4 h-4 mr-1.5" /> 8️⃣-1️⃣1️⃣ Growth
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
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
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Documentation Notice */}
                  <div className="bg-violet-50 dark:bg-violet-900/10 border-l-4 border-violet-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Sequential data analysis often requires comparing <strong>today's</strong> value with <strong>yesterday's</strong>. <code>shift()</code> makes this possible by moving values along the time axis.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg">
                      <History className="w-5 h-5 text-violet-500 mr-2" />
                      1️⃣ What is shift()?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>shift()</code> is a Pandas method used to move values up or down by a specified number of positions, creating "lags" or "leads" in your dataset.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                      <TrendingUp className="w-5 h-5 text-indigo-500 mr-2" />
                      2️⃣ Why shift() is Important
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                         {['Calculate growth', 'Financial modeling', 'Create lag features', 'Analyze trends'].map((item) => (
                           <div key={item} className="p-3 bg-indigo-50/50 dark:bg-indigo-900/10 text-slate-700 dark:text-slate-300 rounded-xl border border-indigo-100 dark:border-indigo-800/50 flex items-center">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 mr-2 shrink-0" />
                              <span className="text-[11px] font-bold">{item}</span>
                           </div>
                         ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-widest text-slate-500">
                       <Settings className="w-4 h-4 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto shadow-inner">
                       <code className="text-violet-400 font-mono text-sm block">
                         {"df.shift(periods=1, axis=0)"}
                       </code>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                       <div className="p-3 bg-violet-50 dark:bg-violet-900/20 rounded-xl border border-violet-100 dark:border-violet-800/50">
                          <p className="text-[10px] font-bold text-violet-600 mb-1">PERIODS</p>
                          <p className="text-[10px] text-slate-500 uppercase font-black">+ = down, - = up</p>
                       </div>
                       <div className="p-3 bg-violet-50 dark:bg-violet-900/20 rounded-xl border border-violet-100 dark:border-violet-800/50">
                          <p className="text-[10px] font-bold text-violet-600 mb-1">AXIS</p>
                          <p className="text-[10px] text-slate-500 uppercase font-black">0=rows, 1=cols</p>
                       </div>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <TableIcon className="w-5 h-5 text-emerald-500 mr-2" />
                       4️⃣ Initialize Data Sequence
                    </h3>
                    <button onClick={() => runDemo('show_base')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-violet-500 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                        <div className="bg-violet-100 dark:bg-violet-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <Layers className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Load Sales Time-Series</p>
                          <p className="text-xs text-slate-500 italic">"Mon to Thu (100, 150, 200, 180)"</p>
                        </div>
                        <code className="text-[10px] font-bold text-violet-500 bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">BUILD</code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'shifting' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <ArrowDownCircle className="w-5 h-5 text-rose-500 mr-2" />
                        5️⃣ Shifting Down (Lag)
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed italic">"Moves values forward in time. Row 0 moves to Row 1. Creates NaN at start."</p>
                    <button onClick={() => runDemo('shift_down')} className="w-full text-left group mt-4">
                       <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-rose-500 transition-all shadow-sm flex items-center">
                          <div className="bg-rose-50 dark:bg-rose-900/40 p-2.5 rounded-lg mr-4 group-hover:animate-bounce">
                             <ArrowDownCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                          </div>
                          <code className="text-[11px] font-bold text-rose-600 dark:text-rose-400">df["Sales"].shift(1)</code>
                       </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <ArrowUpCircle className="w-5 h-5 text-emerald-500 mr-2" />
                        6️⃣ Shifting Up (Lead)
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed italic">"Moves values backward in time. Row 1 moves to Row 0. Creates NaN at end."</p>
                    <button onClick={() => runDemo('shift_up')} className="w-full text-left group mt-4">
                       <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-inner group-hover:border-emerald-500 transition-all">
                          <code className="text-[11px] font-bold text-emerald-400 block mb-2">
                             {"df['Sales'].shift(-1)"}
                          </code>
                          <p className="text-[10px] text-slate-500">Perfect for predicting "tomorrow's" value against "today's" data.</p>
                       </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-xs uppercase tracking-widest text-slate-500">
                        7️⃣ Multiple Periods
                    </h3>
                    <div className="mt-4 p-5 bg-violet-50/20 dark:bg-violet-900/10 border-l-4 border-violet-500 rounded-xl relative group">
                        <p className="text-[10px] font-bold text-slate-500 mb-3 uppercase tracking-widest">Compare 2 Days Ago</p>
                        <button onClick={() => runDemo('shift_multi')} className="group flex items-center">
                           <code className="text-[11px] font-bold text-violet-700 dark:text-violet-400 block bg-white dark:bg-slate-950 p-3 rounded-lg border border-violet-100 dark:border-violet-900/50">
                             {'df["Sales"].shift(2)'}
                           </code>
                           <Play className="w-4 h-4 ml-3 text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <TrendingDown className="w-5 h-5 text-sky-500 mr-2" />
                        8️⃣ Calculating Differences
                    </h3>
                    <div className="mt-4 bg-sky-50/20 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-800/50 p-5 rounded-2xl group cursor-pointer" onClick={() => runDemo('diff_logic')}>
                       <p className="text-[11px] text-slate-600 dark:text-slate-400 font-bold mb-3 uppercase tracking-widest">Core Formula</p>
                       <code className="text-[10px] sm:text-[11px] font-bold text-sky-700 dark:text-sky-400 block bg-white dark:bg-slate-950 p-3 rounded-lg border border-sky-200 dark:border-sky-800 shadow-sm leading-relaxed mb-4">
                          {'df["Change"] = df["Sales"] - df["Sales"].shift(1)'}
                       </code>
                       <div className="flex items-center text-[10px] text-slate-500 font-medium italic">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5" />
                          Returns how much sales grew compared to the previous row.
                       </div>
                    </div>
                  </section>

                  <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 overflow-hidden relative">
                          <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3 flex items-center">
                             <LineChart className="w-4 h-4 mr-1.5 text-violet-500" />
                             9️⃣ Visualization Trend
                          </h4>
                          <div className="flex flex-col items-center">
                             <div className="w-[120px] h-[60px] border-b border-l border-slate-700 relative flex items-end px-2">
                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                   <path d="M0,80 L33,40 L66,20 L100,50" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                                <div className="absolute right-2 top-2 opacity-5"><Activity className="w-12 h-12" /></div>
                             </div>
                             <span className="text-[7px] text-slate-600 font-bold uppercase mt-1 tracking-widest">Mon Tue Wed Thu</span>
                          </div>
                       </div>
                       <button onClick={() => runDemo('stock_example')} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl text-left hover:border-violet-500 transition-all shadow-sm">
                          <h4 className="font-bold text-violet-600 text-[10px] uppercase mb-2 flex items-center">
                             <TrendingUp className="w-4 h-4 mr-1.5" />
                             🔟 Real-World (Stocks)
                          </h4>
                          <p className="text-[10px] text-slate-500 mb-3 italic">"Analyze daily movement in prices."</p>
                          <code className="text-[10px] bg-slate-50 dark:bg-slate-950 p-2 rounded block border border-violet-100 dark:border-violet-900/50 text-violet-500 font-mono">
                             df["Price"] - df["Price"].shift(1)
                          </code>
                       </button>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <ArrowDownCircle className="w-5 h-5 text-rose-500 mr-2" />
                        1️⃣1️⃣ shift() vs diff()
                    </h3>
                    <table className="w-full text-left text-[11px] border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm mt-4">
                       <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                         <tr><th className="p-3">Function</th><th className="p-3">Purpose</th></tr>
                       </thead>
                       <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                         <tr className="border-b border-slate-100 dark:border-slate-800 font-mono"><td className="p-3 font-bold text-violet-500">shift()</td><td className="p-3">Move values (creating lags)</td></tr>
                         <tr className="font-mono"><td className="p-3 font-bold text-sky-500">diff()</td><td className="p-3">Calculate subtraction automatically</td></tr>
                       </tbody>
                    </table>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                        1️⃣2️⃣ Common Beginner Mistakes
                    </h3>
                    
                    <div className="space-y-4 mt-4">
                       <button onClick={() => runDemo('mistake_fill')} className="w-full text-left p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-xl hover:bg-amber-100 transition-colors block group">
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-2">❌ Forgetting Missing Values</p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 italic">"Shifting always creates NaNs. Your analysis might break if you don't handle them."</p>
                          <code className="text-[10px] mt-2 block font-bold text-amber-600 bg-white dark:bg-slate-950 p-1.5 rounded border border-amber-100 dark:border-amber-900 w-fit">USE .fillna(0)</code>
                       </button>

                       <div className="p-4 bg-rose-50/50 dark:bg-rose-900/10 border border-slate-200 dark:border-slate-800 rounded-xl">
                          <p className="text-[10px] font-bold text-rose-600 mb-1 uppercase tracking-widest">❌ Direction Logic</p>
                          <div className="flex gap-4 mt-2">
                             <div className="p-2.5 bg-white dark:bg-slate-950 rounded border dark:border-slate-900 flex-1 text-center"><span className="text-[10px] font-bold">shift(1) DOWN</span></div>
                             <div className="p-2.5 bg-white dark:bg-slate-950 rounded border dark:border-slate-900 flex-1 text-center"><span className="text-[10px] font-bold">shift(-1) UP</span></div>
                          </div>
                       </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣3️⃣ Professional Tips & Tricks
                    </h3>

                    <div className="space-y-4 mt-4 font-sans">
                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-violet-100 dark:bg-violet-900/30 p-2 rounded-lg mr-4 text-violet-600 font-bold shrink-0">01</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">ML Lag Features</p>
                               <p className="text-[11px] text-slate-500 leading-relaxed italic">"Always shift your 'target' variable back by 1 or 2 periods to create input features for forecasting models."</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-4 text-indigo-600 font-bold shrink-0">02</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none tracking-tight">Combine with Rolling</p>
                               <p className="text-[10px] text-slate-500 mt-2 mb-3">Calculate moving averages on shifted data for smoothed trend analysis.</p>
                               <code className="text-[9px] sm:text-[10px] bg-slate-950 p-2 rounded block text-emerald-400 border border-slate-800 font-bold w-fit">
                                 {"df.rolling(3).mean()"}
                               </code>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group hover:border-emerald-500 transition-colors cursor-pointer" onClick={() => runDemo('diff_logic')}>
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg mr-4 text-emerald-600 font-bold shrink-0">03</div>
                            <div className="flex-1 text-sans">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">Percentage Growth</p>
                               <code className="text-[9px] bg-slate-950 p-2 rounded block text-sky-400 border border-slate-800 mt-2 font-bold w-fit">
                                 {"(current - lag) / lag"}
                               </code>
                               <p className="text-[9px] text-slate-500 mt-2 italic">Essential for sales performance reports.</p>
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
            <div className="bg-[#0c0c0e] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-violet-500/70" />
                     Sequential Stream
                  </h3>
                  <div className="flex space-x-1.5 opacity-30">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[500px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-600 animate-pulse flex flex-col items-center justify-center mt-32 px-10 text-center">
                        <History className="w-12 h-12 mb-4 opacity-10 rotate-180" />
                        <span className="text-[11px] font-bold uppercase tracking-widest opacity-40">Load Time-Series & Shift</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Day') || line.includes('Sales') || line.includes('Prev') || line.includes('Next') || line.includes('Price') ? 'text-violet-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1' :
                              line.includes('NaN') || line.includes('❌') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded' :
                              line.match(/^\d+/) || line.match(/^[A-Z][a-z]{2}/) || line.includes('Growth') || line.includes('Change') ? 'text-emerald-300/80' :
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

export default PdShift;
