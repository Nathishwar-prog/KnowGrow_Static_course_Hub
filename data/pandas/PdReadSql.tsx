import React, { useState } from 'react';
import { 
  Database, Terminal, Lightbulb, 
  Settings, Server, Search,
  Filter, AlertTriangle, CheckCircle2,
  Table as TableIcon, BarChart3,
  Plug, FastForward
} from 'lucide-react';

const PdReadSql: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'queries' | 'performance' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'simple_read':
        outLines = [
          '> # Step 1: Connect to Database',
          '> import sqlite3',
          '> conn = sqlite3.connect("company.db")',
          '',
          '> # Step 2: Read Full Table',
          '> df = pd.read_sql("SELECT * FROM employees", conn)',
          '> print(df)',
          '   ID   Name  Salary',
          '0   1   John   50000',
          '1   2   Sara   60000',
          '2   3   Mike   55000'
        ];
        break;
      case 'read_table_direct':
        outLines = [
          '> df = pd.read_sql("employees", conn)',
          '> print(df.columns.tolist())',
          "['ID', 'Name', 'Salary']",
          '',
          '> # Note: You can pass a table name directly instead of a query!'
        ];
        break;
      case 'filter_query':
        outLines = [
          '> query = "SELECT * FROM employees WHERE Salary > 55000"',
          '> df = pd.read_sql(query, conn)',
          '> print(df)',
          '   ID  Name  Salary',
          '1   2  Sara   60000',
          '',
          '> # Efficiency Check: Only 1 row transferred from DB to Pandas.'
        ];
        break;
      case 'select_cols':
        outLines = [
          '> query = "SELECT Name, Salary FROM employees"',
          '> df = pd.read_sql(query, conn)',
          '> print(df.head(2))',
          '   Name  Salary',
          '0  John   50000',
          '1  Sara   60000'
        ];
        break;
      case 'sql_grouping':
        outLines = [
          '> # Offloading work to the Database Engine',
          '> query = "SELECT region, SUM(sales) FROM orders GROUP BY region"',
          '> df = pd.read_sql(query, conn)',
          '> print(df)',
          '    region  SUM(sales)',
          '0     East       60000',
          '1    North      120000',
          '2    South       90000'
        ];
        break;
      case 'error_conn':
        outLines = [
          '> pd.read_sql("SELECT * FROM employees")',
          'TypeError: read_sql() missing 1 required positional argument: \'con\'',
          '',
          '> # ❌ ERROR: You MUST provide a connection object (conn)!'
        ];
        break;
      case 'error_syntax':
        outLines = [
          '> pd.read_sql("SELECT Name Salary FROM employees", conn)',
          'DatabaseError: Execution failed on sql: SELECT Name Salary...',
          'near "Salary": syntax error',
          '',
          '> # ❌ ERROR: Missing comma in SQL SELECT list.'
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
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <Database className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Data Source <code className="text-indigo-600 dark:text-indigo-400 text-3xl sm:text-4xl bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.read_sql()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The pipeline for Enterprise data. <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">read_sql()</code> retrieves results from your database directly into a DataFrame.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Server className="w-8 h-8 mr-3 text-indigo-500" />
            SQL Query Lab
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Plug className="w-4 h-4 mr-1.5" /> 1️⃣-7️⃣ Connections
            </button>
             <button
              onClick={() => setActiveTab('queries')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'queries' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Search className="w-4 h-4 mr-1.5" /> 8️⃣-1️⃣1️⃣ Queries
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'performance' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <FastForward className="w-4 h-4 mr-1.5" /> 1️⃣2️⃣ Engine Logic
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣3️⃣-1️⃣4️⃣ Tips
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
                  
                  {/* Documentation Start */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          In many real-world projects, data is stored in databases instead of files. <code>read_sql()</code> allows you to query them directly inside Python.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg">
                      <Database className="w-5 h-5 text-indigo-500 mr-2" />
                      1️⃣ What is <code className="text-indigo-500 ml-2">read_sql()</code>?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      <strong>Definition:</strong> <code>read_sql()</code> is a Pandas function used to execute an SQL query and load the result into a Pandas DataFrame.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                      <Server className="w-5 h-5 text-sky-500 mr-2" />
                      2️⃣ Why read_sql() is Important
                    </h3>
                    <div className="grid grid-cols-2 gap-2 mt-3 text-[10px] font-bold uppercase tracking-widest text-center">
                         {['MySQL', 'PostgreSQL', 'SQLite', 'SQL Server'].map(db => (
                           <div key={db} className="bg-slate-50 dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">{db}</div>
                         ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-3 text-center">Extraction is the first step for analysis and machine learning.</p>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <Settings className="w-5 h-5 text-slate-500 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800 overflow-x-auto">
                       <code className="text-indigo-400 font-mono text-sm block whitespace-nowrap">
                         {"pd.read_sql(sql, con)"}
                       </code>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                       <div className="p-3 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-xl">
                          <p className="text-[10px] font-bold text-indigo-600 uppercase mb-1">sql</p>
                          <p className="text-[11px] text-slate-500 leading-tight">Query or table name</p>
                       </div>
                       <div className="p-3 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-xl">
                          <p className="text-[10px] font-bold text-indigo-600 uppercase mb-1">con</p>
                          <p className="text-[11px] text-slate-500 leading-tight">DB connection object</p>
                       </div>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <TableIcon className="w-5 h-5 text-emerald-500 mr-2" />
                       4️⃣-7️⃣ Setup & Basic Load
                    </h3>
                    <div className="space-y-4 pt-2">
                       <div className="bg-black/90 p-4 rounded-xl border border-slate-800">
                          <p className="text-[10px] text-slate-500 font-mono mb-2"># Install sqlalchemy engine</p>
                          <code className="text-amber-400 font-mono text-sm">pip install sqlalchemy</code>
                       </div>
                       <button onClick={() => runDemo('simple_read')} className="w-full text-left group">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-indigo-500 hover:shadow-indigo-500/10 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                          <div className="bg-indigo-100 dark:bg-indigo-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                            <Plug className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-slate-900 dark:text-white text-sm">Create Connection & Read</p>
                            <p className="text-xs text-slate-500 italic">"Connects to company.db and runs SELECT *"</p>
                          </div>
                          <code className="text-[10px] font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">EXECUTE</code>
                        </div>
                      </button>
                      <button onClick={() => runDemo('read_table_direct')} className="text-xs text-indigo-500 font-bold hover:underline pl-1 block">
                        + Read table 'employees' without writing SQL
                      </button>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'queries' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Filter className="w-5 h-5 text-indigo-500 mr-2" />
                        8️⃣ Filtering Data with SQL
                    </h3>
                    <div className="mt-4 p-4 bg-indigo-50/20 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50 rounded-xl relative overflow-hidden group">
                       <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 italic">"It is much faster to filter data on the database server than in Python Memory."</p>
                       <button onClick={() => runDemo('filter_query')} className="hover:scale-[1.02] transition-transform text-left">
                          <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block bg-white dark:bg-slate-950 p-2 rounded shadow-sm border border-slate-200 dark:border-slate-800 w-fit">
                            {'query = "SELECT * FROM employees WHERE Salary > 55000"'}
                            <br />
                            {'df = pd.read_sql(query, conn)'}
                          </code>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Search className="w-5 h-5 text-sky-500 mr-2" />
                        9️⃣ Selecting Specific Columns
                    </h3>
                    <button onClick={() => runDemo('select_cols')} className="w-full text-left mt-3 group">
                       <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-sky-500 transition-colors">
                          <p className="text-xs text-slate-500 mb-2 font-bold uppercase tracking-tight">Avoid SELECT *</p>
                          <code className="text-[11px] font-bold text-slate-800 dark:text-slate-300 block border-l-2 border-sky-500 pl-3">
                            {'pd.read_sql("SELECT Name, Salary FROM employees", conn)'}
                          </code>
                       </div>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <BarChart3 className="w-5 h-5 text-emerald-500 mr-2" />
                        🔟 Visualization & 1️⃣1️⃣ Real World
                    </h3>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mt-4">
                        <code className="text-[10px] block text-emerald-400 mb-4 whitespace-pre-wrap">
{`import matplotlib.pyplot as plt

# Loading sales from database
df = pd.read_sql("SELECT * FROM sales", conn)
df.plot(x="Name", y="Salary", kind="bar")

plt.title("Employee Salaries")
plt.show()`}
                        </code>
                        <div className="flex flex-col items-center">
                           <div className="w-[180px] h-[80px] border-b border-l border-slate-700 relative flex items-end justify-around pb-1">
                              <div className="w-[15%] bg-indigo-500 h-[60%]"></div>
                              <div className="w-[15%] bg-indigo-500 h-[90%]"></div>
                              <div className="w-[15%] bg-indigo-500 h-[75%]"></div>
                              <div className="absolute -left-10 top-1/2 -rotate-90 text-[8px] text-slate-600 font-bold">SALARY</div>
                           </div>
                           <div className="w-[180px] flex justify-around mt-1">
                              {['John', 'Sara', 'Mike'].map(n => <span key={n} className="text-[8px] text-slate-600 font-bold">{n}</span>)}
                           </div>
                        </div>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'performance' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Settings className="w-5 h-5 text-indigo-500 mr-2" />
                        1️⃣2️⃣ read_sql() vs Other SQL Functions
                    </h3>
                    <div className="grid grid-cols-1 gap-3 mt-4">
                       {[
                         { name: 'read_sql()', purpose: 'General SQL reading (Recommended)' },
                         { name: 'read_sql_query()', purpose: 'Specifically for execute SQL query' },
                         { name: 'read_sql_table()', purpose: 'Read full table (Metadata dependent)' }
                       ].map(fn => (
                         <div key={fn.name} className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center justify-between">
                            <code className="text-xs font-bold text-indigo-600">{fn.name}</code>
                            <span className="text-[11px] text-slate-500">{fn.purpose}</span>
                         </div>
                       ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <FastForward className="w-5 h-5 text-amber-500 mr-2" />
                        Performance Optimizations (Tip 1 & 2)
                    </h3>
                    <div className="mt-4 space-y-4">
                       <div className="bg-amber-50/30 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 p-4 rounded-xl">
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-400 mb-2 uppercase">Pro Tip: Offload Grouping to SQL</p>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 italic">"Instead of loading 1 million rows and calling .groupby() in Pandas, let the SQL server summarize it into 10 rows first."</p>
                          <button onClick={() => runDemo('sql_grouping')} className="bg-white dark:bg-slate-950 p-2 rounded shadow-sm border border-slate-200 dark:border-slate-800 text-[11px] font-mono font-bold block w-fit">
                             SELECT region, SUM(sales) FROM orders GROUP BY region
                          </button>
                       </div>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                        1️⃣3️⃣ Common Beginner Mistakes
                    </h3>
                    
                    <div className="space-y-4 mt-4">
                       <button onClick={() => runDemo('error_conn')} className="w-full text-left p-4 bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl hover:bg-rose-50 transition-colors block">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2">❌ Missing Connection</p>
                          <div className="flex gap-4">
                             <code className="text-[10px] text-rose-500 line-through">pd.read_sql(query)</code>
                             <code className="text-[10px] text-emerald-500 font-bold">pd.read_sql(query, conn)</code>
                          </div>
                       </button>

                       <button onClick={() => runDemo('error_syntax')} className="w-full text-left p-4 bg-rose-50/50 dark:bg-rose-900/10 border-l-4 border-rose-500 rounded-xl hover:bg-rose-50 transition-colors block mt-4">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-1">❌ Incorrect SQL Syntax</p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight italic">"SQL errors won't show up until Pandas actually tries to execute the query. Always test queries in a DB browser first!"</p>
                       </button>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣4️⃣ Tips & Tricks (Professional Advice)
                    </h3>

                    <div className="space-y-4 mt-4">
                       {[
                         { title: 'Always preview records', code: 'df.head()', color: 'indigo' },
                         { title: 'Check data health', code: 'df.info() + df.describe()', color: 'sky' }
                       ].map((tip, idx) => (
                         <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg mr-4 text-amber-600 font-bold shrink-0">0{idx+1}</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-2">{tip.title}</p>
                               <code className="text-[10px] bg-slate-50 dark:bg-slate-950 px-2 py-1 rounded border dark:border-slate-800 block text-indigo-500 font-bold mb-1 w-fit">{tip.code}</code>
                            </div>
                         </div>
                       ))}
                       <div className="bg-indigo-900/10 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-800 flex items-start">
                          <div className="bg-indigo-500 p-2 rounded-lg mr-4 text-white font-bold shrink-0">03</div>
                          <div>
                            <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">SQL + Pandas Integration</p>
                            <p className="text-[11px] text-slate-500 leading-relaxed italic">"The most powerful workflow: Filter 90% in SQL, then analyze the remaining 10% in Pandas."</p>
                          </div>
                       </div>
                    </div>
                  </section>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5 h-[550px] lg:h-auto">
            <div className="bg-[#0c0c0d] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
                  <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-indigo-500/70" />
                     Database Fetch Logic
                  </h3>
                  <div className="flex space-x-1.5 opacity-30">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[500px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-600 animate-pulse flex flex-col items-center justify-center mt-32 px-10">
                        <Database className="w-12 h-12 mb-4 opacity-10" />
                        <span className="text-center text-[11px] font-bold uppercase tracking-widest opacity-40">Awaiting Database Stream...</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px]' :
                              line.includes('ID') || line.includes('Name') || line.includes('Salary') || line.includes('region') || line.includes('sales') ? 'text-indigo-300 font-bold border-b border-slate-800/30 block mt-2 mb-1' :
                              line.includes('Error') || line.includes('❌') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') ? 'text-sky-300' :
                              line.match(/^\s*\d+\s+/) || line.match(/^[A-Za-z]+:\s+\d/) ? 'text-emerald-300/80 transition-colors' :
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

export default PdReadSql;
