import React, { useState } from 'react';
import {
  Database, BookOpen, Search, Zap, Layers, Activity,
  CheckCircle2, AlertTriangle, Target, Monitor, Flag, ArrowRight,
  TrendingDown, TrendingUp, Key, Filter, Check, Copy, Flame, Lightbulb
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'sql' }: { codeSnippet: string, title?: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm w-full">
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
      <div className="relative group bg-gray-900 flex-grow h-full">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-emerald-300 leading-relaxed min-h-full">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const SqlIndex: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans text-gray-800 dark:text-gray-200">

      {/* Introduction */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-600 dark:bg-indigo-500 rounded-3xl mb-6 shadow-xl border-4 border-white dark:border-gray-800">
          <BookOpen className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mb-6 tracking-tight">
          What is an INDEX?
        </h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden">
          <p className="text-lg font-medium mb-6 leading-relaxed flex items-start">
            <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-1 rounded mr-3 mt-1 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </span>
            <span>
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold">Definition:</strong> An INDEX is a database object that improves the speed of data retrieval operations on a table.
            </span>
          </p>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 mb-8">
            <p className="font-bold text-indigo-900 dark:text-indigo-200 text-sm uppercase tracking-widest mb-2 flex items-center">
              <span className="text-2xl mr-3">👉</span> In simple words:
            </p>
            <p className="text-xl font-black text-indigo-800 dark:text-indigo-300 ml-9 mb-2">Index = Book Index</p>
            <p className="text-indigo-700 dark:text-indigo-400 font-medium ml-9">Instead of reading the whole book, you jump directly to the page.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-200 dark:border-rose-800/30 flex-1 flex flex-col items-center text-center">
              <AlertTriangle className="w-8 h-8 text-rose-500 mb-3" />
              <p className="font-bold text-rose-800 dark:text-rose-300 mb-2">Without index</p>
              <p className="text-sm font-medium text-rose-700 dark:text-rose-400">Database scans entire table<br />(Full Table Scan)</p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800/30 flex-1 flex flex-col items-center text-center">
              <Zap className="w-8 h-8 text-emerald-500 mb-3" />
              <p className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">With index</p>
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Database jumps directly<br />to matching rows</p>
            </div>
          </div>
        </div>
      </header>

      {/* 🧠 2️⃣ Visual Understanding */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center justify-center">
          <span className="bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-purple-200 dark:border-purple-800/50">
            <Activity className="w-6 h-6" />
          </span>
          2️⃣ Visual Understanding
        </h2>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
          <p className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">Imagine a table with 1 million rows.</p>

          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform"></div>
              <h4 className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-xs mb-4">Without Index:</h4>
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <span className="text-xl">🔎</span> Check row 1 <ArrowRight className="w-3 h-3" /> row 2 <ArrowRight className="w-3 h-3" /> row 3 <ArrowRight className="w-3 h-3" /> <span className="opacity-50">...</span> <ArrowRight className="w-3 h-3" /> row 1,000,000
              </div>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform"></div>
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide text-xs mb-4">With Index:</h4>
              <div className="flex items-center text-sm font-bold text-emerald-800 dark:text-emerald-300">
                <span className="text-2xl mr-3">📖</span> Look in index <ArrowRight className="w-4 h-4 mx-2" /> jump directly to correct location
              </div>
            </div>
          </div>

          {/* Visual Placeholder for "4" from user's content */}
          <div className="mt-8 bg-black/5 dark:bg-white/5 p-8 rounded-2xl flex items-center justify-center h-32 relative group">
            <span className="text-6xl font-black text-gray-200 dark:text-gray-700 drop-shadow-sm group-hover:scale-110 transition-transform">4</span>
          </div>
        </div>
      </section>

      {/* Examples Set & Concepts (3, 4, 5, 6) */}
      <section className="max-w-4xl mx-auto mb-20 space-y-12">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center mb-8">
          <span className="text-4xl mr-4 drop-shadow-md">🏗</span> 3️⃣ Practical Example
        </h2>

        {/* Step 1 & 2 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 relative pl-12 transition-all hover:border-blue-400 dark:hover:border-blue-500 group">
            <div className="absolute left-6 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center border-2 border-blue-500 z-10 text-xl shadow-md group-hover:scale-110 transition-transform">🧱</div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Step 1: Create Table</h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(50),
    Department VARCHAR(50),
    Salary INT
);`} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 relative pl-12 transition-all hover:border-emerald-400 dark:hover:border-emerald-500 group flex flex-col justify-center">
            <div className="absolute left-6 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center border-2 border-emerald-500 z-10 text-xl shadow-md group-hover:scale-110 transition-transform">📝</div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Step 2: Insert Sample Data</h3>
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-xl text-center italic text-gray-600 dark:text-gray-300 text-sm font-medium">
              (Imagine this table has 100,000+ rows in production.)
            </div>
          </div>
        </div>

        {/* 4 & 5 side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-rose-200 dark:border-rose-800/50 shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl shadow-md z-20">Slow</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-2xl mr-3">🔍</span> 4️⃣ Query Without Index
            </h3>
            <CodeSnippetBlock codeSnippet={`SELECT *
FROM Employees
WHERE Department = 'IT';`} />
            <div className="mt-4 p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-800/30 text-rose-800 dark:text-rose-300 text-sm font-medium space-y-2">
              <p className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 shrink-0" /> If Department column has no index → Full table scan.</p>
              <p className="font-bold">Slow for large data.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-6 rounded-2xl border border-indigo-500 shadow-xl relative group overflow-hidden transform hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 right-0 bg-emerald-400 text-indigo-900 text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl shadow-md z-20">Fast</div>
            <h3 className="text-xl font-bold mb-6 flex items-center text-white">
              <span className="text-2xl mr-3">🚀</span> 5️⃣ Create an Index
            </h3>
            <div className="mb-6 mb-6 rounded-xl overflow-hidden border border-indigo-400 shadow-inner w-full">
              <pre className="p-4 overflow-x-auto text-sm font-mono text-emerald-300 leading-relaxed bg-gray-900 min-h-full">
                <code>{`CREATE INDEX idx_department
ON Employees(Department);`}</code>
              </pre>
            </div>
            <div className="space-y-3 text-sm font-medium text-indigo-100 border-l-2 border-emerald-400 pl-4">
              <p>Now database builds a search structure for Department column.</p>
              <p className="font-bold text-emerald-300 bg-white/10 p-2 rounded-lg inline-block shadow-sm">Query becomes much faster.</p>
            </div>
          </div>
        </div>

        {/* 🧠 6️⃣ How Index Works Internally */}
        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-purple-500/20 w-64 h-64 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-8 flex items-center relative z-10">
            <span className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-purple-500">
              <Database className="w-6 h-6 text-white" />
            </span>
            6️⃣ How Index Works Internally
          </h2>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div>
              <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-4">Most databases use:</p>
              <div className="space-y-3 mb-8">
                <div className="bg-gray-800/80 p-4 border border-gray-700 rounded-xl flex items-center shadow-sm">
                  <Layers className="w-5 h-5 mr-3 text-purple-400" />
                  <div>
                    <p className="font-bold text-white text-sm">B-Tree index</p>
                    <p className="text-xs text-gray-400">(default)</p>
                  </div>
                </div>
                <div className="bg-gray-800/80 p-4 border border-gray-700 rounded-xl flex items-center shadow-sm">
                  <Search className="w-5 h-5 mr-3 text-emerald-400" />
                  <div>
                    <p className="font-bold text-white text-sm">Hash index</p>
                    <p className="text-xs text-gray-400">(some systems)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-2xl border border-gray-800 flex flex-col justify-center text-center">
              <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-4">Index stores:</p>
              <div className="bg-indigo-500/20 text-indigo-300 font-mono font-bold py-3 px-4 rounded-xl border border-indigo-500/30 mb-6 inline-flex mx-auto items-center">
                Value <ArrowRight className="w-4 h-4 mx-3 opacity-50" /> Pointer to row location
              </div>

              <p className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-2 text-left px-4">Example:</p>
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 font-mono text-sm text-left mx-auto w-full max-w-sm text-gray-300">
                <p className="mb-2"><span className="text-emerald-400 font-bold">IT</span> <span className="opacity-50 mx-2">→</span> Row 1, Row 5, Row 12</p>
                <p><span className="text-emerald-400 font-bold">HR</span> <span className="opacity-50 mx-2">→</span> Row 2, Row 7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 7️⃣ Types of Indexes */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">📊</span> 7️⃣ Types of Indexes
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Primary */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-full group-hover:scale-125 transition-transform"></div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="text-blue-500 mr-2 text-xl">🔹</span> 1️⃣ Primary Index
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-3">Automatically created when you define:</p>
            <div className="inline-block bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-mono font-bold px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800 text-xs">PRIMARY KEY</div>
          </div>

          {/* Unique */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-full group-hover:scale-125 transition-transform"></div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="text-emerald-500 mr-2 text-xl">🔹</span> 2️⃣ Unique Index
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">Prevents duplicate values.</p>
            <div className="bg-gray-900 rounded-lg p-3 text-xs font-mono text-emerald-300 border border-gray-700 shadow-inner">
              <code>CREATE UNIQUE INDEX idx_email<br />ON Users(Email);</code>
            </div>
          </div>
        </div>

        {/* Composite & Clustered */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800/30 shadow-sm col-span-1">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-200 flex items-center">
                <span className="text-indigo-500 mr-2 text-xl">🔹</span> 3️⃣ Composite Index
              </h3>
              <span className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 text-[10px] font-black uppercase px-2 py-1 rounded-full border border-rose-200 dark:border-rose-800/50">Very Important</span>
            </div>
            <p className="text-sm font-medium text-indigo-800 dark:text-indigo-300 mb-4 bg-white/50 dark:bg-black/10 px-3 py-1.5 rounded w-fit">Index on multiple columns.</p>
            <div className="bg-gray-900 rounded-lg p-3 text-xs font-mono text-emerald-300 border border-gray-700 shadow-inner mb-4">
              <code>CREATE INDEX idx_dept_salary<br />ON Employees(Department, Salary);</code>
            </div>
            <p className="text-xs font-bold text-gray-600 dark:text-gray-400 italic">Used when filtering by both columns.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm col-span-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-amber-500 mr-2 text-xl">🔹</span> 4️⃣ Clustered vs Non-Clustered
            </h3>
            <div className="flex-grow flex items-center overflow-x-auto">
              <table className="w-full text-left font-sans text-sm border-collapse">
                <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 font-bold uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-tl-lg">Clustered</th>
                    <th className="px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-tr-lg">Non-Clustered</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-medium">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">Changes physical order</td>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">Separate structure</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                    <td className="px-4 py-3 text-rose-600 dark:text-rose-400 font-bold border border-gray-200 dark:border-gray-700">Only one per table</td>
                    <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold border border-gray-200 dark:border-gray-700">Multiple allowed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 🔎 8 & 9 When Used or NOT Used */}
      <section className="max-w-4xl mx-auto mb-20 grid md:grid-cols-2 gap-8">
        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800/30 shadow-sm">
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center border-b border-emerald-200 dark:border-emerald-800/50 pb-4">
            <span className="text-3xl mr-3 drop-shadow-md">🔎</span> 8️⃣ When Index is Used
          </h2>
          <p className="font-bold text-emerald-800 dark:text-emerald-400 mb-5 uppercase tracking-wide text-xs">Index works best with:</p>
          <ul className="space-y-4 font-mono text-sm font-bold text-emerald-900 dark:text-emerald-200">
            <li className="bg-white/60 dark:bg-black/20 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/50 flex items-center shadow-sm hover:shadow-md transition-shadow">
              <span className="bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100 px-2 py-1 rounded text-xs mr-3 shrink-0">WHERE</span> column = value
            </li>
            <li className="bg-white/60 dark:bg-black/20 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/50 flex items-center shadow-sm hover:shadow-md transition-shadow">
              <span className="bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100 px-2 py-1 rounded text-xs mr-3 shrink-0">WHERE</span> column {'>'} value
            </li>
            <li className="bg-white/60 dark:bg-black/20 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/50 flex items-center shadow-sm hover:shadow-md transition-shadow">
              <span className="bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-2 py-1 rounded text-xs mr-3 shrink-0">ORDER BY</span> column
            </li>
            <li className="bg-white/60 dark:bg-black/20 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/50 flex items-center shadow-sm hover:shadow-md transition-shadow">
              <span className="bg-amber-200 text-amber-800 dark:bg-amber-800 dark:text-amber-100 px-2 py-1 rounded text-xs mr-3 shrink-0">JOIN ON</span> column
            </li>
          </ul>
        </div>

        <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-3xl border border-rose-200 dark:border-rose-800/30 shadow-sm">
          <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-300 mb-6 flex items-center border-b border-rose-200 dark:border-rose-800/50 pb-4">
            <span className="text-3xl mr-3 bg-white/50 dark:bg-black/20 p-1.5 rounded-xl border border-rose-200 dark:border-rose-800/50">⚠</span> 9️⃣ When Index is NOT Used
          </h2>
          <p className="font-bold text-rose-800 dark:text-rose-400 mb-5 uppercase tracking-wide text-xs">Index may not be used if:</p>

          <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl border border-rose-100 dark:border-rose-800/50 font-mono text-sm text-rose-900 dark:text-rose-200 shadow-sm mb-6 font-bold flex flex-wrap items-center">
            <span className="bg-rose-200 text-rose-800 dark:bg-rose-800 dark:text-rose-100 px-2 py-1 rounded text-xs mr-2 mb-2">WHERE</span> <span className="text-indigo-600 dark:text-indigo-400 mb-2">LOWER</span>(Name) = 'karthick'
          </div>

          <div className="flex items-start bg-rose-100 dark:bg-rose-900/30 p-4 rounded-xl border border-rose-300 dark:border-rose-700/50">
            <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-400 mr-3 shrink-0" />
            <p className="text-rose-900 dark:text-rose-200 font-bold text-sm">Functions on indexed columns can prevent usage.</p>
          </div>
        </div>
      </section>

      {/* 🔥 10 & 🏢 11 Performance & Real World */}
      <section className="max-w-4xl mx-auto mb-20 space-y-12">
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-8 flex items-center relative z-10 border-b border-gray-800 pb-5">
            <span className="bg-amber-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm">
              <Flame className="w-6 h-6 text-white" />
            </span>
            10️⃣ Performance Comparison Concept
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-8 relative z-10">
            <div className="bg-gray-800 p-6 rounded-2xl border border-rose-500/30 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-rose-500"></div>
              <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-3">Without index:</p>
              <p className="text-3xl font-black text-rose-400 font-mono tracking-tight mb-2">O(n)</p>
              <p className="text-sm text-gray-300 font-medium bg-black/20 px-3 py-1 rounded-full">search time</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl border border-emerald-500/30 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-3">With B-tree index:</p>
              <p className="text-3xl font-black text-emerald-400 font-mono tracking-tight mb-2">O(log n)</p>
              <p className="text-sm text-gray-300 font-medium bg-black/20 px-3 py-1 rounded-full">search time</p>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl text-center relative z-10">
            <p className="font-black text-amber-400 text-lg flex items-center justify-center tracking-wide"><TrendingDown className="w-6 h-6 mr-3 text-amber-500" /> Huge difference when rows = millions.</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-blue-200 dark:border-blue-800/50">
              <Activity className="w-6 h-6" />
            </span>
            11️⃣ Real-World Example
          </h2>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm mb-4 bg-gray-50 dark:bg-gray-900/50 p-2 rounded inline-block">In production systems like:</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <span className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700 font-bold text-sm text-gray-800 dark:text-gray-200 flex items-center"><Target className="w-4 h-4 mr-2 text-indigo-500" /> Banking</span>
                  <span className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700 font-bold text-sm text-gray-800 dark:text-gray-200 flex items-center"><Target className="w-4 h-4 mr-2 text-indigo-500" /> E-commerce</span>
                  <span className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700 font-bold text-sm text-gray-800 dark:text-gray-200 flex items-center"><Target className="w-4 h-4 mr-2 text-indigo-500" /> Hospital sys</span>
                  <span className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700 font-bold text-sm text-gray-800 dark:text-gray-200 flex items-center"><Target className="w-4 h-4 mr-2 text-indigo-500" /> Dashboards</span>
                </div>
              </div>

              <div>
                <p className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm mb-4 bg-gray-50 dark:bg-gray-900/50 p-2 rounded inline-block">Indexes are mandatory for:</p>
                <ul className="space-y-2 font-bold text-sm text-gray-800 dark:text-gray-200 mb-6">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Login queries</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Search queries</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Reporting</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Filtering</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Joins</li>
                </ul>
              </div>
            </div>

            <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-2xl border border-rose-200 dark:border-rose-800/50 text-center font-bold text-rose-800 dark:text-rose-300 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 mr-3 shrink-0 text-rose-500" /> Without indexes → system becomes slow under load.
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 12️⃣ How to Check Query Performance */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex justify-center items-center">
          <span className="bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-purple-200 dark:border-purple-800/50">
            <Search className="w-6 h-6" />
          </span>
          12️⃣ Check Query Performance
        </h2>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 border border-blue-500 shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Search className="w-48 h-48" />
          </div>

          <p className="font-bold text-blue-200 uppercase tracking-widest text-sm mb-6 relative z-10">Most databases support:</p>

          <div className="bg-black/40 rounded-xl p-4 font-mono text-[13px] sm:text-base text-emerald-300 border border-white/10 shadow-inner mb-8 relative z-10 w-full mx-auto max-w-2xl text-left overflow-x-auto">
            <code><span className="text-pink-400">EXPLAIN</span> <span className="text-blue-300">SELECT</span> * <span className="text-blue-300">FROM</span> Employees <span className="text-blue-300">WHERE</span> Department = <span className="text-amber-300">'IT'</span>;</code>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 font-bold text-sm flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> Full table scan
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 font-bold text-sm flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> Index scan
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 font-bold text-sm flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> Execution cost
            </div>
          </div>

          <div className="bg-white text-indigo-900 font-black px-6 py-3 rounded-full inline-flex items-center shadow-lg relative z-10 tracking-wide">
            <Database className="w-5 h-5 mr-3 text-indigo-500" /> Teach this in your course — very powerful.
          </div>
        </div>
      </section>

      {/* 💡 13️⃣ My 15+ Years Professional Advice */}
      <section className="max-w-5xl mx-auto space-y-8 mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">💡</span> 13️⃣ My 15+ Years Professional Advice
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

          {/* 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-2 bg-rose-500 h-full"></div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shrink-0">1</span>
              Don’t Over-Index
            </h3>
            <p className="font-bold text-rose-600 dark:text-rose-400 text-sm mb-3">More indexes = slower INSERT, UPDATE, DELETE.</p>
            <div className="mt-auto bg-gray-50 dark:bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-100 dark:border-gray-700 font-black text-center text-gray-700 dark:text-gray-300 text-sm shadow-sm inline-block">
              Balance is key.
            </div>
          </div>

          {/* 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-2 bg-emerald-500 h-full"></div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shrink-0">2</span>
              Always Index:
            </h3>
            <ul className="space-y-2 mt-auto text-sm font-bold text-gray-700 dark:text-gray-300">
              <li className="flex items-center bg-gray-50 dark:bg-gray-900/50 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-gray-700"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Primary Keys</li>
              <li className="flex items-center bg-gray-50 dark:bg-gray-900/50 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-gray-700"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Foreign Keys</li>
              <li className="flex items-center bg-gray-50 dark:bg-gray-900/50 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-gray-700"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Cols in JOIN</li>
              <li className="flex items-center bg-gray-50 dark:bg-gray-900/50 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-gray-700"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Cols in WHERE</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden md:col-span-2 lg:col-span-1 flex flex-col">
            <div className="absolute top-0 right-0 w-2 bg-indigo-500 h-full"></div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shrink-0">3</span>
              Composite Index
            </h3>
            <p className="text-[10px] font-black uppercase text-indigo-500 tracking-wider mb-3">Order matters: (Dept, Salary)</p>

            <div className="flex-grow flex flex-col space-y-3 font-mono text-[10px] sm:text-xs text-gray-800 dark:text-gray-200 font-bold mt-auto">
              <div>
                <p className="text-emerald-600 dark:text-emerald-400 font-sans text-xs uppercase mb-1">Works for:</p>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded border border-emerald-100 dark:border-emerald-800/30">WHERE Dept = ?</div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded border border-emerald-100 dark:border-emerald-800/30 mt-1">WHERE Dept=? AND Salary{'>'}?</div>
              </div>
              <div>
                <p className="text-rose-600 dark:text-rose-400 font-sans text-xs uppercase mb-1">But not:</p>
                <div className="bg-rose-50 dark:bg-rose-900/20 p-2 rounded border border-rose-100 dark:border-rose-800/30">WHERE Salary = ? only</div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-2 bg-amber-500 h-full"></div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shrink-0">4</span>
              Monitor Queries
            </h3>
            <p className="font-bold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest mb-3">Use:</p>
            <div className="space-y-2 mt-auto text-sm font-bold text-gray-700 dark:text-gray-300">
              <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm"><Search className="w-4 h-4 mr-2 text-amber-500" /> Query logs</div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm"><Search className="w-4 h-4 mr-2 text-amber-500" /> Execution plans</div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm"><Search className="w-4 h-4 mr-2 text-amber-500" /> Monitors</div>
            </div>
          </div>

        </div>
      </section>

      {/* 🧪 14️⃣ Practice Exercises */}
      <section className="max-w-4xl mx-auto pb-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 border border-indigo-500 shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Target className="w-48 h-48" />
          </div>
          <h2 className="text-3xl font-extrabold mb-8 flex items-center relative z-10">
            <span className="text-4xl mr-4 drop-shadow-md">🧪</span> 14️⃣ Practice Exercises
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {[
              "Create index on Salary column",
              "Composite index on Dept + Salary",
              "Use EXPLAIN before/after index",
              "Query with and without index",
              "Test performance with large dataset"
            ].map((task, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl flex items-center shadow-sm hover:bg-white/20 transition-colors cursor-default">
                <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 shrink-0">{idx + 1}</div>
                <span className="font-medium text-sm sm:text-base leading-tight">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlIndex;