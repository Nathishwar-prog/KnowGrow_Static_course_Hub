import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Lightbulb, FileText, Component, Table2, Network, CheckCircle, XCircle, Zap, Code, Target } from 'lucide-react';

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
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-orange-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const SqlAliases: React.FC = () => {
  const employees = [
    { emp_id: 1, name: 'Arjun', salary: 50000, department: 'IT' },
    { emp_id: 2, name: 'Meena', salary: 40000, department: 'HR' },
    { emp_id: 3, name: 'Ravi', salary: 60000, department: 'IT' }
  ];

  const [aliasOption, setAliasOption] = useState<'none' | 'column' | 'expression'>('none');

  const getAliasQuery = () => {
    if (aliasOption === 'none') return "SELECT name, salary FROM Employees;";
    if (aliasOption === 'column') return "SELECT name AS EmployeeName, salary AS MonthlySalary FROM Employees;";
    return "SELECT name AS EmployeeName, salary * 12 AS AnnualSalary FROM Employees;";
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-orange-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-4">
          <Database className="w-8 h-8 text-orange-600 dark:text-orange-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          What is an SQL Alias?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          An SQL Alias is a temporary name given to a column or a table. It makes query results more readable and professional.
        </p>
      </header>

      {/* Intro section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-xl mr-2">📌</span> Definition
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line text-lg">
              <strong className="text-orange-600 dark:text-orange-400 block mt-2 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center border border-orange-100 dark:border-orange-800">
                Alias = Temporary alternative name <br />used inside a query
              </strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic text-center">It only exists for the duration of that specific query.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              2️⃣ Why Aliases Are Important?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Without aliases, complex queries become messy. In real-world applications they:</p>
            <ul className="list-none space-y-3">
              {[
                { title: 'Improve readability' },
                { title: 'Make reports user-friendly' },
                { title: 'Shorten long table names' },
                { title: 'Simplify JOIN queries' },
                { title: 'Improve maintainability' },
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/30 p-2 rounded-lg border border-gray-100 dark:border-gray-700/50">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 hidden sm:block" />
                  <span className="font-bold">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Alias Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-700 pb-2 w-full">
            <Terminal className="w-6 h-6 mr-2 text-orange-500" />
            3️⃣ Column Aliases Lab
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Used to rename output column names. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded font-mono text-sm ml-2">AS</code> is optional, and this works in MySQL, PostgreSQL, SQL Server, and Oracle.</p>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Select Alias Type to preview table output</h3>

              <div className="space-y-3">
                <button onClick={() => setAliasOption('none')} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${aliasOption === 'none' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-orange-300'}`}>
                  <div className="font-bold mb-1">Raw Columns</div>
                  <div className="text-xs opacity-80 font-mono">SELECT name, salary</div>
                </button>

                <button onClick={() => setAliasOption('column')} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${aliasOption === 'column' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-orange-300'}`}>
                  <div className="font-bold mb-1">With Aliases</div>
                  <div className="text-xs opacity-80 font-mono">SELECT name AS EmployeeName, salary AS MonthlySalary</div>
                </button>

                <button onClick={() => setAliasOption('expression')} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${aliasOption === 'expression' ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-purple-300'}`}>
                  <div className="font-bold mb-1 flex items-center justify-between">Expressions (Calculations) <Zap className="w-4 h-4 text-purple-500" /></div>
                  <div className="text-xs opacity-80 font-mono">SELECT name AS EmployeeName, salary * 12 AS AnnualSalary</div>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden relative">
              <CodeSnippetBlock title="Live Query Editor" codeSnippet={getAliasQuery()} />

              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm mt-4">
                <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2 text-xs font-bold text-gray-500 uppercase flex items-center">
                  <Table2 className="w-4 h-4 mr-2" /> Result Set
                </div>
                <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
                  <thead className={`text-xs uppercase border-b dark:border-gray-700 ${aliasOption !== 'none' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>
                    <tr>
                      <th className="px-4 py-3">{aliasOption !== 'none' ? 'EmployeeName' : 'name'}</th>
                      <th className="px-4 py-3">{aliasOption === 'none' ? 'salary' : aliasOption === 'column' ? 'MonthlySalary' : 'AnnualSalary'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map(emp => (
                      <tr key={emp.emp_id} className="border-b dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                        <td className="px-4 py-2 font-medium">{emp.name}</td>
                        <td className="px-4 py-2 font-mono text-gray-500 dark:text-gray-400">
                          {aliasOption === 'expression' ? (emp.salary * 12).toLocaleString() : emp.salary.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold flex items-center text-blue-800 dark:text-blue-300 mb-2">
                <Lightbulb className="w-4 h-4 mr-2" /> Developer Advice
              </h4>
              <p className="text-gray-700 dark:text-gray-300 font-bold mb-2">Always use meaningful names in reports.</p>
              <div className="space-y-4">
                <div>
                  <p className="text-red-600 dark:text-red-400 text-sm font-bold flex items-center"><XCircle className="w-4 h-4 mr-1" /> Bad: <span className="font-mono bg-red-100 dark:bg-red-900/40 px-1 ml-2 rounded font-normal mix-blend-multiply dark:mix-blend-lighten text-gray-800 dark:text-red-200">Output column: SUM(salary)</span></p>
                  <code className="text-xs font-mono ml-5 block mt-1">SELECT SUM(salary) FROM Employees;</code>
                </div>
                <div>
                  <p className="text-green-600 dark:text-green-400 text-sm font-bold flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> Better: <span className="font-mono bg-green-100 dark:bg-green-900/40 px-1 ml-2 rounded font-normal mix-blend-multiply dark:mix-blend-lighten text-gray-800 dark:text-green-200">Output column: TotalSalary</span></p>
                  <code className="text-xs font-mono ml-5 block mt-1">SELECT SUM(salary) AS TotalSalary FROM Employees;</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Table Aliases & 5. JOINs */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Table Aliases Basics */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
              4️⃣ Table Aliases
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Very important when using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded font-bold text-orange-600 dark:text-orange-400">JOIN</code>.</p>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">🔹 Basic Syntax</h4>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Employees e;`} />
              <p className="text-sm font-bold text-gray-600 dark:text-gray-400">Here: <code className="bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 px-2 py-0.5 rounded font-mono">e</code> is alias for Employees table.</p>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-bold flex items-center text-indigo-900 dark:text-indigo-300 mb-4">
                <Target className="w-5 h-5 mr-2" /> 💡 Why This Is Important
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">In large systems, tables may have long names like: <code className="bg-indigo-100 dark:bg-indigo-900/40 p-1 rounded block mt-2 mb-4">customer_transaction_history_2026</code></p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Using aliases massively improves readability:</p>
              <code className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 rounded block font-mono text-sm shadow-sm mt-2 font-bold text-indigo-600 dark:text-indigo-400 text-center">
                FROM customer_transaction_history_2026 cth
              </code>
            </div>
          </div>

          {/* JOIN Table Aliases */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
              <Network className="w-6 h-6 mr-3 text-orange-500" />
              5️⃣ Aliases with JOIN
            </h2>
            <span className="text-xs bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 px-2 py-1 rounded font-bold uppercase tracking-wider block w-fit mb-4">Most Important Section</span>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">

              {/* Bad vs Good Queries */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-red-50 dark:bg-red-900/10">
                <h4 className="font-bold text-red-800 dark:text-red-400 flex items-center mb-3 text-sm"><XCircle className="w-4 h-4 mr-1" /> Without Alias (Messy Query)</h4>
                <CodeSnippetBlock codeSnippet={`SELECT Employees.name, Departments.dept_name\nFROM Employees\nJOIN Departments\nON Employees.dept_id = Departments.dept_id;`} />
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/10">
                <h4 className="font-bold text-green-800 dark:text-green-400 flex items-center mb-3 text-sm"><CheckCircle className="w-4 h-4 mr-1" /> With Table Alias (Professional Way)</h4>
                <CodeSnippetBlock codeSnippet={`SELECT e.name AS EmployeeName,\n       d.dept_name AS DepartmentName\nFROM Employees e\nJOIN Departments d\nON e.dept_id = d.dept_id;`} />

                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mt-4">
                  <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b dark:border-gray-700">
                      <tr><th className="px-4 py-2">EmployeeName</th><th className="px-4 py-2">DepartmentName</th></tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-gray-700/50"><td className="px-4 py-2 font-medium">Arjun</td><td className="px-4 py-2 text-gray-400">IT</td></tr>
                      <tr className="border-b dark:border-gray-700/50"><td className="px-4 py-2 font-medium">Meena</td><td className="px-4 py-2 text-gray-400">HR</td></tr>
                      <tr><td className="px-4 py-2 font-medium">Ravi</td><td className="px-4 py-2 text-gray-400">IT</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Rules & Developer Tips (15+ Years) */}
      <section className="max-w-6xl mx-auto mb-16 space-y-8">

        {/* Rules & Common Mistakes */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
            6️⃣ Alias Rules & Common Mistakes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Quick Rules</h3>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Alias exists only during query execution.</li>
                <li>Cannot use alias in <strong>WHERE</strong> clause <em>(in most databases)</em>.</li>
                <li>Can use alias in <strong>ORDER BY</strong>.</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-xl border border-red-200 dark:border-red-800/30">
              <h4 className="font-bold flex items-center text-red-800 dark:text-red-400 mb-3">
                ❌ Common Beginner Mistake
              </h4>
              <CodeSnippetBlock codeSnippet={`SELECT salary AS MonthlySalary\nFROM Employees\nWHERE MonthlySalary > 50000;`} />
              <p className="text-red-800 dark:text-red-300 text-sm font-bold text-center mt-2">This fails in many databases!</p>
            </div>
          </div>

          {/* Correction layout below the grid */}
          <div className="mt-8 bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-200 dark:border-green-800/30 flex flex-col items-center">
            <h4 className="font-bold flex items-center text-green-800 dark:text-green-400 mb-4 self-start">
              ✅ Correct Versions
            </h4>
            <div className="grid md:grid-cols-2 gap-6 w-full">
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Use Standard Column Name:</p>
                <CodeSnippetBlock codeSnippet={`SELECT salary AS MonthlySalary\nFROM Employees\nWHERE salary > 50000;`} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Or Use Subquery:</p>
                <CodeSnippetBlock codeSnippet={`SELECT *\nFROM (\n    SELECT salary AS MonthlySalary\n    FROM Employees\n) AS temp\nWHERE MonthlySalary > 50000;`} />
              </div>
            </div>
          </div>
        </div>

        {/* Real World 15+ years experience */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl border border-orange-200 dark:border-orange-800/30">
          <h2 className="text-3xl font-bold text-orange-900 dark:text-orange-300 mb-8 flex items-center flex-wrap">
            <Code className="w-8 h-8 mr-3" />
            8️⃣ Real-World Developer Tips <span className="text-sm font-normal text-orange-800 dark:text-orange-400 ml-3 opacity-80">(15+ Years Exp)</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Tip 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-2 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 1. Always Alias Aggregate Columns</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Prevents ugly column names like <em>SUM(salary)</em> showing up in critical financial reports or APIs.</p>
            </div>

            {/* Tip 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-2 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 2. Always Alias Tables in JOIN</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Especially crucial when joining 3+ tables to avoid ambiguity and long prefixes.</p>
              <code className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded block font-mono text-gray-800 dark:text-gray-300">
                FROM Orders <span className="text-orange-500 font-bold">o</span><br />
                JOIN Customers <span className="text-orange-500 font-bold">c</span> ON o.customer_id = c.id<br />
                JOIN Payments <span className="text-orange-500 font-bold">p</span> ON o.id = p.order_id
              </code>
            </div>

            {/* Tip 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-4 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 3. Meaningful Short Aliases</h3>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded mr-2">e</code> → Employees</div>
                <div className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded mr-2">d</code> → Departments</div>
                <div className="flex items-center text-sm"><XCircle className="w-4 h-4 text-red-500 mr-2" /> Bad: <em>x1, x2, t1, t2</em></div>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-4 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 4. Consistent Naming Styles</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Choose one style for your course website and stick to it universally.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-1">
                  <span className="text-gray-500 dark:text-gray-400">camelCase</span> <code className="font-mono text-indigo-500 font-bold">AnnualSalary</code>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-gray-400">snake_case</span> <code className="font-mono text-indigo-500 font-bold">annual_salary</code>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 9: Real-World Applications */}
        <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden shadow-xl border border-gray-800 text-center flex flex-col items-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
          <h2 className="text-2xl font-bold text-white mb-6 relative z-10">9️⃣ Real-World Applications</h2>

          <div className="flex flex-wrap justify-center gap-3 mb-8 relative z-10 max-w-2xl mx-auto">
            {['Reporting Dashboards', 'Data Analytics Queries', 'Complex Joins', 'API Response Formatting', 'Stored Procedures', 'Data Warehouse Queries'].map((app, i) => (
              <span key={i} className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm shadow-sm">{app}</span>
            ))}
          </div>

          <p className="text-orange-400 font-bold text-xl relative z-10">In production systems, 90% of complex queries use table aliases.</p>
        </div>

      </section>

    </div>
  );
};

export default SqlAliases;