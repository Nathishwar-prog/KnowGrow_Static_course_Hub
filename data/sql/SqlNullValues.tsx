import React, { useState } from 'react';
import {
  Terminal, Copy, Check, Database, Zap, ArrowRight, Table2,
  RefreshCcw, AlertTriangle, Lightbulb, CheckCircle2,
  XCircle, BrainCircuit, GraduationCap, Server, Code, ShieldAlert,
  Users, Activity, Target, TrendingUp, Info, FileQuestion
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

const SqlNullValues: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-gray-900 dark:to-slate-900/40 min-h-screen font-sans">

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-slate-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-slate-600 to-indigo-600 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <FileQuestion className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-indigo-600">NULL</span> VALUES
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The concept of <strong className="text-indigo-600 dark:text-indigo-400">Nothingness</strong>. Dive deep into how SQL handles missing, unknown, or undefined data.
        </p>
      </header>

      {/* Intro Definition Section */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/10 rounded-bl-full -z-10"></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-7 h-7 mr-3 text-slate-500" /> What are NULL Values?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 text-lg">
            A NULL value in SQL represents missing, unknown, or undefined data. It literally means <strong className="text-indigo-600 dark:text-indigo-400">no value</strong> is stored in that field.
          </p>
          <div className="mt-auto bg-amber-50 dark:bg-amber-900/20 p-5 rounded-2xl border border-amber-200 dark:border-amber-800/30 flex items-start">
            <AlertTriangle className="w-6 h-6 mr-3 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 dark:text-amber-400 mb-1">Important Distinction</p>
              <p className="text-sm text-amber-800 dark:text-amber-300">
                NULL is <strong>NOT</strong> the same as a <code className="bg-amber-100 dark:bg-amber-900/50 px-1 rounded text-amber-900 dark:text-amber-500 font-mono">0</code> (zero) or an empty string <code className="bg-amber-100 dark:bg-amber-900/50 px-1 rounded text-amber-900 dark:text-amber-500 font-mono">''</code>.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-8 rounded-3xl shadow-lg border border-slate-700 flex flex-col justify-center text-white relative">
          <h2 className="text-2xl font-bold flex items-center text-white mb-6">
            <Target className="w-7 h-7 mr-3 text-indigo-400" /> Why do they exist?
          </h2>
          <p className="text-indigo-200 font-medium mb-6">
            In real-world databases, instead of inserting fake or wrong data when information is missing, SQL gracefully stores NULL.
          </p>

          <div className="space-y-4 font-medium text-sm">
            <div className="flex items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
              <Users className="w-5 h-5 mr-3 text-emerald-400" /> Customer may not provide a phone number.
            </div>
            <div className="flex items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
              <Activity className="w-5 h-5 mr-3 text-amber-400" /> Employee bonus may not be assigned yet.
            </div>
            <div className="flex items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
              <RefreshCcw className="w-5 h-5 mr-3 text-blue-400" /> Product delivery date may be unknown.
            </div>
            <div className="flex items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
              <Terminal className="w-5 h-5 mr-3 text-purple-400" /> New user may not have a login history.
            </div>
          </div>
        </div>
      </section>

      {/* Understanding NULL Table Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Database className="w-6 h-6 mr-3 text-indigo-500" /> 2️⃣ Understanding NULL with Examples
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <DataTable
              headers={['Value', 'Meaning']}
              rows={[
                [<span className="text-rose-500 font-bold font-mono">NULL</span>, 'No value / unknown'],
                [<span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">0</span>, 'Numeric value'],
                [<span className="font-mono text-blue-600 dark:text-blue-400 font-bold">''</span>, 'Empty string'],
                [<span className="font-mono text-blue-600 dark:text-blue-400 font-bold">' '</span>, 'Space character'],
              ]}
            />
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
              <h3 className="font-bold text-indigo-900 dark:text-indigo-400 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" /> Practical Analogy
              </h3>
              <ul className="space-y-4 text-indigo-800 dark:text-indigo-300 font-medium">
                <li className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-xl border border-indigo-200 dark:border-gray-700">
                  <span>Salary unknown</span> <ArrowRight className="w-4 h-4 mx-2 text-indigo-400" /> <code className="text-rose-500 font-bold">NULL</code>
                </li>
                <li className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-xl border border-indigo-200 dark:border-gray-700">
                  <span>Salary zero</span> <ArrowRight className="w-4 h-4 mx-2 text-indigo-400" /> <code className="text-emerald-500 font-bold">0</code>
                </li>
              </ul>
              <p className="mt-4 text-sm font-bold text-center text-indigo-900 dark:text-indigo-400">These are completely different things.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Example Context */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
          <Table2 className="w-8 h-8 mr-3 text-emerald-500" /> 🧪 Practical Example
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
              Insert Sample Data
            </h3>
            <CodeSnippetBlock
              title="Mock Data Insert"
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
          <p className="text-center font-medium text-gray-600 dark:text-gray-400">Here, Divya and Meena have <span className="text-rose-500 font-bold font-mono">NULL</span> bonuses.</p>
        </div>
      </section>

      {/* Problems with NULL */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-900/10 p-8 rounded-3xl shadow-sm border border-rose-200 dark:border-rose-900/30">
          <h2 className="text-2xl font-bold flex items-center text-rose-900 dark:text-rose-400 mb-6">
            <AlertTriangle className="w-7 h-7 mr-3 text-rose-500" /> 4️⃣ Problems with NULL Values
          </h2>
          <p className="text-rose-800 dark:text-rose-300 font-medium mb-6">
            NULL behaves differently in SQL operations. Let's see what happens when we try to do math with NULL.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <CodeSnippetBlock codeSnippet={`SELECT Salary + Bonus \nFROM Employees;`} title="Bad Query" />
              <div className="mt-auto bg-white dark:bg-gray-800 border border-rose-200 dark:border-gray-700 p-6 rounded-2xl flex items-center justify-center shadow-inner">
                <p className="font-bold text-xl text-rose-600 dark:text-rose-400 text-center uppercase tracking-wide">
                  Any calculation with NULL returns NULL!
                </p>
              </div>
            </div>

            <div>
              <DataTable
                headers={['Salary', 'Bonus', 'Result']}
                rows={[
                  ['50000', '5000', '55000'],
                  ['60000', <span className="text-rose-400">NULL</span>, <span className="text-rose-600 font-bold bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded">NULL</span>],
                  ['45000', '2000', '47000'],
                  ['70000', <span className="text-rose-400">NULL</span>, <span className="text-rose-600 font-bold bg-rose-100 dark:bg-rose-900/30 px-2 py-0.5 rounded">NULL</span>],
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Checking NULL / NOT NULL & Handling NULL Grid */}
      <section className="max-w-5xl mx-auto mb-16 space-y-8">

        <div className="grid lg:grid-cols-2 gap-8">
          {/* IS NULL Check */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-indigo-500 transition-colors flex flex-col">
            <div className="bg-indigo-50 dark:bg-gray-900/50 p-6 border-b border-indigo-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <span className="bg-indigo-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md">5</span>
                Checking IS NULL
              </h3>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">SQL uses special operators to check for NULL values.</p>
              <CodeSnippetBlock title="Syntax" codeSnippet={`SELECT column_name\nFROM table_name\nWHERE column_name IS NULL;`} />
              <CodeSnippetBlock title="Find employees with NULL bonus" codeSnippet={`SELECT *\nFROM Employees\nWHERE Bonus IS NULL;`} />
              <div className="mt-auto pt-4">
                <DataTable
                  headers={['EmpID', 'Name', 'Salary', 'Bonus']}
                  rows={[
                    ['2', 'Divya', '60000', <span className="text-rose-500 font-bold">NULL</span>],
                    ['4', 'Meena', '70000', <span className="text-rose-500 font-bold">NULL</span>],
                  ]}
                />
              </div>
            </div>
          </div>

          {/* IS NOT NULL Check */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-emerald-500 transition-colors flex flex-col">
            <div className="bg-emerald-50 dark:bg-gray-900/50 p-6 border-b border-emerald-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <span className="bg-emerald-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md">6</span>
                Checking IS NOT NULL
              </h3>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 opacity-0">Spacer</p> {/* Alignment spacer */}
              <CodeSnippetBlock title="Syntax" codeSnippet={`SELECT column_name\nFROM table_name\nWHERE column_name IS NOT NULL;`} />
              <CodeSnippetBlock title="Find employees with a valid bonus" codeSnippet={`SELECT *\nFROM Employees\nWHERE Bonus IS NOT NULL;`} />
              <div className="mt-auto pt-4">
                <DataTable
                  headers={['EmpID', 'Name', 'Salary', 'Bonus']}
                  rows={[
                    ['1', 'Arun', '50000', '5000'],
                    ['3', 'Kiran', '45000', '2000'],
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Handling NULL correctly */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-3xl p-8 shadow-sm border border-blue-200 dark:border-blue-900/30 group">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <ShieldAlert className="w-7 h-7 mr-3 text-blue-500" /> 8️⃣ Handling NULL Values
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-6">
            To avoid calculation problems, SQL provides functions (like <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm text-blue-600 dark:text-blue-400">IFNULL</code>).
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col space-y-4">
              <div className="bg-white dark:bg-gray-800 border-l-4 border-blue-500 p-4 rounded-r-xl shadow-sm">
                <p className="font-bold text-gray-900 dark:text-white mb-1">If Bonus is NULL → treat it as 0.</p>
              </div>
              <CodeSnippetBlock codeSnippet={`SELECT Salary + IFNULL(Bonus, 0) AS Total\nFROM Employees;`} title="Safe Query" />
            </div>
            <div>
              <DataTable
                headers={['Salary', 'Bonus', 'Total']}
                rows={[
                  ['50000', '5000', '55000'],
                  ['60000', <span className="text-rose-400">NULL</span>, <span className="text-emerald-600 font-bold dark:text-emerald-400">60000</span>],
                  ['45000', '2000', '47000'],
                  ['70000', <span className="text-rose-400">NULL</span>, <span className="text-emerald-600 font-bold dark:text-emerald-400">70000</span>],
                ]}
              />
            </div>
          </div>
        </div>

      </section>

      {/* Common Mistakes */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-amber-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <XCircle className="w-7 h-7 mr-3 text-rose-500" /> 7️⃣ Common Mistake with NULL
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">Beginners often write comparative operators (= or &lt;&gt;) against NULL. These queries will <strong>NOT</strong> work correctly.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-2xl border border-rose-200 dark:border-rose-800/30">
              <h3 className="font-bold text-rose-900 dark:text-rose-400 mb-4 tracking-wider uppercase text-sm border-b border-rose-200 dark:border-rose-800/50 pb-2">The Wrong Way</h3>
              <div className="space-y-4 font-mono text-sm text-gray-500">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-rose-200 dark:border-gray-700 flex items-center">
                  <span className="text-rose-500 font-bold mr-3">❌</span>
                  <code>WHERE Bonus = NULL</code>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-rose-200 dark:border-gray-700 flex items-center">
                  <span className="text-rose-500 font-bold mr-3">❌</span>
                  <code>WHERE Bonus &lt;&gt; NULL</code>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/30 ring-2 ring-emerald-500/20 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
              <h3 className="font-bold text-emerald-900 dark:text-emerald-400 mb-4 tracking-wider uppercase text-sm border-b border-emerald-200 dark:border-emerald-800/50 pb-2">The Correct Way</h3>
              <div className="space-y-4 font-mono text-sm text-gray-500">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-emerald-200 dark:border-gray-700 flex items-center shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                  <code className="text-emerald-700 dark:text-emerald-400 font-bold">WHERE Bonus IS NULL</code>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-emerald-200 dark:border-gray-700 flex items-center shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                  <code className="text-emerald-700 dark:text-emerald-400 font-bold">WHERE Bonus IS NOT NULL</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Database Design & Three-Valued Logic */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* DB Design */}
        <div className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800 relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Server className="w-7 h-7 mr-3 text-purple-400" /> 9️⃣ NULL in DB Design
          </h2>
          <p className="text-gray-400 font-medium text-sm mb-6 relative z-10">
            Sometimes NULL values are allowed, sometimes they should not be. Let's look at a schema design.
          </p>
          <div className="relative z-10 space-y-4">
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Donors (\n    DonorID INT PRIMARY KEY,\n    Name VARCHAR(100) NOT NULL,\n    BloodGroup VARCHAR(5) NOT NULL,\n    Phone VARCHAR(15),\n    LastDonationDate DATE\n);`} title="Table Design" />

            <div className="bg-black/50 border border-gray-700 rounded-xl p-4">
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between items-center text-gray-300"><span className="font-mono text-xs">DonorID, Name, BloodGroup</span> <XCircle className="w-4 h-4 text-rose-500" title="Not Allowed" /></li>
                <li className="flex justify-between items-center text-gray-300"><span className="font-mono text-xs">Phone, LastDonationDate</span> <CheckCircle2 className="w-4 h-4 text-emerald-500" title="Allowed" /></li>
              </ul>
            </div>
            <p className="text-xs text-purple-400 text-center uppercase tracking-wider font-bold">Because some donors may not have donated yet.</p>
          </div>
        </div>

        {/* Three Valued Logic */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-colors flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <BrainCircuit className="w-7 h-7 mr-3 text-indigo-500" /> 🔎 Three-Valued Logic
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">
            SQL does NOT use only <code>TRUE</code> or <code>FALSE</code>. It uses three logic states!
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 font-black text-emerald-600 dark:text-emerald-400 shadow-sm">TRUE</div>
            <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-2xl border border-rose-100 dark:border-rose-900/30 font-black text-rose-600 dark:text-rose-400 shadow-sm">FALSE</div>
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 font-black text-indigo-600 dark:text-indigo-400 shadow-sm relative overflow-hidden">
              UNKNOWN<br /><span className="text-[10px] font-medium text-indigo-400">(NULL comparisons)</span>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 mt-auto">
            <CodeSnippetBlock codeSnippet={`WHERE Bonus > 1000`} />
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center">
              <ArrowRight className="w-4 h-4 mx-2 text-indigo-400 shrink-0" /> If Bonus = NULL → result is <strong className="mx-1 text-indigo-500">UNKNOWN</strong>, not TRUE or FALSE.
            </p>
          </div>
        </div>

      </section>

      {/* Developer Wisdom & Interview Card */}
      <section className="max-w-5xl mx-auto mb-16 grid md:grid-cols-2 gap-8">

        {/* Developer Tips */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <GraduationCap className="w-8 h-8 mr-3 text-blue-500" />
            <div>
              <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 mt-1">15+ Years Experience</span>
              Professional Tips
            </div>
          </h2>
          <div className="space-y-4">
            <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-2xl border border-rose-100 dark:border-rose-900/30">
              <h4 className="font-bold text-rose-900 dark:text-rose-400 mb-2 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2" /> Use NOT NULL for critical fields</h4>
              <p className="text-sm text-rose-800 dark:text-rose-300 font-medium">e.g. UserID, Email, Username, Primary Keys.</p>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-400 mb-2 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2" /> Allow NULL for optional data</h4>
              <p className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">e.g. MiddleName, Secondary phone, Last login date.</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-2xl border border-blue-100 dark:border-blue-900/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-2 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2" /> Handle NULL in reports</h4>
              <code className="block text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 mb-2 shadow-sm">
                SELECT Name, COALESCE(Bonus,0) FROM Employees;
              </code>
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400">Makes reports clean and understandable.</p>
            </div>
          </div>
        </div>

        {/* Interview Box at bottom */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-1 relative overflow-hidden shadow-2xl transition-transform hover:-translate-y-1">
          <div className="bg-gray-900 rounded-[22px] p-8 flex flex-col h-full relative z-10 w-full">
            <div className="inline-block bg-pink-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest self-start mb-4 shadow-lg shadow-pink-500/50">
              Common Interview Question
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">What is the difference between NULL and 0?</h3>
            <div className="mt-auto">
              <div className="bg-black/50 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-white/5 text-gray-300 font-bold border-b border-white/10">
                    <tr>
                      <th className="px-4 py-3"><span className="text-rose-400">NULL</span></th>
                      <th className="px-4 py-3"><span className="text-emerald-400">0</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-gray-400">
                    <tr>
                      <td className="px-4 py-3 font-medium">No value</td>
                      <td className="px-4 py-3 font-medium text-gray-300">Numeric value</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-rose-300/80">Unknown</td>
                      <td className="px-4 py-3 font-medium text-emerald-300/80">Known</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-xs">Cannot be compared with =</td>
                      <td className="px-4 py-3 font-medium text-xs">Can be compared</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default SqlNullValues;