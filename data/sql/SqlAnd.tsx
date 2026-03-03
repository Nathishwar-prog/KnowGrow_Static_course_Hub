import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Lightbulb, Table2, Filter, AlertTriangle, ArrowRight, Zap, Target, BookOpen, Layers } from 'lucide-react';

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

const SqlAnd: React.FC = () => {
  type EmployeeType = { emp_id: number; name: string; department: string; salary: number };
  const initialEmployees: EmployeeType[] = [
    { emp_id: 1, name: 'Arjun', department: 'IT', salary: 50000 },
    { emp_id: 2, name: 'Meena', department: 'HR', salary: 40000 },
    { emp_id: 3, name: 'Ravi', department: 'IT', salary: 60000 },
    { emp_id: 4, name: 'Priya', department: 'HR', salary: 45000 },
    { emp_id: 5, name: 'Karthik', department: 'IT', salary: 70000 }
  ];

  const [activeFilter, setActiveFilter] = useState<'none' | 'basic' | 'multiple' | 'between'>('none');

  const getFilterState = () => {
    switch (activeFilter) {
      case 'none':
        return {
          code: "SELECT *\nFROM Employees;",
          desc: "Showing all employees."
        };
      case 'basic':
        return {
          code: "SELECT name, salary\nFROM Employees\nWHERE department = 'IT'\nAND salary > 55000;",
          desc: "🎯 Find IT employees earning more than 55000"
        };
      case 'multiple':
        return {
          code: "SELECT *\nFROM Employees\nWHERE department = 'IT'\nAND salary > 50000\nAND emp_id > 2;",
          desc: "Using more than two conditions."
        };
      case 'between':
        return {
          code: "SELECT *\nFROM Employees\nWHERE salary BETWEEN 40000 AND 60000\nAND department = 'HR';",
          desc: "AND operator paired with BETWEEN."
        };
    }
  };

  const getFilteredEmployees = (): EmployeeType[] => {
    if (activeFilter === 'none') return initialEmployees;
    if (activeFilter === 'basic') return initialEmployees.filter(e => e.department === 'IT' && e.salary > 55000);
    if (activeFilter === 'multiple') return initialEmployees.filter(e => e.department === 'IT' && e.salary > 50000 && e.emp_id > 2);
    if (activeFilter === 'between') return initialEmployees.filter(e => e.salary >= 40000 && e.salary <= 60000 && e.department === 'HR');
    return initialEmployees;
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-4">
          <Filter className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          What is SQL AND?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The <code className="bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 rounded font-bold text-emerald-700 dark:text-emerald-300">AND</code> operator is used to combine multiple conditions in a WHERE clause. It returns results only when ALL conditions are TRUE.
        </p>
      </header>

      {/* Intro section & Truth Table */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-xl mr-2">📌</span> Basic Syntax
            </h2>
            <CodeSnippetBlock codeSnippet={`SELECT column_names\nFROM table_name\nWHERE condition1 AND condition2;`} />

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800/50 text-center mt-4">
              <div className="flex items-center justify-center space-x-3 text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">
                <span>Condition1</span>
                <span className="bg-blue-200 dark:bg-blue-800 px-2 py-0.5 rounded text-sm">AND</span>
                <span>Condition2</span>
              </div>
              <div className="flex flex-col items-center justify-center text-blue-500 my-1">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-bold bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 py-2 px-4 rounded-lg inline-block shadow-sm">
                Both must be TRUE
              </p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 h-full relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center relative z-10">
              3️⃣ Logical Truth Table
            </h2>
            <p className="text-emerald-400 text-sm italic mb-6 relative z-10 font-bold border-l-2 border-emerald-500 pl-3 py-1">Very Important for Understanding</p>

            <div className="bg-black/50 rounded-xl overflow-hidden border border-gray-800 relative z-10">
              <table className="w-full text-center text-sm">
                <thead className="bg-gray-800 text-gray-300 uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Condition 1</th>
                    <th className="px-4 py-3 font-semibold">Condition 2</th>
                    <th className="px-4 py-3 font-semibold text-emerald-400">Result</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400 divide-y divide-gray-800">
                  <tr className="bg-emerald-900/20">
                    <td className="px-4 py-3 text-white font-bold">TRUE</td>
                    <td className="px-4 py-3 text-white font-bold">TRUE</td>
                    <td className="px-4 py-3 text-emerald-400 font-bold tracking-widest bg-emerald-900/40">TRUE</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-white font-bold">TRUE</td>
                    <td className="px-4 py-3 whitespace-nowrap">FALSE</td>
                    <td className="px-4 py-3 text-red-400">FALSE</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">FALSE</td>
                    <td className="px-4 py-3 text-white font-bold">TRUE</td>
                    <td className="px-4 py-3 text-red-400">FALSE</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">FALSE</td>
                    <td className="px-4 py-3 whitespace-nowrap">FALSE</td>
                    <td className="px-4 py-3 text-red-400">FALSE</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-emerald-300 text-sm font-bold text-center mt-auto pt-6 relative z-10 flex items-center justify-center">
              <Target className="w-4 h-4 mr-2" /> 👉 Only TRUE when completely TRUE.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Filter Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-700 pb-4 w-full">
            <Terminal className="w-6 h-6 mr-2 text-emerald-500" />
            Live AND Operator Filter Lab
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg flex items-center justify-between">
                <span>Select Query Scenario</span>
                <Filter className="w-5 h-5 text-emerald-500" />
              </h3>

              <div className="space-y-3">
                <button onClick={() => setActiveFilter('none')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeFilter === 'none' ? 'border-gray-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300'}`}>
                  <div>
                    <div className="font-bold text-sm">🧪 Original Employees Table</div>
                    <div className="text-xs opacity-70">No filters applied</div>
                  </div>
                </button>

                <button onClick={() => setActiveFilter('basic')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeFilter === 'basic' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-emerald-300'}`}>
                  <div>
                    <div className="font-bold text-sm flex items-center">4️⃣ Basic Example <Target className="w-3 h-3 ml-2 text-emerald-500" /></div>
                    <div className="text-xs opacity-70">dept = 'IT' AND salary {'>'} 55000</div>
                  </div>
                </button>

                <button onClick={() => setActiveFilter('multiple')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeFilter === 'multiple' ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-300'}`}>
                  <div>
                    <div className="font-bold text-sm flex items-center">5️⃣ Multiple AND Conditions <Layers className="w-3 h-3 ml-2 text-indigo-500" /></div>
                    <div className="text-xs opacity-70">dept = 'IT' AND salary {'>'} 50000 AND emp_id {'>'} 2</div>
                  </div>
                </button>

                <button onClick={() => setActiveFilter('between')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeFilter === 'between' ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-amber-300'}`}>
                  <div>
                    <div className="font-bold text-sm flex items-center">6️⃣ AND with BETWEEN <Filter className="w-3 h-3 ml-2 text-amber-500" /></div>
                    <div className="text-xs opacity-70">salary BETWEEN ... AND dept = 'HR'</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Logical Evaluator Walkthrough */}
            {activeFilter === 'basic' && (
              <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800/30 shadow-inner">
                <h4 className="font-bold flex items-center text-emerald-900 dark:text-emerald-300 mb-4 pb-2 border-b border-emerald-200 dark:border-emerald-800">
                  <BookOpen className="w-5 h-5 mr-2" /> 🔎 Why this output?
                </h4>
                <div className="space-y-3 font-mono text-sm text-gray-800 dark:text-gray-300">
                  <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-2 rounded shadow-sm border border-emerald-100 dark:border-emerald-900/50">
                    <span>Condition 1:</span> <span className="text-emerald-600 dark:text-emerald-400 font-bold">department = IT</span>
                  </div>
                  <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-2 rounded shadow-sm border border-emerald-100 dark:border-emerald-900/50">
                    <span>Condition 2:</span> <span className="text-emerald-600 dark:text-emerald-400 font-bold">salary &gt; 55000</span>
                  </div>
                </div>
                <p className="mt-4 text-center font-bold text-sm text-emerald-800 dark:text-emerald-400">Both must be TRUE.</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden relative flex flex-col h-full">

              <div className="mb-2 text-gray-600 dark:text-gray-400 font-medium text-sm border-b border-gray-200 dark:border-gray-800 pb-2">{getFilterState().desc}</div>
              <CodeSnippetBlock title="Live Query Editor" codeSnippet={getFilterState().code} />

              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm mt-2 flex-grow flex flex-col">
                <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
                  <div className="font-bold flex items-center text-gray-600 dark:text-gray-400 uppercase text-sm">
                    <Table2 className="w-4 h-4 mr-2" />
                    Query Result
                  </div>
                  <div className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 px-2 py-1 rounded font-bold">
                    {getFilteredEmployees().length} row(s)
                  </div>
                </div>

                <div className="overflow-x-auto flex-grow max-h-[400px]">
                  <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
                    <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 sticky top-0 z-10 shadow-sm">
                      <tr>
                        {activeFilter !== 'basic' && <th className="px-5 py-3 border-b dark:border-gray-700 font-bold">emp_id</th>}
                        <th className="px-5 py-3 border-b dark:border-gray-700 font-bold">name</th>
                        {activeFilter !== 'basic' && <th className="px-5 py-3 border-b dark:border-gray-700 font-bold">department</th>}
                        <th className="px-5 py-3 border-b dark:border-gray-700 font-bold">salary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {getFilteredEmployees().length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-5 py-8 text-center text-gray-400 italic">No records match the filter criteria.</td>
                        </tr>
                      ) : (
                        getFilteredEmployees().map(emp => (
                          <tr key={emp.emp_id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            {activeFilter !== 'basic' && <td className="px-5 py-3 font-mono text-gray-500">{emp.emp_id}</td>}
                            <td className="px-5 py-3 font-medium">{emp.name}</td>
                            {activeFilter !== 'basic' && (
                              <td className="px-5 py-3">
                                <span className={`px-2 py-1 rounded text-xs font-bold ${emp.department === 'IT' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'}`}>
                                  {emp.department}
                                </span>
                              </td>
                            )}
                            <td className="px-5 py-3 font-mono">{emp.salary}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Comparisons & Dates */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Date filtering */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
              <span className="mr-3">7️⃣</span> AND with Date Filtering
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Imagine an <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded font-bold font-mono">Orders</code> table with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded font-bold font-mono">order_id, order_date, total</code>.</p>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-bold text-gray-500 mb-2 uppercase">Example:</p>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Orders\nWHERE order_date >= '2026-01-01'\nAND order_date <= '2026-12-31';`} />

              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-4 flex items-center">
                <Target className="w-4 h-4 mr-2" /> 👉 Filters orders only in 2026.
              </p>
            </div>
          </div>

          {/* AND vs OR comparison */}
          <div className="space-y-6 h-full flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
              <span className="mr-3">8️⃣</span> AND vs OR
            </h2>
            <span className="text-xs bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 px-2 py-1 rounded font-bold uppercase tracking-wider block w-fit mb-4">Important Comparison</span>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm flex-grow">
              <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300 h-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-200 text-base">
                  <tr>
                    <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-emerald-600 dark:text-emerald-400 w-1/2">AND</th>
                    <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-rose-600 dark:text-rose-400 w-1/2">OR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-5 font-bold">All conditions must be TRUE</td>
                    <td className="px-6 py-5 font-bold">At least one must be TRUE</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 italic bg-emerald-50 dark:bg-emerald-900/5">More restrictive</td>
                    <td className="px-6 py-5 italic bg-rose-50 dark:bg-rose-900/5">Less restrictive</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5">
                      <code className="text-xs font-mono text-emerald-600 dark:text-emerald-400">WHERE dept = 'IT'<br />AND salary &gt; 60000</code>
                    </td>
                    <td className="px-6 py-5">
                      <code className="text-xs font-mono text-rose-600 dark:text-rose-400">WHERE dept = 'IT'<br />OR salary &gt; 60000</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-bold text-gray-800 dark:text-gray-200 text-center italic mt-auto">Huge difference in result count.</p>
          </div>
        </div>
      </section>

      {/* Advanced Rules & Professional Tips */}
      <section className="max-w-6xl mx-auto mb-16 space-y-8">

        {/* Advanced: Parentheses */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex-grow">
              9️⃣ Using AND with Parentheses
            </h2>
            <span className="text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 font-bold px-3 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap ml-4">Advanced</span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium text-lg border-l-4 border-indigo-400 pl-4 py-1.5">When combining AND + OR, always use parentheses!</p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-200 dark:border-red-800/30">
              <h4 className="font-bold flex items-center text-red-800 dark:text-red-400 mb-3 text-lg">
                ❌ Wrong (Ambiguous)
              </h4>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Employees\nWHERE department = 'IT'\nOR department = 'HR'\nAND salary > 50000;`} />
              <p className="text-red-700 dark:text-red-300 text-sm font-bold text-center mt-3 bg-red-100 dark:bg-red-900/40 py-2 rounded">SQL evaluates AND first.</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-200 dark:border-green-800/30">
              <h4 className="font-bold flex items-center text-green-800 dark:text-green-400 mb-3 text-lg">
                ✅ Correct
              </h4>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Employees\nWHERE (department = 'IT' OR department = 'HR')\nAND salary > 50000;`} />
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-xl border-l-4 border-indigo-500">
            <h4 className="font-bold flex items-center text-indigo-800 dark:text-indigo-300 mb-2">
              <Lightbulb className="w-5 h-5 mr-2" /> Professional Tip
            </h4>
            <p className="text-gray-700 dark:text-gray-300 font-bold mb-1">Always use parentheses when mixing AND and OR.</p>
            <p className="text-gray-600 dark:text-gray-400 italic text-sm">Even if not strictly required — it significantly improves readability for other developers.</p>
          </div>
        </div>

        {/* Real World Applications Grid */}
        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-xl pb-10">
          <div className="bg-black/40 p-6 border-b border-gray-800 mb-6">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider text-center">🔟 Real-World Production Examples</h2>
            <p className="text-gray-400 text-center mt-2 text-sm italic">In real systems:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 px-10">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 transform hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-4 text-center">🛒</div>
              <h4 className="text-emerald-400 font-bold text-center mb-4 uppercase tracking-wider text-sm">E-commerce</h4>
              <code className="text-xs font-mono text-gray-300 block bg-black/50 p-3 rounded">
                <span className="text-purple-400">WHERE</span> payment_status = 'Completed'<br />
                <span className="text-purple-400">AND</span> order_date {'>='} '2026-01-01'
              </code>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 transform hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-4 text-center">🏥</div>
              <h4 className="text-blue-400 font-bold text-center mb-4 uppercase tracking-wider text-sm">Hospital System</h4>
              <code className="text-xs font-mono text-gray-300 block bg-black/50 p-3 rounded">
                <span className="text-purple-400">WHERE</span> doctor_id = 5<br />
                <span className="text-purple-400">AND</span> appointment_date = CURDATE()
              </code>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 transform hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-4 text-center">🏦</div>
              <h4 className="text-amber-400 font-bold text-center mb-4 uppercase tracking-wider text-sm">Banking</h4>
              <code className="text-xs font-mono text-gray-300 block bg-black/50 p-3 rounded">
                <span className="text-purple-400">WHERE</span> account_status = 'Active'<br />
                <span className="text-purple-400">AND</span> balance {'>'} 10000
              </code>
            </div>
          </div>
        </div>

        {/* Performance Tips & Mistakes */}
        <div className="grid lg:grid-cols-12 gap-8 place-items-start">

          {/* 15+ Yrs Exp */}
          <div className="lg:col-span-8 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl border border-amber-200 dark:border-amber-800/30 h-full w-full">
            <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center">
              <Zap className="w-7 h-7 mr-3 text-amber-500" />
              ⚡ Performance Tips
            </h2>
            <p className="text-amber-700 dark:text-amber-400 text-sm font-bold uppercase tracking-widest mb-8 border-b border-amber-200 dark:border-amber-800 pb-4">Very Important (15+ Years Exp)</p>

            <div className="space-y-8">
              {/* Tip 1 */}
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 1. Order Conditions Smartly</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">Databases optimize internally, but systematically place <span className="font-bold border-b-2 border-amber-400">indexed columns</span> in conditions first.</p>
                <code className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-xs font-mono block text-amber-600 dark:text-amber-400 border border-gray-200 dark:border-gray-700">WHERE <u className="font-bold">emp_id = 5</u> AND salary &gt; 50000</code>
                <p className="text-gray-600 dark:text-gray-400 text-xs italic mt-2">If emp_id is indexed → fast filtering.</p>
              </div>

              {/* Tip 2 */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 2. Avoid Functions in WHERE</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 border-t-4 border-red-500 p-3 rounded shadow-sm">
                    <p className="text-red-600 dark:text-red-400 text-xs font-bold uppercase mb-2">❌ Bad (Disables Index)</p>
                    <code className="text-xs font-mono block text-gray-700 dark:text-gray-300 overflow-x-auto">WHERE YEAR(order_date) = 2026<br />AND status = 'Completed'</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border-t-4 border-green-500 p-3 rounded shadow-sm">
                    <p className="text-green-600 dark:text-green-400 text-xs font-bold uppercase mb-2">✅ Better</p>
                    <code className="text-xs font-mono block text-gray-700 dark:text-gray-300 overflow-x-auto">WHERE order_date BETWEEN ...</code>
                  </div>
                </div>
              </div>

              {/* Tip 3 */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 3. Composite Indexes</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">If a query perfectly runs a double AND frequently, create a composite index:</p>
                <CodeSnippetBlock codeSnippet={`CREATE INDEX idx_dept_salary\nON Employees(department, salary);`} />
              </div>
            </div>
          </div>

          {/* Beginner Mistakes Outline */}
          <div className="lg:col-span-4 bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl shadow-lg border border-red-200 dark:border-red-800/30 flex flex-col h-full w-full relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 text-7xl opacity-5 dark:opacity-10 group-hover:scale-110 transition-transform">❌</div>
            <h2 className="text-xl font-extrabold text-red-800 dark:text-red-400 mb-6 border-b border-red-200 dark:border-red-800/50 pb-4 relative z-10">
              Common Beginner Mistakes
            </h2>

            <ul className="space-y-4 mb-6 relative z-10 flex-grow">
              {[
                'Forgetting quotes for string values',
                'Mixing AND & OR without parentheses',
                'Comparing NULL using = instead of IS NULL',
              ].map((err, i) => (
                <li key={i} className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-red-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{err}</span>
                </li>
              ))}

              <li className="pt-4 border-t border-red-200 dark:border-red-800/30">
                <p className="text-sm font-bold text-red-700 dark:text-red-300 mb-2">Contradicting Conditions</p>
                <code className="bg-white dark:bg-gray-800 p-2 rounded block font-mono text-xs border border-red-100 dark:border-red-800 text-gray-600 dark:text-gray-300 mb-2">
                  WHERE salary &gt; 50000<br />AND salary &lt; 40000
                </code>
                <p className="text-xs italic text-red-600 dark:text-red-400">This will perpetually return nothing.</p>
              </li>
            </ul>
          </div>
        </div>

      </section>

    </div>
  );
};

export default SqlAnd;