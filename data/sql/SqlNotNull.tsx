import React, { useState } from 'react';
import {
  Terminal, Copy, Check, Database, Zap, ArrowRight, Table2,
  ToggleLeft, RefreshCcw, AlertTriangle, Lightbulb, CheckCircle2,
  XCircle, BrainCircuit, GraduationCap, Server, Code, ShieldAlert,
  Users, Activity, ShoppingCart, PackageX, Target, Cpu, TrendingUp
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

const SqlNotNull: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-rose-50 dark:from-gray-900 dark:to-indigo-950/20 min-h-screen font-sans">

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-indigo-600 to-rose-500 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <RefreshCcw className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500">NOT</span> OPERATOR
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The logical inverser. It completely flips the result of a condition, providing a powerful way to write exclusion logic instead of complex inclusions.
        </p>
      </header>

      {/* Intro Definition Box */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -z-10"></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <ToggleLeft className="w-7 h-7 mr-3 text-indigo-500" /> What is SQL NOT?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 text-lg">
            The SQL NOT operator is a logical operator used to reverse the result of a condition. In simple words: <strong>NOT means "opposite of the given condition"</strong>.
          </p>

          <div className="grid grid-cols-2 gap-4 text-center mt-auto">
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-2xl border border-rose-200 dark:border-rose-800/30 flex flex-col items-center">
              <span className="font-bold text-rose-600 dark:text-rose-400 mb-2">TRUE</span>
              <ArrowRight className="text-gray-400 w-5 h-5 mb-2" />
              <span className="font-black text-indigo-600 dark:text-indigo-400">FALSE</span>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-2xl border border-indigo-200 dark:border-indigo-800/30 flex flex-col items-center">
              <span className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">FALSE</span>
              <ArrowRight className="text-gray-400 w-5 h-5 mb-2" />
              <span className="font-black text-rose-600 dark:text-rose-400">TRUE</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-gray-900 p-8 rounded-3xl shadow-lg border border-indigo-800 flex flex-col justify-center text-white relative">
          <h2 className="text-2xl font-bold flex items-center text-white mb-6">
            <Target className="w-7 h-7 mr-3 text-rose-400" /> Why Do We Need NOT?
          </h2>
          <p className="text-indigo-200 font-medium mb-6">
            In real-world projects, instead of writing complex inclusion logic mapping out every possible state, NOT drastically simplifies <strong>exclusion logic</strong>. We often need:
          </p>
          <div className="space-y-4 font-medium text-sm sm:text-base">
            <div className="flex items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
              <Users className="w-5 h-5 mr-3 text-blue-400" /> Customers who are <strong>NOT</strong> active
            </div>
            <div className="flex items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
              <Activity className="w-5 h-5 mr-3 text-emerald-400" /> Employees who are <strong>NOT</strong> managers
            </div>
            <div className="flex items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
              <ShoppingCart className="w-5 h-5 mr-3 text-amber-400" /> Orders that are <strong>NOT</strong> completed
            </div>
            <div className="flex items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
              <PackageX className="w-5 h-5 mr-3 text-rose-400" /> Products that are <strong>NOT</strong> in stock
            </div>
          </div>
        </div>
      </section>

      {/* Syntax */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <Code className="w-6 h-6 mr-3 text-indigo-500" /> Basic Syntax
          </h2>
          <CodeSnippetBlock
            language="sql"
            title="SQL NOT Syntax"
            codeSnippet={`SELECT column1, column2\nFROM table_name\nWHERE NOT condition;`}
          />
        </div>
      </section>

      {/* Practical Example Context */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
          <Database className="w-8 h-8 mr-3 text-emerald-500" /> 🧪 Practical Example (Step-by-Step)
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium text-lg">Let’s create a simple table for your course website demo.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400 px-2 py-1 rounded text-sm mr-3">Step 1</span>
              Create Table
            </h3>
            <CodeSnippetBlock
              title="Students Schema"
              codeSnippet={`CREATE TABLE Students (\n    StudentID INT,\n    Name VARCHAR(50),\n    Marks INT,\n    City VARCHAR(50)\n);`}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400 px-2 py-1 rounded text-sm mr-3">Step 2</span>
              Insert Sample Data
            </h3>
            <CodeSnippetBlock
              title="Mock Data Insert"
              codeSnippet={`INSERT INTO Students VALUES\n(1, 'Arun', 85, 'Chennai'),\n(2, 'Divya', 92, 'Madurai'),\n(3, 'Kiran', 40, 'Chennai'),\n(4, 'Meena', 70, 'Coimbatore'),\n(5, 'Rahul', 35, 'Madurai');`}
            />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Table2 className="w-6 h-6 mr-2 text-indigo-500" /> 📊 Sample Data Visualization
          </h3>
          <DataTable
            headers={['StudentID', 'Name', 'Marks', 'City']}
            rows={[
              ['1', 'Arun', '85', 'Chennai'],
              ['2', 'Divya', '92', 'Madurai'],
              ['3', 'Kiran', '40', 'Chennai'],
              ['4', 'Meena', '70', 'Coimbatore'],
              ['5', 'Rahul', '35', 'Madurai'],
            ]}
          />
        </div>
      </section>

      {/* Examples Grid Section */}
      <section className="max-w-5xl mx-auto mb-16 space-y-8">

        {/* Example 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-indigo-500 transition-colors">
          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-indigo-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 shadow-md">1</span>
              Basic NOT Condition
            </h3>
            <p className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 px-4 py-2 rounded-xl text-sm font-bold flex items-center w-fit">
              ❓ Get students who did NOT score above 80
            </p>
          </div>
          <div className="p-6 lg:p-8 grid md:grid-cols-2 gap-8">
            <div>
              <CodeSnippetBlock codeSnippet={`SELECT * \nFROM Students\nWHERE NOT Marks > 80;`} />

              <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/30 mb-6">
                <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2" /> Logic Explanation
                </h4>
                <div className="space-y-3 font-medium text-sm text-blue-800 dark:text-blue-300">
                  <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-2 rounded-lg border border-blue-200 dark:border-gray-700">
                    <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">Marks &gt; 80</code>
                    <span>Arun, Divya <span className="text-emerald-500 font-bold ml-2">✔</span></span>
                  </div>
                  <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-2 rounded-lg border border-blue-200 dark:border-gray-700 ring-2 ring-indigo-500/50">
                    <code className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 px-2 py-1 rounded">NOT Marks &gt; 80</code>
                    <span>Everyone else <span className="text-indigo-500 font-bold ml-2">➜</span></span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" /> ✅ Output
              </h4>
              <DataTable
                headers={['StudentID', 'Name', 'Marks', 'City']}
                rows={[
                  ['3', 'Kiran', '40', 'Chennai'],
                  ['4', 'Meena', '70', 'Coimbatore'],
                  ['5', 'Rahul', '35', 'Madurai'],
                ]}
              />
            </div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-indigo-500 transition-colors">
          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-indigo-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 shadow-md">2</span>
              NOT with Equal
            </h3>
            <p className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 px-4 py-2 rounded-xl text-sm font-bold flex items-center w-fit">
              ❓ Get students NOT from Chennai
            </p>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-8 items-center">
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE NOT City = 'Chennai';`} />
            <DataTable
              headers={['StudentID', 'Name', 'Marks', 'City']}
              rows={[
                ['2', 'Divya', '92', 'Madurai'],
                ['4', 'Meena', '70', 'Coimbatore'],
                ['5', 'Rahul', '35', 'Madurai'],
              ]}
            />
          </div>
        </div>

        {/* Example 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-indigo-500 transition-colors">
          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-indigo-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 shadow-md">3</span>
              NOT with IN
            </h3>
            <p className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 px-4 py-2 rounded-xl text-sm font-bold flex items-center w-fit">
              ❓ Students NOT from Chennai or Madurai
            </p>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-8 items-center">
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE City NOT IN ('Chennai', 'Madurai');`} />
            <DataTable
              headers={['StudentID', 'Name', 'Marks', 'City']}
              rows={[
                ['4', 'Meena', '70', 'Coimbatore'],
              ]}
            />
          </div>
        </div>

        {/* Example 4 & 5 Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Example 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-indigo-500 transition-colors flex flex-col">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-5 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-2">
                <span className="bg-indigo-500 text-white w-7 h-7 rounded flex items-center justify-center mr-3 text-sm shadow-md">4</span>
                NOT with BETWEEN
              </h3>
              <p className="text-indigo-700 dark:text-indigo-400 font-medium text-sm">❓ Students NOT scoring between 50 and 90</p>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE Marks NOT BETWEEN 50 AND 90;`} />
              <div className="mt-auto">
                <DataTable
                  headers={['StudentID', 'Name', 'Marks', 'City']}
                  rows={[
                    ['2', 'Divya', '92', 'Madurai'],
                    ['3', 'Kiran', '40', 'Chennai'],
                    ['5', 'Rahul', '35', 'Madurai'],
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Example 5 */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-indigo-500 transition-colors flex flex-col">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-5 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-2">
                <span className="bg-indigo-500 text-white w-7 h-7 rounded flex items-center justify-center mr-3 text-sm shadow-md">5</span>
                NOT with LIKE
              </h3>
              <p className="text-indigo-700 dark:text-indigo-400 font-medium text-sm">❓ Students whose name does NOT start with 'A'</p>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE Name NOT LIKE 'A%';`} />
              <div className="mt-auto">
                {/* Simulated partial output to save vertical space but represent reality */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/30 rounded-xl flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                  <p className="text-emerald-800 dark:text-emerald-400 font-medium text-sm">Output excludes 'Arun' and successfully returns 'Divya', 'Kiran', 'Meena', and 'Rahul'.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Behind the Scenes & Performance */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Internals */}
        <div className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <BrainCircuit className="w-7 h-7 mr-3 text-purple-400" /> 🧠 How SQL Internally Thinks
          </h2>
          <div className="space-y-6 relative z-10">
            <p className="text-gray-300 font-medium mb-2">When SQL sees:</p>
            <code className="block bg-black/50 border border-gray-700 p-3 rounded-xl text-rose-400 font-mono text-sm">WHERE <strong>NOT</strong> Marks &gt; 80</code>

            <div className="flex justify-center py-2">
              <ArrowRight className="text-purple-500 w-8 h-8 rotate-90 lg:rotate-0" />
            </div>

            <p className="text-gray-300 font-medium mb-2">It converts it logically to:</p>
            <code className="block bg-black/50 border border-purple-500/30 p-3 rounded-xl text-emerald-400 font-mono text-sm">WHERE Marks <strong>&lt;=</strong> 80</code>

            <div className="mt-6 p-4 bg-rose-900/20 border border-rose-800/50 rounded-xl flex items-start">
              <AlertTriangle className="w-5 h-5 text-rose-400 mr-3 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <strong className="text-rose-400 block mb-1">⚠ Important:</strong>
                Sometimes using the direct opposite condition is more readable and faster to process.
              </p>
            </div>
          </div>
        </div>

        {/* Performance tip */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-900/10 p-8 rounded-3xl shadow-sm border border-emerald-200 dark:border-emerald-800/30 relative flex flex-col justify-center transition-colors hover:border-emerald-400">
          <div className="absolute top-4 right-4 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" /> Very Important For Your Course
          </div>
          <h2 className="text-2xl font-bold flex items-center text-emerald-900 dark:text-emerald-400 mb-6 mt-4">
            <Zap className="w-7 h-7 mr-3 text-emerald-500 fill-emerald-500/20" /> 🚀 Performance Tip
          </h2>

          <div className="flex flex-col space-y-4 mb-6 relative z-10 w-full">
            <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl border border-rose-200 dark:border-rose-900/30">
              <div className="flex-1 text-sm font-bold text-gray-500 dark:text-gray-400">Instead of:</div>
              <code className="text-sm text-rose-600 dark:text-rose-400 font-mono">WHERE NOT Marks &gt; 80</code>
            </div>
            <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl border border-emerald-300 dark:border-emerald-600 ring-2 ring-emerald-500/20">
              <div className="flex-1 text-sm font-bold text-emerald-600 dark:text-emerald-400">Better write:</div>
              <code className="text-sm text-emerald-600 dark:text-emerald-400 font-mono font-bold">WHERE Marks &lt;= 80</code>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-black/20 p-5 rounded-2xl">
            <p className="font-bold text-emerald-900 dark:text-emerald-400 mb-3">Why?</p>
            <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-300 font-medium">
              <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> More readable</li>
              <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Optimizer-friendly</li>
              <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Better index usage</li>
              <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Cleaner execution plan</li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <span className="inline-block bg-emerald-600 text-white font-black px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/30 transform -rotate-2 text-lg">
              👉 Teach students that clarity &gt; cleverness
            </span>
          </div>
        </div>

      </section>

      {/* Common Mistakes */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
          <AlertTriangle className="w-7 h-7 mr-3 text-amber-500" /> ⚠️ Common Mistakes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-3xl border border-rose-200 dark:border-rose-900/30 transition-transform hover:-translate-y-1">
            <h3 className="font-bold text-rose-900 dark:text-rose-400 text-lg mb-4 flex items-center">
              <XCircle className="w-5 h-5 mr-2 text-rose-500" /> Mistake 1 – Using NOT without understanding NULL
            </h3>
            <code className="block bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700 text-rose-600 dark:text-rose-400 font-mono text-sm mb-4">
              WHERE <strong>NOT</strong> Marks = 80
            </code>
            <p className="text-rose-800 dark:text-rose-300 font-medium text-sm mb-4">
              If Marks contains NULL, it will NOT behave as expected. NULL is an unknown state. The opposite of Unknown is still Unknown!
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-emerald-500 shadow-sm flex items-center justify-between">
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Better:</span>
              <code className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">WHERE Marks &lt;&gt; 80</code>
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-3xl border border-rose-200 dark:border-rose-900/30 transition-transform hover:-translate-y-1">
            <h3 className="font-bold text-rose-900 dark:text-rose-400 text-lg mb-4 flex items-center">
              <XCircle className="w-5 h-5 mr-2 text-rose-500" /> Mistake 2 – Confusing NOT IN with NULL values
            </h3>
            <p className="text-rose-800 dark:text-rose-300 font-medium text-sm mb-4">
              If a subquery inside NOT IN returns even a single NULL value, the entire WHERE condition evaluates to UNKNOWN, returning zero rows.
            </p>
            <code className="block bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-mono text-sm mb-6">
              WHERE ID NOT IN (SELECT ID FROM table2)
            </code>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/50 flex items-start">
              <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2 shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-800 dark:text-emerald-300 font-bold">
                Professional Tip: Use NOT EXISTS instead of NOT IN for subqueries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operator Comparison */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <ToggleLeft className="w-7 h-7 mr-3 text-indigo-500" /> 🆚 NOT vs &lt;&gt; (Comparison)
          </h2>

          <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 font-bold">
                <tr>
                  <th className="px-6 py-4">Operator</th>
                  <th className="px-6 py-4">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 font-mono text-indigo-600 dark:text-indigo-400 font-bold">NOT condition</td>
                  <td className="px-6 py-4 font-medium text-gray-600 dark:text-gray-400">Reverses the full logical block</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-mono text-emerald-600 dark:text-emerald-400 font-bold">&lt;&gt; or !=</td>
                  <td className="px-6 py-4 font-medium text-gray-600 dark:text-gray-400">Directly compares two specific values as "Not Equal"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-2xl border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-3">Example:</p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <code className="text-sm text-emerald-600 dark:text-emerald-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm whitespace-nowrap">
                WHERE Marks &lt;&gt; 80
              </code>
              <span className="text-gray-400 font-bold italic text-sm">is cleaner than</span>
              <code className="text-sm text-rose-500 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm whitespace-nowrap">
                WHERE NOT Marks = 80
              </code>
            </div>
          </div>
        </div>

        {/* Real World Scenario */}
        <div className="lg:col-span-5 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-900/10 p-8 rounded-3xl shadow-sm border border-rose-200 dark:border-rose-900/30 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-bl-full -z-10"></div>
          <h2 className="text-xl font-bold flex items-center text-rose-900 dark:text-rose-400 mb-6 relative z-10">
            <HeartPulseIcon className="w-6 h-6 mr-3 text-rose-500" /> 🧩 Real-World Scenario
          </h2>
          <p className="text-rose-800 dark:text-rose-300 font-medium text-sm mb-6">
            Imagine your <strong className="text-rose-900 dark:text-rose-200">LifeLink AI</strong> blood bank project. You want to retrieve donors, except those with relatively rare 'O-' blood that needs special handling logic.
          </p>

          <div className="space-y-4 relative z-10">
            <div>
              <p className="text-xs font-bold text-rose-700/70 dark:text-rose-400/70 uppercase tracking-widest mb-1.5 pl-2">Poor Syntax</p>
              <code className="block bg-white/60 dark:bg-rose-950/50 p-3 rounded-xl border border-rose-200 dark:border-rose-900 text-sm font-mono text-gray-500">
                SELECT * FROM Donors <br />WHERE <strong className="text-rose-500">NOT BloodGroup =</strong> 'O-';
              </code>
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-700/70 dark:text-emerald-400/70 uppercase tracking-widest mb-1.5 pl-2">Professional Syntax</p>
              <code className="block bg-white dark:bg-gray-800 p-3 rounded-xl border border-emerald-300 dark:border-emerald-700 text-sm font-mono text-emerald-700 dark:text-emerald-400 ring-2 ring-emerald-500/20 shadow-sm">
                SELECT * FROM Donors <br />WHERE <strong>BloodGroup &lt;&gt;</strong> 'O-';
              </code>
            </div>
          </div>
          <p className="text-center mt-6 text-sm font-bold text-rose-900 dark:text-rose-300 italic">Cleaner. More professional.</p>
        </div>
      </section>

      {/* Advanced Concept & Developer Advice */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Advanced NOT EXISTS */}
        <div className="bg-gray-900 text-gray-100 p-8 rounded-3xl shadow-xl relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>
          <h2 className="text-2xl font-black text-white mb-6 flex items-center relative z-10">
            <Server className="w-7 h-7 mr-3 text-blue-400" /> 🎓 Advanced Concept
          </h2>
          <div className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30 mb-6 uppercase tracking-widest relative z-10">
            NOT EXISTS Operator
          </div>
          <p className="text-gray-400 font-medium text-sm mb-6 relative z-10">
            Used heavily in enterprise systems for identifying records in one table that have absolutely no corresponding trace in an associated table. Vastly superior to NOT IN for large datasets.
          </p>
          <div className="relative z-10">
            <CodeSnippetBlock
              codeSnippet={`SELECT Name\nFROM Students s\nWHERE NOT EXISTS (\n    SELECT 1\n    FROM Exams e\n    WHERE s.StudentID = e.StudentID\n);`}
            />
          </div>
        </div>

        {/* Developer Advice */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col relative overflow-hidden transition-colors hover:border-indigo-500">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-8 relative z-10">
            <GraduationCap className="w-8 h-8 mr-3 text-indigo-500" />
            <div>
              <span className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 mt-1">15+ Years Experience</span>
              Developer Advice
            </div>
          </h2>

          <div className="space-y-4 flex-1 relative z-10">
            <div className="flex items-start bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
              <ShieldAlert className="w-6 h-6 text-indigo-500 mr-3 shrink-0" />
              <div>
                <h4 className="font-bold text-indigo-900 dark:text-indigo-400 mb-1">Avoid overusing NOT.</h4>
                <p className="text-sm text-indigo-800 dark:text-indigo-300 font-medium">Prefer positive logic whenever possible. It's much easier for human brains to parse."</p>
              </div>
            </div>

            <div className="flex items-start bg-rose-50 dark:bg-rose-900/10 p-4 rounded-2xl border border-rose-100 dark:border-rose-900/30">
              <Database className="w-6 h-6 text-rose-500 mr-3 shrink-0" />
              <div>
                <h4 className="font-bold text-rose-900 dark:text-rose-400 mb-1">Always consider NULL behavior.</h4>
                <p className="text-sm text-rose-800 dark:text-rose-300 font-medium">Logical negation acts strangely with `NULL` states. An unknown state negates to an unknown state.</p>
              </div>
            </div>

            <div className="flex items-start bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
              <Zap className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
              <div>
                <h4 className="font-bold text-emerald-900 dark:text-emerald-400 mb-1">Use NOT EXISTS vs NOT IN</h4>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">For professional subqueries, EXISTS is practically a standard mandate for performance and safety.</p>
              </div>
            </div>

            <div className="flex items-start bg-amber-50 dark:bg-amber-900/10 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/30">
              <Activity className="w-6 h-6 text-amber-500 mr-3 shrink-0" />
              <div>
                <h4 className="font-bold text-amber-900 dark:text-amber-400 mb-1">Test with edge cases.</h4>
                <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">Always throw extreme bounds at your reverse logic filters to verify bounds.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Teaching recommendation at bottom */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-1 relative overflow-hidden shadow-2xl">
          <div className="bg-gray-900 rounded-[22px] p-8 flex flex-col md:flex-row items-center gap-8 relative z-10 h-full w-full">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center md:justify-start">
                <Target className="w-6 h-6 mr-3 text-indigo-400" /> Teaching Recommendation
              </h3>
              <p className="text-gray-400 font-medium text-sm">Since you're building a structured SQL course, incrementally present the NOT operator concepts systematically to avoid overwhelming students.</p>
            </div>
            <div className="flex-1 w-full bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded border border-indigo-500/30">1. Basic NOT</span>
                <span className="text-gray-600 flex items-center">➜</span>
                <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded border border-indigo-500/30">2. w/ Comparison</span>
                <span className="text-gray-600 flex items-center">➜</span>
                <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded border border-indigo-500/30">3. NOT IN</span>
                <span className="text-gray-600 flex items-center">➜</span>
                <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded border border-indigo-500/30">4. NOT BETWEEN</span>
                <span className="text-gray-600 flex items-center">➜</span>
                <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded border border-indigo-500/30">5. NOT LIKE</span>
                <span className="text-gray-600 flex items-center">➜</span>
                <span className="bg-purple-500/30 text-purple-300 text-xs font-bold px-3 py-1.5 rounded border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]">6. NOT EXISTS (Adv)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

// Simple standalone icon definition since we need it in the middle of a custom icon
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

export default SqlNotNull;