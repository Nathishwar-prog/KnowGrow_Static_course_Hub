import React, { useState } from 'react';
import {
  Database, Search, Zap, Check, Copy, Table2,
  Target, AlertTriangle, Lightbulb, Hexagon, Layers,
  CheckCircle2, XCircle, ArrowRight, GitMerge, Brain,
  BarChart2, Filter, Info, Server
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
      <div className="relative group bg-gray-900 flex-grow">
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

const SqlGroupBy: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* Header Topic */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-3xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <Layers className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          What is GROUP BY?
        </h1>

        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-5 pointer-events-none">
            <CheckCircle2 className="w-32 h-32 text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="text-emerald-500 text-2xl mr-2">✅</span> Definition
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 leading-relaxed">
            <code className="bg-indigo-100 dark:bg-indigo-900/40 px-2 py-0.5 rounded font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">GROUP BY</code> is used to group rows that have the same values in specified columns into summary rows.
          </p>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">It is commonly used with aggregate functions:</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["COUNT()", "SUM()", "AVG()", "MAX()", "MIN()"].map(func => (
              <span key={func} className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full font-bold font-mono text-sm border border-emerald-200 dark:border-emerald-800/50">
                {func}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-center sm:text-left">
            <span className="text-gray-500 mr-4 font-bold uppercase tracking-wider mb-2 sm:mb-0">👉 IN SIMPLE WORDS:</span>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200 px-2 py-1 rounded">GROUP BY</span> <span className="mx-2 text-gray-400">=</span> "Combine similar rows and calculate something."
            </div>
          </div>
        </div>
      </header>

      {/* 🧠 2️⃣ Visual Understanding */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🧠</span> 2️⃣ Visual Understanding
        </h2>

        <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 shadow-xl relative overflow-hidden">
          <p className="text-white font-medium mb-6 text-lg text-center">Imagine a sales table:</p>

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-lg text-center flex flex-col items-center">
              <XCircle className="w-12 h-12 text-rose-400 mb-4" />
              <h3 className="font-bold text-white mb-2 text-xl">Without GROUP BY</h3>
              <p className="text-rose-200 bg-rose-900/40 px-3 py-1.5 rounded-lg border border-rose-500/30">Shows every isolated row</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-6 shadow-lg text-center flex flex-col items-center relative">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden md:block text-gray-500 z-20">
                <ArrowRight className="w-8 h-8" />
              </div>
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="font-bold text-white mb-2 text-xl">With GROUP BY</h3>
              <p className="text-emerald-200 bg-emerald-900/40 px-3 py-1.5 rounded-lg border border-emerald-500/30">Combines similar rows into one summary row</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏗 3️⃣ Practical Example – Step by Step */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🏗️</span> 3️⃣ Practical Example – <span className="text-indigo-600 dark:text-indigo-400 ml-2">Step by Step</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-6 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg inline-block border border-blue-100 dark:border-blue-800/50">
          We’ll use a <strong className="text-indigo-600 dark:text-indigo-400">Sales Table</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-300 mb-4 flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg w-fit">
              <span className="mr-2 text-xl">🧱</span> Step 1: Create Table
            </h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Sales (
    SaleID INT PRIMARY KEY,
    EmployeeName VARCHAR(50),
    Department VARCHAR(50),
    Amount INT
);`} />
          </div>

          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-300 mb-4 flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg w-fit">
              <span className="mr-2 text-xl">📝</span> Step 2: Insert Data
            </h3>
            <CodeSnippetBlock codeSnippet={`INSERT INTO Sales VALUES (1, 'Karthick', 'IT', 5000);
INSERT INTO Sales VALUES (2, 'Anjali', 'HR', 3000);
INSERT INTO Sales VALUES (3, 'Rahul', 'IT', 7000);
INSERT INTO Sales VALUES (4, 'Sneha', 'Finance', 4000);
INSERT INTO Sales VALUES (5, 'Arjun', 'IT', 6000);
INSERT INTO Sales VALUES (6, 'Meena', 'HR', 2000);`} />
          </div>
        </div>

        {/* Current Data Visualization Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm overflow-hidden mb-8">
          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center text-lg"><Table2 className="w-5 h-5 mr-2 text-indigo-500" /> 📊 Current Data</h4>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 font-bold uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">SaleID</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">EmployeeName</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Department</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">1</td><td className="px-4 py-2 font-medium">Karthick</td><td className="px-4 py-2 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10">IT</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">5000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">2</td><td className="px-4 py-2 font-medium">Anjali</td><td className="px-4 py-2 font-bold text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-900/10">HR</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">3000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">3</td><td className="px-4 py-2 font-medium">Rahul</td><td className="px-4 py-2 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10">IT</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">7000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">4</td><td className="px-4 py-2 font-medium">Sneha</td><td className="px-4 py-2 font-bold text-sky-600 dark:text-sky-400 bg-sky-50/50 dark:bg-sky-900/10">Finance</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">4000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">5</td><td className="px-4 py-2 font-medium">Arjun</td><td className="px-4 py-2 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10">IT</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">6000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">6</td><td className="px-4 py-2 font-medium">Meena</td><td className="px-4 py-2 font-bold text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-900/10">HR</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🔥 4️⃣ Basic GROUP BY Example */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🔥</span> 4️⃣ Basic GROUP BY Example
        </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden p-6 sm:p-8">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-4 flex items-center text-lg bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-800/50 w-fit">
            <Target className="w-5 h-5 mr-2" /> Total Sales Per Department
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <CodeSnippetBlock codeSnippet={`SELECT Department, SUM(Amount) AS TotalSales
FROM Sales
GROUP BY Department;`} />
            </div>

            {/* Output Table */}
            <div className="border border-indigo-200 dark:border-indigo-800/50 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm mt-0">
              <div className="bg-indigo-100 dark:bg-indigo-900/40 px-4 py-3 border-b border-indigo-200 dark:border-indigo-800/50 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-300 flex items-center uppercase tracking-widest text-sm"><Table2 className="w-4 h-4 mr-2" /> 📊 Output</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 font-bold uppercase text-xs">
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">Department</th>
                      <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 border-l border-gray-200 dark:border-gray-700">TotalSales</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-800 dark:text-gray-200">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="px-6 py-3 font-bold text-indigo-600 dark:text-indigo-400">IT</td>
                      <td className="px-6 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 border-l border-gray-100 dark:border-gray-800">18000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="px-6 py-3 font-bold text-rose-600 dark:text-rose-400">HR</td>
                      <td className="px-6 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 border-l border-gray-100 dark:border-gray-800">5000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="px-6 py-3 font-bold text-sky-600 dark:text-sky-400">Finance</td>
                      <td className="px-6 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 border-l border-gray-100 dark:border-gray-800">4000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center text-lg"><Brain className="w-5 h-5 mr-2 text-indigo-500" /> Why?</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="font-bold w-20 text-indigo-600 dark:text-indigo-400">IT</span>
                <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
                <span>5000 + 7000 + 6000 = <strong className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded">18000</strong></span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="font-bold w-20 text-rose-600 dark:text-rose-400">HR</span>
                <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
                <span>3000 + 2000 = <strong className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded">5000</strong></span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="font-bold w-20 text-sky-600 dark:text-sky-400">Finance</span>
                <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
                <span>4000 = <strong className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded">4000</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📈 5️⃣ & 6️⃣ GROUP BY with COUNT() and AVG() */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">📈</span> 5️⃣ & 6️⃣ GROUP BY with Other Functions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden p-6 text-center">
            <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-4 flex items-center justify-center text-lg bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-lg border border-emerald-100 dark:border-emerald-800/50 mx-auto w-fit">
              <BarChart2 className="w-5 h-5 mr-2" /> Using COUNT()
            </h3>
            <p className="font-medium text-gray-600 dark:text-gray-400 mb-4">🎯 Count Employees Per Department</p>
            <div className="text-left">
              <CodeSnippetBlock codeSnippet={`SELECT Department, COUNT(*) AS TotalEmployees
FROM Sales
GROUP BY Department;`} />
            </div>

            {/* Output */}
            <div className="mt-4 border border-emerald-200 dark:border-emerald-800/50 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 px-4 py-2 text-emerald-900 dark:text-emerald-300 font-bold uppercase tracking-wider text-xs">Output</div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 font-mono text-sm text-left">
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2 mb-2 font-bold text-gray-500">
                  <span>Department</span><span>TotalEmployees</span>
                </div>
                <div className="flex justify-between py-1 text-gray-800 dark:text-gray-300"><span className="text-indigo-500">IT</span><span className="font-bold">3</span></div>
                <div className="flex justify-between py-1 text-gray-800 dark:text-gray-300"><span className="text-rose-500">HR</span><span className="font-bold">2</span></div>
                <div className="flex justify-between py-1 text-gray-800 dark:text-gray-300"><span className="text-sky-500">Finance</span><span className="font-bold">1</span></div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden p-6 text-center">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center justify-center text-lg bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg border border-blue-100 dark:border-blue-800/50 mx-auto w-fit">
              <PlusCircleIcon className="w-5 h-5 mr-2" /> Using AVG()
            </h3>
            <p className="font-medium text-gray-600 dark:text-gray-400 mb-4">🎯 Average Sales Per Department</p>
            <div className="text-left">
              <CodeSnippetBlock codeSnippet={`SELECT Department, AVG(Amount) AS AvgSales
FROM Sales
GROUP BY Department;`} />
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 7️⃣ & 8️⃣ Multiple Columns & Common Error */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🔥</span> 7️⃣ Multiple Columns & Common Errors
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm mb-8">
          <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center text-lg bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/50 w-fit">
            <Target className="w-5 h-5 mr-2 text-indigo-500" /> Group by Department and Employee
          </h3>
          <CodeSnippetBlock codeSnippet={`SELECT Department, EmployeeName, SUM(Amount) AS Total
FROM Sales
GROUP BY Department, EmployeeName;`} />
          <p className="mt-4 text-indigo-800 dark:text-indigo-300 font-bold bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/50 w-fit flex items-center">
            👉 When you select multiple columns, you must include them in GROUP BY.
          </p>
        </div>

        <div className="bg-rose-50 dark:bg-rose-900/10 rounded-2xl border border-rose-200 dark:border-rose-800 p-6 shadow-sm border-l-4 border-l-rose-500">
          <h3 className="font-bold text-rose-800 dark:text-rose-400 mb-4 flex items-center text-lg uppercase tracking-wider">
            <AlertTriangle className="w-6 h-6 mr-2" /> 8️⃣ Common Error Students Make
          </h3>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="bg-white/60 dark:bg-gray-900/50 p-5 rounded-xl border border-rose-200 dark:border-rose-800/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-rose-500 text-white p-2 rounded-bl-xl font-bold flex items-center shadow-lg"><XCircle className="w-4 h-4 mr-1" /> WRONG</div>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 pt-2">❌ Wrong Query:</h4>
              <CodeSnippetBlock codeSnippet={`SELECT Department, EmployeeName, SUM(Amount)
FROM Sales
GROUP BY Department;`} />
              <p className="text-rose-600 dark:text-rose-400 font-bold mt-4 flex items-center bg-rose-100 dark:bg-rose-900/40 p-2 rounded border border-rose-200 dark:border-rose-800/50 text-sm">
                <AlertTriangle className="w-4 h-4 mr-2" /> 🚨 ERROR: EmployeeName is not grouped.
              </p>
            </div>

            <div className="bg-white/60 dark:bg-gray-900/50 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800/50 shadow-sm">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2" /> The Correct Rule</h4>
              <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50 text-lg text-center shadow-inner">
                Every non-aggregated column in <code className="text-indigo-600 dark:text-indigo-400 font-bold bg-white dark:bg-gray-800 px-2 py-0.5 rounded shadow-sm">SELECT</code> <br className="hidden sm:block" />
                must be in <code className="text-emerald-600 dark:text-emerald-400 font-bold bg-white dark:bg-gray-800 px-2 py-0.5 rounded shadow-sm">GROUP BY</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔎 9️⃣ GROUP BY with HAVING & 🆚 WHERE vs HAVING */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🔎</span> 9️⃣ GROUP BY with HAVING
        </h2>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-3xl border border-indigo-200 dark:border-indigo-800/50 p-6 sm:p-8 shadow-sm mb-12">
          <p className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-6 flex items-center w-fit border-b border-indigo-200 dark:border-indigo-800/50 pb-2">
            <Filter className="w-6 h-6 mr-2 text-indigo-500" /> HAVING filters grouped data.
          </p>

          <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-4 flex items-center text-lg bg-white/60 dark:bg-black/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/50 w-fit">
            <Target className="w-5 h-5 mr-2" /> Show departments with total sales &gt; 6000
          </h3>

          <CodeSnippetBlock codeSnippet={`SELECT Department, SUM(Amount) AS TotalSales
FROM Sales
GROUP BY Department
HAVING SUM(Amount) > 6000;`} />
        </div>

        {/* WHERE vs HAVING */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="mr-2 text-3xl">🆚</span> WHERE vs HAVING
        </h3>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-medium min-w-[500px]">
              <thead className="bg-gray-100 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 font-bold text-sm uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">Feature</th>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-rose-50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-300">WHERE</th>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300">HAVING</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4 font-bold bg-gray-50/50 dark:bg-gray-900/20">When it filters</td>
                  <td className="px-6 py-4">Filters <strong className="text-gray-900 dark:text-white underline decoration-rose-400">before</strong> grouping</td>
                  <td className="px-6 py-4">Filters <strong className="text-gray-900 dark:text-white underline decoration-indigo-400">after</strong> grouping</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4 font-bold bg-gray-50/50 dark:bg-gray-900/20">Works on</td>
                  <td className="px-6 py-4 font-mono text-rose-600 dark:text-rose-400">rows</td>
                  <td className="px-6 py-4 font-mono text-indigo-600 dark:text-indigo-400">groups</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🎯 10️⃣ Real-World Use Cases */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🎯</span> 10️⃣ Real-World Use Cases
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <p className="text-xl text-indigo-600 dark:text-indigo-400 font-bold mb-6 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
            <PieChartIcon className="w-6 h-6 mr-2" /> In real projects, GROUP BY is used for:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Sales reports",
              "Dashboard analytics",
              "Employee performance tracking",
              "Customer purchase summary",
              "Monthly revenue calculation",
              "Data analysis"
            ].map((useCase, idx) => (
              <div key={idx} className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="font-bold text-gray-800 dark:text-gray-200">{useCase}</span>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 flex items-center">
            <Info className="w-6 h-6 text-indigo-500 mr-3 shrink-0" />
            <p className="text-indigo-900 dark:text-indigo-200 font-medium">
              If you're building analytics features for your course project — this is <strong className="text-indigo-700 dark:text-indigo-300 uppercase tracking-widest">critical</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 💡 11️⃣ My 15+ Years Professional Advice */}
      <section className="max-w-6xl mx-auto space-y-8 mb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Advice */}
          <div className="lg:col-span-8 bg-gray-900 rounded-3xl border border-gray-800 p-8 shadow-xl relative overflow-hidden h-full flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold flex flex-col sm:flex-row sm:items-center text-white mb-8 border-b border-gray-800 pb-5">
              <span className="flex items-center"><Lightbulb className="w-8 h-8 text-amber-400 mr-3" /> Professional Advice</span>
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mt-3 sm:mt-0 sm:ml-4 w-fit">15+ Years Experience</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 relative z-10 flex-grow">

              <div className="space-y-6">
                {/* 1 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-emerald-400 pr-1">1️⃣</span> Learn Aggregation Deeply</h4>
                  <p className="text-sm font-medium text-gray-300 leading-relaxed mb-3">
                    Master <code className="text-emerald-300 ml-1 bg-black/30 px-1 rounded">COUNT</code>, <code className="text-emerald-300 ml-1 bg-black/30 px-1 rounded">SUM</code>, <code className="text-emerald-300 ml-1 bg-black/30 px-1 rounded">AVG</code>, etc.
                  </p>
                  <p className="text-sm font-bold text-amber-400 bg-amber-900/20 border border-amber-500/30 p-2 rounded flex items-center">
                    <Target className="w-4 h-4 mr-2" /> These are heavily used in interviews.
                  </p>
                </div>

                {/* 3 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-blue-400 pr-1">3️⃣</span> Index Grouping Columns</h4>
                  <CodeSnippetBlock codeSnippet={`CREATE INDEX idx_department
ON Sales(Department);`} />
                  <p className="text-sm font-bold text-emerald-400 flex items-center mt-3">
                    <Database className="w-4 h-4 mr-2" /> Helps performance on large datasets.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* 2 */}
                <div className="bg-indigo-900/20 p-5 flex-grow rounded-2xl border border-indigo-500/30 shadow-sm border-l-4 border-l-amber-500 flex flex-col">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-amber-400 pr-1">2️⃣</span> Filter Early with WHERE</h4>

                  <div className="bg-rose-900/20 p-3 rounded-lg border border-rose-800/30 mb-4 text-xs font-mono">
                    <p className="text-rose-400 mb-1 font-bold uppercase tracking-widest font-sans flex items-center"><XCircle className="w-3 h-3 mr-1" /> Bad:</p>
                    <code className="text-gray-300 whitespace-pre">{`SELECT Department, SUM(Amount)
FROM Sales
GROUP BY Department
HAVING Department = 'IT';`}</code>
                  </div>

                  <div className="bg-emerald-900/20 p-3 rounded-lg border border-emerald-800/30 mb-4 text-xs font-mono">
                    <p className="text-emerald-400 mb-1 font-bold uppercase tracking-widest font-sans flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Better:</p>
                    <code className="text-white whitespace-pre">{`SELECT Department, SUM(Amount)
FROM Sales
WHERE Department = 'IT'
GROUP BY Department;`}</code>
                  </div>

                  <p className="text-sm text-indigo-300 font-bold bg-indigo-900/40 p-2 rounded flex items-center mt-auto border border-indigo-500/30">
                    <Zap className="w-4 h-4 mr-2 text-amber-400" /> Filtering early improves performance.
                  </p>
                </div>

                {/* 4 */}
                <div className="bg-gray-800/50 p-4 rounded-2xl border border-gray-700 shadow-sm">
                  <h4 className="font-bold text-white mb-2 text-md flex items-center"><span className="text-pink-400 pr-1">4️⃣</span> Foundation for Data Analytics</h4>
                  <p className="text-xs text-gray-400 mb-2 font-medium">If you want to move into:</p>
                  <div className="flex flex-wrap gap-2 text-xs font-bold font-mono">
                    <span className="bg-gray-700/80 text-gray-300 px-2 py-1 rounded">Data Analyst</span>
                    <span className="bg-gray-700/80 text-gray-300 px-2 py-1 rounded">Data Engineer</span>
                    <span className="bg-gray-700/80 text-gray-300 px-2 py-1 rounded">BI Developer</span>
                  </div>
                  <p className="text-sm text-emerald-400 font-bold mt-3 border-t border-gray-700 pt-2 flex items-center uppercase text-center w-full justify-center">GROUP BY is mandatory.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercises */}
          <div className="lg:col-span-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800 shadow-sm flex flex-col relative overflow-hidden h-full">
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center relative z-10 border-b border-emerald-200 dark:border-emerald-800 pb-4">
              <span className="mr-3 text-3xl">🧪</span> Practice Exercises <span className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 dark:text-emerald-400 px-2 py-1 rounded-full uppercase ml-2">For Students</span>
            </h2>

            <ul className="space-y-4 relative z-10 font-medium">
              {[
                "Find highest sale per department",
                "Find departments with more than 2 employees",
                "Find average sales greater than 4000",
                "Group sales by Department and order by TotalSales DESC",
                "Find total sales for each employee"
              ].map((q, idx) => (
                <li key={idx} className="bg-white/80 dark:bg-gray-900/70 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50 flex flex-col shadow-sm text-sm text-emerald-900 dark:text-emerald-100 font-mono text-center items-center justify-center min-h-20">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs mb-1 uppercase tracking-wider font-sans w-full text-left border-b border-emerald-100 dark:border-emerald-800/50 pb-1 flex items-center"><Target className="w-3 h-3 mr-1" /> Task {idx + 1}</span>
                  <span className="mt-2 w-full text-left">{q}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

// SVG Icons missing from lucide for specific design tweaks:
const PlusCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
);

const PieChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
);

export default SqlGroupBy;