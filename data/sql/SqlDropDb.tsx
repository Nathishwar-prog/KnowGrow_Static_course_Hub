import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Shield, AlertTriangle, ArrowRight, Zap, Target, Layers, Trash2, ShieldAlert, Server, HelpCircle, Table2, Bomb, DatabaseBackup, Info } from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'sql' }: { codeSnippet: string, title?: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
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
      <div className="relative group bg-gray-900">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-rose-500 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-rose-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const SqlDropDb: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-rose-50 dark:from-gray-900 dark:to-rose-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/40 rounded-3xl mb-6 shadow-sm border border-rose-200 dark:border-rose-800/50">
          <Bomb className="w-10 h-10 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          What is DROP DATABASE?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          <code className="bg-rose-100 dark:bg-rose-900/40 px-2 py-0.5 rounded font-bold text-rose-700 dark:text-rose-300">DROP DATABASE</code> is a SQL command used to <strong className="text-rose-600 dark:text-rose-400">permanently delete</strong> an entire database.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-rose-200 dark:border-rose-800/60 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trash2 className="w-32 h-32 text-rose-500" />
            </div>
            <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-4 flex items-center text-lg">
              <Trash2 className="w-5 h-5 mr-2" /> It comprehensively removes:
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-700 dark:text-gray-300 font-medium relative z-10">
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2"></span> All tables</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2"></span> All data</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2"></span> All indexes</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2"></span> All views</li>
              <li className="flex items-center col-span-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2"></span> All procedures & structure</li>
            </ul>
          </div>

          <div className="bg-rose-600 text-white rounded-2xl p-6 shadow-md border border-rose-700 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <ShieldAlert className="w-12 h-12 mb-3 relative z-10 text-rose-200" />
            <h3 className="font-bold text-xl relative z-10 mb-2">No Going Back</h3>
            <p className="text-rose-100 text-sm font-medium relative z-10">
              It <strong>cannot be undone</strong><br />
              <span className="opacity-80 text-xs mt-1 block">(unless a verified backup exists)</span>
            </p>
          </div>
        </div>
      </header>

      {/* Syntax & Safe Version */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Basic Syntax */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
              <span className="mr-3 text-rose-500">2️⃣</span> Basic Syntax
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <CodeSnippetBlock codeSnippet={`DROP DATABASE database_name;`} title="SQL Syntax" />
              <div className="mt-4">
                <p className="text-sm font-bold text-gray-500 mb-2 uppercase">Example:</p>
                <CodeSnippetBlock codeSnippet={`DROP DATABASE company_db;`} />
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium flex items-center mt-3">
                  <ArrowRight className="w-4 h-4 mr-2 text-rose-500" /> This completely removes <code className="bg-gray-100 dark:bg-gray-900 px-1.5 py-0.5 rounded text-rose-600 dark:text-rose-400 ml-1">company_db</code>.
                </p>
              </div>
            </div>
          </div>

          {/* Safe Version */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-3 text-emerald-500">3️⃣</span> Safe Version
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center">
                <Shield className="w-3 h-3 mr-1" /> Recommended
              </span>
            </h2>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800/30 shadow-sm h-[calc(100%-4rem)] flex flex-col">
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">To avoid errors if the database doesn’t exist:</p>

              <div className="mb-4">
                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2 uppercase">MySQL / PostgreSQL</p>
                <CodeSnippetBlock codeSnippet={`DROP DATABASE IF EXISTS company_db;`} />
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800 mt-auto shadow-sm flex items-start">
                <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium text-emerald-900 dark:text-emerald-100">
                  This prevents script execution errors if the DB is already missing or entirely wiped.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Checking & Production Warning */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Always Check First */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="mr-2">4️⃣</span> Before Dropping
            </h2>
            <p className="font-bold text-indigo-600 dark:text-indigo-400 mb-5 flex items-center">
              <SearchIcon className="w-5 h-5 mr-2" /> Always check existing databases first.
            </p>

            <div className="space-y-4 flex-grow">
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs font-bold text-gray-500 mb-1 flex items-center"><Database className="w-3 h-3 mr-1" /> MySQL</p>
                <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 font-bold block">SHOW DATABASES;</code>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs font-bold text-gray-500 mb-1 flex items-center"><Server className="w-3 h-3 mr-1" /> SQL Server</p>
                <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 font-bold block">SELECT name FROM sys.databases;</code>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs font-bold text-gray-500 mb-1 flex items-center"><Database className="w-3 h-3 mr-1" /> PostgreSQL</p>
                <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 font-bold block">\l</code>
              </div>
            </div>

            <div className="mt-5 text-center bg-rose-50 dark:bg-rose-900/20 py-2 rounded border border-rose-100 dark:border-rose-800/50">
              <span className="text-rose-600 dark:text-rose-400 font-bold text-sm uppercase tracking-wider">Never drop blindly.</span>
            </div>
          </div>

          {/* Development Example */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-200 dark:border-blue-800/30 p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4 flex items-center">
                <span className="mr-2 text-3xl">5️⃣</span> Real-World Example <span className="text-lg font-normal ml-2 text-blue-700 dark:text-blue-400">(Development Environment)</span>
              </h2>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-blue-100 dark:border-blue-800/50 mb-4">
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">1. Suppose you're testing by creating a temp DB:</p>
                <CodeSnippetBlock codeSnippet={`CREATE DATABASE test_db;`} />

                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 mt-4">2. After testing is complete, you wipe it:</p>
                <CodeSnippetBlock codeSnippet={`DROP DATABASE test_db;`} />
              </div>
              <p className="text-blue-800 dark:text-blue-200 font-bold flex items-center text-sm">
                <Check className="w-4 h-4 mr-2" /> Safe in development environments to reset state.
              </p>
            </div>

            {/* Production Warning VIP */}
            <div className="bg-rose-600 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-700 rounded-bl-full -z-0 opacity-50"></div>
              <div className="absolute bottom-0 right-10 text-[6rem] opacity-20"><ShieldAlert /></div>

              <div className="p-6 sm:p-8 relative z-10 text-white">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-500/50">
                  <h2 className="text-3xl font-bold flex items-center">
                    <span className="mr-3">6️⃣</span> Production Warning
                  </h2>
                  <span className="bg-black/20 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest hidden sm:flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" /> Very Important
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-rose-200 uppercase tracking-wider text-sm mb-3 border-l-2 border-rose-400 pl-3">Never Run:</h3>
                    <div className="bg-black/30 p-4 rounded-lg font-mono text-sm mb-4 border border-rose-500/50">
                      DROP DATABASE production_db;
                    </div>
                    <p className="text-sm font-medium text-rose-100 flex items-start">
                      <Target className="w-4 h-4 mr-2 shrink-0 mt-0.5" /> Many companies restrict DROP privileges entirely from standard accounts to prevent this.
                    </p>
                  </div>

                  <div className="bg-white/10 p-5 rounded-xl border border-white/20 backdrop-blur-sm shadow-inner">
                    <h3 className="font-bold text-white mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-emerald-300" /> Unless ALL criteria are met:
                    </h3>
                    <ul className="space-y-3 text-sm font-medium">
                      <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 shadow-[0_0_5px_rgba(52,211,153,0.8)]"></div> Full verified backup exists</li>
                      <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 shadow-[0_0_5px_rgba(52,211,153,0.8)]"></div> Proper approval is fully taken</li>
                      <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 shadow-[0_0_5px_rgba(52,211,153,0.8)]"></div> Downtime window is scheduled</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mechanics & Comparison */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Comparison Table */}
          <div className="lg:col-span-7 bg-gray-900 rounded-2xl border border-gray-800 shadow-xl overflow-hidden flex flex-col">
            <div className="bg-black/40 p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider flex items-center">
                <Layers className="w-6 h-6 mr-3 text-indigo-400" /> 7️⃣ Operations Comparison
              </h2>
            </div>

            <div className="overflow-x-auto p-4 flex-grow flex items-center">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-800 text-gray-300 rounded-lg">
                  <tr>
                    <th className="px-5 py-4 font-bold uppercase tracking-wide rounded-tl-lg">Command</th>
                    <th className="px-4 py-4 font-bold uppercase tracking-wide text-center">Data</th>
                    <th className="px-4 py-4 font-bold uppercase tracking-wide text-center">Structure</th>
                    <th className="px-5 py-4 font-bold uppercase tracking-wide text-center rounded-tr-lg">Database</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-gray-300">
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-5 py-4 font-mono font-bold text-emerald-400">DELETE</td>
                    <td className="px-4 py-4 text-center font-bold">Yes</td>
                    <td className="px-4 py-4 text-center font-bold text-gray-500">No</td>
                    <td className="px-5 py-4 text-center font-bold text-gray-500">No</td>
                  </tr>
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-5 py-4 font-mono font-bold text-amber-400">TRUNCATE</td>
                    <td className="px-4 py-4 text-center font-bold">Yes</td>
                    <td className="px-4 py-4 text-center font-bold text-gray-500">No</td>
                    <td className="px-5 py-4 text-center font-bold text-gray-500">No</td>
                  </tr>
                  <tr className="hover:bg-gray-800/50 transition-colors bg-rose-900/10">
                    <td className="px-5 py-4 font-mono font-bold text-rose-400">DROP TABLE</td>
                    <td className="px-4 py-4 text-center font-bold">Yes</td>
                    <td className="px-4 py-4 text-center font-bold text-rose-400">Yes</td>
                    <td className="px-5 py-4 text-center font-bold text-gray-500">No</td>
                  </tr>
                  <tr className="bg-rose-900/30 border-l-2 border-rose-500 shadow-inner">
                    <td className="px-5 py-4 font-mono font-bold text-rose-500 text-base">DROP DATABASE</td>
                    <td className="px-4 py-4 text-center font-bold text-rose-200">Yes</td>
                    <td className="px-4 py-4 text-center font-bold text-rose-300">Yes</td>
                    <td className="px-5 py-4 text-center font-bold text-rose-500 text-lg">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-rose-950 p-4 border-t border-rose-900 text-center">
              <p className="text-sm font-bold text-rose-400 tracking-wider">DROP DATABASE is the most destructive operation.</p>
            </div>
          </div>

          {/* Internals & Permissions */}
          <div className="lg:col-span-5 flex flex-col space-y-6 flex-grow">

            {/* Permissions */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-2">
                <Shield className="w-5 h-5 mr-2 text-indigo-500" /> 8️⃣ Permission Requirement
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">To drop a database, you need specific privileges:</p>
              <div className="flex gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-bold">Admin Privilege</span>
                <span className="bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 px-3 py-1 rounded-full text-xs font-bold">DROP Permission</span>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700 mb-3">
                <p className="text-xs text-gray-500 mb-1 uppercase font-bold">Example (MySQL Grant):</p>
                <code className="text-xs font-mono text-indigo-600 dark:text-indigo-400">GRANT DROP ON *.* TO 'admin_user';</code>
              </div>
              <p className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center mt-2">
                <AlertTriangle className="w-3 h-3 mr-1" /> Normal users should not have this.
              </p>
            </div>

            {/* What happens internally? */}
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl shadow-sm border border-indigo-200 dark:border-indigo-800/30 flex-grow">
              <h3 className="font-bold text-lg text-indigo-900 dark:text-indigo-300 mb-4 flex items-center border-b border-indigo-200 dark:border-indigo-800/50 pb-2">
                <Server className="w-5 h-5 mr-2" /> 9️⃣ What Happens Internally?
              </h3>
              <p className="text-sm text-indigo-800 dark:text-indigo-400 mb-4 font-medium italic">When DROP DATABASE runs:</p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm font-medium text-gray-700 dark:text-gray-300">
                  <div className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 shrink-0">1</div>
                  Entire database files are logically removed.
                </li>
                <li className="flex items-start text-sm font-medium text-gray-700 dark:text-gray-300">
                  <div className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 shrink-0">2</div>
                  Physical Data files are deleted from the disk permanently.
                </li>
                <li className="flex items-start text-sm font-medium text-gray-700 dark:text-gray-300">
                  <div className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 shrink-0">3</div>
                  Master system catalog is updated to forget the DB existed.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Disaster Example */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-rose-50 dark:bg-rose-900/10 rounded-3xl border border-rose-200 dark:border-rose-800/40 p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-rose-100 dark:from-rose-900/30 to-transparent -z-0"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-rose-900 dark:text-rose-300 mb-6 flex items-center">
                <span className="text-4xl mr-3">🔟</span> Real-World Disaster
              </h2>
              <p className="font-bold text-gray-700 dark:text-gray-300 mb-4 text-lg">In industry, many catastrophic incidents happened because:</p>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-medium bg-white/60 dark:bg-gray-800/60 p-5 rounded-xl border border-rose-100 dark:border-rose-800/50">
                <li className="flex items-start"><AlertTriangle className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> Developer ran DROP on the wrong server (Prod instead of Dev).</li>
                <li className="flex items-start"><AlertTriangle className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> Production and development names were confusingly similar.</li>
                <li className="flex items-start"><AlertTriangle className="w-5 h-5 text-rose-500 mr-2 shrink-0" /> No solid backup architecture existed.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-2 border-rose-200 dark:border-rose-700 text-center">
              <h4 className="font-bold text-xl mb-4 uppercase tracking-wide text-gray-900 dark:text-white flex justify-center items-center">
                <Target className="w-6 h-6 mr-2 text-rose-500" /> Always name clearly:
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm font-mono mb-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded border border-emerald-200 dark:border-emerald-800 flex flex-col items-center">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold mb-1">✅ CORRECT</span>
                  <span>dev_company_db</span>
                  <span>staging_company_db</span>
                  <span>prod_company_db</span>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded border border-rose-200 dark:border-rose-800 flex flex-col items-center">
                  <span className="text-rose-600 dark:text-rose-400 font-bold mb-1">❌ WRONG</span>
                  <span>db1</span>
                  <span>company</span>
                  <span className="opacity-0">-</span>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 py-2 rounded">
                Clear naming conventions prevent misidentification.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-3xl border border-amber-200 dark:border-amber-800/30 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute -top-10 -right-10 opacity-5 dark:opacity-10 text-[15rem]">⚡</div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 border-b border-amber-200 dark:border-amber-800/50 pb-6 relative z-10">
            <h2 className="text-3xl font-bold flex items-center text-amber-900 dark:text-amber-100">
              <Zap className="w-8 h-8 mr-3 text-amber-500" />
              Best Practices
            </h2>
            <span className="bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mt-4 sm:mt-0 w-fit">15+ Years Experience</span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">

            {/* Tip 1 */}
            <div className="flex items-start">
              <div className="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shrink-0 mr-4 shadow-sm">1</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-amber-900 dark:text-amber-300">Separate Environments</h3>
                <p className="font-medium text-gray-700 dark:text-gray-300 text-sm bg-white/60 dark:bg-black/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30">Never mix development and production instances on the same physical server or cluster.</p>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="flex items-start">
              <div className="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shrink-0 mr-4 shadow-sm">2</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-amber-900 dark:text-amber-300 flex items-center"><DatabaseBackup className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-400" /> Backup Before Dropping</h3>
                <div className="font-medium text-gray-700 dark:text-gray-300 text-sm bg-white/60 dark:bg-black/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30 text-center flex flex-col sm:flex-row justify-around">
                  <span><strong className="text-emerald-600 dark:text-emerald-400">1.</strong> Take full backup</span>
                  <span className="hidden sm:inline mx-2 text-gray-300 dark:text-gray-600">|</span>
                  <span><strong className="text-emerald-600 dark:text-emerald-400">2.</strong> Verify restore capability</span>
                </div>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="flex items-start">
              <div className="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shrink-0 mr-4 shadow-sm">3</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-amber-900 dark:text-amber-300">Restrict DROP Permission</h3>
                <p className="font-medium text-gray-700 dark:text-gray-300 text-sm bg-white/60 dark:bg-black/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30">Only the highest level DB Administrator (DBA) should possess the DROP privileges in staging/prod.</p>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="flex items-start">
              <div className="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shrink-0 mr-4 shadow-sm">4</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-amber-900 dark:text-amber-300">Use Confirmation Scripts</h3>
                <p className="font-medium text-gray-700 dark:text-gray-300 text-sm bg-white/60 dark:bg-black/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30">Many enterprises use custom tooling wrapped around native SQL utilities that force you to explicitly type out the database name to confirm.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interview Questions */}
      <section className="max-w-4xl mx-auto pb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
          <HelpCircle className="w-8 h-8 mr-3 text-indigo-500" />
          Interview-Level Questions
        </h2>

        <div className="space-y-4">
          {[
            { q: "What does DROP DATABASE do?", a: "It deletes the entire database permanently along with all its structural elements and data." },
            { q: "Can DROP DATABASE be rolled back?", a: "No, it cannot. The transaction is immediately committed. Recovery is only possible via a manual backup." },
            { q: "What is the difference between DROP TABLE and DROP DATABASE?", a: "DROP TABLE only targets a single specified table. DROP DATABASE destroys the master container holding all tables." },
            { q: "What privilege is needed?", a: "Global DROP privilege or root/admin access depending on the RDBMS." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row sm:items-center transform transition hover:-translate-y-1">
              <div className="sm:w-1/3 pr-4 mb-4 sm:mb-0">
                <h4 className="font-bold text-gray-900 dark:text-white flex items-start text-sm md:text-base">
                  <span className="text-indigo-500 mr-2 shrink-0">❓</span>
                  {faq.q}
                </h4>
              </div>
              <div className="sm:w-2/3 sm:pl-6 sm:border-l border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

export default SqlDropDb;