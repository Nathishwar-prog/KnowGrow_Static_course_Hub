import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Shield, AlertTriangle, ArrowRight, Zap, Target, Layers, Trash2, ShieldAlert, Server, HelpCircle, Table2, Bomb, Briefcase, RefreshCw, FileWarning } from 'lucide-react';

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

const SqlDropTable: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-rose-50 dark:from-gray-900 dark:to-rose-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/40 rounded-3xl mb-6 shadow-sm border border-rose-200 dark:border-rose-800/50">
          <Trash2 className="w-10 h-10 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          What is DROP TABLE?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          <code className="bg-rose-100 dark:bg-rose-900/40 px-2 py-0.5 rounded font-bold text-rose-700 dark:text-rose-300">DROP TABLE</code> is a SQL command used to <strong className="text-rose-600 dark:text-rose-400">permanently remove</strong> a table from a database.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-md border border-rose-200 dark:border-rose-800/60 max-w-3xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-100 dark:from-rose-900/20 to-transparent -z-0"></div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center text-xl relative z-10 border-b border-gray-100 dark:border-gray-700 pb-3">
            <Bomb className="w-6 h-6 mr-3 text-rose-500" /> It meticulously deletes:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300 font-medium relative z-10">
            <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <span className="bg-rose-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 shrink-0 text-xs">✔</span>
              Table structure
            </div>
            <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <span className="bg-rose-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 shrink-0 text-xs">✔</span>
              All data inside the table
            </div>
            <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <span className="bg-rose-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 shrink-0 text-xs">✔</span>
              Indexes
            </div>
            <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <span className="bg-rose-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 shrink-0 text-xs">✔</span>
              Constraints & Triggers
            </div>
          </div>
          <p className="mt-6 text-center font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 py-3 rounded-xl border border-rose-100 dark:border-rose-800/50">
            Once dropped, the table is gone (unless backup exists).
          </p>
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
              <CodeSnippetBlock codeSnippet={`DROP TABLE table_name;`} title="SQL Syntax" />
              <div className="mt-4">
                <p className="text-sm font-bold text-gray-500 mb-2 uppercase">Example:</p>
                <CodeSnippetBlock codeSnippet={`DROP TABLE Employees;`} />
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium flex items-center mt-3">
                  <ArrowRight className="w-4 h-4 mr-2 text-rose-500" /> This removes the <code className="bg-gray-100 dark:bg-gray-900 px-1.5 py-0.5 rounded text-rose-600 dark:text-rose-400 mx-1">Employees</code> table completely.
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
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">To prevent script execution errors if the table doesn’t exist:</p>

              <div className="mb-4">
                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2 uppercase">MySQL / PostgreSQL</p>
                <CodeSnippetBlock codeSnippet={`DROP TABLE IF EXISTS Employees;`} />
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800 mt-auto shadow-sm flex items-start">
                <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium text-emerald-900 dark:text-emerald-100">
                  This avoids throwing a fatal runtime error that stops your entire SQL script.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Example Scenario */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
          <span className="mr-3 text-blue-500">4️⃣</span> Example Scenario
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">

          <div>
            <h4 className="font-bold flex items-center text-gray-600 dark:text-gray-400 uppercase text-sm mb-4">
              <Table2 className="w-4 h-4 mr-2" /> Employees Table Before
            </h4>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
              <table className="w-full text-left font-mono">
                <thead className="bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400">
                  <tr>
                    <th className="py-2 px-4 border-b dark:border-gray-700 font-bold">emp_id</th>
                    <th className="py-2 px-4 border-b dark:border-gray-700 font-bold">name</th>
                    <th className="py-2 px-4 border-b dark:border-gray-700 font-bold">salary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 text-center md:text-left">
                  <tr>
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 px-4 font-sans font-medium">Arjun</td>
                    <td className="py-2 px-4">50000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4 font-sans font-medium">Meena</td>
                    <td className="py-2 px-4">40000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase mb-3">After Running:</p>
            <div className="w-full">
              <CodeSnippetBlock codeSnippet={`DROP TABLE Employees;`} />
            </div>

            <div className="mt-2 bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-200 dark:border-rose-800 w-full text-center">
              <p className="text-rose-600 dark:text-rose-400 font-bold flex flex-col items-center">
                <span className="text-2xl mb-2">❌</span>
                Table no longer exists.
              </p>
              <p className="text-xs text-rose-500 dark:text-rose-300 mt-2 font-medium">Querying it gives a "Table not found" error.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Comparisons & Foreign Keys */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Comparison Table */}
          <div className="lg:col-span-12 bg-gray-900 rounded-2xl border border-gray-800 shadow-xl overflow-hidden flex flex-col">
            <div className="bg-black/40 p-6 border-b border-gray-800 px-6 sm:px-8">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider flex items-center">
                <Layers className="w-6 h-6 mr-3 text-indigo-400" /> 5️⃣ DROP TABLE vs DELETE vs TRUNCATE
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-800 text-gray-300">
                  <tr>
                    <th className="px-6 py-4 font-bold uppercase tracking-wide">Command</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wide text-center">Deletes Data</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wide text-center">Deletes Structure</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wide text-center hidden sm:table-cell">WHERE Allowed</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wide">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-gray-300">
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 font-mono font-bold text-emerald-400">DELETE</td>
                    <td className="px-6 py-4 text-center text-lg">✔</td>
                    <td className="px-6 py-4 text-center font-bold text-rose-400 text-lg">❌</td>
                    <td className="px-6 py-4 text-center font-bold text-emerald-400 text-lg hidden sm:table-cell">✔</td>
                    <td className="px-6 py-4 text-xs font-medium text-gray-400">Removes rows only.</td>
                  </tr>
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 font-mono font-bold text-amber-400">TRUNCATE</td>
                    <td className="px-6 py-4 text-center text-lg">✔</td>
                    <td className="px-6 py-4 text-center font-bold text-rose-400 text-lg">❌</td>
                    <td className="px-6 py-4 text-center font-bold text-rose-400 text-lg hidden sm:table-cell">❌</td>
                    <td className="px-6 py-4 text-xs font-medium text-gray-400">Removes all rows quickly.</td>
                  </tr>
                  <tr className="bg-rose-900/20 border-l-2 border-rose-500">
                    <td className="px-6 py-4 font-mono font-bold text-rose-500">DROP TABLE</td>
                    <td className="px-6 py-4 text-center text-lg text-rose-200">✔</td>
                    <td className="px-6 py-4 text-center text-lg text-rose-200">✔</td>
                    <td className="px-6 py-4 text-center font-bold text-rose-500 text-lg hidden sm:table-cell">❌</td>
                    <td className="px-6 py-4 text-xs font-medium text-rose-300">Removes entire table permanently.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          {/* Multiple Tables */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center border-b border-gray-100 dark:border-gray-700 pb-3">
              <Layers className="w-5 h-5 mr-3 text-indigo-500" /> 6️⃣ DROP Multiple Tables
            </h2>
            <CodeSnippetBlock codeSnippet={`DROP TABLE Orders, Customers;`} />
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              Deletes multiple tables in one command.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800/50 flex items-start">
              <AlertTriangle className="w-5 h-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
              <p className="text-sm font-bold text-amber-800 dark:text-amber-300">
                Order matters if foreign keys exist. (Child must be dropped before Parent).
              </p>
            </div>
          </div>

          {/* Foreign Key Constraints */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-3">
              <ShieldAlert className="w-5 h-5 mr-3 text-rose-500" /> 7️⃣ With Foreign Key Constraints
            </h2>
            <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">If a table is referenced by another table:</p>
            <p className="text-sm font-medium text-rose-500 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/10 px-3 py-1.5 rounded inline-block mb-4">You may get an error.</p>

            <div className="space-y-4 text-sm font-medium text-gray-700 dark:text-gray-300 flex-grow">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <h5 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Solution 1: Drop Child Table First</h5>
                <code className="text-xs font-mono block mb-1">DROP TABLE Orders;</code>
                <code className="text-xs font-mono block">DROP TABLE Customers;</code>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                <div className="absolute top-2 right-2 flex space-x-1">
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded">PostgreSQL</span>
                </div>
                <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Solution 2: Use CASCADE</h5>
                <code className="text-xs font-mono block text-emerald-700 dark:text-emerald-400 font-bold mb-2">DROP TABLE Customers CASCADE;</code>
                <p className="text-xs italic text-gray-500">This removes dependent objects automatically. ⚠ Use carefully.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Real World & Safety Rules */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
          <Briefcase className="w-8 h-8 mr-3 text-indigo-500" /> Real-World Use Cases & Safety
        </h2>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Real World Use Cases */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4 pl-2 opacity-80 uppercase tracking-widest text-sm">8️⃣ Use Cases</h3>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-start">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4 shrink-0"><Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" /></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Development Environment</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Removing test tables and recreating schemas during iteration.</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-start">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-4 shrink-0"><RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Database Migration</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Old version table is dropped and replaced cleanly by the new version.</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-start">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-4 shrink-0"><FileWarning className="w-5 h-5 text-amber-600 dark:text-amber-400" /></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Temporary Tables</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Used strictly in data processing and routinely cleared out afterward.</p>
              </div>
            </div>
          </div>

          {/* Performance Considerations */}
          <div className="lg:col-span-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-2xl border border-amber-200 dark:border-amber-800/30 p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-amber-200 dark:border-amber-800/50">
              <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-400 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-amber-500" />
                9️⃣ Production Safety Rules
              </h2>
              <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mt-4 sm:mt-0 w-fit">15+ Years Experience</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 h-[calc(100%-5rem)]">

              {/* Tip 1 */}
              <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl border border-amber-100 dark:border-amber-800/30">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-xl mr-2 text-rose-500">🔥</span> 1. Never DROP Without Backup
                </h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 ml-7 space-y-1 font-medium list-disc">
                  <li>Take full backup</li>
                  <li>Verify restore works exactly</li>
                </ul>
              </div>

              {/* Tip 2 */}
              <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl border border-amber-100 dark:border-amber-800/30">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-xl mr-2 text-rose-500">🔥</span> 2. Restrict Permission
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-medium ml-7">Only DB Admin should have DROP privileges.</p>
                <code className="text-[10px] sm:text-xs font-mono bg-gray-100 dark:bg-gray-900 p-1.5 rounded block ml-7 border border-gray-200 dark:border-gray-700 text-emerald-700 dark:text-emerald-400">
                  REVOKE DROP ON company_db.* FROM 'app_user';
                </code>
              </div>

              {/* Tip 3 */}
              <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl border border-amber-100 dark:border-amber-800/30">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-xl mr-2 text-rose-500">🔥</span> 3. Schema Version Control
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 font-medium ml-7">Professional teams use:</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 ml-10 space-y-0.5 font-medium list-disc mb-2">
                  <li>Migration scripts</li>
                  <li>Schema version tracking</li>
                </ul>
                <p className="text-xs font-bold text-rose-600 dark:text-rose-400 ml-7 bg-rose-50 dark:bg-rose-900/20 px-2 py-1 inline-block rounded">Never manually drop in production.</p>
              </div>

              {/* Tip 4 */}
              <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl border border-amber-100 dark:border-amber-800/30 flex flex-col justify-center">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-xl mr-2 text-rose-500">🔥</span> 4. Confirm Environment
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-medium ml-7">Always check:</p>
                <code className="text-sm font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded block ml-7 font-bold border border-gray-200 dark:border-gray-700 mb-2 text-blue-600 dark:text-blue-400 w-fit">
                  SELECT DATABASE();
                </code>
                <p className="text-xs text-gray-500 dark:text-gray-400 ml-7 font-medium italic">Make sure you're not in prod.</p>
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
            { q: "What happens when DROP TABLE is executed?", a: "The entire table structure and all its data are permanently removed." },
            { q: "Can DROP TABLE be rolled back?", a: "Usually NO (unless it is executed inside a transaction and the database engine strictly supports it, like PostgreSQL or SQL Server; MySQL auto-commits DDL state)." },
            { q: "Difference between TRUNCATE and DROP?", a: "TRUNCATE removes data only (resets table). DROP removes the table structure along with the data." },
            { q: "What happens to indexes when a table is dropped?", a: "All indexes and constraints tied specifically to that table are completely deleted." },
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

export default SqlDropTable;