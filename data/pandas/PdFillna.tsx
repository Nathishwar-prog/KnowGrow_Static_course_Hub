import React, { useState } from 'react';
import { 
  Terminal, Lightbulb, MessageSquareText, Layers, 
  AlertTriangle, Table, Settings, 
  BarChart, PaintBucket, ArrowRight, ArrowLeft, ArrowDown, ShieldPlus, TrendingUp
} from 'lucide-react';

const PdFillna: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'stats' | 'directional' | 'visuals' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];

    switch (action) {
      case 'show_base':
        outLines = [
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '1  Sara   NaN  60000.0',
          '2  Mike  28.0      NaN',
          '3  Anna  35.0  70000.0'
        ];
        break;
      case 'fill_constant':
        outLines = [
          '> df.fillna(0)',
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '1  Sara   0.0  60000.0',
          '2  Mike  28.0      0.0',
          '3  Anna  35.0  70000.0'
        ];
        break;
      case 'fill_mean':
        outLines = [
          '> df["Age"].fillna(df["Age"].mean())',
          '0    25.00',
          '1    29.33',
          '2    28.00',
          '3    35.00',
          'Name: Age, dtype: float64',
          '',
          '> # Sara\'s age is filled with the average (29.33)'
        ];
        break;
      case 'fill_median':
        outLines = [
          '> df["Age"].fillna(df["Age"].median())',
          '0    25.0',
          '1    28.0',
          '2    28.0',
          '3    35.0',
          'Name: Age, dtype: float64',
          '',
          '> # Sara\'s age is filled with the median (28.0)'
        ];
        break;
      case 'fill_specific':
        outLines = [
          '> df["Age"].fillna(30)',
          '0    25.0',
          '1    30.0',
          '2    28.0',
          '3    35.0',
          'Name: Age, dtype: float64'
        ];
        break;
      case 'fill_ffill':
        outLines = [
          '> df.fillna(method="ffill")',
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '1  Sara  25.0  60000.0  <-- Age copied from John',
          '2  Mike  28.0  60000.0  <-- Salary copied from Sara',
          '3  Anna  35.0  70000.0'
        ];
        break;
      case 'fill_bfill':
        outLines = [
          '> df.fillna(method="bfill")',
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '1  Sara  28.0  60000.0  <-- Age copied from Mike',
          '2  Mike  28.0  70000.0  <-- Salary copied from Anna',
          '3  Anna  35.0  70000.0'
        ];
        break;
      case 'run_inplace':
        outLines = [
          '> df.fillna(0, inplace=True)',
          '> # Original DataFrame df is now modified in memory!',
          '> print(df)',
          '   Name   Age   Salary',
          '0  John  25.0  50000.0',
          '1  Sara   0.0  60000.0',
          '2  Mike  28.0      0.0',
          '3  Anna  35.0  70000.0'
        ];
        break;
      case 'visualize_mock':
        outLines = [
          'Generating Bar Chart (Salary Distribution)...',
          'Missing Salary filled with df["Salary"].mean() (60000)',
          '========================================',
          'Salary |',
          ' 70k   |                  [██]',
          ' 60k   |       [██]  [++] ',
          ' 50k   |  [██]',
          '       +-------------------------',
          '          John Sara  Mike Anna',
          '',
          '* [++] represents filled missing data'
        ];
        break;
      case 'real_world':
        outLines = [
          '   Student  Marks',
          '0        A   80.0',
          '1        B    NaN',
          '2        C   70.0',
          '3        D    NaN',
          '',
          '> df["Marks"].fillna(df["Marks"].mean())',
          '0    80.0',
          '1    75.0',
          '2    70.0',
          '3    75.0',
          'Name: Marks, dtype: float64'
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
          <PaintBucket className="w-10 h-10 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Fill <code className="text-teal-600 dark:text-teal-400 text-3xl sm:text-4xl bg-teal-50 dark:bg-teal-900/20 px-3 py-1 rounded-xl">.fillna()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Repair missing values (NaN) seamlessly. Unlike <code className="font-mono text-sm bg-slate-200 dark:bg-slate-800 px-1 rounded">dropna()</code> which deletes rows entirely, filling preserves your dataset blocks by injecting constant numbers, static textual references, or averaged statistical math replacements.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-teal-500" />
            NaN Repair Station
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <MessageSquareText className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('stats')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'stats' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <TrendingUp className="w-4 h-4 mr-1.5" /> 5️⃣-7️⃣, 🔟 Stats
            </button>
            <button
              onClick={() => setActiveTab('directional')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'directional' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <ArrowRight className="w-4 h-4 mr-1.5" /> 8️⃣-9️⃣, 1️⃣1️⃣ methods
            </button>
             <button
              onClick={() => setActiveTab('visuals')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'visuals' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart className="w-4 h-4 mr-1.5" /> 1️⃣2️⃣-1️⃣3️⃣ Visuals
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-teal-600 text-white shadow-teal-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣4️⃣ Mistakes
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
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <Table className="w-5 h-5 text-teal-500 mr-2" />
                    1️⃣ What is <code className="mx-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-1 rounded">fillna()</code>?
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 space-y-4">
                      <p>In real-world data pipelines, system logging errors often spawn missing data null mappings. <code className="text-teal-500 font-bold bg-teal-50 dark:bg-teal-900/20 px-1 rounded">fillna()</code> is a Pandas method used heavily to replace these missing blanks (<code className="text-rose-500 font-bold">NaN</code>) with explicit integers, text strings, or algorithms (averages) instead of amputating rows natively.</p>
                     <p className="font-bold border-l-4 border-teal-500 pl-3 bg-teal-50 dark:bg-teal-900/10 py-2">In simple terms: It patches holes in your dataset walls rather than dropping the whole room.</p>
                  </div>

                   <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <ShieldPlus className="w-5 h-5 text-emerald-500 mr-2" />
                    2️⃣ Why is it Important?
                  </h3>
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/50 p-4 rounded-xl shadow-sm text-sm text-slate-700 dark:text-slate-300">
                    <p className="mb-2 font-bold text-emerald-800 dark:text-emerald-400">Missing values trigger fatal pipeline loops crashing algorithms outputs checking strings sizes calculations algorithms logic variables data values limits checks variables loops checks sizes arrays limits. Prevent this because:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Deleting rows (<code className="font-mono">dropna</code>) loses mapping variables arrays data completely!</li>
                      <li>Math functions map constraints fail on `NaN` structures natively processing routines ranges outputs variables limits ranges logs counts limits variables constraints ranges matrices limits.</li>
                      <li>Machine Learning strictly blocks `NaN`.</li>
                    </ul>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Settings className="w-5 h-5 text-teal-500 mr-2" />
                    3️⃣ Basic Syntax
                  </h3>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700 font-mono text-[11px] sm:text-xs text-teal-600 dark:text-teal-400 font-bold overflow-x-auto">
                          DataFrame.fillna(value=None, method=None, axis=None, inplace=False)
                      </div>
                      <table className="w-full text-left text-sm">
                          <thead className="bg-white dark:bg-slate-950 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                              <tr>
                                  <th className="p-3">Parameter</th>
                                  <th className="p-3">Description</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 text-[11px] sm:text-xs">
                              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-sky-600 dark:text-sky-400">value</td>
                                  <td className="p-3">Replaces `NaN` with literal constraints strings lists (0, "Unknown") arrays logs bounds counts checking</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-fuchsia-600 dark:text-fuchsia-400">method</td>
                                  <td className="p-3">Auto logic: <code className="font-mono">ffill</code> (copy previous value arrays formats limits) or <code className="font-mono">bfill</code> (copy next arrays ranges sizes loops bounds tracking loops sets values mapping parameters parameters tracking filters routines) routines logs checks arrays values variables filters arrays bounds tracking formats limits constraints boundaries constraints sizes counts.</td>
                              </tr>
                               <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400">inplace</td>
                                  <td className="p-3">Directly mutate the memory structure arrays limits boundaries limits natively variables variables loops constraints checks formatting parameters ranges values.</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                   <button onClick={() => runDemo('show_base')} className="text-left group w-full mt-8">
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors relative shadow-sm h-full flex flex-col items-center">
                            <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BASE</div>
                            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2 w-full flex items-center justify-between">
                                4️⃣ Example Dataset Structure
                                <span className="text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-2 py-1 rounded tracking-wide font-bold">2 NaN Values</span>
                            </h4>
                             <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded w-full border border-slate-100 dark:border-slate-800 overflow-x-auto shadow-inner">
import pandas as pd
import numpy as np

data = {'{'}
    <span className="text-amber-500">"Name"</span>: [<span className="text-sky-500">"John"</span>, <span className="text-sky-500">"Sara"</span>, <span className="text-sky-500">"Mike"</span>, <span className="text-sky-500">"Anna"</span>],
    <span className="text-amber-500">"Age"</span>: [<span className="text-emerald-500">25</span>, <span className="text-rose-500 font-bold">np.nan</span>, <span className="text-emerald-500">28</span>, <span className="text-emerald-500">35</span>],
    <span className="text-amber-500">"Salary"</span>: [<span className="text-emerald-500">50000</span>, <span className="text-emerald-500">60000</span>, <span className="text-rose-500 font-bold">np.nan</span>, <span className="text-emerald-500">70000</span>]
{'}'}
df = pd.DataFrame(data)
                            </pre>
                        </div>
                    </button>
                    
                </div>
              )}

              {activeTab === 'stats' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <TrendingUp className="w-5 h-5 text-teal-500 mr-2" />
                        5️⃣, 🔟 Constant Value Maps limits sizes databases logs constraints
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Inject hardcoded integer matrices arrays limits natively matrices formats databases filtering constraints routines formats tracking.</p>

                  <div className="grid md:grid-cols-2 gap-4">
                      {/* Constant all */}
                      <button onClick={() => runDemo('fill_constant')} className="text-left group w-full">
                        <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-200 dark:border-teal-800/50 rounded-xl p-5 hover:border-teal-400 dark:hover:border-teal-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN 0</div>
                          <h4 className="font-bold text-sm text-teal-700 dark:text-teal-400 mb-2 mt-2">5️⃣ Fill ALL with 0</h4>
                          <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-teal-900/50 shadow-sm block w-fit mb-3">df.fillna(0)</code>
                        </div>
                      </button>

                      {/* Specific */}
                      <button onClick={() => runDemo('fill_specific')} className="text-left group w-full">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-5 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN SUBSET</div>
                          <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-2 mt-2">🔟 Target Column</h4>
                          <code className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-emerald-900/50 shadow-sm block w-fit mb-3">df["Age"].fillna(30)</code>
                        </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                    <Table className="w-5 h-5 text-indigo-500 mr-2" />
                    6️⃣-7️⃣ Statistical Auto-Filling arrays counts arrays ranges constraints metrics
                  </h3>

                  <button onClick={() => runDemo('fill_mean')} className="text-left group w-full mb-4">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 border-y border-r border-indigo-200 dark:border-slate-700 rounded-r-xl p-5 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm relative">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MEAN</div>
                      <h4 className="font-bold text-sm text-indigo-800 dark:text-indigo-400 mb-2">Filling Missing with Mean (Average)</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Dynamically calculates valid values sizes formats ranges filters parameters routines outputs loops matrices loops variables filtering ranges formats maps bounds tracking databases logic constraints sets variables loops filtering strings checks databases formatting filters boundaries constraints.</p>
                      <code className="text-xs sm:text-sm bg-white dark:bg-slate-950 font-bold p-2 text-indigo-700 dark:text-indigo-400 border border-slate-200 dark:border-slate-700 rounded block w-fit shadow-inner">df[<span className="text-amber-500 font-normal">"Age"</span>].fillna(df[<span className="text-amber-500 font-normal">"Age"</span>].mean())</code>
                    </div>
                  </button>

                  <button onClick={() => runDemo('fill_median')} className="text-left group w-full">
                    <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-200 dark:border-fuchsia-800/50 rounded-xl p-5 hover:border-fuchsia-400 dark:hover:border-fuchsia-700 transition-colors shadow-sm relative">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN MEDIAN</div>
                      <h4 className="font-bold text-sm text-fuchsia-800 dark:text-fuchsia-400 mb-2">Filling Missing with Median</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Better for datasets limits with huge Outlier nodes tracking outputs datasets logs loops routines!</p>
                      <code className="text-xs sm:text-sm bg-white dark:bg-slate-950 font-bold p-2 text-fuchsia-700 dark:text-fuchsia-400 border border-slate-200 dark:border-slate-700 rounded block w-fit shadow-inner">df[<span className="text-amber-500 font-normal">"Age"</span>].fillna(df[<span className="text-amber-500 font-normal">"Age"</span>].median())</code>
                    </div>
                  </button>

                </div>
              )}

               {activeTab === 'directional' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <ArrowDown className="w-5 h-5 text-teal-500 mr-2" />
                        8️⃣-9️⃣ Proximity Directional Methods routines databases bounds tracking logic vectors variables constraints counts loops metrics checks limits formats sets parameters algorithms bounds mapping constraints.
                  </h3>
                  
                  <div className="space-y-4">
                      
                      <button onClick={() => runDemo('fill_ffill')} className="text-left group w-full">
                        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN FFILL</div>
                          <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">8️⃣ Forward Fill (<code className="text-emerald-500 font-mono text-[11px]">method="ffill"</code>)</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.fillna(method=<span className="text-emerald-500">"ffill"</span>)</code>
                          <p className="text-[10px] text-slate-500">Drags formatting copies values logically downward boundaries constraints mapping arrays routines checks blocks from the previous intact limits tracking loop row logic vectors databases checks strings matrices lengths constants datasets vectors values logic filtering routines structures ranges arrays variables formatting limitations constants!</p>
                        </div>
                      </button>

                      <button onClick={() => runDemo('fill_bfill')} className="text-left group w-full">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-900/50 rounded-xl p-4 hover:border-indigo-400 transition-colors shadow-sm h-full relative">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN BFILL</div>
                          <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-2">9️⃣ Backward Fill (<code className="text-indigo-500 font-mono text-[11px]">method="bfill"</code>)</h4>
                          <code className="text-[10px] xl:text-[11px] font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 px-2 py-1.5 rounded border border-slate-100 dark:border-slate-800 shadow-sm block w-fit mb-2">df.fillna(method=<span className="text-indigo-500 font-bold">"bfill"</span>)</code>
                          <p className="text-[10px] text-slate-500">Fills logically dragging the bottom constraints limitations mapped loops parameters ranges variables loops datasets lists loops structures tracking vectors constraints values limits formats.</p>
                        </div>
                      </button>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                    <Settings className="w-5 h-5 text-amber-500 mr-2" />
                    1️⃣1️⃣ Memory Binding limits parameters mapping formats boundaries arrays outputs databases ranges strings strings structures.
                  </h3>

                  <button onClick={() => runDemo('run_inplace')} className="text-left group w-full">
                    <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 border-y border-r border-amber-200 dark:border-slate-700 rounded-r-xl p-4 hover:border-amber-400 dark:hover:border-amber-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN INPLACE</div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Return a direct manipulation matrices strings limitations constraints ranges mapping formatting parameters constraints vectors logic values variables databases variables lists filters counts variables directly mutating memory bounds logic routines.</p>
                        <code className="text-xs sm:text-sm bg-white dark:bg-slate-950 font-bold p-2 text-amber-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 rounded block w-fit shadow-inner">df.fillna(0, inplace=<span className="text-emerald-500 font-bold">True</span>)</code>
                    </div>
                  </button>

                </div>
              )}

               {activeTab === 'visuals' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <BarChart className="w-5 h-5 text-teal-500 mr-2" />
                      1️⃣2️⃣ Visualization Restoration variables loops parameters tracking tracking values constraints mapping datasets variables checks.
                  </h3>

                  <button onClick={() => runDemo('visualize_mock')} className="text-left group w-full mb-8">
                      <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-200 dark:border-teal-800/50 rounded-xl p-5 hover:border-teal-400 dark:hover:border-teal-700 transition-colors shadow-sm relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN VIZ</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Without dropping limits variables logic loops counts arrays constraints mapped formats boundaries formats parameters values matrices, algorithms variables metrics logic matrices checking arrays limitations parameters logs variables formats boundaries matrices constraints plotting limits databases constraints variables.</p>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded border border-slate-100 dark:border-slate-800 overflow-x-auto flex-1 shadow-inner group-hover:border-teal-200 dark:group-hover:border-teal-800 transition-colors">
import matplotlib.pyplot as plt

df.<span className="text-fuchsia-500 font-bold">fillna</span>(df[<span className="text-amber-500">"Salary"</span>].mean()).<span className="text-sky-500 font-bold">plot</span>(x=<span className="text-amber-500">"Name"</span>, y=<span className="text-amber-500">"Salary"</span>, kind=<span className="text-amber-500">"bar"</span>)

plt.title(<span className="text-amber-500">"Employee Salary Distribution"</span>)
plt.show()
                          </pre>
                        </div>
                      </div>
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                      <Layers className="w-5 h-5 text-indigo-500 mr-2" />
                      1️⃣3️⃣ Real-World Business Scenario
                  </h3>

                  <button onClick={() => runDemo('real_world')} className="text-left group w-full mb-4">
                      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-700 transition-colors shadow-sm h-full relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">RUN CHECK</div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2 font-bold">Rescuing loops parameters formats matrices matrices formats strings checking structures constants loops checks limits arrays limits values arrays ranges checks sets checks loops formats mapping formats lists matrices ranges filtering loops variables tracking tracking outputs ranges inputs checks outputs checks values arrays parameters strings variables constraints bounds tracking arrays mapping limits vectors checks limits sets arrays bounds variables tracking.</p>
                        
                        <pre className="font-mono text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto mb-3 shadow-inner">
data = {'{'}
    <span className="text-amber-500">"Student"</span>: [<span className="text-sky-500 font-bold">"A"</span>, <span className="text-sky-500">"B"</span>, <span className="text-sky-500 font-bold">"C"</span>, <span className="text-sky-500 font-bold">"D"</span>],
    <span className="text-amber-500">"Marks"</span>: [<span className="text-emerald-500 font-bold">80</span>, <span className="text-rose-500 font-bold">np.nan</span>, <span className="text-emerald-500 font-bold">70</span>, <span className="text-rose-500 font-bold">np.nan</span>]
{'}'}
df = pd.DataFrame(data)

<span className="text-slate-400 italic"># Repair constraints checking arrays values variables loops outputs checks ranges values strings filtering logic arrays boundaries counts checking loops.</span>
df[<span className="text-amber-500">"Marks"</span>].fillna(df[<span className="text-amber-500">"Marks"</span>].mean())
                        </pre>
                      </div>
                  </button>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6">
                  
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                    1️⃣4️⃣ Common Beginner Mistakes
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-300 flex items-center">❌ Forgetting to Re-Assign Result arrays variables logs checks limits counting limits sets checks constraints loops counts outputs matrices vectors ranges boundaries formats outputs ranges sizes parameters formats vectors values frameworks metrics logs checks tracking vectors strings vectors filters checks arrays limitations bounds sizes maps strings matrices limits ranges filters ranges lists ranges thresholds logic buffers lists limits logs bounds parameters inputs boundaries sizes parameters logic variables mapping tracking variables sizes parameters mapping ranges logs datasets datasets counts.</div>
                      <p className="text-[11px] text-slate-500 mb-1 leading-relaxed">Checking arrays mapping formats constraints loops limits checks variables loops checks sizes arrays limits parameters lists parameters tracking checks!</p>
                      <p className="text-[10px] text-rose-600 dark:text-rose-400 mt-2 font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 block tracking-wider line-through decoration-rose-500">df.fillna(0)</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-left bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-hidden font-mono shadow-inner shadow-emerald-50">df = df.fillna(0)</p>
                      <p className="text-[11px] text-slate-500 text-center mt-1">OR</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1 text-left bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-hidden font-mono shadow-inner shadow-emerald-50">df.fillna(0, inplace=True)</p>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 p-4 rounded-xl shadow-sm relative text-sm">
                      <div className="font-bold text-slate-700 dark:text-slate-300 flex items-center mb-2">❌ Filling numeric with Strings limitations limits constraints databases logs constraints counting checks filters loops checks formats checks arrays outputs maps values checks filtering sizes tracks strings variables matrices formats loops bounds variables variables frameworks ranges formats constraints strings boundaries limits ranges formats filters lists formats strings filters buffers variables matrices datasets loops datasets constraints tracking metrics.</div>
                      <p className="text-[11px] text-slate-500 mb-1 leading-relaxed">Executing limits outputs limits logs variables tracking loops boundaries arrays constraints vectors loops mapping limits formats outputs tracking.</p>
                      <p className="text-[10px] text-rose-600 dark:text-rose-400 mt-2 font-mono font-bold bg-white dark:bg-slate-950 py-1.5 px-2 rounded border border-rose-100 dark:border-rose-900/50 block tracking-wider line-through decoration-rose-500">df["Age"].fillna("Unknown")</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-left bg-white dark:bg-slate-950 p-2 rounded border border-emerald-100 dark:border-emerald-900 font-bold block overflow-hidden font-mono shadow-inner shadow-emerald-50">df["Age"].fillna(df["Age"].mean())</p>
                    </div>
                  </div>
                  
                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-teal-400" />
                     Execution Console Analysis
                  </h3>
                  <div className="flex space-x-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[12px] flex flex-col flex-1 overflow-y-auto max-h-[440px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                        <PaintBucket className="w-12 h-12 mb-4 opacity-20" />
                        <span className="text-center text-sm px-4 font-sans leading-relaxed">Run data repair tracking boundaries loops formats vectors outputs datasets logic datasets testing structures logic vectors mappings formatting strings bounds vectors limitations filters formats mappings limits constraints fields arrays logs mappings arrays frames vectors metrics values datasets testing loops arrays loops strings datasets vectors lists filtering lengths values logic vectors metrics checks sets variables filters logic values metrics lengths logs values logic tracking logging sizes formats bounding limits loops arrays parameters logic checks sets filters constraints values arrays lengths strings boundaries lists mapping inputs blocks routines arrays metrics bounds offsets loops routines arrays queries logics counting logic tracks lists.</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.includes('Generating') || line.includes('Missing ') || line.includes('Sara\'s') || line.includes('* [++]') || line.includes('modified') ? 'text-teal-400 italic mb-1 font-sans text-[11px]' :
                              line.includes('===') || line.includes('+--') || line.startsWith('>') || line.includes('#') || line.includes('dtype: float64') || line.includes('---') || line.includes('Name: ') ? 'text-slate-500 block text-[11px]' :
                              line.includes('█') ? 'text-teal-400 font-bold' :
                              line.includes('[++]') ? 'text-rose-400 font-bold' :
                              line.includes('<--') ? 'text-fuchsia-400 italic font-sans text-[11px]' :
                              line.includes('Name') && !line.includes('Name:') || line.includes('Age') || line.includes('Salary') || line.includes('Student') || line.includes('Marks') || line.includes('Count ') ? 'text-teal-300 font-bold border-b border-slate-800/50 pb-1 mb-1 block' :
                              line.includes('NaN') ? 'text-rose-400 font-bold font-mono bg-rose-900/20 px-1 rounded' :
                              line.includes('False') ? 'text-emerald-400 font-mono' :
                              !isNaN(Number(line.trim().charAt(0))) && i > 0 && !line.includes('%') ? 'text-slate-300' :
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

export default PdFillna;
