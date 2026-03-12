import React, { useState } from 'react';
import { 
  Hash, ListOrdered, BarChart3, PieChart, 
  Activity, Database, Play, BookOpen, 
  Lightbulb, AlertTriangle, Settings, 
  Settings2, Trash2, Layout, Layers, 
  Terminal, Search, Filter, 
  CheckCircle2, Info, ArrowDownAZ,
  ArrowUpZA, Percent, 
  HelpCircle, Sparkles
} from 'lucide-react';

const PdValueCounts: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'intro' | 'ops' | 'analytics' | 'pro'>('intro');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'show_base':
        outLines = [
          '> print(df)',
          '    Name  Gender',
          '0   John    Male',
          '1   Sara  Female',
          '2   Mike    Male',
          '3   Anna  Female',
          '4    Tom    Male'
        ];
        break;
      case 'basic_count':
        outLines = [
          '> df["Gender"].value_counts()',
          'Gender',
          'Male      3',
          'Female    2',
          'dtype: int64',
          '',
          '> # Explanation:',
          '> # Male appears 3 times',
          '> # Female appears 2 times'
        ];
        break;
      case 'normalize':
        outLines = [
          '> df["Gender"].value_counts(normalize=True)',
          'Gender',
          'Male      0.6',
          'Female    0.4',
          'dtype: float64',
          '',
          '> # proportions instead of counts (60% vs 40%)'
        ];
        break;
      case 'ascending':
        outLines = [
          '> df["Gender"].value_counts(ascending=True)',
          'Gender',
          'Female    2',
          'Male      3',
          'dtype: int64'
        ];
        break;
      case 'with_nan':
        outLines = [
          '> # df with NaN added:',
          '> # Mike is now NaN',
          '> df["Gender"].value_counts(dropna=False)',
          'Gender',
          'Male      1',
          'Female    1',
          'NaN       1',
          'dtype: int64'
        ];
        break;
      case 'product_sales':
        outLines = [
          '> products = ["Laptop", "Phone", "Laptop", "Tablet", "Phone"]',
          '> df_sales["Product"].value_counts()',
          'Product',
          'Laptop    2',
          'Phone     2',
          'Tablet    1',
          'dtype: int64',
          '',
          '> # Businesses use this to see popular items!'
        ];
        break;
      case 'vs_groupby':
        outLines = [
          '> # Both give similar results:',
          '> df.groupby("Gender").size()',
          'Gender',
          'Female    2',
          'Male      3',
          'dtype: int64',
          '',
          '> df["Gender"].value_counts()',
          'Male      3',
          'Female    2'
        ];
        break;
       case 'ML_imbalance':
        outLines = [
          '> df["Target"].value_counts()',
          'Class_0    950',
          'Class_1     50',
          'dtype: int64',
          '',
          '> # 🚨 DETECTION: Class imbalance detected!',
          '> # 95% Class_0 vs 5% Class_1'
        ];
        break;
      case 'filter_counts':
        outLines = [
          '> # Gender counts for people over 25:',
          '> df[df["Age"] > 25]["Gender"].value_counts()',
          'Gender',
          'Male      2',
          'Female    1',
          'dtype: int64'
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
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50 group hover:scale-105 transition-all">
          <Hash className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Frequency <code className="text-indigo-600 dark:text-indigo-400 text-3xl sm:text-4xl bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.value_counts()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed italic">
          The ultimate tool for categorical analysis. Count unique occurrences and understand your data distributions in a single call.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-indigo-500" />
            Frequency Terminal
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end font-sans">
             <button
              onClick={() => setActiveTab('intro')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'intro' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BookOpen className="w-4 h-4 mr-1.5" /> 1️⃣-4️⃣ Basics
            </button>
             <button
              onClick={() => setActiveTab('ops')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'ops' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Settings2 className="w-4 h-4 mr-1.5" /> 5️⃣-8️⃣ Operations
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'analytics' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <BarChart3 className="w-4 h-4 mr-1.5" /> 9️⃣-1️⃣1️⃣ Advanced
            </button>
             <button
              onClick={() => setActiveTab('pro')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'pro' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Sparkles className="w-4 h-4 mr-1.5" /> 💡 1️⃣2️⃣-1️⃣3️⃣ Pro
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
                  
                  {/* Point 1: What is value_counts? */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-sm font-sans italic">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                           When analyzing datasets, we often need to know how many times each unique value appears in a column. <code>value_counts()</code> makes this effortless.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg tracking-tight">
                      <Hash className="w-5 h-5 text-indigo-500 mr-2" />
                      1️⃣ What is value_counts()?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>value_counts()</code> is a Pandas method used to count the frequency of unique values in a Series or DataFrame column.
                    </p>
                    <p className="text-sm text-slate-500 mt-2 italic">Simple words: It tells us how many times each value appears.</p>
                    
                    <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 overflow-hidden group">
                       <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Example Data Stream</span>
                          <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
                       </div>
                       <div className="flex gap-2 flex-wrap">
                          {['Male', 'Female', 'Male', 'Female', 'Male'].map((val, i) => (
                            <span key={i} className={`px-2 py-1 rounded-md text-[10px] font-bold ${val === 'Male' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600' : 'bg-pink-100 dark:bg-pink-900/40 text-pink-600'}`}>
                              {val}
                            </span>
                          ))}
                       </div>
                       <div className="mt-4 flex items-center gap-4 text-xs font-mono font-bold text-indigo-500">
                          <span className="flex items-center"><ArrowDownAZ className="w-3 h-3 mr-1" /> Male: 3</span>
                          <span className="flex items-center"><ArrowDownAZ className="w-3 h-3 mr-1" /> Female: 2</span>
                       </div>
                    </div>
                  </section>

                  {/* Point 2: Why important? */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6 tracking-tight">
                      <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                      2️⃣ Why it's Important
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Helps analysts understand categorical distributions and detect imbalances.</p>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                         {[
                           { label: 'Categorical Distribution', icon: <PieChart className="w-3.5 h-3.5" /> },
                           { label: 'Detect Imbalanced Data', icon: <AlertTriangle className="w-3.5 h-3.5" /> },
                           { label: 'Customer Segments', icon: <Search className="w-3.5 h-3.5" /> },
                           { label: 'Dominant Categories', icon: <ArrowUpZA className="w-3.5 h-3.5" /> }
                         ].map((item) => (
                           <div key={item.label} className="p-3 bg-amber-50/50 dark:bg-amber-900/10 text-slate-700 dark:text-slate-300 rounded-xl border border-amber-100 dark:border-amber-800/50 flex items-center">
                              <span className="text-amber-500 mr-2">{item.icon}</span>
                              <span className="text-[11px] font-bold">{item.label}</span>
                           </div>
                         ))}
                    </div>
                    <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border dark:border-slate-700">
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Common Use Cases</p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">Survey analysis, demographic studies, product category analysis.</p>
                    </div>
                  </section>

                  {/* Point 3: Syntax */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 text-sm uppercase tracking-[0.2em] text-slate-500 font-mono">
                       <Settings className="w-4 h-4 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto shadow-inner">
                       <code className="text-indigo-400 font-mono text-sm block tracking-tighter">
                         {"Series.value_counts(normalize=False, ascending=False, dropna=True)"}
                       </code>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-3 text-[10px]">
                       <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded-lg border dark:border-slate-700">
                          <p className="font-black text-indigo-600 mb-0.5">normalize</p>
                          <p className="text-slate-500 italic">Return proportions instead of raw counts.</p>
                       </div>
                       <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded-lg border dark:border-slate-700">
                          <p className="font-black text-indigo-600 mb-0.5">ascending</p>
                          <p className="text-slate-500 italic">Sort counts in ascending order (default is False).</p>
                       </div>
                       <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded-lg border dark:border-slate-700">
                          <p className="font-black text-indigo-600 mb-0.5">dropna</p>
                          <p className="text-slate-500 italic">Exclude or include missing values (NaN).</p>
                       </div>
                    </div>
                  </section>

                  {/* Point 4: Example Dataset */}
                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                       <Database className="w-5 h-5 text-indigo-500 mr-2" />
                       4️⃣ Example Dataset
                    </h3>
                    <button onClick={() => runDemo('show_base')} className="w-full text-left group mt-4 font-sans">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-indigo-500 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                        <div className="bg-indigo-100 dark:bg-indigo-900/40 p-3 rounded-xl mr-4 group-hover:rotate-6 transition-transform">
                          <Layout className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm">Mount Gender DataFrame</p>
                          <p className="text-xs text-slate-500 italic">"John, Sara, Mike, Anna, Tom"</p>
                        </div>
                        <code className="text-[10px] font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded tracking-tighter uppercase font-mono">PREVIEW</code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'ops' && (
                <div className="animate-fade-in space-y-6 pt-2">
                  
                  {/* Point 5: Counting Unique Values */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <ListOrdered className="w-5 h-5 text-indigo-500 mr-2" />
                        5️⃣ Counting Unique Values
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed border-l-2 border-indigo-500/30 pl-3 italic">"Identify the frequency of each category in your column."</p>
                    <button onClick={() => runDemo('basic_count')} className="w-full text-left group mt-4">
                       <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-indigo-500 transition-all shadow-sm flex items-center group overflow-hidden">
                          <code className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">df["Gender"].value_counts()</code>
                          <Play className="w-4 h-4 ml-auto text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                       </div>
                    </button>
                  </section>

                  {/* Point 6: Normalized Counts */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <Percent className="w-5 h-5 text-emerald-500 mr-2" />
                        6️⃣ Percentage Analysis (Normalize)
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed border-l-2 border-emerald-500/30 pl-3 italic">"Show proportions instead of raw counts. Perfect for distribution charts."</p>
                    <button onClick={() => runDemo('normalize')} className="w-full text-left group mt-4">
                       <div className="bg-emerald-50/30 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-800 p-4 rounded-xl hover:border-emerald-500 transition-all shadow-sm flex items-center group">
                          <code className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">value_counts(normalize=True)</code>
                          <Percent className="w-4 h-4 ml-auto text-emerald-500 opacity-50" />
                       </div>
                    </button>
                  </section>

                  {/* Point 7: Sorting Ascending */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight font-sans">
                        <ArrowDownAZ className="w-5 h-5 text-sky-500 mr-2" />
                        7️⃣ Reverse the Order
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed border-l-2 border-sky-500/30 pl-3 italic">"By default, results are sorted by frequency (descending)."</p>
                    <button onClick={() => runDemo('ascending')} className="w-full text-left mt-4 group">
                       <div className="bg-[#0b0c10] border border-slate-800 p-4 rounded-xl shadow-inner group-hover:border-sky-500 transition-colors">
                          <code className="text-sky-400 text-[11px] font-bold">ascending=True</code>
                          <div className="flex gap-2 mt-3 opacity-30">
                             <div className="w-10 h-2 bg-sky-500 rounded"></div>
                             <div className="w-20 h-2 bg-slate-700 rounded"></div>
                          </div>
                       </div>
                    </button>
                  </section>

                   {/* Point 8: Missing Values */}
                    <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <Trash2 className="w-5 h-5 text-rose-500 mr-2" />
                        8️⃣ Including Missing Values (NaN)
                    </h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed border-l-2 border-rose-500/30 pl-3 italic">"By default, Pandas ignores NaNs. Use dropna=False to catch them."</p>
                    <button onClick={() => runDemo('with_nan')} className="w-full text-left group mt-4 font-sans focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-2xl">
                       <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl group hover:shadow-lg transition-all flex items-center">
                          <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                             <Filter className="w-4 h-4 text-rose-500" />
                          </div>
                          <code className="text-xs font-bold text-rose-600 dark:text-rose-400">dropna=False</code>
                       </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="animate-fade-in space-y-6 pt-2">
                  
                  {/* Point 9: Visualization Example */}
                  <section>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-hidden relative group">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-4 flex items-center tracking-widest leading-none">
                             <BarChart3 className="w-4 h-4 mr-1.5 text-indigo-500" />
                             9️⃣ Distribution Visualization
                        </h4>
                        <div className="flex flex-col items-center">
                             <div className="w-[200px] h-[100px] border-b border-l border-slate-700 flex items-end justify-around pb-0.5 px-3 relative">
                                <div className="w-[30%] bg-indigo-500/80 h-[80%] rounded-t-sm animate-pulse relative group/bar">
                                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-indigo-400 opacity-0 group-hover/bar:opacity-100 transition-opacity">M (3)</div>
                                </div>
                                <div className="w-[30%] bg-pink-500/80 h-[55%] rounded-t-sm relative group/bar2">
                                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-pink-400 opacity-0 group-hover/bar2:opacity-100 transition-opacity">F (2)</div>
                                </div>
                             </div>
                             <div className="w-[200px] flex justify-around mt-2">
                                <span className="text-[8px] text-slate-600 font-bold uppercase">Male</span>
                                <span className="text-[8px] text-slate-600 font-bold uppercase">Female</span>
                             </div>
                        </div>
                        <div className="mt-8 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                           <code className="text-[11px] text-indigo-300">{"df['Gender'].value_counts().plot(kind='bar')"}</code>
                        </div>
                    </div>
                  </section>

                  {/* Point 10: Real World Example */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight font-sans">
                        <Activity className="w-5 h-5 text-emerald-500 mr-2" />
                        🔟 Popular Product Detection
                    </h3>
                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl mt-4 flex items-start group shadow-sm">
                        <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2.5 rounded-xl mr-5 group-hover:rotate-12 transition-transform">
                           <Layout className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1">
                           <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">Inventory Analytics</p>
                           <p className="text-[11px] text-slate-500 leading-relaxed italic border-l-2 border-emerald-500/20 pl-2 mt-2">
                              Instantly identify that Laptops (2) and Phones (2) are top sellers compared to Tablets (1).
                           </p>
                           <button onClick={() => runDemo('product_sales')} className="mt-4 text-[10px] font-bold text-emerald-500 hover:text-emerald-600 flex items-center group">
                              EXECUTE SALES SCAN <Play className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                           </button>
                        </div>
                    </div>
                  </section>

                  {/* Point 11: value_counts() vs groupby() */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight">
                        <Layers className="w-5 h-5 text-indigo-500 mr-2" />
                        1️⃣1️⃣ value_counts() vs groupby()
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                       <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                          <p className="text-[10px] font-bold text-indigo-500 uppercase mb-2">value_counts()</p>
                          <p className="text-[11px] text-slate-500 leading-tight">Optimized for frequency counts on a single column. Extremely fast and simple.</p>
                       </div>
                       <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                          <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">groupby().size()</p>
                          <p className="text-[11px] text-slate-500 leading-tight">Part of a larger workflow. Used when you need multiple aggregations simultaneously.</p>
                       </div>
                    </div>
                    <button onClick={() => runDemo('vs_groupby')} className="w-full mt-4 p-3 bg-slate-900 rounded-lg text-center hover:bg-slate-800 transition-colors border border-slate-700">
                       <code className="text-[10px] text-indigo-400">Compare Command Outputs</code>
                    </button>
                  </section>
                </div>
              )}

              {activeTab === 'pro' && (
                <div className="animate-fade-in space-y-6 pt-2 font-sans">

                  {/* Point 12: Common Beginner Mistakes */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center tracking-tight">
                        <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                        12. Common Beginner Pitfalls
                    </h3>
                    
                    <div className="space-y-4 mt-4 text-[11px]">
                       <div className="p-4 bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl">
                          <p className="font-bold text-rose-800 dark:text-rose-300 uppercase underline decoration-rose-500/30 mb-2">❌ Whole DF Usage</p>
                          <p className="text-slate-600 dark:text-slate-400 italic mb-1 font-mono tracking-tighter">Wrong: df.value_counts()</p>
                          <p className="text-slate-600 dark:text-slate-400 italic font-mono tracking-tighter">Correct: df["column"].value_counts()</p>
                       </div>

                       <div className="p-4 bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-xl">
                          <p className="font-bold text-amber-800 dark:text-amber-300 uppercase mb-2">❌ Ignoring Missing Values</p>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">"By default, NaN values are excluded. This can hide data quality issues. Use dropna=False to see them."</p>
                          <button onClick={() => runDemo('with_nan')} className="mt-2 text-[9px] font-bold text-rose-600 underline">CATCH THE NaNs</button>
                       </div>
                    </div>
                  </section>

                  {/* Point 13: Tips & Tricks */}
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8 tracking-tight font-sans italic">
                        <Sparkles className="w-5 h-5 text-indigo-500 mr-2" />
                        1️⃣3️⃣ The Professional Edge (Tips & Tricks)
                    </h3>

                    <div className="space-y-4 mt-6">
                         {[
                           { 
                             id: '01', 
                             color: 'indigo', 
                             title: 'Detect Class Imbalance', 
                             desc: 'Crucial for ML. Check if your target labels are biased towards one class.',
                             code: 'df["Target"].value_counts()',
                             action: 'ML_imbalance'
                           },
                           { 
                             id: '02', 
                             color: 'emerald', 
                             title: 'Filter Before Counting', 
                             desc: 'Combine with masks to see distributions of specific data segments (e.g., Seniors vs Juniors).',
                             code: 'df[df["Age"] > 25]["Gender"].value_counts()',
                             action: 'filter_counts'
                           },
                           { 
                             id: '03', 
                             color: 'sky', 
                             title: 'Convert to Percentages', 
                             desc: 'Multiply normalization by 100 to get readable percent values for business slides.',
                             code: 'df["G"].value_counts(normalize=True) * 100',
                             action: 'normalize'
                           }
                         ].map((tip) => (
                           <div key={tip.id} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group hover:border-indigo-500/50 transition-colors">
                              <div className={`bg-${tip.color}-100 dark:bg-${tip.color}-900/30 p-2.5 rounded-xl mr-5 text-sm font-black text-${tip.color}-600 shrink-0`}>
                                 {tip.id}
                              </div>
                              <div className="flex-1">
                                 <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-2 leading-tight tracking-tighter">{tip.title}</p>
                                 <p className="text-[10px] text-slate-500 leading-relaxed mb-3 italic">{tip.desc}</p>
                                 <div className="flex items-center gap-2">
                                    <code className={`text-[9px] bg-slate-50 dark:bg-slate-950 px-2 py-1 rounded border dark:border-slate-800 text-${tip.color}-500 font-mono italic`}>
                                        {tip.code}
                                    </code>
                                    <button onClick={() => runDemo(tip.action)} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors text-slate-400 hover:text-indigo-500">
                                       <Play className="w-3 h-3" />
                                    </button>
                                 </div>
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
          <div className="lg:col-span-12 xl:col-span-5 h-[500px] xl:h-[700px] font-mono sticky top-8">
            <div className="bg-[#0b0c10] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 xl:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl scale-150"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl scale-150"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-indigo-500/70" />
                     Distribution Engine
                  </h3>
                  <div className="flex space-x-1.5 opacity-30">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto font-mono leading-relaxed tracking-tight thin-scrollbar whitespace-pre">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-600 animate-pulse flex flex-col items-center justify-center mt-32 px-10 text-center">
                        <PieChart className="w-12 h-12 mb-4 opacity-10" />
                        <span className="text-[11px] font-extrabold uppercase tracking-widest opacity-40">Choose a Demo Action</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Gender') || line.includes('Count') || line.includes('Product') ? 'text-indigo-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1 tracking-wider' :
                              line.includes('Class_1') || line.includes('🚨') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded italic' :
                              line.includes('Male') || line.includes('Laptop') ? 'text-sky-300 font-bold' :
                              line.match(/[0-9]\./) ? 'text-emerald-300 font-bold' :
                              'text-slate-400'
                           }`}>
                               {line}
                           </div>
                        )
                     })
                  )}
                  </div>
                  
                  {consoleOutput.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                       <span className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">Active Process: IDLE</span>
                       <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></div>
                       </div>
                    </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="max-w-4xl mx-auto text-center pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50/50 dark:bg-indigo-900/20 rounded-full border border-indigo-100 dark:border-indigo-800/30 text-xs text-indigo-600 dark:text-indigo-400 font-bold">
            <Info className="w-4 h-4" />
            <span>Note: <code>value_counts()</code> works on both Series and DataFrame columns.</span>
          </div>
      </footer>

    </div>
  );
};

export default PdValueCounts;
