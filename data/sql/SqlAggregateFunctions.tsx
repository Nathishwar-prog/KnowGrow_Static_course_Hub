import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Lightbulb, FileText, Component, Calculator, BarChart, Users, AlertTriangle, ArrowRight, Server, Layers, Filter, CheckCircle, ArrowDown, ArrowUp } from 'lucide-react';

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
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-emerald-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const SqlAggregateFunctions: React.FC = () => {
  const employees = [
    { id: 1, name: 'Arjun', dept: 'IT', salary: 50000 },
    { id: 2, name: 'Meena', dept: 'HR', salary: 40000 },
    { id: 3, name: 'Ravi', dept: 'IT', salary: 60000 },
    { id: 4, name: 'Priya', dept: 'HR', salary: 45000 },
    { id: 5, name: 'Karthik', dept: 'IT', salary: 70000 }
  ];

  const [activeOp, setActiveOp] = useState('COUNT');
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const calculate = (op: string) => {
    setActiveOp(op);
    let res: number | string;
    let code: string;

    const salaries = employees.map(e => e.salary);

    switch (op) {
      case 'COUNT':
        res = employees.length;
        code = `SELECT COUNT(*) AS TotalEmployees\nFROM Employees; \n-- Result: ${res}`;
        break;
      case 'SUM':
        res = salaries.reduce((a, b) => a + b, 0);
        code = `SELECT SUM(salary) AS TotalSalary\nFROM Employees; \n-- Result: ${res}`;
        break;
      case 'AVG':
        res = salaries.reduce((a, b) => a + b, 0) / salaries.length;
        code = `SELECT AVG(salary) AS AvgSalary\nFROM Employees; \n-- Result: ${res}`;
        break;
      case 'MIN':
        res = Math.min(...salaries);
        code = `SELECT MIN(salary) AS LowestSalary\nFROM Employees; \n-- Result: ${res}`;
        break;
      case 'MAX':
        res = Math.max(...salaries);
        code = `SELECT MAX(salary) AS HighestSalary\nFROM Employees; \n-- Result: ${res}`;
        break;
      default:
        return;
    }

    setConsoleOutput([`> Executing query...`, `> ${code.split('\n')[0]}`, `> Output: ${res}`]);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-4">
          <Database className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          What Are SQL Aggregate Functions?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          SQL Aggregate Functions perform calculations on multiple rows of a table and return a single summarized value.
        </p>
      </header>

      {/* Intro section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-xl mr-2">📌</span> Definition
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
              In simple terms:
              <strong className="text-emerald-600 dark:text-emerald-400 block mt-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">Multiple rows → One summarized result</strong>
            </p>
            <div className="mt-4">
              <h4 className="font-bold text-sm text-gray-500 uppercase mb-2">Examples:</h4>
              <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center"><Component className="w-4 h-4 mr-2 text-emerald-500" /> Total salary</li>
                <li className="flex items-center"><Component className="w-4 h-4 mr-2 text-emerald-500" /> Average marks</li>
                <li className="flex items-center"><Component className="w-4 h-4 mr-2 text-emerald-500" /> Count of users</li>
                <li className="flex items-center"><Component className="w-4 h-4 mr-2 text-emerald-500" /> Maximum price</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              2️⃣ Why Aggregate Functions Are Important?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">In real-world systems, aggregate functions are used in almost every reporting query:</p>
            <ul className="list-none space-y-3">
              {[
                { icon: BarChart, title: 'Analytics dashboards' },
                { icon: Component, title: 'E-commerce reports' },
                { icon: Database, title: 'Hospital billing' },
                { icon: Layers, title: 'Banking summaries' },
                { icon: Filter, title: 'Business intelligence' },
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/30 p-2 rounded-lg">
                  <item.icon className="w-5 h-5 text-emerald-500 mr-3 hidden sm:block" />
                  <span className="font-bold">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive SQL Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-emerald-500" />
            Live Aggregate Setup Lab
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                <h3 className="font-bold text-gray-900 dark:text-white">Active Dataset: Employees</h3>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 px-2 py-1 rounded">5 Rows</span>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr><th className="px-4 py-2">emp_id</th><th className="px-4 py-2">name</th><th className="px-4 py-2">department</th><th className="px-4 py-2">salary</th></tr>
                  </thead>
                  <tbody>
                    {employees.map(emp => (
                      <tr key={emp.id} className="border-b dark:border-gray-700/50">
                        <td className="px-4 py-2">{emp.id}</td>
                        <td className="px-4 py-2 font-medium">{emp.name}</td>
                        <td className="px-4 py-2">
                          <span className={`px-2 py-0.5 rounded text-xs ${emp.dept === 'IT' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'}`}>
                            {emp.dept}
                          </span>
                        </td>
                        <td className="px-4 py-2 font-mono text-emerald-600 dark:text-emerald-400">{emp.salary.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Click Function to Aggregate Salary</h3>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { op: 'COUNT', icon: Component, label: 'COUNT' },
                  { op: 'SUM', icon: Component, label: 'SUM' },
                  { op: 'AVG', icon: Calculator, label: 'AVG' },
                  { op: 'MIN', icon: ArrowDown, label: 'MIN' },
                  { op: 'MAX', icon: ArrowUp, label: 'MAX' }
                ].map((item) => (
                  <button
                    key={item.op}
                    onClick={() => calculate(item.op)}
                    className={`flex flex-col items-center justify-center p-2 rounded-xl border-2 transition-all duration-200 ${activeOp === item.op
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
                      : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 text-gray-500'
                      }`}
                  >
                    <item.icon className="w-4 h-4 mb-1" />
                    <span className="text-[10px] font-bold">{item.op}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[350px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
                <div className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter break-all">
                  {activeOp === 'COUNT' ? employees.length :
                    activeOp === 'SUM' ? employees.map(e => e.salary).reduce((a, b) => a + b, 0).toLocaleString() :
                      activeOp === 'AVG' ? (employees.map(e => e.salary).reduce((a, b) => a + b, 0) / employees.length).toLocaleString() :
                        activeOp === 'MIN' ? Math.min(...employees.map(e => e.salary)).toLocaleString() :
                          Math.max(...employees.map(e => e.salary)).toLocaleString()}
                </div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-2">
                  Result of {activeOp}
                </div>
              </div>

              {/* Console Output Simulator */}
              <div className="mt-6 bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-32 overflow-y-auto shadow-inner w-full">
                <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Query Emulator</div>
                {consoleOutput.length === 0 ? (
                  <span className="text-gray-600 italic">Click an aggregate function to test...</span>
                ) : (
                  consoleOutput.map((line, i) => (
                    <div key={i} className={`mb-1 ${i === 2 ? 'text-white font-bold' : 'text-emerald-400 animate-fade-in line-clamp-2'}`}>
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Main SQL Aggregate Functions */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          3️⃣ Main SQL Aggregate Functions
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-12">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr><th className="px-6 py-3">Function</th><th className="px-6 py-3">Purpose</th></tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">COUNT()</td><td className="px-6 py-3">Counts rows</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">SUM()</td><td className="px-6 py-3">Adds values</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">AVG()</td><td className="px-6 py-3">Calculates average</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">MIN()</td><td className="px-6 py-3">Smallest value</td></tr>
              <tr><td className="px-6 py-3 font-medium">MAX()</td><td className="px-6 py-3">Largest value</td></tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">

          {/* COUNT */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-2">
                <span className="mr-2">🔢 1️⃣</span> COUNT()
              </h3>
              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-4">📌 Purpose: Counts number of rows.</p>

              <CodeSnippetBlock title="Example 1: ALL" codeSnippet={`SELECT COUNT(*) AS TotalEmployees\nFROM Employees;\n\n-- ✅ Output: 5`} />
              <CodeSnippetBlock title="Example 2: IT Dept" codeSnippet={`SELECT COUNT(*) AS IT_Count\nFROM Employees\nWHERE department = 'IT';\n\n-- ✅ Output: 3`} />
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl border-l-2 border-blue-400 mt-4 text-sm">
              <h4 className="font-bold flex items-center text-blue-800 dark:text-blue-300">
                <Lightbulb className="w-4 h-4 mr-1" /> Developer Tip
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-1">COUNT(*) counts all rows. COUNT(col) ignores NULL values.</p>
            </div>
          </div>

          {/* SUM */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-2">
                <span className="mr-2">➕ 2️⃣</span> SUM()
              </h3>
              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-4">📌 Purpose: Adds numeric values.</p>

              <CodeSnippetBlock title="Total Salary" codeSnippet={`SELECT SUM(salary) AS TotalSalary\nFROM Employees;\n\n-- ✅ Output: 265000`} />
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl border-l-2 border-indigo-400 mt-4 text-sm">
              <h4 className="font-bold flex items-center text-indigo-800 dark:text-indigo-300">
                <FileText className="w-4 h-4 mr-1" /> Real-World Use
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-1">Total monthly revenue, Total expenses, Total orders.</p>
            </div>
          </div>

          {/* AVG */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-2">
                <span className="mr-2">📊 3️⃣</span> AVG()
              </h3>
              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-4">📌 Purpose: Finds average value.</p>

              <CodeSnippetBlock title="Average Salary" codeSnippet={`SELECT AVG(salary) AS AvgSalary\nFROM Employees;\n\n-- ✅ Output: 53000`} />
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl border-l-2 border-amber-400 mt-4 text-sm">
              <h4 className="font-bold flex items-center text-amber-800 dark:text-amber-300">
                <AlertTriangle className="w-4 h-4 mr-1" /> Important Note
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-1">AVG ignores NULL values automatically.</p>
            </div>
          </div>

          {/* MIN */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-2">
              <span className="mr-2">🔽 4️⃣</span> MIN()
            </h3>
            <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-4">📌 Purpose: Returns smallest value.</p>
            <CodeSnippetBlock title="Lowest Salary" codeSnippet={`SELECT MIN(salary) AS LowestSalary\nFROM Employees;\n\n-- ✅ Output: 40000`} />
          </div>

          {/* MAX */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center mb-2">
              <span className="mr-2">🔼 5️⃣</span> MAX()
            </h3>
            <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-4">📌 Purpose: Returns largest value.</p>
            <CodeSnippetBlock title="Highest Salary" codeSnippet={`SELECT MAX(salary) AS HighestSalary\nFROM Employees;\n\n-- ✅ Output: 70000`} />
          </div>
        </div>
      </section>

      {/* 4️⃣ GROUP BY & 5️⃣ HAVING */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* GROUP BY */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              🏗 4️⃣ Using GROUP BY
            </h2>
            <p className="text-gray-600 dark:text-gray-300">This is where aggregate functions become powerful.</p>

            <CodeSnippetBlock title="Example: Department-wise Salary Summary" codeSnippet={`SELECT department,\n       COUNT(*) AS TotalEmployees,\n       SUM(salary) AS TotalSalary,\n       AVG(salary) AS AverageSalary\nFROM Employees\nGROUP BY department;`} />

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 max-w-full overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr><th className="px-4 py-3">department</th><th className="px-4 py-3">TotalEmployees</th><th className="px-4 py-3">TotalSalary</th><th className="px-4 py-3">AverageSalary</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">IT</td><td className="px-4 py-3">3</td><td className="px-4 py-3">180000</td><td className="px-4 py-3">60000</td></tr>
                  <tr><td className="px-4 py-3 font-medium">HR</td><td className="px-4 py-3">2</td><td className="px-4 py-3">85000</td><td className="px-4 py-3">42500</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border-l-4 border-red-500">
              <h4 className="font-bold flex items-center text-red-800 dark:text-red-300 mb-2">
                📌 Important Rule
              </h4>
              <p className="text-gray-700 dark:text-gray-300 font-bold mb-2">If you use GROUP BY, every column in SELECT must be:</p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>Either aggregated</li>
                <li>Or included in GROUP BY</li>
              </ul>
            </div>
          </div>

          {/* HAVING */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              🔎 5️⃣ Using HAVING
            </h2>
            <p className="text-gray-600 dark:text-gray-300">HAVING filters grouped results.</p>

            <CodeSnippetBlock title="Example: Depts with Average Salary > 50000" codeSnippet={`SELECT department,\n       AVG(salary) AS AvgSalary\nFROM Employees\nGROUP BY department\nHAVING AVG(salary) > 50000;`} />

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 max-w-sm mb-6">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr><th className="px-4 py-3">department</th><th className="px-4 py-3">AvgSalary</th></tr>
                </thead>
                <tbody>
                  <tr><td className="px-4 py-3 font-medium">IT</td><td className="px-4 py-3">60000</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold flex items-center text-purple-900 dark:text-purple-300 mb-4">
                💡 Difference Between WHERE and HAVING
              </h4>
              <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                <thead><tr className="border-b dark:border-gray-700"><th className="pb-2">WHERE</th><th className="pb-2">HAVING</th></tr></thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700/50"><td className="py-2">Filters rows</td><td className="py-2">Filters groups</td></tr>
                  <tr><td className="py-2">Used before grouping</td><td className="py-2">Used after grouping</td></tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Advanced Concept & Best Practices */}
      <section className="max-w-6xl mx-auto mb-16 space-y-8">

        {/* Performance Tips */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 flex items-center text-center justify-center">
            <span className="text-3xl mr-2">⚡</span> Performance Tips <span className="text-sm font-normal text-gray-500 ml-2">(Very Important)</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 italic">After 15+ years in database systems:</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30">
              <h3 className="font-bold text-red-800 dark:text-red-400 mb-4 flex items-center">
                ❌ Common Beginner Mistake
              </h3>
              <CodeSnippetBlock language="sql" codeSnippet={`SELECT department, salary\nFROM Employees\nGROUP BY department;`} />
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/40 rounded text-red-800 dark:text-red-300 text-sm font-medium text-center">
                This is wrong in most SQL databases!
              </div>
            </div>

            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30">
              <h3 className="font-bold text-green-800 dark:text-green-400 mb-4 flex items-center">
                ✅ Correct Way
              </h3>
              <CodeSnippetBlock language="sql" codeSnippet={`SELECT department, MAX(salary)\nFROM Employees\nGROUP BY department;`} />
            </div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border-l-4 border-emerald-500">
            <h3 className="font-bold text-emerald-800 dark:text-emerald-400 mb-4 flex items-center text-xl">
              ⚡ Optimization Advice
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 font-medium mb-6">
              <li>Always index GROUP BY columns.</li>
              <li>Avoid unnecessary aggregation on huge tables.</li>
              <li>Use WHERE before GROUP BY to reduce dataset size.</li>
            </ul>
            <CodeSnippetBlock title="Example Using WHERE Before GROUP BY" codeSnippet={`SELECT department, SUM(salary)\nFROM Employees\nWHERE salary > 40000\nGROUP BY department;`} />
            <p className="text-emerald-700 dark:text-emerald-400 font-bold italic mt-2">Much faster than grouping everything.</p>
          </div>
        </div>

        {/* Real-World Project Applications */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-2xl border border-emerald-200 dark:border-emerald-800/30">
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center">
            <Database className="w-6 h-6 mr-3" />
            🧠 Real-World Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 dark:text-gray-300 font-bold mb-4">Aggregate functions are used in:</p>
              <ul className="space-y-3 mb-6">
                {[
                  { label: 'Business Reports', icon: BarChart },
                  { label: 'Sales dashboards', icon: Server },
                  { label: 'Banking calculations', icon: Component },
                  { label: 'E-commerce totals', icon: Filter },
                  { label: 'Medical billing systems', icon: Layers }
                ].map((sys, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-2 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                    <sys.icon className="w-4 h-4 text-emerald-500 mr-2" /> {sys.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-2">70-80%</div>
              <p className="text-gray-700 dark:text-gray-300 font-bold text-lg">of production reports</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">use aggregate functions to display grouped data directly to end users.</p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default SqlAggregateFunctions;