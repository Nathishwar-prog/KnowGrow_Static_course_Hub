import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Lightbulb, Component, Table2, Settings2, ShieldCheck, AlertTriangle, ArrowRight, Activity, Trash2, Key, DatabaseBackup, Gauge, BookOpen, MonitorSmartphone, CheckCircle, FileText } from 'lucide-react';

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

const SqlAlterTable: React.FC = () => {
  type EmployeeType = { emp_id: number; name: string; salary: number | string; department?: string | null };
  const initialEmployees: EmployeeType[] = [
    { emp_id: 1, name: 'Arjun', salary: 50000 },
    { emp_id: 2, name: 'Meena', salary: 40000 }
  ];

  const [activeMutation, setActiveMutation] = useState<'base' | 'add' | 'modify' | 'drop' | 'rename'>('base');

  const getEmulatorState = () => {
    switch (activeMutation) {
      case 'base':
        return {
          code: "CREATE TABLE Employees (\n    emp_id INT PRIMARY KEY,\n    name VARCHAR(50),\n    salary INT\n);",
          output: "Query OK, 0 rows affected."
        };
      case 'add':
        return {
          code: "ALTER TABLE Employees\nADD department VARCHAR(30);",
          output: "Query OK, 2 rows affected.\nRecords: 2  Duplicates: 0  Warnings: 0"
        };
      case 'modify':
        return {
          code: "ALTER TABLE Employees\nMODIFY salary BIGINT;",
          output: "Query OK, 2 rows affected.\nRecords: 2  Duplicates: 0  Warnings: 0"
        };
      case 'drop':
        return {
          code: "ALTER TABLE Employees\nDROP COLUMN department;",
          output: "Query OK, 2 rows affected.\nRecords: 2  Duplicates: 0  Warnings: 0"
        };
      case 'rename':
        return {
          code: "ALTER TABLE Employees\nRENAME TO Staff;",
          output: "Query OK, 0 rows affected."
        };
    }
  };

  const getEmployeesData = (): EmployeeType[] => {
    if (activeMutation === 'base' || activeMutation === 'modify' || activeMutation === 'rename' || activeMutation === 'drop') {
      // Keep base data fields but simulate 'modify' datatype visually
      return initialEmployees;
    } else if (activeMutation === 'add') {
      return initialEmployees.map(e => ({ ...e, department: 'NULL' }));
    }
    return initialEmployees;
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-rose-50 dark:from-gray-900 dark:to-rose-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-rose-100 dark:bg-rose-900/30 rounded-2xl mb-4">
          <Settings2 className="w-8 h-8 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          What is ALTER TABLE?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded font-bold text-rose-500">ALTER TABLE</code> is used to modify the structure of an existing table without destroying it.
        </p>
      </header>

      {/* Intro section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-xl mr-2">📌</span> Definition
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/50 text-center">
                <div className="font-bold text-blue-800 dark:text-blue-300 mb-1">CREATE</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Creates structure</div>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-100 dark:border-rose-800/50 text-center">
                <div className="font-bold text-rose-800 dark:text-rose-300 mb-1">ALTER</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Changes structure</div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-bold mb-3">You can:</p>
            <div className="flex flex-wrap gap-2">
              {['Add columns', 'Modify columns', 'Drop columns', 'Add constraints', 'Rename columns', 'Rename tables'].map((action, i) => (
                <span key={i} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">{action}</span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              2️⃣ Why ALTER TABLE is Important?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium italic text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 pl-4 py-1">If you build a real product, ALTER TABLE is unavoidable.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 font-bold">In real-world projects:</p>
            <ul className="list-none space-y-3">
              {[
                'Business rules change',
                'New features are added',
                'Data types need correction',
                'Performance improvements require indexes',
                'Constraints must be enforced'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0 hidden sm:block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive ALTER Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-700 pb-4 w-full">
            <Terminal className="w-6 h-6 mr-2 text-rose-500" />
            Live Table Mutation Lab
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 bg-rose-50 dark:bg-rose-900/20 p-3 rounded-lg flex items-center justify-between">
                <span>Data Definition Tools</span>
                <Settings2 className="w-5 h-5 text-rose-500" />
              </h3>

              <div className="space-y-3">
                <button onClick={() => setActiveMutation('base')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeMutation === 'base' ? 'border-gray-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300'}`}>
                  <Table2 className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-bold text-sm">Base Table (Reset)</div>
                    <div className="text-xs opacity-70">CREATE TABLE</div>
                  </div>
                </button>

                <button onClick={() => setActiveMutation('add')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeMutation === 'add' ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-green-300'}`}>
                  <Component className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-bold text-sm">Add New Column</div>
                    <div className="text-xs opacity-70">ADD department</div>
                  </div>
                </button>

                <button onClick={() => setActiveMutation('modify')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeMutation === 'modify' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-300'}`}>
                  <Activity className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-bold text-sm">Modify Column Type</div>
                    <div className="text-xs opacity-70">MODIFY salary BIGINT</div>
                  </div>
                </button>

                <button onClick={() => setActiveMutation('drop')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeMutation === 'drop' ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-red-300'}`}>
                  <Trash2 className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-bold text-sm">Drop Column</div>
                    <div className="text-xs opacity-70">DROP department</div>
                  </div>
                </button>

                <button onClick={() => setActiveMutation('rename')} className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center ${activeMutation === 'rename' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-orange-300'}`}>
                  <FileText className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-bold text-sm">Rename Table</div>
                    <div className="text-xs opacity-70">RENAME TO Staff</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden relative min-h-[500px] flex flex-col">

              <CodeSnippetBlock title="DDL Query" codeSnippet={getEmulatorState().code} />

              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm mt-2 flex-grow flex flex-col">
                <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
                  <div className="font-bold flex items-center text-rose-600 dark:text-rose-400 uppercase text-sm">
                    <Database className="w-4 h-4 mr-2" />
                    {activeMutation === 'rename' ? 'Staff Table' : 'Employees Table'}
                  </div>
                  <div className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-gray-500 dark:text-gray-300">
                    Schema Visualizer
                  </div>
                </div>

                <div className="overflow-x-auto flex-grow">
                  <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
                    <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400">
                      <tr>
                        <th className="px-5 py-3 border-b dark:border-gray-700 font-bold flex flex-col">
                          emp_id
                          <span className="text-[10px] text-gray-400 lowercase mt-0.5">INT / PK</span>
                        </th>
                        <th className="px-5 py-3 border-b dark:border-gray-700 font-bold">
                          <div className="flex flex-col">
                            name
                            <span className="text-[10px] text-gray-400 lowercase mt-0.5">VARCHAR(50)</span>
                          </div>
                        </th>
                        <th className={`px-5 py-3 border-b dark:border-gray-700 font-bold transition-colors ${activeMutation === 'modify' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10' : ''}`}>
                          <div className="flex flex-col">
                            salary
                            <span className="text-[10px] lowercase mt-0.5 opacity-60">
                              {activeMutation === 'modify' ? 'BIGINT' : 'INT'}
                            </span>
                          </div>
                        </th>
                        {activeMutation === 'add' && (
                          <th className="px-5 py-3 border-b dark:border-gray-700 font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/10">
                            <div className="flex flex-col">
                              department
                              <span className="text-[10px] lowercase mt-0.5 opacity-60">VARCHAR(30)</span>
                            </div>
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {getEmployeesData().map(emp => (
                        <tr key={emp.emp_id} className="border-b dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                          <td className="px-5 py-3">{emp.emp_id}</td>
                          <td className="px-5 py-3 font-medium">{emp.name}</td>
                          <td className={`px-5 py-3 font-mono ${activeMutation === 'modify' ? 'bg-blue-50/50 dark:bg-blue-900/5' : ''}`}>
                            {emp.salary}
                          </td>
                          {activeMutation === 'add' && (
                            <td className="px-5 py-3 font-mono text-gray-400 italic bg-green-50/50 dark:bg-green-900/5">
                              {emp.department}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Console Output Simulator */}
              <div className="mt-4 bg-black rounded-lg border border-gray-800 p-3 font-mono text-xs w-full">
                <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2 flex items-center justify-between">
                  <span>Server Response</span>
                  <span className="animate-pulse h-2 w-2 bg-green-500 rounded-full"></span>
                </div>
                {getEmulatorState().output.split('\n').map((line, i) => (
                  <div key={i} className={`mb-1 ${i === 0 ? 'text-green-400' : 'text-gray-400'} animate-fade-in`}>
                    {line}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SQL Alter Operations (Detailed) */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4 mb-8">
          Detailed Operations
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">

          {/* Add Column */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2">3️⃣</span> Add a New Column
            </h3>
            <p className="font-bold text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wider mb-2">📌 Syntax</p>
            <CodeSnippetBlock codeSnippet={`ALTER TABLE table_name\nADD column_name datatype;`} />

            <p className="font-bold text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wider mt-4 mt-2">Example: Add Department</p>
            <CodeSnippetBlock codeSnippet={`ALTER TABLE Employees\nADD department VARCHAR(30);`} />

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400 mt-6">
              <h4 className="font-bold flex items-center text-blue-800 dark:text-blue-300 mb-2">
                <Lightbulb className="w-5 h-5 mr-2" /> Developer Tip
              </h4>
              <p className="text-gray-700 dark:text-gray-300 font-medium">New columns get NULL unless DEFAULT is specified. Better practice:</p>
              <code className="bg-white dark:bg-gray-800 px-2 py-1 mt-2 rounded block font-mono text-xs w-fit shadow-sm border border-gray-100 dark:border-gray-700">
                ALTER TABLE Employees<br />ADD department VARCHAR(30) DEFAULT 'General';
              </code>
            </div>
          </div>

          {/* Modify Column */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2">4️⃣</span> Modify a Column
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Used to change datatype or size. <span className="text-red-500 font-bold ml-1">⚠ Syntax differs slightly between databases.</span></p>

            <div className="space-y-4">
              <div>
                <p className="font-bold text-blue-600 dark:text-blue-400 text-sm mb-1">MySQL Version</p>
                <CodeSnippetBlock codeSnippet={`ALTER TABLE Employees\nMODIFY salary BIGINT;`} />
              </div>
              <div>
                <p className="font-bold text-indigo-600 dark:text-indigo-400 text-sm mb-1">SQL Server Version</p>
                <CodeSnippetBlock codeSnippet={`ALTER TABLE Employees\nALTER COLUMN salary BIGINT;`} />
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/30 mt-4 flex items-start">
              <Activity className="w-5 h-5 mr-3 text-indigo-500 shrink-0 mt-0.5" />
              <p className="text-gray-700 dark:text-gray-300 text-sm"><span className="font-bold block mb-1">💡 Real-World Scenario:</span> If company grows and salary exceeds INT range (2.1 Billion), you must upgrade datatype to BIGINT to avoid total database failure on inserts.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Drop and Rename Columns */}
          <div className="space-y-8">
            {/* Drop Column */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">5️⃣</span> Drop a Column
              </h3>
              <CodeSnippetBlock codeSnippet={`ALTER TABLE Employees\nDROP COLUMN department;`} />

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border-l-4 border-red-500">
                <h4 className="font-bold flex items-center text-red-800 dark:text-red-300 mb-2">
                  <AlertTriangle className="w-5 h-5 mr-2" /> Dangerous Operation!
                </h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Data will be permanently deleted.</li>
                  <li>Always backup before dropping!</li>
                </ul>
              </div>
            </div>

            {/* Rename Column */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-400"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">6️⃣</span> Rename a Column
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-cyan-600 dark:text-cyan-400 text-sm mb-2">MySQL</p>
                  <code className="block bg-gray-50 dark:bg-gray-900 p-2 rounded text-xs overflow-x-auto text-cyan-700 border border-gray-200 dark:border-gray-700">
                    ALTER TABLE Employees<br />CHANGE name full_name VARCHAR(100);
                  </code>
                </div>
                <div>
                  <p className="font-bold text-purple-600 dark:text-purple-400 text-sm mb-2">SQL Server</p>
                  <code className="block bg-gray-50 dark:bg-gray-900 p-2 rounded text-xs overflow-x-auto text-purple-700 border border-gray-200 dark:border-gray-700">
                    EXEC sp_rename 'Employees.name',<br />'full_name', 'COLUMN';
                  </code>
                </div>
              </div>

              {/* 8 Rename Table - bundled here for UI flow */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="mr-2">8️⃣</span> Rename Table
                </h3>
                <code className="block bg-gray-50 dark:bg-gray-900 p-3 rounded font-bold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                  ALTER TABLE Employees<br />RENAME TO Staff;
                </code>
              </div>
            </div>
          </div>

          {/* Add Constraints */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden h-full">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="mr-2">7️⃣</span> Add Constraints
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex items-center font-bold italic"><ShieldCheck className="w-5 h-5 mr-2 text-purple-500" /> Very important for data integrity.</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-purple-700 dark:text-purple-400 text-sm mb-2 uppercase flex items-center"><Key className="w-4 h-4 mr-2" /> Add PRIMARY KEY</h4>
                <CodeSnippetBlock codeSnippet={`ALTER TABLE Employees\nADD PRIMARY KEY (emp_id);`} />
              </div>

              <div>
                <h4 className="font-bold text-purple-700 dark:text-purple-400 text-sm mb-2 uppercase flex items-center"><Key className="w-4 h-4 mr-2 opacity-50" /> Add FOREIGN KEY</h4>
                <CodeSnippetBlock codeSnippet={`ALTER TABLE Employees\nADD CONSTRAINT fk_dept\nFOREIGN KEY (dept_id)\nREFERENCES Departments(dept_id);`} />
              </div>

              <div>
                <h4 className="font-bold text-purple-700 dark:text-purple-400 text-sm mb-2 uppercase flex items-center"><ShieldCheck className="w-4 h-4 mr-2" /> Add NOT NULL</h4>
                <CodeSnippetBlock codeSnippet={`ALTER TABLE Employees\nMODIFY name VARCHAR(50) NOT NULL;`} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Advanced Concept, Mistakes & Best Practices */}
      <section className="max-w-6xl mx-auto mb-16 space-y-8">

        {/* Real World Production Example */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800/30">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6 flex items-center">
            <MonitorSmartphone className="w-6 h-6 mr-3" />
            9️⃣ Real-World Production Example: E-Commerce Evolution
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase px-2 py-1 rounded block w-fit mb-3">Initially (v1.0)</span>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Orders (\n    order_id INT,\n    total_amount INT\n);`} />
            </div>

            <div className="flex flex-col h-full">
              <div className="flex flex-col items-center justify-center my-2 text-blue-500">
                <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
              </div>
              <div className="bg-blue-600 dark:bg-blue-800 border border-blue-500 p-5 rounded-lg flex-grow shadow-lg text-white">
                <span className="bg-blue-800 text-blue-100 text-xs font-bold uppercase px-2 py-1 rounded block w-fit mb-3">Later Business Needs (v2.0)</span>
                <p className="mb-4 text-sm text-blue-100 leading-relaxed font-bold italic">"We need to track discounts, payment statuses, and the exact order dates ASAP."</p>
                <code className="bg-blue-900/50 p-3 rounded block font-mono text-sm border border-blue-400/30 text-blue-50">
                  ALTER TABLE Orders<br />
                  ADD discount DECIMAL(5,2),<br />
                  ADD payment_status VARCHAR(20),<br />
                  ADD order_date DATE;
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* 10 Common Mistakes Beginners Make */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            🔟 Common Mistakes Beginners Make
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 flex flex-col h-full">
              <h3 className="font-bold text-red-800 dark:text-red-400 mb-3 flex items-center">
                ❌ 1. Forgetting Data Backup
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">Always backup (<DatabaseBackup className="w-4 h-4 inline" />) before:</p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm font-bold flex-grow">
                <li>DROP COLUMN</li>
                <li>MODIFY datatype</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 flex flex-col h-full">
              <h3 className="font-bold text-red-800 dark:text-red-400 mb-3 flex items-center">
                ❌ 2. Unsafe Datatype Changes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Changing without checking data:</p>
              <code className="bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs font-mono block mb-2 w-fit">MODIFY salary INT;</code>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-bold mt-auto flex items-center">If salary contained decimal values <ArrowRight className="w-3 h-3 mx-1" /> <span className="text-red-600 dark:text-red-400">data loss.</span></p>
            </div>

            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 flex flex-col h-full">
              <h3 className="font-bold text-red-800 dark:text-red-400 mb-3 flex items-center">
                ❌ 3. NOT NULL w/o Default
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">If table already contains NULL values, this throws an error. Correct approach:</p>
              <ol className="list-decimal pl-5 text-gray-600 dark:text-gray-400 text-xs font-mono mt-auto space-y-1">
                <li><b className="text-green-600 dark:text-green-400 font-sans">UPDATE</b> ... SET col = 'General' WHERE col IS NULL;</li>
                <li><b className="text-blue-600 dark:text-blue-400 font-sans">ALTER TABLE</b> ... MODIFY col NOT NULL;</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Performance & DDL vs DML */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-2xl border border-amber-200 dark:border-amber-800/30 h-full">
            <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-300 mb-4 flex items-center">
              <Gauge className="w-6 h-6 mr-3" />
              ⚡ Performance Considerations <span className="text-sm font-normal ml-2 opacity-80">(15+ Yrs Exp)</span>
            </h2>
            <ul className="space-y-4 text-gray-800 dark:text-gray-300 font-medium list-disc pl-5">
              <li><code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded text-amber-800 dark:text-amber-200">ALTER TABLE</code> on large tables can completely lock the table.</li>
              <li>In production, schedule during low traffic hours.</li>
              <li>On large datasets (millions of rows), altering datatypes may take minutes/hours.</li>
              <li className="font-bold text-amber-700 dark:text-amber-400">Always test on a staging server first!</li>
            </ul>

            <div className="mt-8 pt-6 border-t border-amber-200 dark:border-amber-800">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3 flex items-center">🧠 How Big Companies Handle This</h3>
              <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">Large companies never run manual ALTERs. They use:</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Migration tools (Flyway, Liquibase)', 'Version control', 'Rollback scripts', 'Gradual deployments'].map((t, i) => (
                  <span key={i} className="bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-700 px-3 py-1.5 rounded-full text-xs font-bold text-amber-800 dark:text-amber-300 break-words">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-2xl shadow-lg border-2 border-rose-300 dark:border-rose-700/50 flex flex-col h-full transform hover:shadow-2xl hover:scale-[1.01] transition-all">
            <div className="bg-rose-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full w-fit mb-4">Core Architecture</div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 flex items-center tracking-tight">
              <BookOpen className="w-8 h-8 mr-3 text-rose-500" />
              DDL vs DML
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-lg leading-relaxed">
              Explain this concept clearly: <code className="bg-white dark:bg-gray-800 font-bold px-1 rounded text-rose-600 dark:text-rose-400 not-italic">ALTER</code> is DDL — it changes the foundation, not the content.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 flex-grow shadow-inner">
              <table className="w-full text-left text-base text-gray-700 dark:text-gray-300">
                <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  <tr>
                    <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-600">Type</th>
                    <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-600">Commands</th>
                    <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-600">Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-rose-50/50 dark:hover:bg-rose-900/10">
                    <td className="px-6 py-5 font-bold text-rose-600 dark:text-rose-400 text-xl">DDL</td>
                    <td className="px-6 py-5 font-mono text-sm tracking-wide">
                      <span className="bg-rose-100 dark:bg-rose-900/50 px-2 py-0.5 rounded text-rose-800 dark:text-rose-200 mr-1">ALTER</span>
                      CREATE, DROP
                    </td>
                    <td className="px-6 py-5 italic text-gray-500">Structure / Schema</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                    <td className="px-6 py-5 font-bold text-blue-600 dark:text-blue-400 text-xl">DML</td>
                    <td className="px-6 py-5 font-mono text-sm tracking-wide">
                      SELECT, INSERT,<br />UPDATE, DELETE
                    </td>
                    <td className="px-6 py-5 italic text-gray-500">Data / Records</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

// Replaced manual AppWindow svg with a safer native import.
export default SqlAlterTable;