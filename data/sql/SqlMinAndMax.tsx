import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, ArrowDownToLine, ArrowUpToLine, ArrowDown, ArrowUp, Zap, Target, Layers, Code, Briefcase, AlertTriangle, Lightbulb, CheckCircle, HelpCircle } from 'lucide-react';

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

const SqlMinAndMax: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-sky-400 to-emerald-600 rounded-2xl mb-6 shadow-xl transform hover:-rotate-3 transition-transform cursor-default">
          <ArrowDownToLine className="w-8 h-8 text-white mr-1" />
          <ArrowUpToLine className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL MIN() & MAX()
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Aggregate functions that scan entire columns to uncover the smallest (MIN) and largest (MAX) values inside your data.
        </p>
      </header>

      {/* Intro Definition Section & Syntax */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Target className="w-6 h-6 mr-3 text-sky-500" /> What are MIN() and MAX()?
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-sky-50 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-800/50 rounded-xl relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 opacity-10"><ArrowDown className="w-24 h-24 text-sky-500" /></div>
              <p className="font-bold text-sky-700 dark:text-sky-300 text-lg flex items-center mb-2"><ArrowDownToLine className="w-5 h-5 mr-2" /> MIN()</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Returns the <strong className="text-sky-600 dark:text-sky-400">smallest</strong> value in a column.</p>
            </div>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 rounded-xl relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 opacity-10"><ArrowUp className="w-24 h-24 text-emerald-500" /></div>
              <p className="font-bold text-emerald-700 dark:text-emerald-300 text-lg flex items-center mb-2"><ArrowUpToLine className="w-5 h-5 mr-2" /> MAX()</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Returns the <strong className="text-emerald-600 dark:text-emerald-400">largest</strong> value in a column.</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Aggregate Functions:</strong> They operate on multiple rows across a column but return a <strong>single result</strong> at the end.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-indigo-900/50">
          <div className="absolute top-0 right-0 -m-6 text-indigo-500/10"><Code className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Terminal className="w-6 h-6 mr-3 text-sky-400" /> Basic Syntax
          </h2>
          <div className="space-y-4 relative z-10">
            <CodeSnippetBlock codeSnippet={`SELECT MIN(column_name)\nFROM table_name;`} title="MIN Syntax" />
            <CodeSnippetBlock codeSnippet={`SELECT MAX(column_name)\nFROM table_name;`} title="MAX Syntax" />
          </div>
        </div>
      </section>

      {/* Setup Practical Example */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700 relative">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4"><Database className="text-emerald-500 w-8 h-8 mr-3" /> Practical Example Setup</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center"><Table2 className="w-5 h-5 mr-2 text-sky-500" /> 1. Create Employees Table</h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Employees (\n    EmpID INT PRIMARY KEY,\n    Name VARCHAR(50),\n    Department VARCHAR(50),\n    Salary INT\n);`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center"><Layers className="w-5 h-5 mr-2 text-emerald-500" /> 2. Insert Sample Data</h3>
              <CodeSnippetBlock codeSnippet={`INSERT INTO Employees VALUES (1, 'Karthick', 'IT', 60000);\nINSERT INTO Employees VALUES (2, 'Anjali', 'HR', 45000);\nINSERT INTO Employees VALUES (3, 'Rahul', 'IT', 75000);\nINSERT INTO Employees VALUES (4, 'Sneha', 'Finance', 50000);\nINSERT INTO Employees VALUES (5, 'Arjun', 'IT', 80000);`} />
            </div>
          </div>

          {/* Current Data Output */}
          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-inner mt-8 max-w-4xl mx-auto">
            <p className="text-xs uppercase font-bold text-sky-600 dark:text-sky-400 mb-4 tracking-widest"><Terminal className="inline w-4 h-4 mr-1 mb-1 text-gray-400" /> Current Employees Database</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-mono text-left whitespace-nowrap">
                <thead className="text-xs text-gray-500 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                  <tr><th className="py-3 px-4 rounded-tl-lg">EmpID</th><th className="px-4">Name</th><th className="px-4">Department</th><th className="px-4 rounded-tr-lg">Salary</th></tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">1</td><td className="px-4">Karthick</td><td className="px-4">IT</td><td className="px-4 text-emerald-600 dark:text-emerald-400 font-medium">60000</td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800 bg-sky-50/50 dark:bg-sky-900/10 hover:bg-sky-100 dark:hover:bg-sky-900/20 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">2</td><td className="px-4 font-bold">Anjali</td><td className="px-4">HR</td><td className="px-4 text-sky-600 dark:text-sky-400 font-bold bg-sky-100 dark:bg-sky-900/40 px-1 rounded-full text-center inline-block mt-1.5 ml-3 relative shadow-sm">45000 <span className="absolute -top-2 -right-2 flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span></span></td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">3</td><td className="px-4">Rahul</td><td className="px-4">IT</td><td className="px-4 text-emerald-600 dark:text-emerald-400 font-medium">75000</td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">4</td><td className="px-4">Sneha</td><td className="px-4">Finance</td><td className="px-4 text-emerald-600 dark:text-emerald-400 font-medium">50000</td></tr>
                  <tr className="bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-100 dark:hover:bg-emerald-900/20 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">5</td><td className="px-4 font-bold">Arjun</td><td className="px-4">IT</td><td className="px-4 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-900/40 px-1 rounded-full text-center inline-block mt-1.5 ml-3 relative shadow-sm">80000 <span className="absolute -top-2 -right-2 flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples Block */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 px-4"><Zap className="w-8 h-8 mr-3 text-amber-500" /> Executing Action Queries</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Using MIN */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 group flex flex-col">
            <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
              <span className="text-sky-500 bg-sky-50 dark:bg-sky-900/30 px-2 py-1 rounded-lg mr-3 text-sm flex items-center leading-none"><ArrowDownToLine className="w-4 h-4 mr-1" /> MIN()</span> Find Minimum Salary
            </h3>
            <div className="flex-grow">
              <CodeSnippetBlock codeSnippet={`SELECT MIN(Salary) AS LowestSalary\nFROM Employees;`} />
            </div>
            <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-2">
              <p className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">Output:</p>
              <div className="inline-block bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 px-4 py-2 rounded-lg text-lg font-black font-mono border border-sky-100 dark:border-sky-800 text-center w-full">
                45000
              </div>
            </div>
          </div>

          {/* Using MAX */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 group flex flex-col">
            <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
              <span className="text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg mr-3 text-sm flex items-center leading-none"><ArrowUpToLine className="w-4 h-4 mr-1" /> MAX()</span> Find Maximum Salary
            </h3>
            <div className="flex-grow">
              <CodeSnippetBlock codeSnippet={`SELECT MAX(Salary) AS HighestSalary\nFROM Employees;`} />
            </div>
            <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-2">
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Output:</p>
              <div className="inline-block bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-lg text-lg font-black font-mono border border-emerald-100 dark:border-emerald-800 text-center w-full">
                80000
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Using MIN/MAX with WHERE */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
            <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-3 tracking-tight">
              Using MIN/MAX with WHERE
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-900/50 p-2 rounded">Example: <strong className="text-indigo-600 dark:text-indigo-400">Highest Salary inside IT Department</strong></p>
            <CodeSnippetBlock codeSnippet={`SELECT MAX(Salary) AS HighestITSalary\nFROM Employees\nWHERE Department = 'IT';`} />
            <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-3">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Result:</p>
              <span className="font-mono text-indigo-600 dark:text-indigo-400 font-black text-lg">80000</span>
            </div>
          </div>

          {/* Using MIN/MAX with GROUP BY */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all">
            <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-3 tracking-tight">
              Using MIN/MAX + GROUP BY
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-900/50 p-2 rounded">Example: <strong className="text-purple-600 dark:text-purple-400">Min & Max Salary per Department</strong></p>
            <CodeSnippetBlock codeSnippet={`SELECT\n    Department,\n    MIN(Salary) AS MinSalary,\n    MAX(Salary) AS MaxSalary\nFROM Employees\nGROUP BY Department;`} />
            <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
              <table className="w-full text-xs font-mono text-left">
                <thead className="text-gray-500 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <tr><th className="py-2 px-2">Department</th><th>MinSalary</th><th>MaxSalary</th></tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-2 px-2 font-bold text-indigo-500">IT</td><td className="text-sky-500">60000</td><td className="text-emerald-500">80000</td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-2 px-2 font-bold text-indigo-500">HR</td><td className="text-sky-500">45000</td><td className="text-emerald-500">45000</td></tr>
                  <tr><td className="py-2 px-2 font-bold text-indigo-500">Finance</td><td className="text-sky-500">50000</td><td className="text-emerald-500">50000</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Workings & Real World */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
            <Zap className="w-6 h-6 mr-3 text-amber-500" /> How do they work internally?
          </h2>
          <div className="relative pl-6 space-y-6 mb-6">
            <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            <div className="relative">
              <span className="absolute left-[-24px] bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shadow-sm ring-4 ring-white dark:ring-gray-800">1</span>
              <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">Database engine scans the physical column.</p>
            </div>

            <div className="relative">
              <span className="absolute left-[-24px] bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shadow-sm ring-4 ring-white dark:ring-gray-800">2</span>
              <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">Compares the numerical/alphabetical limits directly against each row.</p>
            </div>

            <div className="relative">
              <span className="absolute left-[-24px] bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shadow-sm ring-4 ring-white dark:ring-gray-800">3</span>
              <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">Returns exclusively the single smallest/largest bounded value item.</p>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-800/30">
            <p className="text-sm font-bold text-amber-800 dark:text-amber-400 flex items-center">
              <Zap className="w-4 h-4 mr-2" /> Top-Tier Performance Optimization:
            </p>
            <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">If the target column <strong className="text-amber-900 dark:text-amber-200">has an index</strong> mapped to it, min/max calculations skip the global scan completely and operate exponentially faster.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 p-8 rounded-3xl shadow-sm border border-indigo-200 dark:border-indigo-800/30">
          <h2 className="text-2xl font-bold flex items-center text-indigo-900 dark:text-indigo-300 mb-6 border-b border-indigo-200 dark:border-indigo-800/50 pb-4">
            <CheckCircle className="w-6 h-6 mr-3 text-indigo-500" /> Real-World Use Cases
          </h2>
          <p className="text-indigo-800 dark:text-indigo-200 font-medium mb-4">MIN() and MAX() natively power business analytics interfaces:</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg leading-tight"><Check className="w-4 h-4 mr-2 text-emerald-500 shrink-0" /> Find highest paid employee</div>
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg leading-tight"><Check className="w-4 h-4 mr-2 text-emerald-500 shrink-0" /> Find cheapest product</div>
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg leading-tight"><Check className="w-4 h-4 mr-2 text-emerald-500 shrink-0" /> Find latest order date</div>
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg leading-tight"><Check className="w-4 h-4 mr-2 text-emerald-500 shrink-0" /> Find earliest joining date</div>
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg leading-tight"><Check className="w-4 h-4 mr-2 text-emerald-500 shrink-0" /> Find top sales amount</div>
            <div className="flex items-center text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-2 rounded-lg leading-tight"><Check className="w-4 h-4 mr-2 text-emerald-500 shrink-0" /> Find lowest stock level</div>
          </div>
          <p className="text-sm font-bold text-indigo-800 dark:text-indigo-400 mb-2">Example Use Case:</p>
          <code className="block bg-white dark:bg-black p-3 rounded-lg font-mono text-sm border border-indigo-200 dark:border-indigo-800 text-gray-700 dark:text-gray-300 mb-2">
            <span className="text-gray-400">-- Find the latest order date recorded.</span><br />
            SELECT <span className="text-indigo-600 dark:text-indigo-400 font-bold">MAX(OrderDate)</span> FROM Orders;
          </code>
        </div>
      </section>

      {/* Extreme Trap Warning Code section (Mistakes + Advice) */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        {/* Important Warning Left */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
          <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-3xl shadow-sm border border-red-200 dark:border-red-900/30 flex-1">
            <h3 className="text-2xl font-black flex items-center text-red-900 dark:text-red-400 mb-6 border-b border-red-200 dark:border-red-900/30 pb-4">
              <AlertTriangle className="w-6 h-6 mr-3 text-red-500" /> Common Mistakes
            </h3>

            <p className="text-sm font-bold text-red-800 dark:text-red-300 mb-4 bg-white/50 dark:bg-black/50 p-3 rounded-lg border border-red-100 dark:border-red-800/30">
              <strong className="text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/40 px-1 rounded">❌ Selecting other explicit columns physically alongside aggregates WITHOUT adding a GROUP BY clause!</strong>
            </p>

            <code className="block bg-white/80 dark:bg-black/80 p-4 rounded-xl text-sm font-mono border border-red-200 dark:border-red-900/50 text-gray-700 dark:text-gray-300 mb-2">
              SELECT <strong className="text-red-500">Name</strong>, MAX(Salary)<br />
              FROM Employees;
            </code>
            <p className="text-xs font-bold text-red-500 mt-2 mb-6 flex items-center"><Target className="w-3 h-3 mr-1" /> ERROR Output: "Name must logically appear inside a GROUP BY limit."</p>

            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 pb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3"><span className="text-[10px] font-black uppercase text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded">✅ The Correct Approach (Subquery)</span></div>
              <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300 mb-3 mt-4">Filter the actual user utilizing a secondary nested dynamic lookup.</p>
              <code className="block bg-white/90 dark:bg-black/90 p-4 rounded-xl text-sm font-mono border border-emerald-200 dark:border-emerald-800/50 text-gray-700 dark:text-gray-300 leading-relaxed shadow-sm">
                SELECT Name, Salary<br />
                FROM Employees<br />
                WHERE Salary = (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-1.5 rounded">SELECT MAX(Salary) FROM Employees</span><br />
                );
              </code>
            </div>

          </div>
        </div>

        {/* 15 Yrs Professional Right */}
        <div className="lg:col-span-12 xl:col-span-7 bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 p-8 opacity-5 text-amber-500">
            <Lightbulb className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-amber-500" /> 15+ Years Mastery Insight
          </h2>
          <p className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-8 border-b border-gray-100 dark:border-gray-700 pb-4 relative z-10">Production Standard Realities</p>

          <div className="space-y-6 relative z-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-black text-amber-600 dark:text-amber-400 text-lg border border-amber-200 dark:border-amber-800 shrink-0 shadow-sm">1</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">Combine aggressively with Subqueries</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-2">This structure is universally queried precisely throughout <strong className="text-amber-600 dark:text-amber-500">global developer interviews</strong> asking challenges like:</p>
                <div className="flex gap-3 text-xs font-bold w-full uppercase text-gray-500 flex-wrap">
                  <span className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg border border-gray-200 dark:border-gray-700">"Find employee holding highest salary"</span>
                  <span className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg border border-gray-200 dark:border-gray-700">"Find second highest salary bracket"</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-black text-amber-600 dark:text-amber-400 text-lg border border-amber-200 dark:border-amber-800 shrink-0 shadow-sm">2</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">Index Critical Columns Securely</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">If a structural column (like <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded mx-0.5">amount_total</code> or <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded mx-0.5">log_date</code>) is frequently routed through intense MIN/MAX analytics algorithms &rarr; explicitly map a native index immediately onto it.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-black text-amber-600 dark:text-amber-400 text-lg border border-amber-200 dark:border-amber-800 shrink-0 shadow-sm">3</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">Extremely Powerful with Dates</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">MIN()/MAX() is overwhelmingly manipulated to execute dynamic chronological events. (E.g. extracting the <strong className="text-emerald-500">"Latest Transaction Date"</strong> or pulling down the <strong className="text-sky-500">"Earliest Login Auth Timestamp"</strong>).</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-black text-amber-600 dark:text-amber-400 text-lg border border-amber-200 dark:border-amber-800 shrink-0 shadow-sm">4</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">Use Alongside Built-in GROUP BY for Dashboards</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Massive tier UI enterprise reporting dashboards directly leverage aggregated MIN/MAX limit endpoints utilizing native `GROUP BY` sorting strategies continually.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Challenges Exercises */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-tr from-sky-600 to-indigo-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 w-full lg:w-3/4">
            <h2 className="text-3xl font-black mb-6 flex items-center">
              <HelpCircle className="w-8 h-8 mr-3 text-sky-300" /> Practical Lab Execution Exercises
            </h2>
            <ul className="space-y-4 font-semibold text-lg text-sky-50">
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-sky-400 mr-4 shadow-sm border border-sky-200"></span> Find exactly the minimum tracked salary structurally attached onto the HR department block.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-sky-400 mr-4 shadow-sm border border-sky-200"></span> Find the highest maximum logged salary stored exclusively within the Finance boundary limit.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-sky-400 mr-4 shadow-sm border border-sky-200"></span> Find simultaneously the overall absolute minimum and maximum final marks calculated entirely per unique student group hierarchy.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-sky-400 mr-4 shadow-sm border border-sky-200"></span> Implement a nested subquery correctly executing code isolating explicitly the explicit mapped employee containing definitively the global highest salary node.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-sky-400 mr-4 shadow-sm border border-sky-200"></span> Write an engine query parsing securely the single earliest historical chronological company joining system recorded log date entry point.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlMinAndMax;