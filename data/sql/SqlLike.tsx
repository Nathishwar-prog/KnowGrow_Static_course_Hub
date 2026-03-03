import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, Search, Zap, Target, Briefcase, Link2, AlertTriangle, CheckCircle, HelpCircle, Lightbulb, Code, Layers } from 'lucide-react';

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

const SqlLike: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl mb-6 shadow-xl transform hover:-rotate-3 transition-transform cursor-default">
          <Search className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL LIKE
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The operator used in a WHERE clause to search for a specified pattern in a column.
        </p>
      </header>

      {/* Intro Definition Section & Wildcards */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Link2 className="w-6 h-6 mr-3 text-indigo-500" /> What is SQL LIKE?
          </h2>
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-xl mb-6">
            <span className="font-bold text-indigo-800 dark:text-indigo-400 text-lg">LIKE = Search for matching text patterns.</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
            The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-gray-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-slate-700/50">
          <div className="absolute top-0 right-0 -m-6 text-indigo-500/10"><Code className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Terminal className="w-6 h-6 mr-3 text-indigo-400" /> Wildcards Used with LIKE
          </h2>
          <p className="text-slate-300 mb-6 font-medium text-sm relative z-10">LIKE works with these powerful wildcards:</p>
          <div className="relative z-10 space-y-4 text-sm font-bold text-slate-50">
            <div className="flex items-center p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm gap-4">
              <span className="text-2xl text-indigo-400 font-black px-3 py-1 bg-black/30 rounded">%</span>
              <span className="text-gray-200 font-medium">Represents <strong className="text-white">zero, one, or many</strong> characters</span>
            </div>
            <div className="flex items-center p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm gap-4">
              <span className="text-xl text-indigo-400 font-black px-3 py-1 bg-black/30 rounded">_</span>
              <span className="text-gray-200 font-medium">Represents <strong className="text-white">exactly one</strong> character</span>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Practical Example */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700 relative">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4"><Database className="text-sky-500 w-8 h-8 mr-3" /> Practical Example Setup</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center"><Table2 className="w-5 h-5 mr-2 text-indigo-500" /> 1. Create Employees Table</h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Employees (\n    EmpID INT PRIMARY KEY,\n    Name VARCHAR(50),\n    Department VARCHAR(50)\n);`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center"><Layers className="w-5 h-5 mr-2 text-emerald-500" /> 2. Insert Sample Data</h3>
              <CodeSnippetBlock codeSnippet={`INSERT INTO Employees VALUES (1, 'Karthick', 'IT');\nINSERT INTO Employees VALUES (2, 'Anjali', 'HR');\nINSERT INTO Employees VALUES (3, 'Rahul', 'Finance');\nINSERT INTO Employees VALUES (4, 'Sneha', 'IT');\nINSERT INTO Employees VALUES (5, 'Arjun', 'Marketing');`} />
            </div>
          </div>

          {/* Current Data Output */}
          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-inner mt-8 max-w-3xl mx-auto">
            <p className="text-xs uppercase font-bold text-indigo-600 dark:text-indigo-400 mb-4 tracking-widest"><Terminal className="inline w-4 h-4 mr-1 mb-1 text-gray-400" /> Current Employees Data</p>
            <table className="w-full text-sm font-mono text-left">
              <thead className="text-xs text-gray-500 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                <tr><th className="py-3 px-4 rounded-tl-lg">EmpID</th><th className="px-4">Name</th><th className="px-4 rounded-tr-lg">Department</th></tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">1</td><td className="px-4">Karthick</td><td className="px-4">IT</td></tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">2</td><td className="px-4">Anjali</td><td className="px-4">HR</td></tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">3</td><td className="px-4">Rahul</td><td className="px-4">Finance</td></tr>
                <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">4</td><td className="px-4">Sneha</td><td className="px-4">IT</td></tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">5</td><td className="px-4">Arjun</td><td className="px-4">Marketing</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Basic LIKE Examples */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 px-4"><Zap className="w-8 h-8 mr-3 text-amber-500" /> Basic LIKE Examples</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700">
            <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
              <span className="text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-lg mr-3 text-sm">1</span> Names Starting with 'A'
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-900/50 p-2 rounded"><code className="font-bold text-indigo-600 dark:text-indigo-400">LIKE 'A%'</code> &rarr; Starts with A</p>
            <CodeSnippetBlock codeSnippet={`SELECT * \nFROM Employees\nWHERE Name LIKE 'A%';`} />
            <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-4">
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Output Matches:</p>
              <div className="flex gap-2">
                <span className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">Anjali</span>
                <span className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">Arjun</span>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700">
            <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
              <span className="text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-lg mr-3 text-sm">2</span> Names Ending with 'a'
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-900/50 p-2 rounded"><code className="font-bold text-indigo-600 dark:text-indigo-400">LIKE '%a'</code> &rarr; Matches names ending in "a"</p>
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Employees\nWHERE Name LIKE '%a';`} />
            <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-4">
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Output Matches:</p>
              <div className="flex gap-2">
                <span className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">Anjali</span>
                <span className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">Sneha</span>
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700">
            <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
              <span className="text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-lg mr-3 text-sm">3</span> Names Containing 'ar'
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-900/50 p-2 rounded"><code className="font-bold text-indigo-600 dark:text-indigo-400">LIKE '%ar%'</code> &rarr; Any characters before or after "ar"</p>
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Employees\nWHERE Name LIKE '%ar%';`} />
            <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-4">
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Output Matches:</p>
              <div className="flex gap-2">
                <span className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">Karthick</span>
                <span className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">Arjun</span>
              </div>
            </div>
          </div>

          {/* Example 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700">
            <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
              <span className="text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-lg mr-3 text-sm">4</span> Using Single Character _
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-900/50 p-2 rounded"><code className="font-bold text-indigo-600 dark:text-indigo-400">LIKE '_a%'</code> &rarr; Second character must be "a"</p>
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Employees\nWHERE Name LIKE '_a%';`} />
            <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-4">
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Visual Understanding:</p>
              <div className="flex flex-col gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                <p>Matches: <span className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/20 px-1 rounded">K<u className="decoration-2 decoration-indigo-400">a</u>rthick</span>, <span className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/20 px-1 rounded">R<u className="decoration-2 decoration-indigo-400">a</u>hul</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Sensitivity & Real-World */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
            <Target className="w-6 h-6 mr-3 text-rose-500" /> Case Sensitivity
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">Depends on the database you are using:</p>
          <ul className="space-y-4 font-medium text-gray-700 dark:text-gray-300 text-sm">
            <li className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <strong className="text-sky-600 dark:text-sky-400 mr-2 w-24">MySQL:</strong> Case-insensitive (usually)
            </li>
            <li className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <strong className="text-indigo-600 dark:text-indigo-400 mr-2 w-24">PostgreSQL:</strong> Case-sensitive (use <code className="bg-indigo-100 dark:bg-indigo-900/40 px-1 rounded ml-1 text-indigo-700 dark:text-indigo-300">ILIKE</code> instead of LIKE)
            </li>
            <li className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <strong className="text-emerald-600 dark:text-emerald-400 mr-2 w-24">SQL Server:</strong> Depends on collation settings
            </li>
          </ul>
          <div className="mt-6">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Example (PostgreSQL):</p>
            <code className="block bg-gray-900 text-indigo-300 p-3 rounded-lg font-mono text-sm border border-gray-700">
              WHERE Name ILIKE 'a%';
            </code>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/10 p-8 rounded-3xl shadow-sm border border-indigo-200 dark:border-indigo-800/30">
          <h2 className="text-2xl font-bold flex items-center text-indigo-900 dark:text-indigo-300 mb-6 border-b border-indigo-200 dark:border-indigo-800/50 pb-4">
            <CheckCircle className="w-6 h-6 mr-3 text-indigo-500" /> Real-World Use Cases
          </h2>
          <p className="text-indigo-800 dark:text-indigo-200 font-medium mb-4">LIKE is heavily used in everyday applications:</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Search bars</div>
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Username filtering</div>
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Email filtering</div>
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Product search</div>
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Log searching</div>
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Auto-complete systems</div>
          </div>
          <p className="text-sm font-bold text-indigo-800 dark:text-indigo-400 mb-2">Example Use Case:</p>
          <code className="block bg-white dark:bg-black p-3 rounded-lg font-mono text-sm border border-indigo-200 dark:border-indigo-800 text-gray-700 dark:text-gray-300">
            SELECT *<br />
            FROM Products<br />
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">WHERE ProductName LIKE '%laptop%';</span>
          </code>
        </div>
      </section>

      {/* Performance & Advice */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl shadow-sm border border-red-200 dark:border-red-900/30">
            <h2 className="text-xl font-black flex items-center text-red-900 dark:text-red-400 mb-6 border-b border-red-200 dark:border-red-900/30 pb-4">
              <AlertTriangle className="w-6 h-6 mr-3 text-red-500" /> Performance Considerations
            </h2>

            <div className="mb-6">
              <div className="flex items-center text-red-700 dark:text-red-400 font-bold mb-2">
                <span className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded text-xs mr-2 border border-red-200 dark:border-red-800">❌ Slow Query</span>
              </div>
              <code className="block bg-white/50 dark:bg-black/50 p-2 rounded text-sm font-mono border border-red-100 dark:border-red-900/30 text-gray-700 dark:text-gray-300 mb-2">
                WHERE Name LIKE <strong className="text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/40 px-1 rounded">'%ar'</strong>;
              </code>
              <p className="text-sm text-red-800 dark:text-red-300 font-medium">When <code className="font-bold">%</code> is at the beginning, index cannot be used efficiently. (Full Table Scan)</p>
            </div>

            <div>
              <div className="flex items-center text-emerald-700 dark:text-emerald-400 font-bold mb-2">
                <span className="bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded text-xs mr-2 border border-emerald-200 dark:border-emerald-800">✅ Better Performance</span>
              </div>
              <code className="block bg-white/50 dark:bg-black/50 p-2 rounded text-sm font-mono border border-emerald-100 dark:border-emerald-900/30 text-gray-700 dark:text-gray-300 mb-2">
                WHERE Name LIKE <strong className="text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40 px-1 rounded">'Ar%'</strong>;
              </code>
              <p className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">Index can be used when pattern starts normally with characters.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 p-8 opacity-5 text-amber-500">
            <Lightbulb className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-amber-500" /> 15+ Years Professional Advice
          </h2>
          <p className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-8 border-b border-gray-100 dark:border-gray-700 pb-4 relative z-10">Production Standard Best Practices</p>

          <div className="space-y-6 relative z-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-black text-amber-600 dark:text-amber-400 text-lg border border-amber-200 dark:border-amber-800 shrink-0 shadow-sm">1</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">Avoid Leading % for Large Tables</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">It prevents index usage and causes massive performance bottlenecks.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-black text-amber-600 dark:text-amber-400 text-lg border border-amber-200 dark:border-amber-800 shrink-0 shadow-sm">2</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">Use Full-Text Search for Advanced Search</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-2">For complex search systems, LIKE is not enough. Use specialized tools instead:</p>
                <div className="flex gap-2">
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs font-bold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">Full-text indexes</span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs font-bold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">Search engines (Elasticsearch)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-black text-amber-600 dark:text-amber-400 text-lg border border-amber-200 dark:border-amber-800 shrink-0 shadow-sm">3</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">Combine LIKE with Other Filters</h4>
                <code className="text-xs font-mono font-bold text-gray-800 dark:text-gray-300 block bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
                  SELECT * <br />FROM Employees <br /><span className="text-amber-600 dark:text-amber-400">WHERE Department = 'IT'<br />AND Name LIKE 'S%';</span>
                </code>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-black text-amber-600 dark:text-amber-400 text-lg border border-amber-200 dark:border-amber-800 shrink-0 shadow-sm">4</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">Sanitize Input (Security)</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm"><strong className="text-red-500">Never</strong> concatenate user input directly into your LIKE queries — avoid SQL Injection vulnerabilities at all costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Exercises */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-tr from-indigo-600 to-purple-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 w-full lg:w-3/4">
            <h2 className="text-3xl font-black mb-6 flex items-center">
              <HelpCircle className="w-8 h-8 mr-3 text-indigo-300" /> Practice Exercises
            </h2>
            <ul className="space-y-4 font-semibold text-lg text-indigo-50">
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-indigo-400 mr-4 shadow-sm border border-indigo-200"></span> Find names starting with 'K'.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-indigo-400 mr-4 shadow-sm border border-indigo-200"></span> Find names ending with 'l'.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-indigo-400 mr-4 shadow-sm border border-indigo-200"></span> Find names containing 'ha'.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-indigo-400 mr-4 shadow-sm border border-indigo-200"></span> Use <code className="bg-indigo-900/50 px-2 rounded mx-1">_</code> to find names with exactly 5 characters.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-indigo-400 mr-4 shadow-sm border border-indigo-200"></span> Combine LIKE with ORDER BY clause.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlLike;