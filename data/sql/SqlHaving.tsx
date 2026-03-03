import React, { useState } from 'react';
import {
  Database, Search, Zap, Check, Copy, Table2,
  Target, AlertTriangle, Lightbulb, Hexagon, Layers,
  CheckCircle2, XCircle, ArrowRight, GitMerge, Brain,
  BarChart2, Filter, Info, Server, Activity, ArrowDown
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

const SqlHaving: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* Header Topic */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-3xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <Filter className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          What is HAVING?
        </h1>

        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-5 pointer-events-none">
            <CheckCircle2 className="w-32 h-32 text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="text-emerald-500 text-2xl mr-2">✅</span> Definition
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 leading-relaxed">
            <code className="bg-indigo-100 dark:bg-indigo-900/40 px-2 py-0.5 rounded font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">HAVING</code> is used to filter grouped results <strong className="underline decoration-indigo-400 decoration-2 underline-offset-2 ml-1">after</strong> applying <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded ml-1">GROUP BY</code>.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-200 dark:border-rose-800/50 flex flex-col items-center justify-center text-center">
              <span className="font-bold text-rose-800 dark:text-rose-300 text-lg mb-1"><code className="bg-white dark:bg-black/40 px-2 py-1 rounded shadow-sm">WHERE</code> filters</span>
              <span className="text-3xl font-black text-rose-500 dark:text-rose-400 uppercase tracking-widest mt-2">Rows</span>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/50 flex flex-col items-center justify-center text-center">
              <span className="font-bold text-indigo-800 dark:text-indigo-300 text-lg mb-1"><code className="bg-white dark:bg-black/40 px-2 py-1 rounded shadow-sm">HAVING</code> filters</span>
              <span className="text-3xl font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mt-2">Groups</span>
            </div>
          </div>
        </div>
      </header>

      {/* 🧠 2️⃣ Why Do We Need HAVING? */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🧠</span> 2️⃣ Why Do We Need HAVING?
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm">
          <p className="font-medium text-gray-700 dark:text-gray-300 mb-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg flex items-center border border-gray-200 dark:border-gray-700">
            <AlertTriangle className="w-5 h-5 mr-3 text-amber-500 shrink-0" />
            <span>Because <strong className="text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 px-1 rounded mx-1 font-mono">WHERE</strong> cannot use aggregate functions like:</span>
          </p>

          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {["SUM()", "COUNT()", "AVG()", "MAX()", "MIN()"].map(func => (
              <span key={func} className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 px-4 py-2 rounded-lg font-bold font-mono text-sm border border-emerald-200 dark:border-emerald-800/50 shadow-sm">
                {func}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-rose-50/50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-200 dark:border-rose-800/50 relative">
              <div className="absolute top-0 right-0 bg-rose-500 text-white p-1 px-3 rounded-bl-xl font-bold text-sm shadow-sm flex items-center"><XCircle className="w-4 h-4 mr-1" /> Invalid</div>
              <h4 className="font-bold text-rose-800 dark:text-rose-400 mb-4 mt-2">🚫 This is invalid:</h4>
              <CodeSnippetBlock codeSnippet={`SELECT Department, SUM(Salary)
FROM Employees
WHERE SUM(Salary) > 100000   -- ❌ ERROR
GROUP BY Department;`} />
            </div>

            <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800/50 relative">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white p-1 px-3 rounded-bl-xl font-bold text-sm shadow-sm flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Correct</div>
              <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-4 mt-2">✔ Correct way:</h4>
              <CodeSnippetBlock codeSnippet={`SELECT Department, SUM(Salary)
FROM Employees
GROUP BY Department
HAVING SUM(Salary) > 100000;`} />
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
          We’ll use an <strong className="text-indigo-600 dark:text-indigo-400">Employees Table</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-300 mb-4 flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg w-fit">
              <span className="mr-2 text-xl">🧱</span> Step 1: Create Table
            </h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(50),
    Department VARCHAR(50),
    Salary INT
);`} />
          </div>

          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-300 mb-4 flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg w-fit">
              <span className="mr-2 text-xl">📝</span> Step 2: Insert Data
            </h3>
            <CodeSnippetBlock codeSnippet={`INSERT INTO Employees VALUES (1, 'Karthick', 'IT', 60000);
INSERT INTO Employees VALUES (2, 'Anjali', 'HR', 45000);
INSERT INTO Employees VALUES (3, 'Rahul', 'IT', 75000);
INSERT INTO Employees VALUES (4, 'Sneha', 'Finance', 50000);
INSERT INTO Employees VALUES (5, 'Arjun', 'IT', 80000);
INSERT INTO Employees VALUES (6, 'Meena', 'HR', 40000);`} />
          </div>
        </div>

        {/* Current Data Visualization Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm overflow-hidden mb-8">
          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center text-lg"><Table2 className="w-5 h-5 mr-2 text-indigo-500" /> 📊 Current Data</h4>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 font-bold uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">EmpID</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Name</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Department</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Salary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">1</td><td className="px-4 py-2 font-medium">Karthick</td><td className="px-4 py-2 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10">IT</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">60000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">2</td><td className="px-4 py-2 font-medium">Anjali</td><td className="px-4 py-2 font-bold text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-900/10">HR</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">45000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">3</td><td className="px-4 py-2 font-medium">Rahul</td><td className="px-4 py-2 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10">IT</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">75000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">4</td><td className="px-4 py-2 font-medium">Sneha</td><td className="px-4 py-2 font-bold text-sky-600 dark:text-sky-400 bg-sky-50/50 dark:bg-sky-900/10">Finance</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">50000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">5</td><td className="px-4 py-2 font-medium">Arjun</td><td className="px-4 py-2 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10">IT</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">80000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-2 font-mono">6</td><td className="px-4 py-2 font-medium">Meena</td><td className="px-4 py-2 font-bold text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-900/10">HR</td><td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">40000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🔥 4️⃣ Basic HAVING Example */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🔥</span> 4️⃣ Basic HAVING Example
        </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden p-6 sm:p-8">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-4 flex items-center text-lg bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-800/50 w-fit">
            <Target className="w-5 h-5 mr-2" /> Show Departments with Total Salary &gt; 100000
          </h3>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <CodeSnippetBlock codeSnippet={`SELECT Department, SUM(Salary) AS TotalSalary
FROM Employees
GROUP BY Department
HAVING SUM(Salary) > 100000;`} />
            </div>

            {/* Output Table */}
            <div className="border border-indigo-200 dark:border-indigo-800/50 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm mt-0 h-full flex flex-col">
              <div className="bg-indigo-100 dark:bg-indigo-900/40 px-4 py-3 border-b border-indigo-200 dark:border-indigo-800/50 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-300 flex items-center uppercase tracking-widest text-sm"><Table2 className="w-4 h-4 mr-2" /> 📊 Output</h4>
              </div>
              <div className="overflow-x-auto flex-grow flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/20 p-4">
                <table className="w-full text-left font-sans text-sm rounded border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
                  <thead className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-bold uppercase text-xs">
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">Department</th>
                      <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 border-l border-gray-200 dark:border-gray-700">TotalSalary</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800">
                    <tr>
                      <td className="px-6 py-4 font-bold text-indigo-600 dark:text-indigo-400 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> IT</td>
                      <td className="px-6 py-4 font-mono font-bold text-emerald-600 dark:text-emerald-400 border-l border-gray-100 dark:border-gray-700 bg-emerald-50 dark:bg-emerald-900/10">215000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center text-lg"><Brain className="w-5 h-5 mr-2 text-indigo-500" /> Why?</h4>
            <ul className="space-y-3 font-mono text-sm mb-4">
              <li className="flex items-center text-gray-700 dark:text-gray-300 bg-indigo-50/50 dark:bg-indigo-900/10 p-2 rounded">
                <span className="font-bold w-20 text-indigo-600 dark:text-indigo-400">IT</span>
                <ArrowRight className="w-4 h-4 mx-2 text-gray-400 flex-shrink-0" />
                <span className="flex-1">60000 + 75000 + 80000 = <strong className="text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 rounded shadow-sm border border-emerald-200 dark:border-emerald-800/50 mx-1">215000</strong> <span className="text-emerald-500 font-sans font-bold float-right hidden sm:inline">(&gt; 100k) ✅</span></span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300 opacity-60 line-through decoration-rose-400 decoration-2">
                <span className="font-bold w-20 text-rose-600 dark:text-rose-400">HR</span>
                <ArrowRight className="w-4 h-4 mx-2 text-gray-400 flex-shrink-0" />
                <span className="flex-1">45000 + 40000 = <strong className="text-rose-600 dark:text-rose-400 mx-1">85000</strong></span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300 opacity-60 line-through decoration-rose-400 decoration-2">
                <span className="font-bold w-20 text-sky-600 dark:text-sky-400">Finance</span>
                <ArrowRight className="w-4 h-4 mx-2 text-gray-400 flex-shrink-0" />
                <span className="flex-1">50000 = <strong className="text-rose-600 dark:text-rose-400 mx-1">50000</strong></span>
              </li>
            </ul>
            <p className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded border border-emerald-200 dark:border-emerald-800/50 flex items-center w-fit">
              <CheckCircle2 className="w-5 h-5 mr-2" /> Only IT satisfies the condition.
            </p>
          </div>
        </div>
      </section>

      {/* 📈 5️⃣ HAVING with COUNT() */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">📈</span> 5️⃣ HAVING with COUNT()
        </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden p-6 text-center max-w-2xl mx-auto">
          <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-4 flex items-center justify-center text-lg bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-lg border border-emerald-100 dark:border-emerald-800/50 mx-auto w-fit">
            <BarChart2 className="w-5 h-5 mr-2" /> Show Departments with More Than 2 Employees
          </h3>
          <div className="text-left">
            <CodeSnippetBlock codeSnippet={`SELECT Department, COUNT(*) AS TotalEmployees
FROM Employees
GROUP BY Department
HAVING COUNT(*) > 2;`} />
          </div>

          {/* Output */}
          <div className="mt-4 border border-emerald-200 dark:border-emerald-800/50 rounded-xl overflow-hidden shadow-sm mx-auto w-fit min-w-[300px]">
            <div className="bg-emerald-100 dark:bg-emerald-900/40 px-4 py-2 text-emerald-900 dark:text-emerald-300 font-bold uppercase tracking-wider text-xs">Output</div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 font-mono text-sm text-left">
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2 mb-2 font-bold text-gray-500">
                <span>Department</span><span>TotalEmployees</span>
              </div>
              <div className="flex justify-between py-1 text-gray-800 dark:text-gray-300"><span className="text-indigo-500 font-bold">IT</span><span className="font-bold text-emerald-600 mt-0.5">3</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔎 6️⃣ WHERE vs HAVING */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🔎</span> 6️⃣ WHERE vs HAVING <span className="text-rose-500 text-sm bg-rose-50 dark:bg-rose-900/30 px-2 py-1 rounded ml-4 font-bold border border-rose-200 dark:border-rose-800 uppercase tracking-widest hidden sm:inline-block">Very Important</span>
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-medium min-w-[500px]">
              <thead className="bg-gray-100 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 font-bold text-sm uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">Feature</th>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-rose-50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-300 w-1/3">WHERE</th>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 w-1/3">HAVING</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4 font-bold bg-gray-50/50 dark:bg-gray-900/20">Filters</td>
                  <td className="px-6 py-4 font-mono font-bold text-rose-600 dark:text-rose-400 text-lg">Rows</td>
                  <td className="px-6 py-4 font-mono font-bold text-indigo-600 dark:text-indigo-400 text-lg">Groups</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4 font-bold bg-gray-50/50 dark:bg-gray-900/20">Used Before <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded mx-1 font-normal text-sm">GROUP BY</code></td>
                  <td className="px-6 py-4"><CheckCircle2 className="w-6 h-6 text-emerald-500" /></td>
                  <td className="px-6 py-4"><XCircle className="w-6 h-6 text-rose-500" /></td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4 font-bold bg-gray-50/50 dark:bg-gray-900/20">Used After <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded mx-1 font-normal text-sm">GROUP BY</code></td>
                  <td className="px-6 py-4"><XCircle className="w-6 h-6 text-rose-500" /></td>
                  <td className="px-6 py-4"><CheckCircle2 className="w-6 h-6 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4 font-bold bg-gray-50/50 dark:bg-gray-900/20">Works with Aggregate Functions</td>
                  <td className="px-6 py-4"><XCircle className="w-6 h-6 text-rose-500" /></td>
                  <td className="px-6 py-4"><CheckCircle2 className="w-6 h-6 text-emerald-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🧠 7️⃣ Combining WHERE + HAVING */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🧠</span> 7️⃣ Combining WHERE + HAVING
        </h2>
        <p className="text-gray-700 dark:text-gray-300 font-bold mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 px-4 py-3 rounded-xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm uppercase tracking-wider text-sm flex items-center w-fit">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Very common in real-world projects.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm">
          <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-6 flex items-center text-lg bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/50 w-fit">
            <Target className="w-5 h-5 mr-2 text-indigo-500" /> Show Departments with Salary &gt; 50000 and Total &gt; 100000
          </h3>

          <CodeSnippetBlock codeSnippet={`SELECT Department, SUM(Salary) AS TotalSalary
FROM Employees
WHERE Salary > 50000
GROUP BY Department
HAVING SUM(Salary) > 100000;`} />

          <div className="mt-8 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center text-lg border-b border-gray-200 dark:border-gray-700 pb-2">
              <Activity className="w-5 h-5 mr-2 text-rose-500" /> Execution Order:
            </h4>
            <div className="space-y-4">
              {[
                { step: "1", tech: "WHERE", desc: "filters rows", color: "text-rose-500", bg: "bg-rose-100 dark:bg-rose-900/40" },
                { step: "2", tech: "GROUP BY", desc: "groups data", color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/40" },
                { step: "3", tech: "HAVING", desc: "filters grouped data", color: "text-indigo-500", bg: "bg-indigo-100 dark:bg-indigo-900/40" },
                { step: "4", tech: "SELECT", desc: "displays", color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/40" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center group">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${item.bg} ${item.color} mr-4 shadow-sm border border-current`}>
                    {item.step}
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-between transition-transform transform group-hover:-translate-y-0.5">
                    <code className={`font-bold ${item.color}`}>{item.tech}</code>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📊 8️⃣ Visual Flow of Execution */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">📊</span> 8️⃣ Visual Flow of Execution
        </h2>

        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-xl overflow-hidden relative">
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-8 text-center bg-black/40 py-2 rounded border border-gray-800 block">Order of Execution:</p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 max-w-2xl mx-auto">
            {[
              { name: "FROM", color: "emerald", icon: Database },
              { name: "WHERE", color: "rose", icon: Filter },
              { name: "GROUP BY", color: "amber", icon: Layers },
              { name: "HAVING", color: "indigo", icon: CheckCircle2 },
              { name: "SELECT", color: "blue", icon: Search },
              { name: "ORDER BY", color: "purple", icon: ArrowDown },
            ].map((node, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center">
                  <div className={`bg-${node.color}-500/10 border-2 border-${node.color}-500 text-${node.color}-400 px-4 py-2 rounded-xl font-bold font-mono text-sm sm:text-base flex items-center min-w-[120px] justify-center shadow-[0_0_15px_rgba(0,0,0,0.2)] shadow-${node.color}-500/20`}>
                    <node.icon className="w-4 h-4 mr-2" /> {node.name}
                  </div>
                </div>
                {idx < 5 && (
                  <ArrowRight className="text-gray-600 hidden sm:block w-5 h-5" />
                )}
                {idx < 5 && (
                  <ArrowDown className="text-gray-600 sm:hidden w-5 h-5 my-1" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 9️⃣ Real-World Use Cases */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🎯</span> 9️⃣ Real-World Use Cases
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <p className="text-xl text-indigo-600 dark:text-indigo-400 font-bold mb-6 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
            <Hexagon className="w-6 h-6 mr-2" /> HAVING is heavily used in:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Sales dashboards",
              "Performance reports",
              "Financial analysis",
              "Inventory management",
              "Analytics systems",
              "Banking reports"
            ].map((useCase, idx) => (
              <div key={idx} className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="font-bold text-gray-800 dark:text-gray-200">{useCase}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-gray-300 shadow-inner mt-8">
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs flex items-center text-amber-500 border-b border-gray-800 pb-3"><Target className="w-4 h-4 mr-2" /> Examples</h4>
            <ul className="space-y-3 font-mono text-sm leading-relaxed p-2">
              <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-emerald-400 mt-0.5 shrink-0" /> Find branches with revenue <strong className="ml-1 text-white bg-white/10 px-1 rounded">&gt; 1 million</strong></li>
              <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-emerald-400 mt-0.5 shrink-0" /> Find customers who placed <strong className="ml-1 text-white bg-white/10 px-1 rounded">more than 5 orders</strong></li>
              <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-emerald-400 mt-0.5 shrink-0" /> Find products with sales <strong className="ml-1 text-white bg-white/10 px-1 rounded">above average</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 💡 10️⃣ My 15+ Years Professional Advice */}
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
                <div className="bg-indigo-900/20 p-5 rounded-2xl border border-indigo-500/30 shadow-sm border-l-4 border-l-amber-500 flex flex-col h-full flex-grow">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-amber-400 pr-1">1️⃣</span> Always Filter Early with WHERE</h4>

                  <div className="bg-rose-900/20 p-3 rounded-lg border border-rose-800/30 mb-3 text-xs font-mono">
                    <p className="text-rose-400 mb-1 font-bold uppercase tracking-widest font-sans flex items-center"><XCircle className="w-3 h-3 mr-1" /> Bad practice:</p>
                    <code className="text-gray-300">HAVING Department = 'IT'</code>
                  </div>

                  <div className="bg-emerald-900/20 p-3 rounded-lg border border-emerald-800/30 mb-4 text-xs font-mono">
                    <p className="text-emerald-400 mb-1 font-bold uppercase tracking-widest font-sans flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Better:</p>
                    <code className="text-white">WHERE Department = 'IT'</code>
                  </div>

                  <p className="text-sm text-indigo-300 font-bold bg-indigo-900/40 p-2 rounded flex items-center mt-auto border border-indigo-500/30">
                    <Zap className="w-4 h-4 mr-2 text-amber-400" /> Filter rows early → better performance.
                  </p>
                </div>

                {/* 3 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-pink-400 pr-1">3️⃣</span> Master GROUP BY + HAVING</h4>
                  <p className="text-xs text-gray-400 mb-2 font-medium">Most SQL interviews ask:</p>
                  <ul className="text-sm font-bold text-emerald-400 bg-black/30 p-3 rounded-lg border border-gray-700 space-y-2 font-mono ml-2">
                    <li className="flex items-center before:content-['>'] before:text-gray-600 before:mr-2">Departments with highest salary</li>
                    <li className="flex items-center before:content-['>'] before:text-gray-600 before:mr-2">Top N groups</li>
                    <li className="flex items-center before:content-['>'] before:text-gray-600 before:mr-2">Groups above average</li>
                    <li className="flex items-center before:content-['>'] before:text-gray-600 before:mr-2">Conditional aggregation</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 flex flex-col">
                {/* 2 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-blue-400 pr-1">2️⃣</span> Don't Overuse HAVING</h4>
                  <p className="text-sm font-medium text-gray-300 bg-black/30 p-3 rounded">
                    Use HAVING <strong className="text-rose-400 underline decoration-white font-black mx-1">only</strong> when aggregate filtering is required.
                  </p>
                </div>

                {/* 4 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm flex-grow">
                  <h4 className="font-bold text-white mb-3 text-lg flex items-center"><span className="text-emerald-400 pr-1">4️⃣</span> Performance Tip</h4>
                  <p className="text-xs text-amber-500/80 mb-2 uppercase tracking-widest font-bold">On large datasets:</p>
                  <ul className="space-y-3 font-medium text-sm text-gray-300 mt-3">
                    <li className="flex items-center border-b border-gray-700 pb-2"><Database className="w-4 h-4 mr-2 text-blue-400" /> Index grouping columns</li>
                    <li className="flex items-center border-b border-gray-700 pb-2"><Server className="w-4 h-4 mr-2 text-rose-400" /> Avoid unnecessary aggregation</li>
                    <li className="flex items-center"><Filter className="w-4 h-4 mr-2 text-emerald-400" /> Reduce rows using WHERE first</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Exercises */}
          <div className="lg:col-span-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800 shadow-sm flex flex-col relative overflow-hidden h-full justify-center">
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center relative z-10 border-b border-emerald-200 dark:border-emerald-800 pb-4">
              <span className="mr-3 text-3xl">🧪</span> Practice Exercises <span className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 dark:text-emerald-400 px-2 py-1 rounded-full uppercase ml-2 block sm:inline mt-2 sm:mt-0 w-fit">For Students</span>
            </h2>

            <ul className="space-y-4 relative z-10 font-medium">
              {[
                "Find departments with average salary > 60000",
                "Find departments with total salary between 80000 and 200000",
                "Find departments having exactly 2 employees",
                "Find employees grouped by department with max salary > 70000",
                "Combine WHERE and HAVING in one query"
              ].map((q, idx) => (
                <li key={idx} className="bg-white/80 dark:bg-gray-900/70 p-4 rounded-lg border-l-4 border-emerald-500 shadow-sm text-sm text-emerald-900 dark:text-emerald-100 flex items-start group hover:bg-white dark:hover:bg-gray-900 transition-colors">
                  <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 font-bold rounded px-1.5 py-0.5 text-xs mr-3 shadow-inner group-hover:bg-emerald-500 group-hover:text-white transition-colors">{idx + 1}</span>
                  <span className="flex-1 mt-0.5">{q}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SqlHaving;