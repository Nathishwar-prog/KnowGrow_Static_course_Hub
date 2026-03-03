import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, ArrowRight, Zap, Target, LayoutTemplate, Briefcase, Server, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Link2, BoxSelect, Filter, DatabaseZap, Clock, Hash, Smartphone, Image as ImageIcon, Banknote, ShieldAlert, Cpu, PlusCircle, Rows, Key, Shield, UserPlus, Layers, Settings, Type, ArrowDownToLine, RefreshCw, FileSymlink, Network, Laptop, LineChart, Cpu as BrainCircuit, Building, Building2, Map, MapPin, DatabaseBackup, List, GitBranch, ArrowUpRight, ArrowRightLeft, AlignLeft, AlignRight, Maximize, ShoppingCart, HeartPulse as ShieldPlus, BookOpen, Users, TerminalSquare, BookKey, SpellCheck, Sigma, Fingerprint, Lock, CalendarClock, SplitSquareHorizontal } from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'sql' }: { codeSnippet: string, title?: string, language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-violet-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlKeywords: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl mb-6 shadow-xl transform hover:-rotate-3 transition-transform cursor-default">
          <BookKey className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL KEYWORDS
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The structural grammar of SQL. Reserved command words that communicate instructions directly to the database engine.
        </p>
      </header>

      {/* Intro Definition Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <SpellCheck className="w-6 h-6 mr-3 text-amber-500" /> What are SQL Keywords?
          </h2>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-xl mb-6">
            <span className="font-bold text-amber-700 dark:text-amber-400 text-lg">SQL Keywords = The exact commands used to talk to the database.</span>
          </div>
          <div className="relative z-10 space-y-3 font-medium text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-center"><Target className="w-4 h-4 mr-3 text-emerald-500 shrink-0" />Creating tables</div>
            <div className="flex items-center"><Target className="w-4 h-4 mr-3 text-emerald-500 shrink-0" />Retrieving data</div>
            <div className="flex items-center"><Target className="w-4 h-4 mr-3 text-emerald-500 shrink-0" />Filtering results</div>
            <div className="flex items-center"><Target className="w-4 h-4 mr-3 text-emerald-500 shrink-0" />Grouping data</div>
            <div className="flex items-center"><Target className="w-4 h-4 mr-3 text-emerald-500 shrink-0" />Managing absolute permissions</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-gray-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -m-6 text-slate-700/50"><TerminalSquare className="w-40 h-40" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <AlertOctagon className="w-6 h-6 mr-3 text-rose-500" /> Important Rule Constraints
          </h2>
          <div className="relative z-10 space-y-4 text-sm font-medium text-gray-300">
            <div className="flex items-start">
              <ShieldAlert className="w-5 h-5 text-rose-400 mr-3 shrink-0 mt-0.5" />
              <p>Keywords <strong className="text-rose-400">cannot ever be used</strong> as custom table or column names (unless awkwardly wrapped in quotes).</p>
            </div>
            <div className="flex items-start">
              <Target className="w-5 h-5 text-emerald-400 mr-3 shrink-0 mt-0.5" />
              <p>They are completely <strong className="text-emerald-400">case-insensitive</strong> mathematically in most engine processors.</p>
            </div>

            <div className="mt-6 border border-gray-700 bg-black/50 p-4 rounded-xl">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Enterprise Standard Format</p>
              <code className="block text-gray-500 line-through decoration-rose-500/50 decoration-2 font-mono mb-2">select * from Students;</code>
              <code className="block text-emerald-400 font-mono font-black">&rarr; SELECT * FROM Students;</code>
              <p className="text-xs text-emerald-500 font-bold mt-2">Always capitalize keywords. It establishes explicit visual readability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grouping Matrix UI */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
          <Layers className="w-8 h-8 mr-3 text-blue-500" /> Main Categories of SQL Keywords
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* DDL */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 border-t-4 border-t-blue-500 flex flex-col h-full hover:shadow-lg transition-shadow">
            <h3 className="font-black text-xl text-blue-600 dark:text-blue-400 mb-1 flex items-center"><Database className="w-5 h-5 mr-2" /> DDL</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">Data Definition Keywords</p>
            <div className="space-y-2 text-sm flex-1">
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">CREATE</span><span className="text-gray-500 text-xs">Create structure</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">ALTER</span><span className="text-gray-500 text-xs">Modify structure</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-rose-500">DROP</span><span className="text-gray-500 text-xs">Delete explicitly</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">TRUNCATE</span><span className="text-gray-500 text-xs">Wipe entirely</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">RENAME</span><span className="text-gray-500 text-xs">Change handle</span></div>
            </div>
          </div>

          {/* DML */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 border-t-4 border-t-emerald-500 flex flex-col h-full hover:shadow-lg transition-shadow">
            <h3 className="font-black text-xl text-emerald-600 dark:text-emerald-400 mb-1 flex items-center"><Rows className="w-5 h-5 mr-2" /> DML</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">Data Manipulation Keywords</p>
            <div className="space-y-3 text-sm flex-1">
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/10 px-1 rounded">INSERT</span><span className="text-gray-500 text-xs font-medium">Inject natively</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/10 px-1 rounded">UPDATE</span><span className="text-gray-500 text-xs font-medium">Mutate rows</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/10 px-1 rounded">DELETE</span><span className="text-gray-500 text-xs font-medium">Purge rows</span></div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <span className="bg-emerald-100/50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-bold px-2 py-1 rounded">Most frequently deployed</span>
            </div>
          </div>

          {/* DQL */}
          <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl shadow-sm border border-purple-200 dark:border-purple-800/30 border-t-4 border-t-purple-500 flex flex-col h-full hover:shadow-lg transition-shadow relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-purple-200 dark:text-purple-500/10"><DatabaseZap className="w-32 h-32" /></div>
            <h3 className="font-black text-xl text-purple-700 dark:text-purple-400 mb-1 flex items-center relative z-10"><SearchMacro /> DQL</h3>
            <p className="text-xs font-bold text-purple-500 uppercase tracking-wide mb-4 border-b border-purple-200 dark:border-purple-800/50 pb-2 relative z-10">Data Query Keywords</p>
            <div className="space-y-2 text-sm flex-1 relative z-10 w-full">
              <div className="flex justify-between items-center"><span className="font-mono font-black text-purple-700 dark:text-purple-300 text-lg">SELECT</span><span className="text-purple-600 dark:text-purple-400 text-xs font-bold">Query request</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-purple-700 dark:text-purple-300">FROM</span><span className="text-purple-600 dark:text-purple-400 text-xs">Origin target</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-purple-700 dark:text-purple-300">WHERE</span><span className="text-purple-600 dark:text-purple-400 text-xs">Condition net</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-purple-700 dark:text-purple-300">ORDER BY</span><span className="text-purple-600 dark:text-purple-400 text-xs">Sort vectors</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-purple-700 dark:text-purple-300">GROUP BY</span><span className="text-purple-600 dark:text-purple-400 text-xs">Condense blocks</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-purple-700 dark:text-purple-300">HAVING</span><span className="text-purple-600 dark:text-purple-400 text-xs">Filter groups</span></div>
            </div>
          </div>

          {/* JOINs */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 border-t-4 border-t-pink-500 flex flex-col h-full hover:shadow-lg transition-shadow">
            <h3 className="font-black text-xl text-pink-600 dark:text-pink-400 mb-1 flex items-center"><Network className="w-5 h-5 mr-2" /> Join Keywords</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">Combine Tables</p>
            <div className="space-y-2 text-sm flex-1 w-full text-gray-600 dark:text-gray-400 font-medium">
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">INNER JOIN</span><span className="text-xs">Matches only</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">LEFT JOIN</span><span className="text-xs">All left rows</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">RIGHT JOIN</span><span className="text-xs">All right rows</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">FULL JOIN</span><span className="text-xs">Absolute total</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-pink-500 bg-pink-50 dark:bg-pink-900/20 px-1 rounded">ON</span><span className="text-xs font-bold text-pink-600 dark:text-pink-400">Join glue</span></div>
            </div>
          </div>

          {/* Constraints */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 border-t-4 border-t-yellow-500 flex flex-col h-full hover:shadow-lg transition-shadow">
            <h3 className="font-black text-xl text-yellow-600 dark:text-yellow-400 mb-1 flex items-center"><Lock className="w-5 h-5 mr-2" /> Constraint Keys</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">Enforce Native Rules</p>
            <div className="space-y-2 text-sm flex-1 w-full text-gray-600 dark:text-gray-400 font-medium tracking-tight">
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-yellow-700 dark:text-yellow-500"><Key className="w-3 h-3 inline mr-1 mb-0.5" />PRIMARY KEY</span><span className="text-xs">Absolute Unique</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">FOREIGN KEY</span><span className="text-xs">Bridge logic</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">UNIQUE</span><span className="text-xs">Zero duplicates</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">NOT NULL</span><span className="text-xs">Empty forbidden</span></div>
              <div className="flex justify-between items-center"><span className="font-mono font-bold text-gray-800 dark:text-gray-200">DEFAULT</span><span className="text-xs">Fallback string</span></div>
            </div>
          </div>

          {/* Logical */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 border-t-4 border-t-cyan-500 flex flex-col h-full hover:shadow-lg transition-shadow">
            <h3 className="font-black text-xl text-cyan-600 dark:text-cyan-400 mb-1 flex items-center"><Filter className="w-5 h-5 mr-2" /> Logical Filters</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">Evaluate Strings</p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-3 font-mono font-bold text-sm">
              <span className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-center text-gray-800 dark:text-gray-200">AND</span>
              <span className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-center text-gray-800 dark:text-gray-200">OR</span>
              <span className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-center text-gray-800 dark:text-gray-200">NOT</span>
              <span className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-center text-gray-800 dark:text-gray-200">IN</span>
              <span className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-center text-gray-800 dark:text-gray-200">BETWEEN</span>
              <span className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-center text-gray-800 dark:text-gray-200">LIKE</span>
            </div>
          </div>

        </div>
      </section>

      {/* Aggregate and Transcation Split Section */}
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center"><Sigma className="w-6 h-6 mr-3 text-indigo-500" /> Aggregate Function Keywords</h3>
          <div className="grid grid-cols-2 gap-4 h-full content-start">
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
              <p className="font-black font-mono text-indigo-700 dark:text-indigo-400 mb-1">COUNT</p><p className="text-xs font-medium text-gray-600 dark:text-gray-400">Quantify rows natively</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
              <p className="font-black font-mono text-gray-800 dark:text-gray-200 mb-1">SUM</p><p className="text-xs font-medium text-gray-600 dark:text-gray-400">Total absolute logic</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
              <p className="font-black font-mono text-gray-800 dark:text-gray-200 mb-1">AVG</p><p className="text-xs font-medium text-gray-600 dark:text-gray-400">Calculate average</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm font-mono font-bold">
              <span>MIN</span> <span className="text-gray-300 dark:text-gray-600">|</span> <span>MAX</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center relative z-10"><CalendarClock className="w-6 h-6 mr-3 text-rose-500" /> Transaction Keywords</h3>
          <div className="space-y-4 relative z-10">
            <div className="flex items-center p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-mono font-bold px-3 py-1 rounded shadow-sm mr-4 w-28 text-center shrink-0">COMMIT</div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Permanently save structural mutations mapped in memory down onto physical disk limits.</p>
            </div>
            <div className="flex items-center p-3 rounded-lg border border-gray-100 dark:border-gray-700 bg-rose-50 dark:bg-rose-900/10 border-rose-100 dark:border-rose-900/20">
              <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 font-mono font-bold px-3 py-1 rounded shadow-sm mr-4 w-28 text-center shrink-0">ROLLBACK</div>
              <p className="text-sm font-bold text-rose-700 dark:text-rose-400">Undo and abort all changes instantly reverting matrix buffer unconditionally.</p>
            </div>
            <div className="flex items-center p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="bg-gray-100 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 font-mono font-bold px-3 py-1 rounded shadow-sm mr-4 w-28 text-center shrink-0">SAVEPOINT</div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Drop a temporary save anchor coordinate inside a live executing loop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Matrix Flow */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-indigo-800">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-white mb-4 flex items-center"><Zap className="w-8 h-8 mr-3 text-amber-400" /> Advanced Query Structure</h2>
              <p className="text-indigo-200 mb-8 font-medium">When executing complex analytics, algorithms demand strict sequence constraints internally evaluated in this explicit order:</p>

              <div className="bg-black/40 p-6 rounded-2xl border border-indigo-500/30 inline-flex flex-col gap-3 font-mono font-bold text-sm shadow-inner w-full sm:w-auto">
                <span className="text-white flex items-center bg-indigo-500/20 px-3 py-1 rounded border border-indigo-500/30 w-full sm:w-auto"><span className="w-6 text-indigo-400">1</span> FROM</span>
                <span className="text-white flex items-center bg-indigo-500/20 px-3 py-1 rounded border border-indigo-500/30"><span className="w-6 text-indigo-400">2</span> WHERE</span>
                <span className="text-white flex items-center bg-indigo-500/20 px-3 py-1 rounded border border-indigo-500/30"><span className="w-6 text-indigo-400">3</span> GROUP BY</span>
                <span className="text-white flex items-center bg-fuchsia-500/20 px-3 py-1 rounded border border-fuchsia-500/30"><span className="w-6 text-fuchsia-400">4</span> HAVING</span>
                <span className="text-white flex items-center bg-emerald-500/20 px-3 py-1 rounded border border-emerald-500/30"><span className="w-6 text-emerald-400">5</span> SELECT</span>
                <span className="text-white flex items-center bg-amber-500/20 px-3 py-1 rounded border border-amber-500/30"><span className="w-6 text-amber-400">6</span> ORDER BY</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent blur-2xl rounded-full"></div>
              <div className="relative z-10 shadow-2xl drop-shadow-2xl">
                <CodeSnippetBlock
                  title="Massive Pipeline Sequence Example"
                  codeSnippet={`SELECT Department, COUNT(*) AS TotalEmployees\nFROM Employees\nWHERE Salary > 50000\nGROUP BY Department\nHAVING COUNT(*) > 2\nORDER BY TotalEmployees DESC;`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Architect Advice */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 flex flex-col h-full bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Building2 className="w-6 h-6 mr-3 text-sky-500" /> Real-World Importance
          </h2>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">Understanding keywords is structurally identical to understanding SQL grammar entirely.</p>
          <div className="space-y-4 font-medium text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-center justify-between"><span className="flex items-center"><Terminal className="w-4 h-4 mr-2 text-sky-500 shrink-0" /> Every API utilizes</span> <code className="font-bold text-purple-500 bg-purple-50 dark:bg-purple-900/10 px-2 rounded">SELECT</code></div>
            <div className="flex items-center justify-between"><span className="flex items-center"><Target className="w-4 h-4 mr-2 text-sky-500 shrink-0" /> Every form submission uses</span> <code className="font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/10 px-2 rounded">INSERT</code></div>
            <div className="flex items-center justify-between"><span className="flex items-center"><RefreshCw className="w-4 h-4 mr-2 text-sky-500 shrink-0" /> Every mutation action uses</span> <code className="font-bold text-cyan-500 bg-cyan-50 dark:bg-cyan-900/10 px-2 rounded">UPDATE</code></div>
            <div className="flex items-center justify-between"><span className="flex items-center"><LineChart className="w-4 h-4 mr-2 text-sky-500 shrink-0" /> Every analytics report triggers</span> <code className="font-bold text-amber-500 bg-amber-50 dark:bg-amber-900/10 px-2 rounded">GROUP BY</code></div>
            <div className="flex items-center justify-between"><span className="flex items-center"><Network className="w-4 h-4 mr-2 text-sky-500 shrink-0" /> Every complex enterprise app demands</span> <code className="font-bold text-pink-500 bg-pink-50 dark:bg-pink-900/10 px-2 rounded">JOIN</code></div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 p-8 opacity-5">
            <Briefcase className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-emerald-500" /> 15+ Years Mastery Insight
          </h2>
          <p className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-8 border-b border-gray-100 dark:border-gray-700 pb-4 relative z-10">Real-World Execution Patterns</p>

          <div className="space-y-8 relative z-10">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center font-black text-orange-600 dark:text-orange-400 text-xl border border-orange-200 dark:border-orange-800 shrink-0 shadow-sm">1</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xl mb-2">Practice Clause Order Constraints</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">Beginners perpetually crash engines confusing WHERE vs HAVING.</p>
                <div className="bg-orange-50 dark:bg-orange-900/10 p-3 rounded-lg border border-orange-200 dark:border-orange-900/30">
                  <div className="font-mono font-bold text-sm"><span className="text-orange-600 dark:text-orange-400 w-16 inline-block">WHERE</span> <span className="text-gray-700 dark:text-gray-300">= Evaluates absolute base rows dynamically</span></div>
                  <div className="font-mono font-bold text-sm mt-1"><span className="text-amber-500 dark:text-amber-400 w-16 inline-block">HAVING</span> <span className="text-gray-700 dark:text-gray-300">= Evaluates completely condensed GROUPs</span></div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center font-black text-sky-600 dark:text-sky-400 text-xl border border-sky-200 dark:border-sky-800 shrink-0 shadow-sm">2</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xl mb-2">Architectural Foundation 10</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-3">Burn these ten strict keywords into your permanent algorithmic memory limits. Once you fluently write these without syntax checking documentation, everything else unlocks massively:</p>
                <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-sky-700 dark:text-sky-300">
                  <span className="bg-sky-50 dark:bg-sky-900/30 px-2 py-1 rounded border border-sky-200 dark:border-sky-800/50 hover:-translate-y-0.5 transition-transform cursor-default">SELECT</span>
                  <span className="bg-sky-50 dark:bg-sky-900/30 px-2 py-1 rounded border border-sky-200 dark:border-sky-800/50 hover:-translate-y-0.5 transition-transform cursor-default">FROM</span>
                  <span className="bg-sky-50 dark:bg-sky-900/30 px-2 py-1 rounded border border-sky-200 dark:border-sky-800/50 hover:-translate-y-0.5 transition-transform cursor-default">WHERE</span>
                  <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-800/50 hover:-translate-y-0.5 transition-transform cursor-default">INSERT</span>
                  <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-800/50 hover:-translate-y-0.5 transition-transform cursor-default">UPDATE</span>
                  <span className="bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 px-2 py-1 rounded border border-rose-200 dark:border-rose-800/50 hover:-translate-y-0.5 transition-transform cursor-default">DELETE</span>
                  <span className="bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-400 px-2 py-1 rounded border border-fuchsia-200 dark:border-fuchsia-800/50 hover:-translate-y-0.5 transition-transform cursor-default">JOIN</span>
                  <span className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded border border-amber-200 dark:border-amber-800/50 hover:-translate-y-0.5 transition-transform cursor-default">GROUP BY</span>
                  <span className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded border border-amber-200 dark:border-amber-800/50 hover:-translate-y-0.5 transition-transform cursor-default">HAVING</span>
                  <span className="bg-sky-50 dark:bg-sky-900/30 px-2 py-1 rounded border border-sky-200 dark:border-sky-800/50 hover:-translate-y-0.5 transition-transform cursor-default">ORDER BY</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lab Challenges */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-tr from-amber-600 to-orange-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 w-full lg:w-3/4">
            <h2 className="text-3xl font-black mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3 text-yellow-300" /> Grammar Testing Environment
            </h2>
            <ul className="space-y-4 font-semibold text-lg text-amber-50">
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-400 mr-4 shadow-sm"></span> Write a monolithic query utilizing SELECT, WHERE, and explicitly mapped ORDER BY variables.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-400 mr-4 shadow-sm"></span> Successfully fire GROUP BY limits coupled directly alongside a HAVING clause logic trap.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-400 mr-4 shadow-sm"></span> Map both IN() and strictly bounded BETWEEN boundaries across a single matrix read.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-400 mr-4 shadow-sm"></span> Rapid-fire prototype a structural container mapped identically fusing PRIMARY KEY limits vs NOT NULL requirements.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

/* Micro fallback icon component */
const SearchMacro = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
)

export default SqlKeywords;