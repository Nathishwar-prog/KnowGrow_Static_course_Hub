import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Shield, AlertTriangle, ArrowRight, Zap, Target, Layers, Trash2, ShieldAlert, Server, HelpCircle, Table2 } from 'lucide-react';

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

const SqlDelete: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-rose-50 dark:from-gray-900 dark:to-rose-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-rose-100 dark:bg-rose-900/30 rounded-2xl mb-4 text-rose-600 dark:text-rose-400">
          <Trash2 className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          What is SQL DELETE?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          <code className="bg-rose-100 dark:bg-rose-900/40 px-2 py-0.5 rounded font-bold text-rose-700 dark:text-rose-300">DELETE</code> is a DML (Data Manipulation Language) command used to remove records (rows) from a table.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 inline-block text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full -z-0"></div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-3 relative z-10 flex items-center">
            <span className="text-xl mr-2">📌</span> It removes data but keeps:
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 relative z-10">
            <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-blue-500" /> Table structure</li>
            <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-blue-500" /> Constraints</li>
            <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-blue-500" /> Indexes</li>
          </ul>
        </div>
      </header>

      {/* Basic Syntax & Example Table */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-8">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
              <span className="mr-3">2️⃣</span> Basic Syntax
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative">
              <CodeSnippetBlock codeSnippet={`DELETE FROM table_name\nWHERE condition;`} title="Syntax" />
              <div className="mt-4 p-3 bg-rose-50 dark:bg-rose-900/20 rounded border-l-4 border-rose-500 flex items-start">
                <AlertTriangle className="w-5 h-5 text-rose-500 mr-2 shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-rose-800 dark:text-rose-300">
                  The <code className="font-mono text-rose-600 dark:text-rose-400 bg-white dark:bg-gray-900 px-1 rounded mx-1">WHERE</code> clause is extremely important.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center mt-8 pt-4">
              <span className="mr-3">🧪</span> Example Table
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-700/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm font-bold text-gray-600 dark:text-gray-300 uppercase flex items-center">
                  <Table2 className="w-4 h-4 mr-2" /> Employees Table
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
                  <thead className="bg-gray-100/50 dark:bg-gray-800 text-xs uppercase text-gray-500 dark:text-gray-400">
                    <tr>
                      <th className="px-4 py-3 font-bold border-b dark:border-gray-700">emp_id</th>
                      <th className="px-4 py-3 font-bold border-b dark:border-gray-700">name</th>
                      <th className="px-4 py-3 font-bold border-b dark:border-gray-700">department</th>
                      <th className="px-4 py-3 font-bold border-b dark:border-gray-700">salary</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-mono">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2 font-sans font-medium">Arjun</td>
                      <td className="px-4 py-2">IT</td>
                      <td className="px-4 py-2">50000</td>
                    </tr>
                    <tr className="bg-rose-50/50 dark:bg-rose-900/10 hover:bg-rose-50 dark:hover:bg-rose-900/20">
                      <td className="px-4 py-2 font-bold text-rose-600 dark:text-rose-400">2</td>
                      <td className="px-4 py-2 font-sans font-bold text-rose-600 dark:text-rose-400">Meena</td>
                      <td className="px-4 py-2 text-rose-600 dark:text-rose-400">HR</td>
                      <td className="px-4 py-2 text-rose-600 dark:text-rose-400">40000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2 font-sans font-medium">Ravi</td>
                      <td className="px-4 py-2">IT</td>
                      <td className="px-4 py-2">60000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="px-4 py-2">4</td>
                      <td className="px-4 py-2 font-sans font-medium">Priya</td>
                      <td className="px-4 py-2">HR</td>
                      <td className="px-4 py-2">45000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
              <span className="mr-3">3️⃣</span> DELETE with WHERE
            </h2>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800/30 shadow-sm">
              <p className="text-xs bg-emerald-200 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 px-2 py-1 rounded font-bold uppercase tracking-wider mb-3 inline-block">Safe Way</p>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-300 mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2" /> Delete Employee with ID 2
              </h4>
              <CodeSnippetBlock codeSnippet={`DELETE FROM Employees\nWHERE emp_id = 2;`} />

              <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded border border-emerald-100 dark:border-emerald-800 overflow-hidden shadow-sm">
                <h5 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center">
                  <Check className="w-4 h-4 mr-1" /> Result
                </h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-gray-700 dark:text-gray-300 font-mono">
                    <thead className="bg-gray-50 dark:bg-gray-700/50 uppercase text-gray-500 dark:text-gray-400">
                      <tr>
                        <th className="px-3 py-2 font-bold">emp_id</th>
                        <th className="px-3 py-2 font-bold font-sans">name</th>
                        <th className="px-3 py-2 font-bold">department</th>
                        <th className="px-3 py-2 font-bold">salary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      <tr><td className="px-3 py-1.5">1</td><td className="px-3 py-1.5 font-sans">Arjun</td><td className="px-3 py-1.5">IT</td><td className="px-3 py-1.5">50000</td></tr>
                      <tr><td className="px-3 py-1.5">3</td><td className="px-3 py-1.5 font-sans">Ravi</td><td className="px-3 py-1.5">IT</td><td className="px-3 py-1.5">60000</td></tr>
                      <tr><td className="px-3 py-1.5">4</td><td className="px-3 py-1.5 font-sans">Priya</td><td className="px-3 py-1.5">HR</td><td className="px-3 py-1.5">45000</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center mt-8 pt-4">
              <span className="mr-3">4️⃣</span> DELETE Without WHERE
            </h2>
            <div className="bg-rose-100 dark:bg-rose-900/20 p-6 rounded-xl border-2 border-rose-500 shadow-sm relative overflow-hidden group">
              <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldAlert className="w-24 h-24 text-rose-500" />
              </div>
              <div className="relative z-10">
                <p className="text-xs bg-rose-500 text-white px-2 py-1 rounded font-bold uppercase tracking-wider mb-3 inline-flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" /> Very Dangerous
                </p>
                <CodeSnippetBlock codeSnippet={`DELETE FROM Employees;`} />
                <ul className="space-y-2 mt-4 text-sm font-bold text-rose-900 dark:text-rose-300">
                  <li className="flex items-center"><Trash2 className="w-4 h-4 mr-2" /> This deletes ALL rows.</li>
                  <li className="flex items-center"><Layers className="w-4 h-4 mr-2" /> Table remains, but empty.</li>
                  <li className="flex items-center"><ShieldAlert className="w-4 h-4 mr-2" /> Always double-check before running this.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Advanced Deletes */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layers className="w-8 h-8 mr-3 text-indigo-500" /> Advanced DELETE Operations
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col hover:border-indigo-400 transition-colors">
            <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-400 mb-4 flex w-full">
              <span className="mr-2">5️⃣</span> Multiple Conditions
            </h3>
            <CodeSnippetBlock codeSnippet={`DELETE FROM Employees\nWHERE department = 'IT'\nAND salary < 55000;`} />
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-auto bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
              <Target className="w-4 h-4 inline mr-1 text-indigo-500 mb-0.5" /> Deletes Arjun only.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col hover:border-emerald-400 transition-colors">
            <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-4 flex w-full">
              <span className="mr-2">6️⃣</span> Using Subquery
            </h3>
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">🎯 Delete Employees Earning Less Than Avg Salary</div>
            <CodeSnippetBlock codeSnippet={`DELETE FROM Employees\nWHERE salary < (\n    SELECT AVG(salary) FROM Employees\n);`} />
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-auto bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
              This is common in advanced filtering.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col hover:border-blue-400 transition-colors">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-4 flex w-full justify-between">
              <div><span className="mr-2">7️⃣</span> With JOIN</div>
              <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-1 rounded">MySQL</span>
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">Used when deleting based on another table.</p>
            <CodeSnippetBlock codeSnippet={`DELETE e\nFROM Employees e\nJOIN Departments d\nON e.department = d.dept_name\nWHERE d.dept_name = 'HR';`} />
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-auto bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
              Deletes all HR employees.
            </p>
          </div>

        </div>
      </section>

      {/* The Big 3 Comparison & Foreign Keys */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Compare Table */}
          <div className="lg:col-span-8 bg-gray-900 rounded-2xl border border-gray-800 shadow-xl overflow-hidden flex flex-col">
            <div className="bg-black/40 p-6 border-b border-gray-800 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
                <span className="mr-2">8️⃣</span> DELETE vs TRUNCATE vs DROP
              </h2>
              <span className="text-xs bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-rose-500/30">Very Important</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-800 text-gray-300">
                  <tr>
                    <th className="px-6 py-4 font-bold uppercase tracking-wide">Command</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wide text-center">Deletes Data</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wide text-center">Deletes Structure</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wide text-center">Can Use WHERE</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wide text-center">Rollback Possible</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-gray-300">
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 font-mono font-bold text-emerald-400">DELETE</td>
                    <td className="px-6 py-4 text-center font-bold">Yes</td>
                    <td className="px-6 py-4 text-center font-bold text-rose-400">No</td>
                    <td className="px-6 py-4 text-center font-bold text-emerald-400">Yes</td>
                    <td className="px-6 py-4 text-center font-bold text-emerald-400">Yes <span className="text-xs font-normal text-gray-500">(usually)</span></td>
                  </tr>
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 font-mono font-bold text-amber-400">TRUNCATE</td>
                    <td className="px-6 py-4 text-center font-bold">Yes</td>
                    <td className="px-6 py-4 text-center font-bold text-rose-400">No</td>
                    <td className="px-6 py-4 text-center font-bold text-rose-400">No</td>
                    <td className="px-6 py-4 text-center font-bold text-rose-400">No <span className="text-xs font-normal text-gray-500">(usually)</span></td>
                  </tr>
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 font-mono font-bold text-rose-500">DROP</td>
                    <td className="px-6 py-4 text-center font-bold">Yes</td>
                    <td className="px-6 py-4 text-center font-bold text-emerald-400">Yes</td>
                    <td className="px-6 py-4 text-center font-bold text-rose-400">No</td>
                    <td className="px-6 py-4 text-center font-bold text-rose-400">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-black/20 grid sm:grid-cols-2 gap-6 flex-grow">
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <h4 className="font-bold text-amber-400 mb-3 flex items-center">
                  <ChevronRightIcon /> TRUNCATE Example
                </h4>
                <div className="bg-black/50 p-3 rounded font-mono text-xs text-rose-300 mb-3">
                  TRUNCATE TABLE Employees;
                </div>
                <ul className="text-xs text-gray-400 space-y-1.5 ml-2 font-medium">
                  <li>• Faster than DELETE</li>
                  <li>• Resets AUTO_INCREMENT</li>
                  <li>• Cannot filter rows</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <h4 className="font-bold text-rose-500 mb-3 flex items-center">
                  <ChevronRightIcon /> DROP Example
                </h4>
                <div className="bg-black/50 p-3 rounded font-mono text-xs text-rose-500 font-bold mb-3">
                  DROP TABLE Employees;
                </div>
                <p className="text-xs text-gray-400 font-medium ml-2">
                  Table is completely removed from the database.
                </p>
              </div>
            </div>
          </div>

          {/* Foreign Keys */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 relative overflow-hidden flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 relative z-10">
              <span className="mr-2">9️⃣</span> With Foreign Keys
            </h2>

            <div className="space-y-4 relative z-10 flex-grow">
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300">If table has foreign key constraints:</p>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400 font-medium ml-2">
                <li className="flex items-start"><ShieldAlert className="w-4 h-4 mr-2 text-rose-500 shrink-0 mt-0.5" /> DELETE may fail if child records exist.</li>
                <li className="flex items-start"><Layers className="w-4 h-4 mr-2 text-blue-500 shrink-0 mt-0.5" /> Or may cascade if defined.</li>
              </ul>

              <div className="mt-4">
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">Example Constraint:</p>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-xs text-blue-600 dark:text-blue-400 overflow-x-auto">
                  FOREIGN KEY (customer_id)<br />
                  REFERENCES Customers(customer_id)<br />
                  <span className="text-rose-500 font-bold bg-rose-50 dark:bg-rose-900/30 px-1 rounded">ON DELETE CASCADE</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800/50 relative z-10">
              <p className="text-sm font-bold text-blue-800 dark:text-blue-300 flex items-start">
                <AlertTriangle className="w-5 h-5 mr-2 shrink-0" />
                <span>If parent is deleted → child records deleted automatically. <br /><span className="italic">This is called <u>Cascade Delete</u>.</span></span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Real World Use Cases */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="mr-2 text-3xl">🔟</span> Real-World Production Examples
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="text-2xl mr-3">🛒</span> E-commerce
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Delete cancelled orders older than 1 year:</p>
            <CodeSnippetBlock codeSnippet={`DELETE FROM Orders\nWHERE status = 'Cancelled'\nAND order_date < '2025-01-01';`} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="text-2xl mr-3">🏥</span> Hospital
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Delete inactive users:</p>
            <CodeSnippetBlock codeSnippet={`DELETE FROM Users\nWHERE last_login < '2022-01-01';`} />
          </div>
        </div>
      </section>

      {/* Performance Considerations */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-3xl border border-amber-200 dark:border-amber-800/30 p-8 sm:p-10 shadow-sm relative overflow-hidden text-amber-900 dark:text-amber-100">
          <div className="absolute -top-10 -right-10 opacity-5 dark:opacity-10 text-[15rem]">⚡</div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 border-b border-amber-200 dark:border-amber-800/50 pb-6 relative z-10">
            <h2 className="text-3xl font-bold flex items-center">
              <Zap className="w-8 h-8 mr-3 text-amber-500" />
              Performance Considerations
            </h2>
            <span className="bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mt-4 sm:mt-0 w-fit">15+ Years Experience</span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">

            {/* Tip 1 */}
            <div>
              <h3 className="font-bold text-xl mb-3 flex items-center"><span className="text-2xl mr-2">🔥</span> 1. Always Use WHERE</h3>
              <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl border border-amber-200/50 dark:border-amber-700/30">
                <p className="font-medium">In production, some companies <strong className="text-rose-600 dark:text-rose-400">disable DELETE without WHERE</strong> to prevent catastrophic data loss.</p>
              </div>
            </div>

            {/* Tip 2 */}
            <div>
              <h3 className="font-bold text-xl mb-3 flex items-center"><span className="text-2xl mr-2">🔥</span> 2. Use LIMIT (MySQL)</h3>
              <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl border border-amber-200/50 dark:border-amber-700/30">
                <code className="block bg-amber-100 dark:bg-amber-900/50 p-2 rounded text-amber-800 dark:text-amber-200 font-mono text-sm mb-2 font-bold">
                  DELETE FROM Employees LIMIT 100;
                </code>
                <p className="font-medium text-sm">Useful for batch deletion to avoid locking rows for too long.</p>
              </div>
            </div>

            {/* Tip 3 */}
            <div>
              <h3 className="font-bold text-xl mb-3 flex items-center"><span className="text-2xl mr-2">🔥</span> 3. Large Deletes Lock Tables</h3>
              <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl border border-amber-200/50 dark:border-amber-700/30 h-[calc(100%-2.5rem)]">
                <p className="font-bold mb-2">For millions of rows:</p>
                <ul className="space-y-1.5 text-sm font-medium ml-2">
                  <li>• Delete in batches</li>
                  <li>• Use indexing</li>
                  <li>• Schedule during low traffic over night</li>
                </ul>
              </div>
            </div>

            {/* Tip 4 */}
            <div>
              <h3 className="font-bold text-xl mb-3 flex items-center">
                <span className="text-2xl mr-2">🔥</span> 4. Soft Delete Strategy
                <span className="ml-3 text-[10px] bg-amber-500 text-white px-2 py-1 rounded-full uppercase tracking-widest hidden lg:inline-block">Pro Tip</span>
              </h3>
              <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl border-2 border-emerald-400 dark:border-emerald-600 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2"><Check className="text-emerald-500 w-6 h-6 opacity-30" /></div>
                <p className="font-bold text-sm mb-2 text-emerald-800 dark:text-emerald-400">Instead of deleting, UPDATE:</p>
                <code className="block bg-emerald-50 dark:bg-emerald-900/30 p-2 rounded text-emerald-800 dark:text-emerald-200 font-mono text-xs mb-3 font-bold border border-emerald-100 dark:border-emerald-800/50">
                  UPDATE Users<br />
                  SET is_deleted = TRUE<br />
                  WHERE user_id = 5;
                </code>
                <p className="font-medium text-sm">This is <strong>safer</strong> in business applications for tracking history and easy restoration.</p>
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
            { q: "What happens if WHERE is omitted in a DELETE statement?", a: "All rows in the table are deleted, but the table structure remains." },
            { q: "What is the difference between DELETE and TRUNCATE?", a: "DELETE removes rows one by one and logs them (slower), TRUNCATE deallocates data pages (faster) and resets the identity/auto_increment counter." },
            { q: "Can a DELETE statement be rolled back?", a: "Yes, if it is executed inside a transaction and hasn't been committed yet." },
            { q: "What is ON DELETE CASCADE?", a: "A foreign key property that automatically deletes related child records when the parent record is deleted." },
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

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default SqlDelete;