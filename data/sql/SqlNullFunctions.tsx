import React, { useState } from 'react';
import {
  Terminal, Copy, Check, Database, Zap, ArrowRight, Table2,
  RefreshCcw, AlertTriangle, Lightbulb, CheckCircle2,
  XCircle, BrainCircuit, GraduationCap, Server, Code, ShieldAlert,
  Users, Activity, Target, TrendingUp, Info
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
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-purple-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const DataTable = ({ headers, rows }: { headers: string[], rows: any[][] }) => (
  <div className="w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 font-medium border-b border-gray-200 dark:border-gray-700">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-3 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900/50">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-3 font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SqlNullFunctions: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950/20 min-h-screen font-sans">

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <Database className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">NULL FUNCTIONS</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Master the art of handling missing data. Replace, check, and control <code className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-blue-600 dark:text-blue-400">NULL</code> values to ensure perfect calculations and accurate reports.
        </p>
      </header>

      {/* Intro & Why Important Section */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10"></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-7 h-7 mr-3 text-blue-500" /> What are NULL Functions?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 text-lg">
            SQL NULL functions are used to handle or replace NULL values in a database. Since NULL means "no value", performing calculations or comparisons with NULL often produces unexpected results.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl border border-blue-200 dark:border-blue-800/30">
            <p className="font-bold text-blue-800 dark:text-blue-300 mb-3">To solve this, SQL provides functions that:</p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700 dark:text-gray-300"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-500" /> Replace NULL values</li>
              <li className="flex items-center text-gray-700 dark:text-gray-300"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-500" /> Check for NULL values</li>
              <li className="flex items-center text-gray-700 dark:text-gray-300"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-500" /> Return alternative values</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-indigo-950 p-8 rounded-3xl shadow-lg border border-indigo-800 flex flex-col justify-center text-white relative">
          <h2 className="text-2xl font-bold flex items-center text-white mb-6">
            <AlertTriangle className="w-7 h-7 mr-3 text-amber-400" /> Why Are They Important?
          </h2>
          <p className="text-indigo-200 font-medium mb-6">
            In real-world databases, data is rarely perfect. Missing data represents unknown states, not zeros.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
              <Users className="w-5 h-5 mb-2 text-rose-400" />
              <span className="text-sm font-medium">Customers without phone numbers</span>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
              <Activity className="w-5 h-5 mb-2 text-emerald-400" />
              <span className="text-sm font-medium">Unknown salaries or bonuses</span>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
              <Target className="w-5 h-5 mb-2 text-blue-400" />
              <span className="text-sm font-medium">Missing addresses</span>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
              <Server className="w-5 h-5 mb-2 text-purple-400" />
              <span className="text-sm font-medium">Last login doesn't exist</span>
            </div>
          </div>

          <div className="bg-rose-500/20 border border-rose-500/30 p-4 rounded-xl">
            <p className="text-sm font-bold text-rose-300 mb-2 flex items-center">
              <XCircle className="w-4 h-4 mr-2" /> If NOT handled correctly:
            </p>
            <p className="text-xs text-rose-200">Calculations fail • Reports become inaccurate • Queries return incorrect results</p>
          </div>
        </div>
      </section>

      {/* Common SQL NULL Functions Table */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Database className="w-6 h-6 mr-3 text-indigo-500" /> 3️⃣ Common SQL NULL Functions
          </h2>
          <DataTable
            headers={['Function', 'Purpose']}
            rows={[
              ['IFNULL()', 'Replace NULL with another value'],
              ['ISNULL()', 'Replace NULL (SQL Server specific)'],
              ['COALESCE()', 'Return first non-NULL value (Most Powerful)'],
              ['NULLIF()', 'Return NULL if two values are equal'],
            ]}
          />
          <div className="flex items-center text-sm font-medium text-gray-500 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
            <Info className="w-4 h-4 mr-2 text-indigo-400" /> Note: Different database systems (MySQL, SQL Server, Oracle, PostgreSQL) support valid overlapping functions.
          </div>
        </div>
      </section>

      {/* Demo Table Setup */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
          <Table2 className="w-8 h-8 mr-3 text-emerald-500" /> 🧪 Sample Table for Demonstration
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400 px-2 py-1 rounded text-sm mr-3">Step 1</span>
              Create Table
            </h3>
            <CodeSnippetBlock
              title="Employees Schema"
              codeSnippet={`CREATE TABLE Employees (\n    EmpID INT,\n    Name VARCHAR(50),\n    Salary INT,\n    Bonus INT\n);`}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400 px-2 py-1 rounded text-sm mr-3">Step 2</span>
              Insert Data
            </h3>
            <CodeSnippetBlock
              title="Employee Data"
              codeSnippet={`INSERT INTO Employees VALUES\n(1, 'Arun', 50000, 5000),\n(2, 'Divya', 60000, NULL),\n(3, 'Kiran', 45000, 2000),\n(4, 'Meena', 70000, NULL);`}
            />
          </div>
        </div>

        <div className="mb-4 bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            📊 Table Visualization
          </h3>
          <DataTable
            headers={['EmpID', 'Name', 'Salary', 'Bonus']}
            rows={[
              ['1', 'Arun', '50000', '5000'],
              ['2', 'Divya', '60000', <span className="text-rose-500 font-bold font-mono">NULL</span>],
              ['3', 'Kiran', '45000', '2000'],
              ['4', 'Meena', '70000', <span className="text-rose-500 font-bold font-mono">NULL</span>],
            ]}
          />
          <p className="text-center font-medium text-gray-600 dark:text-gray-400">Notice that some Bonus values are <span className="text-rose-500 font-bold font-mono">NULL</span>.</p>
        </div>
      </section>

      {/* Functions Detail Sections */}
      <section className="max-w-5xl mx-auto space-y-12 mb-16">

        {/* IFNULL */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-blue-500 transition-colors">
          <div className="bg-blue-50 dark:bg-gray-900/50 p-6 border-b border-gray-200 dark:border-gray-700 flex items-center gap-4">
            <span className="bg-blue-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-md">4</span>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white">IFNULL() Function</h3>
          </div>
          <div className="p-6 lg:p-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              <strong>Definition:</strong> <code>IFNULL()</code> replaces NULL values with a specified value.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <CodeSnippetBlock title="Syntax" codeSnippet={`SELECT IFNULL(column_name, value)\nFROM table_name;`} />
                <CodeSnippetBlock title="Example" codeSnippet={`SELECT Name, IFNULL(Bonus, 0) AS Bonus\nFROM Employees;`} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" /> Output (NULL bonuses become 0)
                </h4>
                <div className="flex-1">
                  <DataTable
                    headers={['Name', 'Bonus']}
                    rows={[
                      ['Arun', '5000'],
                      ['Divya', <span className="text-blue-500 font-bold">0</span>],
                      ['Kiran', '2000'],
                      ['Meena', <span className="text-blue-500 font-bold">0</span>],
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ISNULL */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-indigo-500 transition-colors">
          <div className="bg-indigo-50 dark:bg-gray-900/50 p-6 border-b border-gray-200 dark:border-gray-700 flex items-center gap-4">
            <span className="bg-indigo-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-md">5</span>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white">ISNULL() Function <span className="text-sm font-medium text-gray-500 ml-2">(SQL Server)</span></h3>
          </div>
          <div className="p-6 lg:p-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              <strong>Definition:</strong> <code>ISNULL()</code> replaces NULL values with a specified value. It works exactly like <code>IFNULL()</code> but in SQL Server.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <CodeSnippetBlock title="Syntax" codeSnippet={`SELECT ISNULL(column, value)\nFROM table;`} />
              <CodeSnippetBlock title="Example" codeSnippet={`SELECT Name, ISNULL(Bonus, 0) AS Bonus\nFROM Employees;`} />
            </div>
          </div>
        </div>

        {/* COALESCE */}
        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/10 dark:to-fuchsia-900/10 rounded-3xl overflow-hidden shadow-lg border border-purple-200 dark:border-purple-800/40 group relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 border-b border-purple-200 dark:border-purple-800/40 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="bg-purple-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-md shadow-purple-500/30">6</span>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">COALESCE() Function</h3>
            </div>
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center shadow-lg">
              <Zap className="w-3 h-3 mr-1" /> Most Powerful
            </span>
          </div>
          <div className="p-6 lg:p-8">
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 font-medium">
              <strong>Definition:</strong> <code>COALESCE()</code> returns the <strong className="text-purple-600 dark:text-purple-400">first non-NULL value</strong> from a list.
            </p>
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-4">
                <CodeSnippetBlock title="Syntax" codeSnippet={`SELECT COALESCE(value1, value2, value3);`} />
                <CodeSnippetBlock title="Example" codeSnippet={`SELECT Name, COALESCE(Bonus, Salary, 0) AS Result\nFROM Employees;`} />

                <div className="bg-white/80 dark:bg-gray-800 p-5 rounded-2xl border border-purple-100 dark:border-purple-900/50 shadow-sm mt-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wider">Logic Flow:</h4>
                  <ul className="space-y-2 text-sm font-medium">
                    <li className="flex items-center text-gray-700 dark:text-gray-300"><ArrowRight className="w-4 h-4 mr-2 text-purple-500" /> If Bonus exists → return <strong className="ml-1 text-purple-600 dark:text-purple-400">Bonus</strong></li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300"><ArrowRight className="w-4 h-4 mr-2 text-purple-500" /> If Bonus NULL → return <strong className="ml-1 text-purple-600 dark:text-purple-400">Salary</strong></li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300"><ArrowRight className="w-4 h-4 mr-2 text-purple-500" /> If both NULL → return <strong className="ml-1 text-purple-600 dark:text-purple-400">0</strong></li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col pt-4">
                <DataTable
                  headers={['Name', 'Result']}
                  rows={[
                    ['Arun', <span className="text-emerald-600 dark:text-emerald-400 font-bold">5000</span>],
                    ['Divya', <span className="text-blue-600 dark:text-blue-400 font-bold">60000</span>],
                    ['Kiran', <span className="text-emerald-600 dark:text-emerald-400 font-bold">2000</span>],
                    ['Meena', <span className="text-blue-600 dark:text-blue-400 font-bold">70000</span>],
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* NULLIF */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-rose-500 transition-colors">
          <div className="bg-rose-50 dark:bg-gray-900/50 p-6 border-b border-gray-200 dark:border-gray-700 flex items-center gap-4">
            <span className="bg-rose-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-md">7</span>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white">NULLIF() Function</h3>
          </div>
          <div className="p-6 lg:p-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              <strong>Definition:</strong> <code>NULLIF()</code> returns NULL if two values are equal.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <CodeSnippetBlock title="Syntax & Basic Example" codeSnippet={`SELECT NULLIF(value1, value2);\n\n-- Result: NULL\nSELECT NULLIF(100, 100);`} />
              </div>
              <div className="space-y-4">
                <CodeSnippetBlock title="Table Example" codeSnippet={`SELECT NULLIF(Bonus, 0)\nFROM Employees;`} />
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <strong className="text-rose-500">How it works:</strong> If Bonus = 0 → result becomes NULL.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Important Calculation Concept */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors"></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            🧠 Important Concept (Calculation with NULL)
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            <div className="bg-black/40 border border-gray-700 p-6 rounded-2xl flex flex-col">
              <h3 className="text-rose-400 font-bold mb-4 flex items-center"><XCircle className="w-5 h-5 mr-2" /> The Problem</h3>
              <CodeSnippetBlock codeSnippet={`SELECT Salary + Bonus\nFROM Employees;`} />
              <div className="mt-4 mb-4">
                <DataTable
                  headers={['Salary', 'Bonus', 'Result']}
                  rows={[
                    ['50000', '5000', '55000'],
                    ['60000', <span className="text-rose-400">NULL</span>, <span className="text-rose-400 font-bold">NULL</span>],
                  ]}
                />
              </div>
              <div className="mt-auto bg-rose-500/10 border border-rose-500/30 text-rose-200 p-4 rounded-xl text-center font-bold">
                Why? Any calculation with NULL = NULL
              </div>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-800/50 p-6 rounded-2xl flex flex-col">
              <h3 className="text-emerald-400 font-bold mb-4 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2" /> Correct Way Using Function</h3>
              <CodeSnippetBlock codeSnippet={`SELECT Salary + IFNULL(Bonus, 0) AS TotalIncome\nFROM Employees;`} />
              <div className="mt-4">
                <DataTable
                  headers={['Salary', 'Bonus', 'TotalIncome']}
                  rows={[
                    ['50000', '5000', '<span class="text-emerald-400 font-bold">55000</span>'],
                    ['60000', '<span class="text-gray-500">NULL</span>', '<span class="text-emerald-400 font-bold">60000</span>'],
                    ['45000', '2000', '<span class="text-emerald-400 font-bold">47000</span>'],
                    ['70000', '<span class="text-gray-500">NULL</span>', '<span class="text-emerald-400 font-bold">70000</span>'],
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real World Scenario */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-900/10 p-8 flex flex-col md:flex-row items-center gap-8 rounded-3xl shadow-sm border border-rose-200 dark:border-rose-900/30 overflow-hidden relative">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl -z-10"></div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold flex items-center text-rose-900 dark:text-rose-400 mb-4">
              <HeartPulseIcon className="w-8 h-8 mr-3 text-rose-500" /> 🧩 Real-World Example
            </h2>
            <p className="text-rose-800 dark:text-rose-300 font-medium mb-2 text-lg">
              In your <strong>LifeLink AI</strong> blood bank system:
            </p>
            <p className="text-rose-700 dark:text-rose-400 text-sm mb-6">
              If a donor never donated, their last donation date might be NULL. Instead of failing dashboards or showing blanks, use <code>COALESCE</code>.
            </p>
            <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl border border-rose-200 dark:border-rose-900/50">
              <p className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-2">Benefit</p>
              <p className="text-rose-900 dark:text-rose-200 font-medium text-sm">
                This improves data presentation in dashboards!
              </p>
            </div>
          </div>

          <div className="flex-1 w-full">
            <CodeSnippetBlock codeSnippet={`SELECT \n  DonorName,\n  COALESCE(LastDonationDate, 'No Record') AS LastDonation\nFROM Donors;`} />
          </div>
        </div>
      </section>

      {/* Developer Advice && Common Mistakes */}
      <section className="max-w-5xl mx-auto mb-16 grid md:grid-cols-2 gap-8">

        {/* Developer Tips */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <GraduationCap className="w-8 h-8 mr-3 text-indigo-500" />
            <div>
              <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 mt-1">15+ Years Experience</span>
              Professional Tips
            </div>
          </h2>
          <div className="space-y-5">
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Use COALESCE in production</h4>
              <p className="text-sm text-indigo-800 dark:text-indigo-300 mb-2">It is Standard SQL, supported by nearly all databases, and more flexible than IFNULL.</p>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Always handle NULL in calculations</h4>
              <div className="space-y-2 mt-2 font-mono text-xs">
                <div className="flex text-rose-600 dark:text-rose-400"><XCircle className="w-4 h-4 mr-2" /> SELECT Salary + Bonus</div>
                <div className="flex text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4 mr-2" /> SELECT Salary + COALESCE(Bonus, 0)</div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-2xl border border-blue-100 dark:border-blue-900/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" /> Use in reports</h4>
              <code className="block text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 mb-2">
                SELECT Name, COALESCE(Phone, 'Not Provided') FROM Customers;
              </code>
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400">Makes reports readable.</p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-amber-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <AlertTriangle className="w-7 h-7 mr-3 text-amber-500" /> ⚠️ Common Mistakes
          </h2>

          <div className="space-y-6">
            <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-2xl border border-rose-100 dark:border-rose-900/30">
              <h3 className="font-bold text-rose-900 dark:text-rose-400 mb-3 flex items-center">
                <XCircle className="w-5 h-5 mr-2 text-rose-500" /> Mistake 1 – Unsafe Calculation
              </h3>
              <div className="flex items-center space-x-3 text-sm font-mono text-gray-500 bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <span className="text-rose-500 font-bold shrink-0">❌ Wrong:</span>
                <span>SELECT Salary + Bonus</span>
              </div>
            </div>

            <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-2xl border border-rose-100 dark:border-rose-900/30">
              <h3 className="font-bold text-rose-900 dark:text-rose-400 mb-3 flex items-center">
                <XCircle className="w-5 h-5 mr-2 text-rose-500" /> Mistake 2 – Equating to NULL
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center space-x-3 text-sm font-mono text-gray-500 bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-rose-500 font-bold shrink-0">❌ Wrong:</span>
                  <span>WHERE Bonus = NULL</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-mono text-gray-500 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800/50 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                  <span className="text-emerald-600 font-bold shrink-0 pl-1">✔ Correct:</span>
                  <span className="text-emerald-800 dark:text-emerald-300 font-bold">WHERE Bonus IS NULL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Teaching recommendation at bottom */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-1 relative overflow-hidden shadow-2xl">
          <div className="bg-gray-900 rounded-[22px] p-8 flex flex-col md:flex-row items-center gap-8 relative z-10 h-full w-full">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center md:justify-start">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-400" /> Teaching Tip for Your Course Website
              </h3>
              <p className="text-gray-400 font-medium text-sm">Teach NULL functions in this order. This builds understanding step by step from basic concepts to powerful usage.</p>
            </div>
            <div className="flex-1 w-full bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <div className="flex flex-col gap-3">
                <div className="flex items-center text-blue-300 text-sm font-medium"><span className="w-6 text-center font-bold bg-blue-500/20 rounded mr-3 py-1">1</span> IS NULL / IS NOT NULL</div>
                <div className="flex items-center text-blue-300 text-sm font-medium"><span className="w-6 text-center font-bold bg-blue-500/20 rounded mr-3 py-1">2</span> IFNULL</div>
                <div className="flex items-center text-blue-300 text-sm font-medium"><span className="w-6 text-center font-bold bg-blue-500/20 rounded mr-3 py-1">3</span> ISNULL</div>
                <div className="flex items-center text-purple-300 text-sm font-bold"><span className="w-6 text-center font-bold bg-purple-500/30 rounded mr-3 py-1 ring-1 ring-purple-400/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]">4</span> COALESCE</div>
                <div className="flex items-center text-blue-300 text-sm font-medium"><span className="w-6 text-center font-bold bg-blue-500/20 rounded mr-3 py-1">5</span> NULLIF</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

// Simple standalone icon definition
function HeartPulseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}

export default SqlNullFunctions;