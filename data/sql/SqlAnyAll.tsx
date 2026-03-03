import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Lightbulb, Target, ArrowRight, Zap, ListFilter, CheckCircle, XCircle, ChevronRight, Layers, Table2, ShieldCheck, DivideCircle as Divide } from 'lucide-react';

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
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-cyan-500 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-cyan-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const SqlAnyAll: React.FC = () => {
  type EmployeeType = { emp_id: number; name: string; salary: number; department: string };
  const initialEmployees: EmployeeType[] = [
    { emp_id: 1, name: 'Arjun', salary: 50000, department: 'IT' },
    { emp_id: 2, name: 'Meena', salary: 40000, department: 'HR' },
    { emp_id: 3, name: 'Ravi', salary: 60000, department: 'IT' },
    { emp_id: 4, name: 'Priya', salary: 45000, department: 'HR' },
    { emp_id: 5, name: 'Karthik', salary: 70000, department: 'IT' }
  ];

  const hrSalaries = initialEmployees.filter(e => e.department === 'HR').map(e => e.salary); // [40000, 45000]
  const itSalaries = initialEmployees.filter(e => e.department === 'IT').map(e => e.salary); // [50000, 60000, 70000]

  const [activeQuery, setActiveQuery] = useState<'none' | 'any_greater' | 'all_greater' | 'all_less'>('none');

  const getQueryState = () => {
    switch (activeQuery) {
      case 'none':
        return {
          title: "Waiting for Input",
          code: "SELECT *\nFROM Employees;",
          desc: "Select a query type on the left to see the step-by-step logic."
        };
      case 'any_greater':
        return {
          title: "3️⃣ > ANY (HR Salaries)",
          code: "SELECT name, salary\nFROM Employees\nWHERE salary > ANY (\n    SELECT salary\n    FROM Employees\n    WHERE department = 'HR'\n);",
          desc: "Salary greater than AT LEAST ONE salary in HR department."
        };
      case 'all_greater':
        return {
          title: "4️⃣ > ALL (HR Salaries)",
          code: "SELECT name, salary\nFROM Employees\nWHERE salary > ALL (\n    SELECT salary\n    FROM Employees\n    WHERE department = 'HR'\n);",
          desc: "Salary greater than EVERY SINGLE salary in HR department."
        };
      case 'all_less':
        return {
          title: "6️⃣ < ALL (IT Salaries)",
          code: "SELECT name, salary\nFROM Employees\nWHERE salary < ALL (\n    SELECT salary\n    FROM Employees\n    WHERE department = 'IT'\n);",
          desc: "Employees earning less than EVERY SINGLE IT salary."
        };
    }
  };

  const getFilteredEmployees = (): EmployeeType[] => {
    if (activeQuery === 'none') return initialEmployees;
    if (activeQuery === 'any_greater') {
      const minHr = Math.min(...hrSalaries);
      return initialEmployees.filter(e => e.salary > minHr);
    }
    if (activeQuery === 'all_greater') {
      const maxHr = Math.max(...hrSalaries);
      return initialEmployees.filter(e => e.salary > maxHr);
    }
    if (activeQuery === 'all_less') {
      const minIt = Math.min(...itSalaries);
      return initialEmployees.filter(e => e.salary < minIt);
    }
    return initialEmployees;
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-900 dark:to-cyan-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl mb-4">
          <ListFilter className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          What are ANY and ALL?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          These operators are used heavily with <span className="font-bold text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-400">subqueries</span> to compare an outer value with an inner set of values.
        </p>
      </header>

      {/* Intro section & Definitions */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-xl mr-2">📌</span> Definition
            </h2>

            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800/50">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 text-lg flex items-center mb-2">
                  🔹 ANY
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Returns TRUE if <span className="font-extrabold underline decoration-blue-400 decoration-2 underline-offset-2">at least one val­ue</span> in the subquery satisfies the condition.</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border border-purple-100 dark:border-purple-800/50">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 text-lg flex items-center mb-2">
                  🔹 ALL
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Returns TRUE if <span className="font-extrabold underline decoration-purple-400 decoration-2 underline-offset-2">all val­ues</span> in the subquery satisfy the condition.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 h-full relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center relative z-10">
              🧠 Important Concept
            </h2>
            <p className="text-cyan-400 text-sm italic mb-6 relative z-10 font-bold border-l-2 border-cyan-500 pl-3 py-1">Think of it like this:</p>

            <div className="bg-black/50 rounded-xl overflow-hidden border border-gray-800 relative z-10 mt-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-800 text-gray-300 uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4 font-semibold w-1/3">Operator</th>
                    <th className="px-5 py-4 font-semibold text-cyan-400">Meaning</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400 divide-y divide-gray-800">
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-5 py-4 text-white font-bold text-base tracking-widest text-blue-400">ANY</td>
                    <td className="px-5 py-4 font-medium leading-relaxed">Compare with <span className="text-white bg-blue-900/30 px-1 rounded">at least one</span> value</td>
                  </tr>
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-5 py-4 text-white font-bold text-base tracking-widest text-purple-400">ALL</td>
                    <td className="px-5 py-4 font-medium leading-relaxed">Compare with <span className="text-white bg-purple-900/30 px-1 rounded">every</span> value</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Syntax References */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          2️⃣ Basic Syntax
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <CodeSnippetBlock codeSnippet={`SELECT column_name\nFROM table_name\nWHERE column_name operator ANY (subquery);`} />
          <CodeSnippetBlock codeSnippet={`SELECT column_name\nFROM table_name\nWHERE column_name operator ALL (subquery);`} />
        </div>
      </section>

      {/* Interactive Subquery Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-700 pb-4 w-full">
            <Terminal className="w-6 h-6 mr-2 text-cyan-500" />
            Live Subquery Lab
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 pb-8">

          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg flex items-center justify-between">
                <span>Query Scenarios</span>
                <Layers className="w-5 h-5 text-cyan-500" />
              </h3>

              <div className="space-y-3">
                <button onClick={() => setActiveQuery('none')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeQuery === 'none' ? 'border-gray-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300'}`}>
                  <div>
                    <div className="font-bold text-sm">🧪 Original Employees</div>
                    <div className="text-xs opacity-70">No subqueries applied</div>
                  </div>
                </button>

                <button onClick={() => setActiveQuery('any_greater')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeQuery === 'any_greater' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-300'}`}>
                  <div>
                    <div className="font-bold text-sm flex items-center">3️⃣ {'>'} ANY (HR Salaries)</div>
                    <div className="text-xs opacity-70">Greater than min(40000)</div>
                  </div>
                </button>

                <button onClick={() => setActiveQuery('all_greater')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeQuery === 'all_greater' ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-purple-300'}`}>
                  <div>
                    <div className="font-bold text-sm flex items-center">4️⃣ {'>'} ALL (HR Salaries)</div>
                    <div className="text-xs opacity-70">Greater than max(45000)</div>
                  </div>
                </button>

                <button onClick={() => setActiveQuery('all_less')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeQuery === 'all_less' ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-rose-300'}`}>
                  <div>
                    <div className="font-bold text-sm flex items-center">6️⃣ {'<'} ALL (IT Salaries)</div>
                    <div className="text-xs opacity-70">Less than min(50000)</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step-by-Step Logic Panel */}
            {activeQuery !== 'none' && (
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-700 shadow-inner text-sm transform transition-all animate-fade-in text-gray-300">
                <h4 className="font-bold flex items-center text-cyan-400 mb-4 pb-2 border-b border-gray-700">
                  🔍 Step-by-step Execution
                </h4>

                <div className="space-y-4 font-mono">
                  <div>
                    <p className="text-gray-500 mb-1 font-sans text-xs uppercase font-bold tracking-wider">Step 1: Subquery evaluates</p>
                    <div className="bg-black/60 p-2 rounded border border-gray-800 text-xs text-gray-400 break-words">
                      {activeQuery === 'all_less'
                        ? `SELECT salary FROM Employees WHERE department = 'IT';`
                        : `SELECT salary FROM Employees WHERE department = 'HR';`}
                    </div>
                    <p className="text-cyan-500 font-bold mt-1 text-xs">
                      {activeQuery === 'all_less' ? `Result Array: [50000, 60000, 70000]` : `Result Array: [40000, 45000]`}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 mb-1 font-sans text-xs uppercase font-bold tracking-wider">Step 2: Main Query evaluates</p>
                    <div className="bg-black/60 p-2 rounded border border-gray-800 text-xs text-emerald-400">
                      {activeQuery === 'any_greater' && `salary > ANY (40000, 45000)`}
                      {activeQuery === 'all_greater' && `salary > ALL (40000, 45000)`}
                      {activeQuery === 'all_less' && `salary < ALL (50000, 60000, 70000)`}
                    </div>
                    <p className="text-white mt-2 text-xs font-sans leading-relaxed">
                      {activeQuery === 'any_greater' && `Meaning: Salary must be greater than 40000 OR 45000.`}
                      {activeQuery === 'all_greater' && `Meaning: Salary must be greater than BOTH 40000 AND 45000.`}
                      {activeQuery === 'all_less' && `Meaning: Salary must be strictly less than ALL values (meaning < 50000).`}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-8 space-y-6 flex flex-col items-stretch">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 relative flex flex-col h-full shadow-sm">

              <div className="mb-2 text-gray-800 dark:text-gray-200 font-bold text-base flex items-center border-b border-gray-300 dark:border-gray-800 pb-3">
                {activeQuery !== 'none' && <Target className="w-5 h-5 mr-3 text-cyan-500" />}
                {getQueryState().title}: <span className="text-gray-500 dark:text-gray-400 ml-2 font-normal text-sm pt-0.5">{getQueryState().desc}</span>
              </div>

              <CodeSnippetBlock title="Live Query Editor" codeSnippet={getQueryState().code} />

              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm mt-2 flex-grow flex flex-col">
                <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
                  <div className="font-bold flex items-center text-gray-600 dark:text-gray-400 uppercase text-sm">
                    <Table2 className="w-4 h-4 mr-2" />
                    Query Result
                  </div>
                  <div className="text-xs bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full font-bold">
                    {getFilteredEmployees().length} row(s) returned
                  </div>
                </div>

                <div className="overflow-x-auto flex-grow max-h-[400px]">
                  <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
                    <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 sticky top-0 z-10 shadow-sm border-b border-gray-200 dark:border-gray-700">
                      <tr>
                        {activeQuery === 'none' && <th className="px-5 py-3 font-bold">emp_id</th>}
                        <th className="px-5 py-3 font-bold">name</th>
                        <th className="px-5 py-3 font-bold">salary</th>
                        {activeQuery === 'none' && <th className="px-5 py-3 font-bold">department</th>}
                        {activeQuery !== 'none' && <th className="px-5 py-3 font-bold text-center">Inclusion Reason</th>}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-800/80">
                      {getFilteredEmployees().length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-5 py-8 text-center text-gray-400 italic font-medium">No records match the filter criteria.</td>
                        </tr>
                      ) : (
                        getFilteredEmployees().map(emp => (
                          <tr key={emp.emp_id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                            {activeQuery === 'none' && <td className="px-5 py-4 font-mono text-gray-500">{emp.emp_id}</td>}
                            <td className="px-5 py-4 font-bold text-gray-900 dark:text-white">{emp.name}</td>
                            <td className="px-5 py-4 font-mono text-lg text-emerald-600 dark:text-emerald-400 font-bold">{emp.salary.toLocaleString()}</td>
                            {activeQuery === 'none' && (
                              <td className="px-5 py-4">
                                <span className={`px-2 py-1.5 rounded-full text-xs font-bold ${emp.department === 'IT' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'}`}>
                                  {emp.department}
                                </span>
                              </td>
                            )}
                            {activeQuery === 'any_greater' && (
                              <td className="px-5 py-4 text-xs font-mono text-gray-500 dark:text-gray-400 text-center bg-gray-50 dark:bg-gray-900/50">
                                {emp.salary} &gt; <span className="text-blue-500 bg-blue-500/10 px-1 rounded font-bold">40000</span> <CheckCircle className="w-3 h-3 text-green-500 inline ml-1" />
                              </td>
                            )}
                            {activeQuery === 'all_greater' && (
                              <td className="px-5 py-4 text-xs font-mono text-gray-500 dark:text-gray-400 text-center bg-gray-50 dark:bg-gray-900/50">
                                {emp.salary} &gt; <span className="text-purple-500 bg-purple-500/10 px-1 rounded font-bold">45000</span> <CheckCircle className="w-3 h-3 text-green-500 inline ml-1" />
                              </td>
                            )}
                            {activeQuery === 'all_less' && (
                              <td className="px-5 py-4 text-xs font-mono text-gray-500 dark:text-gray-400 text-center bg-gray-50 dark:bg-gray-900/50">
                                {emp.salary} &lt; <span className="text-rose-500 bg-rose-500/10 px-1 rounded font-bold">50000</span> <CheckCircle className="w-3 h-3 text-green-500 inline ml-1" />
                              </td>
                            )}
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

      {/* Comparisons & Interview Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Visual Comparison & Shortcut */}
          <div className="space-y-6 h-full flex flex-col">

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-indigo-200 dark:border-indigo-800/30 flex-grow shadow-lg">
              <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300 mb-6 flex items-center">
                <Zap className="w-7 h-7 mr-3 text-amber-500" />
                🔥 Important Shortcut Concept
              </h2>

              <p className="inline-block bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-6 border border-amber-200 dark:border-amber-700">Very powerful interview concept</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm border border-indigo-100 dark:border-indigo-800">
                  <div className="text-xl font-mono font-bold text-gray-800 dark:text-gray-200 mb-2">&gt; ANY</div>
                  <div className="flex justify-center mb-2"><Divide className="h-4 w-4 text-indigo-400 transform rotate-45" /></div>
                  <div className="text-lg font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 py-1 rounded">&gt; MIN()</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm border border-purple-100 dark:border-purple-800">
                  <div className="text-xl font-mono font-bold text-gray-800 dark:text-gray-200 mb-2">&gt; ALL</div>
                  <div className="flex justify-center mb-2"><Divide className="h-4 w-4 text-purple-400 transform rotate-45" /></div>
                  <div className="text-lg font-mono font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 py-1 rounded">&gt; MAX()</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-sm border-l-4 border-blue-500 shadow-sm">
                  <p className="text-gray-500 dark:text-gray-400 mb-2 font-bold font-mono text-xs">This query:</p>
                  <code className="text-blue-700 dark:text-blue-300 font-bold block mb-2">salary &gt; ANY (HR salaries)</code>
                  <p className="text-gray-500 dark:text-gray-400 mb-2 font-bold font-mono text-xs mt-3">Is exactly equivalent to:</p>
                  <code className="text-gray-800 dark:text-gray-200 font-bold block bg-gray-50 dark:bg-gray-900 p-2 border border-gray-200 dark:border-gray-700 rounded text-xs overflow-x-auto whitespace-nowrap">
                    salary &gt; (SELECT <span className="text-blue-500">MIN(salary)</span> FROM Employees WHERE department='HR')
                  </code>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-sm border-l-4 border-purple-500 shadow-sm">
                  <code className="text-purple-700 dark:text-purple-300 font-bold block mb-2">salary &gt; ALL (HR salaries)</code>
                  <p className="text-gray-500 dark:text-gray-400 mb-2 font-bold font-mono text-xs mt-3">Is exactly equivalent to:</p>
                  <code className="text-gray-800 dark:text-gray-200 font-bold block bg-gray-50 dark:bg-gray-900 p-2 border border-gray-200 dark:border-gray-700 rounded text-xs overflow-x-auto whitespace-nowrap">
                    salary &gt; (SELECT <span className="text-purple-500">MAX(salary)</span> FROM Employees WHERE department='HR')
                  </code>
                </div>
              </div>

            </div>
          </div>

          {/* ANY vs ALL comparison */}
          <div className="space-y-8 flex flex-col">

            {/* 7 Comparison table */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center mb-6">
                <span className="mr-3">7️⃣</span> ANY vs ALL Comparison
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
                  <thead className="bg-gray-900 text-white text-base">
                    <tr>
                      <th className="px-6 py-4 border-b border-gray-700 min-w-[150px]">Feature</th>
                      <th className="px-6 py-4 border-b border-gray-700 text-blue-400 text-center border-l border-gray-800 bg-blue-900/20">ANY</th>
                      <th className="px-6 py-4 border-b border-gray-700 text-purple-400 text-center border-l border-gray-800 bg-purple-900/20">ALL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-5 font-bold">At least one match</td>
                      <td className="px-6 py-5 text-center bg-blue-50/50 dark:bg-blue-900/5"><CheckCircle className="w-5 h-5 text-green-500 inline" /></td>
                      <td className="px-6 py-5 text-center bg-purple-50/50 dark:bg-purple-900/5"><XCircle className="w-5 h-5 text-red-500 inline opacity-50" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 font-bold">Must satisfy ALL values</td>
                      <td className="px-6 py-5 text-center bg-blue-50/50 dark:bg-blue-900/5"><XCircle className="w-5 h-5 text-red-500 inline opacity-50" /></td>
                      <td className="px-6 py-5 text-center bg-purple-50/50 dark:bg-purple-900/5"><CheckCircle className="w-5 h-5 text-green-500 inline" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 font-bold italic text-gray-600 dark:text-gray-400">Less strict</td>
                      <td className="px-6 py-5 text-center bg-blue-50/50 dark:bg-blue-900/5"><CheckCircle className="w-5 h-5 text-green-500 inline" /></td>
                      <td className="px-6 py-5 text-center bg-purple-50/50 dark:bg-purple-900/5"><XCircle className="w-5 h-5 text-red-500 inline opacity-50" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 font-bold italic text-gray-600 dark:text-gray-400">More strict</td>
                      <td className="px-6 py-5 text-center bg-blue-50/50 dark:bg-blue-900/5"><XCircle className="w-5 h-5 text-red-500 inline opacity-50" /></td>
                      <td className="px-6 py-5 text-center bg-purple-50/50 dark:bg-purple-900/5"><CheckCircle className="w-5 h-5 text-green-500 inline" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8 Real-World Use Cases */}
            <div className="flex-grow flex flex-col">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center mb-6">
                <span className="mr-3">8️⃣</span> Real-World Use Cases
              </h2>

              <div className="grid grid-cols-1 gap-4 flex-grow">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-start">
                  <div className="text-3xl mr-4 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">🛒</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 uppercase tracking-wider text-sm">E-commerce</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Find products priced higher than <strong className="text-blue-500">ANY</strong> product in category X.</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-start">
                  <div className="text-3xl mr-4 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">🏦</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 uppercase tracking-wider text-sm">Banking</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Find customers with balance greater than <strong className="text-purple-500">ALL</strong> savings account holders.</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-start">
                  <div className="text-3xl mr-4 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">🏥</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 uppercase tracking-wider text-sm">Hospital</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Find doctors earning more than <strong className="text-purple-500">ALL</strong> junior doctors.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Performance Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/10 dark:to-orange-900/10 p-8 rounded-3xl shadow-lg border border-rose-200 dark:border-rose-800/30">

          <h2 className="text-3xl font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center">
            <ShieldCheck className="w-8 h-8 mr-3 text-rose-500" />
            ⚡ Performance Optimization Tips
          </h2>
          <p className="text-rose-700 dark:text-rose-400 text-sm font-bold uppercase tracking-widest mb-10 border-b border-rose-200 dark:border-rose-800 pb-4 ml-11">Enterprise Patterns (15+ Years Exp)</p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Tip 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-800/50 relative">
              <div className="absolute -top-4 -left-3 text-4xl">🐌</div>
              <h3 className="font-bold text-lg mb-3 mt-2 text-gray-900 dark:text-white">1. Watch Large Subqueries</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">If your subquery returns thousands or millions of rows across a network, using <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded mx-0.5 text-rose-500">ANY/ALL</code> becomes extremely slow. The database has to constantly loop and compare sets.</p>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm font-bold flex items-center bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded"><CheckCircle className="w-4 h-4 mr-2" /> Better: Use MIN() or MAX() formulas when possible.</p>
            </div>

            {/* Tip 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-800/50 relative">
              <div className="absolute -top-4 -left-3 text-4xl">⚡</div>
              <h3 className="font-bold text-lg mb-3 mt-2 text-gray-900 dark:text-white">2. Use Indexes Intelligently</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">If filtering the subquery results by a specific text field (like department), ensure absolutely that the field is indexed to ensure subquery performance is nearly instant.</p>
              <code className="text-xs bg-gray-100 dark:bg-gray-900 p-3 rounded block font-mono text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                <span className="text-indigo-500 font-bold">CREATE INDEX</span> idx_department<br />
                <span className="text-indigo-500 font-bold">ON</span> Employees(department);
              </code>
            </div>

            {/* Tip 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-800/50 relative hover:-translate-y-1 transition-transform">
              <div className="absolute -top-4 -left-3 text-4xl">🔄</div>
              <h3 className="font-bold text-lg mb-3 mt-2 text-gray-900 dark:text-white">3. JOINing can be Faster</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">In modern relational databases, the query optimizer usually heavily prefers JOINs over deep subqueries.</p>

              <div className="space-y-2 mt-4">
                <div className="text-xs text-rose-500 dark:text-rose-400 font-bold line-through">salary {'>'} ALL (subquery)</div>
                <div className="flex justify-center"><ArrowRight className="w-4 h-4 text-gray-400 rotate-90" /></div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded">
                  salary {'>'} (SELECT MAX(salary) ...)
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs text-center mt-3 uppercase tracking-wider font-bold">More Efficient CPU Parsing</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlAnyAll;